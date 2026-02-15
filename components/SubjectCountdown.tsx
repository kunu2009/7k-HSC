import React, { useState, useEffect } from "react";
import { Clock, Target, CheckCircle2, AlertCircle } from "lucide-react";
import { Stream } from "../types";
import { getSubjectBoardExamDate } from "../examTimetable";

interface SubjectCountdownProps {
  stream: Stream | null;
  subjectId: string;
  subjectName: string;
}

/**
 * Compact countdown badge shown in the subject detail header.
 * Uses the per-subject board exam date from examTimetable.ts.
 * Handles past dates gracefully.
 */
const SubjectCountdown: React.FC<SubjectCountdownProps> = ({
  stream,
  subjectId,
  subjectName,
}) => {
  const examDate = getSubjectBoardExamDate(stream, subjectId);

  const [daysLeft, setDaysLeft] = useState<number | null>(null);
  const [isPast, setIsPast] = useState(false);
  const [isToday, setIsToday] = useState(false);

  useEffect(() => {
    if (!examDate) {
      setDaysLeft(null);
      return;
    }
    const calc = () => {
      const now = new Date();
      const diff = examDate.getTime() - now.getTime();
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

      // Check if exam is today
      const today = new Date();
      const isExamToday = examDate.toDateString() === today.toDateString();

      setIsToday(isExamToday);
      setIsPast(diff < 0 && !isExamToday);
      return days > 0 ? days : 0;
    };
    setDaysLeft(calc());
    const id = setInterval(() => setDaysLeft(calc()), 60000); // update every minute
    return () => clearInterval(id);
  }, [examDate]);

  if (daysLeft === null) return null; // no date configured for this subject

  // Exam already happened
  if (isPast) {
    return (
      <div className="mt-4 flex items-center gap-2 px-3 py-2 rounded-xl bg-green-500/90 text-white text-xs font-bold shadow">
        <CheckCircle2 size={14} />
        <span>{subjectName} Exam Complete!</span>
        <span className="opacity-70 ml-auto">
          {examDate?.toLocaleDateString("en-IN", {
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>
    );
  }

  // Exam is today!
  if (isToday) {
    return (
      <div className="mt-4 flex items-center gap-2 px-3 py-2 rounded-xl bg-red-600 text-white text-xs font-bold shadow animate-pulse">
        <AlertCircle size={14} />
        <span>📝 {subjectName} Exam TODAY! All the best!</span>
        <span className="opacity-70 ml-auto">
          {examDate?.toLocaleDateString("en-IN", {
            weekday: "short",
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>
    );
  }

  // Exam is upcoming
  const urgencyColor =
    daysLeft <= 7
      ? "bg-red-500/90"
      : daysLeft <= 30
        ? "bg-orange-500/90"
        : daysLeft <= 60
          ? "bg-yellow-500/90"
          : "bg-emerald-500/90";

  return (
    <div
      className={`mt-4 flex items-center gap-2 px-3 py-2 rounded-xl ${urgencyColor} text-white text-xs font-bold shadow`}
    >
      <Target size={14} />
      <span>
        {subjectName} Exam in <span className="tabular-nums">{daysLeft}</span>{" "}
        day{daysLeft !== 1 ? "s" : ""}
      </span>
      <span className="opacity-70 ml-auto">
        {examDate?.toLocaleDateString("en-IN", {
          month: "short",
          day: "numeric",
        })}
      </span>
    </div>
  );
};

export default SubjectCountdown;
