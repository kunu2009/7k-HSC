import React, { useState, useEffect, useCallback } from 'react';
import { Zap, ChevronLeft, ChevronRight, Check, X, RotateCcw, Clock, Target, Brain, Flame, Eye, EyeOff, Volume2, Shuffle } from 'lucide-react';
import { Subject, Chapter, Flashcard } from '../types';

interface SpeedRevisionProps {
  subjects: Subject[];
  onClose: () => void;
}

interface CardData {
  id: string;
  front: string;
  back: string;
  subjectName: string;
  chapterTitle: string;
}

const SpeedRevision: React.FC<SpeedRevisionProps> = ({ subjects, onClose }) => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [reviewed, setReviewed] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [autoAdvance, setAutoAdvance] = useState(false);
  const [autoDelay, setAutoDelay] = useState(3); // seconds
  const [stats, setStats] = useState({ known: 0, unknown: 0 });
  const [shuffled, setShuffled] = useState(false);

  // Load all flashcards
  useEffect(() => {
    const allCards: CardData[] = [];
    
    subjects.forEach(subject => {
      subject.chapters.forEach(chapter => {
        if (chapter.flashcards) {
          chapter.flashcards.forEach((fc, idx) => {
            allCards.push({
              id: `${subject.name}-${chapter.id}-${idx}`,
              front: fc.front,
              back: fc.back,
              subjectName: subject.name,
              chapterTitle: chapter.title,
            });
          });
        }
      });
    });

    // Shuffle cards
    setCards(allCards.sort(() => Math.random() - 0.5));
    setShuffled(true);
  }, [subjects]);

  // Timer
  useEffect(() => {
    if (!isRunning) return;
    
    const timer = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  // Auto-advance when answer is shown
  useEffect(() => {
    if (!autoAdvance || !showAnswer) return;

    const timer = setTimeout(() => {
      handleNext();
    }, autoDelay * 1000);

    return () => clearTimeout(timer);
  }, [autoAdvance, showAnswer, autoDelay]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch(e.key) {
        case ' ':
        case 'Enter':
          if (!showAnswer) setShowAnswer(true);
          else handleNext();
          break;
        case 'ArrowRight':
          handleKnown();
          break;
        case 'ArrowLeft':
          handleUnknown();
          break;
        case 'Escape':
          onClose();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showAnswer]);

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
      setReviewed(prev => prev + 1);
    } else {
      setIsRunning(false);
    }
  };

  const handleKnown = () => {
    setStats(prev => ({ ...prev, known: prev.known + 1 }));
    handleNext();
  };

  const handleUnknown = () => {
    setStats(prev => ({ ...prev, unknown: prev.unknown + 1 }));
    handleNext();
  };

  const reshuffleCards = () => {
    setCards(prev => [...prev].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
    setShowAnswer(false);
    setReviewed(0);
    setTimeElapsed(0);
    setIsRunning(true);
    setStats({ known: 0, unknown: 0 });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const cardsPerMinute = timeElapsed > 0 ? Math.round((reviewed / timeElapsed) * 60) : 0;

  if (cards.length === 0) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center max-w-md">
          <Brain className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h2 className="text-xl font-bold dark:text-white mb-2">No Flashcards Available</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Add flashcards to your chapters to use Speed Revision mode.
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  // Finished Screen
  if (!isRunning && reviewed > 0) {
    const totalTime = formatTime(timeElapsed);
    const knownPercent = Math.round((stats.known / reviewed) * 100);

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full p-6">
          <div className="text-center mb-6 p-6 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
            <Zap className="w-12 h-12 mx-auto mb-2" />
            <div className="text-4xl font-bold mb-1">{reviewed} Cards</div>
            <div className="text-lg opacity-90">Reviewed in {totalTime}</div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="text-center p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <Check className="w-6 h-6 mx-auto mb-1 text-green-500" />
              <div className="font-bold text-green-600 dark:text-green-400">{stats.known}</div>
              <div className="text-xs text-gray-500">Known</div>
            </div>
            <div className="text-center p-3 bg-red-50 dark:bg-red-900/30 rounded-lg">
              <X className="w-6 h-6 mx-auto mb-1 text-red-500" />
              <div className="font-bold text-red-600 dark:text-red-400">{stats.unknown}</div>
              <div className="text-xs text-gray-500">To Review</div>
            </div>
            <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <Flame className="w-6 h-6 mx-auto mb-1 text-blue-500" />
              <div className="font-bold text-blue-600 dark:text-blue-400">{cardsPerMinute}</div>
              <div className="text-xs text-gray-500">Cards/min</div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={reshuffleCards}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl font-medium"
            >
              <RotateCcw className="w-5 h-5" />
              Again
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 font-medium"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentCard = cards[currentIndex];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600 flex flex-col z-50">
      {/* Header */}
      <div className="p-4 flex items-center justify-between text-white">
        <button
          onClick={onClose}
          className="p-2 hover:bg-white/20 rounded-lg"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/20 rounded-lg">
            <Clock className="w-4 h-4" />
            <span className="font-mono">{formatTime(timeElapsed)}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/20 rounded-lg">
            <Target className="w-4 h-4" />
            <span>{currentIndex + 1}/{cards.length}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/20 rounded-lg">
            <Flame className="w-4 h-4" />
            <span>{cardsPerMinute}/min</span>
          </div>
        </div>

        <button
          onClick={reshuffleCards}
          className="p-2 hover:bg-white/20 rounded-lg"
        >
          <Shuffle className="w-6 h-6" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="px-4">
        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Card */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div 
          className="w-full max-w-lg cursor-pointer"
          onClick={() => !showAnswer && setShowAnswer(true)}
        >
          <div className={`relative transition-transform duration-500 transform-style-3d ${showAnswer ? 'rotate-y-180' : ''}`}>
            {/* Front */}
            <div className={`bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl min-h-[300px] flex flex-col ${showAnswer ? 'hidden' : ''}`}>
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                {currentCard.subjectName} • {currentCard.chapterTitle}
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-xl font-semibold text-center dark:text-white">
                  {currentCard.front}
                </p>
              </div>
              <div className="text-center text-gray-400 mt-4 flex items-center justify-center gap-2">
                <Eye className="w-4 h-4" />
                <span className="text-sm">Tap to reveal answer</span>
              </div>
            </div>

            {/* Back */}
            <div className={`bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl min-h-[300px] flex flex-col ${!showAnswer ? 'hidden' : ''}`}>
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                Answer
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-xl text-center dark:text-white">
                  {currentCard.back}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="p-4 pb-8">
        {/* Auto-advance toggle */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <button
            onClick={() => setAutoAdvance(!autoAdvance)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              autoAdvance ? 'bg-white text-orange-600' : 'bg-white/20 text-white'
            }`}
          >
            {autoAdvance ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
            <span className="text-sm font-medium">Auto: {autoAdvance ? `${autoDelay}s` : 'Off'}</span>
          </button>
          {autoAdvance && (
            <div className="flex items-center gap-2">
              {[2, 3, 5].map(delay => (
                <button
                  key={delay}
                  onClick={() => setAutoDelay(delay)}
                  className={`w-8 h-8 rounded-lg text-sm font-medium ${
                    autoDelay === delay ? 'bg-white text-orange-600' : 'bg-white/20 text-white'
                  }`}
                >
                  {delay}s
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Action buttons */}
        {showAnswer ? (
          <div className="flex gap-4 max-w-md mx-auto">
            <button
              onClick={handleUnknown}
              className="flex-1 flex items-center justify-center gap-2 py-4 bg-red-500 text-white rounded-2xl font-semibold text-lg hover:bg-red-600"
            >
              <X className="w-6 h-6" />
              Again
            </button>
            <button
              onClick={handleKnown}
              className="flex-1 flex items-center justify-center gap-2 py-4 bg-green-500 text-white rounded-2xl font-semibold text-lg hover:bg-green-600"
            >
              <Check className="w-6 h-6" />
              Got it
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowAnswer(true)}
            className="w-full max-w-md mx-auto flex items-center justify-center gap-2 py-4 bg-white text-orange-600 rounded-2xl font-semibold text-lg"
          >
            <Eye className="w-6 h-6" />
            Show Answer
          </button>
        )}

        {/* Keyboard hint */}
        <div className="text-center text-white/60 text-sm mt-4">
          Press <kbd className="px-1.5 py-0.5 bg-white/20 rounded">Space</kbd> to reveal, 
          <kbd className="px-1.5 py-0.5 bg-white/20 rounded ml-1">←</kbd> Again, 
          <kbd className="px-1.5 py-0.5 bg-white/20 rounded ml-1">→</kbd> Got it
        </div>
      </div>
    </div>
  );
};

export default SpeedRevision;
