import React, { useState, useEffect } from 'react';
import { Bookmark, X, Trash2, ChevronDown, ChevronRight, BookOpen, Brain, Calendar, Filter } from 'lucide-react';
import { Subject, Chapter, Question, Flashcard } from '../types';

interface BookmarksProps {
  subjects: Subject[];
  onClose: () => void;
  onStudyBookmark: (subjectIndex: number, chapterIndex: number, type: 'flashcard' | 'mcq', itemIndex: number) => void;
}

interface BookmarkedItem {
  id: string;
  subject: string;
  subjectIndex: number;
  chapter: string;
  chapterId: string;
  chapterIndex: number;
  type: 'flashcard' | 'mcq';
  itemIndex: number;
  content: string;
  dateAdded: string;
}

const Bookmarks: React.FC<BookmarksProps> = ({ subjects, onClose, onStudyBookmark }) => {
  const [bookmarks, setBookmarks] = useState<BookmarkedItem[]>([]);
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'flashcard' | 'mcq'>('all');
  const [sortBy, setSortBy] = useState<'recent' | 'subject'>('recent');

  useEffect(() => {
    loadBookmarks();
  }, [subjects]);

  const loadBookmarks = () => {
    const saved = JSON.parse(localStorage.getItem('7k-bookmarks') || '[]');
    
    // Enrich bookmarks with current content
    const enriched: BookmarkedItem[] = [];
    
    saved.forEach((bm: any) => {
      const subjectIdx = subjects.findIndex(s => s.name === bm.subject);
      if (subjectIdx === -1) return;
      
      const subject = subjects[subjectIdx];
      const chapterIdx = subject.chapters.findIndex(c => c.id === bm.chapterId);
      if (chapterIdx === -1) return;
      
      const chapter = subject.chapters[chapterIdx];
      let content = '';
      
      if (bm.type === 'flashcard' && chapter.flashcards?.[bm.itemIndex]) {
        content = chapter.flashcards[bm.itemIndex].front;
      } else if (bm.type === 'mcq' && chapter.mcqs?.[bm.itemIndex]) {
        content = chapter.mcqs[bm.itemIndex].question;
      } else {
        return; // Item no longer exists
      }
      
      enriched.push({
        ...bm,
        subjectIndex: subjectIdx,
        chapterIndex: chapterIdx,
        content
      });
    });
    
    setBookmarks(enriched);
  };

  const removeBookmark = (id: string) => {
    const saved = JSON.parse(localStorage.getItem('7k-bookmarks') || '[]');
    const updated = saved.filter((bm: any) => bm.id !== id);
    localStorage.setItem('7k-bookmarks', JSON.stringify(updated));
    setBookmarks(prev => prev.filter(bm => bm.id !== id));
  };

  const clearAllBookmarks = () => {
    if (window.confirm('Are you sure you want to clear all bookmarks?')) {
      localStorage.setItem('7k-bookmarks', '[]');
      setBookmarks([]);
    }
  };

  // Group bookmarks by subject
  const groupedBySubject = bookmarks.reduce((acc, bm) => {
    if (!acc[bm.subject]) {
      acc[bm.subject] = [];
    }
    acc[bm.subject].push(bm);
    return acc;
  }, {} as Record<string, BookmarkedItem[]>);

  // Filter and sort
  const getFilteredBookmarks = () => {
    let filtered = bookmarks;
    
    if (filterType !== 'all') {
      filtered = filtered.filter(bm => bm.type === filterType);
    }
    
    if (sortBy === 'recent') {
      return filtered.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
    }
    
    return filtered;
  };

  const filteredBookmarks = getFilteredBookmarks();
  const flashcardCount = bookmarks.filter(bm => bm.type === 'flashcard').length;
  const mcqCount = bookmarks.filter(bm => bm.type === 'mcq').length;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <Bookmark className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold dark:text-white">Bookmarks</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {bookmarks.length} saved items
                </p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-3 mb-4">
            <div className="flex-1 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl text-center">
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{flashcardCount}</div>
              <div className="text-xs text-gray-500">Flashcards</div>
            </div>
            <div className="flex-1 p-3 bg-green-50 dark:bg-green-900/20 rounded-xl text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{mcqCount}</div>
              <div className="text-xs text-gray-500">MCQs</div>
            </div>
            <div className="flex-1 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {Object.keys(groupedBySubject).length}
              </div>
              <div className="text-xs text-gray-500">Subjects</div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {(['all', 'flashcard', 'mcq'] as const).map(type => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                    filterType === type
                      ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {type === 'all' ? 'All' : type === 'flashcard' ? 'Flashcards' : 'MCQs'}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300"
              >
                <option value="recent">Recent First</option>
                <option value="subject">By Subject</option>
              </select>
              
              {bookmarks.length > 0 && (
                <button
                  onClick={clearAllBookmarks}
                  className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
                  title="Clear all bookmarks"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Bookmarks List */}
        <div className="flex-1 overflow-y-auto p-6">
          {filteredBookmarks.length === 0 ? (
            <div className="text-center py-12">
              <Bookmark className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
                No Bookmarks Yet
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                {filterType !== 'all' 
                  ? `No ${filterType}s bookmarked. Try clearing the filter.`
                  : 'Bookmark important flashcards and MCQs while studying to review them later.'
                }
              </p>
            </div>
          ) : sortBy === 'subject' ? (
            // Group by subject view
            <div className="space-y-3">
              {Object.entries(groupedBySubject).map(([subjectName, items]: [string, BookmarkedItem[]]) => {
                const subjectObj = subjects.find(s => s.name === subjectName);
                const isExpanded = expandedSubject === subjectName;
                const filteredItems = filterType === 'all' 
                  ? items 
                  : items.filter((i: BookmarkedItem) => i.type === filterType);
                
                if (filteredItems.length === 0) return null;
                
                return (
                  <div key={subjectName} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setExpandedSubject(isExpanded ? null : subjectName)}
                      className="w-full p-4 flex items-center justify-between bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                    >
                      <div className="flex items-center gap-3">
                        {isExpanded ? (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        )}
                        <div className={`w-8 h-8 rounded-lg ${subjectObj?.color || 'bg-gray-400'} flex items-center justify-center text-white font-bold text-sm`}>
                          {subjectName.charAt(0)}
                        </div>
                        <span className="font-medium dark:text-white">{subjectName}</span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {filteredItems.length} items
                      </span>
                    </button>
                    
                    {isExpanded && (
                      <div className="divide-y divide-gray-100 dark:divide-gray-700">
                        {filteredItems.map(item => (
                          <BookmarkItem 
                            key={item.id}
                            item={item}
                            onRemove={() => removeBookmark(item.id)}
                            onStudy={() => {
                              onStudyBookmark(item.subjectIndex, item.chapterIndex, item.type, item.itemIndex);
                              onClose();
                            }}
                            formatDate={formatDate}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            // Recent first view
            <div className="space-y-2">
              {filteredBookmarks.map(item => (
                <BookmarkItem 
                  key={item.id}
                  item={item}
                  showSubject
                  onRemove={() => removeBookmark(item.id)}
                  onStudy={() => {
                    onStudyBookmark(item.subjectIndex, item.chapterIndex, item.type, item.itemIndex);
                    onClose();
                  }}
                  formatDate={formatDate}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            💡 Bookmark difficult questions to review them before the exam
          </p>
        </div>
      </div>
    </div>
  );
};

// Individual bookmark item component
const BookmarkItem: React.FC<{
  item: BookmarkedItem;
  showSubject?: boolean;
  onRemove: () => void;
  onStudy: () => void;
  formatDate: (date: string) => string;
}> = ({ item, showSubject, onRemove, onStudy, formatDate }) => (
  <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl flex items-start gap-3">
    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
      item.type === 'flashcard' 
        ? 'bg-indigo-100 dark:bg-indigo-900/30' 
        : 'bg-green-100 dark:bg-green-900/30'
    }`}>
      {item.type === 'flashcard' ? (
        <BookOpen className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
      ) : (
        <Brain className="w-5 h-5 text-green-500 dark:text-green-400" />
      )}
    </div>
    
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium dark:text-white line-clamp-2">
        {item.content}
      </p>
      <div className="flex items-center gap-2 mt-1 text-xs text-gray-500 dark:text-gray-400">
        {showSubject && (
          <>
            <span>{item.subject}</span>
            <span>•</span>
          </>
        )}
        <span>{item.chapter}</span>
        <span>•</span>
        <span className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {formatDate(item.dateAdded)}
        </span>
      </div>
    </div>
    
    <div className="flex items-center gap-2">
      <button
        onClick={onStudy}
        className="px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg text-sm font-medium hover:bg-indigo-200 dark:hover:bg-indigo-900/50"
      >
        Study
      </button>
      <button
        onClick={onRemove}
        className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  </div>
);

export default Bookmarks;
