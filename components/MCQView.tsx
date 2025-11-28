import React, { useState } from 'react';
import { Question } from '../types';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

interface MCQViewProps {
  questions: Question[];
  onComplete: () => void;
}

const MCQView: React.FC<MCQViewProps> = ({ questions, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

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
      onComplete();
    }
  };

  if (!currentQuestion) return <div className="p-8 text-center">No questions available.</div>;

  return (
    <div className="flex flex-col h-full max-w-2xl mx-auto p-4">
      <div className="mb-6 flex justify-between items-center">
        <span className="text-sm font-semibold text-gray-500">Question {currentIndex + 1}/{questions.length}</span>
        <span className="text-sm font-bold text-indigo-600">Score: {score}</span>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-6">{currentQuestion.question}</h3>
        
        <div className="space-y-3">
          {currentQuestion.options.map((option, idx) => {
            let btnClass = "w-full p-4 text-left rounded-xl border-2 transition-all duration-200 font-medium ";
            
            if (isAnswered) {
              if (idx === currentQuestion.correctIndex) {
                btnClass += "border-green-500 bg-green-50 text-green-700";
              } else if (idx === selectedOption) {
                btnClass += "border-red-500 bg-red-50 text-red-700";
              } else {
                btnClass += "border-gray-100 text-gray-400";
              }
            } else {
              btnClass += "border-gray-100 hover:border-indigo-200 hover:bg-indigo-50 text-gray-700";
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
          <div className="mt-6 p-4 bg-blue-50 rounded-xl text-blue-800 text-sm">
            <span className="font-bold">Explanation:</span> {currentQuestion.explanation}
          </div>
        )}
      </div>

      {isAnswered && (
        <button 
          onClick={handleNext}
          className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
        >
          {currentIndex === questions.length - 1 ? "Finish Quiz" : "Next Question"}
          <ArrowRight size={20} />
        </button>
      )}
    </div>
  );
};

export default MCQView;