import React, { useState, useMemo } from 'react';
import { X, BookOpen, Feather, Search, ChevronDown, ChevronUp, Star, Quote, Users, MapPin, Clock, Target, Heart, Sparkles, Filter } from 'lucide-react';

interface LiteratureAnalysisProps {
  onClose: () => void;
}

interface LiteraryWork {
  id: string;
  title: string;
  author: string;
  type: 'prose' | 'poetry' | 'drama' | 'novel';
  subject: 'english' | 'hindi';
  chapter: string;
  summary: string;
  themes: string[];
  characters?: { name: string; role: string; traits: string[] }[];
  literaryDevices: { device: string; example: string; effect: string }[];
  importantQuotes: { quote: string; significance: string }[];
  setting?: string;
  tone?: string;
  style?: string;
  examTips: string[];
}

const LITERARY_WORKS: LiteraryWork[] = [
  // ENGLISH WORKS
  {
    id: 'e1',
    title: 'The Cherry Tree',
    author: 'Ruskin Bond',
    type: 'prose',
    subject: 'english',
    chapter: 'Section I - Prose',
    summary: 'A story about Rakesh who plants a cherry seed and nurtures it through various challenges over six years. The tree becomes a symbol of patience, perseverance, and the relationship between humans and nature.',
    themes: ['Patience and perseverance', 'Man and nature relationship', 'Growth and development', 'Hope and optimism', 'Environmental consciousness'],
    characters: [
      { name: 'Rakesh', role: 'Protagonist', traits: ['Patient', 'Caring', 'Determined', 'Nature-loving'] },
      { name: 'Grandfather', role: 'Mentor', traits: ['Wise', 'Supportive', 'Experienced'] }
    ],
    literaryDevices: [
      { device: 'Symbolism', example: 'Cherry tree symbolizes growth and hope', effect: 'Adds deeper meaning to the narrative' },
      { device: 'Personification', example: 'Tree struggling to survive', effect: 'Creates emotional connection' },
      { device: 'Imagery', example: 'Pink blossoms against the green hills', effect: 'Vivid visual appeal' }
    ],
    importantQuotes: [
      { quote: 'Nothing is lucky if you put your heart into it.', significance: 'Emphasizes importance of effort over luck' },
      { quote: 'The cherry tree grew...', significance: 'Shows gradual progress and patience' }
    ],
    setting: 'Mussoorie hills, North India',
    tone: 'Optimistic, gentle, reflective',
    style: 'Simple narrative with nature descriptions',
    examTips: ['Focus on the symbolism of the cherry tree', 'Explain the grandfather-grandson relationship', 'Discuss environmental themes', 'Analyze character development of Rakesh']
  },
  {
    id: 'e2',
    title: 'The Cop and the Anthem',
    author: 'O. Henry',
    type: 'prose',
    subject: 'english',
    chapter: 'Section I - Prose',
    summary: 'Soapy, a homeless man, tries various petty crimes to get arrested and spend winter in jail. When he finally decides to reform after hearing an anthem, he gets arrested for loitering. A classic example of irony.',
    themes: ['Irony of fate', 'Social criticism', 'Homelessness', 'Human dignity', 'Redemption vs punishment'],
    characters: [
      { name: 'Soapy', role: 'Protagonist', traits: ['Resourceful', 'Desperate', 'Intelligent', 'Eventually reformed'] }
    ],
    literaryDevices: [
      { device: 'Situational Irony', example: 'Gets arrested when he wants to reform, not when committing crimes', effect: 'Creates surprise and critique of society' },
      { device: 'Twist Ending', example: 'Arrested for loitering after deciding to change', effect: 'O. Henry\'s signature technique' },
      { device: 'Satire', example: 'Critique of social inequality and justice system', effect: 'Social commentary' }
    ],
    importantQuotes: [
      { quote: 'Three months on the Island was what his soul craved.', significance: 'Shows desperation of homeless life' }
    ],
    setting: 'New York City, winter season',
    tone: 'Ironic, humorous yet tragic',
    style: 'Short story with surprise ending',
    examTips: ['Understand O. Henry\'s use of irony', 'Analyze Soapy\'s character arc', 'Discuss social criticism in the story', 'Explain the significance of the anthem']
  },
  {
    id: 'e3',
    title: 'An Astrologer\'s Day',
    author: 'R.K. Narayan',
    type: 'prose',
    subject: 'english',
    chapter: 'Section I - Prose',
    summary: 'An astrologer who is actually a fraud encounters a man from his past whom he had tried to kill years ago. Through clever manipulation, he convinces the man that his enemy is dead, thus freeing both from their past.',
    themes: ['Deception and truth', 'Guilt and redemption', 'Fate and coincidence', 'Past catching up', 'Survival instincts'],
    characters: [
      { name: 'Astrologer', role: 'Protagonist', traits: ['Clever', 'Guilty', 'Resourceful', 'Manipulative'] },
      { name: 'Guru Nayak', role: 'Antagonist', traits: ['Vengeful', 'Determined', 'Gullible'] }
    ],
    literaryDevices: [
      { device: 'Irony', example: 'Fraud astrologer gives genuine revelation', effect: 'Creates tension and surprise' },
      { device: 'Suspense', example: 'Slow revelation of astrologer\'s past', effect: 'Keeps reader engaged' },
      { device: 'Local Color', example: 'Vivid description of Indian market', effect: 'Authentic setting' }
    ],
    importantQuotes: [
      { quote: 'He had a working analysis of mankind\'s troubles.', significance: 'Shows his fraudulent but effective method' }
    ],
    setting: 'South Indian town, evening market',
    tone: 'Suspenseful, ironic',
    style: 'Typical Malgudi stories style',
    examTips: ['Analyze the astrologer\'s psychology', 'Discuss the theme of guilt', 'Explain the irony in the story', 'Describe Narayan\'s narrative technique']
  },
  {
    id: 'e4',
    title: 'Father Returning Home',
    author: 'Dilip Chitre',
    type: 'poetry',
    subject: 'english',
    chapter: 'Section II - Poetry',
    summary: 'A poem depicting an elderly father\'s monotonous daily commute and his alienation from family despite living together. Highlights urban loneliness and generational gap.',
    themes: ['Alienation in urban life', 'Generational gap', 'Monotony of routine', 'Loneliness', 'Family disconnection'],
    literaryDevices: [
      { device: 'Imagery', example: 'Stained shirt, sticky with sweat', effect: 'Portrays exhaustion and struggle' },
      { device: 'Symbolism', example: 'Stuffed compartment = urban crowd', effect: 'Represents city life pressure' },
      { device: 'Contrast', example: 'Physical presence vs emotional absence', effect: 'Highlights alienation' }
    ],
    importantQuotes: [
      { quote: 'His shirt and pants are soggy', significance: 'Shows physical toll of daily struggle' },
      { quote: 'He will have his weak tea', significance: 'Routine and monotony' }
    ],
    tone: 'Melancholic, sympathetic',
    style: 'Free verse, confessional',
    examTips: ['Analyze the father\'s isolation', 'Discuss urban alienation theme', 'Explain imagery used', 'Compare with modern urban life']
  },
  {
    id: 'e5',
    title: 'The Inchcape Rock',
    author: 'Robert Southey',
    type: 'poetry',
    subject: 'english',
    chapter: 'Section II - Poetry',
    summary: 'A ballad about Sir Ralph the Rover who removes a warning bell from a dangerous rock, only to later perish when his own ship hits the same rock. A moral tale about karma.',
    themes: ['Evil punished', 'Karma', 'Greed and jealousy', 'Nature\'s justice', 'Good vs evil'],
    literaryDevices: [
      { device: 'Poetic Justice', example: 'Ralph dies by the same rock', effect: 'Moral lesson reinforced' },
      { device: 'Ballad Form', example: 'Narrative poetry with moral', effect: 'Traditional storytelling' },
      { device: 'Personification', example: 'Sea appears calm then vengeful', effect: 'Nature as judge' }
    ],
    importantQuotes: [
      { quote: 'Sir Ralph the Rover tore his hair', significance: 'Shows his despair and realization' }
    ],
    tone: 'Moralistic, dramatic',
    style: 'Traditional ballad',
    examTips: ['Explain the ballad form', 'Discuss poetic justice', 'Analyze Sir Ralph\'s character', 'Describe the moral of the poem']
  },
  // HINDI WORKS
  {
    id: 'h1',
    title: 'वह चिड़िया जो',
    author: 'केदारनाथ अग्रवाल',
    type: 'poetry',
    subject: 'hindi',
    chapter: 'काव्य खंड',
    summary: 'कवि ने चिड़िया के माध्यम से एक संतोषी और परिश्रमी जीव का चित्रण किया है जो छोटे-छोटे सुखों में प्रसन्न रहती है। चिड़िया प्रकृति प्रेम और सादगी का प्रतीक है।',
    themes: ['संतोष', 'प्रकृति प्रेम', 'सादगी', 'परिश्रम', 'स्वतंत्रता'],
    literaryDevices: [
      { device: 'प्रतीक', example: 'चिड़िया संतोषी जीवन का प्रतीक', effect: 'गहरा अर्थ प्रदान करता है' },
      { device: 'अनुप्रास', example: 'चोंच से चुग-चुग', effect: 'लयात्मकता' },
      { device: 'मानवीकरण', example: 'चिड़िया की भावनाएं', effect: 'भावनात्मक संबंध' }
    ],
    importantQuotes: [
      { quote: 'वह चिड़िया जो चोंच मार कर...', significance: 'परिश्रम और संतोष दर्शाता है' }
    ],
    tone: 'आशावादी, सकारात्मक',
    style: 'गीतात्मक',
    examTips: ['चिड़िया के प्रतीकात्मक अर्थ समझें', 'कवि के प्रकृति प्रेम पर चर्चा करें', 'संतोष के संदेश को स्पष्ट करें']
  },
  {
    id: 'h2',
    title: 'बाल गोबिन भगत',
    author: 'रामवृक्ष बेनीपुरी',
    type: 'prose',
    subject: 'hindi',
    chapter: 'गद्य खंड',
    summary: 'बाल गोबिन भगत एक साधु स्वभाव के किसान हैं जो कबीर के भक्त हैं। वे सामाजिक रूढ़ियों को तोड़ते हुए अपने बेटे की मृत्यु पर बहू को पुनर्विवाह की सलाह देते हैं।',
    themes: ['सामाजिक सुधार', 'भक्ति', 'रूढ़िवाद का विरोध', 'स्त्री सम्मान', 'सादा जीवन'],
    characters: [
      { name: 'बाल गोबिन भगत', role: 'मुख्य पात्र', traits: ['सादगी', 'भक्ति', 'प्रगतिशील विचार', 'त्यागी'] }
    ],
    literaryDevices: [
      { device: 'चित्रात्मक वर्णन', example: 'भगत के स्वरूप का वर्णन', effect: 'जीवंत चित्रण' },
      { device: 'प्रतीक', example: 'कबीर की भक्ति', effect: 'आध्यात्मिक गहराई' }
    ],
    importantQuotes: [
      { quote: 'खेती-बाड़ी करते थे पर साधु थे', significance: 'कर्म और भक्ति का सामंजस्य' }
    ],
    tone: 'श्रद्धापूर्ण, वर्णनात्मक',
    style: 'रेखाचित्र शैली',
    examTips: ['भगत के चरित्र का विश्लेषण करें', 'सामाजिक सुधार पर उनके विचार स्पष्ट करें', 'कबीर की भक्ति का महत्व बताएं']
  },
  {
    id: 'h3',
    title: 'नेताजी का चश्मा',
    author: 'स्वयं प्रकाश',
    type: 'prose',
    subject: 'hindi',
    chapter: 'गद्य खंड',
    summary: 'हालदार साहब एक कस्बे में नेताजी की प्रतिमा देखते हैं जिस पर असली चश्मा लगा है। कैप्टन नामक देशभक्त बार-बार नया चश्मा लगाता है। यह कहानी देशभक्ति और सम्मान की है।',
    themes: ['देशभक्ति', 'राष्ट्रीय सम्मान', 'आम आदमी का योगदान', 'स्मृति और श्रद्धा'],
    characters: [
      { name: 'हालदार साहब', role: 'कथावाचक', traits: ['संवेदनशील', 'देशभक्त'] },
      { name: 'कैप्टन', role: 'मुख्य पात्र', traits: ['देशभक्त', 'समर्पित', 'गरीब लेकिन स्वाभिमानी'] }
    ],
    literaryDevices: [
      { device: 'प्रतीक', example: 'चश्मा देशभक्ति का प्रतीक', effect: 'गहरा अर्थ' },
      { device: 'व्यंग्य', example: 'नगरपालिका की उदासीनता', effect: 'समाज पर टिप्पणी' }
    ],
    importantQuotes: [
      { quote: 'यह कैसी देशभक्ति है!', significance: 'आम आदमी की देशभक्ति को सलाम' }
    ],
    tone: 'भावुक, व्यंग्यात्मक',
    style: 'यथार्थवादी कहानी',
    examTips: ['कैप्टन के चरित्र का विश्लेषण', 'देशभक्ति के विभिन्न रूप', 'प्रतीकात्मकता को समझें']
  },
  {
    id: 'h4',
    title: 'साना साना हाथ जोड़ि',
    author: 'मधु कांकरिया',
    type: 'prose',
    subject: 'hindi',
    chapter: 'गद्य खंड',
    summary: 'लेखिका की सिक्किम यात्रा का वर्णन। गैंगटोक से यूमथांग तक की यात्रा में प्रकृति की सुंदरता, पहाड़ी जीवन और संस्कृति का चित्रण।',
    themes: ['यात्रा वृत्तांत', 'प्रकृति सौंदर्य', 'पहाड़ी संस्कृति', 'जीवन दर्शन'],
    literaryDevices: [
      { device: 'चित्रात्मक वर्णन', example: 'हिमालय का वर्णन', effect: 'जीवंत दृश्य' },
      { device: 'संवाद', example: 'स्थानीय लोगों से बातचीत', effect: 'प्रामाणिकता' }
    ],
    importantQuotes: [
      { quote: 'प्रकृति में सब कुछ है', significance: 'प्रकृति की महत्ता' }
    ],
    tone: 'वर्णनात्मक, आध्यात्मिक',
    style: 'यात्रा वृत्तांत',
    examTips: ['यात्रा वृत्तांत की विशेषताएं', 'प्रकृति चित्रण की शैली', 'सिक्किम की संस्कृति']
  },
  {
    id: 'h5',
    title: 'संगतकार',
    author: 'मंगलेश डबराल',
    type: 'poetry',
    subject: 'hindi',
    chapter: 'काव्य खंड',
    summary: 'संगतकार वह कलाकार है जो मुख्य गायक का साथ देता है। कविता उन पार्श्व कलाकारों को समर्पित है जो दूसरों की सफलता में अपना योगदान देते हैं बिना श्रेय लिए।',
    themes: ['पार्श्व कलाकारों का सम्मान', 'त्याग', 'सहयोग', 'विनम्रता'],
    literaryDevices: [
      { device: 'रूपक', example: 'संगतकार का रूपक', effect: 'गहरा अर्थ' },
      { device: 'प्रतीक', example: 'संगत = सहयोग', effect: 'सांकेतिक अर्थ' }
    ],
    importantQuotes: [
      { quote: 'वह जान-बूझकर अपनी आवाज़ को सहारा बनाता है', significance: 'त्याग की भावना' }
    ],
    tone: 'सम्मानपूर्ण, चिंतनशील',
    style: 'मुक्त छंद',
    examTips: ['संगतकार का प्रतीकात्मक अर्थ', 'कवि का संदेश', 'समाज में पार्श्व लोगों की भूमिका']
  },
  {
    id: 'e6',
    title: 'Small Towns and Rivers',
    author: 'Mamang Dai',
    type: 'poetry',
    subject: 'english',
    chapter: 'Section II - Poetry',
    summary: 'The poem explores the relationship between small towns in Arunachal Pradesh and their rivers. It reflects on the spiritual connection between nature and human life, and the transient nature of existence.',
    themes: ['Nature and spirituality', 'Life and death', 'Regional identity', 'Transience', 'Harmony with nature'],
    literaryDevices: [
      { device: 'Imagery', example: 'Rivers as living entities', effect: 'Creates spiritual atmosphere' },
      { device: 'Symbolism', example: 'River symbolizes life cycle', effect: 'Deeper philosophical meaning' },
      { device: 'Local References', example: 'Arunachal Pradesh landscape', effect: 'Regional authenticity' }
    ],
    importantQuotes: [
      { quote: 'The river has a soul', significance: 'Animistic belief system' }
    ],
    tone: 'Meditative, spiritual',
    style: 'Free verse with local imagery',
    examTips: ['Understand the spiritual connection with rivers', 'Analyze regional identity in poetry', 'Discuss the theme of transience']
  },
  {
    id: 'e7',
    title: 'Have you Earned your Tomorrow',
    author: 'Edgar Guest',
    type: 'poetry',
    subject: 'english',
    chapter: 'Section II - Poetry',
    summary: 'An inspirational poem that questions readers about their daily actions. It emphasizes doing good deeds, helping others, and making each day count rather than just passing time.',
    themes: ['Self-reflection', 'Good deeds', 'Making life meaningful', 'Helping others', 'Daily accountability'],
    literaryDevices: [
      { device: 'Rhetorical Questions', example: 'Is the world better because you lived today?', effect: 'Prompts self-reflection' },
      { device: 'Anaphora', example: 'Did you...repeated lines', effect: 'Emphasizes message' },
      { device: 'Direct Address', example: 'Speaking to reader as "you"', effect: 'Personal connection' }
    ],
    importantQuotes: [
      { quote: 'Is anybody happier because you passed his way?', significance: 'Core question of the poem' }
    ],
    tone: 'Inspirational, questioning',
    style: 'Didactic poetry',
    examTips: ['Explain the central message', 'Analyze the use of questions', 'Discuss how to apply the poem\'s message']
  },
  {
    id: 'h6',
    title: 'मैं क्यों लिखता हूँ',
    author: 'अज्ञेय',
    type: 'prose',
    subject: 'hindi',
    chapter: 'गद्य खंड',
    summary: 'लेखक अपने लेखन के कारणों पर चिंतन करते हैं। वे बताते हैं कि लेखन एक आंतरिक विवशता है, आत्म-अभिव्यक्ति का माध्यम है।',
    themes: ['लेखन का उद्देश्य', 'आत्म-अभिव्यक्ति', 'रचनात्मकता', 'साहित्य और जीवन'],
    literaryDevices: [
      { device: 'आत्मकथात्मक शैली', example: 'व्यक्तिगत अनुभव', effect: 'प्रामाणिकता' },
      { device: 'चिंतनशील गद्य', example: 'दार्शनिक विचार', effect: 'गहराई' }
    ],
    importantQuotes: [
      { quote: 'लेखक इसलिए नहीं लिखता कि उसे लिखना है, बल्कि इसलिए लिखता है कि वह न लिख नहीं सकता', significance: 'लेखन की विवशता' }
    ],
    tone: 'चिंतनशील, आत्मपरक',
    style: 'आत्मकथात्मक निबंध',
    examTips: ['अज्ञेय के लेखन दर्शन को समझें', 'आत्म-अभिव्यक्ति के महत्व पर चर्चा', 'लेखक बनाम पाठक संबंध']
  }
];

const LiteratureAnalysis: React.FC<LiteratureAnalysisProps> = ({ onClose }) => {
  const [selectedSubject, setSelectedSubject] = useState<'all' | 'english' | 'hindi'>('all');
  const [selectedType, setSelectedType] = useState<'all' | 'prose' | 'poetry' | 'drama' | 'novel'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedWork, setExpandedWork] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'summary' | 'characters' | 'devices' | 'quotes' | 'tips'>('summary');

  const filteredWorks = useMemo(() => {
    return LITERARY_WORKS.filter(work => {
      const matchesSubject = selectedSubject === 'all' || work.subject === selectedSubject;
      const matchesType = selectedType === 'all' || work.type === selectedType;
      const matchesSearch = searchQuery === '' || 
        work.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        work.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        work.themes.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesSubject && matchesType && matchesSearch;
    });
  }, [selectedSubject, selectedType, searchQuery]);

  const stats = useMemo(() => ({
    total: LITERARY_WORKS.length,
    english: LITERARY_WORKS.filter(w => w.subject === 'english').length,
    hindi: LITERARY_WORKS.filter(w => w.subject === 'hindi').length,
    prose: LITERARY_WORKS.filter(w => w.type === 'prose').length,
    poetry: LITERARY_WORKS.filter(w => w.type === 'poetry').length
  }), []);

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'prose': return <BookOpen className="w-4 h-4" />;
      case 'poetry': return <Feather className="w-4 h-4" />;
      case 'drama': return <Users className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="p-2 bg-purple-600 rounded-lg">
                  <BookOpen className="w-6 h-6" />
                </div>
                Literature Analysis
              </h2>
              <p className="text-slate-400 mt-1">Comprehensive analysis of English & Hindi literary works</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
              <X className="w-6 h-6 text-slate-400" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-5 gap-3 mb-4">
            <div className="bg-slate-700/50 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-white">{stats.total}</div>
              <div className="text-xs text-slate-400">Total Works</div>
            </div>
            <div className="bg-blue-900/30 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-blue-400">{stats.english}</div>
              <div className="text-xs text-blue-300">English</div>
            </div>
            <div className="bg-orange-900/30 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-orange-400">{stats.hindi}</div>
              <div className="text-xs text-orange-300">Hindi</div>
            </div>
            <div className="bg-green-900/30 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-green-400">{stats.prose}</div>
              <div className="text-xs text-green-300">Prose</div>
            </div>
            <div className="bg-pink-900/30 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-pink-400">{stats.poetry}</div>
              <div className="text-xs text-pink-300">Poetry</div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search works, authors, themes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
              />
            </div>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value as any)}
              className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
            >
              <option value="all">All Subjects</option>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as any)}
              className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
            >
              <option value="all">All Types</option>
              <option value="prose">Prose</option>
              <option value="poetry">Poetry</option>
              <option value="drama">Drama</option>
            </select>
          </div>
        </div>

        {/* Works List */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-3">
            {filteredWorks.map(work => (
              <div key={work.id} className="bg-slate-700/50 rounded-xl overflow-hidden">
                {/* Work Header */}
                <div
                  onClick={() => setExpandedWork(expandedWork === work.id ? null : work.id)}
                  className="p-4 cursor-pointer hover:bg-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${work.subject === 'english' ? 'bg-blue-600' : 'bg-orange-600'}`}>
                        {getTypeIcon(work.type)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{work.title}</h3>
                        <p className="text-sm text-slate-400">by {work.author} • {work.chapter}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        work.type === 'prose' ? 'bg-green-900/50 text-green-400' :
                        work.type === 'poetry' ? 'bg-pink-900/50 text-pink-400' :
                        'bg-purple-900/50 text-purple-400'
                      }`}>
                        {work.type.charAt(0).toUpperCase() + work.type.slice(1)}
                      </span>
                      {expandedWork === work.id ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {work.themes.slice(0, 3).map((theme, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-slate-600 rounded text-xs text-slate-300">
                        {theme}
                      </span>
                    ))}
                    {work.themes.length > 3 && (
                      <span className="text-xs text-slate-400">+{work.themes.length - 3} more</span>
                    )}
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedWork === work.id && (
                  <div className="border-t border-slate-600 p-4">
                    {/* Tabs */}
                    <div className="flex gap-2 mb-4 flex-wrap">
                      {['summary', 'characters', 'devices', 'quotes', 'tips'].map(tab => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab as any)}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                            activeTab === tab
                              ? 'bg-purple-600 text-white'
                              : 'bg-slate-600 text-slate-300 hover:bg-slate-500'
                          }`}
                        >
                          {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                      ))}
                    </div>

                    {/* Tab Content */}
                    {activeTab === 'summary' && (
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-purple-400 mb-2">Summary</h4>
                          <p className="text-slate-300 text-sm leading-relaxed">{work.summary}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {work.setting && (
                            <div className="flex items-start gap-2">
                              <MapPin className="w-4 h-4 text-slate-400 mt-0.5" />
                              <div>
                                <span className="text-xs text-slate-400">Setting</span>
                                <p className="text-sm text-slate-200">{work.setting}</p>
                              </div>
                            </div>
                          )}
                          {work.tone && (
                            <div className="flex items-start gap-2">
                              <Heart className="w-4 h-4 text-slate-400 mt-0.5" />
                              <div>
                                <span className="text-xs text-slate-400">Tone</span>
                                <p className="text-sm text-slate-200">{work.tone}</p>
                              </div>
                            </div>
                          )}
                          {work.style && (
                            <div className="flex items-start gap-2">
                              <Sparkles className="w-4 h-4 text-slate-400 mt-0.5" />
                              <div>
                                <span className="text-xs text-slate-400">Style</span>
                                <p className="text-sm text-slate-200">{work.style}</p>
                              </div>
                            </div>
                          )}
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-purple-400 mb-2">All Themes</h4>
                          <div className="flex flex-wrap gap-2">
                            {work.themes.map((theme, idx) => (
                              <span key={idx} className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-sm">
                                {theme}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'characters' && (
                      <div>
                        {work.characters && work.characters.length > 0 ? (
                          <div className="space-y-3">
                            {work.characters.map((char, idx) => (
                              <div key={idx} className="bg-slate-600/50 rounded-lg p-3">
                                <div className="flex items-center gap-2 mb-2">
                                  <Users className="w-4 h-4 text-blue-400" />
                                  <span className="font-medium text-white">{char.name}</span>
                                  <span className="px-2 py-0.5 bg-blue-900/50 text-blue-300 rounded text-xs">{char.role}</span>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                  {char.traits.map((trait, tidx) => (
                                    <span key={tidx} className="px-2 py-0.5 bg-slate-500 rounded text-xs text-slate-200">
                                      {trait}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-slate-400 text-sm">No character analysis available for this work (Poetry)</p>
                        )}
                      </div>
                    )}

                    {activeTab === 'devices' && (
                      <div className="space-y-3">
                        {work.literaryDevices.map((device, idx) => (
                          <div key={idx} className="bg-slate-600/50 rounded-lg p-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Sparkles className="w-4 h-4 text-yellow-400" />
                              <span className="font-medium text-yellow-300">{device.device}</span>
                            </div>
                            <p className="text-sm text-slate-300 mb-1">
                              <span className="text-slate-400">Example:</span> {device.example}
                            </p>
                            <p className="text-sm text-slate-300">
                              <span className="text-slate-400">Effect:</span> {device.effect}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 'quotes' && (
                      <div className="space-y-3">
                        {work.importantQuotes.map((q, idx) => (
                          <div key={idx} className="bg-slate-600/50 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                              <Quote className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                              <div>
                                <p className="text-white italic mb-2">"{q.quote}"</p>
                                <p className="text-sm text-emerald-300">
                                  <span className="text-slate-400">Significance:</span> {q.significance}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeTab === 'tips' && (
                      <div>
                        <h4 className="text-sm font-medium text-purple-400 mb-3 flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          Exam Tips for this Work
                        </h4>
                        <ul className="space-y-2">
                          {work.examTips.map((tip, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                              <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredWorks.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400">No works found matching your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiteratureAnalysis;
