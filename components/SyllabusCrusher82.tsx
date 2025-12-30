import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, Shuffle, Target, BookOpen, Brain, FileText, HelpCircle, CheckCircle2, XCircle, Zap, Trophy, Flame, Star, ChevronRight, ChevronDown, ChevronUp, Play, Pause, RotateCcw, Clock, Award, Sparkles, List, Eye, EyeOff, Layers, Globe, Search, ExternalLink } from 'lucide-react';
import { Subject, Chapter, Question, Flashcard, LongAnswer, Reel } from '../types';
import { MOCK_DATA } from '../constants';
import { Stream } from '../types';
import MarkdownRenderer from './MarkdownRenderer';

interface SyllabusCrusher82Props {
  onClose: () => void;
  stream: Stream;
  darkMode: boolean;
}

type CrusherPhase = 'SELECT' | 'OVERVIEW' | 'SUMMARY' | 'NOTES' | 'FLASHCARDS' | 'MCQS' | 'LONG_ANSWERS' | 'REELS' | 'COMPLETE';

interface PhaseProgress {
  phase: CrusherPhase;
  completed: boolean;
  score?: number;
}

const SyllabusCrusher82: React.FC<SyllabusCrusher82Props> = ({ onClose, stream, darkMode }) => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [currentPhase, setCurrentPhase] = useState<CrusherPhase>('SELECT');
  const [phaseProgress, setPhaseProgress] = useState<PhaseProgress[]>([]);
  const [isRandomMode, setIsRandomMode] = useState(false);
  const [showAllChapters, setShowAllChapters] = useState(false);
  
  // MCQ States
  const [currentMCQIndex, setCurrentMCQIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [mcqScore, setMcqScore] = useState(0);
  const [mcqAttempted, setMcqAttempted] = useState<Set<string>>(new Set());
  
  // Flashcard States
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [flashcardsKnown, setFlashcardsKnown] = useState<Set<string>>(new Set());
  
  // Long Answer States
  const [currentLongAnswerIndex, setCurrentLongAnswerIndex] = useState(0);
  const [showLongAnswer, setShowLongAnswer] = useState(false);
  
  // Reel States
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  
  // Timer
  const [studyTime, setStudyTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  
  // Search
  const [searchQuery, setSearchQuery] = useState('');

  const subjects = MOCK_DATA[stream]?.subjects || [];

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => setStudyTime(t => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // Start timer when phase changes from SELECT
  useEffect(() => {
    if (currentPhase !== 'SELECT') {
      setIsTimerRunning(true);
    }
  }, [currentPhase]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) {
      return `${hrs}h ${mins}m ${secs}s`;
    }
    return `${mins}m ${secs}s`;
  };

  // Pick random subject and chapter
  const pickRandom = useCallback(() => {
    const availableSubjects = subjects.filter(s => s.chapters && s.chapters.length > 0);
    if (availableSubjects.length === 0) return;
    
    const randomSubject = availableSubjects[Math.floor(Math.random() * availableSubjects.length)];
    const randomChapter = randomSubject.chapters[Math.floor(Math.random() * randomSubject.chapters.length)];
    
    setSelectedSubject(randomSubject);
    setSelectedChapter(randomChapter);
    setIsRandomMode(true);
    setCurrentPhase('OVERVIEW');
    resetAllStates();
  }, [subjects]);

  const resetAllStates = () => {
    setCurrentMCQIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setMcqScore(0);
    setMcqAttempted(new Set());
    setCurrentFlashcardIndex(0);
    setIsFlipped(false);
    setFlashcardsKnown(new Set());
    setCurrentLongAnswerIndex(0);
    setShowLongAnswer(false);
    setCurrentReelIndex(0);
    setPhaseProgress([]);
    setStudyTime(0);
  };

  const selectSubjectAndChapter = (subject: Subject, chapter: Chapter) => {
    setSelectedSubject(subject);
    setSelectedChapter(chapter);
    setIsRandomMode(false);
    setCurrentPhase('OVERVIEW');
    resetAllStates();
  };

  const markPhaseComplete = (phase: CrusherPhase, score?: number) => {
    setPhaseProgress(prev => [...prev.filter(p => p.phase !== phase), { phase, completed: true, score }]);
  };

  // Get all chapters across subjects
  const getAllChapters = () => {
    const allChapters: { subject: Subject; chapter: Chapter }[] = [];
    subjects.forEach(subject => {
      subject.chapters?.forEach(chapter => {
        allChapters.push({ subject, chapter });
      });
    });
    return allChapters;
  };

  // Filter chapters by search
  const filteredChapters = getAllChapters().filter(({ subject, chapter }) =>
    chapter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    subject.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Phase navigation
  const phases: CrusherPhase[] = ['OVERVIEW', 'SUMMARY', 'NOTES', 'FLASHCARDS', 'MCQS', 'LONG_ANSWERS', 'REELS', 'COMPLETE'];
  const currentPhaseIndex = phases.indexOf(currentPhase);

  const nextPhase = () => {
    if (currentPhaseIndex < phases.length - 1) {
      markPhaseComplete(currentPhase);
      setCurrentPhase(phases[currentPhaseIndex + 1]);
    }
  };

  const prevPhase = () => {
    if (currentPhaseIndex > 0) {
      setCurrentPhase(phases[currentPhaseIndex - 1]);
    }
  };

  // MCQ handling
  const handleMCQAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (selectedChapter && selectedChapter.mcqs[currentMCQIndex].correctIndex === index) {
      setMcqScore(s => s + 1);
    }
    setMcqAttempted(prev => new Set([...prev, selectedChapter?.mcqs[currentMCQIndex].id || '']));
  };

  const nextMCQ = () => {
    if (selectedChapter && currentMCQIndex < selectedChapter.mcqs.length - 1) {
      setCurrentMCQIndex(i => i + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      markPhaseComplete('MCQS', Math.round((mcqScore / (selectedChapter?.mcqs.length || 1)) * 100));
      nextPhase();
    }
  };

  const getPhaseIcon = (phase: CrusherPhase) => {
    switch (phase) {
      case 'OVERVIEW': return <Eye className="w-4 h-4" />;
      case 'SUMMARY': return <FileText className="w-4 h-4" />;
      case 'NOTES': return <BookOpen className="w-4 h-4" />;
      case 'FLASHCARDS': return <Layers className="w-4 h-4" />;
      case 'MCQS': return <HelpCircle className="w-4 h-4" />;
      case 'LONG_ANSWERS': return <FileText className="w-4 h-4" />;
      case 'REELS': return <Zap className="w-4 h-4" />;
      case 'COMPLETE': return <Trophy className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  // SELECT Phase
  const renderSelectPhase = () => (
    <div className="space-y-6">
      {/* Random Pick Section */}
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gradient-to-r from-purple-900 to-indigo-900' : 'bg-gradient-to-r from-purple-500 to-indigo-600'} text-white`}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Shuffle className="w-6 h-6" />
              Random Chapter Challenge! 🎲
            </h3>
            <p className="text-purple-200 mt-1">Let fate decide your chapter - Master whatever comes!</p>
          </div>
          <button
            onClick={pickRandom}
            className="px-6 py-3 bg-white text-purple-600 rounded-xl font-bold hover:bg-purple-100 transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <Shuffle className="w-5 h-5" />
            Pick Random!
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
        <input
          type="text"
          placeholder="Search subjects or chapters..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className={`w-full pl-10 pr-4 py-3 rounded-xl ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-gray-100 text-gray-800 border-gray-200'} border focus:ring-2 focus:ring-purple-500 outline-none`}
        />
      </div>

      {/* Subject Selection */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Select Subject & Chapter
          </h3>
          <button
            onClick={() => setShowAllChapters(!showAllChapters)}
            className={`text-sm ${darkMode ? 'text-purple-400' : 'text-purple-600'} hover:underline flex items-center gap-1`}
          >
            {showAllChapters ? 'Show by Subject' : 'Show All Chapters'}
            {showAllChapters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {showAllChapters ? (
          // All chapters list
          <div className="grid gap-2 max-h-96 overflow-y-auto">
            {filteredChapters.map(({ subject, chapter }) => (
              <button
                key={`${subject.id}-${chapter.id}`}
                onClick={() => selectSubjectAndChapter(subject, chapter)}
                className={`p-3 rounded-lg text-left ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className={`text-xs ${subject.color} text-white px-2 py-0.5 rounded mr-2`}>
                      {subject.name}
                    </span>
                    <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {chapter.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>📝 {chapter.mcqs?.length || 0}</span>
                    <span>🃏 {chapter.flashcards?.length || 0}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          // By subject
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {subjects.filter(s => s.chapters && s.chapters.length > 0).map(subject => (
              <div key={subject.id} className={`rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} overflow-hidden`}>
                <div className={`${subject.color} text-white px-4 py-2 font-bold`}>
                  {subject.name}
                </div>
                <div className="p-2 space-y-1">
                  {subject.chapters?.filter(c => 
                    c.title.toLowerCase().includes(searchQuery.toLowerCase())
                  ).map(chapter => (
                    <button
                      key={chapter.id}
                      onClick={() => selectSubjectAndChapter(subject, chapter)}
                      className={`w-full p-2 rounded text-left ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-all flex items-center justify-between`}
                    >
                      <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>
                        {chapter.title}
                      </span>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>📝 {chapter.mcqs?.length || 0}</span>
                        <span>🃏 {chapter.flashcards?.length || 0}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Stats */}
      <div className={`grid grid-cols-3 gap-4 p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="text-center">
          <div className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
            {subjects.length}
          </div>
          <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Subjects</div>
        </div>
        <div className="text-center">
          <div className={`text-2xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
            {getAllChapters().length}
          </div>
          <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Chapters</div>
        </div>
        <div className="text-center">
          <div className={`text-2xl font-bold ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
            {getAllChapters().reduce((acc, { chapter }) => acc + (chapter.mcqs?.length || 0), 0)}
          </div>
          <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total MCQs</div>
        </div>
      </div>
    </div>
  );

  // Phase Progress Bar
  const renderProgressBar = () => (
    <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} mb-4`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 rounded-lg ${selectedSubject?.color} text-white text-sm font-medium`}>
            {selectedSubject?.name}
          </span>
          <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            {selectedChapter?.title}
          </span>
          {isRandomMode && (
            <span className="px-2 py-0.5 bg-yellow-500 text-yellow-900 text-xs rounded-full font-bold">
              🎲 RANDOM
            </span>
          )}
        </div>
        <div className="flex items-center gap-4">
          <div className={`flex items-center gap-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <Clock className="w-4 h-4" />
            <span className="text-sm font-mono">{formatTime(studyTime)}</span>
          </div>
          <button
            onClick={() => setIsTimerRunning(!isTimerRunning)}
            className={`p-1 rounded ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
          >
            {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>
      </div>
      
      {/* Phase Progress */}
      <div className="flex items-center gap-1">
        {phases.filter(p => p !== 'SELECT').map((phase, index) => {
          const progress = phaseProgress.find(p => p.phase === phase);
          const isCurrent = phase === currentPhase;
          const isComplete = progress?.completed;
          
          return (
            <React.Fragment key={phase}>
              <button
                onClick={() => setCurrentPhase(phase)}
                className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  isCurrent
                    ? darkMode ? 'bg-purple-600 text-white' : 'bg-purple-500 text-white'
                    : isComplete
                    ? darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-700'
                    : darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-500'
                }`}
              >
                {getPhaseIcon(phase)}
                <span className="hidden sm:inline">{phase === 'LONG_ANSWERS' ? 'LONG' : phase}</span>
                {isComplete && <CheckCircle2 className="w-3 h-3" />}
              </button>
              {index < phases.length - 2 && (
                <ChevronRight className={`w-3 h-3 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );

  // Overview Phase
  const renderOverviewPhase = () => (
    <div className="space-y-6">
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gradient-to-br from-indigo-900 to-purple-900' : 'bg-gradient-to-br from-indigo-500 to-purple-600'} text-white`}>
        <h2 className="text-2xl font-bold mb-2">{selectedChapter?.title}</h2>
        <p className="text-purple-200">{selectedChapter?.description}</p>
      </div>

      {/* Chapter Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} text-center`}>
          <div className="text-3xl mb-1">📝</div>
          <div className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            {selectedChapter?.mcqs?.length || 0}
          </div>
          <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>MCQs</div>
        </div>
        <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} text-center`}>
          <div className="text-3xl mb-1">🃏</div>
          <div className={`text-2xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
            {selectedChapter?.flashcards?.length || 0}
          </div>
          <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Flashcards</div>
        </div>
        <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} text-center`}>
          <div className="text-3xl mb-1">📜</div>
          <div className={`text-2xl font-bold ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
            {selectedChapter?.longAnswers?.length || 0}
          </div>
          <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Long Answers</div>
        </div>
        <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} text-center`}>
          <div className="text-3xl mb-1">🎬</div>
          <div className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
            {selectedChapter?.reels?.length || 0}
          </div>
          <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Reels</div>
        </div>
      </div>

      {/* Study Plan */}
      <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <h3 className={`font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>📚 Your Crushing Plan</h3>
        <div className="space-y-2">
          {[
            { icon: '📖', label: 'Quick Summary', desc: 'Get the gist in 2 mins' },
            { icon: '📝', label: 'Detailed Notes', desc: 'Deep dive into concepts' },
            { icon: '🃏', label: 'Flashcards', desc: `Master ${selectedChapter?.flashcards?.length || 0} key facts` },
            { icon: '❓', label: 'MCQ Practice', desc: `Test with ${selectedChapter?.mcqs?.length || 0} questions` },
            { icon: '📜', label: 'Long Answers', desc: `${selectedChapter?.longAnswers?.length || 0} board-type questions` },
            { icon: '🎬', label: 'Quick Reels', desc: 'Visual revision' }
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-3 p-2 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <span className="text-xl">{item.icon}</span>
              <div>
                <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{item.label}</div>
                <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={nextPhase}
        className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all flex items-center justify-center gap-2"
      >
        <Zap className="w-5 h-5" />
        START CRUSHING! 🔥
      </button>
    </div>
  );

  // Summary Phase
  const renderSummaryPhase = () => (
    <div className="space-y-4">
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          <FileText className="w-6 h-6 text-blue-500" />
          Chapter Summary
        </h3>
        <div className={`prose ${darkMode ? 'prose-invert' : ''} max-w-none`}>
          <MarkdownRenderer content={selectedChapter?.summary || 'No summary available.'} darkMode={darkMode} />
        </div>
      </div>
      
      <div className="flex justify-between">
        <button
          onClick={prevPhase}
          className={`px-6 py-3 rounded-xl font-medium ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'} flex items-center gap-2`}
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <button
          onClick={nextPhase}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium flex items-center gap-2"
        >
          Continue to Notes <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  // Notes Phase
  const renderNotesPhase = () => (
    <div className="space-y-4">
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} max-h-[60vh] overflow-y-auto`}>
        <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          <BookOpen className="w-6 h-6 text-green-500" />
          Detailed Notes
        </h3>
        <div className={`prose ${darkMode ? 'prose-invert' : ''} max-w-none`}>
          <MarkdownRenderer content={selectedChapter?.detailedNotes || 'No detailed notes available.'} darkMode={darkMode} />
        </div>
      </div>
      
      <div className="flex justify-between">
        <button onClick={prevPhase} className={`px-6 py-3 rounded-xl font-medium ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'} flex items-center gap-2`}>
          <ArrowLeft className="w-4 h-4" /> Summary
        </button>
        <button onClick={nextPhase} className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium flex items-center gap-2">
          Practice Flashcards <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  // Flashcards Phase
  const renderFlashcardsPhase = () => {
    const flashcards = selectedChapter?.flashcards || [];
    const currentCard = flashcards[currentFlashcardIndex];
    
    if (flashcards.length === 0) {
      return (
        <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} text-center`}>
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>No flashcards available for this chapter.</p>
          <button onClick={nextPhase} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg">
            Continue to MCQs
          </button>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {/* Progress */}
        <div className="flex items-center justify-between">
          <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Card {currentFlashcardIndex + 1} of {flashcards.length}
          </span>
          <span className={`text-green-500`}>
            ✓ Known: {flashcardsKnown.size} / {flashcards.length}
          </span>
        </div>

        {/* Flashcard */}
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className={`p-8 rounded-xl min-h-[300px] cursor-pointer transition-all transform ${
            darkMode ? 'bg-gradient-to-br from-purple-900 to-indigo-900' : 'bg-gradient-to-br from-purple-500 to-indigo-600'
          } text-white flex flex-col items-center justify-center text-center`}
        >
          <div className={`text-xs mb-4 ${isFlipped ? 'text-green-300' : 'text-purple-300'}`}>
            {isFlipped ? '📝 ANSWER' : '❓ QUESTION'} • Tap to flip
          </div>
          <div className="text-xl font-medium">
            {isFlipped ? currentCard.back : currentCard.front}
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-3">
          <button
            onClick={() => {
              if (currentFlashcardIndex > 0) {
                setCurrentFlashcardIndex(i => i - 1);
                setIsFlipped(false);
              }
            }}
            disabled={currentFlashcardIndex === 0}
            className={`flex-1 py-3 rounded-xl font-medium ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'} disabled:opacity-50`}
          >
            ← Previous
          </button>
          <button
            onClick={() => {
              setFlashcardsKnown(prev => new Set([...prev, currentCard.id]));
              if (currentFlashcardIndex < flashcards.length - 1) {
                setCurrentFlashcardIndex(i => i + 1);
                setIsFlipped(false);
              } else {
                markPhaseComplete('FLASHCARDS', Math.round((flashcardsKnown.size / flashcards.length) * 100));
                nextPhase();
              }
            }}
            className="flex-1 py-3 bg-green-500 text-white rounded-xl font-medium"
          >
            ✓ Got It!
          </button>
          <button
            onClick={() => {
              if (currentFlashcardIndex < flashcards.length - 1) {
                setCurrentFlashcardIndex(i => i + 1);
                setIsFlipped(false);
              }
            }}
            disabled={currentFlashcardIndex === flashcards.length - 1}
            className={`flex-1 py-3 rounded-xl font-medium ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'} disabled:opacity-50`}
          >
            Skip →
          </button>
        </div>

        <button
          onClick={() => {
            markPhaseComplete('FLASHCARDS', Math.round((flashcardsKnown.size / flashcards.length) * 100));
            nextPhase();
          }}
          className={`w-full py-3 rounded-xl font-medium ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'}`}
        >
          Skip to MCQs →
        </button>
      </div>
    );
  };

  // MCQs Phase
  const renderMCQsPhase = () => {
    const mcqs = selectedChapter?.mcqs || [];
    const currentMCQ = mcqs[currentMCQIndex];
    
    if (mcqs.length === 0) {
      return (
        <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} text-center`}>
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>No MCQs available for this chapter.</p>
          <button onClick={nextPhase} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg">
            Continue to Long Answers
          </button>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {/* Progress */}
        <div className="flex items-center justify-between">
          <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Question {currentMCQIndex + 1} of {mcqs.length}
          </span>
          <span className="text-green-500 font-bold">
            Score: {mcqScore}/{mcqAttempted.size}
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all"
            style={{ width: `${((currentMCQIndex + 1) / mcqs.length) * 100}%` }}
          />
        </div>

        {/* Question */}
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            {currentMCQ.question}
          </h3>
          <div className="space-y-2">
            {currentMCQ.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = currentMCQ.correctIndex === index;
              const showResult = selectedAnswer !== null;
              
              return (
                <button
                  key={index}
                  onClick={() => handleMCQAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 rounded-lg text-left transition-all flex items-center gap-3 ${
                    showResult
                      ? isCorrect
                        ? 'bg-green-100 border-2 border-green-500 text-green-800'
                        : isSelected
                        ? 'bg-red-100 border-2 border-red-500 text-red-800'
                        : darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'
                      : darkMode
                      ? 'bg-gray-700 hover:bg-gray-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    showResult && isCorrect ? 'bg-green-500 text-white' :
                    showResult && isSelected ? 'bg-red-500 text-white' :
                    darkMode ? 'bg-gray-600' : 'bg-gray-200'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1">{option}</span>
                  {showResult && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                  {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-600" />}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className={`mt-4 p-4 rounded-lg ${darkMode ? 'bg-blue-900/50' : 'bg-blue-50'}`}>
              <div className={`font-medium mb-1 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                💡 Explanation:
              </div>
              <p className={darkMode ? 'text-blue-200' : 'text-blue-600'}>
                {currentMCQ.explanation}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <button
          onClick={nextMCQ}
          className={`w-full py-4 rounded-xl font-bold ${
            selectedAnswer !== null
              ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
              : darkMode ? 'bg-gray-700 text-gray-500' : 'bg-gray-200 text-gray-400'
          }`}
          disabled={selectedAnswer === null}
        >
          {currentMCQIndex < mcqs.length - 1 ? 'Next Question →' : 'Complete MCQs ✓'}
        </button>
      </div>
    );
  };

  // Long Answers Phase
  const renderLongAnswersPhase = () => {
    const longAnswers = selectedChapter?.longAnswers || [];
    const currentLA = longAnswers[currentLongAnswerIndex];
    
    if (longAnswers.length === 0) {
      return (
        <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} text-center`}>
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>No long answers available for this chapter.</p>
          <button onClick={nextPhase} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg">
            Continue to Reels
          </button>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Question {currentLongAnswerIndex + 1} of {longAnswers.length}
          </span>
          <span className="text-xs text-yellow-500">📝 5/8 Marker</span>
        </div>

        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            {currentLA.question}
          </h3>
          
          {currentLA.mnemonic && (
            <div className={`mb-4 p-3 rounded-lg ${darkMode ? 'bg-yellow-900/30' : 'bg-yellow-50'}`}>
              <span className={`font-medium ${darkMode ? 'text-yellow-300' : 'text-yellow-700'}`}>
                💡 Mnemonic: {currentLA.mnemonic}
              </span>
            </div>
          )}

          <button
            onClick={() => setShowLongAnswer(!showLongAnswer)}
            className={`w-full py-3 rounded-lg mb-4 ${
              showLongAnswer
                ? 'bg-green-500 text-white'
                : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
            } flex items-center justify-center gap-2`}
          >
            {showLongAnswer ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showLongAnswer ? 'Hide Answer' : 'Show Model Answer'}
          </button>

          {showLongAnswer && (
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} prose ${darkMode ? 'prose-invert' : ''} max-w-none`}>
              <MarkdownRenderer content={currentLA.answer} darkMode={darkMode} />
            </div>
          )}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => {
              if (currentLongAnswerIndex > 0) {
                setCurrentLongAnswerIndex(i => i - 1);
                setShowLongAnswer(false);
              }
            }}
            disabled={currentLongAnswerIndex === 0}
            className={`flex-1 py-3 rounded-xl ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'} disabled:opacity-50`}
          >
            ← Previous
          </button>
          <button
            onClick={() => {
              if (currentLongAnswerIndex < longAnswers.length - 1) {
                setCurrentLongAnswerIndex(i => i + 1);
                setShowLongAnswer(false);
              } else {
                markPhaseComplete('LONG_ANSWERS');
                nextPhase();
              }
            }}
            className="flex-1 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl font-medium"
          >
            {currentLongAnswerIndex < longAnswers.length - 1 ? 'Next Question →' : 'Continue to Reels ✓'}
          </button>
        </div>
      </div>
    );
  };

  // Reels Phase
  const renderReelsPhase = () => {
    const reels = selectedChapter?.reels || [];
    const currentReel = reels[currentReelIndex];
    
    if (reels.length === 0) {
      return (
        <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} text-center`}>
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>No reels available for this chapter.</p>
          <button onClick={() => { markPhaseComplete('REELS'); nextPhase(); }} className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg">
            Complete Chapter! 🎉
          </button>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Reel {currentReelIndex + 1} of {reels.length}
          </span>
          <span className="text-purple-500">🎬 Quick Revision</span>
        </div>

        {/* Reel Card */}
        <div className={`${currentReel.color} p-8 rounded-xl min-h-[300px] flex flex-col items-center justify-center text-white text-center`}>
          <h3 className="text-xl font-bold mb-4">{currentReel.title}</h3>
          <p className="text-lg whitespace-pre-line">{currentReel.content}</p>
        </div>

        {/* Reel Navigation */}
        <div className="flex gap-3">
          <button
            onClick={() => setCurrentReelIndex(i => Math.max(0, i - 1))}
            disabled={currentReelIndex === 0}
            className={`flex-1 py-3 rounded-xl ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'} disabled:opacity-50`}
          >
            ← Previous
          </button>
          <button
            onClick={() => {
              if (currentReelIndex < reels.length - 1) {
                setCurrentReelIndex(i => i + 1);
              } else {
                markPhaseComplete('REELS');
                nextPhase();
              }
            }}
            className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium"
          >
            {currentReelIndex < reels.length - 1 ? 'Next Reel →' : 'Complete! 🎉'}
          </button>
        </div>

        {/* Reel dots */}
        <div className="flex justify-center gap-1">
          {reels.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReelIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentReelIndex
                  ? 'bg-purple-500 w-4'
                  : darkMode ? 'bg-gray-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  // Complete Phase
  const renderCompletePhase = () => {
    const mcqPhase = phaseProgress.find(p => p.phase === 'MCQS');
    const flashcardPhase = phaseProgress.find(p => p.phase === 'FLASHCARDS');
    
    return (
      <div className="space-y-6">
        <div className={`p-8 rounded-xl ${darkMode ? 'bg-gradient-to-br from-green-900 to-emerald-900' : 'bg-gradient-to-br from-green-500 to-emerald-600'} text-white text-center`}>
          <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-3xl font-bold mb-2">Chapter Crushed! 🎉</h2>
          <p className="text-green-200">You've completed {selectedChapter?.title}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} text-center`}>
            <Clock className="w-8 h-8 mx-auto mb-2 text-blue-500" />
            <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {formatTime(studyTime)}
            </div>
            <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Study Time</div>
          </div>
          <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} text-center`}>
            <Award className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
            <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {mcqPhase?.score || 0}%
            </div>
            <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>MCQ Score</div>
          </div>
          <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} text-center`}>
            <Layers className="w-8 h-8 mx-auto mb-2 text-green-500" />
            <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {flashcardPhase?.score || 0}%
            </div>
            <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Flashcards Known</div>
          </div>
          <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} text-center`}>
            <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-purple-500" />
            <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {phaseProgress.filter(p => p.completed).length}/{phases.length - 2}
            </div>
            <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Phases Done</div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={() => {
              setCurrentPhase('SELECT');
              setSelectedSubject(null);
              setSelectedChapter(null);
              resetAllStates();
            }}
            className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-bold flex items-center justify-center gap-2"
          >
            <Target className="w-5 h-5" />
            Crush Another Chapter!
          </button>
          <button
            onClick={pickRandom}
            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 ${
              darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            <Shuffle className="w-5 h-5" />
            Random Challenge 🎲
          </button>
          <button
            onClick={onClose}
            className={`w-full py-3 rounded-xl ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
          >
            Exit Syllabus Crusher
          </button>
        </div>
      </div>
    );
  };

  const renderCurrentPhase = () => {
    switch (currentPhase) {
      case 'SELECT': return renderSelectPhase();
      case 'OVERVIEW': return renderOverviewPhase();
      case 'SUMMARY': return renderSummaryPhase();
      case 'NOTES': return renderNotesPhase();
      case 'FLASHCARDS': return renderFlashcardsPhase();
      case 'MCQS': return renderMCQsPhase();
      case 'LONG_ANSWERS': return renderLongAnswersPhase();
      case 'REELS': return renderReelsPhase();
      case 'COMPLETE': return renderCompletePhase();
      default: return renderSelectPhase();
    }
  };

  return (
    <div className={`fixed inset-0 z-50 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} overflow-y-auto`}>
      {/* Header */}
      <div className={`sticky top-0 ${darkMode ? 'bg-gray-900/95' : 'bg-gray-50/95'} backdrop-blur-sm p-4 border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'} z-10`}>
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <button
            onClick={currentPhase === 'SELECT' ? onClose : () => setCurrentPhase('SELECT')}
            className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-200 text-gray-600'}`}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2">
            <div className="text-2xl">🔥</div>
            <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Syllabus Crusher 82
            </h1>
          </div>
          <div className="w-10" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-4">
        {currentPhase !== 'SELECT' && selectedChapter && renderProgressBar()}
        {renderCurrentPhase()}
      </div>
    </div>
  );
};

export default SyllabusCrusher82;
