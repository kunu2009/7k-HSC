import React, { useState } from 'react';
import { X, BookOpen, Search, ChevronDown, ChevronUp, Star, Copy, CheckCircle, Sparkles, Languages } from 'lucide-react';

interface GrammarMasterProps {
  onClose: () => void;
}

interface GrammarRule {
  id: string;
  topic: string;
  topicHindi?: string;
  language: 'english' | 'hindi' | 'sanskrit';
  category: string;
  rule: string;
  explanation: string;
  examples: string[];
  examTip?: string;
  importance: 'high' | 'medium';
}

const GrammarMaster: React.FC<GrammarMasterProps> = ({ onClose }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedRule, setExpandedRule] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const languages = [
    { id: 'all', name: 'All Languages', icon: '🌐' },
    { id: 'english', name: 'English', icon: '📖' },
    { id: 'hindi', name: 'Hindi', icon: '📚' },
    { id: 'sanskrit', name: 'Sanskrit', icon: '📜' }
  ];

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'tenses', name: 'Tenses/काल' },
    { id: 'voice', name: 'Voice/वाच्य' },
    { id: 'speech', name: 'Speech/वाक्य' },
    { id: 'figures', name: 'Figures/अलंकार' },
    { id: 'word', name: 'Word Formation' },
    { id: 'sandhi', name: 'संधि/समास' }
  ];

  const rules: GrammarRule[] = [
    // English Grammar
    {
      id: 'e1',
      topic: 'Simple Present Tense',
      language: 'english',
      category: 'tenses',
      rule: 'Subject + V1 (s/es for 3rd person singular)',
      explanation: 'Used for habitual actions, general truths, and scheduled future events.',
      examples: [
        'She writes a letter every day.',
        'The sun rises in the east.',
        'The train leaves at 6 PM.'
      ],
      examTip: 'Look for keywords: always, usually, often, every day, generally',
      importance: 'high'
    },
    {
      id: 'e2',
      topic: 'Present Continuous Tense',
      language: 'english',
      category: 'tenses',
      rule: 'Subject + is/am/are + V1+ing',
      explanation: 'Used for actions happening now or temporary actions in progress.',
      examples: [
        'I am reading a book now.',
        'They are playing cricket.',
        'She is working on a project this week.'
      ],
      examTip: 'Look for: now, at present, currently, at this moment',
      importance: 'high'
    },
    {
      id: 'e3',
      topic: 'Simple Past Tense',
      language: 'english',
      category: 'tenses',
      rule: 'Subject + V2 (past form)',
      explanation: 'Used for completed actions in the past.',
      examples: [
        'He visited Mumbai last week.',
        'She wrote a letter yesterday.',
        'They finished the work.'
      ],
      examTip: 'Look for: yesterday, last week/month/year, ago, in 2020',
      importance: 'high'
    },
    {
      id: 'e4',
      topic: 'Active to Passive Voice',
      language: 'english',
      category: 'voice',
      rule: 'Object becomes Subject + be + V3 + by + Subject',
      explanation: 'Convert when focus is on action rather than doer.',
      examples: [
        'Active: Ram writes a letter. → Passive: A letter is written by Ram.',
        'Active: She sang a song. → Passive: A song was sung by her.',
        'Active: They will help you. → Passive: You will be helped by them.'
      ],
      examTip: 'Change pronoun forms: I→me, he→him, she→her, we→us, they→them',
      importance: 'high'
    },
    {
      id: 'e5',
      topic: 'Direct to Indirect Speech',
      language: 'english',
      category: 'speech',
      rule: 'Remove quotation marks, add conjunction, change tense back',
      explanation: 'Reporting what someone said without using their exact words.',
      examples: [
        'Direct: He said, "I am happy." → Indirect: He said that he was happy.',
        'Direct: She said, "I will come." → Indirect: She said that she would come.',
        'Direct: Ram said, "I have done it." → Indirect: Ram said that he had done it.'
      ],
      examTip: 'Time changes: today→that day, tomorrow→the next day, yesterday→the previous day',
      importance: 'high'
    },
    {
      id: 'e6',
      topic: 'Figures of Speech - Simile',
      language: 'english',
      category: 'figures',
      rule: 'Comparison using "like" or "as"',
      explanation: 'Direct comparison between two different things using like/as.',
      examples: [
        'She is as brave as a lion.',
        'He runs like the wind.',
        'Her eyes sparkle like stars.'
      ],
      importance: 'high'
    },
    {
      id: 'e7',
      topic: 'Figures of Speech - Metaphor',
      language: 'english',
      category: 'figures',
      rule: 'Direct comparison WITHOUT using like/as',
      explanation: 'Implies comparison by stating one thing IS another.',
      examples: [
        'Life is a journey.',
        'He is a lion in battle.',
        'The world is a stage.'
      ],
      examTip: 'Metaphor says "A is B", Simile says "A is like B"',
      importance: 'high'
    },
    {
      id: 'e8',
      topic: 'Figures of Speech - Personification',
      language: 'english',
      category: 'figures',
      rule: 'Giving human qualities to non-human things',
      explanation: 'Non-living things or abstract ideas are given human characteristics.',
      examples: [
        'The wind whispered through the trees.',
        'The sun smiled down on us.',
        'Opportunity knocked at his door.'
      ],
      importance: 'high'
    },
    // Hindi Grammar
    {
      id: 'h1',
      topic: 'वर्तमान काल (Present Tense)',
      topicHindi: 'Present Tense',
      language: 'hindi',
      category: 'tenses',
      rule: 'क्रिया + ता/ती/ते + है/हैं/हूँ',
      explanation: 'वर्तमान में होने वाली क्रियाओं के लिए प्रयोग।',
      examples: [
        'राम खाना खाता है।',
        'सीता गाना गाती है।',
        'बच्चे खेलते हैं।'
      ],
      importance: 'high'
    },
    {
      id: 'h2',
      topic: 'भूतकाल (Past Tense)',
      topicHindi: 'Past Tense',
      language: 'hindi',
      category: 'tenses',
      rule: 'क्रिया + या/यी/ये/ए + था/थी/थे',
      explanation: 'बीते हुए समय में हुई क्रियाओं के लिए।',
      examples: [
        'राम ने खाना खाया।',
        'सीता ने गाना गाया।',
        'वे स्कूल गए थे।'
      ],
      importance: 'high'
    },
    {
      id: 'h3',
      topic: 'कर्तृ वाच्य से कर्म वाच्य',
      topicHindi: 'Active to Passive Voice',
      language: 'hindi',
      category: 'voice',
      rule: 'कर्म + द्वारा + क्रिया + जाता है',
      explanation: 'जब क्रिया का प्रभाव कर्म पर जोर देना हो।',
      examples: [
        'कर्तृ: राम पत्र लिखता है। → कर्म: राम द्वारा पत्र लिखा जाता है।',
        'कर्तृ: माँ खाना बनाती है। → कर्म: माँ द्वारा खाना बनाया जाता है।'
      ],
      importance: 'high'
    },
    {
      id: 'h4',
      topic: 'अलंकार - उपमा',
      topicHindi: 'Simile',
      language: 'hindi',
      category: 'figures',
      rule: 'उपमेय + उपमान + साधारण धर्म + वाचक शब्द',
      explanation: '"सा", "सी", "सम", "जैसा" आदि वाचक शब्दों से तुलना।',
      examples: [
        'मुख चंद्रमा सा सुंदर है। (उपमेय: मुख, उपमान: चंद्रमा)',
        'वह शेर जैसा बहादुर है।',
        'कमल सी आँखें।'
      ],
      examTip: 'वाचक शब्द (सा, सी, जैसा, समान) की पहचान करें',
      importance: 'high'
    },
    {
      id: 'h5',
      topic: 'अलंकार - रूपक',
      topicHindi: 'Metaphor',
      language: 'hindi',
      category: 'figures',
      rule: 'उपमेय में उपमान का आरोप (बिना वाचक शब्द)',
      explanation: 'जब उपमेय और उपमान में कोई भेद न हो।',
      examples: [
        'मुख-चंद्र (मुख ही चंद्रमा है)',
        'कर-कमल (हाथ ही कमल है)',
        'पद-पंकज (पैर ही कमल है)'
      ],
      examTip: 'रूपक में "है" या वाचक शब्द नहीं होता',
      importance: 'high'
    },
    {
      id: 'h6',
      topic: 'समास के प्रकार',
      topicHindi: 'Types of Samas',
      language: 'hindi',
      category: 'sandhi',
      rule: 'दो या अधिक शब्दों का संक्षिप्त रूप',
      explanation: 'समास में विभक्ति चिह्न लुप्त हो जाते हैं।',
      examples: [
        'तत्पुरुष: राजपुत्र = राजा का पुत्र',
        'द्वंद्व: माता-पिता = माता और पिता',
        'कर्मधारय: नीलकमल = नीला कमल',
        'बहुव्रीहि: चक्रपाणि = चक्र है पाणि में जिसके (विष्णु)'
      ],
      examTip: 'विग्रह करके समास का प्रकार पहचानें',
      importance: 'high'
    },
    {
      id: 'h7',
      topic: 'संधि के प्रकार',
      topicHindi: 'Types of Sandhi',
      language: 'hindi',
      category: 'sandhi',
      rule: 'दो वर्णों के मेल से होने वाला विकार',
      explanation: 'स्वर + स्वर, व्यंजन + व्यंजन, विसर्ग संधि।',
      examples: [
        'स्वर संधि: देव + आलय = देवालय',
        'व्यंजन संधि: सत् + जन = सज्जन',
        'विसर्ग संधि: मनः + योग = मनोयोग'
      ],
      importance: 'high'
    },
    // Sanskrit Grammar
    {
      id: 's1',
      topic: 'लट् लकार (Present Tense)',
      topicHindi: 'Present Tense',
      language: 'sanskrit',
      category: 'tenses',
      rule: 'धातु + ति/तः/न्ति (प्रथम पुरुष)',
      explanation: 'वर्तमान काल में होने वाली क्रिया के लिए।',
      examples: [
        'रामः पठति। (राम पढ़ता है)',
        'बालकौ खेलतः। (दो बालक खेलते हैं)',
        'छात्राः लिखन्ति। (छात्र लिखते हैं)'
      ],
      examTip: 'ति = एकवचन, तः = द्विवचन, न्ति = बहुवचन',
      importance: 'high'
    },
    {
      id: 's2',
      topic: 'लृट् लकार (Future Tense)',
      topicHindi: 'Future Tense',
      language: 'sanskrit',
      category: 'tenses',
      rule: 'धातु + स्य + ति/तः/न्ति',
      explanation: 'भविष्य में होने वाली क्रिया के लिए।',
      examples: [
        'सः पठिष्यति। (वह पढ़ेगा)',
        'अहं गमिष्यामि। (मैं जाऊँगा)',
        'ते खेलिष्यन्ति। (वे खेलेंगे)'
      ],
      importance: 'high'
    },
    {
      id: 's3',
      topic: 'लङ् लकार (Past Tense)',
      topicHindi: 'Past Tense',
      language: 'sanskrit',
      category: 'tenses',
      rule: 'अ + धातु + त्/ताम्/न्',
      explanation: 'भूतकाल में हुई क्रिया के लिए।',
      examples: [
        'सः अपठत्। (उसने पढ़ा)',
        'तौ अखेलताम्। (उन दोनों ने खेला)',
        'ते अगच्छन्। (वे गए)'
      ],
      importance: 'high'
    },
    {
      id: 's4',
      topic: 'विभक्ति (Case Endings)',
      topicHindi: 'Case System',
      language: 'sanskrit',
      category: 'word',
      rule: '8 विभक्तियाँ - प्रथमा से संबोधन तक',
      explanation: 'शब्दों का वाक्य में कार्य बताने के लिए।',
      examples: [
        'प्रथमा (कर्ता): रामः',
        'द्वितीया (कर्म): रामम्',
        'तृतीया (करण): रामेण',
        'चतुर्थी (संप्रदान): रामाय',
        'पंचमी (अपादान): रामात्',
        'षष्ठी (संबंध): रामस्य',
        'सप्तमी (अधिकरण): रामे'
      ],
      examTip: 'राम, बालक, लता, फल शब्द रूप याद करें',
      importance: 'high'
    },
    {
      id: 's5',
      topic: 'स्वर संधि',
      topicHindi: 'Vowel Sandhi',
      language: 'sanskrit',
      category: 'sandhi',
      rule: 'स्वर + स्वर = संयुक्त स्वर',
      explanation: 'दो स्वरों के मिलने से बनने वाली संधि।',
      examples: [
        'दीर्घ: देव + आलय = देवालय (अ+आ=आ)',
        'गुण: देव + ईश = देवेश (अ+ई=ए)',
        'वृद्धि: एक + एक = एकैक (अ+ए=ऐ)',
        'यण्: इति + आदि = इत्यादि (इ+आ=या)'
      ],
      importance: 'high'
    }
  ];

  const filteredRules = rules.filter(r => {
    const matchLanguage = selectedLanguage === 'all' || r.language === selectedLanguage;
    const matchCategory = selectedCategory === 'all' || r.category === selectedCategory;
    const matchSearch = r.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       r.explanation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       (r.topicHindi && r.topicHindi.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchLanguage && matchCategory && matchSearch;
  });

  const copyRule = (rule: GrammarRule) => {
    const text = `${rule.topic}\n${rule.rule}\n\n${rule.explanation}\n\nExamples:\n${rule.examples.join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopiedId(rule.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen py-6 px-4">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl shadow-2xl border border-slate-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-4xl">📝</div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Grammar Master</h2>
                  <p className="text-indigo-100 text-sm mt-1">
                    व्याकरण मास्टर - English, Hindi, Sanskrit
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
                placeholder="Search grammar rules..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-slate-400"
              />
            </div>
          </div>

          {/* Language Filter */}
          <div className="p-3 border-b border-slate-700 overflow-x-auto">
            <div className="flex gap-2">
              {languages.map(lang => (
                <button
                  key={lang.id}
                  onClick={() => setSelectedLanguage(lang.id)}
                  className={`px-4 py-2 rounded-xl text-sm flex items-center gap-2 transition-colors whitespace-nowrap ${
                    selectedLanguage === lang.id
                      ? 'bg-indigo-500 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <span>{lang.icon}</span>
                  {lang.name}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="p-3 border-b border-slate-700 overflow-x-auto">
            <div className="flex gap-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs transition-colors whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? 'bg-purple-500 text-white'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="p-3 bg-slate-800/50 flex items-center justify-between text-sm">
            <span className="text-slate-400">
              <BookOpen className="inline mr-1" size={16} />
              {filteredRules.length} rules
            </span>
            <span className="text-indigo-400">
              <Sparkles className="inline mr-1" size={16} />
              Board Exam Grammar
            </span>
          </div>

          {/* Rules List */}
          <div className="p-4 space-y-3 max-h-[55vh] overflow-y-auto">
            {filteredRules.map(rule => (
              <div
                key={rule.id}
                className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden"
              >
                <div
                  onClick={() => setExpandedRule(expandedRule === rule.id ? null : rule.id)}
                  className="p-4 cursor-pointer hover:bg-slate-700/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className={`px-2 py-0.5 rounded text-xs ${
                          rule.language === 'english' ? 'bg-blue-500/20 text-blue-400' :
                          rule.language === 'hindi' ? 'bg-orange-500/20 text-orange-400' :
                          'bg-amber-500/20 text-amber-400'
                        }`}>
                          {rule.language === 'english' ? '📖' : rule.language === 'hindi' ? '📚' : '📜'} {rule.language}
                        </span>
                        {rule.importance === 'high' && (
                          <span className="px-2 py-0.5 bg-red-500/20 text-red-400 rounded text-xs flex items-center gap-1">
                            <Star size={10} /> Important
                          </span>
                        )}
                      </div>
                      <h3 className="text-white font-medium">{rule.topic}</h3>
                      {rule.topicHindi && (
                        <p className="text-slate-400 text-sm">{rule.topicHindi}</p>
                      )}
                      <p className="text-indigo-400 text-sm mt-1 font-mono">{rule.rule}</p>
                    </div>
                    <div className="flex-shrink-0">
                      {expandedRule === rule.id ? (
                        <ChevronUp className="text-slate-400" size={20} />
                      ) : (
                        <ChevronDown className="text-slate-400" size={20} />
                      )}
                    </div>
                  </div>
                </div>

                {expandedRule === rule.id && (
                  <div className="border-t border-slate-700">
                    <div className="p-4">
                      <p className="text-slate-300 mb-4">{rule.explanation}</p>
                      
                      <h4 className="text-green-400 font-medium text-sm mb-2">Examples:</h4>
                      <ul className="space-y-1.5">
                        {rule.examples.map((ex, idx) => (
                          <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-green-400">•</span>
                            {ex}
                          </li>
                        ))}
                      </ul>

                      {rule.examTip && (
                        <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                          <p className="text-yellow-400 text-sm flex items-start gap-2">
                            <span>💡</span>
                            <span><strong>Exam Tip:</strong> {rule.examTip}</span>
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="p-3 border-t border-slate-700 bg-slate-800/30">
                      <button
                        onClick={() => copyRule(rule)}
                        className="w-full py-2 bg-indigo-500/20 text-indigo-400 rounded-lg text-sm hover:bg-indigo-500/30 transition-colors flex items-center justify-center gap-2"
                      >
                        {copiedId === rule.id ? (
                          <><CheckCircle size={14} /> Copied!</>
                        ) : (
                          <><Copy size={14} /> Copy Rule</>
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
              📖 Maharashtra Board HSC Grammar Reference
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrammarMaster;
