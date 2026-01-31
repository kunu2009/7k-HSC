import React, { useState } from 'react';
import { X, PenTool, BookOpen, FileText, CheckCircle, Copy, Check, ChevronDown, ChevronUp, Lightbulb, Star, Target } from 'lucide-react';

interface ArtsWritingGuideProps {
  onClose: () => void;
}

const ArtsWritingGuide: React.FC<ArtsWritingGuideProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'essay' | 'short' | 'brief' | 'tips'>('essay');
  const [expandedTemplate, setExpandedTemplate] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const templates = {
    essay: [
      {
        id: 'essay1',
        title: 'Long Answer (8 marks)',
        subject: 'All Subjects',
        wordLimit: '200-250 words',
        structure: `**INTRODUCTION (2-3 sentences)**
- Hook/Context: Start with relevance or definition
- Thesis: State main argument clearly
- Preview: Mention key points to be discussed

**BODY PARAGRAPHS (3-4 paragraphs)**

*Point 1: Definition/Background*
- Define key terms
- Historical context if applicable
- Foundation for further discussion

*Point 2: Main Arguments/Features*
- Core characteristics
- Examples and evidence
- Data/statistics if available

*Point 3: Analysis/Impact*
- Significance and implications
- Cause-effect relationships
- Real-world applications

*Point 4: Critical Evaluation (if needed)*
- Merits and demerits
- Different perspectives
- Counter-arguments

**CONCLUSION (2-3 sentences)**
- Summarize main points
- Restate thesis in new words
- Future outlook/recommendation`,
        example: `**Q: Explain the importance of Industrial Revolution.**

**Introduction:**
The Industrial Revolution, spanning from 1760-1840, marked a fundamental transformation in manufacturing, transportation, and social structures. This period revolutionized human civilization and laid the foundation for modern industrial society.

**Body:**
*Definition and Background:*
The Industrial Revolution began in Britain with innovations in textile manufacturing, steam power, and iron production. It represented a shift from agrarian handicraft economy to machine-based manufacturing.

*Key Features:*
- Mechanization of production using machines
- Rise of factory system replacing cottage industries
- Development of steam power and coal mining
- Urbanization and growth of industrial cities

*Impact:*
- Economic growth and increased productivity
- Social changes: rise of middle class, urban migration
- Technological innovations: railways, steamships
- Global trade expansion

**Conclusion:**
The Industrial Revolution fundamentally transformed human society, economy, and technology. Its effects continue to influence our modern world, making it one of the most significant periods in human history.`,
      },
      {
        id: 'essay2',
        title: 'Compare and Contrast (8 marks)',
        subject: 'All Subjects',
        wordLimit: '200-250 words',
        structure: `**INTRODUCTION**
- Introduce both concepts/items being compared
- State the purpose of comparison
- Mention key aspects to be compared

**BODY: SIMILARITIES**
- Point out common features
- Explain shared characteristics
- Provide examples

**BODY: DIFFERENCES**
- Highlight key distinctions
- Use comparative language
- Support with evidence

**EVALUATION**
- Which is more significant/effective?
- Under what conditions each applies?

**CONCLUSION**
- Summary of comparison
- Final verdict/analysis`,
        example: `**Q: Distinguish between Primary and Tertiary activities.**

**Introduction:**
Economic activities are classified based on their relationship with natural resources and value addition. Primary and tertiary activities represent two distinct stages of economic development.

**Similarities:**
- Both contribute to GDP
- Both provide employment
- Both are essential for economy

**Differences:**
| Aspect | Primary | Tertiary |
|--------|---------|----------|
| Nature | Extraction from nature | Services |
| Examples | Agriculture, Mining | Banking, Education |
| Value Addition | Low | High |
| Skill Level | Often manual | Often specialized |
| GDP Share | Decreasing | Increasing |

**Conclusion:**
While primary activities form the base of economy by extracting raw materials, tertiary activities add value through services. Developed economies shift from primary to tertiary dominance.`,
      },
    ],
    short: [
      {
        id: 'short1',
        title: 'Short Notes (4 marks)',
        subject: 'All Subjects',
        wordLimit: '80-100 words',
        structure: `**DEFINITION (1 sentence)**
- Clear, concise definition

**KEY POINTS (3-4 bullet points)**
- Main characteristic 1
- Main characteristic 2
- Main characteristic 3
- Important example

**SIGNIFICANCE (1 sentence)**
- Why it matters`,
        example: `**Q: Write a short note on HDI (Human Development Index).**

**Definition:**
HDI is a composite index measuring average achievements in three basic dimensions of human development.

**Key Points:**
• Three components: Life Expectancy Index, Education Index, Income Index
• Developed by UNDP in 1990
• Value ranges from 0 to 1
• India's HDI (2022): 0.644 (Medium human development)
• Top countries: Norway, Switzerland, Iceland

**Significance:**
HDI provides a comprehensive measure of development beyond just economic indicators, focusing on people-centered development.`,
      },
      {
        id: 'short2',
        title: 'Give Reasons (4 marks)',
        subject: 'Geography/Economics',
        wordLimit: '80-100 words',
        structure: `**STATEMENT (Acknowledge the fact)**
- Restate the given statement

**REASON 1 (Primary cause)**
- Most important reason with explanation

**REASON 2 (Supporting cause)**
- Secondary reason with evidence

**REASON 3 (Additional factor)**
- Tertiary reason

**LINK (Conclusion)**
- How reasons connect to statement`,
        example: `**Q: Mumbai is called the commercial capital of India.**

**Statement:**
Mumbai, the capital of Maharashtra, is rightfully called the commercial capital of India.

**Reasons:**
1. **Financial Hub:** Mumbai houses the Bombay Stock Exchange (BSE), National Stock Exchange (NSE), and RBI headquarters, making it India's financial nerve center.

2. **Industrial Base:** Major industries including textiles, pharmaceuticals, and film industry (Bollywood) are concentrated here.

3. **Port Facilities:** Mumbai Port and JNPT handle major share of India's maritime trade.

4. **Corporate Headquarters:** Most multinational companies and Indian conglomerates have their headquarters in Mumbai.

**Conclusion:**
These factors make Mumbai the undisputed commercial capital of India.`,
      },
    ],
    brief: [
      {
        id: 'brief1',
        title: 'Brief Answer (2 marks)',
        subject: 'All Subjects',
        wordLimit: '20-30 words',
        structure: `**Direct Answer:**
- State the answer immediately
- Include 2-3 key facts
- No elaborate explanation needed`,
        example: `**Q: What is Globalisation?**

Globalisation is the integration of economies, societies, and cultures worldwide through trade, investment, technology, and information flow, creating an interconnected global village.`,
      },
      {
        id: 'brief2',
        title: 'Define Terms (2 marks)',
        subject: 'All Subjects',
        wordLimit: '15-25 words',
        structure: `**Definition Format:**
[Term] is/refers to [category] that [distinguishing features/function].`,
        example: `**Q: Define Birth Rate.**

Birth Rate is the number of live births per 1,000 population in a given year. It indicates population growth potential of a region.

**Q: Define GDP.**

GDP (Gross Domestic Product) is the total monetary value of all final goods and services produced within a country's borders in a specific time period.`,
      },
      {
        id: 'brief3',
        title: 'MCQ-based Questions (1 mark)',
        subject: 'All Subjects',
        wordLimit: 'One word/phrase',
        structure: `**Format:**
- Read all options carefully
- Eliminate obviously wrong answers
- Choose the most accurate option`,
        example: `**Q: Renaissance began in _____.**
(a) France  (b) Italy  (c) Germany  (d) England

**Answer:** (b) Italy

**Tip:** Renaissance = "Rebirth" started in Italian city-states like Florence, Venice in 14th century.`,
      },
    ],
    tips: [
      {
        id: 'tip1',
        title: 'Time Management',
        subject: 'Exam Strategy',
        wordLimit: 'Strategy',
        structure: `**80 Marks Paper - 3 Hours**

| Question Type | Marks | Time |
|--------------|-------|------|
| Section A: MCQs (20) | 20 | 25 min |
| Section B: Brief (6×2) | 12 | 15 min |
| Section C: Short (6×4) | 24 | 45 min |
| Section D: Long (3×8) | 24 | 60 min |
| **Revision** | - | **35 min** |

**Tips:**
• Start with your strongest section
• Don't spend more than 8 min on 8-mark answers
• Keep last 30 mins for revision
• Attempt all questions - no negative marking`,
        example: '',
      },
      {
        id: 'tip2',
        title: 'Presentation Tips',
        subject: 'Answer Writing',
        wordLimit: 'Strategy',
        structure: `**DO's:**
✅ Use proper headings and subheadings
✅ Write in points where applicable
✅ Underline key terms and definitions
✅ Draw neat diagrams/tables if relevant
✅ Maintain proper margins
✅ Use examples to support arguments
✅ Write conclusion for long answers

**DON'Ts:**
❌ Don't write in one long paragraph
❌ Don't exceed word limit excessively
❌ Don't use informal language
❌ Don't leave questions unanswered
❌ Don't write outside the margins
❌ Don't overuse pencil for writing`,
        example: '',
      },
      {
        id: 'tip3',
        title: 'Keywords & Power Words',
        subject: 'Answer Writing',
        wordLimit: 'Vocabulary',
        structure: `**For Introduction:**
- "XYZ refers to..."
- "The concept of... involves..."
- "In contemporary times..."
- "Historically speaking..."

**For Body:**
- "Furthermore/Moreover..."
- "Consequently/Therefore..."
- "For instance/For example..."
- "According to experts..."
- "Studies suggest that..."

**For Analysis:**
- "Significantly..."
- "Notably..."
- "It is evident that..."
- "The key factor is..."

**For Conclusion:**
- "In conclusion..."
- "To summarize..."
- "Thus, it can be said that..."
- "The analysis reveals..."`,
        example: '',
      },
    ],
  };

  const tabs = [
    { id: 'essay', name: 'Long Answers', icon: FileText, count: templates.essay.length },
    { id: 'short', name: 'Short Answers', icon: BookOpen, count: templates.short.length },
    { id: 'brief', name: 'Brief Answers', icon: PenTool, count: templates.brief.length },
    { id: 'tips', name: 'Writing Tips', icon: Lightbulb, count: templates.tips.length },
  ];

  const currentTemplates = templates[activeTab];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <PenTool size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Arts Writing Guide</h2>
                <p className="text-blue-100">Master answer writing for HSC board exams</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition">
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b bg-gray-50">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 py-4 font-medium flex items-center justify-center gap-2 transition ${
                activeTab === tab.id
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-white'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <tab.icon size={18} />
              <span className="hidden sm:inline">{tab.name}</span>
              <span className="w-5 h-5 rounded-full bg-gray-200 text-xs flex items-center justify-center">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[60vh] p-6">
          <div className="space-y-4">
            {currentTemplates.map((template) => (
              <div
                key={template.id}
                className="border rounded-xl overflow-hidden hover:shadow-md transition"
              >
                {/* Template Header */}
                <button
                  onClick={() => setExpandedTemplate(expandedTemplate === template.id ? null : template.id)}
                  className="w-full p-4 bg-gray-50 flex items-center justify-between hover:bg-gray-100 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                      <Star size={20} />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-gray-800">{template.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>{template.subject}</span>
                        <span>•</span>
                        <span>{template.wordLimit}</span>
                      </div>
                    </div>
                  </div>
                  {expandedTemplate === template.id ? (
                    <ChevronUp size={20} className="text-gray-400" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400" />
                  )}
                </button>

                {/* Expanded Content */}
                {expandedTemplate === template.id && (
                  <div className="p-4 border-t">
                    {/* Structure */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                          <Target size={16} />
                          Structure Template
                        </h4>
                        <button
                          onClick={() => copyToClipboard(template.structure, `${template.id}-structure`)}
                          className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition flex items-center gap-1"
                        >
                          {copiedId === `${template.id}-structure` ? (
                            <><Check size={14} /> Copied!</>
                          ) : (
                            <><Copy size={14} /> Copy</>
                          )}
                        </button>
                      </div>
                      <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                        {template.structure}
                      </div>
                    </div>

                    {/* Example */}
                    {template.example && (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                            <CheckCircle size={16} className="text-green-500" />
                            Sample Answer
                          </h4>
                          <button
                            onClick={() => copyToClipboard(template.example, `${template.id}-example`)}
                            className="px-3 py-1 text-sm bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition flex items-center gap-1"
                          >
                            {copiedId === `${template.id}-example` ? (
                              <><Check size={14} /> Copied!</>
                            ) : (
                              <><Copy size={14} /> Copy</>
                            )}
                          </button>
                        </div>
                        <div className="bg-green-50 border border-green-200 p-4 rounded-lg text-sm text-gray-700 whitespace-pre-wrap">
                          {template.example}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Reference Footer */}
        <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Lightbulb size={16} className="text-yellow-500" />
              <span>Pro Tip: Practice writing 2 answers daily from each category</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span>📝 8 marks = 200-250 words</span>
              <span>📄 4 marks = 80-100 words</span>
              <span>✏️ 2 marks = 20-30 words</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtsWritingGuide;
