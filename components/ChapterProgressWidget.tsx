import React, { useState } from 'react';
import { CheckCircle2, Circle, BookOpen, Calendar, Target, ChevronDown, ChevronUp, Flame, Clock } from 'lucide-react';
import { OverallProgress, SubjectProgress } from '../hooks/useChapterCompletion';

interface ChapterProgressWidgetProps {
  overallProgress: OverallProgress;
  subjectProgressList: SubjectProgress[];
}

const ChapterProgressWidget: React.FC<ChapterProgressWidgetProps> = ({
  overallProgress,
  subjectProgressList,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showPrelims, setShowPrelims] = useState(true);

  const {
    totalChapters,
    completedChapters,
    remainingChapters,
    percentComplete,
    daysLeftPrelims,
    daysLeftBoards,
    chaptersPerDayPrelimsWithBuffer,
    chaptersPerDayBoardsWithBuffer,
    revisionDaysPrelims,
    revisionDaysBoards,
  } = overallProgress;

  const chaptersPerDay = showPrelims ? chaptersPerDayPrelimsWithBuffer : chaptersPerDayBoardsWithBuffer;
  const daysLeft = showPrelims ? daysLeftPrelims : daysLeftBoards;
  const revisionDays = showPrelims ? revisionDaysPrelims : revisionDaysBoards;

  // Progress bar color based on pace
  const getProgressColor = () => {
    if (percentComplete >= 80) return 'bg-green-500';
    if (percentComplete >= 50) return 'bg-yellow-500';
    if (percentComplete >= 25) return 'bg-orange-500';
    return 'bg-red-500';
  };

  // Urgency indicator
  const getUrgencyLevel = () => {
    if (chaptersPerDay <= 0.5) return { text: 'On Track! 🎉', color: 'text-green-600 dark:text-green-400' };
    if (chaptersPerDay <= 1) return { text: 'Good Pace 👍', color: 'text-blue-600 dark:text-blue-400' };
    if (chaptersPerDay <= 2) return { text: 'Keep Pushing 💪', color: 'text-yellow-600 dark:text-yellow-400' };
    if (chaptersPerDay <= 3) return { text: 'Need to Speed Up ⚡', color: 'text-orange-600 dark:text-orange-400' };
    return { text: 'Critical! 🔥', color: 'text-red-600 dark:text-red-400' };
  };

  const urgency = getUrgencyLevel();

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 p-5 mb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
            <BookOpen size={20} className="text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 dark:text-white">Syllabus Progress</h3>
            <p className={`text-xs font-medium ${urgency.color}`}>{urgency.text}</p>
          </div>
        </div>
        
        {/* Toggle Prelims/Boards */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 rounded-full p-1">
          <button
            onClick={() => setShowPrelims(true)}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
              showPrelims 
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm' 
                : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            Prelims
          </button>
          <button
            onClick={() => setShowPrelims(false)}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
              !showPrelims 
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm' 
                : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            Boards
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-slate-600 dark:text-slate-400">
            <span className="font-bold text-slate-800 dark:text-white">{completedChapters}</span> / {totalChapters} chapters done
          </span>
          <span className="font-bold text-slate-800 dark:text-white">{percentComplete}%</span>
        </div>
        <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div 
            className={`h-full ${getProgressColor()} rounded-full transition-all duration-500`}
            style={{ width: `${percentComplete}%` }}
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-orange-500 mb-1">
            <Circle size={14} />
          </div>
          <div className="text-xl font-black text-slate-800 dark:text-white">{remainingChapters}</div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase">Left</div>
        </div>
        
        <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-red-500 mb-1">
            <Flame size={14} />
          </div>
          <div className="text-xl font-black text-slate-800 dark:text-white">
            {chaptersPerDay === 0 ? '✓' : chaptersPerDay.toFixed(1)}
          </div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase">Per Day</div>
        </div>
        
        <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-green-500 mb-1">
            <Clock size={14} />
          </div>
          <div className="text-xl font-black text-slate-800 dark:text-white">{revisionDays}</div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium uppercase">Revision Days</div>
        </div>
      </div>

      {/* Target Message */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-3 mb-3">
        <p className="text-sm text-slate-700 dark:text-slate-300">
          {remainingChapters === 0 ? (
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500" />
              <span className="font-medium">All chapters complete! Focus on revision now.</span>
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Target size={16} className="text-indigo-500" />
              <span>
                Complete <strong>{Math.ceil(chaptersPerDay)}</strong> chapter{Math.ceil(chaptersPerDay) !== 1 ? 's' : ''}/day 
                to finish with <strong>{revisionDays}</strong> days for revision before {showPrelims ? 'prelims' : 'boards'}!
              </span>
            </span>
          )}
        </p>
      </div>

      {/* Expand/Collapse Button */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="w-full flex items-center justify-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-1"
      >
        {showDetails ? (
          <>
            Hide Subject Breakdown <ChevronUp size={16} />
          </>
        ) : (
          <>
            Show Subject Breakdown <ChevronDown size={16} />
          </>
        )}
      </button>

      {/* Subject Details */}
      {showDetails && (
        <div className="mt-4 space-y-3 border-t border-slate-100 dark:border-slate-800 pt-4">
          {subjectProgressList.map((subj) => {
            const perDay = showPrelims ? subj.chaptersPerDayPrelims : subj.chaptersPerDayBoards;
            const subjPercent = subj.percentComplete;
            
            return (
              <div key={subj.subjectId} className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{subj.subjectName}</span>
                    <span className="text-xs text-slate-500">
                      {subj.completedChapters}/{subj.totalChapters} 
                      {subj.remainingChapters > 0 && (
                        <span className="text-orange-500 ml-2">({perDay.toFixed(1)}/day)</span>
                      )}
                    </span>
                  </div>
                  <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all ${
                        subjPercent >= 80 ? 'bg-green-500' : 
                        subjPercent >= 50 ? 'bg-yellow-500' : 
                        subjPercent >= 25 ? 'bg-orange-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${subjPercent}%` }}
                    />
                  </div>
                </div>
                <span className="text-sm font-bold text-slate-600 dark:text-slate-400 w-10 text-right">
                  {subjPercent}%
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ChapterProgressWidget;
