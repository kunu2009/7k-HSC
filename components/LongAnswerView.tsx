
import React, { useState } from 'react';
import { LongAnswer } from '../types';
import MarkdownRenderer from './MarkdownRenderer';
import { ChevronDown, ChevronUp, Clock, AlertCircle, Award } from 'lucide-react';

interface LongAnswerViewProps {
  answers: LongAnswer[];
  onBack: () => void;
}

const LongAnswerView: React.FC<LongAnswerViewProps> = ({ answers, onBack }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleAnswer = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-950 font-sans">
      {/* Header handled by parent, but we add a Strategy Section */}
      <div className="p-4 sm:p-6 pb-24 overflow-y-auto">
        
        {/* Exam Strategy Card */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-5 mb-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-100 dark:bg-amber-800/50 text-amber-600 dark:text-amber-400 rounded-xl shrink-0">
              <Award size={24} />
            </div>
            <div>
              <h3 className="font-bold text-amber-900 dark:text-amber-100 text-lg mb-2">Winning Strategy (8 Marks)</h3>
              <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-200/80">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                  <span><strong>Structure:</strong> 1 Introduction (4 lines) + <strong>10 Points</strong>.</span>
                </li>
                 <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                  <span><strong>Content:</strong> Write 3-4 lines for every point.</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                  <span><strong>Time:</strong> Aim to complete in <strong>30 minutes</strong>.</span>
                </li>
                 <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                  <span><strong>Tip:</strong> Even if you forget a point, create one! Write 10 points.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          <h2 className="text-slate-900 dark:text-white font-bold text-xl px-2">Sure Shot Questions</h2>
          
          {answers.length === 0 ? (
            <div className="p-8 text-center text-slate-500">No long answers added for this chapter yet.</div>
          ) : (
            answers.map((item, index) => (
              <div 
                key={item.id} 
                className={`bg-white dark:bg-slate-900 rounded-2xl border transition-all duration-300 overflow-hidden ${expandedId === item.id ? 'border-indigo-500 ring-2 ring-indigo-100 dark:ring-indigo-900 shadow-lg' : 'border-slate-200 dark:border-slate-800 shadow-sm'}`}
              >
                <button 
                  onClick={() => toggleAnswer(item.id)}
                  className="w-full text-left p-5 flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-bold text-sm shrink-0">
                      Q{index + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-800 dark:text-slate-200 text-lg leading-tight">{item.question}</h3>
                      {item.mnemonic && (
                         <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold border border-indigo-100 dark:border-indigo-800">
                           <span className="uppercase tracking-wider">Mnemonic:</span>
                           <span className="text-indigo-600 dark:text-indigo-200">{item.mnemonic}</span>
                         </div>
                      )}
                    </div>
                  </div>
                  <div className={`p-2 rounded-full transition-colors ${expandedId === item.id ? 'bg-indigo-100 text-indigo-600' : 'text-slate-400'}`}>
                    {expandedId === item.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {/* Expanded Answer Content */}
                {expandedId === item.id && (
                  <div className="px-5 pb-8 pt-2 animate-in fade-in slide-in-from-top-2">
                    <div className="w-full h-px bg-slate-100 dark:bg-slate-800 mb-6"></div>
                    <div className="prose prose-slate dark:prose-invert max-w-none prose-p:my-2 prose-headings:text-indigo-900 dark:prose-headings:text-indigo-200">
                      <MarkdownRenderer content={item.answer} />
                    </div>
                    <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400 text-xs font-medium uppercase tracking-widest">
                      End of Answer
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LongAnswerView;
