import React, { useState } from "react";
import {
  X,
  BookOpen,
  Clock,
  Target,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  AlertTriangle,
  Star,
  Zap,
  FileText,
  Calendar,
  Users,
  Globe,
  Award,
  Brain,
  ArrowLeft,
  Eye,
  EyeOff,
} from "lucide-react";
import { POLITICAL_SCIENCE_BOARD_CRASHER } from "../data/politicalScienceBoardCrasher";

interface PolScienceBoardCrasherProps {
  onClose: () => void;
}

type TabType =
  | "overview"
  | "ch1"
  | "ch2"
  | "ch3"
  | "ch4"
  | "ch5"
  | "ch6"
  | "lastmin";

const PolScienceBoardCrasher: React.FC<PolScienceBoardCrasherProps> = ({
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [showAnswers, setShowAnswers] = useState<Record<string, boolean>>({});

  const data = POLITICAL_SCIENCE_BOARD_CRASHER;

  const tabs: {
    id: TabType;
    label: string;
    shortLabel: string;
    color: string;
  }[] = [
    {
      id: "overview",
      label: "Overview",
      shortLabel: "📋",
      color: "bg-blue-500",
    },
    { id: "ch1", label: "World 1991", shortLabel: "1", color: "bg-red-500" },
    {
      id: "ch2",
      label: "Globalisation",
      shortLabel: "2",
      color: "bg-green-500",
    },
    {
      id: "ch3",
      label: "Humanitarian",
      shortLabel: "3",
      color: "bg-purple-500",
    },
    { id: "ch4", label: "Challenges", shortLabel: "4", color: "bg-orange-500" },
    { id: "ch5", label: "Governance", shortLabel: "5", color: "bg-teal-500" },
    {
      id: "ch6",
      label: "India-World",
      shortLabel: "6",
      color: "bg-indigo-500",
    },
    {
      id: "lastmin",
      label: "Last Min",
      shortLabel: "⚡",
      color: "bg-amber-500",
    },
  ];

  const toggleAnswer = (id: string) => {
    setShowAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderOverview = () => (
    <div className="space-y-4 p-4">
      {/* Exam Alert */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-4 text-white">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
            <AlertTriangle className="animate-pulse" size={28} />
          </div>
          <div>
            <h3 className="font-black text-xl">Exam in 2 Days!</h3>
            <p className="text-white/90 text-sm">
              18th February 2026 • 80 Marks • 3 Hours
            </p>
          </div>
        </div>
      </div>

      {/* Paper Pattern */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm">
        <h3 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
          <FileText size={20} className="text-blue-500" /> Paper Pattern
        </h3>
        <div className="grid grid-cols-1 gap-2 text-sm">
          {[
            { q: "Q.1", type: "MCQs & Objectives", marks: 20 },
            { q: "Q.2", type: "Identify & Explain (2×4)", marks: 8 },
            { q: "Q.3", type: "Distinguish Between (2×4)", marks: 8 },
            { q: "Q.4", type: "Brief Answers (4×4)", marks: 16 },
            { q: "Q.5", type: "Long Answers (2×8)", marks: 16 },
            { q: "Q.6", type: "Graph/Data Analysis", marks: 12 },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-slate-50 dark:bg-slate-700 p-3 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center font-bold text-sm">
                  {item.q}
                </span>
                <span className="text-slate-700 dark:text-slate-300">
                  {item.type}
                </span>
              </div>
              <span className="font-bold text-slate-800 dark:text-white">
                {item.marks}m
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Chapter Weightage */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm">
        <h3 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
          <Target size={20} className="text-green-500" /> Chapter Weightage
        </h3>
        <div className="space-y-2">
          {[
            {
              ch: "1. World since 1991",
              marks: "12-14",
              color: "bg-red-500",
              pct: 85,
            },
            {
              ch: "2. Globalisation",
              marks: "12-14",
              color: "bg-green-500",
              pct: 85,
            },
            {
              ch: "3. Humanitarian Issues",
              marks: "10-12",
              color: "bg-purple-500",
              pct: 70,
            },
            {
              ch: "4. Challenges to Peace",
              marks: "12-14",
              color: "bg-orange-500",
              pct: 85,
            },
            {
              ch: "5. Good Governance",
              marks: "10-12",
              color: "bg-teal-500",
              pct: 70,
            },
            {
              ch: "6. India and World",
              marks: "14-16",
              color: "bg-indigo-500",
              pct: 100,
            },
          ].map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-700 dark:text-slate-300">
                  {item.ch}
                </span>
                <span className="font-bold text-slate-800 dark:text-white">
                  {item.marks}
                </span>
              </div>
              <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className={`h-full ${item.color} rounded-full`}
                  style={{ width: `${item.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Tips */}
      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-4">
        <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 flex items-center gap-2">
          <Zap size={20} /> Exam Day Tips
        </h3>
        <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>
              <strong>MCQs:</strong> Read all options, eliminate wrong ones
              first
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>
              <strong>4-mark:</strong> Definition + 3-4 points + 1 example
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>
              <strong>8-mark:</strong> Intro (1m) + Body 5-6 points (6m) +
              Conclusion (1m)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>
              <strong>Tables:</strong> Use for "Distinguish Between" questions
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>
              <strong>Underline:</strong> Key terms and headings
            </span>
          </li>
        </ul>
      </div>

      {/* Time Management */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-4">
        <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
          <Clock size={20} /> Time Management (3 Hours)
        </h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {[
            { q: "Q.1", time: "25 min" },
            { q: "Q.2", time: "15 min" },
            { q: "Q.3", time: "15 min" },
            { q: "Q.4", time: "35 min" },
            { q: "Q.5", time: "40 min" },
            { q: "Q.6", time: "20 min" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-white dark:bg-slate-800 p-2 rounded-lg"
            >
              <span className="font-bold text-blue-600 dark:text-blue-400">
                {item.q}
              </span>
              <span className="text-slate-600 dark:text-slate-300">
                {item.time}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs text-blue-600 dark:text-blue-400 mt-2 text-center">
          + 10 min for revision at the end
        </p>
      </div>
    </div>
  );

  const renderChapter = (chapterKey: string) => {
    const chapter = data[chapterKey as keyof typeof data] as any;
    if (!chapter || !chapter.title)
      return <p className="p-4">Chapter not found</p>;

    return (
      <div className="space-y-4 p-4">
        {/* Chapter Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-4 text-white">
          <h3 className="font-bold text-xl">{chapter.title}</h3>
          <p className="text-white/80 text-sm mt-1">
            Expected: {chapter.weightage}
          </p>
        </div>

        {/* Must Know Concepts */}
        {chapter.mustKnowConcepts && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
            <button
              onClick={() =>
                setExpandedSection(
                  expandedSection === "concepts" ? null : "concepts",
                )
              }
              className="w-full p-4 flex items-center justify-between bg-purple-50 dark:bg-purple-900/20"
            >
              <h4 className="font-bold text-purple-800 dark:text-purple-200 flex items-center gap-2">
                <Brain size={20} /> Must-Know Concepts (
                {chapter.mustKnowConcepts.length})
              </h4>
              {expandedSection === "concepts" ? (
                <ChevronDown size={20} />
              ) : (
                <ChevronRight size={20} />
              )}
            </button>
            {expandedSection === "concepts" && (
              <div className="p-4 space-y-3 max-h-[60vh] overflow-y-auto">
                {chapter.mustKnowConcepts.map((concept: any, idx: number) => (
                  <div
                    key={idx}
                    className="bg-slate-50 dark:bg-slate-700 p-3 rounded-xl"
                  >
                    <p className="font-bold text-slate-800 dark:text-white">
                      {concept.term}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                      {concept.definition}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* PYQ MCQs */}
        {chapter.pyqMCQs && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
            <button
              onClick={() =>
                setExpandedSection(expandedSection === "mcqs" ? null : "mcqs")
              }
              className="w-full p-4 flex items-center justify-between bg-green-50 dark:bg-green-900/20"
            >
              <h4 className="font-bold text-green-800 dark:text-green-200 flex items-center gap-2">
                <CheckCircle2 size={20} /> PYQ MCQs ({chapter.pyqMCQs.length})
              </h4>
              {expandedSection === "mcqs" ? (
                <ChevronDown size={20} />
              ) : (
                <ChevronRight size={20} />
              )}
            </button>
            {expandedSection === "mcqs" && (
              <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
                {chapter.pyqMCQs.map((mcq: any, idx: number) => {
                  const mcqId = `mcq-${chapterKey}-${idx}`;
                  const isRevealed = showAnswers[mcqId];
                  return (
                    <div
                      key={idx}
                      className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl"
                    >
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <p className="font-medium text-slate-800 dark:text-white flex-1">
                          <span className="text-green-600 dark:text-green-400 font-bold mr-2">
                            Q{idx + 1}.
                          </span>
                          {mcq.q}
                        </p>
                        <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded shrink-0">
                          {mcq.year}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                        {mcq.options.map((opt: string, optIdx: number) => (
                          <div
                            key={optIdx}
                            className={`p-2 rounded-lg text-sm ${
                              isRevealed && optIdx === mcq.correct
                                ? "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 font-bold border-2 border-green-500"
                                : "bg-white dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                            }`}
                          >
                            <span className="font-bold mr-2">
                              {String.fromCharCode(65 + optIdx)}.
                            </span>
                            {opt}
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => toggleAnswer(mcqId)}
                        className={`w-full py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 ${
                          isRevealed
                            ? "bg-green-500 text-white"
                            : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {isRevealed ? <EyeOff size={16} /> : <Eye size={16} />}
                        {isRevealed ? "Hide Answer" : "Show Answer"}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* PYQ Short Answers */}
        {chapter.pyqShortAnswers && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
            <button
              onClick={() =>
                setExpandedSection(expandedSection === "short" ? null : "short")
              }
              className="w-full p-4 flex items-center justify-between bg-orange-50 dark:bg-orange-900/20"
            >
              <h4 className="font-bold text-orange-800 dark:text-orange-200 flex items-center gap-2">
                <FileText size={20} /> 4-Mark Answers (
                {chapter.pyqShortAnswers.length})
              </h4>
              {expandedSection === "short" ? (
                <ChevronDown size={20} />
              ) : (
                <ChevronRight size={20} />
              )}
            </button>
            {expandedSection === "short" && (
              <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
                {chapter.pyqShortAnswers.map((qa: any, idx: number) => {
                  const qaId = `short-${chapterKey}-${idx}`;
                  const isRevealed = showAnswers[qaId];
                  return (
                    <div
                      key={idx}
                      className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl"
                    >
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <p className="font-bold text-slate-800 dark:text-white flex-1">
                          {qa.q}
                        </p>
                        <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 px-2 py-1 rounded shrink-0">
                          {qa.year}
                        </span>
                      </div>
                      <button
                        onClick={() => toggleAnswer(qaId)}
                        className={`w-full py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 mb-3 ${
                          isRevealed
                            ? "bg-orange-500 text-white"
                            : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {isRevealed ? <EyeOff size={16} /> : <Eye size={16} />}
                        {isRevealed ? "Hide Model Answer" : "Show Model Answer"}
                      </button>
                      {isRevealed && (
                        <div className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap bg-white dark:bg-slate-800 p-4 rounded-xl border border-orange-200 dark:border-orange-800">
                          {qa.modelAnswer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* PYQ Long Answers */}
        {chapter.pyqLongAnswers && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
            <button
              onClick={() =>
                setExpandedSection(expandedSection === "long" ? null : "long")
              }
              className="w-full p-4 flex items-center justify-between bg-red-50 dark:bg-red-900/20"
            >
              <h4 className="font-bold text-red-800 dark:text-red-200 flex items-center gap-2">
                <BookOpen size={20} /> 8-Mark Answers (
                {chapter.pyqLongAnswers.length})
              </h4>
              {expandedSection === "long" ? (
                <ChevronDown size={20} />
              ) : (
                <ChevronRight size={20} />
              )}
            </button>
            {expandedSection === "long" && (
              <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
                {chapter.pyqLongAnswers.map((qa: any, idx: number) => {
                  const qaId = `long-${chapterKey}-${idx}`;
                  const isRevealed = showAnswers[qaId];
                  return (
                    <div
                      key={idx}
                      className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl"
                    >
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <p className="font-bold text-slate-800 dark:text-white flex-1">
                          {qa.q}
                        </p>
                        <span className="text-xs bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 px-2 py-1 rounded shrink-0">
                          {qa.year}
                        </span>
                      </div>
                      <button
                        onClick={() => toggleAnswer(qaId)}
                        className={`w-full py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 mb-3 ${
                          isRevealed
                            ? "bg-red-500 text-white"
                            : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {isRevealed ? <EyeOff size={16} /> : <Eye size={16} />}
                        {isRevealed ? "Hide Model Answer" : "Show Model Answer"}
                      </button>
                      {isRevealed && (
                        <div className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap bg-white dark:bg-slate-800 p-4 rounded-xl border border-red-200 dark:border-red-800 max-h-[50vh] overflow-y-auto">
                          {qa.modelAnswer}
                        </div>
                      )}
                    </div>
                  );
                })}
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
      <div className="space-y-4 p-4">
        {/* Important Dates */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20">
            <h4 className="font-bold text-blue-800 dark:text-blue-200 flex items-center gap-2">
              <Calendar size={20} /> Important Dates (
              {lastMin.importantDates.length})
            </h4>
          </div>
          <div className="p-4 space-y-2 max-h-[40vh] overflow-y-auto">
            {lastMin.importantDates.map((date, idx) => {
              const [year, event] = date.split(" - ");
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-slate-50 dark:bg-slate-700 p-3 rounded-xl"
                >
                  <span className="w-14 h-10 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center font-bold text-sm shrink-0">
                    {year}
                  </span>
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    {event}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Important Persons */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <div className="p-4 bg-green-50 dark:bg-green-900/20">
            <h4 className="font-bold text-green-800 dark:text-green-200 flex items-center gap-2">
              <Users size={20} /> Important Persons
            </h4>
          </div>
          <div className="p-4 space-y-2">
            {lastMin.importantPersons.map((person, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-700 p-3 rounded-xl text-sm text-slate-700 dark:text-slate-300"
              >
                {person}
              </div>
            ))}
          </div>
        </div>

        {/* Organizations */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20">
            <h4 className="font-bold text-purple-800 dark:text-purple-200 flex items-center gap-2">
              <Globe size={20} /> Important Organizations
            </h4>
          </div>
          <div className="p-4 space-y-2 max-h-[40vh] overflow-y-auto">
            {lastMin.importantOrganizations.map((org, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-700 p-3 rounded-xl text-sm text-slate-700 dark:text-slate-300"
              >
                {org}
              </div>
            ))}
          </div>
        </div>

        {/* Full Forms */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <div className="p-4 bg-amber-50 dark:bg-amber-900/20">
            <h4 className="font-bold text-amber-800 dark:text-amber-200 flex items-center gap-2">
              <Award size={20} /> Full Forms
            </h4>
          </div>
          <div className="p-4 grid grid-cols-1 gap-2 max-h-[40vh] overflow-y-auto">
            {lastMin.fullForms.map((ff, idx) => {
              const [abbr, full] = ff.split(" - ");
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-slate-50 dark:bg-slate-700 p-3 rounded-xl"
                >
                  <span className="font-bold text-amber-600 dark:text-amber-400 shrink-0">
                    {abbr}
                  </span>
                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    = {full}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Exam Tips */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 text-white">
          <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
            <Zap size={20} /> Final Exam Tips
          </h4>
          <ul className="space-y-2 text-sm">
            {lastMin.examTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-slate-100 dark:bg-slate-950 z-50 flex flex-col">
      {/* Header - Fixed */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-4 text-white shrink-0 safe-area-top">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-black">🏛️ Political Science</h1>
            <p className="text-white/80 text-xs">
              Board Exam Crasher • 18 Feb 2026
            </p>
          </div>
          <div className="bg-red-500 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
            2 DAYS!
          </div>
        </div>
      </div>

      {/* Tabs - Fixed, Scrollable */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shrink-0">
        <div className="flex overflow-x-auto no-scrollbar p-2 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setExpandedSection(null);
              }}
              className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition shrink-0 ${
                activeTab === tab.id
                  ? `${tab.color} text-white shadow-lg`
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
              }`}
            >
              <span className="sm:hidden">{tab.shortLabel}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 overflow-y-auto pb-safe">
        {activeTab === "overview" && renderOverview()}
        {activeTab === "ch1" && renderChapter("chapter1")}
        {activeTab === "ch2" && renderChapter("chapter2")}
        {activeTab === "ch3" && renderChapter("chapter3")}
        {activeTab === "ch4" && renderChapter("chapter4")}
        {activeTab === "ch5" && renderChapter("chapter5")}
        {activeTab === "ch6" && renderChapter("chapter6")}
        {activeTab === "lastmin" && renderLastMinute()}
      </div>

      {/* Bottom Navigation - Quick Chapter Jump */}
      <div className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-2 shrink-0 safe-area-bottom">
        <div className="flex justify-around">
          {tabs.slice(1, 7).map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setExpandedSection(null);
              }}
              className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold ${
                activeTab === tab.id
                  ? `${tab.color} text-white`
                  : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
              }`}
            >
              {tab.shortLabel}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PolScienceBoardCrasher;
