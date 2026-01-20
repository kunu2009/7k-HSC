import React, { useMemo, useState } from 'react';
import { X, BookOpen, Clock, Sparkles, FileText, ChevronDown, Trophy, AlertTriangle, Lightbulb } from 'lucide-react';
import { ENGLISH_SUBJECT } from '../data/english';

interface EnglishStudyHubProps {
  onClose: () => void;
}

const EnglishStudyHub: React.FC<EnglishStudyHubProps> = ({ onClose }) => {
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'chapters' | 'exam-tips' | 'quick-facts'>('chapters');
  const papers = useMemo(() => {
    const seen = new Set<string>();
    return (ENGLISH_SUBJECT.previousPapers || []).filter(p => {
      if (seen.has(p.link)) return false;
      seen.add(p.link);
      return true;
    });
  }, []);

  const chapters = ENGLISH_SUBJECT.chapters.slice(0, 4);

  const examTips = [
    { tip: 'Reading Comprehension', detail: 'Practice unseen passages - Understand main idea, inference, vocabulary in context.' },
    { tip: 'Literary Analysis', detail: 'Study prose & poetry deeply - Identify themes, symbolism, character development, poetic devices.' },
    { tip: 'Writing Excellence', detail: '20 marks - Practice formal letters, essays, creative writing. Focus on clarity and organization.' },
    { tip: 'Grammar Accuracy', detail: 'Revision of parts of speech, tenses, sentence structure. Common error correction.' },
    { tip: 'Vocabulary Building', detail: 'Learn synonyms, antonyms, and usage. Prepare word lists from passages studied.' },
    { tip: 'Novel Study', detail: '20 marks - Know plot, characters, themes. Answer long questions with textual evidence.' },
  ];

  const quickFacts = [
    { fact: 'Prose', detail: 'Non-poetic narrative text - Develops characters, plot, and themes through dialogue and description' },
    { fact: 'Poetry', detail: 'Verse with rhythm and rhyme - Uses literary devices like metaphor, imagery, symbolism' },
    { fact: 'Novel', detail: 'Extended prose narrative - Complex characters, multiple subplots, deep thematic exploration' },
    { fact: 'Writing Skills', detail: 'Letters, essays, reports - Formal or informal depending on audience and purpose' },
    { fact: 'Grammar Basics', detail: 'Parts of speech, tenses, sentence types - Foundation for correct communication' },
    { fact: 'Unseen Passage', detail: '10 marks - Test comprehension and critical thinking on unfamiliar texts' },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 rounded-2xl w-full max-w-4xl shadow-2xl border border-blue-700/50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-5xl">📚</div>
              <div>
                <h2 className="text-2xl font-bold text-white">English Study Hub</h2>
                <p className="text-blue-100 mt-1">Maharashtra HSC Board - Class 12</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-full transition"
            >
              ×
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-blue-800/40 border-b border-blue-700/50 flex gap-2 p-4">
          <button
            onClick={() => setActiveTab('chapters')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === 'chapters'
                ? 'bg-blue-600 text-white'
                : 'text-blue-200 hover:bg-blue-700/50'
            }`}
          >
            <BookOpen className="w-4 h-4 inline mr-2" />
            Chapters
          </button>
          <button
            onClick={() => setActiveTab('exam-tips')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === 'exam-tips'
                ? 'bg-blue-600 text-white'
                : 'text-blue-200 hover:bg-blue-700/50'
            }`}
          >
            <Trophy className="w-4 h-4 inline mr-2" />
            Exam Tips
          </button>
          <button
            onClick={() => setActiveTab('quick-facts')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === 'quick-facts'
                ? 'bg-blue-600 text-white'
                : 'text-blue-200 hover:bg-blue-700/50'
            }`}
          >
            <Lightbulb className="w-4 h-4 inline mr-2" />
            Quick Facts
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {activeTab === 'chapters' && (
            <>
              {/* Syllabus Overview */}
              <div className="bg-blue-900/40 border border-blue-700/50 rounded-xl p-4">
                <h3 className="font-semibold text-blue-100 mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" /> Comprehensive English Programme
                </h3>
                <p className="text-blue-100/80 text-sm">
                  Prose, Poetry, Writing Skills, and Novel Study - Develop communication, critical thinking, and literary appreciation
                </p>
              </div>

              {/* Paper Pattern */}
              <div className="bg-indigo-900/40 border border-indigo-700/50 rounded-xl p-4">
                <h3 className="font-semibold text-indigo-100 mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Exam Pattern (100 Marks)
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-indigo-100/80">
                  <div>Q.1: Prose - 20 Marks</div>
                  <div>Q.2: Poetry - 20 Marks</div>
                  <div>Q.3: Writing - 20 Marks</div>
                  <div>Q.4: Novel - 20 Marks</div>
                  <div>Q.5: Unseen Passage - 10 Marks</div>
                  <div>Q.6: Grammar & Vocab - 10 Marks</div>
                </div>
              </div>

              {/* Key Chapters */}
              <div className="space-y-3">
                <h3 className="font-semibold text-blue-100 flex items-center gap-2">
                  <Clock className="w-5 h-5" /> Core Sections
                </h3>
                {chapters.map(ch => (
                  <button
                    key={ch.id}
                    onClick={() => setExpandedChapter(expandedChapter === ch.id ? null : ch.id)}
                    className="w-full text-left bg-blue-800/50 hover:bg-blue-800/70 border border-blue-700/50 rounded-lg p-4 transition"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="font-medium text-blue-100">{ch.title}</p>
                        <p className="text-blue-200/70 text-sm mt-1">{ch.description}</p>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-blue-300 transition ${
                          expandedChapter === ch.id ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                    {expandedChapter === ch.id && (
                      <div className="mt-3 pt-3 border-t border-blue-700/50 text-blue-200/80 text-sm space-y-2">
                        <p>{ch.summary}</p>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </>
          )}

          {activeTab === 'exam-tips' && (
            <div className="space-y-3">
              <h3 className="font-semibold text-blue-100 flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5" /> Essential Exam Preparation
              </h3>
              {examTips.map((item, i) => (
                <div key={i} className="bg-blue-800/50 border border-blue-700/50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-blue-300 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-blue-100">{item.tip}</p>
                      <p className="text-blue-200/70 text-sm mt-1">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'quick-facts' && (
            <div className="space-y-3">
              <h3 className="font-semibold text-blue-100 flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5" /> Literary Overview
              </h3>
              {quickFacts.map((item, i) => (
                <div key={i} className="bg-blue-800/50 border border-blue-700/50 rounded-lg p-4">
                  <p className="font-medium text-blue-100">{item.fact}</p>
                  <p className="text-blue-200/70 text-sm mt-2">{item.detail}</p>
                </div>
              ))}
            </div>
          )}

          {/* Previous Papers */}
          {papers.length > 0 && (
            <div className="bg-blue-900/40 border border-blue-700/50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-blue-200">PDF Bank</p>
                  <h3 className="text-lg font-semibold text-white">Previous Papers</h3>
                </div>
                <span className="px-2 py-1 rounded-full text-xs bg-blue-900/60 text-blue-200 border border-blue-700/50">
                  {papers.length} files
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {papers.map(p => (
                  <a
                    key={p.link}
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 rounded-lg border border-blue-700/30 bg-blue-900/20 p-3 hover:border-blue-500 hover:bg-blue-900/40 transition"
                  >
                    <div className="mt-0.5 text-blue-300">📄</div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-900/40 text-blue-200 border border-blue-700/40">
                          {p.year}
                        </span>
                        <span className="text-[11px] text-blue-300/70">PDF</span>
                      </div>
                      <div className="text-sm font-medium text-blue-100 truncate group-hover:text-blue-50">
                        {p.title}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnglishStudyHub;
