import { useState, useEffect, useCallback } from 'react';
import { Stream, Subject } from '../types';
import { PRELIMS_START_2026, getStreamBoardStartDate } from '../examTimetable';

const STORAGE_KEY = '7k-hsc-chapter-completion';

export interface ChapterCompletionData {
  // Key format: "subjectId:chapterId"
  completedChapters: Record<string, boolean>;
  lastUpdated: number;
}

const getDefaultData = (): ChapterCompletionData => ({
  completedChapters: {},
  lastUpdated: Date.now(),
});

// Helper to calculate days remaining (excluding today)
const getDaysUntil = (targetDate: Date): number => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const target = new Date(targetDate);
  target.setHours(0, 0, 0, 0);
  const diff = target.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
};

export interface SubjectProgress {
  subjectId: string;
  subjectName: string;
  totalChapters: number;
  completedChapters: number;
  remainingChapters: number;
  percentComplete: number;
  chaptersPerDayPrelims: number;
  chaptersPerDayBoards: number;
  daysLeftPrelims: number;
  daysLeftBoards: number;
}

export interface OverallProgress {
  totalChapters: number;
  completedChapters: number;
  remainingChapters: number;
  percentComplete: number;
  chaptersPerDayPrelims: number;
  chaptersPerDayBoards: number;
  daysLeftPrelims: number;
  daysLeftBoards: number;
  // Leave some buffer for revision (10% of days)
  chaptersPerDayPrelimsWithBuffer: number;
  chaptersPerDayBoardsWithBuffer: number;
  revisionDaysPrelims: number;
  revisionDaysBoards: number;
}

export const useChapterCompletion = (stream: Stream | null, subjects: Subject[]) => {
  const [data, setData] = useState<ChapterCompletionData>(getDefaultData());

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as ChapterCompletionData;
        setData(parsed);
      } catch (e) {
        console.error('Failed to parse chapter completion data:', e);
        setData(getDefaultData());
      }
    }
  }, []);

  // Save to localStorage
  const saveData = useCallback((newData: ChapterCompletionData) => {
    newData.lastUpdated = Date.now();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    setData(newData);
  }, []);

  // Generate key for a chapter
  const getKey = (subjectId: string, chapterId: string): string => `${subjectId}:${chapterId}`;

  // Check if a chapter is completed
  const isChapterCompleted = useCallback((subjectId: string, chapterId: string): boolean => {
    return !!data.completedChapters[getKey(subjectId, chapterId)];
  }, [data.completedChapters]);

  // Toggle chapter completion
  const toggleChapter = useCallback((subjectId: string, chapterId: string) => {
    const key = getKey(subjectId, chapterId);
    const newData = {
      ...data,
      completedChapters: {
        ...data.completedChapters,
        [key]: !data.completedChapters[key],
      },
    };
    saveData(newData);
  }, [data, saveData]);

  // Mark chapter as complete
  const markComplete = useCallback((subjectId: string, chapterId: string) => {
    const key = getKey(subjectId, chapterId);
    if (!data.completedChapters[key]) {
      const newData = {
        ...data,
        completedChapters: {
          ...data.completedChapters,
          [key]: true,
        },
      };
      saveData(newData);
    }
  }, [data, saveData]);

  // Mark chapter as incomplete
  const markIncomplete = useCallback((subjectId: string, chapterId: string) => {
    const key = getKey(subjectId, chapterId);
    if (data.completedChapters[key]) {
      const newData = {
        ...data,
        completedChapters: {
          ...data.completedChapters,
          [key]: false,
        },
      };
      saveData(newData);
    }
  }, [data, saveData]);

  // Get progress for a single subject
  const getSubjectProgress = useCallback((subject: Subject): SubjectProgress => {
    const totalChapters = subject.chapters.length;
    const completedChapters = subject.chapters.filter(ch => 
      isChapterCompleted(subject.id, ch.id)
    ).length;
    const remainingChapters = totalChapters - completedChapters;
    
    const daysLeftPrelims = getDaysUntil(PRELIMS_START_2026);
    const boardDate = getStreamBoardStartDate(stream);
    const daysLeftBoards = boardDate ? getDaysUntil(boardDate) : 60;

    // Chapters per day (avoid division by zero)
    const chaptersPerDayPrelims = daysLeftPrelims > 0 
      ? Math.ceil((remainingChapters / daysLeftPrelims) * 10) / 10 
      : remainingChapters;
    const chaptersPerDayBoards = daysLeftBoards > 0 
      ? Math.ceil((remainingChapters / daysLeftBoards) * 10) / 10 
      : remainingChapters;

    return {
      subjectId: subject.id,
      subjectName: subject.name,
      totalChapters,
      completedChapters,
      remainingChapters,
      percentComplete: totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0,
      chaptersPerDayPrelims,
      chaptersPerDayBoards,
      daysLeftPrelims,
      daysLeftBoards,
    };
  }, [isChapterCompleted, stream]);

  // Get overall progress across all subjects
  const getOverallProgress = useCallback((): OverallProgress => {
    const totalChapters = subjects.reduce((acc, sub) => acc + sub.chapters.length, 0);
    const completedChapters = subjects.reduce((acc, sub) => 
      acc + sub.chapters.filter(ch => isChapterCompleted(sub.id, ch.id)).length, 0
    );
    const remainingChapters = totalChapters - completedChapters;
    
    const daysLeftPrelims = getDaysUntil(PRELIMS_START_2026);
    const boardDate = getStreamBoardStartDate(stream);
    const daysLeftBoards = boardDate ? getDaysUntil(boardDate) : 60;

    // Leave 10% buffer for revision
    const revisionDaysPrelims = Math.max(1, Math.floor(daysLeftPrelims * 0.1));
    const revisionDaysBoards = Math.max(3, Math.floor(daysLeftBoards * 0.1));
    
    const studyDaysPrelims = Math.max(1, daysLeftPrelims - revisionDaysPrelims);
    const studyDaysBoards = Math.max(1, daysLeftBoards - revisionDaysBoards);

    // Chapters per day
    const chaptersPerDayPrelims = daysLeftPrelims > 0 
      ? Math.ceil((remainingChapters / daysLeftPrelims) * 10) / 10 
      : remainingChapters;
    const chaptersPerDayBoards = daysLeftBoards > 0 
      ? Math.ceil((remainingChapters / daysLeftBoards) * 10) / 10 
      : remainingChapters;

    // With revision buffer
    const chaptersPerDayPrelimsWithBuffer = studyDaysPrelims > 0 
      ? Math.ceil((remainingChapters / studyDaysPrelims) * 10) / 10 
      : remainingChapters;
    const chaptersPerDayBoardsWithBuffer = studyDaysBoards > 0 
      ? Math.ceil((remainingChapters / studyDaysBoards) * 10) / 10 
      : remainingChapters;

    return {
      totalChapters,
      completedChapters,
      remainingChapters,
      percentComplete: totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0,
      chaptersPerDayPrelims,
      chaptersPerDayBoards,
      daysLeftPrelims,
      daysLeftBoards,
      chaptersPerDayPrelimsWithBuffer,
      chaptersPerDayBoardsWithBuffer,
      revisionDaysPrelims,
      revisionDaysBoards,
    };
  }, [subjects, isChapterCompleted, stream]);

  // Get count of completed chapters for a subject
  const getCompletedCount = useCallback((subjectId: string): number => {
    return Object.keys(data.completedChapters).filter(key => 
      key.startsWith(`${subjectId}:`) && data.completedChapters[key]
    ).length;
  }, [data.completedChapters]);

  // Reset all progress
  const resetAll = useCallback(() => {
    saveData(getDefaultData());
  }, [saveData]);

  return {
    isChapterCompleted,
    toggleChapter,
    markComplete,
    markIncomplete,
    getSubjectProgress,
    getOverallProgress,
    getCompletedCount,
    resetAll,
    data,
  };
};

export default useChapterCompletion;
