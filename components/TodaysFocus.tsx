import React, { useMemo } from 'react';
import { Target, Clock, BookOpen, ChevronRight, Flame, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Stream, Subject } from '../types';
import { HSC_2026_SUBJECT_TIMETABLE, getSubjectBoardExamDate } from '../examTimetable';

interface TodaysFocusProps {
  stream: Stream | null;
  subjects: Subject[];
  completedChapters: Record<string, boolean>;
  onSelectSubject: (subject: Subject) => void;
}

// Subject name mapping
const SUBJECT_NAMES: Record<string, string> = {
  eng: 'English', hin: 'Hindi', mar: 'Marathi', san: 'Sanskrit',
  eco: 'Economics', ocm: 'OCM', sp: 'Secretarial Practice', bk: 'Book Keeping',
  phy: 'Physics', chem: 'Chemistry', math: 'Mathematics', bio: 'Biology',
  his: 'History', geo: 'Geography', pol: 'Political Science',
  soc: 'Sociology', psy: 'Psychology', phi: 'Philosophy', logic: 'Logic',
};

/**
 * Smart "Today's Focus" widget that suggests what to study
 * based on upcoming exams and completion status
 */
const TodaysFocus: React.FC<TodaysFocusProps> = ({
  stream,
  subjects,
  completedChapters,
  onSelectSubject
}) => {
  const recommendations = useMemo(() => {
    if (!stream) return [];

    const now = new Date();
    const recommendations: Array<{
      subject: Subject;
      reason: string;
      urgency: 'critical' | 'high' | 'medium' | 'low';
      daysUntilExam: number;
      completionPercent: number;
    }> = [];

    subjects.forEach(subject => {
      const examDate = getSubjectBoardExamDate(stream, subject.id);
      if (!examDate) return;

      const daysUntil = Math.ceil((examDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

      // Skip if exam has passed
      if (daysUntil < 0) return;

      // Calculate completion percentage
      const totalChapters = subject.chapters.length;
      const completed = subject.chapters.filter(ch =>
        completedChapters[`${subject.id}_${ch.id}`]
      ).length;
      const completionPercent = totalChapters > 0 ? Math.round((completed / totalChapters) * 100) : 0;

      let urgency: 'critical' | 'high' | 'medium' | 'low' = 'low';
      let reason = '';

      // Determine urgency and reason
      if (daysUntil === 0) {
        urgency = 'critical';
        reason = '🚨 EXAM TODAY! Quick revision only';
      } else if (daysUntil <= 2) {
        urgency = 'critical';
        reason = `⚠️ Exam in ${daysUntil} day${daysUntil > 1 ? 's' : ''}! Focus here`;
      } else if (daysUntil <= 5) {
        urgency = 'high';
        reason = `📌 Exam in ${daysUntil} days - prioritize`;
      } else if (daysUntil <= 10 && completionPercent < 50) {
        urgency = 'high';
        reason = `⚡ ${completionPercent}% done, exam in ${daysUntil} days`;
      } else if (completionPercent < 30) {
        urgency = 'medium';
        reason = `📚 Only ${completionPercent}% complete`;
      } else {
        urgency = 'low';
        reason = `✅ ${completionPercent}% done`;
      }

      recommendations.push({
        subject,
        reason,
        urgency,
        daysUntilExam: daysUntil,
        completionPercent,
      });
    });

    // Sort by urgency and days until exam
    const urgencyOrder = { critical: 0, high: 1, medium: 2, low: 3 };
    return recommendations
      .sort((a, b) => {
        if (urgencyOrder[a.urgency] !== urgencyOrder[b.urgency]) {
          return urgencyOrder[a.urgency] - urgencyOrder[b.urgency];
        }
        return a.daysUntilExam - b.daysUntilExam;
      })
      .slice(0, 3); // Top 3 recommendations
  }, [stream, subjects, completedChapters]);

  if (recommendations.length === 0) return null;

  const urgencyColors = {
    critical: 'bg-red-500',
    high: 'bg-orange-500',
    medium: 'bg-yellow-500',
    low: 'bg-green-500',
  };

  const urgencyBg = {
    critical: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
    high: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800',
    medium: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
    low: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
  };

  return (
    <div className="mb-6">
      <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
        <Target size={16} className="text-indigo-500" />
        Today's Focus
      </h3>

      <div className="space-y-3">
        {recommendations.map((rec, idx) => (
          <button
            key={rec.subject.id}
            onClick={() => onSelectSubject(rec.subject)}
            className={`w-full p-4 rounded-xl border ${urgencyBg[rec.urgency]} transition-all hover:scale-[1.01] active:scale-[0.99] text-left`}
          >
            <div className="flex items-center gap-3">
              {/* Priority indicator */}
              <div className={`w-2 h-12 rounded-full ${urgencyColors[rec.urgency]}`} />

              {/* Subject info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-slate-800 dark:text-white">
                    {rec.subject.name}
                  </span>
                  {rec.urgency === 'critical' && (
                    <AlertTriangle size={14} className="text-red-500 animate-pulse" />
                  )}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {rec.reason}
                </p>
              </div>

              {/* Stats */}
              <div className="text-right">
                <div className="text-lg font-bold text-slate-800 dark:text-white">
                  {rec.daysUntilExam === 0 ? 'TODAY' : `${rec.daysUntilExam}d`}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {rec.completionPercent}% done
                </div>
              </div>

              <ChevronRight size={20} className="text-slate-400" />
            </div>

            {/* Progress bar */}
            <div className="mt-3 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${
                  rec.completionPercent >= 80 ? 'bg-green-500' :
                  rec.completionPercent >= 50 ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}
                style={{ width: `${rec.completionPercent}%` }}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TodaysFocus;
