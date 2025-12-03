import React, { useState, useEffect } from 'react';
import { Trophy, X, Star, Lock, CheckCircle, Gift, Target, Clock, Flame, BookOpen, Brain, Award, Zap, Crown, Medal, Gem, Heart, Sparkles } from 'lucide-react';

interface AchievementsProps {
  onClose: () => void;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  requirement: number;
  currentProgress: number;
  unlocked: boolean;
  unlockedDate?: string;
  category: 'streak' | 'progress' | 'speed' | 'mastery' | 'special';
  xp: number;
}

const Achievements: React.FC<AchievementsProps> = ({ onClose }) => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [totalXP, setTotalXP] = useState(0);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    calculateAchievements();
  }, []);

  const calculateAchievements = () => {
    // Get user data
    const streakData = JSON.parse(localStorage.getItem('7k-study-streak-data') || '{}');
    const userProgress = JSON.parse(localStorage.getItem('7k-hsc-progress') || '{}');
    const pomodoroStats = JSON.parse(localStorage.getItem('7k-pomodoro-stats') || '{}');
    const errorLog = JSON.parse(localStorage.getItem('7k-error-log') || '[]');
    const quizHistory = JSON.parse(localStorage.getItem('7k-quiz-history') || '[]');
    const unlockedAchievements = JSON.parse(localStorage.getItem('7k-achievements') || '{}');

    const currentStreak = streakData.currentStreak || 0;
    const longestStreak = streakData.longestStreak || 0;
    const totalSessions = pomodoroStats.totalSessions || 0;
    const totalMinutes = pomodoroStats.totalMinutes || 0;
    
    // Count completed items
    let totalCompleted = 0;
    Object.values(userProgress).forEach((arr: any) => {
      if (Array.isArray(arr)) totalCompleted += arr.length;
    });

    // Count perfect quizzes
    const perfectQuizzes = quizHistory.filter((q: any) => q.score === 100).length;
    const totalQuizzes = quizHistory.length;

    // Define all achievements
    const achievementsList: Achievement[] = [
      // Streak Achievements
      {
        id: 'first-day',
        title: 'First Step',
        description: 'Complete your first day of studying',
        icon: <Star className="w-6 h-6" />,
        color: 'bg-yellow-500',
        requirement: 1,
        currentProgress: currentStreak > 0 ? 1 : 0,
        unlocked: currentStreak >= 1,
        category: 'streak',
        xp: 10
      },
      {
        id: 'week-warrior',
        title: 'Week Warrior',
        description: 'Maintain a 7-day study streak',
        icon: <Flame className="w-6 h-6" />,
        color: 'bg-orange-500',
        requirement: 7,
        currentProgress: Math.min(currentStreak, 7),
        unlocked: longestStreak >= 7,
        category: 'streak',
        xp: 50
      },
      {
        id: 'fortnight-force',
        title: 'Fortnight Force',
        description: 'Maintain a 14-day study streak',
        icon: <Flame className="w-6 h-6" />,
        color: 'bg-red-500',
        requirement: 14,
        currentProgress: Math.min(currentStreak, 14),
        unlocked: longestStreak >= 14,
        category: 'streak',
        xp: 100
      },
      {
        id: 'monthly-master',
        title: 'Monthly Master',
        description: 'Maintain a 30-day study streak',
        icon: <Crown className="w-6 h-6" />,
        color: 'bg-purple-500',
        requirement: 30,
        currentProgress: Math.min(currentStreak, 30),
        unlocked: longestStreak >= 30,
        category: 'streak',
        xp: 200
      },

      // Progress Achievements
      {
        id: 'getting-started',
        title: 'Getting Started',
        description: 'Complete 10 flashcards or MCQs',
        icon: <BookOpen className="w-6 h-6" />,
        color: 'bg-blue-500',
        requirement: 10,
        currentProgress: Math.min(totalCompleted, 10),
        unlocked: totalCompleted >= 10,
        category: 'progress',
        xp: 15
      },
      {
        id: 'half-century',
        title: 'Half Century',
        description: 'Complete 50 flashcards or MCQs',
        icon: <Target className="w-6 h-6" />,
        color: 'bg-green-500',
        requirement: 50,
        currentProgress: Math.min(totalCompleted, 50),
        unlocked: totalCompleted >= 50,
        category: 'progress',
        xp: 50
      },
      {
        id: 'centurion',
        title: 'Centurion',
        description: 'Complete 100 flashcards or MCQs',
        icon: <Medal className="w-6 h-6" />,
        color: 'bg-indigo-500',
        requirement: 100,
        currentProgress: Math.min(totalCompleted, 100),
        unlocked: totalCompleted >= 100,
        category: 'progress',
        xp: 100
      },
      {
        id: 'knowledge-seeker',
        title: 'Knowledge Seeker',
        description: 'Complete 500 flashcards or MCQs',
        icon: <Gem className="w-6 h-6" />,
        color: 'bg-cyan-500',
        requirement: 500,
        currentProgress: Math.min(totalCompleted, 500),
        unlocked: totalCompleted >= 500,
        category: 'progress',
        xp: 300
      },
      {
        id: 'study-champion',
        title: 'Study Champion',
        description: 'Complete 1000 flashcards or MCQs',
        icon: <Trophy className="w-6 h-6" />,
        color: 'bg-amber-500',
        requirement: 1000,
        currentProgress: Math.min(totalCompleted, 1000),
        unlocked: totalCompleted >= 1000,
        category: 'progress',
        xp: 500
      },

      // Speed/Focus Achievements
      {
        id: 'pomodoro-beginner',
        title: 'Focus Beginner',
        description: 'Complete 5 Pomodoro sessions',
        icon: <Clock className="w-6 h-6" />,
        color: 'bg-rose-500',
        requirement: 5,
        currentProgress: Math.min(totalSessions, 5),
        unlocked: totalSessions >= 5,
        category: 'speed',
        xp: 25
      },
      {
        id: 'pomodoro-pro',
        title: 'Focus Master',
        description: 'Complete 25 Pomodoro sessions',
        icon: <Zap className="w-6 h-6" />,
        color: 'bg-yellow-600',
        requirement: 25,
        currentProgress: Math.min(totalSessions, 25),
        unlocked: totalSessions >= 25,
        category: 'speed',
        xp: 75
      },
      {
        id: 'hour-hunter',
        title: 'Hour Hunter',
        description: 'Study for 60 minutes total',
        icon: <Clock className="w-6 h-6" />,
        color: 'bg-teal-500',
        requirement: 60,
        currentProgress: Math.min(totalMinutes, 60),
        unlocked: totalMinutes >= 60,
        category: 'speed',
        xp: 40
      },
      {
        id: 'marathon-student',
        title: 'Marathon Student',
        description: 'Study for 300 minutes total (5 hours)',
        icon: <Award className="w-6 h-6" />,
        color: 'bg-violet-500',
        requirement: 300,
        currentProgress: Math.min(totalMinutes, 300),
        unlocked: totalMinutes >= 300,
        category: 'speed',
        xp: 150
      },

      // Mastery Achievements
      {
        id: 'first-perfect',
        title: 'Perfect Start',
        description: 'Get 100% on your first quiz',
        icon: <CheckCircle className="w-6 h-6" />,
        color: 'bg-emerald-500',
        requirement: 1,
        currentProgress: Math.min(perfectQuizzes, 1),
        unlocked: perfectQuizzes >= 1,
        category: 'mastery',
        xp: 30
      },
      {
        id: 'quiz-master',
        title: 'Quiz Master',
        description: 'Get 100% on 5 quizzes',
        icon: <Brain className="w-6 h-6" />,
        color: 'bg-pink-500',
        requirement: 5,
        currentProgress: Math.min(perfectQuizzes, 5),
        unlocked: perfectQuizzes >= 5,
        category: 'mastery',
        xp: 100
      },
      {
        id: 'perfectionist',
        title: 'Perfectionist',
        description: 'Get 100% on 10 quizzes',
        icon: <Sparkles className="w-6 h-6" />,
        color: 'bg-fuchsia-500',
        requirement: 10,
        currentProgress: Math.min(perfectQuizzes, 10),
        unlocked: perfectQuizzes >= 10,
        category: 'mastery',
        xp: 200
      },
      {
        id: 'error-learner',
        title: 'Learn from Mistakes',
        description: 'Review 10 wrong answers from error log',
        icon: <Heart className="w-6 h-6" />,
        color: 'bg-red-400',
        requirement: 10,
        currentProgress: Math.min(errorLog.filter((e: any) => e.reviewed).length, 10),
        unlocked: errorLog.filter((e: any) => e.reviewed).length >= 10,
        category: 'mastery',
        xp: 50
      },

      // Special Achievements
      {
        id: 'early-bird',
        title: 'Early Bird',
        description: 'Study before 7 AM',
        icon: <Gift className="w-6 h-6" />,
        color: 'bg-sky-500',
        requirement: 1,
        currentProgress: unlockedAchievements['early-bird'] ? 1 : 0,
        unlocked: !!unlockedAchievements['early-bird'],
        category: 'special',
        xp: 25
      },
      {
        id: 'night-owl',
        title: 'Night Owl',
        description: 'Study after 10 PM',
        icon: <Star className="w-6 h-6" />,
        color: 'bg-slate-600',
        requirement: 1,
        currentProgress: unlockedAchievements['night-owl'] ? 1 : 0,
        unlocked: !!unlockedAchievements['night-owl'],
        category: 'special',
        xp: 25
      },
      {
        id: 'weekend-warrior',
        title: 'Weekend Warrior',
        description: 'Study on both Saturday and Sunday',
        icon: <Medal className="w-6 h-6" />,
        color: 'bg-lime-500',
        requirement: 1,
        currentProgress: unlockedAchievements['weekend-warrior'] ? 1 : 0,
        unlocked: !!unlockedAchievements['weekend-warrior'],
        category: 'special',
        xp: 40
      },
    ];

    // Add unlock dates
    achievementsList.forEach(ach => {
      if (ach.unlocked && unlockedAchievements[ach.id]) {
        ach.unlockedDate = unlockedAchievements[ach.id].date;
      } else if (ach.unlocked) {
        // First time unlocking
        const now = new Date().toISOString();
        unlockedAchievements[ach.id] = { date: now };
        ach.unlockedDate = now;
      }
    });

    // Save achievement state
    localStorage.setItem('7k-achievements', JSON.stringify(unlockedAchievements));

    // Calculate total XP and level
    const earnedXP = achievementsList.filter(a => a.unlocked).reduce((sum, a) => sum + a.xp, 0);
    const calculatedLevel = Math.floor(earnedXP / 100) + 1;

    setAchievements(achievementsList);
    setTotalXP(earnedXP);
    setLevel(calculatedLevel);
  };

  const categories = [
    { id: 'all', label: 'All', icon: <Trophy className="w-4 h-4" /> },
    { id: 'streak', label: 'Streaks', icon: <Flame className="w-4 h-4" /> },
    { id: 'progress', label: 'Progress', icon: <Target className="w-4 h-4" /> },
    { id: 'speed', label: 'Focus', icon: <Clock className="w-4 h-4" /> },
    { id: 'mastery', label: 'Mastery', icon: <Brain className="w-4 h-4" /> },
    { id: 'special', label: 'Special', icon: <Gift className="w-4 h-4" /> },
  ];

  const filteredAchievements = selectedCategory === 'all' 
    ? achievements 
    : achievements.filter(a => a.category === selectedCategory);

  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalCount = achievements.length;

  // XP needed for next level
  const xpForNextLevel = level * 100;
  const currentLevelXP = totalXP - ((level - 1) * 100);
  const levelProgress = (currentLevelXP / 100) * 100;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold dark:text-white">Achievements</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {unlockedCount} of {totalCount} unlocked
                </p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Level & XP */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5" />
                <span className="font-bold">Level {level}</span>
              </div>
              <span className="text-sm opacity-90">{totalXP} XP Total</span>
            </div>
            <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white rounded-full transition-all duration-500"
                style={{ width: `${levelProgress}%` }}
              />
            </div>
            <div className="text-xs mt-1 opacity-80">
              {currentLevelXP} / 100 XP to Level {level + 1}
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="px-6 py-3 border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
          <div className="flex gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Achievement Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredAchievements.map(achievement => (
              <div
                key={achievement.id}
                className={`p-4 rounded-xl border-2 transition ${
                  achievement.unlocked
                    ? 'bg-white dark:bg-gray-700 border-amber-300 dark:border-amber-500'
                    : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-60'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    achievement.unlocked ? achievement.color : 'bg-gray-300 dark:bg-gray-600'
                  }`}>
                    {achievement.unlocked ? (
                      <div className="text-white">{achievement.icon}</div>
                    ) : (
                      <Lock className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-semibold ${
                        achievement.unlocked ? 'dark:text-white' : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        {achievement.title}
                      </h3>
                      {achievement.unlocked && (
                        <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-xs rounded-full font-medium">
                          +{achievement.xp} XP
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                      {achievement.description}
                    </p>
                    
                    {/* Progress Bar */}
                    {!achievement.unlocked && (
                      <div className="mt-2">
                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                          <span>{achievement.currentProgress} / {achievement.requirement}</span>
                          <span>{Math.round((achievement.currentProgress / achievement.requirement) * 100)}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-indigo-500 rounded-full"
                            style={{ width: `${(achievement.currentProgress / achievement.requirement) * 100}%` }}
                          />
                        </div>
                      </div>
                    )}
                    
                    {achievement.unlocked && achievement.unlockedDate && (
                      <p className="text-xs text-green-600 dark:text-green-400 mt-1 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Unlocked {new Date(achievement.unlockedDate).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            🏆 Keep studying to unlock more achievements and earn XP!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
