import { Stream } from '../types';

// Database keys
const KEYS = {
  USER_PROFILE: '7k-hsc-user-profile',
  MARKS_DATA: '7k-hsc-previous-marks',
  PROGRESS_DATA: '7k-hsc-progress',
  STUDY_SESSIONS: '7k-hsc-study-sessions',
  SETTINGS: '7k-hsc-settings',
};

// Stream-specific subjects
export const STREAM_SUBJECTS: Record<Stream, { id: string; name: string; maxMarks: number }[]> = {
  [Stream.COMMERCE]: [
    { id: 'eco', name: 'Economics', maxMarks: 100 },
    { id: 'ocm', name: 'OCM', maxMarks: 100 },
    { id: 'sp', name: 'Secretarial Practice', maxMarks: 100 },
    { id: 'bk', name: 'Book Keeping', maxMarks: 100 },
    { id: 'eng', name: 'English', maxMarks: 100 },
    { id: 'evs', name: 'EVS', maxMarks: 50 },
  ],
  [Stream.ARTS]: [
    { id: 'eng', name: 'English', maxMarks: 100 },
    { id: 'his', name: 'History', maxMarks: 100 },
    { id: 'pol', name: 'Political Science', maxMarks: 100 },
    { id: 'geo', name: 'Geography', maxMarks: 100 },
    { id: 'soc', name: 'Sociology', maxMarks: 100 },
    { id: 'psy', name: 'Psychology', maxMarks: 100 },
    { id: 'evs', name: 'EVS', maxMarks: 50 },
  ],
  [Stream.SCIENCE]: [
    { id: 'phy', name: 'Physics', maxMarks: 100 },
    { id: 'chem', name: 'Chemistry', maxMarks: 100 },
    { id: 'math', name: 'Mathematics', maxMarks: 100 },
    { id: 'bio', name: 'Biology', maxMarks: 100 },
    { id: 'eng', name: 'English', maxMarks: 100 },
    { id: 'it', name: 'Information Technology', maxMarks: 100 },
    { id: 'evs', name: 'EVS', maxMarks: 50 },
  ],
};

// User Profile Interface
export interface UserProfile {
  name: string;
  stream: Stream;
  selectedSubjects: string[]; // Subject IDs
  targetPercentage: number;
  examDate?: string;
  createdAt: string;
  updatedAt: string;
}

// Subject Mark Interface
export interface SubjectMark {
  subjectId: string;
  subjectName: string;
  marks: number | null;
  maxMarks: number;
}

// Exam Marks Interface  
export interface ExamMarks {
  id: string;
  examName: string;
  examDate: string;
  subjects: SubjectMark[];
  totalMarks: number;
  totalMaxMarks: number;
  percentage: number;
  stream: Stream;
}

// Settings Interface
export interface AppSettings {
  darkMode: boolean;
  notificationsEnabled: boolean;
  dailyGoalMinutes: number;
  soundEnabled: boolean;
}

// Default settings
const DEFAULT_SETTINGS: AppSettings = {
  darkMode: false,
  notificationsEnabled: true,
  dailyGoalMinutes: 60,
  soundEnabled: true,
};

// --- Local Database Service ---
export const db = {
  // User Profile
  getUserProfile: (): UserProfile | null => {
    const data = localStorage.getItem(KEYS.USER_PROFILE);
    return data ? JSON.parse(data) : null;
  },

  saveUserProfile: (profile: UserProfile): void => {
    profile.updatedAt = new Date().toISOString();
    localStorage.setItem(KEYS.USER_PROFILE, JSON.stringify(profile));
  },

  createUserProfile: (name: string, stream: Stream, selectedSubjects: string[]): UserProfile => {
    const profile: UserProfile = {
      name,
      stream,
      selectedSubjects,
      targetPercentage: 75,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    db.saveUserProfile(profile);
    return profile;
  },

  // Exam Marks
  getAllMarks: (): ExamMarks[] => {
    const data = localStorage.getItem(KEYS.MARKS_DATA);
    return data ? JSON.parse(data) : [];
  },

  saveExamMarks: (marks: Omit<ExamMarks, 'id'>): ExamMarks => {
    const allMarks = db.getAllMarks();
    const newMarks: ExamMarks = {
      ...marks,
      id: `exam-${Date.now()}`,
    };
    allMarks.push(newMarks);
    localStorage.setItem(KEYS.MARKS_DATA, JSON.stringify(allMarks));
    return newMarks;
  },

  deleteExamMarks: (id: string): void => {
    const allMarks = db.getAllMarks().filter(m => m.id !== id);
    localStorage.setItem(KEYS.MARKS_DATA, JSON.stringify(allMarks));
  },

  getLatestMarks: (): ExamMarks | null => {
    const allMarks = db.getAllMarks();
    return allMarks.length > 0 ? allMarks[allMarks.length - 1] : null;
  },

  getMarksForStream: (stream: Stream): ExamMarks[] => {
    return db.getAllMarks().filter(m => m.stream === stream);
  },

  // Settings
  getSettings: (): AppSettings => {
    const data = localStorage.getItem(KEYS.SETTINGS);
    return data ? { ...DEFAULT_SETTINGS, ...JSON.parse(data) } : DEFAULT_SETTINGS;
  },

  saveSettings: (settings: Partial<AppSettings>): void => {
    const current = db.getSettings();
    localStorage.setItem(KEYS.SETTINGS, JSON.stringify({ ...current, ...settings }));
  },

  // Study Sessions (for analytics)
  logStudySession: (subjectId: string, chapterId: string, durationMinutes: number, type: string): void => {
    const sessions = JSON.parse(localStorage.getItem(KEYS.STUDY_SESSIONS) || '[]');
    sessions.push({
      id: `session-${Date.now()}`,
      subjectId,
      chapterId,
      durationMinutes,
      type,
      timestamp: new Date().toISOString(),
    });
    // Keep only last 100 sessions
    if (sessions.length > 100) sessions.shift();
    localStorage.setItem(KEYS.STUDY_SESSIONS, JSON.stringify(sessions));
  },

  getStudySessions: () => {
    return JSON.parse(localStorage.getItem(KEYS.STUDY_SESSIONS) || '[]');
  },

  // Clear all data
  clearAllData: (): void => {
    Object.values(KEYS).forEach(key => localStorage.removeItem(key));
  },

  // Check if user is onboarded
  isOnboarded: (): boolean => {
    return db.getUserProfile() !== null;
  },
};

export default db;
