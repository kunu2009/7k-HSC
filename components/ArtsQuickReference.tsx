import React, { useState } from 'react';
import { 
  X, Calculator, BookOpen, Users, Landmark, IndianRupee,
  History, Languages, ChevronRight, Star, Copy, Check,
  TrendingUp, BarChart2, PieChart, Scale, Coins, Building2
} from 'lucide-react';

interface ArtsQuickReferenceProps {
  onClose: () => void;
}

type TabType = 'eco-formulas' | 'eco-terms' | 'his-persons' | 'pol-orgs' | 'eng-devices';

interface Formula {
  id: string;
  name: string;
  formula: string;
  explanation: string;
  example?: string;
  chapter: string;
}

interface Term {
  id: string;
  term: string;
  definition: string;
  chapter: string;
}

interface Person {
  id: string;
  name: string;
  contribution: string;
  period: string;
  chapter: string;
  important: boolean;
}

interface Organization {
  id: string;
  name: string;
  fullForm: string;
  year: string;
  hq: string;
  members: string;
  purpose: string;
}

interface LiteraryDevice {
  id: string;
  name: string;
  definition: string;
  example: string;
}

// Economics Formulas
const ECO_FORMULAS: Formula[] = [
  // Elasticity
  { id: 'ef1', name: 'Price Elasticity of Demand (Ed)', formula: 'Ed = (% Change in Quantity Demanded) / (% Change in Price)', explanation: 'Measures responsiveness of demand to price change', example: 'If price ↑ 10% and demand ↓ 20%, Ed = 20/10 = 2 (elastic)', chapter: 'Elasticity' },
  { id: 'ef2', name: 'Point Elasticity', formula: 'Ed = (ΔQ/ΔP) × (P/Q)', explanation: 'Elasticity at a specific point on demand curve', chapter: 'Elasticity' },
  { id: 'ef3', name: 'Arc Elasticity', formula: 'Ed = (Q₂-Q₁)/(Q₂+Q₁) ÷ (P₂-P₁)/(P₂+P₁)', explanation: 'Average elasticity between two points', chapter: 'Elasticity' },
  { id: 'ef4', name: 'Income Elasticity (Ei)', formula: 'Ei = (% Change in Demand) / (% Change in Income)', explanation: 'Normal goods: Ei > 0, Inferior goods: Ei < 0', chapter: 'Elasticity' },
  { id: 'ef5', name: 'Cross Elasticity (Ec)', formula: 'Ec = (% Change in Qd of A) / (% Change in Price of B)', explanation: 'Substitutes: Ec > 0, Complements: Ec < 0', chapter: 'Elasticity' },
  
  // National Income
  { id: 'ef6', name: 'GDP', formula: 'GDP = C + I + G + (X - M)', explanation: 'C=Consumption, I=Investment, G=Govt spending, X=Exports, M=Imports', chapter: 'National Income' },
  { id: 'ef7', name: 'GNP', formula: 'GNP = GDP + NFIA', explanation: 'NFIA = Net Factor Income from Abroad', chapter: 'National Income' },
  { id: 'ef8', name: 'NNP', formula: 'NNP = GNP - Depreciation', explanation: 'Net National Product at Market Price', chapter: 'National Income' },
  { id: 'ef9', name: 'National Income (NI)', formula: 'NI = NNP at FC = NNP at MP - Indirect Taxes + Subsidies', explanation: 'Also called NNP at Factor Cost', chapter: 'National Income' },
  { id: 'ef10', name: 'Per Capita Income', formula: 'PCI = National Income / Population', explanation: 'Average income per person', chapter: 'National Income' },
  
  // Index Numbers
  { id: 'ef11', name: 'Simple Price Index', formula: 'P₀₁ = (P₁/P₀) × 100', explanation: 'P₁ = Current price, P₀ = Base year price', chapter: 'Index Numbers' },
  { id: 'ef12', name: 'Laspeyre\'s Index', formula: 'P₀₁ = (ΣP₁Q₀ / ΣP₀Q₀) × 100', explanation: 'Uses base year quantities as weights', chapter: 'Index Numbers' },
  { id: 'ef13', name: 'Paasche\'s Index', formula: 'P₀₁ = (ΣP₁Q₁ / ΣP₀Q₁) × 100', explanation: 'Uses current year quantities as weights', chapter: 'Index Numbers' },
  { id: 'ef14', name: 'Fisher\'s Ideal Index', formula: 'P₀₁ = √(Laspeyre × Paasche)', explanation: 'Geometric mean of Laspeyre & Paasche', chapter: 'Index Numbers' },
  
  // Market Forms
  { id: 'ef15', name: 'Total Revenue', formula: 'TR = Price × Quantity', explanation: 'Total income from sales', chapter: 'Market Forms' },
  { id: 'ef16', name: 'Average Revenue', formula: 'AR = TR / Q = Price', explanation: 'Revenue per unit = Demand curve', chapter: 'Market Forms' },
  { id: 'ef17', name: 'Marginal Revenue', formula: 'MR = ΔTR / ΔQ', explanation: 'Additional revenue from one more unit', chapter: 'Market Forms' },
  { id: 'ef18', name: 'Profit Maximization', formula: 'MC = MR', explanation: 'Equilibrium condition for all firms', chapter: 'Market Forms' },
  
  // Money & Banking
  { id: 'ef19', name: 'Money Multiplier', formula: 'M = 1 / CRR', explanation: 'If CRR = 5%, M = 1/0.05 = 20', chapter: 'Money Market' },
  { id: 'ef20', name: 'Inflation Rate', formula: 'IR = [(CPI₁ - CPI₀) / CPI₀] × 100', explanation: 'Percentage change in price level', chapter: 'Money Market' },
];

// Economics Terms
const ECO_TERMS: Term[] = [
  { id: 'et1', term: 'Elasticity', definition: 'Degree of responsiveness of one variable to change in another variable', chapter: 'Elasticity' },
  { id: 'et2', term: 'Unitary Elastic', definition: 'When Ed = 1, % change in demand = % change in price', chapter: 'Elasticity' },
  { id: 'et3', term: 'Perfect Competition', definition: 'Market with many buyers and sellers, homogeneous product, free entry-exit', chapter: 'Market Forms' },
  { id: 'et4', term: 'Monopoly', definition: 'Single seller, no close substitutes, barriers to entry', chapter: 'Market Forms' },
  { id: 'et5', term: 'Oligopoly', definition: 'Few large sellers, interdependent pricing, difficult entry', chapter: 'Market Forms' },
  { id: 'et6', term: 'Monopolistic Competition', definition: 'Many sellers, differentiated products, easy entry-exit', chapter: 'Market Forms' },
  { id: 'et7', term: 'Budget Deficit', definition: 'When government expenditure exceeds revenue', chapter: 'Public Finance' },
  { id: 'et8', term: 'Fiscal Policy', definition: 'Government policy on taxation and spending', chapter: 'Public Finance' },
  { id: 'et9', term: 'Monetary Policy', definition: 'RBI policy to control money supply and interest rates', chapter: 'Money Market' },
  { id: 'et10', term: 'CRR', definition: 'Cash Reserve Ratio - % of deposits banks must keep with RBI', chapter: 'Money Market' },
  { id: 'et11', term: 'SLR', definition: 'Statutory Liquidity Ratio - % of deposits in liquid assets', chapter: 'Money Market' },
  { id: 'et12', term: 'Repo Rate', definition: 'Rate at which RBI lends to commercial banks', chapter: 'Money Market' },
  { id: 'et13', term: 'Reverse Repo', definition: 'Rate at which RBI borrows from commercial banks', chapter: 'Money Market' },
  { id: 'et14', term: 'Balance of Trade', definition: 'Difference between exports and imports of goods', chapter: 'Foreign Trade' },
  { id: 'et15', term: 'Balance of Payments', definition: 'Record of all economic transactions between a country and rest of world', chapter: 'Foreign Trade' },
  { id: 'et16', term: 'Depreciation', definition: 'Decrease in value of capital goods due to wear and tear', chapter: 'National Income' },
  { id: 'et17', term: 'Transfer Payments', definition: 'Payments without corresponding goods/services (pensions, subsidies)', chapter: 'National Income' },
  { id: 'et18', term: 'Direct Tax', definition: 'Tax where burden cannot be shifted (Income tax, Wealth tax)', chapter: 'Public Finance' },
  { id: 'et19', term: 'Indirect Tax', definition: 'Tax where burden can be shifted (GST, Excise)', chapter: 'Public Finance' },
  { id: 'et20', term: 'Progressive Tax', definition: 'Tax rate increases with income level', chapter: 'Public Finance' },
];

// Important Historical Persons
const IMPORTANT_PERSONS: Person[] = [
  // Renaissance & Discoveries
  { id: 'hp1', name: 'Johannes Gutenberg', contribution: 'Invented printing press (1440)', period: '1400-1468', chapter: 'Renaissance', important: true },
  { id: 'hp2', name: 'Leonardo da Vinci', contribution: 'Painter, scientist, inventor - Mona Lisa, Last Supper', period: '1452-1519', chapter: 'Renaissance', important: true },
  { id: 'hp3', name: 'Michelangelo', contribution: 'Sculptor, painter - David, Sistine Chapel', period: '1475-1564', chapter: 'Renaissance', important: true },
  { id: 'hp4', name: 'Nicolaus Copernicus', contribution: 'Heliocentric theory - Sun is center', period: '1473-1543', chapter: 'Renaissance', important: true },
  { id: 'hp5', name: 'Galileo Galilei', contribution: 'Improved telescope, supported heliocentrism', period: '1564-1642', chapter: 'Renaissance', important: true },
  { id: 'hp6', name: 'Martin Luther', contribution: 'Protestant Reformation, 95 Theses (1517)', period: '1483-1546', chapter: 'Renaissance', important: true },
  { id: 'hp7', name: 'Vasco da Gama', contribution: 'Discovered sea route to India (1498)', period: '1469-1524', chapter: 'Discoveries', important: true },
  { id: 'hp8', name: 'Christopher Columbus', contribution: 'Discovered America (1492)', period: '1451-1506', chapter: 'Discoveries', important: true },
  { id: 'hp9', name: 'Ferdinand Magellan', contribution: 'First circumnavigation of earth', period: '1480-1521', chapter: 'Discoveries', important: true },
  
  // French Revolution
  { id: 'hp10', name: 'Louis XVI', contribution: 'Last king of France before Revolution', period: '1754-1793', chapter: 'French Revolution', important: true },
  { id: 'hp11', name: 'Napoleon Bonaparte', contribution: 'French military leader, Emperor (1804)', period: '1769-1821', chapter: 'French Revolution', important: true },
  { id: 'hp12', name: 'Robespierre', contribution: 'Leader of Reign of Terror', period: '1758-1794', chapter: 'French Revolution', important: false },
  
  // Industrial Revolution
  { id: 'hp13', name: 'James Watt', contribution: 'Improved steam engine', period: '1736-1819', chapter: 'Industrial Revolution', important: true },
  { id: 'hp14', name: 'Adam Smith', contribution: 'Father of Economics - "Wealth of Nations"', period: '1723-1790', chapter: 'Industrial Revolution', important: true },
  { id: 'hp15', name: 'Karl Marx', contribution: 'Communist Manifesto, Das Kapital', period: '1818-1883', chapter: 'Industrial Revolution', important: true },
  
  // Indian Freedom Struggle
  { id: 'hp16', name: 'Raja Ram Mohan Roy', contribution: 'Brahmo Samaj (1828), Social reforms, Sati abolition', period: '1772-1833', chapter: 'Social Reforms', important: true },
  { id: 'hp17', name: 'Jyotiba Phule', contribution: 'Satya Shodhak Samaj, Women\'s education', period: '1827-1890', chapter: 'Social Reforms', important: true },
  { id: 'hp18', name: 'Swami Dayanand', contribution: 'Arya Samaj (1875), Vedic reform', period: '1824-1883', chapter: 'Social Reforms', important: true },
  { id: 'hp19', name: 'Swami Vivekananda', contribution: 'Ramakrishna Mission, Chicago speech (1893)', period: '1863-1902', chapter: 'Social Reforms', important: true },
  { id: 'hp20', name: 'Dadabhai Naoroji', contribution: 'Drain of Wealth theory, Grand Old Man of India', period: '1825-1917', chapter: 'Freedom Struggle', important: true },
  { id: 'hp21', name: 'Bal Gangadhar Tilak', contribution: '"Swaraj is my birthright", Extremist leader', period: '1856-1920', chapter: 'Freedom Struggle', important: true },
  { id: 'hp22', name: 'Gopal Krishna Gokhale', contribution: 'Moderate leader, Gandhi\'s political guru', period: '1866-1915', chapter: 'Freedom Struggle', important: true },
  { id: 'hp23', name: 'Mahatma Gandhi', contribution: 'Non-violence, Satyagraha, Father of Nation', period: '1869-1948', chapter: 'Freedom Struggle', important: true },
  { id: 'hp24', name: 'Jawaharlal Nehru', contribution: 'First PM, Discovery of India, Non-Alignment', period: '1889-1964', chapter: 'Freedom Struggle', important: true },
  { id: 'hp25', name: 'Subhas Chandra Bose', contribution: 'INA, "Give me blood...", Netaji', period: '1897-1945', chapter: 'Freedom Struggle', important: true },
  { id: 'hp26', name: 'Sardar Patel', contribution: 'Iron Man, Integration of princely states', period: '1875-1950', chapter: 'Freedom Struggle', important: true },
  { id: 'hp27', name: 'B.R. Ambedkar', contribution: 'Father of Constitution, Dalit rights', period: '1891-1956', chapter: 'Freedom Struggle', important: true },
  
  // World Wars
  { id: 'hp28', name: 'Adolf Hitler', contribution: 'Nazi Germany, World War II', period: '1889-1945', chapter: 'World Wars', important: true },
  { id: 'hp29', name: 'Winston Churchill', contribution: 'British PM during WWII', period: '1874-1965', chapter: 'World Wars', important: true },
  { id: 'hp30', name: 'Franklin Roosevelt', contribution: 'US President during WWII, New Deal', period: '1882-1945', chapter: 'World Wars', important: true },
];

// International Organizations
const ORGANIZATIONS: Organization[] = [
  { id: 'org1', name: 'UNO', fullForm: 'United Nations Organization', year: '1945', hq: 'New York', members: '193 countries', purpose: 'International peace, security, human rights' },
  { id: 'org2', name: 'WTO', fullForm: 'World Trade Organization', year: '1995', hq: 'Geneva', members: '164 countries', purpose: 'Regulate international trade' },
  { id: 'org3', name: 'NATO', fullForm: 'North Atlantic Treaty Organization', year: '1949', hq: 'Brussels', members: '31 countries', purpose: 'Military alliance of Western countries' },
  { id: 'org4', name: 'SAARC', fullForm: 'South Asian Association for Regional Cooperation', year: '1985', hq: 'Kathmandu', members: '8 countries', purpose: 'Regional cooperation in South Asia' },
  { id: 'org5', name: 'BRICS', fullForm: 'Brazil, Russia, India, China, South Africa', year: '2006', hq: 'Rotating', members: '5 countries (expanding)', purpose: 'Emerging economies cooperation' },
  { id: 'org6', name: 'G20', fullForm: 'Group of Twenty', year: '1999', hq: 'Rotating', members: '19 countries + EU', purpose: 'Global economic cooperation' },
  { id: 'org7', name: 'IMF', fullForm: 'International Monetary Fund', year: '1944', hq: 'Washington DC', members: '190 countries', purpose: 'Global monetary cooperation, financial stability' },
  { id: 'org8', name: 'World Bank', fullForm: 'International Bank for Reconstruction and Development', year: '1944', hq: 'Washington DC', members: '189 countries', purpose: 'Reduce poverty, finance development' },
  { id: 'org9', name: 'EU', fullForm: 'European Union', year: '1993 (Maastricht)', hq: 'Brussels', members: '27 countries', purpose: 'Economic and political union of Europe' },
  { id: 'org10', name: 'ASEAN', fullForm: 'Association of Southeast Asian Nations', year: '1967', hq: 'Jakarta', members: '10 countries', purpose: 'Southeast Asian cooperation' },
];

// Literary Devices
const LITERARY_DEVICES: LiteraryDevice[] = [
  { id: 'ld1', name: 'Simile', definition: 'Comparison using "like" or "as"', example: 'Her eyes sparkled like diamonds.' },
  { id: 'ld2', name: 'Metaphor', definition: 'Direct comparison without like/as', example: 'Life is a journey.' },
  { id: 'ld3', name: 'Personification', definition: 'Giving human qualities to non-human things', example: 'The wind whispered secrets.' },
  { id: 'ld4', name: 'Alliteration', definition: 'Repetition of initial consonant sounds', example: 'Peter Piper picked a peck...' },
  { id: 'ld5', name: 'Hyperbole', definition: 'Extreme exaggeration', example: 'I have told you a million times.' },
  { id: 'ld6', name: 'Irony', definition: 'Opposite of what is expected', example: 'A fire station burns down.' },
  { id: 'ld7', name: 'Onomatopoeia', definition: 'Words that imitate sounds', example: 'Buzz, hiss, splash, bang' },
  { id: 'ld8', name: 'Oxymoron', definition: 'Contradictory terms together', example: 'Deafening silence, living dead' },
  { id: 'ld9', name: 'Paradox', definition: 'Self-contradictory statement with truth', example: 'Less is more.' },
  { id: 'ld10', name: 'Imagery', definition: 'Descriptive language appealing to senses', example: 'The golden sun sank into the crimson sea.' },
  { id: 'ld11', name: 'Symbolism', definition: 'Object representing something else', example: 'Dove = peace, Rose = love' },
  { id: 'ld12', name: 'Foreshadowing', definition: 'Hints about future events', example: 'Dark clouds gathered before the tragedy.' },
  { id: 'ld13', name: 'Flashback', definition: 'Scene from the past interrupting present', example: 'He remembered his childhood days...' },
  { id: 'ld14', name: 'Apostrophe', definition: 'Addressing absent person/thing', example: 'O Death, where is thy sting?' },
  { id: 'ld15', name: 'Euphemism', definition: 'Mild expression for harsh reality', example: 'Passed away = died' },
];

const ArtsQuickReference: React.FC<ArtsQuickReferenceProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<TabType>('eco-formulas');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const tabs = [
    { id: 'eco-formulas' as TabType, label: 'Eco Formulas', icon: Calculator, color: 'text-indigo-500' },
    { id: 'eco-terms' as TabType, label: 'Eco Terms', icon: IndianRupee, color: 'text-green-500' },
    { id: 'his-persons' as TabType, label: 'History Persons', icon: Users, color: 'text-orange-500' },
    { id: 'pol-orgs' as TabType, label: 'Organizations', icon: Landmark, color: 'text-red-500' },
    { id: 'eng-devices' as TabType, label: 'Literary Devices', icon: BookOpen, color: 'text-yellow-500' },
  ];

  const filteredFormulas = ECO_FORMULAS.filter(f => 
    f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.chapter.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTerms = ECO_TERMS.filter(t =>
    t.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.chapter.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPersons = IMPORTANT_PERSONS.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.contribution.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.chapter.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredOrgs = ORGANIZATIONS.filter(o =>
    o.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    o.fullForm.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredDevices = LITERARY_DEVICES.filter(d =>
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <BookOpen size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Quick Reference</h2>
                <p className="text-white/80 text-sm">Formulas, Terms, Persons & More</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Search */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-slate-200 dark:border-slate-700 overflow-x-auto">
          <div className="flex p-2 gap-1 min-w-max">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition ${
                    activeTab === tab.id
                      ? 'bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon size={16} className={activeTab === tab.id ? tab.color : ''} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 250px)' }}>
          {/* Economics Formulas */}
          {activeTab === 'eco-formulas' && (
            <div className="space-y-3">
              {filteredFormulas.map(formula => (
                <div key={formula.id} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-slate-800 dark:text-white">{formula.name}</h3>
                        <span className="px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs rounded-full">
                          {formula.chapter}
                        </span>
                      </div>
                      <div className="mt-2 p-2 bg-white dark:bg-slate-700 rounded-lg font-mono text-sm text-indigo-600 dark:text-indigo-400">
                        {formula.formula}
                      </div>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{formula.explanation}</p>
                      {formula.example && (
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-500 italic">Example: {formula.example}</p>
                      )}
                    </div>
                    <button
                      onClick={() => copyToClipboard(formula.formula, formula.id)}
                      className="p-2 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition"
                    >
                      {copiedId === formula.id ? <Check size={16} className="text-green-500" /> : <Copy size={16} className="text-slate-400" />}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Economics Terms */}
          {activeTab === 'eco-terms' && (
            <div className="grid md:grid-cols-2 gap-3">
              {filteredTerms.map(term => (
                <div key={term.id} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-slate-800 dark:text-white">{term.term}</h3>
                    <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs rounded-full">
                      {term.chapter}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{term.definition}</p>
                </div>
              ))}
            </div>
          )}

          {/* History Persons */}
          {activeTab === 'his-persons' && (
            <div className="space-y-3">
              {filteredPersons.map(person => (
                <div key={person.id} className={`rounded-xl p-4 border ${
                  person.important 
                    ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800'
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                }`}>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                      <Users size={18} className="text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-slate-800 dark:text-white">{person.name}</h3>
                        {person.important && <Star size={14} className="text-orange-500 fill-orange-500" />}
                        <span className="px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs rounded-full">
                          {person.chapter}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{person.contribution}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{person.period}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Organizations */}
          {activeTab === 'pol-orgs' && (
            <div className="space-y-3">
              {filteredOrgs.map(org => (
                <div key={org.id} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                      <Landmark size={18} className="text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-800 dark:text-white">{org.name}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{org.fullForm}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
                    <div className="text-center p-2 bg-white dark:bg-slate-700 rounded-lg">
                      <p className="text-xs text-slate-500 dark:text-slate-400">Founded</p>
                      <p className="font-semibold text-slate-800 dark:text-white">{org.year}</p>
                    </div>
                    <div className="text-center p-2 bg-white dark:bg-slate-700 rounded-lg">
                      <p className="text-xs text-slate-500 dark:text-slate-400">HQ</p>
                      <p className="font-semibold text-slate-800 dark:text-white">{org.hq}</p>
                    </div>
                    <div className="text-center p-2 bg-white dark:bg-slate-700 rounded-lg col-span-2">
                      <p className="text-xs text-slate-500 dark:text-slate-400">Members</p>
                      <p className="font-semibold text-slate-800 dark:text-white">{org.members}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
                    <strong>Purpose:</strong> {org.purpose}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Literary Devices */}
          {activeTab === 'eng-devices' && (
            <div className="grid md:grid-cols-2 gap-3">
              {filteredDevices.map(device => (
                <div key={device.id} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                  <h3 className="font-semibold text-slate-800 dark:text-white flex items-center gap-2">
                    <BookOpen size={16} className="text-yellow-500" />
                    {device.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">{device.definition}</p>
                  <div className="mt-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg text-sm italic text-yellow-700 dark:text-yellow-300">
                    "{device.example}"
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 dark:border-slate-700 p-4 bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
            <span>
              {activeTab === 'eco-formulas' && `${filteredFormulas.length} formulas`}
              {activeTab === 'eco-terms' && `${filteredTerms.length} terms`}
              {activeTab === 'his-persons' && `${filteredPersons.length} historical figures`}
              {activeTab === 'pol-orgs' && `${filteredOrgs.length} organizations`}
              {activeTab === 'eng-devices' && `${filteredDevices.length} literary devices`}
            </span>
            <span>Maharashtra HSC Arts 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtsQuickReference;
