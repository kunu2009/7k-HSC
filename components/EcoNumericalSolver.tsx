import React, { useState, useMemo } from 'react';

interface EcoNumericalSolverProps {
  onClose: () => void;
}

interface Problem {
  id: string;
  title: string;
  chapter: string;
  chapterId: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  givenData: { label: string; value: string }[];
  steps: { explanation: string; formula?: string; calculation?: string; result?: string }[];
  finalAnswer: string;
  tip?: string;
}

const numericalProblems: Problem[] = [
  // Utility Analysis
  {
    id: 'utility-1',
    title: 'Calculate Total & Marginal Utility',
    chapter: 'Utility Analysis',
    chapterId: 'eco2',
    difficulty: 'easy',
    question: 'A consumer consumes 5 units of a commodity. The marginal utilities are 20, 16, 12, 8, and 4 utils respectively. Calculate Total Utility.',
    givenData: [
      { label: 'MU₁', value: '20 utils' },
      { label: 'MU₂', value: '16 utils' },
      { label: 'MU₃', value: '12 utils' },
      { label: 'MU₄', value: '8 utils' },
      { label: 'MU₅', value: '4 utils' }
    ],
    steps: [
      { explanation: 'Total Utility is the sum of all Marginal Utilities', formula: 'TU = ΣMU = MU₁ + MU₂ + MU₃ + MU₄ + MU₅' },
      { explanation: 'Substitute the given values', calculation: 'TU = 20 + 16 + 12 + 8 + 4' },
      { explanation: 'Calculate the sum', result: 'TU = 60 utils' }
    ],
    finalAnswer: 'Total Utility (TU) = 60 utils',
    tip: 'Notice MU is decreasing - this demonstrates the Law of Diminishing Marginal Utility'
  },
  {
    id: 'utility-2',
    title: 'Consumer Equilibrium Calculation',
    chapter: 'Utility Analysis',
    chapterId: 'eco2',
    difficulty: 'medium',
    question: 'A consumer has ₹20 to spend on goods X and Y. Price of X = ₹2, Price of Y = ₹4. The MU schedule shows: MUx for units 1-5 are 20, 16, 12, 8, 4 and MUy for units 1-3 are 24, 16, 8. Find equilibrium.',
    givenData: [
      { label: 'Budget', value: '₹20' },
      { label: 'Pₓ', value: '₹2' },
      { label: 'Pᵧ', value: '₹4' }
    ],
    steps: [
      { explanation: 'Calculate MU/P for each good', formula: 'MUₓ/Pₓ and MUᵧ/Pᵧ' },
      { explanation: 'MUₓ/Pₓ values: 20/2=10, 16/2=8, 12/2=6, 8/2=4, 4/2=2', calculation: 'MUₓ/Pₓ = 10, 8, 6, 4, 2' },
      { explanation: 'MUᵧ/Pᵧ values: 24/4=6, 16/4=4, 8/4=2', calculation: 'MUᵧ/Pᵧ = 6, 4, 2' },
      { explanation: 'Find where MUₓ/Pₓ = MUᵧ/Pᵧ', result: 'At Qₓ=3 (MU/P=6) and Qᵧ=1 (MU/P=6)' },
      { explanation: 'Check budget: 3×₹2 + 1×₹4 = ₹6 + ₹4 = ₹10', calculation: 'Not exhausted, continue...' },
      { explanation: 'Final: Qₓ=4, Qᵧ=3 where MU/P=4 for both', result: '4×₹2 + 3×₹4 = ₹8 + ₹12 = ₹20 ✓' }
    ],
    finalAnswer: 'Equilibrium: 4 units of X and 3 units of Y',
    tip: 'At equilibrium, MUₓ/Pₓ = MUᵧ/Pᵧ and entire budget is spent'
  },

  // Elasticity Problems
  {
    id: 'elasticity-1',
    title: 'Price Elasticity of Demand (Ratio Method)',
    chapter: 'Elasticity of Demand',
    chapterId: 'eco3b',
    difficulty: 'easy',
    question: 'When price of a commodity falls from ₹10 to ₹8, quantity demanded rises from 100 units to 150 units. Calculate Price Elasticity of Demand.',
    givenData: [
      { label: 'P₀ (Original Price)', value: '₹10' },
      { label: 'P₁ (New Price)', value: '₹8' },
      { label: 'Q₀ (Original Qty)', value: '100 units' },
      { label: 'Q₁ (New Qty)', value: '150 units' }
    ],
    steps: [
      { explanation: 'Calculate change in quantity and price', calculation: 'ΔQ = Q₁ - Q₀ = 150 - 100 = 50\nΔP = P₁ - P₀ = 8 - 10 = -2' },
      { explanation: 'Apply the Ratio Method formula', formula: 'Ed = (ΔQ/ΔP) × (P/Q)' },
      { explanation: 'Substitute the values', calculation: 'Ed = (50/-2) × (10/100)\nEd = -25 × 0.1' },
      { explanation: 'Calculate (ignore negative sign for magnitude)', result: 'Ed = |-2.5| = 2.5' }
    ],
    finalAnswer: 'Price Elasticity of Demand (Ed) = 2.5 (Elastic Demand)',
    tip: 'Ed > 1 means demand is elastic - quantity changes more than proportionately to price change'
  },
  {
    id: 'elasticity-2',
    title: 'Price Elasticity (Percentage Method)',
    chapter: 'Elasticity of Demand',
    chapterId: 'eco3b',
    difficulty: 'medium',
    question: 'Price of rice increases from ₹40/kg to ₹50/kg. As a result, demand falls from 200 kg to 160 kg. Calculate Ed using percentage method.',
    givenData: [
      { label: 'P₀', value: '₹40/kg' },
      { label: 'P₁', value: '₹50/kg' },
      { label: 'Q₀', value: '200 kg' },
      { label: 'Q₁', value: '160 kg' }
    ],
    steps: [
      { explanation: 'Calculate percentage change in quantity', calculation: '%ΔQ = (ΔQ/Q₀) × 100\n= ((160-200)/200) × 100\n= (-40/200) × 100 = -20%' },
      { explanation: 'Calculate percentage change in price', calculation: '%ΔP = (ΔP/P₀) × 100\n= ((50-40)/40) × 100\n= (10/40) × 100 = 25%' },
      { explanation: 'Apply the formula', formula: 'Ed = %ΔQ / %ΔP' },
      { explanation: 'Calculate elasticity', calculation: 'Ed = -20% / 25% = -0.8' },
      { explanation: 'Take absolute value', result: 'Ed = |-0.8| = 0.8' }
    ],
    finalAnswer: 'Ed = 0.8 (Inelastic Demand)',
    tip: 'Ed < 1 means demand is inelastic - quantity changes less than proportionately to price change'
  },
  {
    id: 'elasticity-3',
    title: 'Total Expenditure Method',
    chapter: 'Elasticity of Demand',
    chapterId: 'eco3b',
    difficulty: 'medium',
    question: 'At price ₹5, quantity demanded is 100 units. When price rises to ₹6, quantity demanded falls to 80 units. Determine elasticity using Total Expenditure method.',
    givenData: [
      { label: 'P₁', value: '₹5' },
      { label: 'Q₁', value: '100 units' },
      { label: 'P₂', value: '₹6' },
      { label: 'Q₂', value: '80 units' }
    ],
    steps: [
      { explanation: 'Calculate Total Expenditure at original price', calculation: 'TE₁ = P₁ × Q₁ = ₹5 × 100 = ₹500' },
      { explanation: 'Calculate Total Expenditure at new price', calculation: 'TE₂ = P₂ × Q₂ = ₹6 × 80 = ₹480' },
      { explanation: 'Compare: Price ↑ and TE ↓', result: 'When P rises, TE falls (₹500 → ₹480)' },
      { explanation: 'Apply the rule: If P↑ and TE↓, then Ed > 1', formula: 'P↑ & TE↓ → Ed > 1 (Elastic)' }
    ],
    finalAnswer: 'Demand is Elastic (Ed > 1)',
    tip: 'Total Expenditure method rules:\n• P↑ & TE↓ → Ed > 1\n• P↑ & TE↑ → Ed < 1\n• P↑ & TE unchanged → Ed = 1'
  },
  {
    id: 'elasticity-4',
    title: 'Income Elasticity of Demand',
    chapter: 'Elasticity of Demand',
    chapterId: 'eco3b',
    difficulty: 'medium',
    question: 'When income rises from ₹20,000 to ₹25,000, demand for cars rises from 100 to 150 units. Calculate Income Elasticity.',
    givenData: [
      { label: 'Y₀ (Initial Income)', value: '₹20,000' },
      { label: 'Y₁ (New Income)', value: '₹25,000' },
      { label: 'Q₀ (Initial Demand)', value: '100 units' },
      { label: 'Q₁ (New Demand)', value: '150 units' }
    ],
    steps: [
      { explanation: 'Calculate change in quantity and income', calculation: 'ΔQ = 150 - 100 = 50\nΔY = 25,000 - 20,000 = 5,000' },
      { explanation: 'Apply Income Elasticity formula', formula: 'Ey = (ΔQ/Q) / (ΔY/Y) = (ΔQ/ΔY) × (Y/Q)' },
      { explanation: 'Substitute values', calculation: 'Ey = (50/5,000) × (20,000/100)\nEy = 0.01 × 200' },
      { explanation: 'Calculate result', result: 'Ey = 2' }
    ],
    finalAnswer: 'Income Elasticity (Ey) = 2 (Luxury Good)',
    tip: 'Ey > 1: Luxury good | 0 < Ey < 1: Normal necessity | Ey < 0: Inferior good'
  },

  // Index Numbers
  {
    id: 'index-1',
    title: "Laspeyre's Price Index",
    chapter: 'Index Numbers',
    chapterId: 'eco6',
    difficulty: 'medium',
    question: "Calculate Laspeyre's Price Index from the following data:\nCommodity A: P₀=₹10, P₁=₹12, Q₀=50\nCommodity B: P₀=₹8, P₁=₹10, Q₀=40",
    givenData: [
      { label: 'Commodity A', value: 'P₀=₹10, P₁=₹12, Q₀=50' },
      { label: 'Commodity B', value: 'P₀=₹8, P₁=₹10, Q₀=40' }
    ],
    steps: [
      { explanation: "Laspeyre's uses base year quantities as weights", formula: 'P₀₁ = (ΣP₁Q₀ / ΣP₀Q₀) × 100' },
      { explanation: 'Calculate ΣP₁Q₀', calculation: 'P₁Q₀ for A = 12 × 50 = 600\nP₁Q₀ for B = 10 × 40 = 400\nΣP₁Q₀ = 600 + 400 = 1000' },
      { explanation: 'Calculate ΣP₀Q₀', calculation: 'P₀Q₀ for A = 10 × 50 = 500\nP₀Q₀ for B = 8 × 40 = 320\nΣP₀Q₀ = 500 + 320 = 820' },
      { explanation: 'Apply the formula', calculation: 'P₀₁ = (1000/820) × 100 = 1.2195 × 100' },
      { explanation: 'Calculate result', result: 'P₀₁ = 121.95' }
    ],
    finalAnswer: "Laspeyre's Price Index = 121.95",
    tip: "Laspeyre's tends to overstate inflation as it uses old consumption pattern"
  },
  {
    id: 'index-2',
    title: "Paasche's Price Index",
    chapter: 'Index Numbers',
    chapterId: 'eco6',
    difficulty: 'medium',
    question: "Calculate Paasche's Price Index:\nCommodity X: P₀=₹20, P₁=₹25, Q₁=30\nCommodity Y: P₀=₹15, P₁=₹18, Q₁=40",
    givenData: [
      { label: 'Commodity X', value: 'P₀=₹20, P₁=₹25, Q₁=30' },
      { label: 'Commodity Y', value: 'P₀=₹15, P₁=₹18, Q₁=40' }
    ],
    steps: [
      { explanation: "Paasche's uses current year quantities as weights", formula: 'P₀₁ = (ΣP₁Q₁ / ΣP₀Q₁) × 100' },
      { explanation: 'Calculate ΣP₁Q₁', calculation: 'P₁Q₁ for X = 25 × 30 = 750\nP₁Q₁ for Y = 18 × 40 = 720\nΣP₁Q₁ = 750 + 720 = 1470' },
      { explanation: 'Calculate ΣP₀Q₁', calculation: 'P₀Q₁ for X = 20 × 30 = 600\nP₀Q₁ for Y = 15 × 40 = 600\nΣP₀Q₁ = 600 + 600 = 1200' },
      { explanation: 'Apply the formula', calculation: 'P₀₁ = (1470/1200) × 100 = 1.225 × 100' },
      { explanation: 'Calculate result', result: 'P₀₁ = 122.5' }
    ],
    finalAnswer: "Paasche's Price Index = 122.5",
    tip: "Paasche's tends to understate inflation as it uses new consumption pattern"
  },
  {
    id: 'index-3',
    title: "Fisher's Ideal Index",
    chapter: 'Index Numbers',
    chapterId: 'eco6',
    difficulty: 'hard',
    question: "If Laspeyre's Index = 125 and Paasche's Index = 121, calculate Fisher's Ideal Index.",
    givenData: [
      { label: "Laspeyre's Index (L)", value: '125' },
      { label: "Paasche's Index (P)", value: '121' }
    ],
    steps: [
      { explanation: "Fisher's is the geometric mean of Laspeyre's and Paasche's", formula: 'F = √(L × P)' },
      { explanation: 'Substitute the values', calculation: 'F = √(125 × 121)' },
      { explanation: 'Calculate the product', calculation: 'F = √15125' },
      { explanation: 'Take square root', result: 'F = 123.0' }
    ],
    finalAnswer: "Fisher's Ideal Index = 123",
    tip: "Fisher's is called 'Ideal' because it satisfies both Time Reversal and Factor Reversal tests"
  },

  // National Income
  {
    id: 'national-1',
    title: 'Calculate GDP at Market Price',
    chapter: 'National Income',
    chapterId: 'eco7',
    difficulty: 'medium',
    question: 'Calculate GDP at Market Price from: Private Consumption = ₹500 cr, Investment = ₹200 cr, Government Expenditure = ₹150 cr, Exports = ₹100 cr, Imports = ₹80 cr',
    givenData: [
      { label: 'C (Consumption)', value: '₹500 crore' },
      { label: 'I (Investment)', value: '₹200 crore' },
      { label: 'G (Govt. Expenditure)', value: '₹150 crore' },
      { label: 'X (Exports)', value: '₹100 crore' },
      { label: 'M (Imports)', value: '₹80 crore' }
    ],
    steps: [
      { explanation: 'Apply the Expenditure Method formula', formula: 'GDP_MP = C + I + G + (X - M)' },
      { explanation: 'Calculate Net Exports', calculation: 'Net Exports = X - M = 100 - 80 = ₹20 crore' },
      { explanation: 'Substitute all values', calculation: 'GDP_MP = 500 + 200 + 150 + 20' },
      { explanation: 'Calculate total', result: 'GDP_MP = ₹870 crore' }
    ],
    finalAnswer: 'GDP at Market Price = ₹870 crore',
    tip: 'This is the Expenditure Method of calculating GDP'
  },
  {
    id: 'national-2',
    title: 'GDP to National Income Conversion',
    chapter: 'National Income',
    chapterId: 'eco7',
    difficulty: 'hard',
    question: 'Given: GDP_MP = ₹1000 cr, Depreciation = ₹100 cr, Indirect Taxes = ₹80 cr, Subsidies = ₹30 cr, NFIA = -₹20 cr. Calculate National Income.',
    givenData: [
      { label: 'GDP_MP', value: '₹1000 crore' },
      { label: 'Depreciation', value: '₹100 crore' },
      { label: 'Indirect Taxes', value: '₹80 crore' },
      { label: 'Subsidies', value: '₹30 crore' },
      { label: 'NFIA', value: '-₹20 crore' }
    ],
    steps: [
      { explanation: 'Step 1: Calculate NDP_MP (subtract depreciation)', formula: 'NDP_MP = GDP_MP - Depreciation', calculation: 'NDP_MP = 1000 - 100 = ₹900 crore' },
      { explanation: 'Step 2: Calculate NDP_FC (remove indirect taxes, add subsidies)', formula: 'NDP_FC = NDP_MP - IT + Subsidies', calculation: 'NDP_FC = 900 - 80 + 30 = ₹850 crore' },
      { explanation: 'Step 3: Calculate National Income (add NFIA)', formula: 'NI = NDP_FC + NFIA', calculation: 'NI = 850 + (-20) = ₹830 crore' },
      { explanation: 'Final Answer', result: 'National Income = ₹830 crore' }
    ],
    finalAnswer: 'National Income = ₹830 crore',
    tip: 'Remember: NI = NNP_FC. NFIA converts domestic to national, FC conversion removes taxes.'
  },
  {
    id: 'national-3',
    title: 'Per Capita Income',
    chapter: 'National Income',
    chapterId: 'eco7',
    difficulty: 'easy',
    question: 'National Income of a country is ₹50,00,000 crore. Population is 140 crore. Calculate Per Capita Income.',
    givenData: [
      { label: 'National Income', value: '₹50,00,000 crore' },
      { label: 'Population', value: '140 crore' }
    ],
    steps: [
      { explanation: 'Apply Per Capita Income formula', formula: 'Per Capita Income = National Income / Population' },
      { explanation: 'Substitute values', calculation: 'PCI = 50,00,000 / 140' },
      { explanation: 'Calculate', result: 'PCI = ₹35,714.29 (approximately)' }
    ],
    finalAnswer: 'Per Capita Income ≈ ₹35,714 per person',
    tip: 'Per Capita Income measures average income per person - useful for comparing living standards'
  },

  // Public Finance
  {
    id: 'finance-1',
    title: 'Calculate Fiscal Deficit',
    chapter: 'Public Finance',
    chapterId: 'eco8',
    difficulty: 'medium',
    question: 'Total Expenditure = ₹30 lakh crore, Revenue Receipts = ₹20 lakh crore, Capital Receipts (non-debt) = ₹5 lakh crore. Calculate Fiscal Deficit.',
    givenData: [
      { label: 'Total Expenditure', value: '₹30 lakh crore' },
      { label: 'Revenue Receipts', value: '₹20 lakh crore' },
      { label: 'Capital Receipts (non-debt)', value: '₹5 lakh crore' }
    ],
    steps: [
      { explanation: 'Fiscal Deficit formula', formula: 'FD = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts)' },
      { explanation: 'Calculate total non-borrowed receipts', calculation: 'Total Receipts = 20 + 5 = ₹25 lakh crore' },
      { explanation: 'Calculate Fiscal Deficit', calculation: 'FD = 30 - 25' },
      { explanation: 'Result', result: 'Fiscal Deficit = ₹5 lakh crore' }
    ],
    finalAnswer: 'Fiscal Deficit = ₹5 lakh crore',
    tip: 'Fiscal Deficit = Borrowing Requirement of Government'
  },
  {
    id: 'finance-2',
    title: 'Primary Deficit Calculation',
    chapter: 'Public Finance',
    chapterId: 'eco8',
    difficulty: 'easy',
    question: 'Fiscal Deficit = ₹8 lakh crore, Interest Payments = ₹6 lakh crore. Calculate Primary Deficit.',
    givenData: [
      { label: 'Fiscal Deficit', value: '₹8 lakh crore' },
      { label: 'Interest Payments', value: '₹6 lakh crore' }
    ],
    steps: [
      { explanation: 'Primary Deficit formula', formula: 'Primary Deficit = Fiscal Deficit - Interest Payments' },
      { explanation: 'Substitute values', calculation: 'PD = 8 - 6' },
      { explanation: 'Calculate', result: 'Primary Deficit = ₹2 lakh crore' }
    ],
    finalAnswer: 'Primary Deficit = ₹2 lakh crore',
    tip: 'Primary Deficit shows borrowing for purposes other than paying interest on past debt'
  }
];

const chapters = [
  { id: 'all', name: 'All Chapters' },
  { id: 'eco2', name: 'Utility Analysis' },
  { id: 'eco3b', name: 'Elasticity of Demand' },
  { id: 'eco6', name: 'Index Numbers' },
  { id: 'eco7', name: 'National Income' },
  { id: 'eco8', name: 'Public Finance' }
];

const EcoNumericalSolver: React.FC<EcoNumericalSolverProps> = ({ onClose }) => {
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [showAllSteps, setShowAllSteps] = useState(false);
  const [filter, setFilter] = useState('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [solvedProblems, setSolvedProblems] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('eco_solved_problems');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  const filteredProblems = useMemo(() => {
    return numericalProblems.filter(p => {
      if (filter !== 'all' && p.chapterId !== filter) return false;
      if (difficultyFilter !== 'all' && p.difficulty !== difficultyFilter) return false;
      return true;
    });
  }, [filter, difficultyFilter]);

  const markAsSolved = (id: string) => {
    const newSolved = new Set(solvedProblems);
    newSolved.add(id);
    setSolvedProblems(newSolved);
    localStorage.setItem('eco_solved_problems', JSON.stringify([...newSolved]));
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'easy': return 'bg-green-500 text-white';
      case 'medium': return 'bg-yellow-500 text-white';
      case 'hard': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const nextStep = () => {
    if (selectedProblem && currentStep < selectedProblem.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const selectProblem = (problem: Problem) => {
    setSelectedProblem(problem);
    setCurrentStep(0);
    setShowAllSteps(false);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 rounded-2xl w-full max-w-6xl max-h-[95vh] overflow-hidden shadow-2xl border border-slate-700 flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-violet-600 p-5 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-4xl">🔢</div>
              <div>
                <h2 className="text-2xl font-bold text-white">Numerical Problem Solver</h2>
                <p className="text-purple-100 text-sm mt-1">
                  Step-by-step solutions • {solvedProblems.size}/{numericalProblems.length} solved
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white text-3xl transition-colors"
            >
              ×
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Problem List Sidebar */}
          <div className="w-80 bg-slate-800 border-r border-slate-700 overflow-y-auto flex-shrink-0">
            {/* Filters */}
            <div className="p-3 border-b border-slate-700 space-y-2">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full bg-slate-700 text-white rounded-lg px-3 py-2 text-sm"
              >
                {chapters.map(ch => (
                  <option key={ch.id} value={ch.id}>{ch.name}</option>
                ))}
              </select>
              <div className="flex gap-2">
                {['all', 'easy', 'medium', 'hard'].map(diff => (
                  <button
                    key={diff}
                    onClick={() => setDifficultyFilter(diff)}
                    className={`flex-1 px-2 py-1 rounded text-xs font-medium transition-all ${
                      difficultyFilter === diff
                        ? 'bg-purple-500 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {diff === 'all' ? 'All' : diff.charAt(0).toUpperCase() + diff.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Problem Cards */}
            <div className="p-3 space-y-2">
              {filteredProblems.map(problem => (
                <button
                  key={problem.id}
                  onClick={() => selectProblem(problem)}
                  className={`w-full text-left p-3 rounded-xl transition-all ${
                    selectedProblem?.id === problem.id
                      ? 'bg-purple-500 text-white'
                      : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                  }`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <span className="font-medium text-sm flex items-center gap-2">
                      {solvedProblems.has(problem.id) && <span className="text-green-400">✓</span>}
                      {problem.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`text-xs px-2 py-0.5 rounded ${getDifficultyColor(problem.difficulty)}`}>
                      {problem.difficulty}
                    </span>
                    <span className="text-xs opacity-70">{problem.chapter}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Solution Area */}
          <div className="flex-1 overflow-y-auto p-6">
            {!selectedProblem ? (
              <div className="h-full flex items-center justify-center text-slate-400">
                <div className="text-center">
                  <div className="text-6xl mb-4">📝</div>
                  <p className="text-xl">Select a problem from the list</p>
                  <p className="text-sm mt-2">Learn step-by-step problem solving</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Problem Header */}
                <div className="bg-slate-800 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-lg text-sm font-medium ${getDifficultyColor(selectedProblem.difficulty)}`}>
                      {selectedProblem.difficulty}
                    </span>
                    <span className="text-slate-400 text-sm">{selectedProblem.chapter}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{selectedProblem.title}</h3>
                  <p className="text-slate-300 leading-relaxed whitespace-pre-line">{selectedProblem.question}</p>
                </div>

                {/* Given Data */}
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                  <h4 className="text-blue-400 font-medium mb-3 flex items-center gap-2">
                    <span>📋</span> Given Data
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {selectedProblem.givenData.map((data, i) => (
                      <div key={i} className="bg-blue-500/10 px-3 py-2 rounded-lg">
                        <span className="text-blue-300 text-sm font-medium">{data.label}:</span>
                        <span className="text-white ml-2">{data.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solution Mode Toggle */}
                <div className="flex items-center justify-between">
                  <h4 className="text-white font-medium flex items-center gap-2">
                    <span>🧮</span> Solution
                  </h4>
                  <button
                    onClick={() => setShowAllSteps(!showAllSteps)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      showAllSteps
                        ? 'bg-purple-500 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {showAllSteps ? '📖 Step-by-Step Mode' : '👁️ Show All Steps'}
                  </button>
                </div>

                {/* Steps */}
                {showAllSteps ? (
                  // All steps view
                  <div className="space-y-4">
                    {selectedProblem.steps.map((step, i) => (
                      <div key={i} className="bg-slate-800 rounded-xl p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-sm">
                            {i + 1}
                          </span>
                          <span className="text-white font-medium">{step.explanation}</span>
                        </div>
                        {step.formula && (
                          <div className="ml-11 bg-blue-500/10 border border-blue-500/20 rounded-lg px-4 py-2 mb-2 font-mono text-blue-300">
                            {step.formula}
                          </div>
                        )}
                        {step.calculation && (
                          <div className="ml-11 bg-slate-700 rounded-lg px-4 py-2 mb-2 font-mono text-slate-300 whitespace-pre-line">
                            {step.calculation}
                          </div>
                        )}
                        {step.result && (
                          <div className="ml-11 bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-2 font-medium text-green-400">
                            ✓ {step.result}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  // Step-by-step view
                  <div className="bg-slate-800 rounded-xl p-5">
                    {/* Progress */}
                    <div className="flex items-center gap-2 mb-4">
                      {selectedProblem.steps.map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 flex-1 rounded-full transition-all ${
                            i <= currentStep ? 'bg-purple-500' : 'bg-slate-700'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-slate-400 mb-4">
                      Step {currentStep + 1} of {selectedProblem.steps.length}
                    </div>

                    {/* Current Step */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                          {currentStep + 1}
                        </span>
                        <span className="text-white text-lg font-medium">
                          {selectedProblem.steps[currentStep].explanation}
                        </span>
                      </div>
                      
                      {selectedProblem.steps[currentStep].formula && (
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-4 py-3 font-mono text-blue-300 text-lg">
                          {selectedProblem.steps[currentStep].formula}
                        </div>
                      )}
                      
                      {selectedProblem.steps[currentStep].calculation && (
                        <div className="bg-slate-700 rounded-lg px-4 py-3 font-mono text-slate-300 whitespace-pre-line">
                          {selectedProblem.steps[currentStep].calculation}
                        </div>
                      )}
                      
                      {selectedProblem.steps[currentStep].result && (
                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-3 font-medium text-green-400 text-lg">
                          ✓ {selectedProblem.steps[currentStep].result}
                        </div>
                      )}
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-700">
                      <button
                        onClick={prevStep}
                        disabled={currentStep === 0}
                        className="px-4 py-2 bg-slate-700 text-white rounded-lg disabled:opacity-50 hover:bg-slate-600 transition-colors"
                      >
                        ← Previous
                      </button>
                      <button
                        onClick={nextStep}
                        disabled={currentStep === selectedProblem.steps.length - 1}
                        className="px-4 py-2 bg-purple-500 text-white rounded-lg disabled:opacity-50 hover:bg-purple-600 transition-colors"
                      >
                        Next Step →
                      </button>
                    </div>
                  </div>
                )}

                {/* Final Answer */}
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-5">
                  <h4 className="text-green-400 font-medium mb-2 flex items-center gap-2">
                    <span>🎯</span> Final Answer
                  </h4>
                  <p className="text-2xl font-bold text-white">{selectedProblem.finalAnswer}</p>
                  {selectedProblem.tip && (
                    <div className="mt-4 pt-4 border-t border-green-500/20">
                      <p className="text-sm text-green-300 whitespace-pre-line">
                        💡 <strong>Tip:</strong> {selectedProblem.tip}
                      </p>
                    </div>
                  )}
                </div>

                {/* Mark as Solved */}
                {!solvedProblems.has(selectedProblem.id) && (
                  <button
                    onClick={() => markAsSolved(selectedProblem.id)}
                    className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-colors"
                  >
                    ✓ Mark as Solved
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoNumericalSolver;
