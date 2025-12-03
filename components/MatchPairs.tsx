import React, { useState, useEffect } from 'react';
import { Shuffle, ChevronRight, Check, X, Clock, Zap, Brain, Target, RotateCcw } from 'lucide-react';
import { Subject, Question } from '../types';

interface MatchPairsProps {
  subjects: Subject[];
  onClose: () => void;
}

interface Pair {
  id: string;
  left: string;
  right: string;
  subject: string;
  chapter: string;
}

const MatchPairs: React.FC<MatchPairsProps> = ({ subjects, onClose }) => {
  const [pairs, setPairs] = useState<Pair[]>([]);
  const [leftItems, setLeftItems] = useState<{ id: string; text: string; matched: boolean }[]>([]);
  const [rightItems, setRightItems] = useState<{ id: string; text: string; matched: boolean }[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [wrongMatch, setWrongMatch] = useState<{ left: string; right: string } | null>(null);

  // Generate pairs from flashcards
  useEffect(() => {
    const allPairs: Pair[] = [];
    
    subjects.forEach(subject => {
      subject.chapters.forEach(chapter => {
        if (chapter.flashcards) {
          chapter.flashcards.slice(0, 10).forEach((fc, idx) => {
            // Only use short front/back for matching
            if (fc.front.length < 50 && fc.back.length < 80) {
              allPairs.push({
                id: `${subject.name}-${chapter.id}-${idx}`,
                left: fc.front,
                right: fc.back,
                subject: subject.name,
                chapter: chapter.title,
              });
            }
          });
        }
      });
    });

    // Shuffle and select 6 pairs
    const shuffled = allPairs.sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 6);
    
    setPairs(selected);
    setLeftItems(selected.map(p => ({ id: p.id, text: p.left, matched: false })).sort(() => Math.random() - 0.5));
    setRightItems(selected.map(p => ({ id: p.id, text: p.right, matched: false })).sort(() => Math.random() - 0.5));
    setIsRunning(true);
  }, [subjects]);

  // Timer
  useEffect(() => {
    if (!isRunning || gameComplete) return;
    
    const timer = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, gameComplete]);

  const handleLeftClick = (id: string) => {
    const item = leftItems.find(i => i.id === id);
    if (item?.matched) return;
    setSelectedLeft(id);
    setWrongMatch(null);
  };

  const handleRightClick = (id: string) => {
    if (!selectedLeft) return;
    
    const rightItem = rightItems.find(i => i.id === id);
    if (rightItem?.matched) return;

    setAttempts(prev => prev + 1);

    if (selectedLeft === id) {
      // Correct match
      setScore(prev => prev + 1);
      setLeftItems(prev => prev.map(i => i.id === id ? { ...i, matched: true } : i));
      setRightItems(prev => prev.map(i => i.id === id ? { ...i, matched: true } : i));
      
      // Check if game complete
      const matchedCount = leftItems.filter(i => i.matched).length + 1;
      if (matchedCount >= pairs.length) {
        setGameComplete(true);
        setIsRunning(false);
      }
    } else {
      // Wrong match
      setWrongMatch({ left: selectedLeft, right: id });
      setTimeout(() => setWrongMatch(null), 500);
    }
    
    setSelectedLeft(null);
  };

  const resetGame = () => {
    const shuffledPairs = pairs.sort(() => Math.random() - 0.5);
    setLeftItems(shuffledPairs.map(p => ({ id: p.id, text: p.left, matched: false })).sort(() => Math.random() - 0.5));
    setRightItems(shuffledPairs.map(p => ({ id: p.id, text: p.right, matched: false })).sort(() => Math.random() - 0.5));
    setSelectedLeft(null);
    setScore(0);
    setAttempts(0);
    setTimeElapsed(0);
    setGameComplete(false);
    setIsRunning(true);
    setWrongMatch(null);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const accuracy = attempts > 0 ? Math.round((score / attempts) * 100) : 0;

  if (pairs.length === 0) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center max-w-md">
          <Brain className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h2 className="text-xl font-bold dark:text-white mb-2">No Pairs Available</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Add flashcards to generate matching pairs.
          </p>
          <button onClick={onClose} className="px-6 py-2 bg-blue-500 text-white rounded-lg">
            Close
          </button>
        </div>
      </div>
    );
  }

  // Game Complete Screen
  if (gameComplete) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full p-6">
          <div className="text-center mb-6 p-6 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white">
            <Target className="w-12 h-12 mx-auto mb-2" />
            <div className="text-4xl font-bold mb-1">🎉 Perfect!</div>
            <div className="text-lg opacity-90">All pairs matched!</div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
              <Clock className="w-6 h-6 mx-auto mb-1 text-blue-500" />
              <div className="font-bold text-blue-600 dark:text-blue-400">{formatTime(timeElapsed)}</div>
              <div className="text-xs text-gray-500">Time</div>
            </div>
            <div className="text-center p-3 bg-green-50 dark:bg-green-900/30 rounded-xl">
              <Check className="w-6 h-6 mx-auto mb-1 text-green-500" />
              <div className="font-bold text-green-600 dark:text-green-400">{score}/{pairs.length}</div>
              <div className="text-xs text-gray-500">Matched</div>
            </div>
            <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/30 rounded-xl">
              <Zap className="w-6 h-6 mx-auto mb-1 text-purple-500" />
              <div className="font-bold text-purple-600 dark:text-purple-400">{accuracy}%</div>
              <div className="text-xs text-gray-500">Accuracy</div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={resetGame}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-medium"
            >
              <RotateCcw className="w-5 h-5" />
              Play Again
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Shuffle className="w-6 h-6 text-purple-500" />
              <h2 className="text-xl font-bold dark:text-white">Match the Pairs</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{formatTime(timeElapsed)}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <Check className="w-4 h-4 text-green-500" />
              <span className="font-bold text-green-600 dark:text-green-400">{score}/{pairs.length}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <Target className="w-4 h-4 text-purple-500" />
              <span className="font-bold text-purple-600 dark:text-purple-400">{accuracy}%</span>
            </div>
          </div>
        </div>

        {/* Game Area */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="flex gap-4">
            {/* Left Column - Terms */}
            <div className="flex-1 space-y-2">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 px-2">TERMS</div>
              {leftItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleLeftClick(item.id)}
                  disabled={item.matched}
                  className={`w-full p-4 rounded-xl text-left transition-all ${
                    item.matched
                      ? 'bg-green-100 dark:bg-green-900/30 border-2 border-green-500 opacity-60'
                      : selectedLeft === item.id
                      ? 'bg-purple-100 dark:bg-purple-900/30 border-2 border-purple-500 scale-105'
                      : wrongMatch?.left === item.id
                      ? 'bg-red-100 dark:bg-red-900/30 border-2 border-red-500 animate-shake'
                      : 'bg-gray-50 dark:bg-gray-700 border-2 border-transparent hover:border-purple-300'
                  }`}
                >
                  <span className="font-medium dark:text-white text-sm">{item.text}</span>
                </button>
              ))}
            </div>

            {/* Connector */}
            <div className="flex flex-col items-center justify-center">
              <ChevronRight className="w-8 h-8 text-gray-300 dark:text-gray-600" />
            </div>

            {/* Right Column - Definitions */}
            <div className="flex-1 space-y-2">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 px-2">DEFINITIONS</div>
              {rightItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleRightClick(item.id)}
                  disabled={item.matched || !selectedLeft}
                  className={`w-full p-4 rounded-xl text-left transition-all ${
                    item.matched
                      ? 'bg-green-100 dark:bg-green-900/30 border-2 border-green-500 opacity-60'
                      : wrongMatch?.right === item.id
                      ? 'bg-red-100 dark:bg-red-900/30 border-2 border-red-500 animate-shake'
                      : selectedLeft
                      ? 'bg-gray-50 dark:bg-gray-700 border-2 border-transparent hover:border-blue-300 cursor-pointer'
                      : 'bg-gray-50 dark:bg-gray-700 border-2 border-transparent opacity-70'
                  }`}
                >
                  <span className="text-sm text-gray-700 dark:text-gray-300">{item.text}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              💡 Click a term, then click its matching definition
            </p>
            <button
              onClick={resetGame}
              className="flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/50"
            >
              <Shuffle className="w-4 h-4" />
              Shuffle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchPairs;
