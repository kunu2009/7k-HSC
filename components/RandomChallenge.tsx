import React, { useState, useEffect } from 'react';
import { Shuffle, X, RefreshCw, CheckCircle, XCircle, Clock, Award, Brain, Sparkles } from 'lucide-react';
import { Subject, Chapter, Question, Flashcard } from '../types';

interface RandomChallengeProps {
  subjects: Subject[];
  onClose: () => void;
}

interface ChallengeQuestion {
  subject: string;
  chapter: string;
  type: 'flashcard' | 'mcq' | 'fill-blank' | 'true-false';
  question: string;
  answer: string;
  options?: string[];
  correctIndex?: number;
}

const RandomChallenge: React.FC<RandomChallengeProps> = ({ subjects, onClose }) => {
  const [mode, setMode] = useState<'setup' | 'playing' | 'result'>('setup');
  const [questionCount, setQuestionCount] = useState<5 | 10 | 15 | 20>(10);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  const [questions, setQuestions] = useState<ChallengeQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [timeLimit, setTimeLimit] = useState(30);
  const [timeLeft, setTimeLeft] = useState(30);
  const [totalTime, setTotalTime] = useState(0);

  // Timer
  useEffect(() => {
    if (mode !== 'playing' || showResult) return;
    
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleTimeout();
          return difficulty === 'hard' ? 15 : difficulty === 'medium' ? 30 : 45;
        }
        return prev - 1;
      });
      setTotalTime(prev => prev + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [mode, showResult, difficulty]);

  const generateQuestions = (): ChallengeQuestion[] => {
    const allQuestions: ChallengeQuestion[] = [];
    
    subjects.forEach(subject => {
      subject.chapters.forEach(chapter => {
        // Add MCQs
        chapter.mcqs?.forEach(mcq => {
          allQuestions.push({
            subject: subject.name,
            chapter: chapter.title,
            type: 'mcq',
            question: mcq.question,
            answer: mcq.options[mcq.correctAnswer],
            options: mcq.options,
            correctIndex: mcq.correctAnswer
          });
        });
        
        // Add Flashcards as different question types
        chapter.flashcards?.forEach(fc => {
          // Regular flashcard
          allQuestions.push({
            subject: subject.name,
            chapter: chapter.title,
            type: 'flashcard',
            question: fc.front,
            answer: fc.back
          });
          
          // Fill in the blank (if answer is short)
          if (fc.back.length < 50) {
            allQuestions.push({
              subject: subject.name,
              chapter: chapter.title,
              type: 'fill-blank',
              question: `Complete: ${fc.front} = ____`,
              answer: fc.back
            });
          }
          
          // True/False
          allQuestions.push({
            subject: subject.name,
            chapter: chapter.title,
            type: 'true-false',
            question: `True or False: ${fc.front} - ${fc.back}`,
            answer: 'True',
            options: ['True', 'False'],
            correctIndex: 0
          });
        });
      });
    });
    
    // Shuffle and select
    const shuffled = allQuestions.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, questionCount);
  };

  const startChallenge = () => {
    const generated = generateQuestions();
    if (generated.length === 0) {
      alert('No questions available. Please ensure subjects have content.');
      return;
    }
    setQuestions(generated);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setTotalTime(0);
    setTimeLeft(difficulty === 'hard' ? 15 : difficulty === 'medium' ? 30 : 45);
    setTimeLimit(difficulty === 'hard' ? 15 : difficulty === 'medium' ? 30 : 45);
    setSelectedAnswer(null);
    setShowResult(false);
    setMode('playing');
  };

  const handleTimeout = () => {
    setShowResult(true);
    setStreak(0);
    setTimeout(moveToNext, 1500);
  };

  const handleAnswer = (answer: string | number) => {
    if (showResult) return;
    
    setSelectedAnswer(answer);
    setShowResult(true);
    
    const currentQ = questions[currentIndex];
    let isCorrect = false;
    
    if (currentQ.type === 'mcq' || currentQ.type === 'true-false') {
      isCorrect = answer === currentQ.correctIndex;
    } else {
      isCorrect = (answer as string).toLowerCase().trim() === currentQ.answer.toLowerCase().trim();
    }
    
    if (isCorrect) {
      setScore(prev => prev + 1);
      setStreak(prev => {
        const newStreak = prev + 1;
        setMaxStreak(curr => Math.max(curr, newStreak));
        return newStreak;
      });
    } else {
      setStreak(0);
    }
    
    setTimeout(moveToNext, 1500);
  };

  const moveToNext = () => {
    setShowResult(false);
    setSelectedAnswer(null);
    setTimeLeft(timeLimit);
    
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setMode('result');
    }
  };

  const currentQuestion = questions[currentIndex];
  const percentage = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
                <Shuffle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold dark:text-white">Daily Challenge</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Random mixed questions
                </p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Setup Mode */}
        {mode === 'setup' && (
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="space-y-6">
              {/* Question Count */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Number of Questions
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {([5, 10, 15, 20] as const).map(count => (
                    <button
                      key={count}
                      onClick={() => setQuestionCount(count)}
                      className={`p-4 rounded-xl border-2 transition ${
                        questionCount === count
                          ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">{count}</div>
                      <div className="text-xs text-gray-500">questions</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Difficulty Level
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(['easy', 'medium', 'hard'] as const).map(level => (
                    <button
                      key={level}
                      onClick={() => setDifficulty(level)}
                      className={`p-4 rounded-xl border-2 transition ${
                        difficulty === level
                          ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-lg font-bold capitalize text-pink-600 dark:text-pink-400">
                        {level}
                      </div>
                      <div className="text-xs text-gray-500">
                        {level === 'easy' ? '45s/question' : level === 'medium' ? '30s/question' : '15s/question'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Start Button */}
              <button
                onClick={startChallenge}
                className="w-full py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-bold text-lg hover:from-pink-600 hover:to-rose-600 transition flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Start Challenge
              </button>

              {/* Info */}
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                <h4 className="font-medium text-purple-800 dark:text-purple-300 mb-2">🎯 Challenge Mode</h4>
                <ul className="text-sm text-purple-700 dark:text-purple-400 space-y-1">
                  <li>• Mixed questions from all subjects</li>
                  <li>• MCQs, flashcards, fill-blanks & true/false</li>
                  <li>• Build streaks for bonus motivation</li>
                  <li>• Time pressure based on difficulty</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Playing Mode */}
        {mode === 'playing' && currentQuestion && (
          <div className="flex-1 flex flex-col">
            {/* Progress */}
            <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700/50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium dark:text-white">
                    Q{currentIndex + 1}/{questions.length}
                  </span>
                  <span className="text-sm text-gray-500">Score: {score}</span>
                  {streak > 0 && (
                    <span className="px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-xs font-medium">
                      🔥 {streak} streak
                    </span>
                  )}
                </div>
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                  timeLeft <= 10 ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' : 'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                }`}>
                  <Clock className="w-4 h-4" />
                  <span className="font-mono font-bold">{timeLeft}s</span>
                </div>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full transition-all"
                  style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Info */}
            <div className="px-6 py-2 flex items-center gap-2 text-sm">
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                currentQuestion.type === 'mcq' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' :
                currentQuestion.type === 'flashcard' ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400' :
                currentQuestion.type === 'fill-blank' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' :
                'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'
              }`}>
                {currentQuestion.type === 'mcq' ? 'MCQ' : 
                 currentQuestion.type === 'flashcard' ? 'Flashcard' :
                 currentQuestion.type === 'fill-blank' ? 'Fill Blank' : 'True/False'}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                {currentQuestion.subject} • {currentQuestion.chapter}
              </span>
            </div>

            {/* Question */}
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl mb-4">
                <p className="text-lg dark:text-white">{currentQuestion.question}</p>
              </div>

              {/* Answer Options */}
              {(currentQuestion.type === 'mcq' || currentQuestion.type === 'true-false') && currentQuestion.options && (
                <div className="space-y-2">
                  {currentQuestion.options.map((opt, idx) => {
                    const isSelected = selectedAnswer === idx;
                    const isCorrect = idx === currentQuestion.correctIndex;
                    
                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(idx)}
                        disabled={showResult}
                        className={`w-full p-4 rounded-xl border-2 text-left transition flex items-center justify-between ${
                          showResult
                            ? isCorrect
                              ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                              : isSelected
                                ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                                : 'border-gray-200 dark:border-gray-700'
                            : 'border-gray-200 dark:border-gray-700 hover:border-pink-300 dark:hover:border-pink-700'
                        }`}
                      >
                        <span className="dark:text-white">
                          {String.fromCharCode(65 + idx)}. {opt}
                        </span>
                        {showResult && isCorrect && <CheckCircle className="w-5 h-5 text-green-500" />}
                        {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500" />}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Flashcard - Show Answer */}
              {currentQuestion.type === 'flashcard' && (
                <div className="space-y-4">
                  {!showResult ? (
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => handleAnswer('correct')}
                        className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl font-medium hover:bg-green-200 dark:hover:bg-green-900/50 transition flex items-center justify-center gap-2"
                      >
                        <CheckCircle className="w-5 h-5" />
                        I Know This
                      </button>
                      <button
                        onClick={() => handleAnswer('wrong')}
                        className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-xl font-medium hover:bg-red-200 dark:hover:bg-red-900/50 transition flex items-center justify-center gap-2"
                      >
                        <XCircle className="w-5 h-5" />
                        Don't Know
                      </button>
                    </div>
                  ) : (
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
                      <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">Answer:</span>
                      <p className="text-lg dark:text-white mt-1">{currentQuestion.answer}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Fill Blank - Text Input */}
              {currentQuestion.type === 'fill-blank' && !showResult && (
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Type your answer..."
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-xl text-lg dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleAnswer((e.target as HTMLInputElement).value);
                      }
                    }}
                  />
                  <button
                    onClick={() => {
                      const input = document.querySelector('input') as HTMLInputElement;
                      handleAnswer(input?.value || '');
                    }}
                    className="w-full py-3 bg-pink-500 text-white rounded-xl font-medium hover:bg-pink-600 transition"
                  >
                    Submit Answer
                  </button>
                </div>
              )}

              {currentQuestion.type === 'fill-blank' && showResult && (
                <div className={`p-4 rounded-xl border-2 ${
                  selectedAnswer?.toString().toLowerCase().trim() === currentQuestion.answer.toLowerCase().trim()
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                    : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                }`}>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Correct Answer:</p>
                  <p className="text-lg font-medium dark:text-white">{currentQuestion.answer}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Result Mode */}
        {mode === 'result' && (
          <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 ${
              percentage >= 80 ? 'bg-gradient-to-br from-green-400 to-emerald-500' :
              percentage >= 60 ? 'bg-gradient-to-br from-yellow-400 to-amber-500' :
              'bg-gradient-to-br from-red-400 to-rose-500'
            }`}>
              <Award className="w-12 h-12 text-white" />
            </div>
            
            <h3 className="text-3xl font-bold dark:text-white mb-2">{score}/{questions.length}</h3>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-2">
              {percentage >= 80 ? 'Excellent! 🎉' :
               percentage >= 60 ? 'Good Job! 👍' :
               'Keep Practicing! 💪'}
            </p>
            
            <div className="grid grid-cols-3 gap-4 w-full max-w-sm mt-4 mb-6">
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{percentage}%</div>
                <div className="text-xs text-gray-500">Accuracy</div>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{maxStreak}</div>
                <div className="text-xs text-gray-500">Max Streak</div>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {Math.floor(totalTime / 60)}:{(totalTime % 60).toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-500">Time</div>
              </div>
            </div>

            <div className="w-full max-w-sm space-y-3">
              <button
                onClick={startChallenge}
                className="w-full py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-medium hover:from-pink-600 hover:to-rose-600 transition flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </button>
              <button
                onClick={() => setMode('setup')}
                className="w-full py-3 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              >
                Change Settings
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomChallenge;
