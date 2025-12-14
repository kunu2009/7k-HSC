import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Target, Flame, ChevronDown, ChevronUp } from 'lucide-react';
import { PRELIMS_START_2026, getStreamBoardStartDate } from '../examTimetable';
import { Stream } from '../types';

// Fall-back board start date (first paper) if stream is unknown
const DEFAULT_BOARD_START = new Date('2026-02-21T11:00:00');

interface CountdownTimerProps {
  /** Pass stream to derive the correct board-start date; otherwise uses default */
  stream?: Stream | null;
}

// Helper to resolve board start date
const resolveBoardDate = (stream?: Stream | null): Date => {
  const d = getStreamBoardStartDate(stream ?? null);
  return d ?? DEFAULT_BOARD_START;
};

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

const MOTIVATIONAL_QUOTES = [
  "Every hour of study brings you closer to success! 📚",
  "Champions are made when no one is watching. Keep going! 💪",
  "Your future self will thank you for studying today! 🌟",
  "Small daily improvements lead to stunning results! 🚀",
  "The pain of discipline is less than the pain of regret! 🔥",
  "Success is the sum of small efforts repeated daily! ⭐",
  "Dream big, study hard, stay focused! 🎯",
  "Today's preparation determines tomorrow's achievement! 📖",
  "You're closer than you were yesterday! Keep pushing! 💯",
  "Hard work beats talent when talent doesn't work hard! 🏆",
];

const CountdownTimer: React.FC<CountdownTimerProps> = ({ stream }) => {
  const boardDate = resolveBoardDate(stream);
  const prelimsDate = PRELIMS_START_2026;

  const [timeToBoard, setTimeToBoard] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 });
  const [timeToPrelims, setTimeToPrelims] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 });
  const [showPrelims, setShowPrelims] = useState(false);
  const [quote, setQuote] = useState(MOTIVATIONAL_QUOTES[0]);

  const calculateTimeLeft = (targetDate: Date): TimeLeft => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      total: difference,
    };
  };

  // Get daily quote based on day of year (changes once per day, same quote all day)
  const getDailyQuote = () => {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - startOfYear.getTime();
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    return MOTIVATIONAL_QUOTES[dayOfYear % MOTIVATIONAL_QUOTES.length];
  };

  useEffect(() => {
    // Update countdown every second
    const timer = setInterval(() => {
      setTimeToBoard(calculateTimeLeft(boardDate));
      setTimeToPrelims(calculateTimeLeft(prelimsDate));
    }, 1000);

    // Initial calculation
    setTimeToBoard(calculateTimeLeft(boardDate));
    setTimeToPrelims(calculateTimeLeft(prelimsDate));
    
    // Set daily quote (changes once per day based on day of year)
    setQuote(getDailyQuote());

    return () => {
      clearInterval(timer);
    };
  }, [boardDate, prelimsDate]);

  const getUrgencyColor = (days: number) => {
    if (days <= 7) return 'from-red-500 to-rose-600';
    if (days <= 30) return 'from-orange-500 to-amber-600';
    if (days <= 60) return 'from-yellow-500 to-orange-500';
    return 'from-emerald-500 to-teal-600';
  };

  const getUrgencyText = (days: number) => {
    if (days <= 7) return '🚨 Final Week!';
    if (days <= 14) return '⚡ Last 2 Weeks!';
    if (days <= 30) return '🔥 One Month Left!';
    if (days <= 60) return '📚 Time to Focus!';
    return '✨ You Got This!';
  };

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white/20 backdrop-blur-sm rounded-xl px-3 py-2 min-w-[60px] sm:min-w-[70px]">
        <span className="text-2xl sm:text-3xl font-black tabular-nums">{value.toString().padStart(2, '0')}</span>
      </div>
      <span className="text-[10px] sm:text-xs font-medium mt-1 opacity-80 uppercase tracking-wider">{label}</span>
    </div>
  );

  return (
    <div className="mb-6">
      {/* Main Board Exam Countdown */}
      <div className={`bg-gradient-to-br ${getUrgencyColor(timeToBoard.days)} rounded-3xl p-5 sm:p-6 text-white relative overflow-hidden shadow-xl`}>
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-xl -ml-8 -mb-8"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-white/20 rounded-lg">
                <Calendar size={18} />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base">HSC Board 2026</h3>
                <p className="text-[10px] sm:text-xs opacity-80">{boardDate.toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })} • First Paper</p>
              </div>
            </div>
            <span className="text-xs sm:text-sm font-bold bg-white/20 px-3 py-1 rounded-full">
              {getUrgencyText(timeToBoard.days)}
            </span>
          </div>

          {/* Countdown Display */}
          <div className="flex justify-center gap-2 sm:gap-4 my-4">
            <TimeBlock value={timeToBoard.days} label="Days" />
            <span className="text-2xl sm:text-3xl font-bold self-start mt-2">:</span>
            <TimeBlock value={timeToBoard.hours} label="Hours" />
            <span className="text-2xl sm:text-3xl font-bold self-start mt-2">:</span>
            <TimeBlock value={timeToBoard.minutes} label="Mins" />
            <span className="text-2xl sm:text-3xl font-bold self-start mt-2 hidden sm:block">:</span>
            <div className="hidden sm:block">
              <TimeBlock value={timeToBoard.seconds} label="Secs" />
            </div>
          </div>

          {/* Motivational Quote */}
          <div className="bg-white/10 rounded-xl p-3 mt-4">
            <p className="text-xs sm:text-sm text-center font-medium italic">"{quote}"</p>
          </div>

          {/* Toggle Prelims */}
          <button 
            onClick={() => setShowPrelims(!showPrelims)}
            className="w-full mt-4 flex items-center justify-center gap-2 text-xs font-medium opacity-80 hover:opacity-100 transition"
          >
            {showPrelims ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {showPrelims ? 'Hide Prelims Countdown' : 'Show Prelims Countdown'}
          </button>
        </div>
      </div>

      {/* Prelims Countdown (Collapsible) */}
      {showPrelims && (
        <div className="mt-3 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl p-4 text-white relative overflow-hidden shadow-lg animate-in slide-in-from-top duration-300">
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl -mr-6 -mt-6"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Target size={16} />
                <span className="font-bold text-sm">Prelims Exam</span>
              </div>
              <span className="text-xs opacity-80">Jan 1, 2026</span>
            </div>

            <div className="flex justify-center gap-3">
              <div className="text-center">
                <span className="text-xl font-black">{timeToPrelims.days}</span>
                <span className="text-xs block opacity-80">days</span>
              </div>
              <span className="text-xl">:</span>
              <div className="text-center">
                <span className="text-xl font-black">{timeToPrelims.hours}</span>
                <span className="text-xs block opacity-80">hrs</span>
              </div>
              <span className="text-xl">:</span>
              <div className="text-center">
                <span className="text-xl font-black">{timeToPrelims.minutes}</span>
                <span className="text-xs block opacity-80">min</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Stats Row - shows prelims stats when prelims is expanded, otherwise board stats */}
      {(() => {
        const activeDays = showPrelims ? timeToPrelims.days : timeToBoard.days;
        const label = showPrelims ? 'to Prelims' : 'to Boards';
        return (
          <>
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-3 text-center shadow-sm border border-slate-100 dark:border-slate-700">
                <Flame size={18} className="mx-auto text-orange-500 mb-1" />
                <span className="text-lg font-black text-slate-800 dark:text-white">{activeDays}</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Days Left</span>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-3 text-center shadow-sm border border-slate-100 dark:border-slate-700">
                <Target size={18} className="mx-auto text-indigo-500 mb-1" />
                <span className="text-lg font-black text-slate-800 dark:text-white">{Math.ceil(activeDays / 7)}</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Weeks Left</span>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-3 text-center shadow-sm border border-slate-100 dark:border-slate-700">
                <Clock size={18} className="mx-auto text-emerald-500 mb-1" />
                <span className="text-lg font-black text-slate-800 dark:text-white">{activeDays * 8}</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Study Hours*</span>
              </div>
            </div>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 text-center mt-2">*Assuming 8 hours of study per day {label}</p>
          </>
        );
      })()}
    </div>
  );
};

export default CountdownTimer;
