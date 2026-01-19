import React, { useState, useEffect } from 'react';
import { X, AlertTriangle, TrendingDown, RotateCcw, Target, CheckCircle2, XCircle } from 'lucide-react';

interface MistakeMeterProps {
  onClose: () => void;
}

interface TopicError {
  topic: string;
  subject: string;
  errorCount: number;
  totalAttempts: number;
  lastError: string;
}

interface Question {
  id: string;
  topic: string;
  subject: string;
  question: string;
  options: string[];
  correct: number;
}

const PRACTICE_QUESTIONS: Question[] = [
  { id: 'q1', topic: 'Law of Demand', subject: 'Economics', question: 'What happens to demand when price increases (ceteris paribus)?', options: ['Demand increases', 'Demand decreases', 'Demand stays same', 'Supply increases'], correct: 1 },
  { id: 'q2', topic: 'Elasticity', subject: 'Economics', question: 'When Ed > 1, demand is:', options: ['Inelastic', 'Elastic', 'Unitary', 'Perfectly Inelastic'], correct: 1 },
  { id: 'q3', topic: 'French Revolution', subject: 'History', question: 'In which year did the French Revolution begin?', options: ['1776', '1789', '1793', '1804'], correct: 1 },
  { id: 'q4', topic: 'Renaissance', subject: 'History', question: 'Where did Renaissance originate?', options: ['France', 'England', 'Italy', 'Spain'], correct: 2 },
  { id: 'q5', topic: 'Federalism', subject: 'Political Science', question: 'Federalism involves power division between:', options: ['Two parties', 'Central and State', 'Three branches', 'President and PM'], correct: 1 },
  { id: 'q6', topic: 'Constitution', subject: 'Political Science', question: 'Indian Constitution came into force in:', options: ['1947', '1949', '1950', '1951'], correct: 2 },
  { id: 'q7', topic: 'Figures of Speech', subject: 'English', question: 'A comparison using "like" or "as" is:', options: ['Metaphor', 'Simile', 'Personification', 'Alliteration'], correct: 1 },
  { id: 'q8', topic: 'Grammar', subject: 'English', question: 'Which is a pronoun?', options: ['Run', 'Beautiful', 'They', 'Happiness'], correct: 2 },
  { id: 'q9', topic: 'Socialization', subject: 'Sociology', question: 'Primary socialization occurs in:', options: ['School', 'Family', 'Workplace', 'Media'], correct: 1 },
  { id: 'q10', topic: 'Social Groups', subject: 'Sociology', question: 'Family is an example of:', options: ['Secondary Group', 'Primary Group', 'Reference Group', 'Formal Group'], correct: 1 },
];

const MistakeMeter: React.FC<MistakeMeterProps> = ({ onClose }) => {
  const [errors, setErrors] = useState<TopicError[]>([]);
  const [practiceMode, setPracticeMode] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    loadErrorData();
  }, []);

  const loadErrorData = () => {
    const saved = localStorage.getItem('mistakeMeter');
    if (saved) {
      setErrors(JSON.parse(saved));
    } else {
      // Initialize with sample data
      const sampleErrors: TopicError[] = [
        { topic: 'Elasticity', subject: 'Economics', errorCount: 5, totalAttempts: 8, lastError: 'Confused elastic vs inelastic' },
        { topic: 'French Revolution', subject: 'History', errorCount: 3, totalAttempts: 7, lastError: 'Mixed up dates' },
        { topic: 'Figures of Speech', subject: 'English', errorCount: 4, totalAttempts: 6, lastError: 'Simile vs Metaphor confusion' },
        { topic: 'Federalism', subject: 'Political Science', errorCount: 2, totalAttempts: 5, lastError: 'Federal vs Unitary' },
        { topic: 'Socialization', subject: 'Sociology', errorCount: 1, totalAttempts: 4, lastError: 'Primary vs Secondary' },
      ];
      setErrors(sampleErrors);
      localStorage.setItem('mistakeMeter', JSON.stringify(sampleErrors));
    }
  };

  const saveErrorData = (newErrors: TopicError[]) => {
    setErrors(newErrors);
    localStorage.setItem('mistakeMeter', JSON.stringify(newErrors));
  };

  const startPractice = () => {
    const randomQ = PRACTICE_QUESTIONS[Math.floor(Math.random() * PRACTICE_QUESTIONS.length)];
    setCurrentQuestion(randomQ);
    setSelectedAnswer(null);
    setShowResult(false);
    setPracticeMode(true);
  };

  const handleAnswer = (answerIdx: number) => {
    if (showResult || selectedAnswer !== null) return;
    setSelectedAnswer(answerIdx);
    setShowResult(true);

    const isCorrect = answerIdx === currentQuestion!.correct;
    
    // Update error tracking
    const updatedErrors = [...errors];
    const existingIdx = updatedErrors.findIndex(e => e.topic === currentQuestion!.topic);
    
    if (existingIdx !== -1) {
      updatedErrors[existingIdx].totalAttempts += 1;
      if (!isCorrect) {
        updatedErrors[existingIdx].errorCount += 1;
        updatedErrors[existingIdx].lastError = currentQuestion!.question;
      }
    } else {
      updatedErrors.push({
        topic: currentQuestion!.topic,
        subject: currentQuestion!.subject,
        errorCount: isCorrect ? 0 : 1,
        totalAttempts: 1,
        lastError: isCorrect ? '' : currentQuestion!.question
      });
    }
    
    saveErrorData(updatedErrors);
  };

  const getErrorRate = (error: TopicError) => {
    return Math.round((error.errorCount / error.totalAttempts) * 100);
  };

  const getColorClass = (errorRate: number) => {
    if (errorRate >= 60) return 'from-red-500/20 to-rose-500/20 border-red-500';
    if (errorRate >= 40) return 'from-orange-500/20 to-amber-500/20 border-orange-500';
    if (errorRate >= 20) return 'from-yellow-500/20 to-amber-500/20 border-yellow-500';
    return 'from-green-500/20 to-emerald-500/20 border-green-500';
  };

  const getColorText = (errorRate: number) => {
    if (errorRate >= 60) return 'text-red-400';
    if (errorRate >= 40) return 'text-orange-400';
    if (errorRate >= 20) return 'text-yellow-400';
    return 'text-green-400';
  };

  const resetData = () => {
    setErrors([]);
    localStorage.removeItem('mistakeMeter');
    setPracticeMode(false);
  };

  const sortedErrors = [...errors].sort((a, b) => getErrorRate(b) - getErrorRate(a));

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-slate-900 to-red-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-red-500/30">
        <div className="sticky top-0 bg-gradient-to-r from-red-600 to-rose-600 p-6 flex justify-between items-center rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
              <AlertTriangle className="w-7 h-7" />
              Mistake Meter
            </h2>
            <p className="text-red-100 text-sm">Track your errors by topic with color-coded analytics</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition-all"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {!practiceMode ? (
            <>
              {/* Summary Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <AlertTriangle className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white">{errors.reduce((sum, e) => sum + e.errorCount, 0)}</p>
                  <p className="text-sm text-slate-300">Total Errors</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <Target className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white">{errors.length}</p>
                  <p className="text-sm text-slate-300">Topics Tracked</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <TrendingDown className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white">
                    {sortedErrors.length > 0 ? getErrorRate(sortedErrors[0]) : 0}%
                  </p>
                  <p className="text-sm text-slate-300">Highest Error Rate</p>
                </div>
              </div>

              {/* Error List */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  📊 Error Breakdown
                  <span className="text-sm font-normal text-slate-400">(sorted by error rate)</span>
                </h3>
                
                {sortedErrors.length === 0 ? (
                  <div className="bg-green-500/20 border-2 border-green-500 rounded-xl p-8 text-center">
                    <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-3" />
                    <h4 className="text-2xl font-bold text-green-300 mb-2">Perfect Record!</h4>
                    <p className="text-white">No errors tracked yet. Start practicing to monitor your progress!</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {sortedErrors.map((error, idx) => {
                      const errorRate = getErrorRate(error);
                      return (
                        <div
                          key={idx}
                          className={`bg-gradient-to-r ${getColorClass(errorRate)} border-2 rounded-xl p-4`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="text-white font-bold text-lg">{error.topic}</h4>
                              <p className="text-sm text-slate-300">{error.subject}</p>
                            </div>
                            <div className="text-right">
                              <p className={`text-4xl font-bold ${getColorText(errorRate)}`}>
                                {errorRate}%
                              </p>
                              <p className="text-xs text-slate-300">
                                {error.errorCount}/{error.totalAttempts} errors
                              </p>
                            </div>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="bg-slate-800 rounded-full h-3 mb-2 overflow-hidden">
                            <div
                              className={`h-full transition-all ${
                                errorRate >= 60 ? 'bg-red-500' :
                                errorRate >= 40 ? 'bg-orange-500' :
                                errorRate >= 20 ? 'bg-yellow-500' :
                                'bg-green-500'
                              }`}
                              style={{ width: `${errorRate}%` }}
                            />
                          </div>
                          
                          {error.lastError && (
                            <p className="text-sm text-slate-300 italic">
                              Last error: {error.lastError}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={startPractice}
                  className="flex-1 bg-gradient-to-r from-red-500 to-rose-600 text-white py-4 rounded-lg font-bold text-lg hover:from-red-600 hover:to-rose-700 transition-all"
                >
                  Practice & Track Errors
                </button>
                <button
                  onClick={resetData}
                  className="px-6 bg-slate-600 text-white py-4 rounded-lg font-bold hover:bg-slate-700 transition-all flex items-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  Reset
                </button>
              </div>
            </>
          ) : (
            // Practice Mode
            <div>
              <div className="mb-4">
                <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm font-medium">
                  {currentQuestion?.subject} - {currentQuestion?.topic}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">{currentQuestion?.question}</h3>

              <div className="space-y-3 mb-6">
                {currentQuestion?.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    disabled={showResult}
                    className={`w-full text-left p-4 rounded-xl font-medium transition-all ${
                      showResult
                        ? idx === currentQuestion.correct
                          ? 'bg-green-500 text-white border-2 border-green-600'
                          : idx === selectedAnswer
                          ? 'bg-red-500 text-white border-2 border-red-600'
                          : 'bg-slate-700 text-slate-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {showResult && idx === currentQuestion.correct && <CheckCircle2 className="w-6 h-6" />}
                      {showResult && idx === selectedAnswer && idx !== currentQuestion.correct && <XCircle className="w-6 h-6" />}
                    </div>
                  </button>
                ))}
              </div>

              {showResult && (
                <div className="flex gap-3">
                  <button
                    onClick={startPractice}
                    className="flex-1 bg-gradient-to-r from-red-500 to-rose-600 text-white py-4 rounded-lg font-bold text-lg hover:from-red-600 hover:to-rose-700 transition-all"
                  >
                    Next Question
                  </button>
                  <button
                    onClick={() => setPracticeMode(false)}
                    className="px-6 bg-slate-600 text-white py-4 rounded-lg font-bold hover:bg-slate-700 transition-all"
                  >
                    View Stats
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MistakeMeter;