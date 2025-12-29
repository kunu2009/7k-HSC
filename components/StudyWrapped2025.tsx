import React, { useEffect, useMemo, useState } from 'react';
import { Sparkles, Flame, Clock, Trophy, BookOpen, Target, Star, Share2, X, Calendar, Award } from 'lucide-react';

interface StudyWrapped2025Props {
  onClose?: () => void;
}

interface WrappedStats {
  totalMinutes: number;
  totalDays: number;
  longestStreak: number;
  currentStreak: number;
  pomodoroSessions: number;
  focusMinutes: number;
  chaptersTouched: number;
  subjectsTouched: number;
  mcqAttempted: number;
  avgQuizScore: number;
  year: number;
}

// Fallback-safe number formatter
const formatNumber = (num: number) => num.toLocaleString('en-IN');

const StudyWrapped2025: React.FC<StudyWrapped2025Props> = ({ onClose }) => {
  const [stats, setStats] = useState<WrappedStats>({
    totalMinutes: 0,
    totalDays: 0,
    longestStreak: 0,
    currentStreak: 0,
    pomodoroSessions: 0,
    focusMinutes: 0,
    chaptersTouched: 0,
    subjectsTouched: 0,
    mcqAttempted: 0,
    avgQuizScore: 0,
    year: 2025,
  });

  useEffect(() => {
    // Progress core data
    const progressRaw = localStorage.getItem('7k-hsc-progress');
    const progress = progressRaw ? JSON.parse(progressRaw) : {};

    // Study streak data
    const streakRaw = localStorage.getItem('7k-study-streak-data');
    const streak = streakRaw ? JSON.parse(streakRaw) : {};

    // Pomodoro daily snapshot
    const pomoRaw = localStorage.getItem('7k-pomodoro-stats');
    const pomodoro = pomoRaw ? JSON.parse(pomoRaw) : {};

    // Quiz history
    const quizRaw = localStorage.getItem('7k-quiz-history');
    const quizHistory: any[] = quizRaw ? JSON.parse(quizRaw) : [];

    const chapters: Record<string, any> = progress.chapters || {};
    const chapterIds = Object.keys(chapters);
    const subjectsTouched = new Set<string>();
    chapterIds.forEach(id => {
      const ch = chapters[id];
      if (ch && ch.subjectId) subjectsTouched.add(ch.subjectId);
    });

    const totalMinutes = Number(progress.totalStudyTime || 0);
    const totalDays = Number(
      streak.totalStudyDays || progress.streak?.totalStudyDays || Object.keys(streak.days || {}).length || 0
    );
    const longestStreak = Number(streak.longestStreak || progress.streak?.longestStreak || 0);
    const currentStreak = Number(streak.currentStreak || progress.streak?.currentStreak || 0);

    const pomodoroSessions = Number(pomodoro.sessions || 0);
    const focusMinutes = Number(pomodoro.focusMinutes || 0);

    const mcqAttempted = quizHistory.length;
    const avgQuizScore = quizHistory.length
      ? Math.round(
          quizHistory
            .map(item => Number(item.score || item.percentage || 0))
            .reduce((a, b) => a + b, 0) / quizHistory.length
        )
      : 0;

    setStats({
      totalMinutes,
      totalDays,
      longestStreak,
      currentStreak,
      pomodoroSessions,
      focusMinutes,
      chaptersTouched: chapterIds.length,
      subjectsTouched: subjectsTouched.size,
      mcqAttempted,
      avgQuizScore,
      year: 2025,
    });
  }, []);

  const totalHours = useMemo(() => Math.round((stats.totalMinutes + stats.focusMinutes) / 60), [stats]);

  const quickChips = [
    { label: 'Focused hours', value: `${formatNumber(totalHours)}h` },
    { label: 'Study days', value: formatNumber(stats.totalDays) },
    { label: 'Chapters touched', value: formatNumber(stats.chaptersTouched) },
    { label: 'MCQs attempted', value: formatNumber(stats.mcqAttempted) },
  ];

  const highlightCards = [
    {
      title: 'Total Focused Hours',
      value: `${formatNumber(totalHours)}h`,
      caption: `${formatNumber(stats.totalMinutes)} study mins + ${formatNumber(stats.focusMinutes)} pomodoro mins`,
      icon: <Clock className="text-amber-200" size={24} />,
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Days Showed Up',
      value: formatNumber(stats.totalDays),
      caption: `Longest streak ${stats.longestStreak} days • Current ${stats.currentStreak} days`,
      icon: <Flame className="text-rose-200" size={24} />,
      gradient: 'from-rose-500 to-pink-500',
    },
    {
      title: 'Chapters Touched',
      value: `${formatNumber(stats.chaptersTouched)}`,
      caption: `${formatNumber(stats.subjectsTouched)} subjects explored`,
      icon: <BookOpen className="text-emerald-200" size={24} />,
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Quiz Journey',
      value: `${formatNumber(stats.mcqAttempted)} MCQs`,
      caption: stats.avgQuizScore ? `Avg score ${stats.avgQuizScore}%` : 'Keep testing your recall!',
      icon: <Target className="text-sky-200" size={24} />,
      gradient: 'from-sky-500 to-indigo-500',
    },
  ];

  const moments = [
    {
      title: 'Most Consistent Month',
      detail: 'You kept showing up even when it was hard.',
      icon: <Calendar className="text-white/80" size={20} />,
    },
    {
      title: 'Signature Move',
      detail: stats.focusMinutes > stats.totalMinutes
        ? 'Pomodoro pro — short bursts, big gains.'
        : 'Deep work champ — long study sessions rule.',
      icon: <Trophy className="text-white/80" size={20} />,
    },
    {
      title: 'Energy Badge',
      detail: stats.totalDays >= 200
        ? 'Ironclad discipline'
        : stats.totalDays >= 120
          ? 'Relentless grinder'
          : 'Momentum builder',
      icon: <Award className="text-white/80" size={20} />,
    },
  ];

  return (
    <div className="fixed inset-0 z-[120] bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-5xl mx-auto my-6 px-4 md:px-6">
        <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-950 text-white rounded-3xl shadow-2xl overflow-hidden border border-white/10">
        <div className="absolute inset-0 pointer-events-none opacity-40" style={{
          backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0, transparent 35%), radial-gradient(circle at 80% 0%, rgba(99,102,241,0.2) 0, transparent 30%), radial-gradient(circle at 50% 80%, rgba(14,165,233,0.15) 0, transparent 30%)'
        }} />

        <div className="relative p-6 md:p-10 space-y-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-indigo-200 text-xs font-semibold uppercase tracking-[0.2em]">Study Wrapped {stats.year}</p>
              <h2 className="text-2xl md:text-3xl font-black mt-2 flex items-center gap-2 leading-tight">
                <Sparkles size={24} className="text-amber-200" />
                Your 2025 Learning Story
              </h2>
              <p className="text-slate-200/80 text-sm max-w-2xl mt-2">
                A snapshot of how you showed up this year — hours focused, streaks kept, chapters explored, and wins earned.
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-wrap gap-3 text-xs text-white/80">
            {quickChips.map(chip => (
              <span key={chip.label} className="px-3 py-2 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2">
                <span className="text-white font-semibold text-sm">{chip.value}</span>
                <span className="text-white/70">{chip.label}</span>
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {highlightCards.map(card => (
              <div key={card.title} className={`p-4 rounded-2xl bg-gradient-to-r ${card.gradient} shadow-lg shadow-black/20 flex items-start gap-3`}> 
                <div className="p-3 bg-white/15 rounded-xl">
                  {card.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/80 font-semibold">{card.title}</p>
                  <p className="text-2xl font-black leading-tight">{card.value}</p>
                  <p className="text-sm text-white/85">{card.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {moments.map(item => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-4 h-full shadow-inner">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-white/10">{item.icon}</div>
                  <p className="font-semibold text-white">{item.title}</p>
                </div>
                <p className="text-sm text-slate-200/80 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="p-3 bg-indigo-500/40 rounded-xl">
              <Star className="text-yellow-100" size={22} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-white/85">
                You invested <span className="font-bold text-white">{formatNumber(totalHours)} focused hours</span> this year. That's like a full-time month of deep work dedicated to your future self.
              </p>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText(`My 2025 Study Wrapped: ${formatNumber(totalHours)} focused hours, ${formatNumber(stats.totalDays)} study days, longest streak ${stats.longestStreak} days. #7kHSC #StudyWrapped`)}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white text-slate-900 text-sm font-semibold hover:bg-slate-100 transition"
            >
              <Share2 size={16} /> Share
            </button>
          </div>

          <div className="flex flex-wrap gap-3 text-xs text-white/70">
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">2025 • Finishing strong</span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">Momentum over perfection</span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">Consistency &gt; intensity</span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">Celebrate small wins</span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">Keep the streaks kind</span>
          </div>

          <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="text-sm text-white/85">
              Want a stronger start to 2026? Pick one habit to double down on this week.
            </div>
            <div className="flex gap-2 flex-wrap">
              <button className="px-4 py-2 rounded-xl bg-white text-slate-900 text-sm font-semibold hover:bg-slate-100 transition">Set a mini goal</button>
              <button className="px-4 py-2 rounded-xl bg-indigo-500/40 border border-white/20 text-white text-sm font-semibold hover:bg-indigo-500/60 transition">Plan next 7 days</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default StudyWrapped2025;
