import React, { useState, useEffect } from 'react';
import { FileText, X, ChevronDown, ChevronRight, Clock, CheckCircle, Star, AlertTriangle, BookOpen, Calendar } from 'lucide-react';
import { Subject, Chapter } from '../types';

interface ChapterSummaryProps {
  subjects: Subject[];
  onClose: () => void;
  onSelectChapter: (subjectIndex: number, chapterIndex: number) => void;
}

interface ChapterStat {
  subject: string;
  subjectIndex: number;
  chapter: Chapter;
  chapterIndex: number;
  completion: number;
  flashcardsDone: number;
  mcqsDone: number;
  lastStudied: string | null;
  isImportant: boolean;
}

const ChapterSummary: React.FC<ChapterSummaryProps> = ({ subjects, onSelectChapter, onClose }) => {
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'name' | 'completion' | 'recent'>('name');
  const [filterImportant, setFilterImportant] = useState(false);
  const [chapterStats, setChapterStats] = useState<ChapterStat[]>([]);

  // Load chapter stats from localStorage
  useEffect(() => {
    const userProgress = JSON.parse(localStorage.getItem('7k-hsc-progress') || '{}');
    const importantChapters = JSON.parse(localStorage.getItem('7k-important-chapters') || '[]');
    const lastStudied = JSON.parse(localStorage.getItem('7k-last-studied') || '{}');
    
    const stats: ChapterStat[] = [];
    
    subjects.forEach((subject, subjectIndex) => {
      subject.chapters.forEach((chapter, chapterIndex) => {
        const fcKey = `${subject.name}-${chapter.id}-flashcards`;
        const mcqKey = `${subject.name}-${chapter.id}-mcqs`;
        
        const completedFc = userProgress[fcKey]?.length || 0;
        const completedMcq = userProgress[mcqKey]?.length || 0;
        const totalFc = chapter.flashcards?.length || 0;
        const totalMcq = chapter.mcqs?.length || 0;
        const total = totalFc + totalMcq;
        const done = completedFc + completedMcq;
        
        stats.push({
          subject: subject.name,
          subjectIndex,
          chapter,
          chapterIndex,
          completion: total > 0 ? Math.round((done / total) * 100) : 0,
          flashcardsDone: totalFc > 0 ? Math.round((completedFc / totalFc) * 100) : 0,
          mcqsDone: totalMcq > 0 ? Math.round((completedMcq / totalMcq) * 100) : 0,
          lastStudied: lastStudied[`${subject.name}-${chapter.id}`] || null,
          isImportant: importantChapters.includes(`${subject.name}-${chapter.id}`),
        });
      });
    });
    
    setChapterStats(stats);
  }, [subjects]);

  const toggleImportant = (subjectName: string, chapterId: string) => {
    const key = `${subjectName}-${chapterId}`;
    const saved = JSON.parse(localStorage.getItem('7k-important-chapters') || '[]');
    
    let updated;
    if (saved.includes(key)) {
      updated = saved.filter((k: string) => k !== key);
    } else {
      updated = [...saved, key];
    }
    
    localStorage.setItem('7k-important-chapters', JSON.stringify(updated));
    
    setChapterStats(prev => prev.map(stat => 
      `${stat.subject}-${stat.chapter.id}` === key 
        ? { ...stat, isImportant: !stat.isImportant }
        : stat
    ));
  };

  // Get filtered and sorted chapters
  const getFilteredChapters = (subjectName: string) => {
    let filtered = chapterStats.filter(s => s.subject === subjectName);
    
    if (filterImportant) {
      filtered = filtered.filter(s => s.isImportant);
    }
    
    switch (sortBy) {
      case 'completion':
        return filtered.sort((a, b) => a.completion - b.completion);
      case 'recent':
        return filtered.sort((a, b) => {
          if (!a.lastStudied && !b.lastStudied) return 0;
          if (!a.lastStudied) return 1;
          if (!b.lastStudied) return -1;
          return new Date(b.lastStudied).getTime() - new Date(a.lastStudied).getTime();
        });
      default:
        return filtered;
    }
  };

  // Get subject-level stats
  const getSubjectStats = (subjectName: string) => {
    const subjectChapters = chapterStats.filter(s => s.subject === subjectName);
    const totalCompletion = subjectChapters.reduce((acc, ch) => acc + ch.completion, 0);
    const avgCompletion = subjectChapters.length > 0 ? Math.round(totalCompletion / subjectChapters.length) : 0;
    const lowChapters = subjectChapters.filter(ch => ch.completion < 30).length;
    
    return { avgCompletion, totalChapters: subjectChapters.length, lowChapters };
  };

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return 'Never';
    const date = new Date(dateStr);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  };

  // Overall stats
  const totalChapters = chapterStats.length;
  const completedChapters = chapterStats.filter(ch => ch.completion >= 80).length;
  const lowChapters = chapterStats.filter(ch => ch.completion < 30).length;
  const avgCompletion = totalChapters > 0 
    ? Math.round(chapterStats.reduce((acc, ch) => acc + ch.completion, 0) / totalChapters)
    : 0;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold dark:text-white">Chapter Summary</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Overview of all chapters and progress
                </p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Overall Stats */}
          <div className="grid grid-cols-4 gap-3 mb-4">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{totalChapters}</div>
              <div className="text-xs text-gray-500">Total Chapters</div>
            </div>
            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{completedChapters}</div>
              <div className="text-xs text-gray-500">Mastered (80%+)</div>
            </div>
            <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-xl text-center">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">{lowChapters}</div>
              <div className="text-xs text-gray-500">Need Work (&lt;30%)</div>
            </div>
            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{avgCompletion}%</div>
              <div className="text-xs text-gray-500">Average</div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300"
            >
              <option value="name">Sort by Name</option>
              <option value="completion">Sort by Progress (Low→High)</option>
              <option value="recent">Sort by Recent</option>
            </select>
            <button
              onClick={() => setFilterImportant(!filterImportant)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                filterImportant
                  ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
              }`}
            >
              <Star className={`w-4 h-4 ${filterImportant ? 'fill-current' : ''}`} />
              Important Only
            </button>
          </div>
        </div>

        {/* Subject List */}
        <div className="flex-1 overflow-y-auto p-4">
          {subjects.map((subject, subjectIndex) => {
            const stats = getSubjectStats(subject.name);
            const chapters = getFilteredChapters(subject.name);
            const isExpanded = expandedSubject === subject.name;
            
            return (
              <div key={subject.name} className="mb-3">
                {/* Subject Header */}
                <button
                  onClick={() => setExpandedSubject(isExpanded ? null : subject.name)}
                  className={`w-full p-4 rounded-xl flex items-center justify-between transition ${
                    isExpanded 
                      ? 'bg-indigo-50 dark:bg-indigo-900/30' 
                      : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-indigo-500" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                    <div className={`w-10 h-10 rounded-lg ${subject.color} flex items-center justify-center text-white font-bold`}>
                      {subject.name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <span className="font-semibold dark:text-white">{subject.name}</span>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {stats.totalChapters} chapters • {stats.avgCompletion}% complete
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {stats.lowChapters > 0 && (
                      <span className="flex items-center gap-1 px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-xs font-medium">
                        <AlertTriangle className="w-3 h-3" />
                        {stats.lowChapters} weak
                      </span>
                    )}
                    <div className="w-24 h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          stats.avgCompletion >= 80 ? 'bg-green-500' :
                          stats.avgCompletion >= 50 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${stats.avgCompletion}%` }}
                      />
                    </div>
                  </div>
                </button>

                {/* Chapters */}
                {isExpanded && (
                  <div className="mt-2 ml-6 space-y-2">
                    {chapters.length === 0 ? (
                      <p className="text-sm text-gray-500 dark:text-gray-400 p-3">
                        No chapters match the current filter.
                      </p>
                    ) : (
                      chapters.map(stat => (
                        <div
                          key={stat.chapter.id}
                          className="p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl flex items-center justify-between"
                        >
                          <div className="flex items-center gap-3 flex-1">
                            <button
                              onClick={() => toggleImportant(stat.subject, stat.chapter.id)}
                              className="p-1"
                            >
                              <Star className={`w-4 h-4 ${
                                stat.isImportant 
                                  ? 'fill-amber-400 text-amber-400' 
                                  : 'text-gray-300 dark:text-gray-600'
                              }`} />
                            </button>
                            <div className="flex-1">
                              <span className="font-medium dark:text-white text-sm">{stat.chapter.title}</span>
                              <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mt-1">
                                <span className="flex items-center gap-1">
                                  <BookOpen className="w-3 h-3" />
                                  FC: {stat.flashcardsDone}%
                                </span>
                                <span className="flex items-center gap-1">
                                  <CheckCircle className="w-3 h-3" />
                                  MCQ: {stat.mcqsDone}%
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  {formatDate(stat.lastStudied)}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="text-right">
                              <div className={`text-lg font-bold ${
                                stat.completion >= 80 ? 'text-green-600 dark:text-green-400' :
                                stat.completion >= 50 ? 'text-yellow-600 dark:text-yellow-400' :
                                'text-red-600 dark:text-red-400'
                              }`}>
                                {stat.completion}%
                              </div>
                            </div>
                            <button
                              onClick={() => {
                                onSelectChapter(stat.subjectIndex, stat.chapterIndex);
                                onClose();
                              }}
                              className="px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg text-sm font-medium hover:bg-indigo-200 dark:hover:bg-indigo-900/50"
                            >
                              Study
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            ⭐ Star important chapters to focus on them during revision
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChapterSummary;
