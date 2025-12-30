import React, { useState, useEffect } from 'react';
import { Subject, Chapter, Question, Flashcard as FlashcardType, LongAnswer, Reel } from '../types';

// Phase constants for the crushing journey
type Phase = 'SELECT' | 'OVERVIEW' | 'SUMMARY' | 'NOTES' | 'FLASHCARDS' | 'MCQS' | 'LONG_ANSWERS' | 'REELS' | 'COMPLETE';

const PHASES: Phase[] = ['SELECT', 'OVERVIEW', 'SUMMARY', 'NOTES', 'FLASHCARDS', 'MCQS', 'LONG_ANSWERS', 'REELS', 'COMPLETE'];

const PHASE_LABELS: Record<Phase, string> = {
  SELECT: '📚 Select Subject',
  OVERVIEW: '🎯 Chapter Overview',
  SUMMARY: '📝 Chapter Summary',
  NOTES: '📖 Study Notes',
  FLASHCARDS: '🎴 Flashcards',
  MCQS: '✅ MCQ Practice',
  LONG_ANSWERS: '📜 Long Answers',
  REELS: '🎬 Quick Reels',
  COMPLETE: '🏆 Complete!'
};

interface SyllabusCrusher82Props {
  onClose: () => void;
  subjects: Subject[];
  darkMode: boolean;
}

// Chapter progress tracker
interface ChapterProgress {
  overview: boolean;
  summary: boolean;
  notes: boolean;
  flashcards: boolean;
  mcqs: boolean;
  longAnswers: boolean;
  reels: boolean;
}

const SyllabusCrusher82: React.FC<SyllabusCrusher82Props> = ({ onClose, subjects, darkMode }) => {
  // Core state
  const [currentPhase, setCurrentPhase] = useState<Phase>('SELECT');
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [subjectProgress, setSubjectProgress] = useState<Record<number, ChapterProgress>>({});
  
  // Flashcard state
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [showFlashcardAnswer, setShowFlashcardAnswer] = useState(false);
  
  // MCQ state
  const [currentMCQIndex, setCurrentMCQIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [mcqAnswered, setMcqAnswered] = useState(false);
  const [mcqScore, setMcqScore] = useState(0);
  
  // Long answer state
  const [currentLongAnswerIndex, setCurrentLongAnswerIndex] = useState(0);
  const [showLongAnswer, setShowLongAnswer] = useState(false);
  
  // Reel state
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  
  // Get current chapter safely
  const currentChapter: Chapter | null = selectedSubject?.chapters?.[currentChapterIndex] || null;
  const totalChapters = selectedSubject?.chapters?.length || 0;
  
  // Get all chapters that are complete
  const getCompletedChaptersCount = () => {
    if (!selectedSubject) return 0;
    let count = 0;
    selectedSubject.chapters?.forEach((_, idx) => {
      const progress = subjectProgress[idx];
      if (progress && progress.overview && progress.summary && progress.notes && 
          progress.flashcards && progress.mcqs && progress.longAnswers && progress.reels) {
        count++;
      }
    });
    return count;
  };

  // Initialize chapter progress when subject is selected
  useEffect(() => {
    if (selectedSubject) {
      const initialProgress: Record<number, ChapterProgress> = {};
      selectedSubject.chapters?.forEach((_, idx) => {
        initialProgress[idx] = {
          overview: false,
          summary: false,
          notes: false,
          flashcards: false,
          mcqs: false,
          longAnswers: false,
          reels: false
        };
      });
      setSubjectProgress(initialProgress);
    }
  }, [selectedSubject]);

  // Mark current phase as complete for current chapter
  const markPhaseComplete = (phase: keyof ChapterProgress) => {
    setSubjectProgress(prev => ({
      ...prev,
      [currentChapterIndex]: {
        ...prev[currentChapterIndex],
        [phase]: true
      }
    }));
  };

  // Get phase key for progress tracking
  const getPhaseKey = (phase: Phase): keyof ChapterProgress | null => {
    const mapping: Partial<Record<Phase, keyof ChapterProgress>> = {
      OVERVIEW: 'overview',
      SUMMARY: 'summary',
      NOTES: 'notes',
      FLASHCARDS: 'flashcards',
      MCQS: 'mcqs',
      LONG_ANSWERS: 'longAnswers',
      REELS: 'reels'
    };
    return mapping[phase] || null;
  };

  // Select random subject with all chapters
  const handleRandomSubject = () => {
    const validSubjects = subjects.filter(s => s && s.id && s.name && s.chapters?.length > 0);
    if (validSubjects.length === 0) return;
    const randomIndex = Math.floor(Math.random() * validSubjects.length);
    const subject = validSubjects[randomIndex];
    setSelectedSubject(subject);
    setCurrentChapterIndex(0);
    setCurrentPhase('OVERVIEW');
  };

  // Select specific subject
  const handleSelectSubject = (subject: Subject) => {
    setSelectedSubject(subject);
    setCurrentChapterIndex(0);
    setCurrentPhase('OVERVIEW');
  };

  // Move to next phase within current chapter
  const handleNextPhase = () => {
    const currentPhaseIndex = PHASES.indexOf(currentPhase);
    
    // Mark current phase complete
    const phaseKey = getPhaseKey(currentPhase);
    if (phaseKey) {
      markPhaseComplete(phaseKey);
    }
    
    if (currentPhaseIndex < PHASES.length - 2) { // -2 because COMPLETE is handled separately
      setCurrentPhase(PHASES[currentPhaseIndex + 1]);
      // Reset states for new phase
      setCurrentFlashcardIndex(0);
      setShowFlashcardAnswer(false);
      setCurrentMCQIndex(0);
      setSelectedAnswer(null);
      setMcqAnswered(false);
      setCurrentLongAnswerIndex(0);
      setShowLongAnswer(false);
      setCurrentReelIndex(0);
    } else {
      // Mark reels complete and check if all chapters done
      markPhaseComplete('reels');
      
      if (currentChapterIndex < totalChapters - 1) {
        // Move to next chapter
        setCurrentChapterIndex(prev => prev + 1);
        setCurrentPhase('OVERVIEW');
        // Reset all states
        setCurrentFlashcardIndex(0);
        setShowFlashcardAnswer(false);
        setCurrentMCQIndex(0);
        setSelectedAnswer(null);
        setMcqAnswered(false);
        setMcqScore(0);
        setCurrentLongAnswerIndex(0);
        setShowLongAnswer(false);
        setCurrentReelIndex(0);
      } else {
        // All chapters complete!
        setCurrentPhase('COMPLETE');
      }
    }
  };

  // Skip to specific chapter
  const jumpToChapter = (index: number) => {
    if (index >= 0 && index < totalChapters) {
      setCurrentChapterIndex(index);
      setCurrentPhase('OVERVIEW');
      // Reset states
      setCurrentFlashcardIndex(0);
      setShowFlashcardAnswer(false);
      setCurrentMCQIndex(0);
      setSelectedAnswer(null);
      setMcqAnswered(false);
      setMcqScore(0);
      setCurrentLongAnswerIndex(0);
      setShowLongAnswer(false);
      setCurrentReelIndex(0);
    }
  };

  // Get MCQs for current chapter
  const getCurrentMCQs = (): Question[] => {
    if (!currentChapter) return [];
    return currentChapter.mcqs?.slice(0, 10) || [];
  };

  // Get Long Answer questions
  const getCurrentLongAnswers = (): LongAnswer[] => {
    if (!currentChapter) return [];
    return currentChapter.longAnswers?.slice(0, 5) || [];
  };

  // Get flashcards
  const getCurrentFlashcards = (): FlashcardType[] => {
    if (!currentChapter) return [];
    return currentChapter.flashcards?.slice(0, 10) || [];
  };

  // Get reels
  const getCurrentReels = (): Reel[] => {
    if (!currentChapter) return [];
    return currentChapter.reels?.slice(0, 8) || [];
  };

  // Handle MCQ answer
  const handleMCQAnswer = (answerIndex: number) => {
    if (mcqAnswered) return;
    setSelectedAnswer(answerIndex);
    setMcqAnswered(true);
    
    const mcqs = getCurrentMCQs();
    const currentQ = mcqs[currentMCQIndex];
    if (currentQ && answerIndex === currentQ.correctIndex) {
      setMcqScore(prev => prev + 1);
    }
  };

  // Next MCQ
  const handleNextMCQ = () => {
    const mcqs = getCurrentMCQs();
    if (currentMCQIndex < mcqs.length - 1) {
      setCurrentMCQIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setMcqAnswered(false);
    }
  };

  // Render Subject Selection
  const renderSubjectSelection = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          🔥 Syllabus Crusher 82 🔥
        </h2>
        <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Select a subject to crush ALL chapters!
        </p>
      </div>

      {/* Random Subject Button */}
      <button
        onClick={handleRandomSubject}
        className="w-full p-6 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-bold text-xl shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all"
      >
        🎲 RANDOM SUBJECT - Crush It All!
      </button>

      <div className="text-center text-gray-400 my-4">— OR —</div>

      {/* Subject Grid */}
      <div className="grid grid-cols-2 gap-4">
        {subjects.filter(s => s && s.id && s.name).map((subject) => (
          <button
            key={subject.id}
            onClick={() => handleSelectSubject(subject)}
            className={`p-4 rounded-xl ${subject.color || 'bg-blue-500'} text-white font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all`}
          >
            <div className="text-2xl mb-2">{subject.icon || '📚'}</div>
            <div>{subject.name}</div>
            <div className="text-sm opacity-80 mt-1">
              {subject.chapters?.length || 0} chapters
            </div>
          </button>
        ))}
      </div>

      {subjects.filter(s => s && s.id && s.name).length === 0 && (
        <div className={`text-center p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            No subjects selected! Please select subjects in your profile settings.
          </p>
        </div>
      )}
    </div>
  );

  // Render Chapter Overview
  const renderOverview = () => {
    if (!currentChapter) {
      return (
        <div className="text-center p-8">
          <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>No chapter data available</p>
          <button onClick={() => setCurrentPhase('SELECT')} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg">
            Go Back
          </button>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-lg ${selectedSubject?.color || 'bg-blue-500'} text-white text-sm font-medium`}>
              {selectedSubject?.name}
            </span>
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Chapter {currentChapterIndex + 1} of {totalChapters}
            </span>
          </div>

          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            📖 {currentChapter.title}
          </h2>
          
          {currentChapter.description && (
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {currentChapter.description}
            </p>
          )}

          {/* Chapter Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <div className="text-2xl mb-1">🎴</div>
              <div className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {currentChapter.flashcards?.length || 0}
              </div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Flashcards</div>
            </div>
            <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
              <div className="text-2xl mb-1">✅</div>
              <div className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {currentChapter.mcqs?.length || 0}
              </div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>MCQs</div>
            </div>
            <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
              <div className="text-2xl mb-1">📜</div>
              <div className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {currentChapter.longAnswers?.length || 0}
              </div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Long Qs</div>
            </div>
            <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-orange-50'}`}>
              <div className="text-2xl mb-1">🎬</div>
              <div className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {currentChapter.reels?.length || 0}
              </div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Reels</div>
            </div>
          </div>

          {/* Ready Button */}
          <button
            onClick={handleNextPhase}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.01] transition-all"
          >
            🚀 Start Crushing This Chapter!
          </button>
        </div>
      </div>
    );
  };

  // Render Summary Phase
  const renderSummary = () => {
    if (!currentChapter) return null;

    return (
      <div className="space-y-6">
        <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            📝 Chapter Summary
          </h2>
          
          <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} mb-6`}>
            <p className={`text-lg leading-relaxed whitespace-pre-wrap ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              {currentChapter.summary || `This chapter covers ${currentChapter.title}. Focus on understanding the key concepts.`}
            </p>
          </div>

          <button
            onClick={handleNextPhase}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Continue to Notes →
          </button>
        </div>
      </div>
    );
  };

  // Render Notes Phase
  const renderNotes = () => {
    if (!currentChapter) return null;

    return (
      <div className="space-y-6">
        <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            📖 Study Notes
          </h2>
          
          <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} max-h-[400px] overflow-y-auto`}>
            <div className={`whitespace-pre-wrap ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              {currentChapter.detailedNotes || currentChapter.summary || 'No detailed notes available for this chapter.'}
            </div>
          </div>

          <button
            onClick={handleNextPhase}
            className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Continue to Flashcards →
          </button>
        </div>
      </div>
    );
  };

  // Render Flashcards Phase
  const renderFlashcards = () => {
    const flashcards = getCurrentFlashcards();
    
    if (flashcards.length === 0) {
      return (
        <div className="space-y-6">
          <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg text-center`}>
            <div className="text-6xl mb-4">🎴</div>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              No flashcards available for this chapter
            </p>
            <button
              onClick={handleNextPhase}
              className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-xl font-semibold"
            >
              Skip to MCQs →
            </button>
          </div>
        </div>
      );
    }

    const currentCard = flashcards[currentFlashcardIndex];

    return (
      <div className="space-y-6">
        <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              🎴 Flashcards
            </h2>
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {currentFlashcardIndex + 1} / {flashcards.length}
            </span>
          </div>

          {/* Flashcard */}
          <div 
            onClick={() => setShowFlashcardAnswer(!showFlashcardAnswer)}
            className={`min-h-[200px] p-6 rounded-xl cursor-pointer transition-all transform hover:scale-[1.01] ${
              showFlashcardAnswer 
                ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white' 
                : `${darkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-blue-500 to-purple-600'} text-white`
            }`}
          >
            <p className="text-lg font-medium text-center">
              {showFlashcardAnswer ? currentCard?.back : currentCard?.front}
            </p>
            <p className="text-center mt-4 text-sm opacity-70">
              {showFlashcardAnswer ? '(Answer)' : 'Tap to reveal answer'}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => {
                setShowFlashcardAnswer(false);
                setCurrentFlashcardIndex(prev => Math.max(0, prev - 1));
              }}
              disabled={currentFlashcardIndex === 0}
              className={`flex-1 py-3 rounded-xl font-semibold ${
                currentFlashcardIndex === 0 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-gray-500 text-white hover:bg-gray-600'
              }`}
            >
              ← Previous
            </button>
            
            {currentFlashcardIndex < flashcards.length - 1 ? (
              <button
                onClick={() => {
                  setShowFlashcardAnswer(false);
                  setCurrentFlashcardIndex(prev => prev + 1);
                }}
                className="flex-1 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600"
              >
                Next →
              </button>
            ) : (
              <button
                onClick={handleNextPhase}
                className="flex-1 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600"
              >
                Continue to MCQs →
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Render MCQs Phase
  const renderMCQs = () => {
    const mcqs = getCurrentMCQs();
    
    if (mcqs.length === 0) {
      return (
        <div className="space-y-6">
          <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg text-center`}>
            <div className="text-6xl mb-4">✅</div>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              No MCQs available for this chapter
            </p>
            <button
              onClick={handleNextPhase}
              className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-xl font-semibold"
            >
              Skip to Long Answers →
            </button>
          </div>
        </div>
      );
    }

    const currentQ = mcqs[currentMCQIndex];

    return (
      <div className="space-y-6">
        <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              ✅ MCQ Practice
            </h2>
            <div className="flex items-center gap-4">
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Score: {mcqScore}/{currentMCQIndex + (mcqAnswered ? 1 : 0)}
              </span>
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Q {currentMCQIndex + 1}/{mcqs.length}
              </span>
            </div>
          </div>

          {/* Question */}
          <div className={`p-4 rounded-xl mb-6 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <p className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {currentQ?.question}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQ?.options?.map((option, idx) => {
              let bgClass = darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200';
              
              if (mcqAnswered) {
                if (idx === currentQ.correctIndex) {
                  bgClass = 'bg-green-500 text-white';
                } else if (idx === selectedAnswer && idx !== currentQ.correctIndex) {
                  bgClass = 'bg-red-500 text-white';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleMCQAnswer(idx)}
                  disabled={mcqAnswered}
                  className={`w-full p-4 rounded-xl text-left transition-all ${bgClass} ${
                    !mcqAnswered ? 'cursor-pointer' : ''
                  } ${darkMode && !mcqAnswered ? 'text-white' : ''}`}
                >
                  <span className="font-semibold mr-2">{String.fromCharCode(65 + idx)}.</span>
                  {option}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {mcqAnswered && currentQ?.explanation && (
            <div className={`mt-4 p-4 rounded-xl ${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
              <p className={`text-sm ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                💡 {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Navigation */}
          {mcqAnswered && (
            <div className="mt-6">
              {currentMCQIndex < mcqs.length - 1 ? (
                <button
                  onClick={handleNextMCQ}
                  className="w-full py-4 rounded-xl bg-blue-500 text-white font-bold hover:bg-blue-600"
                >
                  Next Question →
                </button>
              ) : (
                <button
                  onClick={handleNextPhase}
                  className="w-full py-4 rounded-xl bg-green-500 text-white font-bold hover:bg-green-600"
                >
                  Continue to Long Answers →
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  // Render Long Answers Phase
  const renderLongAnswers = () => {
    const longAnswers = getCurrentLongAnswers();
    
    if (longAnswers.length === 0) {
      return (
        <div className="space-y-6">
          <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg text-center`}>
            <div className="text-6xl mb-4">📜</div>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              No long answer questions available for this chapter
            </p>
            <button
              onClick={handleNextPhase}
              className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-xl font-semibold"
            >
              Skip to Reels →
            </button>
          </div>
        </div>
      );
    }

    const currentQ = longAnswers[currentLongAnswerIndex];

    return (
      <div className="space-y-6">
        <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              📜 Long Answer Practice
            </h2>
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {currentLongAnswerIndex + 1} / {longAnswers.length}
            </span>
          </div>

          {/* Question */}
          <div className={`p-4 rounded-xl mb-6 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <p className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {currentQ?.question}
            </p>
          </div>

          {/* Mnemonic if available */}
          {currentQ?.mnemonic && (
            <div className={`p-3 rounded-lg mb-4 ${darkMode ? 'bg-yellow-900/30' : 'bg-yellow-50'}`}>
              <p className={`text-sm ${darkMode ? 'text-yellow-300' : 'text-yellow-700'}`}>
                💡 Mnemonic: <strong>{currentQ.mnemonic}</strong>
              </p>
            </div>
          )}

          {/* Show/Hide Answer Button */}
          <button
            onClick={() => setShowLongAnswer(!showLongAnswer)}
            className={`w-full py-3 rounded-xl font-semibold mb-4 ${
              showLongAnswer 
                ? 'bg-gray-500 text-white' 
                : 'bg-purple-500 text-white hover:bg-purple-600'
            }`}
          >
            {showLongAnswer ? '🙈 Hide Answer' : '👁️ Show Model Answer'}
          </button>

          {/* Answer */}
          {showLongAnswer && currentQ?.answer && (
            <div className={`p-4 rounded-xl max-h-[300px] overflow-y-auto ${darkMode ? 'bg-green-900/30' : 'bg-green-50'}`}>
              <p className={`whitespace-pre-wrap ${darkMode ? 'text-green-200' : 'text-green-800'}`}>
                {currentQ.answer}
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => {
                setShowLongAnswer(false);
                setCurrentLongAnswerIndex(prev => Math.max(0, prev - 1));
              }}
              disabled={currentLongAnswerIndex === 0}
              className={`flex-1 py-3 rounded-xl font-semibold ${
                currentLongAnswerIndex === 0 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-gray-500 text-white hover:bg-gray-600'
              }`}
            >
              ← Previous
            </button>
            
            {currentLongAnswerIndex < longAnswers.length - 1 ? (
              <button
                onClick={() => {
                  setShowLongAnswer(false);
                  setCurrentLongAnswerIndex(prev => prev + 1);
                }}
                className="flex-1 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600"
              >
                Next →
              </button>
            ) : (
              <button
                onClick={handleNextPhase}
                className="flex-1 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600"
              >
                Continue to Reels →
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Render Reels Phase
  const renderReels = () => {
    const reels = getCurrentReels();
    
    if (reels.length === 0) {
      return (
        <div className="space-y-6">
          <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg text-center`}>
            <div className="text-6xl mb-4">🎬</div>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              No quick revision reels for this chapter
            </p>
            <button
              onClick={handleNextPhase}
              className="mt-6 px-8 py-3 bg-green-500 text-white rounded-xl font-semibold"
            >
              {currentChapterIndex < totalChapters - 1 ? 'Next Chapter →' : 'Complete Subject! 🎉'}
            </button>
          </div>
        </div>
      );
    }

    const currentReel = reels[currentReelIndex];

    return (
      <div className="space-y-6">
        <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              🎬 Quick Revision Reels
            </h2>
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {currentReelIndex + 1} / {reels.length}
            </span>
          </div>

          {/* Reel Card */}
          <div className={`min-h-[250px] ${currentReel?.color || 'bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600'} rounded-2xl p-6 flex flex-col items-center justify-center`}>
            {currentReel?.icon && <div className="text-4xl mb-4">{currentReel.icon}</div>}
            <h3 className="text-white text-xl font-bold text-center mb-3">{currentReel?.title}</h3>
            <p className="text-white text-lg text-center opacity-90">
              {currentReel?.content}
            </p>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-4">
            {reels.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentReelIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentReelIndex ? 'bg-purple-500 w-4' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setCurrentReelIndex(prev => Math.max(0, prev - 1))}
              disabled={currentReelIndex === 0}
              className={`flex-1 py-3 rounded-xl font-semibold ${
                currentReelIndex === 0 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-gray-500 text-white hover:bg-gray-600'
              }`}
            >
              ← Previous
            </button>
            
            {currentReelIndex < reels.length - 1 ? (
              <button
                onClick={() => setCurrentReelIndex(prev => prev + 1)}
                className="flex-1 py-3 rounded-xl bg-purple-500 text-white font-semibold hover:bg-purple-600"
              >
                Next →
              </button>
            ) : (
              <button
                onClick={handleNextPhase}
                className="flex-1 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600"
              >
                {currentChapterIndex < totalChapters - 1 ? 'Next Chapter →' : 'Complete! 🎉'}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Render Complete Phase
  const renderComplete = () => {
    const completedChapters = getCompletedChaptersCount();
    
    return (
      <div className="space-y-6">
        <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg text-center`}>
          <div className="text-8xl mb-6">🏆</div>
          <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Subject Crushed! 🎉
          </h2>
          <p className={`text-xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            You've completed <span className={`font-bold ${selectedSubject?.color?.replace('bg-', 'text-') || 'text-blue-500'}`}>{selectedSubject?.name}</span>!
          </p>
          
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} mb-6`}>
            <div className="text-4xl font-bold text-green-500 mb-2">
              {completedChapters} / {totalChapters}
            </div>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Chapters Completed</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => {
                setSelectedSubject(null);
                setCurrentPhase('SELECT');
                setCurrentChapterIndex(0);
                setSubjectProgress({});
              }}
              className="py-4 rounded-xl bg-purple-500 text-white font-semibold hover:bg-purple-600"
            >
              🔄 Crush Another Subject
            </button>
            <button
              onClick={onClose}
              className="py-4 rounded-xl bg-gray-500 text-white font-semibold hover:bg-gray-600"
            >
              ✅ Done for Now
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Progress Bar
  const renderProgressBar = () => {
    if (currentPhase === 'SELECT' || currentPhase === 'COMPLETE') return null;

    const phaseIndex = PHASES.indexOf(currentPhase);
    const totalPhases = PHASES.length - 2; // Exclude SELECT and COMPLETE
    const progress = ((phaseIndex) / totalPhases) * 100;

    return (
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-lg ${selectedSubject?.color || 'bg-blue-500'} text-white text-sm font-medium`}>
              {selectedSubject?.name}
            </span>
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Ch {currentChapterIndex + 1}/{totalChapters}: {currentChapter?.title}
            </span>
          </div>
          <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {PHASE_LABELS[currentPhase]}
          </span>
        </div>
        
        <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
          <div 
            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Chapter Progress Indicators */}
        <div className="flex gap-1 mt-3 flex-wrap">
          {Array.from({ length: totalChapters }).map((_, idx) => {
            const progress = subjectProgress[idx];
            const isComplete = progress && progress.overview && progress.summary && 
                              progress.notes && progress.flashcards && progress.mcqs && 
                              progress.longAnswers && progress.reels;
            const isCurrent = idx === currentChapterIndex;
            
            return (
              <button
                key={idx}
                onClick={() => jumpToChapter(idx)}
                className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                  isComplete 
                    ? 'bg-green-500 text-white' 
                    : isCurrent 
                    ? 'bg-purple-500 text-white ring-2 ring-purple-300' 
                    : darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-600'
                } hover:scale-110`}
                title={selectedSubject?.chapters?.[idx]?.title || `Chapter ${idx + 1}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  // Main render
  const renderCurrentPhase = () => {
    switch (currentPhase) {
      case 'SELECT': return renderSubjectSelection();
      case 'OVERVIEW': return renderOverview();
      case 'SUMMARY': return renderSummary();
      case 'NOTES': return renderNotes();
      case 'FLASHCARDS': return renderFlashcards();
      case 'MCQS': return renderMCQs();
      case 'LONG_ANSWERS': return renderLongAnswers();
      case 'REELS': return renderReels();
      case 'COMPLETE': return renderComplete();
      default: return renderSubjectSelection();
    }
  };

  return (
    <div className={`fixed inset-0 z-50 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} overflow-y-auto`}>
      <div className="max-w-2xl mx-auto p-4 pb-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onClose}
            className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200'}`}
          >
            <svg className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-800'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            🔥 Syllabus Crusher 82
          </h1>
          <div className="w-10" /> {/* Spacer */}
        </div>

        {/* Progress Bar */}
        {renderProgressBar()}

        {/* Current Phase Content */}
        {renderCurrentPhase()}
      </div>
    </div>
  );
};

export default SyllabusCrusher82;
