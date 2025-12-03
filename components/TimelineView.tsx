import React, { useState, useEffect } from 'react';
import { X, ChevronDown, ChevronUp, Calendar, MapPin, User, Book, Search, Filter, Maximize2, Minimize2 } from 'lucide-react';
import { Subject } from '../types';

interface TimelineViewProps {
  subjects: Subject[];
  onClose: () => void;
}

interface TimelineEvent {
  id: string;
  year: string;
  date?: string;
  title: string;
  description: string;
  category: string;
  subject: string;
  chapter: string;
  location?: string;
  person?: string;
  importance: 'high' | 'medium' | 'low';
}

// Sample timeline events extracted from History/PolSci type content
const extractTimelineEvents = (subjects: Subject[]): TimelineEvent[] => {
  const events: TimelineEvent[] = [];
  
  subjects.forEach(subject => {
    // Only process History, Politics type subjects
    if (!['History', 'Political Science', 'Politics', 'Economics'].includes(subject.name)) return;
    
    subject.chapters.forEach(chapter => {
      // Extract from flashcards that contain dates/years
      chapter.flashcards?.forEach((card, idx) => {
        const yearMatch = card.front.match(/(\d{4})/g) || card.back.match(/(\d{4})/g);
        if (yearMatch) {
          yearMatch.forEach(year => {
            const yearNum = parseInt(year);
            if (yearNum >= 1000 && yearNum <= 2100) {
              events.push({
                id: `${chapter.id}-flash-${idx}-${year}`,
                year: year,
                title: card.front.length > 50 ? card.front.slice(0, 50) + '...' : card.front,
                description: card.back,
                category: 'Historical Event',
                subject: subject.name,
                chapter: chapter.title,
                importance: 'medium'
              });
            }
          });
        }
      });
      
      // Extract from MCQs that contain dates
      chapter.mcqs?.forEach((mcq, idx) => {
        const yearMatch = mcq.question.match(/(\d{4})/g);
        if (yearMatch) {
          yearMatch.forEach(year => {
            const yearNum = parseInt(year);
            if (yearNum >= 1000 && yearNum <= 2100) {
              events.push({
                id: `${chapter.id}-mcq-${idx}-${year}`,
                year: year,
                title: mcq.question.length > 60 ? mcq.question.slice(0, 60) + '...' : mcq.question,
                description: `Answer: ${mcq.options[mcq.correctIndex]}`,
                category: 'Question',
                subject: subject.name,
                chapter: chapter.title,
                importance: 'low'
              });
            }
          });
        }
      });
    });
  });
  
  // Sort by year
  return events.sort((a, b) => parseInt(a.year) - parseInt(b.year));
};

// Predefined important historical events for India
const importantEvents: TimelineEvent[] = [
  { id: 'hist-1', year: '1857', title: 'First War of Independence', description: 'The Sepoy Mutiny marked the first large-scale uprising against British rule', category: 'Freedom Struggle', subject: 'History', chapter: 'Freedom Movement', importance: 'high' },
  { id: 'hist-2', year: '1885', title: 'Indian National Congress Founded', description: 'Founded by A.O. Hume in Bombay, marking the beginning of organized political movement', category: 'Political', subject: 'History', chapter: 'Freedom Movement', importance: 'high' },
  { id: 'hist-3', year: '1905', title: 'Partition of Bengal', description: 'Lord Curzon partitioned Bengal, leading to Swadeshi Movement', category: 'Political', subject: 'History', chapter: 'Freedom Movement', importance: 'high' },
  { id: 'hist-4', year: '1906', title: 'Muslim League Founded', description: 'All India Muslim League established at Dhaka', category: 'Political', subject: 'History', chapter: 'Freedom Movement', importance: 'medium' },
  { id: 'hist-5', year: '1919', title: 'Jallianwala Bagh Massacre', description: 'General Dyer ordered firing on peaceful protesters at Amritsar', category: 'Freedom Struggle', subject: 'History', chapter: 'Freedom Movement', importance: 'high' },
  { id: 'hist-6', year: '1920', title: 'Non-Cooperation Movement', description: 'Gandhi launched first mass movement against British rule', category: 'Freedom Struggle', subject: 'History', chapter: 'Gandhi Era', importance: 'high' },
  { id: 'hist-7', year: '1930', title: 'Salt March / Dandi March', description: 'Gandhi walked 240 miles to make salt, defying British salt laws', category: 'Freedom Struggle', subject: 'History', chapter: 'Gandhi Era', importance: 'high' },
  { id: 'hist-8', year: '1942', title: 'Quit India Movement', description: 'Gandhi gave call for "Do or Die" - final mass movement', category: 'Freedom Struggle', subject: 'History', chapter: 'Gandhi Era', importance: 'high' },
  { id: 'hist-9', year: '1947', title: 'Independence of India', description: 'India gained independence on August 15, 1947', category: 'Independence', subject: 'History', chapter: 'Independence', importance: 'high', date: 'August 15' },
  { id: 'hist-10', year: '1950', title: 'Constitution Came into Effect', description: 'India became a Republic on January 26, 1950', category: 'Political', subject: 'Political Science', chapter: 'Constitution', importance: 'high', date: 'January 26' },
];

const TimelineView: React.FC<TimelineViewProps> = ({ subjects, onClose }) => {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSubject, setFilterSubject] = useState<string>('all');
  const [filterImportance, setFilterImportance] = useState<string>('all');
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'timeline' | 'list'>('timeline');
  const [yearRange, setYearRange] = useState<[number, number]>([1800, 2025]);

  useEffect(() => {
    const extracted = extractTimelineEvents(subjects);
    // Combine with predefined important events, removing duplicates
    const combined = [...importantEvents];
    extracted.forEach(e => {
      if (!combined.some(c => c.year === e.year && c.title === e.title)) {
        combined.push(e);
      }
    });
    setEvents(combined.sort((a, b) => parseInt(a.year) - parseInt(b.year)));
  }, [subjects]);

  // Filter events
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.year.includes(searchQuery);
    const matchesSubject = filterSubject === 'all' || event.subject === filterSubject;
    const matchesImportance = filterImportance === 'all' || event.importance === filterImportance;
    const yearNum = parseInt(event.year);
    const matchesYear = yearNum >= yearRange[0] && yearNum <= yearRange[1];
    return matchesSearch && matchesSubject && matchesImportance && matchesYear;
  });

  // Group by decade for timeline view
  const groupedByDecade = filteredEvents.reduce((acc, event) => {
    const decade = Math.floor(parseInt(event.year) / 10) * 10;
    if (!acc[decade]) acc[decade] = [];
    acc[decade].push(event);
    return acc;
  }, {} as Record<number, TimelineEvent[]>);

  const decades = Object.keys(groupedByDecade).map(Number).sort((a, b) => a - b);

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getSubjectColor = (subject: string) => {
    const colors: Record<string, string> = {
      'History': 'from-orange-500 to-red-500',
      'Political Science': 'from-blue-500 to-purple-500',
      'Politics': 'from-blue-500 to-purple-500',
      'Economics': 'from-green-500 to-teal-500',
    };
    return colors[subject] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold dark:text-white flex items-center gap-2">
              <Calendar className="w-5 h-5" /> Historical Timeline
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode(viewMode === 'timeline' ? 'list' : 'timeline')}
                className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 rounded-lg dark:text-white"
              >
                {viewMode === 'timeline' ? 'List View' : 'Timeline View'}
              </button>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                <X className="w-5 h-5 dark:text-white" />
              </button>
            </div>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search events, years..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-sm"
              />
            </div>
            
            <select
              value={filterSubject}
              onChange={e => setFilterSubject(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-sm"
            >
              <option value="all">All Subjects</option>
              <option value="History">History</option>
              <option value="Political Science">Political Science</option>
              <option value="Economics">Economics</option>
            </select>
            
            <select
              value={filterImportance}
              onChange={e => setFilterImportance(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-sm"
            >
              <option value="all">All Importance</option>
              <option value="high">High Importance</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            
            <div className="flex items-center gap-2 text-sm dark:text-white">
              <span>Year:</span>
              <input
                type="number"
                value={yearRange[0]}
                onChange={e => setYearRange([parseInt(e.target.value) || 1800, yearRange[1]])}
                className="w-20 px-2 py-1 rounded border border-gray-200 dark:border-gray-700 dark:bg-gray-800 text-center"
              />
              <span>to</span>
              <input
                type="number"
                value={yearRange[1]}
                onChange={e => setYearRange([yearRange[0], parseInt(e.target.value) || 2025])}
                className="w-20 px-2 py-1 rounded border border-gray-200 dark:border-gray-700 dark:bg-gray-800 text-center"
              />
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800/50 flex items-center gap-4 text-sm">
          <span className="dark:text-gray-300">
            <strong>{filteredEvents.length}</strong> events found
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span className="text-gray-500 dark:text-gray-400">High</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
            <span className="text-gray-500 dark:text-gray-400">Medium</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="text-gray-500 dark:text-gray-400">Low</span>
          </span>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {viewMode === 'timeline' ? (
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
              
              {decades.map(decade => (
                <div key={decade} className="mb-8">
                  {/* Decade marker */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg z-10">
                      {decade}s
                    </div>
                    <span className="text-gray-400 dark:text-gray-500 text-sm">
                      {groupedByDecade[decade].length} events
                    </span>
                  </div>
                  
                  {/* Events in this decade */}
                  <div className="ml-8 pl-8 border-l-2 border-gray-100 dark:border-gray-800 space-y-4">
                    {groupedByDecade[decade].map(event => (
                      <div
                        key={event.id}
                        className={`relative bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer ${
                          expandedEvent === event.id ? 'ring-2 ring-purple-500' : ''
                        }`}
                        onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
                      >
                        {/* Connector dot */}
                        <div className={`absolute -left-[13px] top-4 w-4 h-4 rounded-full ${getImportanceColor(event.importance)} border-2 border-white dark:border-gray-900`} />
                        
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`px-2 py-0.5 text-xs font-bold text-white rounded bg-gradient-to-r ${getSubjectColor(event.subject)}`}>
                                {event.year}
                              </span>
                              {event.date && (
                                <span className="text-xs text-gray-500 dark:text-gray-400">{event.date}</span>
                              )}
                              <span className={`px-2 py-0.5 text-xs rounded ${
                                event.importance === 'high' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' :
                                event.importance === 'medium' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                              }`}>
                                {event.importance}
                              </span>
                            </div>
                            <h3 className="font-semibold dark:text-white">{event.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{event.subject} • {event.chapter}</p>
                          </div>
                          {expandedEvent === event.id ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                        </div>
                        
                        {expandedEvent === event.id && (
                          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                            <p className="text-gray-700 dark:text-gray-300">{event.description}</p>
                            {event.location && (
                              <p className="flex items-center gap-1 text-sm text-gray-500 mt-2">
                                <MapPin className="w-4 h-4" /> {event.location}
                              </p>
                            )}
                            {event.person && (
                              <p className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                                <User className="w-4 h-4" /> {event.person}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="space-y-3">
              {filteredEvents.map(event => (
                <div
                  key={event.id}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 hover:shadow-md transition cursor-pointer"
                  onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-20 h-12 rounded-lg bg-gradient-to-r ${getSubjectColor(event.subject)} flex items-center justify-center text-white font-bold`}>
                      {event.year}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`w-2 h-2 rounded-full ${getImportanceColor(event.importance)}`} />
                        <span className="text-sm text-gray-500 dark:text-gray-400">{event.subject}</span>
                      </div>
                      <h3 className="font-semibold dark:text-white">{event.title}</h3>
                      {expandedEvent === event.id && (
                        <p className="text-gray-600 dark:text-gray-400 mt-2">{event.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {filteredEvents.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <Calendar className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-medium">No events found</h3>
              <p className="text-sm mt-2">Try adjusting your filters or year range</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineView;
