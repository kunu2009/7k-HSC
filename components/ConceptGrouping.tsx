import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, RotateCcw, Shuffle, Grid3x3, Trophy } from 'lucide-react';

interface ConceptGroupingProps {
  onClose: () => void;
}

interface Term {
  id: string;
  text: string;
  category: string;
}

interface Challenge {
  id: string;
  subject: string;
  categories: string[];
  terms: Term[];
}

const CHALLENGES: Challenge[] = [
  {
    id: 'c1',
    subject: 'Economics',
    categories: ['Microeconomics', 'Macroeconomics', 'Development Economics'],
    terms: [
      { id: 't1', text: 'Demand and Supply', category: 'Microeconomics' },
      { id: 't2', text: 'GDP', category: 'Macroeconomics' },
      { id: 't3', text: 'Poverty Line', category: 'Development Economics' },
      { id: 't4', text: 'Elasticity', category: 'Microeconomics' },
      { id: 't5', text: 'Inflation', category: 'Macroeconomics' },
      { id: 't6', text: 'HDI', category: 'Development Economics' },
      { id: 't7', text: 'Market Equilibrium', category: 'Microeconomics' },
      { id: 't8', text: 'Fiscal Policy', category: 'Macroeconomics' },
      { id: 't9', text: 'Sustainable Development', category: 'Development Economics' },
    ]
  },
  {
    id: 'c2',
    subject: 'History',
    categories: ['Political', 'Economic', 'Social'],
    terms: [
      { id: 't10', text: 'French Revolution', category: 'Political' },
      { id: 't11', text: 'Industrial Revolution', category: 'Economic' },
      { id: 't12', text: 'Renaissance', category: 'Social' },
      { id: 't13', text: 'Declaration of Rights', category: 'Political' },
      { id: 't14', text: 'Factory System', category: 'Economic' },
      { id: 't15', text: 'Abolition of Slavery', category: 'Social' },
      { id: 't16', text: 'Democracy Movement', category: 'Political' },
      { id: 't17', text: 'Trade Routes', category: 'Economic' },
      { id: 't18', text: 'Women\'s Rights Movement', category: 'Social' },
    ]
  },
  {
    id: 'c3',
    subject: 'Political Science',
    categories: ['Executive', 'Legislature', 'Judiciary'],
    terms: [
      { id: 't19', text: 'Prime Minister', category: 'Executive' },
      { id: 't20', text: 'Lok Sabha', category: 'Legislature' },
      { id: 't21', text: 'Supreme Court', category: 'Judiciary' },
      { id: 't22', text: 'President', category: 'Executive' },
      { id: 't23', text: 'Rajya Sabha', category: 'Legislature' },
      { id: 't24', text: 'High Court', category: 'Judiciary' },
      { id: 't25', text: 'Cabinet Ministers', category: 'Executive' },
      { id: 't26', text: 'Parliamentary Committees', category: 'Legislature' },
      { id: 't27', text: 'Judicial Review', category: 'Judiciary' },
    ]
  },
  {
    id: 'c4',
    subject: 'English',
    categories: ['Noun', 'Verb', 'Adjective'],
    terms: [
      { id: 't28', text: 'Happiness', category: 'Noun' },
      { id: 't29', text: 'Run', category: 'Verb' },
      { id: 't30', text: 'Beautiful', category: 'Adjective' },
      { id: 't31', text: 'Freedom', category: 'Noun' },
      { id: 't32', text: 'Think', category: 'Verb' },
      { id: 't33', text: 'Bright', category: 'Adjective' },
      { id: 't34', text: 'Knowledge', category: 'Noun' },
      { id: 't35', text: 'Create', category: 'Verb' },
      { id: 't36', text: 'Magnificent', category: 'Adjective' },
    ]
  },
  {
    id: 'c5',
    subject: 'Sociology',
    categories: ['Primary Group', 'Secondary Group', 'Reference Group'],
    terms: [
      { id: 't37', text: 'Family', category: 'Primary Group' },
      { id: 't38', text: 'Political Party', category: 'Secondary Group' },
      { id: 't39', text: 'Aspirational Peer Group', category: 'Reference Group' },
      { id: 't40', text: 'Close Friends', category: 'Primary Group' },
      { id: 't41', text: 'Corporation', category: 'Secondary Group' },
      { id: 't42', text: 'Celebrity Role Models', category: 'Reference Group' },
      { id: 't43', text: 'Neighborhood Group', category: 'Primary Group' },
      { id: 't44', text: 'Trade Union', category: 'Secondary Group' },
      { id: 't45', text: 'Professional Mentors', category: 'Reference Group' },
    ]
  },
  {
    id: 'c6',
    subject: 'Geography',
    categories: ['Physical Geography', 'Human Geography', 'Environmental Geography'],
    terms: [
      { id: 't46', text: 'Mountains', category: 'Physical Geography' },
      { id: 't47', text: 'Urbanization', category: 'Human Geography' },
      { id: 't48', text: 'Climate Change', category: 'Environmental Geography' },
      { id: 't49', text: 'Rivers', category: 'Physical Geography' },
      { id: 't50', text: 'Population Distribution', category: 'Human Geography' },
      { id: 't51', text: 'Pollution', category: 'Environmental Geography' },
      { id: 't52', text: 'Tectonic Plates', category: 'Physical Geography' },
      { id: 't53', text: 'Migration', category: 'Human Geography' },
      { id: 't54', text: 'Deforestation', category: 'Environmental Geography' },
    ]
  }
];

const ConceptGrouping: React.FC<ConceptGroupingProps> = ({ onClose }) => {
  const [currentChallenge, setCurrentChallenge] = useState<Challenge | null>(null);
  const [groupedTerms, setGroupedTerms] = useState<{ [category: string]: Term[] }>({});
  const [availableTerms, setAvailableTerms] = useState<Term[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    loadRandomChallenge();
  }, []);

  const loadRandomChallenge = () => {
    const randomChallenge = CHALLENGES[Math.floor(Math.random() * CHALLENGES.length)];
    const shuffledTerms = [...randomChallenge.terms].sort(() => Math.random() - 0.5);
    
    setCurrentChallenge(randomChallenge);
    setAvailableTerms(shuffledTerms);
    
    const initialGroups: { [category: string]: Term[] } = {};
    randomChallenge.categories.forEach(cat => {
      initialGroups[cat] = [];
    });
    setGroupedTerms(initialGroups);
    setShowResult(false);
  };

  const addToGroup = (term: Term, category: string) => {
    setAvailableTerms(availableTerms.filter(t => t.id !== term.id));
    setGroupedTerms({
      ...groupedTerms,
      [category]: [...groupedTerms[category], term]
    });
  };

  const removeFromGroup = (term: Term, category: string) => {
    setGroupedTerms({
      ...groupedTerms,
      [category]: groupedTerms[category].filter(t => t.id !== term.id)
    });
    setAvailableTerms([...availableTerms, term]);
  };

  const handleSubmit = () => {
    if (!currentChallenge) return;
    
    let correctCount = 0;
    
    Object.keys(groupedTerms).forEach(category => {
      groupedTerms[category].forEach(term => {
        if (term.category === category) {
          correctCount++;
        }
      });
    });
    
    const totalTerms = currentChallenge.terms.length;
    const percentage = (correctCount / totalTerms) * 100;
    
    setShowResult(true);
    setAttempts(attempts + 1);
    
    if (percentage === 100) {
      setScore(score + 15);
    } else if (percentage >= 75) {
      setScore(score + 10);
    } else if (percentage >= 50) {
      setScore(score + 5);
    }
  };

  const reset = () => {
    loadRandomChallenge();
    setAttempts(0);
    setScore(0);
  };

  const getCategoryColor = (index: number) => {
    const colors = [
      'from-blue-500/20 to-cyan-500/20 border-blue-500',
      'from-purple-500/20 to-pink-500/20 border-purple-500',
      'from-green-500/20 to-emerald-500/20 border-green-500',
    ];
    return colors[index % colors.length];
  };

  if (!currentChallenge) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-slate-900 to-cyan-900 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500/30">
        <div className="sticky top-0 bg-gradient-to-r from-cyan-600 to-blue-600 p-6 flex justify-between items-center rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
              <Grid3x3 className="w-7 h-7" />
              Concept Grouping
            </h2>
            <p className="text-cyan-100 text-sm">Categorize terms into correct groups</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition-all"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* Stats */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-3">
              <div className="bg-white/10 px-4 py-2 rounded-lg">
                <p className="text-sm text-slate-300">Score</p>
                <p className="text-2xl font-bold text-white">{score}</p>
              </div>
              <div className="bg-cyan-500/20 px-4 py-2 rounded-lg border border-cyan-500/30">
                <p className="text-sm text-cyan-200">Attempts</p>
                <p className="text-2xl font-bold text-cyan-300">{attempts}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={loadRandomChallenge}
                className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all flex items-center gap-2"
              >
                <Shuffle className="w-4 h-4" />
                New
              </button>
              <button
                onClick={reset}
                className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-all flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
            </div>
          </div>

          {/* Subject */}
          <div className="mb-4">
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium">
              {currentChallenge.subject}
            </span>
          </div>

          {/* Available Terms */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white mb-3">Available Terms</h3>
            <div className="flex flex-wrap gap-2 min-h-[60px] bg-slate-800/50 rounded-xl p-4 border-2 border-dashed border-slate-600">
              {availableTerms.map(term => (
                <div
                  key={term.id}
                  className="bg-gradient-to-r from-slate-700 to-slate-800 px-4 py-2 rounded-lg text-white font-medium cursor-default border border-slate-600 hover:border-cyan-500 transition-all"
                >
                  {term.text}
                </div>
              ))}
              {availableTerms.length === 0 && !showResult && (
                <p className="text-slate-400 text-sm">All terms have been categorized!</p>
              )}
            </div>
          </div>

          {/* Category Boxes */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {currentChallenge.categories.map((category, idx) => (
              <div
                key={category}
                className={`bg-gradient-to-br ${getCategoryColor(idx)} border-2 rounded-xl p-4 min-h-[200px]`}
              >
                <h4 className="text-white font-bold mb-3 text-center">{category}</h4>
                <div className="space-y-2">
                  {groupedTerms[category]?.map(term => (
                    <div
                      key={term.id}
                      className={`px-3 py-2 rounded-lg font-medium cursor-pointer transition-all ${
                        showResult
                          ? term.category === category
                            ? 'bg-green-500 text-white'
                            : 'bg-red-500 text-white'
                          : 'bg-white text-slate-800 hover:bg-slate-200'
                      }`}
                      onClick={() => !showResult && removeFromGroup(term, category)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{term.text}</span>
                        {showResult && (
                          term.category === category ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : (
                            <span className="text-xs">→ {term.category}</span>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Add Buttons */}
          {!showResult && availableTerms.length > 0 && (
            <div className="mb-6">
              <p className="text-slate-300 text-sm mb-2">Click a term below, then click the category to add it:</p>
              <div className="grid grid-cols-3 gap-2">
                {currentChallenge.categories.map(category => (
                  <div key={category} className="space-y-2">
                    {availableTerms.map(term => (
                      <button
                        key={`${term.id}-${category}`}
                        onClick={() => addToGroup(term, category)}
                        className="w-full bg-slate-700 hover:bg-slate-600 text-white text-sm py-2 px-3 rounded-lg transition-all text-left"
                      >
                        {term.text} → {category}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Result */}
          {showResult && (
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-500 rounded-xl p-6 mb-6 text-center">
              <div className="text-6xl mb-3">
                {Object.keys(groupedTerms).every(cat => 
                  groupedTerms[cat].every(t => t.category === cat)
                ) ? '🎉' : '💪'}
              </div>
              <h4 className="text-2xl font-bold text-blue-300 mb-2">
                {Object.keys(groupedTerms).every(cat => 
                  groupedTerms[cat].every(t => t.category === cat)
                ) ? 'Perfect Grouping!' : 'Good Try!'}
              </h4>
              <p className="text-white text-lg">
                Check the corrections above (green = correct, red = wrong)
              </p>
            </div>
          )}

          {/* Action Button */}
          {!showResult ? (
            <button
              onClick={handleSubmit}
              disabled={availableTerms.length > 0}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {availableTerms.length > 0 
                ? `Categorize ${availableTerms.length} more term${availableTerms.length > 1 ? 's' : ''}` 
                : 'Submit Grouping'}
            </button>
          ) : (
            <button
              onClick={loadRandomChallenge}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center gap-2"
            >
              <Shuffle className="w-5 h-5" />
              Next Challenge
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConceptGrouping;