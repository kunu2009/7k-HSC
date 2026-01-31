import React, { useState, useEffect } from 'react';
import { X, Trophy, Clock, CheckCircle, XCircle, ChevronRight, RotateCcw, Zap, Target, Award } from 'lucide-react';

interface ArtsMasterQuizProps {
  onClose: () => void;
}

const ArtsMasterQuiz: React.FC<ArtsMasterQuizProps> = ({ onClose }) => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizMode, setQuizMode] = useState<'practice' | 'timed' | 'rapid'>('practice');
  const [streak, setStreak] = useState(0);

  const subjects = [
    { id: 'history', name: 'History', icon: '📜', color: 'orange', questions: 15 },
    { id: 'geography', name: 'Geography', icon: '🌍', color: 'emerald', questions: 15 },
    { id: 'economics', name: 'Economics', icon: '📊', color: 'indigo', questions: 15 },
    { id: 'polsci', name: 'Political Science', icon: '⚖️', color: 'red', questions: 15 },
    { id: 'mixed', name: 'Mixed (All)', icon: '🎯', color: 'purple', questions: 20 },
  ];

  const allQuestions: Record<string, { question: string; options: string[]; correct: number; explanation: string }[]> = {
    history: [
      { question: 'Where did the Renaissance begin?', options: ['France', 'Italy', 'England', 'Germany'], correct: 1, explanation: 'Renaissance started in Italy in the 14th century.' },
      { question: 'Who invented the Printing Press?', options: ['Caxton', 'Gutenberg', 'Bell', 'Edison'], correct: 1, explanation: 'Johannes Gutenberg invented it in 1440.' },
      { question: 'Vasco da Gama reached India in which year?', options: ['1492', '1498', '1500', '1510'], correct: 1, explanation: 'He landed at Calicut in 1498.' },
      { question: 'Industrial Revolution started in which country?', options: ['USA', 'France', 'Germany', 'England'], correct: 3, explanation: 'It began in England in the mid-18th century.' },
      { question: 'Who proposed the Heliocentric Theory?', options: ['Galileo', 'Newton', 'Copernicus', 'Kepler'], correct: 2, explanation: 'Copernicus proposed that the Sun is at the center.' },
      { question: 'The Cold War was between?', options: ['USA & China', 'USA & USSR', 'UK & Germany', 'France & Russia'], correct: 1, explanation: 'Ideological conflict between USA and USSR (1947-1991).' },
      { question: 'When did World War I begin?', options: ['1912', '1914', '1916', '1918'], correct: 1, explanation: 'WWI began in 1914 after assassination of Archduke Franz Ferdinand.' },
      { question: 'Who discovered America?', options: ['Magellan', 'Columbus', 'Vasco da Gama', 'Cook'], correct: 1, explanation: 'Christopher Columbus in 1492.' },
      { question: 'Treaty of Versailles was signed in?', options: ['1918', '1919', '1920', '1945'], correct: 1, explanation: 'Signed in 1919, ending World War I.' },
      { question: 'Non-Aligned Movement was founded in?', options: ['1955', '1961', '1971', '1991'], correct: 1, explanation: 'NAM was founded at Belgrade Conference in 1961.' },
    ],
    geography: [
      { question: 'Population density is measured as?', options: ['Persons per km', 'Persons per sq km', 'Families per km', 'Houses per sq km'], correct: 1, explanation: 'Density = Population / Area (sq km).' },
      { question: 'Which state has highest population density in India?', options: ['UP', 'Bihar', 'West Bengal', 'Kerala'], correct: 1, explanation: 'Bihar has 1106 persons per sq km (2011).' },
      { question: 'HDI stands for?', options: ['Human Development Index', 'High Development Indicator', 'Human Density Index', 'Household Development Index'], correct: 0, explanation: 'Human Development Index measures development.' },
      { question: 'Sex ratio in India (2011) was?', options: ['920', '940', '960', '980'], correct: 1, explanation: '940 females per 1000 males.' },
      { question: 'Primary activities include?', options: ['Manufacturing', 'Services', 'Agriculture', 'Banking'], correct: 2, explanation: 'Agriculture, mining, fishing are primary activities.' },
      { question: 'Quaternary activities deal with?', options: ['Farming', 'Manufacturing', 'Trade', 'Knowledge'], correct: 3, explanation: 'Research, education, IT are quaternary.' },
      { question: 'India\'s literacy rate (2011) was approximately?', options: ['64%', '74%', '84%', '94%'], correct: 1, explanation: 'India had 74.04% literacy in 2011.' },
      { question: 'Urban population of world is approximately?', options: ['35%', '45%', '55%', '65%'], correct: 2, explanation: 'Over 55% of world lives in urban areas.' },
      { question: 'Push factor of migration is?', options: ['Better jobs', 'Education', 'Poverty', 'Healthcare'], correct: 2, explanation: 'Poverty pushes people to migrate.' },
      { question: 'Which is not a landlocked country?', options: ['Nepal', 'Bhutan', 'Bangladesh', 'Afghanistan'], correct: 2, explanation: 'Bangladesh has Bay of Bengal coastline.' },
    ],
    economics: [
      { question: 'GDP formula (Expenditure method)?', options: ['C+I+G', 'C+I+G+(X-M)', 'W+R+I+P', 'TR-TC'], correct: 1, explanation: 'GDP = Consumption + Investment + Govt + Net Exports.' },
      { question: 'Elasticity of demand measures?', options: ['Price level', 'Responsiveness', 'Total revenue', 'Profit'], correct: 1, explanation: 'It measures how demand responds to price change.' },
      { question: 'Break-even point is when?', options: ['TR > TC', 'TR < TC', 'TR = TC', 'MR = MC'], correct: 2, explanation: 'No profit no loss when Total Revenue = Total Cost.' },
      { question: 'Money multiplier formula?', options: ['1/CRR', 'CRR × Deposits', '1/SLR', 'SLR × CRR'], correct: 0, explanation: 'Money Multiplier = 1/Cash Reserve Ratio.' },
      { question: 'Perfect competition has?', options: ['Few sellers', 'One seller', 'Many sellers', 'Two sellers'], correct: 2, explanation: 'Many buyers and sellers with homogeneous products.' },
      { question: 'Monopoly means?', options: ['Many sellers', 'Single seller', 'Two sellers', 'Few sellers'], correct: 1, explanation: 'Single seller controls the entire market.' },
      { question: 'Central bank of India is?', options: ['SBI', 'RBI', 'SEBI', 'NABARD'], correct: 1, explanation: 'Reserve Bank of India is the central bank.' },
      { question: 'Which is not a function of money?', options: ['Medium of exchange', 'Store of value', 'Credit creation', 'Unit of account'], correct: 2, explanation: 'Credit creation is done by commercial banks.' },
      { question: 'Opportunity cost refers to?', options: ['Actual cost', 'Next best alternative', 'Fixed cost', 'Variable cost'], correct: 1, explanation: 'Value of next best alternative foregone.' },
      { question: 'Marginal cost is?', options: ['Total cost / Quantity', 'Change in TC / Change in Q', 'Fixed cost', 'Average cost'], correct: 1, explanation: 'MC = ΔTC / ΔQ.' },
    ],
    polsci: [
      { question: 'India became Republic on?', options: ['15 Aug 1947', '26 Jan 1950', '26 Nov 1949', '26 Jan 1947'], correct: 1, explanation: 'Constitution came into effect on 26 Jan 1950.' },
      { question: 'Fundamental Rights are in which Part?', options: ['Part II', 'Part III', 'Part IV', 'Part V'], correct: 1, explanation: 'Part III contains Fundamental Rights (Articles 12-35).' },
      { question: 'DPSP are in?', options: ['Part III', 'Part IV', 'Part V', 'Part VI'], correct: 1, explanation: 'Part IV contains Directive Principles.' },
      { question: 'How many Fundamental Duties?', options: ['10', '11', '12', '14'], correct: 1, explanation: '11 Fundamental Duties in Article 51A.' },
      { question: 'UN has how many member states?', options: ['190', '193', '195', '200'], correct: 1, explanation: '193 member states as of now.' },
      { question: 'UNSC has how many permanent members?', options: ['3', '4', '5', '6'], correct: 2, explanation: 'P5: USA, UK, France, Russia, China.' },
      { question: 'SAARC was founded in?', options: ['1980', '1985', '1990', '1995'], correct: 1, explanation: 'SAARC was founded in 1985.' },
      { question: 'G20 India summit was held in?', options: ['2021', '2022', '2023', '2024'], correct: 2, explanation: 'India hosted G20 summit in 2023.' },
      { question: 'RTI Act was passed in?', options: ['2000', '2005', '2010', '2015'], correct: 1, explanation: 'Right to Information Act, 2005.' },
      { question: 'Which is not a Panchsheel principle?', options: ['Non-aggression', 'Equality', 'Military alliance', 'Peaceful coexistence'], correct: 2, explanation: 'Panchsheel promotes peace, not military alliances.' },
    ],
  };

  // Create mixed questions from all subjects
  allQuestions.mixed = [
    ...allQuestions.history.slice(0, 5),
    ...allQuestions.geography.slice(0, 5),
    ...allQuestions.economics.slice(0, 5),
    ...allQuestions.polsci.slice(0, 5),
  ].sort(() => Math.random() - 0.5);

  const questions = selectedSubject ? allQuestions[selectedSubject] || [] : [];

  useEffect(() => {
    if (selectedSubject && quizMode !== 'practice' && !isAnswered && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
    if (timeLeft === 0 && !isAnswered) {
      handleAnswer(-1); // Time's up, wrong answer
    }
  }, [selectedSubject, timeLeft, isAnswered, quizMode]);

  const handleAnswer = (answerIndex: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setTimeLeft(quizMode === 'rapid' ? 15 : 30);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setSelectedSubject(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setTimeLeft(30);
    setStreak(0);
  };

  const getGrade = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return { grade: 'A+', emoji: '🏆', message: 'Outstanding!' };
    if (percentage >= 80) return { grade: 'A', emoji: '🌟', message: 'Excellent!' };
    if (percentage >= 70) return { grade: 'B+', emoji: '👏', message: 'Very Good!' };
    if (percentage >= 60) return { grade: 'B', emoji: '👍', message: 'Good!' };
    if (percentage >= 50) return { grade: 'C', emoji: '📚', message: 'Keep Practicing!' };
    return { grade: 'D', emoji: '💪', message: 'Need Improvement' };
  };

  // Subject Selection Screen
  if (!selectedSubject) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Target size={28} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Arts Master Quiz</h2>
                  <p className="text-purple-100">Test your knowledge across all subjects</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition">
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Quiz Mode Selection */}
          <div className="p-6 border-b">
            <h3 className="font-bold text-gray-800 mb-3">Select Quiz Mode</h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'practice', name: 'Practice', icon: '📝', desc: 'No timer', time: '∞' },
                { id: 'timed', name: 'Timed', icon: '⏱️', desc: '30s per Q', time: '30s' },
                { id: 'rapid', name: 'Rapid Fire', icon: '⚡', desc: '15s per Q', time: '15s' },
              ].map(mode => (
                <button
                  key={mode.id}
                  onClick={() => setQuizMode(mode.id as any)}
                  className={`p-4 rounded-xl border-2 transition ${
                    quizMode === mode.id
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="text-2xl">{mode.icon}</span>
                  <p className="font-semibold mt-2">{mode.name}</p>
                  <p className="text-xs text-gray-500">{mode.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Subject Selection */}
          <div className="p-6">
            <h3 className="font-bold text-gray-800 mb-4">Select Subject</h3>
            <div className="grid gap-3">
              {subjects.map(subject => (
                <button
                  key={subject.id}
                  onClick={() => {
                    setSelectedSubject(subject.id);
                    setTimeLeft(quizMode === 'rapid' ? 15 : 30);
                  }}
                  className={`p-4 rounded-xl border-2 border-gray-200 hover:border-${subject.color}-400 hover:bg-${subject.color}-50 transition flex items-center justify-between group`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{subject.icon}</span>
                    <div className="text-left">
                      <p className="font-bold text-gray-800">{subject.name}</p>
                      <p className="text-sm text-gray-500">{subject.questions} questions</p>
                    </div>
                  </div>
                  <ChevronRight size={24} className="text-gray-400 group-hover:text-gray-600" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Result Screen
  if (showResult) {
    const { grade, emoji, message } = getGrade();
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 text-center">
            <div className="text-6xl mb-4">{emoji}</div>
            <h2 className="text-3xl font-bold">Quiz Complete!</h2>
            <p className="text-green-100 mt-2">{message}</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Trophy className="mx-auto text-yellow-500 mb-2" size={24} />
                <p className="text-2xl font-bold text-gray-800">{score}/{questions.length}</p>
                <p className="text-xs text-gray-500">Score</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Award className="mx-auto text-purple-500 mb-2" size={24} />
                <p className="text-2xl font-bold text-gray-800">{grade}</p>
                <p className="text-xs text-gray-500">Grade</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <Target className="mx-auto text-blue-500 mb-2" size={24} />
                <p className="text-2xl font-bold text-gray-800">{percentage}%</p>
                <p className="text-xs text-gray-500">Accuracy</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={resetQuiz}
                className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition flex items-center justify-center gap-2"
              >
                <RotateCcw size={20} />
                Try Again
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz Screen
  const currentQ = questions[currentQuestion];
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{subjects.find(s => s.id === selectedSubject)?.icon}</span>
              <span className="font-semibold">{subjects.find(s => s.id === selectedSubject)?.name}</span>
            </div>
            <div className="flex items-center gap-4">
              {quizMode !== 'practice' && (
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                  timeLeft <= 10 ? 'bg-red-500' : 'bg-white/20'
                }`}>
                  <Clock size={16} />
                  <span className="font-mono font-bold">{timeLeft}s</span>
                </div>
              )}
              {streak >= 3 && (
                <div className="flex items-center gap-1 bg-yellow-500 px-3 py-1 rounded-full">
                  <Zap size={16} />
                  <span className="font-bold">{streak}🔥</span>
                </div>
              )}
              <button onClick={onClose} className="p-1 hover:bg-white/20 rounded">
                <X size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="h-2 bg-gray-200">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>

        {/* Question */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500">Question {currentQuestion + 1} of {questions.length}</span>
            <span className="text-sm font-medium text-purple-600">Score: {score}</span>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-6">{currentQ.question}</h3>

          <div className="space-y-3">
            {currentQ.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={isAnswered}
                className={`w-full p-4 rounded-xl border-2 text-left transition ${
                  isAnswered
                    ? idx === currentQ.correct
                      ? 'border-green-500 bg-green-50 text-green-800'
                      : idx === selectedAnswer
                        ? 'border-red-500 bg-red-50 text-red-800'
                        : 'border-gray-200 bg-gray-50 text-gray-500'
                    : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    isAnswered
                      ? idx === currentQ.correct
                        ? 'bg-green-500 text-white'
                        : idx === selectedAnswer
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-200 text-gray-600'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {isAnswered && idx === currentQ.correct ? <CheckCircle size={20} /> : 
                     isAnswered && idx === selectedAnswer && idx !== currentQ.correct ? <XCircle size={20} /> :
                     String.fromCharCode(65 + idx)}
                  </span>
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Explanation */}
          {isAnswered && (
            <div className={`mt-4 p-4 rounded-xl ${
              selectedAnswer === currentQ.correct ? 'bg-green-50 border border-green-200' : 'bg-blue-50 border border-blue-200'
            }`}>
              <p className="text-sm font-medium text-gray-700">
                💡 {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <button
              onClick={nextQuestion}
              className="w-full mt-4 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition flex items-center justify-center gap-2"
            >
              {currentQuestion < questions.length - 1 ? (
                <>Next Question <ChevronRight size={20} /></>
              ) : (
                <>View Results <Trophy size={20} /></>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtsMasterQuiz;
