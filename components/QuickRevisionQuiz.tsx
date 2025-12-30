import React, { useState } from 'react';
import { X, Target, Clock, CheckCircle, AlertTriangle, Zap, Star, RefreshCw, Trophy, BookOpen } from 'lucide-react';

interface QuickRevisionQuizProps {
  onClose: () => void;
}

interface Question {
  id: number;
  subject: string;
  question: string;
  questionHindi?: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

const QUESTIONS: Question[] = [
  // History
  {
    id: 1,
    subject: "History",
    question: "When did the French Revolution begin?",
    options: ["1776", "1789", "1799", "1815"],
    correct: 1,
    explanation: "The French Revolution began in 1789 with the storming of the Bastille on July 14.",
    difficulty: "easy"
  },
  {
    id: 2,
    subject: "History",
    question: "Who led the unification of Germany?",
    options: ["Mazzini", "Garibaldi", "Bismarck", "Cavour"],
    correct: 2,
    explanation: "Otto von Bismarck, the 'Iron Chancellor' of Prussia, led the unification of Germany through 'Blood and Iron' policy.",
    difficulty: "easy"
  },
  {
    id: 3,
    subject: "History",
    question: "The Treaty of Versailles was signed in which year?",
    options: ["1918", "1919", "1920", "1921"],
    correct: 1,
    explanation: "The Treaty of Versailles was signed on June 28, 1919, ending World War I.",
    difficulty: "medium"
  },
  {
    id: 4,
    subject: "History",
    question: "Who discovered sea route to India?",
    options: ["Columbus", "Magellan", "Vasco da Gama", "Bartholomew Diaz"],
    correct: 2,
    explanation: "Vasco da Gama discovered the sea route to India in 1498, reaching Calicut.",
    difficulty: "easy"
  },
  // Political Science
  {
    id: 5,
    subject: "Political Science",
    question: "Which Article of Indian Constitution deals with Right to Equality?",
    options: ["Article 12", "Article 14", "Article 19", "Article 21"],
    correct: 1,
    explanation: "Article 14 guarantees equality before law and equal protection of laws.",
    difficulty: "easy"
  },
  {
    id: 6,
    subject: "Political Science",
    question: "How many Fundamental Duties are there in Indian Constitution?",
    options: ["9", "10", "11", "12"],
    correct: 2,
    explanation: "There are 11 Fundamental Duties in Article 51A (10 original + 1 added by 86th Amendment).",
    difficulty: "medium"
  },
  {
    id: 7,
    subject: "Political Science",
    question: "President's Rule is imposed under which Article?",
    options: ["Article 352", "Article 356", "Article 360", "Article 370"],
    correct: 1,
    explanation: "Article 356 deals with President's Rule (State Emergency) due to failure of constitutional machinery.",
    difficulty: "medium"
  },
  {
    id: 8,
    subject: "Political Science",
    question: "Who is called the 'Father of Indian Constitution'?",
    options: ["Jawaharlal Nehru", "Mahatma Gandhi", "B.R. Ambedkar", "Sardar Patel"],
    correct: 2,
    explanation: "Dr. B.R. Ambedkar is called the 'Father of Indian Constitution' as chairman of Drafting Committee.",
    difficulty: "easy"
  },
  // Economics
  {
    id: 9,
    subject: "Economics",
    question: "What is the formula for Price Elasticity of Demand?",
    options: ["% Change in Price / % Change in Quantity", "% Change in Quantity / % Change in Price", "Change in Quantity × Change in Price", "Total Revenue / Quantity"],
    correct: 1,
    explanation: "Ed = Percentage change in quantity demanded / Percentage change in price.",
    difficulty: "easy"
  },
  {
    id: 10,
    subject: "Economics",
    question: "Which type of unemployment occurs due to change of seasons?",
    options: ["Structural", "Cyclical", "Frictional", "Seasonal"],
    correct: 3,
    explanation: "Seasonal unemployment occurs in industries that depend on seasons, like agriculture and tourism.",
    difficulty: "easy"
  },
  {
    id: 11,
    subject: "Economics",
    question: "GDP at factor cost + Net Indirect Taxes = ?",
    options: ["GNP", "NNP", "GDP at Market Price", "NDP"],
    correct: 2,
    explanation: "GDP at Market Price = GDP at Factor Cost + (Indirect Taxes - Subsidies)",
    difficulty: "medium"
  },
  // English
  {
    id: 12,
    subject: "English",
    question: "Which figure of speech compares two unlike things using 'like' or 'as'?",
    options: ["Metaphor", "Simile", "Personification", "Hyperbole"],
    correct: 1,
    explanation: "Simile compares two things using 'like' or 'as'. Example: 'Life is like a box of chocolates.'",
    difficulty: "easy"
  },
  {
    id: 13,
    subject: "English",
    question: "A formal letter should NOT include:",
    options: ["Subject line", "Salutation", "Informal language", "Complimentary close"],
    correct: 2,
    explanation: "Formal letters should use formal language, not informal/colloquial expressions.",
    difficulty: "easy"
  },
  // Hindi
  {
    id: 14,
    subject: "Hindi",
    question: "'गोदान' उपन्यास के लेखक कौन हैं?",
    questionHindi: "'गोदान' उपन्यास के लेखक कौन हैं?",
    options: ["जयशंकर प्रसाद", "प्रेमचंद", "मैथिलीशरण गुप्त", "हरिवंशराय बच्चन"],
    correct: 1,
    explanation: "प्रेमचंद को 'उपन्यास सम्राट' कहा जाता है। गोदान उनका सबसे प्रसिद्ध उपन्यास है।",
    difficulty: "easy"
  },
  {
    id: 15,
    subject: "Hindi",
    question: "'राष्ट्रकवि' की उपाधि किसे दी गई?",
    options: ["सूर्यकांत त्रिपाठी निराला", "मैथिलीशरण गुप्त", "जयशंकर प्रसाद", "महादेवी वर्मा"],
    correct: 1,
    explanation: "मैथिलीशरण गुप्त को 'राष्ट्रकवि' की उपाधि दी गई। उनकी प्रसिद्ध रचना 'भारत-भारती' है।",
    difficulty: "easy"
  },
  // Geography
  {
    id: 16,
    subject: "Geography",
    question: "Which is the longest river in India?",
    options: ["Yamuna", "Godavari", "Ganga", "Brahmaputra"],
    correct: 2,
    explanation: "Ganga is the longest river in India (2525 km), originating from Gangotri glacier.",
    difficulty: "easy"
  },
  {
    id: 17,
    subject: "Geography",
    question: "Western Ghats are also known as:",
    options: ["Sahyadri", "Vindhya", "Satpura", "Aravalli"],
    correct: 0,
    explanation: "Western Ghats are locally known as Sahyadri and run parallel to western coast of India.",
    difficulty: "easy"
  },
  {
    id: 18,
    subject: "Geography",
    question: "Which soil is best for cotton cultivation?",
    options: ["Alluvial", "Red", "Black/Regur", "Laterite"],
    correct: 2,
    explanation: "Black soil (Regur) is best for cotton cultivation due to high moisture retention.",
    difficulty: "medium"
  },
  // Sociology
  {
    id: 19,
    subject: "Sociology",
    question: "Who is called the 'Father of Sociology'?",
    options: ["Max Weber", "Karl Marx", "Auguste Comte", "Emile Durkheim"],
    correct: 2,
    explanation: "Auguste Comte is called the Father of Sociology. He coined the term 'Sociology' in 1838.",
    difficulty: "easy"
  },
  {
    id: 20,
    subject: "Sociology",
    question: "Which concept was given by M.N. Srinivas?",
    options: ["Alienation", "Anomie", "Sanskritization", "Social Facts"],
    correct: 2,
    explanation: "M.N. Srinivas introduced the concept of Sanskritization to explain social mobility in caste system.",
    difficulty: "medium"
  },
  // Psychology
  {
    id: 21,
    subject: "Psychology",
    question: "Who developed Classical Conditioning theory?",
    options: ["B.F. Skinner", "Ivan Pavlov", "Sigmund Freud", "Carl Rogers"],
    correct: 1,
    explanation: "Ivan Pavlov developed Classical Conditioning through his famous dog experiment (1904).",
    difficulty: "easy"
  },
  {
    id: 22,
    subject: "Psychology",
    question: "Maslow's Hierarchy of Needs has how many levels?",
    options: ["3", "4", "5", "6"],
    correct: 2,
    explanation: "Maslow's Hierarchy has 5 levels: Physiological, Safety, Love/Belonging, Esteem, Self-actualization.",
    difficulty: "easy"
  },
  {
    id: 23,
    subject: "Psychology",
    question: "IQ formula is:",
    options: ["CA/MA × 100", "MA/CA × 100", "MA + CA", "MA - CA"],
    correct: 1,
    explanation: "IQ = Mental Age (MA) / Chronological Age (CA) × 100. Average IQ is 100.",
    difficulty: "medium"
  },
  // More History
  {
    id: 24,
    subject: "History",
    question: "Renaissance started in which country?",
    options: ["France", "Germany", "Italy", "England"],
    correct: 2,
    explanation: "Renaissance began in Italian city-states like Florence, Venice, and Rome in the 14th century.",
    difficulty: "easy"
  },
  {
    id: 25,
    subject: "History",
    question: "What does the term 'Holocaust' refer to?",
    options: ["French Revolution", "Industrial Revolution", "Nazi genocide of Jews", "Russian Revolution"],
    correct: 2,
    explanation: "Holocaust refers to the systematic genocide of 6 million Jews by Nazi Germany (1941-1945).",
    difficulty: "medium"
  }
];

const QuickRevisionQuiz: React.FC<QuickRevisionQuizProps> = ({ onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<boolean[]>(new Array(QUESTIONS.length).fill(false));
  const [quizComplete, setQuizComplete] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerActive, setTimerActive] = useState(true);

  const subjects = ['All', ...new Set(QUESTIONS.map(q => q.subject))];
  
  const filteredQuestions = selectedSubject === 'All' 
    ? QUESTIONS 
    : QUESTIONS.filter(q => q.subject === selectedSubject);

  const question = filteredQuestions[currentQuestion];

  React.useEffect(() => {
    if (timerActive && timeLeft > 0 && !showResult && !quizComplete) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleAnswer(-1); // Time up, wrong answer
    }
  }, [timeLeft, timerActive, showResult, quizComplete]);

  const handleAnswer = (index: number) => {
    if (showResult) return;
    
    setSelectedAnswer(index);
    setShowResult(true);
    setTimerActive(false);
    
    const newAnswered = [...answered];
    newAnswered[currentQuestion] = true;
    setAnswered(newAnswered);
    
    if (index === question.correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setTimeLeft(30);
      setTimerActive(true);
    } else {
      setQuizComplete(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswered(new Array(QUESTIONS.length).fill(false));
    setQuizComplete(false);
    setTimeLeft(30);
    setTimerActive(true);
  };

  const getScoreMessage = () => {
    const percentage = (score / filteredQuestions.length) * 100;
    if (percentage >= 80) return { message: "Excellent! 🎉", color: "text-green-400" };
    if (percentage >= 60) return { message: "Good job! 👍", color: "text-blue-400" };
    if (percentage >= 40) return { message: "Keep practicing! 💪", color: "text-yellow-400" };
    return { message: "Need more revision 📚", color: "text-red-400" };
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500/30 text-green-300';
      case 'medium': return 'bg-yellow-500/30 text-yellow-300';
      case 'hard': return 'bg-red-500/30 text-red-300';
      default: return 'bg-gray-500/30 text-gray-300';
    }
  };

  if (quizComplete) {
    const { message, color } = getScoreMessage();
    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
        <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl w-full max-w-lg p-6 text-center">
          <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Quiz Complete!</h2>
          <p className={`text-xl font-semibold ${color} mb-4`}>{message}</p>
          
          <div className="bg-black/30 rounded-xl p-4 mb-6">
            <p className="text-4xl font-bold text-white mb-2">
              {score} / {filteredQuestions.length}
            </p>
            <p className="text-gray-300">
              {Math.round((score / filteredQuestions.length) * 100)}% Correct
            </p>
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={restartQuiz}
              className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl transition-colors"
            >
              <RefreshCw className="w-5 h-5" />
              Try Again
            </button>
            <button
              onClick={onClose}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl w-full max-w-2xl max-h-[95vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="bg-black/30 p-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-purple-200 flex items-center gap-2">
              <Target className="w-6 h-6" />
              Quick Revision Quiz
            </h2>
            <p className="text-purple-300/70 text-sm">Test your Arts knowledge!</p>
          </div>
          <button
            onClick={onClose}
            className="text-purple-200 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Subject Filter */}
        <div className="bg-black/20 p-3 flex flex-wrap gap-2">
          {subjects.map(subj => (
            <button
              key={subj}
              onClick={() => {
                setSelectedSubject(subj);
                restartQuiz();
              }}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                selectedSubject === subj
                  ? 'bg-purple-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {subj}
            </button>
          ))}
        </div>

        {/* Progress & Timer */}
        <div className="px-4 py-2 flex justify-between items-center">
          <div className="text-sm text-gray-300">
            Question {currentQuestion + 1} / {filteredQuestions.length}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-green-400">Score: {score}</span>
            <div className={`flex items-center gap-1 ${timeLeft <= 10 ? 'text-red-400' : 'text-yellow-400'}`}>
              <Clock className="w-4 h-4" />
              <span className="font-mono">{timeLeft}s</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="px-4">
          <div className="h-2 bg-black/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-purple-500 transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / filteredQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="bg-black/20 rounded-xl p-4 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-purple-500/30 text-purple-300 px-2 py-0.5 rounded text-sm">
                {question.subject}
              </span>
              <span className={`px-2 py-0.5 rounded text-xs ${getDifficultyColor(question.difficulty)}`}>
                {question.difficulty}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">
              {question.question}
            </h3>
            {question.questionHindi && (
              <p className="text-purple-300/70 text-sm">{question.questionHindi}</p>
            )}
          </div>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => {
              let buttonClass = "bg-black/20 border-gray-600 hover:border-purple-400";
              
              if (showResult) {
                if (index === question.correct) {
                  buttonClass = "bg-green-500/20 border-green-500";
                } else if (index === selectedAnswer && index !== question.correct) {
                  buttonClass = "bg-red-500/20 border-red-500";
                }
              } else if (selectedAnswer === index) {
                buttonClass = "bg-purple-500/20 border-purple-500";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${buttonClass}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-gray-200">{option}</span>
                    {showResult && index === question.correct && (
                      <CheckCircle className="w-5 h-5 text-green-400 ml-auto" />
                    )}
                    {showResult && index === selectedAnswer && index !== question.correct && (
                      <AlertTriangle className="w-5 h-5 text-red-400 ml-auto" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showResult && (
            <div className="mt-4 bg-blue-500/10 rounded-xl p-4 border border-blue-500/30">
              <h4 className="font-semibold text-blue-300 mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Explanation
              </h4>
              <p className="text-gray-200 text-sm">{question.explanation}</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-black/30 p-4 flex justify-between items-center">
          <div className="text-sm text-purple-300/70">
            {showResult ? (selectedAnswer === question.correct ? '✅ Correct!' : '❌ Wrong!') : 'Select an answer'}
          </div>
          {showResult && (
            <button
              onClick={nextQuestion}
              className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-xl transition-colors"
            >
              {currentQuestion < filteredQuestions.length - 1 ? 'Next Question' : 'See Results'}
              <Zap className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuickRevisionQuiz;
