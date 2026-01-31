import React, { useState } from 'react';
import { X, Newspaper, Calendar, Link, ExternalLink, BookOpen, TrendingUp, Search, Filter, Tag } from 'lucide-react';

interface ArtsCurrentAffairsProps {
  onClose: () => void;
}

const ArtsCurrentAffairs: React.FC<ArtsCurrentAffairsProps> = ({ onClose }) => {
  const [activeSubject, setActiveSubject] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const subjects = [
    { id: 'all', name: 'All Topics', icon: '📰', color: 'gray' },
    { id: 'polsci', name: 'Political Science', icon: '⚖️', color: 'red' },
    { id: 'economics', name: 'Economics', icon: '📊', color: 'indigo' },
    { id: 'geography', name: 'Geography', icon: '🌍', color: 'emerald' },
    { id: 'history', name: 'History', icon: '📜', color: 'orange' },
  ];

  const currentAffairs = [
    // Political Science
    {
      id: 1,
      subject: 'polsci',
      title: 'G20 Summit 2023 - India\'s Presidency',
      date: '2023',
      topic: 'International Relations',
      tags: ['G20', 'Diplomacy', 'India'],
      linkedChapters: ['India and the World', 'Globalisation'],
      summary: 'India hosted the G20 Summit in September 2023 in New Delhi. Key outcomes included African Union membership, focus on sustainable development, and "One Earth, One Family, One Future" theme.',
      examRelevance: 'Important for questions on international organizations, India\'s foreign policy, and multilateral diplomacy.',
      mcq: {
        question: 'G20 Summit 2023 was held in which city?',
        options: ['Mumbai', 'New Delhi', 'Chennai', 'Kolkata'],
        answer: 1
      }
    },
    {
      id: 2,
      subject: 'polsci',
      title: 'Article 370 Abrogation & J&K Reorganization',
      date: '2019-Present',
      topic: 'Constitutional Changes',
      tags: ['Constitution', 'J&K', 'Article 370'],
      linkedChapters: ['Challenges to Democracy', 'Good Governance'],
      summary: 'Article 370 was abrogated in August 2019, and Jammu & Kashmir was reorganized into two Union Territories. The Supreme Court upheld this decision in December 2023.',
      examRelevance: 'Crucial for constitutional amendments, federalism, and governance questions.',
      mcq: {
        question: 'Article 370 was related to which state/region?',
        options: ['Punjab', 'Kashmir', 'Assam', 'Sikkim'],
        answer: 1
      }
    },
    {
      id: 3,
      subject: 'polsci',
      title: 'BRICS Expansion 2024',
      date: '2024',
      topic: 'International Organizations',
      tags: ['BRICS', 'Global South', 'Multipolarity'],
      linkedChapters: ['End of Cold War', 'Globalisation'],
      summary: 'BRICS expanded from 5 to 10 members in 2024, adding Saudi Arabia, Iran, UAE, Ethiopia, Egypt. This represents rising influence of Global South.',
      examRelevance: 'Important for changing world order, international organizations, and India\'s role in global governance.',
      mcq: {
        question: 'BRICS originally had how many members?',
        options: ['3', '4', '5', '6'],
        answer: 2
      }
    },
    // Economics
    {
      id: 4,
      subject: 'economics',
      title: 'India\'s GDP Growth & 5 Trillion Economy Goal',
      date: '2024-25',
      topic: 'National Income',
      tags: ['GDP', 'Growth', 'Economy'],
      linkedChapters: ['National Income', 'Economic Development'],
      summary: 'India became 5th largest economy (2023), targeting $5 trillion by 2027-28. FY24 GDP growth at 8.2%, among fastest growing major economies.',
      examRelevance: 'Key for national income, economic growth, and development questions.',
      mcq: {
        question: 'India\'s GDP ranking in 2023 was?',
        options: ['3rd', '4th', '5th', '6th'],
        answer: 2
      }
    },
    {
      id: 5,
      subject: 'economics',
      title: 'UPI & Digital Payment Revolution',
      date: '2023-24',
      topic: 'Money and Banking',
      tags: ['UPI', 'Digital India', 'Banking'],
      linkedChapters: ['Money and Banking', 'Financial Markets'],
      summary: 'India\'s UPI processed over 100 billion transactions in 2023. International expansion to Singapore, UAE, France. Shows digitization of economy.',
      examRelevance: 'Important for banking innovations, money supply, and financial inclusion.',
      mcq: {
        question: 'UPI is regulated by?',
        options: ['SEBI', 'RBI', 'NPCI', 'Finance Ministry'],
        answer: 2
      }
    },
    {
      id: 6,
      subject: 'economics',
      title: 'Inflation Targeting by RBI',
      date: '2024',
      topic: 'Monetary Policy',
      tags: ['Inflation', 'RBI', 'Interest Rates'],
      linkedChapters: ['Money and Banking', 'Government Budget'],
      summary: 'RBI maintained repo rate at 6.5% to control inflation. Inflation target: 4% (+/- 2%). CPI inflation remained within target band in 2023-24.',
      examRelevance: 'Critical for monetary policy, central banking, and inflation questions.',
      mcq: {
        question: 'RBI\'s inflation target is?',
        options: ['2%', '4%', '6%', '8%'],
        answer: 1
      }
    },
    // Geography
    {
      id: 7,
      subject: 'geography',
      title: 'Climate Change & COP28',
      date: '2023',
      topic: 'Environmental Issues',
      tags: ['Climate', 'COP28', 'Environment'],
      linkedChapters: ['Human Activities', 'Environmental Geography'],
      summary: 'COP28 in Dubai (2023) achieved first "global stocktake" on Paris Agreement. India committed to net-zero by 2070, renewable energy expansion.',
      examRelevance: 'Important for environmental geography, sustainable development questions.',
      mcq: {
        question: 'India\'s net-zero target year is?',
        options: ['2050', '2060', '2070', '2080'],
        answer: 2
      }
    },
    {
      id: 8,
      subject: 'geography',
      title: 'India\'s Population - Surpassing China',
      date: '2023',
      topic: 'Population Geography',
      tags: ['Population', 'Demographics', 'Census'],
      linkedChapters: ['Population', 'Human Development'],
      summary: 'India became world\'s most populous country in 2023 (1.4+ billion), surpassing China. Median age: 28 years (demographic dividend).',
      examRelevance: 'Critical for population geography, demographic transition questions.',
      mcq: {
        question: 'India\'s population rank in 2023?',
        options: ['2nd', '1st', '3rd', '4th'],
        answer: 1
      }
    },
    {
      id: 9,
      subject: 'geography',
      title: 'Semiconductor Manufacturing Push',
      date: '2024',
      topic: 'Industrial Geography',
      tags: ['Semiconductor', 'Manufacturing', 'Industry'],
      linkedChapters: ['Secondary Activities', 'Industrial Development'],
      summary: 'India attracted major semiconductor investments: Tata-PSMC in Gujarat, Micron in Gujarat. Part of "Make in India" and supply chain diversification.',
      examRelevance: 'Important for industrial location, modern industries questions.',
      mcq: {
        question: 'Semiconductor plant by Tata is in?',
        options: ['Karnataka', 'Tamil Nadu', 'Gujarat', 'Maharashtra'],
        answer: 2
      }
    },
    // History
    {
      id: 10,
      subject: 'history',
      title: 'Russia-Ukraine Conflict',
      date: '2022-Present',
      topic: 'Contemporary World',
      tags: ['War', 'Russia', 'Ukraine', 'NATO'],
      linkedChapters: ['End of Cold War', 'New World Order'],
      summary: 'Ongoing conflict since Feb 2022. Represents return of great power rivalry, NATO expansion debate, and challenges to post-Cold War order.',
      examRelevance: 'Important for contemporary international relations, Cold War legacy.',
      mcq: {
        question: 'Russia-Ukraine conflict began in?',
        options: ['2020', '2021', '2022', '2023'],
        answer: 2
      }
    },
    {
      id: 11,
      subject: 'history',
      title: '75 Years of Indian Independence',
      date: '2022',
      topic: 'Modern India',
      tags: ['Independence', 'India', 'History'],
      linkedChapters: ['Indian Freedom Movement', 'Nation Building'],
      summary: 'India celebrated Azadi Ka Amrit Mahotsav (75 years of independence) in 2022. Reflects on journey from colonial rule to world\'s largest democracy.',
      examRelevance: 'Connects historical events to contemporary India.',
      mcq: {
        question: 'India gained independence in which year?',
        options: ['1945', '1947', '1950', '1952'],
        answer: 1
      }
    },
  ];

  const allTags = [...new Set(currentAffairs.flatMap(item => item.tags))];

  const filteredAffairs = currentAffairs.filter(item => {
    const matchesSubject = activeSubject === 'all' || item.subject === activeSubject;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || item.tags.includes(selectedTag);
    return matchesSubject && matchesSearch && matchesTag;
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Newspaper size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Current Affairs Connect</h2>
                <p className="text-rose-100">Link current events to your syllabus topics</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition">
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Subject Tabs */}
        <div className="flex border-b overflow-x-auto bg-gray-50">
          {subjects.map(subject => (
            <button
              key={subject.id}
              onClick={() => setActiveSubject(subject.id)}
              className={`px-4 py-3 font-medium flex items-center gap-2 whitespace-nowrap transition ${
                activeSubject === subject.id
                  ? 'text-rose-600 border-b-2 border-rose-600 bg-white'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <span>{subject.icon}</span>
              {subject.name}
            </button>
          ))}
        </div>

        {/* Search and Filter */}
        <div className="p-4 border-b bg-gray-50">
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[200px] relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search current affairs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap transition ${
                  !selectedTag
                    ? 'bg-rose-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All Tags
              </button>
              {allTags.slice(0, 8).map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap transition ${
                    selectedTag === tag
                      ? 'bg-rose-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Current Affairs List */}
        <div className="overflow-y-auto max-h-[50vh] p-4">
          <div className="space-y-4">
            {filteredAffairs.map(item => (
              <div
                key={item.id}
                className="border rounded-xl p-4 hover:shadow-md transition bg-white"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">
                      {subjects.find(s => s.id === item.subject)?.icon}
                    </span>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">{item.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                        <Calendar size={14} />
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>{item.topic}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-rose-50 text-rose-600 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Summary */}
                <p className="text-gray-600 text-sm mb-3">{item.summary}</p>

                {/* Linked Chapters */}
                <div className="mb-3 p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen size={16} className="text-blue-600" />
                    <span className="font-medium text-blue-700 text-sm">Linked Chapters:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.linkedChapters.map(chapter => (
                      <span
                        key={chapter}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs"
                      >
                        {chapter}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Exam Relevance */}
                <div className="mb-3 p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp size={16} className="text-green-600" />
                    <span className="font-medium text-green-700 text-sm">Exam Relevance:</span>
                  </div>
                  <p className="text-green-700 text-sm">{item.examRelevance}</p>
                </div>

                {/* Quick MCQ */}
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-medium text-purple-700 text-sm mb-2">
                    🎯 Quick MCQ: {item.mcq.question}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {item.mcq.options.map((option, idx) => (
                      <div
                        key={idx}
                        className={`px-3 py-1 rounded text-sm ${
                          idx === item.mcq.answer
                            ? 'bg-purple-200 text-purple-800 font-medium'
                            : 'bg-white text-gray-600'
                        }`}
                      >
                        {String.fromCharCode(65 + idx)}. {option}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {filteredAffairs.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <Newspaper size={48} className="mx-auto mb-4 opacity-50" />
                <p className="font-medium">No current affairs found</p>
                <p className="text-sm">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>📰 {filteredAffairs.length} current affairs topics</span>
            <span className="flex items-center gap-2">
              <TrendingUp size={16} className="text-green-500" />
              Updated for HSC 2026 Exams
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtsCurrentAffairs;
