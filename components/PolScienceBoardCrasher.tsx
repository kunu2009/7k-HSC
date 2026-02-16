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
import MarkdownRenderer from "./MarkdownRenderer";

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
  | "mindfaces"
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
      id: "mindfaces",
      label: "MindFaces Tips",
      shortLabel: "🧠",
      color: "bg-pink-500",
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
          <FileText size={20} className="text-blue-500" /> Paper Pattern (80
          Marks)
        </h3>
        <div className="grid grid-cols-1 gap-2 text-sm">
          {[
            {
              q: "Q.1",
              type: "Objectives (A+B+C+D+E)",
              marks: 20,
              detail: "MCQ, Pairs, Concept, Odd-one",
            },
            {
              q: "Q.2",
              type: "Concept Map + Map Q",
              marks: 9,
              detail: "4m + 5m",
            },
            {
              q: "Q.3",
              type: "True/False with Reason",
              marks: 10,
              detail: "Any 5/7 × 2m",
            },
            {
              q: "Q.4",
              type: "Explain Co-relation",
              marks: 9,
              detail: "Any 3/5 × 3m",
            },
            {
              q: "Q.5",
              type: "Express Opinion (25-30 words)",
              marks: 12,
              detail: "Any 3/5 × 4m",
            },
            {
              q: "Q.6",
              type: "Answer (80-100 words)",
              marks: 10,
              detail: "Any 2/4 × 5m",
            },
            {
              q: "Q.7",
              type: "Detail Answer (150-200 words)",
              marks: 10,
              detail: "Any 1/2 × 10m",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-slate-50 dark:bg-slate-700 p-3 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center font-bold text-sm">
                  {item.q}
                </span>
                <div>
                  <span className="text-slate-700 dark:text-slate-300 block">
                    {item.type}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {item.detail}
                  </span>
                </div>
              </div>
              <span className="font-bold text-slate-800 dark:text-white">
                {item.marks}m
              </span>
            </div>
          ))}
        </div>

        {/* Q.1 Breakdown */}
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
          <p className="text-xs font-bold text-blue-800 dark:text-blue-200 mb-2">
            Q.1 Breakdown (20 marks):
          </p>
          <div className="grid grid-cols-2 gap-1 text-xs text-blue-700 dark:text-blue-300">
            <span>A) MCQ/Fill blanks: 5m</span>
            <span>B) Correct pairs: 3m</span>
            <span>C) Complete sentence: 4m</span>
            <span>D) State concept: 4m</span>
            <span>E) Odd man out: 4m</span>
          </div>
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
              <strong>T/F (2m each):</strong> Write TRUE/FALSE + correct reason
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>
              <strong>Co-relation (3m):</strong> Show connection between two
              concepts
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>
              <strong>Opinion (4m):</strong> State opinion + 2-3 supporting
              points
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>
              <strong>5m Answer:</strong> Intro + 4-5 points + Example
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>
              <strong>10m Answer:</strong> Intro + 6-8 detailed points +
              Conclusion
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
            { q: "Q.1 (20m)", time: "25 min" },
            { q: "Q.2 (9m)", time: "12 min" },
            { q: "Q.3 (10m)", time: "15 min" },
            { q: "Q.4 (9m)", time: "15 min" },
            { q: "Q.5 (12m)", time: "18 min" },
            { q: "Q.6 (10m)", time: "20 min" },
            { q: "Q.7 (10m)", time: "25 min" },
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
          Total: 130 min + 50 min buffer/revision
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
                        <div className="text-sm bg-white dark:bg-slate-800 p-4 rounded-xl border border-orange-200 dark:border-orange-800">
                          <MarkdownRenderer content={qa.modelAnswer} />
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
                        <div className="text-sm bg-white dark:bg-slate-800 p-4 rounded-xl border border-red-200 dark:border-red-800 max-h-[50vh] overflow-y-auto">
                          <MarkdownRenderer content={qa.modelAnswer} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Textbook Exercises Section */}
        {chapter.textbookExercises && (
          <div className="space-y-4">
            {/* Section Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 text-white">
              <h3 className="font-bold text-lg flex items-center gap-2">
                📚 {chapter.textbookExercises.title}
              </h3>
              <p className="text-white/80 text-sm mt-1">
                Complete textbook exercises with model answers
              </p>
            </div>

            {/* Textbook MCQs */}
            {chapter.textbookExercises.mcqs && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "tb-mcqs" ? null : "tb-mcqs",
                    )
                  }
                  className="w-full p-4 flex items-center justify-between bg-emerald-50 dark:bg-emerald-900/20"
                >
                  <h4 className="font-bold text-emerald-800 dark:text-emerald-200 flex items-center gap-2">
                    <CheckCircle2 size={20} /> Q.1(A) MCQ/Fill Blanks - 5 marks
                    ({chapter.textbookExercises.mcqs.length} Qs)
                  </h4>
                  {expandedSection === "tb-mcqs" ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </button>
                {expandedSection === "tb-mcqs" && (
                  <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
                    {chapter.textbookExercises.mcqs.map(
                      (mcq: any, idx: number) => {
                        const mcqId = `tb-mcq-${chapterKey}-${idx}`;
                        const isRevealed = showAnswers[mcqId];
                        return (
                          <div
                            key={idx}
                            className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl"
                          >
                            <p className="font-medium text-slate-800 dark:text-white mb-3">
                              <span className="text-emerald-600 dark:text-emerald-400 font-bold mr-2">
                                Q{idx + 1}.
                              </span>
                              {mcq.q}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                              {mcq.options.map(
                                (opt: string, optIdx: number) => (
                                  <div
                                    key={optIdx}
                                    className={`p-2 rounded-lg text-sm ${
                                      isRevealed && optIdx === mcq.correct
                                        ? "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 font-bold border-2 border-green-500"
                                        : "bg-white dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                                    }`}
                                  >
                                    <span className="font-bold mr-2">
                                      {String.fromCharCode(97 + optIdx)})
                                    </span>
                                    {opt}
                                  </div>
                                ),
                              )}
                            </div>
                            <button
                              onClick={() => toggleAnswer(mcqId)}
                              className={`w-full py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 ${
                                isRevealed
                                  ? "bg-emerald-500 text-white"
                                  : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                              }`}
                            >
                              {isRevealed ? (
                                <EyeOff size={16} />
                              ) : (
                                <Eye size={16} />
                              )}
                              {isRevealed ? "Hide Answer" : "Show Answer"}
                            </button>
                            {isRevealed && mcq.explanation && (
                              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded">
                                💡 {mcq.explanation}
                              </p>
                            )}
                          </div>
                        );
                      },
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Incorrect Pairs - Q.1(B) */}
            {chapter.textbookExercises.incorrectPairs && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "tb-pairs" ? null : "tb-pairs",
                    )
                  }
                  className="w-full p-4 flex items-center justify-between bg-orange-50 dark:bg-orange-900/20"
                >
                  <h4 className="font-bold text-orange-800 dark:text-orange-200 flex items-center gap-2">
                    <Target size={20} /> Q.1(B) Identify Incorrect Pair - 3
                    marks ({chapter.textbookExercises.incorrectPairs.length}{" "}
                    sets)
                  </h4>
                  {expandedSection === "tb-pairs" ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </button>
                {expandedSection === "tb-pairs" && (
                  <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
                    {chapter.textbookExercises.incorrectPairs.map(
                      (item: any, idx: number) => {
                        const itemId = `tb-pair-${idx}`;
                        const isRevealed = showAnswers[itemId];
                        return (
                          <div
                            key={idx}
                            className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl"
                          >
                            <p className="font-medium text-slate-800 dark:text-white mb-3">
                              Identify the incorrect pair:
                            </p>
                            <div className="space-y-2 mb-3">
                              {item.pairs.map((pair: any, pIdx: number) => (
                                <div
                                  key={pIdx}
                                  className={`p-2 rounded-lg text-sm ${
                                    isRevealed && !pair.correct
                                      ? "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 border-2 border-red-500"
                                      : "bg-white dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                                  }`}
                                >
                                  ({String.fromCharCode(105 + pIdx)}){" "}
                                  {pair.item1} - {pair.item2}
                                </div>
                              ))}
                            </div>
                            <button
                              onClick={() => toggleAnswer(itemId)}
                              className={`w-full py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 ${
                                isRevealed
                                  ? "bg-orange-500 text-white"
                                  : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                              }`}
                            >
                              {isRevealed ? (
                                <EyeOff size={16} />
                              ) : (
                                <Eye size={16} />
                              )}
                              {isRevealed ? "Hide Answer" : "Show Answer"}
                            </button>
                            {isRevealed && (
                              <div className="mt-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                                <p className="font-bold text-red-600 dark:text-red-400 mb-1">
                                  ❌ Incorrect: {item.incorrectPair}
                                </p>
                                <p className="font-bold text-green-600 dark:text-green-400 mb-2">
                                  ✅ Correct: {item.correction}
                                </p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                  {item.explanation}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      },
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Odd One Out - Q.1(E) */}
            {chapter.textbookExercises.oddOneOut && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "tb-odd" ? null : "tb-odd",
                    )
                  }
                  className="w-full p-4 flex items-center justify-between bg-rose-50 dark:bg-rose-900/20"
                >
                  <h4 className="font-bold text-rose-800 dark:text-rose-200 flex items-center gap-2">
                    <Star size={20} /> Q.1(E) Odd One Out - 4 marks (
                    {chapter.textbookExercises.oddOneOut.length} sets)
                  </h4>
                  {expandedSection === "tb-odd" ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </button>
                {expandedSection === "tb-odd" && (
                  <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
                    {chapter.textbookExercises.oddOneOut.map(
                      (item: any, idx: number) => {
                        const itemId = `tb-odd-${idx}`;
                        const isRevealed = showAnswers[itemId];
                        return (
                          <div
                            key={idx}
                            className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl"
                          >
                            <p className="font-medium text-slate-800 dark:text-white mb-3">
                              Find the odd one out:
                            </p>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {item.set.map((word: string, wIdx: number) => (
                                <span
                                  key={wIdx}
                                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                                    isRevealed && word === item.answer
                                      ? "bg-rose-500 text-white"
                                      : "bg-white dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                                  }`}
                                >
                                  {word}
                                </span>
                              ))}
                            </div>
                            <button
                              onClick={() => toggleAnswer(itemId)}
                              className={`w-full py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 ${
                                isRevealed
                                  ? "bg-rose-500 text-white"
                                  : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                              }`}
                            >
                              {isRevealed ? (
                                <EyeOff size={16} />
                              ) : (
                                <Eye size={16} />
                              )}
                              {isRevealed ? "Hide Answer" : "Show Answer"}
                            </button>
                            {isRevealed && (
                              <div className="mt-3 p-3 bg-rose-50 dark:bg-rose-900/20 rounded-lg">
                                <p className="font-bold text-rose-700 dark:text-rose-300 mb-2">
                                  🎯 Odd One: {item.answer}
                                </p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                  <strong>Reason:</strong> {item.reason}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      },
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Concept Identification */}
            {chapter.textbookExercises.conceptIdentification && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "tb-concepts" ? null : "tb-concepts",
                    )
                  }
                  className="w-full p-4 flex items-center justify-between bg-blue-50 dark:bg-blue-900/20"
                >
                  <h4 className="font-bold text-blue-800 dark:text-blue-200 flex items-center gap-2">
                    <Brain size={20} /> Q.1(D) State Concept - 4 marks (
                    {chapter.textbookExercises.conceptIdentification.length} Qs)
                  </h4>
                  {expandedSection === "tb-concepts" ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </button>
                {expandedSection === "tb-concepts" && (
                  <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
                    {chapter.textbookExercises.conceptIdentification.map(
                      (item: any, idx: number) => {
                        const itemId = `tb-concept-${chapterKey}-${idx}`;
                        const isRevealed = showAnswers[itemId];
                        return (
                          <div
                            key={idx}
                            className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl"
                          >
                            <p className="font-medium text-slate-800 dark:text-white mb-3">
                              <span className="text-blue-600 dark:text-blue-400 font-bold mr-2">
                                {idx + 1}.
                              </span>
                              {item.statement}
                            </p>
                            <button
                              onClick={() => toggleAnswer(itemId)}
                              className={`w-full py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 ${
                                isRevealed
                                  ? "bg-blue-500 text-white"
                                  : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                              }`}
                            >
                              {isRevealed ? (
                                <EyeOff size={16} />
                              ) : (
                                <Eye size={16} />
                              )}
                              {isRevealed ? "Hide Answer" : "Show Answer"}
                            </button>
                            {isRevealed && (
                              <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                <p className="font-bold text-blue-700 dark:text-blue-300 text-lg mb-2">
                                  ✅ {item.answer}
                                </p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                  {item.explanation}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      },
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Concept Maps */}
            {chapter.textbookExercises.conceptMaps && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "tb-maps" ? null : "tb-maps",
                    )
                  }
                  className="w-full p-4 flex items-center justify-between bg-purple-50 dark:bg-purple-900/20"
                >
                  <h4 className="font-bold text-purple-800 dark:text-purple-200 flex items-center gap-2">
                    <Globe size={20} /> Q.2(A) Concept Map - 4 marks (
                    {chapter.textbookExercises.conceptMaps.length} examples)
                  </h4>
                  {expandedSection === "tb-maps" ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </button>
                {expandedSection === "tb-maps" && (
                  <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
                    {chapter.textbookExercises.conceptMaps.map(
                      (map: any, idx: number) => {
                        const mapId = `tb-map-${chapterKey}-${idx}`;
                        const isRevealed = showAnswers[mapId];
                        return (
                          <div
                            key={idx}
                            className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800"
                          >
                            <p className="font-bold text-purple-800 dark:text-purple-200 mb-3">
                              🗺️ {map.title}
                            </p>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                              {map.question}
                            </p>
                            <button
                              onClick={() => toggleAnswer(mapId)}
                              className={`w-full py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 ${
                                isRevealed
                                  ? "bg-purple-500 text-white"
                                  : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                              }`}
                            >
                              {isRevealed ? (
                                <EyeOff size={16} />
                              ) : (
                                <Eye size={16} />
                              )}
                              {isRevealed
                                ? "Hide Answer"
                                : "Show Complete Concept Map"}
                            </button>
                            {isRevealed && (
                              <div className="mt-4 p-4 bg-white dark:bg-slate-800 rounded-xl">
                                <div className="text-center mb-4">
                                  <span className="inline-block px-4 py-2 bg-purple-600 text-white rounded-full font-bold">
                                    {map.answer.centerNode}
                                  </span>
                                </div>
                                <div className="flex flex-wrap justify-center gap-2 mb-4">
                                  {(
                                    map.answer.members || map.answer.founders
                                  )?.map((member: string, mIdx: number) => (
                                    <span
                                      key={mIdx}
                                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                                    >
                                      {member}
                                    </span>
                                  ))}
                                </div>
                                {map.answer.laterMembers && (
                                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                                    {map.answer.laterMembers.map(
                                      (member: string, mIdx: number) => (
                                        <span
                                          key={mIdx}
                                          className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
                                        >
                                          + {member}
                                        </span>
                                      ),
                                    )}
                                  </div>
                                )}
                                <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1 mt-3 bg-slate-50 dark:bg-slate-700 p-3 rounded">
                                  {map.answer.fullForm && (
                                    <p>
                                      <strong>Full Form:</strong>{" "}
                                      {map.answer.fullForm}
                                    </p>
                                  )}
                                  {map.answer.established && (
                                    <p>
                                      <strong>Established:</strong>{" "}
                                      {map.answer.established}
                                    </p>
                                  )}
                                  {map.answer.headquarters && (
                                    <p>
                                      <strong>HQ:</strong>{" "}
                                      {map.answer.headquarters}
                                    </p>
                                  )}
                                  {map.answer.focus && (
                                    <p>
                                      <strong>Focus:</strong> {map.answer.focus}
                                    </p>
                                  )}
                                  {map.answer.note && (
                                    <p className="text-purple-600 dark:text-purple-400 font-medium mt-2">
                                      📌 {map.answer.note}
                                    </p>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      },
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Map Questions */}
            {chapter.textbookExercises.mapQuestions && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "tb-mapq" ? null : "tb-mapq",
                    )
                  }
                  className="w-full p-4 flex items-center justify-between bg-teal-50 dark:bg-teal-900/20"
                >
                  <h4 className="font-bold text-teal-800 dark:text-teal-200 flex items-center gap-2">
                    <Globe size={20} /> Q.2(B) Map Questions - 5 marks (
                    {chapter.textbookExercises.mapQuestions.length} Qs)
                  </h4>
                  {expandedSection === "tb-mapq" ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </button>
                {expandedSection === "tb-mapq" && (
                  <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
                    {chapter.textbookExercises.mapQuestions.map(
                      (q: any, idx: number) => {
                        const qId = `tb-mapq-${chapterKey}-${idx}`;
                        const isRevealed = showAnswers[qId];
                        return (
                          <div
                            key={idx}
                            className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl"
                          >
                            <p className="font-medium text-slate-800 dark:text-white mb-3">
                              <span className="text-teal-600 dark:text-teal-400 font-bold mr-2">
                                ({idx + 1})
                              </span>
                              {q.question}
                            </p>
                            <button
                              onClick={() => toggleAnswer(qId)}
                              className={`w-full py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 ${
                                isRevealed
                                  ? "bg-teal-500 text-white"
                                  : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                              }`}
                            >
                              {isRevealed ? (
                                <EyeOff size={16} />
                              ) : (
                                <Eye size={16} />
                              )}
                              {isRevealed ? "Hide Answer" : "Show Answer"}
                            </button>
                            {isRevealed && (
                              <div className="mt-3 p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                                <p className="font-bold text-teal-700 dark:text-teal-300 mb-2">
                                  Answer (Any {q.answer.length >= 4 ? "4" : "2"}
                                  ):
                                </p>
                                <div className="flex flex-wrap gap-2 mb-2">
                                  {q.answer.map((a: string, aIdx: number) => (
                                    <span
                                      key={aIdx}
                                      className="px-2 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded text-sm"
                                    >
                                      {a}
                                    </span>
                                  ))}
                                </div>
                                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                                  {q.note}
                                </p>
                                <p className="text-xs text-slate-500 dark:text-slate-500 mt-1 italic">
                                  {q.explanation}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      },
                    )}
                  </div>
                )}
              </div>
            )}

            {/* True/False */}
            {chapter.textbookExercises.trueFalse && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "tb-tf" ? null : "tb-tf",
                    )
                  }
                  className="w-full p-4 flex items-center justify-between bg-amber-50 dark:bg-amber-900/20"
                >
                  <h4 className="font-bold text-amber-800 dark:text-amber-200 flex items-center gap-2">
                    <CheckCircle2 size={20} /> Q.3 True/False - 10 marks (Any
                    5/7 × 2m) ({chapter.textbookExercises.trueFalse.length} Qs)
                  </h4>
                  {expandedSection === "tb-tf" ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </button>
                {expandedSection === "tb-tf" && (
                  <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
                    {chapter.textbookExercises.trueFalse.map(
                      (tf: any, idx: number) => {
                        const tfId = `tb-tf-${chapterKey}-${idx}`;
                        const isRevealed = showAnswers[tfId];
                        return (
                          <div
                            key={idx}
                            className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl"
                          >
                            <p className="font-medium text-slate-800 dark:text-white mb-3">
                              <span className="text-amber-600 dark:text-amber-400 font-bold mr-2">
                                ({idx + 1})
                              </span>
                              {tf.statement}
                            </p>
                            <button
                              onClick={() => toggleAnswer(tfId)}
                              className={`w-full py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 ${
                                isRevealed
                                  ? "bg-amber-500 text-white"
                                  : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                              }`}
                            >
                              {isRevealed ? (
                                <EyeOff size={16} />
                              ) : (
                                <Eye size={16} />
                              )}
                              {isRevealed
                                ? "Hide Answer"
                                : "Show Answer with Reason"}
                            </button>
                            {isRevealed && (
                              <div
                                className={`mt-3 p-3 rounded-lg ${tf.answer ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800" : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"}`}
                              >
                                <div className="text-sm">
                                  <MarkdownRenderer content={tf.reason} />
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      },
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Extra Questions - Teacher's Important Questions */}
            {chapter.textbookExercises.extraQuestions && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "tb-extra" ? null : "tb-extra",
                    )
                  }
                  className="w-full p-4 flex items-center justify-between bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20"
                >
                  <h4 className="font-bold text-yellow-800 dark:text-yellow-200 flex items-center gap-2">
                    <Star size={20} className="text-yellow-500" /> ⭐ Extra
                    Important Questions (
                    {chapter.textbookExercises.extraQuestions.length})
                  </h4>
                  {expandedSection === "tb-extra" ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </button>
                {expandedSection === "tb-extra" && (
                  <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
                    {chapter.textbookExercises.extraQuestions.map(
                      (eq: any, idx: number) => {
                        const eqId = `tb-extra-${idx}`;
                        const isRevealed = showAnswers[eqId];
                        return (
                          <div
                            key={idx}
                            className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-4 rounded-xl border-2 border-yellow-300 dark:border-yellow-700"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded font-bold">
                                {eq.source}
                              </span>
                              {eq.marks && (
                                <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded font-bold">
                                  {eq.marks} marks
                                </span>
                              )}
                            </div>
                            <p className="font-bold text-slate-800 dark:text-white mb-3">
                              📌 {eq.question}
                            </p>
                            <button
                              onClick={() => toggleAnswer(eqId)}
                              className={`w-full py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 ${
                                isRevealed
                                  ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                                  : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                              }`}
                            >
                              {isRevealed ? (
                                <EyeOff size={16} />
                              ) : (
                                <Eye size={16} />
                              )}
                              {isRevealed
                                ? "Hide Model Answer"
                                : "Show Model Answer ⭐"}
                            </button>
                            {isRevealed && (
                              <div className="mt-3 p-4 bg-white dark:bg-slate-800 rounded-lg text-sm max-h-[50vh] overflow-y-auto border border-yellow-200 dark:border-yellow-800">
                                <MarkdownRenderer content={eq.modelAnswer} />
                              </div>
                            )}
                          </div>
                        );
                      },
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Co-relation Questions - Q.4 */}
            {chapter.textbookExercises.coRelation && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "tb-corel" ? null : "tb-corel",
                    )
                  }
                  className="w-full p-4 flex items-center justify-between bg-indigo-50 dark:bg-indigo-900/20"
                >
                  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 flex items-center gap-2">
                    <Target size={20} /> Q.4 Explain Co-relation - 9 marks (Any
                    3/5 × 3m) ({chapter.textbookExercises.coRelation.length} Qs)
                  </h4>
                  {expandedSection === "tb-corel" ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </button>
                {expandedSection === "tb-corel" && (
                  <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
                    {chapter.textbookExercises.coRelation.map(
                      (cr: any, idx: number) => {
                        const crId = `tb-corel-${idx}`;
                        const isRevealed = showAnswers[crId];
                        return (
                          <div
                            key={idx}
                            className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-4 rounded-xl border border-indigo-200 dark:border-indigo-800"
                          >
                            <p className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">
                              🔗 Explain co-relation: {cr.concepts}
                            </p>
                            <button
                              onClick={() => toggleAnswer(crId)}
                              className={`w-full py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 ${
                                isRevealed
                                  ? "bg-indigo-500 text-white"
                                  : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                              }`}
                            >
                              {isRevealed ? (
                                <EyeOff size={16} />
                              ) : (
                                <Eye size={16} />
                              )}
                              {isRevealed
                                ? "Hide Model Answer"
                                : "Show Model Answer"}
                            </button>
                            {isRevealed && (
                              <div className="mt-3 p-4 bg-white dark:bg-slate-800 rounded-lg text-sm max-h-[50vh] overflow-y-auto">
                                <MarkdownRenderer content={cr.modelAnswer} />
                              </div>
                            )}
                          </div>
                        );
                      },
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Opinion Questions */}
            {chapter.textbookExercises.opinionQuestions && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "tb-opinion" ? null : "tb-opinion",
                    )
                  }
                  className="w-full p-4 flex items-center justify-between bg-pink-50 dark:bg-pink-900/20"
                >
                  <h4 className="font-bold text-pink-800 dark:text-pink-200 flex items-center gap-2">
                    <FileText size={20} /> Q.5 Express Opinion - 12 marks (Any
                    3/5 × 4m) (
                    {chapter.textbookExercises.opinionQuestions.length} Qs)
                  </h4>
                  {expandedSection === "tb-opinion" ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </button>
                {expandedSection === "tb-opinion" && (
                  <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
                    {chapter.textbookExercises.opinionQuestions.map(
                      (oq: any, idx: number) => {
                        const oqId = `tb-opinion-${chapterKey}-${idx}`;
                        const isRevealed = showAnswers[oqId];
                        return (
                          <div
                            key={idx}
                            className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-4 rounded-xl border border-pink-200 dark:border-pink-800"
                          >
                            <p className="font-bold text-pink-800 dark:text-pink-200 mb-3">
                              💬 Express your opinion on: {oq.topic}
                            </p>
                            <button
                              onClick={() => toggleAnswer(oqId)}
                              className={`w-full py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 ${
                                isRevealed
                                  ? "bg-pink-500 text-white"
                                  : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                              }`}
                            >
                              {isRevealed ? (
                                <EyeOff size={16} />
                              ) : (
                                <Eye size={16} />
                              )}
                              {isRevealed
                                ? "Hide Model Answer"
                                : "Show Model Answer"}
                            </button>
                            {isRevealed && (
                              <div className="mt-3 p-4 bg-white dark:bg-slate-800 rounded-lg text-sm max-h-[50vh] overflow-y-auto">
                                <MarkdownRenderer content={oq.modelAnswer} />
                              </div>
                            )}
                          </div>
                        );
                      },
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Short Answers - 80-100 words */}
            {chapter.textbookExercises.shortAnswers && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "tb-short" ? null : "tb-short",
                    )
                  }
                  className="w-full p-4 flex items-center justify-between bg-cyan-50 dark:bg-cyan-900/20"
                >
                  <h4 className="font-bold text-cyan-800 dark:text-cyan-200 flex items-center gap-2">
                    <FileText size={20} /> Q.6 Answer (80-100 words) - 10 marks
                    (Any 2/4 × 5m) (
                    {chapter.textbookExercises.shortAnswers.length} Qs)
                  </h4>
                  {expandedSection === "tb-short" ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </button>
                {expandedSection === "tb-short" && (
                  <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
                    {chapter.textbookExercises.shortAnswers.map(
                      (sa: any, idx: number) => {
                        const saId = `tb-short-${chapterKey}-${idx}`;
                        const isRevealed = showAnswers[saId];
                        return (
                          <div
                            key={idx}
                            className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl"
                          >
                            <div className="flex items-start justify-between gap-2 mb-3">
                              <p className="font-bold text-slate-800 dark:text-white flex-1">
                                {sa.question}
                              </p>
                              <span className="text-xs bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 px-2 py-1 rounded shrink-0">
                                {sa.marks} marks
                              </span>
                            </div>
                            <button
                              onClick={() => toggleAnswer(saId)}
                              className={`w-full py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 ${
                                isRevealed
                                  ? "bg-cyan-500 text-white"
                                  : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                              }`}
                            >
                              {isRevealed ? (
                                <EyeOff size={16} />
                              ) : (
                                <Eye size={16} />
                              )}
                              {isRevealed
                                ? "Hide Model Answer"
                                : "Show Model Answer"}
                            </button>
                            {isRevealed && (
                              <div className="mt-3 p-4 bg-white dark:bg-slate-800 rounded-lg text-sm border border-cyan-200 dark:border-cyan-800 max-h-[50vh] overflow-y-auto">
                                <MarkdownRenderer content={sa.modelAnswer} />
                              </div>
                            )}
                          </div>
                        );
                      },
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Long Answers - 150-200 words */}
            {chapter.textbookExercises.longAnswers && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "tb-long" ? null : "tb-long",
                    )
                  }
                  className="w-full p-4 flex items-center justify-between bg-violet-50 dark:bg-violet-900/20"
                >
                  <h4 className="font-bold text-violet-800 dark:text-violet-200 flex items-center gap-2">
                    <BookOpen size={20} /> Q.7 Detail Answer (150-200 words) -
                    10 marks (Any 1/2 × 10m) (
                    {chapter.textbookExercises.longAnswers.length} Qs)
                  </h4>
                  {expandedSection === "tb-long" ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </button>
                {expandedSection === "tb-long" && (
                  <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
                    {chapter.textbookExercises.longAnswers.map(
                      (la: any, idx: number) => {
                        const laId = `tb-long-${chapterKey}-${idx}`;
                        const isRevealed = showAnswers[laId];
                        return (
                          <div
                            key={idx}
                            className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-4 rounded-xl border border-violet-200 dark:border-violet-800"
                          >
                            <div className="flex items-start justify-between gap-2 mb-3">
                              <p className="font-bold text-violet-800 dark:text-violet-200 flex-1">
                                {la.question}
                              </p>
                              <span className="text-xs bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300 px-2 py-1 rounded shrink-0">
                                {la.marks} marks
                              </span>
                            </div>
                            <button
                              onClick={() => toggleAnswer(laId)}
                              className={`w-full py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 ${
                                isRevealed
                                  ? "bg-violet-500 text-white"
                                  : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                              }`}
                            >
                              {isRevealed ? (
                                <EyeOff size={16} />
                              ) : (
                                <Eye size={16} />
                              )}
                              {isRevealed
                                ? "Hide Model Answer"
                                : "Show Model Answer 📝"}
                            </button>
                            {isRevealed && (
                              <div className="mt-3 p-4 bg-white dark:bg-slate-800 rounded-lg text-sm border border-violet-200 dark:border-violet-800 max-h-[60vh] overflow-y-auto">
                                <MarkdownRenderer content={la.modelAnswer} />
                              </div>
                            )}
                          </div>
                        );
                      },
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderMindFaces = () => {
    const mf = data.mindFacesTips;
    if (!mf) return <p className="p-4">Mind Faces tips not found</p>;

    return (
      <div className="space-y-4 p-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl p-4 text-white">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
              🧠
            </div>
            <div>
              <h3 className="font-black text-xl">Mind Faces Tips</h3>
              <p className="text-white/90 text-sm">{mf.source}</p>
              <p className="text-white/80 text-xs mt-1">{mf.note}</p>
            </div>
          </div>
        </div>

        {/* Paper Pattern Summary */}
        {mf.paperPattern && (
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-4 border border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
              📋 Paper Pattern ({mf.paperPattern.totalMarks} Marks •{" "}
              {mf.paperPattern.duration})
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {mf.paperPattern.questions.map((q: any, idx: number) => (
                <div
                  key={idx}
                  className="flex items-center justify-between bg-white dark:bg-slate-800 p-2 rounded-lg text-sm"
                >
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    {q.q}
                  </span>
                  <span className="text-slate-600 dark:text-slate-300 text-xs">
                    {q.breakdown}
                  </span>
                  <span className="font-bold text-slate-800 dark:text-white">
                    {q.marks}m
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Question Pattern Guide */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <button
            onClick={() =>
              setExpandedSection(
                expandedSection === "patterns" ? null : "patterns",
              )
            }
            className="w-full p-4 flex items-center justify-between bg-pink-50 dark:bg-pink-900/20"
          >
            <h4 className="font-bold text-pink-800 dark:text-pink-200 flex items-center gap-2">
              <FileText size={20} /> Question-wise Strategy (
              {mf.questionPatterns.length})
            </h4>
            {expandedSection === "patterns" ? (
              <ChevronDown size={20} />
            ) : (
              <ChevronRight size={20} />
            )}
          </button>
          {expandedSection === "patterns" && (
            <div className="p-4 space-y-3 max-h-[60vh] overflow-y-auto">
              {mf.questionPatterns.map((pattern: any, idx: number) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border-l-4 ${
                    pattern.priority === "high"
                      ? "bg-red-50 dark:bg-red-900/20 border-red-500"
                      : "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{pattern.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-slate-800 dark:text-white">
                            {pattern.question}
                          </span>
                          <span className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-slate-600 dark:text-slate-300">
                            {pattern.type}
                          </span>
                        </div>
                        {pattern.marks && (
                          <span className="text-xs font-bold bg-indigo-500 text-white px-2 py-1 rounded">
                            {pattern.marks}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                        💡 {pattern.tip}
                      </p>
                      {pattern.chapters && (
                        <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                          ✅ Chapters: {pattern.chapters.join(", ")}
                        </p>
                      )}
                      {pattern.skipChapters && (
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                          ❌ Skip Chapters: {pattern.skipChapters.join(", ")}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Chapter Strategy Matrix */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <button
            onClick={() =>
              setExpandedSection(expandedSection === "matrix" ? null : "matrix")
            }
            className="w-full p-4 flex items-center justify-between bg-blue-50 dark:bg-blue-900/20"
          >
            <h4 className="font-bold text-blue-800 dark:text-blue-200 flex items-center gap-2">
              <Target size={20} /> Chapter Strategy Matrix
            </h4>
            {expandedSection === "matrix" ? (
              <ChevronDown size={20} />
            ) : (
              <ChevronRight size={20} />
            )}
          </button>
          {expandedSection === "matrix" && (
            <div className="p-4 overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-700">
                    <th className="p-2 text-left text-slate-700 dark:text-slate-300">
                      Ch
                    </th>
                    <th className="p-2 text-center text-slate-700 dark:text-slate-300">
                      🗺️Map
                    </th>
                    <th className="p-2 text-center text-slate-700 dark:text-slate-300">
                      ✓✗T/F
                    </th>
                    <th className="p-2 text-center text-slate-700 dark:text-slate-300">
                      🔗CoRel
                    </th>
                    <th className="p-2 text-center text-slate-700 dark:text-slate-300">
                      💬Opin
                    </th>
                    <th className="p-2 text-center text-slate-700 dark:text-slate-300">
                      📚Long
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mf.chapterStrategy.map((ch: any, idx: number) => (
                    <tr
                      key={idx}
                      className="border-t border-slate-200 dark:border-slate-700"
                    >
                      <td className="p-2 font-bold text-slate-800 dark:text-white">
                        {ch.chapter}. {ch.name.slice(0, 10)}...
                      </td>
                      <td className="p-2 text-center">
                        {ch.conceptMap ? "✅" : "❌"}
                      </td>
                      <td className="p-2 text-center">
                        {ch.trueFalse ? "✅" : "❌"}
                      </td>
                      <td className="p-2 text-center">
                        {ch.coRelation ? "✅" : "❌"}
                      </td>
                      <td className="p-2 text-center">
                        {ch.opinion ? "✅" : "❌"}
                      </td>
                      <td className="p-2 text-center">
                        {ch.longAnswer ? "✅" : "❌"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4 space-y-2">
                {mf.chapterStrategy.map((ch: any, idx: number) => (
                  <div
                    key={idx}
                    className="bg-slate-50 dark:bg-slate-700 p-2 rounded-lg text-xs"
                  >
                    <span className="font-bold text-slate-800 dark:text-white">
                      Ch {ch.chapter}:
                    </span>{" "}
                    <span className="text-slate-600 dark:text-slate-300">
                      {ch.tip}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Probable Questions 80-100 Words */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <button
            onClick={() =>
              setExpandedSection(
                expandedSection === "probable" ? null : "probable",
              )
            }
            className="w-full p-4 flex items-center justify-between bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30"
          >
            <h4 className="font-bold text-orange-800 dark:text-orange-200 flex items-center gap-2">
              <Star size={20} className="text-yellow-500" /> Probable Questions
              (80-100 words) 🔥
            </h4>
            {expandedSection === "probable" ? (
              <ChevronDown size={20} />
            ) : (
              <ChevronRight size={20} />
            )}
          </button>
          {expandedSection === "probable" && (
            <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
              {mf.probableQuestions80to100.map((qa: any, idx: number) => {
                const qaId = `probable-${idx}`;
                const isRevealed = showAnswers[qaId];
                return (
                  <div
                    key={idx}
                    className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 rounded-xl border border-orange-200 dark:border-orange-800"
                  >
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex-1">
                        <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded font-bold">
                          Chapter {qa.chapter} - {qa.chapterName}
                        </span>
                        <p className="font-bold text-slate-800 dark:text-white mt-2">
                          {qa.question}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleAnswer(qaId)}
                      className={`w-full py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 mb-3 ${
                        isRevealed
                          ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                          : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {isRevealed ? <EyeOff size={16} /> : <Eye size={16} />}
                      {isRevealed
                        ? "Hide Model Answer"
                        : "Show Model Answer 📝"}
                    </button>
                    {isRevealed && (
                      <div className="text-sm bg-white dark:bg-slate-800 p-4 rounded-xl border border-orange-200 dark:border-orange-800">
                        <MarkdownRenderer content={qa.modelAnswer} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Quick Tips Box */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-4 text-white">
          <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
            <Zap size={20} /> Mind Faces Quick Tips
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
              <span>
                <strong>Q.1 (20m):</strong> MCQ + Pairs + Sentence + Concept +
                Odd-one - All from Textual!
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
              <span>
                <strong>Concept Map (4m):</strong> Only from Ch 1, 4, 5 -
                Practice drawing!
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
              <span>
                <strong>T/F (10m):</strong> 5×2m = Write T/F + Reason (Skip Ch
                2)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
              <span>
                <strong>Co-relation (9m):</strong> 3×3m - Skip Ch 3 & 5
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
              <span>
                <strong>Opinion (12m):</strong> 3×4m in 25-30 words (Skip Ch 4)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
              <span>
                <strong>Q.6 (10m):</strong> 2×5m in 80-100 words - Probable
                questions!
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
              <span>
                <strong>Q.7 (10m):</strong> 1×10m in 150-200 words - Only Ch
                1,2,3,5,6
              </span>
            </li>
          </ul>
        </div>
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
        {activeTab === "mindfaces" && renderMindFaces()}
        {activeTab === "lastmin" && renderLastMinute()}
      </div>

      {/* Bottom Navigation - Quick Chapter Jump */}
      <div className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-2 shrink-0 safe-area-bottom">
        <div className="flex justify-around">
          {tabs.slice(1, 8).map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setExpandedSection(null);
              }}
              className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold ${
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
