import React, { useState } from 'react';
import { X, BookOpen, Lightbulb, Award } from 'lucide-react';

interface EconomicsStudyHubProps {
  onClose: () => void;
}

const EconomicsStudyHub: React.FC<EconomicsStudyHubProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'chapters' | 'exam-tips' | 'quick-facts'>('chapters');
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null);

  const chapters = [
    {
      number: 1,
      title: 'Introduction to Micro & Macro Economics',
      topics: ['Basic Concepts', 'Microeconomics vs Macroeconomics', 'Economic Problems'],
    },
    {
      number: 2,
      title: 'Demand Analysis',
      topics: ['Law of Demand', 'Elasticity', 'Consumer Equilibrium', 'Indifference Curves'],
    },
    {
      number: 3,
      title: 'Supply Analysis',
      topics: ['Law of Supply', 'Production Function', 'Cost of Production', 'Economies of Scale'],
    },
    {
      number: 4,
      title: 'Market Structure',
      topics: ['Perfect Competition', 'Monopoly', 'Oligopoly', 'Monopolistic Competition'],
    },
    {
      number: 5,
      title: 'National Income & Accounting',
      topics: ['GDP', 'GNP', 'NNP', 'National Income', 'Per Capita Income'],
    },
    {
      number: 6,
      title: 'Money & Banking',
      topics: ['Functions of Money', 'Credit Creation', 'Central Bank', 'Monetary Policy'],
    },
  ];

  const previousPapers = [
    {
      year: 2024,
      month: 'March',
      language: 'English',
      url: 'https://static.collegedekho.com/media/uploads/2025/02/24/economics_board-question-paper_march-2024_65eed7efda59b.pdf',
    },
    {
      year: 2024,
      month: 'March',
      language: 'Marathi',
      url: 'https://targetpublications.org/download/hsc-commerce-and-arts-maharashtra-board-std-12-marathi-medium-economics-question-paper-march-2024',
    },
    {
      year: 2023,
      month: 'March',
      language: 'English',
      url: 'https://www.sbpatilcollege.com/commerce/pdf/economics/HSC-Economics-2023-01.pdf',
    },
    {
      year: 2023,
      month: 'March',
      language: 'Marathi',
      url: 'https://www.shiksha.com/boards/articles/maharashtra-12th-hsc-board-economics-question-paper-pdf-download-blogId-116443',
    },
  ];

  const examTips = [
    'Master demand & supply curves and their shifts with clear diagrams',
    'Practice numerical problems on elasticity, cost, and revenue calculations',
    'Understand market structures and their characteristics comprehensively',
    'Know GDP calculation methods: Income, Expenditure, and Value Added',
    'Study RBI functions and monetary policy tools with recent examples',
    'Prepare case studies on inflation, unemployment, and economic growth',
  ];

  const quickFacts = [
    'Elasticity of Demand (Ed) = % Change in Quantity / % Change in Price',
    'GDP = C + I + G + (X - M) where C=Consumption, I=Investment, G=Government, X-M=Net Exports',
    'Break-even Point occurs when Total Revenue = Total Cost',
    'Opportunity Cost is the next best alternative foregone',
    'Money supply is controlled by the Reserve Bank of India through open market operations',
    'Microeconomics focuses on individual consumers and firms; Macroeconomics on entire economy',
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Economics Study Hub</h2>
            <p className="text-indigo-100 mt-1">HSC 12th Maharashtra Board</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-indigo-800 p-2 rounded-lg transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 p-4 bg-indigo-50">
          <div className="text-center">
            <p className="text-2xl font-bold text-indigo-600">100</p>
            <p className="text-xs text-gray-600">Total Marks</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-indigo-600">3 hrs</p>
            <p className="text-xs text-gray-600">Duration</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-indigo-600">6</p>
            <p className="text-xs text-gray-600">Chapters</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b bg-white sticky top-16 z-10">
          <button
            onClick={() => setActiveTab('chapters')}
            className={`flex-1 py-3 px-4 font-semibold flex items-center justify-center gap-2 transition ${
              activeTab === 'chapters'
                ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50'
                : 'text-gray-600 hover:text-indigo-600'
            }`}
          >
            <BookOpen size={18} />
            Chapters
          </button>
          <button
            onClick={() => setActiveTab('exam-tips')}
            className={`flex-1 py-3 px-4 font-semibold flex items-center justify-center gap-2 transition ${
              activeTab === 'exam-tips'
                ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50'
                : 'text-gray-600 hover:text-indigo-600'
            }`}
          >
            <Lightbulb size={18} />
            Exam Tips
          </button>
          <button
            onClick={() => setActiveTab('quick-facts')}
            className={`flex-1 py-3 px-4 font-semibold flex items-center justify-center gap-2 transition ${
              activeTab === 'quick-facts'
                ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50'
                : 'text-gray-600 hover:text-indigo-600'
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
                  <p>
                    <span className="font-semibold">Section A (Objective):</span> 20 marks (20 MCQs)
                  </p>
                  <p>
                    <span className="font-semibold">Section B (Short Answer):</span> 30 marks (6 questions × 5 marks)
                  </p>
                  <p>
                    <span className="font-semibold">Section C (Long Answer):</span> 50 marks (5 questions × 10 marks)
                  </p>
                </div>
              </div>

              <h3 className="font-bold text-lg text-indigo-600 mb-4">Course Chapters</h3>
              {chapters.map((chapter) => (
                <div key={chapter.number} className="border rounded-lg overflow-hidden">
                  <button
                    onClick={() =>
                      setExpandedChapter(expandedChapter === chapter.number ? null : chapter.number)
                    }
                    className="w-full p-4 bg-indigo-50 hover:bg-indigo-100 flex justify-between items-center transition"
                  >
                    <span className="font-semibold text-indigo-700">
                      Chapter {chapter.number}: {chapter.title}
                    </span>
                    <span className="text-indigo-600">{expandedChapter === chapter.number ? '−' : '+'}</span>
                  </button>
                  {expandedChapter === chapter.number && (
                    <div className="p-4 bg-white border-t">
                      {chapter.topics && chapter.topics.length > 0 ? (
                        <ul className="space-y-2">
                          {chapter.topics.map((topic, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="text-indigo-500 font-bold">•</span>
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
                <h3 className="font-bold text-lg text-indigo-600 mb-4">Previous Year Papers</h3>
                <div className="grid gap-3">
                  {previousPapers.map((paper, idx) => (
                    <a
                      key={idx}
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition flex justify-between items-center"
                    >
                      <span className="text-sm">
                        <span className="font-semibold text-indigo-600">{paper.year}</span>
                        {' '} {paper.month} ({paper.language})
                      </span>
                      <span className="text-indigo-500 hover:text-indigo-700">→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Exam Tips Tab */}
          {activeTab === 'exam-tips' && (
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-indigo-600 mb-4">Exam Preparation Tips</h3>
              {examTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="p-4 border-l-4 border-indigo-500 bg-indigo-50 rounded-r-lg hover:bg-indigo-100 transition"
                >
                  <div className="flex gap-3">
                    <span className="text-indigo-600 font-bold text-lg">{idx + 1}.</span>
                    <p className="text-gray-800 text-sm">{tip}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Quick Facts Tab */}
          {activeTab === 'quick-facts' && (
            <div className="space-y-3">
              <h3 className="font-bold text-lg text-indigo-600 mb-4">Quick Facts & Formulas</h3>
              {quickFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg hover:shadow-md transition"
                >
                  <p className="text-gray-800 text-sm leading-relaxed font-mono">{fact}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EconomicsStudyHub;
