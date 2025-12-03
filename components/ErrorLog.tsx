import React, { useState, useEffect } from 'react';
import { AlertTriangle, Trash2, Play, CheckCircle, XCircle, RotateCcw, Brain, Target, ArrowRight, Filter, Clock } from 'lucide-react';
import { Question } from '../types';

interface ErrorLogEntry extends Question {
  timestamp: string;
  subjectName?: string;
  chapterTitle?: string;
  reviewCount?: number;
  lastReviewed?: string;
}

interface ErrorLogProps {
  onClose: () => void;
}

const ErrorLog: React.FC<ErrorLogProps> = ({ onClose }) => {
  const [errors, setErrors] = useState<ErrorLogEntry[]>([]);
  const [isTestMode, setIsTestMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [testFinished, setTestFinished] = useState(false);
  const [filter, setFilter] = useState<'all' | 'recent' | 'frequent'>('all');

  // Load errors from localStorage
  useEffect(() => {
    const savedErrors = JSON.parse(localStorage.getItem('7k-error-log') || '[]');
    setErrors(savedErrors);
  }, []);

  // Save errors to localStorage
  const saveErrors = (newErrors: ErrorLogEntry[]) => {
    localStorage.setItem('7k-error-log', JSON.stringify(newErrors));
    setErrors(newErrors);
  };

  const clearAllErrors = () => {
    if (confirm('Are you sure you want to clear all errors? This cannot be undone.')) {
      saveErrors([]);
    }
  };

  const removeError = (id: string) => {
    saveErrors(errors.filter(e => e.id !== id));
  };

  const startMistakesTest = () => {
    if (errors.length === 0) return;
    // Shuffle errors and start test
    const shuffled = [...errors].sort(() => Math.random() - 0.5);
    setErrors(shuffled);
    setIsTestMode(true);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setTestFinished(false);
  };

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    setShowResult(true);

    const currentQuestion = errors[currentIndex];
    
    // Update review count
    const updatedErrors = errors.map(e => {
      if (e.id === currentQuestion.id) {
        return {
          ...e,
          reviewCount: (e.reviewCount || 0) + 1,
          lastReviewed: new Date().toISOString(),
        };
      }
      return e;
    });

    if (index === currentQuestion.correctIndex) {
      setScore(prev => prev + 1);
      // If answered correctly twice, remove from error log
      if ((currentQuestion.reviewCount || 0) >= 1) {
        saveErrors(updatedErrors.filter(e => e.id !== currentQuestion.id));
      } else {
        saveErrors(updatedErrors);
      }
    } else {
      saveErrors(updatedErrors);
    }

    // Auto advance
    setTimeout(() => {
      if (currentIndex < errors.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setTestFinished(true);
      }
    }, 1500);
  };

  const getFilteredErrors = () => {
    switch (filter) {
      case 'recent':
        return [...errors].sort((a, b) => 
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
      case 'frequent':
        return [...errors].sort((a, b) => 
          (b.reviewCount || 0) - (a.reviewCount || 0)
        );
      default:
        return errors;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      day: 'numeric', 
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Test Results Screen
  if (testFinished) {
    const percentage = Math.round((score / errors.length) * 100);
    
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full p-6">
          <div className={`text-center mb-6 p-6 rounded-xl ${
            percentage >= 70 ? 'bg-gradient-to-br from-green-500 to-emerald-600' : 
            'bg-gradient-to-br from-orange-500 to-amber-600'
          } text-white`}>
            <Target className="w-12 h-12 mx-auto mb-2" />
            <div className="text-4xl font-bold mb-1">{score}/{errors.length}</div>
            <div className="text-lg opacity-90">{percentage}% Mastered</div>
          </div>

          <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
            {percentage >= 70 
              ? "Great progress! Questions answered correctly twice are removed from the log."
              : "Keep practicing! Answer each question correctly twice to remove it from your error log."}
          </p>

          <div className="flex gap-3">
            <button
              onClick={() => {
                setIsTestMode(false);
                setTestFinished(false);
              }}
              className="flex-1 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 font-medium"
            >
              Back to Log
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

  // Test Mode Screen
  if (isTestMode) {
    const currentQuestion = errors[currentIndex];
    
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-lg w-full overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 p-4 text-white">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                <span className="font-semibold">Mistakes Review</span>
              </div>
              <div className="px-3 py-1 bg-white/20 rounded-full">
                Score: {score}/{currentIndex}
              </div>
            </div>
            
            {/* Progress */}
            <div className="flex gap-1">
              {errors.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full ${
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
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
                Q{currentIndex + 1}/{errors.length}
              </span>
              {currentQuestion.reviewCount && currentQuestion.reviewCount > 0 && (
                <span className="text-xs px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full">
                  Reviewed {currentQuestion.reviewCount}x
                </span>
              )}
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
                        : 'border-gray-200 dark:border-gray-700 hover:border-orange-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-medium text-sm ${
                        showCorrect ? 'bg-green-500 text-white' :
                        showWrong ? 'bg-red-500 text-white' :
                        'bg-gray-100 dark:bg-gray-700'
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
  }

  // Error Log List View
  const filteredErrors = getFilteredErrors();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-lg w-full max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              <h2 className="text-xl font-bold dark:text-white">Error Log</h2>
              <span className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm">
                {errors.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              <XCircle className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Filter */}
          <div className="flex gap-2 mb-4">
            {(['all', 'recent', 'frequent'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-lg text-sm capitalize ${
                  filter === f
                    ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={startMistakesTest}
              disabled={errors.length === 0}
              className="flex-1 flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-medium disabled:opacity-50"
            >
              <Play className="w-5 h-5" />
              Practice Mistakes ({errors.length})
            </button>
            <button
              onClick={clearAllErrors}
              disabled={errors.length === 0}
              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50"
            >
              <Trash2 className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Error List */}
        <div className="flex-1 overflow-y-auto p-4">
          {filteredErrors.length === 0 ? (
            <div className="text-center py-12">
              <Brain className="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
              <h3 className="font-semibold dark:text-white mb-2">No Mistakes Yet!</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Take a Quick Test to see your mistakes here.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredErrors.map((error, index) => (
                <div
                  key={error.id}
                  className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <p className="font-medium dark:text-white text-sm mb-1">
                        {error.question}
                      </p>
                      <p className="text-green-600 dark:text-green-400 text-sm">
                        ✓ {error.options[error.correctIndex]}
                      </p>
                    </div>
                    <button
                      onClick={() => removeError(error.id)}
                      className="p-1.5 opacity-0 group-hover:opacity-100 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-opacity"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {formatDate(error.timestamp)}
                    </span>
                    {error.reviewCount && error.reviewCount > 0 && (
                      <span className="flex items-center gap-1">
                        <RotateCcw className="w-3 h-3" />
                        Reviewed {error.reviewCount}x
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorLog;
