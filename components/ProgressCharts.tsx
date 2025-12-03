import React, { useState, useEffect } from 'react';
import { BarChart3, X, TrendingUp, Calendar, Clock, Target, BookOpen, Award, ChevronDown, Brain } from 'lucide-react';

interface ProgressChartsProps {
  onClose: () => void;
}

interface DailyActivity {
  date: string;
  flashcards: number;
  mcqs: number;
  minutes: number;
  sessions: number;
}

interface WeeklyStats {
  week: string;
  total: number;
  avgDaily: number;
}

const ProgressCharts: React.FC<ProgressChartsProps> = ({ onClose }) => {
  const [dailyData, setDailyData] = useState<DailyActivity[]>([]);
  const [timeRange, setTimeRange] = useState<'7' | '14' | '30'>('7');
  const [chartType, setChartType] = useState<'activity' | 'subjects' | 'performance'>('activity');

  useEffect(() => {
    loadActivityData();
  }, [timeRange]);

  const loadActivityData = () => {
    const activityLog = JSON.parse(localStorage.getItem('7k-activity-log') || '{}');
    const days = parseInt(timeRange);
    const data: DailyActivity[] = [];
    
    for (let i = days - 1; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateKey = date.toISOString().split('T')[0];
      const dayData = activityLog[dateKey] || { flashcards: 0, mcqs: 0, minutes: 0, sessions: 0 };
      
      data.push({
        date: dateKey,
        ...dayData
      });
    }
    
    setDailyData(data);
  };

  // Calculate stats
  const totalFlashcards = dailyData.reduce((sum, d) => sum + d.flashcards, 0);
  const totalMCQs = dailyData.reduce((sum, d) => sum + d.mcqs, 0);
  const totalMinutes = dailyData.reduce((sum, d) => sum + d.minutes, 0);
  const totalSessions = dailyData.reduce((sum, d) => sum + d.sessions, 0);
  const activeDays = dailyData.filter(d => d.flashcards + d.mcqs > 0).length;
  const avgDailyItems = Math.round((totalFlashcards + totalMCQs) / parseInt(timeRange));

  // Get max for chart scaling
  const maxActivity = Math.max(...dailyData.map(d => d.flashcards + d.mcqs), 1);

  // Get subject progress
  const getSubjectProgress = () => {
    const userProgress = JSON.parse(localStorage.getItem('7k-hsc-progress') || '{}');
    const subjectStats: Record<string, { done: number; total: number }> = {};
    
    Object.entries(userProgress).forEach(([key, value]: [string, any]) => {
      const parts = key.split('-');
      const subject = parts[0];
      if (!subjectStats[subject]) {
        subjectStats[subject] = { done: 0, total: 0 };
      }
      subjectStats[subject].done += Array.isArray(value) ? value.length : 0;
    });
    
    return Object.entries(subjectStats)
      .filter(([_, stats]) => stats.done > 0)
      .sort((a, b) => b[1].done - a[1].done);
  };

  // Get quiz performance
  const getQuizPerformance = () => {
    const quizHistory = JSON.parse(localStorage.getItem('7k-quiz-history') || '[]');
    const recentQuizzes = quizHistory.slice(-10);
    return recentQuizzes;
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  };

  const formatShortDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', { day: 'numeric' });
  };

  const subjectProgress = getSubjectProgress();
  const quizPerformance = getQuizPerformance();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold dark:text-white">Progress Analytics</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Track your study patterns
                </p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <BookOpen className="w-4 h-4 text-indigo-500" />
                <span className="text-xs text-gray-500">Flashcards</span>
              </div>
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{totalFlashcards}</div>
            </div>
            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <Brain className="w-4 h-4 text-green-500" />
                <span className="text-xs text-gray-500">MCQs</span>
              </div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{totalMCQs}</div>
            </div>
            <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-orange-500" />
                <span className="text-xs text-gray-500">Minutes</span>
              </div>
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{totalMinutes}</div>
            </div>
            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="w-4 h-4 text-purple-500" />
                <span className="text-xs text-gray-500">Active Days</span>
              </div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {activeDays}/{timeRange}
              </div>
            </div>
          </div>
        </div>

        {/* Chart Controls */}
        <div className="px-6 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <div className="flex gap-2">
            {(['activity', 'subjects', 'performance'] as const).map(type => (
              <button
                key={type}
                onClick={() => setChartType(type)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                  chartType === type
                    ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {type === 'activity' ? 'Daily Activity' : type === 'subjects' ? 'By Subject' : 'Quiz Scores'}
              </button>
            ))}
          </div>
          
          {chartType === 'activity' && (
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value as any)}
              className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300"
            >
              <option value="7">Last 7 Days</option>
              <option value="14">Last 14 Days</option>
              <option value="30">Last 30 Days</option>
            </select>
          )}
        </div>

        {/* Chart Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {chartType === 'activity' && (
            <div>
              {/* Daily Activity Bar Chart */}
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">Daily Items Completed</h3>
                
                <div className="flex items-end gap-1 h-48">
                  {dailyData.map((day, idx) => {
                    const total = day.flashcards + day.mcqs;
                    const heightPercent = (total / maxActivity) * 100;
                    const fcHeight = total > 0 ? (day.flashcards / total) * heightPercent : 0;
                    const mcqHeight = total > 0 ? (day.mcqs / total) * heightPercent : 0;
                    
                    return (
                      <div key={day.date} className="flex-1 flex flex-col items-center">
                        <div className="w-full flex flex-col-reverse" style={{ height: '160px' }}>
                          {total > 0 ? (
                            <>
                              <div 
                                className="w-full bg-indigo-400 rounded-t"
                                style={{ height: `${fcHeight}%` }}
                                title={`Flashcards: ${day.flashcards}`}
                              />
                              <div 
                                className="w-full bg-green-400"
                                style={{ height: `${mcqHeight}%` }}
                                title={`MCQs: ${day.mcqs}`}
                              />
                            </>
                          ) : (
                            <div className="w-full bg-gray-200 dark:bg-gray-600 h-1 rounded" />
                          )}
                        </div>
                        <span className="text-xs text-gray-500 mt-2 truncate w-full text-center">
                          {timeRange === '30' ? (idx % 5 === 0 ? formatShortDate(day.date) : '') : formatShortDate(day.date)}
                        </span>
                      </div>
                    );
                  })}
                </div>
                
                <div className="flex items-center justify-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-indigo-400 rounded" />
                    <span className="text-xs text-gray-500">Flashcards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded" />
                    <span className="text-xs text-gray-500">MCQs</span>
                  </div>
                </div>
              </div>

              {/* Insights */}
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-blue-500" />
                    <span className="font-medium dark:text-white">Average Daily</span>
                  </div>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{avgDailyItems}</p>
                  <p className="text-sm text-gray-500">items per day</p>
                </div>
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-amber-500" />
                    <span className="font-medium dark:text-white">Best Day</span>
                  </div>
                  <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">
                    {Math.max(...dailyData.map(d => d.flashcards + d.mcqs))}
                  </p>
                  <p className="text-sm text-gray-500">items in one day</p>
                </div>
              </div>
            </div>
          )}

          {chartType === 'subjects' && (
            <div>
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">Progress by Subject</h3>
              
              {subjectProgress.length === 0 ? (
                <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                  No progress data yet. Start studying to see your subject breakdown.
                </div>
              ) : (
                <div className="space-y-3">
                  {subjectProgress.map(([subject, stats]) => (
                    <div key={subject} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium dark:text-white">{subject}</span>
                        <span className="text-sm text-gray-500">{stats.done} completed</span>
                      </div>
                      <div className="w-full h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                          style={{ width: `${Math.min((stats.done / 100) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {chartType === 'performance' && (
            <div>
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">Recent Quiz Scores</h3>
              
              {quizPerformance.length === 0 ? (
                <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                  No quiz history yet. Take some quizzes to see your performance trend.
                </div>
              ) : (
                <>
                  {/* Line chart representation */}
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                    <div className="flex items-end gap-2 h-48">
                      {quizPerformance.map((quiz: any, idx: number) => (
                        <div key={idx} className="flex-1 flex flex-col items-center">
                          <div className="w-full flex flex-col-reverse" style={{ height: '160px' }}>
                            <div 
                              className={`w-full rounded-t transition ${
                                quiz.score >= 80 ? 'bg-green-500' :
                                quiz.score >= 60 ? 'bg-yellow-500' :
                                'bg-red-500'
                              }`}
                              style={{ height: `${quiz.score}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-500 mt-2">{quiz.score}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quiz list */}
                  <div className="mt-4 space-y-2">
                    {quizPerformance.slice().reverse().map((quiz: any, idx: number) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            quiz.score >= 80 ? 'bg-green-100 dark:bg-green-900/30' :
                            quiz.score >= 60 ? 'bg-yellow-100 dark:bg-yellow-900/30' :
                            'bg-red-100 dark:bg-red-900/30'
                          }`}>
                            <Award className={`w-5 h-5 ${
                              quiz.score >= 80 ? 'text-green-500' :
                              quiz.score >= 60 ? 'text-yellow-500' :
                              'text-red-500'
                            }`} />
                          </div>
                          <div>
                            <span className="font-medium dark:text-white">{quiz.subject || 'Quiz'}</span>
                            <p className="text-xs text-gray-500">{quiz.chapter || 'General'}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`text-lg font-bold ${
                            quiz.score >= 80 ? 'text-green-600 dark:text-green-400' :
                            quiz.score >= 60 ? 'text-yellow-600 dark:text-yellow-400' :
                            'text-red-600 dark:text-red-400'
                          }`}>
                            {quiz.score}%
                          </span>
                          <p className="text-xs text-gray-500">
                            {quiz.correct}/{quiz.total} correct
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            📊 Consistent daily practice leads to better exam results!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressCharts;
