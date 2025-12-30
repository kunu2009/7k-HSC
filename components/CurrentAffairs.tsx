import React, { useState } from 'react';
import { X, Globe, Calendar, Search, BookOpen, Star, ChevronRight, Tag, TrendingUp, Award, Building } from 'lucide-react';

interface CurrentAffairsProps {
  onClose: () => void;
}

interface AffairItem {
  id: string;
  title: string;
  titleHindi?: string;
  description: string;
  date: string;
  category: string;
  subject: 'politics' | 'economics' | 'history' | 'geography' | 'general';
  importance: 'high' | 'medium';
  tags: string[];
  examRelevance: string;
}

const CurrentAffairs: React.FC<CurrentAffairsProps> = ({ onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All', icon: '📚' },
    { id: 'national', name: 'National', icon: '🇮🇳' },
    { id: 'international', name: 'International', icon: '🌍' },
    { id: 'economy', name: 'Economy', icon: '💰' },
    { id: 'schemes', name: 'Schemes', icon: '📋' },
    { id: 'awards', name: 'Awards', icon: '🏆' }
  ];

  const subjects = [
    { id: 'all', name: 'All Subjects', color: 'gray' },
    { id: 'politics', name: 'Political Science', color: 'blue' },
    { id: 'economics', name: 'Economics', color: 'green' },
    { id: 'history', name: 'History', color: 'amber' },
    { id: 'geography', name: 'Geography', color: 'emerald' },
    { id: 'general', name: 'General', color: 'purple' }
  ];

  const affairs: AffairItem[] = [
    // National Affairs
    {
      id: 'n1',
      title: 'Constitution Day of India',
      titleHindi: 'भारत का संविधान दिवस',
      description: 'Constitution Day is celebrated on November 26 to commemorate the adoption of the Constitution of India in 1949. The Constitution came into effect on January 26, 1950. Dr. B.R. Ambedkar is known as the Father of the Indian Constitution.',
      date: '26 Nov 2024',
      category: 'national',
      subject: 'politics',
      importance: 'high',
      tags: ['Constitution', 'Fundamental Rights', 'Dr. Ambedkar'],
      examRelevance: 'Important for Political Science paper - Constitutional framework questions'
    },
    {
      id: 'n2',
      title: 'Lok Sabha Elections 2024',
      titleHindi: '2024 लोकसभा चुनाव',
      description: '18th Lok Sabha elections were held in 7 phases from April to June 2024. 543 constituencies across India voted. Results: NDA government formed with BJP as the largest party. Important concepts: Electoral system, ECI role, Model Code of Conduct.',
      date: 'Apr-Jun 2024',
      category: 'national',
      subject: 'politics',
      importance: 'high',
      tags: ['Elections', 'Democracy', 'Parliament', 'ECI'],
      examRelevance: 'Current political scenario, Election Commission functions, Democratic process'
    },
    {
      id: 'n3',
      title: 'Maharashtra Assembly Elections 2024',
      titleHindi: '2024 महाराष्ट्र विधानसभा निर्वाचन',
      description: 'Maharashtra Vidhan Sabha elections held in November 2024. 288 seats contested. Important for understanding state legislature, CM appointment process, and state governance.',
      date: 'Nov 2024',
      category: 'national',
      subject: 'politics',
      importance: 'high',
      tags: ['State Elections', 'Maharashtra', 'Vidhan Sabha'],
      examRelevance: 'State government formation, Legislative assembly functions'
    },
    // Economic Affairs
    {
      id: 'e1',
      title: 'Union Budget 2024-25',
      titleHindi: 'केंद्रीय बजट 2024-25',
      description: 'Union Budget presented in Parliament. Key highlights: Focus on infrastructure, employment generation, fiscal deficit target, tax reforms. Important concepts: Revenue budget, Capital budget, Fiscal policy.',
      date: 'Feb 2024',
      category: 'economy',
      subject: 'economics',
      importance: 'high',
      tags: ['Budget', 'Fiscal Policy', 'Taxation'],
      examRelevance: 'Direct questions on budget components, fiscal deficit, government expenditure'
    },
    {
      id: 'e2',
      title: 'RBI Monetary Policy',
      titleHindi: 'RBI मौद्रिक नीति',
      description: 'RBI maintains repo rate decisions for inflation control. Monetary Policy Committee (MPC) reviews bi-monthly. Key tools: Repo rate, Reverse repo, CRR, SLR. Current focus on inflation targeting.',
      date: '2024-25',
      category: 'economy',
      subject: 'economics',
      importance: 'high',
      tags: ['RBI', 'Interest Rates', 'Inflation', 'MPC'],
      examRelevance: 'Monetary policy tools, RBI functions, inflation control measures'
    },
    {
      id: 'e3',
      title: 'Digital India & UPI Growth',
      titleHindi: 'डिजिटल इंडिया और UPI विकास',
      description: 'India leads in digital payments globally. UPI transactions crossed record highs. Financial inclusion through Jan Dhan Yojana. Important for understanding digital economy and banking reforms.',
      date: '2024',
      category: 'economy',
      subject: 'economics',
      importance: 'medium',
      tags: ['Digital Economy', 'UPI', 'Financial Inclusion'],
      examRelevance: 'Modern banking, Digital transactions, Economic reforms'
    },
    // Government Schemes
    {
      id: 's1',
      title: 'PM Vishwakarma Yojana',
      titleHindi: 'पीएम विश्वकर्मा योजना',
      description: 'Scheme for traditional artisans and craftspeople. Provides skill training, modern tools, credit support. Covers 18 traditional trades including carpenters, blacksmiths, potters.',
      date: 'Sep 2023',
      category: 'schemes',
      subject: 'economics',
      importance: 'medium',
      tags: ['Artisans', 'Skill Development', 'MSME'],
      examRelevance: 'Employment generation schemes, Small industry support'
    },
    {
      id: 's2',
      title: 'Ayushman Bharat Health Insurance',
      titleHindi: 'आयुष्मान भारत स्वास्थ्य बीमा',
      description: 'World\'s largest health insurance scheme. Covers ₹5 lakh per family per year. Beneficiaries: Economically weaker sections. Related to Right to Health and government welfare responsibilities.',
      date: '2018-present',
      category: 'schemes',
      subject: 'politics',
      importance: 'high',
      tags: ['Healthcare', 'Insurance', 'Welfare State'],
      examRelevance: 'Government welfare schemes, Social security, Public health policy'
    },
    {
      id: 's3',
      title: 'PM Kisan Samman Nidhi',
      titleHindi: 'पीएम किसान सम्मान निधि',
      description: 'Direct income support to farmers. ₹6,000 per year in three installments. Benefits small and marginal farmers. Important for understanding agricultural policy and DBT.',
      date: '2019-present',
      category: 'schemes',
      subject: 'economics',
      importance: 'high',
      tags: ['Agriculture', 'Farmers', 'DBT', 'Income Support'],
      examRelevance: 'Agricultural economics, Rural development, Government subsidies'
    },
    // International Affairs
    {
      id: 'i1',
      title: 'G20 Summit India 2023',
      titleHindi: 'G20 शिखर सम्मेलन भारत 2023',
      description: 'India hosted G20 Summit in New Delhi. Theme: "Vasudhaiva Kutumbakam". Key outcomes: African Union membership, Global Biofuel Alliance, Digital Public Infrastructure. Enhanced India\'s global diplomatic standing.',
      date: 'Sep 2023',
      category: 'international',
      subject: 'politics',
      importance: 'high',
      tags: ['G20', 'Diplomacy', 'International Relations'],
      examRelevance: 'India\'s foreign policy, International organizations, Global governance'
    },
    {
      id: 'i2',
      title: 'BRICS Expansion 2024',
      titleHindi: 'BRICS विस्तार 2024',
      description: 'BRICS expanded to include new members: Saudi Arabia, UAE, Egypt, Ethiopia, Iran. Now represents significant portion of global GDP. Important for understanding emerging economies and multipolar world.',
      date: 'Jan 2024',
      category: 'international',
      subject: 'politics',
      importance: 'high',
      tags: ['BRICS', 'Emerging Economies', 'Multipolarity'],
      examRelevance: 'International organizations, Economic groupings, India\'s strategic partnerships'
    },
    {
      id: 'i3',
      title: 'Israel-Palestine Conflict',
      titleHindi: 'इज़राइल-फ़िलिस्तीन संघर्ष',
      description: 'Ongoing conflict escalated in 2023-24. Historical context: 1948 formation of Israel, UN partition plan, Palestinian territories. India\'s position: Two-state solution support.',
      date: '2023-24',
      category: 'international',
      subject: 'politics',
      importance: 'medium',
      tags: ['Middle East', 'UN', 'Conflict Resolution'],
      examRelevance: 'International conflicts, UN role, India\'s foreign policy'
    },
    // Awards & Recognition
    {
      id: 'a1',
      title: 'Bharat Ratna 2024',
      titleHindi: 'भारत रत्न 2024',
      description: 'Highest civilian award. 2024 recipients announced. Award instituted in 1954. Given for exceptional service to nation in any field. Previous notable recipients include Dr. Ambedkar, Sachin Tendulkar.',
      date: '2024',
      category: 'awards',
      subject: 'general',
      importance: 'medium',
      tags: ['Awards', 'Recognition', 'National Honours'],
      examRelevance: 'National awards, Important personalities, General awareness'
    },
    {
      id: 'a2',
      title: 'Nobel Prize 2024',
      titleHindi: 'नोबेल पुरस्कार 2024',
      description: 'Nobel Prizes awarded in Physics, Chemistry, Medicine, Literature, Peace, Economics. Important for general knowledge and understanding scientific/literary achievements.',
      date: 'Oct 2024',
      category: 'awards',
      subject: 'general',
      importance: 'medium',
      tags: ['Nobel', 'International Awards', 'Achievement'],
      examRelevance: 'International awards, Scientific progress, Global recognition'
    },
    // Historical Connections
    {
      id: 'h1',
      title: '75 Years of Indian Constitution',
      titleHindi: 'भारतीय संविधान के 75 वर्ष',
      description: '2024 marks 75 years since Constitution adoption (1949). Key features: Fundamental Rights, Directive Principles, Federal structure, Parliamentary democracy. Dr. Ambedkar\'s role as architect.',
      date: '26 Nov 2024',
      category: 'national',
      subject: 'history',
      importance: 'high',
      tags: ['Constitution', 'Independence', 'Democracy'],
      examRelevance: 'Constitutional history, National movement legacy, Political system evolution'
    },
    {
      id: 'h2',
      title: 'Commemorations 2024 - Important Anniversaries',
      titleHindi: '2024 स्मरणोत्सव - महत्वपूर्ण वर्षगांठ',
      description: '100 years of: Various historical events. Birth/Death anniversaries of freedom fighters and reformers. Important for connecting historical events to current times.',
      date: '2024',
      category: 'national',
      subject: 'history',
      importance: 'medium',
      tags: ['Anniversaries', 'History', 'Freedom Movement'],
      examRelevance: 'Historical dates, Freedom fighters, Reform movements'
    }
  ];

  const filteredAffairs = affairs.filter(item => {
    const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchSubject = selectedSubject === 'all' || item.subject === selectedSubject;
    const matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       item.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchCategory && matchSubject && matchSearch;
  });

  const getSubjectColor = (subject: string) => {
    const colors: Record<string, string> = {
      politics: 'blue',
      economics: 'green',
      history: 'amber',
      geography: 'emerald',
      general: 'purple'
    };
    return colors[subject] || 'gray';
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen py-6 px-4">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl shadow-2xl border border-slate-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-4xl">🌐</div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Current Affairs</h2>
                  <p className="text-blue-100 text-sm mt-1">
                    समसामयिक घटनाएँ - Board Exam Relevant Topics
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
                placeholder="Search current affairs..."
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
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <span>{cat.icon}</span>
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Subject Filters */}
          <div className="p-3 border-b border-slate-700">
            <div className="flex flex-wrap gap-2">
              {subjects.map(sub => (
                <button
                  key={sub.id}
                  onClick={() => setSelectedSubject(sub.id)}
                  className={`px-3 py-1 rounded-full text-xs transition-colors ${
                    selectedSubject === sub.id
                      ? `bg-${sub.color}-500 text-white`
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                  style={{
                    backgroundColor: selectedSubject === sub.id 
                      ? sub.color === 'blue' ? '#3b82f6' 
                        : sub.color === 'green' ? '#22c55e'
                        : sub.color === 'amber' ? '#f59e0b'
                        : sub.color === 'emerald' ? '#10b981'
                        : sub.color === 'purple' ? '#a855f7'
                        : '#6b7280'
                      : undefined
                  }}
                >
                  {sub.name}
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="p-3 bg-slate-800/50 flex items-center justify-between text-sm">
            <span className="text-slate-400">
              <Globe className="inline mr-1" size={16} />
              {filteredAffairs.length} topics found
            </span>
            <span className="text-cyan-400">
              <Star className="inline mr-1" size={16} />
              Exam 2025 Relevant
            </span>
          </div>

          {/* Affairs List */}
          <div className="p-4 space-y-3 max-h-[55vh] overflow-y-auto">
            {filteredAffairs.map(item => (
              <div
                key={item.id}
                className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden"
              >
                <div
                  onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
                  className="p-4 cursor-pointer hover:bg-slate-700/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-slate-400 text-xs flex items-center gap-1">
                          <Calendar size={12} />
                          {item.date}
                        </span>
                        {item.importance === 'high' && (
                          <span className="px-2 py-0.5 bg-red-500/20 text-red-400 rounded text-xs">
                            ⭐ Important
                          </span>
                        )}
                        <span 
                          className="px-2 py-0.5 rounded text-xs"
                          style={{
                            backgroundColor: getSubjectColor(item.subject) === 'blue' ? 'rgba(59, 130, 246, 0.2)' 
                              : getSubjectColor(item.subject) === 'green' ? 'rgba(34, 197, 94, 0.2)'
                              : getSubjectColor(item.subject) === 'amber' ? 'rgba(245, 158, 11, 0.2)'
                              : getSubjectColor(item.subject) === 'emerald' ? 'rgba(16, 185, 129, 0.2)'
                              : 'rgba(168, 85, 247, 0.2)',
                            color: getSubjectColor(item.subject) === 'blue' ? '#60a5fa' 
                              : getSubjectColor(item.subject) === 'green' ? '#4ade80'
                              : getSubjectColor(item.subject) === 'amber' ? '#fbbf24'
                              : getSubjectColor(item.subject) === 'emerald' ? '#34d399'
                              : '#c084fc'
                          }}
                        >
                          {item.subject.charAt(0).toUpperCase() + item.subject.slice(1)}
                        </span>
                      </div>
                      <h3 className="text-white font-medium">
                        {item.title}
                      </h3>
                      {item.titleHindi && (
                        <p className="text-slate-400 text-sm mt-0.5">
                          {item.titleHindi}
                        </p>
                      )}
                    </div>
                    <ChevronRight 
                      className={`text-slate-400 transition-transform flex-shrink-0 ${
                        expandedItem === item.id ? 'rotate-90' : ''
                      }`} 
                      size={20} 
                    />
                  </div>
                </div>

                {expandedItem === item.id && (
                  <div className="border-t border-slate-700">
                    <div className="p-4">
                      <p className="text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="px-4 pb-3 flex flex-wrap gap-1.5">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-slate-700 text-slate-300 rounded text-xs flex items-center gap-1"
                        >
                          <Tag size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Exam Relevance */}
                    <div className="p-3 bg-cyan-500/10 border-t border-slate-700">
                      <p className="text-cyan-400 text-sm flex items-start gap-2">
                        <BookOpen size={14} className="mt-0.5 flex-shrink-0" />
                        <span><strong>Board Exam:</strong> {item.examRelevance}</span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Stats Footer */}
          <div className="p-4 border-t border-slate-700 bg-slate-800/50 grid grid-cols-4 gap-3 text-center">
            <div>
              <div className="text-xl font-bold text-blue-400">
                {affairs.filter(a => a.subject === 'politics').length}
              </div>
              <div className="text-xs text-slate-400">Politics</div>
            </div>
            <div>
              <div className="text-xl font-bold text-green-400">
                {affairs.filter(a => a.subject === 'economics').length}
              </div>
              <div className="text-xs text-slate-400">Economics</div>
            </div>
            <div>
              <div className="text-xl font-bold text-amber-400">
                {affairs.filter(a => a.subject === 'history').length}
              </div>
              <div className="text-xs text-slate-400">History</div>
            </div>
            <div>
              <div className="text-xl font-bold text-red-400">
                {affairs.filter(a => a.importance === 'high').length}
              </div>
              <div className="text-xs text-slate-400">Important</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentAffairs;
