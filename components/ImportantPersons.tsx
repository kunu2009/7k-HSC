import React, { useState } from 'react';
import { X, Award, Users, BookOpen, Star, ChevronDown, ChevronUp, Globe, Lightbulb, Sparkles } from 'lucide-react';

interface ImportantPersonsProps {
  onClose: () => void;
}

interface Person {
  name: string;
  nameHindi?: string;
  title: string;
  period?: string;
  subject: string;
  contribution: string;
  keyWorks?: string[];
  famousFor: string[];
  examTips: string[];
}

const IMPORTANT_PERSONS: Person[] = [
  // History - Renaissance
  {
    name: "Leonardo da Vinci",
    title: "Renaissance Man",
    period: "1452-1519",
    subject: "History",
    contribution: "Italian polymath - painter, scientist, inventor",
    keyWorks: ["Mona Lisa", "The Last Supper", "Vitruvian Man"],
    famousFor: ["Perfect example of Renaissance Man", "Scientific drawings of anatomy, flight"],
    examTips: ["Mention both art and science contributions", "Symbol of Renaissance spirit"]
  },
  {
    name: "Michelangelo",
    title: "Greatest Sculptor",
    period: "1475-1564",
    subject: "History",
    contribution: "Italian sculptor, painter, architect",
    keyWorks: ["David (sculpture)", "Sistine Chapel ceiling", "Pieta"],
    famousFor: ["Sistine Chapel painted lying on back for 4 years"],
    examTips: ["Focus on Sistine Chapel and David statue"]
  },
  {
    name: "Martin Luther",
    title: "Father of Protestant Reformation",
    period: "1483-1546",
    subject: "History",
    contribution: "German monk who started Protestant Reformation",
    keyWorks: ["95 Theses (1517)"],
    famousFor: ["Criticized sale of indulgences", "Translated Bible to German"],
    examTips: ["95 Theses nailed to church door", "Started Lutheranism"]
  },
  
  // History - Explorers
  {
    name: "Vasco da Gama",
    title: "Discoverer of Sea Route to India",
    period: "1469-1524",
    subject: "History",
    contribution: "Portuguese explorer who reached India by sea",
    famousFor: ["First to reach India via Cape of Good Hope (1498)", "Reached Calicut"],
    examTips: ["Date: 1498", "Route: Portugal → Cape → India"]
  },
  {
    name: "Christopher Columbus",
    title: "Discoverer of America",
    period: "1451-1506",
    subject: "History",
    contribution: "Italian explorer sponsored by Spain",
    famousFor: ["Discovered America (1492)", "Thought he reached India"],
    examTips: ["Date: 1492", "Called natives 'Indians' by mistake"]
  },
  
  // History - Revolutions
  {
    name: "Napoleon Bonaparte",
    title: "French Emperor",
    period: "1769-1821",
    subject: "History",
    contribution: "Rose from military general to Emperor of France",
    famousFor: ["Napoleonic Code", "Conquered most of Europe", "Waterloo defeat"],
    examTips: ["Emperor 1804-1814", "Napoleonic Code still influential"]
  },
  {
    name: "George Washington",
    title: "Father of American Nation",
    period: "1732-1799",
    subject: "History",
    contribution: "Led American Revolution, 1st US President",
    famousFor: ["Commander of Continental Army", "First President (1789-1797)"],
    examTips: ["Led independence war", "Refused to become king"]
  },
  {
    name: "Thomas Jefferson",
    title: "Author of Declaration of Independence",
    period: "1743-1826",
    subject: "History",
    contribution: "Primary author of Declaration, 3rd President",
    famousFor: ["Wrote Declaration of Independence (1776)", "Louisiana Purchase"],
    examTips: ["Key phrase: 'Life, Liberty, pursuit of Happiness'"]
  },
  
  // History - Unification
  {
    name: "Giuseppe Mazzini",
    title: "Soul of Italian Unification",
    period: "1805-1872",
    subject: "History",
    contribution: "Italian nationalist thinker and revolutionary",
    keyWorks: ["Young Italy movement (1831)"],
    famousFor: ["Inspired nationalist sentiment", "Young Italy organization"],
    examTips: ["Called 'Soul' of unification", "Ideological leader"]
  },
  {
    name: "Count Cavour",
    title: "Brain of Italian Unification",
    period: "1810-1861",
    subject: "History",
    contribution: "Prime Minister of Piedmont-Sardinia, diplomat",
    famousFor: ["Diplomatic alliances with France", "Realpolitik"],
    examTips: ["Called 'Brain' of unification", "Strategic diplomacy"]
  },
  {
    name: "Giuseppe Garibaldi",
    title: "Sword of Italian Unification",
    period: "1807-1882",
    subject: "History",
    contribution: "Military leader, Red Shirts expedition",
    famousFor: ["Conquered Sicily and Naples (1860)", "Red Shirts army"],
    examTips: ["Called 'Sword' of unification", "Military leader"]
  },
  {
    name: "Otto von Bismarck",
    title: "Iron Chancellor",
    period: "1815-1898",
    subject: "History",
    contribution: "Unified Germany through 'Blood and Iron' policy",
    famousFor: ["Three wars to unify Germany", "Realpolitik", "German Empire"],
    examTips: ["Blood and Iron speech", "Three wars: Danish, Austrian, French"]
  },
  
  // History - World Wars
  {
    name: "Adolf Hitler",
    title: "Nazi Dictator",
    period: "1889-1945",
    subject: "History",
    contribution: "Led Nazi Germany, started WWII",
    keyWorks: ["Mein Kampf"],
    famousFor: ["Holocaust", "WWII", "Nazi ideology"],
    examTips: ["Rise due to Versailles Treaty humiliation", "Died 1945"]
  },
  {
    name: "Benito Mussolini",
    title: "Fascist Dictator of Italy",
    period: "1883-1945",
    subject: "History",
    contribution: "Founded Fascism, ruled Italy 1922-1943",
    famousFor: ["March on Rome (1922)", "Fascist ideology"],
    examTips: ["First Fascist leader", "Allied with Hitler"]
  },
  
  // Political Science
  {
    name: "Dr. B.R. Ambedkar",
    nameHindi: "डॉ. बी.आर. आंबेडकर",
    title: "Father of Indian Constitution",
    period: "1891-1956",
    subject: "Political Science",
    contribution: "Chairman of Drafting Committee, social reformer",
    famousFor: ["Drafted Indian Constitution", "Dalit rights movement", "Buddhist revival"],
    examTips: ["Called Article 32 'Heart and Soul' of Constitution", "Converted to Buddhism"]
  },
  {
    name: "Jawaharlal Nehru",
    nameHindi: "जवाहरलाल नेहरू",
    title: "First Prime Minister of India",
    period: "1889-1964",
    subject: "Political Science",
    contribution: "First PM, architect of modern India",
    keyWorks: ["Discovery of India"],
    famousFor: ["Non-Aligned Movement", "Five Year Plans", "Panchsheel"],
    examTips: ["PM from 1947-1964", "Socialist policies"]
  },
  
  // Sociology
  {
    name: "Auguste Comte",
    title: "Father of Sociology",
    period: "1798-1857",
    subject: "Sociology",
    contribution: "Coined the term 'Sociology' (1838)",
    keyWorks: ["Course of Positive Philosophy"],
    famousFor: ["Positivism", "Law of Three Stages", "Social Statics/Dynamics"],
    examTips: ["First to use term 'Sociology'", "Three stages: Theological, Metaphysical, Positive"]
  },
  {
    name: "Emile Durkheim",
    title: "Founding Father of Sociology",
    period: "1858-1917",
    subject: "Sociology",
    contribution: "Established sociology as academic discipline",
    keyWorks: ["Suicide", "Division of Labour", "Rules of Sociological Method"],
    famousFor: ["Social Facts", "Mechanical vs Organic Solidarity", "Anomie"],
    examTips: ["Study of suicide - social causes", "Sacred vs Profane"]
  },
  {
    name: "Max Weber",
    title: "Father of Interpretive Sociology",
    period: "1864-1920",
    subject: "Sociology",
    contribution: "Developed verstehen (understanding) method",
    keyWorks: ["Protestant Ethic and Spirit of Capitalism"],
    famousFor: ["Bureaucracy theory", "Social Action", "Ideal Type"],
    examTips: ["Rationalization", "Three types of authority"]
  },
  {
    name: "M.N. Srinivas",
    nameHindi: "एम.एन. श्रीनिवास",
    title: "Pioneer of Indian Sociology",
    period: "1916-1999",
    subject: "Sociology",
    contribution: "Studied caste and social change in India",
    keyWorks: ["Religion and Society among the Coorgs"],
    famousFor: ["Sanskritization", "Westernization", "Dominant Caste"],
    examTips: ["Indian concepts for social mobility", "Field work in Coorg"]
  },
  
  // Psychology
  {
    name: "Sigmund Freud",
    title: "Father of Psychoanalysis",
    period: "1856-1939",
    subject: "Psychology",
    contribution: "Developed psychoanalytic theory",
    keyWorks: ["Interpretation of Dreams"],
    famousFor: ["Id, Ego, Superego", "Unconscious mind", "Defense mechanisms"],
    examTips: ["Psychosexual stages", "Dream analysis"]
  },
  {
    name: "Ivan Pavlov",
    title: "Father of Classical Conditioning",
    period: "1849-1936",
    subject: "Psychology",
    contribution: "Discovered classical conditioning (dog experiment)",
    famousFor: ["Pavlov's Dog experiment", "Conditioned reflex"],
    examTips: ["UCS, UCR, CS, CR terms", "Nobel Prize 1904"]
  },
  {
    name: "B.F. Skinner",
    title: "Father of Operant Conditioning",
    period: "1904-1990",
    subject: "Psychology",
    contribution: "Developed operant conditioning theory",
    famousFor: ["Skinner Box", "Reinforcement theory", "Behaviorism"],
    examTips: ["Positive/Negative reinforcement", "Schedules of reinforcement"]
  },
  {
    name: "Abraham Maslow",
    title: "Father of Humanistic Psychology",
    period: "1908-1970",
    subject: "Psychology",
    contribution: "Developed hierarchy of needs theory",
    famousFor: ["Maslow's Pyramid", "Self-actualization", "Peak experiences"],
    examTips: ["5 levels of needs", "Self-actualization at top"]
  },
  
  // Hindi Literature
  {
    name: "Premchand",
    nameHindi: "प्रेमचंद",
    title: "उपन्यास सम्राट (Emperor of Novels)",
    period: "1880-1936",
    subject: "Hindi",
    contribution: "Greatest Hindi fiction writer",
    keyWorks: ["गोदान", "कफन", "निर्मला", "रंगभूमि"],
    famousFor: ["Realistic portrayal of rural India", "Social reform themes"],
    examTips: ["Real name: Dhanpat Rai", "Godan is most famous work"]
  },
  {
    name: "Maithili Sharan Gupt",
    nameHindi: "मैथिलीशरण गुप्त",
    title: "राष्ट्रकवि (National Poet)",
    period: "1886-1964",
    subject: "Hindi",
    contribution: "Nationalist poetry in Hindi",
    keyWorks: ["भारत-भारती", "साकेत", "यशोधरा"],
    famousFor: ["Nationalist themes", "Khadi Boli poetry"],
    examTips: ["Bharat-Bharati inspired freedom movement", "Saket - Urmila's perspective"]
  },
  {
    name: "Harivansh Rai Bachchan",
    nameHindi: "हरिवंशराय बच्चन",
    title: "हालावादी कवि",
    period: "1907-2003",
    subject: "Hindi",
    contribution: "Romantic and philosophical poetry",
    keyWorks: ["मधुशाला", "निशा निमंत्रण", "मधुबाला"],
    famousFor: ["Madhushala - symbolic poetry", "Halavad movement"],
    examTips: ["135 Rubaiyat in Madhushala", "Father of Amitabh Bachchan"]
  }
];

const SUBJECTS = ['All', 'History', 'Political Science', 'Sociology', 'Psychology', 'Hindi'];

const ImportantPersons: React.FC<ImportantPersonsProps> = ({ onClose }) => {
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [expandedPerson, setExpandedPerson] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPersons = IMPORTANT_PERSONS
    .filter(p => selectedSubject === 'All' || p.subject === selectedSubject)
    .filter(p => 
      searchTerm === '' || 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const getSubjectColor = (subj: string) => {
    switch (subj) {
      case 'History': return 'bg-amber-500/20 text-amber-300';
      case 'Political Science': return 'bg-blue-500/20 text-blue-300';
      case 'Sociology': return 'bg-violet-500/20 text-violet-300';
      case 'Psychology': return 'bg-cyan-500/20 text-cyan-300';
      case 'Hindi': return 'bg-rose-500/20 text-rose-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl w-full max-w-4xl max-h-[95vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="bg-black/30 p-4 sm:p-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-purple-200 flex items-center gap-2">
              <Users className="w-6 h-6" />
              Important Personalities
            </h2>
            <p className="text-purple-300/70 text-sm mt-1">
              महत्वपूर्ण व्यक्तित्व | {filteredPersons.length} persons
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-purple-200 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search & Filters */}
        <div className="bg-black/20 p-3 space-y-2">
          <input
            type="text"
            placeholder="Search person or title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
          />
          <div className="flex flex-wrap gap-2">
            {SUBJECTS.map(subj => (
              <button
                key={subj}
                onClick={() => setSelectedSubject(subj)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  selectedSubject === subj
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {subj}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="space-y-3">
            {filteredPersons.map((person, idx) => (
              <div
                key={idx}
                className="bg-black/20 rounded-xl overflow-hidden border border-purple-500/30"
              >
                <div
                  onClick={() => setExpandedPerson(expandedPerson === person.name ? null : person.name)}
                  className="p-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-500/30 flex items-center justify-center text-purple-200 font-bold">
                        {person.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">
                          {person.name}
                          {person.nameHindi && <span className="text-purple-300/70 text-sm ml-2">({person.nameHindi})</span>}
                        </h3>
                        <p className="text-purple-300/70 text-sm">
                          {person.title}
                          {person.period && <span className="ml-2">• {person.period}</span>}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-xs ${getSubjectColor(person.subject)}`}>
                        {person.subject}
                      </span>
                      {expandedPerson === person.name ? (
                        <ChevronUp className="w-5 h-5 text-purple-300" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-purple-300" />
                      )}
                    </div>
                  </div>
                </div>

                {expandedPerson === person.name && (
                  <div className="p-4 border-t border-purple-500/30 space-y-3">
                    {/* Contribution */}
                    <div className="bg-blue-500/10 rounded-lg p-3">
                      <h4 className="font-semibold text-blue-300 text-sm mb-1 flex items-center gap-2">
                        <Award className="w-4 h-4" /> Contribution
                      </h4>
                      <p className="text-gray-200 text-sm">{person.contribution}</p>
                    </div>

                    {/* Key Works */}
                    {person.keyWorks && (
                      <div className="bg-green-500/10 rounded-lg p-3">
                        <h4 className="font-semibold text-green-300 text-sm mb-1 flex items-center gap-2">
                          <BookOpen className="w-4 h-4" /> Key Works
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {person.keyWorks.map((work, i) => (
                            <span key={i} className="bg-green-500/20 text-green-200 px-2 py-0.5 rounded text-sm">
                              {work}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Famous For */}
                    <div className="bg-yellow-500/10 rounded-lg p-3">
                      <h4 className="font-semibold text-yellow-300 text-sm mb-1 flex items-center gap-2">
                        <Star className="w-4 h-4" /> Famous For
                      </h4>
                      <ul className="space-y-1">
                        {person.famousFor.map((item, i) => (
                          <li key={i} className="text-gray-200 text-sm flex items-start gap-2">
                            <Sparkles className="w-3 h-3 text-yellow-400 mt-1 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Exam Tips */}
                    <div className="bg-red-500/10 rounded-lg p-3">
                      <h4 className="font-semibold text-red-300 text-sm mb-1 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" /> Exam Tips
                      </h4>
                      <ul className="space-y-1">
                        {person.examTips.map((tip, i) => (
                          <li key={i} className="text-gray-200 text-sm flex items-start gap-2">
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
        </div>

        {/* Footer */}
        <div className="bg-black/30 p-4 text-sm text-purple-300/70 text-center">
          HSC Maharashtra Board - Arts | Important Personalities for Exam
        </div>
      </div>
    </div>
  );
};

export default ImportantPersons;
