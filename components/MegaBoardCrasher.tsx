import React, { useState, useEffect, useMemo } from 'react';

interface PhaseTask {
  id: string;
  day: number;
  date: string;
  subject: string;
  subjectId: string;
  task: string;
  completed: boolean;
  priority: 'critical' | 'high' | 'medium';
}

interface ExamDate {
  subject: string;
  subjectId: string;
  date: string;
  time: string;
  color: string;
}

interface MegaBoardCrasherProps {
  onClose: () => void;
  selectedSubjects?: string[]; // Subject IDs like 'eng', 'his', 'pol', etc.
}

// Subject ID to display name mapping
const SUBJECT_MAP: Record<string, { name: string; shortName: string; color: string }> = {
  'eng': { name: 'English', shortName: 'English', color: 'bg-blue-500' },
  'hin': { name: 'Hindi', shortName: 'Hindi', color: 'bg-amber-500' },
  'mar': { name: 'Marathi', shortName: 'Marathi', color: 'bg-purple-500' },
  'san': { name: 'Sanskrit', shortName: 'Sanskrit', color: 'bg-pink-500' },
  'pol': { name: 'Political Science', shortName: 'Pol Science', color: 'bg-red-500' },
  'eco': { name: 'Economics', shortName: 'Economics', color: 'bg-indigo-500' },
  'geo': { name: 'Geography', shortName: 'Geography', color: 'bg-teal-500' },
  'his': { name: 'History', shortName: 'History', color: 'bg-orange-500' },
  'soc': { name: 'Sociology', shortName: 'Sociology', color: 'bg-lime-500' },
  'psy': { name: 'Psychology', shortName: 'Psychology', color: 'bg-rose-500' },
  'phi': { name: 'Philosophy', shortName: 'Philosophy', color: 'bg-cyan-500' },
  'log': { name: 'Logic', shortName: 'Logic', color: 'bg-gray-500' },
};

// All exam dates with subject IDs
const ALL_EXAM_DATES: ExamDate[] = [
  { subject: 'English', subjectId: 'eng', date: '2026-02-10', time: '11:00 AM', color: 'bg-blue-500' },
  { subject: 'Hindi', subjectId: 'hin', date: '2026-02-11', time: '11:00 AM', color: 'bg-amber-500' },
  { subject: 'Marathi', subjectId: 'mar', date: '2026-02-12', time: '11:00 AM', color: 'bg-purple-500' },
  { subject: 'Sanskrit', subjectId: 'san', date: '2026-02-13', time: '11:00 AM', color: 'bg-pink-500' },
  { subject: 'Logic', subjectId: 'log', date: '2026-02-16', time: '11:00 AM', color: 'bg-gray-500' },
  { subject: 'Political Science', subjectId: 'pol', date: '2026-02-18', time: '3:00 PM', color: 'bg-red-500' },
  { subject: 'Economics', subjectId: 'eco', date: '2026-02-24', time: '11:00 AM', color: 'bg-indigo-500' },
  { subject: 'Philosophy', subjectId: 'phi', date: '2026-02-28', time: '3:00 PM', color: 'bg-cyan-500' },
  { subject: 'Psychology', subjectId: 'psy', date: '2026-03-04', time: '3:00 PM', color: 'bg-rose-500' },
  { subject: 'Geography', subjectId: 'geo', date: '2026-03-07', time: '3:00 PM', color: 'bg-teal-500' },
  { subject: 'History', subjectId: 'his', date: '2026-03-09', time: '3:00 PM', color: 'bg-orange-500' },
  { subject: 'Sociology', subjectId: 'soc', date: '2026-03-11', time: '3:00 PM', color: 'bg-lime-500' },
];

const generatePhaseTasks = (): PhaseTask[] => {
  const tasks: PhaseTask[] = [];
  const startDate = new Date('2026-02-01');
  
  // Phase 1 Tasks (Feb 1-9) - Foundation Building
  const phase1Tasks = [
    { day: 1, subject: 'English', subjectId: 'eng', task: 'Writing skills framework (Letters, Essays)', priority: 'critical' as const },
    { day: 1, subject: 'Hindi', subjectId: 'hin', task: 'Read ENTIRE poetry section with meaning', priority: 'critical' as const },
    { day: 1, subject: 'Pol Science', subjectId: 'pol', task: 'Chapter 1 - World since 1991', priority: 'high' as const },
    { day: 1, subject: 'Economics', subjectId: 'eco', task: 'Chapter 1 - Intro to Microeconomics', priority: 'high' as const },
    { day: 1, subject: 'Geography', subjectId: 'geo', task: 'Chapter 1 - Population Geography', priority: 'medium' as const },
    { day: 1, subject: 'History', subjectId: 'his', task: 'Ch 1 - Renaissance + Ch 2 - Colonialism', priority: 'medium' as const },
    
    { day: 2, subject: 'English', subjectId: 'eng', task: 'Grammar rules (Tenses, Voice, Reported Speech)', priority: 'critical' as const },
    { day: 2, subject: 'Hindi', subjectId: 'hin', task: 'Prose section - 2 chapters with summary', priority: 'critical' as const },
    { day: 2, subject: 'Pol Science', subjectId: 'pol', task: 'Chapter 2 - Globalisation', priority: 'high' as const },
    { day: 2, subject: 'Economics', subjectId: 'eco', task: 'Chapter 2 - Demand Analysis', priority: 'high' as const },
    { day: 2, subject: 'Geography', subjectId: 'geo', task: 'Chapter 2 - Migration', priority: 'medium' as const },
    { day: 2, subject: 'History', subjectId: 'his', task: 'Ch 3 - India & Colonialism + Ch 4 - Marathas', priority: 'medium' as const },
    
    { day: 3, subject: 'English', subjectId: 'eng', task: 'Novel/Drama question prep', priority: 'critical' as const },
    { day: 3, subject: 'Hindi', subjectId: 'hin', task: 'Grammar section complete', priority: 'critical' as const },
    { day: 3, subject: 'Pol Science', subjectId: 'pol', task: 'Chapter 3 - Indian Politics', priority: 'high' as const },
    { day: 3, subject: 'Economics', subjectId: 'eco', task: 'Chapter 3 - Supply Analysis', priority: 'high' as const },
    { day: 3, subject: 'Geography', subjectId: 'geo', task: 'Chapter 3 - Human Settlements', priority: 'medium' as const },
    { day: 3, subject: 'History', subjectId: 'his', task: 'Ch 5 - Social Reforms + Ch 6 - Struggle', priority: 'medium' as const },
    
    { day: 4, subject: 'English', subjectId: 'eng', task: 'Comprehension + Summary writing', priority: 'critical' as const },
    { day: 4, subject: 'Hindi', subjectId: 'hin', task: 'Letter + Essay writing formats', priority: 'critical' as const },
    { day: 4, subject: 'Pol Science', subjectId: 'pol', task: 'Chapter 4-5 complete', priority: 'high' as const },
    { day: 4, subject: 'Economics', subjectId: 'eco', task: 'Chapter 4 - Elasticity (VERY IMPORTANT!)', priority: 'critical' as const },
    { day: 4, subject: 'Geography', subjectId: 'geo', task: 'Chapter 4 - Human Development', priority: 'medium' as const },
    { day: 4, subject: 'History', subjectId: 'his', task: 'Ch 7-8 (Decolonisation, World Wars)', priority: 'medium' as const },
    
    { day: 5, subject: 'English', subjectId: 'eng', task: 'PYQ solving (2024, 2023 papers)', priority: 'critical' as const },
    { day: 5, subject: 'Hindi', subjectId: 'hin', task: 'PYQ solving (2024, 2023 papers)', priority: 'critical' as const },
    { day: 5, subject: 'Pol Science', subjectId: 'pol', task: 'Full syllabus revision', priority: 'high' as const },
    { day: 5, subject: 'Economics', subjectId: 'eco', task: 'Chapter 5-6 (Market Structure)', priority: 'high' as const },
    { day: 5, subject: 'Geography', subjectId: 'geo', task: 'Chapter 5 - Primary Activities', priority: 'medium' as const },
    { day: 5, subject: 'History', subjectId: 'his', task: 'Ch 9-10 (Cold War, Decolonisation)', priority: 'medium' as const },
    
    { day: 6, subject: 'English', subjectId: 'eng', task: '🔴 FULL DAY PREP - Prose + Poetry + Grammar', priority: 'critical' as const },
    { day: 6, subject: 'History', subjectId: 'his', task: 'Chapters 11-12 (India Transformed)', priority: 'medium' as const },
    
    { day: 7, subject: 'English', subjectId: 'eng', task: 'Mock test + correction', priority: 'critical' as const },
    { day: 7, subject: 'Hindi', subjectId: 'hin', task: 'Complete syllabus revision', priority: 'critical' as const },
    
    { day: 8, subject: 'English', subjectId: 'eng', task: 'Final revision + formula sheet', priority: 'critical' as const },
    { day: 8, subject: 'Hindi', subjectId: 'hin', task: 'Full mock test + PYQ revision', priority: 'critical' as const },
    
    { day: 9, subject: 'English', subjectId: 'eng', task: '✅ ONLY revision, no new topics. Sleep by 10 PM!', priority: 'critical' as const },
  ];
  
  // Phase 2 Tasks (Feb 10-24) - Exam Time with Parallel Prep
  const phase2Tasks = [
    // Day 10 - English Exam Day
    { day: 10, subject: '📝 EXAM', subjectId: 'eng', task: '🎯 ENGLISH EXAM - 11:00 AM | Light Hindi revision after', priority: 'critical' as const },
    { day: 10, subject: 'Hindi', subjectId: 'hin', task: 'Post-exam: Quick revision of weak chapters', priority: 'high' as const },
    
    // Day 11 - Hindi Exam Day
    { day: 11, subject: '📝 EXAM', subjectId: 'hin', task: '🎯 HINDI EXAM - 11:00 AM | Start Pol Science prep after', priority: 'critical' as const },
    { day: 11, subject: 'Pol Science', subjectId: 'pol', task: 'Post-exam: Chapters 1-2 revision', priority: 'high' as const },
    
    // Day 12 - Marathi Exam
    { day: 12, subject: '📝 EXAM', subjectId: 'mar', task: '🎯 MARATHI EXAM - 11:00 AM', priority: 'critical' as const },
    { day: 12, subject: 'Pol Science', subjectId: 'pol', task: 'Full day prep - Chapters 3-5', priority: 'high' as const },
    
    // Day 13 - Sanskrit Exam
    { day: 13, subject: '📝 EXAM', subjectId: 'san', task: '🎯 SANSKRIT EXAM - 11:00 AM', priority: 'critical' as const },
    { day: 13, subject: 'Pol Science', subjectId: 'pol', task: 'Current affairs + Important articles', priority: 'high' as const },
    
    // Day 14 - Gap Day
    { day: 14, subject: 'Pol Science', subjectId: 'pol', task: '🔴 INTENSIVE PREP - Full syllabus revision', priority: 'critical' as const },
    { day: 14, subject: 'Economics', subjectId: 'eco', task: 'Start Demand & Supply chapters', priority: 'high' as const },
    
    // Day 15 - Gap Day
    { day: 15, subject: 'Pol Science', subjectId: 'pol', task: 'PYQ solving + Mock test', priority: 'critical' as const },
    { day: 15, subject: 'Economics', subjectId: 'eco', task: 'Elasticity formulas + diagrams', priority: 'high' as const },
    
    // Day 16 - Logic Exam
    { day: 16, subject: '📝 EXAM', subjectId: 'log', task: '🎯 LOGIC EXAM - 11:00 AM', priority: 'critical' as const },
    { day: 16, subject: 'Pol Science', subjectId: 'pol', task: 'Final revision + formula sheet', priority: 'critical' as const },
    
    // Day 17 - Pre Pol Science
    { day: 17, subject: 'Pol Science', subjectId: 'pol', task: '✅ FINAL REVISION ONLY - Sleep by 10 PM!', priority: 'critical' as const },
    
    // Day 18 - Political Science Exam
    { day: 18, subject: '📝 EXAM', subjectId: 'pol', task: '🎯 POLITICAL SCIENCE EXAM - 3:00 PM', priority: 'critical' as const },
    { day: 18, subject: 'Economics', subjectId: 'eco', task: 'Post-exam: Market structures + National Income', priority: 'high' as const },
    
    // Day 19-23 - Economics Prep
    { day: 19, subject: 'Economics', subjectId: 'eco', task: 'Chapters 1-3 complete with numericals', priority: 'critical' as const },
    { day: 19, subject: 'Geography', subjectId: 'geo', task: 'Start Chapter 1-2 alongside', priority: 'medium' as const },
    
    { day: 20, subject: 'Economics', subjectId: 'eco', task: 'Chapters 4-5 + All graphs practice', priority: 'critical' as const },
    { day: 20, subject: 'Geography', subjectId: 'geo', task: 'Chapters 3-4 (Human Settlements)', priority: 'medium' as const },
    
    { day: 21, subject: 'Economics', subjectId: 'eco', task: 'Chapter 6 + Full syllabus revision', priority: 'critical' as const },
    { day: 21, subject: 'Geography', subjectId: 'geo', task: 'Chapters 5-6 (Primary & Secondary)', priority: 'medium' as const },
    
    { day: 22, subject: 'Economics', subjectId: 'eco', task: 'PYQ solving - 3 years papers', priority: 'critical' as const },
    { day: 22, subject: 'History', subjectId: 'his', task: 'Start Chapters 1-4 revision', priority: 'medium' as const },
    
    { day: 23, subject: 'Economics', subjectId: 'eco', task: 'Final revision + formula sheet prep', priority: 'critical' as const },
    { day: 23, subject: 'History', subjectId: 'his', task: 'Chapters 5-8 (Freedom Struggle)', priority: 'medium' as const },
    
    // Day 24 - Economics Exam
    { day: 24, subject: '📝 EXAM', subjectId: 'eco', task: '🎯 ECONOMICS EXAM - 11:00 AM', priority: 'critical' as const },
    { day: 24, subject: 'Geography', subjectId: 'geo', task: 'Post-exam: Full day Geography prep', priority: 'high' as const },
  ];
  
  // Phase 3 Tasks (Feb 25 - Mar 11) - Final Sprint
  const phase3Tasks = [
    // Day 25-27 - Philosophy + Geography Prep
    { day: 25, subject: 'Geography', subjectId: 'geo', task: 'Chapters 7-8 + Map work practice', priority: 'critical' as const },
    { day: 25, subject: 'History', subjectId: 'his', task: 'Chapters 9-12 complete', priority: 'high' as const },
    
    { day: 26, subject: 'Geography', subjectId: 'geo', task: 'Chapter 9 + Full revision round 1', priority: 'critical' as const },
    { day: 26, subject: 'Philosophy', subjectId: 'phi', task: 'Pre-exam revision', priority: 'high' as const },
    
    { day: 27, subject: 'Philosophy', subjectId: 'phi', task: '✅ PHILOSOPHY FINAL PREP', priority: 'critical' as const },
    { day: 27, subject: 'Geography', subjectId: 'geo', task: 'PYQ solving + map marking', priority: 'high' as const },
    
    // Day 28 - Philosophy Exam
    { day: 28, subject: '📝 EXAM', subjectId: 'phi', task: '🎯 PHILOSOPHY EXAM - 3:00 PM', priority: 'critical' as const },
    { day: 28, subject: 'Geography', subjectId: 'geo', task: 'Full syllabus revision', priority: 'high' as const },
    
    // Day 29-33 - Geography + Psychology + History Final Push
    { day: 29, subject: 'Geography', subjectId: 'geo', task: 'Mock test + Map work intensive', priority: 'critical' as const },
    { day: 29, subject: 'Psychology', subjectId: 'psy', task: 'Start preparations', priority: 'medium' as const },
    
    { day: 30, subject: 'Geography', subjectId: 'geo', task: 'PYQ analysis + weak areas focus', priority: 'critical' as const },
    { day: 30, subject: 'Psychology', subjectId: 'psy', task: 'Core concepts + definitions', priority: 'medium' as const },
    
    { day: 31, subject: 'Psychology', subjectId: 'psy', task: 'Full syllabus coverage', priority: 'critical' as const },
    { day: 31, subject: 'History', subjectId: 'his', task: 'Timeline + Important dates revision', priority: 'high' as const },
    
    { day: 32, subject: 'Psychology', subjectId: 'psy', task: 'PYQ solving + case studies', priority: 'critical' as const },
    { day: 32, subject: 'History', subjectId: 'his', task: 'Map work + Important events', priority: 'high' as const },
    
    { day: 33, subject: 'Psychology', subjectId: 'psy', task: '✅ FINAL REVISION - Sleep early!', priority: 'critical' as const },
    
    // Day 34 - Psychology Exam
    { day: 34, subject: '📝 EXAM', subjectId: 'psy', task: '🎯 PSYCHOLOGY EXAM - 3:00 PM', priority: 'critical' as const },
    { day: 34, subject: 'Geography', subjectId: 'geo', task: 'Final Geography revision', priority: 'high' as const },
    
    // Day 35-36 - Pre Geography
    { day: 35, subject: 'Geography', subjectId: 'geo', task: '🔴 INTENSIVE MAP WORK + REVISION', priority: 'critical' as const },
    { day: 35, subject: 'History', subjectId: 'his', task: 'Parallel History prep continues', priority: 'high' as const },
    
    { day: 36, subject: 'Geography', subjectId: 'geo', task: '✅ FINAL REVISION ONLY - Sleep by 10 PM!', priority: 'critical' as const },
    
    // Day 37 - Geography Exam
    { day: 37, subject: '📝 EXAM', subjectId: 'geo', task: '🎯 GEOGRAPHY EXAM - 3:00 PM', priority: 'critical' as const },
    { day: 37, subject: 'History', subjectId: 'his', task: 'Post-exam: Full day History intensive', priority: 'high' as const },
    
    // Day 38 - Pre History
    { day: 38, subject: 'History', subjectId: 'his', task: '🔴 INTENSIVE - Timeline + Dates + Maps', priority: 'critical' as const },
    { day: 38, subject: 'Sociology', subjectId: 'soc', task: 'Start Sociology prep alongside', priority: 'medium' as const },
    
    // Day 39 - History Exam
    { day: 39, subject: '📝 EXAM', subjectId: 'his', task: '🎯 HISTORY EXAM - 3:00 PM', priority: 'critical' as const },
    { day: 39, subject: 'Sociology', subjectId: 'soc', task: 'Post-exam: Full Sociology coverage', priority: 'high' as const },
    
    // Day 40 - Pre Sociology
    { day: 40, subject: 'Sociology', subjectId: 'soc', task: '🔴 INTENSIVE PREP + PYQ solving', priority: 'critical' as const },
    
    // Day 41 - Sociology Exam
    { day: 41, subject: '📝 EXAM', subjectId: 'soc', task: '🎯 SOCIOLOGY EXAM - 3:00 PM | 🏆 BOARDS COMPLETE!', priority: 'critical' as const },
  ];
  
  // Combine all phases
  const allTasks = [...phase1Tasks, ...phase2Tasks, ...phase3Tasks];
  
  allTasks.forEach((task, index) => {
    const taskDate = new Date(startDate);
    taskDate.setDate(taskDate.getDate() + task.day - 1);
    const phase = task.day <= 9 ? 'phase1' : task.day <= 24 ? 'phase2' : 'phase3';
    tasks.push({
      id: `${phase}-${index}`,
      day: task.day,
      date: taskDate.toISOString().split('T')[0],
      subject: task.subject,
      subjectId: task.subjectId,
      task: task.task,
      completed: false,
      priority: task.priority,
    });
  });
  
  return tasks;
};

const MegaBoardCrasher: React.FC<MegaBoardCrasherProps> = ({ onClose, selectedSubjects = [] }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'daily' | 'calendar' | 'subjects' | 'tips'>('overview');
  
  // Filter exam dates based on selected subjects
  const EXAM_DATES = useMemo(() => {
    if (!selectedSubjects || selectedSubjects.length === 0) {
      return ALL_EXAM_DATES;
    }
    return ALL_EXAM_DATES.filter(exam => selectedSubjects.includes(exam.subjectId));
  }, [selectedSubjects]);
  
  // Generate tasks filtered by selected subjects
  const allTasks = useMemo(() => generatePhaseTasks(), []);
  
  const [tasks, setTasks] = useState<PhaseTask[]>(() => {
    const storageKey = selectedSubjects?.length > 0 
      ? `megaCrasherTasks_${selectedSubjects.sort().join('_')}`
      : 'megaCrasherTasks';
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      return JSON.parse(saved);
    }
    // Filter tasks based on selected subjects
    if (!selectedSubjects || selectedSubjects.length === 0) {
      return allTasks;
    }
    return allTasks.filter(task => selectedSubjects.includes(task.subjectId));
  });
  const [selectedDay, setSelectedDay] = useState(1);
  
  // Storage key based on selected subjects
  const storageKey = useMemo(() => {
    return selectedSubjects?.length > 0 
      ? `megaCrasherTasks_${[...selectedSubjects].sort().join('_')}`
      : 'megaCrasherTasks';
  }, [selectedSubjects]);
  
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(tasks));
  }, [tasks, storageKey]);
  
  const toggleTask = (taskId: string) => {
    setTasks(prev => prev.map(t => 
      t.id === taskId ? { ...t, completed: !t.completed } : t
    ));
  };
  
  const getDaysUntilExam = (dateStr: string) => {
    const examDate = new Date(dateStr);
    const today = new Date();
    const diff = Math.ceil((examDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return diff;
  };
  
  const getProgressForDay = (day: number) => {
    const dayTasks = tasks.filter(t => t.day === day);
    const completed = dayTasks.filter(t => t.completed).length;
    return dayTasks.length > 0 ? Math.round((completed / dayTasks.length) * 100) : 0;
  };
  
  // Get user's subject names for display
  const userSubjectNames = useMemo(() => {
    if (!selectedSubjects || selectedSubjects.length === 0) return [];
    return selectedSubjects.map(id => SUBJECT_MAP[id]?.name || id).filter(Boolean);
  }, [selectedSubjects]);
  
  const renderOverview = () => (
    <div className="space-y-6">
      {/* User's Subjects Banner */}
      {userSubjectNames.length > 0 && (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-3">
          <p className="text-white/80 text-xs mb-1">Your Subjects</p>
          <div className="flex flex-wrap gap-1">
            {userSubjectNames.map(name => (
              <span key={name} className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">{name}</span>
            ))}
          </div>
        </div>
      )}
      
      {/* Exam Countdown Cards */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-xl p-4 text-white">
        <h3 className="text-xl font-bold mb-3">🎯 Mission: 90%+ in 29 Days</h3>
        <p className="text-sm opacity-90">From ZERO to HERO - Your boards crash course starts NOW!</p>
      </div>
      
      {/* Next Exams */}
      <div className="bg-gray-800 rounded-xl p-4">
        <h4 className="font-bold text-white mb-3">📅 Upcoming Exams</h4>
        <div className="space-y-2">
          {EXAM_DATES.slice(0, 6).map(exam => {
            const daysLeft = getDaysUntilExam(exam.date);
            return (
              <div key={exam.subject} className={`flex justify-between items-center p-2 rounded-lg ${exam.color} bg-opacity-20`}>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${exam.color}`}></div>
                  <span className="text-white font-medium">{exam.subject}</span>
                </div>
                <div className="text-right">
                  <span className={`text-sm font-bold ${daysLeft <= 3 ? 'text-red-400' : daysLeft <= 7 ? 'text-yellow-400' : 'text-green-400'}`}>
                    {daysLeft > 0 ? `${daysLeft} days` : daysLeft === 0 ? 'TODAY!' : 'Done ✓'}
                  </span>
                  <p className="text-xs text-gray-400">{new Date(exam.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })} • {exam.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Phase Progress */}
      <div className="bg-gray-800 rounded-xl p-4">
        <h4 className="font-bold text-white mb-3">📊 Phase Progress</h4>
        <div className="space-y-3">
          {/* Phase 1 */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">🏗️ Phase 1: Foundation (Feb 1-9)</span>
              <span className="text-blue-400">{Math.round(tasks.filter(t => t.day <= 9 && t.completed).length / Math.max(1, tasks.filter(t => t.day <= 9).length) * 100)}%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all"
                style={{ width: `${Math.round(tasks.filter(t => t.day <= 9 && t.completed).length / Math.max(1, tasks.filter(t => t.day <= 9).length) * 100)}%` }}
              ></div>
            </div>
          </div>
          {/* Phase 2 */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">📝 Phase 2: First Exams (Feb 10-24)</span>
              <span className="text-orange-400">{Math.round(tasks.filter(t => t.day > 9 && t.day <= 24 && t.completed).length / Math.max(1, tasks.filter(t => t.day > 9 && t.day <= 24).length) * 100)}%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-orange-500 to-yellow-400 transition-all"
                style={{ width: `${Math.round(tasks.filter(t => t.day > 9 && t.day <= 24 && t.completed).length / Math.max(1, tasks.filter(t => t.day > 9 && t.day <= 24).length) * 100)}%` }}
              ></div>
            </div>
          </div>
          {/* Phase 3 */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">🏆 Phase 3: Final Sprint (Feb 25-Mar 11)</span>
              <span className="text-green-400">{Math.round(tasks.filter(t => t.day > 24 && t.completed).length / Math.max(1, tasks.filter(t => t.day > 24).length) * 100)}%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all"
                style={{ width: `${Math.round(tasks.filter(t => t.day > 24 && t.completed).length / Math.max(1, tasks.filter(t => t.day > 24).length) * 100)}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-green-900/30 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-green-400">{tasks.filter(t => t.completed).length}</p>
          <p className="text-xs text-gray-400">Tasks Done</p>
        </div>
        <div className="bg-yellow-900/30 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-yellow-400">{tasks.filter(t => !t.completed).length}</p>
          <p className="text-xs text-gray-400">Remaining</p>
        </div>
        <div className="bg-purple-900/30 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-purple-400">{Math.round(tasks.filter(t => t.completed).length / tasks.length * 100)}%</p>
          <p className="text-xs text-gray-400">Complete</p>
        </div>
      </div>
    </div>
  );
  
  const [selectedPhase, setSelectedPhase] = useState<1 | 2 | 3>(1);
  
  const getPhaseInfo = (phase: number) => {
    switch (phase) {
      case 1: return { name: 'Foundation', days: [1, 2, 3, 4, 5, 6, 7, 8, 9], color: 'blue', emoji: '🏗️', range: 'Feb 1-9' };
      case 2: return { name: 'First Exams', days: Array.from({ length: 15 }, (_, i) => i + 10), color: 'orange', emoji: '📝', range: 'Feb 10-24' };
      case 3: return { name: 'Final Sprint', days: Array.from({ length: 17 }, (_, i) => i + 25), color: 'green', emoji: '🏆', range: 'Feb 25-Mar 11' };
      default: return { name: '', days: [], color: 'gray', emoji: '', range: '' };
    }
  };
  
  const getCurrentDayNumber = () => {
    const start = new Date('2026-02-01');
    const today = new Date();
    const diff = Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return Math.max(1, Math.min(41, diff + 1));
  };
  
  const renderDaily = () => {
    const dayTasks = tasks.filter(t => t.day === selectedDay);
    const progress = getProgressForDay(selectedDay);
    const phaseInfo = getPhaseInfo(selectedPhase);
    const currentDay = getCurrentDayNumber();
    const selectedDayDate = new Date('2026-02-01');
    selectedDayDate.setDate(selectedDayDate.getDate() + selectedDay - 1);
    
    // Determine if this is an exam day
    const isExamDay = dayTasks.some(t => t.subject === '📝 EXAM');
    
    return (
      <div className="space-y-4">
        {/* Phase Selector */}
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map(phase => {
            const info = getPhaseInfo(phase);
            return (
              <button
                key={phase}
                onClick={() => {
                  setSelectedPhase(phase as 1 | 2 | 3);
                  setSelectedDay(info.days[0]);
                }}
                className={`p-3 rounded-xl text-center transition-all ${
                  selectedPhase === phase 
                    ? `bg-${info.color}-500 text-white` 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <span className="text-lg">{info.emoji}</span>
                <p className={`text-xs font-medium ${selectedPhase === phase ? 'text-white' : 'text-gray-400'}`}>{info.name}</p>
              </button>
            );
          })}
        </div>
        
        {/* Day Selector */}
        <div className="bg-gray-800 rounded-xl p-3">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm text-gray-400">{phaseInfo.emoji} {phaseInfo.name} • {phaseInfo.range}</p>
            {currentDay >= 1 && currentDay <= 41 && (
              <button 
                onClick={() => {
                  const todayPhase = currentDay <= 9 ? 1 : currentDay <= 24 ? 2 : 3;
                  setSelectedPhase(todayPhase as 1 | 2 | 3);
                  setSelectedDay(currentDay);
                }}
                className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full"
              >
                Go to Today
              </button>
            )}
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {phaseInfo.days.map(day => {
              const isToday = day === currentDay;
              const hasExam = tasks.filter(t => t.day === day).some(t => t.subject === '📝 EXAM');
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-3 py-2 rounded-lg font-medium transition-all min-w-[55px] relative ${
                    selectedDay === day 
                      ? `bg-${phaseInfo.color}-500 text-white` 
                      : isToday 
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {hasExam && <span className="absolute -top-1 -right-1 text-xs">📝</span>}
                  <span className="text-xs block">Day</span>
                  <span className="font-bold">{day}</span>
                  <span className={`block text-xs ${getProgressForDay(day) === 100 ? 'text-green-300' : selectedDay === day ? 'text-white/70' : 'text-gray-500'}`}>
                    {getProgressForDay(day)}%
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Day Info Header */}
        <div className={`rounded-xl p-4 ${isExamDay ? 'bg-gradient-to-r from-red-600 to-orange-500' : 'bg-gray-800'}`}>
          <div className="flex justify-between items-center mb-2">
            <div>
              <span className="text-white font-bold text-lg">Day {selectedDay}</span>
              <span className="text-white/70 text-sm ml-2">
                {selectedDayDate.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })}
              </span>
            </div>
            <span className={`font-bold text-xl ${isExamDay ? 'text-white' : 'text-green-400'}`}>{progress}%</span>
          </div>
          <div className="h-3 bg-black/30 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${isExamDay ? 'bg-white' : 'bg-gradient-to-r from-green-500 to-emerald-400'}`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          {isExamDay && (
            <p className="text-white/90 text-sm mt-2 font-medium">🎯 EXAM DAY - Stay calm and confident!</p>
          )}
        </div>
        
        {/* Tasks List */}
        <div className="space-y-2">
          {dayTasks.length === 0 ? (
            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <p className="text-gray-400">No tasks scheduled for this day</p>
            </div>
          ) : dayTasks.map(task => (
            <div 
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className={`p-4 rounded-xl cursor-pointer transition-all ${
                task.completed 
                  ? 'bg-green-900/30 border border-green-500/30' 
                  : task.subject === '📝 EXAM'
                    ? 'bg-red-900/30 border border-red-500/30'
                    : 'bg-gray-800 border border-gray-700 hover:border-gray-600'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                  task.completed 
                    ? 'bg-green-500 border-green-500' 
                    : task.priority === 'critical' 
                      ? 'border-red-500' 
                      : task.priority === 'high' 
                        ? 'border-yellow-500' 
                        : 'border-gray-500'
                }`}>
                  {task.completed && <span className="text-white text-sm">✓</span>}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      task.priority === 'critical' 
                        ? 'bg-red-500/20 text-red-400' 
                        : task.priority === 'high' 
                          ? 'bg-yellow-500/20 text-yellow-400' 
                          : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {task.subject}
                    </span>
                    {task.priority === 'critical' && (
                      <span className="text-xs text-red-400">🔴 Critical</span>
                    )}
                  </div>
                  <p className={`${task.completed ? 'text-gray-400 line-through' : 'text-white'}`}>
                    {task.task}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  const renderSubjects = () => {
    // All subject data with IDs
    const allSubjectData = [
      { id: 'eng', name: 'English', color: 'blue', target: '85+', chapters: 'Prose, Poetry, Grammar, Writing', tips: ['Master letter formats', 'Practice comprehension daily', 'Learn grammar rules'] },
      { id: 'hin', name: 'Hindi', color: 'amber', target: '85+', chapters: 'गद्य, पद्य, व्याकरण, लेखन', tips: ['Memorize poems with meanings', 'Practice essay formats', 'Grammar shortcuts'] },
      { id: 'mar', name: 'Marathi', color: 'purple', target: '85+', chapters: 'गद्य, पद्य, व्याकरण', tips: ['Read prose carefully', 'Memorize poems', 'Grammar practice'] },
      { id: 'san', name: 'Sanskrit', color: 'pink', target: '80+', chapters: 'Shlokas, Grammar, Prose', tips: ['Learn shlokas with meaning', 'Practice sandhi', 'Focus on grammar'] },
      { id: 'pol', name: 'Political Science', color: 'red', target: '90+', chapters: '5 Chapters', tips: ['Learn Constitutional Articles', 'Current affairs examples', 'World events timeline'] },
      { id: 'eco', name: 'Economics', color: 'indigo', target: '90+', chapters: '6 Chapters', tips: ['Elasticity formulas', 'Draw all curves', 'National Income methods'] },
      { id: 'geo', name: 'Geography', color: 'teal', target: '90+', chapters: '9 Chapters', tips: ['Map work daily!', 'Learn geographical reasons', 'Population data'] },
      { id: 'his', name: 'History', color: 'orange', target: '90+', chapters: '12 Chapters', tips: ['Timeline memorization', 'Important dates', 'Map marking'] },
      { id: 'soc', name: 'Sociology', color: 'lime', target: '90+', chapters: '8 Chapters', tips: ['Definitions first', 'Examples from daily life', 'Social thinkers quotes'] },
      { id: 'psy', name: 'Psychology', color: 'rose', target: '90+', chapters: '9 Chapters', tips: ['Case studies important', 'Psychological terms', 'Theorists & theories'] },
      { id: 'phi', name: 'Philosophy', color: 'cyan', target: '85+', chapters: '6 Chapters', tips: ['Logic arguments', 'Philosophical schools', 'Ethics concepts'] },
      { id: 'log', name: 'Logic', color: 'gray', target: '85+', chapters: '5 Chapters', tips: ['Practice syllogisms', 'Truth tables', 'Arguments analysis'] },
    ];
    
    // Filter based on selected subjects
    const subjectsToShow = selectedSubjects && selectedSubjects.length > 0
      ? allSubjectData.filter(s => selectedSubjects.includes(s.id))
      : allSubjectData.slice(0, 6); // Show first 6 if no selection
    
    return (
      <div className="space-y-4">
        {/* Subject count indicator */}
        {selectedSubjects && selectedSubjects.length > 0 && (
          <div className="bg-gray-800 rounded-xl p-3 flex justify-between items-center">
            <span className="text-gray-400 text-sm">Your Subjects</span>
            <span className="text-white font-bold">{subjectsToShow.length} subjects</span>
          </div>
        )}
        
        {/* Subject Cards */}
        {subjectsToShow.map(subject => (
          <div key={subject.name} className={`bg-gray-800 rounded-xl p-4 border-l-4 border-${subject.color}-500`}>
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="text-white font-bold text-lg">{subject.name}</h4>
                <p className="text-gray-400 text-sm">{subject.chapters}</p>
            </div>
            <span className={`text-${subject.color}-400 font-bold text-xl`}>{subject.target}</span>
          </div>
          <div className="space-y-1">
            {subject.tips.map((tip, i) => (
              <p key={i} className="text-gray-300 text-sm flex items-center gap-2">
                <span className={`text-${subject.color}-400`}>•</span> {tip}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
    );
  };
  
  const renderTips = () => (
    <div className="space-y-4">
      {/* Daily Routine */}
      <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl p-4">
        <h4 className="font-bold text-white mb-3">⏰ Daily Routine (14 hrs/day)</h4>
        <div className="space-y-2 text-sm">
          {[
            { time: '5:00 AM', activity: 'Wake up, Fresh up', duration: '30 min' },
            { time: '5:30 AM', activity: 'First Subject Study', duration: '2 hrs' },
            { time: '8:00 AM', activity: 'Second Subject Study', duration: '2 hrs' },
            { time: '10:15 AM', activity: 'Third Subject Study', duration: '2 hrs' },
            { time: '1:15 PM', activity: 'Fourth Subject Study', duration: '2.5 hrs' },
            { time: '4:15 PM', activity: 'Fifth Subject Study', duration: '2 hrs' },
            { time: '6:45 PM', activity: 'Sixth Subject Study', duration: '2.5 hrs' },
            { time: '10:00 PM', activity: 'Quick Revision', duration: '1.5 hrs' },
            { time: '11:30 PM', activity: 'Sleep', duration: '-' },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center text-gray-300">
              <span className="text-blue-400 font-mono">{item.time}</span>
              <span className="flex-1 mx-3">{item.activity}</span>
              <span className="text-gray-500">{item.duration}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Answer Writing Tips */}
      <div className="bg-gray-800 rounded-xl p-4">
        <h4 className="font-bold text-white mb-3">✍️ Answer Writing Tips</h4>
        <div className="space-y-3">
          <div className="bg-gray-700/50 rounded-lg p-3">
            <p className="text-yellow-400 font-medium mb-1">MCQs (20 marks)</p>
            <p className="text-gray-300 text-sm">Don't spend {'>'} 1 min per MCQ. Use elimination technique.</p>
          </div>
          <div className="bg-gray-700/50 rounded-lg p-3">
            <p className="text-green-400 font-medium mb-1">Short Answers (4-5 marks)</p>
            <p className="text-gray-300 text-sm">4-5 points with explanation. Underline key terms.</p>
          </div>
          <div className="bg-gray-700/50 rounded-lg p-3">
            <p className="text-blue-400 font-medium mb-1">Long Answers (8-10 marks)</p>
            <p className="text-gray-300 text-sm">Intro (1) + Body with subheadings (6-7) + Conclusion (1-2) + Diagram</p>
          </div>
        </div>
      </div>
      
      {/* Emergency Protocols */}
      <div className="bg-red-900/30 rounded-xl p-4 border border-red-500/30">
        <h4 className="font-bold text-red-400 mb-3">🆘 Emergency Protocols</h4>
        <div className="space-y-2 text-sm text-gray-300">
          <p><span className="text-red-400 font-bold">Behind Schedule?</span> Focus on HIGH-WEIGHTAGE chapters only!</p>
          <p><span className="text-yellow-400 font-bold">Can't Remember?</span> Use active recall - test yourself!</p>
          <p><span className="text-blue-400 font-bold">Exam Tomorrow?</span> Only revision, sleep by 10 PM!</p>
        </div>
      </div>
      
      {/* Motivation */}
      <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 rounded-xl p-4">
        <h4 className="font-bold text-white mb-2">💪 Remember</h4>
        <p className="text-green-300 text-lg font-medium italic">
          "90%+ = Focused Study + Smart Strategy + Consistent Revision + Exam Technique"
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Toppers aren't geniuses - they're consistent. Your past doesn't define your future.
        </p>
      </div>
    </div>
  );
  
  const renderCalendar = () => {
    // Generate calendar for Feb-Mar 2026
    const getMonthDays = (year: number, month: number) => {
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const days = [];
      const startPad = firstDay.getDay();
      
      // Add padding for days before month starts
      for (let i = 0; i < startPad; i++) {
        days.push(null);
      }
      
      // Add actual days
      for (let d = 1; d <= lastDay.getDate(); d++) {
        days.push(d);
      }
      
      return days;
    };
    
    const getExamForDate = (year: number, month: number, day: number) => {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      return EXAM_DATES.find(e => e.date === dateStr);
    };
    
    const getDayNumber = (year: number, month: number, day: number) => {
      const targetDate = new Date(year, month, day);
      const startDate = new Date(2026, 1, 1); // Feb 1, 2026
      const diff = Math.floor((targetDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      return diff >= 0 && diff < 41 ? diff + 1 : null;
    };
    
    const febDays = getMonthDays(2026, 1); // Feb 2026
    const marDays = getMonthDays(2026, 2); // Mar 2026
    const today = new Date();
    const isToday = (year: number, month: number, day: number) => 
      today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
    
    const renderMonth = (year: number, month: number, days: (number | null)[], monthName: string) => (
      <div className="bg-gray-800 rounded-xl p-4">
        <h4 className="font-bold text-white mb-3 text-center">{monthName} {year}</h4>
        <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
            <div key={d} className="text-gray-500 font-medium py-1">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, i) => {
            if (day === null) return <div key={i}></div>;
            
            const exam = getExamForDate(year, month, day);
            const dayNum = getDayNumber(year, month, day);
            const dayProgress = dayNum ? getProgressForDay(dayNum) : 0;
            const isTodayDate = isToday(year, month, day);
            
            return (
              <div 
                key={i}
                onClick={() => {
                  if (dayNum) {
                    const phase = dayNum <= 9 ? 1 : dayNum <= 24 ? 2 : 3;
                    setSelectedPhase(phase as 1 | 2 | 3);
                    setSelectedDay(dayNum);
                    setActiveTab('daily');
                  }
                }}
                className={`
                  relative p-1 rounded-lg text-center cursor-pointer transition-all
                  ${exam ? `${exam.color} text-white font-bold` : ''}
                  ${isTodayDate && !exam ? 'ring-2 ring-yellow-400 bg-yellow-500/20' : ''}
                  ${!exam && dayNum ? 'hover:bg-gray-700' : ''}
                  ${!dayNum ? 'text-gray-600' : 'text-gray-300'}
                `}
              >
                <span className="text-sm">{day}</span>
                {dayNum && dayProgress === 100 && (
                  <span className="absolute -top-1 -right-1 text-xs">✓</span>
                )}
                {exam && (
                  <span className="block text-[10px] truncate">{exam.subject.split(' ')[0]}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
    
    return (
      <div className="space-y-4">
        {/* Legend */}
        <div className="bg-gray-800 rounded-xl p-3">
          <p className="text-gray-400 text-xs mb-2">Tap any date to view its tasks</p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-blue-500"></span> Languages
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-red-500"></span> Pol Science
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-indigo-500"></span> Economics
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-teal-500"></span> Geography
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-orange-500"></span> History
            </span>
          </div>
        </div>
        
        {renderMonth(2026, 1, febDays, 'February')}
        {renderMonth(2026, 2, marDays, 'March')}
        
        {/* Exam List */}
        <div className="bg-gray-800 rounded-xl p-4">
          <h4 className="font-bold text-white mb-3">📋 All Exam Dates</h4>
          <div className="space-y-2">
            {EXAM_DATES.map(exam => (
              <div key={exam.subject} className="flex justify-between items-center p-2 bg-gray-700/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${exam.color}`}></div>
                  <span className="text-white text-sm">{exam.subject}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-300 text-sm">
                    {new Date(exam.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', weekday: 'short' })}
                  </span>
                  <span className="text-gray-500 text-xs ml-2">{exam.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  const resetProgress = () => {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone!')) {
      const freshTasks = generatePhaseTasks();
      // Filter by selected subjects
      const filteredTasks = selectedSubjects && selectedSubjects.length > 0
        ? freshTasks.filter(task => selectedSubjects.includes(task.subjectId))
        : freshTasks;
      setTasks(filteredTasks);
      localStorage.setItem(storageKey, JSON.stringify(filteredTasks));
    }
  };
  
  return (
    <div className="fixed inset-0 bg-black/95 z-50 overflow-hidden">
      {/* Header */}
      <div className="sticky top-0 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 p-4 shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-white">🚀 MEGA 90+ CRASHER</h2>
            <p className="text-white/80 text-sm">41 Days to Board Domination</p>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={resetProgress}
              className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              title="Reset Progress"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
            <button 
              onClick={onClose}
              className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
          {[
            { id: 'overview', label: '📊 Overview' },
            { id: 'daily', label: '📅 Daily Plan' },
            { id: 'calendar', label: '🗓️ Calendar' },
            { id: 'subjects', label: '📚 Subjects' },
            { id: 'tips', label: '💡 Tips' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id 
                  ? 'bg-white text-orange-600' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="overflow-y-auto p-4 pb-20" style={{ height: 'calc(100vh - 140px)' }}>
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'daily' && renderDaily()}
        {activeTab === 'calendar' && renderCalendar()}
        {activeTab === 'subjects' && renderSubjects()}
        {activeTab === 'tips' && renderTips()}
      </div>
    </div>
  );
};

export default MegaBoardCrasher;
