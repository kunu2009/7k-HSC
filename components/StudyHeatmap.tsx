import React, { useState, useEffect, useMemo } from 'react';
import { Calendar, Flame, Target, TrendingUp, X, ChevronLeft, ChevronRight, BookOpen, CheckCircle, Brain, Zap } from 'lucide-react';

interface StudyHeatmapProps {
  onClose?: () => void;
}

interface DayActivity {
  date: string; // YYYY-MM-DD
  flashcardsReviewed: number;
  mcqsCompleted: number;
  chaptersStudied: number;
  minutesStudied: number;
  totalScore: number; // Calculated activity score
}

interface StudyRecord {
  date: string;
  activities: {
    flashcards?: number;
    mcqs?: number;
    chapters?: string[];
    minutes?: number;
  };
}

const STORAGE_KEY = '7k-study-activity';

const StudyHeatmap: React.FC<StudyHeatmapProps> = ({ onClose }) => {
  const [activityData, setActivityData] = useState<Map<string, DayActivity>>(new Map());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [viewYear, setViewYear] = useState(new Date().getFullYear());
  const [hoveredDate, setHoveredDate] = useState<string | null>(null);

  // Load activity data from localStorage
  useEffect(() => {
    loadActivityData();
    // Also aggregate data from other storage keys
    aggregateAllActivityData();
  }, []);

  const loadActivityData = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      setActivityData(new Map(Object.entries(parsed)));
    }
  };

  // Aggregate activity from various app features
  const aggregateAllActivityData = () => {
    const activity = new Map<string, DayActivity>();
    const today = new Date().toISOString().split('T')[0];

    // Get progress data
    const progressData = localStorage.getItem('7k-hsc-progress');
    if (progressData) {
      const progress = JSON.parse(progressData);
      Object.entries(progress).forEach(([key, value]: [string, any]) => {
        if (value.lastAttempted) {
          const date = value.lastAttempted.split('T')[0];
          const existing = activity.get(date) || createEmptyDay(date);
          existing.mcqsCompleted += value.mcqScore || 0;
          existing.flashcardsReviewed += value.flashcardsViewed || 0;
          if (value.summaryRead) existing.chaptersStudied += 1;
          activity.set(date, existing);
        }
      });
    }

    // Get study streak data
    const streakData = localStorage.getItem('7k-study-streak');
    if (streakData) {
      const streak = JSON.parse(streakData);
      if (streak.studyDays) {
        streak.studyDays.forEach((dateStr: string) => {
          const existing = activity.get(dateStr) || createEmptyDay(dateStr);
          if (existing.totalScore === 0) {
            existing.minutesStudied = 30; // Assume at least 30 mins if marked as study day
          }
          activity.set(dateStr, existing);
        });
      }
    }

    // Get pomodoro data
    const pomodoroData = localStorage.getItem('7k-pomodoro-stats');
    if (pomodoroData) {
      const pomodoro = JSON.parse(pomodoroData);
      if (pomodoro.sessions) {
        pomodoro.sessions.forEach((session: any) => {
          if (session.date) {
            const date = session.date.split('T')[0];
            const existing = activity.get(date) || createEmptyDay(date);
            existing.minutesStudied += session.duration || 25;
            activity.set(date, existing);
          }
        });
      }
    }

    // Get SRS review data
    const srsData = localStorage.getItem('7k-srs-cards');
    if (srsData) {
      const cards = JSON.parse(srsData);
      cards.forEach((card: any) => {
        if (card.lastReview) {
          const date = card.lastReview.split('T')[0];
          const existing = activity.get(date) || createEmptyDay(date);
          existing.flashcardsReviewed += 1;
          activity.set(date, existing);
        }
      });
    }

    // Calculate total scores
    activity.forEach((day, date) => {
      day.totalScore = calculateDayScore(day);
      activity.set(date, day);
    });

    // Merge with existing data
    const existingStored = localStorage.getItem(STORAGE_KEY);
    const existingData = existingStored ? new Map(Object.entries(JSON.parse(existingStored))) : new Map();
    
    activity.forEach((value, key) => {
      const existing = existingData.get(key) as DayActivity | undefined;
      if (existing) {
        value.flashcardsReviewed = Math.max(value.flashcardsReviewed, existing.flashcardsReviewed || 0);
        value.mcqsCompleted = Math.max(value.mcqsCompleted, existing.mcqsCompleted || 0);
        value.chaptersStudied = Math.max(value.chaptersStudied, existing.chaptersStudied || 0);
        value.minutesStudied = Math.max(value.minutesStudied, existing.minutesStudied || 0);
        value.totalScore = calculateDayScore(value);
      }
    });

    setActivityData(activity);
    
    // Save merged data
    const saveObj: { [key: string]: DayActivity } = {};
    activity.forEach((value, key) => {
      saveObj[key] = value;
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saveObj));
  };

  const createEmptyDay = (date: string): DayActivity => ({
    date,
    flashcardsReviewed: 0,
    mcqsCompleted: 0,
    chaptersStudied: 0,
    minutesStudied: 0,
    totalScore: 0
  });

  const calculateDayScore = (day: DayActivity): number => {
    // Weighted score: flashcards (1), mcqs (2), chapters (5), 30 mins study (3)
    return (
      day.flashcardsReviewed * 1 +
      day.mcqsCompleted * 2 +
      day.chaptersStudied * 5 +
      Math.floor(day.minutesStudied / 30) * 3
    );
  };

  // Get intensity level (0-4) based on activity score
  const getIntensityLevel = (score: number): number => {
    if (score === 0) return 0;
    if (score <= 5) return 1;
    if (score <= 15) return 2;
    if (score <= 30) return 3;
    return 4;
  };

  // Generate calendar data for the year
  const calendarData = useMemo(() => {
    const data: { date: Date; activity: DayActivity | null; level: number }[][] = [];
    const startDate = new Date(viewYear, 0, 1);
    const endDate = new Date(viewYear, 11, 31);
    
    // Adjust start to previous Sunday
    const start = new Date(startDate);
    start.setDate(start.getDate() - start.getDay());
    
    let currentWeek: { date: Date; activity: DayActivity | null; level: number }[] = [];
    let currentDate = new Date(start);
    
    while (currentDate <= endDate || currentWeek.length > 0) {
      const dateStr = currentDate.toISOString().split('T')[0];
      const activity = activityData.get(dateStr) || null;
      const level = activity ? getIntensityLevel(activity.totalScore) : 0;
      
      // Only include dates within the year
      if (currentDate.getFullYear() === viewYear) {
        currentWeek.push({
          date: new Date(currentDate),
          activity,
          level
        });
      } else if (currentDate < startDate) {
        // Padding before year starts
        currentWeek.push({
          date: new Date(currentDate),
          activity: null,
          level: -1 // Mark as outside year
        });
      }
      
      if (currentWeek.length === 7) {
        data.push(currentWeek);
        currentWeek = [];
      }
      
      currentDate.setDate(currentDate.getDate() + 1);
      
      // Break if we've gone past the year
      if (currentDate.getFullYear() > viewYear && currentWeek.length === 0) break;
    }
    
    // Add any remaining days
    if (currentWeek.length > 0) {
      data.push(currentWeek);
    }
    
    return data;
  }, [activityData, viewYear]);

  // Calculate streak
  const currentStreak = useMemo(() => {
    const today = new Date();
    let streak = 0;
    let checkDate = new Date(today);
    
    while (true) {
      const dateStr = checkDate.toISOString().split('T')[0];
      const activity = activityData.get(dateStr);
      
      if (activity && activity.totalScore > 0) {
        streak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else if (dateStr === today.toISOString().split('T')[0]) {
        // Today hasn't been tracked yet, check yesterday
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }
    
    return streak;
  }, [activityData]);

  // Calculate total stats
  const totalStats = useMemo(() => {
    let totalDays = 0;
    let totalFlashcards = 0;
    let totalMcqs = 0;
    let totalChapters = 0;
    let totalMinutes = 0;
    
    activityData.forEach(day => {
      if (day.totalScore > 0) {
        totalDays++;
        totalFlashcards += day.flashcardsReviewed;
        totalMcqs += day.mcqsCompleted;
        totalChapters += day.chaptersStudied;
        totalMinutes += day.minutesStudied;
      }
    });
    
    return { totalDays, totalFlashcards, totalMcqs, totalChapters, totalMinutes };
  }, [activityData]);

  // Get color for intensity level
  const getColor = (level: number, isToday: boolean = false): string => {
    if (level === -1) return 'bg-transparent';
    if (isToday) return level === 0 
      ? 'bg-slate-200 dark:bg-slate-700 ring-2 ring-indigo-500' 
      : `${['bg-slate-100', 'bg-emerald-200', 'bg-emerald-400', 'bg-emerald-500', 'bg-emerald-600'][level]} ring-2 ring-indigo-500`;
    return ['bg-slate-100 dark:bg-slate-800', 'bg-emerald-200 dark:bg-emerald-900', 'bg-emerald-400 dark:bg-emerald-700', 'bg-emerald-500 dark:bg-emerald-600', 'bg-emerald-600 dark:bg-emerald-500'][level];
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition"
          >
            <X size={24} className="text-white" />
          </button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Calendar size={28} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Study Heatmap</h2>
              <p className="text-emerald-100 text-sm">Track your consistency like a pro</p>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-3 mt-4">
            <div className="bg-white/20 backdrop-blur rounded-xl p-3 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Flame size={16} className="text-orange-300" />
                <span className="text-2xl font-bold text-white">{currentStreak}</span>
              </div>
              <span className="text-emerald-100 text-xs">Day Streak</span>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-xl p-3 text-center">
              <div className="text-2xl font-bold text-white">{totalStats.totalDays}</div>
              <span className="text-emerald-100 text-xs">Active Days</span>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-xl p-3 text-center">
              <div className="text-2xl font-bold text-white">{totalStats.totalFlashcards}</div>
              <span className="text-emerald-100 text-xs">Cards Reviewed</span>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-xl p-3 text-center">
              <div className="text-2xl font-bold text-white">{totalStats.totalMcqs}</div>
              <span className="text-emerald-100 text-xs">MCQs Done</span>
            </div>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {/* Year Selector */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setViewYear(v => v - 1)}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
            >
              <ChevronLeft size={20} className="text-slate-600 dark:text-slate-300" />
            </button>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">{viewYear}</h3>
            <button
              onClick={() => setViewYear(v => v + 1)}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
              disabled={viewYear >= new Date().getFullYear()}
            >
              <ChevronRight size={20} className={viewYear >= new Date().getFullYear() ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'} />
            </button>
          </div>

          {/* Heatmap Grid */}
          <div className="overflow-x-auto pb-4">
            <div className="min-w-[800px]">
              {/* Month Labels */}
              <div className="flex mb-2 pl-8">
                {months.map((month, idx) => (
                  <div 
                    key={month} 
                    className="text-xs text-slate-500 dark:text-slate-400 font-medium"
                    style={{ width: `${100/12}%` }}
                  >
                    {month}
                  </div>
                ))}
              </div>

              {/* Grid with Day Labels */}
              <div className="flex">
                {/* Day Labels */}
                <div className="flex flex-col gap-[3px] mr-2 pt-0">
                  {days.map((day, idx) => (
                    <div 
                      key={day}
                      className="h-[12px] text-[10px] text-slate-400 dark:text-slate-500 flex items-center"
                      style={{ visibility: idx % 2 === 1 ? 'visible' : 'hidden' }}
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Heatmap Squares */}
                <div className="flex gap-[3px] flex-1">
                  {calendarData.map((week, weekIdx) => (
                    <div key={weekIdx} className="flex flex-col gap-[3px]">
                      {week.map((day, dayIdx) => {
                        const dateStr = day.date.toISOString().split('T')[0];
                        const isToday = dateStr === today;
                        const isFuture = day.date > new Date();
                        
                        return (
                          <div
                            key={dayIdx}
                            className={`w-[12px] h-[12px] rounded-sm cursor-pointer transition-transform hover:scale-125 ${
                              day.level === -1 
                                ? 'bg-transparent' 
                                : isFuture 
                                  ? 'bg-slate-50 dark:bg-slate-900' 
                                  : getColor(day.level, isToday)
                            }`}
                            onMouseEnter={() => setHoveredDate(dateStr)}
                            onMouseLeave={() => setHoveredDate(null)}
                            onClick={() => setSelectedDate(dateStr === selectedDate ? null : dateStr)}
                            title={day.activity ? `${dateStr}: ${day.activity.totalScore} activity points` : dateStr}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-500 dark:text-slate-400">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map(level => (
              <div
                key={level}
                className={`w-[12px] h-[12px] rounded-sm ${getColor(level)}`}
              />
            ))}
            <span>More</span>
          </div>

          {/* Tooltip / Selected Day Details */}
          {(hoveredDate || selectedDate) && (
            <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <h4 className="font-bold text-slate-700 dark:text-slate-200 mb-3">
                {new Date(hoveredDate || selectedDate || '').toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </h4>
              
              {activityData.get(hoveredDate || selectedDate || '') ? (
                <div className="grid grid-cols-4 gap-3">
                  <div className="bg-white dark:bg-slate-700 p-3 rounded-lg text-center">
                    <Brain size={18} className="text-violet-500 mx-auto mb-1" />
                    <div className="text-lg font-bold text-slate-800 dark:text-white">
                      {activityData.get(hoveredDate || selectedDate || '')?.flashcardsReviewed || 0}
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Flashcards</span>
                  </div>
                  <div className="bg-white dark:bg-slate-700 p-3 rounded-lg text-center">
                    <CheckCircle size={18} className="text-emerald-500 mx-auto mb-1" />
                    <div className="text-lg font-bold text-slate-800 dark:text-white">
                      {activityData.get(hoveredDate || selectedDate || '')?.mcqsCompleted || 0}
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400">MCQs</span>
                  </div>
                  <div className="bg-white dark:bg-slate-700 p-3 rounded-lg text-center">
                    <BookOpen size={18} className="text-blue-500 mx-auto mb-1" />
                    <div className="text-lg font-bold text-slate-800 dark:text-white">
                      {activityData.get(hoveredDate || selectedDate || '')?.chaptersStudied || 0}
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Chapters</span>
                  </div>
                  <div className="bg-white dark:bg-slate-700 p-3 rounded-lg text-center">
                    <Zap size={18} className="text-amber-500 mx-auto mb-1" />
                    <div className="text-lg font-bold text-slate-800 dark:text-white">
                      {activityData.get(hoveredDate || selectedDate || '')?.minutesStudied || 0}
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Minutes</span>
                  </div>
                </div>
              ) : (
                <p className="text-slate-400 dark:text-slate-500 text-center py-4">
                  No activity recorded for this day
                </p>
              )}
            </div>
          )}

          {/* Motivational Message */}
          <div className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                <Target size={20} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-1">
                  {currentStreak >= 7 
                    ? "🔥 You're on fire!" 
                    : currentStreak >= 3 
                      ? "💪 Great momentum!" 
                      : "🌱 Build your streak!"}
                </h4>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">
                  {currentStreak >= 7 
                    ? `${currentStreak} days of consistent study! Keep going strong!` 
                    : currentStreak >= 3 
                      ? `${currentStreak} day streak! A few more days and you'll be unstoppable.` 
                      : "Study today to start or continue your streak. Consistency is key!"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyHeatmap;
