import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Layers,
  Zap,
  FileText,
  ChevronRight,
  ArrowLeft,
  GraduationCap,
  Video,
  Brain,
  PenTool,
  TrendingUp,
  Briefcase,
  Calculator,
  Sparkles,
  Clock,
  Star,
  PlayCircle,
  Home,
  LayoutGrid,
  X,
  Menu,
  PanelRightClose,
  PanelRightOpen,
  ArrowRight,
  Moon,
  Sun,
  Award,
  Globe,
  Atom,
  Dna,
  FlaskConical,
  Users,
  Building2,
  BookA,
  BarChart3,
  ClipboardList,
  Settings,
  User,
  LogOut,
  Timer,
  Flame,
  AlertTriangle,
  Target,
  BookMarked,
  Wind,
  Trophy,
  Bookmark,
  Shuffle,
  Puzzle,
  ListChecks,
  FileEdit,
  Map,
  MapPin,
  HelpCircle,
  Cloud,
  Share2,
  MessageSquare,
  Eye,
  Calendar,
  CheckCircle2,
  Circle,
  RotateCcw,
} from "lucide-react";
import { MOCK_DATA } from "./constants";
import { Stream, Subject, Chapter, ContentType } from "./types";
import { getSubjectBoardExamDate } from "./examTimetable";
import Flashcard from "./components/Flashcard";
import MCQView from "./components/MCQView";
import ReelView from "./components/ReelView";
import LongAnswerView from "./components/LongAnswerView";
import MarkdownRenderer from "./components/MarkdownRenderer";
import CountdownTimer from "./components/CountdownTimer";
import ProgressDashboard from "./components/ProgressDashboard";
import StudyPlanner from "./components/StudyPlanner";
import PreviousMarksInput from "./components/PreviousMarksInputNew";
import WeaknessAnalysis from "./components/WeaknessAnalysis";
import Onboarding from "./components/Onboarding";
import PomodoroTimer from "./components/PomodoroTimer";
import PomodoroTimerEnhanced from "./components/PomodoroTimerEnhanced";
import StudyStreak from "./components/StudyStreak";
import QuickTest from "./components/QuickTest";
import ErrorLog from "./components/ErrorLog";
import SpeedRevision from "./components/SpeedRevision";
import ExamSimulation from "./components/ExamSimulation";
import RevisionDashboard from "./components/RevisionDashboard";
import FormulaBank from "./components/FormulaBank";
import BreathingExercise from "./components/BreathingExercise";
import GoalSetting from "./components/GoalSetting";
import MatchPairs from "./components/MatchPairs";
import ChapterSummary from "./components/ChapterSummary";
import Achievements from "./components/Achievements";
import Bookmarks from "./components/Bookmarks";
import ProgressCharts from "./components/ProgressCharts";
import LastMinuteRevision from "./components/LastMinuteRevision";
import RandomChallenge from "./components/RandomChallenge";
import StudyNotes from "./components/StudyNotes";
import ArtsQuickSprint from "./components/ArtsQuickSprint";
import TimelineView from "./components/TimelineView";
import ClozeTest from "./components/ClozeTest";
import KeywordCloud from "./components/KeywordCloud";
import MindMapView from "./components/MindMapView";
import TeachBack from "./components/TeachBack";
import ActiveRecall from "./components/ActiveRecall";
import RapidFire from "./components/RapidFire";
import DailyTracker from "./components/DailyTracker";
import SpacedRepetition from "./components/SpacedRepetition";
import PreviousYearQuestions from "./components/PreviousYearQuestions";
import WritingPractice from "./components/WritingPractice";
import ReverseLearning from "./components/ReverseLearning";
import StudyHeatmap from "./components/StudyHeatmap";
import SmartWeakness from "./components/SmartWeakness";
import WeeklyReport from "./components/WeeklyReport";
import StudyWrapped2025 from "./components/StudyWrapped2025";
import QuickStatsWidget from "./components/QuickStatsWidget";
import SubjectCountdown from "./components/SubjectCountdown";
import ChapterProgressWidget from "./components/ChapterProgressWidget";
import ExamDayBanner from "./components/ExamDayBanner";
import EcoStudyHub from "./components/EcoStudyHub";
import EcoFormulaBank from "./components/EcoFormulaBank";
import EcoGraphPractice from "./components/EcoGraphPractice";
import EcoNumericalSolver from "./components/EcoNumericalSolver";
import EcoElasticityCalc from "./components/EcoElasticityCalc";
import ArtsStudyHub from "./components/ArtsStudyHub";
import HistoryTimelineQuiz from "./components/HistoryTimelineQuiz";
import ArtsQuickReference from "./components/ArtsQuickReference";
import LiteratureAnalysis from "./components/LiteratureAnalysis";
import PoliticalScienceHub from "./components/PoliticalScienceHub";
import HindiGrammarHub from "./components/HindiGrammarHub";
import GeographyConcepts from "./components/GeographyConcepts";
import EnglishWritingSkills from "./components/EnglishWritingSkills";
import EconomicsCaseStudies from "./components/EconomicsCaseStudies";
import HistoryChapterSummary from "./components/HistoryChapterSummary";
import ConstitutionalArticles from "./components/ConstitutionalArticles";
import HindiSahitya from "./components/HindiSahitya";
import SociologyHub from "./components/SociologyHub";
import PsychologyHub from "./components/PsychologyHub";
import HistoryStudyHub from "./components/HistoryStudyHub";
import GeographyStudyHub from "./components/GeographyStudyHub";
import EnglishStudyHub from "./components/EnglishStudyHub";
import HindiStudyHub from "./components/HindiStudyHub";
import PoliticalScienceStudyHub from "./components/PoliticalScienceStudyHub";
import EconomicsStudyHub from "./components/EconomicsStudyHub";
import QuickRevisionQuiz from "./components/QuickRevisionQuiz";
import ImportantDates from "./components/ImportantDates";
import ImportantPersons from "./components/ImportantPersons";
import OneMinuteChallenge from "./components/OneMinuteChallenge";
import PYQBank from "./components/PYQBank";
import WritingTemplates from "./components/WritingTemplates";
import HistoryMapWork from "./components/HistoryMapWork";
import SanskritShlokBank from "./components/SanskritShlokBank";
import CurrentAffairs from "./components/CurrentAffairs";
import SpeedQuiz from "./components/SpeedQuiz";
import BoardExamTips from "./components/BoardExamTips";
import GrammarMaster from "./components/GrammarMaster";
import MockTest from "./components/MockTest";
import ImportantEvents from "./components/ImportantEvents";
import SyllabusCrusher82 from "./components/SyllabusCrusher82";
import MockTestBank from "./components/MockTestBank";
import DefinitionBuilder from "./components/DefinitionBuilder";
import LayeredRevisionCards from "./components/LayeredRevisionCards";
import ArtsExamCountdown from "./components/ArtsExamCountdown";
import ArtsMasterFormula from "./components/ArtsMasterFormula";
import ArtsMasterQuiz from "./components/ArtsMasterQuiz";
import ArtsMapMaster from "./components/ArtsMapMaster";
import ArtsWritingGuide from "./components/ArtsWritingGuide";
import ArtsCurrentAffairs from "./components/ArtsCurrentAffairs";
import MegaBoardCrasher from "./components/MegaBoardCrasher";
import Random5Game from "./components/Random5Game";
import EventSorting from "./components/EventSorting";
import ConceptGrouping from "./components/ConceptGrouping";
import ChainDiagram from "./components/ChainDiagram";
import MistakeMeter from "./components/MistakeMeter";
import RepetitionTracker from "./components/RepetitionTracker";
import SpeedChallenge from "./components/SpeedChallenge";
import SubjectStudyTools from "./components/SubjectStudyTools";
import Last24HoursRevision from "./components/Last24HoursRevision";
import DailyMotivation from "./components/DailyMotivation";
import TodaysFocus from "./components/TodaysFocus";
import { useProgress } from "./hooks/useProgress";
import { useChapterCompletion } from "./hooks/useChapterCompletion";
import { explainConcept } from "./services/geminiService";
import { db, UserProfile } from "./services/localDb";

// --- Types ---
type ViewState =
  | "STREAM_SELECT"
  | "DASHBOARD"
  | "SUBJECT_DETAIL"
  | "CHAPTER_DETAIL"
  | "STUDY_MODE"
  | "SYLLABUS_VIEW"
  | "PAPER_PATTERN_VIEW"
  | "PROGRESS_VIEW"
  | "STUDY_PLANNER"
  | "SETTINGS";

const App: React.FC = () => {
  const [isOnboarded, setIsOnboarded] = useState<boolean>(true); // Default true to avoid flash
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [view, setView] = useState<ViewState>("STREAM_SELECT");
  const [selectedStream, setSelectedStream] = useState<Stream | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [studyMode, setStudyMode] = useState<ContentType | null>(null);

  const [chapterTab, setChapterTab] = useState<"OVERVIEW" | "NOTES">(
    "OVERVIEW",
  );
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiQuery, setAiQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Study Tools Modal States
  const [showPomodoro, setShowPomodoro] = useState(false);
  const [showStudyStreak, setShowStudyStreak] = useState(false);
  const [showQuickTest, setShowQuickTest] = useState(false);
  const [showErrorLog, setShowErrorLog] = useState(false);
  const [showSpeedRevision, setShowSpeedRevision] = useState(false);
  const [showExamSimulation, setShowExamSimulation] = useState(false);
  const [showRevisionDashboard, setShowRevisionDashboard] = useState(false);
  const [showFormulaBank, setShowFormulaBank] = useState(false);
  const [showBreathing, setShowBreathing] = useState(false);
  const [showGoalSetting, setShowGoalSetting] = useState(false);
  const [showMatchPairs, setShowMatchPairs] = useState(false);
  const [showChapterSummary, setShowChapterSummary] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [showProgressCharts, setShowProgressCharts] = useState(false);
  const [showLastMinute, setShowLastMinute] = useState(false);
  const [showRandomChallenge, setShowRandomChallenge] = useState(false);
  const [showStudyNotes, setShowStudyNotes] = useState(false);
  const [showArtsQuickSprint, setShowArtsQuickSprint] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  const [showClozeTest, setShowClozeTest] = useState(false);
  const [showKeywordCloud, setShowKeywordCloud] = useState(false);
  const [showMindMap, setShowMindMap] = useState(false);
  const [showTeachBack, setShowTeachBack] = useState(false);
  const [showActiveRecall, setShowActiveRecall] = useState(false);
  const [showRapidFire, setShowRapidFire] = useState(false);
  const [showDailyTracker, setShowDailyTracker] = useState(false);
  const [showSpacedRepetition, setShowSpacedRepetition] = useState(false);
  const [showPYQ, setShowPYQ] = useState(false);
  const [showWritingPractice, setShowWritingPractice] = useState(false);
  const [showReverseLearning, setShowReverseLearning] = useState(false);
  const [showStudyHeatmap, setShowStudyHeatmap] = useState(false);
  const [showSmartWeakness, setShowSmartWeakness] = useState(false);
  const [showWeeklyReport, setShowWeeklyReport] = useState(false);
  const [showStudyWrapped2025, setShowStudyWrapped2025] = useState(false);
  const [showEcoStudyHub, setShowEcoStudyHub] = useState(false);
  const [showEcoFormulaBank, setShowEcoFormulaBank] = useState(false);
  const [showEcoGraphPractice, setShowEcoGraphPractice] = useState(false);
  const [showEcoNumericalSolver, setShowEcoNumericalSolver] = useState(false);
  const [showEcoElasticityCalc, setShowEcoElasticityCalc] = useState(false);
  const [showArtsStudyHub, setShowArtsStudyHub] = useState(false);
  const [showHistoryTimelineQuiz, setShowHistoryTimelineQuiz] = useState(false);
  const [showArtsQuickReference, setShowArtsQuickReference] = useState(false);
  const [showLiteratureAnalysis, setShowLiteratureAnalysis] = useState(false);
  const [showPoliticalScienceHub, setShowPoliticalScienceHub] = useState(false);
  const [showHindiGrammarHub, setShowHindiGrammarHub] = useState(false);
  const [showGeographyConcepts, setShowGeographyConcepts] = useState(false);
  const [showEnglishWritingSkills, setShowEnglishWritingSkills] =
    useState(false);
  const [showEconomicsCaseStudies, setShowEconomicsCaseStudies] =
    useState(false);
  const [showHistoryChapterSummary, setShowHistoryChapterSummary] =
    useState(false);
  const [showConstitutionalArticles, setShowConstitutionalArticles] =
    useState(false);
  const [showHindiSahitya, setShowHindiSahitya] = useState(false);
  const [showSociologyHub, setShowSociologyHub] = useState(false);
  const [showPsychologyHub, setShowPsychologyHub] = useState(false);
  const [showQuickRevisionQuiz, setShowQuickRevisionQuiz] = useState(false);
  const [showImportantDates, setShowImportantDates] = useState(false);
  const [showImportantPersons, setShowImportantPersons] = useState(false);
  const [showOneMinuteChallenge, setShowOneMinuteChallenge] = useState(false);
  const [showPYQBank, setShowPYQBank] = useState(false);
  const [showWritingTemplates, setShowWritingTemplates] = useState(false);
  const [showHistoryMapWork, setShowHistoryMapWork] = useState(false);
  const [showSanskritShlokBank, setShowSanskritShlokBank] = useState(false);
  const [showCurrentAffairs, setShowCurrentAffairs] = useState(false);
  const [showSpeedQuiz, setShowSpeedQuiz] = useState(false);
  const [showBoardExamTips, setShowBoardExamTips] = useState(false);
  const [showGrammarMaster, setShowGrammarMaster] = useState(false);
  const [showMockTest, setShowMockTest] = useState(false);
  const [showImportantEvents, setShowImportantEvents] = useState(false);
  const [showSyllabusCrusher82, setShowSyllabusCrusher82] = useState(false);
  const [showMockTestBank, setShowMockTestBank] = useState(false);
  const [showDefinitionBuilder, setShowDefinitionBuilder] = useState(false);
  const [showLayeredRevisionCards, setShowLayeredRevisionCards] =
    useState(false);
  const [showRandom5Game, setShowRandom5Game] = useState(false);
  const [showEventSorting, setShowEventSorting] = useState(false);
  const [showConceptGrouping, setShowConceptGrouping] = useState(false);
  const [showChainDiagram, setShowChainDiagram] = useState(false);
  const [showMistakeMeter, setShowMistakeMeter] = useState(false);
  const [showRepetitionTracker, setShowRepetitionTracker] = useState(false);
  const [showSpeedChallenge, setShowSpeedChallenge] = useState(false);
  const [showHistoryStudyHub, setShowHistoryStudyHub] = useState(false);
  const [showGeographyStudyHub, setShowGeographyStudyHub] = useState(false);
  const [showEnglishStudyHub, setShowEnglishStudyHub] = useState(false);
  const [showHindiStudyHub, setShowHindiStudyHub] = useState(false);
  const [showPoliticalScienceStudyHub, setShowPoliticalScienceStudyHub] =
    useState(false);
  const [showEconomicsStudyHub, setShowEconomicsStudyHub] = useState(false);
  const [showArtsExamCountdown, setShowArtsExamCountdown] = useState(false);
  const [showArtsMasterFormula, setShowArtsMasterFormula] = useState(false);
  const [showArtsMasterQuiz, setShowArtsMasterQuiz] = useState(false);
  const [showArtsMapMaster, setShowArtsMapMaster] = useState(false);
  const [showArtsWritingGuide, setShowArtsWritingGuide] = useState(false);
  const [showArtsCurrentAffairs, setShowArtsCurrentAffairs] = useState(false);
  const [showMegaBoardCrasher, setShowMegaBoardCrasher] = useState(false);
  const [showLast24Hours, setShowLast24Hours] = useState(false);

  // Dark Mode State
  const [darkMode, setDarkMode] = useState(() => db.getSettings().darkMode);

  // Get filtered subjects based on user's selection (only shows selected + compulsory subjects)
  const getFilteredSubjects = (): Subject[] => {
    if (!selectedStream || !MOCK_DATA[selectedStream]) return [];
    const allSubjects = MOCK_DATA[selectedStream].subjects;

    // If no user profile, return all subjects
    if (
      !userProfile ||
      !userProfile.selectedSubjects ||
      userProfile.selectedSubjects.length === 0
    ) {
      return allSubjects;
    }

    // Filter to only show subjects the user selected (includes compulsory subjects added during onboarding)
    return allSubjects.filter((sub) =>
      userProfile.selectedSubjects.includes(sub.id),
    );
  };

  // Progress Tracking
  const {
    getChapterProgress,
    updateMCQProgress,
    updateFlashcardProgress,
    updateReelsProgress,
    markSummaryRead,
    markNotesRead,
    getSubjectCompletion,
    getStudyStats,
  } = useProgress();

  // Chapter Completion Tracking
  const filteredSubjectsForHook = React.useMemo(() => {
    if (!selectedStream || !MOCK_DATA[selectedStream]) return [];
    const allSubjects = MOCK_DATA[selectedStream].subjects;
    if (
      !userProfile ||
      !userProfile.selectedSubjects ||
      userProfile.selectedSubjects.length === 0
    ) {
      return allSubjects;
    }
    return allSubjects.filter((sub) =>
      userProfile.selectedSubjects.includes(sub.id),
    );
  }, [selectedStream, userProfile]);

  const {
    isChapterCompleted,
    toggleChapter,
    getSubjectProgress: getChapterSubjectProgress,
    getOverallProgress,
  } = useChapterCompletion(selectedStream, filteredSubjectsForHook);

  // Check onboarding status on mount
  useEffect(() => {
    const profile = db.getUserProfile();
    if (profile) {
      setUserProfile(profile);
      setSelectedStream(profile.stream);
      setIsOnboarded(true);
      setView("DASHBOARD");
    } else {
      setIsOnboarded(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    db.saveSettings({ darkMode });
  }, [darkMode]);

  // Create a map of completed chapters for TodaysFocus component
  const completedChaptersMap = React.useMemo(() => {
    const map: Record<string, boolean> = {};
    filteredSubjectsForHook.forEach((subject) => {
      subject.chapters.forEach((chapter) => {
        map[`${subject.id}_${chapter.id}`] = isChapterCompleted(
          subject.id,
          chapter.id,
        );
      });
    });
    return map;
  }, [filteredSubjectsForHook, isChapterCompleted]);

  // ==================== BACK BUTTON HANDLING ====================
  // Handle Android/Mobile back button to navigate within the app instead of exiting
  useEffect(() => {
    // Function to close any open modal
    const closeAnyOpenModal = (): boolean => {
      // Check all modal states and close the first open one
      const modalSetters = [
        { state: showLast24Hours, setter: setShowLast24Hours },
        { state: showMegaBoardCrasher, setter: setShowMegaBoardCrasher },
        { state: showPomodoro, setter: setShowPomodoro },
        { state: showStudyStreak, setter: setShowStudyStreak },
        { state: showQuickTest, setter: setShowQuickTest },
        { state: showErrorLog, setter: setShowErrorLog },
        { state: showSpeedRevision, setter: setShowSpeedRevision },
        { state: showExamSimulation, setter: setShowExamSimulation },
        { state: showRevisionDashboard, setter: setShowRevisionDashboard },
        { state: showFormulaBank, setter: setShowFormulaBank },
        { state: showBreathing, setter: setShowBreathing },
        { state: showGoalSetting, setter: setShowGoalSetting },
        { state: showMatchPairs, setter: setShowMatchPairs },
        { state: showChapterSummary, setter: setShowChapterSummary },
        { state: showAchievements, setter: setShowAchievements },
        { state: showBookmarks, setter: setShowBookmarks },
        { state: showProgressCharts, setter: setShowProgressCharts },
        { state: showLastMinute, setter: setShowLastMinute },
        { state: showRandomChallenge, setter: setShowRandomChallenge },
        { state: showStudyNotes, setter: setShowStudyNotes },
        { state: showArtsQuickSprint, setter: setShowArtsQuickSprint },
        { state: showTimeline, setter: setShowTimeline },
        { state: showClozeTest, setter: setShowClozeTest },
        { state: showKeywordCloud, setter: setShowKeywordCloud },
        { state: showMindMap, setter: setShowMindMap },
        { state: showTeachBack, setter: setShowTeachBack },
        { state: showActiveRecall, setter: setShowActiveRecall },
        { state: showRapidFire, setter: setShowRapidFire },
        { state: showDailyTracker, setter: setShowDailyTracker },
        { state: showSpacedRepetition, setter: setShowSpacedRepetition },
        { state: showPYQ, setter: setShowPYQ },
        { state: showWritingPractice, setter: setShowWritingPractice },
        { state: showReverseLearning, setter: setShowReverseLearning },
        { state: showStudyHeatmap, setter: setShowStudyHeatmap },
        { state: showSmartWeakness, setter: setShowSmartWeakness },
        { state: showWeeklyReport, setter: setShowWeeklyReport },
        { state: showStudyWrapped2025, setter: setShowStudyWrapped2025 },
        { state: showEcoStudyHub, setter: setShowEcoStudyHub },
        { state: showEcoFormulaBank, setter: setShowEcoFormulaBank },
        { state: showEcoGraphPractice, setter: setShowEcoGraphPractice },
        { state: showEcoNumericalSolver, setter: setShowEcoNumericalSolver },
        { state: showEcoElasticityCalc, setter: setShowEcoElasticityCalc },
        { state: showArtsStudyHub, setter: setShowArtsStudyHub },
        { state: showHistoryTimelineQuiz, setter: setShowHistoryTimelineQuiz },
        { state: showArtsQuickReference, setter: setShowArtsQuickReference },
        { state: showLiteratureAnalysis, setter: setShowLiteratureAnalysis },
        { state: showPoliticalScienceHub, setter: setShowPoliticalScienceHub },
        { state: showHindiGrammarHub, setter: setShowHindiGrammarHub },
        { state: showGeographyConcepts, setter: setShowGeographyConcepts },
        {
          state: showEnglishWritingSkills,
          setter: setShowEnglishWritingSkills,
        },
        {
          state: showEconomicsCaseStudies,
          setter: setShowEconomicsCaseStudies,
        },
        {
          state: showHistoryChapterSummary,
          setter: setShowHistoryChapterSummary,
        },
        {
          state: showConstitutionalArticles,
          setter: setShowConstitutionalArticles,
        },
        { state: showHindiSahitya, setter: setShowHindiSahitya },
        { state: showSociologyHub, setter: setShowSociologyHub },
        { state: showPsychologyHub, setter: setShowPsychologyHub },
        { state: showQuickRevisionQuiz, setter: setShowQuickRevisionQuiz },
        { state: showImportantDates, setter: setShowImportantDates },
        { state: showImportantPersons, setter: setShowImportantPersons },
        { state: showOneMinuteChallenge, setter: setShowOneMinuteChallenge },
        { state: showPYQBank, setter: setShowPYQBank },
        { state: showWritingTemplates, setter: setShowWritingTemplates },
        { state: showHistoryMapWork, setter: setShowHistoryMapWork },
        { state: showSanskritShlokBank, setter: setShowSanskritShlokBank },
        { state: showCurrentAffairs, setter: setShowCurrentAffairs },
        { state: showSpeedQuiz, setter: setShowSpeedQuiz },
        { state: showBoardExamTips, setter: setShowBoardExamTips },
        { state: showGrammarMaster, setter: setShowGrammarMaster },
        { state: showMockTest, setter: setShowMockTest },
        { state: showImportantEvents, setter: setShowImportantEvents },
        { state: showSyllabusCrusher82, setter: setShowSyllabusCrusher82 },
        { state: showMockTestBank, setter: setShowMockTestBank },
        { state: showDefinitionBuilder, setter: setShowDefinitionBuilder },
        {
          state: showLayeredRevisionCards,
          setter: setShowLayeredRevisionCards,
        },
        { state: showRandom5Game, setter: setShowRandom5Game },
        { state: showEventSorting, setter: setShowEventSorting },
        { state: showConceptGrouping, setter: setShowConceptGrouping },
        { state: showChainDiagram, setter: setShowChainDiagram },
        { state: showMistakeMeter, setter: setShowMistakeMeter },
        { state: showRepetitionTracker, setter: setShowRepetitionTracker },
        { state: showSpeedChallenge, setter: setShowSpeedChallenge },
        { state: showHistoryStudyHub, setter: setShowHistoryStudyHub },
        { state: showGeographyStudyHub, setter: setShowGeographyStudyHub },
        { state: showEnglishStudyHub, setter: setShowEnglishStudyHub },
        { state: showHindiStudyHub, setter: setShowHindiStudyHub },
        {
          state: showPoliticalScienceStudyHub,
          setter: setShowPoliticalScienceStudyHub,
        },
        { state: showEconomicsStudyHub, setter: setShowEconomicsStudyHub },
        { state: showArtsExamCountdown, setter: setShowArtsExamCountdown },
        { state: showArtsMasterFormula, setter: setShowArtsMasterFormula },
        { state: showArtsMasterQuiz, setter: setShowArtsMasterQuiz },
        { state: showArtsMapMaster, setter: setShowArtsMapMaster },
        { state: showArtsWritingGuide, setter: setShowArtsWritingGuide },
        { state: showArtsCurrentAffairs, setter: setShowArtsCurrentAffairs },
        { state: aiModalOpen, setter: setAiModalOpen },
      ];

      for (const modal of modalSetters) {
        if (modal.state) {
          modal.setter(false);
          return true;
        }
      }
      return false;
    };

    // Handle navigation based on current view
    const handleBackNavigation = (): boolean => {
      // First, try to close any open modal
      if (closeAnyOpenModal()) {
        return true;
      }

      // Then handle view navigation
      switch (view) {
        case "STUDY_MODE":
          setStudyMode(null);
          setView("CHAPTER_DETAIL");
          return true;
        case "CHAPTER_DETAIL":
          setSelectedChapter(null);
          setView("SUBJECT_DETAIL");
          return true;
        case "SUBJECT_DETAIL":
          setSelectedSubject(null);
          setView("DASHBOARD");
          return true;
        case "SYLLABUS_VIEW":
        case "PAPER_PATTERN_VIEW":
        case "PROGRESS_VIEW":
        case "STUDY_PLANNER":
        case "SETTINGS":
          setView("DASHBOARD");
          return true;
        case "DASHBOARD":
          // At dashboard, don't go back to stream select if user is logged in
          // Instead, show a toast or do nothing
          return false; // Allow default behavior (exit app) at dashboard
        case "STREAM_SELECT":
          return false; // Allow default behavior at stream select
        default:
          return false;
      }
    };

    // Push initial state to history
    const pushHistoryState = () => {
      window.history.pushState({ appState: true }, "");
    };

    // Handle the popstate event (back button press)
    const handlePopState = (event: PopStateEvent) => {
      // Prevent default back navigation
      const handled = handleBackNavigation();

      if (handled) {
        // Push a new state to keep the history stack
        pushHistoryState();
      }
      // If not handled, the default behavior (exit/go back) will occur
    };

    // Initialize: push a state so we can catch the back button
    pushHistoryState();

    // Listen for back button
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [
    view,
    showMegaBoardCrasher,
    showPomodoro,
    showStudyStreak,
    showQuickTest,
    showErrorLog,
    showSpeedRevision,
    showExamSimulation,
    showRevisionDashboard,
    showFormulaBank,
    showBreathing,
    showGoalSetting,
    showMatchPairs,
    showChapterSummary,
    showAchievements,
    showBookmarks,
    showProgressCharts,
    showLastMinute,
    showRandomChallenge,
    showStudyNotes,
    showArtsQuickSprint,
    showTimeline,
    showClozeTest,
    showKeywordCloud,
    showMindMap,
    showTeachBack,
    showActiveRecall,
    showRapidFire,
    showDailyTracker,
    showSpacedRepetition,
    showPYQ,
    showWritingPractice,
    showReverseLearning,
    showStudyHeatmap,
    showSmartWeakness,
    showWeeklyReport,
    showStudyWrapped2025,
    showEcoStudyHub,
    showEcoFormulaBank,
    showEcoGraphPractice,
    showEcoNumericalSolver,
    showEcoElasticityCalc,
    showArtsStudyHub,
    showHistoryTimelineQuiz,
    showArtsQuickReference,
    showLiteratureAnalysis,
    showPoliticalScienceHub,
    showHindiGrammarHub,
    showGeographyConcepts,
    showEnglishWritingSkills,
    showEconomicsCaseStudies,
    showHistoryChapterSummary,
    showConstitutionalArticles,
    showHindiSahitya,
    showSociologyHub,
    showPsychologyHub,
    showQuickRevisionQuiz,
    showImportantDates,
    showImportantPersons,
    showOneMinuteChallenge,
    showPYQBank,
    showWritingTemplates,
    showHistoryMapWork,
    showSanskritShlokBank,
    showCurrentAffairs,
    showSpeedQuiz,
    showBoardExamTips,
    showGrammarMaster,
    showMockTest,
    showImportantEvents,
    showSyllabusCrusher82,
    showMockTestBank,
    showDefinitionBuilder,
    showLayeredRevisionCards,
    showRandom5Game,
    showEventSorting,
    showConceptGrouping,
    showChainDiagram,
    showMistakeMeter,
    showRepetitionTracker,
    showSpeedChallenge,
    showHistoryStudyHub,
    showGeographyStudyHub,
    showEnglishStudyHub,
    showHindiStudyHub,
    showPoliticalScienceStudyHub,
    showEconomicsStudyHub,
    showArtsExamCountdown,
    showArtsMasterFormula,
    showArtsMasterQuiz,
    showArtsMapMaster,
    showArtsWritingGuide,
    showArtsCurrentAffairs,
    showLast24Hours,
    aiModalOpen,
  ]);
  // ==================== END BACK BUTTON HANDLING ====================

  // Handle onboarding complete
  const handleOnboardingComplete = (profile: UserProfile) => {
    setUserProfile(profile);
    setSelectedStream(profile.stream);
    setIsOnboarded(true);
    setView("DASHBOARD");
  };

  // Logout / Reset
  const handleLogout = () => {
    if (confirm("This will reset all your data. Are you sure?")) {
      db.clearAllData();
      setUserProfile(null);
      setSelectedStream(null);
      setIsOnboarded(false);
      setView("STREAM_SELECT");
    }
  };

  // --- Handlers ---
  const selectStream = (stream: Stream) => {
    setSelectedStream(stream);
    // Update profile if exists
    if (userProfile) {
      const updated = { ...userProfile, stream };
      db.saveUserProfile(updated);
      setUserProfile(updated);
    }
    setView("DASHBOARD");
  };

  const selectSubject = (subject: Subject) => {
    setSelectedSubject(subject);
    setSelectedChapter(null);
    setStudyMode(null);
    setView("SUBJECT_DETAIL");
  };

  const selectChapter = (chapter: Chapter) => {
    setSelectedChapter(chapter);
    setChapterTab("OVERVIEW");
    setView("CHAPTER_DETAIL");
  };

  const startStudy = (mode: ContentType) => {
    setStudyMode(mode);
    setView("STUDY_MODE");
  };

  const goBack = () => {
    if (
      view === "STUDY_MODE" ||
      view === "SYLLABUS_VIEW" ||
      view === "PAPER_PATTERN_VIEW"
    ) {
      if (view === "SYLLABUS_VIEW" || view === "PAPER_PATTERN_VIEW") {
        setView("SUBJECT_DETAIL");
      } else {
        setView("CHAPTER_DETAIL");
      }
      setStudyMode(null);
    } else if (view === "CHAPTER_DETAIL") {
      setView("SUBJECT_DETAIL");
      setSelectedChapter(null);
    } else if (view === "SUBJECT_DETAIL") {
      setView("DASHBOARD");
      setSelectedSubject(null);
    } else if (
      view === "DASHBOARD" ||
      view === "PROGRESS_VIEW" ||
      view === "STUDY_PLANNER"
    ) {
      setView("STREAM_SELECT");
      setSelectedStream(null);
    }
  };

  // MCQ completion handler
  const handleMCQComplete = (score: number, total: number) => {
    if (selectedChapter && selectedSubject) {
      updateMCQProgress(selectedChapter.id, selectedSubject.id, score, total);
    }
    setView("CHAPTER_DETAIL");
    setStudyMode(null);
  };

  const handleAiExplain = async () => {
    if (!aiQuery) return;
    setAiLoading(true);
    const context = selectedChapter
      ? `Subject: ${selectedSubject?.name}, Chapter: ${selectedChapter.title}`
      : `Subject: ${selectedSubject?.name || "General 12th Standard"}`;

    const result = await explainConcept(aiQuery, context);
    setAiResponse(result || "Could not generate response.");
    setAiLoading(false);
  };

  // --- Sidebar Component ---
  const Sidebar = () => {
    if (!selectedStream) return null;
    const subjects = getFilteredSubjects();

    return (
      <>
        {!isSidebarOpen && (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="fixed top-4 right-4 z-[60] bg-white dark:bg-slate-800 p-2 rounded-full shadow-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 border border-slate-100 dark:border-slate-700 transition-transform hover:scale-110"
            title="Open Sidebar"
          >
            <PanelRightOpen size={24} />
          </button>
        )}

        <div
          className={`fixed inset-y-0 right-0 z-[50] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-l border-slate-200 dark:border-slate-800 transition-all duration-300 ease-in-out flex flex-col ${
            isSidebarOpen
              ? "w-[80px] sm:w-[240px] translate-x-0"
              : "w-0 translate-x-full opacity-0 overflow-hidden"
          }`}
        >
          <div className="p-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
            <span className="font-black text-lg text-indigo-900 dark:text-indigo-100 hidden sm:block">
              7k 12th
            </span>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400 transition mx-auto sm:mx-0"
            >
              <PanelRightClose size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4 px-2 sm:px-4 space-y-6">
            <div className="space-y-2">
              <button
                onClick={() => {
                  setView("DASHBOARD");
                  setSelectedSubject(null);
                }}
                className={`w-full p-3 rounded-xl flex items-center gap-3 transition-colors ${view === "DASHBOARD" ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300" : "hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"}`}
              >
                <LayoutGrid size={22} className="shrink-0" />
                <span className="font-semibold text-sm hidden sm:block">
                  Dashboard
                </span>
              </button>

              <button
                onClick={() => {
                  setView("STREAM_SELECT");
                  setSelectedStream(null);
                }}
                className="w-full p-3 rounded-xl flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              >
                <Home size={22} className="shrink-0" />
                <span className="font-semibold text-sm hidden sm:block">
                  Home
                </span>
              </button>

              {/* Progress View */}
              <button
                onClick={() => setView("PROGRESS_VIEW")}
                className={`w-full p-3 rounded-xl flex items-center gap-3 transition-colors ${view === "PROGRESS_VIEW" ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-300" : "hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"}`}
              >
                <BarChart3 size={22} className="shrink-0" />
                <span className="font-semibold text-sm hidden sm:block">
                  Progress
                </span>
              </button>

              {/* Study Planner */}
              <button
                onClick={() => setView("STUDY_PLANNER")}
                className={`w-full p-3 rounded-xl flex items-center gap-3 transition-colors ${view === "STUDY_PLANNER" ? "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300" : "hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"}`}
              >
                <ClipboardList size={22} className="shrink-0" />
                <span className="font-semibold text-sm hidden sm:block">
                  Study Plan
                </span>
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="w-full p-3 rounded-xl flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              >
                {darkMode ? (
                  <Sun size={22} className="shrink-0 text-amber-400" />
                ) : (
                  <Moon size={22} className="shrink-0 text-indigo-400" />
                )}
                <span className="font-semibold text-sm hidden sm:block">
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </span>
              </button>

              {/* User Profile */}
              {userProfile && (
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="px-2 py-2 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                      {userProfile.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-200 truncate">
                        {userProfile.name}
                      </p>
                      <p className="text-[10px] text-slate-400">
                        {userProfile.stream}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full p-3 rounded-xl flex items-center gap-3 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500 dark:text-red-400 transition-colors mt-2"
                  >
                    <LogOut size={18} className="shrink-0" />
                    <span className="font-semibold text-sm hidden sm:block">
                      Reset Profile
                    </span>
                  </button>
                </div>
              )}
            </div>

            <div>
              <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3 px-2 hidden sm:block">
                Quick Access
              </p>
              <div className="space-y-2">
                {subjects.map((sub) => {
                  // Dynamic Icon Mapping
                  const Icon =
                    sub.id === "eco"
                      ? TrendingUp
                      : sub.id === "ocm"
                        ? Briefcase
                        : sub.id === "sp"
                          ? PenTool
                          : sub.id === "bk" || sub.id === "math"
                            ? Calculator
                            : sub.id === "his"
                              ? BookOpen
                              : sub.id === "geo"
                                ? Globe
                                : sub.id === "phy"
                                  ? Atom
                                  : sub.id === "bio"
                                    ? Dna
                                    : sub.id === "chem"
                                      ? FlaskConical
                                      : sub.id === "soc"
                                        ? Users
                                        : sub.id === "pol"
                                          ? Building2
                                          : sub.id === "eng"
                                            ? BookA
                                            : Brain;

                  const isActive = selectedSubject?.id === sub.id;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => selectSubject(sub)}
                      className={`w-full p-3 rounded-xl flex items-center gap-3 transition-colors group ${isActive ? "bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800" : "hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent"}`}
                    >
                      <div
                        className={`p-1.5 rounded-lg text-white shrink-0 ${sub.color}`}
                      >
                        <Icon size={16} />
                      </div>
                      <span
                        className={`font-medium text-sm hidden sm:block truncate ${isActive ? "text-indigo-900 dark:text-indigo-100 font-bold" : "text-slate-600 dark:text-slate-400"}`}
                      >
                        {sub.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  // --- Render Functions ---

  const renderStreamSelect = () => (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-20%] w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[100px]"></div>

      <div className="z-10 text-center mb-16 relative">
        <div className="inline-block p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl mb-6 rotate-3">
          <div className="bg-slate-900 px-6 py-2 rounded-xl text-white font-bold text-sm tracking-widest uppercase -rotate-3">
            Maharashtra Board
          </div>
        </div>
        <h1 className="text-6xl font-black text-white mb-4 tracking-tight drop-shadow-xl">
          7k{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            12th
          </span>
        </h1>
        <p className="text-slate-400 text-lg font-medium">
          The Ultimate Study App
        </p>
      </div>

      <div className="grid gap-6 w-full max-w-md z-10">
        <button
          onClick={() => selectStream(Stream.COMMERCE)}
          className="group relative overflow-hidden bg-slate-900/50 hover:bg-slate-800/80 backdrop-blur-md border border-slate-700/50 p-6 rounded-3xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/20 text-left"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-center gap-5 relative z-10">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl shadow-lg flex items-center justify-center text-white transform group-hover:rotate-6 transition-transform">
              <TrendingUp size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Commerce</h3>
              <p className="text-slate-400 text-sm font-medium">
                Eco, OCM, BK, SP
              </p>
            </div>
            <div className="ml-auto w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all">
              <ChevronRight size={20} />
            </div>
          </div>
        </button>

        <button
          onClick={() => selectStream(Stream.ARTS)}
          className="group relative overflow-hidden bg-slate-900/50 hover:bg-slate-800/80 backdrop-blur-md border border-slate-700/50 p-6 rounded-3xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20 text-left"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-center gap-5 relative z-10">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg flex items-center justify-center text-white transform group-hover:rotate-6 transition-transform">
              <BookOpen size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Arts</h3>
              <p className="text-slate-400 text-sm font-medium">
                History, Pol Sci, English
              </p>
            </div>
            <div className="ml-auto w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
              <ChevronRight size={20} />
            </div>
          </div>
        </button>

        <button
          onClick={() => selectStream(Stream.SCIENCE)}
          className="group relative overflow-hidden bg-slate-900/50 hover:bg-slate-800/80 backdrop-blur-md border border-slate-700/50 p-6 rounded-3xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-500/20 text-left"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-center gap-5 relative z-10">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl shadow-lg flex items-center justify-center text-white transform group-hover:rotate-6 transition-transform">
              <Atom size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Science</h3>
              <p className="text-slate-400 text-sm font-medium">
                Phy, Chem, Math, Bio
              </p>
            </div>
            <div className="ml-auto w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-white transition-all">
              <ChevronRight size={20} />
            </div>
          </div>
        </button>
      </div>
      <div className="mt-12 text-slate-600 text-xs text-center font-medium">
        Made for HSC Maharashtra Board Students
      </div>
    </div>
  );

  const renderDashboard = () => {
    const data = selectedStream ? MOCK_DATA[selectedStream] : null;
    const filteredSubjects = getFilteredSubjects();
    const greeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return "Good Morning";
      if (hour < 17) return "Good Afternoon";
      return "Good Evening";
    };

    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24 font-sans transition-colors">
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 dark:from-indigo-900 dark:via-purple-900 dark:to-indigo-950 px-6 pt-8 pb-12 rounded-b-[2.5rem] shadow-xl shadow-indigo-200/50 dark:shadow-indigo-900/50">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-indigo-200 text-sm font-medium mb-1">
                {greeting()}
              </p>
              <h1 className="text-3xl font-black text-white">
                {userProfile?.name || "Student"} 👋
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold">
                {selectedStream}
              </div>
            </div>
          </div>
          <p className="text-indigo-100 font-medium">
            Let's crush those exams! 🚀
          </p>
        </div>

        <div className="p-6 -mt-6">
          {/* 🚀 MEGA BOARD CRASHER BANNER - Top Priority */}
          {selectedStream === Stream.ARTS && (
            <button
              onClick={() => setShowMegaBoardCrasher(true)}
              className="w-full mb-6 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-3xl">
                    🚀
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-black text-white">
                      MEGA 90+ BOARD CRASHER
                    </h3>
                    <p className="text-white/80 text-sm">
                      29-Day Plan: Zero to Hero • Start Now!
                    </p>
                  </div>
                </div>
                <div className="bg-white/20 rounded-full p-2 group-hover:bg-white/30 transition-colors">
                  <ChevronRight className="w-6 h-6 text-white" />
                </div>
              </div>
            </button>
          )}

          {/* 📅 EXAM DAY BANNER - Shows today's exam or next upcoming */}
          <ExamDayBanner
            stream={selectedStream}
            onOpenSubject={(subjectId) => {
              const subject = filteredSubjects.find((s) => s.id === subjectId);
              if (subject) selectSubject(subject);
            }}
          />

          {/* 🔥 Daily Motivation - Study streak encouragement */}
          <DailyMotivation
            streak={getStudyStats().currentStreak || 0}
            todayMinutes={getStudyStats().totalFlashcardsReviewed * 2} // Estimate: 2 min per flashcard
            onStartStudy={() => setShowPomodoro(true)}
          />

          {/* Countdown Timer */}
          <div className="mb-6">
            <CountdownTimer stream={selectedStream} />
          </div>

          {/* Quick Stats Widget - NEW */}
          <QuickStatsWidget
            subjects={filteredSubjects}
            onOpenWeakness={() => setShowSmartWeakness(true)}
            onOpenHeatmap={() => setShowStudyHeatmap(true)}
            onOpenWeeklyReport={() => setShowWeeklyReport(true)}
          />

          {/* Chapter Progress Widget - Syllabus Completion Tracker */}
          <ChapterProgressWidget
            overallProgress={getOverallProgress()}
            subjectProgressList={filteredSubjects.map((sub) =>
              getChapterSubjectProgress(sub),
            )}
          />

          {/* Previous Marks Input Section - Now with stream-specific subjects */}
          {selectedStream && <PreviousMarksInput stream={selectedStream} />}

          {/* Weakness Analysis Section */}
          <WeaknessAnalysis />

          {/* 🎯 Today's Focus - Smart study recommendations */}
          <TodaysFocus
            stream={selectedStream}
            subjects={filteredSubjects}
            completedChapters={completedChaptersMap}
            onSelectSubject={selectSubject}
          />

          <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
            <BookOpen
              size={20}
              className="text-indigo-600 dark:text-indigo-400"
            />
            Your Subjects
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredSubjects.map((sub) => {
              // Dynamic Icon Mapping
              const Icon =
                sub.id === "eco"
                  ? TrendingUp
                  : sub.id === "ocm"
                    ? Briefcase
                    : sub.id === "sp"
                      ? PenTool
                      : sub.id === "bk" || sub.id === "math"
                        ? Calculator
                        : sub.id === "his"
                          ? BookOpen
                          : sub.id === "geo"
                            ? Globe
                            : sub.id === "phy"
                              ? Atom
                              : sub.id === "bio"
                                ? Dna
                                : sub.id === "chem"
                                  ? FlaskConical
                                  : sub.id === "soc"
                                    ? Users
                                    : sub.id === "pol"
                                      ? Building2
                                      : sub.id === "eng"
                                        ? BookA
                                        : Brain;

              return (
                <button
                  key={sub.id}
                  onClick={() => selectSubject(sub)}
                  className="bg-white dark:bg-slate-900 p-5 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 active:scale-95 transition-all flex flex-col items-start gap-4 h-full hover:border-indigo-100 dark:hover:border-indigo-900"
                >
                  <div
                    className={`p-4 rounded-2xl ${sub.color} text-white shadow-md relative`}
                  >
                    <Icon size={28} />
                    {/* Completion badge */}
                    {(() => {
                      const prog = getChapterSubjectProgress(sub);
                      if (prog.percentComplete === 100) {
                        return (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                            <CheckCircle2 size={12} className="text-white" />
                          </div>
                        );
                      }
                      return null;
                    })()}
                  </div>
                  <div className="text-left w-full">
                    <span className="font-bold text-slate-800 dark:text-slate-200 block text-lg leading-tight mb-1 truncate w-full">
                      {sub.name}
                    </span>
                    {(() => {
                      const prog = getChapterSubjectProgress(sub);
                      return (
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-400 font-medium">
                            {prog.completedChapters}/{sub.chapters.length} done
                          </span>
                          {prog.percentComplete > 0 &&
                            prog.percentComplete < 100 && (
                              <div className="flex-1 h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden max-w-[60px]">
                                <div
                                  className={`h-full rounded-full ${
                                    prog.percentComplete >= 80
                                      ? "bg-green-500"
                                      : prog.percentComplete >= 50
                                        ? "bg-yellow-500"
                                        : "bg-orange-500"
                                  }`}
                                  style={{ width: `${prog.percentComplete}%` }}
                                />
                              </div>
                            )}
                        </div>
                      );
                    })()}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Study Tools Section - Simplified */}
          <div className="mt-8">
            <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
              <Zap size={20} className="text-amber-500" />
              Study Tools
              <span className="text-xs font-normal text-slate-400 ml-auto">
                Subject tools in each subject →
              </span>
            </h2>

            {/* Row 1 - Core Study Tools */}
            <div className="grid grid-cols-4 gap-3">
              <button
                onClick={() => setShowPomodoro(true)}
                className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-red-200 dark:hover:border-red-800 transition flex flex-col items-center gap-2"
              >
                <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-500 flex items-center justify-center">
                  <Timer size={22} />
                </div>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Pomodoro
                </span>
              </button>

              <button
                onClick={() => setShowQuickTest(true)}
                className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-purple-200 dark:hover:border-purple-800 transition flex flex-col items-center gap-2"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-500 flex items-center justify-center">
                  <Zap size={22} />
                </div>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Quick Test
                </span>
              </button>

              <button
                onClick={() => setShowStudyStreak(true)}
                className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-green-200 dark:hover:border-green-800 transition flex flex-col items-center gap-2"
              >
                <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-500 flex items-center justify-center">
                  <Award size={22} />
                </div>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Streaks
                </span>
              </button>

              <button
                onClick={() => setShowMockTestBank(true)}
                className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-yellow-200 dark:hover:border-yellow-800 transition flex flex-col items-center gap-2"
              >
                <div className="w-10 h-10 rounded-xl bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 flex items-center justify-center">
                  <Trophy size={22} />
                </div>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Mock Tests
                </span>
              </button>
            </div>

            {/* Row 2 - Revision & Analytics */}
            <div className="grid grid-cols-4 gap-3 mt-3">
              <button
                onClick={() => setShowSpeedRevision(true)}
                className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-amber-200 dark:hover:border-amber-800 transition flex flex-col items-center gap-2"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-500 flex items-center justify-center">
                  <Flame size={22} />
                </div>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Speed Rev
                </span>
              </button>

              <button
                onClick={() => setShowRevisionDashboard(true)}
                className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-800 transition flex flex-col items-center gap-2"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500 flex items-center justify-center">
                  <Target size={22} />
                </div>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Revision
                </span>
              </button>

              <button
                onClick={() => setShowErrorLog(true)}
                className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-red-200 dark:hover:border-red-800 transition flex flex-col items-center gap-2"
              >
                <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-500 flex items-center justify-center">
                  <AlertTriangle size={22} />
                </div>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Error Log
                </span>
              </button>

              <button
                onClick={() => setShowProgressCharts(true)}
                className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-violet-200 dark:hover:border-violet-800 transition flex flex-col items-center gap-2"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/30 text-violet-500 flex items-center justify-center">
                  <BarChart3 size={22} />
                </div>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Analytics
                </span>
              </button>
            </div>

            {/* Row 3 - Wellness & Planning */}
            <div className="grid grid-cols-4 gap-3 mt-3">
              <button
                onClick={() => setShowBreathing(true)}
                className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-cyan-200 dark:hover:border-cyan-800 transition flex flex-col items-center gap-2"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 text-cyan-500 flex items-center justify-center">
                  <Wind size={22} />
                </div>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Breathe
                </span>
              </button>

              <button
                onClick={() => setShowGoalSetting(true)}
                className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition flex flex-col items-center gap-2"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-500 flex items-center justify-center">
                  <ListChecks size={22} />
                </div>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Goals
                </span>
              </button>

              <button
                onClick={() => setShowDailyTracker(true)}
                className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-rose-200 dark:hover:border-rose-800 transition flex flex-col items-center gap-2"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center">
                  <Calendar size={22} />
                </div>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Daily Plan
                </span>
              </button>

              <button
                onClick={() => setShowAchievements(true)}
                className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-amber-200 dark:hover:border-amber-800 transition flex flex-col items-center gap-2"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-500 flex items-center justify-center">
                  <Trophy size={22} />
                </div>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Badges
                </span>
              </button>
            </div>

            {/* Row 4 - Quick Actions */}
            <div className="grid grid-cols-4 gap-3 mt-3">
              <button
                onClick={() => setShowBookmarks(true)}
                className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 transition flex flex-col items-center gap-2"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center">
                  <Bookmark size={22} />
                </div>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Bookmarks
                </span>
              </button>

              <button
                onClick={() => setShowLastMinute(true)}
                className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-red-200 dark:hover:border-red-800 transition flex flex-col items-center gap-2"
              >
                <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-500 flex items-center justify-center">
                  <Clock size={22} />
                </div>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Last Min
                </span>
              </button>

              <button
                onClick={() => setShowBoardExamTips(true)}
                className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition flex flex-col items-center gap-2"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center">
                  <Target size={22} />
                </div>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Exam Tips
                </span>
              </button>

              <button
                onClick={() => setShowStudyHeatmap(true)}
                className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition flex flex-col items-center gap-2"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-500 flex items-center justify-center">
                  <Calendar size={22} />
                </div>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Heatmap
                </span>
              </button>
            </div>

            {/* Featured: Syllabus Crusher 82 */}
            <button
              onClick={() => setShowSyllabusCrusher82(true)}
              className="mt-4 w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 p-4 rounded-2xl shadow-lg hover:shadow-xl transition flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-3xl">
                🔥
              </div>
              <div className="text-left flex-1">
                <span className="text-white font-bold block text-lg">
                  Syllabus Crusher 82
                </span>
                <span className="text-white/80 text-xs">
                  Complete any chapter - MCQs, Flashcards, Notes, PYQs & more!
                </span>
              </div>
              <ChevronRight className="text-white/70" size={24} />
            </button>

            {/* Info Card - Subject Tools */}
            <div className="mt-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-4 rounded-2xl border border-indigo-100 dark:border-indigo-800">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-900 dark:text-indigo-200 text-sm">
                    Subject-Specific Tools
                  </h4>
                  <p className="text-xs text-indigo-700 dark:text-indigo-300 mt-1">
                    Open any subject to find specialized tools like History
                    Timeline Quiz, Economics Graph Practice, Hindi व्याकरण Hub,
                    and more!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-indigo-900 dark:bg-indigo-950 rounded-3xl p-6 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 p-10 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-indigo-500/50 rounded-lg">
                  <Sparkles size={20} className="text-indigo-200" />
                </div>
                <span className="font-bold text-indigo-100">
                  AI Tutor Helper
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Stuck on a concept?</h3>
              <p className="text-indigo-200 text-sm mb-4">
                Ask our AI to explain complex definitions in simple words.
              </p>
              <button
                onClick={() => {
                  setAiQuery("");
                  setAiModalOpen(true);
                }}
                className="w-full py-3 bg-white text-indigo-900 font-bold rounded-xl text-sm hover:bg-indigo-50 transition"
              >
                Try AI Explanation
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ... (The rest of the component remains identical, just ensuring imports and icon mapping are updated)

  const renderSubjectDetail = () => {
    if (!selectedSubject) return null;

    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans transition-colors">
        <div
          className={`${selectedSubject.color} text-white pt-8 pb-10 px-6 rounded-b-[2.5rem] shadow-lg shadow-indigo-200 dark:shadow-none sticky top-0 z-30`}
        >
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={goBack}
              className="p-2 -ml-2 hover:bg-white/20 rounded-full transition backdrop-blur-sm"
            >
              <ArrowLeft size={20} />
            </button>
            <span className="font-medium bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs tracking-wide uppercase">
              Class 12th
            </span>
          </div>
          <h1 className="text-4xl font-black mb-2 tracking-tight">
            {selectedSubject.name}
          </h1>
          <div className="flex items-center gap-4 text-white/80 text-sm font-medium">
            <span className="flex items-center gap-1">
              <Layers size={16} /> {selectedSubject.chapters.length} Chapters
            </span>
          </div>
          {/* Per-subject board exam countdown */}
          <SubjectCountdown
            stream={selectedStream}
            subjectId={selectedSubject.id}
            subjectName={selectedSubject.name}
          />
        </div>

        <div className="px-6 -mt-6 pb-24 relative z-40">
          {/* 🚨 LAST 24 HOURS REVISION - Shows when exam is close */}
          {(() => {
            const examDate = getSubjectBoardExamDate(
              selectedStream,
              selectedSubject.id,
            );
            if (!examDate) return null;
            const now = new Date();
            const daysUntil = Math.ceil(
              (examDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24),
            );
            // Show if exam is within 3 days or today
            if (daysUntil <= 3 && daysUntil >= 0) {
              return (
                <button
                  onClick={() => setShowLast24Hours(true)}
                  className="w-full mb-6 bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all animate-pulse-slow"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
                      ⏰
                    </div>
                    <div className="text-left flex-1">
                      <h3 className="text-lg font-black text-white">
                        {daysUntil === 0
                          ? "🚨 EXAM TODAY!"
                          : `${daysUntil} Day${daysUntil > 1 ? "s" : ""} Left!`}
                      </h3>
                      <p className="text-white/80 text-sm">
                        Tap for Last 24 Hours Quick Revision
                      </p>
                    </div>
                    <ChevronRight className="text-white/70" size={24} />
                  </div>
                </button>
              );
            }
            return null;
          })()}

          {/* Dedicated Economics Promo Card */}
          {selectedSubject.id === "eco" && (
            <a
              href="https://eco.7kc.me"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 block bg-gradient-to-r from-blue-600 to-indigo-600 p-5 rounded-2xl shadow-xl shadow-blue-500/20 transform transition-transform hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="inline-block px-2 py-1 bg-white/20 backdrop-blur-md rounded text-[10px] font-bold text-white uppercase mb-2">
                    Recommended
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Deep Dive into Economics
                  </h3>
                  <p className="text-blue-100 text-sm mb-4">
                    Get the specialized dedicated app for 12th Economics.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-xl text-sm font-bold">
                    Open eco.7kc.me <ArrowRight size={16} />
                  </div>
                </div>
                <div className="bg-white/10 p-3 rounded-full text-white">
                  <Globe size={32} />
                </div>
              </div>
            </a>
          )}

          {/* Navigation Cards for Syllabus & Pattern */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              onClick={() => setView("SYLLABUS_VIEW")}
              className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3 hover:border-indigo-200 dark:hover:border-indigo-800 transition group"
            >
              <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileText size={24} />
              </div>
              <span className="font-bold text-slate-700 dark:text-slate-200 text-sm">
                Full Syllabus
              </span>
            </button>

            <button
              onClick={() => setView("PAPER_PATTERN_VIEW")}
              className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3 hover:border-emerald-200 dark:hover:border-emerald-800 transition group"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <GraduationCap size={24} />
              </div>
              <span className="font-bold text-slate-700 dark:text-slate-200 text-sm">
                Paper Pattern
              </span>
            </button>
          </div>

          {/* Subject Progress Card */}
          {selectedSubject.chapters.length > 0 &&
            (() => {
              const subjectProg = getChapterSubjectProgress(selectedSubject);
              const perDayPrelims = subjectProg.chaptersPerDayPrelims;
              const perDayBoards = subjectProg.chaptersPerDayBoards;
              return (
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-4 mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Target size={18} className="text-indigo-500" />
                      <span className="font-bold text-slate-800 dark:text-white text-sm">
                        Chapter Progress
                      </span>
                    </div>
                    <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                      {subjectProg.completedChapters}/
                      {subjectProg.totalChapters} done
                    </span>
                  </div>
                  <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-3">
                    <div
                      className={`h-full rounded-full transition-all ${
                        subjectProg.percentComplete >= 80
                          ? "bg-green-500"
                          : subjectProg.percentComplete >= 50
                            ? "bg-yellow-500"
                            : subjectProg.percentComplete >= 25
                              ? "bg-orange-500"
                              : "bg-red-500"
                      }`}
                      style={{ width: `${subjectProg.percentComplete}%` }}
                    />
                  </div>
                  {subjectProg.remainingChapters > 0 && (
                    <div className="flex gap-4 text-xs">
                      <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                        <Flame size={12} className="text-orange-500" />
                        <span>
                          <strong>{perDayPrelims.toFixed(1)}</strong>/day for
                          Prelims
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                        <Calendar size={12} className="text-blue-500" />
                        <span>
                          <strong>{perDayBoards.toFixed(1)}</strong>/day for
                          Boards
                        </span>
                      </div>
                    </div>
                  )}
                  {subjectProg.remainingChapters === 0 && (
                    <p className="text-xs text-green-600 dark:text-green-400 font-medium flex items-center gap-1">
                      <CheckCircle2 size={12} /> All chapters complete! Focus on
                      revision.
                    </p>
                  )}
                </div>
              );
            })()}

          {/* Subject-Specific Study Tools */}
          <SubjectStudyTools
            subjectId={selectedSubject.id}
            subjectName={selectedSubject.name}
            onOpenTool={(toolName) => {
              // Map tool IDs to their respective setShow functions
              const toolHandlers: Record<string, () => void> = {
                // Economics
                ecoStudyHub: () => setShowEcoStudyHub(true),
                ecoFormulaBank: () => setShowEcoFormulaBank(true),
                ecoGraphPractice: () => setShowEcoGraphPractice(true),
                ecoNumericalSolver: () => setShowEcoNumericalSolver(true),
                ecoElasticityCalc: () => setShowEcoElasticityCalc(true),
                economicsCaseStudies: () => setShowEconomicsCaseStudies(true),
                // History
                historyStudyHub: () => setShowHistoryStudyHub(true),
                historyTimelineQuiz: () => setShowHistoryTimelineQuiz(true),
                historyChapterSummary: () => setShowHistoryChapterSummary(true),
                historyMapWork: () => setShowHistoryMapWork(true),
                importantDates: () => setShowImportantDates(true),
                importantPersons: () => setShowImportantPersons(true),
                importantEvents: () => setShowImportantEvents(true),
                eventSorting: () => setShowEventSorting(true),
                // Political Science
                politicalScienceStudyHub: () =>
                  setShowPoliticalScienceStudyHub(true),
                politicalScienceHub: () => setShowPoliticalScienceHub(true),
                constitutionalArticles: () =>
                  setShowConstitutionalArticles(true),
                currentAffairs: () => setShowCurrentAffairs(true),
                // English
                englishStudyHub: () => setShowEnglishStudyHub(true),
                englishWritingSkills: () => setShowEnglishWritingSkills(true),
                grammarMaster: () => setShowGrammarMaster(true),
                literatureAnalysis: () => setShowLiteratureAnalysis(true),
                writingTemplates: () => setShowWritingTemplates(true),
                // Hindi
                hindiStudyHub: () => setShowHindiStudyHub(true),
                hindiGrammarHub: () => setShowHindiGrammarHub(true),
                hindiSahitya: () => setShowHindiSahitya(true),
                // Geography
                geographyStudyHub: () => setShowGeographyStudyHub(true),
                geographyConcepts: () => setShowGeographyConcepts(true),
                artsMapMaster: () => setShowArtsMapMaster(true),
                // Sociology
                sociologyHub: () => setShowSociologyHub(true),
                conceptGrouping: () => setShowConceptGrouping(true),
                // Psychology
                psychologyHub: () => setShowPsychologyHub(true),
                // Sanskrit
                sanskritShlokBank: () => setShowSanskritShlokBank(true),
                // OCM / SP
                definitionBuilder: () => setShowDefinitionBuilder(true),
                // Physics / Chemistry / Math
                formulaBank: () => setShowFormulaBank(true),
                chainDiagram: () => setShowChainDiagram(true),
                // Universal
                last24Hours: () => setShowLast24Hours(true),
                quickRevisionQuiz: () => setShowQuickRevisionQuiz(true),
                oneMinuteChallenge: () => setShowOneMinuteChallenge(true),
                pyqBank: () => setShowPYQBank(true),
                mockTest: () => setShowMockTest(true),
              };

              const handler = toolHandlers[toolName];
              if (handler) handler();
            }}
          />

          <h3 className="text-slate-800 dark:text-slate-200 font-bold text-lg mb-4 flex items-center gap-2">
            <Layers size={20} className="text-slate-400" /> Chapters
            <span className="text-xs font-normal text-slate-500 dark:text-slate-400 ml-auto">
              Tap checkbox to mark done
            </span>
          </h3>

          <div className="space-y-4">
            {selectedSubject.chapters.length === 0 ? (
              <div className="p-8 text-center text-slate-400 dark:text-slate-600 bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
                <Clock className="mx-auto mb-2 opacity-50" size={32} />
                <p>Content coming soon!</p>
              </div>
            ) : (
              selectedSubject.chapters.map((chapter, index) => {
                const isDone = isChapterCompleted(
                  selectedSubject.id,
                  chapter.id,
                );
                return (
                  <div
                    key={chapter.id}
                    className={`w-full bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm border transition-all flex items-start gap-4 group ${
                      isDone
                        ? "border-green-200 dark:border-green-900 bg-green-50/50 dark:bg-green-900/10"
                        : "border-slate-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-900"
                    }`}
                  >
                    {/* Checkbox */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleChapter(selectedSubject.id, chapter.id);
                      }}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                        isDone
                          ? "bg-green-500 text-white"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-600 dark:hover:text-green-400"
                      }`}
                      title={isDone ? "Mark as incomplete" : "Mark as complete"}
                    >
                      {isDone ? (
                        <CheckCircle2 size={22} />
                      ) : (
                        <Circle size={22} />
                      )}
                    </button>

                    {/* Chapter Content - Clickable */}
                    <button
                      onClick={() => selectChapter(chapter)}
                      className="flex-1 flex items-start gap-4 text-left active:scale-[0.98] transition-transform"
                    >
                      <div
                        className={`w-10 h-10 rounded-xl font-black text-lg flex items-center justify-center shrink-0 transition-colors ${
                          isDone
                            ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                            : "bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`font-bold leading-tight mb-2 transition-colors ${
                            isDone
                              ? "text-green-700 dark:text-green-400"
                              : "text-slate-800 dark:text-slate-200 group-hover:text-indigo-700 dark:group-hover:text-indigo-300"
                          }`}
                        >
                          {chapter.title}
                        </h3>
                        <div className="flex gap-2">
                          {chapter.reels.length > 0 && (
                            <span className="px-2 py-1 rounded bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 text-[10px] font-bold uppercase flex items-center gap-1">
                              <Video size={10} /> Reels
                            </span>
                          )}
                          {chapter.flashcards.length > 0 && (
                            <span className="px-2 py-1 rounded bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-[10px] font-bold uppercase flex items-center gap-1">
                              <Layers size={10} /> Cards
                            </span>
                          )}
                          {isDone && (
                            <span className="px-2 py-1 rounded bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-[10px] font-bold uppercase flex items-center gap-1">
                              <CheckCircle2 size={10} /> Done
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="h-full flex items-center text-slate-300 dark:text-slate-600 group-hover:text-indigo-400">
                        <ChevronRight size={20} />
                      </div>
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  };

  // Re-including renderResourcesView and rest
  const renderResourcesView = (type: "SYLLABUS" | "PATTERN") => {
    if (!selectedSubject) return null;
    const content =
      type === "SYLLABUS"
        ? selectedSubject.syllabus
        : selectedSubject.paperPattern;
    const title = type === "SYLLABUS" ? "Syllabus" : "Paper Pattern";

    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans">
        <div className="bg-white dark:bg-slate-900 px-6 py-4 border-b border-slate-100 dark:border-slate-800 sticky top-0 flex items-center gap-3">
          <button
            onClick={goBack}
            className="p-2 -ml-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="font-bold text-lg text-slate-800 dark:text-white">
            {title}
          </h1>
        </div>
        <div className="p-6 flex-1 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
            {content === "Pending..." ? (
              <p className="text-slate-400 italic">Content coming soon.</p>
            ) : (
              <MarkdownRenderer content={content} />
            )}
          </div>
        </div>
      </div>
    );
  };

  // ... (Keeping renderChapterDetail, renderStudyMode, renderAiModal the same as before, just ensuring imports)

  const renderChapterDetail = () => {
    if (!selectedChapter) return null;

    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 font-sans transition-colors">
        <div className="relative h-[35vh] bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className={`absolute inset-0 opacity-60 bg-gradient-to-br ${selectedSubject?.color.replace("bg-", "from-").replace("500", "600")} to-slate-900`}
            ></div>
          </div>

          <div className="absolute top-0 left-0 w-full p-6 z-20 flex items-center justify-between text-white">
            <button
              onClick={goBack}
              className="p-2 -ml-2 bg-black/20 hover:bg-black/30 backdrop-blur-md rounded-full transition"
            >
              <ArrowLeft size={20} />
            </button>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-8 z-20 pb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white/90 text-xs font-bold mb-3 uppercase tracking-wider">
              Chapter
            </div>
            <h1 className="text-3xl font-black text-white leading-tight drop-shadow-lg mb-2">
              {selectedChapter.title}
            </h1>
            <p className="text-white/80 line-clamp-2 text-sm max-w-md">
              {selectedChapter.description}
            </p>
          </div>
        </div>

        <div className="relative z-30 -mt-8 bg-white dark:bg-slate-900 rounded-t-[2rem] px-6 pt-8 pb-24 min-h-[60vh] transition-colors">
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              onClick={() => startStudy(ContentType.REELS)}
              disabled={selectedChapter.reels.length === 0}
              className={`col-span-2 relative overflow-hidden bg-slate-900 p-5 rounded-2xl shadow-lg flex items-center justify-between group ${selectedChapter.reels.length === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 text-white text-left">
                <h3 className="font-black text-xl italic">QUICK REELS</h3>
                <p className="text-xs text-white/80 font-medium">
                  {selectedChapter.reels.length > 0
                    ? "Swipe to learn in 60s"
                    : "Coming Soon"}
                </p>
              </div>
              <div className="relative z-10 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                <PlayCircle
                  size={24}
                  fill="currentColor"
                  className="opacity-90"
                />
              </div>
            </button>

            {/* NEW 8-MARK BUTTON FOR OCM */}
            {selectedChapter.longAnswers &&
              selectedChapter.longAnswers.length > 0 && (
                <button
                  onClick={() => startStudy(ContentType.EIGHT_MARKER)}
                  className="col-span-2 p-4 bg-gradient-to-r from-amber-200 to-yellow-400 dark:from-amber-700 dark:to-yellow-700 rounded-2xl shadow-md border border-yellow-300 dark:border-yellow-600 flex items-center justify-between group hover:scale-[1.01] transition-transform"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/30 rounded-full text-amber-900 dark:text-white">
                      <Award size={24} />
                    </div>
                    <div className="text-left">
                      <h3 className="font-black text-amber-900 dark:text-white text-lg">
                        8-Marks (Sure Shot)
                      </h3>
                      <p className="text-amber-800 dark:text-amber-100 text-xs font-bold">
                        Important Long Answers
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/30 p-2 rounded-full text-amber-900 dark:text-white">
                    <ChevronRight size={20} />
                  </div>
                </button>
              )}

            <button
              onClick={() => startStudy(ContentType.SUMMARY)}
              disabled={selectedChapter.summary === "Pending..."}
              className="p-4 bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:border-indigo-100 dark:hover:border-indigo-800 border border-transparent rounded-2xl transition-all text-center flex flex-col items-center gap-3 disabled:opacity-50"
            >
              <div className="w-10 h-10 bg-white dark:bg-slate-700 rounded-full shadow-sm text-blue-500 dark:text-blue-400 flex items-center justify-center">
                <BookOpen size={20} />
              </div>
              <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">
                Notes
              </span>
            </button>

            <button
              onClick={() => startStudy(ContentType.FLASHCARDS)}
              disabled={selectedChapter.flashcards.length === 0}
              className="p-4 bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:border-indigo-100 dark:hover:border-indigo-800 border border-transparent rounded-2xl transition-all text-center flex flex-col items-center gap-3 disabled:opacity-50"
            >
              <div className="w-10 h-10 bg-white dark:bg-slate-700 rounded-full shadow-sm text-orange-500 dark:text-orange-400 flex items-center justify-center">
                <Layers size={20} />
              </div>
              <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">
                Cards
              </span>
            </button>

            <button
              onClick={() => startStudy(ContentType.MCQ)}
              disabled={selectedChapter.mcqs.length === 0}
              className="p-4 bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:border-indigo-100 dark:hover:border-indigo-800 border border-transparent rounded-2xl transition-all text-center flex flex-col items-center gap-3 disabled:opacity-50"
            >
              <div className="w-10 h-10 bg-white dark:bg-slate-700 rounded-full shadow-sm text-emerald-500 dark:text-emerald-400 flex items-center justify-center">
                <Brain size={20} />
              </div>
              <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">
                Quiz
              </span>
            </button>

            <button
              onClick={() => {
                setAiQuery(selectedChapter.title);
                setAiModalOpen(true);
              }}
              className="p-4 bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/50 dark:to-violet-900/50 border border-indigo-200 dark:border-indigo-800 rounded-2xl transition-all text-center flex flex-col items-center gap-3"
            >
              <div className="w-10 h-10 bg-white dark:bg-slate-700 rounded-full shadow-sm text-indigo-600 dark:text-indigo-300 flex items-center justify-center">
                <Sparkles size={20} />
              </div>
              <span className="font-bold text-indigo-800 dark:text-indigo-200 text-sm">
                Ask AI
              </span>
            </button>
          </div>

          <div className="mt-8">
            <div className="flex bg-slate-100/80 dark:bg-slate-800 p-1 rounded-xl mb-6">
              <button
                onClick={() => setChapterTab("OVERVIEW")}
                className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all duration-200 ${
                  chapterTab === "OVERVIEW"
                    ? "bg-white dark:bg-slate-700 text-indigo-900 dark:text-white shadow-md"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setChapterTab("NOTES")}
                className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all duration-200 ${
                  chapterTab === "NOTES"
                    ? "bg-white dark:bg-slate-700 text-indigo-900 dark:text-white shadow-md"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
                }`}
              >
                Detailed Notes
              </button>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-3xl border border-slate-100 dark:border-slate-700 min-h-[200px]">
              {chapterTab === "OVERVIEW" ? (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <h3 className="font-bold text-slate-800 dark:text-white mb-3 text-lg">
                    About this Chapter
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedChapter.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-full text-xs font-bold border border-indigo-100 dark:border-indigo-800">
                      {selectedChapter.flashcards.length} Flashcards
                    </span>
                    <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-300 rounded-full text-xs font-bold border border-emerald-100 dark:border-emerald-800">
                      {selectedChapter.mcqs.length} MCQs
                    </span>
                    <span className="px-3 py-1 bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 rounded-full text-xs font-bold border border-pink-100 dark:border-pink-800">
                      {selectedChapter.reels.length} Reels
                    </span>
                  </div>
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <h3 className="font-bold text-slate-800 dark:text-white mb-4 text-lg">
                    Detailed Concepts
                  </h3>
                  <div className="max-w-none">
                    {selectedChapter.detailedNotes === "Pending..." ? (
                      <div className="text-center py-10 text-slate-400 italic">
                        Content coming soon for this chapter.
                      </div>
                    ) : (
                      <MarkdownRenderer
                        content={selectedChapter.detailedNotes}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderStudyMode = () => {
    if (!selectedChapter || !studyMode) return null;

    if (studyMode === ContentType.REELS) {
      return (
        <ReelView
          reels={selectedChapter.reels}
          onClose={goBack}
          onComplete={(viewed, total) => {
            if (selectedChapter && selectedSubject) {
              updateReelsProgress(
                selectedChapter.id,
                selectedSubject.id,
                viewed,
                total,
              );
            }
          }}
        />
      );
    }

    if (studyMode === ContentType.EIGHT_MARKER && selectedChapter.longAnswers) {
      return (
        <LongAnswerView answers={selectedChapter.longAnswers} onBack={goBack} />
      );
    }

    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans transition-colors">
        <header className="bg-white dark:bg-slate-900 px-6 py-4 shadow-sm flex items-center justify-between sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <button
              onClick={goBack}
              className="p-2 -ml-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition text-slate-600 dark:text-slate-300"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-lg font-bold text-slate-800 dark:text-white">
                {studyMode === ContentType.FLASHCARDS
                  ? "Active Recall"
                  : studyMode === ContentType.MCQ
                    ? "Practice Quiz"
                    : "Study Notes"}
              </h1>
              <p className="text-xs text-slate-400 font-medium line-clamp-1 max-w-[200px]">
                {selectedChapter.title}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setAiQuery("");
              setAiModalOpen(true);
            }}
            className="text-indigo-600 dark:text-indigo-400 p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/50"
          >
            <Sparkles size={20} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto">
          {studyMode === ContentType.FLASHCARDS && (
            <div className="min-h-full flex flex-col items-center justify-center p-6 pb-24">
              <div className="w-full max-w-md space-y-8">
                <div className="text-center mb-4">
                  <p className="text-slate-400 text-sm font-medium">
                    Tap card to flip • Scroll for next
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                    {selectedChapter.flashcards.length} cards to review
                  </p>
                </div>
                {selectedChapter.flashcards.map((card) => (
                  <Flashcard key={card.id} card={card} />
                ))}

                {/* Complete Flashcards Button */}
                <div className="pt-8 text-center">
                  <button
                    onClick={() => {
                      if (selectedChapter && selectedSubject) {
                        updateFlashcardProgress(
                          selectedChapter.id,
                          selectedSubject.id,
                          selectedChapter.flashcards.length,
                          selectedChapter.flashcards.length,
                        );
                      }
                      goBack();
                    }}
                    className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all transform hover:scale-105"
                  >
                    ✅ Mark All Reviewed
                  </button>
                </div>
              </div>
            </div>
          )}

          {studyMode === ContentType.MCQ && (
            <div className="h-full">
              <MCQView
                questions={selectedChapter.mcqs}
                onComplete={handleMCQComplete}
              />
            </div>
          )}

          {studyMode === ContentType.SUMMARY && (
            <div className="max-w-3xl mx-auto p-6 pb-24">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 mb-6">
                <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  Summary
                </div>
                <MarkdownRenderer content={selectedChapter.summary} />
              </div>

              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 mb-6">
                <div className="inline-block px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  Deep Dive
                </div>
                <MarkdownRenderer content={selectedChapter.detailedNotes} />
              </div>

              {/* Mark as Read Button */}
              <div className="text-center pt-4">
                <button
                  onClick={() => {
                    if (selectedChapter && selectedSubject) {
                      markSummaryRead(selectedChapter.id, selectedSubject.id);
                      markNotesRead(selectedChapter.id, selectedSubject.id);
                    }
                    goBack();
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all transform hover:scale-105"
                >
                  📚 Mark as Read
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderAiModal = () => (
    <div
      className={`fixed inset-0 z-[60] flex items-end sm:items-center justify-center transition-opacity duration-300 ${aiModalOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={() => setAiModalOpen(false)}
      ></div>
      <div
        className={`bg-white dark:bg-slate-900 w-full max-w-lg sm:rounded-3xl rounded-t-3xl p-6 relative z-10 transition-transform duration-300 ${aiModalOpen ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="w-12 h-1 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mb-6 sm:hidden"></div>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 rounded-xl">
              <Sparkles size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                AI Tutor
              </h2>
              <p className="text-xs text-slate-400">Powered by Gemini</p>
            </div>
          </div>
          <button
            onClick={() => setAiModalOpen(false)}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full transition"
          >
            <div className="sr-only">Close</div>
            <X size={20} />
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
            Ask a question
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={aiQuery}
              onChange={(e) => setAiQuery(e.target.value)}
              placeholder="e.g. Explain 'Utility' with an example"
              className="flex-1 p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-slate-900 transition-all text-slate-800 dark:text-white placeholder:text-slate-400"
            />
            <button
              onClick={handleAiExplain}
              disabled={aiLoading}
              className="bg-indigo-600 dark:bg-indigo-500 text-white px-5 rounded-2xl font-bold hover:bg-indigo-700 dark:hover:bg-indigo-600 disabled:opacity-50 transition shadow-lg shadow-indigo-200 dark:shadow-none"
            >
              {aiLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <ArrowRight size={20} />
              )}
            </button>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl min-h-[150px] max-h-[40vh] overflow-y-auto border border-slate-100 dark:border-slate-700">
          {aiLoading ? (
            <div className="flex flex-col items-center justify-center h-full text-slate-400 gap-3 py-8">
              <Sparkles className="animate-pulse text-indigo-400" size={32} />
              <span className="text-sm font-medium animate-pulse">
                Consulting the knowledge base...
              </span>
            </div>
          ) : aiResponse ? (
            <div className="prose prose-sm prose-slate dark:prose-invert max-w-none">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
                {aiResponse}
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-slate-400 py-8 text-center">
              <Brain size={48} className="mb-4 opacity-20" />
              <p className="font-medium text-slate-500 dark:text-slate-400">
                I can explain any concept from this chapter.
              </p>
              <p className="text-xs mt-1">
                Try asking for definitions, differences, or examples.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderProgressView = () => {
    const stats = getStudyStats();

    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24 font-sans transition-colors">
        <div className="bg-white dark:bg-slate-900 px-6 pt-6 pb-4 sticky top-0 z-20 shadow-sm border-b border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={goBack}
              className="p-2 -ml-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300"
            >
              <ArrowLeft size={22} />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <BarChart3 size={16} />
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-black text-slate-800 dark:text-white">
            Your Progress
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Track your study journey
          </p>
        </div>

        <div className="p-6">
          <ProgressDashboard stats={stats} />

          {/* Subject-wise Progress */}
          {selectedStream && MOCK_DATA[selectedStream] && (
            <div className="mt-8">
              <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-4">
                Subject Progress
              </h2>
              <div className="space-y-4">
                {getFilteredSubjects().map((sub) => {
                  const progressPercent = Math.min(
                    100,
                    Math.max(0, getSubjectCompletion(sub.id)),
                  );

                  // Dynamic Icon Mapping
                  const Icon =
                    sub.id === "eco"
                      ? TrendingUp
                      : sub.id === "ocm"
                        ? Briefcase
                        : sub.id === "sp"
                          ? PenTool
                          : sub.id === "bk" || sub.id === "math"
                            ? Calculator
                            : sub.id === "his"
                              ? BookOpen
                              : sub.id === "geo"
                                ? Globe
                                : sub.id === "phy"
                                  ? Atom
                                  : sub.id === "bio"
                                    ? Dna
                                    : sub.id === "chem"
                                      ? FlaskConical
                                      : sub.id === "soc"
                                        ? Users
                                        : sub.id === "pol"
                                          ? Building2
                                          : sub.id === "eng"
                                            ? BookA
                                            : Brain;

                  return (
                    <div
                      key={sub.id}
                      className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div
                          className={`p-3 rounded-xl ${sub.color} text-white`}
                        >
                          <Icon size={20} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-slate-800 dark:text-white">
                            {sub.name}
                          </h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {sub.chapters.length} chapters
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                            {progressPercent}%
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${sub.color} transition-all duration-500`}
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderStudyPlanner = () => {
    const filteredSubjects = getFilteredSubjects();
    const prelimsDate = new Date("2026-01-15");

    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24 font-sans transition-colors">
        <div className="bg-white dark:bg-slate-900 px-6 pt-6 pb-4 sticky top-0 z-20 shadow-sm border-b border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={goBack}
              className="p-2 -ml-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300"
            >
              <ArrowLeft size={22} />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                <ClipboardList size={16} />
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-black text-slate-800 dark:text-white">
            Study Planner
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Track your syllabus coverage
          </p>
        </div>

        <div className="p-6">
          {filteredSubjects.length > 0 && (
            <StudyPlanner
              subjects={filteredSubjects}
              examDate={prelimsDate}
              examName="Prelims"
            />
          )}
        </div>
      </div>
    );
  };

  // Helper to select chapter from RevisionDashboard
  const handleSelectChapterFromDashboard = (
    subjectIndex: number,
    chapterIndex: number,
  ) => {
    const subjects = getFilteredSubjects();
    if (subjects[subjectIndex]) {
      setSelectedSubject(subjects[subjectIndex]);
      setSelectedChapter(subjects[subjectIndex].chapters[chapterIndex]);
      setView("CHAPTER_DETAIL");
    }
  };

  // Show onboarding if user hasn't set up profile
  if (!isOnboarded) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="antialiased text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-950 h-full selection:bg-indigo-100 dark:selection:bg-indigo-900 selection:text-indigo-900 dark:selection:text-indigo-100 flex overflow-hidden transition-colors duration-300">
      <div
        className={`flex-1 flex flex-col h-full overflow-hidden transition-all duration-300 ${selectedStream && isSidebarOpen ? "mr-0 sm:mr-[240px]" : ""}`}
      >
        <div className="flex-1 overflow-y-auto relative no-scrollbar">
          {view === "STREAM_SELECT" && renderStreamSelect()}
          {view === "DASHBOARD" && renderDashboard()}
          {view === "SUBJECT_DETAIL" && renderSubjectDetail()}
          {view === "SYLLABUS_VIEW" && renderResourcesView("SYLLABUS")}
          {view === "PAPER_PATTERN_VIEW" && renderResourcesView("PATTERN")}
          {view === "CHAPTER_DETAIL" && renderChapterDetail()}
          {view === "STUDY_MODE" && renderStudyMode()}
          {view === "PROGRESS_VIEW" && renderProgressView()}
          {view === "STUDY_PLANNER" && renderStudyPlanner()}
        </div>
      </div>
      {selectedStream && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 sm:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      {selectedStream && <Sidebar />}
      {renderAiModal()}

      {/* Study Tools Modals */}
      {showPomodoro && (
        <PomodoroTimerEnhanced
          subjects={getFilteredSubjects()}
          onClose={() => setShowPomodoro(false)}
        />
      )}

      {showStudyStreak && (
        <StudyStreak onClose={() => setShowStudyStreak(false)} />
      )}

      {showQuickTest && (
        <QuickTest
          subjects={getFilteredSubjects()}
          onClose={() => setShowQuickTest(false)}
        />
      )}

      {showErrorLog && <ErrorLog onClose={() => setShowErrorLog(false)} />}

      {showSpeedRevision && (
        <SpeedRevision
          subjects={getFilteredSubjects()}
          onClose={() => setShowSpeedRevision(false)}
        />
      )}

      {showExamSimulation && (
        <ExamSimulation
          subjects={getFilteredSubjects()}
          onClose={() => setShowExamSimulation(false)}
        />
      )}

      {showRevisionDashboard && (
        <RevisionDashboard
          subjects={getFilteredSubjects()}
          onSelectChapter={handleSelectChapterFromDashboard}
          onClose={() => setShowRevisionDashboard(false)}
        />
      )}

      {showFormulaBank && (
        <FormulaBank
          subjects={getFilteredSubjects()}
          onClose={() => setShowFormulaBank(false)}
        />
      )}

      {showBreathing && (
        <BreathingExercise onClose={() => setShowBreathing(false)} />
      )}

      {showGoalSetting && (
        <GoalSetting onClose={() => setShowGoalSetting(false)} />
      )}

      {showMatchPairs && (
        <MatchPairs
          subjects={getFilteredSubjects()}
          onClose={() => setShowMatchPairs(false)}
        />
      )}

      {showChapterSummary && (
        <ChapterSummary
          subjects={getFilteredSubjects()}
          onSelectChapter={handleSelectChapterFromDashboard}
          onClose={() => setShowChapterSummary(false)}
        />
      )}

      {showAchievements && (
        <Achievements onClose={() => setShowAchievements(false)} />
      )}

      {showBookmarks && (
        <Bookmarks
          subjects={getFilteredSubjects()}
          onStudyBookmark={(subjectIndex, chapterIndex, type, itemIndex) => {
            // Navigate to the bookmarked item
            handleSelectChapterFromDashboard(subjectIndex, chapterIndex);
          }}
          onClose={() => setShowBookmarks(false)}
        />
      )}

      {showProgressCharts && (
        <ProgressCharts onClose={() => setShowProgressCharts(false)} />
      )}

      {showLastMinute && (
        <LastMinuteRevision
          subjects={getFilteredSubjects()}
          onSelectChapter={handleSelectChapterFromDashboard}
          onClose={() => setShowLastMinute(false)}
        />
      )}

      {showRandomChallenge && (
        <RandomChallenge
          subjects={getFilteredSubjects()}
          onClose={() => setShowRandomChallenge(false)}
        />
      )}

      {showStudyNotes && (
        <StudyNotes
          subjects={getFilteredSubjects()}
          onClose={() => setShowStudyNotes(false)}
        />
      )}

      {showTimeline && (
        <TimelineView
          subjects={getFilteredSubjects()}
          onClose={() => setShowTimeline(false)}
        />
      )}

      {showClozeTest && (
        <ClozeTest
          subjects={getFilteredSubjects()}
          onClose={() => setShowClozeTest(false)}
        />
      )}

      {showKeywordCloud && (
        <KeywordCloud
          subjects={getFilteredSubjects()}
          onClose={() => setShowKeywordCloud(false)}
        />
      )}

      {showMindMap && (
        <MindMapView
          subjects={getFilteredSubjects()}
          onClose={() => setShowMindMap(false)}
        />
      )}

      {showTeachBack && (
        <TeachBack
          subjects={getFilteredSubjects()}
          onClose={() => setShowTeachBack(false)}
        />
      )}

      {showActiveRecall && (
        <ActiveRecall
          subjects={getFilteredSubjects()}
          onClose={() => setShowActiveRecall(false)}
        />
      )}

      {showRapidFire && (
        <RapidFire
          subjects={getFilteredSubjects()}
          onClose={() => setShowRapidFire(false)}
        />
      )}

      {showArtsQuickSprint && (
        <ArtsQuickSprint
          subjects={getFilteredSubjects()}
          onClose={() => setShowArtsQuickSprint(false)}
        />
      )}

      {showDailyTracker && (
        <DailyTracker onClose={() => setShowDailyTracker(false)} />
      )}

      {showSpacedRepetition && (
        <SpacedRepetition
          subjects={getFilteredSubjects()}
          onClose={() => setShowSpacedRepetition(false)}
        />
      )}

      {showPYQ && (
        <PreviousYearQuestions
          subjects={getFilteredSubjects()}
          onClose={() => setShowPYQ(false)}
        />
      )}

      {showWritingPractice && (
        <WritingPractice
          subjects={getFilteredSubjects()}
          onClose={() => setShowWritingPractice(false)}
        />
      )}

      {showReverseLearning && (
        <ReverseLearning
          subjects={getFilteredSubjects()}
          onClose={() => setShowReverseLearning(false)}
        />
      )}

      {/* NEW Study Analytics Tools */}
      {showStudyHeatmap && (
        <StudyHeatmap onClose={() => setShowStudyHeatmap(false)} />
      )}

      {showSmartWeakness && (
        <SmartWeakness
          subjects={getFilteredSubjects()}
          onClose={() => setShowSmartWeakness(false)}
          onSelectChapter={(subject, chapter) => {
            setSelectedSubject(subject);
            setSelectedChapter(chapter);
            setView("CHAPTER_DETAIL");
          }}
        />
      )}

      {showWeeklyReport && (
        <WeeklyReport
          subjects={getFilteredSubjects()}
          onClose={() => setShowWeeklyReport(false)}
        />
      )}

      {showStudyWrapped2025 && (
        <StudyWrapped2025 onClose={() => setShowStudyWrapped2025(false)} />
      )}

      {/* Economics Study Tools */}
      {showEcoStudyHub && (
        <EcoStudyHub
          onClose={() => setShowEcoStudyHub(false)}
          onOpenTool={(tool) => {
            setShowEcoStudyHub(false);
            switch (tool) {
              case "formula-bank":
                setShowEcoFormulaBank(true);
                break;
              case "graph-practice":
                setShowEcoGraphPractice(true);
                break;
              case "numerical-solver":
                setShowEcoNumericalSolver(true);
                break;
              case "elasticity-calc":
                setShowEcoElasticityCalc(true);
                break;
            }
          }}
        />
      )}

      {showEcoFormulaBank && (
        <EcoFormulaBank onClose={() => setShowEcoFormulaBank(false)} />
      )}

      {showEcoGraphPractice && (
        <EcoGraphPractice onClose={() => setShowEcoGraphPractice(false)} />
      )}

      {showEcoNumericalSolver && (
        <EcoNumericalSolver onClose={() => setShowEcoNumericalSolver(false)} />
      )}

      {showEcoElasticityCalc && (
        <EcoElasticityCalc onClose={() => setShowEcoElasticityCalc(false)} />
      )}

      {/* Arts Study Tools */}
      {showArtsStudyHub && (
        <ArtsStudyHub
          onClose={() => setShowArtsStudyHub(false)}
          onOpenTool={(tool) => {
            setShowArtsStudyHub(false);
            switch (tool) {
              case "timeline-quiz":
                setShowHistoryTimelineQuiz(true);
                break;
              case "arts-sprint":
                setShowArtsQuickSprint(true);
                break;
              case "writing-practice":
                setShowWritingPractice(true);
                break;
            }
          }}
        />
      )}

      {showHistoryTimelineQuiz && (
        <HistoryTimelineQuiz
          onClose={() => setShowHistoryTimelineQuiz(false)}
        />
      )}

      {showArtsQuickReference && (
        <ArtsQuickReference onClose={() => setShowArtsQuickReference(false)} />
      )}

      {showLiteratureAnalysis && (
        <LiteratureAnalysis onClose={() => setShowLiteratureAnalysis(false)} />
      )}

      {showPoliticalScienceHub && (
        <PoliticalScienceHub
          onClose={() => setShowPoliticalScienceHub(false)}
        />
      )}

      {showHindiGrammarHub && (
        <HindiGrammarHub onClose={() => setShowHindiGrammarHub(false)} />
      )}

      {showGeographyConcepts && (
        <GeographyConcepts onClose={() => setShowGeographyConcepts(false)} />
      )}

      {showEnglishWritingSkills && (
        <EnglishWritingSkills
          onClose={() => setShowEnglishWritingSkills(false)}
        />
      )}

      {showEconomicsCaseStudies && (
        <EconomicsCaseStudies
          onClose={() => setShowEconomicsCaseStudies(false)}
        />
      )}

      {showHistoryChapterSummary && (
        <HistoryChapterSummary
          onClose={() => setShowHistoryChapterSummary(false)}
        />
      )}

      {showConstitutionalArticles && (
        <ConstitutionalArticles
          onClose={() => setShowConstitutionalArticles(false)}
        />
      )}

      {showHindiSahitya && (
        <HindiSahitya onClose={() => setShowHindiSahitya(false)} />
      )}

      {showSociologyHub && (
        <SociologyHub onClose={() => setShowSociologyHub(false)} />
      )}

      {showPsychologyHub && (
        <PsychologyHub onClose={() => setShowPsychologyHub(false)} />
      )}

      {showHistoryStudyHub && (
        <HistoryStudyHub onClose={() => setShowHistoryStudyHub(false)} />
      )}

      {showGeographyStudyHub && (
        <GeographyStudyHub onClose={() => setShowGeographyStudyHub(false)} />
      )}

      {showEnglishStudyHub && (
        <EnglishStudyHub onClose={() => setShowEnglishStudyHub(false)} />
      )}

      {showHindiStudyHub && (
        <HindiStudyHub onClose={() => setShowHindiStudyHub(false)} />
      )}

      {showPoliticalScienceStudyHub && (
        <PoliticalScienceStudyHub
          onClose={() => setShowPoliticalScienceStudyHub(false)}
        />
      )}

      {showEconomicsStudyHub && (
        <EconomicsStudyHub onClose={() => setShowEconomicsStudyHub(false)} />
      )}

      {showQuickRevisionQuiz && (
        <QuickRevisionQuiz onClose={() => setShowQuickRevisionQuiz(false)} />
      )}

      {showImportantDates && (
        <ImportantDates onClose={() => setShowImportantDates(false)} />
      )}

      {showImportantPersons && (
        <ImportantPersons onClose={() => setShowImportantPersons(false)} />
      )}

      {showOneMinuteChallenge && (
        <OneMinuteChallenge onClose={() => setShowOneMinuteChallenge(false)} />
      )}

      {showPYQBank && <PYQBank onClose={() => setShowPYQBank(false)} />}

      {showWritingTemplates && (
        <WritingTemplates onClose={() => setShowWritingTemplates(false)} />
      )}

      {showHistoryMapWork && (
        <HistoryMapWork onClose={() => setShowHistoryMapWork(false)} />
      )}

      {showSanskritShlokBank && (
        <SanskritShlokBank onClose={() => setShowSanskritShlokBank(false)} />
      )}

      {showCurrentAffairs && (
        <CurrentAffairs onClose={() => setShowCurrentAffairs(false)} />
      )}

      {showSpeedQuiz && <SpeedQuiz onClose={() => setShowSpeedQuiz(false)} />}

      {showBoardExamTips && (
        <BoardExamTips onClose={() => setShowBoardExamTips(false)} />
      )}

      {showGrammarMaster && (
        <GrammarMaster onClose={() => setShowGrammarMaster(false)} />
      )}

      {showMockTest && <MockTest onClose={() => setShowMockTest(false)} />}

      {showImportantEvents && (
        <ImportantEvents onClose={() => setShowImportantEvents(false)} />
      )}

      {showMockTestBank && (
        <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
          <div className="min-h-screen relative">
            <button
              onClick={() => setShowMockTestBank(false)}
              className="fixed top-4 right-4 z-50 bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-all"
            >
              <X className="w-6 h-6" />
            </button>
            <MockTestBank />
          </div>
        </div>
      )}

      {showDefinitionBuilder && (
        <DefinitionBuilder onClose={() => setShowDefinitionBuilder(false)} />
      )}

      {showLayeredRevisionCards && (
        <LayeredRevisionCards
          onClose={() => setShowLayeredRevisionCards(false)}
        />
      )}

      {showRandom5Game && (
        <Random5Game onClose={() => setShowRandom5Game(false)} />
      )}

      {showEventSorting && (
        <EventSorting onClose={() => setShowEventSorting(false)} />
      )}

      {showConceptGrouping && (
        <ConceptGrouping onClose={() => setShowConceptGrouping(false)} />
      )}

      {showChainDiagram && (
        <ChainDiagram onClose={() => setShowChainDiagram(false)} />
      )}

      {showMistakeMeter && (
        <MistakeMeter onClose={() => setShowMistakeMeter(false)} />
      )}

      {showRepetitionTracker && (
        <RepetitionTracker onClose={() => setShowRepetitionTracker(false)} />
      )}

      {showSpeedChallenge && (
        <SpeedChallenge onClose={() => setShowSpeedChallenge(false)} />
      )}

      {showArtsExamCountdown && (
        <ArtsExamCountdown onClose={() => setShowArtsExamCountdown(false)} />
      )}

      {showArtsMasterFormula && (
        <ArtsMasterFormula onClose={() => setShowArtsMasterFormula(false)} />
      )}

      {showArtsMasterQuiz && (
        <ArtsMasterQuiz onClose={() => setShowArtsMasterQuiz(false)} />
      )}

      {showArtsMapMaster && (
        <ArtsMapMaster onClose={() => setShowArtsMapMaster(false)} />
      )}

      {showArtsWritingGuide && (
        <ArtsWritingGuide onClose={() => setShowArtsWritingGuide(false)} />
      )}

      {showArtsCurrentAffairs && (
        <ArtsCurrentAffairs onClose={() => setShowArtsCurrentAffairs(false)} />
      )}

      {showMegaBoardCrasher && (
        <MegaBoardCrasher
          onClose={() => setShowMegaBoardCrasher(false)}
          selectedSubjects={userProfile?.selectedSubjects || []}
        />
      )}

      {showSyllabusCrusher82 && selectedStream && (
        <SyllabusCrusher82
          onClose={() => setShowSyllabusCrusher82(false)}
          subjects={getFilteredSubjects()}
          darkMode={darkMode}
        />
      )}

      {showLast24Hours && selectedSubject && (
        <Last24HoursRevision
          subject={selectedSubject}
          onClose={() => setShowLast24Hours(false)}
        />
      )}
    </div>
  );
};

export default App;
