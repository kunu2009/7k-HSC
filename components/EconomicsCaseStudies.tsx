import React, { useState, useMemo } from 'react';
import { X, TrendingUp, Search, ChevronDown, ChevronUp, Star, CheckCircle, DollarSign, Users, Building2, Globe, BarChart3, Lightbulb, Target, BookOpen } from 'lucide-react';

interface EconomicsCaseStudiesProps {
  onClose: () => void;
}

interface CaseStudy {
  id: string;
  title: string;
  chapter: string;
  category: 'micro' | 'macro' | 'indian' | 'development';
  context: string;
  scenario: string;
  questions: { question: string; answer: string }[];
  concepts: string[];
  examRelevance: string;
}

interface EconomicsConcept {
  id: string;
  term: string;
  termHindi?: string;
  definition: string;
  formula?: string;
  example: string;
  chapter: string;
  importance: 'high' | 'medium';
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'Price Determination in Agricultural Market',
    chapter: 'Chapter 5: Market',
    category: 'micro',
    context: 'A village has 100 farmers growing tomatoes. Due to good monsoon, production doubled this year. However, demand remained the same as last year.',
    scenario: 'Last year: Price = ₹40/kg, Quantity = 1000 kg/day\nThis year: Supply doubled to 2000 kg/day, Demand unchanged\n\nThe market is perfectly competitive with many buyers and sellers.',
    questions: [
      {
        question: 'What will happen to the equilibrium price of tomatoes?',
        answer: 'The equilibrium price will FALL. When supply increases while demand remains constant, there is excess supply at the original price. This creates downward pressure on price until a new equilibrium is reached at a lower price.'
      },
      {
        question: 'Explain using demand-supply diagram.',
        answer: 'The supply curve shifts RIGHT from S1 to S2. Demand curve remains unchanged. New equilibrium E2 is at a lower price and higher quantity than original E1. Price falls from ₹40 to approximately ₹25-30.'
      },
      {
        question: 'What type of market is this? Justify.',
        answer: 'This is a PERFECTLY COMPETITIVE market because: (1) Large number of buyers and sellers, (2) Homogeneous product (tomatoes), (3) Free entry and exit, (4) Perfect knowledge of prices, (5) No single farmer can influence market price.'
      }
    ],
    concepts: ['Equilibrium Price', 'Supply Shift', 'Perfect Competition', 'Price Determination'],
    examRelevance: 'Questions on price determination with shift in supply/demand are common. Practice drawing diagrams.'
  },
  {
    id: 'cs2',
    title: 'Elasticity of Demand - Petrol vs Salt',
    chapter: 'Chapter 4: Elasticity of Demand',
    category: 'micro',
    context: 'Government increased taxes leading to 10% price rise in both petrol and salt.',
    scenario: 'Petrol: Price increased by 10%, Quantity demanded fell by only 2%\nSalt: Price increased by 10%, Quantity demanded fell by only 0.5%\n\nInitial monthly consumption:\nPetrol: 100 liters per household\nSalt: 2 kg per household',
    questions: [
      {
        question: 'Calculate price elasticity of demand for both goods.',
        answer: 'Ed = % change in Quantity / % change in Price\n\nPetrol: Ed = 2%/10% = 0.2 (Inelastic)\nSalt: Ed = 0.5%/10% = 0.05 (Highly Inelastic)\n\nBoth have Ed < 1, meaning inelastic demand.'
      },
      {
        question: 'Why is demand for salt more inelastic than petrol?',
        answer: '(1) Salt is a NECESSITY with no substitutes - you cannot replace salt\n(2) Salt forms a very SMALL proportion of budget - even 50% price rise barely affects household spending\n(3) Salt has NO CLOSE SUBSTITUTES while petrol has alternatives like public transport, EVs\n(4) Salt consumption is HABITUAL and essential for health'
      },
      {
        question: 'What will be the effect on government tax revenue?',
        answer: 'Tax revenue will INCREASE for both goods because demand is inelastic. When Ed < 1, price increase leads to smaller percentage fall in quantity, so total revenue (P × Q) increases. This is why governments tax necessities - revenue is stable.'
      }
    ],
    concepts: ['Price Elasticity', 'Inelastic Demand', 'Necessities', 'Tax Revenue'],
    examRelevance: 'Numerical problems on elasticity calculation are important. Remember the formula and factors affecting elasticity.'
  },
  {
    id: 'cs3',
    title: 'Cost Analysis - Small Scale Manufacturing',
    chapter: 'Chapter 6: Cost and Revenue',
    category: 'micro',
    context: 'Ramesh starts a small unit manufacturing paper bags as alternative to plastic bags.',
    scenario: 'Fixed Costs (Monthly):\n- Rent: ₹10,000\n- Machine depreciation: ₹5,000\n- Insurance: ₹1,000\nTotal FC = ₹16,000\n\nVariable Costs (per 1000 bags):\n- Paper: ₹200\n- Labor: ₹100\n- Glue/Other: ₹50\nTotal VC per 1000 bags = ₹350\n\nSelling Price: ₹500 per 1000 bags\nCurrent Production: 100,000 bags/month',
    questions: [
      {
        question: 'Calculate Total Cost, Average Cost, and Marginal Cost.',
        answer: 'TC = FC + VC = 16,000 + (350 × 100) = 16,000 + 35,000 = ₹51,000\n\nAC = TC/Q = 51,000/100 = ₹510 per 1000 bags\n\nMC = Change in TC / Change in Q = ₹350 per 1000 bags (equals AVC in this case)'
      },
      {
        question: 'Is Ramesh making profit or loss? Calculate.',
        answer: 'Total Revenue = 500 × 100 = ₹50,000\nTotal Cost = ₹51,000\n\nProfit/Loss = TR - TC = 50,000 - 51,000 = -₹1,000 (LOSS)\n\nRamesh is making a loss of ₹1,000 per month because AC (₹510) > Price (₹500)'
      },
      {
        question: 'What is the break-even quantity?',
        answer: 'Break-even: TR = TC\n500Q = 16,000 + 350Q\n150Q = 16,000\nQ = 106.67 thousand bags\n\nRamesh needs to produce approximately 107,000 bags per month to break even.'
      }
    ],
    concepts: ['Fixed Cost', 'Variable Cost', 'Average Cost', 'Break-even Point', 'Profit Calculation'],
    examRelevance: 'Cost calculation numericals are very common. Practice TC, AC, MC, and break-even calculations.'
  },
  {
    id: 'cs4',
    title: 'National Income Calculation',
    chapter: 'Chapter 8: National Income',
    category: 'macro',
    context: 'Data for a hypothetical economy for calculating National Income.',
    scenario: '(All figures in ₹ Crores)\nPrivate Final Consumption Expenditure: 1,00,000\nGovernment Final Consumption Expenditure: 30,000\nGross Domestic Capital Formation: 40,000\nExports: 15,000\nImports: 20,000\nNet Factor Income from Abroad: -5,000\nDepreciation: 10,000\nNet Indirect Taxes: 8,000',
    questions: [
      {
        question: 'Calculate GDP at Market Price using Expenditure Method.',
        answer: 'GDP(MP) = C + G + I + (X - M)\n= Private Consumption + Govt Consumption + Investment + Net Exports\n= 1,00,000 + 30,000 + 40,000 + (15,000 - 20,000)\n= 1,70,000 - 5,000\n= ₹1,65,000 Crores'
      },
      {
        question: 'Calculate NNP at Factor Cost (National Income).',
        answer: 'NNP(FC) = GDP(MP) + NFIA - Depreciation - Net Indirect Taxes\n= 1,65,000 + (-5,000) - 10,000 - 8,000\n= 1,65,000 - 23,000\n= ₹1,42,000 Crores\n\nNational Income = ₹1,42,000 Crores'
      },
      {
        question: 'What does negative NFIA indicate?',
        answer: 'Negative NFIA (-5,000) indicates that factor income paid to foreigners exceeds factor income received from abroad. This means:\n(1) More foreign investment in the country than domestic investment abroad\n(2) Significant remittances going out\n(3) Payments for foreign technology, patents, etc.\n\nGNP < GDP in this case.'
      }
    ],
    concepts: ['GDP', 'GNP', 'NNP', 'National Income', 'NFIA', 'Expenditure Method'],
    examRelevance: 'National Income numericals are guaranteed 8-10 marks questions. Master all three methods.'
  },
  {
    id: 'cs5',
    title: 'Money Supply and Credit Creation',
    chapter: 'Chapter 9: Money and Banking',
    category: 'macro',
    context: 'RBI conducts monetary policy to control inflation.',
    scenario: 'Initial Scenario:\n- Cash Reserve Ratio (CRR): 4%\n- Total Deposits in Banking System: ₹10,00,000 Crores\n- Inflation Rate: 7% (above RBI target of 4%)\n\nRBI Decision: Increase CRR from 4% to 6%',
    questions: [
      {
        question: 'Calculate the credit creation multiplier before and after CRR change.',
        answer: 'Credit Multiplier = 1/CRR\n\nBefore: 1/0.04 = 25\nAfter: 1/0.06 = 16.67\n\nCredit creation capacity reduced significantly.'
      },
      {
        question: 'How much will total credit in the economy change?',
        answer: 'Maximum Credit Creation = Deposits × Multiplier\n\nBefore: 10,00,000 × 25 = ₹2,50,00,000 Crores\nAfter: 10,00,000 × 16.67 = ₹1,66,70,000 Crores\n\nReduction: ₹83,30,000 Crores (approximately ₹83 lakh crores)'
      },
      {
        question: 'How does this help control inflation?',
        answer: 'Higher CRR → Banks must keep more reserves with RBI → Less money available for lending → Credit contracts → Money supply decreases → Aggregate demand falls → Demand-pull inflation reduces\n\nThis is called CONTRACTIONARY MONETARY POLICY or "Dear Money Policy".'
      }
    ],
    concepts: ['CRR', 'Credit Multiplier', 'Money Supply', 'Inflation Control', 'Monetary Policy'],
    examRelevance: 'Credit creation multiplier and monetary policy tools are important. Understand the transmission mechanism.'
  },
  {
    id: 'cs6',
    title: 'Government Budget - Fiscal Policy',
    chapter: 'Chapter 10: Government Budget',
    category: 'macro',
    context: 'Analysis of Union Budget focusing on deficit financing.',
    scenario: 'Budget Estimates (₹ Lakh Crores):\nRevenue Receipts: 23\n- Tax Revenue: 18\n- Non-Tax Revenue: 5\nCapital Receipts: 17\n- Borrowings: 15\n- Other Capital Receipts: 2\n\nRevenue Expenditure: 35\nCapital Expenditure: 5\nTotal Expenditure: 40',
    questions: [
      {
        question: 'Calculate Revenue Deficit, Fiscal Deficit, and Primary Deficit.',
        answer: 'Revenue Deficit = Revenue Expenditure - Revenue Receipts\n= 35 - 23 = ₹12 Lakh Crores\n\nFiscal Deficit = Total Expenditure - (Revenue Receipts + Non-Debt Capital Receipts)\n= 40 - (23 + 2) = 40 - 25 = ₹15 Lakh Crores\n\nPrimary Deficit = Fiscal Deficit - Interest Payments\n(Assuming interest payment = ₹8 lakh crores)\n= 15 - 8 = ₹7 Lakh Crores'
      },
      {
        question: 'Why is high Revenue Deficit problematic?',
        answer: 'Revenue Deficit means government is borrowing for current consumption, not investment:\n(1) Government is living beyond its means\n(2) Borrowings not creating productive assets\n(3) Future generations bear burden of current consumption\n(4) Indicates poor fiscal discipline\n(5) May lead to debt trap'
      },
      {
        question: 'Suggest measures to reduce Fiscal Deficit.',
        answer: '(1) INCREASE REVENUE: Widen tax base, improve tax compliance, disinvestment of PSUs\n(2) REDUCE EXPENDITURE: Cut subsidies, rationalize schemes, reduce administrative costs\n(3) IMPROVE EFFICIENCY: Direct Benefit Transfer, eliminate leakages\n(4) MONETIZE ASSETS: Lease government land, infrastructure monetization\n(5) BOOST GROWTH: Higher GDP growth naturally improves revenue'
      }
    ],
    concepts: ['Revenue Deficit', 'Fiscal Deficit', 'Primary Deficit', 'Deficit Financing', 'Fiscal Policy'],
    examRelevance: 'Deficit calculations are very important. Understand the implications of each type of deficit.'
  }
];

const KEY_CONCEPTS: EconomicsConcept[] = [
  { id: 'k1', term: 'Opportunity Cost', termHindi: 'अवसर लागत', definition: 'The value of the next best alternative foregone when making a choice', formula: 'OC = Value of chosen option - Value of best alternative not chosen', example: 'If you spend ₹500 on movies instead of books, opportunity cost is the knowledge from books foregone', chapter: 'Chapter 1: Introduction', importance: 'high' },
  { id: 'k2', term: 'Price Elasticity of Demand', termHindi: 'माँग की कीमत लोच', definition: 'Percentage change in quantity demanded divided by percentage change in price', formula: 'Ed = (% ΔQd) / (% ΔP) = (ΔQ/Q) × (P/ΔP)', example: 'If 10% price rise causes 20% fall in demand, Ed = 20/10 = 2 (Elastic)', chapter: 'Chapter 4: Elasticity', importance: 'high' },
  { id: 'k3', term: 'Marginal Cost', termHindi: 'सीमांत लागत', definition: 'Addition to total cost when one more unit is produced', formula: 'MC = ΔTC / ΔQ = TCn - TCn-1', example: 'If TC for 10 units is ₹500 and for 11 units is ₹540, MC = ₹40', chapter: 'Chapter 6: Cost', importance: 'high' },
  { id: 'k4', term: 'Marginal Revenue', termHindi: 'सीमांत आय', definition: 'Addition to total revenue when one more unit is sold', formula: 'MR = ΔTR / ΔQ = TRn - TRn-1', example: 'If TR for 10 units is ₹1000 and for 11 units is ₹1080, MR = ₹80', chapter: 'Chapter 6: Revenue', importance: 'high' },
  { id: 'k5', term: 'GDP at Market Price', termHindi: 'बाजार मूल्य पर सकल घरेलू उत्पाद', definition: 'Total market value of all final goods and services produced within domestic territory in a year', formula: 'GDP(MP) = C + I + G + (X-M)', example: 'India\'s GDP 2023-24 ≈ ₹300 lakh crores', chapter: 'Chapter 8: National Income', importance: 'high' },
  { id: 'k6', term: 'Credit Multiplier', termHindi: 'साख गुणक', definition: 'The ratio by which total credit expands relative to initial deposit', formula: 'Credit Multiplier = 1/CRR', example: 'If CRR = 4%, Multiplier = 1/0.04 = 25. ₹100 deposit creates ₹2500 credit', chapter: 'Chapter 9: Banking', importance: 'high' },
  { id: 'k7', term: 'Fiscal Deficit', termHindi: 'राजकोषीय घाटा', definition: 'Total expenditure minus total receipts excluding borrowings', formula: 'FD = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts)', example: 'If Expenditure = ₹40L Cr and Non-borrowed Receipts = ₹25L Cr, FD = ₹15L Cr', chapter: 'Chapter 10: Budget', importance: 'high' },
  { id: 'k8', term: 'Balance of Payments', termHindi: 'भुगतान संतुलन', definition: 'Systematic record of all economic transactions between residents of a country and rest of the world', formula: 'BOP = Current Account + Capital Account + Official Reserve Account', example: 'India\'s Current Account Deficit reflects imports > exports', chapter: 'Chapter 11: BOP', importance: 'high' },
  { id: 'k9', term: 'Consumer Surplus', termHindi: 'उपभोक्ता बचत', definition: 'Difference between what consumer is willing to pay and what they actually pay', formula: 'CS = Willingness to Pay - Actual Price', example: 'Willing to pay ₹100, paid ₹70, Consumer Surplus = ₹30', chapter: 'Chapter 2: Consumer', importance: 'medium' },
  { id: 'k10', term: 'Producer Surplus', termHindi: 'उत्पादक बचत', definition: 'Difference between market price received and minimum price producer would accept', formula: 'PS = Market Price - Minimum Acceptable Price', example: 'Sold at ₹100, would accept ₹60 minimum, PS = ₹40', chapter: 'Chapter 3: Producer', importance: 'medium' }
];

const EconomicsCaseStudies: React.FC<EconomicsCaseStudiesProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'cases' | 'concepts'>('cases');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCase, setExpandedCase] = useState<string | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const filteredCases = useMemo(() => {
    return CASE_STUDIES.filter(cs => {
      const matchesCategory = selectedCategory === 'all' || cs.category === selectedCategory;
      const matchesSearch = searchQuery === '' ||
        cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cs.concepts.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const filteredConcepts = useMemo(() => {
    return KEY_CONCEPTS.filter(c => {
      const matchesSearch = searchQuery === '' ||
        c.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.definition.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery]);

  const categories = [
    { id: 'all', name: 'All', icon: BarChart3 },
    { id: 'micro', name: 'Micro', icon: Users },
    { id: 'macro', name: 'Macro', icon: Globe },
    { id: 'indian', name: 'Indian Economy', icon: Building2 }
  ];

  const getCategoryColor = (cat: string) => {
    switch(cat) {
      case 'micro': return 'bg-blue-900/30 text-blue-400';
      case 'macro': return 'bg-green-900/30 text-green-400';
      case 'indian': return 'bg-orange-900/30 text-orange-400';
      case 'development': return 'bg-purple-900/30 text-purple-400';
      default: return 'bg-slate-600 text-slate-300';
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
                  <TrendingUp className="w-6 h-6" />
                </div>
                Economics Case Studies
              </h2>
              <p className="text-slate-400 mt-1">Application-based learning with solved case studies</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
              <X className="w-6 h-6 text-slate-400" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setActiveTab('cases')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'cases'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Case Studies ({CASE_STUDIES.length})
            </button>
            <button
              onClick={() => setActiveTab('concepts')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'concepts'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              <Lightbulb className="w-4 h-4" />
              Key Concepts ({KEY_CONCEPTS.length})
            </button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search cases or concepts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
              />
            </div>
            {activeTab === 'cases' && categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Case Studies Tab */}
          {activeTab === 'cases' && (
            <div className="space-y-4">
              {filteredCases.map(cs => (
                <div key={cs.id} className="bg-slate-700/50 rounded-xl overflow-hidden">
                  {/* Case Header */}
                  <div
                    onClick={() => setExpandedCase(expandedCase === cs.id ? null : cs.id)}
                    className="p-4 cursor-pointer hover:bg-slate-700 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2 py-0.5 rounded text-xs font-medium ${getCategoryColor(cs.category)}`}>
                            {cs.category.toUpperCase()}
                          </span>
                          <span className="text-xs text-slate-500">{cs.chapter}</span>
                        </div>
                        <h3 className="font-semibold text-white text-lg">{cs.title}</h3>
                        <p className="text-sm text-slate-400 mt-1">{cs.context}</p>
                      </div>
                      {expandedCase === cs.id ? 
                        <ChevronUp className="w-5 h-5 text-slate-400 ml-4" /> : 
                        <ChevronDown className="w-5 h-5 text-slate-400 ml-4" />
                      }
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {cs.concepts.map((concept, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-emerald-900/30 text-emerald-400 rounded text-xs">
                          {concept}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedCase === cs.id && (
                    <div className="border-t border-slate-600 p-4 space-y-4">
                      {/* Scenario */}
                      <div>
                        <h4 className="text-sm font-medium text-emerald-400 mb-2 flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          Scenario / Data Given
                        </h4>
                        <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-slate-300 whitespace-pre-wrap">
                          {cs.scenario}
                        </div>
                      </div>

                      {/* Questions & Answers */}
                      <div>
                        <h4 className="text-sm font-medium text-emerald-400 mb-3 flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          Questions & Model Answers
                        </h4>
                        <div className="space-y-3">
                          {cs.questions.map((qa, idx) => (
                            <div key={idx} className="bg-slate-600/50 rounded-lg overflow-hidden">
                              <div
                                onClick={() => setExpandedQuestion(expandedQuestion === `${cs.id}-${idx}` ? null : `${cs.id}-${idx}`)}
                                className="p-3 cursor-pointer hover:bg-slate-600 transition-colors flex items-start gap-3"
                              >
                                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-medium">
                                  Q{idx + 1}
                                </span>
                                <div className="flex-1">
                                  <p className="text-white font-medium">{qa.question}</p>
                                </div>
                                {expandedQuestion === `${cs.id}-${idx}` ? 
                                  <ChevronUp className="w-4 h-4 text-slate-400" /> : 
                                  <ChevronDown className="w-4 h-4 text-slate-400" />
                                }
                              </div>
                              {expandedQuestion === `${cs.id}-${idx}` && (
                                <div className="px-3 pb-3 pt-0 ml-9">
                                  <div className="bg-emerald-900/20 rounded-lg p-3 border-l-4 border-emerald-500">
                                    <p className="text-sm text-slate-300 whitespace-pre-wrap">{qa.answer}</p>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Exam Relevance */}
                      <div className="p-3 bg-yellow-900/20 rounded-lg border border-yellow-700">
                        <div className="flex items-start gap-2">
                          <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-yellow-400 font-medium text-sm">Exam Tip: </span>
                            <span className="text-yellow-200 text-sm">{cs.examRelevance}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {filteredCases.length === 0 && (
                <div className="text-center py-12">
                  <TrendingUp className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-400">No case studies found</p>
                </div>
              )}
            </div>
          )}

          {/* Concepts Tab */}
          {activeTab === 'concepts' && (
            <div className="space-y-3">
              {filteredConcepts.map(concept => (
                <div key={concept.id} className={`rounded-xl p-4 ${
                  concept.importance === 'high' 
                    ? 'bg-emerald-900/20 border border-emerald-800' 
                    : 'bg-slate-700/50'
                }`}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-white text-lg">{concept.term}</h3>
                      {concept.termHindi && (
                        <p className="text-sm text-emerald-400">{concept.termHindi}</p>
                      )}
                    </div>
                    {concept.importance === 'high' && (
                      <span className="px-2 py-0.5 bg-red-900/50 text-red-400 rounded text-xs font-medium">
                        HIGH PRIORITY
                      </span>
                    )}
                  </div>
                  
                  <p className="text-slate-300 text-sm mb-3">{concept.definition}</p>
                  
                  {concept.formula && (
                    <div className="bg-slate-900 rounded-lg p-3 mb-3 font-mono text-sm">
                      <span className="text-slate-400">Formula: </span>
                      <span className="text-emerald-400">{concept.formula}</span>
                    </div>
                  )}
                  
                  <div className="flex items-start gap-2 text-sm">
                    <Lightbulb className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-400">
                      <span className="text-slate-300">Example: </span>
                      {concept.example}
                    </span>
                  </div>
                  
                  <div className="mt-2 text-xs text-slate-500">
                    {concept.chapter}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EconomicsCaseStudies;
