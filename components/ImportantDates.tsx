import React, { useState } from 'react';
import { X, BookOpen, Calendar, MapPin, Users, Clock, Star, ChevronDown, ChevronUp, Award, Flag, Target } from 'lucide-react';

interface ImportantDatesProps {
  onClose: () => void;
}

interface DateEntry {
  date: string;
  event: string;
  eventHindi?: string;
  subject: string;
  importance: 'high' | 'medium' | 'low';
  details?: string;
}

const IMPORTANT_DATES: DateEntry[] = [
  // Renaissance & Geographical Discoveries
  { date: "1450", event: "Gutenberg's Printing Press invented", subject: "History", importance: "high", details: "Revolutionized spread of knowledge" },
  { date: "1453", event: "Fall of Constantinople", subject: "History", importance: "medium", details: "End of Byzantine Empire, scholars fled to Europe" },
  { date: "1487", event: "Bartholomew Diaz reaches Cape of Good Hope", subject: "History", importance: "medium" },
  { date: "1492", event: "Columbus discovers America", subject: "History", importance: "high", details: "Beginning of Age of Exploration" },
  { date: "1498", event: "Vasco da Gama reaches India", subject: "History", importance: "high", details: "Sea route to India discovered, reached Calicut" },
  { date: "1517", event: "Martin Luther's 95 Theses", subject: "History", importance: "high", details: "Beginning of Protestant Reformation" },
  { date: "1519-22", event: "Magellan's circumnavigation", subject: "History", importance: "medium" },
  
  // American Revolution
  { date: "1773", event: "Boston Tea Party", subject: "History", importance: "high", details: "Protest against British tea tax" },
  { date: "1775", event: "American Revolution begins (Lexington)", subject: "History", importance: "high" },
  { date: "July 4, 1776", event: "American Declaration of Independence", subject: "History", importance: "high", details: "Written by Thomas Jefferson" },
  { date: "1783", event: "Treaty of Paris - American Independence", subject: "History", importance: "high" },
  
  // French Revolution
  { date: "May 5, 1789", event: "Estates General called", subject: "History", importance: "medium" },
  { date: "July 14, 1789", event: "Storming of Bastille", subject: "History", importance: "high", details: "French Revolution begins, now French National Day" },
  { date: "Aug 26, 1789", event: "Declaration of Rights of Man", subject: "History", importance: "high" },
  { date: "1793-94", event: "Reign of Terror (Robespierre)", subject: "History", importance: "high" },
  { date: "1799", event: "Napoleon comes to power", subject: "History", importance: "high" },
  { date: "1804", event: "Napoleon becomes Emperor", subject: "History", importance: "medium" },
  { date: "1815", event: "Battle of Waterloo - Napoleon defeated", subject: "History", importance: "high" },
  
  // Industrial Revolution
  { date: "1764", event: "Spinning Jenny - James Hargreaves", subject: "History", importance: "medium" },
  { date: "1769", event: "Steam Engine improved - James Watt", subject: "History", importance: "high" },
  { date: "1785", event: "Power Loom - Edmund Cartwright", subject: "History", importance: "medium" },
  { date: "1825", event: "First Railway (Stockton-Darlington)", subject: "History", importance: "medium" },
  
  // Italian Unification
  { date: "1831", event: "Mazzini founds Young Italy", subject: "History", importance: "medium" },
  { date: "1852", event: "Cavour becomes PM of Piedmont", subject: "History", importance: "medium" },
  { date: "1860", event: "Garibaldi's Red Shirts expedition", subject: "History", importance: "high" },
  { date: "1861", event: "Kingdom of Italy declared", subject: "History", importance: "high" },
  { date: "1871", event: "Rome becomes capital of Italy", subject: "History", importance: "medium" },
  
  // German Unification
  { date: "1834", event: "Zollverein (Customs Union) formed", subject: "History", importance: "medium" },
  { date: "1862", event: "Bismarck becomes Chancellor", subject: "History", importance: "high" },
  { date: "1864", event: "War with Denmark", subject: "History", importance: "low" },
  { date: "1866", event: "Austro-Prussian War", subject: "History", importance: "medium" },
  { date: "1870-71", event: "Franco-Prussian War", subject: "History", importance: "high" },
  { date: "Jan 18, 1871", event: "German Empire proclaimed at Versailles", subject: "History", importance: "high" },
  
  // World War I
  { date: "June 28, 1914", event: "Assassination of Archduke Franz Ferdinand", subject: "History", importance: "high", details: "Immediate cause of WWI, at Sarajevo" },
  { date: "Aug 1914", event: "World War I begins", subject: "History", importance: "high" },
  { date: "1917", event: "USA enters WWI; Russian Revolution", subject: "History", importance: "high" },
  { date: "Nov 11, 1918", event: "Armistice Day - WWI ends", subject: "History", importance: "high" },
  { date: "June 28, 1919", event: "Treaty of Versailles signed", subject: "History", importance: "high", details: "Harsh terms on Germany" },
  
  // Rise of Fascism/Nazism
  { date: "1922", event: "Mussolini's March on Rome", subject: "History", importance: "high", details: "Fascism comes to power in Italy" },
  { date: "1933", event: "Hitler becomes Chancellor", subject: "History", importance: "high" },
  { date: "1935", event: "Italy invades Ethiopia", subject: "History", importance: "medium" },
  { date: "1938", event: "Anschluss - Germany annexes Austria", subject: "History", importance: "medium" },
  
  // World War II
  { date: "Sept 1, 1939", event: "Germany invades Poland - WWII begins", subject: "History", importance: "high" },
  { date: "Dec 7, 1941", event: "Pearl Harbor attack - USA enters WWII", subject: "History", importance: "high" },
  { date: "June 6, 1944", event: "D-Day - Normandy invasion", subject: "History", importance: "high" },
  { date: "May 8, 1945", event: "V-E Day - Germany surrenders", subject: "History", importance: "high" },
  { date: "Aug 6, 1945", event: "Atomic bomb on Hiroshima", subject: "History", importance: "high" },
  { date: "Aug 9, 1945", event: "Atomic bomb on Nagasaki", subject: "History", importance: "high" },
  { date: "Aug 15, 1945", event: "V-J Day - Japan surrenders", subject: "History", importance: "high" },
  
  // Indian Constitution & Politics
  { date: "Dec 9, 1946", event: "Constituent Assembly first met", subject: "Political Science", importance: "medium" },
  { date: "Aug 15, 1947", event: "Indian Independence", subject: "Political Science", importance: "high" },
  { date: "Nov 26, 1949", event: "Constitution adopted", subject: "Political Science", importance: "high", details: "Now celebrated as Constitution Day" },
  { date: "Jan 26, 1950", event: "Constitution came into force", subject: "Political Science", importance: "high", details: "Republic Day" },
  { date: "1951", event: "1st Amendment - Land reforms", subject: "Political Science", importance: "medium" },
  { date: "1976", event: "42nd Amendment - Mini Constitution", subject: "Political Science", importance: "high", details: "Added DPSP, FD, Preamble words" },
  { date: "1978", event: "44th Amendment - Reversed 42nd", subject: "Political Science", importance: "high" },
  { date: "1992", event: "73rd & 74th Amendments - Panchayati Raj", subject: "Political Science", importance: "high" },
  { date: "2002", event: "86th Amendment - Right to Education", subject: "Political Science", importance: "high" },
  { date: "2016", event: "101st Amendment - GST", subject: "Political Science", importance: "high" },
  { date: "2019", event: "103rd Amendment - 10% EWS reservation", subject: "Political Science", importance: "medium" },
  
  // Emergency periods
  { date: "1962", event: "First National Emergency (China war)", subject: "Political Science", importance: "medium" },
  { date: "1971", event: "Second National Emergency (Pak war)", subject: "Political Science", importance: "medium" },
  { date: "1975-77", event: "Internal Emergency", subject: "Political Science", importance: "high", details: "Most controversial, under Indira Gandhi" },
  
  // Economics
  { date: "1991", event: "Economic Liberalization (LPG reforms)", subject: "Economics", importance: "high", details: "Liberalization, Privatization, Globalization" },
  { date: "2016", event: "Demonetization", subject: "Economics", importance: "high" },
  { date: "July 1, 2017", event: "GST implemented", subject: "Economics", importance: "high", details: "One Nation One Tax" },
  
  // Hindi Literature
  { date: "1912", event: "Bharat-Bharati published", eventHindi: "भारत-भारती प्रकाशित", subject: "Hindi", importance: "high", details: "मैथिलीशरण गुप्त" },
  { date: "1915", event: "Usne Kaha Tha published", eventHindi: "उसने कहा था प्रकाशित", subject: "Hindi", importance: "high", details: "चंद्रधर शर्मा गुलेरी - पहली आधुनिक कहानी" },
  { date: "1936", event: "Godan published", eventHindi: "गोदान प्रकाशित", subject: "Hindi", importance: "high", details: "प्रेमचंद का अंतिम उपन्यास" },
  { date: "1935", event: "Madhushala published", eventHindi: "मधुशाला प्रकाशित", subject: "Hindi", importance: "high", details: "हरिवंशराय बच्चन" }
];

const SUBJECTS = ['All', 'History', 'Political Science', 'Economics', 'Hindi'];

const ImportantDates: React.FC<ImportantDatesProps> = ({ onClose }) => {
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [sortBy, setSortBy] = useState<'date' | 'importance'>('date');
  const [expandedDate, setExpandedDate] = useState<string | null>(null);

  const filteredDates = IMPORTANT_DATES
    .filter(d => selectedSubject === 'All' || d.subject === selectedSubject)
    .sort((a, b) => {
      if (sortBy === 'importance') {
        const order = { high: 0, medium: 1, low: 2 };
        return order[a.importance] - order[b.importance];
      }
      return 0; // Keep original order for date sort
    });

  const getImportanceColor = (imp: string) => {
    switch (imp) {
      case 'high': return 'bg-red-500/30 text-red-300 border-red-500/50';
      case 'medium': return 'bg-yellow-500/30 text-yellow-300 border-yellow-500/50';
      default: return 'bg-green-500/30 text-green-300 border-green-500/50';
    }
  };

  const getSubjectColor = (subj: string) => {
    switch (subj) {
      case 'History': return 'bg-amber-500/20 text-amber-300';
      case 'Political Science': return 'bg-blue-500/20 text-blue-300';
      case 'Economics': return 'bg-emerald-500/20 text-emerald-300';
      case 'Hindi': return 'bg-rose-500/20 text-rose-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  const highPriorityCount = filteredDates.filter(d => d.importance === 'high').length;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 rounded-2xl w-full max-w-4xl max-h-[95vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="bg-black/30 p-4 sm:p-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-amber-200 flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              Important Dates & Years
            </h2>
            <p className="text-amber-300/70 text-sm mt-1">
              महत्वपूर्ण तिथियाँ | {filteredDates.length} dates • {highPriorityCount} high priority
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-amber-200 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Filters */}
        <div className="bg-black/20 p-3 flex flex-wrap gap-2 items-center">
          {SUBJECTS.map(subj => (
            <button
              key={subj}
              onClick={() => setSelectedSubject(subj)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                selectedSubject === subj
                  ? 'bg-amber-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {subj}
            </button>
          ))}
          <div className="ml-auto flex gap-2">
            <button
              onClick={() => setSortBy('date')}
              className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
                sortBy === 'date' ? 'bg-orange-500 text-white' : 'bg-white/10 text-gray-300'
              }`}
            >
              By Date
            </button>
            <button
              onClick={() => setSortBy('importance')}
              className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
                sortBy === 'importance' ? 'bg-orange-500 text-white' : 'bg-white/10 text-gray-300'
              }`}
            >
              By Priority
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="space-y-2">
            {filteredDates.map((entry, idx) => (
              <div
                key={idx}
                className="bg-black/20 rounded-lg overflow-hidden border border-amber-500/20 hover:border-amber-500/40 transition-colors"
              >
                <div
                  onClick={() => setExpandedDate(expandedDate === `${idx}` ? null : `${idx}`)}
                  className="p-3 cursor-pointer flex items-center gap-3"
                >
                  <div className="min-w-[80px] sm:min-w-[100px]">
                    <span className="bg-amber-500/30 text-amber-200 px-2 py-1 rounded font-mono text-sm">
                      {entry.date}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm sm:text-base">{entry.event}</p>
                    {entry.eventHindi && (
                      <p className="text-amber-300/70 text-xs">{entry.eventHindi}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-xs ${getSubjectColor(entry.subject)}`}>
                      {entry.subject}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-xs border ${getImportanceColor(entry.importance)}`}>
                      {entry.importance === 'high' ? '⭐' : entry.importance === 'medium' ? '●' : '○'}
                    </span>
                    {entry.details && (
                      expandedDate === `${idx}` ? (
                        <ChevronUp className="w-4 h-4 text-amber-300" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-amber-300" />
                      )
                    )}
                  </div>
                </div>
                {expandedDate === `${idx}` && entry.details && (
                  <div className="px-3 pb-3 pt-0">
                    <div className="bg-blue-500/10 rounded p-2 text-sm text-gray-300 border-l-2 border-blue-500">
                      💡 {entry.details}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-black/30 p-4 flex justify-between items-center text-sm text-amber-300/70">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-red-500/50"></span> High
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-yellow-500/50"></span> Medium
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-green-500/50"></span> Low
            </span>
          </div>
          <span>HSC Maharashtra Board - Arts</span>
        </div>
      </div>
    </div>
  );
};

export default ImportantDates;
