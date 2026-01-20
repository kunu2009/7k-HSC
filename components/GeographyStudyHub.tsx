import React, { useMemo, useState } from 'react';
import { X, BookOpen, Clock, Compass, MapPin, ChevronDown } from 'lucide-react';
import { GEO_SUBJECT } from '../data/geography';

interface GeographyStudyHubProps {
  onClose: () => void;
}

const GeographyStudyHub: React.FC<GeographyStudyHubProps> = ({ onClose }) => {
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  const papers = useMemo(() => {
    const seen = new Set<string>();
    return (GEO_SUBJECT.previousPapers || []).filter(p => {
      if (p.link === '#') return false; // Skip placeholder links
      if (seen.has(p.link)) return false;
      seen.add(p.link);
      return true;
    });
  }, []);

  const chapters = GEO_SUBJECT.chapters.slice(0, 5);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-green-900 via-teal-900 to-cyan-900 rounded-2xl w-full max-w-4xl shadow-2xl border border-green-700/50">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-700 to-teal-700 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-5xl">🌍</div>
              <div>
                <h2 className="text-2xl font-bold text-white">Geography Study Hub</h2>
                <p className="text-green-100 mt-1">Maharashtra HSC Board - Class 12</p>
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
          <div className="bg-green-900/40 border border-green-700/50 rounded-xl p-4">
            <h3 className="font-semibold text-green-100 mb-2 flex items-center gap-2">
              <Compass className="w-5 h-5" /> 9 Chapters Overview
            </h3>
            <p className="text-green-100/80 text-sm">
              Physical Geography, Climate Systems, Biomes, Human Geography, Cultural Regions, Economic Activities, Political Geography, Geopolitics
            </p>
          </div>

          {/* Paper Pattern */}
          <div className="bg-teal-900/40 border border-teal-700/50 rounded-xl p-4">
            <h3 className="font-semibold text-teal-100 mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5" /> Exam Pattern (80 Marks)
            </h3>
            <div className="grid grid-cols-2 gap-3 text-sm text-teal-100/80">
              <div>Q.1: MCQ - 20 Marks</div>
              <div>Q.2: Brief - 12 Marks</div>
              <div>Q.3: Short Notes - 12 Marks</div>
              <div>Q.4: Long Answers - 16 Marks</div>
              <div>Q.5: Map Work - 8 Marks</div>
              <div>Q.6: Practicals - 12 Marks</div>
            </div>
          </div>

          {/* Key Chapters */}
          <div className="space-y-3">
            <h3 className="font-semibold text-green-100 flex items-center gap-2">
              <Clock className="w-5 h-5" /> Key Chapters
            </h3>
            {chapters.map(ch => (
              <button
                key={ch.id}
                onClick={() => setExpandedChapter(expandedChapter === ch.id ? null : ch.id)}
                className="w-full text-left bg-green-800/50 hover:bg-green-800/70 border border-green-700/50 rounded-lg p-4 transition"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-green-100">{ch.title}</p>
                    <p className="text-green-200/70 text-sm mt-1">{ch.description}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-green-300 transition ${
                      expandedChapter === ch.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {expandedChapter === ch.id && (
                  <div className="mt-3 pt-3 border-t border-green-700/50 text-green-200/80 text-sm space-y-2">
                    <p>{ch.summary}</p>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Previous Papers */}
          {papers.length > 0 && (
            <div className="bg-green-900/40 border border-green-700/50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-green-200">PDF Bank</p>
                  <h3 className="text-lg font-semibold text-white">Previous Papers</h3>
                </div>
                <span className="px-2 py-1 rounded-full text-xs bg-green-900/60 text-green-200 border border-green-700/50">
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
                    className="group flex items-start gap-3 rounded-lg border border-green-700/30 bg-green-900/20 p-3 hover:border-green-500 hover:bg-green-900/40 transition"
                  >
                    <div className="mt-0.5 text-green-300">📄</div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-900/40 text-green-200 border border-green-700/40">
                          {p.year}
                        </span>
                        <span className="text-[11px] text-green-300/70">PDF</span>
                      </div>
                      <div className="text-sm font-medium text-green-100 truncate group-hover:text-green-50">
                        {p.title}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {papers.length === 0 && (
            <div className="bg-green-900/40 border border-green-700/50 rounded-xl p-4 text-center">
              <p className="text-green-200/70">Previous papers coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeographyStudyHub;
