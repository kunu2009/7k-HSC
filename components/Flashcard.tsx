import React, { useState } from 'react';
import { Flashcard as FlashcardType } from '../types';
import { RotateCw } from 'lucide-react';

interface FlashcardProps {
  card: FlashcardType;
}

const Flashcard: React.FC<FlashcardProps> = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="card-flip w-full h-96 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`card-inner relative w-full h-full text-center rounded-3xl shadow-xl transition-all duration-700 transform-style-3d ${isFlipped ? 'flipped' : ''}`}>
        
        {/* Front */}
        <div className="card-front absolute inset-0 w-full h-full bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center p-8 backface-hidden">
          <div className="w-full flex justify-between items-start absolute top-6 px-6">
            <span className="text-xs font-bold text-slate-300 dark:text-slate-500 uppercase tracking-widest">Front</span>
            <RotateCw size={16} className="text-indigo-400 opacity-50" />
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white leading-snug">{card.front}</h3>
          
          <div className="absolute bottom-6 text-sm font-medium text-indigo-500 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            Tap to Reveal
          </div>
        </div>
        
        {/* Back */}
        <div className="card-back absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-600 to-violet-700 dark:from-indigo-800 dark:to-violet-900 rounded-3xl flex flex-col items-center justify-center p-8 text-white backface-hidden transform-rotateY-180 border border-indigo-500">
           <div className="w-full flex justify-between items-start absolute top-6 px-6">
            <span className="text-xs font-bold text-indigo-200 uppercase tracking-widest">Back</span>
             <RotateCw size={16} className="text-indigo-200 opacity-50" />
          </div>

          <p className="text-lg sm:text-xl font-medium leading-relaxed drop-shadow-md">{card.back}</p>
        </div>

      </div>
      <style>{`
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .transform-rotateY-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
};

export default Flashcard;