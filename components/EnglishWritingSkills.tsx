import React, { useState, useMemo } from 'react';
import { X, PenTool, Search, ChevronDown, ChevronUp, Star, CheckCircle, FileText, MessageSquare, Mail, Newspaper, BookOpen, Target, Lightbulb, Copy, Check } from 'lucide-react';

interface EnglishWritingSkillsProps {
  onClose: () => void;
}

interface WritingFormat {
  id: string;
  title: string;
  category: 'formal' | 'creative' | 'functional' | 'report';
  description: string;
  format: string[];
  tips: string[];
  sampleTopics: string[];
  wordLimit?: string;
  marks?: string;
  example?: { title: string; content: string };
}

const WRITING_FORMATS: WritingFormat[] = [
  // Formal Writing
  {
    id: 'f1',
    title: 'Formal Letter',
    category: 'formal',
    description: 'Official letters written to authorities, editors, or organizations for complaints, requests, or applications.',
    format: [
      "Sender's Address (top right)",
      'Date',
      "Receiver's Designation & Address (left)",
      'Subject Line',
      'Salutation (Respected Sir/Madam)',
      'Body - Introduction (purpose)',
      'Body - Main Content (details)',
      'Body - Conclusion (request/expectation)',
      'Complimentary Close (Yours faithfully)',
      'Signature & Name'
    ],
    tips: [
      'Use formal language, avoid contractions',
      'Be precise and to the point',
      'Maintain respectful tone throughout',
      'Subject line should be clear and specific',
      'Use "Yours faithfully" if name unknown, "Yours sincerely" if known'
    ],
    sampleTopics: [
      'Letter to Editor about traffic problems',
      'Letter to Municipal Commissioner about garbage disposal',
      'Application for leave to Principal',
      'Complaint letter about defective product',
      'Letter requesting information about courses'
    ],
    wordLimit: '150-200 words',
    marks: '4-5 marks',
    example: {
      title: 'Letter to Editor about Plastic Pollution',
      content: `A-12, Shanti Nagar
Mumbai - 400001
30th December 2025

The Editor
The Times of India
Mumbai

Subject: Urgent Need to Address Plastic Pollution

Respected Sir/Madam,

Through the esteemed columns of your newspaper, I wish to draw attention to the growing menace of plastic pollution in our city.

Despite the government's ban on single-use plastics, vendors continue to use plastic bags openly. Our streets and drainage systems are choked with plastic waste, leading to waterlogging during monsoons. The harmful effects on marine life and human health are well documented.

I urge the authorities to strictly enforce the plastic ban, impose heavy fines on violators, and promote eco-friendly alternatives. Citizens must also take responsibility by carrying cloth bags and refusing plastic packaging.

I hope this letter raises awareness among readers and prompts action from concerned authorities.

Yours faithfully,
Rahul Sharma`
    }
  },
  {
    id: 'f2',
    title: 'Informal Letter',
    category: 'formal',
    description: 'Personal letters to friends, relatives, or close acquaintances sharing news, feelings, or invitations.',
    format: [
      "Sender's Address (top right)",
      'Date',
      'Salutation (Dear friend/name)',
      'Opening (asking about wellbeing)',
      'Body - Main message',
      'Closing (regards to family)',
      'Complimentary Close (Yours lovingly/affectionately)',
      'Name'
    ],
    tips: [
      'Use warm, friendly tone',
      'Can use contractions and informal language',
      'Include personal touch and emotions',
      'Ask about recipient\'s wellbeing',
      'Mention shared memories or experiences'
    ],
    sampleTopics: [
      'Letter to friend about your vacation',
      'Birthday wishes to cousin',
      'Inviting friend to your sister\'s wedding',
      'Describing your new school to friend',
      'Congratulating friend on success'
    ],
    wordLimit: '150-200 words',
    marks: '4-5 marks'
  },
  {
    id: 'f3',
    title: 'Email Writing',
    category: 'formal',
    description: 'Electronic correspondence for professional or semi-formal communication.',
    format: [
      'To: (recipient\'s email)',
      'Subject: (clear, specific)',
      'Salutation',
      'Body - Purpose',
      'Body - Details',
      'Body - Action required',
      'Sign-off',
      'Name & Designation'
    ],
    tips: [
      'Subject line is crucial - be specific',
      'Keep paragraphs short',
      'Use bullet points for multiple items',
      'Proofread before sending',
      'Attach files if mentioned'
    ],
    sampleTopics: [
      'Email to teacher requesting notes',
      'Email to company inquiring about internship',
      'Email to organizers about event details',
      'Email to bookstore ordering books'
    ],
    wordLimit: '100-150 words',
    marks: '4 marks'
  },
  // Creative Writing
  {
    id: 'c1',
    title: 'Essay Writing',
    category: 'creative',
    description: 'A composition expressing ideas on a topic with proper structure and supporting arguments.',
    format: [
      'Title (centered)',
      'Introduction - Hook + thesis statement',
      'Body Para 1 - First main point with examples',
      'Body Para 2 - Second main point with examples',
      'Body Para 3 - Third main point/counter argument',
      'Conclusion - Summary + final thought'
    ],
    tips: [
      'Start with an attention-grabbing hook',
      'Each paragraph should have one main idea',
      'Use transition words between paragraphs',
      'Include relevant examples, facts, quotes',
      'Conclusion should not introduce new points',
      'Maintain balance between paragraphs'
    ],
    sampleTopics: [
      'Importance of Education in Modern World',
      'Social Media: Boon or Bane',
      'Environmental Conservation',
      'Role of Youth in Nation Building',
      'Impact of Technology on Society',
      'Value of Time',
      'My Aim in Life'
    ],
    wordLimit: '300-350 words',
    marks: '7-8 marks',
    example: {
      title: 'The Importance of Reading',
      content: `"A reader lives a thousand lives before he dies." This quote by George R.R. Martin perfectly captures the transformative power of reading.

Reading is the gateway to knowledge and wisdom. In today's information age, those who read regularly stay informed about world events, scientific discoveries, and cultural developments. Books provide insights that no amount of social media scrolling can match.

Moreover, reading enhances our cognitive abilities. Studies show that regular readers have better concentration, improved memory, and sharper analytical skills. The mental exercise of following complex plots or understanding difficult concepts keeps our brains active and healthy.

Reading also develops empathy and emotional intelligence. When we read about characters from different backgrounds, cultures, and time periods, we learn to see the world through their eyes. This broadens our perspective and makes us more understanding human beings.

In conclusion, reading is not just a hobby but a necessity for personal growth. In the words of Dr. Seuss, "The more that you read, the more things you will know." Let us make reading a daily habit and unlock the countless treasures that books hold.`
    }
  },
  {
    id: 'c2',
    title: 'Story Writing',
    category: 'creative',
    description: 'Narrative writing with plot, characters, setting, conflict, and resolution.',
    format: [
      'Title',
      'Introduction - Setting & characters',
      'Rising Action - Events building up',
      'Climax - Peak of conflict',
      'Falling Action - Events after climax',
      'Resolution - Conclusion/moral'
    ],
    tips: [
      'Create interesting, relatable characters',
      'Build suspense gradually',
      'Use vivid descriptions and dialogues',
      'Show, don\'t tell emotions',
      'End with a satisfying conclusion or moral',
      'Use past tense consistently'
    ],
    sampleTopics: [
      'A story beginning with "It was a dark and stormy night..."',
      'An unexpected encounter that changed my life',
      'The mysterious package',
      'A lesson learned the hard way',
      'When honesty saved the day'
    ],
    wordLimit: '250-300 words',
    marks: '7 marks'
  },
  {
    id: 'c3',
    title: 'Descriptive Writing',
    category: 'creative',
    description: 'Writing that creates a vivid picture using sensory details.',
    format: [
      'Introduction - Overview of subject',
      'Visual details - What you see',
      'Auditory details - What you hear',
      'Other senses - Smell, touch, taste',
      'Emotional impact - How it makes you feel',
      'Conclusion - Overall impression'
    ],
    tips: [
      'Use all five senses',
      'Include specific details, not vague generalizations',
      'Use similes, metaphors, and personification',
      'Create atmosphere through word choice',
      'Organize spatially (left to right, near to far)'
    ],
    sampleTopics: [
      'Describe a bustling marketplace',
      'A rainy day in my city',
      'My grandmother\'s kitchen',
      'A beautiful sunset',
      'The school playground during recess'
    ],
    wordLimit: '200-250 words',
    marks: '5-6 marks'
  },
  // Functional Writing
  {
    id: 'fn1',
    title: 'Notice Writing',
    category: 'functional',
    description: 'Official announcement for information display on notice boards.',
    format: [
      'NOTICE (heading, centered)',
      'Name of Organization/School',
      'Date',
      'Heading (what the notice is about)',
      'Body - What, When, Where, Who',
      'Signature',
      'Name & Designation'
    ],
    tips: [
      'Put in a box/border',
      'Use formal language',
      'Include all 5 Ws (What, When, Where, Who, Why)',
      'Keep it brief and clear',
      'Word limit usually 50 words'
    ],
    sampleTopics: [
      'Notice for annual sports day',
      'Notice for lost and found',
      'Notice for cultural program',
      'Notice for change in school timings',
      'Notice for book fair'
    ],
    wordLimit: '50 words',
    marks: '4 marks',
    example: {
      title: 'Notice for Inter-School Debate Competition',
      content: `━━━━━━━━━━━━━━━━━━━━━━━━━━
              NOTICE
   ST. XAVIER'S HIGH SCHOOL
        Date: 30/12/2025
━━━━━━━━━━━━━━━━━━━━━━━━━━
INTER-SCHOOL DEBATE COMPETITION

All students of Classes XI and XII are informed that an Inter-School Debate Competition will be held on 15th January 2026 at 10:00 AM in the school auditorium.

Topic: "Social Media Does More Harm Than Good"

Interested students should submit their names to the English department by 10th January.

                    Sd/-
              Priya Sharma
        (Secretary, Literary Club)
━━━━━━━━━━━━━━━━━━━━━━━━━━`
    }
  },
  {
    id: 'fn2',
    title: 'Advertisement Writing',
    category: 'functional',
    description: 'Promotional content for products, services, or events.',
    format: [
      'Catchy headline/slogan',
      'Product/Service name',
      'Key features/benefits (bullet points)',
      'Special offers/discounts',
      'Contact information',
      'Logo/visual element description'
    ],
    tips: [
      'Use attractive, catchy language',
      'Highlight USP (Unique Selling Point)',
      'Include a call to action',
      'Use persuasive words (amazing, exclusive, limited)',
      'Keep it visually appealing with boxes/borders'
    ],
    sampleTopics: [
      'Advertisement for a new smartphone',
      'Advertisement for coaching classes',
      'Advertisement for a restaurant',
      'Advertisement for fitness center',
      'Property for sale/rent'
    ],
    wordLimit: '50 words',
    marks: '4 marks'
  },
  {
    id: 'fn3',
    title: 'Poster Making',
    category: 'functional',
    description: 'Visual communication for awareness or promotion.',
    format: [
      'Eye-catching title/slogan',
      'Main message/theme',
      'Supporting points (brief)',
      'Visual elements description',
      'Event details (if applicable)',
      'Organization name/logo'
    ],
    tips: [
      'Use bold, large fonts for heading',
      'Include relevant images/symbols',
      'Use minimum words, maximum impact',
      'Create visual hierarchy',
      'Use colors strategically'
    ],
    sampleTopics: [
      'Poster on Save Water',
      'Poster for Blood Donation Camp',
      'Anti-Drug Awareness Poster',
      'Road Safety Poster',
      'Cleanliness Drive Poster'
    ],
    wordLimit: '50 words',
    marks: '4 marks'
  },
  // Report Writing
  {
    id: 'r1',
    title: 'Newspaper Report',
    category: 'report',
    description: 'Factual account of an event for publication in newspaper.',
    format: [
      'Headline (catchy, informative)',
      'Byline (Reporter\'s name, place, date)',
      'Lead paragraph (5 Ws - What, When, Where, Who, Why)',
      'Body - Details in decreasing importance',
      'Quotes from witnesses/authorities',
      'Conclusion - Future implications'
    ],
    tips: [
      'Write in third person',
      'Use past tense',
      'Be objective and factual',
      'Most important info first (inverted pyramid)',
      'Include quotes for authenticity',
      'Avoid personal opinions'
    ],
    sampleTopics: [
      'Report on school annual day celebration',
      'Report on road accident',
      'Report on environmental rally',
      'Report on sports tournament',
      'Report on cultural festival'
    ],
    wordLimit: '150-200 words',
    marks: '5-6 marks',
    example: {
      title: 'Grand Celebration of Republic Day at City School',
      content: `GRAND CELEBRATION OF REPUBLIC DAY AT CITY SCHOOL

By Staff Reporter
Mumbai, 26th January 2025

The 76th Republic Day was celebrated with great patriotic fervor at City International School yesterday. The chief guest, District Collector Mr. Rajesh Verma, unfurled the national flag at 8:30 AM.

The program included a spectacular parade by NCC cadets, patriotic songs by the school choir, and a cultural program showcasing India's unity in diversity. Students from various classes presented dances representing different states of India.

"It is heartening to see young students so enthusiastic about our national heritage," said Mr. Verma while addressing the gathering of over 2000 students and parents.

Principal Mrs. Sunita Deshmukh announced scholarships for meritorious students on this occasion. The program concluded with the distribution of sweets and a pledge to uphold the values enshrined in our Constitution.`
    }
  },
  {
    id: 'r2',
    title: 'Speech Writing',
    category: 'report',
    description: 'Formal address to be delivered to an audience.',
    format: [
      'Salutation (Respected Principal, teachers, dear friends)',
      'Introduction - Topic & purpose',
      'Body - Main points with examples',
      'Emotional appeal/Call to action',
      'Conclusion - Summary & memorable ending',
      'Thank you'
    ],
    tips: [
      'Start with a hook (quote, question, fact)',
      'Use rhetorical questions',
      'Include personal anecdotes',
      'Vary sentence length for rhythm',
      'End with a powerful statement',
      'Use "we" to include audience'
    ],
    sampleTopics: [
      'Speech on Independence Day',
      'Speech on importance of books',
      'Speech on environmental protection',
      'Farewell speech for seniors',
      'Speech on health and fitness'
    ],
    wordLimit: '200-250 words',
    marks: '6-7 marks'
  },
  {
    id: 'r3',
    title: 'Debate Writing',
    category: 'report',
    description: 'Argumentative writing presenting one side of a topic.',
    format: [
      'Salutation',
      'State your stance clearly',
      'Argument 1 with evidence',
      'Argument 2 with evidence',
      'Argument 3 with evidence',
      'Refute opposition briefly',
      'Strong conclusion reiterating stance'
    ],
    tips: [
      'Take a clear stand - for or against',
      'Support arguments with facts, statistics',
      'Acknowledge and counter opposing views',
      'Use persuasive language',
      'End with a memorable statement',
      'Maintain formal tone'
    ],
    sampleTopics: [
      'Social media does more harm than good',
      'Online education vs classroom education',
      'Technology has made us lazy',
      'Money can buy happiness',
      'Examinations should be abolished'
    ],
    wordLimit: '200-250 words',
    marks: '6-7 marks'
  }
];

const EnglishWritingSkills: React.FC<EnglishWritingSkillsProps> = ({ onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFormat, setExpandedFormat] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredFormats = useMemo(() => {
    return WRITING_FORMATS.filter(f => {
      const matchesCategory = selectedCategory === 'all' || f.category === selectedCategory;
      const matchesSearch = searchQuery === '' ||
        f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categories = [
    { id: 'all', name: 'All', icon: FileText },
    { id: 'formal', name: 'Letters', icon: Mail },
    { id: 'creative', name: 'Creative', icon: PenTool },
    { id: 'functional', name: 'Functional', icon: Newspaper },
    { id: 'report', name: 'Reports', icon: MessageSquare }
  ];

  const getCategoryColor = (cat: string) => {
    switch(cat) {
      case 'formal': return 'bg-blue-900/30 text-blue-400 border-blue-700';
      case 'creative': return 'bg-purple-900/30 text-purple-400 border-purple-700';
      case 'functional': return 'bg-green-900/30 text-green-400 border-green-700';
      case 'report': return 'bg-orange-900/30 text-orange-400 border-orange-700';
      default: return 'bg-slate-600 text-slate-300 border-slate-600';
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <PenTool className="w-6 h-6" />
                </div>
                English Writing Skills
              </h2>
              <p className="text-slate-400 mt-1">Complete guide to all writing formats for HSC Board</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
              <X className="w-6 h-6 text-slate-400" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-5 gap-3 mb-4">
            <div className="bg-slate-700/50 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-white">{WRITING_FORMATS.length}</div>
              <div className="text-xs text-slate-400">Formats</div>
            </div>
            <div className="bg-blue-900/30 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-blue-400">
                {WRITING_FORMATS.filter(f => f.category === 'formal').length}
              </div>
              <div className="text-xs text-blue-300">Letters</div>
            </div>
            <div className="bg-purple-900/30 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-purple-400">
                {WRITING_FORMATS.filter(f => f.category === 'creative').length}
              </div>
              <div className="text-xs text-purple-300">Creative</div>
            </div>
            <div className="bg-green-900/30 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-green-400">
                {WRITING_FORMATS.filter(f => f.category === 'functional').length}
              </div>
              <div className="text-xs text-green-300">Functional</div>
            </div>
            <div className="bg-orange-900/30 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-orange-400">
                {WRITING_FORMATS.filter(f => f.category === 'report').length}
              </div>
              <div className="text-xs text-orange-300">Reports</div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search formats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
              />
            </div>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-3">
            {filteredFormats.map(format => (
              <div key={format.id} className={`rounded-xl overflow-hidden border ${getCategoryColor(format.category)}`}>
                {/* Format Header */}
                <div
                  onClick={() => setExpandedFormat(expandedFormat === format.id ? null : format.id)}
                  className="p-4 cursor-pointer hover:bg-slate-700/50 transition-colors bg-slate-700/30"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-white text-lg">{format.title}</h3>
                        <p className="text-sm text-slate-400 mt-1">{format.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {format.marks && (
                        <span className="px-2 py-1 bg-yellow-900/30 text-yellow-400 rounded text-xs font-medium">
                          {format.marks}
                        </span>
                      )}
                      {format.wordLimit && (
                        <span className="px-2 py-1 bg-slate-600 text-slate-300 rounded text-xs">
                          {format.wordLimit}
                        </span>
                      )}
                      {expandedFormat === format.id ? 
                        <ChevronUp className="w-5 h-5 text-slate-400" /> : 
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      }
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedFormat === format.id && (
                  <div className="border-t border-slate-600 p-4 space-y-4 bg-slate-800/50">
                    {/* Format Structure */}
                    <div>
                      <h4 className="text-sm font-medium text-blue-400 mb-3 flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Format Structure
                      </h4>
                      <ol className="space-y-2">
                        {format.format.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm">
                            <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-xs font-medium">
                              {idx + 1}
                            </span>
                            <span className="text-slate-300">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Tips */}
                    <div>
                      <h4 className="text-sm font-medium text-green-400 mb-3 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Writing Tips
                      </h4>
                      <ul className="space-y-2">
                        {format.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Sample Topics */}
                    <div>
                      <h4 className="text-sm font-medium text-purple-400 mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Sample Topics for Practice
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {format.sampleTopics.map((topic, idx) => (
                          <span key={idx} className="px-3 py-1.5 bg-purple-900/30 text-purple-300 rounded-lg text-sm">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Example */}
                    {format.example && (
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-sm font-medium text-orange-400 flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            Sample: {format.example.title}
                          </h4>
                          <button
                            onClick={() => copyToClipboard(format.example!.content, format.id)}
                            className="flex items-center gap-1 px-2 py-1 bg-slate-600 hover:bg-slate-500 rounded text-xs text-slate-300 transition-colors"
                          >
                            {copiedId === format.id ? (
                              <>
                                <Check className="w-3 h-3" />
                                Copied!
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                Copy
                              </>
                            )}
                          </button>
                        </div>
                        <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-slate-300 whitespace-pre-wrap overflow-x-auto">
                          {format.example.content}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFormats.length === 0 && (
            <div className="text-center py-12">
              <PenTool className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400">No formats found matching your search</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnglishWritingSkills;
