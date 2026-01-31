import React, { useState } from 'react';
import { X, Clock, Calendar, BookOpen, AlertTriangle, Trophy, Target, Zap } from 'lucide-react';

interface ArtsExamCountdownProps {
  onClose: () => void;
}

const ArtsExamCountdown: React.FC<ArtsExamCountdownProps> = ({ onClose }) => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  // HSC Arts 2026 exam dates (Feb-March)
  const examSchedule = [
    { subject: 'English', date: '2026-02-21', day: 'Saturday', color: 'bg-blue-500', icon: '📖' },
    { subject: 'Hindi', date: '2026-02-24', day: 'Monday', color: 'bg-amber-500', icon: '🕉️' },
    { subject: 'Marathi', date: '2026-02-26', day: 'Wednesday', color: 'bg-orange-500', icon: '🚩' },
    { subject: 'History', date: '2026-03-03', day: 'Tuesday', color: 'bg-rose-500', icon: '📜' },
    { subject: 'Geography', date: '2026-03-05', day: 'Thursday', color: 'bg-emerald-500', icon: '🌍' },
    { subject: 'Economics', date: '2026-03-07', day: 'Saturday', color: 'bg-indigo-500', icon: '📊' },
    { subject: 'Political Science', date: '2026-03-10', day: 'Tuesday', color: 'bg-red-500', icon: '⚖️' },
    { subject: 'Sociology', date: '2026-03-12', day: 'Thursday', color: 'bg-purple-500', icon: '👥' },
    { subject: 'Psychology', date: '2026-03-14', day: 'Saturday', color: 'bg-pink-500', icon: '🧠' },
  ];

  const calculateDaysLeft = (dateStr: string) => {
    const examDate = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    examDate.setHours(0, 0, 0, 0);
    const diffTime = examDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getUrgencyColor = (days: number) => {
    if (days <= 7) return 'text-red-600 bg-red-100';
    if (days <= 14) return 'text-orange-600 bg-orange-100';
    if (days <= 30) return 'text-yellow-600 bg-yellow-100';
    return 'text-green-600 bg-green-100';
  };

  const getStudyTip = (days: number, subject: string) => {
    if (days <= 3) return `🔴 CRITICAL: Focus only on ${subject} PYQs and key concepts!`;
    if (days <= 7) return `🟠 URGENT: Complete revision + solve 2 previous papers daily`;
    if (days <= 14) return `🟡 IMPORTANT: Focus on weak chapters + practice writing answers`;
    if (days <= 30) return `🟢 ON TRACK: Balanced study with concept clarity focus`;
    return `✅ GOOD: Build strong foundation, make notes, practice regularly`;
  };

  const sortedExams = [...examSchedule].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const nextExam = sortedExams.find(exam => calculateDaysLeft(exam.date) >= 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Clock size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Arts Exam Countdown</h2>
                <p className="text-purple-100">HSC Maharashtra Board 2026</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition">
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Next Exam Alert */}
        {nextExam && (
          <div className={`mx-6 mt-4 p-4 rounded-xl border-2 ${getUrgencyColor(calculateDaysLeft(nextExam.date))} border-current`}>
            <div className="flex items-center gap-3">
              <AlertTriangle size={24} />
              <div>
                <p className="font-bold text-lg">Next Exam: {nextExam.subject}</p>
                <p className="text-sm">{getStudyTip(calculateDaysLeft(nextExam.date), nextExam.subject)}</p>
              </div>
              <div className="ml-auto text-3xl font-bold">
                {calculateDaysLeft(nextExam.date)} days
              </div>
            </div>
          </div>
        )}

        {/* Exam Schedule Grid */}
        <div className="p-6">
          <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
            <Calendar size={20} />
            Complete Exam Schedule
          </h3>
          
          <div className="grid gap-3">
            {sortedExams.map((exam, idx) => {
              const daysLeft = calculateDaysLeft(exam.date);
              const isPast = daysLeft < 0;
              
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedSubject(selectedSubject === exam.subject ? null : exam.subject)}
                  className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                    isPast 
                      ? 'bg-gray-100 border-gray-200 opacity-60' 
                      : selectedSubject === exam.subject
                        ? `${exam.color} text-white border-transparent shadow-lg scale-[1.02]`
                        : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{exam.icon}</span>
                      <div>
                        <h4 className={`font-bold text-lg ${selectedSubject === exam.subject && !isPast ? 'text-white' : 'text-gray-800'}`}>
                          {exam.subject}
                        </h4>
                        <p className={`text-sm ${selectedSubject === exam.subject && !isPast ? 'text-white/80' : 'text-gray-500'}`}>
                          {new Date(exam.date).toLocaleDateString('en-IN', { 
                            weekday: 'long', 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                          })}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      {isPast ? (
                        <span className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-sm font-medium">
                          ✅ Completed
                        </span>
                      ) : (
                        <div className={`px-4 py-2 rounded-xl ${
                          selectedSubject === exam.subject 
                            ? 'bg-white/20 text-white' 
                            : getUrgencyColor(daysLeft)
                        }`}>
                          <span className="text-2xl font-bold">{daysLeft}</span>
                          <span className="text-xs ml-1">days</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Expanded Study Tips */}
                  {selectedSubject === exam.subject && !isPast && (
                    <div className="mt-4 pt-4 border-t border-white/30">
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="bg-white/20 rounded-lg p-3">
                          <Target size={20} className="mx-auto mb-1" />
                          <p className="text-xs font-medium">Target</p>
                          <p className="text-sm">85%+</p>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3">
                          <BookOpen size={20} className="mx-auto mb-1" />
                          <p className="text-xs font-medium">PYQs</p>
                          <p className="text-sm">5 Papers</p>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3">
                          <Zap size={20} className="mx-auto mb-1" />
                          <p className="text-xs font-medium">Daily</p>
                          <p className="text-sm">{Math.max(2, Math.floor(80 / daysLeft))} hrs</p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-white/90 text-center">
                        {getStudyTip(daysLeft, exam.subject)}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="p-6 bg-gray-50 border-t">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <Trophy className="mx-auto text-yellow-500 mb-2" size={24} />
              <p className="text-2xl font-bold text-gray-800">{sortedExams.length}</p>
              <p className="text-xs text-gray-500">Total Exams</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <Clock className="mx-auto text-blue-500 mb-2" size={24} />
              <p className="text-2xl font-bold text-gray-800">
                {sortedExams.filter(e => calculateDaysLeft(e.date) >= 0).length}
              </p>
              <p className="text-xs text-gray-500">Remaining</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <AlertTriangle className="mx-auto text-red-500 mb-2" size={24} />
              <p className="text-2xl font-bold text-gray-800">
                {sortedExams.filter(e => calculateDaysLeft(e.date) >= 0 && calculateDaysLeft(e.date) <= 7).length}
              </p>
              <p className="text-xs text-gray-500">This Week</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <Calendar className="mx-auto text-green-500 mb-2" size={24} />
              <p className="text-2xl font-bold text-gray-800">
                {nextExam ? calculateDaysLeft(nextExam.date) : 0}
              </p>
              <p className="text-xs text-gray-500">Days to Next</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtsExamCountdown;
