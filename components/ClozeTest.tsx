import React, { useState, useEffect } from 'react';
import { X, Check, SkipForward, RefreshCw, Trophy, Lightbulb, HelpCircle, ChevronRight } from 'lucide-react';
import { Subject, Flashcard } from '../types';

interface ClozeTestProps {
  subjects: Subject[];
  onClose: () => void;
}

interface ClozeQuestion {
  id: string;
  originalText: string;
  blankText: string;
  answer: string;
  hint: string;
  subject: string;
  chapter: string;
}

const ClozeTest: React.FC<ClozeTestProps> = ({ subjects, onClose }) => {
  const [questions, setQuestions] = useState<ClozeQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');

  // Generate cloze questions from flashcards
  useEffect(() => {
    const clozeQuestions: ClozeQuestion[] = [];
    
    subjects.forEach(subject => {
      if (selectedSubject !== 'all' && subject.id !== selectedSubject) return;
      
      subject.chapters.forEach(chapter => {
        chapter.flashcards?.forEach((card, idx) => {
          // Try to extract key terms from the answer
          const answer = card.back;
          const words = answer.split(/\s+/);
          
          // Find important words (longer words, proper nouns, numbers)
          const importantWords = words.filter(word => {
            const clean = word.replace(/[^a-zA-Z0-9]/g, '');
            if (clean.length < 3) return false;
            if (difficulty === 'easy' && clean.length < 6) return false;
            if (difficulty === 'hard') return clean.length >= 3;
            return clean.length >= 4;
          });
          
          if (importantWords.length > 0) {
            // Pick a random important word
            const targetWord = importantWords[Math.floor(Math.random() * importantWords.length)];
            const cleanTarget = targetWord.replace(/[^a-zA-Z0-9]/g, '');
            
            // Create blank version
            const blankChar = difficulty === 'hard' ? '_' : '_'.repeat(cleanTarget.length);
            const blankText = answer.replace(new RegExp(cleanTarget, 'i'), `[${blankChar}]`);
            
            // Generate hint (first letter + length)
            const hint = difficulty === 'hard' 
              ? `${cleanTarget.length} letters`
              : `Starts with "${cleanTarget[0]}" (${cleanTarget.length} letters)`;
            
            clozeQuestions.push({
              id: `${chapter.id}-${idx}`,
              originalText: answer,
              blankText: blankText,
              answer: cleanTarget.toLowerCase(),
              hint: hint,
              subject: subject.name,
              chapter: chapter.title
            });
          }
        });
      });
    });
    
    // Shuffle
    const shuffled = clozeQuestions.sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setAnswered(0);
  }, [subjects, selectedSubject, difficulty]);

  const checkAnswer = () => {
    const currentQ = questions[currentIndex];
    if (!currentQ) return;
    
    const correct = userAnswer.toLowerCase().trim() === currentQ.answer;
    setIsCorrect(correct);
    setIsChecked(true);
    setAnswered(prev => prev + 1);
    
    if (correct) {
      setScore(prev => prev + (showHint ? 5 : 10));
    }
    
    // Save to progress
    const progress = JSON.parse(localStorage.getItem('7k-cloze-progress') || '{}');
    const today = new Date().toISOString().split('T')[0];
    if (!progress[today]) {
      progress[today] = { total: 0, correct: 0 };
    }
    progress[today].total += 1;
    if (correct) progress[today].correct += 1;
    localStorage.setItem('7k-cloze-progress', JSON.stringify(progress));
  };

  const nextQuestion = () => {
    setCurrentIndex(prev => prev + 1);
    setUserAnswer('');
    setIsChecked(false);
    setIsCorrect(false);
    setShowHint(false);
  };

  const skipQuestion = () => {
    setAnswered(prev => prev + 1);
    nextQuestion();
  };

  const restartQuiz = () => {
    setQuestions(prev => [...prev].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
    setScore(0);
    setAnswered(0);
    setUserAnswer('');
    setIsChecked(false);
    setShowHint(false);
  };

  const currentQuestion = questions[currentIndex];
  const isFinished = currentIndex >= questions.length;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <HelpCircle className="w-6 h-6" /> Fill in the Blank
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {!isFinished && (
            <div className="mt-3 flex items-center justify-between">
              <span className="text-sm opacity-80">
                Question {currentIndex + 1} of {questions.length}
              </span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Trophy className="w-4 h-4" />
                  <span className="font-bold">{score}</span>
                </span>
                <span className="text-sm opacity-80">
                  {answered > 0 ? Math.round((score / (answered * 10)) * 100) : 0}% accuracy
                </span>
              </div>
            </div>
          )}
        </div>
        
        {/* Settings (when not started) */}
        {currentIndex === 0 && answered === 0 && (
          <div className="p-4 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[150px]">
                <label className="text-xs text-gray-500 dark:text-gray-400 mb-1 block">Subject</label>
                <select
                  value={selectedSubject}
                  onChange={e => setSelectedSubject(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-sm"
                >
                  <option value="all">All Subjects</option>
                  {subjects.map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-500 dark:text-gray-400 mb-1 block">Difficulty</label>
                <div className="flex rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                  {(['easy', 'medium', 'hard'] as const).map(d => (
                    <button
                      key={d}
                      onClick={() => setDifficulty(d)}
                      className={`px-4 py-2 text-sm capitalize ${
                        difficulty === d 
                          ? 'bg-indigo-500 text-white' 
                          : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Content */}
        <div className="p-6">
          {isFinished ? (
            /* Results */
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold dark:text-white mb-2">Quiz Complete!</h3>
              
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                  <p className="text-2xl font-bold text-indigo-500">{score}</p>
                  <p className="text-sm text-gray-500">Total Score</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                  <p className="text-2xl font-bold text-green-500">
                    {answered > 0 ? Math.round((score / (answered * 10)) * 100) : 0}%
                  </p>
                  <p className="text-sm text-gray-500">Accuracy</p>
                </div>
              </div>
              
              <button
                onClick={restartQuiz}
                className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium hover:opacity-90 flex items-center gap-2 mx-auto"
              >
                <RefreshCw className="w-5 h-5" /> Try Again
              </button>
            </div>
          ) : currentQuestion ? (
            /* Question */
            <div className="space-y-6">
              {/* Subject/Chapter tag */}
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">{currentQuestion.subject}</span>
                <ChevronRight className="w-4 h-4" />
                <span>{currentQuestion.chapter}</span>
              </div>
              
              {/* Question text */}
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
                <p className="text-lg dark:text-white leading-relaxed">
                  {currentQuestion.blankText.split(/\[.*?\]/).map((part, idx, arr) => (
                    <React.Fragment key={idx}>
                      {part}
                      {idx < arr.length - 1 && (
                        <span className="inline-block px-3 py-1 mx-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded font-mono">
                          {isChecked ? currentQuestion.answer : '_____'}
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </p>
              </div>
              
              {/* Input */}
              {!isChecked && (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={e => setUserAnswer(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && userAnswer.trim() && checkAnswer()}
                    placeholder="Type your answer..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-indigo-500 focus:outline-none text-lg"
                    autoFocus
                  />
                  
                  {/* Hint */}
                  {!showHint ? (
                    <button
                      onClick={() => setShowHint(true)}
                      className="flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      <Lightbulb className="w-4 h-4" /> Show Hint (-5 points)
                    </button>
                  ) : (
                    <p className="text-sm text-amber-600 dark:text-amber-400 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4" /> Hint: {currentQuestion.hint}
                    </p>
                  )}
                </div>
              )}
              
              {/* Result */}
              {isChecked && (
                <div className={`p-4 rounded-xl ${isCorrect ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    {isCorrect ? (
                      <>
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="font-bold text-green-600">Correct! +{showHint ? 5 : 10} points</span>
                      </>
                    ) : (
                      <>
                        <X className="w-5 h-5 text-red-600" />
                        <span className="font-bold text-red-600">Incorrect</span>
                      </>
                    )}
                  </div>
                  {!isCorrect && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      The correct answer was: <strong className="text-gray-800 dark:text-gray-200">{currentQuestion.answer}</strong>
                    </p>
                  )}
                </div>
              )}
              
              {/* Actions */}
              <div className="flex gap-3">
                {!isChecked ? (
                  <>
                    <button
                      onClick={skipQuestion}
                      className="flex-1 py-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center gap-2"
                    >
                      <SkipForward className="w-5 h-5" /> Skip
                    </button>
                    <button
                      onClick={checkAnswer}
                      disabled={!userAnswer.trim()}
                      className="flex-1 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <Check className="w-5 h-5" /> Check
                    </button>
                  </>
                ) : (
                  <button
                    onClick={nextQuestion}
                    className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium hover:opacity-90 flex items-center justify-center gap-2"
                  >
                    Next Question <ChevronRight className="w-5 h-5" />
                  </button>
                )}
              </div>
              
              {/* Progress bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <HelpCircle className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>No questions available</p>
              <p className="text-sm mt-2">Add flashcards to generate fill-in-the-blank questions</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClozeTest;
