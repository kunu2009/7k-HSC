import React, { useState } from 'react';
import { X, BookText, Users, Star, ChevronDown, ChevronUp, Award, Sparkles, Quote, Feather } from 'lucide-react';

interface HindiSahityaProps {
  onClose: () => void;
}

interface SahityaItem {
  id: number;
  title: string;
  author: string;
  authorHindi: string;
  type: 'कविता' | 'कहानी' | 'निबंध' | 'नाटक' | 'उपन्यास';
  period: string;
  summary: string;
  themes: string[];
  famousLines?: string[];
  characters?: string[];
  importantPoints: string[];
  examTips: string[];
}

const SAHITYA_DATA: SahityaItem[] = [
  {
    id: 1,
    title: "उसने कहा था",
    author: "Chandradhar Sharma Guleri",
    authorHindi: "चंद्रधर शर्मा गुलेरी",
    type: "कहानी",
    period: "1915",
    summary: "अमृतसर की गलियों में एक लड़के और लड़की की मासूम मुलाकात, जो बाद में प्रथम विश्वयुद्ध के मोर्चे पर दोबारा मिलते हैं। लहना सिंह अपनी जान देकर अपने वादे को निभाता है।",
    themes: ["प्रेम की पवित्रता", "बलिदान", "कर्तव्यनिष्ठा", "देशभक्ति"],
    famousLines: [
      "तेरी कुड़माई हो गई?",
      "उसने कहा था।"
    ],
    characters: ["लहना सिंह", "सूबेदारनी", "सूबेदार हजारा सिंह", "वजीरा सिंह"],
    importantPoints: [
      "हिंदी की पहली आधुनिक कहानी मानी जाती है",
      "फ्लैशबैक तकनीक का प्रयोग",
      "पंजाबी परिवेश का सजीव चित्रण",
      "प्रेम का आदर्श रूप प्रस्तुत"
    ],
    examTips: [
      "पात्रों के चरित्र-चित्रण पर ध्यान दें",
      "कथानक के मोड़ याद रखें",
      "शीर्षक की सार्थकता समझें"
    ]
  },
  {
    id: 2,
    title: "पुष्प की अभिलाषा",
    author: "Maithili Sharan Gupt",
    authorHindi: "मैथिलीशरण गुप्त",
    type: "कविता",
    period: "आधुनिक काल",
    summary: "एक फूल की इच्छा है कि वह किसी वीर के मार्ग पर बिछ जाए, न कि देवताओं के चरणों में या प्रेमिका के बालों में। राष्ट्रभक्ति की भावना से ओतप्रोत।",
    themes: ["देशभक्ति", "बलिदान", "त्याग", "राष्ट्रप्रेम"],
    famousLines: [
      "चाह नहीं मैं सुरबाला के गहनों में गूँथा जाऊँ",
      "मुझे तोड़ लेना वनमाली, उस पथ पर देना तुम फेंक"
    ],
    importantPoints: [
      "राष्ट्रीय भावधारा की कविता",
      "पुष्प के माध्यम से बलिदान का संदेश",
      "सरल और सहज भाषा",
      "गुप्त जी 'राष्ट्रकवि' कहलाते हैं"
    ],
    examTips: [
      "भाव-पक्ष पर विशेष ध्यान",
      "प्रतीकात्मकता समझें",
      "कवि परिचय याद रखें"
    ]
  },
  {
    id: 3,
    title: "भारत-भारती",
    author: "Maithili Sharan Gupt",
    authorHindi: "मैथिलीशरण गुप्त",
    type: "कविता",
    period: "1912",
    summary: "भारत के गौरवशाली अतीत और वर्तमान दुर्दशा का चित्रण। राष्ट्रीय जागरण का आह्वान करने वाली महाकाव्यात्मक रचना।",
    themes: ["राष्ट्रीय गौरव", "अतीत का स्मरण", "जागरण", "स्वदेशी"],
    famousLines: [
      "हम कौन थे, क्या हो गए हैं, और क्या होंगे अभी"
    ],
    importantPoints: [
      "तीन खंड: अतीत, वर्तमान, भविष्य",
      "स्वतंत्रता आंदोलन की प्रेरणा",
      "खड़ी बोली में लिखी",
      "राष्ट्रवादी चेतना की अभिव्यक्ति"
    ],
    examTips: [
      "तीनों खंडों की विषयवस्तु",
      "ऐतिहासिक संदर्भ महत्वपूर्ण"
    ]
  },
  {
    id: 4,
    title: "गोदान",
    author: "Premchand",
    authorHindi: "प्रेमचंद",
    type: "उपन्यास",
    period: "1936",
    summary: "किसान होरी की कहानी जो गाय पालने की इच्छा रखता है पर कर्ज के बोझ तले दबा रहता है। भारतीय ग्रामीण जीवन और किसान की दुर्दशा का यथार्थ चित्रण।",
    themes: ["किसान जीवन", "सामाजिक यथार्थ", "गरीबी", "शोषण", "जातिवाद"],
    characters: ["होरी", "धनिया", "गोबर", "झुनिया", "मेहता", "मालती"],
    importantPoints: [
      "प्रेमचंद का अंतिम और श्रेष्ठ उपन्यास",
      "महाजनी सभ्यता की आलोचना",
      "ग्रामीण और शहरी जीवन का द्वंद्व",
      "'गोदान' शब्द का प्रतीकात्मक अर्थ"
    ],
    examTips: [
      "मुख्य पात्रों के चरित्र",
      "सामाजिक समस्याओं की सूची",
      "शीर्षक की सार्थकता"
    ]
  },
  {
    id: 5,
    title: "कफन",
    author: "Premchand",
    authorHindi: "प्रेमचंद",
    type: "कहानी",
    period: "1936",
    summary: "घीसू और माधव बाप-बेटे की कहानी जो अपनी बहू के मरने पर कफन के पैसे शराब में उड़ा देते हैं। समाज की निष्ठुरता और गरीबी की त्रासदी।",
    themes: ["गरीबी", "सामाजिक विसंगति", "मानवीय मूल्यों का ह्रास", "व्यंग्य"],
    characters: ["घीसू", "माधव", "बुधिया"],
    importantPoints: [
      "यथार्थवादी कहानी",
      "समाज की विसंगतियों पर तीखा व्यंग्य",
      "गरीबी का मनोवैज्ञानिक प्रभाव",
      "प्रगतिशील साहित्य का उदाहरण"
    ],
    examTips: [
      "कहानी का संदेश",
      "पात्रों की मनोस्थिति",
      "व्यंग्य के बिंदु"
    ]
  },
  {
    id: 6,
    title: "साकेत",
    author: "Maithili Sharan Gupt",
    authorHindi: "मैथिलीशरण गुप्त",
    type: "कविता",
    period: "1931",
    summary: "राम कथा पर आधारित महाकाव्य जिसमें उर्मिला के विरह और बलिदान को केंद्र में रखा गया है।",
    themes: ["विरह", "त्याग", "नारी महिमा", "कर्तव्य"],
    famousLines: [
      "मैं नीर भरी दुख की बदली"
    ],
    characters: ["उर्मिला", "लक्ष्मण", "राम", "सीता"],
    importantPoints: [
      "9 सर्गों में विभक्त",
      "उर्मिला केंद्रित - नवीन दृष्टिकोण",
      "नारी के त्याग की महिमा",
      "मंगलाचरण से आरंभ"
    ],
    examTips: [
      "उर्मिला का चरित्र-चित्रण",
      "प्रसिद्ध पंक्तियाँ याद करें"
    ]
  },
  {
    id: 7,
    title: "मधुशाला",
    author: "Harivansh Rai Bachchan",
    authorHindi: "हरिवंशराय बच्चन",
    type: "कविता",
    period: "1935",
    summary: "मधुशाला, मधु, साकी, प्याला के प्रतीकों के माध्यम से जीवन दर्शन की अभिव्यक्ति। हालावाद की प्रसिद्ध रचना।",
    themes: ["जीवन दर्शन", "प्रतीकवाद", "रूबाई शैली", "आनंदवाद"],
    famousLines: [
      "मदिरालय जाने को घर से चलता है पीनेवाला",
      "किस पथ से जाऊँ असमंजस में है वह भोलाभाला"
    ],
    importantPoints: [
      "135 रुबाइयाँ",
      "हालावाद का प्रतिनिधि काव्य",
      "प्रतीकात्मक अर्थ महत्वपूर्ण",
      "गीतात्मकता और लयबद्धता"
    ],
    examTips: [
      "प्रतीकों के अर्थ जानें",
      "हालावाद की विशेषताएँ",
      "रुबाई छंद की समझ"
    ]
  },
  {
    id: 8,
    title: "ध्रुवस्वामिनी",
    author: "Jaishankar Prasad",
    authorHindi: "जयशंकर प्रसाद",
    type: "नाटक",
    period: "1933",
    summary: "गुप्तकाल की ऐतिहासिक पृष्ठभूमि पर आधारित नाटक। ध्रुवस्वामिनी का संघर्ष और आत्मसम्मान की रक्षा।",
    themes: ["नारी स्वाभिमान", "ऐतिहासिक पृष्ठभूमि", "प्रेम और कर्तव्य"],
    characters: ["ध्रुवस्वामिनी", "रामगुप्त", "चंद्रगुप्त विक्रमादित्य", "शिखरस्वामी"],
    importantPoints: [
      "तीन अंकों का नाटक",
      "नारी अस्मिता का प्रश्न",
      "ऐतिहासिक तथ्यों पर आधारित",
      "प्रसाद जी के नाटकों में श्रेष्ठ"
    ],
    examTips: [
      "नाटक की ऐतिहासिक पृष्ठभूमि",
      "ध्रुवस्वामिनी का चरित्र",
      "संवाद शैली"
    ]
  }
];

const TYPES = ['सभी', 'कविता', 'कहानी', 'निबंध', 'नाटक', 'उपन्यास'];

const IMPORTANT_AUTHORS = [
  { name: "प्रेमचंद", title: "उपन्यास सम्राट", works: "गोदान, कफन, निर्मला, रंगभूमि" },
  { name: "मैथिलीशरण गुप्त", title: "राष्ट्रकवि", works: "भारत-भारती, साकेत, यशोधरा" },
  { name: "जयशंकर प्रसाद", title: "छायावाद के स्तंभ", works: "कामायनी, ध्रुवस्वामिनी, आँसू" },
  { name: "सूर्यकांत त्रिपाठी निराला", title: "छायावादी कवि", works: "राम की शक्तिपूजा, तुलसीदास" },
  { name: "हरिवंशराय बच्चन", title: "हालावादी कवि", works: "मधुशाला, निशा निमंत्रण" },
  { name: "महादेवी वर्मा", title: "आधुनिक मीरा", works: "यामा, नीहार, दीपशिखा" }
];

const HindiSahitya: React.FC<HindiSahityaProps> = ({ onClose }) => {
  const [selectedType, setSelectedType] = useState('सभी');
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [showAuthors, setShowAuthors] = useState(false);

  const filteredData = selectedType === 'सभी'
    ? SAHITYA_DATA
    : SAHITYA_DATA.filter(item => item.type === selectedType);

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'कविता': 'bg-pink-500/30 text-pink-300',
      'कहानी': 'bg-blue-500/30 text-blue-300',
      'निबंध': 'bg-green-500/30 text-green-300',
      'नाटक': 'bg-purple-500/30 text-purple-300',
      'उपन्यास': 'bg-orange-500/30 text-orange-300'
    };
    return colors[type] || 'bg-gray-500/30 text-gray-300';
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-rose-900 via-pink-900 to-red-900 rounded-2xl w-full max-w-5xl max-h-[95vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="bg-black/30 p-4 sm:p-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-pink-200 flex items-center gap-2">
              <BookText className="w-6 h-6" />
              हिंदी साहित्य - Hindi Literature
            </h2>
            <p className="text-pink-300/70 text-sm mt-1">
              महत्वपूर्ण रचनाएँ एवं लेखक | HSC Arts
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-pink-200 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Type Tabs */}
        <div className="bg-black/20 p-3 flex flex-wrap gap-2">
          {TYPES.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                selectedType === type
                  ? 'bg-pink-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {type}
            </button>
          ))}
          <button
            onClick={() => setShowAuthors(!showAuthors)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ml-auto ${
              showAuthors
                ? 'bg-yellow-500 text-white'
                : 'bg-yellow-500/30 text-yellow-300 hover:bg-yellow-500/50'
            }`}
          >
            <Users className="w-4 h-4 inline mr-1" />
            प्रमुख लेखक
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* Authors Section */}
          {showAuthors && (
            <div className="mb-6 bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/30">
              <h3 className="font-semibold text-yellow-300 mb-3 flex items-center gap-2">
                <Award className="w-5 h-5" />
                प्रमुख साहित्यकार
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {IMPORTANT_AUTHORS.map((author, idx) => (
                  <div key={idx} className="bg-black/20 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Feather className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-200 font-bold">{author.name}</span>
                    </div>
                    <p className="text-pink-300 text-xs mb-1">"{author.title}"</p>
                    <p className="text-gray-400 text-xs">{author.works}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Literature Items */}
          <div className="space-y-4">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="bg-black/20 rounded-xl overflow-hidden border border-pink-500/30"
              >
                {/* Item Header */}
                <div
                  onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
                  className="p-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                        {item.type}
                      </span>
                      <div>
                        <h3 className="font-semibold text-white text-lg">
                          {item.title}
                        </h3>
                        <p className="text-pink-300/70 text-sm">
                          {item.authorHindi} • {item.period}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {expandedItem === item.id ? (
                        <ChevronUp className="w-5 h-5 text-pink-300" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-pink-300" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedItem === item.id && (
                  <div className="p-4 border-t border-pink-500/30 space-y-4">
                    {/* Summary */}
                    <div className="bg-blue-500/10 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-300 mb-2">📖 सारांश</h4>
                      <p className="text-gray-200 text-sm">{item.summary}</p>
                    </div>

                    {/* Themes */}
                    <div className="bg-purple-500/10 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-300 mb-2">🎯 मुख्य विषय</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.themes.map((theme, idx) => (
                          <span key={idx} className="bg-purple-500/20 text-purple-200 px-2 py-1 rounded text-sm">
                            {theme}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Famous Lines */}
                    {item.famousLines && (
                      <div className="bg-pink-500/10 rounded-lg p-4">
                        <h4 className="font-semibold text-pink-300 mb-2 flex items-center gap-2">
                          <Quote className="w-4 h-4" /> प्रसिद्ध पंक्तियाँ
                        </h4>
                        <div className="space-y-2">
                          {item.famousLines.map((line, idx) => (
                            <p key={idx} className="text-gray-200 text-sm italic border-l-2 border-pink-500 pl-3">
                              "{line}"
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Characters */}
                    {item.characters && (
                      <div className="bg-green-500/10 rounded-lg p-4">
                        <h4 className="font-semibold text-green-300 mb-2 flex items-center gap-2">
                          <Users className="w-4 h-4" /> प्रमुख पात्र
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.characters.map((char, idx) => (
                            <span key={idx} className="bg-green-500/20 text-green-200 px-2 py-1 rounded text-sm">
                              {char}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Important Points */}
                    <div className="bg-yellow-500/10 rounded-lg p-4">
                      <h4 className="font-semibold text-yellow-300 mb-2 flex items-center gap-2">
                        <Star className="w-4 h-4" /> महत्वपूर्ण बिंदु
                      </h4>
                      <ul className="space-y-1">
                        {item.importantPoints.map((point, idx) => (
                          <li key={idx} className="text-gray-200 text-sm flex items-start gap-2">
                            <Sparkles className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Exam Tips */}
                    <div className="bg-red-500/10 rounded-lg p-4">
                      <h4 className="font-semibold text-red-300 mb-2">⚡ परीक्षा टिप्स</h4>
                      <ul className="space-y-1">
                        {item.examTips.map((tip, idx) => (
                          <li key={idx} className="text-gray-200 text-sm flex items-start gap-2">
                            <span className="text-red-400">→</span>
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
        <div className="bg-black/30 p-4 flex justify-between items-center text-sm text-pink-300/70">
          <span>{filteredData.length} रचनाएँ • विधा: {selectedType}</span>
          <span>HSC Maharashtra Board - हिंदी साहित्य</span>
        </div>
      </div>
    </div>
  );
};

export default HindiSahitya;
