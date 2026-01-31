import React, { useState, useEffect } from 'react';

interface PhaseTask {
  id: string;
  day: number;
  date: string;
  subject: string;
  task: string;
  completed: boolean;
  priority: 'critical' | 'high' | 'medium';
}

interface ExamDate {
  subject: string;
  date: string;
  time: string;
  color: string;
}

const EXAM_DATES: ExamDate[] = [
  { subject: 'English', date: '2026-02-10', time: '11:00 AM', color: 'bg-blue-500' },
  { subject: 'Hindi', date: '2026-02-11', time: '11:00 AM', color: 'bg-amber-500' },
  { subject: 'Marathi', date: '2026-02-12', time: '11:00 AM', color: 'bg-purple-500' },
  { subject: 'Sanskrit', date: '2026-02-13', time: '11:00 AM', color: 'bg-pink-500' },
  { subject: 'Logic', date: '2026-02-16', time: '11:00 AM', color: 'bg-gray-500' },
  { subject: 'Political Science', date: '2026-02-18', time: '3:00 PM', color: 'bg-red-500' },
  { subject: 'Economics', date: '2026-02-24', time: '11:00 AM', color: 'bg-indigo-500' },
  { subject: 'Philosophy', date: '2026-02-28', time: '3:00 PM', color: 'bg-cyan-500' },
  { subject: 'Psychology', date: '2026-03-04', time: '3:00 PM', color: 'bg-rose-500' },
  { subject: 'Geography', date: '2026-03-07', time: '3:00 PM', color: 'bg-teal-500' },
  { subject: 'History', date: '2026-03-09', time: '3:00 PM', color: 'bg-orange-500' },
  { subject: 'Sociology', date: '2026-03-11', time: '3:00 PM', color: 'bg-lime-500' },
];

const generatePhaseTasks = (): PhaseTask[] => {
  const tasks: PhaseTask[] = [];
  const startDate = new Date('2026-02-01');
  
  // Phase 1 Tasks (Feb 1-9)
  const phase1Tasks = [
    { day: 1, subject: 'English', task: 'Writing skills framework (Letters, Essays)', priority: 'critical' as const },
    { day: 1, subject: 'Hindi', task: 'Read ENTIRE poetry section with meaning', priority: 'critical' as const },
    { day: 1, subject: 'Pol Science', task: 'Chapter 1 - World since 1991', priority: 'high' as const },
    { day: 1, subject: 'Economics', task: 'Chapter 1 - Intro to Microeconomics', priority: 'high' as const },
    { day: 1, subject: 'Geography', task: 'Chapter 1 - Population Geography', priority: 'medium' as const },
    { day: 1, subject: 'History', task: 'Ch 1 - Renaissance + Ch 2 - Colonialism', priority: 'medium' as const },
    
    { day: 2, subject: 'English', task: 'Grammar rules (Tenses, Voice, Reported Speech)', priority: 'critical' as const },
    { day: 2, subject: 'Hindi', task: 'Prose section - 2 chapters with summary', priority: 'critical' as const },
    { day: 2, subject: 'Pol Science', task: 'Chapter 2 - Globalisation', priority: 'high' as const },
    { day: 2, subject: 'Economics', task: 'Chapter 2 - Demand Analysis', priority: 'high' as const },
    { day: 2, subject: 'Geography', task: 'Chapter 2 - Migration', priority: 'medium' as const },
    { day: 2, subject: 'History', task: 'Ch 3 - India & Colonialism + Ch 4 - Marathas', priority: 'medium' as const },
    
    { day: 3, subject: 'English', task: 'Novel/Drama question prep', priority: 'critical' as const },
    { day: 3, subject: 'Hindi', task: 'Grammar section complete', priority: 'critical' as const },
    { day: 3, subject: 'Pol Science', task: 'Chapter 3 - Indian Politics', priority: 'high' as const },
    { day: 3, subject: 'Economics', task: 'Chapter 3 - Supply Analysis', priority: 'high' as const },
    { day: 3, subject: 'Geography', task: 'Chapter 3 - Human Settlements', priority: 'medium' as const },
    { day: 3, subject: 'History', task: 'Ch 5 - Social Reforms + Ch 6 - Struggle', priority: 'medium' as const },
    
    { day: 4, subject: 'English', task: 'Comprehension + Summary writing', priority: 'critical' as const },
    { day: 4, subject: 'Hindi', task: 'Letter + Essay writing formats', priority: 'critical' as const },
    { day: 4, subject: 'Pol Science', task: 'Chapter 4-5 complete', priority: 'high' as const },
    { day: 4, subject: 'Economics', task: 'Chapter 4 - Elasticity (VERY IMPORTANT!)', priority: 'critical' as const },
    { day: 4, subject: 'Geography', task: 'Chapter 4 - Human Development', priority: 'medium' as const },
    { day: 4, subject: 'History', task: 'Ch 7-8 (Decolonisation, World Wars)', priority: 'medium' as const },
    
    { day: 5, subject: 'English', task: 'PYQ solving (2024, 2023 papers)', priority: 'critical' as const },
    { day: 5, subject: 'Hindi', task: 'PYQ solving (2024, 2023 papers)', priority: 'critical' as const },
    { day: 5, subject: 'Pol Science', task: 'Full syllabus revision', priority: 'high' as const },
    { day: 5, subject: 'Economics', task: 'Chapter 5-6 (Market Structure)', priority: 'high' as const },
    { day: 5, subject: 'Geography', task: 'Chapter 5 - Primary Activities', priority: 'medium' as const },
    { day: 5, subject: 'History', task: 'Ch 9-10 (Cold War, Decolonisation)', priority: 'medium' as const },
    
    { day: 6, subject: 'English', task: '🔴 FULL DAY PREP - Prose + Poetry + Grammar', priority: 'critical' as const },
    { day: 6, subject: 'History', task: 'Chapters 11-12 (India Transformed)', priority: 'medium' as const },
    
    { day: 7, subject: 'English', task: 'Mock test + correction', priority: 'critical' as const },
    { day: 7, subject: 'Hindi', task: 'Complete syllabus revision', priority: 'critical' as const },
    
    { day: 8, subject: 'English', task: 'Final revision + formula sheet', priority: 'critical' as const },
    { day: 8, subject: 'Hindi', task: 'Full mock test + PYQ revision', priority: 'critical' as const },
    
    { day: 9, subject: 'English', task: '✅ ONLY revision, no new topics. Sleep by 10 PM!', priority: 'critical' as const },
  ];
  
  phase1Tasks.forEach((task, index) => {
    const taskDate = new Date(startDate);
    taskDate.setDate(taskDate.getDate() + task.day - 1);
    tasks.push({
      id: `phase1-${index}`,
      day: task.day,
      date: taskDate.toISOString().split('T')[0],
      subject: task.subject,
      task: task.task,
      completed: false,
      priority: task.priority,
    });
  });
  
  return tasks;
};

const MegaBoardCrasher: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'daily' | 'subjects' | 'tips'>('overview');
  const [tasks, setTasks] = useState<PhaseTask[]>(() => {
    const saved = localStorage.getItem('megaCrasherTasks');
    return saved ? JSON.parse(saved) : generatePhaseTasks();
  });
  const [selectedDay, setSelectedDay] = useState(1);
  
  useEffect(() => {
    localStorage.setItem('megaCrasherTasks', JSON.stringify(tasks));
  }, [tasks]);
  
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
  
  const renderOverview = () => (
    <div className="space-y-6">
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
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">Phase 1: Foundation (Feb 1-9)</span>
              <span className="text-blue-400">{Math.round(tasks.filter(t => t.day <= 9 && t.completed).length / tasks.filter(t => t.day <= 9).length * 100) || 0}%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all"
                style={{ width: `${Math.round(tasks.filter(t => t.day <= 9 && t.completed).length / tasks.filter(t => t.day <= 9).length * 100) || 0}%` }}
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
  
  const renderDaily = () => {
    const dayTasks = tasks.filter(t => t.day === selectedDay);
    const progress = getProgressForDay(selectedDay);
    
    return (
      <div className="space-y-4">
        {/* Day Selector */}
        <div className="bg-gray-800 rounded-xl p-3">
          <p className="text-sm text-gray-400 mb-2">Select Day</p>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(day => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-lg font-medium transition-all min-w-[60px] ${
                  selectedDay === day 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Day {day}
                <span className={`block text-xs ${getProgressForDay(day) === 100 ? 'text-green-300' : 'text-gray-400'}`}>
                  {getProgressForDay(day)}%
                </span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-medium">Day {selectedDay} Progress</span>
            <span className="text-green-400 font-bold">{progress}%</span>
          </div>
          <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        {/* Tasks List */}
        <div className="space-y-2">
          {dayTasks.map(task => (
            <div 
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className={`p-4 rounded-xl cursor-pointer transition-all ${
                task.completed 
                  ? 'bg-green-900/30 border border-green-500/30' 
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
  
  const renderSubjects = () => (
    <div className="space-y-4">
      {/* Subject Cards */}
      {[
        { name: 'English', color: 'blue', target: '85+', chapters: 'Prose, Poetry, Grammar, Writing', tips: ['Master letter formats', 'Practice comprehension daily', 'Learn grammar rules'] },
        { name: 'Hindi', color: 'amber', target: '85+', chapters: 'गद्य, पद्य, व्याकरण, लेखन', tips: ['Memorize poems with meanings', 'Practice essay formats', 'Grammar shortcuts'] },
        { name: 'Political Science', color: 'red', target: '90+', chapters: '5 Chapters', tips: ['Learn Constitutional Articles', 'Current affairs examples', 'World events timeline'] },
        { name: 'Economics', color: 'indigo', target: '90+', chapters: '6 Chapters', tips: ['Elasticity formulas', 'Draw all curves', 'National Income methods'] },
        { name: 'Geography', color: 'teal', target: '90+', chapters: '9 Chapters', tips: ['Map work daily!', 'Learn geographical reasons', 'Population data'] },
        { name: 'History', color: 'orange', target: '90+', chapters: '12 Chapters', tips: ['Timeline memorization', 'Important dates', 'Map marking'] },
      ].map(subject => (
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
  
  return (
    <div className="fixed inset-0 bg-black/95 z-50 overflow-hidden">
      {/* Header */}
      <div className="sticky top-0 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 p-4 shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-white">🚀 MEGA 90+ CRASHER</h2>
            <p className="text-white/80 text-sm">29 Days to Board Domination</p>
          </div>
          <button 
            onClick={onClose}
            className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Tabs */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
          {[
            { id: 'overview', label: '📊 Overview' },
            { id: 'daily', label: '📅 Daily Plan' },
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
        {activeTab === 'subjects' && renderSubjects()}
        {activeTab === 'tips' && renderTips()}
      </div>
    </div>
  );
};

export default MegaBoardCrasher;
