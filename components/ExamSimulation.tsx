import React, { useState, useEffect, useCallback } from 'react';
import { FileText, Clock, AlertCircle, CheckCircle, XCircle, ChevronLeft, ChevronRight, Flag, Eye, EyeOff, Send, RotateCcw, Award, Pause, Play, X } from 'lucide-react';
import { Subject, Question } from '../types';

interface ExamSimulationProps {
  subjects: Subject[];
  onClose: () => void;
}

interface ExamQuestion extends Question {
  subjectName: string;
  chapterTitle: string;
  marked: boolean;
  answered: number | null;
  visited: boolean;
}

const EXAM_CONFIG = {
  totalQuestions: 40,
  timeMinutes: 60,
  marksPerQuestion: 1,
  negativeMarking: 0,
};

const ExamSimulation: React.FC<ExamSimulationProps> = ({ subjects, onClose }) => {
  const [examState, setExamState] = useState<'setup' | 'running' | 'paused' | 'review' | 'results'>('setup');
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(EXAM_CONFIG.timeMinutes * 60);
  const [showAnswerPanel, setShowAnswerPanel] = useState(true);
  const [answeredExamIds, setAnsweredExamIds] = useState<Set<string>>(new Set());
  
  // Custom exam settings
  const [questionCount, setQuestionCount] = useState(EXAM_CONFIG.totalQuestions);
  const [examTime, setExamTime] = useState(EXAM_CONFIG.timeMinutes);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  // Load answered exam question IDs from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('7k-exam-answered-questions');
    if (saved) {
      try {
        setAnsweredExamIds(new Set(JSON.parse(saved)));
      } catch (e) {
        setAnsweredExamIds(new Set());
      }
    }
  }, []);

  // Save answered IDs to localStorage
  const saveExamAnsweredIds = (ids: Set<string>) => {
    localStorage.setItem('7k-exam-answered-questions', JSON.stringify(Array.from(ids)));
  };

  // Fisher-Yates shuffle
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Generate exam questions
  const generateExam = () => {
    const allQuestions: ExamQuestion[] = [];
    const subjectsToUse = selectedSubjects.length > 0 
      ? subjects.filter(s => selectedSubjects.includes(s.name))
      : subjects;
    
    subjectsToUse.forEach(subject => {
      subject.chapters.forEach(chapter => {
        if (chapter.mcqs) {
          chapter.mcqs.forEach(mcq => {
            allQuestions.push({
              ...mcq,
              subjectName: subject.name,
              chapterTitle: chapter.title,
              marked: false,
              answered: null,
              visited: false,
            });
          });
        }
      });
    });

    // Filter out already answered questions for variety
    let unansweredQuestions = allQuestions.filter(q => !answeredExamIds.has(q.id));
    
    // If not enough unanswered, reset and use all
    if (unansweredQuestions.length < questionCount) {
      const newIds = new Set(answeredExamIds);
      allQuestions.forEach(q => newIds.delete(q.id));
      setAnsweredExamIds(newIds);
      saveExamAnsweredIds(newIds);
      unansweredQuestions = allQuestions;
    }

    // Shuffle and select questions
    const shuffled = shuffleArray(unansweredQuestions);
    const selected = shuffled.slice(0, Math.min(questionCount, shuffled.length));
    
    if (selected.length > 0) {
      selected[0].visited = true;
    }
    
    setQuestions(selected);
    setTimeLeft(examTime * 60);
    setCurrentIndex(0);
    setExamState('running');
  };

  // Timer
  useEffect(() => {
    if (examState !== 'running') return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setExamState('results');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examState]);

  // Keyboard navigation
  useEffect(() => {
    if (examState !== 'running') return;

    const handleKeyPress = (e: KeyboardEvent) => {
      switch(e.key) {
        case 'ArrowRight':
        case 'n':
          navigateQuestion(1);
          break;
        case 'ArrowLeft':
        case 'p':
          navigateQuestion(-1);
          break;
        case 'm':
          toggleMark();
          break;
        case '1':
        case '2':
        case '3':
        case '4':
          handleAnswer(parseInt(e.key) - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [examState, currentIndex, questions]);

  const navigateQuestion = (direction: number) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < questions.length) {
      setCurrentIndex(newIndex);
      setQuestions(prev => prev.map((q, i) => 
        i === newIndex ? { ...q, visited: true } : q
      ));
    }
  };

  const jumpToQuestion = (index: number) => {
    setCurrentIndex(index);
    setQuestions(prev => prev.map((q, i) => 
      i === index ? { ...q, visited: true } : q
    ));
  };

  const handleAnswer = (optionIndex: number) => {
    setQuestions(prev => prev.map((q, i) => 
      i === currentIndex ? { ...q, answered: optionIndex } : q
    ));
  };

  const toggleMark = () => {
    setQuestions(prev => prev.map((q, i) => 
      i === currentIndex ? { ...q, marked: !q.marked } : q
    ));
  };

  const clearAnswer = () => {
    setQuestions(prev => prev.map((q, i) => 
      i === currentIndex ? { ...q, answered: null } : q
    ));
  };

  const submitExam = () => {
    if (confirm('Are you sure you want to submit the exam? You cannot change answers after submission.')) {
      // Mark all questions as answered in the tracking system
      const newIds = new Set(answeredExamIds);
      questions.forEach(q => newIds.add(q.id));
      setAnsweredExamIds(newIds);
      saveExamAnsweredIds(newIds);
      
      setExamState('results');
    }
  };

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getStats = () => {
    const answered = questions.filter(q => q.answered !== null).length;
    const marked = questions.filter(q => q.marked).length;
    const notVisited = questions.filter(q => !q.visited).length;
    return { answered, marked, notVisited };
  };

  const calculateResults = () => {
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;

    questions.forEach(q => {
      if (q.answered === null) {
        unanswered++;
      } else if (q.answered === q.correctIndex) {
        correct++;
      } else {
        wrong++;
      }
    });

    const marks = (correct * EXAM_CONFIG.marksPerQuestion) - (wrong * EXAM_CONFIG.negativeMarking);
    const percentage = Math.round((correct / questions.length) * 100);

    return { correct, wrong, unanswered, marks, percentage };
  };

  // Setup Screen
  if (examState === 'setup') {
    const availableQuestions = subjects.reduce((total, s) => {
      if (selectedSubjects.length === 0 || selectedSubjects.includes(s.name)) {
        return total + s.chapters.reduce((ct, ch) => ct + (ch.mcqs?.length || 0), 0);
      }
      return total;
    }, 0);

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3">
        <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold dark:text-white">Exam Simulation</h2>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Full-screen timed test mode</p>
            </div>
            <button onClick={onClose} className="ml-auto p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <X className="w-5 h-5 dark:text-white" />
            </button>
          </div>

          {/* Question Count */}
          <div className="mb-4">
            <label className="block text-xs sm:text-sm font-medium dark:text-white mb-2">
              Number of Questions
            </label>
            <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
              {[10, 20, 30, 40, 50].map(count => (
                <button
                  key={count}
                  onClick={() => setQuestionCount(count)}
                  disabled={count > availableQuestions}
                  className={`py-2.5 rounded-lg text-sm font-medium transition active:scale-95 ${
                    questionCount === count
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {count}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-1">Available: {availableQuestions} questions</p>
          </div>

          {/* Time */}
          <div className="mb-4">
            <label className="block text-xs sm:text-sm font-medium dark:text-white mb-2">
              Time Limit (minutes)
            </label>
            <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
              {[15, 30, 45, 60, 90].map(time => (
                <button
                  key={time}
                  onClick={() => setExamTime(time)}
                  className={`py-2.5 rounded-lg text-sm font-medium transition active:scale-95 ${
                    examTime === time
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Subject Selection */}
          <div className="mb-5">
            <label className="block text-xs sm:text-sm font-medium dark:text-white mb-2">
              Subjects (optional)
            </label>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 max-h-32 overflow-y-auto">
              {subjects.filter(s => s.chapters.some(c => c.mcqs && c.mcqs.length > 0)).map(subject => (
                <button
                  key={subject.name}
                  onClick={() => {
                    setSelectedSubjects(prev => 
                      prev.includes(subject.name)
                        ? prev.filter(s => s !== subject.name)
                        : [...prev, subject.name]
                    );
                  }}
                  className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition active:scale-95 ${
                    selectedSubjects.includes(subject.name)
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {subject.name}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {selectedSubjects.length === 0 ? 'All subjects selected' : `${selectedSubjects.length} subject(s) selected`}
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={generateExam}
              disabled={availableQuestions === 0}
              className="flex-1 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold hover:opacity-90 disabled:opacity-50"
            >
              Start Exam
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl active:scale-95 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Results Screen
  if (examState === 'results') {
    const results = calculateResults();
    const timeUsed = (examTime * 60) - timeLeft;

    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center z-50 p-3 overflow-y-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full p-4 sm:p-6 my-4">
          {/* Header */}
          <div className={`text-center mb-4 sm:mb-6 p-4 sm:p-6 rounded-xl ${
            results.percentage >= 70 ? 'bg-gradient-to-br from-green-500 to-emerald-600' : 
            results.percentage >= 50 ? 'bg-gradient-to-br from-yellow-500 to-orange-500' :
            'bg-gradient-to-br from-red-500 to-rose-600'
          } text-white`}>
            <Award className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3" />
            <div className="text-4xl sm:text-5xl font-bold mb-1 sm:mb-2">{results.percentage}%</div>
            <div className="text-lg sm:text-xl opacity-90">
              {results.correct} / {questions.length} Correct
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="text-center p-2 sm:p-3 bg-green-50 dark:bg-green-900/30 rounded-xl">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 text-green-500" />
              <div className="font-bold text-green-600 dark:text-green-400">{results.correct}</div>
              <div className="text-[10px] sm:text-xs text-gray-500">Correct</div>
            </div>
            <div className="text-center p-2 sm:p-3 bg-red-50 dark:bg-red-900/30 rounded-xl">
              <XCircle className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 text-red-500" />
              <div className="font-bold text-red-600 dark:text-red-400">{results.wrong}</div>
              <div className="text-xs text-gray-500">Wrong</div>
            </div>
            <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <AlertCircle className="w-6 h-6 mx-auto mb-1 text-gray-500" />
              <div className="font-bold text-gray-600 dark:text-gray-400">{results.unanswered}</div>
              <div className="text-xs text-gray-500">Skipped</div>
            </div>
            <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
              <Clock className="w-6 h-6 mx-auto mb-1 text-blue-500" />
              <div className="font-bold text-blue-600 dark:text-blue-400">{formatTime(timeUsed)}</div>
              <div className="text-xs text-gray-500">Time Used</div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setExamState('review')}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600"
            >
              <Eye className="w-5 h-5" />
              Review Answers
            </button>
            <button
              onClick={() => setExamState('setup')}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <RotateCcw className="w-5 h-5" />
              New Exam
            </button>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  // Review Mode
  if (examState === 'review') {
    const currentQuestion = questions[currentIndex];
    
    return (
      <div className="fixed inset-0 bg-gray-100 dark:bg-gray-900 flex flex-col z-50">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <button
              onClick={() => setExamState('results')}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <ChevronLeft className="w-5 h-5" />
              Back to Results
            </button>
            <span className="font-medium dark:text-white">
              Question {currentIndex + 1} / {questions.length}
            </span>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Question Review */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {currentQuestion.subjectName} • {currentQuestion.chapterTitle}
              </div>
              
              <h3 className="text-lg font-semibold dark:text-white mb-6">
                {currentQuestion.question}
              </h3>

              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const isCorrect = index === currentQuestion.correctIndex;
                  const isSelected = index === currentQuestion.answered;
                  
                  return (
                    <div
                      key={index}
                      className={`p-4 rounded-xl border-2 ${
                        isCorrect
                          ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                          : isSelected
                          ? 'border-red-500 bg-red-50 dark:bg-red-900/30'
                          : 'border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-medium text-sm ${
                          isCorrect ? 'bg-green-500 text-white' :
                          isSelected ? 'bg-red-500 text-white' :
                          'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="dark:text-white flex-1">{option}</span>
                        {isCorrect && <CheckCircle className="w-5 h-5 text-green-500" />}
                        {isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              {currentQuestion.explanation && (
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    💡 {currentQuestion.explanation}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="flex gap-4 max-w-2xl mx-auto">
            <button
              onClick={() => navigateQuestion(-1)}
              disabled={currentIndex === 0}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>
            <button
              onClick={() => navigateQuestion(1)}
              disabled={currentIndex === questions.length - 1}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-500 text-white rounded-xl font-medium disabled:opacity-50"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Running Exam Screen
  const currentQuestion = questions[currentIndex];
  const stats = getStats();

  return (
    <div className="fixed inset-0 bg-gray-100 dark:bg-gray-900 flex flex-col z-50">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono font-bold ${
              timeLeft < 300 ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' :
              'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
            }`}>
              <Clock className="w-5 h-5" />
              {formatTime(timeLeft)}
            </div>
            <button
              onClick={() => setExamState(examState === 'paused' ? 'running' : 'paused')}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              {examState === 'paused' ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-sm">
              <span className="text-green-600 dark:text-green-400 font-medium">{stats.answered}</span>
              <span className="text-gray-400 mx-1">/</span>
              <span className="dark:text-white">{questions.length}</span>
              <span className="text-gray-500 ml-1">answered</span>
            </div>
            <button
              onClick={submitExam}
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:opacity-90"
            >
              Submit Exam
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Question Panel */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {currentQuestion.subjectName} • {currentQuestion.chapterTitle}
                </span>
                <button
                  onClick={toggleMark}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                    currentQuestion.marked
                      ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}
                >
                  <Flag className={`w-4 h-4 ${currentQuestion.marked ? 'fill-current' : ''}`} />
                  {currentQuestion.marked ? 'Marked' : 'Mark'}
                </button>
              </div>
              
              <div className="flex items-start gap-3 mb-6">
                <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {currentIndex + 1}
                </span>
                <h3 className="text-lg font-semibold dark:text-white">
                  {currentQuestion.question}
                </h3>
              </div>

              <div className="space-y-3 mb-6">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                      currentQuestion.answered === index
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                        : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-medium text-sm ${
                        currentQuestion.answered === index
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="dark:text-white">{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={clearAnswer}
                  disabled={currentQuestion.answered === null}
                  className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg disabled:opacity-50"
                >
                  Clear Response
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Question Navigation Panel */}
        {showAnswerPanel && (
          <div className="w-72 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 p-4 overflow-y-auto">
            <h4 className="font-semibold dark:text-white mb-4">Questions</h4>
            
            {/* Legend */}
            <div className="grid grid-cols-2 gap-2 text-xs mb-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-gray-600 dark:text-gray-400">Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-500 rounded"></div>
                <span className="text-gray-600 dark:text-gray-400">Marked</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                <span className="text-gray-600 dark:text-gray-400">Visited</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-300 dark:border-gray-600 rounded"></div>
                <span className="text-gray-600 dark:text-gray-400">Not visited</span>
              </div>
            </div>

            {/* Question Grid */}
            <div className="grid grid-cols-5 gap-2">
              {questions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => jumpToQuestion(i)}
                  className={`w-10 h-10 rounded-lg font-medium text-sm transition ${
                    i === currentIndex
                      ? 'ring-2 ring-blue-500'
                      : ''
                  } ${
                    q.answered !== null && q.marked
                      ? 'bg-gradient-to-br from-green-500 to-orange-500 text-white'
                      : q.answered !== null
                      ? 'bg-green-500 text-white'
                      : q.marked
                      ? 'bg-orange-500 text-white'
                      : q.visited
                      ? 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                      : 'bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Navigation */}
      <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4">
        <div className="flex gap-4 max-w-2xl mx-auto">
          <button
            onClick={() => navigateQuestion(-1)}
            disabled={currentIndex === 0}
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>
          <button
            onClick={() => setShowAnswerPanel(!showAnswerPanel)}
            className="px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-xl"
          >
            {showAnswerPanel ? <EyeOff className="w-5 h-5 text-gray-500" /> : <Eye className="w-5 h-5 text-gray-500" />}
          </button>
          <button
            onClick={() => navigateQuestion(1)}
            disabled={currentIndex === questions.length - 1}
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-500 text-white rounded-xl font-medium disabled:opacity-50"
          >
            Save & Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Paused Overlay */}
      {examState === 'paused' && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-10">
          <div className="text-center text-white">
            <Pause className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <h3 className="text-2xl font-bold mb-2">Exam Paused</h3>
            <p className="text-gray-400 mb-6">Click play to resume</p>
            <button
              onClick={() => setExamState('running')}
              className="px-8 py-3 bg-blue-500 rounded-xl font-semibold hover:bg-blue-600"
            >
              Resume Exam
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamSimulation;
