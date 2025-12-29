import React, { useState } from 'react';

interface EcoStudyHubProps {
  onClose: () => void;
  onOpenTool: (tool: string) => void;
}

interface Tool {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  phase: number;
  ready: boolean;
}

const tools: Tool[] = [
  // Phase 1 - Highest Impact
  {
    id: 'formula-bank',
    name: 'Formula & Definition Bank',
    icon: '📐',
    description: 'All formulas, definitions & concepts from 10 chapters',
    color: 'from-blue-500 to-blue-600',
    phase: 1,
    ready: true
  },
  {
    id: 'graph-practice',
    name: 'Graph Drawing Practice',
    icon: '📈',
    description: 'Interactive graph sketching with step-by-step guidance',
    color: 'from-green-500 to-green-600',
    phase: 1,
    ready: true
  },
  {
    id: 'numerical-solver',
    name: 'Numerical Problem Solver',
    icon: '🔢',
    description: 'Step-by-step calculation practice with explanations',
    color: 'from-purple-500 to-purple-600',
    phase: 1,
    ready: true
  },
  {
    id: 'elasticity-calc',
    name: 'Elasticity Calculator',
    icon: '📊',
    description: 'Calculate & interpret Ed, Es with real examples',
    color: 'from-orange-500 to-orange-600',
    phase: 1,
    ready: true
  },
  // Phase 2 - Core Tools
  {
    id: 'market-compare',
    name: 'Market Structure Comparison',
    icon: '🏪',
    description: 'Compare Perfect Competition, Monopoly, Oligopoly',
    color: 'from-teal-500 to-teal-600',
    phase: 2,
    ready: false
  },
  {
    id: 'index-calc',
    name: 'Index Number Calculator',
    icon: '📉',
    description: "Laspeyre's, Paasche's & Fisher's index calculations",
    color: 'from-indigo-500 to-indigo-600',
    phase: 2,
    ready: false
  },
  {
    id: 'national-income',
    name: 'National Income Calculator',
    icon: '💰',
    description: 'GDP, GNP, NNP, NI calculations step-by-step',
    color: 'from-yellow-500 to-yellow-600',
    phase: 2,
    ready: false
  },
  {
    id: 'budget-simulator',
    name: 'Budget Analysis Simulator',
    icon: '🏛️',
    description: 'Understand Union Budget components interactively',
    color: 'from-red-500 to-red-600',
    phase: 2,
    ready: false
  },
  // Phase 3 - Advanced
  {
    id: 'eco-dictionary',
    name: 'Economics Dictionary',
    icon: '📖',
    description: '200+ economic terms with examples',
    color: 'from-pink-500 to-pink-600',
    phase: 3,
    ready: false
  },
  {
    id: 'eco-thinkers',
    name: 'Economic Thinkers Gallery',
    icon: '🎓',
    description: 'Adam Smith, Keynes, Marshall & their theories',
    color: 'from-cyan-500 to-cyan-600',
    phase: 3,
    ready: false
  }
];

const EcoStudyHub: React.FC<EcoStudyHubProps> = ({ onClose, onOpenTool }) => {
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const filteredTools = selectedPhase 
    ? tools.filter(t => t.phase === selectedPhase)
    : tools;

  const phases = [
    { num: 1, name: 'Core Tools', icon: '⭐', color: 'bg-red-500' },
    { num: 2, name: 'Advanced', icon: '🚀', color: 'bg-orange-500' },
    { num: 3, name: 'Specialized', icon: '🎯', color: 'bg-yellow-500' }
  ];

  const readyCount = tools.filter(t => t.ready).length;
  const totalCount = tools.length;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl border border-slate-700">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-5xl">💹</div>
              <div>
                <h2 className="text-2xl font-bold text-white">Economics Study Hub</h2>
                <p className="text-emerald-100 mt-1">
                  Maharashtra HSC Board - Class 12 Economics Tools
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
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm text-emerald-100 mb-2">
              <span>Tools Available</span>
              <span>{readyCount}/{totalCount} Ready</span>
            </div>
            <div className="h-2 bg-emerald-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-500"
                style={{ width: `${(readyCount / totalCount) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Phase Filter */}
        <div className="p-4 bg-slate-800 border-b border-slate-700">
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => setSelectedPhase(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedPhase === null
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              All Tools ({tools.length})
            </button>
            {phases.map(phase => {
              const count = tools.filter(t => t.phase === phase.num).length;
              return (
                <button
                  key={phase.num}
                  onClick={() => setSelectedPhase(phase.num)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                    selectedPhase === phase.num
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  <span>{phase.icon}</span>
                  <span>{phase.name}</span>
                  <span className="text-xs opacity-70">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-280px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTools.map(tool => (
              <div
                key={tool.id}
                onMouseEnter={() => setHoveredTool(tool.id)}
                onMouseLeave={() => setHoveredTool(null)}
                onClick={() => tool.ready && onOpenTool(tool.id)}
                className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                  tool.ready 
                    ? 'cursor-pointer hover:scale-[1.02] hover:shadow-xl' 
                    : 'opacity-60 cursor-not-allowed'
                } ${hoveredTool === tool.id && tool.ready ? 'ring-2 ring-emerald-400' : ''}`}
              >
                <div className={`bg-gradient-to-br ${tool.color} p-5`}>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{tool.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-white">{tool.name}</h3>
                        {tool.ready ? (
                          <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs text-white">
                            Ready
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 bg-black/20 rounded-full text-xs text-white/70">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <p className="text-white/80 text-sm mt-1">{tool.description}</p>
                      
                      {/* Phase Badge */}
                      <div className="mt-3 flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${phases[tool.phase - 1].color}`} />
                        <span className="text-xs text-white/60">
                          Phase {tool.phase}: {phases[tool.phase - 1].name}
                        </span>
                      </div>
                    </div>
                    
                    {tool.ready && (
                      <div className="text-white/80 text-2xl">→</div>
                    )}
                  </div>
                </div>
                
                {/* Hover Effect */}
                {hoveredTool === tool.id && tool.ready && (
                  <div className="absolute inset-0 bg-white/10 pointer-events-none" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-800 border-t border-slate-700">
          <div className="flex items-center justify-between text-sm">
            <div className="text-slate-400">
              📚 Based on Maharashtra State Board HSC Economics Syllabus
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>{readyCount} Tools Ready</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <span className="w-2 h-2 rounded-full bg-slate-500" />
                <span>{totalCount - readyCount} Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoStudyHub;
