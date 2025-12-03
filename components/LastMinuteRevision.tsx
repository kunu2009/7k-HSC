import React, { useState, useEffect } from 'react';
import { Clock, X, Zap, AlertTriangle, BookOpen, Brain, Star, ChevronRight, CheckCircle, Target } from 'lucide-react';
import { Subject, Chapter, Question, Flashcard } from '../types';

interface LastMinuteRevisionProps {
  subjects: Subject[];
  onClose: () => void;
  onSelectChapter: (subjectIndex: number, chapterIndex: number) => void;
}

type TimeFrame = '15' | '30' | '60' | '120';

interface RevisionItem {
  subject: string;
  subjectIndex: number;
  chapter: string;
  chapterIndex: number;
  type: 'flashcard' | 'mcq';
  item: Flashcard | Question;
  itemIndex: number;
  priority: number; // 1=high (weak), 2=medium (not seen recently), 3=low (important chapters)
}

const LastMinuteRevision: React.FC<LastMinuteRevisionProps> = ({ subjects, onClose, onSelectChapter }) => {
  const [timeFrame, setTimeFrame] = useState<TimeFrame>('30');
  const [revisionMode, setRevisionMode] = useState<'setup' | 'studying' | 'complete'>('setup');
  const [revisionItems, setRevisionItems] = useState<RevisionItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [reviewed, setReviewed] = useState(0);
  const [focusArea, setFocusArea] = useState<'weak' | 'important' | 'mixed'>('mixed');

  // Generate revision items based on settings
  const generateRevisionItems = () => {
    const userProgress = JSON.parse(localStorage.getItem('7k-hsc-progress') || '{}');
    const errorLog = JSON.parse(localStorage.getItem('7k-error-log') || '[]');
    const importantChapters = JSON.parse(localStorage.getItem('7k-important-chapters') || '[]');
    
    const items: RevisionItem[] = [];
    const errorIds = new Set(errorLog.map((e: any) => `${e.subject}-${e.chapterId}-${e.questionId}`));
    
    // Calculate how many items to review based on time (approx 1 min per item)
    const maxItems = parseInt(timeFrame);
    
    subjects.forEach((subject, subjectIndex) => {
      subject.chapters.forEach((chapter, chapterIndex) => {
        const fcKey = `${subject.name}-${chapter.id}-flashcards`;
        const mcqKey = `${subject.name}-${chapter.id}-mcqs`;
        const completedFc = new Set(userProgress[fcKey] || []);
        const completedMcq = new Set(userProgress[mcqKey] || []);
        const isImportant = importantChapters.includes(`${subject.name}-${chapter.id}`);
        
        // Add flashcards
        chapter.flashcards?.forEach((fc, idx) => {
          const isWeak = errorIds.has(`${subject.name}-${chapter.id}-fc-${idx}`);
          const notSeen = !completedFc.has(idx);
          
          let priority = 3;
          if (isWeak) priority = 1;
          else if (notSeen) priority = 2;
          else if (isImportant) priority = 2;
          
          // Filter based on focus area
          if (focusArea === 'weak' && priority !== 1) return;
          if (focusArea === 'important' && !isImportant) return;
          
          items.push({
            subject: subject.name,
            subjectIndex,
            chapter: chapter.title,
            chapterIndex,
            type: 'flashcard',
            item: fc,
            itemIndex: idx,
            priority
          });
        });
        
        // Add MCQs
        chapter.mcqs?.forEach((mcq, idx) => {
          const isWeak = errorIds.has(`${subject.name}-${chapter.id}-mcq-${idx}`);
          const notSeen = !completedMcq.has(idx);
          
          let priority = 3;
          if (isWeak) priority = 1;
          else if (notSeen) priority = 2;
          else if (isImportant) priority = 2;
          
          // Filter based on focus area
          if (focusArea === 'weak' && priority !== 1) return;
          if (focusArea === 'important' && !isImportant) return;
          
          items.push({
            subject: subject.name,
            subjectIndex,
            chapter: chapter.title,
            chapterIndex,
            type: 'mcq',
            item: mcq,
            itemIndex: idx,
            priority
          });
        });
      });
    });
    
    // Sort by priority (weak items first) and shuffle within priority groups
    items.sort((a, b) => a.priority - b.priority);
    
    // Shuffle within same priority
    const shuffled = items.reduce((acc, item) => {
      const group = acc.find(g => g[0]?.priority === item.priority);
      if (group) {
        const randomIdx = Math.floor(Math.random() * (group.length + 1));
        group.splice(randomIdx, 0, item);
      } else {
        acc.push([item]);
      }
      return acc;
    }, [] as RevisionItem[][]).flat();
    
    return shuffled.slice(0, maxItems);
  };

  // Timer effect
  useEffect(() => {
    if (revisionMode !== 'studying' || !startTime) return;
    
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime.getTime()) / 1000);
      const totalSeconds = parseInt(timeFrame) * 60;
      const remaining = Math.max(0, totalSeconds - elapsed);
      setTimeRemaining(remaining);
      
      if (remaining === 0) {
        setRevisionMode('complete');
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [revisionMode, startTime, timeFrame]);

  const startRevision = () => {
    const items = generateRevisionItems();
    if (items.length === 0) {
      alert('No items found for revision with current settings. Try different options.');
      return;
    }
    setRevisionItems(items);
    setStartTime(new Date());
    setTimeRemaining(parseInt(timeFrame) * 60);
    setCurrentIndex(0);
    setReviewed(0);
    setRevisionMode('studying');
  };

  const handleNext = () => {
    setShowAnswer(false);
    setReviewed(prev => prev + 1);
    
    if (currentIndex < revisionItems.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setRevisionMode('complete');
    }
  };

  const handleSkip = () => {
    setShowAnswer(false);
    if (currentIndex < revisionItems.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentItem = revisionItems[currentIndex];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold dark:text-white">Last Minute Revision</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Quick revision before the exam
                </p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Setup Screen */}
        {revisionMode === 'setup' && (
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="space-y-6">
              {/* Time Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  How much time do you have?
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {(['15', '30', '60', '120'] as const).map(time => (
                    <button
                      key={time}
                      onClick={() => setTimeFrame(time)}
                      className={`p-4 rounded-xl border-2 transition ${
                        timeFrame === time
                          ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                        {time}
                      </div>
                      <div className="text-xs text-gray-500">minutes</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Focus Area */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  What to focus on?
                </label>
                <div className="space-y-2">
                  <button
                    onClick={() => setFocusArea('mixed')}
                    className={`w-full p-4 rounded-xl border-2 flex items-center gap-3 transition ${
                      focusArea === 'mixed'
                        ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Target className="w-6 h-6 text-orange-500" />
                    <div className="text-left">
                      <div className="font-medium dark:text-white">Smart Mix</div>
                      <div className="text-sm text-gray-500">Prioritize weak areas, then cover everything</div>
                    </div>
                  </button>
                  <button
                    onClick={() => setFocusArea('weak')}
                    className={`w-full p-4 rounded-xl border-2 flex items-center gap-3 transition ${
                      focusArea === 'weak'
                        ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                    <div className="text-left">
                      <div className="font-medium dark:text-white">Weak Areas Only</div>
                      <div className="text-sm text-gray-500">Focus on questions you got wrong before</div>
                    </div>
                  </button>
                  <button
                    onClick={() => setFocusArea('important')}
                    className={`w-full p-4 rounded-xl border-2 flex items-center gap-3 transition ${
                      focusArea === 'important'
                        ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Star className="w-6 h-6 text-amber-500" />
                    <div className="text-left">
                      <div className="font-medium dark:text-white">Important Chapters</div>
                      <div className="text-sm text-gray-500">Only starred/important chapters</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Start Button */}
              <button
                onClick={startRevision}
                className="w-full py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-bold text-lg hover:from-red-600 hover:to-orange-600 transition flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Start {timeFrame}-Minute Revision
              </button>

              {/* Tips */}
              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                <h4 className="font-medium text-amber-800 dark:text-amber-300 mb-2">💡 Quick Tips</h4>
                <ul className="text-sm text-amber-700 dark:text-amber-400 space-y-1">
                  <li>• Don't spend too long on any single item</li>
                  <li>• If you don't know it, move on quickly</li>
                  <li>• Focus on understanding, not memorizing</li>
                  <li>• Stay calm and confident!</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Studying Screen */}
        {revisionMode === 'studying' && currentItem && (
          <div className="flex-1 flex flex-col">
            {/* Progress Bar */}
            <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700/50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span className={`font-mono font-bold ${timeRemaining < 60 ? 'text-red-500' : 'text-orange-600 dark:text-orange-400'}`}>
                    {formatTime(timeRemaining)}
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  {currentIndex + 1} / {revisionItems.length}
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full transition-all"
                  style={{ width: `${((currentIndex + 1) / revisionItems.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Item Info */}
            <div className="px-6 py-2 flex items-center gap-2 text-sm">
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                currentItem.priority === 1 ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' :
                currentItem.priority === 2 ? 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' :
                'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
              }`}>
                {currentItem.priority === 1 ? '⚠️ Weak' : currentItem.priority === 2 ? '📌 Review' : '✓ Known'}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                {currentItem.subject} • {currentItem.chapter}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 overflow-y-auto">
              {currentItem.type === 'flashcard' ? (
                <div className="h-full flex flex-col items-center justify-center">
                  <div className={`w-full p-6 rounded-2xl text-center ${
                    showAnswer 
                      ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800' 
                      : 'bg-indigo-50 dark:bg-indigo-900/20 border-2 border-indigo-200 dark:border-indigo-800'
                  }`}>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <BookOpen className={`w-5 h-5 ${showAnswer ? 'text-green-500' : 'text-indigo-500'}`} />
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {showAnswer ? 'Answer' : 'Question'}
                      </span>
                    </div>
                    <p className="text-lg dark:text-white">
                      {showAnswer ? (currentItem.item as Flashcard).back : (currentItem.item as Flashcard).front}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="w-5 h-5 text-green-500" />
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">MCQ</span>
                    </div>
                    <p className="text-lg dark:text-white">{(currentItem.item as Question).question}</p>
                  </div>
                  
                  <div className="space-y-2">
                    {(currentItem.item as Question).options.map((opt, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl border-2 transition ${
                          showAnswer && idx === (currentItem.item as Question).correctIndex
                            ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                            : 'border-gray-200 dark:border-gray-700'
                        }`}
                      >
                        <span className={`${
                          showAnswer && idx === (currentItem.item as Question).correctIndex
                            ? 'text-green-700 dark:text-green-300 font-medium'
                            : 'dark:text-white'
                        }`}>
                          {String.fromCharCode(65 + idx)}. {opt}
                        </span>
                        {showAnswer && idx === (currentItem.item as Question).correctIndex && (
                          <CheckCircle className="w-4 h-4 text-green-500 inline ml-2" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex gap-3">
              {!showAnswer ? (
                <>
                  <button
                    onClick={() => setShowAnswer(true)}
                    className="flex-1 py-3 bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-600 transition"
                  >
                    Show Answer
                  </button>
                  <button
                    onClick={handleSkip}
                    className="px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                  >
                    Skip
                  </button>
                </>
              ) : (
                <button
                  onClick={handleNext}
                  className="flex-1 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition flex items-center justify-center gap-2"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Complete Screen */}
        {revisionMode === 'complete' && (
          <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold dark:text-white mb-2">Great Job! 🎉</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              You reviewed {reviewed} items in your {timeFrame}-minute session
            </p>
            
            <div className="w-full max-w-sm space-y-3">
              <button
                onClick={() => setRevisionMode('setup')}
                className="w-full py-3 bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-600 transition"
              >
                Start Another Session
              </button>
              <button
                onClick={onClose}
                className="w-full py-3 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              >
                Close
              </button>
            </div>

            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              💪 Stay confident and you'll do great on your exam!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LastMinuteRevision;
