import React, { useState } from 'react';
import { BookOpen, Layers, Zap, FileText, ChevronRight, ArrowLeft, GraduationCap, Video, Brain, PenTool, TrendingUp, Briefcase, Calculator, Sparkles, Clock, Star, PlayCircle } from 'lucide-react';
import { MOCK_DATA } from './constants';
import { Stream, Subject, Chapter, ContentType } from './types';
import Flashcard from './components/Flashcard';
import MCQView from './components/MCQView';
import ReelView from './components/ReelView';
import { explainConcept } from './services/geminiService';

// --- State Management ---
type ViewState = 
  | 'STREAM_SELECT'
  | 'DASHBOARD'
  | 'SUBJECT_DETAIL'
  | 'CHAPTER_DETAIL'
  | 'STUDY_MODE'
  | 'SYLLABUS_VIEW'
  | 'PAPER_PATTERN_VIEW';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('STREAM_SELECT');
  const [selectedStream, setSelectedStream] = useState<Stream | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [studyMode, setStudyMode] = useState<ContentType | null>(null);
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  // --- Handlers ---
  const selectStream = (stream: Stream) => {
    setSelectedStream(stream);
    setView('DASHBOARD');
  };

  const selectSubject = (subject: Subject) => {
    setSelectedSubject(subject);
    setView('SUBJECT_DETAIL');
  };

  const selectChapter = (chapter: Chapter) => {
    setSelectedChapter(chapter);
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
    } else if (view === 'DASHBOARD') {
      setView('STREAM_SELECT');
      setSelectedStream(null);
    }
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

  // --- Render Functions ---

  const renderStreamSelect = () => (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Dynamic Background */}
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
        <p className="text-slate-400 text-lg font-medium">The Ultimate Active Recall App</p>
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

        {/* Coming Soon Streams */}
        <div className="grid grid-cols-2 gap-4">
           <div className="bg-slate-900/30 border border-slate-800 p-5 rounded-3xl flex flex-col items-center justify-center text-center opacity-60">
             <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-500 mb-3">
               <PenTool size={20} />
             </div>
             <span className="text-slate-400 font-bold">Arts</span>
             <span className="text-xs text-slate-600 mt-1">Coming Soon</span>
           </div>
           <div className="bg-slate-900/30 border border-slate-800 p-5 rounded-3xl flex flex-col items-center justify-center text-center opacity-60">
             <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-500 mb-3">
               <Zap size={20} />
             </div>
             <span className="text-slate-400 font-bold">Science</span>
             <span className="text-xs text-slate-600 mt-1">Coming Soon</span>
           </div>
        </div>
      </div>
      
      <div className="mt-12 text-slate-600 text-xs text-center font-medium">
        Made for HSC Maharashtra Board Students
      </div>
    </div>
  );

  const renderDashboard = () => {
    const data = selectedStream ? MOCK_DATA[selectedStream] : null;
    
    return (
      <div className="min-h-screen bg-slate-50 pb-24 font-sans">
        {/* Header */}
        <div className="bg-white px-6 pt-6 pb-4 sticky top-0 z-20 shadow-sm border-b border-slate-100">
           <div className="flex justify-between items-center mb-4">
              <button onClick={goBack} className="p-2 -ml-2 hover:bg-slate-50 rounded-full text-slate-600">
                <ArrowLeft size={22} />
              </button>
              <div className="flex items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs">7k</div>
              </div>
           </div>
           <h1 className="text-3xl font-black text-slate-800">Learning Hub</h1>
           <p className="text-slate-500 font-medium">Let's crush those exams!</p>
        </div>

        <div className="p-6">
          {/* Quick Stats */}
          <div className="flex gap-4 mb-8 overflow-x-auto no-scrollbar pb-2">
            <div className="min-w-[140px] bg-gradient-to-br from-orange-400 to-pink-500 p-4 rounded-2xl text-white shadow-lg shadow-orange-500/20">
              <div className="flex items-center gap-2 mb-2 opacity-90">
                 <Clock size={16} />
                 <span className="text-xs font-bold uppercase">Study Time</span>
              </div>
              <p className="text-2xl font-black">2.5h</p>
              <p className="text-xs opacity-80 mt-1">Today's Focus</p>
            </div>
            <div className="min-w-[140px] bg-gradient-to-br from-indigo-500 to-blue-600 p-4 rounded-2xl text-white shadow-lg shadow-indigo-500/20">
               <div className="flex items-center gap-2 mb-2 opacity-90">
                 <Zap size={16} />
                 <span className="text-xs font-bold uppercase">Streak</span>
              </div>
              <p className="text-2xl font-black">5 Days</p>
              <p className="text-xs opacity-80 mt-1">Keep it up!</p>
            </div>
          </div>

          <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <BookOpen size={20} className="text-indigo-600" />
            Your Subjects
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            {data?.subjects.map((sub) => {
              const Icon = sub.id === 'eco' ? TrendingUp : sub.id === 'ocm' ? Briefcase : sub.id === 'sp' ? PenTool : Calculator;
              // Extract main color for border/text usage
              const colorClass = sub.color.split(' ')[0]; 
              
              return (
                <button 
                  key={sub.id}
                  onClick={() => selectSubject(sub)}
                  className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 active:scale-95 transition-all flex flex-col items-start gap-4 h-full"
                >
                  <div className={`p-4 rounded-2xl ${sub.color} text-white shadow-md`}>
                    <Icon size={28} />
                  </div>
                  <div className="text-left">
                    <span className="font-bold text-slate-800 block text-lg leading-tight mb-1">{sub.name}</span>
                    <span className="text-xs text-slate-400 font-medium">{sub.chapters.length} Chapters</span>
                  </div>
                </button>
              );
            })}
          </div>

           <div className="mt-10 bg-indigo-900 rounded-3xl p-6 text-white relative overflow-hidden">
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

  const renderSubjectDetail = () => {
    if (!selectedSubject) return null;
    
    return (
      <div className="min-h-screen bg-slate-50 font-sans">
        {/* Header */}
        <div className={`${selectedSubject.color} text-white pt-8 pb-10 px-6 rounded-b-[2.5rem] shadow-lg shadow-indigo-200 sticky top-0 z-30`}>
          <div className="flex items-center gap-3 mb-6">
             <button onClick={goBack} className="p-2 -ml-2 hover:bg-white/20 rounded-full transition backdrop-blur-sm">
               <ArrowLeft size={20} />
             </button>
             <span className="font-medium bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs tracking-wide uppercase">Class 12th</span>
          </div>
          <h1 className="text-4xl font-black mb-2 tracking-tight">{selectedSubject.name}</h1>
          <div className="flex items-center gap-4 text-white/80 text-sm font-medium">
             <span className="flex items-center gap-1"><Layers size={16}/> {selectedSubject.chapters.length} Chapters</span>
             <span className="w-1 h-1 bg-white/50 rounded-full"></span>
             <span className="flex items-center gap-1"><Star size={16}/> Exam Focused</span>
          </div>
        </div>

        <div className="px-6 -mt-6 pb-24 relative z-40">
           {/* Exam Prep Card */}
           <div className="bg-white p-2 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 mb-8 flex text-sm font-bold text-slate-600">
              <button 
                onClick={() => setView('SYLLABUS_VIEW')}
                className="flex-1 py-3 rounded-xl hover:bg-slate-50 flex items-center justify-center gap-2 transition"
              >
                <FileText size={18} className="text-indigo-500" /> Syllabus
              </button>
              <div className="w-[1px] bg-slate-100 my-2"></div>
              <button 
                onClick={() => setView('PAPER_PATTERN_VIEW')}
                className="flex-1 py-3 rounded-xl hover:bg-slate-50 flex items-center justify-center gap-2 transition"
              >
                <GraduationCap size={18} className="text-emerald-500" /> Pattern
              </button>
           </div>

           <h3 className="text-slate-800 font-bold text-lg mb-4 flex items-center gap-2">
             <Layers size={20} className="text-slate-400" /> Chapters
           </h3>
           
           <div className="space-y-4">
            {selectedSubject.chapters.map((chapter, index) => (
              <button 
                key={chapter.id}
                onClick={() => selectChapter(chapter)}
                className="w-full bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-200 active:scale-[0.98] transition-all flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-500 font-black text-lg flex items-center justify-center shrink-0 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                  {index + 1}
                </div>
                <div className="flex-1 text-left">
                   <h3 className="font-bold text-slate-800 leading-tight mb-2 group-hover:text-indigo-700 transition-colors">{chapter.title}</h3>
                   <div className="flex gap-2">
                      {chapter.reels.length > 0 && <span className="px-2 py-1 rounded bg-pink-50 text-pink-600 text-[10px] font-bold uppercase flex items-center gap-1"><Video size={10} /> Reels</span>}
                      {chapter.flashcards.length > 0 && <span className="px-2 py-1 rounded bg-orange-50 text-orange-600 text-[10px] font-bold uppercase flex items-center gap-1"><Layers size={10} /> Cards</span>}
                   </div>
                </div>
                <div className="h-full flex items-center text-slate-300 group-hover:text-indigo-400">
                  <ChevronRight size={20} />
                </div>
              </button>
            ))}
           </div>
           
           <div className="mt-10">
             <h3 className="text-slate-800 font-bold text-lg mb-4">Past Board Papers</h3>
             <div className="space-y-3">
               {selectedSubject.previousPapers.length > 0 ? (
                 selectedSubject.previousPapers.map((paper, i) => (
                   <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-50 text-red-500 rounded-lg"><FileText size={18} /></div>
                        <span className="font-semibold text-slate-700 text-sm">{paper.title}</span>
                      </div>
                      <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">View</span>
                   </div>
                 ))
               ) : (
                 <div className="p-6 text-center bg-slate-100 rounded-xl border border-dashed border-slate-300 text-slate-400 text-sm">
                   Previous year papers being uploaded...
                 </div>
               )}
             </div>
           </div>
        </div>
      </div>
    );
  };

  const renderResourcesView = (type: 'SYLLABUS' | 'PATTERN') => {
    if (!selectedSubject) return null;
    const content = type === 'SYLLABUS' ? selectedSubject.syllabus : selectedSubject.paperPattern;
    const title = type === 'SYLLABUS' ? 'Syllabus' : 'Paper Pattern';

    return (
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
        <div className="bg-white px-6 py-4 border-b border-slate-100 sticky top-0 flex items-center gap-3">
          <button onClick={goBack} className="p-2 -ml-2 hover:bg-slate-50 rounded-full text-slate-600">
             <ArrowLeft size={20} />
          </button>
          <h1 className="font-bold text-lg text-slate-800">{title}</h1>
        </div>
        <div className="p-6 flex-1 overflow-y-auto">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
             <pre className="font-sans text-slate-600 whitespace-pre-wrap leading-relaxed text-sm">
               {content}
             </pre>
          </div>
        </div>
      </div>
    );
  };

  const renderChapterDetail = () => {
    if (!selectedChapter) return null;

    return (
      <div className="min-h-screen bg-white font-sans">
        {/* Immersive Header with Reels Entry */}
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

        <div className="relative z-30 -mt-8 bg-white rounded-t-[2rem] px-6 pt-8 pb-24 min-h-[60vh]">
          {/* Action Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button 
              onClick={() => startStudy(ContentType.REELS)}
              className="col-span-2 relative overflow-hidden bg-slate-900 p-5 rounded-2xl shadow-lg flex items-center justify-between group"
            >
               <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative z-10 text-white text-left">
                  <h3 className="font-black text-xl italic">QUICK REELS</h3>
                  <p className="text-xs text-white/80 font-medium">Swipe to learn in 60s</p>
               </div>
               <div className="relative z-10 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                 <PlayCircle size={24} fill="currentColor" className="opacity-90" />
               </div>
            </button>

            <button 
              onClick={() => startStudy(ContentType.SUMMARY)}
              className="p-4 bg-slate-50 hover:bg-indigo-50 hover:border-indigo-100 border border-transparent rounded-2xl transition-all text-center flex flex-col items-center gap-3"
            >
              <div className="w-10 h-10 bg-white rounded-full shadow-sm text-blue-500 flex items-center justify-center"><BookOpen size={20} /></div>
              <span className="font-bold text-slate-700 text-sm">Notes</span>
            </button>

            <button 
              onClick={() => startStudy(ContentType.FLASHCARDS)}
              disabled={selectedChapter.flashcards.length === 0}
              className="p-4 bg-slate-50 hover:bg-indigo-50 hover:border-indigo-100 border border-transparent rounded-2xl transition-all text-center flex flex-col items-center gap-3 disabled:opacity-50"
            >
              <div className="w-10 h-10 bg-white rounded-full shadow-sm text-orange-500 flex items-center justify-center"><Layers size={20} /></div>
              <span className="font-bold text-slate-700 text-sm">Cards</span>
            </button>

            <button 
              onClick={() => startStudy(ContentType.MCQ)}
              disabled={selectedChapter.mcqs.length === 0}
              className="p-4 bg-slate-50 hover:bg-indigo-50 hover:border-indigo-100 border border-transparent rounded-2xl transition-all text-center flex flex-col items-center gap-3 disabled:opacity-50"
            >
               <div className="w-10 h-10 bg-white rounded-full shadow-sm text-emerald-500 flex items-center justify-center"><Brain size={20} /></div>
              <span className="font-bold text-slate-700 text-sm">Quiz</span>
            </button>
             
             {/* AI Button */}
             <button 
               onClick={() => { setAiQuery(selectedChapter.title); setAiModalOpen(true); }}
               className="p-4 bg-gradient-to-br from-indigo-100 to-violet-100 border border-indigo-200 rounded-2xl transition-all text-center flex flex-col items-center gap-3"
             >
                <div className="w-10 h-10 bg-white rounded-full shadow-sm text-indigo-600 flex items-center justify-center"><Sparkles size={20} /></div>
                <span className="font-bold text-indigo-800 text-sm">Ask AI</span>
             </button>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-2">Chapter Overview</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{selectedChapter.description}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderStudyMode = () => {
    if (!selectedChapter || !studyMode) return null;

    if (studyMode === ContentType.REELS) {
      return <ReelView reels={selectedChapter.reels} onClose={goBack} />;
    }

    return (
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
        <header className="bg-white px-6 py-4 shadow-sm flex items-center justify-between sticky top-0 z-20">
           <div className="flex items-center gap-3">
             <button onClick={goBack} className="p-2 -ml-2 hover:bg-slate-100 rounded-full transition text-slate-600">
               <ArrowLeft size={20} />
             </button>
             <div>
               <h1 className="text-lg font-bold text-slate-800">{studyMode === ContentType.FLASHCARDS ? 'Active Recall' : studyMode === ContentType.MCQ ? 'Practice Quiz' : 'Study Notes'}</h1>
               <p className="text-xs text-slate-400 font-medium line-clamp-1 max-w-[200px]">{selectedChapter.title}</p>
             </div>
           </div>
           
           <button 
             onClick={() => {
               setAiQuery('');
               setAiModalOpen(true);
             }}
             className="text-indigo-600 p-2 bg-indigo-50 rounded-full hover:bg-indigo-100"
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
                 </div>
                 {selectedChapter.flashcards.map((card) => (
                   <Flashcard key={card.id} card={card} />
                 ))}
               </div>
            </div>
          )}

          {studyMode === ContentType.MCQ && (
             <div className="h-full">
               <MCQView questions={selectedChapter.mcqs} onComplete={() => goBack()} />
             </div>
          )}

          {studyMode === ContentType.SUMMARY && (
             <div className="max-w-3xl mx-auto p-6 pb-24">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 mb-6">
                   <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Summary</div>
                   <div className="prose prose-slate prose-headings:text-slate-800 prose-p:text-slate-600 prose-strong:text-indigo-900 prose-strong:font-bold">
                    <div className="whitespace-pre-line leading-relaxed">
                      {selectedChapter.summary}
                    </div>
                   </div>
                </div>
                
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                   <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Deep Dive</div>
                   <div className="prose prose-slate prose-headings:font-bold prose-headings:text-slate-800 prose-p:text-slate-600 prose-li:text-slate-600 prose-li:marker:text-indigo-500">
                     <div className="whitespace-pre-line leading-relaxed">
                       {selectedChapter.detailedNotes}
                     </div>
                   </div>
                </div>
             </div>
          )}
        </div>
      </div>
    );
  };

  // --- Modal for AI ---
  const renderAiModal = () => (
    <div className={`fixed inset-0 z-[60] flex items-end sm:items-center justify-center transition-opacity duration-300 ${aiModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setAiModalOpen(false)}></div>
      <div className={`bg-white w-full max-w-lg sm:rounded-3xl rounded-t-3xl p-6 relative z-10 transition-transform duration-300 ${aiModalOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="w-12 h-1 bg-slate-200 rounded-full mx-auto mb-6 sm:hidden"></div>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-100 text-indigo-600 rounded-xl">
               <Sparkles size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">AI Tutor</h2>
              <p className="text-xs text-slate-400">Powered by Gemini</p>
            </div>
          </div>
          <button onClick={() => setAiModalOpen(false)} className="text-slate-400 hover:text-slate-600 p-2 hover:bg-slate-50 rounded-full transition">
             <div className="sr-only">Close</div>
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-slate-700 mb-2">Ask a question</label>
          <div className="flex gap-2">
            <input 
              type="text" 
              value={aiQuery}
              onChange={(e) => setAiQuery(e.target.value)}
              placeholder="e.g. Explain 'Utility' with an example"
              className="flex-1 p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
            />
            <button 
              onClick={handleAiExplain}
              disabled={aiLoading}
              className="bg-indigo-600 text-white px-5 rounded-2xl font-bold hover:bg-indigo-700 disabled:opacity-50 transition shadow-lg shadow-indigo-200"
            >
              {aiLoading ? (
                 <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <ArrowLeft size={20} className="rotate-180" />
              )}
            </button>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl min-h-[150px] max-h-[40vh] overflow-y-auto border border-slate-100">
          {aiLoading ? (
             <div className="flex flex-col items-center justify-center h-full text-slate-400 gap-3 py-8">
                <Sparkles className="animate-pulse text-indigo-400" size={32} />
                <span className="text-sm font-medium animate-pulse">Consulting the knowledge base...</span>
             </div>
          ) : aiResponse ? (
             <div className="prose prose-sm prose-slate max-w-none">
               <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{aiResponse}</p>
             </div>
          ) : (
             <div className="flex flex-col items-center justify-center h-full text-slate-400 py-8 text-center">
                <Brain size={48} className="mb-4 opacity-20" />
                <p className="font-medium text-slate-500">I can explain any concept from this chapter.</p>
                <p className="text-xs mt-1">Try asking for definitions, differences, or examples.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="antialiased text-slate-800 bg-slate-50 h-full selection:bg-indigo-100 selection:text-indigo-900">
      {view === 'STREAM_SELECT' && renderStreamSelect()}
      {view === 'DASHBOARD' && renderDashboard()}
      {view === 'SUBJECT_DETAIL' && renderSubjectDetail()}
      {view === 'SYLLABUS_VIEW' && renderResourcesView('SYLLABUS')}
      {view === 'PAPER_PATTERN_VIEW' && renderResourcesView('PATTERN')}
      {view === 'CHAPTER_DETAIL' && renderChapterDetail()}
      {view === 'STUDY_MODE' && renderStudyMode()}
      
      {renderAiModal()}
    </div>
  );
};

export default App;
