import React, { useMemo, useState } from 'react';
import { X, BookOpen, Clock, MapPin, Users, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { HIS_SUBJECT } from '../data/history';

interface HistoryStudyHubProps {
  onClose: () => void;
}

const HistoryStudyHub: React.FC<HistoryStudyHubProps> = ({ onClose }) => {
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  const papers = useMemo(() => {
    const seen = new Set<string>();
    return (HIS_SUBJECT.previousPapers || []).filter(p => {
      if (seen.has(p.link)) return false;
      seen.add(p.link);
      return true;
    });
  }, []);

  const chapters = HIS_SUBJECT.chapters.slice(0, 5); // Show first 5 chapters

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-orange-900 via-red-900 to-amber-900 rounded-2xl w-full max-w-4xl shadow-2xl border border-orange-700/50">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-700 to-red-700 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-5xl">📜</div>
              <div>
                <h2 className="text-2xl font-bold text-white">History Study Hub</h2>
                <p className="text-orange-100 mt-1">Maharashtra HSC Board - Class 12</p>
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
          <div className="bg-orange-900/40 border border-orange-700/50 rounded-xl p-4">
            <h3 className="font-semibold text-orange-100 mb-2 flex items-center gap-2">
              <Globe className="w-5 h-5" /> 12 Chapters Overview
            </h3>
            <p className="text-orange-100/80 text-sm">
              Renaissance, Colonialism, Indian Reforms, Struggle for Independence, World Wars, Cold War, India's Transformation
            </p>
          </div>

          {/* Paper Pattern */}
          <div className="bg-red-900/40 border border-red-700/50 rounded-xl p-4">
            <h3 className="font-semibold text-red-100 mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5" /> Exam Pattern (80 Marks)
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm text-red-100/80">
              <div>Q.1: MCQ - 20 Marks</div>
              <div>Q.2: Brief - 12 Marks</div>
              <div>Q.3: Short Notes - 12 Marks</div>
              <div>Q.4: Long Answers - 16 Marks</div>
              <div>Q.5: Map Work - 8 Marks</div>
              <div>Q.6: Project - 12 Marks</div>
            </div>
          </div>

          {/* Key Chapters */}
          <div className="space-y-3">
            <h3 className="font-semibold text-orange-100 flex items-center gap-2">
              <Clock className="w-5 h-5" /> Key Chapters
            </h3>
            {chapters.map(ch => (
              <button
                key={ch.id}
                onClick={() => setExpandedChapter(expandedChapter === ch.id ? null : ch.id)}
                className="w-full text-left bg-orange-800/50 hover:bg-orange-800/70 border border-orange-700/50 rounded-lg p-4 transition"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-orange-100">{ch.title}</p>
                    <p className="text-orange-200/70 text-sm mt-1">{ch.description}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-300 transition ${
                      expandedChapter === ch.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {expandedChapter === ch.id && (
                  <div className="mt-3 pt-3 border-t border-orange-700/50 text-orange-200/80 text-sm space-y-2">
                    <p>{ch.summary}</p>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Previous Papers */}
          {papers.length > 0 && (
            <div className="bg-orange-900/40 border border-orange-700/50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-orange-200">PDF Bank</p>
                  <h3 className="text-lg font-semibold text-white">Previous Papers</h3>
                </div>
                <span className="px-2 py-1 rounded-full text-xs bg-orange-900/60 text-orange-200 border border-orange-700/50">
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
                    className="group flex items-start gap-3 rounded-lg border border-orange-700/30 bg-orange-900/20 p-3 hover:border-orange-500 hover:bg-orange-900/40 transition"
                  >
                    <div className="mt-0.5 text-orange-300">📄</div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-orange-900/40 text-orange-200 border border-orange-700/40">
                          {p.year}
                        </span>
                        <span className="text-[11px] text-orange-300/70">PDF</span>
                      </div>
                      <div className="text-sm font-medium text-orange-100 truncate group-hover:text-orange-50">
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

export default HistoryStudyHub;
