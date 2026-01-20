import React, { useMemo, useState } from 'react';
import { X, BookOpen, Clock, Sparkles, FileText, ChevronDown, Trophy, AlertTriangle, Lightbulb } from 'lucide-react';
import { HINDI_SUBJECT } from '../data/hindi';

interface HindiStudyHubProps {
  onClose: () => void;
}

const HindiStudyHub: React.FC<HindiStudyHubProps> = ({ onClose }) => {
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'chapters' | 'exam-tips' | 'quick-facts'>('chapters');
  const papers = useMemo(() => {
    const seen = new Set<string>();
    return (HINDI_SUBJECT.previousPapers || []).filter(p => {
      if (seen.has(p.link)) return false;
      seen.add(p.link);
      return true;
    });
  }, []);

  const chapters = HINDI_SUBJECT.chapters.slice(0, 5);

  const examTips = [
    { tip: 'गद्य (Prose) Mastery', detail: 'Read texts multiple times - Understand themes, characters, writing style. Practice summary writing.' },
    { tip: 'पद्य (Poetry) Appreciation', detail: 'Identify poetic devices - अलंकार, छंद, भाव. Analyze meter and meaning.' },
    { tip: 'व्याकरण Excellence', detail: '14 marks - Master संज्ञा, सर्वनाम, क्रिया, विशेषण. Practice error correction.' },
    { tip: 'लेखन कौशल', detail: '16 marks - Write पत्र (letters), निबंध (essays), and आवेदन (applications) accurately.' },
    { tip: 'विशेष अध्ययन', detail: 'Prepare detailed notes on modern Hindi literature and contemporary topics.' },
    { tip: 'Vocabulary Building', detail: 'Learn synonyms, antonyms, and idiomatic expressions. Prepare word lists.' },
  ];

  const quickFacts = [
    { fact: 'गद्य (Prose)', detail: 'Non-poetic narrative - Stories, essays, articles with prose writing style' },
    { fact: 'पद्य (Poetry)', detail: 'Verse with rhyme and meter - Uses अलंकार (figures of speech) and छंद (meters)' },
    { fact: 'व्याकरण (Grammar)', detail: 'Parts of Hindi language - संज्ञा, सर्वनाम, क्रिया, विशेषण, adverbs, prepositions' },
    { fact: 'अलंकार (Devices)', detail: 'Poetic devices - उपमा (simile), रूपक (metaphor), यमक (alliteration), श्लेष (pun)' },
    { fact: 'छंद (Meter)', detail: 'Poetic structure - दोहा, चौपाई, कवित्त with specific syllable patterns' },
    { fact: 'लेखन (Writing)', detail: 'Formal & informal writing - पत्र, निबंध, संवाद, आवेदन, विवरण' },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 rounded-2xl w-full max-w-4xl shadow-2xl border border-amber-700/50">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-700 to-orange-700 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-5xl">📖</div>
              <div>
                <h2 className="text-2xl font-bold text-white">हिंदी Study Hub</h2>
                <p className="text-amber-100 mt-1">Maharashtra HSC Board - Class 12</p>
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
        <div className="bg-amber-800/40 border-b border-amber-700/50 flex gap-2 p-4">
          <button
            onClick={() => setActiveTab('chapters')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === 'chapters'
                ? 'bg-amber-600 text-white'
                : 'text-amber-200 hover:bg-amber-700/50'
            }`}
          >
            <BookOpen className="w-4 h-4 inline mr-2" />
            Chapters
          </button>
          <button
            onClick={() => setActiveTab('exam-tips')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === 'exam-tips'
                ? 'bg-amber-600 text-white'
                : 'text-amber-200 hover:bg-amber-700/50'
            }`}
          >
            <Trophy className="w-4 h-4 inline mr-2" />
            Exam Tips
          </button>
          <button
            onClick={() => setActiveTab('quick-facts')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === 'quick-facts'
                ? 'bg-amber-600 text-white'
                : 'text-amber-200 hover:bg-amber-700/50'
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
              <div className="bg-amber-900/40 border border-amber-700/50 rounded-xl p-4">
                <h3 className="font-semibold text-amber-100 mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" /> गद्य, पद्य और विशेष अध्ययन
                </h3>
                <p className="text-amber-100/80 text-sm">
                  Hindi literature, grammar, and writing skills for board examination - Cover prose, poetry, essays, and formal communication
                </p>
              </div>

              {/* Paper Pattern */}
              <div className="bg-orange-900/40 border border-orange-700/50 rounded-xl p-4">
                <h3 className="font-semibold text-orange-100 mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> परीक्षा प्रतिरूप (100 Marks)
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-orange-100/80">
                  <div>Q.1: अपठित गद्य - 10 Marks</div>
                  <div>Q.2: गद्य - 16 Marks</div>
                  <div>Q.3: पद्य - 16 Marks</div>
                  <div>Q.4: व्याकरण - 14 Marks</div>
                  <div>Q.5: लेखन कौशल - 16 Marks</div>
                  <div>Q.6: विशेष - 12 Marks</div>
                </div>
              </div>

              {/* Key Chapters */}
              <div className="space-y-3">
                <h3 className="font-semibold text-amber-100 flex items-center gap-2">
                  <Clock className="w-5 h-5" /> मुख्य पाठ्यक्रम
                </h3>
                {chapters.map(ch => (
                  <button
                    key={ch.id}
                    onClick={() => setExpandedChapter(expandedChapter === ch.id ? null : ch.id)}
                    className="w-full text-left bg-amber-800/50 hover:bg-amber-800/70 border border-amber-700/50 rounded-lg p-4 transition"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="font-medium text-amber-100">{ch.title}</p>
                        <p className="text-amber-200/70 text-sm mt-1">{ch.description}</p>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-amber-300 transition ${
                          expandedChapter === ch.id ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                    {expandedChapter === ch.id && (
                      <div className="mt-3 pt-3 border-t border-amber-700/50 text-amber-200/80 text-sm space-y-2">
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
              <h3 className="font-semibold text-amber-100 flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5" /> Essential Exam Preparation
              </h3>
              {examTips.map((item, i) => (
                <div key={i} className="bg-amber-800/50 border border-amber-700/50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-300 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-amber-100">{item.tip}</p>
                      <p className="text-amber-200/70 text-sm mt-1">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'quick-facts' && (
            <div className="space-y-3">
              <h3 className="font-semibold text-amber-100 flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5" /> हिंदी भाषा Overview
              </h3>
              {quickFacts.map((item, i) => (
                <div key={i} className="bg-amber-800/50 border border-amber-700/50 rounded-lg p-4">
                  <p className="font-medium text-amber-100">{item.fact}</p>
                  <p className="text-amber-200/70 text-sm mt-2">{item.detail}</p>
                </div>
              ))}
            </div>
          )}

          {/* Previous Papers */}
          {papers.length > 0 && (
            <div className="bg-amber-900/40 border border-amber-700/50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-amber-200">PDF Bank</p>
                  <h3 className="text-lg font-semibold text-white">Previous Papers</h3>
                </div>
                <span className="px-2 py-1 rounded-full text-xs bg-amber-900/60 text-amber-200 border border-amber-700/50">
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
                    className="group flex items-start gap-3 rounded-lg border border-amber-700/30 bg-amber-900/20 p-3 hover:border-amber-500 hover:bg-amber-900/40 transition"
                  >
                    <div className="mt-0.5 text-amber-300">📄</div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-amber-900/40 text-amber-200 border border-amber-700/40">
                          {p.year}
                        </span>
                        <span className="text-[11px] text-amber-300/70">PDF</span>
                      </div>
                      <div className="text-sm font-medium text-amber-100 truncate group-hover:text-amber-50">
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

export default HindiStudyHub;
