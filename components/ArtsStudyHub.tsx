import React, { useState, useMemo } from 'react';
import { 
  X, BookOpen, Palette, GraduationCap, Target, Calendar, 
  Sparkles, TrendingUp, Clock, FileText, PenTool, Brain,
  Globe2, Landmark, Languages, IndianRupee, History, Users,
  ChevronRight, Star, Zap, CheckCircle2, Trophy, Flame
} from 'lucide-react';
import { Subject } from '../types';

interface ArtsStudyHubProps {
  onClose: () => void;
  onOpenTool?: (tool: string) => void;
  subjects?: Subject[];
  onSelectSubject?: (subjectId: string) => void;
}

interface StudyTip {
  id: string;
  subject: string;
  tip: string;
  category: 'exam' | 'memory' | 'writing' | 'revision';
}

interface ImportantDate {
  date: string;
  event: string;
  subject: string;
  chapter?: string;
}

const ARTS_SUBJECT_IDS = ['his', 'eng', 'hin', 'pol', 'eco', 'geo', 'soc', 'psy', 'san'];

const SUBJECT_ICONS: Record<string, any> = {
  eng: BookOpen,
  hin: Languages,
  his: History,
  pol: Landmark,
  eco: IndianRupee,
  geo: Globe2,
  soc: Users,
  psy: Brain,
  san: BookOpen,
};

const SUBJECT_COLORS: Record<string, string> = {
  eng: 'from-yellow-500 to-amber-600',
  hin: 'from-orange-500 to-red-600',
  his: 'from-amber-500 to-orange-600',
  pol: 'from-red-500 to-rose-600',
  eco: 'from-indigo-500 to-purple-600',
  geo: 'from-green-500 to-emerald-600',
  soc: 'from-blue-500 to-cyan-600',
  psy: 'from-purple-500 to-pink-600',
  san: 'from-teal-500 to-cyan-600',
};

const STUDY_TIPS: StudyTip[] = [
  // English Tips - Comprehensive
  { id: 't1', subject: 'eng', tip: 'For prose, always note: Author, Theme, Characters, Literary Devices, and Key Quotes', category: 'exam' },
  { id: 't2', subject: 'eng', tip: 'Poetry analysis: TPCASTT - Title, Paraphrase, Connotation, Attitude, Shift, Title again, Theme', category: 'memory' },
  { id: 't3', subject: 'eng', tip: 'For 8-mark answers: Intro (1) + 5-6 Points (5-6) + Conclusion (1)', category: 'writing' },
  { id: 't4', subject: 'eng', tip: 'Learn 2-3 quotes per chapter - they add marks!', category: 'revision' },
  { id: 't5', subject: 'eng', tip: 'Grammar section: Focus on transformation, voice change, direct-indirect', category: 'exam' },
  { id: 't6', subject: 'eng', tip: 'Summary writing: Read twice, identify main ideas, write in own words (1/3rd length)', category: 'writing' },
  { id: 't7', subject: 'eng', tip: 'For character sketch: Physical + Mental + Role in story + Your opinion', category: 'writing' },
  { id: 't8', subject: 'eng', tip: 'Poetry appreciation: Theme, Figures of Speech, Tone, Personal Response', category: 'exam' },
  { id: 't9', subject: 'eng', tip: 'Notice Writing: Use box format, be brief, include all 5W1H', category: 'writing' },
  { id: 't10', subject: 'eng', tip: 'Appeal Writing: Strong headline, emotional appeal, call to action', category: 'writing' },
  
  // Hindi Tips - Comprehensive  
  { id: 't11', subject: 'hin', tip: 'कविता के लिए: कवि परिचय + केंद्रीय भाव + काव्य सौंदर्य याद करें', category: 'exam' },
  { id: 't12', subject: 'hin', tip: 'व्याकरण में संधि, समास, अलंकार के 5-5 उदाहरण रटें', category: 'memory' },
  { id: 't13', subject: 'hin', tip: 'कनुप्रिया के 10 प्रमुख प्रसंग और उनके भाव याद करें', category: 'revision' },
  { id: 't14', subject: 'hin', tip: 'पत्र लेखन में प्रारूप के लिए 2 अंक निश्चित हैं', category: 'writing' },
  { id: 't15', subject: 'hin', tip: 'अपठित गद्यांश: पहले प्रश्न पढ़ें, फिर गद्यांश में उत्तर खोजें', category: 'exam' },
  { id: 't16', subject: 'hin', tip: 'रस: स्थायी भाव + विभाव + अनुभाव + संचारी भाव = रस', category: 'memory' },
  { id: 't17', subject: 'hin', tip: 'निबंध में प्रस्तावना और उपसंहार में कविता की पंक्ति डालें', category: 'writing' },
  { id: 't18', subject: 'hin', tip: 'मुहावरे और लोकोक्तियों में अंतर समझें', category: 'memory' },
  { id: 't19', subject: 'hin', tip: 'काव्य सौंदर्य: भाव सौंदर्य + शिल्प सौंदर्य दोनों लिखें', category: 'writing' },
  { id: 't20', subject: 'hin', tip: 'संवाद लेखन: स्थान-समय-पात्र स्पष्ट करें', category: 'writing' },
  
  // History Tips - Comprehensive
  { id: 't21', subject: 'his', tip: 'Create timeline for each chapter - dates are frequently asked', category: 'memory' },
  { id: 't22', subject: 'his', tip: 'Map work: Practice locations of freedom struggle events', category: 'exam' },
  { id: 't23', subject: 'his', tip: 'Connect Indian history with world events of same period', category: 'revision' },
  { id: 't24', subject: 'his', tip: 'Use CAUSES-EVENTS-RESULTS format for movements', category: 'writing' },
  { id: 't25', subject: 'his', tip: 'For 8-mark questions: Give 4-5 points with examples', category: 'writing' },
  { id: 't26', subject: 'his', tip: 'World Wars: Remember alliances - Central vs Allied powers', category: 'memory' },
  { id: 't27', subject: 'his', tip: 'Industrial Revolution: Social, Economic, Political impacts separately', category: 'revision' },
  { id: 't28', subject: 'his', tip: 'Freedom struggle: Link leaders with specific movements', category: 'exam' },
  { id: 't29', subject: 'his', tip: 'Renaissance: Remember 3Ms - Michelangelo, Machiavelli, Martin Luther', category: 'memory' },
  { id: 't30', subject: 'his', tip: 'Colonialism: Compare British, French, Portuguese methods', category: 'revision' },
  { id: 't31', subject: 'his', tip: 'Cold War: US vs USSR - ideological differences clearly', category: 'exam' },
  { id: 't32', subject: 'his', tip: 'Treaty names: Versailles, Westphalia, Paris - know all clauses', category: 'memory' },
  
  // Political Science Tips - Comprehensive
  { id: 't33', subject: 'pol', tip: 'Current affairs: Link syllabus topics to recent news', category: 'exam' },
  { id: 't34', subject: 'pol', tip: 'Distinguish Between: Always write 4 clear points in table format', category: 'writing' },
  { id: 't35', subject: 'pol', tip: 'Learn Article numbers related to fundamental rights', category: 'memory' },
  { id: 't36', subject: 'pol', tip: 'G20, BRICS, SAARC - know latest developments', category: 'revision' },
  { id: 't37', subject: 'pol', tip: 'International organizations: Full forms + HQ + Members + Functions', category: 'memory' },
  { id: 't38', subject: 'pol', tip: 'Globalisation: Positive + Negative impacts separately', category: 'exam' },
  { id: 't39', subject: 'pol', tip: 'Good Governance: 8 characteristics - PARTICLES (Participation, Accountability, Rule of law, Transparency, Inclusive, Consensus, Legitimacy, Effectiveness, Strategic)', category: 'memory' },
  { id: 't40', subject: 'pol', tip: 'UN organs: 6 main organs and their functions', category: 'revision' },
  { id: 't41', subject: 'pol', tip: 'Terrorism: Types, Causes, Measures to combat', category: 'exam' },
  { id: 't42', subject: 'pol', tip: 'Human Rights: 3 generations of rights theory', category: 'memory' },
  
  // Economics Tips - Comprehensive
  { id: 't43', subject: 'eco', tip: 'Draw diagrams for elasticity, market forms - easy marks!', category: 'exam' },
  { id: 't44', subject: 'eco', tip: 'Formulas: Write on first page of answer book for quick reference', category: 'memory' },
  { id: 't45', subject: 'eco', tip: 'Index Numbers and National Income have numerical questions', category: 'revision' },
  { id: 't46', subject: 'eco', tip: 'Budget terms: Revenue/Capital, Plan/Non-Plan expenditure', category: 'writing' },
  { id: 't47', subject: 'eco', tip: 'Elasticity: Ed, Es, Ei, Ec - remember all 4 with formulas', category: 'memory' },
  { id: 't48', subject: 'eco', tip: 'Market forms: Perfect competition vs Monopoly vs Oligopoly features', category: 'exam' },
  { id: 't49', subject: 'eco', tip: 'Public Finance: Canons of taxation (Adam Smith)', category: 'memory' },
  { id: 't50', subject: 'eco', tip: 'Money Market: RBI functions and monetary policy tools', category: 'revision' },
  { id: 't51', subject: 'eco', tip: 'GDP, GNP, NDP, NNP: Remember the relationships', category: 'memory' },
  { id: 't52', subject: 'eco', tip: 'Inflation types: Demand-pull vs Cost-push - causes & effects', category: 'exam' },
  { id: 't53', subject: 'eco', tip: 'Foreign Trade: Exports, Imports, Balance of Trade, Balance of Payments', category: 'revision' },
  { id: 't54', subject: 'eco', tip: 'Cooperative sector: Principles, Types, Importance in rural economy', category: 'exam' },
];

const IMPORTANT_DATES: ImportantDate[] = [
  // History - Renaissance & Discoveries
  { date: '1440', event: 'Printing Press invented by Gutenberg', subject: 'his', chapter: 'Renaissance' },
  { date: '1453', event: 'Fall of Constantinople', subject: 'his', chapter: 'Renaissance' },
  { date: '1492', event: 'Columbus discovered America', subject: 'his', chapter: 'Geographical Discoveries' },
  { date: '1498', event: 'Vasco da Gama reached India', subject: 'his', chapter: 'European Colonialism' },
  { date: '1517', event: 'Martin Luther - 95 Theses (Reformation)', subject: 'his', chapter: 'Renaissance' },
  { date: '1519', event: 'Magellan started world circumnavigation', subject: 'his', chapter: 'Geographical Discoveries' },
  
  // History - Colonialism & Revolutions
  { date: '1600', event: 'English East India Company founded', subject: 'his', chapter: 'Colonialism' },
  { date: '1602', event: 'Dutch East India Company founded', subject: 'his', chapter: 'Colonialism' },
  { date: '1757', event: 'Battle of Plassey', subject: 'his', chapter: 'India and European Colonialism' },
  { date: '1764', event: 'Battle of Buxar', subject: 'his', chapter: 'British Rule in India' },
  { date: '1776', event: 'American Declaration of Independence', subject: 'his', chapter: 'American Revolution' },
  { date: '1789', event: 'French Revolution began', subject: 'his', chapter: 'French Revolution' },
  { date: '1793', event: 'Reign of Terror in France', subject: 'his', chapter: 'French Revolution' },
  { date: '1804', event: 'Napoleon became Emperor', subject: 'his', chapter: 'French Revolution' },
  { date: '1815', event: 'Battle of Waterloo - Napoleon defeated', subject: 'his', chapter: 'French Revolution' },
  
  // History - Industrial Revolution & Imperialism
  { date: '1760', event: 'Industrial Revolution began in Britain', subject: 'his', chapter: 'Industrial Revolution' },
  { date: '1769', event: 'James Watt improved steam engine', subject: 'his', chapter: 'Industrial Revolution' },
  { date: '1848', event: 'Communist Manifesto published', subject: 'his', chapter: 'Industrial Revolution' },
  { date: '1869', event: 'Suez Canal opened', subject: 'his', chapter: 'Imperialism' },
  { date: '1884', event: 'Berlin Conference - Scramble for Africa', subject: 'his', chapter: 'Imperialism' },
  
  // History - Indian Freedom Struggle
  { date: '1857', event: 'First War of Independence', subject: 'his', chapter: 'Struggle against Colonialism' },
  { date: '1885', event: 'Indian National Congress founded', subject: 'his', chapter: 'National Movement' },
  { date: '1905', event: 'Partition of Bengal', subject: 'his', chapter: 'Freedom Struggle' },
  { date: '1906', event: 'Muslim League founded', subject: 'his', chapter: 'Freedom Struggle' },
  { date: '1907', event: 'Surat Split - Moderates vs Extremists', subject: 'his', chapter: 'Freedom Struggle' },
  { date: '1909', event: 'Morley-Minto Reforms', subject: 'his', chapter: 'Freedom Struggle' },
  { date: '1916', event: 'Lucknow Pact', subject: 'his', chapter: 'Freedom Struggle' },
  { date: '1919', event: 'Jallianwala Bagh massacre', subject: 'his', chapter: 'Non-Cooperation' },
  { date: '1919', event: 'Rowlatt Act passed', subject: 'his', chapter: 'Freedom Struggle' },
  { date: '1920', event: 'Non-Cooperation Movement', subject: 'his', chapter: 'Freedom Struggle' },
  { date: '1922', event: 'Chauri Chaura incident', subject: 'his', chapter: 'Non-Cooperation' },
  { date: '1928', event: 'Simon Commission boycotted', subject: 'his', chapter: 'Freedom Struggle' },
  { date: '1929', event: 'Lahore Congress - Purna Swaraj', subject: 'his', chapter: 'Freedom Struggle' },
  { date: '1930', event: 'Civil Disobedience Movement / Dandi March', subject: 'his', chapter: 'Salt Satyagraha' },
  { date: '1931', event: 'Gandhi-Irwin Pact', subject: 'his', chapter: 'Freedom Struggle' },
  { date: '1935', event: 'Government of India Act', subject: 'his', chapter: 'Freedom Struggle' },
  { date: '1942', event: 'Quit India Movement', subject: 'his', chapter: 'Final Push' },
  { date: '1943', event: 'Azad Hind Fauj formed by Subhas Bose', subject: 'his', chapter: 'Freedom Struggle' },
  { date: '1946', event: 'Cabinet Mission Plan', subject: 'his', chapter: 'Partition' },
  { date: '1947', event: 'Indian Independence', subject: 'his', chapter: 'Decolonisation' },
  
  // History - World Wars
  { date: '1914', event: 'World War I began', subject: 'his', chapter: 'World War I' },
  { date: '1917', event: 'Russian Revolution', subject: 'his', chapter: 'World War I' },
  { date: '1918', event: 'World War I ended', subject: 'his', chapter: 'World War I' },
  { date: '1919', event: 'Treaty of Versailles', subject: 'his', chapter: 'World War I' },
  { date: '1929', event: 'Great Depression began', subject: 'his', chapter: 'Between Wars' },
  { date: '1933', event: 'Hitler became Chancellor of Germany', subject: 'his', chapter: 'Rise of Fascism' },
  { date: '1939', event: 'World War II began', subject: 'his', chapter: 'World War II' },
  { date: '1941', event: 'Pearl Harbor attack', subject: 'his', chapter: 'World War II' },
  { date: '1945', event: 'Atomic bombs on Japan / WWII ended', subject: 'his', chapter: 'World War II' },
  { date: '1945', event: 'United Nations founded', subject: 'his', chapter: 'Post War' },
  
  // History - Cold War & Modern
  { date: '1947', event: 'Truman Doctrine - Cold War begins', subject: 'his', chapter: 'Cold War' },
  { date: '1948', event: 'Marshall Plan for Europe', subject: 'his', chapter: 'Cold War' },
  { date: '1949', event: 'NATO formed', subject: 'his', chapter: 'Cold War' },
  { date: '1950', event: 'Republic of India formed', subject: 'his', chapter: 'Political Integration' },
  { date: '1955', event: 'Bandung Conference - NAM origins', subject: 'his', chapter: 'Decolonisation' },
  { date: '1961', event: 'NAM officially formed (Belgrade)', subject: 'his', chapter: 'Cold War' },
  { date: '1962', event: 'Cuban Missile Crisis', subject: 'his', chapter: 'Cold War' },
  
  // Political Science dates
  { date: '1945', event: 'United Nations established', subject: 'pol', chapter: 'International Organizations' },
  { date: '1948', event: 'UDHR adopted', subject: 'pol', chapter: 'Human Rights' },
  { date: '1949', event: 'Indian Constitution drafted', subject: 'pol', chapter: 'Good Governance' },
  { date: '1985', event: 'SAARC formed', subject: 'pol', chapter: 'Regional Organizations' },
  { date: '1989', event: 'Berlin Wall fell', subject: 'pol', chapter: 'World since 1991' },
  { date: '1991', event: 'USSR disintegrated', subject: 'pol', chapter: 'World since 1991' },
  { date: '1991', event: 'LPG reforms in India', subject: 'pol', chapter: 'Globalisation' },
  { date: '1992', event: 'Maastricht Treaty (EU)', subject: 'pol', chapter: 'Globalisation' },
  { date: '1995', event: 'WTO established', subject: 'pol', chapter: 'Globalisation' },
  { date: '2001', event: '9/11 attacks', subject: 'pol', chapter: 'World since 1991' },
  { date: '2005', event: 'RTI Act passed', subject: 'pol', chapter: 'Good Governance' },
  { date: '2006', event: 'BRICS concept coined', subject: 'pol', chapter: 'Globalisation' },
  { date: '2013', event: 'Lokpal Act passed', subject: 'pol', chapter: 'Good Governance' },
  { date: '2014', event: 'Digital India launched', subject: 'pol', chapter: 'Good Governance' },
  { date: '2023', event: 'India hosted G20 Summit', subject: 'pol', chapter: 'Globalisation' },
  
  // Economics dates
  { date: '1935', event: 'RBI established', subject: 'eco', chapter: 'Money Market' },
  { date: '1969', event: 'Bank nationalization', subject: 'eco', chapter: 'Money Market' },
  { date: '1991', event: 'Economic liberalization (LPG)', subject: 'eco', chapter: 'Indian Economy' },
  { date: '1992', event: 'SEBI established', subject: 'eco', chapter: 'Capital Market' },
  { date: '2014', event: 'Jan Dhan Yojana launched', subject: 'eco', chapter: 'Financial Inclusion' },
  { date: '2016', event: 'Demonetization', subject: 'eco', chapter: 'Money Market' },
  { date: '2017', event: 'GST implemented', subject: 'eco', chapter: 'Public Finance' },
  { date: '2020', event: 'Atmanirbhar Bharat announced', subject: 'eco', chapter: 'Indian Economy' },
];

const WRITING_FORMATS = [
  // English Writing Formats
  {
    subject: 'eng',
    title: '8-Mark Answer Format',
    format: '1. Introduction (1 mark)\n2. Main Points - 5-6 (5-6 marks)\n3. Conclusion (1 mark)\n\nTotal: ~200 words',
  },
  {
    subject: 'eng',
    title: 'Summary Writing',
    format: '1. Read passage twice\n2. Identify main ideas\n3. Write 1/3rd of original\n4. Use your own words\n5. Keep title simple',
  },
  {
    subject: 'eng',
    title: 'Poetry Appreciation',
    format: '1. Title & Poet\n2. Theme/Central Idea\n3. Figures of Speech used\n4. Rhyme Scheme\n5. Tone & Mood\n6. Personal Response',
  },
  {
    subject: 'eng',
    title: 'Character Sketch',
    format: '1. Introduction to character\n2. Physical description\n3. Mental traits\n4. Role in story\n5. Relationship with others\n6. Your opinion',
  },
  {
    subject: 'eng',
    title: 'Notice Writing',
    format: '┌─────────────────┐\n│    NOTICE      │\n│  Date: ___     │\n│  Title         │\n│  What, When,   │\n│  Where, Who    │\n│  Signature     │\n└─────────────────┘',
  },
  {
    subject: 'eng',
    title: 'Appeal Writing',
    format: '1. Catchy Title/Headline\n2. Purpose of appeal\n3. Emotional content\n4. Facts & figures\n5. Call to action\n6. Contact details',
  },
  
  // Hindi Writing Formats
  {
    subject: 'hin',
    title: 'निबंध लेखन',
    format: '1. प्रस्तावना (25 शब्द)\n2. विषय विस्तार (150 शब्द)\n3. उपसंहार (25 शब्द)\n\nकुल: ~200 शब्द\n\n💡 प्रस्तावना में कविता/सुविचार डालें',
  },
  {
    subject: 'hin',
    title: 'पत्र लेखन प्रारूप',
    format: '1. पता और दिनांक (दाएं)\n2. संबोधन\n3. विषय\n4. मुख्य भाग\n5. समापन अभिवादन\n6. हस्ताक्षर',
  },
  {
    subject: 'hin',
    title: 'काव्य सौंदर्य',
    format: '1. भाव सौंदर्य:\n   - मूल भाव\n   - केंद्रीय विचार\n2. शिल्प सौंदर्य:\n   - छंद, अलंकार\n   - भाषा शैली\n   - बिम्ब, प्रतीक',
  },
  {
    subject: 'hin',
    title: 'संवाद लेखन',
    format: '1. स्थान-समय निर्धारण\n2. पात्र परिचय\n3. संवाद (बोलचाल की भाषा)\n4. क्रमबद्धता\n5. स्वाभाविकता',
  },
  {
    subject: 'hin',
    title: 'सारांश लेखन',
    format: '1. मूल विषय पहचानें\n2. मुख्य बिंदु चुनें\n3. 1/3 शब्दों में लिखें\n4. अपने शब्दों में लिखें\n5. उचित शीर्षक दें',
  },
  
  // History Writing Formats
  {
    subject: 'his',
    title: 'Movement/Event Analysis',
    format: '1. Background/Causes\n2. Key Events (Timeline)\n3. Leaders involved\n4. Methods used\n5. Results/Impact\n6. Significance',
  },
  {
    subject: 'his',
    title: 'Compare & Contrast',
    format: '| Aspect | Topic A | Topic B |\n|--------|---------|----------|\n| Origin | | |\n| Causes | | |\n| Nature | | |\n| Impact | | |\n| Leaders | | |',
  },
  {
    subject: 'his',
    title: 'Person Analysis',
    format: '1. Early life\n2. Role in movement\n3. Ideology/Philosophy\n4. Major contributions\n5. Legacy/Impact\n6. Quotes (if any)',
  },
  
  // Political Science Writing Formats
  {
    subject: 'pol',
    title: 'Distinguish Between Format',
    format: '| Point | Concept A | Concept B |\n|-------|-----------|----------|\n| 1. Definition | ... | ... |\n| 2. Scope | ... | ... |\n| 3. Example | ... | ... |\n| 4. Nature | ... | ... |',
  },
  {
    subject: 'pol',
    title: 'Organization Analysis',
    format: '1. Full form & Headquarters\n2. Founded (Year & Founder)\n3. Member countries\n4. Objectives\n5. Main functions\n6. Recent activities\n7. India\'s role',
  },
  {
    subject: 'pol',
    title: 'Concept Explanation',
    format: '1. Definition\n2. Origin/Background\n3. Key features\n4. Importance\n5. Examples\n6. Indian context',
  },
  
  // Economics Writing Formats
  {
    subject: 'eco',
    title: 'Numerical Answer Format',
    format: '1. Write Given Data\n2. State Formula\n3. Substitute Values\n4. Calculate Step-by-Step\n5. Write Answer with Units\n\n💡 Box the final answer',
  },
  {
    subject: 'eco',
    title: 'Concept Explanation',
    format: '1. Definition\n2. Formula (if any)\n3. Types/Classification\n4. Examples\n5. Diagram (if applicable)\n6. Importance',
  },
  {
    subject: 'eco',
    title: 'Diagram Questions',
    format: '1. Draw neat diagram\n2. Label all parts clearly\n3. Write explanation below:\n   - X-axis meaning\n   - Y-axis meaning\n   - Curve interpretation\n   - Equilibrium point',
  },
  {
    subject: 'eco',
    title: 'Compare Market Forms',
    format: '| Feature | Perfect | Monopoly | Oligopoly |\n|---------|---------|----------|----------|\n| Sellers | Many | One | Few |\n| Entry | Free | Blocked | Restricted |\n| Price | Market | Self | Interdependent |',
  },
];

const ArtsStudyHub: React.FC<ArtsStudyHubProps> = ({ onClose, onOpenTool, subjects = [], onSelectSubject }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'tips' | 'timeline' | 'formats'>('overview');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');

  const artsSubjects = useMemo(() => {
    const orderMap = new Map(ARTS_SUBJECT_IDS.map((id, index) => [id, index]));
    return subjects
      .filter(s => ARTS_SUBJECT_IDS.includes(s.id))
      .sort((a, b) => (orderMap.get(a.id) ?? 999) - (orderMap.get(b.id) ?? 999));
  }, [subjects]);

  const stats = useMemo(() => {
    let totalChapters = 0;
    let totalMcqs = 0;
    let totalFlashcards = 0;

    artsSubjects.forEach(subject => {
      totalChapters += subject.chapters.length;
      subject.chapters.forEach(ch => {
        totalMcqs += ch.mcqs?.length || 0;
        totalFlashcards += ch.flashcards?.length || 0;
      });
    });

    return { totalChapters, totalMcqs, totalFlashcards, subjectCount: artsSubjects.length };
  }, [artsSubjects]);

  const filteredTips = useMemo(() => 
    selectedSubject === 'all' 
      ? STUDY_TIPS 
      : STUDY_TIPS.filter(t => t.subject === selectedSubject),
    [selectedSubject]
  );

  const filteredDates = useMemo(() =>
    selectedSubject === 'all'
      ? IMPORTANT_DATES
      : IMPORTANT_DATES.filter(d => d.subject === selectedSubject),
    [selectedSubject]
  );

  const filteredFormats = useMemo(() =>
    selectedSubject === 'all'
      ? WRITING_FORMATS
      : WRITING_FORMATS.filter(f => f.subject === selectedSubject),
    [selectedSubject]
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'exam': return Target;
      case 'memory': return Brain;
      case 'writing': return PenTool;
      case 'revision': return Sparkles;
      default: return Star;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'exam': return 'text-red-500 bg-red-100 dark:bg-red-900/30';
      case 'memory': return 'text-purple-500 bg-purple-100 dark:bg-purple-900/30';
      case 'writing': return 'text-blue-500 bg-blue-100 dark:bg-blue-900/30';
      case 'revision': return 'text-green-500 bg-green-100 dark:bg-green-900/30';
      default: return 'text-slate-500 bg-slate-100 dark:bg-slate-800';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-6xl shadow-2xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 text-white flex items-center justify-center">
              <Palette className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold dark:text-white">Arts Study Hub</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Complete dashboard for 12th Maharashtra Board Arts
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
            <X className="w-5 h-5 dark:text-white" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 px-6 py-3 border-b border-slate-200 dark:border-slate-800 shrink-0 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview', icon: GraduationCap },
            { id: 'tips', label: 'Study Tips', icon: Sparkles },
            { id: 'timeline', label: 'Key Dates', icon: Calendar },
            { id: 'formats', label: 'Answer Formats', icon: FileText },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
                  : 'hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-300'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Subject Filter */}
        <div className="px-6 py-3 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => setSelectedSubject('all')}
              className={`px-3 py-1.5 rounded-full text-sm transition whitespace-nowrap ${
                selectedSubject === 'all'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                  : 'bg-slate-100 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              All Subjects
            </button>
            {artsSubjects.map(subject => {
              const Icon = SUBJECT_ICONS[subject.id] || BookOpen;
              return (
                <button
                  key={subject.id}
                  onClick={() => setSelectedSubject(subject.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition whitespace-nowrap ${
                    selectedSubject === subject.id
                      ? `bg-gradient-to-r ${SUBJECT_COLORS[subject.id]} text-white`
                      : 'bg-slate-100 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {subject.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-4 text-white">
                  <div className="text-3xl font-bold">{stats.subjectCount}</div>
                  <div className="text-sm opacity-80">Arts Subjects</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-4 text-white">
                  <div className="text-3xl font-bold">{stats.totalChapters}</div>
                  <div className="text-sm opacity-80">Total Chapters</div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-4 text-white">
                  <div className="text-3xl font-bold">{stats.totalMcqs}</div>
                  <div className="text-sm opacity-80">MCQs Available</div>
                </div>
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-4 text-white">
                  <div className="text-3xl font-bold">{stats.totalFlashcards}</div>
                  <div className="text-sm opacity-80">Flashcards</div>
                </div>
              </div>

              {/* Subject Cards */}
              <div>
                <h3 className="text-lg font-semibold mb-4 dark:text-white">Your Arts Subjects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {artsSubjects.map(subject => {
                    const Icon = SUBJECT_ICONS[subject.id] || BookOpen;
                    const chapterCount = subject.chapters.length;
                    const mcqCount = subject.chapters.reduce((acc, ch) => acc + (ch.mcqs?.length || 0), 0);
                    
                    return (
                      <div
                        key={subject.id}
                        className="border border-slate-200 dark:border-slate-800 rounded-xl p-4 hover:shadow-lg transition cursor-pointer"
                        onClick={() => onSelectSubject?.(subject.id)}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${SUBJECT_COLORS[subject.id]} text-white flex items-center justify-center`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold dark:text-white">{subject.name}</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{chapterCount} chapters</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                          <span className="flex items-center gap-1">
                            <Target className="w-4 h-4" /> {mcqCount} MCQs
                          </span>
                          <span className="flex items-center gap-1">
                            <Zap className="w-4 h-4" /> Ready
                          </span>
                        </div>
                        <div className="mt-3 flex items-center text-sm text-purple-600 dark:text-purple-400">
                          Start studying <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h3 className="text-lg font-semibold mb-4 dark:text-white">Quick Study Actions</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <button className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                    <Flame className="w-6 h-6 text-orange-500" />
                    <span className="text-sm font-medium dark:text-white">Quick Sprint</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                    <Brain className="w-6 h-6 text-purple-500" />
                    <span className="text-sm font-medium dark:text-white">Flashcards</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                    <Trophy className="w-6 h-6 text-amber-500" />
                    <span className="text-sm font-medium dark:text-white">Mock Test</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                    <TrendingUp className="w-6 h-6 text-green-500" />
                    <span className="text-sm font-medium dark:text-white">Progress</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tips' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {['exam', 'memory', 'writing', 'revision'].map(cat => {
                  const Icon = getCategoryIcon(cat);
                  const count = filteredTips.filter(t => t.category === cat).length;
                  return (
                    <div key={cat} className={`p-3 rounded-xl ${getCategoryColor(cat)}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4" />
                        <span className="text-sm font-medium capitalize">{cat}</span>
                      </div>
                      <div className="text-2xl font-bold">{count}</div>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-3">
                {filteredTips.map(tip => {
                  const subject = artsSubjects.find(s => s.id === tip.subject);
                  const Icon = getCategoryIcon(tip.category);
                  return (
                    <div key={tip.id} className="border border-slate-200 dark:border-slate-800 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${getCategoryColor(tip.category)}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${SUBJECT_COLORS[tip.subject]} text-white`}>
                              {subject?.name}
                            </span>
                            <span className="text-xs text-slate-500 dark:text-slate-400 capitalize">{tip.category}</span>
                          </div>
                          <p className="text-sm dark:text-slate-200">{tip.tip}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-4 text-white mb-6">
                <h3 className="font-semibold mb-1">📅 Key Dates for Board Exam</h3>
                <p className="text-sm opacity-90">
                  These dates are frequently asked in History and Political Science. 
                  Memorize them with events and significance!
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />
                
                {filteredDates.map((item, index) => {
                  const subject = artsSubjects.find(s => s.id === item.subject);
                  return (
                    <div key={index} className="relative pl-10 pb-6">
                      <div className={`absolute left-2 w-5 h-5 rounded-full bg-gradient-to-br ${SUBJECT_COLORS[item.subject]} flex items-center justify-center`}>
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg font-bold text-slate-900 dark:text-white">{item.date}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${SUBJECT_COLORS[item.subject]} text-white`}>
                            {subject?.name}
                          </span>
                        </div>
                        <p className="text-sm dark:text-slate-200">{item.event}</p>
                        {item.chapter && (
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                            Chapter: {item.chapter}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'formats' && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl p-4 text-white mb-6">
                <h3 className="font-semibold mb-1">✍️ Answer Writing Formats</h3>
                <p className="text-sm opacity-90">
                  Following proper formats can add 2-3 extra marks per question. 
                  Practice these structures!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredFormats.map((format, index) => {
                  const subject = artsSubjects.find(s => s.id === format.subject);
                  return (
                    <div key={index} className="border border-slate-200 dark:border-slate-800 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <PenTool className="w-5 h-5 text-blue-500" />
                        <h4 className="font-semibold dark:text-white">{format.title}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${SUBJECT_COLORS[format.subject]} text-white`}>
                          {subject?.name}
                        </span>
                      </div>
                      <pre className="text-sm bg-slate-50 dark:bg-slate-800 rounded-lg p-3 whitespace-pre-wrap font-mono text-slate-700 dark:text-slate-300">
                        {format.format}
                      </pre>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtsStudyHub;
