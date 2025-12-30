import React, { useState } from 'react';
import { X, Scale, BookOpen, Users, FileText, ChevronDown, ChevronUp, CheckCircle, Star, Award } from 'lucide-react';

interface ConstitutionalArticlesProps {
  onClose: () => void;
}

interface Article {
  number: string;
  title: string;
  titleHindi: string;
  category: string;
  description: string;
  keyPoints: string[];
  examRelevance: 'high' | 'medium' | 'low';
  relatedArticles?: string[];
}

const ARTICLES: Article[] = [
  // Fundamental Rights (Part III)
  {
    number: "14",
    title: "Equality before Law",
    titleHindi: "विधि के समक्ष समता",
    category: "Fundamental Rights",
    description: "The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.",
    keyPoints: [
      "Rule of Law (British concept)",
      "Equal protection (American concept)",
      "No discrimination by state",
      "Reasonable classification is allowed"
    ],
    examRelevance: "high",
    relatedArticles: ["15", "16", "17", "18"]
  },
  {
    number: "15",
    title: "Prohibition of Discrimination",
    titleHindi: "भेदभाव का निषेध",
    category: "Fundamental Rights",
    description: "Prohibits discrimination on grounds of religion, race, caste, sex, or place of birth.",
    keyPoints: [
      "No discrimination in public places",
      "Special provisions for women and children allowed",
      "Special provisions for backward classes (15(4))",
      "EWS reservation added by 103rd Amendment"
    ],
    examRelevance: "high"
  },
  {
    number: "17",
    title: "Abolition of Untouchability",
    titleHindi: "अस्पृश्यता का अंत",
    category: "Fundamental Rights",
    description: "Untouchability is abolished and its practice in any form is forbidden.",
    keyPoints: [
      "Only FR available against private individuals too",
      "Punishable offense under Protection of Civil Rights Act, 1955",
      "Social reform measure"
    ],
    examRelevance: "high"
  },
  {
    number: "19",
    title: "Six Freedoms",
    titleHindi: "छह स्वतंत्रताएं",
    category: "Fundamental Rights",
    description: "Guarantees six freedoms to all citizens of India.",
    keyPoints: [
      "19(1)(a) - Freedom of speech and expression",
      "19(1)(b) - Assemble peacefully without arms",
      "19(1)(c) - Form associations/unions",
      "19(1)(d) - Move freely throughout India",
      "19(1)(e) - Reside and settle anywhere",
      "19(1)(g) - Practice any profession/trade",
      "Reasonable restrictions under 19(2)-(6)"
    ],
    examRelevance: "high"
  },
  {
    number: "21",
    title: "Right to Life and Liberty",
    titleHindi: "प्राण और दैहिक स्वतंत्रता",
    category: "Fundamental Rights",
    description: "No person shall be deprived of his life or personal liberty except according to procedure established by law.",
    keyPoints: [
      "Most important Fundamental Right",
      "Expanded by SC to include Right to Privacy",
      "Includes: dignity, livelihood, shelter, health",
      "Available to all persons (not just citizens)"
    ],
    examRelevance: "high"
  },
  {
    number: "21A",
    title: "Right to Education",
    titleHindi: "शिक्षा का अधिकार",
    category: "Fundamental Rights",
    description: "Free and compulsory education for children aged 6-14 years.",
    keyPoints: [
      "Added by 86th Amendment (2002)",
      "Made effective by RTE Act 2009",
      "Fundamental Right for children 6-14 years",
      "Duty of State to provide"
    ],
    examRelevance: "high"
  },
  {
    number: "32",
    title: "Constitutional Remedies",
    titleHindi: "संवैधानिक उपचार",
    category: "Fundamental Rights",
    description: "Right to move the Supreme Court for enforcement of Fundamental Rights.",
    keyPoints: [
      "Dr. Ambedkar called it 'Soul of Constitution'",
      "5 Writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto",
      "Cannot be suspended except during Emergency",
      "Article 226 - Similar power to High Courts"
    ],
    examRelevance: "high"
  },

  // Directive Principles (Part IV)
  {
    number: "36-51",
    title: "Directive Principles Overview",
    titleHindi: "राज्य के नीति निर्देशक तत्व",
    category: "Directive Principles",
    description: "Guidelines for the State in governance - not justiciable but fundamental in governance.",
    keyPoints: [
      "Borrowed from Irish Constitution",
      "Article 39 - Equal pay for equal work",
      "Article 40 - Panchayati Raj",
      "Article 44 - Uniform Civil Code",
      "Article 45 - Early childhood care",
      "Article 48 - Protect environment, forests, wildlife"
    ],
    examRelevance: "medium"
  },

  // Fundamental Duties (Part IVA)
  {
    number: "51A",
    title: "Fundamental Duties",
    titleHindi: "मौलिक कर्तव्य",
    category: "Fundamental Duties",
    description: "11 duties of citizens added by 42nd Amendment (1976).",
    keyPoints: [
      "Added by 42nd Amendment (1976)",
      "11th duty added by 86th Amendment",
      "Borrowed from USSR Constitution",
      "Not justiciable",
      "Includes: respect Constitution, flag, anthem; protect sovereignty; promote harmony; preserve heritage"
    ],
    examRelevance: "high"
  },

  // Union Executive
  {
    number: "52-78",
    title: "The President",
    titleHindi: "राष्ट्रपति",
    category: "Union Executive",
    description: "Executive power of Union vested in President.",
    keyPoints: [
      "Art 52 - President of India",
      "Art 54 - Electoral college (MPs + MLAs)",
      "Art 56 - 5-year term",
      "Art 61 - Impeachment procedure",
      "Art 72 - Pardoning power",
      "Art 74 - Council of Ministers to aid President"
    ],
    examRelevance: "high"
  },
  {
    number: "74-75",
    title: "Prime Minister & Council of Ministers",
    titleHindi: "प्रधानमंत्री और मंत्रिपरिषद",
    category: "Union Executive",
    description: "Real executive power lies with PM and Council of Ministers.",
    keyPoints: [
      "Art 74 - CoM to aid and advise President",
      "Art 75 - PM appointed by President",
      "Collective responsibility to Lok Sabha",
      "PM is head of government"
    ],
    examRelevance: "high"
  },

  // Parliament
  {
    number: "79-122",
    title: "Parliament",
    titleHindi: "संसद",
    category: "Parliament",
    description: "Union Legislature consisting of President, Lok Sabha, and Rajya Sabha.",
    keyPoints: [
      "Art 79 - Parliament = President + 2 Houses",
      "Art 80 - Rajya Sabha (250 members max)",
      "Art 81 - Lok Sabha (550 members max)",
      "Art 83 - Duration (RS permanent, LS 5 years)",
      "Art 100 - Quorum (1/10th of total members)",
      "Art 110-117 - Money Bills"
    ],
    examRelevance: "high"
  },

  // Emergency Provisions
  {
    number: "352",
    title: "National Emergency",
    titleHindi: "राष्ट्रीय आपातकाल",
    category: "Emergency",
    description: "Proclamation of Emergency due to war, external aggression, or armed rebellion.",
    keyPoints: [
      "Grounds: War, external aggression, armed rebellion",
      "44th Amendment changed 'internal disturbance' to 'armed rebellion'",
      "Declared 3 times: 1962, 1971, 1975",
      "Art 19 suspended automatically",
      "Art 20 & 21 cannot be suspended"
    ],
    examRelevance: "high"
  },
  {
    number: "356",
    title: "President's Rule",
    titleHindi: "राष्ट्रपति शासन",
    category: "Emergency",
    description: "Emergency due to failure of constitutional machinery in a State.",
    keyPoints: [
      "Recommended by Governor",
      "State legislature suspended/dissolved",
      "Maximum duration: 3 years",
      "SR Bommai case (1994) - judicial review allowed",
      "Most misused provision"
    ],
    examRelevance: "high"
  },
  {
    number: "360",
    title: "Financial Emergency",
    titleHindi: "वित्तीय आपातकाल",
    category: "Emergency",
    description: "Emergency due to threat to financial stability of India.",
    keyPoints: [
      "Never declared till date",
      "President can reduce salaries",
      "Money bills can be reserved",
      "Indefinite duration"
    ],
    examRelevance: "medium"
  },

  // Amendment
  {
    number: "368",
    title: "Amendment Procedure",
    titleHindi: "संविधान संशोधन",
    category: "Amendment",
    description: "Power of Parliament to amend the Constitution.",
    keyPoints: [
      "Three types of amendments",
      "Simple majority - some provisions",
      "Special majority (2/3rd) - most provisions",
      "Special majority + State ratification - federal provisions",
      "Basic Structure cannot be amended (Kesavananda Bharati case)"
    ],
    examRelevance: "high"
  }
];

const IMPORTANT_AMENDMENTS = [
  { number: "1st (1951)", description: "Land reforms, added 9th Schedule" },
  { number: "7th (1956)", description: "Reorganization of states" },
  { number: "42nd (1976)", description: "Mini Constitution - added DPSP, Fundamental Duties, Preamble words" },
  { number: "44th (1978)", description: "Reversed 42nd Amendment changes" },
  { number: "73rd (1992)", description: "Panchayati Raj institutions" },
  { number: "74th (1992)", description: "Municipalities" },
  { number: "86th (2002)", description: "Right to Education (Art 21A)" },
  { number: "101st (2016)", description: "GST introduced" },
  { number: "103rd (2019)", description: "10% EWS reservation" }
];

const CATEGORIES = ["All", "Fundamental Rights", "Directive Principles", "Fundamental Duties", "Union Executive", "Parliament", "Emergency", "Amendment"];

const ConstitutionalArticles: React.FC<ConstitutionalArticlesProps> = ({ onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);
  const [showAmendments, setShowAmendments] = useState(false);

  const filteredArticles = selectedCategory === "All" 
    ? ARTICLES 
    : ARTICLES.filter(a => a.category === selectedCategory);

  const getRelevanceColor = (relevance: string) => {
    switch (relevance) {
      case 'high': return 'bg-red-500/30 text-red-300';
      case 'medium': return 'bg-yellow-500/30 text-yellow-300';
      default: return 'bg-green-500/30 text-green-300';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto">
      <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 rounded-2xl w-full max-w-5xl max-h-[95vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="bg-black/30 p-4 sm:p-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-200 flex items-center gap-2">
              <Scale className="w-6 h-6" />
              Constitutional Articles
            </h2>
            <p className="text-blue-300/70 text-sm mt-1">
              भारतीय संविधान के महत्वपूर्ण अनुच्छेद | Political Science
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-blue-200 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="bg-black/20 p-3 flex flex-wrap gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
          <button
            onClick={() => setShowAmendments(!showAmendments)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ml-auto ${
              showAmendments
                ? 'bg-purple-500 text-white'
                : 'bg-purple-500/30 text-purple-300 hover:bg-purple-500/50'
            }`}
          >
            <Award className="w-4 h-4 inline mr-1" />
            Key Amendments
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* Amendments Section */}
          {showAmendments && (
            <div className="mb-6 bg-purple-500/10 rounded-xl p-4 border border-purple-500/30">
              <h3 className="font-semibold text-purple-300 mb-3 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Important Constitutional Amendments
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {IMPORTANT_AMENDMENTS.map((amend, idx) => (
                  <div key={idx} className="bg-black/20 rounded-lg p-3">
                    <span className="text-purple-200 font-bold">{amend.number}</span>
                    <p className="text-gray-300 text-sm mt-1">{amend.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Articles List */}
          <div className="space-y-3">
            {filteredArticles.map((article) => (
              <div
                key={article.number}
                className="bg-black/20 rounded-xl overflow-hidden border border-blue-500/30"
              >
                {/* Article Header */}
                <div
                  onClick={() => setExpandedArticle(expandedArticle === article.number ? null : article.number)}
                  className="p-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="bg-blue-500/30 text-blue-200 px-3 py-1 rounded-full text-sm font-bold min-w-[60px] text-center">
                        Art {article.number}
                      </span>
                      <div>
                        <h3 className="font-semibold text-white">
                          {article.title}
                        </h3>
                        <p className="text-blue-300/70 text-sm">
                          {article.titleHindi}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-xs ${getRelevanceColor(article.examRelevance)}`}>
                        {article.examRelevance === 'high' ? '⭐ High' : article.examRelevance === 'medium' ? 'Medium' : 'Low'}
                      </span>
                      {expandedArticle === article.number ? (
                        <ChevronUp className="w-5 h-5 text-blue-300" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-blue-300" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedArticle === article.number && (
                  <div className="p-4 border-t border-blue-500/30 space-y-4">
                    {/* Description */}
                    <div className="bg-blue-500/10 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-300 mb-2 flex items-center gap-2">
                        <FileText className="w-4 h-4" /> Description
                      </h4>
                      <p className="text-gray-200 text-sm">{article.description}</p>
                    </div>

                    {/* Key Points */}
                    <div className="bg-green-500/10 rounded-lg p-4">
                      <h4 className="font-semibold text-green-300 mb-2 flex items-center gap-2">
                        <Star className="w-4 h-4" /> Key Points
                      </h4>
                      <ul className="space-y-1">
                        {article.keyPoints.map((point, idx) => (
                          <li key={idx} className="text-gray-200 text-sm flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Related Articles */}
                    {article.relatedArticles && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-400">Related:</span>
                        {article.relatedArticles.map((rel, idx) => (
                          <span key={idx} className="bg-white/10 text-gray-300 px-2 py-0.5 rounded">
                            Art {rel}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="flex items-center gap-2">
                      <span className="bg-indigo-500/30 text-indigo-200 px-2 py-1 rounded text-xs">
                        {article.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-black/30 p-4 flex justify-between items-center text-sm text-blue-300/70">
          <span>{filteredArticles.length} articles • Category: {selectedCategory}</span>
          <span>HSC Maharashtra Board - Political Science</span>
        </div>
      </div>
    </div>
  );
};

export default ConstitutionalArticles;
