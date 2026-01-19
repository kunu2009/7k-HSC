import React, { useState } from 'react';
import { X, Shuffle, ChevronDown, ChevronUp, CheckCircle2, RotateCcw, Layers } from 'lucide-react';

interface LayeredRevisionCardsProps {
  onClose: () => void;
}

interface RevisionCard {
  id: string;
  subject: string;
  topic: string;
  layer1: string; // Headline
  layer2: string[]; // Key points
  layer3: string; // Full explanation
}

const REVISION_CARDS: RevisionCard[] = [
  // Economics
  {
    id: 'eco1',
    subject: 'Economics',
    topic: 'Law of Demand',
    layer1: 'Inverse relationship between price and quantity demanded',
    layer2: [
      'When price ↑, demand ↓',
      'When price ↓, demand ↑',
      'Ceteris paribus (other things constant)',
      'Downward sloping demand curve'
    ],
    layer3: 'The Law of Demand states that there is an inverse relationship between the price of a commodity and its quantity demanded, assuming all other factors remain constant (ceteris paribus). This happens because: (1) Substitution Effect - consumers switch to cheaper alternatives when price rises, (2) Income Effect - real income decreases when prices rise, reducing purchasing power, (3) Law of Diminishing Marginal Utility - as consumption increases, additional satisfaction decreases. The demand curve slopes downward from left to right, showing this inverse relationship graphically.'
  },
  {
    id: 'eco2',
    subject: 'Economics',
    topic: 'Elasticity of Demand',
    layer1: 'Responsiveness of demand to price changes',
    layer2: [
      'Ed = % ΔQ / % ΔP',
      'Elastic when Ed > 1',
      'Inelastic when Ed < 1',
      'Unitary when Ed = 1'
    ],
    layer3: 'Elasticity of Demand measures how responsive the quantity demanded is to a change in price. Formula: Ed = (% Change in Quantity Demanded) / (% Change in Price). Types: (1) Elastic (Ed > 1): Large change in demand for small price change (e.g., luxury goods), (2) Inelastic (Ed < 1): Small change in demand despite price change (e.g., necessities), (3) Unitary Elastic (Ed = 1): Proportionate change, (4) Perfectly Elastic (Ed = ∞): Horizontal demand curve, (5) Perfectly Inelastic (Ed = 0): Vertical demand curve. Factors affecting: Nature of commodity, availability of substitutes, proportion of income spent, time period, number of uses.'
  },
  // History
  {
    id: 'his1',
    subject: 'History',
    topic: 'Renaissance',
    layer1: 'Cultural rebirth in Europe (14th-17th century)',
    layer2: [
      'Began in Italy',
      'Revival of art, literature, learning',
      'Humanism - focus on human potential',
      'Key figures: Da Vinci, Michelangelo, Petrarch'
    ],
    layer3: 'Renaissance means "rebirth" and refers to the period of European cultural, artistic, and intellectual revival from 14th to 17th centuries. It began in Italy due to: (1) Wealth from trade, (2) Greek scholars fleeing Ottoman Empire, (3) Patronage of art by wealthy families like Medici. Key features: Humanism (focus on human potential vs religious doctrine), revival of Greco-Roman culture, scientific inquiry, artistic innovation. Major contributors: Leonardo da Vinci (Mona Lisa, Last Supper), Michelangelo (Sistine Chapel, David), Raphael (School of Athens), Petrarch (Father of Renaissance), Dante (Divine Comedy). Impact: Led to Reformation, Age of Exploration, Scientific Revolution, and modern thought.'
  },
  {
    id: 'his2',
    subject: 'History',
    topic: 'Protestant Reformation',
    layer1: 'Religious movement against Catholic Church (1517)',
    layer2: [
      'Started by Martin Luther',
      '95 Theses against indulgences',
      'Challenged papal authority',
      'Led to Protestant churches'
    ],
    layer3: 'The Protestant Reformation was a 16th-century religious movement that challenged the Catholic Church\'s authority and practices. Started by Martin Luther in 1517 when he nailed 95 Theses to Wittenberg church door, protesting: (1) Sale of indulgences (paying for forgiveness), (2) Corruption of clergy, (3) Papal authority, (4) Latin Bible (wanted vernacular). Key principles: Sola Scriptura (Bible alone), Sola Fide (faith alone), Priesthood of all believers. Other reformers: John Calvin (predestination), Huldrych Zwingli (Swiss reform), King Henry VIII (Church of England). Results: Catholic Counter-Reformation, religious wars, emergence of Protestant denominations (Lutheran, Calvinist, Anglican), religious freedom concepts, weakening of papal power.'
  },
  // Political Science
  {
    id: 'pol1',
    subject: 'Political Science',
    topic: 'Federalism',
    layer1: 'Power division between central and state governments',
    layer2: [
      'Two levels of government',
      'Written constitution',
      'Independent judiciary',
      'Division of powers listed'
    ],
    layer3: 'Federalism is a system of government where power is constitutionally divided between a central authority and constituent units (states/provinces). Key features: (1) Two levels of government with separate powers, (2) Written constitution defining power division, (3) Supremacy of constitution, (4) Independent judiciary to resolve disputes, (5) Dual citizenship, (6) Bicameral legislature (Rajya Sabha represents states). Types: (1) Coming together federalism (USA - states join voluntarily), (2) Holding together federalism (India - central divides power). Indian federalism: Union List (defense, foreign affairs), State List (police, health), Concurrent List (education, forests). Special: More unitary in emergencies, residuary powers with center, single citizenship.'
  },
  {
    id: 'pol2',
    subject: 'Political Science',
    topic: 'Globalization',
    layer1: 'Integration of economies across borders',
    layer2: [
      'Free flow of goods, services, capital',
      'Technological advancement',
      'MNCs and outsourcing',
      'Cultural homogenization'
    ],
    layer3: 'Globalization is the process of increasing interconnectedness and integration of economies, societies, and cultures worldwide. Dimensions: (1) Economic - free trade, FDI, MNCs, (2) Political - international organizations (UN, WTO), (3) Cultural - spread of ideas, values, (4) Technological - internet, communication. Causes: Liberalization policies (1991 in India), technological advances (internet, transport), end of Cold War, WTO formation. Effects - Positive: Economic growth, job creation, access to global markets, technology transfer, cultural exchange. Negative: Income inequality, job losses in some sectors, cultural erosion, environmental damage, dependency on global economy. India: LPG reforms (Liberalization, Privatization, Globalization) since 1991.'
  },
  // English
  {
    id: 'eng1',
    subject: 'English',
    topic: 'Figures of Speech',
    layer1: 'Literary devices for expressive language',
    layer2: [
      'Simile - comparison with like/as',
      'Metaphor - direct comparison',
      'Alliteration - consonant repetition',
      'Hyperbole - exaggeration'
    ],
    layer3: 'Figures of speech are literary devices used to create vivid imagery and emotional impact. Main types: (1) Simile - comparison using "like" or "as" (e.g., "brave as a lion"), (2) Metaphor - direct comparison without like/as (e.g., "Time is money"), (3) Personification - human qualities to non-human (e.g., "Wind whispered"), (4) Alliteration - repetition of initial consonant sounds (e.g., "Peter Piper picked"), (5) Hyperbole - deliberate exaggeration (e.g., "I\'ve told you million times"), (6) Oxymoron - contradictory terms (e.g., "bitter sweet"), (7) Onomatopoeia - words imitating sounds (e.g., "buzz", "crash"), (8) Irony - opposite of literal meaning, (9) Pun - play on words. Purpose: Enhance expression, create imagery, engage readers, convey emotions, make writing memorable.'
  },
  // Sociology
  {
    id: 'soc1',
    subject: 'Sociology',
    topic: 'Socialization',
    layer1: 'Process of learning society\'s norms and values',
    layer2: [
      'Primary - family (childhood)',
      'Secondary - school, peers, media',
      'Agents: family, school, peers, media',
      'Lifelong process'
    ],
    layer3: 'Socialization is the lifelong process through which individuals learn and internalize the norms, values, beliefs, and behaviors appropriate to their society. Types: (1) Primary Socialization - occurs in early childhood through family, learning basic norms and language, most influential period, (2) Secondary Socialization - occurs later through schools, peer groups, workplace, learning specific roles and behaviors. Agents of Socialization: Family (primary agent, emotional bonds), School (formal education, discipline), Peer Groups (equality, independence), Mass Media (TV, internet, values), Religion (moral codes), Workplace (professional behavior). Importance: Cultural transmission, social integration, individual identity formation, social control, preparation for roles. Theories: Freud (Id, Ego, Superego), Mead (I and Me), Cooley (Looking-glass self - we see ourselves as others see us).'
  }
];

const LayeredRevisionCards: React.FC<LayeredRevisionCardsProps> = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLayer, setCurrentLayer] = useState<1 | 2 | 3>(1);
  const [reviewedCards, setReviewedCards] = useState<Set<string>>(new Set());

  const currentCard = REVISION_CARDS[currentIndex];

  const nextCard = () => {
    if (currentIndex < REVISION_CARDS.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentLayer(1);
      setReviewedCards(new Set(reviewedCards).add(currentCard.id));
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCurrentLayer(1);
    }
  };

  const shuffle = () => {
    const randomIndex = Math.floor(Math.random() * REVISION_CARDS.length);
    setCurrentIndex(randomIndex);
    setCurrentLayer(1);
  };

  const reset = () => {
    setCurrentIndex(0);
    setCurrentLayer(1);
    setReviewedCards(new Set());
  };

  const expandLayer = () => {
    if (currentLayer < 3) {
      setCurrentLayer((currentLayer + 1) as 1 | 2 | 3);
    }
  };

  const collapseLayer = () => {
    if (currentLayer > 1) {
      setCurrentLayer((currentLayer - 1) as 1 | 2 | 3);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30">
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-pink-600 p-6 flex justify-between items-center rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
              <Layers className="w-7 h-7" />
              Layered Revision Cards
            </h2>
            <p className="text-purple-100 text-sm">3-level depth learning system</p>
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
                <p className="text-sm text-slate-300">Card</p>
                <p className="text-xl font-bold text-white">{currentIndex + 1}/{REVISION_CARDS.length}</p>
              </div>
              <div className="bg-purple-500/20 px-4 py-2 rounded-lg border border-purple-500/30">
                <p className="text-sm text-purple-200">Reviewed</p>
                <p className="text-xl font-bold text-purple-300">{reviewedCards.size}</p>
              </div>
              <div className="bg-pink-500/20 px-4 py-2 rounded-lg border border-pink-500/30">
                <p className="text-sm text-pink-200">Layer</p>
                <p className="text-xl font-bold text-pink-300">{currentLayer}/3</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={shuffle}
                className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all flex items-center gap-2"
              >
                <Shuffle className="w-4 h-4" />
                Shuffle
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

          {/* Subject Tag */}
          <div className="mb-4">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
              {currentCard.subject}
            </span>
          </div>

          {/* Topic */}
          <h3 className="text-3xl font-bold text-white mb-6">{currentCard.topic}</h3>

          {/* Layered Content */}
          <div className="space-y-4 mb-6">
            {/* Layer 1 - Headline */}
            <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-2 border-yellow-500/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <span className="text-yellow-300 font-semibold text-sm">HEADLINE</span>
              </div>
              <p className="text-white text-xl font-medium">{currentCard.layer1}</p>
            </div>

            {/* Layer 2 - Key Points */}
            {currentLayer >= 2 && (
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500/50 rounded-xl p-6 animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <span className="text-green-300 font-semibold text-sm">KEY POINTS</span>
                </div>
                <ul className="space-y-3">
                  {currentCard.layer2.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Layer 3 - Full Explanation */}
            {currentLayer >= 3 && (
              <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border-2 border-blue-500/50 rounded-xl p-6 animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <span className="text-blue-300 font-semibold text-sm">FULL EXPLANATION</span>
                </div>
                <p className="text-white text-base leading-relaxed">{currentCard.layer3}</p>
              </div>
            )}
          </div>

          {/* Layer Controls */}
          <div className="flex gap-4 mb-6">
            {currentLayer < 3 && (
              <button
                onClick={expandLayer}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-lg font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all flex items-center justify-center gap-2"
              >
                Expand Layer {currentLayer + 1}
                <ChevronDown className="w-5 h-5" />
              </button>
            )}
            {currentLayer > 1 && (
              <button
                onClick={collapseLayer}
                className="flex-1 bg-slate-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <ChevronUp className="w-5 h-5" />
                Collapse
              </button>
            )}
          </div>

          {/* Navigation */}
          <div className="flex gap-4">
            <button
              onClick={prevCard}
              disabled={currentIndex === 0}
              className="flex-1 bg-slate-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-slate-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Previous
            </button>
            <button
              onClick={nextCard}
              disabled={currentIndex === REVISION_CARDS.length - 1}
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white py-4 rounded-lg font-bold text-lg hover:from-purple-600 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 bg-white/5 rounded-lg p-4">
            <div className="flex gap-1">
              {REVISION_CARDS.map((card, idx) => (
                <div
                  key={card.id}
                  className={`flex-1 h-2 rounded-full transition-all ${
                    reviewedCards.has(card.id)
                      ? 'bg-green-500'
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

export default LayeredRevisionCards;