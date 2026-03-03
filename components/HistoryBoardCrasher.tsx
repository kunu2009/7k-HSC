import React, { useEffect, useState } from "react";
import {
  X,
  BookOpen,
  Clock,
  Target,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  AlertTriangle,
  Zap,
  FileText,
  Calculator,
  TrendingUp,
  Brain,
  ArrowLeft,
  Eye,
  EyeOff,
  BarChart3,
  Lightbulb,
  ClipboardList,
  Calendar,
  Globe,
  Maximize2,
} from "lucide-react";
import { HISTORY_BOARD_CRASHER } from "../data/historyBoardCrasher";

interface HistoryBoardCrasherProps {
  onClose: () => void;
}

type TabType =
  | "overview"
  | "imp2026"
  | "examday"
  | "ch1"
  | "ch2"
  | "ch3"
  | "ch4"
  | "ch5"
  | "ch6"
  | "ch7"
  | "ch8"
  | "ch9"
  | "ch10"
  | "ch11"
  | "ch12"
  | "lastmin";

const HistoryBoardCrasher: React.FC<HistoryBoardCrasherProps> = ({
  onClose,
}) => {
  const EXAM_DAY_CHECKLIST_STORAGE_KEY = "history-examday-top20-checklist-v1";
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [showAnswers, setShowAnswers] = useState<Record<string, boolean>>({});
  const [examDayChecklist, setExamDayChecklist] = useState<
    Record<string, boolean>
  >({});
  const [fullscreenContent, setFullscreenContent] = useState<{
    title: string;
    content: React.ReactNode;
  } | null>(null);

  const data = HISTORY_BOARD_CRASHER;

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
    {
      id: "imp2026",
      label: "🔥 Most IMP",
      shortLabel: "🔥",
      color: "bg-orange-600",
    },
    {
      id: "examday",
      label: "Exam Day",
      shortLabel: "🚀",
      color: "bg-rose-600",
    },
    { id: "ch1", label: "Renaissance", shortLabel: "1", color: "bg-slate-500" },
    {
      id: "ch2",
      label: "Colonialism",
      shortLabel: "2",
      color: "bg-purple-500",
    },
    {
      id: "ch3",
      label: "India & Colonial",
      shortLabel: "3",
      color: "bg-green-500",
    },
    { id: "ch4", label: "Marathas", shortLabel: "4", color: "bg-amber-500" },
    { id: "ch5", label: "Reforms", shortLabel: "5", color: "bg-pink-500" },
    { id: "ch6", label: "Freedom", shortLabel: "6", color: "bg-red-500" },
    {
      id: "ch7",
      label: "Decolonisation",
      shortLabel: "7",
      color: "bg-indigo-500",
    },
    { id: "ch8", label: "World Wars", shortLabel: "8", color: "bg-cyan-500" },
    {
      id: "ch9",
      label: "World Decol",
      shortLabel: "9",
      color: "bg-emerald-500",
    },
    { id: "ch10", label: "Cold War", shortLabel: "10", color: "bg-violet-500" },
    { id: "ch11", label: "India I", shortLabel: "11", color: "bg-lime-500" },
    {
      id: "ch12",
      label: "India II",
      shortLabel: "12",
      color: "bg-fuchsia-500",
    },
    {
      id: "lastmin",
      label: "Last Min",
      shortLabel: "⚡",
      color: "bg-yellow-500",
    },
  ];

  const toggleAnswer = (id: string) => {
    setShowAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleExamDayChecklist = (id: string) => {
    setExamDayChecklist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem(EXAM_DAY_CHECKLIST_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === "object") {
          setExamDayChecklist(parsed);
        }
      }
    } catch {
      setExamDayChecklist({});
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        EXAM_DAY_CHECKLIST_STORAGE_KEY,
        JSON.stringify(examDayChecklist),
      );
    } catch {}
  }, [examDayChecklist]);

  const renderTable = (markdownTable: string) => {
    const rows = markdownTable
      .trim()
      .split("\n")
      .filter((row) => row.trim() !== "");
    if (rows.length < 3)
      return (
        <div className="whitespace-pre-wrap font-mono text-xs">
          {markdownTable}
        </div>
      );

    const headers = rows[0]
      .split("|")
      .filter((cell) => cell.trim() !== "")
      .map((cell) => cell.trim());
    const dataRows = rows.slice(2).map((row) =>
      row
        .split("|")
        .filter((cell) => cell.trim() !== "")
        .map((cell) => cell.trim()),
    );

    return (
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr>
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="p-2 border-b border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-700/50 font-bold text-slate-700 dark:text-slate-300"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataRows.map((row, rIdx) => (
              <tr
                key={rIdx}
                className="border-b border-slate-100 dark:border-slate-800 last:border-0"
              >
                {row.map((cell, cIdx) => (
                  <td
                    key={cIdx}
                    className="p-2 text-slate-600 dark:text-slate-400 align-top"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderOverview = () => (
    <div className="space-y-4 p-4">
      {/* Exam Alert Banner - PROMINENT */}
      <div className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 rounded-2xl p-4 text-white shadow-lg ring-2 ring-red-400/50 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-950">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
            <AlertTriangle size={28} className="animate-pulse" />
          </div>
          <div>
            <h3 className="font-black text-xl">
              📜 History Exam — 9th March 2026
            </h3>
            <p className="text-white/90 text-sm">
              📅 6 Days Left • ⏰ 3:00 PM Shift • 80 Marks • Focus on Top 20 +
              Map + Timeline
            </p>
          </div>
        </div>
      </div>

      {/* Google Drive Resources - TOP PROMINENT */}
      <a
        href="https://drive.google.com/drive/folders/1FkbX7xVrG7zOpdn5a4FLD_9sbMPRDsLU?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-4 text-white hover:opacity-95 transition-opacity shadow-lg ring-2 ring-green-400/50 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-950"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
            📁
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg flex items-center gap-2">
              Google Drive — History Study Materials
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                PDFs
              </span>
            </h3>
            <p className="text-white/90 text-xs mt-0.5">
              Past Papers • Chapter Notes • Timeline PDFs • Map Work Practice •
              Important Questions
            </p>
          </div>
          <Globe size={24} className="shrink-0" />
        </div>
      </a>

      {/* Paper Pattern */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm">
        <h3 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
          <FileText size={20} className="text-blue-500" /> Paper Pattern (80
          Marks)
        </h3>
        <div className="space-y-2 text-sm">
          {[
            {
              q: "Q.1",
              type: "(A) MCQ + (B) Incorrect Pairs",
              marks: 10,
              detail: "6 MCQs (1m) + 4 pairs (1m)",
            },
            {
              q: "Q.2",
              type: "(A) Names + (B) Reasons",
              marks: 8,
              detail: "4 names (1m) + 4 reasons (1m)",
            },
            {
              q: "Q.3",
              type: "(A) Map + (B) Concept Maps",
              marks: 13,
              detail: "5 map Qs (1m) + Any 4 maps (2m)",
            },
            {
              q: "Q.4",
              type: "(A) Short Notes + (B) Reasons",
              marks: 15,
              detail: "Any 3 notes (2m) + 3 reasons (3m)",
            },
            {
              q: "Q.5",
              type: "State Your Opinion",
              marks: 9,
              detail: "Any 3/5 × 3 marks",
            },
            {
              q: "Q.6",
              type: "Answer in Detail",
              marks: 10,
              detail: "Any 2/3 × 5 marks",
            },
            {
              q: "Q.7",
              type: "Detail with Points",
              marks: 15,
              detail: "Any 3/5 × 5 marks",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-slate-50 dark:bg-slate-700 p-3 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded-lg flex items-center justify-center font-bold text-sm">
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

        {/* Important Note */}
        <div className="mt-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
          <p className="text-xs font-bold text-orange-800 dark:text-orange-200 mb-2">
            ⚠️ Key Strategy:
          </p>
          <ul className="text-xs text-orange-700 dark:text-orange-300 space-y-1">
            <li>
              • Q.1 = 10 marks: MCQs (6m) + Find incorrect pairs (4m) - 15 min
            </li>
            <li>
              • Q.3 (B) Concept Maps = 8 marks: Do ANY 4 out of 6 - very
              scoring!
            </li>
            <li>
              • Q.7 = 15 marks highest: Write 3 answers with given points (5m
              each)
            </li>
            <li>• Always mention dates, names, places for extra credibility</li>
          </ul>
        </div>
      </div>

      {/* Exam Tips */}
      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-4">
        <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 flex items-center gap-2">
          <Zap size={20} /> Exam Tips
        </h3>
        <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>
              <strong>Q.1 (B) Incorrect Pairs:</strong> Read carefully - find
              the INCORRECT pair and write the correct one (4 marks - easy
              scoring)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>
              <strong>Q.3 (A) Map Work (5m):</strong> Practice locating
              countries, cities, battle sites — answer briefly in one line
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>
              <strong>Q.3 (B) Concept Maps (8m):</strong> Complete ANY 4 out of
              6 given - social reformers, colonies, continents, cities
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>
              <strong>Q.7 (15m highest):</strong> Answer with given sub-points
              (a), (b), (c) - structured writing = full marks
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
            { q: "Q.1 (A+B) (10m)", time: "15 min" },
            { q: "Q.2 (A+B) (8m)", time: "12 min" },
            { q: "Q.3 (A) Map (5m)", time: "8 min" },
            { q: "Q.3 (B) Maps (8m)", time: "12 min" },
            { q: "Q.4 (A+B) (15m)", time: "25 min" },
            { q: "Q.5 Opinion (9m)", time: "15 min" },
            { q: "Q.6 Detail (10m)", time: "18 min" },
            { q: "Q.7 Points (15m)", time: "25 min" },
            { q: "Revision", time: "10 min" },
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
          Total: 140 min + 40 min buffer = 180 min (3 hours)
        </p>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm">
        <h3 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
          <Target size={20} className="text-green-500" /> Chapter Weightage (80
          Marks)
        </h3>
        <div className="space-y-2 text-xs">
          {[
            { ch: "1. Renaissance & Science", marks: "06", opt: "09", pct: 50 },
            { ch: "2. European Colonialism", marks: "06", opt: "09", pct: 50 },
            { ch: "3. India & Colonialism", marks: "06", opt: "09", pct: 50 },
            {
              ch: "4. Marathas & Colonialism",
              marks: "07",
              opt: "10",
              pct: 60,
            },
            { ch: "5. Social Reforms", marks: "07", opt: "10", pct: 60 },
            { ch: "6. Freedom Struggle", marks: "07", opt: "10", pct: 60 },
            { ch: "7. Decolonisation", marks: "07", opt: "10", pct: 60 },
            { ch: "8. World Wars", marks: "07", opt: "10", pct: 60 },
            { ch: "9. World Decolonisation", marks: "07", opt: "10", pct: 60 },
            { ch: "10. Cold War", marks: "07", opt: "10", pct: 60 },
            { ch: "11. India Transformed I", marks: "06", opt: "09", pct: 50 },
            { ch: "12. India Transformed II", marks: "07", opt: "10", pct: 60 },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-slate-700 dark:text-slate-300 flex-1">
                {item.ch}
              </span>
              <span className="font-bold text-slate-800 dark:text-white w-8 text-right">
                {item.marks}
              </span>
              <div className="w-16 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange-500 rounded-full"
                  style={{ width: `${item.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderImpQuestions = () => {
    const impData = (data as any).mostImportant2026;
    if (!impData) return <div className="p-4">Data not found</div>;

    const openFullscreen = (title: string, content: React.ReactNode) => {
      setFullscreenContent({ title, content });
    };

    return (
      <div className="space-y-4 p-4">
        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-4 text-white">
          <h3 className="font-black text-xl flex items-center gap-2">
            🔥 {impData.title}
          </h3>
          <p className="text-white/90 text-sm mt-1">
            Chapter-hotspot questions synthesized from PYQ-style board patterns
          </p>
        </div>

        {/* Q.2 (A) Identify Concepts */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <button
            onClick={() =>
              setExpandedSection(
                expandedSection === "imp-identify" ? null : "imp-identify",
              )
            }
            className="w-full p-4 flex items-center justify-between bg-purple-50 dark:bg-purple-900/20"
          >
            <h4 className="font-bold text-purple-800 dark:text-purple-200 flex items-center gap-2">
              💡 Q.2(A) Identify & Explain ({impData.identifyConcepts.length})
            </h4>
            {expandedSection === "imp-identify" ? (
              <ChevronDown size={20} />
            ) : (
              <ChevronRight size={20} />
            )}
          </button>
          {expandedSection === "imp-identify" && (
            <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
              {impData.identifyConcepts.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl relative group"
                >
                  <button
                    onClick={() =>
                      openFullscreen(
                        "Identify & Explain",
                        <div className="space-y-4">
                          <p className="text-lg font-medium text-slate-800 dark:text-white italic">
                            "{item.q}"
                          </p>
                          <div className="bg-purple-100 dark:bg-purple-900/30 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                            <p className="text-purple-800 dark:text-purple-200 font-bold text-xl mb-2">
                              Concept: {item.concept}
                            </p>
                            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                              {item.explanation}
                            </p>
                          </div>
                        </div>,
                      )
                    }
                    className="absolute top-2 right-2 p-2 bg-white/50 dark:bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Maximize2 size={16} />
                  </button>
                  <p className="text-sm font-medium text-slate-800 dark:text-white mb-2 italic pr-8">
                    "{item.q}"
                  </p>
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg border border-purple-200 dark:border-purple-800">
                    <p className="text-purple-800 dark:text-purple-200 font-bold text-sm mb-1">
                      Concept: {item.concept}
                    </p>
                    <p className="text-xs text-slate-700 dark:text-slate-300">
                      {item.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Q.4 Agree/Disagree */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <button
            onClick={() =>
              setExpandedSection(
                expandedSection === "imp-agree" ? null : "imp-agree",
              )
            }
            className="w-full p-4 flex items-center justify-between bg-amber-50 dark:bg-amber-900/20"
          >
            <h4 className="font-bold text-amber-800 dark:text-amber-200 flex items-center gap-2">
              ✅❌ Q.4 Agree/Disagree ({impData.agreeDisagree.length})
            </h4>
            {expandedSection === "imp-agree" ? (
              <ChevronDown size={20} />
            ) : (
              <ChevronRight size={20} />
            )}
          </button>
          {expandedSection === "imp-agree" && (
            <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
              {impData.agreeDisagree.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl relative group"
                >
                  <button
                    onClick={() =>
                      openFullscreen(
                        "Agree or Disagree",
                        <div className="space-y-4">
                          <p className="text-xl font-bold text-slate-800 dark:text-white">
                            "{item.q}"
                          </p>
                          <div
                            className={`text-sm font-bold px-3 py-1.5 rounded-lg inline-block ${item.agree ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                          >
                            {item.agree
                              ? "✅ Yes, I Agree"
                              : "❌ No, I Disagree"}
                          </div>
                          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl text-base text-slate-700 dark:text-slate-300 whitespace-pre-wrap border border-slate-200 dark:border-slate-700 leading-relaxed">
                            {item.reason}
                          </div>
                        </div>,
                      )
                    }
                    className="absolute top-2 right-2 p-2 bg-white/50 dark:bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Maximize2 size={16} />
                  </button>
                  <p className="text-sm font-bold text-slate-800 dark:text-white mb-2 pr-8">
                    "{item.q}"
                  </p>
                  <div
                    className={`text-xs font-bold px-2 py-1 rounded inline-block mb-2 ${item.agree ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                  >
                    {item.agree ? "✅ Yes, I Agree" : "❌ No, I Disagree"}
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-lg text-xs text-slate-600 dark:text-slate-300 whitespace-pre-wrap border border-slate-200 dark:border-slate-700">
                    {item.reason}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Q.2 (B) Distinguish Between */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <button
            onClick={() =>
              setExpandedSection(
                expandedSection === "imp-distinguish"
                  ? null
                  : "imp-distinguish",
              )
            }
            className="w-full p-4 flex items-center justify-between bg-blue-50 dark:bg-blue-900/20"
          >
            <h4 className="font-bold text-blue-800 dark:text-blue-200 flex items-center gap-2">
              📊 Q.2(B) Distinguish Between ({impData.distinguishBetween.length}
              )
            </h4>
            {expandedSection === "imp-distinguish" ? (
              <ChevronDown size={20} />
            ) : (
              <ChevronRight size={20} />
            )}
          </button>
          {expandedSection === "imp-distinguish" && (
            <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
              {impData.distinguishBetween.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl relative group"
                >
                  <button
                    onClick={() =>
                      openFullscreen(
                        "Distinguish Between",
                        <div className="space-y-4">
                          <p className="text-xl font-bold text-slate-800 dark:text-white mb-4">
                            {item.q}
                          </p>
                          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-blue-200 dark:border-blue-800 overflow-x-auto text-base">
                            {renderTable(item.answer)}
                          </div>
                        </div>,
                      )
                    }
                    className="absolute top-2 right-2 p-2 bg-white/50 dark:bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Maximize2 size={16} />
                  </button>
                  <p className="text-sm font-bold text-slate-800 dark:text-white mb-2 pr-8">
                    {item.q}
                  </p>
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-blue-200 dark:border-blue-800 overflow-x-auto">
                    {renderTable(item.answer)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderChapter = (chapterKey: string) => {
    const chapter = data[chapterKey as keyof typeof data] as any;
    if (!chapter) return null;

    return (
      <div className="space-y-4 p-4">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-4 text-white">
          <h3 className="font-bold text-xl">{chapter.title}</h3>
          <p className="text-white/80 text-sm mt-1">
            Weightage: {chapter.weightage}
          </p>
        </div>

        {/* Shortcodes */}
        {chapter.shortcodes && (
          <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-2xl p-4">
            <h4 className="font-bold text-violet-800 dark:text-violet-200 mb-2 flex items-center gap-2">
              <Brain size={18} /> Mnemonics
            </h4>
            <div className="space-y-2">
              {chapter.shortcodes.map((sc: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800 p-3 rounded-xl"
                >
                  <span className="font-black text-violet-600 dark:text-violet-400 block mb-1">
                    {sc.code}
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    {sc.breakdown}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Concepts */}
        {chapter.mustKnowConcepts && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-white mb-3">
              Key Concepts
            </h4>
            <div className="space-y-3">
              {chapter.mustKnowConcepts.map((c: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-700 p-3 rounded-xl"
                >
                  <p className="font-bold text-slate-800 dark:text-white text-sm">
                    {c.term}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {c.definition}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Timeline Drills */}
        {chapter.timelineDrills && chapter.timelineDrills.length > 0 && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
              <Calendar size={18} className="text-blue-500" /> Timeline Drill
            </h4>
            <div className="space-y-3">
              {chapter.timelineDrills.map((item: any, idx: number) => {
                const revealId = `timeline-${chapterKey}-${idx}`;
                const shown = !!showAnswers[revealId];
                return (
                  <div
                    key={idx}
                    className="bg-slate-50 dark:bg-slate-700 p-3 rounded-xl"
                  >
                    <p className="text-sm text-slate-800 dark:text-white font-medium mb-2">
                      {item.prompt}
                    </p>
                    <button
                      onClick={() => toggleAnswer(revealId)}
                      className={`w-full py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 ${
                        shown
                          ? "bg-blue-500 text-white"
                          : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {shown ? <EyeOff size={14} /> : <Eye size={14} />}
                      {shown ? "Hide Order" : "Show Order"}
                    </button>
                    {shown && (
                      <p className="text-xs text-slate-700 dark:text-slate-300 mt-2 whitespace-pre-wrap">
                        {item.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Map Practice */}
        {chapter.mapPractice && chapter.mapPractice.length > 0 && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
              <Globe size={18} className="text-emerald-500" /> Map Practice
            </h4>
            <div className="space-y-3">
              {chapter.mapPractice.map((item: any, idx: number) => {
                const revealId = `map-${chapterKey}-${idx}`;
                const shown = !!showAnswers[revealId];
                return (
                  <div
                    key={idx}
                    className="bg-slate-50 dark:bg-slate-700 p-3 rounded-xl"
                  >
                    <p className="text-sm text-slate-800 dark:text-white font-medium mb-2">
                      {item.prompt}
                    </p>
                    <button
                      onClick={() => toggleAnswer(revealId)}
                      className={`w-full py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 ${
                        shown
                          ? "bg-emerald-500 text-white"
                          : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {shown ? <EyeOff size={14} /> : <Eye size={14} />}
                      {shown ? "Hide Map Answer" : "Show Map Answer"}
                    </button>
                    {shown && (
                      <p className="text-xs text-slate-700 dark:text-slate-300 mt-2 whitespace-pre-wrap">
                        {item.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Questions */}
        {["pyqMCQs", "pyqShortAnswers", "pyqLongAnswers"].map((section) => {
          const questions = chapter[section];
          if (!questions) return null;

          return (
            <div
              key={section}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() =>
                  setExpandedSection(
                    expandedSection === section ? null : section,
                  )
                }
                className="w-full p-4 flex items-center justify-between bg-slate-50 dark:bg-slate-700/50"
              >
                <h4 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                  <FileText size={18} />
                  {section === "pyqMCQs"
                    ? "MCQs"
                    : section === "pyqShortAnswers"
                      ? "Short Answers"
                      : "Long Answers"}
                </h4>
                {expandedSection === section ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
              </button>
              {expandedSection === section && (
                <div className="p-4 space-y-4">
                  {questions.map((q: any, idx: number) => (
                    <div
                      key={idx}
                      className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl"
                    >
                      <p className="font-medium text-slate-800 dark:text-white text-sm mb-2">
                        {q.q}
                      </p>
                      {section === "pyqMCQs" && (
                        <div className="grid grid-cols-2 gap-2 mb-2">
                          {q.options.map((opt: string, i: number) => (
                            <div
                              key={i}
                              className={`p-2 rounded text-xs ${i === q.correct ? "bg-green-100 text-green-800 font-bold" : "bg-white dark:bg-slate-600"}`}
                            >
                              {opt}
                            </div>
                          ))}
                        </div>
                      )}
                      {q.modelAnswer &&
                        section !== "pyqMCQs" &&
                        (() => {
                          const answerId = `${chapterKey}-${section}-${idx}`;
                          const isRevealed = !!showAnswers[answerId];
                          return (
                            <div className="mt-2">
                              <button
                                onClick={() => toggleAnswer(answerId)}
                                className={`w-full py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2 ${
                                  isRevealed
                                    ? "bg-indigo-500 text-white"
                                    : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                                }`}
                              >
                                {isRevealed ? (
                                  <EyeOff size={14} />
                                ) : (
                                  <Eye size={14} />
                                )}
                                {isRevealed
                                  ? "Hide Model Answer"
                                  : "Show Model Answer"}
                              </button>
                              {isRevealed && (
                                <div className="mt-2 bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-600">
                                  <p className="text-xs text-slate-600 dark:text-slate-300 whitespace-pre-wrap">
                                    {q.modelAnswer}
                                  </p>
                                </div>
                              )}
                            </div>
                          );
                        })()}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Textbook Exercises */}
        {chapter.textbookExercises && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 text-white">
              <h3 className="font-bold text-lg flex items-center gap-2">
                📚 {chapter.textbookExercises.title}
              </h3>
              <p className="text-white/80 text-sm mt-1">
                Complete Maharashtra Board textbook questions with answers
              </p>
            </div>

            {[
              {
                key: "mcqs",
                title: "Q.1(A) Choose Correct Alternative",
                color: "bg-green-50 dark:bg-green-900/20",
              },
              {
                key: "incorrectPairs",
                title: "Q.1(B) Find Incorrect Pair",
                color: "bg-red-50 dark:bg-red-900/20",
              },
              {
                key: "names",
                title: "Q.2 Write Names of Historical Places/Persons/Events",
                color: "bg-blue-50 dark:bg-blue-900/20",
              },
              {
                key: "conceptMaps",
                title: "Q.3 Complete Concept Maps",
                color: "bg-purple-50 dark:bg-purple-900/20",
              },
              {
                key: "shortNotes",
                title: "Q.4 Write Short Notes",
                color: "bg-orange-50 dark:bg-orange-900/20",
              },
              {
                key: "explainReasons",
                title: "Q.5 Explain with Reasons",
                color: "bg-amber-50 dark:bg-amber-900/20",
              },
              {
                key: "opinions",
                title: "Q.6 State Your Opinion",
                color: "bg-cyan-50 dark:bg-cyan-900/20",
              },
              {
                key: "longAnswers",
                title: "Q.7 Answer in Detail",
                color: "bg-red-50 dark:bg-red-900/20",
              },
            ].map((sec) => {
              const items = chapter.textbookExercises[sec.key];
              if (!items || items.length === 0) return null;
              const expandKey = `tb-${chapterKey}-${sec.key}`;
              return (
                <div
                  key={sec.key}
                  className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() =>
                      setExpandedSection(
                        expandedSection === expandKey ? null : expandKey,
                      )
                    }
                    className={`w-full p-4 flex items-center justify-between ${sec.color}`}
                  >
                    <h4 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                      <FileText size={18} /> {sec.title} ({items.length})
                    </h4>
                    {expandedSection === expandKey ? (
                      <ChevronDown size={18} />
                    ) : (
                      <ChevronRight size={18} />
                    )}
                  </button>
                  {expandedSection === expandKey && (
                    <div className="p-4 space-y-4 max-h-[65vh] overflow-y-auto">
                      {items.map((item: any, idx: number) => {
                        const revealId = `tb-${chapterKey}-${sec.key}-${idx}`;
                        const shown = !!showAnswers[revealId];
                        return (
                          <div
                            key={idx}
                            className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl"
                          >
                            <p className="font-medium text-slate-800 dark:text-white text-sm mb-3">
                              {item.q || item.question || item.statement}
                            </p>

                            {sec.key === "mcqs" && item.options && (
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                                {item.options.map((opt: string, i: number) => (
                                  <div
                                    key={i}
                                    className={`p-2 rounded text-xs ${shown && i === item.correct ? "bg-green-100 text-green-800 font-bold border border-green-400" : "bg-white dark:bg-slate-600 text-slate-700 dark:text-slate-300"}`}
                                  >
                                    {opt}
                                  </div>
                                ))}
                              </div>
                            )}

                            {sec.key === "incorrectPairs" && item.pairs && (
                              <div className="mb-3 space-y-2">
                                {item.pairs.map((pair: any, pIdx: number) => (
                                  <div
                                    key={pIdx}
                                    className={`p-2 rounded text-xs flex items-center justify-between ${
                                      shown && !pair.isCorrect
                                        ? "bg-red-100 text-red-800 border border-red-400"
                                        : "bg-white dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                                    }`}
                                  >
                                    <span>
                                      {pair.groupA} — {pair.groupB}
                                    </span>
                                    {shown && !pair.isCorrect && (
                                      <span className="text-xs font-bold">
                                        ❌
                                      </span>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}

                            <button
                              onClick={() => toggleAnswer(revealId)}
                              className={`w-full py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2 ${
                                shown
                                  ? "bg-indigo-500 text-white"
                                  : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"
                              }`}
                            >
                              {shown ? <EyeOff size={14} /> : <Eye size={14} />}
                              {shown ? "Hide Answer" : "Show Answer"}
                            </button>

                            {shown && (
                              <div className="mt-3 bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-600">
                                <p className="text-xs text-slate-600 dark:text-slate-300 whitespace-pre-wrap">
                                  {item.answer ||
                                    item.explanation ||
                                    "No answer provided"}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Additional Info Section */}
            {chapter.textbookExercises.additionalInfo && (
              <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-4">
                <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">
                  📖 Additional Context from Textbook
                </h4>
                <div className="space-y-3 text-sm text-indigo-700 dark:text-indigo-300">
                  {chapter.textbookExercises.additionalInfo.tryToDo && (
                    <div>
                      <p className="font-semibold mb-1">Try to do this:</p>
                      <p className="text-xs whitespace-pre-wrap">
                        {chapter.textbookExercises.additionalInfo.tryToDo}
                      </p>
                    </div>
                  )}
                  {chapter.textbookExercises.additionalInfo.tryToDo1 && (
                    <div>
                      <p className="font-semibold mb-1">Try to do this (1):</p>
                      <p className="text-xs whitespace-pre-wrap">
                        {chapter.textbookExercises.additionalInfo.tryToDo1}
                      </p>
                    </div>
                  )}
                  {chapter.textbookExercises.additionalInfo.tryToDo2 && (
                    <div>
                      <p className="font-semibold mb-1">Try to do this (2):</p>
                      <p className="text-xs whitespace-pre-wrap">
                        {chapter.textbookExercises.additionalInfo.tryToDo2}
                      </p>
                    </div>
                  )}
                  {chapter.textbookExercises.additionalInfo.tryToDo3 && (
                    <div>
                      <p className="font-semibold mb-1">Try to do this (3):</p>
                      <p className="text-xs whitespace-pre-wrap">
                        {chapter.textbookExercises.additionalInfo.tryToDo3}
                      </p>
                    </div>
                  )}
                  {chapter.textbookExercises.additionalInfo.findItOut && (
                    <div>
                      <p className="font-semibold mb-1">Find it out:</p>
                      <p className="text-xs whitespace-pre-wrap">
                        {chapter.textbookExercises.additionalInfo.findItOut}
                      </p>
                    </div>
                  )}
                  {chapter.textbookExercises.additionalInfo.project && (
                    <div>
                      <p className="font-semibold mb-1">Project:</p>
                      <p className="text-xs whitespace-pre-wrap">
                        {chapter.textbookExercises.additionalInfo.project}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderExamDay = () => {
    const examData = (data as any).examDayMode;
    if (!examData)
      return <div className="p-4">Exam day mode data not found</div>;

    return (
      <div className="space-y-4 p-4">
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-4 text-white">
          <h3 className="font-black text-xl">🚀 {examData.title}</h3>
          <p className="text-white/90 text-sm mt-1">{examData.subtitle}</p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-4">
          <h4 className="font-bold text-slate-800 dark:text-white mb-3">
            🎯 Top 20 Expected Questions
          </h4>
          <div className="space-y-2">
            {examData.top20Questions.map((q: any, idx: number) => {
              const checkId = `examday-${idx}`;
              const checked = !!examDayChecklist[checkId];
              return (
                <div
                  key={idx}
                  className={`flex items-start gap-3 p-3 rounded-xl ${
                    checked
                      ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                      : "bg-slate-50 dark:bg-slate-700"
                  }`}
                >
                  <button
                    onClick={() => toggleExamDayChecklist(checkId)}
                    className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center shrink-0 ${
                      checked
                        ? "bg-green-500 text-white"
                        : "bg-slate-200 dark:bg-slate-600"
                    }`}
                  >
                    {checked && <CheckCircle2 size={14} />}
                  </button>
                  <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">
                    {idx + 1}.
                  </span>
                  <div className="flex-1">
                    <p className="text-sm text-slate-800 dark:text-white">
                      {q.q}
                    </p>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Ch {q.chapter}
                    </span>
                  </div>
                  <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded text-xs font-bold">
                    {q.marks}m
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-4">
          <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">
            📅 Timeline Rapid Revision
          </h4>
          <div className="space-y-2">
            {examData.timelineRapid.map((item: string, idx: number) => (
              <p key={idx} className="text-sm text-blue-700 dark:text-blue-300">
                • {item}
              </p>
            ))}
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-4">
          <h4 className="font-bold text-green-800 dark:text-green-200 mb-3">
            🗺️ Map Work Rapid Practice
          </h4>
          <div className="space-y-2">
            {examData.mapRapid.map((item: string, idx: number) => (
              <p
                key={idx}
                className="text-sm text-green-700 dark:text-green-300"
              >
                • {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderLastMinute = () => {
    const lastMinData = (data as any).lastMinutePoints;
    const allShortcodes = (data as any).allShortcodes || [];
    const recurringMCQs = (data as any).recurringMCQs || [];
    const mostProbable = (data as any).mostProbable8Markers || [];

    return (
      <div className="space-y-4 p-4">
        <div className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl p-4 text-white">
          <h3 className="font-black text-xl">⚡ Last Minute Revision</h3>
          <p className="text-white/90 text-sm mt-1">
            Quick revision before exam hall
          </p>
        </div>

        {allShortcodes.length > 0 && (
          <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 border-2 border-violet-300 dark:border-violet-700 rounded-2xl p-4">
            <h3 className="font-bold text-violet-800 dark:text-violet-200 mb-3 flex items-center gap-2">
              <Brain size={20} />
              🧠 ALL MNEMONICS — Master These!
            </h3>
            <div className="space-y-2">
              {allShortcodes.map((item: any, idx: number) => (
                <div key={idx} className={`${item.color} rounded-xl p-3`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-black text-lg text-slate-800 dark:text-white tracking-wider">
                      {item.code}
                    </span>
                    <span className="text-xs bg-white dark:bg-slate-600 px-2 py-0.5 rounded-full text-slate-600 dark:text-slate-300 font-medium">
                      {item.ch}
                    </span>
                  </div>
                  <p className="font-bold text-slate-700 dark:text-slate-200 text-sm">
                    {item.topic}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {item.breakdown}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {mostProbable.length > 0 && (
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-300 dark:border-red-800 rounded-2xl p-4">
            <h3 className="font-bold text-red-800 dark:text-red-200 mb-1 flex items-center gap-2">
              <AlertTriangle size={20} className="animate-pulse" />
              HIGHEST PROBABILITY for Q.4 (8 Marks Each)
            </h3>
            <div className="space-y-3 mt-3">
              {mostProbable.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800 rounded-xl p-3 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-2 h-full min-h-[60px] ${item.color} rounded-full shrink-0`}
                    ></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-slate-800 dark:text-white text-sm">
                          {item.topic}
                        </h4>
                        <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-0.5 rounded text-xs font-bold shrink-0">
                          {item.pct}%
                        </span>
                      </div>
                      {item.shortcode !== "—" && (
                        <span className="inline-block mt-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 px-2 py-0.5 rounded text-xs font-black tracking-wider">
                          {item.shortcode}
                        </span>
                      )}
                      <p className="text-xs text-green-600 dark:text-green-400 mt-1 font-medium">
                        📌 {item.reason}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {recurringMCQs.length > 0 && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm">
            <h3 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
              <BarChart3 size={20} className="text-blue-500" />
              Recurring MCQ Concepts (EVERY YEAR)
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {recurringMCQs.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-xl"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {item.concept}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      → {item.answer}
                    </p>
                  </div>
                  <span className="text-yellow-500 text-sm font-bold ml-2">
                    {item.frequency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-4">
          <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">
            📅 Important Dates - MUST MEMORIZE
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {lastMinData.importantDates.map((date: string, idx: number) => (
              <p
                key={idx}
                className="text-xs text-blue-700 dark:text-blue-300 bg-white dark:bg-slate-800 p-2 rounded"
              >
                • {date}
              </p>
            ))}
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-4">
          <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">
            👤 Important Persons
          </h4>
          <div className="space-y-2">
            {lastMinData.importantPersons.map((person: string, idx: number) => (
              <p
                key={idx}
                className="text-sm text-purple-700 dark:text-purple-300"
              >
                • {person}
              </p>
            ))}
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-4">
          <h4 className="font-bold text-amber-800 dark:text-amber-200 mb-3">
            💡 Exam Hall Tips
          </h4>
          <div className="space-y-2">
            {lastMinData.examTips.map((tip: string, idx: number) => (
              <p
                key={idx}
                className="text-sm text-amber-700 dark:text-amber-300"
              >
                ✅ {tip}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2">
      <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-7xl h-[95vh] shadow-2xl flex flex-col overflow-hidden">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 shrink-0 safe-area-top">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <button
                onClick={onClose}
                className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition text-white shrink-0"
              >
                <X size={24} />
              </button>
              <div className="min-w-0 flex-1">
                <h2 className="text-xl font-black text-white truncate">
                  📜 History Board Crasher
                </h2>
                <p className="text-xs text-white/80">
                  Exam: 9 Mar • 6 Days Left • All PYQs + Timeline + Map
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex overflow-x-auto no-scrollbar p-2 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setExpandedSection(null);
                }}
                className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition shrink-0 ${
                  activeTab === tab.id
                    ? `${tab.color} text-white shadow-lg`
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                }`}
              >
                {tab.shortLabel}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pb-safe">
          {activeTab === "overview" && renderOverview()}
          {activeTab === "imp2026" && renderImpQuestions()}
          {activeTab === "examday" && renderExamDay()}
          {activeTab === "ch1" && renderChapter("chapter1")}
          {activeTab === "ch2" && renderChapter("chapter2")}
          {activeTab === "ch3" && renderChapter("chapter3")}
          {activeTab === "ch4" && renderChapter("chapter4")}
          {activeTab === "ch5" && renderChapter("chapter5")}
          {activeTab === "ch6" && renderChapter("chapter6")}
          {activeTab === "ch7" && renderChapter("chapter7")}
          {activeTab === "ch8" && renderChapter("chapter8")}
          {activeTab === "ch9" && renderChapter("chapter9")}
          {activeTab === "ch10" && renderChapter("chapter10")}
          {activeTab === "ch11" && renderChapter("chapter11")}
          {activeTab === "ch12" && renderChapter("chapter12")}
          {activeTab === "lastmin" && renderLastMinute()}
        </div>

        <div className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-2 shrink-0 safe-area-bottom">
          <div className="flex justify-around">
            {[
              { id: "examday" as TabType, icon: "🚀", label: "Exam Day" },
              { id: "imp2026" as TabType, icon: "🔥", label: "Most IMP" },
              { id: "ch6" as TabType, icon: "🇮🇳", label: "Freedom" },
              { id: "ch8" as TabType, icon: "⚔️", label: "WWs" },
              { id: "lastmin" as TabType, icon: "⚡", label: "Last Min" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setExpandedSection(null);
                }}
                className={`flex flex-col items-center px-2 py-1 rounded-lg ${
                  activeTab === item.id
                    ? "bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400"
                    : "text-slate-500 dark:text-slate-400"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-[10px] font-bold">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {fullscreenContent && (
          <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-gradient-to-r from-orange-600 to-red-600 p-4 flex items-center justify-between">
                <h3 className="font-bold text-white text-lg">
                  {fullscreenContent.title}
                </h3>
                <button
                  onClick={() => setFullscreenContent(null)}
                  className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition text-white"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6">{fullscreenContent.content}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryBoardCrasher;
