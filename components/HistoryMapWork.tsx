import React, { useState } from 'react';
import { X, MapPin, CheckCircle, XCircle, RotateCcw, Trophy, Clock, Target, Map, Globe, Flag, Star } from 'lucide-react';

interface HistoryMapWorkProps {
  onClose: () => void;
}

interface MapQuestion {
  id: string;
  chapter: string;
  question: string;
  options: string[];
  correctIndex: number;
  hint: string;
  explanation: string;
  category: 'place' | 'event' | 'movement' | 'boundary';
}

const HistoryMapWork: React.FC<HistoryMapWorkProps> = ({ onClose }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<number[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const mapQuestions: MapQuestion[] = [
    // Renaissance & Reformation
    {
      id: 'map1',
      chapter: 'Renaissance',
      question: 'Which Italian city is known as the "Birthplace of Renaissance"?',
      options: ['Venice', 'Florence', 'Rome', 'Milan'],
      correctIndex: 1,
      hint: 'This city was home to the Medici family who patronized art.',
      explanation: 'Florence, Italy is considered the birthplace of Renaissance. The Medici family, wealthy bankers, supported artists like Leonardo da Vinci, Michelangelo, and Botticelli.',
      category: 'place'
    },
    {
      id: 'map2',
      chapter: 'Renaissance',
      question: 'In which German city did Martin Luther post his 95 Theses?',
      options: ['Berlin', 'Munich', 'Wittenberg', 'Cologne'],
      correctIndex: 2,
      hint: 'He nailed them on the door of a church castle.',
      explanation: 'Martin Luther posted his 95 Theses on the door of Castle Church in Wittenberg, Germany on October 31, 1517, starting the Protestant Reformation.',
      category: 'event'
    },
    {
      id: 'map3',
      chapter: 'Renaissance',
      question: 'Which country is associated with the printing press invention by Gutenberg?',
      options: ['France', 'Germany', 'England', 'Italy'],
      correctIndex: 1,
      hint: 'Gutenberg was from Mainz.',
      explanation: 'Johannes Gutenberg invented the printing press around 1440 in Mainz, Germany. This invention revolutionized the spread of knowledge.',
      category: 'event'
    },
    // French Revolution
    {
      id: 'map4',
      chapter: 'French Revolution',
      question: 'In which city was the Bastille fortress located?',
      options: ['Lyon', 'Marseille', 'Paris', 'Bordeaux'],
      correctIndex: 2,
      hint: 'It was stormed on July 14, 1789.',
      explanation: 'The Bastille was a fortress-prison in Paris. Its storming on July 14, 1789 marked the beginning of the French Revolution. This date is celebrated as Bastille Day in France.',
      category: 'event'
    },
    {
      id: 'map5',
      chapter: 'French Revolution',
      question: 'Where was the Palace of Versailles located?',
      options: ['Near Lyon', 'Near Paris', 'Near Bordeaux', 'Near Marseille'],
      correctIndex: 1,
      hint: 'Louis XVI and Marie Antoinette lived here.',
      explanation: 'Versailles is located about 20 km southwest of Paris. It was the principal royal residence of France from 1682 until the French Revolution in 1789.',
      category: 'place'
    },
    {
      id: 'map6',
      chapter: 'French Revolution',
      question: 'Where did Napoleon meet his final defeat?',
      options: ['Waterloo (Belgium)', 'Austerlitz', 'Leipzig', 'Moscow'],
      correctIndex: 0,
      hint: 'This battle ended Napoleon\'s rule in 1815.',
      explanation: 'The Battle of Waterloo was fought on June 18, 1815 near Waterloo in present-day Belgium. Napoleon was defeated by British and Prussian forces.',
      category: 'event'
    },
    // Industrial Revolution
    {
      id: 'map7',
      chapter: 'Industrial Revolution',
      question: 'In which country did the Industrial Revolution begin?',
      options: ['France', 'Germany', 'Britain', 'USA'],
      correctIndex: 2,
      hint: 'This island nation had abundant coal and iron.',
      explanation: 'The Industrial Revolution began in Britain around 1760. Britain had advantages like coal and iron deposits, colonial markets, and capital from trade.',
      category: 'movement'
    },
    {
      id: 'map8',
      chapter: 'Industrial Revolution',
      question: 'Which British city became the center of cotton textile industry?',
      options: ['London', 'Manchester', 'Birmingham', 'Liverpool'],
      correctIndex: 1,
      hint: 'It was nicknamed "Cottonopolis".',
      explanation: 'Manchester became the center of cotton textile industry during the Industrial Revolution. It was called "Cottonopolis" due to its numerous cotton mills.',
      category: 'place'
    },
    // American Revolution
    {
      id: 'map9',
      chapter: 'American Revolution',
      question: 'Where was the Boston Tea Party held?',
      options: ['New York Harbor', 'Boston Harbor', 'Philadelphia Port', 'Charleston Harbor'],
      correctIndex: 1,
      hint: 'Colonists dumped tea here in 1773.',
      explanation: 'The Boston Tea Party took place on December 16, 1773 in Boston Harbor. American colonists dumped 342 chests of British tea into the harbor to protest taxation.',
      category: 'event'
    },
    {
      id: 'map10',
      chapter: 'American Revolution',
      question: 'Where was the American Declaration of Independence signed?',
      options: ['New York', 'Boston', 'Philadelphia', 'Washington D.C.'],
      correctIndex: 2,
      hint: 'Independence Hall is located here.',
      explanation: 'The Declaration of Independence was signed at Independence Hall in Philadelphia on July 4, 1776. Washington D.C. was not yet built at that time.',
      category: 'event'
    },
    // World War I
    {
      id: 'map11',
      chapter: 'World War I',
      question: 'In which city was Archduke Franz Ferdinand assassinated?',
      options: ['Vienna', 'Belgrade', 'Sarajevo', 'Budapest'],
      correctIndex: 2,
      hint: 'This event triggered WWI on June 28, 1914.',
      explanation: 'Archduke Franz Ferdinand was assassinated in Sarajevo (Bosnia) on June 28, 1914 by Gavrilo Princip. This event triggered World War I.',
      category: 'event'
    },
    {
      id: 'map12',
      chapter: 'World War I',
      question: 'Where was the Treaty of Versailles signed?',
      options: ['London', 'Paris', 'Versailles', 'Berlin'],
      correctIndex: 2,
      hint: 'It was signed in the Hall of Mirrors.',
      explanation: 'The Treaty of Versailles was signed on June 28, 1919 in the Hall of Mirrors at the Palace of Versailles, France, officially ending World War I.',
      category: 'event'
    },
    // World War II
    {
      id: 'map13',
      chapter: 'World War II',
      question: 'Which harbor was attacked by Japan on December 7, 1941?',
      options: ['San Diego', 'Pearl Harbor', 'San Francisco', 'Seattle'],
      correctIndex: 1,
      hint: 'This attack brought USA into WWII.',
      explanation: 'Japan attacked Pearl Harbor in Hawaii on December 7, 1941. This surprise attack led to US entry into World War II.',
      category: 'event'
    },
    {
      id: 'map14',
      chapter: 'World War II',
      question: 'On which Japanese city was the first atomic bomb dropped?',
      options: ['Tokyo', 'Nagasaki', 'Hiroshima', 'Osaka'],
      correctIndex: 2,
      hint: 'It was dropped on August 6, 1945.',
      explanation: 'The first atomic bomb "Little Boy" was dropped on Hiroshima on August 6, 1945. Three days later, Nagasaki was bombed.',
      category: 'event'
    },
    {
      id: 'map15',
      chapter: 'World War II',
      question: 'Where did the D-Day landings take place?',
      options: ['Dunkirk', 'Normandy', 'Calais', 'Brittany'],
      correctIndex: 1,
      hint: 'Operation Overlord, June 6, 1944.',
      explanation: 'The D-Day landings (Operation Overlord) took place on the beaches of Normandy, France on June 6, 1944. It was the largest seaborne invasion in history.',
      category: 'event'
    },
    // Russian Revolution
    {
      id: 'map16',
      chapter: 'Russian Revolution',
      question: 'Which city was known as Petrograd during the Russian Revolution?',
      options: ['Moscow', 'St. Petersburg', 'Kiev', 'Stalingrad'],
      correctIndex: 1,
      hint: 'It was renamed Leningrad later.',
      explanation: 'St. Petersburg was renamed Petrograd in 1914 and later Leningrad in 1924. The October Revolution of 1917 took place in Petrograd.',
      category: 'place'
    },
    {
      id: 'map17',
      chapter: 'Russian Revolution',
      question: 'Where was the Winter Palace located?',
      options: ['Moscow', 'Petrograd', 'Kiev', 'Minsk'],
      correctIndex: 1,
      hint: 'Bolsheviks stormed it in October 1917.',
      explanation: 'The Winter Palace in Petrograd (St. Petersburg) was the official residence of Russian monarchs. Bolsheviks stormed it on October 25-26, 1917.',
      category: 'event'
    },
    // Indian Freedom Struggle
    {
      id: 'map18',
      chapter: 'Indian Freedom Struggle',
      question: 'Where did Gandhiji start the Salt March (Dandi March)?',
      options: ['Mumbai', 'Ahmedabad (Sabarmati)', 'Surat', 'Porbandar'],
      correctIndex: 1,
      hint: 'He started from his Ashram.',
      explanation: 'Gandhi started the Salt March on March 12, 1930 from Sabarmati Ashram in Ahmedabad. He reached Dandi (on Gujarat coast) on April 6, 1930.',
      category: 'movement'
    },
    {
      id: 'map19',
      chapter: 'Indian Freedom Struggle',
      question: 'Where did the Jallianwala Bagh massacre occur?',
      options: ['Delhi', 'Lahore', 'Amritsar', 'Lucknow'],
      correctIndex: 2,
      hint: 'General Dyer ordered firing on peaceful crowd.',
      explanation: 'The Jallianwala Bagh massacre occurred on April 13, 1919 in Amritsar, Punjab. General Dyer ordered troops to fire on a peaceful gathering.',
      category: 'event'
    },
    {
      id: 'map20',
      chapter: 'Indian Freedom Struggle',
      question: 'Where was the first session of Indian National Congress held?',
      options: ['Calcutta', 'Bombay', 'Madras', 'Delhi'],
      correctIndex: 1,
      hint: 'It was held in December 1885.',
      explanation: 'The first session of Indian National Congress was held in Bombay (Mumbai) on December 28, 1885, with W.C. Bonnerjee as the first president.',
      category: 'event'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions', icon: Globe },
    { id: 'place', name: 'Important Places', icon: MapPin },
    { id: 'event', name: 'Historical Events', icon: Flag },
    { id: 'movement', name: 'Movements', icon: Target }
  ];

  const filteredQuestions = selectedCategory === 'all' 
    ? mapQuestions 
    : mapQuestions.filter(q => q.category === selectedCategory);

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === filteredQuestions[currentQ].correctIndex) {
      setScore(score + 1);
    }
    setAnswered([...answered, currentQ]);
  };

  const nextQuestion = () => {
    if (currentQ < filteredQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setShowHint(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswered([]);
    setShowHint(false);
  };

  const currentQuestion = filteredQuestions[currentQ];
  const isComplete = currentQ === filteredQuestions.length - 1 && showResult;

  const getCategoryColor = (cat: string) => {
    const colors: Record<string, string> = {
      place: 'bg-blue-500',
      event: 'bg-red-500',
      movement: 'bg-green-500',
      boundary: 'bg-purple-500'
    };
    return colors[cat] || 'bg-slate-500';
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen py-6 px-4">
        <div className="max-w-3xl mx-auto bg-slate-900 rounded-3xl shadow-2xl border border-slate-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-rose-600 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-4xl">🗺️</div>
                <div>
                  <h2 className="text-2xl font-bold text-white">History Map Work</h2>
                  <p className="text-red-100 text-sm mt-1">
                    Practice location-based questions for HSC
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="text-white" size={24} />
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="p-4 border-b border-slate-700">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    resetQuiz();
                  }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-red-500 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <cat.icon size={16} />
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Progress & Score */}
          <div className="p-4 bg-slate-800/50 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-slate-400 text-sm">
                Question {currentQ + 1} / {filteredQuestions.length}
              </span>
              <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-500 transition-all duration-300"
                  style={{ width: `${((currentQ + 1) / filteredQuestions.length) * 100}%` }}
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="text-yellow-400" size={18} />
              <span className="text-yellow-400 font-bold">{score}/{filteredQuestions.length}</span>
            </div>
          </div>

          {/* Question Area */}
          {!isComplete ? (
            <div className="p-6">
              {/* Chapter & Category Tags */}
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-sm">
                  {currentQuestion.chapter}
                </span>
                <span className={`px-3 py-1 ${getCategoryColor(currentQuestion.category)} text-white rounded-lg text-sm capitalize`}>
                  {currentQuestion.category}
                </span>
              </div>

              {/* Question */}
              <div className="bg-slate-800 rounded-2xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <Map className="text-red-400 flex-shrink-0 mt-1" size={24} />
                  <h3 className="text-xl text-white font-medium">{currentQuestion.question}</h3>
                </div>
              </div>

              {/* Hint Button */}
              {!showHint && !showResult && (
                <button
                  onClick={() => setShowHint(true)}
                  className="mb-4 text-amber-400 text-sm flex items-center gap-1 hover:underline"
                >
                  <Star size={14} />
                  Need a hint?
                </button>
              )}

              {showHint && !showResult && (
                <div className="mb-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                  <p className="text-amber-300 text-sm">
                    💡 <strong>Hint:</strong> {currentQuestion.hint}
                  </p>
                </div>
              )}

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showResult}
                    className={`w-full p-4 rounded-xl text-left transition-all flex items-center gap-3 ${
                      showResult
                        ? index === currentQuestion.correctIndex
                          ? 'bg-green-500/20 border-2 border-green-500 text-green-400'
                          : index === selectedAnswer
                            ? 'bg-red-500/20 border-2 border-red-500 text-red-400'
                            : 'bg-slate-800 border-2 border-slate-700 text-slate-400'
                        : 'bg-slate-800 border-2 border-slate-700 text-white hover:border-red-500/50 hover:bg-slate-700'
                    }`}
                  >
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                      showResult
                        ? index === currentQuestion.correctIndex
                          ? 'bg-green-500 text-white'
                          : index === selectedAnswer
                            ? 'bg-red-500 text-white'
                            : 'bg-slate-700 text-slate-400'
                        : 'bg-slate-700 text-slate-300'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1">{option}</span>
                    {showResult && index === currentQuestion.correctIndex && (
                      <CheckCircle className="text-green-400" size={20} />
                    )}
                    {showResult && index === selectedAnswer && index !== currentQuestion.correctIndex && (
                      <XCircle className="text-red-400" size={20} />
                    )}
                  </button>
                ))}
              </div>

              {/* Explanation */}
              {showResult && (
                <div className={`mt-4 p-4 rounded-xl ${
                  selectedAnswer === currentQuestion.correctIndex
                    ? 'bg-green-500/10 border border-green-500/30'
                    : 'bg-blue-500/10 border border-blue-500/30'
                }`}>
                  <h4 className={`font-medium mb-2 ${
                    selectedAnswer === currentQuestion.correctIndex ? 'text-green-400' : 'text-blue-400'
                  }`}>
                    {selectedAnswer === currentQuestion.correctIndex ? '✓ Correct!' : '📚 Learn More:'}
                  </h4>
                  <p className="text-slate-300 text-sm">{currentQuestion.explanation}</p>
                </div>
              )}

              {/* Next Button */}
              {showResult && currentQ < filteredQuestions.length - 1 && (
                <button
                  onClick={nextQuestion}
                  className="mt-6 w-full py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-colors"
                >
                  Next Question →
                </button>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div className="p-6 text-center">
              <div className="text-6xl mb-4">
                {score === filteredQuestions.length ? '🏆' : score >= filteredQuestions.length * 0.7 ? '🎉' : score >= filteredQuestions.length * 0.5 ? '👍' : '📚'}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Quiz Complete!</h3>
              <p className="text-slate-400 mb-6">
                You scored {score} out of {filteredQuestions.length}
                {' '}({Math.round((score / filteredQuestions.length) * 100)}%)
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                  <CheckCircle className="text-green-400 mx-auto mb-2" size={24} />
                  <div className="text-2xl font-bold text-green-400">{score}</div>
                  <div className="text-sm text-slate-400">Correct</div>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                  <XCircle className="text-red-400 mx-auto mb-2" size={24} />
                  <div className="text-2xl font-bold text-red-400">{filteredQuestions.length - score}</div>
                  <div className="text-sm text-slate-400">Incorrect</div>
                </div>
              </div>

              <div className={`p-4 rounded-xl mb-6 ${
                score === filteredQuestions.length
                  ? 'bg-yellow-500/10 border border-yellow-500/30'
                  : score >= filteredQuestions.length * 0.7
                    ? 'bg-green-500/10 border border-green-500/30'
                    : 'bg-blue-500/10 border border-blue-500/30'
              }`}>
                <p className={`${
                  score === filteredQuestions.length ? 'text-yellow-300' :
                  score >= filteredQuestions.length * 0.7 ? 'text-green-300' : 'text-blue-300'
                }`}>
                  {score === filteredQuestions.length
                    ? '🌟 Perfect Score! You\'ve mastered History Map Work!'
                    : score >= filteredQuestions.length * 0.7
                      ? '👏 Great job! Keep revising for even better results.'
                      : '💪 Keep practicing! Review the explanations to improve.'}
                </p>
              </div>

              <button
                onClick={resetQuiz}
                className="w-full py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw size={18} />
                Try Again
              </button>
            </div>
          )}

          {/* Footer */}
          <div className="p-4 border-t border-slate-700 bg-slate-800/50">
            <p className="text-center text-slate-400 text-sm">
              🗺️ Map questions are frequently asked in HSC History paper (2-4 marks)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryMapWork;
