import React, { useState } from 'react';
import { Question } from '../types';
import { CheckCircle, XCircle, ArrowRight, Trophy } from 'lucide-react';

interface MCQViewProps {
  questions: Question[];
  onComplete: (score: number, total: number) => void;
}

const MCQView: React.FC<MCQViewProps> = ({ questions, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === currentQuestion.correctIndex) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(curr => curr + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const handleFinish = () => {
    onComplete(score, questions.length);
  };

  if (!currentQuestion && !showResults) {
    return <div className="p-8 text-center text-slate-500 dark:text-slate-400">No questions available.</div>;
  }

  // Results Screen
  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    const getMessage = () => {
      if (percentage >= 90) return { text: "Outstanding! 🏆", color: "text-emerald-500" };
      if (percentage >= 70) return { text: "Great job! 🎉", color: "text-blue-500" };
      if (percentage >= 50) return { text: "Good effort! 💪", color: "text-yellow-500" };
      return { text: "Keep practicing! 📚", color: "text-orange-500" };
    };
    const message = getMessage();

    return (
      <div className="flex flex-col items-center justify-center h-full max-w-md mx-auto p-6 text-center">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full p-6 mb-6">
          <Trophy size={48} className="text-white" />
        </div>
        <h2 className="text-2xl font-black text-slate-800 dark:text-white mb-2">Quiz Complete!</h2>
        <p className={`text-xl font-bold mb-6 ${message.color}`}>{message.text}</p>
        
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 w-full shadow-lg border border-slate-100 dark:border-slate-700 mb-6">
          <div className="text-5xl font-black text-indigo-600 dark:text-indigo-400 mb-2">
            {score}/{questions.length}
          </div>
          <div className="text-slate-500 dark:text-slate-400 font-medium">
            {percentage}% Accuracy
          </div>
          <div className="mt-4 h-3 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        <button 
          onClick={handleFinish}
          className="w-full py-4 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
        >
          Continue
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full max-w-2xl mx-auto p-4">
      <div className="mb-6 flex justify-between items-center">
        <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">Question {currentIndex + 1}/{questions.length}</span>
        <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">Score: {score}</span>
      </div>

      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 mb-6 flex-grow transition-colors">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">{currentQuestion.question}</h3>
        
        <div className="space-y-3">
          {currentQuestion.options.map((option, idx) => {
            let btnClass = "w-full p-4 text-left rounded-xl border-2 transition-all duration-200 font-medium ";
            
            if (isAnswered) {
              if (idx === currentQuestion.correctIndex) {
                btnClass += "border-green-500 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400";
              } else if (idx === selectedOption) {
                btnClass += "border-red-500 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400";
              } else {
                btnClass += "border-gray-100 dark:border-slate-700 text-gray-400 dark:text-slate-500";
              }
            } else {
              btnClass += "border-gray-100 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 text-gray-700 dark:text-slate-200";
            }

            return (
              <button 
                key={idx}
                onClick={() => handleOptionClick(idx)}
                className={btnClass}
                disabled={isAnswered}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {isAnswered && idx === currentQuestion.correctIndex && <CheckCircle size={20} className="text-green-500" />}
                  {isAnswered && idx === selectedOption && idx !== currentQuestion.correctIndex && <XCircle size={20} className="text-red-500" />}
                </div>
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl text-blue-800 dark:text-blue-200 text-sm">
            <span className="font-bold">Explanation:</span> {currentQuestion.explanation}
          </div>
        )}
      </div>

      {isAnswered && (
        <button 
          onClick={handleNext}
          className="w-full py-4 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2"
        >
          {currentIndex === questions.length - 1 ? "Finish Quiz" : "Next Question"}
          <ArrowRight size={20} />
        </button>
      )}
    </div>
  );
};

export default MCQView;