import React, { useState } from 'react';
import {
  X, BookOpen, Clock, Target, ChevronRight, ChevronDown,
  CheckCircle2, AlertTriangle, Star, Zap, FileText,
  Calendar, Users, Globe, Award, Brain
} from 'lucide-react';
import { POLITICAL_SCIENCE_BOARD_CRASHER } from '../data/politicalScienceBoardCrasher';

interface PolScienceBoardCrasherProps {
  onClose: () => void;
}

type TabType = 'overview' | 'ch1' | 'ch2' | 'ch3' | 'ch4' | 'ch5' | 'ch6' | 'pyq' | 'lastmin';

const PolScienceBoardCrasher: React.FC<PolScienceBoardCrasherProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const data = POLITICAL_SCIENCE_BOARD_CRASHER;

  const tabs = [
    { id: 'overview', label: '📋 Overview', color: 'bg-blue-500' },
    { id: 'ch1', label: 'Ch.1 World 1991', color: 'bg-red-500' },
    { id: 'ch2', label: 'Ch.2 Globalisation', color: 'bg-green-500' },
    { id: 'ch3', label: 'Ch.3 Humanitarian', color: 'bg-purple-500' },
    { id: 'ch4', label: 'Ch.4 Challenges', color: 'bg-orange-500' },
    { id: 'ch5', label: 'Ch.5 Governance', color: 'bg-teal-500' },
    { id: 'ch6', label: 'Ch.6 India-World', color: 'bg-indigo-500' },
    { id: 'pyq', label: '📝 All PYQs', color: 'bg-pink-500' },
    { id: 'lastmin', label: '⚡ Last Min', color: 'bg-yellow-500' },
  ];

  const renderOverview = () => (
    <div className="space-y-4">
      {/* Exam Alert */}
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
        <div className="flex items-center gap-3">
          <AlertTriangle className="text-red-500 animate-pulse" size={24} />
          <div>
            <h3 className="font-bold text-red-800 dark:text-red-200">Exam in 3 Days!</h3>
            <p className="text-sm text-red-600 dark:text-red-300">18th February 2026 • 80 Marks • 3 Hours</p>
          </div>
        </div>
      </div>

      {/* Paper Pattern */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
        <h3 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
          <FileText size={18} className="text-blue-500" /> Paper Pattern
        </h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="bg-slate-50 dark:bg-slate-700 p-2 rounded">
            <span className="font-bold">Q.1</span> Objectives - 20 marks
          </div>
          <div className="bg-slate-50 dark:bg-slate-700 p-2 rounded">
            <span className="font-bold">Q.2</span> Identify & Explain - 8 marks
          </div>
          <div className="bg-slate-50 dark:bg-slate-700 p-2 rounded">
            <span className="font-bold">Q.3</span> Distinguish - 8 marks
          </div>
          <div className="bg-slate-50 dark:bg-slate-700 p-2 rounded">
            <span className="font-bold">Q.4</span> Brief Answers - 16 marks
          </div>
          <div className="bg-slate-50 dark:bg-slate-700 p-2 rounded">
            <span className="font-bold">Q.5</span> Long Answers - 16 marks
          </div>
          <div className="bg-slate-50 dark:bg-slate-700 p-2 rounded">
            <span className="font-bold">Q.6</span> Graph/Stats - 12 marks
          </div>
        </div>
      </div>

      {/* Chapter Weightage */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
        <h3 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
          <Target size={18} className="text-green-500" /> Chapter Weightage
        </h3>
        <div className="space-y-2">
          {[
            { ch: '1. World since 1991', marks: '12-14', color: 'bg-red-500' },
            { ch: '2. Globalisation', marks: '12-14', color: 'bg-green-500' },
            { ch: '3. Humanitarian Issues', marks: '10-12', color: 'bg-purple-500' },
            { ch: '4. Challenges to Peace', marks: '12-14', color: 'bg-orange-500' },
            { ch: '5. Good Governance', marks: '10-12', color: 'bg-teal-500' },
            { ch: '6. India and World', marks: '14-16', color: 'bg-indigo-500' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${item.color}`} />
              <span className="flex-1 text-sm text-slate-700 dark:text-slate-300">{item.ch}</span>
              <span className="text-sm font-bold text-slate-800 dark:text-white">{item.marks}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Tips */}
      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
        <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-2 flex items-center gap-2">
          <Zap size={18} /> Quick Exam Tips
        </h3>
        <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
          <li>• <strong>MCQs:</strong> Read all options before marking</li>
          <li>• <strong>4-mark:</strong> Definition + 3 points + example</li>
          <li>• <strong>8-mark:</strong> Intro + 5-6 points + Conclusion</li>
          <li>• <strong>Tables:</strong> Use for "distinguish between" answers</li>
          <li>• <strong>Underline:</strong> Key terms in your answers</li>
        </ul>
      </div>
    </div>
  );

  const renderChapter = (chapterKey: string) => {
    const chapter = data[chapterKey as keyof typeof data] as any;
    if (!chapter || !chapter.title) return <p>Chapter not found</p>;

    return (
      <div className="space-y-4">
        {/* Chapter Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-4 text-white">
          <h3 className="font-bold text-lg">{chapter.title}</h3>
          <p className="text-white/80 text-sm">Expected: {chapter.weightage}</p>
        </div>

        {/* Must Know Concepts */}
        {chapter.mustKnowConcepts && (
          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setExpandedSection(expandedSection === 'concepts' ? null : 'concepts')}
              className="w-full flex items-center justify-between"
            >
              <h4 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                <Brain size={18} className="text-purple-500" /> Must-Know Concepts ({chapter.mustKnowConcepts.length})
              </h4>
              {expandedSection === 'concepts' ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            {expandedSection === 'concepts' && (
              <div className="mt-3 space-y-2">
                {chapter.mustKnowConcepts.map((concept: any, idx: number) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                    <p className="font-bold text-slate-800 dark:text-white text-sm">{concept.term}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{concept.definition}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* PYQ MCQs */}
        {chapter.pyqMCQs && (
          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setExpandedSection(expandedSection === 'mcqs' ? null : 'mcqs')}
              className="w-full flex items-center justify-between"
            >
              <h4 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" /> PYQ MCQs ({chapter.pyqMCQs.length})
              </h4>
              {expandedSection === 'mcqs' ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            {expandedSection === 'mcqs' && (
              <div className="mt-3 space-y-3">
                {chapter.pyqMCQs.map((mcq: any, idx: number) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                    <div className="flex items-start justify-between">
                      <p className="font-medium text-slate-800 dark:text-white text-sm">{mcq.q}</p>
                      <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded">
                        {mcq.year}
                      </span>
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-1">
                      {mcq.options.map((opt: string, optIdx: number) => (
                        <div
                          key={optIdx}
                          className={`text-xs p-1.5 rounded ${
                            optIdx === mcq.correct
                              ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 font-bold'
                              : 'bg-white dark:bg-slate-600 text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          {String.fromCharCode(65 + optIdx)}. {opt}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* PYQ Short Answers */}
        {chapter.pyqShortAnswers && (
          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setExpandedSection(expandedSection === 'short' ? null : 'short')}
              className="w-full flex items-center justify-between"
            >
              <h4 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                <FileText size={18} className="text-orange-500" /> 4-Mark Answers ({chapter.pyqShortAnswers.length})
              </h4>
              {expandedSection === 'short' ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            {expandedSection === 'short' && (
              <div className="mt-3 space-y-4">
                {chapter.pyqShortAnswers.map((qa: any, idx: number) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-bold text-slate-800 dark:text-white text-sm">{qa.q}</p>
                      <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 px-2 py-0.5 rounded">
                        {qa.year}
                      </span>
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 whitespace-pre-wrap bg-white dark:bg-slate-800 p-3 rounded border border-slate-200 dark:border-slate-600">
                      {qa.modelAnswer}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* PYQ Long Answers */}
        {chapter.pyqLongAnswers && (
          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setExpandedSection(expandedSection === 'long' ? null : 'long')}
              className="w-full flex items-center justify-between"
            >
              <h4 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                <BookOpen size={18} className="text-red-500" /> 8-Mark Answers ({chapter.pyqLongAnswers.length})
              </h4>
              {expandedSection === 'long' ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            {expandedSection === 'long' && (
              <div className="mt-3 space-y-4">
                {chapter.pyqLongAnswers.map((qa: any, idx: number) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-bold text-slate-800 dark:text-white text-sm">{qa.q}</p>
                      <span className="text-xs bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 px-2 py-0.5 rounded">
                        {qa.year}
                      </span>
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 whitespace-pre-wrap bg-white dark:bg-slate-800 p-3 rounded border border-slate-200 dark:border-slate-600 max-h-96 overflow-y-auto">
                      {qa.modelAnswer}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderLastMinute = () => {
    const lastMin = data.lastMinutePoints;

    return (
      <div className="space-y-4">
        {/* Important Dates */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
          <h4 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
            <Calendar size={18} className="text-blue-500" /> Important Dates
          </h4>
          <div className="grid grid-cols-1 gap-1 text-xs">
            {lastMin.importantDates.map((date, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-700 p-2 rounded flex items-center gap-2">
                <span className="font-bold text-blue-600 dark:text-blue-400 w-12">{date.split(' - ')[0]}</span>
                <span className="text-slate-600 dark:text-slate-300">{date.split(' - ')[1]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Important Persons */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
          <h4 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
            <Users size={18} className="text-green-500" /> Important Persons
          </h4>
          <div className="space-y-1 text-xs">
            {lastMin.importantPersons.map((person, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-700 p-2 rounded">
                <span className="text-slate-700 dark:text-slate-300">{person}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Organizations */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
          <h4 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
            <Globe size={18} className="text-purple-500" /> Important Organizations
          </h4>
          <div className="space-y-1 text-xs">
            {lastMin.importantOrganizations.map((org, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-700 p-2 rounded">
                <span className="text-slate-700 dark:text-slate-300">{org}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Full Forms */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
          <h4 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
            <Award size={18} className="text-orange-500" /> Full Forms
          </h4>
          <div className="grid grid-cols-1 gap-1 text-xs">
            {lastMin.fullForms.map((ff, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-700 p-2 rounded">
                <span className="text-slate-700 dark:text-slate-300">{ff}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Exam Tips */}
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
          <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3 flex items-center gap-2">
            <Zap size={18} /> Exam Day Tips
          </h4>
          <ul className="space-y-1 text-xs text-amber-700 dark:text-amber-300">
            {lastMin.examTips.map((tip, idx) => (
              <li key={idx}>• {tip}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 p-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
              🏛️
            </div>
            <div>
              <h2 className="text-xl font-black">Political Science</h2>
              <p className="text-white/80 text-sm">Board Exam Crasher • 18 Feb 2026</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition">
            <X size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto p-2 bg-slate-100 dark:bg-slate-800 gap-1 no-scrollbar">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as TabType);
                setExpandedSection(null);
              }}
              className={`px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition ${
                activeTab === tab.id
                  ? `${tab.color} text-white`
                  : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'ch1' && renderChapter('chapter1')}
          {activeTab === 'ch2' && renderChapter('chapter2')}
          {activeTab === 'ch3' && renderChapter('chapter3')}
          {activeTab === 'ch4' && renderChapter('chapter4')}
          {activeTab === 'ch5' && renderChapter('chapter5')}
          {activeTab === 'ch6' && renderChapter('chapter6')}
          {activeTab === 'lastmin' && renderLastMinute()}
          {activeTab === 'pyq' && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl p-4 text-white">
                <h3 className="font-bold text-lg">All Previous Year Questions</h3>
                <p className="text-white/80 text-sm">2019-2025 PYQs with Model Answers</p>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Select a chapter tab above to see chapter-wise PYQs with model answers.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
          <p className="text-center text-xs text-slate-500 dark:text-slate-400">
            💪 3 days to go! You can do this! Focus and revise smartly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PolScienceBoardCrasher;
