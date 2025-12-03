
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
  PAPERS = 'Papers',
  EIGHT_MARKER = 'EightMarker'
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
  color: string; // Tailwind color class snippet
  icon?: string;
}

export interface LongAnswer {
  id: string;
  question: string;
  mnemonic?: string;
  answer: string; // Markdown supported content
}

// Sanskrit-specific types for word-by-word translation
export interface SanskritWord {
  word: string;           // Sanskrit word in Devanagari
  transliteration: string; // IAST/Roman transliteration
  meaning: string;        // English/Hindi meaning
  grammar?: string;       // Grammatical info (vibhakti, vachan, ling etc)
}

export interface SanskritVerse {
  id: string;
  sanskrit: string;       // Original Sanskrit verse
  transliteration: string; // Full verse transliteration
  anvaya?: string;        // Prose word order (Anvaya)
  wordByWord: SanskritWord[]; // Word-by-word breakdown
  meaning: string;        // Full meaning in Hindi/English
  source?: string;        // Original source text
}

export interface SanskritFlashcard extends Flashcard {
  sanskrit?: string;      // Sanskrit text
  transliteration?: string;
  wordMeaning?: SanskritWord[]; // Word breakdown for complex terms
}

export interface GrammarRule {
  id: string;
  rule: string;           // Rule name (e.g., "दीर्घ संधि")
  formula: string;        // Formula (e.g., "अ/आ + अ/आ = आ")
  examples: {
    input: string;
    output: string;
    breakdown: string;
  }[];
  tip?: string;           // Exam tip
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
  longAnswers?: LongAnswer[];
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
