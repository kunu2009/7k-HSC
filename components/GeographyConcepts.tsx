import React, { useState, useMemo } from 'react';
import { X, Globe, Search, ChevronDown, ChevronUp, Star, CheckCircle, Map, Layers, Mountain, Droplets, Wind, Sun, Users, Factory, Leaf, Target, BookOpen, Brain } from 'lucide-react';

interface GeographyConceptsProps {
  onClose: () => void;
}

interface GeoConcept {
  id: string;
  title: string;
  titleHindi: string;
  chapter: string;
  category: 'physical' | 'human' | 'economic' | 'environmental' | 'india';
  definition: string;
  explanation: string;
  keyPoints: string[];
  examples: string[];
  diagram?: string;
  examImportance: 'high' | 'medium' | 'low';
  relatedTopics: string[];
}

interface MapPoint {
  id: string;
  name: string;
  category: 'river' | 'mountain' | 'city' | 'dam' | 'port' | 'industry' | 'national_park';
  location: string;
  importance: string;
}

const GEO_CONCEPTS: GeoConcept[] = [
  // Physical Geography
  {
    id: 'p1',
    title: 'Weathering',
    titleHindi: 'अपक्षय',
    chapter: 'Chapter 1: Geomorphology',
    category: 'physical',
    definition: 'The process of disintegration and decomposition of rocks in situ (at their original place) due to physical, chemical, and biological factors.',
    explanation: 'Weathering is the first step in soil formation. Unlike erosion, weathering does not involve transportation. It prepares rocks for erosion by breaking them down.',
    keyPoints: [
      'Physical weathering: Temperature changes, frost action, pressure release',
      'Chemical weathering: Oxidation, hydration, carbonation, solution',
      'Biological weathering: Root growth, burrowing animals, lichens',
      'Climate affects type of weathering - hot desert vs humid tropical'
    ],
    examples: ['Exfoliation in deserts', 'Frost wedging in cold regions', 'Limestone solution forming caves'],
    examImportance: 'high',
    relatedTopics: ['Erosion', 'Soil Formation', 'Mass Wasting']
  },
  {
    id: 'p2',
    title: 'Plate Tectonics',
    titleHindi: 'प्लेट विवर्तनिकी',
    chapter: 'Chapter 1: Geomorphology',
    category: 'physical',
    definition: 'The theory that Earth\'s outer shell is divided into several plates that glide over the mantle and interact at boundaries.',
    explanation: 'Plate tectonics explains earthquakes, volcanoes, mountain building, and continental drift. There are three types of plate boundaries: convergent, divergent, and transform.',
    keyPoints: [
      'Lithosphere divided into 7 major and several minor plates',
      'Convergent: Plates collide (Himalayas, Andes)',
      'Divergent: Plates move apart (Mid-Atlantic Ridge)',
      'Transform: Plates slide past (San Andreas Fault)',
      'Convection currents in mantle drive plate movement'
    ],
    examples: ['India-Eurasia collision forming Himalayas', 'Pacific Ring of Fire', 'East African Rift Valley'],
    examImportance: 'high',
    relatedTopics: ['Earthquakes', 'Volcanoes', 'Mountain Building']
  },
  {
    id: 'p3',
    title: 'Atmospheric Circulation',
    titleHindi: 'वायुमंडलीय परिसंचरण',
    chapter: 'Chapter 2: Climatology',
    category: 'physical',
    definition: 'The large-scale movement of air by which heat is distributed on Earth\'s surface.',
    explanation: 'Global circulation patterns result from differential heating of Earth\'s surface, Coriolis effect, and pressure differences. Three-cell model explains wind patterns.',
    keyPoints: [
      'Hadley Cell: 0°-30° latitude, trade winds',
      'Ferrel Cell: 30°-60° latitude, westerlies',
      'Polar Cell: 60°-90° latitude, polar easterlies',
      'ITCZ: Inter-Tropical Convergence Zone shifts seasonally',
      'Monsoons are seasonal reversal of winds'
    ],
    examples: ['Trade winds in tropics', 'Westerlies in mid-latitudes', 'Indian monsoon system'],
    examImportance: 'high',
    relatedTopics: ['Monsoons', 'Pressure Belts', 'Wind Systems']
  },
  {
    id: 'p4',
    title: 'Water Cycle',
    titleHindi: 'जल चक्र',
    chapter: 'Chapter 3: Hydrology',
    category: 'physical',
    definition: 'The continuous movement of water within the Earth and atmosphere through evaporation, condensation, precipitation, and runoff.',
    explanation: 'Also called hydrological cycle. Powered by solar energy. Maintains Earth\'s water balance. Human activities are affecting the cycle through deforestation and climate change.',
    keyPoints: [
      'Evaporation from oceans, lakes, rivers',
      'Transpiration from plants (evapotranspiration)',
      'Condensation forms clouds',
      'Precipitation: rain, snow, hail, sleet',
      'Runoff, infiltration, groundwater recharge'
    ],
    examples: ['Monsoon rainfall in India', 'Groundwater depletion in Punjab', 'Glacial melt affecting rivers'],
    examImportance: 'medium',
    relatedTopics: ['Precipitation', 'Groundwater', 'Rivers']
  },
  // Human Geography
  {
    id: 'h1',
    title: 'Population Distribution',
    titleHindi: 'जनसंख्या वितरण',
    chapter: 'Chapter 4: Population',
    category: 'human',
    definition: 'The way in which people are spread across a given area, affected by physical, social, economic, and historical factors.',
    explanation: 'Population is unevenly distributed globally. Factors include climate, terrain, water availability, soil fertility, economic opportunities, and historical development.',
    keyPoints: [
      '90% population lives in 10% land area',
      'Dense: River valleys, coastal plains, industrial regions',
      'Sparse: Deserts, mountains, polar regions, forests',
      'Physical factors: Climate, terrain, water, soil',
      'Human factors: Economy, transport, government policies'
    ],
    examples: ['Ganga plains - high density', 'Thar desert - low density', 'Mumbai metropolitan - urban concentration'],
    examImportance: 'high',
    relatedTopics: ['Population Growth', 'Migration', 'Urbanization']
  },
  {
    id: 'h2',
    title: 'Migration',
    titleHindi: 'प्रवास',
    chapter: 'Chapter 4: Population',
    category: 'human',
    definition: 'The movement of people from one place to another with the intention of settling temporarily or permanently in a new location.',
    explanation: 'Migration can be internal (within country) or international. Push factors cause people to leave, pull factors attract them to new places.',
    keyPoints: [
      'Push factors: Poverty, unemployment, disasters, conflict',
      'Pull factors: Jobs, education, better life, safety',
      'Rural-urban migration dominant in India',
      'Brain drain: Skilled workers emigrating',
      'Consequences: Remittances, cultural exchange, pressure on cities'
    ],
    examples: ['Bihar to Maharashtra migration', 'IT professionals to USA', 'Syrian refugee crisis'],
    examImportance: 'high',
    relatedTopics: ['Urbanization', 'Population Growth', 'Development']
  },
  {
    id: 'h3',
    title: 'Urbanization',
    titleHindi: 'नगरीकरण',
    chapter: 'Chapter 5: Settlements',
    category: 'human',
    definition: 'The process by which an increasing proportion of a country\'s population lives in urban areas.',
    explanation: 'Urbanization is driven by rural-urban migration and natural increase in cities. Causes economic growth but also creates challenges like slums, pollution, and infrastructure strain.',
    keyPoints: [
      'India: 31% urban (2011 census)',
      'Causes: Industrialization, service sector growth, rural push',
      'Problems: Slums, traffic, pollution, water shortage',
      'Smart Cities Mission for sustainable urban development',
      'Counter-urbanization in developed countries'
    ],
    examples: ['Mumbai - financial capital', 'Bangalore - IT hub', 'Delhi NCR expansion'],
    examImportance: 'high',
    relatedTopics: ['Migration', 'Industrial Location', 'Transport']
  },
  // Economic Geography
  {
    id: 'e1',
    title: 'Agricultural Systems',
    titleHindi: 'कृषि प्रणालियाँ',
    chapter: 'Chapter 6: Agriculture',
    category: 'economic',
    definition: 'The organized ways in which farming is practiced, varying based on climate, land, technology, and economic conditions.',
    explanation: 'Agriculture can be subsistence (for self-consumption) or commercial (for market). Intensive farming uses more inputs per unit area, extensive uses more land.',
    keyPoints: [
      'Subsistence: For family consumption, low technology',
      'Commercial: For market, capital intensive',
      'Intensive: High input per unit area (wet rice)',
      'Extensive: Large area, low input (ranching)',
      'Plantation: Single crop, colonial legacy (tea, rubber)'
    ],
    examples: ['Rice cultivation in Ganga delta', 'Wheat farming in Punjab', 'Tea plantations in Assam'],
    examImportance: 'high',
    relatedTopics: ['Green Revolution', 'Irrigation', 'Crop Patterns']
  },
  {
    id: 'e2',
    title: 'Industrial Location',
    titleHindi: 'औद्योगिक अवस्थिति',
    chapter: 'Chapter 7: Industries',
    category: 'economic',
    definition: 'The factors that determine where industries are established, including raw materials, market, labor, transport, and government policies.',
    explanation: 'Weber\'s theory explains industrial location based on transport costs. Modern factors include skilled labor, infrastructure, and agglomeration economies.',
    keyPoints: [
      'Raw material oriented: Steel, sugar, cement',
      'Market oriented: Bakery, soft drinks, furniture',
      'Labor oriented: Textiles, electronics',
      'Power oriented: Aluminum, copper smelting',
      'Footloose industries: IT, pharmaceuticals'
    ],
    examples: ['Jamshedpur (TISCO) - near iron ore', 'Mumbai textile - port and labor', 'Bangalore IT - skilled workforce'],
    examImportance: 'high',
    relatedTopics: ['Manufacturing', 'Economic Development', 'Transport']
  },
  // India Geography
  {
    id: 'i1',
    title: 'Physiographic Divisions of India',
    titleHindi: 'भारत के भौतिक प्रदेश',
    chapter: 'Chapter 8: India Physical',
    category: 'india',
    definition: 'India can be divided into six major physiographic regions based on geological structure and physical features.',
    explanation: 'India\'s physical diversity includes the Himalayas in north, Indo-Gangetic plain, peninsular plateau, coastal plains, islands, and desert.',
    keyPoints: [
      '1. The Himalayan Mountains - young fold mountains',
      '2. The Northern Plains - alluvial deposits',
      '3. The Peninsular Plateau - ancient landmass',
      '4. The Coastal Plains - narrow strips',
      '5. The Islands - Andaman, Nicobar, Lakshadweep',
      '6. The Great Indian Desert (Thar)'
    ],
    examples: ['Mt. Kanchenjunga (third highest peak)', 'Ganga-Yamuna Doab', 'Deccan Plateau', 'Western Ghats'],
    examImportance: 'high',
    relatedTopics: ['Rivers of India', 'Climate of India', 'Soils of India']
  },
  {
    id: 'i2',
    title: 'Monsoon System of India',
    titleHindi: 'भारत की मानसून प्रणाली',
    chapter: 'Chapter 9: India Climate',
    category: 'india',
    definition: 'The seasonal reversal of winds bringing rainfall to India, primarily from June to September (Southwest monsoon).',
    explanation: 'India receives about 75% rainfall from Southwest monsoon. Factors affecting monsoon include ITCZ shift, land-sea temperature difference, jet streams, and El Niño.',
    keyPoints: [
      'Southwest monsoon: June-September (rainy season)',
      'Northeast monsoon: October-December (Tamil Nadu)',
      'Monsoon onset: Kerala (June 1), reaches Delhi by July',
      'Monsoon retreat: September-October',
      'El Niño causes weak monsoon, La Niña causes strong'
    ],
    examples: ['Mawsynram - highest rainfall', 'Cherrapunji monsoon', 'October heat before retreat'],
    examImportance: 'high',
    relatedTopics: ['Agriculture', 'Water Resources', 'Climate Change']
  },
  {
    id: 'i3',
    title: 'Rivers of India',
    titleHindi: 'भारत की नदियाँ',
    chapter: 'Chapter 10: Water Resources',
    category: 'india',
    definition: 'India has numerous rivers classified as Himalayan (perennial) and Peninsular (seasonal) based on their origin and flow characteristics.',
    explanation: 'Himalayan rivers are snow-fed and perennial. Peninsular rivers are rain-fed and seasonal. Rivers are crucial for irrigation, drinking water, and hydropower.',
    keyPoints: [
      'Himalayan rivers: Ganga, Indus, Brahmaputra - perennial',
      'Peninsular rivers: Godavari, Krishna, Kaveri - seasonal',
      'West-flowing: Narmada, Tapti (rift valleys)',
      'East-flowing: Mahanadi, Godavari, Krishna, Kaveri',
      'River linking project for water distribution'
    ],
    examples: ['Ganga (2525 km) longest in India', 'Brahmaputra (Tsangpo in Tibet)', 'Godavari - Dakshin Ganga'],
    examImportance: 'high',
    relatedTopics: ['Dams', 'Irrigation', 'Water Crisis']
  },
  // Environmental Geography
  {
    id: 'en1',
    title: 'Biodiversity Hotspots',
    titleHindi: 'जैव विविधता हॉटस्पॉट',
    chapter: 'Chapter 11: Environment',
    category: 'environmental',
    definition: 'Biogeographically defined regions with significant levels of biodiversity that are threatened by human activities.',
    explanation: 'Hotspots must have at least 1,500 endemic plant species and have lost at least 70% of original habitat. India has 4 hotspots out of 36 global hotspots.',
    keyPoints: [
      'India\'s 4 hotspots: Western Ghats, Eastern Himalayas, Indo-Burma, Sundaland',
      'Western Ghats: Lion-tailed macaque, Nilgiri tahr',
      'Eastern Himalayas: Red panda, snow leopard',
      'Must have 1500+ endemic plant species',
      'Must have lost 70%+ original habitat'
    ],
    examples: ['Silent Valley National Park (Western Ghats)', 'Kaziranga (one-horned rhino)', 'Sundarbans (Royal Bengal Tiger)'],
    examImportance: 'high',
    relatedTopics: ['Conservation', 'Endangered Species', 'Protected Areas']
  },
  {
    id: 'en2',
    title: 'Climate Change',
    titleHindi: 'जलवायु परिवर्तन',
    chapter: 'Chapter 12: Contemporary Issues',
    category: 'environmental',
    definition: 'Long-term shifts in global or regional climate patterns, primarily caused by human activities increasing greenhouse gas emissions.',
    explanation: 'Global warming due to greenhouse effect is causing ice melt, sea level rise, extreme weather events, and ecosystem disruption. Paris Agreement aims to limit warming to 1.5°C.',
    keyPoints: [
      'Greenhouse gases: CO2, methane, nitrous oxide, CFCs',
      'Effects: Sea level rise, extreme weather, biodiversity loss',
      'Paris Agreement 2015: Limit warming to 1.5°C',
      'India\'s NDC: 45% emission intensity reduction by 2030',
      'Net zero by 2070 (India\'s target)'
    ],
    examples: ['Himalayan glacial retreat', 'Sundarbans submersion risk', 'Chennai floods 2015', 'Heat waves in India'],
    examImportance: 'high',
    relatedTopics: ['Sustainable Development', 'Renewable Energy', 'Disaster Management']
  }
];

const MAP_POINTS: MapPoint[] = [
  // Rivers
  { id: 'r1', name: 'Ganga', category: 'river', location: 'Gangotri to Bay of Bengal', importance: 'Longest river entirely in India, holiest river' },
  { id: 'r2', name: 'Brahmaputra', category: 'river', location: 'Tibet to Bangladesh', importance: 'Largest river by volume, forms world\'s largest delta' },
  { id: 'r3', name: 'Godavari', category: 'river', location: 'Nashik to Bay of Bengal', importance: 'Longest peninsular river, Dakshin Ganga' },
  { id: 'r4', name: 'Krishna', category: 'river', location: 'Mahabaleshwar to Bay of Bengal', importance: 'Second longest peninsular river' },
  { id: 'r5', name: 'Narmada', category: 'river', location: 'Amarkantak to Arabian Sea', importance: 'Largest west-flowing peninsular river' },
  // Mountains
  { id: 'm1', name: 'Kanchenjunga', category: 'mountain', location: 'Sikkim-Nepal border', importance: 'Third highest peak in world, highest in India' },
  { id: 'm2', name: 'Western Ghats', category: 'mountain', location: 'Gujarat to Kerala', importance: 'Biodiversity hotspot, UNESCO World Heritage' },
  { id: 'm3', name: 'Eastern Ghats', category: 'mountain', location: 'Odisha to Tamil Nadu', importance: 'Discontinuous mountains, bauxite deposits' },
  { id: 'm4', name: 'Aravalli Range', category: 'mountain', location: 'Gujarat to Delhi', importance: 'Oldest fold mountains in India' },
  // Dams
  { id: 'd1', name: 'Tehri Dam', category: 'dam', location: 'Uttarakhand', importance: 'Highest dam in India (260.5m)' },
  { id: 'd2', name: 'Bhakra Nangal', category: 'dam', location: 'Himachal-Punjab border', importance: 'Second highest dam, on Sutlej river' },
  { id: 'd3', name: 'Sardar Sarovar', category: 'dam', location: 'Gujarat', importance: 'On Narmada, multi-state project' },
  { id: 'd4', name: 'Hirakud Dam', category: 'dam', location: 'Odisha', importance: 'Longest dam in India, on Mahanadi' },
  // Ports
  { id: 'po1', name: 'Mumbai Port', category: 'port', location: 'Maharashtra', importance: 'Largest port by cargo volume' },
  { id: 'po2', name: 'JNPT', category: 'port', location: 'Navi Mumbai', importance: 'Largest container port' },
  { id: 'po3', name: 'Chennai Port', category: 'port', location: 'Tamil Nadu', importance: 'Largest port in Bay of Bengal' },
  { id: 'po4', name: 'Kandla Port', category: 'port', location: 'Gujarat', importance: 'Tidal port, handles bulk cargo' },
  // National Parks
  { id: 'np1', name: 'Jim Corbett', category: 'national_park', location: 'Uttarakhand', importance: 'First national park (1936), tigers' },
  { id: 'np2', name: 'Kaziranga', category: 'national_park', location: 'Assam', importance: 'One-horned rhino, UNESCO site' },
  { id: 'np3', name: 'Sundarbans', category: 'national_park', location: 'West Bengal', importance: 'Largest mangrove, Royal Bengal Tiger' },
  { id: 'np4', name: 'Gir Forest', category: 'national_park', location: 'Gujarat', importance: 'Only home of Asiatic lions' }
];

const GeographyConcepts: React.FC<GeographyConceptsProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'concepts' | 'maps' | 'quiz'>('concepts');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedConcept, setExpandedConcept] = useState<string | null>(null);
  const [selectedMapCategory, setSelectedMapCategory] = useState<string>('all');
  const [quizMode, setQuizMode] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const filteredConcepts = useMemo(() => {
    return GEO_CONCEPTS.filter(c => {
      const matchesSearch = searchQuery === '' ||
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.titleHindi.includes(searchQuery) ||
        c.definition.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || c.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const filteredMapPoints = useMemo(() => {
    if (selectedMapCategory === 'all') return MAP_POINTS;
    return MAP_POINTS.filter(p => p.category === selectedMapCategory);
  }, [selectedMapCategory]);

  const categories = [
    { id: 'all', name: 'All', icon: Globe },
    { id: 'physical', name: 'Physical', icon: Mountain },
    { id: 'human', name: 'Human', icon: Users },
    { id: 'economic', name: 'Economic', icon: Factory },
    { id: 'india', name: 'India', icon: Map },
    { id: 'environmental', name: 'Environment', icon: Leaf }
  ];

  const mapCategories = [
    { id: 'all', name: 'All' },
    { id: 'river', name: 'Rivers' },
    { id: 'mountain', name: 'Mountains' },
    { id: 'dam', name: 'Dams' },
    { id: 'port', name: 'Ports' },
    { id: 'national_park', name: 'National Parks' }
  ];

  const quizConcepts = useMemo(() => 
    GEO_CONCEPTS.filter(c => c.examImportance === 'high').sort(() => Math.random() - 0.5),
  []);

  const getCategoryColor = (cat: string) => {
    switch(cat) {
      case 'physical': return 'bg-blue-900/30 text-blue-400';
      case 'human': return 'bg-purple-900/30 text-purple-400';
      case 'economic': return 'bg-green-900/30 text-green-400';
      case 'india': return 'bg-orange-900/30 text-orange-400';
      case 'environmental': return 'bg-emerald-900/30 text-emerald-400';
      default: return 'bg-slate-600 text-slate-300';
    }
  };

  const getMapCategoryIcon = (cat: string) => {
    switch(cat) {
      case 'river': return <Droplets className="w-4 h-4 text-blue-400" />;
      case 'mountain': return <Mountain className="w-4 h-4 text-amber-400" />;
      case 'dam': return <Layers className="w-4 h-4 text-cyan-400" />;
      case 'port': return <Globe className="w-4 h-4 text-purple-400" />;
      case 'national_park': return <Leaf className="w-4 h-4 text-green-400" />;
      default: return <Map className="w-4 h-4 text-slate-400" />;
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
                <div className="p-2 bg-emerald-600 rounded-lg">
                  <Globe className="w-6 h-6" />
                </div>
                Geography Concepts
              </h2>
              <p className="text-slate-400 mt-1">भूगोल - Physical, Human, Economic & India Geography</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
              <X className="w-6 h-6 text-slate-400" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-5 gap-3 mb-4">
            <div className="bg-slate-700/50 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-white">{GEO_CONCEPTS.length}</div>
              <div className="text-xs text-slate-400">Concepts</div>
            </div>
            <div className="bg-blue-900/30 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-blue-400">
                {GEO_CONCEPTS.filter(c => c.category === 'physical').length}
              </div>
              <div className="text-xs text-blue-300">Physical</div>
            </div>
            <div className="bg-purple-900/30 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-purple-400">
                {GEO_CONCEPTS.filter(c => c.category === 'human').length}
              </div>
              <div className="text-xs text-purple-300">Human</div>
            </div>
            <div className="bg-orange-900/30 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-orange-400">
                {GEO_CONCEPTS.filter(c => c.category === 'india').length}
              </div>
              <div className="text-xs text-orange-300">India</div>
            </div>
            <div className="bg-green-900/30 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-green-400">{MAP_POINTS.length}</div>
              <div className="text-xs text-green-300">Map Points</div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 flex-wrap">
            {[
              { id: 'concepts', label: 'Concepts', icon: BookOpen },
              { id: 'maps', label: 'Map Points', icon: Map },
              { id: 'quiz', label: 'Quiz', icon: Brain }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-emerald-600 text-white'
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
                    className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === cat.id
                          ? 'bg-emerald-600 text-white'
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
                            <p className="text-sm text-emerald-400">{concept.titleHindi}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(concept.category)}`}>
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
                          <h4 className="text-sm font-medium text-emerald-400 mb-2">Explanation</h4>
                          <p className="text-slate-300 text-sm leading-relaxed">{concept.explanation}</p>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-emerald-400 mb-2">Key Points</h4>
                          <ul className="space-y-1">
                            {concept.keyPoints.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-emerald-400 mb-2">Examples</h4>
                          <div className="flex flex-wrap gap-2">
                            {concept.examples.map((ex, idx) => (
                              <span key={idx} className="px-2 py-1 bg-emerald-900/30 text-emerald-300 rounded text-xs">
                                {ex}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-emerald-400 mb-2">Related Topics</h4>
                          <div className="flex flex-wrap gap-2">
                            {concept.relatedTopics.map((topic, idx) => (
                              <span key={idx} className="px-2 py-1 bg-slate-600 text-slate-300 rounded text-xs">
                                {topic}
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

          {/* Maps Tab */}
          {activeTab === 'maps' && (
            <div>
              <div className="flex gap-2 flex-wrap mb-4">
                {mapCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedMapCategory(cat.id)}
                    className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedMapCategory === cat.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {filteredMapPoints.map(point => (
                  <div key={point.id} className="bg-slate-700/50 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-slate-600 rounded-lg">
                        {getMapCategoryIcon(point.category)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white">{point.name}</h3>
                        <p className="text-sm text-slate-400 mt-1">{point.location}</p>
                        <p className="text-sm text-emerald-300 mt-2">{point.importance}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quiz Tab */}
          {activeTab === 'quiz' && (
            <div>
              {!quizMode ? (
                <div className="text-center py-12">
                  <Brain className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Geography Quiz</h3>
                  <p className="text-slate-400 mb-6">Test your knowledge of key geography concepts</p>
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
                    className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
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
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Define: {quizConcepts[currentQuizIndex].title}
                    </h3>
                    <p className="text-emerald-400 mb-4">{quizConcepts[currentQuizIndex].titleHindi}</p>

                    {!showAnswer ? (
                      <button
                        onClick={() => setShowAnswer(true)}
                        className="w-full py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                      >
                        Show Answer
                      </button>
                    ) : (
                      <div className="space-y-4">
                        <div className="p-4 bg-slate-600 rounded-lg">
                          <p className="text-slate-200">{quizConcepts[currentQuizIndex].definition}</p>
                        </div>
                        <div className="p-3 bg-emerald-900/30 rounded-lg">
                          <h4 className="text-emerald-400 font-medium mb-2">Key Points:</h4>
                          <ul className="space-y-1">
                            {quizConcepts[currentQuizIndex].keyPoints.slice(0, 3).map((point, idx) => (
                              <li key={idx} className="text-sm text-emerald-300">• {point}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex gap-3">
                          <button
                            onClick={() => {
                              setScore(s => s + 1);
                              if (currentQuizIndex < quizConcepts.length - 1) {
                                setCurrentQuizIndex(i => i + 1);
                                setShowAnswer(false);
                              } else {
                                setQuizMode(false);
                              }
                            }}
                            className="flex-1 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                          >
                            ✓ I knew it
                          </button>
                          <button
                            onClick={() => {
                              if (currentQuizIndex < quizConcepts.length - 1) {
                                setCurrentQuizIndex(i => i + 1);
                                setShowAnswer(false);
                              } else {
                                setQuizMode(false);
                              }
                            }}
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

export default GeographyConcepts;
