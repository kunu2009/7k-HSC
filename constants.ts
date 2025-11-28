import { Stream, StreamData, Question, Flashcard, Reel } from './types';

// --- Data Helpers ---
// We use these arrays to ensure we have distinct, high-quality content without loops generating "Fact #1".

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
  { id: 'c1-f1', front: 'Micro Economics', back: 'Derived from Greek word "Mikros" meaning Small. Studies individual units like a consumer or a firm.' },
  { id: 'c1-f2', front: 'Macro Economics', back: 'Derived from Greek word "Makros" meaning Large. Studies the economy as a whole.' },
  { id: 'c1-f3', front: 'Ragnar Frisch', back: 'Norwegian economist (Oslo University) who coined the terms Micro and Macro in 1933.' },
  { id: 'c1-f4', front: 'Ceteris Paribus', back: 'Latin phrase meaning "Other things remaining constant". The fundamental assumption of Micro Economics.' },
  { id: 'c1-f5', front: 'Slicing Method', back: 'Micro economics splits the economy into small slices for in-depth study of each unit.' },
  { id: 'c1-f6', front: 'Lumping Method', back: 'Macro economics groups units together to study aggregates (National Income, General Price Level).' },
  { id: 'c1-f7', front: 'Adam Smith', back: 'Father of Economics. Classical Economist. Wrote "Wealth of Nations" (1776).' },
  { id: 'c1-f8', front: 'Alfred Marshall', back: 'Neo-Classical Economist. Wrote "Principles of Economics" (1890). Focuses on welfare.' },
  { id: 'c1-f9', front: 'Price Theory', back: 'Another name for Micro Economics because it determines prices of goods and factors.' },
  { id: 'c1-f10', front: 'Income Theory', back: 'Another name for Macro Economics because it studies National Income.' },
  { id: 'c1-f11', front: 'General Equilibrium', back: 'Macro analysis dealing with the interdependence of all economic variables.' },
  { id: 'c1-f12', front: 'Partial Equilibrium', back: 'Micro analysis dealing with one unit in isolation, ignoring interdependence.' },
  { id: 'c1-f13', front: 'Economic Welfare', back: 'Efficiency in production, consumption, and overall economic efficiency.' },
  { id: 'c1-f14', front: 'Product Pricing', back: 'Determination of price of goods based on Demand and Supply forces.' },
  { id: 'c1-f15', front: 'Factor Pricing', back: 'Determination of rewards for Land (Rent), Labour (Wages), Capital (Interest), Entrepreneur (Profit).' },
  { id: 'c1-f16', front: 'Resource Allocation', back: 'Micro economics explains how resources are distributed among various goods.' },
  { id: 'c1-f17', front: 'Scope of Macro', back: '1. Income & Employment 2. General Price Level 3. Growth & Development 4. Distribution.' },
  { id: 'c1-f18', front: 'J.M. Keynes', back: 'Author of "General Theory" (1936). Revolutionized Macro Economics during the Great Depression.' },
  { id: 'c1-f19', front: 'Kenneth Boulding', back: 'Defined Micro Economics as study of particular firms, particular households, individual prices.' },
  { id: 'c1-f20', front: 'Marginalism', back: 'Key tool of Micro analysis. Refers to change in total variable by one additional unit.' }
];

const ch1_mcqs: Question[] = [
  { id: 'c1-q1', question: 'The term "Micro" is derived from the Greek word ______.', options: ['Makros', 'Mikros', 'Macros', 'Maikros'], correctIndex: 1, explanation: 'Mikros means small.' },
  { id: 'c1-q2', question: 'Micro Economics is also known as ______.', options: ['Income Theory', 'Price Theory', 'Growth Theory', 'Employment Theory'], correctIndex: 1, explanation: 'It deals with price determination.' },
  { id: 'c1-q3', question: 'Who coined the terms Micro and Macro Economics?', options: ['Adam Smith', 'Alfred Marshall', 'Ragnar Frisch', 'Keynes'], correctIndex: 2, explanation: 'Ragnar Frisch in 1933.' },
  { id: 'c1-q4', question: 'Micro Economics uses ______ method.', options: ['Lumping', 'Aggregative', 'Slicing', 'Inclusive'], correctIndex: 2, explanation: 'It slices the economy into small units.' },
  { id: 'c1-q5', question: 'Which is NOT a subject matter of Micro Economics?', options: ['Product Pricing', 'Factor Pricing', 'National Income', 'Economic Welfare'], correctIndex: 2, explanation: 'National Income is a Macro concept.' },
  { id: 'c1-q6', question: 'General Equilibrium Analysis is a feature of ______.', options: ['Micro Economics', 'Macro Economics', 'Both', 'None'], correctIndex: 1, explanation: 'Macro deals with the whole economy.' },
  { id: 'c1-q7', question: '"Principles of Economics" was written by ______.', options: ['Adam Smith', 'Alfred Marshall', 'Ricardo', 'Keynes'], correctIndex: 1, explanation: 'Published in 1890.' },
  { id: 'c1-q8', question: 'Study of a single tree in a forest is an example of ______.', options: ['Micro Economics', 'Macro Economics', 'Intl. Economics', 'Public Finance'], correctIndex: 0, explanation: 'Individual unit study.' },
  { id: 'c1-q9', question: 'Macro Economics involves the study of ______.', options: ['Individual Demand', 'Market Supply', 'Aggregate Demand', 'Particular Price'], correctIndex: 2, explanation: 'Aggregate means Total.' },
  { id: 'c1-q10', question: 'Wages, Rent, Interest and Profit are examples of ______.', options: ['Product Pricing', 'Factor Pricing', 'Social Welfare', 'Inflation'], correctIndex: 1, explanation: 'Rewards for factors of production.' },
  { id: 'c1-q11', question: 'The "Lumping Method" is used in ______.', options: ['Micro Economics', 'Macro Economics', 'Statistics', 'Algebra'], correctIndex: 1, explanation: 'It studies the whole lump (mass) of the economy.' },
  { id: 'c1-q12', question: 'Theory of Economic Welfare is mainly concerned with ______.', options: ['Efficiency in allocation of resources', 'Printing Money', 'Foreign Trade', 'Inflation'], correctIndex: 0, explanation: 'Allocative efficiency.' },
  { id: 'c1-q13', question: 'Which assumption is fundamental to Micro Economics?', options: ['Ceteris Paribus', 'Laissez Faire', 'Full Employment', 'Rationality'], correctIndex: 0, explanation: 'Other things remaining constant.' },
  { id: 'c1-q14', question: 'Macro Economics is ______ oriented.', options: ['Individual', 'Profit', 'Policy', 'Price'], correctIndex: 2, explanation: 'It helps governments formulate economic policies.' },
  { id: 'c1-q15', question: 'Who is known as the Father of Economics?', options: ['Marshall', 'Keynes', 'Adam Smith', 'Robbins'], correctIndex: 2, explanation: 'For his work "Wealth of Nations".' }
];

const ch1_reels: Reel[] = [
  { id: 'c1-r1', title: 'Micro vs Macro', content: 'TREE vs FOREST.\n\nMicro studies the individual Tree.\nMacro studies the entire Forest.', color: getReelColor(0) },
  { id: 'c1-r2', title: '1933: The Year', content: 'Ragnar Frisch (Oslo University) was the FIRST to use the terms "Micro" and "Macro" in economics.', color: getReelColor(1) },
  { id: 'c1-r3', title: 'Ceteris Paribus', content: 'The Golden Rule of Micro:\n"Other Things Being Equal"\n\nWe assume income, population, and tastes do NOT change.', color: getReelColor(2) },
  { id: 'c1-r4', title: 'Slicing Method', content: 'Imagine a loaf of bread.\nMicro economics slices it to study one slice (unit) in detail.\n\nMacro studies the whole loaf!', color: getReelColor(3) },
  { id: 'c1-r5', title: 'Keynesian Revolution', content: 'After the Great Depression (1929), J.M. Keynes published "The General Theory" in 1936, making Macro Economics popular.', color: getReelColor(4) },
  { id: 'c1-r6', title: 'Price Theory', content: 'Micro Economics = Price Theory.\nWhy?\nBecause it explains how prices of Goods and Factors (Wages/Rent) are determined.', color: getReelColor(5) },
  { id: 'c1-r7', title: 'Income Theory', content: 'Macro Economics = Income Theory.\nWhy?\nBecause it focuses on the determination of National Income and Employment levels.', color: getReelColor(6) }
];

// --- CHAPTER 2 DATA: Utility Analysis ---

const ch2_flashcards: Flashcard[] = [
  { id: 'c2-f1', front: 'Utility', back: 'The want satisfying power of a commodity.' },
  { id: 'c2-f2', front: 'Cardinal Measurement', back: 'Assumption that utility can be measured in numbers (1, 2, 3...).' },
  { id: 'c2-f3', front: 'Form Utility', back: 'Created by changing the shape or structure of existing material. (e.g., Wood -> Chair)' },
  { id: 'c2-f4', front: 'Place Utility', back: 'Created by changing the place of utilization. (e.g., Woolen clothes have more utility in Kashmir than Mumbai)' },
  { id: 'c2-f5', front: 'Service Utility', back: 'Arises when personal services are rendered by professionals. (e.g., Doctor, Teacher)' },
  { id: 'c2-f6', front: 'Time Utility', back: 'Created by storing goods and using them at a time of scarcity. (e.g., Blood Bank, Warehousing)' },
  { id: 'c2-f7', front: 'Total Utility (TU)', back: 'Sum of utilities derived from consuming all units of a commodity.' },
  { id: 'c2-f8', front: 'Marginal Utility (MU)', back: 'The additional utility derived from the consumption of an additional unit.' },
  { id: 'c2-f9', front: 'Point of Satiety', back: 'The point where TU is Maximum and MU is Zero. The consumer is fully satisfied.' },
  { id: 'c2-f10', front: 'Law of DMU', back: 'As we consume more units, the additional benefit (MU) keeps diminishing.' },
  { id: 'c2-f11', front: 'Disutility', back: 'Negative utility. Occurs when consumption continues after the point of satiety.' },
  { id: 'c2-f12', front: 'Paradox of Value', back: 'Water has high value-in-use but low value-in-exchange. Diamond has low value-in-use but high value-in-exchange.' },
  { id: 'c2-f13', front: 'Miser (Exception)', back: 'For a miser, every additional coin gives more satisfaction. Violates DMU (but he is irrational).' },
  { id: 'c2-f14', front: 'Money (Exception)', back: 'It is said MU of money never becomes zero. However, rich people have lower MU of money than poor people.' },
  { id: 'c2-f15', front: 'Subjective Concept', back: 'Utility differs from person to person. (e.g., A book has no utility for an illiterate person).' },
  { id: 'c2-f16', front: 'Ethically Neutral', back: 'Utility does not distinguish between good and bad. A knife has utility for a chef and a killer.' },
  { id: 'c2-f17', front: 'Relationship TU/MU', back: 'TU increases at a diminishing rate while MU falls.' },
  { id: 'c2-f18', front: 'Rational Consumer', back: 'Assumption that the consumer wants to maximize satisfaction and acts logically.' },
  { id: 'c2-f19', front: 'Homogeneity', back: 'Assumption that all units consumed are identical in size, shape, color, and taste.' },
  { id: 'c2-f20', front: 'Knowledge Utility', back: 'Utility increases when a consumer acquires knowledge about a product (e.g., Mobile Phone functions).' }
];

const ch2_mcqs: Question[] = [
  { id: 'c2-q1', question: 'When Total Utility is maximum, Marginal Utility is ______.', options: ['Maximum', 'Minimum', 'Zero', 'Negative'], correctIndex: 2, explanation: 'This is the Point of Satiety.' },
  { id: 'c2-q2', question: 'Utility is a ______ concept.', options: ['Objective', 'Subjective', 'Complex', 'Static'], correctIndex: 1, explanation: 'It changes from person to person.' },
  { id: 'c2-q3', question: 'Blood bank is an example of ______ utility.', options: ['Place', 'Time', 'Form', 'Service'], correctIndex: 1, explanation: 'It stores blood for future use (Time).' },
  { id: 'c2-q4', question: 'The Law of DMU was first proposed by ______.', options: ['Gossen', 'Marshall', 'Slutsky', 'Keynes'], correctIndex: 0, explanation: 'H.H. Gossen (1854). Marshall detailed it later.' },
  { id: 'c2-q5', question: 'After the point of satiety, Marginal Utility becomes ______.', options: ['Positive', 'Zero', 'Negative', 'Infinite'], correctIndex: 2, explanation: 'This leads to dissatisfaction (Disutility).' },
  { id: 'c2-q6', question: 'Which of the following is an exception to the Law of DMU?', options: ['Hobbies', 'Standard Water', 'Bread', 'Fruits'], correctIndex: 0, explanation: 'In hobbies like stamp collecting, more stamps may increase utility.' },
  { id: 'c2-q7', question: 'Utility implies ______.', options: ['Pleasure', 'Usefulness', 'Want satisfying power', 'Profit'], correctIndex: 2, explanation: 'Bitter medicine has utility but no pleasure.' },
  { id: 'c2-q8', question: 'Making furniture from wood is an example of ______ utility.', options: ['Time', 'Place', 'Form', 'Service'], correctIndex: 2, explanation: 'Change in physical form.' },
  { id: 'c2-q9', question: 'Relationship between TU and MU is ______.', options: ['Inverse', 'Direct', 'No relation', 'Interconnected'], correctIndex: 3, explanation: 'TU is summation of MU.' },
  { id: 'c2-q10', question: 'The Law of DMU assumes ______ measurement of utility.', options: ['Ordinal', 'Cardinal', 'Graded', 'None'], correctIndex: 1, explanation: 'Assumes utility can be measured in numbers.' },
  { id: 'c2-q11', question: 'MU of money is ______ for a poor person than a rich person.', options: ['Lower', 'Higher', 'Same', 'Zero'], correctIndex: 1, explanation: 'Poor people value each unit of money more.' },
  { id: 'c2-q12', question: 'Basis of Law of Demand is ______.', options: ['Law of Supply', 'Law of DMU', 'Law of Returns', 'Population'], correctIndex: 1, explanation: 'Consumers pay less for more units because MU falls.' },
  { id: 'c2-q13', question: 'In the case of prestige goods, the law of DMU ______.', options: ['Applies', 'Does not apply', 'Varies', 'Stops'], correctIndex: 1, explanation: 'Usually considered an exception.' },
  { id: 'c2-q14', question: 'When MU is falling but positive, TU ______.', options: ['Decreases', 'Increases', 'Remains Constant', 'Becomes Zero'], correctIndex: 1, explanation: 'TU increases at a diminishing rate.' },
  { id: 'c2-q15', question: 'Continuity in consumption is a ______ of the Law of DMU.', options: ['Exception', 'Assumption', 'Effect', 'Cause'], correctIndex: 1, explanation: 'There should be no time gap between consumption of units.' }
];

const ch2_reels: Reel[] = [
  { id: 'c2-r1', title: 'What is Utility?', content: 'It is NOT usefulness.\nIt is NOT pleasure.\n\nIt is simply the power of a commodity to satisfy a human want.\nExample: Liquor has utility for an addict, but it is harmful.', color: getReelColor(0) },
  { id: 'c2-r2', title: 'TU vs MU', content: 'TU = Sum of all satisfaction.\nMU = Satisfaction from the LAST unit.\n\nImagine eating 5 mangoes.\nTU = Total happiness from 5 mangoes.\nMU = Happiness from just the 5th mango.', color: getReelColor(1) },
  { id: 'c2-r3', title: 'Point of Satiety', content: 'The exact moment you are FULL.\n\nAt this point:\nTotal Utility is MAXIMUM.\nMarginal Utility is ZERO.\n\nIf you eat more, you will vomit (Negative Utility).', color: getReelColor(2) },
  { id: 'c2-r4', title: 'Paradox of Value', content: 'Why is Water cheap but Diamonds expensive?\n\nWater: High Total Utility (Life), Low Marginal Utility (Abundant).\nDiamond: Low Total Utility (Useless), High Marginal Utility (Rare).', color: getReelColor(3) },
  { id: 'c2-r5', title: 'Exception: Money', content: 'Does the Law of DMU apply to money?\n\nIdeally, NO. We always want more money.\nHowever, for a Rich person, losing 100Rs matters less than for a Poor person.', color: getReelColor(4) },
  { id: 'c2-r6', title: 'Form Utility', content: 'Log of Wood = Low Utility.\nChair = High Utility.\n\nThis increase is called FORM Utility.', color: getReelColor(5) }
];

// --- CHAPTER 3A DATA: Demand Analysis ---

const ch3a_flashcards: Flashcard[] = [
  { id: 'c3a-f1', front: 'Demand Definition', back: 'Demand = Desire + Willingness to Buy + Ability to Pay.' },
  { id: 'c3a-f2', front: 'Law of Demand', back: 'Inverse relationship between Price and Quantity Demanded. Higher Price = Lower Demand.' },
  { id: 'c3a-f3', front: 'Individual Demand', back: 'Quantity demanded by a single consumer at a given price during a given period.' },
  { id: 'c3a-f4', front: 'Market Demand', back: 'Sum total of demand of all consumers in the market at a given price.' },
  { id: 'c3a-f5', front: 'Direct Demand', back: 'Demand for goods that satisfy wants directly. (e.g., Food, Clothes). Also called Conventional Demand.' },
  { id: 'c3a-f6', front: 'Derived Demand', back: 'Demand for factors of production used to produce goods. (e.g., Demand for Labour/Cement).' },
  { id: 'c3a-f7', front: 'Joint Demand', back: 'Two goods demanded together to satisfy a single want. (e.g., Car and Petrol, Pen and Ink).' },
  { id: 'c3a-f8', front: 'Composite Demand', back: 'Demand for a commodity that has multiple uses. (e.g., Electricity, Coal, Milk).' },
  { id: 'c3a-f9', front: 'Giffen Goods', back: 'Inferior goods where demand falls even when price falls (Exception to Law of Demand). Discovered by Sir Robert Giffen.' },
  { id: 'c3a-f10', front: 'Veblen Effect', back: 'Prestige goods bought for status. Demand rises with Price. (e.g., Diamonds, Luxury Cars).' },
  { id: 'c3a-f11', front: 'Expansion of Demand', back: 'Rise in demand due to Fall in Price alone. Movement downwards along the curve.' },
  { id: 'c3a-f12', front: 'Contraction of Demand', back: 'Fall in demand due to Rise in Price alone. Movement upwards along the curve.' },
  { id: 'c3a-f13', front: 'Increase in Demand', back: 'Rise in demand due to favorable changes in other factors (Income, Taste) at same price. Shift Right.' },
  { id: 'c3a-f14', front: 'Decrease in Demand', back: 'Fall in demand due to unfavorable changes in other factors at same price. Shift Left.' },
  { id: 'c3a-f15', front: 'Demand Curve Slope', back: 'Slopes Downward from Left to Right (Negative Slope).' },
  { id: 'c3a-f16', front: 'Determinants of Demand', back: 'Price, Income, Population, Tastes & Habits, Price of Substitutes/Complements.' },
  { id: 'c3a-f17', front: 'Complementary Goods', back: 'Goods consumed together. If price of Petrol rises, demand for Cars falls.' },
  { id: 'c3a-f18', front: 'Substitute Goods', back: 'Competing goods. If price of Tea rises, demand for Coffee rises.' },
  { id: 'c3a-f19', front: 'Demonstration Effect', back: 'Tendency to imitate the consumption style of others (Rich/Celebrities).' },
  { id: 'c3a-f20', front: 'Speculation', back: 'If consumers expect price to rise further in future, they buy more now even at high price (Exception).' }
];

const ch3a_mcqs: Question[] = [
  { id: 'c3a-q1', question: 'Demand curve usually slopes ______.', options: ['Upward', 'Downward', 'Vertical', 'Horizontal'], correctIndex: 1, explanation: 'From left to right due to inverse relationship.' },
  { id: 'c3a-q2', question: 'Giffen goods are ______ goods.', options: ['Luxury', 'Inferior', 'Normal', 'Prestige'], correctIndex: 1, explanation: 'Low quality goods like cheap bread.' },
  { id: 'c3a-q3', question: 'Demand for salt is ______.', options: ['Elastic', 'Inelastic', 'Composite', 'Direct'], correctIndex: 3, explanation: 'Direct demand (Consumer good). Also inelastic.' },
  { id: 'c3a-q4', question: 'Electricity has ______ demand.', options: ['Joint', 'Composite', 'Derived', 'Competitive'], correctIndex: 1, explanation: 'It is used for lighting, cooling, heating, etc. (Multiple uses).' },
  { id: 'c3a-q5', question: 'When price falls and demand rises, it is called ______.', options: ['Increase', 'Expansion', 'Decrease', 'Contraction'], correctIndex: 1, explanation: 'Variation due to price is Expansion.' },
  { id: 'c3a-q6', question: 'Ink and Pen have ______ demand.', options: ['Joint', 'Composite', 'Competitive', 'Indirect'], correctIndex: 0, explanation: 'They are needed together.' },
  { id: 'c3a-q7', question: 'Market demand is the sum of ______.', options: ['Individual Supply', 'Individual Demands', 'Prices', 'Utility'], correctIndex: 1, explanation: 'Horizontal summation of individual demand schedules.' },
  { id: 'c3a-q8', question: 'Sir Robert Giffen observed the paradox in ______.', options: ['India', 'England', 'USA', 'Germany'], correctIndex: 1, explanation: 'Related to bread and meat consumption in Victorian England.' },
  { id: 'c3a-q9', question: 'A shift in the demand curve to the right indicates ______.', options: ['Decrease', 'Contraction', 'Increase', 'Expansion'], correctIndex: 2, explanation: 'Increase in demand due to non-price factors.' },
  { id: 'c3a-q10', question: 'Demand for factors of production is ______.', options: ['Direct', 'Derived', 'Composite', 'Joint'], correctIndex: 1, explanation: 'Derived from the demand for the final product.' },
  { id: 'c3a-q11', question: 'Tea and Coffee are ______ goods.', options: ['Complementary', 'Substitute', 'Giffen', 'Prestige'], correctIndex: 1, explanation: 'Can use one in place of another.' },
  { id: 'c3a-q12', question: 'Which is NOT a determinant of demand?', options: ['Price', 'Income', 'Population', 'Cost of Production'], correctIndex: 3, explanation: 'Cost of Production determines Supply, not Demand.' },
  { id: 'c3a-q13', question: 'The relationship between Price and Demand is ______.', options: ['Direct', 'Inverse', 'Linear', 'Parallel'], correctIndex: 1, explanation: 'Opposite directions.' },
  { id: 'c3a-q14', question: 'Symbolically, Functional relationship of demand is ______.', options: ['Dx = f(Px)', 'Sx = f(Px)', 'Dx = f(y)', 'None'], correctIndex: 0, explanation: 'Demand for x is function of Price of x.' },
  { id: 'c3a-q15', question: 'In case of Giffen goods, the demand curve slopes ______.', options: ['Upward', 'Downward', 'Vertical', 'Backward'], correctIndex: 0, explanation: 'Positive relationship (Exception to law).' }
];

const ch3a_reels: Reel[] = [
  { id: 'c3a-r1', title: 'Formula of Demand', content: 'Demand is NOT just "Want".\n\nDemand = Desire + Willingness to Spend + Ability to Pay.\n\nExample: A beggar desires a car but has no ability. That is NOT demand.', color: getReelColor(0) },
  { id: 'c3a-r2', title: 'Expansion vs Increase', content: 'Expansion:\nPrice FALLS -> Demand RISES.\n(Same Curve)\n\nIncrease:\nIncome RISES -> Demand RISES.\n(New Curve shifts Right).', color: getReelColor(1) },
  { id: 'c3a-r3', title: 'Giffen Goods', content: 'Strange but true!\nWhen bread price fell in England, people bought LESS bread and bought Meat instead.\n\nWhy? Because their "Real Income" increased.\nThis is the Giffen Paradox.', color: getReelColor(2) },
  { id: 'c3a-r4', title: 'Derived Demand', content: 'We demand Bricks not to eat them, but to build a House.\n\nDemand for House = Direct.\nDemand for Bricks = Derived (Indirect).', color: getReelColor(3) },
  { id: 'c3a-r5', title: 'Why Downward Slope?', content: 'Why does Demand Curve slope down?\n1. Law of DMU (Less satisfaction = Less price)\n2. Income Effect\n3. Substitution Effect\n4. New Consumers.', color: getReelColor(4) }
];

// --- CHAPTER 3B DATA: Elasticity ---

const ch3b_flashcards: Flashcard[] = [
  { id: 'c3b-f1', front: 'Elasticity of Demand', back: 'Degree of responsiveness of Quantity Demanded to a change in Price or other factors.' },
  { id: 'c3b-f2', front: 'Price Elasticity (Ed)', back: '% Change in Qty Demanded / % Change in Price.' },
  { id: 'c3b-f3', front: 'Perfectly Elastic (Ed = ∞)', back: 'Slight change in price leads to infinite change in demand. Curve: Horizontal line parallel to X-axis.' },
  { id: 'c3b-f4', front: 'Perfectly Inelastic (Ed = 0)', back: 'No change in demand irrespective of price change. Curve: Vertical line parallel to Y-axis.' },
  { id: 'c3b-f5', front: 'Unitary Elastic (Ed = 1)', back: '% Change in Demand = % Change in Price. Curve: Rectangular Hyperbola.' },
  { id: 'c3b-f6', front: 'Relatively Elastic (Ed > 1)', back: '% Change in Demand > % Change in Price. Curve: Flatter.' },
  { id: 'c3b-f7', front: 'Relatively Inelastic (Ed < 1)', back: '% Change in Demand < % Change in Price. Curve: Steeper.' },
  { id: 'c3b-f8', front: 'Total Outlay Method', back: 'Measured by comparing Total Expenditure (Price x Qty) before and after price change. (Marshall).' },
  { id: 'c3b-f9', front: 'Point Method', back: 'Geometric method used to measure elasticity at a specific point on the curve. Lower Segment / Upper Segment.' },
  { id: 'c3b-f10', front: 'Income Elasticity', back: 'Responsiveness of demand to change in Income.' },
  { id: 'c3b-f11', front: 'Cross Elasticity', back: 'Responsiveness of demand for Good A to change in Price of Good B (Substitute/Complement).' },
  { id: 'c3b-f12', front: 'Determinants of Elasticity', back: 'Nature of commodity, Availability of substitutes, Durability, Urgency.' },
  { id: 'c3b-f13', front: 'Habitual Goods', back: 'Have Inelastic demand (e.g., Tobacco for smoker).' },
  { id: 'c3b-f14', front: 'Durable Goods', back: 'Have Elastic demand (e.g., TV, Car - purchase can be postponed).' },
  { id: 'c3b-f15', front: 'Necessities', back: 'Have Inelastic demand (e.g., Salt, Medicine).' }
];

const ch3b_mcqs: Question[] = [
  { id: 'c3b-q1', question: 'Ed = 0 indicates ______ elasticity.', options: ['Perfectly Elastic', 'Perfectly Inelastic', 'Unitary', 'Relatively Elastic'], correctIndex: 1, explanation: 'Quantity does not change at all.' },
  { id: 'c3b-q2', question: 'Demand curve is a rectangular hyperbola when elasticity is ______.', options: ['Unitary', 'Zero', 'Infinite', 'Less than 1'], correctIndex: 0, explanation: 'Area under curve (Expenditure) remains constant.' },
  { id: 'c3b-q3', question: 'Demand for salt is ______.', options: ['Elastic', 'Inelastic', 'Infinite', 'Unitary'], correctIndex: 1, explanation: 'It is a necessity with no close substitutes.' },
  { id: 'c3b-q4', question: 'If % Change in Q > % Change in P, demand is ______.', options: ['Inelastic', 'Elastic', 'Unitary', 'Perfectly Inelastic'], correctIndex: 1, explanation: 'Responsiveness is high (Ed > 1).' },
  { id: 'c3b-q5', question: 'Total Expenditure Method was developed by ______.', options: ['Keynes', 'Marshall', 'Adam Smith', 'Giffen'], correctIndex: 1, explanation: 'Also called Total Outlay method.' },
  { id: 'c3b-q6', question: 'Point method formula is ______.', options: ['Upper/Lower', 'Lower/Upper', 'Price/Qty', 'Qty/Price'], correctIndex: 1, explanation: 'L / U (Lower Segment divided by Upper Segment).' },
  { id: 'c3b-q7', question: 'Demand for medicines is ______.', options: ['Elastic', 'Inelastic', 'Perfectly Elastic', 'Unitary'], correctIndex: 1, explanation: 'Urgent need, cannot postpone.' },
  { id: 'c3b-q8', question: 'Cross elasticity is positive for ______ goods.', options: ['Substitute', 'Complementary', 'Unrelated', 'Giffen'], correctIndex: 0, explanation: 'Tea price up -> Coffee demand up.' },
  { id: 'c3b-q9', question: 'Cross elasticity is negative for ______ goods.', options: ['Substitute', 'Complementary', 'Unrelated', 'Giffen'], correctIndex: 1, explanation: 'Car price up -> Petrol demand down.' },
  { id: 'c3b-q10', question: 'Perfectly elastic demand curve is ______.', options: ['Vertical', 'Horizontal', 'Downward', 'Upward'], correctIndex: 1, explanation: 'Parallel to X-axis.' }
];

const ch3b_reels: Reel[] = [
  { id: 'c3b-r1', title: 'Ed > 1 vs Ed < 1', content: 'Ed > 1 (Elastic): Price falls 10%, Sales jump 50%! (Luxury cars).\n\nEd < 1 (Inelastic): Price rises 50%, Sales drop only 1%. (Salt/Meds).', color: getReelColor(0) },
  { id: 'c3b-r2', title: 'Rectangular Hyperbola', content: 'Special shape for Unitary Elasticity (Ed=1).\n\nWhy?\nBecause Total Expenditure remains exactly the SAME irrespective of price change.', color: getReelColor(1) },
  { id: 'c3b-r3', title: 'Availability of Substitutes', content: 'Coke has Pepsi.\nIf Coke raises price, people switch.\nTherefore, Coke is ELASTIC.\n\nSalt has no substitute.\nIf Salt price rises, we still buy it.\nTherefore, Salt is INELASTIC.', color: getReelColor(2) },
  { id: 'c3b-r4', title: 'Marshall\'s Methods', content: 'Alfred Marshall gave us 2 ways to measure:\n1. Ratio Method (% method)\n2. Total Outlay Method (Expenditure method).', color: getReelColor(3) }
];


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
            flashcards: ch1_flashcards,
            mcqs: ch1_mcqs,
            reels: ch1_reels
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
*   **Assumptions:** Rationality, Cardinal measurement, Homogeneity, Continuity, Reasonability.
*   **Exceptions:** Hobbies, Miser, Money, Addiction, Power.
*   **Significance:** Useful to consumers, government (taxation), and basis for Law of Demand.`,
            flashcards: ch2_flashcards,
            mcqs: ch2_mcqs,
            reels: ch2_reels
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
            flashcards: ch3a_flashcards,
            mcqs: ch3a_mcqs,
            reels: ch3a_reels
          },
          { 
            id: 'eco-ch3b', 
            title: '3B. Elasticity of Demand', 
            description: 'Responsiveness of demand. Ed > 1, Ed < 1. Learn the 5 types of price elasticity.', 
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
3.  **Point Method:** Geometric method. Lower/Upper segment.

### 3. Factors Influencing Elasticity
*   Nature of commodity (Luxury = Elastic).
*   Substitutes (Available = Elastic).
*   Uses (Single = Inelastic, Multi = Elastic).
*   Durability (Durable = Elastic).`,
            flashcards: ch3b_flashcards,
            mcqs: ch3b_mcqs,
            reels: ch3b_reels
          },
          { 
            id: 'eco-ch4', 
            title: '4. Supply Analysis', 
            description: 'Seller behavior. Law of Supply and Cost Concepts.', 
            summary: `**Supply**: Quantity offered for sale.
**Law**: Direct relationship between Price and Supply. P up -> S up.
**Exception**: Labour Supply Curve (Backward bending).`,
            detailedNotes: `### 1. Stock vs Supply
*   **Stock:** Total quantity available with seller. (Potential Supply).
*   **Supply:** Quantity offered for sale at a given price. (Actual Supply).
*   **Relation:** Stock >= Supply.

### 2. Law of Supply
Positive slope. Higher Price -> Higher Supply.
**Exceptions:**
1.  Labour Supply (Backward bending).
2.  Agricultural goods (Dependent on rain).
3.  Perishable goods (Quick sale).
4.  Rare articles.

### 3. Cost Concepts
*   **Total Cost:** TFC + TVC.
*   **Average Cost:** TC / Q.
*   **Marginal Cost:** Cost of additional unit.

### 4. Revenue Concepts
*   **Total Revenue:** P x Q.
*   **Average Revenue:** TR / Q (= Price).
*   **Marginal Revenue:** Addition to TR.`,
            flashcards: [
              { id: 'c4-f1', front: 'Supply', back: 'Quantity of a commodity offered for sale at a given price and time.' },
              { id: 'c4-f2', front: 'Stock', back: 'Total quantity available with the seller. Source of supply.' },
              { id: 'c4-f3', front: 'Law of Supply', back: 'Direct relationship between Price and Supply.' },
              { id: 'c4-f4', front: 'Backward Bending Curve', back: 'Labour Supply Curve. At high wages, leisure is preferred over work.' },
              { id: 'c4-f5', front: 'Total Cost', back: 'Total Fixed Cost (TFC) + Total Variable Cost (TVC).' },
              { id: 'c4-f6', front: 'Average Cost', back: 'Cost per unit of production. TC/Qty.' },
              { id: 'c4-f7', front: 'Marginal Cost', back: 'Net addition to total cost by producing one more unit.' },
              { id: 'c4-f8', front: 'Average Revenue', back: 'Revenue per unit sold. It is same as Price.' },
              { id: 'c4-f9', front: 'Variable Cost', back: 'Expenses that change with production level (Raw material, Power).' },
              { id: 'c4-f10', front: 'Fixed Cost', back: 'Expenses that remain constant (Rent, Permanent wages).' }
            ],
            mcqs: [
              { id: 'c4-q1', question: 'Supply curve slopes ______.', options: ['Downward', 'Upward', 'Vertical', 'Horizontal'], correctIndex: 1, explanation: 'Direct relationship between P and Q.' },
              { id: 'c4-q2', question: 'Labour supply curve is ______.', options: ['Upward', 'Downward', 'Backward Bending', 'Vertical'], correctIndex: 2, explanation: 'After a point, higher wages lead to preference for leisure.' },
              { id: 'c4-q3', question: 'Stock is ______ Supply.', options: ['Less than', 'Greater than or Equal to', 'Equal to', 'None'], correctIndex: 1, explanation: 'Stock is the source.' },
              { id: 'c4-q4', question: 'Cost incurred on fixed factors is ______.', options: ['Variable Cost', 'Fixed Cost', 'Marginal Cost', 'Average Cost'], correctIndex: 1, explanation: 'e.g., Rent.' },
              { id: 'c4-q5', question: 'Net addition to Total Revenue is ______.', options: ['AR', 'MR', 'TC', 'AC'], correctIndex: 1, explanation: 'Marginal Revenue.' }
            ],
            reels: [
              { id: 'c4-r1', title: 'Stock vs Supply', content: 'You have 100 sacks of rice in godown (STOCK).\nYou offer only 10 sacks for sale today (SUPPLY).\n\nSupply cannot exceed Stock!', color: getReelColor(0) },
              { id: 'c4-r2', title: 'Backward Bending Curve', content: 'Work vs Leisure.\nUsually, High Wage = More Work.\n\nBut if you become too rich, you prefer holiday over work.\nSo supply of labour FALLS at very high wages.', color: getReelColor(1) }
            ]
          },
          { 
             id: 'eco-ch5', 
             title: '5. Forms of Market', 
             description: 'Perfect Competition, Monopoly, Oligopoly.', 
             summary: 'Market types based on competition.', 
             detailedNotes: '### 1. Perfect Competition\nHomogeneous products. Price Taker.\n\n### 2. Monopoly\nSingle Seller. Price Maker.\n\n### 3. Oligopoly\nFew Sellers. Interdependence.',
             flashcards: [
               { id: 'c5-f1', front: 'Perfect Competition', back: 'Large number of buyers and sellers. Homogeneous product. Single Price.' },
               { id: 'c5-f2', front: 'Monopoly', back: 'Single seller. No close substitutes. Price Maker.' },
               { id: 'c5-f3', front: 'Oligopoly', back: 'Few sellers. Interdependence. Uncertainty.' },
               { id: 'c5-f4', front: 'Monopolistic Competition', back: 'Many sellers. Product differentiation (Toothpastes, Soaps).' },
               { id: 'c5-f5', front: 'Price Discrimination', back: 'Charging different prices to different consumers for same product (Feature of Monopoly).' }
             ],
             mcqs: [
               { id: 'c5-q1', question: 'Single seller means ______.', options: ['Perfect Comp', 'Monopoly', 'Oligopoly', 'Duopoly'], correctIndex: 1, explanation: 'Mono = Single.' },
               { id: 'c5-q2', question: 'Product differentiation is a feature of ______.', options: ['Perfect Comp', 'Monopoly', 'Monopolistic Comp', 'Oligopoly'], correctIndex: 2, explanation: 'Real world markets like soaps/shampoos.' }
             ],
             reels: [
                { id: 'c5-r1', title: 'Monopoly', content: 'Mono = Single.\nPoly = Seller.\n\nIndian Railways is a classic example of Public Monopoly in India.', color: getReelColor(0) }
             ]
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
