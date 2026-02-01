import React, { useState, useEffect, useMemo, useCallback } from 'react';

interface PhaseTask {
  id: string;
  day: number;
  date: string;
  subject: string;
  subjectId: string;
  task: string;
  completed: boolean;
  priority: 'critical' | 'high' | 'medium';
}

interface ExamDate {
  subject: string;
  subjectId: string;
  date: string;
  time: string;
  color: string;
}

interface StudySession {
  date: string;
  minutes: number;
  subjects: string[];
}

interface DailyGoal {
  date: string;
  targetMinutes: number;
  achievedMinutes: number;
  tasksTarget: number;
  tasksCompleted: number;
  streak: number;
}

interface QuickFlashcard {
  id: string;
  subjectId: string;
  subject: string;
  question: string;
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  lastReviewed?: string;
  confidence: number;
}

interface PYQItem {
  id: string;
  subjectId: string;
  year: string;
  question: string;
  marks: number;
  type: 'mcq' | 'short' | 'long';
  answer?: string;
  practiced: boolean;
}

interface WeaknessEntry {
  subjectId: string;
  topic: string;
  attempts: number;
  correctCount: number;
  lastAttempt: string;
  priority: 'high' | 'medium' | 'low';
}

interface MockTest {
  id: string;
  subjectId: string;
  scheduledDate: string;
  scheduledTime: string;
  duration: number;
  completed: boolean;
  score?: number;
  maxScore: number;
  notes?: string;
}

interface WritingPractice {
  id: string;
  subjectId: string;
  type: 'essay' | 'letter' | 'long-answer' | 'short-answer' | 'precis';
  topic: string;
  date: string;
  completed: boolean;
  selfScore?: number;
  timeSpent?: number;
  notes?: string;
}

interface FormulaEntry {
  subjectId: string;
  topic: string;
  formula: string;
  explanation: string;
  example?: string;
}

interface MotivationQuote {
  text: string;
  author: string;
  category: 'focus' | 'persistence' | 'success' | 'exam';
}

interface SubjectConfidence {
  subjectId: string;
  confidence: number; // 0-100
  lastUpdated: string;
  strongTopics: string[];
  weakTopics: string[];
}

interface ImportantDiagram {
  subjectId: string;
  topic: string;
  description: string;
  marks: number;
  tips: string[];
}

interface CommonMistake {
  subjectId: string;
  mistake: string;
  correction: string;
  impact: 'high' | 'medium' | 'low';
}

interface MindMapNode {
  id: string;
  label: string;
  children?: MindMapNode[];
}

interface MindMapData {
  subjectId: string;
  chapter: string;
  centralTopic: string;
  nodes: MindMapNode[];
  tips: string[];
}

interface VoiceNote {
  id: string;
  subjectId: string;
  topic: string;
  audioBlob?: Blob;
  audioUrl?: string;
  duration: number;
  createdAt: string;
  transcription?: string;
}

interface ExamDayItem {
  id: string;
  category: 'documents' | 'stationery' | 'essentials' | 'tips';
  item: string;
  important: boolean;
}

interface QuickRevisionCard {
  subjectId: string;
  topic: string;
  points: string[];
  timeToRead: number; // in seconds
}

interface AnswerWritingTip {
  type: 'mcq' | 'short' | 'long' | 'essay' | 'general';
  title: string;
  tips: string[];
  example?: string;
}

interface PomodoroSession {
  id: string;
  subjectId: string;
  startTime: string;
  duration: number; // in minutes
  completed: boolean;
  date: string;
}

interface DailyAffirmation {
  text: string;
  category: 'confidence' | 'focus' | 'success' | 'calm' | 'power';
}

interface MarkingSchemeItem {
  section: string;
  questionType: string;
  marks: number;
  count: number;
  totalMarks: number;
  tips: string[];
}

interface SubjectMarkingScheme {
  subjectId: string;
  totalMarks: number;
  passingMarks: number;
  duration: number; // in minutes
  sections: MarkingSchemeItem[];
}

interface MegaBoardCrasherProps {
  onClose: () => void;
  selectedSubjects?: string[]; // Subject IDs like 'eng', 'his', 'pol', etc.
}

// Subject ID to display name mapping
const SUBJECT_MAP: Record<string, { name: string; shortName: string; color: string }> = {
  'eng': { name: 'English', shortName: 'English', color: 'bg-blue-500' },
  'hin': { name: 'Hindi', shortName: 'Hindi', color: 'bg-amber-500' },
  'mar': { name: 'Marathi', shortName: 'Marathi', color: 'bg-purple-500' },
  'san': { name: 'Sanskrit', shortName: 'Sanskrit', color: 'bg-pink-500' },
  'pol': { name: 'Political Science', shortName: 'Pol Science', color: 'bg-red-500' },
  'eco': { name: 'Economics', shortName: 'Economics', color: 'bg-indigo-500' },
  'geo': { name: 'Geography', shortName: 'Geography', color: 'bg-teal-500' },
  'his': { name: 'History', shortName: 'History', color: 'bg-orange-500' },
  'soc': { name: 'Sociology', shortName: 'Sociology', color: 'bg-lime-500' },
  'psy': { name: 'Psychology', shortName: 'Psychology', color: 'bg-rose-500' },
  'phi': { name: 'Philosophy', shortName: 'Philosophy', color: 'bg-cyan-500' },
  'log': { name: 'Logic', shortName: 'Logic', color: 'bg-gray-500' },
};

// 90%+ Scoring Strategies for each subject
const SCORING_STRATEGIES: Record<string, { target: number; strategies: string[]; highWeightageTopics: string[]; mustDo: string[] }> = {
  'eng': {
    target: 85,
    strategies: ['Master letter/application formats - 8-10 marks guaranteed', 'Focus on grammar rules - easy 10 marks', 'Practice précis writing daily', 'Novel/Drama question patterns repeat'],
    highWeightageTopics: ['Letter Writing (8 marks)', 'Grammar Section (10 marks)', 'Comprehension (8 marks)', 'Essay Writing (8 marks)'],
    mustDo: ['Learn all letter formats by heart', '3 essays on environment/education/tech', 'Practice 5 comprehension passages', 'Master reported speech & tenses']
  },
  'hin': {
    target: 85,
    strategies: ['पद्य खंड में अर्थ समझकर याद करें', 'व्याकरण के नियम chart बनाएं', 'पत्र लेखन format याद करें', 'निबंध के 3 topics तैयार रखें'],
    highWeightageTopics: ['पत्र लेखन (8 marks)', 'निबंध (8 marks)', 'व्याकरण (10 marks)', 'पद्य अर्थग्रहण (8 marks)'],
    mustDo: ['सभी कविताओं के भावार्थ याद करें', 'संधि विच्छेद practice', 'समास पहचान practice', '10 मुहावरे with examples']
  },
  'pol': {
    target: 90,
    strategies: ['Constitutional Articles numbers याद करें', 'Current affairs examples use करें', 'Diagrams बनाएं (UN, Parliament)', 'Compare & contrast questions practice'],
    highWeightageTopics: ['Globalisation (16 marks)', 'World since 1991 (16 marks)', 'Indian Constitution (16 marks)', 'International Organizations (12 marks)'],
    mustDo: ['Article 1-32 important ones', 'UN organs & functions', '5 current affairs examples per chapter', 'All comparison questions practice']
  },
  'eco': {
    target: 90,
    strategies: ['Diagrams must be NEAT with labels', 'Elasticity formulas रट लें', 'Numerical solving practice daily', 'Definitions word-to-word याद करें'],
    highWeightageTopics: ['Demand-Supply & Elasticity (24 marks)', 'National Income (12 marks)', 'Market Forms (12 marks)', 'Index Numbers (8 marks)'],
    mustDo: ['All elasticity types with formulas', 'Draw demand-supply curves daily', 'National Income methods (3)', '10 numerical problems solved']
  },
  'geo': {
    target: 90,
    strategies: ['Map work daily 30 mins - 16 marks!', 'Geographical reasons format follow करें', 'Statistics याद करें (population, etc)', 'Diagrams with labeling practice'],
    highWeightageTopics: ['Map Work (16 marks)', 'Population Geography (12 marks)', 'Economic Activities (16 marks)', 'Transport & Trade (12 marks)'],
    mustDo: ['India map - all features marked', 'World map - major features', '20 geographical reasons prepared', 'All chapter diagrams drawn once']
  },
  'his': {
    target: 90,
    strategies: ['Timeline chart बनाएं', 'Important dates list ready रखें', 'Map work for historical places', 'Cause-Effect format use करें'],
    highWeightageTopics: ['Freedom Struggle (20 marks)', 'World Wars (16 marks)', 'Renaissance & Reforms (12 marks)', 'Modern India (16 marks)'],
    mustDo: ['30 important dates with events', 'Freedom fighters list with contribution', 'Map - freedom movement places', 'All treaties & agreements']
  },
  'soc': {
    target: 90,
    strategies: ['Definitions exact words में लिखें', 'Examples from Indian society दें', 'Thinkers के quotes याद करें', 'Comparison questions practice'],
    highWeightageTopics: ['Social Institutions (16 marks)', 'Social Problems (16 marks)', 'Indian Society (12 marks)', 'Social Change (12 marks)'],
    mustDo: ['All sociologist names & theories', '10 Indian society examples', 'Caste, class, gender topics', 'Social problems with solutions']
  },
  'psy': {
    target: 90,
    strategies: ['Case studies format समझें', 'Psychological terms definitions exact', 'Experiments describe properly', 'Application-based answers practice'],
    highWeightageTopics: ['Intelligence & Aptitude (12 marks)', 'Learning & Memory (12 marks)', 'Personality (12 marks)', 'Mental Health (12 marks)'],
    mustDo: ['All psychology experiments', 'IQ calculation method', 'Defense mechanisms list', 'Psychological disorders & symptoms']
  },
  'phi': {
    target: 85,
    strategies: ['Logic arguments practice daily', 'Ethics case studies prepare', 'Philosophers quotes याद करें', 'Syllogism solving technique master'],
    highWeightageTopics: ['Logic & Reasoning (20 marks)', 'Ethics (16 marks)', 'Indian Philosophy (12 marks)', 'Western Philosophy (12 marks)'],
    mustDo: ['All syllogism rules', 'Truth table method', 'Major philosophers & their theories', 'Ethics case study answers']
  },
  'log': {
    target: 85,
    strategies: ['Practice syllogisms daily', 'Truth tables master करें', 'Argument forms याद करें', 'Fallacies identify करना सीखें'],
    highWeightageTopics: ['Syllogism (20 marks)', 'Truth Tables (16 marks)', 'Arguments (12 marks)', 'Fallacies (12 marks)'],
    mustDo: ['All valid syllogism forms', 'Truth table for all connectives', 'Identify 10 common fallacies', 'Practice 50 syllogism problems']
  },
  'mar': {
    target: 85,
    strategies: ['व्याकरण नियम chart बनवा', 'पत्र लेखन format पाठ करा', 'निबंध 3 विषय तयार ठेवा', 'आकलन सरावासाठी'],
    highWeightageTopics: ['पत्र लेखन (8 marks)', 'निबंध (8 marks)', 'व्याकरण (10 marks)', 'आकलन (8 marks)'],
    mustDo: ['सर्व पत्र प्रकार', 'संधी व समास', 'वाक्प्रचार व म्हणी', '3 निबंध तयार']
  },
  'san': {
    target: 80,
    strategies: ['श्लोक अर्थसहित पाठ करें', 'संधि नियम chart बनाएं', 'शब्दरूप धातुरूप daily', 'अनुवाद practice'],
    highWeightageTopics: ['श्लोक (12 marks)', 'व्याकरण (16 marks)', 'अनुवाद (8 marks)', 'गद्य (12 marks)'],
    mustDo: ['सभी श्लोक अर्थ सहित', 'संधि 10 प्रकार', 'शब्दरूप 5 important', 'धातुरूप 5 important']
  }
};

// Quick Flashcards Data
const QUICK_FLASHCARDS: QuickFlashcard[] = [
  // Economics
  { id: 'eco1', subjectId: 'eco', subject: 'Economics', question: 'What is Elasticity of Demand formula?', answer: 'Ed = (% Change in Qty Demanded) / (% Change in Price)\nOr Ed = (ΔQ/Q) × (P/ΔP)', difficulty: 'medium', confidence: 0 },
  { id: 'eco2', subjectId: 'eco', subject: 'Economics', question: 'Types of Elasticity of Demand?', answer: '1. Perfectly Elastic (Ed = ∞)\n2. Perfectly Inelastic (Ed = 0)\n3. Unitary Elastic (Ed = 1)\n4. Relatively Elastic (Ed > 1)\n5. Relatively Inelastic (Ed < 1)', difficulty: 'hard', confidence: 0 },
  { id: 'eco3', subjectId: 'eco', subject: 'Economics', question: 'Law of Demand states?', answer: 'Other things remaining constant, when price of a commodity rises, demand falls and vice versa. (Inverse relationship between Price & Quantity Demanded)', difficulty: 'easy', confidence: 0 },
  { id: 'eco4', subjectId: 'eco', subject: 'Economics', question: 'Methods of measuring National Income?', answer: '1. Output/Product Method\n2. Income Method\n3. Expenditure Method\nAll three give same result (GDP)', difficulty: 'medium', confidence: 0 },
  { id: 'eco5', subjectId: 'eco', subject: 'Economics', question: 'What is GDP at Market Price?', answer: 'GDP(MP) = C + I + G + (X - M)\nWhere C=Consumption, I=Investment, G=Govt Expenditure, X=Exports, M=Imports', difficulty: 'hard', confidence: 0 },
  
  // Political Science
  { id: 'pol1', subjectId: 'pol', subject: 'Political Science', question: 'What is Article 17?', answer: 'Abolition of Untouchability - Untouchability is abolished and its practice in any form is forbidden', difficulty: 'easy', confidence: 0 },
  { id: 'pol2', subjectId: 'pol', subject: 'Political Science', question: 'What is Article 21?', answer: 'Protection of Life and Personal Liberty - No person shall be deprived of his life or personal liberty except according to procedure established by law', difficulty: 'easy', confidence: 0 },
  { id: 'pol3', subjectId: 'pol', subject: 'Political Science', question: 'What is Globalisation?', answer: 'Integration of economy with world economy through:\n1. Trade liberalization\n2. Foreign investment\n3. Technology transfer\n4. Free movement of capital', difficulty: 'medium', confidence: 0 },
  { id: 'pol4', subjectId: 'pol', subject: 'Political Science', question: 'UN Security Council permanent members?', answer: 'P5 (Veto Power):\n1. USA 🇺🇸\n2. UK 🇬🇧\n3. France 🇫🇷\n4. Russia 🇷🇺\n5. China 🇨🇳', difficulty: 'easy', confidence: 0 },
  { id: 'pol5', subjectId: 'pol', subject: 'Political Science', question: 'Cold War ended in which year?', answer: '1991 - With the dissolution of Soviet Union (USSR)\nMarked end of bipolar world and beginning of US hegemony', difficulty: 'medium', confidence: 0 },
  
  // Geography
  { id: 'geo1', subjectId: 'geo', subject: 'Geography', question: 'Population Density formula?', answer: 'Population Density = Total Population / Total Area (per sq km)\nIndia: ~382 persons/sq km (2011)', difficulty: 'easy', confidence: 0 },
  { id: 'geo2', subjectId: 'geo', subject: 'Geography', question: 'Types of Human Settlements?', answer: 'Rural: 1. Compact/Nucleated 2. Dispersed 3. Linear\nUrban: 1. Town 2. City 3. Metropolis 4. Megalopolis', difficulty: 'medium', confidence: 0 },
  { id: 'geo3', subjectId: 'geo', subject: 'Geography', question: 'Primary Activities include?', answer: 'Activities directly using natural resources:\n1. Agriculture\n2. Fishing\n3. Mining\n4. Forestry\n5. Animal Husbandry', difficulty: 'easy', confidence: 0 },
  { id: 'geo4', subjectId: 'geo', subject: 'Geography', question: 'HDI full form & components?', answer: 'Human Development Index\nComponents:\n1. Life Expectancy (Health)\n2. Education (Literacy + Enrollment)\n3. Standard of Living (GNI per capita)', difficulty: 'medium', confidence: 0 },
  { id: 'geo5', subjectId: 'geo', subject: 'Geography', question: 'Push & Pull factors of Migration?', answer: 'PUSH (from origin): Unemployment, Poverty, Natural disasters, Conflicts\nPULL (to destination): Better jobs, Education, Healthcare, Quality of life', difficulty: 'medium', confidence: 0 },
  
  // History
  { id: 'his1', subjectId: 'his', subject: 'History', question: 'When did Renaissance begin?', answer: '14th Century in Italy (Florence)\nMeaning: "Rebirth" - Revival of Greek & Roman culture\nKey figures: Leonardo da Vinci, Michelangelo', difficulty: 'easy', confidence: 0 },
  { id: 'his2', subjectId: 'his', subject: 'History', question: 'Important dates of Indian Freedom Struggle?', answer: '1857 - First War of Independence\n1885 - INC Founded\n1919 - Jallianwala Bagh\n1920 - Non-Cooperation\n1930 - Salt March\n1942 - Quit India\n1947 - Independence', difficulty: 'hard', confidence: 0 },
  { id: 'his3', subjectId: 'his', subject: 'History', question: 'World War I period?', answer: '1914-1918\nCauses: Assassination of Archduke Franz Ferdinand, Nationalism, Imperialism, Alliance system\nResult: Treaty of Versailles (1919)', difficulty: 'medium', confidence: 0 },
  { id: 'his4', subjectId: 'his', subject: 'History', question: 'World War II period?', answer: '1939-1945\nStarted: Germany invaded Poland\nEnded: Japan surrender after atomic bombs\nHiroshima: Aug 6, 1945\nNagasaki: Aug 9, 1945', difficulty: 'medium', confidence: 0 },
  { id: 'his5', subjectId: 'his', subject: 'History', question: 'Who founded Indian National Congress?', answer: 'A.O. Hume (Allan Octavian Hume)\nYear: 1885\nPlace: Bombay (Mumbai)\nFirst President: W.C. Bonnerjee', difficulty: 'easy', confidence: 0 },
  
  // English
  { id: 'eng1', subjectId: 'eng', subject: 'English', question: 'Formal Letter format?', answer: "1. Sender's Address\n2. Date\n3. Receiver's Designation & Address\n4. Subject Line\n5. Salutation (Respected Sir/Madam)\n6. Body (3 paragraphs)\n7. Closing (Yours faithfully)\n8. Signature & Name", difficulty: 'medium', confidence: 0 },
  { id: 'eng2', subjectId: 'eng', subject: 'English', question: 'Active to Passive Voice rule?', answer: 'Object → Subject\nSubject → by + Object\nVerb → be + V3 (Past Participle)\nExample: She writes a letter → A letter is written by her', difficulty: 'medium', confidence: 0 },
  { id: 'eng3', subjectId: 'eng', subject: 'English', question: 'Direct to Indirect Speech changes?', answer: 'Present → Past\nPast → Past Perfect\nWill → Would\nThis → That\nHere → There\nNow → Then\nToday → That day', difficulty: 'hard', confidence: 0 },
  { id: 'eng4', subjectId: 'eng', subject: 'English', question: 'Essay structure?', answer: '1. Introduction (Hook + Thesis)\n2. Body Para 1 (Point + Example)\n3. Body Para 2 (Point + Example)\n4. Body Para 3 (Point + Example)\n5. Conclusion (Summary + Final thought)', difficulty: 'easy', confidence: 0 },
  { id: 'eng5', subjectId: 'eng', subject: 'English', question: 'Précis writing rules?', answer: '1. Read passage 2-3 times\n2. Identify main ideas\n3. Write in 1/3rd of original length\n4. Use your own words\n5. No personal opinions\n6. Write in 3rd person\n7. Give suitable title', difficulty: 'medium', confidence: 0 },
  
  // Hindi
  { id: 'hin1', subjectId: 'hin', subject: 'Hindi', question: 'संधि के कितने प्रकार हैं?', answer: '3 प्रकार:\n1. स्वर संधि (गुण, वृद्धि, यण, अयादि, दीर्घ)\n2. व्यंजन संधि\n3. विसर्ग संधि', difficulty: 'medium', confidence: 0 },
  { id: 'hin2', subjectId: 'hin', subject: 'Hindi', question: 'समास के प्रकार?', answer: '1. अव्ययीभाव\n2. तत्पुरुष\n3. कर्मधारय\n4. द्विगु\n5. द्वंद्व\n6. बहुव्रीहि', difficulty: 'hard', confidence: 0 },
  { id: 'hin3', subjectId: 'hin', subject: 'Hindi', question: 'औपचारिक पत्र में क्या-क्या होता है?', answer: '1. दिनांक\n2. सेवा में (प्राप्तकर्ता)\n3. विषय\n4. महोदय/महोदया\n5. मुख्य भाग\n6. धन्यवाद सहित\n7. भवदीय/भवदीया\n8. नाम व पता', difficulty: 'easy', confidence: 0 },
  
  // Sociology
  { id: 'soc1', subjectId: 'soc', subject: 'Sociology', question: 'Who is father of Sociology?', answer: 'Auguste Comte (French philosopher)\nHe coined the term "Sociology" in 1838\nMeaning: Socius (companion) + Logos (study)', difficulty: 'easy', confidence: 0 },
  { id: 'soc2', subjectId: 'soc', subject: 'Sociology', question: 'Types of Social Groups?', answer: 'Primary Groups: Family, Peer group (face-to-face, intimate)\nSecondary Groups: Clubs, Associations (formal, impersonal)', difficulty: 'medium', confidence: 0 },
  { id: 'soc3', subjectId: 'soc', subject: 'Sociology', question: 'What is Social Stratification?', answer: 'Division of society into hierarchical layers based on:\n1. Caste\n2. Class\n3. Gender\n4. Ethnicity\nCreates inequality in access to resources', difficulty: 'medium', confidence: 0 },
  
  // Psychology
  { id: 'psy1', subjectId: 'psy', subject: 'Psychology', question: 'IQ Formula?', answer: 'IQ = (Mental Age / Chronological Age) × 100\nAverage IQ = 100\nGenius: Above 140\nMentally Challenged: Below 70', difficulty: 'medium', confidence: 0 },
  { id: 'psy2', subjectId: 'psy', subject: 'Psychology', question: 'Defense Mechanisms (Freud)?', answer: '1. Repression - Pushing to unconscious\n2. Denial - Refusing to accept\n3. Projection - Blaming others\n4. Rationalization - Logical excuses\n5. Sublimation - Positive outlet', difficulty: 'hard', confidence: 0 },
  { id: 'psy3', subjectId: 'psy', subject: 'Psychology', question: 'Types of Memory?', answer: '1. Sensory Memory (seconds)\n2. Short-term Memory (20-30 sec)\n3. Long-term Memory (permanent)\nTypes: Episodic, Semantic, Procedural', difficulty: 'medium', confidence: 0 },
  
  // Sanskrit Flashcards
  { id: 'san1', subjectId: 'san', subject: 'Sanskrit', question: 'संधि के कितने प्रकार हैं?', answer: 'तीन प्रकार:\n1. स्वर संधि (अच् संधि)\n2. व्यञ्जन संधि (हल् संधि)\n3. विसर्ग संधि', difficulty: 'medium', confidence: 0 },
  { id: 'san2', subjectId: 'san', subject: 'Sanskrit', question: 'गुण संधि का नियम?', answer: 'अ/आ + इ/ई = ए\nअ/आ + उ/ऊ = ओ\nअ/आ + ऋ = अर्\nउदाहरण: देव + इन्द्र = देवेन्द्र', difficulty: 'medium', confidence: 0 },
  { id: 'san3', subjectId: 'san', subject: 'Sanskrit', question: 'वृद्धि संधि का नियम?', answer: 'अ/आ + ए/ऐ = ऐ\nअ/आ + ओ/औ = औ\nउदाहरण: एक + एक = एकैक\nमहा + औषधि = महौषधि', difficulty: 'hard', confidence: 0 },
  { id: 'san4', subjectId: 'san', subject: 'Sanskrit', question: 'लट् लकार (वर्तमान काल) - भू धातु?', answer: 'एकवचन: भवति, भवतः, भवन्ति\nद्विवचन: भवतः, भवतः, भवतः\nबहुवचन: भवन्ति, भवन्ति, भवन्ति', difficulty: 'medium', confidence: 0 },
  { id: 'san5', subjectId: 'san', subject: 'Sanskrit', question: 'राम शब्द रूप (पुल्लिङ्ग)?', answer: 'प्रथमा: रामः, रामौ, रामाः\nद्वितीया: रामम्, रामौ, रामान्\nतृतीया: रामेण, रामाभ्याम्, रामैः', difficulty: 'hard', confidence: 0 },
  { id: 'san6', subjectId: 'san', subject: 'Sanskrit', question: 'विभक्ति कितनी होती हैं?', answer: 'सात विभक्ति:\n1. प्रथमा (कर्ता)\n2. द्वितीया (कर्म)\n3. तृतीया (करण)\n4. चतुर्थी (सम्प्रदान)\n5. पञ्चमी (अपादान)\n6. षष्ठी (सम्बन्ध)\n7. सप्तमी (अधिकरण)', difficulty: 'easy', confidence: 0 },
  { id: 'san7', subjectId: 'san', subject: 'Sanskrit', question: 'प्रसिद्ध श्लोक - विद्या ददाति विनयम्?', answer: 'विद्या ददाति विनयं विनयाद्याति पात्रताम्।\nपात्रत्वाद्धनमाप्नोति धनाद्धर्मं ततः सुखम्॥\nअर्थ: विद्या से विनय, विनय से पात्रता, पात्रता से धन, धन से धर्म, धर्म से सुख मिलता है।', difficulty: 'medium', confidence: 0 },
  { id: 'san8', subjectId: 'san', subject: 'Sanskrit', question: 'लृट् लकार (भविष्यत् काल) - पठ् धातु?', answer: 'एकवचन: पठिष्यति, पठिष्यतः, पठिष्यन्ति\nप्रथम पुरुष: पठिष्यति\nमध्यम पुरुष: पठिष्यसि\nउत्तम पुरुष: पठिष्यामि', difficulty: 'hard', confidence: 0 },
  
  // Marathi Flashcards
  { id: 'mar1', subjectId: 'mar', subject: 'Marathi', question: 'संधी म्हणजे काय?', answer: 'दोन शब्द एकत्र येताना त्यांच्यातील स्वरांचा किंवा व्यंजनांचा मेळ होणे म्हणजे संधी.\nप्रकार: स्वरसंधी, व्यंजनसंधी, विसर्गसंधी', difficulty: 'medium', confidence: 0 },
  { id: 'mar2', subjectId: 'mar', subject: 'Marathi', question: 'समास म्हणजे काय?', answer: 'दोन किंवा अधिक शब्दांचे एकत्रीकरण करून एक शब्द बनवणे.\nप्रकार: अव्ययीभाव, तत्पुरुष, द्वंद्व, बहुव्रीही, कर्मधारय, द्विगू', difficulty: 'medium', confidence: 0 },
  { id: 'mar3', subjectId: 'mar', subject: 'Marathi', question: 'अलंकार कोणते?', answer: 'शब्दालंकार: अनुप्रास, यमक\nअर्थालंकार: उपमा, रूपक, उत्प्रेक्षा, अतिशयोक्ती, दृष्टांत', difficulty: 'hard', confidence: 0 },
  { id: 'mar4', subjectId: 'mar', subject: 'Marathi', question: 'पत्र लेखनाचे प्रकार?', answer: '1. औपचारिक पत्र (अर्ज, तक्रार)\n2. अनौपचारिक पत्र (मित्राला, नातेवाईकांना)\n3. व्यावसायिक पत्र', difficulty: 'easy', confidence: 0 },
  
  // More Economics
  { id: 'eco6', subjectId: 'eco', subject: 'Economics', question: 'Features of Monopoly?', answer: '1. Single Seller\n2. No close substitutes\n3. Price Maker\n4. Barriers to entry\n5. Firm = Industry\n6. Abnormal profits in long run', difficulty: 'medium', confidence: 0 },
  { id: 'eco7', subjectId: 'eco', subject: 'Economics', question: 'Factors affecting Elasticity?', answer: '1. Nature of commodity\n2. Availability of substitutes\n3. Number of uses\n4. Proportion of income spent\n5. Time period\n6. Habits & customs', difficulty: 'hard', confidence: 0 },
  
  // More Political Science
  { id: 'pol6', subjectId: 'pol', subject: 'Political Science', question: 'Organs of UN?', answer: '6 Principal Organs:\n1. General Assembly\n2. Security Council\n3. Economic & Social Council\n4. Trusteeship Council\n5. International Court of Justice\n6. Secretariat', difficulty: 'medium', confidence: 0 },
  { id: 'pol7', subjectId: 'pol', subject: 'Political Science', question: 'Directive Principles (DPSP) Articles?', answer: 'Article 36-51\nPart IV of Constitution\nNot justiciable (not enforceable by court)\nGovernment shall endeavour to follow', difficulty: 'medium', confidence: 0 },
];

// PYQ Important Questions
const PYQ_QUESTIONS: PYQItem[] = [
  // Economics PYQs
  { id: 'pyq-eco1', subjectId: 'eco', year: '2024', question: 'Explain the concept of Elasticity of Demand with types.', marks: 8, type: 'long', practiced: false },
  { id: 'pyq-eco2', subjectId: 'eco', year: '2024', question: 'Distinguish between Micro and Macro Economics.', marks: 4, type: 'short', practiced: false },
  { id: 'pyq-eco3', subjectId: 'eco', year: '2023', question: 'Draw and explain the Law of Demand with diagram.', marks: 8, type: 'long', practiced: false },
  { id: 'pyq-eco4', subjectId: 'eco', year: '2023', question: 'Explain methods of measuring National Income.', marks: 8, type: 'long', practiced: false },
  { id: 'pyq-eco5', subjectId: 'eco', year: '2022', question: 'What are the features of Perfect Competition?', marks: 4, type: 'short', practiced: false },
  
  // Political Science PYQs
  { id: 'pyq-pol1', subjectId: 'pol', year: '2024', question: 'Explain the impact of Globalisation on Indian economy.', marks: 8, type: 'long', practiced: false },
  { id: 'pyq-pol2', subjectId: 'pol', year: '2024', question: 'What are the functions of UN Security Council?', marks: 4, type: 'short', practiced: false },
  { id: 'pyq-pol3', subjectId: 'pol', year: '2023', question: 'Explain the changes in world politics after 1991.', marks: 8, type: 'long', practiced: false },
  { id: 'pyq-pol4', subjectId: 'pol', year: '2023', question: 'Discuss Fundamental Rights in Indian Constitution.', marks: 8, type: 'long', practiced: false },
  { id: 'pyq-pol5', subjectId: 'pol', year: '2022', question: 'What is meant by unipolar world?', marks: 4, type: 'short', practiced: false },
  
  // Geography PYQs
  { id: 'pyq-geo1', subjectId: 'geo', year: '2024', question: 'Give geographical reasons: Population is dense in river valleys.', marks: 4, type: 'short', practiced: false },
  { id: 'pyq-geo2', subjectId: 'geo', year: '2024', question: 'Explain factors affecting distribution of population.', marks: 8, type: 'long', practiced: false },
  { id: 'pyq-geo3', subjectId: 'geo', year: '2023', question: 'Distinguish between Rural and Urban settlements.', marks: 4, type: 'short', practiced: false },
  { id: 'pyq-geo4', subjectId: 'geo', year: '2023', question: 'Explain the concept of Human Development Index.', marks: 8, type: 'long', practiced: false },
  { id: 'pyq-geo5', subjectId: 'geo', year: '2022', question: 'Write a note on Primary Economic Activities.', marks: 4, type: 'short', practiced: false },
  
  // History PYQs
  { id: 'pyq-his1', subjectId: 'his', year: '2024', question: 'Explain the causes and effects of Renaissance.', marks: 8, type: 'long', practiced: false },
  { id: 'pyq-his2', subjectId: 'his', year: '2024', question: 'Write a note on Non-Cooperation Movement.', marks: 4, type: 'short', practiced: false },
  { id: 'pyq-his3', subjectId: 'his', year: '2023', question: 'Explain the causes of World War I.', marks: 8, type: 'long', practiced: false },
  { id: 'pyq-his4', subjectId: 'his', year: '2023', question: 'Discuss the role of Mahatma Gandhi in Freedom Struggle.', marks: 8, type: 'long', practiced: false },
  { id: 'pyq-his5', subjectId: 'his', year: '2022', question: 'What were the effects of colonialism on India?', marks: 4, type: 'short', practiced: false },
  
  // English PYQs
  { id: 'pyq-eng1', subjectId: 'eng', year: '2024', question: 'Write a formal letter to the Municipal Commissioner about water scarcity in your area.', marks: 8, type: 'long', practiced: false },
  { id: 'pyq-eng2', subjectId: 'eng', year: '2024', question: 'Write an essay on "Importance of Education".', marks: 8, type: 'long', practiced: false },
  { id: 'pyq-eng3', subjectId: 'eng', year: '2023', question: 'Change the voice: The students completed the project.', marks: 2, type: 'short', practiced: false },
  { id: 'pyq-eng4', subjectId: 'eng', year: '2023', question: 'Convert to indirect speech: She said, "I am reading a book."', marks: 2, type: 'short', practiced: false },
  { id: 'pyq-eng5', subjectId: 'eng', year: '2022', question: 'Write a précis of the given passage.', marks: 4, type: 'short', practiced: false },
  
  // Sanskrit PYQs
  { id: 'pyq-san1', subjectId: 'san', year: '2024', question: 'निम्नलिखित श्लोक का हिन्दी में अनुवाद कीजिए।', marks: 4, type: 'short', practiced: false },
  { id: 'pyq-san2', subjectId: 'san', year: '2024', question: 'गुण संधि के पाँच उदाहरण लिखिए।', marks: 4, type: 'short', practiced: false },
  { id: 'pyq-san3', subjectId: 'san', year: '2023', question: 'राम शब्द के सभी विभक्ति रूप लिखिए।', marks: 8, type: 'long', practiced: false },
  { id: 'pyq-san4', subjectId: 'san', year: '2023', question: 'लट् लकार में भू धातु के रूप लिखिए।', marks: 4, type: 'short', practiced: false },
  { id: 'pyq-san5', subjectId: 'san', year: '2022', question: 'संधि विच्छेद कीजिए: देवालयः, महौषधिः, नयनम्', marks: 4, type: 'short', practiced: false },
  { id: 'pyq-san6', subjectId: 'san', year: '2024', question: 'विद्या ददाति विनयम् श्लोक का अर्थ स्पष्ट कीजिए।', marks: 8, type: 'long', practiced: false },
  
  // Hindi PYQs
  { id: 'pyq-hin1', subjectId: 'hin', year: '2024', question: 'किसी भी एक विषय पर निबंध लिखिए: शिक्षा का महत्व / पर्यावरण प्रदूषण', marks: 8, type: 'long', practiced: false },
  { id: 'pyq-hin2', subjectId: 'hin', year: '2024', question: 'प्रधानाचार्य को अवकाश के लिए प्रार्थना पत्र लिखिए।', marks: 8, type: 'long', practiced: false },
  { id: 'pyq-hin3', subjectId: 'hin', year: '2023', question: 'निम्नलिखित शब्दों का संधि-विच्छेद कीजिए।', marks: 4, type: 'short', practiced: false },
  { id: 'pyq-hin4', subjectId: 'hin', year: '2023', question: 'समास के प्रकारों को उदाहरण सहित समझाइए।', marks: 8, type: 'long', practiced: false },
  
  // Marathi PYQs
  { id: 'pyq-mar1', subjectId: 'mar', year: '2024', question: 'खालील विषयावर निबंध लिहा: शिक्षणाचे महत्त्व', marks: 8, type: 'long', practiced: false },
  { id: 'pyq-mar2', subjectId: 'mar', year: '2024', question: 'मुख्याध्यापकांना सुट्टीसाठी अर्ज लिहा।', marks: 8, type: 'long', practiced: false },
  { id: 'pyq-mar3', subjectId: 'mar', year: '2023', question: 'संधी व समास यांतील फरक स्पष्ट करा।', marks: 4, type: 'short', practiced: false },
  
  // Sociology PYQs
  { id: 'pyq-soc1', subjectId: 'soc', year: '2024', question: 'Explain the concept of Social Stratification with examples.', marks: 8, type: 'long', practiced: false },
  { id: 'pyq-soc2', subjectId: 'soc', year: '2023', question: 'Distinguish between Primary and Secondary Groups.', marks: 4, type: 'short', practiced: false },
  
  // Psychology PYQs
  { id: 'pyq-psy1', subjectId: 'psy', year: '2024', question: 'Explain the concept of Intelligence and its measurement.', marks: 8, type: 'long', practiced: false },
  { id: 'pyq-psy2', subjectId: 'psy', year: '2023', question: 'Describe Defense Mechanisms according to Freud.', marks: 8, type: 'long', practiced: false },
];

// Formula Bank for Quick Reference
const FORMULA_BANK: FormulaEntry[] = [
  // Economics Formulas
  { subjectId: 'eco', topic: 'Elasticity of Demand', formula: 'Ed = (% Change in Qty) / (% Change in Price)', explanation: 'Measures responsiveness of demand to price change', example: 'If price ↑10%, demand ↓20%, Ed = 20/10 = 2 (Elastic)' },
  { subjectId: 'eco', topic: 'Elasticity (Point Method)', formula: 'Ed = (ΔQ/ΔP) × (P/Q)', explanation: 'Used when calculating at a specific point on curve', example: 'At P=10, Q=100, ΔP=2, ΔQ=20: Ed = (20/2)×(10/100) = 1' },
  { subjectId: 'eco', topic: 'GDP at MP', formula: 'GDP(MP) = C + I + G + (X - M)', explanation: 'Expenditure method: Consumption + Investment + Govt + Net Exports' },
  { subjectId: 'eco', topic: 'NNP at FC', formula: 'NNP(FC) = NNP(MP) - Indirect Taxes + Subsidies', explanation: 'National Income calculation at factor cost' },
  { subjectId: 'eco', topic: 'Per Capita Income', formula: 'PCI = National Income / Population', explanation: 'Average income per person in a country' },
  { subjectId: 'eco', topic: 'Total Revenue', formula: 'TR = Price × Quantity', explanation: 'Total earnings from sales' },
  { subjectId: 'eco', topic: 'Marginal Revenue', formula: 'MR = Change in TR / Change in Qty', explanation: 'Additional revenue from one more unit sold' },
  { subjectId: 'eco', topic: 'Average Cost', formula: 'AC = Total Cost / Quantity', explanation: 'Cost per unit of output' },
  
  // Geography Formulas
  { subjectId: 'geo', topic: 'Population Density', formula: 'PD = Total Population / Total Area', explanation: 'Number of persons per sq km', example: 'India: 1.4B / 3.3M km² = ~424 persons/km²' },
  { subjectId: 'geo', topic: 'Sex Ratio', formula: 'SR = (Females / Males) × 1000', explanation: 'Number of females per 1000 males', example: 'India (2011): 943 females per 1000 males' },
  { subjectId: 'geo', topic: 'Literacy Rate', formula: 'LR = (Literates / Population 7+) × 100', explanation: 'Percentage of literate population above age 7' },
  { subjectId: 'geo', topic: 'Growth Rate', formula: 'GR = ((P2 - P1) / P1) × 100', explanation: 'Percentage increase in population between two periods' },
  { subjectId: 'geo', topic: 'HDI Components', formula: 'HDI = (LEI + EI + II) / 3', explanation: 'Average of Life Expectancy, Education, and Income indices' },
  
  // Psychology Formulas
  { subjectId: 'psy', topic: 'IQ Formula', formula: 'IQ = (Mental Age / Chronological Age) × 100', explanation: 'Intelligence Quotient calculation', example: 'MA=12, CA=10: IQ = (12/10)×100 = 120' },
  { subjectId: 'psy', topic: 'Standard Deviation', formula: 'σ = √(Σ(X-μ)² / N)', explanation: 'Measure of score dispersion around mean' },
  
  // History Important Dates
  { subjectId: 'his', topic: 'Important Years', formula: '1857 → 1885 → 1905 → 1919 → 1920 → 1930 → 1942 → 1947', explanation: 'Revolt → INC → Bengal Partition → Jallianwala → NCM → Salt March → Quit India → Independence' },
  
  // Political Science Key Numbers
  { subjectId: 'pol', topic: 'Constitutional Numbers', formula: 'Part I-XXII | 395 Articles | 12 Schedules', explanation: 'Structure of Indian Constitution' },
  { subjectId: 'pol', topic: 'UN Key Numbers', formula: '193 Members | 5 P5 | 15 UNSC | 6 Principal Organs', explanation: 'UN Structure numbers to remember' },
  
  // Sanskrit Grammar Rules
  { subjectId: 'san', topic: 'गुण संधि', formula: 'अ/आ + इ/ई = ए | अ/आ + उ/ऊ = ओ | अ/आ + ऋ = अर्', explanation: 'When अ/आ meets इ/ई/उ/ऊ/ऋ', example: 'देव + इन्द्र = देवेन्द्र, महा + उत्सव = महोत्सव' },
  { subjectId: 'san', topic: 'वृद्धि संधि', formula: 'अ/आ + ए/ऐ = ऐ | अ/आ + ओ/औ = औ', explanation: 'When अ/आ meets ए/ऐ/ओ/औ', example: 'एक + एक = एकैक, महा + औषधि = महौषधि' },
  { subjectId: 'san', topic: 'दीर्घ संधि', formula: 'अ + अ = आ | इ + इ = ई | उ + उ = ऊ', explanation: 'Same vowels combine to become long', example: 'विद्या + आलय = विद्यालय' },
  { subjectId: 'san', topic: 'यण् संधि', formula: 'इ/ई + स्वर = य् | उ/ऊ + स्वर = व् | ऋ + स्वर = र्', explanation: 'इ/उ/ऋ before different vowel', example: 'इति + आदि = इत्यादि, सु + आगतम् = स्वागतम्' },
  { subjectId: 'san', topic: 'विभक्ति सूत्र', formula: 'प्र-द्वि-तृ-च-पं-ष-स (1-7)', explanation: 'प्रथमा, द्वितीया, तृतीया, चतुर्थी, पञ्चमी, षष्ठी, सप्तमी' },
  { subjectId: 'san', topic: 'लकार (काल)', formula: 'लट् = वर्तमान | लृट् = भविष्यत् | लङ् = अनद्यतन भूत', explanation: 'Tenses in Sanskrit verbs' },
  
  // Hindi Grammar
  { subjectId: 'hin', topic: 'स्वर संधि प्रकार', formula: 'दीर्घ | गुण | वृद्धि | यण | अयादि', explanation: '5 types of vowel sandhi in Hindi', example: 'विद्या+आलय=विद्यालय (दीर्घ)' },
  { subjectId: 'hin', topic: 'समास प्रकार', formula: 'अव्ययी | तत्पुरुष | कर्मधारय | द्विगु | द्वंद्व | बहुव्रीहि', explanation: '6 types of compound words' },
  
  // Marathi Grammar
  { subjectId: 'mar', topic: 'विभक्ती प्रत्यय', formula: 'प्रथमा (कर्ता) → सप्तमी (अधिकरण)', explanation: '7 विभक्ती in Marathi grammar', example: 'राम-ने-ला-स-हून-चा-त' },
];

// Motivation Quotes
const MOTIVATION_QUOTES: MotivationQuote[] = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: 'focus' },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", category: 'persistence' },
  { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela", category: 'success' },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", category: 'success' },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius", category: 'persistence' },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", category: 'exam' },
  { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown", category: 'exam' },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson", category: 'focus' },
  { text: "Your limitation—it's only your imagination.", author: "Unknown", category: 'success' },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown", category: 'exam' },
  { text: "Great things never come from comfort zones.", author: "Unknown", category: 'persistence' },
  { text: "Dream it. Wish it. Do it.", author: "Unknown", category: 'focus' },
  { text: "Success doesn't just find you. You have to go out and get it.", author: "Unknown", category: 'success' },
  { text: "The harder you work, the luckier you get.", author: "Gary Player", category: 'exam' },
  { text: "Don't stop when you're tired. Stop when you're done.", author: "Unknown", category: 'persistence' },
  { text: "आज की मेहनत, कल की कामयाबी", author: "Hindi Proverb", category: 'exam' },
  { text: "विद्या ददाति विनयम् - Knowledge gives humility", author: "Sanskrit Shlok", category: 'success' },
  { text: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन - Focus on action, not results", author: "Bhagavad Gita", category: 'focus' },
  { text: "90% is not a dream, it's a decision!", author: "7k-HSC", category: 'exam' },
  { text: "Every chapter you complete is one step closer to success.", author: "7k-HSC", category: 'persistence' },
  { text: "Board exams don't define you, but your preparation shows your dedication.", author: "7k-HSC", category: 'exam' },
];

// Important Diagrams Reference
const IMPORTANT_DIAGRAMS: ImportantDiagram[] = [
  // Economics
  { subjectId: 'eco', topic: 'Demand Curve', description: 'Downward sloping curve showing inverse P-Q relationship', marks: 4, tips: ['Label axes correctly (P on Y, Q on X)', 'Show arrows for movement along curve', 'Mark equilibrium point clearly'] },
  { subjectId: 'eco', topic: 'Supply Curve', description: 'Upward sloping curve showing direct P-Q relationship', marks: 4, tips: ['Starts from origin or positive Y intercept', 'Label as SS curve', 'Show shift vs movement difference'] },
  { subjectId: 'eco', topic: 'Market Equilibrium', description: 'Intersection of Demand & Supply curves', marks: 8, tips: ['Mark equilibrium price (Pe) and quantity (Qe)', 'Show surplus/shortage areas', 'Draw both curves clearly'] },
  { subjectId: 'eco', topic: 'Types of Elasticity', description: '5 diagrams showing Ed = 0, 1, ∞, >1, <1', marks: 8, tips: ['Perfectly elastic = horizontal line', 'Perfectly inelastic = vertical line', 'Unitary = rectangular hyperbola'] },
  { subjectId: 'eco', topic: 'Circular Flow of Income', description: 'Two-sector model showing flow between households & firms', marks: 4, tips: ['Show factor market & product market', 'Arrows in correct direction', 'Label money flow & real flow'] },
  
  // Geography
  { subjectId: 'geo', topic: 'India Map - Physical', description: 'Mark mountains, rivers, plateaus', marks: 8, tips: ['Use proper symbols', 'Label neatly', 'Practice with blank map daily'] },
  { subjectId: 'geo', topic: 'India Map - Political', description: 'States, capitals, major cities', marks: 8, tips: ['Know all 28 states + 8 UTs', 'Mark boundaries clearly', 'Use index if provided'] },
  { subjectId: 'geo', topic: 'World Map', description: 'Continents, oceans, important countries', marks: 4, tips: ['Mark major countries asked in syllabus', 'Know major water bodies', 'Practice equator & tropic lines'] },
  { subjectId: 'geo', topic: 'Population Pyramid', description: 'Age-sex structure diagram', marks: 4, tips: ['Males on left, Females on right', 'Show expansive/constrictive/stationary types', 'Label age groups clearly'] },
  
  // Political Science
  { subjectId: 'pol', topic: 'UN Structure', description: '6 principal organs of United Nations', marks: 4, tips: ['Show hierarchy clearly', 'Mark specialized agencies', 'Highlight Security Council'] },
  { subjectId: 'pol', topic: 'Indian Parliament', description: 'Lok Sabha & Rajya Sabha structure', marks: 4, tips: ['Show bicameral structure', 'Mark speaker/chairman positions', 'Include member numbers'] },
  
  // History
  { subjectId: 'his', topic: 'Freedom Movement Timeline', description: 'Key events from 1857 to 1947', marks: 4, tips: ['Mark years clearly', 'Show cause-effect relationships', 'Include major leaders'] },
  { subjectId: 'his', topic: 'World War Map', description: 'Allied vs Axis powers', marks: 4, tips: ['Use different colors/patterns', 'Mark major battle locations', 'Show territorial changes'] },
];

// Common Mistakes to Avoid
const COMMON_MISTAKES: CommonMistake[] = [
  // General
  { subjectId: 'eng', mistake: 'Not reading the question carefully', correction: 'Underline keywords, check marks allocation before answering', impact: 'high' },
  { subjectId: 'eng', mistake: 'Poor handwriting making answers illegible', correction: 'Write clearly, maintain spacing, use blue pen for answers', impact: 'high' },
  { subjectId: 'eng', mistake: 'Not attempting all questions', correction: 'Write something for every question - partial marks are better than zero', impact: 'high' },
  
  // Economics
  { subjectId: 'eco', mistake: 'Drawing diagrams without proper labels', correction: 'Always label X-axis, Y-axis, curves, and equilibrium points', impact: 'high' },
  { subjectId: 'eco', mistake: 'Confusing movement along curve vs shift in curve', correction: 'Movement = price change | Shift = other factors change', impact: 'medium' },
  { subjectId: 'eco', mistake: 'Wrong elasticity formula', correction: 'Ed = %ΔQ / %ΔP (NOT Q/P)', impact: 'high' },
  { subjectId: 'eco', mistake: 'Mixing up GDP and GNP', correction: 'GDP = within country | GNP = by citizens (anywhere)', impact: 'medium' },
  
  // Political Science
  { subjectId: 'pol', mistake: 'Confusing Article numbers', correction: 'Make a chart: 14-Equality, 17-Untouchability, 19-Freedom, 21-Life', impact: 'high' },
  { subjectId: 'pol', mistake: 'Not giving current examples', correction: 'Add 1-2 recent examples for better marks in globalization topics', impact: 'medium' },
  { subjectId: 'pol', mistake: 'Mixing up UN organs functions', correction: 'Security Council = Peace | General Assembly = Discussion | ICJ = Legal', impact: 'medium' },
  
  // Geography
  { subjectId: 'geo', mistake: 'Map work without index', correction: 'Mark serial numbers and write index separately', impact: 'high' },
  { subjectId: 'geo', mistake: 'Not using proper symbols', correction: 'Use standard symbols: ▲ for mountains, ─ for railways', impact: 'medium' },
  { subjectId: 'geo', mistake: 'Skipping "Give geographical reasons" questions', correction: 'Follow format: Statement → Reason → Conclusion', impact: 'high' },
  
  // History
  { subjectId: 'his', mistake: 'Wrong dates for events', correction: 'Learn key dates: 1857, 1885, 1919, 1920, 1930, 1942, 1947', impact: 'high' },
  { subjectId: 'his', mistake: 'Not using cause-effect format', correction: 'Structure: Causes → Events → Effects → Significance', impact: 'medium' },
  
  // Sanskrit
  { subjectId: 'san', mistake: 'Wrong संधि विच्छेद', correction: 'Check: स्वर+स्वर, व्यंजन+व्यंजन, विसर्ग cases separately', impact: 'high' },
  { subjectId: 'san', mistake: 'Mixing up विभक्ति', correction: 'Remember: प्रथमा=कर्ता, द्वितीया=कर्म, तृतीया=करण', impact: 'medium' },
  { subjectId: 'san', mistake: 'Incorrect धातु रूप', correction: 'Practice लट्, लृट्, लङ् for common verbs: भू, पठ्, गम्', impact: 'medium' },
  
  // Hindi
  { subjectId: 'hin', mistake: 'समास में विग्रह गलत करना', correction: 'पहले समास का नाम पता करें, फिर विग्रह लिखें', impact: 'medium' },
  { subjectId: 'hin', mistake: 'पत्र में format गलत', correction: 'दिनांक → सेवा में → विषय → महोदय → मुख्य भाग → भवदीय', impact: 'high' },
  
  // English
  { subjectId: 'eng', mistake: 'Tense inconsistency in essays', correction: 'Stick to one tense throughout - prefer past or present', impact: 'medium' },
  { subjectId: 'eng', mistake: 'Wrong letter format', correction: 'Formal: Yours faithfully | Informal: Yours sincerely/lovingly', impact: 'high' },
  { subjectId: 'eng', mistake: 'Précis longer than 1/3rd', correction: 'Count words, should be exactly 1/3rd of original passage', impact: 'medium' },
];

// Time Management Tips for Exam
const EXAM_TIME_TIPS: Record<string, { totalTime: number; sections: { name: string; marks: number; suggestedTime: number }[] }> = {
  'eco': {
    totalTime: 180,
    sections: [
      { name: 'MCQ/Objectives', marks: 20, suggestedTime: 20 },
      { name: 'Short Answers (2-4 marks)', marks: 30, suggestedTime: 45 },
      { name: 'Long Answers (8 marks)', marks: 40, suggestedTime: 80 },
      { name: 'Revision & Checking', marks: 0, suggestedTime: 35 },
    ]
  },
  'pol': {
    totalTime: 180,
    sections: [
      { name: 'MCQ/Objectives', marks: 20, suggestedTime: 20 },
      { name: 'Short Answers', marks: 30, suggestedTime: 50 },
      { name: 'Long Answers', marks: 40, suggestedTime: 75 },
      { name: 'Revision', marks: 0, suggestedTime: 35 },
    ]
  },
  'geo': {
    totalTime: 180,
    sections: [
      { name: 'MCQ/Objectives', marks: 20, suggestedTime: 15 },
      { name: 'Map Work', marks: 16, suggestedTime: 30 },
      { name: 'Short Answers', marks: 24, suggestedTime: 40 },
      { name: 'Long Answers', marks: 30, suggestedTime: 60 },
      { name: 'Revision', marks: 0, suggestedTime: 35 },
    ]
  },
  'eng': {
    totalTime: 180,
    sections: [
      { name: 'Reading Comprehension', marks: 20, suggestedTime: 25 },
      { name: 'Grammar Section', marks: 15, suggestedTime: 20 },
      { name: 'Writing (Letter/Essay)', marks: 25, suggestedTime: 50 },
      { name: 'Literature', marks: 30, suggestedTime: 50 },
      { name: 'Revision', marks: 0, suggestedTime: 35 },
    ]
  },
};

// Mind Maps for Visual Learning
const MIND_MAPS: MindMapData[] = [
  {
    subjectId: 'eco',
    chapter: 'Demand Analysis',
    centralTopic: 'DEMAND',
    nodes: [
      { id: 'def', label: '📖 Definition', children: [
        { id: 'def1', label: 'Desire + Ability + Willingness' },
        { id: 'def2', label: 'At a given price & time' }
      ]},
      { id: 'types', label: '📊 Types', children: [
        { id: 't1', label: 'Individual vs Market' },
        { id: 't2', label: 'Direct vs Derived' },
        { id: 't3', label: 'Joint vs Composite' }
      ]},
      { id: 'factors', label: '🔑 Determinants', children: [
        { id: 'f1', label: 'Price (inverse)' },
        { id: 'f2', label: 'Income (direct/inverse)' },
        { id: 'f3', label: 'Substitute prices' },
        { id: 'f4', label: 'Complement prices' },
        { id: 'f5', label: 'Tastes & Preferences' }
      ]},
      { id: 'law', label: '📈 Law of Demand', children: [
        { id: 'l1', label: 'Price ↑ = Quantity ↓' },
        { id: 'l2', label: 'Inverse relationship' },
        { id: 'l3', label: 'Ceteris paribus' }
      ]},
      { id: 'exceptions', label: '⚠️ Exceptions', children: [
        { id: 'e1', label: 'Giffen Goods' },
        { id: 'e2', label: 'Veblen Goods' },
        { id: 'e3', label: 'Expectation of price rise' }
      ]}
    ],
    tips: ['Draw demand curve sloping DOWN', 'Remember: Price on Y-axis, Quantity on X-axis']
  },
  {
    subjectId: 'eco',
    chapter: 'Elasticity of Demand',
    centralTopic: 'ELASTICITY',
    nodes: [
      { id: 'def', label: '📖 Definition', children: [
        { id: 'd1', label: 'Responsiveness of demand' },
        { id: 'd2', label: 'To change in price/income' }
      ]},
      { id: 'types', label: '📊 Types', children: [
        { id: 't1', label: 'Price Elasticity (Ed)' },
        { id: 't2', label: 'Income Elasticity (Ey)' },
        { id: 't3', label: 'Cross Elasticity (Ec)' }
      ]},
      { id: 'degrees', label: '📈 Degrees (Ed)', children: [
        { id: 'dg1', label: 'Ed > 1 = Elastic' },
        { id: 'dg2', label: 'Ed < 1 = Inelastic' },
        { id: 'dg3', label: 'Ed = 1 = Unitary' },
        { id: 'dg4', label: 'Ed = 0 = Perfectly Inelastic' },
        { id: 'dg5', label: 'Ed = ∞ = Perfectly Elastic' }
      ]},
      { id: 'formula', label: '🔢 Formula', children: [
        { id: 'f1', label: 'Ed = %ΔQ / %ΔP' },
        { id: 'f2', label: 'Ed = (ΔQ/Q) ÷ (ΔP/P)' }
      ]}
    ],
    tips: ['Ed is always negative (ignore sign)', 'Luxuries = Elastic, Necessities = Inelastic']
  },
  {
    subjectId: 'pol',
    chapter: 'United Nations',
    centralTopic: 'UN ORGANIZATION',
    nodes: [
      { id: 'organs', label: '🏛️ 6 Main Organs', children: [
        { id: 'o1', label: 'General Assembly (193 members)' },
        { id: 'o2', label: 'Security Council (15 members)' },
        { id: 'o3', label: 'ECOSOC' },
        { id: 'o4', label: 'ICJ (Hague)' },
        { id: 'o5', label: 'Secretariat (Secretary General)' },
        { id: 'o6', label: 'Trusteeship Council' }
      ]},
      { id: 'sc', label: '🛡️ Security Council', children: [
        { id: 'sc1', label: 'P5: USA, UK, France, Russia, China' },
        { id: 'sc2', label: 'Veto Power to P5' },
        { id: 'sc3', label: '10 Non-permanent (2yr term)' }
      ]},
      { id: 'agencies', label: '🌐 Specialized Agencies', children: [
        { id: 'a1', label: 'WHO - Health' },
        { id: 'a2', label: 'UNESCO - Education' },
        { id: 'a3', label: 'ILO - Labour' },
        { id: 'a4', label: 'IMF - Finance' }
      ]},
      { id: 'india', label: '🇮🇳 India & UN', children: [
        { id: 'i1', label: 'Founding member (1945)' },
        { id: 'i2', label: 'Demands permanent seat' },
        { id: 'i3', label: 'G4 with Brazil, Germany, Japan' }
      ]}
    ],
    tips: ['Remember P5 = 5 Permanent members with VETO', 'UN HQ in New York, ICJ in The Hague']
  },
  {
    subjectId: 'geo',
    chapter: 'Population',
    centralTopic: 'POPULATION GEOGRAPHY',
    nodes: [
      { id: 'concepts', label: '📊 Key Concepts', children: [
        { id: 'c1', label: 'Density = Pop/Area' },
        { id: 'c2', label: 'Sex Ratio = F per 1000 M' },
        { id: 'c3', label: 'Growth Rate = Birth - Death' }
      ]},
      { id: 'distribution', label: '🗺️ Distribution Factors', children: [
        { id: 'd1', label: 'Physical: Climate, Terrain, Water' },
        { id: 'd2', label: 'Economic: Jobs, Resources' },
        { id: 'd3', label: 'Social: Education, Healthcare' }
      ]},
      { id: 'pyramid', label: '📈 Population Pyramid', children: [
        { id: 'p1', label: 'Expansive: Wide base (young)' },
        { id: 'p2', label: 'Constrictive: Narrow base' },
        { id: 'p3', label: 'Stationary: Equal sides' }
      ]},
      { id: 'migration', label: '🚶 Migration', children: [
        { id: 'm1', label: 'Push: Unemployment, Poverty' },
        { id: 'm2', label: 'Pull: Jobs, Education, Services' },
        { id: 'm3', label: 'Rural to Urban' }
      ]}
    ],
    tips: ['India Sex Ratio ~943 (Census 2011)', 'Draw pyramids in exams for extra marks']
  },
  {
    subjectId: 'his',
    chapter: 'Indian National Movement',
    centralTopic: 'FREEDOM STRUGGLE',
    nodes: [
      { id: 'phases', label: '📅 3 Phases', children: [
        { id: 'ph1', label: 'Moderate (1885-1905)' },
        { id: 'ph2', label: 'Extremist (1905-1919)' },
        { id: 'ph3', label: 'Gandhian (1919-1947)' }
      ]},
      { id: 'movements', label: '✊ Major Movements', children: [
        { id: 'mv1', label: '1920: Non-Cooperation' },
        { id: 'mv2', label: '1930: Civil Disobedience' },
        { id: 'mv3', label: '1942: Quit India' }
      ]},
      { id: 'leaders', label: '👤 Key Leaders', children: [
        { id: 'l1', label: 'Gandhi - Nonviolence' },
        { id: 'l2', label: 'Tilak - Swaraj is birthright' },
        { id: 'l3', label: 'Bose - Armed struggle' },
        { id: 'l4', label: 'Nehru - First PM' }
      ]},
      { id: 'dates', label: '🗓️ Important Dates', children: [
        { id: 'dt1', label: '1857: First War' },
        { id: 'dt2', label: '1885: INC founded' },
        { id: 'dt3', label: '1947: Independence' }
      ]}
    ],
    tips: ['Timeline questions are common - memorize dates!', 'Connect leaders with their contributions']
  },
  {
    subjectId: 'eng',
    chapter: 'Letter Writing',
    centralTopic: 'LETTER FORMAT',
    nodes: [
      { id: 'formal', label: '📝 Formal Letter', children: [
        { id: 'f1', label: "1. Sender's Address" },
        { id: 'f2', label: '2. Date' },
        { id: 'f3', label: "3. Receiver's Address" },
        { id: 'f4', label: '4. Subject Line' },
        { id: 'f5', label: '5. Salutation (Sir/Madam)' },
        { id: 'f6', label: '6. Body (3 paragraphs)' },
        { id: 'f7', label: '7. Closing (Yours faithfully)' }
      ]},
      { id: 'informal', label: '💌 Informal Letter', children: [
        { id: 'i1', label: 'Address + Date' },
        { id: 'i2', label: 'Dear [Name]' },
        { id: 'i3', label: 'Casual body' },
        { id: 'i4', label: 'Yours lovingly' }
      ]},
      { id: 'tips', label: '💡 Scoring Tips', children: [
        { id: 't1', label: 'Follow exact format' },
        { id: 't2', label: 'Use formal vocabulary' },
        { id: 't3', label: 'Keep paragraphs short' }
      ]}
    ],
    tips: ['8 marks for format - never skip!', 'Practice 5 types: Complaint, Application, Editor, Enquiry, Order']
  },
  {
    subjectId: 'hin',
    chapter: 'व्याकरण',
    centralTopic: 'हिंदी व्याकरण',
    nodes: [
      { id: 'sandhi', label: '📝 संधि', children: [
        { id: 's1', label: 'स्वर संधि' },
        { id: 's2', label: 'व्यंजन संधि' },
        { id: 's3', label: 'विसर्ग संधि' }
      ]},
      { id: 'samas', label: '📝 समास', children: [
        { id: 'sm1', label: 'अव्ययीभाव' },
        { id: 'sm2', label: 'तत्पुरुष' },
        { id: 'sm3', label: 'द्वंद्व' },
        { id: 'sm4', label: 'बहुव्रीहि' }
      ]},
      { id: 'alankar', label: '✨ अलंकार', children: [
        { id: 'a1', label: 'उपमा: जैसे, सा, सी' },
        { id: 'a2', label: 'रूपक: आरोप' },
        { id: 'a3', label: 'अनुप्रास: वर्ण दोहराव' }
      ]}
    ],
    tips: ['10 marks grammar section - master it!', 'Make charts for quick revision']
  },
  {
    subjectId: 'san',
    chapter: 'संस्कृत व्याकरण',
    centralTopic: 'संस्कृत व्याकरण',
    nodes: [
      { id: 'sandhi', label: '📜 संधि', children: [
        { id: 's1', label: 'गुण: अ+इ=ए, अ+उ=ओ' },
        { id: 's2', label: 'वृद्धि: अ+ए=ऐ, अ+ओ=औ' },
        { id: 's3', label: 'यण: इ+अ=य, उ+अ=व' }
      ]},
      { id: 'vibhakti', label: '📝 विभक्ति', children: [
        { id: 'v1', label: 'प्रथमा: कर्ता (ने)' },
        { id: 'v2', label: 'द्वितीया: कर्म (को)' },
        { id: 'v3', label: 'तृतीया: करण (से/द्वारा)' },
        { id: 'v4', label: 'चतुर्थी: सम्प्रदान (के लिए)' },
        { id: 'v5', label: 'सप्तमी: अधिकरण (में/पर)' }
      ]},
      { id: 'dhatu', label: '🔤 धातु रूप', children: [
        { id: 'd1', label: 'लट् = वर्तमान' },
        { id: 'd2', label: 'लृट् = भविष्यत्' },
        { id: 'd3', label: 'लङ् = भूतकाल' }
      ]}
    ],
    tips: ['विभक्ति = 7 types - make table', 'Practice 10 dhatu forms daily']
  }
];

// Exam Day Checklist
const EXAM_DAY_CHECKLIST: ExamDayItem[] = [
  // Documents
  { id: 'doc1', category: 'documents', item: 'Hall Ticket / Admit Card', important: true },
  { id: 'doc2', category: 'documents', item: 'School ID Card', important: true },
  { id: 'doc3', category: 'documents', item: 'Aadhar Card (photocopy)', important: false },
  { id: 'doc4', category: 'documents', item: 'Passport size photos (2 extra)', important: false },
  
  // Stationery
  { id: 'stat1', category: 'stationery', item: 'Blue pens (3-4)', important: true },
  { id: 'stat2', category: 'stationery', item: 'Black pen (for diagrams)', important: true },
  { id: 'stat3', category: 'stationery', item: 'Pencils (2-3) & Eraser', important: true },
  { id: 'stat4', category: 'stationery', item: 'Geometry box (scale, compass)', important: true },
  { id: 'stat5', category: 'stationery', item: 'Sharpener', important: false },
  { id: 'stat6', category: 'stationery', item: 'Transparent pouch/bag', important: false },
  
  // Essentials
  { id: 'ess1', category: 'essentials', item: 'Water bottle', important: true },
  { id: 'ess2', category: 'essentials', item: 'Light snacks (chocolate, biscuits)', important: false },
  { id: 'ess3', category: 'essentials', item: 'Watch (non-smart)', important: true },
  { id: 'ess4', category: 'essentials', item: 'Handkerchief/tissues', important: false },
  { id: 'ess5', category: 'essentials', item: 'Sanitizer', important: false },
  { id: 'ess6', category: 'essentials', item: 'Extra mask', important: false },
  
  // Tips
  { id: 'tip1', category: 'tips', item: 'Reach center 30 mins early', important: true },
  { id: 'tip2', category: 'tips', item: 'Use washroom before exam', important: true },
  { id: 'tip3', category: 'tips', item: 'Read ALL questions first (5 mins)', important: true },
  { id: 'tip4', category: 'tips', item: 'Attempt easy questions first', important: true },
  { id: 'tip5', category: 'tips', item: 'Keep 15 mins for revision', important: true },
  { id: 'tip6', category: 'tips', item: 'Don\'t leave ANY question blank', important: true },
  { id: 'tip7', category: 'tips', item: 'Write neatly - presentation matters!', important: true },
];

// Quick 5-Minute Revision Cards
const QUICK_REVISION_CARDS: QuickRevisionCard[] = [
  {
    subjectId: 'eco',
    topic: 'Demand & Supply Basics',
    points: [
      '📉 Demand: Inverse relation with price (D curve slopes DOWN)',
      '📈 Supply: Direct relation with price (S curve slopes UP)',
      '⚖️ Equilibrium: Where D = S (no shortage/surplus)',
      '🔢 Ed formula: %ΔQ ÷ %ΔP',
      '💡 Ed > 1 Elastic | Ed < 1 Inelastic | Ed = 1 Unitary'
    ],
    timeToRead: 60
  },
  {
    subjectId: 'eco',
    topic: 'Market Structures',
    points: [
      '🏪 Perfect Competition: Many sellers, identical products, free entry',
      '🏢 Monopoly: Single seller, unique product, barriers to entry',
      '🏬 Monopolistic: Many sellers, differentiated products',
      '🤝 Oligopoly: Few sellers, interdependent',
      '💰 Monopoly has price-making power'
    ],
    timeToRead: 60
  },
  {
    subjectId: 'pol',
    topic: 'United Nations Quick Facts',
    points: [
      '🏛️ Founded: 1945 | HQ: New York | Members: 193',
      '🛡️ Security Council: 5 Permanent (P5) + 10 Non-permanent',
      '✋ P5 = USA, UK, France, Russia, China (VETO power)',
      '🇮🇳 India: Founding member, demands permanent seat',
      '⚖️ ICJ located in The Hague, Netherlands'
    ],
    timeToRead: 45
  },
  {
    subjectId: 'pol',
    topic: 'Globalisation',
    points: [
      '🌐 Definition: Integration of economies through trade & tech',
      '📈 Positive: More jobs, tech transfer, FDI, competition',
      '📉 Negative: Job losses, inequality, cultural erosion',
      '🏢 MNCs: Operate in multiple countries',
      '🇮🇳 India opened economy in 1991 (LPG reforms)'
    ],
    timeToRead: 45
  },
  {
    subjectId: 'geo',
    topic: 'Population Geography',
    points: [
      '👥 Density = Population ÷ Area',
      '👫 Sex Ratio = Females per 1000 Males',
      '📊 India Sex Ratio: 943 (Census 2011)',
      '🚶 Push factors: Poverty, unemployment, disasters',
      '🏙️ Pull factors: Jobs, education, healthcare'
    ],
    timeToRead: 45
  },
  {
    subjectId: 'geo',
    topic: 'Human Development',
    points: [
      '📊 HDI = Health + Education + Standard of Living',
      '🥇 HDI Range: 0 to 1 (higher = better)',
      '🏥 Health: Life expectancy at birth',
      '📚 Education: Years of schooling',
      '💰 Living: GNI per capita'
    ],
    timeToRead: 40
  },
  {
    subjectId: 'his',
    topic: 'Freedom Movement Timeline',
    points: [
      '1857: First War of Independence',
      '1885: INC founded by A.O. Hume',
      '1905: Bengal Partition → Swadeshi Movement',
      '1919: Jallianwala Bagh | Rowlatt Act',
      '1920: Non-Cooperation | 1930: Salt March | 1942: Quit India'
    ],
    timeToRead: 50
  },
  {
    subjectId: 'his',
    topic: 'World Wars Summary',
    points: [
      '⚔️ WW1: 1914-1918 | Trigger: Assassination of Franz Ferdinand',
      '📜 Treaty of Versailles (1919) blamed Germany',
      '⚔️ WW2: 1939-1945 | Started by Hitler (Germany)',
      '💣 Ended with Atomic bombs on Hiroshima & Nagasaki',
      '🕊️ UN formed in 1945 to prevent future wars'
    ],
    timeToRead: 50
  },
  {
    subjectId: 'eng',
    topic: 'Letter Writing Format',
    points: [
      '1️⃣ Sender\'s Address (top right)',
      '2️⃣ Date (below address)',
      '3️⃣ Receiver\'s Address (left side)',
      '4️⃣ Subject Line (underlined)',
      '5️⃣ Salutation → Body → Closing (Yours faithfully)'
    ],
    timeToRead: 40
  },
  {
    subjectId: 'eng',
    topic: 'Grammar Essentials',
    points: [
      '🔄 Active→Passive: Object becomes subject, add "by"',
      '💬 Direct→Indirect: Change tense, pronouns, time words',
      '⏰ Present→Past, This→That, Now→Then, Here→There',
      '📝 Subject-Verb Agreement: Singular sub = singular verb',
      '✅ Always check: Tense consistency throughout'
    ],
    timeToRead: 50
  },
  {
    subjectId: 'san',
    topic: 'संस्कृत संधि Quick',
    points: [
      '🔤 गुण संधि: अ/आ + इ/ई = ए | अ/आ + उ/ऊ = ओ',
      '🔤 वृद्धि संधि: अ/आ + ए/ऐ = ऐ | अ/आ + ओ/औ = औ',
      '🔤 यण संधि: इ/ई + अ = य | उ/ऊ + अ = व',
      '📝 विद्या + आलय = विद्यालय (दीर्घ संधि)',
      '📝 सूर्य + उदय = सूर्योदय (गुण संधि)'
    ],
    timeToRead: 60
  },
  {
    subjectId: 'hin',
    topic: 'हिंदी व्याकरण Quick',
    points: [
      '📝 संधि: स्वर + व्यंजन + विसर्ग (3 प्रकार)',
      '📝 समास: अव्ययीभाव, तत्पुरुष, द्वंद्व, बहुव्रीहि',
      '✨ उपमा: जैसे, सा, सी, सम | रूपक: आरोप',
      '✉️ पत्र: औपचारिक (श्रीमान) | अनौपचारिक (प्रिय)',
      '📜 निबंध: भूमिका → मुख्य भाग → निष्कर्ष'
    ],
    timeToRead: 50
  },
];

// Answer Writing Guide
const ANSWER_WRITING_GUIDE: AnswerWritingTip[] = [
  {
    type: 'mcq',
    title: 'MCQ Strategy (1 mark each)',
    tips: [
      'Read question TWICE before answering',
      'Eliminate obviously wrong options first',
      'Don\'t spend more than 30 seconds per MCQ',
      'If unsure, mark and come back later',
      'NEVER leave blank - educated guess is better',
      'Watch for words like "always", "never", "only"'
    ]
  },
  {
    type: 'short',
    title: 'Short Answers (2-4 marks)',
    tips: [
      '2 marks = 2-3 points | 4 marks = 4-5 points',
      'Use bullet points for clarity',
      'Include definition + examples',
      'Keep within word limit (50-80 words)',
      'Underline key terms',
      'One point = One mark (generally)'
    ],
    example: 'Q: Define demand. (2 marks)\nA: Demand refers to:\n• Desire backed by ability to pay\n• Willingness to purchase\n• At a given price and time\n• Example: Wanting to buy a phone for ₹15,000'
  },
  {
    type: 'long',
    title: 'Long Answers (8 marks)',
    tips: [
      'Follow structure: Intro → Body → Conclusion',
      'Include 6-8 main points',
      'Add diagrams where applicable (+2 marks)',
      'Use headings and subheadings',
      'Include real-world examples',
      'Write 200-250 words minimum',
      'Underline definitions and key terms',
      'Draw neat, labeled diagrams'
    ],
    example: 'Structure for 8-mark answer:\n1. Definition (1 mark)\n2. Explanation (2 marks)\n3. 4-5 Points (3 marks)\n4. Diagram if applicable (1 mark)\n5. Conclusion/Example (1 mark)'
  },
  {
    type: 'essay',
    title: 'Essay Writing (8-10 marks)',
    tips: [
      'Start with a hook (quote/question/fact)',
      'Clear introduction stating your stance',
      '3 body paragraphs with examples',
      'Use transition words (However, Moreover, Therefore)',
      'Include statistics/data if possible',
      'Balanced view (pros and cons)',
      'Strong conclusion with your opinion',
      'Maintain formal language throughout'
    ]
  },
  {
    type: 'general',
    title: 'General Exam Tips',
    tips: [
      '⏰ First 5 mins: Read entire paper',
      '✅ Attempt ALL questions - no zero marks',
      '📝 Start with your strongest section',
      '🎯 Allocate time per section beforehand',
      '✍️ Write neatly - poor handwriting loses marks',
      '📏 Draw margins and leave space between answers',
      '🔍 Last 15 mins: Revise and check roll number',
      '⚠️ Don\'t cross word limits - wastes time',
      '📊 Draw diagrams even if not asked (bonus points)',
      '🚫 Never argue with invigilator'
    ]
  }
];

// Daily Affirmations for Exam Motivation
const DAILY_AFFIRMATIONS: DailyAffirmation[] = [
  // Confidence
  { text: "I am fully prepared and confident for my exams!", category: 'confidence' },
  { text: "I have studied hard and I will succeed!", category: 'confidence' },
  { text: "My hard work will pay off with excellent results!", category: 'confidence' },
  { text: "I believe in myself and my abilities!", category: 'confidence' },
  { text: "I am capable of achieving 90%+ in every subject!", category: 'confidence' },
  
  // Focus
  { text: "I am focused and concentrated on my studies!", category: 'focus' },
  { text: "Distractions have no power over me!", category: 'focus' },
  { text: "Every minute I study brings me closer to success!", category: 'focus' },
  { text: "I absorb knowledge like a sponge!", category: 'focus' },
  { text: "My mind is sharp and ready to learn!", category: 'focus' },
  
  // Success
  { text: "Success is my destiny, boards are just a step!", category: 'success' },
  { text: "I visualize myself scoring excellent marks!", category: 'success' },
  { text: "Every chapter I complete is a victory!", category: 'success' },
  { text: "I am creating my successful future right now!", category: 'success' },
  { text: "Top ranks are within my reach!", category: 'success' },
  
  // Calm
  { text: "I am calm and peaceful during exams!", category: 'calm' },
  { text: "Stress cannot affect my performance!", category: 'calm' },
  { text: "I breathe deeply and stay relaxed!", category: 'calm' },
  { text: "I trust the process and stay positive!", category: 'calm' },
  { text: "Anxiety has no place in my mind!", category: 'calm' },
  
  // Power
  { text: "I am stronger than any exam challenge!", category: 'power' },
  { text: "No question is too difficult for me!", category: 'power' },
  { text: "I have the power to achieve anything!", category: 'power' },
  { text: "I am unstoppable on my path to success!", category: 'power' },
  { text: "My determination is my superpower!", category: 'power' },
];

// Subject-wise Marking Scheme
const SUBJECT_MARKING_SCHEMES: SubjectMarkingScheme[] = [
  {
    subjectId: 'eco',
    totalMarks: 80,
    passingMarks: 26,
    duration: 180,
    sections: [
      { section: 'Q1', questionType: 'MCQ (1 mark each)', marks: 1, count: 20, totalMarks: 20, tips: ['All compulsory', 'Read carefully', '30 sec per MCQ'] },
      { section: 'Q2-Q4', questionType: 'Short Answer (2 marks)', marks: 2, count: 6, totalMarks: 12, tips: ['2-3 points each', 'Include definition'] },
      { section: 'Q5-Q7', questionType: 'Short Answer (4 marks)', marks: 4, count: 6, totalMarks: 24, tips: ['4-5 points', 'Add examples', 'Use diagrams'] },
      { section: 'Q8-Q10', questionType: 'Long Answer (8 marks)', marks: 8, count: 3, totalMarks: 24, tips: ['6-8 points', 'Diagrams essential', 'Write 200+ words'] },
    ]
  },
  {
    subjectId: 'pol',
    totalMarks: 80,
    passingMarks: 26,
    duration: 180,
    sections: [
      { section: 'Q1', questionType: 'MCQ (1 mark each)', marks: 1, count: 20, totalMarks: 20, tips: ['All compulsory', 'Current affairs important'] },
      { section: 'Q2-Q4', questionType: 'Short Answer (2 marks)', marks: 2, count: 6, totalMarks: 12, tips: ['Brief definitions', 'Constitutional articles'] },
      { section: 'Q5-Q7', questionType: 'Short Answer (4 marks)', marks: 4, count: 6, totalMarks: 24, tips: ['Explain concepts', 'Give examples'] },
      { section: 'Q8-Q10', questionType: 'Long Answer (8 marks)', marks: 8, count: 3, totalMarks: 24, tips: ['Detailed analysis', 'Multiple perspectives'] },
    ]
  },
  {
    subjectId: 'geo',
    totalMarks: 80,
    passingMarks: 26,
    duration: 180,
    sections: [
      { section: 'Q1', questionType: 'MCQ (1 mark each)', marks: 1, count: 20, totalMarks: 20, tips: ['Map-based MCQs common', 'Focus on locations'] },
      { section: 'Map Work', questionType: 'Map Pointing', marks: 2, count: 8, totalMarks: 16, tips: ['Practice daily!', 'India + World maps', '16 EASY marks'] },
      { section: 'Q2-Q4', questionType: 'Short Answer (2-4 marks)', marks: 3, count: 8, totalMarks: 24, tips: ['Use statistics', 'Draw simple diagrams'] },
      { section: 'Q5-Q7', questionType: 'Long Answer (8 marks)', marks: 8, count: 3, totalMarks: 20, tips: ['Maps + Diagrams', 'Data interpretation'] },
    ]
  },
  {
    subjectId: 'his',
    totalMarks: 80,
    passingMarks: 26,
    duration: 180,
    sections: [
      { section: 'Q1', questionType: 'MCQ (1 mark each)', marks: 1, count: 20, totalMarks: 20, tips: ['Dates are important!', 'Timeline questions'] },
      { section: 'Q2-Q4', questionType: 'Short Answer (2 marks)', marks: 2, count: 6, totalMarks: 12, tips: ['Facts + Dates', 'Brief explanations'] },
      { section: 'Q5-Q7', questionType: 'Short Answer (4 marks)', marks: 4, count: 6, totalMarks: 24, tips: ['Cause & Effect', 'Connect events'] },
      { section: 'Q8-Q10', questionType: 'Long Answer (8 marks)', marks: 8, count: 3, totalMarks: 24, tips: ['Detailed timeline', 'Multiple factors', 'Conclusion important'] },
    ]
  },
  {
    subjectId: 'eng',
    totalMarks: 80,
    passingMarks: 26,
    duration: 180,
    sections: [
      { section: 'Reading', questionType: 'Comprehension', marks: 4, count: 5, totalMarks: 20, tips: ['Read passage twice', 'Answer in own words'] },
      { section: 'Writing', questionType: 'Letter/Essay/Report', marks: 8, count: 3, totalMarks: 24, tips: ['Follow format strictly', 'Use formal language'] },
      { section: 'Grammar', questionType: 'Grammar exercises', marks: 1, count: 16, totalMarks: 16, tips: ['Tenses, Voice, Narration', 'Practice daily'] },
      { section: 'Literature', questionType: 'Textbook questions', marks: 4, count: 5, totalMarks: 20, tips: ['Quote from text', 'Character analysis'] },
    ]
  },
  {
    subjectId: 'hin',
    totalMarks: 80,
    passingMarks: 26,
    duration: 180,
    sections: [
      { section: 'गद्य', questionType: 'Prose questions', marks: 4, count: 4, totalMarks: 16, tips: ['भावार्थ महत्वपूर्ण', 'लेखक परिचय'] },
      { section: 'पद्य', questionType: 'Poetry questions', marks: 4, count: 4, totalMarks: 16, tips: ['काव्य सौंदर्य', 'भाव स्पष्ट करें'] },
      { section: 'व्याकरण', questionType: 'Grammar', marks: 1, count: 16, totalMarks: 16, tips: ['संधि-समास', 'वाक्य शुद्धि'] },
      { section: 'लेखन', questionType: 'Writing', marks: 8, count: 4, totalMarks: 32, tips: ['पत्र प्रारूप', 'निबंध संरचना'] },
    ]
  },
  {
    subjectId: 'san',
    totalMarks: 80,
    passingMarks: 26,
    duration: 180,
    sections: [
      { section: 'गद्य', questionType: 'Prose', marks: 4, count: 4, totalMarks: 16, tips: ['अर्थ समझें', 'शब्दार्थ याद करें'] },
      { section: 'पद्य', questionType: 'Poetry/Shloka', marks: 4, count: 4, totalMarks: 16, tips: ['श्लोक अर्थ', 'सन्दर्भ सहित'] },
      { section: 'व्याकरण', questionType: 'Grammar', marks: 2, count: 12, totalMarks: 24, tips: ['संधि विच्छेद', 'विभक्ति', 'धातु रूप'] },
      { section: 'अनुवाद', questionType: 'Translation', marks: 8, count: 3, totalMarks: 24, tips: ['हिंदी से संस्कृत', 'संस्कृत से हिंदी'] },
    ]
  },
  {
    subjectId: 'mar',
    totalMarks: 80,
    passingMarks: 26,
    duration: 180,
    sections: [
      { section: 'गद्य', questionType: 'Prose', marks: 4, count: 4, totalMarks: 16, tips: ['आशय स्पष्ट करा', 'लेखक माहिती'] },
      { section: 'पद्य', questionType: 'Poetry', marks: 4, count: 4, totalMarks: 16, tips: ['काव्य सौंदर्य', 'भाव विश्लेषण'] },
      { section: 'व्याकरण', questionType: 'Grammar', marks: 1, count: 16, totalMarks: 16, tips: ['संधी-समास', 'अलंकार'] },
      { section: 'लेखन', questionType: 'Writing', marks: 8, count: 4, totalMarks: 32, tips: ['पत्र, निबंध', 'जाहिरात लेखन'] },
    ]
  },
];

// Last Minute Revision Points (Emergency Mode)
const LAST_MINUTE_POINTS: Record<string, string[]> = {
  'eco': [
    '📊 Demand curve slopes DOWN, Supply curve slopes UP',
    '🔢 Ed > 1 = Elastic, Ed < 1 = Inelastic, Ed = 1 = Unitary',
    '💰 GDP = C + I + G + (X-M)',
    '📈 3 Methods: Output, Income, Expenditure',
    '🏪 Perfect Competition: Many sellers, identical products, free entry',
    '🏢 Monopoly: Single seller, unique product, barriers to entry',
  ],
  'pol': [
    '📜 Article 14: Equality before law',
    '📜 Article 17: Abolition of untouchability',
    '📜 Article 21: Right to life and liberty',
    '🌍 P5 Nations: USA, UK, France, Russia, China (Veto power)',
    '🔄 Cold War ended: 1991 (USSR dissolution)',
    '🌐 Globalisation: Trade + Investment + Technology integration',
  ],
  'geo': [
    '👥 Population Density = Total Pop / Total Area',
    '👫 Sex Ratio = Females per 1000 males',
    '📊 HDI: Health + Education + Living Standard',
    '🏘️ Push factors: Unemployment, poverty | Pull: Jobs, education',
    '🌾 Primary activities: Direct use of natural resources',
    '🗺️ Map work = 16 MARKS (practice daily!)',
  ],
  'his': [
    '🗓️ 1857: First War of Independence',
    '🗓️ 1885: INC founded by A.O. Hume',
    '🗓️ 1919: Jallianwala Bagh massacre',
    '🗓️ 1930: Salt March (Dandi)',
    '🗓️ 1942: Quit India Movement',
    '⚔️ WW1: 1914-1918 | WW2: 1939-1945',
  ],
  'eng': [
    '✉️ Formal Letter: Sender → Date → Receiver → Subject → Salutation → Body → Closing',
    '📝 Essay: Intro (hook) → 3 Body paras → Conclusion',
    '🔄 Active→Passive: Object becomes Subject, use "by"',
    '💬 Direct→Indirect: Present→Past, This→That, Now→Then',
    '📄 Précis: 1/3rd length, own words, no opinions',
    '✅ Grammar: Subject-Verb agreement, Tense consistency',
  ],
  'hin': [
    '📝 संधि: स्वर + व्यंजन + विसर्ग',
    '📝 समास: अव्ययीभाव, तत्पुरुष, द्वंद्व, बहुव्रीहि',
    '✉️ पत्र: दिनांक → सेवा में → विषय → मुख्य भाग → भवदीय',
    '📜 व्याकरण में 10 अंक - focus!',
    '📖 भावार्थ: कविता का अर्थ अपने शब्दों में',
    '✍️ निबंध: भूमिका → मुख्य भाग → निष्कर्ष',
  ],
  'soc': [
    '👤 Auguste Comte: Father of Sociology',
    '👥 Primary Group: Face-to-face, intimate (family)',
    '🏢 Secondary Group: Formal, impersonal (office)',
    '🏛️ Social Institution: Family, Education, Religion, Economy',
    '⚠️ Social Problems: Poverty, Caste, Gender inequality',
    '🔄 Social Change: Modernization, Westernization',
  ],
  'psy': [
    '🧠 IQ = (Mental Age / Chronological Age) × 100',
    '📊 Normal IQ: 90-110',
    '🔄 Defense Mechanisms: Denial, Projection, Rationalization',
    '📚 Learning: Classical & Operant Conditioning',
    '💭 Freud: Id, Ego, Superego',
    '🧩 Personality: Introvert vs Extrovert',
  ],
  'san': [
    '📜 संधि: स्वर + व्यंजन + विसर्ग (3 प्रकार)',
    '🔤 गुण संधि: अ/आ + इ/ई = ए | अ/आ + उ/ऊ = ओ',
    '🔤 वृद्धि संधि: अ/आ + ए/ऐ = ऐ | अ/आ + ओ/औ = औ',
    '📝 7 विभक्ति: प्रथमा → सप्तमी (कर्ता से अधिकरण)',
    '🕉️ श्लोक: विद्या ददाति विनयम् - विद्या से विनय मिलता है',
    '📖 धातु रूप: लट् (वर्तमान), लृट् (भविष्यत्), लङ् (भूत)',
  ],
  'mar': [
    '📝 संधी: स्वरसंधी, व्यंजनसंधी, विसर्गसंधी',
    '📖 समास: अव्ययीभाव, तत्पुरुष, द्वंद्व, बहुव्रीही',
    '✨ अलंकार: उपमा, रूपक, अनुप्रास, यमक',
    '✉️ पत्र: औपचारिक (अर्ज), अनौपचारिक (मित्राला)',
    '📜 व्याकरण: विभक्ती, प्रत्यय, उपसर्ग',
    '✍️ निबंध: प्रस्तावना → मुख्य भाग → समारोप',
  ],
};

// Writing Practice Topics
const WRITING_TOPICS: Record<string, { type: string; topics: string[] }[]> = {
  'eng': [
    { type: 'essay', topics: ['Importance of Education', 'Environmental Pollution', 'Digital India', 'Women Empowerment', 'Youth and Social Media'] },
    { type: 'letter', topics: ['Complaint about water supply', 'Job application', 'Request for school leaving certificate', 'To editor about traffic problems'] },
    { type: 'precis', topics: ['Practice 5 passages from textbook'] },
  ],
  'hin': [
    { type: 'essay', topics: ['शिक्षा का महत्व', 'पर्यावरण प्रदूषण', 'डिजिटल इंडिया', 'युवा और सोशल मीडिया'] },
    { type: 'letter', topics: ['प्रधानाचार्य को प्रार्थना पत्र', 'संपादक को पत्र', 'मित्र को पत्र'] },
    { type: 'grammar', topics: ['संधि विच्छेद', 'समास पहचान', 'वाक्य शुद्धि'] },
  ],
  'mar': [
    { type: 'essay', topics: ['शिक्षणाचे महत्त्व', 'पर्यावरण प्रदूषण', 'माझा आवडता नेता'] },
    { type: 'letter', topics: ['मुख्याध्यापकांना अर्ज', 'मित्राला पत्र'] },
  ],
  'san': [
    { type: 'shlok', topics: ['विद्या ददाति विनयम्', 'परोपकाराय सतां विभूतयः', 'सत्यमेव जयते'] },
    { type: 'translation', topics: ['श्लोक से हिंदी अनुवाद', 'हिंदी से संस्कृत अनुवाद'] },
    { type: 'grammar', topics: ['संधि विच्छेद', 'शब्द रूप', 'धातु रूप'] },
  ],
};

// All exam dates with subject IDs
const ALL_EXAM_DATES: ExamDate[] = [
  { subject: 'English', subjectId: 'eng', date: '2026-02-10', time: '11:00 AM', color: 'bg-blue-500' },
  { subject: 'Hindi', subjectId: 'hin', date: '2026-02-11', time: '11:00 AM', color: 'bg-amber-500' },
  { subject: 'Marathi', subjectId: 'mar', date: '2026-02-12', time: '11:00 AM', color: 'bg-purple-500' },
  { subject: 'Sanskrit', subjectId: 'san', date: '2026-02-13', time: '11:00 AM', color: 'bg-pink-500' },
  { subject: 'Logic', subjectId: 'log', date: '2026-02-16', time: '11:00 AM', color: 'bg-gray-500' },
  { subject: 'Political Science', subjectId: 'pol', date: '2026-02-18', time: '3:00 PM', color: 'bg-red-500' },
  { subject: 'Economics', subjectId: 'eco', date: '2026-02-24', time: '11:00 AM', color: 'bg-indigo-500' },
  { subject: 'Philosophy', subjectId: 'phi', date: '2026-02-28', time: '3:00 PM', color: 'bg-cyan-500' },
  { subject: 'Psychology', subjectId: 'psy', date: '2026-03-04', time: '3:00 PM', color: 'bg-rose-500' },
  { subject: 'Geography', subjectId: 'geo', date: '2026-03-07', time: '3:00 PM', color: 'bg-teal-500' },
  { subject: 'History', subjectId: 'his', date: '2026-03-09', time: '3:00 PM', color: 'bg-orange-500' },
  { subject: 'Sociology', subjectId: 'soc', date: '2026-03-11', time: '3:00 PM', color: 'bg-lime-500' },
];

const generatePhaseTasks = (): PhaseTask[] => {
  const tasks: PhaseTask[] = [];
  const startDate = new Date('2026-02-01');
  
  // Phase 1 Tasks (Feb 1-9) - Foundation Building
  const phase1Tasks = [
    { day: 1, subject: 'English', subjectId: 'eng', task: 'Writing skills framework (Letters, Essays)', priority: 'critical' as const },
    { day: 1, subject: 'Hindi', subjectId: 'hin', task: 'Read ENTIRE poetry section with meaning', priority: 'critical' as const },
    { day: 1, subject: 'Pol Science', subjectId: 'pol', task: 'Chapter 1 - World since 1991', priority: 'high' as const },
    { day: 1, subject: 'Economics', subjectId: 'eco', task: 'Chapter 1 - Intro to Microeconomics', priority: 'high' as const },
    { day: 1, subject: 'Geography', subjectId: 'geo', task: 'Chapter 1 - Population Geography', priority: 'medium' as const },
    { day: 1, subject: 'History', subjectId: 'his', task: 'Ch 1 - Renaissance + Ch 2 - Colonialism', priority: 'medium' as const },
    
    { day: 2, subject: 'English', subjectId: 'eng', task: 'Grammar rules (Tenses, Voice, Reported Speech)', priority: 'critical' as const },
    { day: 2, subject: 'Hindi', subjectId: 'hin', task: 'Prose section - 2 chapters with summary', priority: 'critical' as const },
    { day: 2, subject: 'Pol Science', subjectId: 'pol', task: 'Chapter 2 - Globalisation', priority: 'high' as const },
    { day: 2, subject: 'Economics', subjectId: 'eco', task: 'Chapter 2 - Demand Analysis', priority: 'high' as const },
    { day: 2, subject: 'Geography', subjectId: 'geo', task: 'Chapter 2 - Migration', priority: 'medium' as const },
    { day: 2, subject: 'History', subjectId: 'his', task: 'Ch 3 - India & Colonialism + Ch 4 - Marathas', priority: 'medium' as const },
    
    { day: 3, subject: 'English', subjectId: 'eng', task: 'Novel/Drama question prep', priority: 'critical' as const },
    { day: 3, subject: 'Hindi', subjectId: 'hin', task: 'Grammar section complete', priority: 'critical' as const },
    { day: 3, subject: 'Pol Science', subjectId: 'pol', task: 'Chapter 3 - Indian Politics', priority: 'high' as const },
    { day: 3, subject: 'Economics', subjectId: 'eco', task: 'Chapter 3 - Supply Analysis', priority: 'high' as const },
    { day: 3, subject: 'Geography', subjectId: 'geo', task: 'Chapter 3 - Human Settlements', priority: 'medium' as const },
    { day: 3, subject: 'History', subjectId: 'his', task: 'Ch 5 - Social Reforms + Ch 6 - Struggle', priority: 'medium' as const },
    
    { day: 4, subject: 'English', subjectId: 'eng', task: 'Comprehension + Summary writing', priority: 'critical' as const },
    { day: 4, subject: 'Hindi', subjectId: 'hin', task: 'Letter + Essay writing formats', priority: 'critical' as const },
    { day: 4, subject: 'Pol Science', subjectId: 'pol', task: 'Chapter 4-5 complete', priority: 'high' as const },
    { day: 4, subject: 'Economics', subjectId: 'eco', task: 'Chapter 4 - Elasticity (VERY IMPORTANT!)', priority: 'critical' as const },
    { day: 4, subject: 'Geography', subjectId: 'geo', task: 'Chapter 4 - Human Development', priority: 'medium' as const },
    { day: 4, subject: 'History', subjectId: 'his', task: 'Ch 7-8 (Decolonisation, World Wars)', priority: 'medium' as const },
    
    { day: 5, subject: 'English', subjectId: 'eng', task: 'PYQ solving (2024, 2023 papers)', priority: 'critical' as const },
    { day: 5, subject: 'Hindi', subjectId: 'hin', task: 'PYQ solving (2024, 2023 papers)', priority: 'critical' as const },
    { day: 5, subject: 'Pol Science', subjectId: 'pol', task: 'Full syllabus revision', priority: 'high' as const },
    { day: 5, subject: 'Economics', subjectId: 'eco', task: 'Chapter 5-6 (Market Structure)', priority: 'high' as const },
    { day: 5, subject: 'Geography', subjectId: 'geo', task: 'Chapter 5 - Primary Activities', priority: 'medium' as const },
    { day: 5, subject: 'History', subjectId: 'his', task: 'Ch 9-10 (Cold War, Decolonisation)', priority: 'medium' as const },
    
    { day: 6, subject: 'English', subjectId: 'eng', task: '🔴 FULL DAY PREP - Prose + Poetry + Grammar', priority: 'critical' as const },
    { day: 6, subject: 'History', subjectId: 'his', task: 'Chapters 11-12 (India Transformed)', priority: 'medium' as const },
    
    { day: 7, subject: 'English', subjectId: 'eng', task: 'Mock test + correction', priority: 'critical' as const },
    { day: 7, subject: 'Hindi', subjectId: 'hin', task: 'Complete syllabus revision', priority: 'critical' as const },
    
    { day: 8, subject: 'English', subjectId: 'eng', task: 'Final revision + formula sheet', priority: 'critical' as const },
    { day: 8, subject: 'Hindi', subjectId: 'hin', task: 'Full mock test + PYQ revision', priority: 'critical' as const },
    
    { day: 9, subject: 'English', subjectId: 'eng', task: '✅ ONLY revision, no new topics. Sleep by 10 PM!', priority: 'critical' as const },
  ];
  
  // Phase 2 Tasks (Feb 10-24) - Exam Time with Parallel Prep
  const phase2Tasks = [
    // Day 10 - English Exam Day
    { day: 10, subject: '📝 EXAM', subjectId: 'eng', task: '🎯 ENGLISH EXAM - 11:00 AM | Light Hindi revision after', priority: 'critical' as const },
    { day: 10, subject: 'Hindi', subjectId: 'hin', task: 'Post-exam: Quick revision of weak chapters', priority: 'high' as const },
    
    // Day 11 - Hindi Exam Day
    { day: 11, subject: '📝 EXAM', subjectId: 'hin', task: '🎯 HINDI EXAM - 11:00 AM | Start Pol Science prep after', priority: 'critical' as const },
    { day: 11, subject: 'Pol Science', subjectId: 'pol', task: 'Post-exam: Chapters 1-2 revision', priority: 'high' as const },
    
    // Day 12 - Marathi Exam
    { day: 12, subject: '📝 EXAM', subjectId: 'mar', task: '🎯 MARATHI EXAM - 11:00 AM', priority: 'critical' as const },
    { day: 12, subject: 'Pol Science', subjectId: 'pol', task: 'Full day prep - Chapters 3-5', priority: 'high' as const },
    
    // Day 13 - Sanskrit Exam
    { day: 13, subject: '📝 EXAM', subjectId: 'san', task: '🎯 SANSKRIT EXAM - 11:00 AM', priority: 'critical' as const },
    { day: 13, subject: 'Pol Science', subjectId: 'pol', task: 'Current affairs + Important articles', priority: 'high' as const },
    
    // Day 14 - Gap Day
    { day: 14, subject: 'Pol Science', subjectId: 'pol', task: '🔴 INTENSIVE PREP - Full syllabus revision', priority: 'critical' as const },
    { day: 14, subject: 'Economics', subjectId: 'eco', task: 'Start Demand & Supply chapters', priority: 'high' as const },
    
    // Day 15 - Gap Day
    { day: 15, subject: 'Pol Science', subjectId: 'pol', task: 'PYQ solving + Mock test', priority: 'critical' as const },
    { day: 15, subject: 'Economics', subjectId: 'eco', task: 'Elasticity formulas + diagrams', priority: 'high' as const },
    
    // Day 16 - Logic Exam
    { day: 16, subject: '📝 EXAM', subjectId: 'log', task: '🎯 LOGIC EXAM - 11:00 AM', priority: 'critical' as const },
    { day: 16, subject: 'Pol Science', subjectId: 'pol', task: 'Final revision + formula sheet', priority: 'critical' as const },
    
    // Day 17 - Pre Pol Science
    { day: 17, subject: 'Pol Science', subjectId: 'pol', task: '✅ FINAL REVISION ONLY - Sleep by 10 PM!', priority: 'critical' as const },
    
    // Day 18 - Political Science Exam
    { day: 18, subject: '📝 EXAM', subjectId: 'pol', task: '🎯 POLITICAL SCIENCE EXAM - 3:00 PM', priority: 'critical' as const },
    { day: 18, subject: 'Economics', subjectId: 'eco', task: 'Post-exam: Market structures + National Income', priority: 'high' as const },
    
    // Day 19-23 - Economics Prep
    { day: 19, subject: 'Economics', subjectId: 'eco', task: 'Chapters 1-3 complete with numericals', priority: 'critical' as const },
    { day: 19, subject: 'Geography', subjectId: 'geo', task: 'Start Chapter 1-2 alongside', priority: 'medium' as const },
    
    { day: 20, subject: 'Economics', subjectId: 'eco', task: 'Chapters 4-5 + All graphs practice', priority: 'critical' as const },
    { day: 20, subject: 'Geography', subjectId: 'geo', task: 'Chapters 3-4 (Human Settlements)', priority: 'medium' as const },
    
    { day: 21, subject: 'Economics', subjectId: 'eco', task: 'Chapter 6 + Full syllabus revision', priority: 'critical' as const },
    { day: 21, subject: 'Geography', subjectId: 'geo', task: 'Chapters 5-6 (Primary & Secondary)', priority: 'medium' as const },
    
    { day: 22, subject: 'Economics', subjectId: 'eco', task: 'PYQ solving - 3 years papers', priority: 'critical' as const },
    { day: 22, subject: 'History', subjectId: 'his', task: 'Start Chapters 1-4 revision', priority: 'medium' as const },
    
    { day: 23, subject: 'Economics', subjectId: 'eco', task: 'Final revision + formula sheet prep', priority: 'critical' as const },
    { day: 23, subject: 'History', subjectId: 'his', task: 'Chapters 5-8 (Freedom Struggle)', priority: 'medium' as const },
    
    // Day 24 - Economics Exam
    { day: 24, subject: '📝 EXAM', subjectId: 'eco', task: '🎯 ECONOMICS EXAM - 11:00 AM', priority: 'critical' as const },
    { day: 24, subject: 'Geography', subjectId: 'geo', task: 'Post-exam: Full day Geography prep', priority: 'high' as const },
  ];
  
  // Phase 3 Tasks (Feb 25 - Mar 11) - Final Sprint
  const phase3Tasks = [
    // Day 25-27 - Philosophy + Geography Prep
    { day: 25, subject: 'Geography', subjectId: 'geo', task: 'Chapters 7-8 + Map work practice', priority: 'critical' as const },
    { day: 25, subject: 'History', subjectId: 'his', task: 'Chapters 9-12 complete', priority: 'high' as const },
    
    { day: 26, subject: 'Geography', subjectId: 'geo', task: 'Chapter 9 + Full revision round 1', priority: 'critical' as const },
    { day: 26, subject: 'Philosophy', subjectId: 'phi', task: 'Pre-exam revision', priority: 'high' as const },
    
    { day: 27, subject: 'Philosophy', subjectId: 'phi', task: '✅ PHILOSOPHY FINAL PREP', priority: 'critical' as const },
    { day: 27, subject: 'Geography', subjectId: 'geo', task: 'PYQ solving + map marking', priority: 'high' as const },
    
    // Day 28 - Philosophy Exam
    { day: 28, subject: '📝 EXAM', subjectId: 'phi', task: '🎯 PHILOSOPHY EXAM - 3:00 PM', priority: 'critical' as const },
    { day: 28, subject: 'Geography', subjectId: 'geo', task: 'Full syllabus revision', priority: 'high' as const },
    
    // Day 29-33 - Geography + Psychology + History Final Push
    { day: 29, subject: 'Geography', subjectId: 'geo', task: 'Mock test + Map work intensive', priority: 'critical' as const },
    { day: 29, subject: 'Psychology', subjectId: 'psy', task: 'Start preparations', priority: 'medium' as const },
    
    { day: 30, subject: 'Geography', subjectId: 'geo', task: 'PYQ analysis + weak areas focus', priority: 'critical' as const },
    { day: 30, subject: 'Psychology', subjectId: 'psy', task: 'Core concepts + definitions', priority: 'medium' as const },
    
    { day: 31, subject: 'Psychology', subjectId: 'psy', task: 'Full syllabus coverage', priority: 'critical' as const },
    { day: 31, subject: 'History', subjectId: 'his', task: 'Timeline + Important dates revision', priority: 'high' as const },
    
    { day: 32, subject: 'Psychology', subjectId: 'psy', task: 'PYQ solving + case studies', priority: 'critical' as const },
    { day: 32, subject: 'History', subjectId: 'his', task: 'Map work + Important events', priority: 'high' as const },
    
    { day: 33, subject: 'Psychology', subjectId: 'psy', task: '✅ FINAL REVISION - Sleep early!', priority: 'critical' as const },
    
    // Day 34 - Psychology Exam
    { day: 34, subject: '📝 EXAM', subjectId: 'psy', task: '🎯 PSYCHOLOGY EXAM - 3:00 PM', priority: 'critical' as const },
    { day: 34, subject: 'Geography', subjectId: 'geo', task: 'Final Geography revision', priority: 'high' as const },
    
    // Day 35-36 - Pre Geography
    { day: 35, subject: 'Geography', subjectId: 'geo', task: '🔴 INTENSIVE MAP WORK + REVISION', priority: 'critical' as const },
    { day: 35, subject: 'History', subjectId: 'his', task: 'Parallel History prep continues', priority: 'high' as const },
    
    { day: 36, subject: 'Geography', subjectId: 'geo', task: '✅ FINAL REVISION ONLY - Sleep by 10 PM!', priority: 'critical' as const },
    
    // Day 37 - Geography Exam
    { day: 37, subject: '📝 EXAM', subjectId: 'geo', task: '🎯 GEOGRAPHY EXAM - 3:00 PM', priority: 'critical' as const },
    { day: 37, subject: 'History', subjectId: 'his', task: 'Post-exam: Full day History intensive', priority: 'high' as const },
    
    // Day 38 - Pre History
    { day: 38, subject: 'History', subjectId: 'his', task: '🔴 INTENSIVE - Timeline + Dates + Maps', priority: 'critical' as const },
    { day: 38, subject: 'Sociology', subjectId: 'soc', task: 'Start Sociology prep alongside', priority: 'medium' as const },
    
    // Day 39 - History Exam
    { day: 39, subject: '📝 EXAM', subjectId: 'his', task: '🎯 HISTORY EXAM - 3:00 PM', priority: 'critical' as const },
    { day: 39, subject: 'Sociology', subjectId: 'soc', task: 'Post-exam: Full Sociology coverage', priority: 'high' as const },
    
    // Day 40 - Pre Sociology
    { day: 40, subject: 'Sociology', subjectId: 'soc', task: '🔴 INTENSIVE PREP + PYQ solving', priority: 'critical' as const },
    
    // Day 41 - Sociology Exam
    { day: 41, subject: '📝 EXAM', subjectId: 'soc', task: '🎯 SOCIOLOGY EXAM - 3:00 PM | 🏆 BOARDS COMPLETE!', priority: 'critical' as const },
  ];
  
  // Combine all phases
  const allTasks = [...phase1Tasks, ...phase2Tasks, ...phase3Tasks];
  
  allTasks.forEach((task, index) => {
    const taskDate = new Date(startDate);
    taskDate.setDate(taskDate.getDate() + task.day - 1);
    const phase = task.day <= 9 ? 'phase1' : task.day <= 24 ? 'phase2' : 'phase3';
    tasks.push({
      id: `${phase}-${index}`,
      day: task.day,
      date: taskDate.toISOString().split('T')[0],
      subject: task.subject,
      subjectId: task.subjectId,
      task: task.task,
      completed: false,
      priority: task.priority,
    });
  });
  
  return tasks;
};

const MegaBoardCrasher: React.FC<MegaBoardCrasherProps> = ({ onClose, selectedSubjects = [] }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'daily' | 'calendar' | 'subjects' | 'tips' | 'flashcards' | 'pyq' | 'score90' | 'formulas' | 'emergency' | 'writing' | 'mock' | 'diagrams' | 'mistakes' | 'analytics' | 'mindmaps' | 'recorder' | 'checklist' | 'quickrev' | 'answerguide' | 'pomodoro' | 'affirmations' | 'marking'>('overview');
  
  // Filter exam dates based on selected subjects
  const EXAM_DATES = useMemo(() => {
    if (!selectedSubjects || selectedSubjects.length === 0) {
      return ALL_EXAM_DATES;
    }
    return ALL_EXAM_DATES.filter(exam => selectedSubjects.includes(exam.subjectId));
  }, [selectedSubjects]);
  
  // Generate tasks filtered by selected subjects
  const allTasks = useMemo(() => generatePhaseTasks(), []);
  
  const [tasks, setTasks] = useState<PhaseTask[]>(() => {
    const storageKey = selectedSubjects?.length > 0 
      ? `megaCrasherTasks_${selectedSubjects.sort().join('_')}`
      : 'megaCrasherTasks';
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      return JSON.parse(saved);
    }
    // Filter tasks based on selected subjects
    if (!selectedSubjects || selectedSubjects.length === 0) {
      return allTasks;
    }
    return allTasks.filter(task => selectedSubjects.includes(task.subjectId));
  });
  const [selectedDay, setSelectedDay] = useState(1);
  
  // New states for enhanced features
  const [flashcards, setFlashcards] = useState<QuickFlashcard[]>(() => {
    const saved = localStorage.getItem('megaCrusherFlashcards');
    return saved ? JSON.parse(saved) : QUICK_FLASHCARDS;
  });
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [showFlashcardAnswer, setShowFlashcardAnswer] = useState(false);
  const [flashcardFilter, setFlashcardFilter] = useState<string>('all');
  
  const [pyqQuestions, setPyqQuestions] = useState<PYQItem[]>(() => {
    const saved = localStorage.getItem('megaCrusherPYQ');
    return saved ? JSON.parse(saved) : PYQ_QUESTIONS;
  });
  const [pyqFilter, setPyqFilter] = useState<string>('all');
  
  const [dailyGoal, setDailyGoal] = useState<DailyGoal>(() => {
    const today = new Date().toISOString().split('T')[0];
    const saved = localStorage.getItem(`megaCrusherGoal_${today}`);
    return saved ? JSON.parse(saved) : {
      date: today,
      targetMinutes: 480,
      achievedMinutes: 0,
      tasksTarget: 10,
      tasksCompleted: 0,
      streak: 0
    };
  });
  
  const [studyTimer, setStudyTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [showChecklist, setShowChecklist] = useState(false);
  const [checkedItems, setCheckedItems] = useState<number[]>(() => {
    const saved = localStorage.getItem('examDayChecklist');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [streak, setStreak] = useState(() => {
    const saved = localStorage.getItem('megaCrusherStreak');
    return saved ? parseInt(saved) : 0;
  });
  
  // Mock Tests State
  const [mockTests, setMockTests] = useState<MockTest[]>(() => {
    const saved = localStorage.getItem('megaCrusherMockTests');
    return saved ? JSON.parse(saved) : [];
  });
  const [showMockTestForm, setShowMockTestForm] = useState(false);
  
  // Writing Practice State
  const [writingPractice, setWritingPractice] = useState<WritingPractice[]>(() => {
    const saved = localStorage.getItem('megaCrusherWriting');
    return saved ? JSON.parse(saved) : [];
  });
  
  // Weakness Tracker State
  const [weaknesses, setWeaknesses] = useState<WeaknessEntry[]>(() => {
    const saved = localStorage.getItem('megaCrusherWeakness');
    return saved ? JSON.parse(saved) : [];
  });
  
  // Emergency Mode State
  const [emergencyMode, setEmergencyMode] = useState(false);
  const [emergencySubject, setEmergencySubject] = useState<string>('');
  
  // Formula Bank Filter
  const [formulaFilter, setFormulaFilter] = useState<string>('all');
  
  // Daily Motivation
  const [todayQuote] = useState<MotivationQuote>(() => {
    const dayIndex = new Date().getDate() % MOTIVATION_QUOTES.length;
    return MOTIVATION_QUOTES[dayIndex];
  });
  
  // Subject Confidence Tracker
  const [subjectConfidence, setSubjectConfidence] = useState<SubjectConfidence[]>(() => {
    const saved = localStorage.getItem('megaCrusherConfidence');
    if (saved) return JSON.parse(saved);
    // Initialize with default values for selected subjects
    return (selectedSubjects?.length ? selectedSubjects : Object.keys(SUBJECT_MAP)).map(subId => ({
      subjectId: subId,
      confidence: 50,
      lastUpdated: new Date().toISOString().split('T')[0],
      strongTopics: [],
      weakTopics: []
    }));
  });
  
  // Diagram and Mistakes filter
  const [diagramFilter, setDiagramFilter] = useState<string>('all');
  const [mistakeFilter, setMistakeFilter] = useState<string>('all');
  
  // Mind Maps
  const [mindMapFilter, setMindMapFilter] = useState<string>('all');
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  
  // Voice Notes
  const [voiceNotes, setVoiceNotes] = useState<VoiceNote[]>(() => {
    const saved = localStorage.getItem('megaCrusherVoiceNotes');
    return saved ? JSON.parse(saved) : [];
  });
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [recordingSubject, setRecordingSubject] = useState<string>('');
  const [recordingTopic, setRecordingTopic] = useState<string>('');
  
  // Exam Day Checklist
  const [examChecklistItems, setExamChecklistItems] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('megaCrusherExamChecklist');
    return saved ? JSON.parse(saved) : {};
  });
  
  // Quick Revision
  const [quickRevFilter, setQuickRevFilter] = useState<string>('all');
  const [currentRevCard, setCurrentRevCard] = useState(0);
  
  // Pomodoro Timer
  const [pomodoroTime, setPomodoroTime] = useState(25 * 60); // 25 minutes in seconds
  const [pomodoroRunning, setPomodoroRunning] = useState(false);
  const [pomodoroMode, setPomodoroMode] = useState<'work' | 'shortBreak' | 'longBreak'>('work');
  const [pomodoroSubject, setPomodoroSubject] = useState<string>('');
  const [pomodoroSessions, setPomodoroSessions] = useState<PomodoroSession[]>(() => {
    const saved = localStorage.getItem('megaCrusherPomodoro');
    return saved ? JSON.parse(saved) : [];
  });
  const [pomodoroCount, setPomodoroCount] = useState(0);
  
  // Affirmations
  const [currentAffirmation, setCurrentAffirmation] = useState(0);
  const [affirmationCategory, setAffirmationCategory] = useState<string>('all');
  
  // Marking Scheme
  const [markingSchemeFilter, setMarkingSchemeFilter] = useState<string>('all');

  // Storage key based on selected subjects
  const storageKey = useMemo(() => {
    return selectedSubjects?.length > 0 
      ? `megaCrasherTasks_${[...selectedSubjects].sort().join('_')}`
      : 'megaCrasherTasks';
  }, [selectedSubjects]);
  
  // Save states
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(tasks));
  }, [tasks, storageKey]);
  
  useEffect(() => {
    localStorage.setItem('megaCrusherFlashcards', JSON.stringify(flashcards));
  }, [flashcards]);
  
  useEffect(() => {
    localStorage.setItem('megaCrusherPYQ', JSON.stringify(pyqQuestions));
  }, [pyqQuestions]);
  
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem(`megaCrusherGoal_${today}`, JSON.stringify(dailyGoal));
  }, [dailyGoal]);
  
  useEffect(() => {
    localStorage.setItem('examDayChecklist', JSON.stringify(checkedItems));
  }, [checkedItems]);
  
  useEffect(() => {
    localStorage.setItem('megaCrusherStreak', streak.toString());
  }, [streak]);
  
  // Save new states
  useEffect(() => {
    localStorage.setItem('megaCrusherMockTests', JSON.stringify(mockTests));
  }, [mockTests]);
  
  useEffect(() => {
    localStorage.setItem('megaCrusherWriting', JSON.stringify(writingPractice));
  }, [writingPractice]);
  
  useEffect(() => {
    localStorage.setItem('megaCrusherWeakness', JSON.stringify(weaknesses));
  }, [weaknesses]);
  
  useEffect(() => {
    localStorage.setItem('megaCrusherConfidence', JSON.stringify(subjectConfidence));
  }, [subjectConfidence]);
  
  // Save voice notes (without audio blob, just metadata)
  useEffect(() => {
    const notesMetadata = voiceNotes.map(({ audioBlob, ...rest }) => rest);
    localStorage.setItem('megaCrusherVoiceNotes', JSON.stringify(notesMetadata));
  }, [voiceNotes]);
  
  // Save exam checklist
  useEffect(() => {
    localStorage.setItem('megaCrusherExamChecklist', JSON.stringify(examChecklistItems));
  }, [examChecklistItems]);
  
  // Save pomodoro sessions
  useEffect(() => {
    localStorage.setItem('megaCrusherPomodoro', JSON.stringify(pomodoroSessions));
  }, [pomodoroSessions]);
  
  // Pomodoro timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (pomodoroRunning && pomodoroTime > 0) {
      interval = setInterval(() => {
        setPomodoroTime(prev => prev - 1);
      }, 1000);
    } else if (pomodoroTime === 0 && pomodoroRunning) {
      setPomodoroRunning(false);
      // Play notification sound
      try {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2teleUs3AYiwmHBYRHfkzpBSAA==');
        audio.play().catch(() => {});
      } catch {}
      // Handle session completion
      if (pomodoroMode === 'work' && pomodoroSubject) {
        const newSession: PomodoroSession = {
          id: `pom_${Date.now()}`,
          subjectId: pomodoroSubject,
          startTime: new Date().toISOString(),
          duration: 25,
          completed: true,
          date: new Date().toISOString().split('T')[0]
        };
        setPomodoroSessions(prev => [newSession, ...prev]);
        setPomodoroCount(prev => prev + 1);
      }
      // Auto switch mode
      if (pomodoroMode === 'work') {
        if ((pomodoroCount + 1) % 4 === 0) {
          setPomodoroMode('longBreak');
          setPomodoroTime(15 * 60);
        } else {
          setPomodoroMode('shortBreak');
          setPomodoroTime(5 * 60);
        }
      } else {
        setPomodoroMode('work');
        setPomodoroTime(25 * 60);
      }
    }
    return () => clearInterval(interval);
  }, [pomodoroRunning, pomodoroTime, pomodoroMode, pomodoroSubject, pomodoroCount]);
  
  // Recording timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);
  
  // Study timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setStudyTimer(prev => prev + 1);
        if (studyTimer > 0 && studyTimer % 60 === 0) {
          setDailyGoal(prev => ({
            ...prev,
            achievedMinutes: prev.achievedMinutes + 1
          }));
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, studyTimer]);
  
  // Update streak on daily goal completion
  useEffect(() => {
    const completedTasks = tasks.filter(t => t.completed).length;
    if (dailyGoal.achievedMinutes >= dailyGoal.targetMinutes * 0.8 || completedTasks >= dailyGoal.tasksTarget) {
      setStreak(prev => prev + 1);
    }
  }, [dailyGoal.achievedMinutes, tasks]);
  
  // Filtered flashcards based on selected subjects
  const filteredFlashcards = useMemo(() => {
    let cards = flashcards;
    if (selectedSubjects && selectedSubjects.length > 0) {
      cards = cards.filter(f => selectedSubjects.includes(f.subjectId));
    }
    if (flashcardFilter !== 'all') {
      cards = cards.filter(f => f.subjectId === flashcardFilter);
    }
    return cards;
  }, [flashcards, selectedSubjects, flashcardFilter]);
  
  // Filtered PYQ based on selected subjects
  const filteredPYQ = useMemo(() => {
    let questions = pyqQuestions;
    if (selectedSubjects && selectedSubjects.length > 0) {
      questions = questions.filter(q => selectedSubjects.includes(q.subjectId));
    }
    if (pyqFilter !== 'all') {
      questions = questions.filter(q => q.subjectId === pyqFilter);
    }
    return questions;
  }, [pyqQuestions, selectedSubjects, pyqFilter]);
  
  const toggleTask = (taskId: string) => {
    setTasks(prev => prev.map(t => 
      t.id === taskId ? { ...t, completed: !t.completed } : t
    ));
  };
  
  const getDaysUntilExam = (dateStr: string) => {
    const examDate = new Date(dateStr);
    const today = new Date();
    const diff = Math.ceil((examDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return diff;
  };
  
  const getProgressForDay = (day: number) => {
    const dayTasks = tasks.filter(t => t.day === day);
    const completed = dayTasks.filter(t => t.completed).length;
    return dayTasks.length > 0 ? Math.round((completed / dayTasks.length) * 100) : 0;
  };
  
  // Get user's subject names for display
  const userSubjectNames = useMemo(() => {
    if (!selectedSubjects || selectedSubjects.length === 0) return [];
    return selectedSubjects.map(id => SUBJECT_MAP[id]?.name || id).filter(Boolean);
  }, [selectedSubjects]);
  
  const renderOverview = () => (
    <div className="space-y-6">
      {/* Daily Motivation Quote */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-4">
        <p className="text-white italic text-lg mb-2">"{todayQuote.text}"</p>
        <p className="text-white/70 text-sm text-right">— {todayQuote.author}</p>
      </div>
      
      {/* User's Subjects Banner */}
      {userSubjectNames.length > 0 && (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-3">
          <p className="text-white/80 text-xs mb-1">Your Subjects</p>
          <div className="flex flex-wrap gap-1">
            {userSubjectNames.map(name => (
              <span key={name} className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">{name}</span>
            ))}
          </div>
        </div>
      )}
      
      {/* Study Streak & Timer Quick Card */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-3 text-white">
          <div className="flex items-center justify-between">
            <span className="text-2xl">🔥</span>
            <span className="text-2xl font-bold">{streak}</span>
          </div>
          <p className="text-xs text-white/80 mt-1">Day Streak</p>
        </div>
        <div 
          onClick={() => setActiveTab('score90')}
          className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-3 text-white cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <span className="text-2xl">⏱️</span>
            <span className="text-lg font-bold">{dailyGoal.achievedMinutes}m</span>
          </div>
          <p className="text-xs text-white/80 mt-1">Today's Study</p>
        </div>
      </div>
      
      {/* Quick Actions Row 1 */}
      <div className="grid grid-cols-4 gap-2">
        <button 
          onClick={() => setActiveTab('score90')}
          className="bg-yellow-500/20 rounded-xl p-3 text-center hover:bg-yellow-500/30 transition-all"
        >
          <span className="text-2xl">🎯</span>
          <p className="text-xs text-yellow-400 mt-1">90%+</p>
        </button>
        <button 
          onClick={() => setActiveTab('flashcards')}
          className="bg-purple-500/20 rounded-xl p-3 text-center hover:bg-purple-500/30 transition-all"
        >
          <span className="text-2xl">⚡</span>
          <p className="text-xs text-purple-400 mt-1">Flash</p>
        </button>
        <button 
          onClick={() => setActiveTab('pyq')}
          className="bg-orange-500/20 rounded-xl p-3 text-center hover:bg-orange-500/30 transition-all"
        >
          <span className="text-2xl">📝</span>
          <p className="text-xs text-orange-400 mt-1">PYQ</p>
        </button>
        <button 
          onClick={() => setActiveTab('daily')}
          className="bg-blue-500/20 rounded-xl p-3 text-center hover:bg-blue-500/30 transition-all"
        >
          <span className="text-2xl">📅</span>
          <p className="text-xs text-blue-400 mt-1">Daily</p>
        </button>
      </div>
      
      {/* Quick Actions Row 2 - New Features */}
      <div className="grid grid-cols-4 gap-2">
        <button 
          onClick={() => setActiveTab('formulas')}
          className="bg-cyan-500/20 rounded-xl p-3 text-center hover:bg-cyan-500/30 transition-all"
        >
          <span className="text-2xl">📐</span>
          <p className="text-xs text-cyan-400 mt-1">Formula</p>
        </button>
        <button 
          onClick={() => setActiveTab('emergency')}
          className="bg-red-500/20 rounded-xl p-3 text-center hover:bg-red-500/30 transition-all animate-pulse"
        >
          <span className="text-2xl">🚨</span>
          <p className="text-xs text-red-400 mt-1">Emergency</p>
        </button>
        <button 
          onClick={() => setActiveTab('writing')}
          className="bg-pink-500/20 rounded-xl p-3 text-center hover:bg-pink-500/30 transition-all"
        >
          <span className="text-2xl">✍️</span>
          <p className="text-xs text-pink-400 mt-1">Writing</p>
        </button>
        <button 
          onClick={() => setActiveTab('mock')}
          className="bg-indigo-500/20 rounded-xl p-3 text-center hover:bg-indigo-500/30 transition-all"
        >
          <span className="text-2xl">📋</span>
          <p className="text-xs text-indigo-400 mt-1">Mock</p>
        </button>
      </div>
      
      {/* Exam Countdown Cards */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-xl p-4 text-white">
        <h3 className="text-xl font-bold mb-3">🎯 Mission: 90%+ in {getDaysUntilExam('2026-03-11')} Days</h3>
        <p className="text-sm opacity-90">From ZERO to HERO - Your boards crash course starts NOW!</p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="bg-white/20 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{tasks.filter(t => t.completed).length}</p>
            <p className="text-xs">Done</p>
          </div>
          <div className="bg-white/20 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{filteredFlashcards.filter(f => f.confidence >= 4).length}</p>
            <p className="text-xs">Mastered</p>
          </div>
          <div className="bg-white/20 rounded-lg p-2 text-center">
            <p className="text-xl font-bold">{filteredPYQ.filter(q => q.practiced).length}</p>
            <p className="text-xs">PYQ Done</p>
          </div>
        </div>
      </div>
      
      {/* Next Exams */}
      <div className="bg-gray-800 rounded-xl p-4">
        <h4 className="font-bold text-white mb-3">📅 Upcoming Exams</h4>
        <div className="space-y-2">
          {EXAM_DATES.slice(0, 6).map(exam => {
            const daysLeft = getDaysUntilExam(exam.date);
            return (
              <div key={exam.subject} className={`flex justify-between items-center p-2 rounded-lg ${exam.color} bg-opacity-20`}>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${exam.color}`}></div>
                  <span className="text-white font-medium">{exam.subject}</span>
                </div>
                <div className="text-right">
                  <span className={`text-sm font-bold ${daysLeft <= 3 ? 'text-red-400' : daysLeft <= 7 ? 'text-yellow-400' : 'text-green-400'}`}>
                    {daysLeft > 0 ? `${daysLeft} days` : daysLeft === 0 ? 'TODAY!' : 'Done ✓'}
                  </span>
                  <p className="text-xs text-gray-400">{new Date(exam.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })} • {exam.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Phase Progress */}
      <div className="bg-gray-800 rounded-xl p-4">
        <h4 className="font-bold text-white mb-3">📊 Phase Progress</h4>
        <div className="space-y-3">
          {/* Phase 1 */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">🏗️ Phase 1: Foundation (Feb 1-9)</span>
              <span className="text-blue-400">{Math.round(tasks.filter(t => t.day <= 9 && t.completed).length / Math.max(1, tasks.filter(t => t.day <= 9).length) * 100)}%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all"
                style={{ width: `${Math.round(tasks.filter(t => t.day <= 9 && t.completed).length / Math.max(1, tasks.filter(t => t.day <= 9).length) * 100)}%` }}
              ></div>
            </div>
          </div>
          {/* Phase 2 */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">📝 Phase 2: First Exams (Feb 10-24)</span>
              <span className="text-orange-400">{Math.round(tasks.filter(t => t.day > 9 && t.day <= 24 && t.completed).length / Math.max(1, tasks.filter(t => t.day > 9 && t.day <= 24).length) * 100)}%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-orange-500 to-yellow-400 transition-all"
                style={{ width: `${Math.round(tasks.filter(t => t.day > 9 && t.day <= 24 && t.completed).length / Math.max(1, tasks.filter(t => t.day > 9 && t.day <= 24).length) * 100)}%` }}
              ></div>
            </div>
          </div>
          {/* Phase 3 */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">🏆 Phase 3: Final Sprint (Feb 25-Mar 11)</span>
              <span className="text-green-400">{Math.round(tasks.filter(t => t.day > 24 && t.completed).length / Math.max(1, tasks.filter(t => t.day > 24).length) * 100)}%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all"
                style={{ width: `${Math.round(tasks.filter(t => t.day > 24 && t.completed).length / Math.max(1, tasks.filter(t => t.day > 24).length) * 100)}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-green-900/30 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-green-400">{tasks.filter(t => t.completed).length}</p>
          <p className="text-xs text-gray-400">Tasks Done</p>
        </div>
        <div className="bg-yellow-900/30 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-yellow-400">{tasks.filter(t => !t.completed).length}</p>
          <p className="text-xs text-gray-400">Remaining</p>
        </div>
        <div className="bg-purple-900/30 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-purple-400">{Math.round(tasks.filter(t => t.completed).length / tasks.length * 100)}%</p>
          <p className="text-xs text-gray-400">Complete</p>
        </div>
      </div>
    </div>
  );
  
  const [selectedPhase, setSelectedPhase] = useState<1 | 2 | 3>(1);
  
  const getPhaseInfo = (phase: number) => {
    switch (phase) {
      case 1: return { name: 'Foundation', days: [1, 2, 3, 4, 5, 6, 7, 8, 9], color: 'blue', emoji: '🏗️', range: 'Feb 1-9' };
      case 2: return { name: 'First Exams', days: Array.from({ length: 15 }, (_, i) => i + 10), color: 'orange', emoji: '📝', range: 'Feb 10-24' };
      case 3: return { name: 'Final Sprint', days: Array.from({ length: 17 }, (_, i) => i + 25), color: 'green', emoji: '🏆', range: 'Feb 25-Mar 11' };
      default: return { name: '', days: [], color: 'gray', emoji: '', range: '' };
    }
  };
  
  const getCurrentDayNumber = () => {
    const start = new Date('2026-02-01');
    const today = new Date();
    const diff = Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return Math.max(1, Math.min(41, diff + 1));
  };
  
  const renderDaily = () => {
    const dayTasks = tasks.filter(t => t.day === selectedDay);
    const progress = getProgressForDay(selectedDay);
    const phaseInfo = getPhaseInfo(selectedPhase);
    const currentDay = getCurrentDayNumber();
    const selectedDayDate = new Date('2026-02-01');
    selectedDayDate.setDate(selectedDayDate.getDate() + selectedDay - 1);
    
    // Determine if this is an exam day
    const isExamDay = dayTasks.some(t => t.subject === '📝 EXAM');
    
    return (
      <div className="space-y-4">
        {/* Phase Selector */}
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map(phase => {
            const info = getPhaseInfo(phase);
            return (
              <button
                key={phase}
                onClick={() => {
                  setSelectedPhase(phase as 1 | 2 | 3);
                  setSelectedDay(info.days[0]);
                }}
                className={`p-3 rounded-xl text-center transition-all ${
                  selectedPhase === phase 
                    ? `bg-${info.color}-500 text-white` 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <span className="text-lg">{info.emoji}</span>
                <p className={`text-xs font-medium ${selectedPhase === phase ? 'text-white' : 'text-gray-400'}`}>{info.name}</p>
              </button>
            );
          })}
        </div>
        
        {/* Day Selector */}
        <div className="bg-gray-800 rounded-xl p-3">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm text-gray-400">{phaseInfo.emoji} {phaseInfo.name} • {phaseInfo.range}</p>
            {currentDay >= 1 && currentDay <= 41 && (
              <button 
                onClick={() => {
                  const todayPhase = currentDay <= 9 ? 1 : currentDay <= 24 ? 2 : 3;
                  setSelectedPhase(todayPhase as 1 | 2 | 3);
                  setSelectedDay(currentDay);
                }}
                className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full"
              >
                Go to Today
              </button>
            )}
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {phaseInfo.days.map(day => {
              const isToday = day === currentDay;
              const hasExam = tasks.filter(t => t.day === day).some(t => t.subject === '📝 EXAM');
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-3 py-2 rounded-lg font-medium transition-all min-w-[55px] relative ${
                    selectedDay === day 
                      ? `bg-${phaseInfo.color}-500 text-white` 
                      : isToday 
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {hasExam && <span className="absolute -top-1 -right-1 text-xs">📝</span>}
                  <span className="text-xs block">Day</span>
                  <span className="font-bold">{day}</span>
                  <span className={`block text-xs ${getProgressForDay(day) === 100 ? 'text-green-300' : selectedDay === day ? 'text-white/70' : 'text-gray-500'}`}>
                    {getProgressForDay(day)}%
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Day Info Header */}
        <div className={`rounded-xl p-4 ${isExamDay ? 'bg-gradient-to-r from-red-600 to-orange-500' : 'bg-gray-800'}`}>
          <div className="flex justify-between items-center mb-2">
            <div>
              <span className="text-white font-bold text-lg">Day {selectedDay}</span>
              <span className="text-white/70 text-sm ml-2">
                {selectedDayDate.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })}
              </span>
            </div>
            <span className={`font-bold text-xl ${isExamDay ? 'text-white' : 'text-green-400'}`}>{progress}%</span>
          </div>
          <div className="h-3 bg-black/30 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${isExamDay ? 'bg-white' : 'bg-gradient-to-r from-green-500 to-emerald-400'}`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          {isExamDay && (
            <p className="text-white/90 text-sm mt-2 font-medium">🎯 EXAM DAY - Stay calm and confident!</p>
          )}
        </div>
        
        {/* Tasks List */}
        <div className="space-y-2">
          {dayTasks.length === 0 ? (
            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <p className="text-gray-400">No tasks scheduled for this day</p>
            </div>
          ) : dayTasks.map(task => (
            <div 
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className={`p-4 rounded-xl cursor-pointer transition-all ${
                task.completed 
                  ? 'bg-green-900/30 border border-green-500/30' 
                  : task.subject === '📝 EXAM'
                    ? 'bg-red-900/30 border border-red-500/30'
                    : 'bg-gray-800 border border-gray-700 hover:border-gray-600'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                  task.completed 
                    ? 'bg-green-500 border-green-500' 
                    : task.priority === 'critical' 
                      ? 'border-red-500' 
                      : task.priority === 'high' 
                        ? 'border-yellow-500' 
                        : 'border-gray-500'
                }`}>
                  {task.completed && <span className="text-white text-sm">✓</span>}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      task.priority === 'critical' 
                        ? 'bg-red-500/20 text-red-400' 
                        : task.priority === 'high' 
                          ? 'bg-yellow-500/20 text-yellow-400' 
                          : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {task.subject}
                    </span>
                    {task.priority === 'critical' && (
                      <span className="text-xs text-red-400">🔴 Critical</span>
                    )}
                  </div>
                  <p className={`${task.completed ? 'text-gray-400 line-through' : 'text-white'}`}>
                    {task.task}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  const renderSubjects = () => {
    // All subject data with IDs
    const allSubjectData = [
      { id: 'eng', name: 'English', color: 'blue', target: '85+', chapters: 'Prose, Poetry, Grammar, Writing', tips: ['Master letter formats', 'Practice comprehension daily', 'Learn grammar rules'] },
      { id: 'hin', name: 'Hindi', color: 'amber', target: '85+', chapters: 'गद्य, पद्य, व्याकरण, लेखन', tips: ['Memorize poems with meanings', 'Practice essay formats', 'Grammar shortcuts'] },
      { id: 'mar', name: 'Marathi', color: 'purple', target: '85+', chapters: 'गद्य, पद्य, व्याकरण', tips: ['Read prose carefully', 'Memorize poems', 'Grammar practice'] },
      { id: 'san', name: 'Sanskrit', color: 'pink', target: '80+', chapters: 'Shlokas, Grammar, Prose', tips: ['Learn shlokas with meaning', 'Practice sandhi', 'Focus on grammar'] },
      { id: 'pol', name: 'Political Science', color: 'red', target: '90+', chapters: '5 Chapters', tips: ['Learn Constitutional Articles', 'Current affairs examples', 'World events timeline'] },
      { id: 'eco', name: 'Economics', color: 'indigo', target: '90+', chapters: '6 Chapters', tips: ['Elasticity formulas', 'Draw all curves', 'National Income methods'] },
      { id: 'geo', name: 'Geography', color: 'teal', target: '90+', chapters: '9 Chapters', tips: ['Map work daily!', 'Learn geographical reasons', 'Population data'] },
      { id: 'his', name: 'History', color: 'orange', target: '90+', chapters: '12 Chapters', tips: ['Timeline memorization', 'Important dates', 'Map marking'] },
      { id: 'soc', name: 'Sociology', color: 'lime', target: '90+', chapters: '8 Chapters', tips: ['Definitions first', 'Examples from daily life', 'Social thinkers quotes'] },
      { id: 'psy', name: 'Psychology', color: 'rose', target: '90+', chapters: '9 Chapters', tips: ['Case studies important', 'Psychological terms', 'Theorists & theories'] },
      { id: 'phi', name: 'Philosophy', color: 'cyan', target: '85+', chapters: '6 Chapters', tips: ['Logic arguments', 'Philosophical schools', 'Ethics concepts'] },
      { id: 'log', name: 'Logic', color: 'gray', target: '85+', chapters: '5 Chapters', tips: ['Practice syllogisms', 'Truth tables', 'Arguments analysis'] },
    ];
    
    // Filter based on selected subjects
    const subjectsToShow = selectedSubjects && selectedSubjects.length > 0
      ? allSubjectData.filter(s => selectedSubjects.includes(s.id))
      : allSubjectData.slice(0, 6); // Show first 6 if no selection
    
    return (
      <div className="space-y-4">
        {/* Subject count indicator */}
        {selectedSubjects && selectedSubjects.length > 0 && (
          <div className="bg-gray-800 rounded-xl p-3 flex justify-between items-center">
            <span className="text-gray-400 text-sm">Your Subjects</span>
            <span className="text-white font-bold">{subjectsToShow.length} subjects</span>
          </div>
        )}
        
        {/* Subject Cards */}
        {subjectsToShow.map(subject => (
          <div key={subject.name} className={`bg-gray-800 rounded-xl p-4 border-l-4 border-${subject.color}-500`}>
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="text-white font-bold text-lg">{subject.name}</h4>
                <p className="text-gray-400 text-sm">{subject.chapters}</p>
            </div>
            <span className={`text-${subject.color}-400 font-bold text-xl`}>{subject.target}</span>
          </div>
          <div className="space-y-1">
            {subject.tips.map((tip, i) => (
              <p key={i} className="text-gray-300 text-sm flex items-center gap-2">
                <span className={`text-${subject.color}-400`}>•</span> {tip}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
    );
  };
  
  const renderTips = () => (
    <div className="space-y-4">
      {/* Daily Routine */}
      <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl p-4">
        <h4 className="font-bold text-white mb-3">⏰ Daily Routine (14 hrs/day)</h4>
        <div className="space-y-2 text-sm">
          {[
            { time: '5:00 AM', activity: 'Wake up, Fresh up', duration: '30 min' },
            { time: '5:30 AM', activity: 'First Subject Study', duration: '2 hrs' },
            { time: '8:00 AM', activity: 'Second Subject Study', duration: '2 hrs' },
            { time: '10:15 AM', activity: 'Third Subject Study', duration: '2 hrs' },
            { time: '1:15 PM', activity: 'Fourth Subject Study', duration: '2.5 hrs' },
            { time: '4:15 PM', activity: 'Fifth Subject Study', duration: '2 hrs' },
            { time: '6:45 PM', activity: 'Sixth Subject Study', duration: '2.5 hrs' },
            { time: '10:00 PM', activity: 'Quick Revision', duration: '1.5 hrs' },
            { time: '11:30 PM', activity: 'Sleep', duration: '-' },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center text-gray-300">
              <span className="text-blue-400 font-mono">{item.time}</span>
              <span className="flex-1 mx-3">{item.activity}</span>
              <span className="text-gray-500">{item.duration}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Answer Writing Tips */}
      <div className="bg-gray-800 rounded-xl p-4">
        <h4 className="font-bold text-white mb-3">✍️ Answer Writing Tips</h4>
        <div className="space-y-3">
          <div className="bg-gray-700/50 rounded-lg p-3">
            <p className="text-yellow-400 font-medium mb-1">MCQs (20 marks)</p>
            <p className="text-gray-300 text-sm">Don't spend {'>'} 1 min per MCQ. Use elimination technique.</p>
          </div>
          <div className="bg-gray-700/50 rounded-lg p-3">
            <p className="text-green-400 font-medium mb-1">Short Answers (4-5 marks)</p>
            <p className="text-gray-300 text-sm">4-5 points with explanation. Underline key terms.</p>
          </div>
          <div className="bg-gray-700/50 rounded-lg p-3">
            <p className="text-blue-400 font-medium mb-1">Long Answers (8-10 marks)</p>
            <p className="text-gray-300 text-sm">Intro (1) + Body with subheadings (6-7) + Conclusion (1-2) + Diagram</p>
          </div>
        </div>
      </div>
      
      {/* Emergency Protocols */}
      <div className="bg-red-900/30 rounded-xl p-4 border border-red-500/30">
        <h4 className="font-bold text-red-400 mb-3">🆘 Emergency Protocols</h4>
        <div className="space-y-2 text-sm text-gray-300">
          <p><span className="text-red-400 font-bold">Behind Schedule?</span> Focus on HIGH-WEIGHTAGE chapters only!</p>
          <p><span className="text-yellow-400 font-bold">Can't Remember?</span> Use active recall - test yourself!</p>
          <p><span className="text-blue-400 font-bold">Exam Tomorrow?</span> Only revision, sleep by 10 PM!</p>
        </div>
      </div>
      
      {/* Motivation */}
      <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 rounded-xl p-4">
        <h4 className="font-bold text-white mb-2">💪 Remember</h4>
        <p className="text-green-300 text-lg font-medium italic">
          "90%+ = Focused Study + Smart Strategy + Consistent Revision + Exam Technique"
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Toppers aren't geniuses - they're consistent. Your past doesn't define your future.
        </p>
      </div>
    </div>
  );
  
  const renderCalendar = () => {
    // Generate calendar for Feb-Mar 2026
    const getMonthDays = (year: number, month: number) => {
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const days = [];
      const startPad = firstDay.getDay();
      
      // Add padding for days before month starts
      for (let i = 0; i < startPad; i++) {
        days.push(null);
      }
      
      // Add actual days
      for (let d = 1; d <= lastDay.getDate(); d++) {
        days.push(d);
      }
      
      return days;
    };
    
    const getExamForDate = (year: number, month: number, day: number) => {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      return EXAM_DATES.find(e => e.date === dateStr);
    };
    
    const getDayNumber = (year: number, month: number, day: number) => {
      const targetDate = new Date(year, month, day);
      const startDate = new Date(2026, 1, 1); // Feb 1, 2026
      const diff = Math.floor((targetDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      return diff >= 0 && diff < 41 ? diff + 1 : null;
    };
    
    const febDays = getMonthDays(2026, 1); // Feb 2026
    const marDays = getMonthDays(2026, 2); // Mar 2026
    const today = new Date();
    const isToday = (year: number, month: number, day: number) => 
      today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
    
    const renderMonth = (year: number, month: number, days: (number | null)[], monthName: string) => (
      <div className="bg-gray-800 rounded-xl p-4">
        <h4 className="font-bold text-white mb-3 text-center">{monthName} {year}</h4>
        <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
            <div key={d} className="text-gray-500 font-medium py-1">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, i) => {
            if (day === null) return <div key={i}></div>;
            
            const exam = getExamForDate(year, month, day);
            const dayNum = getDayNumber(year, month, day);
            const dayProgress = dayNum ? getProgressForDay(dayNum) : 0;
            const isTodayDate = isToday(year, month, day);
            
            return (
              <div 
                key={i}
                onClick={() => {
                  if (dayNum) {
                    const phase = dayNum <= 9 ? 1 : dayNum <= 24 ? 2 : 3;
                    setSelectedPhase(phase as 1 | 2 | 3);
                    setSelectedDay(dayNum);
                    setActiveTab('daily');
                  }
                }}
                className={`
                  relative p-1 rounded-lg text-center cursor-pointer transition-all
                  ${exam ? `${exam.color} text-white font-bold` : ''}
                  ${isTodayDate && !exam ? 'ring-2 ring-yellow-400 bg-yellow-500/20' : ''}
                  ${!exam && dayNum ? 'hover:bg-gray-700' : ''}
                  ${!dayNum ? 'text-gray-600' : 'text-gray-300'}
                `}
              >
                <span className="text-sm">{day}</span>
                {dayNum && dayProgress === 100 && (
                  <span className="absolute -top-1 -right-1 text-xs">✓</span>
                )}
                {exam && (
                  <span className="block text-[10px] truncate">{exam.subject.split(' ')[0]}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
    
    return (
      <div className="space-y-4">
        {/* Legend */}
        <div className="bg-gray-800 rounded-xl p-3">
          <p className="text-gray-400 text-xs mb-2">Tap any date to view its tasks</p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-blue-500"></span> Languages
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-red-500"></span> Pol Science
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-indigo-500"></span> Economics
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-teal-500"></span> Geography
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <span className="w-3 h-3 rounded bg-orange-500"></span> History
            </span>
          </div>
        </div>
        
        {renderMonth(2026, 1, febDays, 'February')}
        {renderMonth(2026, 2, marDays, 'March')}
        
        {/* Exam List */}
        <div className="bg-gray-800 rounded-xl p-4">
          <h4 className="font-bold text-white mb-3">📋 All Exam Dates</h4>
          <div className="space-y-2">
            {EXAM_DATES.map(exam => (
              <div key={exam.subject} className="flex justify-between items-center p-2 bg-gray-700/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${exam.color}`}></div>
                  <span className="text-white text-sm">{exam.subject}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-300 text-sm">
                    {new Date(exam.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', weekday: 'short' })}
                  </span>
                  <span className="text-gray-500 text-xs ml-2">{exam.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  // 🚀 90%+ Score Strategy Tab
  const renderScore90 = () => {
    const userStrategies = selectedSubjects && selectedSubjects.length > 0
      ? Object.entries(SCORING_STRATEGIES).filter(([id]) => selectedSubjects.includes(id))
      : Object.entries(SCORING_STRATEGIES).slice(0, 6);
    
    const totalTargetMarks = userStrategies.reduce((acc, [_, s]) => acc + s.target, 0);
    const avgTarget = Math.round(totalTargetMarks / userStrategies.length);
    
    return (
      <div className="space-y-4">
        {/* 90% Score Card */}
        <div className="bg-gradient-to-br from-yellow-600 via-orange-500 to-red-600 rounded-xl p-4 text-white">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold">🎯 Target: {avgTarget}%+ Average</h3>
            <span className="text-3xl">🏆</span>
          </div>
          <p className="text-white/90 text-sm">Follow these subject-wise strategies to crack 90%+</p>
          
          {/* Streak Counter */}
          <div className="mt-3 bg-white/20 rounded-lg p-2 flex justify-between items-center">
            <span className="text-sm">🔥 Study Streak</span>
            <span className="font-bold text-lg">{streak} days</span>
          </div>
        </div>
        
        {/* Study Timer */}
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-bold text-white">⏱️ Study Timer</h4>
            <span className="text-2xl font-mono text-green-400">
              {Math.floor(studyTimer / 3600).toString().padStart(2, '0')}:
              {Math.floor((studyTimer % 3600) / 60).toString().padStart(2, '0')}:
              {(studyTimer % 60).toString().padStart(2, '0')}
            </span>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className={`flex-1 py-2 rounded-lg font-medium ${isTimerRunning ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
            >
              {isTimerRunning ? '⏸️ Pause' : '▶️ Start'}
            </button>
            <button 
              onClick={() => { setStudyTimer(0); setIsTimerRunning(false); }}
              className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg"
            >
              🔄 Reset
            </button>
          </div>
          <div className="mt-3">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">Today's Progress</span>
              <span className="text-green-400">{dailyGoal.achievedMinutes}/{dailyGoal.targetMinutes} mins</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all"
                style={{ width: `${Math.min(100, (dailyGoal.achievedMinutes / dailyGoal.targetMinutes) * 100)}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* Subject-wise Strategies */}
        <div className="space-y-3">
          {userStrategies.map(([subjectId, strategy]) => {
            const subjectInfo = SUBJECT_MAP[subjectId];
            return (
              <div key={subjectId} className={`bg-gray-800 rounded-xl p-4 border-l-4 ${subjectInfo?.color || 'border-gray-500'}`}>
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-white font-bold">{subjectInfo?.name || subjectId}</h4>
                  <span className="text-2xl font-bold text-yellow-400">{strategy.target}%</span>
                </div>
                
                {/* High Weightage Topics */}
                <div className="mb-3">
                  <p className="text-yellow-400 text-xs font-medium mb-1">⭐ HIGH WEIGHTAGE</p>
                  <div className="flex flex-wrap gap-1">
                    {strategy.highWeightageTopics.map((topic, i) => (
                      <span key={i} className="bg-yellow-500/20 text-yellow-300 text-xs px-2 py-1 rounded-full">{topic}</span>
                    ))}
                  </div>
                </div>
                
                {/* Strategies */}
                <div className="mb-3">
                  <p className="text-green-400 text-xs font-medium mb-1">📈 STRATEGIES</p>
                  <ul className="space-y-1">
                    {strategy.strategies.map((s, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-green-400">•</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Must Do */}
                <div className="bg-red-900/30 rounded-lg p-2">
                  <p className="text-red-400 text-xs font-medium mb-1">🔴 MUST DO</p>
                  <ul className="space-y-1">
                    {strategy.mustDo.map((item, i) => (
                      <li key={i} className="text-gray-300 text-xs flex items-start gap-2">
                        <span className="text-red-400">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Exam Day Checklist */}
        <div className="bg-gray-800 rounded-xl p-4">
          <button 
            onClick={() => setShowChecklist(!showChecklist)}
            className="w-full flex justify-between items-center"
          >
            <h4 className="font-bold text-white">✅ Exam Day Checklist</h4>
            <span className="text-gray-400">{showChecklist ? '▲' : '▼'}</span>
          </button>
          
          {showChecklist && (
            <div className="mt-3 space-y-2">
              {EXAM_DAY_CHECKLIST.map(item => (
                <label 
                  key={item.id}
                  className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all ${
                    checkedItems.includes(item.id) ? 'bg-green-900/30' : 'bg-gray-700/50'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checkedItems.includes(item.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCheckedItems(prev => [...prev, item.id]);
                      } else {
                        setCheckedItems(prev => prev.filter(i => i !== item.id));
                      }
                    }}
                    className="w-5 h-5 rounded"
                  />
                  <span className={`flex-1 ${checkedItems.includes(item.id) ? 'text-green-400 line-through' : 'text-white'}`}>
                    {item.item}
                  </span>
                  {item.critical && <span className="text-red-400 text-xs">MUST!</span>}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  // 📝 Flashcards Tab
  const renderFlashcards = () => {
    const currentCard = filteredFlashcards[currentFlashcardIndex];
    
    const updateConfidence = (cardId: string, confidence: number) => {
      setFlashcards(prev => prev.map(f => 
        f.id === cardId ? { ...f, confidence, lastReviewed: new Date().toISOString() } : f
      ));
    };
    
    const nextCard = () => {
      setShowFlashcardAnswer(false);
      setCurrentFlashcardIndex(prev => (prev + 1) % filteredFlashcards.length);
    };
    
    const prevCard = () => {
      setShowFlashcardAnswer(false);
      setCurrentFlashcardIndex(prev => (prev - 1 + filteredFlashcards.length) % filteredFlashcards.length);
    };
    
    const shuffleCards = () => {
      setCurrentFlashcardIndex(Math.floor(Math.random() * filteredFlashcards.length));
      setShowFlashcardAnswer(false);
    };
    
    // Get unique subjects from flashcards
    const availableSubjects = [...new Set(
      flashcards
        .filter(f => !selectedSubjects?.length || selectedSubjects.includes(f.subjectId))
        .map(f => f.subjectId)
    )];
    
    return (
      <div className="space-y-4">
        {/* Progress Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-4 text-white">
          <h3 className="text-lg font-bold mb-2">⚡ Quick Revision Flashcards</h3>
          <p className="text-white/80 text-sm">Swipe through key concepts for rapid revision</p>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-sm">{currentFlashcardIndex + 1} / {filteredFlashcards.length}</span>
            <div className="flex gap-2">
              <span className="bg-green-500/30 text-green-300 text-xs px-2 py-1 rounded-full">
                Mastered: {filteredFlashcards.filter(f => f.confidence >= 4).length}
              </span>
              <span className="bg-yellow-500/30 text-yellow-300 text-xs px-2 py-1 rounded-full">
                Learning: {filteredFlashcards.filter(f => f.confidence > 0 && f.confidence < 4).length}
              </span>
            </div>
          </div>
        </div>
        
        {/* Subject Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setFlashcardFilter('all')}
            className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
              flashcardFilter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            All
          </button>
          {availableSubjects.map(subId => (
            <button
              key={subId}
              onClick={() => setFlashcardFilter(subId)}
              className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
                flashcardFilter === subId ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'
              }`}
            >
              {SUBJECT_MAP[subId]?.shortName || subId}
            </button>
          ))}
        </div>
        
        {/* Flashcard */}
        {currentCard && (
          <div 
            onClick={() => setShowFlashcardAnswer(!showFlashcardAnswer)}
            className="bg-gray-800 rounded-xl p-6 min-h-[300px] flex flex-col cursor-pointer transition-all hover:bg-gray-750"
          >
            {/* Card Header */}
            <div className="flex justify-between items-start mb-4">
              <span className={`text-xs px-2 py-1 rounded-full ${SUBJECT_MAP[currentCard.subjectId]?.color || 'bg-gray-500'} text-white`}>
                {currentCard.subject}
              </span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                currentCard.difficulty === 'easy' ? 'bg-green-500/30 text-green-400' :
                currentCard.difficulty === 'medium' ? 'bg-yellow-500/30 text-yellow-400' :
                'bg-red-500/30 text-red-400'
              }`}>
                {currentCard.difficulty}
              </span>
            </div>
            
            {/* Question */}
            <div className="flex-1 flex items-center justify-center">
              {!showFlashcardAnswer ? (
                <div className="text-center">
                  <p className="text-white text-lg font-medium">{currentCard.question}</p>
                  <p className="text-gray-500 text-sm mt-4">Tap to reveal answer</p>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">Answer:</p>
                  <p className="text-green-400 text-base whitespace-pre-line">{currentCard.answer}</p>
                </div>
              )}
            </div>
            
            {/* Confidence Rating */}
            {showFlashcardAnswer && (
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-gray-400 text-xs mb-2 text-center">Rate your confidence:</p>
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map(level => (
                    <button
                      key={level}
                      onClick={(e) => {
                        e.stopPropagation();
                        updateConfidence(currentCard.id, level);
                        setTimeout(nextCard, 300);
                      }}
                      className={`w-10 h-10 rounded-full font-bold transition-all ${
                        currentCard.confidence >= level 
                          ? 'bg-yellow-500 text-white' 
                          : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Navigation */}
        <div className="flex justify-between items-center gap-2">
          <button onClick={prevCard} className="flex-1 py-3 bg-gray-700 text-white rounded-xl font-medium">
            ← Previous
          </button>
          <button onClick={shuffleCards} className="px-4 py-3 bg-purple-600 text-white rounded-xl">
            🎲
          </button>
          <button onClick={nextCard} className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-medium">
            Next →
          </button>
        </div>
      </div>
    );
  };
  
  // 📋 PYQ Practice Tab
  const renderPYQ = () => {
    const togglePYQPracticed = (questionId: string) => {
      setPyqQuestions(prev => prev.map(q => 
        q.id === questionId ? { ...q, practiced: !q.practiced } : q
      ));
    };
    
    // Get unique subjects from PYQ
    const availableSubjects = [...new Set(
      pyqQuestions
        .filter(q => !selectedSubjects?.length || selectedSubjects.includes(q.subjectId))
        .map(q => q.subjectId)
    )];
    
    const practicedCount = filteredPYQ.filter(q => q.practiced).length;
    
    return (
      <div className="space-y-4">
        {/* PYQ Header */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-4 text-white">
          <h3 className="text-lg font-bold mb-2">📝 Previous Year Questions</h3>
          <p className="text-white/80 text-sm">Practice PYQs - Most Repeated = Most Important!</p>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-sm">Progress: {practicedCount} / {filteredPYQ.length}</span>
            <div className="w-32 h-2 bg-white/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all"
                style={{ width: `${(practicedCount / filteredPYQ.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* Subject Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setPyqFilter('all')}
            className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
              pyqFilter === 'all' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            All
          </button>
          {availableSubjects.map(subId => (
            <button
              key={subId}
              onClick={() => setPyqFilter(subId)}
              className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
                pyqFilter === subId ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300'
              }`}
            >
              {SUBJECT_MAP[subId]?.shortName || subId}
            </button>
          ))}
        </div>
        
        {/* PYQ List */}
        <div className="space-y-3">
          {filteredPYQ.map(question => (
            <div 
              key={question.id}
              className={`bg-gray-800 rounded-xl p-4 border-l-4 transition-all ${
                question.practiced ? 'border-green-500 bg-green-900/20' : 'border-orange-500'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex gap-2 flex-wrap">
                  <span className={`text-xs px-2 py-1 rounded-full ${SUBJECT_MAP[question.subjectId]?.color || 'bg-gray-500'} text-white`}>
                    {SUBJECT_MAP[question.subjectId]?.shortName || question.subjectId}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                    {question.year}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    question.type === 'long' ? 'bg-purple-500/30 text-purple-400' :
                    question.type === 'short' ? 'bg-blue-500/30 text-blue-400' :
                    'bg-green-500/30 text-green-400'
                  }`}>
                    {question.marks} marks
                  </span>
                </div>
              </div>
              
              <p className="text-white mb-3">{question.question}</p>
              
              <button
                onClick={() => togglePYQPracticed(question.id)}
                className={`w-full py-2 rounded-lg font-medium transition-all ${
                  question.practiced 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {question.practiced ? '✅ Practiced' : 'Mark as Practiced'}
              </button>
            </div>
          ))}
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-purple-900/30 rounded-xl p-3 text-center">
            <p className="text-xl font-bold text-purple-400">{filteredPYQ.filter(q => q.type === 'long').length}</p>
            <p className="text-xs text-gray-400">Long Answers</p>
          </div>
          <div className="bg-blue-900/30 rounded-xl p-3 text-center">
            <p className="text-xl font-bold text-blue-400">{filteredPYQ.filter(q => q.type === 'short').length}</p>
            <p className="text-xs text-gray-400">Short Answers</p>
          </div>
          <div className="bg-green-900/30 rounded-xl p-3 text-center">
            <p className="text-xl font-bold text-green-400">{practicedCount}</p>
            <p className="text-xs text-gray-400">Practiced</p>
          </div>
        </div>
      </div>
    );
  };
  
  // ============ NEW RENDER FUNCTIONS ============
  
  // Formula Bank Render
  const renderFormulas = () => {
    const filteredFormulas = formulaFilter === 'all' 
      ? FORMULA_BANK.filter(f => !selectedSubjects?.length || selectedSubjects.includes(f.subjectId))
      : FORMULA_BANK.filter(f => f.subjectId === formulaFilter);
    
    const availableSubjects = [...new Set(FORMULA_BANK.filter(f => !selectedSubjects?.length || selectedSubjects.includes(f.subjectId)).map(f => f.subjectId))];
    
    return (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl p-4">
          <h3 className="text-xl font-bold text-white mb-2">📐 Formula Quick Reference</h3>
          <p className="text-white/80 text-sm">All important formulas at your fingertips</p>
        </div>
        
        {/* Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setFormulaFilter('all')}
            className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
              formulaFilter === 'all' ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            All
          </button>
          {availableSubjects.map(subId => (
            <button
              key={subId}
              onClick={() => setFormulaFilter(subId)}
              className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
                formulaFilter === subId ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-300'
              }`}
            >
              {SUBJECT_MAP[subId]?.shortName || subId}
            </button>
          ))}
        </div>
        
        {/* Formulas List */}
        <div className="space-y-3">
          {filteredFormulas.map((formula, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-4 border-l-4 border-cyan-500">
              <div className="flex justify-between items-start mb-2">
                <span className="text-cyan-400 font-medium">{formula.topic}</span>
                <span className="bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded">
                  {SUBJECT_MAP[formula.subjectId]?.shortName}
                </span>
              </div>
              <div className="bg-gray-900 rounded-lg p-3 mb-2 font-mono text-yellow-300 text-lg">
                {formula.formula}
              </div>
              <p className="text-gray-400 text-sm">{formula.explanation}</p>
              {formula.example && (
                <p className="text-green-400 text-sm mt-2">📝 Example: {formula.example}</p>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center text-gray-500 text-sm">
          Total: {filteredFormulas.length} formulas
        </div>
      </div>
    );
  };
  
  // Emergency Last-Minute Mode Render
  const renderEmergency = () => {
    const subjectsWithEmergency = Object.keys(LAST_MINUTE_POINTS).filter(
      subId => !selectedSubjects?.length || selectedSubjects.includes(subId)
    );
    
    return (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-4 animate-pulse">
          <h3 className="text-xl font-bold text-white mb-2">🚨 EMERGENCY MODE</h3>
          <p className="text-white/80 text-sm">Last-minute key points for quick revision</p>
        </div>
        
        {/* Subject Selection */}
        <div className="grid grid-cols-3 gap-2">
          {subjectsWithEmergency.map(subId => (
            <button
              key={subId}
              onClick={() => setEmergencySubject(subId === emergencySubject ? '' : subId)}
              className={`p-3 rounded-xl text-center transition-all ${
                emergencySubject === subId 
                  ? 'bg-red-600 text-white scale-105' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-2xl block mb-1">{
                subId === 'eco' ? '💰' : subId === 'pol' ? '⚖️' : subId === 'geo' ? '🌍' :
                subId === 'his' ? '📜' : subId === 'eng' ? '📖' : subId === 'hin' ? '🔤' :
                subId === 'soc' ? '👥' : subId === 'psy' ? '🧠' : '📚'
              }</span>
              <span className="text-xs">{SUBJECT_MAP[subId]?.shortName}</span>
            </button>
          ))}
        </div>
        
        {/* Emergency Points */}
        {emergencySubject && LAST_MINUTE_POINTS[emergencySubject] && (
          <div className="space-y-2">
            <h4 className="text-white font-bold text-lg flex items-center gap-2">
              🎯 {SUBJECT_MAP[emergencySubject]?.name} - Key Points
            </h4>
            {LAST_MINUTE_POINTS[emergencySubject].map((point, idx) => (
              <div key={idx} className="bg-gray-800 rounded-lg p-3 border-l-4 border-red-500">
                <p className="text-white">{point}</p>
              </div>
            ))}
          </div>
        )}
        
        {!emergencySubject && (
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <span className="text-4xl mb-3 block">👆</span>
            <p className="text-gray-400">Select a subject above to see last-minute revision points</p>
          </div>
        )}
        
        {/* Quick Tips */}
        <div className="bg-yellow-900/30 rounded-xl p-4">
          <h4 className="text-yellow-400 font-bold mb-3">⚡ Emergency Exam Tips</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>✅ Focus on high-weightage topics only</li>
            <li>✅ Revise formulas and diagrams</li>
            <li>✅ Read important definitions</li>
            <li>✅ Practice 2-3 PYQ answers mentally</li>
            <li>✅ Stay calm - you've prepared well!</li>
          </ul>
        </div>
      </div>
    );
  };
  
  // Writing Practice Render
  const renderWriting = () => {
    const addWritingPractice = (subjectId: string, type: string, topic: string) => {
      const newPractice: WritingPractice = {
        id: `writing-${Date.now()}`,
        subjectId,
        type: type as any,
        topic,
        date: new Date().toISOString().split('T')[0],
        completed: false
      };
      setWritingPractice(prev => [...prev, newPractice]);
    };
    
    const toggleWritingComplete = (id: string, score?: number) => {
      setWritingPractice(prev => prev.map(w => 
        w.id === id ? { ...w, completed: !w.completed, selfScore: score } : w
      ));
    };
    
    const availableSubjects = Object.keys(WRITING_TOPICS).filter(
      subId => !selectedSubjects?.length || selectedSubjects.includes(subId)
    );
    
    return (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-4">
          <h3 className="text-xl font-bold text-white mb-2">✍️ Writing Practice</h3>
          <p className="text-white/80 text-sm">Track your essay, letter & answer writing practice</p>
        </div>
        
        {/* Progress Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-purple-900/30 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-purple-400">{writingPractice.length}</p>
            <p className="text-xs text-gray-400">Total</p>
          </div>
          <div className="bg-green-900/30 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-green-400">{writingPractice.filter(w => w.completed).length}</p>
            <p className="text-xs text-gray-400">Done</p>
          </div>
          <div className="bg-yellow-900/30 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-yellow-400">{writingPractice.filter(w => !w.completed).length}</p>
            <p className="text-xs text-gray-400">Pending</p>
          </div>
        </div>
        
        {/* Suggested Topics */}
        <div className="bg-gray-800 rounded-xl p-4">
          <h4 className="text-white font-bold mb-3">📝 Quick Add Practice</h4>
          {availableSubjects.map(subId => (
            <div key={subId} className="mb-4">
              <p className="text-gray-400 text-sm mb-2">{SUBJECT_MAP[subId]?.name}</p>
              <div className="flex flex-wrap gap-2">
                {WRITING_TOPICS[subId]?.map((group, gIdx) => (
                  group.topics.slice(0, 2).map((topic, tIdx) => (
                    <button
                      key={`${gIdx}-${tIdx}`}
                      onClick={() => addWritingPractice(subId, group.type, topic)}
                      className="bg-gray-700 hover:bg-purple-600 text-gray-300 hover:text-white text-xs px-3 py-1 rounded-full transition-all"
                    >
                      + {group.type}: {topic.substring(0, 20)}...
                    </button>
                  ))
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Practice List */}
        {writingPractice.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-white font-bold">Your Practice List</h4>
            {writingPractice.slice().reverse().map(practice => (
              <div key={practice.id} className={`bg-gray-800 rounded-lg p-3 border-l-4 ${
                practice.completed ? 'border-green-500' : 'border-purple-500'
              }`}>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-purple-400 text-xs uppercase">{practice.type}</span>
                    <p className="text-white">{practice.topic}</p>
                    <p className="text-gray-500 text-xs">{SUBJECT_MAP[practice.subjectId]?.name} • {practice.date}</p>
                  </div>
                  <button
                    onClick={() => toggleWritingComplete(practice.id)}
                    className={`p-2 rounded-lg ${
                      practice.completed ? 'bg-green-600' : 'bg-gray-700 hover:bg-purple-600'
                    }`}
                  >
                    {practice.completed ? '✅' : '⬜'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  // Mock Test Scheduler Render
  const renderMockTests = () => {
    const [newTestSubject, setNewTestSubject] = useState('');
    const [newTestDate, setNewTestDate] = useState('');
    const [newTestTime, setNewTestTime] = useState('10:00');
    
    const addMockTest = () => {
      if (!newTestSubject || !newTestDate) return;
      const newTest: MockTest = {
        id: `mock-${Date.now()}`,
        subjectId: newTestSubject,
        scheduledDate: newTestDate,
        scheduledTime: newTestTime,
        duration: 180,
        completed: false,
        maxScore: 100
      };
      setMockTests(prev => [...prev, newTest]);
      setShowMockTestForm(false);
      setNewTestSubject('');
      setNewTestDate('');
    };
    
    const completeTest = (id: string, score: number) => {
      setMockTests(prev => prev.map(t => 
        t.id === id ? { ...t, completed: true, score } : t
      ));
    };
    
    const upcomingTests = mockTests.filter(t => !t.completed).sort((a, b) => 
      new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime()
    );
    const completedTests = mockTests.filter(t => t.completed);
    
    return (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl p-4">
          <h3 className="text-xl font-bold text-white mb-2">📋 Mock Test Scheduler</h3>
          <p className="text-white/80 text-sm">Schedule and track your practice tests</p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-indigo-900/30 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-indigo-400">{upcomingTests.length}</p>
            <p className="text-xs text-gray-400">Scheduled</p>
          </div>
          <div className="bg-green-900/30 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-green-400">{completedTests.length}</p>
            <p className="text-xs text-gray-400">Completed</p>
          </div>
          <div className="bg-yellow-900/30 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold text-yellow-400">
              {completedTests.length > 0 
                ? Math.round(completedTests.reduce((acc, t) => acc + (t.score || 0), 0) / completedTests.length)
                : '-'
              }%
            </p>
            <p className="text-xs text-gray-400">Avg Score</p>
          </div>
        </div>
        
        {/* Add New Test */}
        <button
          onClick={() => setShowMockTestForm(!showMockTestForm)}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium transition-all"
        >
          {showMockTestForm ? '✕ Cancel' : '+ Schedule New Mock Test'}
        </button>
        
        {showMockTestForm && (
          <div className="bg-gray-800 rounded-xl p-4 space-y-3">
            <select
              value={newTestSubject}
              onChange={(e) => setNewTestSubject(e.target.value)}
              className="w-full bg-gray-700 text-white p-3 rounded-lg"
            >
              <option value="">Select Subject</option>
              {(selectedSubjects?.length ? selectedSubjects : Object.keys(SUBJECT_MAP)).map(subId => (
                <option key={subId} value={subId}>{SUBJECT_MAP[subId]?.name}</option>
              ))}
            </select>
            <input
              type="date"
              value={newTestDate}
              onChange={(e) => setNewTestDate(e.target.value)}
              className="w-full bg-gray-700 text-white p-3 rounded-lg"
            />
            <input
              type="time"
              value={newTestTime}
              onChange={(e) => setNewTestTime(e.target.value)}
              className="w-full bg-gray-700 text-white p-3 rounded-lg"
            />
            <button
              onClick={addMockTest}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium"
            >
              ✅ Schedule Test
            </button>
          </div>
        )}
        
        {/* Upcoming Tests */}
        {upcomingTests.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-white font-bold">📅 Upcoming Tests</h4>
            {upcomingTests.map(test => (
              <div key={test.id} className="bg-gray-800 rounded-lg p-4 border-l-4 border-indigo-500">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-medium">{SUBJECT_MAP[test.subjectId]?.name}</p>
                    <p className="text-gray-400 text-sm">{test.scheduledDate} at {test.scheduledTime}</p>
                  </div>
                  <button
                    onClick={() => {
                      const score = prompt('Enter your score (0-100):');
                      if (score) completeTest(test.id, parseInt(score));
                    }}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Complete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Completed Tests */}
        {completedTests.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-white font-bold">✅ Completed Tests</h4>
            {completedTests.slice().reverse().slice(0, 5).map(test => (
              <div key={test.id} className="bg-gray-800 rounded-lg p-4 border-l-4 border-green-500">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-medium">{SUBJECT_MAP[test.subjectId]?.name}</p>
                    <p className="text-gray-400 text-sm">{test.scheduledDate}</p>
                  </div>
                  <span className={`text-2xl font-bold ${
                    (test.score || 0) >= 90 ? 'text-green-400' :
                    (test.score || 0) >= 75 ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {test.score}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  // Important Diagrams Render
  const renderDiagrams = () => {
    const filteredDiagrams = diagramFilter === 'all'
      ? IMPORTANT_DIAGRAMS.filter(d => !selectedSubjects?.length || selectedSubjects.includes(d.subjectId))
      : IMPORTANT_DIAGRAMS.filter(d => d.subjectId === diagramFilter);
    
    const availableSubjects = [...new Set(IMPORTANT_DIAGRAMS.filter(d => !selectedSubjects?.length || selectedSubjects.includes(d.subjectId)).map(d => d.subjectId))];
    
    return (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl p-4">
          <h3 className="text-xl font-bold text-white mb-2">📊 Important Diagrams</h3>
          <p className="text-white/80 text-sm">Must-practice diagrams for board exams</p>
        </div>
        
        {/* Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setDiagramFilter('all')}
            className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
              diagramFilter === 'all' ? 'bg-violet-600 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            All
          </button>
          {availableSubjects.map(subId => (
            <button
              key={subId}
              onClick={() => setDiagramFilter(subId)}
              className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
                diagramFilter === subId ? 'bg-violet-600 text-white' : 'bg-gray-700 text-gray-300'
              }`}
            >
              {SUBJECT_MAP[subId]?.shortName || subId}
            </button>
          ))}
        </div>
        
        {/* Diagrams List */}
        <div className="space-y-4">
          {filteredDiagrams.map((diagram, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-4 border-l-4 border-violet-500">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-white font-bold text-lg">{diagram.topic}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${SUBJECT_MAP[diagram.subjectId]?.color} text-white`}>
                    {SUBJECT_MAP[diagram.subjectId]?.shortName}
                  </span>
                </div>
                <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-bold">
                  {diagram.marks} marks
                </span>
              </div>
              <p className="text-gray-400 mb-3">{diagram.description}</p>
              <div className="bg-gray-900 rounded-lg p-3">
                <p className="text-violet-400 text-sm font-medium mb-2">💡 Tips:</p>
                <ul className="space-y-1">
                  {diagram.tips.map((tip, tipIdx) => (
                    <li key={tipIdx} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-green-400">✓</span> {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-yellow-900/30 rounded-xl p-4 text-center">
          <p className="text-yellow-400 font-medium">🎨 Practice drawing each diagram at least 3 times!</p>
        </div>
      </div>
    );
  };
  
  // Common Mistakes Render
  const renderMistakes = () => {
    const filteredMistakes = mistakeFilter === 'all'
      ? COMMON_MISTAKES.filter(m => !selectedSubjects?.length || selectedSubjects.includes(m.subjectId))
      : COMMON_MISTAKES.filter(m => m.subjectId === mistakeFilter);
    
    const availableSubjects = [...new Set(COMMON_MISTAKES.filter(m => !selectedSubjects?.length || selectedSubjects.includes(m.subjectId)).map(m => m.subjectId))];
    
    return (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-red-600 to-rose-600 rounded-xl p-4">
          <h3 className="text-xl font-bold text-white mb-2">⚠️ Common Mistakes to Avoid</h3>
          <p className="text-white/80 text-sm">Learn from others' mistakes - don't repeat them!</p>
        </div>
        
        {/* Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setMistakeFilter('all')}
            className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
              mistakeFilter === 'all' ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            All
          </button>
          {availableSubjects.map(subId => (
            <button
              key={subId}
              onClick={() => setMistakeFilter(subId)}
              className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
                mistakeFilter === subId ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-300'
              }`}
            >
              {SUBJECT_MAP[subId]?.shortName || subId}
            </button>
          ))}
        </div>
        
        {/* Mistakes List */}
        <div className="space-y-3">
          {filteredMistakes.map((mistake, idx) => (
            <div key={idx} className={`bg-gray-800 rounded-xl p-4 border-l-4 ${
              mistake.impact === 'high' ? 'border-red-500' :
              mistake.impact === 'medium' ? 'border-yellow-500' : 'border-gray-500'
            }`}>
              <div className="flex justify-between items-start mb-2">
                <span className={`text-xs px-2 py-1 rounded-full ${SUBJECT_MAP[mistake.subjectId]?.color} text-white`}>
                  {SUBJECT_MAP[mistake.subjectId]?.shortName}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  mistake.impact === 'high' ? 'bg-red-500/30 text-red-400' :
                  mistake.impact === 'medium' ? 'bg-yellow-500/30 text-yellow-400' : 'bg-gray-500/30 text-gray-400'
                }`}>
                  {mistake.impact} impact
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-red-400">❌</span>
                  <p className="text-red-300">{mistake.mistake}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400">✅</span>
                  <p className="text-green-300">{mistake.correction}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-green-900/30 rounded-xl p-4">
          <p className="text-green-400 font-medium text-center">📝 Review this list before every exam!</p>
        </div>
      </div>
    );
  };
  
  // Analytics & Performance Render
  const renderAnalytics = () => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.completed).length;
    const taskProgress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    
    const totalFlashcards = filteredFlashcards.length;
    const masteredFlashcards = filteredFlashcards.filter(f => f.confidence >= 4).length;
    
    const totalPYQ = filteredPYQ.length;
    const practicedPYQ = filteredPYQ.filter(q => q.practiced).length;
    
    const totalMockTests = mockTests.length;
    const completedMockTests = mockTests.filter(t => t.completed).length;
    const avgMockScore = completedMockTests > 0 
      ? Math.round(mockTests.filter(t => t.completed).reduce((acc, t) => acc + (t.score || 0), 0) / completedMockTests)
      : 0;
    
    const updateConfidence = (subjectId: string, newConfidence: number) => {
      setSubjectConfidence(prev => prev.map(s => 
        s.subjectId === subjectId 
          ? { ...s, confidence: newConfidence, lastUpdated: new Date().toISOString().split('T')[0] }
          : s
      ));
    };
    
    return (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-4">
          <h3 className="text-xl font-bold text-white mb-2">📈 Performance Analytics</h3>
          <p className="text-white/80 text-sm">Track your progress towards 90%+</p>
        </div>
        
        {/* Overall Progress */}
        <div className="bg-gray-800 rounded-xl p-4">
          <h4 className="text-white font-bold mb-4">📊 Overall Progress</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-blue-900/30 rounded-lg p-3 text-center">
              <p className="text-3xl font-bold text-blue-400">{taskProgress}%</p>
              <p className="text-xs text-gray-400">Tasks Done</p>
              <p className="text-xs text-blue-300">{completedTasks}/{totalTasks}</p>
            </div>
            <div className="bg-purple-900/30 rounded-lg p-3 text-center">
              <p className="text-3xl font-bold text-purple-400">{masteredFlashcards}</p>
              <p className="text-xs text-gray-400">Cards Mastered</p>
              <p className="text-xs text-purple-300">of {totalFlashcards}</p>
            </div>
            <div className="bg-orange-900/30 rounded-lg p-3 text-center">
              <p className="text-3xl font-bold text-orange-400">{practicedPYQ}</p>
              <p className="text-xs text-gray-400">PYQ Practiced</p>
              <p className="text-xs text-orange-300">of {totalPYQ}</p>
            </div>
            <div className="bg-green-900/30 rounded-lg p-3 text-center">
              <p className="text-3xl font-bold text-green-400">{avgMockScore || '-'}%</p>
              <p className="text-xs text-gray-400">Avg Mock Score</p>
              <p className="text-xs text-green-300">{completedMockTests} tests</p>
            </div>
          </div>
        </div>
        
        {/* Subject Confidence */}
        <div className="bg-gray-800 rounded-xl p-4">
          <h4 className="text-white font-bold mb-4">🎯 Subject Confidence</h4>
          <p className="text-gray-400 text-sm mb-4">Rate your confidence (0-100) for each subject</p>
          <div className="space-y-4">
            {subjectConfidence
              .filter(s => !selectedSubjects?.length || selectedSubjects.includes(s.subjectId))
              .map(subject => (
                <div key={subject.subjectId} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{SUBJECT_MAP[subject.subjectId]?.name}</span>
                    <span className={`font-bold ${
                      subject.confidence >= 80 ? 'text-green-400' :
                      subject.confidence >= 60 ? 'text-yellow-400' : 'text-red-400'
                    }`}>{subject.confidence}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={subject.confidence}
                    onChange={(e) => updateConfidence(subject.subjectId, parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, ${
                        subject.confidence >= 80 ? '#22c55e' : subject.confidence >= 60 ? '#eab308' : '#ef4444'
                      } ${subject.confidence}%, #374151 ${subject.confidence}%)`
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
        
        {/* Study Streak */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Current Streak</p>
              <p className="text-white text-4xl font-bold">{streak} Days 🔥</p>
            </div>
            <div className="text-right">
              <p className="text-white/80 text-sm">Study Time Today</p>
              <p className="text-white text-2xl font-bold">{dailyGoal.achievedMinutes} min</p>
            </div>
          </div>
        </div>
        
        {/* Readiness Score */}
        <div className="bg-gray-800 rounded-xl p-4">
          <h4 className="text-white font-bold mb-3">🏆 Exam Readiness Score</h4>
          {(() => {
            const avgConfidence = subjectConfidence.length > 0 
              ? Math.round(subjectConfidence.reduce((acc, s) => acc + s.confidence, 0) / subjectConfidence.length)
              : 0;
            const readinessScore = Math.round((taskProgress * 0.3) + (avgConfidence * 0.4) + ((practicedPYQ / Math.max(totalPYQ, 1)) * 100 * 0.3));
            return (
              <div className="text-center">
                <p className={`text-6xl font-bold ${
                  readinessScore >= 80 ? 'text-green-400' :
                  readinessScore >= 60 ? 'text-yellow-400' : 'text-red-400'
                }`}>{readinessScore}%</p>
                <p className="text-gray-400 mt-2">
                  {readinessScore >= 80 ? '🌟 You\'re well prepared! Keep it up!' :
                   readinessScore >= 60 ? '💪 Good progress! Push harder!' :
                   '⚡ More practice needed! You can do it!'}
                </p>
              </div>
            );
          })()}
        </div>
      </div>
    );
  };
  
  // Mind Maps Render
  const renderMindMaps = () => {
    const filteredMaps = mindMapFilter === 'all'
      ? MIND_MAPS.filter(m => !selectedSubjects?.length || selectedSubjects.includes(m.subjectId))
      : MIND_MAPS.filter(m => m.subjectId === mindMapFilter);
    
    const availableSubjects = [...new Set(MIND_MAPS.filter(m => !selectedSubjects?.length || selectedSubjects.includes(m.subjectId)).map(m => m.subjectId))];
    
    const toggleNode = (nodeId: string) => {
      setExpandedNodes(prev => {
        const newSet = new Set(prev);
        if (newSet.has(nodeId)) {
          newSet.delete(nodeId);
        } else {
          newSet.add(nodeId);
        }
        return newSet;
      });
    };
    
    const renderNode = (node: MindMapNode, level: number = 0) => {
      const hasChildren = node.children && node.children.length > 0;
      const isExpanded = expandedNodes.has(node.id);
      
      return (
        <div key={node.id} className={`${level > 0 ? 'ml-4 border-l-2 border-gray-600 pl-3' : ''}`}>
          <button
            onClick={() => hasChildren && toggleNode(node.id)}
            className={`flex items-center gap-2 w-full text-left py-1 px-2 rounded-lg transition-colors ${
              hasChildren ? 'hover:bg-gray-700 cursor-pointer' : 'cursor-default'
            }`}
          >
            {hasChildren && (
              <span className={`transform transition-transform ${isExpanded ? 'rotate-90' : ''}`}>▶</span>
            )}
            <span className={`${
              level === 0 ? 'text-lg font-bold text-yellow-400' :
              level === 1 ? 'text-white font-medium' : 'text-gray-300'
            }`}>{node.label}</span>
          </button>
          {hasChildren && isExpanded && (
            <div className="mt-1">
              {node.children!.map(child => renderNode(child, level + 1))}
            </div>
          )}
        </div>
      );
    };
    
    return (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl p-4">
          <h3 className="text-xl font-bold text-white mb-2">🧠 Mind Maps</h3>
          <p className="text-white/80 text-sm">Visual learning for better retention</p>
        </div>
        
        {/* Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setMindMapFilter('all')}
            className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
              mindMapFilter === 'all' ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            All
          </button>
          {availableSubjects.map(subId => (
            <button
              key={subId}
              onClick={() => setMindMapFilter(subId)}
              className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
                mindMapFilter === subId ? 'bg-cyan-600 text-white' : 'bg-gray-700 text-gray-300'
              }`}
            >
              {SUBJECT_MAP[subId]?.shortName || subId}
            </button>
          ))}
        </div>
        
        {/* Mind Maps */}
        <div className="space-y-4">
          {filteredMaps.map((mindMap, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-white font-bold text-lg">{mindMap.chapter}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${SUBJECT_MAP[mindMap.subjectId]?.color} text-white`}>
                    {SUBJECT_MAP[mindMap.subjectId]?.shortName}
                  </span>
                </div>
                <button
                  onClick={() => {
                    // Expand all nodes for this map
                    const allNodeIds = new Set<string>();
                    const collectIds = (nodes: MindMapNode[]) => {
                      nodes.forEach(n => {
                        allNodeIds.add(n.id);
                        if (n.children) collectIds(n.children);
                      });
                    };
                    collectIds(mindMap.nodes);
                    setExpandedNodes(prev => {
                      const newSet = new Set(prev);
                      let allExpanded = true;
                      allNodeIds.forEach(id => {
                        if (!newSet.has(id)) allExpanded = false;
                      });
                      if (allExpanded) {
                        allNodeIds.forEach(id => newSet.delete(id));
                      } else {
                        allNodeIds.forEach(id => newSet.add(id));
                      }
                      return newSet;
                    });
                  }}
                  className="text-xs bg-cyan-600/30 text-cyan-400 px-2 py-1 rounded"
                >
                  Toggle All
                </button>
              </div>
              
              {/* Central Topic */}
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-3 mb-4 text-center">
                <span className="text-xl font-bold text-white">🎯 {mindMap.centralTopic}</span>
              </div>
              
              {/* Branches */}
              <div className="bg-gray-900 rounded-lg p-3 space-y-2">
                {mindMap.nodes.map(node => renderNode(node))}
              </div>
              
              {/* Tips */}
              {mindMap.tips.length > 0 && (
                <div className="mt-3 bg-blue-900/30 rounded-lg p-3">
                  <p className="text-blue-400 text-sm font-medium mb-1">💡 Tips:</p>
                  {mindMap.tips.map((tip, tipIdx) => (
                    <p key={tipIdx} className="text-gray-300 text-sm">• {tip}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="bg-cyan-900/30 rounded-xl p-4 text-center">
          <p className="text-cyan-400 font-medium">🧠 Mind maps help you remember 10x better!</p>
        </div>
      </div>
    );
  };
  
  // Voice Recorder Render
  const renderVoiceRecorder = () => {
    const formatTime = (seconds: number) => {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins}:${secs.toString().padStart(2, '0')}`;
    };
    
    const startRecording = async () => {
      if (!recordingSubject || !recordingTopic) {
        alert('Please select a subject and enter a topic!');
        return;
      }
      
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        const chunks: Blob[] = [];
        
        recorder.ondataavailable = (e) => chunks.push(e.data);
        recorder.onstop = () => {
          const blob = new Blob(chunks, { type: 'audio/webm' });
          const url = URL.createObjectURL(blob);
          const newNote: VoiceNote = {
            id: `vn_${Date.now()}`,
            subjectId: recordingSubject,
            topic: recordingTopic,
            audioBlob: blob,
            audioUrl: url,
            duration: recordingTime,
            createdAt: new Date().toISOString(),
          };
          setVoiceNotes(prev => [newNote, ...prev]);
          setRecordingTime(0);
          setRecordingTopic('');
          stream.getTracks().forEach(track => track.stop());
        };
        
        recorder.start();
        setMediaRecorder(recorder);
        setIsRecording(true);
      } catch (err) {
        alert('Unable to access microphone. Please allow microphone access.');
      }
    };
    
    const stopRecording = () => {
      if (mediaRecorder) {
        mediaRecorder.stop();
        setIsRecording(false);
        setMediaRecorder(null);
      }
    };
    
    const deleteNote = (id: string) => {
      const note = voiceNotes.find(n => n.id === id);
      if (note?.audioUrl) {
        URL.revokeObjectURL(note.audioUrl);
      }
      setVoiceNotes(prev => prev.filter(n => n.id !== id));
    };
    
    const filteredNotes = voiceNotes.filter(n => 
      !selectedSubjects?.length || selectedSubjects.includes(n.subjectId)
    );
    
    return (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl p-4">
          <h3 className="text-xl font-bold text-white mb-2">🎙️ Voice Notes</h3>
          <p className="text-white/80 text-sm">Record revision notes for on-the-go learning</p>
        </div>
        
        {/* Recording Section */}
        <div className="bg-gray-800 rounded-xl p-4">
          <h4 className="text-white font-bold mb-4">📝 New Recording</h4>
          
          {!isRecording ? (
            <div className="space-y-3">
              <div>
                <label className="text-gray-400 text-sm">Subject</label>
                <select
                  value={recordingSubject}
                  onChange={(e) => setRecordingSubject(e.target.value)}
                  className="w-full mt-1 bg-gray-700 border border-gray-600 rounded-lg p-2 text-white"
                >
                  <option value="">Select subject...</option>
                  {(selectedSubjects?.length ? selectedSubjects : Object.keys(SUBJECT_MAP)).map(subId => (
                    <option key={subId} value={subId}>{SUBJECT_MAP[subId]?.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-gray-400 text-sm">Topic</label>
                <input
                  type="text"
                  value={recordingTopic}
                  onChange={(e) => setRecordingTopic(e.target.value)}
                  placeholder="e.g., Demand Analysis key points"
                  className="w-full mt-1 bg-gray-700 border border-gray-600 rounded-lg p-2 text-white placeholder-gray-500"
                />
              </div>
              <button
                onClick={startRecording}
                disabled={!recordingSubject || !recordingTopic}
                className={`w-full py-3 rounded-xl font-bold text-lg flex items-center justify-center gap-2 ${
                  recordingSubject && recordingTopic
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                🎙️ Start Recording
              </button>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <div className="animate-pulse">
                <div className="w-24 h-24 mx-auto bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-4xl">🎙️</span>
                </div>
              </div>
              <p className="text-red-400 text-3xl font-mono">{formatTime(recordingTime)}</p>
              <p className="text-gray-400">Recording: {recordingTopic}</p>
              <button
                onClick={stopRecording}
                className="w-full py-3 rounded-xl font-bold text-lg bg-gray-600 text-white hover:bg-gray-500 flex items-center justify-center gap-2"
              >
                ⏹️ Stop & Save
              </button>
            </div>
          )}
        </div>
        
        {/* Saved Notes */}
        <div className="bg-gray-800 rounded-xl p-4">
          <h4 className="text-white font-bold mb-4">🎧 Your Voice Notes ({filteredNotes.length})</h4>
          
          {filteredNotes.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-4xl mb-2">🎙️</p>
              <p className="text-gray-400">No voice notes yet</p>
              <p className="text-gray-500 text-sm">Record your first revision note!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredNotes.map(note => (
                <div key={note.id} className="bg-gray-700 rounded-lg p-3">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h5 className="text-white font-medium">{note.topic}</h5>
                      <div className="flex items-center gap-2 text-sm">
                        <span className={`px-2 py-0.5 rounded-full ${SUBJECT_MAP[note.subjectId]?.color} text-white text-xs`}>
                          {SUBJECT_MAP[note.subjectId]?.shortName}
                        </span>
                        <span className="text-gray-400">{formatTime(note.duration)}</span>
                        <span className="text-gray-500">{new Date(note.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteNote(note.id)}
                      className="text-red-400 hover:text-red-300 p-1"
                    >
                      🗑️
                    </button>
                  </div>
                  {note.audioUrl && (
                    <audio controls className="w-full h-10" src={note.audioUrl}>
                      Your browser does not support audio.
                    </audio>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="bg-pink-900/30 rounded-xl p-4">
          <p className="text-pink-400 font-medium text-center">💡 Tip: Listen to your notes while commuting!</p>
          <p className="text-gray-400 text-sm text-center mt-1">Note: Audio is stored in this session only</p>
        </div>
      </div>
    );
  };
  
  // Exam Day Checklist Render
  const renderExamChecklist = () => {
    const categories = ['documents', 'stationery', 'essentials', 'tips'] as const;
    const categoryLabels = {
      documents: { label: '📄 Documents', color: 'from-blue-600 to-blue-700' },
      stationery: { label: '✏️ Stationery', color: 'from-green-600 to-green-700' },
      essentials: { label: '🎒 Essentials', color: 'from-purple-600 to-purple-700' },
      tips: { label: '💡 Exam Tips', color: 'from-yellow-600 to-orange-600' },
    };
    
    const toggleItem = (id: string) => {
      setExamChecklistItems(prev => ({ ...prev, [id]: !prev[id] }));
    };
    
    const checkedCount = Object.values(examChecklistItems).filter(Boolean).length;
    const totalCount = EXAM_DAY_CHECKLIST.length;
    const progress = Math.round((checkedCount / totalCount) * 100);
    
    return (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-4">
          <h3 className="text-xl font-bold text-white mb-2">📋 Exam Day Checklist</h3>
          <p className="text-white/80 text-sm">Be fully prepared on exam day!</p>
        </div>
        
        {/* Progress */}
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-medium">Preparation Progress</span>
            <span className="text-emerald-400 font-bold">{checkedCount}/{totalCount}</span>
          </div>
          <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          {progress === 100 && (
            <p className="text-emerald-400 text-center mt-2 font-medium">🎉 You're all set for the exam!</p>
          )}
        </div>
        
        {/* Categories */}
        {categories.map(category => (
          <div key={category} className="bg-gray-800 rounded-xl overflow-hidden">
            <div className={`bg-gradient-to-r ${categoryLabels[category].color} p-3`}>
              <h4 className="text-white font-bold">{categoryLabels[category].label}</h4>
            </div>
            <div className="p-3 space-y-2">
              {EXAM_DAY_CHECKLIST.filter(item => item.category === category).map(item => (
                <button
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors ${
                    examChecklistItems[item.id] ? 'bg-emerald-900/30' : 'bg-gray-700/50 hover:bg-gray-700'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    examChecklistItems[item.id] 
                      ? 'bg-emerald-500 border-emerald-500' 
                      : 'border-gray-500'
                  }`}>
                    {examChecklistItems[item.id] && <span className="text-white text-sm">✓</span>}
                  </div>
                  <span className={`flex-1 text-left ${
                    examChecklistItems[item.id] ? 'text-gray-400 line-through' : 'text-white'
                  }`}>
                    {item.item}
                  </span>
                  {item.important && !examChecklistItems[item.id] && (
                    <span className="text-red-400 text-xs">Required</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
        
        <div className="bg-yellow-900/30 rounded-xl p-4 text-center">
          <p className="text-yellow-400 font-medium">⏰ Prepare everything the night before!</p>
        </div>
      </div>
    );
  };
  
  // Quick 5-Minute Revision Render
  const renderQuickRevision = () => {
    const filteredCards = quickRevFilter === 'all'
      ? QUICK_REVISION_CARDS.filter(c => !selectedSubjects?.length || selectedSubjects.includes(c.subjectId))
      : QUICK_REVISION_CARDS.filter(c => c.subjectId === quickRevFilter);
    
    const availableSubjects = [...new Set(QUICK_REVISION_CARDS.filter(c => !selectedSubjects?.length || selectedSubjects.includes(c.subjectId)).map(c => c.subjectId))];
    
    const card = filteredCards[currentRevCard] || filteredCards[0];
    
    const nextCard = () => {
      setCurrentRevCard(prev => (prev + 1) % filteredCards.length);
    };
    
    const prevCard = () => {
      setCurrentRevCard(prev => (prev - 1 + filteredCards.length) % filteredCards.length);
    };
    
    return (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-4">
          <h3 className="text-xl font-bold text-white mb-2">⚡ Quick 5-Min Revision</h3>
          <p className="text-white/80 text-sm">Ultra-fast revision cards for last-minute prep</p>
        </div>
        
        {/* Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => { setQuickRevFilter('all'); setCurrentRevCard(0); }}
            className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
              quickRevFilter === 'all' ? 'bg-amber-600 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            All
          </button>
          {availableSubjects.map(subId => (
            <button
              key={subId}
              onClick={() => { setQuickRevFilter(subId); setCurrentRevCard(0); }}
              className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
                quickRevFilter === subId ? 'bg-amber-600 text-white' : 'bg-gray-700 text-gray-300'
              }`}
            >
              {SUBJECT_MAP[subId]?.shortName || subId}
            </button>
          ))}
        </div>
        
        {/* Card Navigator */}
        <div className="flex items-center justify-between bg-gray-800 rounded-xl p-3">
          <span className="text-gray-400 text-sm">Card {currentRevCard + 1} of {filteredCards.length}</span>
          <div className="flex gap-2">
            {filteredCards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentRevCard(idx)}
                className={`w-2 h-2 rounded-full ${idx === currentRevCard ? 'bg-amber-500' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        </div>
        
        {/* Current Card */}
        {card && (
          <div className="bg-gray-800 rounded-xl overflow-hidden">
            <div className={`${SUBJECT_MAP[card.subjectId]?.color} p-4`}>
              <div className="flex justify-between items-center">
                <span className="text-white font-bold text-lg">{card.topic}</span>
                <span className="text-white/80 text-sm">⏱️ {card.timeToRead}s</span>
              </div>
              <span className="text-white/70 text-sm">{SUBJECT_MAP[card.subjectId]?.name}</span>
            </div>
            <div className="p-4 space-y-3">
              {card.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-gray-700/50 rounded-lg p-3">
                  <span className="bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-white">{point}</p>
                </div>
              ))}
            </div>
            <div className="p-4 pt-0 flex gap-3">
              <button
                onClick={prevCard}
                className="flex-1 py-3 bg-gray-700 text-white rounded-xl font-bold hover:bg-gray-600"
              >
                ◀ Previous
              </button>
              <button
                onClick={nextCard}
                className="flex-1 py-3 bg-amber-600 text-white rounded-xl font-bold hover:bg-amber-500"
              >
                Next ▶
              </button>
            </div>
          </div>
        )}
        
        <div className="bg-orange-900/30 rounded-xl p-4 text-center">
          <p className="text-orange-400 font-medium">📱 Perfect for bus/auto revision!</p>
        </div>
      </div>
    );
  };
  
  // Answer Writing Guide Render
  const renderAnswerGuide = () => {
    return (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-4">
          <h3 className="text-xl font-bold text-white mb-2">✍️ Answer Writing Guide</h3>
          <p className="text-white/80 text-sm">Write perfect answers and score maximum marks!</p>
        </div>
        
        {ANSWER_WRITING_GUIDE.map((guide, idx) => (
          <div key={idx} className="bg-gray-800 rounded-xl overflow-hidden">
            <div className={`p-4 ${
              guide.type === 'mcq' ? 'bg-blue-600' :
              guide.type === 'short' ? 'bg-green-600' :
              guide.type === 'long' ? 'bg-purple-600' :
              guide.type === 'essay' ? 'bg-pink-600' : 'bg-orange-600'
            }`}>
              <h4 className="text-white font-bold text-lg">{guide.title}</h4>
            </div>
            <div className="p-4 space-y-2">
              {guide.tips.map((tip, tipIdx) => (
                <div key={tipIdx} className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <p className="text-gray-300">{tip}</p>
                </div>
              ))}
              {guide.example && (
                <div className="mt-3 bg-gray-900 rounded-lg p-3">
                  <p className="text-amber-400 text-sm font-medium mb-2">📝 Example:</p>
                  <pre className="text-gray-300 text-sm whitespace-pre-wrap font-sans">{guide.example}</pre>
                </div>
              )}
            </div>
          </div>
        ))}
        
        {/* Marks Distribution Quick Reference */}
        <div className="bg-gray-800 rounded-xl p-4">
          <h4 className="text-white font-bold mb-4">📊 Marks = Points Formula</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 bg-blue-900/30 rounded-lg">
              <span className="text-blue-400">1 mark</span>
              <span className="text-white">= 1 point / definition</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-green-900/30 rounded-lg">
              <span className="text-green-400">2 marks</span>
              <span className="text-white">= 2-3 points</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-yellow-900/30 rounded-lg">
              <span className="text-yellow-400">4 marks</span>
              <span className="text-white">= 4-5 points + example</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-purple-900/30 rounded-lg">
              <span className="text-purple-400">8 marks</span>
              <span className="text-white">= 6-8 points + diagram</span>
            </div>
          </div>
        </div>
        
        <div className="bg-indigo-900/30 rounded-xl p-4 text-center">
          <p className="text-indigo-400 font-medium">📏 Quality over Quantity - Don't over-write!</p>
        </div>
      </div>
    );
  };
  
  // Pomodoro Timer Render
  const renderPomodoro = () => {
    const formatPomodoroTime = (seconds: number) => {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };
    
    const todaySessions = pomodoroSessions.filter(s => s.date === new Date().toISOString().split('T')[0]);
    const totalMinutesToday = todaySessions.reduce((acc, s) => acc + s.duration, 0);
    
    const modeColors = {
      work: 'from-red-600 to-orange-600',
      shortBreak: 'from-green-600 to-emerald-600',
      longBreak: 'from-blue-600 to-cyan-600'
    };
    
    const modeLabels = {
      work: '🎯 Focus Time',
      shortBreak: '☕ Short Break',
      longBreak: '🌴 Long Break'
    };
    
    return (
      <div className="space-y-4">
        <div className={`bg-gradient-to-r ${modeColors[pomodoroMode]} rounded-xl p-4`}>
          <h3 className="text-xl font-bold text-white mb-2">🍅 Pomodoro Timer</h3>
          <p className="text-white/80 text-sm">25 min work → 5 min break → repeat!</p>
        </div>
        
        {/* Timer Display */}
        <div className="bg-gray-800 rounded-xl p-6 text-center">
          <p className="text-gray-400 mb-2">{modeLabels[pomodoroMode]}</p>
          <p className={`text-7xl font-mono font-bold ${
            pomodoroMode === 'work' ? 'text-red-400' :
            pomodoroMode === 'shortBreak' ? 'text-green-400' : 'text-blue-400'
          }`}>
            {formatPomodoroTime(pomodoroTime)}
          </p>
          
          {/* Progress Ring */}
          <div className="mt-4 flex justify-center">
            <div className="flex gap-2">
              {[1, 2, 3, 4].map(i => (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-full ${
                    i <= pomodoroCount % 4 || (pomodoroCount % 4 === 0 && pomodoroCount > 0 && i === 4)
                      ? 'bg-red-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-2">Sessions: {pomodoroCount}</p>
        </div>
        
        {/* Subject Selection */}
        {pomodoroMode === 'work' && !pomodoroRunning && (
          <div className="bg-gray-800 rounded-xl p-4">
            <label className="text-gray-400 text-sm">Study Subject</label>
            <select
              value={pomodoroSubject}
              onChange={(e) => setPomodoroSubject(e.target.value)}
              className="w-full mt-2 bg-gray-700 border border-gray-600 rounded-lg p-3 text-white"
            >
              <option value="">Select subject...</option>
              {(selectedSubjects?.length ? selectedSubjects : Object.keys(SUBJECT_MAP)).map(subId => (
                <option key={subId} value={subId}>{SUBJECT_MAP[subId]?.name}</option>
              ))}
            </select>
          </div>
        )}
        
        {/* Controls */}
        <div className="flex gap-3">
          <button
            onClick={() => {
              if (pomodoroMode === 'work' && !pomodoroSubject && !pomodoroRunning) {
                alert('Please select a subject first!');
                return;
              }
              setPomodoroRunning(!pomodoroRunning);
            }}
            className={`flex-1 py-4 rounded-xl font-bold text-lg ${
              pomodoroRunning
                ? 'bg-yellow-600 text-white'
                : pomodoroMode === 'work'
                ? 'bg-red-600 text-white'
                : 'bg-green-600 text-white'
            }`}
          >
            {pomodoroRunning ? '⏸️ Pause' : '▶️ Start'}
          </button>
          <button
            onClick={() => {
              setPomodoroRunning(false);
              setPomodoroMode('work');
              setPomodoroTime(25 * 60);
            }}
            className="px-6 py-4 bg-gray-700 text-white rounded-xl font-bold"
          >
            🔄
          </button>
        </div>
        
        {/* Quick Mode Switch */}
        <div className="flex gap-2">
          <button
            onClick={() => { setPomodoroMode('work'); setPomodoroTime(25 * 60); setPomodoroRunning(false); }}
            className={`flex-1 py-2 rounded-lg text-sm ${pomodoroMode === 'work' ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-300'}`}
          >
            🎯 25 min
          </button>
          <button
            onClick={() => { setPomodoroMode('shortBreak'); setPomodoroTime(5 * 60); setPomodoroRunning(false); }}
            className={`flex-1 py-2 rounded-lg text-sm ${pomodoroMode === 'shortBreak' ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-300'}`}
          >
            ☕ 5 min
          </button>
          <button
            onClick={() => { setPomodoroMode('longBreak'); setPomodoroTime(15 * 60); setPomodoroRunning(false); }}
            className={`flex-1 py-2 rounded-lg text-sm ${pomodoroMode === 'longBreak' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
          >
            🌴 15 min
          </button>
        </div>
        
        {/* Today's Stats */}
        <div className="bg-gray-800 rounded-xl p-4">
          <h4 className="text-white font-bold mb-3">📊 Today's Focus</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-red-900/30 rounded-lg p-3 text-center">
              <p className="text-3xl font-bold text-red-400">{todaySessions.length}</p>
              <p className="text-gray-400 text-sm">Sessions</p>
            </div>
            <div className="bg-orange-900/30 rounded-lg p-3 text-center">
              <p className="text-3xl font-bold text-orange-400">{totalMinutesToday}</p>
              <p className="text-gray-400 text-sm">Minutes</p>
            </div>
          </div>
        </div>
        
        <div className="bg-red-900/30 rounded-xl p-4 text-center">
          <p className="text-red-400 font-medium">🍅 4 Pomodoros = 1 Long Break!</p>
        </div>
      </div>
    );
  };
  
  // Daily Affirmations Render
  const renderAffirmations = () => {
    const filteredAffirmations = affirmationCategory === 'all'
      ? DAILY_AFFIRMATIONS
      : DAILY_AFFIRMATIONS.filter(a => a.category === affirmationCategory);
    
    const affirmation = filteredAffirmations[currentAffirmation % filteredAffirmations.length];
    
    const categoryColors: Record<string, string> = {
      confidence: 'from-yellow-500 to-amber-600',
      focus: 'from-blue-500 to-indigo-600',
      success: 'from-green-500 to-emerald-600',
      calm: 'from-purple-500 to-violet-600',
      power: 'from-red-500 to-rose-600'
    };
    
    const categoryEmojis: Record<string, string> = {
      confidence: '💪',
      focus: '🎯',
      success: '🏆',
      calm: '🧘',
      power: '⚡'
    };
    
    const nextAffirmation = () => {
      setCurrentAffirmation(prev => (prev + 1) % filteredAffirmations.length);
    };
    
    const prevAffirmation = () => {
      setCurrentAffirmation(prev => (prev - 1 + filteredAffirmations.length) % filteredAffirmations.length);
    };
    
    const randomAffirmation = () => {
      setCurrentAffirmation(Math.floor(Math.random() * filteredAffirmations.length));
    };
    
    return (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl p-4">
          <h3 className="text-xl font-bold text-white mb-2">✨ Daily Affirmations</h3>
          <p className="text-white/80 text-sm">Positive thoughts for exam success!</p>
        </div>
        
        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => { setAffirmationCategory('all'); setCurrentAffirmation(0); }}
            className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
              affirmationCategory === 'all' ? 'bg-pink-600 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            All
          </button>
          {['confidence', 'focus', 'success', 'calm', 'power'].map(cat => (
            <button
              key={cat}
              onClick={() => { setAffirmationCategory(cat); setCurrentAffirmation(0); }}
              className={`px-3 py-1 rounded-full text-sm whitespace-nowrap capitalize ${
                affirmationCategory === cat ? 'bg-pink-600 text-white' : 'bg-gray-700 text-gray-300'
              }`}
            >
              {categoryEmojis[cat]} {cat}
            </button>
          ))}
        </div>
        
        {/* Affirmation Card */}
        {affirmation && (
          <div className={`bg-gradient-to-br ${categoryColors[affirmation.category]} rounded-2xl p-6 min-h-[200px] flex flex-col justify-center items-center text-center`}>
            <span className="text-5xl mb-4">{categoryEmojis[affirmation.category]}</span>
            <p className="text-white text-2xl font-bold leading-relaxed">
              "{affirmation.text}"
            </p>
            <span className="mt-4 text-white/70 text-sm capitalize">~ {affirmation.category}</span>
          </div>
        )}
        
        {/* Navigation */}
        <div className="flex gap-3">
          <button
            onClick={prevAffirmation}
            className="flex-1 py-3 bg-gray-700 text-white rounded-xl font-bold hover:bg-gray-600"
          >
            ◀ Previous
          </button>
          <button
            onClick={randomAffirmation}
            className="px-6 py-3 bg-pink-600 text-white rounded-xl font-bold hover:bg-pink-500"
          >
            🎲
          </button>
          <button
            onClick={nextAffirmation}
            className="flex-1 py-3 bg-gray-700 text-white rounded-xl font-bold hover:bg-gray-600"
          >
            Next ▶
          </button>
        </div>
        
        {/* Morning Routine */}
        <div className="bg-gray-800 rounded-xl p-4">
          <h4 className="text-white font-bold mb-3">🌅 Morning Affirmation Routine</h4>
          <div className="space-y-2 text-gray-300 text-sm">
            <p>1. 🧘 Take 3 deep breaths</p>
            <p>2. 🪞 Look in the mirror</p>
            <p>3. 📢 Say the affirmation OUT LOUD 3 times</p>
            <p>4. 💪 Believe in every word!</p>
            <p>5. 🚀 Start studying with confidence!</p>
          </div>
        </div>
        
        <div className="bg-purple-900/30 rounded-xl p-4 text-center">
          <p className="text-purple-400 font-medium">🌟 "You become what you believe!"</p>
        </div>
      </div>
    );
  };
  
  // Marking Scheme Render
  const renderMarkingScheme = () => {
    const filteredSchemes = markingSchemeFilter === 'all'
      ? SUBJECT_MARKING_SCHEMES.filter(s => !selectedSubjects?.length || selectedSubjects.includes(s.subjectId))
      : SUBJECT_MARKING_SCHEMES.filter(s => s.subjectId === markingSchemeFilter);
    
    const availableSubjects = [...new Set(SUBJECT_MARKING_SCHEMES.filter(s => !selectedSubjects?.length || selectedSubjects.includes(s.subjectId)).map(s => s.subjectId))];
    
    return (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4">
          <h3 className="text-xl font-bold text-white mb-2">📊 Marking Scheme</h3>
          <p className="text-white/80 text-sm">Know your paper, plan your strategy!</p>
        </div>
        
        {/* Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setMarkingSchemeFilter('all')}
            className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
              markingSchemeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            All
          </button>
          {availableSubjects.map(subId => (
            <button
              key={subId}
              onClick={() => setMarkingSchemeFilter(subId)}
              className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
                markingSchemeFilter === subId ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'
              }`}
            >
              {SUBJECT_MAP[subId]?.shortName || subId}
            </button>
          ))}
        </div>
        
        {/* Schemes */}
        {filteredSchemes.map(scheme => (
          <div key={scheme.subjectId} className="bg-gray-800 rounded-xl overflow-hidden">
            <div className={`${SUBJECT_MAP[scheme.subjectId]?.color} p-4`}>
              <div className="flex justify-between items-center">
                <h4 className="text-white font-bold text-lg">{SUBJECT_MAP[scheme.subjectId]?.name}</h4>
                <div className="text-right">
                  <p className="text-white font-bold">{scheme.totalMarks} Marks</p>
                  <p className="text-white/70 text-sm">{scheme.duration} min</p>
                </div>
              </div>
              <p className="text-white/80 text-sm mt-1">Passing: {scheme.passingMarks} marks</p>
            </div>
            
            <div className="p-4 space-y-3">
              {scheme.sections.map((section, idx) => (
                <div key={idx} className="bg-gray-700/50 rounded-lg p-3">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-white font-medium">{section.section}</p>
                      <p className="text-gray-400 text-sm">{section.questionType}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-yellow-400 font-bold">{section.totalMarks} marks</p>
                      <p className="text-gray-500 text-xs">{section.count} × {section.marks}m</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {section.tips.map((tip, tipIdx) => (
                      <span key={tipIdx} className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                        {tip}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Visual Breakdown */}
              <div className="mt-3">
                <p className="text-gray-400 text-sm mb-2">Marks Distribution:</p>
                <div className="h-4 rounded-full overflow-hidden flex">
                  {scheme.sections.map((section, idx) => (
                    <div
                      key={idx}
                      className={`h-full ${
                        idx === 0 ? 'bg-blue-500' :
                        idx === 1 ? 'bg-green-500' :
                        idx === 2 ? 'bg-yellow-500' : 'bg-purple-500'
                      }`}
                      style={{ width: `${(section.totalMarks / scheme.totalMarks) * 100}%` }}
                      title={`${section.section}: ${section.totalMarks} marks`}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  {scheme.sections.map((section, idx) => (
                    <span key={idx}>{section.totalMarks}m</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Quick Reference */}
        <div className="bg-gray-800 rounded-xl p-4">
          <h4 className="text-white font-bold mb-3">⚡ Quick Reference</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="bg-blue-900/30 p-2 rounded text-center">
              <p className="text-blue-400">MCQ</p>
              <p className="text-white">30 sec/Q</p>
            </div>
            <div className="bg-green-900/30 p-2 rounded text-center">
              <p className="text-green-400">2 marks</p>
              <p className="text-white">3 min/Q</p>
            </div>
            <div className="bg-yellow-900/30 p-2 rounded text-center">
              <p className="text-yellow-400">4 marks</p>
              <p className="text-white">7 min/Q</p>
            </div>
            <div className="bg-purple-900/30 p-2 rounded text-center">
              <p className="text-purple-400">8 marks</p>
              <p className="text-white">15 min/Q</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-900/30 rounded-xl p-4 text-center">
          <p className="text-blue-400 font-medium">📝 Know the weightage, prioritize smart!</p>
        </div>
      </div>
    );
  };
  
  const resetProgress = () => {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone!')) {
      const freshTasks = generatePhaseTasks();
      // Filter by selected subjects
      const filteredTasks = selectedSubjects && selectedSubjects.length > 0
        ? freshTasks.filter(task => selectedSubjects.includes(task.subjectId))
        : freshTasks;
      setTasks(filteredTasks);
      localStorage.setItem(storageKey, JSON.stringify(filteredTasks));
    }
  };
  
  return (
    <div className="fixed inset-0 bg-black/95 z-50 overflow-hidden">
      {/* Header */}
      <div className="sticky top-0 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 p-4 shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-white">🚀 MEGA 90+ CRASHER</h2>
            <p className="text-white/80 text-sm">41 Days to Board Domination</p>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={resetProgress}
              className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              title="Reset Progress"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
            <button 
              onClick={onClose}
              className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
          {[
            { id: 'overview', label: '🏠' },
            { id: 'score90', label: '🎯' },
            { id: 'daily', label: '📅' },
            { id: 'flashcards', label: '⚡' },
            { id: 'pyq', label: '📝' },
            { id: 'quickrev', label: '🚀' },
            { id: 'formulas', label: '📐' },
            { id: 'mindmaps', label: '🧠' },
            { id: 'emergency', label: '🚨' },
            { id: 'answerguide', label: '✍️' },
            { id: 'writing', label: '📚' },
            { id: 'mock', label: '📋' },
            { id: 'recorder', label: '🎙️' },
            { id: 'diagrams', label: '�' },
            { id: 'mistakes', label: '⚠️' },
            { id: 'checklist', label: '✅' },
            { id: 'analytics', label: '📈' },
            { id: 'pomodoro', label: '🍅' },
            { id: 'affirmations', label: '✨' },
            { id: 'marking', label: '📊' },
            { id: 'calendar', label: '🗓️' },
            { id: 'subjects', label: '🏫' },
            { id: 'tips', label: '💡' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-2 rounded-full text-lg transition-all ${
                activeTab === tab.id 
                  ? 'bg-white text-orange-600 scale-110' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
              title={tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="overflow-y-auto p-4 pb-20" style={{ height: 'calc(100vh - 140px)' }}>
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'score90' && renderScore90()}
        {activeTab === 'daily' && renderDaily()}
        {activeTab === 'flashcards' && renderFlashcards()}
        {activeTab === 'pyq' && renderPYQ()}
        {activeTab === 'quickrev' && renderQuickRevision()}
        {activeTab === 'formulas' && renderFormulas()}
        {activeTab === 'mindmaps' && renderMindMaps()}
        {activeTab === 'emergency' && renderEmergency()}
        {activeTab === 'answerguide' && renderAnswerGuide()}
        {activeTab === 'writing' && renderWriting()}
        {activeTab === 'mock' && renderMockTests()}
        {activeTab === 'recorder' && renderVoiceRecorder()}
        {activeTab === 'diagrams' && renderDiagrams()}
        {activeTab === 'mistakes' && renderMistakes()}
        {activeTab === 'checklist' && renderExamChecklist()}
        {activeTab === 'analytics' && renderAnalytics()}
        {activeTab === 'pomodoro' && renderPomodoro()}
        {activeTab === 'affirmations' && renderAffirmations()}
        {activeTab === 'marking' && renderMarkingScheme()}
        {activeTab === 'calendar' && renderCalendar()}
        {activeTab === 'subjects' && renderSubjects()}
        {activeTab === 'tips' && renderTips()}
      </div>
    </div>
  );
};

export default MegaBoardCrasher;
