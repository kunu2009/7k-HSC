import React, { useState, useEffect, useCallback } from 'react';
import { X, Check, SkipForward, Volume2, Timer, Trophy, Zap, ThumbsUp, ThumbsDown, RotateCcw, Flame } from 'lucide-react';
import { Subject, Flashcard } from '../types';

interface RapidFireProps {
  subjects: Subject[];
  onClose: () => void;
}

interface RapidCard {
  id: string;
  question: string;
  answer: string;
  subject: string;
  chapter: string;
  isTrue: boolean; // For True/False mode
}

type GameMode = 'truefalse' | 'swipe' | 'know';

const RapidFire: React.FC<RapidFireProps> = ({ subjects, onClose }) => {
  const [cards, setCards] = useState<RapidCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [gameMode, setGameMode] = useState<GameMode>('know');
  const [timeLeft, setTimeLeft] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [answered, setAnswered] = useState<'correct' | 'wrong' | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  // Generate cards from flashcards
  useEffect(() => {
    const allCards: RapidCard[] = [];
    
    subjects.forEach(subject => {
      if (selectedSubject !== 'all' && subject.id !== selectedSubject) return;
      
      subject.chapters.forEach(chapter => {
        chapter.flashcards?.forEach((card, idx) => {
          // For true/false mode, create both true and false statements
          allCards.push({
            id: `${chapter.id}-${idx}-true`,
            question: card.front,
            answer: card.back,
            subject: subject.name,
            chapter: chapter.title,
            isTrue: true
          });
          
          // Create false statement by mixing answers
          if (Math.random() > 0.5) {
            const otherCards = chapter.flashcards?.filter((_, i) => i !== idx) || [];
            if (otherCards.length > 0) {
              const randomOther = otherCards[Math.floor(Math.random() * otherCards.length)];
              allCards.push({
                id: `${chapter.id}-${idx}-false`,
                question: card.front,
                answer: randomOther.back, // Wrong answer
                subject: subject.name,
                chapter: chapter.title,
                isTrue: false
              });
            }
          }
        });
      });
    });
    
    // Shuffle
    const shuffled = allCards.sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }, [subjects, selectedSubject]);

  // Timer
  useEffect(() => {
    if (!isPlaying || gameOver) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameOver(true);
          setIsPlaying(false);
          saveStats();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isPlaying, gameOver]);

  // Keyboard controls
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isPlaying || gameOver) return;
    
    if (gameMode === 'truefalse') {
      if (e.key === 'ArrowLeft' || e.key === 'f') handleAnswer(false);
      if (e.key === 'ArrowRight' || e.key === 't') handleAnswer(true);
    } else if (gameMode === 'know') {
      if (e.key === ' ' || e.key === 'Enter') {
        if (!showAnswer) setShowAnswer(true);
      }
      if (e.key === 'ArrowRight' || e.key === 'y') handleKnow(true);
      if (e.key === 'ArrowLeft' || e.key === 'n') handleKnow(false);
    }
    if (e.key === 's') skip();
  }, [isPlaying, gameOver, gameMode, showAnswer, currentIndex]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const startGame = (mode: GameMode) => {
    setGameMode(mode);
    setIsPlaying(true);
    setGameOver(false);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setCurrentIndex(0);
    setTimeLeft(60); // 60 seconds per game
    setShowAnswer(false);
    setTotalAnswered(0);
    setCorrectAnswers(0);
    setCards(prev => [...prev].sort(() => Math.random() - 0.5));
  };

  const handleAnswer = (answer: boolean) => {
    if (gameOver || currentIndex >= cards.length) return;
    
    const currentCard = cards[currentIndex];
    const isCorrect = (gameMode === 'truefalse') 
      ? (answer === currentCard.isTrue)
      : answer;
    
    setTotalAnswered(prev => prev + 1);
    
    if (isCorrect) {
      setScore(prev => prev + (10 + streak * 2));
      setStreak(prev => {
        const newStreak = prev + 1;
        if (newStreak > maxStreak) setMaxStreak(newStreak);
        return newStreak;
      });
      setCorrectAnswers(prev => prev + 1);
      setTimeLeft(prev => Math.min(prev + 2, 120)); // Bonus time
      setAnswered('correct');
    } else {
      setStreak(0);
      setAnswered('wrong');
    }
    
    setTimeout(() => {
      setAnswered(null);
      setShowAnswer(false);
      setCurrentIndex(prev => prev + 1);
      if (currentIndex + 1 >= cards.length) {
        setGameOver(true);
        setIsPlaying(false);
        saveStats();
      }
    }, 500);
  };

  const handleKnow = (knew: boolean) => {
    if (!showAnswer) return;
    handleAnswer(knew);
  };

  const skip = () => {
    setShowAnswer(false);
    setCurrentIndex(prev => prev + 1);
    if (currentIndex + 1 >= cards.length) {
      setGameOver(true);
      setIsPlaying(false);
    }
  };

  const saveStats = () => {
    const stats = JSON.parse(localStorage.getItem('7k-rapidfire-stats') || '{}');
    const today = new Date().toISOString().split('T')[0];
    
    if (!stats[today]) {
      stats[today] = { games: 0, totalScore: 0, bestScore: 0, totalAnswered: 0, correctAnswers: 0 };
    }
    
    stats[today].games += 1;
    stats[today].totalScore += score;
    stats[today].totalAnswered += totalAnswered;
    stats[today].correctAnswers += correctAnswers;
    if (score > stats[today].bestScore) {
      stats[today].bestScore = score;
    }
    
    localStorage.setItem('7k-rapidfire-stats', JSON.stringify(stats));
  };

  const currentCard = cards[currentIndex];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Zap className="w-6 h-6" /> Rapid Fire
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {isPlaying && (
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Trophy className="w-4 h-4" />
                  <span className="font-bold">{score}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Flame className="w-4 h-4" />
                  <span className="font-bold">{streak}x</span>
                </div>
              </div>
              <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${timeLeft <= 10 ? 'bg-red-600 animate-pulse' : 'bg-white/20'}`}>
                <Timer className="w-4 h-4" />
                <span className="font-mono font-bold">{timeLeft}s</span>
              </div>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-6">
          {!isPlaying && !gameOver ? (
            /* Mode Selection */
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 block">
                  Select Subject
                </label>
                <select
                  value={selectedSubject}
                  onChange={e => setSelectedSubject(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                >
                  <option value="all">All Subjects ({cards.length} cards)</option>
                  {subjects.map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-semibold dark:text-white">Choose Game Mode</h3>
                
                <button
                  onClick={() => startGame('know')}
                  className="w-full p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl text-left hover:opacity-90 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <ThumbsUp className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">Know / Don't Know</h4>
                      <p className="text-sm opacity-80">See card, reveal answer, mark if you knew it</p>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => startGame('truefalse')}
                  className="w-full p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl text-left hover:opacity-90 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Check className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">True / False</h4>
                      <p className="text-sm opacity-80">Question + answer shown, judge if correct</p>
                    </div>
                  </div>
                </button>
              </div>
              
              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                <p>⌨️ Use arrow keys or T/F keys to answer quickly!</p>
              </div>
            </div>
          ) : gameOver ? (
            /* Game Over Screen */
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold dark:text-white mb-2">Time's Up!</h3>
              
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                  <p className="text-2xl font-bold text-orange-500">{score}</p>
                  <p className="text-sm text-gray-500">Final Score</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                  <p className="text-2xl font-bold text-red-500">{maxStreak}x</p>
                  <p className="text-sm text-gray-500">Max Streak</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                  <p className="text-2xl font-bold text-green-500">{correctAnswers}</p>
                  <p className="text-sm text-gray-500">Correct</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                  <p className="text-2xl font-bold text-blue-500">
                    {totalAnswered > 0 ? Math.round((correctAnswers / totalAnswered) * 100) : 0}%
                  </p>
                  <p className="text-sm text-gray-500">Accuracy</p>
                </div>
              </div>
              
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => {
                    setGameOver(false);
                    setIsPlaying(false);
                  }}
                  className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-xl font-medium dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Change Mode
                </button>
                <button
                  onClick={() => startGame(gameMode)}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-medium hover:opacity-90 flex items-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" /> Play Again
                </button>
              </div>
            </div>
          ) : currentCard ? (
            /* Game Play */
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>Card {currentIndex + 1} of {cards.length}</span>
                <span>{currentCard.subject} • {currentCard.chapter}</span>
              </div>
              
              {/* Card */}
              <div className={`relative p-6 rounded-2xl min-h-[200px] flex flex-col items-center justify-center text-center transition-all duration-300 ${
                answered === 'correct' ? 'bg-green-100 dark:bg-green-900/30 scale-105' :
                answered === 'wrong' ? 'bg-red-100 dark:bg-red-900/30 scale-95' :
                'bg-gray-100 dark:bg-gray-800'
              }`}>
                {answered && (
                  <div className={`absolute top-4 right-4 ${answered === 'correct' ? 'text-green-500' : 'text-red-500'}`}>
                    {answered === 'correct' ? <Check className="w-8 h-8" /> : <X className="w-8 h-8" />}
                  </div>
                )}
                
                <h3 className="text-lg font-medium dark:text-white mb-4">{currentCard.question}</h3>
                
                {gameMode === 'truefalse' ? (
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-4 w-full">
                    <p className="text-gray-600 dark:text-gray-300">= {currentCard.answer}</p>
                    <p className="text-xs text-gray-400 mt-2">Is this correct?</p>
                  </div>
                ) : (
                  showAnswer ? (
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-4 w-full">
                      <p className="text-gray-600 dark:text-gray-300">{cards[currentIndex]?.answer}</p>
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowAnswer(true)}
                      className="px-6 py-3 bg-white dark:bg-gray-700 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      Tap to reveal answer
                    </button>
                  )
                )}
              </div>
              
              {/* Controls */}
              {gameMode === 'truefalse' ? (
                <div className="flex gap-4">
                  <button
                    onClick={() => handleAnswer(false)}
                    className="flex-1 py-4 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl font-bold text-lg hover:bg-red-200 dark:hover:bg-red-900/50 flex items-center justify-center gap-2"
                  >
                    <ThumbsDown className="w-6 h-6" /> FALSE (F)
                  </button>
                  <button
                    onClick={() => handleAnswer(true)}
                    className="flex-1 py-4 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl font-bold text-lg hover:bg-green-200 dark:hover:bg-green-900/50 flex items-center justify-center gap-2"
                  >
                    TRUE (T) <ThumbsUp className="w-6 h-6" />
                  </button>
                </div>
              ) : showAnswer ? (
                <div className="flex gap-4">
                  <button
                    onClick={() => handleKnow(false)}
                    className="flex-1 py-4 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl font-bold hover:bg-red-200 dark:hover:bg-red-900/50 flex items-center justify-center gap-2"
                  >
                    <ThumbsDown className="w-5 h-5" /> Didn't Know
                  </button>
                  <button
                    onClick={() => handleKnow(true)}
                    className="flex-1 py-4 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl font-bold hover:bg-green-200 dark:hover:bg-green-900/50 flex items-center justify-center gap-2"
                  >
                    Knew It! <ThumbsUp className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <div className="flex justify-center">
                  <button
                    onClick={skip}
                    className="px-6 py-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 flex items-center gap-2"
                  >
                    <SkipForward className="w-5 h-5" /> Skip (S)
                  </button>
                </div>
              )}
              
              {/* Streak indicator */}
              {streak >= 3 && (
                <div className="text-center">
                  <span className="inline-flex items-center gap-1 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-bold animate-pulse">
                    <Flame className="w-4 h-4" /> {streak}x Streak! (+{streak * 2} bonus)
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>No cards available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RapidFire;
