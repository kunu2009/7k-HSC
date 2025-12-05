import React, { useState, useEffect, useMemo } from 'react';
import { Calendar, TrendingUp, TrendingDown, Clock, BookOpen, CheckCircle, Star, Flame, Target, X, ChevronLeft, ChevronRight, Award, Brain, Zap, BarChart3, Sparkles } from 'lucide-react';
import { Subject } from '../types';

interface WeeklyReportProps {
  subjects: Subject[];
  onClose?: () => void;
}

interface DailyStats {
  date: string;
  dayName: string;
  minutesStudied: number;
  chaptersCompleted: number;
  mcqsAttempted: number;
  mcqsCorrect: number;
  flashcardsReviewed: number;
  isActive: boolean;
}

interface WeeklyData {
  startDate: Date;
  endDate: Date;
  weekNumber: number;
  days: DailyStats[];
  totals: {
    minutesStudied: number;
    chaptersCompleted: number;
    mcqsAttempted: number;
    mcqsCorrect: number;
    flashcardsReviewed: number;
    activeDays: number;
  };
  averages: {
    dailyMinutes: number;
    mcqAccuracy: number;
  };
  improvements: {
    studyTimeChange: number; // percentage change from previous week
    accuracyChange: number;
  };
  topSubjects: { name: string; score: number }[];
  weakSubjects: { name: string; score: number }[];
  streak: number;
}

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const WeeklyReport: React.FC<WeeklyReportProps> = ({ subjects, onClose }) => {
  const [weekOffset, setWeekOffset] = useState(0); // 0 = current week, -1 = last week, etc.
  const [weeklyData, setWeeklyData] = useState<WeeklyData | null>(null);

  useEffect(() => {
    generateWeeklyReport();
  }, [weekOffset, subjects]);

  const getWeekDates = (offset: number): { start: Date; end: Date } => {
    const today = new Date();
    const currentDay = today.getDay();
    
    // Get start of week (Sunday)
    const start = new Date(today);
    start.setDate(today.getDate() - currentDay + (offset * 7));
    start.setHours(0, 0, 0, 0);
    
    // Get end of week (Saturday)
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    end.setHours(23, 59, 59, 999);
    
    return { start, end };
  };

  const generateWeeklyReport = () => {
    const { start, end } = getWeekDates(weekOffset);
    const days: DailyStats[] = [];
    
    // Get progress data
    const progressData = localStorage.getItem('7k-hsc-progress');
    const progress = progressData ? JSON.parse(progressData) : {};
    
    // Get study activity data
    const activityData = localStorage.getItem('7k-study-activity');
    const activity = activityData ? JSON.parse(activityData) : {};
    
    // Get streak data
    const streakData = localStorage.getItem('7k-study-streak');
    const streakInfo = streakData ? JSON.parse(streakData) : { currentStreak: 0 };
    
    // Process each day of the week
    const currentDate = new Date(start);
    while (currentDate <= end) {
      const dateStr = currentDate.toISOString().split('T')[0];
      const dayActivity = activity[dateStr] || {};
      
      // Aggregate progress for this day
      let dayMcqs = 0;
      let dayMcqsCorrect = 0;
      let dayFlashcards = 0;
      let dayChapters = 0;
      
      // Check progress entries for this day
      Object.entries(progress).forEach(([key, value]: [string, any]) => {
        if (value.lastAttempted && value.lastAttempted.startsWith(dateStr)) {
          dayMcqs += value.mcqTotal || 0;
          dayMcqsCorrect += value.mcqScore || 0;
          dayFlashcards += value.flashcardsViewed || 0;
          if (value.summaryRead || value.notesRead) dayChapters++;
        }
      });
      
      // Use activity data if available
      const minutesStudied = dayActivity.minutesStudied || 0;
      const flashcardsFromActivity = dayActivity.flashcardsReviewed || 0;
      const mcqsFromActivity = dayActivity.mcqsCompleted || 0;
      
      days.push({
        date: dateStr,
        dayName: DAYS[currentDate.getDay()],
        minutesStudied: minutesStudied || (dayMcqs > 0 || dayFlashcards > 0 ? 30 : 0), // Estimate if not tracked
        chaptersCompleted: dayChapters || dayActivity.chaptersStudied || 0,
        mcqsAttempted: Math.max(dayMcqs, mcqsFromActivity),
        mcqsCorrect: dayMcqsCorrect,
        flashcardsReviewed: Math.max(dayFlashcards, flashcardsFromActivity),
        isActive: (dayMcqs > 0 || dayFlashcards > 0 || minutesStudied > 0)
      });
      
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    // Calculate totals
    const totals = {
      minutesStudied: days.reduce((sum, d) => sum + d.minutesStudied, 0),
      chaptersCompleted: days.reduce((sum, d) => sum + d.chaptersCompleted, 0),
      mcqsAttempted: days.reduce((sum, d) => sum + d.mcqsAttempted, 0),
      mcqsCorrect: days.reduce((sum, d) => sum + d.mcqsCorrect, 0),
      flashcardsReviewed: days.reduce((sum, d) => sum + d.flashcardsReviewed, 0),
      activeDays: days.filter(d => d.isActive).length
    };
    
    // Calculate averages
    const averages = {
      dailyMinutes: totals.minutesStudied / 7,
      mcqAccuracy: totals.mcqsAttempted > 0 ? (totals.mcqsCorrect / totals.mcqsAttempted) * 100 : 0
    };
    
    // Get previous week data for comparison
    const prevWeek = getWeekDates(weekOffset - 1);
    let prevTotalMinutes = 0;
    let prevMcqsAttempted = 0;
    let prevMcqsCorrect = 0;
    
    const prevCurrentDate = new Date(prevWeek.start);
    while (prevCurrentDate <= prevWeek.end) {
      const dateStr = prevCurrentDate.toISOString().split('T')[0];
      const dayActivity = activity[dateStr] || {};
      prevTotalMinutes += dayActivity.minutesStudied || 0;
      prevMcqsAttempted += dayActivity.mcqsCompleted || 0;
      prevCurrentDate.setDate(prevCurrentDate.getDate() + 1);
    }
    
    // Calculate improvements
    const improvements = {
      studyTimeChange: prevTotalMinutes > 0 
        ? ((totals.minutesStudied - prevTotalMinutes) / prevTotalMinutes) * 100 
        : 0,
      accuracyChange: 0 // Would need historical accuracy data
    };
    
    // Analyze subject performance
    const subjectScores: { [key: string]: { total: number; correct: number } } = {};
    Object.entries(progress).forEach(([key, value]: [string, any]) => {
      if (value.lastAttempted) {
        const lastDate = new Date(value.lastAttempted);
        if (lastDate >= start && lastDate <= end) {
          // Find subject for this chapter
          subjects.forEach(subject => {
            subject.chapters.forEach(chapter => {
              if (chapter.id === key) {
                if (!subjectScores[subject.id]) {
                  subjectScores[subject.id] = { total: 0, correct: 0 };
                }
                subjectScores[subject.id].total += value.mcqTotal || 0;
                subjectScores[subject.id].correct += value.mcqScore || 0;
              }
            });
          });
        }
      }
    });
    
    // Sort subjects by performance
    const subjectList = Object.entries(subjectScores)
      .map(([id, scores]) => ({
        name: subjects.find(s => s.id === id)?.name || id,
        score: scores.total > 0 ? (scores.correct / scores.total) * 100 : 0
      }))
      .sort((a, b) => b.score - a.score);
    
    const topSubjects = subjectList.filter(s => s.score >= 70).slice(0, 3);
    const weakSubjects = subjectList.filter(s => s.score < 60).slice(0, 3);
    
    // Calculate week number
    const oneJan = new Date(start.getFullYear(), 0, 1);
    const weekNumber = Math.ceil((((start.getTime() - oneJan.getTime()) / 86400000) + oneJan.getDay() + 1) / 7);
    
    setWeeklyData({
      startDate: start,
      endDate: end,
      weekNumber,
      days,
      totals,
      averages,
      improvements,
      topSubjects,
      weakSubjects,
      streak: streakInfo.currentStreak || 0
    });
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getPerformanceEmoji = (): string => {
    if (!weeklyData) return '📊';
    const { totals, averages } = weeklyData;
    
    if (totals.activeDays >= 6 && averages.mcqAccuracy >= 80) return '🏆';
    if (totals.activeDays >= 5 && averages.mcqAccuracy >= 70) return '🌟';
    if (totals.activeDays >= 4 && averages.mcqAccuracy >= 60) return '💪';
    if (totals.activeDays >= 3) return '📈';
    return '🌱';
  };

  const getMotivationalMessage = (): string => {
    if (!weeklyData) return '';
    const { totals, averages } = weeklyData;
    
    if (totals.activeDays >= 6) {
      if (averages.mcqAccuracy >= 80) return "Outstanding week! You're exam-ready! 🎯";
      return "Amazing consistency! Keep that accuracy up! 💪";
    }
    if (totals.activeDays >= 4) {
      return "Good progress! Try to add 1-2 more study days next week.";
    }
    if (totals.activeDays >= 2) {
      return "You've started well. Let's aim for at least 4 active days next week!";
    }
    return "Every journey starts somewhere. Let's build consistency this week!";
  };

  if (!weeklyData) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition"
          >
            <X size={24} className="text-white" />
          </button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <BarChart3 size={28} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Weekly Report</h2>
              <p className="text-blue-100 text-sm">Your study progress summary</p>
            </div>
          </div>
          
          {/* Week Navigation */}
          <div className="flex items-center justify-between bg-white/20 backdrop-blur rounded-xl p-3">
            <button
              onClick={() => setWeekOffset(w => w - 1)}
              className="p-2 hover:bg-white/20 rounded-lg transition"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <div className="text-center">
              <p className="text-white font-bold">Week {weeklyData.weekNumber}</p>
              <p className="text-blue-100 text-xs">
                {formatDate(weeklyData.startDate)} - {formatDate(weeklyData.endDate)}
              </p>
            </div>
            <button
              onClick={() => setWeekOffset(w => w + 1)}
              disabled={weekOffset >= 0}
              className={`p-2 rounded-lg transition ${weekOffset >= 0 ? 'opacity-50' : 'hover:bg-white/20'}`}
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[65vh]">
          {/* Performance Overview */}
          <div className="text-center mb-6 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-2xl">
            <div className="text-5xl mb-2">{getPerformanceEmoji()}</div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
              {weeklyData.totals.activeDays}/7 Active Days
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              {getMotivationalMessage()}
            </p>
          </div>

          {/* Daily Activity Chart */}
          <div className="mb-6">
            <h4 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
              <Calendar size={18} className="text-blue-500" />
              Daily Activity
            </h4>
            <div className="flex gap-2">
              {weeklyData.days.map((day, idx) => {
                const maxMinutes = Math.max(...weeklyData.days.map(d => d.minutesStudied), 1);
                const height = (day.minutesStudied / maxMinutes) * 100;
                const today = new Date().toISOString().split('T')[0];
                const isToday = day.date === today;
                
                return (
                  <div key={idx} className="flex-1 flex flex-col items-center">
                    <div className="h-24 w-full flex items-end justify-center mb-2">
                      <div
                        className={`w-full max-w-[40px] rounded-t-lg transition-all ${
                          day.isActive 
                            ? 'bg-gradient-to-t from-blue-500 to-indigo-500' 
                            : 'bg-slate-200 dark:bg-slate-700'
                        } ${isToday ? 'ring-2 ring-amber-400 ring-offset-2 dark:ring-offset-slate-900' : ''}`}
                        style={{ height: `${Math.max(height, 10)}%` }}
                        title={`${day.minutesStudied} mins`}
                      />
                    </div>
                    <span className={`text-xs font-medium ${
                      isToday 
                        ? 'text-amber-600 dark:text-amber-400' 
                        : 'text-slate-500 dark:text-slate-400'
                    }`}>
                      {day.dayName}
                    </span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500">
                      {day.minutesStudied}m
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <div className="p-4 bg-violet-50 dark:bg-violet-900/20 rounded-xl text-center">
              <Clock size={24} className="text-violet-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-slate-800 dark:text-white">
                {Math.floor(weeklyData.totals.minutesStudied / 60)}h {weeklyData.totals.minutesStudied % 60}m
              </p>
              <span className="text-xs text-slate-500 dark:text-slate-400">Total Study Time</span>
            </div>
            
            <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl text-center">
              <CheckCircle size={24} className="text-emerald-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-slate-800 dark:text-white">
                {weeklyData.totals.mcqsAttempted}
              </p>
              <span className="text-xs text-slate-500 dark:text-slate-400">MCQs Attempted</span>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
              <Brain size={24} className="text-blue-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-slate-800 dark:text-white">
                {weeklyData.totals.flashcardsReviewed}
              </p>
              <span className="text-xs text-slate-500 dark:text-slate-400">Cards Reviewed</span>
            </div>
            
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl text-center">
              <Target size={24} className="text-amber-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-slate-800 dark:text-white">
                {weeklyData.averages.mcqAccuracy.toFixed(0)}%
              </p>
              <span className="text-xs text-slate-500 dark:text-slate-400">MCQ Accuracy</span>
            </div>
          </div>

          {/* Comparison with Previous Week */}
          {weekOffset < 0 && (
            <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <h4 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                <TrendingUp size={18} className="text-emerald-500" />
                Compared to Previous Week
              </h4>
              <div className="flex items-center gap-4">
                <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                  weeklyData.improvements.studyTimeChange >= 0 
                    ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' 
                    : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                }`}>
                  {weeklyData.improvements.studyTimeChange >= 0 
                    ? <TrendingUp size={16} /> 
                    : <TrendingDown size={16} />}
                  <span className="font-medium">
                    {weeklyData.improvements.studyTimeChange >= 0 ? '+' : ''}
                    {weeklyData.improvements.studyTimeChange.toFixed(0)}% Study Time
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Top & Weak Subjects */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {weeklyData.topSubjects.length > 0 && (
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
                <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-3 flex items-center gap-2">
                  <Star size={16} />
                  Top Subjects
                </h4>
                <div className="space-y-2">
                  {weeklyData.topSubjects.map((sub, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-sm text-slate-700 dark:text-slate-300">{sub.name}</span>
                      <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                        {sub.score.toFixed(0)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {weeklyData.weakSubjects.length > 0 && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
                <h4 className="font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                  <Target size={16} />
                  Need Focus
                </h4>
                <div className="space-y-2">
                  {weeklyData.weakSubjects.map((sub, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-sm text-slate-700 dark:text-slate-300">{sub.name}</span>
                      <span className="text-sm font-bold text-red-600 dark:text-red-400">
                        {sub.score.toFixed(0)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Tips for Next Week */}
          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-100 dark:border-purple-800">
            <h4 className="font-bold text-purple-800 dark:text-purple-300 mb-3 flex items-center gap-2">
              <Sparkles size={18} />
              Tips for Next Week
            </h4>
            <ul className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
              {weeklyData.totals.activeDays < 5 && (
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Try to study at least 5 days next week for better retention</span>
                </li>
              )}
              {weeklyData.averages.mcqAccuracy < 70 && (
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Review flashcards before attempting MCQs to improve accuracy</span>
                </li>
              )}
              {weeklyData.totals.flashcardsReviewed < 100 && (
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Aim for 20+ flashcard reviews daily using spaced repetition</span>
                </li>
              )}
              {weeklyData.totals.minutesStudied < 420 && (
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Try to study for at least 1 hour daily (7 hours/week)</span>
                </li>
              )}
              {weeklyData.weakSubjects.length > 0 && (
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>Focus extra time on {weeklyData.weakSubjects[0]?.name} to improve scores</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyReport;
