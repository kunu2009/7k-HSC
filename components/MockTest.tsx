import React, { useState, useEffect } from "react";
import {
  X,
  BookOpen,
  Clock,
  Target,
  CheckCircle,
  XCircle,
  RotateCcw,
  Trophy,
  Star,
  Zap,
  ArrowRight,
  Play,
  Pause,
} from "lucide-react";

interface MockTestProps {
  onClose: () => void;
}

interface Question {
  id: string;
  subject: string;
  question: string;
  questionHindi?: string;
  options: string[];
  correct: number;
  marks: number;
  difficulty: "easy" | "medium" | "hard";
}

const MockTest: React.FC<MockTestProps> = ({ onClose }) => {
  const [gameState, setGameState] = useState<
    "config" | "test" | "review" | "result"
  >("config");
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([
    "english",
    "hindi",
    "history",
  ]);
  const [questionCount, setQuestionCount] = useState(20);
  const [timeLimit, setTimeLimit] = useState(30); // minutes
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [testQuestions, setTestQuestions] = useState<Question[]>([]);
  const [showReview, setShowReview] = useState(false);

  const subjects = [
    { id: "english", name: "English", icon: "📖" },
    { id: "hindi", name: "Hindi", icon: "📚" },
    { id: "history", name: "History", icon: "🏛️" },
    { id: "politics", name: "Pol Science", icon: "⚖️" },
    { id: "economics", name: "Economics", icon: "💰" },
    { id: "sanskrit", name: "Sanskrit", icon: "📜" },
  ];

  const allQuestions: Question[] = [
    // English
    {
      id: "e1",
      subject: "english",
      question: 'The figure of speech in "O Death! Where is thy sting?" is:',
      options: ["Simile", "Metaphor", "Apostrophe", "Hyperbole"],
      correct: 2,
      marks: 1,
      difficulty: "medium",
    },
    {
      id: "e2",
      subject: "english",
      question: '"Life is a journey" is an example of:',
      options: ["Simile", "Metaphor", "Personification", "Alliteration"],
      correct: 1,
      marks: 1,
      difficulty: "easy",
    },
    {
      id: "e3",
      subject: "english",
      question: 'The synonym of "Eloquent" is:',
      options: ["Silent", "Articulate", "Dumb", "Quiet"],
      correct: 1,
      marks: 1,
      difficulty: "easy",
    },
    {
      id: "e4",
      subject: "english",
      question: 'The antonym of "Benevolent" is:',
      options: ["Kind", "Malevolent", "Generous", "Merciful"],
      correct: 1,
      marks: 1,
      difficulty: "easy",
    },
    {
      id: "e5",
      subject: "english",
      question: '"To burn the midnight oil" means:',
      options: [
        "To waste oil",
        "To work late at night",
        "To set fire",
        "To sleep late",
      ],
      correct: 1,
      marks: 1,
      difficulty: "medium",
    },
    {
      id: "e6",
      subject: "english",
      question: 'The correct passive voice of "She writes a letter" is:',
      options: [
        "A letter is written by her",
        "A letter was written by her",
        "A letter has been written",
        "A letter is being written",
      ],
      correct: 0,
      marks: 1,
      difficulty: "medium",
    },
    {
      id: "e7",
      subject: "english",
      question: 'Who wrote "On Saying Please"?',
      options: [
        "R.K. Narayan",
        "A.G. Gardiner",
        "Charles Lamb",
        "Francis Bacon",
      ],
      correct: 1,
      marks: 1,
      difficulty: "easy",
    },
    {
      id: "e8",
      subject: "english",
      question: 'The poem "Indian Weavers" is written by:',
      options: [
        "Rabindranath Tagore",
        "Sarojini Naidu",
        "Kamala Das",
        "Toru Dutt",
      ],
      correct: 1,
      marks: 1,
      difficulty: "easy",
    },

    // Hindi
    {
      id: "h1",
      subject: "hindi",
      question: '"चौपाई" छंद में प्रत्येक चरण में कितनी मात्राएँ होती हैं?',
      options: ["13", "16", "24", "28"],
      correct: 1,
      marks: 1,
      difficulty: "medium",
    },
    {
      id: "h2",
      subject: "hindi",
      question: '"श्रृंगार रस" का स्थायी भाव क्या है?',
      options: ["क्रोध", "रति", "भय", "हास"],
      correct: 1,
      marks: 1,
      difficulty: "medium",
    },
    {
      id: "h3",
      subject: "hindi",
      question: '"मुख चंद्रमा सा सुंदर है" में कौन सा अलंकार है?',
      options: ["रूपक", "उपमा", "उत्प्रेक्षा", "श्लेष"],
      correct: 1,
      marks: 1,
      difficulty: "easy",
    },
    {
      id: "h4",
      subject: "hindi",
      question: '"राजपुत्र" में कौन सा समास है?',
      options: ["द्वंद्व", "तत्पुरुष", "बहुव्रीहि", "अव्ययीभाव"],
      correct: 1,
      marks: 1,
      difficulty: "medium",
    },
    {
      id: "h5",
      subject: "hindi",
      question: '"कर्मभूमि" उपन्यास के लेखक कौन हैं?',
      options: ["जयशंकर प्रसाद", "प्रेमचंद", "हजारी प्रसाद", "महादेवी वर्मा"],
      correct: 1,
      marks: 1,
      difficulty: "easy",
    },
    {
      id: "h6",
      subject: "hindi",
      question: '"आँखों का तारा होना" मुहावरे का अर्थ है:',
      options: ["आँख में दर्द", "बहुत प्यारा होना", "तारे देखना", "अंधा होना"],
      correct: 1,
      marks: 1,
      difficulty: "easy",
    },
    {
      id: "h7",
      subject: "hindi",
      question: '"देव + आलय" की संधि होगी:',
      options: ["देवालय", "देवाआलय", "देव्यालय", "देवयालय"],
      correct: 0,
      marks: 1,
      difficulty: "easy",
    },
    {
      id: "h8",
      subject: "hindi",
      question: "संचारी भावों की संख्या कितनी है?",
      options: ["8", "9", "33", "11"],
      correct: 2,
      marks: 1,
      difficulty: "hard",
    },

    // History
    {
      id: "hi1",
      subject: "history",
      question: "The French Revolution began in which year?",
      questionHindi: "फ्रांसीसी क्रांति किस वर्ष शुरू हुई?",
      options: ["1776", "1789", "1799", "1804"],
      correct: 1,
      marks: 1,
      difficulty: "easy",
    },
    {
      id: "hi2",
      subject: "history",
      question: 'Who wrote "Das Kapital"?',
      questionHindi: '"दास कैपिटल" किसने लिखी?',
      options: ["Lenin", "Karl Marx", "Adam Smith", "Engels"],
      correct: 1,
      marks: 1,
      difficulty: "easy",
    },
    {
      id: "hi3",
      subject: "history",
      question: "The Treaty of Versailles was signed in:",
      options: ["1918", "1919", "1920", "1921"],
      correct: 1,
      marks: 1,
      difficulty: "medium",
    },
    {
      id: "hi4",
      subject: "history",
      question: 'Who was known as the "Iron Chancellor"?',
      options: ["Napoleon", "Bismarck", "Hitler", "Mussolini"],
      correct: 1,
      marks: 1,
      difficulty: "medium",
    },
    {
      id: "hi5",
      subject: "history",
      question: "The Industrial Revolution started in:",
      options: ["France", "Germany", "England", "USA"],
      correct: 2,
      marks: 1,
      difficulty: "easy",
    },
    {
      id: "hi6",
      subject: "history",
      question: "Quit India Movement was launched in:",
      options: ["1940", "1942", "1944", "1946"],
      correct: 1,
      marks: 1,
      difficulty: "easy",
    },
    {
      id: "hi7",
      subject: "history",
      question: 'Who gave the slogan "Do or Die"?',
      options: ["Nehru", "Gandhi", "Subhash Chandra Bose", "Tilak"],
      correct: 1,
      marks: 1,
      difficulty: "easy",
    },
    {
      id: "hi8",
      subject: "history",
      question: "First World War started in:",
      options: ["1912", "1914", "1916", "1918"],
      correct: 1,
      marks: 1,
      difficulty: "easy",
    },

    // Political Science
    {
      id: "p1",
      subject: "politics",
      question: "How many Fundamental Rights are in Indian Constitution?",
      options: ["5", "6", "7", "8"],
      correct: 1,
      marks: 1,
      difficulty: "easy",
    },
    {
      id: "p2",
      subject: "politics",
      question: "Article 21 deals with:",
      options: [
        "Right to Equality",
        "Right to Life",
        "Right to Freedom",
        "Right to Education",
      ],
      correct: 1,
      marks: 1,
      difficulty: "medium",
    },
    {
      id: "p3",
      subject: "politics",
      question: "Who is the Chairman of Rajya Sabha?",
      options: ["President", "Vice President", "Prime Minister", "Speaker"],
      correct: 1,
      marks: 1,
      difficulty: "easy",
    },
    {
      id: "p4",
      subject: "politics",
      question: "The Preamble starts with:",
      options: [
        "We, the Citizens",
        "We, the People",
        "We, the Government",
        "We, the Nation",
      ],
      correct: 1,
      marks: 1,
      difficulty: "easy",
    },
    {
      id: "p5",
      subject: "politics",
      question: "Which Article abolishes untouchability?",
      options: ["Article 14", "Article 17", "Article 19", "Article 21"],
      correct: 1,
      marks: 1,
      difficulty: "medium",
    },
    {
      id: "p6",
      subject: "politics",
      question: "Total seats in Lok Sabha:",
      options: ["543", "545", "550", "552"],
      correct: 0,
      marks: 1,
      difficulty: "easy",
    },
    {
      id: "p7",
      subject: "politics",
      question: "Who appoints the Chief Election Commissioner?",
      options: ["Parliament", "PM", "President", "CJI"],
      correct: 2,
      marks: 1,
      difficulty: "medium",
    },
    {
      id: "p8",
      subject: "politics",
      question: "Right to Education is under which Article?",
      options: ["21", "21A", "22", "23"],
      correct: 1,
      marks: 1,
      difficulty: "medium",
    },

    // Economics
    {
      id: "ec1",
      subject: "economics",
      question: "GDP stands for:",
      options: [
        "Gross Domestic Product",
        "General Development Plan",
        "Government Development Program",
        "Gross Development Price",
      ],
      correct: 0,
      marks: 1,
      difficulty: "easy",
    },
    {
      id: "ec2",
      subject: "economics",
      question: "Who is the Governor of RBI (2024)?",
      options: [
        "Urjit Patel",
        "Raghuram Rajan",
        "Shaktikanta Das",
        "D. Subbarao",
      ],
      correct: 2,
      marks: 1,
      difficulty: "medium",
    },
    {
      id: "ec3",
      subject: "economics",
      question: "GST was introduced in India in:",
      options: ["2015", "2016", "2017", "2018"],
      correct: 2,
      marks: 1,
      difficulty: "easy",
    },
    {
      id: "ec4",
      subject: "economics",
      question: "Fiscal Policy is related to:",
      options: [
        "Banking",
        "Taxation & Expenditure",
        "Money Supply",
        "Foreign Trade",
      ],
      correct: 1,
      marks: 1,
      difficulty: "medium",
    },
    {
      id: "ec5",
      subject: "economics",
      question: "Which sector contributes maximum to India's GDP?",
      options: ["Agriculture", "Industry", "Services", "Mining"],
      correct: 2,
      marks: 1,
      difficulty: "medium",
    },
    {
      id: "ec6",
      subject: "economics",
      question: "CRR stands for:",
      options: [
        "Cash Reserve Ratio",
        "Credit Reserve Ratio",
        "Current Reserve Ratio",
        "Capital Reserve Ratio",
      ],
      correct: 0,
      marks: 1,
      difficulty: "easy",
    },
    {
      id: "ec7",
      subject: "economics",
      question: "National Income is calculated by:",
      options: ["RBI", "NITI Aayog", "CSO", "Finance Ministry"],
      correct: 2,
      marks: 1,
      difficulty: "hard",
    },
    {
      id: "ec8",
      subject: "economics",
      question: "Inflation means:",
      options: [
        "Fall in prices",
        "Rise in prices",
        "Stable prices",
        "No change",
      ],
      correct: 1,
      marks: 1,
      difficulty: "easy",
    },

    // Sanskrit
    {
      id: "s1",
      subject: "sanskrit",
      question: '"पठति" में कौन सा लकार है?',
      options: ["लट्", "लृट्", "लङ्", "लोट्"],
      correct: 0,
      marks: 1,
      difficulty: "easy",
    },
    {
      id: "s2",
      subject: "sanskrit",
      question: '"रामः" में कौन सी विभक्ति है?',
      options: ["प्रथमा", "द्वितीया", "तृतीया", "चतुर्थी"],
      correct: 0,
      marks: 1,
      difficulty: "easy",
    },
    {
      id: "s3",
      subject: "sanskrit",
      question: '"गच्छामि" का अर्थ है:',
      options: ["वह जाता है", "मैं जाता हूँ", "तुम जाते हो", "वे जाते हैं"],
      correct: 1,
      marks: 1,
      difficulty: "easy",
    },
    {
      id: "s4",
      subject: "sanskrit",
      question: '"देवालय" में कौन सी संधि है?',
      options: ["व्यंजन", "स्वर", "विसर्ग", "यण्"],
      correct: 1,
      marks: 1,
      difficulty: "medium",
    },
    {
      id: "s5",
      subject: "sanskrit",
      question: '"विद्या ददाति विनयम्" - यहाँ "ददाति" का धातु है:',
      options: ["पठ्", "गम्", "दा", "कृ"],
      correct: 2,
      marks: 1,
      difficulty: "medium",
    },
    {
      id: "s6",
      subject: "sanskrit",
      question: '"बालकाः" में कौन सा वचन है?',
      options: ["एकवचन", "द्विवचन", "बहुवचन", "कोई नहीं"],
      correct: 2,
      marks: 1,
      difficulty: "easy",
    },
  ];

  const toggleSubject = (subjectId: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(subjectId)
        ? prev.filter((s) => s !== subjectId)
        : [...prev, subjectId],
    );
  };

  const startTest = () => {
    const filtered = allQuestions.filter((q) =>
      selectedSubjects.includes(q.subject),
    );
    const shuffled = [...filtered]
      .sort(() => Math.random() - 0.5)
      .slice(0, questionCount);
    setTestQuestions(shuffled);
    setAnswers(new Array(shuffled.length).fill(null));
    setTimeLeft(timeLimit * 60);
    setCurrentQuestion(0);
    setGameState("test");
  };

  useEffect(() => {
    if (gameState !== "test" || isPaused) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setGameState("result");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, isPaused]);

  const handleAnswer = (answerIdx: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIdx;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < testQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const submitTest = () => {
    setGameState("result");
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const calculateScore = () => {
    let correct = 0;
    let attempted = 0;
    testQuestions.forEach((q, idx) => {
      if (answers[idx] !== null) {
        attempted++;
        if (answers[idx] === q.correct) correct++;
      }
    });
    return { correct, attempted, total: testQuestions.length };
  };

  const getPercentage = () => {
    const { correct, total } = calculateScore();
    return Math.round((correct / total) * 100);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen py-6 px-4">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl shadow-2xl border border-slate-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-rose-600 to-pink-600 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-4xl">📋</div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Mock Test</h2>
                  <p className="text-rose-100 text-sm mt-1">
                    Practice for Board Exams
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

          {/* Config State */}
          {gameState === "config" && (
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-white font-bold mb-3">Select Subjects</h3>
                <div className="grid grid-cols-3 gap-3">
                  {subjects.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => toggleSubject(sub.id)}
                      className={`p-3 rounded-xl border-2 transition-all ${
                        selectedSubjects.includes(sub.id)
                          ? "border-rose-500 bg-rose-500/20"
                          : "border-slate-700 bg-slate-800 hover:border-slate-600"
                      }`}
                    >
                      <div className="text-2xl mb-1">{sub.icon}</div>
                      <div className="text-white text-sm">{sub.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white font-medium text-sm mb-2 block">
                    Questions
                  </label>
                  <select
                    value={questionCount}
                    onChange={(e) => setQuestionCount(Number(e.target.value))}
                    className="w-full p-3 bg-slate-800 border border-slate-600 rounded-xl text-white"
                  >
                    <option value={10}>10 Questions</option>
                    <option value={20}>20 Questions</option>
                    <option value={30}>30 Questions</option>
                    <option value={50}>50 Questions</option>
                  </select>
                </div>
                <div>
                  <label className="text-white font-medium text-sm mb-2 block">
                    Time Limit
                  </label>
                  <select
                    value={timeLimit}
                    onChange={(e) => setTimeLimit(Number(e.target.value))}
                    className="w-full p-3 bg-slate-800 border border-slate-600 rounded-xl text-white"
                  >
                    <option value={15}>15 Minutes</option>
                    <option value={30}>30 Minutes</option>
                    <option value={45}>45 Minutes</option>
                    <option value={60}>60 Minutes</option>
                  </select>
                </div>
              </div>

              <button
                onClick={startTest}
                disabled={selectedSubjects.length === 0}
                className="w-full py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Play size={24} /> Start Mock Test
              </button>
            </div>
          )}

          {/* Test State */}
          {gameState === "test" && testQuestions.length > 0 && (
            <div className="p-4">
              {/* Test Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-white font-bold">
                    Q {currentQuestion + 1}/{testQuestions.length}
                  </span>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      testQuestions[currentQuestion].difficulty === "easy"
                        ? "bg-green-500/20 text-green-400"
                        : testQuestions[currentQuestion].difficulty === "medium"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {testQuestions[currentQuestion].difficulty}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`font-mono font-bold ${timeLeft < 300 ? "text-red-400" : "text-white"}`}
                  >
                    <Clock className="inline mr-1" size={16} />
                    {formatTime(timeLeft)}
                  </span>
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="p-2 bg-slate-700 rounded-lg"
                  >
                    {isPaused ? (
                      <Play size={16} className="text-white" />
                    ) : (
                      <Pause size={16} className="text-white" />
                    )}
                  </button>
                </div>
              </div>

              {/* Question Navigator */}
              <div className="flex gap-1 flex-wrap mb-4 p-2 bg-slate-800 rounded-xl">
                {testQuestions.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentQuestion(idx)}
                    className={`w-8 h-8 rounded text-xs font-bold transition-colors ${
                      idx === currentQuestion
                        ? "bg-rose-500 text-white"
                        : answers[idx] !== null
                          ? "bg-green-500/30 text-green-400"
                          : "bg-slate-700 text-slate-400"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>

              {/* Pause Overlay */}
              {isPaused && (
                <div className="absolute inset-0 bg-black/90 flex items-center justify-center z-10 rounded-3xl">
                  <div className="text-center">
                    <Pause size={48} className="text-white mx-auto mb-4" />
                    <p className="text-white text-xl font-bold">Test Paused</p>
                    <button
                      onClick={() => setIsPaused(false)}
                      className="mt-4 px-6 py-2 bg-rose-500 text-white rounded-lg"
                    >
                      Resume
                    </button>
                  </div>
                </div>
              )}

              {/* Question */}
              <div className="bg-slate-800 rounded-xl p-4 mb-4">
                <span className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs mb-3 inline-block capitalize">
                  {testQuestions[currentQuestion].subject}
                </span>
                <h3 className="text-white text-lg font-medium">
                  {testQuestions[currentQuestion].question}
                </h3>
                {testQuestions[currentQuestion].questionHindi && (
                  <p className="text-slate-400 text-sm mt-1">
                    {testQuestions[currentQuestion].questionHindi}
                  </p>
                )}
              </div>

              {/* Options */}
              <div className="space-y-2 mb-4">
                {testQuestions[currentQuestion].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    className={`w-full p-3 rounded-xl border-2 text-left transition-all ${
                      answers[currentQuestion] === idx
                        ? "border-rose-500 bg-rose-500/20"
                        : "border-slate-700 bg-slate-800 hover:border-slate-600"
                    }`}
                  >
                    <span className="text-white flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-sm">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      {option}
                    </span>
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex gap-3">
                <button
                  onClick={prevQuestion}
                  disabled={currentQuestion === 0}
                  className="flex-1 py-3 bg-slate-700 text-white rounded-xl disabled:opacity-50"
                >
                  Previous
                </button>
                {currentQuestion === testQuestions.length - 1 ? (
                  <button
                    onClick={submitTest}
                    className="flex-1 py-3 bg-rose-500 text-white rounded-xl font-bold"
                  >
                    Submit Test
                  </button>
                ) : (
                  <button
                    onClick={nextQuestion}
                    className="flex-1 py-3 bg-rose-500 text-white rounded-xl"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Result State */}
          {gameState === "result" && (
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">
                  {getPercentage() >= 80
                    ? "🏆"
                    : getPercentage() >= 60
                      ? "⭐"
                      : getPercentage() >= 40
                        ? "👍"
                        : "📚"}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {getPercentage() >= 80
                    ? "Excellent!"
                    : getPercentage() >= 60
                      ? "Good Job!"
                      : getPercentage() >= 40
                        ? "Keep Practicing!"
                        : "Need More Practice"}
                </h3>
                <div className="text-5xl font-bold text-rose-400">
                  {getPercentage()}%
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-800 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">
                    {calculateScore().correct}
                  </div>
                  <div className="text-slate-400 text-sm">Correct</div>
                </div>
                <div className="bg-slate-800 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-red-400">
                    {calculateScore().attempted - calculateScore().correct}
                  </div>
                  <div className="text-slate-400 text-sm">Wrong</div>
                </div>
                <div className="bg-slate-800 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-slate-400">
                    {calculateScore().total - calculateScore().attempted}
                  </div>
                  <div className="text-slate-400 text-sm">Skipped</div>
                </div>
              </div>

              {/* Review Answers */}
              <button
                onClick={() => setShowReview(!showReview)}
                className="w-full py-3 bg-slate-800 text-white rounded-xl mb-4 flex items-center justify-center gap-2"
              >
                <BookOpen size={18} />
                {showReview ? "Hide" : "Review"} Answers
              </button>

              {showReview && (
                <div className="max-h-96 overflow-y-auto space-y-2 mb-4">
                  {testQuestions.map((q, idx) => {
                    const isCorrect = answers[idx] === q.correct;
                    const isSkipped = answers[idx] === null;
                    return (
                      <div
                        key={q.id}
                        className={`p-3 rounded-xl ${
                          isCorrect
                            ? "bg-green-500/10 border border-green-500/30"
                            : isSkipped
                              ? "bg-slate-800 border border-slate-700"
                              : "bg-red-500/10 border border-red-500/30"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-slate-400 text-sm">
                            Q{idx + 1}
                          </span>
                          {isCorrect ? (
                            <CheckCircle size={14} className="text-green-400" />
                          ) : isSkipped ? (
                            <span className="text-slate-400 text-xs">
                              Skipped
                            </span>
                          ) : (
                            <XCircle size={14} className="text-red-400" />
                          )}
                        </div>
                        <p className="text-white text-sm mb-2">{q.question}</p>
                        {!isSkipped && (
                          <p
                            className={`text-xs mt-1 ${isCorrect ? "text-green-400" : "text-red-400"}`}
                          >
                            <span className="font-semibold">Your answer:</span>{" "}
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded ${isCorrect ? "bg-green-500/20" : "bg-red-500/20"}`}
                            >
                              {String.fromCharCode(65 + answers[idx]!)} —{" "}
                              {q.options[answers[idx]!]}
                            </span>
                          </p>
                        )}
                        {!isCorrect && (
                          <p className="text-green-400 text-xs mt-1">
                            <span className="font-semibold">
                              Correct answer:
                            </span>{" "}
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-green-500/20">
                              {String.fromCharCode(65 + q.correct)} —{" "}
                              {q.options[q.correct]}
                            </span>
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => setGameState("config")}
                  className="flex-1 py-3 bg-slate-700 text-white rounded-xl"
                >
                  New Test
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-3 bg-rose-500 text-white rounded-xl"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MockTest;
