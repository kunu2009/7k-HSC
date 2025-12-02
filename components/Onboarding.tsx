import React, { useState } from 'react';
import { Stream } from '../types';
import { db, ELECTIVE_SUBJECTS, COMPULSORY_SUBJECTS, UserProfile } from '../services/localDb';
import { GraduationCap, BookOpen, FlaskConical, TrendingUp, ChevronRight, Check, Sparkles, User, Lock } from 'lucide-react';

interface OnboardingProps {
  onComplete: (profile: UserProfile) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState<'welcome' | 'name' | 'stream' | 'subjects'>('welcome');
  const [name, setName] = useState('');
  const [selectedStream, setSelectedStream] = useState<Stream | null>(null);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const handleStreamSelect = (stream: Stream) => {
    setSelectedStream(stream);
    // Pre-select all elective subjects by default (compulsory are auto-included)
    const defaultSubjects = ELECTIVE_SUBJECTS[stream].map(s => s.id);
    setSelectedSubjects(defaultSubjects);
    setStep('subjects');
  };

  const toggleSubject = (subjectId: string) => {
    setSelectedSubjects(prev => 
      prev.includes(subjectId) 
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId]
    );
  };

  const handleComplete = () => {
    if (!selectedStream || selectedSubjects.length === 0) return;
    // Always include compulsory subjects (English)
    const allSubjects = [...COMPULSORY_SUBJECTS.map(s => s.id), ...selectedSubjects];
    const profile = db.createUserProfile(name || 'Student', selectedStream, allSubjects);
    onComplete(profile);
  };

  const streamOptions = [
    { 
      id: Stream.COMMERCE, 
      name: 'Commerce', 
      icon: TrendingUp, 
      color: 'from-indigo-500 to-violet-600',
      desc: 'Economics, OCM, BK, SP'
    },
    { 
      id: Stream.ARTS, 
      name: 'Arts', 
      icon: BookOpen, 
      color: 'from-orange-500 to-red-600',
      desc: 'History, Politics, Sociology'
    },
    { 
      id: Stream.SCIENCE, 
      name: 'Science', 
      icon: FlaskConical, 
      color: 'from-emerald-500 to-teal-600',
      desc: 'Physics, Chemistry, Biology, Math'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 flex items-center justify-center p-4">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-lg">
        {/* Welcome Step */}
        {step === 'welcome' && (
          <div className="text-center animate-fade-in">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-indigo-500/30 transform rotate-3">
                <GraduationCap size={48} className="text-white" />
              </div>
              <h1 className="text-4xl font-black text-white mb-3">
                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">7k 12th</span>
              </h1>
              <p className="text-slate-400 text-lg">Your journey to HSC success starts here</p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => setStep('name')}
                className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-lg rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] shadow-xl shadow-indigo-500/25"
              >
                <Sparkles size={22} />
                Let's Get Started
                <ChevronRight size={22} />
              </button>
            </div>

            <p className="mt-6 text-slate-500 text-sm">
              Flashcards • MCQs • Reels • Progress Tracking
            </p>
          </div>
        )}

        {/* Name Step */}
        {step === 'name' && (
          <div className="animate-fade-in">
            <button 
              onClick={() => setStep('welcome')}
              className="mb-6 text-slate-400 hover:text-white flex items-center gap-2 transition"
            >
              ← Back
            </button>

            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <User size={32} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">What's your name?</h2>
              <p className="text-slate-400">We'll personalize your experience</p>
            </div>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-2xl text-white text-lg placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 mb-6"
              autoFocus
            />

            <button
              onClick={() => setStep('stream')}
              className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-lg rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02]"
            >
              Continue
              <ChevronRight size={22} />
            </button>
          </div>
        )}

        {/* Stream Selection Step */}
        {step === 'stream' && (
          <div className="animate-fade-in">
            <button 
              onClick={() => setStep('name')}
              className="mb-6 text-slate-400 hover:text-white flex items-center gap-2 transition"
            >
              ← Back
            </button>

            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                {name ? `Hi ${name}! ` : ''}Choose Your Stream
              </h2>
              <p className="text-slate-400">Select your HSC stream</p>
            </div>

            <div className="space-y-4">
              {streamOptions.map((stream) => (
                <button
                  key={stream.id}
                  onClick={() => handleStreamSelect(stream.id)}
                  className="w-full group relative overflow-hidden bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 p-5 rounded-2xl transition-all text-left"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${stream.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`w-14 h-14 bg-gradient-to-br ${stream.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                      <stream.icon size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{stream.name}</h3>
                      <p className="text-slate-400 text-sm">{stream.desc}</p>
                    </div>
                    <ChevronRight size={24} className="text-slate-500 group-hover:text-white transition" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Subject Selection Step */}
        {step === 'subjects' && selectedStream && (
          <div className="animate-fade-in">
            <button 
              onClick={() => setStep('stream')}
              className="mb-6 text-slate-400 hover:text-white flex items-center gap-2 transition"
            >
              ← Back
            </button>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Select Your Subjects</h2>
              <p className="text-slate-400">Choose your elective subjects (English is compulsory)</p>
            </div>

            {/* Compulsory Subjects - Locked */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Lock size={12} /> Compulsory Subject
              </p>
              <div className="grid grid-cols-2 gap-3">
                {COMPULSORY_SUBJECTS.map((subject) => (
                  <div
                    key={subject.id}
                    className="p-4 rounded-xl border-2 bg-emerald-600/20 border-emerald-500 text-white cursor-not-allowed"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{subject.name}</span>
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                        <Check size={14} className="text-white" />
                      </div>
                    </div>
                    <span className="text-xs text-emerald-300">Auto-included</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Elective Subjects - Selectable */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Elective Subjects (Select your subjects)</p>
              <div className="grid grid-cols-2 gap-3">
                {ELECTIVE_SUBJECTS[selectedStream].map((subject) => {
                  const isSelected = selectedSubjects.includes(subject.id);
                  return (
                    <button
                      key={subject.id}
                      onClick={() => toggleSubject(subject.id)}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        isSelected 
                          ? 'bg-indigo-600/20 border-indigo-500 text-white' 
                          : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{subject.name}</span>
                        {isSelected && (
                          <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                            <Check size={14} className="text-white" />
                          </div>
                        )}
                      </div>
                      <span className="text-xs text-slate-500">{subject.maxMarks} marks</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              onClick={handleComplete}
              disabled={selectedSubjects.length === 0}
              className={`w-full py-4 px-6 font-bold text-lg rounded-2xl flex items-center justify-center gap-3 transition-all ${
                selectedSubjects.length > 0
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white transform hover:scale-[1.02]'
                  : 'bg-slate-700 text-slate-400 cursor-not-allowed'
              }`}
            >
              <Check size={22} />
              Start Learning ({selectedSubjects.length} subjects)
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Onboarding;
