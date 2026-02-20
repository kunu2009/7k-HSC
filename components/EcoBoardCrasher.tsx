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
  | "objectives"
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
    {
      id: "objectives",
      label: "Q.1 Obj",
      shortLabel: "✅",
      color: "bg-emerald-500",
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
              6 Papers incl. 🎯 AI Predicted 2026 • 80 Marks • 3 Hours
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
            <h3 className="font-black text-xl">Exam in 4 Days!</h3>
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
              type: "Objectives (A+B+C+D)",
              marks: 20,
              detail: "MCQ + Terms + Odd-one + Correlation",
            },
            {
              q: "Q.2",
              type: "(A) Identify + (B) Distinguish",
              marks: 12,
              detail: "3×2 + 3×2 marks",
            },
            {
              q: "Q.3",
              type: "Answer the following",
              marks: 12,
              detail: "Any 3/5 × 4m",
            },
            {
              q: "Q.4",
              type: "Agree/Disagree with reasons",
              marks: 12,
              detail: "Any 3/5 × 4m (1+3)",
            },
            {
              q: "Q.5",
              type: "Study Table/Figure/Passage",
              marks: 8,
              detail: "Any 2/3 × 4m",
            },
            {
              q: "Q.6",
              type: "Answer in Detail",
              marks: 16,
              detail: "Any 2/3 × 8m",
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

        {/* Q.1 Breakdown */}
        <div className="mt-4 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
          <p className="text-xs font-bold text-indigo-800 dark:text-indigo-200 mb-2">
            Q.1 Breakdown (20 marks):
          </p>
          <div className="grid grid-cols-2 gap-1 text-xs text-indigo-700 dark:text-indigo-300">
            <span>A) Choose correct option: 5m</span>
            <span>B) Give economic term: 5m</span>
            <span>C) Find odd man out: 5m</span>
            <span>D) Complete correlation: 5m</span>
          </div>
        </div>

        {/* Q.4 Note */}
        <div className="mt-2 p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
          <p className="text-xs text-amber-700 dark:text-amber-300">
            <strong>Q.4 Marking:</strong> 1 mark for Agree/Disagree + 3 marks
            for reasons
          </p>
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
              <strong>Q.5 Table/Figure:</strong> Complete tables accurately,
              label diagrams, show formula steps
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>
              <strong>Tables:</strong> Use for Distinguish Between (Q.2B)
              questions
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>
              <strong>Q.4:</strong> 1 mark for Agree/Disagree + 3 marks for
              reasons
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
            { q: "Q.2 (12m)", time: "18 min" },
            { q: "Q.3 (12m)", time: "20 min" },
            { q: "Q.4 (12m)", time: "20 min" },
            { q: "Q.5 (8m)", time: "20 min" },
            { q: "Q.6 (16m)", time: "35 min" },
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
          Total: 138 min + 42 min buffer/revision
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
              AI Analysis of 18+ PDFs & 2022-2024 Papers
            </p>
            <p className="text-white/70 text-xs mt-1">
              📅 Exam: 24th Feb • ⏰ 4 days left • Based on Sky Education notes
            </p>
          </div>
        </div>
      </div>

      {/* 🧠 ALL SHORTCODES — Complete Reference */}
      <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 border-2 border-violet-300 dark:border-violet-700 rounded-2xl p-4">
        <h3 className="font-bold text-violet-800 dark:text-violet-200 mb-3 flex items-center gap-2">
          <Brain size={20} />
          🧠 ALL 22 SHORTCODES — Master These!
        </h3>
        <p className="text-xs text-violet-600 dark:text-violet-400 mb-3">
          Each letter = one point to write. Memorize these to guarantee you
          cover ALL points in long answers!
        </p>
        <div className="space-y-2">
          {[
            {
              code: "LAB USP",
              topic: "Features of Micro Economics",
              ch: "Ch 1",
              breakdown:
                "Limited scope • Analysis of market • Based on assumptions • Use of marginalism • Study of individual units • Price theory",
              color: "bg-slate-100 dark:bg-slate-700",
            },
            {
              code: "3G SLIP",
              topic: "Features of Macro Economics",
              ch: "Ch 1",
              breakdown:
                "General equilibrium • Growth theory • Government role • Study of aggregates • Lumping method • Income theory • Policy-oriented",
              color: "bg-blue-100 dark:bg-blue-900/30",
            },
            {
              code: "MRS BHIDE",
              topic: "Features of Utility",
              ch: "Ch 2",
              breakdown:
                "Measurable • Relative concept • Subjective • Based on intensity of want • Humans only • Independent of morality • Differs from usefulness • Ethically neutral",
              color: "bg-violet-100 dark:bg-violet-900/30",
            },
            {
              code: "H MAP",
              topic: "Exceptions to Law of DMU",
              ch: "Ch 2",
              breakdown: "Hobbies • Miser • Addictions • Power (+ Money)",
              color: "bg-purple-100 dark:bg-purple-900/30",
            },
            {
              code: "HI GPS",
              topic: "Exceptions to Law of Demand",
              ch: "Ch 3A",
              breakdown:
                "Habitual goods • Ignorance • Giffen's paradox • Prestige goods • Speculation (+ Price illusion)",
              color: "bg-green-100 dark:bg-green-900/30",
            },
            {
              code: "PLANS FREE HO",
              topic: "Features of Perfect Competition",
              ch: "Ch 5",
              breakdown:
                "Perfect knowledge • Large buyers/sellers • AR=MR=Price • No transport cost • Single price • Free entry/exit • Homogeneous products • Other assumptions",
              color: "bg-sky-100 dark:bg-sky-900/30",
            },
            {
              code: "BP SCAN",
              topic: "Features of Monopoly",
              ch: "Ch 5",
              breakdown:
                "Barriers to entry • Price maker • Single seller • Control over supply • AR>MR • No close substitute • No distinction b/w firm & industry",
              color: "bg-red-100 dark:bg-red-900/30",
            },
            {
              code: "U arE FAIR",
              topic: "Features of Oligopoly",
              ch: "Ch 5",
              breakdown:
                "Uncertainty • advertising • Entry barriers • Few sellers • Automobile industry (example) • Interdependence • Rivalry",
              color: "bg-pink-100 dark:bg-pink-900/30",
            },
            {
              code: "FAIRLY FREE PC'S",
              topic: "Features of Monopolistic Competition",
              ch: "Ch 5",
              breakdown:
                "Free entry/exit • AR>MR • Independent decisions • Realistic competition • Large number • Yes to selling cost • Free but not perfect knowledge • Product differentiation • Close substitutes",
              color: "bg-rose-100 dark:bg-rose-900/30",
            },
            {
              code: "SUM BC",
              topic: "Features of Index Numbers",
              ch: "Ch 6",
              breakdown:
                "Specialized averages • Universal utility • Measure relative changes • Based on samples • Comparative study",
              color: "bg-pink-100 dark:bg-pink-900/30",
            },
            {
              code: "V-FMN",
              topic: "Features of National Income",
              ch: "Ch 7",
              breakdown:
                "Value of final goods only • Flow concept • Macro concept • Money value • Net aggregate value • Net income from abroad • Financial year",
              color: "bg-indigo-100 dark:bg-indigo-900/30",
            },
            {
              code: "VIP CID E",
              topic: "Practical Difficulties in NI Estimation",
              ch: "Ch 7",
              breakdown:
                "Valuation of inventories • Illiteracy • Problem of double counting • Capital gains • Inadequate data • Depreciation • Existence of non-monetized sector",
              color: "bg-indigo-100 dark:bg-indigo-900/30",
            },
            {
              code: "TU C VIP",
              topic: "Theoretical Difficulties in NI Measurement",
              ch: "Ch 7",
              breakdown:
                "Transfer payments • Unpaid services • Change in price level • Value of govt services • Illegal income • Production for self-consumption",
              color: "bg-blue-100 dark:bg-blue-900/30",
            },
            {
              code: "SIR DG",
              topic: "Reasons for Growth of Public Expenditure",
              ch: "Ch 8",
              breakdown:
                "Spread of democracy • Inflation • Rapid population growth • Defence expenditure • Growing urbanization (+ Industrial dev, Disaster mgmt, Govt activities)",
              color: "bg-amber-100 dark:bg-amber-900/30",
            },
            {
              code: "BF GF PS",
              topic: "Sources of Public Revenue (Non-Tax)",
              ch: "Ch 8",
              breakdown:
                "Borrowings • Fees • Gifts/Grants • Fines/Penalties • Prices of public goods • Special assessment/levy",
              color: "bg-orange-100 dark:bg-orange-900/30",
            },
            {
              code: "DR. NC",
              topic: "Classification of Public Expenditure",
              ch: "Ch 8",
              breakdown:
                "Developmental & Non-developmental • Revenue & Capital expenditure • Non-plan & Plan expenditure • Central/State/Local",
              color: "bg-yellow-100 dark:bg-yellow-900/30",
            },
            {
              code: "CBI PRO",
              topic: "Functions of RBI",
              ch: "Ch 9",
              breakdown:
                "Controller of credit • Banker to govt • Issue of currency • Portfolio management • Reserve of foreign exchange • Other agency functions",
              color: "bg-teal-100 dark:bg-teal-900/30",
            },
            {
              code: "AP-CP",
              topic: "Functions of Commercial Banks",
              ch: "Ch 9",
              breakdown:
                "Accepting deposits • Providing loans & advances • Credit creation • Portfolio management (+ Agency functions, Discounting bills)",
              color: "bg-cyan-100 dark:bg-cyan-900/30",
            },
            {
              code: "FLIP SE GROWTH",
              topic: "Role of Money Market in India",
              ch: "Ch 9",
              breakdown:
                "Financing trade • Liquidity management • Industrial dev • Portfolio mgmt • Short-term requirements • Equilibrating mechanism • Govt requirements",
              color: "bg-emerald-100 dark:bg-emerald-900/30",
            },
            {
              code: "IQ MOP",
              topic: "Role of Capital Market in India",
              ch: "Ch 9",
              breakdown:
                "Integration • Quick valuation • Mobilization of savings • Operational efficiency • Provides equity capital",
              color: "bg-lime-100 dark:bg-lime-900/30",
            },
            {
              code: "DSL",
              topic: "Problems of Money Market in India",
              ch: "Ch 9",
              breakdown:
                "Dual structure (organised + unorganised) • Shortage of funds • Lack of uniformity in interest rates (+ Seasonal fluctuations, Lack of financial inclusion)",
              color: "bg-red-100 dark:bg-red-900/30",
            },
            {
              code: "FDI - L",
              topic: "Problems of Capital Market in India",
              ch: "Ch 9",
              breakdown:
                "Financial scams • Dominance of financial institutions • Inadequate debt market • Lack of financial literacy (+ Regulatory complexity)",
              color: "bg-orange-100 dark:bg-orange-900/30",
            },
          ].map((item, idx) => (
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

      {/* 🎯 MOST PROBABLE Q.6 (8 Marks) TOPICS */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-2 border-red-300 dark:border-red-800 rounded-2xl p-4">
        <h3 className="font-bold text-red-800 dark:text-red-200 mb-1 flex items-center gap-2">
          <AlertTriangle size={20} className="animate-pulse" />
          HIGHEST PROBABILITY for Q.6 (8 Marks Each)
        </h3>
        <p className="text-xs text-red-600 dark:text-red-400 mb-3">
          Based on analysis of March 2022, July 2022, March 2023, March 2024
          papers
        </p>
        <div className="space-y-3">
          {[
            {
              topic: "Microeconomics: Concept & Features",
              shortcode: "LAB USP",
              reason: "Asked in 2022, 2024 • VERY HIGH probability",
              pct: 95,
              color: "bg-red-500",
            },
            {
              topic: "Law of DMU with Schedule, Diagram & Exceptions",
              shortcode: "H MAP",
              reason: "Asked in 2022, 2023 • Foundational law",
              pct: 95,
              color: "bg-red-500",
            },
            {
              topic: "Law of Demand with Schedule, Diagram & Exceptions",
              shortcode: "HI GPS",
              reason: "Asked in 2022, 2023, 2024 • 100% Expected",
              pct: 100,
              color: "bg-red-600",
            },
            {
              topic: "Total Expenditure & Geometric Method of Ed",
              shortcode: "—",
              reason: "Most important from Ch 3B • Draw diagrams",
              pct: 90,
              color: "bg-orange-500",
            },
            {
              topic: "Practical Difficulties in NI Estimation",
              shortcode: "VIP CID E",
              reason: "Complex topic • Tests theoretical + practical knowledge",
              pct: 90,
              color: "bg-orange-500",
            },
            {
              topic: "Reasons for Growth of Public Expenditure",
              shortcode: "SIR DG",
              reason: "Asked in 2022, 2023 • Almost guaranteed",
              pct: 95,
              color: "bg-red-500",
            },
            {
              topic: "Sources of Public Revenue (Tax + Non-Tax)",
              shortcode: "BF GF PS",
              reason: "July 2022 • High probability for 2026",
              pct: 85,
              color: "bg-amber-500",
            },
            {
              topic: "Features of Monopoly",
              shortcode: "—",
              reason: "Asked in 2022, 2023 • Compare with Perfect Competition",
              pct: 85,
              color: "bg-amber-500",
            },
          ].map((item, idx) => (
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

      {/* 📋 CRITICAL QUESTION FORMATS TO PRACTICE */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border-2 border-blue-200 dark:border-blue-800">
        <h3 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
          <ClipboardList size={20} className="text-blue-500" />
          Critical Question Formats to Practice
        </h3>
        <div className="space-y-3">
          {[
            {
              format: "Q.2(B) Distinguish Between",
              topics:
                "Slicing & Lumping • TU & MU • Direct & Indirect Tax • Money Market & Capital Market • Increase & Extension of Demand",
              strategy: "Use TABLE format with 4-5 clear points for full marks",
              emoji: "📊",
            },
            {
              format: "Q.4 Agree or Disagree",
              topics:
                '"Scope of micro is unlimited" (Disagree) • "When TU max, MU is zero" (Agree) • "No exceptions to DMU" (Disagree) • "Index without base year" (Disagree)',
              strategy:
                "Start with clear Agree/Disagree (1 mark) + 3-4 factual reasons (3 marks)",
              emoji: "✅❌",
            },
            {
              format: "Q.5 Study Table/Figure",
              topics:
                "TU-MU schedule completion • Price Elasticity calculation • Demand/Supply diagrams • GDP/NDP calculation",
              strategy:
                "Show formula → substitute values → calculate → state answer. ALWAYS show steps!",
              emoji: "📈",
            },
            {
              format: "Q.1(D) Complete Correlation",
              topics:
                "Micro:Price Theory::Macro:___ • Ed=∞:Perfectly Elastic::Ed=0:___ • Direct Tax:Income Tax::Indirect Tax:___",
              strategy:
                "Practice all correlation pairs from past papers — high-scoring, quick to answer",
              emoji: "🔗",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-slate-700 rounded-xl p-3"
            >
              <h4 className="font-bold text-slate-800 dark:text-white text-sm mb-1">
                {item.emoji} {item.format}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                <strong>Hot Topics:</strong> {item.topics}
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                💡 Strategy: {item.strategy}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Recurring MCQ Concepts */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm">
        <h3 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
          <BarChart3 size={20} className="text-blue-500" />
          Recurring MCQ Concepts (EVERY YEAR)
        </h3>
        <div className="grid grid-cols-1 gap-2">
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
              concept: "GST introduced",
              answer: "July 1, 2017 (101st Amendment)",
              frequency: "★★★★",
            },
            {
              concept: "When TU is max, MU is",
              answer: "Zero",
              frequency: "★★★★",
            },
            {
              concept: "Law of DMU given by",
              answer: "H.H. Gossen (Gossen's 1st Law)",
              frequency: "★★★",
            },
            {
              concept: "Micro = Slicing, Macro =",
              answer: "Lumping method",
              frequency: "★★★★",
            },
            {
              concept: "Ed > 1 means",
              answer: "Elastic / Relatively elastic",
              frequency: "★★★",
            },
            {
              concept: "Perfect competition: firm is",
              answer: "Price Taker (AR = MR = Price)",
              frequency: "★★★",
            },
            {
              concept: "Fisher's Ideal Index =",
              answer: "√(Laspeyre × Paasche)",
              frequency: "★★★",
            },
            {
              concept: "GDP formula",
              answer: "C + I + G + (X − M)",
              frequency: "★★★★",
            },
            {
              concept: "Direct tax example",
              answer: "Income Tax, Wealth Tax",
              frequency: "★★★",
            },
            {
              concept: "Indirect tax example",
              answer: "GST (CGST + SGST + IGST)",
              frequency: "★★★",
            },
            {
              concept: "Monopoly: number of sellers",
              answer: "Single seller (Price Maker)",
              frequency: "★★★",
            },
            {
              concept: "Financial year in India",
              answer: "1st April to 31st March",
              frequency: "★★★",
            },
            {
              concept: "NI includes only",
              answer: "Final goods (not intermediate)",
              frequency: "★★★",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-slate-700 p-2.5 rounded-xl flex items-center justify-between"
            >
              <span className="font-medium text-slate-700 dark:text-slate-300 text-xs flex-1">
                {item.concept}
              </span>
              <span className="text-green-600 dark:text-green-400 font-bold text-xs text-right ml-2">
                {item.answer}
              </span>
              <span className="text-amber-500 text-xs ml-2 shrink-0">
                {item.frequency}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Q.5 Table/Figure Analysis */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border border-purple-200 dark:border-purple-800 rounded-2xl p-4">
        <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3 flex items-center gap-2">
          <Calculator size={20} />
          Q.5 TABLE/FIGURE (8 Marks) — Practice These!
        </h3>
        <div className="space-y-2">
          {[
            {
              topic: "TU-MU Schedule Completion",
              formula: "MU = TUn − TUn-1",
              probability: "100%",
            },
            {
              topic: "Price Elasticity Calculation",
              formula: "Ed = (ΔQ/Q) × (P/ΔP)",
              probability: "95%",
            },
            {
              topic: "Equilibrium Price Determination",
              formula: "Dd = Ss at equilibrium",
              probability: "90%",
            },
            {
              topic: "GDP/NDP/NI Calculation",
              formula: "GDP=C+I+G+(X-M), NDP=GDP-D",
              probability: "85%",
            },
            {
              topic: "Index Number (Fisher)",
              formula: "Fisher = √(L × P)",
              probability: "85%",
            },
            {
              topic: "Linear Demand Curve Elasticity",
              formula: "Ed at points A,B,C,D,E",
              probability: "90%",
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
              <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs font-bold shrink-0">
                {item.probability}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Chapter-wise Priority */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm">
        <h3 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
          <Lightbulb size={20} className="text-amber-500" />
          Chapter-wise Priority (AI Analysis)
        </h3>
        <div className="space-y-3">
          <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-red-800 dark:text-red-200">
                🔴 CRITICAL — Score 90%+ here
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Ch 2: Utility (DMU)",
                "Ch 3A: Demand",
                "Ch 3B: Elasticity",
                "Ch 7: National Income",
                "Ch 8: Public Finance",
              ].map((ch) => (
                <span
                  key={ch}
                  className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-xs font-medium"
                >
                  {ch}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-amber-800 dark:text-amber-200">
                🟡 HIGH — Appears in Q.2, Q.3, Q.4
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Ch 1: Micro/Macro",
                "Ch 5: Market Forms",
                "Ch 9: Money & Capital Market",
              ].map((ch) => (
                <span
                  key={ch}
                  className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-xs font-medium"
                >
                  {ch}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-green-800 dark:text-green-200">
                🟢 MEDIUM — Q.1 Objectives + Q.3
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Ch 4: Supply",
                "Ch 6: Index Numbers",
                "Ch 10: Foreign Trade",
              ].map((ch) => (
                <span
                  key={ch}
                  className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium"
                >
                  {ch}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Must-Draw Graphs */}
      <div className="bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 rounded-2xl p-4">
        <h3 className="font-bold text-cyan-800 dark:text-cyan-200 mb-3 flex items-center gap-2">
          📊 Must-Draw Graphs (Extra Marks!)
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {[
            "TU & MU Curves",
            "Demand Curve (DD)",
            "5 Types of Ed",
            "Supply Curve (SS)",
            "Equilibrium (D=S)",
            "Expansion vs Increase",
            "Backward Bending Labour",
            "AR & MR in Monopoly",
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

      {/* 4-DAY STUDY PLAN: Feb 20-24 */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 text-white">
        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
          <Calendar size={20} /> 4-Day Study Plan (Feb 20-24)
        </h3>
        <div className="space-y-3">
          {[
            {
              day: "Day 1 (Feb 20 — Today)",
              tasks: [
                "📖 Ch 2: Utility Analysis — Law of DMU + exceptions (H MAP)",
                "📖 Ch 3A: Law of Demand + exceptions (HI GPS)",
                "📝 Practice 1 mock test (2022 paper)",
              ],
            },
            {
              day: "Day 2 (Feb 21)",
              tasks: [
                "📖 Ch 3B: Elasticity — Types + Total Expenditure + Geometric method",
                "📖 Ch 7: National Income — Features + Methods + Difficulties (VIP CID E)",
                "📝 Practice TU-MU tables & Ed calculations",
              ],
            },
            {
              day: "Day 3 (Feb 22)",
              tasks: [
                "📖 Ch 5: Market Forms — Perfect Competition + Monopoly features",
                "📖 Ch 8: Public Finance — Revenue sources (BF GF PS) + Expenditure growth (SIR DG)",
                "📝 Practice 2023 board paper",
              ],
            },
            {
              day: "Day 4 (Feb 23 — Last Day)",
              tasks: [
                "🌅 Morning: Practice Q.5 tables (MU, Ed, Index, GDP)",
                "🌞 Afternoon: Draw ALL diagrams at least once",
                "🌆 Evening: Revise shortcodes: LAB USP, H MAP, HI GPS, VIP CID E, SIR DG",
                "🌙 Night: Quick MCQ facts revision + sleep by 10 PM ⚡",
              ],
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white/15 rounded-xl p-3">
              <h4 className="font-bold text-sm mb-2">{item.day}</h4>
              <ul className="text-xs space-y-1">
                {item.tasks.map((task, tidx) => (
                  <li key={tidx}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Exam Day Tips */}
      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-4">
        <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3 flex items-center gap-2">
          <Zap size={20} /> Exam Day Tips (24th Feb)
        </h3>
        <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>
              <strong>Q.1 (20m):</strong> Do in 25 min max — easy marks, don't
              overthink
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>
              <strong>Q.4:</strong> Write "I agree/disagree" first (1 mark) +
              3-4 reasons with points a,b,c,d
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>
              <strong>Q.5 Tables:</strong> Show formula → substitute → calculate
              → box the answer
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>
              <strong>Q.6:</strong> Write Introduction + 5-6 points with
              headings + Conclusion + Diagram
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>
              <strong>Diagrams:</strong> Always draw with pencil, label X/Y
              axis, title. Earns extra marks!
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>
              <strong>Time:</strong> Q1=25m, Q2=18m, Q3=20m, Q4=20m, Q5=20m,
              Q6=35m → 42 min buffer
            </span>
          </li>
        </ul>
      </div>
    </div>
  );

  // Q.1 Objectives Mastery (20 Marks)
  const objectivesBank = {
    correlations: [
      {
        q: "Micro Economics : Tree :: Macro Economics : ___",
        a: "Forest",
        ch: "Ch 1",
      },
      {
        q: "Micro Economics : Price Theory :: Macro Economics : ___",
        a: "Income & Employment Theory",
        ch: "Ch 1",
      },
      {
        q: "Micro Economics : Worm's eye view :: Macro Economics : ___",
        a: "Bird's eye view",
        ch: "Ch 1",
      },
      {
        q: "Micro Economics : Slicing method :: Macro Economics : ___",
        a: "Lumping method",
        ch: "Ch 1",
      },
      {
        q: "Micro Economics : Partial Equilibrium :: Macro Economics : ___",
        a: "General Equilibrium",
        ch: "Ch 1",
      },
      {
        q: "Form utility : Furniture :: Service utility : ___",
        a: "Doctor / Teacher / Lawyer",
        ch: "Ch 2",
      },
      {
        q: "Time utility : Umbrella in monsoon :: Place utility : ___",
        a: "Woollen clothes in Kashmir",
        ch: "Ch 2",
      },
      {
        q: "Price & demand (normal goods) : Inverse :: Giffen goods : ___",
        a: "Direct relationship",
        ch: "Ch 3A",
      },
      {
        q: "Perfectly elastic demand : Ed = ∞ :: Perfectly inelastic demand : ___",
        a: "Ed = 0",
        ch: "Ch 3B",
      },
      {
        q: "Perfectly elastic demand : Ed = ∞ :: Unitary elastic demand : ___",
        a: "Ed = 1",
        ch: "Ch 3B",
      },
      {
        q: "Demand : Inverse with price :: Supply : ___",
        a: "Direct relation with price",
        ch: "Ch 4",
      },
      {
        q: "Price remains constant : Change in supply :: Price changes : ___",
        a: "Variation in supply",
        ch: "Ch 4",
      },
      {
        q: "Perfect competition : Many sellers :: Monopoly : ___",
        a: "Single seller",
        ch: "Ch 5",
      },
      {
        q: "Perfect competition : Homogeneous products :: Monopolistic : ___",
        a: "Differentiated products",
        ch: "Ch 5",
      },
      {
        q: "Total revenue : Quantity × Price :: Average revenue : ___",
        a: "Total Revenue / Total Quantity",
        ch: "Ch 5",
      },
      {
        q: "Output method : Product method :: Income method : ___",
        a: "Factor cost method",
        ch: "Ch 7",
      },
      {
        q: "Direct Tax : Progressive :: Indirect Tax : ___",
        a: "Regressive",
        ch: "Ch 8",
      },
      {
        q: "Personal income tax : Direct Tax :: GST : ___",
        a: "Indirect Tax",
        ch: "Ch 8",
      },
      {
        q: "Consumption expenditure : Revenue expenditure :: Repayment of loans : ___",
        a: "Capital expenditure",
        ch: "Ch 8",
      },
      {
        q: "Money Market : Short-term funds :: Capital Market : ___",
        a: "Long-term funds",
        ch: "Ch 9",
      },
    ],
    economicTerms: [
      {
        q: "Additional utility derived by a consumer from an additional unit consumed.",
        a: "Marginal Utility",
        ch: "Ch 2",
      },
      {
        q: "Sum total of utilities derived from all units of a commodity consumed.",
        a: "Total Utility",
        ch: "Ch 2",
      },
      {
        q: "The capacity of a commodity to satisfy human wants.",
        a: "Utility",
        ch: "Ch 2",
      },
      {
        q: "A desire backed by willingness to purchase and ability to pay.",
        a: "Demand",
        ch: "Ch 3A",
      },
      {
        q: "Price being constant, demand falls due to unfavorable changes in other factors.",
        a: "Decrease in Demand",
        ch: "Ch 3A",
      },
      {
        q: "Price being constant, demand rises due to favorable changes in other factors.",
        a: "Increase in Demand",
        ch: "Ch 3A",
      },
      {
        q: "Rise in demand due to fall in price (movement along curve).",
        a: "Expansion / Extension of Demand",
        ch: "Ch 3A",
      },
      {
        q: "Degree of responsiveness of quantity demanded to a change in price.",
        a: "Price Elasticity of Demand",
        ch: "Ch 3B",
      },
      {
        q: "Degree of responsiveness of quantity demanded to a change in income.",
        a: "Income Elasticity of Demand",
        ch: "Ch 3B",
      },
      {
        q: "Change in quantity demanded of one good due to change in price of another.",
        a: "Cross Elasticity of Demand",
        ch: "Ch 3B",
      },
      {
        q: "Revenue per unit of output sold.",
        a: "Average Revenue (AR)",
        ch: "Ch 5",
      },
      {
        q: "Addition to total revenue by selling one extra unit.",
        a: "Marginal Revenue (MR)",
        ch: "Ch 5",
      },
      {
        q: "Cost incurred by a firm to promote sales (e.g., advertisement).",
        a: "Selling Cost",
        ch: "Ch 5",
      },
      {
        q: "Period in which all factors of production are variable.",
        a: "Long Run Period",
        ch: "Ch 4",
      },
      {
        q: "Very realistic competition in nature.",
        a: "Monopolistic Competition",
        ch: "Ch 5",
      },
      {
        q: "Volume of commodities & services produced during a period without duplication.",
        a: "National Income",
        ch: "Ch 7",
      },
      {
        q: "Gross market value of all final goods & services produced within domestic territory.",
        a: "GDP at Market Price",
        ch: "Ch 7",
      },
      {
        q: "Income received without rendering any productive service.",
        a: "Transfer Income",
        ch: "Ch 7",
      },
      {
        q: "Amount received for the services of a factor of production.",
        a: "Factor Income",
        ch: "Ch 7",
      },
      {
        q: "A competition where price is determined by forces of demand and supply.",
        a: "Perfect Competition",
        ch: "Ch 5",
      },
    ],
    oddWordOut: [
      {
        q: [
          "Total Revenue",
          "Average Revenue",
          "Total Cost",
          "Marginal Revenue",
        ],
        a: "Total Cost",
        reason: "Cost concept; others are revenue concepts",
        ch: "Ch 5",
      },
      {
        q: [
          "Bank rate",
          "Open market operations",
          "Foreign Exchange rate",
          "Variable reserve ratio",
        ],
        a: "Foreign Exchange rate",
        reason: "Not a quantitative credit control tool",
        ch: "Ch 9",
      },
      {
        q: [
          "Theory of product pricing",
          "Theory of factor pricing",
          "Theory of Economic growth",
          "Theory of Economic Welfare",
        ],
        a: "Theory of Economic growth",
        reason: "Macro scope; others are Micro scope",
        ch: "Ch 1",
      },
      {
        q: ["Fees", "Penalty", "Wealth", "Special levy"],
        a: "Wealth",
        reason: "Not a non-tax revenue source",
        ch: "Ch 8",
      },
      {
        q: [
          "Laspeyre's Price Index",
          "Price Index Number",
          "Quantity Index Number",
          "Value Index Number",
        ],
        a: "Laspeyre's Price Index",
        reason: "Weighted Index; others are Simple Index types",
        ch: "Ch 6",
      },
      {
        q: ["Treasury Bills", "Commercial Paper", "Shares", "Call Money"],
        a: "Shares",
        reason: "Capital market instrument; others are money market",
        ch: "Ch 9",
      },
      {
        q: ["Wages", "Rent", "Scholarship", "Interest"],
        a: "Scholarship",
        reason: "Transfer income; others are factor incomes",
        ch: "Ch 7",
      },
      {
        q: ["Oligopoly", "Monopoly", "Duopoly", "Elasticity"],
        a: "Elasticity",
        reason: "Demand concept; others are market types",
        ch: "Ch 5",
      },
      {
        q: ["Import trade", "Export trade", "Entrepot trade", "Retail trade"],
        a: "Retail trade",
        reason: "Internal/domestic trade; others are foreign trade",
        ch: "Ch 10",
      },
      {
        q: ["Money lender", "Commercial bank", "Co-operative Bank", "RBI"],
        a: "Money lender",
        reason: "Unorganised sector; others are organised",
        ch: "Ch 9",
      },
      {
        q: ["Pension", "Unemployment allowance", "Wages", "Gifts"],
        a: "Wages",
        reason: "Factor income; others are transfer income",
        ch: "Ch 7",
      },
      {
        q: [
          "Price elasticity",
          "Income elasticity",
          "Less elastic",
          "Cross elasticity",
        ],
        a: "Less elastic",
        reason: "Degree of elasticity; others are types of elasticity",
        ch: "Ch 3B",
      },
      {
        q: ["Financial year", "Flow concept", "Money value", "Static concept"],
        a: "Static concept",
        reason: "Not a feature of National Income",
        ch: "Ch 7",
      },
      {
        q: [
          "Revenue expenditure",
          "Capital expenditure",
          "Plan expenditure",
          "Income elasticity",
        ],
        a: "Income elasticity",
        reason: "Demand concept; others are public expenditure types",
        ch: "Ch 8",
      },
      {
        q: [
          "Foreign Banks",
          "World Bank",
          "International Bank",
          "Central Bank",
        ],
        a: "Central Bank",
        reason: "Domestic institution; others are external debt sources",
        ch: "Ch 8",
      },
    ],
    mcqs: [
      {
        q: "Micro Economics is also called as:",
        options: [
          "Income theory",
          "Price theory",
          "Growth theory",
          "Employment theory",
        ],
        a: 1,
        ch: "Ch 1",
      },
      {
        q: "Method adopted in Macro Economics analysis:",
        options: [
          "Slicing method",
          "Aggregative/Lumping method",
          "Individualistic method",
          "Price theory",
        ],
        a: 1,
        ch: "Ch 1",
      },
      {
        q: "Whole Economy is studied in:",
        options: [
          "Micro Economics",
          "Macro Economics",
          "Econometrics",
          "Natural Sciences",
        ],
        a: 1,
        ch: "Ch 1",
      },
      {
        q: "MU becomes negative when TU is:",
        options: ["Rising", "Constant", "Falling", "Zero"],
        a: 2,
        ch: "Ch 2",
      },
      {
        q: "When TU is Maximum, MU is:",
        options: ["Maximum", "Minimum", "Negative", "Zero"],
        a: 3,
        ch: "Ch 2",
      },
      {
        q: "Relationship between demand and price (normal goods):",
        options: [
          "Direct",
          "Inverse",
          "No effect",
          "Can be direct and inverse",
        ],
        a: 1,
        ch: "Ch 3A",
      },
      {
        q: "Relationship between income and demand for inferior goods:",
        options: [
          "Direct",
          "Inverse",
          "No effect",
          "Can be direct and inverse",
        ],
        a: 1,
        ch: "Ch 3A",
      },
      {
        q: "Demand curve parallel to X-axis:",
        options: [
          "Perfectly elastic",
          "Perfectly inelastic",
          "Relatively elastic",
          "Relatively inelastic",
        ],
        a: 0,
        ch: "Ch 3B",
      },
      {
        q: "When %ΔQd < %ΔP, demand curve is:",
        options: ["Flatter", "Steeper", "Rectangular hyperbola", "Horizontal"],
        a: 1,
        ch: "Ch 3B",
      },
      {
        q: "Rightward shift in supply curve shows:",
        options: ["Contraction", "Decrease", "Expansion", "Increase in supply"],
        a: 3,
        ch: "Ch 4",
      },
      {
        q: "Supply curve slopes:",
        options: [
          "Downward left to right",
          "Upward left to right",
          "Parallel to X-axis",
          "Parallel to Y-axis",
        ],
        a: 1,
        ch: "Ch 4",
      },
      {
        q: "A market with few sellers and many buyers:",
        options: [
          "Monopoly",
          "Monopolistic Competition",
          "Oligopoly",
          "Perfect Competition",
        ],
        a: 2,
        ch: "Ch 5",
      },
      {
        q: "Cost incurred by firm to promote sales:",
        options: [
          "Total cost",
          "Average cost",
          "Marginal cost",
          "Selling cost",
        ],
        a: 3,
        ch: "Ch 5",
      },
      {
        q: "Stock exchange is a constituent of:",
        options: [
          "Capital market",
          "Money market",
          "Local market",
          "International market",
        ],
        a: 0,
        ch: "Ch 9",
      },
      {
        q: "The Central Bank of India is:",
        options: ["SBI", "Bank of India", "RBI", "Central Bank of India"],
        a: 2,
        ch: "Ch 9",
      },
      {
        q: "Which is NOT a function of RBI?",
        options: [
          "Issue currency",
          "Banker to govt",
          "Accept public deposits",
          "Controller of credit",
        ],
        a: 2,
        ch: "Ch 9",
      },
      {
        q: "Public expenditure shows:",
        options: [
          "Constant trend",
          "Increasing trend",
          "Decreasing trend",
          "Fluctuating",
        ],
        a: 1,
        ch: "Ch 8",
      },
      {
        q: "Revenue budget consists of:",
        options: [
          "Capital budget",
          "Govt budget",
          "Revenue receipts & expenditure",
          "Family budget",
        ],
        a: 2,
        ch: "Ch 8",
      },
      {
        q: "Purchase from one country, sell to another:",
        options: [
          "Entrepot trade",
          "Import trade",
          "Export trade",
          "National trade",
        ],
        a: 0,
        ch: "Ch 10",
      },
      {
        q: "In India, the financial year is:",
        options: ["Jan-Dec", "Apr-Mar", "Jul-Jun", "Mar-Feb"],
        a: 1,
        ch: "Ch 7",
      },
    ],
    assertionReasoning: [
      {
        assertion: "MU goes on diminishing.",
        reasoning: "TU increases at diminishing rate.",
        answer: "Both true; R is correct explanation of A",
        ch: "Ch 2",
      },
      {
        assertion: "With rising price, supply of a commodity falls.",
        reasoning: "Seller earns more profit at higher price.",
        answer: "A is false but R is true",
        ch: "Ch 4",
      },
      {
        assertion: "Index number considers all factors.",
        reasoning: "Index number is based on samples.",
        answer: "A is false but R is true",
        ch: "Ch 6",
      },
      {
        assertion: "Money market economises use of cash.",
        reasoning:
          "Money market does not deal with close substitutes of money.",
        answer: "A is true but R is false",
        ch: "Ch 9",
      },
      {
        assertion: "International trade leads to division of labour.",
        reasoning: "India's national trade is not increasing.",
        answer: "A is true but R is false",
        ch: "Ch 10",
      },
      {
        assertion:
          "In perfect competition, price is determined by demand & supply.",
        reasoning: "No single buyer/seller can influence price.",
        answer: "Both true; R is correct explanation of A",
        ch: "Ch 5",
      },
      {
        assertion:
          "Cross elasticity measures change in Qd of X due to price of Y.",
        reasoning: "Changes in income lead to change in Qd.",
        answer: "Both true; R is NOT the correct explanation",
        ch: "Ch 3B",
      },
      {
        assertion: "Production for self-consumption is not in NI.",
        reasoning: "Self-consumed products don't enter the market.",
        answer: "Both true; R is correct explanation of A",
        ch: "Ch 7",
      },
      {
        assertion: "Foreign exchange management is by commercial banks.",
        reasoning: "RBI maintains official rate of exchange.",
        answer: "A is false but R is true",
        ch: "Ch 9",
      },
      {
        assertion: "Supply is a relative term.",
        reasoning:
          "Supply is expressed in relation to price, time, and quantity.",
        answer: "Both true; R is correct explanation of A",
        ch: "Ch 4",
      },
    ],
  };

  const renderObjectives = () => (
    <div className="space-y-4 p-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-4 text-white">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
            ✅
          </div>
          <div>
            <h3 className="font-black text-xl">Q.1 Objectives Mastery</h3>
            <p className="text-white/90 text-sm">
              20 Marks • 25% of Paper • Score 18+ here!
            </p>
            <p className="text-white/70 text-xs mt-1">
              {objectivesBank.correlations.length +
                objectivesBank.economicTerms.length +
                objectivesBank.oddWordOut.length +
                objectivesBank.mcqs.length +
                objectivesBank.assertionReasoning.length}{" "}
              questions from past papers & predictions
            </p>
          </div>
        </div>
      </div>

      {/* Q.1 Breakdown */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm">
        <h3 className="font-bold text-slate-800 dark:text-white mb-3 text-sm">
          📋 Q.1 Breakdown (20 marks — Do in 25 min)
        </h3>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {[
            {
              sub: "A) Choose correct / Complete",
              marks: "5m",
              tip: "Read all options first",
            },
            {
              sub: "B) Odd word / Economic term",
              marks: "5m",
              tip: "Know classifications",
            },
            {
              sub: "C) Complete statement / Term",
              marks: "5m",
              tip: "Definitions matter",
            },
            {
              sub: "D) Correlation / Assertion",
              marks: "5m",
              tip: "Practice pairs",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-emerald-50 dark:bg-emerald-900/20 p-2.5 rounded-xl"
            >
              <p className="font-bold text-emerald-800 dark:text-emerald-200">
                {item.sub} — {item.marks}
              </p>
              <p className="text-emerald-600 dark:text-emerald-400 mt-0.5">
                💡 {item.tip}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 1. CORRELATIONS */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
        <button
          onClick={() =>
            setExpandedSection(
              expandedSection === "obj-corr" ? null : "obj-corr",
            )
          }
          className="w-full p-4 flex items-center justify-between bg-blue-50 dark:bg-blue-900/20"
        >
          <h4 className="font-bold text-blue-800 dark:text-blue-200 flex items-center gap-2">
            🔗 Complete the Correlation ({objectivesBank.correlations.length})
          </h4>
          {expandedSection === "obj-corr" ? (
            <ChevronDown size={20} />
          ) : (
            <ChevronRight size={20} />
          )}
        </button>
        {expandedSection === "obj-corr" && (
          <div className="p-4 space-y-3 max-h-[60vh] overflow-y-auto">
            {objectivesBank.correlations.map((item, idx) => {
              const id = `corr-${idx}`;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-700 p-3 rounded-xl"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="font-medium text-slate-800 dark:text-white text-sm flex-1">
                      <span className="text-blue-500 font-bold mr-1">
                        {idx + 1}.
                      </span>{" "}
                      {item.q}
                    </p>
                    <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded shrink-0">
                      {item.ch}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleAnswer(id)}
                    className={`w-full py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1 ${showAnswers[id] ? "bg-blue-500 text-white" : "bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300"}`}
                  >
                    {showAnswers[id] ? <EyeOff size={14} /> : <Eye size={14} />}
                    {showAnswers[id] ? "Hide" : "Show Answer"}
                  </button>
                  {showAnswers[id] && (
                    <p className="mt-2 text-green-600 dark:text-green-400 font-bold text-sm bg-green-50 dark:bg-green-900/20 p-2 rounded-lg">
                      ✅ {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 2. ECONOMIC TERMS */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
        <button
          onClick={() =>
            setExpandedSection(
              expandedSection === "obj-terms" ? null : "obj-terms",
            )
          }
          className="w-full p-4 flex items-center justify-between bg-purple-50 dark:bg-purple-900/20"
        >
          <h4 className="font-bold text-purple-800 dark:text-purple-200 flex items-center gap-2">
            📝 Give Economic Term ({objectivesBank.economicTerms.length})
          </h4>
          {expandedSection === "obj-terms" ? (
            <ChevronDown size={20} />
          ) : (
            <ChevronRight size={20} />
          )}
        </button>
        {expandedSection === "obj-terms" && (
          <div className="p-4 space-y-3 max-h-[60vh] overflow-y-auto">
            {objectivesBank.economicTerms.map((item, idx) => {
              const id = `term-${idx}`;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-700 p-3 rounded-xl"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="text-slate-800 dark:text-white text-sm flex-1">
                      <span className="text-purple-500 font-bold mr-1">
                        {idx + 1}.
                      </span>{" "}
                      {item.q}
                    </p>
                    <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded shrink-0">
                      {item.ch}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleAnswer(id)}
                    className={`w-full py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1 ${showAnswers[id] ? "bg-purple-500 text-white" : "bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300"}`}
                  >
                    {showAnswers[id] ? <EyeOff size={14} /> : <Eye size={14} />}
                    {showAnswers[id] ? "Hide" : "Show Answer"}
                  </button>
                  {showAnswers[id] && (
                    <p className="mt-2 text-green-600 dark:text-green-400 font-bold text-sm bg-green-50 dark:bg-green-900/20 p-2 rounded-lg">
                      ✅ {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 3. ODD WORD OUT */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
        <button
          onClick={() =>
            setExpandedSection(expandedSection === "obj-odd" ? null : "obj-odd")
          }
          className="w-full p-4 flex items-center justify-between bg-orange-50 dark:bg-orange-900/20"
        >
          <h4 className="font-bold text-orange-800 dark:text-orange-200 flex items-center gap-2">
            🔍 Find the Odd Word Out ({objectivesBank.oddWordOut.length})
          </h4>
          {expandedSection === "obj-odd" ? (
            <ChevronDown size={20} />
          ) : (
            <ChevronRight size={20} />
          )}
        </button>
        {expandedSection === "obj-odd" && (
          <div className="p-4 space-y-3 max-h-[60vh] overflow-y-auto">
            {objectivesBank.oddWordOut.map((item, idx) => {
              const id = `odd-${idx}`;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-700 p-3 rounded-xl"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="text-slate-800 dark:text-white text-sm font-medium">
                      <span className="text-orange-500 font-bold mr-1">
                        {idx + 1}.
                      </span>{" "}
                      Find the odd one:
                    </p>
                    <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 px-2 py-0.5 rounded shrink-0">
                      {item.ch}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 mb-2">
                    {item.q.map((word, widx) => (
                      <div
                        key={widx}
                        className={`p-2 rounded-lg text-xs text-center font-medium ${showAnswers[id] && word === item.a ? "bg-orange-500 text-white ring-2 ring-orange-300" : "bg-white dark:bg-slate-600 text-slate-700 dark:text-slate-300"}`}
                      >
                        {word}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => toggleAnswer(id)}
                    className={`w-full py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1 ${showAnswers[id] ? "bg-orange-500 text-white" : "bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300"}`}
                  >
                    {showAnswers[id] ? <EyeOff size={14} /> : <Eye size={14} />}
                    {showAnswers[id] ? "Hide" : "Show Answer"}
                  </button>
                  {showAnswers[id] && (
                    <p className="mt-2 text-xs text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 p-2 rounded-lg">
                      <strong>Odd:</strong> {item.a} — {item.reason}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 4. MCQs */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
        <button
          onClick={() =>
            setExpandedSection(expandedSection === "obj-mcq" ? null : "obj-mcq")
          }
          className="w-full p-4 flex items-center justify-between bg-green-50 dark:bg-green-900/20"
        >
          <h4 className="font-bold text-green-800 dark:text-green-200 flex items-center gap-2">
            ☑️ Choose the Correct Option ({objectivesBank.mcqs.length})
          </h4>
          {expandedSection === "obj-mcq" ? (
            <ChevronDown size={20} />
          ) : (
            <ChevronRight size={20} />
          )}
        </button>
        {expandedSection === "obj-mcq" && (
          <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
            {objectivesBank.mcqs.map((mcq, idx) => {
              const id = `objmcq-${idx}`;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-700 p-3 rounded-xl"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="font-medium text-slate-800 dark:text-white text-sm flex-1">
                      <span className="text-green-500 font-bold mr-1">
                        {idx + 1}.
                      </span>{" "}
                      {mcq.q}
                    </p>
                    <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-0.5 rounded shrink-0">
                      {mcq.ch}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-2">
                    {mcq.options.map((opt, optIdx) => (
                      <div
                        key={optIdx}
                        className={`p-2 rounded-lg text-xs ${showAnswers[id] && optIdx === mcq.a ? "bg-green-500 text-white font-bold" : "bg-white dark:bg-slate-600 text-slate-700 dark:text-slate-300"}`}
                      >
                        {String.fromCharCode(97 + optIdx)}) {opt}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => toggleAnswer(id)}
                    className={`w-full py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1 ${showAnswers[id] ? "bg-green-500 text-white" : "bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300"}`}
                  >
                    {showAnswers[id] ? <EyeOff size={14} /> : <Eye size={14} />}
                    {showAnswers[id] ? "Hide" : "Show Answer"}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 5. ASSERTION & REASONING */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
        <button
          onClick={() =>
            setExpandedSection(expandedSection === "obj-ar" ? null : "obj-ar")
          }
          className="w-full p-4 flex items-center justify-between bg-rose-50 dark:bg-rose-900/20"
        >
          <h4 className="font-bold text-rose-800 dark:text-rose-200 flex items-center gap-2">
            🧠 Assertion & Reasoning ({objectivesBank.assertionReasoning.length}
            )
          </h4>
          {expandedSection === "obj-ar" ? (
            <ChevronDown size={20} />
          ) : (
            <ChevronRight size={20} />
          )}
        </button>
        {expandedSection === "obj-ar" && (
          <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
            <div className="bg-rose-50 dark:bg-rose-900/20 p-3 rounded-xl text-xs text-rose-700 dark:text-rose-300 mb-2">
              <p className="font-bold mb-1">Options pattern:</p>
              <p>a) A true, R false</p>
              <p>b) A false, R true</p>
              <p>c) Both true, R is correct explanation</p>
              <p>d) Both true, R is NOT correct explanation</p>
            </div>
            {objectivesBank.assertionReasoning.map((item, idx) => {
              const id = `ar-${idx}`;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-700 p-3 rounded-xl"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex-1">
                      <p className="text-sm text-slate-800 dark:text-white mb-1">
                        <span className="text-rose-500 font-bold mr-1">
                          {idx + 1}.
                        </span>
                        <strong>A:</strong> {item.assertion}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        <strong>R:</strong> {item.reasoning}
                      </p>
                    </div>
                    <span className="text-xs bg-rose-100 dark:bg-rose-900 text-rose-700 dark:text-rose-300 px-2 py-0.5 rounded shrink-0">
                      {item.ch}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleAnswer(id)}
                    className={`w-full py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1 ${showAnswers[id] ? "bg-rose-500 text-white" : "bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300"}`}
                  >
                    {showAnswers[id] ? <EyeOff size={14} /> : <Eye size={14} />}
                    {showAnswers[id] ? "Hide" : "Show Answer"}
                  </button>
                  {showAnswers[id] && (
                    <p className="mt-2 text-green-600 dark:text-green-400 font-bold text-xs bg-green-50 dark:bg-green-900/20 p-2 rounded-lg">
                      ✅ {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Chapter-wise Strategy for Objectives */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 text-white">
        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
          <Target size={20} /> Chapters Most Tested in Q.1
        </h3>
        <div className="space-y-2 text-sm">
          {[
            {
              ch: "Ch 1 — Micro/Macro",
              tip: "Correlations: Tree/Forest, Slicing/Lumping, Price/Income theory",
            },
            {
              ch: "Ch 2 — Utility",
              tip: "Terms: MU, TU definitions • MCQ: TU max when MU=0",
            },
            {
              ch: "Ch 3 — Demand & Elasticity",
              tip: "Terms: Types of demand & elasticity • Correlations: Ed values",
            },
            {
              ch: "Ch 5 — Market Forms",
              tip: "MCQ: Market types & features • Terms: AR, MR, Selling Cost",
            },
            {
              ch: "Ch 7 — National Income",
              tip: "Odd one: NI features • Terms: GDP, NI, Transfer Income",
            },
            {
              ch: "Ch 8/9 — Public Finance & Markets",
              tip: "Odd one: Tax types, Revenue sources • MCQ: RBI functions",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white/15 rounded-xl p-2.5">
              <p className="font-bold text-xs">{item.ch}</p>
              <p className="text-white/80 text-xs mt-0.5">📌 {item.tip}</p>
            </div>
          ))}
        </div>
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

        {/* Chapter Shortcodes */}
        {chapter.shortcodes && chapter.shortcodes.length > 0 && (
          <div className="bg-violet-50 dark:bg-violet-900/20 border-2 border-violet-300 dark:border-violet-700 rounded-2xl p-4">
            <h4 className="font-bold text-violet-800 dark:text-violet-200 mb-2 flex items-center gap-2">
              <Brain size={18} /> 🧠 Shortcodes for this Chapter
            </h4>
            <div className="space-y-2">
              {chapter.shortcodes.map((sc: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800 rounded-xl p-3"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-black text-lg text-violet-700 dark:text-violet-300 tracking-wider">
                      {sc.code}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      →
                    </span>
                    <span className="font-bold text-sm text-slate-700 dark:text-slate-200">
                      {sc.topic}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {sc.breakdown}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

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
                  className="w-full p-4 flex items-center justify-between bg-green-50 dark:bg-green-900/20"
                >
                  <h4 className="font-bold text-green-800 dark:text-green-200 flex items-center gap-2">
                    <CheckCircle2 size={20} /> Q.1 Choose Correct Option (
                    {chapter.textbookExercises.mcqs.length} Qs)
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
                              <span className="text-green-600 dark:text-green-400 font-bold mr-2">
                                Q{idx + 1}.
                              </span>
                              {mcq.q}
                            </p>
                            {mcq.statements && (
                              <div className="grid grid-cols-2 gap-1.5 mb-2">
                                {mcq.statements.map((s: string, si: number) => (
                                  <div
                                    key={si}
                                    className="p-2 bg-white dark:bg-slate-600 rounded-lg text-xs text-slate-700 dark:text-slate-300"
                                  >
                                    {s}
                                  </div>
                                ))}
                              </div>
                            )}
                            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">
                              Options:
                            </p>
                            <div className="grid grid-cols-2 gap-1.5 mb-3">
                              {mcq.options.map(
                                (opt: string, optIdx: number) => (
                                  <div
                                    key={optIdx}
                                    className={`p-2 rounded-lg text-sm ${isRevealed && optIdx === mcq.correct ? "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 font-bold border-2 border-green-500" : "bg-white dark:bg-slate-600 text-slate-700 dark:text-slate-300"}`}
                                  >
                                    {optIdx + 1}) {opt}
                                  </div>
                                ),
                              )}
                            </div>
                            <button
                              onClick={() => toggleAnswer(mcqId)}
                              className={`w-full py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 ${isRevealed ? "bg-green-500 text-white" : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"}`}
                            >
                              {isRevealed ? (
                                <EyeOff size={16} />
                              ) : (
                                <Eye size={16} />
                              )}
                              {isRevealed ? "Hide Answer" : "Show Answer"}
                            </button>
                            {isRevealed && (
                              <div className="mt-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-3 rounded-xl">
                                <p className="font-bold text-green-700 dark:text-green-300 text-sm mb-1">
                                  ✅ Answer: {mcq.answer}
                                </p>
                                <p className="text-xs text-slate-600 dark:text-slate-400">
                                  {mcq.explanation}
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

            {/* Textbook Correlations */}
            {chapter.textbookExercises.correlations && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "tb-corr" ? null : "tb-corr",
                    )
                  }
                  className="w-full p-4 flex items-center justify-between bg-blue-50 dark:bg-blue-900/20"
                >
                  <h4 className="font-bold text-blue-800 dark:text-blue-200 flex items-center gap-2">
                    🔗 Q.2 Complete the Correlation (
                    {chapter.textbookExercises.correlations.length} Qs)
                  </h4>
                  {expandedSection === "tb-corr" ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </button>
                {expandedSection === "tb-corr" && (
                  <div className="p-4 space-y-3 max-h-[60vh] overflow-y-auto">
                    {chapter.textbookExercises.correlations.map(
                      (item: any, idx: number) => {
                        const id = `tb-corr-${chapterKey}-${idx}`;
                        return (
                          <div
                            key={idx}
                            className="bg-slate-50 dark:bg-slate-700 p-3 rounded-xl"
                          >
                            <p className="font-medium text-slate-800 dark:text-white text-sm mb-2">
                              <span className="text-blue-500 font-bold mr-1">
                                {idx + 1}.
                              </span>{" "}
                              {item.q}
                            </p>
                            <button
                              onClick={() => toggleAnswer(id)}
                              className={`w-full py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1 ${showAnswers[id] ? "bg-blue-500 text-white" : "bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300"}`}
                            >
                              {showAnswers[id] ? (
                                <EyeOff size={14} />
                              ) : (
                                <Eye size={14} />
                              )}
                              {showAnswers[id] ? "Hide" : "Show Answer"}
                            </button>
                            {showAnswers[id] && (
                              <div className="mt-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-3 rounded-xl">
                                <p className="font-bold text-blue-700 dark:text-blue-300 text-sm mb-1">
                                  ✅ {item.answer}
                                </p>
                                <p className="text-xs text-slate-600 dark:text-slate-400">
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

            {/* Textbook Concept Identification */}
            {chapter.textbookExercises.conceptIdentification && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "tb-concept" ? null : "tb-concept",
                    )
                  }
                  className="w-full p-4 flex items-center justify-between bg-purple-50 dark:bg-purple-900/20"
                >
                  <h4 className="font-bold text-purple-800 dark:text-purple-200 flex items-center gap-2">
                    💡 Q.3 Identify & Explain (
                    {chapter.textbookExercises.conceptIdentification.length} Qs)
                  </h4>
                  {expandedSection === "tb-concept" ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </button>
                {expandedSection === "tb-concept" && (
                  <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
                    {chapter.textbookExercises.conceptIdentification.map(
                      (item: any, idx: number) => {
                        const id = `tb-ci-${chapterKey}-${idx}`;
                        return (
                          <div
                            key={idx}
                            className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl"
                          >
                            <p className="text-slate-800 dark:text-white text-sm mb-3 italic">
                              "{item.statement}"
                            </p>
                            <button
                              onClick={() => toggleAnswer(id)}
                              className={`w-full py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 ${showAnswers[id] ? "bg-purple-500 text-white" : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"}`}
                            >
                              {showAnswers[id] ? (
                                <EyeOff size={16} />
                              ) : (
                                <Eye size={16} />
                              )}
                              {showAnswers[id] ? "Hide Answer" : "Show Answer"}
                            </button>
                            {showAnswers[id] && (
                              <div className="mt-3 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 p-3 rounded-xl">
                                <p className="font-bold text-purple-700 dark:text-purple-300 text-sm mb-2">
                                  ✅ Concept: {item.concept}
                                </p>
                                <p className="text-xs text-slate-600 dark:text-slate-400 whitespace-pre-wrap">
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

            {/* Textbook Short Answers */}
            {chapter.textbookExercises.shortAnswers && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "tb-short" ? null : "tb-short",
                    )
                  }
                  className="w-full p-4 flex items-center justify-between bg-orange-50 dark:bg-orange-900/20"
                >
                  <h4 className="font-bold text-orange-800 dark:text-orange-200 flex items-center gap-2">
                    <FileText size={20} /> Q.4 Short Answers (
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
                      (qa: any, idx: number) => {
                        const qaId = `tb-short-${chapterKey}-${idx}`;
                        return (
                          <div
                            key={idx}
                            className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl"
                          >
                            <div className="flex items-start justify-between gap-2 mb-3">
                              <p className="font-bold text-slate-800 dark:text-white text-sm flex-1">
                                {qa.question}
                              </p>
                              <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 px-2 py-1 rounded shrink-0">
                                {qa.marks}m
                              </span>
                            </div>
                            <button
                              onClick={() => toggleAnswer(qaId)}
                              className={`w-full py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 mb-3 ${showAnswers[qaId] ? "bg-orange-500 text-white" : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"}`}
                            >
                              {showAnswers[qaId] ? (
                                <EyeOff size={16} />
                              ) : (
                                <Eye size={16} />
                              )}
                              {showAnswers[qaId]
                                ? "Hide Model Answer"
                                : "Show Model Answer"}
                            </button>
                            {showAnswers[qaId] && (
                              <div className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap bg-white dark:bg-slate-800 p-4 rounded-xl border border-orange-200 dark:border-orange-800">
                                {qa.modelAnswer}
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

            {/* Textbook Agree/Disagree */}
            {chapter.textbookExercises.agreeDisagree && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "tb-agree" ? null : "tb-agree",
                    )
                  }
                  className="w-full p-4 flex items-center justify-between bg-amber-50 dark:bg-amber-900/20"
                >
                  <h4 className="font-bold text-amber-800 dark:text-amber-200 flex items-center gap-2">
                    ✅❌ Q.5 Agree or Disagree (
                    {chapter.textbookExercises.agreeDisagree.length} Qs)
                  </h4>
                  {expandedSection === "tb-agree" ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </button>
                {expandedSection === "tb-agree" && (
                  <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
                    {chapter.textbookExercises.agreeDisagree.map(
                      (item: any, idx: number) => {
                        const id = `tb-ad-${chapterKey}-${idx}`;
                        return (
                          <div
                            key={idx}
                            className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl"
                          >
                            <p className="font-bold text-slate-800 dark:text-white text-sm mb-3">
                              "{item.statement}"
                            </p>
                            <button
                              onClick={() => toggleAnswer(id)}
                              className={`w-full py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 mb-3 ${showAnswers[id] ? "bg-amber-500 text-white" : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"}`}
                            >
                              {showAnswers[id] ? (
                                <EyeOff size={16} />
                              ) : (
                                <Eye size={16} />
                              )}
                              {showAnswers[id]
                                ? "Hide Model Answer"
                                : "Show Model Answer"}
                            </button>
                            {showAnswers[id] && (
                              <div className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap bg-white dark:bg-slate-800 p-4 rounded-xl border border-amber-200 dark:border-amber-800">
                                {item.modelAnswer}
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

            {/* Textbook Long Answers */}
            {chapter.textbookExercises.longAnswers && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === "tb-long" ? null : "tb-long",
                    )
                  }
                  className="w-full p-4 flex items-center justify-between bg-red-50 dark:bg-red-900/20"
                >
                  <h4 className="font-bold text-red-800 dark:text-red-200 flex items-center gap-2">
                    <BookOpen size={20} /> Q.6 Long Answers (
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
                      (qa: any, idx: number) => {
                        const qaId = `tb-long-${chapterKey}-${idx}`;
                        return (
                          <div
                            key={idx}
                            className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl"
                          >
                            <div className="flex items-start justify-between gap-2 mb-3">
                              <p className="font-bold text-slate-800 dark:text-white text-sm flex-1">
                                {qa.question}
                              </p>
                              <span className="text-xs bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 px-2 py-1 rounded shrink-0">
                                {qa.marks}m
                              </span>
                            </div>
                            <button
                              onClick={() => toggleAnswer(qaId)}
                              className={`w-full py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 mb-3 ${showAnswers[qaId] ? "bg-red-500 text-white" : "bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300"}`}
                            >
                              {showAnswers[qaId] ? (
                                <EyeOff size={16} />
                              ) : (
                                <Eye size={16} />
                              )}
                              {showAnswers[qaId]
                                ? "Hide Model Answer"
                                : "Show Model Answer"}
                            </button>
                            {showAnswers[qaId] && (
                              <div className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap bg-white dark:bg-slate-800 p-4 rounded-xl border border-red-200 dark:border-red-800 max-h-[50vh] overflow-y-auto">
                                {qa.modelAnswer}
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
            4 DAYS
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
        {activeTab === "objectives" && renderObjectives()}
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
            { id: "objectives" as TabType, icon: "✅", label: "Q.1 (20m)" },
            { id: "formulas" as TabType, icon: "📐", label: "Formulas" },
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
