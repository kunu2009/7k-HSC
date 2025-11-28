import { Stream, StreamData, Question, Flashcard, Reel } from './types';

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

// --- CHAPTER 1 DATA: Intro to Micro & Macro ---
const ch1_flashcards: Flashcard[] = [
  { id: 'c1-f1', front: 'Micro Economics', back: 'Derived from Greek "Mikros" (Small). Studies individual units: consumer, firm, price of particular commodity.' },
  { id: 'c1-f2', front: 'Macro Economics', back: 'Derived from Greek "Makros" (Large). Studies the economy as a whole: National Income, Aggregate Demand.' },
  { id: 'c1-f3', front: 'Ragnar Frisch', back: 'Norwegian economist (Oslo University). Coined "Micro" and "Macro" in 1933. First Nobel Prize winner in Economics.' },
  { id: 'c1-f4', front: 'Ceteris Paribus', back: '"Other things remaining constant". The fundamental assumption of Micro Economics analysis.' },
  { id: 'c1-f5', front: 'Slicing Method', back: 'Micro economics splits the economy into small slices for in-depth study of each unit (e.g. one firm).' },
  { id: 'c1-f6', front: 'Lumping Method', back: 'Macro economics groups units together to study aggregates (e.g. Total National Output).' },
  { id: 'c1-f7', front: 'Adam Smith', back: 'Father of Economics. Classical Economist. Author of "Wealth of Nations" (1776).' },
  { id: 'c1-f8', front: 'Alfred Marshall', back: 'Neo-Classical Economist. Author of "Principles of Economics" (1890). Focuses on human welfare.' },
  { id: 'c1-f9', front: 'Price Theory', back: 'Micro Economics is called Price Theory as it determines prices of goods and factors of production.' },
  { id: 'c1-f10', front: 'Income Theory', back: 'Macro Economics is called Income Theory as it explains determination of National Income and Employment.' },
  { id: 'c1-f11', front: 'Partial Equilibrium', back: 'Micro analysis isolates an individual unit from other forces. It ignores interdependence.' },
  { id: 'c1-f12', front: 'General Equilibrium', back: 'Macro analysis studies the interdependence between all economic variables.' },
  { id: 'c1-f13', front: 'Scope of Micro', back: '1. Product Pricing\n2. Factor Pricing\n3. Theory of Economic Welfare' },
  { id: 'c1-f14', front: 'Scope of Macro', back: '1. Income & Employment\n2. General Price Level\n3. Growth & Development\n4. Distribution' }
];

const ch1_mcqs: Question[] = [
  { id: 'c1-q1', question: 'The term "Micro" is derived from the Greek word ______.', options: ['Makros', 'Mikros', 'Macros', 'Maikros'], correctIndex: 1, explanation: 'Mikros means small.' },
  { id: 'c1-q2', question: 'Micro Economics is also known as ______.', options: ['Income Theory', 'Price Theory', 'Growth Theory', 'Employment Theory'], correctIndex: 1, explanation: 'It deals with product and factor price determination.' },
  { id: 'c1-q3', question: 'Who coined the terms Micro and Macro Economics?', options: ['Adam Smith', 'Alfred Marshall', 'Ragnar Frisch', 'J.M. Keynes'], correctIndex: 2, explanation: 'Ragnar Frisch in 1933.' },
  { id: 'c1-q4', question: 'Micro Economics uses ______ method.', options: ['Lumping', 'Aggregative', 'Slicing', 'Inclusive'], correctIndex: 2, explanation: 'It slices the economy into small units for detailed study.' },
  { id: 'c1-q5', question: 'Which is NOT a subject matter of Micro Economics?', options: ['Product Pricing', 'Factor Pricing', 'National Income', 'Economic Welfare'], correctIndex: 2, explanation: 'National Income is a Macro concept.' },
  { id: 'c1-q6', question: 'Macro Economics uses ______ method.', options: ['Slicing', 'Lumping', 'Partial', 'Individual'], correctIndex: 1, explanation: 'It studies the forest (aggregate), not the tree.' },
  { id: 'c1-q7', question: 'General Equilibrium analysis is used in ______.', options: ['Micro Economics', 'Macro Economics', 'Business Economics', 'None'], correctIndex: 1, explanation: 'Macro deals with interdependence of variables.' },
  { id: 'c1-q8', question: 'Product pricing includes theory of ______.', options: ['Rent', 'Wages', 'Demand and Supply', 'Profit'], correctIndex: 2, explanation: 'Price is determined by market demand and supply forces.' },
  { id: 'c1-q9', question: 'Principles of Economics was written by ______.', options: ['Adam Smith', 'Alfred Marshall', 'Ricardo', 'Keynes'], correctIndex: 1, explanation: 'Published in 1890.' },
  { id: 'c1-q10', question: 'Study of "General Price Level" falls under ______.', options: ['Micro', 'Macro', 'Public Finance', 'Trade'], correctIndex: 1, explanation: 'Inflation and Deflation are macro problems.' }
];

const ch1_reels: Reel[] = [
  { id: 'c1-r1', title: 'Micro vs Macro', content: 'TREE vs FOREST.\n\nMicro studies the individual Tree (Consumer/Firm).\nMacro studies the entire Forest (Economy/Nation).', color: getReelColor(0) },
  { id: 'c1-r2', title: '1933: The Year', content: 'Ragnar Frisch (Oslo University) was the FIRST to distinguish "Micro" and "Macro" in economics.\nHe won the Nobel Prize later!', color: getReelColor(1) },
  { id: 'c1-r3', title: 'Ceteris Paribus', content: 'The Golden Rule of Micro:\n"Other Things Being Equal"\n\nWe assume income, population, and tastes do NOT change while studying price.', color: getReelColor(2) },
  { id: 'c1-r4', title: 'Slicing Method', content: 'Imagine a loaf of bread.\nMicro economics slices it to study one slice (unit) in detail.\n\nMacro studies the whole loaf at once!', color: getReelColor(3) },
  { id: 'c1-r5', title: 'Worm vs Bird', content: 'Micro = Worm\'s Eye View (Looking close at the ground).\nMacro = Bird\'s Eye View (Looking at the whole landscape from above).', color: getReelColor(4) },
  { id: 'c1-r6', title: 'Price Theory', content: 'Micro Economics = Price Theory.\nWhy?\nBecause it explains how prices of Goods (Product Pricing) and Land/Labor (Factor Pricing) are set.', color: getReelColor(5) }
];

// --- CHAPTER 2 DATA: Utility Analysis ---
const ch2_flashcards: Flashcard[] = [
  { id: 'c2-f1', front: 'Utility', back: 'The want satisfying power of a commodity.' },
  { id: 'c2-f2', front: 'Relative Concept', back: 'Utility changes with Time and Place. (e.g. Woolen clothes have utility in winter, not summer).' },
  { id: 'c2-f3', front: 'Subjective Concept', back: 'Utility differs from person to person. (e.g. A book has utility for a student, not an illiterate person).' },
  { id: 'c2-f4', front: 'Ethically Neutral', back: 'Utility has no moral consideration. A knife has utility for a chef and a killer.' },
  { id: 'c2-f5', front: 'Form Utility', back: 'Created by changing the shape or structure of existing material. (Wood -> Chair).' },
  { id: 'c2-f6', front: 'Place Utility', back: 'Created by changing the place of utilization. (Mangoes: Farm -> Market).' },
  { id: 'c2-f7', front: 'Time Utility', back: 'Created by storing goods and using them at a time of scarcity. (Blood Bank).' },
  { id: 'c2-f8', front: 'Cardinal Measurement', back: 'Assumption that utility can be measured in numbers (1, 2, 3...) to compare satisfaction.' },
  { id: 'c2-f9', front: 'Total Utility (TU)', back: 'Sum of utilities derived from consuming all units of a commodity.' },
  { id: 'c2-f10', front: 'Marginal Utility (MU)', back: 'The additional utility derived from the consumption of an additional unit.' },
  { id: 'c2-f11', front: 'Point of Satiety', back: 'The point where TU is Maximum and MU is Zero. The consumer is fully satisfied.' },
  { id: 'c2-f12', front: 'Law of DMU', back: 'As we consume more units, the additional benefit (MU) keeps diminishing.' },
  { id: 'c2-f13', front: 'Paradox of Value', back: 'Water has high value-in-use but low value-in-exchange. Diamond has low value-in-use but high value-in-exchange.' },
  { id: 'c2-f14', front: 'Relationship TU/MU', back: 'TU increases at a diminishing rate while MU falls. When TU is Max, MU is Zero. When TU falls, MU is negative.' }
];

const ch2_mcqs: Question[] = [
  { id: 'c2-q1', question: 'When Total Utility is maximum, Marginal Utility is ______.', options: ['Maximum', 'Minimum', 'Zero', 'Negative'], correctIndex: 2, explanation: 'This is the Point of Satiety.' },
  { id: 'c2-q2', question: 'Utility is a ______ concept.', options: ['Objective', 'Subjective', 'Complex', 'Static'], correctIndex: 1, explanation: 'It changes from person to person based on psychology.' },
  { id: 'c2-q3', question: 'Blood bank is an example of ______ utility.', options: ['Place', 'Time', 'Form', 'Service'], correctIndex: 1, explanation: 'It stores blood for future use (Time).' },
  { id: 'c2-q4', question: 'The Law of DMU was first proposed by ______.', options: ['Gossen', 'Marshall', 'Slutsky', 'Keynes'], correctIndex: 0, explanation: 'H.H. Gossen (1854). Marshall detailed it later.' },
  { id: 'c2-q5', question: 'After the point of satiety, Marginal Utility becomes ______.', options: ['Positive', 'Zero', 'Negative', 'Infinite'], correctIndex: 2, explanation: 'This leads to dissatisfaction (Disutility).' },
  { id: 'c2-q6', question: 'Utility ______ be measured cardinally.', options: ['Can', 'Cannot', 'Must', 'Should'], correctIndex: 1, explanation: 'In reality, utility is a feeling and cannot be measured in numbers. Cardinality is just an assumption.' },
  { id: 'c2-q7', question: 'Making furniture from wood is ______ utility.', options: ['Place', 'Time', 'Form', 'Service'], correctIndex: 2, explanation: 'Changing structure/shape.' },
  { id: 'c2-q8', question: 'Law of DMU assumes ______ of consumption.', options: ['Discontinuity', 'Continuity', 'Gaps', 'Pauses'], correctIndex: 1, explanation: 'Units must be consumed one after another without break.' },
  { id: 'c2-q9', question: 'MU of money ______.', options: ['Increases', 'Decreases', 'Remains Constant', 'Becomes Zero'], correctIndex: 1, explanation: 'Ideally it should decrease, but skeptics say it remains constant. Marshall assumes it is constant for measurement.' },
  { id: 'c2-q10', question: 'A miser is an exception to Law of DMU because ______.', options: ['His want is satiable', 'His rationality is gone', 'Money gives him power', 'He acts irrationally'], correctIndex: 3, explanation: 'Misers behavior violates the Rationality assumption.' }
];

const ch2_reels: Reel[] = [
  { id: 'c2-r1', title: 'What is Utility?', content: 'It is NOT usefulness.\nIt is NOT pleasure.\n\nLiquor has utility for a drunkard (Satisfies want) but causes harm (No Usefulness).\nInjection has utility (Cures) but gives pain (No Pleasure).', color: getReelColor(0) },
  { id: 'c2-r2', title: 'TU vs MU', content: 'TU = Sum of all satisfaction.\nMU = Satisfaction from the LAST unit.\n\nImagine eating 5 mangoes.\nTU = Happiness from 5.\nMU = Happiness from the 5th.', color: getReelColor(1) },
  { id: 'c2-r3', title: 'Point of Satiety', content: 'The exact moment you are FULL.\n\nAt this point:\nTotal Utility is MAXIMUM.\nMarginal Utility is ZERO.\n\nOne more bite? MU becomes Negative (Vomiting!).', color: getReelColor(2) },
  { id: 'c2-r4', title: 'Exceptions to DMU', content: '1. Hobbies (Stamp collection)\n2. Miser (Greed for money)\n3. Addictions (Alcohol)\n4. Power\n\nIn these cases, MORE is BETTER (MU Increases).', color: getReelColor(3) },
  { id: 'c2-r5', title: 'Gossen\'s First Law', content: 'Did you know?\nThe Law of DMU is also called Gossen\'s First Law of Consumption.\nMarshall made it famous, but Gossen found it!', color: getReelColor(4) }
];

// --- CHAPTER 3A DATA: Demand Analysis ---
const ch3a_flashcards: Flashcard[] = [
  { id: 'c3a-f1', front: 'Demand', back: 'Demand = Desire + Willingness to Buy + Ability to Pay.' },
  { id: 'c3a-f2', front: 'Direct Demand', back: 'Demand for goods that satisfy wants directly. (e.g., Food, Clothes). Also called Conventional Demand.' },
  { id: 'c3a-f3', front: 'Indirect Demand', back: 'Also called Derived Demand. Demand for factors of production used to produce goods. (e.g., Labour, Raw material).' },
  { id: 'c3a-f4', front: 'Complementary Demand', back: 'Joint Demand. Two or more goods demanded together to satisfy a single want. (e.g., Car and Fuel).' },
  { id: 'c3a-f5', front: 'Composite Demand', back: 'Demand for a commodity that has several uses. (e.g., Electricity, Milk, Coal).' },
  { id: 'c3a-f6', front: 'Competitive Demand', back: 'Demand for substitutes. (e.g., Tea and Coffee). If Tea price rises, Coffee demand rises.' },
  { id: 'c3a-f7', front: 'Law of Demand', back: 'Inverse relationship between Price and Quantity Demanded. Ceteris Paribus.' },
  { id: 'c3a-f8', front: 'Demand Schedule', back: 'Tabular representation of Price and Quantity demanded. (Individual vs Market Schedule).' },
  { id: 'c3a-f9', front: 'Individual Demand', back: 'Qty demanded by a single consumer at a given price during a given time.' },
  { id: 'c3a-f10', front: 'Giffen Goods', back: 'Inferior goods where demand falls even when price falls (Exception to Law of Demand). Discovered by Sir Robert Giffen.' },
  { id: 'c3a-f11', front: 'Veblen Effect', back: 'Prestige Goods. Rich people buy more when price is high to show off status. (Diamonds, Luxury Cars).' },
  { id: 'c3a-f12', front: 'Expansion of Demand', back: 'Rise in demand due to Fall in Price alone. Movement downwards along the same curve.' },
  { id: 'c3a-f13', front: 'Contraction of Demand', back: 'Fall in demand due to Rise in Price alone. Movement upwards along the same curve.' },
  { id: 'c3a-f14', front: 'Increase in Demand', back: 'Rise in demand due to favorable changes in other factors (Income, Taste) at same price. Curve shifts Right.' },
  { id: 'c3a-f15', front: 'Decrease in Demand', back: 'Fall in demand due to unfavorable changes in other factors at same price. Curve shifts Left.' }
];

const ch3a_mcqs: Question[] = [
  { id: 'c3a-q1', question: 'Demand curve usually slopes ______.', options: ['Upward', 'Downward', 'Vertical', 'Horizontal'], correctIndex: 1, explanation: 'From left to right due to inverse relationship.' },
  { id: 'c3a-q2', question: 'Giffen goods are ______ goods.', options: ['Luxury', 'Inferior', 'Normal', 'Prestige'], correctIndex: 1, explanation: 'Low quality goods like cheap bread.' },
  { id: 'c3a-q3', question: 'When price falls and demand rises, it is called ______.', options: ['Increase', 'Expansion', 'Decrease', 'Contraction'], correctIndex: 1, explanation: 'Variation due to price is Expansion.' },
  { id: 'c3a-q4', question: 'Electricity has ______ demand.', options: ['Joint', 'Composite', 'Derived', 'Competitive'], correctIndex: 1, explanation: 'It is used for lighting, cooling, heating, etc. (Multiple uses).' },
  { id: 'c3a-q5', question: 'Symbolic statement of Law of Demand is ______.', options: ['Dx = f(Px)', 'Dx = f(y)', 'Dx = f(T)', 'Dx = f(Py)'], correctIndex: 0, explanation: 'Demand for x is a function of Price of x.' },
  { id: 'c3a-q6', question: 'Concept of Elasticity was introduced by ______.', options: ['Adam Smith', 'Marshall', 'Keynes', 'Robbins'], correctIndex: 1, explanation: 'Alfred Marshall.' },
  { id: 'c3a-q7', question: 'Demand for Labour is ______.', options: ['Direct', 'Derived', 'Composite', 'Competitive'], correctIndex: 1, explanation: 'Labour is needed to produce other goods.' },
  { id: 'c3a-q8', question: 'Exceptions to Law of Demand have ______ sloping curve.', options: ['Downward', 'Upward', 'Horizontal', 'Vertical'], correctIndex: 1, explanation: 'Positive relationship (Price Up -> Demand Up).' },
  { id: 'c3a-q9', question: 'Increase in demand leads to ______ shift in curve.', options: ['Leftward', 'Rightward', 'Upward', 'Downward'], correctIndex: 1, explanation: 'Demand increases at same price.' },
  { id: 'c3a-q10', question: 'Market demand is the sum of ______.', options: ['All Supply', 'Individual Demands', 'State Demands', 'None'], correctIndex: 1, explanation: 'Horizontal summation of individual schedules.' }
];

const ch3a_reels: Reel[] = [
  { id: 'c3a-r1', title: 'Formula of Demand', content: 'Demand is NOT just "Want".\n\nDemand = Desire + Willingness to Spend + Ability to Pay.\n\nA beggar desires a car but has no ability -> No Demand.', color: getReelColor(0) },
  { id: 'c3a-r2', title: 'Expansion vs Increase', content: 'Expansion:\nPrice FALLS -> Demand RISES.\n(Same Curve)\n\nIncrease:\nIncome RISES -> Demand RISES.\n(New Curve shifts Right).', color: getReelColor(1) },
  { id: 'c3a-r3', title: 'Giffen Goods', content: 'Strange but true!\nWhen bread price fell in England, people bought LESS bread and bought Meat instead.\n\nWhy? Because their "Real Income" increased. This is the Giffen Paradox.', color: getReelColor(2) },
  { id: 'c3a-r4', title: 'Veblen Effect', content: 'Snob Appeal.\n"I only buy it because it\'s expensive."\n\nRich people buy diamonds BECAUSE they are costly. If diamonds were cheap, they wouldn\'t buy them.', color: getReelColor(3) },
  { id: 'c3a-r5', title: 'Types of Demand', content: 'Direct: Ice Cream (Eat it).\nDerived: Milk (Need it to make Ice Cream).\nComposite: Electricity (Light, Fan, TV).\nJoint: Pen & Ink.', color: getReelColor(4) }
];

// --- CHAPTER 3B DATA: Elasticity ---
const ch3b_flashcards: Flashcard[] = [
  { id: 'c3b-f1', front: 'Elasticity of Demand', back: 'The degree of responsiveness of quantity demanded to a change in its determinants (Price, Income, etc).' },
  { id: 'c3b-f2', front: 'Price Elasticity (Ed)', back: '% Change in Qty Demanded / % Change in Price.' },
  { id: 'c3b-f3', front: 'Income Elasticity (Ey)', back: '% Change in Qty Demanded / % Change in Income.' },
  { id: 'c3b-f4', front: 'Cross Elasticity (Ec)', back: '% Change in Qty of A / % Change in Price of B. (Substitutes/Complements).' },
  { id: 'c3b-f5', front: 'Perfectly Elastic (Ed = ∞)', back: 'Slight change in price leads to infinite change in demand. Curve: Horizontal line parallel to X-axis.' },
  { id: 'c3b-f6', front: 'Perfectly Inelastic (Ed = 0)', back: 'No change in demand irrespective of price change. Curve: Vertical line parallel to Y-axis.' },
  { id: 'c3b-f7', front: 'Unitary Elastic (Ed = 1)', back: '% Change in Demand = % Change in Price. Curve: Rectangular Hyperbola.' },
  { id: 'c3b-f8', front: 'Relatively Elastic (Ed > 1)', back: '% Change in Demand > % Change in Price. Curve: Flatter.' },
  { id: 'c3b-f9', front: 'Relatively Inelastic (Ed < 1)', back: '% Change in Demand < % Change in Price. Curve: Steeper.' },
  { id: 'c3b-f10', front: 'Total Expenditure Method', back: 'Marshall\'s method. Compares Total Outlay (Price x Qty) before and after price change.' },
  { id: 'c3b-f11', front: 'Point Method', back: 'Geometric Method. Ed = Lower Segment / Upper Segment of the demand curve.' },
  { id: 'c3b-f12', front: 'Determinants of Ed', back: 'Nature of good (Necessity/Luxury), Substitutes, Durability, Uses, Price Level.' }
];

const ch3b_mcqs: Question[] = [
  { id: 'c3b-q1', question: 'Ed = 0 indicates ______ elasticity.', options: ['Perfectly Elastic', 'Perfectly Inelastic', 'Unitary', 'Relatively Elastic'], correctIndex: 1, explanation: 'Quantity does not change at all (e.g. Salt).' },
  { id: 'c3b-q2', question: 'Demand curve is a rectangular hyperbola when elasticity is ______.', options: ['Unitary', 'Zero', 'Infinite', 'Less than 1'], correctIndex: 0, explanation: 'Area under curve (Expenditure) remains constant.' },
  { id: 'c3b-q3', question: 'Demand for salt is ______.', options: ['Elastic', 'Inelastic', 'Infinite', 'Unitary'], correctIndex: 1, explanation: 'It is a necessity with no close substitutes and low price.' },
  { id: 'c3b-q4', question: 'If price falls and Total Expenditure rises, demand is ______.', options: ['Elastic', 'Inelastic', 'Unitary', 'Zero'], correctIndex: 0, explanation: 'Inverse relation between Price and Outlay means Elastic.' },
  { id: 'c3b-q5', question: 'Cross elasticity for complementary goods is ______.', options: ['Positive', 'Negative', 'Zero', 'Infinite'], correctIndex: 1, explanation: 'Price of Petrol Up -> Demand for Car Down.' },
  { id: 'c3b-q6', question: 'Steeper demand curve indicates ______ elasticity.', options: ['High', 'Low (Inelastic)', 'Infinite', 'Unitary'], correctIndex: 1, explanation: 'Less responsive to price change.' },
  { id: 'c3b-q7', question: 'Ratio method is also known as ______.', options: ['Percentage Method', 'Outlay Method', 'Geometric Method', 'Visual Method'], correctIndex: 0, explanation: 'Flux method / Arithmetic method.' },
  { id: 'c3b-q8', question: 'For durable goods, demand is ______.', options: ['Elastic', 'Inelastic', 'Zero', 'Unitary'], correctIndex: 0, explanation: 'Purchase can be postponed.' },
  { id: 'c3b-q9', question: 'Ed = 1 at the ______ of a linear demand curve.', options: ['Top', 'Bottom', 'Mid-point', 'Origin'], correctIndex: 2, explanation: 'Lower segment = Upper segment.' },
  { id: 'c3b-q10', question: 'Demand for medicines is ______.', options: ['Elastic', 'Inelastic', 'Perfectly Elastic', 'Unitary'], correctIndex: 1, explanation: 'Life saving necessity.' }
];

const ch3b_reels: Reel[] = [
  { id: 'c3b-r1', title: 'Ed > 1 vs Ed < 1', content: 'Ed > 1 (Elastic): Price falls 10%, Sales jump 50%! (Luxury cars).\n\nEd < 1 (Inelastic): Price rises 50%, Sales drop only 1%. (Salt/Meds).', color: getReelColor(0) },
  { id: 'c3b-r2', title: 'Rectangular Hyperbola', content: 'Special shape for Unitary Elasticity (Ed=1).\n\nWhy?\nBecause Total Expenditure (Price x Qty) remains exactly the SAME irrespective of price change.', color: getReelColor(1) },
  { id: 'c3b-r3', title: 'Substitutes Factor', content: 'More Substitutes = More Elastic.\n\nCoke price up? Everyone buys Pepsi -> Elastic.\nSalt price up? No substitute -> Inelastic.', color: getReelColor(2) },
  { id: 'c3b-r4', title: 'Expenditure Method Trick', content: 'Price Down, Expense Up = Elastic (Inverse)\nPrice Down, Expense Down = Inelastic (Direct)\nPrice Down, Expense Same = Unitary.', color: getReelColor(3) },
  { id: 'c3b-r5', title: 'Infinite Elasticity', content: 'A horizontal line.\n\nAt price $10, you sell infinite amount.\nAt price $10.01, you sell ZERO.\nDoes it exist? Only in Perfect Competition theory.', color: getReelColor(4) }
];

// --- CHAPTER 4 DATA: Supply Analysis ---
const ch4_flashcards: Flashcard[] = [
  { id: 'c4-f1', front: 'Total Output', back: 'Sum total of quantity of commodity produced at a given time.' },
  { id: 'c4-f2', front: 'Stock', back: 'Total quantity available with the seller for sale. It is the source of supply. Stock >= Supply.' },
  { id: 'c4-f3', front: 'Supply', back: 'Quantity offered for sale at a given price and time. It is a flow concept.' },
  { id: 'c4-f4', front: 'Law of Supply', back: 'Direct relationship between Price and Supply. (Price Up = Supply Up).' },
  { id: 'c4-f5', front: 'Supply Schedule', back: 'Tabular representation of Price and Supply. (Individual and Market).' },
  { id: 'c4-f6', front: 'Determinants of Supply', back: 'Price, Technology, Cost of Production, Infrastructure, Govt Policy, Nature.' },
  { id: 'c4-f7', front: 'Backward Bending Curve', back: 'Exception to Law of Supply. Labour Supply Curve bends backwards at high wage rates.' },
  { id: 'c4-f8', front: 'Expansion of Supply', back: 'Rise in supply due to Rise in Price alone. Upward movement along curve.' },
  { id: 'c4-f9', front: 'Contraction of Supply', back: 'Fall in supply due to Fall in Price alone. Downward movement along curve.' },
  { id: 'c4-f10', front: 'Increase in Supply', back: 'Shift Right due to favorable factors (Better tech, Lower cost).' },
  { id: 'c4-f11', front: 'Total Cost (TC)', back: 'Total Fixed Cost (TFC) + Total Variable Cost (TVC).' },
  { id: 'c4-f12', front: 'Marginal Cost (MC)', back: 'Net addition to total cost by producing one more unit. (TCn - TCn-1).' },
  { id: 'c4-f13', front: 'Average Cost (AC)', back: 'Cost per unit. TC / Qty.' },
  { id: 'c4-f14', front: 'Total Revenue (TR)', back: 'Total income from sale. Price x Quantity.' },
  { id: 'c4-f15', front: 'Average Revenue (AR)', back: 'Revenue per unit. TR / Qty. Note: AR is always equal to Price.' }
];

const ch4_mcqs: Question[] = [
  { id: 'c4-q1', question: 'Supply curve slopes ______.', options: ['Downward', 'Upward', 'Vertical', 'Horizontal'], correctIndex: 1, explanation: 'Direct relationship between P and Q.' },
  { id: 'c4-q2', question: 'Labour supply curve is ______.', options: ['Upward', 'Downward', 'Backward Bending', 'Vertical'], correctIndex: 2, explanation: 'After a point, higher wages lead to preference for leisure.' },
  { id: 'c4-q3', question: 'Stock is ______ Supply.', options: ['Less than', 'Greater than or Equal to', 'Equal to', 'None'], correctIndex: 1, explanation: 'Stock is the source (Potential). Supply is actual (Flow).' },
  { id: 'c4-q4', question: 'Net addition to Total Revenue is ______.', options: ['AR', 'MR', 'TC', 'AC'], correctIndex: 1, explanation: 'Marginal Revenue.' },
  { id: 'c4-q5', question: 'When supply increases due to technology, curve shifts ______.', options: ['Left', 'Right', 'Up', 'Down'], correctIndex: 1, explanation: 'Favorable change causes Increase (Right Shift).' },
  { id: 'c4-q6', question: 'Average Cost = ______ / Quantity.', options: ['Marginal Cost', 'Total Cost', 'Total Revenue', 'Price'], correctIndex: 1, explanation: 'AC is per unit cost.' },
  { id: 'c4-q7', question: 'Vertical supply curve represents ______ elasticity.', options: ['Perfectly Elastic', 'Perfectly Inelastic', 'Unitary', 'Relative'], correctIndex: 1, explanation: 'Supply is fixed (e.g., Rare paintings).' },
  { id: 'c4-q8', question: 'Stock is a ______ concept.', options: ['Flow', 'Static', 'Dynamic', 'Flexible'], correctIndex: 1, explanation: 'It is measured at a point of time.' },
  { id: 'c4-q9', question: 'Urgent need for cash causes seller to sell ______ at lower price.', options: ['Less', 'More', 'Same', 'Nothing'], correctIndex: 1, explanation: 'Exception to Law of Supply.' },
  { id: 'c4-q10', question: 'Variable cost includes ______.', options: ['Rent', 'Manager Salary', 'Raw Material', 'Machinery'], correctIndex: 2, explanation: 'Changes with output level.' }
];

const ch4_reels: Reel[] = [
  { id: 'c4-r1', title: 'Stock vs Supply', content: 'Stock: Total amount existing in the warehouse.\nSupply: Amount brought to market for sale at a specific price.\n\nFor perishable goods (Milk), Stock = Supply.\nFor durables (Cars), Stock > Supply.', color: getReelColor(0) },
  { id: 'c4-r2', title: 'Labour Supply Curve', content: 'Usually Supply Curve goes UP.\nBut for Labour, it bends BACKWARD.\n\nWhy? Because at very high wages, people prefer Leisure (Holiday) over Work.', color: getReelColor(1) },
  { id: 'c4-r3', title: 'Cost Concepts', content: 'TFC: Rent (Pay even if factory closed).\nTVC: Electricity/Raw Material (Pay only if running).\nTC = TFC + TVC.', color: getReelColor(2) },
  { id: 'c4-r4', title: 'Revenue Math', content: 'TR = Price x Qty\nAR = TR / Qty (= Price)\nMR = Extra money from last unit.\n\nProfit = TR - TC.', color: getReelColor(3) },
  { id: 'c4-r5', title: 'Determinants', content: 'What changes Supply?\n1. Cost (High cost -> Low supply)\n2. Tech (Better tech -> High supply)\n3. Infra (Good roads -> High supply).', color: getReelColor(4) }
];

// --- CHAPTER 5 DATA: Forms of Market ---
const ch5_flashcards: Flashcard[] = [
  { id: 'c5-f1', front: 'Market', back: 'An arrangement where buyers and sellers come in contact directly or indirectly for exchange of goods.' },
  { id: 'c5-f2', front: 'Perfect Competition', back: 'Ideal market. Large # of buyers/sellers, homogeneous product, free entry, single price, perfect knowledge.' },
  { id: 'c5-f3', front: 'Homogeneous Product', back: 'Feature of Perfect Competition. Goods are identical in size, shape, color, taste, etc.' },
  { id: 'c5-f4', front: 'Price Taker', back: 'In Perfect Competition, the firm accepts price determined by market demand & supply. It cannot influence price.' },
  { id: 'c5-f5', front: 'Monopoly', back: 'Mono (Single) + Poly (Seller). Single seller controls the entire supply. No close substitutes.' },
  { id: 'c5-f6', front: 'Price Maker', back: 'In Monopoly, the seller decides the price.' },
  { id: 'c5-f7', front: 'Price Discrimination', back: 'Charging different prices to different consumers for the same product. (e.g. Electricity rates, Railway tickets).' },
  { id: 'c5-f8', front: 'Oligopoly', back: 'Oligo (Few) + Poly (Seller). Market with a few large firms. (e.g., Mobile Operators, Car manufacturers).' },
  { id: 'c5-f9', front: 'Interdependence', back: 'Feature of Oligopoly. Firms watch each other closely. If one cuts price, others follow.' },
  { id: 'c5-f10', front: 'Monopolistic Competition', back: 'Real world market. Many sellers selling differentiated products. (e.g., Soaps, Toothpaste, Shampoos).' },
  { id: 'c5-f11', front: 'Product Differentiation', back: 'Feature of Monopolistic Competition. Products are substitutes but different in brand, packing, shape.' },
  { id: 'c5-f12', front: 'Selling Cost', back: 'Expenditure on advertisement and sales promotion. Essential in Monopolistic Competition.' }
];

const ch5_mcqs: Question[] = [
  { id: 'c5-q1', question: 'In Perfect Competition, products are ______.', options: ['Heterogeneous', 'Homogeneous', 'Differentiated', 'Unique'], correctIndex: 1, explanation: 'Identical in all respects.' },
  { id: 'c5-q2', question: 'Single seller is a feature of ______.', options: ['Oligopoly', 'Monopoly', 'Perfect Competition', 'Monopolistic'], correctIndex: 1, explanation: 'He controls the entire market supply.' },
  { id: 'c5-q3', question: 'Product differentiation is a feature of ______.', options: ['Perfect Competition', 'Monopoly', 'Monopolistic Competition', 'Oligopoly'], correctIndex: 2, explanation: 'Goods are substitutes but not identical (Brand, Packing).' },
  { id: 'c5-q4', question: 'OPEC is an example of ______.', options: ['Monopoly', 'Perfect Competition', 'Oligopoly', 'Monopolistic'], correctIndex: 2, explanation: 'Cartel formation by few sellers.' },
  { id: 'c5-q5', question: 'Under Perfect Competition, demand curve is ______.', options: ['Downward sloping', 'Horizontal', 'Vertical', 'Upward'], correctIndex: 1, explanation: 'Perfectly Elastic (Ed = Infinity).' },
  { id: 'c5-q6', question: 'Selling cost is necessary in ______.', options: ['Monopoly', 'Perfect Competition', 'Monopolistic Competition', 'None'], correctIndex: 2, explanation: 'To highlight product differentiation.' },
  { id: 'c5-q7', question: 'Indian Railways is a ______ monopoly.', options: ['Private', 'Public/Statutory', 'Discriminating', 'Voluntary'], correctIndex: 1, explanation: 'Owned by Government.' },
  { id: 'c5-q8', question: 'Kinked demand curve is associated with ______.', options: ['Oligopoly', 'Monopoly', 'Perfect Comp', 'Monopolistic'], correctIndex: 0, explanation: 'Due to price rigidity and interdependence.' },
  { id: 'c5-q9', question: 'Price Taker is ______.', options: ['Monopolist', 'Oligopolist', 'Perfect Competitive Firm', 'Government'], correctIndex: 2, explanation: 'Market forces decide price.' },
  { id: 'c5-q10', question: 'Concept of Monopolistic Competition was introduced by ______.', options: ['Chamberlin', 'Marshall', 'Keynes', 'Joan Robinson'], correctIndex: 0, explanation: 'E.H. Chamberlin in 1933.' }
];

const ch5_reels: Reel[] = [
  { id: 'c5-r1', title: 'Perfect Competition', content: 'An Ideal Myth.\n- Infinite Buyers/Sellers\n- Identical Products\n- Same Price everywhere.\n\nDoes it exist? Hardly. Maybe agricultural markets come close.', color: getReelColor(3) },
  { id: 'c5-r2', title: 'Monopoly Power', content: 'Single Seller.\nNo close substitutes.\nBarriers to entry.\n\nExample: Indian Railways.\nThey set the price. They are the King.', color: getReelColor(4) },
  { id: 'c5-r3', title: 'Oligopoly', content: 'The War of the Few.\nOnly a few big players.\n\nExample: Telecom in India (Jio, Airtel, Vi).\nHigh barriers to entry. Fierce competition.', color: getReelColor(5) },
  { id: 'c5-r4', title: 'Monopolistic Comp', content: 'The Real World.\n\nMany brands of soap (Lux, Dove, Pears).\nAre they same? No.\nAre they different? Slightly.\n\nHeavy Ads required!', color: getReelColor(6) },
  { id: 'c5-r5', title: 'Price Discrimination', content: 'Charging different rates for same service.\n\nDoctors charge rich more, poor less.\nRailways charge Seniors less, Adults more.\n\nPossible only in Monopoly.', color: getReelColor(0) }
];

// --- CHAPTER 6 DATA: Index Numbers ---
const ch6_flashcards: Flashcard[] = [
  { id: 'c6-f1', front: 'Index Number', back: 'Statistical tool to measure changes in an economic variable (Price, Qty) over time.' },
  { id: 'c6-f2', front: 'Base Year', back: 'The reference year against which comparisons are made. Denoted by "0". Should be normal year.' },
  { id: 'c6-f3', front: 'Current Year', back: 'The year for which index number is calculated. Denoted by "1".' },
  { id: 'c6-f4', front: 'Price Index Number', back: 'Measures changes in general price level. (Inflation).' },
  { id: 'c6-f5', front: 'Quantity Index Number', back: 'Measures changes in volume of production (Agricultural/Industrial output).' },
  { id: 'c6-f6', front: 'Value Index Number', back: 'Measures changes in value (Price x Qty).' },
  { id: 'c6-f7', front: 'Laspeyre\'s Index', back: 'Weighted index using Base Year Quantity (q0) as weights.' },
  { id: 'c6-f8', front: 'Paasche\'s Index', back: 'Weighted index using Current Year Quantity (q1) as weights.' },
  { id: 'c6-f9', front: 'Fisher\'s Ideal Index', back: 'Geometric mean of Laspeyre\'s and Paasche\'s index numbers. Removes bias.' },
  { id: 'c6-f10', front: 'Simple Aggregate Method', back: 'Sum of Current Prices / Sum of Base Prices * 100.' },
  { id: 'c6-f11', front: 'Cost of Living Index', back: 'Consumer Price Index (CPI). Measures impact of price changes on cost of living of a specific class.' },
  { id: 'c6-f12', front: 'Limitations of Index Numbers', back: 'Based on samples, Ignore quality changes, Mathematical errors, Bias in weights.' }
];

const ch6_mcqs: Question[] = [
  { id: 'c6-q1', question: 'Index number is a ______ average.', options: ['Simple', 'Weighted', 'Specialized', 'General'], correctIndex: 2, explanation: 'It is a specialized statistical tool.' },
  { id: 'c6-q2', question: 'Laspeyre\'s method uses ______ quantities as weights.', options: ['Current Year', 'Base Year', 'Both', 'None'], correctIndex: 1, explanation: 'Uses q0.' },
  { id: 'c6-q3', question: 'Base year should be ______.', options: ['War year', 'Famine year', 'Normal year', 'Current year'], correctIndex: 2, explanation: 'Free from natural calamities and economic fluctuations.' },
  { id: 'c6-q4', question: 'Index numbers are known as ______ of economic activity.', options: ['Barometers', 'Thermometers', 'Speedometers', 'Rulers'], correctIndex: 0, explanation: 'They indicate the trend or pressure of economy.' },
  { id: 'c6-q5', question: 'Paasche\'s Index uses ______ as weights.', options: ['q0', 'q1', 'p0', 'p1'], correctIndex: 1, explanation: 'Current year quantities.' },
  { id: 'c6-q6', question: 'Sum of p1 / Sum of p0 x 100 is formula for ______.', options: ['Laspeyre', 'Paasche', 'Simple Aggregate', 'Weighted Average'], correctIndex: 2, explanation: 'Simplest method.' },
  { id: 'c6-q7', question: 'Index number for Base Year is always assumed to be ______.', options: ['0', '1', '100', '1000'], correctIndex: 2, explanation: 'Standard reference value.' },
  { id: 'c6-q8', question: ' ______ is used to calculate Dearness Allowance (DA).', options: ['Wholesale Price Index', 'Cost of Living Index', 'Quantity Index', 'Value Index'], correctIndex: 1, explanation: 'Adjusts wages for inflation.' },
  { id: 'c6-q9', question: 'Fisher\'s Index is the ______ mean of Laspeyre and Paasche.', options: ['Arithmetic', 'Geometric', 'Harmonic', 'Weighted'], correctIndex: 1, explanation: 'Square root of L x P.' },
  { id: 'c6-q10', question: 'Stock market index (SENSEX) is an example of ______.', options: ['Price Index', 'Qty Index', 'Special Purpose Index', 'Value Index'], correctIndex: 0, explanation: 'Measures share prices.' }
];

const ch6_reels: Reel[] = [
  { id: 'c6-r1', title: 'Economic Barometers', content: 'Just as a barometer measures atmospheric pressure, Index Numbers measure Economic Pressure (Inflation, Prices, Production).', color: getReelColor(0) },
  { id: 'c6-r2', title: 'Base Year vs Current Year', content: 'Base Year (0): The past normal year.\nCurrent Year (1): Today.\n\nWe compare Price of 1 (p1) with Price of 0 (p0).', color: getReelColor(1) },
  { id: 'c6-r3', title: 'Laspeyre vs Paasche', content: 'Laspeyre loves the PAST (Base Year Quantities - q0).\nPaasche loves the PRESENT (Current Year Quantities - q1).', color: getReelColor(2) },
  { id: 'c6-r4', title: 'Why 100?', content: 'Index numbers are expressed in Percentages.\nBase year index is always 100.\nIf Current Index is 120, it means 20% Inflation.', color: getReelColor(3) },
  { id: 'c6-r5', title: 'CPI vs WPI', content: 'WPI: Wholesale Price Index (Bulk trade).\nCPI: Consumer Price Index (Retail/What YOU pay).\n\nDA is calculated on CPI.', color: getReelColor(4) }
];

// --- CHAPTER 7 DATA: National Income ---
const ch7_flashcards: Flashcard[] = [
  { id: 'c7-f1', front: 'National Income', back: 'Total money value of all final goods and services produced in a country during a year. Flow concept.' },
  { id: 'c7-f2', front: 'GDP', back: 'Gross Domestic Product. Market value of goods produced WITHIN the domestic territory of a country.' },
  { id: 'c7-f3', front: 'GNP', back: 'Gross National Product. GDP + Net Factor Income from Abroad (X - M).' },
  { id: 'c7-f4', front: 'NNP', back: 'Net National Product. GNP - Depreciation.' },
  { id: 'c7-f5', front: 'Transfer Payments', back: 'Unilateral payments like pension, scholarship, gifts. Excluded from NI as no production happens.' },
  { id: 'c7-f6', front: 'Double Counting', back: 'Counting the value of a commodity more than once. (Counting Wheat AND Flour AND Bread). Must be avoided.' },
  { id: 'c7-f7', front: 'Circular Flow', back: 'Continuous flow of production, income, and expenditure in an economy. (Households <-> Firms).' },
  { id: 'c7-f8', front: 'Output Method', back: 'Product/Inventory Method. Sum of Market Value of Final Goods OR Sum of Value Added at each stage.' },
  { id: 'c7-f9', front: 'Income Method', back: 'Factor Cost Method. Sum of Rent, Wages, Interest, Profit (NI = R+W+I+P).' },
  { id: 'c7-f10', front: 'Expenditure Method', back: 'Outlay Method. Sum of C + I + G + (X-M).' },
  { id: 'c7-f11', front: 'Depreciation', back: 'Wear and tear of capital assets. Deducted to get "Net" value.' },
  { id: 'c7-f12', front: 'Green GNP', back: 'GNP adjusted for environmental degradation/depletion of resources.' }
];

const ch7_mcqs: Question[] = [
  { id: 'c7-q1', question: 'National Income Committee was established in ______.', options: ['1947', '1949', '1950', '1955'], correctIndex: 1, explanation: 'Chaired by Prof. P.C. Mahalanobis.' },
  { id: 'c7-q2', question: 'GDP + Net Factor Income from Abroad = ______.', options: ['NNP', 'NDP', 'GNP', 'PI'], correctIndex: 2, explanation: 'Gross National Product includes foreign income.' },
  { id: 'c7-q3', question: 'Which is NOT included in National Income?', options: ['Wages', 'Profits', 'Transfer Payments', 'Rent'], correctIndex: 2, explanation: 'No production happens in return for transfer payments (Pension, Gifts).' },
  { id: 'c7-q4', question: 'Product Method is also known as ______.', options: ['Income Method', 'Output Method', 'Expenditure Method', 'Factor Method'], correctIndex: 1, explanation: 'Inventory method.' },
  { id: 'c7-q5', question: 'Deduction of Depreciation from GNP gives ______.', options: ['GDP', 'NDP', 'NNP', 'PI'], correctIndex: 2, explanation: 'Gross - Depreciation = Net.' },
  { id: 'c7-q6', question: 'Income method sums up ______.', options: ['Prices', 'Factor Incomes', 'Expenditures', 'Taxes'], correctIndex: 1, explanation: 'Rent + Wages + Interest + Profit.' },
  { id: 'c7-q7', question: 'Unpaid services of a housewife are ______ in NI.', options: ['Included', 'Excluded', 'Added', 'Multiplied'], correctIndex: 1, explanation: 'Theoretical difficulty: Hard to value love and affection.' },
  { id: 'c7-q8', question: 'In India, NI is estimated by ______.', options: ['RBI', 'CSO', 'Planning Commission', 'Finance Ministry'], correctIndex: 1, explanation: 'Central Statistical Organization.' },
  { id: 'c7-q9', question: 'Flow of goods and services is called ______ flow.', options: ['Money', 'Real', 'Capital', 'Nominal'], correctIndex: 1, explanation: 'Product flow between sectors.' },
  { id: 'c7-q10', question: 'Value Added Method avoids ______.', options: ['Underestimation', 'Overestimation', 'Double Counting', 'Inflation'], correctIndex: 2, explanation: 'Counts only the addition at each stage.' }
];

const ch7_reels: Reel[] = [
  { id: 'c7-r1', title: 'GDP vs GNP', content: 'GDP = Made in India (Within borders).\nGNP = Made by Indians (Includes income from abroad).\n\nIf SRK earns in Dubai, it is in India\'s GNP but UAE\'s GDP.', color: getReelColor(5) },
  { id: 'c7-r2', title: 'Circular Flow', content: 'Firms pay Households (Wages).\nHouseholds pay Firms (Consumption).\n\nMoney keeps rotating in a circle. That is the economy!', color: getReelColor(6) },
  { id: 'c7-r3', title: 'Avoid Double Counting', content: 'Wheat -> Flour -> Bread.\n\nDon\'t count value of Wheat AND Flour AND Bread.\nOnly count the FINAL Bread value.\nOr use Value Added method.', color: getReelColor(0) },
  { id: 'c7-r4', title: 'The Problem of Housewives', content: 'Mom cooks food -> Not in GDP (Love).\nChef cooks food -> In GDP (Salary).\n\nNational Income ignores unpaid work!', color: getReelColor(1) },
  { id: 'c7-r5', title: 'Gross vs Net', content: 'Gross means "Total".\nNet means "Gross minus Depreciation".\n\nThink: Gross Salary (CTC) vs Net Salary (In hand).', color: getReelColor(2) }
];

// --- CHAPTER 8 DATA: Public Finance in India ---
const ch8_flashcards: Flashcard[] = [
  { id: 'c8-f1', front: 'Public Finance', back: 'Study of income and expenditure of the Government (State).' },
  { id: 'c8-f2', front: 'Private Finance', back: 'Financial activities of individual or private entities. Goal is profit/utility.' },
  { id: 'c8-f3', front: 'Public Revenue', back: 'Aggregate collection of income by the government (Taxes + Non-Tax).' },
  { id: 'c8-f4', front: 'Direct Tax', back: 'Incidence and Impact fall on the same person. (e.g., Income Tax). Burden cannot be shifted.' },
  { id: 'c8-f5', front: 'Indirect Tax', back: 'Incidence and Impact fall on different persons. Burden can be shifted. (e.g., GST).' },
  { id: 'c8-f6', front: 'Non-Tax Revenue', back: 'Fees, Fines, Grants, Special Assessment, Profits from PSU.' },
  { id: 'c8-f7', front: 'Public Expenditure', back: 'Spending by central/state govt for defense, admin, welfare, development.' },
  { id: 'c8-f8', front: 'Revenue Expenditure', back: 'Recurring exp. Does not create assets. (Salaries, Interest payments).' },
  { id: 'c8-f9', front: 'Capital Expenditure', back: 'Huge exp. Creates assets or reduces liability. (Dams, Repayment of loans).' },
  { id: 'c8-f10', front: 'Public Debt', back: 'Loans taken by Govt. Internal (Citizens/Banks) vs External (IMF/World Bank).' },
  { id: 'c8-f11', front: 'Deficit Budget', back: 'Govt Expenditure > Govt Receipts. Good for developing countries/Depression.' },
  { id: 'c8-f12', front: 'Surplus Budget', back: 'Govt Receipts > Govt Expenditure. Used to control inflation.' },
  { id: 'c8-f13', front: 'Fiscal Policy', back: 'Govt policy regarding Taxation, Public Expenditure and Public Debt.' }
];

const ch8_mcqs: Question[] = [
  { id: 'c8-q1', question: 'Income Tax is a ______.', options: ['Indirect Tax', 'Direct Tax', 'Fee', 'Fine'], correctIndex: 1, explanation: 'Burden cannot be shifted.' },
  { id: 'c8-q2', question: 'GST came into effect in India on ______.', options: ['1st July 2017', '1st April 2016', '1st Jan 2018', '1st July 2016'], correctIndex: 0, explanation: 'Goods and Services Tax.' },
  { id: 'c8-q3', question: 'During depression, ______ budget is preferable.', options: ['Surplus', 'Balanced', 'Deficit', 'Zero'], correctIndex: 2, explanation: 'Govt should spend more to boost demand.' },
  { id: 'c8-q4', question: 'Public finance deals with ______.', options: ['Individual Income', 'Govt Income/Exp', 'Firm Profit', 'Banking'], correctIndex: 1, explanation: 'Study of financial activities of the State.' },
  { id: 'c8-q5', question: 'Non-tax revenue includes ______.', options: ['GST', 'Income Tax', 'Fees & Fines', 'Customs'], correctIndex: 2, explanation: 'Payments for services or penalties.' },
  { id: 'c8-q6', question: 'Which is a Capital Expenditure?', options: ['Salary', 'Pension', 'Construction of Metro', 'Interest Payment'], correctIndex: 2, explanation: 'Creates an asset.' },
  { id: 'c8-q7', question: 'External debt is raised from ______.', options: ['RBI', 'Citizens', 'World Bank', 'SBI'], correctIndex: 2, explanation: 'Outside the country.' },
  { id: 'c8-q8', question: 'Balanced Budget means ______.', options: ['Rev > Exp', 'Exp > Rev', 'Rev = Exp', 'Zero Rev'], correctIndex: 2, explanation: 'Income equals Expenditure.' },
  { id: 'c8-q9', question: 'Special Assessment is paid by ______.', options: ['All citizens', 'Criminals', 'Beneficiaries of govt projects', 'Govt employees'], correctIndex: 2, explanation: 'e.g. Property value up due to new road.' },
  { id: 'c8-q10', question: 'Financial Year in India is ______.', options: ['Jan-Dec', 'Apr-Mar', 'July-June', 'Oct-Sep'], correctIndex: 1, explanation: '1st April to 31st March.' }
];

const ch8_reels: Reel[] = [
  { id: 'c8-r1', title: 'Public vs Private', content: 'Private Finance: You adjust spending to your income.\nPublic Finance: Govt decides spending first, then finds income (Taxes/Loans).', color: getReelColor(3) },
  { id: 'c8-r2', title: 'Direct vs Indirect Tax', content: 'Direct Tax: Hits YOU directly (Income Tax).\nIndirect Tax: Hits the shopkeeper, but he passes it to YOU (GST).', color: getReelColor(4) },
  { id: 'c8-r3', title: 'The Budget', content: 'Annual Financial Statement (Article 112).\n\nSurplus: Earn > Spend (Controls Inflation)\nDeficit: Spend > Earn (Boosts Growth).', color: getReelColor(5) },
  { id: 'c8-r4', title: 'GST', content: 'One Nation, One Tax.\nReplaced VAT, Service Tax, Excise.\nCame on 1st July 2017.', color: getReelColor(6) },
  { id: 'c8-r5', title: 'Why Deficit?', content: 'Why does Govt spend more than it earns?\nTo build roads, schools, defense.\nDeveloping nations NEED Deficit Budgets.', color: getReelColor(0) }
];

// --- CHAPTER 9 DATA: Money Market & Capital Market ---
const ch9_flashcards: Flashcard[] = [
  { id: 'c9-f1', front: 'Money Market', back: 'Market for lending and borrowing of short-term funds (Less than 1 year). Deals in near-money assets.' },
  { id: 'c9-f2', front: 'Capital Market', back: 'Market for lending and borrowing of long-term funds (More than 1 year). Deals in Shares, Debentures.' },
  { id: 'c9-f3', front: 'RBI', back: 'Reserve Bank of India. Central Bank. Apex monetary institution. Est April 1, 1935. Nationalized 1949.' },
  { id: 'c9-f4', front: 'Commercial Bank', back: 'Financial intermediary that accepts deposits and grants loans. Creates credit money.' },
  { id: 'c9-f5', front: 'SEBI', back: 'Securities and Exchange Board of India. Regulator of Capital Market. Protects investors.' },
  { id: 'c9-f6', front: 'Call Money Market', back: 'Funds borrowed for very short period (1 day to 14 days). Inter-bank market.' },
  { id: 'c9-f7', front: 'Treasury Bills (T-Bills)', back: 'Short term instruments issued by RBI on behalf of Govt. (91, 182, 364 days).' },
  { id: 'c9-f8', front: 'Certificate of Deposit (CD)', back: 'Unsecured negotiable instrument issued by Commercial Banks.' },
  { id: 'c9-f9', front: 'Commercial Paper (CP)', back: 'Unsecured promissory note issued by Corporates with high credit rating.' },
  { id: 'c9-f10', front: 'Organized Sector', back: 'Regulated by RBI. Includes Banks, Co-operative banks, DFIs.' },
  { id: 'c9-f11', front: 'Unorganized Sector', back: 'Not regulated. Moneylenders, Indigenous Bankers, Chit funds.' },
  { id: 'c9-f12', front: 'Gilt-edged Market', back: 'Market for Government Securities. Risk-free market.' }
];

const ch9_mcqs: Question[] = [
  { id: 'c9-q1', question: 'RBI was established in ______.', options: ['1947', '1935', '1951', '1991'], correctIndex: 1, explanation: 'April 1, 1935 under RBI Act 1934.' },
  { id: 'c9-q2', question: 'Regulator of Capital Market in India is ______.', options: ['RBI', 'SBI', 'SEBI', 'NABARD'], correctIndex: 2, explanation: 'Est 1988, Statutory power in 1992.' },
  { id: 'c9-q3', question: 'Money market deals in ______ funds.', options: ['Long term', 'Medium term', 'Short term', 'Life long'], correctIndex: 2, explanation: 'Tenure less than 1 year.' },
  { id: 'c9-q4', question: 'Which is an organized sector instrument?', options: ['Indigenous Banker', 'Moneylender', 'Treasury Bills', 'Unregulated NBFIs'], correctIndex: 2, explanation: 'Issued by Govt, regulated by RBI.' },
  { id: 'c9-q5', question: 'Central Bank of India is ______.', options: ['SBI', 'CBI', 'RBI', 'BOI'], correctIndex: 2, explanation: 'Reserve Bank of India.' },
  { id: 'c9-q6', question: 'Gilt-edged market deals in ______.', options: ['Old clothes', 'Gold', 'Govt Securities', 'Corporate Shares'], correctIndex: 2, explanation: 'Safe/Prestigious securities.' },
  { id: 'c9-q7', question: 'Commercial Banks create ______.', options: ['Paper money', 'Credit money', 'Metallic coins', 'Crypto'], correctIndex: 1, explanation: 'Through deposit-loan mechanism.' },
  { id: 'c9-q8', question: 'Moneylenders belong to ______ sector.', options: ['Organized', 'Unorganized', 'Public', 'Foreign'], correctIndex: 1, explanation: 'High interest rates, no regulation.' },
  { id: 'c9-q9', question: 'Tenure of Call Money is ______.', options: ['1 day', '1 year', '5 years', '10 years'], correctIndex: 0, explanation: 'Overnight to 14 days.' },
  { id: 'c9-q10', question: 'Apex bank for Agriculture is ______.', options: ['SBI', 'RBI', 'NABARD', 'IDBI'], correctIndex: 2, explanation: 'National Bank for Agriculture and Rural Development.' }
];

const ch9_reels: Reel[] = [
  { id: 'c9-r1', title: 'Money vs Capital', content: 'Money Market = Short Term (Bills, CPs).\nCapital Market = Long Term (Shares, Debentures).\n\nMoney Market provides Liquidity.\nCapital Market provides Investment.', color: getReelColor(1) },
  { id: 'c9-r2', title: 'The RBI', content: 'Banker to the Banks.\nBanker to the Govt.\nIssuer of Currency.\n\nThe Boss of the Indian Money Market.', color: getReelColor(2) },
  { id: 'c9-r3', title: 'SEBI', content: 'The Watchdog.\nSEBI protects investors in the Stock Market.\nNo scams allowed!', color: getReelColor(3) },
  { id: 'c9-r4', title: 'Indigenous Bankers', content: 'Hundis & Moneylenders.\nThey charge super high interest.\nPart of Unorganized Sector (RBI can\'t control them fully).', color: getReelColor(4) },
  { id: 'c9-r5', title: 'Credit Creation', content: 'Banks are Magic.\nYou deposit ₹100.\nBank keeps ₹10, lends ₹90.\nBorrower deposits ₹90.\nBank lends ₹81...\nMoney Multiplies!', color: getReelColor(5) }
];

// --- CHAPTER 10 DATA: Foreign Trade of India ---
const ch10_flashcards: Flashcard[] = [
  { id: 'c10-f1', front: 'Foreign Trade', back: 'Trade between different countries. Types: Import, Export, Entrepot.' },
  { id: 'c10-f2', front: 'Balance of Trade (BOT)', back: 'Difference between value of Exports and Imports of VISIBLE goods only.' },
  { id: 'c10-f3', front: 'Balance of Payments (BOP)', back: 'Systematic record of all international economic transactions (Goods + Services + Capital) of a country.' },
  { id: 'c10-f4', front: 'Entrepot Trade', back: 'Importing goods from one country to Export them to another country after processing. (Re-export).' },
  { id: 'c10-f5', front: 'Export', back: 'Selling goods and services to foreign countries. Inflow of Forex.' },
  { id: 'c10-f6', front: 'Import', back: 'Buying goods and services from foreign countries. Outflow of Forex.' },
  { id: 'c10-f7', front: 'Visible Trade', back: 'Trade in Goods (Merchandise). Can be seen/touched.' },
  { id: 'c10-f8', front: 'Invisible Trade', back: 'Trade in Services (IT, Tourism, Shipping). Cannot be touched.' },
  { id: 'c10-f9', front: 'Trade Deficit', back: 'Import Value > Export Value. Unfavorable BOT.' },
  { id: 'c10-f10', front: 'Trade Surplus', back: 'Export Value > Import Value. Favorable BOT.' },
  { id: 'c10-f11', front: 'Composition of Trade', back: 'What we trade (Items). Recent trend: Rise in Ready-made garments, Decline in traditional agri exports.' },
  { id: 'c10-f12', front: 'Direction of Trade', back: 'Whom we trade with (Countries). Recent trend: Rise in trade with Asian countries, Decline in share of UK/USA.' }
];

const ch10_mcqs: Question[] = [
  { id: 'c10-q1', question: 'Trade between two countries is called ______.', options: ['Internal Trade', 'External Trade', 'Local Trade', 'State Trade'], correctIndex: 1, explanation: 'International or Foreign trade.' },
  { id: 'c10-q2', question: 'Buying goods from abroad is ______.', options: ['Export', 'Import', 'Entrepot', 'Smuggling'], correctIndex: 1, explanation: 'Inflow of goods, outflow of forex.' },
  { id: 'c10-q3', question: 'Which concept is broader?', options: ['Balance of Trade', 'Balance of Payment', 'Balance of Services', 'None'], correctIndex: 1, explanation: 'BOP includes BOT plus services and capital transfers.' },
  { id: 'c10-q4', question: 'India\'s main import is ______.', options: ['Textiles', 'Petroleum', 'Tea', 'Jute'], correctIndex: 1, explanation: 'Crude Oil (POL) is biggest bill.' },
  { id: 'c10-q5', question: 'Trade in services is called ______ trade.', options: ['Visible', 'Invisible', 'Illegal', 'Local'], correctIndex: 1, explanation: 'Cannot be seen at customs.' },
  { id: 'c10-q6', question: 'Export of goods leads to ______ of foreign exchange.', options: ['Outflow', 'Inflow', 'Loss', 'Deficit'], correctIndex: 1, explanation: 'We earn dollars.' },
  { id: 'c10-q7', question: 'Processing imported goods and exporting them is ______.', options: ['Entrepot', 'Import', 'Internal', 'Retail'], correctIndex: 0, explanation: 'Re-export trade.' },
  { id: 'c10-q8', question: 'India has a ______ Balance of Trade usually.', options: ['Surplus', 'Deficit', 'Balanced', 'Zero'], correctIndex: 1, explanation: 'We import more than we export (Oil/Gold).' },
  { id: 'c10-q9', question: 'Top export partner of India recently is ______.', options: ['UK', 'USA', 'Russia', 'Pakistan'], correctIndex: 1, explanation: 'USA is a major market.' },
  { id: 'c10-q10', question: 'Gold is a major item of India\'s ______.', options: ['Export', 'Import', 'Production', 'Aid'], correctIndex: 1, explanation: 'Indians love gold.' }
];

const ch10_reels: Reel[] = [
  { id: 'c10-r1', title: 'BOT vs BOP', content: 'BOT = Only Goods (Visible).\nBOP = Goods + Services + Capital (Visible + Invisible).\n\nBOP is the full report card of a country\'s international trade.', color: getReelColor(6) },
  { id: 'c10-r2', title: 'Entrepot Trade', content: 'Importing NOT for using, but for Selling again.\n\nExample: Japan imports raw material, makes electronics, exports to India.', color: getReelColor(0) },
  { id: 'c10-r3', title: 'India\'s Trade', content: 'We Export: Gems, Jewelry, IT Services, Pharma.\nWe Import: Oil, Gold, Electronics.\n\nWe usually have a Trade Deficit (Import > Export).', color: getReelColor(1) },
  { id: 'c10-r4', title: 'Invisible Trade', content: 'Shipping, Tourism, Banking, Software.\n\nWhen a foreigner visits Taj Mahal, it is an Invisible Export for India!', color: getReelColor(2) },
  { id: 'c10-r5', title: 'Oil', content: 'Why is Petrol expensive?\nBecause it is our #1 Import.\nWhen Global Oil Price goes up, India\'s Import Bill explodes.', color: getReelColor(3) }
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
        syllabus: `
### Economics Syllabus (12th HSC) - Detailed Breakdown

**1. Introduction to Micro and Macro Economics**
* **Micro Economics**: Meaning, Definitions (Maurice Dobb, AP Lerner), Scope (Product Pricing, Factor Pricing, Welfare), Features, Importance.
* **Macro Economics**: Meaning, Definitions (J.L. Hansen, Carl Shapiro), Scope (Income & Employment, General Price Level, Growth), Features, Importance.

**2. Utility Analysis**
* **Concepts**: Utility, Total Utility (TU), Marginal Utility (MU).
* **Relationship**: Relationship between TU and MU.
* **Law of Diminishing Marginal Utility (DMU)**: Statement, Assumptions, Exceptions, Criticisms.
* **Significance**: Importance of the Law of DMU.

**3. A) Demand Analysis**
* **Concept**: Meaning and Definition of Demand.
* **Demand Schedule**: Individual and Market Demand Schedule & Curve.
* **Determinants**: Factors affecting demand.
* **Law of Demand**: Statement, Assumptions, Exceptions.
* **Variations & Changes**: Expansion/Contraction vs Increase/Decrease.

**3. B) Elasticity of Demand**
* **Concept**: Definition.
* **Types**: Price, Income, Cross Elasticity.
* **Types of Price Elasticity**: Perfectly Elastic, Perfectly Inelastic, Unitary, Relatively Elastic, Relatively Inelastic.
* **Measurement**: Ratio Method, Total Expenditure Method, Point (Geometric) Method.
* **Factors**: Factors influencing elasticity.
* **Importance**: Practical importance of elasticity.

**4. Supply Analysis**
* **Concepts**: Total Output, Stock, Supply.
* **Supply Schedule**: Individual and Market.
* **Determinants**: Factors affecting supply.
* **Law of Supply**: Statement, Assumptions, Exceptions.
* **Cost Concepts**: Total Cost, Average Cost, Marginal Cost.
* **Revenue Concepts**: Total Revenue, Average Revenue, Marginal Revenue.

**5. Forms of Market**
* **Classification**: Place, Time, Competition.
* **Perfect Competition**: Meaning, Features, Price Determination.
* **Monopoly**: Meaning, Features, Types.
* **Oligopoly**: Meaning, Features.
* **Monopolistic Competition**: Meaning, Features.

**6. Index Numbers**
* **Concept**: Meaning, Definitions, Features.
* **Types**: Price, Quantity, Value, Special Purpose.
* **Significance**: Importance in economics.
* **Construction**: Steps involved.
* **Methods**: Simple Aggregate, Weighted Aggregate (Laspeyre’s, Paasche’s).
* **Limitations**: Limitations of Index Numbers.

**7. National Income**
* **Meaning**: Definitions, Features.
* **Circular Flow**: Two-sector model.
* **Concepts**: GDP, NDP, GNP, NNP (Market Price & Factor Cost).
* **Measurement Methods**: Output (Product), Income, Expenditure.
* **Difficulties**: Theoretical and Practical difficulties.
* **Importance**: Significance of NI data.

**8. Public Finance in India**
* **Concept**: Meaning, Nature, Public vs Private Finance.
* **Public Expenditure**: Classification, Reasons for growth.
* **Public Revenue**: Taxes (Direct/Indirect), Non-Tax Revenue.
* **Public Debt**: Internal vs External.
* **Fiscal Policy**: Concept.
* **Budget**: Meaning, Types (Balanced, Surplus, Deficit).

**9. Money Market and Capital Market in India**
* **Money Market**: Meaning, Structure (Organized/Unorganized), Instruments, Functions.
* **Capital Market**: Meaning, Structure (Gilt-edged, Industrial, DFIs), Role.
* **RBI**: Functions of Reserve Bank of India.
* **Commercial Banks**: Functions.

**10. Foreign Trade of India**
* **Concept**: Internal vs Foreign Trade.
* **Types**: Import, Export, Entrepot.
* **Trade Balance**: Balance of Trade vs Balance of Payments.
* **Trends**: Composition and Direction of India's Foreign Trade (Recent trends).
`,
        paperPattern: `
### Board Paper Pattern (80 Marks)
* **Q.1 Objective Questions (20 Marks)**
  * Choose correct option, Correlation, Odd one out, etc.
* **Q.2 A) Identify & Explain Concepts (6 Marks)**
  * Any 3 out of 5.
  **B) Distinguish Between (6 Marks)**
  * Any 3 out of 5.
* **Q.3 Answer the following (12 Marks)**
  * Any 3 out of 5.
* **Q.4 State with reasons Agree or Disagree (12 Marks)**
  * Any 3 out of 5.
* **Q.5 Study Table/Figure/Passage and Answer (8 Marks)**
  * Any 2 out of 3.
* **Q.6 Answer in Detail (16 Marks)**
  * Any 2 out of 3. (Long answers)
        `,
        previousPapers: [],
        chapters: [
          {
            id: 'eco-1',
            title: '1. Intro to Micro & Macro',
            description: 'Understanding the two main branches of economics, their scope, and significance.',
            summary: '**Micro Economics**: Studies individual units (Tree). Uses Slicing method.\n**Macro Economics**: Studies aggregate units (Forest). Uses Lumping method.\n\n**Ragnar Frisch** coined terms in 1933.',
            detailedNotes: '### 1. Micro Economics\nDerived from "Mikros" (Small).\n\n**Features**:\n* **Study of Individual Units**: Consumer, Firm.\n* **Price Theory**: Product & Factor Pricing.\n* **Partial Equilibrium**: Isolates one unit.\n* **Based on Ceteris Paribus**: Other things constant.\n* **Slicing Method**: Splits economy.\n* **Limited Scope**: Individual demand/supply.\n\n### 2. Macro Economics\nDerived from "Makros" (Large).\n\n**Features**:\n* **Study of Aggregates**: National Income, Total Emp.\n* **Income Theory**: Determination of NI.\n* **General Equilibrium**: Interdependence.\n* **Lumping Method**: Groups units.\n* **Policy Oriented**: Solves inflation, unemployment.\n\n### Distinguish\n| Micro | Macro |\n|---|---|\n| Individual unit | Whole Economy |\n| Slicing Method | Lumping Method |\n| Price Theory | Income Theory |\n| Partial Equilibrium | General Equilibrium |',
            flashcards: ch1_flashcards,
            mcqs: ch1_mcqs,
            reels: ch1_reels
          },
          {
            id: 'eco-2',
            title: '2. Utility Analysis',
            description: 'Consumer behavior, Law of Diminishing Marginal Utility, and relationship between TU and MU.',
            summary: '**Utility**: Want satisfying power.\n**Law of DMU**: As consumption increases, MU decreases.\n**Point of Satiety**: TU Max, MU Zero.',
            detailedNotes: '### Features of Utility\n1. **Relative concept**: Changes with Time/Place.\n2. **Subjective concept**: Differs person to person.\n3. **Ethically neutral**: Good/Bad doesn\'t matter.\n4. **Not same as usefulness**: Liquor has utility.\n5. **Not same as pleasure**: Injection has utility.\n\n### Law of DMU\n"Other things being constant, the additional benefit which a person derives from a given increase in his stock of a thing, diminishes with every increase in the stock that he already has."\n\n**Assumptions**:\n* Rationality\n* Cardinal Measurement\n* Homogeneity\n* Continuity\n* Reasonability\n\n**Exceptions**:\n* Hobbies\n* Miser\n* Addictions\n* Power\n* Money',
            flashcards: ch2_flashcards,
            mcqs: ch2_mcqs,
            reels: ch2_reels
          },
          {
            id: 'eco-3a',
            title: '3A. Demand Analysis',
            description: 'Concept of Demand, Determinants, and the Law of Demand with exceptions.',
            summary: 'Demand = Desire + Ability + Willingness.\n**Law**: Inverse relation between Price and Qty.\n**Exceptions**: Giffen Goods, Prestige Goods, Speculation.',
            detailedNotes: '### Types of Demand\n1. **Direct**: Consumer goods (Food).\n2. **Indirect (Derived)**: Factors of production (Labour).\n3. **Complementary (Joint)**: Car & Petrol.\n4. **Composite**: Electricity (Multiple uses).\n5. **Competitive**: Tea vs Coffee.\n\n### Law of Demand\nHigher the Price, Lower the Demand.\nCurve slopes Downward from Left to Right.\n\n**Determinants**:\n* Price\n* Income\n* Population\n* Tastes & Habits\n* Price of Substitute/Complementary goods.',
            flashcards: ch3a_flashcards,
            mcqs: ch3a_mcqs,
            reels: ch3a_reels
          },
          {
            id: 'eco-3b',
            title: '3B. Elasticity of Demand',
            description: 'Measurement of responsiveness of demand to changes in price, income, and cross prices.',
            summary: '**Ed**: Elasticity of Demand.\n**Types**: Price, Income, Cross.\n**Price Elasticity**: Perfectly Elastic (∞), Perfectly Inelastic (0), Unitary (1), Relatively Elastic (>1), Relatively Inelastic (<1).',
            detailedNotes: '### Types of Price Elasticity\n1. **Perfectly Elastic (Ed=∞)**: Horizontal Line.\n2. **Perfectly Inelastic (Ed=0)**: Vertical Line.\n3. **Unitary Elastic (Ed=1)**: Rectangular Hyperbola.\n4. **Relatively Elastic (Ed>1)**: Flatter curve.\n5. **Relatively Inelastic (Ed<1)**: Steeper curve.\n\n### Methods of Measurement\n* **Ratio Method**: % Change Q / % Change P.\n* **Total Expenditure Method**: Compare Total Outlay.\n* **Geometric Method**: Point Elasticity.',
            flashcards: ch3b_flashcards,
            mcqs: ch3b_mcqs,
            reels: ch3b_reels
          },
          {
            id: 'eco-4',
            title: '4. Supply Analysis',
            description: 'Production, Cost concepts, Revenue concepts, and Law of Supply.',
            summary: '**Supply**: Offered for sale at a price.\n**Law**: Direct relation between Price and Supply.\n**Stock vs Supply**: Stock is potential, Supply is actual.',
            detailedNotes: '### Concepts of Cost\n* **Total Cost (TC)**: TFC + TVC.\n* **Average Cost (AC)**: TC / Qty.\n* **Marginal Cost (MC)**: Cost of additional unit.\n\n### Law of Supply\nHigher the Price, Higher the Supply.\n**Determinants**: Price, Tech, Cost, Infra.\n**Exception**: Supply of Labour (Backward Bending Curve).\n\n### Revenue\n* TR = P x Q\n* AR = TR / Q = Price\n* MR = TRn - TRn-1',
            flashcards: ch4_flashcards,
            mcqs: ch4_mcqs,
            reels: ch4_reels
          },
          {
            id: 'eco-5',
            title: '5. Forms of Market',
            description: 'Classification of markets based on competition: Perfect, Monopoly, Oligopoly.',
            summary: '**Perfect Competition**: Homogeneous products, single price.\n**Monopoly**: Single seller, price maker.\n**Oligopoly**: Few sellers.',
            detailedNotes: '### Perfect Competition\n* Large number of buyers/sellers.\n* Free entry and exit.\n* Perfect knowledge.\n* Homogeneous Product.\n* Single Price.\n\n### Monopoly\n* Single seller.\n* No close substitutes.\n* Barriers to entry.\n* Price Maker.\n* Price Discrimination.\n\n### Monopolistic Competition\n* Many sellers.\n* **Product Differentiation**.\n* Selling Costs (Ads).',
            flashcards: ch5_flashcards,
            mcqs: ch5_mcqs,
            reels: ch5_reels
          },
          {
            id: 'eco-6',
            title: '6. Index Numbers',
            description: 'Statistical tools to measure economic changes over time.',
            summary: '**Index Number**: Economic Barometer.\n**Types**: Price Index, Quantity Index, Value Index.\n**Methods**: Simple & Weighted.',
            detailedNotes: '### Features\n* Statistical Device.\n* Measure of Net Change.\n* Expressed in Percentage (Base=100).\n\n### Construction Steps\n1. Purpose of Index.\n2. Selection of Base Year.\n3. Selection of Commodities.\n4. Selection of Prices.\n5. Choice of Average.\n6. Choice of Weights.\n\n### Methods\n* **Laspeyre**: Uses Base Year Qty (q0).\n* **Paasche**: Uses Current Year Qty (q1).',
            flashcards: ch6_flashcards,
            mcqs: ch6_mcqs,
            reels: ch6_reels
          },
          {
            id: 'eco-7',
            title: '7. National Income',
            description: 'Measurement of aggregate economic activity of the nation.',
            summary: '**NI**: Net National Product at Factor Cost.\n**Methods**: Output, Income, Expenditure.\n**GDP vs GNP**: Domestic vs National.',
            detailedNotes: '### Concepts\n* **GDP**: Within domestic territory.\n* **GNP**: GDP + Net Factor Income from Abroad.\n* **NNP**: GNP - Depreciation.\n\n### Circular Flow\nHouseholds provide Factors -> Firms provide Goods.\nMoney flows in reverse (Wages -> Consumption).\n\n### Methods\n1. **Output Method**: Inventory.\n2. **Income Method**: Factor Cost.\n3. **Expenditure Method**: C+I+G+(X-M).',
            flashcards: ch7_flashcards,
            mcqs: ch7_mcqs,
            reels: ch7_reels
          },
          {
            id: 'eco-8',
            title: '8. Public Finance in India',
            description: 'Role of Government in the economy, Budget, Taxes.',
            summary: '**Public Finance**: Govt Income & Exp.\n**Revenue**: Tax (Direct/Indirect) & Non-Tax.\n**Budget**: Balanced, Surplus, Deficit.',
            detailedNotes: '### Public Revenue\n* **Tax**: Compulsory contribution.\n* **Direct Tax**: Income Tax (Impact on same person).\n* **Indirect Tax**: GST (Impact shifted).\n* **Non-Tax**: Fees, Fines, Grants.\n\n### Public Expenditure\n* Revenue Exp (Salaries).\n* Capital Exp (Assets).\n\n### Budget Types\n* **Balanced**: Rev = Exp.\n* **Surplus**: Rev > Exp.\n* **Deficit**: Exp > Rev (Common in India).',
            flashcards: ch8_flashcards,
            mcqs: ch8_mcqs,
            reels: ch8_reels
          },
          {
            id: 'eco-9',
            title: '9. Money & Capital Market',
            description: 'Financial system of India: RBI, Banks, Stock Markets.',
            summary: '**Money Market**: Short term funds.\n**Capital Market**: Long term funds.\n**RBI**: Central Bank.\n**SEBI**: Regulator.',
            detailedNotes: '### Money Market\n* Short term ( < 1 year).\n* Instruments: Call Money, T-Bills, CP, CD.\n* **RBI**: Central Bank, Issuer of currency, Banker to Govt, Controller of Credit.\n\n### Capital Market\n* Long term ( > 1 year).\n* Instruments: Shares, Debentures, Bonds.\n* **SEBI**: Regulatory body.\n* Types: Gilt-edged (Govt), Industrial Securities.',
            flashcards: ch9_flashcards,
            mcqs: ch9_mcqs,
            reels: ch9_reels
          },
          {
            id: 'eco-10',
            title: '10. Foreign Trade of India',
            description: 'Trends in Imports and Exports, Balance of Payments.',
            summary: '**Trade**: Import, Export.\n**BOT**: Visible goods only.\n**BOP**: All transactions.\n**Trend**: India exports Engineering goods, Imports Oil.',
            detailedNotes: '### Types of Trade\n* **Import**: Inflow of goods.\n* **Export**: Outflow of goods.\n* **Entrepot**: Re-export.\n\n### Concepts\n* **BOT**: Export - Import (Goods).\n* **BOP**: Systematic record of all transactions.\n\n### Trends in India\n* **Exports**: Engg goods, Gems, Chemicals, Textiles.\n* **Imports**: Petroleum, Gold, Electronics.\n* **Partners**: USA, UAE, China.',
            flashcards: ch10_flashcards,
            mcqs: ch10_mcqs,
            reels: ch10_reels
          }
        ]
      },
      {
        id: 'ocm',
        name: 'O.C.M.',
        icon: 'Briefcase',
        color: 'bg-emerald-500',
        syllabus: 'Pending...',
        paperPattern: 'Pending...',
        previousPapers: [],
        chapters: []
      },
      {
        id: 'bk',
        name: 'Accounts',
        icon: 'Calculator',
        color: 'bg-rose-500',
        syllabus: 'Pending...',
        paperPattern: 'Pending...',
        previousPapers: [],
        chapters: []
      },
      {
        id: 'sp',
        name: 'Secretarial Practice',
        icon: 'PenTool',
        color: 'bg-purple-500',
        syllabus: 'Pending...',
        paperPattern: 'Pending...',
        previousPapers: [],
        chapters: []
      }
    ]
  },
  [Stream.ARTS]: { id: Stream.ARTS, subjects: [] },
  [Stream.SCIENCE]: { id: Stream.SCIENCE, subjects: [] }
};