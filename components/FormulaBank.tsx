import React, { useState, useEffect } from 'react';
import { BookMarked, Search, Copy, Check, ChevronDown, ChevronRight, Star, Bookmark, X, Filter } from 'lucide-react';
import { Subject } from '../types';

interface FormulaEntry {
  id: string;
  name: string;
  formula: string;
  description?: string;
  example?: string;
  isStarred?: boolean;
}

interface FormulaBankProps {
  subjects: Subject[];
  onClose: () => void;
}

// Define formulas for different subjects
const FORMULAS_DATA: Record<string, FormulaEntry[]> = {
  'Mathematics': [
    { id: 'm1', name: 'Quadratic Formula', formula: 'x = (-b ± √(b²-4ac)) / 2a', description: 'Solutions of ax² + bx + c = 0', example: 'If x² + 5x + 6 = 0, then x = (-5 ± √1) / 2 = -2, -3' },
    { id: 'm2', name: 'Compound Interest', formula: 'A = P(1 + r/n)^(nt)', description: 'A = Amount, P = Principal, r = rate, n = compounds/year, t = years' },
    { id: 'm3', name: 'Distance Formula', formula: 'd = √[(x₂-x₁)² + (y₂-y₁)²]', description: 'Distance between two points in coordinate geometry' },
    { id: 'm4', name: 'Slope Formula', formula: 'm = (y₂-y₁)/(x₂-x₁)', description: 'Slope of a line passing through two points' },
    { id: 'm5', name: 'Sine Rule', formula: 'a/sin A = b/sin B = c/sin C', description: 'Relation between sides and angles of a triangle' },
    { id: 'm6', name: 'Cosine Rule', formula: 'c² = a² + b² - 2ab cos C', description: 'Finding a side when two sides and included angle are known' },
    { id: 'm7', name: 'Area of Triangle', formula: 'Area = ½ × base × height', description: 'Basic area formula' },
    { id: 'm8', name: 'Herons Formula', formula: 'Area = √[s(s-a)(s-b)(s-c)]', description: 's = (a+b+c)/2, semi-perimeter' },
    { id: 'm9', name: 'AP nth term', formula: 'aₙ = a + (n-1)d', description: 'nth term of Arithmetic Progression' },
    { id: 'm10', name: 'AP Sum', formula: 'Sₙ = n/2[2a + (n-1)d]', description: 'Sum of n terms of AP' },
    { id: 'm11', name: 'GP nth term', formula: 'aₙ = arⁿ⁻¹', description: 'nth term of Geometric Progression' },
    { id: 'm12', name: 'GP Sum', formula: 'Sₙ = a(rⁿ-1)/(r-1)', description: 'Sum of n terms of GP when r ≠ 1' },
  ],
  'Physics': [
    { id: 'p1', name: 'Newtons Second Law', formula: 'F = ma', description: 'Force equals mass times acceleration' },
    { id: 'p2', name: 'Kinetic Energy', formula: 'KE = ½mv²', description: 'Energy of a moving object' },
    { id: 'p3', name: 'Potential Energy', formula: 'PE = mgh', description: 'Energy due to position in gravitational field' },
    { id: 'p4', name: 'Ohms Law', formula: 'V = IR', description: 'Voltage = Current × Resistance' },
    { id: 'p5', name: 'Power', formula: 'P = VI = I²R = V²/R', description: 'Electrical power formulas' },
    { id: 'p6', name: 'Wave Equation', formula: 'v = fλ', description: 'Velocity = Frequency × Wavelength' },
    { id: 'p7', name: 'Equations of Motion', formula: 'v = u + at, s = ut + ½at², v² = u² + 2as', description: 'Three equations of motion' },
    { id: 'p8', name: 'Momentum', formula: 'p = mv', description: 'Momentum = mass × velocity' },
    { id: 'p9', name: 'Work Done', formula: 'W = F.s.cos θ', description: 'Work = Force × Displacement × cos(angle)' },
    { id: 'p10', name: 'Gravitational Force', formula: 'F = Gm₁m₂/r²', description: 'Newtons law of gravitation' },
  ],
  'Chemistry': [
    { id: 'c1', name: 'Ideal Gas Law', formula: 'PV = nRT', description: 'P=pressure, V=volume, n=moles, R=gas constant, T=temperature' },
    { id: 'c2', name: 'Molarity', formula: 'M = moles of solute / liters of solution', description: 'Concentration in moles per liter' },
    { id: 'c3', name: 'Dilution', formula: 'M₁V₁ = M₂V₂', description: 'Concentration-volume relationship in dilution' },
    { id: 'c4', name: 'pH', formula: 'pH = -log[H⁺]', description: 'Measure of acidity' },
    { id: 'c5', name: 'pOH', formula: 'pOH = -log[OH⁻]', description: 'Measure of basicity' },
    { id: 'c6', name: 'pH + pOH', formula: 'pH + pOH = 14', description: 'At 25°C for aqueous solutions' },
    { id: 'c7', name: 'Moles', formula: 'n = mass/molar mass', description: 'Number of moles calculation' },
    { id: 'c8', name: 'Percent Composition', formula: '% = (mass of element/total mass) × 100', description: 'Mass percentage of element' },
  ],
  'Economics': [
    { id: 'e1', name: 'Elasticity of Demand', formula: 'Ed = (% change in Qd) / (% change in P)', description: 'Price elasticity of demand' },
    { id: 'e2', name: 'National Income', formula: 'Y = C + I + G + (X-M)', description: 'GDP by expenditure method' },
    { id: 'e3', name: 'Multiplier', formula: 'K = 1/(1-MPC) = 1/MPS', description: 'Investment multiplier' },
    { id: 'e4', name: 'MPC + MPS', formula: 'MPC + MPS = 1', description: 'Marginal propensities sum to 1' },
    { id: 'e5', name: 'APC + APS', formula: 'APC + APS = 1', description: 'Average propensities sum to 1' },
    { id: 'e6', name: 'Terms of Trade', formula: 'ToT = (Export Price Index / Import Price Index) × 100', description: 'Ratio of export to import prices' },
    { id: 'e7', name: 'Money Multiplier', formula: 'MM = 1/CRR', description: 'Credit creation multiplier' },
  ],
  'Hindi': [
    { id: 'h1', name: 'छंद सूत्र', formula: 'मात्रिक छंद: लघु (।) = 1 मात्रा, गुरु (S) = 2 मात्रा', description: 'मात्रा गणना का नियम' },
    { id: 'h2', name: 'दोहा', formula: '13 + 11 मात्राएं (विषम में गुरु-लघु)', description: 'दोहा छंद का विधान' },
    { id: 'h3', name: 'चौपाई', formula: '16 + 16 मात्राएं', description: 'चौपाई छंद का विधान' },
    { id: 'h4', name: 'सोरठा', formula: '11 + 13 मात्राएं (दोहा का उल्टा)', description: 'सोरठा छंद का विधान' },
  ],
  'Sanskrit': [
    { id: 's1', name: 'विभक्ति सूत्र', formula: 'प्रथमा - कर्ता, द्वितीया - कर्म, तृतीया - करण', description: 'विभक्तियों का प्रयोग' },
    { id: 's2', name: 'सन्धि नियम', formula: 'अ/आ + अ/आ = आ (दीर्घ सन्धि)', description: 'स्वर सन्धि का मूल नियम' },
    { id: 's3', name: 'समास विग्रह', formula: 'पूर्वपद + उत्तरपद = समस्तपद', description: 'समास बनाने का तरीका' },
  ],
};

const FormulaBank: React.FC<FormulaBankProps> = ({ subjects, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSubjects, setExpandedSubjects] = useState<Set<string>>(new Set(['Mathematics']));
  const [starredFormulas, setStarredFormulas] = useState<Set<string>>(new Set());
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showStarredOnly, setShowStarredOnly] = useState(false);

  // Load starred formulas from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('7k-starred-formulas');
    if (saved) {
      setStarredFormulas(new Set(JSON.parse(saved)));
    }
  }, []);

  // Save starred formulas
  const toggleStar = (id: string) => {
    setStarredFormulas(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      localStorage.setItem('7k-starred-formulas', JSON.stringify([...newSet]));
      return newSet;
    });
  };

  const copyFormula = async (formula: string, id: string) => {
    await navigator.clipboard.writeText(formula);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleSubject = (subject: string) => {
    setExpandedSubjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(subject)) {
        newSet.delete(subject);
      } else {
        newSet.add(subject);
      }
      return newSet;
    });
  };

  // Get available subjects that have formulas
  const availableSubjects = Object.keys(FORMULAS_DATA);

  // Filter formulas
  const getFilteredFormulas = (subject: string): FormulaEntry[] => {
    const formulas = FORMULAS_DATA[subject] || [];
    
    return formulas.filter(f => {
      if (showStarredOnly && !starredFormulas.has(f.id)) return false;
      if (!searchQuery) return true;
      
      const query = searchQuery.toLowerCase();
      return (
        f.name.toLowerCase().includes(query) ||
        f.formula.toLowerCase().includes(query) ||
        (f.description?.toLowerCase().includes(query))
      );
    });
  };

  // Count total starred
  const totalStarred = [...starredFormulas].filter(id => 
    Object.values(FORMULAS_DATA).flat().some(f => f.id === id)
  ).length;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                <BookMarked className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold dark:text-white">Formula Bank</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Quick reference for important formulas
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Search & Filter */}
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search formulas..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-xl text-gray-800 dark:text-white placeholder-gray-500"
              />
            </div>
            <button
              onClick={() => setShowStarredOnly(!showStarredOnly)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition ${
                showStarredOnly
                  ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
              }`}
            >
              <Star className={`w-4 h-4 ${showStarredOnly ? 'fill-current' : ''}`} />
              Starred ({totalStarred})
            </button>
          </div>
        </div>

        {/* Formula List */}
        <div className="flex-1 overflow-y-auto p-4">
          {availableSubjects.map(subject => {
            const formulas = getFilteredFormulas(subject);
            if (formulas.length === 0 && showStarredOnly) return null;
            
            return (
              <div key={subject} className="mb-4">
                {/* Subject Header */}
                <button
                  onClick={() => toggleSubject(subject)}
                  className="w-full flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 rounded-xl mb-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                >
                  <div className="flex items-center gap-2">
                    {expandedSubjects.has(subject) ? (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    )}
                    <span className="font-semibold dark:text-white">{subject}</span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {formulas.length} formulas
                  </span>
                </button>

                {/* Formulas */}
                {expandedSubjects.has(subject) && (
                  <div className="space-y-2 ml-2">
                    {formulas.length === 0 ? (
                      <p className="text-sm text-gray-500 dark:text-gray-400 p-3">
                        No formulas found for your search.
                      </p>
                    ) : (
                      formulas.map(formula => (
                        <div
                          key={formula.id}
                          className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-amber-300 dark:hover:border-amber-700 transition"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold dark:text-white">{formula.name}</h4>
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => copyFormula(formula.formula, formula.id)}
                                className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
                                title="Copy formula"
                              >
                                {copiedId === formula.id ? (
                                  <Check className="w-4 h-4 text-green-500" />
                                ) : (
                                  <Copy className="w-4 h-4 text-gray-400" />
                                )}
                              </button>
                              <button
                                onClick={() => toggleStar(formula.id)}
                                className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
                                title="Star formula"
                              >
                                <Star className={`w-4 h-4 ${
                                  starredFormulas.has(formula.id) 
                                    ? 'fill-amber-400 text-amber-400' 
                                    : 'text-gray-400'
                                }`} />
                              </button>
                            </div>
                          </div>
                          
                          <div className="p-3 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg mb-2">
                            <code className="text-lg font-mono text-amber-800 dark:text-amber-300">
                              {formula.formula}
                            </code>
                          </div>
                          
                          {formula.description && (
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                              {formula.description}
                            </p>
                          )}
                          
                          {formula.example && (
                            <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
                              <span className="font-medium">Example:</span> {formula.example}
                            </p>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            💡 Tip: Star important formulas for quick revision before exams
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormulaBank;
