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
];

// Exam Day Checklist
const EXAM_DAY_CHECKLIST = [
  { id: 1, item: '📝 Hall Ticket / Admit Card', critical: true },
  { id: 2, item: '🪪 School ID Card', critical: true },
  { id: 3, item: '✏️ Blue & Black Pens (3 each)', critical: true },
  { id: 4, item: '📏 Geometry Box (for maps/diagrams)', critical: false },
  { id: 5, item: '⌚ Simple Wristwatch', critical: false },
  { id: 6, item: '💧 Water Bottle (transparent)', critical: false },
  { id: 7, item: '🍫 Small snack/chocolate', critical: false },
  { id: 8, item: '📱 Phone at HOME (not allowed!)', critical: true },
  { id: 9, item: '😴 8 hours sleep last night', critical: true },
  { id: 10, item: '🍳 Light breakfast before exam', critical: true },
  { id: 11, item: '⏰ Reach 30 mins before', critical: true },
  { id: 12, item: '🧘 5 deep breaths before starting', critical: false },
];

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
  const [activeTab, setActiveTab] = useState<'overview' | 'daily' | 'calendar' | 'subjects' | 'tips' | 'flashcards' | 'pyq' | 'score90'>('overview');
  
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
      
      {/* Quick Actions */}
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
            { id: 'overview', label: '📊 Home' },
            { id: 'score90', label: '🎯 90%+' },
            { id: 'daily', label: '📅 Daily' },
            { id: 'flashcards', label: '⚡ Flash' },
            { id: 'pyq', label: '📝 PYQ' },
            { id: 'calendar', label: '🗓️ Cal' },
            { id: 'subjects', label: '📚 Sub' },
            { id: 'tips', label: '💡 Tips' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id 
                  ? 'bg-white text-orange-600' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
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
        {activeTab === 'calendar' && renderCalendar()}
        {activeTab === 'subjects' && renderSubjects()}
        {activeTab === 'tips' && renderTips()}
      </div>
    </div>
  );
};

export default MegaBoardCrasher;
