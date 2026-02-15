import React, { useState, useEffect } from 'react';
import { Flame, Trophy, Star, Zap, Calendar, ChevronRight, X } from 'lucide-react';

interface DailyMotivationProps {
  streak: number;
  todayMinutes: number;
  onStartStudy?: () => void;
  onDismiss?: () => void;
}

const MOTIVATIONAL_MESSAGES = [
  { min: 0, message: "Start your study session to build momentum! 🚀", emoji: "🌱" },
  { min: 15, message: "Great start! Keep the momentum going! 💪", emoji: "🔥" },
  { min: 30, message: "You're on fire! Half an hour of focus! 🔥", emoji: "⚡" },
  { min: 60, message: "One hour done! You're crushing it! 💯", emoji: "🏆" },
  { min: 120, message: "Two hours! You're a study machine! 🎯", emoji: "🌟" },
  { min: 180, message: "Three hours! Incredible dedication! 👑", emoji: "💎" },
  { min: 240, message: "Four hours! You're unstoppable! 🚀", emoji: "🎉" },
];

const STREAK_MESSAGES = [
  { days: 0, message: "Start your streak today!", color: "text-slate-500" },
  { days: 1, message: "Day 1! Great start!", color: "text-orange-500" },
  { days: 3, message: "3 days! Building momentum!", color: "text-orange-600" },
  { days: 7, message: "1 Week streak! 🔥", color: "text-red-500" },
  { days: 14, message: "2 Weeks! Incredible!", color: "text-red-600" },
  { days: 21, message: "21 Days! Habit formed!", color: "text-purple-500" },
  { days: 30, message: "1 Month! Legend status!", color: "text-purple-600" },
];

/**
 * Shows daily motivation based on study time and streak
 */
const DailyMotivation: React.FC<DailyMotivationProps> = ({
  streak,
  todayMinutes,
  onStartStudy,
  onDismiss
}) => {
  const [isVisible, setIsVisible] = useState(true);

  // Get appropriate message based on study time
  const getStudyMessage = () => {
    for (let i = MOTIVATIONAL_MESSAGES.length - 1; i >= 0; i--) {
      if (todayMinutes >= MOTIVATIONAL_MESSAGES[i].min) {
        return MOTIVATIONAL_MESSAGES[i];
      }
    }
    return MOTIVATIONAL_MESSAGES[0];
  };

  // Get streak message
  const getStreakMessage = () => {
    for (let i = STREAK_MESSAGES.length - 1; i >= 0; i--) {
      if (streak >= STREAK_MESSAGES[i].days) {
        return STREAK_MESSAGES[i];
      }
    }
    return STREAK_MESSAGES[0];
  };

  const studyMsg = getStudyMessage();
  const streakMsg = getStreakMessage();

  if (!isVisible) return null;

  // If already studied today, show compact version
  if (todayMinutes >= 30) {
    return (
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 text-white shadow-lg mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
              {studyMsg.emoji}
            </div>
            <div>
              <p className="text-white/80 text-xs font-medium">TODAY'S PROGRESS</p>
              <p className="font-bold text-lg">{Math.floor(todayMinutes / 60)}h {todayMinutes % 60}m studied</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-white/90">
              <Flame size={16} className="text-orange-300" />
              <span className="font-bold">{streak} day streak</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Not studied much today - show motivational card
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-4 text-white shadow-lg mb-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>

      {onDismiss && (
        <button
          onClick={() => {
            setIsVisible(false);
            onDismiss();
          }}
          className="absolute top-2 right-2 p-1 hover:bg-white/20 rounded-lg transition"
        >
          <X size={16} />
        </button>
      )}

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <Zap size={24} />
          </div>
          <div>
            <p className="text-white/80 text-xs font-medium">DAILY MOTIVATION</p>
            <p className="font-bold text-lg">{studyMsg.message}</p>
          </div>
        </div>

        {/* Streak Display */}
        <div className="flex items-center justify-between bg-white/10 rounded-xl p-3 mb-3">
          <div className="flex items-center gap-2">
            <Flame size={20} className="text-orange-300" />
            <span className="font-medium">Current Streak</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black">{streak}</span>
            <span className="text-sm opacity-80">days</span>
          </div>
        </div>

        {/* Progress to goal */}
        <div className="mb-3">
          <div className="flex justify-between text-xs mb-1">
            <span>Today's Progress</span>
            <span>{todayMinutes}/60 min goal</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all"
              style={{ width: `${Math.min(100, (todayMinutes / 60) * 100)}%` }}
            />
          </div>
        </div>

        {onStartStudy && (
          <button
            onClick={onStartStudy}
            className="w-full bg-white text-purple-600 font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-purple-50 transition"
          >
            <Zap size={18} />
            Start Studying Now
            <ChevronRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default DailyMotivation;
