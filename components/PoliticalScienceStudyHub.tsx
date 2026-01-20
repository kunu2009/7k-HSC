import React, { useState } from 'react';
import { X, BookOpen, Lightbulb, Award } from 'lucide-react';
import { POLITICALSCIENCE_SUBJECT } from '../data/politicalscience';

interface PoliticalScienceStudyHubProps {
  onClose: () => void;
}

const PoliticalScienceStudyHub: React.FC<PoliticalScienceStudyHubProps> = ({
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'chapters' | 'exam-tips' | 'quick-facts'>('chapters');
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-red-600 to-red-700 text-white p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Political Science Study Hub</h2>
            <p className="text-red-100 mt-1">HSC 12th Maharashtra Board</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-red-800 p-2 rounded-lg transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 p-4 bg-red-50">
          <div className="text-center">
            <p className="text-2xl font-bold text-red-600">100</p>
            <p className="text-xs text-gray-600">Total Marks</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-red-600">3 hrs</p>
            <p className="text-xs text-gray-600">Duration</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-red-600">5</p>
            <p className="text-xs text-gray-600">Chapters</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b bg-white sticky top-16 z-10">
          <button
            onClick={() => setActiveTab('chapters')}
            className={`flex-1 py-3 px-4 font-semibold flex items-center justify-center gap-2 transition ${
              activeTab === 'chapters'
                ? 'text-red-600 border-b-2 border-red-600 bg-red-50'
                : 'text-gray-600 hover:text-red-600'
            }`}
          >
            <BookOpen size={18} />
            Chapters
          </button>
          <button
            onClick={() => setActiveTab('exam-tips')}
            className={`flex-1 py-3 px-4 font-semibold flex items-center justify-center gap-2 transition ${
              activeTab === 'exam-tips'
                ? 'text-red-600 border-b-2 border-red-600 bg-red-50'
                : 'text-gray-600 hover:text-red-600'
            }`}
          >
            <Lightbulb size={18} />
            Exam Tips
          </button>
          <button
            onClick={() => setActiveTab('quick-facts')}
            className={`flex-1 py-3 px-4 font-semibold flex items-center justify-center gap-2 transition ${
              activeTab === 'quick-facts'
                ? 'text-red-600 border-b-2 border-red-600 bg-red-50'
                : 'text-gray-600 hover:text-red-600'
            }`}
          >
            <Award size={18} />
            Quick Facts
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Chapters Tab */}
          {activeTab === 'chapters' && (
            <div className="space-y-3">
              <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                <h3 className="font-semibold text-blue-900 mb-2">Exam Pattern</h3>
                <div className="space-y-2 text-sm text-blue-800">
                  {POLITICALSCIENCE_SUBJECT.paperPattern.sections.map((section, idx) => (
                    <p key={idx}>
                      <span className="font-semibold">{section.name}:</span> {section.marks} marks ({section.questions})
                    </p>
                  ))}
                </div>
              </div>

              <h3 className="font-bold text-lg text-red-600 mb-4">Course Chapters</h3>
              {POLITICALSCIENCE_SUBJECT.chapters.map((chapter) => (
                <div key={chapter.number} className="border rounded-lg overflow-hidden">
                  <button
                    onClick={() =>
                      setExpandedChapter(expandedChapter === chapter.number ? null : chapter.number)
                    }
                    className="w-full p-4 bg-red-50 hover:bg-red-100 flex justify-between items-center transition"
                  >
                    <span className="font-semibold text-red-700">
                      Chapter {chapter.number}: {chapter.title}
                    </span>
                    <span className="text-red-600">{expandedChapter === chapter.number ? '−' : '+'}</span>
                  </button>
                  {expandedChapter === chapter.number && (
                    <div className="p-4 bg-white border-t">
                      {chapter.topics && chapter.topics.length > 0 ? (
                        <ul className="space-y-2">
                          {chapter.topics.map((topic, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="text-red-500 font-bold">•</span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-600">Topics to be covered</p>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Previous Papers */}
              <div className="mt-6 pt-6 border-t">
                <h3 className="font-bold text-lg text-red-600 mb-4">Previous Year Papers</h3>
                <div className="grid gap-3">
                  {POLITICALSCIENCE_SUBJECT.previousPapers.map((paper, idx) => (
                    <a
                      key={idx}
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-red-200 rounded-lg hover:bg-red-50 transition flex justify-between items-center"
                    >
                      <span className="text-sm">
                        <span className="font-semibold text-red-600">{paper.year}</span>
                        {' '} {paper.month} ({paper.language})
                      </span>
                      <span className="text-red-500 hover:text-red-700">→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Exam Tips Tab */}
          {activeTab === 'exam-tips' && (
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-red-600 mb-4">Exam Preparation Tips</h3>
              {POLITICALSCIENCE_SUBJECT.examTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="p-4 border-l-4 border-red-500 bg-red-50 rounded-r-lg hover:bg-red-100 transition"
                >
                  <div className="flex gap-3">
                    <span className="text-red-600 font-bold text-lg">{idx + 1}.</span>
                    <p className="text-gray-800 text-sm">{tip}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Quick Facts Tab */}
          {activeTab === 'quick-facts' && (
            <div className="space-y-3">
              <h3 className="font-bold text-lg text-red-600 mb-4">Quick Facts & Key Concepts</h3>
              {POLITICALSCIENCE_SUBJECT.quickFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg hover:shadow-md transition"
                >
                  <p className="text-gray-800 text-sm leading-relaxed">{fact}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PoliticalScienceStudyHub;
