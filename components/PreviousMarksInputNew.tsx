import React, { useState, useEffect } from 'react';
import { Award, ChevronDown, ChevronUp, Plus, Save, Trash2, X, TrendingUp, Target } from 'lucide-react';
import { Stream } from '../types';
import { db, STREAM_SUBJECTS, ExamMarks, SubjectMark } from '../services/localDb';

interface PreviousMarksInputProps {
  stream: Stream;
}

const PreviousMarksInput: React.FC<PreviousMarksInputProps> = ({ stream }) => {
  const [expanded, setExpanded] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [examName, setExamName] = useState('');
  const [examDate, setExamDate] = useState('');
  const [marksData, setMarksData] = useState<ExamMarks[]>([]);
  
  // Get stream-specific subjects
  const streamSubjects = STREAM_SUBJECTS[stream];
  
  const [subjectMarks, setSubjectMarks] = useState<SubjectMark[]>(
    streamSubjects.map(s => ({ 
      subjectId: s.id, 
      subjectName: s.name, 
      marks: null, 
      maxMarks: s.maxMarks 
    }))
  );

  // Load marks data on mount and when stream changes
  useEffect(() => {
    setMarksData(db.getMarksForStream(stream));
  }, [stream]);

  // Reset form when stream changes
  useEffect(() => {
    setSubjectMarks(
      streamSubjects.map(s => ({ 
        subjectId: s.id, 
        subjectName: s.name, 
        marks: null, 
        maxMarks: s.maxMarks 
      }))
    );
  }, [stream]);

  const updateMark = (subjectId: string, marks: number | null) => {
    setSubjectMarks(prev => 
      prev.map(s => s.subjectId === subjectId ? { ...s, marks } : s)
    );
  };

  const updateMaxMark = (subjectId: string, maxMarks: number) => {
    setSubjectMarks(prev => 
      prev.map(s => s.subjectId === subjectId ? { ...s, maxMarks: maxMarks || 100 } : s)
    );
  };

  const calculateTotal = () => {
    const filled = subjectMarks.filter(s => s.marks !== null);
    const total = filled.reduce((acc, s) => acc + (s.marks || 0), 0);
    const maxTotal = filled.reduce((acc, s) => acc + s.maxMarks, 0);
    const percentage = maxTotal > 0 ? Math.round((total / maxTotal) * 100) : 0;
    return { total, maxTotal, percentage };
  };

  const handleSubmit = () => {
    const { total, maxTotal, percentage } = calculateTotal();
    const newMarks = db.saveExamMarks({
      examName: examName || 'Previous Exam',
      examDate: examDate || new Date().toISOString().split('T')[0],
      subjects: subjectMarks.filter(s => s.marks !== null),
      totalMarks: total,
      totalMaxMarks: maxTotal,
      percentage,
      stream
    });
    
    setMarksData([...marksData, newMarks]);
    setShowAddForm(false);
    setExamName('');
    setExamDate('');
    setSubjectMarks(
      streamSubjects.map(s => ({ 
        subjectId: s.id, 
        subjectName: s.name, 
        marks: null, 
        maxMarks: s.maxMarks 
      }))
    );
  };

  const handleDelete = (id: string) => {
    db.deleteExamMarks(id);
    setMarksData(marksData.filter(m => m.id !== id));
  };

  const { total, maxTotal, percentage } = calculateTotal();
  const latestExam = marksData[marksData.length - 1];

  // Calculate average percentage across all exams
  const avgPercentage = marksData.length > 0 
    ? Math.round(marksData.reduce((acc, m) => acc + m.percentage, 0) / marksData.length)
    : 0;

  // Calculate trend (comparing last 2 exams)
  const trend = marksData.length >= 2 
    ? marksData[marksData.length - 1].percentage - marksData[marksData.length - 2].percentage
    : 0;

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-2xl p-4 border border-amber-200 dark:border-amber-800">
      {/* Header */}
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl text-white shadow-lg">
            <Award size={22} />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 dark:text-white">Previous Marks</h3>
            {latestExam ? (
              <div className="flex items-center gap-2">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Latest: <span className="font-semibold text-amber-600">{latestExam.percentage}%</span>
                </p>
                {trend !== 0 && (
                  <span className={`text-xs font-semibold ${trend > 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                    {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
                  </span>
                )}
              </div>
            ) : (
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Track your {stream} exam marks
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {avgPercentage > 0 && (
            <div className="hidden sm:flex items-center gap-1 px-2 py-1 bg-white dark:bg-slate-800 rounded-lg">
              <Target size={14} className="text-amber-500" />
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Avg: {avgPercentage}%</span>
            </div>
          )}
          <button className="p-2 hover:bg-amber-100 dark:hover:bg-amber-900/30 rounded-lg transition">
            {expanded ? <ChevronUp size={20} className="text-amber-600" /> : <ChevronDown size={20} className="text-amber-600" />}
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      {expanded && (
        <div className="mt-4 space-y-4">
          {/* Stats Cards */}
          {marksData.length > 0 && (
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white dark:bg-slate-800 p-3 rounded-xl text-center">
                <p className="text-xs text-slate-500 dark:text-slate-400">Exams</p>
                <p className="text-xl font-black text-slate-800 dark:text-white">{marksData.length}</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-3 rounded-xl text-center">
                <p className="text-xs text-slate-500 dark:text-slate-400">Best</p>
                <p className="text-xl font-black text-emerald-600">{Math.max(...marksData.map(m => m.percentage))}%</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-3 rounded-xl text-center">
                <p className="text-xs text-slate-500 dark:text-slate-400">Trend</p>
                <p className={`text-xl font-black flex items-center justify-center gap-1 ${trend >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                  <TrendingUp size={16} className={trend < 0 ? 'rotate-180' : ''} />
                  {Math.abs(trend)}%
                </p>
              </div>
            </div>
          )}

          {/* Previous Exams List */}
          {marksData.length > 0 && (
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {marksData.map((exam) => (
                <div key={exam.id} className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-slate-700 dark:text-slate-200">{exam.examName}</span>
                      <span className="text-xs text-slate-400 ml-2">{exam.examDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`font-black text-lg ${
                        exam.percentage >= 75 ? 'text-emerald-600' : 
                        exam.percentage >= 60 ? 'text-amber-600' : 
                        exam.percentage >= 40 ? 'text-orange-600' : 'text-red-600'
                      }`}>
                        {exam.percentage}%
                      </span>
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleDelete(exam.id); }}
                        className="p-1 text-slate-400 hover:text-red-500 transition"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {exam.subjects.map(s => (
                      <span key={s.subjectId} className={`text-xs px-2 py-1 rounded-full ${
                        (s.marks || 0) / s.maxMarks >= 0.6 
                          ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                      }`}>
                        {s.subjectName}: {s.marks}/{s.maxMarks}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Add New Button */}
          {!showAddForm && (
            <button
              onClick={() => setShowAddForm(true)}
              className="w-full p-3 bg-white dark:bg-slate-800 border-2 border-dashed border-amber-300 dark:border-amber-700 rounded-xl text-amber-600 dark:text-amber-400 font-semibold flex items-center justify-center gap-2 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition"
            >
              <Plus size={18} /> Add {stream} Exam Marks
            </button>
          )}

          {/* Add Form */}
          {showAddForm && (
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-slate-700 dark:text-slate-200">Add {stream} Exam Marks</h4>
                <button 
                  onClick={() => setShowAddForm(false)}
                  className="p-1 text-slate-400 hover:text-slate-600"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Exam Info */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                  <label className="text-xs font-medium text-slate-500 dark:text-slate-400">Exam Name</label>
                  <input
                    type="text"
                    value={examName}
                    onChange={(e) => setExamName(e.target.value)}
                    placeholder="Unit Test 1"
                    className="w-full mt-1 p-2.5 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white text-sm focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-500 dark:text-slate-400">Date</label>
                  <input
                    type="date"
                    value={examDate}
                    onChange={(e) => setExamDate(e.target.value)}
                    className="w-full mt-1 p-2.5 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white text-sm focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition"
                  />
                </div>
              </div>

              {/* Subject Marks */}
              <div className="space-y-2 mb-4">
                <label className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {stream} Subjects - Enter marks obtained
                </label>
                {subjectMarks.map(subject => (
                  <div key={subject.subjectId} className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <span className="flex-1 text-sm font-medium text-slate-600 dark:text-slate-300">{subject.subjectName}</span>
                    <input
                      type="number"
                      min="0"
                      max={subject.maxMarks}
                      value={subject.marks ?? ''}
                      onChange={(e) => updateMark(subject.subjectId, e.target.value ? parseInt(e.target.value) : null)}
                      placeholder="--"
                      className="w-16 p-2 text-center bg-white dark:bg-slate-600 border border-slate-200 dark:border-slate-500 rounded-lg text-slate-800 dark:text-white font-bold text-sm focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none"
                    />
                    <span className="text-slate-400 text-sm">/</span>
                    <input
                      type="number"
                      min="1"
                      max="200"
                      value={subject.maxMarks}
                      onChange={(e) => updateMaxMark(subject.subjectId, e.target.value ? parseInt(e.target.value) : 100)}
                      className="w-16 p-2 text-center bg-white dark:bg-slate-600 border border-slate-200 dark:border-slate-500 rounded-lg text-slate-800 dark:text-white font-bold text-sm focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none"
                    />
                  </div>
                ))}
              </div>

              {/* Live Total */}
              <div className="p-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl mb-4 flex justify-between items-center">
                <span className="text-slate-600 dark:text-slate-300">
                  Total: <strong className="text-slate-800 dark:text-white">{total}/{maxTotal}</strong>
                </span>
                <span className={`text-xl font-black ${
                  percentage >= 75 ? 'text-emerald-600' : 
                  percentage >= 60 ? 'text-amber-600' : 
                  percentage >= 40 ? 'text-orange-600' : 'text-red-600'
                }`}>
                  {percentage}%
                </span>
              </div>

              {/* Save Button */}
              <button
                onClick={handleSubmit}
                disabled={subjectMarks.every(s => s.marks === null)}
                className="w-full p-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/25"
              >
                <Save size={18} /> Save Marks
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PreviousMarksInput;
