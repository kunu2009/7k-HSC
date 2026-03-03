import React from "react";
import {
  BookOpen,
  Brain,
  PenTool,
  TrendingUp,
  Calculator,
  Globe,
  Users,
  FileText,
  Clock,
  Calendar,
  Target,
  Award,
  Zap,
  Map,
  BookA,
  Flame,
  ChevronRight,
  Sparkles,
  AlertTriangle,
} from "lucide-react";
import { getSubjectBoardExamDate } from "../examTimetable";
import { Stream } from "../types";

interface SubjectStudyToolsProps {
  subjectId: string;
  subjectName: string;
  // Callbacks for opening various tools
  onOpenTool: (toolName: string) => void;
}

// Define which tools are available for each subject
const SUBJECT_TOOLS: Record<
  string,
  Array<{
    id: string;
    name: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    featured?: boolean;
  }>
> = {
  // Economics tools
  eco: [
    {
      id: "ecoBoardCrasher",
      name: "✅ BOARD CRASHER",
      description: "Exam Completed - Revision Mode",
      icon: <Award size={20} />,
      color: "bg-gray-500",
      featured: false, // Exam is done
    },
    {
      id: "ecoStudyHub",
      name: "Economics Hub",
      description: "Complete study dashboard",
      icon: <TrendingUp size={20} />,
      color: "bg-emerald-500",
    },
    {
      id: "ecoFormulaBank",
      name: "Formula Bank",
      description: "All formulas at one place",
      icon: <Calculator size={20} />,
      color: "bg-blue-500",
    },
    {
      id: "ecoGraphPractice",
      name: "Graph Practice",
      description: "Draw & understand graphs",
      icon: <TrendingUp size={20} />,
      color: "bg-purple-500",
    },
    {
      id: "ecoNumericalSolver",
      name: "Numerical Solver",
      description: "Step-by-step solutions",
      icon: <Calculator size={20} />,
      color: "bg-orange-500",
    },
    {
      id: "ecoElasticityCalc",
      name: "Elasticity Calculator",
      description: "Calculate elasticity values",
      icon: <Target size={20} />,
      color: "bg-cyan-500",
    },
    {
      id: "economicsCaseStudies",
      name: "Case Studies",
      description: "Real-world applications",
      icon: <BookOpen size={20} />,
      color: "bg-amber-500",
    },
  ],
  // History tools
  his: [
    {
      id: "historyBoardCrasher",
      name: "📜 BOARD CRASHER",
      description: "IMP Questions + PYQs + Dates",
      icon: <Zap size={20} />,
      color: "bg-orange-600",
      featured: true,
    },
    {
      id: "historyStudyHub",
      name: "History Hub",
      description: "Complete history resources",
      icon: <BookOpen size={20} />,
      color: "bg-orange-500",
    },
    {
      id: "historyTimelineQuiz",
      name: "Timeline Quiz",
      description: "Test your chronology",
      icon: <Clock size={20} />,
      color: "bg-teal-500",
    },
    {
      id: "historyChapterSummary",
      name: "Chapter Summaries",
      description: "Quick revision notes",
      icon: <FileText size={20} />,
      color: "bg-amber-500",
    },
    {
      id: "historyMapWork",
      name: "Map Work",
      description: "Practice map questions",
      icon: <Map size={20} />,
      color: "bg-green-500",
    },
    {
      id: "importantDates",
      name: "Important Dates",
      description: "Key dates to remember",
      icon: <Calendar size={20} />,
      color: "bg-red-500",
    },
    {
      id: "importantPersons",
      name: "Important Persons",
      description: "Key personalities",
      icon: <Award size={20} />,
      color: "bg-rose-500",
    },
    {
      id: "importantEvents",
      name: "Important Events",
      description: "Major historical events",
      icon: <Zap size={20} />,
      color: "bg-indigo-500",
    },
    {
      id: "eventSorting",
      name: "Event Sorting",
      description: "Arrange events chronologically",
      icon: <Clock size={20} />,
      color: "bg-violet-500",
    },
  ],
  // Political Science tools
  pol: [
    {
      id: "polScienceBoardCrasher",
      name: "🚨 BOARD CRASHER",
      description: "Exam in 3 days! All PYQs + Answers",
      icon: <Zap size={20} />,
      color: "bg-red-500",
      featured: true,
    },
    {
      id: "politicalScienceStudyHub",
      name: "Pol Science Hub",
      description: "Complete resources",
      icon: <Globe size={20} />,
      color: "bg-indigo-500",
    },
    {
      id: "politicalScienceHub",
      name: "Concept Hub",
      description: "Core concepts explained",
      icon: <Brain size={20} />,
      color: "bg-blue-500",
    },
    {
      id: "constitutionalArticles",
      name: "Constitution Articles",
      description: "Important articles",
      icon: <FileText size={20} />,
      color: "bg-amber-500",
    },
    {
      id: "currentAffairs",
      name: "Current Affairs",
      description: "Latest updates",
      icon: <Globe size={20} />,
      color: "bg-emerald-500",
    },
  ],
  // English tools
  eng: [
    {
      id: "englishStudyHub",
      name: "English Hub",
      description: "Complete English resources",
      icon: <BookA size={20} />,
      color: "bg-blue-500",
      featured: true,
    },
    {
      id: "englishWritingSkills",
      name: "Writing Skills",
      description: "Essay, letter, report",
      icon: <PenTool size={20} />,
      color: "bg-purple-500",
    },
    {
      id: "grammarMaster",
      name: "Grammar Master",
      description: "Practice grammar",
      icon: <BookOpen size={20} />,
      color: "bg-green-500",
    },
    {
      id: "literatureAnalysis",
      name: "Literature Analysis",
      description: "Prose & poetry",
      icon: <BookOpen size={20} />,
      color: "bg-rose-500",
    },
    {
      id: "writingTemplates",
      name: "Writing Templates",
      description: "Ready formats",
      icon: <FileText size={20} />,
      color: "bg-amber-500",
    },
  ],
  // Hindi tools
  hin: [
    {
      id: "hindiStudyHub",
      name: "Hindi Hub",
      description: "संपूर्ण हिंदी संसाधन",
      icon: <BookA size={20} />,
      color: "bg-orange-500",
      featured: true,
    },
    {
      id: "hindiGrammarHub",
      name: "व्याकरण Hub",
      description: "Hindi grammar practice",
      icon: <Brain size={20} />,
      color: "bg-rose-500",
    },
    {
      id: "hindiSahitya",
      name: "साहित्य",
      description: "Literature analysis",
      icon: <BookOpen size={20} />,
      color: "bg-pink-500",
    },
  ],
  // Geography tools
  geo: [
    {
      id: "geographyStudyHub",
      name: "Geography Hub",
      description: "Complete resources",
      icon: <Globe size={20} />,
      color: "bg-emerald-500",
      featured: true,
    },
    {
      id: "geographyConcepts",
      name: "Key Concepts",
      description: "Important concepts",
      icon: <Target size={20} />,
      color: "bg-teal-500",
    },
    {
      id: "artsMapMaster",
      name: "Map Master",
      description: "Practice map work",
      icon: <Map size={20} />,
      color: "bg-green-500",
    },
  ],
  // Sociology tools
  soc: [
    {
      id: "sociologyHub",
      name: "Sociology Hub",
      description: "Complete resources",
      icon: <Users size={20} />,
      color: "bg-violet-500",
      featured: true,
    },
    {
      id: "conceptGrouping",
      name: "Concept Groups",
      description: "Related concepts",
      icon: <Users size={20} />,
      color: "bg-purple-500",
    },
  ],
  // Psychology tools
  psy: [
    {
      id: "psychologyHub",
      name: "Psychology Hub",
      description: "Complete resources",
      icon: <Brain size={20} />,
      color: "bg-cyan-500",
      featured: true,
    },
  ],
  // Sanskrit tools
  san: [
    {
      id: "sanskritShlokBank",
      name: "श्लोक Bank",
      description: "Important shlokas",
      icon: <BookA size={20} />,
      color: "bg-amber-500",
      featured: true,
    },
  ],
  // OCM tools
  ocm: [
    {
      id: "definitionBuilder",
      name: "Definition Builder",
      description: "Build perfect definitions",
      icon: <FileText size={20} />,
      color: "bg-indigo-500",
      featured: true,
    },
    {
      id: "conceptGrouping",
      name: "Concept Groups",
      description: "Related management concepts",
      icon: <Target size={20} />,
      color: "bg-purple-500",
    },
  ],
  // SP tools
  sp: [
    {
      id: "definitionBuilder",
      name: "Definition Builder",
      description: "Corporate terminology",
      icon: <FileText size={20} />,
      color: "bg-purple-500",
      featured: true,
    },
  ],
  // BK tools
  bk: [
    {
      id: "ecoFormulaBank",
      name: "Formula Bank",
      description: "Accounting formulas",
      icon: <Calculator size={20} />,
      color: "bg-rose-500",
      featured: true,
    },
  ],
  // Physics tools
  phy: [
    {
      id: "formulaBank",
      name: "Formula Bank",
      description: "All physics formulas",
      icon: <Calculator size={20} />,
      color: "bg-blue-600",
      featured: true,
    },
    {
      id: "chainDiagram",
      name: "Derivation Chains",
      description: "Step by step derivations",
      icon: <Zap size={20} />,
      color: "bg-indigo-500",
    },
  ],
  // Chemistry tools
  chem: [
    {
      id: "formulaBank",
      name: "Formula Bank",
      description: "All chemistry formulas",
      icon: <Calculator size={20} />,
      color: "bg-teal-500",
      featured: true,
    },
    {
      id: "chainDiagram",
      name: "Reaction Chains",
      description: "Chemical reactions flow",
      icon: <Zap size={20} />,
      color: "bg-emerald-500",
    },
  ],
  // Math tools
  math: [
    {
      id: "formulaBank",
      name: "Formula Bank",
      description: "All math formulas",
      icon: <Calculator size={20} />,
      color: "bg-blue-500",
      featured: true,
    },
  ],
  // Biology tools
  bio: [
    {
      id: "chainDiagram",
      name: "Diagram Practice",
      description: "Label & draw diagrams",
      icon: <Target size={20} />,
      color: "bg-green-500",
      featured: true,
    },
  ],
};

// Universal tools available for all subjects
const UNIVERSAL_TOOLS = [
  {
    id: "last24Hours",
    name: "Last 24 Hrs",
    description: "Exam day revision",
    icon: <Clock size={20} />,
    color: "bg-red-500",
  },
  {
    id: "quickRevisionQuiz",
    name: "Quick Quiz",
    description: "Test yourself",
    icon: <Zap size={20} />,
    color: "bg-yellow-500",
  },
  {
    id: "oneMinuteChallenge",
    name: "1 Min Challenge",
    description: "Speed test",
    icon: <Clock size={20} />,
    color: "bg-orange-500",
  },
  {
    id: "mockTest",
    name: "Mock Test",
    description: "Full paper simulation",
    icon: <Target size={20} />,
    color: "bg-indigo-500",
  },
];

const SubjectStudyTools: React.FC<SubjectStudyToolsProps> = ({
  subjectId,
  subjectName,
  onOpenTool,
}) => {
  const subjectTools = SUBJECT_TOOLS[subjectId] || [];
  const historyExamDate =
    subjectId === "his" ? getSubjectBoardExamDate(Stream.ARTS, "his") : null;
  const daysUntilHistoryExam = (() => {
    if (!historyExamDate) return null;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const examDay = new Date(historyExamDate);
    examDay.setHours(0, 0, 0, 0);
    return Math.round(
      (examDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
    );
  })();
  const isHistoryExamNear =
    subjectId === "his" &&
    daysUntilHistoryExam !== null &&
    daysUntilHistoryExam >= 0 &&
    daysUntilHistoryExam <= 7;

  const orderedTools =
    subjectId === "his" && isHistoryExamNear
      ? [...subjectTools].sort((a, b) => {
          const priority = [
            "historyBoardCrasher",
            "historyTimelineQuiz",
            "historyMapWork",
            "historyChapterSummary",
            "historyStudyHub",
          ];
          const aIdx = priority.indexOf(a.id);
          const bIdx = priority.indexOf(b.id);
          const safeA = aIdx === -1 ? 999 : aIdx;
          const safeB = bIdx === -1 ? 999 : bIdx;
          return safeA - safeB;
        })
      : subjectTools;

  const examAwareTools = orderedTools.map((tool) => {
    if (
      subjectId === "his" &&
      tool.id === "historyBoardCrasher" &&
      daysUntilHistoryExam !== null &&
      daysUntilHistoryExam >= 0
    ) {
      return {
        ...tool,
        description:
          daysUntilHistoryExam <= 3
            ? `Exam in ${daysUntilHistoryExam} day${daysUntilHistoryExam === 1 ? "" : "s"} - solve Top 20 now`
            : `Exam in ${daysUntilHistoryExam} days - PYQs + dates + model answers`,
      };
    }
    return tool;
  });

  // If no specific tools for this subject, don't show the section
  if (examAwareTools.length === 0) {
    return null;
  }

  const featuredTool = examAwareTools.find((t) => t.featured);
  const otherTools = examAwareTools.filter((t) => !t.featured);

  return (
    <div className="mb-6">
      <h3 className="text-slate-800 dark:text-slate-200 font-bold text-lg mb-4 flex items-center gap-2">
        <Sparkles size={20} className="text-amber-500" />
        {subjectName} Study Tools
      </h3>

      {/* Economics Exam Completion Banner */}
      {subjectId === "eco" && (
        <div className="mb-4 rounded-xl border bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800 p-3 flex items-center gap-2">
          <Award size={16} className="text-green-500" />
          <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
            ✅ Economics exam completed (24 Feb 2026). Now focus on History exam
            (9 Mar 2026).
          </p>
        </div>
      )}

      {/* History Exam Urgency Banner */}
      {subjectId === "his" &&
        daysUntilHistoryExam !== null &&
        daysUntilHistoryExam >= 0 && (
          <div
            className={`mb-4 rounded-xl border p-3 flex items-center gap-2 ${
              daysUntilHistoryExam <= 3
                ? "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800"
                : daysUntilHistoryExam <= 7
                  ? "bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800"
                  : "bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800"
            }`}
          >
            <AlertTriangle
              size={16}
              className={
                daysUntilHistoryExam <= 3
                  ? "text-red-500"
                  : daysUntilHistoryExam <= 7
                    ? "text-orange-500"
                    : "text-yellow-500"
              }
            />
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
              ⚠️ History exam in {daysUntilHistoryExam} day
              {daysUntilHistoryExam === 1 ? "" : "s"}. Prioritize Board Crasher
              + Timeline + Map Work!
            </p>
          </div>
        )}

      {/* Featured Tool Card */}
      {featuredTool && (
        <button
          onClick={() => onOpenTool(featuredTool.id)}
          className={`w-full mb-4 ${featuredTool.color} p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.01] flex items-center gap-4`}
        >
          <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-white">
            {featuredTool.icon}
          </div>
          <div className="text-left flex-1">
            <span className="text-white font-bold block text-lg">
              {featuredTool.name}
            </span>
            <span className="text-white/80 text-xs">
              {featuredTool.description}
            </span>
          </div>
          <ChevronRight className="text-white/70" size={24} />
        </button>
      )}

      {/* Other Tools Grid */}
      {otherTools.length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {otherTools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => onOpenTool(tool.id)}
              className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 transition flex flex-col items-center gap-2"
            >
              <div
                className={`w-10 h-10 rounded-xl ${tool.color} text-white flex items-center justify-center`}
              >
                {tool.icon}
              </div>
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 text-center leading-tight">
                {tool.name}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Universal Tools - Collapsible/Smaller */}
      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
        <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
          Quick Actions
        </p>
        <div className="grid grid-cols-4 gap-2">
          {UNIVERSAL_TOOLS.map((tool) => (
            <button
              key={tool.id}
              onClick={() => onOpenTool(tool.id)}
              className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition flex flex-col items-center gap-1"
            >
              <div
                className={`w-8 h-8 rounded-lg ${tool.color} text-white flex items-center justify-center`}
              >
                {React.cloneElement(tool.icon as React.ReactElement, {
                  size: 16,
                })}
              </div>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 text-center">
                {tool.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectStudyTools;
