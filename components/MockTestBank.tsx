import React, { useState, useEffect } from "react";
import {
  Clock,
  BookOpen,
  Target,
  Award,
  RefreshCw,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Trophy,
  Star,
} from "lucide-react";

interface MockQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  marks: number;
}

interface MockTest {
  id: string;
  title: string;
  subject: string;
  duration: number; // minutes
  totalMarks: number;
  questions: MockQuestion[];
  difficulty: "Easy" | "Medium" | "Hard";
}

const MOCK_TESTS: MockTest[] = [
  // ECONOMICS MOCK TESTS
  {
    id: "eco-mock-1",
    title: "Economics Full Test 1",
    subject: "Economics",
    duration: 180,
    totalMarks: 80,
    difficulty: "Medium",
    questions: [
      {
        id: "q1",
        question: "Microeconomics studies:",
        options: [
          "Individual units",
          "National income",
          "Inflation",
          "Foreign trade",
        ],
        correctIndex: 0,
        explanation:
          "Microeconomics deals with individual economic units like consumers, firms, etc.",
        marks: 1,
      },
      {
        id: "q2",
        question: "Cardinal utility is measured in:",
        options: ["Utils", "Rupees", "Numbers", "Percentages"],
        correctIndex: 0,
        explanation: "Cardinal utility is measured in utils (imaginary units).",
        marks: 1,
      },
      {
        id: "q3",
        question: "Law of demand states that:",
        options: [
          "Price and demand are directly related",
          "Price and demand are inversely related",
          "Price does not affect demand",
          "Demand is always constant",
        ],
        correctIndex: 1,
        explanation:
          "As price increases, demand decreases (inverse relationship).",
        marks: 1,
      },
      {
        id: "q4",
        question: "Elasticity of demand formula is:",
        options: [
          "% Change in Demand / % Change in Price",
          "% Change in Price / % Change in Demand",
          "Change in Demand × Price",
          "Demand / Supply",
        ],
        correctIndex: 0,
        explanation: "Ed = (% ΔQ / % ΔP)",
        marks: 1,
      },
      {
        id: "q5",
        question: "If Ed > 1, demand is:",
        options: ["Elastic", "Inelastic", "Unitary", "Perfectly elastic"],
        correctIndex: 0,
        explanation:
          "Ed > 1 means elastic demand (responsive to price changes).",
        marks: 1,
      },
      {
        id: "q6",
        question: "Supply curve slopes:",
        options: ["Upward", "Downward", "Horizontal", "Vertical"],
        correctIndex: 0,
        explanation:
          "Supply curve slopes upward (direct relationship between price and supply).",
        marks: 1,
      },
      {
        id: "q7",
        question: "Perfect competition has:",
        options: ["One seller", "Few sellers", "Many sellers", "Two sellers"],
        correctIndex: 2,
        explanation: "Perfect competition has many buyers and sellers.",
        marks: 1,
      },
      {
        id: "q8",
        question: "Monopoly means:",
        options: ["One seller", "Two sellers", "Many sellers", "No sellers"],
        correctIndex: 0,
        explanation: "Monopoly has a single seller controlling the market.",
        marks: 1,
      },
      {
        id: "q9",
        question: "Index number measures:",
        options: [
          "Average change",
          "Total change",
          "Constant values",
          "Absolute values",
        ],
        correctIndex: 0,
        explanation:
          "Index numbers measure average percentage change over time.",
        marks: 1,
      },
      {
        id: "q10",
        question: "GDP stands for:",
        options: [
          "Gross Domestic Product",
          "General Domestic Product",
          "Gross Development Product",
          "Good Domestic Product",
        ],
        correctIndex: 0,
        explanation:
          "GDP = Gross Domestic Product (total value of goods/services).",
        marks: 1,
      },
      {
        id: "q11",
        question: "National Income = GDP -",
        options: ["Depreciation", "Taxes", "Subsidies", "Exports"],
        correctIndex: 0,
        explanation: "NI = GDP - Depreciation - Indirect taxes + Subsidies.",
        marks: 1,
      },
      {
        id: "q12",
        question: "Direct tax example:",
        options: ["Income tax", "GST", "Excise duty", "Customs duty"],
        correctIndex: 0,
        explanation: "Income tax is a direct tax (burden cannot be shifted).",
        marks: 1,
      },
      {
        id: "q13",
        question: "Indirect tax example:",
        options: ["Property tax", "GST", "Income tax", "Wealth tax"],
        correctIndex: 1,
        explanation:
          "GST is an indirect tax (burden can be shifted to consumers).",
        marks: 1,
      },
      {
        id: "q14",
        question: "Fiscal policy deals with:",
        options: [
          "Money supply",
          "Government budget",
          "Exchange rate",
          "Inflation",
        ],
        correctIndex: 1,
        explanation:
          "Fiscal policy uses government budget (taxes & expenditure).",
        marks: 1,
      },
      {
        id: "q15",
        question: "Monetary policy is controlled by:",
        options: ["Government", "RBI", "SEBI", "World Bank"],
        correctIndex: 1,
        explanation: "RBI (Reserve Bank of India) controls monetary policy.",
        marks: 1,
      },
      {
        id: "q16",
        question: "CRR stands for:",
        options: [
          "Cash Reserve Ratio",
          "Credit Reserve Ratio",
          "Capital Reserve Ratio",
          "Currency Reserve Ratio",
        ],
        correctIndex: 0,
        explanation:
          "CRR = Cash Reserve Ratio (cash banks must maintain with RBI).",
        marks: 1,
      },
      {
        id: "q17",
        question: "Repo rate is:",
        options: [
          "Rate at which RBI lends to banks",
          "Rate at which banks lend to RBI",
          "Interest on savings",
          "Foreign exchange rate",
        ],
        correctIndex: 0,
        explanation: "Repo rate = Rate at which RBI lends to commercial banks.",
        marks: 1,
      },
      {
        id: "q18",
        question: "Balance of Trade includes:",
        options: [
          "Only visible items",
          "Only invisible items",
          "Both visible & invisible",
          "Only capital transfers",
        ],
        correctIndex: 0,
        explanation: "BOT = Exports - Imports of goods (visible items only).",
        marks: 1,
      },
      {
        id: "q19",
        question: "Favorable BOT means:",
        options: [
          "Exports > Imports",
          "Imports > Exports",
          "Exports = Imports",
          "No trade",
        ],
        correctIndex: 0,
        explanation: "Favorable BOT when exports exceed imports.",
        marks: 1,
      },
      {
        id: "q20",
        question: "WTO was established in:",
        options: ["1947", "1995", "2000", "1991"],
        correctIndex: 1,
        explanation: "WTO (World Trade Organization) was established in 1995.",
        marks: 1,
      },
    ],
  },
  {
    id: "eco-mock-2",
    title: "Economics Full Test 2",
    subject: "Economics",
    duration: 180,
    totalMarks: 80,
    difficulty: "Hard",
    questions: [
      {
        id: "q1",
        question: "Marginal utility is:",
        options: [
          "Addition to total utility",
          "Subtraction from total utility",
          "Same as total utility",
          "None of these",
        ],
        correctIndex: 0,
        explanation: "MU = Change in TU / Change in Quantity",
        marks: 1,
      },
      {
        id: "q2",
        question: "Consumer equilibrium in indifference curve:",
        options: [
          "MRS = Price ratio",
          "MU = 0",
          "TU is maximum",
          "Supply = Demand",
        ],
        correctIndex: 0,
        explanation: "Equilibrium when MRS = Px/Py (slope of budget line).",
        marks: 1,
      },
      {
        id: "q3",
        question: "Giffen goods have:",
        options: [
          "Positive income effect",
          "Negative income effect",
          "Zero income effect",
          "No effect",
        ],
        correctIndex: 1,
        explanation:
          "Giffen goods show positive price effect (demand increases with price).",
        marks: 1,
      },
      {
        id: "q4",
        question: "Cross elasticity for substitutes:",
        options: ["Positive", "Negative", "Zero", "Infinity"],
        correctIndex: 0,
        explanation:
          "For substitutes, cross elasticity is positive (tea-coffee).",
        marks: 1,
      },
      {
        id: "q5",
        question: "Income elasticity for inferior goods:",
        options: ["Positive", "Negative", "Zero", "One"],
        correctIndex: 1,
        explanation: "Inferior goods have negative income elasticity.",
        marks: 1,
      },
      {
        id: "q6",
        question: "Change in supply is due to:",
        options: ["Price change", "Non-price factors", "Both", "None"],
        correctIndex: 1,
        explanation:
          "Change in supply = shift (non-price factors). Extension/contraction = price.",
        marks: 1,
      },
      {
        id: "q7",
        question: "Oligopoly means:",
        options: ["Few sellers", "One seller", "Many sellers", "Two sellers"],
        correctIndex: 0,
        explanation: "Oligopoly has few large sellers with interdependence.",
        marks: 1,
      },
      {
        id: "q8",
        question: "Price discrimination is possible in:",
        options: [
          "Perfect competition",
          "Monopoly",
          "Pure competition",
          "None",
        ],
        correctIndex: 1,
        explanation:
          "Monopolist can charge different prices to different consumers.",
        marks: 1,
      },
      {
        id: "q9",
        question: "Laspeyre's index uses:",
        options: [
          "Base year quantities",
          "Current year quantities",
          "Average quantities",
          "Both",
        ],
        correctIndex: 0,
        explanation: "Laspeyre's uses base year quantities as weights.",
        marks: 1,
      },
      {
        id: "q10",
        question: "Paasche's index uses:",
        options: [
          "Base year quantities",
          "Current year quantities",
          "Average quantities",
          "Both",
        ],
        correctIndex: 1,
        explanation: "Paasche's uses current year quantities as weights.",
        marks: 1,
      },
      {
        id: "q11",
        question: "GNP = GDP +",
        options: [
          "Net factor income from abroad",
          "Depreciation",
          "Taxes",
          "Subsidies",
        ],
        correctIndex: 0,
        explanation: "GNP = GDP + NFIA (Net Factor Income from Abroad).",
        marks: 1,
      },
      {
        id: "q12",
        question: "Personal Income = NI -",
        options: ["Corporate tax", "Income tax", "GST", "Excise"],
        correctIndex: 0,
        explanation:
          "PI = NI - (Corporate tax + Undistributed profits + Social security) + Transfer payments.",
        marks: 1,
      },
      {
        id: "q13",
        question: "Disposable Income = PI -",
        options: [
          "Direct taxes",
          "Indirect taxes",
          "Both taxes",
          "No deduction",
        ],
        correctIndex: 0,
        explanation: "DI = PI - Direct taxes (income available for spending).",
        marks: 1,
      },
      {
        id: "q14",
        question: "Progressive tax means:",
        options: [
          "Rate increases with income",
          "Rate decreases with income",
          "Flat rate",
          "No tax",
        ],
        correctIndex: 0,
        explanation: "Progressive tax: higher income → higher tax rate.",
        marks: 1,
      },
      {
        id: "q15",
        question: "Regressive tax means:",
        options: [
          "Rate decreases with income",
          "Rate increases with income",
          "Flat rate",
          "No tax",
        ],
        correctIndex: 0,
        explanation:
          "Regressive tax: burden is more on poor (e.g., GST on essentials).",
        marks: 1,
      },
      {
        id: "q16",
        question: "SLR stands for:",
        options: [
          "Statutory Liquidity Ratio",
          "Standard Liquidity Ratio",
          "Structural Liquidity Ratio",
          "Special Liquidity Ratio",
        ],
        correctIndex: 0,
        explanation: "SLR = Minimum liquid assets banks must maintain.",
        marks: 1,
      },
      {
        id: "q17",
        question: "Reverse repo rate is:",
        options: [
          "Rate at which banks lend to RBI",
          "Rate at which RBI lends to banks",
          "Same as repo rate",
          "Interest on deposits",
        ],
        correctIndex: 0,
        explanation:
          "Reverse repo = Rate at which banks park surplus funds with RBI.",
        marks: 1,
      },
      {
        id: "q18",
        question: "Capital account includes:",
        options: ["FDI & FII", "Exports & imports", "Remittances", "Tourism"],
        correctIndex: 0,
        explanation:
          "Capital account records investment flows (FDI, FII, loans).",
        marks: 1,
      },
      {
        id: "q19",
        question: "Current account deficit means:",
        options: [
          "Payments > Receipts",
          "Receipts > Payments",
          "Balanced",
          "Surplus",
        ],
        correctIndex: 0,
        explanation: "CAD when current payments exceed receipts.",
        marks: 1,
      },
      {
        id: "q20",
        question: "IMF provides:",
        options: [
          "Short-term loans",
          "Long-term loans",
          "Grants",
          "Technical help only",
        ],
        correctIndex: 0,
        explanation: "IMF provides short-term balance of payments support.",
        marks: 1,
      },
    ],
  },
  // HISTORY MOCK TEST
  {
    id: "his-mock-1",
    title: "History Full Test 1",
    subject: "History",
    duration: 180,
    totalMarks: 80,
    difficulty: "Medium",
    questions: [
      {
        id: "q1",
        question: "Renaissance began in:",
        options: ["Italy", "France", "England", "Germany"],
        correctIndex: 0,
        explanation: "Renaissance started in Italy in the 14th century.",
        marks: 1,
      },
      {
        id: "q2",
        question: "Father of Renaissance:",
        options: ["Leonardo da Vinci", "Petrarch", "Dante", "Michelangelo"],
        correctIndex: 1,
        explanation: "Petrarch is called the Father of Renaissance.",
        marks: 1,
      },
      {
        id: "q3",
        question: "Mona Lisa was painted by:",
        options: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Donatello"],
        correctIndex: 2,
        explanation: "Leonardo da Vinci painted the famous Mona Lisa.",
        marks: 1,
      },
      {
        id: "q4",
        question: "Martin Luther started:",
        options: ["Renaissance", "Reformation", "Revolution", "Enlightenment"],
        correctIndex: 1,
        explanation:
          "Martin Luther initiated the Protestant Reformation in 1517.",
        marks: 1,
      },
      {
        id: "q5",
        question: "95 Theses were nailed to church door in:",
        options: ["1515", "1517", "1520", "1525"],
        correctIndex: 1,
        explanation: "Martin Luther nailed 95 Theses in Wittenberg in 1517.",
        marks: 1,
      },
      {
        id: "q6",
        question: "Father of Scientific Method:",
        options: ["Newton", "Galileo", "Francis Bacon", "Copernicus"],
        correctIndex: 2,
        explanation: "Francis Bacon developed the scientific method.",
        marks: 1,
      },
      {
        id: "q7",
        question: "Heliocentric theory was proposed by:",
        options: ["Ptolemy", "Copernicus", "Kepler", "Galileo"],
        correctIndex: 1,
        explanation:
          "Copernicus proposed that Sun is at the center (heliocentric).",
        marks: 1,
      },
      {
        id: "q8",
        question: "Printing press was invented by:",
        options: ["Gutenberg", "Edison", "Bell", "Marconi"],
        correctIndex: 0,
        explanation: "Johannes Gutenberg invented the printing press (1440s).",
        marks: 1,
      },
      {
        id: "q9",
        question: "Vasco da Gama reached India in:",
        options: ["1492", "1498", "1500", "1510"],
        correctIndex: 1,
        explanation: "Vasco da Gama reached Calicut, India in 1498.",
        marks: 1,
      },
      {
        id: "q10",
        question: "Columbus discovered America in:",
        options: ["1490", "1492", "1495", "1500"],
        correctIndex: 1,
        explanation: "Christopher Columbus reached Americas in 1492.",
        marks: 1,
      },
      {
        id: "q11",
        question: "Battle of Plassey was fought in:",
        options: ["1757", "1764", "1770", "1780"],
        correctIndex: 0,
        explanation:
          "Battle of Plassey (1757) - British defeated Siraj-ud-Daulah.",
        marks: 1,
      },
      {
        id: "q12",
        question: "Subsidiary Alliance was introduced by:",
        options: ["Dalhousie", "Wellesley", "Cornwallis", "Hastings"],
        correctIndex: 1,
        explanation: "Lord Wellesley introduced Subsidiary Alliance (1798).",
        marks: 1,
      },
      {
        id: "q13",
        question: "Doctrine of Lapse was introduced by:",
        options: ["Wellesley", "Dalhousie", "Cornwallis", "Bentinck"],
        correctIndex: 1,
        explanation: "Lord Dalhousie introduced Doctrine of Lapse.",
        marks: 1,
      },
      {
        id: "q14",
        question: "Sati was abolished by:",
        options: ["Dalhousie", "Bentinck", "Cornwallis", "Wellesley"],
        correctIndex: 1,
        explanation: "Lord William Bentinck abolished Sati in 1829.",
        marks: 1,
      },
      {
        id: "q15",
        question: "Brahmo Samaj was founded by:",
        options: [
          "Dayanand Saraswati",
          "Raja Ram Mohan Roy",
          "Vivekananda",
          "Ramakrishna",
        ],
        correctIndex: 1,
        explanation: "Raja Ram Mohan Roy founded Brahmo Samaj (1828).",
        marks: 1,
      },
      {
        id: "q16",
        question: "Arya Samaj was founded by:",
        options: [
          "Raja Ram Mohan Roy",
          "Dayanand Saraswati",
          "Vivekananda",
          "Keshab Sen",
        ],
        correctIndex: 1,
        explanation: "Swami Dayanand Saraswati founded Arya Samaj (1875).",
        marks: 1,
      },
      {
        id: "q17",
        question: "First War of Independence was in:",
        options: ["1857", "1858", "1860", "1865"],
        correctIndex: 0,
        explanation: "Revolt of 1857 (also called First War of Independence).",
        marks: 1,
      },
      {
        id: "q18",
        question: "Indian National Congress was founded in:",
        options: ["1880", "1885", "1890", "1895"],
        correctIndex: 1,
        explanation: "INC was founded in 1885 by A.O. Hume.",
        marks: 1,
      },
      {
        id: "q19",
        question: "Partition of Bengal happened in:",
        options: ["1900", "1905", "1910", "1911"],
        correctIndex: 1,
        explanation: "Lord Curzon partitioned Bengal in 1905.",
        marks: 1,
      },
      {
        id: "q20",
        question: "Jallianwala Bagh massacre was in:",
        options: ["1917", "1918", "1919", "1920"],
        correctIndex: 2,
        explanation:
          "Jallianwala Bagh massacre on April 13, 1919 by General Dyer.",
        marks: 1,
      },
    ],
  },
  // ENGLISH MOCK TEST
  {
    id: "eng-mock-1",
    title: "English Yuvakbharati Mock Test",
    subject: "English",
    duration: 180,
    totalMarks: 80,
    difficulty: "Medium",
    questions: [
      {
        id: "q1",
        question: 'Who wrote "An Astrologer\'s Day"?',
        options: ["O. Henry", "R.K. Narayan", "Virginia Woolf", "Pico Iyer"],
        correctIndex: 1,
        explanation: 'R.K. Narayan wrote "An Astrologer\'s Day".',
        marks: 1,
      },
      {
        id: "q2",
        question: "The astrologer predicted that the stranger would:",
        options: ["Die soon", "Get rich", "Never return", "Find treasure"],
        correctIndex: 2,
        explanation:
          "The astrologer told Guru Nayak he would never find his attacker.",
        marks: 1,
      },
      {
        id: "q3",
        question: '"On Saying Please" is written by:',
        options: [
          "Alfred George Gardiner",
          "O. Henry",
          "R.K. Narayan",
          "Jon Krakauer",
        ],
        correctIndex: 0,
        explanation: "A.G. Gardiner wrote this essay on good manners.",
        marks: 1,
      },
      {
        id: "q4",
        question: "Soapy wanted to get arrested to:",
        options: [
          "Commit crime",
          "Get free food",
          "Stay in jail for winter",
          "Meet friend",
        ],
        correctIndex: 2,
        explanation: "Soapy wanted to spend winter in a warm jail.",
        marks: 1,
      },
      {
        id: "q5",
        question: '"The Cop and the Anthem" was written by:',
        options: ["R.K. Narayan", "O. Henry", "Virginia Woolf", "Edgar Guest"],
        correctIndex: 1,
        explanation: 'O. Henry wrote "The Cop and the Anthem".',
        marks: 1,
      },
      {
        id: "q6",
        question: "Walt Whitman wrote:",
        options: [
          "Indian Weavers",
          "Song of the Open Road",
          "The Inchcape Rock",
          "Money",
        ],
        correctIndex: 1,
        explanation: 'Walt Whitman wrote "Song of the Open Road".',
        marks: 1,
      },
      {
        id: "q7",
        question: '"Indian Weavers" was written by:',
        options: [
          "Sarojini Naidu",
          "Walt Whitman",
          "Lord Byron",
          "Robert Southey",
        ],
        correctIndex: 0,
        explanation: "Sarojini Naidu, the Nightingale of India, wrote this.",
        marks: 1,
      },
      {
        id: "q8",
        question: 'Three stages of life in "Indian Weavers":',
        options: [
          "Birth, Marriage, Death",
          "Morning, Noon, Night",
          "Childhood, Youth, Old age",
          "Spring, Summer, Winter",
        ],
        correctIndex: 0,
        explanation:
          "The poem represents Birth (blue), Marriage (purple), Death (white).",
        marks: 1,
      },
      {
        id: "q9",
        question: "Sir Ralph cut the Inchcape Bell to:",
        options: ["Help sailors", "Harm Abbot", "Make music", "Sell it"],
        correctIndex: 1,
        explanation: "Sir Ralph cut the bell out of spite against the Abbot.",
        marks: 1,
      },
      {
        id: "q10",
        question: '"Have You Earned Your Tomorrow" is written by:',
        options: ["Edgar Guest", "W.H. Davies", "Lord Byron", "Mamang Dai"],
        correctIndex: 0,
        explanation: "Edgar Guest wrote this inspirational poem.",
        marks: 1,
      },
      {
        id: "q11",
        question: '"Father Returning Home" was written by:',
        options: [
          "Walt Whitman",
          "Dilip Chitre",
          "Lord Byron",
          "Robert Southey",
        ],
        correctIndex: 1,
        explanation: "Dilip Chitre, a Marathi poet, wrote this.",
        marks: 1,
      },
      {
        id: "q12",
        question: "The father in the poem is:",
        options: ["Happy", "Lonely and tired", "Angry", "Excited"],
        correctIndex: 1,
        explanation: "The poem depicts a tired, lonely father commuting home.",
        marks: 1,
      },
      {
        id: "q13",
        question: '"Money" was written by:',
        options: ["W.H. Davies", "Edgar Guest", "Walt Whitman", "Dilip Chitre"],
        correctIndex: 0,
        explanation: 'W.H. Davies wrote "Money" criticizing materialism.',
        marks: 1,
      },
      {
        id: "q14",
        question: '"She Walks in Beauty" was written by:',
        options: [
          "Lord Byron",
          "Robert Southey",
          "Walt Whitman",
          "Sarojini Naidu",
        ],
        correctIndex: 0,
        explanation: "Lord Byron wrote this romantic poem.",
        marks: 1,
      },
      {
        id: "q15",
        question: "Metaphor is:",
        options: [
          "Direct comparison",
          "Indirect comparison",
          "Exaggeration",
          "Repetition",
        ],
        correctIndex: 1,
        explanation:
          'Metaphor is an indirect comparison without using "like" or "as".',
        marks: 1,
      },
      {
        id: "q16",
        question: "Simile uses:",
        options: ["Like or as", "Not or never", "And or but", "Which or that"],
        correctIndex: 0,
        explanation: 'Simile uses "like" or "as" for comparison.',
        marks: 1,
      },
      {
        id: "q17",
        question: "Alliteration is:",
        options: [
          "Repetition of consonant sounds",
          "Exaggeration",
          "Opposite meaning",
          "Question",
        ],
        correctIndex: 0,
        explanation:
          'Alliteration repeats consonant sounds (e.g., "Peter Piper picked").',
        marks: 1,
      },
      {
        id: "q18",
        question: "Hyperbole means:",
        options: ["Understatement", "Exaggeration", "Comparison", "Repetition"],
        correctIndex: 1,
        explanation: "Hyperbole is deliberate exaggeration for effect.",
        marks: 1,
      },
      {
        id: "q19",
        question: "Oxymoron is:",
        options: [
          "Contradictory terms together",
          "Similar sounds",
          "Rhyming words",
          "Long sentences",
        ],
        correctIndex: 0,
        explanation:
          'Oxymoron combines contradictory terms (e.g., "bitter sweet").',
        marks: 1,
      },
      {
        id: "q20",
        question: "A sonnet has:",
        options: ["10 lines", "12 lines", "14 lines", "16 lines"],
        correctIndex: 2,
        explanation: "A sonnet has 14 lines (Shakespearean or Petrarchan).",
        marks: 1,
      },
    ],
  },
];

const MockTestBank: React.FC = () => {
  const [selectedTest, setSelectedTest] = useState<MockTest | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showReviewSection, setShowReviewSection] = useState(false);

  useEffect(() => {
    if (isTestStarted && timeLeft > 0 && !isTestCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && isTestStarted) {
      handleSubmitTest();
    }
  }, [timeLeft, isTestStarted, isTestCompleted]);

  const startTest = (test: MockTest) => {
    setSelectedTest(test);
    setTimeLeft(test.duration * 60);
    setUserAnswers(new Array(test.questions.length).fill(-1));
    setCurrentQuestionIndex(0);
    setIsTestStarted(true);
    setIsTestCompleted(false);
    setShowResults(false);
  };

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    if (
      selectedTest &&
      currentQuestionIndex < selectedTest.questions.length - 1
    ) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmitTest = () => {
    setIsTestCompleted(true);
    setShowResults(true);
  };

  const calculateResults = () => {
    if (!selectedTest)
      return {
        score: 0,
        percentage: 0,
        correct: 0,
        incorrect: 0,
        unattempted: 0,
      };

    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;

    userAnswers.forEach((answer, index) => {
      if (answer === -1) {
        unattempted++;
      } else if (answer === selectedTest.questions[index].correctIndex) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const score = correct * (selectedTest.questions[0]?.marks || 1);
    const percentage = (score / selectedTest.totalMarks) * 100;

    return { score, percentage, correct, incorrect, unattempted };
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const resetTest = () => {
    setSelectedTest(null);
    setIsTestStarted(false);
    setIsTestCompleted(false);
    setShowResults(false);
    setShowReviewSection(false);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
  };

  if (!selectedTest) {
    return (
      <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-white mb-2">
              Mock Test Bank
            </h1>
            <p className="text-slate-300">
              Practice with full-length mock tests for HSC preparation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_TESTS.map((test) => (
              <div
                key={test.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-indigo-400 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {test.title}
                    </h3>
                    <p className="text-sm text-indigo-300">{test.subject}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      test.difficulty === "Easy"
                        ? "bg-green-500/20 text-green-300"
                        : test.difficulty === "Medium"
                          ? "bg-yellow-500/20 text-yellow-300"
                          : "bg-red-500/20 text-red-300"
                    }`}
                  >
                    {test.difficulty}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-slate-300">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{test.duration} minutes</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <BookOpen className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      {test.questions.length} questions
                    </span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Target className="w-4 h-4 mr-2" />
                    <span className="text-sm">{test.totalMarks} marks</span>
                  </div>
                </div>

                <button
                  onClick={() => startTest(test)}
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 transition-all flex items-center justify-center"
                >
                  Start Test
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const results = calculateResults();
    const currentQuestion = selectedTest.questions[currentQuestionIndex];

    return (
      <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-6">
            <div className="text-center mb-6">
              <Award
                className={`w-20 h-20 mx-auto mb-4 ${
                  results.percentage >= 75
                    ? "text-yellow-400"
                    : results.percentage >= 50
                      ? "text-blue-400"
                      : "text-slate-400"
                }`}
              />
              <h2 className="text-3xl font-bold text-white mb-2">
                Test Completed!
              </h2>
              <p className="text-slate-300">{selectedTest.title}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-green-500/20 rounded-lg p-4 text-center border border-green-500/30">
                <CheckCircle2 className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-300">
                  {results.correct}
                </p>
                <p className="text-sm text-green-200">Correct</p>
              </div>
              <div className="bg-red-500/20 rounded-lg p-4 text-center border border-red-500/30">
                <XCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-red-300">
                  {results.incorrect}
                </p>
                <p className="text-sm text-red-200">Incorrect</p>
              </div>
              <div className="bg-slate-500/20 rounded-lg p-4 text-center border border-slate-500/30">
                <Clock className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-slate-300">
                  {results.unattempted}
                </p>
                <p className="text-sm text-slate-200">Unattempted</p>
              </div>
              <div className="bg-indigo-500/20 rounded-lg p-4 text-center border border-indigo-500/30">
                <Star className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-indigo-300">
                  {results.percentage.toFixed(1)}%
                </p>
                <p className="text-sm text-indigo-200">Score</p>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setShowReviewSection(!showReviewSection)}
                className="px-6 py-3 bg-indigo-500 text-white rounded-lg font-medium hover:bg-indigo-600 transition-all"
              >
                {showReviewSection ? "Hide Answers" : "Review Answers"}
              </button>
              <button
                onClick={resetTest}
                className="px-6 py-3 bg-slate-600 text-white rounded-lg font-medium hover:bg-slate-700 transition-all flex items-center"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Take Another Test
              </button>
            </div>
          </div>

          {/* Answer Review */}
          {showReviewSection && (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">
                Answer Review
              </h3>
              <div className="space-y-4">
                {selectedTest.questions.map((q, idx) => {
                  const userAns = userAnswers[idx];
                  const isCorrect = userAns === q.correctIndex;
                  const isAttempted = userAns !== -1;

                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded-lg border ${
                        isCorrect
                          ? "bg-green-500/10 border-green-500/30"
                          : isAttempted
                            ? "bg-red-500/10 border-red-500/30"
                            : "bg-slate-500/10 border-slate-500/30"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 shrink-0" />
                        ) : isAttempted ? (
                          <XCircle className="w-5 h-5 text-red-400 mt-1 shrink-0" />
                        ) : (
                          <Clock className="w-5 h-5 text-slate-400 mt-1 shrink-0" />
                        )}
                        <div className="flex-1">
                          <p className="text-white font-medium mb-2">
                            Q{idx + 1}. {q.question}
                          </p>
                          {/* Show all options with visual indicators */}
                          <div className="space-y-1 mb-2">
                            {q.options.map((opt, optIdx) => {
                              const isUserChoice = userAns === optIdx;
                              const isCorrectOption = q.correctIndex === optIdx;
                              return (
                                <div
                                  key={optIdx}
                                  className={`text-sm px-3 py-1.5 rounded flex items-center gap-2 ${
                                    isCorrectOption && isUserChoice
                                      ? "bg-green-500/20 text-green-300 font-medium"
                                      : isCorrectOption
                                        ? "bg-green-500/10 text-green-300"
                                        : isUserChoice
                                          ? "bg-red-500/20 text-red-300 font-medium"
                                          : "text-slate-400"
                                  }`}
                                >
                                  <span className="w-5 h-5 rounded-full border flex items-center justify-center text-xs shrink-0">
                                    {String.fromCharCode(65 + optIdx)}
                                  </span>
                                  <span>{opt}</span>
                                  {isUserChoice && isCorrectOption && (
                                    <CheckCircle2 className="w-4 h-4 text-green-400 ml-auto shrink-0" />
                                  )}
                                  {isUserChoice && !isCorrectOption && (
                                    <span className="ml-auto text-xs text-red-400 shrink-0">
                                      ✗ Your pick
                                    </span>
                                  )}
                                  {isCorrectOption && !isUserChoice && (
                                    <span className="ml-auto text-xs text-green-400 shrink-0">
                                      ✓ Correct
                                    </span>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                          {!isAttempted && (
                            <p className="text-sm text-slate-400 italic">
                              Not attempted
                            </p>
                          )}
                          <p className="text-sm text-slate-300 mt-2 italic">
                            {q.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  const currentQuestion = selectedTest.questions[currentQuestionIndex];
  const selectedAnswer = userAnswers[currentQuestionIndex];

  return (
    <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6 border border-white/20 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">
              {selectedTest.title}
            </h2>
            <p className="text-sm text-slate-300">
              Question {currentQuestionIndex + 1} of{" "}
              {selectedTest.questions.length}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div
              className={`flex items-center px-4 py-2 rounded-lg ${
                timeLeft < 300
                  ? "bg-red-500/20 text-red-300"
                  : "bg-indigo-500/20 text-indigo-300"
              }`}
            >
              <Clock className="w-5 h-5 mr-2" />
              <span className="font-mono font-bold">
                {formatTime(timeLeft)}
              </span>
            </div>
            <button
              onClick={handleSubmitTest}
              className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-all"
            >
              Submit Test
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex gap-1 mb-2">
            {selectedTest.questions.map((_, idx) => (
              <div
                key={idx}
                className={`flex-1 h-2 rounded-full ${
                  userAnswers[idx] !== -1
                    ? "bg-indigo-500"
                    : idx === currentQuestionIndex
                      ? "bg-yellow-500"
                      : "bg-slate-600"
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-slate-400 text-center">
            {userAnswers.filter((a) => a !== -1).length} /{" "}
            {selectedTest.questions.length} answered
          </p>
        </div>

        {/* Question Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-6 border border-white/20">
          <div className="mb-6">
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium">
              {currentQuestion.marks}{" "}
              {currentQuestion.marks === 1 ? "Mark" : "Marks"}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-8">
            {currentQuestion.question}
          </h3>

          <div className="space-y-4">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  selectedAnswer === idx
                    ? "border-indigo-500 bg-indigo-500/20 text-white"
                    : "border-white/20 bg-white/5 text-slate-300 hover:border-white/40"
                }`}
              >
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4 ${
                      selectedAnswer === idx
                        ? "border-indigo-500 bg-indigo-500"
                        : "border-slate-500"
                    }`}
                  >
                    {selectedAnswer === idx && (
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="px-6 py-3 bg-slate-600 text-white rounded-lg font-medium hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={
              currentQuestionIndex === selectedTest.questions.length - 1
            }
            className="px-6 py-3 bg-indigo-500 text-white rounded-lg font-medium hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center"
          >
            Next
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MockTestBank;
