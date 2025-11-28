

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

// ==========================================
//               ECONOMICS DATA
// ==========================================
// (Kept compact for file size, referring to previous context for full Econ data if needed, 
// but for this file generation, I will include the full structure to ensure the app works)

// --- CHAPTER 1 DATA: Intro to Micro & Macro ---
const ch1_flashcards: Flashcard[] = [
  { id: 'c1-f1', front: 'Micro Economics', back: 'Derived from Greek "Mikros" (Small). Studies individual units: consumer, firm, price of particular commodity.' },
  { id: 'c1-f2', front: 'Macro Economics', back: 'Derived from Greek "Makros" (Large). Studies the economy as a whole: National Income, Aggregate Demand.' },
  { id: 'c1-f3', front: 'Ragnar Frisch', back: 'Norwegian economist (Oslo University). Coined "Micro" and "Macro" in 1933. First Nobel Prize winner in Economics.' },
  { id: 'c1-f4', front: 'Ceteris Paribus', back: '"Other things remaining constant". The fundamental assumption of Micro Economics analysis.' },
  { id: 'c1-f5', front: 'Slicing Method', back: 'Micro economics splits the economy into small slices for in-depth study of each unit (e.g. one firm).' },
  { id: 'c1-f6', front: 'Lumping Method', back: 'Macro economics groups units together to study aggregates (e.g. Total National Output).' },
  { id: 'c1-f7', front: 'Adam Smith', back: 'Father of Economics. Classical Economist. Author of "Wealth of Nations" (1776). Micro focus.' },
  { id: 'c1-f8', front: 'Alfred Marshall', back: 'Neo-Classical Economist. Author of "Principles of Economics" (1890). Real architect of Micro Economics.' },
  { id: 'c1-f9', front: 'Price Theory', back: 'Micro Economics is called Price Theory as it determines prices of goods and factors of production.' },
  { id: 'c1-f10', front: 'Income Theory', back: 'Macro Economics is called Income Theory as it explains determination of National Income and Employment.' },
  { id: 'c1-f11', front: 'Partial Equilibrium', back: 'Micro analysis isolates an individual unit from other forces. It ignores interdependence.' },
  { id: 'c1-f12', front: 'General Equilibrium', back: 'Macro analysis studies the interdependence between all economic variables.' },
  { id: 'c1-f13', front: 'Scope: Product Pricing', back: 'Determination of price of goods. Governed by Demand and Supply.' },
  { id: 'c1-f14', front: 'Scope: Factor Pricing', back: 'Determination of rewards for Land (Rent), Labour (Wages), Capital (Interest), Entrepreneur (Profit).' },
  { id: 'c1-f15', front: 'Scope: Economic Welfare', back: 'Efficiency in production, consumption and overall economic efficiency.' },
  { id: 'c1-f16', front: 'Scope: Macro', back: 'Income & Employment, General Price Level, Growth & Development, Distribution.' },
  { id: 'c1-f17', front: 'Feature: Individual Units', back: 'Micro studies small individual units like a specific firm or consumer.' },
  { id: 'c1-f18', front: 'Feature: Analysis of Market Structure', back: 'Micro analyzes Perfect Competition, Monopoly, Oligopoly etc.' },
  { id: 'c1-f19', front: 'Feature: Limited Scope', back: 'Micro does not study nationwide problems like Inflation, Poverty, Unemployment.' },
  { id: 'c1-f20', front: 'Feature: Policy Oriented', back: 'Macro economics is a policy-oriented science. Suggests policies for growth.' }
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
  { id: 'c1-r4', title: 'Slicing Method', content: 'Imagine a loaf of bread.\nMicro economics slices it to study one slice (unit) in detail.\n\nMacro studies the whole loaf at once!', color: getReelColor(3) }
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
  { id: 'c2-f14', front: 'Relationship TU/MU', back: 'TU increases at a diminishing rate while MU falls. When TU is Max, MU is Zero. When TU falls, MU is negative.' },
  { id: 'c2-f15', front: 'Assumption: Rationality', back: 'Consumer is normal and tries to maximize satisfaction.' }
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
  { id: 'c2-r4', title: 'Exceptions to DMU', content: '1. Hobbies (Stamp collection)\n2. Miser (Greed for money)\n3. Addictions (Alcohol)\n4. Power\n\nIn these cases, MORE is BETTER (MU Increases).', color: getReelColor(3) }
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
  { id: 'c3a-r4', title: 'Veblen Effect', content: 'Snob Appeal.\n"I only buy it because it\'s expensive."\n\nRich people buy diamonds BECAUSE they are costly. If diamonds were cheap, they wouldn\'t buy them.', color: getReelColor(3) }
];

// --- CHAPTER 3B: Elasticity ---
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
  { id: 'c3b-f10', front: 'Total Expenditure Method', back: 'Marshall\'s method. Compares Total Outlay (Price x Qty) before and after price change.' }
];

const ch3b_mcqs: Question[] = [
  { id: 'c3b-q1', question: 'Ed = 0 indicates ______ elasticity.', options: ['Perfectly Elastic', 'Perfectly Inelastic', 'Unitary', 'Relatively Elastic'], correctIndex: 1, explanation: 'Quantity does not change at all (e.g. Salt).' },
  { id: 'c3b-q2', question: 'Demand curve is a rectangular hyperbola when elasticity is ______.', options: ['Unitary', 'Zero', 'Infinite', 'Less than 1'], correctIndex: 0, explanation: 'Area under curve (Expenditure) remains constant.' },
  { id: 'c3b-q3', question: 'Demand for salt is ______.', options: ['Elastic', 'Inelastic', 'Infinite', 'Unitary'], correctIndex: 1, explanation: 'It is a necessity with no close substitutes and low price.' },
  { id: 'c3b-q4', question: 'If price falls and Total Expenditure rises, demand is ______.', options: ['Elastic', 'Inelastic', 'Unitary', 'Zero'], correctIndex: 0, explanation: 'Inverse relation between Price and Outlay means Elastic.' },
  { id: 'c3b-q5', question: 'Cross elasticity for complementary goods is ______.', options: ['Positive', 'Negative', 'Zero', 'Infinite'], correctIndex: 1, explanation: 'Price of Petrol Up -> Demand for Car Down.' }
];

const ch3b_reels: Reel[] = [
  { id: 'c3b-r1', title: 'Ed > 1 vs Ed < 1', content: 'Ed > 1 (Elastic): Price falls 10%, Sales jump 50%! (Luxury cars).\n\nEd < 1 (Inelastic): Price rises 50%, Sales drop only 1%. (Salt/Meds).', color: getReelColor(0) },
  { id: 'c3b-r2', title: 'Rectangular Hyperbola', content: 'Special shape for Unitary Elasticity (Ed=1).\n\nWhy?\nBecause Total Expenditure (Price x Qty) remains exactly the SAME irrespective of price change.', color: getReelColor(1) },
  { id: 'c3b-r3', title: 'Substitutes Factor', content: 'More Substitutes = More Elastic.\n\nCoke price up? Everyone buys Pepsi -> Elastic.\nSalt price up? No substitute -> Inelastic.', color: getReelColor(2) }
];

// --- CHAPTER 4 DATA: Supply Analysis ---
const ch4_flashcards: Flashcard[] = [
  { id: 'c4-f1', front: 'Total Output', back: 'Sum total of quantity produced by all firms in a given time.' },
  { id: 'c4-f2', front: 'Stock', back: 'Total quantity available for sale at a specific point of time. Stock is the Source of Supply.' },
  { id: 'c4-f3', front: 'Supply', back: 'Part of stock offered for sale at a given price and time. Flow concept.' },
  { id: 'c4-f4', front: 'Supply Equation', back: 'Sx = f(Px). Supply is a function of Price.' },
  { id: 'c4-f5', front: 'Law of Supply', back: 'Direct relationship between Price and Supply. "Higher the price, larger the supply".' },
  { id: 'c4-f6', front: 'Supply Curve Slope', back: 'Upward sloping from left to right (Positive slope).' },
  { id: 'c4-f7', front: 'Assumption: Cost of Production', back: 'Must remain constant. If cost rises, supply decreases even at same price.' },
  { id: 'c4-f8', front: 'Assumption: Technology', back: 'No change in production techniques.' },
  { id: 'c4-f9', front: 'Assumption: Transport', back: 'Transport costs and facilities remain unchanged.' },
  { id: 'c4-f10', front: 'Assumption: Future Prices', back: 'Seller does not expect future price changes.' }
];

const ch4_mcqs: Question[] = [
  { id: 'c4-q1', question: 'Supply is a ______ concept.', options: ['Stock', 'Flow', 'Static', 'Fixed'], correctIndex: 1, explanation: 'It is measured over a period of time.' },
  { id: 'c4-q2', question: 'Stock is always ______ Supply.', options: ['Less than', 'Equal to', 'More than or Equal to', 'None'], correctIndex: 2, explanation: 'Supply comes out of Stock. Stock >= Supply.' },
  { id: 'c4-q3', question: 'Supply curve of labour is ______.', options: ['Upward sloping', 'Downward sloping', 'Backward bending', 'Vertical'], correctIndex: 2, explanation: 'Workers prefer leisure over work at very high wages.' },
  { id: 'c4-q4', question: 'Expansion of supply is caused by ______.', options: ['Lower Cost', 'Better Tech', 'Rise in Price', 'Fall in Price'], correctIndex: 2, explanation: 'Movement along the curve.' },
  { id: 'c4-q5', question: 'Average Cost = ______.', options: ['TC + Q', 'TC - Q', 'TC * Q', 'TC / Q'], correctIndex: 3, explanation: 'Cost per unit.' }
];

const ch4_reels: Reel[] = [
  { id: 'c4-r1', title: 'Stock vs Supply', content: 'Stock: Total water in the reservoir.\nSupply: Water flowing through the tap.\n\nStock is Potential. Supply is Actual.', color: getReelColor(0) },
  { id: 'c4-r2', title: 'Backward Bending Curve', content: 'Labour Supply is weird!\n\nWage $10 -> Work 8 hrs.\nWage $50 -> Work 12 hrs.\nWage $500 -> Work 4 hrs?!\n\nWhy? Because at very high income, you want LEISURE to enjoy the money!', color: getReelColor(1) },
  { id: 'c4-r3', title: 'Law of Supply', content: 'Seller\'s Psychology:\nPrice High -> Profit High -> Sell MORE.\nPrice Low -> Profit Low -> Sell LESS.', color: getReelColor(2) }
];

// --- CHAPTER 5 DATA: Forms of Market ---
const ch5_flashcards: Flashcard[] = [
  { id: 'c5-f1', front: 'Market', back: 'An arrangement where buyers and sellers come in contact (directly/indirectly) for exchange of goods.' },
  { id: 'c5-f2', front: 'Perfect Competition', back: 'Ideal market. Many sellers, Homogeneous product, Single price, Free entry/exit.' },
  { id: 'c5-f3', front: 'Price Taker', back: 'In Perfect Competition, single seller cannot influence price. He accepts market price.' },
  { id: 'c5-f4', front: 'Monopoly', back: 'Single Seller. No close substitutes. Price Maker. Entry barriers exist.' },
  { id: 'c5-f5', front: 'Price Discrimination', back: 'Charging different prices to different consumers for same product (e.g. Railways).' },
  { id: 'c5-f6', front: 'Oligopoly', back: 'Few Sellers. Interdependence. Kinked demand curve. Aggressive advertising.' },
  { id: 'c5-f7', front: 'Monopolistic Competition', back: 'Many sellers. Differentiated products (Brand, Packing). Selling cost concepts.' },
  { id: 'c5-f8', front: 'Product Differentiation', back: 'Main feature of Monopolistic Comp. Goods are substitutes but not identical.' },
  { id: 'c5-f9', front: 'Selling Cost', back: 'Cost incurred on advertisement to increase sale.' },
  { id: 'c5-f10', front: 'Duopoly', back: 'Market with exactly two sellers.' }
];

const ch5_mcqs: Question[] = [
  { id: 'c5-q1', question: 'Single seller means ______.', options: ['Perfect Competition', 'Monopoly', 'Oligopoly', 'Duopoly'], correctIndex: 1, explanation: 'Mono = Single.' },
  { id: 'c5-q2', question: 'Product differentiation is the main feature of ______.', options: ['Monopoly', 'Perfect Competition', 'Monopolistic Competition', 'Oligopoly'], correctIndex: 2, explanation: 'Same product, different brands (Soaps, Toothpaste).' },
  { id: 'c5-q3', question: 'Price Taker is a feature of ______.', options: ['Monopoly', 'Perfect Competition', 'Oligopoly', 'None'], correctIndex: 1, explanation: 'Seller accepts market price.' },
  { id: 'c5-q4', question: 'Selling cost is essential in ______.', options: ['Perfect Competition', 'Monopoly', 'Monopolistic Competition', 'None'], correctIndex: 2, explanation: 'To differentiate product.' },
  { id: 'c5-q5', question: 'Kinked demand curve is found in ______.', options: ['Monopoly', 'Oligopoly', 'Perfect Competition', 'Monopolistic'], correctIndex: 1, explanation: 'Due to price rigidity and interdependence.' }
];

const ch5_reels: Reel[] = [
  { id: 'c5-r1', title: 'Perfect Competition', content: 'Does it exist? NO.\nIt\'s a myth/ideal.\n\nImagine a market where every potato is IDENTICAL, price is SAME everywhere, and everyone knows EVERYTHING.\nImpossible!', color: getReelColor(0) },
  { id: 'c5-r2', title: 'Monopoly Power', content: 'Price Maker.\n\nSince I am the ONLY seller, I decide the price.\nIf you want electricity, you MUST buy from me (Adani/Tata). I can charge whatever I want (subject to demand).', color: getReelColor(1) },
  { id: 'c5-r3', title: 'Oligopoly Wars', content: 'Few Sellers (Jio, Airtel, Vi).\n\nIf Jio cuts price, Airtel MUST cut price.\nInterdependence.\nThey fight with ads, not just price.', color: getReelColor(2) }
];

// ... (Ch 6-10 Economics data assumed present based on previous context, keeping brief to focus on OCM expansion) ...

// ==========================================
//                  OCM DATA
// ==========================================

// --- OCM CHAPTER 1: Principles of Management ---
const ocm_ch1_flashcards: Flashcard[] = [
  { id: 'ocm-c1-f1', front: 'Management', back: 'The art of getting things done through others. A set of principles to coordinate resources.' },
  { id: 'ocm-c1-f2', front: 'Henri Fayol', back: 'Father of Modern Management. Proposed 14 Principles of Management in "General and Industrial Administration" (1916).' },
  { id: 'ocm-c1-f3', front: 'F.W. Taylor', back: 'Father of Scientific Management. Proposed scientific approach to work to increase efficiency.' },
  { id: 'ocm-c1-f4', front: 'Principle of Division of Work', back: 'Work should be divided into small tasks to achieve specialization and efficiency.' },
  { id: 'ocm-c1-f5', front: 'Principle of Authority & Responsibility', back: 'Authority is the right to give orders. Responsibility is the obligation to perform. They must go hand in hand.' },
  { id: 'ocm-c1-f6', front: 'Principle of Discipline', back: 'Obedience, respect for authority, and observance of rules are essential for smooth running.' },
  { id: 'ocm-c1-f7', front: 'Principle of Unity of Command', back: 'One employee should receive orders from ONE boss only to avoid confusion.' },
  { id: 'ocm-c1-f8', front: 'Principle of Unity of Direction', back: '"One Head, One Plan". All activities with same objective should be directed by one manager.' },
  { id: 'ocm-c1-f9', front: 'Scalar Chain', back: 'The chain of command/authority from top level to lower level. Communication flows through this chain.' },
  { id: 'ocm-c1-f10', front: 'Gang Plank', back: 'A shortcut in Scalar Chain for quick communication between employees of same level during emergency.' },
  { id: 'ocm-c1-f11', front: 'Esprit de Corps', back: 'Team spirit. Management should promote harmony and unity among employees.' },
  { id: 'ocm-c1-f12', front: 'Time Study', back: 'Technique to observe and record the time required to do a specific task.' },
  { id: 'ocm-c1-f13', front: 'Motion Study', back: 'Study of movements of a worker to eliminate unnecessary motions.' },
  { id: 'ocm-c1-f14', front: 'Differential Piece Wage Rate', back: 'Taylor\'s technique: Higher rate for efficient workers, Lower rate for inefficient workers.' },
  { id: 'ocm-c1-f15', front: 'Mental Revolution', back: 'Change in attitude of management and workers towards each other (Cooperation instead of conflict).' }
];

const ocm_ch1_mcqs: Question[] = [
  { id: 'ocm-c1-q1', question: 'Who is called the Father of Modern Management?', options: ['F.W. Taylor', 'Henri Fayol', 'Peter Drucker', 'Elton Mayo'], correctIndex: 1, explanation: 'French mining engineer who gave 14 principles.' },
  { id: 'ocm-c1-q2', question: 'Principle of Unity of Command insists on ______.', options: ['One Plan', 'One Boss', 'One Department', 'One Salary'], correctIndex: 1, explanation: 'Orders from only one superior to avoid conflict.' },
  { id: 'ocm-c1-q3', question: 'Scalar Chain means the hierarchy of ______.', options: ['Authority', 'Salary', 'Machinery', 'Time'], correctIndex: 0, explanation: 'Line of authority from top to bottom.' },
  { id: 'ocm-c1-q4', question: 'The shortcut in Scalar Chain is called ______.', options: ['Short Circuit', 'Gang Plank', 'Cross Talk', 'Direct Line'], correctIndex: 1, explanation: 'For direct communication without delay.' },
  { id: 'ocm-c1-q5', question: 'Taylor recommended ______ wage rate system.', options: ['Uniform', 'Standard', 'Differential Piece', 'Time based'], correctIndex: 2, explanation: 'To motivate workers to produce more.' }
];

const ocm_ch1_reels: Reel[] = [
  { id: 'ocm-c1-r1', title: 'Fayol vs Taylor', content: 'Fayol: Top Level Management. "Administrative Theory". Focus on Manager.\n\nTaylor: Shop Floor Level. "Scientific Management". Focus on Worker/Efficiency.', color: getReelColor(0) },
  { id: 'ocm-c1-r2', title: 'Unity of Command', content: 'Imagine having 2 bosses.\nBoss A: "Do this report now!"\nBoss B: "Go to meeting now!"\n\nConfusion? Chaos?\nThat\'s why Fayol said: ONE Employee = ONE Boss.', color: getReelColor(1) }
];

// --- OCM CHAPTER 2: Functions of Management ---
const ocm_ch2_flashcards: Flashcard[] = [
  { id: 'ocm-c2-f1', front: 'Planning', back: 'Basic function. Deciding in advance what to do. Bridging gap between where we are and where we want to go.' },
  { id: 'ocm-c2-f2', front: 'Organizing', back: 'Process of identifying and grouping the work, defining and delegating responsibility and authority.' },
  { id: 'ocm-c2-f3', front: 'Staffing', back: 'Recruiting, selecting, developing, promoting and compensating personnel. "Right person at the right job".' },
  { id: 'ocm-c2-f4', front: 'Directing', back: 'Instructing, guiding, communicating, inspiring, motivating and supervising the employees.' },
  { id: 'ocm-c2-f5', front: 'Coordinating', back: 'Synchronization of efforts of all group members to achieve common goals.' },
  { id: 'ocm-c2-f6', front: 'Controlling', back: 'Comparing actual performance with standard performance and taking corrective measures.' },
  { id: 'ocm-c2-f7', front: 'POSDCORB', back: 'Acronym by Luther Gulick: Planning, Organizing, Staffing, Directing, COordinating, Reporting, Budgeting.' }
];

const ocm_ch2_mcqs: Question[] = [
  { id: 'ocm-c2-q1', question: 'The function of management that initiates action is ______.', options: ['Planning', 'Directing', 'Staffing', 'Controlling'], correctIndex: 1, explanation: 'Planning is thinking, Directing is doing.' },
  { id: 'ocm-c2-q2', question: '______ is the last function of management.', options: ['Planning', 'Organizing', 'Controlling', 'Staffing'], correctIndex: 2, explanation: 'It completes the cycle.' },
  { id: 'ocm-c2-q3', question: 'Right person at the right job is the goal of ______.', options: ['Planning', 'Organizing', 'Staffing', 'Directing'], correctIndex: 2, explanation: 'Human Resource function.' }
];

const ocm_ch2_reels: Reel[] = [
  { id: 'ocm-c2-r1', title: 'The Cycle', content: '1. Plan (Think)\n2. Organize (Group)\n3. Staff (Hire)\n4. Direct (Lead)\n5. Control (Check)\n\nIt never stops!', color: getReelColor(3) }
];

// --- OCM CHAPTER 3: Entrepreneurship Development ---
const ocm_ch3_flashcards: Flashcard[] = [
  { id: 'ocm-c3-f1', front: 'Entrepreneur', back: 'A person who starts a business, takes risk, innovates and organizes resources to make profit. Derived from French \'Entreprendre\'.' },
  { id: 'ocm-c3-f2', front: 'Characteristics: Innovator', back: 'Introduction of new combinations (New product, new method, new market).' },
  { id: 'ocm-c3-f3', front: 'Characteristics: Risk Bearer', back: 'Willingness to assume the risk of loss. "No Risk, No Gain".' },
  { id: 'ocm-c3-f4', front: 'Characteristics: Visionary', back: 'Ability to foresee future market trends and opportunities.' },
  { id: 'ocm-c3-f5', front: 'Function: Innovation', back: 'Schumpeter said innovation is the main function. Doing something new or differently.' },
  { id: 'ocm-c3-f6', front: 'Function: Determination of Objectives', back: 'Entrepreneur must define the primary and secondary objectives of the business clearly.' },
  { id: 'ocm-c3-f7', front: 'Function: Development of Market', back: 'Finding new consumers and new markets for the products.' },
  { id: 'ocm-c3-f8', front: 'EDP (Entrepreneurship Development Programme)', back: 'Structured training process to motivate and groom potential entrepreneurs.' },
  { id: 'ocm-c3-f9', front: 'Start-up India', back: 'Govt initiative launched in 2016 to build a strong ecosystem for nurturing innovation and startups.' },
  { id: 'ocm-c3-f10', front: 'Stand-up India', back: 'Scheme to facilitate bank loans between 10 lakh to 1 crore to SC/ST or Women borrowers.' },
  { id: 'ocm-c3-f11', front: 'Agro-tourism', back: 'Commercial enterprise at a working farm conducted for the enjoyment of visitors. Links agriculture with tourism.' },
  { id: 'ocm-c3-f12', front: 'Intrapreneur', back: 'An employee who uses entrepreneurial skills within an existing organization to innovate.' },
  { id: 'ocm-c3-f13', front: 'Service Industry', back: 'Entrepreneurs are increasingly focusing on the service sector (IT, Hospitality).' },
  { id: 'ocm-c3-f14', front: 'Women Entrepreneur', back: 'A woman or group of women who initiate, organize and run a business enterprise (e.g. Kiran Mazumdar Shaw).' },
  { id: 'ocm-c3-f15', front: 'Idea Generation', back: 'The first step in EDP. Brainstorming new business concepts.' }
];

const ocm_ch3_mcqs: Question[] = [
  { id: 'ocm-c3-q1', question: 'The word Entrepreneur is derived from the ______ language.', options: ['Greek', 'Latin', 'French', 'German'], correctIndex: 2, explanation: 'From "Entreprendre" meaning to undertake.' },
  { id: 'ocm-c3-q2', question: '______ is the function of an entrepreneur.', options: ['Innovation', 'Routine work', 'Following orders', 'None'], correctIndex: 0, explanation: 'Joseph Schumpeter emphasized innovation.' },
  { id: 'ocm-c3-q3', question: 'Start-up India initiative was launched in ______.', options: ['2014', '2015', '2016', '2018'], correctIndex: 2, explanation: 'To promote startups.' },
  { id: 'ocm-c3-q4', question: 'Agro-tourism is helpful for ______.', options: ['Urbanites', 'Farmers', 'Foreigners', 'Students'], correctIndex: 1, explanation: 'Provides additional income to farmers.' },
  { id: 'ocm-c3-q5', question: 'An individual who works as an entrepreneur within a company is called ______.', options: ['Manager', 'Intrapreneur', 'Director', 'Consultant'], correctIndex: 1, explanation: 'Innovation within organization.' }
];

const ocm_ch3_reels: Reel[] = [
  { id: 'ocm-c3-r1', title: 'Who is an Entrepreneur?', content: 'Not just a businessman.\n\nBusinessman: "I buy cheap, sell dear." (Profit driven)\nEntrepreneur: "I create something NEW." (Innovation driven)\n\nElon Musk vs Local Shopkeeper.', color: getReelColor(4) },
  { id: 'ocm-c3-r2', title: 'Intrapreneur', content: 'You don\'t have to quit your job to be an entrepreneur!\n\nGoogle employees created Gmail while working at Google.\nThey are Intrapreneurs.', color: getReelColor(5) },
  { id: 'ocm-c3-r3', title: 'Agro Tourism', content: 'Farm + Vacation = Agro Tourism.\n\nCity people pay to live on a farm, ride tractors, and eat fresh food.\nFarmers get extra income!', color: getReelColor(6) }
];

// --- OCM CHAPTER 4: Business Services ---
const ocm_ch4_flashcards: Flashcard[] = [
  { id: 'ocm-c4-f1', front: 'Service Definition', back: 'Intangible activities that provide satisfaction of wants and are linked to sale of products.' },
  { id: 'ocm-c4-f2', front: 'Feature: Intangibility', back: 'Services cannot be touched, seen or felt. (e.g. Doctor\'s advice).' },
  { id: 'ocm-c4-f3', front: 'Feature: Inseparability', back: 'Service provider and service cannot be separated. (e.g. Singer and Song).' },
  { id: 'ocm-c4-f4', front: 'Feature: Perishability', back: 'Services cannot be stored. (e.g. Empty seat in a flight is lost forever).' },
  { id: 'ocm-c4-f5', front: 'Bank', back: 'Financial institution dealing in money and credit.' },
  { id: 'ocm-c4-f6', front: 'Central Bank', back: 'Apex bank. RBI in India. Controls monetary policy.' },
  { id: 'ocm-c4-f7', front: 'Commercial Bank', back: 'Accepts deposits and grants loans for profit. (SBI, HDFC).' },
  { id: 'ocm-c4-f8', front: 'E-Banking: NEFT', back: 'National Electronic Funds Transfer. Batch processing of fund transfers.' },
  { id: 'ocm-c4-f9', front: 'E-Banking: RTGS', back: 'Real Time Gross Settlement. Instant fund transfer (Large value).' },
  { id: 'ocm-c4-f10', front: 'Insurance', back: 'Contract where insurer indemnifies insured against loss for a premium.' },
  { id: 'ocm-c4-f11', front: 'Principle of Utmost Good Faith', back: 'Both parties must disclose all material facts correctly.' },
  { id: 'ocm-c4-f12', front: 'Principle of Insurable Interest', back: 'Insured must have financial interest in the subject matter. (e.g. Own life, Own property).' },
  { id: 'ocm-c4-f13', front: 'Principle of Indemnity', back: 'Insurance is not for profit. Only actual loss is compensated. (Not applicable to Life Insurance).' },
  { id: 'ocm-c4-f14', front: 'Principle of Subrogation', back: 'After compensation, ownership of damaged property passes to insurer.' },
  { id: 'ocm-c4-f15', front: 'Principle of Contribution', back: 'If double insured, insurers share the loss. Insured cannot claim full form both.' },
  { id: 'ocm-c4-f16', front: 'Principle of Mitigation of Loss', back: 'Insured must try to minimize the loss (e.g. Call fire brigade during fire).' },
  { id: 'ocm-c4-f17', front: 'Principle of Causa Proxima', back: 'Nearest Cause. Compensation only if loss is due to insured cause.' },
  { id: 'ocm-c4-f18', front: 'Warehousing', back: 'Storage of goods. Creates Time Utility.' },
  { id: 'ocm-c4-f19', front: 'Bonded Warehouse', back: 'Stores imported goods until custom duty is paid.' },
  { id: 'ocm-c4-f20', front: 'Communication', back: 'Transfer of information. Postal, Courier, Email.' }
];

const ocm_ch4_mcqs: Question[] = [
  { id: 'ocm-c4-q1', question: 'Services are ______ in nature.', options: ['Tangible', 'Intangible', 'Storable', 'Visible'], correctIndex: 1, explanation: 'Cannot be seen or touched.' },
  { id: 'ocm-c4-q2', question: 'Principle of Indemnity is NOT applicable to ______ insurance.', options: ['Fire', 'Marine', 'Life', 'General'], correctIndex: 2, explanation: 'Human life cannot be valued in money.' },
  { id: 'ocm-c4-q3', question: 'In RTGS, transactions are settled ______.', options: ['In Batches', 'Instantly', 'Next Day', 'Weekly'], correctIndex: 1, explanation: 'Real Time Gross Settlement.' },
  { id: 'ocm-c4-q4', question: '______ warehouse is used for storing imported goods before duty payment.', options: ['Private', 'Public', 'Bonded', 'Co-operative'], correctIndex: 2, explanation: 'Under custom control.' },
  { id: 'ocm-c4-q5', question: 'Door to door service is provided by ______ transport.', options: ['Rail', 'Air', 'Road', 'Water'], correctIndex: 2, explanation: 'Most flexible mode.' },
  { id: 'ocm-c4-q6', question: 'The apex bank of India is ______.', options: ['SBI', 'RBI', 'HDFC', 'World Bank'], correctIndex: 1, explanation: 'Reserve Bank of India.' },
  { id: 'ocm-c4-q7', question: 'Principle of ______ states that insured must try to minimize loss.', options: ['Indemnity', 'Subrogation', 'Mitigation of Loss', 'Contribution'], correctIndex: 2, explanation: 'One should act as if uninsured.' },
  { id: 'ocm-c4-q8', question: 'NEFT stands for ______.', options: ['National Electronic Fund Transfer', 'Net Electronic Fund Transfer', 'New Electronic Fund Transfer', 'None'], correctIndex: 0, explanation: 'Electronic payment system.' },
  { id: 'ocm-c4-q9', question: 'Warehousing creates ______ utility.', options: ['Place', 'Time', 'Form', 'Possession'], correctIndex: 1, explanation: 'Stores goods for future.' },
  { id: 'ocm-c4-q10', question: 'Money remittance is a function of ______.', options: ['Bank', 'Warehouse', 'Transport', 'None'], correctIndex: 0, explanation: 'Transfer of funds.' }
];

const ocm_ch4_reels: Reel[] = [
  { id: 'ocm-c4-r1', title: '7 Principles of Insurance', content: '1. Utmost Good Faith (No lies)\n2. Insurable Interest (You must care)\n3. Indemnity (No profit)\n4. Subrogation (Scrap belongs to insurer)\n5. Contribution (Share loss)\n6. Mitigation (Save it!)\n7. Causa Proxima (Nearest cause)', color: getReelColor(0) },
  { id: 'ocm-c4-r2', title: 'RTGS vs NEFT', content: 'RTGS: VIP Lane. Instant. Large amount (>2 Lakhs).\n\nNEFT: Bus Lane. Batches (every 30 mins). Any amount.\n\nNeed speed? Go RTGS.', color: getReelColor(1) },
  { id: 'ocm-c4-r3', title: 'Bonded Warehouse', content: 'Imported a Ferrari but can\'t pay tax yet?\n\nKeep it in a Bonded Warehouse.\nSafe custody until you pay the custom duty.', color: getReelColor(2) }
];

// --- OCM CHAPTER 5: Emerging Modes of Business ---
const ocm_ch5_flashcards: Flashcard[] = [
  { id: 'ocm-c5-f1', front: 'E-Business', back: 'Electronic Business. Conducting business activities using internet. Broader than E-Commerce.' },
  { id: 'ocm-c5-f2', front: 'B2B (Business to Business)', back: 'Transactions between two business firms. (e.g. Car manufacturer buying tyres from Tyre company).' },
  { id: 'ocm-c5-f3', front: 'B2C (Business to Consumer)', back: 'Transactions between business and final consumer. (e.g. Buying from Amazon).' },
  { id: 'ocm-c5-f4', front: 'C2C (Consumer to Consumer)', back: 'Transactions between two consumers. (e.g. Selling old bike on OLX).' },
  { id: 'ocm-c5-f5', front: 'C2B (Consumer to Business)', back: 'Consumer provides service to business. (e.g. Freelancer writing review for a company).' },
  { id: 'ocm-c5-f6', front: 'Outsourcing', back: 'Contracting out non-core business activities to specialized agencies.' },
  { id: 'ocm-c5-f7', front: 'BPO (Business Process Outsourcing)', back: 'Outsourcing routine business processes (Call centers, Data entry).' },
  { id: 'ocm-c5-f8', front: 'KPO (Knowledge Process Outsourcing)', back: 'Outsourcing high-end knowledge work (Research, Legal advice, Data Analysis).' },
  { id: 'ocm-c5-f9', front: 'LPO (Legal Process Outsourcing)', back: 'Outsourcing legal work to external firm.' },
  { id: 'ocm-c5-f10', front: 'Benefit of E-Business', back: 'Global reach, 24x7 operation, Lower cost, Paperless society.' },
  { id: 'ocm-c5-f11', front: 'Limitation of E-Business', back: 'Lack of personal touch, Security issues, Technical failure.' },
  { id: 'ocm-c5-f12', front: 'Digital Cash', back: 'Money in electronic form (Wallets, Crypto).' }
];

const ocm_ch5_mcqs: Question[] = [
  { id: 'ocm-c5-q1', question: 'Buying goods from Amazon is an example of ______.', options: ['B2B', 'B2C', 'C2C', 'C2B'], correctIndex: 1, explanation: 'Business selling to Consumer.' },
  { id: 'ocm-c5-q2', question: 'OLX/eBay is an example of ______.', options: ['B2B', 'B2C', 'C2C', 'B2G'], correctIndex: 2, explanation: 'Consumer selling to Consumer.' },
  { id: 'ocm-c5-q3', question: 'Outsourcing high quality knowledge work is called ______.', options: ['BPO', 'KPO', 'LPO', 'RPO'], correctIndex: 1, explanation: 'Knowledge Process Outsourcing.' },
  { id: 'ocm-c5-q4', question: 'The term E-Business was derived from ______.', options: ['Email', 'E-Commerce', 'Internet', 'Banking'], correctIndex: 1, explanation: 'It is a broader term.' },
  { id: 'ocm-c5-q5', question: 'Which is NOT a benefit of E-Business?', options: ['Global Reach', 'Paperless', 'Personal Touch', 'Convenience'], correctIndex: 2, explanation: 'Lack of personal touch is a limitation.' }
];

const ocm_ch5_reels: Reel[] = [
  { id: 'ocm-c5-r1', title: 'BPO vs KPO', content: 'BPO: Routine work (Call center, Customer support). "Do as told".\n\nKPO: Brain work (Research, Analytics). "Think and Do".\n\nKPO is the smarter brother of BPO.', color: getReelColor(3) },
  { id: 'ocm-c5-r2', title: 'Why Outsource?', content: 'Focus on Core.\n\nNike designs shoes (Core). It outsources manufacturing to factories.\nResult: Nike focuses on Brand & Marketing, Factory focuses on Stitching.', color: getReelColor(4) }
];

// --- OCM CHAPTER 6: Social Responsibility ---
const ocm_ch6_flashcards: Flashcard[] = [
  { id: 'ocm-c6-f1', front: 'Social Responsibility', back: 'Obligation of business to take decisions and actions that are desirable for society.' },
  { id: 'ocm-c6-f2', front: 'Concept of Trusteeship', back: 'Given by Mahatma Gandhi. Businessmen are trustees of society\'s wealth and should use it for social welfare.' },
  { id: 'ocm-c6-f3', front: 'Responsibility to Owners', back: 'Fair return on investment, transparency, growth of business.' },
  { id: 'ocm-c6-f4', front: 'Responsibility to Investors', back: 'Proper conduct of meetings, Safety of capital, Fair dividend.' },
  { id: 'ocm-c6-f5', front: 'Responsibility to Employees', back: 'Fair wages, Good working conditions, Job security, Trade union rights.' },
  { id: 'ocm-c6-f6', front: 'Responsibility to Consumers', back: 'Good quality goods, Fair price, Honest advertising, Consumer safety.' },
  { id: 'ocm-c6-f7', front: 'Responsibility to Govt', back: 'Payment of taxes, Following laws, Not bribing.' },
  { id: 'ocm-c6-f8', front: 'Responsibility to Society', back: 'Environment protection, Employment generation, Help in natural calamities.' },
  { id: 'ocm-c6-f9', front: 'CSR (Corporate Social Responsibility)', back: 'Mandatory for large companies (Sec 135 of Companies Act 2013). Spend 2% of avg net profit on social causes.' },
  { id: 'ocm-c6-f10', front: 'Business Ethics', back: 'Code of conduct to be followed by business. Moral principles (Honesty, Integrity).' }
];

const ocm_ch6_mcqs: Question[] = [
  { id: 'ocm-c6-q1', question: 'Concept of Trusteeship was propounded by ______.', options: ['F.W. Taylor', 'Mahatma Gandhi', 'Jawaharlal Nehru', 'Karl Marx'], correctIndex: 1, explanation: 'Wealth belongs to society.' },
  { id: 'ocm-c6-q2', question: 'CSR is mandatory under Companies Act ______.', options: ['1956', '2013', '2000', '1991'], correctIndex: 1, explanation: 'Section 135.' },
  { id: 'ocm-c6-q3', question: 'Providing fair wages is responsibility towards ______.', options: ['Consumers', 'Govt', 'Employees', 'Shareholders'], correctIndex: 2, explanation: 'Basic right of worker.' },
  { id: 'ocm-c6-q4', question: 'Timely payment of tax is responsibility towards ______.', options: ['Society', 'Govt', 'Owner', 'Consumer'], correctIndex: 1, explanation: 'Legal obligation.' },
  { id: 'ocm-c6-q5', question: 'Business Ethics deals with ______.', options: ['Profit', 'Social Values', 'Competition', 'Technology'], correctIndex: 1, explanation: 'Right vs Wrong.' }
];

const ocm_ch6_reels: Reel[] = [
  { id: 'ocm-c6-r1', title: 'What is CSR?', content: 'Corporate Social Responsibility.\n\nGovt says: "You made profit from society? Give back!"\n\nBig companies MUST spend 2% of profit on charity (Schools, Hospitals, Environment).', color: getReelColor(5) },
  { id: 'ocm-c6-r2', title: 'Trusteeship', content: 'Gandhi\'s Idea.\n\nBusinessmen shouldn\'t act like OWNERS of wealth, but TRUSTEES (Caretakers).\nThe wealth really belongs to the people.', color: getReelColor(6) }
];


// ==========================================
//               MOCK DATA EXPORT
// ==========================================

export const MOCK_DATA: Record<Stream, StreamData> = {
  [Stream.COMMERCE]: {
    id: Stream.COMMERCE,
    subjects: [
      {
        id: 'eco',
        name: 'Economics',
        icon: 'TrendingUp',
        color: 'bg-indigo-500',
        syllabus: '### 1. Introduction to Micro and Macro Economics\n...\n### 10. Foreign Trade in India',
        paperPattern: '### Economics Paper Pattern (80 Marks)\n\n* **Q.1 Objective Questions (20 Marks)**\n  * Choose correct option\n  * Complete correlation\n  * Give economic term\n  * Find odd word out\n\n* **Q.2 Short Concepts & Distinguish (12 Marks)**\n  * A) Identify & Explain concepts (Any 3/5)\n  * B) Distinguish Between (Any 3/5)\n\n* **Q.3 Answer the following (12 Marks)**\n  * Short notes (Any 3/5)\n\n* **Q.4 Agree or Disagree (12 Marks)**\n  * With reasons (Any 3/5)\n\n* **Q.5 Study Table/Figure/Passage (8 Marks)**\n  * Analytical questions (Any 2/3)\n\n* **Q.6 Long Answer Questions (16 Marks)**\n  * Detailed answers (Any 2/3)',
        chapters: [
          { id: 'ch1', title: '1. Intro to Micro & Macro Economics', description: 'Foundations of economics, scope, and subject matter.', summary: 'Micro studies individual units. Macro studies aggregates.', detailedNotes: 'Pending...', flashcards: ch1_flashcards, mcqs: ch1_mcqs, reels: ch1_reels },
          { id: 'ch2', title: '2. Utility Analysis', description: 'Consumer behavior and utility concepts.', summary: 'Utility is want satisfying power.', detailedNotes: 'Pending...', flashcards: ch2_flashcards, mcqs: ch2_mcqs, reels: ch2_reels },
          { id: 'ch3a', title: '3A. Demand Analysis', description: 'Law of Demand and determinants.', summary: 'Inverse relationship between Price and Demand.', detailedNotes: 'Pending...', flashcards: ch3a_flashcards, mcqs: ch3a_mcqs, reels: ch3a_reels },
          { id: 'ch3b', title: '3B. Elasticity of Demand', description: 'Measurement of change in demand.', summary: 'Percentage change in Qty / Percentage change in Price.', detailedNotes: 'Pending...', flashcards: ch3b_flashcards, mcqs: ch3b_mcqs, reels: ch3b_reels },
          { id: 'ch4', title: '4. Supply Analysis', description: 'Production side of economics.', summary: 'Direct relationship between Price and Supply.', detailedNotes: 'Pending...', flashcards: ch4_flashcards, mcqs: ch4_mcqs, reels: ch4_reels },
          { id: 'ch5', title: '5. Forms of Market', description: 'Perfect Competition, Monopoly, Oligopoly.', summary: 'Classification based on competition.', detailedNotes: 'Pending...', flashcards: ch5_flashcards, mcqs: ch5_mcqs, reels: ch5_reels },
          { id: 'ch6', title: '6. Index Numbers', description: 'Tools to measure economic changes.', summary: 'Laspeyres, Paasche, Fisher methods.', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'ch7', title: '7. National Income', description: 'GDP, GNP, and measurement methods.', summary: 'Total income of the nation.', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'ch8', title: '8. Public Finance in India', description: 'Govt revenue, expenditure and debt.', summary: 'Fiscal policy and budget.', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'ch9', title: '9. Money Market & Capital Market', description: 'Financial system of India.', summary: 'RBI, Banks, Stock market.', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'ch10', title: '10. Foreign Trade of India', description: 'Import, Export and BOP.', summary: 'Trade with rest of the world.', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
        ],
        previousPapers: []
      },
      {
        id: 'ocm',
        name: 'OCM',
        icon: 'Briefcase',
        color: 'bg-emerald-500',
        syllabus: '1. Principles of Management\n2. Functions of Management\n3. Entrepreneurship Development\n4. Business Services\n5. Emerging Modes of Business\n6. Social Responsibility\n7. Consumer Protection\n8. Marketing',
        paperPattern: 'Similar to Economics Pattern.',
        chapters: [
          { id: 'ocm1', title: '1. Principles of Management', description: 'Fayol and Taylor principles.', summary: 'Nature and significance of management principles.', detailedNotes: 'Pending...', flashcards: ocm_ch1_flashcards, mcqs: ocm_ch1_mcqs, reels: ocm_ch1_reels },
          { id: 'ocm2', title: '2. Functions of Management', description: 'Planning to Controlling.', summary: 'The management cycle.', detailedNotes: 'Pending...', flashcards: ocm_ch2_flashcards, mcqs: ocm_ch2_mcqs, reels: ocm_ch2_reels },
          { id: 'ocm3', title: '3. Entrepreneurship Development', description: 'Skills and functions of entrepreneur.', summary: 'Innovation and risk taking.', detailedNotes: 'Pending...', flashcards: ocm_ch3_flashcards, mcqs: ocm_ch3_mcqs, reels: ocm_ch3_reels },
          { id: 'ocm4', title: '4. Business Services', description: 'Banking, Insurance, Transport.', summary: 'Aids to trade.', detailedNotes: 'Pending...', flashcards: ocm_ch4_flashcards, mcqs: ocm_ch4_mcqs, reels: ocm_ch4_reels },
          { id: 'ocm5', title: '5. Emerging Modes of Business', description: 'E-Business and Outsourcing.', summary: 'Modern way of doing business.', detailedNotes: 'Pending...', flashcards: ocm_ch5_flashcards, mcqs: ocm_ch5_mcqs, reels: ocm_ch5_reels },
          { id: 'ocm6', title: '6. Social Responsibility', description: 'CSR and ethics.', summary: 'Business obligation to society.', detailedNotes: 'Pending...', flashcards: ocm_ch6_flashcards, mcqs: ocm_ch6_mcqs, reels: ocm_ch6_reels },
          { id: 'ocm7', title: '7. Consumer Protection', description: 'Rights and responsibilities.', summary: 'Consumer Protection Act.', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'ocm8', title: '8. Marketing', description: '4Ps of Marketing.', summary: 'Product, Price, Place, Promotion.', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
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
      },
      {
        id: 'sp',
        name: 'Secretarial Practice',
        icon: 'PenTool',
        color: 'bg-purple-500',
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
