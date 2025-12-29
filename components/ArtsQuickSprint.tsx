import React, { useEffect, useMemo, useState } from 'react';
import { X, Flame, Timer, Target, ArrowRight, CheckCircle2, XCircle, Zap, BookOpen, Sparkles } from 'lucide-react';
import { Question, Subject } from '../types';

interface ArtsQuickSprintProps {
  subjects: Subject[];
  onClose: () => void;
}

type SprintQuestion = Question & { subjectName: string; chapterTitle: string };

type WrongItem = { question: SprintQuestion; chosen: number };

type SprintPreset = {
  id: string;
  title: string;
  subjectId: string;
  durationMins: number;
  questionCount: number;
  focus: string;
};

const ARTS_IDS = ['his', 'pol', 'soc', 'geo', 'psy', 'eco', 'eng', 'hin', 'san'];

const PRESETS: SprintPreset[] = [
  {
    id: 'history-freedom',
    title: 'History Freedom Sprint',
    subjectId: 'his',
    durationMins: 8,
    questionCount: 8,
    focus: 'Freedom struggle, constitutional acts, and key movements.',
  },
  {
    id: 'polity-governance',
    title: 'Polity Governance Drill',
    subjectId: 'pol',
    durationMins: 7,
    questionCount: 7,
    focus: 'Governance, amendments, and current polity triggers.',
  },
  {
    id: 'geo-human',
    title: 'Geo Human Burst',
    subjectId: 'geo',
    durationMins: 6,
    questionCount: 6,
    focus: 'Population, migration, and development markers.',
  },
  {
    id: 'mixed-arts',
    title: 'Mixed Arts Dash',
    subjectId: 'mixed',
    durationMins: 10,
    questionCount: 10,
    focus: 'Curated mix across History, Polity, Geo, Socio, and Eco.',
  },
];

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const ArtsQuickSprint: React.FC<ArtsQuickSprintProps> = ({ subjects, onClose }) => {
  const artsSubjects = useMemo(() => subjects.filter(sub => ARTS_IDS.includes(sub.id)), [subjects]);
  const [questions, setQuestions] = useState<SprintQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [activePreset, setActivePreset] = useState<SprintPreset | null>(PRESETS[0]);
  const [customSubjectId, setCustomSubjectId] = useState<string>('mixed');
  const [customCount, setCustomCount] = useState<number>(8);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [wrongQuestions, setWrongQuestions] = useState<WrongItem[]>([]);

  const availableQuestionCount = useMemo(() => {
    let total = 0;
    artsSubjects.forEach(subject => {
      subject.chapters.forEach(chapter => {
        total += chapter.mcqs?.length || 0;
      });
    });
    return total;
  }, [artsSubjects]);

  const generateQuestions = (count: number, subjectId: string): SprintQuestion[] => {
    const pool: SprintQuestion[] = [];
    const allowMixed = subjectId === 'mixed';

    artsSubjects.forEach(subject => {
      if (!allowMixed && subject.id !== subjectId) return;
      subject.chapters.forEach(chapter => {
        chapter.mcqs?.forEach(mcq => {
          pool.push({ ...mcq, subjectName: subject.name, chapterTitle: chapter.title });
        });
      });
    });

    if (pool.length === 0) return [];

    const desiredCount = Math.min(count, pool.length);
    return shuffleArray(pool).slice(0, desiredCount);
  };

  const startSprint = (preset: SprintPreset | null, custom?: boolean) => {
    const targetPreset = custom
      ? {
          id: 'custom',
          title: 'Custom Arts Sprint',
          subjectId: customSubjectId,
          durationMins: Math.max(5, Math.min(20, Math.ceil(customCount * 0.9))),
          questionCount: customCount,
          focus: 'Quick custom set across selected arts subject(s).',
        }
      : preset;

    if (!targetPreset) return;

    const generated = generateQuestions(targetPreset.questionCount, targetPreset.subjectId);
    if (generated.length === 0) {
      alert('No MCQs available for the chosen subject. Try another preset.');
      return;
    }

    setQuestions(generated);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setIsFinished(false);
    setIsRunning(true);
    setActivePreset(targetPreset);
    setTimeLeft(targetPreset.durationMins * 60);
    setStreak(0);
    setBestStreak(0);
    setWrongQuestions([]);
  };

  // Timer
  useEffect(() => {
    if (!isRunning || isFinished || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsFinished(true);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isRunning, isFinished, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null || !isRunning || isFinished) return;

    setSelectedAnswer(index);
    setShowResult(true);

    const currentQuestion = questions[currentIndex];
    const isCorrect = index === currentQuestion.correctIndex;

    if (isCorrect) {
      setScore(prev => prev + 1);
      setStreak(prev => {
        const next = prev + 1;
        setBestStreak(b => Math.max(b, next));
        return next;
      });
    } else {
      setStreak(0);
      setWrongQuestions(prev => [...prev, { question: currentQuestion, chosen: index }]);
    }

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setIsFinished(true);
        setIsRunning(false);
      }
    }, 900);
  };

  const restart = () => {
    setQuestions([]);
    setIsRunning(false);
    setIsFinished(false);
    setSelectedAnswer(null);
    setShowResult(false);
    setTimeLeft(0);
    setStreak(0);
    setBestStreak(0);
    setWrongQuestions([]);
  };

  const remixWrong = () => {
    if (wrongQuestions.length === 0) return;
    const remixPreset: SprintPreset = {
      id: 'remix',
      title: 'Remix Wrong Answers',
      subjectId: 'mixed',
      durationMins: Math.max(3, Math.ceil(wrongQuestions.length * 0.8)),
      questionCount: wrongQuestions.length,
      focus: 'Retry only the items you missed.',
    };
    const remixed = shuffleArray(wrongQuestions.map(w => w.question));
    setQuestions(remixed);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setIsFinished(false);
    setIsRunning(true);
    setActivePreset(remixPreset);
    setTimeLeft(remixPreset.durationMins * 60);
    setStreak(0);
    setBestStreak(0);
    setWrongQuestions([]);
  };

  const progress = questions.length ? Math.round(((currentIndex + (isFinished ? 1 : 0)) / questions.length) * 100) : 0;
  const timeBar = activePreset ? Math.max(0, Math.min(100, Math.round((timeLeft / (activePreset.durationMins * 60)) * 100))) : 0;
  const accuracy = questions.length ? Math.round((score / questions.length) * 100) : 0;

  // Persist misses to error log for later review
  useEffect(() => {
    if (!isFinished || wrongQuestions.length === 0) return;
    const errorLog = JSON.parse(localStorage.getItem('7k-error-log') || '[]');
    wrongQuestions.forEach(item => {
      if (!errorLog.find((e: any) => e.id === item.question.id)) {
        errorLog.push({
          ...item.question,
          chosen: item.chosen,
          timestamp: new Date().toISOString(),
          source: 'arts-quick-sprint',
        });
      }
    });
    // Keep last 120 for brevity
    if (errorLog.length > 120) {
      errorLog.splice(0, errorLog.length - 120);
    }
    localStorage.setItem('7k-error-log', JSON.stringify(errorLog));
  }, [isFinished, wrongQuestions]);

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-5xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-rose-600 text-white flex items-center justify-center">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold dark:text-white">Arts Quick Sprint</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">10-minute exam-mode burst for Humanities</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
            <X className="w-5 h-5 dark:text-white" />
          </button>
        </div>

        {!isRunning && !questions.length && (
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-2 bg-gradient-to-r from-amber-500 to-pink-600 text-white rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">Pool ready</p>
                <h3 className="text-2xl font-semibold">{availableQuestionCount} MCQs</h3>
                <p className="text-sm opacity-80">Sourced from History, Polity, Geography, Sociology, Economics, Psychology</p>
              </div>
              <div className="text-right">
                <p className="text-sm opacity-80">Default preset</p>
                <button
                  className="mt-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition"
                  onClick={() => startSprint(PRESETS[0])}
                >
                  Start Freedom Sprint
                </button>
              </div>
            </div>

            {PRESETS.map(preset => (
              <div
                key={preset.id}
                className="border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col gap-3 bg-slate-50/60 dark:bg-slate-800/40"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold dark:text-white">{preset.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{preset.focus}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-200 flex items-center gap-1">
                    <Timer className="w-4 h-4" /> {preset.durationMins}m
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <Target className="w-4 h-4" /> {preset.questionCount} questions
                </div>
                <button
                  className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-rose-500 text-white hover:shadow-lg"
                  onClick={() => startSprint(preset)}
                >
                  Start sprint <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}

            <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <h4 className="font-semibold dark:text-white">Custom Dash</h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Pick subject and question count (5-20) for a bespoke sprint.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <select
                  value={customSubjectId}
                  onChange={e => setCustomSubjectId(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                >
                  <option value="mixed">Mixed Arts</option>
                  {artsSubjects.map(sub => (
                    <option key={sub.id} value={sub.id}>{sub.name}</option>
                  ))}
                </select>
                <input
                  type="number"
                  min={5}
                  max={20}
                  value={customCount}
                  onChange={e => setCustomCount(Math.min(20, Math.max(5, parseInt(e.target.value) || 5)))}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90"
                onClick={() => startSprint(null, true)}
              >
                Launch custom sprint
              </button>
            </div>
          </div>
        )}

        {(isRunning || questions.length > 0) && (
          <div className="p-6 space-y-4">
            {activePreset && (
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-200 inline-flex items-center gap-1">
                  <Timer className="w-4 h-4" /> {formatTime(timeLeft)}
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200 inline-flex items-center gap-1">
                  <Zap className="w-4 h-4" /> {progress}% done
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-200 inline-flex items-center gap-1">
                  <Flame className="w-4 h-4" /> Streak {streak} (best {bestStreak})
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200 inline-flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> {accuracy}% accuracy
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200 inline-flex items-center gap-1">
                  <BookOpen className="w-4 h-4" /> {activePreset.title}
                </span>
              </div>
            )}

            <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-amber-500 to-rose-500" style={{ width: `${timeBar}%` }} />
            </div>

            {!isFinished ? (
              <>
                {questions[currentIndex] && (
                  <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-3">
                    <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                      <span>Q{currentIndex + 1} / {questions.length}</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-200">{questions[currentIndex].subjectName} • {questions[currentIndex].chapterTitle}</span>
                    </div>
                    <h3 className="text-lg font-semibold dark:text-white">{questions[currentIndex].question}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {questions[currentIndex].options.map((opt, idx) => {
                        const isCorrect = idx === questions[currentIndex].correctIndex;
                        const isChosen = selectedAnswer === idx;
                        const stateClass = !showResult ? 'border-slate-200 dark:border-slate-700' : isCorrect ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 dark:border-emerald-700' : isChosen ? 'border-rose-500 bg-rose-50 dark:bg-rose-900/30 dark:border-rose-700' : 'border-slate-200 dark:border-slate-700';
                        return (
                          <button
                            key={idx}
                            disabled={showResult}
                            className={`text-left px-3 py-3 rounded-lg border transition ${stateClass} ${!showResult ? 'hover:border-amber-400' : ''}`}
                            onClick={() => handleAnswer(idx)}
                          >
                            <span className="font-medium dark:text-white">{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{questions[currentIndex].explanation}</div>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xl font-bold">
                    {score}/{questions.length}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold dark:text-white">Sprint Complete</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{progress}% coverage • {formatTime(timeLeft)} left unused</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200 inline-flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> {score} correct
                  </span>
                  <span className="px-2 py-1 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-200 inline-flex items-center gap-1">
                    <XCircle className="w-4 h-4" /> {questions.length - score} missed
                  </span>
                  <span className="px-2 py-1 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-200 inline-flex items-center gap-1">
                    <Flame className="w-4 h-4" /> Best streak {bestStreak}
                  </span>
                  <span className="px-2 py-1 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200 inline-flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> {accuracy}% accuracy
                  </span>
                </div>
                <div className="mt-4 flex gap-3">
                  <button className="px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900" onClick={() => startSprint(activePreset || PRESETS[0])}>
                    Retry sprint
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-amber-500 text-white" onClick={restart}>
                    Pick another preset
                  </button>
                  {wrongQuestions.length > 0 && (
                    <button className="px-4 py-2 rounded-lg bg-rose-500 text-white" onClick={remixWrong}>
                      Remix missed ({wrongQuestions.length})
                    </button>
                  )}
                </div>

                {wrongQuestions.length > 0 && (
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                      Missed questions review
                    </div>
                    <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                      {wrongQuestions.map((item, idx) => {
                        const correctOption = item.question.options[item.question.correctIndex];
                        const chosenOption = item.question.options[item.chosen];
                        return (
                          <div key={`${item.question.id}-${idx}`} className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
                            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                              {item.question.subjectName} • {item.question.chapterTitle}
                            </div>
                            <div className="text-sm font-semibold dark:text-white">{item.question.question}</div>
                            <div className="mt-2 text-xs space-y-1">
                              <div className="text-emerald-600 dark:text-emerald-300">Correct: {correctOption}</div>
                              <div className="text-rose-600 dark:text-rose-300">You chose: {chosenOption}</div>
                              <div className="text-slate-500 dark:text-slate-400">{item.question.explanation}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtsQuickSprint;
