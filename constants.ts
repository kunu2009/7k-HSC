
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
              { id: 'q7', question: 'The term "Mikros" means ______.', options: ['Large', 'Small', 'Whole', 'None'], correctIndex: 1, explanation: 'It means small or a millionth part.' }
            ],
            reels: [
              { id: 'r1', title: 'Micro vs Macro', content: 'Micro = Tree (Individual)\nMacro = Forest (Aggregate)', color: getReelColor(0) },
              { id: 'r2', title: 'Slicing Method', content: 'Micro cuts the economy into small slices to study them in depth.', color: getReelColor(1) },
              { id: 'r3', title: 'Scope of Micro', content: '1. Product Pricing\n2. Factor Pricing\n3. Economic Welfare', color: getReelColor(2) },
              { id: 'r4', title: 'Ragnar Frisch', content: 'The man who gave us the terms "Micro" and "Macro" in 1933.', color: getReelColor(3) },
              { id: 'r5', title: 'Price Theory', content: 'Micro explains how prices of Apples, Mobiles, and Wages are determined.', color: getReelColor(4) }
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
              { id: 'q6', question: 'Which is NOT an assumption of DMU?', options: ['Rationality', 'Cardinal Measurement', 'Homogeneity', 'Different Size'], correctIndex: 3, explanation: 'Reasonable size is assumed, not different size.' }
            ],
            reels: [
              { id: 'r1', title: 'Point of Satiety', content: 'Stop eating when MU = 0.\nBeyond this, satisfaction turns into dissatisfaction!', color: getReelColor(3) },
              { id: 'r2', title: 'DMU in Daily Life', content: 'The first glass of water implies high utility.\nThe 5th glass? Not so much.', color: getReelColor(4) },
              { id: 'r3', title: 'Exceptions to DMU', content: '1. Money\n2. Hobbies\n3. Addictions\n4. Power', color: getReelColor(5) },
              { id: 'r4', title: 'Form Utility', content: 'Clay -> Pot\nWood -> Chair\nValue added by changing shape.', color: getReelColor(6) }
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
              { id: 'q6', question: 'Expansion of demand is caused by ______.', options: ['Increase in Income', 'Decrease in Price', 'Change in Taste', 'Decrease in Tax'], correctIndex: 1, explanation: 'Expansion/Contraction is always due to Price.' }
            ],
            reels: [
              { id: 'r1', title: 'Demand Rule', content: 'Price UP ⬆️\nDemand DOWN ⬇️\n(Inverse Relationship)', color: getReelColor(5) },
              { id: 'r2', title: 'Giffen Paradox', content: 'In inferior goods, when price drops, people buy LESS to shift to better goods.', color: getReelColor(6) },
              { id: 'r3', title: 'Composite Demand', content: 'One thing, Many uses.\nMilk: Tea, Curd, Cheese, Sweets.', color: getReelColor(0) },
              { id: 'r4', title: 'Expansion vs Increase', content: 'Expansion: Due to Price (Same curve).\nIncrease: Due to Income/Taste (Shift curve).', color: getReelColor(1) }
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
              { id: 'q5', question: 'If % Change in Qty > % Change in Price, it is ______.', options: ['Ed > 1', 'Ed < 1', 'Ed = 1', 'Ed = 0'], correctIndex: 0, explanation: 'Relatively Elastic.' }
            ],
            reels: [
              { id: 'r1', title: 'Ed = 0', content: 'No matter the price, I need my medicine.\n(Perfectly Inelastic)', color: getReelColor(0) },
              { id: 'r2', title: 'Ed > 1', content: 'Small discount on iPhone -> Huge sales jump!\n(Relatively Elastic)', color: getReelColor(1) },
              { id: 'r3', title: 'Rectangular Hyperbola', content: 'The shape of the curve when Ed = 1.\nUniform elasticity.', color: getReelColor(2) },
              { id: 'r4', title: 'Point Method', content: 'L / U\nLower segment / Upper segment.', color: getReelColor(3) }
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
              { id: 'q5', question: 'Average Cost = ______.', options: ['TC/Q', 'TC x Q', 'TFC + TVC', 'MC x Q'], correctIndex: 0, explanation: 'Cost per unit.' }
            ],
            reels: [
              { id: 'r1', title: 'Supply Rule', content: 'Price UP ⬆️\nSupply UP ⬆️\n(Direct Relationship)', color: getReelColor(2) },
              { id: 'r2', title: 'Stock > Supply', content: 'Stock is what is in the godown.\nSupply is what is on the shop shelf.', color: getReelColor(3) },
              { id: 'r3', title: 'Backward Bending', content: 'Initially work more for money.\nLater work less for leisure.', color: getReelColor(4) }
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
              { id: 'q5', question: 'Selling cost is necessary in ______.', options: ['Monopoly', 'Perfect Competition', 'Monopolistic Competition', 'None'], correctIndex: 2, explanation: 'To highlight product differentiation.' }
            ],
            reels: [
              { id: 'r1', title: 'Monopoly', content: 'I am the only one.\nI set the price.\n(Indian Railways)', color: getReelColor(4) },
              { id: 'r2', title: 'Oligopoly', content: 'Few Giants.\nTelecom: Jio, Airtel, Vi.\nIntense competition.', color: getReelColor(5) },
              { id: 'r3', title: 'Product Differentiation', content: 'Lux vs Dove.\nSame soap, different smell/pack.', color: getReelColor(6) }
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
              { id: 'q5', question: 'Index number of base year is assumed to be ______.', options: ['0', '1', '100', '10'], correctIndex: 2, explanation: 'Standard comparison point.' }
            ],
            reels: [
              { id: 'r1', title: 'What is Index No?', content: 'A tool to measure change.\nInflation = CPI Index.', color: getReelColor(6) },
              { id: 'r2', title: 'Base Year', content: 'Always denoted by suffix "0".\nPrice = p0, Qty = q0.', color: getReelColor(0) },
              { id: 'r3', title: 'Laspeyres vs Paasche', content: 'Laspeyres likes the PAST (q0).\nPaasche likes the PRESENT (q1).', color: getReelColor(1) }
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
              { id: 'q5', question: 'Income of a beggar is ______.', options: ['Included', 'Excluded', 'Transfer income', 'Both B & C'], correctIndex: 3, explanation: 'It is a transfer payment, not earned.' }
            ],
            reels: [
              { id: 'r1', title: 'GDP vs GNP', content: 'GDP = Where produced (India).\nGNP = Who produced (Indian).', color: getReelColor(1) },
              { id: 'r2', title: 'Double Counting', content: 'Counting flour AND bread?\nNo! Only final goods.', color: getReelColor(2) },
              { id: 'r3', title: 'Circular Flow', content: 'Money flows from House to Firm (Spending) and back (Wages).', color: getReelColor(3) }
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
              { id: 'q5', question: 'Public finance deals with ______.', options: ['Individual', 'Government', 'Companies', 'Banks'], correctIndex: 1, explanation: 'Central, State, and Local govt.' }
            ],
            reels: [
              { id: 'r1', title: 'Direct vs Indirect', content: 'Direct: Hits YOU directly (Income Tax).\nIndirect: Hits you via products (GST).', color: getReelColor(3) },
              { id: 'r2', title: 'Deficit Budget', content: 'Spending more than earning?\nGood for developing economy growth!', color: getReelColor(4) },
              { id: 'r3', title: 'GST', content: 'One Nation, One Tax.\nUnified the Indirect Tax structure.', color: getReelColor(5) }
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
              { id: 'q5', question: '______ is the issuer of currency notes.', options: ['SBI', 'RBI', 'Govt of India', 'World Bank'], correctIndex: 1, explanation: 'Except one rupee note/coins.' }
            ],
            reels: [
              { id: 'r1', title: 'Bull vs Bear', content: 'Bull: Expects Price Rise 📈\nBear: Expects Price Fall 📉', color: getReelColor(5) },
              { id: 'r2', title: 'RBI Role', content: 'The Boss of all Banks.\nControls money supply.', color: getReelColor(6) },
              { id: 'r3', title: 'Repo Rate', content: 'RBI lends to Banks.\nIf Repo ^, Loan Interest ^.', color: getReelColor(0) }
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
              { id: 'q5', question: 'Software services are part of ______ trade.', options: ['Visible', 'Invisible', 'Goods', 'None'], correctIndex: 1, explanation: 'Intangible services.' }
            ],
            reels: [
              { id: 'r1', title: 'BOP > BOT', content: 'BOP is the big picture.\nIt includes Tourism, Software, Loans.', color: getReelColor(0) },
              { id: 'r2', title: 'Oil', content: 'India\'s biggest bill?\nImporting Crude Oil.', color: getReelColor(1) },
              { id: 'r3', title: 'Entrepot', content: 'Buy raw, Make finished, Sell abroad.\nValue Addition!', color: getReelColor(2) }
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
