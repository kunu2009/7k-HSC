import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, XCircle, RotateCcw, Shuffle, Clock, Trophy } from 'lucide-react';

interface EventSortingProps {
  onClose: () => void;
}

interface Event {
  id: string;
  title: string;
  year: number;
  subject: string;
}

interface Challenge {
  id: string;
  subject: string;
  events: Event[];
}

const CHALLENGES: Challenge[] = [
  {
    id: 'ch1',
    subject: 'History - French Revolution',
    events: [
      { id: 'e1', title: 'Estates General convened', year: 1789, subject: 'History' },
      { id: 'e2', title: 'Storming of Bastille', year: 1789, subject: 'History' },
      { id: 'e3', title: 'Declaration of Rights of Man', year: 1789, subject: 'History' },
      { id: 'e4', title: 'Execution of Louis XVI', year: 1793, subject: 'History' },
      { id: 'e5', title: 'Reign of Terror begins', year: 1793, subject: 'History' },
      { id: 'e6', title: 'Napoleon becomes Emperor', year: 1804, subject: 'History' },
    ]
  },
  {
    id: 'ch2',
    subject: 'History - World War I',
    events: [
      { id: 'e7', title: 'Assassination of Archduke Franz Ferdinand', year: 1914, subject: 'History' },
      { id: 'e8', title: 'Britain declares war on Germany', year: 1914, subject: 'History' },
      { id: 'e9', title: 'USA enters WWI', year: 1917, subject: 'History' },
      { id: 'e10', title: 'Russian Revolution', year: 1917, subject: 'History' },
      { id: 'e11', title: 'Armistice signed', year: 1918, subject: 'History' },
      { id: 'e12', title: 'Treaty of Versailles', year: 1919, subject: 'History' },
    ]
  },
  {
    id: 'ch3',
    subject: 'History - Indian Freedom Struggle',
    events: [
      { id: 'e13', title: 'Revolt of 1857', year: 1857, subject: 'History' },
      { id: 'e14', title: 'Formation of Indian National Congress', year: 1885, subject: 'History' },
      { id: 'e15', title: 'Partition of Bengal', year: 1905, subject: 'History' },
      { id: 'e16', title: 'Jallianwala Bagh Massacre', year: 1919, subject: 'History' },
      { id: 'e17', title: 'Non-Cooperation Movement', year: 1920, subject: 'History' },
      { id: 'e18', title: 'Salt March (Dandi March)', year: 1930, subject: 'History' },
      { id: 'e19', title: 'Quit India Movement', year: 1942, subject: 'History' },
      { id: 'e20', title: 'Indian Independence', year: 1947, subject: 'History' },
    ]
  },
  {
    id: 'ch4',
    subject: 'Economics - Development of Economic Thought',
    events: [
      { id: 'e21', title: 'Adam Smith publishes "Wealth of Nations"', year: 1776, subject: 'Economics' },
      { id: 'e22', title: 'Karl Marx publishes "Das Kapital"', year: 1867, subject: 'Economics' },
      { id: 'e23', title: 'Marginal Revolution begins', year: 1871, subject: 'Economics' },
      { id: 'e24', title: 'Keynesian Economics emerges', year: 1936, subject: 'Economics' },
      { id: 'e25', title: 'Bretton Woods Conference', year: 1944, subject: 'Economics' },
      { id: 'e26', title: 'India\'s Economic Liberalization', year: 1991, subject: 'Economics' },
    ]
  },
  {
    id: 'ch5',
    subject: 'Political Science - Indian Constitution',
    events: [
      { id: 'e27', title: 'Constituent Assembly formed', year: 1946, subject: 'Political Science' },
      { id: 'e28', title: 'First meeting of Constituent Assembly', year: 1946, subject: 'Political Science' },
      { id: 'e29', title: 'Objective Resolution passed', year: 1947, subject: 'Political Science' },
      { id: 'e30', title: 'Constitution adopted', year: 1949, subject: 'Political Science' },
      { id: 'e31', title: 'Constitution came into force', year: 1950, subject: 'Political Science' },
      { id: 'e32', title: 'First Amendment to Constitution', year: 1951, subject: 'Political Science' },
    ]
  }
];

const EventSorting: React.FC<EventSortingProps> = ({ onClose }) => {
  const [currentChallenge, setCurrentChallenge] = useState<Challenge | null>(null);
  const [userOrder, setUserOrder] = useState<Event[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    loadRandomChallenge();
  }, []);

  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && timerActive) {
      handleSubmit();
    }
  }, [timeLeft, timerActive]);

  const loadRandomChallenge = () => {
    const randomChallenge = CHALLENGES[Math.floor(Math.random() * CHALLENGES.length)];
    const shuffledEvents = [...randomChallenge.events].sort(() => Math.random() - 0.5);
    setCurrentChallenge(randomChallenge);
    setUserOrder(shuffledEvents);
    setShowResult(false);
    setIsCorrect(false);
    setTimeLeft(60);
    setTimerActive(true);
  };

  const moveEvent = (index: number, direction: 'up' | 'down') => {
    const newOrder = [...userOrder];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (targetIndex < 0 || targetIndex >= newOrder.length) return;
    
    [newOrder[index], newOrder[targetIndex]] = [newOrder[targetIndex], newOrder[index]];
    setUserOrder(newOrder);
  };

  const handleSubmit = () => {
    if (!currentChallenge) return;
    
    setTimerActive(false);
    const correctOrder = [...currentChallenge.events].sort((a, b) => a.year - b.year);
    const isOrderCorrect = userOrder.every((event, idx) => event.id === correctOrder[idx].id);
    
    setIsCorrect(isOrderCorrect);
    setShowResult(true);
    setAttempts(attempts + 1);
    
    if (isOrderCorrect) {
      const timeBonus = timeLeft > 30 ? 2 : timeLeft > 10 ? 1 : 0;
      setScore(score + 10 + timeBonus);
    }
  };

  const reset = () => {
    loadRandomChallenge();
    setAttempts(0);
    setScore(0);
  };

  if (!currentChallenge) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-indigo-500/30">
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 flex justify-between items-center rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
              <Clock className="w-7 h-7" />
              Event Timeline Sorter
            </h2>
            <p className="text-indigo-100 text-sm">Arrange events in chronological order</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition-all"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* Stats Bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-3">
              <div className="bg-white/10 px-4 py-2 rounded-lg">
                <p className="text-sm text-slate-300">Score</p>
                <p className="text-2xl font-bold text-white">{score}</p>
              </div>
              <div className="bg-purple-500/20 px-4 py-2 rounded-lg border border-purple-500/30">
                <p className="text-sm text-purple-200">Attempts</p>
                <p className="text-2xl font-bold text-purple-300">{attempts}</p>
              </div>
              <div className={`px-4 py-2 rounded-lg border ${
                timeLeft > 30 
                  ? 'bg-green-500/20 border-green-500/30' 
                  : timeLeft > 10 
                  ? 'bg-yellow-500/20 border-yellow-500/30'
                  : 'bg-red-500/20 border-red-500/30 animate-pulse'
              }`}>
                <p className="text-sm text-slate-300">Time</p>
                <p className={`text-2xl font-bold ${
                  timeLeft > 30 ? 'text-green-300' : timeLeft > 10 ? 'text-yellow-300' : 'text-red-300'
                }`}>
                  {timeLeft}s
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={loadRandomChallenge}
                className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all flex items-center gap-2"
              >
                <Shuffle className="w-4 h-4" />
                New
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

          {/* Subject */}
          <div className="mb-4">
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
              {currentChallenge.subject}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">
            Arrange these {currentChallenge.events.length} events from earliest to latest
          </h3>

          {/* Events List */}
          <div className="space-y-3 mb-6">
            {userOrder.map((event, index) => (
              <div
                key={event.id}
                className={`bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-4 border-2 ${
                  showResult
                    ? [...currentChallenge.events].sort((a, b) => a.year - b.year)[index]?.id === event.id
                      ? 'border-green-500 bg-green-500/10'
                      : 'border-red-500 bg-red-500/10'
                    : 'border-indigo-500/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-indigo-500/20 text-indigo-300 w-10 h-10 rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-white font-medium">{event.title}</p>
                      {showResult && (
                        <p className="text-sm text-slate-400 mt-1">Year: {event.year}</p>
                      )}
                    </div>
                  </div>
                  {!showResult && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => moveEvent(index, 'up')}
                        disabled={index === 0}
                        className="px-3 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        ↑
                      </button>
                      <button
                        onClick={() => moveEvent(index, 'down')}
                        disabled={index === userOrder.length - 1}
                        className="px-3 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        ↓
                      </button>
                    </div>
                  )}
                  {showResult && (
                    <div>
                      {[...currentChallenge.events].sort((a, b) => a.year - b.year)[index]?.id === event.id ? (
                        <CheckCircle2 className="w-8 h-8 text-green-400" />
                      ) : (
                        <XCircle className="w-8 h-8 text-red-400" />
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Result */}
          {showResult && (
            <div className={`${
              isCorrect 
                ? 'bg-green-500/20 border-green-500' 
                : 'bg-red-500/20 border-red-500'
            } border-2 rounded-xl p-6 mb-6 text-center`}>
              <div className="text-6xl mb-3">{isCorrect ? '🎉' : '😔'}</div>
              <h4 className={`text-2xl font-bold mb-2 ${isCorrect ? 'text-green-300' : 'text-red-300'}`}>
                {isCorrect ? 'Perfect Timeline!' : 'Not Quite Right'}
              </h4>
              <p className="text-white text-lg">
                {isCorrect 
                  ? `You earned ${10 + (timeLeft > 30 ? 2 : timeLeft > 10 ? 1 : 0)} points!` 
                  : 'Review the correct order above and try again!'}
              </p>
            </div>
          )}

          {/* Action Button */}
          {!showResult ? (
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:from-indigo-600 hover:to-purple-700 transition-all"
            >
              Submit Timeline
            </button>
          ) : (
            <button
              onClick={loadRandomChallenge}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:from-indigo-600 hover:to-purple-700 transition-all flex items-center justify-center gap-2"
            >
              <Shuffle className="w-5 h-5" />
              Next Challenge
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventSorting;