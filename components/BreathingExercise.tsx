import React, { useState, useEffect } from 'react';
import { Wind, X, Play, Pause, RotateCcw, Heart } from 'lucide-react';

interface BreathingExerciseProps {
  onClose: () => void;
}

type Phase = 'inhale' | 'hold' | 'exhale' | 'rest';

const BREATHING_PATTERNS = {
  '4-4-4': { inhale: 4, hold: 4, exhale: 4, rest: 0, name: 'Box Breathing', description: 'Classic stress relief' },
  '4-7-8': { inhale: 4, hold: 7, exhale: 8, rest: 0, name: 'Relaxing Breath', description: 'For deep relaxation' },
  '5-5-5': { inhale: 5, hold: 5, exhale: 5, rest: 0, name: 'Equal Breathing', description: 'Balance & calm' },
  '3-3-3': { inhale: 3, hold: 3, exhale: 3, rest: 0, name: 'Quick Calm', description: 'Fast anxiety relief' },
};

const BreathingExercise: React.FC<BreathingExerciseProps> = ({ onClose }) => {
  const [pattern, setPattern] = useState<keyof typeof BREATHING_PATTERNS>('4-4-4');
  const [isRunning, setIsRunning] = useState(false);
  const [phase, setPhase] = useState<Phase>('inhale');
  const [countdown, setCountdown] = useState(4);
  const [cycles, setCycles] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);

  const currentPattern = BREATHING_PATTERNS[pattern];

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          // Move to next phase
          setPhase(currentPhase => {
            if (currentPhase === 'inhale') {
              return currentPattern.hold > 0 ? 'hold' : 'exhale';
            } else if (currentPhase === 'hold') {
              return 'exhale';
            } else if (currentPhase === 'exhale') {
              setCycles(c => c + 1);
              return 'inhale';
            }
            return 'inhale';
          });
          
          // Set next countdown based on next phase
          return phase === 'inhale' ? currentPattern.hold || currentPattern.exhale :
                 phase === 'hold' ? currentPattern.exhale :
                 currentPattern.inhale;
        }
        return prev - 1;
      });
      
      setTotalSeconds(t => t + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, phase, currentPattern]);

  // Reset when pattern changes
  useEffect(() => {
    setPhase('inhale');
    setCountdown(currentPattern.inhale);
    setCycles(0);
    setTotalSeconds(0);
    setIsRunning(false);
  }, [pattern]);

  const getPhaseColor = () => {
    switch (phase) {
      case 'inhale': return 'from-blue-400 to-cyan-500';
      case 'hold': return 'from-purple-400 to-pink-500';
      case 'exhale': return 'from-green-400 to-emerald-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getPhaseText = () => {
    switch (phase) {
      case 'inhale': return 'Breathe In';
      case 'hold': return 'Hold';
      case 'exhale': return 'Breathe Out';
      default: return 'Rest';
    }
  };

  const getCircleScale = () => {
    if (!isRunning) return 1;
    if (phase === 'inhale') return 1.3;
    if (phase === 'hold') return 1.3;
    if (phase === 'exhale') return 0.8;
    return 1;
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-3xl max-w-md w-full overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wind className="w-6 h-6" />
              <span className="font-bold text-lg">Breathing Exercise</span>
            </div>
            <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-teal-100 text-sm mt-1">Calm your exam anxiety</p>
        </div>

        {/* Pattern Selection */}
        <div className="p-4 border-b border-gray-100 dark:border-gray-700">
          <div className="grid grid-cols-2 gap-2">
            {(Object.keys(BREATHING_PATTERNS) as (keyof typeof BREATHING_PATTERNS)[]).map(key => (
              <button
                key={key}
                onClick={() => setPattern(key)}
                className={`p-3 rounded-xl text-left transition ${
                  pattern === key
                    ? 'bg-teal-100 dark:bg-teal-900/30 border-2 border-teal-500'
                    : 'bg-gray-50 dark:bg-gray-700 border-2 border-transparent'
                }`}
              >
                <span className="font-bold text-sm dark:text-white">{BREATHING_PATTERNS[key].name}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 block">{key} • {BREATHING_PATTERNS[key].description}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Breathing Circle */}
        <div className="p-8 flex flex-col items-center">
          <div className="relative">
            {/* Animated Circle */}
            <div 
              className={`w-48 h-48 rounded-full bg-gradient-to-br ${getPhaseColor()} flex items-center justify-center transition-transform duration-1000 ease-in-out shadow-xl`}
              style={{ transform: `scale(${getCircleScale()})` }}
            >
              <div className="text-center text-white">
                <div className="text-5xl font-bold">{countdown}</div>
                <div className="text-lg font-medium opacity-90">{getPhaseText()}</div>
              </div>
            </div>

            {/* Pulse rings */}
            {isRunning && (
              <>
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${getPhaseColor()} opacity-20 animate-ping`} />
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${getPhaseColor()} opacity-10 animate-pulse`} />
              </>
            )}
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-8 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-800 dark:text-white">{cycles}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Cycles</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800 dark:text-white">{formatTime(totalSeconds)}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Duration</div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="p-4 bg-gray-50 dark:bg-gray-900">
          <div className="flex gap-3">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-lg transition ${
                isRunning
                  ? 'bg-orange-500 text-white hover:bg-orange-600'
                  : 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white hover:opacity-90'
              }`}
            >
              {isRunning ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              {isRunning ? 'Pause' : 'Start'}
            </button>
            <button
              onClick={() => {
                setPhase('inhale');
                setCountdown(currentPattern.inhale);
                setCycles(0);
                setTotalSeconds(0);
                setIsRunning(false);
              }}
              className="p-4 bg-gray-200 dark:bg-gray-700 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              <RotateCcw className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-3 flex items-center justify-center gap-1">
            <Heart className="w-3 h-3" />
            Take deep breaths before your exam for better focus
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreathingExercise;
