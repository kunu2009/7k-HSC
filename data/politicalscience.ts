export interface Subject {
  name: string;
  code: string;
  totalMarks: number;
  duration: number;
  previousPapers: Array<{
    year: number;
    month: string;
    language: string;
    url: string;
  }>;
  chapters: Array<{
    number: number;
    title: string;
    topics?: string[];
  }>;
  paperPattern: {
    description: string;
    sections: Array<{
      name: string;
      marks: number;
      questions: string;
    }>;
  };
  syllabus: {
    unit1: string;
    unit2: string;
    unit3: string;
  };
  examTips: string[];
  quickFacts: string[];
}

export const POLITICALSCIENCE_SUBJECT: Subject = {
  name: 'Political Science',
  code: 'HSC-PLS',
  totalMarks: 100,
  duration: 3,
  previousPapers: [
    {
      year: 2024,
      month: 'February',
      language: 'English',
      url: 'https://targetpublications.org/download/hsc-arts-maharashtra-board-std-12-english-medium-political-science-question-paper-february-2024',
    },
    {
      year: 2024,
      month: 'February',
      language: 'Marathi',
      url: 'https://targetpublications.org/download/hsc-arts-maharashtra-board-std-12-marathi-medium-political-science-question-paper-february-2024',
    },
    {
      year: 2023,
      month: 'March',
      language: 'English',
      url: 'https://www.shiksha.com/boards/articles/maharashtra-12th-hsc-board-political-science-question-paper-pdf-download-blogId-116467',
    },
    {
      year: 2023,
      month: 'March',
      language: 'Marathi',
      url: 'https://www.shiksha.com/boards/articles/maharashtra-12th-hsc-board-political-science-question-paper-pdf-download-blogId-116467',
    },
  ],
  chapters: [
    {
      number: 1,
      title: 'The World since 1991',
      topics: ['End of Cold War', 'Unipolar World', 'Global Issues'],
    },
    {
      number: 2,
      title: 'Globalisation',
      topics: ['Definition', 'Economic Integration', 'Cultural Impact'],
    },
    {
      number: 3,
      title: 'Indian Politics',
      topics: ['Constitutional Framework', 'Federalism', 'Elections'],
    },
    {
      number: 4,
      title: 'State and Government',
      topics: ['Structure', 'Functions', 'Separation of Powers'],
    },
    {
      number: 5,
      title: 'International Relations',
      topics: ['Diplomacy', 'Organizations', 'Conflicts'],
    },
  ],
  paperPattern: {
    description: '100 marks | 3 hours duration',
    sections: [
      {
        name: 'Section A: Objective Questions',
        marks: 20,
        questions: '20 MCQs (1 mark each)',
      },
      {
        name: 'Section B: Short Answer Questions',
        marks: 30,
        questions: '6 questions (5 marks each)',
      },
      {
        name: 'Section C: Long Answer Questions',
        marks: 50,
        questions: '5 questions (10 marks each)',
      },
    ],
  },
  syllabus: {
    unit1: 'Contemporary World Politics',
    unit2: 'Indian Government and Politics',
    unit3: 'International Relations and Issues',
  },
  examTips: [
    'Master timelines and key events from 1991 onwards',
    'Understand globalisation impacts on politics and economics',
    'Know the Indian Constitution structure and key articles',
    'Practice analyzing international relations case studies',
    'Focus on current affairs and recent government policies',
    'Prepare concise answers to avoid time management issues',
  ],
  quickFacts: [
    'India is a sovereign, socialist, secular, democratic republic',
    'The UN has 193 member states and 5 permanent Security Council members',
    'Globalisation began accelerating after the Cold War ended in 1991',
    'India\'s federal structure balances power between Union and States',
    'BRICS represents emerging economic powers: Brazil, Russia, India, China, South Africa',
    'The India Constitution has 470 Articles (originally) and 12 Schedules',
  ],
};
