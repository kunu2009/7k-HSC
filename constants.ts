
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
        { id: 'f4', front: 'Coined terms Micro & Macro?', back: 'Ragnar Frisch (Oslo University) in 1933.' },
        { id: 'f5', front: 'Method used in Micro?', back: 'Slicing Method.' },
        { id: 'f6', front: 'Method used in Macro?', back: 'Lumping Method.' },
        { id: 'f7', front: 'Micro Economics is also known as?', back: 'Price Theory.' },
        { id: 'f8', front: 'Macro Economics is also known as?', back: 'Income and Employment Theory.' },
        { id: 'f9', front: 'Ceteris Paribus means?', back: 'Other things remaining constant.' },
        { id: 'f10', front: 'General Equilibrium is part of?', back: 'Macro Economics.' },
        { id: 'f11', front: 'Who authored "Principles of Economics"?', back: 'Dr. Alfred Marshall (1890).' },
        { id: 'f12', front: 'Who authored "General Theory of Employment, Interest and Money"?', back: 'Lord John Maynard Keynes (1936).' },
        { id: 'f13', front: 'Scope of Micro includes?', back: 'Product Pricing, Factor Pricing, Economic Welfare.' },
        { id: 'f14', front: 'Scope of Macro includes?', back: 'Income & Employment, General Price Level, Growth.' },
        { id: 'f15', front: 'Marginalism Principle?', back: 'Used in Micro (Change brought by additional unit).' }
      ],
      mcqs: [
        { id: 'q1', question: 'Micro economics is a _______ equilibrium analysis.', options: ['Partial', 'General', 'Total', 'Multi'], correctIndex: 0, explanation: 'Micro economics assumes "other things constant" and isolates a single unit.' },
        { id: 'q2', question: 'Macro economics uses ______ method.', options: ['Slicing', 'Lumping', 'Cutting', 'Dividing'], correctIndex: 1, explanation: 'Macro studies the economy as a whole lump.' },
        { id: 'q3', question: 'Who coined the terms Micro and Macro?', options: ['Adam Smith', 'Alfred Marshall', 'Ragnar Frisch', 'Keynes'], correctIndex: 2, explanation: 'Ragnar Frisch of Oslo University in 1933.' },
        { id: 'q4', question: 'Micro economics is also called ______.', options: ['Income Theory', 'Price Theory', 'Growth Theory', 'Employment Theory'], correctIndex: 1, explanation: 'It deals with determination of prices of goods and factors.' },
        { id: 'q5', question: 'Which is NOT a feature of Micro Economics?', options: ['Slicing Method', 'Individual Units', 'General Equilibrium', 'Analysis of Resource Allocation'], correctIndex: 2, explanation: 'General Equilibrium is a feature of Macro Economics.' },
        { id: 'q6', question: '"General Theory" was written by?', options: ['Adam Smith', 'Keynes', 'Marshall', 'Ricardo'], correctIndex: 1, explanation: 'Lord J.M. Keynes published it in 1936.' },
        { id: 'q7', question: 'The term "Mikros" means ______.', options: ['Large', 'Small', 'Whole', 'None'], correctIndex: 1, explanation: 'It means small or a millionth part.' },
        { id: 'q8', question: 'Global economic variables are studied in ______.', options: ['Micro', 'Macro', 'Both', 'None'], correctIndex: 1, explanation: 'Macro studies aggregates like Global economy.' },
        { id: 'q9', question: 'Micro economics helps in ______.', options: ['National Policy', 'Business Decisions', 'Economic Growth', 'Balance of Payments'], correctIndex: 1, explanation: 'It helps producers take decisions on production and pricing.' },
        { id: 'q10', question: 'Which economist is associated with Micro Economics?', options: ['Adam Smith', 'Lord Keynes', 'Malthus', 'Dr. Alfred Marshall'], correctIndex: 3, explanation: 'Dr. Marshall popularized Micro Economics.' },
        { id: 'q11', question: 'Macro economics is a ______ concept.', options: ['Aggregate', 'Individual', 'Partial', 'Micro'], correctIndex: 0, explanation: 'It studies the forest, not the trees.' },
        { id: 'q12', question: 'National Income is a subject matter of ______.', options: ['Micro', 'Macro', 'Farm', 'Home'], correctIndex: 1, explanation: 'It is an aggregate concept.' },
        { id: 'q13', question: 'The study of particular firm is ______.', options: ['Macro', 'Micro', 'General', 'Total'], correctIndex: 1, explanation: 'Individual unit.' },
        { id: 'q14', question: 'Slicing method divides the economy into ______.', options: ['Large chunks', 'Small units', 'Two sectors', 'Four sectors'], correctIndex: 1, explanation: 'To study each unit in depth.' },
        { id: 'q15', question: 'General Price Level is studied in ______.', options: ['Micro', 'Macro', 'Individual', 'None'], correctIndex: 1, explanation: 'It is the average of all prices.' },
        { id: 'q16', question: 'Theory of Economic Welfare is a part of ______.', options: ['Macro', 'Micro', 'Fiscal', 'Monetary'], correctIndex: 1, explanation: 'Efficiency in production and consumption.' },
        { id: 'q17', question: 'The phrase "Ceteris Paribus" is most used in ______.', options: ['Macro', 'Micro', 'History', 'Geography'], correctIndex: 1, explanation: 'Assumptions are crucial in Micro.' },
        { id: 'q18', question: 'Lumping method is associated with ______.', options: ['Micro', 'Macro', 'Individual', 'Partial'], correctIndex: 1, explanation: 'Grouping units together.' },
        { id: 'q19', question: 'Who defined Economics as "Science of Wealth"?', options: ['Marshall', 'Robbins', 'Adam Smith', 'Keynes'], correctIndex: 2, explanation: 'In his book Wealth of Nations.' },
        { id: 'q20', question: 'Kenneth Boulding defined ______ economics.', options: ['Micro', 'Macro', 'Both', 'None'], correctIndex: 1, explanation: 'He gave a famous definition of Macro.' },
        { id: 'q21', question: 'Which is a feature of Micro Economics?', options: ['Study of Aggregates', 'Income Theory', 'General Equilibrium', 'Based on certain assumptions'], correctIndex: 3, explanation: 'Rationality, Ceteris Paribus, etc.' },
        { id: 'q22', question: 'Product pricing includes theory of ______.', options: ['Rent', 'Wages', 'Interest', 'Demand and Supply'], correctIndex: 3, explanation: 'Interaction of demand and supply determines price.' },
        { id: 'q23', question: 'Factor pricing includes ______.', options: ['Product Price', 'Rent, Wages, Interest, Profit', 'General Price', 'None'], correctIndex: 1, explanation: 'Rewards for factors of production.' },
        { id: 'q24', question: 'Macro economics deals with ______.', options: ['Individual Demand', 'Market Demand', 'Aggregate Demand', 'Firm Supply'], correctIndex: 2, explanation: 'Total demand of the country.' },
        { id: 'q25', question: 'The concept of "Invisible Hand" is related to ______.', options: ['Keynes', 'Marshall', 'Adam Smith', 'Ricardo'], correctIndex: 2, explanation: 'Self-regulating nature of the market.' },
        { id: 'q26', question: 'Historical review of Micro Economics includes ______.', options: ['Keynesian Revolution', 'Classical Economists', 'Great Depression', 'None'], correctIndex: 1, explanation: 'Smith, Ricardo, Mill.' },
        { id: 'q27', question: 'Micro economics is useful to ______.', options: ['Government', 'Producers', 'Consumers', 'All of the above'], correctIndex: 3, explanation: 'Helps in tax, pricing, and utility maximization.' },
        { id: 'q28', question: 'Macro economics studies ______.', options: ['Relative Prices', 'General Price Level', 'Single Price', 'None'], correctIndex: 1, explanation: 'Inflation and Deflation.' },
        { id: 'q29', question: 'Which method gives a "Bird\'s eye view" of the economy?', options: ['Micro', 'Macro', 'Slicing', 'Partial'], correctIndex: 1, explanation: 'Overview of the whole system.' },
        { id: 'q30', question: 'Micro economics is ______ in nature.', options: ['Dynamic', 'Static', 'Aggregative', 'Lumping'], correctIndex: 1, explanation: 'It takes a snapshot at a point in time (Static analysis).' },
        { id: 'q31', question: 'The Great Depression of 1929 led to the rise of ______.', options: ['Micro', 'Macro', 'Classical', 'Neo-Classical'], correctIndex: 1, explanation: 'Keynesian Macroeconomics.' },
        { id: 'q32', question: 'Scope of Macro Economics does NOT include ______.', options: ['Theory of Income', 'Theory of Growth', 'Theory of Individual Price', 'Theory of Distribution'], correctIndex: 2, explanation: 'Individual price is Micro.' },
        { id: 'q33', question: 'Welfare Economics is basically ______.', options: ['Positive', 'Normative', 'Macro', 'None'], correctIndex: 1, explanation: 'Deals with "what ought to be".' },
        { id: 'q34', question: 'Total Investment is a variable of ______.', options: ['Micro', 'Macro', 'Individual', 'Firm'], correctIndex: 1, explanation: 'Aggregate variable.' },
        { id: 'q35', question: 'Which is an example of Micro variable?', options: ['National Income', 'General Price', 'Price of a Watch', 'Total Employment'], correctIndex: 2, explanation: 'Specific commodity price.' }
      ],
      reels: [
        { id: 'r1', title: 'Micro vs Macro', content: 'Micro = Tree (Individual)\nMacro = Forest (Aggregate)', color: getReelColor(0) },
        { id: 'r2', title: 'Slicing Method', content: 'Micro cuts the economy into small slices to study them in depth.', color: getReelColor(1) },
        { id: 'r3', title: 'Scope of Micro', content: '1. Product Pricing\n2. Factor Pricing\n3. Economic Welfare', color: getReelColor(2) },
        { id: 'r4', title: 'Ragnar Frisch', content: 'The man who gave us the terms "Micro" and "Macro" in 1933.', color: getReelColor(3) },
        { id: 'r5', title: 'Price Theory', content: 'Micro explains how prices of Apples, Mobiles, and Wages are determined.', color: getReelColor(4) },
        { id: 'r6', title: 'Wealth of Nations', content: 'Adam Smith (1776). The Classical Economist.', color: getReelColor(5) },
        { id: 'r7', title: 'Principles of Economics', content: 'Dr. Alfred Marshall (1890). The Neo-Classical Economist.', color: getReelColor(6) },
        { id: 'r8', title: 'General Theory', content: 'Lord Keynes (1936). The Architect of Modern Macro Economics.', color: getReelColor(7) },
        { id: 'r9', title: 'Feature: Individual Units', content: 'Micro studies behavior of ONE consumer, ONE firm.', color: getReelColor(8) },
        { id: 'r10', title: 'Feature: Free Market', content: 'Micro helps understanding working of Free Market Economy.', color: getReelColor(9) },
        { id: 'r11', title: 'Feature: Market Structure', content: 'Micro analyses Perfect Competition, Monopoly, Oligopoly.', color: getReelColor(0) },
        { id: 'r12', title: 'Feature: Limited Scope', content: 'Micro does not deal with Inflation, Poverty, Unemployment.', color: getReelColor(1) },
        { id: 'r13', title: 'Macro: Aggregates', content: 'Macro deals with Total Employment, National Income, Total Investment.', color: getReelColor(2) },
        { id: 'r14', title: 'Macro: Income Theory', content: 'Macro is also known as Income and Employment Theory.', color: getReelColor(3) },
        { id: 'r15', title: 'Macro: Lumping', content: 'Studying the whole economy as one big lump.', color: getReelColor(4) },
        { id: 'r16', title: 'Macro: Gen Equilibrium', content: 'Everything depends on everything else. Interdependence.', color: getReelColor(5) },
        { id: 'r17', title: 'Macro: Policy Oriented', content: 'Helps govt formulate economic policies for growth.', color: getReelColor(6) },
        { id: 'r18', title: 'Imp: Business Decisions', content: 'Micro helps businessmen fix prices and maximize profit.', color: getReelColor(7) },
        { id: 'r19', title: 'Imp: Economic Fluctuation', content: 'Macro analyses causes of fluctuations in income and employment.', color: getReelColor(8) },
        { id: 'r20', title: 'Imp: National Income', content: 'Macro helps in measurement of National Income.', color: getReelColor(9) },
        { id: 'r21', title: 'Welfare Economics', content: 'Micro explains how to maximize economic welfare.', color: getReelColor(0) },
        { id: 'r22', title: 'Comparison: Tool', content: 'Micro uses Individual Demand/Supply.\nMacro uses Aggregate Demand/Supply.', color: getReelColor(1) }
      ]
    },
    {
      id: 'eco2',
      title: '2. Utility Analysis',
      description: 'Concept of want satisfying power of a commodity.',
      summary: '**Utility**: Want satisfying power.\n**Law of DMU**: As we consume more, marginal utility diminishes.\n**TU vs MU**: TU increases, MU decreases.',
      detailedNotes: '### 1. Concept of Utility\nCapacity of a commodity to satisfy human wants.\n\n#### Features of Utility:\n* **Relative Concept**: Changes with time and place (Woolen clothes in winter).\n* **Subjective Concept**: Differs from person to person.\n* **Ethically Neutral**: Knife used to cut fruit or kill.\n* **Different from Pleasure**: Medicine has utility but no pleasure.\n* **Different from Usefulness**: Liquor has utility for addict but no usefulness.\n\n### 2. Types of Utility\n* **Form**: Wood -> Chair.\n* **Place**: Transport.\n* **Service**: Doctor, Teacher.\n* **Knowledge**: Learning computer.\n* **Possession**: Buying goods.\n* **Time**: Blood bank, Warehousing.\n\n### 3. Law of DMU\n**Statement**: "Other things being equal, the additional benefit which a person derives from a given increase of his stock of a thing, diminishes with every increase in the stock that he already has." - Marshall.\n\n#### Exceptions (Real or Apparent)\n* Hobbies (Stamps/Coins)\n* Miser\n* Addictions\n* Power\n* Money',
      flashcards: [
        { id: 'f1', front: 'Define Utility', back: 'Want satisfying power of a commodity.' },
        { id: 'f2', front: 'Form Utility example', back: 'Wood into furniture (Change in shape/structure).' },
        { id: 'f3', front: 'Place Utility example', back: 'Mangoes from Ratnagiri to Mumbai (Transport).' },
        { id: 'f4', front: 'Point of Satiety', back: 'When TU is Maximum and MU is Zero.' },
        { id: 'f5', front: 'Law of DMU proposed by?', back: 'Gossen (First Law), popularized by Marshall.' },
        { id: 'f6', front: 'Relationship: TU rises, MU?', back: 'Diminishes.' },
        { id: 'f7', front: 'Relationship: TU max, MU?', back: 'Zero.' },
        { id: 'f8', front: 'Relationship: TU falls, MU?', back: 'Negative.' },
        { id: 'f9', front: 'Time Utility created by?', back: 'Warehousing/Storage.' },
        { id: 'f10', front: 'Knowledge Utility example', back: 'Mobile phone functions known to user.' },
        { id: 'f11', front: 'Exception: Hobbies', back: 'Stamps collection (MU increases initially).' },
        { id: 'f12', front: 'Exception: Miser', back: 'Every additional rupee gives more satisfaction.' },
        { id: 'f13', front: 'Measurement of Utility?', back: 'Cardinal (Numerical) is assumed in Marshall\'s analysis.' },
        { id: 'f14', front: 'Paradox of Value', back: 'Water (High Value in use, Low Exchange) vs Diamond (Low Use, High Exchange).' }
      ],
      mcqs: [
        { id: 'q1', question: 'When MU is zero, TU is ______.', options: ['Minimum', 'Maximum', 'Zero', 'Negative'], correctIndex: 1, explanation: 'This is called the Point of Satiety.' },
        { id: 'q2', question: 'Utility is _____ neutral.', options: ['Politically', 'Ethically', 'Socially', 'Morally'], correctIndex: 1, explanation: 'Utility does not distinguish between good or bad (e.g., liquor).' },
        { id: 'q3', question: 'Blood bank is an example of ______ utility.', options: ['Place', 'Time', 'Form', 'Service'], correctIndex: 1, explanation: 'It stores blood for future use when needed.' },
        { id: 'q4', question: 'Law of DMU is based on ______ rationality.', options: ['Cardinal', 'Ordinal', 'Irrational', 'None'], correctIndex: 0, explanation: 'Assumes utility can be measured in numbers.' },
        { id: 'q5', question: 'MU of money ______.', options: ['Increases', 'Decreases', 'Remains Constant', 'Becomes Zero'], correctIndex: 0, explanation: 'For a miser/normal person, more money is always better (Exception).' },
        { id: 'q6', question: 'Which is NOT an assumption of DMU?', options: ['Rationality', 'Cardinal Measurement', 'Homogeneity', 'Different Size'], correctIndex: 3, explanation: 'Reasonable size is assumed, not different size.' },
        { id: 'q7', question: 'Transfer of ownership creates ______ utility.', options: ['Place', 'Time', 'Possession', 'Form'], correctIndex: 2, explanation: 'When goods are bought and sold.' },
        { id: 'q8', question: 'Knowledge utility increases with ______.', options: ['Ignorance', 'Education', 'Money', 'Time'], correctIndex: 1, explanation: 'Learning how to use a product.' },
        { id: 'q9', question: 'Utility depends on the ______ of want.', options: ['Intensity', 'Quality', 'Duration', 'Price'], correctIndex: 0, explanation: 'More intense the want, higher the utility.' },
        { id: 'q10', question: 'Gossen\'s First Law is also known as ______.', options: ['Law of Demand', 'Law of Supply', 'Law of DMU', 'Law of Equi-Marginal Utility'], correctIndex: 2, explanation: 'H.H. Gossen formulated it first.' },
        { id: 'q11', question: 'When MU becomes negative, TU ______.', options: ['Increases', 'Decreases', 'Remains Constant', 'Becomes Zero'], correctIndex: 1, explanation: 'Dissatisfaction sets in.' },
        { id: 'q12', question: 'A rational consumer wants to maximize ______.', options: ['Price', 'Satisfaction', 'Loss', 'Work'], correctIndex: 1, explanation: 'Goal of consumption.' },
        { id: 'q13', question: 'Utility is a ______ concept.', options: ['Objective', 'Subjective', 'Fixed', 'Constant'], correctIndex: 1, explanation: 'It exists in the mind of the consumer.' },
        { id: 'q14', question: 'Making furniture from wood is ______ utility.', options: ['Place', 'Time', 'Form', 'Service'], correctIndex: 2, explanation: 'Changing physical form.' },
        { id: 'q15', question: 'Transport services create ______ utility.', options: ['Place', 'Form', 'Time', 'Service'], correctIndex: 0, explanation: 'Moving goods from production to consumption area.' },
        { id: 'q16', question: 'Who popularized the Law of DMU?', options: ['Adam Smith', 'Alfred Marshall', 'Keynes', 'Gossen'], correctIndex: 1, explanation: 'In his book Principles of Economics.' },
        { id: 'q17', question: 'In case of hobbies, the Law of DMU ______.', options: ['Holds true', 'Does not hold true', 'Is constant', 'None'], correctIndex: 1, explanation: 'It is an exception; MU increases initially.' },
        { id: 'q18', question: 'Water has high ______ value but low ______ value.', options: ['Exchange, Use', 'Use, Exchange', 'Price, Cost', 'None'], correctIndex: 1, explanation: 'Paradox of Value.' },
        { id: 'q19', question: 'Diamond has high ______ value.', options: ['Use', 'Exchange', 'Form', 'Place'], correctIndex: 1, explanation: 'Due to scarcity.' },
        { id: 'q20', question: 'When MU is positive, TU ______.', options: ['Decreases', 'Increases', 'Constant', 'Zero'], correctIndex: 1, explanation: 'Total satisfaction keeps adding up.' },
        { id: 'q21', question: 'Which of these is an assumption of Law of DMU?', options: ['Heterogeneity', 'Discontinuity', 'Constancy', 'Irrationality'], correctIndex: 2, explanation: 'Income, taste, etc. must remain constant.' },
        { id: 'q22', question: 'The Law of DMU is applicable to ______.', options: ['Money', 'Music', 'Standard Units', 'Prestige goods'], correctIndex: 2, explanation: 'Spoon of water vs Glass of water.' },
        { id: 'q23', question: 'Measurement of utility in numbers is called ______ measurement.', options: ['Ordinal', 'Cardinal', 'Geometric', 'Scalar'], correctIndex: 1, explanation: 'Marshall assumed utils can be counted.' },
        { id: 'q24', question: 'Utility of a raincoat increases in ______.', options: ['Summer', 'Winter', 'Monsoon', 'Spring'], correctIndex: 2, explanation: 'Relative concept (Time).' },
        { id: 'q25', question: 'Service utility is provided by ______.', options: ['Carpenter', 'Doctor', 'Potter', 'Tailor'], correctIndex: 1, explanation: 'Professional service.' },
        { id: 'q26', question: 'For a drunkard, MU of liquor ______.', options: ['Increases', 'Decreases', 'Stops', 'None'], correctIndex: 0, explanation: 'Exception due to irrationality.' },
        { id: 'q27', question: 'Which is NOT a type of utility?', options: ['Form', 'Place', 'Price', 'Time'], correctIndex: 2, explanation: 'Price is not a type of utility.' },
        { id: 'q28', question: 'TU curve starts from ______.', options: ['Origin', 'X-axis', 'Y-axis', 'None'], correctIndex: 0, explanation: 'Zero consumption = Zero Utility.' },
        { id: 'q29', question: 'MU curve slopes ______.', options: ['Upward', 'Downward', 'Horizontal', 'Vertical'], correctIndex: 1, explanation: 'Negative slope.' },
        { id: 'q30', question: 'The basis of Law of Demand is ______.', options: ['Law of Supply', 'Law of DMU', 'Law of Returns', 'None'], correctIndex: 1, explanation: 'Consumer buys more at lower price because MU falls.' },
        { id: 'q31', question: 'Utility differs from pleasure means ______.', options: ['Injection has utility', 'Ice cream has utility', 'Game has utility', 'None'], correctIndex: 0, explanation: 'Injection cures (utility) but is painful (no pleasure).' },
        { id: 'q32', question: 'Single want is ______.', options: ['Unlimited', 'Satiable', 'Recurring', 'Gradable'], correctIndex: 1, explanation: 'It can be fully satisfied at a point of time.' },
        { id: 'q33', question: 'Wants differ with ______.', options: ['Age', 'Gender', 'Season', 'All of the above'], correctIndex: 3, explanation: 'Subjective and Relative nature.' },
        { id: 'q34', question: 'MU is shown on ______ axis.', options: ['X', 'Y', 'Z', 'None'], correctIndex: 1, explanation: 'Y-axis represents Utility.' },
        { id: 'q35', question: 'When TU falls, MU is ______.', options: ['Positive', 'Zero', 'Negative', 'Max'], correctIndex: 2, explanation: 'Disutility.' }
      ],
      reels: [
        { id: 'r1', title: 'Point of Satiety', content: 'Stop eating when MU = 0.\nBeyond this, satisfaction turns into dissatisfaction!', color: getReelColor(3) },
        { id: 'r2', title: 'DMU in Daily Life', content: 'The first glass of water implies high utility.\nThe 5th glass? Not so much.', color: getReelColor(4) },
        { id: 'r3', title: 'Exceptions to DMU', content: '1. Money\n2. Hobbies\n3. Addictions\n4. Power', color: getReelColor(5) },
        { id: 'r4', title: 'Form Utility', content: 'Clay -> Pot\nWood -> Chair\nValue added by changing shape.', color: getReelColor(6) },
        { id: 'r5', title: 'Place Utility', content: 'Woolen clothes in Kashmir > Mumbai.\nTransport creates Place Utility.', color: getReelColor(7) },
        { id: 'r6', title: 'Service Utility', content: 'Knowledge and skills of professionals.\nDoctors, Lawyers, Teachers.', color: getReelColor(8) },
        { id: 'r7', title: 'Knowledge Utility', content: 'Grandma learns to use a Smartphone.\nUtility increases with knowledge.', color: getReelColor(9) },
        { id: 'r8', title: 'Possession Utility', content: 'Transfer of ownership.\nShopkeeper -> Buyer.', color: getReelColor(0) },
        { id: 'r9', title: 'Time Utility', content: 'Storing grain for the lean season.\nBlood Banks.', color: getReelColor(1) },
        { id: 'r10', title: 'Relative Concept', content: 'Utility changes with time and place.\nUmbrella in rains vs winter.', color: getReelColor(2) },
        { id: 'r11', title: 'Subjective Concept', content: 'Utility is in the mind.\nA book has utility for literate, none for illiterate.', color: getReelColor(3) },
        { id: 'r12', title: 'Ethically Neutral', content: 'A knife can cut fruit or kill.\nUtility has no morals.', color: getReelColor(4) },
        { id: 'r13', title: 'Utility vs Pleasure', content: 'Bitter medicine has utility (cures you) but NO pleasure.', color: getReelColor(5) },
        { id: 'r14', title: 'Utility vs Usefulness', content: 'Liquor has utility for an addict, but it is harmful (not useful).', color: getReelColor(6) },
        { id: 'r15', title: 'Assumption: Rationality', content: 'Consumer is normal and wants to maximize satisfaction.', color: getReelColor(7) },
        { id: 'r16', title: 'Assumption: Cardinal', content: 'Utility can be counted in numbers (10, 20, 30).', color: getReelColor(8) },
        { id: 'r17', title: 'Assumption: Homogeneity', content: 'All units consumed are identical in size, shape, color.', color: getReelColor(9) },
        { id: 'r18', title: 'Assumption: Continuity', content: 'Consumption is quick and continuous. No breaks.', color: getReelColor(0) },
        { id: 'r19', title: 'Assumption: Reasonability', content: 'Units are of standard size. Not a spoon of water, a glass.', color: getReelColor(1) },
        { id: 'r20', title: 'Exception: Hobbies', content: 'Collecting stamps/coins.\nMU increases with collection.', color: getReelColor(2) },
        { id: 'r21', title: 'Exception: Miser', content: 'Every additional rupee gives him MORE satisfaction.', color: getReelColor(3) },
        { id: 'r22', title: 'Exception: Addictions', content: 'A drunkard\'s MU increases with every drink (Irrational).', color: getReelColor(4) },
        { id: 'r23', title: 'Exception: Power', content: 'Lust for power increases with every victory.', color: getReelColor(5) },
        { id: 'r24', title: 'Significance of Law', content: 'Helps Govt in taxation (Progressive Tax).\nHelps Monopolist in pricing.', color: getReelColor(6) }
      ]
    },
    {
      id: 'eco3a',
      title: '3A. Demand Analysis',
      description: 'Consumer behavior and Law of Demand.',
      summary: 'Demand = Desire + Ability + Willingness.\nLaw of Demand: Inverse relationship between Price and Quantity Demanded.',
      detailedNotes: '### 1. Meaning of Demand\nDemand is not just desire. It is effective desire.\nDemand = Desire + Willingness to pay + Ability to pay.\n\n### 2. Types of Demand\n* **Direct Demand**: Consumer goods (Food, Cloth).\n* **Indirect/Derived Demand**: Factors of production (Land, Labor).\n* **Complementary/Joint Demand**: Car & Fuel, Pen & Ink.\n* **Composite Demand**: Electricity (Light, Fan, AC).\n* **Competitive Demand**: Tea vs Coffee (Substitutes).\n\n### 3. Law of Demand\n**Statement**: "Other things being equal, higher the price, lower the demand and vice versa."\n**Curve**: Downward sloping from left to right.\n\n### 4. Determinants of Demand\nPrice, Income, Population, Tastes, Price of Substitutes, Taxation.\n\n### 5. Exceptions to Law of Demand\n* **Giffen Goods**: Inferior goods (Bread paradox).\n* **Prestige Goods**: Diamonds, Luxury cars.\n* **Speculation**: Expectation of future price rise.\n* **Price Illusion**: High price = High quality.',
      flashcards: [
        { id: 'f1', front: 'Formula of Demand', back: 'Desire + Willingness + Ability.' },
        { id: 'f2', front: 'Slope of Demand Curve', back: 'Downward sloping (Negative slope).' },
        { id: 'f3', front: 'Giffen Goods', back: 'Inferior goods where demand rises with price (Exception).' },
        { id: 'f4', front: 'Ceteris Paribus', back: 'Other things remaining constant.' },
        { id: 'f5', front: 'Individual vs Market Demand', back: 'Single consumer vs Sum of all consumers.' },
        { id: 'f6', front: 'Indirect Demand example', back: 'Demand for workers in a factory.' },
        { id: 'f7', front: 'Composite Demand example', back: 'Electricity (One commodity, many uses).' },
        { id: 'f8', front: 'Joint Demand example', back: 'Car and Petrol.' },
        { id: 'f9', front: 'Relationship: Price & Demand', back: 'Inverse (Opposite).' },
        { id: 'f10', front: 'Veblen Effect relates to?', back: 'Prestige Goods (Snob appeal).' },
        { id: 'f11', front: 'Increase in Demand', back: 'Shift to Right (Due to non-price factors).' },
        { id: 'f12', front: 'Expansion of Demand', back: 'Movement Down (Due to fall in price).' },
        { id: 'f13', front: 'Decrease in Demand', back: 'Shift to Left.' },
        { id: 'f14', front: 'Contraction of Demand', back: 'Movement Up (Due to rise in price).' }
      ],
      mcqs: [
        { id: 'q1', question: 'Demand curve slopes ______.', options: ['Upward', 'Downward', 'Vertical', 'Horizontal'], correctIndex: 1, explanation: 'Due to inverse relationship between price and quantity.' },
        { id: 'q2', question: 'Giffen goods are ______ goods.', options: ['Luxury', 'Inferior', 'Normal', 'Superior'], correctIndex: 1, explanation: 'Sir Robert Giffen observed this paradox with bread/meat.' },
        { id: 'q3', question: 'Demand for salt is ______.', options: ['Direct', 'Indirect', 'Elastic', 'Composite'], correctIndex: 0, explanation: 'Directly consumed by consumer.' },
        { id: 'q4', question: 'Electricity has ______ demand.', options: ['Joint', 'Composite', 'Competitive', 'Direct'], correctIndex: 1, explanation: 'It has several uses (lighting, heating, etc.).' },
        { id: 'q5', question: 'Tea and Coffee have ______ demand.', options: ['Joint', 'Composite', 'Competitive', 'Derived'], correctIndex: 2, explanation: 'They are substitutes for each other.' },
        { id: 'q6', question: 'Expansion of demand is caused by ______.', options: ['Increase in Income', 'Decrease in Price', 'Change in Taste', 'Decrease in Tax'], correctIndex: 1, explanation: 'Expansion/Contraction is always due to Price.' },
        { id: 'q7', question: 'Desire + Willingness + Ability = ______.', options: ['Supply', 'Demand', 'Utility', 'Stock'], correctIndex: 1, explanation: 'Effective demand.' },
        { id: 'q8', question: 'Demand for factors of production is ______.', options: ['Direct', 'Derived', 'Composite', 'None'], correctIndex: 1, explanation: 'Derived from demand for final goods.' },
        { id: 'q9', question: 'Complementary goods have ______ demand.', options: ['Joint', 'Competitive', 'Direct', 'Composite'], correctIndex: 0, explanation: 'Consumed together.' },
        { id: 'q10', question: 'Car and Petrol is an example of ______ demand.', options: ['Competitive', 'Joint', 'Composite', 'Direct'], correctIndex: 1, explanation: 'Both are needed to drive.' },
        { id: 'q11', question: 'Increase in price of substitute leads to ______ in demand.', options: ['Decrease', 'Increase', 'No change', 'Zero'], correctIndex: 1, explanation: 'People shift to the cheaper good.' },
        { id: 'q12', question: 'Income is a ______ of demand.', options: ['Measure', 'Determinant', 'Result', 'Type'], correctIndex: 1, explanation: 'It influences purchasing power.' },
        { id: 'q13', question: 'Decrease in demand is shown by ______.', options: ['Movement up', 'Movement down', 'Shift Left', 'Shift Right'], correctIndex: 2, explanation: 'Leftward shift.' },
        { id: 'q14', question: 'Contraction of demand is due to ______.', options: ['Fall in Price', 'Rise in Price', 'Fall in Income', 'Rise in Tax'], correctIndex: 1, explanation: 'Price effect.' },
        { id: 'q15', question: 'Prestige goods are an exception because of ______.', options: ['Veblen Effect', 'Giffen Paradox', 'Demonstration Effect', 'None'], correctIndex: 0, explanation: 'Snob appeal.' },
        { id: 'q16', question: 'Market demand curve is ______ sum of individual demand curves.', options: ['Vertical', 'Horizontal', 'Diagonal', 'None'], correctIndex: 1, explanation: 'Lateral summation.' },
        { id: 'q17', question: 'Expectation of future fall in price will ______ current demand.', options: ['Increase', 'Decrease', 'Stabilize', 'Stop'], correctIndex: 1, explanation: 'Consumers will wait to buy cheaper later.' },
        { id: 'q18', question: 'Demand for sugar is ______ demand.', options: ['Direct', 'Derived', 'Composite', 'Joint'], correctIndex: 2, explanation: 'Used for tea, sweets, milk (Multiple uses).' },
        { id: 'q19', question: 'Which is NOT a determinant of demand?', options: ['Price', 'Population', 'Cost of Production', 'Tastes'], correctIndex: 2, explanation: 'Cost affects Supply, not Demand directly.' },
        { id: 'q20', question: 'Law of Demand was stated by ______.', options: ['Adam Smith', 'Alfred Marshall', 'Keynes', 'Robbins'], correctIndex: 1, explanation: 'In Principles of Economics.' },
        { id: 'q21', question: 'Indirect demand is also called ______ demand.', options: ['Derived', 'Direct', 'Joint', 'Composite'], correctIndex: 0, explanation: 'Derived from final product.' },
        { id: 'q22', question: 'When income rises, demand for normal goods ______.', options: ['Falls', 'Rises', 'Stops', 'Constant'], correctIndex: 1, explanation: 'Positive relationship.' },
        { id: 'q23', question: 'When income rises, demand for inferior goods ______.', options: ['Falls', 'Rises', 'Constant', 'None'], correctIndex: 0, explanation: 'Negative income effect.' },
        { id: 'q24', question: 'Demonstration effect affects ______.', options: ['Supply', 'Demand', 'Cost', 'Revenue'], correctIndex: 1, explanation: 'Imitating others consumption.' },
        { id: 'q25', question: 'Demand curve for Giffen goods slopes ______.', options: ['Upward', 'Downward', 'Horizontal', 'Vertical'], correctIndex: 0, explanation: 'Positive slope (Exception).' },
        { id: 'q26', question: 'Decrease in tax leads to ______ in demand.', options: ['Increase', 'Decrease', 'Contraction', 'None'], correctIndex: 0, explanation: 'Products become cheaper.' },
        { id: 'q27', question: 'Demand Schedule is a ______ representation.', options: ['Graphical', 'Tabular', 'Oral', 'Visual'], correctIndex: 1, explanation: 'Table of P vs Q.' },
        { id: 'q28', question: 'Which of the following is a substitute?', options: ['Tea & Sugar', 'Pen & Ink', 'Pepsi & Coke', 'Car & Petrol'], correctIndex: 2, explanation: 'Competitive demand.' },
        { id: 'q29', question: 'Seasonal demand example:', options: ['Raincoat', 'Salt', 'Rice', 'Soap'], correctIndex: 0, explanation: 'Demand varies with season.' },
        { id: 'q30', question: 'Habitual goods have ______ demand.', options: ['Elastic', 'Inelastic', 'Zero', 'Infinite'], correctIndex: 1, explanation: 'Price does not affect consumption much.' },
        { id: 'q31', question: 'Price Effect = ______ + ______.', options: ['Income + Substitution', 'Giffen + Veblen', 'Direct + Indirect', 'None'], correctIndex: 0, explanation: 'Decomposition of Price Effect.' },
        { id: 'q32', question: 'Increase in population shifts demand curve to ______.', options: ['Left', 'Right', 'Up', 'Down'], correctIndex: 1, explanation: 'More buyers = More demand.' },
        { id: 'q33', question: 'Speculation implies ______.', options: ['Gambling', 'Future Expectations', 'Production', 'None'], correctIndex: 1, explanation: 'Anticipating price changes.' },
        { id: 'q34', question: 'Symbol Dx stands for ______.', options: ['Demand for x', 'Price of x', 'Supply of x', 'Income'], correctIndex: 0, explanation: 'Quantity demanded of commodity X.' },
        { id: 'q35', question: 'Demand without ability to pay is ______.', options: ['Effective', 'Desire', 'Need', 'Supply'], correctIndex: 1, explanation: 'Just a wish.' }
      ],
      reels: [
        { id: 'r1', title: 'Demand Rule', content: 'Price UP ⬆️\nDemand DOWN ⬇️\n(Inverse Relationship)', color: getReelColor(5) },
        { id: 'r2', title: 'Giffen Paradox', content: 'In inferior goods, when price drops, people buy LESS to shift to better goods.', color: getReelColor(6) },
        { id: 'r3', title: 'Composite Demand', content: 'One thing, Many uses.\nMilk: Tea, Curd, Cheese, Sweets.', color: getReelColor(0) },
        { id: 'r4', title: 'Expansion vs Increase', content: 'Expansion: Due to Price (Same curve).\nIncrease: Due to Income/Taste (Shift curve).', color: getReelColor(1) },
        { id: 'r5', title: 'Direct Demand', content: 'Demand for Clothes, Food, Mobile.\nDirectly satisfies need.', color: getReelColor(2) },
        { id: 'r6', title: 'Indirect Demand', content: 'Demand for Land, Labor, Capital.\nDerived from demand for goods.', color: getReelColor(3) },
        { id: 'r7', title: 'Joint Demand', content: 'Ink and Pen.\nCar and Petrol.\nTwo things needed together.', color: getReelColor(4) },
        { id: 'r8', title: 'Competitive Demand', content: 'Coke vs Pepsi.\nTea vs Coffee.\nSubstitutes compete.', color: getReelColor(5) },
        { id: 'r9', title: 'Determinant: Price', content: 'The biggest factor affecting demand.', color: getReelColor(6) },
        { id: 'r10', title: 'Determinant: Income', content: 'More money = More shopping.\nPositive relationship (usually).', color: getReelColor(7) },
        { id: 'r11', title: 'Determinant: Population', content: 'More people = More demand for food/housing.', color: getReelColor(8) },
        { id: 'r12', title: 'Determinant: Tastes', content: 'Fashion changes.\nJeans in, Bell-bottoms out.', color: getReelColor(9) },
        { id: 'r13', title: 'Exception: Prestige', content: 'Diamonds/Luxury Cars.\nRich buy MORE when price is HIGH.', color: getReelColor(0) },
        { id: 'r14', title: 'Exception: Speculation', content: 'Stock Market.\nPrice rising? Buy MORE before it rises further!', color: getReelColor(1) },
        { id: 'r15', title: 'Exception: Price Illusion', content: '"It\'s expensive, so it must be good quality!"', color: getReelColor(2) },
        { id: 'r16', title: 'Exception: Habit', content: 'Addicted people buy even if price rises.', color: getReelColor(3) },
        { id: 'r17', title: 'Individual Demand', content: 'Demand by ONE consumer.', color: getReelColor(4) },
        { id: 'r18', title: 'Market Demand', content: 'Sum of ALL individual demands.', color: getReelColor(5) },
        { id: 'r19', title: 'Demand Schedule', content: 'Table showing Price vs Quantity.', color: getReelColor(6) },
        { id: 'r20', title: 'Demand Curve', content: 'Graphical representation of demand schedule.', color: getReelColor(7) },
        { id: 'r21', title: 'Shift in Demand', content: 'Curve moves Left or Right.\nPrice remains same.', color: getReelColor(8) },
        { id: 'r22', title: 'Movement along Curve', content: 'Expansion or Contraction.\nDue to Price change.', color: getReelColor(9) }
      ]
    },
    {
      id: 'eco3b',
      title: '3B. Elasticity of Demand',
      description: 'Responsiveness of demand to change in price.',
      summary: '**Elasticity**: Degree of responsiveness.\n**Types**: Price, Income, Cross.\n**Methods**: Ratio, Outlay, Point.',
      detailedNotes: '### 1. Types of Elasticity\n* **Price Elasticity**: Response to price change.\n* **Income Elasticity**: Response to income change (Normal +, Inferior -).\n* **Cross Elasticity**: Response to price of substitute/complement.\n\n### 2. Types of Price Elasticity\n1. **Perfectly Elastic (Ed = ∞)**: Horizontal curve. Slight price change = infinite demand change.\n2. **Perfectly Inelastic (Ed = 0)**: Vertical curve. No change in demand.\n3. **Unitary Elastic (Ed = 1)**: Rectangular Hyperbola. % Change in Q = % Change in P.\n4. **Relatively Elastic (Ed > 1)**: Flatter curve. Luxury goods.\n5. **Relatively Inelastic (Ed < 1)**: Steeper curve. Essential goods.\n\n### 3. Methods of Measurement\n* **Ratio/Percentage Method**: %ΔQ / %ΔP.\n* **Total Expenditure (Outlay) Method**: Marshall. Compare Total Expenditure before and after price change.\n* **Point/Geometric Method**: Lower Segment / Upper Segment.',
      flashcards: [
        { id: 'f1', front: 'Ed = 0', back: 'Perfectly Inelastic Demand (Vertical Line).' },
        { id: 'f2', front: 'Ed = 1', back: 'Unitary Elastic Demand (Rectangular Hyperbola).' },
        { id: 'f3', front: 'Ed > 1', back: 'Relatively Elastic (Luxury Goods).' },
        { id: 'f4', front: 'Ed < 1', back: 'Relatively Inelastic (Necessities).' },
        { id: 'f5', front: 'Ed = ∞', back: 'Perfectly Elastic (Horizontal Line).' },
        { id: 'f6', front: 'Expenditure Method', back: 'Also called Outlay Method by Marshall.' },
        { id: 'f7', front: 'Point Method Formula', back: 'Lower Segment / Upper Segment.' },
        { id: 'f8', front: 'Cross Elasticity for Substitutes', back: 'Positive (Tea Price up, Coffee Demand up).' },
        { id: 'f9', front: 'Cross Elasticity for Complements', back: 'Negative (Car Price up, Petrol Demand down).' },
        { id: 'f10', front: 'Factors: Durable Goods', back: 'Relatively Elastic.' },
        { id: 'f11', front: 'Factors: Habits', back: 'Inelastic demand.' },
        { id: 'f12', front: 'Factors: Urgency', back: 'Urgent needs are Inelastic.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Ed = 1 is known as ______.', options: ['Unitary', 'Elastic', 'Inelastic', 'Perfect'], correctIndex: 0, explanation: 'Rectangular Hyperbola curve.' },
        { id: 'q2', question: 'For salt, demand is likely ______.', options: ['Elastic', 'Inelastic', 'Unitary', 'Perfectly Elastic'], correctIndex: 1, explanation: 'Essential goods have inelastic demand.' },
        { id: 'q3', question: 'Point method is also known as ______.', options: ['Geometric', 'Ratio', 'Income', 'Arc'], correctIndex: 0, explanation: 'Used for linear demand curves.' },
        { id: 'q4', question: 'Demand for luxury cars is ______.', options: ['Inelastic', 'Elastic', 'Unitary', 'Perfectly Inelastic'], correctIndex: 1, explanation: 'Price sensitive.' },
        { id: 'q5', question: 'If % Change in Qty > % Change in Price, it is ______.', options: ['Ed > 1', 'Ed < 1', 'Ed = 1', 'Ed = 0'], correctIndex: 0, explanation: 'Relatively Elastic.' },
        { id: 'q6', question: 'Perfectly inelastic demand curve is ______.', options: ['Horizontal', 'Vertical', 'Downward', 'Upward'], correctIndex: 1, explanation: 'Parallel to Y-axis.' },
        { id: 'q7', question: 'Perfectly elastic demand curve is ______.', options: ['Horizontal', 'Vertical', 'Downward', 'Upward'], correctIndex: 0, explanation: 'Parallel to X-axis.' },
        { id: 'q8', question: 'Unitary elastic curve is ______.', options: ['Straight Line', 'Rectangular Hyperbola', 'U-shaped', 'Vertical'], correctIndex: 1, explanation: 'Area under curve is constant.' },
        { id: 'q9', question: 'In Total Outlay method, if Exp remains same, Ed is ______.', options: ['0', '1', '>1', '<1'], correctIndex: 1, explanation: 'Unitary Elastic.' },
        { id: 'q10', question: 'Cross elasticity for tea and coffee is ______.', options: ['Positive', 'Negative', 'Zero', 'Infinite'], correctIndex: 0, explanation: 'Substitutes.' },
        { id: 'q11', question: 'Cross elasticity for car and petrol is ______.', options: ['Positive', 'Negative', 'Zero', 'Infinite'], correctIndex: 1, explanation: 'Complements.' },
        { id: 'q12', question: 'If Ed = 0, demand is ______.', options: ['Perfectly Elastic', 'Perfectly Inelastic', 'Unitary', 'Relative'], correctIndex: 1, explanation: 'No change in demand.' },
        { id: 'q13', question: 'Geometric method uses formula ______.', options: ['Lower/Upper', 'Upper/Lower', 'P/Q', 'Q/P'], correctIndex: 0, explanation: 'Segment of line.' },
        { id: 'q14', question: 'Ratio method formula is ______.', options: ['%∆Q / %∆P', '%∆P / %∆Q', '∆Q / ∆P', 'None'], correctIndex: 0, explanation: 'Percentage change method.' },
        { id: 'q15', question: 'Income elasticity is positive for ______ goods.', options: ['Normal', 'Inferior', 'Giffen', 'None'], correctIndex: 0, explanation: 'Income up, Demand up.' },
        { id: 'q16', question: 'Income elasticity is negative for ______ goods.', options: ['Normal', 'Inferior', 'Luxury', 'Superior'], correctIndex: 1, explanation: 'Income up, Demand down.' },
        { id: 'q17', question: 'Steeper demand curve implies ______ demand.', options: ['Elastic', 'Inelastic', 'Perfectly Elastic', 'Unitary'], correctIndex: 1, explanation: 'Less responsive to price.' },
        { id: 'q18', question: 'Flatter demand curve implies ______ demand.', options: ['Elastic', 'Inelastic', 'Zero', 'Unitary'], correctIndex: 0, explanation: 'More responsive to price.' },
        { id: 'q19', question: 'Concept of Elasticity was given by ______.', options: ['Adam Smith', 'Marshall', 'Keynes', 'Robbins'], correctIndex: 1, explanation: 'Alfred Marshall.' },
        { id: 'q20', question: 'Demand for medicine is ______.', options: ['Elastic', 'Inelastic', 'Perfectly Elastic', 'Unitary'], correctIndex: 1, explanation: 'Urgency makes it inelastic.' },
        { id: 'q21', question: 'Demand for durables is ______.', options: ['Elastic', 'Inelastic', 'Unitary', 'Zero'], correctIndex: 0, explanation: 'Purchase can be postponed.' },
        { id: 'q22', question: 'If many substitutes are available, demand is ______.', options: ['Elastic', 'Inelastic', 'Zero', 'One'], correctIndex: 0, explanation: 'Easy to switch.' },
        { id: 'q23', question: 'In the long run, demand is ______.', options: ['Elastic', 'Inelastic', 'Zero', 'Fixed'], correctIndex: 0, explanation: 'Habits can change over time.' },
        { id: 'q24', question: 'Demand for addictive goods is ______.', options: ['Elastic', 'Inelastic', 'Perfectly Elastic', 'Unitary'], correctIndex: 1, explanation: 'Habit makes it inelastic.' },
        { id: 'q25', question: 'On a straight line demand curve, midpoint elasticity is ______.', options: ['0', '1', 'Infinity', '>1'], correctIndex: 1, explanation: 'Lower = Upper.' },
        { id: 'q26', question: 'At Y-axis intercept, elasticity is ______.', options: ['0', '1', 'Infinity', 'None'], correctIndex: 2, explanation: 'Upper segment is 0.' },
        { id: 'q27', question: 'At X-axis intercept, elasticity is ______.', options: ['0', '1', 'Infinity', 'None'], correctIndex: 0, explanation: 'Lower segment is 0.' },
        { id: 'q28', question: 'Total Expenditure Method measures ______.', options: ['Price Elasticity', 'Income Elasticity', 'Cross Elasticity', 'None'], correctIndex: 0, explanation: 'Marshall\'s method.' },
        { id: 'q29', question: 'If Price rises and Total Exp falls, Ed is ______.', options: ['>1', '<1', '1', '0'], correctIndex: 0, explanation: 'Inverse relation between P and TE means Elastic.' },
        { id: 'q30', question: 'If Price rises and Total Exp rises, Ed is ______.', options: ['>1', '<1', '1', '0'], correctIndex: 1, explanation: 'Direct relation means Inelastic.' },
        { id: 'q31', question: 'Degree of responsiveness of demand to change in price is ______.', options: ['Price Elasticity', 'Income Elasticity', 'Cross Elasticity', 'Substitution'], correctIndex: 0, explanation: 'Definition.' },
        { id: 'q32', question: 'Ed = Infinity represents ______.', options: ['Perfectly Elastic', 'Perfectly Inelastic', 'Unitary', 'Relative'], correctIndex: 0, explanation: 'Horizontal curve.' },
        { id: 'q33', question: 'Which factor makes demand inelastic?', options: ['No substitutes', 'Luxury', 'Low price', 'Durability'], correctIndex: 0, explanation: 'Dependency.' },
        { id: 'q34', question: 'Complementary goods have ______ cross elasticity.', options: ['Negative', 'Positive', 'Zero', 'Infinite'], correctIndex: 0, explanation: 'Inverse relationship.' },
        { id: 'q35', question: 'Substitute goods have ______ cross elasticity.', options: ['Negative', 'Positive', 'Zero', 'Infinite'], correctIndex: 1, explanation: 'Direct relationship.' }
      ],
      reels: [
        { id: 'r1', title: 'Ed = 0', content: 'No matter the price, I need my medicine.\n(Perfectly Inelastic)', color: getReelColor(0) },
        { id: 'r2', title: 'Ed > 1', content: 'Small discount on iPhone -> Huge sales jump!\n(Relatively Elastic)', color: getReelColor(1) },
        { id: 'r3', title: 'Rectangular Hyperbola', content: 'The shape of the curve when Ed = 1.\nUniform elasticity.', color: getReelColor(2) },
        { id: 'r4', title: 'Point Method', content: 'L / U\nLower segment / Upper segment.', color: getReelColor(3) },
        { id: 'r5', title: 'Ed < 1', content: 'Price doubles, but demand falls only slightly.\n(Salt/Milk).', color: getReelColor(4) },
        { id: 'r6', title: 'Ed = Infinity', content: 'Imaginary situation.\nSlight price rise, demand becomes zero.', color: getReelColor(5) },
        { id: 'r7', title: 'Income Elasticity', content: 'Responsiveness to change in Income.\nNormal Goods (+), Inferior (-).', color: getReelColor(6) },
        { id: 'r8', title: 'Cross Elasticity', content: 'Tea Price vs Coffee Demand.\nSubstitutes (+), Complements (-).', color: getReelColor(7) },
        { id: 'r9', title: 'Ratio Method', content: '% Change in Q / % Change in P.\nMost common formula.', color: getReelColor(8) },
        { id: 'r10', title: 'Total Outlay Method', content: 'Price x Quantity.\nIf P rises and Exp rises -> Inelastic.', color: getReelColor(9) },
        { id: 'r11', title: 'Geometric Method', content: 'Used when demand curve is a straight line.', color: getReelColor(0) },
        { id: 'r12', title: 'Factor: Nature of Goods', content: 'Necessities = Inelastic.\nLuxuries = Elastic.', color: getReelColor(1) },
        { id: 'r13', title: 'Factor: Substitutes', content: 'More substitutes available = More Elastic.', color: getReelColor(2) },
        { id: 'r14', title: 'Factor: Number of Uses', content: 'Coal/Electricity = Elastic (Multiple uses).', color: getReelColor(3) },
        { id: 'r15', title: 'Factor: Habits', content: 'Addicted goods = Inelastic.', color: getReelColor(4) },
        { id: 'r16', title: 'Factor: Durability', content: 'Durable goods (TV/Fridge) = Elastic.\nPerishable = Inelastic.', color: getReelColor(5) },
        { id: 'r17', title: 'Factor: Income Level', content: 'Super rich = Inelastic demand.', color: getReelColor(6) },
        { id: 'r18', title: 'Factor: Time Period', content: 'Long run = Elastic.\nShort run = Inelastic.', color: getReelColor(7) },
        { id: 'r19', title: 'Importance: Producer', content: 'Helps fix prices.\nInelastic demand? Charge more.', color: getReelColor(8) },
        { id: 'r20', title: 'Importance: Govt', content: 'Tax goods with Inelastic demand (Cigarettes/Liquor).', color: getReelColor(9) },
        { id: 'r21', title: 'Importance: Factors', content: 'Factor pricing.\nSkilled labor (scarce) = Inelastic supply.', color: getReelColor(0) },
        { id: 'r22', title: 'Importance: Foreign Trade', content: 'Devaluation policy depends on elasticity of exports.', color: getReelColor(1) }
      ]
    },
    {
      id: 'eco4',
      title: '4. Supply Analysis',
      description: 'Producer behavior and Law of Supply.',
      summary: '**Supply**: Quantity offered for sale at a price.\n**Stock**: Total quantity available.\n**Law**: Direct relationship between Price and Supply.',
      detailedNotes: '### 1. Stock vs Supply\n* **Stock**: Source of supply. Potential supply. Fixed at a point of time.\n* **Supply**: Flow concept. Actual quantity offered for sale.\n* **Output**: Production result.\n\n### 2. Law of Supply\n**Statement**: "Higher the price, higher the supply."\n**Curve**: Upward sloping (Positive slope).\n\n### 3. Exceptions\n* **Labor Supply**: Backward bending curve (Income effect vs Substitution effect). At high wages, preference for leisure.\n* **Perishable Goods**: Seller sells even at low price.\n* **Agricultural Goods**: Depends on weather, not just price.\n* **Need for Cash**: Distress sale.\n\n### 4. Cost Concepts\n* **Total Cost (TC)**: TFC + TVC.\n* **Average Cost (AC)**: TC / Q.\n* **Marginal Cost (MC)**: Cost of additional unit.\n\n### 5. Revenue Concepts\n* **Total Revenue (TR)**: P x Q.\n* **Average Revenue (AR)**: TR / Q (= Price).\n* **Marginal Revenue (MR)**: Rev from additional unit.',
      flashcards: [
        { id: 'f1', front: 'Stock vs Supply', back: 'Stock is potential, Supply is actual offer for sale.' },
        { id: 'f2', front: 'Slope of Supply Curve', back: 'Upward sloping (Positive).' },
        { id: 'f3', front: 'Backward Bending Curve', back: 'Supply of Labor at high wage rates.' },
        { id: 'f4', front: 'Determinant of Supply', back: 'Cost of Production, Technology, Govt Policy.' },
        { id: 'f5', front: 'Total Cost Formula', back: 'Total Fixed Cost (TFC) + Total Variable Cost (TVC).' },
        { id: 'f6', front: 'Average Revenue is also?', back: 'Price per unit.' },
        { id: 'f7', front: 'Exception to Supply', back: 'Rare articles (Antique coins).' },
        { id: 'f8', front: 'Extension of Supply', back: 'Movement Up (Due to price rise).' },
        { id: 'f9', front: 'Contraction of Supply', back: 'Movement Down (Due to price fall).' },
        { id: 'f10', front: 'Shift in Supply', back: 'Increase/Decrease due to non-price factors.' },
        { id: 'f11', front: 'Marginal Cost', back: 'Cost of producing one extra unit.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Supply is a ______ concept.', options: ['Stock', 'Flow', 'Static', 'Fixed'], correctIndex: 1, explanation: 'It is measured over a period of time.' },
        { id: 'q2', question: 'Supply curve of labor is ______.', options: ['Upward', 'Downward', 'Backward Bending', 'Vertical'], correctIndex: 2, explanation: 'Due to preference for leisure at high income.' },
        { id: 'q3', question: 'Total Revenue = ______.', options: ['Price x Qty', 'Cost + Profit', 'Price / Qty', 'None'], correctIndex: 0, explanation: 'Total money received from sales.' },
        { id: 'q4', question: 'Stock is ______ supply.', options: ['Equal to', 'Greater than', 'Less than', 'Greater than or equal to'], correctIndex: 3, explanation: 'Supply cannot exceed stock.' },
        { id: 'q5', question: 'Average Cost = ______.', options: ['TC/Q', 'TC x Q', 'TFC + TVC', 'MC x Q'], correctIndex: 0, explanation: 'Cost per unit.' },
        { id: 'q6', question: 'Law of Supply shows ______ relationship.', options: ['Inverse', 'Direct', 'No', 'Constant'], correctIndex: 1, explanation: 'Price UP, Supply UP.' },
        { id: 'q7', question: 'Supply curve slopes ______.', options: ['Upward', 'Downward', 'Vertical', 'Horizontal'], correctIndex: 0, explanation: 'From left to right.' },
        { id: 'q8', question: 'Cost of production is a ______ of supply.', options: ['Determinant', 'Result', 'Type', 'None'], correctIndex: 0, explanation: 'High cost reduces supply.' },
        { id: 'q9', question: 'Extension of supply occurs due to ______.', options: ['Rise in Price', 'Fall in Price', 'Better Tech', 'Subsidies'], correctIndex: 0, explanation: 'Movement along curve.' },
        { id: 'q10', question: 'Contraction of supply occurs due to ______.', options: ['Fall in Price', 'Rise in Price', 'Tax', 'Cost'], correctIndex: 0, explanation: 'Movement down the curve.' },
        { id: 'q11', question: 'Increase in supply is due to ______.', options: ['Price', 'Non-price factors', 'Demand', 'Income'], correctIndex: 1, explanation: 'Tech, Subsidy, etc. shifts curve right.' },
        { id: 'q12', question: 'Stock is a ______ variable.', options: ['Flow', 'Static', 'Dynamic', 'None'], correctIndex: 1, explanation: 'Measured at a point of time.' },
        { id: 'q13', question: 'Perishable goods have ______ supply.', options: ['Inelastic', 'Elastic', 'Fixed', 'Variable'], correctIndex: 0, explanation: 'Cannot be stored long.' },
        { id: 'q14', question: 'Marginal Cost is cost of ______ unit.', options: ['First', 'Last', 'Middle', 'Total'], correctIndex: 1, explanation: 'Additional unit.' },
        { id: 'q15', question: 'Total Fixed Cost ______ with output.', options: ['Changes', 'Remains constant', 'Increases', 'Decreases'], correctIndex: 1, explanation: 'E.g., Rent.' },
        { id: 'q16', question: 'Total Variable Cost ______ with output.', options: ['Changes', 'Remains constant', 'Falls', 'None'], correctIndex: 0, explanation: 'Increases with production.' },
        { id: 'q17', question: 'Average Revenue curve is same as ______ curve.', options: ['Supply', 'Demand', 'Cost', 'None'], correctIndex: 1, explanation: 'It represents Price/Demand.' },
        { id: 'q18', question: 'Backward bending supply curve is for ______.', options: ['Land', 'Labor', 'Capital', 'Entrepreneur'], correctIndex: 1, explanation: 'Work-Leisure trade-off.' },
        { id: 'q19', question: 'Distress sale usually happens at ______ price.', options: ['High', 'Low', 'Market', 'Cost'], correctIndex: 1, explanation: 'Urgent need for cash.' },
        { id: 'q20', question: 'Which is NOT a determinant of supply?', options: ['Income of consumer', 'Cost of production', 'Technology', 'Govt Policy'], correctIndex: 0, explanation: 'Income determines Demand.' },
        { id: 'q21', question: 'Supply of agricultural goods depends on ______.', options: ['Price', 'Weather', 'Technology', 'All'], correctIndex: 3, explanation: 'Natural factors play key role.' },
        { id: 'q22', question: 'Stock is the ______ of supply.', options: ['Result', 'Source', 'Outcome', 'None'], correctIndex: 1, explanation: 'Supply comes from Stock.' },
        { id: 'q23', question: 'At a very high wage rate, labor supply ______.', options: ['Increases', 'Decreases', 'Stays same', 'Stops'], correctIndex: 1, explanation: 'Due to preference for leisure.' },
        { id: 'q24', question: 'Supply of rare articles is ______.', options: ['Elastic', 'Inelastic', 'Perfectly Inelastic', 'Unitary'], correctIndex: 2, explanation: 'Cannot be increased.' },
        { id: 'q25', question: 'Decrease in supply shifts curve to ______.', options: ['Right', 'Left', 'Up', 'Down'], correctIndex: 1, explanation: 'Less supply at same price.' },
        { id: 'q26', question: 'Profit = ______ - ______.', options: ['TR - TC', 'AR - AC', 'MR - MC', 'None'], correctIndex: 0, explanation: 'Revenue minus Cost.' },
        { id: 'q27', question: 'Marginal Revenue = ______.', options: ['TRn - TRn-1', 'TR / Q', 'P x Q', 'None'], correctIndex: 0, explanation: 'Formula.' },
        { id: 'q28', question: 'In the short run, supply is ______.', options: ['Elastic', 'Inelastic', 'Fixed', 'Variable'], correctIndex: 1, explanation: 'Hard to change factors.' },
        { id: 'q29', question: 'In the long run, supply is ______.', options: ['Elastic', 'Inelastic', 'Fixed', 'Variable'], correctIndex: 0, explanation: 'All factors can be changed.' },
        { id: 'q30', question: 'Subsidy by Govt ______ supply.', options: ['Increases', 'Decreases', 'Stops', 'None'], correctIndex: 0, explanation: 'Reduces cost of production.' },
        { id: 'q31', question: 'Taxation by Govt ______ supply.', options: ['Increases', 'Decreases', 'Stops', 'None'], correctIndex: 1, explanation: 'Increases cost of production.' },
        { id: 'q32', question: 'Output is obtained from ______.', options: ['Input', 'Stock', 'Supply', 'Market'], correctIndex: 0, explanation: 'Processing inputs.' },
        { id: 'q33', question: 'Vertical supply curve implies ______ elasticity.', options: ['Zero', 'One', 'Infinite', 'Negative'], correctIndex: 0, explanation: 'Fixed supply.' },
        { id: 'q34', question: 'Horizontal supply curve implies ______ elasticity.', options: ['Zero', 'One', 'Infinite', 'Negative'], correctIndex: 2, explanation: 'Unlimited supply at a price.' },
        { id: 'q35', question: 'Supply involves ______.', options: ['Willingness', 'Ability', 'Stock', 'All'], correctIndex: 3, explanation: 'Willingness and Ability to sell.' }
      ],
      reels: [
        { id: 'r1', title: 'Supply Rule', content: 'Price UP ⬆️\nSupply UP ⬆️\n(Direct Relationship)', color: getReelColor(2) },
        { id: 'r2', title: 'Stock > Supply', content: 'Stock is what is in the godown.\nSupply is what is on the shop shelf.', color: getReelColor(3) },
        { id: 'r3', title: 'Backward Bending', content: 'Initially work more for money.\nLater work less for leisure.', color: getReelColor(4) },
        { id: 'r4', title: 'Output', content: 'Result of production process.\nRaw Material -> Finished Good.', color: getReelColor(5) },
        { id: 'r5', title: 'Individual Supply', content: 'Supply by ONE firm.', color: getReelColor(6) },
        { id: 'r6', title: 'Market Supply', content: 'Sum of all firms\' supply.', color: getReelColor(7) },
        { id: 'r7', title: 'Supply Schedule', content: 'Table showing Price vs Supply.', color: getReelColor(8) },
        { id: 'r8', title: 'Determinant: Cost', content: 'Cost UP -> Profit DOWN -> Supply DOWN.', color: getReelColor(9) },
        { id: 'r9', title: 'Determinant: Tech', content: 'Better Tech -> Cost DOWN -> Supply UP.', color: getReelColor(0) },
        { id: 'r10', title: 'Determinant: Transport', content: 'Better roads -> Faster supply -> Supply UP.', color: getReelColor(1) },
        { id: 'r11', title: 'Exception: Perishable', content: 'Fish/Milk. Seller sells quickly even at low price.', color: getReelColor(2) },
        { id: 'r12', title: 'Exception: Rare Goods', content: 'Mona Lisa painting. Supply cannot be increased.', color: getReelColor(3) },
        { id: 'r13', title: 'Total Cost', content: 'Fixed Cost (Rent) + Variable Cost (Raw Material).', color: getReelColor(4) },
        { id: 'r14', title: 'Fixed Cost', content: 'Does not change with output.\nRent, Salaries.', color: getReelColor(5) },
        { id: 'r15', title: 'Variable Cost', content: 'Changes with output.\nFuel, Raw Material.', color: getReelColor(6) },
        { id: 'r16', title: 'Average Cost', content: 'Cost per unit.\nTC divided by Quantity.', color: getReelColor(7) },
        { id: 'r17', title: 'Marginal Cost', content: 'Net addition to Total Cost by producing one more unit.', color: getReelColor(8) },
        { id: 'r18', title: 'Total Revenue', content: 'Money earned from sales.\nP x Q.', color: getReelColor(9) },
        { id: 'r19', title: 'Average Revenue', content: 'Revenue per unit.\nUsually same as Price.', color: getReelColor(0) },
        { id: 'r20', title: 'Marginal Revenue', content: 'Net addition to TR by selling one more unit.', color: getReelColor(1) },
        { id: 'r21', title: 'Extension of Supply', content: 'Upward movement on same curve.\nDue to Price rise.', color: getReelColor(2) },
        { id: 'r22', title: 'Increase in Supply', content: 'Shift to Right.\nDue to good tech/subsidy.', color: getReelColor(3) }
      ]
    },
    {
      id: 'eco5',
      title: '5. Forms of Market',
      description: 'Perfect Competition, Monopoly, Oligopoly.',
      summary: '**Perfect Competition**: Many sellers, homogeneous product.\n**Monopoly**: Single seller, price maker.\n**Oligopoly**: Few sellers.',
      detailedNotes: '### 1. Perfect Competition\nIdeal market.\n* **Large number of buyers & sellers**.\n* **Homogeneous product** (Identical).\n* **Free entry/exit**.\n* **Single Price** (Price Taker).\n* **Perfect Knowledge**.\n\n### 2. Monopoly\n"Mono" (Single) + "Poly" (Seller).\n* **Single seller**.\n* **No close substitutes**.\n* **Price Maker**.\n* **Barriers to entry**.\n* **Price Discrimination** (Charging different prices).\n\n### 3. Oligopoly\n"Oligo" (Few).\n* **Few sellers** (Interdependence).\n* **Entry barriers**.\n* **Uncertainty**.\n\n### 4. Monopolistic Competition\nReal world market (Chamberlin).\n* **Many sellers**.\n* **Product Differentiation** (Brand, Pack).\n* **Selling Cost** (Ads).\n* **Close substitutes**.',
      flashcards: [
        { id: 'f1', front: 'Price Maker', back: 'Monopoly.' },
        { id: 'f2', front: 'Price Taker', back: 'Perfect Competition.' },
        { id: 'f3', front: 'Product Differentiation', back: 'Feature of Monopolistic Competition.' },
        { id: 'f4', front: 'Few Sellers', back: 'Oligopoly.' },
        { id: 'f5', front: 'Selling Cost', back: 'Expenditure on Advertisement (Monopolistic Comp).' },
        { id: 'f6', front: 'Homogeneous Product', back: 'Perfect Competition feature.' },
        { id: 'f7', front: 'Price Discrimination', back: 'Charging different prices to different consumers (Monopoly).' },
        { id: 'f8', front: 'Concept of Monopolistic Competition given by?', back: 'E.H. Chamberlin.' },
        { id: 'f9', front: 'Legal Monopoly', back: 'Patent, Copyright.' },
        { id: 'f10', front: 'Natural Monopoly', back: 'Specific location advantages.' },
        { id: 'f11', front: 'Duopoly', back: 'Two sellers.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Soap market is an example of ______.', options: ['Monopoly', 'Perfect Competition', 'Monopolistic Competition', 'Oligopoly'], correctIndex: 2, explanation: 'Many brands, differentiated products.' },
        { id: 'q2', question: 'Homogeneous product is feature of ______.', options: ['Perfect Competition', 'Monopoly', 'Oligopoly', 'None'], correctIndex: 0, explanation: 'Products are identical in all respects.' },
        { id: 'q3', question: 'Price discrimination is possible in ______.', options: ['Monopoly', 'Perfect Competition', 'Oligopoly', 'All'], correctIndex: 0, explanation: 'Monopolist has full control over supply.' },
        { id: 'q4', question: 'Demand curve of Perfect Competition is ______.', options: ['Horizontal', 'Vertical', 'Downward', 'Upward'], correctIndex: 0, explanation: 'Perfectly Elastic.' },
        { id: 'q5', question: 'Selling cost is necessary in ______.', options: ['Monopoly', 'Perfect Competition', 'Monopolistic Competition', 'None'], correctIndex: 2, explanation: 'To highlight product differentiation.' },
        { id: 'q6', question: '"Oligopoly" means ______ sellers.', options: ['Many', 'Few', 'Single', 'Two'], correctIndex: 1, explanation: 'Derived from Oligos (Few).' },
        { id: 'q7', question: 'Free entry and exit is possible in ______.', options: ['Monopoly', 'Oligopoly', 'Perfect Competition', 'All'], correctIndex: 2, explanation: 'No barriers.' },
        { id: 'q8', question: 'Single seller is a feature of ______.', options: ['Monopoly', 'Perfect Competition', 'Oligopoly', 'Monopolistic'], correctIndex: 0, explanation: 'Mono = Single.' },
        { id: 'q9', question: 'Indian Railways is a ______ monopoly.', options: ['Private', 'Public', 'Natural', 'Legal'], correctIndex: 1, explanation: 'Owned by Government.' },
        { id: 'q10', question: 'Product differentiation is a feature of ______.', options: ['Perfect Competition', 'Monopolistic Competition', 'Monopoly', 'None'], correctIndex: 1, explanation: 'Products are close substitutes but not identical.' },
        { id: 'q11', question: 'Under perfect competition, price is determined by ______.', options: ['Seller', 'Buyer', 'Demand & Supply', 'Govt'], correctIndex: 2, explanation: 'Interaction of market forces.' },
        { id: 'q12', question: 'Chamberlin introduced the concept of ______.', options: ['Perfect Competition', 'Monopolistic Competition', 'Monopoly', 'Oligopoly'], correctIndex: 1, explanation: 'In 1933.' },
        { id: 'q13', question: 'Demand curve of Monopolist is ______.', options: ['Horizontal', 'Vertical', 'Downward sloping', 'Upward'], correctIndex: 2, explanation: 'Inelastic demand.' },
        { id: 'q14', question: 'There are ______ close substitutes in Monopoly.', options: ['Many', 'Few', 'No', 'One'], correctIndex: 2, explanation: 'Unique product.' },
        { id: 'q15', question: 'Which is an example of Oligopoly?', options: ['Mobile Service Providers', 'Wheat Market', 'Railways', 'Soap'], correctIndex: 0, explanation: 'Few large firms dominate.' },
        { id: 'q16', question: 'Price leadership is a feature of ______.', options: ['Monopoly', 'Perfect Competition', 'Oligopoly', 'None'], correctIndex: 2, explanation: 'Dominant firm sets price.' },
        { id: 'q17', question: 'Patent right creates ______ monopoly.', options: ['Natural', 'Legal', 'Public', 'Private'], correctIndex: 1, explanation: 'Protected by law.' },
        { id: 'q18', question: 'In Perfect Competition, transport cost is ______.', options: ['High', 'Low', 'Ignored', 'Variable'], correctIndex: 2, explanation: 'Assumed to be absent/zero.' },
        { id: 'q19', question: 'Perfect Knowledge is an assumption of ______.', options: ['Monopoly', 'Oligopoly', 'Perfect Competition', 'All'], correctIndex: 2, explanation: 'Buyers know everything.' },
        { id: 'q20', question: 'Monopoly means absence of ______.', options: ['Profit', 'Competition', 'Buyers', 'Supply'], correctIndex: 1, explanation: 'No rivals.' },
        { id: 'q21', question: 'Cartel formation is possible in ______.', options: ['Monopoly', 'Oligopoly', 'Perfect Competition', 'None'], correctIndex: 1, explanation: 'Firms collude to fix price (OPEC).' },
        { id: 'q22', question: 'Cross elasticity in monopoly is ______.', options: ['High', 'Low/Zero', 'Infinite', 'One'], correctIndex: 1, explanation: 'No close substitutes.' },
        { id: 'q23', question: 'Which market is realistic?', options: ['Perfect Competition', 'Monopoly', 'Monopolistic Competition', 'None'], correctIndex: 2, explanation: 'Most markets are mixed.' },
        { id: 'q24', question: 'Duopoly has ______ sellers.', options: ['One', 'Two', 'Three', 'Few'], correctIndex: 1, explanation: 'Special case of Oligopoly.' },
        { id: 'q25', question: 'Stock Exchange is an example of ______.', options: ['Perfect Competition', 'Monopoly', 'Oligopoly', 'Regulated Market'], correctIndex: 3, explanation: 'Controlled by SEBI.' },
        { id: 'q26', question: 'Monopsony means ______.', options: ['Single Seller', 'Single Buyer', 'Two Sellers', 'Few Sellers'], correctIndex: 1, explanation: 'One buyer, many sellers.' },
        { id: 'q27', question: 'AR = MR in ______.', options: ['Monopoly', 'Perfect Competition', 'Oligopoly', 'All'], correctIndex: 1, explanation: 'Since price is constant.' },
        { id: 'q28', question: 'AR > MR in ______.', options: ['Perfect Competition', 'Monopoly', 'Both', 'None'], correctIndex: 1, explanation: 'Price falls to sell more.' },
        { id: 'q29', question: 'Selling cost is NOT incurred in ______.', options: ['Monopolistic', 'Oligopoly', 'Perfect Competition', 'None'], correctIndex: 2, explanation: 'Products are identical.' },
        { id: 'q30', question: 'The term "Market" is derived from ______ word.', options: ['Greek', 'Latin', 'French', 'German'], correctIndex: 1, explanation: 'Marcatus.' },
        { id: 'q31', question: 'Very short period market is ______.', options: ['Day to day', 'Yearly', 'Decade', 'None'], correctIndex: 0, explanation: 'Supply is fixed.' },
        { id: 'q32', question: 'Long period market allows change in ______.', options: ['Variable factors', 'All factors', 'Fixed factors', 'None'], correctIndex: 1, explanation: 'Scale of production can change.' },
        { id: 'q33', question: 'Discriminating Monopoly charges different prices based on ______.', options: ['Cost', 'Place/Person', 'Quality', 'None'], correctIndex: 1, explanation: 'E.g., Senior citizen discount.' },
        { id: 'q34', question: 'LIG/MIG housing is ______ price discrimination.', options: ['Personal', 'Place', 'Use', 'Income'], correctIndex: 3, explanation: 'Based on income groups.' },
        { id: 'q35', question: 'Interdependence is a key feature of ______.', options: ['Monopoly', 'Oligopoly', 'Perfect Competition', 'None'], correctIndex: 1, explanation: 'Firms watch each other.' }
      ],
      reels: [
        { id: 'r1', title: 'Monopoly', content: 'I am the only one.\nI set the price.\n(Indian Railways)', color: getReelColor(4) },
        { id: 'r2', title: 'Oligopoly', content: 'Few Giants.\nTelecom: Jio, Airtel, Vi.\nIntense competition.', color: getReelColor(5) },
        { id: 'r3', title: 'Product Differentiation', content: 'Lux vs Dove.\nSame soap, different smell/pack.', color: getReelColor(6) },
        { id: 'r4', title: 'Perfect Comp: Many Sellers', content: 'Seller is a drop in the ocean.\nCannot influence price.', color: getReelColor(7) },
        { id: 'r5', title: 'Perfect Comp: Homogeneous', content: 'Identical in size, shape, color, taste.', color: getReelColor(8) },
        { id: 'r6', title: 'Perfect Comp: Single Price', content: 'Determined by market demand and supply.', color: getReelColor(9) },
        { id: 'r7', title: 'Perfect Knowledge', content: 'Buyers know the price everywhere.\nNo cheating.', color: getReelColor(0) },
        { id: 'r8', title: 'No Transport Cost', content: 'Assumed in Perfect Competition.', color: getReelColor(1) },
        { id: 'r9', title: 'Price Taker', content: 'Firm in Perfect Competition accepts market price.', color: getReelColor(2) },
        { id: 'r10', title: 'Types of Monopoly: Natural', content: 'Specific raw material available at one place.', color: getReelColor(3) },
        { id: 'r11', title: 'Types of Monopoly: Legal', content: 'Patents, Copyrights, Trademarks.', color: getReelColor(4) },
        { id: 'r12', title: 'Types of Monopoly: Public', content: 'Govt owned.\nIndian Railways.', color: getReelColor(5) },
        { id: 'r13', title: 'Price Discrimination', content: 'Charging different rates.\nElectricity (Home vs Factory).', color: getReelColor(6) },
        { id: 'r14', title: 'Oligopoly: Interdependence', content: 'Jio changes plan -> Airtel must react.', color: getReelColor(7) },
        { id: 'r15', title: 'Oligopoly: Uncertainty', content: 'Rivals behavior cannot be predicted.', color: getReelColor(8) },
        { id: 'r16', title: 'Monopolistic Comp', content: 'Blend of Monopoly and Perfect Competition.', color: getReelColor(9) },
        { id: 'r17', title: 'Concept: Selling Cost', content: 'Ads, Free Samples, Discounts.\nCrucial for Monopolistic Comp.', color: getReelColor(0) },
        { id: 'r18', title: 'Close Substitutes', content: 'Colgate vs Pepsodent.\nHigh cross elasticity.', color: getReelColor(1) },
        { id: 'r19', title: 'Free Entry/Exit', content: 'Allowed in Perfect & Monopolistic Comp.\nRestricted in Monopoly.', color: getReelColor(2) },
        { id: 'r20', title: 'Market Structure', content: 'Based on Place, Time, Competition.', color: getReelColor(3) },
        { id: 'r21', title: 'Very Short Period', content: 'Supply is fixed. Price determined by Demand.', color: getReelColor(4) },
        { id: 'r22', title: 'Long Period', content: 'All factors are variable. Supply can adjust fully.', color: getReelColor(5) }
      ]
    },
    {
      id: 'eco6',
      title: '6. Index Numbers',
      description: 'Tools to measure economic changes.',
      summary: 'Economic Barometers.\nTypes: Price, Quantity, Value.\nConstruction: Laspeyres, Paasche, Fisher.',
      detailedNotes: '### 1. Meaning\nStatistical device to measure changes in a variable or group of variables over time.\nAlso known as "Economic Barometers".\n\n### 2. Features\n* Statistical tool.\n* Specialized average.\n* Measures net change.\n* Based on samples.\n\n### 3. Steps in Construction\n1. **Purpose of Index**.\n2. **Selection of Base Year** (Normal year, not too distant).\n3. **Selection of Commodities** (Basket).\n4. **Selection of Price Quotations**.\n5. **Choice of Average** (Arithmetic Mean).\n6. **Selection of Formula**.\n\n### 4. Methods\n* **Simple Index**: Simple Aggregate, Simple Average of Relatives.\n* **Weighted Index**:\n   * **Laspeyres**: Uses Base Year Quantity (q0) as weight.\n   * **Paasche**: Uses Current Year Quantity (q1) as weight.\n   * **Fisher**: Ideal Index (Geometric Mean of L & P).',
      flashcards: [
        { id: 'f1', front: 'Base Year', back: 'The year with which comparison is made (denoted by 0).' },
        { id: 'f2', front: 'Current Year', back: 'The year for which index is calculated (denoted by 1).' },
        { id: 'f3', front: 'Laspeyres uses?', back: 'Base Year Quantity (q0).' },
        { id: 'f4', front: 'Paasche uses?', back: 'Current Year Quantity (q1).' },
        { id: 'f5', front: 'Fisher\'s Index', back: 'Geometric Mean of Laspeyres and Paasche (Ideal Index).' },
        { id: 'f6', front: 'Economic Barometers', back: 'Index Numbers.' },
        { id: 'f7', front: 'Price Index', back: 'Measures change in Price level.' },
        { id: 'f8', front: 'Quantity Index', back: 'Measures change in Output/Physical volume.' },
        { id: 'f9', front: 'Value Index', back: 'Measures change in Value (P x Q).' },
        { id: 'f10', front: 'Limitation of Index', back: 'Based on samples, ignore quality changes.' },
        { id: 'f11', front: 'Cost of Living Index', back: 'Consumer Price Index (CPI).' }
      ],
      mcqs: [
        { id: 'q1', question: 'Index numbers are ______ barometers.', options: ['Social', 'Economic', 'Political', 'Physical'], correctIndex: 1, explanation: 'They measure changes in economic variables.' },
        { id: 'q2', question: 'Base year should be ______.', options: ['War year', 'Famine year', 'Normal year', 'Current year'], correctIndex: 2, explanation: 'Free from fluctuations.' },
        { id: 'q3', question: 'Laspeyres index uses ______ quantities.', options: ['Current year', 'Base year', 'Next year', 'Average'], correctIndex: 1, explanation: 'Formula uses q0.' },
        { id: 'q4', question: 'Fisher\'s Ideal Index is ______ mean of Laspeyres and Paasche.', options: ['Arithmetic', 'Geometric', 'Harmonic', 'None'], correctIndex: 1, explanation: 'Square root of L x P.' },
        { id: 'q5', question: 'Index number of base year is assumed to be ______.', options: ['0', '1', '100', '10'], correctIndex: 2, explanation: 'Standard comparison point.' },
        { id: 'q6', question: 'Paasche\'s index uses ______ quantities.', options: ['Base year', 'Current year', 'Average', 'None'], correctIndex: 1, explanation: 'Uses q1 as weight.' },
        { id: 'q7', question: 'Cost of Living Index is also known as ______.', options: ['WPI', 'CPI', 'Sensex', 'Value Index'], correctIndex: 1, explanation: 'Consumer Price Index.' },
        { id: 'q8', question: 'The notation \'p1\' stands for ______.', options: ['Base Price', 'Current Price', 'Base Qty', 'Current Qty'], correctIndex: 1, explanation: 'Price of current year.' },
        { id: 'q9', question: 'The notation \'q0\' stands for ______.', options: ['Base Price', 'Current Price', 'Base Qty', 'Current Qty'], correctIndex: 2, explanation: 'Quantity of base year.' },
        { id: 'q10', question: 'Index numbers are ______ averages.', options: ['Simple', 'Specialized', 'Weighted', 'None'], correctIndex: 1, explanation: 'Capable of averaging different units.' },
        { id: 'q11', question: 'Which index number is free from bias?', options: ['Laspeyres', 'Paasche', 'Fisher', 'Simple'], correctIndex: 2, explanation: 'Fisher is Ideal.' },
        { id: 'q12', question: 'Value Index Number measures changes in ______.', options: ['Price', 'Quantity', 'Price x Quantity', 'None'], correctIndex: 2, explanation: 'Total value.' },
        { id: 'q13', question: 'Index numbers are usually expressed in ______.', options: ['Ratios', 'Percentages', 'Decimals', 'Fractions'], correctIndex: 1, explanation: 'Multiplied by 100.' },
        { id: 'q14', question: 'Which is NOT a limitation of Index Numbers?', options: ['Based on samples', 'Ignore quality', 'Reliable data', 'Mathematical error'], correctIndex: 2, explanation: 'Reliable data is a requirement, not limitation (Unreliable data is).' },
        { id: 'q15', question: 'Dearness Allowance is linked to ______.', options: ['WPI', 'CPI', 'Production Index', 'None'], correctIndex: 1, explanation: 'To adjust for inflation.' },
        { id: 'q16', question: 'WPI stands for ______.', options: ['World Price Index', 'Wholesale Price Index', 'Wage Price Index', 'None'], correctIndex: 1, explanation: 'Measures wholesale prices.' },
        { id: 'q17', question: 'Base year index is always ______.', options: ['100', '1000', '1', '0'], correctIndex: 0, explanation: 'By convention.' },
        { id: 'q18', question: 'Steps in construction include selection of ______.', options: ['Base year', 'Items', 'Prices', 'All of above'], correctIndex: 3, explanation: 'All are necessary steps.' },
        { id: 'q19', question: 'Index numbers measure ______ changes.', options: ['Absolute', 'Relative', 'No', 'Constant'], correctIndex: 1, explanation: 'Percentage changes.' },
        { id: 'q20', question: 'Quantity Index Number is also called ______.', options: ['Volume Index', 'Value Index', 'Price Index', 'Cost Index'], correctIndex: 0, explanation: 'Measures physical volume.' },
        { id: 'q21', question: 'Simple Aggregate Method formula is ______.', options: ['Σp1/Σp0 x 100', 'Σp0/Σp1 x 100', 'Σp1q1/Σp0q0', 'None'], correctIndex: 0, explanation: 'Basic formula.' },
        { id: 'q22', question: 'Weighted Index assigns ______ to items.', options: ['Prices', 'Importance/Weights', 'Numbers', 'None'], correctIndex: 1, explanation: 'Based on consumption share.' },
        { id: 'q23', question: 'Fisher\'s formula satisfies ______ test.', options: ['Time Reversal', 'Factor Reversal', 'Both', 'None'], correctIndex: 2, explanation: 'Why it is Ideal.' },
        { id: 'q24', question: 'Index numbers are used for ______.', options: ['Forecasting', 'Policy making', 'Deflating', 'All'], correctIndex: 3, explanation: 'Wide application.' },
        { id: 'q25', question: 'In Laspeyres method, weights are ______.', options: ['Fixed', 'Variable', 'Current', 'None'], correctIndex: 0, explanation: 'Base year quantities are fixed.' },
        { id: 'q26', question: 'In Paasche method, weights are ______.', options: ['Fixed', 'Variable/Current', 'Base', 'None'], correctIndex: 1, explanation: 'Current year quantities.' },
        { id: 'q27', question: 'Sensex is an index of ______.', options: ['Share Prices', 'Gold Prices', 'Oil Prices', 'Food Prices'], correctIndex: 0, explanation: 'Stock market.' },
        { id: 'q28', question: 'Inflation is measured using ______.', options: ['Index Numbers', 'Thermometer', 'Barometer', 'None'], correctIndex: 0, explanation: 'CPI/WPI.' },
        { id: 'q29', question: 'Chain Base Index uses ______ as base.', options: ['Fixed year', 'Preceding year', 'Current year', 'Future year'], correctIndex: 1, explanation: 'Comparison with previous year.' },
        { id: 'q30', question: 'Which average is best for index numbers?', options: ['Arithmetic Mean', 'Geometric Mean', 'Median', 'Mode'], correctIndex: 1, explanation: 'But AM is used for simplicity.' },
        { id: 'q31', question: 'Problem of choosing items implies ______.', options: ['Sample selection', 'Price collection', 'Weighting', 'None'], correctIndex: 0, explanation: 'Which goods to include.' },
        { id: 'q32', question: 'La + Pa / 2 is ______ method.', options: ['Dorbish-Bowley', 'Fisher', 'Marshall', 'None'], correctIndex: 0, explanation: 'Arithmetic mean of L and P.' },
        { id: 'q33', question: 'Real Income = Money Income / ______.', options: ['Price Index', 'Qty Index', 'Value Index', '100'], correctIndex: 0, explanation: 'Deflating.' },
        { id: 'q34', question: 'Limitations include ______.', options: ['Inadequate data', 'Bias', 'Formula choice', 'All'], correctIndex: 3, explanation: 'Errors are possible.' },
        { id: 'q35', question: 'Human Development Index (HDI) includes ______.', options: ['Life Expectancy', 'Education', 'Income', 'All'], correctIndex: 3, explanation: 'Composite index.' }
      ],
      reels: [
        { id: 'r1', title: 'What is Index No?', content: 'A tool to measure change.\nInflation = CPI Index.', color: getReelColor(6) },
        { id: 'r2', title: 'Base Year', content: 'Always denoted by suffix "0".\nPrice = p0, Qty = q0.', color: getReelColor(0) },
        { id: 'r3', title: 'Laspeyres vs Paasche', content: 'Laspeyres likes the PAST (q0).\nPaasche likes the PRESENT (q1).', color: getReelColor(1) },
        { id: 'r4', title: 'Feature: Statistical Tool', content: 'Uses math to quantify economic changes.', color: getReelColor(2) },
        { id: 'r5', title: 'Feature: Specialized Average', content: 'Not simple average, but capable of averaging different units.', color: getReelColor(3) },
        { id: 'r6', title: 'Type: Price Index', content: 'Measures inflation/value of money.', color: getReelColor(4) },
        { id: 'r7', title: 'Type: Quantity Index', content: 'Measures industrial/agri production changes.', color: getReelColor(5) },
        { id: 'r8', title: 'Type: Value Index', content: 'Combines Price x Quantity changes.', color: getReelColor(6) },
        { id: 'r9', title: 'Step 1: Purpose', content: 'Why are we making this index?\nDefining scope is crucial.', color: getReelColor(7) },
        { id: 'r10', title: 'Step 2: Base Year', content: 'Must be normal, recent, and free from calamities.', color: getReelColor(8) },
        { id: 'r11', title: 'Step 3: Basket', content: 'Selection of commodities representing the group.', color: getReelColor(9) },
        { id: 'r12', title: 'Simple Aggregate Method', content: 'Sum of p1 / Sum of p0 x 100.', color: getReelColor(0) },
        { id: 'r13', title: 'Weighted Aggregate', content: 'Assigning importance (weights) to items.', color: getReelColor(1) },
        { id: 'r14', title: 'Fisher\'s Index', content: 'The IDEAL index.\nGeometric mean of L and P.', color: getReelColor(2) },
        { id: 'r15', title: 'Limitations', content: 'Based on samples.\nIgnores quality changes.\nMathematical errors.', color: getReelColor(3) },
        { id: 'r16', title: 'CPI', content: 'Consumer Price Index.\nAlso called Cost of Living Index.', color: getReelColor(4) },
        { id: 'r17', title: 'WPI', content: 'Wholesale Price Index.\nUsed for measuring inflation at wholesale level.', color: getReelColor(5) },
        { id: 'r18', title: 'Sensex/Nifty', content: 'Index numbers for Stock Market.', color: getReelColor(6) },
        { id: 'r19', title: 'Human Development Index', content: 'HDI.\nMeasures quality of life (Health, Education, Income).', color: getReelColor(7) },
        { id: 'r20', title: 'Uses: Wage Fixation', content: 'Dearness Allowance (DA) is linked to Cost of Living Index.', color: getReelColor(8) },
        { id: 'r21', title: 'Uses: Forecasting', content: 'Predicting future business trends.', color: getReelColor(9) },
        { id: 'r22', title: 'Uses: Policy', content: 'Helping Govt decide tax and trade policies.', color: getReelColor(0) }
      ]
    },
    {
      id: 'eco7',
      title: '7. National Income',
      description: 'Total income of the nation.',
      summary: 'GDP, GNP, NNP.\nMethods: Output, Income, Expenditure.\nCircular Flow of Income.',
      detailedNotes: '### 1. Concepts\n* **GDP**: Gross Domestic Product (Market value of goods within territory).\n* **GNP**: Gross National Product (GDP + Net Factor Income from Abroad).\n* **NNP**: GNP minus Depreciation.\n* **NDP**: GDP minus Depreciation.\n\n### 2. Methods of Measurement\n1. **Output Method (Product Method)**: Final Goods Approach or Value Added Approach. Avoids double counting.\n2. **Income Method**: Sum of Factor Incomes (Rent + Wages + Interest + Profit).\n3. **Expenditure Method**: C + I + G + (X-M).\n\n### 3. Circular Flow (2 Sector)\nHouseholds provide Factors -> Firms provide Goods.\nFirms pay Factor Income -> Households pay Consumption Exp.\n\n### 4. Difficulties\n* **Theoretical**: Transfer payments, Unpaid services (Housewife), Illegal income.\n* **Practical**: Valuation of inventories, Depreciation, Double counting.',
      flashcards: [
        { id: 'f1', front: 'GDP', back: 'Gross Domestic Product (Territorial).' },
        { id: 'f2', front: 'GNP', back: 'Gross National Product (Nationals).' },
        { id: 'f3', front: 'Depreciation', back: 'Wear and tear of capital assets.' },
        { id: 'f4', front: 'Transfer Payments', back: 'Pension, Scholarship (Excluded from NI).' },
        { id: 'f5', front: 'Output Method', back: 'Also called Product/Inventory Method.' },
        { id: 'f6', front: 'Double Counting', back: 'Counting value of commodity more than once.' },
        { id: 'f7', front: 'Expenditure Method Formula', back: 'NI = C + I + G + (X - M).' },
        { id: 'f8', front: 'Green GNP', back: 'GNP adjusted for environmental loss.' },
        { id: 'f9', front: 'Unpaid Services', back: 'Mom\'s cooking (Excluded from NI).' },
        { id: 'f10', front: 'Circular Flow participants (2 sector)', back: 'Households and Firms.' },
        { id: 'f11', front: 'Per Capita Income', back: 'National Income / Total Population.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Net National Product = GNP - ______.', options: ['Subsidy', 'Tax', 'Depreciation', 'Export'], correctIndex: 2, explanation: 'Net value excludes wear and tear.' },
        { id: 'q2', question: 'Transfer payments are ______ in National Income.', options: ['Included', 'Excluded', 'Added', 'Multiplied'], correctIndex: 1, explanation: 'Because no production takes place against them.' },
        { id: 'q3', question: 'Which method uses C+I+G+(X-M)?', options: ['Income', 'Output', 'Expenditure', 'None'], correctIndex: 2, explanation: 'Spending approach.' },
        { id: 'q4', question: 'National Income Committee was established in ______.', options: ['1949', '1947', '1950', '1991'], correctIndex: 0, explanation: 'Chaired by P.C. Mahalanobis.' },
        { id: 'q5', question: 'Income of a beggar is ______.', options: ['Included', 'Excluded', 'Transfer income', 'Both B & C'], correctIndex: 1, explanation: 'It is a transfer payment, not earned.' },
        { id: 'q6', question: 'Which is NOT a factor income?', options: ['Rent', 'Wages', 'Lottery Prize', 'Profit'], correctIndex: 2, explanation: 'Lottery is windfall gain, not factor income.' },
        { id: 'q7', question: 'GNP is a ______ concept.', options: ['Stock', 'Flow', 'Static', 'None'], correctIndex: 1, explanation: 'Produced over a period of time.' },
        { id: 'q8', question: 'To avoid double counting, we use ______ method.', options: ['Value Added', 'Expenditure', 'Income', 'None'], correctIndex: 0, explanation: 'Counts value addition at each stage.' },
        { id: 'q9', question: 'Depreciation is also known as ______.', options: ['Consumption of fixed capital', 'Capital formation', 'Investment', 'None'], correctIndex: 0, explanation: 'Loss of value.' },
        { id: 'q10', question: 'Which sector contributes most to India\'s NI?', options: ['Agriculture', 'Industry', 'Service', 'None'], correctIndex: 2, explanation: 'Tertiary sector.' },
        { id: 'q11', question: 'GDP includes ______.', options: ['Exports', 'Imports', 'Production within country', 'Net Factor Income'], correctIndex: 2, explanation: 'Domestic territory.' },
        { id: 'q12', question: 'Circular flow of income in 2-sector model includes ______.', options: ['Households & Firms', 'Govt & Firms', 'Foreign & Households', 'None'], correctIndex: 0, explanation: 'Closed economy model.' },
        { id: 'q13', question: 'Real National Income is calculated at ______.', options: ['Current Price', 'Constant/Base Price', 'Future Price', 'None'], correctIndex: 1, explanation: 'Adjusted for inflation.' },
        { id: 'q14', question: 'Per Capita Income indicates ______.', options: ['Total Income', 'Standard of Living', 'Population', 'None'], correctIndex: 1, explanation: 'Average welfare.' },
        { id: 'q15', question: 'Unpaid services of housewife are ______ from NI.', options: ['Excluded', 'Included', 'Estimated', 'None'], correctIndex: 0, explanation: 'Difficulty in measurement.' },
        { id: 'q16', question: 'Income Method is also known as ______.', options: ['Factor Cost Method', 'Value Method', 'Consumption Method', 'None'], correctIndex: 0, explanation: 'Sum of factor payments.' },
        { id: 'q17', question: 'Illegal income is ______.', options: ['Included', 'Excluded', 'Partly included', 'None'], correctIndex: 1, explanation: 'Black money.' },
        { id: 'q18', question: 'Who defined NI as "objective income"?', options: ['Marshall', 'Pigou', 'Fisher', 'Keynes'], correctIndex: 1, explanation: 'A.C. Pigou.' },
        { id: 'q19', question: 'Direct taxes are ______ from Personal Income to get Disposable Income.', options: ['Added', 'Deducted', 'Multiplied', 'Ignored'], correctIndex: 1, explanation: 'PDI = PI - Direct Taxes.' },
        { id: 'q20', question: 'X - M stands for ______.', options: ['Net Imports', 'Net Exports', 'Net Income', 'None'], correctIndex: 1, explanation: 'Exports minus Imports.' },
        { id: 'q21', question: 'CSO stands for ______.', options: ['Central Statistical Office', 'Common Service Org', 'Central Supply Org', 'None'], correctIndex: 0, explanation: 'Calculates NI in India.' },
        { id: 'q22', question: 'Imputed rent of owner occupied house is ______.', options: ['Included', 'Excluded', 'Ignored', 'None'], correctIndex: 0, explanation: 'It has value.' },
        { id: 'q23', question: 'Green GDP emphasizes ______.', options: ['Growth', 'Sustainable Development', 'Agriculture', 'Forestry'], correctIndex: 1, explanation: 'Environment friendly.' },
        { id: 'q24', question: 'NDP = GDP - ______.', options: ['Depreciation', 'Tax', 'Subsidy', 'NFIA'], correctIndex: 0, explanation: 'Net Domestic Product.' },
        { id: 'q25', question: 'National Income is a ______ variable.', options: ['Micro', 'Macro', 'Partial', 'None'], correctIndex: 1, explanation: 'Aggregate.' },
        { id: 'q26', question: 'Financial year in India is ______.', options: ['Jan-Dec', 'Apr-Mar', 'July-June', 'None'], correctIndex: 1, explanation: 'April 1 to March 31.' },
        { id: 'q27', question: 'Scholarship is a ______ payment.', options: ['Transfer', 'Factor', 'Bonus', 'None'], correctIndex: 0, explanation: 'Unilateral.' },
        { id: 'q28', question: 'Second hand goods sale value is ______.', options: ['Included', 'Excluded', 'Added', 'None'], correctIndex: 1, explanation: 'Already counted when new.' },
        { id: 'q29', question: 'Valuation of inventories is a ______ difficulty.', options: ['Theoretical', 'Practical', 'Political', 'None'], correctIndex: 1, explanation: 'Statistical problem.' },
        { id: 'q30', question: 'Which is an injection in circular flow?', options: ['Savings', 'Investment', 'Tax', 'Imports'], correctIndex: 1, explanation: 'Adds money to flow.' },
        { id: 'q31', question: 'Which is a leakage in circular flow?', options: ['Exports', 'Investment', 'Savings', 'Govt Exp'], correctIndex: 2, explanation: 'Withdrawal of money.' },
        { id: 'q32', question: 'NI at Factor Cost = NI at Market Price - ______.', options: ['Net Indirect Taxes', 'Depreciation', 'NFIA', 'None'], correctIndex: 0, explanation: 'Adjustment for tax/subsidy.' },
        { id: 'q33', question: 'GDP Deflator measures ______.', options: ['Inflation', 'Output', 'Population', 'None'], correctIndex: 0, explanation: 'Price level change.' },
        { id: 'q34', question: 'Mixed income refers to income of ______.', options: ['Self-employed', 'Companies', 'Govt', 'Foreigners'], correctIndex: 0, explanation: 'Farmers, shopkeepers.' },
        { id: 'q35', question: 'NI estimation in India is done by ______.', options: ['RBI', 'CSO', 'Planning Commission', 'Finance Ministry'], correctIndex: 1, explanation: 'Central Statistical Office.' }
      ],
      reels: [
        { id: 'r1', title: 'GDP vs GNP', content: 'GDP = Where produced (India).\nGNP = Who produced (Indian).', color: getReelColor(1) },
        { id: 'r2', title: 'Double Counting', content: 'Counting flour AND bread?\nNo! Only final goods.', color: getReelColor(2) },
        { id: 'r3', title: 'Circular Flow', content: 'Money flows from House to Firm (Spending) and back (Wages).', color: getReelColor(3) },
        { id: 'r4', title: 'Feature: Macro', content: 'NI is a macro concept.\nAggregate of all incomes.', color: getReelColor(4) },
        { id: 'r5', title: 'Feature: Flow', content: 'Measured over a period (1 year).\nNot a stock concept.', color: getReelColor(5) },
        { id: 'r6', title: 'Feature: Money Value', content: 'Only goods exchanged for money are counted.', color: getReelColor(6) },
        { id: 'r7', title: 'Net Factor Income', content: 'Income from Abroad (X-M).\nDifference between GNP and GDP.', color: getReelColor(7) },
        { id: 'r8', title: 'Output Method', content: 'Sum of market value of all final goods produced.', color: getReelColor(8) },
        { id: 'r9', title: 'Value Added Approach', content: 'Value of Output - Value of Intermediate Input.', color: getReelColor(9) },
        { id: 'r10', title: 'Income Method', content: 'Rent + Wages + Interest + Profit + Mixed Income.', color: getReelColor(0) },
        { id: 'r11', title: 'Expenditure Method', content: 'Consumption + Investment + Govt Exp + Net Exports.', color: getReelColor(1) },
        { id: 'r12', title: 'Theoretical Difficulty', content: 'Transfer Payments.\nPension/Gifts are not income from production.', color: getReelColor(2) },
        { id: 'r13', title: 'Theoretical Difficulty', content: 'Unpaid Services.\nHousewife work, hobby gardening.', color: getReelColor(3) },
        { id: 'r14', title: 'Theoretical Difficulty', content: 'Black Money.\nIllegal income is hidden.', color: getReelColor(4) },
        { id: 'r15', title: 'Practical Difficulty', content: 'Problem of Double Counting.\nEvaluating intermediate goods.', color: getReelColor(5) },
        { id: 'r16', title: 'Practical Difficulty', content: 'Depreciation.\nHard to calculate exact wear and tear.', color: getReelColor(6) },
        { id: 'r17', title: 'Importance: Economy', content: 'Indicates economic growth and standard of living.', color: getReelColor(7) },
        { id: 'r18', title: 'Importance: Policy', content: 'Helps in planning budget and tax policies.', color: getReelColor(8) },
        { id: 'r19', title: 'Importance: Comparison', content: 'Compare standard of living between countries.', color: getReelColor(9) },
        { id: 'r20', title: 'Green GDP', content: 'Sustainability.\nDeducting environmental cost from GDP.', color: getReelColor(0) },
        { id: 'r21', title: 'Per Capita Income', content: 'Average income per person.\nNI / Population.', color: getReelColor(1) },
        { id: 'r22', title: 'NI Committee', content: 'Est 1949.\nP.C. Mahalanobis, D.R. Gadgil, V.K.R.V. Rao.', color: getReelColor(2) }
      ]
    },
    {
      id: 'eco8',
      title: '8. Public Finance in India',
      description: 'Govt Revenue and Expenditure.',
      summary: 'Public vs Private Finance.\nPublic Revenue: Tax (Direct/Indirect) & Non-Tax.\nBudget: Balanced, Surplus, Deficit.',
      detailedNotes: '### 1. Meaning\nStudy of principles of income and expenditure of the government.\nDiffers from Private Finance (Govt adjusts income to exp, Individual adjusts exp to income).\n\n### 2. Public Expenditure\nReasons for growth: Defense, Welfare state, Population growth, Inflation, Democracy.\n\n### 3. Public Revenue\n1. **Tax**: Compulsory contribution without quid-pro-quo.\n   * **Direct**: Income Tax (Impact & Incidence on same person).\n   * **Indirect**: GST (Impact & Incidence on different persons).\n2. **Non-Tax**: Fees, Fines, Prices of public goods, Gifts, Grants.\n\n### 4. Public Debt\nInternal (within country) vs External (IMF, World Bank).\n\n### 5. Budget\n* **Revenue Budget**: Tax/Non-tax rev vs Admin exp.\n* **Capital Budget**: Loans/Assets.\n* **Types**: Balanced, Surplus (Rev > Exp), Deficit (Rev < Exp).',
      flashcards: [
        { id: 'f1', front: 'Direct Tax', back: 'Impact and Incidence on same person (Income Tax).' },
        { id: 'f2', front: 'Indirect Tax', back: 'GST (Goods and Services Tax).' },
        { id: 'f3', front: 'Deficit Budget', back: 'Expenditure > Revenue.' },
        { id: 'f4', front: 'Fiscal Policy', back: 'Govt policy regarding Tax and Spend.' },
        { id: 'f5', front: 'Quid pro quo', back: 'Something in return (Absent in Tax).' },
        { id: 'f6', front: 'GST implemented in India?', back: '1st July 2017.' },
        { id: 'f7', front: 'Surplus Budget', back: 'Revenue > Expenditure (Used during Inflation).' },
        { id: 'f8', front: 'Balanced Budget', back: 'Revenue = Expenditure.' },
        { id: 'f9', front: 'Internal Debt', back: 'Raised within the country.' },
        { id: 'f10', front: 'Non-Tax Revenue', back: 'Fees, Fines, Special Assessment.' },
        { id: 'f11', front: 'Obligatory Function of Govt', back: 'Defense, Law & Order.' }
      ],
      mcqs: [
        { id: 'q1', question: 'GST is a ______ tax.', options: ['Direct', 'Indirect', 'Progressive', 'Local'], correctIndex: 1, explanation: 'Burden can be shifted.' },
        { id: 'q2', question: 'Budget is presented by ______.', options: ['PM', 'Finance Minister', 'RBI Governor', 'President'], correctIndex: 1, explanation: 'Annually in Parliament.' },
        { id: 'q3', question: 'Developing countries typically have ______ budget.', options: ['Surplus', 'Balanced', 'Deficit', 'Zero'], correctIndex: 2, explanation: 'To promote growth and employment.' },
        { id: 'q4', question: 'Income tax is ______.', options: ['Indirect', 'Direct', 'Regressive', 'None'], correctIndex: 1, explanation: 'Paid directly by the person.' },
        { id: 'q5', question: 'Public finance deals with ______.', options: ['Individual', 'Government', 'Companies', 'Banks'], correctIndex: 1, explanation: 'Central, State, and Local govt.' },
        { id: 'q6', question: 'Protection from external attack is ______ function.', options: ['Obligatory', 'Optional', 'Social', 'None'], correctIndex: 0, explanation: 'Must do.' },
        { id: 'q7', question: 'Education and Health are ______ functions.', options: ['Obligatory', 'Optional', 'Private', 'None'], correctIndex: 1, explanation: 'Welfare activities.' },
        { id: 'q8', question: 'Public revenue > Public expenditure = ______.', options: ['Deficit', 'Surplus', 'Balanced', 'None'], correctIndex: 1, explanation: 'Surplus budget.' },
        { id: 'q9', question: 'Tax is a ______ contribution.', options: ['Voluntary', 'Compulsory', 'Optional', 'None'], correctIndex: 1, explanation: 'Legally mandated.' },
        { id: 'q10', question: 'Penalty for violating law is ______.', options: ['Tax', 'Fee', 'Fine', 'Price'], correctIndex: 2, explanation: 'Punishment.' },
        { id: 'q11', question: 'Internal debt is raised from ______.', options: ['World Bank', 'IMF', 'Within Country', 'USA'], correctIndex: 2, explanation: 'Domestic sources.' },
        { id: 'q12', question: 'External debt is raised from ______.', options: ['Citizens', 'Banks', 'Abroad', 'None'], correctIndex: 2, explanation: 'Foreign sources.' },
        { id: 'q13', question: 'Wealth Tax is a ______ tax.', options: ['Indirect', 'Direct', 'Local', 'None'], correctIndex: 1, explanation: 'Incidence on owner.' },
        { id: 'q14', question: 'Customs duty is levied on ______.', options: ['Income', 'Property', 'Import/Export', 'Production'], correctIndex: 2, explanation: 'International trade.' },
        { id: 'q15', question: 'Special assessment is paid for ______.', options: ['General service', 'Special benefit', 'Penalty', 'None'], correctIndex: 1, explanation: 'Rise in property value due to development.' },
        { id: 'q16', question: 'The word Budget is derived from ______.', options: ['Greek', 'Latin', 'French', 'German'], correctIndex: 2, explanation: 'Bougette (Bag).' },
        { id: 'q17', question: 'During depression, ______ budget is preferred.', options: ['Surplus', 'Deficit', 'Balanced', 'None'], correctIndex: 1, explanation: 'To boost demand.' },
        { id: 'q18', question: 'During inflation, ______ budget is preferred.', options: ['Surplus', 'Deficit', 'Balanced', 'None'], correctIndex: 0, explanation: 'To reduce money supply.' },
        { id: 'q19', question: 'Fiscal policy is related to ______.', options: ['Money supply', 'Public Rev & Exp', 'Trade', 'Industry'], correctIndex: 1, explanation: 'Govt budget policy.' },
        { id: 'q20', question: 'Which is a non-tax revenue?', options: ['GST', 'Income Tax', 'Fees', 'Excise'], correctIndex: 2, explanation: 'Payment for service.' },
        { id: 'q21', question: 'Impact of tax means ______.', options: ['Final burden', 'Initial burden', 'No burden', 'None'], correctIndex: 1, explanation: 'Person who pays first.' },
        { id: 'q22', question: 'Incidence of tax means ______.', options: ['Final burden', 'Initial burden', 'Govt', 'None'], correctIndex: 0, explanation: 'Person who actually bears the cost.' },
        { id: 'q23', question: 'Capital budget deals with ______.', options: ['Recurring items', 'Assets/Liabilities', 'Admin Exp', 'None'], correctIndex: 1, explanation: 'Long term.' },
        { id: 'q24', question: 'Revenue budget deals with ______.', options: ['Recurring items', 'Loans', 'Assets', 'None'], correctIndex: 0, explanation: 'Day to day items.' },
        { id: 'q25', question: 'Who formulated the canon of taxation?', options: ['Marshall', 'Adam Smith', 'Keynes', 'Pigou'], correctIndex: 1, explanation: 'Canon of Equity, Certainty, etc.' },
        { id: 'q26', question: 'Public finance is ______ than private finance.', options: ['Smaller', 'Larger/Elastic', 'Same', 'None'], correctIndex: 1, explanation: 'Govt has more resources.' },
        { id: 'q27', question: 'Borrowing from public is ______.', options: ['Revenue', 'Debt', 'Tax', 'None'], correctIndex: 1, explanation: 'Public Debt.' },
        { id: 'q28', question: 'Disinvestment is ______ receipt.', options: ['Revenue', 'Capital', 'Tax', 'None'], correctIndex: 1, explanation: 'Selling assets.' },
        { id: 'q29', question: 'Grants-in-aid are ______.', options: ['Repayable', 'Non-repayable', 'Loans', 'None'], correctIndex: 1, explanation: 'Help from superior govt.' },
        { id: 'q30', question: 'Public expenditure has ______ trend.', options: ['Decreasing', 'Increasing', 'Constant', 'None'], correctIndex: 1, explanation: 'Due to welfare state.' },
        { id: 'q31', question: 'Zero Based Budgeting means starting from ______.', options: ['Last year', 'Scratch/Zero', 'Average', 'None'], correctIndex: 1, explanation: 'Justifying every expense.' },
        { id: 'q32', question: 'Gender budgeting focuses on ______.', options: ['Men', 'Women', 'Children', 'Elders'], correctIndex: 1, explanation: 'Women empowerment.' },
        { id: 'q33', question: 'Which is NOT a direct tax?', options: ['Income Tax', 'Wealth Tax', 'GST', 'Corporate Tax'], correctIndex: 2, explanation: 'GST is indirect.' },
        { id: 'q34', question: 'Democratic form of govt leads to ______ expenditure.', options: ['Less', 'More', 'Zero', 'None'], correctIndex: 1, explanation: 'Elections, ministers, etc.' },
        { id: 'q35', question: 'Gifts and donations are ______ revenue.', options: ['Tax', 'Non-tax', 'Capital', 'None'], correctIndex: 1, explanation: 'Voluntary.' }
      ],
      reels: [
        { id: 'r1', title: 'Direct vs Indirect', content: 'Direct: Hits YOU directly (Income Tax).\nIndirect: Hits you via products (GST).', color: getReelColor(3) },
        { id: 'r2', title: 'Deficit Budget', content: 'Spending more than earning?\nGood for developing economy growth!', color: getReelColor(4) },
        { id: 'r3', title: 'GST', content: 'One Nation, One Tax.\nUnified the Indirect Tax structure.', color: getReelColor(5) },
        { id: 'r4', title: 'Public Finance', content: 'Govt adjusts Income to Expenditure.\n(Opposite of Private Finance).', color: getReelColor(6) },
        { id: 'r5', title: 'Private Finance', content: 'Individual adjusts Expenditure to Income.', color: getReelColor(7) },
        { id: 'r6', title: 'Obligatory Function', content: 'Protection from external attack, internal order.\nMust do.', color: getReelColor(8) },
        { id: 'r7', title: 'Optional Function', content: 'Education, Health, Social Security.\nWelfare state activities.', color: getReelColor(9) },
        { id: 'r8', title: 'Reason for Growth', content: 'Population Explosion.\nNeed for more services.', color: getReelColor(0) },
        { id: 'r9', title: 'Reason for Growth', content: 'Urbanization.\nNeed for water, roads, electricity.', color: getReelColor(1) },
        { id: 'r10', title: 'Reason for Growth', content: 'Defense.\nWar threats require modern equipment.', color: getReelColor(2) },
        { id: 'r11', title: 'Tax', content: 'Compulsory Contribution.\nNo direct benefit in return.', color: getReelColor(3) },
        { id: 'r12', title: 'Fees', content: 'Payment for service.\nEducation fees, Registration fees.', color: getReelColor(4) },
        { id: 'r13', title: 'Fines', content: 'Penalty for breaking law.\nNot for revenue, but for order.', color: getReelColor(5) },
        { id: 'r14', title: 'Special Assessment', content: 'Tax on property that gained value due to govt work (Road/Park).', color: getReelColor(6) },
        { id: 'r15', title: 'Internal Debt', content: 'Govt borrowing from citizens/banks within India.', color: getReelColor(7) },
        { id: 'r16', title: 'External Debt', content: 'Govt borrowing from World Bank/IMF.', color: getReelColor(8) },
        { id: 'r17', title: 'Fiscal Policy', content: 'Budgetary policy of Govt.\nTaxation and Expenditure.', color: getReelColor(9) },
        { id: 'r18', title: 'Financial Year', content: '1st April to 31st March.', color: getReelColor(0) },
        { id: 'r19', title: 'Revenue Receipt', content: 'Tax and Non-tax revenue.\nRecurring in nature.', color: getReelColor(1) },
        { id: 'r20', title: 'Capital Receipt', content: 'Loans, Disinvestment.\nCreates liability or reduces asset.', color: getReelColor(2) },
        { id: 'r21', title: 'Budget', content: 'French word "Bougette" (Leather Bag).', color: getReelColor(3) },
        { id: 'r22', title: 'Surplus Budget', content: 'Rev > Exp.\nUsed to control Inflation.', color: getReelColor(4) }
      ]
    },
    {
      id: 'eco9',
      title: '9. Money Market and Capital Market',
      description: 'Indian Financial System.',
      summary: '**Money Market**: Short term funds (< 1 year). RBI, Commercial Banks.\n**Capital Market**: Long term funds (> 1 year). Stock Exchange, SEBI.',
      detailedNotes: '### 1. Money Market\nMarket for lending and borrowing of short term funds.\nInstruments: Call Money, T-Bills, Commercial Paper, CD.\n**Participants**: RBI (Central Bank), Commercial Banks (SBI, HDFC), Cooperative Banks.\n\n### 2. Reserve Bank of India (RBI)\nCentral Bank of India (Est 1935).\n**Functions**:\n1. Issue of Currency.\n2. Banker to Govt.\n3. Banker\'s Bank.\n4. Custodian of Forex.\n5. Controller of Credit (Repo Rate, CRR, SLR).\n\n### 3. Capital Market\nMarket for long term funds.\n**Participants**: Stock Exchanges (NSE, BSE), Mutual Funds, Insurance Cos.\n**Instruments**: Equity shares, Debentures, Bonds.\n**Regulator**: SEBI.',
      flashcards: [
        { id: 'f1', front: 'Money Market', back: 'Short term funds (Less than 1 year).' },
        { id: 'f2', front: 'Capital Market', back: 'Long term funds (More than 1 year).' },
        { id: 'f3', front: 'RBI established in?', back: '1935 (Nationalized in 1949).' },
        { id: 'f4', front: 'Repo Rate', back: 'Rate at which RBI lends to banks.' },
        { id: 'f5', front: 'Reverse Repo Rate', back: 'Rate at which RBI borrows from banks.' },
        { id: 'f6', front: 'SEBI', back: 'Securities and Exchange Board of India (Regulator of Capital Market).' },
        { id: 'f7', front: 'Call Money', back: 'Funds borrowed for 1 day (Overnight).' },
        { id: 'f8', front: 'Notice Money', back: 'Funds borrowed for 2-14 days.' },
        { id: 'f9', front: 'Commercial Banks', back: 'Accept deposits and grant loans (Profit motive).' },
        { id: 'f10', front: 'Oldest Stock Exchange in Asia', back: 'Bombay Stock Exchange (BSE).' },
        { id: 'f11', front: 'CRR', back: 'Cash Reserve Ratio (kept with RBI).' },
        { id: 'f12', front: 'SLR', back: 'Statutory Liquidity Ratio (kept with Bank itself).' }
      ],
      mcqs: [
        { id: 'q1', question: 'Apex bank of India is ______.', options: ['SBI', 'RBI', 'HDFC', 'PNB'], correctIndex: 1, explanation: 'Reserve Bank of India.' },
        { id: 'q2', question: 'Money market deals in ______ funds.', options: ['Long term', 'Short term', 'Medium term', 'Life'], correctIndex: 1, explanation: 'Less than 1 year maturity.' },
        { id: 'q3', question: 'SEBI regulates ______.', options: ['Money Market', 'Capital Market', 'Vegetable Market', 'Gold Market'], correctIndex: 1, explanation: 'To protect investor interest.' },
        { id: 'q4', question: 'Repo rate is a tool of ______ policy.', options: ['Fiscal', 'Monetary', 'Trade', 'Industrial'], correctIndex: 1, explanation: 'Controlled by RBI.' },
        { id: 'q5', question: '______ is the issuer of currency notes.', options: ['SBI', 'RBI', 'Govt of India', 'World Bank'], correctIndex: 1, explanation: 'Except one rupee note/coins.' },
        { id: 'q6', question: 'One rupee note is issued by ______.', options: ['RBI', 'Ministry of Finance', 'SBI', 'President'], correctIndex: 1, explanation: 'Signed by Finance Secretary.' },
        { id: 'q7', question: 'Commercial banks work for ______.', options: ['Profit', 'Welfare', 'Charity', 'None'], correctIndex: 0, explanation: 'They are businesses.' },
        { id: 'q8', question: 'CRR is kept with ______.', options: ['RBI', 'Bank itself', 'World Bank', 'Public'], correctIndex: 0, explanation: 'Cash Reserve Ratio.' },
        { id: 'q9', question: 'SLR is kept with ______.', options: ['RBI', 'Bank itself', 'Govt', 'Public'], correctIndex: 1, explanation: 'Statutory Liquidity Ratio (Liquid assets).' },
        { id: 'q10', question: 'Gilt-edged market deals in ______.', options: ['Govt Securities', 'Gold', 'Silver', 'Shares'], correctIndex: 0, explanation: 'Safe govt bonds.' },
        { id: 'q11', question: 'Treasury Bills are issued by ______.', options: ['RBI on behalf of Govt', 'SBI', 'SEBI', 'Companies'], correctIndex: 0, explanation: 'Short term borrowing of Govt.' },
        { id: 'q12', question: 'Call money market is also called ______.', options: ['Inter-bank market', 'Stock market', 'Gold market', 'None'], correctIndex: 0, explanation: 'Banks borrow from each other.' },
        { id: 'q13', question: 'Which is NOT a quantitative tool?', options: ['Bank Rate', 'CRR', 'Moral Suasion', 'Open Market Ops'], correctIndex: 2, explanation: 'Moral Suasion is qualitative.' },
        { id: 'q14', question: 'RBI was nationalized in ______.', options: ['1935', '1947', '1949', '1950'], correctIndex: 2, explanation: '1st Jan 1949.' },
        { id: 'q15', question: 'Primary market is also known as ______.', options: ['Old issue', 'New issue', 'Stock exchange', 'None'], correctIndex: 1, explanation: 'Fresh shares (IPO).' },
        { id: 'q16', question: 'Secondary market is ______.', options: ['Stock Exchange', 'New Issue', 'Money Market', 'None'], correctIndex: 0, explanation: 'Trading of existing securities.' },
        { id: 'q17', question: 'Nifty is index of ______.', options: ['BSE', 'NSE', 'OTCEI', 'None'], correctIndex: 1, explanation: 'National Stock Exchange (50 stocks).' },
        { id: 'q18', question: 'Sensex is index of ______.', options: ['BSE', 'NSE', 'NYSE', 'None'], correctIndex: 0, explanation: 'Bombay Stock Exchange (30 stocks).' },
        { id: 'q19', question: 'Custodian of foreign exchange is ______.', options: ['SBI', 'RBI', 'Govt', 'Exim Bank'], correctIndex: 1, explanation: 'Manages reserves.' },
        { id: 'q20', question: 'Indigenous bankers are ______ sector.', options: ['Organized', 'Unorganized', 'Public', 'None'], correctIndex: 1, explanation: 'Local moneylenders.' },
        { id: 'q21', question: 'Commercial Paper is issued by ______.', options: ['Govt', 'Corporates', 'RBI', 'Banks'], correctIndex: 1, explanation: 'Unsecured promissory note.' },
        { id: 'q22', question: 'Certificate of Deposit is issued by ______.', options: ['Banks', 'Govt', 'Companies', 'RBI'], correctIndex: 0, explanation: 'Against deposits.' },
        { id: 'q23', question: 'Bank Rate is rate for ______ term loans.', options: ['Short', 'Long', 'Medium', 'Overnight'], correctIndex: 1, explanation: 'Rediscounting rate.' },
        { id: 'q24', question: 'Open Market Operations means buying/selling of ______.', options: ['Goods', 'Securities', 'Gold', 'Lands'], correctIndex: 1, explanation: 'By RBI to control liquidity.' },
        { id: 'q25', question: 'Functions of Commercial Bank include ______.', options: ['Accepting Deposits', 'Granting Loans', 'Credit Creation', 'All'], correctIndex: 3, explanation: 'Core functions.' },
        { id: 'q26', question: 'Which is NOT a function of RBI?', options: ['Accepting deposits from public', 'Issue currency', 'Banker to Govt', 'Credit control'], correctIndex: 0, explanation: 'RBI does not deal with public directly.' },
        { id: 'q27', question: 'Mutual Funds are part of ______.', options: ['Money Market', 'Capital Market', 'Both', 'None'], correctIndex: 1, explanation: 'Invest in stocks/bonds.' },
        { id: 'q28', question: 'Development Financial Institutions provide ______ finance.', options: ['Short term', 'Medium/Long term', 'Daily', 'None'], correctIndex: 1, explanation: 'For industrial growth (IDBI, IFCI).' },
        { id: 'q29', question: 'Demat account is used for ______.', options: ['Cash', 'Shares', 'Gold', 'Land'], correctIndex: 1, explanation: 'Electronic holding of shares.' },
        { id: 'q30', question: 'Inflation can be controlled by ______ CRR.', options: ['Increasing', 'Decreasing', 'Stopping', 'None'], correctIndex: 0, explanation: 'Sucks liquidity out.' },
        { id: 'q31', question: 'Recession can be controlled by ______ Repo Rate.', options: ['Increasing', 'Decreasing', 'Stopping', 'None'], correctIndex: 1, explanation: 'Makes loans cheaper.' },
        { id: 'q32', question: 'Credit creation is done by ______.', options: ['RBI', 'Commercial Banks', 'Govt', 'Co-ops'], correctIndex: 1, explanation: 'Money multiplier.' },
        { id: 'q33', question: 'Lender of Last Resort is ______.', options: ['SBI', 'RBI', 'World Bank', 'Govt'], correctIndex: 1, explanation: 'Helps banks in crisis.' },
        { id: 'q34', question: 'Regional Rural Banks were set up in ______.', options: ['1975', '1985', '1991', '1950'], correctIndex: 0, explanation: 'To help rural economy.' },
        { id: 'q35', question: 'NABARD is apex bank for ______.', options: ['Industry', 'Agriculture', 'Trade', 'Export'], correctIndex: 1, explanation: 'Rural development.' }
      ],
      reels: [
        { id: 'r1', title: 'Bull vs Bear', content: 'Bull: Expects Price Rise 📈\nBear: Expects Price Fall 📉', color: getReelColor(5) },
        { id: 'r2', title: 'RBI Role', content: 'The Boss of all Banks.\nControls money supply.', color: getReelColor(6) },
        { id: 'r3', title: 'Repo Rate', content: 'RBI lends to Banks.\nIf Repo ^, Loan Interest ^.', color: getReelColor(0) },
        { id: 'r4', title: 'Monetary Policy', content: 'Policy of Central Bank to control money supply.', color: getReelColor(1) },
        { id: 'r5', title: 'Function: Issue Currency', content: 'RBI issues all notes except Re 1 note/coins.', color: getReelColor(2) },
        { id: 'r6', title: 'Function: Banker to Govt', content: 'RBI manages govt accounts and debt.', color: getReelColor(3) },
        { id: 'r7', title: 'Function: Banker\'s Bank', content: 'Lender of last resort for commercial banks.', color: getReelColor(4) },
        { id: 'r8', title: 'Function: Forex', content: 'Custodian of Foreign Exchange Reserves.', color: getReelColor(5) },
        { id: 'r9', title: 'Quantitative Tool: CRR', content: 'Cash Reserve Ratio.\n% of deposits banks MUST keep with RBI.', color: getReelColor(6) },
        { id: 'r10', title: 'Quantitative Tool: SLR', content: 'Statutory Liquidity Ratio.\n% banks keep with THEMSELVES (Gold/Cash).', color: getReelColor(7) },
        { id: 'r11', title: 'Qualitative Tool', content: 'Moral Suasion, Margin Requirements.\nSelective control.', color: getReelColor(8) },
        { id: 'r12', title: 'Money Market Instrument', content: 'Treasury Bills (T-Bills).\nIssued by Govt for 91/182/364 days.', color: getReelColor(9) },
        { id: 'r13', title: 'Commercial Paper', content: 'Unsecured note issued by top companies.', color: getReelColor(0) },
        { id: 'r14', title: 'Certificate of Deposit', content: 'Issued by Banks.\nNegotiable instrument.', color: getReelColor(1) },
        { id: 'r15', title: 'Capital Market: Primary', content: 'New Issue Market.\nIPO (Initial Public Offering).', color: getReelColor(2) },
        { id: 'r16', title: 'Capital Market: Secondary', content: 'Stock Exchange.\nTrading of existing shares.', color: getReelColor(3) },
        { id: 'r17', title: 'NSE', content: 'National Stock Exchange.\nLocated in Mumbai.', color: getReelColor(4) },
        { id: 'r18', title: 'BSE', content: 'Bombay Stock Exchange.\nOldest in Asia.', color: getReelColor(5) },
        { id: 'r19', title: 'Mutual Funds', content: 'Pool money from public to invest in market.', color: getReelColor(6) },
        { id: 'r20', title: 'Unorganized Sector', content: 'Moneylenders, Indigenous Bankers.\nNot regulated by RBI.', color: getReelColor(7) },
        { id: 'r21', title: 'Problem: Dual Control', content: 'Co-op banks controlled by RBI and State Govt.', color: getReelColor(8) },
        { id: 'r22', title: 'Problem: Cash Economy', content: 'Large part of India still uses cash.\nHard to regulate.', color: getReelColor(9) }
      ]
    },
    {
      id: 'eco10',
      title: '10. Foreign Trade of India',
      description: 'Composition and Direction of Trade.',
      summary: 'Internal vs Foreign Trade.\nBOP (Balance of Payment) vs BOT (Balance of Trade).\nTrends: Software exports up, Oil imports up.',
      detailedNotes: '### 1. Concepts\n* **Internal Trade**: Buying/Selling within boundaries.\n* **Foreign Trade**: Trade between countries.\n   * **Import**: Inflow of goods.\n   * **Export**: Outflow of goods.\n   * **Entrepot**: Re-export (Importing to Export).\n\n### 2. Balance of Payments (BOP) vs Balance of Trade (BOT)\n* **BOT**: Difference between value of Exports and Imports of Visible Goods only.\n* **BOP**: Systematic record of all international economic transactions (Goods + Services + Capital). Broader concept.\n\n### 3. Trends in India\'s Trade\n* **Exports**: Shift from traditional (Tea, Jute) to non-traditional (Engineering goods, Gems, Readymade garments).\n* **Imports**: Petroleum (POL) is top item. Gold, Fertilizers.\n* **Direction**: Trade increasing with Asian countries and USA, decreasing share of UK.',
      flashcards: [
        { id: 'f1', front: 'BOT', back: 'Balance of Trade (Goods only).' },
        { id: 'f2', front: 'BOP', back: 'Balance of Payments (Goods + Services + Capital).' },
        { id: 'f3', front: 'Main Import of India', back: 'Petroleum (Crude Oil).' },
        { id: 'f4', front: 'Main Export of India', back: 'Engineering Goods, Gems, Textiles.' },
        { id: 'f5', front: 'Entrepot Trade', back: 'Importing goods for re-exporting (e.g., Processing diamonds).' },
        { id: 'f6', front: 'Invisible Trade', back: 'Trade in Services (Tourism, Software).' },
        { id: 'f7', front: 'Favourable BOT', back: 'Exports > Imports.' },
        { id: 'f8', front: 'Unfavourable BOT', back: 'Imports > Exports (Deficit).' },
        { id: 'f9', front: 'OPEC', back: 'Organization of Petroleum Exporting Countries.' },
        { id: 'f10', front: 'Globalization', back: 'Integration of domestic economy with world economy.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Trade between two countries is ______ trade.', options: ['Internal', 'Foreign', 'Local', 'State'], correctIndex: 1, explanation: 'International trade.' },
        { id: 'q2', question: 'Balance of Payment includes ______.', options: ['Goods only', 'Services only', 'Goods and Services', 'None'], correctIndex: 2, explanation: 'It is a systematic record of all transactions.' },
        { id: 'q3', question: 'India\'s largest import item is ______.', options: ['Gold', 'Petroleum', 'Electronics', 'Cotton'], correctIndex: 1, explanation: 'Energy needs drive imports.' },
        { id: 'q4', question: 'Buying goods from other country is ______.', options: ['Export', 'Import', 'Entrepot', 'Internal'], correctIndex: 1, explanation: 'Inflow of goods.' },
        { id: 'q5', question: 'Software services are part of ______ trade.', options: ['Visible', 'Invisible', 'Goods', 'None'], correctIndex: 1, explanation: 'Intangible services.' },
        { id: 'q6', question: 'Internal trade is also known as ______ trade.', options: ['International', 'Domestic', 'Foreign', 'Global'], correctIndex: 1, explanation: 'Within national boundaries.' },
        { id: 'q7', question: 'Importing to export is called ______.', options: ['Entrepot', 'Import', 'Export', 'Internal'], correctIndex: 0, explanation: 'Re-export.' },
        { id: 'q8', question: 'Which is a traditional export of India?', options: ['Tea', 'Electronics', 'Petroleum', 'Computers'], correctIndex: 0, explanation: 'Agri based.' },
        { id: 'q9', question: 'Which is a non-traditional export?', options: ['Tea', 'Jute', 'Readymade Garments', 'Spices'], correctIndex: 2, explanation: 'Modern industrial.' },
        { id: 'q10', question: 'Trade surplus means ______.', options: ['X > M', 'M > X', 'X = M', 'None'], correctIndex: 0, explanation: 'Export > Import.' },
        { id: 'q11', question: 'Trade deficit means ______.', options: ['X > M', 'M > X', 'X = M', 'None'], correctIndex: 1, explanation: 'Import > Export.' },
        { id: 'q12', question: 'Balance of Trade deals with ______.', options: ['Visible items', 'Invisible items', 'Capital', 'All'], correctIndex: 0, explanation: 'Goods only.' },
        { id: 'q13', question: 'Visible trade refers to trade in ______.', options: ['Services', 'Goods', 'Ideas', 'None'], correctIndex: 1, explanation: 'Physical items.' },
        { id: 'q14', question: 'Invisible trade refers to trade in ______.', options: ['Goods', 'Services', 'Gold', 'Machinery'], correctIndex: 1, explanation: 'Cannot be seen.' },
        { id: 'q15', question: 'India is a member of ______.', options: ['WTO', 'OPEC', 'EU', 'NAFTA'], correctIndex: 0, explanation: 'World Trade Organization.' },
        { id: 'q16', question: 'Globalization implies ______.', options: ['Isolation', 'Integration', 'Protection', 'Restriction'], correctIndex: 1, explanation: 'World as a global village.' },
        { id: 'q17', question: 'Gold is a major ______ of India.', options: ['Export', 'Import', 'Production', 'None'], correctIndex: 1, explanation: 'High demand for jewelry.' },
        { id: 'q18', question: 'Before 1947, India\'s trade was mainly with ______.', options: ['USA', 'Russia', 'Britain', 'Japan'], correctIndex: 2, explanation: 'Colonial rule.' },
        { id: 'q19', question: 'Now India\'s biggest trading partner is ______.', options: ['UK', 'USA', 'Russia', 'Germany'], correctIndex: 1, explanation: 'Shift in direction.' },
        { id: 'q20', question: 'Which sector earns maximum forex for India?', options: ['Agriculture', 'IT/Services', 'Mining', 'Fishery'], correctIndex: 1, explanation: 'Software exports.' },
        { id: 'q21', question: 'FDI stands for ______.', options: ['Foreign Direct Investment', 'Foreign Debt India', 'Free Direct Interest', 'None'], correctIndex: 0, explanation: 'Investment in assets.' },
        { id: 'q22', question: 'FII stands for ______.', options: ['Foreign Institutional Investment', 'Foreign Indirect Income', 'None', 'None'], correctIndex: 0, explanation: 'Investment in markets.' },
        { id: 'q23', question: 'Capital account includes ______.', options: ['Goods', 'Services', 'Investments/Loans', 'Gifts'], correctIndex: 2, explanation: 'Changes in asset ownership.' },
        { id: 'q24', question: 'Current account includes ______.', options: ['Goods & Services', 'Loans', 'Investments', 'None'], correctIndex: 0, explanation: 'Recurring transactions.' },
        { id: 'q25', question: 'Devaluation of currency encourages ______.', options: ['Imports', 'Exports', 'Savings', 'None'], correctIndex: 1, explanation: 'Goods become cheaper for foreigners.' },
        { id: 'q26', question: 'Which is NOT a type of foreign trade?', options: ['Import', 'Export', 'Entrepot', 'Inter-state'], correctIndex: 3, explanation: 'Inter-state is internal.' },
        { id: 'q27', question: 'BOP is always ______.', options: ['Balanced', 'Surplus', 'Deficit', 'None'], correctIndex: 0, explanation: 'In accounting sense.' },
        { id: 'q28', question: 'Disequilibrium in BOP can be corrected by ______.', options: ['Export promotion', 'Import substitution', 'Devaluation', 'All'], correctIndex: 3, explanation: 'Measures to fix deficit.' },
        { id: 'q29', question: 'Import substitution means ______.', options: ['Producing locally', 'Importing more', 'Stopping trade', 'None'], correctIndex: 0, explanation: 'To save forex.' },
        { id: 'q30', question: 'Tourism is an ______ export.', options: ['Visible', 'Invisible', 'Goods', 'None'], correctIndex: 1, explanation: 'Service export.' },
        { id: 'q31', question: 'Payment of interest on foreign loan is recorded in ______.', options: ['Current Account', 'Capital Account', 'Suspense Account', 'None'], correctIndex: 0, explanation: 'Investment income.' },
        { id: 'q32', question: 'Borrowing from IMF is recorded in ______.', options: ['Current Account', 'Capital Account', 'Trade Account', 'None'], correctIndex: 1, explanation: 'Liability creation.' },
        { id: 'q33', question: 'Fertilizers are ______ by India.', options: ['Exported', 'Imported', 'Ignored', 'None'], correctIndex: 1, explanation: 'To support agriculture.' },
        { id: 'q34', question: 'Gems and Jewelry are ______.', options: ['Imported', 'Exported', 'Both', 'None'], correctIndex: 2, explanation: 'Rough diamonds imported, polished exported.' },
        { id: 'q35', question: 'Trade barrier means ______.', options: ['Free trade', 'Restriction on trade', 'Promotion', 'None'], correctIndex: 1, explanation: 'Tariffs and Quotas.' }
      ],
      reels: [
        { id: 'r1', title: 'BOP > BOT', content: 'BOP is the big picture.\nIt includes Tourism, Software, Loans.', color: getReelColor(0) },
        { id: 'r2', title: 'Oil', content: 'India\'s biggest bill?\nImporting Crude Oil.', color: getReelColor(1) },
        { id: 'r3', title: 'Entrepot', content: 'Buy raw, Make finished, Sell abroad.\nValue Addition!', color: getReelColor(2) },
        { id: 'r4', title: 'Role: Earns Forex', content: 'Foreign trade earns foreign currency for imports.', color: getReelColor(3) },
        { id: 'r5', title: 'Role: Technology', content: 'Importing advanced tech helps development.', color: getReelColor(4) },
        { id: 'r6', title: 'Role: Resource Allocation', content: 'Sell what you are good at making (Comparative Advantage).', color: getReelColor(5) },
        { id: 'r7', title: 'Type: Import', content: 'Buying goods from USA/China.', color: getReelColor(6) },
        { id: 'r8', title: 'Type: Export', content: 'Selling goods to UK/Dubai.', color: getReelColor(7) },
        { id: 'r9', title: 'Composition of Exports', content: 'Used to be Tea/Jute.\nNow Engineering/Software.', color: getReelColor(8) },
        { id: 'r10', title: 'Composition of Imports', content: 'Petroleum, Gold, Fertilizers, Machinery.', color: getReelColor(9) },
        { id: 'r11', title: 'Direction of Trade', content: 'Whom do we trade with?\nUSA is our top partner.', color: getReelColor(0) },
        { id: 'r12', title: 'Visible Trade', content: 'Trade in Goods (Cars, Wheat).', color: getReelColor(1) },
        { id: 'r13', title: 'Invisible Trade', content: 'Trade in Services (IT, Banking, Tourism).', color: getReelColor(2) },
        { id: 'r14', title: 'Current Account', content: 'Records imports/exports of goods and services.', color: getReelColor(3) },
        { id: 'r15', title: 'Capital Account', content: 'Records investments and loans (FDI).', color: getReelColor(4) },
        { id: 'r16', title: 'Deficit', content: 'Imports > Exports.\nWe owe the world money.', color: getReelColor(5) },
        { id: 'r17', title: 'Surplus', content: 'Exports > Imports.\nThe world owes us money.', color: getReelColor(6) },
        { id: 'r18', title: 'Ocean Trade', content: 'Most foreign trade happens via Sea Transport.', color: getReelColor(7) },
        { id: 'r19', title: 'Policy: Liberalization', content: '1991 Reform.\nRemoved restrictions on trade.', color: getReelColor(8) },
        { id: 'r20', title: 'SEZ', content: 'Special Economic Zone.\nTax-free zones to boost exports.', color: getReelColor(9) },
        { id: 'r21', title: 'WTO', content: 'World Trade Organization.\nRegulates global trade rules.', color: getReelColor(0) },
        { id: 'r22', title: 'Make in India', content: 'Campaign to boost domestic manufacturing and exports.', color: getReelColor(1) }
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
  [Stream.ARTS]: { 
    id: Stream.ARTS, 
    subjects: [
      ECONOMICS_SUBJECT,
      {
        id: 'his', name: 'History', icon: 'BookOpen', color: 'bg-orange-500', syllabus: 'Pending...', paperPattern: 'Pending...', previousPapers: [], chapters: []
      },
      {
        id: 'geo', name: 'Geography', icon: 'Globe', color: 'bg-emerald-500', syllabus: 'Pending...', paperPattern: 'Pending...', previousPapers: [], chapters: []
      },
      {
        id: 'pol', name: 'Political Science', icon: 'Building2', color: 'bg-red-500', syllabus: 'Pending...', paperPattern: 'Pending...', previousPapers: [], chapters: []
      },
      {
        id: 'psy', name: 'Psychology', icon: 'Brain', color: 'bg-violet-500', syllabus: 'Pending...', paperPattern: 'Pending...', previousPapers: [], chapters: []
      },
      {
        id: 'soc', name: 'Sociology', icon: 'Users', color: 'bg-pink-500', syllabus: 'Pending...', paperPattern: 'Pending...', previousPapers: [], chapters: []
      }
    ] 
  },
  [Stream.SCIENCE]: { 
    id: Stream.SCIENCE, 
    subjects: [
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
