import React, { useState } from 'react';
import { X, BookOpen, Lightbulb, Copy, Check, ChevronDown, ChevronUp, Search } from 'lucide-react';

interface ArtsMasterFormulaProps {
  onClose: () => void;
}

const ArtsMasterFormula: React.FC<ArtsMasterFormulaProps> = ({ onClose }) => {
  const [activeSubject, setActiveSubject] = useState<string>('economics');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>('basic');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const subjects = [
    { id: 'economics', name: 'Economics', icon: '📊', color: 'indigo' },
    { id: 'geography', name: 'Geography', icon: '🌍', color: 'emerald' },
    { id: 'history', name: 'History', icon: '📜', color: 'orange' },
    { id: 'polsci', name: 'Political Science', icon: '⚖️', color: 'red' },
  ];

  const formulas: Record<string, { category: string; items: { id: string; name: string; formula: string; example?: string }[] }[]> = {
    economics: [
      {
        category: 'Basic Formulas',
        items: [
          { id: 'e1', name: 'Elasticity of Demand', formula: 'Ed = (% ΔQd) / (% ΔP)', example: 'If Qd changes by 10% when P changes by 5%, Ed = 10/5 = 2' },
          { id: 'e2', name: 'Price Elasticity', formula: 'Ep = (ΔQ/Q) × (P/ΔP)', example: 'Measures responsiveness of quantity to price' },
          { id: 'e3', name: 'Income Elasticity', formula: 'Ey = (% ΔQd) / (% ΔY)', example: 'Measures demand change with income change' },
          { id: 'e4', name: 'Cross Elasticity', formula: 'Exy = (% ΔQx) / (% ΔPy)', example: 'Positive for substitutes, Negative for complements' },
        ]
      },
      {
        category: 'National Income',
        items: [
          { id: 'e5', name: 'GDP (Expenditure)', formula: 'GDP = C + I + G + (X - M)', example: 'C=Consumption, I=Investment, G=Govt, X-M=Net Exports' },
          { id: 'e6', name: 'GDP (Income)', formula: 'GDP = W + R + I + P', example: 'W=Wages, R=Rent, I=Interest, P=Profit' },
          { id: 'e7', name: 'NNP at FC', formula: 'NNP = GNP - Depreciation', example: 'Net National Product = GNP minus wear & tear' },
          { id: 'e8', name: 'Per Capita Income', formula: 'PCI = National Income / Population', example: 'Average income per person' },
          { id: 'e9', name: 'Real GDP', formula: 'Real GDP = (Nominal GDP / Price Index) × 100', example: 'Adjusted for inflation' },
        ]
      },
      {
        category: 'Cost & Revenue',
        items: [
          { id: 'e10', name: 'Total Cost', formula: 'TC = TFC + TVC', example: 'Fixed costs + Variable costs' },
          { id: 'e11', name: 'Average Cost', formula: 'AC = TC / Q', example: 'Cost per unit produced' },
          { id: 'e12', name: 'Marginal Cost', formula: 'MC = ΔTC / ΔQ', example: 'Cost of one additional unit' },
          { id: 'e13', name: 'Total Revenue', formula: 'TR = P × Q', example: 'Price multiplied by Quantity' },
          { id: 'e14', name: 'Marginal Revenue', formula: 'MR = ΔTR / ΔQ', example: 'Revenue from one additional unit' },
          { id: 'e15', name: 'Profit', formula: 'Profit = TR - TC', example: 'Total Revenue minus Total Cost' },
          { id: 'e16', name: 'Break-even Point', formula: 'BEP: TR = TC (or AR = AC)', example: 'No profit, no loss point' },
        ]
      },
      {
        category: 'Money & Banking',
        items: [
          { id: 'e17', name: 'Money Multiplier', formula: 'MM = 1 / CRR', example: 'If CRR = 4%, MM = 1/0.04 = 25' },
          { id: 'e18', name: 'Credit Creation', formula: 'Total Credit = Initial Deposit × (1/CRR)', example: 'How banks multiply money' },
          { id: 'e19', name: 'Inflation Rate', formula: 'IR = [(CPI₁ - CPI₀) / CPI₀] × 100', example: 'Percentage rise in price level' },
        ]
      }
    ],
    geography: [
      {
        category: 'Population',
        items: [
          { id: 'g1', name: 'Population Density', formula: 'Density = Total Population / Total Area', example: 'Persons per sq. km' },
          { id: 'g2', name: 'Growth Rate', formula: 'GR = [(P₂ - P₁) / P₁] × 100', example: 'Percentage population change' },
          { id: 'g3', name: 'Natural Growth', formula: 'NG = Birth Rate - Death Rate', example: 'Per 1000 population per year' },
          { id: 'g4', name: 'Dependency Ratio', formula: 'DR = [(0-14) + (65+)] / (15-64) × 100', example: 'Dependents per 100 workers' },
          { id: 'g5', name: 'Sex Ratio', formula: 'SR = (Females / Males) × 1000', example: 'India: 940 females per 1000 males (2011)' },
        ]
      },
      {
        category: 'Development Indices',
        items: [
          { id: 'g6', name: 'HDI Components', formula: 'HDI = (LEI + EI + II) / 3', example: 'Life Expectancy + Education + Income Indices' },
          { id: 'g7', name: 'Literacy Rate', formula: 'LR = (Literate Pop / Pop 7+) × 100', example: 'Percentage who can read & write' },
          { id: 'g8', name: 'Urbanization', formula: 'UR = (Urban Pop / Total Pop) × 100', example: 'Percentage living in urban areas' },
        ]
      },
      {
        category: 'Trade & Transport',
        items: [
          { id: 'g9', name: 'Trade Balance', formula: 'TB = Exports - Imports', example: 'Positive = Surplus, Negative = Deficit' },
          { id: 'g10', name: 'Road Density', formula: 'RD = Total Road Length / Total Area', example: 'km of road per sq. km' },
          { id: 'g11', name: 'Railway Density', formula: 'RD = Rail km / Area or Population', example: 'Measures transport accessibility' },
        ]
      }
    ],
    history: [
      {
        category: 'Key Dates & Events',
        items: [
          { id: 'h1', name: 'Renaissance Period', formula: '14th-17th Century', example: 'Started in Italy, spread to Europe' },
          { id: 'h2', name: 'Industrial Revolution', formula: '1760-1840', example: 'Started in Britain, spread globally' },
          { id: 'h3', name: 'French Revolution', formula: '1789-1799', example: 'Liberty, Equality, Fraternity' },
          { id: 'h4', name: 'World War I', formula: '1914-1918', example: 'Allied vs Central Powers' },
          { id: 'h5', name: 'World War II', formula: '1939-1945', example: 'Allied vs Axis Powers' },
          { id: 'h6', name: 'Cold War', formula: '1947-1991', example: 'USA vs USSR ideological conflict' },
          { id: 'h7', name: 'Indian Independence', formula: '15 Aug 1947', example: 'End of British colonial rule' },
        ]
      },
      {
        category: 'Important Treaties',
        items: [
          { id: 'h8', name: 'Treaty of Westphalia', formula: '1648', example: 'End of 30 Years War, modern state system' },
          { id: 'h9', name: 'Treaty of Versailles', formula: '1919', example: 'End of WWI, League of Nations formed' },
          { id: 'h10', name: 'UN Charter', formula: '1945', example: 'Established United Nations' },
          { id: 'h11', name: 'NAM Founded', formula: '1961 (Belgrade)', example: 'Non-Aligned Movement' },
        ]
      }
    ],
    polsci: [
      {
        category: 'Constitutional Facts',
        items: [
          { id: 'p1', name: 'Constitution Adopted', formula: '26 Nov 1949', example: 'Constitution Day' },
          { id: 'p2', name: 'Constitution Enacted', formula: '26 Jan 1950', example: 'Republic Day' },
          { id: 'p3', name: 'Original Articles', formula: '395 Articles', example: 'Now 470+ with amendments' },
          { id: 'p4', name: 'Schedules', formula: '8 → 12 Schedules', example: 'Lists for various provisions' },
          { id: 'p5', name: 'Parts', formula: '22 Parts', example: 'Grouping of related articles' },
        ]
      },
      {
        category: 'Key Articles',
        items: [
          { id: 'p6', name: 'Fundamental Rights', formula: 'Articles 12-35', example: 'Part III of Constitution' },
          { id: 'p7', name: 'DPSP', formula: 'Articles 36-51', example: 'Directive Principles (Part IV)' },
          { id: 'p8', name: 'Fundamental Duties', formula: 'Article 51A', example: '11 duties of citizens' },
          { id: 'p9', name: 'Emergency', formula: 'Articles 352, 356, 360', example: 'National, State, Financial' },
          { id: 'p10', name: 'Amendment', formula: 'Article 368', example: 'Procedure to amend Constitution' },
        ]
      },
      {
        category: 'International Organizations',
        items: [
          { id: 'p11', name: 'UN Members', formula: '193 countries', example: 'Latest: South Sudan (2011)' },
          { id: 'p12', name: 'UNSC Permanent', formula: '5 members (P5)', example: 'USA, UK, France, Russia, China' },
          { id: 'p13', name: 'SAARC Members', formula: '8 countries', example: 'Founded 1985, HQ Kathmandu' },
          { id: 'p14', name: 'BRICS', formula: '5 → 10 members (2024)', example: 'Brazil, Russia, India, China, SA + 5' },
          { id: 'p15', name: 'G20', formula: '19 + EU + AU', example: 'India hosted 2023 summit' },
        ]
      }
    ]
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const currentFormulas = formulas[activeSubject] || [];
  const filteredFormulas = currentFormulas.map(cat => ({
    ...cat,
    items: cat.items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.formula.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.items.length > 0);

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      indigo: 'bg-indigo-500 text-indigo-600 bg-indigo-50 border-indigo-200',
      emerald: 'bg-emerald-500 text-emerald-600 bg-emerald-50 border-emerald-200',
      orange: 'bg-orange-500 text-orange-600 bg-orange-50 border-orange-200',
      red: 'bg-red-500 text-red-600 bg-red-50 border-red-200',
    };
    return colors[color] || colors.indigo;
  };

  const activeSubjectData = subjects.find(s => s.id === activeSubject);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className={`bg-gradient-to-r from-${activeSubjectData?.color}-600 to-${activeSubjectData?.color}-700 text-white p-6`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{activeSubjectData?.icon}</span>
              <div>
                <h2 className="text-2xl font-bold">Arts Master Formula Bank</h2>
                <p className="text-white/80">Quick reference for all key formulas & concepts</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition">
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Subject Tabs */}
        <div className="flex border-b bg-gray-50 overflow-x-auto">
          {subjects.map(subject => (
            <button
              key={subject.id}
              onClick={() => setActiveSubject(subject.id)}
              className={`flex items-center gap-2 px-6 py-3 font-medium whitespace-nowrap transition ${
                activeSubject === subject.id
                  ? `text-${subject.color}-600 border-b-2 border-${subject.color}-600 bg-white`
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <span>{subject.icon}</span>
              {subject.name}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="p-4 border-b">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search formulas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Formulas List */}
        <div className="overflow-y-auto max-h-[50vh] p-4">
          {filteredFormulas.map((category, catIdx) => (
            <div key={catIdx} className="mb-4">
              <button
                onClick={() => setExpandedCategory(expandedCategory === category.category ? null : category.category)}
                className="w-full flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
              >
                <span className="font-semibold text-gray-800">{category.category}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">{category.items.length} items</span>
                  {expandedCategory === category.category ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>
              
              {expandedCategory === category.category && (
                <div className="mt-2 space-y-2">
                  {category.items.map(item => (
                    <div
                      key={item.id}
                      className="p-4 border rounded-lg hover:shadow-md transition bg-white"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">{item.name}</h4>
                          <div className="mt-2 p-3 bg-gray-900 text-green-400 rounded-lg font-mono text-lg">
                            {item.formula}
                          </div>
                          {item.example && (
                            <p className="mt-2 text-sm text-gray-600 flex items-start gap-2">
                              <Lightbulb size={16} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                              {item.example}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => copyToClipboard(item.formula, item.id)}
                          className="ml-3 p-2 hover:bg-gray-100 rounded-lg transition"
                          title="Copy formula"
                        >
                          {copiedId === item.id ? (
                            <Check size={20} className="text-green-500" />
                          ) : (
                            <Copy size={20} className="text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="p-4 bg-gray-50 border-t">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>📚 {currentFormulas.reduce((acc, cat) => acc + cat.items.length, 0)} formulas in {activeSubjectData?.name}</span>
            <span className="flex items-center gap-2">
              <Lightbulb size={16} className="text-yellow-500" />
              Tip: Master these for quick recall in exam!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtsMasterFormula;
