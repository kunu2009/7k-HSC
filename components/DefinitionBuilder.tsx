import React, { useState } from 'react';
import { X, Shuffle, CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';

interface DefinitionBuilderProps {
  onClose: () => void;
}

interface DefinitionQuestion {
  id: string;
  incomplete: string;
  answer: string[];
  explanation: string;
  subject: string;
}

const DEFINITION_QUESTIONS: DefinitionQuestion[] = [
  // Economics
  { id: 'eco1', incomplete: 'Utility is the _____ derived from consumption of a commodity', answer: ['satisfaction', 'pleasure'], explanation: 'Utility = Satisfaction/Want-satisfying power', subject: 'Economics' },
  { id: 'eco2', incomplete: 'Demand is the quantity of goods that consumers are _____ and _____ to buy', answer: ['willing', 'able'], explanation: 'Demand requires both willingness and ability to pay.', subject: 'Economics' },
  { id: 'eco3', incomplete: 'Elasticity of demand measures the _____ of demand to changes in _____', answer: ['responsiveness', 'price'], explanation: 'Ed = % change in quantity / % change in price', subject: 'Economics' },
  { id: 'eco4', incomplete: 'Perfect competition has _____ buyers and sellers selling _____ products', answer: ['many', 'homogeneous'], explanation: 'Many players, identical products, perfect knowledge.', subject: 'Economics' },
  { id: 'eco5', incomplete: 'Monopoly has _____ seller with _____ substitutes', answer: ['one', 'no'], explanation: 'Single seller controls entire market supply.', subject: 'Economics' },
  
  // History
  { id: 'his1', incomplete: 'Renaissance means _____ and began in _____', answer: ['rebirth', 'Italy'], explanation: 'Renaissance = Cultural and intellectual revival in 14th century.', subject: 'History' },
  { id: 'his2', incomplete: 'Martin Luther started the _____ in 1517 by nailing _____ Theses', answer: ['Reformation', '95'], explanation: 'Protestant Reformation challenged Catholic Church practices.', subject: 'History' },
  { id: 'his3', incomplete: 'Subsidiary Alliance was introduced by Lord _____ to make Indian states _____', answer: ['Wellesley', 'dependent'], explanation: 'Made rulers give up independent foreign policy (1798).', subject: 'History' },
  { id: 'his4', incomplete: 'Doctrine of Lapse was introduced by Lord _____ to annex states without _____ heir', answer: ['Dalhousie', 'natural'], explanation: 'Allowed British to take over kingdoms if no male heir.', subject: 'History' },
  { id: 'his5', incomplete: 'The revolt of _____ is called the First War of _____', answer: ['1857', 'Independence'], explanation: 'Major uprising against British rule across India.', subject: 'History' },
  
  // Political Science
  { id: 'pol1', incomplete: 'Federalism is a system where power is divided between _____ and _____ governments', answer: ['central', 'state'], explanation: 'Both levels have independent authority in their jurisdictions.', subject: 'Political Science' },
  { id: 'pol2', incomplete: 'Democracy means rule by the _____ through _____', answer: ['people', 'voting'], explanation: 'Power comes from the consent of the governed.', subject: 'Political Science' },
  { id: 'pol3', incomplete: 'Secularism means _____ treatment of all _____ by the state', answer: ['equal', 'religions'], explanation: 'State has no official religion, treats all fairly.', subject: 'Political Science' },
  { id: 'pol4', incomplete: 'Globalisation is the integration of _____ across _____', answer: ['economies', 'borders'], explanation: 'Increased interconnectedness of world economies.', subject: 'Political Science' },
  
  // English
  { id: 'eng1', incomplete: 'A metaphor is a _____ comparison without using _____ or _____', answer: ['direct', 'like', 'as'], explanation: 'Directly states one thing IS another (e.g., "Time is money").', subject: 'English' },
  { id: 'eng2', incomplete: 'Alliteration is the repetition of _____ sounds at the _____ of words', answer: ['consonant', 'beginning'], explanation: 'e.g., "Peter Piper picked a peck".', subject: 'English' },
  { id: 'eng3', incomplete: 'Hyperbole is deliberate _____ for _____', answer: ['exaggeration', 'effect'], explanation: 'e.g., "I\'ve told you a million times!"', subject: 'English' },
  { id: 'eng4', incomplete: 'A sonnet is a poem with _____ lines and a fixed _____ scheme', answer: ['14', 'rhyme'], explanation: 'Shakespearean or Petrarchan forms.', subject: 'English' },
  
  // Hindi
  { id: 'hin1', incomplete: 'संधि में दो _____ या _____ मिलकर परिवर्तन करते हैं', answer: ['वर्ण', 'ध्वनि'], explanation: 'संधि = वर्णों का मेल', subject: 'Hindi' },
  { id: 'hin2', incomplete: 'समास में दो या अधिक _____ मिलकर एक _____ शब्द बनाते हैं', answer: ['शब्द', 'नया'], explanation: 'समास = शब्दों का संक्षेपण', subject: 'Hindi' },
  
  // Sociology
  { id: 'soc1', incomplete: 'Sociology is the study of _____ and social _____', answer: ['society', 'relationships'], explanation: 'Auguste Comte coined the term in 1838.', subject: 'Sociology' },
  { id: 'soc2', incomplete: 'Socialization is the process of learning _____ and _____', answer: ['norms', 'values'], explanation: 'How individuals become functioning members of society.', subject: 'Sociology' },
  { id: 'soc3', incomplete: 'Stratification is the division of society into _____ based on _____ and status', answer: ['layers', 'wealth'], explanation: 'Hierarchical arrangement of social classes.', subject: 'Sociology' }
];

const DefinitionBuilder: React.FC<DefinitionBuilderProps> = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState({ correct: 0, attempted: 0 });

  const currentQuestion = DEFINITION_QUESTIONS[currentIndex];

  const checkAnswer = () => {
    const userWords = userInput.toLowerCase().trim().split(/\s+/);
    const isCorrect = currentQuestion.answer.some(ans => 
      userWords.includes(ans.toLowerCase())
    );
    
    setScore({
      correct: score.correct + (isCorrect ? 1 : 0),
      attempted: score.attempted + 1
    });
    setShowAnswer(true);
  };

  const nextQuestion = () => {
    if (currentIndex < DEFINITION_QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserInput('');
      setShowAnswer(false);
    }
  };

  const shuffle = () => {
    const randomIndex = Math.floor(Math.random() * DEFINITION_QUESTIONS.length);
    setCurrentIndex(randomIndex);
    setUserInput('');
    setShowAnswer(false);
  };

  const reset = () => {
    setCurrentIndex(0);
    setUserInput('');
    setShowAnswer(false);
    setScore({ correct: 0, attempted: 0 });
  };

  const isCorrect = currentQuestion.answer.some(ans =>
    userInput.toLowerCase().includes(ans.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-indigo-500/30">
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 flex justify-between items-center rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Definition Builder</h2>
            <p className="text-indigo-100 text-sm">Fill in the blanks to complete definitions</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition-all"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* Progress & Score */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-4">
              <div className="bg-white/10 px-4 py-2 rounded-lg">
                <p className="text-sm text-slate-300">Question</p>
                <p className="text-xl font-bold text-white">{currentIndex + 1}/{DEFINITION_QUESTIONS.length}</p>
              </div>
              <div className="bg-green-500/20 px-4 py-2 rounded-lg border border-green-500/30">
                <p className="text-sm text-green-200">Score</p>
                <p className="text-xl font-bold text-green-300">{score.correct}/{score.attempted}</p>
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
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
              {currentQuestion.subject}
            </span>
          </div>

          {/* Question */}
          <div className="bg-white/5 rounded-xl p-8 mb-6 border border-white/10">
            <p className="text-2xl text-white font-medium leading-relaxed mb-8">
              {currentQuestion.incomplete.split('_____').map((part, idx, arr) => (
                <React.Fragment key={idx}>
                  {part}
                  {idx < arr.length - 1 && (
                    <span className="inline-block mx-2">
                      <span className="inline-block border-b-4 border-yellow-400 border-dashed min-w-[120px] px-3 py-1 text-yellow-400 font-bold">
                        _____
                      </span>
                    </span>
                  )}
                </React.Fragment>
              ))}
            </p>

            {/* Input */}
            <div className="space-y-4">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !showAnswer && checkAnswer()}
                placeholder="Type your answer..."
                disabled={showAnswer}
                className="w-full bg-white/10 border-2 border-white/20 rounded-lg px-6 py-4 text-white text-lg placeholder-slate-400 focus:border-indigo-400 focus:outline-none disabled:opacity-50"
              />

              {!showAnswer ? (
                <button
                  onClick={checkAnswer}
                  disabled={!userInput.trim()}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-lg font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Check Answer
                </button>
              ) : (
                <div>
                  {/* Result */}
                  <div className={`p-6 rounded-lg border-2 mb-4 ${
                    isCorrect 
                      ? 'bg-green-500/10 border-green-500/30' 
                      : 'bg-red-500/10 border-red-500/30'
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      {isCorrect ? (
                        <CheckCircle2 className="w-8 h-8 text-green-400" />
                      ) : (
                        <XCircle className="w-8 h-8 text-red-400" />
                      )}
                      <span className={`text-xl font-bold ${
                        isCorrect ? 'text-green-300' : 'text-red-300'
                      }`}>
                        {isCorrect ? 'Correct!' : 'Not quite right'}
                      </span>
                    </div>
                    <p className="text-white mb-2">
                      <strong>Expected:</strong> {currentQuestion.answer.join(' or ')}
                    </p>
                    <p className="text-slate-300 text-sm italic">
                      {currentQuestion.explanation}
                    </p>
                  </div>

                  {/* Next Button */}
                  {currentIndex < DEFINITION_QUESTIONS.length - 1 ? (
                    <button
                      onClick={nextQuestion}
                      className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:from-indigo-600 hover:to-purple-700 transition-all flex items-center justify-center gap-2"
                    >
                      Next Question
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <div className="text-center">
                      <p className="text-white text-xl mb-4">
                        Quiz Complete! Final Score: {score.correct}/{score.attempted}
                      </p>
                      <button
                        onClick={reset}
                        className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all"
                      >
                        Try Again
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-white/5 rounded-lg p-4">
            <div className="flex gap-1">
              {DEFINITION_QUESTIONS.map((_, idx) => (
                <div
                  key={idx}
                  className={`flex-1 h-2 rounded-full transition-all ${
                    idx < score.attempted
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

export default DefinitionBuilder;