import React, { useState, useMemo } from 'react';
import { X, Scale, Search, ChevronDown, ChevronUp, BookOpen, Users, Globe, Landmark, FileText, Brain, Lightbulb, CheckCircle, Star } from 'lucide-react';

interface PoliticalScienceHubProps {
  onClose: () => void;
}

interface Concept {
  id: string;
  title: string;
  titleHindi?: string;
  chapter: string;
  definition: string;
  explanation: string;
  examples: string[];
  relatedConcepts: string[];
  examImportance: 'high' | 'medium' | 'low';
  category: 'theory' | 'indian' | 'international' | 'constitution' | 'contemporary';
}

interface Amendment {
  number: string;
  year: string;
  description: string;
  importance: string;
}

interface PoliticalThinker {
  name: string;
  period: string;
  nationality: string;
  mainIdeas: string[];
  majorWorks: string[];
  contribution: string;
}

const CONCEPTS: Concept[] = [
  // Constitutional Concepts
  {
    id: 'c1',
    title: 'Fundamental Rights',
    titleHindi: 'मौलिक अधिकार',
    chapter: 'Chapter 2: Rights in Indian Constitution',
    definition: 'Basic human rights guaranteed by the Constitution of India (Articles 12-35) which are enforceable by courts.',
    explanation: 'Part III of the Constitution contains 6 fundamental rights: Right to Equality, Right to Freedom, Right against Exploitation, Right to Freedom of Religion, Cultural and Educational Rights, and Right to Constitutional Remedies. These are justiciable and can be enforced through writs.',
    examples: ['Article 14: Equality before law', 'Article 19: Freedom of speech', 'Article 21: Right to life', 'Article 32: Right to Constitutional Remedies'],
    relatedConcepts: ['Directive Principles', 'Fundamental Duties', 'Writs'],
    examImportance: 'high',
    category: 'constitution'
  },
  {
    id: 'c2',
    title: 'Directive Principles of State Policy',
    titleHindi: 'राज्य नीति के निदेशक तत्व',
    chapter: 'Chapter 2: Rights in Indian Constitution',
    definition: 'Guidelines for governance that are not enforceable by courts but are fundamental in the governance of the country.',
    explanation: 'Part IV (Articles 36-51) contains principles that the state should follow while making laws and policies. They are based on welfare state concept and aim at establishing social and economic democracy.',
    examples: ['Article 39: Equal pay for equal work', 'Article 40: Panchayati Raj', 'Article 44: Uniform Civil Code', 'Article 45: Free education'],
    relatedConcepts: ['Fundamental Rights', 'Socialism', 'Welfare State'],
    examImportance: 'high',
    category: 'constitution'
  },
  {
    id: 'c3',
    title: 'Secularism',
    titleHindi: 'धर्मनिरपेक्षता',
    chapter: 'Chapter 1: Philosophy of Constitution',
    definition: 'The principle of separation of state from religious institutions and equal treatment of all religions by the state.',
    explanation: 'Indian secularism is different from Western secularism. It means equal respect and protection for all religions (Sarva Dharma Sambhava). The state neither promotes nor discourages any religion. Added to Preamble by 42nd Amendment (1976).',
    examples: ['No state religion', 'Freedom to practice any religion', 'Equal treatment of all religious communities', 'Religious education in aided institutions'],
    relatedConcepts: ['Fundamental Rights', 'Article 25-28', 'Preamble'],
    examImportance: 'high',
    category: 'constitution'
  },
  {
    id: 'c4',
    title: 'Federalism',
    titleHindi: 'संघवाद',
    chapter: 'Chapter 3: Indian Federalism',
    definition: 'A system of government in which power is divided between a central authority and constituent political units.',
    explanation: 'India has a quasi-federal structure with unitary features. Power is divided between Union, States, and Concurrent lists (Schedule 7). The Centre has more powers making it "federation with a strong Centre" or "unitary state with federal features".',
    examples: ['Union List: Defense, Foreign Affairs', 'State List: Police, Public Health', 'Concurrent List: Education, Forests', 'Residuary powers with Centre'],
    relatedConcepts: ['Three Lists', 'Centre-State Relations', 'Inter-State Council'],
    examImportance: 'high',
    category: 'constitution'
  },
  {
    id: 'c5',
    title: 'Judiciary Independence',
    titleHindi: 'न्यायपालिका की स्वतंत्रता',
    chapter: 'Chapter 4: Judiciary',
    definition: 'The principle that the judiciary should be free from interference by the executive and legislature.',
    explanation: 'Indian Constitution ensures judicial independence through security of tenure, fixed service conditions, prohibition on discussion of judge\'s conduct, separation of judiciary from executive, and power of judicial review.',
    examples: ['Judges removed only by impeachment', 'Salaries charged on Consolidated Fund', 'Collegium system for appointments', 'Contempt of Court powers'],
    relatedConcepts: ['Separation of Powers', 'Judicial Review', 'Collegium System'],
    examImportance: 'high',
    category: 'constitution'
  },
  // Political Theory
  {
    id: 't1',
    title: 'Democracy',
    titleHindi: 'लोकतंत्र',
    chapter: 'Chapter 1: Political Theory',
    definition: 'A system of government where power is vested in the people, who rule either directly or through elected representatives.',
    explanation: 'Democracy can be direct (citizens make decisions directly) or representative (citizens elect representatives). India follows representative parliamentary democracy. Key features include universal adult franchise, periodic elections, rule of law, and protection of rights.',
    examples: ['India: Parliamentary Democracy', 'USA: Presidential Democracy', 'Switzerland: Direct Democracy elements', 'UK: Constitutional Monarchy'],
    relatedConcepts: ['Elections', 'Political Parties', 'Civil Liberties'],
    examImportance: 'high',
    category: 'theory'
  },
  {
    id: 't2',
    title: 'Liberty',
    titleHindi: 'स्वतंत्रता',
    chapter: 'Chapter 1: Political Theory',
    definition: 'The state of being free within society from oppressive restrictions imposed by authority on one\'s way of life.',
    explanation: 'Liberty can be negative (absence of external constraints) or positive (presence of conditions for self-realization). Constitutional liberty includes freedoms of speech, movement, assembly, profession, etc. Liberty is not absolute and has reasonable restrictions.',
    examples: ['Freedom of speech', 'Freedom of movement', 'Freedom of profession', 'Personal liberty under Article 21'],
    relatedConcepts: ['Rights', 'Equality', 'Justice'],
    examImportance: 'medium',
    category: 'theory'
  },
  {
    id: 't3',
    title: 'Equality',
    titleHindi: 'समानता',
    chapter: 'Chapter 1: Political Theory',
    definition: 'The state of being equal in status, rights, and opportunities.',
    explanation: 'Equality can be natural (all humans born equal), civil (equality before law), political (equal voting rights), social (no discrimination), and economic (equal opportunities). Indian Constitution provides for equality through Articles 14-18.',
    examples: ['One person one vote', 'Equal pay for equal work', 'Reservation for backward classes', 'Abolition of untouchability'],
    relatedConcepts: ['Liberty', 'Social Justice', 'Affirmative Action'],
    examImportance: 'medium',
    category: 'theory'
  },
  // International Relations
  {
    id: 'i1',
    title: 'Non-Aligned Movement (NAM)',
    titleHindi: 'गुट निरपेक्ष आंदोलन',
    chapter: 'Chapter 5: International Relations',
    definition: 'A forum of states not formally aligned with or against any major power bloc during Cold War.',
    explanation: 'Founded in 1961 at Belgrade Conference. India was a founding member along with Yugoslavia, Egypt, Indonesia, and Ghana. NAM promoted peaceful coexistence, anti-colonialism, and independent foreign policy. Still relevant for Global South cooperation.',
    examples: ['Belgrade Conference 1961', 'Panchsheel principles', 'Anti-colonialism', 'Peaceful coexistence'],
    relatedConcepts: ['Cold War', 'Foreign Policy', 'Third World'],
    examImportance: 'high',
    category: 'international'
  },
  {
    id: 'i2',
    title: 'United Nations Organization',
    titleHindi: 'संयुक्त राष्ट्र संघ',
    chapter: 'Chapter 6: International Organizations',
    definition: 'An international organization founded in 1945 to maintain international peace and security.',
    explanation: 'UNO has 6 main organs: General Assembly, Security Council, ECOSOC, Trusteeship Council, ICJ, and Secretariat. Security Council has 5 permanent members (P5) with veto power. India has been demanding permanent membership in UNSC.',
    examples: ['Peacekeeping missions', 'Human rights protection', 'Sustainable Development Goals', 'WHO, UNESCO, UNICEF'],
    relatedConcepts: ['Security Council', 'General Assembly', 'International Law'],
    examImportance: 'high',
    category: 'international'
  },
  {
    id: 'i3',
    title: 'Globalization',
    titleHindi: 'वैश्वीकरण',
    chapter: 'Chapter 7: Globalization',
    definition: 'The process of interaction and integration among people, companies, and governments worldwide.',
    explanation: 'Globalization involves economic, political, and cultural dimensions. Economic globalization includes free trade, FDI, and multinational corporations. It has both positive effects (economic growth) and negative effects (inequality, cultural homogenization).',
    examples: ['WTO', 'IMF', 'World Bank', 'Multinational Corporations', 'Cultural exchange'],
    relatedConcepts: ['Liberalization', 'Privatization', 'Free Trade'],
    examImportance: 'high',
    category: 'international'
  },
  // Indian Politics
  {
    id: 'p1',
    title: 'Electoral System in India',
    titleHindi: 'भारत में चुनाव प्रणाली',
    chapter: 'Chapter 8: Elections in India',
    definition: 'The mechanism through which representatives are elected to various legislative bodies in India.',
    explanation: 'India uses First Past The Post (FPTP) system for Lok Sabha and State Assemblies. Rajya Sabha uses Single Transferable Vote. Election Commission of India (Art. 324) conducts free and fair elections. Universal adult franchise since 1950.',
    examples: ['Lok Sabha elections', 'Rajya Sabha elections', 'State Assembly elections', 'Panchayat elections'],
    relatedConcepts: ['Election Commission', 'Political Parties', 'Model Code of Conduct'],
    examImportance: 'high',
    category: 'indian'
  },
  {
    id: 'p2',
    title: 'Coalition Politics',
    titleHindi: 'गठबंधन की राजनीति',
    chapter: 'Chapter 9: Political Parties',
    definition: 'A system where multiple political parties cooperate to form a government.',
    explanation: 'Coalition governments became common in India after 1989 due to decline of Congress dominance. UPA and NDA are major coalitions. Coalition politics requires compromise, consensus-building, and can lead to policy instability or regional representation.',
    examples: ['UPA government (2004-2014)', 'NDA government', 'Third Front experiments', 'State-level coalitions'],
    relatedConcepts: ['Political Parties', 'Hung Parliament', 'Common Minimum Programme'],
    examImportance: 'medium',
    category: 'indian'
  },
  {
    id: 'p3',
    title: 'Panchayati Raj',
    titleHindi: 'पंचायती राज',
    chapter: 'Chapter 10: Local Government',
    definition: 'A system of rural local self-government in India based on elected village councils.',
    explanation: 'Constitutionalized by 73rd Amendment (1992). Three-tier structure: Gram Panchayat, Panchayat Samiti, Zila Parishad. Provides for reservation for SC/ST/Women, five-year term, State Election Commission, and State Finance Commission.',
    examples: ['Gram Sabha', 'Sarpanch', '29 subjects in 11th Schedule', 'Women reservation (33%)'],
    relatedConcepts: ['73rd Amendment', 'Local Self Government', 'Decentralization'],
    examImportance: 'high',
    category: 'indian'
  },
  {
    id: 'p4',
    title: 'Regionalism',
    titleHindi: 'क्षेत्रवाद',
    chapter: 'Chapter 11: Regional Aspirations',
    definition: 'A political ideology focusing on the interests of a particular region or group of regions.',
    explanation: 'Regionalism in India manifests as demand for separate states, regional parties, and sub-nationalism. Causes include linguistic identity, economic disparity, and cultural distinctiveness. Can be positive (decentralization) or negative (secessionism).',
    examples: ['Telangana movement', 'Dravidian movement', 'Northeast insurgency', 'Regional parties like DMK, TMC'],
    relatedConcepts: ['Federalism', 'Centre-State Relations', 'State Reorganization'],
    examImportance: 'medium',
    category: 'indian'
  },
  // Contemporary Issues
  {
    id: 'co1',
    title: 'Right to Information',
    titleHindi: 'सूचना का अधिकार',
    chapter: 'Chapter 12: Contemporary Politics',
    definition: 'The right of citizens to access information held by public authorities.',
    explanation: 'RTI Act 2005 empowers citizens to seek information from government. Promotes transparency and accountability. Includes Central and State Information Commissions. Certain information exempt on grounds of security, sovereignty, etc.',
    examples: ['Online RTI portals', 'Information Commissions', 'Whistleblower protection', 'Transparency in governance'],
    relatedConcepts: ['Good Governance', 'Accountability', 'Transparency'],
    examImportance: 'high',
    category: 'contemporary'
  },
  {
    id: 'co2',
    title: 'Social Movements',
    titleHindi: 'सामाजिक आंदोलन',
    chapter: 'Chapter 13: Social Movements',
    definition: 'Organized efforts by groups of people to bring about social or political change.',
    explanation: 'India has witnessed various social movements including environmental (Chipko, Narmada Bachao), women\'s (anti-dowry, #MeToo), farmers\', and anti-corruption movements. These movements influence policy and raise awareness.',
    examples: ['Chipko Movement', 'Narmada Bachao Andolan', 'Anna Hazare movement', 'Farmers\' protests'],
    relatedConcepts: ['Civil Society', 'NGOs', 'Democratic Participation'],
    examImportance: 'medium',
    category: 'contemporary'
  }
];

const IMPORTANT_AMENDMENTS: Amendment[] = [
  { number: '1st', year: '1951', description: 'Added 9th Schedule, restrictions on freedom of speech', importance: 'First amendment to deal with land reforms and freedom of speech' },
  { number: '7th', year: '1956', description: 'Reorganization of states on linguistic basis', importance: 'Created linguistic states, changed India\'s map' },
  { number: '24th', year: '1971', description: 'Parliament can amend any part of Constitution including Fundamental Rights', importance: 'Response to Golaknath case, affirmed Parliament\'s amending power' },
  { number: '42nd', year: '1976', description: 'Mini Constitution - added Socialist, Secular, Integrity to Preamble, Fundamental Duties', importance: 'Most comprehensive amendment, called "Mini Constitution"' },
  { number: '44th', year: '1978', description: 'Restored many provisions altered by 42nd Amendment', importance: 'Undid Emergency excesses, restored civil liberties' },
  { number: '52nd', year: '1985', description: 'Anti-defection law (10th Schedule)', importance: 'Curbed political defections, strengthened party discipline' },
  { number: '61st', year: '1989', description: 'Reduced voting age from 21 to 18 years', importance: 'Expanded democratic participation of youth' },
  { number: '73rd', year: '1992', description: 'Panchayati Raj institutions', importance: 'Constitutional status to local self-government in rural areas' },
  { number: '74th', year: '1992', description: 'Municipalities', importance: 'Constitutional status to urban local bodies' },
  { number: '86th', year: '2002', description: 'Right to Education (Article 21A)', importance: 'Made elementary education a fundamental right' },
  { number: '101st', year: '2016', description: 'Goods and Services Tax (GST)', importance: 'One nation one tax, major economic reform' },
  { number: '103rd', year: '2019', description: '10% reservation for EWS', importance: 'Economic criteria based reservation' }
];

const POLITICAL_THINKERS: PoliticalThinker[] = [
  {
    name: 'Mahatma Gandhi',
    period: '1869-1948',
    nationality: 'Indian',
    mainIdeas: ['Satyagraha (Non-violent resistance)', 'Swaraj (Self-rule)', 'Sarvodaya (Welfare of all)', 'Gram Swaraj (Village self-government)', 'Trusteeship'],
    majorWorks: ['Hind Swaraj', 'My Experiments with Truth', 'Constructive Programme'],
    contribution: 'Father of Indian independence movement, developed philosophy of non-violent resistance that influenced global movements'
  },
  {
    name: 'B.R. Ambedkar',
    period: '1891-1956',
    nationality: 'Indian',
    mainIdeas: ['Social democracy', 'Annihilation of caste', 'Constitutional morality', 'Economic and social justice', 'Buddhism as social liberation'],
    majorWorks: ['Annihilation of Caste', 'Buddha and His Dhamma', 'The Problem of the Rupee'],
    contribution: 'Chief architect of Indian Constitution, champion of Dalit rights and social justice'
  },
  {
    name: 'Jawaharlal Nehru',
    period: '1889-1964',
    nationality: 'Indian',
    mainIdeas: ['Democratic socialism', 'Non-alignment', 'Scientific temper', 'Secularism', 'Mixed economy'],
    majorWorks: ['Discovery of India', 'Glimpses of World History', 'Autobiography'],
    contribution: 'First PM of India, shaped independent India\'s domestic and foreign policy'
  },
  {
    name: 'John Locke',
    period: '1632-1704',
    nationality: 'English',
    mainIdeas: ['Natural rights', 'Social contract', 'Limited government', 'Right to property', 'Consent of governed'],
    majorWorks: ['Two Treatises of Government', 'Essay Concerning Human Understanding'],
    contribution: 'Father of Liberalism, influenced American and French revolutions'
  },
  {
    name: 'Jean-Jacques Rousseau',
    period: '1712-1778',
    nationality: 'French',
    mainIdeas: ['General will', 'Popular sovereignty', 'Direct democracy', 'Noble savage', 'Social contract'],
    majorWorks: ['The Social Contract', 'Emile', 'Discourse on Inequality'],
    contribution: 'Influenced French Revolution, developed theory of popular sovereignty'
  },
  {
    name: 'Karl Marx',
    period: '1818-1883',
    nationality: 'German',
    mainIdeas: ['Class struggle', 'Historical materialism', 'Dictatorship of proletariat', 'Alienation', 'Surplus value'],
    majorWorks: ['Das Kapital', 'Communist Manifesto', 'German Ideology'],
    contribution: 'Founded scientific socialism, influenced revolutions and workers\' movements worldwide'
  }
];

const PoliticalScienceHub: React.FC<PoliticalScienceHubProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'concepts' | 'amendments' | 'thinkers' | 'quiz'>('concepts');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedConcept, setExpandedConcept] = useState<string | null>(null);
  const [quizMode, setQuizMode] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const filteredConcepts = useMemo(() => {
    return CONCEPTS.filter(c => {
      const matchesSearch = searchQuery === '' ||
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.definition.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || c.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const categories = [
    { id: 'all', name: 'All', icon: Globe },
    { id: 'constitution', name: 'Constitution', icon: FileText },
    { id: 'theory', name: 'Political Theory', icon: Brain },
    { id: 'indian', name: 'Indian Politics', icon: Landmark },
    { id: 'international', name: 'International', icon: Globe },
    { id: 'contemporary', name: 'Contemporary', icon: Lightbulb }
  ];

  const quizConcepts = useMemo(() => 
    CONCEPTS.filter(c => c.examImportance === 'high').sort(() => Math.random() - 0.5),
  []);

  const handleQuizAnswer = (correct: boolean) => {
    if (correct) setScore(s => s + 1);
    if (currentQuizIndex < quizConcepts.length - 1) {
      setCurrentQuizIndex(i => i + 1);
      setShowAnswer(false);
    } else {
      setQuizMode(false);
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
                <div className="p-2 bg-indigo-600 rounded-lg">
                  <Scale className="w-6 h-6" />
                </div>
                Political Science Hub
              </h2>
              <p className="text-slate-400 mt-1">Comprehensive concepts, amendments, and thinkers for HSC</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
              <X className="w-6 h-6 text-slate-400" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 flex-wrap">
            {[
              { id: 'concepts', label: 'Concepts', icon: Brain },
              { id: 'amendments', label: 'Amendments', icon: FileText },
              { id: 'thinkers', label: 'Thinkers', icon: Users },
              { id: 'quiz', label: 'Quick Quiz', icon: CheckCircle }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Concepts Tab */}
          {activeTab === 'concepts' && (
            <div>
              {/* Filters */}
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="relative flex-1 min-w-[200px]">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search concepts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === cat.id
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                    >
                      <cat.icon className="w-3 h-3" />
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Concepts List */}
              <div className="space-y-3">
                {filteredConcepts.map(concept => (
                  <div key={concept.id} className="bg-slate-700/50 rounded-xl overflow-hidden">
                    <div
                      onClick={() => setExpandedConcept(expandedConcept === concept.id ? null : concept.id)}
                      className="p-4 cursor-pointer hover:bg-slate-700 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`px-2 py-1 rounded text-xs font-medium ${
                            concept.examImportance === 'high' ? 'bg-red-900/50 text-red-400' :
                            concept.examImportance === 'medium' ? 'bg-yellow-900/50 text-yellow-400' :
                            'bg-green-900/50 text-green-400'
                          }`}>
                            {concept.examImportance.toUpperCase()}
                          </div>
                          <div>
                            <h3 className="font-semibold text-white">{concept.title}</h3>
                            {concept.titleHindi && (
                              <p className="text-sm text-indigo-400">{concept.titleHindi}</p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 bg-slate-600 rounded text-xs text-slate-300">
                            {concept.category}
                          </span>
                          {expandedConcept === concept.id ? 
                            <ChevronUp className="w-5 h-5 text-slate-400" /> : 
                            <ChevronDown className="w-5 h-5 text-slate-400" />
                          }
                        </div>
                      </div>
                      <p className="text-sm text-slate-400 mt-2">{concept.definition}</p>
                    </div>

                    {expandedConcept === concept.id && (
                      <div className="border-t border-slate-600 p-4 space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-indigo-400 mb-2">Detailed Explanation</h4>
                          <p className="text-slate-300 text-sm leading-relaxed">{concept.explanation}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-indigo-400 mb-2">Examples</h4>
                          <ul className="space-y-1">
                            {concept.examples.map((ex, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                {ex}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-indigo-400 mb-2">Related Concepts</h4>
                          <div className="flex flex-wrap gap-2">
                            {concept.relatedConcepts.map((rc, idx) => (
                              <span key={idx} className="px-2 py-1 bg-indigo-900/30 text-indigo-300 rounded text-xs">
                                {rc}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-xs text-slate-500">
                          Chapter: {concept.chapter}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Amendments Tab */}
          {activeTab === 'amendments' && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-400" />
                Important Constitutional Amendments
              </h3>
              {IMPORTANT_AMENDMENTS.map((amendment, idx) => (
                <div key={idx} className="bg-slate-700/50 rounded-xl p-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-16 h-16 bg-indigo-600 rounded-lg flex flex-col items-center justify-center">
                      <span className="text-xs text-indigo-200">Amendment</span>
                      <span className="text-xl font-bold text-white">{amendment.number}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-slate-600 rounded text-xs text-slate-300">
                          Year: {amendment.year}
                        </span>
                      </div>
                      <p className="text-slate-200 font-medium">{amendment.description}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 mt-3 p-2 bg-indigo-900/20 rounded">
                    <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-indigo-300">{amendment.importance}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Thinkers Tab */}
          {activeTab === 'thinkers' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-400" />
                Political Thinkers
              </h3>
              {POLITICAL_THINKERS.map((thinker, idx) => (
                <div key={idx} className="bg-slate-700/50 rounded-xl p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-2xl font-bold text-white">
                      {thinker.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">{thinker.name}</h4>
                      <div className="flex items-center gap-3 text-sm text-slate-400 mt-1">
                        <span>{thinker.period}</span>
                        <span>•</span>
                        <span>{thinker.nationality}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div>
                      <h5 className="text-sm font-medium text-indigo-400 mb-2">Main Ideas</h5>
                      <div className="flex flex-wrap gap-2">
                        {thinker.mainIdeas.map((idea, iidx) => (
                          <span key={iidx} className="px-2 py-1 bg-indigo-900/30 text-indigo-300 rounded text-xs">
                            {idea}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-medium text-indigo-400 mb-2">Major Works</h5>
                      <div className="flex flex-wrap gap-2">
                        {thinker.majorWorks.map((work, widx) => (
                          <span key={widx} className="px-2 py-1 bg-slate-600 text-slate-300 rounded text-xs">
                            📖 {work}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 bg-slate-600/50 rounded-lg">
                      <p className="text-sm text-slate-300">
                        <span className="text-slate-400">Contribution:</span> {thinker.contribution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Quiz Tab */}
          {activeTab === 'quiz' && (
            <div>
              {!quizMode ? (
                <div className="text-center py-12">
                  <Brain className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Political Science Quiz</h3>
                  <p className="text-slate-400 mb-6">Test your knowledge of key concepts</p>
                  <p className="text-slate-300 mb-4">{quizConcepts.length} questions from high-importance topics</p>
                  {score > 0 && (
                    <p className="text-green-400 mb-4">Last Score: {score}/{quizConcepts.length}</p>
                  )}
                  <button
                    onClick={() => {
                      setQuizMode(true);
                      setCurrentQuizIndex(0);
                      setShowAnswer(false);
                      setScore(0);
                    }}
                    className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Start Quiz
                  </button>
                </div>
              ) : (
                <div className="max-w-2xl mx-auto">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-slate-400">
                      Question {currentQuizIndex + 1} of {quizConcepts.length}
                    </span>
                    <span className="text-green-400">Score: {score}</span>
                  </div>

                  <div className="bg-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Define: {quizConcepts[currentQuizIndex].title}
                      {quizConcepts[currentQuizIndex].titleHindi && (
                        <span className="text-indigo-400 ml-2">
                          ({quizConcepts[currentQuizIndex].titleHindi})
                        </span>
                      )}
                    </h3>

                    {!showAnswer ? (
                      <button
                        onClick={() => setShowAnswer(true)}
                        className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                      >
                        Show Answer
                      </button>
                    ) : (
                      <div className="space-y-4">
                        <div className="p-4 bg-slate-600 rounded-lg">
                          <p className="text-slate-200">{quizConcepts[currentQuizIndex].definition}</p>
                        </div>
                        <div className="p-3 bg-indigo-900/30 rounded-lg">
                          <p className="text-sm text-indigo-300">{quizConcepts[currentQuizIndex].explanation}</p>
                        </div>
                        <div className="flex gap-3">
                          <button
                            onClick={() => handleQuizAnswer(true)}
                            className="flex-1 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                          >
                            ✓ I knew it
                          </button>
                          <button
                            onClick={() => handleQuizAnswer(false)}
                            className="flex-1 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
                          >
                            ✗ Need to learn
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PoliticalScienceHub;
