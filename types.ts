export enum Stream {
  ARTS = 'Arts',
  COMMERCE = 'Commerce',
  SCIENCE = 'Science'
}

export enum ContentType {
  SUMMARY = 'Summary',
  DETAILED = 'Detailed',
  FLASHCARDS = 'Flashcards',
  MCQ = 'MCQ',
  REELS = 'Reels',
  PAPERS = 'Papers'
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Reel {
  id: string;
  title: string;
  content: string;
  color: string; // Tailwind color class snippet, e.g., 'bg-blue-500'
  icon?: string;
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  summary: string; // Markdown supported
  detailedNotes: string; // Markdown supported
  flashcards: Flashcard[];
  mcqs: Question[];
  reels: Reel[];
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  syllabus: string;
  paperPattern: string;
  chapters: Chapter[];
  previousPapers: { year: string; title: string; link: string }[];
}

export interface StreamData {
  id: Stream;
  subjects: Subject[];
}