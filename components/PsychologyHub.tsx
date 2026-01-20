import React, { useState, useMemo } from 'react';
import { X, Brain, Lightbulb, Users, Heart, BookOpen, ChevronDown, ChevronUp, Star, Sparkles, Target, Award } from 'lucide-react';
import { PSY_SUBJECT } from '../data/psychology';

interface PsychologyHubProps {
  onClose: () => void;
}

interface Concept {
  id: number;
  term: string;
  termHindi: string;
  definition: string;
  psychologist?: string;
  examples: string[];
  examTips: string[];
  category: string;
}

interface Psychologist {
  name: string;
  title: string;
  contribution: string;
  theories: string[];
}

const PSYCHOLOGY_CONCEPTS: Concept[] = [
  {
    id: 1,
    term: "Psychology",
    termHindi: "मनोविज्ञान",
    definition: "The scientific study of mind and behavior, including conscious and unconscious phenomena, feelings, and thoughts.",
    examples: [
      "Studying how people learn",
      "Understanding emotions",
      "Analyzing dreams"
    ],
    examTips: [
      "Scientific study - uses observation, experiment",
      "Study of behavior (overt) and mental processes (covert)",
      "Different schools: Structuralism, Functionalism, Behaviorism, etc."
    ],
    category: "Introduction"
  },
  {
    id: 2,
    term: "Learning",
    termHindi: "अधिगम",
    definition: "A relatively permanent change in behavior or knowledge that results from experience or practice.",
    psychologist: "Various (Pavlov, Skinner, Bandura)",
    examples: [
      "Learning to ride a bicycle",
      "Memorizing facts for exam",
      "Learning fear of dogs after being bitten"
    ],
    examTips: [
      "Types: Classical conditioning, Operant conditioning, Observational",
      "Pavlov's dog experiment - Classical conditioning",
      "Skinner's box - Operant conditioning",
      "Bandura's Bobo doll - Social learning"
    ],
    category: "Learning"
  },
  {
    id: 3,
    term: "Classical Conditioning",
    termHindi: "शास्त्रीय अनुबंधन",
    definition: "A type of learning where a neutral stimulus becomes associated with a meaningful stimulus, eventually evoking a similar response.",
    psychologist: "Ivan Pavlov",
    examples: [
      "Dog salivating at bell sound",
      "Fear of white coat (doctor)",
      "Feeling hungry when seeing food advertisement"
    ],
    examTips: [
      "UCS → UCR (natural response)",
      "CS → CR (learned response)",
      "Terms: Acquisition, Extinction, Generalization, Discrimination"
    ],
    category: "Learning"
  },
  {
    id: 4,
    term: "Operant Conditioning",
    termHindi: "क्रियाप्रसूत अनुबंधन",
    definition: "A type of learning where behavior is strengthened if followed by reinforcement or weakened if followed by punishment.",
    psychologist: "B.F. Skinner",
    examples: [
      "Studying hard → Good grades (positive reinforcement)",
      "Taking medicine → Pain relief (negative reinforcement)",
      "Speeding → Fine (punishment)"
    ],
    examTips: [
      "Positive vs Negative reinforcement",
      "Punishment vs Reinforcement",
      "Schedules of reinforcement: Fixed/Variable, Ratio/Interval"
    ],
    category: "Learning"
  },
  {
    id: 5,
    term: "Memory",
    termHindi: "स्मृति",
    definition: "The cognitive process of encoding, storing, and retrieving information.",
    examples: [
      "Remembering your name",
      "Recalling exam answers",
      "Recognizing faces"
    ],
    examTips: [
      "Three stages: Encoding, Storage, Retrieval",
      "Types: Sensory, Short-term, Long-term",
      "Forgetting: Decay, Interference, Retrieval failure",
      "Ebbinghaus forgetting curve"
    ],
    category: "Cognition"
  },
  {
    id: 6,
    term: "Intelligence",
    termHindi: "बुद्धि",
    definition: "The ability to learn from experience, solve problems, and use knowledge to adapt to new situations.",
    psychologist: "Alfred Binet, David Wechsler",
    examples: [
      "Solving puzzles",
      "Understanding concepts quickly",
      "Adapting to new environments"
    ],
    examTips: [
      "IQ = Mental Age / Chronological Age × 100",
      "Types: Fluid vs Crystallized (Cattell)",
      "Gardner's Multiple Intelligences (8 types)",
      "Emotional Intelligence (Goleman)"
    ],
    category: "Cognition"
  },
  {
    id: 7,
    term: "Motivation",
    termHindi: "अभिप्रेरणा",
    definition: "The process that initiates, guides, and maintains goal-oriented behaviors.",
    psychologist: "Abraham Maslow",
    examples: [
      "Hunger driving you to eat",
      "Ambition to succeed",
      "Need for social acceptance"
    ],
    examTips: [
      "Maslow's Hierarchy: Physiological → Safety → Love → Esteem → Self-actualization",
      "Intrinsic vs Extrinsic motivation",
      "Drive theory, Incentive theory"
    ],
    category: "Motivation & Emotion"
  },
  {
    id: 8,
    term: "Emotion",
    termHindi: "संवेग",
    definition: "A complex psychological state involving physiological arousal, expressive behaviors, and conscious experience.",
    examples: [
      "Joy at success",
      "Fear in danger",
      "Anger at injustice"
    ],
    examTips: [
      "Components: Physiological, Behavioral, Cognitive",
      "James-Lange theory: Body reaction → Emotion",
      "Cannon-Bard theory: Simultaneous",
      "Schachter-Singer: Arousal + Label"
    ],
    category: "Motivation & Emotion"
  },
  {
    id: 9,
    term: "Personality",
    termHindi: "व्यक्तित्व",
    definition: "The unique pattern of thoughts, feelings, and behaviors that makes a person distinct.",
    psychologist: "Sigmund Freud, Carl Jung",
    examples: [
      "Introverted vs Extroverted",
      "Optimistic vs Pessimistic",
      "Risk-taker vs Cautious"
    ],
    examTips: [
      "Freud's structure: Id, Ego, Superego",
      "Big Five traits: OCEAN (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism)",
      "Type A vs Type B personality",
      "Jung's Introversion-Extraversion"
    ],
    category: "Personality"
  },
  {
    id: 10,
    term: "Stress",
    termHindi: "तनाव",
    definition: "A state of mental or emotional strain resulting from adverse or demanding circumstances.",
    psychologist: "Hans Selye",
    examples: [
      "Exam pressure",
      "Work deadlines",
      "Relationship problems"
    ],
    examTips: [
      "GAS: Alarm → Resistance → Exhaustion (Selye)",
      "Eustress (positive) vs Distress (negative)",
      "Stressors: Life events, Daily hassles",
      "Coping: Problem-focused vs Emotion-focused"
    ],
    category: "Health"
  },
  {
    id: 11,
    term: "Attention",
    termHindi: "अवधान",
    definition: "The cognitive process of selectively concentrating on relevant information while ignoring irrelevant stimuli.",
    examples: [
      "Listening to teacher in noisy class",
      "Focusing on studies despite distractions",
      "Searching for a friend in crowd"
    ],
    examTips: [
      "Types: Selective, Divided, Sustained",
      "Factors: Interest, Stimulus intensity, Novelty",
      "Cocktail party effect",
      "Attention span"
    ],
    category: "Cognition"
  },
  {
    id: 12,
    term: "Perception",
    termHindi: "प्रत्यक्षण",
    definition: "The process of organizing and interpreting sensory information to give it meaning.",
    examples: [
      "Recognizing a face",
      "Understanding speech",
      "Optical illusions"
    ],
    examTips: [
      "Sensation vs Perception",
      "Gestalt principles: Proximity, Similarity, Closure, Continuity",
      "Depth perception: Monocular vs Binocular cues",
      "Perceptual constancies: Size, Shape, Color"
    ],
    category: "Cognition"
  }
];

const PSYCHOLOGISTS: Psychologist[] = [
  {
    name: "Sigmund Freud",
    title: "Father of Psychoanalysis",
    contribution: "Developed psychoanalytic theory of personality",
    theories: ["Id, Ego, Superego", "Psychosexual stages", "Defense mechanisms", "Dream analysis"]
  },
  {
    name: "Ivan Pavlov",
    title: "Classical Conditioning Pioneer",
    contribution: "Discovered classical conditioning through dog experiments",
    theories: ["Classical conditioning", "Conditioned reflex", "Extinction", "Generalization"]
  },
  {
    name: "B.F. Skinner",
    title: "Father of Operant Conditioning",
    contribution: "Developed operant conditioning theory",
    theories: ["Reinforcement", "Punishment", "Skinner Box", "Schedules of reinforcement"]
  },
  {
    name: "Abraham Maslow",
    title: "Humanistic Psychology",
    contribution: "Created hierarchy of needs theory",
    theories: ["Hierarchy of needs", "Self-actualization", "Peak experiences"]
  },
  {
    name: "Jean Piaget",
    title: "Developmental Psychology",
    contribution: "Developed cognitive development theory",
    theories: ["Sensorimotor", "Preoperational", "Concrete operational", "Formal operational"]
  },
  {
    name: "Carl Rogers",
    title: "Client-Centered Therapy",
    contribution: "Humanistic approach to therapy",
    theories: ["Self-concept", "Unconditional positive regard", "Empathy", "Congruence"]
  }
];

const CATEGORIES = ['All', 'Introduction', 'Learning', 'Cognition', 'Motivation & Emotion', 'Personality', 'Health'];

const PsychologyHub: React.FC<PsychologyHubProps> = ({ onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedConcept, setExpandedConcept] = useState<number | null>(null);
  const [showPsychologists, setShowPsychologists] = useState(false);
  const papers = useMemo(() => {
    const seen = new Set<string>();
    return (PSY_SUBJECT.previousPapers || []).filter(p => {
      if (seen.has(p.link)) return false;
      seen.add(p.link);
      return true;
    });
  }, []);

  const filteredConcepts = selectedCategory === 'All'
    ? PSYCHOLOGY_CONCEPTS
    : PSYCHOLOGY_CONCEPTS.filter(c => c.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Introduction': 'bg-blue-500/30 text-blue-300',
      'Learning': 'bg-green-500/30 text-green-300',
      'Cognition': 'bg-purple-500/30 text-purple-300',
      'Motivation & Emotion': 'bg-pink-500/30 text-pink-300',
      'Personality': 'bg-orange-500/30 text-orange-300',
      'Health': 'bg-red-500/30 text-red-300'
    };
    return colors[category] || 'bg-gray-500/30 text-gray-300';
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-cyan-900 via-teal-900 to-emerald-900 rounded-2xl w-full max-w-5xl max-h-[95vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="bg-black/30 p-4 sm:p-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-cyan-200 flex items-center gap-2">
              <Brain className="w-6 h-6" />
              Psychology Hub - मनोविज्ञान
            </h2>
            <p className="text-cyan-300/70 text-sm mt-1">
              Key Concepts, Theories & Psychologists
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-cyan-200 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
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
                  ? 'bg-cyan-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
          <button
            onClick={() => setShowPsychologists(!showPsychologists)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ml-auto ${
              showPsychologists
                ? 'bg-yellow-500 text-white'
                : 'bg-yellow-500/30 text-yellow-300 hover:bg-yellow-500/50'
            }`}
          >
            <Award className="w-4 h-4 inline mr-1" />
            Psychologists
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* Psychologists Section */}
          {showPsychologists && (
            <div className="mb-6 bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/30">
              <h3 className="font-semibold text-yellow-300 mb-3 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Famous Psychologists
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PSYCHOLOGISTS.map((psych) => (
                  <div key={psych.name} className="bg-black/20 rounded-lg p-3">
                    <div className="flex items-start gap-2 mb-2">
                      <Users className="w-5 h-5 text-yellow-400 mt-0.5" />
                      <div>
                        <span className="text-yellow-200 font-bold block">{psych.name}</span>
                        <span className="text-cyan-300 text-xs">{psych.title}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">{psych.contribution}</p>
                    <div className="flex flex-wrap gap-1">
                      {psych.theories.slice(0, 3).map((theory, idx) => (
                        <span key={idx} className="bg-yellow-500/20 text-yellow-200 px-2 py-0.5 rounded text-xs">
                          {theory}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Concepts */}
          <div className="space-y-3">
            {filteredConcepts.map((concept) => (
              <div
                key={concept.id}
                className="bg-black/20 rounded-xl overflow-hidden border border-cyan-500/30"
              >
                <div
                  onClick={() => setExpandedConcept(expandedConcept === concept.id ? null : concept.id)}
                  className="p-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-xs ${getCategoryColor(concept.category)}`}>
                        {concept.category}
                      </span>
                      <div>
                        <h3 className="font-semibold text-white">
                          {concept.term}
                        </h3>
                        <p className="text-cyan-300/70 text-sm">
                          {concept.termHindi}
                          {concept.psychologist && <span className="ml-2 text-yellow-300/70">• {concept.psychologist}</span>}
                        </p>
                      </div>
                    </div>
                    {expandedConcept === concept.id ? (
                      <ChevronUp className="w-5 h-5 text-cyan-300" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-cyan-300" />
                    )}
                  </div>
                </div>

                {expandedConcept === concept.id && (
                  <div className="p-4 border-t border-cyan-500/30 space-y-4">
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
                        <Lightbulb className="w-4 h-4" /> Examples
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
                            <Sparkles className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
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

        {/* Previous Papers */}
        {papers.length > 0 && (
          <div className="px-4 pb-4">
            <div className="bg-black/30 border border-cyan-600/40 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-cyan-200">PDF Bank</p>
                  <h3 className="text-lg font-semibold text-white">Previous Papers & Banks</h3>
                </div>
                <span className="px-2 py-1 rounded-full text-xs bg-cyan-900/40 text-cyan-200 border border-cyan-700/50">{papers.length} files</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {papers.map(p => (
                  <a
                    key={p.link}
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 rounded-lg border border-cyan-600/30 bg-white/5 p-3 hover:border-cyan-400 hover:bg-white/10 transition"
                  >
                    <div className="mt-1 text-cyan-200">📄</div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-900/40 text-cyan-200 border border-cyan-700/40">{p.year}</span>
                        <span className="text-[11px] text-cyan-200/70">PDF</span>
                      </div>
                      <div className="text-sm font-medium text-white truncate group-hover:text-cyan-100">{p.title}</div>
                      <div className="text-xs text-cyan-200/60 truncate">Opens in new tab</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="bg-black/30 p-4 flex justify-between items-center text-sm text-cyan-300/70">
          <span>{filteredConcepts.length} concepts • {PSYCHOLOGISTS.length} psychologists</span>
          <span>HSC Maharashtra Board - Psychology</span>
        </div>
      </div>
    </div>
  );
};

export default PsychologyHub;
