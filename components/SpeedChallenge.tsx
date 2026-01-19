import React, { useState, useEffect } from 'react';
import { X, Zap, Trophy, Timer, Target } from 'lucide-react';

interface SpeedChallengeProps {
  onClose: () => void;
}

interface Question {
  id: string;
  question: string;
  answer: string;
  subject: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

const QUESTIONS: Question[] = [
  { id: 'q1', question: 'Capital of France?', answer: 'paris', subject: 'General', difficulty: 'easy' },
  { id: 'q2', question: 'Law: Price ↑, Demand ↓?', answer: 'law of demand', subject: 'Economics', difficulty: 'easy' },
  { id: 'q3', question: 'French Revolution year?', answer: '1789', subject: 'History', difficulty: 'easy' },
  { id: 'q4', question: 'GDP full form?', answer: 'gross domestic product', subject: 'Economics', difficulty: 'medium' },
  { id: 'q5', question: 'Renaissance birthplace?', answer: 'italy', subject: 'History', difficulty: 'easy' },
  { id: 'q6', question: 'Comparison using "like"?', answer: 'simile', subject: 'English', difficulty: 'easy' },
  { id: 'q7', question: 'Indian Constitution force year?', answer: '1950', subject: 'Political Science', difficulty: 'medium' },
  { id: 'q8', question: 'Ed > 1 means?', answer: 'elastic', subject: 'Economics', difficulty: 'medium' },
  { id: 'q9', question: 'Primary socialization agent?', answer: 'family', subject: 'Sociology', difficulty: 'easy' },
  { id: 'q10', question: 'Power division: Central + State?', answer: 'federalism', subject: 'Political Science', difficulty: 'medium' },
  { id: 'q11', question: 'Martin Luther year?', answer: '1517', subject: 'History', difficulty: 'hard' },
  { id: 'q12', question: 'Mona Lisa painter?', answer: 'leonardo da vinci', subject: 'History', difficulty: 'medium' },
  { id: 'q13', question: 'Time is money - figure?', answer: 'metaphor', subject: 'English', difficulty: 'easy' },
  { id: 'q14', question: 'India independence year?', answer: '1947', subject: 'History', difficulty: 'easy' },
  { id: 'q15', question: 'Rajya Sabha max members?', answer: '250', subject: 'Political Science', difficulty: 'hard' },
  { id: 'q16', question: 'Monsoon months in India?', answer: 'june to september', subject: 'Geography', difficulty: 'medium' },
  { id: 'q17', question: 'Classical conditioning scientist?', answer: 'pavlov', subject: 'Psychology', difficulty: 'medium' },
  { id: 'q18', question: 'UN formation year?', answer: '1945', subject: 'Political Science', difficulty: 'hard' },
  { id: 'q19', question: 'Ceteris paribus meaning?', answer: 'other things equal', subject: 'Economics', difficulty: 'medium' },
  { id: 'q20', question: 'Lok Sabha max members?', answer: '552', subject: 'Political Science', difficulty: 'hard' },
];

const SpeedChallenge: React.FC<SpeedChallengeProps> = ({ onClose }) => {
  const [gameState, setGameState] = useState<'ready' | 'playing' | 'finished'>('ready');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && gameState === 'playing') {
      endGame();
    }
  }, [timeLeft, gameState]);

  const startGame = (difficulty: 'easy' | 'medium' | 'hard' | 'mixed') => {
    let filtered = QUESTIONS;
    if (difficulty !== 'mixed') {
      filtered = QUESTIONS.filter(q => q.difficulty === difficulty);
    }
    const shuffled = [...filtered].sort(() => Math.random() - 0.5).slice(0, 15);
    setSelectedQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setUserAnswer('');
    setScore(0);
    setCorrectAnswers(0);
    setStreak(0);
    setMaxStreak(0);
    setTimeLeft(60);
    setGameState('playing');
  };

  const normalizeAnswer = (answer: string) => {
    return answer.toLowerCase().trim().replace(/[^a-z0-9\s]/g, '');
  };

  const checkAnswer = () => {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const normalized = normalizeAnswer(userAnswer);
    const correctNormalized = normalizeAnswer(currentQuestion.answer);
    
    const isCorrect = normalized === correctNormalized || normalized.includes(correctNormalized);
    
    if (isCorrect) {
      const timeBonus = Math.floor(timeLeft / 10);
      const difficultyBonus = currentQuestion.difficulty === 'hard' ? 3 : currentQuestion.difficulty === 'medium' ? 2 : 1;
      const streakBonus = Math.floor(streak / 3);
      
      setScore(score + 10 + timeBonus + difficultyBonus + streakBonus);
      setCorrectAnswers(correctAnswers + 1);
      setStreak(streak + 1);
      setMaxStreak(Math.max(maxStreak, streak + 1));
    } else {
      setStreak(0);
    }
    
    // Move to next question
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer('');
    } else {
      endGame();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && userAnswer.trim()) {
      checkAnswer();
    }
  };

  const endGame = () => {
    setGameState('finished');
  };

  const currentQuestion = selectedQuestions[currentQuestionIndex];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-slate-900 to-yellow-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-yellow-500/30">
        <div className="sticky top-0 bg-gradient-to-r from-yellow-600 to-orange-600 p-6 flex justify-between items-center rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
              <Zap className="w-7 h-7" />
              Speed Challenge
            </h2>
            <p className="text-yellow-100 text-sm">Answer as many questions as you can in 60 seconds!</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition-all"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {gameState === 'ready' && (
            <div className="text-center">
              <div className="text-6xl mb-6">⚡</div>
              <h3 className="text-3xl font-bold text-white mb-4">Choose Difficulty</h3>
              <p className="text-slate-300 mb-6">
                You have 60 seconds to answer as many questions as possible!
              </p>
              
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                <button
                  onClick={() => startGame('easy')}
                  className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all"
                >
                  <span className="text-3xl mb-2 block">🌱</span>
                  Easy
                </button>
                <button
                  onClick={() => startGame('medium')}
                  className="bg-gradient-to-br from-yellow-500 to-amber-600 text-white p-6 rounded-xl font-bold text-lg hover:from-yellow-600 hover:to-amber-700 transition-all"
                >
                  <span className="text-3xl mb-2 block">⭐</span>
                  Medium
                </button>
                <button
                  onClick={() => startGame('hard')}
                  className="bg-gradient-to-br from-red-500 to-rose-600 text-white p-6 rounded-xl font-bold text-lg hover:from-red-600 hover:to-rose-700 transition-all"
                >
                  <span className="text-3xl mb-2 block">🔥</span>
                  Hard
                </button>
                <button
                  onClick={() => startGame('mixed')}
                  className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-6 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-indigo-700 transition-all"
                >
                  <span className="text-3xl mb-2 block">🎯</span>
                  Mixed
                </button>
              </div>
            </div>
          )}

          {gameState === 'playing' && currentQuestion && (
            <div>
              {/* Stats Bar */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className={`rounded-xl p-3 text-center ${
                  timeLeft > 30 ? 'bg-green-500/20' : timeLeft > 10 ? 'bg-yellow-500/20' : 'bg-red-500/20 animate-pulse'
                }`}>
                  <Timer className={`w-6 h-6 mx-auto mb-1 ${
                    timeLeft > 30 ? 'text-green-400' : timeLeft > 10 ? 'text-yellow-400' : 'text-red-400'
                  }`} />
                  <p className={`text-2xl font-bold ${
                    timeLeft > 30 ? 'text-green-300' : timeLeft > 10 ? 'text-yellow-300' : 'text-red-300'
                  }`}>{timeLeft}s</p>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <Trophy className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
                  <p className="text-2xl font-bold text-white">{score}</p>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <Target className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                  <p className="text-2xl font-bold text-white">{correctAnswers}/{currentQuestionIndex}</p>
                </div>
                <div className="bg-orange-500/20 rounded-xl p-3 text-center">
                  <Zap className="w-6 h-6 text-orange-400 mx-auto mb-1" />
                  <p className="text-2xl font-bold text-orange-300">{streak}🔥</p>
                </div>
              </div>

              {/* Question */}
              <div className="mb-4">
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium">
                    Question {currentQuestionIndex + 1}/{selectedQuestions.length}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    currentQuestion.difficulty === 'hard' 
                      ? 'bg-red-500/20 text-red-300'
                      : currentQuestion.difficulty === 'medium'
                      ? 'bg-yellow-500/20 text-yellow-300'
                      : 'bg-green-500/20 text-green-300'
                  }`}>
                    {currentQuestion.difficulty}
                  </span>
                  <span className="px-3 py-1 bg-slate-600/50 text-slate-300 rounded-full text-sm">
                    {currentQuestion.subject}
                  </span>
                </div>
                
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border-2 border-yellow-500/30">
                  <p className="text-white text-3xl font-bold text-center">
                    {currentQuestion.question}
                  </p>
                </div>
              </div>

              {/* Answer Input */}
              <div className="mb-4">
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your answer and press Enter..."
                  autoFocus
                  className="w-full bg-slate-800 text-white text-xl px-6 py-4 rounded-xl border-2 border-yellow-500/50 focus:border-yellow-500 focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={checkAnswer}
                disabled={!userAnswer.trim()}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-4 rounded-lg font-bold text-lg hover:from-yellow-600 hover:to-orange-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Answer (or press Enter)
              </button>

              {/* Progress Bar */}
              <div className="mt-4 bg-white/5 rounded-lg p-3">
                <div className="flex gap-1">
                  {selectedQuestions.map((_, idx) => (
                    <div
                      key={idx}
                      className={`flex-1 h-2 rounded-full transition-all ${
                        idx < currentQuestionIndex
                          ? 'bg-green-500'
                          : idx === currentQuestionIndex
                          ? 'bg-yellow-500'
                          : 'bg-slate-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {gameState === 'finished' && (
            <div className="text-center">
              <div className="text-6xl mb-6">
                {score >= 150 ? '🏆' : score >= 100 ? '🎉' : score >= 50 ? '👏' : '💪'}
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Challenge Complete!</h3>
              <p className="text-slate-300 mb-6">
                {score >= 150 
                  ? 'Outstanding performance!' 
                  : score >= 100 
                  ? 'Great job!' 
                  : score >= 50 
                  ? 'Good effort!' 
                  : 'Keep practicing!'}
              </p>
              
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-6">
                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500 rounded-xl p-6">
                  <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                  <p className="text-5xl font-bold text-yellow-300 mb-2">{score}</p>
                  <p className="text-yellow-200">Total Score</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500 rounded-xl p-6">
                  <Target className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <p className="text-5xl font-bold text-green-300 mb-2">{correctAnswers}</p>
                  <p className="text-green-200">Correct Answers</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border-2 border-orange-500 rounded-xl p-6">
                  <Zap className="w-12 h-12 text-orange-400 mx-auto mb-3" />
                  <p className="text-5xl font-bold text-orange-300 mb-2">{maxStreak}</p>
                  <p className="text-orange-200">Max Streak</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500 rounded-xl p-6">
                  <Timer className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                  <p className="text-5xl font-bold text-blue-300 mb-2">{Math.round(correctAnswers / (60 - timeLeft) * 60) || 0}</p>
                  <p className="text-blue-200">Answers/Min</p>
                </div>
              </div>

              <button
                onClick={() => setGameState('ready')}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-4 rounded-lg font-bold text-lg hover:from-yellow-600 hover:to-orange-700 transition-all"
              >
                Play Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpeedChallenge;