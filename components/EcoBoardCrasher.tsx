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
import { ECONOMICS_BOARD_CRASHER } from "../data/economicsBoardCrasher";
import EcoMockTest from "./EcoMockTest";

interface EcoBoardCrasherProps {
  onClose: () => void;
}

type TabType =
  | "overview"
  | "analysis"
  | "ch1"
  | "ch2"
  | "ch3a"
  | "ch3b"
  | "ch4"
  | "ch5"
  | "ch6"
  | "ch7"
  | "ch8"
  | "formulas"
  | "lastmin";

const EcoBoardCrasher: React.FC<EcoBoardCrasherProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [showAnswers, setShowAnswers] = useState<Record<string, boolean>>({});
  const [showMockTest, setShowMockTest] = useState(false);

  const data = ECONOMICS_BOARD_CRASHER;

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
      id: "analysis",
      label: "2026 Predict",
      shortLabel: "🎯",
      color: "bg-rose-500",
    },
    { id: "ch1", label: "Intro", shortLabel: "1", color: "bg-slate-500" },
    { id: "ch2", label: "Utility", shortLabel: "2", color: "bg-purple-500" },
    { id: "ch3a", label: "Demand", shortLabel: "3A", color: "bg-green-500" },
    { id: "ch3b", label: "Elasticity", shortLabel: "3B", color: "bg-teal-500" },
    { id: "ch4", label: "Supply", shortLabel: "4", color: "bg-orange-500" },
    { id: "ch5", label: "Market", shortLabel: "5", color: "bg-red-500" },
    { id: "ch6", label: "Index", shortLabel: "6", color: "bg-pink-500" },
    { id: "ch7", label: "NI", shortLabel: "7", color: "bg-indigo-500" },
    { id: "ch8", label: "Public", shortLabel: "8", color: "bg-amber-500" },
    {
      id: "formulas",
      label: "Formulas",
      shortLabel: "📐",
      color: "bg-cyan-500",
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

  const renderOverview = () => (
    <div className="space-y-4 p-4">
      {/* Mock Test Button */}
      <button
        onClick={() => setShowMockTest(true)}
        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-4 text-white flex items-center justify-between hover:opacity-90 transition-opacity"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <ClipboardList size={24} />
          </div>
          <div className="text-left">
            <h3 className="font-bold text-lg">📝 Mock Board Tests</h3>
            <p className="text-white/80 text-sm">
              2023 & 2024 Papers • 80 Marks • 3 Hours
            </p>
          </div>
        </div>
        <ChevronRight size={24} />
      </button>

      {/* Exam Alert */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-4 text-white">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
            <TrendingUp size={28} />
          </div>
          <div>
            <h3 className="font-black text-xl">Exam in 8 Days!</h3>
            <p className="text-white/90 text-sm">
              24th February 2026 • 80 Marks • 3 Hours
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
        <div className="space-y-2 text-sm">
          {[
            {
              q: "Q.1",
              type: "Objective Questions (A-E)",
              marks: 20,
              detail: "MCQ, Fill, Match, Concept",
            },
            {
              q: "Q.2",
              type: "Identify & Explain",
              marks: 6,
              detail: "3×2 marks",
            },
            {
              q: "Q.3",
              type: "Distinguish Between",
              marks: 6,
              detail: "3×2 marks",
            },
            {
              q: "Q.4",
              type: "Agree/Disagree with reasons",
              marks: 12,
              detail: "3×4 marks",
            },
            {
              q: "Q.5",
              type: "Study Table/Graph",
              marks: 8,
              detail: "2×4 marks",
            },
            { q: "Q.6", type: "Long Answers", marks: 16, detail: "2×8 marks" },
            {
              q: "Q.7",
              type: "Numericals (Compulsory)",
              marks: 12,
              detail: "3×4 marks",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-slate-50 dark:bg-slate-700 p-3 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-lg flex items-center justify-center font-bold text-sm">
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
      </div>

      {/* Chapter Weightage */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm">
        <h3 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
          <Target size={20} className="text-green-500" /> Chapter Weightage
        </h3>
        <div className="space-y-2 text-xs">
          {[
            {
              ch: "1. Intro (Micro/Macro)",
              marks: "4-6",
              pct: 35,
              color: "bg-slate-500",
            },
            {
              ch: "2. Utility Analysis",
              marks: "8-10",
              pct: 60,
              color: "bg-purple-500",
            },
            {
              ch: "3A. Demand Analysis",
              marks: "10-12",
              pct: 75,
              color: "bg-green-500",
            },
            {
              ch: "3B. Elasticity",
              marks: "12-14",
              pct: 85,
              color: "bg-teal-500",
            },
            {
              ch: "4. Supply Analysis",
              marks: "6-8",
              pct: 45,
              color: "bg-orange-500",
            },
            {
              ch: "5. Forms of Market",
              marks: "8-10",
              pct: 60,
              color: "bg-red-500",
            },
            {
              ch: "6. Index Numbers",
              marks: "8-10",
              pct: 60,
              color: "bg-pink-500",
            },
            {
              ch: "7. National Income",
              marks: "12-14",
              pct: 85,
              color: "bg-indigo-500",
            },
            {
              ch: "8. Public Finance",
              marks: "8-10",
              pct: 60,
              color: "bg-amber-500",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-slate-700 dark:text-slate-300 flex-1">
                {item.ch}
              </span>
              <span className="font-bold text-slate-800 dark:text-white w-14 text-right">
                {item.marks}
              </span>
              <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
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
          <Zap size={20} /> Exam Tips
        </h3>
        <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>
              <strong>Graphs:</strong> Draw diagrams for Utility, Demand, Supply
              - earns extra marks!
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>
              <strong>Formulas:</strong> Write formula before solving numericals
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>
              <strong>Tables:</strong> Use for Distinguish Between questions
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>
              <strong>Numericals:</strong> Q.7 is COMPULSORY - practice daily!
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
            { q: "Q.2 (6m)", time: "10 min" },
            { q: "Q.3 (6m)", time: "10 min" },
            { q: "Q.4 (12m)", time: "20 min" },
            { q: "Q.5 (8m)", time: "15 min" },
            { q: "Q.6 (16m)", time: "30 min" },
            { q: "Q.7 (12m)", time: "25 min" },
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
          Total: 135 min + 45 min buffer/revision
        </p>
      </div>
    </div>
  );

  // 2026 Predictions and Analysis
  const renderAnalysis = () => (
    <div className="space-y-4 p-4">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 rounded-2xl p-4 text-white">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
            <TrendingUp size={28} />
          </div>
          <div>
            <h3 className="font-black text-xl">🎯 2026 Exam Predictions</h3>
            <p className="text-white/90 text-sm">
              Based on 2020-2025 Paper Analysis
            </p>
          </div>
        </div>
      </div>

      {/* Recurring MCQ Concepts */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm">
        <h3 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
          <BarChart3 size={20} className="text-blue-500" />
          Recurring MCQ Concepts (EVERY YEAR)
        </h3>
        <div className="space-y-2">
          {[
            {
              concept: "Father of Micro Economics",
              answer: "Alfred Marshall",
              frequency: "★★★★",
            },
            {
              concept: "Father of Macro Economics",
              answer: "J.M. Keynes",
              frequency: "★★★★",
            },
            {
              concept: "GST introduced in India",
              answer: "July 1, 2017",
              frequency: "★★★★",
            },
            {
              concept: "When TU is max, MU is",
              answer: "Zero",
              frequency: "★★★★",
            },
            {
              concept: "Law of DMU given by",
              answer: "H.H. Gossen",
              frequency: "★★★",
            },
            {
              concept: "Ed > 1 means",
              answer: "Elastic demand",
              frequency: "★★★",
            },
            {
              concept: "Perfect competition has",
              answer: "Homogeneous products",
              frequency: "★★★",
            },
            {
              concept: "Fisher's Index =",
              answer: "√(Laspeyre × Paasche)",
              frequency: "★★★",
            },
            {
              concept: "GDP formula",
              answer: "C + I + G + (X-M)",
              frequency: "★★★★",
            },
            {
              concept: "Direct tax example",
              answer: "Income Tax",
              frequency: "★★★",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-slate-700 p-3 rounded-xl"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-700 dark:text-slate-300 text-sm">
                  {item.concept}
                </span>
                <span className="text-amber-500 text-xs">{item.frequency}</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-green-600 dark:text-green-400 font-bold">
                  {item.answer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High Priority for 8 Marks */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-4">
        <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 flex items-center gap-2">
          <AlertTriangle size={20} className="animate-pulse" />
          HIGH PRIORITY for Q.6 (8 Marks Each)
        </h3>
        <div className="space-y-3">
          {[
            {
              topic: "Law of Demand with Schedule & Diagram",
              reason: "Asked in 2022, 2023, 2024 • 100% Expected",
              color: "bg-red-500",
            },
            {
              topic: "Types of Price Elasticity of Demand",
              reason: "Most important from Ch 3B • Draw all 5 diagrams",
              color: "bg-orange-500",
            },
            {
              topic: "Features of Perfect Competition",
              reason: "Asked repeatedly • Compare with Monopoly",
              color: "bg-amber-500",
            },
            {
              topic: "Methods of Measuring National Income",
              reason: "Value Added, Income, Expenditure methods",
              color: "bg-yellow-500",
            },
            {
              topic: "Types of Budget (Surplus/Deficit/Balanced)",
              reason: "Public Finance very important in 2026",
              color: "bg-lime-500",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-xl p-3 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-2 h-full min-h-[50px] ${item.color} rounded-full`}
                ></div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 dark:text-white">
                    {item.topic}
                  </h4>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-1 font-medium">
                    📌 {item.reason}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Numericals Focus (Q.7 Compulsory) */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border border-purple-200 dark:border-purple-800 rounded-2xl p-4">
        <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 flex items-center gap-2">
          <Calculator size={20} />
          Q.7 NUMERICALS (12 Marks - COMPULSORY!)
        </h3>
        <div className="space-y-2">
          {[
            {
              topic: "Marginal Utility Calculation",
              formula: "MU = TUn - TUn-1",
              probability: "100%",
            },
            {
              topic: "Price Elasticity of Demand",
              formula: "Ed = %ΔQd / %ΔP",
              probability: "95%",
            },
            {
              topic: "Index Number (Laspeyre/Paasche/Fisher)",
              formula: "Various formulas",
              probability: "90%",
            },
            {
              topic: "National Income Aggregates",
              formula: "GDP, GNP, NNP, NI",
              probability: "85%",
            },
            {
              topic: "Supply Elasticity",
              formula: "Es = %ΔQs / %ΔP",
              probability: "70%",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-xl p-3 flex items-center justify-between"
            >
              <div>
                <p className="font-bold text-slate-700 dark:text-slate-300 text-sm">
                  {item.topic}
                </p>
                <p className="text-xs text-purple-600 dark:text-purple-400 font-mono">
                  {item.formula}
                </p>
              </div>
              <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs font-bold">
                {item.probability}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Chapter-wise Strategy */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm">
        <h3 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
          <Lightbulb size={20} className="text-amber-500" />
          Chapter-wise Priority (Based on Past Papers)
        </h3>
        <div className="space-y-3">
          <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-red-800 dark:text-red-200">
                🔴 CRITICAL (Must Score)
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-xs font-medium">
                Ch 3A: Demand
              </span>
              <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-xs font-medium">
                Ch 3B: Elasticity
              </span>
              <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-xs font-medium">
                Ch 7: National Income
              </span>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-amber-800 dark:text-amber-200">
                🟡 HIGH (Score Well)
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-xs font-medium">
                Ch 2: Utility
              </span>
              <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-xs font-medium">
                Ch 5: Market
              </span>
              <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-xs font-medium">
                Ch 8: Public Finance
              </span>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-green-800 dark:text-green-200">
                🟢 MEDIUM (Good to Know)
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                Ch 1: Intro
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                Ch 4: Supply
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                Ch 6: Index Numbers
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Graph Practice */}
      <div className="bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 rounded-2xl p-4">
        <h3 className="font-bold text-cyan-800 dark:text-cyan-200 mb-3 flex items-center gap-2">
          📊 Must-Draw Graphs (Extra Marks!)
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {[
            "TU & MU Curves",
            "Demand Curve",
            "5 Types of Ed",
            "Supply Curve",
            "Market Equilibrium",
            "AR & MR Curves",
          ].map((graph, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 p-2 rounded-lg text-sm text-cyan-700 dark:text-cyan-300 text-center font-medium"
            >
              {graph}
            </div>
          ))}
        </div>
      </div>

      {/* Last Day Strategy */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 text-white">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
          <CheckCircle2 size={20} /> Last Day Strategy
        </h3>
        <ul className="text-sm space-y-2">
          <li>
            ✅ <strong>Morning:</strong> Practice 5 numericals (MU, Ed, Index)
          </li>
          <li>
            ✅ <strong>Afternoon:</strong> Revise all diagrams (draw at least
            once)
          </li>
          <li>
            ✅ <strong>Evening:</strong> Read Ch 3B Elasticity & Ch 7 National
            Income
          </li>
          <li>
            ✅ <strong>Night:</strong> Quick revision of formulas & MCQ facts
          </li>
          <li>
            ⚠️ <strong>Don't skip:</strong> Q.7 Numericals are COMPULSORY!
          </li>
        </ul>
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

        {/* Formulas (if any) */}
        {chapter.formulas && (
          <div className="bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 rounded-2xl p-4">
            <h4 className="font-bold text-cyan-800 dark:text-cyan-200 mb-2 flex items-center gap-2">
              <Calculator size={18} /> Important Formulas
            </h4>
            <div className="space-y-1">
              {chapter.formulas.map((formula: string, idx: number) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800 p-2 rounded-lg text-sm font-mono text-cyan-700 dark:text-cyan-300"
                >
                  {formula}
                </div>
              ))}
            </div>
          </div>
        )}

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
                <Brain size={20} /> Key Concepts (
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
                <FileText size={20} /> Short Answers (
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
                <BookOpen size={20} /> Long Answers (
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

  const renderFormulas = () => (
    <div className="space-y-4 p-4">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-4 text-white">
        <h3 className="font-bold text-xl flex items-center gap-2">
          <Calculator size={24} /> All Important Formulas
        </h3>
        <p className="text-white/80 text-sm mt-1">
          Memorize these for the exam!
        </p>
      </div>

      {/* Utility Formulas */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm">
        <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-3">
          📊 Utility Analysis
        </h4>
        <div className="space-y-2 font-mono text-sm">
          <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
            MU = TUn - TUn-1
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
            MU = ΔTU / ΔQ
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
            When TU is Max → MU = 0
          </div>
        </div>
      </div>

      {/* Elasticity Formulas */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm">
        <h4 className="font-bold text-green-600 dark:text-green-400 mb-3">
          📈 Elasticity
        </h4>
        <div className="space-y-2 font-mono text-sm">
          <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
            Ed = %ΔQd / %ΔP
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
            Ed = (ΔQ/ΔP) × (P/Q) [Point]
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
            Ed = (Q2-Q1)/(Q2+Q1) ÷ (P2-P1)/(P2+P1) [Arc]
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
            Es = %ΔQs / %ΔP
          </div>
        </div>
      </div>

      {/* National Income Formulas */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm">
        <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-3">
          🏦 National Income
        </h4>
        <div className="space-y-2 font-mono text-sm">
          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg">
            GDP = C + I + G + (X - M)
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg">
            GNP = GDP + NFIA
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg">
            NNP = GNP - Depreciation
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg">
            NI at FC = NNP at MP - IT + Subsidies
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg">
            Per Capita Income = NI / Population
          </div>
        </div>
      </div>

      {/* Index Number Formulas */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm">
        <h4 className="font-bold text-pink-600 dark:text-pink-400 mb-3">
          📊 Index Numbers
        </h4>
        <div className="space-y-2 font-mono text-sm">
          <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
            Price Index = (P1/P0) × 100
          </div>
          <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
            Laspeyre's = (ΣP1Q0/ΣP0Q0) × 100
          </div>
          <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
            Paasche's = (ΣP1Q1/ΣP0Q1) × 100
          </div>
          <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
            Fisher's = √(L × P)
          </div>
        </div>
      </div>

      {/* Public Finance */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm">
        <h4 className="font-bold text-amber-600 dark:text-amber-400 mb-3">
          💰 Public Finance
        </h4>
        <div className="space-y-2 font-mono text-sm">
          <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
            Fiscal Deficit = Total Exp - Total Receipts (excl. borrowings)
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
            Revenue Deficit = Rev Exp - Rev Receipts
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
            Primary Deficit = Fiscal Deficit - Interest Payments
          </div>
        </div>
      </div>
    </div>
  );

  const renderLastMinute = () => {
    const lastMin = data.lastMinutePoints;

    return (
      <div className="space-y-4 p-4">
        {/* Full Forms */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20">
            <h4 className="font-bold text-indigo-800 dark:text-indigo-200 flex items-center gap-2">
              <BookOpen size={20} /> Full Forms ({lastMin.fullForms.length})
            </h4>
          </div>
          <div className="p-4 grid grid-cols-1 gap-2 max-h-[40vh] overflow-y-auto">
            {lastMin.fullForms.map((ff, idx) => {
              const [abbr, full] = ff.split(" - ");
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-slate-50 dark:bg-slate-700 p-2 rounded-lg text-sm"
                >
                  <span className="font-bold text-indigo-600 dark:text-indigo-400 w-16 shrink-0">
                    {abbr}
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    = {full}
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
              👨‍🏫 Important Economists
            </h4>
          </div>
          <div className="p-4 space-y-2">
            {lastMin.importantPersons.map((person, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg text-sm text-slate-700 dark:text-slate-300"
              >
                {person}
              </div>
            ))}
          </div>
        </div>

        {/* Important Dates */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20">
            <h4 className="font-bold text-blue-800 dark:text-blue-200 flex items-center gap-2">
              📅 Important Years
            </h4>
          </div>
          <div className="p-4 space-y-2">
            {lastMin.importantDates.map((date, idx) => {
              const [year, event] = date.split(" - ");
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-slate-50 dark:bg-slate-700 p-2 rounded-lg"
                >
                  <span className="w-12 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded px-2 py-1 text-center font-bold text-sm">
                    {year}
                  </span>
                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    {event}
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
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 p-4 text-white shrink-0 safe-area-top">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-black">📈 Economics</h1>
            <p className="text-white/80 text-xs">
              Board Exam Crasher • 24 Feb 2026
            </p>
          </div>
          <div className="bg-indigo-700 px-3 py-1 rounded-full text-xs font-bold">
            8 DAYS
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
        {activeTab === "analysis" && renderAnalysis()}
        {activeTab === "ch1" && renderChapter("chapter1")}
        {activeTab === "ch2" && renderChapter("chapter2")}
        {activeTab === "ch3a" && renderChapter("chapter3a")}
        {activeTab === "ch3b" && renderChapter("chapter3b")}
        {activeTab === "ch4" && renderChapter("chapter4")}
        {activeTab === "ch5" && renderChapter("chapter5")}
        {activeTab === "ch6" && renderChapter("chapter6")}
        {activeTab === "ch7" && renderChapter("chapter7")}
        {activeTab === "ch8" && renderChapter("chapter8")}
        {activeTab === "formulas" && renderFormulas()}
        {activeTab === "lastmin" && renderLastMinute()}
      </div>

      {/* Bottom Quick Access */}
      <div className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-2 shrink-0 safe-area-bottom">
        <div className="flex justify-around">
          {[
            { id: "analysis" as TabType, icon: "🎯", label: "Predict" },
            { id: "formulas" as TabType, icon: "📐", label: "Formulas" },
            { id: "ch3b" as TabType, icon: "📈", label: "Elasticity" },
            { id: "ch7" as TabType, icon: "🏦", label: "NI" },
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
                  ? "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400"
                  : "text-slate-500 dark:text-slate-400"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-[10px] font-bold">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mock Test Modal */}
      {showMockTest && <EcoMockTest onClose={() => setShowMockTest(false)} />}
    </div>
  );
};

export default EcoBoardCrasher;
