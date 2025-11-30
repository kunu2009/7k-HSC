

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
      description: 'By R.K. Narayan.',
      summary: 'A story about an astrologer who hides a dark past.',
      detailedNotes: '### Theme\nIrony of life. The astrologer meets the man he thought he had killed years ago.\n\n### Characters\n* **The Astrologer**: Shrewd, observant, practical.\n* **Guru Nayak**: The antagonist, seeking revenge.',
      flashcards: [
        { id: 'f1', front: 'Author of An Astrologer\'s Day?', back: 'R.K. Narayan.' },
        { id: 'f2', front: 'Name of the antagonist?', back: 'Guru Nayak.' }
      ],
      mcqs: [
        { id: 'q1', question: 'The astrologer carried out his business under a ______ tree.', options: ['Banyan', 'Tamarind', 'Neem', 'Peepal'], correctIndex: 1, explanation: 'He sat under the boughs of a spreading tamarind tree.' }
      ],
      reels: [
        { id: 'r1', title: 'Irony', content: 'He pretended to know the future, but couldn\'t predict his own past catching up!', color: getReelColor(0) }
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
            title: '1. Intro to Corporate Finance', 
            description: 'Financing and Investment decisions.', 
            summary: 'Meaning, Importance.\nFixed Capital vs Working Capital.', 
            detailedNotes: '### Meaning\nDealing with raising and using of finance by a corporation.\n\n### Decisions\n1. **Financing**: Equity or Debt?\n2. **Investment**: Which asset to buy?\n\n### Capital\n* **Fixed**: Land, Building (Long term).\n* **Working**: Cash, Inventory (Short term).',
            flashcards: [
              { id: 'f1', front: 'Corporate Finance deals with?', back: 'Acquisition and Use of Capital.' },
              { id: 'f2', front: 'Fixed Capital', back: 'Stay in business for long period.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Fixed capital is also known as ______ capital.', options: ['Circulating', 'Block', 'Working', 'Liquid'], correctIndex: 1, explanation: 'Permanent assets.' }
            ],
            reels: [
               { id: 'r1', title: 'Finance', content: 'Lifeblood of business.', color: getReelColor(1) }
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
        syllabus: 'Pending...',
        paperPattern: 'Pending...',
        chapters: [],
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
        id: 'his', name: 'History', icon: 'BookOpen', color: 'bg-orange-500', syllabus: 'Pending...', paperPattern: 'Pending...', previousPapers: [], chapters: []
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
        id: 'phy', name: 'Physics', icon: 'Atom', color: 'bg-blue-600', syllabus: 'Pending...', paperPattern: 'Pending...', previousPapers: [], chapters: []
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
