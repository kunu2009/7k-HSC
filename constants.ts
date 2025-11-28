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
  { id: 'c1-f1', front: 'Micro Economics', back: 'Derived from Greek word "Mikros" meaning Small. Studies individual units like a consumer or a firm.' },
  { id: 'c1-f2', front: 'Macro Economics', back: 'Derived from Greek word "Makros" meaning Large. Studies the economy as a whole.' },
  { id: 'c1-f3', front: 'Ragnar Frisch', back: 'Norwegian economist (Oslo University) who coined the terms Micro and Macro in 1933.' },
  { id: 'c1-f4', front: 'Ceteris Paribus', back: 'Latin phrase meaning "Other things remaining constant". The fundamental assumption of Micro Economics.' },
  { id: 'c1-f5', front: 'Slicing Method', back: 'Micro economics splits the economy into small slices for in-depth study of each unit.' },
  { id: 'c1-f6', front: 'Lumping Method', back: 'Macro economics groups units together to study aggregates (National Income, General Price Level).' },
  { id: 'c1-f7', front: 'Adam Smith', back: 'Father of Economics. Classical Economist. Wrote "Wealth of Nations" (1776).' },
  { id: 'c1-f8', front: 'Alfred Marshall', back: 'Neo-Classical Economist. Wrote "Principles of Economics" (1890). Focuses on welfare.' },
  { id: 'c1-f9', front: 'Price Theory', back: 'Another name for Micro Economics because it determines prices of goods and factors.' },
  { id: 'c1-f10', front: 'Income Theory', back: 'Another name for Macro Economics because it studies National Income.' }
];

const ch1_mcqs: Question[] = [
  { id: 'c1-q1', question: 'The term "Micro" is derived from the Greek word ______.', options: ['Makros', 'Mikros', 'Macros', 'Maikros'], correctIndex: 1, explanation: 'Mikros means small.' },
  { id: 'c1-q2', question: 'Micro Economics is also known as ______.', options: ['Income Theory', 'Price Theory', 'Growth Theory', 'Employment Theory'], correctIndex: 1, explanation: 'It deals with price determination.' },
  { id: 'c1-q3', question: 'Who coined the terms Micro and Macro Economics?', options: ['Adam Smith', 'Alfred Marshall', 'Ragnar Frisch', 'Keynes'], correctIndex: 2, explanation: 'Ragnar Frisch in 1933.' },
  { id: 'c1-q4', question: 'Micro Economics uses ______ method.', options: ['Lumping', 'Aggregative', 'Slicing', 'Inclusive'], correctIndex: 2, explanation: 'It slices the economy into small units.' },
  { id: 'c1-q5', question: 'Which is NOT a subject matter of Micro Economics?', options: ['Product Pricing', 'Factor Pricing', 'National Income', 'Economic Welfare'], correctIndex: 2, explanation: 'National Income is a Macro concept.' }
];

const ch1_reels: Reel[] = [
  { id: 'c1-r1', title: 'Micro vs Macro', content: 'TREE vs FOREST.\n\nMicro studies the individual Tree.\nMacro studies the entire Forest.', color: getReelColor(0) },
  { id: 'c1-r2', title: '1933: The Year', content: 'Ragnar Frisch (Oslo University) was the FIRST to use the terms "Micro" and "Macro" in economics.', color: getReelColor(1) },
  { id: 'c1-r3', title: 'Ceteris Paribus', content: 'The Golden Rule of Micro:\n"Other Things Being Equal"\n\nWe assume income, population, and tastes do NOT change.', color: getReelColor(2) },
  { id: 'c1-r4', title: 'Slicing Method', content: 'Imagine a loaf of bread.\nMicro economics slices it to study one slice (unit) in detail.\n\nMacro studies the whole loaf!', color: getReelColor(3) }
];

// --- CHAPTER 2 DATA: Utility Analysis ---
const ch2_flashcards: Flashcard[] = [
  { id: 'c2-f1', front: 'Utility', back: 'The want satisfying power of a commodity.' },
  { id: 'c2-f2', front: 'Cardinal Measurement', back: 'Assumption that utility can be measured in numbers (1, 2, 3...).' },
  { id: 'c2-f3', front: 'Total Utility (TU)', back: 'Sum of utilities derived from consuming all units of a commodity.' },
  { id: 'c2-f4', front: 'Marginal Utility (MU)', back: 'The additional utility derived from the consumption of an additional unit.' },
  { id: 'c2-f5', front: 'Point of Satiety', back: 'The point where TU is Maximum and MU is Zero. The consumer is fully satisfied.' },
  { id: 'c2-f6', front: 'Law of DMU', back: 'As we consume more units, the additional benefit (MU) keeps diminishing.' },
  { id: 'c2-f7', front: 'Paradox of Value', back: 'Water has high value-in-use but low value-in-exchange. Diamond has low value-in-use but high value-in-exchange.' },
  { id: 'c2-f8', front: 'Relationship TU/MU', back: 'TU increases at a diminishing rate while MU falls.' }
];

const ch2_mcqs: Question[] = [
  { id: 'c2-q1', question: 'When Total Utility is maximum, Marginal Utility is ______.', options: ['Maximum', 'Minimum', 'Zero', 'Negative'], correctIndex: 2, explanation: 'This is the Point of Satiety.' },
  { id: 'c2-q2', question: 'Utility is a ______ concept.', options: ['Objective', 'Subjective', 'Complex', 'Static'], correctIndex: 1, explanation: 'It changes from person to person.' },
  { id: 'c2-q3', question: 'Blood bank is an example of ______ utility.', options: ['Place', 'Time', 'Form', 'Service'], correctIndex: 1, explanation: 'It stores blood for future use (Time).' },
  { id: 'c2-q4', question: 'The Law of DMU was first proposed by ______.', options: ['Gossen', 'Marshall', 'Slutsky', 'Keynes'], correctIndex: 0, explanation: 'H.H. Gossen (1854). Marshall detailed it later.' },
  { id: 'c2-q5', question: 'After the point of satiety, Marginal Utility becomes ______.', options: ['Positive', 'Zero', 'Negative', 'Infinite'], correctIndex: 2, explanation: 'This leads to dissatisfaction (Disutility).' }
];

const ch2_reels: Reel[] = [
  { id: 'c2-r1', title: 'What is Utility?', content: 'It is NOT usefulness.\nIt is NOT pleasure.\n\nIt is simply the power of a commodity to satisfy a human want.', color: getReelColor(0) },
  { id: 'c2-r2', title: 'TU vs MU', content: 'TU = Sum of all satisfaction.\nMU = Satisfaction from the LAST unit.\n\nImagine eating 5 mangoes.\nTU = Happiness from 5.\nMU = Happiness from the 5th.', color: getReelColor(1) },
  { id: 'c2-r3', title: 'Point of Satiety', content: 'The exact moment you are FULL.\n\nAt this point:\nTotal Utility is MAXIMUM.\nMarginal Utility is ZERO.', color: getReelColor(2) }
];

// --- CHAPTER 3A DATA: Demand Analysis ---
const ch3a_flashcards: Flashcard[] = [
  { id: 'c3a-f1', front: 'Demand Definition', back: 'Demand = Desire + Willingness to Buy + Ability to Pay.' },
  { id: 'c3a-f2', front: 'Law of Demand', back: 'Inverse relationship between Price and Quantity Demanded. Higher Price = Lower Demand.' },
  { id: 'c3a-f3', front: 'Individual Demand', back: 'Quantity demanded by a single consumer at a given price during a given period.' },
  { id: 'c3a-f4', front: 'Giffen Goods', back: 'Inferior goods where demand falls even when price falls (Exception to Law of Demand). Discovered by Sir Robert Giffen.' },
  { id: 'c3a-f5', front: 'Expansion of Demand', back: 'Rise in demand due to Fall in Price alone. Movement downwards along the curve.' },
  { id: 'c3a-f6', front: 'Increase in Demand', back: 'Rise in demand due to favorable changes in other factors (Income, Taste) at same price. Shift Right.' }
];

const ch3a_mcqs: Question[] = [
  { id: 'c3a-q1', question: 'Demand curve usually slopes ______.', options: ['Upward', 'Downward', 'Vertical', 'Horizontal'], correctIndex: 1, explanation: 'From left to right due to inverse relationship.' },
  { id: 'c3a-q2', question: 'Giffen goods are ______ goods.', options: ['Luxury', 'Inferior', 'Normal', 'Prestige'], correctIndex: 1, explanation: 'Low quality goods like cheap bread.' },
  { id: 'c3a-q3', question: 'When price falls and demand rises, it is called ______.', options: ['Increase', 'Expansion', 'Decrease', 'Contraction'], correctIndex: 1, explanation: 'Variation due to price is Expansion.' },
  { id: 'c3a-q4', question: 'Electricity has ______ demand.', options: ['Joint', 'Composite', 'Derived', 'Competitive'], correctIndex: 1, explanation: 'It is used for lighting, cooling, heating, etc. (Multiple uses).' }
];

const ch3a_reels: Reel[] = [
  { id: 'c3a-r1', title: 'Formula of Demand', content: 'Demand is NOT just "Want".\n\nDemand = Desire + Willingness to Spend + Ability to Pay.', color: getReelColor(0) },
  { id: 'c3a-r2', title: 'Expansion vs Increase', content: 'Expansion:\nPrice FALLS -> Demand RISES.\n(Same Curve)\n\nIncrease:\nIncome RISES -> Demand RISES.\n(New Curve shifts Right).', color: getReelColor(1) },
  { id: 'c3a-r3', title: 'Giffen Goods', content: 'Strange but true!\nWhen bread price fell in England, people bought LESS bread and bought Meat instead.\n\nWhy? Because their "Real Income" increased.', color: getReelColor(2) }
];

// --- CHAPTER 3B DATA: Elasticity ---
const ch3b_flashcards: Flashcard[] = [
  { id: 'c3b-f1', front: 'Price Elasticity (Ed)', back: '% Change in Qty Demanded / % Change in Price.' },
  { id: 'c3b-f2', front: 'Perfectly Elastic (Ed = ∞)', back: 'Slight change in price leads to infinite change in demand. Curve: Horizontal line parallel to X-axis.' },
  { id: 'c3b-f3', front: 'Perfectly Inelastic (Ed = 0)', back: 'No change in demand irrespective of price change. Curve: Vertical line parallel to Y-axis.' },
  { id: 'c3b-f4', front: 'Unitary Elastic (Ed = 1)', back: '% Change in Demand = % Change in Price. Curve: Rectangular Hyperbola.' }
];

const ch3b_mcqs: Question[] = [
  { id: 'c3b-q1', question: 'Ed = 0 indicates ______ elasticity.', options: ['Perfectly Elastic', 'Perfectly Inelastic', 'Unitary', 'Relatively Elastic'], correctIndex: 1, explanation: 'Quantity does not change at all.' },
  { id: 'c3b-q2', question: 'Demand curve is a rectangular hyperbola when elasticity is ______.', options: ['Unitary', 'Zero', 'Infinite', 'Less than 1'], correctIndex: 0, explanation: 'Area under curve (Expenditure) remains constant.' },
  { id: 'c3b-q3', question: 'Demand for salt is ______.', options: ['Elastic', 'Inelastic', 'Infinite', 'Unitary'], correctIndex: 1, explanation: 'It is a necessity with no close substitutes.' }
];

const ch3b_reels: Reel[] = [
  { id: 'c3b-r1', title: 'Ed > 1 vs Ed < 1', content: 'Ed > 1 (Elastic): Price falls 10%, Sales jump 50%! (Luxury cars).\n\nEd < 1 (Inelastic): Price rises 50%, Sales drop only 1%. (Salt/Meds).', color: getReelColor(0) },
  { id: 'c3b-r2', title: 'Rectangular Hyperbola', content: 'Special shape for Unitary Elasticity (Ed=1).\n\nWhy?\nBecause Total Expenditure remains exactly the SAME irrespective of price change.', color: getReelColor(1) }
];

// --- CHAPTER 4 DATA: Supply Analysis ---
const ch4_flashcards: Flashcard[] = [
  { id: 'c4-f1', front: 'Supply', back: 'Quantity of a commodity offered for sale at a given price and time.' },
  { id: 'c4-f2', front: 'Stock', back: 'Total quantity available with the seller. Source of supply.' },
  { id: 'c4-f3', front: 'Law of Supply', back: 'Direct relationship between Price and Supply. (Price Up = Supply Up).' },
  { id: 'c4-f4', front: 'Backward Bending Curve', back: 'Labour Supply Curve. At high wages, leisure is preferred over work.' },
  { id: 'c4-f5', front: 'Marginal Cost', back: 'Net addition to total cost by producing one more unit.' },
  { id: 'c4-f6', front: 'Average Revenue', back: 'Revenue per unit sold. It is same as Price.' }
];

const ch4_mcqs: Question[] = [
  { id: 'c4-q1', question: 'Supply curve slopes ______.', options: ['Downward', 'Upward', 'Vertical', 'Horizontal'], correctIndex: 1, explanation: 'Direct relationship between P and Q.' },
  { id: 'c4-q2', question: 'Labour supply curve is ______.', options: ['Upward', 'Downward', 'Backward Bending', 'Vertical'], correctIndex: 2, explanation: 'After a point, higher wages lead to preference for leisure.' },
  { id: 'c4-q3', question: 'Stock is ______ Supply.', options: ['Less than', 'Greater than or Equal to', 'Equal to', 'None'], correctIndex: 1, explanation: 'Stock is the source (Potential). Supply is actual.' },
  { id: 'c4-q4', question: 'Net addition to Total Revenue is ______.', options: ['AR', 'MR', 'TC', 'AC'], correctIndex: 1, explanation: 'Marginal Revenue.' }
];

const ch4_reels: Reel[] = [
  { id: 'c4-r1', title: 'Stock vs Supply', content: 'Stock: Total amount existing in the warehouse.\nSupply: Amount brought to market for sale at a specific price.\n\nStock >= Supply.', color: getReelColor(0) },
  { id: 'c4-r2', title: 'Labour Supply Curve', content: 'Usually Supply Curve goes UP.\nBut for Labour, it bends BACKWARD.\n\nWhy? Because at very high wages, people prefer Leisure (Holiday) over Work.', color: getReelColor(1) }
];

// --- CHAPTER 5 DATA: Forms of Market ---
const ch5_flashcards: Flashcard[] = [
  { id: 'c5-f1', front: 'Market', back: 'An arrangement where buyers and sellers come in contact directly or indirectly for exchange of goods.' },
  { id: 'c5-f2', front: 'Perfect Competition', back: 'Ideal market with large number of buyers/sellers, homogeneous product, free entry/exit, single price.' },
  { id: 'c5-f3', front: 'Monopoly', back: 'Mono (Single) + Poly (Seller). Market with a single seller controlling the entire supply.' },
  { id: 'c5-f4', front: 'Oligopoly', back: 'Oligo (Few) + Poly (Seller). Market with a few firms (e.g., Mobile Service Providers).' },
  { id: 'c5-f5', front: 'Monopolistic Competition', back: 'Real world market. Many sellers selling differentiated products (e.g., Soaps, Toothpaste).' },
  { id: 'c5-f6', front: 'Price Maker', back: 'Feature of Monopoly. The monopolist decides the price.' },
  { id: 'c5-f7', front: 'Price Taker', back: 'Feature of Perfect Competition. Firm accepts price determined by market demand and supply.' }
];

const ch5_mcqs: Question[] = [
  { id: 'c5-q1', question: 'In Perfect Competition, products are ______.', options: ['Heterogeneous', 'Homogeneous', 'Differentiated', 'Unique'], correctIndex: 1, explanation: 'Identical in size, shape, color, etc.' },
  { id: 'c5-q2', question: 'Single seller is a feature of ______.', options: ['Oligopoly', 'Monopoly', 'Perfect Competition', 'Monopolistic'], correctIndex: 1, explanation: 'He controls the entire market supply.' },
  { id: 'c5-q3', question: 'Product differentiation is a feature of ______.', options: ['Perfect Competition', 'Monopoly', 'Monopolistic Competition', 'Oligopoly'], correctIndex: 2, explanation: 'Goods are substitutes but not identical (Brand, Packing).' },
  { id: 'c5-q4', question: 'OPEC is an example of ______.', options: ['Monopoly', 'Perfect Competition', 'Oligopoly', 'Monopolistic'], correctIndex: 2, explanation: 'Cartel formation by few sellers.' }
];

const ch5_reels: Reel[] = [
  { id: 'c5-r1', title: 'Perfect Competition', content: 'An Ideal Myth.\n- Infinite Buyers/Sellers\n- Identical Products\n- Same Price everywhere.\n\nDoes it exist? Hardly. Maybe agricultural markets come close.', color: getReelColor(3) },
  { id: 'c5-r2', title: 'Monopoly Power', content: 'Single Seller.\nNo close substitutes.\nBarriers to entry.\n\nExample: Indian Railways (Statutory Monopoly).', color: getReelColor(4) },
  { id: 'c5-r3', title: 'Oligopoly', content: 'The War of the Few.\nOnly a few big players.\n\nExample: Telecom in India (Jio, Airtel, Vi).', color: getReelColor(5) }
];

// --- CHAPTER 6 DATA: Index Numbers ---
const ch6_flashcards: Flashcard[] = [
  { id: 'c6-f1', front: 'Index Number', back: 'Statistical tool to measure changes in an economic variable over time.' },
  { id: 'c6-f2', front: 'Base Year', back: 'The year against which comparisons are made. Denoted by suffix "0".' },
  { id: 'c6-f3', front: 'Current Year', back: 'The year for which index number is calculated. Denoted by suffix "1".' },
  { id: 'c6-f4', front: 'Laspeyre\'s Index', back: 'Uses Base Year Quantity (q0) as weight.' },
  { id: 'c6-f5', front: 'Paasche\'s Index', back: 'Uses Current Year Quantity (q1) as weight.' },
  { id: 'c6-f6', front: 'Fisher\'s Ideal Index', back: 'Geometric mean of Laspeyre\'s and Paasche\'s index numbers.' }
];

const ch6_mcqs: Question[] = [
  { id: 'c6-q1', question: 'Index number is a ______ average.', options: ['Simple', 'Weighted', 'Specialized', 'General'], correctIndex: 2, explanation: 'It is a specialized statistical tool.' },
  { id: 'c6-q2', question: 'Laspeyre\'s method uses ______ quantities as weights.', options: ['Current Year', 'Base Year', 'Both', 'None'], correctIndex: 1, explanation: 'Uses q0.' },
  { id: 'c6-q3', question: 'Base year should be ______.', options: ['War year', 'Famine year', 'Normal year', 'Current year'], correctIndex: 2, explanation: 'Free from natural calamities and economic fluctuations.' },
  { id: 'c6-q4', question: 'Index numbers are known as ______ of economic activity.', options: ['Barometers', 'Thermometers', 'Speedometers', 'Rulers'], correctIndex: 0, explanation: 'They indicate the trend or pressure of economy.' }
];

const ch6_reels: Reel[] = [
  { id: 'c6-r1', title: 'Economic Barometers', content: 'Just as a barometer measures atmospheric pressure, Index Numbers measure Economic Pressure (Inflation, Prices, Production).', color: getReelColor(0) },
  { id: 'c6-r2', title: 'Base Year vs Current Year', content: 'Base Year (0): The past normal year.\nCurrent Year (1): Today.\n\nWe compare Price of 1 (p1) with Price of 0 (p0).', color: getReelColor(1) },
  { id: 'c6-r3', title: 'Laspeyre vs Paasche', content: 'Laspeyre loves the PAST (Base Year Quantities).\nPaasche loves the PRESENT (Current Year Quantities).', color: getReelColor(2) }
];

// --- CHAPTER 7 DATA: National Income ---
const ch7_flashcards: Flashcard[] = [
  { id: 'c7-f1', front: 'National Income', back: 'Total money value of all final goods and services produced in a country during a year.' },
  { id: 'c7-f2', front: 'GDP', back: 'Gross Domestic Product. Market value of goods produced WITHIN the domestic territory.' },
  { id: 'c7-f3', front: 'GNP', back: 'Gross National Product. GDP + Net Factor Income from Abroad (X - M).' },
  { id: 'c7-f4', front: 'Transfer Payments', back: 'Unilateral payments like pension, scholarship, gifts. Excluded from NI.' },
  { id: 'c7-f5', front: 'Double Counting', back: 'Counting the value of a commodity more than once. Must be avoided.' },
  { id: 'c7-f6', front: 'Circular Flow', back: 'Continuous flow of production, income, and expenditure in an economy.' }
];

const ch7_mcqs: Question[] = [
  { id: 'c7-q1', question: 'National Income Committee was established in ______.', options: ['1947', '1949', '1950', '1955'], correctIndex: 1, explanation: 'Chaired by Prof. P.C. Mahalanobis.' },
  { id: 'c7-q2', question: 'GDP + Net Factor Income from Abroad = ______.', options: ['NNP', 'NDP', 'GNP', 'PI'], correctIndex: 2, explanation: 'Gross National Product includes foreign income.' },
  { id: 'c7-q3', question: 'Which is NOT included in National Income?', options: ['Wages', 'Profits', 'Transfer Payments', 'Rent'], correctIndex: 2, explanation: 'No production happens in return for transfer payments.' },
  { id: 'c7-q4', question: 'Product Method is also known as ______.', options: ['Income Method', 'Output Method', 'Expenditure Method', 'Factor Method'], correctIndex: 1, explanation: 'Inventory method.' }
];

const ch7_reels: Reel[] = [
  { id: 'c7-r1', title: 'GDP vs GNP', content: 'GDP = Made in India (Within borders).\nGNP = Made by Indians (Includes income from abroad).\n\nIf SRK earns in Dubai, it is in India\'s GNP but UAE\'s GDP.', color: getReelColor(3) },
  { id: 'c7-r2', title: 'Circular Flow', content: 'Firms pay Households (Wages).\nHouseholds pay Firms (Consumption).\n\nMoney keeps rotating in a circle. That is the economy!', color: getReelColor(4) },
  { id: 'c7-r3', title: 'Avoid Double Counting', content: 'Wheat -> Flour -> Bread.\n\nDon\'t count value of Wheat AND Flour AND Bread.\nOnly count the FINAL Bread value.\nOr use Value Added method.', color: getReelColor(5) }
];

// --- CHAPTER 8 DATA: Public Finance in India ---
const ch8_flashcards: Flashcard[] = [
  { id: 'c8-f1', front: 'Public Finance', back: 'Study of income and expenditure of the Government (State).' },
  { id: 'c8-f2', front: 'Public Revenue', back: 'Aggregate collection of income by the government (Taxes + Non-Tax).' },
  { id: 'c8-f3', front: 'Direct Tax', back: 'Incidence and Impact fall on the same person. (e.g., Income Tax).' },
  { id: 'c8-f4', front: 'Indirect Tax', back: 'Incidence and Impact fall on different persons. Burden can be shifted. (e.g., GST).' },
  { id: 'c8-f5', front: 'Deficit Budget', back: 'Govt Expenditure > Govt Receipts. Good for developing countries.' },
  { id: 'c8-f6', front: 'Surplus Budget', back: 'Govt Receipts > Govt Expenditure. Used to control inflation.' }
];

const ch8_mcqs: Question[] = [
  { id: 'c8-q1', question: 'Income Tax is a ______.', options: ['Indirect Tax', 'Direct Tax', 'Fee', 'Fine'], correctIndex: 1, explanation: 'Burden cannot be shifted.' },
  { id: 'c8-q2', question: 'GST came into effect in India on ______.', options: ['1st July 2017', '1st April 2016', '1st Jan 2018', '1st July 2016'], correctIndex: 0, explanation: 'Goods and Services Tax.' },
  { id: 'c8-q3', question: 'During depression, ______ budget is preferable.', options: ['Surplus', 'Balanced', 'Deficit', 'Zero'], correctIndex: 2, explanation: 'Govt should spend more to boost demand.' },
  { id: 'c8-q4', question: 'Public finance deals with ______.', options: ['Individual Income', 'Govt Income/Exp', 'Firm Profit', 'Banking'], correctIndex: 1, explanation: 'Study of financial activities of the State.' }
];

const ch8_reels: Reel[] = [
  { id: 'c8-r1', title: 'Public vs Private', content: 'Private Finance: You adjust spending to your income.\nPublic Finance: Govt decides spending first, then finds income (Taxes/Loans).', color: getReelColor(6) },
  { id: 'c8-r2', title: 'Direct vs Indirect Tax', content: 'Direct Tax: Hits YOU directly (Income Tax).\nIndirect Tax: Hits the shopkeeper, but he passes it to YOU (GST).', color: getReelColor(0) },
  { id: 'c8-r3', title: 'The Budget', content: 'Annual Financial Statement (Article 112).\n\nSurplus: Earn > Spend\nDeficit: Spend > Earn (India usually has this).', color: getReelColor(1) }
];

// --- CHAPTER 9 DATA: Money Market & Capital Market ---
const ch9_flashcards: Flashcard[] = [
  { id: 'c9-f1', front: 'Money Market', back: 'Market for lending and borrowing of short-term funds (Less than 1 year).' },
  { id: 'c9-f2', front: 'Capital Market', back: 'Market for lending and borrowing of long-term funds (More than 1 year).' },
  { id: 'c9-f3', front: 'RBI', back: 'Reserve Bank of India. Central Bank. Apex monetary institution. Est 1935.' },
  { id: 'c9-f4', front: 'Commercial Bank', back: 'Accepts deposits and grants loans. Creates credit.' },
  { id: 'c9-f5', front: 'SEBI', back: 'Securities and Exchange Board of India. Regulator of Capital Market.' },
  { id: 'c9-f6', front: 'Call Money Market', back: 'Funds borrowed for very short period (1 day to 14 days).' }
];

const ch9_mcqs: Question[] = [
  { id: 'c9-q1', question: 'RBI was established in ______.', options: ['1947', '1935', '1951', '1991'], correctIndex: 1, explanation: 'April 1, 1935 under RBI Act 1934.' },
  { id: 'c9-q2', question: 'Regulator of Capital Market in India is ______.', options: ['RBI', 'SBI', 'SEBI', 'NABARD'], correctIndex: 2, explanation: 'Est 1988, Statutory power in 1992.' },
  { id: 'c9-q3', question: 'Money market deals in ______ funds.', options: ['Long term', 'Medium term', 'Short term', 'Life long'], correctIndex: 2, explanation: 'Tenure less than 1 year.' },
  { id: 'c9-q4', question: 'Which is an organized sector instrument?', options: ['Indigenous Banker', 'Moneylender', 'Treasury Bills', 'Unregulated NBFIs'], correctIndex: 2, explanation: 'Issued by Govt, regulated by RBI.' }
];

const ch9_reels: Reel[] = [
  { id: 'c9-r1', title: 'Money vs Capital', content: 'Money Market = Short Term (Bills, CPs).\nCapital Market = Long Term (Shares, Debentures).\n\nMoney Market provides Liquidity.\nCapital Market provides Investment.', color: getReelColor(2) },
  { id: 'c9-r2', title: 'The RBI', content: 'Banker to the Banks.\nBanker to the Govt.\nIssuer of Currency.\n\nThe Boss of the Indian Money Market.', color: getReelColor(3) },
  { id: 'c9-r3', title: 'SEBI', content: 'The Watchdog.\nSEBI protects investors in the Stock Market.\nNo scams allowed!', color: getReelColor(4) }
];

// --- CHAPTER 10 DATA: Foreign Trade of India ---
const ch10_flashcards: Flashcard[] = [
  { id: 'c10-f1', front: 'Foreign Trade', back: 'Trade between different countries. Types: Import, Export, Entrepot.' },
  { id: 'c10-f2', front: 'Balance of Trade (BOT)', back: 'Difference between value of Exports and Imports of VISIBLE goods only.' },
  { id: 'c10-f3', front: 'Balance of Payments (BOP)', back: 'Systematic record of all international economic transactions (Goods + Services + Capital).' },
  { id: 'c10-f4', front: 'Entrepot Trade', back: 'Importing goods from one country to Export them to another country (Re-export).' },
  { id: 'c10-f5', front: 'Export', back: 'Selling goods and services to foreign countries.' },
  { id: 'c10-f6', front: 'Import', back: 'Buying goods and services from foreign countries.' }
];

const ch10_mcqs: Question[] = [
  { id: 'c10-q1', question: 'Trade between two countries is called ______.', options: ['Internal Trade', 'External Trade', 'Local Trade', 'State Trade'], correctIndex: 1, explanation: 'International or Foreign trade.' },
  { id: 'c10-q2', question: 'Buying goods from abroad is ______.', options: ['Export', 'Import', 'Entrepot', 'Smuggling'], correctIndex: 1, explanation: 'Inflow of goods, outflow of forex.' },
  { id: 'c10-q3', question: 'Which concept is broader?', options: ['Balance of Trade', 'Balance of Payment', 'Balance of Services', 'None'], correctIndex: 1, explanation: 'BOP includes BOT plus services and capital transfers.' },
  { id: 'c10-q4', question: 'India\'s main import is ______.', options: ['Textiles', 'Petroleum', 'Tea', 'Jute'], correctIndex: 1, explanation: 'Crude Oil (POL).' }
];

const ch10_reels: Reel[] = [
  { id: 'c10-r1', title: 'BOT vs BOP', content: 'BOT = Only Goods (Visible).\nBOP = Goods + Services + Capital (Visible + Invisible).\n\nBOP is the full report card of a country\'s international trade.', color: getReelColor(5) },
  { id: 'c10-r2', title: 'Entrepot Trade', content: 'Importing NOT for using, but for Selling again.\n\nExample: Japan imports raw material, makes electronics, exports to India.', color: getReelColor(6) },
  { id: 'c10-r3', title: 'India\'s Trade', content: 'We Export: Gems, Jewelry, IT Services, Pharma.\nWe Import: Oil, Gold, Electronics.\n\nWe usually have a Trade Deficit (Import > Export).', color: getReelColor(0) }
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
            detailedNotes: '### 1. Micro Economics\nDerived from "Mikros" (Small).\n\n**Features**:\n* Study of Individual Units\n* Price Theory\n* Partial Equilibrium\n* Based on Ceteris Paribus\n* Slicing Method\n\n### 2. Macro Economics\nDerived from "Makros" (Large).\n\n**Features**:\n* Study of Aggregates\n* Income Theory\n* General Equilibrium\n* Lumping Method\n* Policy Oriented\n\n### Distinguish\n| Micro | Macro |\n|---|---|\n| Individual unit | Whole Economy |\n| Slicing Method | Lumping Method |\n| Price Theory | Income Theory |',
            flashcards: ch1_flashcards,
            mcqs: ch1_mcqs,
            reels: ch1_reels
          },
          {
            id: 'eco-2',
            title: '2. Utility Analysis',
            description: 'Consumer behavior, Law of Diminishing Marginal Utility, and relationship between TU and MU.',
            summary: '**Utility**: Want satisfying power.\n**Law of DMU**: As consumption increases, MU decreases.\n**Point of Satiety**: TU Max, MU Zero.',
            detailedNotes: '### Features of Utility\n1. Relative concept (Time/Place)\n2. Subjective concept (Person to person)\n3. Ethically neutral\n\n### Law of DMU\n"Other things being constant, the additional benefit which a person derives from a given increase in his stock of a thing, diminishes with every increase in the stock that he already has." - Alfred Marshall.\n\n**Assumptions**:\n* Rationality\n* Cardinal Measurement\n* Homogeneity\n* Continuity',
            flashcards: ch2_flashcards,
            mcqs: ch2_mcqs,
            reels: ch2_reels
          },
          {
            id: 'eco-3a',
            title: '3A. Demand Analysis',
            description: 'Concept of Demand, Determinants, and the Law of Demand with exceptions.',
            summary: 'Demand = Desire + Ability + Willingness.\n**Law**: Inverse relation between Price and Qty.\n**Exceptions**: Giffen Goods, Prestige Goods, Speculation.',
            detailedNotes: '### Types of Demand\n1. **Direct**: Consumer goods (Food).\n2. **Indirect (Derived)**: Factors of production (Labour).\n3. **Complementary (Joint)**: Car & Petrol.\n4. **Composite**: Electricity (Multiple uses).\n5. **Competitive**: Tea vs Coffee.\n\n### Law of Demand\nHigher the Price, Lower the Demand.\nCurve slopes Downward from Left to Right.',
            flashcards: ch3a_flashcards,
            mcqs: ch3a_mcqs,
            reels: ch3a_reels
          },
          {
            id: 'eco-3b',
            title: '3B. Elasticity of Demand',
            description: 'Measurement of responsiveness of demand to changes in price, income, and cross prices.',
            summary: '**Ed**: Elasticity of Demand.\n**Types**: Price, Income, Cross.\n**Price Elasticity**: Perfectly Elastic (∞), Perfectly Inelastic (0), Unitary (1), Relatively Elastic (>1), Relatively Inelastic (<1).',
            detailedNotes: '### Methods of Measurement\n1. **Ratio/Percentage Method**: % Change Q / % Change P.\n2. **Total Expenditure Method**:\n   * Exp rises with Price fall -> Elastic (>1)\n   * Exp constant -> Unitary (=1)\n   * Exp falls with Price fall -> Inelastic (<1)\n3. **Point/Geometric Method**: Lower Segment / Upper Segment.',
            flashcards: ch3b_flashcards,
            mcqs: ch3b_mcqs,
            reels: ch3b_reels
          },
          {
            id: 'eco-4',
            title: '4. Supply Analysis',
            description: 'Production, Cost concepts, Revenue concepts, and Law of Supply.',
            summary: '**Supply**: Offered for sale at a price.\n**Law**: Direct relation between Price and Supply.\n**Stock vs Supply**: Stock is potential, Supply is actual.',
            detailedNotes: '### Concepts of Cost\n* **Total Cost (TC)**: TFC + TVC.\n* **Average Cost (AC)**: TC / Qty.\n* **Marginal Cost (MC)**: Cost of additional unit.\n\n### Law of Supply\nHigher the Price, Higher the Supply.\n**Exception**: Supply of Labour (Backward Bending Curve).',
            flashcards: ch4_flashcards,
            mcqs: ch4_mcqs,
            reels: ch4_reels
          },
          {
            id: 'eco-5',
            title: '5. Forms of Market',
            description: 'Classification of markets based on competition: Perfect, Monopoly, Oligopoly.',
            summary: '**Perfect Competition**: Homogeneous products, single price.\n**Monopoly**: Single seller, price maker.\n**Oligopoly**: Few sellers.',
            detailedNotes: '### Perfect Competition\n* Large number of buyers/sellers.\n* Free entry and exit.\n* Perfect knowledge.\n\n### Monopoly\n* Single seller.\n* No close substitutes.\n* Price discrimination possible.\n\n### Monopolistic Competition\n* Product Differentiation is key feature.\n* Selling costs (Advertisement) are high.',
            flashcards: ch5_flashcards,
            mcqs: ch5_mcqs,
            reels: ch5_reels
          },
          {
            id: 'eco-6',
            title: '6. Index Numbers',
            description: 'Statistical tools to measure economic changes over time.',
            summary: '**Index Number**: Economic Barometer.\n**Types**: Price Index, Quantity Index, Value Index.\n**Methods**: Simple & Weighted.',
            detailedNotes: '### Steps in Construction\n1. Selection of Base Year.\n2. Selection of Commodities.\n3. Selection of Prices.\n4. Choice of Average.\n\n### Formulas\n* **Laspeyre**: Uses Base Year Qty (q0).\n* **Paasche**: Uses Current Year Qty (q1).',
            flashcards: ch6_flashcards,
            mcqs: ch6_mcqs,
            reels: ch6_reels
          },
          {
            id: 'eco-7',
            title: '7. National Income',
            description: 'Measurement of aggregate economic activity of the nation.',
            summary: '**NI**: Net National Product at Factor Cost.\n**Methods**: Output, Income, Expenditure.\n**GDP vs GNP**: Domestic vs National.',
            detailedNotes: '### Circular Flow of Income\nTwo sector model: Households & Firms.\nFlow of Goods/Services (Real Flow) and Money (Money Flow).\n\n### Difficulties in Measurement\n* **Theoretical**: Transfer payments, unpaid services (housewife), illegal income.\n* **Practical**: Double counting, lack of data.',
            flashcards: ch7_flashcards,
            mcqs: ch7_mcqs,
            reels: ch7_reels
          },
          {
            id: 'eco-8',
            title: '8. Public Finance in India',
            description: 'Role of Government in the economy, Budget, Taxes.',
            summary: '**Public Finance**: Govt Income & Exp.\n**Revenue**: Tax (Direct/Indirect) & Non-Tax.\n**Budget**: Balanced, Surplus, Deficit.',
            detailedNotes: '### Classification of Public Expenditure\n* Revenue Expenditure (Salaries)\n* Capital Expenditure (Dams, Roads)\n\n### Public Debt\n* Internal (Within country)\n* External (World Bank, IMF)\n\n### Fiscal Policy\nGovt policy regarding Taxation and Expenditure.',
            flashcards: ch8_flashcards,
            mcqs: ch8_mcqs,
            reels: ch8_reels
          },
          {
            id: 'eco-9',
            title: '9. Money & Capital Market',
            description: 'Financial system of India: RBI, Banks, Stock Markets.',
            summary: '**Money Market**: Short term funds.\n**Capital Market**: Long term funds.\n**RBI**: Central Bank.\n**SEBI**: Regulator.',
            detailedNotes: '### Reserve Bank of India (RBI)\nFunctions:\n1. Issue of Currency.\n2. Banker to Govt.\n3. Banker\'s Bank.\n4. Custodian of Forex.\n5. Controller of Credit.\n\n### Capital Market Instruments\n* Equity Shares\n* Debentures\n* Bonds\n* Govt Securities (G-Secs)',
            flashcards: ch9_flashcards,
            mcqs: ch9_mcqs,
            reels: ch9_reels
          },
          {
            id: 'eco-10',
            title: '10. Foreign Trade of India',
            description: 'Trends in Imports and Exports, Balance of Payments.',
            summary: '**Trade**: Import, Export.\n**BOT**: Visible goods only.\n**BOP**: All transactions.\n**Trend**: India exports Engineering goods, Imports Oil.',
            detailedNotes: '### Role of Foreign Trade\n* Earns Foreign Exchange.\n* Encourages Investment.\n* Division of Labour.\n\n### Recent Trends\n* Increase in volume.\n* Change in composition (More manufactured goods, less agriculture).\n* Diversification of direction (US, UAE, China are top partners).',
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