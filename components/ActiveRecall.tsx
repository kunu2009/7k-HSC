import React, { useState, useEffect } from 'react';
import { X, Eye, EyeOff, Check, RotateCcw, ChevronRight, ChevronLeft, Shuffle, Trophy, Star, Filter } from 'lucide-react';
import { Subject, Flashcard } from '../types';

interface ActiveRecallProps {
  subjects: Subject[];
  onClose: () => void;
}

interface RecallItem {
  id: string;
  question: string;
  answer: string;
  subject: string;
  chapter: string;
  revealed: boolean;
  mastered: boolean;
}

const ActiveRecall: React.FC<ActiveRecallProps> = ({ subjects, onClose }) => {
  const [items, setItems] = useState<RecallItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [showOnlyUnmastered, setShowOnlyUnmastered] = useState(false);
  const [revealedCount, setRevealedCount] = useState(0);
  const [masteredCount, setMasteredCount] = useState(0);
  const [sessionStats, setSessionStats] = useState({ total: 0, mastered: 0 });

  // Load recall items
  useEffect(() => {
    const recallItems: RecallItem[] = [];
    
    subjects.forEach(subject => {
      if (selectedSubject !== 'all' && subject.id !== selectedSubject) return;
      
      subject.chapters.forEach(chapter => {
        chapter.flashcards?.forEach((card, idx) => {
          recallItems.push({
            id: `${chapter.id}-${idx}`,
            question: card.front,
            answer: card.back,
            subject: subject.name,
            chapter: chapter.title,
            revealed: false,
            mastered: false
          });
        });
      });
    });
    
    // Load mastery status
    const saved = JSON.parse(localStorage.getItem('7k-active-recall-mastery') || '{}');
    const withMastery = recallItems.map(item => ({
      ...item,
      mastered: saved[item.id] || false
    }));
    
    setItems(withMastery);
    setMasteredCount(withMastery.filter(i => i.mastered).length);
    setCurrentIndex(0);
    setRevealedCount(0);
  }, [subjects, selectedSubject]);

  // Filter items
  const displayItems = showOnlyUnmastered 
    ? items.filter(i => !i.mastered)
    : items;

  const currentItem = displayItems[currentIndex];

  const toggleReveal = () => {
    if (!currentItem) return;
    
    const newRevealed = !currentItem.revealed;
    setItems(prev => prev.map(item => 
      item.id === currentItem.id ? { ...item, revealed: newRevealed } : item
    ));
    
    if (newRevealed) {
      setRevealedCount(prev => prev + 1);
    }
  };

  const toggleMastered = () => {
    if (!currentItem) return;
    
    const newMastered = !currentItem.mastered;
    setItems(prev => prev.map(item => 
      item.id === currentItem.id ? { ...item, mastered: newMastered } : item
    ));
    
    // Save mastery status
    const saved = JSON.parse(localStorage.getItem('7k-active-recall-mastery') || '{}');
    saved[currentItem.id] = newMastered;
    localStorage.setItem('7k-active-recall-mastery', JSON.stringify(saved));
    
    setMasteredCount(prev => newMastered ? prev + 1 : prev - 1);
    setSessionStats(prev => ({
      ...prev,
      total: prev.total + 1,
      mastered: prev.mastered + (newMastered ? 1 : 0)
    }));
    
    // Auto advance
    if (newMastered && currentIndex < displayItems.length - 1) {
      setTimeout(() => goNext(), 300);
    }
  };

  const goNext = () => {
    if (currentIndex < displayItems.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const shuffleItems = () => {
    setItems(prev => {
      const shuffled = [...prev].sort(() => Math.random() - 0.5);
      return shuffled;
    });
    setCurrentIndex(0);
  };

  const resetSession = () => {
    setItems(prev => prev.map(item => ({ ...item, revealed: false })));
    setCurrentIndex(0);
    setRevealedCount(0);
    setSessionStats({ total: 0, mastered: 0 });
  };

  const clearMastery = () => {
    if (window.confirm('Clear all mastery progress? This cannot be undone.')) {
      localStorage.removeItem('7k-active-recall-mastery');
      setItems(prev => prev.map(item => ({ ...item, mastered: false })));
      setMasteredCount(0);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Eye className="w-6 h-6" /> Active Recall
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm opacity-80">
              {displayItems.length > 0 ? `${currentIndex + 1} / ${displayItems.length}` : 'No items'}
            </span>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4" />
                <span className="font-bold">{masteredCount}</span>
                <span className="text-sm opacity-80">mastered</span>
              </span>
            </div>
          </div>
        </div>
        
        {/* Controls */}
        <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={selectedSubject}
              onChange={e => setSelectedSubject(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-sm"
            >
              <option value="all">All Subjects</option>
              {subjects.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
            
            <button
              onClick={() => setShowOnlyUnmastered(!showOnlyUnmastered)}
              className={`px-3 py-2 rounded-lg text-sm flex items-center gap-2 ${
                showOnlyUnmastered 
                  ? 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
              }`}
            >
              <Filter className="w-4 h-4" />
              {showOnlyUnmastered ? 'Unmastered Only' : 'Show All'}
            </button>
            
            <button
              onClick={shuffleItems}
              className="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <Shuffle className="w-4 h-4" /> Shuffle
            </button>
            
            <button
              onClick={resetSession}
              className="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <RotateCcw className="w-4 h-4" /> Reset
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {displayItems.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <Eye className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No items to review</p>
              {showOnlyUnmastered && (
                <p className="text-sm mt-2">All items mastered! 🎉</p>
              )}
            </div>
          ) : currentItem ? (
            <div className="space-y-6">
              {/* Subject/Chapter */}
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">{currentItem.subject}</span>
                <ChevronRight className="w-4 h-4" />
                <span>{currentItem.chapter}</span>
                {currentItem.mastered && (
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" /> Mastered
                  </span>
                )}
              </div>
              
              {/* Question */}
              <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-xl p-6">
                <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-2">Question:</p>
                <p className="text-xl font-medium dark:text-white">{currentItem.question}</p>
              </div>
              
              {/* Answer */}
              <div 
                className={`rounded-xl p-6 transition-all duration-300 cursor-pointer ${
                  currentItem.revealed 
                    ? 'bg-green-50 dark:bg-green-900/20'
                    : 'bg-gray-100 dark:bg-gray-800'
                }`}
                onClick={toggleReveal}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className={`text-sm font-medium ${
                    currentItem.revealed 
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    Answer:
                  </p>
                  {currentItem.revealed ? (
                    <Eye className="w-5 h-5 text-green-500" />
                  ) : (
                    <EyeOff className="w-5 h-5 text-gray-400" />
                  )}
                </div>
                
                {currentItem.revealed ? (
                  <p className="text-lg dark:text-white">{currentItem.answer}</p>
                ) : (
                  <p className="text-lg text-gray-400 dark:text-gray-600 italic">
                    Click to reveal answer...
                  </p>
                )}
              </div>
              
              {/* Mastery Button */}
              {currentItem.revealed && (
                <button
                  onClick={toggleMastered}
                  className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition ${
                    currentItem.mastered
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                      : 'bg-cyan-500 text-white hover:bg-cyan-600'
                  }`}
                >
                  {currentItem.mastered ? (
                    <>
                      <Star className="w-5 h-5 fill-current" /> Mastered!
                    </>
                  ) : (
                    <>
                      <Star className="w-5 h-5" /> Mark as Mastered
                    </>
                  )}
                </button>
              )}
              
              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={goPrev}
                  disabled={currentIndex === 0}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <ChevronLeft className="w-5 h-5" /> Previous
                </button>
                
                <div className="flex items-center gap-2">
                  {displayItems.slice(
                    Math.max(0, currentIndex - 2),
                    Math.min(displayItems.length, currentIndex + 3)
                  ).map((item, idx) => {
                    const actualIndex = Math.max(0, currentIndex - 2) + idx;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setCurrentIndex(actualIndex)}
                        className={`w-8 h-8 rounded-full text-sm font-medium transition ${
                          actualIndex === currentIndex
                            ? 'bg-cyan-500 text-white'
                            : item.mastered
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-600'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                        }`}
                      >
                        {actualIndex + 1}
                      </button>
                    );
                  })}
                </div>
                
                <button
                  onClick={goNext}
                  disabled={currentIndex === displayItems.length - 1}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  Next <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>Progress</span>
                  <span>{masteredCount} / {items.length} mastered</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(masteredCount / items.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Session: {sessionStats.mastered} mastered this session
            </div>
            <button
              onClick={clearMastery}
              className="text-sm text-red-500 hover:text-red-600"
            >
              Clear All Mastery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveRecall;
