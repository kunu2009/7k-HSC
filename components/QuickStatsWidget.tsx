import React, { useState, useEffect, useMemo } from 'react';
import { Clock, Flame, Target, AlertTriangle, BookOpen, TrendingUp, Calendar, Zap, ChevronRight, Brain } from 'lucide-react';
import { Subject } from '../types';
import { db } from '../services/localDb';

interface QuickStatsWidgetProps {
  subjects: Subject[];
  onOpenWeakness?: () => void;
  onOpenHeatmap?: () => void;
  onOpenWeeklyReport?: () => void;
}

interface QuickStats {
  daysToExam: number;
  currentStreak: number;
  todayProgress: number; // percentage
  weeklyProgress: number; // percentage
  weakSubjectsCount: number;
  weakSubjects: string[];
  todayMinutes: number;
  todayMcqs: number;
  todayFlashcards: number;
}

// HSC Board dates
const PRELIMS_DATE = new Date(2026, 0, 15); // Jan 15, 2026
const BOARDS_DATE = new Date(2026, 1, 21); // Feb 21, 2026

const QuickStatsWidget: React.FC<QuickStatsWidgetProps> = ({ 
  subjects, 
  onOpenWeakness, 
  onOpenHeatmap,
  onOpenWeeklyReport 
}) => {
  const [stats, setStats] = useState<QuickStats>({
    daysToExam: 0,
    currentStreak: 0,
    todayProgress: 0,
    weeklyProgress: 0,
    weakSubjectsCount: 0,
    weakSubjects: [],
    todayMinutes: 0,
    todayMcqs: 0,
    todayFlashcards: 0
  });

  useEffect(() => {
    calculateStats();
    // Refresh stats every minute
    const interval = setInterval(calculateStats, 60000);
    return () => clearInterval(interval);
  }, [subjects]);

  const calculateStats = () => {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    
    // Days to exam
    const daysToExam = Math.ceil((BOARDS_DATE.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    // Get streak data
    const streakData = localStorage.getItem('7k-study-streak');
    const streakInfo = streakData ? JSON.parse(streakData) : { currentStreak: 0 };
    
    // Get activity data
    const activityData = localStorage.getItem('7k-study-activity');
    const activity = activityData ? JSON.parse(activityData) : {};
    const todayActivity = activity[todayStr] || {};
    
    // Get progress data
    const progressData = localStorage.getItem('7k-hsc-progress');
    const progress = progressData ? JSON.parse(progressData) : {};
    
    // Calculate today's progress from progress data
    let todayMcqs = todayActivity.mcqsCompleted || 0;
    let todayFlashcards = todayActivity.flashcardsReviewed || 0;
    let todayMinutes = todayActivity.minutesStudied || 0;
    
    // Add from progress entries updated today
    Object.entries(progress).forEach(([key, value]: [string, any]) => {
      if (value.lastAttempted && value.lastAttempted.startsWith(todayStr)) {
        todayMcqs = Math.max(todayMcqs, value.mcqTotal || 0);
        todayFlashcards = Math.max(todayFlashcards, value.flashcardsViewed || 0);
      }
    });
    
    // Calculate today's progress percentage (target: 30 MCQs, 50 flashcards, 60 mins)
    const mcqProgress = Math.min((todayMcqs / 30) * 100, 100);
    const flashcardProgress = Math.min((todayFlashcards / 50) * 100, 100);
    const timeProgress = Math.min((todayMinutes / 60) * 100, 100);
    const todayProgress = Math.round((mcqProgress + flashcardProgress + timeProgress) / 3);
    
    // Calculate weekly progress
    let weeklyMcqs = 0;
    let weeklyFlashcards = 0;
    let weeklyMinutes = 0;
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - today.getDay());
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + i);
      const dateStr = date.toISOString().split('T')[0];
      const dayActivity = activity[dateStr] || {};
      weeklyMcqs += dayActivity.mcqsCompleted || 0;
      weeklyFlashcards += dayActivity.flashcardsReviewed || 0;
      weeklyMinutes += dayActivity.minutesStudied || 0;
    }
    
    // Weekly target: 200 MCQs, 300 flashcards, 7 hours
    const weeklyMcqProgress = Math.min((weeklyMcqs / 200) * 100, 100);
    const weeklyFlashcardProgress = Math.min((weeklyFlashcards / 300) * 100, 100);
    const weeklyTimeProgress = Math.min((weeklyMinutes / 420) * 100, 100);
    const weeklyProgress = Math.round((weeklyMcqProgress + weeklyFlashcardProgress + weeklyTimeProgress) / 3);
    
    // Find weak subjects
    const examMarks = db.getAllMarks();
    const weakSubjects: string[] = [];
    
    examMarks.forEach(mark => {
      if (mark.maxMarks > 0) {
        const percentage = (mark.obtainedMarks / mark.maxMarks) * 100;
        if (percentage < 60) {
          const subject = subjects.find(s => s.id === mark.subjectId);
          if (subject) {
            weakSubjects.push(subject.name);
          }
        }
      }
    });
    
    // Also check MCQ performance
    subjects.forEach(subject => {
      let totalMcqs = 0;
      let correctMcqs = 0;
      
      subject.chapters.forEach(chapter => {
        const chapterProgress = progress[chapter.id] || {};
        totalMcqs += chapterProgress.mcqTotal || 0;
        correctMcqs += chapterProgress.mcqScore || 0;
      });
      
      if (totalMcqs > 20) {
        const accuracy = (correctMcqs / totalMcqs) * 100;
        if (accuracy < 60 && !weakSubjects.includes(subject.name)) {
          weakSubjects.push(subject.name);
        }
      }
    });
    
    setStats({
      daysToExam: Math.max(daysToExam, 0),
      currentStreak: streakInfo.currentStreak || 0,
      todayProgress,
      weeklyProgress,
      weakSubjectsCount: weakSubjects.length,
      weakSubjects: weakSubjects.slice(0, 3),
      todayMinutes,
      todayMcqs,
      todayFlashcards
    });
  };

  const getUrgencyColor = (): string => {
    if (stats.daysToExam <= 30) return 'from-red-500 to-orange-500';
    if (stats.daysToExam <= 60) return 'from-orange-500 to-amber-500';
    return 'from-emerald-500 to-teal-500';
  };

  const getStreakEmoji = (): string => {
    if (stats.currentStreak >= 30) return '🏆';
    if (stats.currentStreak >= 14) return '🔥';
    if (stats.currentStreak >= 7) return '⚡';
    if (stats.currentStreak >= 3) return '🌟';
    return '🌱';
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden mb-6">
      {/* Top Section - Days to Exam */}
      <div className={`bg-gradient-to-r ${getUrgencyColor()} p-4 text-white`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-white/80 text-xs uppercase tracking-wider">HSC Boards</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black">{stats.daysToExam}</span>
                <span className="text-lg font-medium">days left</span>
              </div>
            </div>
          </div>
          
          {/* Streak */}
          <div className="text-right">
            <div className="flex items-center gap-2 justify-end">
              <span className="text-2xl">{getStreakEmoji()}</span>
              <div>
                <p className="text-white/80 text-xs">Streak</p>
                <p className="text-xl font-bold">{stats.currentStreak} days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section - Today's Progress */}
      <div className="p-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
            <Zap size={16} className="text-amber-500" />
            Today's Progress
          </h3>
          <span className="text-lg font-black text-indigo-600 dark:text-indigo-400">{stats.todayProgress}%</span>
        </div>
        
        {/* Progress Bar */}
        <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-3">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
            style={{ width: `${stats.todayProgress}%` }}
          />
        </div>
        
        {/* Today's Activity Mini Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="text-center p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <p className="text-lg font-bold text-slate-800 dark:text-white">{stats.todayMcqs}</p>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">MCQs</p>
          </div>
          <div className="text-center p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <p className="text-lg font-bold text-slate-800 dark:text-white">{stats.todayFlashcards}</p>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">Cards</p>
          </div>
          <div className="text-center p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <p className="text-lg font-bold text-slate-800 dark:text-white">{stats.todayMinutes}m</p>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">Study</p>
          </div>
        </div>
      </div>

      {/* Bottom Section - Quick Actions */}
      <div className="p-3 grid grid-cols-3 gap-2">
        {/* Weak Subjects Alert */}
        {stats.weakSubjectsCount > 0 && onOpenWeakness && (
          <button
            onClick={onOpenWeakness}
            className="col-span-3 flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-xl hover:bg-red-100 dark:hover:bg-red-900/30 transition group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/50 flex items-center justify-center">
                <AlertTriangle size={20} className="text-red-500" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-red-700 dark:text-red-400">
                  {stats.weakSubjectsCount} Weak Subject{stats.weakSubjectsCount > 1 ? 's' : ''}
                </p>
                <p className="text-xs text-red-600 dark:text-red-300">
                  {stats.weakSubjects.join(', ')}
                </p>
              </div>
            </div>
            <ChevronRight size={18} className="text-red-400 group-hover:translate-x-1 transition-transform" />
          </button>
        )}

        {/* Heatmap Button */}
        {onOpenHeatmap && (
          <button
            onClick={onOpenHeatmap}
            className="flex flex-col items-center justify-center p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition"
          >
            <Calendar size={20} className="text-emerald-500 mb-1" />
            <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">Heatmap</span>
          </button>
        )}

        {/* Weekly Report Button */}
        {onOpenWeeklyReport && (
          <button
            onClick={onOpenWeeklyReport}
            className="flex flex-col items-center justify-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition"
          >
            <TrendingUp size={20} className="text-blue-500 mb-1" />
            <span className="text-xs font-semibold text-blue-700 dark:text-blue-400">Weekly</span>
          </button>
        )}

        {/* Smart Analysis Button */}
        {onOpenWeakness && (
          <button
            onClick={onOpenWeakness}
            className="flex flex-col items-center justify-center p-3 bg-violet-50 dark:bg-violet-900/20 rounded-xl hover:bg-violet-100 dark:hover:bg-violet-900/30 transition"
          >
            <Brain size={20} className="text-violet-500 mb-1" />
            <span className="text-xs font-semibold text-violet-700 dark:text-violet-400">Analysis</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default QuickStatsWidget;
