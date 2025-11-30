import React, { useState, useEffect } from 'react';
import { Award, X, ChevronRight, SkipForward, Save, Edit2, Trash2 } from 'lucide-react';

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

interface PreviousMarksInputProps {
  subjects: { id: string; name: string }[];
  onComplete: () => void;
  onSkip: () => void;
}

const STORAGE_KEY = '7k-hsc-previous-marks';

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

const PreviousMarksInput: React.FC<PreviousMarksInputProps> = ({ subjects, onComplete, onSkip }) => {
  const [step, setStep] = useState<'intro' | 'input' | 'summary'>('intro');
  const [examName, setExamName] = useState('');
  const [examDate, setExamDate] = useState('');
  const [subjectMarks, setSubjectMarks] = useState<SubjectMark[]>(
    subjects.map(s => ({ subjectId: s.id, subjectName: s.name, marks: null, maxMarks: 100 }))
  );

  const { saveMarks } = usePreviousMarks();

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
      subjects: subjectMarks,
      totalMarks: total,
      totalMaxMarks: maxTotal,
      percentage
    };
    saveMarks(data);
    setStep('summary');
  };

  const { total, maxTotal, percentage } = calculateTotal();

  // Intro Screen
  if (step === 'intro') {
    return (
      <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 shadow-2xl">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Award size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-black text-slate-800 dark:text-white mb-2">Add Previous Marks</h2>
            <p className="text-slate-500 dark:text-slate-400">
              Help us understand where you stand. Add your previous exam marks to get personalized insights.
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => setStep('input')}
              className="w-full p-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition"
            >
              Add Marks <ChevronRight size={20} />
            </button>
            <button
              onClick={onSkip}
              className="w-full p-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            >
              <SkipForward size={18} /> Skip for Now
            </button>
          </div>

          <p className="text-xs text-center text-slate-400 mt-4">
            You can always add this later from Settings
          </p>
        </div>
      </div>
    );
  }

  // Input Screen
  if (step === 'input') {
    return (
      <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 shadow-2xl my-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black text-slate-800 dark:text-white">Enter Marks</h2>
            <button 
              onClick={onSkip}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400"
            >
              <X size={20} />
            </button>
          </div>

          {/* Exam Info */}
          <div className="space-y-3 mb-6">
            <div>
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Exam Name</label>
              <input
                type="text"
                value={examName}
                onChange={(e) => setExamName(e.target.value)}
                placeholder="e.g., Unit Test 1, Mid-Term"
                className="w-full mt-1 p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white placeholder:text-slate-400"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Exam Date</label>
              <input
                type="date"
                value={examDate}
                onChange={(e) => setExamDate(e.target.value)}
                className="w-full mt-1 p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white"
              />
            </div>
          </div>

          {/* Subject Marks */}
          <div className="space-y-3 mb-6">
            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Subject Marks (out of 100)</label>
            {subjectMarks.map(subject => (
              <div key={subject.subjectId} className="flex items-center gap-3">
                <span className="flex-1 text-sm font-medium text-slate-700 dark:text-slate-300">{subject.subjectName}</span>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={subject.marks ?? ''}
                  onChange={(e) => updateMark(subject.subjectId, e.target.value ? parseInt(e.target.value) : null)}
                  placeholder="--"
                  className="w-20 p-2 text-center bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-white font-bold"
                />
              </div>
            ))}
          </div>

          {/* Live Total */}
          <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl mb-6">
            <div className="flex justify-between items-center">
              <span className="text-slate-600 dark:text-slate-400 font-medium">Total</span>
              <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{total}/{maxTotal}</span>
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-slate-600 dark:text-slate-400 font-medium">Percentage</span>
              <span className="text-lg font-bold text-purple-600 dark:text-purple-400">{percentage}%</span>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button
              onClick={handleSubmit}
              disabled={subjectMarks.every(s => s.marks === null)}
              className="w-full p-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save size={18} /> Save Marks
            </button>
            <button
              onClick={onSkip}
              className="w-full p-3 text-slate-500 dark:text-slate-400 font-medium text-sm"
            >
              Skip for Now
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Summary Screen
  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 shadow-2xl text-center">
        <div className="text-5xl mb-4">🎯</div>
        <h2 className="text-2xl font-black text-slate-800 dark:text-white mb-2">Marks Saved!</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-6">
          Your {examName || 'exam'} marks have been recorded. We'll help you improve from here!
        </p>

        <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white mb-6">
          <div className="text-4xl font-black">{percentage}%</div>
          <div className="text-indigo-100 font-medium">{total}/{maxTotal} marks</div>
        </div>

        <button
          onClick={onComplete}
          className="w-full p-4 bg-slate-800 dark:bg-slate-700 text-white font-bold rounded-xl hover:bg-slate-700 dark:hover:bg-slate-600 transition"
        >
          Continue to App
        </button>
      </div>
    </div>
  );
};

// Component to display saved marks
export const PreviousMarksDisplay: React.FC = () => {
  const { marksData, deleteMarks } = usePreviousMarks();

  if (marksData.length === 0) {
    return (
      <div className="text-center py-8 text-slate-400">
        <Award size={48} className="mx-auto mb-2 opacity-30" />
        <p>No previous marks added yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {marksData.map((exam, index) => (
        <div key={index} className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="font-bold text-slate-800 dark:text-white">{exam.examName}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{exam.examDate}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{exam.percentage}%</span>
              <button 
                onClick={() => deleteMarks(index)}
                className="p-2 text-slate-400 hover:text-red-500 transition"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {exam.subjects.filter(s => s.marks !== null).map(subject => (
              <div key={subject.subjectId} className="flex justify-between text-sm p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <span className="text-slate-600 dark:text-slate-400">{subject.subjectName}</span>
                <span className="font-bold text-slate-800 dark:text-white">{subject.marks}/{subject.maxMarks}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PreviousMarksInput;
