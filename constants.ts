
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

// --- CHAPTER 6 DATA: Index Numbers ---
const ch6_flashcards: Flashcard[] = [
  { id: 'c6-f1', front: 'Index Number', back: 'A statistical device to measure changes in an economic variable over time.' },
  { id: 'c6-f2', front: 'Base Year', back: 'The year against which comparisons are made. It should be normal and not too distant. Taken as 100.' },
  { id: 'c6-f3', front: 'Current Year', back: 'The year for which the index number is calculated.' },
  { id: 'c6-f4', front: 'Price Index Number', back: 'Measures change in general price level (Inflation).' },
  { id: 'c6-f5', front: 'Quantity Index Number', back: 'Measures change in physical volume of production (Agricultural/Industrial).' },
  { id: 'c6-f6', front: 'Value Index Number', back: 'Measures change in total value (Price x Qty).' },
  { id: 'c6-f7', front: 'Laspeyres Method', back: 'Uses Base Year Quantity (q0) as weights. Formula: Σp1q0 / Σp0q0 x 100.' },
  { id: 'c6-f8', front: 'Paasche Method', back: 'Uses Current Year Quantity (q1) as weights. Formula: Σp1q1 / Σp0q1 x 100.' },
  { id: 'c6-f9', front: 'Fisher’s Ideal Index', back: 'Geometric mean of Laspeyres and Paasche. Considers both base and current year quantities.' },
  { id: 'c6-f10', front: 'Cost of Living Index (CPI)', back: 'Measures change in cost of living for a specific class of people. Used for DA calculation.' },
  { id: 'c6-f11', front: 'Wholesale Price Index (WPI)', back: 'Measures change in price level of goods in wholesale market.' },
  { id: 'c6-f12', front: 'Simple Aggregative Method', back: 'Σp1 / Σp0 x 100. Easy but ignores relative importance (weights).' },
  { id: 'c6-f13', front: 'Weighted Average of Price Relatives', back: 'Uses weights (w) for each commodity. Formula: ΣRW / ΣW.' },
  { id: 'c6-f14', front: 'Limitation: Sampling', back: 'Index numbers are based on samples, so error is possible.' },
  { id: 'c6-f15', front: 'Limitation: Quality', back: 'Changes in quality of product are often ignored.' }
];

const ch6_mcqs: Question[] = [
  { id: 'c6-q1', question: 'Index number is a ______ barometer.', options: ['Social', 'Economic', 'Political', 'Scientific'], correctIndex: 1, explanation: 'It indicates the pulse of the economy.' },
  { id: 'c6-q2', question: 'Base year index is assumed to be ______.', options: ['0', '1', '100', '10'], correctIndex: 2, explanation: 'Standard reference value.' },
  { id: 'c6-q3', question: 'Laspeyres index uses ______ quantity as weight.', options: ['Current Year', 'Base Year', 'Average', 'None'], correctIndex: 1, explanation: 'q0 is used.' },
  { id: 'c6-q4', question: 'Paasches index uses ______ quantity as weight.', options: ['Current Year', 'Base Year', 'Previous Year', 'Future Year'], correctIndex: 0, explanation: 'q1 is used.' },
  { id: 'c6-q5', question: 'Index number measuring change in value is ______.', options: ['Price Index', 'Quantity Index', 'Value Index', 'Special Index'], correctIndex: 2, explanation: 'Value = Price x Quantity.' },
  { id: 'c6-q6', question: 'Fishers method is the ______ mean of Laspeyres and Paasche.', options: ['Arithmetic', 'Geometric', 'Harmonic', 'None'], correctIndex: 1, explanation: 'Square root of L x P.' },
  { id: 'c6-q7', question: 'Dearness Allowance (DA) is linked to ______.', options: ['WPI', 'CPI', 'Value Index', 'Sensex'], correctIndex: 1, explanation: 'Cost of Living Index.' },
  { id: 'c6-q8', question: 'Selection of commodities depends on ______.', options: ['Taste', 'Purpose of Index', 'Income', 'None'], correctIndex: 1, explanation: 'Purpose decides the basket.' },
  { id: 'c6-q9', question: 'Σp1 refers to sum of prices of ______.', options: ['Base Year', 'Current Year', 'Last Year', 'Next Year'], correctIndex: 1, explanation: '1 stands for Current, 0 for Base.' },
  { id: 'c6-q10', question: 'Index numbers are free from limitations. (True/False)', options: ['True', 'False'], correctIndex: 1, explanation: 'They have bias, sampling errors, etc.' }
];

const ch6_reels: Reel[] = [
  { id: 'c6-r1', title: 'Barometer of Economy', content: 'Just as a barometer measures pressure, Index Numbers measure Economic Pressure (Inflation/Growth).', color: getReelColor(0) },
  { id: 'c6-r2', title: 'Laspeyres vs Paasche', content: 'Laspeyres: "I only care about what you bought in the PAST (Base Year)." (Uses q0).\n\nPaasche: "I only care about what you buy NOW (Current Year)." (Uses q1).', color: getReelColor(1) },
  { id: 'c6-r3', title: 'Real Income Tool', content: 'How do you know if you are richer than last year?\n\nIf your salary doubled but prices tripled (Index Number), your REAL income actually fell!', color: getReelColor(2) }
];

// --- CHAPTER 7 DATA: National Income ---
const ch7_flashcards: Flashcard[] = [
  { id: 'c7-f1', front: 'National Income', back: 'Total money value of all final goods and services produced in a country during a year.' },
  { id: 'c7-f2', front: 'Flow Concept', back: 'NI is a flow variable (measured over a period), not stock.' },
  { id: 'c7-f3', front: 'GDP (Gross Domestic Product)', back: 'Market value of all final goods produced WITHIN the domestic territory.' },
  { id: 'c7-f4', front: 'GNP (Gross National Product)', back: 'GDP + Net Factor Income from Abroad (X - M). Includes income of nationals abroad.' },
  { id: 'c7-f5', front: 'NNP (Net National Product)', back: 'GNP - Depreciation.' },
  { id: 'c7-f6', front: 'Depreciation', back: 'Wear and tear of capital assets during production.' },
  { id: 'c7-f7', front: 'Transfer Payments', back: 'Payments without corresponding production (Pension, Scholarship). Excluded from NI.' },
  { id: 'c7-f8', front: 'Circular Flow (2 Sector)', back: 'Flow of income/expenditure between Households and Firms. No Govt/Foreign sector.' },
  { id: 'c7-f9', front: 'Output Method', back: 'Product Method. Sum of market value of output of all sectors. Avoids double counting.' },
  { id: 'c7-f10', front: 'Income Method', back: 'Sum of factor incomes (Rent + Wages + Interest + Profit).' },
  { id: 'c7-f11', front: 'Expenditure Method', back: 'C + I + G + (X-M). Sum of all final expenditure.' },
  { id: 'c7-f12', front: 'Green GNP', back: 'GNP adjusted for environmental degradation/depletion of resources.' },
  { id: 'c7-f13', front: 'Per Capita Income', back: 'National Income / Total Population. Average income of a citizen.' },
  { id: 'c7-f14', front: 'Double Counting', back: 'Counting value of a good more than once (e.g. Wheat + Flour + Bread). Must be avoided.' },
  { id: 'c7-f15', front: 'Personal Income', back: 'Income actually received by individuals before paying direct taxes.' }
];

const ch7_mcqs: Question[] = [
  { id: 'c7-q1', question: 'Net Factor Income from Abroad is added to GDP to get ______.', options: ['NDP', 'NNP', 'GNP', 'Personal Income'], correctIndex: 2, explanation: 'GNP includes foreign income.' },
  { id: 'c7-q2', question: 'Transfer payments are ______ National Income.', options: ['Included in', 'Excluded from', 'Subtracted from', 'Multiplied by'], correctIndex: 1, explanation: 'Unilateral payments (Pension) generate no output.' },
  { id: 'c7-q3', question: 'Depreciation is deducted from GNP to get ______.', options: ['GDP', 'NNP', 'NDP', 'PI'], correctIndex: 1, explanation: 'Gross - Depreciation = Net.' },
  { id: 'c7-q4', question: 'Income method sums up ______.', options: ['Sales', 'Factor Incomes', 'Expenditure', 'Imports'], correctIndex: 1, explanation: 'Rent, Wages, Interest, Profit.' },
  { id: 'c7-q5', question: 'To avoid double counting, we use ______ method.', options: ['Final Value', 'Value Added', 'Both A & B', 'None'], correctIndex: 2, explanation: 'Either count final value only or sum of value added.' },
  { id: 'c7-q6', question: 'Circular flow in 2-sector model includes ______.', options: ['Govt', 'Foreign Sector', 'Households & Firms', 'Banks'], correctIndex: 2, explanation: 'Closed economy assumption.' },
  { id: 'c7-q7', question: 'Unpaid services of housewife are ______ NI.', options: ['Included in', 'Excluded from', 'Added to', 'Part of'], correctIndex: 1, explanation: 'Hard to value in money terms.' },
  { id: 'c7-q8', question: 'National Income Committee was established in ______.', options: ['1947', '1949', '1951', '1991'], correctIndex: 1, explanation: 'Chaired by P.C. Mahalanobis.' },
  { id: 'c7-q9', question: 'In India, NI is estimated by ______.', options: ['RBI', 'CSO', 'Planning Commission', 'Finance Ministry'], correctIndex: 1, explanation: 'Central Statistical Office.' },
  { id: 'c7-q10', question: 'GNP is a ______ concept than GDP.', options: ['Narrower', 'Broader', 'Smaller', 'Identical'], correctIndex: 1, explanation: 'Includes international income.' }
];

const ch7_reels: Reel[] = [
  { id: 'c7-r1', title: 'GDP vs GNP', content: 'GDP: Made IN India (by anyone).\n(e.g. A Japanese factory in Mumbai is part of India\'s GDP).\n\nGNP: Made BY Indians (anywhere).\n(e.g. An Indian working in Dubai is part of India\'s GNP).', color: getReelColor(3) },
  { id: 'c7-r2', title: 'The Double Counting Trap', content: 'Farmer sells wheat for ₹100.\nMiller makes flour for ₹150.\nBaker makes bread for ₹200.\n\nTotal NI? NOT 100+150+200.\nIt is just ₹200 (Final Value). Or (100+50+50) Value Added.', color: getReelColor(4) },
  { id: 'c7-r3', title: 'Green GNP', content: 'Traditional GDP ignores pollution.\n\nIf you cut a forest to build a factory, GDP goes UP.\nGreen GNP says: "Wait, you lost a forest!" and subtracts that loss.', color: getReelColor(5) }
];

// --- CHAPTER 8 DATA: Public Finance ---
const ch8_flashcards: Flashcard[] = [
  { id: 'c8-f1', front: 'Public Finance', back: 'Study of income and expenditure of the Government (State/Central/Local).' },
  { id: 'c8-f2', front: 'Private Finance', back: 'Individual/Private Firm finance. Motive: Profit. Elasticity: High.' },
  { id: 'c8-f3', front: 'Public Revenue', back: 'Income of govt. Main sources: Tax and Non-Tax.' },
  { id: 'c8-f4', front: 'Direct Tax', back: 'Impact and Incidence fall on the same person. (e.g. Income Tax). Cannot be shifted.' },
  { id: 'c8-f5', front: 'Indirect Tax', back: 'Impact on one, Incidence on another. (e.g. GST). Tax burden is shifted to consumer.' },
  { id: 'c8-f6', front: 'GST (Goods & Services Tax)', back: 'Unified indirect tax implemented on 1st July 2017. "One Nation, One Tax".' },
  { id: 'c8-f7', front: 'Non-Tax Revenue', back: 'Fees, Fines, Grants, Special Levy, Prices of public goods (Rail fare).' },
  { id: 'c8-f8', front: 'Public Expenditure', back: 'Spending by govt for protection and welfare. (Revenue Exp vs Capital Exp).' },
  { id: 'c8-f9', front: 'Public Debt', back: 'Loans taken by govt. Internal (from within country) vs External (World Bank/IMF).' },
  { id: 'c8-f10', front: 'Fiscal Policy', back: 'Govt policy regarding Taxation, Public Expenditure and Public Debt.' },
  { id: 'c8-f11', front: 'Government Budget', back: 'Financial statement of estimated receipts and expenditure for coming year (1st April - 31st March).' },
  { id: 'c8-f12', front: 'Balanced Budget', back: 'Revenue = Expenditure.' },
  { id: 'c8-f13', front: 'Surplus Budget', back: 'Revenue > Expenditure. Good for inflation.' },
  { id: 'c8-f14', front: 'Deficit Budget', back: 'Revenue < Expenditure. Useful for developing countries to promote growth.' },
  { id: 'c8-f15', front: 'Primary Deficit', back: 'Fiscal Deficit - Interest Payments.' }
];

const ch8_mcqs: Question[] = [
  { id: 'c8-q1', question: 'GST came into effect on ______.', options: ['1st April 2016', '1st July 2017', '1st Jan 2018', '15th Aug 2017'], correctIndex: 1, explanation: 'Historic tax reform.' },
  { id: 'c8-q2', question: 'Income tax is a ______ tax.', options: ['Indirect', 'Direct', 'Regressive', 'Optional'], correctIndex: 1, explanation: 'Burden cannot be shifted.' },
  { id: 'c8-q3', question: 'During inflation, govt should adopt ______ budget.', options: ['Deficit', 'Surplus', 'Balanced', 'Zero'], correctIndex: 1, explanation: 'Surplus reduces money supply.' },
  { id: 'c8-q4', question: 'Fees and Fines are ______ revenue.', options: ['Tax', 'Non-Tax', 'Capital', 'Private'], correctIndex: 1, explanation: 'Not taxes.' },
  { id: 'c8-q5', question: 'Public finance deals with ______.', options: ['Private Income', 'Govt Income & Exp', 'Bank Deposits', 'Stock Market'], correctIndex: 1, explanation: 'Financial operations of state.' },
  { id: 'c8-q6', question: 'Borrowing from World Bank is ______ debt.', options: ['Internal', 'External', 'Private', 'Local'], correctIndex: 1, explanation: 'Foreign source.' },
  { id: 'c8-q7', question: 'Deficit budget is useful for ______ countries.', options: ['Developed', 'Developing', 'Rich', 'Stagnant'], correctIndex: 1, explanation: 'Accelerates growth through spending.' },
  { id: 'c8-q8', question: 'Special Levy is charged for ______.', options: ['Special Services', 'Breaking Law', 'Special Benefit', 'None'], correctIndex: 2, explanation: 'e.g. Property value rise due to new road.' },
  { id: 'c8-q9', question: 'Burden of Indirect Tax falls on ______.', options: ['Producer', 'Retailer', 'Consumer', 'Govt'], correctIndex: 2, explanation: 'Shifted to end user.' },
  { id: 'c8-q10', question: 'Article ______ of Constitution deals with Budget.', options: ['110', '112', '280', '370'], correctIndex: 1, explanation: 'Annual Financial Statement.' }
];

const ch8_reels: Reel[] = [
  { id: 'c8-r1', title: 'Tax vs Fee', content: 'Tax: Compulsory. No direct benefit.\n(You pay Income Tax, but can\'t demand a dedicated road for yourself).\n\nFee: Voluntary. Direct benefit.\n(You pay College Fee, you get Education).', color: getReelColor(6) },
  { id: 'c8-r2', title: 'Why Deficit is Good?', content: 'Developing nations (India) spend MORE than they earn (Deficit).\nWhy?\nTo build roads, dams, schools.\nThis creates jobs -> Income -> Growth.\nIdeally, it\'s an investment!', color: getReelColor(0) },
  { id: 'c8-r3', title: 'GST Tiers', content: '0% (Essentials)\n5% (Common use)\n12% & 18% (Standard)\n28% (Luxury/Sin goods).\n\nOne Nation, One Tax replaced VAT, Excise, Service Tax.', color: getReelColor(1) }
];

// --- CHAPTER 9 DATA: Money Market ---
const ch9_flashcards: Flashcard[] = [
  { id: 'c9-f1', front: 'Money Market', back: 'Market for lending and borrowing of short term funds (less than 1 year). Deals in near money.' },
  { id: 'c9-f2', front: 'Capital Market', back: 'Market for medium and long term funds (Shares, Debentures).' },
  { id: 'c9-f3', front: 'RBI (Reserve Bank of India)', back: 'Central Bank. Apex body. Estd 1st April 1935. Nationalized 1st Jan 1949.' },
  { id: 'c9-f4', front: 'Commercial Banks', back: 'Accept deposits and grant loans for profit. (SBI, HDFC).' },
  { id: 'c9-f5', front: 'Call Money Market', back: 'Inter-bank lending for very short period (1 day / overnight). Highest liquidity.' },
  { id: 'c9-f6', front: 'Treasury Bills (T-Bills)', back: 'Issued by RBI on behalf of Govt for 91, 182, 364 days. Risk free.' },
  { id: 'c9-f7', front: 'Certificate of Deposit (CD)', back: 'Unsecured instrument issued by Commercial Banks.' },
  { id: 'c9-f8', front: 'Commercial Paper (CP)', back: 'Issued by high rated Corporates to raise short term funds.' },
  { id: 'c9-f9', front: 'Function: Issuer of Currency', back: 'RBI has monopoly to issue notes (except ₹1 note/coins).' },
  { id: 'c9-f10', front: 'Function: Banker to Govt', back: 'RBI acts as agent, advisor and banker to Central/State Govts.' },
  { id: 'c9-f11', front: 'Function: Bankers Bank', back: 'RBI controls commercial banks. Lender of last resort.' },
  { id: 'c9-f12', front: 'Repo Rate', back: 'Rate at which RBI lends to Commercial Banks (Short term).' },
  { id: 'c9-f13', front: 'Reverse Repo Rate', back: 'Rate at which RBI borrows from Commercial Banks (Absorbs liquidity).' },
  { id: 'c9-f14', front: 'CRR (Cash Reserve Ratio)', back: '% of deposits banks must keep with RBI as cash.' },
  { id: 'c9-f15', front: 'SLR (Statutory Liquidity Ratio)', back: '% of deposits banks must keep with themselves (Gold/Cash/Securities).' }
];

const ch9_mcqs: Question[] = [
  { id: 'c9-q1', question: 'RBI was established in ______.', options: ['1947', '1935', '1951', '1991'], correctIndex: 1, explanation: 'RBI Act 1934, Estd 1935.' },
  { id: 'c9-q2', question: 'Money market deals in ______ funds.', options: ['Long term', 'Medium term', 'Short term', 'Permanent'], correctIndex: 2, explanation: '< 1 year.' },
  { id: 'c9-q3', question: 'Who is the Lender of Last Resort?', options: ['SBI', 'World Bank', 'RBI', 'Govt'], correctIndex: 2, explanation: 'Banks turn to RBI when they fail to get funds elsewhere.' },
  { id: 'c9-q4', question: '₹1 currency note is issued by ______.', options: ['RBI', 'Ministry of Finance', 'SBI', 'President'], correctIndex: 1, explanation: 'Signed by Finance Secretary.' },
  { id: 'c9-q5', question: 'T-Bills are issued by ______.', options: ['Commercial Banks', 'Companies', 'RBI/Govt', 'Co-op Banks'], correctIndex: 2, explanation: 'Govt borrowing tool.' },
  { id: 'c9-q6', question: 'Increase in CRR ______ credit creation capacity.', options: ['Increases', 'Decreases', 'Doubles', 'No change'], correctIndex: 1, explanation: 'Banks have less money to lend.' },
  { id: 'c9-q7', question: 'Unorganized sector includes ______.', options: ['SBI', 'RBI', 'Moneylenders', 'LIC'], correctIndex: 2, explanation: 'Indigenous bankers, moneylenders.' },
  { id: 'c9-q8', question: 'Call money is borrowed for ______.', options: ['1 day', '1 year', '5 years', '10 years'], correctIndex: 0, explanation: 'Overnight.' },
  { id: 'c9-q9', question: 'Repo Rate is a ______ tool of credit control.', options: ['Quantitative', 'Qualitative', 'Selective', 'Moral'], correctIndex: 0, explanation: 'Affects volume of credit.' },
  { id: 'c9-q10', question: 'Apex banking institution in India is ______.', options: ['SBI', 'RBI', 'NABARD', 'SEBI'], correctIndex: 1, explanation: 'Central Bank.' }
];

const ch9_reels: Reel[] = [
  { id: 'c9-r1', title: 'RBI Functions', content: '1. Prints Money\n2. Banker to Banks (Dad of all banks)\n3. Banker to Govt\n4. Controls Credit (Inflation fighter)\n5. Custodian of Forex.', color: getReelColor(2) },
  { id: 'c9-r2', title: 'Repo vs Reverse Repo', content: 'Repo: Bank needs money -> Borrows from RBI -> Pays Interest.\n\nReverse Repo: Bank has excess money -> Parks with RBI -> Earns Interest.', color: getReelColor(3) },
  { id: 'c9-r3', title: 'Money vs Capital', content: 'Need money for 2 months? Go to Money Market (Call money, T-Bills).\n\nNeed money for 10 years? Go to Capital Market (Stock Market, Bonds).', color: getReelColor(4) }
];

// --- CHAPTER 10 DATA: Foreign Trade ---
const ch10_flashcards: Flashcard[] = [
  { id: 'c10-f1', front: 'Internal Trade', back: 'Trade within the political boundaries of a country. (e.g. Maharashtra to Gujarat).' },
  { id: 'c10-f2', front: 'Foreign Trade', back: 'Trade between different countries. (e.g. India and USA).' },
  { id: 'c10-f3', front: 'Export', back: 'Selling goods and services to foreign countries.' },
  { id: 'c10-f4', front: 'Import', back: 'Buying goods and services from foreign countries.' },
  { id: 'c10-f5', front: 'Entrepot', back: 'Re-export. Importing goods from one country to sell to another after processing.' },
  { id: 'c10-f6', front: 'Balance of Trade (BOT)', back: 'Difference between value of Exports and Imports of VISIBLE GOODS only.' },
  { id: 'c10-f7', front: 'Balance of Payments (BOP)', back: 'Systematic record of all economic transactions (Goods + Services + Capital) between a country and rest of world.' },
  { id: 'c10-f8', front: 'Surplus BOT', back: 'Export Value > Import Value.' },
  { id: 'c10-f9', front: 'Deficit BOT', back: 'Import Value > Export Value. (India usually has deficit).' },
  { id: 'c10-f10', front: 'Composition of Trade', back: 'What items we trade. India shifted from agri exports to engineering/software exports.' },
  { id: 'c10-f11', front: 'Direction of Trade', back: 'Which countries we trade with. shifted from UK/USA to Asian/Middle East/China.' },
  { id: 'c10-f12', front: 'Role: Foreign Exchange', back: 'Trade earns Forex reserves needed for imports.' },
  { id: 'c10-f13', front: 'Role: Division of Labour', back: 'Countries specialize in what they produce best (Comparative Advantage).' },
  { id: 'c10-f14', front: 'Trend: Petroleum', back: 'India\'s largest import item (POL).' },
  { id: 'c10-f15', front: 'Trend: Gems & Jewellery', back: 'Major export earner for India.' }
];

const ch10_mcqs: Question[] = [
  { id: 'c10-q1', question: 'Trade between two countries is called ______ trade.', options: ['Internal', 'External', 'Local', 'Retail'], correctIndex: 1, explanation: 'International.' },
  { id: 'c10-q2', question: 'Buying goods from abroad is ______.', options: ['Export', 'Import', 'Entrepot', 'Smuggling'], correctIndex: 1, explanation: 'Inflow of goods.' },
  { id: 'c10-q3', question: 'BOP includes ______.', options: ['Goods only', 'Services only', 'Goods, Services & Capital', 'None'], correctIndex: 2, explanation: 'Broader concept than BOT.' },
  { id: 'c10-q4', question: 'BOT deals with ______.', options: ['Visible items', 'Invisible items', 'Capital', 'Loans'], correctIndex: 0, explanation: 'Goods only.' },
  { id: 'c10-q5', question: 'India\'s main import is ______.', options: ['Gold', 'Petroleum', 'Textiles', 'Tea'], correctIndex: 1, explanation: 'Crude Oil.' },
  { id: 'c10-q6', question: 'Export > Import leads to ______.', options: ['Deficit', 'Surplus', 'Balanced', 'Debt'], correctIndex: 1, explanation: 'Favorable balance.' },
  { id: 'c10-q7', question: 'Protectionism involves ______.', options: ['Free Trade', 'Restricting Imports', 'No Tariffs', 'Globalization'], correctIndex: 1, explanation: 'Protecting domestic industry.' },
  { id: 'c10-q8', question: 'Which sector contributes most to India\'s export?', options: ['Agriculture', 'Service/IT', 'Mining', 'Handicraft'], correctIndex: 1, explanation: 'Software exports.' },
  { id: 'c10-q9', question: 'Importing for re-export is called ______.', options: ['Entrepot', 'Export', 'Import', 'Counter Trade'], correctIndex: 0, explanation: 'Value addition hub.' },
  { id: 'c10-q10', question: 'Globalisation leads to ______ of trade.', options: ['Reduction', 'Expansion', 'Stoppage', 'Ban'], correctIndex: 1, explanation: 'Integration of markets.' }
];

const ch10_reels: Reel[] = [
  { id: 'c10-r1', title: 'BOT vs BOP', content: 'BOT (Balance of Trade): Only VISIBLE goods (Cars, Wheat).\n\nBOP (Balance of Payment): EVERYTHING (Goods + Services like IT/Tourism + Loans + Investment).\n\nBOP is the Big Picture.', color: getReelColor(5) },
  { id: 'c10-r2', title: 'India\'s Trade Story', content: '1947: We exported Tea, Jute, Cotton (Raw materials).\n\nNow: We export Software, Engineering Goods, Refined Petrol, Gems.\n\nFrom Farm to Factory & Office!', color: getReelColor(6) }
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
        syllabus: `### Economics Syllabus (12th HSC)

**1. Introduction to Micro and Macro Economics**
* **Micro Economics**: Features, Scope, Importance.
* **Macro Economics**: Features, Scope, Importance.

**2. Utility Analysis**
* **Concepts**: TU, MU, Law of DMU.

**3. A) Demand Analysis**
* **Concepts**: Demand Schedule, Law of Demand, Determinants.

**3. B) Elasticity of Demand**
* **Concepts**: Types, Measurement Methods.

**4. Supply Analysis**
* **Concepts**: Stock vs Supply, Law of Supply.

**5. Forms of Market**
* **Concepts**: Perfect Competition, Monopoly, Oligopoly.

**6. Index Numbers**
* **Concepts**: Types, Construction.

**7. National Income**
* **Concepts**: GDP, GNP, Measurement.

**8. Public Finance**
* **Concepts**: Budget, Tax, Debt.

**9. Money & Capital Market**
* **Concepts**: RBI, Banks, Stock Exchange.

**10. Foreign Trade**
* **Concepts**: Import, Export, BOP.`,
        paperPattern: `### Paper Pattern (80 Marks)
* **Q1. Objective** (20 Marks)
* **Q2. Terms/Distinguish** (12 Marks)
* **Q3. Short Notes** (12 Marks)
* **Q4. Agree/Disagree** (12 Marks)
* **Q5. Table/Passage** (8 Marks)
* **Q6. Long Answer** (16 Marks)`,
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
            description: 'Consumer behavior, Law of Diminishing Marginal Utility.',
            summary: '**Utility**: Want satisfying power.\n**Law of DMU**: As consumption increases, MU decreases.',
            detailedNotes: '### Features of Utility\n1. **Relative**: Time/Place.\n2. **Subjective**: Person to person.\n3. **Ethically neutral**.\n\n### Law of DMU\n"Other things being constant, the additional benefit which a person derives from a given increase in his stock of a thing, diminishes with every increase in the stock that he already has."\n\n**Assumptions**:\n* Rationality\n* Cardinal Measurement\n* Homogeneity\n\n**Exceptions**:\n* Hobbies\n* Miser\n* Money',
            flashcards: ch2_flashcards,
            mcqs: ch2_mcqs,
            reels: ch2_reels
          },
          {
            id: 'eco-3a',
            title: '3A. Demand Analysis',
            description: 'Concept of Demand and Law of Demand.',
            summary: 'Demand = Desire + Ability + Willingness.\n**Law**: Inverse relation between Price and Qty.',
            detailedNotes: '### Types of Demand\n1. **Direct**: Consumer goods.\n2. **Indirect**: Factors.\n3. **Complementary**: Joint.\n4. **Composite**: Multiple uses.\n5. **Competitive**: Substitutes.\n\n### Law of Demand\nInverse relationship between Price and Demand.\n**Exceptions**:\n* Giffen Goods\n* Prestige Goods\n* Speculation',
            flashcards: ch3a_flashcards,
            mcqs: ch3a_mcqs,
            reels: ch3a_reels
          },
          {
            id: 'eco-3b',
            title: '3B. Elasticity of Demand',
            description: 'Responsiveness of demand to change in price.',
            summary: '**Ed**: Elasticity of Demand.\n**Types**: Price, Income, Cross.\n**Methods**: Ratio, Outlay, Point.',
            detailedNotes: '### 1. Types of Price Elasticity\n* **Perfectly Elastic (∞)**: Horizontal curve.\n* **Perfectly Inelastic (0)**: Vertical curve.\n* **Unitary (1)**: Rectangular Hyperbola.\n* **Relatively Elastic (>1)**: Flatter curve.\n* **Relatively Inelastic (<1)**: Steeper curve.\n\n### 2. Methods of Measurement\n* **Ratio Method**: % Change in Q / % Change in P.\n* **Expenditure Method**: Relation between Price and Outlay.\n* **Point Method**: Geometric measurement.',
            flashcards: ch3b_flashcards,
            mcqs: ch3b_mcqs,
            reels: ch3b_reels
          },
          {
            id: 'eco-4',
            title: '4. Supply Analysis',
            description: 'Production, Stock and Supply.',
            summary: '**Supply**: Part of stock offered for sale.\n**Law of Supply**: Direct relationship (Price Up -> Supply Up).',
            detailedNotes: '### Concepts\n* **Total Output**: Production.\n* **Stock**: Potential supply.\n* **Supply**: Actual supply.\n\n### Law of Supply\n"Other things being constant, higher the price, greater is the quantity supplied."\n\n**Exceptions**:\n* Supply of Labour (Backward bending).\n* Agricultural Goods.\n* Rare articles.',
            flashcards: ch4_flashcards,
            mcqs: ch4_mcqs,
            reels: ch4_reels
          },
          {
            id: 'eco-5',
            title: '5. Forms of Market',
            description: 'Market structures: Perfect Competition, Monopoly, Oligopoly.',
            summary: '**Perfect Competition**: Price Taker.\n**Monopoly**: Price Maker.\n**Monopolistic**: Product Differentiation.',
            detailedNotes: '### 1. Perfect Competition\n* Large number of buyers/sellers.\n* Homogeneous product.\n* Single Price.\n\n### 2. Monopoly\n* Single Seller.\n* Price Discrimination.\n* No substitutes.\n\n### 3. Monopolistic Competition\n* Product Differentiation (Brand, Pack).\n* Selling Cost (Ads).\n\n### 4. Oligopoly\n* Few sellers.\n* Interdependence.',
            flashcards: ch5_flashcards,
            mcqs: ch5_mcqs,
            reels: ch5_reels
          },
           {
            id: 'eco-6',
            title: '6. Index Numbers',
            description: 'Statistical device to measure changes in variable.',
            summary: '**Index Number**: Barometer of economy.\n**Laspeyres**: Base year qty.\n**Paasche**: Current year qty.',
            detailedNotes: '### Types of Index Numbers\n1. **Price Index**: Measures inflation.\n2. **Quantity Index**: Measures output changes.\n3. **Value Index**: Price x Qty.\n\n### Methods\n* **Simple Aggregative**: Σp1 / Σp0\n* **Weighted Average**: ΣRW / ΣW\n* **Laspeyres**: Uses q0 weight.\n* **Paasche**: Uses q1 weight.',
            flashcards: ch6_flashcards,
            mcqs: ch6_mcqs,
            reels: ch6_reels
          },
           {
            id: 'eco-7',
            title: '7. National Income',
            description: 'Total income of the nation. GDP, GNP, NNP concepts.',
            summary: '**NI**: Total value of final goods & services.\n**Circular Flow**: Income = Expenditure = Output.',
            detailedNotes: '### Concepts\n* **GDP**: Within domestic territory.\n* **GNP**: GDP + Net factor income from abroad.\n* **NNP**: GNP - Depreciation.\n* **Disposable Income**: Income available for spending (PI - Direct Tax).\n\n### Difficulties in Measurement\n* **Theoretical**: Transfer payments, unpaid services, illegal income.\n* **Practical**: Double counting, lack of data.',
            flashcards: ch7_flashcards,
            mcqs: ch7_mcqs,
            reels: ch7_reels
          },
           {
            id: 'eco-8',
            title: '8. Public Finance',
            description: 'Government Revenue, Expenditure and Debt.',
            summary: '**Public Finance**: Govt income/expense.\n**Budget**: Financial statement of govt.',
            detailedNotes: '### Public Revenue\n* **Tax**: Compulsory. Direct (Income tax), Indirect (GST).\n* **Non-Tax**: Fees, Fines, Grants.\n\n### Public Expenditure\n* **Revenue Exp**: Salaries, Admin (No asset created).\n* **Capital Exp**: Dams, Roads (Asset created).\n\n### Types of Budget\n1. **Balanced**: Rev = Exp.\n2. **Surplus**: Rev > Exp (Control Inflation).\n3. **Deficit**: Rev < Exp (Promote Growth).',
            flashcards: ch8_flashcards,
            mcqs: ch8_mcqs,
            reels: ch8_reels
          },
           {
            id: 'eco-9',
            title: '9. Money Market',
            description: 'Market for short term funds. RBI and Banks.',
            summary: '**Money Market**: Short term (<1 yr).\n**RBI**: Central Bank.\n**Instruments**: T-Bills, Commercial Paper.',
            detailedNotes: '### Structure\n* **Organized**: RBI, Commercial Banks, Co-op Banks.\n* **Unorganized**: Moneylenders, Indigenous Bankers.\n\n### Functions of RBI\n* Issuer of Currency.\n* Banker to Govt.\n* Bankers Bank.\n* Credit Control (Repo, CRR).',
            flashcards: ch9_flashcards,
            mcqs: ch9_mcqs,
            reels: ch9_reels
          },
           {
            id: 'eco-10',
            title: '10. Foreign Trade',
            description: 'Import, Export and Balance of Payments.',
            summary: '**Trade**: Buying/Selling.\n**Foreign Trade**: Between countries.\n**BOP**: Systematic record.',
            detailedNotes: '### Types\n1. **Import**: Inflow.\n2. **Export**: Outflow.\n3. **Entrepot**: Re-export.\n\n### Concepts\n* **BOT**: Balance of Trade (Visible goods only).\n* **BOP**: Balance of Payments (Visible + Invisible + Capital).\n\n### Trends in India\n* **Exports**: Shift from Traditional (Tea/Jute) to Non-Traditional (Engineering/Gems).\n* **Imports**: Petroleum is top import.',
            flashcards: ch10_flashcards,
            mcqs: ch10_mcqs,
            reels: ch10_reels
          }
        ]
      },
      { id: 'ocm', name: 'O.C.M.', icon: 'Briefcase', color: 'bg-emerald-500', syllabus: 'Pending...', paperPattern: 'Pending...', previousPapers: [], chapters: [] },
      { id: 'bk', name: 'Accounts', icon: 'Calculator', color: 'bg-rose-500', syllabus: 'Pending...', paperPattern: 'Pending...', previousPapers: [], chapters: [] },
      { id: 'sp', name: 'Secretarial Practice', icon: 'PenTool', color: 'bg-purple-500', syllabus: 'Pending...', paperPattern: 'Pending...', previousPapers: [], chapters: [] }
    ]
  },
  [Stream.ARTS]: { id: Stream.ARTS, subjects: [] },
  [Stream.SCIENCE]: { id: Stream.SCIENCE, subjects: [] }
};
