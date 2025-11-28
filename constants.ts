

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
  { id: 'c1-f20', front: 'Feature: Policy Oriented', back: 'Macro economics is a policy-oriented science. Suggests policies for growth.' },
  { id: 'c1-f21', front: 'Feature: General Price Level', back: 'Macro studies the average of all prices and inflation/deflation.' },
  { id: 'c1-f22', front: 'Feature: Interdependence', back: 'Macro variables are interdependent (e.g. Investment depends on Income).' },
  { id: 'c1-f23', front: 'Importance: Price Determination', back: 'Micro explains how prices are set in free market.' },
  { id: 'c1-f24', front: 'Importance: Free Market Economy', back: 'Micro helps understand economy with no govt intervention.' },
  { id: 'c1-f25', front: 'Importance: Foreign Trade', back: 'Micro explains gains from trade and exchange rates.' },
  { id: 'c1-f26', front: 'Importance: Economic Model Building', back: 'Micro creates simple models to understand complex reality.' },
  { id: 'c1-f27', front: 'Importance: Business Decisions', back: 'Helps businessmen in pricing and cost estimation.' },
  { id: 'c1-f28', front: 'Importance: Govt Useful', back: 'Micro helps govt in tax policy and public expenditure.' },
  { id: 'c1-f29', front: 'Importance: Macro - Economy Functioning', back: 'Macro helps understand how the whole economic system works.' },
  { id: 'c1-f30', front: 'Importance: Macro - Fluctuations', back: 'Helps analyze causes of booms and depressions.' },
  { id: 'c1-f31', front: 'Importance: Macro - National Income', back: 'Study of Macro is essential for National Income measurement.' },
  { id: 'c1-f32', front: 'Importance: Macro - Development', back: 'Helps understanding problems of developing countries.' },
  { id: 'c1-f33', front: 'Lord Keynes', back: 'John Maynard Keynes. Author of "General Theory of Employment, Interest and Money" (1936). Father of Modern Macro.' },
  { id: 'c1-f34', front: 'Historical Review: Micro', back: 'Started with Classical Economists (Smith, Ricardo). Popularized by Neo-Classical (Marshall).' },
  { id: 'c1-f35', front: 'Historical Review: Macro', back: 'Existed before 1930s but became popular after Great Depression (1929) due to Keynes.' },
  { id: 'c1-f36', front: 'Microscopic View', back: 'AP Lerner said Micro Economics provides a "Microscopic view" of the economy.' },
  { id: 'c1-f37', front: 'Efficiency in Production', back: 'Producing maximum goods with minimum resources.' },
  { id: 'c1-f38', front: 'Efficiency in Consumption', back: 'Distributing goods to maximize total satisfaction of society.' },
  { id: 'c1-f39', front: 'Overall Efficiency', back: 'Producing those goods which are most desired by people.' },
  { id: 'c1-f40', front: 'Post-Keynesian Macro', back: 'Hicks, Hansen, Samuelson contributed to Macro after Keynes.' }
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
  { id: 'c1-q10', question: 'Study of "General Price Level" falls under ______.', options: ['Micro', 'Macro', 'Public Finance', 'Trade'], correctIndex: 1, explanation: 'Inflation and Deflation are macro problems.' },
  { id: 'c1-q11', question: 'Micro economics is based on ______ assumption.', options: ['Laissez Faire', 'Ceteris Paribus', 'Full Employment', 'Planned Economy'], correctIndex: 1, explanation: 'Other things being equal.' },
  { id: 'c1-q12', question: 'Keynes book "General Theory" was published in ______.', options: ['1930', '1933', '1936', '1940'], correctIndex: 2, explanation: 'Revolutionized Macro Economics.' },
  { id: 'c1-q13', question: 'Who is the father of Economics?', options: ['Marshall', 'Keynes', 'Adam Smith', 'Robbins'], correctIndex: 2, explanation: 'Adam Smith (Wealth of Nations).' },
  { id: 'c1-q14', question: 'Macro economics is ______ oriented.', options: ['Profit', 'Individual', 'Policy', 'Price'], correctIndex: 2, explanation: 'It helps government formulate economic policies.' },
  { id: 'c1-q15', question: 'Factor pricing does NOT include ______.', options: ['Rent', 'Price', 'Wages', 'Profit'], correctIndex: 1, explanation: 'Price refers to Product Price. Rent, Wages, Profit are factor rewards.' },
  { id: 'c1-q16', question: 'The scope of Micro Economics is ______.', options: ['Unlimited', 'Limited', 'Wide', 'Global'], correctIndex: 1, explanation: 'It is limited to individual units.' },
  { id: 'c1-q17', question: 'Welfare economics is a part of ______.', options: ['Micro', 'Macro', 'Statistics', 'History'], correctIndex: 0, explanation: 'Theory of Economic Welfare is part of Micro.' },
  { id: 'c1-q18', question: 'Partial Equilibrium ignores ______.', options: ['Price', 'Demand', 'Interdependence', 'Supply'], correctIndex: 2, explanation: 'It assumes other sectors do not affect the sector under study.' },
  { id: 'c1-q19', question: 'Macro economics studies ______.', options: ['Particular Firm', 'Individual Income', 'Whole Economy', 'Single Product'], correctIndex: 2, explanation: 'Aggregates.' },
  { id: 'c1-q20', question: 'According to AP Lerner, Micro economics is like a ______.', options: ['Telescope', 'Microscope', 'Camera', 'Mirror'], correctIndex: 1, explanation: 'Microscopic view.' },
  { id: 'c1-q21', question: 'Income Theory is another name for ______.', options: ['Micro', 'Macro', 'Agricultural', 'Industrial'], correctIndex: 1, explanation: 'Determines National Income.' },
  { id: 'c1-q22', question: 'Efficiency in consumption means maximizing ______.', options: ['Profit', 'Production', 'Satisfaction', 'Cost'], correctIndex: 2, explanation: 'Society\'s total satisfaction.' },
  { id: 'c1-q23', question: 'Great Depression occurred in ______.', options: ['1929', '1939', '1919', '1949'], correctIndex: 0, explanation: 'Led to rise of Macro Economics.' },
  { id: 'c1-q24', question: 'Which is an example of Macro variable?', options: ['Price of Pen', 'Wage of worker', 'Aggregate Demand', 'Profit of Reliance'], correctIndex: 2, explanation: 'Total demand of the country.' },
  { id: 'c1-q25', question: 'Rent is the reward for ______.', options: ['Labour', 'Capital', 'Land', 'Entrepreneur'], correctIndex: 2, explanation: 'Factor pricing.' },
  { id: 'c1-q26', question: 'Interest is the reward for ______.', options: ['Land', 'Labour', 'Capital', 'Organization'], correctIndex: 2, explanation: 'Factor pricing.' },
  { id: 'c1-q27', question: 'Micro economics deals with allocation of ______.', options: ['Resources', 'Income', 'Population', 'Budget'], correctIndex: 0, explanation: 'Resource allocation efficiency.' },
  { id: 'c1-q28', question: 'Which is NOT a feature of Macro Economics?', options: ['Slicing Method', 'Lumping Method', 'General Equilibrium', 'Income Theory'], correctIndex: 0, explanation: 'Slicing is Micro.' },
  { id: 'c1-q29', question: 'Wealth of Nations was published in ______.', options: ['1890', '1936', '1776', '1933'], correctIndex: 2, explanation: 'By Adam Smith.' },
  { id: 'c1-q30', question: 'Micro economics is a ______ equilibrium analysis.', options: ['General', 'Partial', 'Total', 'Multi'], correctIndex: 1, explanation: 'One variable at a time.' }
];

const ch1_reels: Reel[] = [
  { id: 'c1-r1', title: 'Micro vs Macro', content: 'TREE vs FOREST.\n\nMicro studies the individual Tree (Consumer/Firm).\nMacro studies the entire Forest (Economy/Nation).', color: getReelColor(0) },
  { id: 'c1-r2', title: '1933: The Year', content: 'Ragnar Frisch (Oslo University) was the FIRST to distinguish "Micro" and "Macro" in economics.\nHe won the Nobel Prize later!', color: getReelColor(1) },
  { id: 'c1-r3', title: 'Ceteris Paribus', content: 'The Golden Rule of Micro:\n"Other Things Being Equal"\n\nWe assume income, population, and tastes do NOT change while studying price.', color: getReelColor(2) },
  { id: 'c1-r4', title: 'Slicing Method', content: 'Imagine a loaf of bread.\nMicro economics slices it to study one slice (unit) in detail.\n\nMacro studies the whole loaf at once!', color: getReelColor(3) },
  { id: 'c1-r5', title: 'Worm vs Bird', content: 'Micro = Worm\'s Eye View (Looking close at the ground).\nMacro = Bird\'s Eye View (Looking at the whole landscape from above).', color: getReelColor(4) },
  { id: 'c1-r6', title: 'Price Theory', content: 'Micro Economics = Price Theory.\nWhy?\nBecause it explains how prices of Goods (Product Pricing) and Land/Labor (Factor Pricing) are set.', color: getReelColor(5) },
  { id: 'c1-r7', title: 'Keynesian Revolution', content: 'Before 1930, everyone loved Micro.\nThen came the Great Depression.\nKeynes wrote the "General Theory" in 1936 and saved the world with Macro!', color: getReelColor(6) },
  { id: 'c1-r8', title: 'Lumping Method', content: 'Macro uses LUMPING.\nIt lumps all consumers into "Aggregate Demand".\nIt lumps all producers into "Aggregate Supply".', color: getReelColor(0) },
  { id: 'c1-r9', title: 'General Equilibrium', content: 'Macro says EVERYTHING is connected.\nIf Interest Rate falls -> Investment Rises -> Income Rises -> Demand Rises.\nInterdependence!', color: getReelColor(1) },
  { id: 'c1-r10', title: 'Economic Welfare', content: 'Micro isn\'t just money.\nIt\'s about WELFARE.\nAre we using resources efficiently?\nAre people happy?\nThat\'s efficiency in consumption.', color: getReelColor(2) },
  { id: 'c1-r11', title: 'Fathers of Econ', content: 'Adam Smith: Father of Economics.\nAlfred Marshall: Father of Micro.\nJ.M. Keynes: Father of Macro.', color: getReelColor(3) },
  { id: 'c1-r12', title: 'Business Decisions', content: 'Are you a CEO?\nYou need Micro Economics.\nIt tells you how to set prices and maximize profits.', color: getReelColor(4) }
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
  { id: 'c2-f15', front: 'Assumption: Rationality', back: 'Consumer is normal and tries to maximize satisfaction.' },
  { id: 'c2-f16', front: 'Assumption: Cardinality', back: 'Utility can be counted numerically.' },
  { id: 'c2-f17', front: 'Assumption: Homogeneity', back: 'All units consumed are identical in size, shape, color, taste.' },
  { id: 'c2-f18', front: 'Assumption: Continuity', back: 'Consumption is continuous without any time gap.' },
  { id: 'c2-f19', front: 'Assumption: Reasonability', back: 'Units are of reasonable size (Cup of tea, not Spoon of tea).' },
  { id: 'c2-f20', front: 'Assumption: Constancy', back: 'Income, Taste, Habit of consumer remains constant.' },
  { id: 'c2-f21', front: 'Assumption: Divisibility', back: 'Goods can be divided into small parts.' },
  { id: 'c2-f22', front: 'Exception: Hobbies', back: 'Stamp collecting, coins etc. MU increases with more collection (Violates Homogeneity).' },
  { id: 'c2-f23', front: 'Exception: Miser', back: 'Every additional rupee gives more satisfaction to a miser (Violates Rationality).' },
  { id: 'c2-f24', front: 'Exception: Addictions', back: 'For a drunkard, every extra drink increases intoxication/utility (Violates Rationality).' },
  { id: 'c2-f25', front: 'Exception: Power', back: 'More power creates lust for even more power.' },
  { id: 'c2-f26', front: 'Exception: Money', back: 'MU of money never becomes zero. It is assumed constant.' },
  { id: 'c2-f27', front: 'Criticism: Unrealistic assumptions', back: 'Cardinal measurement, Homogeneity, Continuity are not always possible.' },
  { id: 'c2-f28', front: 'Service Utility', back: 'Utility created by providing services (Doctor, Teacher, Lawyer).' },
  { id: 'c2-f29', front: 'Knowledge Utility', back: 'Utility increases when knowledge about a product increases (Mobile phone functions).' },
  { id: 'c2-f30', front: 'Possession Utility', back: 'Created by transfer of ownership (Seller -> Buyer).' },
  { id: 'c2-f31', front: 'Disutility', back: 'Negative utility. Pain or dissatisfaction.' },
  { id: 'c2-f32', front: 'Value-in-use', back: 'Usefulness of a commodity (Free goods like Air have high value-in-use).' },
  { id: 'c2-f33', front: 'Value-in-exchange', back: 'Price commanded by commodity (Diamonds).' },
  { id: 'c2-f34', front: 'Basis of Demand', back: 'Law of DMU is the basis of Law of Demand.' },
  { id: 'c2-f35', front: 'Intra-marginal units', back: 'Units consumed before the point of satiety (Positive MU).' }
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
  { id: 'c2-q10', question: 'A miser is an exception to Law of DMU because ______.', options: ['His want is satiable', 'His rationality is gone', 'Money gives him power', 'He acts irrationally'], correctIndex: 3, explanation: 'Misers behavior violates the Rationality assumption.' },
  { id: 'c2-q11', question: 'Utility is ethically ______.', options: ['Good', 'Bad', 'Neutral', 'Biased'], correctIndex: 2, explanation: 'It has no moral judgment.' },
  { id: 'c2-q12', question: 'TU curve slopes ______.', options: ['Upward then Downward', 'Downward only', 'Upward only', 'Horizontal'], correctIndex: 0, explanation: 'It rises, reaches max, then falls.' },
  { id: 'c2-q13', question: 'MU curve slopes ______.', options: ['Upward', 'Downward', 'Vertical', 'Horizontal'], correctIndex: 1, explanation: 'It falls from left to right.' },
  { id: 'c2-q14', question: 'When MU is negative, TU ______.', options: ['Increases', 'Decreases', 'Remains Constant', 'Becomes Zero'], correctIndex: 1, explanation: 'Total satisfaction falls.' },
  { id: 'c2-q15', question: 'Transport creates ______ utility.', options: ['Time', 'Place', 'Form', 'Knowledge'], correctIndex: 1, explanation: 'Moving goods from abundance to scarcity area.' },
  { id: 'c2-q16', question: 'Knowledge utility increases when ______.', options: ['We buy a book', 'We read a book', 'We burn a book', 'We sell a book'], correctIndex: 1, explanation: 'Using the product/knowledge.' },
  { id: 'c2-q17', question: 'Utility depends on intensity of ______.', options: ['Income', 'Want', 'Price', 'Supply'], correctIndex: 1, explanation: 'More intense the want, higher the utility.' },
  { id: 'c2-q18', question: 'Gossen\'s First Law is ______.', options: ['Law of Demand', 'Law of Supply', 'Law of DMU', 'Law of Equi-Marginal Utility'], correctIndex: 2, explanation: 'Foundational law.' },
  { id: 'c2-q19', question: 'Utility has no ______ existence.', options: ['Physical', 'Psychological', 'Theoretical', 'Real'], correctIndex: 0, explanation: 'It is an abstract feeling. Can\'t be touched.' },
  { id: 'c2-q20', question: 'Law of DMU is basis for ______.', options: ['Progressive Tax', 'Paradox of Value', 'Law of Demand', 'All of the above'], correctIndex: 3, explanation: 'It explains all these concepts.' }
];

const ch2_reels: Reel[] = [
  { id: 'c2-r1', title: 'What is Utility?', content: 'It is NOT usefulness.\nIt is NOT pleasure.\n\nLiquor has utility for a drunkard (Satisfies want) but causes harm (No Usefulness).\nInjection has utility (Cures) but gives pain (No Pleasure).', color: getReelColor(0) },
  { id: 'c2-r2', title: 'TU vs MU', content: 'TU = Sum of all satisfaction.\nMU = Satisfaction from the LAST unit.\n\nImagine eating 5 mangoes.\nTU = Happiness from 5.\nMU = Happiness from the 5th.', color: getReelColor(1) },
  { id: 'c2-r3', title: 'Point of Satiety', content: 'The exact moment you are FULL.\n\nAt this point:\nTotal Utility is MAXIMUM.\nMarginal Utility is ZERO.\n\nOne more bite? MU becomes Negative (Vomiting!).', color: getReelColor(2) },
  { id: 'c2-r4', title: 'Exceptions to DMU', content: '1. Hobbies (Stamp collection)\n2. Miser (Greed for money)\n3. Addictions (Alcohol)\n4. Power\n\nIn these cases, MORE is BETTER (MU Increases).', color: getReelColor(3) },
  { id: 'c2-r5', title: 'Gossen\'s First Law', content: 'Did you know?\nThe Law of DMU is also called Gossen\'s First Law of Consumption.\nMarshall made it famous, but Gossen found it!', color: getReelColor(4) },
  { id: 'c2-r6', title: 'Paradox of Value', content: 'Why is Water cheap but Diamond expensive?\n\nWater: High Value-in-Use, Low Value-in-Exchange (Abundant).\nDiamond: Low Value-in-Use, High Value-in-Exchange (Scarce).', color: getReelColor(5) },
  { id: 'c2-r7', title: 'Place Utility', content: 'Mangoes in Konkan -> Low Utility.\nTransport to Mumbai -> High Utility.\n\nTransport creates Place Utility!', color: getReelColor(6) },
  { id: 'c2-r8', title: 'Time Utility', content: 'Umbrellas in Summer -> Low Utility.\nStore them till Monsoon -> High Utility.\n\nWarehousing creates Time Utility!', color: getReelColor(0) }
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
  { id: 'c3a-f15', front: 'Decrease in Demand', back: 'Fall in demand due to unfavorable changes in other factors at same price. Curve shifts Left.' },
  { id: 'c3a-f16', front: 'Assumption: Income', back: 'Consumer income must remain constant.' },
  { id: 'c3a-f17', front: 'Assumption: Population', back: 'Size of population must not change.' },
  { id: 'c3a-f18', front: 'Assumption: Tastes', back: 'Habits and fashion should not change.' },
  { id: 'c3a-f19', front: 'Exception: Speculation', back: 'If people expect price to rise further, they buy more even at high price.' },
  { id: 'c3a-f20', front: 'Exception: Ignorance', back: 'Consumer buys more at high price thinking it is better quality.' },
  { id: 'c3a-f21', front: 'Market Demand', back: 'Sum of all individual demands in the market.' },
  { id: 'c3a-f22', front: 'Demand Curve', back: 'Graphical representation of demand schedule.' },
  { id: 'c3a-f23', front: 'Slope of Demand Curve', back: 'Negative slope (Downward from left to right) due to Inverse relationship.' },
  { id: 'c3a-f24', front: 'Determinant: Population', back: 'More population = More demand.' },
  { id: 'c3a-f25', front: 'Determinant: Income', back: 'Rise in income increases purchasing power and demand.' },
  { id: 'c3a-f26', front: 'Determinant: Advertisement', back: 'Effective salesmanship changes consumer preferences.' },
  { id: 'c3a-f27', front: 'Determinant: Taxation', back: 'High taxes reduce purchasing power, decreasing demand.' },
  { id: 'c3a-f28', front: 'Habitual Goods', back: 'Exception. Addiction makes people buy even at higher prices (Liquor).' },
  { id: 'c3a-f29', front: 'Variation in Demand', back: 'Change in Qty Demanded due to PRICE alone. (Expansion/Contraction).' },
  { id: 'c3a-f30', front: 'Change in Demand', back: 'Change in Demand due to OTHER factors. (Increase/Decrease).' }
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
  { id: 'c3a-q10', question: 'Market demand is the sum of ______.', options: ['All Supply', 'Individual Demands', 'State Demands', 'None'], correctIndex: 1, explanation: 'Horizontal summation of individual schedules.' },
  { id: 'c3a-q11', question: 'Which is NOT a determinant of demand?', options: ['Price', 'Income', 'Cost of Production', 'Tastes'], correctIndex: 2, explanation: 'Cost of Production determines Supply, not Demand.' },
  { id: 'c3a-q12', question: 'Pen and Ink have ______ demand.', options: ['Joint', 'Composite', 'Competitive', 'Direct'], correctIndex: 0, explanation: 'Needed together.' },
  { id: 'c3a-q13', question: 'Tea and Coffee have ______ demand.', options: ['Joint', 'Composite', 'Competitive', 'Direct'], correctIndex: 2, explanation: 'Substitutes.' },
  { id: 'c3a-q14', question: 'Prestige goods are associated with ______ effect.', options: ['Giffen', 'Veblen', 'Keynes', 'Marshall'], correctIndex: 1, explanation: 'Thorstein Veblen.' },
  { id: 'c3a-q15', question: 'Contraction of demand is caused by ______.', options: ['Fall in Price', 'Rise in Price', 'Fall in Income', 'Rise in Income'], correctIndex: 1, explanation: 'Upward movement on curve.' }
];

const ch3a_reels: Reel[] = [
  { id: 'c3a-r1', title: 'Formula of Demand', content: 'Demand is NOT just "Want".\n\nDemand = Desire + Willingness to Spend + Ability to Pay.\n\nA beggar desires a car but has no ability -> No Demand.', color: getReelColor(0) },
  { id: 'c3a-r2', title: 'Expansion vs Increase', content: 'Expansion:\nPrice FALLS -> Demand RISES.\n(Same Curve)\n\nIncrease:\nIncome RISES -> Demand RISES.\n(New Curve shifts Right).', color: getReelColor(1) },
  { id: 'c3a-r3', title: 'Giffen Goods', content: 'Strange but true!\nWhen bread price fell in England, people bought LESS bread and bought Meat instead.\n\nWhy? Because their "Real Income" increased. This is the Giffen Paradox.', color: getReelColor(2) },
  { id: 'c3a-r4', title: 'Veblen Effect', content: 'Snob Appeal.\n"I only buy it because it\'s expensive."\n\nRich people buy diamonds BECAUSE they are costly. If diamonds were cheap, they wouldn\'t buy them.', color: getReelColor(3) },
  { id: 'c3a-r5', title: 'Types of Demand', content: 'Direct: Ice Cream (Eat it).\nDerived: Milk (Need it to make Ice Cream).\nComposite: Electricity (Light, Fan, TV).\nJoint: Pen & Ink.', color: getReelColor(4) },
  { id: 'c3a-r6', title: 'Law of Demand', content: 'The Universal Rule:\nPrice UP -> Demand DOWN.\nPrice DOWN -> Demand UP.\n\n(Unless it\'s a Giffen Good!)', color: getReelColor(5) }
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
  { id: 'c3b-f10', front: 'Total Expenditure Method', back: 'Marshall\'s method. Compares Total Outlay (Price x Qty) before and after price change.' },
  { id: 'c3b-f11', front: 'Point Method', back: 'Geometric Method. Ed = Lower Segment / Upper Segment of the demand curve.' },
  { id: 'c3b-f12', front: 'Determinants of Ed', back: 'Nature of good (Necessity/Luxury), Substitutes, Durability, Uses, Price Level.' },
  { id: 'c3b-f13', front: 'Ratio Method', back: 'Proportional method. Formula: (ΔQ / Q) ÷ (ΔP / P).' },
  { id: 'c3b-f14', front: 'Substitute Effect on Ed', back: 'More substitutes = More Elastic. (If Tea price rises, people easily switch to Coffee).' },
  { id: 'c3b-f15', front: 'Durability Effect on Ed', back: 'Durable goods (TV) = Elastic (Can postpone buying). Perishable goods (Milk) = Inelastic.' },
  { id: 'c3b-f16', front: 'Habit Effect on Ed', back: 'Habitual goods (Cigarettes) = Inelastic (Addicted consumers buy at any price).' },
  { id: 'c3b-f17', front: 'Nature of Commodity', back: 'Necessities (Salt) = Inelastic. Luxuries (Car) = Elastic.' },
  { id: 'c3b-f18', front: 'Uses of Good', back: 'Single use = Inelastic. Multi-use (Coal, Electricity) = Elastic.' },
  { id: 'c3b-f19', front: 'Time Period', back: 'Short run = Inelastic (Habits don\'t change). Long run = Elastic.' },
  { id: 'c3b-f20', front: 'Income Level', back: 'Very rich/Very poor = Inelastic. Middle class = Elastic.' },
  { id: 'c3b-f21', front: 'Importance: Monopolist', back: 'If demand is inelastic, monopolist can charge high price (Price Discrimination).' },
  { id: 'c3b-f22', front: 'Importance: Taxation', back: 'Govt imposes tax on inelastic goods (Liquor) to generate revenue.' },
  { id: 'c3b-f23', front: 'Geometric Mean: Ed=1', back: 'At the exact mid-point of a linear demand curve.' },
  { id: 'c3b-f24', front: 'Geometric Mean: Ed=0', back: 'At the X-axis intercept.' },
  { id: 'c3b-f25', front: 'Geometric Mean: Ed=∞', back: 'At the Y-axis intercept.' },
  { id: 'c3b-f26', front: 'Complimentary Goods Cross Ed', back: 'Negative. (Petrol Price Up -> Car Demand Down).' },
  { id: 'c3b-f27', front: 'Substitute Goods Cross Ed', back: 'Positive. (Tea Price Up -> Coffee Demand Up).' },
  { id: 'c3b-f28', front: 'Unrelated Goods Cross Ed', back: 'Zero. (Tea Price -> Car Demand).' },
  { id: 'c3b-f29', front: 'Positive Income Elasticity', back: 'Normal Goods. Income Up -> Demand Up.' },
  { id: 'c3b-f30', front: 'Negative Income Elasticity', back: 'Inferior Goods. Income Up -> Demand Down (Switch to better quality).' }
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
  { id: 'c3b-q10', question: 'Demand for medicines is ______.', options: ['Elastic', 'Inelastic', 'Perfectly Elastic', 'Unitary'], correctIndex: 1, explanation: 'Life saving necessity.' },
  { id: 'c3b-q11', question: 'Elasticity is infinite in ______ market.', options: ['Monopoly', 'Perfect Competition', 'Oligopoly', 'None'], correctIndex: 1, explanation: 'Sellers have no control over price.' },
  { id: 'c3b-q12', question: 'Point method measures elasticity at ______.', options: ['A specific point', 'Whole curve', 'Start point', 'End point'], correctIndex: 0, explanation: 'Used for linear demand curves.' },
  { id: 'c3b-q13', question: 'If % Change in Qty < % Change in Price, it is ______.', options: ['Relatively Elastic', 'Relatively Inelastic', 'Unitary', 'Perfect'], correctIndex: 1, explanation: 'Demand is less responsive.' },
  { id: 'c3b-q14', question: 'Total Outlay Method was given by ______.', options: ['Marshall', 'Keynes', 'Smith', 'Ricardo'], correctIndex: 0, explanation: 'Alfred Marshall.' },
  { id: 'c3b-q15', question: 'Demand for habits is ______.', options: ['Elastic', 'Inelastic', 'Unitary', 'Zero'], correctIndex: 1, explanation: 'Addiction.' }
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
  { id: 'c4-f1', front: 'Total Output', back: 'Sum total of quantity produced by all firms in a given time.' },
  { id: 'c4-f2', front: 'Stock', back: 'Total quantity available for sale at a specific point of time. Stock is the Source of Supply.' },
  { id: 'c4-f3', front: 'Supply', back: 'Part of stock offered for sale at a given price and time. Flow concept.' },
  { id: 'c4-f4', front: 'Supply Equation', back: 'Sx = f(Px). Supply is a function of Price.' },
  { id: 'c4-f5', front: 'Law of Supply', back: 'Direct relationship between Price and Supply. "Higher the price, larger the supply".' },
  { id: 'c4-f6', front: 'Supply Curve Slope', back: 'Upward sloping from left to right (Positive slope).' },
  { id: 'c4-f7', front: 'Assumption: Cost of Production', back: 'Must remain constant. If cost rises, supply decreases even at same price.' },
  { id: 'c4-f8', front: 'Assumption: Technology', back: 'No change in production techniques.' },
  { id: 'c4-f9', front: 'Assumption: Transport', back: 'Transport costs and facilities remain unchanged.' },
  { id: 'c4-f10', front: 'Assumption: Future Prices', back: 'Seller does not expect future price changes.' },
  { id: 'c4-f11', front: 'Exception: Labour Supply', back: 'Backward bending supply curve. After a point, higher wages lead to LESS work (preference for leisure).' },
  { id: 'c4-f12', front: 'Exception: Agricultural Goods', back: 'Supply depends on weather, not just price.' },
  { id: 'c4-f13', front: 'Exception: Perishable Goods', back: 'Seller sells at any price to avoid spoilage (Milk, Fish).' },
  { id: 'c4-f14', front: 'Exception: Rare Goods', back: 'Supply of antique paintings cannot be increased even if price rises.' },
  { id: 'c4-f15', front: 'Expansion of Supply', back: 'Rise in supply due to Rise in Price alone. Upward movement on same curve.' },
  { id: 'c4-f16', front: 'Contraction of Supply', back: 'Fall in supply due to Fall in Price alone. Downward movement on same curve.' },
  { id: 'c4-f17', front: 'Increase in Supply', back: 'Supply rises due to lower cost/better tech (Price constant). Curve shifts Right.' },
  { id: 'c4-f18', front: 'Decrease in Supply', back: 'Supply falls due to higher cost/bad weather (Price constant). Curve shifts Left.' },
  { id: 'c4-f19', front: 'Total Cost (TC)', back: 'Total Fixed Cost (TFC) + Total Variable Cost (TVC).' },
  { id: 'c4-f20', front: 'Average Cost (AC)', back: 'Cost per unit. TC / Total Quantity.' },
  { id: 'c4-f21', front: 'Marginal Cost (MC)', back: 'Net addition to TC by producing one more unit.' },
  { id: 'c4-f22', front: 'Total Revenue (TR)', back: 'Total sales proceeds. Price x Quantity.' },
  { id: 'c4-f23', front: 'Average Revenue (AR)', back: 'Revenue per unit. TR / Q. (AR is also the Price).' },
  { id: 'c4-f24', front: 'Marginal Revenue (MR)', back: 'Net addition to TR by selling one more unit.' },
  { id: 'c4-f25', front: 'Determinant: Technology', back: 'Better tech -> Lower Cost -> More Supply.' },
  { id: 'c4-f26', front: 'Determinant: Govt Policy', back: 'Subsidies increase supply. Taxes decrease supply.' },
  { id: 'c4-f27', front: 'Determinant: Infrastructure', back: 'Better roads/power -> More Supply.' },
  { id: 'c4-f28', front: 'Reservation Price', back: 'Minimum price below which seller refuses to sell.' },
  { id: 'c4-f29', front: 'Individual Supply', back: 'Supply by a single firm.' },
  { id: 'c4-f30', front: 'Market Supply', back: 'Sum of all individual supplies.' }
];

const ch4_mcqs: Question[] = [
  { id: 'c4-q1', question: 'Supply is a ______ concept.', options: ['Stock', 'Flow', 'Static', 'Fixed'], correctIndex: 1, explanation: 'It is measured over a period of time.' },
  { id: 'c4-q2', question: 'Stock is always ______ Supply.', options: ['Less than', 'Equal to', 'More than or Equal to', 'None'], correctIndex: 2, explanation: 'Supply comes out of Stock. Stock >= Supply.' },
  { id: 'c4-q3', question: 'Supply curve of labour is ______.', options: ['Upward sloping', 'Downward sloping', 'Backward bending', 'Vertical'], correctIndex: 2, explanation: 'Workers prefer leisure over work at very high wages.' },
  { id: 'c4-q4', question: 'Expansion of supply is caused by ______.', options: ['Lower Cost', 'Better Tech', 'Rise in Price', 'Fall in Price'], correctIndex: 2, explanation: 'Movement along the curve.' },
  { id: 'c4-q5', question: 'Average Cost = ______.', options: ['TC + Q', 'TC - Q', 'TC * Q', 'TC / Q'], correctIndex: 3, explanation: 'Cost per unit.' },
  { id: 'c4-q6', question: 'Perishable goods have ______ elasticity of supply.', options: ['High', 'Low (Inelastic)', 'Infinite', 'Unitary'], correctIndex: 1, explanation: 'Cannot be stored, must be sold.' },
  { id: 'c4-q7', question: 'Stock of potential supply is ______.', options: ['Production', 'Output', 'Inventory', 'Stock'], correctIndex: 3, explanation: 'Source of supply.' },
  { id: 'c4-q8', question: 'Vertical supply curve represents ______ supply.', options: ['Perfectly Elastic', 'Perfectly Inelastic', 'Unitary', 'Relative'], correctIndex: 1, explanation: 'Supply cannot change (e.g. Old paintings).' },
  { id: 'c4-q9', question: 'Increase in supply shifts curve to ______.', options: ['Left', 'Right', 'Up', 'Down'], correctIndex: 1, explanation: 'More supply at same price.' },
  { id: 'c4-q10', question: 'Revenue per unit is called ______.', options: ['TR', 'MR', 'AR', 'PR'], correctIndex: 2, explanation: 'Average Revenue.' },
  { id: 'c4-q11', question: 'Relationship between Price and Supply is ______.', options: ['Inverse', 'Direct', 'Negative', 'None'], correctIndex: 1, explanation: 'Producers sell more at high price.' },
  { id: 'c4-q12', question: 'Determinant of supply includes ______.', options: ['Income of Consumer', 'Cost of Production', 'Population', 'Tastes'], correctIndex: 1, explanation: 'Others are demand determinants.' },
  { id: 'c4-q13', question: 'Rare goods are an exception because ______.', options: ['Supply can be increased', 'Supply is fixed', 'Demand is low', 'Price is low'], correctIndex: 1, explanation: 'Scarcity.' },
  { id: 'c4-q14', question: 'Marginal Revenue is addition to ______.', options: ['TC', 'AC', 'TR', 'AR'], correctIndex: 2, explanation: 'Total Revenue.' },
  { id: 'c4-q15', question: 'Supply of agricultural goods depends on ______.', options: ['Price', 'Natural Conditions', 'Fashion', 'Income'], correctIndex: 1, explanation: 'Weather, rain etc.' }
];

const ch4_reels: Reel[] = [
  { id: 'c4-r1', title: 'Stock vs Supply', content: 'Stock: Total water in the reservoir.\nSupply: Water flowing through the tap.\n\nStock is Potential. Supply is Actual.', color: getReelColor(0) },
  { id: 'c4-r2', title: 'Backward Bending Curve', content: 'Labour Supply is weird!\n\nWage $10 -> Work 8 hrs.\nWage $50 -> Work 12 hrs.\nWage $500 -> Work 4 hrs?!\n\nWhy? Because at very high income, you want LEISURE to enjoy the money!', color: getReelColor(1) },
  { id: 'c4-r3', title: 'Law of Supply', content: 'Seller\'s Psychology:\nPrice High -> Profit High -> Sell MORE.\nPrice Low -> Profit Low -> Sell LESS.', color: getReelColor(2) },
  { id: 'c4-r4', title: 'Cost Concepts', content: 'Fixed Cost: Rent (Pay even if output is 0).\nVariable Cost: Raw Material (Change with output).\nTotal Cost = Fixed + Variable.', color: getReelColor(3) },
  { id: 'c4-r5', title: 'Revenue Concepts', content: 'TR = Price x Qty.\nAR = Price (TR/Q).\nMR = Extra money from last unit.\n\nFor a firm, AR is the Price Line.', color: getReelColor(4) }
];

// --- CHAPTER 5 DATA: Forms of Market ---
const ch5_flashcards: Flashcard[] = [
  { id: 'c5-f1', front: 'Market', back: 'An arrangement where buyers and sellers come in contact (directly/indirectly) for exchange of goods.' },
  { id: 'c5-f2', front: 'Perfect Competition', back: 'Ideal market. Many sellers, Homogeneous product, Single price, Free entry/exit.' },
  { id: 'c5-f3', front: 'Feature: Large number of sellers', back: 'In Perfect Competition, single seller is a "Price Taker". Cannot influence market price.' },
  { id: 'c5-f4', front: 'Feature: Homogeneous Product', back: 'Products are identical in size, shape, color, quality. Perfect substitutes.' },
  { id: 'c5-f5', front: 'Feature: Free Entry & Exit', back: 'No barriers. Any firm can join or leave the industry.' },
  { id: 'c5-f6', front: 'Feature: Perfect Knowledge', back: 'Buyers and sellers know the market price. No advertising needed.' },
  { id: 'c5-f7', front: 'Feature: Perfect Mobility', back: 'Factors of production can move freely.' },
  { id: 'c5-f8', front: 'Feature: No Transport Cost', back: 'Assumed to ensure single price.' },
  { id: 'c5-f9', front: 'Price Determination (PC)', back: 'By interaction of Market Demand and Market Supply (Equilibrium Price).' },
  { id: 'c5-f10', front: 'Monopoly', back: 'Mono (Single) + Poly (Seller). Single seller controls the entire supply.' },
  { id: 'c5-f11', front: 'Feature: Single Seller', back: 'Monopolist is a "Price Maker".' },
  { id: 'c5-f12', front: 'Feature: No Close Substitutes', back: 'Cross elasticity is zero or negative. Buyer has no choice.' },
  { id: 'c5-f13', front: 'Feature: Barriers to Entry', back: 'Legal, natural or technical barriers prevent competitors.' },
  { id: 'c5-f14', front: 'Feature: Price Discrimination', back: 'Charging different prices to different consumers for same product (e.g. Doctors, Railways).' },
  { id: 'c5-f15', front: 'Natural Monopoly', back: 'Created by nature (e.g. Climate for specific crop).' },
  { id: 'c5-f16', front: 'Legal Monopoly', back: 'Patents, Trademarks, Copyrights.' },
  { id: 'c5-f17', front: 'Public Monopoly', back: 'Owned by Govt (Indian Railways).' },
  { id: 'c5-f18', front: 'Oligopoly', back: 'Oligo (Few) + Poly (Seller). Few sellers dominate the market (e.g. Mobile Service Providers).' },
  { id: 'c5-f19', front: 'Feature: Interdependence', back: 'Oligopolists watch competitors closely. Price war is common.' },
  { id: 'c5-f20', front: 'Feature: Advertising', back: 'Crucial for Oligopoly to capture share.' },
  { id: 'c5-f21', front: 'Feature: Indeterminate Demand Curve', back: 'Cannot predict sales due to rival reactions (Kinked Demand Curve).' },
  { id: 'c5-f22', front: 'Monopolistic Competition', back: 'Realistic market. Many sellers, Differentiated products. Blend of Perfect Competition & Monopoly.' },
  { id: 'c5-f23', front: 'Product Differentiation', back: 'Products are similar but not identical (Brand, packing, taste). e.g. Soaps (Lux vs Dove).' },
  { id: 'c5-f24', front: 'Selling Cost', back: 'Expenditure on advertisement and marketing to persuade buyers.' },
  { id: 'c5-f25', front: 'Chamberlin', back: 'Prof. E.H. Chamberlin coined concept of Monopolistic Competition in 1933.' },
  { id: 'c5-f26', front: 'Close Substitutes', back: 'In Monopolistic Comp, cross elasticity is high.' },
  { id: 'c5-f27', front: 'Concept of Group', back: 'Chamberlin used "Group" instead of "Industry" for firms producing differentiated goods.' },
  { id: 'c5-f28', front: 'Very Short Period', back: 'Supply is fixed. Price determined by demand.' },
  { id: 'c5-f29', front: 'Long Period', back: 'All factors are variable.' },
  { id: 'c5-f30', front: 'Duopoly', back: 'Market with exactly two sellers.' }
];

const ch5_mcqs: Question[] = [
  { id: 'c5-q1', question: 'Single seller means ______.', options: ['Perfect Competition', 'Monopoly', 'Oligopoly', 'Duopoly'], correctIndex: 1, explanation: 'Mono = Single.' },
  { id: 'c5-q2', question: 'Product differentiation is the main feature of ______.', options: ['Monopoly', 'Perfect Competition', 'Monopolistic Competition', 'Oligopoly'], correctIndex: 2, explanation: 'Same product, different brands (Soaps, Toothpaste).' },
  { id: 'c5-q3', question: 'Price Taker is a feature of ______.', options: ['Monopoly', 'Perfect Competition', 'Oligopoly', 'None'], correctIndex: 1, explanation: 'Seller accepts market price.' },
  { id: 'c5-q4', question: 'Selling cost is essential in ______.', options: ['Perfect Competition', 'Monopoly', 'Monopolistic Competition', 'None'], correctIndex: 2, explanation: 'To differentiate product.' },
  { id: 'c5-q5', question: 'Kinked demand curve is found in ______.', options: ['Monopoly', 'Oligopoly', 'Perfect Competition', 'Monopolistic'], correctIndex: 1, explanation: 'Due to price rigidity and interdependence.' },
  { id: 'c5-q6', question: 'In perfect competition, products are ______.', options: ['Differentiated', 'Homogeneous', 'Heterogeneous', 'Unique'], correctIndex: 1, explanation: 'Identical.' },
  { id: 'c5-q7', question: 'Indian Railways is a ______ monopoly.', options: ['Private', 'Public', 'Legal', 'Natural'], correctIndex: 1, explanation: 'Owned by Government.' },
  { id: 'c5-q8', question: 'Entry barriers exist in ______.', options: ['Perfect Competition', 'Monopolistic Competition', 'Monopoly', 'None'], correctIndex: 2, explanation: 'Prevents competition.' },
  { id: 'c5-q9', question: 'Few sellers means ______.', options: ['Monopoly', 'Oligopoly', 'Duopoly', 'Perfect'], correctIndex: 1, explanation: 'Oligopoly.' },
  { id: 'c5-q10', question: 'Price Discrimination is possible in ______.', options: ['Perfect Competition', 'Monopoly', 'Monopolistic', 'Oligopoly'], correctIndex: 1, explanation: 'Seller controls supply and price.' },
  { id: 'c5-q11', question: 'Free entry and exit is feature of ______.', options: ['Monopoly', 'Oligopoly', 'Perfect Competition', 'None'], correctIndex: 2, explanation: 'No restrictions.' },
  { id: 'c5-q12', question: 'Demand curve of perfect competition is ______.', options: ['Downward', 'Upward', 'Horizontal', 'Vertical'], correctIndex: 2, explanation: 'Perfectly elastic.' },
  { id: 'c5-q13', question: 'Monopolistic competition concept given by ______.', options: ['Marshall', 'Keynes', 'Chamberlin', 'Joan Robinson'], correctIndex: 2, explanation: 'In 1933.' },
  { id: 'c5-q14', question: 'OPEC is an example of ______.', options: ['Monopoly', 'Cartel/Oligopoly', 'Perfect', 'Monopolistic'], correctIndex: 1, explanation: 'Group of few oil producers.' },
  { id: 'c5-q15', question: 'Equilibrium price is where ______.', options: ['Demand > Supply', 'Demand < Supply', 'Demand = Supply', 'None'], correctIndex: 2, explanation: 'Market clears.' }
];

const ch5_reels: Reel[] = [
  { id: 'c5-r1', title: 'Perfect Competition', content: 'Does it exist? NO.\nIt\'s a myth/ideal.\n\nImagine a market where every potato is IDENTICAL, price is SAME everywhere, and everyone knows EVERYTHING.\nImpossible!', color: getReelColor(0) },
  { id: 'c5-r2', title: 'Monopoly Power', content: 'Price Maker.\n\nSince I am the ONLY seller, I decide the price.\nIf you want electricity, you MUST buy from me (Adani/Tata). I can charge whatever I want (subject to demand).', color: getReelColor(1) },
  { id: 'c5-r3', title: 'Oligopoly Wars', content: 'Few Sellers (Jio, Airtel, Vi).\n\nIf Jio cuts price, Airtel MUST cut price.\nInterdependence.\nThey fight with ads, not just price.', color: getReelColor(2) },
  { id: 'c5-r4', title: 'Monopolistic Comp', content: 'Real Life.\n\nLux vs Dove vs Pears.\nAll are soaps (Substitutes).\nBut they are DIFFERENT (Smell, Wrapper).\n\nThey compete on "Selling Cost" (Ads).', color: getReelColor(3) },
  { id: 'c5-r5', title: 'Price Discrimination', content: 'Same product, different price.\n\nTrain Ticket:\nSenior Citizen: Low Price.\nAdult: High Price.\n\nOnly a Monopolist can do this!', color: getReelColor(4) }
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
            description: 'Economic Barometers.',
            summary: 'Laspeyre, Paasche, Fisher.',
            detailedNotes: '### Types\nPrice, Qty, Value.',
            flashcards: [],
            mcqs: [],
            reels: []
          },
           {
            id: 'eco-7',
            title: '7. National Income',
            description: 'Aggregate Income.',
            summary: 'GDP, GNP, NNP.',
            detailedNotes: '### Measurement\nOutput, Income, Expenditure.',
            flashcards: [],
            mcqs: [],
            reels: []
          },
           {
            id: 'eco-8',
            title: '8. Public Finance',
            description: 'Govt Income Exp.',
            summary: 'Budget, Taxes.',
            detailedNotes: '### Tax\nDirect vs Indirect.',
            flashcards: [],
            mcqs: [],
            reels: []
          },
           {
            id: 'eco-9',
            title: '9. Money Market',
            description: 'Financial System.',
            summary: 'RBI, Banks.',
            detailedNotes: '### RBI\nCentral Bank.',
            flashcards: [],
            mcqs: [],
            reels: []
          },
           {
            id: 'eco-10',
            title: '10. Foreign Trade',
            description: 'Import Export.',
            summary: 'BOT, BOP.',
            detailedNotes: '### Trends\nSoftware exports rising.',
            flashcards: [],
            mcqs: [],
            reels: []
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
