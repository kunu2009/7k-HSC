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
  | "ch1"
  | "ch2"
  | "ch3"
  | "ch4"
  | "ch5"
  | "ch6"
  | "ch7"
  | "lastmin";

const HistoryBoardCrasher: React.FC<HistoryBoardCrasherProps> = ({
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [showAnswers, setShowAnswers] = useState<Record<string, boolean>>({});
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
    { id: "ch1", label: "Renaissance", shortLabel: "1", color: "bg-slate-500" },
    { id: "ch2", label: "Colonialism", shortLabel: "2", color: "bg-purple-500" },
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
      <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-4 text-white">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
            <TrendingUp size={28} />
          </div>
          <div>
            <h3 className="font-black text-xl">History Board Crasher</h3>
            <p className="text-white/90 text-sm">
              Complete Prep: Important Questions, PYQs & Key Dates
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm">
        <h3 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
          <Target size={20} className="text-green-500" /> Chapter Weightage (80 Marks)
        </h3>
        <div className="space-y-2 text-xs">
          {[
            { ch: "1. Renaissance & Science", marks: "06", opt: "09", pct: 50 },
            { ch: "2. European Colonialism", marks: "06", opt: "09", pct: 50 },
            { ch: "3. India & Colonialism", marks: "06", opt: "09", pct: 50 },
            { ch: "4. Marathas & Colonialism", marks: "07", opt: "10", pct: 60 },
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
              <span className="text-slate-700 dark:text-slate-300 flex-1">{item.ch}</span>
              <span className="font-bold text-slate-800 dark:text-white w-8 text-right">{item.marks}</span>
              <div className="w-16 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 rounded-full" style={{ width: `${item.pct}%` }} />
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
            Highly probable questions for 2026 Board Exam
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
                            {item.agree ? "✅ Yes, I Agree" : "❌ No, I Disagree"}
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
              📊 Q.2(B) Distinguish Between ({impData.distinguishBetween.length})
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
          <p className="text-white/80 text-sm mt-1">Weightage: {chapter.weightage}</p>
        </div>

        {/* Shortcodes */}
        {chapter.shortcodes && (
          <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-2xl p-4">
            <h4 className="font-bold text-violet-800 dark:text-violet-200 mb-2 flex items-center gap-2">
              <Brain size={18} /> Mnemonics
            </h4>
            <div className="space-y-2">
              {chapter.shortcodes.map((sc: any, idx: number) => (
                <div key={idx} className="bg-white dark:bg-slate-800 p-3 rounded-xl">
                  <span className="font-black text-violet-600 dark:text-violet-400 block mb-1">{sc.code}</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">{sc.breakdown}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Concepts */}
        {chapter.mustKnowConcepts && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-white mb-3">Key Concepts</h4>
            <div className="space-y-3">
              {chapter.mustKnowConcepts.map((c: any, idx: number) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-700 p-3 rounded-xl">
                  <p className="font-bold text-slate-800 dark:text-white text-sm">{c.term}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{c.definition}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Questions */}
        {['pyqMCQs', 'pyqShortAnswers', 'pyqLongAnswers'].map((section) => {
          const questions = chapter[section];
          if (!questions) return null;

          return (
            <div key={section} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => setExpandedSection(expandedSection === section ? null : section)}
                className="w-full p-4 flex items-center justify-between bg-slate-50 dark:bg-slate-700/50"
              >
                <h4 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
                  <FileText size={18} />
                  {section === 'pyqMCQs' ? 'MCQs' : section === 'pyqShortAnswers' ? 'Short Answers' : 'Long Answers'}
                </h4>
                {expandedSection === section ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
              </button>
              {expandedSection === section && (
                <div className="p-4 space-y-4">
                  {questions.map((q: any, idx: number) => (
                    <div key={idx} className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl">
                      <p className="font-medium text-slate-800 dark:text-white text-sm mb-2">{q.q}</p>
                      {section === 'pyqMCQs' && (
                        <div className="grid grid-cols-2 gap-2 mb-2">
                          {q.options.map((opt: string, i: number) => (
                            <div key={i} className={`p-2 rounded text-xs ${i === q.correct ? 'bg-green-100 text-green-800 font-bold' : 'bg-white dark:bg-slate-600'}`}>
                              {opt}
                            </div>
                          ))}
                        </div>
                      )}
                      {q.modelAnswer && (
                        <div className="mt-2 bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-600">
                          <p className="text-xs text-slate-600 dark:text-slate-300 whitespace-pre-wrap">{q.modelAnswer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const renderLastMin = () => {
    const lastMin = data.lastMinutePoints;
    return (
      <div className="space-y-4 p-4">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm">
          <h4 className="font-bold text-slate-800 dark:text-white mb-3">Key Dates</h4>
          <div className="space-y-2">
            {lastMin.importantDates.map((d, i) => (
              <div key={i} className="text-xs bg-slate-50 dark:bg-slate-700 p-2 rounded flex gap-2">
                <span className="font-bold text-blue-600">{d.split('-')[0]}</span>
                <span className="text-slate-600 dark:text-slate-300">{d.split('-')[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-slate-100 dark:bg-slate-950 z-50 flex flex-col">
      {fullscreenContent && (
        <div className="fixed inset-0 z-[60] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/50">
              <h3 className="font-bold text-lg text-slate-800 dark:text-white">
                {fullscreenContent.title}
              </h3>
              <button
                onClick={() => setFullscreenContent(null)}
                className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              {fullscreenContent.content}
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 p-4 text-white shrink-0 safe-area-top">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-black">📜 History</h1>
            <p className="text-white/80 text-xs">
              Board Exam Crasher • 27 Feb 2026
            </p>
          </div>
          <div className="bg-orange-800 px-3 py-1 rounded-full text-xs font-bold">
            7 DAYS
          </div>
        </div>
      </div>

      {/* Tabs */}
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

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-safe">
        {activeTab === "overview" && renderOverview()}
        {activeTab === "imp2026" && renderImpQuestions()}
        {activeTab === "ch1" && renderChapter("chapter1")}
        {activeTab === "ch2" && renderChapter("chapter2")}
        {activeTab === "lastmin" && renderLastMin()}
      </div>
    </div>
  );
};

export default HistoryBoardCrasher;
