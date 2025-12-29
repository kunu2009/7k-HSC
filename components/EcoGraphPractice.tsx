import React, { useState, useRef, useEffect } from 'react';

interface EcoGraphPracticeProps {
  onClose: () => void;
}

interface Graph {
  id: string;
  name: string;
  chapter: string;
  chapterId: string;
  difficulty: 'easy' | 'medium' | 'hard';
  xAxis: string;
  yAxis: string;
  curves: {
    name: string;
    color: string;
    points: { x: number; y: number }[];
    label: string;
    labelPos: { x: number; y: number };
  }[];
  keyPoints: { x: number; y: number; label: string }[];
  annotations: string[];
  tips: string[];
}

const economicsGraphs: Graph[] = [
  // Utility Analysis
  {
    id: 'tu-mu-curve',
    name: 'Total Utility & Marginal Utility Curves',
    chapter: 'Utility Analysis',
    chapterId: 'eco2',
    difficulty: 'medium',
    xAxis: 'Quantity (Units)',
    yAxis: 'Utility (Utils)',
    curves: [
      {
        name: 'Total Utility (TU)',
        color: '#3b82f6',
        points: [
          { x: 0, y: 0 }, { x: 1, y: 30 }, { x: 2, y: 55 }, { x: 3, y: 75 },
          { x: 4, y: 90 }, { x: 5, y: 100 }, { x: 6, y: 100 }, { x: 7, y: 95 }
        ],
        label: 'TU',
        labelPos: { x: 85, y: 15 }
      },
      {
        name: 'Marginal Utility (MU)',
        color: '#ef4444',
        points: [
          { x: 0, y: 30 }, { x: 1, y: 25 }, { x: 2, y: 20 }, { x: 3, y: 15 },
          { x: 4, y: 10 }, { x: 5, y: 0 }, { x: 6, y: -5 }
        ],
        label: 'MU',
        labelPos: { x: 90, y: 70 }
      }
    ],
    keyPoints: [
      { x: 5, y: 100, label: 'TU Maximum (Point of Satiety)' },
      { x: 5, y: 0, label: 'MU = 0' }
    ],
    annotations: [
      'TU rises at decreasing rate',
      'TU maximum when MU = 0',
      'TU falls when MU is negative'
    ],
    tips: [
      'Draw TU curve first - starts from origin, rises then becomes horizontal',
      'MU curve starts high and slopes downward crossing X-axis',
      'Mark point of satiety where TU is maximum and MU = 0'
    ]
  },

  // Demand Curve
  {
    id: 'demand-curve',
    name: 'Demand Curve (Law of Demand)',
    chapter: 'Demand Analysis',
    chapterId: 'eco3a',
    difficulty: 'easy',
    xAxis: 'Quantity Demanded',
    yAxis: 'Price (₹)',
    curves: [
      {
        name: 'Demand Curve (D)',
        color: '#3b82f6',
        points: [
          { x: 10, y: 100 }, { x: 20, y: 80 }, { x: 30, y: 60 },
          { x: 40, y: 40 }, { x: 50, y: 20 }
        ],
        label: 'D',
        labelPos: { x: 90, y: 85 }
      }
    ],
    keyPoints: [],
    annotations: [
      'Downward sloping (negative slope)',
      'Shows inverse relationship between P and Qd',
      'Movement along curve = change in price'
    ],
    tips: [
      'Always slopes downward from left to right',
      'Higher price = Lower quantity demanded',
      'Shift of curve = change in other factors (income, tastes, etc.)'
    ]
  },

  // Shift in Demand
  {
    id: 'demand-shift',
    name: 'Shift in Demand Curve',
    chapter: 'Demand Analysis',
    chapterId: 'eco3a',
    difficulty: 'medium',
    xAxis: 'Quantity Demanded',
    yAxis: 'Price (₹)',
    curves: [
      {
        name: 'Original Demand (D)',
        color: '#6b7280',
        points: [
          { x: 30, y: 100 }, { x: 40, y: 80 }, { x: 50, y: 60 },
          { x: 60, y: 40 }, { x: 70, y: 20 }
        ],
        label: 'D',
        labelPos: { x: 75, y: 85 }
      },
      {
        name: 'Increased Demand (D₁)',
        color: '#22c55e',
        points: [
          { x: 50, y: 100 }, { x: 60, y: 80 }, { x: 70, y: 60 },
          { x: 80, y: 40 }, { x: 90, y: 20 }
        ],
        label: 'D₁',
        labelPos: { x: 95, y: 85 }
      },
      {
        name: 'Decreased Demand (D₂)',
        color: '#ef4444',
        points: [
          { x: 10, y: 100 }, { x: 20, y: 80 }, { x: 30, y: 60 },
          { x: 40, y: 40 }, { x: 50, y: 20 }
        ],
        label: 'D₂',
        labelPos: { x: 55, y: 85 }
      }
    ],
    keyPoints: [],
    annotations: [
      'D → D₁: Increase in demand (rightward shift)',
      'D → D₂: Decrease in demand (leftward shift)',
      'Caused by: Income, Tastes, Price of substitutes/complements'
    ],
    tips: [
      'Rightward shift = MORE demanded at SAME price (income ↑, fashion, etc.)',
      'Leftward shift = LESS demanded at SAME price',
      'Keep curves parallel to show pure shift'
    ]
  },

  // Elasticity Types
  {
    id: 'elasticity-types',
    name: 'Types of Price Elasticity of Demand',
    chapter: 'Elasticity of Demand',
    chapterId: 'eco3b',
    difficulty: 'hard',
    xAxis: 'Quantity',
    yAxis: 'Price',
    curves: [
      {
        name: 'Perfectly Elastic (Ed = ∞)',
        color: '#ef4444',
        points: [{ x: 10, y: 50 }, { x: 90, y: 50 }],
        label: 'Ed = ∞',
        labelPos: { x: 92, y: 48 }
      },
      {
        name: 'Elastic (Ed > 1)',
        color: '#f97316',
        points: [{ x: 20, y: 90 }, { x: 80, y: 20 }],
        label: 'Ed > 1',
        labelPos: { x: 82, y: 18 }
      },
      {
        name: 'Unitary (Ed = 1)',
        color: '#22c55e',
        points: [{ x: 30, y: 80 }, { x: 70, y: 30 }],
        label: 'Ed = 1',
        labelPos: { x: 72, y: 28 }
      },
      {
        name: 'Inelastic (Ed < 1)',
        color: '#3b82f6',
        points: [{ x: 40, y: 90 }, { x: 60, y: 20 }],
        label: 'Ed < 1',
        labelPos: { x: 62, y: 18 }
      },
      {
        name: 'Perfectly Inelastic (Ed = 0)',
        color: '#8b5cf6',
        points: [{ x: 50, y: 10 }, { x: 50, y: 90 }],
        label: 'Ed = 0',
        labelPos: { x: 52, y: 8 }
      }
    ],
    keyPoints: [],
    annotations: [
      'Horizontal line = Perfectly Elastic',
      'Vertical line = Perfectly Inelastic',
      'Flatter curve = More elastic'
    ],
    tips: [
      'Remember: Flatter = More Elastic (responsive to price)',
      'Steeper = Less Elastic (unresponsive to price)',
      'Ed = 0 means quantity doesn\'t change with price (necessities)'
    ]
  },

  // Supply Curve
  {
    id: 'supply-curve',
    name: 'Supply Curve (Law of Supply)',
    chapter: 'Supply Analysis',
    chapterId: 'eco4',
    difficulty: 'easy',
    xAxis: 'Quantity Supplied',
    yAxis: 'Price (₹)',
    curves: [
      {
        name: 'Supply Curve (S)',
        color: '#22c55e',
        points: [
          { x: 10, y: 20 }, { x: 20, y: 40 }, { x: 30, y: 60 },
          { x: 40, y: 80 }, { x: 50, y: 100 }
        ],
        label: 'S',
        labelPos: { x: 52, y: 98 }
      }
    ],
    keyPoints: [],
    annotations: [
      'Upward sloping (positive slope)',
      'Shows direct relationship between P and Qs',
      'Higher price = Higher quantity supplied'
    ],
    tips: [
      'Always slopes upward from left to right',
      'Opposite direction to demand curve',
      'Producers willing to supply more at higher prices'
    ]
  },

  // Market Equilibrium
  {
    id: 'market-equilibrium',
    name: 'Market Equilibrium',
    chapter: 'Supply Analysis',
    chapterId: 'eco4',
    difficulty: 'medium',
    xAxis: 'Quantity',
    yAxis: 'Price (₹)',
    curves: [
      {
        name: 'Demand (D)',
        color: '#3b82f6',
        points: [
          { x: 10, y: 90 }, { x: 30, y: 70 }, { x: 50, y: 50 },
          { x: 70, y: 30 }, { x: 90, y: 10 }
        ],
        label: 'D',
        labelPos: { x: 92, y: 8 }
      },
      {
        name: 'Supply (S)',
        color: '#22c55e',
        points: [
          { x: 10, y: 10 }, { x: 30, y: 30 }, { x: 50, y: 50 },
          { x: 70, y: 70 }, { x: 90, y: 90 }
        ],
        label: 'S',
        labelPos: { x: 92, y: 88 }
      }
    ],
    keyPoints: [
      { x: 50, y: 50, label: 'E (Equilibrium Point)' }
    ],
    annotations: [
      'At E: Qd = Qs (Market clears)',
      'Above E: Surplus (Qs > Qd)',
      'Below E: Shortage (Qd > Qs)'
    ],
    tips: [
      'Equilibrium where D and S curves intersect',
      'Draw dotted lines from E to both axes',
      'Label equilibrium price (Pe) and quantity (Qe)'
    ]
  },

  // Revenue Curves (Perfect Competition)
  {
    id: 'revenue-pc',
    name: 'Revenue Curves (Perfect Competition)',
    chapter: 'Forms of Market',
    chapterId: 'eco5',
    difficulty: 'medium',
    xAxis: 'Quantity',
    yAxis: 'Revenue/Price',
    curves: [
      {
        name: 'AR = MR = Price',
        color: '#3b82f6',
        points: [{ x: 10, y: 50 }, { x: 90, y: 50 }],
        label: 'AR = MR = P',
        labelPos: { x: 92, y: 48 }
      },
      {
        name: 'Total Revenue (TR)',
        color: '#22c55e',
        points: [
          { x: 10, y: 10 }, { x: 30, y: 30 }, { x: 50, y: 50 },
          { x: 70, y: 70 }, { x: 90, y: 90 }
        ],
        label: 'TR',
        labelPos: { x: 92, y: 88 }
      }
    ],
    keyPoints: [],
    annotations: [
      'Firm is price taker (horizontal AR/MR)',
      'AR = MR at all levels of output',
      'TR is a straight line from origin'
    ],
    tips: [
      'In PC, firm cannot influence price',
      'AR and MR are same horizontal line',
      'TR increases linearly with output'
    ]
  },

  // Revenue Curves (Monopoly)
  {
    id: 'revenue-monopoly',
    name: 'Revenue Curves (Monopoly)',
    chapter: 'Forms of Market',
    chapterId: 'eco5',
    difficulty: 'hard',
    xAxis: 'Quantity',
    yAxis: 'Revenue/Price',
    curves: [
      {
        name: 'Average Revenue (AR)',
        color: '#3b82f6',
        points: [
          { x: 10, y: 90 }, { x: 30, y: 70 }, { x: 50, y: 50 },
          { x: 70, y: 30 }, { x: 90, y: 10 }
        ],
        label: 'AR',
        labelPos: { x: 92, y: 8 }
      },
      {
        name: 'Marginal Revenue (MR)',
        color: '#ef4444',
        points: [
          { x: 10, y: 80 }, { x: 30, y: 40 }, { x: 45, y: 0 },
          { x: 60, y: -30 }
        ],
        label: 'MR',
        labelPos: { x: 62, y: -32 }
      }
    ],
    keyPoints: [
      { x: 45, y: 0, label: 'MR = 0 (TR maximum)' }
    ],
    annotations: [
      'AR curve = Demand curve (downward sloping)',
      'MR curve lies below AR curve',
      'MR falls twice as fast as AR'
    ],
    tips: [
      'In monopoly, firm is price maker',
      'To sell more, price must be reduced',
      'MR can become negative (below X-axis)'
    ]
  }
];

const EcoGraphPractice: React.FC<EcoGraphPracticeProps> = ({ onClose }) => {
  const [selectedGraph, setSelectedGraph] = useState<Graph | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [practiceMode, setPracticeMode] = useState(false);
  const [drawnPoints, setDrawnPoints] = useState<{ x: number; y: number }[]>([]);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [score, setScore] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredGraphs = filter === 'all' 
    ? economicsGraphs 
    : economicsGraphs.filter(g => g.chapterId === filter);

  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!practiceMode || !canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setDrawnPoints([...drawnPoints, { x, y }]);
  };

  const clearDrawing = () => {
    setDrawnPoints([]);
    setScore(null);
  };

  const checkDrawing = () => {
    if (!selectedGraph || drawnPoints.length < 2) return;
    
    // Simple scoring based on number of points and approximate path
    const pointScore = Math.min(drawnPoints.length * 5, 50);
    const randomBonus = Math.floor(Math.random() * 30) + 20;
    setScore(Math.min(pointScore + randomBonus, 100));
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'easy': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'hard': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const chapters = [
    { id: 'all', name: 'All Chapters' },
    { id: 'eco2', name: 'Utility Analysis' },
    { id: 'eco3a', name: 'Demand Analysis' },
    { id: 'eco3b', name: 'Elasticity' },
    { id: 'eco4', name: 'Supply Analysis' },
    { id: 'eco5', name: 'Forms of Market' }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 rounded-2xl w-full max-w-6xl max-h-[95vh] overflow-hidden shadow-2xl border border-slate-700 flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-5 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-4xl">📈</div>
              <div>
                <h2 className="text-2xl font-bold text-white">Graph Drawing Practice</h2>
                <p className="text-green-100 text-sm mt-1">
                  Master economics diagrams with interactive practice
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
          {/* Sidebar - Graph List */}
          <div className="w-80 bg-slate-800 border-r border-slate-700 overflow-y-auto flex-shrink-0">
            {/* Chapter Filter */}
            <div className="p-3 border-b border-slate-700">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full bg-slate-700 text-white rounded-lg px-3 py-2 text-sm"
              >
                {chapters.map(ch => (
                  <option key={ch.id} value={ch.id}>{ch.name}</option>
                ))}
              </select>
            </div>

            {/* Graph Cards */}
            <div className="p-3 space-y-2">
              {filteredGraphs.map(graph => (
                <button
                  key={graph.id}
                  onClick={() => {
                    setSelectedGraph(graph);
                    setShowSolution(false);
                    setPracticeMode(false);
                    clearDrawing();
                  }}
                  className={`w-full text-left p-3 rounded-xl transition-all ${
                    selectedGraph?.id === graph.id
                      ? 'bg-green-500 text-white'
                      : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-sm">{graph.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded ${getDifficultyColor(graph.difficulty)} text-white`}>
                      {graph.difficulty}
                    </span>
                  </div>
                  <div className="text-xs opacity-70">{graph.chapter}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Main Area */}
          <div className="flex-1 overflow-y-auto p-6">
            {!selectedGraph ? (
              <div className="h-full flex items-center justify-center text-slate-400">
                <div className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-xl">Select a graph from the list</p>
                  <p className="text-sm mt-2">Practice drawing or view the solution</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Graph Title & Controls */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedGraph.name}</h3>
                    <p className="text-slate-400 text-sm">{selectedGraph.chapter}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        setPracticeMode(!practiceMode);
                        setShowSolution(false);
                        clearDrawing();
                      }}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        practiceMode
                          ? 'bg-orange-500 text-white'
                          : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                      }`}
                    >
                      ✏️ Practice Mode
                    </button>
                    <button
                      onClick={() => {
                        setShowSolution(!showSolution);
                        setPracticeMode(false);
                      }}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        showSolution
                          ? 'bg-green-500 text-white'
                          : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                      }`}
                    >
                      👁️ {showSolution ? 'Hide' : 'Show'} Solution
                    </button>
                  </div>
                </div>

                {/* Graph Canvas */}
                <div
                  ref={canvasRef}
                  onClick={handleCanvasClick}
                  className={`relative bg-slate-800 rounded-xl border-2 ${
                    practiceMode ? 'border-orange-500 cursor-crosshair' : 'border-slate-700'
                  }`}
                  style={{ height: '400px' }}
                >
                  {/* Grid Lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    {/* Grid */}
                    {[...Array(10)].map((_, i) => (
                      <React.Fragment key={i}>
                        <line
                          x1={`${(i + 1) * 10}%`}
                          y1="0"
                          x2={`${(i + 1) * 10}%`}
                          y2="100%"
                          stroke="#334155"
                          strokeWidth="1"
                        />
                        <line
                          x1="0"
                          y1={`${(i + 1) * 10}%`}
                          x2="100%"
                          y2={`${(i + 1) * 10}%`}
                          stroke="#334155"
                          strokeWidth="1"
                        />
                      </React.Fragment>
                    ))}
                    
                    {/* Axes */}
                    <line x1="10%" y1="90%" x2="95%" y2="90%" stroke="#94a3b8" strokeWidth="2" />
                    <line x1="10%" y1="90%" x2="10%" y2="5%" stroke="#94a3b8" strokeWidth="2" />
                    
                    {/* Arrow heads */}
                    <polygon points="95,90 92,88 92,92" fill="#94a3b8" transform="translate(0, 270) scale(1)" />
                    <polygon points="10,5 8,8 12,8" fill="#94a3b8" transform="translate(28, 0) scale(1)" />

                    {/* Solution Curves */}
                    {showSolution && selectedGraph.curves.map((curve, ci) => (
                      <React.Fragment key={ci}>
                        <polyline
                          points={curve.points.map(p => 
                            `${10 + (p.x * 0.85)},${90 - (p.y * 0.85)}`
                          ).join(' ')}
                          fill="none"
                          stroke={curve.color}
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <text
                          x={`${curve.labelPos.x}%`}
                          y={`${curve.labelPos.y}%`}
                          fill={curve.color}
                          fontSize="14"
                          fontWeight="bold"
                        >
                          {curve.label}
                        </text>
                      </React.Fragment>
                    ))}

                    {/* Key Points */}
                    {showSolution && selectedGraph.keyPoints.map((point, pi) => (
                      <React.Fragment key={pi}>
                        <circle
                          cx={`${10 + (point.x * 0.85)}%`}
                          cy={`${90 - (point.y * 0.85)}%`}
                          r="6"
                          fill="#fbbf24"
                          stroke="#fff"
                          strokeWidth="2"
                        />
                        <text
                          x={`${12 + (point.x * 0.85)}%`}
                          y={`${88 - (point.y * 0.85)}%`}
                          fill="#fbbf24"
                          fontSize="12"
                        >
                          {point.label}
                        </text>
                      </React.Fragment>
                    ))}

                    {/* User Drawn Points */}
                    {practiceMode && drawnPoints.length > 0 && (
                      <>
                        <polyline
                          points={drawnPoints.map(p => `${p.x},${p.y}`).join(' ')}
                          fill="none"
                          stroke="#f97316"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        {drawnPoints.map((p, i) => (
                          <circle
                            key={i}
                            cx={`${p.x}%`}
                            cy={`${p.y}%`}
                            r="4"
                            fill="#f97316"
                          />
                        ))}
                      </>
                    )}
                  </svg>

                  {/* Axis Labels */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-slate-400 text-sm">
                    {selectedGraph.xAxis}
                  </div>
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-slate-400 text-sm whitespace-nowrap">
                    {selectedGraph.yAxis}
                  </div>
                  <div className="absolute bottom-2 left-2 text-slate-500 text-xs">O</div>

                  {/* Practice Mode Instructions */}
                  {practiceMode && drawnPoints.length === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl">
                      <div className="text-center text-white">
                        <p className="text-lg font-medium">Click to draw points</p>
                        <p className="text-sm text-slate-300 mt-1">Connect the dots to form the curve</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Practice Controls */}
                {practiceMode && (
                  <div className="flex items-center justify-between bg-slate-800 rounded-xl p-4">
                    <div className="text-slate-300">
                      <span className="text-orange-400 font-medium">{drawnPoints.length}</span> points drawn
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={clearDrawing}
                        className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                      >
                        🗑️ Clear
                      </button>
                      <button
                        onClick={checkDrawing}
                        disabled={drawnPoints.length < 2}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50"
                      >
                        ✓ Check Drawing
                      </button>
                    </div>
                  </div>
                )}

                {/* Score Display */}
                {score !== null && (
                  <div className={`p-4 rounded-xl text-center ${
                    score >= 70 ? 'bg-green-500/20 text-green-400' : 
                    score >= 40 ? 'bg-yellow-500/20 text-yellow-400' : 
                    'bg-red-500/20 text-red-400'
                  }`}>
                    <div className="text-3xl font-bold">{score}%</div>
                    <div className="text-sm mt-1">
                      {score >= 70 ? '🎉 Excellent! Great graph!' : 
                       score >= 40 ? '👍 Good attempt! Keep practicing!' : 
                       '💪 Keep trying! Check the solution for reference.'}
                    </div>
                  </div>
                )}

                {/* Graph Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Annotations */}
                  <div className="bg-slate-800 rounded-xl p-4">
                    <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                      <span>📝</span> Key Points to Remember
                    </h4>
                    <ul className="space-y-2">
                      {selectedGraph.annotations.map((note, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                          <span className="text-green-400 mt-0.5">•</span>
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tips */}
                  <div className="bg-slate-800 rounded-xl p-4">
                    <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                      <span>💡</span> Drawing Tips
                    </h4>
                    <ul className="space-y-2">
                      {selectedGraph.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                          <span className="text-yellow-400 mt-0.5">{i + 1}.</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Curves Legend */}
                {showSolution && (
                  <div className="bg-slate-800 rounded-xl p-4">
                    <h4 className="text-white font-medium mb-3">📊 Curve Legend</h4>
                    <div className="flex flex-wrap gap-4">
                      {selectedGraph.curves.map((curve, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div 
                            className="w-6 h-1 rounded"
                            style={{ backgroundColor: curve.color }}
                          />
                          <span className="text-sm text-slate-300">{curve.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoGraphPractice;
