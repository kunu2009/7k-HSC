import React, { useState, useEffect } from 'react';
import { X, Calendar, Target, CheckCircle, Circle, Plus, Trash2, Edit2, Save, TrendingUp, Award, Flame, Clock, Sparkles } from 'lucide-react';

interface DailyTrackerProps {
  onClose: () => void;
}

interface DailyTask {
  id: string;
  title: string;
  type: 'study' | 'revision' | 'practice' | 'break' | 'custom';
  duration: number; // minutes
  completed: boolean;
  subject?: string;
  chapter?: string;
}

interface DayLog {
  date: string;
  tasks: DailyTask[];
  notes: string;
  mood: 'great' | 'good' | 'okay' | 'tired' | 'stressed';
  totalStudyTime: number;
}

const TASK_TEMPLATES: Omit<DailyTask, 'id' | 'completed'>[] = [
  { title: 'Morning Revision', type: 'revision', duration: 30 },
  { title: 'Chapter Study', type: 'study', duration: 60 },
  { title: 'Practice MCQs', type: 'practice', duration: 30 },
  { title: 'Flashcard Review', type: 'revision', duration: 20 },
  { title: 'Break', type: 'break', duration: 15 },
  { title: 'Long Answer Practice', type: 'practice', duration: 45 },
];

const MOOD_EMOJIS = {
  great: '🔥',
  good: '😊',
  okay: '😐',
  tired: '😴',
  stressed: '😰'
};

const DailyTracker: React.FC<DailyTrackerProps> = ({ onClose }) => {
  const [logs, setLogs] = useState<Record<string, DayLog>>({});
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [editingTask, setEditingTask] = useState<string | null>(null);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDuration, setNewTaskDuration] = useState(30);
  const [showTemplates, setShowTemplates] = useState(false);

  // Load logs
  useEffect(() => {
    const saved = localStorage.getItem('7k-daily-tracker');
    if (saved) {
      setLogs(JSON.parse(saved));
    }
  }, []);

  // Save logs
  useEffect(() => {
    localStorage.setItem('7k-daily-tracker', JSON.stringify(logs));
  }, [logs]);

  const currentLog: DayLog = logs[selectedDate] || {
    date: selectedDate,
    tasks: [],
    notes: '',
    mood: 'okay',
    totalStudyTime: 0
  };

  const updateLog = (updates: Partial<DayLog>) => {
    setLogs(prev => ({
      ...prev,
      [selectedDate]: {
        ...currentLog,
        ...updates
      }
    }));
  };

  const addTask = (template?: Omit<DailyTask, 'id' | 'completed'>) => {
    const task: DailyTask = template ? {
      ...template,
      id: Date.now().toString(),
      completed: false
    } : {
      id: Date.now().toString(),
      title: newTaskTitle || 'New Task',
      type: 'custom',
      duration: newTaskDuration,
      completed: false
    };
    
    updateLog({
      tasks: [...currentLog.tasks, task]
    });
    setNewTaskTitle('');
    setShowTemplates(false);
  };

  const toggleTask = (taskId: string) => {
    const newTasks = currentLog.tasks.map(t => 
      t.id === taskId ? { ...t, completed: !t.completed } : t
    );
    const totalStudyTime = newTasks
      .filter(t => t.completed && t.type !== 'break')
      .reduce((sum, t) => sum + t.duration, 0);
    
    updateLog({ tasks: newTasks, totalStudyTime });
  };

  const deleteTask = (taskId: string) => {
    updateLog({
      tasks: currentLog.tasks.filter(t => t.id !== taskId)
    });
  };

  const getWeekDates = () => {
    const dates: string[] = [];
    const today = new Date(selectedDate);
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  };

  const calculateStreak = () => {
    let streak = 0;
    const today = new Date();
    
    for (let i = 0; i < 365; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      const dayLog = logs[dateStr];
      
      if (dayLog && dayLog.totalStudyTime >= 30) {
        streak++;
      } else if (i > 0) {
        break;
      }
    }
    return streak;
  };

  const totalWeekTime = getWeekDates().reduce((sum, date) => {
    return sum + (logs[date]?.totalStudyTime || 0);
  }, 0);

  const completedTasks = currentLog.tasks.filter(t => t.completed).length;
  const totalTasks = currentLog.tasks.length;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-4 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Calendar className="w-6 h-6" /> Daily Study Tracker
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center gap-6 mt-3">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5" />
              <span className="font-bold">{calculateStreak()} day streak</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-bold">{Math.round(totalWeekTime / 60)}h this week</span>
            </div>
          </div>
        </div>
        
        {/* Week View */}
        <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between gap-2">
            {getWeekDates().map(date => {
              const dayLog = logs[date];
              const isToday = date === new Date().toISOString().split('T')[0];
              const isSelected = date === selectedDate;
              const hasActivity = dayLog && dayLog.totalStudyTime > 0;
              
              const dayName = new Date(date).toLocaleDateString('en-US', { weekday: 'short' });
              const dayNum = new Date(date).getDate();
              
              return (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`flex-1 p-2 rounded-xl text-center transition ${
                    isSelected 
                      ? 'bg-rose-500 text-white'
                      : isToday 
                      ? 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <p className={`text-xs ${isSelected ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                    {dayName}
                  </p>
                  <p className={`text-lg font-bold ${isSelected ? '' : 'dark:text-white'}`}>{dayNum}</p>
                  {hasActivity && (
                    <div className={`w-2 h-2 rounded-full mx-auto mt-1 ${
                      isSelected ? 'bg-white' : 'bg-green-500'
                    }`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Tasks */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold dark:text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-rose-500" />
                  Today's Tasks
                  {totalTasks > 0 && (
                    <span className="text-sm font-normal text-gray-500">
                      ({completedTasks}/{totalTasks})
                    </span>
                  )}
                </h3>
                <button
                  onClick={() => setShowTemplates(!showTemplates)}
                  className="px-3 py-1.5 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-lg text-sm flex items-center gap-1"
                >
                  <Plus className="w-4 h-4" /> Add Task
                </button>
              </div>
              
              {/* Template Selection */}
              {showTemplates && (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 space-y-3">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Quick Add Templates:</p>
                  <div className="flex flex-wrap gap-2">
                    {TASK_TEMPLATES.map((template, idx) => (
                      <button
                        key={idx}
                        onClick={() => addTask(template)}
                        className="px-3 py-1.5 bg-white dark:bg-gray-700 rounded-lg text-sm hover:bg-rose-50 dark:hover:bg-rose-900/30 transition flex items-center gap-2"
                      >
                        <span>{template.title}</span>
                        <span className="text-xs text-gray-400">{template.duration}m</span>
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                    <input
                      type="text"
                      value={newTaskTitle}
                      onChange={e => setNewTaskTitle(e.target.value)}
                      placeholder="Custom task..."
                      className="flex-1 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white text-sm"
                    />
                    <input
                      type="number"
                      value={newTaskDuration}
                      onChange={e => setNewTaskDuration(parseInt(e.target.value) || 30)}
                      className="w-20 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white text-sm text-center"
                      min="5"
                      step="5"
                    />
                    <button
                      onClick={() => addTask()}
                      className="px-4 py-2 bg-rose-500 text-white rounded-lg text-sm hover:bg-rose-600"
                    >
                      Add
                    </button>
                  </div>
                </div>
              )}
              
              {/* Task List */}
              {currentLog.tasks.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <Target className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                  <p className="text-gray-500 dark:text-gray-400">No tasks planned for today</p>
                  <p className="text-sm text-gray-400 mt-1">Click "Add Task" to get started</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {currentLog.tasks.map(task => (
                    <div
                      key={task.id}
                      className={`flex items-center gap-3 p-3 rounded-xl transition ${
                        task.completed 
                          ? 'bg-green-50 dark:bg-green-900/20' 
                          : 'bg-gray-50 dark:bg-gray-800'
                      }`}
                    >
                      <button
                        onClick={() => toggleTask(task.id)}
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${
                          task.completed 
                            ? 'bg-green-500 border-green-500 text-white'
                            : 'border-gray-300 dark:border-gray-600 hover:border-green-500'
                        }`}
                      >
                        {task.completed && <CheckCircle className="w-4 h-4" />}
                      </button>
                      
                      <div className="flex-1">
                        <p className={`font-medium ${task.completed ? 'line-through text-gray-400' : 'dark:text-white'}`}>
                          {task.title}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                          <span className={`px-2 py-0.5 rounded ${
                            task.type === 'study' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' :
                            task.type === 'revision' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' :
                            task.type === 'practice' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' :
                            task.type === 'break' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
                            'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                          }`}>
                            {task.type}
                          </span>
                          <span>{task.duration} min</span>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="p-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Progress Bar */}
              {totalTasks > 0 && (
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500 dark:text-gray-400">Progress</span>
                    <span className="font-medium text-rose-500">{Math.round((completedTasks / totalTasks) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-rose-500 to-pink-500 h-2 rounded-full transition-all"
                      style={{ width: `${(completedTasks / totalTasks) * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="space-y-4">
              {/* Today's Stats */}
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-xl p-4">
                <h4 className="font-medium dark:text-white mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-rose-500" /> Today's Stats
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Study Time</span>
                    <span className="font-bold dark:text-white">{currentLog.totalStudyTime} min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Tasks Done</span>
                    <span className="font-bold dark:text-white">{completedTasks}/{totalTasks}</span>
                  </div>
                </div>
              </div>
              
              {/* Mood */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                <h4 className="font-medium dark:text-white mb-3">How are you feeling?</h4>
                <div className="flex justify-between">
                  {(Object.keys(MOOD_EMOJIS) as Array<keyof typeof MOOD_EMOJIS>).map(mood => (
                    <button
                      key={mood}
                      onClick={() => updateLog({ mood })}
                      className={`p-2 rounded-lg text-2xl transition ${
                        currentLog.mood === mood 
                          ? 'bg-rose-100 dark:bg-rose-900/30 scale-110'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      {MOOD_EMOJIS[mood]}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Notes */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                <h4 className="font-medium dark:text-white mb-3 flex items-center gap-2">
                  <Edit2 className="w-4 h-4" /> Notes
                </h4>
                <textarea
                  value={currentLog.notes}
                  onChange={e => updateLog({ notes: e.target.value })}
                  placeholder="How was your study session today?"
                  className="w-full h-24 p-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white resize-none text-sm"
                />
              </div>
              
              {/* Motivation */}
              {completedTasks > 0 && completedTasks === totalTasks && (
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4 text-white text-center">
                  <Sparkles className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-bold">All tasks completed! 🎉</p>
                  <p className="text-sm opacity-80">You're doing amazing!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyTracker;
