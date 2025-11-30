import React from 'react';
import { Flame, Target, CheckCircle, BookOpen, Brain, Award, TrendingUp, Zap } from 'lucide-react';

interface ProgressDashboardProps {
  stats: {
    chaptersStarted: number;
    chaptersCompleted: number;
    totalFlashcardsReviewed: number;
    totalMCQAttempted: number;
    totalMCQCorrect: number;
    currentStreak: number;
    longestStreak: number;
    totalStudyDays: number;
  };
  subjectProgress: { name: string; completion: number; color: string }[];
}

const ProgressDashboard: React.FC<ProgressDashboardProps> = ({ stats, subjectProgress }) => {
  const mcqAccuracy = stats.totalMCQAttempted > 0 
    ? Math.round((stats.totalMCQCorrect / stats.totalMCQAttempted) * 100) 
    : 0;

  return (
    <div className="mb-6">
      {/* Streak Card */}
      <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-4 text-white mb-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -mr-8 -mt-8"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/20 rounded-xl">
              <Flame size={24} />
            </div>
            <div>
              <span className="text-3xl font-black">{stats.currentStreak}</span>
              <span className="text-sm font-medium opacity-90 ml-1">day streak</span>
              <p className="text-xs opacity-75">Best: {stats.longestStreak} days</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">{stats.totalStudyDays}</p>
            <p className="text-xs opacity-75">total study days</p>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen size={16} className="text-indigo-500" />
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Chapters</span>
          </div>
          <div className="flex items-end gap-1">
            <span className="text-2xl font-black text-slate-800 dark:text-white">{stats.chaptersStarted}</span>
            <span className="text-sm text-slate-400 mb-1">started</span>
          </div>
          <p className="text-xs text-emerald-500 font-medium">{stats.chaptersCompleted} completed</p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-2">
            <Brain size={16} className="text-purple-500" />
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Flashcards</span>
          </div>
          <div className="flex items-end gap-1">
            <span className="text-2xl font-black text-slate-800 dark:text-white">{stats.totalFlashcardsReviewed}</span>
            <span className="text-sm text-slate-400 mb-1">reviewed</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-2">
            <Target size={16} className="text-emerald-500" />
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">MCQ Accuracy</span>
          </div>
          <div className="flex items-end gap-1">
            <span className="text-2xl font-black text-slate-800 dark:text-white">{mcqAccuracy}%</span>
          </div>
          <p className="text-xs text-slate-400">{stats.totalMCQCorrect}/{stats.totalMCQAttempted} correct</p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-2">
            <Award size={16} className="text-amber-500" />
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Best Streak</span>
          </div>
          <div className="flex items-end gap-1">
            <span className="text-2xl font-black text-slate-800 dark:text-white">{stats.longestStreak}</span>
            <span className="text-sm text-slate-400 mb-1">days</span>
          </div>
        </div>
      </div>

      {/* Subject Progress */}
      {subjectProgress.length > 0 && (
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={16} className="text-indigo-500" />
            <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Subject Progress</span>
          </div>
          <div className="space-y-3">
            {subjectProgress.map((subject) => (
              <div key={subject.name}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{subject.name}</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-white">{subject.completion}%</span>
                </div>
                <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${subject.color} rounded-full transition-all duration-500`}
                    style={{ width: `${subject.completion}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressDashboard;
