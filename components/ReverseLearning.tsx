import React, { useState, useMemo, useCallback } from 'react';
import { ArrowLeft, Shuffle, Brain, CheckCircle, XCircle, Target, Trophy, Lightbulb, ChevronRight, RotateCcw, Flame } from 'lucide-react';
import { Subject } from '../types';

interface ReverseLearningProps {
  subjects: Subject[];
  onClose?: () => void;
}

interface ReverseQuestion {
  id: string;
  content: string;
  type: 'mcq' | 'flashcard';
  correctSubject: string;
  correctChapter: string;
  subjectId: string;
  chapterId: string;
}

const ReverseLearning: React.FC<ReverseLearningProps> = ({ subjects, onClose }) => {
  const [view, setView] = useState<'start' | 'playing' | 'result'>('start');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<ReverseQuestion[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showCorrect, setShowCorrect] = useState(false);
  const [gameMode, setGameMode] = useState<'topic' | 'subject'>('topic');
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(() => {
    const stored = localStorage.getItem('7k-reverse-best-streak');
    return stored ? parseInt(stored) : 0;
  });

  // Generate reverse questions
  const generateQuestions = useCallback(() => {
    const allQuestions: ReverseQuestion[] = [];
    
    subjects.forEach(subject => {
      subject.chapters.forEach(chapter => {
        // From MCQs
        const mcqs = chapter.mcqs || [];
        mcqs.forEach((mcq, i) => {
          allQuestions.push({
            id: `${subject.id}-${chapter.id}-mcq-${i}`,
            content: mcq.question,
            type: 'mcq',
            correctSubject: subject.name,
            correctChapter: chapter.title,
            subjectId: subject.id,
            chapterId: chapter.id
          });
        });
        
        // From flashcards
        const flashcards = chapter.flashcards || [];
        flashcards.forEach((fc, i) => {
          allQuestions.push({
            id: `${subject.id}-${chapter.id}-fc-${i}`,
            content: `${fc.front}\n\n${fc.back}`,
            type: 'flashcard',
            correctSubject: subject.name,
            correctChapter: chapter.title,
            subjectId: subject.id,
            chapterId: chapter.id
          });
        });
      });
    });
    
    // Shuffle and take 10 questions
    return allQuestions.sort(() => Math.random() - 0.5).slice(0, 10);
  }, [subjects]);

  // Get answer options
  const getOptions = useCallback((question: ReverseQuestion): string[] => {
    if (gameMode === 'subject') {
      const correctSubject = question.correctSubject;
      const otherSubjects = subjects
        .filter(s => s.name !== correctSubject)
        .map(s => s.name);
      
      // Shuffle and take 3 wrong answers
      const wrongAnswers = otherSubjects.sort(() => Math.random() - 0.5).slice(0, 3);
      const options = [correctSubject, ...wrongAnswers];
      return options.sort(() => Math.random() - 0.5);
    } else {
      // Topic mode - show chapters
      const correctChapter = question.correctChapter;
      const subject = subjects.find(s => s.id === question.subjectId);
      if (!subject) return [correctChapter];
      
      const otherChapters = subject.chapters
        .filter(c => c.name !== correctChapter)
        .map(c => c.name);
      
      const wrongAnswers = otherChapters.sort(() => Math.random() - 0.5).slice(0, 3);
      const options = [correctChapter, ...wrongAnswers];
      return options.sort(() => Math.random() - 0.5);
    }
  }, [subjects, gameMode]);

  // Start game
  const startGame = () => {
    const q = generateQuestions();
    setQuestions(q);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setSelectedAnswer(null);
    setShowCorrect(false);
    setView('playing');
  };

  // Handle answer
  const handleAnswer = (answer: string) => {
    if (showCorrect) return;
    
    setSelectedAnswer(answer);
    setShowCorrect(true);
    
    const isCorrect = gameMode === 'subject' 
      ? answer === questions[currentIndex].correctSubject
      : answer === questions[currentIndex].correctChapter;
    
    if (isCorrect) {
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }
  };

  // Next question
  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowCorrect(false);
    } else {
      // Update best streak
      if (streak > bestStreak) {
        setBestStreak(streak);
        localStorage.setItem('7k-reverse-best-streak', streak.toString());
      }
      setView('result');
    }
  };

  // Current question
  const currentQuestion = questions[currentIndex];
  const options = currentQuestion ? getOptions(currentQuestion) : [];
  const correctAnswer = currentQuestion 
    ? (gameMode === 'subject' ? currentQuestion.correctSubject : currentQuestion.correctChapter)
    : '';

  // Render start screen
  const renderStart = () => (
    <div className="space-y-4 text-center">
      <div className="py-6">
        <Shuffle className="w-16 h-16 text-purple-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold dark:text-white mb-2">Reverse Learning</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Read the question and guess which {gameMode === 'subject' ? 'subject' : 'topic'} it belongs to!
        </p>
      </div>

      {/* Game Mode Selection */}
      <div className="flex gap-2 p-1 bg-gray-100 dark:bg-gray-700 rounded-xl">
        <button
          onClick={() => setGameMode('topic')}
          className={`flex-1 py-2.5 rounded-lg font-medium text-sm transition ${
            gameMode === 'topic'
              ? 'bg-white dark:bg-gray-600 shadow dark:text-white'
              : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          🎯 Guess Topic
        </button>
        <button
          onClick={() => setGameMode('subject')}
          className={`flex-1 py-2.5 rounded-lg font-medium text-sm transition ${
            gameMode === 'subject'
              ? 'bg-white dark:bg-gray-600 shadow dark:text-white'
              : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          📚 Guess Subject
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-3 text-white">
          <Flame className="w-5 h-5 mx-auto mb-1" />
          <div className="text-xl font-bold">{bestStreak}</div>
          <div className="text-xs opacity-75">Best Streak</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl p-3 text-white">
          <Brain className="w-5 h-5 mx-auto mb-1" />
          <div className="text-xl font-bold">10</div>
          <div className="text-xs opacity-75">Questions</div>
        </div>
      </div>

      {/* How to play */}
      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 text-left">
        <h4 className="font-semibold dark:text-white mb-2 flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-yellow-500" />
          How to Play
        </h4>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
          <li>• Read the question or flashcard content</li>
          <li>• Guess which {gameMode === 'subject' ? 'subject' : 'chapter/topic'} it belongs to</li>
          <li>• Build your streak for correct answers!</li>
          <li>• Perfect for testing your topic recognition</li>
        </ul>
      </div>

      <button
        onClick={startGame}
        className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl font-semibold text-lg active:scale-95 transition"
      >
        🧠 Start Challenge
      </button>
    </div>
  );

  // Render playing screen
  const renderPlaying = () => (
    <div className="space-y-4">
      {/* Progress & Streak */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium dark:text-white">{currentIndex + 1}/10</span>
          <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all"
              style={{ width: `${((currentIndex + 1) / 10) * 100}%` }}
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          {streak > 0 && (
            <div className="flex items-center gap-1 text-orange-500">
              <Flame className="w-4 h-4" />
              <span className="font-bold">{streak}</span>
            </div>
          )}
          <div className="text-sm font-medium text-green-500">Score: {score}</div>
        </div>
      </div>

      {/* Question Content */}
      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 min-h-[150px]">
        <div className="text-xs text-gray-500 mb-2 flex items-center gap-1">
          {currentQuestion?.type === 'mcq' ? '📝 Question' : '🃏 Flashcard'}
        </div>
        <p className="text-sm dark:text-white whitespace-pre-wrap">{currentQuestion?.content}</p>
      </div>

      {/* Challenge */}
      <div className="text-center py-2">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Which {gameMode === 'subject' ? 'subject' : 'chapter'} does this belong to?
        </p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-2">
        {options.map((option, i) => {
          const isSelected = selectedAnswer === option;
          const isCorrectOption = option === correctAnswer;
          
          let bgClass = 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600';
          
          if (showCorrect) {
            if (isCorrectOption) {
              bgClass = 'bg-green-500 text-white';
            } else if (isSelected && !isCorrectOption) {
              bgClass = 'bg-red-500 text-white';
            } else {
              bgClass = 'bg-gray-100 dark:bg-gray-700 opacity-50';
            }
          }
          
          return (
            <button
              key={i}
              onClick={() => handleAnswer(option)}
              disabled={showCorrect}
              className={`p-3 rounded-xl font-medium text-sm transition active:scale-95 text-left ${bgClass} ${
                !showCorrect ? 'dark:text-white' : ''
              }`}
            >
              <span className="text-xs opacity-70 mb-1 block">{String.fromCharCode(65 + i)}</span>
              {option}
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {showCorrect && (
        <div className={`rounded-xl p-3 ${
          selectedAnswer === correctAnswer 
            ? 'bg-green-100 dark:bg-green-900/30' 
            : 'bg-red-100 dark:bg-red-900/30'
        }`}>
          <div className="flex items-center gap-2 mb-1">
            {selectedAnswer === correctAnswer ? (
              <>
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-semibold text-green-700 dark:text-green-300">Correct!</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-red-500" />
                <span className="font-semibold text-red-700 dark:text-red-300">Wrong!</span>
              </>
            )}
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            This is from <strong>{currentQuestion?.correctSubject}</strong> → <strong>{currentQuestion?.correctChapter}</strong>
          </p>
        </div>
      )}

      {/* Next Button */}
      {showCorrect && (
        <button
          onClick={nextQuestion}
          className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl font-semibold active:scale-95 transition flex items-center justify-center gap-2"
        >
          {currentIndex < questions.length - 1 ? (
            <>Next Question <ChevronRight className="w-5 h-5" /></>
          ) : (
            <>See Results <Trophy className="w-5 h-5" /></>
          )}
        </button>
      )}
    </div>
  );

  // Render result screen
  const renderResult = () => {
    const percentage = Math.round((score / 10) * 100);
    
    return (
      <div className="space-y-4 text-center">
        <div className="py-6">
          <div className="text-6xl mb-4">
            {percentage >= 80 ? '🏆' : percentage >= 60 ? '🎯' : percentage >= 40 ? '📚' : '💪'}
          </div>
          <h3 className="text-xl font-bold dark:text-white mb-1">Challenge Complete!</h3>
          <p className="text-gray-500 dark:text-gray-400">You scored {score} out of 10</p>
        </div>

        {/* Score Ring */}
        <div className="relative w-32 h-32 mx-auto">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 128 128">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              className="text-gray-200 dark:text-gray-700"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="url(#resultGradient)"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={352}
              strokeDashoffset={352 - (352 * percentage) / 100}
            />
            <defs>
              <linearGradient id="resultGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold dark:text-white">{percentage}%</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3">
            <div className="text-2xl font-bold text-green-500">{score}</div>
            <div className="text-xs text-gray-500">Correct</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3">
            <div className="text-2xl font-bold text-orange-500">{streak > bestStreak ? streak : bestStreak}</div>
            <div className="text-xs text-gray-500">Best Streak</div>
          </div>
        </div>

        {/* Message */}
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4">
          <p className="text-sm text-purple-800 dark:text-purple-200">
            {percentage >= 80 && "🔥 Amazing! You really know your topics well!"}
            {percentage >= 60 && percentage < 80 && "💪 Good job! Keep practicing to improve!"}
            {percentage >= 40 && percentage < 60 && "📚 Not bad! Review topics you missed."}
            {percentage < 40 && "🎯 Keep studying! You'll get better with practice."}
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={() => setView('start')}
            className="flex-1 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white rounded-xl font-semibold active:scale-95 transition flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Play Again
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl font-semibold active:scale-95 transition"
            >
              Done
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 border-b border-gray-100 dark:border-gray-700 flex items-center gap-3">
          {onClose && view === 'start' && (
            <button onClick={onClose} className="p-2 -ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 active:scale-95 transition">
              <ArrowLeft className="w-5 h-5 dark:text-white" />
            </button>
          )}
          <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
            <Shuffle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold dark:text-white">Reverse Learning</h2>
            <p className="text-xs text-gray-500">Guess the topic from content</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {view === 'start' && renderStart()}
          {view === 'playing' && renderPlaying()}
          {view === 'result' && renderResult()}
        </div>
      </div>
    </div>
  );
};

export default ReverseLearning;
