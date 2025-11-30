import React from 'react';
import { Reel } from '../types';
import { Share2, Bookmark, Heart, ArrowLeft, CheckCircle } from 'lucide-react';

interface ReelViewProps {
  reels: Reel[];
  onClose: () => void;
  onComplete?: (viewed: number, total: number) => void;
}

const ReelView: React.FC<ReelViewProps> = ({ reels, onClose, onComplete }) => {
  if (reels.length === 0) return <div className="p-10 text-center text-white">No Reels Available</div>;

  const handleComplete = () => {
    if (onComplete) {
      onComplete(reels.length, reels.length);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col font-sans">
      <div className="absolute top-0 left-0 w-full p-4 z-50 flex justify-between items-start bg-gradient-to-b from-black/60 to-transparent pb-12">
         <button 
          onClick={onClose}
          className="text-white bg-white/10 p-3 rounded-full backdrop-blur-md hover:bg-white/20 transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="text-white font-bold tracking-widest text-sm opacity-80 pt-2">REELS MODE</div>
        <button 
          onClick={handleComplete}
          className="text-white bg-emerald-500/80 p-3 rounded-full backdrop-blur-md hover:bg-emerald-500 transition-colors flex items-center gap-2"
          title="Mark all viewed"
        >
          <CheckCircle size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-scroll snap-y snap-mandatory no-scrollbar h-screen w-full">
        {reels.map((reel) => (
          <div 
            key={reel.id} 
            className={`w-full h-full snap-center relative flex flex-col justify-center items-center p-8 ${reel.color}`}
          >
             {/* Gradient Overlay for Text Readability */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none"></div>

            <div className="max-w-md text-center relative z-10">
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-8 leading-tight drop-shadow-lg uppercase tracking-tight">
                {reel.title}
              </h2>
              <div className="bg-black/20 backdrop-blur-lg p-6 rounded-3xl border border-white/10 shadow-2xl">
                <p className="text-xl sm:text-2xl text-white font-medium leading-relaxed whitespace-pre-wrap drop-shadow-sm">
                  {reel.content}
                </p>
              </div>
            </div>

            <div className="absolute bottom-12 right-6 flex flex-col gap-8 items-center z-20">
              <button className="group flex flex-col items-center gap-1 text-white transition">
                <div className="p-3 bg-black/20 backdrop-blur-md rounded-full group-hover:bg-red-500/80 group-hover:scale-110 transition-all duration-300">
                  <Heart size={28} fill="currentColor" className="text-white group-hover:text-white" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">Like</span>
              </button>
              <button className="group flex flex-col items-center gap-1 text-white transition">
                 <div className="p-3 bg-black/20 backdrop-blur-md rounded-full group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                  <Bookmark size={28} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">Save</span>
              </button>
               <button className="group flex flex-col items-center gap-1 text-white transition">
                 <div className="p-3 bg-black/20 backdrop-blur-md rounded-full group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                  <Share2 size={28} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">Share</span>
              </button>
            </div>
            
            <div className="absolute bottom-8 left-8 text-white/50 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              Live Learning
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReelView;
