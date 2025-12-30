import React, { useState, useMemo, useEffect } from 'react';
import { 
  X, History, Calendar, Clock, MapPin, User, Flag, 
  ChevronLeft, ChevronRight, Sparkles, Target, BookOpen,
  Play, Pause, RotateCcw, Trophy, Star
} from 'lucide-react';
import { Subject } from '../types';

interface HistoryTimelineQuizProps {
  onClose: () => void;
  subjects?: Subject[];
}

interface TimelineEvent {
  id: string;
  year: string;
  event: string;
  details: string;
  category: 'world' | 'indian' | 'political' | 'economic' | 'social';
  chapter: string;
  importance: 'high' | 'medium' | 'low';
  relatedPersons?: string[];
  location?: string;
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  // Renaissance and Discoveries (Chapter 1-2)
  { id: 'e1', year: '1440', event: 'Printing Press invented', details: 'Johannes Gutenberg invented movable type printing in Germany', category: 'world', chapter: 'Renaissance', importance: 'high', location: 'Germany', relatedPersons: ['Gutenberg'] },
  { id: 'e2', year: '1453', event: 'Fall of Constantinople', details: 'Ottoman Turks captured Constantinople, ending Byzantine Empire', category: 'world', chapter: 'Renaissance', importance: 'high', location: 'Constantinople' },
  { id: 'e3', year: '1492', event: 'Columbus discovered America', details: 'Christopher Columbus reached the Americas, sponsored by Spain', category: 'world', chapter: 'Geographical Discoveries', importance: 'high', relatedPersons: ['Columbus', 'Queen Isabella'], location: 'America' },
  { id: 'e4', year: '1498', event: 'Vasco da Gama reached India', details: 'Portuguese explorer arrived at Calicut, opening sea route to India', category: 'world', chapter: 'European Colonialism', importance: 'high', location: 'Calicut', relatedPersons: ['Vasco da Gama'] },
  { id: 'e5', year: '1517', event: 'Protestant Reformation began', details: 'Martin Luther posted 95 Theses at Wittenberg church', category: 'world', chapter: 'Renaissance', importance: 'high', relatedPersons: ['Martin Luther'], location: 'Wittenberg' },
  { id: 'e6', year: '1519', event: 'Magellan started circumnavigation', details: 'First voyage around the world proving Earth is round', category: 'world', chapter: 'Geographical Discoveries', importance: 'medium', relatedPersons: ['Magellan'] },
  { id: 'e7', year: '1543', event: 'Copernican Revolution', details: 'Copernicus published heliocentric theory', category: 'world', chapter: 'Renaissance', importance: 'high', relatedPersons: ['Copernicus'] },
  
  // European Colonialism (Chapter 3-4)
  { id: 'e8', year: '1510', event: 'Portuguese captured Goa', details: 'Albuquerque captured Goa, became Portuguese headquarters', category: 'indian', chapter: 'European Colonialism', importance: 'high', location: 'Goa', relatedPersons: ['Albuquerque'] },
  { id: 'e9', year: '1600', event: 'British East India Company formed', details: 'EIC established with royal charter to trade with East', category: 'indian', chapter: 'European Colonialism', importance: 'high', location: 'London' },
  { id: 'e10', year: '1602', event: 'Dutch East India Company formed', details: 'VOC established, became most powerful trading company', category: 'world', chapter: 'European Colonialism', importance: 'medium' },
  { id: 'e11', year: '1664', event: 'French East India Company formed', details: 'Colbert founded French company for trade', category: 'world', chapter: 'European Colonialism', importance: 'medium', relatedPersons: ['Colbert'] },
  { id: 'e12', year: '1757', event: 'Battle of Plassey', details: 'Robert Clive defeated Siraj-ud-Daulah with Mir Jafar\'s help', category: 'indian', chapter: 'India and European Colonialism', importance: 'high', location: 'Bengal', relatedPersons: ['Robert Clive', 'Siraj ud-Daulah', 'Mir Jafar'] },
  { id: 'e13', year: '1764', event: 'Battle of Buxar', details: 'British defeated combined forces of Bengal, Awadh, Mughals', category: 'indian', chapter: 'India and European Colonialism', importance: 'high', location: 'Buxar' },
  { id: 'e14', year: '1765', event: 'Diwani Rights granted', details: 'EIC got revenue collection rights of Bengal, Bihar, Odisha', category: 'indian', chapter: 'India and European Colonialism', importance: 'high' },
  { id: 'e15', year: '1773', event: 'Regulating Act', details: 'First British Parliament act to regulate Company affairs', category: 'indian', chapter: 'India and European Colonialism', importance: 'medium' },
  { id: 'e16', year: '1784', event: 'Pitt\'s India Act', details: 'Established dual control over Company', category: 'indian', chapter: 'India and European Colonialism', importance: 'medium' },
  { id: 'e17', year: '1793', event: 'Permanent Settlement', details: 'Cornwallis fixed land revenue with Zamindars in Bengal', category: 'indian', chapter: 'British Land Policies', importance: 'high', relatedPersons: ['Cornwallis'] },
  
  // Marathas and Regional Powers
  { id: 'e18', year: '1674', event: 'Shivaji crowned Chhatrapati', details: 'Maratha Empire formally established at Raigad', category: 'indian', chapter: 'Colonialism and Marathas', importance: 'high', location: 'Raigad', relatedPersons: ['Shivaji Maharaj'] },
  { id: 'e19', year: '1761', event: 'Third Battle of Panipat', details: 'Marathas defeated by Ahmad Shah Abdali, major setback', category: 'indian', chapter: 'Colonialism and Marathas', importance: 'high', location: 'Panipat', relatedPersons: ['Ahmad Shah Abdali'] },
  { id: 'e20', year: '1799', event: 'Death of Tipu Sultan', details: 'Fourth Anglo-Mysore War, Tipu died defending Srirangapatna', category: 'indian', chapter: 'British Expansion', importance: 'high', location: 'Srirangapatna', relatedPersons: ['Tipu Sultan'] },
  { id: 'e21', year: '1818', event: 'Fall of Maratha Empire', details: 'British defeated Peshwa Bajirao II, end of Maratha power', category: 'indian', chapter: 'Colonialism and Marathas', importance: 'high', relatedPersons: ['Bajirao II'] },
  { id: 'e22', year: '1849', event: 'Annexation of Punjab', details: 'British defeated Sikhs, Punjab annexed', category: 'indian', chapter: 'British Expansion', importance: 'high', location: 'Punjab' },
  
  // French Revolution (Chapter 5)
  { id: 'e23', year: '1776', event: 'American Independence', details: 'Declaration of Independence, inspired world revolutions', category: 'world', chapter: 'Age of Revolutions', importance: 'high', location: 'America' },
  { id: 'e24', year: '1789', event: 'French Revolution began', details: 'Fall of Bastille, end of monarchy began', category: 'world', chapter: 'French Revolution', importance: 'high', location: 'Paris' },
  { id: 'e25', year: '1791', event: 'Declaration of Rights of Man', details: 'French National Assembly proclaimed human rights', category: 'political', chapter: 'French Revolution', importance: 'high' },
  { id: 'e26', year: '1793', event: 'Reign of Terror began', details: 'Robespierre\'s radical phase, mass executions', category: 'political', chapter: 'French Revolution', importance: 'high', relatedPersons: ['Robespierre'] },
  { id: 'e27', year: '1804', event: 'Napoleon became Emperor', details: 'Napoleon crowned himself Emperor of France', category: 'political', chapter: 'French Revolution', importance: 'high', relatedPersons: ['Napoleon'] },
  { id: 'e28', year: '1815', event: 'Battle of Waterloo', details: 'Napoleon finally defeated, exiled to St. Helena', category: 'world', chapter: 'French Revolution', importance: 'high', location: 'Waterloo', relatedPersons: ['Napoleon', 'Wellington'] },
  
  // Industrial Revolution (Chapter 6)
  { id: 'e29', year: '1760', event: 'Industrial Revolution began', details: 'Transition from agriculture to industry in Britain', category: 'economic', chapter: 'Industrial Revolution', importance: 'high', location: 'Britain' },
  { id: 'e30', year: '1769', event: 'James Watt improved steam engine', details: 'Made steam engine efficient, revolutionized industry', category: 'economic', chapter: 'Industrial Revolution', importance: 'high', relatedPersons: ['James Watt'] },
  { id: 'e31', year: '1825', event: 'First public railway', details: 'Stockton to Darlington railway opened', category: 'economic', chapter: 'Industrial Revolution', importance: 'medium', location: 'England' },
  { id: 'e32', year: '1848', event: 'Communist Manifesto published', details: 'Marx and Engels published revolutionary text', category: 'political', chapter: 'Industrial Revolution', importance: 'high', relatedPersons: ['Karl Marx', 'Engels'] },
  
  // Imperialism (Chapter 7)
  { id: 'e33', year: '1869', event: 'Suez Canal opened', details: 'Connected Mediterranean to Red Sea, strategic importance', category: 'world', chapter: 'Imperialism', importance: 'high', location: 'Egypt' },
  { id: 'e34', year: '1884', event: 'Berlin Conference', details: 'European powers divided Africa (Scramble for Africa)', category: 'world', chapter: 'Imperialism', importance: 'high', location: 'Berlin' },
  { id: 'e35', year: '1899', event: 'Boxer Rebellion began', details: 'Chinese uprising against foreign influence', category: 'world', chapter: 'Imperialism', importance: 'medium', location: 'China' },
  
  // Social and Religious Reforms in India
  { id: 'e36', year: '1828', event: 'Brahmo Samaj founded', details: 'Raja Ram Mohan Roy founded reform movement', category: 'social', chapter: 'Social Reforms', importance: 'high', relatedPersons: ['Raja Ram Mohan Roy'], location: 'Calcutta' },
  { id: 'e37', year: '1829', event: 'Sati abolished', details: 'Lord William Bentinck banned Sati practice', category: 'social', chapter: 'Social Reforms', importance: 'high', relatedPersons: ['Raja Ram Mohan Roy', 'Lord Bentinck'] },
  { id: 'e38', year: '1848', event: 'Satya Shodhak Samaj', details: 'Jyotiba Phule started movement against caste discrimination', category: 'social', chapter: 'Social Reforms', importance: 'high', relatedPersons: ['Jyotiba Phule'], location: 'Pune' },
  { id: 'e39', year: '1856', event: 'Widow Remarriage Act', details: 'Hindu Widow Remarriage Act passed, Ishwar Chandra Vidyasagar\'s efforts', category: 'social', chapter: 'Social Reforms', importance: 'high', relatedPersons: ['Ishwar Chandra Vidyasagar'] },
  { id: 'e40', year: '1875', event: 'Arya Samaj founded', details: 'Swami Dayanand Saraswati started Vedic reform', category: 'social', chapter: 'Social Reforms', importance: 'high', relatedPersons: ['Dayanand Saraswati'], location: 'Bombay' },
  { id: 'e41', year: '1897', event: 'Ramakrishna Mission founded', details: 'Swami Vivekananda founded humanitarian organization', category: 'social', chapter: 'Social Reforms', importance: 'high', relatedPersons: ['Swami Vivekananda'], location: 'Calcutta' },
  
  // Freedom Struggle (Chapters 8-10)
  { id: 'e42', year: '1857', event: 'First War of Independence', details: 'Sepoy Mutiny/Revolt at Meerut spread across India', category: 'indian', chapter: 'Struggle against Colonialism', importance: 'high', location: 'Meerut' },
  { id: 'e43', year: '1858', event: 'Government of India Act', details: 'British Crown took direct control from Company', category: 'indian', chapter: 'Struggle against Colonialism', importance: 'high' },
  { id: 'e44', year: '1876', event: 'Queen Victoria - Empress of India', details: 'Queen declared Empress, symbolizing British supremacy', category: 'indian', chapter: 'British Rule', importance: 'medium' },
  { id: 'e45', year: '1885', event: 'Indian National Congress founded', details: 'First session at Bombay, W.C. Bonnerjee first president', category: 'indian', chapter: 'National Movement', importance: 'high', location: 'Bombay', relatedPersons: ['A.O. Hume', 'W.C. Bonnerjee'] },
  { id: 'e46', year: '1905', event: 'Partition of Bengal', details: 'Curzon divided Bengal, sparked Swadeshi Movement', category: 'indian', chapter: 'Freedom Struggle', importance: 'high', relatedPersons: ['Lord Curzon'] },
  { id: 'e47', year: '1906', event: 'Muslim League founded', details: 'All India Muslim League formed at Dhaka', category: 'indian', chapter: 'Freedom Struggle', importance: 'high', location: 'Dhaka' },
  { id: 'e48', year: '1907', event: 'Surat Split', details: 'Congress split into Moderates and Extremists', category: 'indian', chapter: 'Freedom Struggle', importance: 'medium', location: 'Surat' },
  { id: 'e49', year: '1909', event: 'Morley-Minto Reforms', details: 'Indian Councils Act introduced separate electorates', category: 'indian', chapter: 'Freedom Struggle', importance: 'medium' },
  { id: 'e50', year: '1916', event: 'Lucknow Pact', details: 'Congress-Muslim League unity, joint demands', category: 'indian', chapter: 'Freedom Struggle', importance: 'high', location: 'Lucknow' },
  { id: 'e51', year: '1917', event: 'Champaran Satyagraha', details: 'Gandhi\'s first civil disobedience in India', category: 'indian', chapter: 'Freedom Struggle', importance: 'high', location: 'Champaran', relatedPersons: ['Mahatma Gandhi'] },
  { id: 'e52', year: '1919', event: 'Rowlatt Act passed', details: 'Repressive law allowing detention without trial', category: 'indian', chapter: 'Freedom Struggle', importance: 'high' },
  { id: 'e53', year: '1919', event: 'Jallianwala Bagh Massacre', details: 'General Dyer killed hundreds of unarmed civilians', category: 'indian', chapter: 'Freedom Struggle', importance: 'high', location: 'Amritsar', relatedPersons: ['General Dyer'] },
  { id: 'e54', year: '1920', event: 'Non-Cooperation Movement', details: 'Gandhi\'s first mass movement against British', category: 'indian', chapter: 'Freedom Struggle', importance: 'high', relatedPersons: ['Mahatma Gandhi'] },
  { id: 'e55', year: '1922', event: 'Chauri Chaura incident', details: 'Violence led Gandhi to suspend movement', category: 'indian', chapter: 'Freedom Struggle', importance: 'medium', location: 'Chauri Chaura' },
  { id: 'e56', year: '1928', event: 'Simon Commission boycotted', details: '"Simon Go Back" - All-white commission rejected', category: 'indian', chapter: 'Freedom Struggle', importance: 'high' },
  { id: 'e57', year: '1929', event: 'Lahore Congress - Purna Swaraj', details: 'Declaration of complete independence demand', category: 'indian', chapter: 'Freedom Struggle', importance: 'high', location: 'Lahore' },
  { id: 'e58', year: '1930', event: 'Dandi March / Salt Satyagraha', details: 'Gandhi walked 390 km to make salt, broke British law', category: 'indian', chapter: 'Freedom Struggle', importance: 'high', location: 'Dandi', relatedPersons: ['Mahatma Gandhi'] },
  { id: 'e59', year: '1931', event: 'Gandhi-Irwin Pact', details: 'Agreement to release political prisoners', category: 'indian', chapter: 'Freedom Struggle', importance: 'medium', relatedPersons: ['Gandhi', 'Lord Irwin'] },
  { id: 'e60', year: '1935', event: 'Government of India Act', details: 'Provided provincial autonomy, federal structure', category: 'indian', chapter: 'Freedom Struggle', importance: 'high' },
  { id: 'e61', year: '1942', event: 'Quit India Movement', details: '"Do or Die" - August Kranti, final push', category: 'indian', chapter: 'Freedom Struggle', importance: 'high', relatedPersons: ['Mahatma Gandhi'] },
  { id: 'e62', year: '1943', event: 'Azad Hind Fauj / INA', details: 'Subhas Chandra Bose formed army to fight British', category: 'indian', chapter: 'Freedom Struggle', importance: 'high', relatedPersons: ['Subhas Chandra Bose'] },
  { id: 'e63', year: '1946', event: 'Cabinet Mission', details: 'British plan for independent India', category: 'indian', chapter: 'Partition', importance: 'medium' },
  { id: 'e64', year: '1947', event: 'Indian Independence', details: 'India became independent on August 15', category: 'indian', chapter: 'Decolonisation', importance: 'high' },
  { id: 'e65', year: '1948', event: 'Gandhi assassinated', details: 'Mahatma Gandhi shot by Nathuram Godse', category: 'indian', chapter: 'Post Independence', importance: 'high', relatedPersons: ['Mahatma Gandhi', 'Nathuram Godse'] },
  { id: 'e66', year: '1950', event: 'Republic Day', details: 'Constitution came into effect on January 26', category: 'indian', chapter: 'Political Integration', importance: 'high' },
  
  // World Wars (Chapter 11)
  { id: 'e67', year: '1914', event: 'World War I began', details: 'Assassination of Archduke Franz Ferdinand triggered war', category: 'world', chapter: 'World Wars', importance: 'high', location: 'Sarajevo' },
  { id: 'e68', year: '1917', event: 'Russian Revolution', details: 'Bolsheviks overthrew Czar, Lenin came to power', category: 'political', chapter: 'World Wars', importance: 'high', location: 'Russia', relatedPersons: ['Lenin'] },
  { id: 'e69', year: '1917', event: 'USA entered WWI', details: 'America joined Allied Powers', category: 'world', chapter: 'World Wars', importance: 'high' },
  { id: 'e70', year: '1918', event: 'World War I ended', details: 'Armistice signed on November 11', category: 'world', chapter: 'World Wars', importance: 'high' },
  { id: 'e71', year: '1919', event: 'Treaty of Versailles', details: 'Peace treaty, Germany punished, League of Nations formed', category: 'political', chapter: 'World Wars', importance: 'high', location: 'Versailles' },
  { id: 'e72', year: '1929', event: 'Great Depression began', details: 'Wall Street crash led to global economic crisis', category: 'economic', chapter: 'Between Wars', importance: 'high', location: 'USA' },
  { id: 'e73', year: '1933', event: 'Hitler became Chancellor', details: 'Nazi Party rose to power in Germany', category: 'political', chapter: 'Rise of Fascism', importance: 'high', location: 'Germany', relatedPersons: ['Hitler'] },
  { id: 'e74', year: '1939', event: 'World War II began', details: 'Germany invaded Poland', category: 'world', chapter: 'World Wars', importance: 'high', location: 'Poland' },
  { id: 'e75', year: '1941', event: 'Pearl Harbor attack', details: 'Japan attacked USA, America entered WWII', category: 'world', chapter: 'World Wars', importance: 'high', location: 'Pearl Harbor' },
  { id: 'e76', year: '1945', event: 'Atomic bombs dropped', details: 'USA bombed Hiroshima and Nagasaki', category: 'world', chapter: 'World Wars', importance: 'high', location: 'Japan' },
  { id: 'e77', year: '1945', event: 'United Nations formed', details: 'International organization for world peace', category: 'political', chapter: 'Post War', importance: 'high' },
  
  // Cold War and Decolonisation (Chapter 12)
  { id: 'e78', year: '1947', event: 'Truman Doctrine', details: 'USA policy to contain communism, Cold War began', category: 'political', chapter: 'Cold War', importance: 'high', relatedPersons: ['Truman'] },
  { id: 'e79', year: '1948', event: 'Marshall Plan', details: 'USA economic aid to rebuild Europe', category: 'economic', chapter: 'Cold War', importance: 'high' },
  { id: 'e80', year: '1949', event: 'NATO formed', details: 'North Atlantic Treaty Organization - Western alliance', category: 'political', chapter: 'Cold War', importance: 'high' },
  { id: 'e81', year: '1955', event: 'Warsaw Pact formed', details: 'Communist military alliance against NATO', category: 'political', chapter: 'Cold War', importance: 'high' },
  { id: 'e82', year: '1955', event: 'Bandung Conference', details: 'Afro-Asian nations met, NAM origins', category: 'political', chapter: 'Decolonisation', importance: 'high', location: 'Indonesia' },
  { id: 'e83', year: '1961', event: 'NAM formally established', details: 'Non-Aligned Movement formed at Belgrade', category: 'political', chapter: 'Decolonisation', importance: 'high', location: 'Belgrade' },
  { id: 'e84', year: '1961', event: 'Berlin Wall built', details: 'Symbol of Cold War division between East and West', category: 'political', chapter: 'Cold War', importance: 'high', location: 'Berlin' },
  { id: 'e85', year: '1962', event: 'Cuban Missile Crisis', details: 'Closest Cold War came to nuclear war', category: 'political', chapter: 'Cold War', importance: 'high', location: 'Cuba' },
  { id: 'e86', year: '1989', event: 'Berlin Wall fell', details: 'Symbol of Cold War ending, Germany reunification began', category: 'political', chapter: 'Cold War', importance: 'high', location: 'Berlin' },
  { id: 'e87', year: '1991', event: 'USSR disintegrated', details: 'Soviet Union dissolved, Cold War ended', category: 'political', chapter: 'World since 1991', importance: 'high' },
  
  // Modern India (Chapter: India Transformed)
  { id: 'e88', year: '1991', event: 'Economic Liberalization', details: 'LPG reforms opened Indian economy to world', category: 'economic', chapter: 'India Transformed', importance: 'high', relatedPersons: ['Manmohan Singh', 'P.V. Narasimha Rao'] },
  { id: 'e89', year: '1998', event: 'Pokhran-II nuclear tests', details: 'India conducted nuclear tests', category: 'indian', chapter: 'India Transformed', importance: 'high', location: 'Pokhran' },
  { id: 'e90', year: '2008', event: 'Chandrayaan-1 launched', details: 'India\'s first lunar mission', category: 'indian', chapter: 'India Transformed', importance: 'medium' },
];

const CATEGORY_COLORS: Record<string, string> = {
  world: 'bg-blue-500',
  indian: 'bg-orange-500',
  political: 'bg-red-500',
  economic: 'bg-green-500',
  social: 'bg-purple-500',
};

const CATEGORY_LABELS: Record<string, string> = {
  world: 'World History',
  indian: 'Indian History',
  political: 'Political',
  economic: 'Economic',
  social: 'Social Reform',
};

type QuizMode = 'learn' | 'quiz' | 'results';

const HistoryTimelineQuiz: React.FC<HistoryTimelineQuizProps> = ({ subjects, onClose }) => {
  const [mode, setMode] = useState<QuizMode>('learn');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<TimelineEvent[]>([]);

  const filteredEvents = useMemo(() => {
    let events = [...TIMELINE_EVENTS];
    if (selectedCategory !== 'all') {
      events = events.filter(e => e.category === selectedCategory);
    }
    return events.sort((a, b) => {
      const yearA = parseInt(a.year.split('-')[0]);
      const yearB = parseInt(b.year.split('-')[0]);
      return yearA - yearB;
    });
  }, [selectedCategory]);

  const currentEvent = filteredEvents[currentIndex];

  // Auto-play for learn mode
  useEffect(() => {
    if (!isAutoPlay || mode !== 'learn') return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % filteredEvents.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlay, mode, filteredEvents.length]);

  const startQuiz = () => {
    // Randomly select 10 events for quiz
    const shuffled = [...filteredEvents].sort(() => Math.random() - 0.5);
    setQuizQuestions(shuffled.slice(0, Math.min(10, shuffled.length)));
    setCurrentIndex(0);
    setQuizAnswers({});
    setScore(0);
    setMode('quiz');
  };

  const handleQuizAnswer = (answer: string) => {
    const current = quizQuestions[currentIndex];
    const isCorrect = answer === current.year;
    
    setQuizAnswers(prev => ({ ...prev, [current.id]: answer }));
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    setShowAnswer(true);
    
    setTimeout(() => {
      setShowAnswer(false);
      if (currentIndex < quizQuestions.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setMode('results');
      }
    }, 2000);
  };

  const generateOptions = (correctYear: string): string[] => {
    const baseYear = parseInt(correctYear.split('-')[0]);
    const options = new Set<string>();
    options.add(correctYear);
    
    while (options.size < 4) {
      const offset = Math.floor(Math.random() * 50) - 25;
      const newYear = String(baseYear + offset);
      if (newYear !== correctYear && parseInt(newYear) > 1400) {
        options.add(newYear);
      }
    }
    
    return Array.from(options).sort(() => Math.random() - 0.5);
  };

  const getImportanceStars = (importance: string) => {
    switch (importance) {
      case 'high': return 3;
      case 'medium': return 2;
      case 'low': return 1;
      default: return 1;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-4xl shadow-2xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center">
              <History className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold dark:text-white">History Timeline Quiz</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Master important dates for HSC exam
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
            <X className="w-5 h-5 dark:text-white" />
          </button>
        </div>

        {/* Category Filter */}
        <div className="px-6 py-3 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => { setSelectedCategory('all'); setCurrentIndex(0); }}
              className={`px-3 py-1.5 rounded-full text-sm transition whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                  : 'bg-slate-100 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              All ({TIMELINE_EVENTS.length})
            </button>
            {Object.entries(CATEGORY_LABELS).map(([key, label]) => {
              const count = TIMELINE_EVENTS.filter(e => e.category === key).length;
              return (
                <button
                  key={key}
                  onClick={() => { setSelectedCategory(key); setCurrentIndex(0); }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition whitespace-nowrap ${
                    selectedCategory === key
                      ? `${CATEGORY_COLORS[key]} text-white`
                      : 'bg-slate-100 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {label} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Mode Toggle */}
        <div className="px-6 py-3 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => { setMode('learn'); setCurrentIndex(0); }}
              className={`px-4 py-2 rounded-lg transition ${
                mode === 'learn' 
                  ? 'bg-amber-500 text-white' 
                  : 'bg-slate-100 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              <BookOpen className="w-4 h-4 inline mr-2" />
              Learn Mode
            </button>
            <button
              onClick={startQuiz}
              className={`px-4 py-2 rounded-lg transition ${
                mode === 'quiz' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-slate-100 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              <Target className="w-4 h-4 inline mr-2" />
              Quiz Mode
            </button>
            {mode === 'learn' && (
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`px-4 py-2 rounded-lg transition ${
                  isAutoPlay ? 'bg-blue-500 text-white' : 'bg-slate-100 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                {isAutoPlay ? <Pause className="w-4 h-4 inline mr-2" /> : <Play className="w-4 h-4 inline mr-2" />}
                {isAutoPlay ? 'Pause' : 'Auto Play'}
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {mode === 'learn' && currentEvent && (
            <div className="space-y-6">
              {/* Progress */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {currentIndex + 1} of {filteredEvents.length} events
                </span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: getImportanceStars(currentEvent.importance) }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-slate-500 ml-1 capitalize">{currentEvent.importance} importance</span>
                </div>
              </div>

              {/* Timeline Card */}
              <div className="relative">
                <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-full ${CATEGORY_COLORS[currentEvent.category]}`} />
                <div className="pl-6">
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`px-4 py-2 rounded-lg ${CATEGORY_COLORS[currentEvent.category]} text-white font-bold text-2xl`}>
                        {currentEvent.year}
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${CATEGORY_COLORS[currentEvent.category]} text-white`}>
                        {CATEGORY_LABELS[currentEvent.category]}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold dark:text-white mb-2">{currentEvent.event}</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">{currentEvent.details}</p>
                    
                    <div className="flex flex-wrap gap-3 text-sm">
                      {currentEvent.location && (
                        <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                          <MapPin className="w-4 h-4" /> {currentEvent.location}
                        </span>
                      )}
                      {currentEvent.relatedPersons && (
                        <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                          <User className="w-4 h-4" /> {currentEvent.relatedPersons.join(', ')}
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                        <BookOpen className="w-4 h-4" /> {currentEvent.chapter}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                  disabled={currentIndex === 0}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 disabled:opacity-50 dark:text-white"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                <button
                  onClick={() => setCurrentIndex(prev => Math.min(filteredEvents.length - 1, prev + 1))}
                  disabled={currentIndex === filteredEvents.length - 1}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 text-white disabled:opacity-50"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Timeline Overview */}
              <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                <h4 className="text-sm font-semibold mb-3 dark:text-white">Timeline Overview</h4>
                <div className="flex gap-1 overflow-x-auto pb-2">
                  {filteredEvents.map((event, idx) => (
                    <button
                      key={event.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`flex-shrink-0 w-8 h-8 rounded-lg text-xs font-medium transition ${
                        idx === currentIndex
                          ? `${CATEGORY_COLORS[event.category]} text-white`
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200'
                      }`}
                      title={`${event.year}: ${event.event}`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {mode === 'quiz' && quizQuestions[currentIndex] && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  Question {currentIndex + 1} of {quizQuestions.length}
                </span>
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-sm">
                  Score: {score}
                </span>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl p-6">
                <h3 className="text-xl font-bold dark:text-white mb-2">
                  When did this happen?
                </h3>
                <p className="text-lg text-slate-700 dark:text-slate-200 mb-6">
                  {quizQuestions[currentIndex].event}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  {quizQuestions[currentIndex].details}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {generateOptions(quizQuestions[currentIndex].year).map(option => {
                    const isCorrect = option === quizQuestions[currentIndex].year;
                    const isSelected = quizAnswers[quizQuestions[currentIndex].id] === option;
                    let buttonClass = 'border-slate-200 dark:border-slate-700 hover:border-amber-500';
                    
                    if (showAnswer) {
                      if (isCorrect) {
                        buttonClass = 'border-green-500 bg-green-50 dark:bg-green-900/30';
                      } else if (isSelected && !isCorrect) {
                        buttonClass = 'border-red-500 bg-red-50 dark:bg-red-900/30';
                      }
                    }

                    return (
                      <button
                        key={option}
                        onClick={() => !showAnswer && handleQuizAnswer(option)}
                        disabled={showAnswer}
                        className={`p-4 rounded-xl border-2 transition text-lg font-semibold dark:text-white ${buttonClass}`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {mode === 'results' && (
            <div className="text-center space-y-6">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <Trophy className="w-12 h-12 text-white" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold dark:text-white mb-2">Quiz Complete!</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  You scored {score} out of {quizQuestions.length}
                </p>
              </div>

              <div className="text-6xl font-bold text-amber-500">
                {Math.round((score / quizQuestions.length) * 100)}%
              </div>

              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={startQuiz}
                  className="px-6 py-3 rounded-xl bg-amber-500 text-white font-semibold hover:bg-amber-600"
                >
                  <RotateCcw className="w-4 h-4 inline mr-2" />
                  Try Again
                </button>
                <button
                  onClick={() => { setMode('learn'); setCurrentIndex(0); }}
                  className="px-6 py-3 rounded-xl bg-slate-200 dark:bg-slate-700 dark:text-white font-semibold"
                >
                  <BookOpen className="w-4 h-4 inline mr-2" />
                  Review Events
                </button>
              </div>

              {/* Review Wrong Answers */}
              <div className="text-left mt-8">
                <h4 className="font-semibold mb-3 dark:text-white">Review Your Answers</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {quizQuestions.map((q, idx) => {
                    const userAnswer = quizAnswers[q.id];
                    const isCorrect = userAnswer === q.year;
                    return (
                      <div key={q.id} className={`p-3 rounded-lg ${isCorrect ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'}`}>
                        <div className="flex items-center justify-between">
                          <span className="text-sm dark:text-slate-200">{q.event}</span>
                          <div className="text-sm">
                            {isCorrect ? (
                              <span className="text-green-600">✓ {q.year}</span>
                            ) : (
                              <span className="text-red-600">✗ {userAnswer} (Correct: {q.year})</span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryTimelineQuiz;
