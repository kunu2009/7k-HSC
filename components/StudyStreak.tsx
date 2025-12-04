import React, { useState, useEffect, useMemo } from 'react';
import { Flame, Calendar, Trophy, Clock, Award, Star, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

interface StudyStreakProps {
  onDateClick?: (date: Date) => void;
  onClose?: () => void;
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

const StudyStreak: React.FC<StudyStreakProps> = ({ onDateClick, onClose }) => {
  const [studyData, setStudyData] = useState<Record<string, DayData>>({});
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [badges, setBadges] = useState<Badge[]>([]);

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

      const badgesStored = localStorage.getItem('7k-badges');
      if (badgesStored) {
        setBadges(JSON.parse(badgesStored));
      } else {
        const defaultBadges: Badge[] = [
          { id: 'first-session', name: 'First Steps', description: 'Complete your first study session', icon: '🎯', earned: false, progress: 0, target: 1 },
          { id: 'streak-3', name: '3-Day Streak', description: 'Study 3 days in a row', icon: '🔥', earned: false, progress: 0, target: 3 },
          { id: 'streak-7', name: 'Week Warrior', description: 'Study 7 days in a row', icon: '⚡', earned: false, progress: 0, target: 7 },
          { id: 'streak-30', name: 'Monthly Master', description: 'Study 30 days in a row', icon: '👑', earned: false, progress: 0, target: 30 },
          { id: 'chapters-10', name: 'Chapter Hunter', description: 'Complete 10 chapters', icon: '📚', earned: false, progress: 0, target: 10 },
          { id: 'mcq-100', name: 'Quiz Master', description: 'Answer 100 MCQs', icon: '✅', earned: false, progress: 0, target: 100 },
          { id: 'hours-10', name: 'Dedicated Learner', description: 'Study for 10 hours total', icon: '⏰', earned: false, progress: 0, target: 600 },
          { id: 'flashcard-200', name: 'Memory Master', description: 'Review 200 flashcards', icon: '🧠', earned: false, progress: 0, target: 200 },
        ];
        setBadges(defaultBadges);
        localStorage.setItem('7k-badges', JSON.stringify(defaultBadges));
      }
    };
    loadData();
  }, []);

  const calendarDays = useMemo(() => {
    const year = selectedMonth.getFullYear();
    const month = selectedMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    const days: (Date | null)[] = [];
    for (let i = 0; i < startingDay; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(new Date(year, month, i));
    return days;
  }, [selectedMonth]);

  const getIntensityColor = (minutes: number) => {
    if (minutes === 0) return 'bg-gray-100 dark:bg-gray-700';
    if (minutes < 15) return 'bg-green-200 dark:bg-green-900';
    if (minutes < 30) return 'bg-green-300 dark:bg-green-800';
    if (minutes < 60) return 'bg-green-400 dark:bg-green-700';
    if (minutes < 120) return 'bg-green-500 dark:bg-green-600';
    return 'bg-green-600 dark:bg-green-500';
  };

  const formatDate = (date: Date) => date.toISOString().split('T')[0];
  const getDayData = (date: Date): DayData | null => studyData[formatDate(date)] || null;

  const navigateMonth = (direction: 'prev' | 'next') => {
    setSelectedMonth(prev => {
      const newMonth = new Date(prev);
      newMonth.setMonth(newMonth.getMonth() + (direction === 'prev' ? -1 : 1));
      return newMonth;
    });
  };

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const earnedBadges = badges.filter(b => b.earned);
  const inProgressBadges = badges.filter(b => !b.earned && b.progress > 0).slice(0, 3);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 border-b border-gray-100 dark:border-gray-700 flex items-center gap-3">
          {onClose && (
            <button onClick={onClose} className="p-2 -ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 active:scale-95 transition">
              <ArrowLeft className="w-5 h-5 dark:text-white" />
            </button>
          )}
          <Flame className="w-6 h-6 text-orange-500" />
          <h2 className="text-lg font-bold dark:text-white">Study Streak</h2>
        </div>

        <div className="p-4 space-y-4">
          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-2.5 text-white text-center">
              <Flame className="w-4 h-4 mx-auto mb-1" />
              <div className="text-xl font-bold">{currentStreak}</div>
              <div className="text-[10px] opacity-75">Current</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl p-2.5 text-white text-center">
              <Trophy className="w-4 h-4 mx-auto mb-1" />
              <div className="text-xl font-bold">{longestStreak}</div>
              <div className="text-[10px] opacity-75">Longest</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-2.5 text-white text-center">
              <Clock className="w-4 h-4 mx-auto mb-1" />
              <div className="text-xl font-bold">{Math.floor(totalMinutes / 60)}</div>
              <div className="text-[10px] opacity-75">Hours</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-2.5 text-white text-center">
              <Award className="w-4 h-4 mx-auto mb-1" />
              <div className="text-xl font-bold">{earnedBadges.length}</div>
              <div className="text-[10px] opacity-75">Badges</div>
            </div>
          </div>

          {/* Calendar */}
          <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-3">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium dark:text-white">Activity</span>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => navigateMonth('prev')} className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 active:scale-95">
                  <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
                <span className="text-xs font-medium dark:text-white min-w-[70px] text-center">
                  {monthNames[selectedMonth.getMonth()]} {selectedMonth.getFullYear()}
                </span>
                <button onClick={() => navigateMonth('next')} className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 active:scale-95">
                  <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-0.5 mb-1">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                <div key={i} className="text-center text-[10px] text-gray-500 dark:text-gray-400">{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-0.5">
              {calendarDays.map((date, index) => {
                if (!date) return <div key={`empty-${index}`} className="aspect-square" />;
                const dayData = getDayData(date);
                const minutes = dayData?.minutes || 0;
                const isToday = date.toDateString() === new Date().toDateString();
                const isFuture = date > new Date();
                return (
                  <div
                    key={formatDate(date)}
                    onClick={() => !isFuture && onDateClick?.(date)}
                    className={`aspect-square rounded text-[10px] font-medium flex items-center justify-center ${getIntensityColor(isFuture ? 0 : minutes)} ${isToday ? 'ring-2 ring-blue-500' : ''} ${isFuture ? 'opacity-30' : 'active:scale-90'}`}
                  >
                    <span className={minutes > 0 ? 'text-white' : 'text-gray-600 dark:text-gray-400'}>{date.getDate()}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-end gap-1 mt-2">
              <span className="text-[10px] text-gray-500">Less</span>
              {[0, 15, 30, 60, 120].map(m => <div key={m} className={`w-2.5 h-2.5 rounded-sm ${getIntensityColor(m)}`} />)}
              <span className="text-[10px] text-gray-500">More</span>
            </div>
          </div>

          {/* Badges */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-semibold dark:text-white">Badges</span>
            </div>

            {earnedBadges.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {earnedBadges.map(badge => (
                  <div key={badge.id} className="flex items-center gap-1.5 px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <span>{badge.icon}</span>
                    <span className="text-xs font-medium text-yellow-800 dark:text-yellow-200">{badge.name}</span>
                  </div>
                ))}
              </div>
            )}

            {inProgressBadges.length > 0 && (
              <div className="space-y-2">
                {inProgressBadges.map(badge => (
                  <div key={badge.id} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <span className="text-lg grayscale opacity-50">{badge.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium dark:text-white truncate">{badge.name}</span>
                        <span className="text-[10px] text-gray-500">{badge.progress}/{badge.target}</span>
                      </div>
                      <div className="h-1 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{ width: `${Math.min((badge.progress / badge.target) * 100, 100)}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {earnedBadges.length === 0 && inProgressBadges.length === 0 && (
              <div className="text-center py-4 text-gray-500 dark:text-gray-400">
                <Trophy className="w-10 h-10 mx-auto mb-2 opacity-30" />
                <p className="text-sm">Start studying to earn badges!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyStreak;
