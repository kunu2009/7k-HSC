import React, { useEffect, useMemo, useState } from "react";
import {
  X,
  BookOpen,
  Clock,
  MapPin,
  Users,
  Globe,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  AlertTriangle,
  Trophy,
  CalendarDays,
  Search,
  ExternalLink,
} from "lucide-react";
import { HIS_SUBJECT } from "../data/history";
import { getSubjectBoardExamDate } from "../examTimetable";
import { Stream } from "../types";

interface HistoryStudyHubProps {
  onClose: () => void;
}

const HistoryStudyHub: React.FC<HistoryStudyHubProps> = ({ onClose }) => {
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<
    "chapters" | "exam-tips" | "quick-facts" | "exam-sprint" | "resources"
  >("chapters");
  const [materialSearchQuery, setMaterialSearchQuery] = useState(
    "Maharashtra HSC Class 12 History",
  );
  const historyExamDate = useMemo(
    () => getSubjectBoardExamDate(Stream.ARTS, "his"),
    [],
  );
  const daysUntilExam = useMemo(() => {
    if (!historyExamDate) return null;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const examDay = new Date(historyExamDate);
    examDay.setHours(0, 0, 0, 0);
    return Math.round(
      (examDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
    );
  }, [historyExamDate]);
  const isExamNear =
    daysUntilExam !== null && daysUntilExam >= 0 && daysUntilExam <= 7;
  const isExamVeryNear =
    daysUntilExam !== null && daysUntilExam >= 0 && daysUntilExam <= 3;

  useEffect(() => {
    if (isExamNear) {
      setActiveTab("exam-sprint");
    }
  }, [isExamNear]);
  const papers = useMemo(() => {
    const seen = new Set<string>();
    return (HIS_SUBJECT.previousPapers || []).filter((p) => {
      if (seen.has(p.link)) return false;
      seen.add(p.link);
      return true;
    });
  }, []);

  const chapters = HIS_SUBJECT.chapters.slice(0, 5);

  const examTips = [
    {
      tip: "Timeline Mastery",
      detail:
        "Create detailed timelines for each chapter - essential for map work and chronological questions.",
    },
    {
      tip: "Map Work Focus",
      detail:
        "8 marks in the exam - Practice locating countries, regions, and important historical sites on the map.",
    },
    {
      tip: "Document Analysis",
      detail:
        "Prepare to analyze primary sources - Read important treaties, declarations, and proclamations.",
    },
    {
      tip: "Cause-Effect Study",
      detail:
        "Understand the causes and consequences of major events. Build concept webs.",
    },
    {
      tip: "Comparative History",
      detail:
        "Compare similar events across regions - e.g., Independence movements in different colonies.",
    },
    {
      tip: "Project Preparation",
      detail:
        "20 marks for project - Research, create presentations, and document historical analysis.",
    },
  ];

  const quickFacts = [
    {
      fact: "Renaissance",
      detail:
        "14th century Italian rebirth of classical learning - emphasizes human potential",
    },
    {
      fact: "Enlightenment",
      detail:
        "17th-18th century intellectual movement - reason, science, and rationalism",
    },
    {
      fact: "Industrial Revolution",
      detail:
        "Began 18th century England - transformed agrarian to industrial society",
    },
    {
      fact: "French Revolution",
      detail: "1789 - Changed European politics: Liberty, Equality, Fraternity",
    },
    {
      fact: "Decolonization",
      detail:
        "20th century - Asian and African colonies gained independence from European powers",
    },
    {
      fact: "Cold War",
      detail:
        "1947-1991 - Ideological conflict between USA (capitalism) and USSR (communism)",
    },
  ];

  const sprintChecklist = [
    "Revise Top 20 expected long-answer questions from Chapters 6, 8, 10, 12.",
    "Practice timeline events: freedom phases, world wars, cold war milestones.",
    "Do 2 map-work drills daily (locations + one-line significance).",
    "Write 3 long answers in strict time limit and self-check keyword coverage.",
    "Memorize reformers, years, acts, and leader-contribution pairings.",
  ];

  const sprintBlocks = [
    {
      time: "Morning 90 min",
      task: "Freedom Struggle + World Wars active recall",
    },
    {
      time: "Afternoon 75 min",
      task: "Timeline + map work + previous board questions",
    },
    { time: "Evening 75 min", task: "Timed writing: 3 long + 4 short answers" },
    {
      time: "Night 30 min",
      task: "Mistake log, dates revision, weak-topic patching",
    },
  ];

  const searchPresets = [
    "Maharashtra HSC Class 12 History chapter wise notes",
    "Maharashtra HSC History board paper with answers",
    "HSC History map work practice Maharashtra board",
    "HSC History important questions 2026",
    "Maharashtra HSC History mock test pdf",
  ];

  const effectiveQuery =
    materialSearchQuery.trim() || "Maharashtra HSC Class 12 History";
  const onlineResourceLinks = [
    {
      label: "Search Notes & PDFs",
      description: "Find chapter-wise notes, summaries, and revision PDFs.",
      href: `https://www.google.com/search?q=${encodeURIComponent(`${effectiveQuery} notes pdf`)}`,
    },
    {
      label: "Find Solved Board Papers",
      description:
        "Get previous-year papers with model answers and marking style.",
      href: `https://www.google.com/search?q=${encodeURIComponent(`${effectiveQuery} solved board paper`)}`,
    },
    {
      label: "Watch Fast Revision",
      description:
        "Open concise video explainers for timeline and long answers.",
      href: `https://www.youtube.com/results?search_query=${encodeURIComponent(`${effectiveQuery} one shot revision`)}`,
    },
    {
      label: "Practice Mock Tests",
      description:
        "Locate mock test PDFs and question sets for speed practice.",
      href: `https://www.google.com/search?q=${encodeURIComponent(`${effectiveQuery} mock test pdf`)}`,
    },
    {
      label: "Expected Questions Analysis",
      description: "Search predicted 2026 questions and trend-based analysis.",
      href: `https://www.google.com/search?q=${encodeURIComponent(`${effectiveQuery} expected questions analysis 2026`)}`,
    },
  ];

  const quickMockPlan = [
    "Day 1: Solve one full paper in 3 hours, then spend 45 min on error analysis.",
    "Day 2: Attempt map work + timeline set under timed conditions.",
    "Day 3: Solve one mixed paper (MCQ + short + long) and rewrite weak answers.",
  ];

  const quickAnalysisTips = [
    "Track chapters where you miss dates, names, or cause-effect links.",
    "For each wrong answer, tag the reason: memory gap, concept gap, or time pressure.",
    "Prioritize re-attempting only high-weightage weak areas in the next session.",
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-orange-900 via-red-900 to-amber-900 rounded-2xl w-full max-w-4xl shadow-2xl border border-orange-700/50">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-700 to-red-700 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-5xl">📜</div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  History Study Hub
                </h2>
                <p className="text-orange-100 mt-1">
                  Maharashtra HSC Board - Class 12
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-full transition"
            >
              ×
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-orange-800/40 border-b border-orange-700/50 flex gap-2 p-4">
          <button
            onClick={() => setActiveTab("exam-sprint")}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === "exam-sprint"
                ? "bg-red-600 text-white"
                : "text-orange-200 hover:bg-orange-700/50"
            }`}
          >
            <CalendarDays className="w-4 h-4 inline mr-2" />
            Exam Sprint
          </button>
          <button
            onClick={() => setActiveTab("chapters")}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === "chapters"
                ? "bg-orange-600 text-white"
                : "text-orange-200 hover:bg-orange-700/50"
            }`}
          >
            <BookOpen className="w-4 h-4 inline mr-2" />
            Chapters
          </button>
          <button
            onClick={() => setActiveTab("exam-tips")}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === "exam-tips"
                ? "bg-orange-600 text-white"
                : "text-orange-200 hover:bg-orange-700/50"
            }`}
          >
            <Trophy className="w-4 h-4 inline mr-2" />
            Exam Tips
          </button>
          <button
            onClick={() => setActiveTab("quick-facts")}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === "quick-facts"
                ? "bg-orange-600 text-white"
                : "text-orange-200 hover:bg-orange-700/50"
            }`}
          >
            <Lightbulb className="w-4 h-4 inline mr-2" />
            Quick Facts
          </button>
          <button
            onClick={() => setActiveTab("resources")}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === "resources"
                ? "bg-orange-600 text-white"
                : "text-orange-200 hover:bg-orange-700/50"
            }`}
          >
            <Search className="w-4 h-4 inline mr-2" />
            Study Material
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {historyExamDate && (
            <div
              className={`rounded-xl p-4 border ${
                isExamVeryNear
                  ? "bg-red-900/40 border-red-700/60"
                  : isExamNear
                    ? "bg-orange-900/40 border-orange-700/60"
                    : "bg-orange-900/30 border-orange-700/40"
              }`}
            >
              <p className="text-sm text-orange-100">
                <span className="font-semibold">History Board Exam:</span>{" "}
                {historyExamDate.toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
                {daysUntilExam !== null && daysUntilExam >= 0
                  ? ` (${daysUntilExam} day${daysUntilExam === 1 ? "" : "s"} left)`
                  : ""}
              </p>
            </div>
          )}

          {activeTab === "exam-sprint" && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-red-700 to-orange-700 rounded-xl p-4 border border-red-500/50">
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Final Sprint Plan
                </h3>
                <p className="text-red-100 text-sm mt-1">
                  Focus only on scoring topics, timed answers, and rapid
                  revision loops.
                </p>
              </div>

              <div className="bg-red-900/30 border border-red-700/50 rounded-xl p-4">
                <h4 className="text-red-100 font-semibold mb-3">
                  Must-Do Checklist
                </h4>
                <div className="space-y-2">
                  {sprintChecklist.map((item, idx) => (
                    <p key={idx} className="text-red-100/85 text-sm">
                      {idx + 1}. {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="bg-orange-900/30 border border-orange-700/50 rounded-xl p-4">
                <h4 className="text-orange-100 font-semibold mb-3">
                  Daily Time Blocks
                </h4>
                <div className="space-y-2">
                  {sprintBlocks.map((block, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-xs px-2 py-1 rounded bg-orange-800/70 text-orange-200 border border-orange-700/50 min-w-28 text-center">
                        {block.time}
                      </span>
                      <span className="text-sm text-orange-100/85">
                        {block.task}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "chapters" && (
            <>
              {/* Syllabus Overview */}
              <div className="bg-orange-900/40 border border-orange-700/50 rounded-xl p-4">
                <h3 className="font-semibold text-orange-100 mb-2 flex items-center gap-2">
                  <Globe className="w-5 h-5" /> 12 Chapters Overview
                </h3>
                <p className="text-orange-100/80 text-sm">
                  Renaissance, Colonialism, Indian Reforms, Struggle for
                  Independence, World Wars, Cold War, India's Transformation
                </p>
              </div>

              {/* Paper Pattern */}
              <div className="bg-red-900/40 border border-red-700/50 rounded-xl p-4">
                <h3 className="font-semibold text-red-100 mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" /> Exam Pattern (80 Marks)
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-red-100/80">
                  <div>Q.1: MCQ - 20 Marks</div>
                  <div>Q.2: Brief - 12 Marks</div>
                  <div>Q.3: Short Notes - 12 Marks</div>
                  <div>Q.4: Long Answers - 16 Marks</div>
                  <div>Q.5: Map Work - 8 Marks</div>
                  <div>Q.6: Project - 12 Marks</div>
                </div>
              </div>

              {/* Key Chapters */}
              <div className="space-y-3">
                <h3 className="font-semibold text-orange-100 flex items-center gap-2">
                  <Clock className="w-5 h-5" /> Key Chapters
                </h3>
                {chapters.map((ch) => (
                  <button
                    key={ch.id}
                    onClick={() =>
                      setExpandedChapter(
                        expandedChapter === ch.id ? null : ch.id,
                      )
                    }
                    className="w-full text-left bg-orange-800/50 hover:bg-orange-800/70 border border-orange-700/50 rounded-lg p-4 transition"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="font-medium text-orange-100">
                          {ch.title}
                        </p>
                        <p className="text-orange-200/70 text-sm mt-1">
                          {ch.description}
                        </p>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-orange-300 transition ${
                          expandedChapter === ch.id ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {expandedChapter === ch.id && (
                      <div className="mt-3 pt-3 border-t border-orange-700/50 text-orange-200/80 text-sm space-y-2">
                        <p>{ch.summary}</p>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </>
          )}

          {activeTab === "exam-tips" && (
            <div className="space-y-3">
              <h3 className="font-semibold text-orange-100 flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5" /> Essential Exam Preparation
              </h3>
              {examTips.map((item, i) => (
                <div
                  key={i}
                  className="bg-orange-800/50 border border-orange-700/50 rounded-lg p-4"
                >
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-300 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-orange-100">{item.tip}</p>
                      <p className="text-orange-200/70 text-sm mt-1">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "quick-facts" && (
            <div className="space-y-3">
              <h3 className="font-semibold text-orange-100 flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5" /> Historical Overview
              </h3>
              {quickFacts.map((item, i) => (
                <div
                  key={i}
                  className="bg-orange-800/50 border border-orange-700/50 rounded-lg p-4"
                >
                  <p className="font-medium text-orange-100">{item.fact}</p>
                  <p className="text-orange-200/70 text-sm mt-2">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "resources" && (
            <div className="space-y-4">
              <div className="bg-orange-900/40 border border-orange-700/50 rounded-xl p-4">
                <h3 className="font-semibold text-orange-100 mb-3 flex items-center gap-2">
                  <Search className="w-5 h-5" /> Online Study Material Search
                </h3>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={materialSearchQuery}
                    onChange={(e) => setMaterialSearchQuery(e.target.value)}
                    placeholder="Search notes, PYQs, mock tests, analysis..."
                    className="flex-1 px-3 py-2 rounded-lg border border-orange-700/60 bg-orange-950/40 text-orange-100 placeholder:text-orange-300/60 outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <a
                    href={`https://www.google.com/search?q=${encodeURIComponent(effectiveQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-500 transition text-center"
                  >
                    Search
                  </a>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {searchPresets.map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setMaterialSearchQuery(preset)}
                      className="text-xs px-3 py-1 rounded-full border border-orange-700/60 text-orange-200 bg-orange-900/40 hover:bg-orange-800/60 transition"
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {onlineResourceLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl p-4 bg-orange-800/50 border border-orange-700/50 hover:bg-orange-800/70 transition"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-orange-100">
                          {link.label}
                        </p>
                        <p className="text-sm text-orange-200/75 mt-1">
                          {link.description}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-orange-300 mt-1" />
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-red-900/30 border border-red-700/50 rounded-xl p-4">
                <h4 className="text-red-100 font-semibold mb-2">
                  Mock Test Sprint
                </h4>
                <div className="space-y-2">
                  {quickMockPlan.map((item, idx) => (
                    <p key={idx} className="text-sm text-red-100/85">
                      {idx + 1}. {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="bg-orange-900/30 border border-orange-700/50 rounded-xl p-4">
                <h4 className="text-orange-100 font-semibold mb-2">
                  Answer Analysis Tips
                </h4>
                <div className="space-y-2">
                  {quickAnalysisTips.map((item, idx) => (
                    <p key={idx} className="text-sm text-orange-100/85">
                      {idx + 1}. {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Previous Papers */}
          {papers.length > 0 && (
            <div className="bg-orange-900/40 border border-orange-700/50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-orange-200">
                    PDF Bank
                  </p>
                  <h3 className="text-lg font-semibold text-white">
                    Previous Papers
                  </h3>
                </div>
                <span className="px-2 py-1 rounded-full text-xs bg-orange-900/60 text-orange-200 border border-orange-700/50">
                  {papers.length} files
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {papers.map((p) => (
                  <a
                    key={p.link}
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 rounded-lg border border-orange-700/30 bg-orange-900/20 p-3 hover:border-orange-500 hover:bg-orange-900/40 transition"
                  >
                    <div className="mt-0.5 text-orange-300">📄</div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-orange-900/40 text-orange-200 border border-orange-700/40">
                          {p.year}
                        </span>
                        <span className="text-[11px] text-orange-300/70">
                          PDF
                        </span>
                      </div>
                      <div className="text-sm font-medium text-orange-100 truncate group-hover:text-orange-50">
                        {p.title}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryStudyHub;
