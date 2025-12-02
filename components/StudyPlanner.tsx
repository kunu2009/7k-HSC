import React, { useState, useEffect, useMemo } from 'react';
import { Subject, Chapter } from '../types';
import { Calendar, Target, CheckCircle2, Circle, Clock, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, BookOpen, Zap, AlertTriangle, TrendingUp, Award, Brain, Coffee, Moon, Sun, Flame, Star, BarChart3, FileText, RefreshCw, AlertCircle, Sparkles } from 'lucide-react';
import { db, ExamMarks, UserProfile, STREAM_SUBJECTS } from '../services/localDb';

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

// Plan types for personalized study plans
type PlanType = 'balanced' | 'weak-focus' | 'sprint' | 'revision';

interface SubjectAnalysis {
  subjectId: string;
  subjectName: string;
  avgMarks: number;
  maxMarks: number;
  percentage: number;
  status: 'weak' | 'average' | 'strong';
  priority: number;
  chaptersTotal: number;
  chaptersCompleted: number;
  hoursNeeded: number;
}

interface WeeklyPlan {
  weekNumber: number;
  startDate: Date;
  endDate: Date;
  focus: string;
  subjects: { name: string; hours: number; priority: 'high' | 'medium' | 'low' }[];
  goals: string[];
}

interface DailyScheduleSlot {
  time: string;
  subject: string;
  activity: string;
  duration: number;
}

const STORAGE_KEY = '7k-hsc-study-planner';
const PLAN_STORAGE_KEY = '7k-hsc-selected-plan';

// Maharashtra HSC Important Dates (approximate)
const PRELIMS_DATE = new Date(2025, 1, 15); // Feb 15, 2025
const BOARDS_DATE = new Date(2025, 2, 1); // March 1, 2025

const StudyPlanner: React.FC<StudyPlannerProps> = ({ subjects, examDate, examName }) => {
  const [checkedChapters, setCheckedChapters] = useState<ChapterStatus>({});
  const [expandedSubjects, setExpandedSubjects] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'plan' | 'checklist' | 'calendar' | 'weekly'>('plan');
  const [calendarMonth, setCalendarMonth] = useState(new Date());
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('balanced');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [examMarks, setExamMarks] = useState<ExamMarks[]>([]);
  const [showPlanSelector, setShowPlanSelector] = useState(false);

  // Load user profile and exam marks
  useEffect(() => {
    const loadUserData = () => {
      const profile = db.getUserProfile();
      const marks = db.getAllMarks();
      setUserProfile(profile);
      setExamMarks(marks);
    };
    loadUserData();
    
    // Load selected plan
    const savedPlan = localStorage.getItem(PLAN_STORAGE_KEY);
    if (savedPlan && ['balanced', 'weak-focus', 'sprint', 'revision'].includes(savedPlan)) {
      setSelectedPlan(savedPlan as PlanType);
    }
  }, []);

  // Save selected plan
  useEffect(() => {
    localStorage.setItem(PLAN_STORAGE_KEY, selectedPlan);
  }, [selectedPlan]);

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

  // COMPREHENSIVE SUBJECT ANALYSIS based on marks
  const subjectAnalysis: SubjectAnalysis[] = useMemo(() => {
    const analysis: SubjectAnalysis[] = [];
    
    subjects.forEach(subject => {
      // Find marks for this subject from all exams
      let totalMarks = 0;
      let totalMaxMarks = 0;
      let examCount = 0;
      
      examMarks.forEach(exam => {
        const subjectMark = exam.subjects.find(s => 
          s.subjectId.toLowerCase() === subject.id.toLowerCase() ||
          s.subjectName.toLowerCase() === subject.name.toLowerCase()
        );
        if (subjectMark) {
          totalMarks += subjectMark.marksObtained;
          totalMaxMarks += subjectMark.maxMarks;
          examCount++;
        }
      });
      
      const avgMarks = examCount > 0 ? totalMarks / examCount : 0;
      const maxMarks = examCount > 0 ? totalMaxMarks / examCount : 100;
      const percentage = maxMarks > 0 ? (avgMarks / maxMarks) * 100 : 50; // Default to 50% if no data
      
      let status: 'weak' | 'average' | 'strong';
      let priority: number;
      
      if (percentage < 45) {
        status = 'weak';
        priority = 3; // Highest priority
      } else if (percentage < 70) {
        status = 'average';
        priority = 2;
      } else {
        status = 'strong';
        priority = 1;
      }
      
      const chaptersTotal = subject.chapters.length;
      const chaptersCompleted = subject.chapters.filter(ch => checkedChapters[ch.id]).length;
      
      // Estimate hours needed (2 hours per chapter for weak, 1.5 for average, 1 for strong)
      const hoursPerChapter = status === 'weak' ? 2 : status === 'average' ? 1.5 : 1;
      const remainingChapters = chaptersTotal - chaptersCompleted;
      const hoursNeeded = remainingChapters * hoursPerChapter;
      
      analysis.push({
        subjectId: subject.id,
        subjectName: subject.name,
        avgMarks,
        maxMarks,
        percentage,
        status,
        priority,
        chaptersTotal,
        chaptersCompleted,
        hoursNeeded
      });
    });
    
    // Sort by priority (weak subjects first)
    return analysis.sort((a, b) => b.priority - a.priority);
  }, [subjects, examMarks, checkedChapters]);

  // Calculate days until prelims and boards
  const daysUntilPrelims = Math.max(0, Math.ceil((PRELIMS_DATE.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));
  const daysUntilBoards = Math.max(0, Math.ceil((BOARDS_DATE.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));

  // Generate personalized study plan based on selected plan type
  const generateWeeklyPlan = useMemo((): WeeklyPlan[] => {
    const weeks: WeeklyPlan[] = [];
    const weeksRemaining = Math.ceil(daysRemaining / 7);
    const weakSubjects = subjectAnalysis.filter(s => s.status === 'weak');
    const avgSubjects = subjectAnalysis.filter(s => s.status === 'average');
    const strongSubjects = subjectAnalysis.filter(s => s.status === 'strong');
    
    for (let i = 0; i < Math.min(weeksRemaining, 12); i++) {
      const startDate = new Date(today);
      startDate.setDate(startDate.getDate() + (i * 7));
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + 6);
      
      let focus: string;
      let subjectsForWeek: { name: string; hours: number; priority: 'high' | 'medium' | 'low' }[];
      let goals: string[];
      
      // Different allocation based on plan type
      switch (selectedPlan) {
        case 'weak-focus':
          // Heavy focus on weak subjects
          focus = weakSubjects.length > 0 
            ? `Focus on ${weakSubjects.map(s => s.subjectName).slice(0, 2).join(' & ')}`
            : 'Maintain strong performance';
          subjectsForWeek = [
            ...weakSubjects.map(s => ({ name: s.subjectName, hours: 12, priority: 'high' as const })),
            ...avgSubjects.map(s => ({ name: s.subjectName, hours: 6, priority: 'medium' as const })),
            ...strongSubjects.map(s => ({ name: s.subjectName, hours: 3, priority: 'low' as const })),
          ];
          goals = [
            weakSubjects.length > 0 ? `Complete 3-4 chapters of ${weakSubjects[0]?.subjectName}` : 'Review all subjects',
            'Solve previous year questions for weak subjects',
            'Practice numerical problems if applicable'
          ];
          break;
          
        case 'sprint':
          // Fast coverage of all subjects
          focus = 'Quick Syllabus Coverage Mode';
          const totalSubjects = subjects.length;
          const hoursPerSubject = Math.floor(42 / totalSubjects); // 6 hours/day * 7 days
          subjectsForWeek = subjectAnalysis.map(s => ({
            name: s.subjectName,
            hours: hoursPerSubject,
            priority: s.status === 'weak' ? 'high' as const : 'medium' as const
          }));
          goals = [
            `Cover 5-6 chapters across all subjects`,
            'Focus on key concepts and formulas',
            'Skip detailed theory, focus on exam-oriented content'
          ];
          break;
          
        case 'revision':
          // Revision and practice focused
          focus = 'Revision & Practice Mode';
          subjectsForWeek = subjectAnalysis.map(s => ({
            name: s.subjectName,
            hours: 6,
            priority: s.chaptersCompleted < s.chaptersTotal ? 'high' as const : 'medium' as const
          }));
          goals = [
            'Complete 2 practice papers per subject',
            'Revise formulas and key concepts',
            'Focus on high-weightage topics'
          ];
          break;
          
        default: // balanced
          focus = 'Balanced Study Approach';
          subjectsForWeek = [
            ...weakSubjects.map(s => ({ name: s.subjectName, hours: 8, priority: 'high' as const })),
            ...avgSubjects.map(s => ({ name: s.subjectName, hours: 6, priority: 'medium' as const })),
            ...strongSubjects.map(s => ({ name: s.subjectName, hours: 4, priority: 'low' as const })),
          ];
          goals = [
            'Complete 2-3 chapters per subject',
            'Maintain notes for quick revision',
            'Solve at least 20 MCQs daily'
          ];
      }
      
      weeks.push({
        weekNumber: i + 1,
        startDate,
        endDate,
        focus,
        subjects: subjectsForWeek.slice(0, 6),
        goals
      });
    }
    
    return weeks;
  }, [selectedPlan, subjectAnalysis, daysRemaining, subjects, today]);

  // Generate daily schedule template
  const dailyScheduleTemplate: DailyScheduleSlot[] = useMemo(() => {
    const weakSubjects = subjectAnalysis.filter(s => s.status === 'weak');
    const avgSubjects = subjectAnalysis.filter(s => s.status === 'average');
    
    if (selectedPlan === 'sprint') {
      return [
        { time: '6:00 AM', subject: 'Any', activity: '🧠 Quick revision of yesterday', duration: 30 },
        { time: '6:30 AM', subject: weakSubjects[0]?.subjectName || 'Subject 1', activity: '📚 New chapter study', duration: 90 },
        { time: '8:00 AM', subject: 'Break', activity: '☕ Breakfast', duration: 30 },
        { time: '8:30 AM', subject: weakSubjects[1]?.subjectName || 'Subject 2', activity: '📚 Chapter continuation', duration: 90 },
        { time: '10:00 AM', subject: avgSubjects[0]?.subjectName || 'Subject 3', activity: '📖 Concept learning', duration: 90 },
        { time: '11:30 AM', subject: 'Break', activity: '🍎 Short break', duration: 30 },
        { time: '12:00 PM', subject: 'Practice', activity: '✍️ MCQ Practice (50 questions)', duration: 60 },
        { time: '1:00 PM', subject: 'Break', activity: '🍽️ Lunch + Rest', duration: 90 },
        { time: '2:30 PM', subject: avgSubjects[1]?.subjectName || 'Subject 4', activity: '📚 Study session', duration: 90 },
        { time: '4:00 PM', subject: 'Any', activity: '📝 Notes making', duration: 60 },
        { time: '5:00 PM', subject: 'Break', activity: '🏃 Physical activity', duration: 60 },
        { time: '6:00 PM', subject: weakSubjects[0]?.subjectName || 'Subject 1', activity: '🔄 Revision + Doubts', duration: 90 },
        { time: '7:30 PM', subject: 'Break', activity: '🍽️ Dinner', duration: 60 },
        { time: '8:30 PM', subject: 'Practice', activity: '📋 Previous year papers', duration: 90 },
        { time: '10:00 PM', subject: 'Any', activity: '📖 Light reading + Sleep prep', duration: 30 },
      ];
    }
    
    // Default balanced schedule
    return [
      { time: '6:00 AM', subject: 'Any', activity: '🧘 Meditation + Planning', duration: 30 },
      { time: '6:30 AM', subject: weakSubjects[0]?.subjectName || 'Subject 1', activity: '📚 Deep study session', duration: 120 },
      { time: '8:30 AM', subject: 'Break', activity: '☕ Breakfast', duration: 30 },
      { time: '9:00 AM', subject: avgSubjects[0]?.subjectName || 'Subject 2', activity: '📖 Concept learning', duration: 90 },
      { time: '10:30 AM', subject: 'Break', activity: '🍎 Short break', duration: 15 },
      { time: '10:45 AM', subject: 'Practice', activity: '✍️ MCQ Practice (30 questions)', duration: 45 },
      { time: '11:30 AM', subject: avgSubjects[1]?.subjectName || 'Subject 3', activity: '📚 Study session', duration: 90 },
      { time: '1:00 PM', subject: 'Break', activity: '🍽️ Lunch + Power nap', duration: 120 },
      { time: '3:00 PM', subject: weakSubjects[1]?.subjectName || 'Subject 4', activity: '📚 Focus session', duration: 90 },
      { time: '4:30 PM', subject: 'Break', activity: '☕ Tea break', duration: 30 },
      { time: '5:00 PM', subject: 'Any', activity: '📝 Notes + Formulas', duration: 60 },
      { time: '6:00 PM', subject: 'Break', activity: '🏃 Exercise/Walk', duration: 60 },
      { time: '7:00 PM', subject: 'Revision', activity: '🔄 Day\'s revision', duration: 60 },
      { time: '8:00 PM', subject: 'Break', activity: '🍽️ Dinner', duration: 60 },
      { time: '9:00 PM', subject: 'Practice', activity: '📋 Previous year questions', duration: 90 },
      { time: '10:30 PM', subject: 'Any', activity: '📖 Light reading + Sleep', duration: 30 },
    ];
  }, [selectedPlan, subjectAnalysis]);

  // Plan descriptions
  const planDescriptions = {
    'balanced': {
      name: 'Balanced Plan',
      icon: '⚖️',
      description: 'Equal focus on all subjects with extra time for weak areas',
      ideal: 'For students with 60+ days remaining',
      color: 'from-blue-500 to-indigo-500'
    },
    'weak-focus': {
      name: 'Weak Subject Focus',
      icon: '🎯',
      description: 'Maximum time on weak subjects, quick revision for strong ones',
      ideal: 'When you need to improve specific subjects significantly',
      color: 'from-red-500 to-orange-500'
    },
    'sprint': {
      name: 'Sprint Mode',
      icon: '🚀',
      description: 'Fast-paced coverage with focus on key concepts only',
      ideal: 'When time is limited (30 days or less)',
      color: 'from-purple-500 to-pink-500'
    },
    'revision': {
      name: 'Revision Mode',
      icon: '🔄',
      description: 'Focus on practice papers and revision, minimal new learning',
      ideal: 'When syllabus is mostly complete',
      color: 'from-emerald-500 to-teal-500'
    }
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
      <div className="flex border-b border-slate-100 dark:border-slate-800 mx-4 mt-4 overflow-x-auto">
        <button
          onClick={() => setActiveTab('plan')}
          className={`flex-1 py-3 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
            activeTab === 'plan'
              ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          <Target size={16} className="inline mr-1" />
          My Plan
        </button>
        <button
          onClick={() => setActiveTab('weekly')}
          className={`flex-1 py-3 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
            activeTab === 'weekly'
              ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          <BarChart3 size={16} className="inline mr-1" />
          Weekly
        </button>
        <button
          onClick={() => setActiveTab('checklist')}
          className={`flex-1 py-3 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
            activeTab === 'checklist'
              ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          <CheckCircle2 size={16} className="inline mr-1" />
          Chapters
        </button>
        <button
          onClick={() => setActiveTab('calendar')}
          className={`flex-1 py-3 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${
            activeTab === 'calendar'
              ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          <Calendar size={16} className="inline mr-1" />
          Calendar
        </button>
      </div>

      {/* MY PLAN TAB - Comprehensive Personalized Plan */}
      {activeTab === 'plan' && (
        <div className="p-4 space-y-4">
          {/* Exam Countdown Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl text-white">
              <div className="text-xs font-medium opacity-80">Prelims</div>
              <div className="text-2xl font-black">{daysUntilPrelims}</div>
              <div className="text-xs opacity-80">days left</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl text-white">
              <div className="text-xs font-medium opacity-80">Boards</div>
              <div className="text-2xl font-black">{daysUntilBoards}</div>
              <div className="text-xs opacity-80">days left</div>
            </div>
          </div>

          {/* Subject Analysis Based on Marks */}
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                <BarChart3 size={18} />
                Your Subject Analysis
              </h3>
              {examMarks.length === 0 && (
                <span className="text-xs text-amber-600 dark:text-amber-400 flex items-center gap-1">
                  <AlertCircle size={12} />
                  Add marks for better analysis
                </span>
              )}
            </div>
            
            <div className="space-y-2">
              {subjectAnalysis.map(analysis => (
                <div key={analysis.subjectId} className="flex items-center gap-3">
                  <div className={`w-16 h-2 rounded-full overflow-hidden ${
                    analysis.status === 'weak' ? 'bg-red-200 dark:bg-red-900' :
                    analysis.status === 'average' ? 'bg-amber-200 dark:bg-amber-900' :
                    'bg-emerald-200 dark:bg-emerald-900'
                  }`}>
                    <div 
                      className={`h-full transition-all ${
                        analysis.status === 'weak' ? 'bg-red-500' :
                        analysis.status === 'average' ? 'bg-amber-500' :
                        'bg-emerald-500'
                      }`}
                      style={{ width: `${analysis.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 flex-1">
                    {analysis.subjectName}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                    analysis.status === 'weak' ? 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300' :
                    analysis.status === 'average' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300' :
                    'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300'
                  }`}>
                    {analysis.status === 'weak' ? '🔴 Needs Focus' : 
                     analysis.status === 'average' ? '🟡 Improve' : 
                     '🟢 Strong'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Plan Selector */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
            <button
              onClick={() => setShowPlanSelector(!showPlanSelector)}
              className="w-full p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${planDescriptions[selectedPlan].color} flex items-center justify-center text-2xl`}>
                  {planDescriptions[selectedPlan].icon}
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-slate-800 dark:text-white">
                    {planDescriptions[selectedPlan].name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {planDescriptions[selectedPlan].description}
                  </p>
                </div>
              </div>
              <ChevronDown size={20} className={`transition-transform ${showPlanSelector ? 'rotate-180' : ''}`} />
            </button>
            
            {showPlanSelector && (
              <div className="border-t border-slate-100 dark:border-slate-800 p-2 space-y-2">
                {(Object.keys(planDescriptions) as PlanType[]).map(planType => (
                  <button
                    key={planType}
                    onClick={() => {
                      setSelectedPlan(planType);
                      setShowPlanSelector(false);
                    }}
                    className={`w-full p-3 rounded-xl flex items-center gap-3 transition-all ${
                      selectedPlan === planType
                        ? 'bg-indigo-50 dark:bg-indigo-900/30 border-2 border-indigo-500'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800 border-2 border-transparent'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${planDescriptions[planType].color} flex items-center justify-center text-xl`}>
                      {planDescriptions[planType].icon}
                    </div>
                    <div className="text-left flex-1">
                      <h5 className="font-bold text-slate-800 dark:text-white text-sm">
                        {planDescriptions[planType].name}
                      </h5>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {planDescriptions[planType].ideal}
                      </p>
                    </div>
                    {selectedPlan === planType && (
                      <CheckCircle2 size={20} className="text-indigo-500" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Daily Schedule Template */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl p-4">
            <h3 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
              <Clock size={18} />
              Your Daily Schedule Template
            </h3>
            
            <div className="space-y-1 max-h-80 overflow-y-auto">
              {dailyScheduleTemplate.map((slot, idx) => (
                <div 
                  key={idx}
                  className={`flex items-center gap-3 p-2 rounded-lg ${
                    slot.subject === 'Break' 
                      ? 'bg-emerald-50 dark:bg-emerald-900/20' 
                      : 'bg-white dark:bg-slate-800'
                  }`}
                >
                  <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 w-16">
                    {slot.time}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                    slot.subject === 'Break' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-800 dark:text-emerald-300' :
                    slot.subject === 'Practice' ? 'bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-purple-300' :
                    slot.subject === 'Revision' ? 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-300' :
                    'bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-indigo-300'
                  }`}>
                    {slot.subject}
                  </span>
                  <span className="text-sm text-slate-600 dark:text-slate-300 flex-1">
                    {slot.activity}
                  </span>
                  <span className="text-xs text-slate-400">
                    {slot.duration}m
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Personalized Tips based on marks */}
          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4 border border-indigo-200 dark:border-indigo-800">
            <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2 flex items-center gap-2">
              <Sparkles size={18} />
              Personalized Tips for You
            </h3>
            <ul className="space-y-2 text-sm text-indigo-700 dark:text-indigo-300">
              {subjectAnalysis.filter(s => s.status === 'weak').length > 0 && (
                <li className="flex items-start gap-2">
                  <AlertTriangle size={14} className="mt-0.5 shrink-0 text-red-500" />
                  <span>
                    Focus on <strong>{subjectAnalysis.filter(s => s.status === 'weak').map(s => s.subjectName).join(', ')}</strong> - 
                    these need immediate attention based on your marks
                  </span>
                </li>
              )}
              {daysUntilPrelims < 30 && (
                <li className="flex items-start gap-2">
                  <Flame size={14} className="mt-0.5 shrink-0 text-orange-500" />
                  <span>Prelims are very close! Switch to Sprint Mode for faster coverage</span>
                </li>
              )}
              {completedChapters / totalChapters > 0.7 && (
                <li className="flex items-start gap-2">
                  <Award size={14} className="mt-0.5 shrink-0 text-emerald-500" />
                  <span>Great progress! Consider switching to Revision Mode for practice</span>
                </li>
              )}
              <li className="flex items-start gap-2">
                <Brain size={14} className="mt-0.5 shrink-0 text-purple-500" />
                <span>
                  Study weak subjects in the morning when focus is highest
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Target size={14} className="mt-0.5 shrink-0 text-blue-500" />
                <span>
                  Complete {chaptersPerDay} chapter{chaptersPerDay > 1 ? 's' : ''} daily to finish on time
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* WEEKLY TAB */}
      {activeTab === 'weekly' && (
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-800 dark:text-white">
              {generateWeeklyPlan.length}-Week Plan
            </h3>
            <span className="text-xs bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded-full font-medium">
              {planDescriptions[selectedPlan].name}
            </span>
          </div>
          
          <div className="space-y-3 max-h-[500px] overflow-y-auto">
            {generateWeeklyPlan.map((week, idx) => (
              <div 
                key={idx}
                className={`border rounded-xl overflow-hidden ${
                  idx === 0 
                    ? 'border-indigo-300 dark:border-indigo-700 bg-indigo-50/50 dark:bg-indigo-900/20' 
                    : 'border-slate-200 dark:border-slate-700'
                }`}
              >
                <div className={`p-3 ${idx === 0 ? 'bg-indigo-100 dark:bg-indigo-900/40' : 'bg-slate-50 dark:bg-slate-800/50'}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800 dark:text-white">
                      {idx === 0 ? '📍 This Week' : `Week ${week.weekNumber}`}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {week.startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - 
                      {week.endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mt-1">
                    {week.focus}
                  </p>
                </div>
                
                <div className="p-3 space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {week.subjects.slice(0, 4).map((subj, sIdx) => (
                      <span 
                        key={sIdx}
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          subj.priority === 'high' 
                            ? 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300' 
                            : subj.priority === 'medium'
                            ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300'
                            : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                        }`}
                      >
                        {subj.name} ({subj.hours}h)
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Goals:</p>
                    <ul className="space-y-1">
                      {week.goals.map((goal, gIdx) => (
                        <li key={gIdx} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                          <span className="text-indigo-500">•</span>
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

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
