import React, { useState } from 'react';
import { X, BookOpen, Search, Calendar, ChevronDown, ChevronUp, Star, Copy, CheckCircle, FileText, Users, MapPin, Flag } from 'lucide-react';

interface ImportantEventsProps {
  onClose: () => void;
}

interface HistoricalEvent {
  id: string;
  year: string;
  event: string;
  eventHindi?: string;
  category: string;
  details: string[];
  significance: string;
  relatedPersons?: string[];
  location?: string;
  importance: 'high' | 'medium';
}

const ImportantEvents: React.FC<ImportantEventsProps> = ({ onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Events', icon: '📅' },
    { id: 'french', name: 'French Revolution', icon: '🇫🇷' },
    { id: 'industrial', name: 'Industrial Rev', icon: '🏭' },
    { id: 'ww1', name: 'World War I', icon: '⚔️' },
    { id: 'ww2', name: 'World War II', icon: '🌍' },
    { id: 'india', name: 'Indian Freedom', icon: '🇮🇳' }
  ];

  const events: HistoricalEvent[] = [
    // French Revolution
    {
      id: 'fr1',
      year: '1789',
      event: 'French Revolution Begins - Storming of Bastille',
      eventHindi: 'फ्रांसीसी क्रांति की शुरुआत - बास्तील पर धावा',
      category: 'french',
      details: [
        'July 14, 1789 - Bastille prison stormed by angry mob',
        'Symbol of royal tyranny destroyed',
        'Marked beginning of French Revolution',
        'Now celebrated as French National Day'
      ],
      significance: 'Beginning of end of absolute monarchy in France',
      relatedPersons: ['King Louis XVI', 'Marie Antoinette'],
      location: 'Paris, France',
      importance: 'high'
    },
    {
      id: 'fr2',
      year: '1789',
      event: 'Declaration of Rights of Man and Citizen',
      eventHindi: 'मनुष्य और नागरिक के अधिकारों की घोषणा',
      category: 'french',
      details: [
        'Adopted on August 26, 1789',
        'Declared natural rights: liberty, property, security',
        'All men are born free and equal',
        'Foundation of modern human rights'
      ],
      significance: 'First document to proclaim universal rights',
      location: 'France',
      importance: 'high'
    },
    {
      id: 'fr3',
      year: '1793',
      event: 'Reign of Terror',
      eventHindi: 'आतंक का राज',
      category: 'french',
      details: [
        'Period: September 1793 - July 1794',
        'Led by Robespierre and Committee of Public Safety',
        'Thousands executed by guillotine',
        'Even revolutionary leaders like Danton executed'
      ],
      significance: 'Showed how revolutions can turn violent',
      relatedPersons: ['Robespierre', 'Danton', 'Marat'],
      importance: 'high'
    },
    {
      id: 'fr4',
      year: '1799',
      event: 'Napoleon becomes First Consul',
      eventHindi: 'नेपोलियन प्रथम कौंसल बना',
      category: 'french',
      details: [
        'Coup of 18 Brumaire (November 9, 1799)',
        'Overthrew Directory government',
        'Established Consulate with himself as First Consul',
        'End of French Revolution era'
      ],
      significance: 'Rise of Napoleon and end of revolutionary government',
      relatedPersons: ['Napoleon Bonaparte'],
      importance: 'high'
    },
    // Industrial Revolution
    {
      id: 'ir1',
      year: '1760',
      event: 'Industrial Revolution Begins in Britain',
      eventHindi: 'ब्रिटेन में औद्योगिक क्रांति की शुरुआत',
      category: 'industrial',
      details: [
        'Started in textile industry',
        'Shift from hand production to machines',
        'Use of steam power and iron',
        'Britain became "workshop of the world"'
      ],
      significance: 'Transformed economy from agricultural to industrial',
      location: 'England',
      importance: 'high'
    },
    {
      id: 'ir2',
      year: '1769',
      event: 'James Watt Patents Steam Engine',
      eventHindi: 'जेम्स वाट ने भाप इंजन का पेटेंट कराया',
      category: 'industrial',
      details: [
        'Improved Newcomen\'s steam engine',
        'Made it much more efficient',
        'Used in factories, mines, and later railways',
        'Key invention of Industrial Revolution'
      ],
      significance: 'Revolutionized power generation and transportation',
      relatedPersons: ['James Watt'],
      location: 'Britain',
      importance: 'high'
    },
    {
      id: 'ir3',
      year: '1825',
      event: 'First Public Railway - Stockton to Darlington',
      eventHindi: 'पहली सार्वजनिक रेलवे - स्टॉकटन से डार्लिंगटन',
      category: 'industrial',
      details: [
        'Opened on September 27, 1825',
        'Used steam locomotive "Locomotion No. 1"',
        'George Stephenson was the engineer',
        'Carried both passengers and goods'
      ],
      significance: 'Beginning of railway age and modern transportation',
      relatedPersons: ['George Stephenson'],
      location: 'England',
      importance: 'high'
    },
    // World War I
    {
      id: 'ww1_1',
      year: '1914',
      event: 'Assassination of Archduke Franz Ferdinand',
      eventHindi: 'आर्कड्यूक फ्रांज फर्डिनेंड की हत्या',
      category: 'ww1',
      details: [
        'June 28, 1914 in Sarajevo',
        'Assassinated by Gavrilo Princip',
        'Heir to Austro-Hungarian throne',
        'Immediate trigger for World War I'
      ],
      significance: 'Sparked the beginning of World War I',
      relatedPersons: ['Archduke Franz Ferdinand', 'Gavrilo Princip'],
      location: 'Sarajevo, Bosnia',
      importance: 'high'
    },
    {
      id: 'ww1_2',
      year: '1914',
      event: 'World War I Begins',
      eventHindi: 'प्रथम विश्व युद्ध शुरू',
      category: 'ww1',
      details: [
        'July 28, 1914 - Austria-Hungary declares war on Serbia',
        'Alliance system pulled in major powers',
        'Central Powers vs Allied Powers',
        'Called "The Great War" at the time'
      ],
      significance: 'First global war involving multiple continents',
      importance: 'high'
    },
    {
      id: 'ww1_3',
      year: '1917',
      event: 'USA Enters World War I',
      eventHindi: 'अमेरिका प्रथम विश्व युद्ध में शामिल',
      category: 'ww1',
      details: [
        'April 6, 1917',
        'Triggered by unrestricted submarine warfare',
        'Zimmermann Telegram intercepted',
        'Tipped balance in favor of Allies'
      ],
      significance: 'Turned tide of war towards Allied victory',
      relatedPersons: ['President Woodrow Wilson'],
      importance: 'high'
    },
    {
      id: 'ww1_4',
      year: '1918',
      event: 'World War I Ends - Armistice',
      eventHindi: 'प्रथम विश्व युद्ध समाप्त - युद्धविराम',
      category: 'ww1',
      details: [
        'November 11, 1918 at 11 AM',
        'Armistice signed in railway carriage',
        'Germany surrendered',
        '17 million deaths in the war'
      ],
      significance: 'End of "War to End All Wars"',
      location: 'Compiègne, France',
      importance: 'high'
    },
    {
      id: 'ww1_5',
      year: '1919',
      event: 'Treaty of Versailles Signed',
      eventHindi: 'वर्साय की संधि पर हस्ताक्षर',
      category: 'ww1',
      details: [
        'June 28, 1919',
        'Germany accepted war guilt',
        'Heavy reparations on Germany',
        'Created League of Nations'
      ],
      significance: 'Harsh terms led to resentment and later WWII',
      location: 'Versailles, France',
      importance: 'high'
    },
    // World War II
    {
      id: 'ww2_1',
      year: '1939',
      event: 'World War II Begins - Germany Invades Poland',
      eventHindi: 'द्वितीय विश्व युद्ध शुरू - जर्मनी का पोलैंड पर आक्रमण',
      category: 'ww2',
      details: [
        'September 1, 1939',
        'German Blitzkrieg (lightning war) tactic',
        'Britain and France declare war on Germany',
        'Beginning of deadliest conflict in history'
      ],
      significance: 'Start of war that killed 70-85 million people',
      relatedPersons: ['Adolf Hitler'],
      importance: 'high'
    },
    {
      id: 'ww2_2',
      year: '1941',
      event: 'Pearl Harbor Attack',
      eventHindi: 'पर्ल हार्बर पर हमला',
      category: 'ww2',
      details: [
        'December 7, 1941',
        'Japan attacks US naval base in Hawaii',
        '2,400 Americans killed',
        'USA enters World War II'
      ],
      significance: 'Brought USA into WWII as major Allied power',
      location: 'Pearl Harbor, Hawaii',
      importance: 'high'
    },
    {
      id: 'ww2_3',
      year: '1945',
      event: 'Atomic Bombs on Hiroshima and Nagasaki',
      eventHindi: 'हिरोशिमा और नागासाकी पर परमाणु बम',
      category: 'ww2',
      details: [
        'Hiroshima: August 6, 1945',
        'Nagasaki: August 9, 1945',
        'First use of nuclear weapons in war',
        'Over 200,000 deaths'
      ],
      significance: 'Led to Japan\'s surrender and end of WWII',
      relatedPersons: ['President Truman'],
      location: 'Japan',
      importance: 'high'
    },
    {
      id: 'ww2_4',
      year: '1945',
      event: 'World War II Ends',
      eventHindi: 'द्वितीय विश्व युद्ध समाप्त',
      category: 'ww2',
      details: [
        'V-E Day: May 8, 1945 (Europe)',
        'V-J Day: September 2, 1945 (Japan)',
        'UN established to prevent future wars',
        'Beginning of Cold War era'
      ],
      significance: 'Reshaped world order, created superpowers',
      importance: 'high'
    },
    // Indian Freedom Movement
    {
      id: 'in1',
      year: '1857',
      event: 'First War of Independence (Sepoy Mutiny)',
      eventHindi: 'प्रथम स्वतंत्रता संग्राम (सिपाही विद्रोह)',
      category: 'india',
      details: [
        'Started on May 10, 1857 in Meerut',
        'Sparked by greased cartridge issue',
        'Spread across North India',
        'Ended British East India Company rule'
      ],
      significance: 'First major revolt against British, direct Crown rule started',
      relatedPersons: ['Mangal Pandey', 'Rani Lakshmibai', 'Tantia Tope'],
      location: 'Meerut, India',
      importance: 'high'
    },
    {
      id: 'in2',
      year: '1885',
      event: 'Indian National Congress Founded',
      eventHindi: 'भारतीय राष्ट्रीय कांग्रेस की स्थापना',
      category: 'india',
      details: [
        'December 28, 1885 in Bombay',
        'Founded by A.O. Hume',
        '72 delegates in first session',
        'W.C. Bonnerjee was first president'
      ],
      significance: 'Beginning of organized national movement',
      relatedPersons: ['A.O. Hume', 'W.C. Bonnerjee', 'Dadabhai Naoroji'],
      location: 'Bombay (Mumbai)',
      importance: 'high'
    },
    {
      id: 'in3',
      year: '1919',
      event: 'Jallianwala Bagh Massacre',
      eventHindi: 'जलियांवाला बाग हत्याकांड',
      category: 'india',
      details: [
        'April 13, 1919 (Baisakhi day)',
        'General Dyer ordered firing on unarmed crowd',
        'Hundreds killed, thousands wounded',
        'Turning point in freedom movement'
      ],
      significance: 'Intensified freedom struggle, Rabindranath Tagore returned knighthood',
      relatedPersons: ['General Dyer', 'Udham Singh'],
      location: 'Amritsar, Punjab',
      importance: 'high'
    },
    {
      id: 'in4',
      year: '1930',
      event: 'Salt March (Dandi March)',
      eventHindi: 'नमक सत्याग्रह (दांडी मार्च)',
      category: 'india',
      details: [
        'March 12 - April 6, 1930',
        '241 miles from Sabarmati to Dandi',
        'Gandhi broke salt law by making salt',
        'Mass civil disobedience movement'
      ],
      significance: 'Showed power of nonviolent resistance to world',
      relatedPersons: ['Mahatma Gandhi'],
      location: 'Gujarat',
      importance: 'high'
    },
    {
      id: 'in5',
      year: '1942',
      event: 'Quit India Movement',
      eventHindi: 'भारत छोड़ो आंदोलन',
      category: 'india',
      details: [
        'August 8, 1942',
        'Gandhi gave call "Do or Die"',
        'Largest mass movement against British',
        'All major leaders arrested'
      ],
      significance: 'Final push that led to Indian independence',
      relatedPersons: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Aruna Asaf Ali'],
      location: 'All India',
      importance: 'high'
    },
    {
      id: 'in6',
      year: '1947',
      event: 'Indian Independence',
      eventHindi: 'भारत की स्वतंत्रता',
      category: 'india',
      details: [
        'August 15, 1947 at midnight',
        'End of 200 years of British rule',
        'Partition of India and Pakistan',
        'Jawaharlal Nehru became first PM'
      ],
      significance: 'Birth of independent India',
      relatedPersons: ['Jawaharlal Nehru', 'Lord Mountbatten', 'Sardar Patel'],
      location: 'Delhi',
      importance: 'high'
    }
  ];

  const filteredEvents = events.filter(e => {
    const matchCategory = selectedCategory === 'all' || e.category === selectedCategory;
    const matchSearch = e.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       e.year.includes(searchTerm) ||
                       (e.eventHindi && e.eventHindi.includes(searchTerm));
    return matchCategory && matchSearch;
  });

  const copyEvent = (event: HistoricalEvent) => {
    const text = `${event.year}: ${event.event}\n\n${event.details.join('\n')}\n\nSignificance: ${event.significance}`;
    navigator.clipboard.writeText(text);
    setCopiedId(event.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen py-6 px-4">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl shadow-2xl border border-slate-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-4xl">📅</div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Important Events</h2>
                  <p className="text-amber-100 text-sm mt-1">
                    महत्वपूर्ण ऐतिहासिक घटनाएँ - Timeline
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
                placeholder="Search events or year..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-slate-400"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="p-3 border-b border-slate-700 overflow-x-auto">
            <div className="flex gap-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? 'bg-amber-500 text-white'
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
              <Calendar className="inline mr-1" size={16} />
              {filteredEvents.length} events
            </span>
            <span className="text-amber-400">
              <Star className="inline mr-1" size={16} />
              HSC History Syllabus
            </span>
          </div>

          {/* Events List */}
          <div className="p-4 space-y-3 max-h-[55vh] overflow-y-auto">
            {filteredEvents.map(event => (
              <div
                key={event.id}
                className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden"
              >
                <div
                  onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
                  className="p-4 cursor-pointer hover:bg-slate-700/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl font-bold text-amber-400 min-w-[60px]">
                      {event.year}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        {event.importance === 'high' && (
                          <span className="px-2 py-0.5 bg-red-500/20 text-red-400 rounded text-xs flex items-center gap-1">
                            <Star size={10} /> Important
                          </span>
                        )}
                      </div>
                      <h3 className="text-white font-medium">{event.event}</h3>
                      {event.eventHindi && (
                        <p className="text-slate-400 text-sm">{event.eventHindi}</p>
                      )}
                    </div>
                    <div className="flex-shrink-0">
                      {expandedEvent === event.id ? (
                        <ChevronUp className="text-slate-400" size={20} />
                      ) : (
                        <ChevronDown className="text-slate-400" size={20} />
                      )}
                    </div>
                  </div>
                </div>

                {expandedEvent === event.id && (
                  <div className="border-t border-slate-700">
                    <div className="p-4">
                      <h4 className="text-blue-400 font-medium text-sm mb-2 flex items-center gap-2">
                        <FileText size={14} /> Details
                      </h4>
                      <ul className="space-y-1.5 mb-4">
                        {event.details.map((detail, idx) => (
                          <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-amber-400">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>

                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-3">
                        <p className="text-green-400 text-sm">
                          <strong>Significance:</strong> {event.significance}
                        </p>
                      </div>

                      {event.relatedPersons && (
                        <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                          <Users size={14} />
                          <span>Key Figures: {event.relatedPersons.join(', ')}</span>
                        </div>
                      )}

                      {event.location && (
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                          <MapPin size={14} />
                          <span>Location: {event.location}</span>
                        </div>
                      )}
                    </div>

                    <div className="p-3 border-t border-slate-700 bg-slate-800/30">
                      <button
                        onClick={() => copyEvent(event)}
                        className="w-full py-2 bg-amber-500/20 text-amber-400 rounded-lg text-sm hover:bg-amber-500/30 transition-colors flex items-center justify-center gap-2"
                      >
                        {copiedId === event.id ? (
                          <><CheckCircle size={14} /> Copied!</>
                        ) : (
                          <><Copy size={14} /> Copy Event</>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-700 bg-slate-800/50">
            <p className="text-center text-slate-400 text-sm">
              🏛️ Maharashtra Board HSC History Syllabus Events
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantEvents;
