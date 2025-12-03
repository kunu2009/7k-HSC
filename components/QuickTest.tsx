import React, { useState, useEffect, useMemo } from 'react';
import { Zap, Clock, CheckCircle, XCircle, RotateCcw, Trophy, Target, ArrowRight, Brain, Flame, ChevronRight } from 'lucide-react';
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
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes for 10 questions
  const [isFinished, setIsFinished] = useState(false);
  const [streak, setStreak] = useState(0);

  // Generate 10 random questions from all subjects
  useEffect(() => {
    const allQuestions: (Question & { subjectName: string; chapterTitle: string })[] = [];
    
    subjects.forEach(subject => {
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

    // Shuffle and pick 10 random questions
    const shuffled = allQuestions.sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, 10));
  }, [subjects]);

  // Timer
  useEffect(() => {
    if (isFinished || questions.length === 0) return;

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
  }, [isFinished, questions.length]);

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    setShowResult(true);

    const currentQuestion = questions[currentIndex];
    if (index === currentQuestion.correctIndex) {
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);
    } else {
      setWrongAnswers(prev => [...prev, currentQuestion]);
      setStreak(0);
    }

    // Auto advance after 1.5 seconds
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setIsFinished(true);
        onComplete?.(score + (index === currentQuestion.correctIndex ? 1 : 0), questions.length, wrongAnswers);
      }
    }, 1500);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleRetry = () => {
    // Regenerate questions
    const allQuestions: (Question & { subjectName: string; chapterTitle: string })[] = [];
    subjects.forEach(subject => {
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
    const shuffled = allQuestions.sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, 10));
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setWrongAnswers([]);
    setTimeLeft(300);
    setIsFinished(false);
    setStreak(0);
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

  if (questions.length === 0) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center">
          <Brain className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h2 className="text-xl font-bold dark:text-white mb-2">No Questions Available</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">Add more MCQs to your subjects to use Quick Test.</p>
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

  // Results Screen
  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    const grade = percentage >= 90 ? 'A+' : percentage >= 80 ? 'A' : percentage >= 70 ? 'B' : percentage >= 60 ? 'C' : 'D';
    
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full p-6 animate-fadeIn">
          {/* Score Header */}
          <div className={`text-center mb-6 p-6 rounded-xl ${
            percentage >= 70 ? 'bg-gradient-to-br from-green-500 to-emerald-600' : 
            percentage >= 50 ? 'bg-gradient-to-br from-yellow-500 to-orange-500' :
            'bg-gradient-to-br from-red-500 to-rose-600'
          } text-white`}>
            <Trophy className="w-12 h-12 mx-auto mb-2" />
            <div className="text-5xl font-bold mb-1">{score}/{questions.length}</div>
            <div className="text-xl opacity-90">{percentage}% - Grade {grade}</div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="text-center p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <CheckCircle className="w-6 h-6 mx-auto mb-1 text-green-500" />
              <div className="font-bold text-green-600 dark:text-green-400">{score}</div>
              <div className="text-xs text-gray-500">Correct</div>
            </div>
            <div className="text-center p-3 bg-red-50 dark:bg-red-900/30 rounded-lg">
              <XCircle className="w-6 h-6 mx-auto mb-1 text-red-500" />
              <div className="font-bold text-red-600 dark:text-red-400">{questions.length - score}</div>
              <div className="text-xs text-gray-500">Wrong</div>
            </div>
            <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <Clock className="w-6 h-6 mx-auto mb-1 text-blue-500" />
              <div className="font-bold text-blue-600 dark:text-blue-400">{formatTime(300 - timeLeft)}</div>
              <div className="text-xs text-gray-500">Time</div>
            </div>
          </div>

          {/* Wrong Answers */}
          {wrongAnswers.length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold dark:text-white mb-2 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-500" />
                Review Wrong Answers
              </h4>
              <div className="max-h-40 overflow-y-auto space-y-2">
                {wrongAnswers.map((q, i) => (
                  <div key={i} className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg text-sm">
                    <p className="font-medium dark:text-white mb-1">{q.question}</p>
                    <p className="text-green-600 dark:text-green-400">
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
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 font-medium"
            >
              <RotateCcw className="w-5 h-5" />
              Try Again
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

  const currentQuestion = questions[currentIndex];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-lg w-full overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 text-white">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">Quick Test</span>
            </div>
            <div className="flex items-center gap-4">
              {streak >= 2 && (
                <div className="flex items-center gap-1 px-2 py-1 bg-white/20 rounded-full text-sm">
                  <Flame className="w-4 h-4 text-orange-300" />
                  <span>{streak} streak!</span>
                </div>
              )}
              <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${
                timeLeft < 60 ? 'bg-red-500' : 'bg-white/20'
              }`}>
                <Clock className="w-4 h-4" />
                <span className="font-mono">{formatTime(timeLeft)}</span>
              </div>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="flex gap-1">
            {questions.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-all ${
                  i < currentIndex ? 'bg-green-400' :
                  i === currentIndex ? 'bg-white' :
                  'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Question */}
        <div className="p-6">
          <div className="mb-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {currentQuestion.subjectName} • {currentQuestion.chapterTitle}
            </span>
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
              Q{currentIndex + 1}/{questions.length}
            </span>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">Score: {score}</span>
          </div>

          <h3 className="text-lg font-semibold dark:text-white mb-6">
            {currentQuestion.question}
          </h3>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correctIndex;
              const showCorrect = showResult && isCorrect;
              const showWrong = showResult && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                    showCorrect
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                      : showWrong
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/30'
                      : isSelected
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-medium text-sm ${
                      showCorrect
                        ? 'bg-green-500 text-white'
                        : showWrong
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="dark:text-white">{option}</span>
                    {showCorrect && <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />}
                    {showWrong && <XCircle className="w-5 h-5 text-red-500 ml-auto" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showResult && currentQuestion.explanation && (
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                💡 {currentQuestion.explanation}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuickTest;
