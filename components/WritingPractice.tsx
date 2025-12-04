import React, { useState, useMemo } from 'react';
import { ArrowLeft, PenTool, Clock, CheckCircle, Star, BookOpen, Filter, ChevronDown, Award, Target, Lightbulb, FileText, Timer } from 'lucide-react';
import { Subject, Chapter } from '../types';

interface WritingPracticeProps {
  subjects: Subject[];
  onClose?: () => void;
}

interface WritingQuestion {
  id: string;
  question: string;
  marks: number;
  type: '3-mark' | '5-mark' | '8-mark' | '12-mark';
  hints: string[];
  modelAnswer?: string;
  chapterId: string;
  chapterName: string;
  subjectId: string;
  subjectName: string;
  timeLimit: number; // in minutes
}

const generateWritingQuestions = (subjects: Subject[]): WritingQuestion[] => {
  const questions: WritingQuestion[] = [];
  
  const questionTemplates = {
    '3-mark': [
      'Define {}',
      'What is {}?',
      'List three features of {}',
      'Explain {} in brief',
      'State the meaning of {}'
    ],
    '5-mark': [
      'Explain {} with examples',
      'Discuss the importance of {}',
      'Describe the characteristics of {}',
      'What are the types of {}? Explain any two',
      'Differentiate between {} and {}'
    ],
    '8-mark': [
      'Explain {} in detail with suitable examples',
      'Critically analyse {}',
      'Discuss the causes and effects of {}',
      'What are the advantages and disadvantages of {}?',
      'Explain the concept of {} and its significance'
    ],
    '12-mark': [
      'Write an essay on {}',
      'Discuss {} comprehensively with examples',
      'Analyse the impact of {} on society',
      'Evaluate the role of {} in modern context',
      'Critically examine {} with supporting arguments'
    ]
  };

  const timeLimits = {
    '3-mark': 5,
    '5-mark': 10,
    '8-mark': 15,
    '12-mark': 25
  };

  subjects.forEach(subject => {
    subject.chapters.forEach(chapter => {
      const flashcards = chapter.flashcards || [];
      
      if (flashcards.length === 0) return;
      
      // Generate different mark questions for each chapter
      Object.entries(questionTemplates).forEach(([markType, templates]) => {
        const numQuestions = markType === '3-mark' ? 3 : markType === '5-mark' ? 2 : 1;
        
        for (let i = 0; i < numQuestions && i < flashcards.length; i++) {
          const fc = flashcards[i % flashcards.length];
          const template = templates[Math.floor(Math.random() * templates.length)];
          
          questions.push({
            id: `${subject.id}-${chapter.id}-writing-${markType}-${i}`,
            question: template.replace('{}', fc.front),
            marks: parseInt(markType.split('-')[0]),
            type: markType as WritingQuestion['type'],
            hints: [
              'Start with an introduction',
              `Include ${Math.ceil(parseInt(markType) / 2)} key points`,
              'Use examples where relevant',
              'Conclude with a summary'
            ],
            modelAnswer: fc.back,
            chapterId: chapter.id,
            chapterName: chapter.title,
            subjectId: subject.id,
            subjectName: subject.name,
            timeLimit: timeLimits[markType as keyof typeof timeLimits]
          });
        }
      });
    });
  });
  
  return questions;
};

const WritingPractice: React.FC<WritingPracticeProps> = ({ subjects, onClose }) => {
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedMarkType, setSelectedMarkType] = useState<string>('all');
  const [currentQuestion, setCurrentQuestion] = useState<WritingQuestion | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [showHints, setShowHints] = useState(false);
  const [showModelAnswer, setShowModelAnswer] = useState(false);
  const [selfScore, setSelfScore] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [practiceHistory, setPracticeHistory] = useState<{id: string, score: number}[]>(() => {
    const stored = localStorage.getItem('7k-writing-practice');
    return stored ? JSON.parse(stored) : [];
  });

  const questions = useMemo(() => generateWritingQuestions(subjects), [subjects]);

  // Filter questions
  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      const matchesSubject = selectedSubject === 'all' || q.subjectId === selectedSubject;
      const matchesType = selectedMarkType === 'all' || q.type === selectedMarkType;
      return matchesSubject && matchesType;
    });
  }, [questions, selectedSubject, selectedMarkType]);

  // Timer effect
  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timeLeft && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => (prev || 0) - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  // Start practice
  const startPractice = (question: WritingQuestion) => {
    setCurrentQuestion(question);
    setUserAnswer('');
    setShowHints(false);
    setShowModelAnswer(false);
    setSelfScore(null);
    setTimeLeft(question.timeLimit * 60);
    setIsTimerRunning(false);
  };

  // Start timer
  const startTimer = () => {
    setIsTimerRunning(true);
  };

  // Submit score
  const submitScore = () => {
    if (!currentQuestion || selfScore === null) return;
    
    const newHistory = [
      ...practiceHistory.filter(h => h.id !== currentQuestion.id),
      { id: currentQuestion.id, score: selfScore }
    ];
    setPracticeHistory(newHistory);
    localStorage.setItem('7k-writing-practice', JSON.stringify(newHistory));
    
    setCurrentQuestion(null);
  };

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Get stats
  const stats = useMemo(() => {
    const practiced = practiceHistory.length;
    const avgScore = practiced > 0 
      ? practiceHistory.reduce((sum, h) => sum + h.score, 0) / practiced 
      : 0;
    const perfectScores = practiceHistory.filter(h => h.score === 100).length;
    
    return { practiced, avgScore: Math.round(avgScore), perfectScores };
  }, [practiceHistory]);

  // Render question selection
  const renderQuestionList = () => (
    <div className="space-y-4">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-2.5 text-white text-center">
          <PenTool className="w-4 h-4 mx-auto mb-1" />
          <div className="text-lg font-bold">{stats.practiced}</div>
          <div className="text-[10px] opacity-75">Practiced</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-2.5 text-white text-center">
          <Target className="w-4 h-4 mx-auto mb-1" />
          <div className="text-lg font-bold">{stats.avgScore}%</div>
          <div className="text-[10px] opacity-75">Avg Score</div>
        </div>
        <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl p-2.5 text-white text-center">
          <Star className="w-4 h-4 mx-auto mb-1" />
          <div className="text-lg font-bold">{stats.perfectScores}</div>
          <div className="text-[10px] opacity-75">Perfect</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="flex-1 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-sm border-0 dark:text-white"
        >
          <option value="all">All Subjects</option>
          {subjects.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>
        <select
          value={selectedMarkType}
          onChange={(e) => setSelectedMarkType(e.target.value)}
          className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-sm border-0 dark:text-white"
        >
          <option value="all">All Marks</option>
          <option value="3-mark">3 Marks</option>
          <option value="5-mark">5 Marks</option>
          <option value="8-mark">8 Marks</option>
          <option value="12-mark">12 Marks</option>
        </select>
      </div>

      {/* Quick Start */}
      <button
        onClick={() => {
          if (filteredQuestions.length > 0) {
            const random = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
            startPractice(random);
          }
        }}
        className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl font-semibold active:scale-95 transition flex items-center justify-center gap-2"
      >
        <PenTool className="w-5 h-5" />
        Random Question
      </button>

      {/* Question List */}
      <div className="space-y-2 max-h-[50vh] overflow-y-auto">
        {filteredQuestions.slice(0, 20).map(q => {
          const history = practiceHistory.find(h => h.id === q.id);
          
          return (
            <button
              key={q.id}
              onClick={() => startPractice(q)}
              className={`w-full p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl text-left active:scale-[0.99] transition ${
                history ? 'border-l-4 border-green-500' : ''
              }`}
            >
              <div className="flex items-start gap-2">
                <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                  q.marks === 3 ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                  q.marks === 5 ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                  q.marks === 8 ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' :
                  'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
                }`}>
                  {q.marks}M
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm dark:text-white line-clamp-2">{q.question}</p>
                  <p className="text-xs text-gray-500 mt-1">{q.subjectName} • {q.chapterName}</p>
                </div>
                {history && (
                  <span className="text-xs text-green-500 font-medium">{history.score}%</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  // Render practice view
  const renderPractice = () => {
    if (!currentQuestion) return null;

    return (
      <div className="space-y-4">
        {/* Back & Timer */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentQuestion(null)}
            className="p-2 -ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <ArrowLeft className="w-5 h-5 dark:text-white" />
          </button>
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
            timeLeft && timeLeft < 60 ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
            'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}>
            <Timer className="w-4 h-4" />
            <span className="font-mono font-medium">{formatTime(timeLeft || 0)}</span>
          </div>
        </div>

        {/* Question */}
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs px-2 py-0.5 rounded font-medium ${
              currentQuestion.marks === 3 ? 'bg-blue-500 text-white' :
              currentQuestion.marks === 5 ? 'bg-green-500 text-white' :
              currentQuestion.marks === 8 ? 'bg-purple-500 text-white' :
              'bg-orange-500 text-white'
            }`}>
              {currentQuestion.marks} Marks
            </span>
            <span className="text-xs text-gray-500">
              {currentQuestion.timeLimit} min
            </span>
          </div>
          <p className="text-lg font-medium dark:text-white">{currentQuestion.question}</p>
          <p className="text-xs text-gray-500 mt-2">{currentQuestion.subjectName} • {currentQuestion.chapterName}</p>
        </div>

        {/* Start Timer Button */}
        {!isTimerRunning && timeLeft === currentQuestion.timeLimit * 60 && (
          <button
            onClick={startTimer}
            className="w-full py-2 bg-blue-500 text-white rounded-lg font-medium active:scale-95 transition flex items-center justify-center gap-2"
          >
            <Timer className="w-4 h-4" />
            Start Timer
          </button>
        )}

        {/* Answer Area */}
        <div>
          <label className="text-sm font-medium dark:text-white mb-1 block">Your Answer:</label>
          <textarea
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Type your answer here..."
            className="w-full h-40 p-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-sm resize-none dark:text-white dark:placeholder-gray-400"
          />
          <div className="text-xs text-gray-500 text-right mt-1">
            {userAnswer.split(/\s+/).filter(w => w.length > 0).length} words
          </div>
        </div>

        {/* Hints */}
        <button
          onClick={() => setShowHints(!showHints)}
          className="w-full py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-lg font-medium flex items-center justify-center gap-2"
        >
          <Lightbulb className="w-4 h-4" />
          {showHints ? 'Hide Hints' : 'Show Hints'}
        </button>

        {showHints && (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-3">
            <ul className="space-y-1 text-sm text-yellow-800 dark:text-yellow-200">
              {currentQuestion.hints.map((hint, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-yellow-500">•</span>
                  {hint}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Show Model Answer */}
        <button
          onClick={() => setShowModelAnswer(!showModelAnswer)}
          className="w-full py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg font-medium flex items-center justify-center gap-2"
        >
          <FileText className="w-4 h-4" />
          {showModelAnswer ? 'Hide Model Answer' : 'Check Model Answer'}
        </button>

        {showModelAnswer && (
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-3">
            <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">Model Answer:</div>
            <p className="text-sm text-green-800 dark:text-green-200">{currentQuestion.modelAnswer}</p>
          </div>
        )}

        {/* Self Score */}
        {showModelAnswer && (
          <div className="space-y-3">
            <label className="text-sm font-medium dark:text-white">Rate your answer:</label>
            <div className="grid grid-cols-5 gap-2">
              {[20, 40, 60, 80, 100].map(score => (
                <button
                  key={score}
                  onClick={() => setSelfScore(score)}
                  className={`py-2 rounded-lg font-medium text-sm transition active:scale-95 ${
                    selfScore === score
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {score}%
                </button>
              ))}
            </div>
            
            {selfScore !== null && (
              <button
                onClick={submitScore}
                className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold active:scale-95 transition flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Save & Continue
              </button>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 border-b border-gray-100 dark:border-gray-700 flex items-center gap-3">
          {onClose && !currentQuestion && (
            <button onClick={onClose} className="p-2 -ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 active:scale-95 transition">
              <ArrowLeft className="w-5 h-5 dark:text-white" />
            </button>
          )}
          <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
            <PenTool className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold dark:text-white">Writing Practice</h2>
            <p className="text-xs text-gray-500">3/5/8/12 mark questions</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {currentQuestion ? renderPractice() : renderQuestionList()}
        </div>
      </div>
    </div>
  );
};

export default WritingPractice;
