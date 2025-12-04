import React, { useState, useEffect, useMemo } from 'react';
import { X, Zap, Clock, CheckCircle, XCircle, RotateCcw, Trophy, Target, ArrowRight, Brain, Flame, ChevronRight, Shuffle, Filter, SkipForward } from 'lucide-react';
import { Subject, Chapter, Question } from '../types';

interface QuickTestProps {
  subjects: Subject[];
  onComplete?: (score: number, total: number, wrongQuestions: Question[]) => void;
  onClose: () => void;
}

const QuickTest: React.FC<QuickTestProps> = ({ subjects, onComplete, onClose }) => {
  const [questions, setQuestions] = useState<(Question & { subjectName: string; chapterTitle: string })[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState<Question[]>([]);
  const [timeLeft, setTimeLeft] = useState(300);
  const [isFinished, setIsFinished] = useState(false);
  const [streak, setStreak] = useState(0);
  const [questionCount, setQuestionCount] = useState(10);
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [showSettings, setShowSettings] = useState(true);
  const [answeredIds, setAnsweredIds] = useState<Set<string>>(new Set());

  // Load answered question IDs from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('7k-answered-questions');
    if (saved) {
      try {
        setAnsweredIds(new Set(JSON.parse(saved)));
      } catch (e) {
        setAnsweredIds(new Set());
      }
    }
  }, []);

  // Save answered IDs to localStorage
  const saveAnsweredIds = (ids: Set<string>) => {
    localStorage.setItem('7k-answered-questions', JSON.stringify(Array.from(ids)));
  };

  // Fisher-Yates shuffle for better randomness
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Generate random questions, excluding already answered ones
  const generateQuestions = (count: number, subjectFilter: string) => {
    const allQuestions: (Question & { subjectName: string; chapterTitle: string })[] = [];
    
    subjects.forEach(subject => {
      if (subjectFilter !== 'all' && subject.id !== subjectFilter) return;
      
      subject.chapters.forEach(chapter => {
        if (chapter.mcqs) {
          chapter.mcqs.forEach(mcq => {
            allQuestions.push({
              ...mcq,
              subjectName: subject.name,
              chapterTitle: chapter.title,
            });
          });
        }
      });
    });

    // Filter out already answered questions
    let unansweredQuestions = allQuestions.filter(q => !answeredIds.has(q.id));
    
    // If not enough unanswered questions, reset history for this filter and use all
    if (unansweredQuestions.length < count) {
      const newAnsweredIds = new Set(answeredIds);
      allQuestions.forEach(q => newAnsweredIds.delete(q.id));
      setAnsweredIds(newAnsweredIds);
      saveAnsweredIds(newAnsweredIds);
      unansweredQuestions = allQuestions;
    }
    
    return shuffleArray(unansweredQuestions).slice(0, count);
  };

  const startTest = () => {
    const newQuestions = generateQuestions(questionCount, selectedSubject);
    setQuestions(newQuestions);
    setShowSettings(false);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setWrongAnswers([]);
    setTimeLeft(questionCount * 30);
    setIsFinished(false);
    setStreak(0);
  };

  // Timer
  useEffect(() => {
    if (isFinished || questions.length === 0 || showSettings) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isFinished, questions.length, showSettings]);

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    setShowResult(true);

    const currentQuestion = questions[currentIndex];
    
    // Mark question as answered
    const newAnsweredIds = new Set(answeredIds);
    newAnsweredIds.add(currentQuestion.id);
    setAnsweredIds(newAnsweredIds);
    saveAnsweredIds(newAnsweredIds);

    if (index === currentQuestion.correctIndex) {
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);
    } else {
      setWrongAnswers(prev => [...prev, currentQuestion]);
      setStreak(0);
    }

    // Auto advance after 1.2 seconds
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setIsFinished(true);
        onComplete?.(score + (index === currentQuestion.correctIndex ? 1 : 0), questions.length, wrongAnswers);
      }
    }, 1200);
  };

  const skipQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsFinished(true);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleRetry = () => {
    setShowSettings(true);
  };

  const clearAnsweredHistory = () => {
    setAnsweredIds(new Set());
    localStorage.removeItem('7k-answered-questions');
  };

  // Save wrong answers to error log
  useEffect(() => {
    if (isFinished && wrongAnswers.length > 0) {
      const errorLog = JSON.parse(localStorage.getItem('7k-error-log') || '[]');
      wrongAnswers.forEach(q => {
        if (!errorLog.find((e: any) => e.id === q.id)) {
          errorLog.push({
            ...q,
            timestamp: new Date().toISOString(),
          });
        }
      });
      // Keep only last 100 errors
      if (errorLog.length > 100) {
        errorLog.splice(0, errorLog.length - 100);
      }
      localStorage.setItem('7k-error-log', JSON.stringify(errorLog));
    }
  }, [isFinished, wrongAnswers]);

  // Settings Screen
  if (showSettings) {
    const totalQuestions = subjects.reduce((sum, s) => 
      sum + s.chapters.reduce((cSum, c) => cSum + (c.mcqs?.length || 0), 0), 0
    );
    const unansweredCount = totalQuestions - answeredIds.size;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3">
        <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-md p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg sm:text-xl font-bold dark:text-white flex items-center gap-2">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" /> Quick Test
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <X className="w-5 h-5 dark:text-white" />
            </button>
          </div>

          <div className="space-y-4">
            {/* Subject Selection */}
            <div>
              <label className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 block">
                Select Subject
              </label>
              <select
                value={selectedSubject}
                onChange={e => setSelectedSubject(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white text-base"
              >
                <option value="all">All Subjects</option>
                {subjects.map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>

            {/* Question Count */}
            <div>
              <label className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 block">
                Number of Questions
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[5, 10, 15, 20].map(count => (
                  <button
                    key={count}
                    onClick={() => setQuestionCount(count)}
                    className={`py-3 rounded-xl font-medium transition ${
                      questionCount === count
                        ? 'bg-yellow-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    {count}
                  </button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">Total Questions</span>
                <span className="font-medium dark:text-white">{totalQuestions}</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className="text-gray-500 dark:text-gray-400">New Questions</span>
                <span className="font-medium text-green-600 dark:text-green-400">{Math.max(0, unansweredCount)}</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className="text-gray-500 dark:text-gray-400">Already Answered</span>
                <span className="font-medium text-gray-600 dark:text-gray-300">{answeredIds.size}</span>
              </div>
            </div>

            {/* Clear History */}
            {answeredIds.size > 0 && (
              <button
                onClick={clearAnsweredHistory}
                className="w-full py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
              >
                Reset History (show all questions again)
              </button>
            )}

            {/* Start Button */}
            <button
              onClick={startTest}
              className="w-full py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl font-bold text-lg active:scale-95 transition flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" /> Start Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 text-center max-w-sm w-full">
          <Brain className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 text-gray-400" />
          <h2 className="text-lg sm:text-xl font-bold dark:text-white mb-2">No Questions Available</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">Add more MCQs to your subjects to use Quick Test.</p>
          <button
            onClick={onClose}
            className="w-full py-3 bg-blue-500 text-white rounded-xl active:scale-95 transition"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  // Results Screen
  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    const grade = percentage >= 90 ? 'A+' : percentage >= 80 ? 'A' : percentage >= 70 ? 'B' : percentage >= 60 ? 'C' : 'D';
    
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 overflow-y-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full p-4 sm:p-6 my-4">
          {/* Score Header */}
          <div className={`text-center mb-5 p-4 sm:p-6 rounded-xl ${
            percentage >= 70 ? 'bg-gradient-to-br from-green-500 to-emerald-600' : 
            percentage >= 50 ? 'bg-gradient-to-br from-yellow-500 to-orange-500' :
            'bg-gradient-to-br from-red-500 to-rose-600'
          } text-white`}>
            <Trophy className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2" />
            <div className="text-4xl sm:text-5xl font-bold mb-1">{score}/{questions.length}</div>
            <div className="text-lg sm:text-xl opacity-90">{percentage}% - Grade {grade}</div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5">
            <div className="text-center p-2 sm:p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 text-green-500" />
              <div className="font-bold text-green-600 dark:text-green-400">{score}</div>
              <div className="text-xs text-gray-500">Correct</div>
            </div>
            <div className="text-center p-2 sm:p-3 bg-red-50 dark:bg-red-900/30 rounded-lg">
              <XCircle className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 text-red-500" />
              <div className="font-bold text-red-600 dark:text-red-400">{questions.length - score}</div>
              <div className="text-xs text-gray-500">Wrong</div>
            </div>
            <div className="text-center p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 text-blue-500" />
              <div className="font-bold text-blue-600 dark:text-blue-400">{formatTime(questionCount * 30 - timeLeft)}</div>
              <div className="text-xs text-gray-500">Time</div>
            </div>
          </div>

          {/* Wrong Answers */}
          {wrongAnswers.length > 0 && (
            <div className="mb-5">
              <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2 text-sm flex items-center gap-2">
                <XCircle className="w-4 h-4" /> Review Wrong Answers
              </h4>
              <div className="max-h-32 overflow-y-auto space-y-2">
                {wrongAnswers.map((q, i) => (
                  <div key={i} className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg text-xs">
                    <p className="font-medium dark:text-white line-clamp-2">{q.question}</p>
                    <p className="text-green-600 dark:text-green-400 mt-1">
                      ✓ {q.options[q.correctIndex]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={handleRetry}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl font-medium active:scale-95 transition"
            >
              <RotateCcw className="w-5 h-5" /> New Test
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium active:scale-95 transition"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 flex flex-col z-50">
      {/* Header - Mobile Optimized */}
      <div className="p-3 sm:p-4 flex items-center justify-between text-white">
        <button
          onClick={onClose}
          className="p-2 hover:bg-white/20 rounded-lg active:scale-95 transition"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <div className={`flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg ${timeLeft <= 30 ? 'bg-red-600 animate-pulse' : 'bg-white/20'}`}>
            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-mono text-sm sm:text-base">{formatTime(timeLeft)}</span>
          </div>
          <div className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 bg-white/20 rounded-lg">
            <Target className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-sm sm:text-base">{currentIndex + 1}/{questions.length}</span>
          </div>
        </div>

        {streak >= 2 && (
          <div className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 bg-orange-600 rounded-lg animate-bounce">
            <Flame className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-sm sm:text-base font-bold">{streak}🔥</span>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="px-3 sm:px-4">
        <div className="h-1.5 sm:h-2 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question - Mobile Optimized */}
      <div className="flex-1 flex flex-col p-3 sm:p-4 overflow-y-auto">
        <div className="text-white/80 text-xs sm:text-sm mb-2">
          {currentQuestion.subjectName} • {currentQuestion.chapterTitle}
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 mb-4 flex-shrink-0">
          <p className="text-base sm:text-lg font-medium dark:text-white leading-relaxed">
            {currentQuestion.question}
          </p>
        </div>

        {/* Options - Mobile Optimized */}
        <div className="space-y-2 sm:space-y-3 flex-1">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === currentQuestion.correctIndex;
            const showCorrectAnswer = showResult && isCorrect;
            const showWrongAnswer = showResult && isSelected && !isCorrect;

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                className={`w-full p-3 sm:p-4 rounded-xl text-left transition-all transform active:scale-[0.98] ${
                  showCorrectAnswer ? 'bg-green-500 text-white scale-[1.02]' :
                  showWrongAnswer ? 'bg-red-500 text-white' :
                  isSelected ? 'bg-blue-500 text-white' :
                  'bg-white dark:bg-gray-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                    showCorrectAnswer || showWrongAnswer || isSelected
                      ? 'bg-white/20'
                      : 'bg-gray-100 dark:bg-gray-700'
                  }`}>
                    {showCorrectAnswer ? '✓' : showWrongAnswer ? '✗' : String.fromCharCode(65 + index)}
                  </span>
                  <span className={`flex-1 text-sm sm:text-base ${!isSelected && !showResult ? 'dark:text-white' : ''}`}>
                    {option}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showResult && currentQuestion.explanation && (
          <div className="mt-3 p-3 bg-white/90 dark:bg-gray-800/90 rounded-xl">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              💡 {currentQuestion.explanation}
            </p>
          </div>
        )}

        {/* Skip Button */}
        {!showResult && (
          <button
            onClick={skipQuestion}
            className="mt-3 py-2 text-white/70 text-sm flex items-center justify-center gap-1 active:text-white"
          >
            <SkipForward className="w-4 h-4" /> Skip Question
          </button>
        )}
      </div>

      {/* Score Display */}
      <div className="p-3 sm:p-4 bg-black/20">
        <div className="flex items-center justify-center gap-4 sm:gap-6 text-white">
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold">{score}</div>
            <div className="text-xs opacity-70">Score</div>
          </div>
          <div className="w-px h-8 bg-white/30" />
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold">{questions.length - currentIndex - 1}</div>
            <div className="text-xs opacity-70">Remaining</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTest;
