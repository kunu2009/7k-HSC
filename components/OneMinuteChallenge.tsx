import React, { useState, useEffect } from 'react';
import { X, Zap, Clock, CheckCircle, XCircle, Trophy, RefreshCw, Flame, Star, Target } from 'lucide-react';

interface OneMinuteChallenge {
  onClose: () => void;
}

interface Question {
  question: string;
  answer: string;
  subject: string;
}

const QUESTIONS: Question[] = [
  // History - Quick Facts
  { question: "Year of French Revolution?", answer: "1789", subject: "History" },
  { question: "Who invented printing press?", answer: "Gutenberg", subject: "History" },
  { question: "Vasco da Gama reached India in?", answer: "1498", subject: "History" },
  { question: "Columbus discovered America in?", answer: "1492", subject: "History" },
  { question: "Treaty of Versailles signed in?", answer: "1919", subject: "History" },
  { question: "Who unified Germany?", answer: "Bismarck", subject: "History" },
  { question: "Who was called 'Iron Chancellor'?", answer: "Bismarck", subject: "History" },
  { question: "Who was 'Soul' of Italian unification?", answer: "Mazzini", subject: "History" },
  { question: "Who was 'Brain' of Italian unification?", answer: "Cavour", subject: "History" },
  { question: "Who was 'Sword' of Italian unification?", answer: "Garibaldi", subject: "History" },
  { question: "WWI started in which year?", answer: "1914", subject: "History" },
  { question: "WWII started in which year?", answer: "1939", subject: "History" },
  { question: "Who started Protestant Reformation?", answer: "Martin Luther", subject: "History" },
  { question: "Napoleon defeated at which battle?", answer: "Waterloo", subject: "History" },
  { question: "Atomic bomb dropped on which city first?", answer: "Hiroshima", subject: "History" },
  
  // Political Science
  { question: "Which Article deals with Right to Equality?", answer: "Article 14", subject: "Pol. Science" },
  { question: "Which Article abolishes untouchability?", answer: "Article 17", subject: "Pol. Science" },
  { question: "Right to Education is in which Article?", answer: "Article 21A", subject: "Pol. Science" },
  { question: "President's Rule is under which Article?", answer: "Article 356", subject: "Pol. Science" },
  { question: "National Emergency under which Article?", answer: "Article 352", subject: "Pol. Science" },
  { question: "How many Fundamental Duties?", answer: "11", subject: "Pol. Science" },
  { question: "Constitution came into force on?", answer: "26 Jan 1950", subject: "Pol. Science" },
  { question: "Constitution adopted on?", answer: "26 Nov 1949", subject: "Pol. Science" },
  { question: "Who is Father of Indian Constitution?", answer: "Dr. Ambedkar", subject: "Pol. Science" },
  { question: "GST introduced by which Amendment?", answer: "101st", subject: "Pol. Science" },
  
  // Economics
  { question: "Full form of GDP?", answer: "Gross Domestic Product", subject: "Economics" },
  { question: "Full form of GNP?", answer: "Gross National Product", subject: "Economics" },
  { question: "LPG reforms in which year?", answer: "1991", subject: "Economics" },
  { question: "GST implemented on?", answer: "1 July 2017", subject: "Economics" },
  { question: "What is inflation?", answer: "Rise in prices", subject: "Economics" },
  { question: "Central bank of India?", answer: "RBI", subject: "Economics" },
  { question: "Full form of RBI?", answer: "Reserve Bank of India", subject: "Economics" },
  { question: "Demonetization year?", answer: "2016", subject: "Economics" },
  
  // Sociology
  { question: "Who is Father of Sociology?", answer: "Auguste Comte", subject: "Sociology" },
  { question: "Who gave concept of Sanskritization?", answer: "M.N. Srinivas", subject: "Sociology" },
  { question: "Who wrote 'Suicide'?", answer: "Durkheim", subject: "Sociology" },
  { question: "Who gave concept of 'Anomie'?", answer: "Durkheim", subject: "Sociology" },
  { question: "Who is Father of Indian Sociology?", answer: "G.S. Ghurye", subject: "Sociology" },
  { question: "Who gave concept of 'Social Action'?", answer: "Max Weber", subject: "Sociology" },
  
  // Psychology
  { question: "Who is Father of Psychoanalysis?", answer: "Sigmund Freud", subject: "Psychology" },
  { question: "Who discovered Classical Conditioning?", answer: "Pavlov", subject: "Psychology" },
  { question: "Who gave Hierarchy of Needs?", answer: "Maslow", subject: "Psychology" },
  { question: "How many levels in Maslow's pyramid?", answer: "5", subject: "Psychology" },
  { question: "IQ formula: MA/CA × ?", answer: "100", subject: "Psychology" },
  { question: "Who gave Operant Conditioning?", answer: "Skinner", subject: "Psychology" },
  { question: "What does IQ stand for?", answer: "Intelligence Quotient", subject: "Psychology" },
  
  // Hindi
  { question: "गोदान के लेखक?", answer: "प्रेमचंद", subject: "Hindi" },
  { question: "राष्ट्रकवि कौन?", answer: "मैथिलीशरण गुप्त", subject: "Hindi" },
  { question: "मधुशाला के लेखक?", answer: "बच्चन", subject: "Hindi" },
  { question: "उपन्यास सम्राट कौन?", answer: "प्रेमचंद", subject: "Hindi" },
  { question: "'उसने कहा था' के लेखक?", answer: "गुलेरी", subject: "Hindi" },
  
  // Geography
  { question: "Longest river in India?", answer: "Ganga", subject: "Geography" },
  { question: "Western Ghats also called?", answer: "Sahyadri", subject: "Geography" },
  { question: "Black soil best for which crop?", answer: "Cotton", subject: "Geography" },
  { question: "Highest peak in India?", answer: "K2/Godwin Austen", subject: "Geography" },
  { question: "India's largest state by area?", answer: "Rajasthan", subject: "Geography" }
];

const OneMinuteChallenge: React.FC<OneMinuteChallenge> = ({ onClose }) => {
  const [gameState, setGameState] = useState<'ready' | 'playing' | 'finished'>('ready');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  // Shuffle questions on start
  const startGame = () => {
    const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(60);
    setUserAnswer('');
    setShowResult(false);
    setAnsweredCount(0);
    setStreak(0);
    setBestStreak(0);
    setGameState('playing');
  };

  // Timer
  useEffect(() => {
    if (gameState !== 'playing' || timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameState('finished');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  const checkAnswer = () => {
    if (!userAnswer.trim()) return;
    
    const question = shuffledQuestions[currentQuestion];
    const correct = question.answer.toLowerCase().includes(userAnswer.toLowerCase().trim()) ||
                   userAnswer.toLowerCase().trim().includes(question.answer.toLowerCase());
    
    setIsCorrect(correct);
    setShowResult(true);
    setAnsweredCount(prev => prev + 1);
    
    if (correct) {
      setScore(prev => prev + 1);
      setStreak(prev => {
        const newStreak = prev + 1;
        if (newStreak > bestStreak) setBestStreak(newStreak);
        return newStreak;
      });
    } else {
      setStreak(0);
    }

    setTimeout(() => {
      setShowResult(false);
      setUserAnswer('');
      if (currentQuestion < shuffledQuestions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        // Reshuffle if we run out of questions
        setShuffledQuestions(prev => [...prev].sort(() => Math.random() - 0.5));
        setCurrentQuestion(0);
      }
    }, 800);
  };

  const skipQuestion = () => {
    setStreak(0);
    setUserAnswer('');
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShuffledQuestions(prev => [...prev].sort(() => Math.random() - 0.5));
      setCurrentQuestion(0);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !showResult) {
      checkAnswer();
    }
  };

  if (gameState === 'ready') {
    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
        <div className="bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 rounded-2xl w-full max-w-md p-6 text-center">
          <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">1 Minute Challenge</h2>
          <p className="text-orange-200 mb-6">Answer as many questions as you can in 60 seconds!</p>
          
          <div className="bg-black/30 rounded-xl p-4 mb-6 text-left">
            <h3 className="text-yellow-300 font-semibold mb-2">Rules:</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>⚡ Type your answer quickly</li>
              <li>⏱️ Press Enter to submit</li>
              <li>🔥 Build streaks for more points</li>
              <li>⏭️ Skip if you don't know</li>
            </ul>
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={startGame}
              className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105"
            >
              <Flame className="w-5 h-5" />
              Start Challenge!
            </button>
            <button
              onClick={onClose}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'finished') {
    const percentage = answeredCount > 0 ? Math.round((score / answeredCount) * 100) : 0;
    let message = '';
    let emoji = '';
    
    if (score >= 20) { message = 'LEGENDARY! 🔥'; emoji = '🏆'; }
    else if (score >= 15) { message = 'Amazing! 🌟'; emoji = '⭐'; }
    else if (score >= 10) { message = 'Great job! 👍'; emoji = '🎯'; }
    else if (score >= 5) { message = 'Good effort! 💪'; emoji = '📚'; }
    else { message = 'Keep practicing! 📖'; emoji = '🌱'; }

    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
        <div className="bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 rounded-2xl w-full max-w-md p-6 text-center">
          <div className="text-6xl mb-4">{emoji}</div>
          <h2 className="text-2xl font-bold text-white mb-2">Time's Up!</h2>
          <p className="text-xl text-yellow-300 mb-4">{message}</p>
          
          <div className="bg-black/30 rounded-xl p-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-4xl font-bold text-white">{score}</p>
                <p className="text-gray-400 text-sm">Correct</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">{answeredCount}</p>
                <p className="text-gray-400 text-sm">Attempted</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-green-400">{percentage}%</p>
                <p className="text-gray-400 text-sm">Accuracy</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-orange-400">{bestStreak}</p>
                <p className="text-gray-400 text-sm">Best Streak</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={startGame}
              className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-bold transition-all"
            >
              <RefreshCw className="w-5 h-5" />
              Play Again
            </button>
            <button
              onClick={onClose}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = shuffledQuestions[currentQuestion];

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 rounded-2xl w-full max-w-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className={`text-3xl font-bold ${timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
              {timeLeft}s
            </div>
            <Clock className={`w-6 h-6 ${timeLeft <= 10 ? 'text-red-400' : 'text-orange-300'}`} />
          </div>
          <div className="flex items-center gap-4">
            {streak >= 3 && (
              <div className="flex items-center gap-1 bg-orange-500/30 px-2 py-1 rounded-full">
                <Flame className="w-4 h-4 text-orange-400" />
                <span className="text-orange-300 text-sm font-bold">{streak}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-bold">{score}</span>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="h-2 bg-black/30 rounded-full mb-6 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-1000"
            style={{ width: `${(timeLeft / 60) * 100}%` }}
          />
        </div>

        {/* Question */}
        <div className="bg-black/30 rounded-xl p-4 mb-4">
          <span className="bg-purple-500/30 text-purple-300 px-2 py-0.5 rounded text-xs mb-2 inline-block">
            {question.subject}
          </span>
          <h3 className="text-xl font-semibold text-white">
            {question.question}
          </h3>
        </div>

        {/* Answer Input */}
        <div className="relative mb-4">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your answer..."
            disabled={showResult}
            autoFocus
            className={`w-full bg-white/10 border-2 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-colors ${
              showResult 
                ? (isCorrect ? 'border-green-500 bg-green-500/20' : 'border-red-500 bg-red-500/20')
                : 'border-white/20 focus:border-orange-500'
            }`}
          />
          {showResult && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {isCorrect ? (
                <CheckCircle className="w-6 h-6 text-green-400" />
              ) : (
                <XCircle className="w-6 h-6 text-red-400" />
              )}
            </div>
          )}
        </div>

        {/* Show correct answer if wrong */}
        {showResult && !isCorrect && (
          <div className="bg-yellow-500/20 rounded-lg p-2 mb-4 text-center">
            <span className="text-yellow-300 text-sm">Correct: </span>
            <span className="text-white font-bold">{question.answer}</span>
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={checkAnswer}
            disabled={showResult || !userAnswer.trim()}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:opacity-50 text-white px-4 py-3 rounded-xl font-bold transition-all"
          >
            <Target className="w-5 h-5" />
            Submit
          </button>
          <button
            onClick={skipQuestion}
            disabled={showResult}
            className="px-4 py-3 bg-gray-600 hover:bg-gray-700 disabled:opacity-50 text-white rounded-xl transition-colors"
          >
            Skip →
          </button>
        </div>

        {/* Stats */}
        <div className="mt-4 flex justify-center gap-6 text-sm text-gray-400">
          <span>Attempted: {answeredCount}</span>
          <span>Accuracy: {answeredCount > 0 ? Math.round((score / answeredCount) * 100) : 0}%</span>
        </div>
      </div>
    </div>
  );
};

export default OneMinuteChallenge;
