import { useState, useEffect } from 'react';

// Progress data structure
export interface ChapterProgress {
  chapterId: string;
  subjectId: string;
  summaryRead: boolean;
  notesRead: boolean;
  flashcardsReviewed: number;
  flashcardsTotal: number;
  mcqScore: number;
  mcqTotal: number;
  reelsViewed: number;
  reelsTotal: number;
  longAnswersRead: number;
  longAnswersTotal: number;
  lastAccessed: number;
}

export interface StudyStreak {
  currentStreak: number;
  longestStreak: number;
  lastStudyDate: string; // YYYY-MM-DD format
  totalStudyDays: number;
}

export interface ProgressData {
  chapters: Record<string, ChapterProgress>;
  streak: StudyStreak;
  totalStudyTime: number; // in minutes
  lastUpdated: number;
}

const STORAGE_KEY = '7k-hsc-progress';

const getDefaultProgress = (): ProgressData => ({
  chapters: {},
  streak: {
    currentStreak: 0,
    longestStreak: 0,
    lastStudyDate: '',
    totalStudyDays: 0,
  },
  totalStudyTime: 0,
  lastUpdated: Date.now(),
});

const getDefaultChapterProgress = (chapterId: string, subjectId: string): ChapterProgress => ({
  chapterId,
  subjectId,
  summaryRead: false,
  notesRead: false,
  flashcardsReviewed: 0,
  flashcardsTotal: 0,
  mcqScore: 0,
  mcqTotal: 0,
  reelsViewed: 0,
  reelsTotal: 0,
  longAnswersRead: 0,
  longAnswersTotal: 0,
  lastAccessed: Date.now(),
});

export const useProgress = () => {
  const [progress, setProgress] = useState<ProgressData>(getDefaultProgress());

  // Load progress from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as ProgressData;
        setProgress(parsed);
        // Check and update streak
        updateStreak(parsed);
      } catch (e) {
        console.error('Failed to parse progress data:', e);
        setProgress(getDefaultProgress());
      }
    }
  }, []);

  // Save progress to localStorage whenever it changes
  const saveProgress = (newProgress: ProgressData) => {
    newProgress.lastUpdated = Date.now();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
    setProgress(newProgress);
  };

  // Update study streak
  const updateStreak = (data: ProgressData) => {
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    
    let newStreak = { ...data.streak };
    
    if (data.streak.lastStudyDate === today) {
      // Already studied today, no change
      return;
    } else if (data.streak.lastStudyDate === yesterday) {
      // Studied yesterday, increment streak
      newStreak.currentStreak += 1;
      newStreak.lastStudyDate = today;
      newStreak.totalStudyDays += 1;
      if (newStreak.currentStreak > newStreak.longestStreak) {
        newStreak.longestStreak = newStreak.currentStreak;
      }
    } else if (data.streak.lastStudyDate !== today) {
      // Streak broken or first time
      newStreak.currentStreak = 1;
      newStreak.lastStudyDate = today;
      newStreak.totalStudyDays += 1;
    }
    
    const newProgress = { ...data, streak: newStreak };
    saveProgress(newProgress);
  };

  // Get chapter progress
  const getChapterProgress = (chapterId: string, subjectId: string): ChapterProgress => {
    return progress.chapters[chapterId] || getDefaultChapterProgress(chapterId, subjectId);
  };

  // Update chapter progress
  const updateChapterProgress = (chapterId: string, subjectId: string, updates: Partial<ChapterProgress>) => {
    const current = getChapterProgress(chapterId, subjectId);
    const updated = { ...current, ...updates, lastAccessed: Date.now() };
    
    const newProgress = {
      ...progress,
      chapters: {
        ...progress.chapters,
        [chapterId]: updated,
      },
    };
    
    // Update streak when user studies
    updateStreak(newProgress);
    saveProgress(newProgress);
  };

  // Mark summary as read
  const markSummaryRead = (chapterId: string, subjectId: string) => {
    updateChapterProgress(chapterId, subjectId, { summaryRead: true });
  };

  // Mark notes as read
  const markNotesRead = (chapterId: string, subjectId: string) => {
    updateChapterProgress(chapterId, subjectId, { notesRead: true });
  };

  // Update flashcard progress
  const updateFlashcardProgress = (chapterId: string, subjectId: string, reviewed: number, total: number) => {
    updateChapterProgress(chapterId, subjectId, { flashcardsReviewed: reviewed, flashcardsTotal: total });
  };

  // Update MCQ score
  const updateMCQProgress = (chapterId: string, subjectId: string, score: number, total: number) => {
    const current = getChapterProgress(chapterId, subjectId);
    // Keep the best score
    const newScore = Math.max(current.mcqScore, score);
    updateChapterProgress(chapterId, subjectId, { mcqScore: newScore, mcqTotal: total });
  };

  // Update reels viewed
  const updateReelsProgress = (chapterId: string, subjectId: string, viewed: number, total: number) => {
    updateChapterProgress(chapterId, subjectId, { reelsViewed: viewed, reelsTotal: total });
  };

  // Update long answers read
  const updateLongAnswersProgress = (chapterId: string, subjectId: string, read: number, total: number) => {
    updateChapterProgress(chapterId, subjectId, { longAnswersRead: read, longAnswersTotal: total });
  };

  // Calculate subject completion percentage
  const getSubjectCompletion = (subjectId: string, totalChapters?: number): number => {
    const allChapters = Object.values(progress.chapters) as ChapterProgress[];
    const subjectChapters = allChapters.filter(c => c.subjectId === subjectId);
    if (subjectChapters.length === 0) return 0;

    let totalScore = 0;
    subjectChapters.forEach((chapter: ChapterProgress) => {
      let chapterScore = 0;
      if (chapter.summaryRead) chapterScore += 20;
      if (chapter.notesRead) chapterScore += 20;
      if (chapter.flashcardsTotal > 0) {
        chapterScore += (chapter.flashcardsReviewed / chapter.flashcardsTotal) * 20;
      }
      if (chapter.mcqTotal > 0) {
        chapterScore += (chapter.mcqScore / chapter.mcqTotal) * 20;
      }
      if (chapter.reelsTotal > 0) {
        chapterScore += (chapter.reelsViewed / chapter.reelsTotal) * 20;
      }
      totalScore += chapterScore;
    });

    const chaptersCount = totalChapters || subjectChapters.length;
    return Math.round((totalScore / (chaptersCount * 100)) * 100);
  };

  // Calculate overall completion
  const getOverallCompletion = (subjects: { id: string; chaptersCount: number }[]): number => {
    if (subjects.length === 0) return 0;
    const total = subjects.reduce((acc, sub) => acc + getSubjectCompletion(sub.id, sub.chaptersCount), 0);
    return Math.round(total / subjects.length);
  };

  // Get study stats
  const getStudyStats = () => {
    const allChapters = Object.values(progress.chapters) as ChapterProgress[];
    const chaptersStarted = allChapters.length;
    const chaptersCompleted = allChapters.filter((c: ChapterProgress) => 
      c.summaryRead && c.notesRead && 
      c.flashcardsReviewed >= c.flashcardsTotal && 
      c.mcqScore >= c.mcqTotal * 0.8 // 80% MCQ score
    ).length;

    const totalFlashcardsReviewed = allChapters.reduce((acc: number, c: ChapterProgress) => acc + c.flashcardsReviewed, 0);
    const totalMCQAttempted = allChapters.reduce((acc: number, c: ChapterProgress) => acc + c.mcqTotal, 0);
    const totalMCQCorrect = allChapters.reduce((acc: number, c: ChapterProgress) => acc + c.mcqScore, 0);

    return {
      chaptersStarted,
      chaptersCompleted,
      totalFlashcardsReviewed,
      totalMCQAttempted,
      totalMCQCorrect,
      currentStreak: progress.streak.currentStreak,
      longestStreak: progress.streak.longestStreak,
      totalStudyDays: progress.streak.totalStudyDays,
    };
  };

  // Reset all progress
  const resetProgress = () => {
    const defaultProgress = getDefaultProgress();
    saveProgress(defaultProgress);
  };

  return {
    progress,
    getChapterProgress,
    updateChapterProgress,
    markSummaryRead,
    markNotesRead,
    updateFlashcardProgress,
    updateMCQProgress,
    updateReelsProgress,
    updateLongAnswersProgress,
    getSubjectCompletion,
    getOverallCompletion,
    getStudyStats,
    resetProgress,
  };
};

export default useProgress;
