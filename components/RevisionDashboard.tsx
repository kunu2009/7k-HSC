import React, { useState, useEffect } from 'react';
import { BookOpen, ChevronRight, Clock, CheckCircle, AlertCircle, RotateCcw, Filter, Calendar, Target, Flame, TrendingUp, Zap, X } from 'lucide-react';
import { Subject, Chapter } from '../types';

interface RevisionDashboardProps {
  subjects: Subject[];
  onSelectChapter: (subjectIndex: number, chapterIndex: number) => void;
  onClose: () => void;
}

interface ChapterProgress {
  chapterId: string;
  subjectName: string;
  lastReviewed: string;
  reviewCount: number;
  mastery: number; // 0-100
  dueIn: number; // days
}

const RevisionDashboard: React.FC<RevisionDashboardProps> = ({ subjects, onSelectChapter, onClose }) => {
  const [filter, setFilter] = useState<'all' | 'due' | 'weak' | 'strong'>('all');
  const [progress, setProgress] = useState<Map<string, ChapterProgress>>(new Map());
  const [selectedSubject, setSelectedSubject] = useState<string>('all');

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('7k-revision-progress');
    if (savedProgress) {
      const parsed = JSON.parse(savedProgress);
      setProgress(new Map(Object.entries(parsed)));
    }
  }, []);

  // Calculate chapter status
  const getChapterStatus = (subjectName: string, chapter: Chapter) => {
    const key = `${subjectName}-${chapter.id}`;
    const chapterProgress = progress.get(key);
    
    // Get user progress from localStorage
    const userProgress = JSON.parse(localStorage.getItem('7k-hsc-progress') || '{}');
    const completedFlashcards = userProgress[`${subjectName}-${chapter.id}-flashcards`] || [];
    const completedMCQs = userProgress[`${subjectName}-${chapter.id}-mcqs`] || [];
    const completedLongAnswers = userProgress[`${subjectName}-${chapter.id}-longAnswers`] || [];
    
    const totalItems = (chapter.flashcards?.length || 0) + (chapter.mcqs?.length || 0) + (chapter.longAnswers?.length || 0);
    const completedItems = completedFlashcards.length + completedMCQs.length + completedLongAnswers.length;
    const completionPercent = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
    
    // Calculate days since last review
    let daysSinceReview = 999;
    if (chapterProgress?.lastReviewed) {
      const lastDate = new Date(chapterProgress.lastReviewed);
      const today = new Date();
      daysSinceReview = Math.floor((today.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
    }

    // SRS-like due calculation
    const reviewCount = chapterProgress?.reviewCount || 0;
    const interval = Math.pow(2, reviewCount); // 1, 2, 4, 8, 16 days...
    const dueIn = interval - daysSinceReview;

    return {
      completionPercent,
      daysSinceReview,
      reviewCount,
      dueIn,
      isDue: dueIn <= 0,
      isWeak: completionPercent < 50,
      isStrong: completionPercent >= 80,
    };
  };

  // Get all chapters with status
  const getChaptersWithStatus = () => {
    const chapters: {
      subject: Subject;
      subjectIndex: number;
      chapter: Chapter;
      chapterIndex: number;
      status: ReturnType<typeof getChapterStatus>;
    }[] = [];

    subjects.forEach((subject, subjectIndex) => {
      if (selectedSubject !== 'all' && subject.name !== selectedSubject) return;
      
      subject.chapters.forEach((chapter, chapterIndex) => {
        const status = getChapterStatus(subject.name, chapter);
        chapters.push({
          subject,
          subjectIndex,
          chapter,
          chapterIndex,
          status,
        });
      });
    });

    // Apply filters
    let filtered = chapters;
    switch (filter) {
      case 'due':
        filtered = chapters.filter(c => c.status.isDue);
        break;
      case 'weak':
        filtered = chapters.filter(c => c.status.isWeak);
        break;
      case 'strong':
        filtered = chapters.filter(c => c.status.isStrong);
        break;
    }

    // Sort by due date
    return filtered.sort((a, b) => a.status.dueIn - b.status.dueIn);
  };

  const chaptersWithStatus = getChaptersWithStatus();
  const dueCount = chaptersWithStatus.filter(c => c.status.isDue).length;
  const weakCount = chaptersWithStatus.filter(c => c.status.isWeak).length;

  // Mark chapter as reviewed
  const markReviewed = (subjectName: string, chapterId: string) => {
    const key = `${subjectName}-${chapterId}`;
    const existing = progress.get(key);
    
    const updated: ChapterProgress = {
      chapterId,
      subjectName,
      lastReviewed: new Date().toISOString(),
      reviewCount: (existing?.reviewCount || 0) + 1,
      mastery: existing?.mastery || 0,
      dueIn: 0,
    };

    const newProgress = new Map(progress);
    newProgress.set(key, updated);
    setProgress(newProgress);

    // Save to localStorage
    const saveObj = Object.fromEntries(newProgress);
    localStorage.setItem('7k-revision-progress', JSON.stringify(saveObj));
  };

  const getStatusColor = (status: ReturnType<typeof getChapterStatus>) => {
    if (status.isDue) return 'bg-red-100 dark:bg-red-900/30 border-red-200 dark:border-red-800';
    if (status.isWeak) return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800';
    if (status.isStrong) return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
    return 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700';
  };

  const getDueText = (dueIn: number) => {
    if (dueIn <= 0) return 'Due now';
    if (dueIn === 1) return 'Due tomorrow';
    return `Due in ${dueIn} days`;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold dark:text-white">Revision Dashboard</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {dueCount} chapters due • {weakCount} need more practice
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-3 mb-4">
            <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <AlertCircle className="w-4 h-4 text-red-500" />
                <span className="text-xs text-gray-500 dark:text-gray-400">Due Now</span>
              </div>
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">{dueCount}</div>
            </div>
            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <Target className="w-4 h-4 text-yellow-500" />
                <span className="text-xs text-gray-500 dark:text-gray-400">Weak</span>
              </div>
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{weakCount}</div>
            </div>
            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-xs text-gray-500 dark:text-gray-400">Strong</span>
              </div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {chaptersWithStatus.filter(c => c.status.isStrong).length}
              </div>
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                <span className="text-xs text-gray-500 dark:text-gray-400">Total</span>
              </div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {subjects.reduce((t, s) => t + s.chapters.length, 0)}
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex gap-2">
              {(['all', 'due', 'weak', 'strong'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1.5 rounded-lg text-sm capitalize font-medium transition ${
                    filter === f
                      ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {f === 'due' ? `Due (${dueCount})` : f}
                </button>
              ))}
            </div>
            
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="px-3 py-1.5 rounded-lg text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-none"
            >
              <option value="all">All Subjects</option>
              {subjects.map(s => (
                <option key={s.name} value={s.name}>{s.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Chapter List */}
        <div className="flex-1 overflow-y-auto p-4">
          {chaptersWithStatus.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
              <h3 className="font-semibold dark:text-white mb-2">No Chapters Found</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {filter !== 'all' ? 'Try changing the filter to see more chapters.' : 'Add chapters to your subjects to get started.'}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {chaptersWithStatus.map(({ subject, subjectIndex, chapter, chapterIndex, status }) => (
                <div
                  key={`${subject.name}-${chapter.id}`}
                  className={`p-4 rounded-xl border transition hover:shadow-md ${getStatusColor(status)}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium px-2 py-0.5 bg-gray-200 dark:bg-gray-600 rounded text-gray-600 dark:text-gray-300">
                          {subject.name}
                        </span>
                        {status.isDue && (
                          <span className="text-xs font-medium px-2 py-0.5 bg-red-500 text-white rounded-full flex items-center gap-1">
                            <Flame className="w-3 h-3" />
                            Due
                          </span>
                        )}
                      </div>
                      <h4 className="font-semibold dark:text-white mb-2">{chapter.title}</h4>
                      
                      {/* Progress bar */}
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all ${
                              status.isStrong ? 'bg-green-500' :
                              status.isWeak ? 'bg-yellow-500' :
                              'bg-blue-500'
                            }`}
                            style={{ width: `${status.completionPercent}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {status.completionPercent}%
                        </span>
                      </div>

                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {status.daysSinceReview < 999 
                            ? `${status.daysSinceReview}d ago`
                            : 'Never reviewed'
                          }
                        </span>
                        <span className="flex items-center gap-1">
                          <RotateCcw className="w-3 h-3" />
                          {status.reviewCount} reviews
                        </span>
                        <span className={`flex items-center gap-1 ${status.isDue ? 'text-red-500' : ''}`}>
                          <Calendar className="w-3 h-3" />
                          {getDueText(status.dueIn)}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 ml-4">
                      <button
                        onClick={() => markReviewed(subject.name, chapter.id)}
                        className="p-2 text-gray-400 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/30 rounded-lg transition"
                        title="Mark as reviewed"
                      >
                        <CheckCircle className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => {
                          onSelectChapter(subjectIndex, chapterIndex);
                          onClose();
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 font-medium text-sm"
                      >
                        Study
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex gap-3">
            <button
              onClick={() => {
                const dueChapter = chaptersWithStatus.find(c => c.status.isDue);
                if (dueChapter) {
                  onSelectChapter(dueChapter.subjectIndex, dueChapter.chapterIndex);
                  onClose();
                }
              }}
              disabled={dueCount === 0}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-medium disabled:opacity-50"
            >
              <Zap className="w-5 h-5" />
              Start Due Revision ({dueCount})
            </button>
            <button
              onClick={() => {
                const weakChapter = chaptersWithStatus.find(c => c.status.isWeak);
                if (weakChapter) {
                  onSelectChapter(weakChapter.subjectIndex, weakChapter.chapterIndex);
                  onClose();
                }
              }}
              disabled={weakCount === 0}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-xl font-medium disabled:opacity-50"
            >
              <Target className="w-5 h-5" />
              Practice Weak ({weakCount})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevisionDashboard;
