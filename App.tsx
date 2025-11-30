

import React, { useState, useEffect } from 'react';
import { BookOpen, Layers, Zap, FileText, ChevronRight, ArrowLeft, GraduationCap, Video, Brain, PenTool, TrendingUp, Briefcase, Calculator, Sparkles, Clock, Star, PlayCircle, Home, LayoutGrid, X, Menu, PanelRightClose, PanelRightOpen, ArrowRight, Moon, Sun, Award, Globe, Atom, Dna, FlaskConical, Users, Building2, BookA, BarChart3, ClipboardList } from 'lucide-react';
import { MOCK_DATA } from './constants';
import { Stream, Subject, Chapter, ContentType } from './types';
import Flashcard from './components/Flashcard';
import MCQView from './components/MCQView';
import ReelView from './components/ReelView';
import LongAnswerView from './components/LongAnswerView';
import MarkdownRenderer from './components/MarkdownRenderer';
import CountdownTimer from './components/CountdownTimer';
import ProgressDashboard from './components/ProgressDashboard';
import StudyPlanner from './components/StudyPlanner';
import PreviousMarksInput from './components/PreviousMarksInput';
import WeaknessAnalysis from './components/WeaknessAnalysis';
import { useProgress } from './hooks/useProgress';
import { explainConcept } from './services/geminiService';

// --- Types ---
type ViewState = 
  | 'STREAM_SELECT'
  | 'DASHBOARD'
  | 'SUBJECT_DETAIL'
  | 'CHAPTER_DETAIL'
  | 'STUDY_MODE'
  | 'SYLLABUS_VIEW'
  | 'PAPER_PATTERN_VIEW'
  | 'PROGRESS_VIEW'
  | 'STUDY_PLANNER';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('STREAM_SELECT');
  const [selectedStream, setSelectedStream] = useState<Stream | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [studyMode, setStudyMode] = useState<ContentType | null>(null);
  
  const [chapterTab, setChapterTab] = useState<'OVERVIEW' | 'NOTES'>('OVERVIEW');
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // Dark Mode State
  const [darkMode, setDarkMode] = useState(false);
  
  // Progress Tracking
  const { 
    getChapterProgress, 
    updateMCQProgress, 
    updateFlashcardProgress,
    updateReelsProgress,
    markSummaryRead,
    markNotesRead,
    getSubjectCompletion,
    getStudyStats 
  } = useProgress();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // --- Handlers ---
  const selectStream = (stream: Stream) => {
    setSelectedStream(stream);
    setView('DASHBOARD');
  };

  const selectSubject = (subject: Subject) => {
    setSelectedSubject(subject);
    setSelectedChapter(null);
    setStudyMode(null);
    setView('SUBJECT_DETAIL');
  };

  const selectChapter = (chapter: Chapter) => {
    setSelectedChapter(chapter);
    setChapterTab('OVERVIEW');
    setView('CHAPTER_DETAIL');
  };

  const startStudy = (mode: ContentType) => {
    setStudyMode(mode);
    setView('STUDY_MODE');
  };

  const goBack = () => {
    if (view === 'STUDY_MODE' || view === 'SYLLABUS_VIEW' || view === 'PAPER_PATTERN_VIEW') {
      if (view === 'SYLLABUS_VIEW' || view === 'PAPER_PATTERN_VIEW') {
        setView('SUBJECT_DETAIL');
      } else {
        setView('CHAPTER_DETAIL');
      }
      setStudyMode(null);
    } else if (view === 'CHAPTER_DETAIL') {
      setView('SUBJECT_DETAIL');
      setSelectedChapter(null);
    } else if (view === 'SUBJECT_DETAIL') {
      setView('DASHBOARD');
      setSelectedSubject(null);
    } else if (view === 'DASHBOARD' || view === 'PROGRESS_VIEW' || view === 'STUDY_PLANNER') {
      setView('STREAM_SELECT');
      setSelectedStream(null);
    }
  };

  // MCQ completion handler
  const handleMCQComplete = (score: number, total: number) => {
    if (selectedChapter && selectedSubject) {
      updateMCQProgress(selectedChapter.id, selectedSubject.id, score, total);
    }
    setView('CHAPTER_DETAIL');
    setStudyMode(null);
  };

  const handleAiExplain = async () => {
    if (!aiQuery) return;
    setAiLoading(true);
    const context = selectedChapter 
      ? `Subject: ${selectedSubject?.name}, Chapter: ${selectedChapter.title}` 
      : `Subject: ${selectedSubject?.name || 'General 12th Standard'}`;
      
    const result = await explainConcept(aiQuery, context);
    setAiResponse(result || "Could not generate response.");
    setAiLoading(false);
  };

  // --- Sidebar Component ---
  const Sidebar = () => {
    if (!selectedStream) return null;
    const subjects = MOCK_DATA[selectedStream].subjects;

    return (
      <>
        {!isSidebarOpen && (
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="fixed top-4 right-4 z-[60] bg-white dark:bg-slate-800 p-2 rounded-full shadow-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 border border-slate-100 dark:border-slate-700 transition-transform hover:scale-110"
            title="Open Sidebar"
          >
             <PanelRightOpen size={24} />
          </button>
        )}

        <div 
          className={`fixed inset-y-0 right-0 z-[50] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-l border-slate-200 dark:border-slate-800 transition-all duration-300 ease-in-out flex flex-col ${
            isSidebarOpen ? 'w-[80px] sm:w-[240px] translate-x-0' : 'w-0 translate-x-full opacity-0 overflow-hidden'
          }`}
        >
           <div className="p-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
              <span className="font-black text-lg text-indigo-900 dark:text-indigo-100 hidden sm:block">7k 12th</span>
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400 transition mx-auto sm:mx-0"
              >
                 <PanelRightClose size={20} />
              </button>
           </div>

           <div className="flex-1 overflow-y-auto py-4 px-2 sm:px-4 space-y-6">
              <div className="space-y-2">
                 <button 
                   onClick={() => { setView('DASHBOARD'); setSelectedSubject(null); }}
                   className={`w-full p-3 rounded-xl flex items-center gap-3 transition-colors ${view === 'DASHBOARD' ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300' : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
                 >
                    <LayoutGrid size={22} className="shrink-0" />
                    <span className="font-semibold text-sm hidden sm:block">Dashboard</span>
                 </button>

                 <button 
                   onClick={() => { setView('STREAM_SELECT'); setSelectedStream(null); }}
                   className="w-full p-3 rounded-xl flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                 >
                    <Home size={22} className="shrink-0" />
                    <span className="font-semibold text-sm hidden sm:block">Home</span>
                 </button>

                 {/* Progress View */}
                 <button 
                   onClick={() => setView('PROGRESS_VIEW')}
                   className={`w-full p-3 rounded-xl flex items-center gap-3 transition-colors ${view === 'PROGRESS_VIEW' ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-300' : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
                 >
                    <BarChart3 size={22} className="shrink-0" />
                    <span className="font-semibold text-sm hidden sm:block">Progress</span>
                 </button>

                 {/* Study Planner */}
                 <button 
                   onClick={() => setView('STUDY_PLANNER')}
                   className={`w-full p-3 rounded-xl flex items-center gap-3 transition-colors ${view === 'STUDY_PLANNER' ? 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300' : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
                 >
                    <ClipboardList size={22} className="shrink-0" />
                    <span className="font-semibold text-sm hidden sm:block">Study Plan</span>
                 </button>

                 {/* Dark Mode Toggle */}
                 <button 
                   onClick={() => setDarkMode(!darkMode)}
                   className="w-full p-3 rounded-xl flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                 >
                    {darkMode ? <Sun size={22} className="shrink-0 text-amber-400" /> : <Moon size={22} className="shrink-0 text-indigo-400" />}
                    <span className="font-semibold text-sm hidden sm:block">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                 </button>
              </div>

              <div>
                 <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3 px-2 hidden sm:block">Quick Access</p>
                 <div className="space-y-2">
                    {subjects.map((sub) => {
                       // Dynamic Icon Mapping
                       const Icon = sub.id === 'eco' ? TrendingUp : 
                                    sub.id === 'ocm' ? Briefcase : 
                                    sub.id === 'sp' ? PenTool : 
                                    sub.id === 'bk' || sub.id === 'math' ? Calculator :
                                    sub.id === 'his' ? BookOpen :
                                    sub.id === 'geo' ? Globe :
                                    sub.id === 'phy' ? Atom :
                                    sub.id === 'bio' ? Dna :
                                    sub.id === 'chem' ? FlaskConical :
                                    sub.id === 'soc' ? Users :
                                    sub.id === 'pol' ? Building2 :
                                    sub.id === 'eng' ? BookA : Brain;

                       const isActive = selectedSubject?.id === sub.id;
                       return (
                         <button 
                           key={sub.id}
                           onClick={() => selectSubject(sub)}
                           className={`w-full p-3 rounded-xl flex items-center gap-3 transition-colors group ${isActive ? 'bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800' : 'hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent'}`}
                         >
                            <div className={`p-1.5 rounded-lg text-white shrink-0 ${sub.color}`}>
                               <Icon size={16} />
                            </div>
                            <span className={`font-medium text-sm hidden sm:block truncate ${isActive ? 'text-indigo-900 dark:text-indigo-100 font-bold' : 'text-slate-600 dark:text-slate-400'}`}>{sub.name}</span>
                         </button>
                       );
                    })}
                 </div>
              </div>
           </div>
        </div>
      </>
    );
  };

  // --- Render Functions ---

  const renderStreamSelect = () => (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-20%] w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[100px]"></div>

      <div className="z-10 text-center mb-16 relative">
        <div className="inline-block p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl mb-6 rotate-3">
           <div className="bg-slate-900 px-6 py-2 rounded-xl text-white font-bold text-sm tracking-widest uppercase -rotate-3">
             Maharashtra Board
           </div>
        </div>
        <h1 className="text-6xl font-black text-white mb-4 tracking-tight drop-shadow-xl">
          7k <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">12th</span>
        </h1>
        <p className="text-slate-400 text-lg font-medium">The Ultimate Study App</p>
      </div>

      <div className="grid gap-6 w-full max-w-md z-10">
        <button 
          onClick={() => selectStream(Stream.COMMERCE)}
          className="group relative overflow-hidden bg-slate-900/50 hover:bg-slate-800/80 backdrop-blur-md border border-slate-700/50 p-6 rounded-3xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/20 text-left"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-center gap-5 relative z-10">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl shadow-lg flex items-center justify-center text-white transform group-hover:rotate-6 transition-transform">
              <TrendingUp size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Commerce</h3>
              <p className="text-slate-400 text-sm font-medium">Eco, OCM, BK, SP</p>
            </div>
            <div className="ml-auto w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all">
               <ChevronRight size={20} />
            </div>
          </div>
        </button>

        <button 
          onClick={() => selectStream(Stream.ARTS)}
          className="group relative overflow-hidden bg-slate-900/50 hover:bg-slate-800/80 backdrop-blur-md border border-slate-700/50 p-6 rounded-3xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20 text-left"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-center gap-5 relative z-10">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg flex items-center justify-center text-white transform group-hover:rotate-6 transition-transform">
              <BookOpen size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Arts</h3>
              <p className="text-slate-400 text-sm font-medium">History, Pol Sci, English</p>
            </div>
            <div className="ml-auto w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
               <ChevronRight size={20} />
            </div>
          </div>
        </button>

        <button 
          onClick={() => selectStream(Stream.SCIENCE)}
          className="group relative overflow-hidden bg-slate-900/50 hover:bg-slate-800/80 backdrop-blur-md border border-slate-700/50 p-6 rounded-3xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-500/20 text-left"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-center gap-5 relative z-10">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl shadow-lg flex items-center justify-center text-white transform group-hover:rotate-6 transition-transform">
              <Atom size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Science</h3>
              <p className="text-slate-400 text-sm font-medium">Phy, Chem, Math, Bio</p>
            </div>
            <div className="ml-auto w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-white transition-all">
               <ChevronRight size={20} />
            </div>
          </div>
        </button>
      </div>
      <div className="mt-12 text-slate-600 text-xs text-center font-medium">Made for HSC Maharashtra Board Students</div>
    </div>
  );

  const renderDashboard = () => {
    const data = selectedStream ? MOCK_DATA[selectedStream] : null;
    
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24 font-sans transition-colors">
        <div className="bg-white dark:bg-slate-900 px-6 pt-6 pb-4 sticky top-0 z-20 shadow-sm border-b border-slate-100 dark:border-slate-800">
           <div className="flex justify-between items-center mb-4">
              <button onClick={goBack} className="p-2 -ml-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300">
                <ArrowLeft size={22} />
              </button>
              <div className="flex items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs">7k</div>
              </div>
           </div>
           <h1 className="text-3xl font-black text-slate-800 dark:text-white">Learning Hub</h1>
           <p className="text-slate-500 dark:text-slate-400 font-medium">Let's crush those exams!</p>
        </div>

        <div className="p-6">
          {/* Countdown Timer */}
          <CountdownTimer />

          {/* Previous Marks Input Section */}
          <PreviousMarksInput />

          {/* Weakness Analysis Section */}
          <WeaknessAnalysis />

          <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
            <BookOpen size={20} className="text-indigo-600 dark:text-indigo-400" />
            Your Subjects
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {data?.subjects.map((sub) => {
               // Dynamic Icon Mapping
               const Icon = sub.id === 'eco' ? TrendingUp : 
                            sub.id === 'ocm' ? Briefcase : 
                            sub.id === 'sp' ? PenTool : 
                            sub.id === 'bk' || sub.id === 'math' ? Calculator :
                            sub.id === 'his' ? BookOpen :
                            sub.id === 'geo' ? Globe :
                            sub.id === 'phy' ? Atom :
                            sub.id === 'bio' ? Dna :
                            sub.id === 'chem' ? FlaskConical :
                            sub.id === 'soc' ? Users :
                            sub.id === 'pol' ? Building2 :
                            sub.id === 'eng' ? BookA : Brain;

              return (
                <button 
                  key={sub.id}
                  onClick={() => selectSubject(sub)}
                  className="bg-white dark:bg-slate-900 p-5 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 active:scale-95 transition-all flex flex-col items-start gap-4 h-full hover:border-indigo-100 dark:hover:border-indigo-900"
                >
                  <div className={`p-4 rounded-2xl ${sub.color} text-white shadow-md`}>
                    <Icon size={28} />
                  </div>
                  <div className="text-left">
                    <span className="font-bold text-slate-800 dark:text-slate-200 block text-lg leading-tight mb-1 truncate w-full">{sub.name}</span>
                    <span className="text-xs text-slate-400 font-medium">{sub.chapters.length} Chapters</span>
                  </div>
                </button>
              );
            })}
          </div>

           <div className="mt-10 bg-indigo-900 dark:bg-indigo-950 rounded-3xl p-6 text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 p-10 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-indigo-500/50 rounded-lg">
                    <Sparkles size={20} className="text-indigo-200" />
                  </div>
                  <span className="font-bold text-indigo-100">AI Tutor Helper</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Stuck on a concept?</h3>
                <p className="text-indigo-200 text-sm mb-4">Ask our AI to explain complex definitions in simple words.</p>
                <button 
                  onClick={() => {
                     setAiQuery('');
                     setAiModalOpen(true);
                  }}
                  className="w-full py-3 bg-white text-indigo-900 font-bold rounded-xl text-sm hover:bg-indigo-50 transition"
                >
                  Try AI Explanation
                </button>
              </div>
           </div>
        </div>
      </div>
    );
  };
  
  // ... (The rest of the component remains identical, just ensuring imports and icon mapping are updated)
  
  const renderSubjectDetail = () => {
    if (!selectedSubject) return null;
    
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans transition-colors">
        <div className={`${selectedSubject.color} text-white pt-8 pb-10 px-6 rounded-b-[2.5rem] shadow-lg shadow-indigo-200 dark:shadow-none sticky top-0 z-30`}>
          <div className="flex items-center gap-3 mb-6">
             <button onClick={goBack} className="p-2 -ml-2 hover:bg-white/20 rounded-full transition backdrop-blur-sm">
               <ArrowLeft size={20} />
             </button>
             <span className="font-medium bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs tracking-wide uppercase">Class 12th</span>
          </div>
          <h1 className="text-4xl font-black mb-2 tracking-tight">{selectedSubject.name}</h1>
          <div className="flex items-center gap-4 text-white/80 text-sm font-medium">
             <span className="flex items-center gap-1"><Layers size={16}/> {selectedSubject.chapters.length} Chapters</span>
          </div>
        </div>

        <div className="px-6 -mt-6 pb-24 relative z-40">
           
           {/* Dedicated Economics Promo Card */}
           {selectedSubject.id === 'eco' && (
             <a 
               href="https://eco.7kc.me"
               target="_blank"
               rel="noopener noreferrer"
               className="mb-8 block bg-gradient-to-r from-blue-600 to-indigo-600 p-5 rounded-2xl shadow-xl shadow-blue-500/20 transform transition-transform hover:scale-[1.02]"
             >
               <div className="flex items-start justify-between">
                 <div>
                   <div className="inline-block px-2 py-1 bg-white/20 backdrop-blur-md rounded text-[10px] font-bold text-white uppercase mb-2">Recommended</div>
                   <h3 className="text-xl font-bold text-white mb-1">Deep Dive into Economics</h3>
                   <p className="text-blue-100 text-sm mb-4">Get the specialized dedicated app for 12th Economics.</p>
                   <div className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-xl text-sm font-bold">
                     Open eco.7kc.me <ArrowRight size={16} />
                   </div>
                 </div>
                 <div className="bg-white/10 p-3 rounded-full text-white">
                   <Globe size={32} />
                 </div>
               </div>
             </a>
           )}

           {/* Navigation Cards for Syllabus & Pattern */}
           <div className="grid grid-cols-2 gap-4 mb-8">
              <button 
                onClick={() => setView('SYLLABUS_VIEW')}
                className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3 hover:border-indigo-200 dark:hover:border-indigo-800 transition group"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText size={24} />
                </div>
                <span className="font-bold text-slate-700 dark:text-slate-200 text-sm">Full Syllabus</span>
              </button>

              <button 
                onClick={() => setView('PAPER_PATTERN_VIEW')}
                className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3 hover:border-emerald-200 dark:hover:border-emerald-800 transition group"
              >
                 <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GraduationCap size={24} />
                </div>
                <span className="font-bold text-slate-700 dark:text-slate-200 text-sm">Paper Pattern</span>
              </button>
           </div>

           <h3 className="text-slate-800 dark:text-slate-200 font-bold text-lg mb-4 flex items-center gap-2">
             <Layers size={20} className="text-slate-400" /> Chapters
           </h3>
           
           <div className="space-y-4">
            {selectedSubject.chapters.length === 0 ? (
              <div className="p-8 text-center text-slate-400 dark:text-slate-600 bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
                <Clock className="mx-auto mb-2 opacity-50" size={32} />
                <p>Content coming soon!</p>
              </div>
            ) : (
              selectedSubject.chapters.map((chapter, index) => (
                <button 
                  key={chapter.id}
                  onClick={() => selectChapter(chapter)}
                  className="w-full bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-900 active:scale-[0.98] transition-all flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-black text-lg flex items-center justify-center shrink-0 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {index + 1}
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-bold text-slate-800 dark:text-slate-200 leading-tight mb-2 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">{chapter.title}</h3>
                    <div className="flex gap-2">
                        {chapter.reels.length > 0 && <span className="px-2 py-1 rounded bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 text-[10px] font-bold uppercase flex items-center gap-1"><Video size={10} /> Reels</span>}
                        {chapter.flashcards.length > 0 && <span className="px-2 py-1 rounded bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-[10px] font-bold uppercase flex items-center gap-1"><Layers size={10} /> Cards</span>}
                    </div>
                  </div>
                  <div className="h-full flex items-center text-slate-300 dark:text-slate-600 group-hover:text-indigo-400">
                    <ChevronRight size={20} />
                  </div>
                </button>
              ))
            )}
           </div>
        </div>
      </div>
    );
  };
  
  // Re-including renderResourcesView and rest
  const renderResourcesView = (type: 'SYLLABUS' | 'PATTERN') => {
    if (!selectedSubject) return null;
    const content = type === 'SYLLABUS' ? selectedSubject.syllabus : selectedSubject.paperPattern;
    const title = type === 'SYLLABUS' ? 'Syllabus' : 'Paper Pattern';

    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans">
        <div className="bg-white dark:bg-slate-900 px-6 py-4 border-b border-slate-100 dark:border-slate-800 sticky top-0 flex items-center gap-3">
          <button onClick={goBack} className="p-2 -ml-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300">
             <ArrowLeft size={20} />
          </button>
          <h1 className="font-bold text-lg text-slate-800 dark:text-white">{title}</h1>
        </div>
        <div className="p-6 flex-1 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
             {content === 'Pending...' ? <p className="text-slate-400 italic">Content coming soon.</p> : <MarkdownRenderer content={content} />}
          </div>
        </div>
      </div>
    );
  };

  // ... (Keeping renderChapterDetail, renderStudyMode, renderAiModal the same as before, just ensuring imports)

  const renderChapterDetail = () => {
    if (!selectedChapter) return null;

    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 font-sans transition-colors">
        <div className="relative h-[35vh] bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
             <div className={`absolute inset-0 opacity-60 bg-gradient-to-br ${selectedSubject?.color.replace('bg-', 'from-').replace('500', '600')} to-slate-900`}></div>
          </div>
          
          <div className="absolute top-0 left-0 w-full p-6 z-20 flex items-center justify-between text-white">
            <button onClick={goBack} className="p-2 -ml-2 bg-black/20 hover:bg-black/30 backdrop-blur-md rounded-full transition">
               <ArrowLeft size={20} />
            </button>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full p-8 z-20 pb-12">
             <div className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white/90 text-xs font-bold mb-3 uppercase tracking-wider">
               Chapter
             </div>
             <h1 className="text-3xl font-black text-white leading-tight drop-shadow-lg mb-2">{selectedChapter.title}</h1>
             <p className="text-white/80 line-clamp-2 text-sm max-w-md">{selectedChapter.description}</p>
          </div>
        </div>

        <div className="relative z-30 -mt-8 bg-white dark:bg-slate-900 rounded-t-[2rem] px-6 pt-8 pb-24 min-h-[60vh] transition-colors">
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button 
              onClick={() => startStudy(ContentType.REELS)}
              disabled={selectedChapter.reels.length === 0}
              className={`col-span-2 relative overflow-hidden bg-slate-900 p-5 rounded-2xl shadow-lg flex items-center justify-between group ${selectedChapter.reels.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
               <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative z-10 text-white text-left">
                  <h3 className="font-black text-xl italic">QUICK REELS</h3>
                  <p className="text-xs text-white/80 font-medium">
                     {selectedChapter.reels.length > 0 ? "Swipe to learn in 60s" : "Coming Soon"}
                  </p>
               </div>
               <div className="relative z-10 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                 <PlayCircle size={24} fill="currentColor" className="opacity-90" />
               </div>
            </button>

            {/* NEW 8-MARK BUTTON FOR OCM */}
            {selectedChapter.longAnswers && selectedChapter.longAnswers.length > 0 && (
              <button 
                onClick={() => startStudy(ContentType.EIGHT_MARKER)}
                className="col-span-2 p-4 bg-gradient-to-r from-amber-200 to-yellow-400 dark:from-amber-700 dark:to-yellow-700 rounded-2xl shadow-md border border-yellow-300 dark:border-yellow-600 flex items-center justify-between group hover:scale-[1.01] transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/30 rounded-full text-amber-900 dark:text-white">
                    <Award size={24} />
                  </div>
                  <div className="text-left">
                     <h3 className="font-black text-amber-900 dark:text-white text-lg">8-Marks (Sure Shot)</h3>
                     <p className="text-amber-800 dark:text-amber-100 text-xs font-bold">Important Long Answers</p>
                  </div>
                </div>
                <div className="bg-white/30 p-2 rounded-full text-amber-900 dark:text-white">
                   <ChevronRight size={20} />
                </div>
              </button>
            )}

            <button 
              onClick={() => startStudy(ContentType.SUMMARY)}
              disabled={selectedChapter.summary === 'Pending...'}
              className="p-4 bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:border-indigo-100 dark:hover:border-indigo-800 border border-transparent rounded-2xl transition-all text-center flex flex-col items-center gap-3 disabled:opacity-50"
            >
              <div className="w-10 h-10 bg-white dark:bg-slate-700 rounded-full shadow-sm text-blue-500 dark:text-blue-400 flex items-center justify-center"><BookOpen size={20} /></div>
              <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Notes</span>
            </button>

            <button 
              onClick={() => startStudy(ContentType.FLASHCARDS)}
              disabled={selectedChapter.flashcards.length === 0}
              className="p-4 bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:border-indigo-100 dark:hover:border-indigo-800 border border-transparent rounded-2xl transition-all text-center flex flex-col items-center gap-3 disabled:opacity-50"
            >
              <div className="w-10 h-10 bg-white dark:bg-slate-700 rounded-full shadow-sm text-orange-500 dark:text-orange-400 flex items-center justify-center"><Layers size={20} /></div>
              <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Cards</span>
            </button>

            <button 
              onClick={() => startStudy(ContentType.MCQ)}
              disabled={selectedChapter.mcqs.length === 0}
              className="p-4 bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:border-indigo-100 dark:hover:border-indigo-800 border border-transparent rounded-2xl transition-all text-center flex flex-col items-center gap-3 disabled:opacity-50"
            >
               <div className="w-10 h-10 bg-white dark:bg-slate-700 rounded-full shadow-sm text-emerald-500 dark:text-emerald-400 flex items-center justify-center"><Brain size={20} /></div>
              <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Quiz</span>
            </button>
             
             <button 
               onClick={() => { setAiQuery(selectedChapter.title); setAiModalOpen(true); }}
               className="p-4 bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/50 dark:to-violet-900/50 border border-indigo-200 dark:border-indigo-800 rounded-2xl transition-all text-center flex flex-col items-center gap-3"
             >
                <div className="w-10 h-10 bg-white dark:bg-slate-700 rounded-full shadow-sm text-indigo-600 dark:text-indigo-300 flex items-center justify-center"><Sparkles size={20} /></div>
                <span className="font-bold text-indigo-800 dark:text-indigo-200 text-sm">Ask AI</span>
             </button>
          </div>

          <div className="mt-8">
              <div className="flex bg-slate-100/80 dark:bg-slate-800 p-1 rounded-xl mb-6">
                <button
                  onClick={() => setChapterTab('OVERVIEW')}
                  className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all duration-200 ${
                    chapterTab === 'OVERVIEW' 
                      ? 'bg-white dark:bg-slate-700 text-indigo-900 dark:text-white shadow-md' 
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setChapterTab('NOTES')}
                  className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all duration-200 ${
                    chapterTab === 'NOTES' 
                      ? 'bg-white dark:bg-slate-700 text-indigo-900 dark:text-white shadow-md' 
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  Detailed Notes
                </button>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-3xl border border-slate-100 dark:border-slate-700 min-h-[200px]">
                {chapterTab === 'OVERVIEW' ? (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <h3 className="font-bold text-slate-800 dark:text-white mb-3 text-lg">About this Chapter</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{selectedChapter.description}</p>
                    
                    <div className="mt-6 flex flex-wrap gap-3">
                       <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-full text-xs font-bold border border-indigo-100 dark:border-indigo-800">
                         {selectedChapter.flashcards.length} Flashcards
                       </span>
                       <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-300 rounded-full text-xs font-bold border border-emerald-100 dark:border-emerald-800">
                         {selectedChapter.mcqs.length} MCQs
                       </span>
                       <span className="px-3 py-1 bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 rounded-full text-xs font-bold border border-pink-100 dark:border-pink-800">
                         {selectedChapter.reels.length} Reels
                       </span>
                    </div>
                  </div>
                ) : (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <h3 className="font-bold text-slate-800 dark:text-white mb-4 text-lg">Detailed Concepts</h3>
                    <div className="max-w-none">
                       {selectedChapter.detailedNotes === 'Pending...' 
                          ? <div className="text-center py-10 text-slate-400 italic">Content coming soon for this chapter.</div> 
                          : <MarkdownRenderer content={selectedChapter.detailedNotes} />}
                    </div>
                  </div>
                )}
              </div>
           </div>
        </div>
      </div>
    );
  };

  const renderStudyMode = () => {
    if (!selectedChapter || !studyMode) return null;

    if (studyMode === ContentType.REELS) {
      return (
        <ReelView 
          reels={selectedChapter.reels} 
          onClose={goBack} 
          onComplete={(viewed, total) => {
            if (selectedChapter && selectedSubject) {
              updateReelsProgress(selectedChapter.id, selectedSubject.id, viewed, total);
            }
          }}
        />
      );
    }

    if (studyMode === ContentType.EIGHT_MARKER && selectedChapter.longAnswers) {
      return <LongAnswerView answers={selectedChapter.longAnswers} onBack={goBack} />;
    }

    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans transition-colors">
        <header className="bg-white dark:bg-slate-900 px-6 py-4 shadow-sm flex items-center justify-between sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800">
           <div className="flex items-center gap-3">
             <button onClick={goBack} className="p-2 -ml-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition text-slate-600 dark:text-slate-300">
               <ArrowLeft size={20} />
             </button>
             <div>
               <h1 className="text-lg font-bold text-slate-800 dark:text-white">{studyMode === ContentType.FLASHCARDS ? 'Active Recall' : studyMode === ContentType.MCQ ? 'Practice Quiz' : 'Study Notes'}</h1>
               <p className="text-xs text-slate-400 font-medium line-clamp-1 max-w-[200px]">{selectedChapter.title}</p>
             </div>
           </div>
           
           <button 
             onClick={() => {
               setAiQuery('');
               setAiModalOpen(true);
             }}
             className="text-indigo-600 dark:text-indigo-400 p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/50"
           >
             <Sparkles size={20} />
           </button>
        </header>

        <div className="flex-1 overflow-y-auto">
          {studyMode === ContentType.FLASHCARDS && (
            <div className="min-h-full flex flex-col items-center justify-center p-6 pb-24">
               <div className="w-full max-w-md space-y-8">
                 <div className="text-center mb-4">
                   <p className="text-slate-400 text-sm font-medium">Tap card to flip • Scroll for next</p>
                   <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                     {selectedChapter.flashcards.length} cards to review
                   </p>
                 </div>
                 {selectedChapter.flashcards.map((card) => (
                   <Flashcard key={card.id} card={card} />
                 ))}
                 
                 {/* Complete Flashcards Button */}
                 <div className="pt-8 text-center">
                   <button
                     onClick={() => {
                       if (selectedChapter && selectedSubject) {
                         updateFlashcardProgress(
                           selectedChapter.id, 
                           selectedSubject.id, 
                           selectedChapter.flashcards.length, 
                           selectedChapter.flashcards.length
                         );
                       }
                       goBack();
                     }}
                     className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all transform hover:scale-105"
                   >
                     ✅ Mark All Reviewed
                   </button>
                 </div>
               </div>
            </div>
          )}

          {studyMode === ContentType.MCQ && (
             <div className="h-full">
               <MCQView questions={selectedChapter.mcqs} onComplete={handleMCQComplete} />
             </div>
          )}

          {studyMode === ContentType.SUMMARY && (
             <div className="max-w-3xl mx-auto p-6 pb-24">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 mb-6">
                   <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Summary</div>
                   <MarkdownRenderer content={selectedChapter.summary} />
                </div>
                
                <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 mb-6">
                   <div className="inline-block px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Deep Dive</div>
                   <MarkdownRenderer content={selectedChapter.detailedNotes} />
                </div>
                
                {/* Mark as Read Button */}
                <div className="text-center pt-4">
                  <button
                    onClick={() => {
                      if (selectedChapter && selectedSubject) {
                        markSummaryRead(selectedChapter.id, selectedSubject.id);
                        markNotesRead(selectedChapter.id, selectedSubject.id);
                      }
                      goBack();
                    }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all transform hover:scale-105"
                  >
                    📚 Mark as Read
                  </button>
                </div>
             </div>
          )}
        </div>
      </div>
    );
  };

  const renderAiModal = () => (
    <div className={`fixed inset-0 z-[60] flex items-end sm:items-center justify-center transition-opacity duration-300 ${aiModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setAiModalOpen(false)}></div>
      <div className={`bg-white dark:bg-slate-900 w-full max-w-lg sm:rounded-3xl rounded-t-3xl p-6 relative z-10 transition-transform duration-300 ${aiModalOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="w-12 h-1 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mb-6 sm:hidden"></div>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 rounded-xl">
               <Sparkles size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">AI Tutor</h2>
              <p className="text-xs text-slate-400">Powered by Gemini</p>
            </div>
          </div>
          <button onClick={() => setAiModalOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full transition">
             <div className="sr-only">Close</div>
             <X size={20} />
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Ask a question</label>
          <div className="flex gap-2">
            <input 
              type="text" 
              value={aiQuery}
              onChange={(e) => setAiQuery(e.target.value)}
              placeholder="e.g. Explain 'Utility' with an example"
              className="flex-1 p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-slate-900 transition-all text-slate-800 dark:text-white placeholder:text-slate-400"
            />
            <button 
              onClick={handleAiExplain}
              disabled={aiLoading}
              className="bg-indigo-600 dark:bg-indigo-500 text-white px-5 rounded-2xl font-bold hover:bg-indigo-700 dark:hover:bg-indigo-600 disabled:opacity-50 transition shadow-lg shadow-indigo-200 dark:shadow-none"
            >
              {aiLoading ? (
                 <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <ArrowRight size={20} />
              )}
            </button>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl min-h-[150px] max-h-[40vh] overflow-y-auto border border-slate-100 dark:border-slate-700">
          {aiLoading ? (
             <div className="flex flex-col items-center justify-center h-full text-slate-400 gap-3 py-8">
                <Sparkles className="animate-pulse text-indigo-400" size={32} />
                <span className="text-sm font-medium animate-pulse">Consulting the knowledge base...</span>
             </div>
          ) : aiResponse ? (
             <div className="prose prose-sm prose-slate dark:prose-invert max-w-none">
               <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">{aiResponse}</p>
             </div>
          ) : (
             <div className="flex flex-col items-center justify-center h-full text-slate-400 py-8 text-center">
                <Brain size={48} className="mb-4 opacity-20" />
                <p className="font-medium text-slate-500 dark:text-slate-400">I can explain any concept from this chapter.</p>
                <p className="text-xs mt-1">Try asking for definitions, differences, or examples.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderProgressView = () => {
    const stats = getStudyStats();
    
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24 font-sans transition-colors">
        <div className="bg-white dark:bg-slate-900 px-6 pt-6 pb-4 sticky top-0 z-20 shadow-sm border-b border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-center mb-4">
            <button onClick={goBack} className="p-2 -ml-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300">
              <ArrowLeft size={22} />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <BarChart3 size={16} />
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-black text-slate-800 dark:text-white">Your Progress</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Track your study journey</p>
        </div>

        <div className="p-6">
          <ProgressDashboard stats={stats} />
          
          {/* Subject-wise Progress */}
          {selectedStream && MOCK_DATA[selectedStream] && (
            <div className="mt-8">
              <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Subject Progress</h2>
              <div className="space-y-4">
                {MOCK_DATA[selectedStream].subjects.map((sub) => {
                  const completion = getSubjectCompletion(sub.id);
                  const progressPercent = Math.round(completion * 100);
                  
                  // Dynamic Icon Mapping
                  const Icon = sub.id === 'eco' ? TrendingUp : 
                               sub.id === 'ocm' ? Briefcase : 
                               sub.id === 'sp' ? PenTool : 
                               sub.id === 'bk' || sub.id === 'math' ? Calculator :
                               sub.id === 'his' ? BookOpen :
                               sub.id === 'geo' ? Globe :
                               sub.id === 'phy' ? Atom :
                               sub.id === 'bio' ? Dna :
                               sub.id === 'chem' ? FlaskConical :
                               sub.id === 'soc' ? Users :
                               sub.id === 'pol' ? Building2 :
                               sub.id === 'eng' ? BookA : Brain;
                  
                  return (
                    <div 
                      key={sub.id}
                      className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className={`p-3 rounded-xl ${sub.color} text-white`}>
                          <Icon size={20} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-slate-800 dark:text-white">{sub.name}</h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{sub.chapters.length} chapters</p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{progressPercent}%</span>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${sub.color} transition-all duration-500`}
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderStudyPlanner = () => {
    const data = selectedStream ? MOCK_DATA[selectedStream] : null;
    const prelimsDate = new Date('2026-01-15');
    
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24 font-sans transition-colors">
        <div className="bg-white dark:bg-slate-900 px-6 pt-6 pb-4 sticky top-0 z-20 shadow-sm border-b border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-center mb-4">
            <button onClick={goBack} className="p-2 -ml-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300">
              <ArrowLeft size={22} />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                <ClipboardList size={16} />
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-black text-slate-800 dark:text-white">Study Planner</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Track your syllabus coverage</p>
        </div>

        <div className="p-6">
          {data && (
            <StudyPlanner 
              subjects={data.subjects} 
              examDate={prelimsDate} 
              examName="Prelims"
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="antialiased text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-950 h-full selection:bg-indigo-100 dark:selection:bg-indigo-900 selection:text-indigo-900 dark:selection:text-indigo-100 flex overflow-hidden transition-colors duration-300">
      <div className={`flex-1 flex flex-col h-full overflow-hidden transition-all duration-300 ${selectedStream && isSidebarOpen ? 'mr-0 sm:mr-[240px]' : ''}`}>
        <div className="flex-1 overflow-y-auto relative no-scrollbar">
           {view === 'STREAM_SELECT' && renderStreamSelect()}
           {view === 'DASHBOARD' && renderDashboard()}
           {view === 'SUBJECT_DETAIL' && renderSubjectDetail()}
           {view === 'SYLLABUS_VIEW' && renderResourcesView('SYLLABUS')}
           {view === 'PAPER_PATTERN_VIEW' && renderResourcesView('PATTERN')}
           {view === 'CHAPTER_DETAIL' && renderChapterDetail()}
           {view === 'STUDY_MODE' && renderStudyMode()}
           {view === 'PROGRESS_VIEW' && renderProgressView()}
           {view === 'STUDY_PLANNER' && renderStudyPlanner()}
        </div>
      </div>
      {selectedStream && isSidebarOpen && (
         <div className="fixed inset-0 bg-black/50 z-40 sm:hidden" onClick={() => setIsSidebarOpen(false)}></div>
      )}
      {selectedStream && <Sidebar />}
      {renderAiModal()}
    </div>
  );
};

export default App;
