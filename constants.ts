
import { Stream, StreamData, Question, Flashcard, Reel, LongAnswer } from './types';

// --- Data Helpers ---
const REEL_COLORS = [
  'bg-gradient-to-br from-indigo-600 to-blue-600',
  'bg-gradient-to-br from-emerald-600 to-teal-600',
  'bg-gradient-to-br from-rose-600 to-red-600', 
  'bg-gradient-to-br from-purple-600 to-violet-600',
  'bg-gradient-to-br from-amber-500 to-orange-600',
  'bg-gradient-to-br from-cyan-600 to-blue-700',
  'bg-gradient-to-br from-fuchsia-600 to-pink-700',
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

export const MOCK_DATA: Record<Stream, StreamData> = {
  [Stream.COMMERCE]: {
    id: Stream.COMMERCE,
    subjects: [
      {
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
            detailedNotes: '### 1. Micro Economics\nDerived from Greek word "Mikros" meaning small.\nIt studies the behavior of individual economic units.\n\n#### Features of Micro Economics:\n* **Study of Individual Units**: Consumer, Firm.\n* **Price Theory**: Product & Factor Pricing.\n* **Slicing Method**: Splits economy into small parts.\n* **Partial Equilibrium**: Other things being constant (Ceteris Paribus).\n* **Limited Scope**: Does not deal with nationwide problems.\n\n### 2. Macro Economics\nDerived from "Makros" meaning large.\nIt deals with the functioning of the economy as a whole.\n\n#### Features of Macro Economics:\n* **Study of Aggregates**: National Income, Total Employment.\n* **Income Theory**: Determination of National Income.\n* **Lumping Method**: Studies the whole forest, not trees.\n* **General Equilibrium**: Interdependence of variables.\n* **Policy Oriented**: Helps in suggesting policies.',
            flashcards: [
              { id: 'f1', front: 'Micro Economics derived from?', back: 'Greek word "Mikros" meaning Small/Millionth part.' },
              { id: 'f2', front: 'Macro Economics derived from?', back: 'Greek word "Makros" meaning Large/Aggregate.' },
              { id: 'f3', front: 'Father of Economics?', back: 'Adam Smith (Wealth of Nations - 1776).' },
              { id: 'f4', front: 'Coined terms Micro & Macro?', back: 'Ragnar Frisch (Oslo University) in 1933.' },
              { id: 'f5', front: 'Method used in Micro?', back: 'Slicing Method.' },
              { id: 'f6', front: 'Method used in Macro?', back: 'Lumping Method.' },
              { id: 'f7', front: 'Micro Economics is also known as?', back: 'Price Theory.' },
              { id: 'f8', front: 'Macro Economics is also known as?', back: 'Income and Employment Theory.' },
              { id: 'f9', front: 'Ceteris Paribus means?', back: 'Other things remaining constant.' },
              { id: 'f10', front: 'General Equilibrium is part of?', back: 'Macro Economics.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Micro economics is a _______ equilibrium analysis.', options: ['Partial', 'General', 'Total', 'Multi'], correctIndex: 0, explanation: 'Micro economics assumes "other things constant" and isolates a single unit.' },
              { id: 'q2', question: 'Macro economics uses ______ method.', options: ['Slicing', 'Lumping', 'Cutting', 'Dividing'], correctIndex: 1, explanation: 'Macro studies the economy as a whole lump.' },
              { id: 'q3', question: 'Who coined the terms Micro and Macro?', options: ['Adam Smith', 'Alfred Marshall', 'Ragnar Frisch', 'Keynes'], correctIndex: 2, explanation: 'Ragnar Frisch of Oslo University in 1933.' }
            ],
            reels: [
              { id: 'r1', title: 'Micro vs Macro', content: 'Micro = Tree (Individual)\nMacro = Forest (Aggregate)', color: getReelColor(0) },
              { id: 'r2', title: 'Slicing Method', content: 'Micro cuts the economy into small slices to study them in depth.', color: getReelColor(1) },
              { id: 'r3', title: 'Scope of Micro', content: '1. Product Pricing\n2. Factor Pricing\n3. Economic Welfare', color: getReelColor(2) }
            ]
          },
          {
            id: 'eco2',
            title: '2. Utility Analysis',
            description: 'Concept of want satisfying power of a commodity.',
            summary: '**Utility**: Want satisfying power.\n**Law of DMU**: As we consume more, marginal utility diminishes.\n**TU vs MU**: TU increases, MU decreases.',
            detailedNotes: '### 1. Concept of Utility\nCapacity of a commodity to satisfy human wants.\n\n#### Features of Utility:\n* **Relative Concept**: Changes with time and place (Woolen clothes in winter).\n* **Subjective Concept**: Differs from person to person.\n* **Ethically Neutral**: Knife used to cut fruit or kill.\n* **Different from Pleasure**: Medicine has utility but no pleasure.\n\n### 2. Relationship between TU and MU\n* **TU (Total Utility)**: Sum of utilities.\n* **MU (Marginal Utility)**: Utility from additional unit.\n* When TU increases, MU diminishes.\n* When TU is max (Point of Satiety), MU is Zero.\n* When TU falls, MU becomes Negative.',
            flashcards: [
              { id: 'f1', front: 'Define Utility', back: 'Want satisfying power of a commodity.' },
              { id: 'f2', front: 'Form Utility example', back: 'Wood into furniture.' },
              { id: 'f3', front: 'Place Utility example', back: 'Mangoes from Ratnagiri to Mumbai.' },
              { id: 'f4', front: 'Point of Satiety', back: 'When TU is Maximum and MU is Zero.' },
              { id: 'f5', front: 'Law of DMU proposed by?', back: 'Gossen (First Law), popularized by Marshall.' }
            ],
            mcqs: [
              { id: 'q1', question: 'When MU is zero, TU is ______.', options: ['Minimum', 'Maximum', 'Zero', 'Negative'], correctIndex: 1, explanation: 'This is called the Point of Satiety.' },
              { id: 'q2', question: 'Utility is _____ neutral.', options: ['Politically', 'Ethically', 'Socially', 'Morally'], correctIndex: 1, explanation: 'Utility does not distinguish between good or bad (e.g., liquor).' }
            ],
            reels: [
              { id: 'r1', title: 'Point of Satiety', content: 'Stop eating when MU = 0.\nBeyond this, satisfaction turns into dissatisfaction!', color: getReelColor(3) },
              { id: 'r2', title: 'DMU in Daily Life', content: 'The first glass of water implies high utility.\nThe 5th glass? Not so much.', color: getReelColor(4) }
            ]
          },
          {
            id: 'eco3a',
            title: '3A. Demand Analysis',
            description: 'Consumer behavior and Law of Demand.',
            summary: 'Demand = Desire + Ability + Willingness.\nLaw of Demand: Inverse relationship between Price and Quantity Demanded.',
            detailedNotes: '### 1. Meaning of Demand\nDemand is not just desire. It is effective desire.\nDemand = Desire + Willingness to pay + Ability to pay.\n\n### 2. Law of Demand\n**Statement**: "Other things being equal, higher the price, lower the demand and vice versa."\n**Author**: Dr. Alfred Marshall (1890).\n**Curve**: Downward sloping from left to right.\n\n### 3. Exceptions to Law of Demand\n* **Giffen Goods**: Inferior goods (Bread paradox).\n* **Prestige Goods**: Diamonds, Luxury cars.\n* **Speculation**: Expectation of future price rise.\n* **Price Illusion**: High price = High quality.',
            flashcards: [
              { id: 'f1', front: 'Formula of Demand', back: 'Desire + Willingness + Ability.' },
              { id: 'f2', front: 'Slope of Demand Curve', back: 'Downward sloping (Negative slope).' },
              { id: 'f3', front: 'Giffen Goods', back: 'Inferior goods where demand rises with price (Exception).' },
              { id: 'f4', front: 'Ceteris Paribus', back: 'Other things remaining constant.' },
              { id: 'f5', front: 'Individual vs Market Demand', back: 'Single consumer vs Sum of all consumers.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Demand curve slopes ______.', options: ['Upward', 'Downward', 'Vertical', 'Horizontal'], correctIndex: 1, explanation: 'Due to inverse relationship between price and quantity.' },
              { id: 'q2', question: 'Giffen goods are ______ goods.', options: ['Luxury', 'Inferior', 'Normal', 'Superior'], correctIndex: 1, explanation: 'Sir Robert Giffen observed this paradox with bread/meat.' }
            ],
            reels: [
              { id: 'r1', title: 'Demand Rule', content: 'Price UP ⬆️\nDemand DOWN ⬇️\n(Inverse Relationship)', color: getReelColor(5) },
              { id: 'r2', title: 'Giffen Paradox', content: 'In inferior goods, when price drops, people buy LESS to shift to better goods.', color: getReelColor(6) }
            ]
          },
          {
            id: 'eco3b',
            title: '3B. Elasticity of Demand',
            description: 'Responsiveness of demand to change in price.',
            summary: '**Elasticity**: Degree of responsiveness.\n**Types**: Price, Income, Cross.\n**Methods**: Ratio, Outlay, Point.',
            detailedNotes: '### Types of Price Elasticity\n1. **Perfectly Elastic (Ed = ∞)**: Horizontal curve. Slight price change = infinite demand change.\n2. **Perfectly Inelastic (Ed = 0)**: Vertical curve. No change in demand.\n3. **Unitary Elastic (Ed = 1)**: Rectangular Hyperbola. % Change in Q = % Change in P.\n4. **Relatively Elastic (Ed > 1)**: Flatter curve. Luxury goods.\n5. **Relatively Inelastic (Ed < 1)**: Steeper curve. Essential goods.',
            flashcards: [
              { id: 'f1', front: 'Ed = 0', back: 'Perfectly Inelastic Demand (Vertical Line).' },
              { id: 'f2', front: 'Ed = 1', back: 'Unitary Elastic Demand (Rectangular Hyperbola).' },
              { id: 'f3', front: 'Ed > 1', back: 'Relatively Elastic (Luxury Goods).' },
              { id: 'f4', front: 'Expenditure Method', back: 'Also called Outlay Method by Marshall.' },
              { id: 'f5', front: 'Point Method', back: 'Geometric Method for linear demand curve.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Ed = 1 is known as ______.', options: ['Unitary', 'Elastic', 'Inelastic', 'Perfect'], correctIndex: 0, explanation: 'Rectangular Hyperbola curve.' },
              { id: 'q2', question: 'For salt, demand is likely ______.', options: ['Elastic', 'Inelastic', 'Unitary', 'Perfectly Elastic'], correctIndex: 1, explanation: 'Essential goods have inelastic demand.' }
            ],
            reels: [
              { id: 'r1', title: 'Ed = 0', content: 'No matter the price, I need my medicine.\n(Perfectly Inelastic)', color: getReelColor(0) },
              { id: 'r2', title: 'Ed > 1', content: 'Small discount on iPhone -> Huge sales jump!\n(Relatively Elastic)', color: getReelColor(1) }
            ]
          },
          {
            id: 'eco4',
            title: '4. Supply Analysis',
            description: 'Producer behavior and Law of Supply.',
            summary: '**Supply**: Quantity offered for sale at a price.\n**Stock**: Total quantity available.\n**Law**: Direct relationship between Price and Supply.',
            detailedNotes: '### 1. Stock vs Supply\n* **Stock**: Source of supply. Potential supply. Fixed at a point of time.\n* **Supply**: Flow concept. Actual quantity offered for sale.\n\n### 2. Law of Supply\n**Statement**: "Higher the price, higher the supply."\n**Curve**: Upward sloping (Positive slope).\n\n### 3. Exceptions\n* **Labor Supply**: Backward bending curve (Income effect vs Substitution effect).\n* **Perishable Goods**: Seller sells even at low price.\n* **Agricultural Goods**: Depends on weather, not just price.',
            flashcards: [
              { id: 'f1', front: 'Stock vs Supply', back: 'Stock is potential, Supply is actual offer for sale.' },
              { id: 'f2', front: 'Slope of Supply Curve', back: 'Upward sloping (Positive).' },
              { id: 'f3', front: 'Backward Bending Curve', back: 'Supply of Labor at high wage rates.' },
              { id: 'f4', front: 'Determinant of Supply', back: 'Cost of Production, Technology, Govt Policy.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Supply is a ______ concept.', options: ['Stock', 'Flow', 'Static', 'Fixed'], correctIndex: 1, explanation: 'It is measured over a period of time.' },
              { id: 'q2', question: 'Supply curve of labor is ______.', options: ['Upward', 'Downward', 'Backward Bending', 'Vertical'], correctIndex: 2, explanation: 'Due to preference for leisure at high income.' }
            ],
            reels: [
              { id: 'r1', title: 'Supply Rule', content: 'Price UP ⬆️\nSupply UP ⬆️\n(Direct Relationship)', color: getReelColor(2) },
              { id: 'r2', title: 'Stock > Supply', content: 'Stock is what is in the godown.\nSupply is what is on the shop shelf.', color: getReelColor(3) }
            ]
          },
          {
            id: 'eco5',
            title: '5. Forms of Market',
            description: 'Perfect Competition, Monopoly, Oligopoly.',
            summary: '**Perfect Competition**: Many sellers, homogeneous product.\n**Monopoly**: Single seller, price maker.\n**Oligopoly**: Few sellers.',
            detailedNotes: '### 1. Perfect Competition\nIdeal market.\n* Large number of buyers & sellers.\n* Homogeneous product.\n* Free entry/exit.\n* Single Price.\n\n### 2. Monopoly\n"Mono" (Single) + "Poly" (Seller).\n* Single seller.\n* No close substitutes.\n* Price Maker.\n* Barriers to entry.\n\n### 3. Monopolistic Competition\nReal world market.\n* Many sellers.\n* Product Differentiation (Brand, Pack).\n* Selling Cost (Ads).',
            flashcards: [
              { id: 'f1', front: 'Price Maker', back: 'Monopoly.' },
              { id: 'f2', front: 'Price Taker', back: 'Perfect Competition.' },
              { id: 'f3', front: 'Product Differentiation', back: 'Feature of Monopolistic Competition.' },
              { id: 'f4', front: 'Few Sellers', back: 'Oligopoly.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Soap market is an example of ______.', options: ['Monopoly', 'Perfect Competition', 'Monopolistic Competition', 'Oligopoly'], correctIndex: 2, explanation: 'Many brands, differentiated products.' },
              { id: 'q2', question: 'Homogeneous product is feature of ______.', options: ['Perfect Competition', 'Monopoly', 'Oligopoly', 'None'], correctIndex: 0, explanation: 'Products are identical in all respects.' }
            ],
            reels: [
              { id: 'r1', title: 'Monopoly', content: 'I am the only one.\nI set the price.\n(Indian Railways)', color: getReelColor(4) },
              { id: 'r2', title: 'Oligopoly', content: 'Few Giants.\nTelecom: Jio, Airtel, Vi.\nIntense competition.', color: getReelColor(5) }
            ]
          },
          {
            id: 'eco6',
            title: '6. Index Numbers',
            description: 'Tools to measure economic changes.',
            summary: 'Economic Barometers.\nTypes: Price, Quantity, Value.\nConstruction: Laspeyres, Paasche, Fisher.',
            detailedNotes: '### Steps in Construction\n1. Purpose of Index.\n2. Selection of Base Year (Normal year).\n3. Selection of Commodities (Basket).\n4. Selection of Price Quotations.\n5. Choice of Average (Arithmetic Mean).\n\n### Methods\n* **Laspeyres**: Uses Base Year Quantity (q0).\n* **Paasche**: Uses Current Year Quantity (q1).\n* **Fisher**: Ideal Index (Geometric Mean of L & P).',
            flashcards: [
              { id: 'f1', front: 'Base Year', back: 'The year with which comparison is made (denoted by 0).' },
              { id: 'f2', front: 'Current Year', back: 'The year for which index is calculated (denoted by 1).' },
              { id: 'f3', front: 'Laspeyres uses?', back: 'Base Year Quantity (q0).' },
              { id: 'f4', front: 'Paasche uses?', back: 'Current Year Quantity (q1).' }
            ],
            mcqs: [
              { id: 'q1', question: 'Index numbers are ______ barometers.', options: ['Social', 'Economic', 'Political', 'Physical'], correctIndex: 1, explanation: 'They measure changes in economic variables.' },
              { id: 'q2', question: 'Base year should be ______.', options: ['War year', 'Famine year', 'Normal year', 'Current year'], correctIndex: 2, explanation: 'Free from fluctuations.' }
            ],
            reels: [
              { id: 'r1', title: 'What is Index No?', content: 'A tool to measure change.\nInflation = CPI Index.', color: getReelColor(6) },
              { id: 'r2', title: 'Base Year', content: 'Always denoted by suffix "0".\nPrice = p0, Qty = q0.', color: getReelColor(0) }
            ]
          },
          {
            id: 'eco7',
            title: '7. National Income',
            description: 'Total income of the nation.',
            summary: 'GDP, GNP, NNP.\nMethods: Output, Income, Expenditure.\nCircular Flow of Income.',
            detailedNotes: '### Concepts\n* **GDP**: Gross Domestic Product (within territory).\n* **GNP**: Gross National Product (Nationals, includes abroad).\n* **NNP**: GNP minus Depreciation.\n\n### Circular Flow (2 Sector)\nHouseholds provide Factors -> Firms provide Goods.\nFirms pay Factor Income -> Households pay Consumption Exp.',
            flashcards: [
              { id: 'f1', front: 'GDP', back: 'Gross Domestic Product (Territorial).' },
              { id: 'f2', front: 'GNP', back: 'Gross National Product (Nationals).' },
              { id: 'f3', front: 'Depreciation', back: 'Wear and tear of capital assets.' },
              { id: 'f4', front: 'Transfer Payments', back: 'Pension, Scholarship (Excluded from NI).' }
            ],
            mcqs: [
              { id: 'q1', question: 'Net National Product = GNP - ______.', options: ['Subsidy', 'Tax', 'Depreciation', 'Export'], correctIndex: 2, explanation: 'Net value excludes wear and tear.' },
              { id: 'q2', question: 'Transfer payments are ______ in National Income.', options: ['Included', 'Excluded', 'Added', 'Multiplied'], correctIndex: 1, explanation: 'Because no production takes place against them.' }
            ],
            reels: [
              { id: 'r1', title: 'GDP vs GNP', content: 'GDP = Where produced (India).\nGNP = Who produced (Indian).', color: getReelColor(1) },
              { id: 'r2', title: 'Double Counting', content: 'Counting flour AND bread?\nNo! Only final goods.', color: getReelColor(2) }
            ]
          },
          {
            id: 'eco8',
            title: '8. Public Finance in India',
            description: 'Govt Revenue and Expenditure.',
            summary: 'Public vs Private Finance.\nPublic Revenue: Tax (Direct/Indirect) & Non-Tax.\nBudget: Balanced, Surplus, Deficit.',
            detailedNotes: '### Public Revenue\n1. **Tax**: Compulsory contribution.\n   * **Direct**: Income Tax (Impact & Incidence on same person).\n   * **Indirect**: GST (Impact & Incidence on different persons).\n2. **Non-Tax**: Fees, Fines, Prices of public goods.\n\n### Budget Types\n* **Balanced**: Rev = Exp.\n* **Surplus**: Rev > Exp (Control Inflation).\n* **Deficit**: Rev < Exp (Developing countries).',
            flashcards: [
              { id: 'f1', front: 'Direct Tax', back: 'Impact and Incidence on same person (Income Tax).' },
              { id: 'f2', front: 'Indirect Tax', back: 'GST (Goods and Services Tax).' },
              { id: 'f3', front: 'Deficit Budget', back: 'Expenditure > Revenue.' },
              { id: 'f4', front: 'Fiscal Policy', back: 'Govt policy regarding Tax and Spend.' }
            ],
            mcqs: [
              { id: 'q1', question: 'GST is a ______ tax.', options: ['Direct', 'Indirect', 'Progressive', 'Local'], correctIndex: 1, explanation: 'Burden can be shifted.' },
              { id: 'q2', question: 'Budget is presented by ______.', options: ['PM', 'Finance Minister', 'RBI Governor', 'President'], correctIndex: 1, explanation: 'Annually in Parliament.' }
            ],
            reels: [
              { id: 'r1', title: 'Direct vs Indirect', content: 'Direct: Hits YOU directly (Income Tax).\nIndirect: Hits you via products (GST).', color: getReelColor(3) },
              { id: 'r2', title: 'Deficit Budget', content: 'Spending more than earning?\nGood for developing economy growth!', color: getReelColor(4) }
            ]
          },
          {
            id: 'eco9',
            title: '9. Money Market and Capital Market',
            description: 'Indian Financial System.',
            summary: '**Money Market**: Short term funds (< 1 year). RBI, Commercial Banks.\n**Capital Market**: Long term funds (> 1 year). Stock Exchange, SEBI.',
            detailedNotes: '### Money Market Instruments\n* Call Money\n* Treasury Bills (T-Bills)\n* Commercial Paper\n* Certificate of Deposit\n\n### RBI Functions\n1. Issue of Currency.\n2. Banker to Govt.\n3. Banker\'s Bank.\n4. Custodian of Forex.\n5. Controller of Credit (Repo Rate, CRR, SLR).',
            flashcards: [
              { id: 'f1', front: 'Money Market', back: 'Short term funds.' },
              { id: 'f2', front: 'Capital Market', back: 'Long term funds.' },
              { id: 'f3', front: 'RBI established in?', back: '1935 (Nationalized in 1949).' },
              { id: 'f4', front: 'Repo Rate', back: 'Rate at which RBI lends to banks.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Apex bank of India is ______.', options: ['SBI', 'RBI', 'HDFC', 'PNB'], correctIndex: 1, explanation: 'Reserve Bank of India.' },
              { id: 'q2', question: 'Money market deals in ______ funds.', options: ['Long term', 'Short term', 'Medium term', 'Life'], correctIndex: 1, explanation: 'Less than 1 year maturity.' }
            ],
            reels: [
              { id: 'r1', title: 'Bull vs Bear', content: 'Bull: Expects Price Rise 📈\nBear: Expects Price Fall 📉', color: getReelColor(5) },
              { id: 'r2', title: 'RBI Role', content: 'The Boss of all Banks.\nControls money supply.', color: getReelColor(6) }
            ]
          },
          {
            id: 'eco10',
            title: '10. Foreign Trade of India',
            description: 'Composition and Direction of Trade.',
            summary: 'Internal vs Foreign Trade.\nBOP (Balance of Payment) vs BOT (Balance of Trade).\nTrends: Software exports up, Oil imports up.',
            detailedNotes: '### Concepts\n1. **Import**: Buying from abroad.\n2. **Export**: Selling to abroad.\n3. **Entrepot**: Re-export.\n\n### BOT vs BOP\n* **BOT**: Visible Trade only (Goods).\n* **BOP**: Visible + Invisible (Services) + Capital flows. Broader concept.',
            flashcards: [
              { id: 'f1', front: 'BOT', back: 'Balance of Trade (Goods only).' },
              { id: 'f2', front: 'BOP', back: 'Balance of Payments (Goods + Services).' },
              { id: 'f3', front: 'Main Import of India', back: 'Petroleum (Crude Oil).' },
              { id: 'f4', front: 'Main Export of India', back: 'Engineering Goods, Gems, Textiles.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Trade between two countries is ______ trade.', options: ['Internal', 'Foreign', 'Local', 'State'], correctIndex: 1, explanation: 'International trade.' },
              { id: 'q2', question: 'Balance of Payment includes ______.', options: ['Goods only', 'Services only', 'Goods and Services', 'None'], correctIndex: 2, explanation: 'It is a systematic record of all transactions.' }
            ],
            reels: [
              { id: 'r1', title: 'BOP > BOT', content: 'BOP is the big picture.\nIt includes Tourism, Software, Loans.', color: getReelColor(0) },
              { id: 'r2', title: 'Oil', content: 'India\'s biggest bill?\nImporting Crude Oil.', color: getReelColor(1) }
            ]
          }
        ]
      },
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
            description: 'Nature and significance. Fayol & Taylor.', 
            summary: '**Management**: Art of getting things done.\n**Fayol**: 14 Principles (Division of Work, Authority, etc).\n**Taylor**: Scientific Management (Time study, Motion study).', 
            detailedNotes: '### Henri Fayol\'s 14 Principles\n1. Division of Work\n2. Authority and Responsibility\n3. Discipline\n4. Unity of Command (One Boss)\n5. Unity of Direction\n6. Subordination of Individual Interest\n7. Remuneration\n8. Centralization\n9. Scalar Chain\n10. Order\n11. Equity\n12. Stability of Tenure\n13. Initiative\n14. Esprit de Corps (Teamwork)',
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
               { id: 'r1', title: '14 Principles', content: 'Fayol gave the General guidelines for managers.', color: getReelColor(2) },
               { id: 'r2', title: 'Scientific Mgmt', content: 'Taylor said: Don\'t guess (Rule of Thumb).\nUse Science.', color: getReelColor(3) }
            ]
          },
          { 
            id: 'ocm2', 
            title: '2. Functions of Management', 
            description: 'PODSCORB.', 
            summary: 'Planning -> Organizing -> Staffing -> Directing -> Coordinating -> Controlling.', 
            detailedNotes: '### Cycle\n1. **Planning**: Deciding in advance what to do.\n2. **Organizing**: Grouping resources.\n3. **Staffing**: Recruiting right people.\n4. **Directing**: Instructing and guiding.\n5. **Coordinating**: Harmoney between depts.\n6. **Controlling**: Comparing actual with standard.',
            flashcards: [
              { id: 'f1', front: 'First function of management', back: 'Planning.' },
              { id: 'f2', front: 'Last function of management', back: 'Controlling.' },
              { id: 'f3', front: 'Staffing deals with?', back: 'Human Resources (Employees).' }
            ],
            mcqs: [
              { id: 'q1', question: '______ is the base of all functions.', options: ['Controlling', 'Planning', 'Staffing', 'Directing'], correctIndex: 1, explanation: 'Without plan, nothing starts.' },
              { id: 'q2', question: 'Corrective action is taken in ______.', options: ['Planning', 'Controlling', 'Organizing', 'Staffing'], correctIndex: 1, explanation: 'Comparing actual performance with standards.' }
            ],
            reels: [
               { id: 'r1', title: 'PODSCORB', content: 'Luther Gulick\'s acronym for functions.', color: getReelColor(4) },
               { id: 'r2', title: 'Planning', content: 'Fail to plan?\nPlan to fail.', color: getReelColor(5) }
            ]
          },
          { 
            id: 'ocm3', 
            title: '3. Entrepreneurship Development', 
            description: 'Skills and Qualities.', 
            summary: 'Entrepreneur: Innovator, Risk Taker.\nFunctions: Innovation, Decision Making.', 
            detailedNotes: '### Qualities of Entrepreneur\n* Disciplined\n* Confident\n* Open Minded\n* Competitive\n* Creative\n\n### EDP\nEntrepreneurship Development Program helps nurture skills.',
            flashcards: [
              { id: 'f1', front: 'Entrepreneur derived from?', back: 'French word "Entreprendre" (To undertake).' },
              { id: 'f2', front: 'Innovation theory given by?', back: 'Joseph Schumpeter.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Entrepreneur is a ______ taker.', options: ['Risk', 'Salary', 'Order', 'Rest'], correctIndex: 0, explanation: 'Profit is reward for risk.' }
            ],
            reels: [
               { id: 'r1', title: 'Risk Taker', content: 'No Risk, No Profit.', color: getReelColor(6) }
            ]
          },
          { 
            id: 'ocm4', 
            title: '4. Business Services', 
            description: 'Banking, Insurance, Transport, Communication.', 
            summary: 'Services are intangible.\n**Banking**: Commercial, Central.\n**Insurance**: Life, Fire, Marine.\n**Transport**: Road, Rail, Air, Water.', 
            detailedNotes: '### Principles of Insurance\n1. Utmost Good Faith\n2. Insurable Interest\n3. Indemnity (Not for Life)\n4. Subrogation\n5. Contribution\n6. Mitigation of Loss\n7. Causa Proxima', 
            flashcards: [
              { id: 'f1', front: 'Principle of Indemnity', back: 'To place insured in same financial position as before loss (Not applicable to Life).' },
              { id: 'f2', front: 'Warehousing creates?', back: 'Time Utility.' },
              { id: 'f3', front: 'Transport creates?', back: 'Place Utility.' },
              { id: 'f4', front: 'Insurable Interest', back: 'Must exist at time of loss (Fire) or contract (Life).' }
            ],
            mcqs: [
              { id: 'q1', question: 'Principle of Indemnity is NOT applicable to ______ insurance.', options: ['Fire', 'Marine', 'Life', 'General'], correctIndex: 2, explanation: 'Human life cannot be valued in money.' },
              { id: 'q2', question: 'RBI is a ______ bank.', options: ['Commercial', 'Central', 'Co-operative', 'Foreign'], correctIndex: 1, explanation: 'Apex bank.' }
            ],
            reels: [
               { id: 'r1', title: '7 Principles', content: 'Insurance relies on Trust (Utmost Good Faith).', color: getReelColor(0) },
               { id: 'r2', title: 'Warehousing', content: 'Storing goods till demand arises.\nCreates Time Utility.', color: getReelColor(1) }
            ],
            longAnswers: ocm_ch4_long_answers
          },
          { 
            id: 'ocm5', 
            title: '5. Emerging Modes of Business', 
            description: 'E-Business, BPO, KPO, LPO.', 
            summary: '**E-Business**: Electronic Business.\nTypes: B2B, B2C, C2C, C2B.\n**Outsourcing**: BPO (Voice/Non-voice), KPO (Knowledge), LPO (Legal).', 
            detailedNotes: '### Scope of E-Business\n* **B2B**: Business to Business (Raw material).\n* **B2C**: Business to Consumer (Amazon).\n* **C2C**: Consumer to Consumer (OLX/eBay).\n\n### Outsourcing\nContracting out non-core activities to specialists.',
            flashcards: [
              { id: 'f1', front: 'B2C stands for', back: 'Business to Consumer.' },
              { id: 'f2', front: 'KPO stands for', back: 'Knowledge Process Outsourcing.' },
              { id: 'f3', front: 'BPO stands for', back: 'Business Process Outsourcing.' }
            ],
            mcqs: [
              { id: 'q1', question: 'OLX is an example of ______.', options: ['B2B', 'B2C', 'C2C', 'C2B'], correctIndex: 2, explanation: 'Consumer selling to Consumer.' }
            ],
            reels: [
               { id: 'r1', title: 'E-Commerce', content: '24/7 Global Reach.\nLower cost.', color: getReelColor(2) }
            ]
          },
          { 
            id: 'ocm6', 
            title: '6. Social Responsibility', 
            description: 'Responsibility towards groups.', 
            summary: 'CSR: Corporate Social Responsibility.\nGroups: Owners, Investors, Employees, Consumers, Govt, Society.', 
            detailedNotes: '### Responsibility towards Consumers\n* Good quality\n* Fair price\n* Honest advertising\n* Consumer safety\n\n### CSR\nCompanies with Net Worth > 500Cr or Profit > 5Cr must spend 2% of avg profit on social causes.',
            flashcards: [
              { id: 'f1', front: 'CSR full form', back: 'Corporate Social Responsibility.' },
              { id: 'f2', front: 'Job Security', back: 'Responsibility towards Employees.' },
              { id: 'f3', front: 'Paying Taxes', back: 'Responsibility towards Govt.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Business should provide ______ goods to consumers.', options: ['Cheap', 'Quality', 'Adulterated', 'Duplicate'], correctIndex: 1, explanation: 'Safety and value.' }
            ],
            reels: [
               { id: 'r1', title: 'CSR', content: 'Business is part of Society.\nGive back 2%.', color: getReelColor(3) }
            ]
          },
          { 
            id: 'ocm7', 
            title: '7. Consumer Protection', 
            description: 'Rights and Forums.', 
            summary: 'Rights: Safety, Info, Choose, Heard, Redressal, Education.\nForums: District (upto 1Cr), State (1Cr-10Cr), National (>10Cr).', 
            detailedNotes: '### Rights of Consumers\n1. Right to Safety\n2. Right to Information\n3. Right to Choose\n4. Right to be Heard\n5. Right to Consumer Education\n6. Right to Redressal\n\n### Redressal Agencies (2019 Act)\n* **District Commission**: Upto Rs. 1 Crore.\n* **State Commission**: Rs. 1 Crore to Rs. 10 Crores.\n* **National Commission**: Above Rs. 10 Crores.',
            flashcards: [
              { id: 'f1', front: 'Consumer Protection Act Year', back: '2019 (Old was 1986).' },
              { id: 'f2', front: 'Jago Grahak Jago', back: 'Consumer Awareness Campaign.' },
              { id: 'f3', front: 'District Commission Limit', back: 'Upto Rs. 1 Crore.' },
              { id: 'f4', front: 'National Commission Limit', back: 'Above Rs. 10 Crores.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Consumer Protection Act was passed in ______.', options: ['1986', '2019', '1947', '2000'], correctIndex: 1, explanation: 'Latest act is 2019.' },
              { id: 'q2', question: 'President of National Commission is ______.', options: ['District Judge', 'High Court Judge', 'Supreme Court Judge', 'Civil Judge'], correctIndex: 2, explanation: 'Sitting or retired.' }
            ],
            reels: [
               { id: 'r1', title: 'King of Market', content: 'Consumer is King.\nBut often exploited.', color: getReelColor(4) },
               { id: 'r2', title: '1 Crore Limit', content: 'Cases upto 1 Cr go to District Commission.', color: getReelColor(5) }
            ]
          },
          { 
            id: 'ocm8', 
            title: '8. Marketing', 
            description: '4Ps and 7Ps.', 
            summary: 'Marketing Mix.\nProduct, Price, Place, Promotion.\n+ People, Process, Physical Evidence.', 
            detailedNotes: '### Marketing Mix (4Ps)\n1. **Product**: Goods/Services offered.\n2. **Price**: Monetary value.\n3. **Place**: Distribution channels.\n4. **Promotion**: Advertising, Sales promotion.\n\n### Extended 3Ps (For Services)\n5. **People**: Staff/Employees.\n6. **Process**: Delivery mechanism.\n7. **Physical Evidence**: Ambience, Decor.',
            flashcards: [
              { id: 'f1', front: '4Ps given by', back: 'E. Jerome McCarthy.' },
              { id: 'f2', front: 'Marketing Mix', back: 'Combination of variables to satisfy market.' },
              { id: 'f3', front: 'Promotion includes', back: 'Advertising, Personal Selling, Publicity.' }
            ],
            mcqs: [
              { id: 'q1', question: '4Ps of marketing are Product, Price, Place and ______.', options: ['Process', 'Promotion', 'People', 'Plan'], correctIndex: 1, explanation: 'The communication aspect.' },
              { id: 'q2', question: '______ is the only element that generates revenue.', options: ['Product', 'Price', 'Place', 'Promotion'], correctIndex: 1, explanation: 'All others represent cost.' }
            ],
            reels: [
               { id: 'r1', title: '4Ps', content: 'The holy grail of Marketing.', color: getReelColor(6) },
               { id: 'r2', title: 'Price', content: 'Too high? No sales.\nToo low? No profit.', color: getReelColor(0) }
            ],
            longAnswers: ocm_ch8_long_answers
          }
        ]
      },
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
  [Stream.ARTS]: { id: Stream.ARTS, subjects: [] },
  [Stream.SCIENCE]: { id: Stream.SCIENCE, subjects: [] }
};
