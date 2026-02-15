import React from 'react';
import { AlertTriangle, Clock, CheckCircle2, BookOpen, Zap, Target, ArrowRight } from 'lucide-react';
import { Stream } from '../types';
import { getNextUpcomingExamDate, HSC_2026_SUBJECT_TIMETABLE } from '../examTimetable';

interface ExamDayBannerProps {
  stream: Stream | null;
  onOpenSubject?: (subjectId: string) => void;
}

// Subject name mapping
const SUBJECT_NAMES: Record<string, string> = {
  eng: 'English',
  hin: 'Hindi',
  mar: 'Marathi',
  san: 'Sanskrit',
  eco: 'Economics',
  ocm: 'OCM',
  sp: 'Secretarial Practice',
  bk: 'Book Keeping',
  phy: 'Physics',
  chem: 'Chemistry',
  math: 'Mathematics',
  bio: 'Biology',
  his: 'History',
  geo: 'Geography',
  pol: 'Political Science',
  soc: 'Sociology',
  psy: 'Psychology',
  phi: 'Philosophy',
  logic: 'Logic',
  it: 'IT',
};

const ExamDayBanner: React.FC<ExamDayBannerProps> = ({ stream, onOpenSubject }) => {
  if (!stream) return null;

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  // Get all exams for this stream
  const streamExams = HSC_2026_SUBJECT_TIMETABLE[stream] || {};

  // Find today's exam
  const todaysExam = Object.entries(streamExams).find(([_, dateStr]) => {
    if (!dateStr) return false;
    const examDate = new Date(dateStr);
    const examDay = new Date(examDate.getFullYear(), examDate.getMonth(), examDate.getDate());
    return examDay.getTime() === today.getTime();
  });

  // Find next upcoming exam (not today)
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextExam = getNextUpcomingExamDate(stream, tomorrow);

  // Check if we're in exam period (between first and last exam)
  const allDates = Object.values(streamExams)
    .map(d => d ? new Date(d) : null)
    .filter((d): d is Date => d !== null);

  const firstExam = allDates.length > 0 ? new Date(Math.min(...allDates.map(d => d.getTime()))) : null;
  const lastExam = allDates.length > 0 ? new Date(Math.max(...allDates.map(d => d.getTime()))) : null;

  const isInExamPeriod = firstExam && lastExam && now >= firstExam && now <= lastExam;
  const isBeforeExams = firstExam && now < firstExam;
  const isAfterExams = lastExam && now > lastExam;

  // If exams are over, show completion message
  if (isAfterExams) {
    return (
      <div className="mb-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-4 text-white shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
            🎉
          </div>
          <div>
            <h3 className="font-bold text-lg">All Exams Complete!</h3>
            <p className="text-white/80 text-sm">Great job! Now relax and await your results.</p>
          </div>
        </div>
      </div>
    );
  }

  // TODAY'S EXAM - Most important banner
  if (todaysExam) {
    const [subjectId, dateStr] = todaysExam;
    const examDate = new Date(dateStr!);
    const examTime = examDate.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
    const subjectName = SUBJECT_NAMES[subjectId] || subjectId.toUpperCase();

    return (
      <div className="mb-4 space-y-3">
        {/* Today's Exam Alert */}
        <div className="bg-gradient-to-r from-red-500 via-red-600 to-orange-500 rounded-2xl p-4 text-white shadow-lg animate-pulse-slow relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                <AlertTriangle size={28} className="animate-bounce" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-white/30 px-2 py-0.5 rounded text-xs font-bold uppercase">Today's Exam</span>
                </div>
                <h3 className="font-black text-2xl">{subjectName}</h3>
                <p className="text-white/90 text-sm flex items-center gap-2">
                  <Clock size={14} /> Starts at {examTime}
                </p>
              </div>
            </div>

            {/* Quick Tips for Exam Day */}
            <div className="bg-white/10 rounded-xl p-3 mt-3">
              <p className="text-xs font-bold mb-2 text-white/90">📝 EXAM DAY TIPS:</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-1 text-white/80">
                  <CheckCircle2 size={12} /> Reach 30 min early
                </div>
                <div className="flex items-center gap-1 text-white/80">
                  <CheckCircle2 size={12} /> Carry admit card
                </div>
                <div className="flex items-center gap-1 text-white/80">
                  <CheckCircle2 size={12} /> Read questions carefully
                </div>
                <div className="flex items-center gap-1 text-white/80">
                  <CheckCircle2 size={12} /> Manage time well
                </div>
              </div>
            </div>

            {/* Open Subject Button */}
            {onOpenSubject && (
              <button
                onClick={() => onOpenSubject(subjectId)}
                className="mt-3 w-full bg-white text-red-600 font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-red-50 transition"
              >
                <BookOpen size={18} />
                Quick Revision for {subjectName}
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Next Exam Preview */}
        {nextExam && (
          <div className="bg-white dark:bg-slate-900 rounded-xl p-3 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Target size={20} />
            </div>
            <div className="flex-1">
              <p className="text-xs text-slate-500 dark:text-slate-400">Next Exam</p>
              <p className="font-bold text-slate-800 dark:text-white">
                {SUBJECT_NAMES[nextExam.subjectId] || nextExam.subjectId.toUpperCase()}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {nextExam.date.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' })}
              </p>
              <p className="text-sm font-bold text-blue-600 dark:text-blue-400">
                {Math.ceil((nextExam.date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))} days
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  // IN EXAM PERIOD but no exam today
  if (isInExamPeriod && nextExam) {
    const daysUntilNext = Math.ceil((nextExam.date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    const subjectName = SUBJECT_NAMES[nextExam.subjectId] || nextExam.subjectId.toUpperCase();

    return (
      <div className="mb-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-4 text-white shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <Zap size={24} />
          </div>
          <div className="flex-1">
            <p className="text-white/80 text-xs font-medium">EXAM PERIOD • Next Paper</p>
            <h3 className="font-bold text-xl">{subjectName}</h3>
            <p className="text-white/80 text-sm">
              {nextExam.date.toLocaleDateString('en-IN', { weekday: 'long', month: 'short', day: 'numeric' })}
            </p>
          </div>
          <div className="text-right">
            <span className="text-3xl font-black">{daysUntilNext}</span>
            <p className="text-xs text-white/80">days left</p>
          </div>
        </div>

        {daysUntilNext <= 2 && onOpenSubject && (
          <button
            onClick={() => onOpenSubject(nextExam.subjectId)}
            className="mt-3 w-full bg-white/20 hover:bg-white/30 text-white font-bold py-2 rounded-xl flex items-center justify-center gap-2 transition"
          >
            <BookOpen size={16} />
            Start Revising {subjectName}
          </button>
        )}
      </div>
    );
  }

  // Before exams - show countdown to first exam
  if (isBeforeExams && firstExam) {
    const daysUntilFirst = Math.ceil((firstExam.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

    if (daysUntilFirst <= 7) {
      return (
        <div className="mb-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-4 text-white shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
              ⚡
            </div>
            <div className="flex-1">
              <p className="text-white/80 text-xs font-medium">BOARDS START IN</p>
              <h3 className="font-bold text-2xl">{daysUntilFirst} Days!</h3>
              <p className="text-white/80 text-sm">Time for final revision</p>
            </div>
          </div>
        </div>
      );
    }
  }

  return null;
};

export default ExamDayBanner;
