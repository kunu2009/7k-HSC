import React, { useState, useEffect, useCallback } from 'react';
import { Play, Pause, RotateCcw, Coffee, Brain, Flame, Clock, Trophy, Volume2, VolumeX } from 'lucide-react';

interface PomodoroTimerProps {
  onSessionComplete?: (minutes: number, type: 'focus' | 'break') => void;
}

type TimerMode = 'focus' | 'shortBreak' | 'longBreak';

const TIMER_CONFIGS = {
  focus: { duration: 25 * 60, label: 'Focus Time', color: 'from-red-500 to-orange-500', icon: Brain },
  shortBreak: { duration: 5 * 60, label: 'Short Break', color: 'from-green-500 to-emerald-500', icon: Coffee },
  longBreak: { duration: 15 * 60, label: 'Long Break', color: 'from-blue-500 to-cyan-500', icon: Coffee },
};

const PomodoroTimer: React.FC<PomodoroTimerProps> = ({ onSessionComplete }) => {
  const [mode, setMode] = useState<TimerMode>('focus');
  const [timeLeft, setTimeLeft] = useState(TIMER_CONFIGS.focus.duration);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionsCompleted, setSessionsCompleted] = useState(0);
  const [dailyFocusMinutes, setDailyFocusMinutes] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Load daily stats from localStorage
  useEffect(() => {
    const today = new Date().toDateString();
    const stored = localStorage.getItem('7k-pomodoro-stats');
    if (stored) {
      const stats = JSON.parse(stored);
      if (stats.date === today) {
        setSessionsCompleted(stats.sessions || 0);
        setDailyFocusMinutes(stats.focusMinutes || 0);
      }
    }
  }, []);

  // Save daily stats
  const saveStats = useCallback((sessions: number, focusMinutes: number) => {
    const today = new Date().toDateString();
    localStorage.setItem('7k-pomodoro-stats', JSON.stringify({
      date: today,
      sessions,
      focusMinutes,
    }));
  }, []);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // Timer completed
      if (soundEnabled) {
        // Play notification sound (browser beep)
        const audio = new AudioContext();
        const oscillator = audio.createOscillator();
        oscillator.connect(audio.destination);
        oscillator.frequency.value = 800;
        oscillator.start();
        setTimeout(() => oscillator.stop(), 200);
      }

      if (mode === 'focus') {
        const newSessions = sessionsCompleted + 1;
        const newFocusMinutes = dailyFocusMinutes + 25;
        setSessionsCompleted(newSessions);
        setDailyFocusMinutes(newFocusMinutes);
        saveStats(newSessions, newFocusMinutes);
        onSessionComplete?.(25, 'focus');
        
        // Auto switch to break
        if (newSessions % 4 === 0) {
          setMode('longBreak');
          setTimeLeft(TIMER_CONFIGS.longBreak.duration);
        } else {
          setMode('shortBreak');
          setTimeLeft(TIMER_CONFIGS.shortBreak.duration);
        }
      } else {
        // Break completed, switch to focus
        setMode('focus');
        setTimeLeft(TIMER_CONFIGS.focus.duration);
      }
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, mode, sessionsCompleted, dailyFocusMinutes, soundEnabled, saveStats, onSessionComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleModeChange = (newMode: TimerMode) => {
    setMode(newMode);
    setTimeLeft(TIMER_CONFIGS[newMode].duration);
    setIsRunning(false);
  };

  const handleReset = () => {
    setTimeLeft(TIMER_CONFIGS[mode].duration);
    setIsRunning(false);
  };

  const progress = ((TIMER_CONFIGS[mode].duration - timeLeft) / TIMER_CONFIGS[mode].duration) * 100;
  const config = TIMER_CONFIGS[mode];
  const IconComponent = config.icon;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${config.color}`}>
            <Clock className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold dark:text-white">Pomodoro Timer</h2>
        </div>
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          {soundEnabled ? (
            <Volume2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          ) : (
            <VolumeX className="w-5 h-5 text-gray-400" />
          )}
        </button>
      </div>

      {/* Mode Selector */}
      <div className="flex gap-2 mb-6">
        {(['focus', 'shortBreak', 'longBreak'] as TimerMode[]).map((m) => (
          <button
            key={m}
            onClick={() => handleModeChange(m)}
            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
              mode === m
                ? `bg-gradient-to-r ${TIMER_CONFIGS[m].color} text-white shadow-lg`
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {m === 'focus' ? '🧠 Focus' : m === 'shortBreak' ? '☕ Short' : '🌴 Long'}
          </button>
        ))}
      </div>

      {/* Timer Display */}
      <div className="relative mb-6">
        {/* Progress Ring */}
        <div className="relative w-48 h-48 mx-auto">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-gray-200 dark:text-gray-700"
            />
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={553}
              strokeDashoffset={553 - (553 * progress) / 100}
              className="transition-all duration-1000"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={mode === 'focus' ? '#ef4444' : mode === 'shortBreak' ? '#22c55e' : '#3b82f6'} />
                <stop offset="100%" stopColor={mode === 'focus' ? '#f97316' : mode === 'shortBreak' ? '#10b981' : '#06b6d4'} />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Time Display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <IconComponent className={`w-8 h-8 mb-2 ${mode === 'focus' ? 'text-red-500' : 'text-green-500'}`} />
            <span className="text-4xl font-bold dark:text-white">{formatTime(timeLeft)}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">{config.label}</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={handleReset}
          className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <RotateCcw className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </button>
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`p-4 rounded-full bg-gradient-to-r ${config.color} text-white shadow-lg hover:shadow-xl transition-all transform hover:scale-105`}
        >
          {isRunning ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-orange-500 mb-1">
            <Flame className="w-4 h-4" />
            <span className="font-bold">{sessionsCompleted}</span>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">Sessions</span>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-blue-500 mb-1">
            <Clock className="w-4 h-4" />
            <span className="font-bold">{dailyFocusMinutes}</span>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">Minutes</span>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
            <Trophy className="w-4 h-4" />
            <span className="font-bold">{Math.floor(dailyFocusMinutes / 60)}h</span>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">Today</span>
        </div>
      </div>

      {/* Motivational Message */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {sessionsCompleted === 0 && "🚀 Start your first focus session!"}
          {sessionsCompleted >= 1 && sessionsCompleted < 4 && "💪 Great start! Keep going!"}
          {sessionsCompleted >= 4 && sessionsCompleted < 8 && "🔥 You're on fire! Amazing focus!"}
          {sessionsCompleted >= 8 && "🏆 Incredible dedication! You're a study champion!"}
        </p>
      </div>
    </div>
  );
};

export default PomodoroTimer;
