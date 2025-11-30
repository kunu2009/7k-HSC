import React, { useState, useEffect } from 'react';
import { AlertTriangle, TrendingDown, Target, Lightbulb, ChevronDown, ChevronUp, Award, ArrowRight, BookOpen } from 'lucide-react';

interface SubjectMark {
  subjectId: string;
  subjectName: string;
  marks: number | null;
  maxMarks: number;
}

interface PreviousMarksData {
  examName: string;
  examDate: string;
  subjects: SubjectMark[];
  totalMarks: number;
  totalMaxMarks: number;
  percentage: number;
}

const STORAGE_KEY = '7k-hsc-previous-marks';

interface SubjectAnalysis {
  subjectId: string;
  subjectName: string;
  latestPercentage: number;
  averagePercentage: number;
  trend: 'improving' | 'declining' | 'stable' | 'insufficient';
  priority: 'critical' | 'high' | 'medium' | 'low';
  suggestion: string;
}

const WeaknessAnalysis: React.FC = () => {
  const [marksData, setMarksData] = useState<PreviousMarksData[]>([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setMarksData(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse previous marks');
      }
    }
  }, []);

  // No marks data - don't show anything
  if (marksData.length === 0) {
    return null;
  }

  // Analyze each subject
  const analyzeSubjects = (): SubjectAnalysis[] => {
    const subjectMap = new Map<string, { name: string; marks: number[]; maxMarks: number[] }>();

    // Collect all marks per subject
    marksData.forEach(exam => {
      exam.subjects.forEach(sub => {
        if (sub.marks !== null) {
          if (!subjectMap.has(sub.subjectId)) {
            subjectMap.set(sub.subjectId, { name: sub.subjectName, marks: [], maxMarks: [] });
          }
          const data = subjectMap.get(sub.subjectId)!;
          data.marks.push(sub.marks);
          data.maxMarks.push(sub.maxMarks);
        }
      });
    });

    const analyses: SubjectAnalysis[] = [];

    subjectMap.forEach((data, subjectId) => {
      const percentages = data.marks.map((m, i) => (m / data.maxMarks[i]) * 100);
      const latestPercentage = percentages[percentages.length - 1];
      const averagePercentage = percentages.reduce((a, b) => a + b, 0) / percentages.length;

      // Determine trend
      let trend: SubjectAnalysis['trend'] = 'insufficient';
      if (percentages.length >= 2) {
        const recentAvg = percentages.slice(-Math.min(2, percentages.length)).reduce((a, b) => a + b, 0) / Math.min(2, percentages.length);
        const olderAvg = percentages.slice(0, -2).length > 0 
          ? percentages.slice(0, -2).reduce((a, b) => a + b, 0) / percentages.slice(0, -2).length
          : percentages[0];
        
        if (recentAvg - olderAvg > 5) trend = 'improving';
        else if (olderAvg - recentAvg > 5) trend = 'declining';
        else trend = 'stable';
      }

      // Determine priority based on percentage
      let priority: SubjectAnalysis['priority'];
      if (latestPercentage < 40) priority = 'critical';
      else if (latestPercentage < 55) priority = 'high';
      else if (latestPercentage < 70) priority = 'medium';
      else priority = 'low';

      // Generate suggestion based on analysis
      let suggestion = '';
      if (priority === 'critical') {
        suggestion = `Focus heavily on ${data.name}. Start with basic concepts and cover all chapters systematically. Aim for at least 30 mins daily.`;
      } else if (priority === 'high') {
        suggestion = `${data.name} needs attention. Identify weak chapters and practice more MCQs. Review notes before exams.`;
      } else if (priority === 'medium') {
        suggestion = `${data.name} is decent but can improve. Focus on difficult topics and solve previous year papers.`;
      } else {
        suggestion = `${data.name} is your strength! Maintain it by quick revisions. Help others to reinforce learning.`;
      }

      if (trend === 'declining') {
        suggestion += ' ⚠️ Your scores are declining - identify what changed and address it.';
      } else if (trend === 'improving') {
        suggestion += ' 📈 Great progress! Keep up the momentum.';
      }

      analyses.push({
        subjectId,
        subjectName: data.name,
        latestPercentage: Math.round(latestPercentage),
        averagePercentage: Math.round(averagePercentage),
        trend,
        priority,
        suggestion
      });
    });

    // Sort by priority (critical first)
    const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
    return analyses.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  };

  const analyses = analyzeSubjects();
  const criticalSubjects = analyses.filter(a => a.priority === 'critical');
  const highPrioritySubjects = analyses.filter(a => a.priority === 'high');
  const weakestSubject = analyses[0];

  // Calculate overall stats
  const latestExam = marksData[marksData.length - 1];
  const overallPercentage = latestExam?.percentage || 0;

  // Priority color mapping
  const getPriorityColor = (priority: SubjectAnalysis['priority']) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800';
      case 'high': return 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800';
      case 'medium': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800';
      case 'low': return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800';
    }
  };

  const getPriorityBadge = (priority: SubjectAnalysis['priority']) => {
    switch (priority) {
      case 'critical': return 'Critical';
      case 'high': return 'Needs Work';
      case 'medium': return 'Improve';
      case 'low': return 'Strong';
    }
  };

  const getTrendIcon = (trend: SubjectAnalysis['trend']) => {
    switch (trend) {
      case 'improving': return '📈';
      case 'declining': return '📉';
      case 'stable': return '➡️';
      default: return '❓';
    }
  };

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-2xl p-5 mb-6 border border-amber-200 dark:border-amber-800">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-500 rounded-xl text-white">
            <Target size={20} />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 dark:text-white">Weakness Analysis</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Based on your {marksData.length} previous exam(s)</p>
          </div>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="p-2 hover:bg-amber-100 dark:hover:bg-amber-900/30 rounded-lg transition"
        >
          {expanded ? <ChevronUp size={20} className="text-amber-600" /> : <ChevronDown size={20} className="text-amber-600" />}
        </button>
      </div>

      {/* Quick Summary - Always Visible */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-3 border border-slate-100 dark:border-slate-700">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Overall Score</p>
          <p className={`text-2xl font-black ${overallPercentage >= 60 ? 'text-emerald-600' : overallPercentage >= 40 ? 'text-amber-600' : 'text-red-600'}`}>
            {overallPercentage}%
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-3 border border-slate-100 dark:border-slate-700">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Focus Area</p>
          <p className="text-sm font-bold text-slate-700 dark:text-slate-200 truncate">
            {weakestSubject?.subjectName || 'N/A'}
          </p>
        </div>
      </div>

      {/* Critical Warning */}
      {criticalSubjects.length > 0 && (
        <div className="bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl p-3 mb-4 flex items-start gap-3">
          <AlertTriangle size={20} className="text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-red-700 dark:text-red-300 text-sm">
              Critical: {criticalSubjects.map(s => s.subjectName).join(', ')}
            </p>
            <p className="text-xs text-red-600 dark:text-red-400 mt-1">
              Below 40% - requires immediate attention!
            </p>
          </div>
        </div>
      )}

      {/* Top Suggestions - Always Visible */}
      {analyses.length > 0 && (
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb size={16} className="text-amber-500" />
            <span className="font-semibold text-sm text-slate-700 dark:text-slate-200">Top Recommendation</span>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {weakestSubject?.suggestion}
          </p>
        </div>
      )}

      {/* Expanded Details */}
      {expanded && (
        <div className="mt-4 space-y-3">
          <h4 className="font-bold text-slate-700 dark:text-slate-200 text-sm flex items-center gap-2">
            <BookOpen size={16} />
            Subject-wise Analysis
          </h4>
          
          {analyses.map(analysis => (
            <div 
              key={analysis.subjectId}
              className={`rounded-xl p-4 border ${getPriorityColor(analysis.priority)}`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold">{analysis.subjectName}</span>
                  <span className="text-lg">{getTrendIcon(analysis.trend)}</span>
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                  analysis.priority === 'critical' ? 'bg-red-500 text-white' :
                  analysis.priority === 'high' ? 'bg-orange-500 text-white' :
                  analysis.priority === 'medium' ? 'bg-yellow-500 text-white' :
                  'bg-green-500 text-white'
                }`}>
                  {getPriorityBadge(analysis.priority)}
                </span>
              </div>
              
              <div className="flex gap-4 text-sm mb-2">
                <span>Latest: <strong>{analysis.latestPercentage}%</strong></span>
                <span>Average: <strong>{analysis.averagePercentage}%</strong></span>
              </div>
              
              <p className="text-sm opacity-90">{analysis.suggestion}</p>
            </div>
          ))}

          {/* Study Tips */}
          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4 border border-indigo-100 dark:border-indigo-800 mt-4">
            <h4 className="font-bold text-indigo-800 dark:text-indigo-200 text-sm mb-3 flex items-center gap-2">
              <Award size={16} />
              General Tips to Improve
            </h4>
            <ul className="space-y-2 text-sm text-indigo-700 dark:text-indigo-300">
              <li className="flex items-start gap-2">
                <ArrowRight size={14} className="shrink-0 mt-1" />
                Start each day with the subject you find most difficult
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight size={14} className="shrink-0 mt-1" />
                Solve at least 10 MCQs daily for each weak subject
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight size={14} className="shrink-0 mt-1" />
                Review mistakes from previous exams before the next one
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight size={14} className="shrink-0 mt-1" />
                Use flashcards for definitions and formulas
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight size={14} className="shrink-0 mt-1" />
                Practice writing long answers with time limits
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeaknessAnalysis;
