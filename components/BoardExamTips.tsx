import React, { useState } from 'react';
import { X, BookOpen, ChevronDown, ChevronUp, Star, Tag, Search, Copy, CheckCircle, Sparkles, FileText } from 'lucide-react';

interface BoardExamTipsProps {
  onClose: () => void;
}

interface ExamTip {
  id: string;
  title: string;
  titleHindi?: string;
  category: string;
  subject?: string;
  tips: string[];
  importance: 'critical' | 'important' | 'helpful';
  marks?: string;
}

const BoardExamTips: React.FC<BoardExamTipsProps> = ({ onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedTip, setExpandedTip] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Tips', icon: '📚' },
    { id: 'writing', name: 'Writing Tips', icon: '✍️' },
    { id: 'time', name: 'Time Management', icon: '⏰' },
    { id: 'presentation', name: 'Presentation', icon: '📝' },
    { id: 'subject', name: 'Subject-wise', icon: '📖' },
    { id: 'lastday', name: 'Last Day Tips', icon: '🎯' }
  ];

  const tips: ExamTip[] = [
    // Writing Tips
    {
      id: 'w1',
      title: 'Answer Structure for Long Questions',
      titleHindi: 'दीर्घ उत्तर की संरचना',
      category: 'writing',
      importance: 'critical',
      marks: '4-5 marks',
      tips: [
        'Start with a clear introduction defining key terms',
        'Write 3-4 main points with proper explanation',
        'Use examples or case studies where applicable',
        'Include relevant diagrams/flowcharts if asked',
        'End with a brief conclusion summarizing main points',
        'Minimum 150-200 words for 4-5 mark questions',
        'Always number your points (1, 2, 3...) for clarity'
      ]
    },
    {
      id: 'w2',
      title: 'Short Answer Technique',
      titleHindi: 'लघु उत्तर तकनीक',
      category: 'writing',
      importance: 'important',
      marks: '2-3 marks',
      tips: [
        'Direct answer in first line',
        'Follow with 2-3 supporting points',
        '50-80 words are sufficient',
        'No lengthy introductions needed',
        'Underline key terms',
        'Use bullet points if allowed'
      ]
    },
    {
      id: 'w3',
      title: 'MCQ Solving Strategy',
      titleHindi: 'MCQ हल करने की रणनीति',
      category: 'writing',
      importance: 'critical',
      marks: '1 mark each',
      tips: [
        'Read all options before answering',
        'Eliminate obviously wrong options first',
        'For "All of above" - verify each option',
        'Never leave MCQs blank (no negative marking)',
        'Mark doubtful questions and return later',
        'Trust your first instinct for unsure questions',
        'Complete all MCQs in first 30 minutes'
      ]
    },
    // Time Management
    {
      id: 't1',
      title: 'Paper Time Division (3 Hours)',
      titleHindi: 'पेपर समय विभाजन (3 घंटे)',
      category: 'time',
      importance: 'critical',
      tips: [
        'First 10 mins: Read entire paper carefully',
        'MCQs/Objective: 25-30 minutes',
        'Short Answers (2-3 marks): 40-45 minutes',
        'Long Answers (4-5 marks): 70-80 minutes',
        'Last 20 mins: Review and complete pending',
        'Never spend more than 1.5 mins per MCQ',
        'Keep buffer time for unexpected difficulties'
      ]
    },
    {
      id: 't2',
      title: 'Question Attempt Order',
      titleHindi: 'प्रश्न प्रयास क्रम',
      category: 'time',
      importance: 'important',
      tips: [
        'Start with questions you know best',
        'Attempt compulsory questions first',
        'Complete all MCQs before moving to descriptive',
        'Don\'t get stuck on one difficult question',
        'Mark difficult questions and return later',
        'Ensure all sections are attempted',
        'Never leave any question unanswered'
      ]
    },
    // Presentation Tips
    {
      id: 'p1',
      title: 'Answer Sheet Presentation',
      titleHindi: 'उत्तर पुस्तिका प्रस्तुति',
      category: 'presentation',
      importance: 'important',
      tips: [
        'Write question numbers clearly on left margin',
        'Leave 1-2 lines gap between answers',
        'Underline important terms and headings',
        'Use proper paragraphing',
        'Draw diagrams with pencil, label with pen',
        'Write neatly - legibility matters!',
        'Use blue/black pen only',
        'Start each main question on new page if possible'
      ]
    },
    {
      id: 'p2',
      title: 'Diagram & Graph Tips',
      titleHindi: 'आरेख और ग्राफ टिप्स',
      category: 'presentation',
      importance: 'important',
      tips: [
        'Draw diagrams of appropriate size (not too small)',
        'Use pencil for drawing, pen for labeling',
        'Label all parts clearly',
        'Give proper title to diagrams',
        'For graphs: label X and Y axes clearly',
        'Use ruler for straight lines',
        'Leave space around diagrams',
        'Reference diagrams in your answer'
      ]
    },
    // Subject-wise Tips
    {
      id: 's1',
      title: 'English Paper Strategy',
      titleHindi: 'अंग्रेजी पेपर रणनीति',
      category: 'subject',
      subject: 'english',
      importance: 'critical',
      tips: [
        'Section A (Reading): Read passage twice, then answer',
        'Section B (Writing): Follow exact format asked',
        'Letter writing: Include date, subject, proper format',
        'Essay: Introduction → Body (3-4 paras) → Conclusion',
        'Grammar: Learn rules by heart with examples',
        'Poetry: Learn figure of speech and rhyme scheme',
        'Note-making: Use abbreviations and symbols',
        'Prose: Remember author names and context'
      ]
    },
    {
      id: 's2',
      title: 'Hindi Paper Strategy',
      titleHindi: 'हिंदी पेपर रणनीति',
      category: 'subject',
      subject: 'hindi',
      importance: 'critical',
      tips: [
        'व्याकरण (Grammar) के नियम याद करें',
        'संधि, समास, अलंकार के उदाहरण याद रखें',
        'पत्र लेखन में सही प्रारूप का पालन करें',
        'निबंध: भूमिका → मुख्य भाग → उपसंहार',
        'कविता में भाव और भाषा दोनों पर ध्यान दें',
        'मुहावरे और लोकोक्तियों के अर्थ याद करें',
        'संक्षेपण में मुख्य बिंदु लिखें',
        'अपठित गद्यांश: पहले पूरा पढ़ें फिर उत्तर लिखें'
      ]
    },
    {
      id: 's3',
      title: 'History Paper Strategy',
      titleHindi: 'इतिहास पेपर रणनीति',
      category: 'subject',
      subject: 'history',
      importance: 'critical',
      tips: [
        'Remember important dates with events',
        'For cause-effect questions: List causes → Explain each',
        'Treaty/Agreement: Date, parties, terms, impact',
        'Biography: Birth, achievements, contribution, death',
        'Map work: Practice marking locations regularly',
        'Use timelines for chronological questions',
        'Connect events to larger historical themes',
        'Include primary source quotes if remembered'
      ]
    },
    {
      id: 's4',
      title: 'Political Science Strategy',
      titleHindi: 'राजनीति विज्ञान रणनीति',
      category: 'subject',
      subject: 'politics',
      importance: 'critical',
      tips: [
        'Learn Article numbers with their provisions',
        'Constitution: Preamble, FR, DPSP, Duties are crucial',
        'For comparison: Use table format',
        'Include relevant current affairs examples',
        'Know important amendments and their significance',
        'Define terms clearly before explaining',
        'Draw diagrams for structure questions',
        'Quote constitutional provisions where relevant'
      ]
    },
    {
      id: 's5',
      title: 'Economics Paper Strategy',
      titleHindi: 'अर्थशास्त्र पेपर रणनीति',
      category: 'subject',
      subject: 'economics',
      importance: 'critical',
      tips: [
        'Formulas: Write formula → Substitute values → Calculate',
        'Graphs: Label axes, title, show equilibrium point',
        'Definition questions: Technical definition + explanation',
        'Numericals: Show complete working for full marks',
        'Learn elasticity formulas with examples',
        'Budget: Revenue/Capital receipts & expenditure',
        'National Income: Methods and concepts',
        'Use current economic data/examples'
      ]
    },
    {
      id: 's6',
      title: 'Sanskrit (Alhad) Strategy',
      titleHindi: 'संस्कृत (आल्हाद) रणनीति',
      category: 'subject',
      subject: 'sanskrit',
      importance: 'critical',
      tips: [
        'श्लोकों का अर्थ और संदर्भ याद करें',
        'व्याकरण: धातु रूप, शब्द रूप, संधि विच्छेद',
        'अनुवाद के लिए सरल वाक्य बनाएं',
        'पाठ्यक्रम के सभी सुभाषित याद करें',
        'गद्य-पद्य दोनों का अभ्यास करें',
        'लकार और विभक्ति का अभ्यास जरूरी',
        'पत्र लेखन का प्रारूप याद रखें',
        'अपठित गद्यांश में मूल शब्दों पर ध्यान दें'
      ]
    },
    // Last Day Tips
    {
      id: 'l1',
      title: 'Day Before Exam',
      titleHindi: 'परीक्षा से एक दिन पहले',
      category: 'lastday',
      importance: 'critical',
      tips: [
        'Light revision only - don\'t learn new topics',
        'Review formulas, dates, and key points',
        'Check exam hall ticket and stationery',
        'Pack bag the night before',
        'Sleep at least 7-8 hours',
        'Avoid heavy discussions with friends',
        'Keep mind calm and positive',
        'Have a light, healthy dinner'
      ]
    },
    {
      id: 'l2',
      title: 'Exam Morning Routine',
      titleHindi: 'परीक्षा के दिन सुबह',
      category: 'lastday',
      importance: 'critical',
      tips: [
        'Wake up 2 hours before leaving',
        'Have healthy breakfast (not heavy)',
        'Quick glance at important points',
        'Reach exam center 30 mins early',
        'Use washroom before entering hall',
        'Stay hydrated but don\'t overdrink',
        'Deep breathing if feeling anxious',
        'Positive self-talk and confidence'
      ]
    },
    {
      id: 'l3',
      title: 'In Exam Hall',
      titleHindi: 'परीक्षा हॉल में',
      category: 'lastday',
      importance: 'critical',
      tips: [
        'Fill details on answer sheet carefully',
        'Read instructions on question paper',
        'Scan entire paper in first 10 minutes',
        'Start with best-known questions',
        'Manage time strictly',
        'Stay calm if stuck on a question',
        'Check all pages of question paper',
        'Use last 10 mins for revision only'
      ]
    }
  ];

  const filteredTips = tips.filter(tip => {
    const matchCategory = selectedCategory === 'all' || tip.category === selectedCategory;
    const matchSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       tip.tips.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchCategory && matchSearch;
  });

  const copyTips = (tip: ExamTip) => {
    const text = `${tip.title}\n${tip.titleHindi || ''}\n\n${tip.tips.map((t, i) => `${i + 1}. ${t}`).join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopiedId(tip.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'critical': return { bg: 'bg-red-500/20', text: 'text-red-400', label: '🔴 Critical' };
      case 'important': return { bg: 'bg-yellow-500/20', text: 'text-yellow-400', label: '🟡 Important' };
      default: return { bg: 'bg-green-500/20', text: 'text-green-400', label: '🟢 Helpful' };
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen py-6 px-4">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl shadow-2xl border border-slate-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-4xl">🎯</div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Board Exam Tips</h2>
                  <p className="text-emerald-100 text-sm mt-1">
                    परीक्षा टिप्स - Score Maximum Marks!
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="text-white" size={24} />
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="p-4 border-b border-slate-700">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search tips..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-slate-400"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="p-3 border-b border-slate-700 overflow-x-auto">
            <div className="flex gap-2 min-w-max">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm flex items-center gap-1.5 transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <span>{cat.icon}</span>
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="p-3 bg-slate-800/50 flex items-center justify-between text-sm">
            <span className="text-slate-400">
              <FileText className="inline mr-1" size={16} />
              {filteredTips.length} tip guides
            </span>
            <span className="text-emerald-400">
              <Sparkles className="inline mr-1" size={16} />
              HSC Feb/Mar 2025
            </span>
          </div>

          {/* Tips List */}
          <div className="p-4 space-y-3 max-h-[55vh] overflow-y-auto">
            {filteredTips.map(tip => {
              const importance = getImportanceColor(tip.importance);
              return (
                <div
                  key={tip.id}
                  className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden"
                >
                  <div
                    onClick={() => setExpandedTip(expandedTip === tip.id ? null : tip.id)}
                    className="p-4 cursor-pointer hover:bg-slate-700/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className={`px-2 py-0.5 ${importance.bg} ${importance.text} rounded text-xs`}>
                            {importance.label}
                          </span>
                          {tip.marks && (
                            <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded text-xs">
                              {tip.marks}
                            </span>
                          )}
                          {tip.subject && (
                            <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded text-xs capitalize">
                              {tip.subject}
                            </span>
                          )}
                        </div>
                        <h3 className="text-white font-medium">{tip.title}</h3>
                        {tip.titleHindi && (
                          <p className="text-slate-400 text-sm mt-0.5">{tip.titleHindi}</p>
                        )}
                      </div>
                      <div className="flex-shrink-0">
                        {expandedTip === tip.id ? (
                          <ChevronUp className="text-slate-400" size={20} />
                        ) : (
                          <ChevronDown className="text-slate-400" size={20} />
                        )}
                      </div>
                    </div>
                  </div>

                  {expandedTip === tip.id && (
                    <div className="border-t border-slate-700">
                      <div className="p-4">
                        <ul className="space-y-2">
                          {tip.tips.map((t, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-300">
                              <span className="text-emerald-400 mt-0.5">✓</span>
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-3 border-t border-slate-700 bg-slate-800/30">
                        <button
                          onClick={() => copyTips(tip)}
                          className="w-full py-2 bg-emerald-500/20 text-emerald-400 rounded-lg text-sm hover:bg-emerald-500/30 transition-colors flex items-center justify-center gap-2"
                        >
                          {copiedId === tip.id ? (
                            <><CheckCircle size={14} /> Copied!</>
                          ) : (
                            <><Copy size={14} /> Copy Tips</>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Tips Footer */}
          <div className="p-4 border-t border-slate-700 bg-gradient-to-r from-emerald-500/10 to-teal-500/10">
            <div className="text-center">
              <p className="text-emerald-400 font-medium mb-1">🍀 Golden Rule</p>
              <p className="text-slate-300 text-sm">
                "Attempt ALL questions. Even partial answers get marks!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardExamTips;
