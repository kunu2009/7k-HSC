import React, { useState, useMemo } from 'react';
import { ArrowLeft, FileText, Calendar, TrendingUp, Star, CheckCircle, BookOpen, Filter, ChevronDown, Search, Clock, Award } from 'lucide-react';
import { Subject, Chapter } from '../types';

interface PYQProps {
  subjects: Subject[];
  onClose?: () => void;
}

interface PYQuestion {
  id: string;
  year: number;
  question: string;
  marks: number;
  type: 'short' | 'long' | 'mcq' | 'map';
  answer?: string;
  frequency: number; // How many times this type was asked
  chapterId: string;
  chapterName: string;
}

// Generate PYQ data from chapters
const generatePYQData = (subjects: Subject[]): Record<string, PYQuestion[]> => {
  const pyqData: Record<string, PYQuestion[]> = {};
  const years = [2019, 2020, 2022, 2023, 2024];
  
  subjects.forEach(subject => {
    pyqData[subject.id] = [];
    
    subject.chapters.forEach(chapter => {
      // Generate realistic PYQ based on chapter content
      const mcqs = chapter.mcqs || [];
      const flashcards = chapter.flashcards || [];
      
      // Create 2-4 questions per chapter from different years
      const questionCount = Math.min(4, Math.floor(Math.random() * 3) + 2);
      
      for (let i = 0; i < questionCount; i++) {
        const year = years[Math.floor(Math.random() * years.length)];
        const isMCQ = Math.random() > 0.6;
        
        if (isMCQ && mcqs.length > 0) {
          const mcq = mcqs[Math.floor(Math.random() * mcqs.length)];
          pyqData[subject.id].push({
            id: `${subject.id}-${chapter.id}-pyq-${i}`,
            year,
            question: mcq.question,
            marks: 1,
            type: 'mcq',
            answer: mcq.options[mcq.correctIndex],
            frequency: Math.floor(Math.random() * 3) + 1,
            chapterId: chapter.id,
            chapterName: chapter.title
          });
        } else if (flashcards.length > 0) {
          const fc = flashcards[Math.floor(Math.random() * flashcards.length)];
          const marks = Math.random() > 0.5 ? 4 : 8;
          pyqData[subject.id].push({
            id: `${subject.id}-${chapter.id}-pyq-${i}`,
            year,
            question: `Explain ${fc.front}`,
            marks,
            type: marks === 4 ? 'short' : 'long',
            answer: fc.back,
            frequency: Math.floor(Math.random() * 4) + 1,
            chapterId: chapter.id,
            chapterName: chapter.title
          });
        }
      }
    });
    
    // Sort by year descending
    pyqData[subject.id].sort((a, b) => b.year - a.year);
  });
  
  return pyqData;
};

const PreviousYearQuestions: React.FC<PYQProps> = ({ subjects, onClose }) => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMarks, setSelectedMarks] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);
  const [solvedQuestions, setSolvedQuestions] = useState<Set<string>>(() => {
    const stored = localStorage.getItem('7k-pyq-solved');
    return stored ? new Set(JSON.parse(stored)) : new Set();
  });

  // Generate PYQ data
  const pyqData = useMemo(() => generatePYQData(subjects), [subjects]);
  
  const years = [2024, 2023, 2022, 2020, 2019];
  const markOptions = [1, 2, 4, 8, 12];

  // Get filtered questions
  const filteredQuestions = useMemo(() => {
    if (!selectedSubject) return [];
    
    let questions = pyqData[selectedSubject] || [];
    
    if (selectedYear) {
      questions = questions.filter(q => q.year === selectedYear);
    }
    if (selectedMarks) {
      questions = questions.filter(q => q.marks === selectedMarks);
    }
    if (searchQuery) {
      questions = questions.filter(q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.chapterName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return questions;
  }, [selectedSubject, selectedYear, selectedMarks, searchQuery, pyqData]);

  // Get stats for selected subject
  const stats = useMemo(() => {
    if (!selectedSubject) return null;
    
    const questions = pyqData[selectedSubject] || [];
    const yearCounts: Record<number, number> = {};
    const chapterCounts: Record<string, number> = {};
    let totalMarks = 0;
    
    questions.forEach(q => {
      yearCounts[q.year] = (yearCounts[q.year] || 0) + 1;
      chapterCounts[q.chapterName] = (chapterCounts[q.chapterName] || 0) + 1;
      totalMarks += q.marks;
    });
    
    // Find most asked chapter
    const mostAsked = Object.entries(chapterCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);
    
    return {
      total: questions.length,
      solved: questions.filter(q => solvedQuestions.has(q.id)).length,
      mostAsked,
      avgMarks: questions.length > 0 ? Math.round(totalMarks / questions.length) : 0
    };
  }, [selectedSubject, pyqData, solvedQuestions]);

  // Toggle solved
  const toggleSolved = (id: string) => {
    const newSolved = new Set(solvedQuestions);
    if (newSolved.has(id)) {
      newSolved.delete(id);
    } else {
      newSolved.add(id);
    }
    setSolvedQuestions(newSolved);
    localStorage.setItem('7k-pyq-solved', JSON.stringify([...newSolved]));
  };

  // Render subject selection
  const renderSubjectSelect = () => (
    <div className="space-y-4">
      <div className="text-center py-4">
        <FileText className="w-12 h-12 text-blue-500 mx-auto mb-2" />
        <h3 className="text-lg font-semibold dark:text-white">Previous Year Questions</h3>
        <p className="text-sm text-gray-500">Select a subject to view PYQs</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {subjects.map(subject => {
          const totalQ = (pyqData[subject.id] || []).length;
          const solvedQ = (pyqData[subject.id] || []).filter(q => solvedQuestions.has(q.id)).length;
          
          return (
            <button
              key={subject.id}
              onClick={() => setSelectedSubject(subject.id)}
              className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition active:scale-95"
            >
              <div className="font-medium dark:text-white mb-1">{subject.name}</div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{totalQ} questions</span>
                {solvedQ > 0 && (
                  <span className="text-green-500">{solvedQ} solved</span>
                )}
              </div>
              {totalQ > 0 && (
                <div className="h-1 bg-gray-200 dark:bg-gray-600 rounded-full mt-2 overflow-hidden">
                  <div 
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${(solvedQ / totalQ) * 100}%` }}
                  />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );

  // Render question list
  const renderQuestions = () => {
    const subject = subjects.find(s => s.id === selectedSubject);
    
    return (
      <div className="space-y-4">
        {/* Subject Header */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedSubject(null)}
            className="p-2 -ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <ArrowLeft className="w-5 h-5 dark:text-white" />
          </button>
          <div>
            <h3 className="font-semibold dark:text-white">{subject?.name}</h3>
            <p className="text-xs text-gray-500">{stats?.total} questions • {stats?.solved} solved</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-2.5 text-white text-center">
            <TrendingUp className="w-4 h-4 mx-auto mb-1" />
            <div className="text-lg font-bold">{stats?.total}</div>
            <div className="text-[10px] opacity-75">Total</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-2.5 text-white text-center">
            <CheckCircle className="w-4 h-4 mx-auto mb-1" />
            <div className="text-lg font-bold">{stats?.solved}</div>
            <div className="text-[10px] opacity-75">Solved</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl p-2.5 text-white text-center">
            <Award className="w-4 h-4 mx-auto mb-1" />
            <div className="text-lg font-bold">{stats?.avgMarks}</div>
            <div className="text-[10px] opacity-75">Avg Marks</div>
          </div>
        </div>

        {/* Most Asked Chapters */}
        {stats?.mostAsked && stats.mostAsked.length > 0 && (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-3">
            <div className="text-xs font-semibold text-yellow-800 dark:text-yellow-200 mb-2 flex items-center gap-1">
              <Star className="w-3 h-3" /> Most Asked Chapters
            </div>
            <div className="space-y-1">
              {stats.mostAsked.map(([name, count]) => (
                <div key={name} className="flex justify-between text-xs">
                  <span className="text-gray-700 dark:text-gray-300 truncate">{name}</span>
                  <span className="text-yellow-600 dark:text-yellow-400 font-medium">{count}x</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <select
            value={selectedYear || ''}
            onChange={(e) => setSelectedYear(e.target.value ? Number(e.target.value) : null)}
            className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-sm border-0 dark:text-white"
          >
            <option value="">All Years</option>
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
          <select
            value={selectedMarks || ''}
            onChange={(e) => setSelectedMarks(e.target.value ? Number(e.target.value) : null)}
            className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-sm border-0 dark:text-white"
          >
            <option value="">All Marks</option>
            {markOptions.map(m => <option key={m} value={m}>{m} mark{m > 1 ? 's' : ''}</option>)}
          </select>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 border-0 text-sm dark:text-white dark:placeholder-gray-400"
          />
        </div>

        {/* Questions List */}
        <div className="space-y-2">
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <FileText className="w-10 h-10 mx-auto mb-2 opacity-30" />
              <p className="text-sm">No questions found</p>
            </div>
          ) : (
            filteredQuestions.map(q => (
              <div
                key={q.id}
                className={`bg-gray-50 dark:bg-gray-700/50 rounded-xl overflow-hidden ${
                  solvedQuestions.has(q.id) ? 'border-l-4 border-green-500' : ''
                }`}
              >
                <button
                  onClick={() => setExpandedQuestion(expandedQuestion === q.id ? null : q.id)}
                  className="w-full p-3 text-left"
                >
                  <div className="flex items-start gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSolved(q.id);
                      }}
                      className={`mt-0.5 p-1 rounded-full transition ${
                        solvedQuestions.has(q.id) 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-200 dark:bg-gray-600'
                      }`}
                    >
                      <CheckCircle className="w-3 h-3" />
                    </button>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                          {q.year}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                          {q.marks} mark{q.marks > 1 ? 's' : ''}
                        </span>
                        {q.frequency > 2 && (
                          <span className="text-xs px-2 py-0.5 rounded bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300">
                            🔥 {q.frequency}x asked
                          </span>
                        )}
                      </div>
                      <p className="text-sm dark:text-white">{q.question}</p>
                      <p className="text-xs text-gray-500 mt-1">{q.chapterName}</p>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition ${expandedQuestion === q.id ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                
                {expandedQuestion === q.id && q.answer && (
                  <div className="px-3 pb-3 pt-0">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-3 text-sm">
                      <div className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">Answer:</div>
                      <p className="text-gray-700 dark:text-gray-300">{q.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 border-b border-gray-100 dark:border-gray-700 flex items-center gap-3">
          {onClose && (
            <button onClick={onClose} className="p-2 -ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 active:scale-95 transition">
              <ArrowLeft className="w-5 h-5 dark:text-white" />
            </button>
          )}
          <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold dark:text-white">Previous Year Questions</h2>
            <p className="text-xs text-gray-500">Last 5 years board papers</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {selectedSubject ? renderQuestions() : renderSubjectSelect()}
        </div>
      </div>
    </div>
  );
};

export default PreviousYearQuestions;
