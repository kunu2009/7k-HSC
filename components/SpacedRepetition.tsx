import React, { useState, useEffect, useMemo } from 'react';
import { Brain, Calendar, Clock, ChevronLeft, ChevronRight, ArrowLeft, CheckCircle, XCircle, Star, Flame, Target, RefreshCcw, BookOpen, Filter, RotateCcw } from 'lucide-react';
import { Subject, Flashcard as FlashcardType } from '../types';

interface SpacedRepetitionProps {
  subjects: Subject[];
  onClose?: () => void;
}

interface SRSCard {
  id: string;
  subjectId: string;
  subjectName: string;
  chapterId: string;
  chapterName: string;
  card: FlashcardType;
  // SM-2 Algorithm fields
  easeFactor: number; // >= 1.3
  interval: number; // days
  repetitions: number;
  nextReview: string; // ISO date
  lastReview: string | null;
}

interface ReviewStats {
  totalCards: number;
  dueToday: number;
  learned: number;
  newCards: number;
  averageEase: number;
}

const SpacedRepetition: React.FC<SpacedRepetitionProps> = ({ subjects, onClose }) => {
  const [srsCards, setSrsCards] = useState<SRSCard[]>([]);
  const [currentCard, setCurrentCard] = useState<SRSCard | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionStats, setSessionStats] = useState({ reviewed: 0, correct: 0, again: 0 });
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [view, setView] = useState<'dashboard' | 'review' | 'stats'>('dashboard');
  const [reviewQueue, setReviewQueue] = useState<SRSCard[]>([]);

  // Load SRS data from localStorage
  useEffect(() => {
    const loadSRSData = () => {
      const stored = localStorage.getItem('7k-srs-cards');
      if (stored) {
        setSrsCards(JSON.parse(stored));
      } else {
        // Initialize SRS cards from all flashcards
        initializeSRSCards();
      }
    };
    loadSRSData();
  }, [subjects]);

  // Initialize SRS cards from existing flashcards
  const initializeSRSCards = () => {
    const today = new Date().toISOString().split('T')[0];
    const newCards: SRSCard[] = [];
    
    subjects.forEach(subject => {
      subject.chapters.forEach(chapter => {
        const flashcards = chapter.flashcards || [];
        flashcards.forEach((fc, index) => {
          newCards.push({
            id: `${subject.id}-${chapter.id}-fc-${index}`,
            subjectId: subject.id,
            subjectName: subject.name,
            chapterId: chapter.id,
            chapterName: chapter.title,
            card: fc,
            easeFactor: 2.5, // Starting ease factor
            interval: 0, // Days until next review
            repetitions: 0,
            nextReview: today,
            lastReview: null
          });
        });
      });
    });
    
    setSrsCards(newCards);
    localStorage.setItem('7k-srs-cards', JSON.stringify(newCards));
  };

  // Get cards due for review today
  const dueCards = useMemo(() => {
    const today = new Date().toISOString().split('T')[0];
    return srsCards.filter(card => {
      const matchesSubject = selectedSubject === 'all' || card.subjectId === selectedSubject;
      const isDue = card.nextReview <= today;
      return matchesSubject && isDue;
    });
  }, [srsCards, selectedSubject]);

  // Calculate stats
  const stats: ReviewStats = useMemo(() => {
    const today = new Date().toISOString().split('T')[0];
    const filteredCards = selectedSubject === 'all' 
      ? srsCards 
      : srsCards.filter(c => c.subjectId === selectedSubject);
    
    return {
      totalCards: filteredCards.length,
      dueToday: filteredCards.filter(c => c.nextReview <= today).length,
      learned: filteredCards.filter(c => c.repetitions >= 1).length,
      newCards: filteredCards.filter(c => c.repetitions === 0).length,
      averageEase: filteredCards.length > 0 
        ? filteredCards.reduce((sum, c) => sum + c.easeFactor, 0) / filteredCards.length 
        : 2.5
    };
  }, [srsCards, selectedSubject]);

  // SM-2 Algorithm Implementation
  const calculateNextReview = (card: SRSCard, quality: number): SRSCard => {
    // Quality: 0 = Again, 1 = Hard, 2 = Good, 3 = Easy
    let { easeFactor, interval, repetitions } = card;
    
    if (quality < 1) {
      // Again - reset
      repetitions = 0;
      interval = 0;
    } else {
      if (repetitions === 0) {
        interval = 1; // First review: 1 day
      } else if (repetitions === 1) {
        interval = 3; // Second review: 3 days
      } else {
        interval = Math.round(interval * easeFactor);
      }
      repetitions += 1;
    }
    
    // Update ease factor
    easeFactor = Math.max(1.3, easeFactor + (0.1 - (3 - quality) * (0.08 + (3 - quality) * 0.02)));
    
    // Calculate next review date
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + interval);
    
    return {
      ...card,
      easeFactor,
      interval,
      repetitions,
      nextReview: nextDate.toISOString().split('T')[0],
      lastReview: new Date().toISOString().split('T')[0]
    };
  };

  // Start review session
  const startReview = () => {
    if (dueCards.length === 0) return;
    
    // Shuffle and take up to 20 cards
    const shuffled = [...dueCards].sort(() => Math.random() - 0.5).slice(0, 20);
    setReviewQueue(shuffled);
    setCurrentIndex(0);
    setCurrentCard(shuffled[0]);
    setShowAnswer(false);
    setSessionStats({ reviewed: 0, correct: 0, again: 0 });
    setView('review');
  };

  // Handle answer quality
  const handleAnswer = (quality: number) => {
    if (!currentCard) return;
    
    const updatedCard = calculateNextReview(currentCard, quality);
    
    // Update cards
    const newCards = srsCards.map(c => c.id === currentCard.id ? updatedCard : c);
    setSrsCards(newCards);
    localStorage.setItem('7k-srs-cards', JSON.stringify(newCards));
    
    // Update session stats
    setSessionStats(prev => ({
      reviewed: prev.reviewed + 1,
      correct: quality >= 2 ? prev.correct + 1 : prev.correct,
      again: quality < 1 ? prev.again + 1 : prev.again
    }));
    
    // Move to next card
    if (currentIndex < reviewQueue.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setCurrentCard(reviewQueue[currentIndex + 1]);
      setShowAnswer(false);
    } else {
      setView('stats');
    }
  };

  // Reset all progress
  const resetProgress = () => {
    if (confirm('Reset all SRS progress? This will set all cards back to "new".')) {
      initializeSRSCards();
    }
  };

  // Render dashboard view
  const renderDashboard = () => (
    <div className="space-y-4">
      {/* Subject Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <button
          onClick={() => setSelectedSubject('all')}
          className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition ${
            selectedSubject === 'all'
              ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}
        >
          All Subjects
        </button>
        {subjects.map(sub => (
          <button
            key={sub.id}
            onClick={() => setSelectedSubject(sub.id)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition ${
              selectedSubject === sub.id
                ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            {sub.name}
          </button>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-3 text-white">
          <div className="flex items-center gap-2 mb-1">
            <Target className="w-4 h-4" />
            <span className="text-xs opacity-90">Due Today</span>
          </div>
          <div className="text-2xl font-bold">{stats.dueToday}</div>
          <div className="text-xs opacity-75">cards to review</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-3 text-white">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle className="w-4 h-4" />
            <span className="text-xs opacity-90">Learned</span>
          </div>
          <div className="text-2xl font-bold">{stats.learned}</div>
          <div className="text-xs opacity-75">of {stats.totalCards}</div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-3 text-white">
          <div className="flex items-center gap-2 mb-1">
            <Star className="w-4 h-4" />
            <span className="text-xs opacity-90">New Cards</span>
          </div>
          <div className="text-2xl font-bold">{stats.newCards}</div>
          <div className="text-xs opacity-75">not yet seen</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl p-3 text-white">
          <div className="flex items-center gap-2 mb-1">
            <Brain className="w-4 h-4" />
            <span className="text-xs opacity-90">Avg Ease</span>
          </div>
          <div className="text-2xl font-bold">{stats.averageEase.toFixed(1)}</div>
          <div className="text-xs opacity-75">factor</div>
        </div>
      </div>

      {/* Start Button */}
      <button
        onClick={startReview}
        disabled={stats.dueToday === 0}
        className={`w-full py-4 rounded-xl font-semibold text-lg transition active:scale-95 ${
          stats.dueToday > 0
            ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
        }`}
      >
        {stats.dueToday > 0 
          ? `🧠 Start Review (${Math.min(stats.dueToday, 20)} cards)` 
          : '✅ All caught up!'}
      </button>

      {/* Schedule Preview */}
      <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-3">
        <h3 className="text-sm font-semibold dark:text-white mb-2 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-blue-500" />
          Upcoming Reviews
        </h3>
        <div className="space-y-1 text-sm">
          {[0, 1, 2, 3, 7].map(days => {
            const date = new Date();
            date.setDate(date.getDate() + days);
            const dateStr = date.toISOString().split('T')[0];
            const count = srsCards.filter(c => 
              c.nextReview === dateStr && 
              (selectedSubject === 'all' || c.subjectId === selectedSubject)
            ).length;
            
            return (
              <div key={days} className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>{days === 0 ? 'Today' : days === 1 ? 'Tomorrow' : `In ${days} days`}</span>
                <span className="font-medium">{count} cards</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reset Button */}
      <button
        onClick={resetProgress}
        className="w-full py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition flex items-center justify-center gap-2"
      >
        <RotateCcw className="w-4 h-4" />
        Reset All Progress
      </button>
    </div>
  );

  // Render review view
  const renderReview = () => {
    if (!currentCard) return null;
    
    return (
      <div className="space-y-4">
        {/* Progress */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all"
              style={{ width: `${((currentIndex + 1) / reviewQueue.length) * 100}%` }}
            />
          </div>
          <span className="text-sm text-gray-500">{currentIndex + 1}/{reviewQueue.length}</span>
        </div>

        {/* Card Info */}
        <div className="text-center text-xs text-gray-500 dark:text-gray-400">
          {currentCard.subjectName} • {currentCard.chapterName}
        </div>

        {/* Flashcard */}
        <div 
          className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 min-h-[200px] flex flex-col items-center justify-center text-center"
          onClick={() => setShowAnswer(true)}
        >
          <div className="text-lg font-medium dark:text-white mb-4">
            {currentCard.card.front}
          </div>
          
          {showAnswer ? (
            <>
              <div className="w-full h-px bg-gray-200 dark:bg-gray-600 my-4" />
              <div className="text-gray-700 dark:text-gray-300">
                {currentCard.card.back}
              </div>
            </>
          ) : (
            <button className="text-purple-500 text-sm font-medium mt-4">
              Tap to show answer
            </button>
          )}
        </div>

        {/* Answer Buttons */}
        {showAnswer && (
          <div className="grid grid-cols-4 gap-2">
            <button
              onClick={() => handleAnswer(0)}
              className="py-3 rounded-xl bg-red-500 text-white font-medium active:scale-95 transition"
            >
              <XCircle className="w-5 h-5 mx-auto mb-1" />
              <span className="text-xs">Again</span>
            </button>
            <button
              onClick={() => handleAnswer(1)}
              className="py-3 rounded-xl bg-orange-500 text-white font-medium active:scale-95 transition"
            >
              <span className="text-lg mb-1">😬</span>
              <span className="text-xs block">Hard</span>
            </button>
            <button
              onClick={() => handleAnswer(2)}
              className="py-3 rounded-xl bg-green-500 text-white font-medium active:scale-95 transition"
            >
              <CheckCircle className="w-5 h-5 mx-auto mb-1" />
              <span className="text-xs">Good</span>
            </button>
            <button
              onClick={() => handleAnswer(3)}
              className="py-3 rounded-xl bg-blue-500 text-white font-medium active:scale-95 transition"
            >
              <Star className="w-5 h-5 mx-auto mb-1" />
              <span className="text-xs">Easy</span>
            </button>
          </div>
        )}

        {/* Skip to end */}
        <button
          onClick={() => setView('dashboard')}
          className="w-full py-2 text-sm text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
        >
          End Session
        </button>
      </div>
    );
  };

  // Render stats view
  const renderStats = () => (
    <div className="space-y-4 text-center">
      <div className="py-6">
        <div className="text-5xl mb-2">🎉</div>
        <h3 className="text-xl font-bold dark:text-white mb-1">Session Complete!</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Great job reviewing your cards</p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3">
          <div className="text-2xl font-bold text-purple-500">{sessionStats.reviewed}</div>
          <div className="text-xs text-gray-500">Reviewed</div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3">
          <div className="text-2xl font-bold text-green-500">{sessionStats.correct}</div>
          <div className="text-xs text-gray-500">Correct</div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3">
          <div className="text-2xl font-bold text-red-500">{sessionStats.again}</div>
          <div className="text-xs text-gray-500">Again</div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-xl p-4">
        <p className="text-sm dark:text-white">
          {sessionStats.correct === sessionStats.reviewed && sessionStats.reviewed > 0 && "🏆 Perfect score! You're mastering this!"}
          {sessionStats.correct / sessionStats.reviewed >= 0.8 && sessionStats.correct !== sessionStats.reviewed && "💪 Great job! Keep it up!"}
          {sessionStats.correct / sessionStats.reviewed >= 0.5 && sessionStats.correct / sessionStats.reviewed < 0.8 && "📚 Good effort! Practice makes perfect!"}
          {sessionStats.correct / sessionStats.reviewed < 0.5 && "🔄 Keep reviewing - you'll get there!"}
        </p>
      </div>

      <button
        onClick={() => setView('dashboard')}
        className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold active:scale-95 transition"
      >
        Back to Dashboard
      </button>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 border-b border-gray-100 dark:border-gray-700 flex items-center gap-3">
          {onClose && (
            <button onClick={onClose} className="p-2 -ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 active:scale-95 transition">
              <ArrowLeft className="w-5 h-5 dark:text-white" />
            </button>
          )}
          <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold dark:text-white">Spaced Repetition</h2>
            <p className="text-xs text-gray-500">SM-2 Algorithm</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {view === 'dashboard' && renderDashboard()}
          {view === 'review' && renderReview()}
          {view === 'stats' && renderStats()}
        </div>
      </div>
    </div>
  );
};

export default SpacedRepetition;
