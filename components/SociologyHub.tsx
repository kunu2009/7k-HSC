import React, { useState } from 'react';
import { X, Users, BookOpen, Lightbulb, Globe, ChevronDown, ChevronUp, Star, Award, Building } from 'lucide-react';

interface SociologyHubProps {
  onClose: () => void;
}

interface Concept {
  id: number;
  term: string;
  termHindi: string;
  definition: string;
  thinker?: string;
  examples: string[];
  examTips: string[];
}

interface Thinker {
  name: string;
  period: string;
  contribution: string;
  keyWorks: string[];
  keyConcepts: string[];
}

const SOCIOLOGY_CONCEPTS: Concept[] = [
  {
    id: 1,
    term: "Socialization",
    termHindi: "समाजीकरण",
    definition: "The process by which individuals learn and internalize the values, beliefs, and norms of their society and develop a sense of self.",
    thinker: "George Herbert Mead",
    examples: [
      "Family teaching children manners",
      "School teaching discipline",
      "Peer group influence on teenagers"
    ],
    examTips: [
      "Primary vs Secondary socialization",
      "Agents of socialization: Family, School, Peer group, Media",
      "Mead's 'I' and 'Me' concept"
    ]
  },
  {
    id: 2,
    term: "Social Stratification",
    termHindi: "सामाजिक स्तरीकरण",
    definition: "The hierarchical arrangement of individuals into divisions of power and wealth within a society.",
    thinker: "Max Weber",
    examples: [
      "Caste system in India",
      "Class system in Western societies",
      "Economic inequality"
    ],
    examTips: [
      "Types: Caste, Class, Estate, Slavery",
      "Weber's three dimensions: Class, Status, Power",
      "Marx's class theory"
    ]
  },
  {
    id: 3,
    term: "Social Change",
    termHindi: "सामाजिक परिवर्तन",
    definition: "The transformation of culture and social institutions over time, including changes in social structure and social relationships.",
    examples: [
      "Industrial Revolution",
      "Women's empowerment",
      "Urbanization"
    ],
    examTips: [
      "Factors: Technology, Education, Legislation",
      "Types: Evolutionary, Revolutionary",
      "Sanskritization, Westernization (M.N. Srinivas)"
    ]
  },
  {
    id: 4,
    term: "Social Control",
    termHindi: "सामाजिक नियंत्रण",
    definition: "The mechanisms, strategies, and techniques used to regulate individual and group behavior to conform to social norms.",
    examples: [
      "Laws and police (formal)",
      "Family pressure (informal)",
      "Social boycott"
    ],
    examTips: [
      "Formal vs Informal control",
      "Positive vs Negative sanctions",
      "Role of religion and customs"
    ]
  },
  {
    id: 5,
    term: "Social Institution",
    termHindi: "सामाजिक संस्था",
    definition: "Established patterns of behavior organized around particular purposes, meeting basic social needs.",
    examples: [
      "Family - reproduction, socialization",
      "Education - skill development",
      "Religion - moral guidance"
    ],
    examTips: [
      "Five major institutions: Family, Education, Religion, Economy, Government",
      "Functions of each institution",
      "Interrelationship between institutions"
    ]
  },
  {
    id: 6,
    term: "Caste System",
    termHindi: "जाति व्यवस्था",
    definition: "A hereditary system of social stratification found in India, based on birth and associated with occupations.",
    examples: [
      "Four Varnas: Brahmin, Kshatriya, Vaishya, Shudra",
      "Jati - occupational groups",
      "Untouchability (now abolished)"
    ],
    examTips: [
      "Difference between Varna and Jati",
      "Features: Hereditary, Endogamy, Hierarchy",
      "Changes in modern times"
    ]
  },
  {
    id: 7,
    term: "Family",
    termHindi: "परिवार",
    definition: "A social institution based on kinship ties involving at least two generations living together.",
    examples: [
      "Nuclear family",
      "Joint family",
      "Single-parent family"
    ],
    examTips: [
      "Types: Nuclear, Joint, Extended",
      "Functions: Reproduction, Socialization, Economic, Emotional",
      "Changes in modern family"
    ]
  },
  {
    id: 8,
    term: "Marriage",
    termHindi: "विवाह",
    definition: "A socially approved union between two individuals that establishes rights and obligations between them.",
    examples: [
      "Monogamy - one spouse",
      "Polygamy - multiple spouses",
      "Arranged vs Love marriage"
    ],
    examTips: [
      "Types: Monogamy, Polygyny, Polyandry",
      "Rules: Endogamy, Exogamy, Hypergamy",
      "Functions of marriage"
    ]
  },
  {
    id: 9,
    term: "Religion",
    termHindi: "धर्म",
    definition: "A unified system of beliefs and practices relative to sacred things, uniting believers into a moral community.",
    thinker: "Emile Durkheim",
    examples: [
      "Rituals and ceremonies",
      "Sacred texts",
      "Religious institutions"
    ],
    examTips: [
      "Durkheim's definition - Sacred vs Profane",
      "Functions: Social cohesion, Social control, Meaning",
      "Secularization in modern society"
    ]
  },
  {
    id: 10,
    term: "Culture",
    termHindi: "संस्कृति",
    definition: "The total way of life of a society including knowledge, beliefs, art, morals, laws, customs, and any other capabilities acquired by members of society.",
    examples: [
      "Language and communication",
      "Traditions and customs",
      "Art and literature"
    ],
    examTips: [
      "Material vs Non-material culture",
      "Cultural lag, Cultural diffusion",
      "Subculture and counterculture"
    ]
  },
  {
    id: 11,
    term: "Urbanization",
    termHindi: "शहरीकरण",
    definition: "The process by which large numbers of people move from rural to urban areas, leading to growth of cities.",
    examples: [
      "Migration to Mumbai, Delhi",
      "Growth of slums",
      "Urban lifestyle changes"
    ],
    examTips: [
      "Causes: Industrialization, Employment, Education",
      "Effects: Positive and Negative",
      "Urban problems in India"
    ]
  },
  {
    id: 12,
    term: "Social Mobility",
    termHindi: "सामाजिक गतिशीलता",
    definition: "The movement of individuals or groups between different positions within the system of social stratification.",
    examples: [
      "Education leading to better job",
      "Business success",
      "Marriage into higher class"
    ],
    examTips: [
      "Types: Vertical, Horizontal, Intergenerational",
      "Open vs Closed society",
      "Factors affecting mobility"
    ]
  }
];

const THINKERS: Thinker[] = [
  {
    name: "Auguste Comte",
    period: "1798-1857",
    contribution: "Father of Sociology - coined the term 'Sociology'",
    keyWorks: ["Course of Positive Philosophy"],
    keyConcepts: ["Positivism", "Law of Three Stages", "Social Statics and Dynamics"]
  },
  {
    name: "Emile Durkheim",
    period: "1858-1917",
    contribution: "Established sociology as academic discipline",
    keyWorks: ["The Rules of Sociological Method", "Suicide", "Division of Labour"],
    keyConcepts: ["Social Facts", "Mechanical & Organic Solidarity", "Anomie"]
  },
  {
    name: "Max Weber",
    period: "1864-1920",
    contribution: "Interpretive sociology and bureaucracy theory",
    keyWorks: ["Protestant Ethic and Spirit of Capitalism", "Economy and Society"],
    keyConcepts: ["Social Action", "Ideal Type", "Bureaucracy", "Rationalization"]
  },
  {
    name: "Karl Marx",
    period: "1818-1883",
    contribution: "Conflict theory and class struggle",
    keyWorks: ["Das Kapital", "Communist Manifesto"],
    keyConcepts: ["Class Conflict", "Alienation", "Historical Materialism", "Bourgeoisie vs Proletariat"]
  },
  {
    name: "M.N. Srinivas",
    period: "1916-1999",
    contribution: "Indian sociologist - studied caste and social change",
    keyWorks: ["Religion and Society among the Coorgs"],
    keyConcepts: ["Sanskritization", "Westernization", "Dominant Caste"]
  },
  {
    name: "G.S. Ghurye",
    period: "1893-1983",
    contribution: "Father of Indian Sociology",
    keyWorks: ["Caste and Race in India"],
    keyConcepts: ["Study of Caste", "Indian Culture", "Tribal Studies"]
  }
];

const CATEGORIES = ['All', 'Basic Concepts', 'Family & Marriage', 'Stratification', 'Change & Control'];

const SociologyHub: React.FC<SociologyHubProps> = ({ onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedConcept, setExpandedConcept] = useState<number | null>(null);
  const [showThinkers, setShowThinkers] = useState(false);
  const [expandedThinker, setExpandedThinker] = useState<string | null>(null);

  const filterConcepts = () => {
    if (selectedCategory === 'All') return SOCIOLOGY_CONCEPTS;
    if (selectedCategory === 'Basic Concepts') return SOCIOLOGY_CONCEPTS.filter(c => [1, 5, 9, 10].includes(c.id));
    if (selectedCategory === 'Family & Marriage') return SOCIOLOGY_CONCEPTS.filter(c => [7, 8].includes(c.id));
    if (selectedCategory === 'Stratification') return SOCIOLOGY_CONCEPTS.filter(c => [2, 6, 12].includes(c.id));
    if (selectedCategory === 'Change & Control') return SOCIOLOGY_CONCEPTS.filter(c => [3, 4, 11].includes(c.id));
    return SOCIOLOGY_CONCEPTS;
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 rounded-2xl w-full max-w-5xl max-h-[95vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="bg-black/30 p-4 sm:p-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-violet-200 flex items-center gap-2">
              <Users className="w-6 h-6" />
              Sociology Hub - समाजशास्त्र
            </h2>
            <p className="text-violet-300/70 text-sm mt-1">
              Key Concepts, Thinkers & Exam Preparation
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-violet-200 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="bg-black/20 p-3 flex flex-wrap gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                selectedCategory === cat
                  ? 'bg-violet-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
          <button
            onClick={() => setShowThinkers(!showThinkers)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ml-auto ${
              showThinkers
                ? 'bg-yellow-500 text-white'
                : 'bg-yellow-500/30 text-yellow-300 hover:bg-yellow-500/50'
            }`}
          >
            <Award className="w-4 h-4 inline mr-1" />
            Thinkers
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* Thinkers Section */}
          {showThinkers && (
            <div className="mb-6 bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/30">
              <h3 className="font-semibold text-yellow-300 mb-3 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Important Sociologists
              </h3>
              <div className="space-y-3">
                {THINKERS.map((thinker) => (
                  <div key={thinker.name} className="bg-black/20 rounded-lg overflow-hidden">
                    <div
                      onClick={() => setExpandedThinker(expandedThinker === thinker.name ? null : thinker.name)}
                      className="p-3 cursor-pointer hover:bg-white/5 flex justify-between items-center"
                    >
                      <div>
                        <span className="text-yellow-200 font-bold">{thinker.name}</span>
                        <span className="text-gray-400 text-sm ml-2">({thinker.period})</span>
                      </div>
                      {expandedThinker === thinker.name ? (
                        <ChevronUp className="w-4 h-4 text-yellow-300" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-yellow-300" />
                      )}
                    </div>
                    {expandedThinker === thinker.name && (
                      <div className="p-3 border-t border-yellow-500/20 space-y-2">
                        <p className="text-green-300 text-sm">📚 {thinker.contribution}</p>
                        <div>
                          <span className="text-gray-400 text-xs">Key Works: </span>
                          <span className="text-gray-300 text-sm">{thinker.keyWorks.join(', ')}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {thinker.keyConcepts.map((concept, idx) => (
                            <span key={idx} className="bg-yellow-500/20 text-yellow-200 px-2 py-0.5 rounded text-xs">
                              {concept}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Concepts */}
          <div className="space-y-3">
            {filterConcepts().map((concept) => (
              <div
                key={concept.id}
                className="bg-black/20 rounded-xl overflow-hidden border border-violet-500/30"
              >
                <div
                  onClick={() => setExpandedConcept(expandedConcept === concept.id ? null : concept.id)}
                  className="p-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-white text-lg">
                        {concept.term}
                      </h3>
                      <p className="text-violet-300/70 text-sm">
                        {concept.termHindi}
                        {concept.thinker && <span className="ml-2 text-yellow-300/70">• {concept.thinker}</span>}
                      </p>
                    </div>
                    {expandedConcept === concept.id ? (
                      <ChevronUp className="w-5 h-5 text-violet-300" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-violet-300" />
                    )}
                  </div>
                </div>

                {expandedConcept === concept.id && (
                  <div className="p-4 border-t border-violet-500/30 space-y-4">
                    {/* Definition */}
                    <div className="bg-blue-500/10 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-300 mb-2 flex items-center gap-2">
                        <BookOpen className="w-4 h-4" /> Definition
                      </h4>
                      <p className="text-gray-200 text-sm">{concept.definition}</p>
                    </div>

                    {/* Examples */}
                    <div className="bg-green-500/10 rounded-lg p-4">
                      <h4 className="font-semibold text-green-300 mb-2 flex items-center gap-2">
                        <Globe className="w-4 h-4" /> Examples
                      </h4>
                      <ul className="space-y-1">
                        {concept.examples.map((ex, idx) => (
                          <li key={idx} className="text-gray-200 text-sm flex items-start gap-2">
                            <span className="text-green-400">•</span>
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Exam Tips */}
                    <div className="bg-red-500/10 rounded-lg p-4">
                      <h4 className="font-semibold text-red-300 mb-2 flex items-center gap-2">
                        <Star className="w-4 h-4" /> Exam Tips
                      </h4>
                      <ul className="space-y-1">
                        {concept.examTips.map((tip, idx) => (
                          <li key={idx} className="text-gray-200 text-sm flex items-start gap-2">
                            <span className="text-red-400">⚡</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-black/30 p-4 flex justify-between items-center text-sm text-violet-300/70">
          <span>{filterConcepts().length} concepts • {THINKERS.length} thinkers</span>
          <span>HSC Maharashtra Board - Sociology</span>
        </div>
      </div>
    </div>
  );
};

export default SociologyHub;
