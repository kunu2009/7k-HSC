import React, { useState, useEffect } from 'react';
import { X, Shuffle, CheckCircle2, XCircle, RotateCcw, Flame } from 'lucide-react';

interface Random5GameProps {
  onClose: () => void;
}

interface FlashCard {
  id: string;
  subject: string;
  chapter: string;
  front: string;
  back: string;
}

const FLASH_CARDS: FlashCard[] = [
  // Economics
  { id: 'eco1', subject: 'Economics', chapter: 'Introduction to Economics', front: 'What is Economics?', back: 'Economics is the social science that studies how individuals, businesses, governments, and societies make choices to allocate scarce resources to satisfy unlimited wants.' },
  { id: 'eco2', subject: 'Economics', chapter: 'Introduction to Economics', front: 'Define Scarcity', back: 'Scarcity is the fundamental economic problem of having limited resources to meet unlimited human wants and needs.' },
  { id: 'eco3', subject: 'Economics', chapter: 'Utility Analysis', front: 'What is Marginal Utility?', back: 'Marginal Utility is the additional satisfaction or benefit gained from consuming one more unit of a good or service.' },
  { id: 'eco4', subject: 'Economics', chapter: 'Demand Analysis', front: 'State the Law of Demand', back: 'The Law of Demand states that, ceteris paribus, when the price of a commodity increases, its quantity demanded decreases, and vice versa.' },
  { id: 'eco5', subject: 'Economics', chapter: 'Elasticity of Demand', front: 'Formula for Price Elasticity of Demand', back: 'Ed = (% Change in Quantity Demanded) / (% Change in Price)' },
  { id: 'eco6', subject: 'Economics', chapter: 'Supply Analysis', front: 'What is the Law of Supply?', back: 'The Law of Supply states that, ceteris paribus, when the price of a commodity increases, its quantity supplied also increases, and vice versa.' },
  { id: 'eco7', subject: 'Economics', chapter: 'Forms of Market', front: 'Features of Perfect Competition', back: 'Large number of buyers and sellers, homogeneous product, perfect knowledge, free entry and exit, no transport costs, perfect mobility of factors.' },
  { id: 'eco8', subject: 'Economics', chapter: 'Forms of Market', front: 'What is Monopoly?', back: 'Monopoly is a market structure where there is only one seller of a product with no close substitutes, and high barriers to entry prevent competition.' },

  // History
  { id: 'his1', subject: 'History', chapter: 'Renaissance', front: 'When did Renaissance begin?', back: 'Renaissance began in the 14th century in Italy and spread across Europe until the 17th century.' },
  { id: 'his2', subject: 'History', chapter: 'Renaissance', front: 'Who was Leonardo da Vinci?', back: 'Leonardo da Vinci was an Italian Renaissance polymath known for paintings like Mona Lisa and The Last Supper, and contributions to science and engineering.' },
  { id: 'his3', subject: 'History', chapter: 'Reformation', front: 'Who started the Protestant Reformation?', back: 'Martin Luther started the Protestant Reformation in 1517 by nailing his 95 Theses to the church door in Wittenberg.' },
  { id: 'his4', subject: 'History', chapter: 'French Revolution', front: 'When did the French Revolution begin?', back: 'The French Revolution began in 1789 with the storming of the Bastille on July 14th.' },
  { id: 'his5', subject: 'History', chapter: 'French Revolution', front: 'What was the slogan of French Revolution?', back: 'Liberty, Equality, Fraternity (Liberté, Égalité, Fraternité)' },
  { id: 'his6', subject: 'History', chapter: 'Industrial Revolution', front: 'Where did Industrial Revolution start?', back: 'The Industrial Revolution started in Britain in the late 18th century, around 1760-1780.' },

  // Political Science
  { id: 'pol1', subject: 'Political Science', chapter: 'Working of Institutions', front: 'What is the Rajya Sabha?', back: 'Rajya Sabha (Council of States) is the upper house of Indian Parliament representing states and union territories, with maximum 250 members.' },
  { id: 'pol2', subject: 'Political Science', chapter: 'Working of Institutions', front: 'Who appoints the Prime Minister?', back: 'The President of India appoints the Prime Minister, who is the leader of the majority party in Lok Sabha.' },
  { id: 'pol3', subject: 'Political Science', chapter: 'Democracy and Diversity', front: 'What is Federalism?', back: 'Federalism is a system of government where power is divided between a central authority and constituent units (states/provinces) by the constitution.' },
  { id: 'pol4', subject: 'Political Science', chapter: 'Political Parties', front: 'What is a National Political Party?', back: 'A national political party is one that secures at least 6% of valid votes in Lok Sabha or Assembly elections in 4 states and wins at least 4 seats in Lok Sabha.' },
  { id: 'pol5', subject: 'Political Science', chapter: 'Globalization', front: 'Define Globalization', back: 'Globalization is the process of increasing interconnectedness and integration of economies, societies, and cultures across the world.' },

  // English Literature
  { id: 'eng1', subject: 'English', chapter: 'Figures of Speech', front: 'What is a Simile?', back: 'A simile is a figure of speech that makes a comparison between two things using "like" or "as" (e.g., brave as a lion).' },
  { id: 'eng2', subject: 'English', chapter: 'Figures of Speech', front: 'What is a Metaphor?', back: 'A metaphor is a figure of speech that makes a direct comparison between two unlike things without using "like" or "as" (e.g., Time is money).' },
  { id: 'eng3', subject: 'English', chapter: 'Figures of Speech', front: 'What is Personification?', back: 'Personification is a figure of speech where human qualities are given to non-human things (e.g., The wind whispered through the trees).' },
  { id: 'eng4', subject: 'English', chapter: 'Figures of Speech', front: 'What is Alliteration?', back: 'Alliteration is the repetition of initial consonant sounds in neighboring words (e.g., Peter Piper picked a peck of pickled peppers).' },
  { id: 'eng5', subject: 'English', chapter: 'Writing Skills', front: 'What is a Paragraph?', back: 'A paragraph is a group of related sentences that develop a single main idea, typically containing a topic sentence, supporting details, and a concluding sentence.' },

  // Hindi
  { id: 'hin1', subject: 'Hindi', chapter: 'व्याकरण', front: 'संज्ञा किसे कहते हैं?', back: 'किसी व्यक्ति, स्थान, वस्तु, या भाव के नाम को संज्ञा कहते हैं। जैसे: राम, दिल्ली, किताब, प्रेम।' },
  { id: 'hin2', subject: 'Hindi', chapter: 'व्याकरण', front: 'सर्वनाम की परिभाषा', back: 'संज्ञा के स्थान पर प्रयोग होने वाले शब्द को सर्वनाम कहते हैं। जैसे: मैं, तुम, वह, यह, कोई, कुछ।' },
  { id: 'hin3', subject: 'Hindi', chapter: 'व्याकरण', front: 'क्रिया क्या है?', back: 'जिस शब्द से किसी कार्य का करना या होना पाया जाए, उसे क्रिया कहते हैं। जैसे: खाना, पढ़ना, लिखना, जाना।' },

  // Sociology
  { id: 'soc1', subject: 'Sociology', chapter: 'Introduction to Sociology', front: 'What is Sociology?', back: 'Sociology is the scientific study of society, social relationships, social institutions, and social behavior patterns.' },
  { id: 'soc2', subject: 'Sociology', chapter: 'Socialization', front: 'Define Socialization', back: 'Socialization is the lifelong process through which individuals learn and internalize the norms, values, beliefs, and behaviors of their society.' },
  { id: 'soc3', subject: 'Sociology', chapter: 'Social Stratification', front: 'What is Social Stratification?', back: 'Social stratification is the hierarchical arrangement of individuals or groups in a society based on factors like wealth, power, prestige, age, or gender.' },
  { id: 'soc4', subject: 'Sociology', chapter: 'Culture', front: 'Define Culture', back: 'Culture is the shared way of life of a group of people, including their beliefs, values, customs, behaviors, and material objects passed from generation to generation.' },

  // Geography
  { id: 'geo1', subject: 'Geography', chapter: 'Earth Movements', front: 'What are Tectonic Plates?', back: 'Tectonic plates are large, rigid pieces of Earth\'s lithosphere that move on the semi-fluid asthenosphere, causing earthquakes, volcanoes, and mountain formation.' },
  { id: 'geo2', subject: 'Geography', chapter: 'Landforms', front: 'How are Mountains formed?', back: 'Mountains are formed through tectonic forces (fold mountains), volcanic activity (volcanic mountains), or erosion (residual mountains).' },
  { id: 'geo3', subject: 'Geography', chapter: 'Climate', front: 'What is Monsoon?', back: 'Monsoon is a seasonal wind system that reverses direction between summer and winter, bringing heavy rainfall during summer months in regions like India.' },

  // Psychology
  { id: 'psy1', subject: 'Psychology', chapter: 'Introduction to Psychology', front: 'What is Psychology?', back: 'Psychology is the scientific study of behavior and mental processes, including cognition, emotion, perception, personality, and social interactions.' },
  { id: 'psy2', subject: 'Psychology', chapter: 'Learning', front: 'What is Classical Conditioning?', back: 'Classical conditioning is a learning process where a neutral stimulus becomes associated with a meaningful stimulus, producing a conditioned response (Pavlov\'s dog experiment).' },
  { id: 'psy3', subject: 'Psychology', chapter: 'Memory', front: 'What is Short-term Memory?', back: 'Short-term memory (STM) is temporary storage that holds limited information (7±2 items) for 15-30 seconds unless rehearsed to transfer to long-term memory.' },
];

const Random5Game: React.FC<Random5GameProps> = ({ onClose }) => {
  const [selectedCards, setSelectedCards] = useState<FlashCard[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [knownCards, setKnownCards] = useState<string[]>([]);
  const [unknownCards, setUnknownCards] = useState<string[]>([]);
  const [gameComplete, setGameComplete] = useState(false);

  useEffect(() => {
    pickRandom5();
  }, []);

  const pickRandom5 = () => {
    const shuffled = [...FLASH_CARDS].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 5);
    setSelectedCards(selected);
    setCurrentCardIndex(0);
    setShowAnswer(false);
    setKnownCards([]);
    setUnknownCards([]);
    setGameComplete(false);
  };

  const flipCard = () => {
    setShowAnswer(!showAnswer);
  };

  const markAsKnown = () => {
    const currentCard = selectedCards[currentCardIndex];
    setKnownCards([...knownCards, currentCard.id]);
    nextCard();
  };

  const markAsUnknown = () => {
    const currentCard = selectedCards[currentCardIndex];
    setUnknownCards([...unknownCards, currentCard.id]);
    nextCard();
  };

  const nextCard = () => {
    if (currentCardIndex < selectedCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setShowAnswer(false);
    } else {
      setGameComplete(true);
    }
  };

  const currentCard = selectedCards[currentCardIndex];

  if (selectedCards.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-slate-900 to-orange-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-orange-500/30">
        <div className="sticky top-0 bg-gradient-to-r from-orange-600 to-red-600 p-6 flex justify-between items-center rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
              <Flame className="w-7 h-7" />
              Random 5 Game
            </h2>
            <p className="text-orange-100 text-sm">Quick burst revision - 5 random flashcards</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition-all"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {!gameComplete ? (
            <>
              {/* Progress */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-3">
                  <div className="bg-white/10 px-4 py-2 rounded-lg">
                    <p className="text-sm text-slate-300">Card</p>
                    <p className="text-xl font-bold text-white">{currentCardIndex + 1}/5</p>
                  </div>
                  <div className="bg-green-500/20 px-4 py-2 rounded-lg border border-green-500/30">
                    <p className="text-sm text-green-200">Known</p>
                    <p className="text-xl font-bold text-green-300">{knownCards.length}</p>
                  </div>
                  <div className="bg-red-500/20 px-4 py-2 rounded-lg border border-red-500/30">
                    <p className="text-sm text-red-200">Review</p>
                    <p className="text-xl font-bold text-red-300">{unknownCards.length}</p>
                  </div>
                </div>
                <button
                  onClick={pickRandom5}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all flex items-center gap-2"
                >
                  <Shuffle className="w-4 h-4" />
                  New 5
                </button>
              </div>

              {/* Subject & Chapter */}
              <div className="mb-4 flex gap-2">
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium">
                  {currentCard.subject}
                </span>
                <span className="px-3 py-1 bg-slate-600/50 text-slate-300 rounded-full text-sm">
                  {currentCard.chapter}
                </span>
              </div>

              {/* Card */}
              <div
                onClick={flipCard}
                className="relative min-h-[300px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 mb-6 cursor-pointer transition-all hover:scale-105 border-2 border-orange-500/30 shadow-xl"
              >
                <div className="absolute top-4 right-4 text-xs text-slate-400">
                  {showAnswer ? 'Back' : 'Front'} • Click to flip
                </div>
                <div className="flex items-center justify-center h-full min-h-[250px]">
                  <p className="text-white text-2xl text-center font-medium">
                    {showAnswer ? currentCard.back : currentCard.front}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              {showAnswer && (
                <div className="flex gap-4">
                  <button
                    onClick={markAsUnknown}
                    className="flex-1 bg-gradient-to-r from-red-500 to-pink-600 text-white py-4 rounded-lg font-bold text-lg hover:from-red-600 hover:to-pink-700 transition-all flex items-center justify-center gap-2"
                  >
                    <XCircle className="w-6 h-6" />
                    Need to Review
                  </button>
                  <button
                    onClick={markAsKnown}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-lg font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-6 h-6" />
                    Got It!
                  </button>
                </div>
              )}

              {/* Progress Dots */}
              <div className="mt-6 flex justify-center gap-2">
                {selectedCards.map((card, idx) => (
                  <div
                    key={card.id}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx < currentCardIndex
                        ? knownCards.includes(card.id)
                          ? 'bg-green-500'
                          : 'bg-red-500'
                        : idx === currentCardIndex
                        ? 'bg-orange-500 w-8'
                        : 'bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </>
          ) : (
            // Results Screen
            <div className="text-center py-8">
              <div className="text-6xl mb-6">
                {knownCards.length === 5 ? '🎉' : knownCards.length >= 3 ? '👏' : '💪'}
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Round Complete!</h3>
              
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-8">
                <div className="bg-green-500/20 border-2 border-green-500 rounded-xl p-6">
                  <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-3" />
                  <p className="text-4xl font-bold text-green-300 mb-2">{knownCards.length}</p>
                  <p className="text-green-200">Known</p>
                </div>
                <div className="bg-red-500/20 border-2 border-red-500 rounded-xl p-6">
                  <XCircle className="w-12 h-12 text-red-400 mx-auto mb-3" />
                  <p className="text-4xl font-bold text-red-300 mb-2">{unknownCards.length}</p>
                  <p className="text-red-200">Review Needed</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 max-w-md mx-auto">
                <button
                  onClick={pickRandom5}
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-lg font-bold text-lg hover:from-orange-600 hover:to-red-700 transition-all flex items-center justify-center gap-2"
                >
                  <Shuffle className="w-5 h-5" />
                  Play Another Round
                </button>
                <button
                  onClick={onClose}
                  className="bg-slate-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-slate-700 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Random5Game;