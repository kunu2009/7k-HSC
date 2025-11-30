

import { Stream, StreamData, Question, Flashcard, Reel, LongAnswer, Subject } from './types';

// --- Data Helpers ---
const REEL_COLORS = [
  'bg-gradient-to-br from-indigo-600 to-blue-600',
  'bg-gradient-to-br from-emerald-600 to-teal-600',
  'bg-gradient-to-br from-rose-600 to-red-600', 
  'bg-gradient-to-br from-purple-600 to-violet-600',
  'bg-gradient-to-br from-amber-500 to-orange-600',
  'bg-gradient-to-br from-cyan-600 to-blue-700',
  'bg-gradient-to-br from-fuchsia-600 to-pink-700',
  'bg-gradient-to-br from-lime-600 to-green-700',
  'bg-gradient-to-br from-sky-600 to-blue-500',
  'bg-gradient-to-br from-red-500 to-orange-500',
];

const getReelColor = (index: number) => REEL_COLORS[index % REEL_COLORS.length];

// ==========================================
//               LONG ANSWER DATA
// ==========================================

// --- OCM CHAPTER 4: Business Services LONG ANSWERS ---
const ocm_ch4_long_answers: LongAnswer[] = [
  {
    id: 'ocm-c4-la1',
    question: 'Define Bank and Explain Different Types of Banks',
    mnemonic: 'C - C - C - S - E - R - I - I - S (C-Series)',
    answer: `### Introduction
A bank is a financial institution which deals with deposits and advances and other related services. It receives money from those who want to save in the form of deposits and lends it to those who need it.

### Types of Banks
1. **Central Bank**: The apex financial institution of the country. In India, RBI is the central bank. It controls the monetary policy and issues currency.
2. **Commercial Bank**: Accepts deposits from public and grants loans. E.g., SBI, HDFC. They play a major role in economic development.
3. **Co-operative Bank**: Registered under Co-operative Societies Act. Main aim is service, not profit. Works at village (Primary), district (Central), and state levels.
4. **Savings Bank**: Main objective is to encourage saving habit among people. E.g., Post Office Savings Bank.
5. **Exchange Bank**: Specifically deals in financing foreign trade. Transactions like buying/selling foreign currency, discounting foreign bills.
6. **Regional Rural Bank (RRB)**: Established to cater to the needs of rural people, specifically small farmers and artisans.
7. **Investment Bank**: Provides financial and advisory assistance to business entities. Does not deal with general public. E.g., underwriting shares.
8. **Industrial Development Bank**: Provides medium and long term funds to business for expansion and modernization. E.g., IFCI, SIDBI.
9. **Specialized Banks**: Banks catering to specific requirements.
   * **EXIM Bank**: For Export-Import.
   * **SIDBI**: For Small Industries.
   * **NABARD**: For Agriculture and Rural Development.`
  },
  {
    id: 'ocm-c4-la2',
    question: 'Road Transport: Advantages and Disadvantages',
    answer: `### Introduction
Transport creates place utility. Road transport is the mode of transport on surface (roads). It connects people and places door-to-door.

### Advantages
1. **Cheap**: Cheaper than air and rail for short distances.
2. **Perishable Goods**: Ideal for transporting milk, vegetables quickly to local markets.
3. **Flexible**: Routes and timings can be adjusted easily.
4. **Door-to-Door Service**: Provides direct service from warehouse to customer's doorstep.
5. **Feeder**: Acts as a feeder to other modes like rail and air transport.

### Disadvantages
1. **Limited Capacity**: Cannot carry bulky and heavy goods over long distances efficiently.
2. **Slow Speed**: Slower compared to air or rail. Affected by traffic.
3. **Accidents**: High chances of accidents on roads.
4. **Pollution**: Causes air and noise pollution.
5. **Irregular**: Affected by weather conditions like floods and rains.`
  }
];

// --- OCM CHAPTER 8: Marketing LONG ANSWERS ---
const ocm_ch8_long_answers: LongAnswer[] = [
  {
    id: 'ocm-c8-la1',
    question: 'Explain the Functions of Marketing in Detail',
    mnemonic: 'M - M - B - B - P - P - P - S (MBPPS)',
    answer: `### Introduction
Marketing is a social process by which individuals and groups obtain what they need and want through creating, offering, and freely exchanging products and services of value with others.

### Functions of Marketing
1. **Marketing Research**: It involves collecting and analyzing information about consumer needs, preferences, and market trends to make decisions.
2. **Market Planning**: Developing a strategy or blueprint to achieve marketing objectives. It outlines what to do, when to do, and how to do.
3. **Buying and Assembling**: Buying involves collecting raw materials or goods. Assembling means bringing goods from different sources to a central place.
4. **Branding**: Giving a distinct name, sign, symbol, or logo to a product to distinguish it from competitors. E.g., Apple, Nike.
5. **Product Development**: Designing the product to make it attractive and useful for the consumer. It involves decisions about quality, size, design.
6. **Packaging and Labelling**: Packaging is the outer wrapper/container (Silent Salesman). Labelling provides detailed information (Ingredients, Price, Date).
7. **Pricing of Product**: Determining the monetary value of the product. It depends on cost, demand, and competition. Crucial for success.
8. **Standardisation and Grading**: Standardisation means setting standards for quality. Grading means sorting products into groups (Grade A, B) based on those standards.`
  }
];

// ==========================================
//            SHARED SUBJECT DATA
// ==========================================

const ECONOMICS_SUBJECT: Subject = {
  id: 'eco',
  name: 'Economics',
  icon: 'TrendingUp',
  color: 'bg-indigo-500',
  syllabus: '1. Introduction to Micro and Macro Economics\n2. Utility Analysis\n3A. Demand Analysis\n3B. Elasticity of Demand\n4. Supply Analysis\n5. Forms of Market\n6. Index Numbers\n7. National Income\n8. Public Finance in India\n9. Money Market and Capital Market in India\n10. Foreign Trade of India',
  paperPattern: '### Economics Paper Pattern (80 Marks)\n\n* **Q.1 Objective Questions (20 Marks)**: Select correct option, Correlation, Odd word out, etc.\n* **Q.2 Identify and Explain Concepts (6/10 Marks)**: (Any 3 out of 5)\n* **Q.3 Distinguish Between (6/10 Marks)**: (Any 3 out of 5)\n* **Q.4 Agree or Disagree (12 Marks)**: (Any 3 out of 5) with reasons.\n* **Q.5 Study Table/Figure/Passage (8 Marks)**: (Any 2 out of 3)\n* **Q.6 Long Answer Questions (16 Marks)**: (Any 2 out of 3)',
  previousPapers: [],
  chapters: [
    {
      id: 'eco1',
      title: '1. Introduction to Micro and Macro Economics',
      description: 'Understanding the two main branches of Economics.',
      summary: '**Micro Economics**: Study of individual units (Small). \n**Macro Economics**: Study of aggregates (Large). \n\n**Main Concepts**: \n* Micro: Slicing method, Partial Equilibrium. \n* Macro: Lumping method, General Equilibrium.',
      detailedNotes: '### 1. Micro Economics\nDerived from Greek word "Mikros" meaning small.\nIt studies the behavior of individual economic units.\n\n#### Features of Micro Economics:\n* **Study of Individual Units**: Consumer, Firm.\n* **Price Theory**: Product & Factor Pricing.\n* **Slicing Method**: Splits economy into small parts.\n* **Partial Equilibrium**: Other things being constant (Ceteris Paribus).\n* **Limited Scope**: Does not deal with nationwide problems.\n* **Analysis of Market Structure**: Perfect Competition, Monopoly etc.\n\n### 2. Macro Economics\nDerived from "Makros" meaning large.\nIt deals with the functioning of the economy as a whole.\n\n#### Features of Macro Economics:\n* **Study of Aggregates**: National Income, Total Employment.\n* **Income Theory**: Determination of National Income.\n* **Lumping Method**: Studies the whole forest, not trees.\n* **General Equilibrium**: Interdependence of variables.\n* **Policy Oriented**: Helps in suggesting policies.\n\n### 3. Importance\n* **Micro**: Free Market Economy, Business Decisions, Model Building.\n* **Macro**: National Policy, Economic Fluctuations, Economic Development.',
      flashcards: [
        { id: 'f1', front: 'Micro Economics derived from?', back: 'Greek word "Mikros" meaning Small/Millionth part.' },
        { id: 'f2', front: 'Macro Economics derived from?', back: 'Greek word "Makros" meaning Large/Aggregate.' },
        { id: 'f3', front: 'Father of Economics?', back: 'Adam Smith (Wealth of Nations - 1776).' },
        { id: 'f4', front: 'Coined terms Micro & Macro?', back: 'Ragnar Frisch (Oslo University) in 1933.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Micro economics is a _______ equilibrium analysis.', options: ['Partial', 'General', 'Total', 'Multi'], correctIndex: 0, explanation: 'Micro economics assumes "other things constant" and isolates a single unit.' },
        { id: 'q2', question: 'Macro economics uses ______ method.', options: ['Slicing', 'Lumping', 'Cutting', 'Dividing'], correctIndex: 1, explanation: 'Macro studies the economy as a whole lump.' }
      ],
      reels: [
        { id: 'r1', title: 'Micro vs Macro', content: 'Micro = Tree (Individual)\nMacro = Forest (Aggregate)', color: getReelColor(0) },
        { id: 'r2', title: 'Ragnar Frisch', content: 'Coined "Micro" and "Macro" in 1933.', color: getReelColor(1) },
        { id: 'r3', title: 'Adam Smith', content: 'Father of Economics.\nBook: Wealth of Nations (1776).', color: getReelColor(2) },
        { id: 'r4', title: 'Price Theory', content: 'Micro Economics is also called Price Theory.', color: getReelColor(3) },
        { id: 'r5', title: 'Income Theory', content: 'Macro Economics is also called Income Theory.', color: getReelColor(4) }
      ]
    },
    {
      id: 'eco2',
      title: '2. Utility Analysis',
      description: 'Cardinal and Ordinal approaches to measuring satisfaction.',
      summary: '**Utility**: Satisfaction derived from consumption.\n**Types**: Total Utility (TU), Marginal Utility (MU).\n**Laws**: Law of DMU, Law of Equi-Marginal Utility.',
      detailedNotes: '### 1. Concept of Utility\n**Utility** = Want satisfying power of a commodity.\nIt is subjective - varies person to person.\n\n### 2. Types of Utility\n* **Total Utility (TU)**: Sum of all utilities from all units consumed.\n* **Marginal Utility (MU)**: Utility from consuming ONE additional unit.\n* **Formula**: MU = TUn - TUn-1 OR MU = ΔTU/ΔQ\n\n### 3. Law of Diminishing Marginal Utility (DMU)\n**Statement**: As consumption increases, MU decreases (other things constant).\n**Assumptions**: Homogeneous units, Continuous consumption, No time gap, Normal consumer.\n**Exceptions**: Hobbies (Stamp collecting), Misers (Money), Drunkards.\n\n### 4. Cardinal Utility\n* Utility can be measured in numbers (Utils).\n* Given by Alfred Marshall.\n* Used in Law of DMU, Equi-Marginal Utility.\n\n### 5. Ordinal Utility\n* Utility can only be ranked (1st, 2nd, 3rd...).\n* Given by Hicks and Allen.\n* Used in Indifference Curve Analysis.\n\n### 6. Law of Equi-Marginal Utility\n**Statement**: Consumer maximizes satisfaction when MU per rupee spent is equal for all goods.\n**Formula**: MUx/Px = MUy/Py = MUm (Marginal Utility of Money)',
      flashcards: [
        { id: 'f1', front: 'What is Utility?', back: 'Want satisfying power of a commodity.' },
        { id: 'f2', front: 'Formula for MU?', back: 'MU = TUn - TUn-1 OR MU = ΔTU/ΔQ' },
        { id: 'f3', front: 'Cardinal Utility given by?', back: 'Alfred Marshall.' },
        { id: 'f4', front: 'Ordinal Utility given by?', back: 'J.R. Hicks and R.G.D. Allen.' },
        { id: 'f5', front: 'When is TU maximum?', back: 'When MU = 0 (Point of Satiety).' }
      ],
      mcqs: [
        { id: 'q1', question: 'When TU is maximum, MU is _______.', options: ['Maximum', 'Zero', 'Negative', 'Positive'], correctIndex: 1, explanation: 'At saturation point, MU becomes zero.' },
        { id: 'q2', question: 'Cardinal utility was introduced by _______.', options: ['Hicks', 'Allen', 'Marshall', 'Keynes'], correctIndex: 2, explanation: 'Alfred Marshall gave the cardinal approach.' },
        { id: 'q3', question: 'Law of DMU does NOT apply to _______.', options: ['Food', 'Water', 'Money (Misers)', 'Clothes'], correctIndex: 2, explanation: 'Misers never feel satisfied with money.' }
      ],
      reels: [
        { id: 'r1', title: 'Utility', content: 'Want satisfying power.\nSubjective = Person to person different.', color: getReelColor(0) },
        { id: 'r2', title: 'TU vs MU', content: 'TU = Total satisfaction.\nMU = Extra satisfaction from ONE more unit.', color: getReelColor(1) },
        { id: 'r3', title: 'MU Formula', content: 'MU = TUn - TUn-1\nOR MU = ΔTU/ΔQ', color: getReelColor(2) },
        { id: 'r4', title: 'Law of DMU', content: 'More you consume,\nLess satisfaction from each extra unit.', color: getReelColor(3) },
        { id: 'r5', title: 'TU Max Point', content: 'When MU = 0\nPoint of Satiety.', color: getReelColor(4) },
        { id: 'r6', title: 'TU Falls', content: 'When MU becomes Negative.\nOver-consumption!', color: getReelColor(5) },
        { id: 'r7', title: 'Cardinal', content: 'Marshall: Utility can be measured in Utils (numbers).', color: getReelColor(6) },
        { id: 'r8', title: 'Ordinal', content: 'Hicks-Allen: Utility can only be ranked (1st, 2nd...).', color: getReelColor(7) }
      ]
    },
    {
      id: 'eco3a',
      title: '3A. Demand Analysis',
      description: 'Law of Demand, Demand Schedule, Demand Curve.',
      summary: '**Demand**: Desire + Ability + Willingness to buy.\n**Law of Demand**: Price ↑ = Demand ↓ (Inverse relationship).\n**Exceptions**: Giffen goods, Veblen goods, Emergencies.',
      detailedNotes: '### 1. Meaning of Demand\n**Demand** = Desire backed by:\n* Ability to pay\n* Willingness to pay\n* At a given price, at a given time.\n\n### 2. Demand Function\nDx = f(Px, Pr, Y, T, E, N, G)\nWhere:\n* Px = Price of commodity X\n* Pr = Price of related goods\n* Y = Income\n* T = Tastes & preferences\n* E = Expectations\n* N = Number of consumers\n* G = Government policy\n\n### 3. Law of Demand\n**Statement**: "Other things remaining constant, when price rises, quantity demanded falls and vice versa."\n**Assumptions**: Income constant, Tastes constant, Prices of related goods constant.\n\n### 4. Demand Schedule\n**Individual Demand Schedule**: One consumer\'s demand at different prices.\n**Market Demand Schedule**: Total demand of all consumers.\n\n### 5. Demand Curve\n* Slopes downward from left to right (Negative slope).\n* Shows inverse relationship between price and quantity.\n\n### 6. Exceptions to Law of Demand\n* **Giffen Goods**: Inferior goods (Increase in price → Increase in demand). Example: Coarse grains.\n* **Veblen Goods**: Prestige/Status goods. Example: Diamonds, Luxury cars.\n* **Speculation**: Expected future price rise.\n* **Emergency**: War, Pandemic.\n* **Necessities**: Medicine, Essential goods.',
      flashcards: [
        { id: 'f1', front: 'What is Demand?', back: 'Desire + Ability + Willingness to pay at a given price & time.' },
        { id: 'f2', front: 'Law of Demand states?', back: 'Price ↑ = Quantity Demanded ↓ (Other things constant).' },
        { id: 'f3', front: 'What are Giffen Goods?', back: 'Inferior goods where demand increases with price. E.g., Coarse grains.' },
        { id: 'f4', front: 'What are Veblen Goods?', back: 'Prestige goods bought for status. E.g., Diamonds, Luxury items.' },
        { id: 'f5', front: 'Demand Curve slope?', back: 'Downward sloping (Negative slope) from left to right.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Demand curve slopes _______ due to inverse relation.', options: ['Upward', 'Downward', 'Horizontal', 'Vertical'], correctIndex: 1, explanation: 'Shows price and quantity move in opposite directions.' },
        { id: 'q2', question: '_______ goods are an exception to law of demand.', options: ['Normal', 'Inferior', 'Giffen', 'All'], correctIndex: 2, explanation: 'Giffen goods show positive relationship.' },
        { id: 'q3', question: 'Diamonds are _______ goods.', options: ['Giffen', 'Veblen', 'Normal', 'Inferior'], correctIndex: 1, explanation: 'Bought for prestige/status.' }
      ],
      reels: [
        { id: 'r1', title: 'Demand', content: 'Desire + Ability + Willingness.\nAt given price & time.', color: getReelColor(0) },
        { id: 'r2', title: 'Law of Demand', content: 'Price ↑ Demand ↓\nPrice ↓ Demand ↑\n(Inverse Relationship)', color: getReelColor(1) },
        { id: 'r3', title: 'Demand Curve', content: 'Slopes Downward.\nLeft to Right.\nNegative Slope.', color: getReelColor(2) },
        { id: 'r4', title: 'Giffen Goods', content: 'Price ↑ Demand ↑\nInferior essential goods.\nExample: Bajra, Jowar.', color: getReelColor(3) },
        { id: 'r5', title: 'Veblen Goods', content: 'Prestige/Snob goods.\nBought for status.\nExample: Diamonds.', color: getReelColor(4) },
        { id: 'r6', title: 'Exceptions', content: 'Giffen, Veblen, Emergency, Speculation, Necessities.', color: getReelColor(5) }
      ]
    },
    {
      id: 'eco3b',
      title: '3B. Elasticity of Demand',
      description: 'Price, Income, and Cross Elasticity explained.',
      summary: '**Elasticity**: Responsiveness of demand to change in price/income.\n**Types**: Price (Ed), Income (Ey), Cross (Ec).\n**Formula**: Ed = %ΔQd / %ΔP',
      detailedNotes: '### 1. Meaning of Elasticity\n**Elasticity of Demand** = Degree of responsiveness of quantity demanded to change in its determinants.\n\n### 2. Price Elasticity of Demand (Ed)\n**Formula**: Ed = %ΔQd / %ΔP = (ΔQ/Q) / (ΔP/P)\n\n**Types**:\n* **Perfectly Elastic (Ed = ∞)**: Horizontal demand curve.\n* **Perfectly Inelastic (Ed = 0)**: Vertical demand curve.\n* **Unitary Elastic (Ed = 1)**: Rectangular hyperbola.\n* **Relatively Elastic (Ed > 1)**: Flatter curve. Luxury goods.\n* **Relatively Inelastic (Ed < 1)**: Steeper curve. Necessities.\n\n### 3. Income Elasticity (Ey)\n**Formula**: Ey = %ΔQd / %ΔY\n* **Positive (Ey > 0)**: Normal goods.\n* **Negative (Ey < 0)**: Inferior goods.\n* **Zero (Ey = 0)**: Neutral goods.\n\n### 4. Cross Elasticity (Ec)\n**Formula**: Ec = %ΔQx / %ΔPy\n* **Positive**: Substitute goods (Tea & Coffee).\n* **Negative**: Complementary goods (Car & Petrol).\n* **Zero**: Unrelated goods.\n\n### 5. Factors Affecting Elasticity\n* Nature of commodity (Necessity vs Luxury)\n* Availability of substitutes\n* Proportion of income spent\n* Time period\n* Habits',
      flashcards: [
        { id: 'f1', front: 'Formula for Price Elasticity?', back: 'Ed = %ΔQd / %ΔP' },
        { id: 'f2', front: 'Ed = ∞ means?', back: 'Perfectly Elastic demand (Horizontal curve).' },
        { id: 'f3', front: 'Ed = 0 means?', back: 'Perfectly Inelastic demand (Vertical curve).' },
        { id: 'f4', front: 'Positive Cross Elasticity indicates?', back: 'Substitute goods (e.g., Tea and Coffee).' },
        { id: 'f5', front: 'Negative Income Elasticity indicates?', back: 'Inferior goods.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Elasticity of demand for salt is _______.', options: ['Highly elastic', 'Unitary', 'Inelastic', 'Zero'], correctIndex: 2, explanation: 'Salt is a necessity with no close substitutes.' },
        { id: 'q2', question: 'Perfectly inelastic demand curve is _______.', options: ['Horizontal', 'Vertical', 'Downward', 'Upward'], correctIndex: 1, explanation: 'Quantity remains same regardless of price.' },
        { id: 'q3', question: 'Tea and Coffee have _______ cross elasticity.', options: ['Positive', 'Negative', 'Zero', 'Infinite'], correctIndex: 0, explanation: 'They are substitutes.' }
      ],
      reels: [
        { id: 'r1', title: 'Elasticity', content: 'Responsiveness of Demand to Price Change.', color: getReelColor(0) },
        { id: 'r2', title: 'Ed Formula', content: 'Ed = %ΔQd / %ΔP\nOR (ΔQ/Q) ÷ (ΔP/P)', color: getReelColor(1) },
        { id: 'r3', title: 'Ed = ∞', content: 'Perfectly Elastic.\nHorizontal line.\nSlightest price change = huge demand change.', color: getReelColor(2) },
        { id: 'r4', title: 'Ed = 0', content: 'Perfectly Inelastic.\nVertical line.\nPrice change = No demand change.', color: getReelColor(3) },
        { id: 'r5', title: 'Ed = 1', content: 'Unitary Elastic.\nRectangular Hyperbola.\n%ΔP = %ΔQd', color: getReelColor(4) },
        { id: 'r6', title: 'Ed > 1', content: 'Elastic.\nFlatter curve.\nLuxury goods.', color: getReelColor(5) },
        { id: 'r7', title: 'Ed < 1', content: 'Inelastic.\nSteeper curve.\nNecessities.', color: getReelColor(6) },
        { id: 'r8', title: 'Income Ey', content: 'Ey > 0 = Normal good.\nEy < 0 = Inferior good.', color: getReelColor(7) },
        { id: 'r9', title: 'Cross Ec', content: 'Ec > 0 = Substitutes.\nEc < 0 = Complements.', color: getReelColor(8) }
      ]
    },
    {
      id: 'eco4',
      title: '4. Supply Analysis',
      description: 'Law of Supply, Supply Schedule, Supply Curve.',
      summary: '**Supply**: Quantity a seller is willing to sell.\n**Law of Supply**: Price ↑ = Supply ↑ (Direct relationship).\n**Supply Curve**: Upward sloping.',
      detailedNotes: '### 1. Meaning of Supply\n**Supply** = Quantity of a commodity that a producer is willing and able to offer for sale at different prices during a given period.\n\n### 2. Supply Function\nSx = f(Px, Pf, T, Gp, N, E, G)\nWhere:\n* Px = Price of commodity\n* Pf = Price of factors (Inputs)\n* T = Technology\n* Gp = Government policy\n* N = Number of firms\n* E = Expectations\n* G = Goals of firm\n\n### 3. Law of Supply\n**Statement**: "Other things remaining constant, when price rises, quantity supplied also rises and vice versa."\n**Assumptions**: Cost of production constant, Technology unchanged, No change in government policy.\n\n### 4. Supply Schedule\n* **Individual Supply Schedule**: One producer\'s supply at different prices.\n* **Market Supply Schedule**: Total supply of all producers.\n\n### 5. Supply Curve\n* Slopes upward from left to right (Positive slope).\n* Shows direct relationship between price and quantity supplied.\n\n### 6. Exceptions to Law of Supply\n* **Agricultural Products**: Supply depends on weather.\n* **Rare/Antique Items**: Fixed supply.\n* **Labor Supply**: After a point, higher wages may reduce labor supply (Backward bending).\n* **Perishable Goods**: Must be sold regardless of price.',
      flashcards: [
        { id: 'f1', front: 'What is Supply?', back: 'Quantity a producer is willing and able to sell at given prices.' },
        { id: 'f2', front: 'Law of Supply states?', back: 'Price ↑ = Quantity Supplied ↑ (Direct relationship).' },
        { id: 'f3', front: 'Supply Curve slope?', back: 'Upward sloping (Positive slope) from left to right.' },
        { id: 'f4', front: 'Exception: Labor Supply curve?', back: 'Backward bending at higher wage levels.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Supply curve slopes _______ due to direct relation.', options: ['Upward', 'Downward', 'Horizontal', 'Vertical'], correctIndex: 0, explanation: 'Price and quantity move in same direction.' },
        { id: 'q2', question: 'Supply of perishable goods is _______.', options: ['Elastic', 'Inelastic', 'Unitary', 'Zero'], correctIndex: 1, explanation: 'Must be sold quickly regardless of price.' },
        { id: 'q3', question: 'At higher wages, labor supply curve becomes _______.', options: ['Vertical', 'Backward bending', 'Horizontal', 'Steeper'], correctIndex: 1, explanation: 'Workers prefer leisure over extra income.' }
      ],
      reels: [
        { id: 'r1', title: 'Supply', content: 'Quantity seller is willing to sell.\nAt given price & time.', color: getReelColor(0) },
        { id: 'r2', title: 'Law of Supply', content: 'Price ↑ Supply ↑\nPrice ↓ Supply ↓\n(Direct Relationship)', color: getReelColor(1) },
        { id: 'r3', title: 'Supply Curve', content: 'Slopes Upward.\nLeft to Right.\nPositive Slope.', color: getReelColor(2) },
        { id: 'r4', title: 'vs Demand Curve', content: 'Demand: Downward ↘\nSupply: Upward ↗', color: getReelColor(3) },
        { id: 'r5', title: 'Exceptions', content: 'Agriculture, Antiques, Labor (backward), Perishables.', color: getReelColor(4) }
      ]
    },
    {
      id: 'eco5',
      title: '5. Forms of Market',
      description: 'Perfect Competition, Monopoly, Monopolistic Competition, Oligopoly.',
      summary: '**Market**: Place where buyers and sellers interact.\n**Types**: Perfect Competition, Monopoly, Monopolistic Competition, Oligopoly.',
      detailedNotes: '### 1. Meaning of Market\n**Market** = Arrangement where buyers and sellers come in contact for exchange of goods/services.\n\n### 2. Perfect Competition\n**Features**:\n* Large number of buyers and sellers\n* Homogeneous product\n* Free entry and exit\n* Perfect knowledge\n* No transportation cost\n* Price taker (firm accepts market price)\n* AR = MR = Price (Horizontal demand curve)\n\n### 3. Monopoly\n**Features**:\n* Single seller, many buyers\n* No close substitutes\n* Entry barriers\n* Price maker\n* AR > MR\n* Downward sloping demand curve\n\n**Types**: Natural, Legal, Voluntary.\n\n### 4. Monopolistic Competition\n**Features** (E.H. Chamberlin):\n* Large number of sellers\n* Product differentiation (Brand, Quality)\n* Free entry and exit\n* Selling costs (Advertising)\n* AR > MR\n* Downward sloping demand curve\n\n### 5. Oligopoly\n**Features**:\n* Few large sellers\n* Interdependence in decision making\n* Barriers to entry\n* Products may be homogeneous or differentiated\n* Price rigidity (Kinked demand curve)\n\n**Types**: Pure Oligopoly, Differentiated Oligopoly, Collusive, Non-collusive.',
      flashcards: [
        { id: 'f1', front: 'What is Perfect Competition?', back: 'Many buyers & sellers, homogeneous product, price taker.' },
        { id: 'f2', front: 'What is Monopoly?', back: 'Single seller, no substitutes, price maker.' },
        { id: 'f3', front: 'Who gave Monopolistic Competition theory?', back: 'E.H. Chamberlin.' },
        { id: 'f4', front: 'Feature of Oligopoly?', back: 'Few sellers, interdependence, price rigidity.' },
        { id: 'f5', front: 'In Perfect Competition, firm is?', back: 'Price Taker (accepts market price).' }
      ],
      mcqs: [
        { id: 'q1', question: 'In perfect competition, AR = MR = _______.', options: ['TC', 'AC', 'Price', 'Profit'], correctIndex: 2, explanation: 'Horizontal demand curve means price is constant.' },
        { id: 'q2', question: 'Monopoly has _______ seller(s).', options: ['Many', 'Few', 'Single', 'Two'], correctIndex: 2, explanation: 'Mono = One.' },
        { id: 'q3', question: 'Kinked demand curve is found in _______.', options: ['Perfect Competition', 'Monopoly', 'Monopolistic', 'Oligopoly'], correctIndex: 3, explanation: 'Due to price rigidity in oligopoly.' }
      ],
      reels: [
        { id: 'r1', title: 'Perfect Competition', content: 'Many sellers.\nHomogeneous product.\nPrice Taker.', color: getReelColor(0) },
        { id: 'r2', title: 'Monopoly', content: 'Single seller.\nNo substitutes.\nPrice Maker.', color: getReelColor(1) },
        { id: 'r3', title: 'Monopolistic', content: 'Many sellers.\nDifferentiated products.\nSelling costs (Ads).', color: getReelColor(2) },
        { id: 'r4', title: 'Oligopoly', content: 'Few large sellers.\nInterdependence.\nKinked Demand Curve.', color: getReelColor(3) },
        { id: 'r5', title: 'AR = MR', content: 'Only in Perfect Competition.\nHorizontal demand curve.', color: getReelColor(4) },
        { id: 'r6', title: 'AR > MR', content: 'In Monopoly, Monopolistic, Oligopoly.\nDownward sloping demand.', color: getReelColor(5) }
      ]
    },
    {
      id: 'eco6',
      title: '6. Index Numbers',
      description: 'Construction, Types, and Uses of Index Numbers.',
      summary: '**Index Number**: Statistical measure showing relative change.\n**Base Year**: Reference year (value = 100).\n**Methods**: Simple, Weighted (Laspeyre, Paasche, Fisher).',
      detailedNotes: '### 1. Meaning\n**Index Number** = Statistical device to measure relative change in a variable or group of variables over time, place, or other characteristics.\n\n### 2. Features\n* Expressed in percentages\n* Specialized averages\n* Measure relative changes\n* Time reversal and factor reversal tests\n\n### 3. Types of Index Numbers\n* **Price Index**: Measures change in prices.\n* **Quantity Index**: Measures change in quantity.\n* **Value Index**: Measures change in value (P × Q).\n\n### 4. Methods of Construction\n**A. Simple/Unweighted Methods**:\n1. Simple Aggregate Method: Σp1/Σp0 × 100\n2. Simple Average of Price Relatives: ΣR/N where R = p1/p0 × 100\n\n**B. Weighted Methods**:\n1. **Laspeyre\'s Index**: Uses Base year quantities (q0). Formula: Σp1q0/Σp0q0 × 100\n2. **Paasche\'s Index**: Uses Current year quantities (q1). Formula: Σp1q1/Σp0q1 × 100\n3. **Fisher\'s Ideal Index**: Geometric mean of Laspeyre & Paasche. Formula: √(L × P) × 100\n\n### 5. Uses\n* Measures inflation\n* Policy formulation\n* Wage adjustment (Dearness Allowance)\n* Deflating money values\n* Comparing living standards',
      flashcards: [
        { id: 'f1', front: 'What is Index Number?', back: 'Statistical measure of relative change over time/place.' },
        { id: 'f2', front: 'Laspeyre\'s Index uses?', back: 'Base year quantities (q0).' },
        { id: 'f3', front: 'Paasche\'s Index uses?', back: 'Current year quantities (q1).' },
        { id: 'f4', front: 'Fisher\'s Ideal Index is?', back: 'Geometric mean of Laspeyre and Paasche.' },
        { id: 'f5', front: 'CPI stands for?', back: 'Consumer Price Index.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Laspeyre\'s index uses _______ year quantities.', options: ['Base', 'Current', 'Both', 'None'], correctIndex: 0, explanation: 'q0 = base year quantities.' },
        { id: 'q2', question: 'Fisher\'s Index is called _______ because it satisfies tests.', options: ['Ideal', 'Simple', 'Basic', 'Complex'], correctIndex: 0, explanation: 'Satisfies time and factor reversal tests.' },
        { id: 'q3', question: 'Index numbers are _______ averages.', options: ['Simple', 'Specialized', 'Arithmetic', 'Geometric'], correctIndex: 1, explanation: 'They are specialized measures.' }
      ],
      reels: [
        { id: 'r1', title: 'Index Number', content: 'Measures relative change.\nBase year = 100.', color: getReelColor(0) },
        { id: 'r2', title: 'Laspeyre', content: 'Uses Base year quantities (q0).\nΣp1q0/Σp0q0 × 100', color: getReelColor(1) },
        { id: 'r3', title: 'Paasche', content: 'Uses Current year quantities (q1).\nΣp1q1/Σp0q1 × 100', color: getReelColor(2) },
        { id: 'r4', title: 'Fisher\'s Ideal', content: '√(Laspeyre × Paasche)\nSatisfies both tests.', color: getReelColor(3) },
        { id: 'r5', title: 'CPI', content: 'Consumer Price Index.\nMeasures cost of living.\nUsed for DA calculation.', color: getReelColor(4) },
        { id: 'r6', title: 'WPI', content: 'Wholesale Price Index.\nMeasures wholesale prices.\nUsed for inflation.', color: getReelColor(5) }
      ]
    },
    {
      id: 'eco7',
      title: '7. National Income',
      description: 'Concepts, Methods, and Importance of National Income.',
      summary: '**National Income**: Total value of goods & services produced in a year.\n**Methods**: Product, Income, Expenditure.\n**Concepts**: GDP, GNP, NNP, NI, PI, DI.',
      detailedNotes: '### 1. Meaning\n**National Income** = Sum total of all goods and services produced in a country during one year, measured in money terms.\n\n### 2. Important Concepts\n* **GDP (Gross Domestic Product)**: Total value within domestic territory.\n* **GNP (Gross National Product)**: GDP + Net Factor Income from Abroad (NFIA).\n* **NNP (Net National Product)**: GNP - Depreciation.\n* **NI (National Income)**: NNP at Factor Cost.\n* **PI (Personal Income)**: Income received by individuals.\n* **DI (Disposable Income)**: PI - Direct Taxes.\n\n### 3. Methods of Calculation\n**A. Product/Output Method**:\nNI = Σ(Value of output of all sectors) - Intermediate Consumption\n\n**B. Income Method**:\nNI = Wages + Rent + Interest + Profit\n\n**C. Expenditure Method**:\nNI = C + I + G + (X - M)\nWhere: C = Consumption, I = Investment, G = Govt Expenditure, X = Exports, M = Imports\n\n### 4. Importance\n* Measures economic progress\n* Basis for planning\n* International comparisons\n* Per capita income calculation\n* Distribution of income',
      flashcards: [
        { id: 'f1', front: 'GDP stands for?', back: 'Gross Domestic Product.' },
        { id: 'f2', front: 'GNP = GDP + ?', back: 'Net Factor Income from Abroad (NFIA).' },
        { id: 'f3', front: 'NNP = GNP - ?', back: 'Depreciation.' },
        { id: 'f4', front: 'Three methods of calculating NI?', back: 'Product, Income, Expenditure methods.' },
        { id: 'f5', front: 'Disposable Income = ?', back: 'Personal Income - Direct Taxes.' }
      ],
      mcqs: [
        { id: 'q1', question: 'GDP + NFIA = _______.', options: ['NNP', 'GNP', 'NI', 'DI'], correctIndex: 1, explanation: 'GNP includes income from abroad.' },
        { id: 'q2', question: 'GNP - Depreciation = _______.', options: ['GDP', 'NNP', 'NI', 'PI'], correctIndex: 1, explanation: 'Net = Gross - Depreciation.' },
        { id: 'q3', question: 'Expenditure method: NI = C + I + G + _______.', options: ['(X-M)', '(M-X)', 'X', 'M'], correctIndex: 0, explanation: 'Net exports = Exports - Imports.' }
      ],
      reels: [
        { id: 'r1', title: 'GDP', content: 'Gross Domestic Product.\nWithin domestic territory.\nBy residents & non-residents.', color: getReelColor(0) },
        { id: 'r2', title: 'GNP', content: 'GDP + NFIA.\nIncludes income from abroad.', color: getReelColor(1) },
        { id: 'r3', title: 'NNP', content: 'GNP - Depreciation.\nNet = after wear & tear.', color: getReelColor(2) },
        { id: 'r4', title: '3 Methods', content: 'Product Method.\nIncome Method.\nExpenditure Method.', color: getReelColor(3) },
        { id: 'r5', title: 'Income Method', content: 'Wages + Rent + Interest + Profit.', color: getReelColor(4) },
        { id: 'r6', title: 'Expenditure', content: 'C + I + G + (X - M)\nConsumption + Investment + Govt + Net Exports.', color: getReelColor(5) }
      ]
    },
    {
      id: 'eco8',
      title: '8. Public Finance in India',
      description: 'Government Budget, Revenue, Expenditure, and Fiscal Policy.',
      summary: '**Public Finance**: Study of government\'s income & expenditure.\n**Budget**: Annual financial statement.\n**Revenue**: Tax & Non-tax. **Expenditure**: Revenue & Capital.',
      detailedNotes: '### 1. Meaning\n**Public Finance** = Study of how government raises revenue and incurs expenditure for the welfare of society.\n\n### 2. Government Budget\n**Budget** = Annual financial statement of estimated receipts and expenditure.\nPresented on 1st February.\n\n### 3. Types of Revenue\n**A. Tax Revenue**:\n* Direct Tax: Income Tax, Corporate Tax, Wealth Tax.\n* Indirect Tax: GST, Customs Duty, Excise Duty.\n\n**B. Non-Tax Revenue**:\n* Fees, Fines, Licenses, Dividends, Interest.\n\n### 4. Types of Expenditure\n**A. Revenue Expenditure**:\n* Day-to-day running expenses.\n* No asset creation.\n* Examples: Salaries, Subsidies, Interest payments.\n\n**B. Capital Expenditure**:\n* Asset creation.\n* Long-term benefits.\n* Examples: Construction, Machinery, Loans given.\n\n### 5. Types of Deficit\n* **Revenue Deficit**: Revenue Expenditure - Revenue Receipts.\n* **Fiscal Deficit**: Total Expenditure - Total Receipts (except borrowings).\n* **Primary Deficit**: Fiscal Deficit - Interest Payments.\n\n### 6. Fiscal Policy\nGovernment\'s policy regarding revenue and expenditure to achieve economic goals.',
      flashcards: [
        { id: 'f1', front: 'When is Union Budget presented?', back: '1st February.' },
        { id: 'f2', front: 'Examples of Direct Tax?', back: 'Income Tax, Corporate Tax, Wealth Tax.' },
        { id: 'f3', front: 'Revenue Deficit = ?', back: 'Revenue Expenditure - Revenue Receipts.' },
        { id: 'f4', front: 'Fiscal Deficit = ?', back: 'Total Expenditure - Total Receipts (excluding borrowings).' },
        { id: 'f5', front: 'Primary Deficit = ?', back: 'Fiscal Deficit - Interest Payments.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Union Budget is presented on _______.', options: ['Jan 1', 'Feb 1', 'Mar 1', 'Apr 1'], correctIndex: 1, explanation: 'Changed from last day of February.' },
        { id: 'q2', question: 'GST is a _______ tax.', options: ['Direct', 'Indirect', 'Progressive', 'Regressive'], correctIndex: 1, explanation: 'Tax burden can be shifted.' },
        { id: 'q3', question: 'Fiscal Deficit - Interest = _______ Deficit.', options: ['Revenue', 'Primary', 'Budget', 'Trade'], correctIndex: 1, explanation: 'Primary shows borrowing for non-interest purposes.' }
      ],
      reels: [
        { id: 'r1', title: 'Public Finance', content: 'Govt income & expenditure.\nFor public welfare.', color: getReelColor(0) },
        { id: 'r2', title: 'Budget', content: 'Annual Financial Statement.\nPresented: 1st February.', color: getReelColor(1) },
        { id: 'r3', title: 'Direct Tax', content: 'Cannot be shifted.\nIncome Tax, Corporate Tax.', color: getReelColor(2) },
        { id: 'r4', title: 'Indirect Tax', content: 'Can be shifted.\nGST, Customs, Excise.', color: getReelColor(3) },
        { id: 'r5', title: 'Revenue Exp', content: 'Day-to-day expenses.\nNo asset creation.\nSalaries, Subsidies.', color: getReelColor(4) },
        { id: 'r6', title: 'Capital Exp', content: 'Asset creation.\nLong-term.\nConstruction, Loans.', color: getReelColor(5) },
        { id: 'r7', title: 'Deficits', content: 'Revenue Deficit\nFiscal Deficit\nPrimary Deficit', color: getReelColor(6) }
      ]
    },
    {
      id: 'eco9',
      title: '9. Money Market and Capital Market',
      description: 'Financial markets for short-term and long-term funds.',
      summary: '**Money Market**: Short-term funds (<1 year).\n**Capital Market**: Long-term funds (>1 year).\n**Instruments**: T-Bills, CP, CD (Money); Shares, Debentures (Capital).',
      detailedNotes: '### 1. Money Market\n**Definition**: Market for short-term funds (less than 1 year).\n\n**Features**:\n* Short-term lending/borrowing\n* High liquidity\n* Low risk\n* No fixed location\n* Regulated by RBI\n\n**Instruments**:\n* **Treasury Bills (T-Bills)**: Govt securities (91, 182, 364 days).\n* **Commercial Paper (CP)**: Unsecured promissory note by companies.\n* **Certificate of Deposit (CD)**: Issued by banks.\n* **Call Money**: Overnight lending between banks.\n* **Repo Rate**: Rate at which RBI lends to banks.\n* **Reverse Repo**: Rate at which RBI borrows from banks.\n\n### 2. Capital Market\n**Definition**: Market for long-term funds (more than 1 year).\n\n**Components**:\n**A. Primary Market (New Issues)**:\n* IPO, FPO, Rights Issue, Private Placement.\n\n**B. Secondary Market (Stock Exchange)**:\n* BSE (Bombay Stock Exchange) - Oldest in Asia.\n* NSE (National Stock Exchange).\n* SEBI regulates capital market.\n\n**Instruments**:\n* Equity Shares, Preference Shares, Debentures, Bonds.\n\n### 3. Difference\n| Money Market | Capital Market |\n|-------------|----------------|\n| Short-term | Long-term |\n| RBI regulates | SEBI regulates |\n| Low risk | Higher risk |\n| Banks, RBI | Stock exchanges |',
      flashcards: [
        { id: 'f1', front: 'Money Market is for?', back: 'Short-term funds (less than 1 year).' },
        { id: 'f2', front: 'Capital Market is for?', back: 'Long-term funds (more than 1 year).' },
        { id: 'f3', front: 'Who regulates Money Market?', back: 'RBI (Reserve Bank of India).' },
        { id: 'f4', front: 'Who regulates Capital Market?', back: 'SEBI (Securities and Exchange Board of India).' },
        { id: 'f5', front: 'Oldest Stock Exchange in Asia?', back: 'BSE (Bombay Stock Exchange) - 1875.' }
      ],
      mcqs: [
        { id: 'q1', question: 'T-Bills are _______ market instruments.', options: ['Capital', 'Money', 'Foreign', 'Commodity'], correctIndex: 1, explanation: 'Short-term govt securities.' },
        { id: 'q2', question: 'IPO is part of _______ market.', options: ['Primary', 'Secondary', 'Money', 'Tertiary'], correctIndex: 0, explanation: 'Initial Public Offering - new issue.' },
        { id: 'q3', question: 'SEBI regulates _______ market.', options: ['Money', 'Capital', 'Foreign Exchange', 'Commodity'], correctIndex: 1, explanation: 'Securities market regulator.' }
      ],
      reels: [
        { id: 'r1', title: 'Money Market', content: 'Short-term funds.\n< 1 year.\nRBI regulates.', color: getReelColor(0) },
        { id: 'r2', title: 'Capital Market', content: 'Long-term funds.\n> 1 year.\nSEBI regulates.', color: getReelColor(1) },
        { id: 'r3', title: 'T-Bills', content: 'Treasury Bills.\nGovt securities.\n91, 182, 364 days.', color: getReelColor(2) },
        { id: 'r4', title: 'Repo Rate', content: 'RBI lends to banks.\nBorrowing rate for banks.', color: getReelColor(3) },
        { id: 'r5', title: 'Primary Market', content: 'New Issues.\nIPO, FPO, Rights Issue.', color: getReelColor(4) },
        { id: 'r6', title: 'Secondary Market', content: 'Existing securities.\nBSE, NSE.\nStock trading.', color: getReelColor(5) },
        { id: 'r7', title: 'BSE', content: 'Bombay Stock Exchange.\nOldest in Asia (1875).\nSensex index.', color: getReelColor(6) },
        { id: 'r8', title: 'NSE', content: 'National Stock Exchange.\nNifty 50 index.\nElectronic trading.', color: getReelColor(7) }
      ]
    },
    {
      id: 'eco10',
      title: '10. Foreign Trade of India',
      description: 'Imports, Exports, Balance of Trade, and Trade Policy.',
      summary: '**Foreign Trade**: Exchange of goods/services across borders.\n**Balance of Trade**: Exports - Imports.\n**India\'s Trade Partners**: USA, China, UAE, Saudi Arabia.',
      detailedNotes: '### 1. Meaning\n**Foreign Trade** = Exchange of goods and services between countries.\n\n**Types**:\n* **Import Trade**: Buying from other countries.\n* **Export Trade**: Selling to other countries.\n* **Entrepot Trade**: Import for re-export.\n\n### 2. Balance of Trade (BOT)\n**BOT = Exports - Imports** (Visible items only)\n* **Favorable/Surplus**: Exports > Imports\n* **Unfavorable/Deficit**: Imports > Exports\n\n### 3. Balance of Payments (BOP)\nRecord of all economic transactions with rest of world.\n* Current Account: Trade in goods, services, transfers.\n* Capital Account: Capital flows, investments.\n\n### 4. India\'s Major Exports\n* Petroleum products\n* Gems & Jewelry\n* Pharmaceuticals\n* IT Services\n* Textiles & Garments\n* Agricultural products\n\n### 5. India\'s Major Imports\n* Crude Oil\n* Gold & Precious metals\n* Electronic goods\n* Machinery\n* Chemicals\n\n### 6. Trade Policy\n* Export Promotion: SEZ, Duty Drawback, Export subsidies.\n* Import Substitution: Make in India.\n* Free Trade Agreements (FTAs).\n\n### 7. Major Trade Partners\nUSA, China, UAE, Saudi Arabia, Germany, Singapore.',
      flashcards: [
        { id: 'f1', front: 'Balance of Trade = ?', back: 'Exports - Imports (Visible items only).' },
        { id: 'f2', front: 'Favorable BOT means?', back: 'Exports > Imports (Trade Surplus).' },
        { id: 'f3', front: 'India\'s largest import?', back: 'Crude Oil / Petroleum.' },
        { id: 'f4', front: 'What is Entrepot Trade?', back: 'Import goods for re-export to another country.' },
        { id: 'f5', front: 'SEZ stands for?', back: 'Special Economic Zone.' }
      ],
      mcqs: [
        { id: 'q1', question: 'India\'s BOT is generally _______.', options: ['Favorable', 'Unfavorable', 'Zero', 'Positive'], correctIndex: 1, explanation: 'India imports more than it exports.' },
        { id: 'q2', question: 'Entrepot trade involves _______.', options: ['Only import', 'Only export', 'Import for re-export', 'Domestic trade'], correctIndex: 2, explanation: 'Singapore is famous for entrepot trade.' },
        { id: 'q3', question: 'India\'s largest trading partner is _______.', options: ['USA', 'China', 'UAE', 'UK'], correctIndex: 0, explanation: 'USA is the largest trade partner by value.' }
      ],
      reels: [
        { id: 'r1', title: 'Foreign Trade', content: 'Exchange between countries.\nImport + Export.', color: getReelColor(0) },
        { id: 'r2', title: 'BOT', content: 'Balance of Trade.\nExports - Imports.\nVisible items only.', color: getReelColor(1) },
        { id: 'r3', title: 'Favorable', content: 'Exports > Imports.\nTrade Surplus.\nGood for economy.', color: getReelColor(2) },
        { id: 'r4', title: 'Unfavorable', content: 'Imports > Exports.\nTrade Deficit.\nIndia\'s usual position.', color: getReelColor(3) },
        { id: 'r5', title: 'Major Exports', content: 'Petroleum products.\nGems & Jewelry.\nIT Services.\nPharma.', color: getReelColor(4) },
        { id: 'r6', title: 'Major Imports', content: 'Crude Oil.\nGold.\nElectronics.\nMachinery.', color: getReelColor(5) },
        { id: 'r7', title: 'Trade Partners', content: 'USA, China, UAE.\nSaudi Arabia, Germany.', color: getReelColor(6) },
        { id: 'r8', title: 'SEZ', content: 'Special Economic Zone.\nExport promotion.\nTax benefits.', color: getReelColor(7) }
      ]
    }
  ]
};

const ENGLISH_SUBJECT: Subject = {
  id: 'eng',
  name: 'English',
  icon: 'BookA',
  color: 'bg-yellow-500',
  syllabus: '1. Prose\n2. Poetry\n3. Writing Skills\n4. Novel (Genre-Drama)',
  paperPattern: '### English Paper Pattern (80 Marks)\n\n* **Q.1 Prose (16 Marks)**\n* **Q.2 Poetry (14 Marks)**\n* **Q.3 Writing Skills (16 Marks)**\n* **Q.4 Novel (16 Marks)**\n* **Grammar & Vocabulary integrated**',
  previousPapers: [],
  chapters: [
    {
      id: 'eng1',
      title: '1.1 An Astrologer\'s Day',
      description: 'By R.K. Narayan - A story of fate and irony.',
      summary: '**Genre**: Short Story\n**Author**: R.K. Narayan\n**Theme**: Irony of fate, guilt, redemption\n\nAn astrologer who is actually a fraud meets a customer who turns out to be the man he thought he had killed years ago. Through clever manipulation, the astrologer saves himself and finds peace from his guilt.',
      detailedNotes: '### About the Author\nR.K. Narayan (1906-2001) was one of the most famous Indian writers in English. His stories are set in the fictional town of Malgudi.\n\n### Setting\n* Town Hall Road at night\n* Under a tamarind tree\n* Near a municipal boundary\n\n### Characters\n* **The Astrologer**: Shrewd, observant, practical, carries guilt from his past.\n* **Guru Nayak**: The antagonist, seeking revenge for attempted murder.\n* **The Wife**: Represents the astrologer\'s present peaceful life.\n\n### Plot Summary\n1. The astrologer sets up his business at night under artificial lighting.\n2. He has no real knowledge of astrology but uses psychology and intuition.\n3. Guru Nayak comes as a customer challenging his abilities.\n4. Through the conversation, we learn the astrologer stabbed Guru Nayak years ago and fled his village.\n5. The astrologer cleverly tells Guru Nayak that the attacker died in an accident.\n6. Guru Nayak leaves satisfied, and the astrologer finally finds peace.\n\n### Themes\n1. **Irony**: A fake astrologer predicts real truth about his own past.\n2. **Guilt and Redemption**: Years of guilt finally resolved.\n3. **Fate vs. Free Will**: The chance meeting seems destined.\n4. **Appearance vs. Reality**: The astrologer appears knowledgeable but is actually a fraud.\n\n### Literary Devices\n* **Situational Irony**: The astrologer meets his would-be victim.\n* **Suspense**: Built throughout the encounter with Guru Nayak.\n* **Foreshadowing**: The unusual gleam in Guru Nayak\'s eyes.\n* **Characterization**: Revealed through dialogue and actions.',
      flashcards: [
        { id: 'f1', front: 'Author of An Astrologer\'s Day?', back: 'R.K. Narayan.' },
        { id: 'f2', front: 'Name of the antagonist?', back: 'Guru Nayak.' },
        { id: 'f3', front: 'What is the fictional town in R.K. Narayan\'s stories?', back: 'Malgudi.' },
        { id: 'f4', front: 'Under which tree did the astrologer sit?', back: 'Tamarind tree.' },
        { id: 'f5', front: 'What did the astrologer tell Guru Nayak about his attacker?', back: 'That the attacker died in an accident four months ago.' },
        { id: 'f6', front: 'What is the main theme of the story?', back: 'Irony of fate and redemption from guilt.' },
        { id: 'f7', front: 'How much money did Guru Nayak give the astrologer?', back: 'A rupee.' },
        { id: 'f8', front: 'Why did the astrologer leave his village?', back: 'He had stabbed a man (Guru Nayak) and thought he had killed him.' }
      ],
      mcqs: [
        { id: 'q1', question: 'The astrologer carried out his business under a ______ tree.', options: ['Banyan', 'Tamarind', 'Neem', 'Peepal'], correctIndex: 1, explanation: 'He sat under the boughs of a spreading tamarind tree.' },
        { id: 'q2', question: 'The astrologer told Guru Nayak that his attacker had died ______ months ago.', options: ['Two', 'Three', 'Four', 'Six'], correctIndex: 2, explanation: 'He said the attacker was crushed under a lorry four months ago.' },
        { id: 'q3', question: 'R.K. Narayan\'s stories are set in the fictional town of:', options: ['Malgudi', 'Mangalore', 'Mysore', 'Mumbai'], correctIndex: 0, explanation: 'Malgudi is a fictional South Indian town created by R.K. Narayan.' },
        { id: 'q4', question: 'The predominant literary device in this story is:', options: ['Metaphor', 'Simile', 'Irony', 'Personification'], correctIndex: 2, explanation: 'The story is built around situational irony - a fake astrologer reveals real truth.' },
        { id: 'q5', question: 'How did the astrologer feel after Guru Nayak left?', options: ['Scared', 'Relieved', 'Angry', 'Sad'], correctIndex: 1, explanation: 'He felt relieved that his past was finally resolved and Guru Nayak would stop searching.' }
      ],
      reels: [
        { id: 'r1', title: 'Fake Astrologer', content: 'He had NO knowledge of astrology!\nJust psychology & intuition.', color: getReelColor(0) },
        { id: 'r2', title: 'Past Crime', content: 'Years ago, he stabbed a man & fled.\nThat man was Guru Nayak!', color: getReelColor(1) },
        { id: 'r3', title: 'Twist of Fate', content: 'The "dead" victim came as a customer.\nPure irony!', color: getReelColor(2) },
        { id: 'r4', title: 'Clever Escape', content: '"Your attacker died 4 months ago."\nGuru Nayak believed it!', color: getReelColor(3) },
        { id: 'r5', title: 'Theme', content: 'Irony + Guilt + Redemption.\nFate brings closure.', color: getReelColor(4) },
        { id: 'r6', title: 'Setting', content: 'Under a tamarind tree.\nTown Hall Road at night.', color: getReelColor(5) },
        { id: 'r7', title: 'Author', content: 'R.K. Narayan\nMalgudi Days fame\n1906-2001', color: getReelColor(6) }
      ]
    },
    {
      id: 'eng2',
      title: '1.2 On Saying Please',
      description: 'By A.G. Gardiner - Essay on courtesy and manners.',
      summary: '**Genre**: Essay\n**Author**: A.G. Gardiner\n**Theme**: Importance of courtesy and good manners in daily life.\n\nThe essay discusses how small courtesies like saying "please" and "thank you" make social life pleasant, even though discourtesy is not legally punishable.',
      detailedNotes: '### About the Author\nAlfred George Gardiner (1865-1946) was a British journalist and author. He wrote under the pen name "Alpha of the Plough."\n\n### Central Theme\nThe essay argues that while law punishes physical assault, there is no legal remedy for moral assault (rudeness). Yet, courtesy and good manners are essential for a civilized society.\n\n### Key Arguments\n1. **Law vs. Morality**: Physical assault is punishable, but rudeness is not.\n2. **Impact of Rudeness**: Discourtesy can ruin someone\'s entire day.\n3. **Chain Reaction**: Bad behavior spreads like infection.\n4. **Small Words Matter**: "Please" and "Thank you" are lubricants of social life.\n5. **Everyone Deserves Respect**: From a lift-man to a celebrity.\n\n### The Lift-Man Incident\n* A lift-man threw out a passenger who didn\'t say "Top please."\n* The passenger only said "Top" without courtesy.\n* Law sided with the passenger (physical assault).\n* But morally, the passenger was equally wrong.\n\n### The Conductor Example\n* A cheerful bus conductor spread positivity.\n* His pleasant manners made everyone\'s journey enjoyable.\n* Small courtesies create a pleasant atmosphere.\n\n### Important Quotes\n* "A civil tongue is the lubricant of social life."\n* "Courtesy costs nothing but pays well."\n* "Bad manners probably do more to poison the stream of general life than all the crimes."\n\n### Life Lessons\n1. Always use polite words.\n2. Treat everyone with respect regardless of status.\n3. Your behavior affects others\' mood.\n4. Courtesy is contagious - spread it!',
      flashcards: [
        { id: 'f1', front: 'Author of On Saying Please?', back: 'A.G. Gardiner (Alfred George Gardiner).' },
        { id: 'f2', front: 'Pen name of A.G. Gardiner?', back: 'Alpha of the Plough.' },
        { id: 'f3', front: 'What is the "lubricant of social life" according to the essay?', back: 'A civil tongue / Courtesy.' },
        { id: 'f4', front: 'Who threw a passenger out for not saying "please"?', back: 'The lift-man.' },
        { id: 'f5', front: 'What does the essay say about law and rudeness?', back: 'Law cannot punish rudeness (moral assault), only physical assault.' },
        { id: 'f6', front: 'What example shows positive effect of courtesy?', back: 'The cheerful bus conductor who spread positivity.' },
        { id: 'f7', front: 'Genre of On Saying Please?', back: 'Essay (Informal/Personal Essay).' }
      ],
      mcqs: [
        { id: 'q1', question: 'A.G. Gardiner wrote under the pen name:', options: ['Beta of the Plough', 'Alpha of the Plough', 'Gamma of the Stars', 'Delta of the Moon'], correctIndex: 1, explanation: 'Alpha of the Plough was his famous pen name.' },
        { id: 'q2', question: 'The lift-man threw out the passenger because:', options: ['He was rude', 'He didn\'t pay', 'He didn\'t say please', 'He was late'], correctIndex: 2, explanation: 'The passenger said only "Top" without adding "please."' },
        { id: 'q3', question: 'According to the essay, courtesy is:', options: ['A legal requirement', 'A moral necessity', 'Unnecessary', 'Only for educated people'], correctIndex: 1, explanation: 'Courtesy is not legally required but morally essential.' },
        { id: 'q4', question: 'The essay compares good manners to:', options: ['Money', 'Lubricant', 'Medicine', 'Food'], correctIndex: 1, explanation: 'Civil tongue is the lubricant of social life.' },
        { id: 'q5', question: 'The bus conductor example shows:', options: ['How to earn money', 'Positive effect of courtesy', 'How to drive', 'Legal requirements'], correctIndex: 1, explanation: 'His cheerful behavior made everyone\'s journey pleasant.' }
      ],
      reels: [
        { id: 'r1', title: 'The Lift-Man', content: 'Threw out a passenger\nwho didn\'t say "Please".\nLaw punished him, not the rude passenger.', color: getReelColor(0) },
        { id: 'r2', title: 'Law vs Morality', content: 'Physical assault = Punishable\nMoral assault = No legal remedy\nBut equally damaging!', color: getReelColor(1) },
        { id: 'r3', title: 'The Bus Conductor', content: 'Cheerful & polite.\nMade everyone\'s day better.\nCourtesy is contagious!', color: getReelColor(2) },
        { id: 'r4', title: 'Magic Words', content: '"Please" and "Thank you"\nCost nothing.\nPay everything!', color: getReelColor(3) },
        { id: 'r5', title: 'Chain Reaction', content: 'Rudeness spreads like disease.\nSo does kindness.\nChoose wisely!', color: getReelColor(4) },
        { id: 'r6', title: 'Key Quote', content: '"A civil tongue is the\nlubricant of social life."', color: getReelColor(5) },
        { id: 'r7', title: 'Author', content: 'A.G. Gardiner\nPen name: Alpha of the Plough\nBritish journalist', color: getReelColor(6) }
      ]
    },
    {
      id: 'eng3',
      title: '1.3 The Cop and the Anthem',
      description: 'By O. Henry - A story of ironic twists.',
      summary: '**Genre**: Short Story\n**Author**: O. Henry (William Sydney Porter)\n**Theme**: Irony of fate, reformation vs. circumstances\n\nSoapy, a homeless man, tries to get arrested to spend winter in jail but fails repeatedly. When he finally decides to reform his life, he gets arrested for loitering.',
      detailedNotes: '### About the Author\nO. Henry (1862-1910) was an American short story writer known for his surprise endings. Real name: William Sydney Porter.\n\n### Setting\n* New York City\n* Madison Square\n* A church\n\n### Main Character\n**Soapy**: A homeless man (tramp) who wants to spend winter in Blackwell\'s Island prison where he\'ll get food and shelter.\n\n### Plot Summary\n**Soapy\'s attempts to get arrested:**\n1. **Restaurant**: Eats without paying - thrown out, not arrested.\n2. **Breaks window**: Runs away but cop doesn\'t suspect him.\n3. **Another restaurant**: Same result - kicked out.\n4. **Pretends to be drunk**: Cop thinks he\'s a Yale student celebrating.\n5. **Flirts with a woman**: She turns out to be willing!\n6. **Disturbs peace**: Cop thinks he\'s a celebrating fan.\n\n**The Turning Point:**\n* Passes a church, hears anthem (hymn).\n* Music reminds him of his better past.\n* Decides to reform - get a job, live honestly.\n\n**Ironic Ending:**\n* Just as he decides to change, a cop arrests him for loitering.\n* Sentenced to three months on Blackwell\'s Island.\n\n### Themes\n1. **Irony**: Gets what he wanted when he no longer wants it.\n2. **Fate vs. Free Will**: Circumstances overpower intentions.\n3. **Appearance vs. Reality**: Nothing is as it seems.\n4. **Power of Music**: The anthem triggers transformation.\n\n### O. Henry\'s Style\n* Surprise/Twist endings\n* Ironic situations\n* Sympathetic portrayal of common people\n* Humor mixed with pathos',
      flashcards: [
        { id: 'f1', front: 'Author of The Cop and the Anthem?', back: 'O. Henry (William Sydney Porter).' },
        { id: 'f2', front: 'Real name of O. Henry?', back: 'William Sydney Porter.' },
        { id: 'f3', front: 'What is Soapy trying to do throughout the story?', back: 'Get arrested to spend winter in Blackwell\'s Island prison.' },
        { id: 'f4', front: 'How many times does Soapy try to get arrested?', back: 'Six times.' },
        { id: 'f5', front: 'What triggers Soapy\'s desire to reform?', back: 'The church anthem (hymn/music).' },
        { id: 'f6', front: 'What is the ironic twist at the end?', back: 'He gets arrested for loitering just when he decides to reform.' },
        { id: 'f7', front: 'O. Henry is famous for what type of endings?', back: 'Surprise/Twist endings.' },
        { id: 'f8', front: 'Where is the story set?', back: 'New York City (Madison Square).' }
      ],
      mcqs: [
        { id: 'q1', question: 'Soapy wanted to get arrested to:', options: ['Escape enemies', 'Get shelter in winter', 'Meet a friend', 'Get famous'], correctIndex: 1, explanation: 'He wanted food and shelter at Blackwell\'s Island prison during winter.' },
        { id: 'q2', question: 'How many attempts did Soapy make to get arrested?', options: ['Four', 'Five', 'Six', 'Seven'], correctIndex: 2, explanation: 'He tried six different methods to get arrested.' },
        { id: 'q3', question: 'What made Soapy want to reform?', options: ['A sermon', 'A policeman', 'Church anthem', 'A friend'], correctIndex: 2, explanation: 'The anthem reminded him of his better past.' },
        { id: 'q4', question: 'O. Henry stories are known for:', options: ['Happy endings', 'Twist endings', 'Sad endings', 'No endings'], correctIndex: 1, explanation: 'O. Henry\'s signature style is the surprise/twist ending.' },
        { id: 'q5', question: 'At the end, Soapy is arrested for:', options: ['Theft', 'Fighting', 'Loitering', 'Drinking'], correctIndex: 2, explanation: 'He was arrested for loitering outside the church.' }
      ],
      reels: [
        { id: 'r1', title: 'Soapy\'s Goal', content: 'Get arrested!\nWinter is coming.\nJail = Food + Shelter', color: getReelColor(0) },
        { id: 'r2', title: 'Attempt #1', content: 'Ate at restaurant without paying.\nResult: Kicked out, not arrested!', color: getReelColor(1) },
        { id: 'r3', title: 'Attempt #2', content: 'Broke a shop window.\nResult: Cop didn\'t suspect him!', color: getReelColor(2) },
        { id: 'r4', title: 'The Anthem', content: 'Church music played.\nMemories of better days.\nSoapy decides to REFORM!', color: getReelColor(3) },
        { id: 'r5', title: 'TWIST!', content: 'Finally arrested!\nFor just standing there.\nIRONY at its best.', color: getReelColor(4) },
        { id: 'r6', title: 'O. Henry Style', content: 'Surprise endings!\nIronic situations.\nCommon people as heroes.', color: getReelColor(5) },
        { id: 'r7', title: 'Theme', content: 'When you want something = Can\'t get it.\nWhen you don\'t want = You get it!', color: getReelColor(6) }
      ]
    },
    {
      id: 'eng4',
      title: '2.1 Song of the Open Road',
      description: 'By Walt Whitman - A poem celebrating freedom.',
      summary: '**Genre**: Poetry (Free Verse)\n**Poet**: Walt Whitman\n**Theme**: Freedom, journey of life, optimism, self-reliance\n\nThe poem celebrates the joy of traveling on the open road, symbolizing life\'s journey with freedom, adventure, and self-discovery.',
      detailedNotes: '### About the Poet\nWalt Whitman (1819-1892) was an American poet, often called the "Father of Free Verse." His famous collection: "Leaves of Grass."\n\n### Form and Style\n* **Free Verse**: No regular meter or rhyme scheme.\n* **Cataloguing**: Lists of images and ideas.\n* **Repetition**: For emphasis.\n* **First Person**: Personal, intimate tone.\n\n### Central Idea\nThe "open road" is a metaphor for life\'s journey. The poet celebrates:\n* Freedom from constraints\n* Joy of traveling/exploring\n* Self-reliance and independence\n* Living in the present moment\n\n### Key Lines Explained\n1. **"Afoot and light-hearted I take to the open road"**\n   - Starting the journey with joy and no burden.\n\n2. **"Healthy, free, the world before me"**\n   - Optimism and endless possibilities.\n\n3. **"I carry them with me wherever I go"**\n   - Experiences and memories travel with us.\n\n4. **"Strong and content I travel the open road"**\n   - Self-confidence and inner peace.\n\n### Themes\n1. **Freedom**: Liberation from society\'s restrictions.\n2. **Optimism**: Positive outlook on life.\n3. **Self-reliance**: Independence and inner strength.\n4. **Journey of Life**: Road as a metaphor for life.\n5. **Democracy**: Equal opportunity for all to travel.\n\n### Literary Devices\n* **Metaphor**: Open road = life\'s journey.\n* **Repetition**: "I" - emphasizes individuality.\n* **Imagery**: Visual pictures of travel.\n* **Free Verse**: Reflects freedom of theme.',
      flashcards: [
        { id: 'f1', front: 'Poet of Song of the Open Road?', back: 'Walt Whitman.' },
        { id: 'f2', front: 'What is Walt Whitman called?', back: 'Father of Free Verse.' },
        { id: 'f3', front: 'What does the "open road" symbolize?', back: 'Life\'s journey / Freedom.' },
        { id: 'f4', front: 'Famous poetry collection by Walt Whitman?', back: 'Leaves of Grass.' },
        { id: 'f5', front: 'What is free verse?', back: 'Poetry without regular meter or rhyme scheme.' },
        { id: 'f6', front: 'Main theme of the poem?', back: 'Freedom, self-reliance, and joy of life\'s journey.' },
        { id: 'f7', front: 'What literary device is "open road = life"?', back: 'Metaphor.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Walt Whitman is called the "Father of ______."', options: ['Poetry', 'Free Verse', 'American Literature', 'Romanticism'], correctIndex: 1, explanation: 'He pioneered free verse poetry.' },
        { id: 'q2', question: 'The "open road" in the poem symbolizes:', options: ['A highway', 'Life\'s journey', 'A trail', 'Death'], correctIndex: 1, explanation: 'It\'s a metaphor for life\'s journey and freedom.' },
        { id: 'q3', question: 'Walt Whitman\'s famous collection is:', options: ['Paradise Lost', 'Leaves of Grass', 'The Waste Land', 'Songs of Innocence'], correctIndex: 1, explanation: 'Leaves of Grass is his most famous work.' },
        { id: 'q4', question: 'The poem is written in:', options: ['Sonnet form', 'Free verse', 'Ballad form', 'Haiku'], correctIndex: 1, explanation: 'It has no regular meter or rhyme scheme.' },
        { id: 'q5', question: 'The dominant mood of the poem is:', options: ['Sad', 'Angry', 'Optimistic', 'Fearful'], correctIndex: 2, explanation: 'The poem celebrates freedom and possibilities with optimism.' }
      ],
      reels: [
        { id: 'r1', title: 'The Open Road', content: 'Not just a road!\nIt\'s LIFE itself.\nA journey of freedom.', color: getReelColor(0) },
        { id: 'r2', title: 'Walt Whitman', content: 'Father of Free Verse.\n"Leaves of Grass" fame.\n1819-1892', color: getReelColor(1) },
        { id: 'r3', title: 'Free Verse', content: 'No rhyme needed.\nNo meter required.\nFreedom in form = Freedom in theme!', color: getReelColor(2) },
        { id: 'r4', title: 'Themes', content: 'Freedom\nSelf-reliance\nOptimism\nLife as a journey', color: getReelColor(3) },
        { id: 'r5', title: 'Key Line', content: '"Afoot and light-hearted\nI take to the open road."\nNo burden, just joy!', color: getReelColor(4) },
        { id: 'r6', title: 'Metaphor', content: 'Road = Life\nTraveling = Living\nDestination = Self-discovery', color: getReelColor(5) }
      ]
    },
    {
      id: 'eng5',
      title: '2.2 Indian Weavers',
      description: 'By Sarojini Naidu - Symbolism of life stages.',
      summary: '**Genre**: Poetry\n**Poet**: Sarojini Naidu (Nightingale of India)\n**Theme**: Life cycle through weaving imagery\n\nThe poem uses weavers creating different garments at different times of day to symbolize the three stages of life: birth, youth, and death.',
      detailedNotes: '### About the Poet\nSarojini Naidu (1879-1949) was called the "Nightingale of India." She was a freedom fighter and the first Indian woman to become a state governor.\n\n### Structure\n* Three stanzas (tercets)\n* Each stanza represents a stage of life\n* Question-answer format\n\n### Stanza-by-Stanza Analysis\n\n**Stanza 1: Birth (Morning)**\n* Time: Break of day (early morning)\n* Color: Blue (like the wing of a halcyon bird)\n* Garment: Robes for a newborn child\n* Symbolism: Blue represents hope, purity, new beginnings\n\n**Stanza 2: Youth/Marriage (Evening)**\n* Time: Fall of night (evening)\n* Color: Purple and green (like peacock feathers)\n* Garment: Marriage veils for a queen\n* Symbolism: Vibrant colors represent joy, celebration, love\n\n**Stanza 3: Death (Moonlight)**\n* Time: Still/chill moonlight (night)\n* Color: White (like a feather and cloud)\n* Garment: Shroud for a dead man\n* Symbolism: White represents purity, peace, end of life\n\n### Key Literary Devices\n* **Symbolism**: Colors and times of day represent life stages.\n* **Imagery**: Visual images of colors and birds.\n* **Metaphor**: Weaving = Life\'s journey.\n* **Repetition**: Question structure in each stanza.\n\n### Themes\n1. **Cycle of Life**: Birth → Marriage → Death\n2. **Indian Culture**: Traditional weaving, ceremonies\n3. **Transience**: Life passes like day to night\n4. **Dignity**: Each stage has its own beauty',
      flashcards: [
        { id: 'f1', front: 'Poet of Indian Weavers?', back: 'Sarojini Naidu (Nightingale of India).' },
        { id: 'f2', front: 'What are the three stages of life in the poem?', back: 'Birth (morning), Marriage (evening), Death (night).' },
        { id: 'f3', front: 'What color represents birth in the poem?', back: 'Blue (like halcyon\'s wing).' },
        { id: 'f4', front: 'What color represents marriage?', back: 'Purple and green (like peacock feathers).' },
        { id: 'f5', front: 'What color represents death?', back: 'White (like feather and cloud).' },
        { id: 'f6', front: 'What title was given to Sarojini Naidu?', back: 'Nightingale of India.' },
        { id: 'f7', front: 'What is the halcyon?', back: 'A kingfisher bird.' },
        { id: 'f8', front: 'What garment is woven for death?', back: 'A shroud (burial cloth).' }
      ],
      mcqs: [
        { id: 'q1', question: 'Sarojini Naidu is called:', options: ['Rose of India', 'Nightingale of India', 'Queen of Poetry', 'Mother of India'], correctIndex: 1, explanation: 'She was known as the Nightingale of India.' },
        { id: 'q2', question: 'Blue color in the poem symbolizes:', options: ['Death', 'Marriage', 'Birth', 'Old age'], correctIndex: 2, explanation: 'Blue (like halcyon\'s wing) represents newborn/birth.' },
        { id: 'q3', question: 'Marriage veils are described with colors:', options: ['White and blue', 'Purple and green', 'Red and gold', 'Black and white'], correctIndex: 1, explanation: 'Marriage veils are purple and green like peacock feathers.' },
        { id: 'q4', question: 'The poem has how many stanzas?', options: ['Two', 'Three', 'Four', 'Five'], correctIndex: 1, explanation: 'Three stanzas representing birth, marriage, and death.' },
        { id: 'q5', question: 'A shroud is a garment for:', options: ['Newborn', 'Bride', 'Dead person', 'King'], correctIndex: 2, explanation: 'The shroud is woven for a dead man in moonlight.' }
      ],
      reels: [
        { id: 'r1', title: 'Three Stages', content: 'BIRTH = Morning = Blue\nMARRIAGE = Evening = Purple/Green\nDEATH = Night = White', color: getReelColor(0) },
        { id: 'r2', title: 'Sarojini Naidu', content: 'Nightingale of India\nFreedom Fighter\n1st Woman Governor', color: getReelColor(1) },
        { id: 'r3', title: 'Symbolism', content: 'Weavers = Life\nGarments = Life Events\nColors = Emotions', color: getReelColor(2) },
        { id: 'r4', title: 'Birth (Blue)', content: 'Break of day.\nBlue like halcyon\'s wing.\nRobes for newborn child.', color: getReelColor(3) },
        { id: 'r5', title: 'Marriage', content: 'Fall of night.\nPurple & green (peacock).\nVeils for a queen!', color: getReelColor(4) },
        { id: 'r6', title: 'Death (White)', content: 'Chill moonlight.\nWhite like feather & cloud.\nShroud for the dead.', color: getReelColor(5) },
        { id: 'r7', title: 'Life Cycle', content: 'Day → Evening → Night\nBirth → Marriage → Death\nAll beautiful in their own way.', color: getReelColor(6) }
      ]
    },
    {
      id: 'eng6',
      title: '2.3 The Inchcape Rock',
      description: 'By Robert Southey - A ballad about karma.',
      summary: '**Genre**: Ballad\n**Poet**: Robert Southey\n**Theme**: "As you sow, so shall you reap" (Karma)\n\nThe ballad tells the story of the Abbot of Aberbrothok who places a bell on the Inchcape Rock to warn sailors. The pirate Ralph the Rover cuts the bell for evil purposes and later dies when his own ship hits the same rock.',
      detailedNotes: '### About the Poet\nRobert Southey (1774-1843) was an English Romantic poet who served as Poet Laureate.\n\n### What is a Ballad?\n* A narrative poem that tells a story\n* Usually has a regular rhyme scheme\n* Often deals with dramatic events\n* Meant to be sung or recited\n\n### Setting\n* Inchcape Rock: A reef off the coast of Scotland\n* North Sea\n* Medieval period\n\n### Characters\n1. **The Abbot of Aberbrothok**: Good, wise, helpful monk who places the warning bell.\n2. **Ralph the Rover**: Evil pirate, jealous, ultimately punished.\n\n### Plot Summary\n1. **The Good Deed**: The Abbot places a bell on Inchcape Rock to warn sailors of danger.\n2. **The Evil Act**: Pirate Ralph the Rover, out of spite and wickedness, cuts the bell and sinks it.\n3. **The Punishment**: Years later, Ralph\'s ship, loaded with plunder, hits the Inchcape Rock in darkness and sinks. Ralph dies.\n\n### Key Stanzas\n* Stanzas 1-4: Peaceful sea, the bell rings.\n* Stanzas 5-8: The Abbot\'s good work.\n* Stanzas 9-14: Ralph\'s evil act.\n* Stanzas 15-17: Ralph\'s punishment.\n\n### Themes\n1. **Karma**: What goes around comes around.\n2. **Good vs. Evil**: Good deeds vs. wicked acts.\n3. **Divine Justice**: Evil is eventually punished.\n4. **Human Nature**: Jealousy and greed lead to downfall.\n\n### Literary Devices\n* **Poetic Justice**: The villain is punished fittingly.\n* **Imagery**: Visual and auditory images.\n* **Personification**: "The sea-birds screamed."\n* **Foreshadowing**: Ralph\'s laugh hints at his fate.',
      flashcards: [
        { id: 'f1', front: 'Poet of The Inchcape Rock?', back: 'Robert Southey.' },
        { id: 'f2', front: 'Who placed the bell on the rock?', back: 'The Abbot of Aberbrothok.' },
        { id: 'f3', front: 'Who cut the bell?', back: 'Ralph the Rover (the pirate).' },
        { id: 'f4', front: 'What is the theme of the poem?', back: '"As you sow, so shall you reap" (Karma/Poetic Justice).' },
        { id: 'f5', front: 'What is a ballad?', back: 'A narrative poem that tells a story, often meant to be sung.' },
        { id: 'f6', front: 'Where is Inchcape Rock located?', back: 'Off the coast of Scotland in the North Sea.' },
        { id: 'f7', front: 'How did Ralph the Rover die?', back: 'His ship hit the Inchcape Rock and sank.' },
        { id: 'f8', front: 'What was the purpose of the bell?', back: 'To warn sailors of the dangerous rock.' }
      ],
      mcqs: [
        { id: 'q1', question: 'The Inchcape Rock is a:', options: ['Mountain', 'Reef/Rock', 'Ship', 'Bell'], correctIndex: 1, explanation: 'It\'s a dangerous reef off Scotland\'s coast.' },
        { id: 'q2', question: 'The Abbot placed the bell to:', options: ['Celebrate festivals', 'Warn sailors', 'Call for prayer', 'Attract tourists'], correctIndex: 1, explanation: 'The bell warned sailors of the dangerous rock.' },
        { id: 'q3', question: 'Ralph the Rover was a:', options: ['Monk', 'King', 'Pirate', 'Sailor'], correctIndex: 2, explanation: 'He was an evil pirate.' },
        { id: 'q4', question: 'The theme "As you sow, so shall you reap" represents:', options: ['Agriculture', 'Karma', 'Religion', 'Science'], correctIndex: 1, explanation: 'It means your actions have consequences.' },
        { id: 'q5', question: 'Robert Southey was a ______ poet.', options: ['American', 'English', 'Irish', 'Scottish'], correctIndex: 1, explanation: 'He was an English Romantic poet.' }
      ],
      reels: [
        { id: 'r1', title: 'The Rock', content: 'Inchcape Rock\nOff Scotland\'s coast\nDangerous for ships!', color: getReelColor(0) },
        { id: 'r2', title: 'The Good Abbot', content: 'Placed a warning bell.\nTo save sailors\' lives.\nBlessed by all!', color: getReelColor(1) },
        { id: 'r3', title: 'Ralph the Rover', content: 'Evil pirate.\nJealous of the Abbot.\nCut the bell!', color: getReelColor(2) },
        { id: 'r4', title: 'KARMA!', content: 'Years later...\nRalph\'s ship hits the rock.\nHe drowns in darkness!', color: getReelColor(3) },
        { id: 'r5', title: 'Theme', content: '"As you sow,\nso shall you reap."\nPoetic Justice!', color: getReelColor(4) },
        { id: 'r6', title: 'Ballad', content: 'Narrative poem.\nTells a story.\nMeant to be sung.', color: getReelColor(5) },
        { id: 'r7', title: 'Lesson', content: 'Good deeds are rewarded.\nEvil is punished.\nKarma always wins!', color: getReelColor(6) }
      ]
    },
    {
      id: 'eng7',
      title: '2.4 Father Returning Home',
      description: 'By Dilip Chitre - Modern poem on alienation.',
      summary: '**Genre**: Poetry (Free Verse)\n**Poet**: Dilip Chitre\n**Theme**: Alienation, urban loneliness, generation gap\n\nThe poem depicts a father\'s lonely commute home after work, highlighting the isolation and disconnection in modern urban life and within families.',
      detailedNotes: '### About the Poet\nDilip Chitre (1938-2009) was a Marathi poet, painter, and filmmaker. This poem is a translation of his own Marathi poem.\n\n### Form\n* Free verse (no regular rhyme or meter)\n* Two stanzas\n* Conversational, matter-of-fact tone\n\n### Stanza 1: The Journey Home\n* Father travels in a crowded suburban train.\n* He\'s unnoticed, invisible among commuters.\n* His face is gray, clothes are stained.\n* Rain, mud, darkness add to the bleak imagery.\n* He gets off at the station "like a word dropped from a sentence."\n\n### Stanza 2: At Home\n* At home, he\'s still alone.\n* Family is busy in their own worlds.\n* He eats alone, reads incomprehensible letters.\n* Goes to toilet, contemplates words.\n* Falls asleep thinking of his ancestors and grandchildren.\n* Dreams and thoughts are his only companions.\n\n### Key Images\n* **"Like a word dropped from a sentence"**: Insignificance\n* **"Stained and crumpled face"**: Worn out by life\n* **"His eyes dimmed by age"**: Loss of vitality\n* **"Thinking of his ancestors and grandchildren"**: Disconnection from present\n\n### Themes\n1. **Alienation**: Isolation in modern life.\n2. **Urban Loneliness**: City life lacks warmth.\n3. **Generation Gap**: No communication with family.\n4. **Working Class Struggle**: Tiresome daily routine.\n5. **Identity Crisis**: Father feels insignificant.\n\n### Literary Devices\n* **Simile**: "Like a word dropped from a sentence."\n* **Imagery**: Visual images of rain, mud, gray face.\n* **Symbolism**: Train journey = life\'s monotonous journey.',
      flashcards: [
        { id: 'f1', front: 'Poet of Father Returning Home?', back: 'Dilip Chitre.' },
        { id: 'f2', front: 'What is the main theme?', back: 'Alienation, urban loneliness, generation gap.' },
        { id: 'f3', front: 'What famous simile is used for the father?', back: '"Like a word dropped from a sentence."' },
        { id: 'f4', front: 'How does the father travel?', back: 'In a crowded suburban train.' },
        { id: 'f5', front: 'What does the father dream about?', back: 'His ancestors and grandchildren (past and future, not present).' },
        { id: 'f6', front: 'What is the tone of the poem?', back: 'Melancholic, matter-of-fact, detached.' },
        { id: 'f7', front: 'Dilip Chitre was originally a ______ poet.', back: 'Marathi poet (he translated his own poem).' }
      ],
      mcqs: [
        { id: 'q1', question: '"Like a word dropped from a sentence" suggests the father is:', options: ['Important', 'Insignificant', 'Happy', 'Angry'], correctIndex: 1, explanation: 'It shows how he feels unimportant and ignored.' },
        { id: 'q2', question: 'The father dreams about:', options: ['His office', 'His wife', 'Ancestors and grandchildren', 'Money'], correctIndex: 2, explanation: 'He thinks of past and future, feeling disconnected from present.' },
        { id: 'q3', question: 'The poem highlights:', options: ['Joy of family', 'Urban alienation', 'Rural life', 'Success'], correctIndex: 1, explanation: 'The poem shows loneliness in urban modern life.' },
        { id: 'q4', question: 'The father\'s face is described as:', options: ['Bright', 'Gray', 'Red', 'Young'], correctIndex: 1, explanation: 'His face is stained and gray, worn out by life.' },
        { id: 'q5', question: 'The poem is written in:', options: ['Sonnet form', 'Free verse', 'Ballad', 'Haiku'], correctIndex: 1, explanation: 'It has no regular rhyme or meter - free verse.' }
      ],
      reels: [
        { id: 'r1', title: 'The Father', content: 'Gray face.\nWorn clothes.\n"Like a word dropped from a sentence."', color: getReelColor(0) },
        { id: 'r2', title: 'The Journey', content: 'Crowded train.\nRain & mud.\nUnnoticed by all.', color: getReelColor(1) },
        { id: 'r3', title: 'At Home', content: 'Eats alone.\nReads alone.\nFamily is busy.', color: getReelColor(2) },
        { id: 'r4', title: 'His Dreams', content: 'Ancestors & Grandchildren.\nPast & Future.\nNever the Present!', color: getReelColor(3) },
        { id: 'r5', title: 'Theme', content: 'ALIENATION\nUrban loneliness.\nGeneration gap.', color: getReelColor(4) },
        { id: 'r6', title: 'Modern Life', content: 'Work all day.\nCome home tired.\nNo one cares.', color: getReelColor(5) },
        { id: 'r7', title: 'Dilip Chitre', content: 'Marathi poet.\nTranslated his own work.\n1938-2009', color: getReelColor(6) }
      ]
    },
    {
      id: 'eng8',
      title: '3. Writing Skills',
      description: 'Essay, Report, Letter writing formats.',
      summary: '**Writing Skills Section (16 Marks)**\n\n* Essay Writing (5-6 Marks)\n* Report Writing (5-6 Marks)\n* Letter Writing (5-6 Marks)\n* Leaflet/Pamphlet Making',
      detailedNotes: '### 1. ESSAY WRITING\n\n**Format:**\n```\nTitle\n\nIntroduction (Opening paragraph - Hook the reader)\n\nBody (2-3 paragraphs with main points)\n\nConclusion (Summary and final thoughts)\n```\n\n**Types of Essays:**\n* Narrative: Tells a story\n* Descriptive: Describes something\n* Argumentative: Presents an argument\n* Expository: Explains a topic\n\n**Tips:**\n1. Start with an interesting hook.\n2. Use paragraphs for different points.\n3. Support arguments with examples.\n4. End with a strong conclusion.\n5. Word limit: Usually 300-350 words.\n\n---\n\n### 2. REPORT WRITING\n\n**Format for Newspaper Report:**\n```\nHeadline (Catchy title)\nBy [Reporter Name]\n\n[Place, Date]: Lead paragraph (5 W\'s - Who, What, When, Where, Why)\n\nBody paragraphs (Details, quotes, background)\n\nConclusion (Future implications)\n```\n\n**Format for Event Report:**\n```\nREPORT ON [EVENT NAME]\n\nIntroduction: Brief overview\n\nDetails: Date, venue, organizers, participants\n\nDescription: What happened, activities\n\nConclusion: Success of event, feedback\n\nPrepared by: [Name]\nDate: [Date]\n```\n\n**Tips:**\n1. Use past tense.\n2. Be objective and factual.\n3. Include relevant details.\n4. Proper heading and subheadings.\n\n---\n\n### 3. LETTER WRITING\n\n**Formal Letter Format:**\n```\nSender\'s Address\nDate\n\nReceiver\'s Designation\nReceiver\'s Address\n\nSubject: ____________\n\nSalutation (Sir/Madam),\n\nBody (Introduction, Main Content, Conclusion)\n\nThanking you,\nYours faithfully/sincerely,\n[Signature]\n[Name]\n```\n\n**Types:**\n* Complaint Letter\n* Application Letter\n* Letter to Editor\n* Inquiry Letter\n\n---\n\n### 4. LEAFLET/PAMPHLET\n\n**Format:**\n* Catchy Title/Headline\n* Attractive visuals (drawn)\n* Key points in bullets\n* Contact information\n* Call to action\n\n**Tips:**\n1. Keep it brief and eye-catching.\n2. Use persuasive language.\n3. Include important dates/details.\n4. Add slogans if appropriate.',
      flashcards: [
        { id: 'f1', front: 'What are the 5 W\'s in report writing?', back: 'Who, What, When, Where, Why.' },
        { id: 'f2', front: 'Parts of a formal letter?', back: 'Sender\'s address, Date, Receiver\'s address, Subject, Salutation, Body, Closing.' },
        { id: 'f3', front: 'Closing for formal letters?', back: '"Yours faithfully" (unknown recipient) or "Yours sincerely" (known recipient).' },
        { id: 'f4', front: 'Types of essays?', back: 'Narrative, Descriptive, Argumentative, Expository.' },
        { id: 'f5', front: 'Word limit for HSC essay?', back: 'Usually 300-350 words.' },
        { id: 'f6', front: 'What tense is used in reports?', back: 'Past tense.' }
      ],
      mcqs: [
        { id: 'q1', question: 'A formal letter ends with:', options: ['Yours lovingly', 'Yours faithfully', 'See you', 'Take care'], correctIndex: 1, explanation: 'Formal letters end with "Yours faithfully" or "Yours sincerely."' },
        { id: 'q2', question: 'The 5 W\'s in journalism are:', options: ['Who, What, When, Where, Why', 'Who, Which, What, Where, Why', 'Who, What, When, Where, Whom', 'None of these'], correctIndex: 0, explanation: 'These are the basic questions answered in a news report.' },
        { id: 'q3', question: 'Reports are written in ______ tense.', options: ['Present', 'Past', 'Future', 'Any'], correctIndex: 1, explanation: 'Reports describe events that have already happened.' },
        { id: 'q4', question: 'Which is NOT a type of essay?', options: ['Narrative', 'Descriptive', 'Mathematical', 'Argumentative'], correctIndex: 2, explanation: 'Mathematical is not a type of essay.' }
      ],
      reels: [
        { id: 'r1', title: 'Essay Structure', content: 'Introduction (Hook)\n2-3 Body Paragraphs\nConclusion (Summary)', color: getReelColor(0) },
        { id: 'r2', title: '5 W\'s', content: 'Who?\nWhat?\nWhen?\nWhere?\nWhy?', color: getReelColor(1) },
        { id: 'r3', title: 'Formal Letter', content: 'Address → Date → Subject\nSalutation → Body\nClosing → Signature', color: getReelColor(2) },
        { id: 'r4', title: 'Closing Lines', content: 'Unknown person: Yours faithfully\nKnown person: Yours sincerely', color: getReelColor(3) },
        { id: 'r5', title: 'Report Tips', content: 'Use past tense.\nBe objective.\nInclude facts only.', color: getReelColor(4) },
        { id: 'r6', title: 'Leaflet', content: 'Catchy title.\nBullet points.\nCall to action!', color: getReelColor(5) }
      ]
    }
  ]
};

export const MOCK_DATA: Record<Stream, StreamData> = {
  [Stream.COMMERCE]: {
    id: Stream.COMMERCE,
    subjects: [
      ECONOMICS_SUBJECT,
      {
        id: 'ocm',
        name: 'OCM',
        icon: 'Briefcase',
        color: 'bg-emerald-500',
        syllabus: '1. Principles of Management\n2. Functions of Management\n3. Entrepreneurship Development\n4. Business Services\n5. Emerging Modes of Business\n6. Social Responsibility\n7. Consumer Protection\n8. Marketing',
        paperPattern: '### OCM Paper Pattern (80 Marks)\n\n* **Q.1 Objective Questions (20 Marks)**\n* **Q.2 Explain Terms/Concepts (8 Marks)**\n* **Q.3 Case Study/Situation (6 Marks)**\n* **Q.4 Distinguish Between (12 Marks)**\n* **Q.5 Answer in Brief (8 Marks)**\n* **Q.6 Justify Statements (8 Marks)**\n* **Q.7 Attempt the following (10 Marks)**\n* **Q.8 Long Answer Questions (8 Marks)**: (1 out of 2)',
        previousPapers: [],
        chapters: [
          { 
            id: 'ocm1', 
            title: '1. Principles of Management', 
            description: 'Nature, Significance, Fayol & Taylor Theories.', 
            summary: '**Management**: Art of getting things done.\n**Fayol**: 14 Principles (Division of Work, Authority, etc).\n**Taylor**: Scientific Management (Time study, Motion study).', 
            detailedNotes: '### 1. Introduction to Management\nManagement is key to success in any organization. It is considered as a resource like capital and labor.\n\n### 2. Nature of Principles of Management\n* **Universal Application**: Applicable everywhere (Profit, Non-profit, Small, Large).\n* **General Guidelines**: Not rigid rules like science, but guidelines for action.\n* **Formed by Practice**: Evolved through experimentation.\n* **Flexibility**: Can be modified according to situations.\n* **Behavioral in Nature**: Influences human behavior.\n* **Cause and Effect Relationship**: Tells what happens if a principle is applied.\n\n### 3. Henri Fayol (Father of Modern Management)\nProposed 14 Principles in his book "General and Industrial Administration".\n1. **Division of Work**: Specialization.\n2. **Authority & Responsibility**: Balance between right to order and obligation to do.\n3. **Discipline**: Respect for rules.\n4. **Unity of Command**: One boss.\n5. **Unity of Direction**: One plan.\n6. **Subordination of Individual Interest**: Org interest comes first.\n7. **Remuneration**: Fair pay.\n8. **Centralization**: Concentration of power.\n9. **Scalar Chain**: Line of authority (Gang Plank for emergency).\n10. **Order**: Material and Social order.\n11. **Equity**: Fair treatment.\n12. **Stability of Tenure**: Job security.\n13. **Initiative**: Encouraging new ideas.\n14. **Esprit de Corps**: Team spirit.\n\n### 4. F.W. Taylor (Father of Scientific Management)\nFocus on efficiency. "Science, not rule of thumb".\n* **Time Study**: Standard time for job.\n* **Motion Study**: Reducing wasteful movements.\n* **Fatigue Study**: Rest intervals.\n* **Differential Piece Rate**: Higher pay for higher production.',
            flashcards: [
              { id: 'f1', front: 'Father of Modern Management', back: 'Henri Fayol.' },
              { id: 'f2', front: 'Father of Scientific Management', back: 'F.W. Taylor.' },
              { id: 'f3', front: 'Unity of Command', back: 'One employee should have only one boss.' },
              { id: 'f4', front: 'Scalar Chain', back: 'Line of authority from top to bottom (Gang Plank allowed in emergency).' }
            ],
            mcqs: [
              { id: 'q1', question: 'Principle of _______ says "Union is Strength".', options: ['Equity', 'Order', 'Esprit de corps', 'Initiative'], correctIndex: 2, explanation: 'Team spirit.' },
              { id: 'q2', question: 'Taylor recommended ______ wage rate.', options: ['Differential', 'Equal', 'Time based', 'Fixed'], correctIndex: 0, explanation: 'Higher rate for efficient workers.' }
            ],
            reels: [
               { id: 'r1', title: '14 Principles', content: 'Fayol gave the General guidelines for managers.', color: getReelColor(0) },
               { id: 'r2', title: 'Scientific Mgmt', content: 'Taylor said: Don\'t guess (Rule of Thumb).\nUse Science.', color: getReelColor(1) },
               { id: 'r3', title: 'Division of Work', content: 'Divide work into small tasks.\nLeads to Specialization.', color: getReelColor(2) },
               { id: 'r4', title: 'Auth & Resp', content: 'Authority = Right to give orders.\nResponsibility = Obligation to perform.', color: getReelColor(3) },
               { id: 'r5', title: 'Discipline', content: 'Obedience, respect for authority, and observance of rules.', color: getReelColor(4) },
               { id: 'r6', title: 'Unity of Command', content: 'One employee should have only ONE Boss.\nAvoids confusion.', color: getReelColor(5) },
               { id: 'r7', title: 'Unity of Direction', content: 'One Head, One Plan.\nFocus on common goal.', color: getReelColor(6) },
               { id: 'r8', title: 'Remuneration', content: 'Fair pay to employees.\nSatisfy both employer and employee.', color: getReelColor(7) },
               { id: 'r9', title: 'Centralization', content: 'Concentration of power at the top.\nSmall orgs use this.', color: getReelColor(8) },
               { id: 'r10', title: 'Scalar Chain', content: 'The line of authority from top to bottom.', color: getReelColor(9) },
               { id: 'r11', title: 'Gang Plank', content: 'Direct communication shortcut in Scalar Chain for emergencies.', color: getReelColor(0) },
               { id: 'r12', title: 'Order', content: 'A place for everything and everything in its place.', color: getReelColor(1) },
               { id: 'r13', title: 'Equity', content: 'Kindness and Justice.\nNo discrimination.', color: getReelColor(2) },
               { id: 'r14', title: 'Stability', content: 'Job security minimizes employee turnover.', color: getReelColor(3) },
               { id: 'r15', title: 'Initiative', content: 'Taking the first step with self-motivation.', color: getReelColor(4) },
               { id: 'r16', title: 'Esprit de Corps', content: 'Team Spirit.\nUnion is Strength.', color: getReelColor(5) },
               { id: 'r17', title: 'Time Study', content: 'Determines standard time to perform a job.', color: getReelColor(6) },
               { id: 'r18', title: 'Motion Study', content: 'Eliminates unnecessary movements of workers.', color: getReelColor(7) },
               { id: 'r19', title: 'Fatigue Study', content: 'Study of rest intervals to regain energy.', color: getReelColor(8) },
               { id: 'r20', title: 'Universal', content: 'Principles apply to all: Business, Govt, Army, Home.', color: getReelColor(9) },
               { id: 'r21', title: 'Flexible', content: 'Principles can be modified as per situation.\nNot rigid.', color: getReelColor(0) },
               { id: 'r22', title: 'Cause & Effect', content: 'Principles tell us the likely result of an action.', color: getReelColor(1) }
            ]
          },
          { 
            id: 'ocm2', 
            title: '2. Functions of Management', 
            description: 'PODSCORB Cycle explained.', 
            summary: 'Planning -> Organizing -> Staffing -> Directing -> Coordinating -> Controlling.', 
            detailedNotes: '### 1. Introduction\nManagement is a set of functions. Luther Gulick gave the acronym **PODSCORB** (Planning, Organizing, Directing, Staffing, Coordinating, Reporting, Budgeting).\n\n### 2. Planning (The Brain)\n* **Meaning**: Deciding in advance what to do, how to do, when to do, and who is to do it.\n* **Importance**: Sets goals, Provides direction, Reduces risk of uncertainty, Innovative ideas.\n\n### 3. Organizing (The Body)\n* **Meaning**: Identifying and grouping activities, bringing together resources (Men, Money, Material, Machine).\n* **Importance**: Facilitates administration, Specialization, Optimum utilization of resources.\n\n### 4. Staffing (The Arms/Legs)\n* **Meaning**: Recruitment, Selection, Development, Training, Compensation of personnel.\n* **Importance**: Right person at right job, Long term growth, Job satisfaction.\n\n### 5. Directing (The Heart/Spark)\n* **Meaning**: Instructing, Guiding, Communicating, Inspiring, Motivating employees.\n* **Importance**: Initiates action, Integrates efforts, Motivation, Stability.\n\n### 6. Coordinating (The Nervous System)\n* **Meaning**: Integration of efforts of group members to ensure unity of action.\n* **Importance**: Encourages team spirit, Proper direction, Optimum utilization.\n\n### 7. Controlling (The Eyes)\n* **Meaning**: Comparing actual performance with standards and taking corrective action.\n* **Importance**: Fulfills goals, Standards accuracy, Efficient use of resources.',
            flashcards: [
              { id: 'f1', front: 'First function of management', back: 'Planning.' },
              { id: 'f2', front: 'Last function of management', back: 'Controlling.' }
            ],
            mcqs: [
              { id: 'q1', question: '______ is the base of all functions.', options: ['Controlling', 'Planning', 'Staffing', 'Directing'], correctIndex: 1, explanation: 'Without plan, nothing starts.' }
            ],
            reels: [
               { id: 'r1', title: 'PODSCORB', content: 'Luther Gulick\'s acronym for functions.', color: getReelColor(2) },
               { id: 'r2', title: 'Planning', content: 'Fail to plan?\nPlan to fail.\nIntellectual process.', color: getReelColor(3) },
               { id: 'r3', title: 'Organizing', content: 'Bringing together Men, Money, Material, Machine.', color: getReelColor(4) },
               { id: 'r4', title: 'Staffing', content: 'Right Person at Right Job.\nRecruitment, Selection, Training.', color: getReelColor(5) },
               { id: 'r5', title: 'Directing', content: 'The spark that starts the engine.\nLeadership, Motivation, Communication.', color: getReelColor(6) },
               { id: 'r6', title: 'Coordinating', content: 'Binding force.\nLike an orchestra conductor.', color: getReelColor(7) },
               { id: 'r7', title: 'Controlling', content: 'Comparing Actual vs Standard.\nTaking Corrective Action.', color: getReelColor(8) },
               { id: 'r8', title: 'Goal Setting', content: 'Planning is the primary function for setting goals.', color: getReelColor(9) },
               { id: 'r9', title: 'Resources', content: 'Organizing ensures optimum utilization of resources.', color: getReelColor(0) },
               { id: 'r10', title: 'HRM', content: 'Staffing is also known as Human Resource Management.', color: getReelColor(1) },
               { id: 'r11', title: 'Leadership', content: 'Directing involves leading and guiding employees.', color: getReelColor(2) },
               { id: 'r12', title: 'Team Spirit', content: 'Coordinating develops team spirit in the organization.', color: getReelColor(3) },
               { id: 'r13', title: 'Deviation', content: 'Controlling finds out deviation and corrects it.', color: getReelColor(4) },
               { id: 'r14', title: 'Future Oriented', content: 'Planning looks ahead.\nControlling looks back and ahead.', color: getReelColor(5) },
               { id: 'r15', title: 'Continuous', content: 'Management functions are continuous, not one-time.', color: getReelColor(6) },
               { id: 'r16', title: 'Efficiency', content: 'Doing things right (Process).', color: getReelColor(7) },
               { id: 'r17', title: 'Effectiveness', content: 'Doing the right things (Result).', color: getReelColor(8) },
               { id: 'r18', title: 'Top Level', content: 'Focuses mainly on Planning and Organizing.', color: getReelColor(9) },
               { id: 'r19', title: 'Middle Level', content: 'Focuses on Staffing and Coordinating.', color: getReelColor(0) },
               { id: 'r20', title: 'Lower Level', content: 'Focuses on Directing and Controlling.', color: getReelColor(1) },
               { id: 'r21', title: 'Motivation', content: 'Non-monetary incentives are part of Directing.', color: getReelColor(2) },
               { id: 'r22', title: 'Budgeting', content: 'A control technique expressed in numbers.', color: getReelColor(3) }
            ]
          },
          { 
            id: 'ocm3', 
            title: '3. Entrepreneurship Development', 
            description: 'Concepts, Qualities, Functions.', 
            summary: 'Entrepreneur: Innovator, Risk Taker.\nFunctions: Innovation, Decision Making.\nSchemes: Startup India, Standup India.', 
            detailedNotes: '### 1. Concept\nDerived from French word "Entreprendre" meaning "to undertake". An entrepreneur is a person who starts a business and is willing to risk loss in order to make money.\n\n### 2. Characteristics\n* **Intellectual Capabilities**: Creative thinking.\n* **Future Vision**: Foresight.\n* **Hard Work**: Ready to work long hours.\n* **Technical Knowledge**: Knowing the craft.\n* **Communication Skills**: To convince investors/customers.\n* **Risk Bearing Capacity**: Calculated risks.\n\n### 3. Functions\n* **Innovation**: New product, new market, new method (Schumpeter).\n* **Determination of Objectives**: Setting goals.\n* **Development of Market**: Finding customers.\n* **New Technology**: Upgradation.\n* **Good Relations**: With employees/suppliers.\n\n### 4. Entrepreneurship Development Program (EDP)\nStructured training to create entrepreneurs.\nSteps: Infrastructure -> Selection -> Training -> Monitoring.\n\n### 5. Initiatives\n* **Startup India**: 2016. Simplified compliance, Funding support.\n* **Stand-up India**: Loans to SC/ST and Women (10L to 1Cr).',
            flashcards: [
              { id: 'f1', front: 'Entrepreneur derived from?', back: 'French word "Entreprendre" (To undertake).' },
              { id: 'f2', front: 'Innovation theory given by?', back: 'Joseph Schumpeter.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Entrepreneur is a ______ taker.', options: ['Risk', 'Salary', 'Order', 'Rest'], correctIndex: 0, explanation: 'Profit is reward for risk.' }
            ],
            reels: [
               { id: 'r1', title: 'Risk Taker', content: 'No Risk, No Profit.\nCalculated risks, not gambling.', color: getReelColor(4) },
               { id: 'r2', title: 'Innovator', content: 'Doing new things or doing old things in new ways.', color: getReelColor(5) },
               { id: 'r3', title: 'Job Giver', content: 'Entrepreneurs create jobs.\nEmployees seek jobs.', color: getReelColor(6) },
               { id: 'r4', title: 'Entreprendre', content: 'French word meaning "To Undertake".', color: getReelColor(7) },
               { id: 'r5', title: 'Visionary', content: 'Seeing opportunity where others see problems.', color: getReelColor(8) },
               { id: 'r6', title: 'Manager vs Ent', content: 'Manager works for salary.\nEntrepreneur works for profit.', color: getReelColor(9) },
               { id: 'r7', title: 'Intrapreneur', content: 'An employee who innovates INSIDE a company.', color: getReelColor(0) },
               { id: 'r8', title: 'Schumpeter', content: 'Gave the theory of Innovation (Creative Destruction).', color: getReelColor(1) },
               { id: 'r9', title: 'Startup India', content: 'Launched in 2016 to boost startup culture.', color: getReelColor(2) },
               { id: 'r10', title: 'Stand-up India', content: 'Loans for SC/ST and Women entrepreneurs (10L-1Cr).', color: getReelColor(3) },
               { id: 'r11', title: 'Agro Tourism', content: 'Farm stays.\nConnects urban people to rural life.', color: getReelColor(4) },
               { id: 'r12', title: 'Hard Work', content: 'Entrepreneurship is 1% inspiration, 99% perspiration.', color: getReelColor(5) },
               { id: 'r13', title: 'Communication', content: 'Key skill to sell vision to investors and customers.', color: getReelColor(6) },
               { id: 'r14', title: 'EDP', content: 'Entrepreneurship Development Program.\nTraining to start biz.', color: getReelColor(7) },
               { id: 'r15', title: 'Unicorn', content: 'A startup valued at over $1 Billion.', color: getReelColor(8) },
               { id: 'r16', title: 'Angel Investor', content: 'Rich individual investing in early stage startups.', color: getReelColor(9) },
               { id: 'r17', title: 'Crowdfunding', content: 'Raising small amounts from many people online.', color: getReelColor(0) },
               { id: 'r18', title: 'Incubator', content: 'Provides office space and mentoring to new startups.', color: getReelColor(1) },
               { id: 'r19', title: 'Gap Filling', content: 'Entrepreneur fills the gap between needs and products.', color: getReelColor(2) },
               { id: 'r20', title: 'Economic Growth', content: 'Entrepreneurs increase National Income and employment.', color: getReelColor(3) },
               { id: 'r21', title: 'Decacorn', content: 'A startup valued at over $10 Billion.', color: getReelColor(4) },
               { id: 'r22', title: 'Bootstrapping', content: 'Starting business with own money, no external investors.', color: getReelColor(5) }
            ]
          },
          { 
            id: 'ocm4', 
            title: '4. Business Services', 
            description: 'Banking, Insurance, Transport, Communication.', 
            summary: 'Services are intangible.\n**Banking**: Commercial, Central.\n**Insurance**: Life, Fire, Marine.\n**Transport**: Road, Rail, Air, Water.', 
            detailedNotes: '### 1. Introduction\nServices are intangible, inseparable, inconsistent, and perishable. They support the primary and secondary sectors.\n\n### 2. Banking\n* **Central Bank (RBI)**: Issues currency, Banker to Govt, Banker to Banks.\n* **Commercial Bank**: Accepts deposits (Savings, Current, FD, RD) and Lends money (Loans, Overdraft).\n* **e-Banking**: NEFT, RTGS, IMPS, ATM, Credit/Debit Cards.\n\n### 3. Insurance\nContract between Insurer (Company) and Insured (Person) to indemnify loss.\n* **Principles**: \n  1. Utmost Good Faith (Disclosure)\n  2. Insurable Interest (Ownership)\n  3. Indemnity (Compensation, not profit)\n  4. Subrogation (Transfer of rights)\n  5. Contribution (Multiple policies)\n  6. Mitigation of Loss (Minimize damage)\n  7. Causa Proxima (Nearest cause)\n* **Types**: Life (Human), Marine (Sea), Fire (Assets).\n\n### 4. Transport\nMovement of people and goods. Creates **Place Utility**.\n* **Road**: Door-to-door, Flexible, but Traffic.\n* **Rail**: Heavy goods, Long distance, Cheap, but Fixed route.\n* **Air**: Fastest, Expensive, Emergency.\n* **Water**: Cheapest for bulky intl trade, Slowest.\n\n### 5. Warehousing\nStorage of goods. Creates **Time Utility**.\n* **Bonded Warehouse**: For imported goods (Customs duty pending).\n* **Cold Storage**: Perishables.', 
            flashcards: [
              { id: 'f1', front: 'Principle of Indemnity', back: 'To place insured in same financial position as before loss (Not applicable to Life).' },
              { id: 'f2', front: 'Warehousing creates?', back: 'Time Utility.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Principle of Indemnity is NOT applicable to ______ insurance.', options: ['Fire', 'Marine', 'Life', 'General'], correctIndex: 2, explanation: 'Human life cannot be valued in money.' }
            ],
            reels: [
               { id: 'r1', title: 'Intangible', content: 'Services cannot be seen or touched.\n(Doctor, Teacher).', color: getReelColor(6) },
               { id: 'r2', title: 'Inseparable', content: 'Service provider and service cannot be separated.', color: getReelColor(7) },
               { id: 'r3', title: 'Perishable', content: 'Services cannot be stored.\nEmpty airline seat is lost forever.', color: getReelColor(8) },
               { id: 'r4', title: 'Central Bank', content: 'Apex bank (RBI).\nRegulates money supply.', color: getReelColor(9) },
               { id: 'r5', title: 'Commercial Bank', content: 'Accepts deposits, Grants loans.\nProfit motive.', color: getReelColor(0) },
               { id: 'r6', title: 'Current A/c', content: 'For Businessmen.\nOverdraft facility available.', color: getReelColor(1) },
               { id: 'r7', title: 'Savings A/c', content: 'For salaried people.\nEncourages saving habit.', color: getReelColor(2) },
               { id: 'r8', title: 'FD', content: 'Fixed Deposit.\nLump sum amount for fixed period. High interest.', color: getReelColor(3) },
               { id: 'r9', title: 'RTGS', content: 'Real Time Gross Settlement.\nMin Amt: 2 Lakhs. Instant.', color: getReelColor(4) },
               { id: 'r10', title: 'NEFT', content: 'National Electronic Funds Transfer.\nBatches (Half hourly).', color: getReelColor(5) },
               { id: 'r11', title: 'Utmost Good Faith', content: 'Both parties must disclose ALL material facts.', color: getReelColor(6) },
               { id: 'r12', title: 'Insurable Interest', content: 'You must suffer financial loss if the object is damaged.', color: getReelColor(7) },
               { id: 'r13', title: 'Indemnity', content: 'Compensation for loss.\nNo profit from insurance.', color: getReelColor(8) },
               { id: 'r14', title: 'Subrogation', content: 'Transfer of ownership rights to insurer after claim settlement.', color: getReelColor(9) },
               { id: 'r15', title: 'Causa Proxima', content: 'Nearest cause of loss is considered.', color: getReelColor(0) },
               { id: 'r16', title: 'Life Insurance', content: 'Contract of Assurance.\nEvent (Death) is certain.', color: getReelColor(1) },
               { id: 'r17', title: 'Fire Insurance', content: 'Contract of Indemnity.\nLoss by fire.', color: getReelColor(2) },
               { id: 'r18', title: 'Place Utility', content: 'Transport moves goods from place of production to consumption.', color: getReelColor(3) },
               { id: 'r19', title: 'Time Utility', content: 'Warehousing stores goods until they are needed.', color: getReelColor(4) },
               { id: 'r20', title: 'Bonded Warehouse', content: 'Stores imported goods until customs duty is paid.', color: getReelColor(5) },
               { id: 'r21', title: 'Cold Storage', content: 'For perishable goods like fruits, vegetables, milk.', color: getReelColor(6) },
               { id: 'r22', title: 'Door-to-Door', content: 'Road transport is the only mode providing doorstep service.', color: getReelColor(7) },
               { id: 'r23', title: 'Fastest Mode', content: 'Air transport is fastest but most expensive.', color: getReelColor(8) },
               { id: 'r24', title: 'Cheapest Mode', content: 'Water transport is cheapest for bulky goods.', color: getReelColor(9) },
               { id: 'r25', title: 'Monorail', content: 'Rapid transit system found in Mumbai.', color: getReelColor(0) }
            ],
            longAnswers: ocm_ch4_long_answers
          },
          { 
            id: 'ocm5', 
            title: '5. Emerging Modes of Business', 
            description: 'E-Business, BPO, KPO, LPO.', 
            summary: '**E-Business**: Electronic Business.\nTypes: B2B, B2C, C2C, C2B.\n**Outsourcing**: BPO (Voice/Non-voice), KPO (Knowledge), LPO (Legal).', 
            detailedNotes: '### 1. E-Business\nDerived from Email/E-commerce. Conduct of industry, trade, and commerce using computer networks.\n* **Scope**:\n  1. **B2B (Business to Business)**: Transactions between firms (Auto parts to Car maker).\n  2. **B2C (Business to Consumer)**: Amazon, Flipkart.\n  3. **C2C (Consumer to Consumer)**: eBay, OLX.\n  4. **C2B (Consumer to Business)**: Reviews, Freelance work.\n* **Benefits**: Easy formation, Lower investment, Convenience, Global reach, Paperless.\n* **Limitations**: Lack of personal touch, Security issues, Delivery delay.\n\n### 2. Outsourcing\nContracting out non-core business activities to third-party specialists.\n* **Need**: To focus on core competency, Cost reduction.\n* **Forms**:\n  1. **BPO (Business Process Outsourcing)**: Call centers, Data entry.\n  2. **KPO (Knowledge Process Outsourcing)**: R&D, Data Analysis (High skill).\n  3. **LPO (Legal Process Outsourcing)**: Legal drafting, Patent filing.',
            flashcards: [
              { id: 'f1', front: 'B2C stands for', back: 'Business to Consumer.' },
              { id: 'f2', front: 'KPO stands for', back: 'Knowledge Process Outsourcing.' }
            ],
            mcqs: [
              { id: 'q1', question: 'OLX is an example of ______.', options: ['B2B', 'B2C', 'C2C', 'C2B'], correctIndex: 2, explanation: 'Consumer selling to Consumer.' }
            ],
            reels: [
               { id: 'r1', title: 'E-Commerce', content: 'Buying & Selling online.\nSubset of E-Business.', color: getReelColor(1) },
               { id: 'r2', title: 'E-Business', content: 'Broader term.\nIncludes production, inventory, finance online.', color: getReelColor(2) },
               { id: 'r3', title: 'B2B', content: 'Business to Business.\nCar maker buying tires from tire maker.', color: getReelColor(3) },
               { id: 'r4', title: 'B2C', content: 'Business to Consumer.\nYou buying phone from Amazon.', color: getReelColor(4) },
               { id: 'r5', title: 'C2C', content: 'Consumer to Consumer.\nSelling old bike on OLX.', color: getReelColor(5) },
               { id: 'r6', title: 'C2B', content: 'Consumer to Business.\nFreelancers, Paid Surveys.', color: getReelColor(6) },
               { id: 'r7', title: 'G2C', content: 'Govt to Citizen.\nPassport seva, Tax filing online.', color: getReelColor(7) },
               { id: 'r8', title: 'Intra-B', content: 'Transactions WITHIN the business.\nMarketing dept to Finance dept.', color: getReelColor(8) },
               { id: 'r9', title: 'Global Reach', content: 'E-Business has no geographical boundaries.', color: getReelColor(9) },
               { id: 'r10', title: 'Paperless', content: 'E-Business reduces paperwork significantly.', color: getReelColor(0) },
               { id: 'r11', title: 'Phishing', content: 'Stealing sensitive info by pretending to be bank.', color: getReelColor(1) },
               { id: 'r12', title: 'Encryption', content: 'Converting data into code for security.', color: getReelColor(2) },
               { id: 'r13', title: 'Hacking', content: 'Unauthorized access to computer systems.', color: getReelColor(3) },
               { id: 'r14', title: 'Digital Signature', content: 'Authenticates identity of sender.', color: getReelColor(4) },
               { id: 'r15', title: 'Payment Gateway', content: 'Software to authorize card payments (Razorpay).', color: getReelColor(5) },
               { id: 'r16', title: 'Outsourcing', content: 'Giving non-core work to outside specialists.', color: getReelColor(6) },
               { id: 'r17', title: 'BPO', content: 'Business Process Outsourcing.\nCall centers.', color: getReelColor(7) },
               { id: 'r18', title: 'KPO', content: 'Knowledge Process Outsourcing.\nRequires high skills (R&D).', color: getReelColor(8) },
               { id: 'r19', title: 'LPO', content: 'Legal Process Outsourcing.\nDrafting legal docs.', color: getReelColor(9) },
               { id: 'r20', title: 'Core Competence', content: 'Focus on what you do best.\nOutsource the rest.', color: getReelColor(0) },
               { id: 'r21', title: 'Nearshoring', content: 'Outsourcing to a nearby country.', color: getReelColor(1) },
               { id: 'r22', title: 'Onshoring', content: 'Outsourcing within the same country.', color: getReelColor(2) },
               { id: 'r23', title: 'COD', content: 'Cash On Delivery.\nPay when you get the product.', color: getReelColor(3) },
               { id: 'r24', title: 'VPN', content: 'Virtual Private Network.\nSecure connection.', color: getReelColor(4) }
            ]
          },
          { 
            id: 'ocm6', 
            title: '6. Social Responsibility', 
            description: 'CSR & Business Ethics.', 
            summary: 'CSR: Corporate Social Responsibility.\nGroups: Owners, Investors, Employees, Consumers, Govt, Society.', 
            detailedNotes: '### 1. Concept\nBusiness is a part of society. It uses social resources, so it must give back. "Profit is not the sole objective".\n\n### 2. Need for Social Responsibility\n* **Public Image**: Good reputation.\n* **Trusteeship**: Gandhi\'s philosophy (Wealth belongs to society).\n* **Long term interest**: Avoid govt interference.\n* **Moral Justification**: It\'s the right thing to do.\n\n### 3. Responsibility towards Groups\n* **Owners**: Reasonable profit, Expansion, Efficiency.\n* **Investors**: Fair return, Safety of capital, Transparency.\n* **Employees**: Fair wages, Job security, Health/Safety, Union rights.\n* **Consumers**: Quality goods, Fair price, No adulteration, Redressal.\n* **Government**: Pay taxes, Follow laws, No corruption.\n* **Society**: Environment protection, Employment generation, Help weaker sections.\n\n### 4. CSR (Corporate Social Responsibility)\nSec 135 of Companies Act 2013.\n* **Applicability**: Net Worth > 500Cr OR Turnover > 1000Cr OR Net Profit > 5Cr.\n* **Requirement**: Spend **2% of average net profit** of last 3 years on CSR activities (Education, Health, Poverty, Gender equality).',
            flashcards: [
              { id: 'f1', front: 'CSR full form', back: 'Corporate Social Responsibility.' },
              { id: 'f2', front: 'Job Security is responsibility towards?', back: 'Employees.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Business should provide ______ goods to consumers.', options: ['Cheap', 'Quality', 'Adulterated', 'Duplicate'], correctIndex: 1, explanation: 'Safety and value.' }
            ],
            reels: [
               { id: 'r1', title: 'CSR', content: 'Corporate Social Responsibility.\nGiving back to society.', color: getReelColor(3) },
               { id: 'r2', title: 'CSR Limit', content: '2% of avg net profit of last 3 years.', color: getReelColor(4) },
               { id: 'r3', title: 'To Owners', content: 'Fair dividend, Efficient mgmt, Growth.', color: getReelColor(5) },
               { id: 'r4', title: 'To Employees', content: 'Fair wages, Job security, Good working conditions.', color: getReelColor(6) },
               { id: 'r5', title: 'To Consumers', content: 'Good quality, Fair price, No adulteration.', color: getReelColor(7) },
               { id: 'r6', title: 'To Govt', content: 'Pay Taxes honestly.\nFollow Laws.', color: getReelColor(8) },
               { id: 'r7', title: 'To Society', content: 'Protect Environment.\nCreate Jobs.', color: getReelColor(9) },
               { id: 'r8', title: 'Trusteeship', content: 'Gandhi\'s concept.\nBusinessmen are trustees of society\'s wealth.', color: getReelColor(0) },
               { id: 'r9', title: 'Ethics', content: 'Derived from Greek "Ethos".\nMeans Character.', color: getReelColor(1) },
               { id: 'r10', title: 'Business Ethics', content: 'Code of conduct.\nRight vs Wrong in business.', color: getReelColor(2) },
               { id: 'r11', title: 'Public Image', content: 'Social responsibility builds good brand reputation.', color: getReelColor(3) },
               { id: 'r12', title: 'Sec 135', content: 'Section of Companies Act 2013 dealing with CSR.', color: getReelColor(4) },
               { id: 'r13', title: 'CSR Eligibility', content: 'Net Worth > 500Cr OR Turnover > 1000Cr OR Profit > 5Cr.', color: getReelColor(5) },
               { id: 'r14', title: 'Triple Bottom Line', content: 'People, Planet, Profit.\nSustainability.', color: getReelColor(6) },
               { id: 'r15', title: 'To Investors', content: 'Safety of Capital.\nCorrect Information.', color: getReelColor(7) },
               { id: 'r16', title: 'Black Marketing', content: 'Creating artificial shortage.\nUnethical practice.', color: getReelColor(8) },
               { id: 'r17', title: 'Fair Trade', content: 'No unfair trade practices like misleading ads.', color: getReelColor(9) },
               { id: 'r18', title: 'Philanthropy', content: 'Charity.\nLove for mankind.', color: getReelColor(0) },
               { id: 'r19', title: 'Social Audit', content: 'Checking company\'s social performance.', color: getReelColor(1) },
               { id: 'r20', title: 'ISO 14000', content: 'Standards for Environmental Management.', color: getReelColor(2) },
               { id: 'r21', title: 'Carbon Footprint', content: 'Total greenhouse gas emissions caused by org.', color: getReelColor(3) },
               { id: 'r22', title: 'Whistle Blowing', content: 'Employee reporting unethical practices inside company.', color: getReelColor(4) }
            ]
          },
          { 
            id: 'ocm7', 
            title: '7. Consumer Protection', 
            description: 'Rights, Responsibilities, Forums.', 
            summary: 'Rights: Safety, Info, Choose, Heard, Redressal, Education.\nForums: District (upto 1Cr), State (1Cr-10Cr), National (>10Cr).', 
            detailedNotes: '### 1. Introduction\nConsumer is the King of the market. But in reality, he is exploited (Adulteration, High Price, Defective weights). Hence protection is needed.\n\n### 2. Rights of Consumers (COPRA 2019)\n1. **Right to Safety**: Against hazardous goods.\n2. **Right to Information**: Ingredients, Date, Price.\n3. **Right to Choose**: Variety at competitive price.\n4. **Right to be Heard**: Represent in forums.\n5. **Right to Consumer Education**: Awareness.\n6. **Right to Redressal**: Compensation.\n7. **Right to Healthy Environment**.\n8. **Right against Unfair Trade Practices**.\n\n### 3. Consumer Protection Mechanism\nThree-Tier Quasi-Judicial Machinery:\n* **District Commission**:\n  * Jurisdiction: District level.\n  * Claims: Upto Rs. 1 Crore.\n  * President: District Judge.\n* **State Commission**:\n  * Jurisdiction: State level.\n  * Claims: Rs. 1 Crore to Rs. 10 Crores.\n  * President: High Court Judge.\n* **National Commission**:\n  * Jurisdiction: National level (Delhi).\n  * Claims: Above Rs. 10 Crores.\n  * President: Supreme Court Judge.\n\n### 4. Responsibilities\n* Ask for Cash Memo.\n* Check Standard Marks (ISI, Agmark, Hallmark).\n* File complaint.',
            flashcards: [
              { id: 'f1', front: 'Consumer Protection Act Year', back: '2019 (Old was 1986).' },
              { id: 'f2', front: 'Jago Grahak Jago', back: 'Consumer Awareness Campaign.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Consumer Protection Act was passed in ______.', options: ['1986', '2019', '1947', '2000'], correctIndex: 1, explanation: 'Latest act is 2019.' }
            ],
            reels: [
               { id: 'r1', title: 'King of Market', content: 'Consumer is King.\nBut often exploited.', color: getReelColor(5) },
               { id: 'r2', title: 'Caveat Emptor', content: 'Let the Buyer Beware.\n(Old concept).', color: getReelColor(6) },
               { id: 'r3', title: 'Caveat Venditor', content: 'Let the Seller Beware.\n(New concept - Consumer Protection).', color: getReelColor(7) },
               { id: 'r4', title: 'Right to Safety', content: 'Protection against hazardous goods (Pressure cooker burst).', color: getReelColor(8) },
               { id: 'r5', title: 'Right to Info', content: 'Details on label: Price, Ingredients, Expiry.', color: getReelColor(9) },
               { id: 'r6', title: 'Right to Choose', content: 'Freedom to select from variety of products.', color: getReelColor(0) },
               { id: 'r7', title: 'Right to be Heard', content: 'Right to represent complaint in consumer forum.', color: getReelColor(1) },
               { id: 'r8', title: 'Right to Redressal', content: 'Right to get compensation for loss.', color: getReelColor(2) },
               { id: 'r9', title: 'Right to Education', content: 'Right to know rights.\nJago Grahak Jago.', color: getReelColor(3) },
               { id: 'r10', title: 'District Commission', content: 'Claims Upto Rs. 1 Crore.', color: getReelColor(4) },
               { id: 'r11', title: 'State Commission', content: 'Claims Rs. 1 Crore to Rs. 10 Crores.', color: getReelColor(5) },
               { id: 'r12', title: 'National Commission', content: 'Claims Above Rs. 10 Crores.', color: getReelColor(6) },
               { id: 'r13', title: 'President: District', content: 'District Judge.', color: getReelColor(7) },
               { id: 'r14', title: 'President: State', content: 'High Court Judge.', color: getReelColor(8) },
               { id: 'r15', title: 'President: National', content: 'Supreme Court Judge.', color: getReelColor(9) },
               { id: 'r16', title: 'Appeal Period', content: 'Appeal to higher forum within 45 days (District to State) or 30 days.', color: getReelColor(0) },
               { id: 'r17', title: 'ISI Mark', content: 'Standard for Industrial products (Electronics).', color: getReelColor(1) },
               { id: 'r18', title: 'Agmark', content: 'Standard for Agricultural products.', color: getReelColor(2) },
               { id: 'r19', title: 'Hallmark', content: 'Standard for Gold purity.', color: getReelColor(3) },
               { id: 'r20', title: 'COPRA 2019', content: 'New Consumer Protection Act replaced 1986 Act.', color: getReelColor(4) },
               { id: 'r21', title: 'Lok Adalat', content: 'People\'s Court for speedy justice.', color: getReelColor(5) },
               { id: 'r22', title: 'PIL', content: 'Public Interest Litigation.\nFiled for general public good.', color: getReelColor(6) },
               { id: 'r23', title: 'NGO', content: 'Non-Govt Org.\nHelps consumers file cases.', color: getReelColor(7) },
               { id: 'r24', title: 'Cash Memo', content: 'Proof of purchase.\nMust for filing complaint.', color: getReelColor(8) }
            ]
          },
          { 
            id: 'ocm8', 
            title: '8. Marketing', 
            description: 'Concepts, 4Ps, 7Ps, Functions.', 
            summary: 'Marketing Mix.\nProduct, Price, Place, Promotion.\n+ People, Process, Physical Evidence.', 
            detailedNotes: '### 1. Concept of Market\nDerived from Latin word "Marcatus".\n* **Place Concept**: Where buyers and sellers meet.\n* **Commodity Concept**: Dealing in goods (Cotton market).\n* **Exchange Concept**: Transaction.\n* **Area Concept**: Area where price is determined.\n* **Digital Concept**: E-market.\n\n### 2. Marketing Definition\n"Marketing is a social process by which individuals and groups obtain what they need..." - Philip Kotler.\n\n### 3. Marketing Mix (4Ps)\nGiven by E. Jerome McCarthy.\n1. **Product**: Goods/Services (Quality, Design, Brand).\n2. **Price**: Monetary value (Discounts, Credit terms).\n3. **Place**: Distribution (Channels, Transport, Inventory).\n4. **Promotion**: Communication (Advertising, Sales promotion).\n\n### 4. Extended 3Ps (For Services)\n5. **People**: Employees (Staff behavior).\n6. **Process**: Delivery mechanism (Steps).\n7. **Physical Evidence**: Ambience, Uniforms, Decor.\n\n### 5. Functions of Marketing\n* Marketing Research\n* Branding\n* Labelling & Packaging\n* Standardization & Grading\n* Promotion\n* Transport & Warehousing.',
            flashcards: [
              { id: 'f1', front: '4Ps given by', back: 'E. Jerome McCarthy.' },
              { id: 'f2', front: 'Marketing Mix', back: 'Combination of variables to satisfy market.' }
            ],
            mcqs: [
              { id: 'q1', question: '4Ps of marketing are Product, Price, Place and ______.', options: ['Process', 'Promotion', 'People', 'Plan'], correctIndex: 1, explanation: 'The communication aspect.' }
            ],
            reels: [
               { id: 'r1', title: '4Ps', content: 'Product, Price, Place, Promotion.\nGiven by McCarthy.', color: getReelColor(7) },
               { id: 'r2', title: 'Price', content: 'Only P that brings Money in.\nOthers take money out.', color: getReelColor(8) },
               { id: 'r3', title: 'Product', content: 'Goods or Services.\nMust satisfy consumer need.', color: getReelColor(9) },
               { id: 'r4', title: 'Place', content: 'Distribution.\nFactory -> Wholesaler -> Retailer -> You.', color: getReelColor(0) },
               { id: 'r5', title: 'Promotion', content: 'Communication.\nAds, Discounts, Salesmen.', color: getReelColor(1) },
               { id: 'r6', title: '3Ps', content: 'Extended Ps for Services.\nPeople, Process, Physical Evidence.', color: getReelColor(2) },
               { id: 'r7', title: 'Market', content: 'Derived from Latin "Marcatus" meaning to trade.', color: getReelColor(3) },
               { id: 'r8', title: 'Philip Kotler', content: 'Father of Modern Marketing.', color: getReelColor(4) },
               { id: 'r9', title: 'Marketing vs Selling', content: 'Selling = Cash.\nMarketing = Customer Satisfaction.', color: getReelColor(5) },
               { id: 'r10', title: 'Branding', content: 'Creating a unique identity (Name, Logo).', color: getReelColor(6) },
               { id: 'r11', title: 'Packaging', content: 'Silent Salesman.\nProtects and Attracts.', color: getReelColor(7) },
               { id: 'r12', title: 'Labelling', content: 'Information tag on package (Ingredients, Price).', color: getReelColor(8) },
               { id: 'r13', title: 'Standardization', content: 'Maintaining uniform quality.', color: getReelColor(9) },
               { id: 'r14', title: 'Grading', content: 'Sorting products based on size/quality (Agri products).', color: getReelColor(0) },
               { id: 'r15', title: 'Marketing Research', content: 'First step.\nUnderstanding consumer needs.', color: getReelColor(1) },
               { id: 'r16', title: 'Physical Evidence', content: 'Ambience in a hotel/restaurant.', color: getReelColor(2) },
               { id: 'r17', title: 'People', content: 'Staff behavior is crucial in services.', color: getReelColor(3) },
               { id: 'r18', title: 'Process', content: 'Steps in delivering service (Ordering food).', color: getReelColor(4) },
               { id: 'r19', title: 'Advertising', content: 'Paid form of non-personal communication.', color: getReelColor(5) },
               { id: 'r20', title: 'Personal Selling', content: 'Face-to-face interaction.', color: getReelColor(6) },
               { id: 'r21', title: 'Publicity', content: 'Non-paid news coverage.', color: getReelColor(7) },
               { id: 'r22', title: 'Sales Promotion', content: 'Short term incentives (Buy 1 Get 1).', color: getReelColor(8) },
               { id: 'r23', title: 'Skimming', content: 'High price initially for new tech products.', color: getReelColor(9) },
               { id: 'r24', title: 'Penetration', content: 'Low price initially to capture market.', color: getReelColor(0) }
            ],
            longAnswers: ocm_ch8_long_answers
          }
        ]
      },
      ENGLISH_SUBJECT,
      {
        id: 'sp',
        name: 'Secretarial Practice',
        icon: 'PenTool',
        color: 'bg-purple-500',
        syllabus: '1. Introduction to Corporate Finance...',
        paperPattern: 'Similar to OCM Pattern.',
        chapters: [
           { 
            id: 'sp1', 
            title: '1. Introduction to Corporate Finance', 
            description: 'Financing and Investment decisions.', 
            summary: '**Corporate Finance**: Raising and using funds.\n**Decisions**: Financing, Investment, Dividend.\n**Capital**: Fixed (Long-term) vs Working (Short-term).', 
            detailedNotes: '### 1. Meaning of Corporate Finance\nDealing with raising and using of finance by a corporation. It involves managing the financial activities and decisions.\n\n### 2. Financial Decisions\n1. **Financing Decision**: Should we use Equity or Debt?\n2. **Investment Decision**: Which assets to acquire?\n3. **Dividend Decision**: How much profit to distribute?\n\n### 3. Types of Capital\n**Fixed Capital (Block Capital)**:\n* Long-term assets.\n* Land, Building, Machinery, Furniture.\n* Stay in business for long period.\n\n**Working Capital (Circulating Capital)**:\n* Short-term assets.\n* Cash, Inventory, Receivables.\n* Circulates in business operations.\n\n### 4. Sources of Finance\n* **Owned Capital**: Equity shares, Retained earnings.\n* **Borrowed Capital**: Debentures, Loans, Bonds.\n\n### 5. Importance of Corporate Finance\n* Ensures smooth functioning.\n* Helps in expansion and modernization.\n* Maintains liquidity and solvency.',
            flashcards: [
              { id: 'f1', front: 'Corporate Finance deals with?', back: 'Acquisition and Use of Capital.' },
              { id: 'f2', front: 'Fixed Capital is also called?', back: 'Block Capital (Long-term assets).' },
              { id: 'f3', front: 'Working Capital is also called?', back: 'Circulating Capital (Short-term assets).' },
              { id: 'f4', front: 'Three main financial decisions?', back: 'Financing, Investment, and Dividend decisions.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Fixed capital is also known as ______ capital.', options: ['Circulating', 'Block', 'Working', 'Liquid'], correctIndex: 1, explanation: 'Permanent assets that stay long in business.' },
              { id: 'q2', question: 'Working capital is required for ______ needs.', options: ['Long-term', 'Short-term', 'Permanent', 'Fixed'], correctIndex: 1, explanation: 'Day-to-day operations.' },
              { id: 'q3', question: 'Land and Building are examples of ______ capital.', options: ['Working', 'Circulating', 'Fixed', 'Liquid'], correctIndex: 2, explanation: 'They stay in business for long.' }
            ],
            reels: [
               { id: 'r1', title: 'Corporate Finance', content: 'Raising and using funds.\nLifeblood of business.', color: getReelColor(0) },
               { id: 'r2', title: 'Fixed Capital', content: 'Long-term assets.\nLand, Building, Machinery.', color: getReelColor(1) },
               { id: 'r3', title: 'Working Capital', content: 'Short-term assets.\nCash, Stock, Debtors.', color: getReelColor(2) },
               { id: 'r4', title: '3 Decisions', content: 'Financing (Where to get money?)\nInvestment (Where to use?)\nDividend (How much to distribute?)', color: getReelColor(3) },
               { id: 'r5', title: 'Owned vs Borrowed', content: 'Owned: Equity, Profits.\nBorrowed: Loans, Debentures.', color: getReelColor(4) }
            ]
          },
          { 
            id: 'sp2', 
            title: '2. Sources of Corporate Finance', 
            description: 'Equity, Preference, Debentures, Retained Earnings.', 
            summary: '**Equity Shares**: Ownership, Risk.\n**Preference Shares**: Fixed dividend, Priority.\n**Debentures**: Loan, Interest.\n**Retained Earnings**: Ploughing back profits.', 
            detailedNotes: '### 1. Equity Shares\n**Meaning**: Ownership capital. Shareholders are owners.\n**Features**:\n* Voting rights.\n* No fixed dividend.\n* Risk bearing capital.\n* Permanent capital.\n\n### 2. Preference Shares\n**Meaning**: Priority in dividend and repayment.\n**Types**:\n* Cumulative / Non-cumulative.\n* Participating / Non-participating.\n* Convertible / Non-convertible.\n* Redeemable / Irredeemable.\n\n### 3. Debentures\n**Meaning**: Borrowed capital. Loan taken from public.\n**Features**:\n* Fixed rate of interest.\n* No voting rights.\n* Priority in repayment.\n* Can be secured or unsecured.\n\n### 4. Retained Earnings (Ploughing Back)\n**Meaning**: Profits kept in business instead of distributing.\n**Advantages**: No cost, No dilution of control.\n\n### 5. Other Sources\n* Public Deposits.\n* Term Loans from Banks.\n* Commercial Paper.\n* Inter-corporate Deposits.',
            flashcards: [
              { id: 'f1', front: 'Equity shareholders are?', back: 'Real owners of the company with voting rights.' },
              { id: 'f2', front: 'Preference shares have?', back: 'Fixed dividend and priority in repayment.' },
              { id: 'f3', front: 'Debenture holders are?', back: 'Creditors of the company (Lenders).' },
              { id: 'f4', front: 'Retained Earnings means?', back: 'Ploughing back profits into business.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Equity shareholders have ______ rights.', options: ['Voting', 'Fixed dividend', 'Priority', 'Interest'], correctIndex: 0, explanation: 'They elect directors.' },
              { id: 'q2', question: 'Debenture holders receive ______.', options: ['Dividend', 'Interest', 'Bonus', 'Profit'], correctIndex: 1, explanation: 'Fixed rate of interest.' },
              { id: 'q3', question: 'Ploughing back of profits is ______.', options: ['Dividend', 'Retained Earnings', 'Bonus', 'Split'], correctIndex: 1, explanation: 'Keeping profits in business.' }
            ],
            reels: [
               { id: 'r1', title: 'Equity Shares', content: 'Ownership capital.\nVoting rights.\nResidual claim.', color: getReelColor(5) },
               { id: 'r2', title: 'Preference Shares', content: 'Fixed dividend.\nPriority over equity.\nNo voting rights.', color: getReelColor(6) },
               { id: 'r3', title: 'Debentures', content: 'Loan from public.\nFixed Interest.\nCreditors of company.', color: getReelColor(7) },
               { id: 'r4', title: 'Retained Earnings', content: 'Ploughing back profits.\nNo cost of capital.\nNo dilution.', color: getReelColor(8) },
               { id: 'r5', title: 'Cumulative Pref', content: 'Unpaid dividend accumulates.\nMust be paid before equity.', color: getReelColor(9) },
               { id: 'r6', title: 'Convertible Deb', content: 'Can be converted into equity shares.', color: getReelColor(0) }
            ]
          },
          { 
            id: 'sp3', 
            title: '3. Issue of Shares', 
            description: 'Procedure, Types of Issue, SEBI Guidelines.', 
            summary: '**IPO**: First issue to public.\n**FPO**: Further Public Offer.\n**Rights Issue**: To existing shareholders.\n**Bonus Issue**: Free shares from reserves.', 
            detailedNotes: '### 1. Types of Share Issue\n**A. Initial Public Offer (IPO)**:\n* First time issue to public.\n* Company becomes listed.\n* DRHP filed with SEBI.\n\n**B. Further Public Offer (FPO)**:\n* Subsequent issue by listed company.\n\n**C. Rights Issue**:\n* Offered to existing shareholders.\n* Right to buy before public.\n* Can renounce the right.\n\n**D. Bonus Issue**:\n* Free shares from reserves.\n* No cash received.\n* Capitalization of profits.\n\n**E. Private Placement**:\n* Issue to select group of investors.\n* Less than 50 people.\n\n### 2. Procedure of Issue\n1. Board Resolution.\n2. DRHP to SEBI.\n3. RHP (Red Herring Prospectus).\n4. Applications and Allotment.\n5. Listing on Stock Exchange.\n\n### 3. SEBI Guidelines\n* Minimum promoter contribution: 20%.\n* Lock-in period: 3 years for promoters.\n* Disclosure requirements.',
            flashcards: [
              { id: 'f1', front: 'IPO stands for?', back: 'Initial Public Offer - First issue to public.' },
              { id: 'f2', front: 'Rights Issue is for?', back: 'Existing shareholders at preferential price.' },
              { id: 'f3', front: 'Bonus Issue means?', back: 'Free shares from reserves - No cash involved.' },
              { id: 'f4', front: 'DRHP stands for?', back: 'Draft Red Herring Prospectus.' }
            ],
            mcqs: [
              { id: 'q1', question: 'First issue of shares to public is called ______.', options: ['FPO', 'IPO', 'Rights', 'Bonus'], correctIndex: 1, explanation: 'Initial Public Offer.' },
              { id: 'q2', question: 'Bonus shares are issued from ______.', options: ['Cash', 'Reserves', 'Loans', 'Debentures'], correctIndex: 1, explanation: 'Capitalization of reserves.' },
              { id: 'q3', question: 'Rights issue is offered to ______ shareholders.', options: ['New', 'Existing', 'Foreign', 'Government'], correctIndex: 1, explanation: 'Priority to current holders.' }
            ],
            reels: [
               { id: 'r1', title: 'IPO', content: 'Initial Public Offer.\nFirst time to public.\nCompany gets listed.', color: getReelColor(1) },
               { id: 'r2', title: 'FPO', content: 'Further Public Offer.\nAlready listed company.', color: getReelColor(2) },
               { id: 'r3', title: 'Rights Issue', content: 'To existing shareholders.\nCan renounce rights.', color: getReelColor(3) },
               { id: 'r4', title: 'Bonus Issue', content: 'Free shares.\nFrom reserves.\nNo cash received.', color: getReelColor(4) },
               { id: 'r5', title: 'Private Placement', content: 'Issue to select few (<50 people).', color: getReelColor(5) },
               { id: 'r6', title: 'SEBI', content: 'Regulates share issues.\nProtects investors.', color: getReelColor(6) },
               { id: 'r7', title: 'Prospectus', content: 'Invitation to subscribe.\nContains all details.', color: getReelColor(7) }
            ]
          },
          { 
            id: 'sp4', 
            title: '4. Issue of Debentures', 
            description: 'Types, Procedure, Redemption.', 
            summary: '**Secured/Unsecured**.\n**Convertible/Non-Convertible**.\n**Redemption**: Repayment at maturity.', 
            detailedNotes: '### 1. Meaning of Debenture\nA debenture is a written acknowledgment of debt. Company issues debentures to raise borrowed capital.\n\n### 2. Types of Debentures\n**A. Based on Security**:\n* Secured (Mortgage) - Backed by assets.\n* Unsecured (Naked) - No asset backing.\n\n**B. Based on Convertibility**:\n* Convertible - Can be converted to shares.\n* Non-Convertible - Remain as debt.\n\n**C. Based on Redemption**:\n* Redeemable - Repaid after fixed period.\n* Irredeemable - Perpetual debentures.\n\n**D. Based on Registration**:\n* Registered - In name of holder.\n* Bearer - Transferable by delivery.\n\n### 3. Issue Procedure\n1. Board Resolution.\n2. Debenture Trust Deed.\n3. Filing with ROC.\n4. Issue and Allotment.\n\n### 4. Redemption Methods\n* Lump sum payment at maturity.\n* Installments.\n* Purchase from market.\n* Conversion into shares.',
            flashcards: [
              { id: 'f1', front: 'Secured Debentures are backed by?', back: 'Company assets as collateral.' },
              { id: 'f2', front: 'Convertible Debentures can become?', back: 'Equity shares after specified period.' },
              { id: 'f3', front: 'Debenture holders are?', back: 'Creditors of the company.' },
              { id: 'f4', front: 'Debenture Trust Deed is executed with?', back: 'A Trustee for debenture holders.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Secured debentures are also called ______.', options: ['Naked', 'Mortgage', 'Bearer', 'Registered'], correctIndex: 1, explanation: 'Backed by mortgage of assets.' },
              { id: 'q2', question: 'Convertible debentures become ______ after period.', options: ['Bonds', 'Loans', 'Shares', 'Deposits'], correctIndex: 2, explanation: 'Can be converted to equity.' },
              { id: 'q3', question: 'Irredeemable debentures are also called ______.', options: ['Perpetual', 'Bearer', 'Naked', 'Registered'], correctIndex: 0, explanation: 'No fixed repayment date.' }
            ],
            reels: [
               { id: 'r1', title: 'Debenture', content: 'Acknowledgment of debt.\nFixed interest.\nCreditor status.', color: getReelColor(8) },
               { id: 'r2', title: 'Secured', content: 'Backed by assets.\nMortgage Debentures.', color: getReelColor(9) },
               { id: 'r3', title: 'Unsecured', content: 'No asset backing.\nNaked Debentures.', color: getReelColor(0) },
               { id: 'r4', title: 'Convertible', content: 'Can become equity.\nAfter specified period.', color: getReelColor(1) },
               { id: 'r5', title: 'Redemption', content: 'Repayment of debentures.\nAt maturity.', color: getReelColor(2) },
               { id: 'r6', title: 'Trust Deed', content: 'Agreement with trustee.\nProtects debenture holders.', color: getReelColor(3) }
            ]
          },
          { 
            id: 'sp5', 
            title: '5. Deposits', 
            description: 'Public Deposits, Rules, Acceptance.', 
            summary: '**Public Deposits**: Short-term borrowing from public.\n**Period**: 6 months to 3 years.\n**Interest**: Higher than bank FD.', 
            detailedNotes: '### 1. Meaning of Deposits\nShort-term borrowing by company from public. An unsecured loan for working capital needs.\n\n### 2. Features\n* Period: Minimum 6 months, Maximum 3 years.\n* Interest rate: Higher than bank rates.\n* Unsecured: No collateral.\n* Regulated by Companies Act and RBI.\n\n### 3. Types of Deposits\n* **Public Deposits**: From general public.\n* **Shareholder Deposits**: From shareholders.\n* **Inter-Corporate Deposits**: From other companies.\n\n### 4. Rules (Companies Act 2013)\n* Maximum limit: 35% of paid-up capital + free reserves.\n* From members: Additional 10%.\n* Credit rating mandatory for public deposits.\n* Deposit Insurance (optional).\n\n### 5. Advantages\n* No voting rights dilution.\n* Lower cost than equity.\n* Flexible terms.\n\n### 6. Disadvantages\n* Fixed payment obligation.\n* Credit rating required.\n* RBI regulations.',
            flashcards: [
              { id: 'f1', front: 'Maximum period of public deposits?', back: '3 years (36 months).' },
              { id: 'f2', front: 'Minimum period of public deposits?', back: '6 months.' },
              { id: 'f3', front: 'Public deposits limit?', back: '35% of paid-up capital + free reserves.' },
              { id: 'f4', front: 'Public deposits are?', back: 'Unsecured short-term borrowings.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Maximum period for public deposits is ______ years.', options: ['1', '2', '3', '5'], correctIndex: 2, explanation: '36 months maximum.' },
              { id: 'q2', question: 'Public deposits are ______ in nature.', options: ['Secured', 'Unsecured', 'Guaranteed', 'Insured'], correctIndex: 1, explanation: 'No collateral required.' },
              { id: 'q3', question: 'Deposits limit is ______% of paid-up capital + reserves.', options: ['25', '35', '45', '50'], correctIndex: 1, explanation: 'As per Companies Act.' }
            ],
            reels: [
               { id: 'r1', title: 'Public Deposits', content: 'Short-term borrowing.\n6 months to 3 years.', color: getReelColor(4) },
               { id: 'r2', title: 'Interest', content: 'Higher than bank FD.\nAttracts investors.', color: getReelColor(5) },
               { id: 'r3', title: 'Unsecured', content: 'No collateral.\nRisk for depositors.', color: getReelColor(6) },
               { id: 'r4', title: 'Limit 35%', content: 'Of paid-up capital + free reserves.', color: getReelColor(7) },
               { id: 'r5', title: 'Credit Rating', content: 'Mandatory for public deposits.\nCRISIL, ICRA, CARE.', color: getReelColor(8) }
            ]
          },
          { 
            id: 'sp6', 
            title: '6. Dividend', 
            description: 'Types, Declaration, Payment.', 
            summary: '**Dividend**: Distribution of profits to shareholders.\n**Types**: Interim, Final, Stock Dividend.\n**From**: Profits only (Not capital).', 
            detailedNotes: '### 1. Meaning of Dividend\nDividend is the distribution of profits to shareholders. It is the return on investment for equity holders.\n\n### 2. Types of Dividend\n**A. Cash Dividend**: Paid in cash.\n**B. Stock Dividend**: Paid in shares (Bonus).\n**C. Interim Dividend**: Before AGM.\n**D. Final Dividend**: Declared at AGM.\n\n### 3. Sources of Dividend\n* Current year profits.\n* Accumulated profits (Reserves).\n* Money provided by Government (for govt companies).\n\n### 4. Declaration Process\n1. Board recommends dividend.\n2. Shareholders approve at AGM.\n3. Transfer to Unpaid Dividend Account.\n4. Payment within 30 days.\n\n### 5. Unpaid Dividend\n* If unclaimed for 7 years → Transferred to IEPF (Investor Education and Protection Fund).\n\n### 6. Dividend Tax\n* DDT abolished from April 2020.\n* Now taxable in hands of shareholders.',
            flashcards: [
              { id: 'f1', front: 'Dividend is paid from?', back: 'Profits only (Current or Accumulated).' },
              { id: 'f2', front: 'Interim Dividend is declared?', back: 'Before the Annual General Meeting.' },
              { id: 'f3', front: 'Final Dividend is declared at?', back: 'Annual General Meeting (AGM).' },
              { id: 'f4', front: 'Unclaimed dividend after 7 years goes to?', back: 'IEPF (Investor Education and Protection Fund).' }
            ],
            mcqs: [
              { id: 'q1', question: 'Dividend can only be paid from ______.', options: ['Capital', 'Profits', 'Loans', 'Deposits'], correctIndex: 1, explanation: 'Only from earned profits.' },
              { id: 'q2', question: 'Final dividend is declared at ______.', options: ['Board Meeting', 'AGM', 'EGM', 'Any time'], correctIndex: 1, explanation: 'Shareholders approve at AGM.' },
              { id: 'q3', question: 'Dividend must be paid within ______ days.', options: ['15', '30', '45', '60'], correctIndex: 1, explanation: 'From date of declaration.' }
            ],
            reels: [
               { id: 'r1', title: 'Dividend', content: 'Share of profits.\nReturn on investment.', color: getReelColor(9) },
               { id: 'r2', title: 'Interim', content: 'Before AGM.\nBoard declares.', color: getReelColor(0) },
               { id: 'r3', title: 'Final', content: 'At AGM.\nShareholders approve.', color: getReelColor(1) },
               { id: 'r4', title: 'Stock Dividend', content: 'Bonus shares.\nNo cash paid.', color: getReelColor(2) },
               { id: 'r5', title: 'IEPF', content: 'Unclaimed dividend after 7 years.\nInvestor Protection Fund.', color: getReelColor(3) },
               { id: 'r6', title: 'Within 30 Days', content: 'Dividend must be paid.\nFrom declaration.', color: getReelColor(4) }
            ]
          }
        ],
        previousPapers: []
      },
      {
        id: 'bk',
        name: 'Accounts (BK)',
        icon: 'Calculator',
        color: 'bg-rose-500',
        syllabus: '1. Accounts from Incomplete Records\n2. Single Entry System\n3. Accounts of Not-for-Profit Concerns\n4. Partnership Accounts\n5. Reconstitution of Partnership\n6. Dissolution of Partnership Firm\n7. Company Accounts',
        paperPattern: '### Book Keeping Paper Pattern (80 Marks)\n\n* **Q.1 Objective Questions (20 Marks)**: MCQs, Fill in blanks, Match.\n* **Q.2 Practical Problems (12 Marks)**: (Any 2 out of 3)\n* **Q.3 Practical Problems (12 Marks)**: (Any 2 out of 3)\n* **Q.4 Practical Problems (14 Marks)**: (Any 2 out of 3)\n* **Q.5 Practical Problems (14 Marks)**: (Any 2 out of 3)\n* **Q.6 Theory Questions (8 Marks)**: (Any 2 out of 3)',
        chapters: [
          { 
            id: 'bk1', 
            title: '1. Accounts from Incomplete Records', 
            description: 'Single Entry System, Statement of Affairs.', 
            summary: '**Single Entry**: Only personal accounts maintained.\n**Statement of Affairs**: Like Balance Sheet (Assets - Liabilities = Capital).\n**Profit = Closing Capital - Opening Capital + Drawings - Additional Capital.', 
            detailedNotes: '### 1. Meaning of Incomplete Records\nRecords which are not maintained according to double entry system. Also called Single Entry System.\n\n### 2. Reasons for Incomplete Records\n* Lack of accounting knowledge.\n* Small size of business.\n* To hide profits (Tax evasion).\n* Saves time and cost.\n\n### 3. Limitations\n* Accuracy cannot be verified.\n* No trial balance possible.\n* Financial position unclear.\n* Fraud may remain undetected.\n\n### 4. Statement of Affairs\nStatement showing Assets and Liabilities at a particular date.\n**Capital = Assets - Liabilities**\n\n### 5. Calculation of Profit\n**Profit = Closing Capital - Opening Capital + Drawings - Additional Capital**\n\nOR\n\n**Profit = Closing Net Worth - Opening Net Worth - Fresh Capital + Drawings**\n\n### 6. Conversion to Double Entry\n1. Prepare Statement of Affairs (Opening).\n2. Prepare Statement of Affairs (Closing).\n3. Prepare Trading and P&L Account.\n4. Prepare Balance Sheet.',
            flashcards: [
              { id: 'f1', front: 'Single Entry maintains which accounts?', back: 'Only Personal Accounts (Debtors & Creditors).' },
              { id: 'f2', front: 'Formula for Profit in Single Entry?', back: 'Closing Capital - Opening Capital + Drawings - Additional Capital.' },
              { id: 'f3', front: 'Statement of Affairs shows?', back: 'Assets and Liabilities at a particular date.' },
              { id: 'f4', front: 'Capital in Statement of Affairs?', back: 'Capital = Total Assets - Total Liabilities.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Single entry system maintains only ______ accounts.', options: ['Real', 'Personal', 'Nominal', 'All'], correctIndex: 1, explanation: 'Only debtors and creditors.' },
              { id: 'q2', question: 'Statement of Affairs is similar to ______.', options: ['Trial Balance', 'P&L Account', 'Balance Sheet', 'Cash Book'], correctIndex: 2, explanation: 'Shows assets and liabilities.' },
              { id: 'q3', question: 'In single entry, ______ cannot be prepared.', options: ['Cash Book', 'Trial Balance', 'Statement of Affairs', 'Debtors list'], correctIndex: 1, explanation: 'No double entry, no trial balance.' }
            ],
            reels: [
               { id: 'r1', title: 'Single Entry', content: 'Only Personal accounts.\nNo Real, No Nominal.', color: getReelColor(0) },
               { id: 'r2', title: 'Statement of Affairs', content: 'Assets - Liabilities = Capital.\nLike Balance Sheet.', color: getReelColor(1) },
               { id: 'r3', title: 'Profit Formula', content: 'Closing Cap - Opening Cap\n+ Drawings\n- Additional Capital', color: getReelColor(2) },
               { id: 'r4', title: 'Why Single Entry?', content: 'Small business.\nLack of knowledge.\nSaves time/cost.', color: getReelColor(3) },
               { id: 'r5', title: 'Limitation', content: 'No Trial Balance.\nFraud may go undetected.', color: getReelColor(4) },
               { id: 'r6', title: 'Conversion', content: 'Opening Statement.\nClosing Statement.\nTrading & P&L.\nBalance Sheet.', color: getReelColor(5) }
            ]
          },
          { 
            id: 'bk2', 
            title: '2. Accounts of Not-for-Profit Concerns', 
            description: 'Receipts & Payments, Income & Expenditure.', 
            summary: '**NPO**: Clubs, Schools, Hospitals (No profit motive).\n**Receipts & Payments A/c**: Cash basis, All receipts.\n**Income & Expenditure A/c**: Accrual basis, Revenue items only.', 
            detailedNotes: '### 1. Meaning of NPO\nOrganizations formed for providing service to members/public, not for earning profit.\n**Examples**: Clubs, Schools, Hospitals, Libraries, NGOs.\n\n### 2. Receipts and Payments Account\n**Features**:\n* Summary of Cash Book.\n* All cash receipts and payments.\n* Capital and Revenue items both.\n* Opening balance = Cash/Bank (Dr).\n* Closing balance = Cash/Bank at end.\n\n### 3. Income and Expenditure Account\n**Features**:\n* Like Profit & Loss Account.\n* Only Revenue items.\n* Accrual basis (outstanding included).\n* Difference = Surplus (Cr) or Deficit (Dr).\n\n### 4. Balance Sheet\nShows Assets, Liabilities, and Capital Fund.\n**Capital Fund = Assets - Liabilities**\n\n### 5. Important Adjustments\n* Subscriptions: Add outstanding, deduct advance.\n* Depreciation on fixed assets.\n* Stock of consumables (stationery, medicines).\n* Life membership fees: Capital item → Balance Sheet.',
            flashcards: [
              { id: 'f1', front: 'Examples of NPO?', back: 'Clubs, Schools, Hospitals, Libraries, NGOs.' },
              { id: 'f2', front: 'Receipts & Payments A/c is based on?', back: 'Cash basis (Actual receipts and payments).' },
              { id: 'f3', front: 'Income & Expenditure A/c is based on?', back: 'Accrual basis (Outstanding included).' },
              { id: 'f4', front: 'Surplus in NPO is like?', back: 'Profit in business (Credit balance in I&E A/c).' },
              { id: 'f5', front: 'Life Membership Fee is?', back: 'Capital Receipt → Shown in Balance Sheet.' }
            ],
            mcqs: [
              { id: 'q1', question: 'NPO prepares ______ instead of P&L Account.', options: ['Trading A/c', 'Income & Expenditure A/c', 'Cash A/c', 'Capital A/c'], correctIndex: 1, explanation: 'Shows surplus or deficit.' },
              { id: 'q2', question: 'Receipts & Payments Account includes ______ items.', options: ['Only Revenue', 'Only Capital', 'Both Revenue & Capital', 'Neither'], correctIndex: 2, explanation: 'All cash items.' },
              { id: 'q3', question: 'Life membership fee is a ______ receipt.', options: ['Revenue', 'Capital', 'Nominal', 'Fictitious'], correctIndex: 1, explanation: 'Not recurring, capital in nature.' }
            ],
            reels: [
               { id: 'r1', title: 'NPO', content: 'Not for Profit.\nClubs, Schools, NGOs.\nService motive.', color: getReelColor(6) },
               { id: 'r2', title: 'R&P Account', content: 'Cash basis.\nAll receipts & payments.\nCapital + Revenue items.', color: getReelColor(7) },
               { id: 'r3', title: 'I&E Account', content: 'Accrual basis.\nRevenue items only.\nLike P&L Account.', color: getReelColor(8) },
               { id: 'r4', title: 'Surplus', content: 'When Income > Expenditure.\nLike Profit.', color: getReelColor(9) },
               { id: 'r5', title: 'Deficit', content: 'When Expenditure > Income.\nLike Loss.', color: getReelColor(0) },
               { id: 'r6', title: 'Capital Fund', content: 'Assets - Liabilities.\nLike Capital in business.', color: getReelColor(1) },
               { id: 'r7', title: 'Subscription', content: 'Main income of NPO.\nAdd outstanding, deduct advance.', color: getReelColor(2) }
            ]
          },
          { 
            id: 'bk3', 
            title: '3. Partnership Accounts - Fundamentals', 
            description: 'Partnership Deed, Capital, P&L Appropriation.', 
            summary: '**Partnership**: 2+ persons carrying business.\n**Partnership Deed**: Written agreement.\n**P&L Appropriation**: Distribution of profits (Interest, Salary, Share).', 
            detailedNotes: '### 1. Meaning of Partnership\nRelation between persons who agree to share profits of business carried on by all or any of them acting for all. (Section 4, Partnership Act 1932)\n\n### 2. Partnership Deed\nWritten agreement containing:\n* Name of firm and partners.\n* Capital contribution.\n* Profit sharing ratio.\n* Interest on capital, drawings.\n* Salary/Commission to partners.\n\n### 3. In Absence of Deed\n* Profit sharing: Equal.\n* Interest on capital: Nil.\n* Interest on drawings: Nil.\n* Salary/Commission: Nil.\n* Interest on loan by partner: 6% p.a.\n\n### 4. Profit & Loss Appropriation Account\nShows how profits are distributed:\n1. Interest on Capital (Dr).\n2. Salary/Commission to partners (Dr).\n3. Interest on Drawings (Cr).\n4. Balance transferred to Capital/Current A/c.\n\n### 5. Capital Accounts\n**Fixed Capital Method**:\n* Capital A/c: Only capital transactions.\n* Current A/c: All other items.\n\n**Fluctuating Capital Method**:\n* All items in Capital A/c.\n* Capital keeps changing.',
            flashcards: [
              { id: 'f1', front: 'Minimum partners in a firm?', back: '2 (Maximum 50 for other businesses, 10 for banking).' },
              { id: 'f2', front: 'Interest on loan by partner (no deed)?', back: '6% per annum.' },
              { id: 'f3', front: 'Profit sharing ratio (no deed)?', back: 'Equal ratio.' },
              { id: 'f4', front: 'P&L Appropriation A/c shows?', back: 'Distribution of profits among partners.' }
            ],
            mcqs: [
              { id: 'q1', question: 'In absence of deed, profits are shared ______.', options: ['In capital ratio', 'Equally', 'Randomly', 'As decided by one partner'], correctIndex: 1, explanation: 'Equal sharing when no agreement.' },
              { id: 'q2', question: 'Interest on loan by partner without deed is ______%.', options: ['5', '6', '8', '10'], correctIndex: 1, explanation: 'As per Partnership Act.' },
              { id: 'q3', question: 'Fixed Capital Method has ______ accounts for partner.', options: ['One', 'Two', 'Three', 'Four'], correctIndex: 1, explanation: 'Capital A/c and Current A/c.' }
            ],
            reels: [
               { id: 'r1', title: 'Partnership', content: 'Min 2 partners.\nMax 50 (10 for banking).', color: getReelColor(3) },
               { id: 'r2', title: 'Partnership Deed', content: 'Written agreement.\nContains all terms.', color: getReelColor(4) },
               { id: 'r3', title: 'No Deed Rules', content: 'Profit = Equal.\nInterest on Capital = Nil.\nSalary = Nil.', color: getReelColor(5) },
               { id: 'r4', title: 'P&L Appropriation', content: 'Distribution of profits.\nInterest, Salary, Share.', color: getReelColor(6) },
               { id: 'r5', title: 'Fixed Capital', content: '2 Accounts.\nCapital A/c + Current A/c.', color: getReelColor(7) },
               { id: 'r6', title: 'Fluctuating Capital', content: '1 Account only.\nCapital keeps changing.', color: getReelColor(8) },
               { id: 'r7', title: '6% Interest', content: 'On loan by partner.\nWhen no deed exists.', color: getReelColor(9) }
            ]
          },
          { 
            id: 'bk4', 
            title: '4. Reconstitution of Partnership', 
            description: 'Admission, Retirement, Death of Partner.', 
            summary: '**Admission**: New partner joins.\n**Retirement**: Partner leaves.\n**Goodwill**: Compensation for reputation.\n**Revaluation**: Assets & Liabilities adjusted.', 
            detailedNotes: '### 1. Admission of Partner\n**Steps**:\n1. Calculate new profit sharing ratio.\n2. Calculate sacrificing ratio.\n3. Treatment of Goodwill.\n4. Revaluation of Assets & Liabilities.\n5. Distribution of accumulated profits.\n6. Adjust Capital (if required).\n\n**Sacrificing Ratio = Old Ratio - New Ratio**\n\n### 2. Retirement of Partner\n**Steps**:\n1. Calculate new profit sharing ratio.\n2. Calculate gaining ratio.\n3. Treatment of Goodwill.\n4. Revaluation of Assets & Liabilities.\n5. Settlement of retiring partner.\n\n**Gaining Ratio = New Ratio - Old Ratio**\n\n### 3. Death of Partner\nSimilar to retirement. Additional:\n* Share of profit till date of death.\n* Joint Life Policy (if any).\n\n### 4. Goodwill\n**Methods of Valuation**:\n* Average Profit Method.\n* Super Profit Method.\n* Capitalization Method.\n\n### 5. Revaluation Account\n* Increase in Asset = Credit.\n* Decrease in Asset = Debit.\n* Increase in Liability = Debit.\n* Decrease in Liability = Credit.\n* Profit/Loss distributed in Old Ratio.',
            flashcards: [
              { id: 'f1', front: 'Sacrificing Ratio?', back: 'Old Ratio - New Ratio (For Admission).' },
              { id: 'f2', front: 'Gaining Ratio?', back: 'New Ratio - Old Ratio (For Retirement).' },
              { id: 'f3', front: 'Revaluation profit distributed in?', back: 'Old Profit Sharing Ratio.' },
              { id: 'f4', front: 'Goodwill is?', back: 'Value of business reputation.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Sacrificing ratio is calculated at time of ______.', options: ['Retirement', 'Admission', 'Dissolution', 'All'], correctIndex: 1, explanation: 'Old partners sacrifice for new partner.' },
              { id: 'q2', question: 'Revaluation profit is shared in ______ ratio.', options: ['New', 'Old', 'Equal', 'Capital'], correctIndex: 1, explanation: 'Belongs to old partners.' },
              { id: 'q3', question: 'Gaining ratio is New Ratio minus ______ Ratio.', options: ['Old', 'Sacrificing', 'Capital', 'Equal'], correctIndex: 0, explanation: 'What partners gain after retirement.' }
            ],
            reels: [
               { id: 'r1', title: 'Admission', content: 'New partner joins.\nPays for Goodwill.\nGets share of profits.', color: getReelColor(0) },
               { id: 'r2', title: 'Retirement', content: 'Partner leaves.\nGets settlement.\nReceives Goodwill share.', color: getReelColor(1) },
               { id: 'r3', title: 'Sacrificing Ratio', content: 'Old Ratio - New Ratio.\nFor Admission.', color: getReelColor(2) },
               { id: 'r4', title: 'Gaining Ratio', content: 'New Ratio - Old Ratio.\nFor Retirement.', color: getReelColor(3) },
               { id: 'r5', title: 'Goodwill', content: 'Business reputation.\nValued by profits method.', color: getReelColor(4) },
               { id: 'r6', title: 'Revaluation A/c', content: 'Adjust Assets & Liabilities.\nProfit/Loss in Old Ratio.', color: getReelColor(5) }
            ]
          },
          { 
            id: 'bk5', 
            title: '5. Dissolution of Partnership Firm', 
            description: 'Dissolution vs Reconstitution, Realisation A/c.', 
            summary: '**Dissolution**: Firm closes down.\n**Realisation A/c**: Shows profit/loss on dissolution.\n**Order of Payment**: Outside creditors first.', 
            detailedNotes: '### 1. Meaning of Dissolution\nComplete closure of partnership business. All assets sold, liabilities paid, surplus distributed.\n\n### 2. Dissolution vs Reconstitution\n| Dissolution | Reconstitution |\n|-------------|----------------|\n| Business ends | Business continues |\n| All assets sold | Only adjustments |\n| Books closed | Books continue |\n\n### 3. Realisation Account\n* Transfer all Assets (except Cash) → Debit.\n* Transfer all Liabilities (except Partner Loans) → Credit.\n* Realisation expenses → Debit.\n* Amount realized from assets → Credit.\n* Profit/Loss transferred to Partner Capital A/c.\n\n### 4. Order of Payment (Garner vs Murray Rule)\n1. Realisation expenses.\n2. Outside creditors.\n3. Partners\' loans.\n4. Partners\' capital (in capital ratio).\n\n### 5. Treatment of Unrecorded Items\n* Unrecorded Asset → Credit Realisation A/c when sold.\n* Unrecorded Liability → Debit Realisation A/c when paid.',
            flashcards: [
              { id: 'f1', front: 'Dissolution means?', back: 'Complete closure of partnership firm.' },
              { id: 'f2', front: 'Realisation Account shows?', back: 'Profit or Loss on dissolution.' },
              { id: 'f3', front: 'First payment on dissolution?', back: 'Outside creditors (after realisation expenses).' },
              { id: 'f4', front: 'Garner vs Murray Rule applies when?', back: 'Partner is insolvent and has debit capital balance.' }
            ],
            mcqs: [
              { id: 'q1', question: 'On dissolution, assets are transferred to ______ A/c.', options: ['Capital', 'Realisation', 'Cash', 'P&L'], correctIndex: 1, explanation: 'All assets go to Realisation A/c.' },
              { id: 'q2', question: 'First priority in payment is to ______.', options: ['Partners', 'Outside Creditors', 'Banks', 'Government'], correctIndex: 1, explanation: 'External parties first.' },
              { id: 'q3', question: 'Realisation expenses are ______ to Realisation A/c.', options: ['Credited', 'Debited', 'Not recorded', 'Ignored'], correctIndex: 1, explanation: 'Expense = Debit.' }
            ],
            reels: [
               { id: 'r1', title: 'Dissolution', content: 'Firm closes down.\nAll assets sold.\nLiabilities paid.', color: getReelColor(6) },
               { id: 'r2', title: 'Realisation A/c', content: 'Assets → Debit.\nLiabilities → Credit.\nProfit/Loss to Capital.', color: getReelColor(7) },
               { id: 'r3', title: 'Payment Order', content: '1. Outside Creditors.\n2. Partner Loans.\n3. Partner Capital.', color: getReelColor(8) },
               { id: 'r4', title: 'vs Reconstitution', content: 'Dissolution = End.\nReconstitution = Continue.', color: getReelColor(9) },
               { id: 'r5', title: 'Garner vs Murray', content: 'When partner is insolvent.\nLoss borne by solvent partners.', color: getReelColor(0) }
            ]
          }
        ],
        previousPapers: []
      }
    ]
  },
  [Stream.ARTS]: { 
    id: Stream.ARTS, 
    subjects: [
      ENGLISH_SUBJECT,
      ECONOMICS_SUBJECT,
      {
        id: 'his', 
        name: 'History', 
        icon: 'BookOpen', 
        color: 'bg-orange-500', 
        syllabus: '1. Renaissance\n2. Reformation\n3. Industrial Revolution\n4. American Revolution\n5. French Revolution\n6. Imperialism and Colonialism\n7. World War I\n8. World War II\n9. Cold War\n10. Emergence of Third World',
        paperPattern: '### History Paper Pattern (80 Marks)\n\n* **Q.1 Multiple Choice (20 Marks)**\n* **Q.2 Answer in Brief (12 Marks)**\n* **Q.3 Short Notes (12 Marks)**\n* **Q.4 Long Answers (16 Marks)**\n* **Q.5 Map Work (8 Marks)**\n* **Q.6 Project (Internal - 20 Marks)**',
        previousPapers: [], 
        chapters: [
          {
            id: 'his1',
            title: '1. Renaissance',
            description: 'Rebirth of learning in Europe (14th-17th century).',
            summary: '**Renaissance** = "Rebirth"\n**Period**: 14th-17th century\n**Origin**: Italy (Florence)\n**Key Features**: Humanism, Art, Science, Literature\n**Impact**: End of Dark Ages, Beginning of Modern Era',
            detailedNotes: '### 1. Meaning of Renaissance\n* Renaissance means "Rebirth" or "Revival"\n* Revival of Greek and Roman learning\n* Transition from Medieval to Modern Era\n* Started in Italy, spread to Europe\n\n### 2. Causes of Renaissance\n1. **Fall of Constantinople (1453)**: Greek scholars fled to Italy with manuscripts\n2. **Crusades**: Exposed Europeans to Eastern knowledge\n3. **Printing Press**: Gutenberg\'s invention spread ideas\n4. **Geographical Discoveries**: New trade routes, wealth\n5. **Rise of Wealthy Merchants**: Patronized art and learning\n6. **Decline of Feudalism**: New social class emerged\n\n### 3. Why Italy?\n* Central location for trade\n* Wealthy city-states (Florence, Venice, Rome)\n* Roman heritage and ruins\n* Medici family patronage\n\n### 4. Main Features\n**A. Humanism**\n* Focus on human beings, not just religion\n* "Man is the measure of all things"\n* Study of classical literature\n\n**B. Art & Architecture**\n* Perspective in painting\n* Realistic human figures\n* Great artists: Leonardo, Michelangelo, Raphael\n\n**C. Science**\n* Observation and experiment\n* Copernicus: Heliocentric theory\n* Galileo: Telescope, laws of motion\n\n### 5. Key Personalities\n* **Leonardo da Vinci**: Mona Lisa, The Last Supper (Painter, Scientist, Inventor)\n* **Michelangelo**: Sistine Chapel, David statue\n* **Raphael**: School of Athens\n* **Dante**: Divine Comedy\n* **Petrarch**: Father of Humanism\n* **Machiavelli**: The Prince (Political philosophy)\n* **Erasmus**: Praise of Folly\n\n### 6. Impact of Renaissance\n* End of blind faith\n* Beginning of scientific inquiry\n* Growth of vernacular literature\n* Rise of nation-states\n* Foundation for Reformation',
            flashcards: [
              { id: 'f1', front: 'What does Renaissance mean?', back: 'Rebirth - Revival of Greek and Roman learning.' },
              { id: 'f2', front: 'Where did Renaissance begin?', back: 'Italy (Florence).' },
              { id: 'f3', front: 'When was the Renaissance period?', back: '14th to 17th century.' },
              { id: 'f4', front: 'Who invented the Printing Press?', back: 'Johannes Gutenberg (1440).' },
              { id: 'f5', front: 'Who is called the Father of Humanism?', back: 'Petrarch.' },
              { id: 'f6', front: 'Who painted the Mona Lisa?', back: 'Leonardo da Vinci.' },
              { id: 'f7', front: 'Who painted the Sistine Chapel ceiling?', back: 'Michelangelo.' },
              { id: 'f8', front: 'What did Copernicus propose?', back: 'Heliocentric theory - Sun is the center of universe.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Renaissance started in which country?', options: ['France', 'England', 'Italy', 'Germany'], correctIndex: 2, explanation: 'Italy, specifically Florence, was the birthplace of Renaissance.' },
              { id: 'q2', question: '"Mona Lisa" was painted by:', options: ['Michelangelo', 'Raphael', 'Leonardo da Vinci', 'Botticelli'], correctIndex: 2, explanation: 'Leonardo da Vinci painted the famous Mona Lisa.' },
              { id: 'q3', question: 'The Printing Press was invented by:', options: ['Caxton', 'Gutenberg', 'Erasmus', 'Luther'], correctIndex: 1, explanation: 'Johannes Gutenberg invented the movable type printing press around 1440.' },
              { id: 'q4', question: 'Which event in 1453 helped spread Renaissance?', options: ['Crusades end', 'Fall of Constantinople', 'Discovery of America', 'Reformation'], correctIndex: 1, explanation: 'Greek scholars fled Constantinople bringing manuscripts to Italy.' },
              { id: 'q5', question: 'Who wrote "The Prince"?', options: ['Dante', 'Petrarch', 'Machiavelli', 'Erasmus'], correctIndex: 2, explanation: 'Machiavelli wrote The Prince, a book on political philosophy.' }
            ],
            reels: [
              { id: 'r1', title: 'Renaissance', content: '"Rebirth" of learning.\n14th-17th century.\nStarted in Italy.', color: getReelColor(0) },
              { id: 'r2', title: 'Why Italy?', content: 'Trade center.\nWealthy merchants.\nRoman heritage.', color: getReelColor(1) },
              { id: 'r3', title: 'Humanism', content: 'Focus on HUMANS.\nNot just religion.\n"Man is the measure of all things."', color: getReelColor(2) },
              { id: 'r4', title: 'Printing Press', content: 'Gutenberg - 1440.\nBooks became cheap.\nIdeas spread fast!', color: getReelColor(3) },
              { id: 'r5', title: 'Leonardo', content: 'Painter + Scientist.\nMona Lisa.\nThe Last Supper.', color: getReelColor(4) },
              { id: 'r6', title: 'Michelangelo', content: 'Sistine Chapel ceiling.\nDavid statue.\nMaster sculptor!', color: getReelColor(5) },
              { id: 'r7', title: 'Constantinople', content: 'Fell in 1453.\nScholars fled to Italy.\nBrought Greek knowledge.', color: getReelColor(6) },
              { id: 'r8', title: 'Impact', content: 'End of blind faith.\nStart of science.\nModern Era begins!', color: getReelColor(7) }
            ]
          },
          {
            id: 'his2',
            title: '2. Reformation',
            description: 'Religious movement against Catholic Church (16th century).',
            summary: '**Reformation**: Religious reform movement\n**Period**: 16th century\n**Leader**: Martin Luther (1517)\n**Cause**: Corruption in Church, Sale of Indulgences\n**Result**: Rise of Protestantism',
            detailedNotes: '### 1. Meaning of Reformation\n* Religious movement to reform the Catholic Church\n* Broke the unity of Western Christianity\n* Led to creation of Protestant churches\n* Started by Martin Luther in 1517\n\n### 2. Causes of Reformation\n**A. Religious Causes**\n* Sale of Indulgences (pardons for sins)\n* Corruption in Church\n* Simony (buying/selling religious positions)\n* Nepotism (favoring relatives)\n* Immorality of clergy\n\n**B. Political Causes**\n* Kings wanted independence from Pope\n* Church interference in state matters\n* Heavy taxation by Church\n\n**C. Economic Causes**\n* Church\'s vast wealth\n* Peter\'s Pence (tax to Pope)\n* Confiscation of property\n\n**D. Intellectual Causes**\n* Renaissance promoted questioning\n* Printing Press spread new ideas\n* Translation of Bible into local languages\n\n### 3. Martin Luther (Germany)\n* Augustinian monk and professor\n* **95 Theses (1517)**: Criticism of indulgences\n* Nailed to church door in Wittenberg\n* Excommunicated by Pope\n* Protected by German princes\n* Founded Lutheran Church\n* Beliefs: "Faith alone, Scripture alone, Grace alone"\n\n### 4. Other Reformers\n* **John Calvin (Switzerland)**: Calvinism, Predestination\n* **Zwingli (Switzerland)**: Reformed Church\n* **Henry VIII (England)**: Anglican Church (Act of Supremacy 1534)\n* **John Knox (Scotland)**: Presbyterian Church\n\n### 5. Counter-Reformation\n* Catholic Church\'s response\n* Council of Trent (1545-1563)\n* Society of Jesus (Jesuits) by Ignatius Loyola\n* Inquisition strengthened\n\n### 6. Impact of Reformation\n* Division of Christianity (Catholic vs Protestant)\n* Rise of nation-states\n* Growth of vernacular languages\n* Religious wars in Europe\n* Education for all promoted',
            flashcards: [
              { id: 'f1', front: 'Who started the Reformation?', back: 'Martin Luther in 1517.' },
              { id: 'f2', front: 'What are the 95 Theses?', back: 'Martin Luther\'s criticism of Church practices, especially sale of indulgences.' },
              { id: 'f3', front: 'What are Indulgences?', back: 'Pardons for sins sold by the Church for money.' },
              { id: 'f4', front: 'Who founded the Anglican Church?', back: 'Henry VIII of England (Act of Supremacy 1534).' },
              { id: 'f5', front: 'What is Counter-Reformation?', back: 'Catholic Church\'s response to reform itself and counter Protestantism.' },
              { id: 'f6', front: 'Who founded the Jesuits?', back: 'Ignatius Loyola.' },
              { id: 'f7', front: 'What did Calvin believe in?', back: 'Predestination - God has already decided who will be saved.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Martin Luther nailed 95 Theses in which year?', options: ['1415', '1517', '1534', '1545'], correctIndex: 1, explanation: '1517 is considered the start of Reformation.' },
              { id: 'q2', question: 'Sale of ______ was criticized by Luther.', options: ['Land', 'Books', 'Indulgences', 'Weapons'], correctIndex: 2, explanation: 'Indulgences were pardons for sins sold for money.' },
              { id: 'q3', question: 'Anglican Church was established by:', options: ['Luther', 'Calvin', 'Henry VIII', 'Zwingli'], correctIndex: 2, explanation: 'Henry VIII broke from Rome and established the Church of England.' },
              { id: 'q4', question: 'Council of Trent was part of:', options: ['Reformation', 'Counter-Reformation', 'Renaissance', 'Revolution'], correctIndex: 1, explanation: 'It was Catholic Church\'s response to Reformation.' },
              { id: 'q5', question: 'Society of Jesus (Jesuits) was founded by:', options: ['Calvin', 'Luther', 'Ignatius Loyola', 'Henry VIII'], correctIndex: 2, explanation: 'Ignatius Loyola founded the Jesuits in 1540.' }
            ],
            reels: [
              { id: 'r1', title: 'Reformation', content: 'Religious reform.\n16th century.\nAgainst Catholic Church.', color: getReelColor(0) },
              { id: 'r2', title: 'Martin Luther', content: '95 Theses - 1517.\nCriticized indulgences.\nFounder of Lutheranism.', color: getReelColor(1) },
              { id: 'r3', title: 'Indulgences', content: 'Pardons for sins.\nSold for money.\n"Pay and your sins are forgiven!"', color: getReelColor(2) },
              { id: 'r4', title: 'Luther\'s Beliefs', content: 'Faith ALONE.\nScripture ALONE.\nGrace ALONE.', color: getReelColor(3) },
              { id: 'r5', title: 'Henry VIII', content: 'King of England.\nWanted divorce.\nCreated Anglican Church!', color: getReelColor(4) },
              { id: 'r6', title: 'Calvin', content: 'Swiss reformer.\nPredestination.\nGod already decided!', color: getReelColor(5) },
              { id: 'r7', title: 'Counter-Reform', content: 'Catholic response.\nCouncil of Trent.\nJesuits formed.', color: getReelColor(6) },
              { id: 'r8', title: 'Impact', content: 'Christianity divided.\nProtestants vs Catholics.\nReligious wars.', color: getReelColor(7) }
            ]
          },
          {
            id: 'his3',
            title: '3. Industrial Revolution',
            description: 'Transformation from agrarian to industrial economy (18th-19th century).',
            summary: '**Industrial Revolution**: Shift from hand production to machines\n**Period**: 1760-1840\n**Origin**: England\n**Key Inventions**: Steam Engine, Spinning Jenny, Power Loom\n**Impact**: Urbanization, Factory System, Social Changes',
            detailedNotes: '### 1. Meaning\n* Transition from hand production to machine manufacturing\n* Agricultural society to industrial society\n* Started in England around 1760\n* "Revolution" because changes were rapid and dramatic\n\n### 2. Why England First?\n1. **Geographical Factors**\n   - Rich coal and iron deposits\n   - Many rivers for water power and transport\n   - Island nation - safe from wars\n   - Good natural harbors\n\n2. **Economic Factors**\n   - Colonial wealth\n   - Strong banking system\n   - Growing trade\n   - Accumulated capital\n\n3. **Political Factors**\n   - Stable government\n   - No internal wars\n   - Patent laws protected inventors\n\n4. **Social Factors**\n   - Scientific temperament\n   - Skilled workers\n   - Agricultural Revolution freed labor\n\n### 3. Key Inventions\n**Textile Industry**\n* Flying Shuttle (John Kay, 1733)\n* Spinning Jenny (Hargreaves, 1764)\n* Water Frame (Arkwright, 1769)\n* Spinning Mule (Crompton, 1779)\n* Power Loom (Cartwright, 1785)\n\n**Steam Power**\n* Steam Engine (James Watt, 1769)\n* Revolutionized factories and transport\n\n**Iron & Steel**\n* Coke smelting (Darby)\n* Bessemer process (1856)\n\n**Transport**\n* Railways (Stephenson\'s Rocket, 1829)\n* Steamships\n\n### 4. Impact\n**A. Economic**\n* Factory system replaced cottage industry\n* Mass production, lower prices\n* Rise of capitalism\n\n**B. Social**\n* Urbanization (cities grew)\n* New social classes (bourgeoisie, proletariat)\n* Child labor, poor working conditions\n* Trade unions formed\n\n**C. Political**\n* Rise of socialism and Marxism\n* Labor laws enacted\n* Reform movements',
            flashcards: [
              { id: 'f1', front: 'Where did Industrial Revolution begin?', back: 'England (around 1760).' },
              { id: 'f2', front: 'Who invented the Steam Engine?', back: 'James Watt (improved version, 1769).' },
              { id: 'f3', front: 'Who invented the Spinning Jenny?', back: 'James Hargreaves (1764).' },
              { id: 'f4', front: 'Who invented the Power Loom?', back: 'Edmund Cartwright (1785).' },
              { id: 'f5', front: 'Which industry was first to industrialize?', back: 'Textile (Cotton) Industry.' },
              { id: 'f6', front: 'What is Factory System?', back: 'Production in large buildings with machines, replacing cottage industry.' },
              { id: 'f7', front: 'Who built the first railway locomotive?', back: 'George Stephenson (Rocket, 1829).' }
            ],
            mcqs: [
              { id: 'q1', question: 'Industrial Revolution began in:', options: ['France', 'Germany', 'England', 'USA'], correctIndex: 2, explanation: 'England was first due to coal, iron, and capital.' },
              { id: 'q2', question: 'Steam Engine was improved by:', options: ['Arkwright', 'Watt', 'Hargreaves', 'Cartwright'], correctIndex: 1, explanation: 'James Watt made steam engine efficient.' },
              { id: 'q3', question: 'First industry to be mechanized:', options: ['Iron', 'Textile', 'Coal', 'Steel'], correctIndex: 1, explanation: 'Cotton textile industry was first.' },
              { id: 'q4', question: '"Rocket" was invented by:', options: ['Watt', 'Stephenson', 'Fulton', 'Morse'], correctIndex: 1, explanation: 'George Stephenson built the famous Rocket locomotive.' },
              { id: 'q5', question: 'Spinning Jenny was invented by:', options: ['Arkwright', 'Crompton', 'Hargreaves', 'Cartwright'], correctIndex: 2, explanation: 'James Hargreaves invented Spinning Jenny in 1764.' }
            ],
            reels: [
              { id: 'r1', title: 'Industrial Rev', content: 'Hand → Machine.\nAgriculture → Industry.\nStarted in ENGLAND.', color: getReelColor(0) },
              { id: 'r2', title: 'Why England?', content: 'Coal + Iron.\nCapital + Colonies.\nStable government.', color: getReelColor(1) },
              { id: 'r3', title: 'Steam Engine', content: 'James Watt - 1769.\nPowered factories.\nChanged everything!', color: getReelColor(2) },
              { id: 'r4', title: 'Textile First', content: 'Cotton industry.\nSpinning Jenny.\nPower Loom.', color: getReelColor(3) },
              { id: 'r5', title: 'Railways', content: 'Stephenson\'s Rocket.\n1829.\nTransport revolution.', color: getReelColor(4) },
              { id: 'r6', title: 'Factory System', content: 'Cottage → Factory.\nMass production.\nDivision of labor.', color: getReelColor(5) },
              { id: 'r7', title: 'Social Impact', content: 'Urbanization.\nChild labor.\nTrade unions.', color: getReelColor(6) },
              { id: 'r8', title: 'New Classes', content: 'Bourgeoisie = Factory owners.\nProletariat = Workers.', color: getReelColor(7) }
            ]
          },
          {
            id: 'his4',
            title: '4. French Revolution',
            description: 'Overthrow of monarchy in France (1789-1799).',
            summary: '**French Revolution**: Overthrow of absolute monarchy\n**Period**: 1789-1799\n**Motto**: Liberty, Equality, Fraternity\n**Key Event**: Storming of Bastille (July 14, 1789)\n**Result**: End of feudalism, Rise of Napoleon',
            detailedNotes: '### 1. Background\n* France under absolute monarchy of Louis XVI\n* Queen Marie Antoinette\'s extravagance\n* Severe economic crisis\n* Society divided into Three Estates\n\n### 2. The Three Estates\n**First Estate**: Clergy (Church)\n* 1% of population\n* Owned 10% of land\n* No taxes\n\n**Second Estate**: Nobility\n* 2% of population\n* Owned 25% of land\n* No taxes\n\n**Third Estate**: Everyone else\n* 97% of population\n* Paid all taxes\n* Included bourgeoisie, peasants, workers\n\n### 3. Causes\n**A. Social Inequality**\n* Privileges of First and Second Estate\n* Heavy taxes on Third Estate\n* Feudal dues and tithes\n\n**B. Economic Crisis**\n* Empty treasury\n* Cost of American Revolution\n* Bad harvests, bread shortage\n* Rising prices\n\n**C. Intellectual Causes**\n* Enlightenment philosophers\n* Rousseau: Social Contract\n* Voltaire: Freedom of speech\n* Montesquieu: Separation of powers\n\n### 4. Key Events\n1. **Estates-General** (May 1789): Meeting after 175 years\n2. **National Assembly** (June 1789): Third Estate\'s own assembly\n3. **Tennis Court Oath** (June 20, 1789): Vow to draft constitution\n4. **Storming of Bastille** (July 14, 1789): Symbol of revolution\n5. **Declaration of Rights** (August 1789): Rights of Man\n6. **Reign of Terror** (1793-94): Robespierre\'s rule, guillotine\n7. **Rise of Napoleon** (1799): Military takeover\n\n### 5. Impact\n* End of absolute monarchy\n* Abolition of feudalism\n* Declaration of Rights of Man\n* Rise of nationalism\n* Spread of revolutionary ideas in Europe',
            flashcards: [
              { id: 'f1', front: 'When did French Revolution begin?', back: '1789 (Storming of Bastille: July 14, 1789).' },
              { id: 'f2', front: 'What was the motto of French Revolution?', back: 'Liberty, Equality, Fraternity.' },
              { id: 'f3', front: 'Who was the King during French Revolution?', back: 'Louis XVI.' },
              { id: 'f4', front: 'What was the Third Estate?', back: 'Common people - 97% of population who paid all taxes.' },
              { id: 'f5', front: 'What was the Tennis Court Oath?', back: 'Third Estate\'s vow to not disperse until a constitution was written.' },
              { id: 'f6', front: 'What was the Reign of Terror?', back: 'Period of mass executions under Robespierre (1793-94).' },
              { id: 'f7', front: 'Who wrote "The Social Contract"?', back: 'Jean-Jacques Rousseau.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Storming of Bastille occurred on:', options: ['July 4, 1776', 'July 14, 1789', 'August 26, 1789', 'January 21, 1793'], correctIndex: 1, explanation: 'July 14, 1789 is celebrated as Bastille Day in France.' },
              { id: 'q2', question: 'Third Estate comprised ______ of population.', options: ['1%', '2%', '50%', '97%'], correctIndex: 3, explanation: 'Everyone except clergy and nobility.' },
              { id: 'q3', question: 'Reign of Terror was led by:', options: ['Napoleon', 'Louis XVI', 'Robespierre', 'Voltaire'], correctIndex: 2, explanation: 'Robespierre led the Committee of Public Safety.' },
              { id: 'q4', question: '"The Social Contract" was written by:', options: ['Voltaire', 'Montesquieu', 'Rousseau', 'Diderot'], correctIndex: 2, explanation: 'Rousseau\'s famous work on political philosophy.' },
              { id: 'q5', question: 'French Revolution ended with the rise of:', options: ['Louis XVII', 'Robespierre', 'Napoleon', 'Monarchy'], correctIndex: 2, explanation: 'Napoleon Bonaparte seized power in 1799.' }
            ],
            reels: [
              { id: 'r1', title: 'The Three Estates', content: '1st: Clergy (1%)\n2nd: Nobility (2%)\n3rd: Everyone else (97%)', color: getReelColor(0) },
              { id: 'r2', title: 'The Problem', content: '97% paid taxes.\n3% paid nothing.\nUnfair system!', color: getReelColor(1) },
              { id: 'r3', title: 'Bastille Day', content: 'July 14, 1789.\nPrison stormed.\nRevolution begins!', color: getReelColor(2) },
              { id: 'r4', title: 'The Motto', content: 'LIBERTY\nEQUALITY\nFRATERNITY', color: getReelColor(3) },
              { id: 'r5', title: 'Philosophers', content: 'Rousseau: Social Contract.\nVoltaire: Free speech.\nMontesquieu: Separation of powers.', color: getReelColor(4) },
              { id: 'r6', title: 'Reign of Terror', content: 'Robespierre\'s rule.\nGuillotine!\n40,000 executed.', color: getReelColor(5) },
              { id: 'r7', title: 'Impact', content: 'End of monarchy.\nEnd of feudalism.\nRights of Man.', color: getReelColor(6) },
              { id: 'r8', title: 'Napoleon', content: 'Military general.\nSeized power 1799.\nEmperor of France.', color: getReelColor(7) }
            ]
          },
          {
            id: 'his5',
            title: '5. World War I',
            description: 'The Great War (1914-1918).',
            summary: '**World War I**: 1914-1918\n**Trigger**: Assassination of Archduke Franz Ferdinand\n**Alliances**: Allied Powers vs Central Powers\n**Result**: Allied victory, Treaty of Versailles, League of Nations',
            detailedNotes: '### 1. Background\n* Also called "The Great War"\n* First truly global conflict\n* 1914-1918 (4 years)\n* Over 17 million deaths\n\n### 2. Causes (M.A.I.N.)\n**M - Militarism**\n* Arms race, especially naval (Britain vs Germany)\n* Glorification of military power\n\n**A - Alliances**\n* Triple Alliance: Germany, Austria-Hungary, Italy\n* Triple Entente: Britain, France, Russia\n\n**I - Imperialism**\n* Competition for colonies in Africa and Asia\n* Clash of interests\n\n**N - Nationalism**\n* Extreme patriotism\n* Pan-Slavism, Pan-Germanism\n* Balkans called "Powder Keg of Europe"\n\n### 3. Immediate Cause\n* Assassination of Archduke Franz Ferdinand of Austria-Hungary\n* Shot by Gavrilo Princip (Serbian nationalist)\n* June 28, 1914, in Sarajevo\n* Austria declared war on Serbia\n* Alliances activated - war spread\n\n### 4. The Two Sides\n**Allied Powers (Entente)**\n* Britain, France, Russia\n* Later: USA, Italy, Japan\n\n**Central Powers**\n* Germany, Austria-Hungary\n* Ottoman Empire, Bulgaria\n\n### 5. Key Events\n* Trench Warfare on Western Front\n* Use of new weapons: tanks, poison gas, aircraft\n* Sinking of Lusitania (1915)\n* USA enters war (1917)\n* Russia withdraws (1917 - Revolution)\n* Germany surrenders (November 11, 1918)\n\n### 6. Treaty of Versailles (1919)\n* Peace treaty with Germany\n* Germany accepted "War Guilt"\n* Lost colonies and territory\n* Military reduced\n* Heavy reparations (compensation)\n* Seeds of World War II\n\n### 7. Consequences\n* Collapse of empires (Ottoman, Austro-Hungarian, Russian, German)\n* League of Nations formed\n* Map of Europe redrawn\n* Rise of USA as world power\n* Economic devastation\n* Seeds of WWII planted',
            flashcards: [
              { id: 'f1', front: 'When was World War I?', back: '1914-1918.' },
              { id: 'f2', front: 'What triggered WWI?', back: 'Assassination of Archduke Franz Ferdinand in Sarajevo.' },
              { id: 'f3', front: 'Who assassinated Franz Ferdinand?', back: 'Gavrilo Princip (Serbian nationalist).' },
              { id: 'f4', front: 'What does M.A.I.N. stand for (causes of WWI)?', back: 'Militarism, Alliances, Imperialism, Nationalism.' },
              { id: 'f5', front: 'Who were the Allied Powers?', back: 'Britain, France, Russia (later USA, Italy).' },
              { id: 'f6', front: 'Who were the Central Powers?', back: 'Germany, Austria-Hungary, Ottoman Empire.' },
              { id: 'f7', front: 'What was the Treaty of Versailles?', back: 'Peace treaty ending WWI, blamed Germany.' },
              { id: 'f8', front: 'What organization was formed after WWI?', back: 'League of Nations.' }
            ],
            mcqs: [
              { id: 'q1', question: 'World War I was fought during:', options: ['1904-1908', '1914-1918', '1939-1945', '1950-1953'], correctIndex: 1, explanation: 'WWI lasted from 1914 to 1918.' },
              { id: 'q2', question: 'Franz Ferdinand was assassinated in:', options: ['Vienna', 'Berlin', 'Sarajevo', 'Paris'], correctIndex: 2, explanation: 'Sarajevo, capital of Bosnia, on June 28, 1914.' },
              { id: 'q3', question: 'USA entered WWI in:', options: ['1914', '1915', '1917', '1918'], correctIndex: 2, explanation: 'USA entered after German submarine attacks.' },
              { id: 'q4', question: 'Treaty of Versailles was signed in:', options: ['1918', '1919', '1920', '1921'], correctIndex: 1, explanation: 'Signed on June 28, 1919.' },
              { id: 'q5', question: 'Balkans was called:', options: ['Heart of Europe', 'Powder Keg of Europe', 'Garden of Europe', 'Workshop of World'], correctIndex: 1, explanation: 'Due to nationalist tensions that could explode into war.' }
            ],
            reels: [
              { id: 'r1', title: 'M.A.I.N. Causes', content: 'Militarism\nAlliances\nImperialism\nNationalism', color: getReelColor(0) },
              { id: 'r2', title: 'The Trigger', content: 'Franz Ferdinand shot.\nJune 28, 1914.\nSarajevo, Bosnia.', color: getReelColor(1) },
              { id: 'r3', title: 'The Alliances', content: 'Allied: Britain, France, Russia.\nCentral: Germany, Austria-Hungary.', color: getReelColor(2) },
              { id: 'r4', title: 'Trench Warfare', content: 'Soldiers in trenches.\nYears of stalemate.\nMud, blood, death.', color: getReelColor(3) },
              { id: 'r5', title: 'New Weapons', content: 'Tanks\nPoison Gas\nAirplanes\nSubmarine', color: getReelColor(4) },
              { id: 'r6', title: 'USA Enters', content: '1917.\nLusitania sinking.\nTurned the tide!', color: getReelColor(5) },
              { id: 'r7', title: 'Treaty of Versailles', content: 'Germany blamed.\nLost territory.\nHeavy fines.', color: getReelColor(6) },
              { id: 'r8', title: 'Aftermath', content: '17 million dead.\nEmpires collapsed.\nLeague of Nations.', color: getReelColor(7) }
            ]
          }
        ]
      },
      {
        id: 'pol', name: 'Political Science', icon: 'Building2', color: 'bg-red-500', syllabus: 'Pending...', paperPattern: 'Pending...', previousPapers: [], chapters: []
      },
      {
        id: 'soc', name: 'Sociology', icon: 'Users', color: 'bg-pink-500', syllabus: 'Pending...', paperPattern: 'Pending...', previousPapers: [], chapters: []
      }
    ] 
  },
  [Stream.SCIENCE]: { 
    id: Stream.SCIENCE, 
    subjects: [
      ENGLISH_SUBJECT,
      {
        id: 'phy', 
        name: 'Physics', 
        icon: 'Atom', 
        color: 'bg-blue-600', 
        syllabus: '1. Rotational Dynamics\n2. Mechanical Properties of Fluids\n3. Kinetic Theory of Gases\n4. Thermodynamics\n5. Oscillations\n6. Superposition of Waves\n7. Wave Optics\n8. Electrostatics\n9. Current Electricity\n10. Magnetic Effects of Electric Current\n11. Magnetic Materials\n12. Electromagnetic Induction\n13. AC Circuits\n14. Dual Nature of Radiation & Matter\n15. Structure of Atom\n16. Semiconductor Devices',
        paperPattern: '### Physics Paper Pattern (70 Marks)\n\n* **Section A (14 Marks)**: 7 MCQs (2 marks each)\n* **Section B (18 Marks)**: Very short answers\n* **Section C (12 Marks)**: Short answers\n* **Section D (8 Marks)**: Long answers (Any 2 out of 3)\n* **Section E (18 Marks)**: Numericals\n* **Internal Assessment (30 Marks)**: Practical',
        previousPapers: [], 
        chapters: [
          {
            id: 'phy1',
            title: '1. Rotational Dynamics',
            description: 'Angular momentum, Moment of inertia, Torque.',
            summary: '**Rotational Motion**: Motion about a fixed axis\n**Torque (τ)**: τ = r × F = Iα\n**Moment of Inertia (I)**: Rotational mass\n**Angular Momentum (L)**: L = Iω\n**Conservation**: L = constant when τ = 0',
            detailedNotes: '### 1. Rotational Motion\nMotion of a rigid body about a fixed axis.\n\n### 2. Angular Quantities\n* **Angular Displacement (θ)**: Angle rotated (in radians)\n* **Angular Velocity (ω)**: ω = dθ/dt (rad/s)\n* **Angular Acceleration (α)**: α = dω/dt (rad/s²)\n\n### 3. Relation with Linear Motion\n* s = rθ\n* v = rω\n* a = rα\n\n### 4. Torque (τ)\n* Rotational equivalent of force\n* τ = r × F = rF sin θ\n* τ = Iα (Newton\'s second law for rotation)\n* Unit: N·m\n\n### 5. Moment of Inertia (I)\n* Rotational equivalent of mass\n* I = Σmr² (for particles)\n* I = ∫r² dm (for continuous body)\n* Depends on axis of rotation\n\n**Common MOI Values:**\n* Ring (axis through center): I = MR²\n* Disc (axis through center): I = ½MR²\n* Solid Sphere: I = ⅖MR²\n* Hollow Sphere: I = ⅔MR²\n* Rod (center): I = ML²/12\n* Rod (end): I = ML²/3\n\n### 6. Theorems\n**Parallel Axis Theorem:**\nI = Icm + Md²\n\n**Perpendicular Axis Theorem:**\nIz = Ix + Iy (for laminar bodies)\n\n### 7. Angular Momentum (L)\n* L = Iω\n* L = r × p\n* τ = dL/dt\n\n### 8. Conservation of Angular Momentum\nIf τ = 0, then L = constant\nI₁ω₁ = I₂ω₂\n\nExamples: Ice skater spinning, diver somersaulting\n\n### 9. Rotational Kinetic Energy\nKE = ½Iω²\nTotal KE = ½mv² + ½Iω² (rolling)',
            flashcards: [
              { id: 'f1', front: 'Formula for Torque?', back: 'τ = r × F = Iα' },
              { id: 'f2', front: 'Moment of Inertia of a Disc?', back: 'I = ½MR² (axis through center)' },
              { id: 'f3', front: 'Moment of Inertia of a Ring?', back: 'I = MR² (axis through center)' },
              { id: 'f4', front: 'Angular Momentum formula?', back: 'L = Iω = r × p' },
              { id: 'f5', front: 'Parallel Axis Theorem?', back: 'I = Icm + Md² (d = distance from CM axis)' },
              { id: 'f6', front: 'When is Angular Momentum conserved?', back: 'When external torque is zero (τ = 0).' },
              { id: 'f7', front: 'Rotational KE formula?', back: 'KE = ½Iω²' }
            ],
            mcqs: [
              { id: 'q1', question: 'SI unit of torque is:', options: ['Joule', 'Newton', 'N·m', 'Watt'], correctIndex: 2, explanation: 'Torque = Force × Distance = N × m = N·m' },
              { id: 'q2', question: 'Moment of inertia of a solid sphere is:', options: ['MR²', '½MR²', '⅖MR²', '⅔MR²'], correctIndex: 2, explanation: 'Solid sphere: I = ⅖MR² about diameter.' },
              { id: 'q3', question: 'Angular momentum is conserved when:', options: ['Force is zero', 'Torque is zero', 'Velocity is zero', 'Acceleration is zero'], correctIndex: 1, explanation: 'L = constant when τ = 0.' },
              { id: 'q4', question: 'Perpendicular axis theorem applies to:', options: ['3D bodies', 'Laminar bodies', 'All bodies', 'Point masses'], correctIndex: 1, explanation: 'Only for flat (2D) bodies.' },
              { id: 'q5', question: 'An ice skater spins faster when arms are pulled in because:', options: ['Mass decreases', 'I decreases', 'Torque increases', 'Energy increases'], correctIndex: 1, explanation: 'I decreases, so ω increases (L = Iω constant).' }
            ],
            reels: [
              { id: 'r1', title: 'Torque', content: 'τ = r × F\nτ = Iα\nRotational force!', color: getReelColor(0) },
              { id: 'r2', title: 'MOI', content: 'Moment of Inertia.\nRotational mass.\nI = Σmr²', color: getReelColor(1) },
              { id: 'r3', title: 'Disc vs Ring', content: 'Ring: I = MR²\nDisc: I = ½MR²\nDisc has less MOI!', color: getReelColor(2) },
              { id: 'r4', title: 'Angular Momentum', content: 'L = Iω\nConserved when τ = 0.\nIce skater example!', color: getReelColor(3) },
              { id: 'r5', title: 'Parallel Axis', content: 'I = Icm + Md²\nShift axis by d.\nI increases!', color: getReelColor(4) },
              { id: 'r6', title: 'Rolling Motion', content: 'KE = ½mv² + ½Iω²\nTranslation + Rotation.', color: getReelColor(5) }
            ]
          },
          {
            id: 'phy2',
            title: '2. Mechanical Properties of Fluids',
            description: 'Viscosity, Surface Tension, Fluid Flow.',
            summary: '**Fluid**: Substance that can flow (liquid/gas)\n**Viscosity**: Internal friction of fluid\n**Surface Tension**: Force per unit length on liquid surface\n**Bernoulli\'s Principle**: P + ½ρv² + ρgh = constant',
            detailedNotes: '### 1. Pressure in Fluids\n* Pressure = Force/Area = F/A\n* SI Unit: Pascal (Pa) = N/m²\n* Atmospheric Pressure: 1.013 × 10⁵ Pa\n\n### 2. Pascal\'s Law\nPressure applied to enclosed fluid is transmitted equally in all directions.\n**Applications**: Hydraulic lift, hydraulic brakes\n\n### 3. Viscosity\n* Internal friction in fluids\n* **Newton\'s Law of Viscosity**: F = ηA(dv/dx)\n* η = coefficient of viscosity\n* SI Unit: Pa·s or Poiseuille\n* CGS Unit: Poise (1 Pa·s = 10 Poise)\n\n**Stokes\' Law**:\nF = 6πηrv (for sphere in fluid)\n\n**Terminal Velocity**:\nvₜ = 2r²(ρ-σ)g / 9η\n\n### 4. Surface Tension\n* Force per unit length on liquid surface\n* T = F/L\n* SI Unit: N/m\n* Due to cohesive forces\n\n**Applications**:\n* Water droplets are spherical\n* Insects walking on water\n* Capillary action\n\n**Excess Pressure**:\n* Soap bubble: ΔP = 4T/r\n* Liquid drop: ΔP = 2T/r\n\n### 5. Capillarity\n* Rise or fall of liquid in narrow tube\n* h = 2T cos θ / ρgr\n* Water rises (θ < 90°), Mercury falls (θ > 90°)\n\n### 6. Fluid Dynamics\n**Equation of Continuity**:\nA₁v₁ = A₂v₂ (for incompressible fluid)\n\n**Bernoulli\'s Theorem**:\nP + ½ρv² + ρgh = constant\n\n**Applications**:\n* Airplane wings (lift)\n* Venturi meter\n* Atomizer\n* Magnus effect',
            flashcards: [
              { id: 'f1', front: 'What is Pascal\'s Law?', back: 'Pressure in enclosed fluid is transmitted equally in all directions.' },
              { id: 'f2', front: 'Formula for Stokes\' Law?', back: 'F = 6πηrv (viscous drag on sphere)' },
              { id: 'f3', front: 'Bernoulli\'s Equation?', back: 'P + ½ρv² + ρgh = constant' },
              { id: 'f4', front: 'Excess pressure in soap bubble?', back: 'ΔP = 4T/r (two surfaces)' },
              { id: 'f5', front: 'Excess pressure in liquid drop?', back: 'ΔP = 2T/r (one surface)' },
              { id: 'f6', front: 'Capillary rise formula?', back: 'h = 2T cos θ / ρgr' },
              { id: 'f7', front: 'Equation of Continuity?', back: 'A₁v₁ = A₂v₂ (mass conservation)' }
            ],
            mcqs: [
              { id: 'q1', question: 'SI unit of viscosity is:', options: ['Poise', 'Pa·s', 'N/m', 'Pa'], correctIndex: 1, explanation: 'Pascal-second or Poiseuille.' },
              { id: 'q2', question: 'Excess pressure in soap bubble is:', options: ['2T/r', '4T/r', 'T/r', 'T/2r'], correctIndex: 1, explanation: 'Soap bubble has two surfaces, so 4T/r.' },
              { id: 'q3', question: 'Terminal velocity is proportional to:', options: ['r', 'r²', '1/r', '1/r²'], correctIndex: 1, explanation: 'vₜ ∝ r² from Stokes\' law.' },
              { id: 'q4', question: 'Water rises in capillary because:', options: ['Cohesion > Adhesion', 'Adhesion > Cohesion', 'Surface tension', 'Viscosity'], correctIndex: 1, explanation: 'Water wets glass (contact angle < 90°).' },
              { id: 'q5', question: 'Bernoulli\'s theorem is based on:', options: ['Mass conservation', 'Energy conservation', 'Momentum conservation', 'Charge conservation'], correctIndex: 1, explanation: 'It\'s essentially energy conservation for fluids.' }
            ],
            reels: [
              { id: 'r1', title: 'Pascal\'s Law', content: 'Pressure transmits equally.\nHydraulic lift.\nHydraulic brakes.', color: getReelColor(0) },
              { id: 'r2', title: 'Viscosity', content: 'Internal friction.\nThick fluids = High η.\nHoney > Water.', color: getReelColor(1) },
              { id: 'r3', title: 'Stokes\' Law', content: 'F = 6πηrv\nDrag on sphere.\nTerminal velocity!', color: getReelColor(2) },
              { id: 'r4', title: 'Surface Tension', content: 'T = F/L\nDroplets are spherical.\nInsects walk on water.', color: getReelColor(3) },
              { id: 'r5', title: 'Soap vs Drop', content: 'Soap bubble: ΔP = 4T/r\nDrop: ΔP = 2T/r\n(2 surfaces vs 1)', color: getReelColor(4) },
              { id: 'r6', title: 'Bernoulli', content: 'P + ½ρv² + ρgh = const.\nFast flow = Low pressure.\nAirplane lift!', color: getReelColor(5) }
            ]
          },
          {
            id: 'phy3',
            title: '3. Kinetic Theory of Gases',
            description: 'Behavior of gases at molecular level.',
            summary: '**Ideal Gas**: PV = nRT\n**Kinetic Energy**: KE = 3/2 kT per molecule\n**RMS Velocity**: vrms = √(3RT/M)\n**Degrees of Freedom**: Ways a molecule can store energy',
            detailedNotes: '### 1. Ideal Gas Equation\nPV = nRT = NkT\n* P = Pressure\n* V = Volume\n* n = Number of moles\n* R = Universal gas constant = 8.314 J/(mol·K)\n* k = Boltzmann constant = 1.38 × 10⁻²³ J/K\n* N = Number of molecules\n\n### 2. Assumptions of Kinetic Theory\n1. Gas molecules are point masses\n2. No intermolecular forces (except during collision)\n3. Collisions are perfectly elastic\n4. Molecules are in random motion\n5. Time of collision << Time between collisions\n\n### 3. Pressure from Kinetic Theory\nP = ⅓ρv²rms = ⅓(nm/V)v²rms\n\n### 4. Kinetic Energy\n* Per molecule: KE = ½mv²rms = 3/2 kT\n* Per mole: KE = 3/2 RT\n* KE depends only on temperature\n\n### 5. Molecular Speeds\n* **RMS Speed**: vrms = √(3RT/M) = √(3kT/m)\n* **Average Speed**: vavg = √(8RT/πM)\n* **Most Probable Speed**: vmp = √(2RT/M)\n* Relation: vmp < vavg < vrms\n\n### 6. Degrees of Freedom (f)\n* Monoatomic (He, Ne): f = 3 (translation only)\n* Diatomic (O₂, N₂): f = 5 (3 trans + 2 rot)\n* Triatomic (CO₂): f = 6 or 7\n\n**Equipartition of Energy**:\nEnergy per degree of freedom = ½kT\nTotal energy = (f/2)kT per molecule\n\n### 7. Specific Heats\n* Cv = (f/2)R\n* Cp = Cv + R = ((f+2)/2)R\n* γ = Cp/Cv = (f+2)/f\n\n**Values:**\n* Monoatomic: γ = 5/3 = 1.67\n* Diatomic: γ = 7/5 = 1.4',
            flashcards: [
              { id: 'f1', front: 'Ideal Gas Equation?', back: 'PV = nRT (n = moles, R = 8.314 J/mol·K)' },
              { id: 'f2', front: 'Average KE per molecule?', back: 'KE = 3/2 kT' },
              { id: 'f3', front: 'RMS velocity formula?', back: 'vrms = √(3RT/M) = √(3kT/m)' },
              { id: 'f4', front: 'Degrees of freedom for diatomic gas?', back: 'f = 5 (3 translational + 2 rotational)' },
              { id: 'f5', front: 'Relation between molecular speeds?', back: 'vmp < vavg < vrms' },
              { id: 'f6', front: 'γ for monoatomic gas?', back: 'γ = Cp/Cv = 5/3 = 1.67' },
              { id: 'f7', front: 'Boltzmann constant value?', back: 'k = 1.38 × 10⁻²³ J/K' }
            ],
            mcqs: [
              { id: 'q1', question: 'Average KE of gas molecule depends on:', options: ['Pressure', 'Volume', 'Temperature', 'Mass'], correctIndex: 2, explanation: 'KE = 3/2 kT, depends only on T.' },
              { id: 'q2', question: 'RMS speed of gas molecule is proportional to:', options: ['T', '√T', 'T²', '1/T'], correctIndex: 1, explanation: 'vrms = √(3RT/M), so vrms ∝ √T.' },
              { id: 'q3', question: 'γ for diatomic gas is:', options: ['1.33', '1.4', '1.67', '2'], correctIndex: 1, explanation: 'γ = 7/5 = 1.4 for diatomic.' },
              { id: 'q4', question: 'Degrees of freedom for monoatomic gas:', options: ['3', '5', '6', '7'], correctIndex: 0, explanation: 'Only 3 translational DOF.' },
              { id: 'q5', question: 'Which is greatest among molecular speeds?', options: ['vmp', 'vavg', 'vrms', 'All equal'], correctIndex: 2, explanation: 'vrms > vavg > vmp.' }
            ],
            reels: [
              { id: 'r1', title: 'Ideal Gas', content: 'PV = nRT\nR = 8.314 J/mol·K\nn = number of moles', color: getReelColor(0) },
              { id: 'r2', title: 'KE of Gas', content: 'Per molecule: 3/2 kT\nPer mole: 3/2 RT\nDepends on T only!', color: getReelColor(1) },
              { id: 'r3', title: 'RMS Speed', content: 'vrms = √(3RT/M)\nvrms ∝ √T\nvrms ∝ 1/√M', color: getReelColor(2) },
              { id: 'r4', title: 'Speed Order', content: 'vmp < vavg < vrms\nMost Probable < Average < RMS', color: getReelColor(3) },
              { id: 'r5', title: 'DOF', content: 'Monoatomic: f = 3\nDiatomic: f = 5\nEnergy = f/2 kT', color: getReelColor(4) },
              { id: 'r6', title: 'γ Values', content: 'Monoatomic: γ = 5/3\nDiatomic: γ = 7/5\nγ = Cp/Cv', color: getReelColor(5) }
            ]
          },
          {
            id: 'phy4',
            title: '4. Thermodynamics',
            description: 'Heat, Work, Laws of Thermodynamics.',
            summary: '**First Law**: ΔQ = ΔU + ΔW (Energy conservation)\n**Second Law**: Heat cannot flow from cold to hot spontaneously\n**Entropy**: Measure of disorder\n**Carnot Efficiency**: η = 1 - T₂/T₁',
            detailedNotes: '### 1. Thermodynamic Terms\n* **System**: Part under study\n* **Surroundings**: Everything outside system\n* **State Variables**: P, V, T, U (not Q, W)\n\n### 2. Zeroth Law\nIf A is in thermal equilibrium with B, and B with C, then A is in equilibrium with C.\n(Foundation for temperature measurement)\n\n### 3. First Law of Thermodynamics\n**ΔQ = ΔU + ΔW**\n* ΔQ = Heat added to system\n* ΔU = Change in internal energy\n* ΔW = Work done by system\n\nFor ideal gas: ΔU = nCvΔT\nWork done: W = ∫PdV\n\n### 4. Thermodynamic Processes\n**A. Isothermal (T = constant)**\n* PV = constant\n* ΔU = 0, so Q = W\n* W = nRT ln(V₂/V₁)\n\n**B. Adiabatic (Q = 0)**\n* PVᵞ = constant\n* TVᵞ⁻¹ = constant\n* W = (P₁V₁ - P₂V₂)/(γ-1)\n\n**C. Isobaric (P = constant)**\n* W = PΔV = nRΔT\n* Q = nCpΔT\n\n**D. Isochoric (V = constant)**\n* W = 0\n* Q = ΔU = nCvΔT\n\n### 5. Second Law\n**Kelvin-Planck**: No engine can convert all heat to work.\n**Clausius**: Heat cannot flow from cold to hot without external work.\n\n### 6. Heat Engines\nEfficiency: η = W/Q₁ = (Q₁-Q₂)/Q₁ = 1 - Q₂/Q₁\n\n**Carnot Engine** (Most efficient):\nη = 1 - T₂/T₁\n\n### 7. Entropy\n* S = Q/T\n* ΔS ≥ 0 for isolated system\n* Measure of disorder/randomness',
            flashcards: [
              { id: 'f1', front: 'First Law of Thermodynamics?', back: 'ΔQ = ΔU + ΔW (Energy conservation)' },
              { id: 'f2', front: 'In isothermal process?', back: 'T = constant, ΔU = 0, Q = W' },
              { id: 'f3', front: 'In adiabatic process?', back: 'Q = 0, PVᵞ = constant' },
              { id: 'f4', front: 'Carnot efficiency?', back: 'η = 1 - T₂/T₁ (T in Kelvin)' },
              { id: 'f5', front: 'Work in isobaric process?', back: 'W = PΔV = nRΔT' },
              { id: 'f6', front: 'Second Law (Clausius)?', back: 'Heat cannot flow from cold to hot spontaneously.' },
              { id: 'f7', front: 'What is Entropy?', back: 'Measure of disorder, S = Q/T, always increases in isolated system.' }
            ],
            mcqs: [
              { id: 'q1', question: 'In isothermal process, internal energy:', options: ['Increases', 'Decreases', 'Remains constant', 'Becomes zero'], correctIndex: 2, explanation: 'ΔU = nCvΔT = 0 since T is constant.' },
              { id: 'q2', question: 'Adiabatic process follows:', options: ['PV = constant', 'PVᵞ = constant', 'P/V = constant', 'TV = constant'], correctIndex: 1, explanation: 'PVᵞ = constant for adiabatic process.' },
              { id: 'q3', question: 'Carnot engine operates between 500K and 300K. Efficiency is:', options: ['20%', '40%', '60%', '80%'], correctIndex: 1, explanation: 'η = 1 - 300/500 = 1 - 0.6 = 0.4 = 40%' },
              { id: 'q4', question: 'Work done in isochoric process:', options: ['Maximum', 'Minimum', 'Zero', 'Negative'], correctIndex: 2, explanation: 'W = PΔV = 0 since V is constant.' },
              { id: 'q5', question: 'Entropy of isolated system:', options: ['Decreases', 'Increases or constant', 'Always constant', 'Becomes zero'], correctIndex: 1, explanation: 'ΔS ≥ 0 for isolated system.' }
            ],
            reels: [
              { id: 'r1', title: 'First Law', content: 'ΔQ = ΔU + ΔW\nHeat = Internal Energy + Work\nEnergy conservation!', color: getReelColor(0) },
              { id: 'r2', title: 'Isothermal', content: 'T = constant.\nΔU = 0.\nQ = W.', color: getReelColor(1) },
              { id: 'r3', title: 'Adiabatic', content: 'Q = 0.\nPVᵞ = constant.\nNo heat exchange.', color: getReelColor(2) },
              { id: 'r4', title: 'Isobaric', content: 'P = constant.\nW = PΔV.\nQ = nCpΔT.', color: getReelColor(3) },
              { id: 'r5', title: 'Isochoric', content: 'V = constant.\nW = 0.\nQ = ΔU.', color: getReelColor(4) },
              { id: 'r6', title: 'Carnot', content: 'Most efficient engine.\nη = 1 - T₂/T₁\nIdeal, not real.', color: getReelColor(5) },
              { id: 'r7', title: 'Entropy', content: 'S = Q/T\nMeasure of disorder.\nAlways increases!', color: getReelColor(6) }
            ]
          },
          {
            id: 'phy5',
            title: '5. Oscillations',
            description: 'Simple Harmonic Motion, Springs, Pendulum.',
            summary: '**SHM**: a = -ω²x\n**Spring**: T = 2π√(m/k)\n**Pendulum**: T = 2π√(L/g)\n**Energy**: Total E = ½mω²A² = constant',
            detailedNotes: '### 1. Simple Harmonic Motion (SHM)\n* Motion where restoring force ∝ displacement\n* F = -kx (opposite to displacement)\n* a = -ω²x\n\n### 2. Equations of SHM\n* x = A sin(ωt + φ) or A cos(ωt + φ)\n* v = Aω cos(ωt + φ) = ω√(A² - x²)\n* a = -Aω² sin(ωt + φ) = -ω²x\n\nWhere:\n* A = Amplitude\n* ω = Angular frequency = 2πf = 2π/T\n* φ = Phase constant\n\n### 3. Time Period\n**General**: T = 2π/ω = 2π√(m/k)\n\n**Spring-mass**: T = 2π√(m/k)\n* k = spring constant\n* Independent of amplitude!\n\n**Simple Pendulum**: T = 2π√(L/g)\n* L = length\n* g = acceleration due to gravity\n* Valid for small angles only\n\n### 4. Energy in SHM\n* KE = ½mv² = ½mω²(A² - x²)\n* PE = ½kx² = ½mω²x²\n* Total E = ½mω²A² = ½kA²\n* Energy oscillates between KE and PE\n\n### 5. Phase Difference\n* Displacement and velocity: 90° (π/2)\n* Velocity and acceleration: 90° (π/2)\n* Displacement and acceleration: 180° (π)\n\n### 6. Types of Oscillations\n* **Free**: No external force (ideal)\n* **Damped**: Friction reduces amplitude\n* **Forced**: External periodic force applied\n* **Resonance**: Maximum amplitude when f = natural frequency',
            flashcards: [
              { id: 'f1', front: 'Condition for SHM?', back: 'a ∝ -x (acceleration proportional and opposite to displacement)' },
              { id: 'f2', front: 'Time period of spring-mass system?', back: 'T = 2π√(m/k)' },
              { id: 'f3', front: 'Time period of simple pendulum?', back: 'T = 2π√(L/g)' },
              { id: 'f4', front: 'Total energy in SHM?', back: 'E = ½mω²A² = ½kA² (constant)' },
              { id: 'f5', front: 'Phase difference between x and a?', back: '180° or π (they are opposite)' },
              { id: 'f6', front: 'What is resonance?', back: 'Maximum amplitude when driving frequency equals natural frequency.' },
              { id: 'f7', front: 'Velocity at mean position?', back: 'Maximum: v = Aω' }
            ],
            mcqs: [
              { id: 'q1', question: 'In SHM, acceleration is maximum at:', options: ['Mean position', 'Extreme position', 'Between mean and extreme', 'Never maximum'], correctIndex: 1, explanation: 'a = -ω²x, maximum when x = A (extreme).' },
              { id: 'q2', question: 'Time period of spring depends on:', options: ['Mass only', 'Spring constant only', 'Both mass and k', 'Amplitude'], correctIndex: 2, explanation: 'T = 2π√(m/k), depends on m and k.' },
              { id: 'q3', question: 'Phase difference between v and a in SHM:', options: ['0°', '90°', '180°', '45°'], correctIndex: 1, explanation: 'v and a are 90° out of phase.' },
              { id: 'q4', question: 'Energy at extreme position is:', options: ['All KE', 'All PE', 'Half KE, half PE', 'Zero'], correctIndex: 1, explanation: 'At extreme, v = 0, so KE = 0, all PE.' },
              { id: 'q5', question: 'If length of pendulum is doubled, T becomes:', options: ['Half', 'Double', '√2 times', '2√2 times'], correctIndex: 2, explanation: 'T ∝ √L, so T becomes √2 times.' }
            ],
            reels: [
              { id: 'r1', title: 'SHM', content: 'a = -ω²x\nAcceleration opposite to displacement.\nRestoring force!', color: getReelColor(0) },
              { id: 'r2', title: 'Spring', content: 'T = 2π√(m/k)\nDepends on mass & stiffness.\nNOT on amplitude!', color: getReelColor(1) },
              { id: 'r3', title: 'Pendulum', content: 'T = 2π√(L/g)\nDepends on length & g.\nSmall angles only!', color: getReelColor(2) },
              { id: 'r4', title: 'Energy', content: 'E = ½kA² = constant.\nKE ↔ PE.\nConserved!', color: getReelColor(3) },
              { id: 'r5', title: 'At Mean', content: 'x = 0.\nv = maximum (Aω).\na = 0.', color: getReelColor(4) },
              { id: 'r6', title: 'At Extreme', content: 'x = A (max).\nv = 0.\na = maximum.', color: getReelColor(5) },
              { id: 'r7', title: 'Resonance', content: 'Driving freq = Natural freq.\nAmplitude MAXIMUM!\nCan be destructive.', color: getReelColor(6) }
            ]
          }
        ]
      },
      {
        id: 'chem', name: 'Chemistry', icon: 'FlaskConical', color: 'bg-teal-500', syllabus: 'Pending...', paperPattern: 'Pending...', previousPapers: [], chapters: []
      },
      {
        id: 'math', name: 'Mathematics', icon: 'Calculator', color: 'bg-indigo-600', syllabus: 'Pending...', paperPattern: 'Pending...', previousPapers: [], chapters: []
      },
      {
        id: 'bio', name: 'Biology', icon: 'Dna', color: 'bg-green-500', syllabus: 'Pending...', paperPattern: 'Pending...', previousPapers: [], chapters: []
      },
      ECONOMICS_SUBJECT
    ] 
  }
};
