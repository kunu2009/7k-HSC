import React, { useState, useEffect } from 'react';
import { Award, ChevronDown, ChevronUp, Plus, Save, Trash2, X } from 'lucide-react';

interface SubjectMark {
  subjectId: string;
  subjectName: string;
  marks: number | null;
  maxMarks: number;
}

interface PreviousMarksData {
  examName: string;
  examDate: string;
  subjects: SubjectMark[];
  totalMarks: number;
  totalMaxMarks: number;
  percentage: number;
}

const STORAGE_KEY = '7k-hsc-previous-marks';

// Default subjects for Commerce stream (most common)
const DEFAULT_SUBJECTS = [
  { id: 'eco', name: 'Economics' },
  { id: 'ocm', name: 'OCM' },
  { id: 'sp', name: 'Secretarial Practice' },
  { id: 'bk', name: 'Book Keeping' },
  { id: 'eng', name: 'English' },
];

// Hook to manage previous marks
export const usePreviousMarks = () => {
  const [marksData, setMarksData] = useState<PreviousMarksData[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setMarksData(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse previous marks');
      }
    }
  }, []);

  const saveMarks = (data: PreviousMarksData) => {
    const updated = [...marksData, data];
    setMarksData(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const deleteMarks = (index: number) => {
    const updated = marksData.filter((_, i) => i !== index);
    setMarksData(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const getLatestMarks = () => marksData[marksData.length - 1] || null;
  const getAllMarks = () => marksData;

  return { saveMarks, deleteMarks, getLatestMarks, getAllMarks, marksData };
};

const PreviousMarksInput: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [examName, setExamName] = useState('');
  const [examDate, setExamDate] = useState('');
  const [subjectMarks, setSubjectMarks] = useState<SubjectMark[]>(
    DEFAULT_SUBJECTS.map(s => ({ subjectId: s.id, subjectName: s.name, marks: null, maxMarks: 100 }))
  );

  const { saveMarks, deleteMarks, marksData } = usePreviousMarks();

  const updateMark = (subjectId: string, marks: number | null) => {
    setSubjectMarks(prev => 
      prev.map(s => s.subjectId === subjectId ? { ...s, marks } : s)
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
    const data: PreviousMarksData = {
      examName: examName || 'Previous Exam',
      examDate: examDate || new Date().toISOString().split('T')[0],
      subjects: subjectMarks.filter(s => s.marks !== null),
      totalMarks: total,
      totalMaxMarks: maxTotal,
      percentage
    };
    saveMarks(data);
    setShowAddForm(false);
    setExamName('');
    setExamDate('');
    setSubjectMarks(DEFAULT_SUBJECTS.map(s => ({ subjectId: s.id, subjectName: s.name, marks: null, maxMarks: 100 })));
  };

  const { total, maxTotal, percentage } = calculateTotal();
  const latestExam = marksData[marksData.length - 1];

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-2xl p-4 mb-6 border border-amber-200 dark:border-amber-800">
      {/* Header */}
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl text-white shadow-md">
            <Award size={20} />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 dark:text-white">Previous Marks</h3>
            {latestExam ? (
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Latest: {latestExam.percentage}% in {latestExam.examName}
              </p>
            ) : (
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Add your previous exam marks
              </p>
            )}
          </div>
        </div>
        <button className="p-2 hover:bg-amber-100 dark:hover:bg-amber-900/30 rounded-lg transition">
          {expanded ? <ChevronUp size={20} className="text-amber-600" /> : <ChevronDown size={20} className="text-amber-600" />}
        </button>
      </div>

      {/* Expanded Content */}
      {expanded && (
        <div className="mt-4 space-y-4">
          {/* Previous Exams List */}
          {marksData.length > 0 && (
            <div className="space-y-2">
              {marksData.map((exam, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-slate-700 dark:text-slate-200">{exam.examName}</span>
                      <span className="text-xs text-slate-400 ml-2">{exam.examDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`font-black text-lg ${
                        exam.percentage >= 60 ? 'text-emerald-600' : 
                        exam.percentage >= 40 ? 'text-amber-600' : 'text-red-600'
                      }`}>
                        {exam.percentage}%
                      </span>
                      <button 
                        onClick={(e) => { e.stopPropagation(); deleteMarks(index); }}
                        className="p-1 text-slate-400 hover:text-red-500 transition"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {exam.subjects.map(s => (
                      <span key={s.subjectId} className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full text-slate-600 dark:text-slate-300">
                        {s.subjectName}: {s.marks}
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
              <Plus size={18} /> Add Previous Exam Marks
            </button>
          )}

          {/* Add Form */}
          {showAddForm && (
            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-slate-700 dark:text-slate-200">Add Exam Marks</h4>
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
                    className="w-full mt-1 p-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-500 dark:text-slate-400">Date</label>
                  <input
                    type="date"
                    value={examDate}
                    onChange={(e) => setExamDate(e.target.value)}
                    className="w-full mt-1 p-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white text-sm"
                  />
                </div>
              </div>

              {/* Subject Marks */}
              <div className="space-y-2 mb-4">
                <label className="text-xs font-medium text-slate-500 dark:text-slate-400">Marks (out of 100)</label>
                {subjectMarks.map(subject => (
                  <div key={subject.subjectId} className="flex items-center gap-2">
                    <span className="flex-1 text-sm text-slate-600 dark:text-slate-300">{subject.subjectName}</span>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={subject.marks ?? ''}
                      onChange={(e) => updateMark(subject.subjectId, e.target.value ? parseInt(e.target.value) : null)}
                      placeholder="--"
                      className="w-16 p-2 text-center bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-800 dark:text-white font-semibold text-sm"
                    />
                  </div>
                ))}
              </div>

              {/* Live Total */}
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg mb-4 flex justify-between">
                <span className="text-slate-600 dark:text-slate-300">Total: <strong>{total}/{maxTotal}</strong></span>
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">{percentage}%</span>
              </div>

              {/* Save Button */}
              <button
                onClick={handleSubmit}
                disabled={subjectMarks.every(s => s.marks === null)}
                className="w-full p-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save size={16} /> Save Marks
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PreviousMarksInput;
