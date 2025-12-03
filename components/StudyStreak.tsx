import React, { useState, useEffect, useMemo } from 'react';
import { Flame, Calendar, Trophy, Target, TrendingUp, Clock, BookOpen, Zap, Award, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface StudyStreakProps {
  onDateClick?: (date: Date) => void;
}

interface DayData {
  date: Date;
  minutes: number;
  sessions: number;
  chapters: number;
}

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  progress: number;
  target: number;
}

const StudyStreak: React.FC<StudyStreakProps> = ({ onDateClick }) => {
  const [studyData, setStudyData] = useState<Record<string, DayData>>({});
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [badges, setBadges] = useState<Badge[]>([]);

  // Load study data from localStorage
  useEffect(() => {
    const loadData = () => {
      const stored = localStorage.getItem('7k-study-streak-data');
      if (stored) {
        const parsed = JSON.parse(stored);
        setStudyData(parsed.days || {});
        setCurrentStreak(parsed.currentStreak || 0);
        setLongestStreak(parsed.longestStreak || 0);
        setTotalMinutes(parsed.totalMinutes || 0);
      }

      // Load badges
      const badgesStored = localStorage.getItem('7k-badges');
      if (badgesStored) {
        setBadges(JSON.parse(badgesStored));
      } else {
        // Initialize default badges
        const defaultBadges: Badge[] = [
          { id: 'first-session', name: 'First Steps', description: 'Complete your first study session', icon: '🎯', earned: false, progress: 0, target: 1 },
          { id: 'streak-3', name: '3-Day Streak', description: 'Study 3 days in a row', icon: '🔥', earned: false, progress: 0, target: 3 },
          { id: 'streak-7', name: 'Week Warrior', description: 'Study 7 days in a row', icon: '⚡', earned: false, progress: 0, target: 7 },
          { id: 'streak-30', name: 'Monthly Master', description: 'Study 30 days in a row', icon: '👑', earned: false, progress: 0, target: 30 },
          { id: 'chapters-10', name: 'Chapter Hunter', description: 'Complete 10 chapters', icon: '📚', earned: false, progress: 0, target: 10 },
          { id: 'chapters-50', name: 'Knowledge Seeker', description: 'Complete 50 chapters', icon: '🎓', earned: false, progress: 0, target: 50 },
          { id: 'mcq-100', name: 'Quiz Master', description: 'Answer 100 MCQs', icon: '✅', earned: false, progress: 0, target: 100 },
          { id: 'mcq-500', name: 'MCQ Champion', description: 'Answer 500 MCQs', icon: '🏆', earned: false, progress: 0, target: 500 },
          { id: 'hours-10', name: 'Dedicated Learner', description: 'Study for 10 hours total', icon: '⏰', earned: false, progress: 0, target: 600 },
          { id: 'hours-50', name: 'Study Machine', description: 'Study for 50 hours total', icon: '🤖', earned: false, progress: 0, target: 3000 },
          { id: 'flashcard-200', name: 'Memory Master', description: 'Review 200 flashcards', icon: '🧠', earned: false, progress: 0, target: 200 },
          { id: 'perfect-week', name: 'Perfect Week', description: 'Study every day for a week', icon: '💯', earned: false, progress: 0, target: 7 },
        ];
        setBadges(defaultBadges);
        localStorage.setItem('7k-badges', JSON.stringify(defaultBadges));
      }
    };

    loadData();
  }, []);

  // Generate calendar days
  const calendarDays = useMemo(() => {
    const year = selectedMonth.getFullYear();
    const month = selectedMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days: (Date | null)[] = [];
    
    // Add empty cells for days before the first day of month
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  }, [selectedMonth]);

  // Get intensity color based on study minutes
  const getIntensityColor = (minutes: number) => {
    if (minutes === 0) return 'bg-gray-100 dark:bg-gray-700';
    if (minutes < 15) return 'bg-green-200 dark:bg-green-900';
    if (minutes < 30) return 'bg-green-300 dark:bg-green-800';
    if (minutes < 60) return 'bg-green-400 dark:bg-green-700';
    if (minutes < 120) return 'bg-green-500 dark:bg-green-600';
    return 'bg-green-600 dark:bg-green-500';
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const getDayData = (date: Date): DayData | null => {
    const key = formatDate(date);
    return studyData[key] || null;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setSelectedMonth(prev => {
      const newMonth = new Date(prev);
      if (direction === 'prev') {
        newMonth.setMonth(newMonth.getMonth() - 1);
      } else {
        newMonth.setMonth(newMonth.getMonth() + 1);
      }
      return newMonth;
    });
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                      'July', 'August', 'September', 'October', 'November', 'December'];

  const earnedBadges = badges.filter(b => b.earned);
  const inProgressBadges = badges.filter(b => !b.earned && b.progress > 0).slice(0, 3);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
      {/* Header Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-5 h-5" />
            <span className="text-sm opacity-90">Current Streak</span>
          </div>
          <div className="text-3xl font-bold">{currentStreak}</div>
          <div className="text-xs opacity-75">days</div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-5 h-5" />
            <span className="text-sm opacity-90">Longest Streak</span>
          </div>
          <div className="text-3xl font-bold">{longestStreak}</div>
          <div className="text-xs opacity-75">days</div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5" />
            <span className="text-sm opacity-90">Total Study</span>
          </div>
          <div className="text-3xl font-bold">{Math.floor(totalMinutes / 60)}</div>
          <div className="text-xs opacity-75">hours</div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5" />
            <span className="text-sm opacity-90">Badges Earned</span>
          </div>
          <div className="text-3xl font-bold">{earnedBadges.length}</div>
          <div className="text-xs opacity-75">of {badges.length}</div>
        </div>
      </div>

      {/* Heatmap Calendar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold dark:text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-500" />
            Study Activity
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigateMonth('prev')}
              className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <span className="text-sm font-medium dark:text-white min-w-[120px] text-center">
              {monthNames[selectedMonth.getMonth()]} {selectedMonth.getFullYear()}
            </span>
            <button
              onClick={() => navigateMonth('next')}
              className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        {/* Day labels */}
        <div className="grid grid-cols-7 gap-1 mb-1">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center text-xs text-gray-500 dark:text-gray-400 py-1">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((date, index) => {
            if (!date) {
              return <div key={`empty-${index}`} className="aspect-square" />;
            }

            const dayData = getDayData(date);
            const minutes = dayData?.minutes || 0;
            const isToday = date.toDateString() === new Date().toDateString();
            const isFuture = date > new Date();

            return (
              <button
                key={formatDate(date)}
                onClick={() => !isFuture && onDateClick?.(date)}
                disabled={isFuture}
                className={`
                  aspect-square rounded-md text-xs font-medium transition-all
                  ${getIntensityColor(isFuture ? 0 : minutes)}
                  ${isToday ? 'ring-2 ring-blue-500 ring-offset-1' : ''}
                  ${isFuture ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 cursor-pointer'}
                `}
                title={`${date.toLocaleDateString()}: ${minutes} minutes`}
              >
                <span className={minutes > 0 ? 'text-white' : 'text-gray-600 dark:text-gray-400'}>
                  {date.getDate()}
                </span>
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-end gap-2 mt-3">
          <span className="text-xs text-gray-500 dark:text-gray-400">Less</span>
          {[0, 15, 30, 60, 120].map(mins => (
            <div
              key={mins}
              className={`w-3 h-3 rounded-sm ${getIntensityColor(mins)}`}
              title={`${mins}+ minutes`}
            />
          ))}
          <span className="text-xs text-gray-500 dark:text-gray-400">More</span>
        </div>
      </div>

      {/* Badges Section */}
      <div>
        <h3 className="text-lg font-semibold dark:text-white flex items-center gap-2 mb-4">
          <Star className="w-5 h-5 text-yellow-500" />
          Badges & Achievements
        </h3>

        {/* Earned Badges */}
        {earnedBadges.length > 0 && (
          <div className="mb-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Earned ({earnedBadges.length})</p>
            <div className="flex flex-wrap gap-2">
              {earnedBadges.map(badge => (
                <div
                  key={badge.id}
                  className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 rounded-lg border border-yellow-300 dark:border-yellow-700"
                  title={badge.description}
                >
                  <span className="text-xl">{badge.icon}</span>
                  <span className="text-sm font-medium text-yellow-800 dark:text-yellow-200">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* In Progress */}
        {inProgressBadges.length > 0 && (
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">In Progress</p>
            <div className="space-y-2">
              {inProgressBadges.map(badge => (
                <div
                  key={badge.id}
                  className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                >
                  <span className="text-2xl grayscale opacity-50">{badge.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium dark:text-white">{badge.name}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {badge.progress}/{badge.target}
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all"
                        style={{ width: `${Math.min((badge.progress / badge.target) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty state */}
        {earnedBadges.length === 0 && inProgressBadges.length === 0 && (
          <div className="text-center py-6 text-gray-500 dark:text-gray-400">
            <Trophy className="w-12 h-12 mx-auto mb-2 opacity-30" />
            <p>Start studying to earn badges!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyStreak;
