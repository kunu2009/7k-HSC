import React, { useState, useEffect } from 'react';
import { Target, TrendingUp, Flame, Award, ChevronRight, X, Sparkles, Calendar, BookOpen, Brain, CheckCircle } from 'lucide-react';

interface GoalSettingProps {
  onClose: () => void;
}

interface StudyGoal {
  targetPercentage: number;
  dailyHours: number;
  startDate: string;
  endDate: string;
  examDate: string;
  subjectGoals: Record<string, number>;
}

const GoalSetting: React.FC<GoalSettingProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState<StudyGoal>({
    targetPercentage: 85,
    dailyHours: 4,
    startDate: new Date().toISOString().split('T')[0],
    endDate: '2026-02-21',
    examDate: '2026-02-21',
    subjectGoals: {},
  });
  const [currentPlan, setCurrentPlan] = useState<StudyGoal | null>(null);

  // Load existing goal
  useEffect(() => {
    const saved = localStorage.getItem('7k-study-goal');
    if (saved) {
      setCurrentPlan(JSON.parse(saved));
    }
  }, []);

  const saveGoal = () => {
    localStorage.setItem('7k-study-goal', JSON.stringify(goal));
    setCurrentPlan(goal);
    setStep(4); // Show success
  };

  const getIntensity = () => {
    if (goal.targetPercentage >= 95) return { level: 'Extreme', color: 'red', hours: 6, description: 'Full dedication required' };
    if (goal.targetPercentage >= 90) return { level: 'High', color: 'orange', hours: 5, description: 'Consistent hard work' };
    if (goal.targetPercentage >= 85) return { level: 'Moderate', color: 'yellow', hours: 4, description: 'Balanced approach' };
    return { level: 'Relaxed', color: 'green', hours: 3, description: 'Comfortable pace' };
  };

  const getDaysLeft = () => {
    const end = new Date(goal.examDate);
    const start = new Date();
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  };

  const intensity = getIntensity();
  const daysLeft = getDaysLeft();

  // Step 1: Target Percentage
  const renderStep1 = () => (
    <div className="p-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
          <Target className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold dark:text-white">What's your target?</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Set your goal percentage for boards</p>
      </div>

      {/* Percentage Slider */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">Target Score</span>
          <span className="text-3xl font-bold text-amber-600 dark:text-amber-400">{goal.targetPercentage}%</span>
        </div>
        <input
          type="range"
          min="60"
          max="100"
          value={goal.targetPercentage}
          onChange={(e) => setGoal({ ...goal, targetPercentage: parseInt(e.target.value) })}
          className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full appearance-none cursor-pointer accent-amber-500"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>60%</span>
          <span>80%</span>
          <span>100%</span>
        </div>
      </div>

      {/* Quick Select */}
      <div className="grid grid-cols-4 gap-2 mb-6">
        {[75, 85, 90, 95].map(pct => (
          <button
            key={pct}
            onClick={() => setGoal({ ...goal, targetPercentage: pct })}
            className={`py-3 rounded-xl font-bold transition ${
              goal.targetPercentage === pct
                ? 'bg-amber-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            {pct}%
          </button>
        ))}
      </div>

      {/* Intensity Preview */}
      <div className={`p-4 rounded-xl bg-${intensity.color}-50 dark:bg-${intensity.color}-900/20 border border-${intensity.color}-200 dark:border-${intensity.color}-800`}>
        <div className="flex items-center gap-3">
          <Flame className={`w-6 h-6 text-${intensity.color}-500`} />
          <div>
            <span className={`font-bold text-${intensity.color}-600 dark:text-${intensity.color}-400`}>
              {intensity.level} Intensity
            </span>
            <p className="text-sm text-gray-600 dark:text-gray-400">{intensity.description}</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => setStep(2)}
        className="w-full mt-6 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold flex items-center justify-center gap-2"
      >
        Continue
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );

  // Step 2: Daily Hours
  const renderStep2 = () => (
    <div className="p-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
          <Calendar className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold dark:text-white">Daily Study Hours</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">How much can you study per day?</p>
      </div>

      {/* Hours Selection */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {[
          { hours: 2, label: 'Light', icon: '📚', desc: 'School days' },
          { hours: 4, label: 'Moderate', icon: '💪', desc: 'Recommended' },
          { hours: 6, label: 'Intense', icon: '🔥', desc: 'Vacation mode' },
          { hours: 8, label: 'Extreme', icon: '🚀', desc: 'Full dedication' },
        ].map(opt => (
          <button
            key={opt.hours}
            onClick={() => setGoal({ ...goal, dailyHours: opt.hours })}
            className={`p-4 rounded-xl text-left transition ${
              goal.dailyHours === opt.hours
                ? 'bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-500'
                : 'bg-gray-50 dark:bg-gray-700 border-2 border-transparent'
            }`}
          >
            <span className="text-2xl mb-2 block">{opt.icon}</span>
            <span className="font-bold dark:text-white block">{opt.hours} hours</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{opt.label} • {opt.desc}</span>
          </button>
        ))}
      </div>

      {/* Custom Hours */}
      <div className="mb-6">
        <label className="text-sm text-gray-500 dark:text-gray-400 mb-2 block">Or set custom hours:</label>
        <input
          type="number"
          min="1"
          max="12"
          value={goal.dailyHours}
          onChange={(e) => setGoal({ ...goal, dailyHours: parseInt(e.target.value) || 1 })}
          className="w-full p-3 bg-gray-100 dark:bg-gray-700 rounded-xl text-center text-2xl font-bold dark:text-white"
        />
      </div>

      {/* Calculation */}
      <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          With {goal.dailyHours} hrs/day for {daysLeft} days:
        </div>
        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          {goal.dailyHours * daysLeft} total study hours
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={() => setStep(1)}
          className="flex-1 py-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-bold"
        >
          Back
        </button>
        <button
          onClick={() => setStep(3)}
          className="flex-1 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-bold flex items-center justify-center gap-2"
        >
          Continue
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  // Step 3: Review & Confirm
  const renderStep3 = () => (
    <div className="p-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold dark:text-white">Your Study Plan</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Review and confirm your goals</p>
      </div>

      {/* Summary Cards */}
      <div className="space-y-3 mb-6">
        <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Target className="w-6 h-6 text-amber-500" />
            <span className="font-medium dark:text-white">Target Score</span>
          </div>
          <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">{goal.targetPercentage}%</span>
        </div>

        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-blue-500" />
            <span className="font-medium dark:text-white">Daily Study</span>
          </div>
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{goal.dailyHours} hrs</span>
        </div>

        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-purple-500" />
            <span className="font-medium dark:text-white">Days Until Exam</span>
          </div>
          <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">{daysLeft}</span>
        </div>

        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Brain className="w-6 h-6 text-green-500" />
            <span className="font-medium dark:text-white">Total Hours</span>
          </div>
          <span className="text-2xl font-bold text-green-600 dark:text-green-400">{goal.dailyHours * daysLeft}</span>
        </div>
      </div>

      {/* Intensity */}
      <div className={`p-4 rounded-xl border-2 ${
        intensity.level === 'Extreme' ? 'bg-red-50 dark:bg-red-900/20 border-red-300' :
        intensity.level === 'High' ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-300' :
        intensity.level === 'Moderate' ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-300' :
        'bg-green-50 dark:bg-green-900/20 border-green-300'
      }`}>
        <div className="flex items-center gap-2 mb-2">
          <Flame className="w-5 h-5" />
          <span className="font-bold dark:text-white">{intensity.level} Mode Activated</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {intensity.level === 'Extreme' && "You've set an ambitious goal! Stay consistent and take breaks."}
          {intensity.level === 'High' && "Great target! With dedication, you'll achieve it."}
          {intensity.level === 'Moderate' && "A balanced approach. Perfect for sustainable progress."}
          {intensity.level === 'Relaxed' && "Comfortable pace. Consider increasing if you want higher scores."}
        </p>
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={() => setStep(2)}
          className="flex-1 py-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-bold"
        >
          Back
        </button>
        <button
          onClick={saveGoal}
          className="flex-1 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold flex items-center justify-center gap-2"
        >
          <CheckCircle className="w-5 h-5" />
          Set Goal
        </button>
      </div>
    </div>
  );

  // Step 4: Success
  const renderSuccess = () => (
    <div className="p-6 text-center">
      <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
        <Award className="w-10 h-10 text-white" />
      </div>
      <h3 className="text-2xl font-bold dark:text-white mb-2">Goal Set! 🎯</h3>
      <p className="text-gray-500 dark:text-gray-400 mb-6">
        Your {goal.targetPercentage}% target is now active. Study {goal.dailyHours} hours daily to achieve it!
      </p>

      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl mb-6">
        <p className="text-green-700 dark:text-green-300 text-sm">
          💡 Tip: Check your progress daily and adjust if needed. Consistency is key!
        </p>
      </div>

      <button
        onClick={onClose}
        className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold"
      >
        Start Studying! 🚀
      </button>
    </div>
  );

  // Show current plan if exists
  const renderCurrentPlan = () => (
    <div className="p-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
          <TrendingUp className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold dark:text-white">Your Active Goal</h3>
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl">
          <div className="text-4xl font-black text-amber-600 dark:text-amber-400 text-center">
            {currentPlan!.targetPercentage}%
          </div>
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">Target Score</div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-center">
            <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{currentPlan!.dailyHours}h</div>
            <div className="text-xs text-gray-500">Daily Goal</div>
          </div>
          <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-center">
            <div className="text-xl font-bold text-purple-600 dark:text-purple-400">{daysLeft}</div>
            <div className="text-xs text-gray-500">Days Left</div>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => {
            setGoal(currentPlan!);
            setCurrentPlan(null);
            setStep(1);
          }}
          className="flex-1 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium"
        >
          Edit Goal
        </button>
        <button
          onClick={onClose}
          className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-medium"
        >
          Keep Going!
        </button>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-amber-500" />
            <span className="font-bold dark:text-white">Goal Setting</span>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Progress Steps */}
        {!currentPlan && step < 4 && (
          <div className="px-6 pt-4">
            <div className="flex items-center gap-2">
              {[1, 2, 3].map(s => (
                <div key={s} className="flex-1 flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    s < step ? 'bg-green-500 text-white' :
                    s === step ? 'bg-amber-500 text-white' :
                    'bg-gray-200 dark:bg-gray-700 text-gray-500'
                  }`}>
                    {s < step ? '✓' : s}
                  </div>
                  {s < 3 && (
                    <div className={`flex-1 h-1 mx-2 rounded ${
                      s < step ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content */}
        {currentPlan && step === 1 ? renderCurrentPlan() :
         step === 1 ? renderStep1() :
         step === 2 ? renderStep2() :
         step === 3 ? renderStep3() :
         renderSuccess()}
      </div>
    </div>
  );
};

export default GoalSetting;
