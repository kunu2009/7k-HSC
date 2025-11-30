import React, { useState, useEffect, useMemo } from 'react';
import { Subject, Chapter } from '../types';
import { Calendar, Target, CheckCircle2, Circle, Clock, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, BookOpen, Zap } from 'lucide-react';

interface StudyPlannerProps {
  subjects: Subject[];
  examDate: Date;
  examName: string;
}

interface ChapterStatus {
  [chapterId: string]: boolean;
}

interface DaySchedule {
  date: Date;
  chapters: { chapter: Chapter; subject: Subject }[];
  isToday: boolean;
  isPast: boolean;
  isCompleted: boolean;
}

const STORAGE_KEY = '7k-hsc-study-planner';

const StudyPlanner: React.FC<StudyPlannerProps> = ({ subjects, examDate, examName }) => {
  const [checkedChapters, setCheckedChapters] = useState<ChapterStatus>({});
  const [expandedSubjects, setExpandedSubjects] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'checklist' | 'calendar'>('checklist');
  const [calendarMonth, setCalendarMonth] = useState(new Date());

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setCheckedChapters(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse study planner data');
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedChapters));
  }, [checkedChapters]);

  // Calculate days remaining
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const daysRemaining = Math.max(0, Math.ceil((examDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));

  // Get all chapters with subject info
  const allChapters = useMemo(() => {
    const chapters: { chapter: Chapter; subject: Subject }[] = [];
    subjects.forEach(subject => {
      subject.chapters.forEach(chapter => {
        chapters.push({ chapter, subject });
      });
    });
    return chapters;
  }, [subjects]);

  // Calculate stats
  const totalChapters = allChapters.length;
  const completedChapters = Object.values(checkedChapters).filter(Boolean).length;
  const remainingChapters = totalChapters - completedChapters;
  const chaptersPerDay = daysRemaining > 0 ? Math.ceil(remainingChapters / daysRemaining) : remainingChapters;

  // Generate study schedule - distribute remaining chapters across days
  const studySchedule = useMemo(() => {
    const schedule: DaySchedule[] = [];
    const uncheckedChapters = allChapters.filter(({ chapter }) => !checkedChapters[chapter.id]);
    
    if (daysRemaining <= 0 || uncheckedChapters.length === 0) return schedule;

    const chaptersPerDayFloat = uncheckedChapters.length / daysRemaining;
    let chapterIndex = 0;

    for (let i = 0; i < daysRemaining; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      
      const startIndex = chapterIndex;
      const endIndex = Math.min(
        Math.ceil((i + 1) * chaptersPerDayFloat),
        uncheckedChapters.length
      );
      
      const dayChapters = uncheckedChapters.slice(startIndex, endIndex);
      chapterIndex = endIndex;

      if (dayChapters.length > 0) {
        schedule.push({
          date,
          chapters: dayChapters,
          isToday: i === 0,
          isPast: false,
          isCompleted: dayChapters.every(({ chapter }) => checkedChapters[chapter.id])
        });
      }
    }

    return schedule;
  }, [allChapters, checkedChapters, daysRemaining, today]);

  // Get schedule for a specific date
  const getScheduleForDate = (date: Date) => {
    return studySchedule.find(s => 
      s.date.toDateString() === date.toDateString()
    );
  };

  // Toggle chapter completion
  const toggleChapter = (chapterId: string) => {
    setCheckedChapters(prev => ({
      ...prev,
      [chapterId]: !prev[chapterId]
    }));
  };

  // Toggle subject expansion
  const toggleSubject = (subjectId: string) => {
    setExpandedSubjects(prev => 
      prev.includes(subjectId) 
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId]
    );
  };

  // Get subject completion
  const getSubjectCompletion = (subject: Subject) => {
    if (subject.chapters.length === 0) return 0;
    const completed = subject.chapters.filter(ch => checkedChapters[ch.id]).length;
    return Math.round((completed / subject.chapters.length) * 100);
  };

  // Calendar helpers
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: (Date | null)[] = [];

    // Add empty slots for days before first day
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }

    // Add all days of month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const monthDays = getDaysInMonth(calendarMonth);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const prevMonth = () => {
    setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCalendarMonth(new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1));
  };

  // Today's schedule
  const todaySchedule = studySchedule.find(s => s.isToday);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden">
      {/* Header Stats */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
        <div className="flex items-center gap-2 mb-2">
          <Calendar size={20} />
          <span className="font-bold text-indigo-100">{examName} Study Plan</span>
        </div>
        <h2 className="text-2xl font-black mb-4">Master Your Syllabus</h2>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/20 backdrop-blur rounded-xl p-3 text-center">
            <div className="text-2xl font-black">{daysRemaining}</div>
            <div className="text-xs text-indigo-100 font-medium">Days Left</div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-xl p-3 text-center">
            <div className="text-2xl font-black">{completedChapters}/{totalChapters}</div>
            <div className="text-xs text-indigo-100 font-medium">Chapters Done</div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-xl p-3 text-center">
            <div className="text-2xl font-black">{chaptersPerDay}</div>
            <div className="text-xs text-indigo-100 font-medium">Per Day Target</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-xs mb-1">
            <span>Overall Progress</span>
            <span>{totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0}%</span>
          </div>
          <div className="h-2 bg-white/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-500"
              style={{ width: `${totalChapters > 0 ? (completedChapters / totalChapters) * 100 : 0}%` }}
            />
          </div>
        </div>
      </div>

      {/* Today's Target Alert */}
      {todaySchedule && todaySchedule.chapters.length > 0 && (
        <div className="mx-4 mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-amber-100 dark:bg-amber-800 rounded-lg shrink-0">
              <Zap size={20} className="text-amber-600 dark:text-amber-300" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-amber-800 dark:text-amber-200">Today's Target</p>
              <p className="text-sm text-amber-600 dark:text-amber-400 mb-2">
                Complete these {todaySchedule.chapters.length} chapter{todaySchedule.chapters.length > 1 ? 's' : ''} today:
              </p>
              <div className="space-y-1">
                {todaySchedule.chapters.slice(0, 3).map(({ chapter, subject }) => (
                  <div key={chapter.id} className="flex items-center gap-2 text-sm">
                    <div className={`w-2 h-2 rounded-full ${subject.color}`} />
                    <span className="text-amber-700 dark:text-amber-300 truncate">{chapter.title}</span>
                  </div>
                ))}
                {todaySchedule.chapters.length > 3 && (
                  <p className="text-xs text-amber-500">+{todaySchedule.chapters.length - 3} more</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab Navigation */}
      <div className="flex border-b border-slate-100 dark:border-slate-800 mx-4 mt-4">
        <button
          onClick={() => setActiveTab('checklist')}
          className={`flex-1 py-3 text-sm font-bold border-b-2 transition-colors ${
            activeTab === 'checklist'
              ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          <CheckCircle2 size={16} className="inline mr-2" />
          Checklist
        </button>
        <button
          onClick={() => setActiveTab('calendar')}
          className={`flex-1 py-3 text-sm font-bold border-b-2 transition-colors ${
            activeTab === 'calendar'
              ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          <Calendar size={16} className="inline mr-2" />
          Calendar
        </button>
      </div>

      {/* Checklist Tab */}
      {activeTab === 'checklist' && (
        <div className="p-4 space-y-3">
          {subjects.map(subject => {
            const isExpanded = expandedSubjects.includes(subject.id);
            const completion = getSubjectCompletion(subject);
            const subjectCompleted = subject.chapters.filter(ch => checkedChapters[ch.id]).length;

            return (
              <div key={subject.id} className="border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleSubject(subject.id)}
                  className="w-full p-4 flex items-center justify-between bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${subject.color} flex items-center justify-center text-white font-bold text-sm`}>
                      {subject.name.substring(0, 2)}
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-slate-800 dark:text-white">{subject.name}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {subjectCompleted}/{subject.chapters.length} chapters • {completion}% done
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${subject.color} transition-all duration-300`}
                        style={{ width: `${completion}%` }}
                      />
                    </div>
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="p-2 space-y-1 bg-white dark:bg-slate-900">
                    {subject.chapters.length === 0 ? (
                      <p className="text-center text-slate-400 py-4 text-sm">No chapters added yet</p>
                    ) : (
                      subject.chapters.map((chapter) => {
                        const isChecked = checkedChapters[chapter.id] || false;
                        return (
                          <button
                            key={chapter.id}
                            onClick={() => toggleChapter(chapter.id)}
                            className={`w-full p-3 rounded-lg flex items-center gap-3 transition-all ${
                              isChecked 
                                ? 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800' 
                                : 'hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent'
                            }`}
                          >
                            {isChecked ? (
                              <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                            ) : (
                              <Circle size={20} className="text-slate-300 dark:text-slate-600 shrink-0" />
                            )}
                            <span className={`text-sm text-left flex-1 ${
                              isChecked 
                                ? 'text-emerald-700 dark:text-emerald-300 line-through' 
                                : 'text-slate-700 dark:text-slate-300'
                            }`}>
                              {chapter.title}
                            </span>
                            {isChecked && (
                              <span className="text-xs text-emerald-500 font-medium">Done!</span>
                            )}
                          </button>
                        );
                      })
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Calendar Tab */}
      {activeTab === 'calendar' && (
        <div className="p-4">
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={prevMonth}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              <ChevronLeft size={20} />
            </button>
            <h3 className="font-bold text-slate-800 dark:text-white">
              {monthNames[calendarMonth.getMonth()]} {calendarMonth.getFullYear()}
            </h3>
            <button 
              onClick={nextMonth}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Weekday Headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-xs font-bold text-slate-400 py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {monthDays.map((date, index) => {
              if (!date) {
                return <div key={`empty-${index}`} className="aspect-square" />;
              }

              const schedule = getScheduleForDate(date);
              const isToday = date.toDateString() === today.toDateString();
              const isExamDay = date.toDateString() === examDate.toDateString();
              const isPast = date < today;
              const hasChapters = schedule && schedule.chapters.length > 0;

              return (
                <div
                  key={date.toISOString()}
                  className={`aspect-square p-1 rounded-lg border transition-all ${
                    isExamDay
                      ? 'bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-700'
                      : isToday
                      ? 'bg-indigo-100 dark:bg-indigo-900/30 border-indigo-300 dark:border-indigo-700'
                      : hasChapters
                      ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800'
                      : isPast
                      ? 'bg-slate-50 dark:bg-slate-800/50 border-transparent opacity-50'
                      : 'border-slate-100 dark:border-slate-800'
                  }`}
                >
                  <div className="h-full flex flex-col">
                    <span className={`text-xs font-bold ${
                      isExamDay
                        ? 'text-red-600 dark:text-red-400'
                        : isToday
                        ? 'text-indigo-600 dark:text-indigo-400'
                        : 'text-slate-600 dark:text-slate-400'
                    }`}>
                      {date.getDate()}
                    </span>
                    {hasChapters && (
                      <div className="flex-1 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                          {schedule.chapters.length}ch
                        </span>
                      </div>
                    )}
                    {isExamDay && (
                      <span className="text-[8px] font-bold text-red-600 dark:text-red-400 truncate">
                        EXAM
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-indigo-500" />
              <span className="text-slate-600 dark:text-slate-400">Today</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-emerald-500" />
              <span className="text-slate-600 dark:text-slate-400">Study Day</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-red-500" />
              <span className="text-slate-600 dark:text-slate-400">Exam</span>
            </div>
          </div>

          {/* Daily Schedule List */}
          <div className="mt-6">
            <h4 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
              <BookOpen size={16} />
              Upcoming Schedule
            </h4>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {studySchedule.slice(0, 7).map((day, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border ${
                    day.isToday
                      ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800'
                      : 'bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm font-bold ${
                      day.isToday ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300'
                    }`}>
                      {day.isToday ? '📍 Today' : day.date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {day.chapters.length} chapter{day.chapters.length > 1 ? 's' : ''}
                    </span>
                  </div>
                  <div className="space-y-1">
                    {day.chapters.map(({ chapter, subject }) => (
                      <div key={chapter.id} className="flex items-center gap-2 text-xs">
                        <div className={`w-2 h-2 rounded-full ${subject.color}`} />
                        <span className="text-slate-600 dark:text-slate-400 truncate">{chapter.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      {completedChapters === totalChapters && totalChapters > 0 ? (
        <div className="m-4 p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl text-center">
          <div className="text-3xl mb-2">🎉</div>
          <p className="font-bold text-emerald-700 dark:text-emerald-300">Syllabus Complete!</p>
          <p className="text-sm text-emerald-600 dark:text-emerald-400">Focus on revision and practice papers!</p>
        </div>
      ) : (
        <div className="m-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            <Clock size={14} className="inline mr-1" />
            {remainingChapters} chapters remaining • Stay consistent!
          </p>
        </div>
      )}
    </div>
  );
};

export default StudyPlanner;
