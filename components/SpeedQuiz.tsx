import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, Trophy, Clock, Zap, Star, Target, ArrowRight, CheckCircle, XCircle, SkipForward } from 'lucide-react';

interface SpeedQuizProps {
  onClose: () => void;
}

interface Question {
  id: string;
  subject: string;
  question: string;
  questionHindi?: string;
  options: string[];
  correct: number;
  explanation?: string;
  timeLimit: number; // seconds
}

const SpeedQuiz: React.FC<SpeedQuizProps> = ({ onClose }) => {
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'result'>('menu');
  const [selectedSubject, setSelectedSubject] = useState<string>('mixed');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [answers, setAnswers] = useState<{ correct: boolean; time: number }[]>([]);
  const [gameQuestions, setGameQuestions] = useState<Question[]>([]);

  const subjects = [
    { id: 'mixed', name: 'Mixed (All)', icon: '🎯', color: 'purple' },
    { id: 'english', name: 'English', icon: '📖', color: 'blue' },
    { id: 'hindi', name: 'Hindi', icon: '📚', color: 'orange' },
    { id: 'history', name: 'History', icon: '🏛️', color: 'amber' },
    { id: 'politics', name: 'Pol Science', icon: '⚖️', color: 'red' },
    { id: 'economics', name: 'Economics', icon: '💰', color: 'green' }
  ];

  const allQuestions: Question[] = [
    // English Questions
    {
      id: 'e1', subject: 'english', question: 'Who is the author of "On Saying Please"?',
      options: ['A.G. Gardiner', 'R.K. Narayan', 'Charles Dickens', 'William Shakespeare'],
      correct: 0, timeLimit: 12, explanation: 'A.G. Gardiner wrote this essay on courtesy and manners.'
    },
    {
      id: 'e2', subject: 'english', question: 'What is the figure of speech in "O Wind, Where have you been"?',
      options: ['Simile', 'Metaphor', 'Apostrophe', 'Hyperbole'],
      correct: 2, timeLimit: 15, explanation: 'Apostrophe - addressing something non-human or absent.'
    },
    {
      id: 'e3', subject: 'english', question: '"To kill two birds with one stone" is:',
      options: ['A Proverb', 'An Idiom', 'A Phrase', 'A Clause'],
      correct: 1, timeLimit: 10
    },
    {
      id: 'e4', subject: 'english', question: 'The synonym of "Adversity" is:',
      options: ['Prosperity', 'Hardship', 'Success', 'Joy'],
      correct: 1, timeLimit: 10
    },
    {
      id: 'e5', subject: 'english', question: 'What is the antonym of "Benevolent"?',
      options: ['Kind', 'Malevolent', 'Generous', 'Charitable'],
      correct: 1, timeLimit: 10
    },
    // Hindi Questions
    {
      id: 'h1', subject: 'hindi', question: '"कर्मभूमि" उपन्यास के लेखक कौन हैं?',
      options: ['जयशंकर प्रसाद', 'प्रेमचंद', 'हजारी प्रसाद द्विवेदी', 'महादेवी वर्मा'],
      correct: 1, timeLimit: 12, explanation: 'प्रेमचंद ने कर्मभूमि उपन्यास लिखा है।'
    },
    {
      id: 'h2', subject: 'hindi', question: '"चौपाई" छंद में कितनी मात्राएँ होती हैं?',
      options: ['13', '16', '24', '28'],
      correct: 1, timeLimit: 12, explanation: 'चौपाई में प्रत्येक चरण में 16 मात्राएँ होती हैं।'
    },
    {
      id: 'h3', subject: 'hindi', question: '"आँखों का तारा होना" मुहावरे का अर्थ है:',
      options: ['आँख में दर्द होना', 'बहुत प्यारा होना', 'तारे देखना', 'रात होना'],
      correct: 1, timeLimit: 10
    },
    {
      id: 'h4', subject: 'hindi', question: '"रस" के कितने प्रकार होते हैं?',
      options: ['6', '8', '9', '11'],
      correct: 2, timeLimit: 10, explanation: 'नौ रस हैं: शृंगार, हास्य, करुण, रौद्र, वीर, भयानक, बीभत्स, अद्भुत, शांत'
    },
    {
      id: 'h5', subject: 'hindi', question: '"संचारी भाव" की संख्या कितनी है?',
      options: ['8', '9', '33', '108'],
      correct: 2, timeLimit: 12
    },
    // History Questions
    {
      id: 'hi1', subject: 'history', question: 'When did the French Revolution begin?',
      questionHindi: 'फ्रांसीसी क्रांति कब शुरू हुई?',
      options: ['1776', '1789', '1799', '1804'],
      correct: 1, timeLimit: 10, explanation: 'The French Revolution began on July 14, 1789 with the storming of Bastille.'
    },
    {
      id: 'hi2', subject: 'history', question: 'Who wrote "Das Kapital"?',
      questionHindi: '"दास कैपिटल" किसने लिखी?',
      options: ['Lenin', 'Karl Marx', 'Adam Smith', 'Engels'],
      correct: 1, timeLimit: 10
    },
    {
      id: 'hi3', subject: 'history', question: 'The Treaty of Versailles was signed in which year?',
      options: ['1918', '1919', '1920', '1921'],
      correct: 1, timeLimit: 12, explanation: 'Treaty of Versailles was signed on June 28, 1919 ending World War I.'
    },
    {
      id: 'hi4', subject: 'history', question: 'Who was the first Governor General of Independent India?',
      options: ['Dr. Rajendra Prasad', 'Jawaharlal Nehru', 'Lord Mountbatten', 'C. Rajagopalachari'],
      correct: 2, timeLimit: 12
    },
    {
      id: 'hi5', subject: 'history', question: 'The Quit India Movement was launched in:',
      options: ['1940', '1942', '1944', '1946'],
      correct: 1, timeLimit: 10, explanation: 'Quit India Movement started on August 8, 1942.'
    },
    // Political Science Questions
    {
      id: 'p1', subject: 'politics', question: 'How many Fundamental Rights are mentioned in the Indian Constitution?',
      options: ['5', '6', '7', '8'],
      correct: 1, timeLimit: 12, explanation: 'Six Fundamental Rights: Right to Equality, Freedom, Against Exploitation, Religion, Cultural & Educational, Constitutional Remedies.'
    },
    {
      id: 'p2', subject: 'politics', question: 'Article 21 of Indian Constitution deals with:',
      options: ['Right to Equality', 'Right to Life', 'Right to Freedom', 'Right to Education'],
      correct: 1, timeLimit: 12
    },
    {
      id: 'p3', subject: 'politics', question: 'Who is the Chairman of Rajya Sabha?',
      options: ['President', 'Vice President', 'Prime Minister', 'Speaker'],
      correct: 1, timeLimit: 10
    },
    {
      id: 'p4', subject: 'politics', question: 'The Preamble of Constitution starts with:',
      options: ['We, the Citizens', 'We, the People', 'We, the Government', 'We, the Nation'],
      correct: 1, timeLimit: 10
    },
    {
      id: 'p5', subject: 'politics', question: 'Who appoints the Chief Election Commissioner?',
      options: ['Parliament', 'Prime Minister', 'President', 'Chief Justice'],
      correct: 2, timeLimit: 12
    },
    // Economics Questions
    {
      id: 'ec1', subject: 'economics', question: 'GDP stands for:',
      options: ['Gross Domestic Product', 'General Development Plan', 'Government Development Program', 'Gross Development Price'],
      correct: 0, timeLimit: 10
    },
    {
      id: 'ec2', subject: 'economics', question: 'Who is the Governor of RBI (as of 2024)?',
      options: ['Urjit Patel', 'Raghuram Rajan', 'Shaktikanta Das', 'D. Subbarao'],
      correct: 2, timeLimit: 12
    },
    {
      id: 'ec3', subject: 'economics', question: 'What is the full form of GST?',
      options: ['Goods and Services Tax', 'General Sales Tax', 'Government Service Tax', 'Gross Service Tax'],
      correct: 0, timeLimit: 10
    },
    {
      id: 'ec4', subject: 'economics', question: 'Fiscal Policy is related to:',
      options: ['Banking', 'Taxation & Expenditure', 'Money Supply', 'Foreign Trade'],
      correct: 1, timeLimit: 12
    },
    {
      id: 'ec5', subject: 'economics', question: 'Which sector contributes maximum to India\'s GDP?',
      options: ['Agriculture', 'Industry', 'Services', 'Mining'],
      correct: 2, timeLimit: 12
    }
  ];

  const startGame = () => {
    let questions: Question[];
    if (selectedSubject === 'mixed') {
      // Get 2-3 from each subject for mixed
      const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
      questions = shuffled.slice(0, 15);
    } else {
      questions = allQuestions
        .filter(q => q.subject === selectedSubject)
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);
    }
    
    setGameQuestions(questions);
    setCurrentQuestion(0);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setTotalTime(0);
    setAnswers([]);
    setTimeLeft(questions[0]?.timeLimit || 15);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setGameState('playing');
  };

  useEffect(() => {
    if (gameState !== 'playing' || isPaused || showExplanation) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
      setTotalTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, isPaused, showExplanation, currentQuestion]);

  const handleTimeout = () => {
    setSelectedAnswer(-1);
    setShowExplanation(true);
    setStreak(0);
    setAnswers([...answers, { correct: false, time: gameQuestions[currentQuestion].timeLimit }]);
  };

  const handleAnswer = (answerIdx: number) => {
    if (selectedAnswer !== null) return;

    const question = gameQuestions[currentQuestion];
    const isCorrect = answerIdx === question.correct;
    const timeTaken = question.timeLimit - timeLeft;

    setSelectedAnswer(answerIdx);
    setShowExplanation(true);
    setAnswers([...answers, { correct: isCorrect, time: timeTaken }]);

    if (isCorrect) {
      const timeBonus = Math.floor(timeLeft * 2);
      const streakBonus = streak >= 3 ? 20 : streak >= 2 ? 10 : 0;
      setScore(prev => prev + 10 + timeBonus + streakBonus);
      setStreak(prev => prev + 1);
      setMaxStreak(prev => Math.max(prev, streak + 1));
    } else {
      setStreak(0);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 >= gameQuestions.length) {
      setGameState('result');
    } else {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setTimeLeft(gameQuestions[currentQuestion + 1].timeLimit);
    }
  };

  const skipQuestion = () => {
    setStreak(0);
    setAnswers([...answers, { correct: false, time: 0 }]);
    nextQuestion();
  };

  const getGrade = () => {
    const percentage = (answers.filter(a => a.correct).length / gameQuestions.length) * 100;
    if (percentage >= 90) return { grade: 'A+', emoji: '🏆', message: 'Outstanding!' };
    if (percentage >= 80) return { grade: 'A', emoji: '⭐', message: 'Excellent!' };
    if (percentage >= 70) return { grade: 'B', emoji: '👍', message: 'Great job!' };
    if (percentage >= 60) return { grade: 'C', emoji: '💪', message: 'Good effort!' };
    return { grade: 'D', emoji: '📚', message: 'Keep practicing!' };
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen py-6 px-4">
        <div className="max-w-2xl mx-auto bg-slate-900 rounded-3xl shadow-2xl border border-slate-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-4xl">⚡</div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Speed Quiz</h2>
                  <p className="text-purple-100 text-sm mt-1">
                    Race Against Time!
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="text-white" size={24} />
              </button>
            </div>
          </div>

          {/* Menu State */}
          {gameState === 'menu' && (
            <div className="p-6 space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Select Subject</h3>
                <p className="text-slate-400 text-sm">Quick questions to test your knowledge</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {subjects.map(sub => (
                  <button
                    key={sub.id}
                    onClick={() => setSelectedSubject(sub.id)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedSubject === sub.id
                        ? 'border-purple-500 bg-purple-500/20'
                        : 'border-slate-700 bg-slate-800 hover:border-slate-600'
                    }`}
                  >
                    <div className="text-3xl mb-2">{sub.icon}</div>
                    <div className="text-white font-medium">{sub.name}</div>
                  </button>
                ))}
              </div>

              <div className="bg-slate-800 rounded-xl p-4 space-y-2">
                <h4 className="text-white font-medium flex items-center gap-2">
                  <Target size={18} /> Rules
                </h4>
                <ul className="text-slate-400 text-sm space-y-1">
                  <li>• Answer before time runs out</li>
                  <li>• Faster answers = More points</li>
                  <li>• Streak bonus for consecutive correct answers</li>
                  <li>• 10 base points + time bonus per question</li>
                </ul>
              </div>

              <button
                onClick={startGame}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Play size={24} /> Start Quiz
              </button>
            </div>
          )}

          {/* Playing State */}
          {gameState === 'playing' && gameQuestions.length > 0 && (
            <div className="p-4">
              {/* Game Stats */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <span className="text-white font-bold">
                    {currentQuestion + 1}/{gameQuestions.length}
                  </span>
                  <span className="text-yellow-400 flex items-center gap-1">
                    <Star size={16} /> {score}
                  </span>
                  {streak >= 2 && (
                    <span className="text-orange-400 flex items-center gap-1 animate-pulse">
                      🔥 x{streak}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600"
                  >
                    {isPaused ? <Play size={18} className="text-white" /> : <Pause size={18} className="text-white" />}
                  </button>
                </div>
              </div>

              {/* Timer Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-slate-400">Time</span>
                  <span className={`font-bold ${timeLeft <= 5 ? 'text-red-400' : 'text-white'}`}>
                    {timeLeft}s
                  </span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-1000 ${
                      timeLeft <= 5 ? 'bg-red-500' : timeLeft <= 10 ? 'bg-yellow-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${(timeLeft / gameQuestions[currentQuestion].timeLimit) * 100}%` }}
                  />
                </div>
              </div>

              {/* Paused Overlay */}
              {isPaused && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-10 rounded-3xl">
                  <div className="text-center">
                    <Pause size={48} className="text-white mx-auto mb-4" />
                    <p className="text-white text-xl font-bold">Paused</p>
                    <button
                      onClick={() => setIsPaused(false)}
                      className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-lg"
                    >
                      Resume
                    </button>
                  </div>
                </div>
              )}

              {/* Question */}
              <div className="bg-slate-800 rounded-xl p-4 mb-4">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs mb-3 inline-block">
                  {gameQuestions[currentQuestion].subject.charAt(0).toUpperCase() + gameQuestions[currentQuestion].subject.slice(1)}
                </span>
                <h3 className="text-white text-lg font-medium">
                  {gameQuestions[currentQuestion].question}
                </h3>
                {gameQuestions[currentQuestion].questionHindi && (
                  <p className="text-slate-400 text-sm mt-1">
                    {gameQuestions[currentQuestion].questionHindi}
                  </p>
                )}
              </div>

              {/* Options */}
              <div className="space-y-2 mb-4">
                {gameQuestions[currentQuestion].options.map((option, idx) => {
                  let bgClass = 'bg-slate-800 hover:bg-slate-700 border-slate-700';
                  if (selectedAnswer !== null) {
                    if (idx === gameQuestions[currentQuestion].correct) {
                      bgClass = 'bg-green-500/20 border-green-500';
                    } else if (idx === selectedAnswer && selectedAnswer !== gameQuestions[currentQuestion].correct) {
                      bgClass = 'bg-red-500/20 border-red-500';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      disabled={selectedAnswer !== null}
                      className={`w-full p-3 rounded-xl border-2 text-left transition-all ${bgClass}`}
                    >
                      <span className="text-white flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-sm">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        {option}
                        {selectedAnswer !== null && idx === gameQuestions[currentQuestion].correct && (
                          <CheckCircle size={18} className="ml-auto text-green-400" />
                        )}
                        {selectedAnswer === idx && idx !== gameQuestions[currentQuestion].correct && (
                          <XCircle size={18} className="ml-auto text-red-400" />
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next */}
              {showExplanation && (
                <div className="space-y-3">
                  {gameQuestions[currentQuestion].explanation && (
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3">
                      <p className="text-blue-300 text-sm">
                        💡 {gameQuestions[currentQuestion].explanation}
                      </p>
                    </div>
                  )}
                  <button
                    onClick={nextQuestion}
                    className="w-full py-3 bg-purple-500 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-purple-600"
                  >
                    {currentQuestion + 1 >= gameQuestions.length ? 'See Results' : 'Next Question'}
                    <ArrowRight size={18} />
                  </button>
                </div>
              )}

              {/* Skip Button */}
              {!showExplanation && (
                <button
                  onClick={skipQuestion}
                  className="w-full py-2 text-slate-400 hover:text-white text-sm flex items-center justify-center gap-1"
                >
                  <SkipForward size={14} /> Skip
                </button>
              )}
            </div>
          )}

          {/* Result State */}
          {gameState === 'result' && (
            <div className="p-6 text-center">
              <div className="text-6xl mb-4">{getGrade().emoji}</div>
              <h3 className="text-3xl font-bold text-white mb-2">{getGrade().message}</h3>
              <div className="text-5xl font-bold text-purple-400 mb-2">{getGrade().grade}</div>

              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="bg-slate-800 rounded-xl p-4">
                  <div className="text-2xl font-bold text-yellow-400">{score}</div>
                  <div className="text-slate-400 text-sm">Total Score</div>
                </div>
                <div className="bg-slate-800 rounded-xl p-4">
                  <div className="text-2xl font-bold text-green-400">
                    {answers.filter(a => a.correct).length}/{gameQuestions.length}
                  </div>
                  <div className="text-slate-400 text-sm">Correct</div>
                </div>
                <div className="bg-slate-800 rounded-xl p-4">
                  <div className="text-2xl font-bold text-orange-400">{maxStreak}</div>
                  <div className="text-slate-400 text-sm">Best Streak</div>
                </div>
                <div className="bg-slate-800 rounded-xl p-4">
                  <div className="text-2xl font-bold text-blue-400">
                    {Math.round(totalTime / gameQuestions.length)}s
                  </div>
                  <div className="text-slate-400 text-sm">Avg Time</div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setGameState('menu')}
                  className="flex-1 py-3 bg-slate-700 text-white rounded-xl font-medium hover:bg-slate-600"
                >
                  Change Subject
                </button>
                <button
                  onClick={startGame}
                  className="flex-1 py-3 bg-purple-500 text-white rounded-xl font-medium hover:bg-purple-600 flex items-center justify-center gap-2"
                >
                  <RotateCcw size={18} /> Play Again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpeedQuiz;
