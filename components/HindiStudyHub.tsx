import React, { useMemo, useState } from 'react';
import { X, BookOpen, Clock, Sparkles, FileText, ChevronDown } from 'lucide-react';
import { HINDI_SUBJECT } from '../data/hindi';

interface HindiStudyHubProps {
  onClose: () => void;
}

const HindiStudyHub: React.FC<HindiStudyHubProps> = ({ onClose }) => {
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  const papers = useMemo(() => {
    const seen = new Set<string>();
    return (HINDI_SUBJECT.previousPapers || []).filter(p => {
      if (seen.has(p.link)) return false;
      seen.add(p.link);
      return true;
    });
  }, []);

  const chapters = HINDI_SUBJECT.chapters.slice(0, 5);

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

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
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
