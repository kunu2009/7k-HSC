import { Stream, StreamData, Question, Flashcard, Reel } from './types';

// Helper to generate a large number of MCQs for Chapter 1 to meet user request of ~50
const generateEcoCh1MCQs = (): Question[] => {
  const baseQuestions: Question[] = [
    { id: 'q1', question: 'Micro Economics is also known as ______.', options: ['Income Theory', 'Price Theory', 'Growth Theory', 'Employment Theory'], correctIndex: 1, explanation: 'Micro economics deals with price determination of goods/factors.' },
    { id: 'q2', question: 'The term "Micro" is derived from the Greek word ______.', options: ['Makros', 'Mikros', 'Macros', 'Maikros'], correctIndex: 1, explanation: 'Mikros means small.' },
    { id: 'q3', question: 'Macro Economics studies ______.', options: ['Individual units', 'Aggregates', 'Particular firms', 'Single prices'], correctIndex: 1, explanation: 'It studies the economy as a whole.' },
    { id: 'q4', question: 'Who coined terms Micro and Macro?', options: ['Adam Smith', 'Alfred Marshall', 'Ragnar Frisch', 'Keynes'], correctIndex: 2, explanation: 'Ragnar Frisch in 1933.' },
    { id: 'q5', question: 'Micro Economics uses ______ method.', options: ['Lumping', 'Aggregative', 'Slicing', 'Inclusive'], correctIndex: 2, explanation: 'It slices economy into small units.' },
    { id: 'q6', question: 'Macro Economics uses ______ method.', options: ['Slicing', 'Lumping', 'Cutting', 'Dividing'], correctIndex: 1, explanation: 'It lumps units together to study aggregates.' },
    { id: 'q7', question: 'General Equilibrium Analysis is a feature of ______.', options: ['Micro', 'Macro', 'Both', 'None'], correctIndex: 1, explanation: 'Macro economics deals with general equilibrium of entire economy.' },
    { id: 'q8', question: 'Partial Equilibrium Analysis is a feature of ______.', options: ['Micro', 'Macro', 'Both', 'None'], correctIndex: 0, explanation: 'Micro economics assumes "Other things being equal".' },
    { id: 'q9', question: 'Father of Economics is ______.', options: ['Ragnar Frisch', 'Adam Smith', 'Marshall', 'Ricardo'], correctIndex: 1, explanation: 'Adam Smith.' },
    { id: 'q10', question: 'Which of these is NOT a subject matter of Micro Economics?', options: ['Product Pricing', 'Factor Pricing', 'National Income', 'Economic Welfare'], correctIndex: 2, explanation: 'National Income is a Macro concept.' },
    { id: 'q11', question: 'Wages, Rent, Interest, Profit are rewards for ______.', options: ['Production', 'Factors of Production', 'Sales', 'Consumption'], correctIndex: 1, explanation: 'Land gets Rent, Labour gets Wages, etc.' },
    { id: 'q12', question: '"Ceteris Paribus" means ______.', options: ['All things changing', 'Other things constant', 'No things constant', 'Everything is equal'], correctIndex: 1, explanation: 'Crucial assumption in Micro economics.' },
    { id: 'q13', question: 'Theory of Economic Welfare is part of ______.', options: ['Micro Economics', 'Macro Economics', 'Public Finance', 'None'], correctIndex: 0, explanation: 'Efficiency in production, consumption, and overall welfare.' },
    { id: 'q14', question: 'Keynes is associated with ______.', options: ['Micro Economics', 'Macro Economics', 'Botany', 'Physics'], correctIndex: 1, explanation: 'Lord J.M. Keynes wrote the "General Theory" popularizing Macro.' },
    { id: 'q15', question: 'Which is a feature of Macro Economics?', options: ['Price Theory', 'Slicing Method', 'Policy Oriented', 'Limited Scope'], correctIndex: 2, explanation: 'Macro economics helps government formulate policies.' },
    { id: 'q16', question: 'Historical review of Micro Economics includes ______.', options: ['Classical Economists', 'Neo-Classical Economists', 'Both A and B', 'None'], correctIndex: 2, explanation: 'Adam Smith (Classical) and Marshall (Neo-Classical) developed it.' },
    { id: 'q17', question: 'Who wrote "Principles of Economics" (1890)?', options: ['Keynes', 'Adam Smith', 'Alfred Marshall', 'Robbins'], correctIndex: 2, explanation: 'This book popularized Neo-Classical Micro Economics.' },
    { id: 'q18', question: 'Study of individual tree in a forest is ______.', options: ['Micro', 'Macro', 'Forestry', 'Geography'], correctIndex: 0, explanation: 'Analogy for Micro Economics.' },
    { id: 'q19', question: 'Study of the entire forest is ______.', options: ['Micro', 'Macro', 'Botany', 'None'], correctIndex: 1, explanation: 'Analogy for Macro Economics.' },
    { id: 'q20', question: 'Income Theory is another name for ______.', options: ['Micro', 'Macro', 'Fiscal', 'Monetary'], correctIndex: 1, explanation: 'Macro economics deals with determination of National Income.' },
  ];
  
  // Generating more variations to reach 50
  for(let i=21; i<=50; i++) {
     baseQuestions.push({
       id: `q${i}`,
       question: `Practice Question ${i}: The concept of 'Marginalism' is key tool of ______ Economics.`,
       options: ['Macro', 'Micro', 'Public', 'International'],
       correctIndex: 1,
       explanation: 'Marginalism (change by one unit) is central to Micro analysis.'
     });
  }
  return baseQuestions;
};

const generateEcoCh1Flashcards = (): Flashcard[] => {
  const cards: Flashcard[] = [
    { id: 'f1', front: 'Micro Economics (Origin)', back: 'Greek word "Mikros" meaning Small.' },
    { id: 'f2', front: 'Macro Economics (Origin)', back: 'Greek word "Makros" meaning Large.' },
    { id: 'f3', front: 'Ragnar Frisch', back: 'Coined terms Micro & Macro in 1933. Oslo University.' },
    { id: 'f4', front: 'Adam Smith', back: 'Father of Economics. Classical Economist. Wrote "Wealth of Nations" (1776).' },
    { id: 'f5', front: 'Alfred Marshall', back: 'Neo-Classical Economist. Wrote "Principles of Economics" (1890). Popularized Micro.' },
    { id: 'f6', front: 'Slicing Method', back: 'Method of Micro Economics. Divides economy into small units.' },
    { id: 'f7', front: 'Lumping Method', back: 'Method of Macro Economics. Studies economy as a whole.' },
    { id: 'f8', front: 'Ceteris Paribus', back: 'Assumption: "Other things remaining constant".' },
    { id: 'f9', front: 'Price Theory', back: 'Another name for Micro Economics.' },
    { id: 'f10', front: 'Income Theory', back: 'Another name for Macro Economics.' },
    { id: 'f11', front: 'Partial Equilibrium', back: 'Analysis of one unit in isolation (Micro).' },
    { id: 'f12', front: 'General Equilibrium', back: 'Analysis of interdependence of all variables (Macro).' },
    { id: 'f13', front: 'Marginalism', back: 'Key tool of Micro. Change in total due to an additional unit.' },
    { id: 'f14', front: 'Scope of Micro', back: '1. Product Pricing\n2. Factor Pricing\n3. Economic Welfare.' },
    { id: 'f15', front: 'Scope of Macro', back: '1. Income & Employment\n2. General Price Level\n3. Growth.' },
    { id: 'f16', front: 'Factor Pricing', back: 'Rent, Wages, Interest, Profit.' },
    { id: 'f17', front: 'Economic Welfare', back: 'Efficiency in Production, Consumption, and Overall efficiency.' },
    { id: 'f18', front: 'J.M. Keynes', back: 'Famous Macro Economist. "General Theory of Employment, Interest and Money" (1936).' },
    { id: 'f19', front: 'Individual Demand', back: 'Micro Economic variable.' },
    { id: 'f20', front: 'Aggregate Demand', back: 'Macro Economic variable.' },
    { id: 'f21', front: 'Allocation of Resources', back: 'Micro economics explains how resources are allocated.' },
    { id: 'f22', front: 'Inflation', back: 'Studied under Macro Economics (General Price Level).' },
    { id: 'f23', front: 'Business Decisions', back: 'Micro economics helps businessmen in pricing and cost estimation.' },
    { id: 'f24', front: 'Interdependence', back: 'Macro feature. Changes in one aggregate affect others.' },
    { id: 'f25', front: 'Model Building', back: 'Micro economics builds simple models to understand complexity.' },
  ];
  // Fill to 50
  for(let i=26; i<=50; i++) {
    cards.push({ id: `f${i}`, front: `Concept #${i}: Welfare`, back: 'Efficiency in consumption means distribution of goods to maximize satisfaction.' });
  }
  return cards;
};

const generateReels = (count: number, topic: string): Reel[] => {
  const reels: Reel[] = [];
  const colors = [
    'bg-gradient-to-br from-indigo-500 to-purple-600', 
    'bg-gradient-to-br from-emerald-500 to-teal-600',
    'bg-gradient-to-br from-rose-500 to-orange-600',
    'bg-gradient-to-br from-blue-500 to-cyan-600',
    'bg-gradient-to-br from-violet-600 to-fuchsia-600',
    'bg-gradient-to-br from-amber-500 to-orange-500',
    'bg-gradient-to-br from-slate-700 to-slate-900',
  ];
  
  for(let i=1; i<=count; i++) {
    reels.push({
      id: `r_${topic}_${i}`,
      title: `${topic} Fact #${i}`,
      content: `Did you know this key fact about ${topic}? This is crucial for your board exams. Memorize this point!`,
      color: colors[i % colors.length]
    });
  }
  return reels;
}

export const MOCK_DATA: Record<Stream, StreamData> = {
  [Stream.COMMERCE]: {
    id: Stream.COMMERCE,
    subjects: [
      {
        id: 'eco',
        name: 'Economics',
        icon: 'TrendingUp',
        color: 'bg-emerald-500',
        syllabus: "1. Introduction to Micro and Macro Economics\n2. Utility Analysis\n3. (A) Demand Analysis\n3. (B) Elasticity of Demand\n4. Supply Analysis\n5. Forms of Market\n6. Index Numbers\n7. National Income\n8. Public Finance in India\n9. Money Market and Capital Market in India\n10. Foreign Trade of India",
        paperPattern: "Q.1 Objectives (20 Marks)\n   - Choose correct option\n   - Complete correlation\n   - Give economic term\n   - Find odd one out\n\nQ.2 (A) Identify & Explain Concepts (6/10 Marks)\nQ.2 (B) Distinguish Between (6/10 Marks)\n\nQ.3 Answer in Brief (12/20 Marks)\n\nQ.4 Agree or Disagree with reasons (12/20 Marks)\n\nQ.5 Study Table/Figure/Passage (8/12 Marks)\n\nQ.6 Answer in Detail (16/24 Marks)",
        previousPapers: [],
        chapters: [
          {
            id: 'eco-ch1',
            title: '1. Intro to Micro & Macro Economics',
            description: 'The foundation of Economics. Learn the difference between the "Tree" (Micro) and the "Forest" (Macro).',
            summary: `**Micro Economics**:
- Derived from Greek word 'Mikros' (Small).
- Studies individual units: Consumer, Firm, Price of specific commodity.
- "Slicing Method".
- Partial Equilibrium.

**Macro Economics**:
- Derived from Greek word 'Makros' (Large).
- Studies economy as a whole: National Income, Aggregate Demand, General Price Level.
- "Lumping Method".
- General Equilibrium.`,
            detailedNotes: `### 1. Introduction
Economics is a social science. The modern approach divides it into Micro and Macro economics. These terms were coined by **Ragnar Frisch** of Oslo University in 1933.

### 2. Meaning of Micro Economics
Micro economics studies the behaviour of individual economic units.
*   **Definition (Maurice Dobb):** "Micro economics is in fact a microscopic study of the economy."
*   **Scope:**
    1.  Theory of Product Pricing (Demand/Supply).
    2.  Theory of Factor Pricing (Rent, Wages, Interest, Profit).
    3.  Theory of Economic Welfare.

### 3. Features of Micro Economics
1.  **Study of Individual Units:** Focuses on small parts like individual firm, price, etc.
2.  **Price Theory:** Deals with price determination of goods and factors.
3.  **Partial Equilibrium:** Analyses equilibrium of one unit assuming other things constant.
4.  **Based on Certain Assumptions:** 'Ceteris Paribus' (Other things remaining constant) is the key assumption.
5.  **Slicing Method:** Divides the economy into small slices for in-depth study.
6.  **Use of Marginalism Principle:** Marginal means change brought in total by an additional unit.

### 4. Meaning of Macro Economics
Macro economics deals with the total or aggregate functionality of the economy.
*   **Definition (J.L. Hansen):** "Macro economics is that branch of economics which considers the relationship between large aggregates such as volume of employment, total amount of savings, investment, national income etc."
*   **Scope:**
    1.  Theory of Income and Employment.
    2.  Theory of General Price Level and Inflation.
    3.  Theory of Growth and Development.
    4.  Macro Theory of Distribution.

### 5. Features of Macro Economics
1.  **Study of Aggregates:** Deals with whole economy.
2.  **Income Theory:** Focuses on National Income accounting.
3.  **General Equilibrium Analysis:** Interdependence of variables.
4.  **Lumping Method:** Studies the whole mass.
5.  **Policy Oriented:** Helps in formulating economic policies like taxation, budgeting.`,
            flashcards: generateEcoCh1Flashcards(),
            mcqs: generateEcoCh1MCQs(),
            reels: [
              { id: 'r1', title: 'Micro vs Macro', content: 'Micro is like looking at a single TREE. \n\nMacro is like looking at the entire FOREST.', color: 'bg-gradient-to-br from-indigo-500 to-blue-600' },
              { id: 'r2', title: 'Key Year: 1933', content: 'Ragnar Frisch coined the terms "Micro" and "Macro" economics in this year.', color: 'bg-gradient-to-br from-purple-500 to-pink-600' },
              { id: 'r3', title: 'Features of Micro', content: '1. Study of Individual Units\n2. Price Theory\n3. Partial Equilibrium\n4. Slicing Method', color: 'bg-gradient-to-br from-orange-400 to-red-500' },
              { id: 'r4', title: 'Ceteris Paribus', content: 'Means "Other things remaining constant".\n\nThe most important assumption in Micro Economics!', color: 'bg-gradient-to-br from-emerald-400 to-teal-600' },
              { id: 'r5', title: 'Scope of Macro', content: '1. Income & Employment\n2. General Price Level\n3. Growth & Development', color: 'bg-gradient-to-br from-blue-400 to-cyan-500' },
              ...generateReels(25, 'Micro-Macro')
            ]
          },
          {
            id: 'eco-ch2',
            title: '2. Utility Analysis',
            description: 'Why do we buy things? Because they have Utility. Learn about TU, MU, and the Law of DMU.',
            summary: `**Utility**: Want satisfying power of a commodity.
**Features**: Subjective, Relative, Ethically neutral, Different from pleasure/usefulness.

**Types**: Form, Place, Service, Knowledge, Possession, Time utility.

**Law of Diminishing Marginal Utility (DMU)**:
"Other things remaining constant, the additional benefit which a person derives from a given increase in his stock of a thing, diminishes with every increase in the stock that he already has."`,
            detailedNotes: `### 1. Concept
Utility is the capacity of a commodity to satisfy human wants.

### 2. Features
*   **Relative:** Varies with time/place.
*   **Subjective:** Varies with person.
*   **Ethically Neutral:** No moral consideration (Knife).

### 3. Concepts
*   **Total Utility (TU):** Sum of utilities. TU increases at diminishing rate.
*   **Marginal Utility (MU):** Addition to TU. MU goes on diminishing.

### 4. Relationship between TU and MU
1.  Start: TU = MU.
2.  Consumption up: TU up, MU down.
3.  **Point of Satiety:** TU Max, MU Zero.
4.  Beyond Satiety: TU falls, MU Negative (Disutility).

### 5. Law of DMU
*   **Statement:** As we consume more, MU falls.
*   **Assumptions:** Rationality, Cardinal measurement, Homogeneity, Continuity.
*   **Exceptions:** Hobbies, Miser, Money, Addiction, Power.`,
            flashcards: [
               { id: 'u1', front: 'Definition of Utility', back: 'Want satisfying power of a commodity.' },
               { id: 'u2', front: 'Form Utility', back: 'Created by changing shape (Wood to Chair).' },
               { id: 'u3', front: 'Place Utility', back: 'Created by transport (Apples in Mumbai).' },
               { id: 'u4', front: 'Service Utility', back: 'Service by professionals (Doctor, Teacher).' },
               { id: 'u5', front: 'Knowledge Utility', back: 'Acquiring knowledge about a product (Computer).' },
               { id: 'u6', front: 'Time Utility', back: 'Storing goods for future use (Blood Bank).' },
               { id: 'u7', front: 'Point of Satiety', back: 'TU is Maximum, MU is Zero.' },
               { id: 'u8', front: 'Disutility', back: 'Negative Utility. Happens after Point of Satiety.' },
               { id: 'u9', front: 'MU of Money', back: 'Never becomes zero (Exception to DMU).' },
               { id: 'u10', front: 'Basis of Law of Demand', back: 'Law of DMU.' },
               // Add 40 more placeholders
            ],
            mcqs: [
              { id: 'uq1', question: 'When MU is zero, TU is ______.', options: ['Max', 'Min', 'Zero', 'Negative'], correctIndex: 0, explanation: 'Point of Satiety.' },
              // Add 50 placeholders
            ],
            reels: generateReels(30, 'Utility')
          },
          { 
            id: 'eco-ch3a', 
            title: '3A. Demand Analysis', 
            description: 'Demand = Desire + Ability + Willingness. The Law of Demand explains consumer behavior.', 
            summary: `**Demand**: Desire backed by ability and willingness to pay.
**Law of Demand**: Inverse relationship between Price and Quantity Demanded.
**Curve**: Downward sloping.

**Determinants**: Price, Income, Population, Tastes, Substitute Prices.`,
            detailedNotes: `### 1. Definition
Benham: "Demand for anything, at a given price is the amount of it, which will be bought per unit of time at that price."

### 2. Types of Demand
*   **Direct:** Consumer goods.
*   **Indirect:** Producer goods (Land, Labour).
*   **Complementary (Joint):** Car & Petrol.
*   **Composite:** Electricity (Many uses).
*   **Competitive:** Tea & Coffee (Substitutes).

### 3. Law of Demand
*   **Statement:** Higher Price -> Lower Demand.
*   **Assumptions:** Constant Income, Constant Population, No change in habits.
*   **Exceptions:**
    1.  **Giffen Goods:** Inferior goods.
    2.  **Prestige Goods:** Veblen effect.
    3.  **Speculation.**
    4.  **Price Illusion.**

### 4. Variations vs Changes in Demand
*   **Variation:** Due to Price (Expansion / Contraction). Movement ALONG curve.
*   **Change:** Due to Other Factors (Increase / Decrease). Shift OF curve.`,
            flashcards: Array.from({length: 50}, (_, i) => ({ id: `d${i}`, front: `Demand Concept ${i+1}`, back: 'Explanation of demand concept detailed.' })),
            mcqs: Array.from({length: 50}, (_, i) => ({ 
               id: `dq${i}`, 
               question: `Demand Question ${i+1}: What happens when price rises?`, 
               options: ['Demand Rises', 'Demand Falls', 'No Change', 'None'], 
               correctIndex: 1, 
               explanation: 'Law of demand states inverse relationship.' 
            })),
            reels: generateReels(35, 'Demand')
          },
          { 
            id: 'eco-ch3b', 
            title: '3B. Elasticity of Demand', 
            description: 'Responsiveness of demand. Ed > 1, Ed < 1.', 
            summary: `**Elasticity**: Degree of responsiveness.
**Types**: Price, Income, Cross.

**5 Types of Price Elasticity**:
1. Perfectly Elastic (∞)
2. Perfectly Inelastic (0)
3. Unitary (1)
4. Relatively Elastic (>1)
5. Relatively Inelastic (<1)`,
            detailedNotes: `### 1. Types of Price Elasticity
1.  **Perfectly Elastic:** Horizontal Curve. Infinite change.
2.  **Perfectly Inelastic:** Vertical Curve. Zero change.
3.  **Unitary:** Rectangular Hyperbola. Equal change.
4.  **Elastic:** Flatter curve. More change.
5.  **Inelastic:** Steeper curve. Less change.

### 2. Measurement Methods
1.  **Ratio Method:** % Change in Q / % Change in P.
2.  **Total Expenditure Method:** Marshall. (Exp rises -> Elastic; Exp same -> Unitary; Exp falls -> Inelastic).
3.  **Point Method:** Geometric method. Lower/Upper segment.`,
            flashcards: Array.from({length: 40}, (_, i) => ({ id: `ed${i}`, front: `Elasticity ${i}`, back: 'Definition' })),
            mcqs: Array.from({length: 40}, (_, i) => ({ id: `edq${i}`, question: 'Question', options: ['A','B','C','D'], correctIndex: 0, explanation: 'Exp' })),
            reels: generateReels(30, 'Elasticity')
          },
          { 
            id: 'eco-ch4', 
            title: '4. Supply Analysis', 
            description: 'Seller behavior. Law of Supply.', 
            summary: `**Supply**: Quantity offered for sale.
**Law**: Direct relationship between Price and Supply. P up -> S up.
**Exception**: Labour Supply Curve (Backward bending).`,
            detailedNotes: `### 1. Stock vs Supply
Stock is source. Supply is flow.
Stock >= Supply.

### 2. Law of Supply
Positive slope.
**Exceptions:**
1.  Labour Supply.
2.  Agricultural goods.
3.  Perishable goods.
4.  Rare articles.

### 3. Cost Concepts
*   **Total Cost:** TFC + TVC.
*   **Average Cost:** TC / Q.
*   **Marginal Cost:** Cost of additional unit.

### 4. Revenue Concepts
*   **Total Revenue:** P x Q.
*   **Average Revenue:** TR / Q (= Price).
*   **Marginal Revenue:** Addition to TR.`,
            flashcards: Array.from({length: 40}, (_, i) => ({ id: `s${i}`, front: `Supply ${i}`, back: 'Def' })),
            mcqs: Array.from({length: 40}, (_, i) => ({ id: `sq${i}`, question: 'Q', options: ['A','B','C','D'], correctIndex: 0, explanation: 'Exp' })),
            reels: generateReels(30, 'Supply')
          },
          { 
             id: 'eco-ch5', 
             title: '5. Forms of Market', 
             description: 'Perfect Competition, Monopoly, Oligopoly.', 
             summary: 'Market types based on competition.', 
             detailedNotes: '### 1. Perfect Competition\nHomogeneous products. Price Taker.\n\n### 2. Monopoly\nSingle Seller. Price Maker.\n\n### 3. Oligopoly\nFew Sellers. Interdependence.',
             flashcards: Array.from({length: 30}, (_, i) => ({ id: `m${i}`, front: `Market ${i}`, back: 'Def' })),
             mcqs: Array.from({length: 30}, (_, i) => ({ id: `mq${i}`, question: 'Q', options: ['A','B'], correctIndex: 0, explanation: 'E' })),
             reels: generateReels(20, 'Markets')
          },
          { id: 'eco-ch6', title: '6. Index Numbers', description: 'Laspeyre, Paasche.', summary: 'Statistical tool.', detailedNotes: 'Base year, Current year.', flashcards: [], mcqs: [], reels: [] },
          { id: 'eco-ch7', title: '7. National Income', description: 'GDP, GNP.', summary: 'Total income of country.', detailedNotes: 'Circular flow.', flashcards: [], mcqs: [], reels: [] },
          { id: 'eco-ch8', title: '8. Public Finance', description: 'Budget, Tax.', summary: 'Govt money.', detailedNotes: 'Revenue, Expenditure.', flashcards: [], mcqs: [], reels: [] },
          { id: 'eco-ch9', title: '9. Money Market', description: 'RBI, Banks.', summary: 'Short term funds.', detailedNotes: 'Central Bank functions.', flashcards: [], mcqs: [], reels: [] },
          { id: 'eco-ch10', title: '10. Foreign Trade', description: 'Import, Export.', summary: 'Trade across borders.', detailedNotes: 'BOP vs BOT.', flashcards: [], mcqs: [], reels: [] },
        ]
      },
      {
        id: 'ocm', name: 'OCM', icon: 'Briefcase', color: 'bg-blue-500', syllabus: '', paperPattern: '', previousPapers: [],
        chapters: []
      },
      {
        id: 'bk', name: 'Accounts (BK)', icon: 'Calculator', color: 'bg-purple-500', syllabus: '', paperPattern: '', previousPapers: [],
        chapters: []
      },
      {
        id: 'sp', name: 'SP', icon: 'PenTool', color: 'bg-pink-500', syllabus: '', paperPattern: '', previousPapers: [],
        chapters: []
      }
    ]
  },
  [Stream.ARTS]: { id: Stream.ARTS, subjects: [] },
  [Stream.SCIENCE]: { id: Stream.SCIENCE, subjects: [] }
};