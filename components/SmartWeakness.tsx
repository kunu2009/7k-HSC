import React, { useState, useEffect, useMemo } from 'react';
import { AlertTriangle, TrendingUp, TrendingDown, Target, BookOpen, Brain, Zap, ChevronRight, Star, Clock, X, RefreshCw, CheckCircle, BarChart3, Lightbulb, ArrowRight } from 'lucide-react';
import { Subject, Chapter } from '../types';
import { db, ExamMarks } from '../services/localDb';

interface SmartWeaknessProps {
  subjects: Subject[];
  onClose?: () => void;
  onSelectChapter?: (subject: Subject, chapter: Chapter) => void;
}

interface ChapterAnalysis {
  chapterId: string;
  chapterTitle: string;
  subjectId: string;
  subjectName: string;
  subjectColor: string;
  // Analysis metrics
  mcqAccuracy: number; // 0-100
  mcqAttempted: number;
  flashcardsViewed: number;
  totalFlashcards: number;
  lastAttempted: string | null;
  daysSinceStudied: number;
  // Calculated weakness score (higher = more weak)
  weaknessScore: number;
  // Priority level
  priority: 'critical' | 'high' | 'medium' | 'low';
  // Recommendations
  recommendations: string[];
}

interface SubjectWeakness {
  subjectId: string;
  subjectName: string;
  subjectColor: string;
  averageScore: number;
  examMarks: number | null;
  totalMarks: number | null;
  examPercentage: number | null;
  weakChaptersCount: number;
  totalChapters: number;
  overallPriority: 'critical' | 'high' | 'medium' | 'low';
}

interface TodaysPlan {
  focusSubject: SubjectWeakness;
  chaptersToStudy: ChapterAnalysis[];
  estimatedTime: number; // minutes
  goals: string[];
}

const STORAGE_KEY_PROGRESS = '7k-hsc-progress';

const SmartWeakness: React.FC<SmartWeaknessProps> = ({ subjects, onClose, onSelectChapter }) => {
  const [chapterAnalysis, setChapterAnalysis] = useState<ChapterAnalysis[]>([]);
  const [subjectWeakness, setSubjectWeakness] = useState<SubjectWeakness[]>([]);
  const [todaysPlan, setTodaysPlan] = useState<TodaysPlan | null>(null);
  const [activeTab, setActiveTab] = useState<'today' | 'subjects' | 'chapters'>('today');
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    analyzeWeakness();
  }, [subjects]);

  const analyzeWeakness = () => {
    setRefreshing(true);
    
    // Get progress data
    const progressData = localStorage.getItem(STORAGE_KEY_PROGRESS);
    const progress = progressData ? JSON.parse(progressData) : {};
    
    // Get exam marks
    const examMarks = db.getAllMarks();
    
    // Analyze each chapter
    const chaptersAnalysis: ChapterAnalysis[] = [];
    const subjectsAnalysis: SubjectWeakness[] = [];
    
    subjects.forEach(subject => {
      const subjectMarks = examMarks.find(m => m.subjectId === subject.id);
      let subjectTotalMcqScore = 0;
      let subjectTotalMcqAttempted = 0;
      let weakChaptersCount = 0;
      
      subject.chapters.forEach(chapter => {
        const chapterProgress = progress[chapter.id] || {};
        const totalMcqs = chapter.mcqs?.length || 30;
        const totalFlashcards = chapter.flashcards?.length || 30;
        
        const mcqScore = chapterProgress.mcqScore || 0;
        const mcqAttempted = chapterProgress.mcqTotal || 0;
        const flashcardsViewed = chapterProgress.flashcardsViewed || 0;
        const lastAttempted = chapterProgress.lastAttempted;
        
        // Calculate days since studied
        let daysSinceStudied = 999;
        if (lastAttempted) {
          const lastDate = new Date(lastAttempted);
          const today = new Date();
          daysSinceStudied = Math.floor((today.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
        }
        
        // Calculate MCQ accuracy
        const mcqAccuracy = mcqAttempted > 0 ? (mcqScore / mcqAttempted) * 100 : 0;
        
        // Calculate weakness score (higher = more weak)
        let weaknessScore = 0;
        
        // Factor 1: Low MCQ accuracy (max 40 points)
        if (mcqAttempted > 0) {
          weaknessScore += (100 - mcqAccuracy) * 0.4;
        } else {
          weaknessScore += 30; // Never attempted
        }
        
        // Factor 2: Not studied recently (max 30 points)
        if (daysSinceStudied > 30) weaknessScore += 30;
        else if (daysSinceStudied > 14) weaknessScore += 20;
        else if (daysSinceStudied > 7) weaknessScore += 10;
        
        // Factor 3: Low flashcard coverage (max 20 points)
        const flashcardCoverage = (flashcardsViewed / totalFlashcards) * 100;
        weaknessScore += (100 - flashcardCoverage) * 0.2;
        
        // Factor 4: Never studied penalty (10 points)
        if (!lastAttempted) weaknessScore += 10;
        
        // Determine priority
        let priority: 'critical' | 'high' | 'medium' | 'low' = 'low';
        if (weaknessScore >= 70) priority = 'critical';
        else if (weaknessScore >= 50) priority = 'high';
        else if (weaknessScore >= 30) priority = 'medium';
        
        if (priority === 'critical' || priority === 'high') weakChaptersCount++;
        
        // Generate recommendations
        const recommendations: string[] = [];
        if (mcqAccuracy < 60 && mcqAttempted > 0) {
          recommendations.push('Practice more MCQs - accuracy needs improvement');
        }
        if (mcqAttempted === 0) {
          recommendations.push('Attempt MCQ test to identify gaps');
        }
        if (flashcardsViewed < totalFlashcards * 0.5) {
          recommendations.push('Review flashcards for better retention');
        }
        if (daysSinceStudied > 14) {
          recommendations.push('Due for revision - knowledge may be fading');
        }
        
        subjectTotalMcqScore += mcqScore;
        subjectTotalMcqAttempted += mcqAttempted;
        
        chaptersAnalysis.push({
          chapterId: chapter.id,
          chapterTitle: chapter.title,
          subjectId: subject.id,
          subjectName: subject.name,
          subjectColor: subject.color,
          mcqAccuracy,
          mcqAttempted,
          flashcardsViewed,
          totalFlashcards,
          lastAttempted,
          daysSinceStudied,
          weaknessScore,
          priority,
          recommendations
        });
      });
      
      // Subject-level analysis
      const avgScore = subjectTotalMcqAttempted > 0 
        ? (subjectTotalMcqScore / subjectTotalMcqAttempted) * 100 
        : 0;
      
      let subjectPriority: 'critical' | 'high' | 'medium' | 'low' = 'low';
      const examPercentage = subjectMarks && subjectMarks.maxMarks > 0 
        ? (subjectMarks.obtainedMarks / subjectMarks.maxMarks) * 100 
        : null;
      
      if (examPercentage !== null) {
        if (examPercentage < 40) subjectPriority = 'critical';
        else if (examPercentage < 60) subjectPriority = 'high';
        else if (examPercentage < 75) subjectPriority = 'medium';
      } else if (avgScore < 50 || weakChaptersCount > subject.chapters.length * 0.5) {
        subjectPriority = 'high';
      }
      
      subjectsAnalysis.push({
        subjectId: subject.id,
        subjectName: subject.name,
        subjectColor: subject.color,
        averageScore: avgScore,
        examMarks: subjectMarks?.obtainedMarks || null,
        totalMarks: subjectMarks?.maxMarks || null,
        examPercentage,
        weakChaptersCount,
        totalChapters: subject.chapters.length,
        overallPriority: subjectPriority
      });
    });
    
    // Sort by weakness score (highest first)
    chaptersAnalysis.sort((a, b) => b.weaknessScore - a.weaknessScore);
    
    // Sort subjects by priority and exam percentage
    subjectsAnalysis.sort((a, b) => {
      const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
      if (priorityOrder[a.overallPriority] !== priorityOrder[b.overallPriority]) {
        return priorityOrder[a.overallPriority] - priorityOrder[b.overallPriority];
      }
      if (a.examPercentage !== null && b.examPercentage !== null) {
        return a.examPercentage - b.examPercentage;
      }
      return 0;
    });
    
    setChapterAnalysis(chaptersAnalysis);
    setSubjectWeakness(subjectsAnalysis);
    
    // Generate today's plan
    generateTodaysPlan(chaptersAnalysis, subjectsAnalysis);
    
    setTimeout(() => setRefreshing(false), 500);
  };

  const generateTodaysPlan = (chapters: ChapterAnalysis[], subjs: SubjectWeakness[]) => {
    // Find the weakest subject
    const focusSubject = subjs[0];
    if (!focusSubject) return;
    
    // Get top 3 weak chapters from focus subject
    const subjectChapters = chapters
      .filter(c => c.subjectId === focusSubject.subjectId)
      .slice(0, 3);
    
    // Add 1-2 chapters from other weak subjects for variety
    const otherChapters = chapters
      .filter(c => c.subjectId !== focusSubject.subjectId && c.priority !== 'low')
      .slice(0, 2);
    
    const chaptersToStudy = [...subjectChapters, ...otherChapters].slice(0, 4);
    
    // Estimate time (30 mins per chapter on average)
    const estimatedTime = chaptersToStudy.length * 30;
    
    // Generate goals
    const goals: string[] = [];
    if (focusSubject.examPercentage !== null && focusSubject.examPercentage < 60) {
      goals.push(`Improve ${focusSubject.subjectName} from ${focusSubject.examPercentage.toFixed(0)}% to ${Math.min(focusSubject.examPercentage + 10, 100).toFixed(0)}%`);
    }
    goals.push(`Complete ${chaptersToStudy.length} chapter revisions`);
    goals.push('Attempt at least 30 MCQs across subjects');
    goals.push('Review all flashcards for weak chapters');
    
    setTodaysPlan({
      focusSubject,
      chaptersToStudy,
      estimatedTime,
      goals
    });
  };

  const getPriorityColor = (priority: string): string => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      case 'high': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      case 'medium': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      default: return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'critical': return <AlertTriangle size={14} />;
      case 'high': return <TrendingDown size={14} />;
      case 'medium': return <Target size={14} />;
      default: return <TrendingUp size={14} />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition"
          >
            <X size={24} className="text-white" />
          </button>
          
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-white/20 rounded-xl">
              <Brain size={28} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Smart Weakness Detector</h2>
              <p className="text-violet-100 text-sm">AI-powered study recommendations</p>
            </div>
          </div>
          
          <button
            onClick={analyzeWeakness}
            disabled={refreshing}
            className="mt-4 flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition text-white text-sm font-medium"
          >
            <RefreshCw size={16} className={refreshing ? 'animate-spin' : ''} />
            {refreshing ? 'Analyzing...' : 'Refresh Analysis'}
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-700">
          {[
            { id: 'today', label: "Today's Plan", icon: Lightbulb },
            { id: 'subjects', label: 'By Subject', icon: BarChart3 },
            { id: 'chapters', label: 'All Chapters', icon: BookOpen }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold transition border-b-2 ${
                activeTab === tab.id
                  ? 'text-violet-600 dark:text-violet-400 border-violet-600 dark:border-violet-400'
                  : 'text-slate-500 dark:text-slate-400 border-transparent hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              <tab.icon size={18} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {/* Today's Plan Tab */}
          {activeTab === 'today' && todaysPlan && (
            <div className="space-y-6">
              {/* Focus Subject Card */}
              <div className={`p-5 rounded-2xl ${todaysPlan.focusSubject.subjectColor} relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-white/80 text-xs font-medium uppercase tracking-wider">Today's Focus Subject</span>
                      <h3 className="text-2xl font-bold text-white">{todaysPlan.focusSubject.subjectName}</h3>
                    </div>
                    <div className={`px-3 py-1.5 rounded-full text-xs font-bold ${getPriorityColor(todaysPlan.focusSubject.overallPriority)}`}>
                      {todaysPlan.focusSubject.overallPriority.toUpperCase()}
                    </div>
                  </div>
                  
                  {todaysPlan.focusSubject.examPercentage !== null && (
                    <div className="flex items-center gap-4 text-white/90">
                      <div>
                        <span className="text-xs text-white/70">Last Exam</span>
                        <p className="font-bold">{todaysPlan.focusSubject.examMarks}/{todaysPlan.focusSubject.totalMarks}</p>
                      </div>
                      <div>
                        <span className="text-xs text-white/70">Percentage</span>
                        <p className="font-bold">{todaysPlan.focusSubject.examPercentage?.toFixed(0)}%</p>
                      </div>
                      <div>
                        <span className="text-xs text-white/70">Weak Chapters</span>
                        <p className="font-bold">{todaysPlan.focusSubject.weakChaptersCount}/{todaysPlan.focusSubject.totalChapters}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Time Estimate */}
              <div className="flex items-center gap-3 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
                <Clock size={24} className="text-amber-600 dark:text-amber-400" />
                <div>
                  <p className="font-bold text-amber-800 dark:text-amber-200">
                    Estimated Study Time: {todaysPlan.estimatedTime} minutes
                  </p>
                  <p className="text-sm text-amber-600 dark:text-amber-300">
                    {todaysPlan.chaptersToStudy.length} chapters planned for today
                  </p>
                </div>
              </div>

              {/* Today's Goals */}
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                  <Target size={18} className="text-violet-500" />
                  Today's Goals
                </h4>
                <div className="space-y-2">
                  {todaysPlan.goals.map((goal, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                        <span className="text-xs font-bold text-violet-600 dark:text-violet-400">{idx + 1}</span>
                      </div>
                      <span className="text-sm text-slate-700 dark:text-slate-300">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chapters to Study */}
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                  <BookOpen size={18} className="text-violet-500" />
                  Chapters to Study Today
                </h4>
                <div className="space-y-3">
                  {todaysPlan.chaptersToStudy.map((chapter, idx) => (
                    <div
                      key={chapter.chapterId}
                      onClick={() => {
                        const subject = subjects.find(s => s.id === chapter.subjectId);
                        const ch = subject?.chapters.find(c => c.id === chapter.chapterId);
                        if (subject && ch && onSelectChapter) {
                          onSelectChapter(subject, ch);
                          onClose?.();
                        }
                      }}
                      className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-600 cursor-pointer transition group"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl ${chapter.subjectColor} flex items-center justify-center text-white font-bold`}>
                          {idx + 1}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800 dark:text-white">{chapter.chapterTitle}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{chapter.subjectName}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getPriorityColor(chapter.priority)}`}>
                          {getPriorityIcon(chapter.priority)}
                          {chapter.priority}
                        </div>
                        <ChevronRight size={18} className="text-slate-400 group-hover:text-violet-500 transition" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Subjects Tab */}
          {activeTab === 'subjects' && (
            <div className="space-y-4">
              {subjectWeakness.map(subject => (
                <div
                  key={subject.subjectId}
                  className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl ${subject.subjectColor} flex items-center justify-center`}>
                        <BookOpen size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 dark:text-white">{subject.subjectName}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {subject.totalChapters} chapters · {subject.weakChaptersCount} need attention
                        </p>
                      </div>
                    </div>
                    <div className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 ${getPriorityColor(subject.overallPriority)}`}>
                      {getPriorityIcon(subject.overallPriority)}
                      {subject.overallPriority}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg text-center">
                      <p className="text-lg font-bold text-slate-800 dark:text-white">
                        {subject.examPercentage !== null ? `${subject.examPercentage.toFixed(0)}%` : 'N/A'}
                      </p>
                      <span className="text-xs text-slate-500 dark:text-slate-400">Exam Score</span>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg text-center">
                      <p className="text-lg font-bold text-slate-800 dark:text-white">
                        {subject.averageScore.toFixed(0)}%
                      </p>
                      <span className="text-xs text-slate-500 dark:text-slate-400">MCQ Avg</span>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded-lg text-center">
                      <p className="text-lg font-bold text-slate-800 dark:text-white">
                        {subject.weakChaptersCount}
                      </p>
                      <span className="text-xs text-slate-500 dark:text-slate-400">Weak Ch.</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Chapters Tab */}
          {activeTab === 'chapters' && (
            <div className="space-y-3">
              {chapterAnalysis.slice(0, 20).map(chapter => (
                <div
                  key={chapter.chapterId}
                  onClick={() => {
                    const subject = subjects.find(s => s.id === chapter.subjectId);
                    const ch = subject?.chapters.find(c => c.id === chapter.chapterId);
                    if (subject && ch && onSelectChapter) {
                      onSelectChapter(subject, ch);
                      onClose?.();
                    }
                  }}
                  className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-600 cursor-pointer transition"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${chapter.subjectColor}`} />
                      <span className="text-xs text-slate-500 dark:text-slate-400">{chapter.subjectName}</span>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getPriorityColor(chapter.priority)}`}>
                      {getPriorityIcon(chapter.priority)}
                      {chapter.priority}
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-2">{chapter.chapterTitle}</h4>
                  
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    <div className="text-center p-2 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <p className="text-sm font-bold text-slate-800 dark:text-white">
                        {chapter.mcqAccuracy.toFixed(0)}%
                      </p>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400">MCQ</span>
                    </div>
                    <div className="text-center p-2 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <p className="text-sm font-bold text-slate-800 dark:text-white">
                        {chapter.flashcardsViewed}/{chapter.totalFlashcards}
                      </p>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400">Cards</span>
                    </div>
                    <div className="text-center p-2 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <p className="text-sm font-bold text-slate-800 dark:text-white">
                        {chapter.daysSinceStudied < 999 ? `${chapter.daysSinceStudied}d` : '-'}
                      </p>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400">Since</span>
                    </div>
                    <div className="text-center p-2 bg-slate-50 dark:bg-slate-700 rounded-lg">
                      <p className="text-sm font-bold text-slate-800 dark:text-white">
                        {chapter.weaknessScore.toFixed(0)}
                      </p>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400">Score</span>
                    </div>
                  </div>
                  
                  {chapter.recommendations.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {chapter.recommendations.slice(0, 2).map((rec, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full">
                          {rec}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmartWeakness;
