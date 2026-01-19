import React, { useState } from 'react';
import { X, ChevronRight, Shuffle, RotateCcw, ArrowRight } from 'lucide-react';

interface ChainDiagramProps {
  onClose: () => void;
}

interface Chain {
  id: string;
  subject: string;
  topic: string;
  cause: string;
  event: string;
  result: string;
  details?: string;
}

const CHAINS: Chain[] = [
  {
    id: 'ch1',
    subject: 'History',
    topic: 'French Revolution',
    cause: 'Financial Crisis + Social Inequality + Enlightenment Ideas',
    event: 'Storming of Bastille (July 14, 1789)',
    result: 'End of Absolute Monarchy + Declaration of Rights + Rise of Napoleon',
    details: 'The French Revolution (1789-1799) transformed France from an absolute monarchy to a republic, spreading revolutionary ideals across Europe.'
  },
  {
    id: 'ch2',
    subject: 'History',
    topic: 'Industrial Revolution',
    cause: 'Agricultural Revolution + Availability of Capital + Colonial Resources + Technological Innovations',
    event: 'Factory System Development (1760-1840)',
    result: 'Urbanization + Working Class Formation + Economic Growth + Social Problems',
    details: 'The Industrial Revolution began in Britain and spread globally, fundamentally changing production methods and society.'
  },
  {
    id: 'ch3',
    subject: 'Economics',
    topic: 'Great Depression',
    cause: 'Stock Market Crash (1929) + Bank Failures + Overproduction + Reduced Consumer Spending',
    event: 'Global Economic Collapse (1929-1939)',
    result: 'Mass Unemployment + New Deal Policies + Keynesian Economics + Regulatory Reforms',
    details: 'The Great Depression was the worst economic downturn in modern history, leading to fundamental changes in economic policy.'
  },
  {
    id: 'ch4',
    subject: 'Economics',
    topic: 'Globalization',
    cause: 'Technological Advances + Liberalization Policies + Fall of USSR + WTO Formation',
    event: 'Increased International Trade & Investment (1990s onwards)',
    result: 'Economic Integration + MNC Growth + Cultural Exchange + Income Inequality Debates',
    details: 'Globalization has created an interconnected world economy with both opportunities and challenges.'
  },
  {
    id: 'ch5',
    subject: 'Political Science',
    topic: 'Indian Independence',
    cause: 'Colonial Exploitation + Nationalist Movements + World Wars + Non-Cooperation Movements',
    event: 'Quit India Movement (1942) + British Withdrawal Negotiations',
    result: 'Indian Independence (August 15, 1947) + Partition + Constitution Making',
    details: 'India gained independence after nearly 200 years of British rule through sustained freedom struggle.'
  },
  {
    id: 'ch6',
    subject: 'Political Science',
    topic: 'Emergency in India',
    cause: 'Political Instability + Allahabad HC Judgment + Internal Opposition',
    event: 'Declaration of Emergency (June 25, 1975)',
    result: 'Suspension of Civil Rights + Mass Arrests + 1977 Elections + Democratic Restoration',
    details: 'The 21-month Emergency (1975-77) was a controversial period that tested Indian democracy.'
  },
  {
    id: 'ch7',
    subject: 'Geography',
    topic: 'Tsunami Formation',
    cause: 'Underwater Earthquake + Tectonic Plate Movement + Ocean Floor Displacement',
    event: 'Massive Wave Generation + Rapid Water Movement',
    result: 'Coastal Flooding + Destruction + Loss of Life + Early Warning Systems',
    details: 'Tsunamis are powerful ocean waves caused by underwater seismic activity, with devastating coastal impacts.'
  },
  {
    id: 'ch8',
    subject: 'Geography',
    topic: 'Monsoon in India',
    cause: 'Differential Heating of Land & Sea + ITCZ Shift + High Pressure over Ocean',
    event: 'Southwest Monsoon Winds (June-September)',
    result: 'Heavy Rainfall + Agricultural Prosperity + Flood Risk + Water Resource Replenishment',
    details: 'The Indian monsoon is crucial for agriculture, economy, and water resources across the subcontinent.'
  },
  {
    id: 'ch9',
    subject: 'Sociology',
    topic: 'Urbanization',
    cause: 'Industrialization + Rural-Urban Migration + Better Opportunities + Push-Pull Factors',
    event: 'Rapid City Growth + Urban Sprawl',
    result: 'Slum Formation + Infrastructure Stress + Cultural Change + Economic Hubs',
    details: 'Urbanization is transforming societies worldwide, creating both opportunities and challenges.'
  },
  {
    id: 'ch10',
    subject: 'Sociology',
    topic: 'Social Media Impact',
    cause: 'Internet Penetration + Smartphone Revolution + Need for Connection + Digital Platforms',
    event: 'Mass Adoption of Social Media (2000s onwards)',
    result: 'Changed Communication Patterns + Information Spread + Privacy Concerns + Social Movements',
    details: 'Social media has fundamentally altered how people interact, share information, and organize collectively.'
  },
  {
    id: 'ch11',
    subject: 'English',
    topic: 'Renaissance Literature',
    cause: 'Printing Press Invention + Classical Revival + Patronage + Humanism',
    event: 'Flourishing of Literature (14th-17th century)',
    result: 'Shakespeare\'s Works + Literary Innovation + Vernacular Literature + Modern Drama',
    details: 'The Renaissance transformed literature, moving from medieval to modern forms and themes.'
  },
  {
    id: 'ch12',
    subject: 'Psychology',
    topic: 'Stress Response',
    cause: 'Perceived Threat + Cognitive Appraisal + Environmental Demands',
    event: 'Fight-or-Flight Response Activation + Cortisol Release',
    result: 'Increased Heart Rate + Alertness + Immune Suppression + Potential Health Issues',
    details: 'The stress response is an evolutionary adaptation that can become harmful when chronically activated.'
  }
];

const ChainDiagram: React.FC<ChainDiagramProps> = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewedChains, setViewedChains] = useState<Set<string>>(new Set());

  const currentChain = CHAINS[currentIndex];

  const nextChain = () => {
    if (currentIndex < CHAINS.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setViewedChains(new Set(viewedChains).add(currentChain.id));
    }
  };

  const prevChain = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const shuffle = () => {
    const randomIndex = Math.floor(Math.random() * CHAINS.length);
    setCurrentIndex(randomIndex);
  };

  const reset = () => {
    setCurrentIndex(0);
    setViewedChains(new Set());
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-slate-900 to-teal-900 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-teal-500/30">
        <div className="sticky top-0 bg-gradient-to-r from-teal-600 to-cyan-600 p-6 flex justify-between items-center rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
              <ChevronRight className="w-7 h-7" />
              Chain Diagrams
            </h2>
            <p className="text-teal-100 text-sm">Cause → Event → Result flowcharts</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition-all"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* Progress */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-3">
              <div className="bg-white/10 px-4 py-2 rounded-lg">
                <p className="text-sm text-slate-300">Chain</p>
                <p className="text-xl font-bold text-white">{currentIndex + 1}/{CHAINS.length}</p>
              </div>
              <div className="bg-teal-500/20 px-4 py-2 rounded-lg border border-teal-500/30">
                <p className="text-sm text-teal-200">Viewed</p>
                <p className="text-xl font-bold text-teal-300">{viewedChains.size}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={shuffle}
                className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all flex items-center gap-2"
              >
                <Shuffle className="w-4 h-4" />
                Random
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

          {/* Subject & Topic */}
          <div className="mb-6 flex gap-2">
            <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm font-medium">
              {currentChain.subject}
            </span>
            <span className="px-3 py-1 bg-slate-600/50 text-slate-300 rounded-full text-sm font-medium">
              {currentChain.topic}
            </span>
          </div>

          {/* Chain Flow */}
          <div className="mb-6 space-y-4">
            {/* Cause */}
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
                    CAUSE
                  </div>
                </div>
                <p className="text-white text-lg leading-relaxed">{currentChain.cause}</p>
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-800 rounded-full p-2">
                <ArrowRight className="w-6 h-6 text-yellow-400 transform rotate-90" />
              </div>
            </div>

            {/* Event */}
            <div className="relative mt-8">
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border-2 border-blue-500 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
                    EVENT
                  </div>
                </div>
                <p className="text-white text-xl font-semibold leading-relaxed">{currentChain.event}</p>
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-800 rounded-full p-2">
                <ArrowRight className="w-6 h-6 text-blue-400 transform rotate-90" />
              </div>
            </div>

            {/* Result */}
            <div className="mt-8">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
                    RESULT
                  </div>
                </div>
                <p className="text-white text-lg leading-relaxed">{currentChain.result}</p>
              </div>
            </div>
          </div>

          {/* Details */}
          {currentChain.details && (
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50 rounded-xl p-6 mb-6">
              <h4 className="text-purple-300 font-bold mb-2 flex items-center gap-2">
                📝 Additional Context
              </h4>
              <p className="text-white leading-relaxed">{currentChain.details}</p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-4">
            <button
              onClick={prevChain}
              disabled={currentIndex === 0}
              className="flex-1 bg-slate-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-slate-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Previous
            </button>
            <button
              onClick={nextChain}
              disabled={currentIndex === CHAINS.length - 1}
              className="flex-1 bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-4 rounded-lg font-bold text-lg hover:from-teal-600 hover:to-cyan-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 bg-white/5 rounded-lg p-4">
            <div className="flex gap-1">
              {CHAINS.map((chain, idx) => (
                <div
                  key={chain.id}
                  className={`flex-1 h-2 rounded-full transition-all ${
                    viewedChains.has(chain.id)
                      ? 'bg-teal-500'
                      : idx === currentIndex
                      ? 'bg-yellow-500'
                      : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChainDiagram;