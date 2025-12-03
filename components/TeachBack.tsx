import React, { useState, useEffect, useCallback } from 'react';
import { X, Mic, MicOff, Volume2, Check, RotateCcw, Brain, MessageSquare, ChevronRight, Lightbulb, Trophy } from 'lucide-react';
import { Subject, Flashcard } from '../types';

interface TeachBackProps {
  subjects: Subject[];
  onClose: () => void;
}

interface TeachBackCard {
  id: string;
  topic: string;
  keyPoints: string[];
  fullContent: string;
  subject: string;
  chapter: string;
}

const RUBRIC = [
  { label: 'Mentioned topic name', points: 1 },
  { label: 'Explained core concept', points: 2 },
  { label: 'Included key details', points: 2 },
  { label: 'Used examples', points: 2 },
  { label: 'Clear explanation', points: 3 },
];

const TeachBack: React.FC<TeachBackProps> = ({ subjects, onClose }) => {
  const [cards, setCards] = useState<TeachBackCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<'prepare' | 'teach' | 'review'>('prepare');
  const [userExplanation, setUserExplanation] = useState('');
  const [selfScore, setSelfScore] = useState<number[]>([]);
  const [totalScore, setTotalScore] = useState(0);
  const [completedCards, setCompletedCards] = useState(0);
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [showKeyPoints, setShowKeyPoints] = useState(false);
  const [prepTime, setPrepTime] = useState(30);
  const [isPreparing, setIsPreparing] = useState(false);

  // Generate teach-back cards from flashcards
  useEffect(() => {
    const teachCards: TeachBackCard[] = [];
    
    subjects.forEach(subject => {
      if (selectedSubject !== 'all' && subject.id !== selectedSubject) return;
      
      subject.chapters.forEach(chapter => {
        // Group flashcards by category/topic if possible
        const grouped: Record<string, Flashcard[]> = {};
        
        chapter.flashcards?.forEach(card => {
          const category = card.category || 'General';
          if (!grouped[category]) grouped[category] = [];
          grouped[category].push(card);
        });
        
        // Create teach-back card for each group
        Object.entries(grouped).forEach(([category, cards]) => {
          if (cards.length >= 1) {
            teachCards.push({
              id: `${chapter.id}-${category}`,
              topic: cards[0].front,
              keyPoints: cards.map(c => c.back),
              fullContent: cards.map(c => `${c.front}: ${c.back}`).join('\n'),
              subject: subject.name,
              chapter: chapter.title
            });
          }
        });
      });
    });
    
    // Shuffle
    const shuffled = teachCards.sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }, [subjects, selectedSubject]);

  // Prep timer
  useEffect(() => {
    if (!isPreparing || prepTime <= 0) return;
    
    const timer = setInterval(() => {
      setPrepTime(prev => {
        if (prev <= 1) {
          setIsPreparing(false);
          setPhase('teach');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isPreparing, prepTime]);

  const startPrep = () => {
    setIsPreparing(true);
    setPrepTime(30);
    setShowKeyPoints(true);
  };

  const skipToTeach = () => {
    setIsPreparing(false);
    setPhase('teach');
  };

  const submitExplanation = () => {
    setPhase('review');
    setSelfScore(RUBRIC.map(() => 0));
  };

  const updateScore = (index: number, checked: boolean) => {
    setSelfScore(prev => {
      const newScore = [...prev];
      newScore[index] = checked ? RUBRIC[index].points : 0;
      return newScore;
    });
  };

  const finishReview = () => {
    const cardScore = selfScore.reduce((a, b) => a + b, 0);
    setTotalScore(prev => prev + cardScore);
    setCompletedCards(prev => prev + 1);
    
    // Save progress
    const progress = JSON.parse(localStorage.getItem('7k-teachback-progress') || '{}');
    const today = new Date().toISOString().split('T')[0];
    if (!progress[today]) {
      progress[today] = { cards: 0, totalScore: 0 };
    }
    progress[today].cards += 1;
    progress[today].totalScore += cardScore;
    localStorage.setItem('7k-teachback-progress', JSON.stringify(progress));
    
    // Next card
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setPhase('prepare');
      setUserExplanation('');
      setSelfScore([]);
      setShowKeyPoints(false);
      setPrepTime(30);
    } else {
      setPhase('prepare'); // Will show completion
    }
  };

  const currentCard = cards[currentIndex];
  const isCompleted = completedCards >= cards.length && cards.length > 0;
  const maxPossibleScore = RUBRIC.reduce((a, b) => a + b.points, 0);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-4 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Brain className="w-6 h-6" /> Teach-Back Method
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {!isCompleted && cards.length > 0 && (
            <div className="mt-3 flex items-center justify-between">
              <span className="text-sm opacity-80">
                Card {currentIndex + 1} of {cards.length}
              </span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Trophy className="w-4 h-4" />
                  <span className="font-bold">{totalScore}</span>
                </span>
                <span className="text-sm opacity-80">
                  {completedCards} completed
                </span>
              </div>
            </div>
          )}
        </div>
        
        {/* Subject Filter */}
        {phase === 'prepare' && !isPreparing && !isCompleted && (
          <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4">
              <label className="text-sm text-gray-600 dark:text-gray-400">Subject:</label>
              <select
                value={selectedSubject}
                onChange={e => {
                  setSelectedSubject(e.target.value);
                  setCurrentIndex(0);
                  setCompletedCards(0);
                  setTotalScore(0);
                }}
                className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-sm"
              >
                <option value="all">All Subjects</option>
                {subjects.map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>
          </div>
        )}
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {cards.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <Brain className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No content available</p>
              <p className="text-sm mt-2">Add flashcards to practice the teach-back method</p>
            </div>
          ) : isCompleted ? (
            /* Completion Screen */
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold dark:text-white mb-2">Great Teaching!</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                You've explained all the concepts
              </p>
              
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mb-6">
                <p className="text-3xl font-bold text-emerald-500">{totalScore} / {completedCards * maxPossibleScore}</p>
                <p className="text-gray-500 text-sm">Total Score</p>
                <p className="text-lg mt-2 dark:text-white">
                  Average: {Math.round(totalScore / completedCards)}/{maxPossibleScore} per topic
                </p>
              </div>
              
              <button
                onClick={() => {
                  setCurrentIndex(0);
                  setCompletedCards(0);
                  setTotalScore(0);
                  setPhase('prepare');
                  setCards(prev => [...prev].sort(() => Math.random() - 0.5));
                }}
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-medium hover:opacity-90 flex items-center gap-2 mx-auto"
              >
                <RotateCcw className="w-5 h-5" /> Practice Again
              </button>
            </div>
          ) : currentCard && phase === 'prepare' ? (
            /* Prepare Phase */
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-bold dark:text-white mb-2">📚 Prepare to Teach</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Study this topic, then explain it in your own words
                </p>
              </div>
              
              {/* Topic Card */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{currentCard.subject}</span>
                  <ChevronRight className="w-4 h-4" />
                  <span>{currentCard.chapter}</span>
                </div>
                
                <h4 className="text-2xl font-bold dark:text-white mb-4">{currentCard.topic}</h4>
                
                {showKeyPoints && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-amber-500" /> Key Points:
                    </p>
                    <ul className="space-y-2">
                      {currentCard.keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                          <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {idx + 1}
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              {/* Timer */}
              {isPreparing && (
                <div className="text-center">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl">
                    <div className="w-12 h-12 rounded-full border-4 border-emerald-500 flex items-center justify-center">
                      <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{prepTime}</span>
                    </div>
                    <span className="text-emerald-600 dark:text-emerald-400">seconds to prepare</span>
                  </div>
                </div>
              )}
              
              {/* Actions */}
              <div className="flex gap-3">
                {!isPreparing ? (
                  <>
                    <button
                      onClick={startPrep}
                      className="flex-1 py-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl font-medium hover:bg-emerald-200 dark:hover:bg-emerald-900/50 flex items-center justify-center gap-2"
                    >
                      <Lightbulb className="w-5 h-5" /> Show & Study (30s)
                    </button>
                    <button
                      onClick={() => setPhase('teach')}
                      className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-medium hover:opacity-90 flex items-center justify-center gap-2"
                    >
                      I'm Ready <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                ) : (
                  <button
                    onClick={skipToTeach}
                    className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-medium hover:opacity-90"
                  >
                    Skip to Teaching
                  </button>
                )}
              </div>
            </div>
          ) : currentCard && phase === 'teach' ? (
            /* Teach Phase */
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-bold dark:text-white mb-2">🎓 Teach It!</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Explain <strong>"{currentCard.topic}"</strong> as if teaching someone
                </p>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">Your explanation</span>
                </div>
                <textarea
                  value={userExplanation}
                  onChange={e => setUserExplanation(e.target.value)}
                  placeholder="Type your explanation here... 

Tips:
• Start with what it is
• Explain why it's important
• Give an example if you can
• Use simple language"
                  className="w-full h-48 p-4 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  autoFocus
                />
              </div>
              
              <button
                onClick={submitExplanation}
                disabled={userExplanation.trim().length < 20}
                className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Check className="w-5 h-5" /> Done Explaining
              </button>
              
              <p className="text-center text-sm text-gray-400">
                Write at least 20 characters
              </p>
            </div>
          ) : currentCard && phase === 'review' ? (
            /* Review Phase */
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-bold dark:text-white mb-2">📝 Self-Review</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Compare your explanation with the key points
                </p>
              </div>
              
              {/* Your explanation */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">Your Explanation:</p>
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{userExplanation}</p>
              </div>
              
              {/* Key Points */}
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4">
                <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-2">Key Points:</p>
                <ul className="space-y-1">
                  {currentCard.keyPoints.map((point, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-emerald-500">•</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Self-scoring rubric */}
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                <p className="font-medium dark:text-white mb-3">Rate your explanation:</p>
                <div className="space-y-3">
                  {RUBRIC.map((item, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selfScore[idx] > 0}
                        onChange={e => updateScore(idx, e.target.checked)}
                        className="w-5 h-5 rounded text-emerald-500 focus:ring-emerald-500"
                      />
                      <span className="flex-1 text-gray-700 dark:text-gray-300">{item.label}</span>
                      <span className={`px-2 py-0.5 rounded text-sm ${
                        selfScore[idx] > 0 
                          ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                      }`}>
                        +{item.points}
                      </span>
                    </label>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                  <span className="font-medium dark:text-white">Score for this topic:</span>
                  <span className="text-2xl font-bold text-emerald-500">
                    {selfScore.reduce((a, b) => a + b, 0)} / {maxPossibleScore}
                  </span>
                </div>
              </div>
              
              <button
                onClick={finishReview}
                className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-medium hover:opacity-90 flex items-center justify-center gap-2"
              >
                {currentIndex < cards.length - 1 ? 'Next Topic' : 'Finish'} <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TeachBack;
