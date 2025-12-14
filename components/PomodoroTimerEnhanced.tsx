import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Play, Pause, RotateCcw, Coffee, Brain, Flame, Clock, Trophy, 
  Volume2, VolumeX, ArrowLeft, Target, BookOpen, ChevronDown,
  Plus, Minus, Zap, Calendar, CheckCircle2, ListChecks, Edit3,
  TrendingUp, Award, Sparkles, Timer, XCircle, AlertCircle,
  History, FileText, Download, Trash2
} from 'lucide-react';
import { Subject, Chapter } from '../types';

// Session Event Types for detailed logging
type SessionEventType = 
  | 'session_started'
  | 'session_paused'
  | 'session_resumed'
  | 'session_completed'
  | 'session_abandoned'
  | 'break_started'
  | 'break_completed'
  | 'goal_set'
  | 'duration_changed';

interface SessionEvent {
  id: string;
  timestamp: string; // ISO string
  eventType: SessionEventType;
  timeRemaining?: number; // seconds remaining when event occurred
  details?: string;
}

interface DetailedSessionLog {
  id: string;
  sessionNumber: number;
  date: string;
  startTime: string;
  endTime?: string;
  plannedDuration: number; // minutes
  actualDuration: number; // minutes
  type: 'focus' | 'break';
  status: 'completed' | 'abandoned' | 'in-progress';
  subject?: string;
  subjectName?: string;
  chapter?: string;
  chapterName?: string;
  activity?: string;
  customGoal?: string;
  pauseCount: number;
  totalPausedTime: number; // seconds
  events: SessionEvent[];
  xpEarned: number;
  notes?: string;
}

interface StudySession {
  id: string;
  startTime: string; // ISO string
  endTime: string;
  duration: number; // minutes actually studied
  plannedDuration: number;
  type: 'focus' | 'break';
  subject?: string;
  chapter?: string;
  activity?: string;
  customGoal?: string;
  completed: boolean;
  pausedAt?: number; // seconds remaining when paused
}

interface PomodoroStats {
  date: string;
  sessions: StudySession[];
  detailedLogs: DetailedSessionLog[];
  totalFocusMinutes: number;
  totalSessions: number;
  completedSessions: number;
  abandonedSessions: number;
  totalPauseCount: number;
  currentStreak: number;
  longestSession: number; // minutes
  xp: number;
}

interface PomodoroTimerEnhancedProps {
  subjects?: Subject[];
  onSessionComplete?: (session: StudySession) => void;
  onClose?: () => void;
}

type TimerMode = 'focus' | 'shortBreak' | 'longBreak';
type ActivityType = 'notes' | 'mcq' | 'flashcards' | 'revision' | 'writing' | 'custom';

const ACTIVITY_OPTIONS: { id: ActivityType; label: string; icon: string }[] = [
  { id: 'notes', label: 'Reading Notes', icon: '📖' },
  { id: 'mcq', label: 'Solving MCQs', icon: '✅' },
  { id: 'flashcards', label: 'Flashcards', icon: '🃏' },
  { id: 'revision', label: 'Revision', icon: '🔄' },
  { id: 'writing', label: 'Writing Practice', icon: '✍️' },
  { id: 'custom', label: 'Custom Goal', icon: '🎯' },
];

const TIMER_PRESETS = [
  { focus: 25, short: 5, long: 15, label: 'Classic (25/5)' },
  { focus: 50, short: 10, long: 20, label: 'Deep Work (50/10)' },
  { focus: 15, short: 3, long: 10, label: 'Quick Sprint (15/3)' },
  { focus: 45, short: 10, long: 15, label: 'Extended (45/10)' },
];

const XP_PER_MINUTE = 2;
const XP_BONUS_COMPLETE = 25;
const XP_STREAK_BONUS = 10;

const MOTIVATIONAL_QUOTES = [
  "🧠 Your brain is building new connections right now!",
  "💪 Every minute of focus makes you stronger!",
  "🎯 Stay locked in, success is built one session at a time!",
  "⚡ You're in the zone! Keep that momentum!",
  "🔥 Champions are made in moments like this!",
  "🚀 This session is bringing you closer to your goals!",
  "✨ Quality focus time = Quality results!",
  "🏆 Future you will thank present you!",
];

const PomodoroTimerEnhanced: React.FC<PomodoroTimerEnhancedProps> = ({ 
  subjects = [], 
  onSessionComplete, 
  onClose 
}) => {
  // Timer State
  const [mode, setMode] = useState<TimerMode>('focus');
  const [focusDuration, setFocusDuration] = useState(25);
  const [shortBreakDuration, setShortBreakDuration] = useState(5);
  const [longBreakDuration, setLongBreakDuration] = useState(15);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  
  // Session tracking
  const [sessionStartTime, setSessionStartTime] = useState<Date | null>(null);
  const [totalPausedTime, setTotalPausedTime] = useState(0);
  const [pauseStartTime, setPauseStartTime] = useState<Date | null>(null);
  
  // Goal/Subject selection
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedChapter, setSelectedChapter] = useState<string>('');
  const [selectedActivity, setSelectedActivity] = useState<ActivityType>('notes');
  const [customGoal, setCustomGoal] = useState('');
  const [showSubjectDropdown, setShowSubjectDropdown] = useState(false);
  const [showChapterDropdown, setShowChapterDropdown] = useState(false);
  const [showPresets, setShowPresets] = useState(false);
  
  // Stats
  const [stats, setStats] = useState<PomodoroStats>({
    date: new Date().toDateString(),
    sessions: [],
    totalFocusMinutes: 0,
    totalSessions: 0,
    currentStreak: 0,
    xp: 0,
  });
  
  // UI State
  const [showGoalSetup, setShowGoalSetup] = useState(true);
  const [currentQuote, setCurrentQuote] = useState(MOTIVATIONAL_QUOTES[0]);
  const [showSessionLog, setShowSessionLog] = useState(false);
  const [showDetailedLog, setShowDetailedLog] = useState(false);
  const [logViewMode, setLogViewMode] = useState<'simple' | 'detailed'>('simple');
  
  // Detailed Session Tracking
  const [currentSessionLog, setCurrentSessionLog] = useState<DetailedSessionLog | null>(null);
  const [pauseCount, setPauseCount] = useState(0);
  const [sessionEvents, setSessionEvents] = useState<SessionEvent[]>([]);
  
  const audioRef = useRef<AudioContext | null>(null);

  // Load stats from localStorage
  useEffect(() => {
    const today = new Date().toDateString();
    const stored = localStorage.getItem('7k-pomodoro-enhanced-stats');
    if (stored) {
      const parsed = JSON.parse(stored) as PomodoroStats;
      if (parsed.date === today) {
        // Ensure new fields exist for backward compatibility
        setStats({
          ...parsed,
          detailedLogs: parsed.detailedLogs || [],
          completedSessions: parsed.completedSessions || parsed.sessions.filter(s => s.completed).length,
          abandonedSessions: parsed.abandonedSessions || 0,
          totalPauseCount: parsed.totalPauseCount || 0,
          longestSession: parsed.longestSession || 0,
        });
      } else {
        // New day - keep streak if yesterday had sessions
        const newStats: PomodoroStats = {
          date: today,
          sessions: [],
          detailedLogs: [],
          totalFocusMinutes: 0,
          totalSessions: 0,
          completedSessions: 0,
          abandonedSessions: 0,
          totalPauseCount: 0,
          currentStreak: parsed.sessions.length > 0 ? parsed.currentStreak + 1 : 0,
          longestSession: 0,
          xp: parsed.xp, // Carry over XP
        };
        setStats(newStats);
        saveStats(newStats);
      }
    }
  }, []);

  // Rotate quotes during focus
  useEffect(() => {
    if (isRunning && mode === 'focus') {
      const interval = setInterval(() => {
        setCurrentQuote(MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)]);
      }, 30000); // Change every 30 seconds
      return () => clearInterval(interval);
    }
  }, [isRunning, mode]);

  const saveStats = useCallback((newStats: PomodoroStats) => {
    localStorage.setItem('7k-pomodoro-enhanced-stats', JSON.stringify(newStats));
    setStats(newStats);
  }, []);

  const getDuration = (m: TimerMode) => {
    switch (m) {
      case 'focus': return focusDuration * 60;
      case 'shortBreak': return shortBreakDuration * 60;
      case 'longBreak': return longBreakDuration * 60;
    }
  };

  // Log a session event
  const logEvent = useCallback((eventType: SessionEventType, details?: string) => {
    const event: SessionEvent = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      eventType,
      timeRemaining: timeLeft,
      details,
    };
    setSessionEvents(prev => [...prev, event]);
    return event;
  }, [timeLeft]);

  // Format duration for display
  const formatDuration = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) return `${hrs}h ${mins}m ${secs}s`;
    if (mins > 0) return `${mins}m ${secs}s`;
    return `${secs}s`;
  };

  const playSound = useCallback((frequency: number = 800, duration: number = 200) => {
    if (!soundEnabled) return;
    try {
      if (!audioRef.current) {
        audioRef.current = new AudioContext();
      }
      const oscillator = audioRef.current.createOscillator();
      const gainNode = audioRef.current.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioRef.current.destination);
      oscillator.frequency.value = frequency;
      gainNode.gain.setValueAtTime(0.3, audioRef.current.currentTime);
      oscillator.start();
      setTimeout(() => oscillator.stop(), duration);
    } catch (e) {
      console.log('Audio not supported');
    }
  }, [soundEnabled]);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      handleSessionComplete();
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handleSessionComplete = () => {
    playSound(800, 300);
    setTimeout(() => playSound(1000, 300), 350);
    
    if (mode === 'focus' && sessionStartTime) {
      const endTime = new Date();
      const actualMinutes = Math.round((focusDuration * 60 - totalPausedTime) / 60);
      
      // Log completion event
      const completionEvent = logEvent('session_completed', `Completed ${actualMinutes} minutes of focus`);
      const finalEvents = [...sessionEvents, completionEvent];
      
      const session: StudySession = {
        id: Date.now().toString(),
        startTime: sessionStartTime.toISOString(),
        endTime: endTime.toISOString(),
        duration: actualMinutes,
        plannedDuration: focusDuration,
        type: 'focus',
        subject: selectedSubject || undefined,
        chapter: selectedChapter || undefined,
        activity: selectedActivity,
        customGoal: selectedActivity === 'custom' ? customGoal : undefined,
        completed: true,
      };
      
      const earnedXP = (actualMinutes * XP_PER_MINUTE) + XP_BONUS_COMPLETE + 
        (stats.currentStreak > 0 ? XP_STREAK_BONUS : 0);
      
      // Create detailed session log
      const detailedLog: DetailedSessionLog = {
        id: Date.now().toString(),
        sessionNumber: stats.totalSessions + 1,
        date: new Date().toDateString(),
        startTime: sessionStartTime.toISOString(),
        endTime: endTime.toISOString(),
        plannedDuration: focusDuration,
        actualDuration: actualMinutes,
        type: 'focus',
        status: 'completed',
        subject: selectedSubject || undefined,
        subjectName: selectedSubject ? subjects.find(s => s.id === selectedSubject)?.name : undefined,
        chapter: selectedChapter || undefined,
        chapterName: selectedChapter ? chapters.find(c => c.id === selectedChapter)?.title : undefined,
        activity: selectedActivity,
        customGoal: selectedActivity === 'custom' ? customGoal : undefined,
        pauseCount: pauseCount,
        totalPausedTime: totalPausedTime,
        events: finalEvents,
        xpEarned: earnedXP,
      };
      
      const newStats: PomodoroStats = {
        ...stats,
        sessions: [...stats.sessions, session],
        detailedLogs: [...(stats.detailedLogs || []), detailedLog],
        totalFocusMinutes: stats.totalFocusMinutes + actualMinutes,
        totalSessions: stats.totalSessions + 1,
        completedSessions: (stats.completedSessions || 0) + 1,
        totalPauseCount: (stats.totalPauseCount || 0) + pauseCount,
        longestSession: Math.max(stats.longestSession || 0, actualMinutes),
        xp: stats.xp + earnedXP,
      };
      
      saveStats(newStats);
      onSessionComplete?.(session);
      
      // Reset session tracking
      setSessionEvents([]);
      setPauseCount(0);
      setCurrentSessionLog(null);
      
      // Auto switch to break
      if ((stats.totalSessions + 1) % 4 === 0) {
        setMode('longBreak');
        setTimeLeft(longBreakDuration * 60);
      } else {
        setMode('shortBreak');
        setTimeLeft(shortBreakDuration * 60);
      }
    } else {
      // Break completed - log it
      logEvent('break_completed', `${mode === 'shortBreak' ? 'Short' : 'Long'} break completed`);
      setMode('focus');
      setTimeLeft(focusDuration * 60);
      setShowGoalSetup(true);
    }
    
    setIsRunning(false);
    setSessionStartTime(null);
    setTotalPausedTime(0);
  };

  const handleStart = () => {
    if (!isRunning) {
      if (!sessionStartTime) {
        // Starting a new session
        setSessionStartTime(new Date());
        setShowGoalSetup(false);
        setSessionEvents([]);
        setPauseCount(0);
        
        // Log session start
        const goalDetails = selectedActivity === 'custom' 
          ? customGoal 
          : ACTIVITY_OPTIONS.find(a => a.id === selectedActivity)?.label;
        logEvent('session_started', `Started ${mode === 'focus' ? 'focus' : 'break'} session: ${goalDetails || 'General'}`);
        
        if (selectedSubject || selectedChapter) {
          logEvent('goal_set', `Subject: ${subjects.find(s => s.id === selectedSubject)?.name || 'None'}, Chapter: ${chapters.find(c => c.id === selectedChapter)?.title || 'None'}`);
        }
      }
      if (pauseStartTime) {
        // Resume from pause
        const pausedDuration = Math.round((new Date().getTime() - pauseStartTime.getTime()) / 1000);
        setTotalPausedTime(prev => prev + pausedDuration);
        setPauseStartTime(null);
        logEvent('session_resumed', `Resumed after ${formatDuration(pausedDuration)} pause`);
      }
      setIsRunning(true);
      playSound(600, 100);
    } else {
      // Pause
      setPauseStartTime(new Date());
      setIsRunning(false);
      setPauseCount(prev => prev + 1);
      logEvent('session_paused', `Paused at ${formatTime(timeLeft)} remaining`);
      playSound(400, 100);
    }
  };

  const handleReset = () => {
    // Log abandoned session if one was in progress
    if (sessionStartTime && mode === 'focus') {
      const endTime = new Date();
      const elapsedSeconds = Math.round((endTime.getTime() - sessionStartTime.getTime()) / 1000) - totalPausedTime;
      const elapsedMinutes = Math.round(elapsedSeconds / 60);
      
      logEvent('session_abandoned', `Abandoned after ${formatDuration(elapsedSeconds)}`);
      
      // Create abandoned session log
      const abandonedLog: DetailedSessionLog = {
        id: Date.now().toString(),
        sessionNumber: stats.totalSessions + 1,
        date: new Date().toDateString(),
        startTime: sessionStartTime.toISOString(),
        endTime: endTime.toISOString(),
        plannedDuration: focusDuration,
        actualDuration: elapsedMinutes,
        type: 'focus',
        status: 'abandoned',
        subject: selectedSubject || undefined,
        subjectName: selectedSubject ? subjects.find(s => s.id === selectedSubject)?.name : undefined,
        chapter: selectedChapter || undefined,
        chapterName: selectedChapter ? chapters.find(c => c.id === selectedChapter)?.title : undefined,
        activity: selectedActivity,
        customGoal: selectedActivity === 'custom' ? customGoal : undefined,
        pauseCount: pauseCount,
        totalPausedTime: totalPausedTime,
        events: [...sessionEvents, { id: Date.now().toString(), timestamp: endTime.toISOString(), eventType: 'session_abandoned' as SessionEventType, timeRemaining: timeLeft }],
        xpEarned: 0,
      };
      
      // Only log if some time was spent (at least 1 minute)
      if (elapsedMinutes >= 1) {
        const newStats: PomodoroStats = {
          ...stats,
          detailedLogs: [...(stats.detailedLogs || []), abandonedLog],
          abandonedSessions: (stats.abandonedSessions || 0) + 1,
          totalPauseCount: (stats.totalPauseCount || 0) + pauseCount,
        };
        saveStats(newStats);
      }
    }
    
    setTimeLeft(getDuration(mode));
    setIsRunning(false);
    setSessionStartTime(null);
    setTotalPausedTime(0);
    setPauseStartTime(null);
    setShowGoalSetup(true);
    setSessionEvents([]);
    setPauseCount(0);
    setCurrentSessionLog(null);
  };

  const handleModeChange = (newMode: TimerMode) => {
    if (isRunning) return; // Don't allow mode change while running
    setMode(newMode);
    setTimeLeft(getDuration(newMode));
    setShowGoalSetup(newMode === 'focus');
  };

  const adjustDuration = (type: 'focus' | 'short' | 'long', delta: number) => {
    if (isRunning) return;
    switch (type) {
      case 'focus':
        const newFocus = Math.max(5, Math.min(90, focusDuration + delta));
        setFocusDuration(newFocus);
        if (mode === 'focus') setTimeLeft(newFocus * 60);
        break;
      case 'short':
        const newShort = Math.max(1, Math.min(30, shortBreakDuration + delta));
        setShortBreakDuration(newShort);
        if (mode === 'shortBreak') setTimeLeft(newShort * 60);
        break;
      case 'long':
        const newLong = Math.max(5, Math.min(60, longBreakDuration + delta));
        setLongBreakDuration(newLong);
        if (mode === 'longBreak') setTimeLeft(newLong * 60);
        break;
    }
  };

  const applyPreset = (preset: typeof TIMER_PRESETS[0]) => {
    setFocusDuration(preset.focus);
    setShortBreakDuration(preset.short);
    setLongBreakDuration(preset.long);
    setTimeLeft(preset.focus * 60);
    setShowPresets(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const formatClockTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  const getEndTime = () => {
    const now = new Date();
    const endTime = new Date(now.getTime() + timeLeft * 1000);
    return formatClockTime(endTime);
  };

  const progress = ((getDuration(mode) - timeLeft) / getDuration(mode)) * 100;
  const xpProgress = (stats.xp % 1000) / 10; // Level every 1000 XP
  const level = Math.floor(stats.xp / 1000) + 1;

  const selectedSubjectData = subjects.find(s => s.id === selectedSubject);
  const chapters = selectedSubjectData?.chapters || [];

  const modeConfig = {
    focus: { color: 'from-red-500 to-orange-500', icon: Brain, label: 'Focus Time' },
    shortBreak: { color: 'from-green-500 to-emerald-500', icon: Coffee, label: 'Short Break' },
    longBreak: { color: 'from-blue-500 to-cyan-500', icon: Coffee, label: 'Long Break' },
  };

  const config = modeConfig[mode];
  const IconComponent = config.icon;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-2">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-lg max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-slate-900 px-4 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            {onClose && (
              <button
                onClick={onClose}
                className="p-2 -ml-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition"
              >
                <ArrowLeft className="w-5 h-5 dark:text-white" />
              </button>
            )}
            <div className={`p-2 rounded-xl bg-gradient-to-r ${config.color}`}>
              <Timer className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-slate-800 dark:text-white">Focus Timer</h2>
              <p className="text-xs text-slate-500">Level {level} • {stats.xp} XP</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSessionLog(!showSessionLog)}
              className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <ListChecks className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            </button>
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {soundEnabled ? (
                <Volume2 className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              ) : (
                <VolumeX className="w-5 h-5 text-slate-400" />
              )}
            </button>
          </div>
        </div>

        <div className="p-4">
          {/* XP Progress Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Sparkles size={12} className="text-yellow-500" /> Level {level}
              </span>
              <span className="text-slate-500 dark:text-slate-400">{stats.xp % 1000}/1000 XP</span>
            </div>
            <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all duration-500"
                style={{ width: `${xpProgress}%` }}
              />
            </div>
          </div>

          {/* Mode Selector */}
          <div className="flex gap-2 mb-4">
            {(['focus', 'shortBreak', 'longBreak'] as TimerMode[]).map((m) => (
              <button
                key={m}
                onClick={() => handleModeChange(m)}
                disabled={isRunning}
                className={`flex-1 py-2.5 px-3 rounded-xl text-sm font-semibold transition-all ${
                  mode === m
                    ? `bg-gradient-to-r ${modeConfig[m].color} text-white shadow-lg`
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                } ${isRunning ? 'opacity-50 cursor-not-allowed' : 'active:scale-95'}`}
              >
                {m === 'focus' ? '🧠 Focus' : m === 'shortBreak' ? '☕ Short' : '🌴 Long'}
              </button>
            ))}
          </div>

          {/* Duration Controls */}
          {!isRunning && (
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-3 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Duration Settings</span>
                <button
                  onClick={() => setShowPresets(!showPresets)}
                  className="text-xs text-indigo-600 dark:text-indigo-400 font-medium flex items-center gap-1"
                >
                  Presets <ChevronDown size={12} />
                </button>
              </div>
              
              {showPresets && (
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {TIMER_PRESETS.map((preset, i) => (
                    <button
                      key={i}
                      onClick={() => applyPreset(preset)}
                      className="text-xs bg-white dark:bg-slate-700 p-2 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-indigo-300 transition"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              )}
              
              <div className="grid grid-cols-3 gap-3">
                {[
                  { type: 'focus' as const, label: 'Focus', value: focusDuration },
                  { type: 'short' as const, label: 'Short', value: shortBreakDuration },
                  { type: 'long' as const, label: 'Long', value: longBreakDuration },
                ].map(({ type, label, value }) => (
                  <div key={type} className="text-center">
                    <span className="text-[10px] text-slate-400 uppercase">{label}</span>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <button
                        onClick={() => adjustDuration(type, -5)}
                        className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center active:scale-90"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-8 text-center font-bold text-slate-700 dark:text-white">{value}</span>
                      <button
                        onClick={() => adjustDuration(type, 5)}
                        className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center active:scale-90"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Goal Setup (shown before starting focus) */}
          {showGoalSetup && mode === 'focus' && !isRunning && (
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-4 mb-4 border border-indigo-100 dark:border-indigo-800">
              <h3 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                <Target size={16} className="text-indigo-500" />
                Set Your Goal
              </h3>
              
              {/* Subject Selection */}
              {subjects.length > 0 && (
                <div className="mb-3">
                  <label className="text-xs text-slate-500 dark:text-slate-400 mb-1 block">Subject</label>
                  <div className="relative">
                    <button
                      onClick={() => setShowSubjectDropdown(!showSubjectDropdown)}
                      className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-left text-sm flex items-center justify-between"
                    >
                      <span className={selectedSubject ? 'text-slate-800 dark:text-white' : 'text-slate-400'}>
                        {selectedSubject ? subjects.find(s => s.id === selectedSubject)?.name : 'Select subject...'}
                      </span>
                      <ChevronDown size={16} className="text-slate-400" />
                    </button>
                    {showSubjectDropdown && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg z-20 max-h-40 overflow-y-auto">
                        <button
                          onClick={() => { setSelectedSubject(''); setSelectedChapter(''); setShowSubjectDropdown(false); }}
                          className="w-full px-3 py-2 text-left text-sm text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700"
                        >
                          No subject
                        </button>
                        {subjects.map(sub => (
                          <button
                            key={sub.id}
                            onClick={() => { setSelectedSubject(sub.id); setSelectedChapter(''); setShowSubjectDropdown(false); }}
                            className="w-full px-3 py-2 text-left text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700"
                          >
                            {sub.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Chapter Selection */}
              {selectedSubject && chapters.length > 0 && (
                <div className="mb-3">
                  <label className="text-xs text-slate-500 dark:text-slate-400 mb-1 block">Chapter</label>
                  <div className="relative">
                    <button
                      onClick={() => setShowChapterDropdown(!showChapterDropdown)}
                      className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-left text-sm flex items-center justify-between"
                    >
                      <span className={selectedChapter ? 'text-slate-800 dark:text-white' : 'text-slate-400'}>
                        {selectedChapter ? chapters.find(c => c.id === selectedChapter)?.title : 'Select chapter...'}
                      </span>
                      <ChevronDown size={16} className="text-slate-400" />
                    </button>
                    {showChapterDropdown && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg z-20 max-h-40 overflow-y-auto">
                        <button
                          onClick={() => { setSelectedChapter(''); setShowChapterDropdown(false); }}
                          className="w-full px-3 py-2 text-left text-sm text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700"
                        >
                          Any chapter
                        </button>
                        {chapters.map(ch => (
                          <button
                            key={ch.id}
                            onClick={() => { setSelectedChapter(ch.id); setShowChapterDropdown(false); }}
                            className="w-full px-3 py-2 text-left text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 truncate"
                          >
                            {ch.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Activity Type */}
              <div className="mb-3">
                <label className="text-xs text-slate-500 dark:text-slate-400 mb-1 block">What will you do?</label>
                <div className="grid grid-cols-3 gap-2">
                  {ACTIVITY_OPTIONS.map(activity => (
                    <button
                      key={activity.id}
                      onClick={() => setSelectedActivity(activity.id)}
                      className={`p-2 rounded-xl text-xs font-medium transition-all ${
                        selectedActivity === activity.id
                          ? 'bg-indigo-500 text-white'
                          : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      <span className="text-lg">{activity.icon}</span>
                      <span className="block mt-1">{activity.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Goal Input */}
              {selectedActivity === 'custom' && (
                <div>
                  <label className="text-xs text-slate-500 dark:text-slate-400 mb-1 block">Describe your goal</label>
                  <div className="relative">
                    <Edit3 size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={customGoal}
                      onChange={(e) => setCustomGoal(e.target.value)}
                      placeholder="e.g., Complete 5 long answers..."
                      className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 pl-9 text-sm"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Timer Display */}
          <div className="relative mb-4">
            <div className="relative w-48 h-48 mx-auto">
              {/* Progress Ring */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 192 192">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-slate-100 dark:text-slate-800"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="url(#timerGradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={553}
                  strokeDashoffset={553 - (553 * progress) / 100}
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={mode === 'focus' ? '#ef4444' : mode === 'shortBreak' ? '#22c55e' : '#3b82f6'} />
                    <stop offset="100%" stopColor={mode === 'focus' ? '#f97316' : mode === 'shortBreak' ? '#10b981' : '#06b6d4'} />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Time Display */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <IconComponent className={`w-8 h-8 mb-2 ${mode === 'focus' ? 'text-red-500' : 'text-green-500'}`} />
                <span className="text-4xl font-black text-slate-800 dark:text-white tracking-tight">
                  {formatTime(timeLeft)}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400 mt-1">{config.label}</span>
              </div>
            </div>
            
            {/* End Time Indicator */}
            {isRunning && (
              <div className="text-center mt-2">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Ends at <span className="font-semibold">{getEndTime()}</span>
                </span>
              </div>
            )}
            
            {/* Session Start Time */}
            {sessionStartTime && (
              <div className="text-center mt-1">
                <span className="text-xs text-slate-400">
                  Started at {formatClockTime(sessionStartTime)}
                </span>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mb-4">
            <button
              onClick={handleReset}
              className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 active:scale-95 transition"
              disabled={!sessionStartTime}
            >
              <RotateCcw className="w-6 h-6 text-slate-600 dark:text-slate-400" />
            </button>
            <button
              onClick={handleStart}
              className={`p-5 rounded-full bg-gradient-to-r ${config.color} text-white shadow-lg active:scale-95 transition-all ${
                isRunning ? 'animate-pulse' : ''
              }`}
            >
              {isRunning ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
            </button>
          </div>

          {/* Motivational Quote (during focus) */}
          {isRunning && mode === 'focus' && (
            <div className="text-center mb-4 px-4">
              <p className="text-sm text-slate-600 dark:text-slate-400 animate-pulse">
                {currentQuote}
              </p>
            </div>
          )}

          {/* Current Goal Display (during session) */}
          {isRunning && mode === 'focus' && (selectedSubject || selectedActivity) && (
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Target size={14} className="text-indigo-500" />
                <span className="text-slate-600 dark:text-slate-300">
                  {ACTIVITY_OPTIONS.find(a => a.id === selectedActivity)?.icon}{' '}
                  {selectedActivity === 'custom' ? customGoal : ACTIVITY_OPTIONS.find(a => a.id === selectedActivity)?.label}
                  {selectedSubject && ` • ${subjects.find(s => s.id === selectedSubject)?.name}`}
                </span>
              </div>
            </div>
          )}

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="text-center p-2 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
              <div className="flex items-center justify-center gap-1 text-orange-500 mb-1">
                <Flame className="w-4 h-4" />
              </div>
              <div className="text-lg font-bold text-slate-800 dark:text-white">{stats.totalSessions}</div>
              <div className="text-[10px] text-slate-500 uppercase">Sessions</div>
            </div>
            <div className="text-center p-2 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
              <div className="flex items-center justify-center gap-1 text-blue-500 mb-1">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-lg font-bold text-slate-800 dark:text-white">{stats.totalFocusMinutes}</div>
              <div className="text-[10px] text-slate-500 uppercase">Minutes</div>
            </div>
            <div className="text-center p-2 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
              <div className="flex items-center justify-center gap-1 text-green-500 mb-1">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="text-lg font-bold text-slate-800 dark:text-white">{stats.currentStreak}</div>
              <div className="text-[10px] text-slate-500 uppercase">Streak</div>
            </div>
            <div className="text-center p-2 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
              <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
                <Trophy className="w-4 h-4" />
              </div>
              <div className="text-lg font-bold text-slate-800 dark:text-white">{Math.floor(stats.totalFocusMinutes / 60)}h</div>
              <div className="text-[10px] text-slate-500 uppercase">Today</div>
            </div>
          </div>

          {/* Session Log */}
          {showSessionLog && (
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              {/* Log Header with Toggle */}
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <History size={14} />
                  Session Log
                </h4>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setLogViewMode(logViewMode === 'simple' ? 'detailed' : 'simple')}
                    className={`text-xs px-2 py-1 rounded-lg transition ${
                      logViewMode === 'detailed' 
                        ? 'bg-indigo-500 text-white' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {logViewMode === 'simple' ? 'Simple' : 'Detailed'}
                  </button>
                </div>
              </div>

              {/* Analytics Summary */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-2 text-center">
                  <div className="text-lg font-bold text-green-600 dark:text-green-400">{stats.completedSessions || 0}</div>
                  <div className="text-[10px] text-green-600 dark:text-green-400">Completed</div>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-2 text-center">
                  <div className="text-lg font-bold text-red-600 dark:text-red-400">{stats.abandonedSessions || 0}</div>
                  <div className="text-[10px] text-red-600 dark:text-red-400">Abandoned</div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-2 text-center">
                  <div className="text-lg font-bold text-orange-600 dark:text-orange-400">{stats.totalPauseCount || 0}</div>
                  <div className="text-[10px] text-orange-600 dark:text-orange-400">Pauses</div>
                </div>
              </div>

              {/* Detailed Logs View */}
              {logViewMode === 'detailed' && stats.detailedLogs && stats.detailedLogs.length > 0 ? (
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {stats.detailedLogs.slice().reverse().map((log) => (
                    <div 
                      key={log.id}
                      className={`rounded-xl p-3 border ${
                        log.status === 'completed' 
                          ? 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800' 
                          : 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800'
                      }`}
                    >
                      {/* Session Header */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {log.status === 'completed' ? (
                            <CheckCircle2 size={16} className="text-green-500" />
                          ) : (
                            <XCircle size={16} className="text-red-500" />
                          )}
                          <span className="font-semibold text-sm text-slate-800 dark:text-white">
                            Session #{log.sessionNumber}
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            log.status === 'completed' 
                              ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' 
                              : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                          }`}>
                            {log.status === 'completed' ? '✓ Completed' : '✗ Abandoned'}
                          </span>
                        </div>
                        {log.xpEarned > 0 && (
                          <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400">
                            +{log.xpEarned} XP
                          </span>
                        )}
                      </div>

                      {/* Session Details Grid */}
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs mb-2">
                        <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                          <Clock size={10} />
                          <span>Started: {new Date(log.startTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                          <Clock size={10} />
                          <span>Ended: {log.endTime ? new Date(log.endTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : 'N/A'}</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                          <Timer size={10} />
                          <span>Planned: {log.plannedDuration}m</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                          <Timer size={10} />
                          <span>Actual: {log.actualDuration}m</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                          <Pause size={10} />
                          <span>Pauses: {log.pauseCount}</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                          <Pause size={10} />
                          <span>Paused: {formatDuration(log.totalPausedTime)}</span>
                        </div>
                      </div>

                      {/* Goal/Subject Info */}
                      {(log.subjectName || log.activity) && (
                        <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 bg-white/50 dark:bg-slate-800/50 rounded-lg p-2">
                          <div className="flex items-center gap-1 flex-wrap">
                            <Target size={10} />
                            {log.activity && (
                              <span>{ACTIVITY_OPTIONS.find(a => a.id === log.activity)?.icon} {ACTIVITY_OPTIONS.find(a => a.id === log.activity)?.label}</span>
                            )}
                            {log.subjectName && <span>• {log.subjectName}</span>}
                            {log.chapterName && <span>• {log.chapterName}</span>}
                          </div>
                          {log.customGoal && (
                            <div className="mt-1 text-slate-600 dark:text-slate-300 italic">"{log.customGoal}"</div>
                          )}
                        </div>
                      )}

                      {/* Event Timeline */}
                      {log.events && log.events.length > 0 && (
                        <div className="mt-2">
                          <button
                            onClick={() => {
                              const el = document.getElementById(`events-${log.id}`);
                              if (el) el.classList.toggle('hidden');
                            }}
                            className="text-xs text-indigo-600 dark:text-indigo-400 flex items-center gap-1 hover:underline"
                          >
                            <FileText size={10} />
                            View Event Log ({log.events.length} events)
                          </button>
                          <div id={`events-${log.id}`} className="hidden mt-2 pl-2 border-l-2 border-slate-200 dark:border-slate-700 space-y-1">
                            {log.events.map((event, idx) => (
                              <div key={idx} className="text-[10px] text-slate-500 dark:text-slate-400 flex items-start gap-2">
                                <span className="text-slate-400 whitespace-nowrap">
                                  {new Date(event.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                                </span>
                                <span className={`font-medium ${
                                  event.eventType === 'session_completed' ? 'text-green-600' :
                                  event.eventType === 'session_abandoned' ? 'text-red-600' :
                                  event.eventType === 'session_paused' ? 'text-orange-600' :
                                  event.eventType === 'session_resumed' ? 'text-blue-600' :
                                  'text-slate-600'
                                }`}>
                                  {event.eventType.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                </span>
                                {event.details && <span className="text-slate-400">- {event.details}</span>}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : logViewMode === 'simple' && stats.sessions.length > 0 ? (
                /* Simple View */
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {stats.sessions.slice().reverse().map((session) => (
                    <div 
                      key={session.id}
                      className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-green-500" />
                        <div>
                          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            {session.activity ? ACTIVITY_OPTIONS.find(a => a.id === session.activity)?.label : 'Focus Session'}
                          </p>
                          <p className="text-xs text-slate-500">
                            {new Date(session.startTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} - 
                            {new Date(session.endTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                        {session.duration}m
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4 text-slate-400 dark:text-slate-500 text-sm">
                  <History size={24} className="mx-auto mb-2 opacity-50" />
                  No sessions logged yet today
                </div>
              )}

              {/* Current Session Live Events (when running) */}
              {sessionStartTime && sessionEvents.length > 0 && (
                <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                  <h5 className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 flex items-center gap-1">
                    <AlertCircle size={12} className="text-orange-500 animate-pulse" />
                    Current Session Events
                  </h5>
                  <div className="pl-2 border-l-2 border-orange-300 dark:border-orange-700 space-y-1 max-h-20 overflow-y-auto">
                    {sessionEvents.map((event, idx) => (
                      <div key={idx} className="text-[10px] text-slate-500 dark:text-slate-400 flex items-start gap-2">
                        <span className="text-slate-400 whitespace-nowrap">
                          {new Date(event.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                        </span>
                        <span className="font-medium text-slate-600 dark:text-slate-300">
                          {event.eventType.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pause indicator during session */}
              {pauseStartTime && (
                <div className="mt-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg p-2 flex items-center gap-2">
                  <Pause size={14} className="text-orange-500 animate-pulse" />
                  <span className="text-xs text-orange-600 dark:text-orange-400">
                    Paused since {formatClockTime(pauseStartTime)} (Pause #{pauseCount})
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Motivational Footer */}
          <div className="mt-4 text-center">
            <p className="text-xs text-slate-400 dark:text-slate-500">
              {stats.totalSessions === 0 && "🚀 Set a goal and start your first focus session!"}
              {stats.totalSessions >= 1 && stats.totalSessions < 4 && "💪 Great progress! You're building momentum!"}
              {stats.totalSessions >= 4 && stats.totalSessions < 8 && "🔥 You're on fire! Keep crushing it!"}
              {stats.totalSessions >= 8 && "🏆 Incredible dedication! You're a study champion!"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimerEnhanced;
