import React, { useState } from 'react';
import { X, BookOpen, Calendar, Users, MapPin, Flag, ChevronDown, ChevronUp, Star, Clock, Bookmark } from 'lucide-react';

interface HistoryChapterSummaryProps {
  onClose: () => void;
}

interface Chapter {
  id: number;
  title: string;
  titleHindi: string;
  period: string;
  keyPoints: string[];
  importantDates: { date: string; event: string }[];
  importantPersons: { name: string; role: string }[];
  importantPlaces: string[];
  examTips: string[];
  marks: number;
}

const HISTORY_CHAPTERS: Chapter[] = [
  {
    id: 1,
    title: "Renaissance",
    titleHindi: "पुनर्जागरण",
    period: "14th - 17th Century",
    keyPoints: [
      "Rebirth of classical learning and culture in Europe",
      "Started in Italian city-states (Florence, Venice, Rome)",
      "Humanism - focus on human potential and achievements",
      "Patronage by wealthy families like Medici",
      "Invention of printing press by Gutenberg (1450)",
      "Art became more realistic (perspective, anatomy)",
      "Scientific method developed - observation & experiment"
    ],
    importantDates: [
      { date: "1450", event: "Gutenberg's Printing Press" },
      { date: "1453", event: "Fall of Constantinople" },
      { date: "1492", event: "Columbus discovers America" },
      { date: "1517", event: "Luther's 95 Theses" }
    ],
    importantPersons: [
      { name: "Leonardo da Vinci", role: "Artist, Scientist (Mona Lisa, Last Supper)" },
      { name: "Michelangelo", role: "Sculptor, Painter (David, Sistine Chapel)" },
      { name: "Dante", role: "Writer (Divine Comedy)" },
      { name: "Petrarch", role: "Father of Humanism" },
      { name: "Machiavelli", role: "Political Philosopher (The Prince)" }
    ],
    importantPlaces: ["Florence", "Venice", "Rome", "Milan", "Germany (Printing)"],
    examTips: [
      "Focus on causes and effects of Renaissance",
      "Remember key artists and their works",
      "Printing press impact is frequently asked"
    ],
    marks: 8
  },
  {
    id: 2,
    title: "Geographical Discoveries",
    titleHindi: "भौगोलिक शोध",
    period: "15th - 17th Century",
    keyPoints: [
      "Age of Exploration - Europeans sought new trade routes",
      "Motives: Gold, Glory, God (3 G's)",
      "Portugal led by Prince Henry the Navigator",
      "Spain supported Columbus's voyage",
      "Discovery of sea route to India by Vasco da Gama",
      "Circumnavigation by Magellan's expedition",
      "Colonization of Americas, Africa, Asia began"
    ],
    importantDates: [
      { date: "1487", event: "Bartholomew Diaz reaches Cape of Good Hope" },
      { date: "1492", event: "Columbus discovers America" },
      { date: "1498", event: "Vasco da Gama reaches India" },
      { date: "1519-22", event: "Magellan's circumnavigation" }
    ],
    importantPersons: [
      { name: "Prince Henry", role: "Navigator - promoted Portuguese exploration" },
      { name: "Columbus", role: "Discovered America (1492)" },
      { name: "Vasco da Gama", role: "Sea route to India (1498)" },
      { name: "Magellan", role: "First circumnavigation" },
      { name: "Amerigo Vespucci", role: "America named after him" }
    ],
    importantPlaces: ["Lisbon", "Spain", "Cape of Good Hope", "Calicut", "America"],
    examTips: [
      "Remember dates of major discoveries",
      "Motives for exploration (3 G's)",
      "Impact on world trade and colonization"
    ],
    marks: 8
  },
  {
    id: 3,
    title: "American Revolution",
    titleHindi: "अमेरिकी क्रांति",
    period: "1775 - 1783",
    keyPoints: [
      "13 British colonies in America revolted",
      "Causes: Taxation without representation",
      "Boston Tea Party (1773) - protest against tea tax",
      "Declaration of Independence (July 4, 1776)",
      "War led by George Washington",
      "France helped American colonists",
      "Treaty of Paris (1783) recognized independence"
    ],
    importantDates: [
      { date: "1773", event: "Boston Tea Party" },
      { date: "1775", event: "Battle of Lexington - war begins" },
      { date: "1776", event: "Declaration of Independence" },
      { date: "1783", event: "Treaty of Paris" }
    ],
    importantPersons: [
      { name: "George Washington", role: "Commander, First President" },
      { name: "Thomas Jefferson", role: "Wrote Declaration of Independence" },
      { name: "Benjamin Franklin", role: "Diplomat, secured French help" },
      { name: "Thomas Paine", role: "Writer (Common Sense)" }
    ],
    importantPlaces: ["Boston", "Philadelphia", "Lexington", "Yorktown"],
    examTips: [
      "Focus on causes - taxation acts",
      "Significance of Declaration of Independence",
      "Role of enlightenment ideas"
    ],
    marks: 10
  },
  {
    id: 4,
    title: "French Revolution",
    titleHindi: "फ्रांसीसी क्रांति",
    period: "1789 - 1799",
    keyPoints: [
      "Overthrow of monarchy and feudalism",
      "Causes: Social inequality, financial crisis, Enlightenment ideas",
      "Three Estates: Clergy, Nobility, Common people",
      "Storming of Bastille (July 14, 1789)",
      "Declaration of Rights of Man and Citizen",
      "Reign of Terror under Robespierre",
      "Rise of Napoleon Bonaparte"
    ],
    importantDates: [
      { date: "May 1789", event: "Estates General called" },
      { date: "July 14, 1789", event: "Storming of Bastille" },
      { date: "Aug 1789", event: "Declaration of Rights of Man" },
      { date: "1793-94", event: "Reign of Terror" },
      { date: "1799", event: "Napoleon comes to power" }
    ],
    importantPersons: [
      { name: "Louis XVI", role: "King - executed 1793" },
      { name: "Marie Antoinette", role: "Queen" },
      { name: "Robespierre", role: "Leader of Terror" },
      { name: "Napoleon", role: "General, later Emperor" },
      { name: "Voltaire, Rousseau", role: "Enlightenment thinkers" }
    ],
    importantPlaces: ["Paris", "Bastille", "Versailles", "Tuileries Palace"],
    examTips: [
      "Most important chapter - 10-12 marks expected",
      "Learn causes in detail",
      "Remember slogans: Liberty, Equality, Fraternity"
    ],
    marks: 12
  },
  {
    id: 5,
    title: "Industrial Revolution",
    titleHindi: "औद्योगिक क्रांति",
    period: "1760 - 1840",
    keyPoints: [
      "Started in Britain - shift from agriculture to industry",
      "Key inventions: Spinning Jenny, Steam Engine, Power Loom",
      "Factory system replaced cottage industry",
      "Growth of cities (urbanization)",
      "New social classes: Industrial capitalists and workers",
      "Poor working conditions led to labor movements",
      "Spread to Europe and America"
    ],
    importantDates: [
      { date: "1764", event: "Spinning Jenny - James Hargreaves" },
      { date: "1769", event: "Steam Engine - James Watt" },
      { date: "1785", event: "Power Loom - Edmund Cartwright" },
      { date: "1825", event: "First Railway - Stockton to Darlington" }
    ],
    importantPersons: [
      { name: "James Watt", role: "Improved Steam Engine" },
      { name: "James Hargreaves", role: "Spinning Jenny" },
      { name: "Edmund Cartwright", role: "Power Loom" },
      { name: "George Stephenson", role: "Railway Engine" },
      { name: "Robert Owen", role: "Social reformer" }
    ],
    importantPlaces: ["Manchester", "Birmingham", "Liverpool", "Lancashire"],
    examTips: [
      "Why Britain was first - factors",
      "Social impact important",
      "Learn inventions and inventors"
    ],
    marks: 8
  },
  {
    id: 6,
    title: "Unification of Italy",
    titleHindi: "इटली का एकीकरण",
    period: "1815 - 1871",
    keyPoints: [
      "Italy divided into many states after Congress of Vienna",
      "Three leaders: Mazzini (soul), Cavour (brain), Garibaldi (sword)",
      "Mazzini's Young Italy movement",
      "Cavour's diplomacy - alliance with France",
      "Garibaldi's Red Shirts conquered Sicily",
      "Victor Emmanuel II became first king",
      "Rome became capital in 1871"
    ],
    importantDates: [
      { date: "1831", event: "Mazzini founds Young Italy" },
      { date: "1852", event: "Cavour becomes Prime Minister" },
      { date: "1859", event: "War with Austria" },
      { date: "1860", event: "Garibaldi's expedition to Sicily" },
      { date: "1861", event: "Kingdom of Italy declared" },
      { date: "1871", event: "Rome becomes capital" }
    ],
    importantPersons: [
      { name: "Mazzini", role: "Soul - Nationalist thinker" },
      { name: "Cavour", role: "Brain - Diplomat, statesman" },
      { name: "Garibaldi", role: "Sword - Military leader" },
      { name: "Victor Emmanuel II", role: "First King of Italy" },
      { name: "Napoleon III", role: "French ally" }
    ],
    importantPlaces: ["Piedmont-Sardinia", "Rome", "Sicily", "Venice", "Turin"],
    examTips: [
      "Remember Soul-Brain-Sword analogy",
      "Role of each leader is important",
      "Compare with German unification"
    ],
    marks: 10
  },
  {
    id: 7,
    title: "Unification of Germany",
    titleHindi: "जर्मनी का एकीकरण",
    period: "1815 - 1871",
    keyPoints: [
      "Germany divided into 39 states after Napoleon",
      "Prussia led the unification under Bismarck",
      "Zollverein - customs union helped economic unity",
      "Bismarck's 'Blood and Iron' policy",
      "Three wars: Danish (1864), Austrian (1866), Franco-Prussian (1870)",
      "William I became Kaiser (Emperor)",
      "German Empire proclaimed at Versailles (1871)"
    ],
    importantDates: [
      { date: "1834", event: "Zollverein formed" },
      { date: "1862", event: "Bismarck becomes Chancellor" },
      { date: "1864", event: "War with Denmark" },
      { date: "1866", event: "Austro-Prussian War" },
      { date: "1870-71", event: "Franco-Prussian War" },
      { date: "Jan 1871", event: "German Empire proclaimed" }
    ],
    importantPersons: [
      { name: "Otto von Bismarck", role: "Iron Chancellor - unified Germany" },
      { name: "William I", role: "King of Prussia, Kaiser" },
      { name: "Von Moltke", role: "Military strategist" }
    ],
    importantPlaces: ["Prussia", "Berlin", "Versailles", "Schleswig-Holstein"],
    examTips: [
      "Three wars and their results important",
      "Blood and Iron policy - explain",
      "Compare with Italian unification"
    ],
    marks: 10
  },
  {
    id: 8,
    title: "World War I",
    titleHindi: "प्रथम विश्वयुद्ध",
    period: "1914 - 1918",
    keyPoints: [
      "Causes: Militarism, Alliances, Imperialism, Nationalism (MAIN)",
      "Immediate cause: Assassination of Archduke Franz Ferdinand",
      "Two alliances: Triple Alliance vs Triple Entente",
      "New weapons: Tanks, poison gas, airplanes, submarines",
      "Trench warfare on Western Front",
      "USA entered in 1917",
      "Treaty of Versailles (1919) - harsh on Germany"
    ],
    importantDates: [
      { date: "June 28, 1914", event: "Assassination of Franz Ferdinand" },
      { date: "Aug 1914", event: "War begins" },
      { date: "1917", event: "USA enters war; Russian Revolution" },
      { date: "Nov 11, 1918", event: "Armistice Day" },
      { date: "1919", event: "Treaty of Versailles" }
    ],
    importantPersons: [
      { name: "Franz Ferdinand", role: "Austrian Archduke - assassinated" },
      { name: "Kaiser Wilhelm II", role: "German Emperor" },
      { name: "Woodrow Wilson", role: "US President - 14 Points" },
      { name: "Lloyd George", role: "British PM" },
      { name: "Clemenceau", role: "French PM" }
    ],
    importantPlaces: ["Sarajevo", "Verdun", "Somme", "Versailles"],
    examTips: [
      "MAIN causes - must know",
      "Treaty of Versailles terms important",
      "Impact on world politics"
    ],
    marks: 12
  },
  {
    id: 9,
    title: "Rise of Fascism and Nazism",
    titleHindi: "फासीवाद और नाजीवाद का उदय",
    period: "1919 - 1939",
    keyPoints: [
      "Post-WWI economic crisis and nationalism",
      "Fascism in Italy under Mussolini (1922)",
      "Nazism in Germany under Hitler (1933)",
      "Features: Dictatorship, nationalism, militarism, racism",
      "Hitler's anti-Semitism led to Holocaust",
      "Aggression: Ethiopia, Rhineland, Austria, Czechoslovakia",
      "Led to World War II"
    ],
    importantDates: [
      { date: "1922", event: "Mussolini's March on Rome" },
      { date: "1933", event: "Hitler becomes Chancellor" },
      { date: "1935", event: "Italy invades Ethiopia" },
      { date: "1938", event: "Anschluss - Germany annexes Austria" },
      { date: "1939", event: "Germany invades Poland - WWII begins" }
    ],
    importantPersons: [
      { name: "Mussolini", role: "Italian Fascist dictator" },
      { name: "Hitler", role: "Nazi dictator of Germany" },
      { name: "Heinrich Himmler", role: "Head of SS" }
    ],
    importantPlaces: ["Rome", "Berlin", "Nuremberg", "Munich"],
    examTips: [
      "Compare Fascism and Nazism",
      "Rise of Hitler - causes",
      "Features of totalitarianism"
    ],
    marks: 10
  },
  {
    id: 10,
    title: "World War II",
    titleHindi: "द्वितीय विश्वयुद्ध",
    period: "1939 - 1945",
    keyPoints: [
      "Causes: Treaty of Versailles, Rise of dictators, Appeasement policy",
      "Germany invaded Poland (Sept 1, 1939)",
      "Axis Powers vs Allied Powers",
      "Major events: Dunkirk, Battle of Britain, Pearl Harbor",
      "D-Day invasion (June 6, 1944)",
      "Atomic bombs on Hiroshima and Nagasaki",
      "United Nations formed (1945)"
    ],
    importantDates: [
      { date: "Sept 1, 1939", event: "Germany invades Poland" },
      { date: "Dec 7, 1941", event: "Pearl Harbor attack" },
      { date: "June 6, 1944", event: "D-Day invasion" },
      { date: "May 8, 1945", event: "V-E Day - Germany surrenders" },
      { date: "Aug 6 & 9, 1945", event: "Atomic bombs" },
      { date: "Aug 15, 1945", event: "V-J Day - Japan surrenders" }
    ],
    importantPersons: [
      { name: "Hitler", role: "German dictator" },
      { name: "Churchill", role: "British PM" },
      { name: "Roosevelt", role: "US President" },
      { name: "Stalin", role: "Soviet leader" },
      { name: "Truman", role: "US President (atomic bomb decision)" }
    ],
    importantPlaces: ["Pearl Harbor", "Normandy", "Stalingrad", "Hiroshima", "Nagasaki"],
    examTips: [
      "Causes and results very important",
      "Key turning points of war",
      "Formation of UN and its purpose"
    ],
    marks: 12
  }
];

const HistoryChapterSummary: React.FC<HistoryChapterSummaryProps> = ({ onClose }) => {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null);
  const [bookmarked, setBookmarked] = useState<number[]>([]);

  const toggleBookmark = (id: number) => {
    setBookmarked(prev => 
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    );
  };

  const totalMarks = HISTORY_CHAPTERS.reduce((sum, ch) => sum + ch.marks, 0);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-amber-900 via-red-900 to-orange-900 rounded-2xl w-full max-w-5xl max-h-[95vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="bg-black/30 p-4 sm:p-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-amber-200 flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              History Chapter Summaries
            </h2>
            <p className="text-amber-300/70 text-sm mt-1">
              इतिहास - Complete Chapter-wise Notes | Total: {totalMarks} marks
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-amber-200 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {HISTORY_CHAPTERS.map((chapter) => (
            <div
              key={chapter.id}
              className="bg-black/20 rounded-xl overflow-hidden border border-amber-500/30"
            >
              {/* Chapter Header */}
              <div
                onClick={() => setExpandedChapter(expandedChapter === chapter.id ? null : chapter.id)}
                className="p-4 cursor-pointer hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="bg-amber-500/30 text-amber-200 px-3 py-1 rounded-full text-sm font-bold">
                      Ch {chapter.id}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {chapter.title}
                      </h3>
                      <p className="text-amber-300/70 text-sm">
                        {chapter.titleHindi} • {chapter.period}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-green-500/30 text-green-300 px-2 py-1 rounded text-sm">
                      {chapter.marks} marks
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark(chapter.id);
                      }}
                      className={`p-2 rounded-full ${
                        bookmarked.includes(chapter.id)
                          ? 'bg-yellow-500/30 text-yellow-300'
                          : 'text-gray-400 hover:text-yellow-300'
                      }`}
                    >
                      <Bookmark className="w-5 h-5" fill={bookmarked.includes(chapter.id) ? 'currentColor' : 'none'} />
                    </button>
                    {expandedChapter === chapter.id ? (
                      <ChevronUp className="w-5 h-5 text-amber-300" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-amber-300" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedChapter === chapter.id && (
                <div className="p-4 border-t border-amber-500/30 space-y-4">
                  {/* Key Points */}
                  <div className="bg-blue-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-300 mb-2 flex items-center gap-2">
                      <Star className="w-4 h-4" /> Key Points
                    </h4>
                    <ul className="space-y-1">
                      {chapter.keyPoints.map((point, idx) => (
                        <li key={idx} className="text-gray-200 text-sm flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Important Dates */}
                  <div className="bg-purple-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-300 mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Important Dates
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {chapter.importantDates.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <span className="bg-purple-500/30 text-purple-200 px-2 py-0.5 rounded font-mono">
                            {item.date}
                          </span>
                          <span className="text-gray-300">{item.event}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Important Persons */}
                  <div className="bg-green-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-green-300 mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4" /> Important Persons
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {chapter.importantPersons.map((person, idx) => (
                        <div key={idx} className="text-sm">
                          <span className="text-green-200 font-medium">{person.name}</span>
                          <span className="text-gray-400"> - {person.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Important Places */}
                  <div className="bg-orange-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-300 mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> Important Places
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {chapter.importantPlaces.map((place, idx) => (
                        <span key={idx} className="bg-orange-500/20 text-orange-200 px-2 py-1 rounded text-sm">
                          {place}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Exam Tips */}
                  <div className="bg-red-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-red-300 mb-2 flex items-center gap-2">
                      <Flag className="w-4 h-4" /> Exam Tips
                    </h4>
                    <ul className="space-y-1">
                      {chapter.examTips.map((tip, idx) => (
                        <li key={idx} className="text-gray-200 text-sm flex items-start gap-2">
                          <span className="text-red-400">⚡</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-black/30 p-4 flex justify-between items-center text-sm text-amber-300/70">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>10 Chapters • {totalMarks} Total Marks</span>
          </div>
          <span>HSC Maharashtra Board - History (Arts)</span>
        </div>
      </div>
    </div>
  );
};

export default HistoryChapterSummary;
