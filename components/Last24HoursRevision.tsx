import React, { useState, useMemo } from 'react';
import { X, Clock, Zap, BookOpen, CheckCircle2, Star, AlertTriangle, ChevronRight, ChevronDown, Brain, Target } from 'lucide-react';
import { Subject, Chapter } from '../types';

interface Last24HoursRevisionProps {
  subject: Subject;
  onClose: () => void;
}

/**
 * Quick 24-hour revision component for exam day
 * Shows the most important points, formulas, and must-know facts
 */
const Last24HoursRevision: React.FC<Last24HoursRevisionProps> = ({ subject, onClose }) => {
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'overview' | 'flashcards' | 'keypoints'>('overview');

  // Extract key points from chapters
  const keyPoints = useMemo(() => {
    return subject.chapters.map(chapter => ({
      chapter,
      // Get first 5 flashcards as key points
      flashcards: chapter.flashcards.slice(0, 5),
      // Count content
      totalFlashcards: chapter.flashcards.length,
      totalMCQs: chapter.mcqs.length,
    }));
  }, [subject]);

  // Get all important flashcards (first 3 from each chapter)
  const criticalFlashcards = useMemo(() => {
    const cards: Array<{ card: { front: string; back: string }; chapter: string }> = [];
    subject.chapters.forEach(ch => {
      ch.flashcards.slice(0, 3).forEach(card => {
        cards.push({ card, chapter: ch.title });
      });
    });
    return cards;
  }, [subject]);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Clock size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-black">Last 24 Hours</h2>
                <p className="text-white/80 text-sm">{subject.name} Quick Revision</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition"
            >
              <X size={24} />
            </button>
          </div>

          {/* View Mode Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('overview')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition ${
                viewMode === 'overview'
                  ? 'bg-white text-orange-600'
                  : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              📋 Overview
            </button>
            <button
              onClick={() => setViewMode('flashcards')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition ${
                viewMode === 'flashcards'
                  ? 'bg-white text-orange-600'
                  : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              🎴 Key Cards
            </button>
            <button
              onClick={() => setViewMode('keypoints')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition ${
                viewMode === 'keypoints'
                  ? 'bg-white text-orange-600'
                  : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              ⭐ Must Know
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Exam Day Tips - Always visible */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" size={20} />
              <div>
                <h4 className="font-bold text-amber-900 dark:text-amber-200 mb-2">Exam Day Checklist</h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-amber-800 dark:text-amber-300">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" /> Admit Card
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" /> ID Proof
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" /> Pens (2-3 black/blue)
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" /> Water bottle
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" /> Watch (non-smart)
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" /> Reach 30 min early
                  </label>
                </div>
              </div>
            </div>
          </div>

          {viewMode === 'overview' && (
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-slate-800 dark:text-white flex items-center gap-2">
                <BookOpen size={20} className="text-orange-500" />
                Chapter Overview
              </h3>

              {keyPoints.map(({ chapter, flashcards, totalFlashcards, totalMCQs }) => (
                <div
                  key={chapter.id}
                  className="bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedChapter(expandedChapter === chapter.id ? null : chapter.id)}
                    className="w-full p-4 flex items-center gap-3 text-left hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                  >
                    <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold">
                      {chapter.id.replace(/[^0-9]/g, '') || '•'}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800 dark:text-white">{chapter.title}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {totalFlashcards} cards • {totalMCQs} MCQs
                      </p>
                    </div>
                    {expandedChapter === chapter.id ? (
                      <ChevronDown size={20} className="text-slate-400" />
                    ) : (
                      <ChevronRight size={20} className="text-slate-400" />
                    )}
                  </button>

                  {expandedChapter === chapter.id && (
                    <div className="px-4 pb-4 border-t border-slate-200 dark:border-slate-700 pt-4">
                      {/* Quick Summary */}
                      {chapter.summary && chapter.summary !== 'Pending...' && (
                        <div className="mb-4 p-3 bg-white dark:bg-slate-900 rounded-lg text-sm text-slate-600 dark:text-slate-300 whitespace-pre-wrap">
                          {chapter.summary.slice(0, 500)}...
                        </div>
                      )}

                      {/* Key Flashcards */}
                      <div className="space-y-2">
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Key Points</p>
                        {flashcards.map((card, idx) => (
                          <div key={idx} className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                            <p className="text-sm font-medium text-slate-800 dark:text-white">{card.front}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{card.back}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {viewMode === 'flashcards' && (
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-slate-800 dark:text-white flex items-center gap-2">
                <Star size={20} className="text-amber-500" />
                Critical Flashcards ({criticalFlashcards.length})
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Top 3 cards from each chapter - memorize these!
              </p>

              <div className="space-y-3">
                {criticalFlashcards.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-4 rounded-xl border border-orange-200 dark:border-orange-800"
                  >
                    <p className="text-xs text-orange-600 dark:text-orange-400 font-medium mb-2">
                      {item.chapter}
                    </p>
                    <p className="font-bold text-slate-800 dark:text-white mb-2">{item.card.front}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 bg-white/50 dark:bg-black/20 p-2 rounded">
                      {item.card.back}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {viewMode === 'keypoints' && (
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-slate-800 dark:text-white flex items-center gap-2">
                <Target size={20} className="text-red-500" />
                Must-Know Points
              </h3>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4">
                <h4 className="font-bold text-red-800 dark:text-red-200 mb-3">🎯 Exam Strategy</h4>
                <ul className="space-y-2 text-sm text-red-700 dark:text-red-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                    <span>Read all questions first - identify easy ones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                    <span>Attempt sure-shot answers first</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                    <span>Use proper format: Introduction → Body → Conclusion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                    <span>Write neat headings and underline keywords</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                    <span>Keep 10 mins for revision at the end</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3">⏱️ Time Management</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                    <p className="font-bold text-blue-600 dark:text-blue-400">1 Mark Q</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">1 minute each</p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                    <p className="font-bold text-blue-600 dark:text-blue-400">2 Mark Q</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">3-4 minutes each</p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                    <p className="font-bold text-blue-600 dark:text-blue-400">4 Mark Q</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">8-10 minutes each</p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-lg">
                    <p className="font-bold text-blue-600 dark:text-blue-400">8 Mark Q</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">15-18 minutes each</p>
                  </div>
                </div>
              </div>

              {/* Chapter-wise weightage hint */}
              <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4">
                <h4 className="font-bold text-emerald-800 dark:text-emerald-200 mb-3">📊 Chapter Weightage</h4>
                <p className="text-sm text-emerald-700 dark:text-emerald-300">
                  Focus on chapters with more content - they usually carry more marks!
                </p>
                <div className="mt-3 space-y-2">
                  {subject.chapters
                    .map(ch => ({ title: ch.title, count: ch.flashcards.length + ch.mcqs.length }))
                    .sort((a, b) => b.count - a.count)
                    .slice(0, 5)
                    .map((ch, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-emerald-200 dark:bg-emerald-800 rounded text-xs font-bold flex items-center justify-center text-emerald-800 dark:text-emerald-200">
                          {idx + 1}
                        </div>
                        <span className="text-sm text-emerald-700 dark:text-emerald-300 flex-1">{ch.title}</span>
                        <span className="text-xs text-emerald-600 dark:text-emerald-400">{ch.count} items</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800">
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            💪 You've prepared well. Stay calm and give your best!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Last24HoursRevision;
