import React, { useState, useEffect } from 'react';
import { X, RotateCcw, Eye, TrendingUp, Award, BookOpen } from 'lucide-react';

interface RepetitionTrackerProps {
  onClose: () => void;
}

interface ConceptRepetition {
  id: string;
  concept: string;
  subject: string;
  viewCount: number;
  lastViewed: Date;
  masteryLevel: 'beginner' | 'intermediate' | 'advanced' | 'mastered';
}

interface FlashCard {
  id: string;
  concept: string;
  subject: string;
  question: string;
  answer: string;
}

const FLASHCARDS: FlashCard[] = [
  { id: 'f1', concept: 'Law of Demand', subject: 'Economics', question: 'What is the Law of Demand?', answer: 'There is an inverse relationship between price and quantity demanded, ceteris paribus.' },
  { id: 'f2', concept: 'Elasticity', subject: 'Economics', question: 'Define Price Elasticity of Demand', answer: 'It measures the responsiveness of quantity demanded to a change in price. Ed = % ΔQd / % ΔP' },
  { id: 'f3', concept: 'GDP', subject: 'Economics', question: 'What is GDP?', answer: 'Gross Domestic Product - the total value of all goods and services produced within a country in a given period.' },
  { id: 'f4', concept: 'Renaissance', subject: 'History', question: 'What was the Renaissance?', answer: 'A period of European cultural, artistic, and intellectual revival from 14th-17th centuries, meaning "rebirth".' },
  { id: 'f5', concept: 'French Revolution', subject: 'History', question: 'When did the French Revolution occur?', answer: '1789-1799, beginning with the storming of Bastille on July 14, 1789.' },
  { id: 'f6', concept: 'Industrial Revolution', subject: 'History', question: 'What was the Industrial Revolution?', answer: 'Transformation from agrarian to industrial society (1760-1840), starting in Britain with mechanization and factory system.' },
  { id: 'f7', concept: 'Federalism', subject: 'Political Science', question: 'Define Federalism', answer: 'A system where power is constitutionally divided between central and state governments.' },
  { id: 'f8', concept: 'Democracy', subject: 'Political Science', question: 'What is Democracy?', answer: 'Government by the people, where citizens exercise power directly or through elected representatives.' },
  { id: 'f9', concept: 'Simile', subject: 'English', question: 'What is a Simile?', answer: 'A figure of speech comparing two things using "like" or "as" (e.g., brave as a lion).' },
  { id: 'f10', concept: 'Metaphor', subject: 'English', question: 'What is a Metaphor?', answer: 'A direct comparison between unlike things without using "like" or "as" (e.g., Time is money).' },
  { id: 'f11', concept: 'Socialization', subject: 'Sociology', question: 'Define Socialization', answer: 'The lifelong process of learning society\'s norms, values, beliefs, and behaviors.' },
  { id: 'f12', concept: 'Social Stratification', subject: 'Sociology', question: 'What is Social Stratification?', answer: 'Hierarchical arrangement of individuals in society based on wealth, power, prestige, age, or gender.' },
];

const RepetitionTracker: React.FC<RepetitionTrackerProps> = ({ onClose }) => {
  const [repetitions, setRepetitions] = useState<ConceptRepetition[]>([]);
  const [currentCard, setCurrentCard] = useState<FlashCard | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [viewMode, setViewMode] = useState<'stats' | 'practice'>('stats');

  useEffect(() => {
    loadRepetitionData();
  }, []);

  const loadRepetitionData = () => {
    const saved = localStorage.getItem('repetitionTracker');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Convert date strings back to Date objects
      const withDates = parsed.map((r: any) => ({
        ...r,
        lastViewed: new Date(r.lastViewed)
      }));
      setRepetitions(withDates);
    }
  };

  const saveRepetitionData = (newReps: ConceptRepetition[]) => {
    setRepetitions(newReps);
    localStorage.setItem('repetitionTracker', JSON.stringify(newReps));
  };

  const getMasteryLevel = (viewCount: number): ConceptRepetition['masteryLevel'] => {
    if (viewCount >= 10) return 'mastered';
    if (viewCount >= 6) return 'advanced';
    if (viewCount >= 3) return 'intermediate';
    return 'beginner';
  };

  const recordView = (card: FlashCard) => {
    const updatedReps = [...repetitions];
    const existingIdx = updatedReps.findIndex(r => r.concept === card.concept);
    
    if (existingIdx !== -1) {
      updatedReps[existingIdx].viewCount += 1;
      updatedReps[existingIdx].lastViewed = new Date();
      updatedReps[existingIdx].masteryLevel = getMasteryLevel(updatedReps[existingIdx].viewCount);
    } else {
      updatedReps.push({
        id: card.id,
        concept: card.concept,
        subject: card.subject,
        viewCount: 1,
        lastViewed: new Date(),
        masteryLevel: 'beginner'
      });
    }
    
    saveRepetitionData(updatedReps);
  };

  const startPractice = () => {
    // Prioritize cards with lower view counts
    const conceptCounts = new Map(repetitions.map(r => [r.concept, r.viewCount]));
    const sortedCards = [...FLASHCARDS].sort((a, b) => {
      const countA = conceptCounts.get(a.concept) || 0;
      const countB = conceptCounts.get(b.concept) || 0;
      return countA - countB;
    });
    
    const randomCard = sortedCards[Math.floor(Math.random() * Math.min(5, sortedCards.length))];
    setCurrentCard(randomCard);
    setShowAnswer(false);
    setViewMode('practice');
    recordView(randomCard);
  };

  const nextCard = () => {
    startPractice();
  };

  const getMasteryColor = (level: ConceptRepetition['masteryLevel']) => {
    switch (level) {
      case 'mastered': return 'from-green-500/20 to-emerald-500/20 border-green-500 text-green-400';
      case 'advanced': return 'from-blue-500/20 to-cyan-500/20 border-blue-500 text-blue-400';
      case 'intermediate': return 'from-yellow-500/20 to-amber-500/20 border-yellow-500 text-yellow-400';
      default: return 'from-red-500/20 to-rose-500/20 border-red-500 text-red-400';
    }
  };

  const getMasteryIcon = (level: ConceptRepetition['masteryLevel']) => {
    switch (level) {
      case 'mastered': return '🏆';
      case 'advanced': return '⭐';
      case 'intermediate': return '📈';
      default: return '🌱';
    }
  };

  const sortedReps = [...repetitions].sort((a, b) => b.viewCount - a.viewCount);
  const totalViews = repetitions.reduce((sum, r) => sum + r.viewCount, 0);
  const masteredCount = repetitions.filter(r => r.masteryLevel === 'mastered').length;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30">
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-indigo-600 p-6 flex justify-between items-center rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
              <RotateCcw className="w-7 h-7" />
              Repetition Tracker
            </h2>
            <p className="text-purple-100 text-sm">Track how many times you've reviewed each concept</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition-all"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {viewMode === 'stats' ? (
            <>
              {/* Summary Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <Eye className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white">{totalViews}</p>
                  <p className="text-sm text-slate-300">Total Views</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <BookOpen className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white">{repetitions.length}</p>
                  <p className="text-sm text-slate-300">Concepts Tracked</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <Award className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white">{masteredCount}</p>
                  <p className="text-sm text-slate-300">Mastered</p>
                </div>
              </div>

              {/* Mastery Legend */}
              <div className="bg-white/5 rounded-xl p-4 mb-6">
                <h4 className="text-white font-bold mb-3">Mastery Levels:</h4>
                <div className="grid grid-cols-4 gap-2">
                  <div className="text-center">
                    <span className="text-2xl">🌱</span>
                    <p className="text-xs text-red-400">Beginner (1-2)</p>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl">📈</span>
                    <p className="text-xs text-yellow-400">Intermediate (3-5)</p>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl">⭐</span>
                    <p className="text-xs text-blue-400">Advanced (6-9)</p>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl">🏆</span>
                    <p className="text-xs text-green-400">Mastered (10+)</p>
                  </div>
                </div>
              </div>

              {/* Repetition List */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  📊 Concept Repetition Stats
                </h3>
                
                {sortedReps.length === 0 ? (
                  <div className="bg-purple-500/20 border-2 border-purple-500 rounded-xl p-8 text-center">
                    <BookOpen className="w-16 h-16 text-purple-400 mx-auto mb-3" />
                    <h4 className="text-2xl font-bold text-purple-300 mb-2">Start Your Journey!</h4>
                    <p className="text-white">Begin practicing to track your concept repetitions and mastery levels.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {sortedReps.map((rep, idx) => (
                      <div
                        key={idx}
                        className={`bg-gradient-to-r ${getMasteryColor(rep.masteryLevel)} border-2 rounded-xl p-4`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-3xl">{getMasteryIcon(rep.masteryLevel)}</span>
                            <div>
                              <h4 className="text-white font-bold text-lg">{rep.concept}</h4>
                              <p className="text-sm text-slate-300">{rep.subject}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className={`text-4xl font-bold ${getMasteryColor(rep.masteryLevel).split(' ')[2]}`}>
                              {rep.viewCount}×
                            </p>
                            <p className="text-xs text-slate-300 capitalize">
                              {rep.masteryLevel}
                            </p>
                          </div>
                        </div>
                        
                        {/* Progress to Next Level */}
                        <div className="mt-3">
                          <div className="bg-slate-800 rounded-full h-2 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all"
                              style={{ 
                                width: `${Math.min(100, (rep.viewCount % (rep.masteryLevel === 'mastered' ? 10 : rep.masteryLevel === 'advanced' ? 4 : 3) / (rep.masteryLevel === 'mastered' ? 10 : rep.masteryLevel === 'advanced' ? 4 : 3)) * 100)}%` 
                              }}
                            />
                          </div>
                          <p className="text-xs text-slate-400 mt-1">
                            Last viewed: {rep.lastViewed.toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <button
                onClick={startPractice}
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-4 rounded-lg font-bold text-lg hover:from-purple-600 hover:to-indigo-700 transition-all flex items-center justify-center gap-2"
              >
                <TrendingUp className="w-5 h-5" />
                Practice & Track Repetitions
              </button>
            </>
          ) : (
            // Practice Mode
            <div>
              {currentCard && (
                <>
                  <div className="mb-4 flex gap-2">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                      {currentCard.subject}
                    </span>
                    <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
                      {currentCard.concept}
                    </span>
                  </div>

                  {/* View Count Display */}
                  {(() => {
                    const rep = repetitions.find(r => r.concept === currentCard.concept);
                    return rep && (
                      <div className="bg-white/5 rounded-xl p-3 mb-4 flex items-center justify-between">
                        <span className="text-slate-300">Times reviewed:</span>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{getMasteryIcon(rep.masteryLevel)}</span>
                          <span className="text-2xl font-bold text-purple-400">{rep.viewCount}×</span>
                          <span className="text-sm text-slate-400 capitalize">({rep.masteryLevel})</span>
                        </div>
                      </div>
                    );
                  })()}

                  <div
                    onClick={() => setShowAnswer(!showAnswer)}
                    className="min-h-[300px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 mb-6 cursor-pointer transition-all hover:scale-105 border-2 border-purple-500/30"
                  >
                    <div className="absolute top-4 right-4 text-xs text-slate-400">
                      {showAnswer ? 'Answer' : 'Question'} • Click to flip
                    </div>
                    <div className="flex items-center justify-center h-full min-h-[250px]">
                      <p className="text-white text-2xl text-center font-medium">
                        {showAnswer ? currentCard.answer : currentCard.question}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={nextCard}
                      className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-4 rounded-lg font-bold text-lg hover:from-purple-600 hover:to-indigo-700 transition-all"
                    >
                      Next Card
                    </button>
                    <button
                      onClick={() => setViewMode('stats')}
                      className="px-6 bg-slate-600 text-white py-4 rounded-lg font-bold hover:bg-slate-700 transition-all"
                    >
                      View Stats
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepetitionTracker;