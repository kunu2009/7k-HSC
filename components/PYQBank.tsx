import React, { useState } from 'react';
import { X, BookOpen, Calendar, Search, Filter, CheckCircle, ChevronDown, ChevronUp, Award, FileText, Star, Clock } from 'lucide-react';

interface PYQBankProps {
  onClose: () => void;
}

interface Question {
  id: string;
  year: string;
  subject: string;
  chapter: string;
  marks: number;
  question: string;
  answer: string;
  type: 'short' | 'long' | 'mcq' | 'grammar';
}

const PYQBank: React.FC<PYQBankProps> = ({ onClose }) => {
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedQ, setExpandedQ] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const subjects = [
    { id: 'all', name: 'All Subjects', color: 'bg-slate-500' },
    { id: 'english', name: 'English', color: 'bg-yellow-500' },
    { id: 'hindi', name: 'Hindi', color: 'bg-orange-500' },
    { id: 'sanskrit', name: 'Sanskrit', color: 'bg-amber-500' },
    { id: 'history', name: 'History', color: 'bg-red-500' },
    { id: 'political', name: 'Political Science', color: 'bg-blue-500' },
    { id: 'economics', name: 'Economics', color: 'bg-green-500' }
  ];

  const years = ['all', '2024', '2023', '2022', '2020', '2019'];
  const types = ['all', 'short', 'long', 'mcq', 'grammar'];

  const pyqQuestions: Question[] = [
    // English PYQs
    {
      id: 'eng-2024-1',
      year: '2024',
      subject: 'english',
      chapter: 'An Astrologer\'s Day',
      marks: 4,
      type: 'long',
      question: 'Describe the character of the astrologer in the story "An Astrologer\'s Day".',
      answer: '**Character of the Astrologer:**\n\n1. **Shrewd and Clever**: He has no formal training in astrology but uses psychology and observation to understand people.\n\n2. **Practical Survivor**: He fled his village after committing a crime and built a new life in the city.\n\n3. **Guilt-ridden**: He carries the burden of thinking he murdered someone for years.\n\n4. **Quick-witted**: When faced with Guru Nayak, he cleverly manipulates the situation to protect himself.\n\n5. **Good Family Man**: Despite his past, he has settled down with a wife and lives a peaceful life.\n\n6. **Observant**: He reads people\'s faces and body language to give convincing predictions.\n\n**Conclusion**: The astrologer is a complex character who represents human ability to reinvent oneself while living with past guilt.'
    },
    {
      id: 'eng-2024-2',
      year: '2024',
      subject: 'english',
      chapter: 'On Saying Please',
      marks: 4,
      type: 'long',
      question: 'What is the importance of good manners according to A.G. Gardiner in "On Saying Please"?',
      answer: '**Importance of Good Manners:**\n\n1. **Social Lubricant**: Good manners oil the wheels of society and make interactions pleasant.\n\n2. **Contagious Nature**: Courtesy spreads from person to person. A pleasant word from one can brighten another\'s day.\n\n3. **Creates Positive Atmosphere**: Saying "please" and "thank you" creates a harmonious environment.\n\n4. **Examples from the Essay**:\n   - The lift-man loses his job for assaulting a rude passenger\n   - The bus conductor\'s courtesy makes everyone\'s day better\n\n5. **Legal vs Moral Obligation**: While bad manners aren\'t illegal, they are morally wrong and socially harmful.\n\n6. **Small Words, Big Impact**: Words like "please", "thank you", "sorry" cost nothing but mean everything.\n\n**Conclusion**: Gardiner emphasizes that courtesy is the foundation of civilized society and costs nothing to practice.'
    },
    {
      id: 'eng-2023-1',
      year: '2023',
      subject: 'english',
      chapter: 'The Cop and the Anthem',
      marks: 4,
      type: 'long',
      question: 'Describe Soapy\'s attempts to get arrested in "The Cop and the Anthem".',
      answer: '**Soapy\'s Attempts to Get Arrested:**\n\n1. **Restaurant Attempt**: Enters a fancy restaurant, eats well, but is thrown out without police being called.\n\n2. **Window Breaking**: Breaks a shop window but a policeman doesn\'t believe he did it.\n\n3. **Restaurant (2nd)**: Another restaurant, but thrown out before he can finish eating.\n\n4. **Harassing a Woman**: Tries to act like a masher but the woman turns out to be happy to meet him.\n\n5. **Creating Disturbance**: Acts drunk and disorderly but cops think he\'s a Yale student celebrating.\n\n6. **Stealing Umbrella**: Takes a man\'s umbrella but the man gives it willingly.\n\n**Irony**: After hearing church anthem and deciding to reform, he is arrested for loitering!\n\n**Theme**: Life\'s irony - when you want something, you can\'t get it; when you don\'t want it, it finds you.'
    },
    {
      id: 'eng-2023-2',
      year: '2023',
      subject: 'english',
      chapter: 'Poetry - Song of the Open Road',
      marks: 3,
      type: 'short',
      question: 'What does the poet mean by "Open Road" in Whitman\'s poem?',
      answer: '**Meaning of "Open Road":**\n\n1. **Literal**: A physical path or highway for travel\n\n2. **Symbolic Meanings**:\n   - **Life\'s Journey**: The road represents life with all its experiences\n   - **Freedom**: Escape from social constraints and conventions\n   - **Self-Discovery**: Journey towards understanding oneself\n   - **Democratic Spirit**: Open to all, regardless of status\n\n3. **Key Lines**: "Afoot and light-hearted I take to the open road, / Healthy, free, the world before me"\n\n**Conclusion**: The open road symbolizes freedom, adventure, and the democratic American spirit of endless possibility.'
    },
    // Hindi PYQs
    {
      id: 'hin-2024-1',
      year: '2024',
      subject: 'hindi',
      chapter: 'गद्य - बात',
      marks: 4,
      type: 'long',
      question: '"बात" पाठ में लेखक ने बातचीत की कला के बारे में क्या कहा है?',
      answer: '**बातचीत की कला - प्रतापनारायण मिश्र:**\n\n1. **बात का महत्व**: बातचीत मनुष्य की सबसे बड़ी विशेषता है जो उसे जानवरों से अलग करती है।\n\n2. **मीठी बोली का प्रभाव**: मीठी बात से बड़े-बड़े काम हो जाते हैं।\n\n3. **कड़वी बात से हानि**: कड़वे वचन से रिश्ते टूट जाते हैं।\n\n4. **उदाहरण**:\n   - "बात ही से देश में राज करते हैं"\n   - "बात ही से बात निकलती है"\n\n5. **सामाजिक महत्व**: समाज में सम्मान बातचीत की शैली पर निर्भर करता है।\n\n**निष्कर्ष**: लेखक मानते हैं कि वाणी ईश्वर का वरदान है और इसका सदुपयोग करना चाहिए।'
    },
    {
      id: 'hin-2024-2',
      year: '2024',
      subject: 'hindi',
      chapter: 'व्याकरण',
      marks: 2,
      type: 'grammar',
      question: 'निम्नलिखित शब्दों के समास विग्रह कीजिए:\n(i) राजपुत्र\n(ii) यथाशक्ति',
      answer: '**समास विग्रह:**\n\n**(i) राजपुत्र**\n- विग्रह: राजा का पुत्र\n- समास: तत्पुरुष समास (संबंध तत्पुरुष)\n\n**(ii) यथाशक्ति**\n- विग्रह: शक्ति के अनुसार\n- समास: अव्ययीभाव समास\n\n**नोट**: अव्ययीभाव समास में पूर्वपद (यथा) प्रधान होता है।'
    },
    {
      id: 'hin-2023-1',
      year: '2023',
      subject: 'hindi',
      chapter: 'कविता - भरत-राम का प्रेम',
      marks: 4,
      type: 'long',
      question: '"भरत-राम का प्रेम" में भाई-भाई के प्रेम का वर्णन कीजिए।',
      answer: '**भरत-राम का प्रेम - तुलसीदास:**\n\n1. **भरत का त्याग**: राज्य पाकर भी भरत ने इसे अस्वीकार किया।\n\n2. **राम के प्रति समर्पण**: भरत 14 वर्ष तक राम की पादुकाओं की पूजा करते रहे।\n\n3. **मिलन का दृश्य**: दोनों भाइयों का मिलन अत्यंत मार्मिक है।\n\n4. **प्रमुख पंक्तियाँ**:\n   - "मुनि समाज में देखि भरत कौं"\n   - दोनों भाई एक-दूसरे को देखकर भावविभोर हो जाते हैं\n\n5. **आदर्श भ्रातृ-प्रेम**: यह प्रसंग भारतीय संस्कृति में आदर्श भाई के रिश्ते का प्रतीक है।\n\n**निष्कर्ष**: तुलसीदास ने भरत-राम के माध्यम से निःस्वार्थ प्रेम का उदाहरण प्रस्तुत किया है।'
    },
    // Sanskrit PYQs
    {
      id: 'san-2024-1',
      year: '2024',
      subject: 'sanskrit',
      chapter: 'आलस्यं हि मनुष्याणाम्',
      marks: 4,
      type: 'long',
      question: '"आलस्यं हि मनुष्याणाम् शरीरस्थो महान् रिपुः" - इस श्लोक का भावार्थ लिखिए।',
      answer: '**भावार्थ:**\n\n**श्लोक**: आलस्यं हि मनुष्याणां शरीरस्थो महान् रिपुः।\nनास्त्युद्यमसमो बन्धुः कृत्वा यं नावसीदति॥\n\n**अर्थ**: आलस्य मनुष्य के शरीर में रहने वाला सबसे बड़ा शत्रु है। परिश्रम के समान कोई मित्र नहीं है, जिसे करके मनुष्य कभी दुखी नहीं होता।\n\n**व्याख्या**:\n1. आलस्य को शरीर में बसा शत्रु कहा गया है\n2. उद्यम (परिश्रम) को सबसे बड़ा मित्र माना गया है\n3. मेहनती व्यक्ति कभी असफल नहीं होता\n\n**शिक्षा**: यह श्लोक परिश्रम के महत्व और आलस्य के दुष्परिणामों को बताता है।'
    },
    {
      id: 'san-2024-2',
      year: '2024',
      subject: 'sanskrit',
      chapter: 'संधि',
      marks: 2,
      type: 'grammar',
      question: 'संधि विच्छेद कीजिए:\n(i) हिमालयः\n(ii) परोपकारः',
      answer: '**संधि विच्छेद:**\n\n**(i) हिमालयः**\n- विच्छेद: हिम + आलयः\n- संधि: दीर्घ स्वर संधि (अ + आ = आ)\n\n**(ii) परोपकारः**\n- विच्छेद: पर + उपकारः\n- संधि: गुण स्वर संधि (अ + उ = ओ)\n\n**नियम**: गुण संधि में अ/आ के साथ उ/ऊ मिलने पर \'ओ\' बनता है।'
    },
    {
      id: 'san-2023-1',
      year: '2023',
      subject: 'sanskrit',
      chapter: 'विद्या',
      marks: 3,
      type: 'short',
      question: '"विद्या ददाति विनयम्" श्लोक का पूरा पाठ लिखकर अर्थ समझाइए।',
      answer: '**पूर्ण श्लोक:**\nविद्या ददाति विनयं विनयाद्याति पात्रताम्।\nपात्रत्वाद्धनमाप्नोति धनाद्धर्मं ततः सुखम्॥\n\n**अर्थ**: विद्या विनय (नम्रता) देती है, विनय से योग्यता आती है, योग्यता से धन मिलता है, धन से धर्म होता है और धर्म से सुख प्राप्त होता है।\n\n**क्रम**:\nविद्या → विनय → पात्रता → धन → धर्म → सुख\n\n**शिक्षा**: विद्या जीवन की समस्त उपलब्धियों का मूल है।'
    },
    // History PYQs
    {
      id: 'his-2024-1',
      year: '2024',
      subject: 'history',
      chapter: 'Renaissance',
      marks: 4,
      type: 'long',
      question: 'Explain the causes and effects of the Renaissance in Europe.',
      answer: '**Renaissance - Causes and Effects:**\n\n**Causes:**\n1. **Fall of Constantinople (1453)**: Greek scholars fled to Italy bringing classical knowledge\n2. **Crusades**: Brought Europeans in contact with Eastern civilization\n3. **Invention of Printing Press**: By Gutenberg (1450) - spread of ideas\n4. **Patronage of Art**: Wealthy families like Medici supported artists\n5. **Rise of Trade**: Commercial prosperity in Italian city-states\n\n**Effects:**\n1. **Art Revolution**: Leonardo da Vinci, Michelangelo, Raphael\n2. **Scientific Spirit**: Questioning of old beliefs\n3. **Humanism**: Focus on human potential and achievements\n4. **Literature**: Dante, Petrarch, Machiavelli\n5. **Religious Reform**: Led to Protestant Reformation\n6. **Geographical Discoveries**: Spirit of inquiry led to exploration\n\n**Conclusion**: Renaissance marked the transition from Medieval to Modern Age.'
    },
    {
      id: 'his-2024-2',
      year: '2024',
      subject: 'history',
      chapter: 'French Revolution',
      marks: 4,
      type: 'long',
      question: 'What were the causes of the French Revolution? Explain in detail.',
      answer: '**Causes of French Revolution (1789):**\n\n**1. Political Causes:**\n- Absolute monarchy under Louis XVI\n- No political rights for common people\n- Lettre de Cachet (arbitrary arrest)\n\n**2. Social Causes:**\n- Three Estates system - inequality\n- First Estate (Clergy) - privileges\n- Second Estate (Nobility) - privileges\n- Third Estate (97% population) - no privileges, heavy taxes\n\n**3. Economic Causes:**\n- Empty treasury due to wars\n- Extravagant spending by royalty\n- Heavy taxation on Third Estate\n- Financial crisis and debt\n\n**4. Intellectual Causes:**\n- Ideas of Rousseau (Social Contract)\n- Voltaire (religious tolerance)\n- Montesquieu (separation of powers)\n\n**5. Immediate Cause:**\n- Calling of Estates General (May 1789)\n- Storming of Bastille (July 14, 1789)\n\n**Motto**: Liberty, Equality, Fraternity'
    },
    {
      id: 'his-2023-1',
      year: '2023',
      subject: 'history',
      chapter: 'Industrial Revolution',
      marks: 4,
      type: 'long',
      question: 'Discuss the impact of Industrial Revolution on society.',
      answer: '**Impact of Industrial Revolution:**\n\n**1. Economic Changes:**\n- Factory system replaced cottage industry\n- Mass production and capitalism\n- Growth of trade and commerce\n- Rise of middle class\n\n**2. Social Changes:**\n- Urbanization - migration to cities\n- New social classes: Capitalists & Workers\n- Poor living conditions in cities\n- Child labor and long working hours\n\n**3. Political Changes:**\n- Rise of trade unions\n- Labor movements\n- Democratic reforms\n- Socialism and Marxism\n\n**4. Positive Effects:**\n- Better transportation (railways)\n- Communication improvement\n- Higher standard of living (eventually)\n- Scientific and technological progress\n\n**5. Negative Effects:**\n- Exploitation of workers\n- Environmental pollution\n- Colonialism for raw materials\n- Economic inequality\n\n**Countries**: Started in Britain (1760s), spread to Europe, America'
    },
    // Political Science PYQs
    {
      id: 'pol-2024-1',
      year: '2024',
      subject: 'political',
      chapter: 'Fundamental Rights',
      marks: 4,
      type: 'long',
      question: 'Explain the six Fundamental Rights guaranteed by the Indian Constitution.',
      answer: '**Six Fundamental Rights (Part III, Articles 12-35):**\n\n**1. Right to Equality (Art. 14-18):**\n- Equality before law\n- No discrimination on grounds of religion, race, caste, sex, place of birth\n- Equality of opportunity in public employment\n- Abolition of untouchability and titles\n\n**2. Right to Freedom (Art. 19-22):**\n- Speech and expression\n- Assembly, association, movement, residence, profession\n- Protection against arrest and detention\n\n**3. Right Against Exploitation (Art. 23-24):**\n- Prohibition of trafficking and forced labor\n- Prohibition of child labor (below 14 years in factories)\n\n**4. Right to Freedom of Religion (Art. 25-28):**\n- Freedom of conscience and religion\n- Right to manage religious affairs\n\n**5. Cultural and Educational Rights (Art. 29-30):**\n- Protection of minorities\' interests\n- Right to establish educational institutions\n\n**6. Right to Constitutional Remedies (Art. 32):**\n- Right to approach Supreme Court\n- Dr. Ambedkar called it "Heart and Soul" of Constitution'
    },
    {
      id: 'pol-2024-2',
      year: '2024',
      subject: 'political',
      chapter: 'Directive Principles',
      marks: 4,
      type: 'long',
      question: 'What are Directive Principles of State Policy? Explain their significance.',
      answer: '**Directive Principles of State Policy (Part IV, Art. 36-51):**\n\n**Definition**: Guidelines for the government to establish social and economic democracy.\n\n**Classification:**\n\n**1. Socialistic Principles:**\n- Adequate means of livelihood\n- Equal pay for equal work\n- Living wage for workers\n- Free legal aid\n\n**2. Gandhian Principles:**\n- Panchayati Raj (Art. 40)\n- Cottage industries\n- Prohibition of intoxicating drinks\n- Protection of cows\n\n**3. Liberal-Intellectual Principles:**\n- Uniform Civil Code (Art. 44)\n- Free and compulsory education (Art. 45)\n- Protection of monuments\n- Separation of judiciary from executive\n\n**Significance:**\n- Blueprint for welfare state\n- Moral obligation on government\n- Helps interpret laws\n- Guide for legislation\n\n**Limitation**: Not enforceable by courts (unlike Fundamental Rights)'
    },
    {
      id: 'pol-2023-1',
      year: '2023',
      subject: 'political',
      chapter: 'President',
      marks: 3,
      type: 'short',
      question: 'Describe the powers and position of the President of India.',
      answer: '**President of India - Powers and Position:**\n\n**Position**: Head of State (nominal executive)\n\n**Executive Powers:**\n- All executive action in his name\n- Appoints PM, Ministers, Governors, Judges\n- Supreme Commander of Armed Forces\n\n**Legislative Powers:**\n- Summons, prorogues Parliament\n- Dissolves Lok Sabha\n- Addresses Parliament\n- Assent to Bills, Ordinances (Art. 123)\n\n**Judicial Powers:**\n- Appoints Supreme Court and High Court judges\n- Pardoning power (Art. 72)\n\n**Emergency Powers:**\n- National Emergency (Art. 352)\n- President\'s Rule (Art. 356)\n- Financial Emergency (Art. 360)\n\n**Note**: Acts on advice of Council of Ministers (Art. 74)'
    },
    // Economics PYQs
    {
      id: 'eco-2024-1',
      year: '2024',
      subject: 'economics',
      chapter: 'Demand',
      marks: 4,
      type: 'long',
      question: 'Explain the law of demand with the help of a demand schedule and demand curve.',
      answer: '**Law of Demand:**\n\n**Statement**: "Other things being equal, when the price of a commodity falls, its quantity demanded increases and when the price rises, its quantity demanded decreases."\n\n**Demand Schedule:**\n| Price (₹) | Quantity Demanded |\n|-----------|------------------|\n| 50        | 10 units         |\n| 40        | 20 units         |\n| 30        | 30 units         |\n| 20        | 40 units         |\n| 10        | 50 units         |\n\n**Demand Curve:**\n- X-axis: Quantity Demanded\n- Y-axis: Price\n- Slopes downward from left to right (negative slope)\n\n**Reasons for Downward Slope:**\n1. Law of Diminishing Marginal Utility\n2. Income Effect\n3. Substitution Effect\n4. New Consumers\n\n**Exceptions:**\n- Giffen goods\n- Veblen goods (prestige goods)\n- Expectation of future price changes'
    },
    {
      id: 'eco-2024-2',
      year: '2024',
      subject: 'economics',
      chapter: 'Elasticity',
      marks: 4,
      type: 'long',
      question: 'Calculate price elasticity of demand if price changes from ₹20 to ₹15 and quantity demanded changes from 40 to 60 units.',
      answer: '**Solution:**\n\n**Given:**\n- P₁ = ₹20, P₂ = ₹15\n- Q₁ = 40 units, Q₂ = 60 units\n\n**Formula:**\nEd = (ΔQ/ΔP) × (P/Q)\n\nOr using percentage method:\nEd = (% change in Qd) / (% change in P)\n\n**Calculation:**\n- ΔQ = Q₂ - Q₁ = 60 - 40 = 20 units\n- ΔP = P₂ - P₁ = 15 - 20 = -5\n- % change in Q = (20/40) × 100 = 50%\n- % change in P = (-5/20) × 100 = -25%\n\n**Ed = 50% / 25% = 2**\n\n**Interpretation:**\n- Ed > 1, therefore demand is **Elastic**\n- A 1% change in price leads to 2% change in quantity demanded\n\n**Nature**: Relatively elastic demand'
    },
    {
      id: 'eco-2023-1',
      year: '2023',
      subject: 'economics',
      chapter: 'National Income',
      marks: 4,
      type: 'long',
      question: 'Explain the different methods of measuring National Income.',
      answer: '**Methods of Measuring National Income:**\n\n**1. Product/Output Method:**\n- Sum of value added by all sectors\n- GDP = Primary + Secondary + Tertiary sectors\n- Avoids double counting\n- Formula: GVA = Value of Output - Intermediate Consumption\n\n**2. Income Method:**\n- Sum of all factor incomes\n- NI = Wages + Rent + Interest + Profit\n- Includes compensation to employees, operating surplus, mixed income\n\n**3. Expenditure Method:**\n- Sum of all final expenditures\n- GDP = C + I + G + (X - M)\n  - C = Consumption\n  - I = Investment\n  - G = Government Expenditure\n  - X-M = Net Exports\n\n**Important Concepts:**\n- GDP at Market Price vs Factor Cost\n- GNP = GDP + NFIA (Net Factor Income from Abroad)\n- NNP = GNP - Depreciation\n- Per Capita Income = National Income / Population\n\n**Difficulties**: Informal sector, non-monetary transactions, data accuracy'
    },
    {
      id: 'eco-2023-2',
      year: '2023',
      subject: 'economics',
      chapter: 'Money and Banking',
      marks: 3,
      type: 'short',
      question: 'Explain the functions of the Reserve Bank of India.',
      answer: '**Functions of RBI:**\n\n**1. Monetary Functions:**\n- Issue of currency notes (sole authority)\n- Banker to Government\n- Banker\'s Bank\n- Controller of credit\n\n**2. Non-Monetary Functions:**\n- Supervisor of banking system\n- Exchange control\n- Collection of data\n- Promotional functions\n\n**3. Key Roles:**\n- Sets Repo Rate, Reverse Repo Rate\n- Manages CRR and SLR\n- Implements monetary policy\n- Manages foreign exchange reserves\n\n**4. Developmental Role:**\n- Priority sector lending norms\n- Financial inclusion\n- Rural credit\n\n**Established**: April 1, 1935\n**Nationalized**: 1949\n**Headquarters**: Mumbai'
    }
  ];

  const filteredQuestions = pyqQuestions.filter(q => {
    const matchSubject = selectedSubject === 'all' || q.subject === selectedSubject;
    const matchYear = selectedYear === 'all' || q.year === selectedYear;
    const matchType = selectedType === 'all' || q.type === selectedType;
    const matchSearch = q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       q.chapter.toLowerCase().includes(searchTerm.toLowerCase());
    return matchSubject && matchYear && matchType && matchSearch;
  });

  const getSubjectColor = (subjectId: string) => {
    return subjects.find(s => s.id === subjectId)?.color || 'bg-slate-500';
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      'short': 'Short Answer',
      'long': 'Long Answer',
      'mcq': 'MCQ',
      'grammar': 'Grammar'
    };
    return labels[type] || type;
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen py-6 px-4">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl shadow-2xl border border-slate-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-4xl">📚</div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Previous Year Questions</h2>
                  <p className="text-purple-100 text-sm mt-1">
                    HSC Board Questions with Solutions (2019-2024)
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

          {/* Search & Filters */}
          <div className="p-4 border-b border-slate-700 space-y-3">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-slate-400"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-colors ${
                  showFilters ? 'bg-purple-500 text-white' : 'bg-slate-800 text-slate-300'
                }`}
              >
                <Filter size={18} />
                Filters
              </button>
            </div>

            {showFilters && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="px-3 py-2 bg-slate-800 border border-slate-600 rounded-xl text-white"
                >
                  {subjects.map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-3 py-2 bg-slate-800 border border-slate-600 rounded-xl text-white"
                >
                  <option value="all">All Years</option>
                  {years.slice(1).map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-3 py-2 bg-slate-800 border border-slate-600 rounded-xl text-white"
                >
                  <option value="all">All Types</option>
                  {types.slice(1).map(t => (
                    <option key={t} value={t}>{getTypeLabel(t)}</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Stats Bar */}
          <div className="p-4 bg-slate-800/50 flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm">
              <span className="text-slate-400">
                <FileText className="inline mr-1" size={16} />
                {filteredQuestions.length} questions
              </span>
              <span className="text-purple-400">
                <Star className="inline mr-1" size={16} />
                Board Exam Pattern
              </span>
            </div>
          </div>

          {/* Questions List */}
          <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
            {filteredQuestions.length === 0 ? (
              <div className="text-center py-10 text-slate-400">
                <BookOpen size={48} className="mx-auto mb-3 opacity-50" />
                <p>No questions found matching your filters</p>
              </div>
            ) : (
              filteredQuestions.map(q => (
                <div
                  key={q.id}
                  className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden"
                >
                  <div
                    onClick={() => setExpandedQ(expandedQ === q.id ? null : q.id)}
                    className="p-4 cursor-pointer hover:bg-slate-700/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`${getSubjectColor(q.subject)} w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <BookOpen className="text-white" size={18} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-2">
                          <span className="px-2 py-0.5 bg-slate-700 rounded text-xs text-slate-300">
                            {q.year}
                          </span>
                          <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded text-xs">
                            {q.marks} marks
                          </span>
                          <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded text-xs">
                            {getTypeLabel(q.type)}
                          </span>
                          <span className="text-slate-500 text-xs">{q.chapter}</span>
                        </div>
                        <p className="text-white font-medium">{q.question}</p>
                      </div>
                      <div className="flex-shrink-0">
                        {expandedQ === q.id ? (
                          <ChevronUp className="text-slate-400" size={20} />
                        ) : (
                          <ChevronDown className="text-slate-400" size={20} />
                        )}
                      </div>
                    </div>
                  </div>

                  {expandedQ === q.id && (
                    <div className="border-t border-slate-700 p-4 bg-slate-800/50">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="text-green-400" size={18} />
                        <span className="text-green-400 font-medium">Model Answer</span>
                      </div>
                      <div className="text-slate-300 whitespace-pre-line text-sm leading-relaxed prose prose-invert max-w-none">
                        {q.answer.split('\n').map((line, i) => {
                          if (line.startsWith('**') && line.endsWith('**')) {
                            return <h4 key={i} className="text-white font-bold mt-3 mb-2">{line.replace(/\*\*/g, '')}</h4>;
                          }
                          if (line.startsWith('**')) {
                            return <p key={i} className="text-purple-300 font-semibold mt-2">{line.replace(/\*\*/g, '')}</p>;
                          }
                          if (line.startsWith('- ') || line.startsWith('* ')) {
                            return <p key={i} className="ml-4">• {line.substring(2)}</p>;
                          }
                          if (line.match(/^\d+\./)) {
                            return <p key={i} className="ml-2">{line}</p>;
                          }
                          return <p key={i}>{line}</p>;
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-700 bg-slate-800/50">
            <p className="text-center text-slate-400 text-sm">
              💡 Practice these questions for better board exam preparation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PYQBank;
