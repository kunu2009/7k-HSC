

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
      summary: `
# Introduction to Micro and Macro Economics

## Key Concepts

### What is Economics?
- **Definition by Adam Smith**: Study of wealth and its creation
- **Definition by Marshall**: Study of mankind in ordinary business of life
- **Definition by Robbins**: Science of scarcity and choice
- **Modern Definition**: Study of how society allocates scarce resources

### Micro Economics (Greek: Mikros = Small)
- Study of individual units
- Also called **Price Theory**
- **Father**: Alfred Marshall
- Uses **Slicing Method** (divides economy into small parts)
- **Partial Equilibrium Analysis** (Ceteris Paribus)

### Macro Economics (Greek: Makros = Large)
- Study of aggregates/economy as whole
- Also called **Income Theory**
- **Father**: John Maynard Keynes
- Uses **Lumping Method** (studies whole economy)
- **General Equilibrium Analysis**

### Key Terms
| Micro | Macro |
|-------|-------|
| Individual demand | Aggregate demand |
| Firm's output | National output (GDP) |
| Product pricing | General price level |
| Factor pricing | National income |
| Consumer behavior | Consumption function |

### Scope of Economics
1. **Consumption**: How consumers maximize satisfaction
2. **Production**: How firms produce goods
3. **Exchange**: How goods are bought and sold
4. **Distribution**: How income is distributed
5. **Public Finance**: Government revenue and expenditure
      `,
      detailedNotes: `
# Detailed Notes: Introduction to Micro and Macro Economics

## PART A: UNDERSTANDING ECONOMICS

### 1. Origin and Evolution
- **Ancient Period**: Kautilya's Arthashastra (Economics in India)
- **Classical Period**: Adam Smith's "Wealth of Nations" (1776)
- **Neo-Classical**: Alfred Marshall's "Principles of Economics" (1890)
- **Modern**: Keynes' "General Theory" (1936)

### 2. Definitions of Economics

#### A. Wealth Definition (Adam Smith - 1776)
- Economics is the study of nature and causes of wealth of nations
- Focus: How to increase national wealth
- **Criticism**: Too materialistic, ignores human welfare

#### B. Welfare Definition (Alfred Marshall - 1890)
- "Study of mankind in the ordinary business of life"
- Economics examines how man earns income and uses it
- Focus: Material welfare
- **Criticism**: Only material welfare, ignores non-material

#### C. Scarcity Definition (Lionel Robbins - 1932)
- "Science which studies human behavior as a relationship between ends and scarce means which have alternative uses"
- Key elements:
  - Unlimited wants
  - Limited resources
  - Alternative uses
  - Choice and prioritization
- **Criticism**: Ignores macro problems like unemployment

#### D. Growth Definition (Paul Samuelson - Modern)
- "Study of how people and society choose to employ scarce resources that could have alternative uses"
- Includes: Growth, development, dynamics

### 3. Nature of Economics

| Scientific | Art |
|------------|-----|
| Systematic body of knowledge | Practical application |
| Uses scientific methods | Problem solving |
| Cause-effect relationships | Policy making |
| Verifiable theories | Implementation |

**Conclusion**: Economics is both a Science and an Art

### 4. Economics as Science

#### Positive Economics
- "What is" - Descriptive
- Value-free statements
- Can be verified
- Example: "Inflation is 5%"

#### Normative Economics
- "What ought to be" - Prescriptive
- Value judgments
- Cannot be verified scientifically
- Example: "Inflation should be reduced"

---

## PART B: MICRO ECONOMICS

### 1. Definition
The branch of economics that studies the behavior of individual economic units like consumers, firms, and factor owners.

### 2. Characteristics of Micro Economics

#### a) Study of Individual Units
- Individual consumer behavior
- Individual firm's decisions
- Individual market analysis
- Individual factor pricing

#### b) Price Theory
- Determination of prices of goods and services
- Product pricing in different markets
- Factor pricing (wages, rent, interest, profit)

#### c) Slicing Method
- Divides economy into small segments
- Studies each segment separately
- "Cannot see the forest for the trees"

#### d) Partial Equilibrium
- "Other things remaining constant" (Ceteris Paribus)
- Assumes other variables don't change
- Isolates one variable at a time

#### e) Marginalism
- Uses marginal concepts
- Marginal utility, Marginal cost, Marginal revenue
- Decision-making at the margin

### 3. Scope of Micro Economics

| Area | What it Studies |
|------|-----------------|
| Theory of Consumer Behavior | Utility analysis, Indifference curves, Consumer equilibrium |
| Theory of Producer Behavior | Production function, Cost curves, Profit maximization |
| Theory of Product Pricing | Price determination in Perfect competition, Monopoly, etc. |
| Theory of Factor Pricing | Determination of wages, rent, interest, profit |
| Theory of Economic Welfare | Pareto optimality, Market efficiency |

### 4. Importance of Micro Economics

1. **Understanding Market Mechanism**: How prices are determined
2. **Business Decision Making**: Pricing, output, investment decisions
3. **Resource Allocation**: How resources are distributed
4. **Policy Formulation**: Tax policy, price controls
5. **Welfare Economics**: Maximizing social welfare
6. **International Trade**: Understanding comparative advantage

### 5. Limitations of Micro Economics

1. **Unrealistic Assumptions**: Ceteris paribus rarely holds
2. **Ignores Aggregates**: Cannot explain economy-wide problems
3. **Full Employment Assumption**: Assumes resources fully employed
4. **Static Analysis**: Does not consider time changes
5. **Neglects Macro Problems**: Unemployment, inflation ignored

---

## PART C: MACRO ECONOMICS

### 1. Definition
The branch of economics that studies the economy as a whole, including aggregate output, employment, price levels, and growth.

### 2. Origin of Macro Economics
- **The Great Depression (1929-1933)**: Classical economics failed
- **J.M. Keynes (1936)**: "General Theory of Employment, Interest and Money"
- Keynes is called **Father of Modern Macro Economics**

### 3. Characteristics of Macro Economics

#### a) Study of Aggregates
- National Income (GDP, GNP)
- Aggregate Demand and Supply
- General Price Level
- Total Employment

#### b) Income Theory
- Determination of national income
- Consumption and saving functions
- Investment and multiplier

#### c) Lumping Method
- Studies economy as a whole
- "Sees the forest, not individual trees"
- Aggregative approach

#### d) General Equilibrium
- All markets simultaneously in equilibrium
- Interdependence of all economic variables
- No isolation of variables

#### e) Policy Oriented
- Fiscal policy recommendations
- Monetary policy suggestions
- Economic planning guidance

### 4. Scope of Macro Economics

| Area | What it Studies |
|------|-----------------|
| National Income Analysis | GDP, GNP, NNP, Per Capita Income |
| Employment Theory | Causes of unemployment, Full employment |
| Money and Banking | Money supply, Credit creation, Central banking |
| Price Level Theory | Inflation, Deflation, Price stability |
| Trade Cycle Theory | Boom, Recession, Depression, Recovery |
| Economic Growth | Growth models, Development strategies |
| International Trade | Balance of payments, Exchange rates |

### 5. Importance of Macro Economics

1. **Understanding Economy's Functioning**: How overall economy works
2. **Economic Policies**: Fiscal, monetary, trade policies
3. **Solving Macro Problems**: Unemployment, inflation, poverty
4. **Economic Planning**: Five-year plans, growth targets
5. **International Comparisons**: Comparing economies
6. **Business Forecasting**: Predicting economic trends

### 6. Limitations of Macro Economics

1. **Ignores Individual Differences**: Averages can be misleading
2. **Aggregate Fallacy**: What's true for whole may not be true for parts
3. **Statistical Difficulties**: Data collection problems
4. **Heterogeneous Units**: Aggregating diverse items
5. **Excessive Generalization**: Over-simplification of complex reality

---

## PART D: COMPARISON

### Micro vs Macro Economics

| Basis | Micro Economics | Macro Economics |
|-------|-----------------|-----------------|
| **Meaning** | Study of individual units | Study of aggregates |
| **Also Called** | Price Theory | Income Theory |
| **Method** | Slicing method | Lumping method |
| **Equilibrium** | Partial equilibrium | General equilibrium |
| **Scope** | Individual markets | Entire economy |
| **Objective** | Price determination | Income determination |
| **Assumption** | Full employment | Under-employment possible |
| **Example** | Demand for rice | Aggregate demand |
| **Father** | Alfred Marshall | J.M. Keynes |
| **Approach** | Bottom-up | Top-down |

### Interdependence

1. **Micro is base for Macro**: National income = Sum of individual incomes
2. **Macro affects Micro**: Inflation affects individual prices
3. **Both are complementary**: Neither complete without other
4. **Policy needs both**: Effective policy requires both approaches

---

## PART E: BASIC ECONOMIC CONCEPTS

### 1. Scarcity and Choice
- Resources are limited
- Wants are unlimited
- Must make choices
- Every choice has opportunity cost

### 2. Opportunity Cost
- Value of next best alternative foregone
- Real cost of any decision
- Example: If you choose college, opportunity cost is the job income foregone

### 3. Production Possibility Curve (PPC)
- Shows maximum combinations of two goods
- Illustrates scarcity and choice
- Bowed outward due to increasing opportunity cost
- Points on curve: Efficient
- Points inside: Inefficient
- Points outside: Unattainable

### 4. Economic Systems

| Capitalist | Socialist | Mixed |
|------------|-----------|-------|
| Private ownership | State ownership | Both private and public |
| Price mechanism | Central planning | Both mechanisms |
| Profit motive | Social welfare | Both motives |
| USA, UK | Cuba, N. Korea | India, France |

### 5. Central Problems of Economy
1. **What to produce?**: Which goods, how much quantity
2. **How to produce?**: Labor-intensive or Capital-intensive
3. **For whom to produce?**: Distribution of national product
4. **Economic efficiency**: Are resources used optimally?
5. **Full employment**: Are all resources employed?
6. **Economic growth**: Is the economy growing?
      `,
      flashcards: [
        { id: 'f1', front: 'Micro Economics derived from?', back: 'Greek word "Mikros" meaning Small/Millionth part.' },
        { id: 'f2', front: 'Macro Economics derived from?', back: 'Greek word "Makros" meaning Large/Aggregate.' },
        { id: 'f3', front: 'Father of Economics?', back: 'Adam Smith (Wealth of Nations - 1776).' },
        { id: 'f4', front: 'Coined terms Micro & Macro?', back: 'Ragnar Frisch (Oslo University) in 1933.' },
        { id: 'f5', front: 'Father of Micro Economics?', back: 'Alfred Marshall - author of "Principles of Economics" (1890).' },
        { id: 'f6', front: 'Father of Macro Economics?', back: 'John Maynard Keynes - author of "General Theory" (1936).' },
        { id: 'f7', front: 'What is Ceteris Paribus?', back: 'Latin phrase meaning "Other things remaining constant" - used in Micro Economics.' },
        { id: 'f8', front: 'Micro Economics is also called?', back: 'Price Theory - because it deals with determination of prices.' },
        { id: 'f9', front: 'Macro Economics is also called?', back: 'Income Theory - because it deals with national income determination.' },
        { id: 'f10', front: 'What is Slicing Method?', back: 'Method used in Micro Economics - divides economy into small parts for study.' },
        { id: 'f11', front: 'What is Lumping Method?', back: 'Method used in Macro Economics - studies economy as a whole/aggregate.' },
        { id: 'f12', front: 'Define Scarcity Definition of Economics.', back: 'Given by Robbins - Economics is science of scarcity and choice between unlimited wants and limited resources.' },
        { id: 'f13', front: 'What is Opportunity Cost?', back: 'Value of the next best alternative foregone when making a choice.' },
        { id: 'f14', front: 'What is PPC?', back: 'Production Possibility Curve - shows maximum combinations of two goods an economy can produce.' },
        { id: 'f15', front: 'What is Positive Economics?', back: '"What is" - Factual, value-free statements that can be verified.' },
        { id: 'f16', front: 'What is Normative Economics?', back: '"What ought to be" - Value judgments and opinions about economic policy.' },
        { id: 'f17', front: 'What caused the birth of Macro Economics?', back: 'The Great Depression (1929-1933) - Classical economics failed to explain mass unemployment.' },
        { id: 'f18', front: 'What is Partial Equilibrium?', back: 'Analysis of one market in isolation, assuming other markets unchanged. Used in Micro Economics.' },
        { id: 'f19', front: 'What is General Equilibrium?', back: 'Simultaneous equilibrium in all markets, considering interdependence. Used in Macro Economics.' },
        { id: 'f20', front: 'Name 3 central problems of economy.', back: '1) What to produce? 2) How to produce? 3) For whom to produce?' },
        { id: 'f21', front: 'What is Wealth Definition of Economics?', back: 'Given by Adam Smith - Economics is the study of nature and causes of wealth of nations.' },
        { id: 'f22', front: 'What is Welfare Definition of Economics?', back: 'Given by Marshall - Study of mankind in ordinary business of life, focusing on material welfare.' },
        { id: 'f23', front: 'What is Growth Definition of Economics?', back: 'Given by Samuelson - Study of how society chooses to employ scarce resources with alternative uses.' },
        { id: 'f24', front: 'Is Economics a Science or Art?', back: 'Both! Science (systematic knowledge) and Art (practical application).' },
        { id: 'f25', front: 'What is Capitalism?', back: 'Economic system with private ownership, price mechanism, profit motive. Examples: USA, UK.' },
        { id: 'f26', front: 'What is Socialism?', back: 'Economic system with state ownership, central planning, social welfare. Examples: Cuba, North Korea.' },
        { id: 'f27', front: 'What is Mixed Economy?', back: 'Combination of capitalism and socialism, both private and public sectors. Examples: India, France.' },
        { id: 'f28', front: 'What is Arthashastra?', back: 'Ancient Indian treatise on economics by Kautilya (Chanakya), advisor to Chandragupta Maurya.' },
        { id: 'f29', front: 'What year was "Principles of Economics" published?', back: '1890 - by Alfred Marshall.' },
        { id: 'f30', front: 'What is the shape of PPC and why?', back: 'Concave to origin (bowed outward) due to increasing opportunity cost.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Micro economics is a _______ equilibrium analysis.', options: ['Partial', 'General', 'Total', 'Multi'], correctIndex: 0, explanation: 'Micro economics assumes "other things constant" and isolates a single unit.' },
        { id: 'q2', question: 'Macro economics uses ______ method.', options: ['Slicing', 'Lumping', 'Cutting', 'Dividing'], correctIndex: 1, explanation: 'Macro studies the economy as a whole lump.' },
        { id: 'q3', question: 'Who is the Father of Economics?', options: ['Keynes', 'Marshall', 'Adam Smith', 'Robbins'], correctIndex: 2, explanation: 'Adam Smith wrote "Wealth of Nations" in 1776.' },
        { id: 'q4', question: 'Terms Micro and Macro were coined by:', options: ['Marshall', 'Keynes', 'Ragnar Frisch', 'Adam Smith'], correctIndex: 2, explanation: 'Ragnar Frisch coined these terms in 1933.' },
        { id: 'q5', question: 'Micro Economics is also called:', options: ['Income Theory', 'Price Theory', 'Welfare Theory', 'Growth Theory'], correctIndex: 1, explanation: 'Because it deals with price determination of goods and factors.' },
        { id: 'q6', question: 'Father of Modern Macro Economics is:', options: ['Marshall', 'J.M. Keynes', 'Adam Smith', 'Robbins'], correctIndex: 1, explanation: 'Keynes wrote "General Theory" in 1936.' },
        { id: 'q7', question: 'Scarcity definition of Economics was given by:', options: ['Marshall', 'Keynes', 'Robbins', 'Adam Smith'], correctIndex: 2, explanation: 'Lionel Robbins defined economics in terms of scarcity in 1932.' },
        { id: 'q8', question: '"Wealth of Nations" was written in:', options: ['1776', '1890', '1932', '1936'], correctIndex: 0, explanation: 'Adam Smith published it in 1776.' },
        { id: 'q9', question: 'Ceteris Paribus means:', options: ['Everything changes', 'Other things constant', 'All things equal', 'Nothing constant'], correctIndex: 1, explanation: 'Latin phrase used in Micro Economics.' },
        { id: 'q10', question: 'General Equilibrium is feature of:', options: ['Micro Economics', 'Macro Economics', 'Both', 'Neither'], correctIndex: 1, explanation: 'Macro Economics studies interdependence of all variables.' },
        { id: 'q11', question: 'Study of national income is part of:', options: ['Micro Economics', 'Macro Economics', 'Both', 'Neither'], correctIndex: 1, explanation: 'National income is an aggregate concept studied in Macro.' },
        { id: 'q12', question: 'Welfare definition was given by:', options: ['Adam Smith', 'Marshall', 'Robbins', 'Keynes'], correctIndex: 1, explanation: 'Alfred Marshall gave the welfare definition in 1890.' },
        { id: 'q13', question: 'The Great Depression occurred in:', options: ['1919-1923', '1929-1933', '1939-1945', '1950-1955'], correctIndex: 1, explanation: 'The Great Depression led to birth of Macro Economics.' },
        { id: 'q14', question: '"General Theory" was written by:', options: ['Adam Smith', 'Marshall', 'Keynes', 'Robbins'], correctIndex: 2, explanation: 'J.M. Keynes wrote it in 1936.' },
        { id: 'q15', question: 'Production Possibility Curve is:', options: ['Convex to origin', 'Concave to origin', 'Straight line', 'Horizontal line'], correctIndex: 1, explanation: 'PPC is concave due to increasing opportunity cost.' },
        { id: 'q16', question: 'Opportunity cost is also called:', options: ['Money cost', 'Real cost', 'Transfer cost', 'Fixed cost'], correctIndex: 2, explanation: 'It represents what is sacrificed or transferred.' },
        { id: 'q17', question: 'India follows which economic system?', options: ['Capitalism', 'Socialism', 'Mixed economy', 'Traditional economy'], correctIndex: 2, explanation: 'India has both public and private sectors.' },
        { id: 'q18', question: 'Positive Economics deals with:', options: ['What ought to be', 'What is', 'Value judgments', 'Opinions'], correctIndex: 1, explanation: 'Positive economics is factual and value-free.' },
        { id: 'q19', question: 'Normative Economics deals with:', options: ['Facts only', 'What ought to be', 'Scientific laws', 'Observations'], correctIndex: 1, explanation: 'Normative economics involves value judgments.' },
        { id: 'q20', question: '"How to produce" is a problem of:', options: ['Consumption', 'Distribution', 'Production technique', 'Exchange'], correctIndex: 2, explanation: 'It asks whether to use labor-intensive or capital-intensive methods.' },
        { id: 'q21', question: 'Arthashastra was written by:', options: ['Adam Smith', 'Kautilya', 'Marshall', 'Keynes'], correctIndex: 1, explanation: 'Kautilya (Chanakya) wrote this ancient Indian economics text.' },
        { id: 'q22', question: 'Micro Economics studies:', options: ['Aggregates', 'Individual units', 'National income', 'General price level'], correctIndex: 1, explanation: 'Micro studies individual consumers, firms, markets.' },
        { id: 'q23', question: 'Macro Economics does NOT study:', options: ['GDP', 'Inflation', 'Individual consumer', 'Unemployment'], correctIndex: 2, explanation: 'Individual consumer behavior is studied in Micro.' },
        { id: 'q24', question: 'Points inside PPC indicate:', options: ['Efficiency', 'Inefficiency', 'Full employment', 'Maximum output'], correctIndex: 1, explanation: 'Points inside PPC show underutilization of resources.' },
        { id: 'q25', question: 'Points on PPC indicate:', options: ['Inefficiency', 'Unattainable', 'Full efficiency', 'Unemployment'], correctIndex: 2, explanation: 'Points on the curve represent efficient use of all resources.' },
        { id: 'q26', question: 'Points outside PPC are:', options: ['Efficient', 'Inefficient', 'Currently unattainable', 'Optimal'], correctIndex: 2, explanation: 'They represent output beyond current capacity.' },
        { id: 'q27', question: 'The book "Principles of Economics" was written by:', options: ['Adam Smith', 'Marshall', 'Keynes', 'Robbins'], correctIndex: 1, explanation: 'Alfred Marshall wrote it in 1890.' },
        { id: 'q28', question: 'Which is NOT a central problem of economy?', options: ['What to produce', 'How to produce', 'When to produce', 'For whom to produce'], correctIndex: 2, explanation: 'The three basic problems are What, How, and For Whom.' },
        { id: 'q29', question: 'Capitalism is characterized by:', options: ['State ownership', 'Central planning', 'Private ownership', 'No profit motive'], correctIndex: 2, explanation: 'Capitalism features private ownership and profit motive.' },
        { id: 'q30', question: 'Economics is called "Science of Scarcity" by:', options: ['Smith', 'Marshall', 'Robbins', 'Keynes'], correctIndex: 2, explanation: 'Robbins emphasized scarcity and choice in his 1932 definition.' }
      ],
      reels: [
        { id: 'r1', title: 'Micro vs Macro', content: 'Micro = Tree (Individual)\nMacro = Forest (Aggregate)', color: getReelColor(0) },
        { id: 'r2', title: 'Ragnar Frisch', content: 'Coined "Micro" and "Macro" in 1933.', color: getReelColor(1) },
        { id: 'r3', title: 'Adam Smith', content: 'Father of Economics.\nBook: Wealth of Nations (1776).', color: getReelColor(2) },
        { id: 'r4', title: 'Price Theory', content: 'Micro Economics is also called Price Theory.', color: getReelColor(3) },
        { id: 'r5', title: 'Income Theory', content: 'Macro Economics is also called Income Theory.', color: getReelColor(4) },
        { id: 'r6', title: 'Marshall', content: 'Father of Micro Economics\nPrinciples of Economics (1890)', color: getReelColor(5) },
        { id: 'r7', title: 'Keynes', content: 'Father of Macro Economics\nGeneral Theory (1936)', color: getReelColor(6) },
        { id: 'r8', title: 'Ceteris Paribus', content: 'Other things constant\nUsed in Micro Analysis', color: getReelColor(7) },
        { id: 'r9', title: 'Slicing Method', content: 'Micro: Cuts economy into parts\nStudies each part separately', color: getReelColor(8) },
        { id: 'r10', title: 'Lumping Method', content: 'Macro: Studies whole economy\nAggregate approach', color: getReelColor(9) },
        { id: 'r11', title: 'Robbins Definition', content: 'Scarcity + Choice\nUnlimited wants, Limited resources', color: getReelColor(0) },
        { id: 'r12', title: 'Opportunity Cost', content: 'Value of next best alternative\nReal cost of choice', color: getReelColor(1) },
        { id: 'r13', title: 'PPC Shape', content: 'Bowed outward (concave)\nDue to increasing opportunity cost', color: getReelColor(2) },
        { id: 'r14', title: 'Positive vs Normative', content: 'Positive: What IS\nNormative: What SHOULD BE', color: getReelColor(3) },
        { id: 'r15', title: 'Central Problems', content: 'What? How? For Whom?\nEvery economy faces these', color: getReelColor(4) },
        { id: 'r16', title: 'Great Depression', content: '1929-1933\nBirth of Macro Economics\nClassical theory failed', color: getReelColor(5) },
        { id: 'r17', title: 'Wealth Definition', content: 'Adam Smith (1776)\nStudy of wealth creation\nCriticized: Too materialistic', color: getReelColor(6) },
        { id: 'r18', title: 'Welfare Definition', content: 'Marshall (1890)\nOrdinary business of life\nMaterial welfare focus', color: getReelColor(7) },
        { id: 'r19', title: 'Scarcity Definition', content: 'Robbins (1932)\nEnds are many, means are scarce\nChoice is necessary', color: getReelColor(8) },
        { id: 'r20', title: 'Growth Definition', content: 'Samuelson (Modern)\nDynamic, includes growth\nMost comprehensive', color: getReelColor(9) },
        { id: 'r21', title: 'Economics: Science', content: 'Systematic study\nCause-effect relationship\nVerifiable laws', color: getReelColor(0) },
        { id: 'r22', title: 'Economics: Art', content: 'Practical application\nPolicy making\nProblem solving', color: getReelColor(1) },
        { id: 'r23', title: 'Capitalism', content: 'Private ownership\nPrice mechanism\nProfit motive\nUSA, UK', color: getReelColor(2) },
        { id: 'r24', title: 'Socialism', content: 'State ownership\nCentral planning\nSocial welfare\nCuba', color: getReelColor(3) },
        { id: 'r25', title: 'Mixed Economy', content: 'Both private + public\nBoth mechanisms\nIndia, France', color: getReelColor(4) },
        { id: 'r26', title: 'PPC Points', content: 'ON curve: Efficient\nINSIDE: Inefficient\nOUTSIDE: Unattainable', color: getReelColor(5) },
        { id: 'r27', title: 'Partial Equilibrium', content: 'Micro Economics\nOne market isolated\nCeteris Paribus', color: getReelColor(6) },
        { id: 'r28', title: 'General Equilibrium', content: 'Macro Economics\nAll markets together\nInterdependence', color: getReelColor(7) },
        { id: 'r29', title: 'Arthashastra', content: 'Kautilya (Chanakya)\nAncient Indian Economics\nMaurya Empire advisor', color: getReelColor(8) },
        { id: 'r30', title: 'Key Years to Remember', content: '1776: Wealth of Nations\n1890: Marshall\n1932: Robbins\n1936: Keynes', color: getReelColor(9) }
      ]
    },
    {
      id: 'eco2',
      title: '2. Utility Analysis',
      description: 'Cardinal and Ordinal approaches to measuring satisfaction.',
      summary: '**Utility**: Satisfaction derived from consumption.\n**Types**: Total Utility (TU), Marginal Utility (MU).\n**Laws**: Law of DMU, Law of Equi-Marginal Utility.',
      detailedNotes: '### 1. Concept of Utility\n**Utility** = Want satisfying power of a commodity.\nIt is subjective - varies person to person.\n\n### 2. Types of Utility\n* **Total Utility (TU)**: Sum of all utilities from all units consumed.\n* **Marginal Utility (MU)**: Utility from consuming ONE additional unit.\n* **Formula**: MU = TUn - TUn-1 OR MU = ΔTU/ΔQ\n\n### 3. Law of Diminishing Marginal Utility (DMU)\n**Statement**: As consumption increases, MU decreases (other things constant).\n**Assumptions**: Homogeneous units, Continuous consumption, No time gap, Normal consumer.\n**Exceptions**: Hobbies (Stamp collecting), Misers (Money), Drunkards.\n\n### 4. Cardinal Utility\n* Utility can be measured in numbers (Utils).\n* Given by Alfred Marshall.\n* Used in Law of DMU, Equi-Marginal Utility.\n\n### 5. Ordinal Utility\n* Utility can only be ranked (1st, 2nd, 3rd...).\n* Given by Hicks and Allen.\n* Used in Indifference Curve Analysis.\n\n### 6. Law of Equi-Marginal Utility\n**Statement**: Consumer maximizes satisfaction when MU per rupee spent is equal for all goods.\n**Formula**: MUx/Px = MUy/Py = MUm (Marginal Utility of Money)',
      flashcards: [
        { id: 'f1', front: 'What is Utility?', back: 'Want satisfying power of a commodity. It is the ability of a good to satisfy human wants.' },
        { id: 'f2', front: 'Formula for Marginal Utility (MU)?', back: 'MU = TUn - TUn-1 OR MU = ΔTU/ΔQ (Change in TU divided by change in Quantity)' },
        { id: 'f3', front: 'Who introduced Cardinal Utility?', back: 'Alfred Marshall - the neo-classical economist who believed utility can be measured in numbers (Utils).' },
        { id: 'f4', front: 'Who introduced Ordinal Utility?', back: 'J.R. Hicks and R.G.D. Allen - they believed utility can only be ranked (1st, 2nd, 3rd) not measured.' },
        { id: 'f5', front: 'When is Total Utility (TU) maximum?', back: 'When Marginal Utility (MU) = 0. This is called the Point of Satiety or Saturation Point.' },
        { id: 'f6', front: 'What is Total Utility (TU)?', back: 'Sum total of utilities derived from consumption of all units of a commodity. TU = Σ MU.' },
        { id: 'f7', front: 'What is Marginal Utility (MU)?', back: 'Additional utility derived from consuming ONE more unit of a commodity. It is the change in TU.' },
        { id: 'f8', front: 'State the Law of Diminishing Marginal Utility.', back: 'As more units of a commodity are consumed, the utility derived from each successive unit goes on decreasing, other things remaining constant.' },
        { id: 'f9', front: 'Who propounded the Law of DMU?', back: 'German economist H.H. Gossen (First law of Gossen). Also developed by Alfred Marshall.' },
        { id: 'f10', front: 'What are the assumptions of Law of DMU?', back: '1. Homogeneous units 2. Continuous consumption 3. No time gap 4. Constant income 5. Normal consumer 6. Standard units' },
        { id: 'f11', front: 'What happens when MU becomes negative?', back: 'Total Utility (TU) starts falling/decreasing. This indicates over-consumption or disutility.' },
        { id: 'f12', front: 'What is Point of Satiety?', back: 'The point where TU is maximum and MU = 0. Consumer is fully satisfied and does not want more.' },
        { id: 'f13', front: 'Name 3 exceptions to Law of DMU.', back: '1. Hobbies (stamp/coin collecting) 2. Misers (for money) 3. Drunkards (for alcohol) 4. Music lovers 5. Knowledge seekers' },
        { id: 'f14', front: 'What is the relationship between TU and MU?', back: 'When MU > 0, TU rises. When MU = 0, TU is maximum. When MU < 0, TU falls.' },
        { id: 'f15', front: 'What is Cardinal measurement of utility?', back: 'Utility measured in absolute numbers called Utils. E.g., Apple gives 10 utils, Orange gives 8 utils.' },
        { id: 'f16', front: 'What is Ordinal measurement of utility?', back: 'Utility expressed in ranks/order. E.g., Apple is preferred to Orange (1st rank > 2nd rank). Cannot say "how much more".' },
        { id: 'f17', front: 'What is Law of Equi-Marginal Utility?', back: 'Consumer gets maximum satisfaction when MU per rupee spent on all goods is equal: MUx/Px = MUy/Py = MUm' },
        { id: 'f18', front: 'Who gave the Law of Equi-Marginal Utility?', back: 'H.H. Gossen (Second Law of Gossen). Also called Law of Substitution or Law of Maximum Satisfaction.' },
        { id: 'f19', front: 'What is Marginal Utility of Money (MUm)?', back: 'The additional satisfaction derived from spending one more rupee. Marshall assumed MUm to be constant.' },
        { id: 'f20', front: 'What is Consumer Equilibrium in Cardinal approach?', back: 'Consumer is in equilibrium when MUx/Px = MUy/Py = MUm. No reallocation of spending can increase satisfaction.' },
        { id: 'f21', front: 'What is Utils?', back: 'Imaginary unit to measure utility in cardinal approach. E.g., 1 apple = 10 utils of satisfaction.' },
        { id: 'f22', front: 'Why is utility subjective?', back: 'Because satisfaction varies from person to person. Same good gives different utility to different individuals.' },
        { id: 'f23', front: 'Difference between Utility and Usefulness?', back: 'Utility = want satisfaction (even harmful goods have utility). Usefulness = beneficial quality only.' },
        { id: 'f24', front: 'What is Initial Utility?', back: 'Utility derived from the first unit of consumption. It is usually highest and called Maximum MU.' },
        { id: 'f25', front: 'What is Zero Utility?', back: 'When MU = 0 at point of satiety. Consumer neither gains nor loses satisfaction from consuming more.' },
        { id: 'f26', front: 'What is Negative Utility or Disutility?', back: 'When MU becomes negative (MU < 0). Extra consumption causes dissatisfaction or harm.' },
        { id: 'f27', front: 'What is the shape of TU curve?', back: 'Inverted U-shape. Rises at decreasing rate, reaches maximum, then falls.' },
        { id: 'f28', front: 'What is the shape of MU curve?', back: 'Downward sloping (negative slope). Starts high, crosses zero at saturation, becomes negative.' },
        { id: 'f29', front: 'Why does Law of DMU operate?', back: '1. Wants are satiable 2. Goods are imperfect substitutes 3. Different uses have different intensities 4. Psychological factor' },
        { id: 'f30', front: 'What is Gossen\'s First Law?', back: 'Law of Diminishing Marginal Utility - as consumption increases, MU decreases. Named after Hermann Gossen.' }
      ],
      mcqs: [
        { id: 'q1', question: 'When TU is maximum, MU is _______.', options: ['Maximum', 'Zero', 'Negative', 'Positive'], correctIndex: 1, explanation: 'At the point of satiety, MU becomes zero while TU is at its peak.' },
        { id: 'q2', question: 'Cardinal utility approach was given by _______.', options: ['Hicks', 'Allen', 'Marshall', 'Keynes'], correctIndex: 2, explanation: 'Alfred Marshall believed utility can be measured in numbers (Utils).' },
        { id: 'q3', question: 'Law of DMU does NOT apply to _______.', options: ['Food', 'Water', 'Money (Misers)', 'Clothes'], correctIndex: 2, explanation: 'Misers never feel satisfied with money - MU doesn\'t diminish for them.' },
        { id: 'q4', question: 'Utility is _______ in nature.', options: ['Objective', 'Subjective', 'Universal', 'Constant'], correctIndex: 1, explanation: 'Utility varies from person to person based on individual preferences.' },
        { id: 'q5', question: 'The formula MU = TUn - TUn-1 shows MU as _______.', options: ['Sum of TU', 'Difference of TU', 'Product of TU', 'Ratio of TU'], correctIndex: 1, explanation: 'MU is the difference between current TU and previous TU.' },
        { id: 'q6', question: 'Ordinal utility approach was given by _______.', options: ['Marshall', 'Hicks and Allen', 'Adam Smith', 'Keynes'], correctIndex: 1, explanation: 'J.R. Hicks and R.G.D. Allen developed the ordinal (ranking) approach.' },
        { id: 'q7', question: 'When MU is negative, TU _______.', options: ['Increases', 'Decreases', 'Remains constant', 'Becomes zero'], correctIndex: 1, explanation: 'Negative MU means each additional unit reduces total satisfaction.' },
        { id: 'q8', question: 'Point of Satiety occurs when MU = _______.', options: ['Maximum', 'Minimum', 'Zero', 'Infinity'], correctIndex: 2, explanation: 'At satiety, consumer is fully satisfied and MU of additional unit is zero.' },
        { id: 'q9', question: 'TU curve is _______ shaped.', options: ['U-shaped', 'Inverted U-shaped', 'S-shaped', 'Linear'], correctIndex: 1, explanation: 'TU rises, reaches maximum (when MU=0), then falls (when MU<0).' },
        { id: 'q10', question: 'MU curve slopes _______.', options: ['Upward', 'Downward', 'Horizontally', 'Vertically'], correctIndex: 1, explanation: 'Due to Law of DMU, MU decreases as consumption increases.' },
        { id: 'q11', question: 'Utils is a unit of measuring utility in _______ approach.', options: ['Ordinal', 'Cardinal', 'Modern', 'Classical'], correctIndex: 1, explanation: 'Cardinal approach uses Utils as imaginary measurement unit.' },
        { id: 'q12', question: 'Law of DMU is also called _______.', options: ['Gossen\'s First Law', 'Gossen\'s Second Law', 'Marshall\'s Law', 'Keynes Law'], correctIndex: 0, explanation: 'H.H. Gossen first propounded this law in 1854.' },
        { id: 'q13', question: 'Law of Equi-Marginal Utility is also called _______.', options: ['First Law of Gossen', 'Second Law of Gossen', 'Law of Demand', 'Law of Supply'], correctIndex: 1, explanation: 'Gossen\'s Second Law deals with allocation of expenditure.' },
        { id: 'q14', question: 'In ordinal approach, utility is _______.', options: ['Measured', 'Ranked', 'Calculated', 'Ignored'], correctIndex: 1, explanation: 'Ordinal utility only ranks preferences (1st, 2nd, 3rd).' },
        { id: 'q15', question: 'Consumer equilibrium in cardinal approach: MUx/Px = _______.', options: ['MUy × Py', 'MUy/Py', 'TUx/Px', 'TUy/Py'], correctIndex: 1, explanation: 'MU per rupee must be equal for all goods at equilibrium.' },
        { id: 'q16', question: 'Initial utility is _______.', options: ['Lowest MU', 'Highest MU', 'Zero MU', 'Negative MU'], correctIndex: 1, explanation: 'First unit gives maximum satisfaction (highest MU).' },
        { id: 'q17', question: 'Which is NOT an assumption of Law of DMU?', options: ['Continuous consumption', 'Homogeneous units', 'Changing tastes', 'Standard units'], correctIndex: 2, explanation: 'Tastes must remain constant for law of DMU to apply.' },
        { id: 'q18', question: 'Stamp collecting for a hobbyist is exception because _______.', options: ['MU increases', 'MU is zero', 'MU is negative', 'TU is zero'], correctIndex: 0, explanation: 'For hobbies, each new stamp adds more satisfaction.' },
        { id: 'q19', question: 'TU can be found by _______ all MUs.', options: ['Subtracting', 'Dividing', 'Adding', 'Multiplying'], correctIndex: 2, explanation: 'TU = ΣMU (summation of all marginal utilities).' },
        { id: 'q20', question: 'When TU rises at decreasing rate, MU is _______.', options: ['Rising', 'Falling but positive', 'Zero', 'Negative'], correctIndex: 1, explanation: 'Positive but decreasing MU causes TU to rise slowly.' },
        { id: 'q21', question: 'Utility is _______ from usefulness.', options: ['Same as', 'Different', 'Equal to', 'Derived from'], correctIndex: 1, explanation: 'Utility = want satisfaction; Usefulness = beneficial quality only.' },
        { id: 'q22', question: 'Marshall assumed MU of money to be _______.', options: ['Variable', 'Constant', 'Zero', 'Negative'], correctIndex: 1, explanation: 'Marshall assumed MUm remains constant for analysis.' },
        { id: 'q23', question: 'Disutility means MU is _______.', options: ['Maximum', 'Zero', 'Positive', 'Negative'], correctIndex: 3, explanation: 'Negative MU indicates dissatisfaction or disutility.' },
        { id: 'q24', question: 'Which approach uses Indifference Curve?', options: ['Cardinal', 'Ordinal', 'Classical', 'Keynesian'], correctIndex: 1, explanation: 'Ordinal approach uses IC analysis developed by Hicks-Allen.' },
        { id: 'q25', question: 'Law of Substitution is another name for _______.', options: ['Law of DMU', 'Law of Equi-Marginal Utility', 'Law of Demand', 'Law of Supply'], correctIndex: 1, explanation: 'Consumer substitutes goods to equalize MU per rupee.' },
        { id: 'q26', question: 'If MUx/Px > MUy/Py, consumer should buy more of _______.', options: ['Good X', 'Good Y', 'Both equally', 'Neither'], correctIndex: 0, explanation: 'Higher MU per rupee means better value, buy more of X.' },
        { id: 'q27', question: 'For a drunkard, MU of alcohol _______.', options: ['Decreases', 'Increases', 'Is zero', 'Is negative'], correctIndex: 1, explanation: 'Drunkards experience increasing MU - exception to DMU.' },
        { id: 'q28', question: 'At consumer equilibrium, satisfaction is _______.', options: ['Minimum', 'Maximum', 'Zero', 'Negative'], correctIndex: 1, explanation: 'Equilibrium point gives maximum possible satisfaction.' },
        { id: 'q29', question: 'Gossen was a _______ economist.', options: ['British', 'American', 'German', 'French'], correctIndex: 2, explanation: 'Hermann Heinrich Gossen was a German economist (1810-1858).' },
        { id: 'q30', question: 'Utility has _______ relationship with demand.', options: ['No', 'Inverse', 'Direct', 'Complex'], correctIndex: 2, explanation: 'Higher utility leads to higher demand for a good.' }
      ],
      reels: [
        { id: 'r1', title: 'Utility', content: 'Want satisfying power.\nSubjective = Person to person different.', color: getReelColor(0) },
        { id: 'r2', title: 'TU vs MU', content: 'TU = Total satisfaction.\nMU = Extra satisfaction from ONE more unit.', color: getReelColor(1) },
        { id: 'r3', title: 'MU Formula', content: 'MU = TUn - TUn-1\nOR MU = ΔTU/ΔQ', color: getReelColor(2) },
        { id: 'r4', title: 'Law of DMU', content: 'More you consume,\nLess satisfaction from each extra unit.\nGossen\'s First Law', color: getReelColor(3) },
        { id: 'r5', title: 'TU Max Point', content: 'When MU = 0\nPoint of Satiety\nFull satisfaction achieved', color: getReelColor(4) },
        { id: 'r6', title: 'TU Falls', content: 'When MU becomes Negative.\nOver-consumption!\nDisutility zone', color: getReelColor(5) },
        { id: 'r7', title: 'Cardinal', content: 'Marshall: Utility in Utils\nCan be measured as numbers\n10 utils, 8 utils...', color: getReelColor(6) },
        { id: 'r8', title: 'Ordinal', content: 'Hicks-Allen: Utility ranked\n1st, 2nd, 3rd...\nCannot measure "how much"', color: getReelColor(7) },
        { id: 'r9', title: 'Gossen', content: 'German economist\n1st Law = DMU\n2nd Law = Equi-Marginal', color: getReelColor(8) },
        { id: 'r10', title: 'Utils', content: 'Imaginary unit\nCardinal measurement\n1 apple = 10 utils', color: getReelColor(9) },
        { id: 'r11', title: 'DMU Assumptions', content: 'Homogeneous units\nContinuous consumption\nNo time gap\nNormal consumer', color: getReelColor(0) },
        { id: 'r12', title: 'DMU Exceptions', content: 'Hobbies, Misers\nDrunkards, Music lovers\nMU increases!', color: getReelColor(1) },
        { id: 'r13', title: 'TU Curve', content: 'Inverted U shape\nRises → Max → Falls\nPositive → Zero → Negative MU', color: getReelColor(2) },
        { id: 'r14', title: 'MU Curve', content: 'Downward sloping\nStarts high, crosses zero\nGoes negative', color: getReelColor(3) },
        { id: 'r15', title: 'TU-MU Relationship', content: 'MU > 0 = TU rises\nMU = 0 = TU max\nMU < 0 = TU falls', color: getReelColor(4) },
        { id: 'r16', title: 'Initial Utility', content: 'First unit = Maximum MU\nHighest satisfaction\nStarts the curve', color: getReelColor(5) },
        { id: 'r17', title: 'Zero Utility', content: 'MU = 0\nPoint of satiety\nNeither gain nor loss', color: getReelColor(6) },
        { id: 'r18', title: 'Negative Utility', content: 'MU < 0 = Disutility\nOver-consumption\nHarm from more', color: getReelColor(7) },
        { id: 'r19', title: 'Equi-Marginal Law', content: 'MUx/Px = MUy/Py = MUm\nEqual MU per rupee\nMaximum satisfaction', color: getReelColor(8) },
        { id: 'r20', title: 'Consumer Equilibrium', content: 'Cardinal: MU/P equal\nNo reallocation helps\nOptimal spending', color: getReelColor(9) },
        { id: 'r21', title: 'Utility vs Usefulness', content: 'Utility = Want satisfaction\nUsefulness = Beneficial\nCigarette has utility!', color: getReelColor(0) },
        { id: 'r22', title: 'Subjective Nature', content: 'Varies person to person\nSame good, different utility\nDepends on needs', color: getReelColor(1) },
        { id: 'r23', title: 'Why DMU Works', content: 'Wants are satiable\nIntensity decreases\nPsychological factor', color: getReelColor(2) },
        { id: 'r24', title: 'Cardinal vs Ordinal', content: 'Cardinal = Measure (10)\nOrdinal = Rank (1st)\nMarshall vs Hicks', color: getReelColor(3) },
        { id: 'r25', title: 'TU Formula', content: 'TU = Σ MU\nSum of all MUs\nTotal = Adding parts', color: getReelColor(4) },
        { id: 'r26', title: 'MUm', content: 'Marginal Utility of Money\nMarshall: Constant\nSpending one more rupee', color: getReelColor(5) },
        { id: 'r27', title: 'Substitution Rule', content: 'If MUx/Px > MUy/Py\nBuy more X, less Y\nRebalance spending', color: getReelColor(6) },
        { id: 'r28', title: 'Law Names', content: 'DMU = Gossen\'s 1st\nEqui-Marginal = Gossen\'s 2nd\nAlso: Law of Substitution', color: getReelColor(7) },
        { id: 'r29', title: 'Satiety Point', content: 'Full satisfaction\nNo more want\nMU crosses zero', color: getReelColor(8) },
        { id: 'r30', title: 'Key Formulas', content: 'MU = ΔTU/ΔQ\nTU = ΣMU\nEquilibrium: MU/P equal', color: getReelColor(9) }
      ]
    },
    {
      id: 'eco3a',
      title: '3A. Demand Analysis',
      description: 'Law of Demand, Demand Schedule, Demand Curve.',
      summary: '**Demand**: Desire + Ability + Willingness to buy.\n**Law of Demand**: Price ↑ = Demand ↓ (Inverse relationship).\n**Exceptions**: Giffen goods, Veblen goods, Emergencies.',
      detailedNotes: '### 1. Meaning of Demand\n**Demand** = Desire backed by:\n* Ability to pay\n* Willingness to pay\n* At a given price, at a given time.\n\n### 2. Demand Function\nDx = f(Px, Pr, Y, T, E, N, G)\nWhere:\n* Px = Price of commodity X\n* Pr = Price of related goods\n* Y = Income\n* T = Tastes & preferences\n* E = Expectations\n* N = Number of consumers\n* G = Government policy\n\n### 3. Law of Demand\n**Statement**: "Other things remaining constant, when price rises, quantity demanded falls and vice versa."\n**Assumptions**: Income constant, Tastes constant, Prices of related goods constant.\n\n### 4. Demand Schedule\n**Individual Demand Schedule**: One consumer\'s demand at different prices.\n**Market Demand Schedule**: Total demand of all consumers.\n\n### 5. Demand Curve\n* Slopes downward from left to right (Negative slope).\n* Shows inverse relationship between price and quantity.\n\n### 6. Exceptions to Law of Demand\n* **Giffen Goods**: Inferior goods (Increase in price → Increase in demand). Example: Coarse grains.\n* **Veblen Goods**: Prestige/Status goods. Example: Diamonds, Luxury cars.\n* **Speculation**: Expected future price rise.\n* **Emergency**: War, Pandemic.\n* **Necessities**: Medicine, Essential goods.',
      flashcards: [
        { id: 'f1', front: 'What is Demand?', back: 'Desire backed by ability to pay and willingness to pay at a given price and time. All three elements must be present.' },
        { id: 'f2', front: 'What is the Law of Demand?', back: 'Other things being equal, when price rises, quantity demanded falls and vice versa. Shows inverse relationship between price and demand.' },
        { id: 'f3', front: 'What are Giffen Goods?', back: 'Inferior goods where demand increases with price. Named after Sir Robert Giffen. Examples: Bajra, Jowar, coarse grains for poor families.' },
        { id: 'f4', front: 'What are Veblen Goods?', back: 'Prestige/status goods bought for showing off. Named after Thorstein Veblen. Examples: Diamonds, luxury cars, designer brands.' },
        { id: 'f5', front: 'Why does Demand Curve slope downward?', back: '1) Law of DMU 2) Income effect 3) Substitution effect 4) New buyers at lower price 5) Multiple uses at lower price.' },
        { id: 'f6', front: 'What is Demand Function?', back: 'Dx = f(Px, Pr, Y, T, E, N, G) where Px=own price, Pr=related goods price, Y=income, T=tastes, E=expectations, N=consumers, G=govt policy.' },
        { id: 'f7', front: 'What is Individual Demand?', back: 'Quantity of a commodity that an individual consumer is willing and able to buy at various prices during a given time period.' },
        { id: 'f8', front: 'What is Market Demand?', back: 'Total quantity demanded by all consumers in the market at various prices. Sum of all individual demands: Dm = D1 + D2 + D3 + ...' },
        { id: 'f9', front: 'What is a Demand Schedule?', back: 'A table showing different quantities of a commodity demanded at different prices during a given period. Can be individual or market.' },
        { id: 'f10', front: 'What is a Demand Curve?', back: 'Graphical representation of demand schedule. X-axis = Quantity, Y-axis = Price. Slopes downward (negative slope) left to right.' },
        { id: 'f11', front: 'List 5 exceptions to Law of Demand.', back: '1) Giffen goods 2) Veblen goods 3) Speculation 4) Emergency/War 5) Necessities 6) Ignorance 7) Future expectations.' },
        { id: 'f12', front: 'What is Substitution Effect?', back: 'When price of a good rises, consumers substitute it with cheaper alternatives. When price falls, they buy more of it instead of substitutes.' },
        { id: 'f13', front: 'What is Income Effect?', back: 'When price falls, real income/purchasing power rises, so consumer can buy more. When price rises, real income falls, so buys less.' },
        { id: 'f14', front: 'What are assumptions of Law of Demand?', back: '1) Income constant 2) Tastes constant 3) Prices of related goods constant 4) No expectation of future price change 5) No change in population.' },
        { id: 'f15', front: 'What is "Ceteris Paribus"?', back: 'Latin phrase meaning "other things being equal" or "other things remaining constant". Essential assumption in Law of Demand.' },
        { id: 'f16', front: 'Difference: Desire vs Demand?', back: 'Desire = mere wish without purchasing power. Demand = desire + ability + willingness to pay at given price. Demand is effective desire.' },
        { id: 'f17', front: 'What are Complementary Goods?', back: 'Goods used together. If price of one rises, demand for both falls. Examples: Car-Petrol, Tea-Sugar, Pen-Ink, Bread-Butter.' },
        { id: 'f18', front: 'What are Substitute Goods?', back: 'Goods that can replace each other. If price of one rises, demand for other rises. Examples: Tea-Coffee, Pepsi-Coke, Bus-Train.' },
        { id: 'f19', front: 'What is Extension of Demand?', back: 'Increase in quantity demanded due to FALL IN PRICE (movement along the same demand curve). Also called "increase in quantity demanded".' },
        { id: 'f20', front: 'What is Contraction of Demand?', back: 'Decrease in quantity demanded due to RISE IN PRICE (movement along the same demand curve). Also called "decrease in quantity demanded".' },
        { id: 'f21', front: 'What is Increase in Demand?', back: 'Rightward SHIFT of entire demand curve due to factors other than price (income rise, taste change, etc.). More demanded at SAME price.' },
        { id: 'f22', front: 'What is Decrease in Demand?', back: 'Leftward SHIFT of entire demand curve due to factors other than price (income fall, taste change, etc.). Less demanded at SAME price.' },
        { id: 'f23', front: 'Movement vs Shift in Demand Curve?', back: 'Movement = along curve due to price change (extension/contraction). Shift = entire curve moves due to other factors (increase/decrease).' },
        { id: 'f24', front: 'Who discovered Giffen Paradox?', back: 'Sir Robert Giffen (1837-1910), a Scottish economist and statistician. Observed it during Irish Potato Famine.' },
        { id: 'f25', front: 'Who explained Veblen Effect?', back: 'Thorstein Veblen (1857-1929), American economist. Wrote "Theory of the Leisure Class" (1899). Also called Snob Effect.' },
        { id: 'f26', front: 'Why is demand curve negatively sloped?', back: 'Due to inverse relationship: as price rises, quantity demanded falls and vice versa. Slope = ΔP/ΔQ is negative.' },
        { id: 'f27', front: 'What is Speculation exception?', back: 'When people expect prices to rise further, they buy more even at high prices (stock market, real estate). Demand rises with price.' },
        { id: 'f28', front: 'What is Emergency exception?', back: 'During war, pandemic, natural disaster, people buy more essentials regardless of price. Fear drives demand, not price.' },
        { id: 'f29', front: 'What is Bandwagon Effect?', back: 'People buy more because others are buying (fashion, trends). Demand increases as more people adopt the product.' },
        { id: 'f30', front: 'What is Snob Effect?', back: 'Opposite of bandwagon - demand decreases when many people buy it. People want exclusivity (limited editions, luxury goods).' }
      ],
      mcqs: [
        { id: 'q1', question: 'Demand curve slopes _______ due to inverse relationship.', options: ['Upward', 'Downward', 'Horizontal', 'Vertical'], correctIndex: 1, explanation: 'Shows price and quantity demanded move in opposite directions.' },
        { id: 'q2', question: '_______ goods are an exception to law of demand.', options: ['Normal', 'Inferior', 'Giffen', 'Luxury'], correctIndex: 2, explanation: 'Giffen goods show positive price-demand relationship.' },
        { id: 'q3', question: 'Diamonds are _______ goods.', options: ['Giffen', 'Veblen', 'Normal', 'Inferior'], correctIndex: 1, explanation: 'Bought for prestige/status - demand rises with price.' },
        { id: 'q4', question: 'Law of Demand shows _______ relationship.', options: ['Direct', 'Inverse', 'No', 'Positive'], correctIndex: 1, explanation: 'Price up = Demand down, and vice versa.' },
        { id: 'q5', question: 'Demand = Desire + _______ + Willingness.', options: ['Money', 'Ability', 'Need', 'Want'], correctIndex: 1, explanation: 'Ability to pay is essential component of demand.' },
        { id: 'q6', question: 'Ceteris Paribus means _______.', options: ['Everything changes', 'Other things constant', 'Price changes', 'Demand changes'], correctIndex: 1, explanation: 'Latin phrase meaning other factors remain unchanged.' },
        { id: 'q7', question: 'Market demand is _______ of individual demands.', options: ['Product', 'Ratio', 'Sum', 'Difference'], correctIndex: 2, explanation: 'Dm = D1 + D2 + D3 + ... (horizontal summation).' },
        { id: 'q8', question: 'Demand curve is drawn with _______ on Y-axis.', options: ['Quantity', 'Income', 'Price', 'Time'], correctIndex: 2, explanation: 'Convention: Price on Y-axis, Quantity on X-axis.' },
        { id: 'q9', question: 'Giffen Paradox was observed during _______.', options: ['World War', 'Irish Potato Famine', 'Great Depression', 'French Revolution'], correctIndex: 1, explanation: 'Robert Giffen observed poor Irish buying more potatoes when price rose.' },
        { id: 'q10', question: 'Tea and Coffee are _______ goods.', options: ['Complementary', 'Substitute', 'Giffen', 'Inferior'], correctIndex: 1, explanation: 'Can replace each other - if tea price rises, coffee demand rises.' },
        { id: 'q11', question: 'Car and Petrol are _______ goods.', options: ['Substitute', 'Complementary', 'Independent', 'Inferior'], correctIndex: 1, explanation: 'Used together - if petrol price rises, car demand may fall.' },
        { id: 'q12', question: 'Movement along demand curve is due to change in _______.', options: ['Income', 'Taste', 'Own price', 'Population'], correctIndex: 2, explanation: 'Price change causes extension or contraction.' },
        { id: 'q13', question: 'Shift in demand curve is due to change in _______.', options: ['Own price', 'Quantity', 'Other factors', 'Supply'], correctIndex: 2, explanation: 'Income, taste, related goods prices cause shift.' },
        { id: 'q14', question: 'Extension of demand means _______.', options: ['Leftward shift', 'Rightward shift', 'Downward movement', 'Upward movement'], correctIndex: 2, explanation: 'Price falls → move down along curve → more quantity.' },
        { id: 'q15', question: 'Contraction of demand occurs when price _______.', options: ['Falls', 'Rises', 'Is constant', 'Is zero'], correctIndex: 1, explanation: 'Price rises → move up along curve → less quantity.' },
        { id: 'q16', question: 'Veblen effect is also called _______.', options: ['Giffen effect', 'Snob effect', 'Income effect', 'Price effect'], correctIndex: 1, explanation: 'Buying for prestige/showing off - snob appeal.' },
        { id: 'q17', question: 'Negative slope of demand curve indicates _______ relationship.', options: ['Direct', 'Inverse', 'No', 'Complex'], correctIndex: 1, explanation: 'Negative slope = variables move in opposite directions.' },
        { id: 'q18', question: 'During speculation, demand _______ with price.', options: ['Falls', 'Rises', 'Remains same', 'Becomes zero'], correctIndex: 1, explanation: 'Expecting further price rise, people buy more now.' },
        { id: 'q19', question: 'Income effect explains _______.', options: ['Why supply rises', 'Why demand curves slope down', 'Why price is fixed', 'Why cost rises'], correctIndex: 1, explanation: 'Price fall = real income rises = buy more.' },
        { id: 'q20', question: 'Substitution effect occurs when _______.', options: ['Income changes', 'Price of good changes', 'Population changes', 'Technology changes'], correctIndex: 1, explanation: 'Price rise = substitute with cheaper alternatives.' },
        { id: 'q21', question: 'Bandwagon effect means buying because _______.', options: ['Price is low', 'Others are buying', 'Quality is good', 'It is necessary'], correctIndex: 1, explanation: 'Following trends and what others buy.' },
        { id: 'q22', question: 'Demand for medicine during illness is _______.', options: ['Elastic', 'Inelastic', 'Unitary', 'Zero'], correctIndex: 1, explanation: 'Necessity - will buy regardless of price (exception to law).' },
        { id: 'q23', question: 'In demand function, Y represents _______.', options: ['Yield', 'Yearly', 'Income', 'Yesterday'], correctIndex: 2, explanation: 'Dx = f(Px, Pr, Y, T, E, N, G) where Y = Income.' },
        { id: 'q24', question: 'Effective demand means _______.', options: ['Future demand', 'Desire backed by purchasing power', 'Supply equals demand', 'Government demand'], correctIndex: 1, explanation: 'Demand with ability and willingness to pay.' },
        { id: 'q25', question: 'Inferior goods have _______ income effect.', options: ['Positive', 'Negative', 'Zero', 'Infinite'], correctIndex: 1, explanation: 'As income rises, demand for inferior goods falls.' },
        { id: 'q26', question: 'Normal goods have _______ income effect.', options: ['Negative', 'Positive', 'Zero', 'Undefined'], correctIndex: 1, explanation: 'As income rises, demand for normal goods rises.' },
        { id: 'q27', question: 'Who wrote "Theory of the Leisure Class"?', options: ['Marshall', 'Giffen', 'Veblen', 'Keynes'], correctIndex: 2, explanation: 'Thorstein Veblen in 1899 - explained conspicuous consumption.' },
        { id: 'q28', question: 'Rightward shift of demand curve means _______.', options: ['Contraction', 'Extension', 'Increase in demand', 'Decrease in demand'], correctIndex: 2, explanation: 'More quantity demanded at same price = increase.' },
        { id: 'q29', question: 'During war, demand for essentials _______.', options: ['Falls', 'Rises regardless of price', 'Remains same', 'Becomes elastic'], correctIndex: 1, explanation: 'Emergency exception - fear drives demand, not price.' },
        { id: 'q30', question: 'Demand schedule shows relationship between _______.', options: ['Income and demand', 'Price and quantity demanded', 'Supply and demand', 'Cost and price'], correctIndex: 1, explanation: 'Tabular representation of price-quantity relationship.' }
      ],
      reels: [
        { id: 'r1', title: 'Demand', content: 'Desire + Ability + Willingness.\nAt given price & time.\nAll 3 must be present!', color: getReelColor(0) },
        { id: 'r2', title: 'Law of Demand', content: 'Price ↑ Demand ↓\nPrice ↓ Demand ↑\n(Inverse Relationship)', color: getReelColor(1) },
        { id: 'r3', title: 'Demand Curve', content: 'Slopes Downward.\nLeft to Right.\nNegative Slope.', color: getReelColor(2) },
        { id: 'r4', title: 'Giffen Goods', content: 'Price ↑ Demand ↑\nInferior essential goods.\nSir Robert Giffen\nBajra, Jowar', color: getReelColor(3) },
        { id: 'r5', title: 'Veblen Goods', content: 'Prestige/Snob goods.\nBought for status.\nThorstein Veblen\nDiamonds, Luxury', color: getReelColor(4) },
        { id: 'r6', title: 'Exceptions to Law', content: 'Giffen, Veblen\nEmergency, Speculation\nNecessities, Ignorance', color: getReelColor(5) },
        { id: 'r7', title: 'Demand Function', content: 'Dx = f(Px, Pr, Y, T, E, N, G)\nOwn price, Related, Income\nTaste, Expect, Number, Govt', color: getReelColor(6) },
        { id: 'r8', title: 'Ceteris Paribus', content: 'Other things constant.\nLatin phrase.\nKey assumption!', color: getReelColor(7) },
        { id: 'r9', title: 'Individual vs Market', content: 'Individual = One buyer\nMarket = All buyers\nDm = ΣDi', color: getReelColor(8) },
        { id: 'r10', title: 'Why Downward Slope?', content: '1. Law of DMU\n2. Income effect\n3. Substitution effect\n4. New buyers\n5. Multiple uses', color: getReelColor(9) },
        { id: 'r11', title: 'Income Effect', content: 'Price ↓ = Real income ↑\nBuy more!\nPrice ↑ = Real income ↓\nBuy less!', color: getReelColor(0) },
        { id: 'r12', title: 'Substitution Effect', content: 'Price ↑ = Switch to cheaper\nPrice ↓ = Switch to this good\nAlternatives matter!', color: getReelColor(1) },
        { id: 'r13', title: 'Movement vs Shift', content: 'Movement = Along curve\n(Price change)\nShift = Entire curve moves\n(Other factors)', color: getReelColor(2) },
        { id: 'r14', title: 'Extension', content: 'Price FALLS\nMove DOWN curve\nMore quantity demanded\nSame curve!', color: getReelColor(3) },
        { id: 'r15', title: 'Contraction', content: 'Price RISES\nMove UP curve\nLess quantity demanded\nSame curve!', color: getReelColor(4) },
        { id: 'r16', title: 'Increase in Demand', content: 'Curve shifts RIGHT\nMore at SAME price\nIncome ↑, Taste changes\nNew curve!', color: getReelColor(5) },
        { id: 'r17', title: 'Decrease in Demand', content: 'Curve shifts LEFT\nLess at SAME price\nIncome ↓, Taste changes\nNew curve!', color: getReelColor(6) },
        { id: 'r18', title: 'Complements', content: 'Used TOGETHER\nCar-Petrol, Tea-Sugar\nOne ↑ price = Both ↓ demand', color: getReelColor(7) },
        { id: 'r19', title: 'Substitutes', content: 'REPLACE each other\nTea-Coffee, Pepsi-Coke\nOne ↑ price = Other ↑ demand', color: getReelColor(8) },
        { id: 'r20', title: 'Desire vs Demand', content: 'Desire = Just a wish\nDemand = Desire + Money\nEffective desire!', color: getReelColor(9) },
        { id: 'r21', title: 'Assumptions', content: 'Income constant\nTastes constant\nRelated prices constant\nNo expectations', color: getReelColor(0) },
        { id: 'r22', title: 'Normal Goods', content: 'Income ↑ Demand ↑\nPositive income effect\nMost goods are normal!', color: getReelColor(1) },
        { id: 'r23', title: 'Inferior Goods', content: 'Income ↑ Demand ↓\nNegative income effect\nSwitch to better quality', color: getReelColor(2) },
        { id: 'r24', title: 'Speculation', content: 'Expect price to rise more\nBuy MORE at high price\nStock market, Real estate', color: getReelColor(3) },
        { id: 'r25', title: 'Emergency', content: 'War, Pandemic, Disaster\nBuy essentials at ANY price\nFear drives demand', color: getReelColor(4) },
        { id: 'r26', title: 'Bandwagon Effect', content: 'Buy because OTHERS buy\nFollow the trend\nFashion, Social media', color: getReelColor(5) },
        { id: 'r27', title: 'Snob Effect', content: 'Buy because OTHERS don\'t\nWant exclusivity\nLimited editions', color: getReelColor(6) },
        { id: 'r28', title: 'Demand Schedule', content: 'Table format\nPrice vs Quantity\nPlotted → Demand Curve', color: getReelColor(7) },
        { id: 'r29', title: 'Graph Convention', content: 'X-axis = Quantity (Q)\nY-axis = Price (P)\nOpposite of math!', color: getReelColor(8) },
        { id: 'r30', title: 'Key Economists', content: 'Giffen: Inferior goods\nVeblen: Prestige goods\nMarshall: Law of Demand', color: getReelColor(9) }
      ]
    },
    {
      id: 'eco3b',
      title: '3B. Elasticity of Demand',
      description: 'Price, Income, and Cross Elasticity explained.',
      summary: '**Elasticity**: Responsiveness of demand to change in price/income.\n**Types**: Price (Ed), Income (Ey), Cross (Ec).\n**Formula**: Ed = %ΔQd / %ΔP',
      detailedNotes: '### 1. Meaning of Elasticity\n**Elasticity of Demand** = Degree of responsiveness of quantity demanded to change in its determinants.\n\n### 2. Price Elasticity of Demand (Ed)\n**Formula**: Ed = %ΔQd / %ΔP = (ΔQ/Q) / (ΔP/P)\n\n**Types**:\n* **Perfectly Elastic (Ed = ∞)**: Horizontal demand curve.\n* **Perfectly Inelastic (Ed = 0)**: Vertical demand curve.\n* **Unitary Elastic (Ed = 1)**: Rectangular hyperbola.\n* **Relatively Elastic (Ed > 1)**: Flatter curve. Luxury goods.\n* **Relatively Inelastic (Ed < 1)**: Steeper curve. Necessities.\n\n### 3. Income Elasticity (Ey)\n**Formula**: Ey = %ΔQd / %ΔY\n* **Positive (Ey > 0)**: Normal goods.\n* **Negative (Ey < 0)**: Inferior goods.\n* **Zero (Ey = 0)**: Neutral goods.\n\n### 4. Cross Elasticity (Ec)\n**Formula**: Ec = %ΔQx / %ΔPy\n* **Positive**: Substitute goods (Tea & Coffee).\n* **Negative**: Complementary goods (Car & Petrol).\n* **Zero**: Unrelated goods.\n\n### 5. Factors Affecting Elasticity\n* Nature of commodity (Necessity vs Luxury)\n* Availability of substitutes\n* Proportion of income spent\n* Time period\n* Habits',
      flashcards: [
        { id: 'f1', front: 'What is Elasticity of Demand?', back: 'Degree of responsiveness of quantity demanded to changes in its determinants (price, income, price of related goods).' },
        { id: 'f2', front: 'Formula for Price Elasticity of Demand (Ed)?', back: 'Ed = %ΔQd / %ΔP = (ΔQ/Q) ÷ (ΔP/P) = (ΔQ/ΔP) × (P/Q). Always negative but expressed as absolute value.' },
        { id: 'f3', front: 'What does Ed = ∞ mean?', back: 'Perfectly Elastic demand. Horizontal demand curve. Infinite demand at given price, zero at any other price.' },
        { id: 'f4', front: 'What does Ed = 0 mean?', back: 'Perfectly Inelastic demand. Vertical demand curve. Quantity remains same regardless of price change (e.g., life-saving drugs).' },
        { id: 'f5', front: 'What does Ed = 1 mean?', back: 'Unitary Elastic demand. Rectangular hyperbola. %change in Qd = %change in P. Total expenditure remains constant.' },
        { id: 'f6', front: 'What does Ed > 1 mean?', back: 'Relatively Elastic demand. Flatter curve. %ΔQd > %ΔP. Luxury goods, goods with substitutes.' },
        { id: 'f7', front: 'What does Ed < 1 mean?', back: 'Relatively Inelastic demand. Steeper curve. %ΔQd < %ΔP. Necessities, habit-forming goods.' },
        { id: 'f8', front: 'What is Income Elasticity of Demand (Ey)?', back: 'Responsiveness of quantity demanded to change in consumer\'s income. Ey = %ΔQd / %ΔY.' },
        { id: 'f9', front: 'Positive Income Elasticity indicates?', back: 'Normal goods. As income rises, demand rises. Ey > 0.' },
        { id: 'f10', front: 'Negative Income Elasticity indicates?', back: 'Inferior goods. As income rises, demand falls (switch to better quality). Ey < 0.' },
        { id: 'f11', front: 'What is Cross Elasticity of Demand (Ec)?', back: 'Responsiveness of demand for good X to change in price of good Y. Ec = %ΔQx / %ΔPy.' },
        { id: 'f12', front: 'Positive Cross Elasticity indicates?', back: 'Substitute goods. Price of Y rises → Demand for X rises. Example: Tea-Coffee, Pepsi-Coke.' },
        { id: 'f13', front: 'Negative Cross Elasticity indicates?', back: 'Complementary goods. Price of Y rises → Demand for X falls. Example: Car-Petrol, Bread-Butter.' },
        { id: 'f14', front: 'Zero Cross Elasticity indicates?', back: 'Unrelated goods. No relationship. Example: Books and Shoes.' },
        { id: 'f15', front: 'What is Total Expenditure/Outlay Method?', back: 'Method to find elasticity: Compare total expenditure (P × Q) before and after price change. TE↑ when P↓ = Elastic.' },
        { id: 'f16', front: 'Relationship: Ed > 1 and Total Expenditure?', back: 'When Ed > 1 (Elastic): Price ↓ = TE ↑, Price ↑ = TE ↓. Price and TE move in opposite directions.' },
        { id: 'f17', front: 'Relationship: Ed < 1 and Total Expenditure?', back: 'When Ed < 1 (Inelastic): Price ↓ = TE ↓, Price ↑ = TE ↑. Price and TE move in same direction.' },
        { id: 'f18', front: 'Relationship: Ed = 1 and Total Expenditure?', back: 'When Ed = 1 (Unitary): Total Expenditure remains constant regardless of price change. P × Q = constant.' },
        { id: 'f19', front: 'What is Point Elasticity Method?', back: 'Ed at a specific point on demand curve. Ed = (Lower segment / Upper segment) or Ed = P/Q × 1/slope.' },
        { id: 'f20', front: 'What is Arc Elasticity Method?', back: 'Ed between two points. Uses average P and Q. Ed = (ΔQ/ΔP) × ((P1+P2)/2) / ((Q1+Q2)/2).' },
        { id: 'f21', front: 'Who introduced the concept of Elasticity?', back: 'Alfred Marshall in his book "Principles of Economics" (1890). He introduced price elasticity of demand.' },
        { id: 'f22', front: 'List 5 factors affecting Price Elasticity.', back: '1) Nature of commodity 2) Availability of substitutes 3) Proportion of income 4) Time period 5) Habits 6) Number of uses.' },
        { id: 'f23', front: 'Why do necessities have inelastic demand?', back: 'Essential for living, no substitutes, must be bought regardless of price. Examples: Salt, Medicine, Water.' },
        { id: 'f24', front: 'Why do luxuries have elastic demand?', back: 'Not essential, purchase can be postponed, substitutes available. Examples: AC, Car, Foreign travel.' },
        { id: 'f25', front: 'How does time affect elasticity?', back: 'Short run = Inelastic (no time to adjust). Long run = Elastic (can find substitutes, change habits).' },
        { id: 'f26', front: 'What is Promotional Elasticity?', back: 'Responsiveness of demand to change in advertising/promotional expenditure. Ea = %ΔQd / %ΔA.' },
        { id: 'f27', front: 'What is the geometric method at midpoint?', back: 'At midpoint of linear demand curve, Ed = 1. Above midpoint Ed > 1, below midpoint Ed < 1.' },
        { id: 'f28', front: 'Elasticity at origin of demand curve?', back: 'At the point where demand curve meets Y-axis (price axis), Ed = ∞ (perfectly elastic).' },
        { id: 'f29', front: 'Elasticity at X-axis intercept?', back: 'At the point where demand curve meets X-axis (quantity axis), Ed = 0 (perfectly inelastic).' },
        { id: 'f30', front: 'What is Revenue and Elasticity relationship?', back: 'MR = AR(1 - 1/Ed). When Ed > 1, MR > 0. When Ed = 1, MR = 0. When Ed < 1, MR < 0.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Elasticity of demand for salt is _______.', options: ['Highly elastic', 'Unitary', 'Inelastic', 'Infinite'], correctIndex: 2, explanation: 'Salt is a necessity with no close substitutes - demand changes little with price.' },
        { id: 'q2', question: 'Perfectly inelastic demand curve is _______.', options: ['Horizontal', 'Vertical', 'Downward sloping', 'Upward sloping'], correctIndex: 1, explanation: 'Vertical line shows quantity remains same regardless of price (Ed = 0).' },
        { id: 'q3', question: 'Tea and Coffee have _______ cross elasticity.', options: ['Positive', 'Negative', 'Zero', 'Infinite'], correctIndex: 0, explanation: 'Substitutes have positive cross elasticity - one\'s price up, other\'s demand up.' },
        { id: 'q4', question: 'Formula for price elasticity of demand is _______.', options: ['%ΔP / %ΔQd', '%ΔQd / %ΔP', 'ΔQ × ΔP', 'Q / P'], correctIndex: 1, explanation: 'Ed = Percentage change in Qd divided by percentage change in P.' },
        { id: 'q5', question: 'Ed = 1 means demand curve is _______.', options: ['Horizontal', 'Vertical', 'Rectangular hyperbola', 'Straight line'], correctIndex: 2, explanation: 'Unitary elastic demand has rectangular hyperbola shape (P × Q = constant).' },
        { id: 'q6', question: 'Demand for luxury goods is generally _______.', options: ['Inelastic', 'Elastic', 'Unitary', 'Zero'], correctIndex: 1, explanation: 'Luxuries have substitutes and purchase can be postponed - highly responsive to price.' },
        { id: 'q7', question: 'Car and Petrol have _______ cross elasticity.', options: ['Positive', 'Negative', 'Zero', 'Unity'], correctIndex: 1, explanation: 'Complements have negative cross elasticity - petrol price up, car demand down.' },
        { id: 'q8', question: 'Who introduced the concept of elasticity?', options: ['Adam Smith', 'Marshall', 'Keynes', 'Ricardo'], correctIndex: 1, explanation: 'Alfred Marshall introduced elasticity in Principles of Economics (1890).' },
        { id: 'q9', question: 'When Ed > 1, price fall leads to _______ in total expenditure.', options: ['Decrease', 'Increase', 'No change', 'Fluctuation'], correctIndex: 1, explanation: 'Elastic demand: price and total expenditure move in opposite directions.' },
        { id: 'q10', question: 'When Ed < 1, price rise leads to _______ in total expenditure.', options: ['Decrease', 'Increase', 'No change', 'Zero'], correctIndex: 1, explanation: 'Inelastic demand: price and total expenditure move in same direction.' },
        { id: 'q11', question: 'Perfectly elastic demand curve is _______.', options: ['Vertical', 'Horizontal', 'Downward', 'Curved'], correctIndex: 1, explanation: 'Horizontal line shows Ed = ∞, infinite demand at one price only.' },
        { id: 'q12', question: 'Demand for habit-forming goods is _______.', options: ['Elastic', 'Inelastic', 'Unitary', 'Infinite'], correctIndex: 1, explanation: 'Addiction makes demand unresponsive to price (cigarettes, alcohol).' },
        { id: 'q13', question: 'Income elasticity for inferior goods is _______.', options: ['Positive', 'Negative', 'Zero', 'Unity'], correctIndex: 1, explanation: 'As income rises, demand for inferior goods falls (Ey < 0).' },
        { id: 'q14', question: 'In long run, demand becomes more _______.', options: ['Inelastic', 'Elastic', 'Unitary', 'Zero'], correctIndex: 1, explanation: 'Long run allows time to find substitutes and change consumption patterns.' },
        { id: 'q15', question: 'At midpoint of linear demand curve, Ed = _______.', options: ['Zero', 'Infinity', 'One', 'Greater than one'], correctIndex: 2, explanation: 'Geometric property: midpoint has unitary elasticity.' },
        { id: 'q16', question: 'Goods with many substitutes have _______ elasticity.', options: ['Low', 'High', 'Zero', 'Negative'], correctIndex: 1, explanation: 'More substitutes = easy to switch = higher elasticity.' },
        { id: 'q17', question: 'Total expenditure method was given by _______.', options: ['Keynes', 'Marshall', 'Hicks', 'Pigou'], correctIndex: 1, explanation: 'Marshall developed the total outlay/expenditure method.' },
        { id: 'q18', question: 'Arc elasticity uses _______ values.', options: ['Initial', 'Final', 'Average', 'Maximum'], correctIndex: 2, explanation: 'Arc method uses average of initial and final P and Q values.' },
        { id: 'q19', question: 'Point elasticity formula: Ed = _______.', options: ['Upper/Lower segment', 'Lower/Upper segment', 'P × Q', 'Q/P'], correctIndex: 1, explanation: 'Ed = Lower segment ÷ Upper segment on demand curve.' },
        { id: 'q20', question: 'Demand for life-saving drugs is _______.', options: ['Elastic', 'Inelastic', 'Unitary', 'Infinite'], correctIndex: 1, explanation: 'Must be bought at any price - nearly perfectly inelastic.' },
        { id: 'q21', question: 'MR = 0 when Ed = _______.', options: ['Zero', 'Infinity', 'One', 'Greater than one'], correctIndex: 2, explanation: 'MR = AR(1 - 1/Ed). When Ed = 1, MR = AR(1-1) = 0.' },
        { id: 'q22', question: 'Cross elasticity of unrelated goods is _______.', options: ['Positive', 'Negative', 'Zero', 'Infinite'], correctIndex: 2, explanation: 'No relationship between unrelated goods (books and shoes).' },
        { id: 'q23', question: 'Proportion of income spent affects elasticity: Higher proportion = _______.', options: ['Less elastic', 'More elastic', 'Unitary', 'Zero'], correctIndex: 1, explanation: 'If good takes large share of income, price changes felt more.' },
        { id: 'q24', question: 'Ed at Y-axis intercept of demand curve = _______.', options: ['Zero', 'One', 'Infinity', 'Negative'], correctIndex: 2, explanation: 'At Y-axis (price axis), lower segment = full line, Ed = ∞.' },
        { id: 'q25', question: 'Ed at X-axis intercept of demand curve = _______.', options: ['Zero', 'One', 'Infinity', 'Undefined'], correctIndex: 0, explanation: 'At X-axis (quantity axis), lower segment = 0, Ed = 0.' },
        { id: 'q26', question: 'Ey > 1 indicates _______ goods.', options: ['Inferior', 'Necessities', 'Luxuries', 'Giffen'], correctIndex: 2, explanation: 'Luxury goods have income elasticity greater than 1.' },
        { id: 'q27', question: 'When MR is negative, Ed is _______.', options: ['Greater than 1', 'Less than 1', 'Equal to 1', 'Infinite'], correctIndex: 1, explanation: 'MR = AR(1 - 1/Ed). MR < 0 only when Ed < 1.' },
        { id: 'q28', question: 'Flatter demand curve indicates _______ elasticity.', options: ['Lower', 'Higher', 'Zero', 'Negative'], correctIndex: 1, explanation: 'Flatter curve = greater responsiveness = higher elasticity.' },
        { id: 'q29', question: 'Steeper demand curve indicates _______ elasticity.', options: ['Higher', 'Lower', 'Infinite', 'Unitary'], correctIndex: 1, explanation: 'Steeper curve = less responsive = lower elasticity.' },
        { id: 'q30', question: 'Elasticity of demand is always _______ in sign.', options: ['Positive', 'Negative', 'Zero', 'Variable'], correctIndex: 1, explanation: 'Due to inverse P-Q relationship, Ed is negative but expressed as absolute value.' }
      ],
      reels: [
        { id: 'r1', title: 'Elasticity', content: 'Responsiveness of Demand\nto Price/Income Change\n% response to % change', color: getReelColor(0) },
        { id: 'r2', title: 'Ed Formula', content: 'Ed = %ΔQd / %ΔP\nOR (ΔQ/Q) ÷ (ΔP/P)\nAlways use absolute value', color: getReelColor(1) },
        { id: 'r3', title: 'Ed = ∞', content: 'Perfectly Elastic\nHorizontal line\nSlightest ↑P = Zero demand', color: getReelColor(2) },
        { id: 'r4', title: 'Ed = 0', content: 'Perfectly Inelastic\nVertical line\nPrice change = No Q change\nLife-saving drugs', color: getReelColor(3) },
        { id: 'r5', title: 'Ed = 1', content: 'Unitary Elastic\nRectangular Hyperbola\n%ΔP = %ΔQd\nTE constant', color: getReelColor(4) },
        { id: 'r6', title: 'Ed > 1', content: 'Elastic / Sensitive\nFlatter curve\n%ΔQd > %ΔP\nLuxuries', color: getReelColor(5) },
        { id: 'r7', title: 'Ed < 1', content: 'Inelastic\nSteeper curve\n%ΔQd < %ΔP\nNecessities', color: getReelColor(6) },
        { id: 'r8', title: 'Income Ey', content: 'Ey = %ΔQd / %ΔY\nEy > 0 = Normal\nEy < 0 = Inferior', color: getReelColor(7) },
        { id: 'r9', title: 'Cross Ec', content: 'Ec = %ΔQx / %ΔPy\nEc > 0 = Substitutes\nEc < 0 = Complements\nEc = 0 = Unrelated', color: getReelColor(8) },
        { id: 'r10', title: 'Marshall', content: 'Introduced Elasticity\nPrinciples of Economics\n1890', color: getReelColor(9) },
        { id: 'r11', title: 'Total Expenditure', content: 'TE = P × Q\nEd>1: P↓TE↑, P↑TE↓\nEd<1: P↓TE↓, P↑TE↑\nEd=1: TE constant', color: getReelColor(0) },
        { id: 'r12', title: 'Point Method', content: 'Ed at ONE point\nEd = Lower/Upper segment\nOR P/Q × 1/slope', color: getReelColor(1) },
        { id: 'r13', title: 'Arc Method', content: 'Ed between TWO points\nUse average P & Q\nMore accurate', color: getReelColor(2) },
        { id: 'r14', title: 'Factors: Nature', content: 'Necessity = Inelastic\nLuxury = Elastic\nSalt vs Diamond', color: getReelColor(3) },
        { id: 'r15', title: 'Factors: Substitutes', content: 'More substitutes = Elastic\nFewer substitutes = Inelastic\nEasy to switch?', color: getReelColor(4) },
        { id: 'r16', title: 'Factors: Income %', content: 'High % of income = Elastic\nLow % of income = Inelastic\nFeel the pinch?', color: getReelColor(5) },
        { id: 'r17', title: 'Factors: Time', content: 'Short run = Inelastic\nLong run = Elastic\nTime to adjust', color: getReelColor(6) },
        { id: 'r18', title: 'Factors: Habits', content: 'Habit-forming = Inelastic\nAddiction → Buy anyway\nCigarettes, Alcohol', color: getReelColor(7) },
        { id: 'r19', title: 'Midpoint Rule', content: 'At MIDPOINT: Ed = 1\nAbove mid: Ed > 1\nBelow mid: Ed < 1', color: getReelColor(8) },
        { id: 'r20', title: 'Y-axis Point', content: 'Where curve meets Y-axis\nEd = ∞\nAll lower, no upper', color: getReelColor(9) },
        { id: 'r21', title: 'X-axis Point', content: 'Where curve meets X-axis\nEd = 0\nNo lower segment', color: getReelColor(0) },
        { id: 'r22', title: 'MR and Ed', content: 'MR = AR(1 - 1/Ed)\nEd>1: MR positive\nEd=1: MR zero\nEd<1: MR negative', color: getReelColor(1) },
        { id: 'r23', title: 'Luxury Income Ey', content: 'Ey > 1 for luxuries\nDemand rises faster\nthan income rises', color: getReelColor(2) },
        { id: 'r24', title: 'Necessity Income Ey', content: '0 < Ey < 1\nDemand rises slower\nthan income rises', color: getReelColor(3) },
        { id: 'r25', title: 'Substitutes Ec', content: 'Tea ↔ Coffee\nPepsi ↔ Coke\nBus ↔ Train\nEc > 0', color: getReelColor(4) },
        { id: 'r26', title: 'Complements Ec', content: 'Car & Petrol\nBread & Butter\nPen & Ink\nEc < 0', color: getReelColor(5) },
        { id: 'r27', title: 'Curve Shape', content: 'Flatter = More elastic\nSteeper = Less elastic\nHorizontal = Perfect\nVertical = Zero', color: getReelColor(6) },
        { id: 'r28', title: 'Negative Sign', content: 'Ed always negative\n(P↑Q↓ or P↓Q↑)\nBut we use |Ed|\nAbsolute value', color: getReelColor(7) },
        { id: 'r29', title: 'Promotional Ea', content: 'Ea = %ΔQd / %ΔAdvertising\nHow ads affect demand\nMarketing measure', color: getReelColor(8) },
        { id: 'r30', title: 'Key Formulas', content: 'Ed = %ΔQ/%ΔP\nEy = %ΔQ/%ΔY\nEc = %ΔQx/%ΔPy\nMR = AR(1-1/Ed)', color: getReelColor(9) }
      ]
    },
    {
      id: 'eco4',
      title: '4. Supply Analysis',
      description: 'Law of Supply, Supply Schedule, Supply Curve.',
      summary: '**Supply**: Quantity a seller is willing to sell.\n**Law of Supply**: Price ↑ = Supply ↑ (Direct relationship).\n**Supply Curve**: Upward sloping.',
      detailedNotes: '### 1. Meaning of Supply\n**Supply** = Quantity of a commodity that a producer is willing and able to offer for sale at different prices during a given period.\n\n### 2. Supply Function\nSx = f(Px, Pf, T, Gp, N, E, G)\nWhere:\n* Px = Price of commodity\n* Pf = Price of factors (Inputs)\n* T = Technology\n* Gp = Government policy\n* N = Number of firms\n* E = Expectations\n* G = Goals of firm\n\n### 3. Law of Supply\n**Statement**: "Other things remaining constant, when price rises, quantity supplied also rises and vice versa."\n**Assumptions**: Cost of production constant, Technology unchanged, No change in government policy.\n\n### 4. Supply Schedule\n* **Individual Supply Schedule**: One producer\'s supply at different prices.\n* **Market Supply Schedule**: Total supply of all producers.\n\n### 5. Supply Curve\n* Slopes upward from left to right (Positive slope).\n* Shows direct relationship between price and quantity supplied.\n\n### 6. Exceptions to Law of Supply\n* **Agricultural Products**: Supply depends on weather.\n* **Rare/Antique Items**: Fixed supply.\n* **Labor Supply**: After a point, higher wages may reduce labor supply (Backward bending).\n* **Perishable Goods**: Must be sold regardless of price.',
      flashcards: [
        { id: 'f1', front: 'What is Supply?', back: 'Quantity of a commodity that a producer is willing and able to offer for sale at different prices during a given time period.' },
        { id: 'f2', front: 'What is the Law of Supply?', back: 'Other things remaining constant, when price rises, quantity supplied also rises and vice versa. Shows DIRECT relationship between price and supply.' },
        { id: 'f3', front: 'What is the slope of Supply Curve?', back: 'Upward sloping (Positive slope) from left to right, showing direct relationship between price and quantity supplied.' },
        { id: 'f4', front: 'What is the Backward Bending Labor Supply Curve?', back: 'At higher wage levels, workers prefer leisure over extra income, so labor supply decreases. Curve bends backward after a point.' },
        { id: 'f5', front: 'What is Supply Function?', back: 'Sx = f(Px, Pf, T, Gp, N, E, G) where Px=own price, Pf=factor prices, T=technology, Gp=govt policy, N=firms, E=expectations, G=goals.' },
        { id: 'f6', front: 'Difference between Stock and Supply?', back: 'Stock = Total quantity available at a point of time. Supply = Quantity actually offered for sale at given price. Supply ≤ Stock.' },
        { id: 'f7', front: 'What is Individual Supply?', back: 'Quantity of a commodity that an individual producer/firm is willing and able to sell at various prices during a given time period.' },
        { id: 'f8', front: 'What is Market Supply?', back: 'Total quantity supplied by all producers/firms in the market at various prices. Sm = S1 + S2 + S3 + ... (horizontal summation).' },
        { id: 'f9', front: 'What is a Supply Schedule?', back: 'A table showing different quantities of a commodity that producers are willing to supply at different prices during a given period.' },
        { id: 'f10', front: 'Why does Supply Curve slope upward?', back: '1) Higher profit at higher price 2) More producers enter 3) Law of increasing costs 4) Rational producer behavior.' },
        { id: 'f11', front: 'List 5 exceptions to Law of Supply.', back: '1) Agricultural goods 2) Perishables 3) Labor supply 4) Rare/antique items 5) Artistic goods 6) Expectations of price fall.' },
        { id: 'f12', front: 'What is Extension of Supply?', back: 'Increase in quantity supplied due to RISE IN PRICE. Movement UPWARD along the same supply curve.' },
        { id: 'f13', front: 'What is Contraction of Supply?', back: 'Decrease in quantity supplied due to FALL IN PRICE. Movement DOWNWARD along the same supply curve.' },
        { id: 'f14', front: 'What is Increase in Supply?', back: 'Rightward SHIFT of entire supply curve due to factors other than price. More supplied at SAME price (cost falls, tech improves).' },
        { id: 'f15', front: 'What is Decrease in Supply?', back: 'Leftward SHIFT of entire supply curve due to factors other than price. Less supplied at SAME price (cost rises, tax increases).' },
        { id: 'f16', front: 'Movement vs Shift in Supply Curve?', back: 'Movement = along curve due to price change (extension/contraction). Shift = entire curve moves due to other factors (increase/decrease).' },
        { id: 'f17', front: 'Effect of Technology on Supply?', back: 'Better technology → Lower production cost → Supply curve shifts RIGHT (increase in supply). More supplied at same price.' },
        { id: 'f18', front: 'Effect of Input Prices on Supply?', back: 'Higher input costs → Higher production cost → Supply curve shifts LEFT (decrease in supply). Less supplied at same price.' },
        { id: 'f19', front: 'Effect of Taxes on Supply?', back: 'Taxes increase cost of production → Supply curve shifts LEFT. Subsidies have opposite effect → Supply shifts RIGHT.' },
        { id: 'f20', front: 'Effect of Number of Firms on Supply?', back: 'More firms enter market → Market supply increases → Supply curve shifts RIGHT. Firms exit → Supply shifts LEFT.' },
        { id: 'f21', front: 'What is Price Elasticity of Supply?', back: 'Degree of responsiveness of quantity supplied to change in price. Es = %ΔQs / %ΔP.' },
        { id: 'f22', front: 'What is Perfectly Elastic Supply (Es = ∞)?', back: 'Horizontal supply curve. Infinite supply at given price, zero at any other price. Theoretical concept.' },
        { id: 'f23', front: 'What is Perfectly Inelastic Supply (Es = 0)?', back: 'Vertical supply curve. Fixed quantity regardless of price. E.g., Land, antiques, artistic works.' },
        { id: 'f24', front: 'Factors affecting Elasticity of Supply?', back: '1) Time period 2) Nature of commodity 3) Cost of production 4) Storage facilities 5) Factor mobility 6) Natural factors.' },
        { id: 'f25', front: 'How does time affect Supply Elasticity?', back: 'Market period: Perfectly inelastic. Short run: Less elastic. Long run: More elastic. More time = more adjustment.' },
        { id: 'f26', front: 'Why is Agricultural Supply inelastic?', back: 'Time-consuming production, depends on weather/season, perishable, cannot quickly respond to price changes.' },
        { id: 'f27', front: 'Why is Perishable goods supply inelastic?', back: 'Must be sold quickly before spoiling regardless of price. Cannot be stored (fish, flowers, vegetables, milk).' },
        { id: 'f28', front: 'What are Assumptions of Law of Supply?', back: '1) Cost of production constant 2) Technology unchanged 3) No change in govt policy 4) No change in input prices 5) Expectations constant.' },
        { id: 'f29', front: 'Difference: Demand Curve vs Supply Curve?', back: 'Demand: Downward slope (inverse relation, negative). Supply: Upward slope (direct relation, positive).' },
        { id: 'f30', front: 'What is Joint Supply?', back: 'When two or more goods are produced together from same process. E.g., Wool and Mutton from sheep, Petrol and Diesel from crude oil.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Supply curve slopes _______ due to direct relationship.', options: ['Downward', 'Upward', 'Horizontal', 'Vertical'], correctIndex: 1, explanation: 'Price and quantity supplied move in same direction.' },
        { id: 'q2', question: 'Supply of perishable goods is _______.', options: ['Elastic', 'Inelastic', 'Unitary', 'Infinite'], correctIndex: 1, explanation: 'Must be sold quickly regardless of price - cannot wait for better price.' },
        { id: 'q3', question: 'At higher wages, labor supply curve becomes _______.', options: ['Vertical', 'Backward bending', 'Horizontal', 'Steeper'], correctIndex: 1, explanation: 'Workers prefer leisure over extra income at very high wages.' },
        { id: 'q4', question: 'Law of Supply shows _______ relationship.', options: ['Inverse', 'Direct', 'No', 'Negative'], correctIndex: 1, explanation: 'Price up = Supply up, both move in same direction.' },
        { id: 'q5', question: 'Supply is a _______ concept.', options: ['Stock', 'Flow', 'Static', 'Absolute'], correctIndex: 1, explanation: 'Supply is per unit of time - a flow concept.' },
        { id: 'q6', question: 'Market supply is _______ of individual supplies.', options: ['Product', 'Difference', 'Sum', 'Ratio'], correctIndex: 2, explanation: 'Sm = S1 + S2 + S3 + ... (horizontal summation).' },
        { id: 'q7', question: 'Movement along supply curve is due to change in _______.', options: ['Technology', 'Own price', 'Input costs', 'Taxes'], correctIndex: 1, explanation: 'Price change causes extension or contraction.' },
        { id: 'q8', question: 'Shift in supply curve is due to change in _______.', options: ['Own price', 'Quantity', 'Other factors', 'Demand'], correctIndex: 2, explanation: 'Technology, costs, taxes, subsidies cause shift.' },
        { id: 'q9', question: 'Better technology causes supply curve to shift _______.', options: ['Left', 'Right', 'Upward', 'No change'], correctIndex: 1, explanation: 'Lower costs = more supply at same price = rightward shift.' },
        { id: 'q10', question: 'Increase in input prices shifts supply curve _______.', options: ['Right', 'Left', 'Stays same', 'Becomes vertical'], correctIndex: 1, explanation: 'Higher costs = less supply at same price = leftward shift.' },
        { id: 'q11', question: 'Subsidy to producers shifts supply curve _______.', options: ['Left', 'Right', 'No change', 'Downward'], correctIndex: 1, explanation: 'Subsidy reduces effective cost = more supply = rightward shift.' },
        { id: 'q12', question: 'Tax on production shifts supply curve _______.', options: ['Right', 'Left', 'No change', 'Upward only'], correctIndex: 1, explanation: 'Tax increases cost = less supply = leftward shift.' },
        { id: 'q13', question: 'Extension of supply means _______.', options: ['Leftward shift', 'Rightward shift', 'Upward movement along curve', 'Downward movement'], correctIndex: 2, explanation: 'Price rises → move up along same curve → more quantity.' },
        { id: 'q14', question: 'Contraction of supply occurs when price _______.', options: ['Rises', 'Falls', 'Is constant', 'Is zero'], correctIndex: 1, explanation: 'Price falls → move down along curve → less quantity.' },
        { id: 'q15', question: 'Supply curve is drawn with _______ on X-axis.', options: ['Price', 'Time', 'Quantity', 'Cost'], correctIndex: 2, explanation: 'Convention: Quantity on X-axis, Price on Y-axis.' },
        { id: 'q16', question: 'Stock is _______ supply.', options: ['Less than', 'Equal to', 'Greater than or equal to', 'Always greater than'], correctIndex: 2, explanation: 'Stock ≥ Supply. Some stock may be withheld.' },
        { id: 'q17', question: 'Supply of land is _______.', options: ['Elastic', 'Inelastic', 'Unitary', 'Perfectly inelastic'], correctIndex: 3, explanation: 'Land is fixed in supply - vertical supply curve.' },
        { id: 'q18', question: 'Elasticity of supply for antiques is _______.', options: ['Infinite', 'Zero', 'Unitary', 'Highly elastic'], correctIndex: 1, explanation: 'Fixed quantity - cannot produce more regardless of price.' },
        { id: 'q19', question: 'In long run, supply becomes more _______.', options: ['Inelastic', 'Elastic', 'Zero', 'Vertical'], correctIndex: 1, explanation: 'More time = more adjustment = higher elasticity.' },
        { id: 'q20', question: 'Formula for elasticity of supply is _______.', options: ['%ΔP / %ΔQs', '%ΔQs / %ΔP', 'ΔQ × ΔP', 'P / Q'], correctIndex: 1, explanation: 'Es = Percentage change in Qs / Percentage change in P.' },
        { id: 'q21', question: 'Joint supply means _______.', options: ['Two sellers', 'Products produced together', 'Combined demand', 'Market supply'], correctIndex: 1, explanation: 'Goods produced jointly from same process (wool and mutton).' },
        { id: 'q22', question: 'Positive slope of supply curve indicates _______.', options: ['Inverse relation', 'Direct relation', 'No relation', 'Constant price'], correctIndex: 1, explanation: 'Upward slope = both P and Q move in same direction.' },
        { id: 'q23', question: 'Supply depends primarily on _______.', options: ['Consumer taste', 'Cost of production', 'Population', 'Fashion'], correctIndex: 1, explanation: 'Production cost is the main determinant of supply.' },
        { id: 'q24', question: 'Expectations of future price rise will _______ current supply.', options: ['Increase', 'Decrease', 'Not affect', 'Double'], correctIndex: 1, explanation: 'Producers hold stock now to sell later at higher price.' },
        { id: 'q25', question: 'Number of firms increasing shifts supply curve _______.', options: ['Left', 'Right', 'No change', 'Inward'], correctIndex: 1, explanation: 'More producers = more market supply = rightward shift.' },
        { id: 'q26', question: 'Perfectly elastic supply curve is _______.', options: ['Vertical', 'Horizontal', 'Upward sloping', 'Downward sloping'], correctIndex: 1, explanation: 'Es = ∞, infinite supply at given price.' },
        { id: 'q27', question: 'Perfectly inelastic supply curve is _______.', options: ['Horizontal', 'Vertical', 'Upward sloping', 'Curved'], correctIndex: 1, explanation: 'Es = 0, fixed quantity at all prices.' },
        { id: 'q28', question: 'Supply of fish is generally _______.', options: ['Elastic', 'Inelastic', 'Perfectly elastic', 'Unitary'], correctIndex: 1, explanation: 'Perishable - must sell quickly regardless of price.' },
        { id: 'q29', question: 'In market period, supply is _______.', options: ['Highly elastic', 'Perfectly inelastic', 'Unitary', 'Infinite'], correctIndex: 1, explanation: 'No time to produce more - fixed stock only.' },
        { id: 'q30', question: 'Supply function includes _______ as a determinant.', options: ['Consumer income', 'Technology', 'Consumer taste', 'Population'], correctIndex: 1, explanation: 'Technology affects production cost and thus supply.' }
      ],
      reels: [
        { id: 'r1', title: 'Supply', content: 'Quantity seller is willing to sell\nAt given price & time\nWilling + Able', color: getReelColor(0) },
        { id: 'r2', title: 'Law of Supply', content: 'Price ↑ Supply ↑\nPrice ↓ Supply ↓\n(Direct Relationship)', color: getReelColor(1) },
        { id: 'r3', title: 'Supply Curve', content: 'Slopes Upward\nLeft to Right\nPositive Slope', color: getReelColor(2) },
        { id: 'r4', title: 'Demand vs Supply', content: 'Demand: Downward ↘\nSupply: Upward ↗\nOpposite slopes!', color: getReelColor(3) },
        { id: 'r5', title: 'Exceptions', content: 'Agriculture, Perishables\nLabor (backward)\nAntiques, Art', color: getReelColor(4) },
        { id: 'r6', title: 'Supply Function', content: 'Sx = f(Px,Pf,T,Gp,N,E,G)\nPrice, Inputs, Tech\nGovt, Firms, Expect, Goals', color: getReelColor(5) },
        { id: 'r7', title: 'Stock vs Supply', content: 'Stock = Total available\nSupply = Offered for sale\nStock ≥ Supply', color: getReelColor(6) },
        { id: 'r8', title: 'Individual vs Market', content: 'Individual = One producer\nMarket = All producers\nSm = ΣSi', color: getReelColor(7) },
        { id: 'r9', title: 'Extension', content: 'Price RISES\nMove UP curve\nMore quantity supplied\nSame curve!', color: getReelColor(8) },
        { id: 'r10', title: 'Contraction', content: 'Price FALLS\nMove DOWN curve\nLess quantity supplied\nSame curve!', color: getReelColor(9) },
        { id: 'r11', title: 'Increase in Supply', content: 'Curve shifts RIGHT\nMore at SAME price\nCost ↓, Tech ↑, Subsidy', color: getReelColor(0) },
        { id: 'r12', title: 'Decrease in Supply', content: 'Curve shifts LEFT\nLess at SAME price\nCost ↑, Tax ↑, Expect ↑P', color: getReelColor(1) },
        { id: 'r13', title: 'Movement vs Shift', content: 'Movement = Along curve\n(Price changes)\nShift = Curve moves\n(Other factors)', color: getReelColor(2) },
        { id: 'r14', title: 'Technology Effect', content: 'Better tech\n→ Lower cost\n→ More supply\n→ Shift RIGHT', color: getReelColor(3) },
        { id: 'r15', title: 'Input Cost Effect', content: 'Higher inputs\n→ Higher cost\n→ Less supply\n→ Shift LEFT', color: getReelColor(4) },
        { id: 'r16', title: 'Tax Effect', content: 'Tax ↑ Cost ↑\nSupply shifts LEFT\nSubsidy: Opposite\nShifts RIGHT', color: getReelColor(5) },
        { id: 'r17', title: 'Elasticity Es', content: 'Es = %ΔQs / %ΔP\nResponsiveness\nPositive for supply', color: getReelColor(6) },
        { id: 'r18', title: 'Es = ∞', content: 'Perfectly Elastic\nHorizontal line\nInfinite at one price', color: getReelColor(7) },
        { id: 'r19', title: 'Es = 0', content: 'Perfectly Inelastic\nVertical line\nFixed quantity\nLand, Antiques', color: getReelColor(8) },
        { id: 'r20', title: 'Time & Elasticity', content: 'Market period: Es=0\nShort run: Low Es\nLong run: High Es', color: getReelColor(9) },
        { id: 'r21', title: 'Backward Bending', content: 'Labor supply curve\nAt high wages\nPrefer leisure\nSupply ↓', color: getReelColor(0) },
        { id: 'r22', title: 'Perishables', content: 'Must sell quickly\nCannot store\nInelastic supply\nFish, Flowers', color: getReelColor(1) },
        { id: 'r23', title: 'Agriculture', content: 'Weather dependent\nSeasonal\nTime to grow\nInelastic short run', color: getReelColor(2) },
        { id: 'r24', title: 'Assumptions', content: 'Cost constant\nTech unchanged\nNo policy change\nInputs constant', color: getReelColor(3) },
        { id: 'r25', title: 'Joint Supply', content: 'Produced together\nWool + Mutton\nPetrol + Diesel\nSame source', color: getReelColor(4) },
        { id: 'r26', title: 'Why Upward Slope?', content: 'Higher P = More profit\nMore producers enter\nIncreasing costs\nRational behavior', color: getReelColor(5) },
        { id: 'r27', title: 'Expectations', content: 'Expect price ↑\nHold stock now\nCurrent supply ↓\nSell later', color: getReelColor(6) },
        { id: 'r28', title: 'Number of Firms', content: 'More firms enter\n→ Market supply ↑\n→ Curve shifts RIGHT', color: getReelColor(7) },
        { id: 'r29', title: 'Supply Schedule', content: 'Table format\nPrice vs Quantity\nPlotted → Supply Curve', color: getReelColor(8) },
        { id: 'r30', title: 'Key Difference', content: 'Demand: Consumer side\nSupply: Producer side\nTogether: Market', color: getReelColor(9) }
      ]
    },
    {
      id: 'eco5',
      title: '5. Forms of Market',
      description: 'Perfect Competition, Monopoly, Monopolistic Competition, Oligopoly.',
      summary: '**Market**: Place where buyers and sellers interact.\n**Types**: Perfect Competition, Monopoly, Monopolistic Competition, Oligopoly.',
      detailedNotes: '### 1. Meaning of Market\n**Market** = Arrangement where buyers and sellers come in contact for exchange of goods/services.\n\n### 2. Perfect Competition\n**Features**:\n* Large number of buyers and sellers\n* Homogeneous product\n* Free entry and exit\n* Perfect knowledge\n* No transportation cost\n* Price taker (firm accepts market price)\n* AR = MR = Price (Horizontal demand curve)\n\n### 3. Monopoly\n**Features**:\n* Single seller, many buyers\n* No close substitutes\n* Entry barriers\n* Price maker\n* AR > MR\n* Downward sloping demand curve\n\n**Types**: Natural, Legal, Voluntary.\n\n### 4. Monopolistic Competition\n**Features** (E.H. Chamberlin):\n* Large number of sellers\n* Product differentiation (Brand, Quality)\n* Free entry and exit\n* Selling costs (Advertising)\n* AR > MR\n* Downward sloping demand curve\n\n### 5. Oligopoly\n**Features**:\n* Few large sellers\n* Interdependence in decision making\n* Barriers to entry\n* Products may be homogeneous or differentiated\n* Price rigidity (Kinked demand curve)\n\n**Types**: Pure Oligopoly, Differentiated Oligopoly, Collusive, Non-collusive.',
      flashcards: [
        { id: 'f1', front: 'What is a Market in economics?', back: 'An arrangement where buyers and sellers come in contact for exchange of goods and services. Not necessarily a physical place.' },
        { id: 'f2', front: 'What is Perfect Competition?', back: 'Market with large buyers & sellers, homogeneous product, free entry/exit, perfect knowledge, no transport cost. Firm is price taker.' },
        { id: 'f3', front: 'What is Monopoly?', back: 'Market with single seller, many buyers, no close substitutes, entry barriers. Firm is price maker. Mono = One, Poly = Seller.' },
        { id: 'f4', front: 'What is Monopolistic Competition?', back: 'Market with many sellers selling differentiated products (brands), free entry/exit, selling costs (advertising). Given by E.H. Chamberlin.' },
        { id: 'f5', front: 'What is Oligopoly?', back: 'Market with few large sellers, interdependence in decisions, barriers to entry, price rigidity. Oligo = Few, Poly = Sellers.' },
        { id: 'f6', front: 'What is a Price Taker?', back: 'Firm that accepts market price as given and cannot influence it. Found in Perfect Competition. Firm\'s demand curve is horizontal.' },
        { id: 'f7', front: 'What is a Price Maker?', back: 'Firm that can set/influence the price of its product. Found in Monopoly. Has market power due to no substitutes.' },
        { id: 'f8', front: 'What is Homogeneous Product?', back: 'Identical products from all sellers - no difference in quality, features, brand. Buyers indifferent between sellers. Perfect Competition feature.' },
        { id: 'f9', front: 'What is Product Differentiation?', back: 'Products are similar but not identical - differ in brand, quality, features, packaging. Monopolistic Competition feature.' },
        { id: 'f10', front: 'What are Selling Costs?', back: 'Expenditure on advertising, marketing, salesmanship to increase demand. Feature of Monopolistic Competition. Not present in Perfect Competition.' },
        { id: 'f11', front: 'Why AR = MR in Perfect Competition?', back: 'Horizontal demand curve means price is constant. Revenue from each additional unit = price. TR rises at constant rate.' },
        { id: 'f12', front: 'Why AR > MR in Monopoly?', back: 'Downward sloping demand curve. To sell more, price must be reduced. MR falls faster than AR. MR can become negative.' },
        { id: 'f13', front: 'What is Kinked Demand Curve?', back: 'Found in Oligopoly. Kink at current price. If firm raises price, others don\'t follow (elastic). If lowers, others follow (inelastic). Explains price rigidity.' },
        { id: 'f14', front: 'Who developed Monopolistic Competition theory?', back: 'E.H. Chamberlin in "Theory of Monopolistic Competition" (1933). Also Joan Robinson with "Imperfect Competition".' },
        { id: 'f15', front: 'What is Interdependence in Oligopoly?', back: 'Each firm\'s decision depends on rival\'s reaction. Actions of one affect others. Must consider competitors before pricing/output decisions.' },
        { id: 'f16', front: 'What is Duopoly?', back: 'Special case of Oligopoly with exactly TWO sellers. Duo = Two. Example: Pepsi-Coke, Airbus-Boeing.' },
        { id: 'f17', front: 'Types of Monopoly?', back: '1) Natural (economies of scale) 2) Legal (patents, licenses) 3) Voluntary (cartels) 4) Government (public utilities).' },
        { id: 'f18', front: 'What are Entry Barriers?', back: 'Obstacles preventing new firms from entering market: Patents, High capital, Government regulations, Brand loyalty, Control of resources.' },
        { id: 'f19', front: 'What is Collusive Oligopoly?', back: 'Few sellers agree/collude on price, output, or market share. Forms cartel. Example: OPEC. May be illegal.' },
        { id: 'f20', front: 'What is Non-Collusive Oligopoly?', back: 'Firms compete independently without agreement. Each acts on its own. Price wars possible. Rivalry and competition.' },
        { id: 'f21', front: 'Features of demand curve in each market?', back: 'Perfect Competition: Horizontal. Monopoly: Downward. Monopolistic: Downward (flatter than monopoly). Oligopoly: Kinked.' },
        { id: 'f22', front: 'Profit Maximization condition?', back: 'MR = MC in all market forms. Firm produces where marginal revenue equals marginal cost.' },
        { id: 'f23', front: 'Long-run profits in Perfect Competition?', back: 'Zero economic/supernormal profit. Only normal profit. Free entry attracts firms, driving down price until profit = 0.' },
        { id: 'f24', front: 'Long-run profits in Monopoly?', back: 'Can earn supernormal profits even in long run due to entry barriers. No competition to erode profits.' },
        { id: 'f25', front: 'Examples of Perfect Competition?', back: 'Agricultural markets (wheat, rice), Stock markets, Foreign exchange markets. Closest real-world examples.' },
        { id: 'f26', front: 'Examples of Monopoly?', back: 'Indian Railways, Public utilities (electricity, water), Microsoft Windows, Local cable operator.' },
        { id: 'f27', front: 'Examples of Monopolistic Competition?', back: 'Restaurants, Clothing brands, Toothpaste, Soap, Fast food chains. Many sellers, differentiated products.' },
        { id: 'f28', front: 'Examples of Oligopoly?', back: 'Automobiles (Maruti, Honda, Hyundai), Airlines, Telecom (Jio, Airtel, Vi), Soft drinks (Pepsi, Coca-Cola).' },
        { id: 'f29', front: 'What is Monopsony?', back: 'Single BUYER, many sellers. Opposite of monopoly. Buyer has market power. Example: Government buying defense equipment.' },
        { id: 'f30', front: 'What is Price Discrimination in Monopoly?', back: 'Charging different prices for same product to different consumers. Possible only in monopoly. Example: Movie tickets, Railway fares.' }
      ],
      mcqs: [
        { id: 'q1', question: 'In perfect competition, AR = MR = _______.', options: ['TC', 'AC', 'Price', 'Profit'], correctIndex: 2, explanation: 'Horizontal demand curve means price is constant for all units.' },
        { id: 'q2', question: 'Monopoly has _______ seller(s).', options: ['Many', 'Few', 'Single', 'Two'], correctIndex: 2, explanation: 'Mono = One. Single seller controls the entire market.' },
        { id: 'q3', question: 'Kinked demand curve is found in _______.', options: ['Perfect Competition', 'Monopoly', 'Monopolistic', 'Oligopoly'], correctIndex: 3, explanation: 'Due to price rigidity and interdependence in oligopoly.' },
        { id: 'q4', question: 'In perfect competition, firm is a _______.', options: ['Price maker', 'Price taker', 'Price leader', 'Price discriminator'], correctIndex: 1, explanation: 'Firm accepts market price, cannot influence it.' },
        { id: 'q5', question: 'Product differentiation is feature of _______.', options: ['Perfect competition', 'Monopoly', 'Monopolistic competition', 'All'], correctIndex: 2, explanation: 'Products similar but not identical - brands, quality differ.' },
        { id: 'q6', question: 'Theory of Monopolistic Competition was given by _______.', options: ['Marshall', 'Chamberlin', 'Keynes', 'Adam Smith'], correctIndex: 1, explanation: 'E.H. Chamberlin in 1933.' },
        { id: 'q7', question: 'Oligopoly means _______ sellers.', options: ['Single', 'Many', 'Few', 'Two'], correctIndex: 2, explanation: 'Oligo = Few. Few large sellers dominate market.' },
        { id: 'q8', question: 'AR > MR in _______.', options: ['Perfect competition only', 'Monopoly only', 'All imperfect markets', 'None'], correctIndex: 2, explanation: 'Downward demand curve means AR > MR in monopoly, monopolistic, oligopoly.' },
        { id: 'q9', question: 'Free entry and exit is NOT in _______.', options: ['Perfect competition', 'Monopolistic competition', 'Monopoly', 'Both A and B'], correctIndex: 2, explanation: 'Monopoly has entry barriers preventing new firms.' },
        { id: 'q10', question: 'Selling costs are incurred in _______.', options: ['Perfect competition', 'Monopolistic competition', 'Monopoly', 'None'], correctIndex: 1, explanation: 'Advertising to differentiate product and increase demand.' },
        { id: 'q11', question: 'Demand curve in perfect competition is _______.', options: ['Downward sloping', 'Upward sloping', 'Horizontal', 'Vertical'], correctIndex: 2, explanation: 'Perfectly elastic at market price - firm can sell any quantity at that price.' },
        { id: 'q12', question: 'In monopoly, firm can earn supernormal profit in _______.', options: ['Short run only', 'Long run only', 'Both short and long run', 'Neither'], correctIndex: 2, explanation: 'Entry barriers prevent competition even in long run.' },
        { id: 'q13', question: 'Duopoly is a special case of _______.', options: ['Perfect competition', 'Monopoly', 'Oligopoly', 'Monopolistic competition'], correctIndex: 2, explanation: 'Duo = Two. Two sellers is a form of oligopoly.' },
        { id: 'q14', question: 'Interdependence is feature of _______.', options: ['Perfect competition', 'Monopoly', 'Monopolistic competition', 'Oligopoly'], correctIndex: 3, explanation: 'Each firm considers rival\'s reaction before decisions.' },
        { id: 'q15', question: 'OPEC is an example of _______.', options: ['Perfect competition', 'Monopoly', 'Collusive oligopoly', 'Monopolistic competition'], correctIndex: 2, explanation: 'Oil producing countries collude on output and prices.' },
        { id: 'q16', question: 'In perfect competition, long run profit is _______.', options: ['Supernormal', 'Normal (zero economic)', 'Negative', 'Maximum'], correctIndex: 1, explanation: 'Free entry drives price down until economic profit = 0.' },
        { id: 'q17', question: 'Price discrimination is possible in _______.', options: ['Perfect competition', 'Monopoly', 'Both', 'Neither'], correctIndex: 1, explanation: 'Needs market power to charge different prices.' },
        { id: 'q18', question: 'Wheat market is closest to _______.', options: ['Monopoly', 'Oligopoly', 'Perfect competition', 'Monopolistic'], correctIndex: 2, explanation: 'Many sellers, homogeneous product, price takers.' },
        { id: 'q19', question: 'Automobile industry is an example of _______.', options: ['Perfect competition', 'Monopoly', 'Oligopoly', 'Monopolistic'], correctIndex: 2, explanation: 'Few large sellers: Maruti, Honda, Hyundai, Tata.' },
        { id: 'q20', question: 'Restaurant business is example of _______.', options: ['Perfect competition', 'Monopoly', 'Oligopoly', 'Monopolistic competition'], correctIndex: 3, explanation: 'Many restaurants with differentiated products (cuisine, ambiance).' },
        { id: 'q21', question: 'Profit maximization condition in all markets is _______.', options: ['AR = MR', 'MR = MC', 'AR = AC', 'TR = TC'], correctIndex: 1, explanation: 'Firms produce where marginal revenue = marginal cost.' },
        { id: 'q22', question: 'Homogeneous product is found in _______.', options: ['Perfect competition', 'Monopolistic competition', 'Oligopoly', 'All'], correctIndex: 0, explanation: 'Identical products - buyers indifferent between sellers.' },
        { id: 'q23', question: 'Single buyer is called _______.', options: ['Monopoly', 'Monopsony', 'Duopoly', 'Oligopoly'], correctIndex: 1, explanation: 'Monopsony = single buyer. Opposite of monopoly.' },
        { id: 'q24', question: 'Natural monopoly arises due to _______.', options: ['Patents', 'Government laws', 'Economies of scale', 'Collusion'], correctIndex: 2, explanation: 'Larger firm has lower costs - efficient to have one supplier.' },
        { id: 'q25', question: 'Price rigidity in oligopoly is explained by _______.', options: ['Horizontal curve', 'Kinked demand curve', 'Vertical curve', 'Rectangular hyperbola'], correctIndex: 1, explanation: 'Kink at current price - elastic above, inelastic below.' },
        { id: 'q26', question: 'Joan Robinson is associated with _______.', options: ['Perfect competition', 'Imperfect competition', 'Oligopoly', 'Index numbers'], correctIndex: 1, explanation: 'Wrote "Economics of Imperfect Competition" (1933).' },
        { id: 'q27', question: 'In monopolistic competition, demand curve is _______.', options: ['Horizontal', 'Downward sloping', 'Vertical', 'Upward sloping'], correctIndex: 1, explanation: 'Flatter than monopoly but still downward due to differentiation.' },
        { id: 'q28', question: 'Entry barriers are highest in _______.', options: ['Perfect competition', 'Monopoly', 'Monopolistic competition', 'None'], correctIndex: 1, explanation: 'Monopoly maintains single seller status through barriers.' },
        { id: 'q29', question: 'Non-price competition includes _______.', options: ['Price cutting', 'Advertising', 'Both', 'Neither'], correctIndex: 1, explanation: 'Competing through advertising, quality, service instead of price.' },
        { id: 'q30', question: 'Market form with most firms is _______.', options: ['Monopoly', 'Oligopoly', 'Perfect competition', 'Duopoly'], correctIndex: 2, explanation: 'Large number of buyers AND sellers in perfect competition.' }
      ],
      reels: [
        { id: 'r1', title: 'Perfect Competition', content: 'Many sellers\nHomogeneous product\nPrice Taker\nAR = MR = Price', color: getReelColor(0) },
        { id: 'r2', title: 'Monopoly', content: 'Single seller\nNo substitutes\nPrice Maker\nAR > MR', color: getReelColor(1) },
        { id: 'r3', title: 'Monopolistic', content: 'Many sellers\nDifferentiated products\nSelling costs (Ads)\nChamberlin 1933', color: getReelColor(2) },
        { id: 'r4', title: 'Oligopoly', content: 'Few large sellers\nInterdependence\nKinked Demand Curve\nPrice Rigidity', color: getReelColor(3) },
        { id: 'r5', title: 'AR = MR', content: 'Only in Perfect Competition\nHorizontal demand curve\nConstant price', color: getReelColor(4) },
        { id: 'r6', title: 'AR > MR', content: 'Monopoly, Monopolistic, Oligopoly\nDownward sloping demand\nMR falls faster', color: getReelColor(5) },
        { id: 'r7', title: 'Price Taker', content: 'Perfect Competition\nAccepts market price\nCannot influence P', color: getReelColor(6) },
        { id: 'r8', title: 'Price Maker', content: 'Monopoly\nSets own price\nMarket power', color: getReelColor(7) },
        { id: 'r9', title: 'Product Differentiation', content: 'Monopolistic Competition\nBrands, Quality differ\nSimilar but not identical', color: getReelColor(8) },
        { id: 'r10', title: 'Homogeneous', content: 'Perfect Competition\nIdentical products\nNo brand difference', color: getReelColor(9) },
        { id: 'r11', title: 'Entry Barriers', content: 'Monopoly: Highest\nOligopoly: High\nMonopolistic: Low\nPC: None', color: getReelColor(0) },
        { id: 'r12', title: 'Kinked Curve', content: 'Oligopoly feature\nAbove kink: Elastic\nBelow kink: Inelastic\nPrice rigidity', color: getReelColor(1) },
        { id: 'r13', title: 'Selling Costs', content: 'Monopolistic Competition\nAdvertising, Marketing\nTo differentiate product', color: getReelColor(2) },
        { id: 'r14', title: 'Interdependence', content: 'Oligopoly feature\nRival\'s reaction matters\nStrategic decisions', color: getReelColor(3) },
        { id: 'r15', title: 'Long Run Profit', content: 'PC: Normal only\nMonopoly: Supernormal\nMonopolistic: Normal\nDue to entry/exit', color: getReelColor(4) },
        { id: 'r16', title: 'Duopoly', content: 'Two sellers\nSpecial oligopoly\nPepsi-Coke\nAirbus-Boeing', color: getReelColor(5) },
        { id: 'r17', title: 'Collusion', content: 'Oligopoly firms agree\nFix price/output\nCartel: OPEC\nMay be illegal', color: getReelColor(6) },
        { id: 'r18', title: 'Price Discrimination', content: 'Different prices\nSame product\nMonopoly only\nMovies, Railways', color: getReelColor(7) },
        { id: 'r19', title: 'PC Examples', content: 'Agricultural markets\nStock exchange\nForex market\nNear-perfect', color: getReelColor(8) },
        { id: 'r20', title: 'Monopoly Examples', content: 'Indian Railways\nPublic utilities\nPatent holders\nLocal cable', color: getReelColor(9) },
        { id: 'r21', title: 'MC Examples', content: 'Restaurants\nClothing brands\nToothpaste, Soap\nFast food', color: getReelColor(0) },
        { id: 'r22', title: 'Oligopoly Examples', content: 'Automobiles\nTelecom\nAirlines\nSoft drinks', color: getReelColor(1) },
        { id: 'r23', title: 'Demand Curves', content: 'PC: Horizontal\nMonopoly: Downward\nMC: Flatter downward\nOligo: Kinked', color: getReelColor(2) },
        { id: 'r24', title: 'Profit Max', content: 'MR = MC\nAll markets\nWhere marginal equals\nOptimal output', color: getReelColor(3) },
        { id: 'r25', title: 'Mono = One', content: 'Monopoly: 1 seller\nMonopsony: 1 buyer\nOpposites', color: getReelColor(4) },
        { id: 'r26', title: 'Oligo = Few', content: 'Oligopoly: Few sellers\nOligopsony: Few buyers\nDuo = Two', color: getReelColor(5) },
        { id: 'r27', title: 'Natural Monopoly', content: 'Economies of scale\nOne firm efficient\nPublic utilities\nHigh fixed costs', color: getReelColor(6) },
        { id: 'r28', title: 'Legal Monopoly', content: 'Patents, Copyrights\nGovernment license\nLegal protection\nTime-limited', color: getReelColor(7) },
        { id: 'r29', title: 'Non-Price Competition', content: 'Advertising\nQuality improvement\nCustomer service\nNot price cuts', color: getReelColor(8) },
        { id: 'r30', title: 'Market Comparison', content: 'Sellers: PC>MC>Oligo>Mono\nPower: Mono>Oligo>MC>PC\nProfit: Mono highest', color: getReelColor(9) }
      ]
    },
    {
      id: 'eco6',
      title: '6. Index Numbers',
      description: 'Construction, Types, and Uses of Index Numbers.',
      summary: '**Index Number**: Statistical measure showing relative change.\n**Base Year**: Reference year (value = 100).\n**Methods**: Simple, Weighted (Laspeyre, Paasche, Fisher).',
      detailedNotes: '### 1. Meaning\n**Index Number** = Statistical device to measure relative change in a variable or group of variables over time, place, or other characteristics.\n\n### 2. Features\n* Expressed in percentages\n* Specialized averages\n* Measure relative changes\n* Time reversal and factor reversal tests\n\n### 3. Types of Index Numbers\n* **Price Index**: Measures change in prices.\n* **Quantity Index**: Measures change in quantity.\n* **Value Index**: Measures change in value (P × Q).\n\n### 4. Methods of Construction\n**A. Simple/Unweighted Methods**:\n1. Simple Aggregate Method: Σp1/Σp0 × 100\n2. Simple Average of Price Relatives: ΣR/N where R = p1/p0 × 100\n\n**B. Weighted Methods**:\n1. **Laspeyre\'s Index**: Uses Base year quantities (q0). Formula: Σp1q0/Σp0q0 × 100\n2. **Paasche\'s Index**: Uses Current year quantities (q1). Formula: Σp1q1/Σp0q1 × 100\n3. **Fisher\'s Ideal Index**: Geometric mean of Laspeyre & Paasche. Formula: √(L × P) × 100\n\n### 5. Uses\n* Measures inflation\n* Policy formulation\n* Wage adjustment (Dearness Allowance)\n* Deflating money values\n* Comparing living standards',
      flashcards: [
        { id: 'f1', front: 'What is Index Number?', back: 'Statistical measure of relative change over time/place.' },
        { id: 'f2', front: 'Laspeyre\'s Index uses?', back: 'Base year quantities (q0).' },
        { id: 'f3', front: 'Paasche\'s Index uses?', back: 'Current year quantities (q1).' },
        { id: 'f4', front: 'Fisher\'s Ideal Index is?', back: 'Geometric mean of Laspeyre and Paasche.' },
        { id: 'f5', front: 'CPI stands for?', back: 'Consumer Price Index.' },
        { id: 'f6', front: 'What is Base Year in Index Numbers?', back: 'Reference year with value = 100 against which changes are measured.' },
        { id: 'f7', front: 'Simple Aggregate Method formula?', back: 'Σp1/Σp0 × 100' },
        { id: 'f8', front: 'Simple Average of Price Relatives formula?', back: 'ΣR/N where R = p1/p0 × 100' },
        { id: 'f9', front: 'What is WPI?', back: 'Wholesale Price Index - measures changes in wholesale prices.' },
        { id: 'f10', front: 'What is Time Reversal Test?', back: 'P01 × P10 = 1. If we interchange base and current years, product should be 1.' },
        { id: 'f11', front: 'What is Factor Reversal Test?', back: 'P01 × Q01 = V01. Product of price and quantity index = value index.' },
        { id: 'f12', front: 'Why is Fisher\'s Index called Ideal?', back: 'It satisfies both Time Reversal and Factor Reversal tests.' },
        { id: 'f13', front: 'Laspeyre\'s Index formula?', back: 'Σp1q0/Σp0q0 × 100' },
        { id: 'f14', front: 'Paasche\'s Index formula?', back: 'Σp1q1/Σp0q1 × 100' },
        { id: 'f15', front: 'Fisher\'s Ideal Index formula?', back: '√(Laspeyre × Paasche) or √(Σp1q0/Σp0q0 × Σp1q1/Σp0q1) × 100' },
        { id: 'f16', front: 'What is Price Index Number?', back: 'Measures change in price level over time.' },
        { id: 'f17', front: 'What is Quantity Index Number?', back: 'Measures change in quantity/volume over time.' },
        { id: 'f18', front: 'What is Value Index Number?', back: 'Measures change in total value (Price × Quantity) over time.' },
        { id: 'f19', front: 'What is Deflating?', back: 'Converting money values to real values by removing effect of price changes.' },
        { id: 'f20', front: 'Real Wage formula using Index?', back: 'Real Wage = (Money Wage / CPI) × 100' },
        { id: 'f21', front: 'What is Dearness Allowance (DA)?', back: 'Extra payment to employees to compensate for rise in cost of living, calculated using CPI.' },
        { id: 'f22', front: 'Splicing of Index Numbers?', back: 'Technique to connect two index series with different base years.' },
        { id: 'f23', front: 'What is Chain Base Method?', back: 'Each year becomes base for next year. Link relatives are multiplied.' },
        { id: 'f24', front: 'What is Fixed Base Method?', back: 'Same base year used throughout the series.' },
        { id: 'f25', front: 'Limitation of Laspeyre\'s Index?', back: 'Overestimates price rise as it ignores substitution effect (uses old quantities).' },
        { id: 'f26', front: 'Limitation of Paasche\'s Index?', back: 'Underestimates price rise. Requires current quantity data which is difficult.' },
        { id: 'f27', front: 'Marshall-Edgeworth Index formula?', back: 'Uses average of base and current year quantities: Σp1(q0+q1)/Σp0(q0+q1) × 100' },
        { id: 'f28', front: 'Dorbish-Bowley Index formula?', back: 'Arithmetic mean of Laspeyre and Paasche: (L + P)/2' },
        { id: 'f29', front: 'What is Circular Test?', back: 'P01 × P12 × P20 = 1. Chain of index numbers should return to 1.' },
        { id: 'f30', front: 'Who is called father of Index Numbers?', back: 'Irving Fisher.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Laspeyre\'s index uses _______ year quantities.', options: ['Base', 'Current', 'Both', 'None'], correctIndex: 0, explanation: 'q0 = base year quantities.' },
        { id: 'q2', question: 'Fisher\'s Index is called _______ because it satisfies tests.', options: ['Ideal', 'Simple', 'Basic', 'Complex'], correctIndex: 0, explanation: 'Satisfies time and factor reversal tests.' },
        { id: 'q3', question: 'Index numbers are _______ averages.', options: ['Simple', 'Specialized', 'Arithmetic', 'Geometric'], correctIndex: 1, explanation: 'They are specialized measures.' },
        { id: 'q4', question: 'Base year index value is always:', options: ['0', '50', '100', '1000'], correctIndex: 2, explanation: 'Base year = 100 by definition.' },
        { id: 'q5', question: 'CPI is used to calculate:', options: ['GDP', 'GNP', 'Dearness Allowance', 'Interest Rate'], correctIndex: 2, explanation: 'CPI measures cost of living, used for DA.' },
        { id: 'q6', question: 'Paasche\'s index uses _______ year quantities.', options: ['Base', 'Current', 'Average', 'Fixed'], correctIndex: 1, explanation: 'q1 = current year quantities.' },
        { id: 'q7', question: 'Fisher\'s Ideal Index is _______ mean of Laspeyre and Paasche.', options: ['Arithmetic', 'Geometric', 'Harmonic', 'Weighted'], correctIndex: 1, explanation: 'Fisher = √(L × P)' },
        { id: 'q8', question: 'Time Reversal Test checks if:', options: ['P01 × P10 = 1', 'P01 + P10 = 1', 'P01 - P10 = 1', 'P01 / P10 = 1'], correctIndex: 0, explanation: 'Interchanging time periods gives reciprocal.' },
        { id: 'q9', question: 'WPI stands for:', options: ['Weighted Price Index', 'Wholesale Price Index', 'World Price Index', 'Weekly Price Index'], correctIndex: 1, explanation: 'Measures wholesale prices.' },
        { id: 'q10', question: 'Laspeyre\'s Index tends to _______ price changes.', options: ['Overstate', 'Understate', 'Accurately measure', 'Ignore'], correctIndex: 0, explanation: 'Uses base year quantities, ignores substitution.' },
        { id: 'q11', question: 'Paasche\'s Index tends to _______ price changes.', options: ['Overstate', 'Understate', 'Accurately measure', 'Ignore'], correctIndex: 1, explanation: 'Uses current quantities, reflects substitution.' },
        { id: 'q12', question: 'Factor Reversal Test checks:', options: ['P01 × Q01 = V01', 'P01 + Q01 = V01', 'P01 - Q01 = V01', 'P01 / Q01 = V01'], correctIndex: 0, explanation: 'Price × Quantity = Value index.' },
        { id: 'q13', question: 'Simple Aggregate Method formula is:', options: ['Σp1/Σp0 × 100', 'Σp0/Σp1 × 100', 'Σp1q0/Σp0q0', 'ΣR/N'], correctIndex: 0, explanation: 'Sum of current prices / Sum of base prices × 100.' },
        { id: 'q14', question: 'In deflating, we convert _______ values to _______ values.', options: ['Money, Real', 'Real, Money', 'Nominal, Gross', 'Net, Gross'], correctIndex: 0, explanation: 'Removes effect of price changes.' },
        { id: 'q15', question: 'Which index satisfies both Time and Factor Reversal tests?', options: ['Laspeyre', 'Paasche', 'Fisher', 'Simple Aggregate'], correctIndex: 2, explanation: 'Fisher\'s Ideal Index.' },
        { id: 'q16', question: 'Chain Base Method uses:', options: ['Fixed base', 'Moving base', 'No base', 'Average base'], correctIndex: 1, explanation: 'Each year is base for next year.' },
        { id: 'q17', question: 'Price relative formula is:', options: ['p1/p0 × 100', 'p0/p1 × 100', 'p1 - p0', 'p1 + p0'], correctIndex: 0, explanation: 'Current price / Base price × 100.' },
        { id: 'q18', question: 'Marshall-Edgeworth Index uses _______ of quantities.', options: ['Product', 'Difference', 'Average/Sum', 'Ratio'], correctIndex: 2, explanation: 'Uses (q0 + q1) combined quantities.' },
        { id: 'q19', question: 'Dorbish-Bowley Index is _______ mean of L and P.', options: ['Geometric', 'Arithmetic', 'Harmonic', 'Weighted'], correctIndex: 1, explanation: '(L + P)/2 = Arithmetic mean.' },
        { id: 'q20', question: 'Irving Fisher is known as:', options: ['Father of Economics', 'Father of Index Numbers', 'Father of Statistics', 'Father of Accounting'], correctIndex: 1, explanation: 'Famous for Fisher\'s Ideal Index.' },
        { id: 'q21', question: 'Splicing is used to:', options: ['Create new index', 'Connect two index series', 'Delete old index', 'Average indices'], correctIndex: 1, explanation: 'Joins series with different base years.' },
        { id: 'q22', question: 'Real Wage = Money Wage ÷ _______ × 100.', options: ['GDP', 'GNP', 'CPI', 'WPI'], correctIndex: 2, explanation: 'CPI deflates money wages.' },
        { id: 'q23', question: 'Index numbers are expressed in:', options: ['Rupees', 'Percentages', 'Units', 'Ratios only'], correctIndex: 1, explanation: 'Always in percentage form.' },
        { id: 'q24', question: 'Value Index measures change in:', options: ['Price only', 'Quantity only', 'Price × Quantity', 'None'], correctIndex: 2, explanation: 'Value = P × Q.' },
        { id: 'q25', question: 'Circular Test is satisfied when:', options: ['P01 × P12 × P20 = 1', 'P01 + P12 + P20 = 1', 'P01 = P12 = P20', 'None'], correctIndex: 0, explanation: 'Chain should return to unity.' },
        { id: 'q26', question: 'Which index is easier to calculate but biased?', options: ['Fisher', 'Laspeyre', 'Marshall', 'Dorbish'], correctIndex: 1, explanation: 'Laspeyre uses readily available base quantities.' },
        { id: 'q27', question: 'Index number in base year is:', options: ['0', '1', '100', 'Varies'], correctIndex: 2, explanation: 'Base year always = 100.' },
        { id: 'q28', question: 'Quantity Index uses formula similar to _______ but with q and p interchanged.', options: ['Price Index', 'Value Index', 'Deflator', 'Inflator'], correctIndex: 0, explanation: 'Same methods, variables swapped.' },
        { id: 'q29', question: 'If CPI rises from 100 to 120, prices rose by:', options: ['10%', '20%', '120%', '100%'], correctIndex: 1, explanation: '(120-100)/100 × 100 = 20%.' },
        { id: 'q30', question: 'Index numbers are called economic:', options: ['Indicators', 'Barometers', 'Measures', 'All of these'], correctIndex: 3, explanation: 'They indicate economic changes.' }
      ],
      reels: [
        { id: 'r1', title: 'Index Number', content: 'Measures relative change.\nBase year = 100.', color: getReelColor(0) },
        { id: 'r2', title: 'Laspeyre', content: 'Uses Base year quantities (q0).\nΣp1q0/Σp0q0 × 100', color: getReelColor(1) },
        { id: 'r3', title: 'Paasche', content: 'Uses Current year quantities (q1).\nΣp1q1/Σp0q1 × 100', color: getReelColor(2) },
        { id: 'r4', title: 'Fisher\'s Ideal', content: '√(Laspeyre × Paasche)\nSatisfies both tests.', color: getReelColor(3) },
        { id: 'r5', title: 'CPI', content: 'Consumer Price Index.\nMeasures cost of living.\nUsed for DA calculation.', color: getReelColor(4) },
        { id: 'r6', title: 'WPI', content: 'Wholesale Price Index.\nMeasures wholesale prices.\nUsed for inflation.', color: getReelColor(5) },
        { id: 'r7', title: 'Base Year', content: 'Reference year = 100\nNormal, stable year\nComparison point', color: getReelColor(6) },
        { id: 'r8', title: 'Time Reversal', content: 'P01 × P10 = 1\nSwap years → reciprocal\nFisher satisfies!', color: getReelColor(7) },
        { id: 'r9', title: 'Factor Reversal', content: 'P01 × Q01 = V01\nPrice × Quantity = Value\nFisher passes!', color: getReelColor(8) },
        { id: 'r10', title: 'Simple Methods', content: 'Aggregate: Σp1/Σp0\nRelatives: ΣR/N\nNo weights used', color: getReelColor(9) },
        { id: 'r11', title: 'Weighted Methods', content: 'Laspeyre: q0\nPaasche: q1\nFisher: √(L×P)', color: getReelColor(0) },
        { id: 'r12', title: 'Price Relative', content: 'R = p1/p0 × 100\nEach item\'s change\nRelative to base', color: getReelColor(1) },
        { id: 'r13', title: 'L vs P', content: 'Laspeyre: Overstates\nPaasche: Understates\nFisher: Balanced', color: getReelColor(2) },
        { id: 'r14', title: 'Deflating', content: 'Money → Real value\nReal = Nominal/CPI × 100\nRemoves inflation', color: getReelColor(3) },
        { id: 'r15', title: 'DA Calculation', content: 'Based on CPI\nCompensates workers\nFor price rise', color: getReelColor(4) },
        { id: 'r16', title: 'Index Types', content: 'Price Index\nQuantity Index\nValue Index', color: getReelColor(5) },
        { id: 'r17', title: 'Chain Base', content: 'Moving base year\nEach year → next\nLink relatives', color: getReelColor(6) },
        { id: 'r18', title: 'Fixed Base', content: 'Same base year\nThroughout series\nEasy comparison', color: getReelColor(7) },
        { id: 'r19', title: 'Splicing', content: 'Connect 2 series\nDifferent base years\nMerge data', color: getReelColor(8) },
        { id: 'r20', title: 'Irving Fisher', content: 'Father of Index No.\nIdeal Index creator\nTests developer', color: getReelColor(9) },
        { id: 'r21', title: 'Uses of Index', content: 'Inflation measure\nWage adjustment\nPolicy making', color: getReelColor(0) },
        { id: 'r22', title: 'Features', content: 'Percentage form\nSpecialized average\nRelative measure', color: getReelColor(1) },
        { id: 'r23', title: 'Marshall-Edgeworth', content: 'Uses (q0 + q1)\nAverage quantities\nCompromise method', color: getReelColor(2) },
        { id: 'r24', title: 'Dorbish-Bowley', content: '(L + P) / 2\nArithmetic mean\nOf L and P', color: getReelColor(3) },
        { id: 'r25', title: 'Circular Test', content: 'P01 × P12 × P20 = 1\nChain returns to 1\nFisher fails this!', color: getReelColor(4) },
        { id: 'r26', title: 'Limitations', content: 'Not perfect measure\nItem selection bias\nQuality changes ignored', color: getReelColor(5) },
        { id: 'r27', title: 'Base Selection', content: 'Normal year\nNot too old\nRepresentative', color: getReelColor(6) },
        { id: 'r28', title: 'Real vs Nominal', content: 'Nominal = Current₹\nReal = Adjusted₹\nIndex converts', color: getReelColor(7) },
        { id: 'r29', title: 'Why Important?', content: 'Economic barometer\nPolicy decisions\nWage negotiations', color: getReelColor(8) },
        { id: 'r30', title: 'Quick Formulas', content: 'L: Σp1q0/Σp0q0\nP: Σp1q1/Σp0q1\nF: √(L×P)', color: getReelColor(9) }
      ]
    },
    {
      id: 'eco7',
      title: '7. National Income',
      description: 'Concepts, Methods, and Importance of National Income.',
      summary: '**National Income**: Total value of goods & services produced in a year.\n**Methods**: Product, Income, Expenditure.\n**Concepts**: GDP, GNP, NNP, NI, PI, DI.',
      detailedNotes: '### 1. Meaning\n**National Income** = Sum total of all goods and services produced in a country during one year, measured in money terms.\n\n### 2. Important Concepts\n* **GDP (Gross Domestic Product)**: Total value within domestic territory.\n* **GNP (Gross National Product)**: GDP + Net Factor Income from Abroad (NFIA).\n* **NNP (Net National Product)**: GNP - Depreciation.\n* **NI (National Income)**: NNP at Factor Cost.\n* **PI (Personal Income)**: Income received by individuals.\n* **DI (Disposable Income)**: PI - Direct Taxes.\n\n### 3. Methods of Calculation\n**A. Product/Output Method**:\nNI = Σ(Value of output of all sectors) - Intermediate Consumption\n\n**B. Income Method**:\nNI = Wages + Rent + Interest + Profit\n\n**C. Expenditure Method**:\nNI = C + I + G + (X - M)\nWhere: C = Consumption, I = Investment, G = Govt Expenditure, X = Exports, M = Imports\n\n### 4. Importance\n* Measures economic progress\n* Basis for planning\n* International comparisons\n* Per capita income calculation\n* Distribution of income',
      flashcards: [
        { id: 'f1', front: 'GDP stands for?', back: 'Gross Domestic Product.' },
        { id: 'f2', front: 'GNP = GDP + ?', back: 'Net Factor Income from Abroad (NFIA).' },
        { id: 'f3', front: 'NNP = GNP - ?', back: 'Depreciation.' },
        { id: 'f4', front: 'Three methods of calculating NI?', back: 'Product, Income, Expenditure methods.' },
        { id: 'f5', front: 'Disposable Income = ?', back: 'Personal Income - Direct Taxes.' },
        { id: 'f6', front: 'What is National Income?', back: 'Total value of goods and services produced in a country during one year, measured in money terms.' },
        { id: 'f7', front: 'What is NFIA?', back: 'Net Factor Income from Abroad = Factor income earned by residents abroad - Factor income earned by non-residents domestically.' },
        { id: 'f8', front: 'What is Depreciation?', back: 'Decrease in value of fixed assets due to wear and tear, also called Capital Consumption Allowance.' },
        { id: 'f9', front: 'NI at Factor Cost = ?', back: 'NNP at Factor Cost = NNP at Market Price - Indirect Taxes + Subsidies.' },
        { id: 'f10', front: 'What is Domestic Territory?', back: 'Political boundaries + Embassies abroad + Ships/Aircrafts operated by residents - Foreign embassies.' },
        { id: 'f11', front: 'Who are Normal Residents?', back: 'Persons who ordinarily reside in a country and whose economic interest lies in that country.' },
        { id: 'f12', front: 'Income Method formula?', back: 'NI = Wages + Rent + Interest + Profit (WRIP)' },
        { id: 'f13', front: 'Expenditure Method formula?', back: 'NI = C + I + G + (X - M) = Private Consumption + Investment + Govt Expenditure + Net Exports' },
        { id: 'f14', front: 'Product Method formula?', back: 'NI = GVA (Gross Value Added) = Value of Output - Intermediate Consumption' },
        { id: 'f15', front: 'What is Value Added?', back: 'Value of Output - Value of Intermediate Goods. Avoids double counting.' },
        { id: 'f16', front: 'What is Double Counting?', back: 'Counting value of goods more than once. Avoided by Value Added method or Final Goods method.' },
        { id: 'f17', front: 'Per Capita Income = ?', back: 'National Income / Total Population' },
        { id: 'f18', front: 'What is Personal Income?', back: 'Income actually received by individuals. PI = NI - Corporate Taxes - Undistributed Profits + Transfer Payments.' },
        { id: 'f19', front: 'What are Transfer Payments?', back: 'Payments without any productive service in return. E.g., Pensions, Scholarships, Gifts.' },
        { id: 'f20', front: 'GDP at Market Price vs Factor Cost?', back: 'GDP(FC) = GDP(MP) - Indirect Taxes + Subsidies' },
        { id: 'f21', front: 'What is Intermediate Consumption?', back: 'Value of goods and services used in production. E.g., Raw materials, Fuel, Services.' },
        { id: 'f22', front: 'What are Final Goods?', back: 'Goods meant for final consumption or investment. Not for resale or further processing.' },
        { id: 'f23', front: 'Gross Investment = ?', back: 'Net Investment + Depreciation = Fixed Capital Formation + Change in Stocks' },
        { id: 'f24', front: 'What is Net Investment?', back: 'Gross Investment - Depreciation. Also called Net Capital Formation.' },
        { id: 'f25', front: 'Real National Income = ?', back: 'Nominal NI adjusted for price changes = Nominal NI / Price Index × 100' },
        { id: 'f26', front: 'Nominal vs Real National Income?', back: 'Nominal: At current prices. Real: At constant/base year prices (removes inflation effect).' },
        { id: 'f27', front: 'What is Green GDP?', back: 'GDP minus cost of environmental degradation. Accounts for sustainable development.' },
        { id: 'f28', front: 'Three sectors in Product Method?', back: 'Primary (Agriculture), Secondary (Manufacturing), Tertiary (Services).' },
        { id: 'f29', front: 'What is Mixed Income of Self-Employed?', back: 'Income of self-employed containing wages, rent, interest, and profit inseparably mixed.' },
        { id: 'f30', front: 'Base year for India\'s current NI calculation?', back: '2011-12 (updated from previous base years).' }
      ],
      mcqs: [
        { id: 'q1', question: 'GDP + NFIA = _______.', options: ['NNP', 'GNP', 'NI', 'DI'], correctIndex: 1, explanation: 'GNP includes income from abroad.' },
        { id: 'q2', question: 'GNP - Depreciation = _______.', options: ['GDP', 'NNP', 'NI', 'PI'], correctIndex: 1, explanation: 'Net = Gross - Depreciation.' },
        { id: 'q3', question: 'Expenditure method: NI = C + I + G + _______.', options: ['(X-M)', '(M-X)', 'X', 'M'], correctIndex: 0, explanation: 'Net exports = Exports - Imports.' },
        { id: 'q4', question: 'NFIA stands for:', options: ['Net Foreign Income Account', 'Net Factor Income from Abroad', 'National Foreign Investment Account', 'None'], correctIndex: 1, explanation: 'Factor income earned from abroad minus factor income paid abroad.' },
        { id: 'q5', question: 'Which method avoids double counting by using value added?', options: ['Income', 'Expenditure', 'Product', 'All'], correctIndex: 2, explanation: 'Product method uses GVA to avoid double counting.' },
        { id: 'q6', question: 'Per Capita Income = National Income ÷ _______.', options: ['GDP', 'Population', 'GNP', 'Workforce'], correctIndex: 1, explanation: 'Average income per person.' },
        { id: 'q7', question: 'Depreciation is also called:', options: ['Capital Formation', 'Capital Consumption Allowance', 'Net Investment', 'Transfer Payment'], correctIndex: 1, explanation: 'Consumption of fixed capital.' },
        { id: 'q8', question: 'Income Method uses WRIP which means:', options: ['Wages+Rent+Interest+Profit', 'Work+Return+Income+Production', 'Wealth+Revenue+Investment+Price', 'None'], correctIndex: 0, explanation: 'Four factor incomes.' },
        { id: 'q9', question: 'Transfer payments are _______ in National Income.', options: ['Included', 'Excluded', 'Partially included', 'Doubled'], correctIndex: 1, explanation: 'No productive service in return.' },
        { id: 'q10', question: 'Real National Income removes effect of:', options: ['Population', 'Inflation', 'Taxes', 'Subsidies'], correctIndex: 1, explanation: 'Adjusted for price changes.' },
        { id: 'q11', question: 'GDP at FC = GDP at MP - _______ + Subsidies.', options: ['Direct Taxes', 'Indirect Taxes', 'Depreciation', 'NFIA'], correctIndex: 1, explanation: 'Factor Cost = Market Price minus indirect taxes plus subsidies.' },
        { id: 'q12', question: 'Which is NOT a method of calculating NI?', options: ['Product', 'Income', 'Expenditure', 'Taxation'], correctIndex: 3, explanation: 'Only three methods: Product, Income, Expenditure.' },
        { id: 'q13', question: 'Gross Investment = Net Investment + _______.', options: ['NFIA', 'Depreciation', 'Subsidies', 'Taxes'], correctIndex: 1, explanation: 'Gross includes wear and tear replacement.' },
        { id: 'q14', question: 'Intermediate goods are _______ for calculating NI.', options: ['Included', 'Excluded', 'Doubled', 'Halved'], correctIndex: 1, explanation: 'To avoid double counting.' },
        { id: 'q15', question: 'Normal residents include:', options: ['Foreign tourists', 'Indian embassy staff abroad', 'Foreign embassy in India', 'International organizations'], correctIndex: 1, explanation: 'Their economic interest lies in India.' },
        { id: 'q16', question: 'Personal Income = NI - Corporate Tax - _______ + Transfer Payments.', options: ['Subsidies', 'Undistributed Profits', 'Depreciation', 'Interest'], correctIndex: 1, explanation: 'Profits retained by companies.' },
        { id: 'q17', question: 'Value Added = Value of Output - _______.', options: ['Final Goods', 'Intermediate Consumption', 'Capital Goods', 'Depreciation'], correctIndex: 1, explanation: 'Removes value of inputs used.' },
        { id: 'q18', question: 'Which is the largest sector in India by contribution to GDP?', options: ['Primary', 'Secondary', 'Tertiary', 'Agriculture'], correctIndex: 2, explanation: 'Services sector is largest.' },
        { id: 'q19', question: 'Disposable Income is used for:', options: ['Consumption only', 'Saving only', 'Consumption + Saving', 'Investment only'], correctIndex: 2, explanation: 'DI = C + S.' },
        { id: 'q20', question: 'Green GDP accounts for:', options: ['Agricultural output', 'Environmental cost', 'Green industries', 'Forests only'], correctIndex: 1, explanation: 'Deducts environmental degradation.' },
        { id: 'q21', question: 'Mixed Income of Self-Employed includes:', options: ['Only wages', 'Only profits', 'All four factors mixed', 'Only rent'], correctIndex: 2, explanation: 'Wages, rent, interest, profit inseparable.' },
        { id: 'q22', question: 'NNP at Factor Cost is also called:', options: ['GDP', 'GNP', 'National Income', 'Personal Income'], correctIndex: 2, explanation: 'NI = NNP at FC.' },
        { id: 'q23', question: 'Which is NOT included in domestic territory?', options: ['Embassies abroad', 'Ships in international waters', 'Foreign embassies in India', 'Aircraft by residents'], correctIndex: 2, explanation: 'Foreign embassies are foreign territory.' },
        { id: 'q24', question: 'Capital formation refers to:', options: ['Consumption', 'Investment', 'Depreciation', 'Transfer'], correctIndex: 1, explanation: 'Addition to capital stock.' },
        { id: 'q25', question: 'Current base year for India\'s NI is:', options: ['2000-01', '2004-05', '2011-12', '2020-21'], correctIndex: 2, explanation: 'Latest base year revision.' },
        { id: 'q26', question: 'C + I + G + (X-M) represents:', options: ['Income Method', 'Product Method', 'Expenditure Method', 'Value Added'], correctIndex: 2, explanation: 'Aggregate Expenditure formula.' },
        { id: 'q27', question: 'Factor income includes:', options: ['Transfer payments', 'Wages, Rent, Interest, Profit', 'Subsidies', 'Gifts'], correctIndex: 1, explanation: 'Returns to factors of production.' },
        { id: 'q28', question: 'NFIA is positive when:', options: ['Imports > Exports', 'Exports > Imports', 'Income from abroad > Income paid abroad', 'Income paid abroad > Income from abroad'], correctIndex: 2, explanation: 'Net inflow of factor income.' },
        { id: 'q29', question: 'GDP deflator is used to convert:', options: ['Nominal to Real GDP', 'Real to Nominal GDP', 'GDP to GNP', 'NNP to NI'], correctIndex: 0, explanation: 'Removes price effect.' },
        { id: 'q30', question: 'Which organization calculates NI in India?', options: ['RBI', 'SEBI', 'CSO/NSO', 'NITI Aayog'], correctIndex: 2, explanation: 'Central Statistical Office/National Statistical Office.' }
      ],
      reels: [
        { id: 'r1', title: 'GDP', content: 'Gross Domestic Product.\nWithin domestic territory.\nBy residents & non-residents.', color: getReelColor(0) },
        { id: 'r2', title: 'GNP', content: 'GDP + NFIA.\nIncludes income from abroad.', color: getReelColor(1) },
        { id: 'r3', title: 'NNP', content: 'GNP - Depreciation.\nNet = after wear & tear.', color: getReelColor(2) },
        { id: 'r4', title: '3 Methods', content: 'Product Method.\nIncome Method.\nExpenditure Method.', color: getReelColor(3) },
        { id: 'r5', title: 'Income Method', content: 'Wages + Rent + Interest + Profit.\nWRIP formula', color: getReelColor(4) },
        { id: 'r6', title: 'Expenditure', content: 'C + I + G + (X - M)\nConsumption + Investment + Govt + Net Exports.', color: getReelColor(5) },
        { id: 'r7', title: 'NFIA', content: 'Net Factor Income from Abroad\nIncome earned abroad\n- Income paid abroad', color: getReelColor(6) },
        { id: 'r8', title: 'Depreciation', content: 'Capital Consumption\nWear & Tear\nGross - Net', color: getReelColor(7) },
        { id: 'r9', title: 'NI at FC', content: 'NNP at Factor Cost\n= NNP(MP) - Indirect Tax\n+ Subsidies', color: getReelColor(8) },
        { id: 'r10', title: 'Value Added', content: 'Output - Intermediate\nAvoids double counting\nProduct Method', color: getReelColor(9) },
        { id: 'r11', title: 'Personal Income', content: 'NI - Corp Tax\n- Undistributed Profits\n+ Transfers', color: getReelColor(0) },
        { id: 'r12', title: 'Disposable Income', content: 'PI - Direct Taxes\nUsed for C + S\nSpending power', color: getReelColor(1) },
        { id: 'r13', title: 'Per Capita', content: 'NI ÷ Population\nAverage income\nPer person', color: getReelColor(2) },
        { id: 'r14', title: 'Transfer Payments', content: 'No service given\nPensions, Scholarships\nExcluded from NI', color: getReelColor(3) },
        { id: 'r15', title: 'Real vs Nominal', content: 'Nominal: Current₹\nReal: Constant₹\nRemoves inflation', color: getReelColor(4) },
        { id: 'r16', title: 'Double Counting', content: 'Counting twice\nValue Added avoids\nFinal goods method', color: getReelColor(5) },
        { id: 'r17', title: 'Domestic Territory', content: 'Political boundary\n+ Embassies abroad\n- Foreign embassies', color: getReelColor(6) },
        { id: 'r18', title: 'Normal Resident', content: 'Lives in country\nEconomic interest\nOne year criterion', color: getReelColor(7) },
        { id: 'r19', title: '3 Sectors', content: 'Primary: Agriculture\nSecondary: Industry\nTertiary: Services', color: getReelColor(8) },
        { id: 'r20', title: 'Gross Investment', content: 'Net Investment\n+ Depreciation\n= Capital Formation', color: getReelColor(9) },
        { id: 'r21', title: 'Final Goods', content: 'For consumption\nOr investment\nNot for resale', color: getReelColor(0) },
        { id: 'r22', title: 'Intermediate', content: 'Used in production\nRaw materials\nExcluded from NI', color: getReelColor(1) },
        { id: 'r23', title: 'Green GDP', content: 'GDP - Environment cost\nSustainable measure\nModern concept', color: getReelColor(2) },
        { id: 'r24', title: 'FC vs MP', content: 'FC = MP - Indirect Tax\n+ Subsidies\nProducer gets FC', color: getReelColor(3) },
        { id: 'r25', title: 'Mixed Income', content: 'Self-employed income\nW+R+I+P mixed\nCannot separate', color: getReelColor(4) },
        { id: 'r26', title: 'NSO', content: 'National Statistical Office\nCalculates NI in India\n(Earlier CSO)', color: getReelColor(5) },
        { id: 'r27', title: 'Base Year', content: '2011-12 for India\nReal NI calculation\nPrice reference', color: getReelColor(6) },
        { id: 'r28', title: 'GDP Flow', content: 'GDP(MP)\n→ GDP(FC): -IT+S\n→ NDP: -Dep', color: getReelColor(7) },
        { id: 'r29', title: 'GNP Flow', content: 'GDP + NFIA\n→ GNP - Dep\n→ NNP = NI', color: getReelColor(8) },
        { id: 'r30', title: 'Key Formula', content: 'NI = NNP(FC)\n= GNP - Dep - IT + S\nMaster this!', color: getReelColor(9) }
      ]
    },
    {
      id: 'eco8',
      title: '8. Public Finance in India',
      description: 'Government Budget, Revenue, Expenditure, and Fiscal Policy.',
      summary: '**Public Finance**: Study of government\'s income & expenditure.\n**Budget**: Annual financial statement.\n**Revenue**: Tax & Non-tax. **Expenditure**: Revenue & Capital.',
      detailedNotes: '### 1. Meaning\n**Public Finance** = Study of how government raises revenue and incurs expenditure for the welfare of society.\n\n### 2. Government Budget\n**Budget** = Annual financial statement of estimated receipts and expenditure.\nPresented on 1st February.\n\n### 3. Types of Revenue\n**A. Tax Revenue**:\n* Direct Tax: Income Tax, Corporate Tax, Wealth Tax.\n* Indirect Tax: GST, Customs Duty, Excise Duty.\n\n**B. Non-Tax Revenue**:\n* Fees, Fines, Licenses, Dividends, Interest.\n\n### 4. Types of Expenditure\n**A. Revenue Expenditure**:\n* Day-to-day running expenses.\n* No asset creation.\n* Examples: Salaries, Subsidies, Interest payments.\n\n**B. Capital Expenditure**:\n* Asset creation.\n* Long-term benefits.\n* Examples: Construction, Machinery, Loans given.\n\n### 5. Types of Deficit\n* **Revenue Deficit**: Revenue Expenditure - Revenue Receipts.\n* **Fiscal Deficit**: Total Expenditure - Total Receipts (except borrowings).\n* **Primary Deficit**: Fiscal Deficit - Interest Payments.\n\n### 6. Fiscal Policy\nGovernment\'s policy regarding revenue and expenditure to achieve economic goals.',
      flashcards: [
        { id: 'f1', front: 'When is Union Budget presented?', back: '1st February.' },
        { id: 'f2', front: 'Examples of Direct Tax?', back: 'Income Tax, Corporate Tax, Wealth Tax.' },
        { id: 'f3', front: 'Revenue Deficit = ?', back: 'Revenue Expenditure - Revenue Receipts.' },
        { id: 'f4', front: 'Fiscal Deficit = ?', back: 'Total Expenditure - Total Receipts (excluding borrowings).' },
        { id: 'f5', front: 'Primary Deficit = ?', back: 'Fiscal Deficit - Interest Payments.' },
        { id: 'f6', front: 'What is Public Finance?', back: 'Study of how government raises revenue and incurs expenditure for welfare of society.' },
        { id: 'f7', front: 'What is a Budget?', back: 'Annual financial statement of estimated receipts and expenditure of the government.' },
        { id: 'f8', front: 'Who presents Union Budget?', back: 'Finance Minister of India.' },
        { id: 'f9', front: 'What is Tax Revenue?', back: 'Income of government from compulsory payments by citizens without direct return of service.' },
        { id: 'f10', front: 'What is Non-Tax Revenue?', back: 'Government income from sources other than taxes: Fees, Fines, Dividends, Interest.' },
        { id: 'f11', front: 'Difference between Direct and Indirect Tax?', back: 'Direct: Cannot be shifted (Income Tax). Indirect: Can be shifted to consumer (GST).' },
        { id: 'f12', front: 'What is GST?', back: 'Goods and Services Tax - One nation, One tax. Unified indirect tax replacing multiple taxes.' },
        { id: 'f13', front: 'When was GST introduced?', back: '1st July 2017.' },
        { id: 'f14', front: 'What is Revenue Expenditure?', back: 'Day-to-day running expenses with no asset creation. E.g., Salaries, Subsidies, Interest.' },
        { id: 'f15', front: 'What is Capital Expenditure?', back: 'Expenditure on asset creation with long-term benefits. E.g., Infrastructure, Machinery.' },
        { id: 'f16', front: 'What is Capital Receipt?', back: 'Receipts that reduce assets or create liability. E.g., Borrowings, Disinvestment, Loan recovery.' },
        { id: 'f17', front: 'What is Revenue Receipt?', back: 'Receipts that neither create liability nor reduce assets. E.g., Taxes, Fees, Fines.' },
        { id: 'f18', front: 'What is Fiscal Policy?', back: 'Government policy regarding taxation and public expenditure to achieve economic goals.' },
        { id: 'f19', front: 'What is Deficit Financing?', back: 'Government borrowing to meet deficit in budget. Creates liability for future.' },
        { id: 'f20', front: 'What is Progressive Tax?', back: 'Tax rate increases with increase in income. E.g., Income Tax slabs.' },
        { id: 'f21', front: 'What is Regressive Tax?', back: 'Tax rate decreases with increase in income. Burden more on poor.' },
        { id: 'f22', front: 'What is Proportional Tax?', back: 'Same tax rate for all income levels. Flat rate tax.' },
        { id: 'f23', front: 'What is Budget Deficit?', back: 'Total Expenditure - Total Receipts. Eliminated since 1997-98.' },
        { id: 'f24', front: 'What is Effective Revenue Deficit?', back: 'Revenue Deficit - Grants for Capital Asset Creation.' },
        { id: 'f25', front: 'What is FRBM Act?', back: 'Fiscal Responsibility and Budget Management Act 2003. Aims to reduce fiscal deficit.' },
        { id: 'f26', front: 'Target under FRBM Act?', back: 'Fiscal Deficit to be reduced to 3% of GDP.' },
        { id: 'f27', front: 'What are Plan and Non-Plan Expenditure?', back: 'Plan: Development activities. Non-Plan: Day-to-day administration. (Merged from 2017-18)' },
        { id: 'f28', front: 'What is Disinvestment?', back: 'Sale of government\'s stake in public sector enterprises. Capital receipt.' },
        { id: 'f29', front: 'What is Zero-Based Budgeting?', back: 'Every item of expenditure must be justified from scratch, not based on previous budget.' },
        { id: 'f30', front: 'What is Outcome Budget?', back: 'Budget focused on outcomes/results of expenditure rather than just allocation.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Union Budget is presented on _______.', options: ['Jan 1', 'Feb 1', 'Mar 1', 'Apr 1'], correctIndex: 1, explanation: 'Changed from last day of February.' },
        { id: 'q2', question: 'GST is a _______ tax.', options: ['Direct', 'Indirect', 'Progressive', 'Regressive'], correctIndex: 1, explanation: 'Tax burden can be shifted.' },
        { id: 'q3', question: 'Fiscal Deficit - Interest = _______ Deficit.', options: ['Revenue', 'Primary', 'Budget', 'Trade'], correctIndex: 1, explanation: 'Primary shows borrowing for non-interest purposes.' },
        { id: 'q4', question: 'Income Tax is a _______ tax.', options: ['Indirect', 'Direct', 'Regressive', 'Proportional'], correctIndex: 1, explanation: 'Cannot be shifted to others.' },
        { id: 'q5', question: 'GST was introduced on:', options: ['1 Apr 2017', '1 Jul 2017', '1 Jan 2018', '1 Apr 2018'], correctIndex: 1, explanation: '1st July 2017 - One Nation One Tax.' },
        { id: 'q6', question: 'Revenue Deficit = Revenue Expenditure - _______.', options: ['Capital Receipts', 'Revenue Receipts', 'Total Receipts', 'Borrowings'], correctIndex: 1, explanation: 'Shortfall in revenue receipts.' },
        { id: 'q7', question: 'Salaries of government employees is _______ expenditure.', options: ['Capital', 'Revenue', 'Plan', 'Non-recurring'], correctIndex: 1, explanation: 'Day-to-day expense, no asset creation.' },
        { id: 'q8', question: 'Construction of roads is _______ expenditure.', options: ['Revenue', 'Capital', 'Transfer', 'Current'], correctIndex: 1, explanation: 'Creates asset with long-term benefit.' },
        { id: 'q9', question: 'Borrowings are _______ receipts.', options: ['Revenue', 'Capital', 'Tax', 'Non-tax'], correctIndex: 1, explanation: 'Creates liability.' },
        { id: 'q10', question: 'FRBM Act was enacted in:', options: ['2001', '2003', '2005', '2007'], correctIndex: 1, explanation: 'Fiscal Responsibility and Budget Management Act 2003.' },
        { id: 'q11', question: 'Target fiscal deficit under FRBM is _______ of GDP.', options: ['1%', '2%', '3%', '5%'], correctIndex: 2, explanation: 'Aim to reduce to 3% of GDP.' },
        { id: 'q12', question: 'Disinvestment is a _______ receipt.', options: ['Revenue', 'Capital', 'Tax', 'Non-tax'], correctIndex: 1, explanation: 'Sale of government assets.' },
        { id: 'q13', question: 'Tax rate increasing with income is _______ tax.', options: ['Regressive', 'Progressive', 'Proportional', 'Indirect'], correctIndex: 1, explanation: 'Higher income, higher rate.' },
        { id: 'q14', question: 'Finance Minister presents budget in:', options: ['Lok Sabha', 'Rajya Sabha', 'Both Houses', 'Cabinet'], correctIndex: 0, explanation: 'Money bills originate in Lok Sabha.' },
        { id: 'q15', question: 'Which is NOT a direct tax?', options: ['Income Tax', 'Corporate Tax', 'GST', 'Wealth Tax'], correctIndex: 2, explanation: 'GST is indirect tax.' },
        { id: 'q16', question: 'Zero-Based Budgeting requires:', options: ['Previous year basis', 'Fresh justification', 'No expenditure', 'Surplus budget'], correctIndex: 1, explanation: 'Every item justified from zero.' },
        { id: 'q17', question: 'Subsidies are _______ expenditure.', options: ['Capital', 'Revenue', 'Plan', 'Developmental'], correctIndex: 1, explanation: 'Transfer payment, no asset creation.' },
        { id: 'q18', question: 'Interest payments are part of _______ expenditure.', options: ['Capital', 'Revenue', 'Plan', 'Discretionary'], correctIndex: 1, explanation: 'Recurring expense.' },
        { id: 'q19', question: 'Fiscal policy is related to:', options: ['Money supply', 'Credit control', 'Taxation & expenditure', 'Foreign trade'], correctIndex: 2, explanation: 'Government\'s tax and spending policy.' },
        { id: 'q20', question: 'Which replaced multiple indirect taxes?', options: ['VAT', 'GST', 'Excise', 'Service Tax'], correctIndex: 1, explanation: 'One Nation One Tax.' },
        { id: 'q21', question: 'Fees and Fines are _______ revenue.', options: ['Tax', 'Non-tax', 'Capital', 'External'], correctIndex: 1, explanation: 'Not compulsory like tax.' },
        { id: 'q22', question: 'Effective Revenue Deficit = Revenue Deficit - _______.', options: ['Interest', 'Subsidies', 'Grants for capital assets', 'Depreciation'], correctIndex: 2, explanation: 'Introduced in 2011-12.' },
        { id: 'q23', question: 'Budget Deficit was eliminated in:', options: ['1997-98', '2000-01', '2003-04', '2007-08'], correctIndex: 0, explanation: 'Concept discontinued.' },
        { id: 'q24', question: 'Custom Duty is levied on:', options: ['Income', 'Services', 'Imports/Exports', 'Property'], correctIndex: 2, explanation: 'Tax on international trade.' },
        { id: 'q25', question: 'Outcome Budget focuses on:', options: ['Allocation', 'Results', 'Process', 'Inputs'], correctIndex: 1, explanation: 'Performance-based budgeting.' },
        { id: 'q26', question: 'Primary deficit shows borrowing for _______ purposes.', options: ['Interest payment', 'Non-interest', 'Revenue', 'Capital'], correctIndex: 1, explanation: 'Fiscal deficit minus interest.' },
        { id: 'q27', question: 'Plan and Non-Plan distinction was merged from:', options: ['2015-16', '2016-17', '2017-18', '2018-19'], correctIndex: 2, explanation: 'Now Capital and Revenue distinction only.' },
        { id: 'q28', question: 'Pension payments are _______ expenditure.', options: ['Capital', 'Revenue', 'Plan', 'Investment'], correctIndex: 1, explanation: 'Transfer payment, recurring.' },
        { id: 'q29', question: 'Recovery of loans is a _______ receipt.', options: ['Revenue', 'Capital', 'Tax', 'Debt'], correctIndex: 1, explanation: 'Reduces government assets.' },
        { id: 'q30', question: 'The power to levy taxes is with:', options: ['State only', 'Centre only', 'Centre and State', 'Local bodies'], correctIndex: 2, explanation: 'As per constitutional provisions.' }
      ],
      reels: [
        { id: 'r1', title: 'Public Finance', content: 'Govt income & expenditure.\nFor public welfare.', color: getReelColor(0) },
        { id: 'r2', title: 'Budget', content: 'Annual Financial Statement.\nPresented: 1st February.', color: getReelColor(1) },
        { id: 'r3', title: 'Direct Tax', content: 'Cannot be shifted.\nIncome Tax, Corporate Tax.', color: getReelColor(2) },
        { id: 'r4', title: 'Indirect Tax', content: 'Can be shifted.\nGST, Customs, Excise.', color: getReelColor(3) },
        { id: 'r5', title: 'Revenue Exp', content: 'Day-to-day expenses.\nNo asset creation.\nSalaries, Subsidies.', color: getReelColor(4) },
        { id: 'r6', title: 'Capital Exp', content: 'Asset creation.\nLong-term.\nConstruction, Loans.', color: getReelColor(5) },
        { id: 'r7', title: 'Deficits', content: 'Revenue Deficit\nFiscal Deficit\nPrimary Deficit', color: getReelColor(6) },
        { id: 'r8', title: 'Revenue Deficit', content: 'Rev Exp - Rev Receipts\nShortfall in current\nincome over expense', color: getReelColor(7) },
        { id: 'r9', title: 'Fiscal Deficit', content: 'Total Exp - Total Receipts\n(excl. borrowings)\nGovernment borrowing', color: getReelColor(8) },
        { id: 'r10', title: 'Primary Deficit', content: 'Fiscal - Interest\nBorrowing for\nnon-interest use', color: getReelColor(9) },
        { id: 'r11', title: 'GST', content: 'Goods & Services Tax\n1st July 2017\nOne Nation One Tax', color: getReelColor(0) },
        { id: 'r12', title: 'Tax Revenue', content: 'Compulsory payment\nNo direct return\nDirect + Indirect', color: getReelColor(1) },
        { id: 'r13', title: 'Non-Tax Revenue', content: 'Fees, Fines\nDividends, Interest\nLicenses', color: getReelColor(2) },
        { id: 'r14', title: 'Revenue Receipts', content: 'Tax + Non-Tax\nNo liability created\nNo asset reduction', color: getReelColor(3) },
        { id: 'r15', title: 'Capital Receipts', content: 'Borrowings\nDisinvestment\nLoan Recovery', color: getReelColor(4) },
        { id: 'r16', title: 'FRBM Act', content: 'Fiscal Responsibility\n2003\nTarget: 3% FD/GDP', color: getReelColor(5) },
        { id: 'r17', title: 'Progressive Tax', content: 'Rate ↑ with Income ↑\nIncome Tax slabs\nEquitable', color: getReelColor(6) },
        { id: 'r18', title: 'Regressive Tax', content: 'Rate ↓ with Income ↑\nBurden on poor\nIndirect taxes', color: getReelColor(7) },
        { id: 'r19', title: 'Fiscal Policy', content: 'Tax + Expenditure\nGovernment tool\nEconomic goals', color: getReelColor(8) },
        { id: 'r20', title: 'Disinvestment', content: 'Sell govt stake\nPSU shares\nCapital receipt', color: getReelColor(9) },
        { id: 'r21', title: 'Finance Minister', content: 'Presents budget\nIn Lok Sabha\nMoney bills', color: getReelColor(0) },
        { id: 'r22', title: 'Zero-Based', content: 'Justify from scratch\nNo previous basis\nFresh allocation', color: getReelColor(1) },
        { id: 'r23', title: 'Outcome Budget', content: 'Focus on results\nNot just allocation\nPerformance based', color: getReelColor(2) },
        { id: 'r24', title: 'Subsidies', content: 'Financial aid\nFood, Fertilizer, Fuel\nRevenue expenditure', color: getReelColor(3) },
        { id: 'r25', title: 'Custom Duty', content: 'Import/Export tax\nProtects domestic\nIndirect tax', color: getReelColor(4) },
        { id: 'r26', title: 'Deficit Finance', content: 'Borrow to meet gap\nCreates liability\nInflationary risk', color: getReelColor(5) },
        { id: 'r27', title: 'Transfer Payment', content: 'No service in return\nPensions, Subsidies\nWelfare spending', color: getReelColor(6) },
        { id: 'r28', title: 'Tax vs Non-Tax', content: 'Tax: Compulsory\nNon-Tax: For service\nBoth = Revenue', color: getReelColor(7) },
        { id: 'r29', title: 'Revenue vs Capital', content: 'Revenue: Recurring\nCapital: One-time\nAsset based', color: getReelColor(8) },
        { id: 'r30', title: 'Budget Process', content: 'FM presents → Debate\n→ Voting → Pass\nMoney Bill procedure', color: getReelColor(9) }
      ]
    },
    {
      id: 'eco9',
      title: '9. Money Market and Capital Market',
      description: 'Financial markets for short-term and long-term funds.',
      summary: '**Money Market**: Short-term funds (<1 year).\n**Capital Market**: Long-term funds (>1 year).\n**Instruments**: T-Bills, CP, CD (Money); Shares, Debentures (Capital).',
      detailedNotes: '### 1. Money Market\n**Definition**: Market for short-term funds (less than 1 year).\n\n**Features**:\n* Short-term lending/borrowing\n* High liquidity\n* Low risk\n* No fixed location\n* Regulated by RBI\n\n**Instruments**:\n* **Treasury Bills (T-Bills)**: Govt securities (91, 182, 364 days).\n* **Commercial Paper (CP)**: Unsecured promissory note by companies.\n* **Certificate of Deposit (CD)**: Issued by banks.\n* **Call Money**: Overnight lending between banks.\n* **Repo Rate**: Rate at which RBI lends to banks.\n* **Reverse Repo**: Rate at which RBI borrows from banks.\n\n### 2. Capital Market\n**Definition**: Market for long-term funds (more than 1 year).\n\n**Components**:\n**A. Primary Market (New Issues)**:\n* IPO, FPO, Rights Issue, Private Placement.\n\n**B. Secondary Market (Stock Exchange)**:\n* BSE (Bombay Stock Exchange) - Oldest in Asia.\n* NSE (National Stock Exchange).\n* SEBI regulates capital market.\n\n**Instruments**:\n* Equity Shares, Preference Shares, Debentures, Bonds.\n\n### 3. Difference\n| Money Market | Capital Market |\n|-------------|----------------|\n| Short-term | Long-term |\n| RBI regulates | SEBI regulates |\n| Low risk | Higher risk |\n| Banks, RBI | Stock exchanges |',
      flashcards: [
        { id: 'f1', front: 'Money Market is for?', back: 'Short-term funds (less than 1 year).' },
        { id: 'f2', front: 'Capital Market is for?', back: 'Long-term funds (more than 1 year).' },
        { id: 'f3', front: 'Who regulates Money Market?', back: 'RBI (Reserve Bank of India).' },
        { id: 'f4', front: 'Who regulates Capital Market?', back: 'SEBI (Securities and Exchange Board of India).' },
        { id: 'f5', front: 'Oldest Stock Exchange in Asia?', back: 'BSE (Bombay Stock Exchange) - 1875.' },
        { id: 'f6', front: 'What are Treasury Bills (T-Bills)?', back: 'Short-term government securities issued for 91, 182, or 364 days.' },
        { id: 'f7', front: 'What is Commercial Paper (CP)?', back: 'Unsecured promissory note issued by large companies for short-term borrowing.' },
        { id: 'f8', front: 'What is Certificate of Deposit (CD)?', back: 'Negotiable term deposit issued by banks with fixed maturity.' },
        { id: 'f9', front: 'What is Call Money?', back: 'Overnight lending/borrowing between banks. Also called interbank call money.' },
        { id: 'f10', front: 'What is Repo Rate?', back: 'Rate at which RBI lends money to commercial banks against government securities.' },
        { id: 'f11', front: 'What is Reverse Repo Rate?', back: 'Rate at which RBI borrows money from commercial banks.' },
        { id: 'f12', front: 'What is IPO?', back: 'Initial Public Offering - First time a company offers shares to public.' },
        { id: 'f13', front: 'What is FPO?', back: 'Follow-on Public Offering - Additional shares by already listed company.' },
        { id: 'f14', front: 'What is Rights Issue?', back: 'New shares offered to existing shareholders at discounted price.' },
        { id: 'f15', front: 'What is Private Placement?', back: 'Shares sold directly to select investors without public offer.' },
        { id: 'f16', front: 'What is Primary Market?', back: 'Market for new issues. Company raises fresh capital from investors.' },
        { id: 'f17', front: 'What is Secondary Market?', back: 'Market for trading existing securities. No fresh capital to company.' },
        { id: 'f18', front: 'What is SENSEX?', back: 'Sensitive Index - BSE\'s benchmark index of 30 large companies.' },
        { id: 'f19', front: 'What is NIFTY 50?', back: 'NSE\'s benchmark index of 50 large companies.' },
        { id: 'f20', front: 'Difference between Equity and Preference Shares?', back: 'Equity: Voting rights, variable dividend. Preference: Fixed dividend, priority in repayment.' },
        { id: 'f21', front: 'What are Debentures?', back: 'Long-term debt instruments with fixed interest rate. Holders are creditors.' },
        { id: 'f22', front: 'What is SLR?', back: 'Statutory Liquidity Ratio - Banks must maintain % of deposits in liquid assets.' },
        { id: 'f23', front: 'What is CRR?', back: 'Cash Reserve Ratio - Banks must keep % of deposits with RBI in cash.' },
        { id: 'f24', front: 'What is Bank Rate?', back: 'Rate at which RBI provides long-term loans to banks without collateral.' },
        { id: 'f25', front: 'What is LAF?', back: 'Liquidity Adjustment Facility - RBI\'s tool to manage daily liquidity via Repo/Reverse Repo.' },
        { id: 'f26', front: 'What is MSF?', back: 'Marginal Standing Facility - Emergency overnight borrowing by banks from RBI (MSF Rate > Repo).' },
        { id: 'f27', front: 'When was SEBI established?', back: '1988 (became statutory body in 1992).' },
        { id: 'f28', front: 'What is Dematerialization (Demat)?', back: 'Converting physical shares to electronic form held in Demat account.' },
        { id: 'f29', front: 'What are Gilt-Edged Securities?', back: 'Government bonds/securities. Called gilt-edged due to high safety.' },
        { id: 'f30', front: 'What is NBFC?', back: 'Non-Banking Financial Company - Financial institution that is not a bank but provides banking services.' }
      ],
      mcqs: [
        { id: 'q1', question: 'T-Bills are _______ market instruments.', options: ['Capital', 'Money', 'Foreign', 'Commodity'], correctIndex: 1, explanation: 'Short-term govt securities.' },
        { id: 'q2', question: 'IPO is part of _______ market.', options: ['Primary', 'Secondary', 'Money', 'Tertiary'], correctIndex: 0, explanation: 'Initial Public Offering - new issue.' },
        { id: 'q3', question: 'SEBI regulates _______ market.', options: ['Money', 'Capital', 'Foreign Exchange', 'Commodity'], correctIndex: 1, explanation: 'Securities market regulator.' },
        { id: 'q4', question: 'Call Money is _______ lending.', options: ['Long-term', 'Medium-term', 'Overnight', 'Weekly'], correctIndex: 2, explanation: 'One day borrowing between banks.' },
        { id: 'q5', question: 'BSE was established in:', options: ['1865', '1875', '1885', '1895'], correctIndex: 1, explanation: 'Oldest stock exchange in Asia.' },
        { id: 'q6', question: 'RBI uses Repo Rate to _______ money supply.', options: ['Increase', 'Decrease', 'Control', 'Freeze'], correctIndex: 2, explanation: 'Monetary policy tool.' },
        { id: 'q7', question: 'Commercial Paper is issued by:', options: ['RBI', 'Government', 'Large companies', 'Individuals'], correctIndex: 2, explanation: 'Short-term corporate borrowing.' },
        { id: 'q8', question: 'Certificate of Deposit is issued by:', options: ['Companies', 'RBI', 'Banks', 'SEBI'], correctIndex: 2, explanation: 'Bank\'s negotiable deposit.' },
        { id: 'q9', question: 'SENSEX has _______ companies.', options: ['20', '30', '50', '100'], correctIndex: 1, explanation: 'BSE\'s 30-share index.' },
        { id: 'q10', question: 'NIFTY 50 belongs to:', options: ['BSE', 'NSE', 'RBI', 'SEBI'], correctIndex: 1, explanation: 'NSE\'s benchmark index.' },
        { id: 'q11', question: 'Secondary market provides _______ to securities.', options: ['Value', 'Liquidity', 'Capital', 'Interest'], correctIndex: 1, explanation: 'Easy buying and selling.' },
        { id: 'q12', question: 'Debenture holders are _______ of company.', options: ['Owners', 'Creditors', 'Managers', 'Partners'], correctIndex: 1, explanation: 'Debt instrument - lending to company.' },
        { id: 'q13', question: 'CRR is maintained with:', options: ['SEBI', 'Government', 'RBI', 'Banks themselves'], correctIndex: 2, explanation: 'Cash Reserve with central bank.' },
        { id: 'q14', question: 'Money market deals in funds for _______ than 1 year.', options: ['More', 'Less', 'Exactly', 'Minimum'], correctIndex: 1, explanation: 'Short-term funds.' },
        { id: 'q15', question: 'Capital market risk is generally _______ than money market.', options: ['Lower', 'Higher', 'Same', 'Zero'], correctIndex: 1, explanation: 'Long-term, more volatile.' },
        { id: 'q16', question: 'Rights issue is offered to:', options: ['General public', 'New investors', 'Existing shareholders', 'Government'], correctIndex: 2, explanation: 'First right to existing shareholders.' },
        { id: 'q17', question: 'Reverse Repo Rate is _______ than Repo Rate.', options: ['Higher', 'Lower', 'Equal', 'Variable'], correctIndex: 1, explanation: 'RBI borrows at lower rate.' },
        { id: 'q18', question: 'MSF Rate is _______ than Repo Rate.', options: ['Lower', 'Higher', 'Equal', 'Zero'], correctIndex: 1, explanation: 'Penalty rate for emergency borrowing.' },
        { id: 'q19', question: 'SEBI became statutory in:', options: ['1988', '1990', '1992', '1995'], correctIndex: 2, explanation: 'SEBI Act 1992.' },
        { id: 'q20', question: 'T-Bills are issued at:', options: ['Par', 'Premium', 'Discount', 'Variable'], correctIndex: 2, explanation: 'Zero coupon - sold below face value.' },
        { id: 'q21', question: 'Demat account converts shares to _______ form.', options: ['Paper', 'Electronic', 'Cash', 'Bond'], correctIndex: 1, explanation: 'Dematerialization process.' },
        { id: 'q22', question: 'Bank Rate is _______ lending rate.', options: ['Short-term', 'Long-term', 'Overnight', 'Weekly'], correctIndex: 1, explanation: 'Without collateral, long-term.' },
        { id: 'q23', question: 'Gilt-edged securities are issued by:', options: ['Companies', 'Banks', 'Government', 'RBI'], correctIndex: 2, explanation: 'Government bonds - safest.' },
        { id: 'q24', question: 'Private Placement means sale to _______ investors.', options: ['All', 'Select few', 'Foreign', 'Government'], correctIndex: 1, explanation: 'Not public offer.' },
        { id: 'q25', question: 'SLR assets include:', options: ['Cash only', 'Gold, Govt securities', 'Foreign currency', 'Shares'], correctIndex: 1, explanation: 'Liquid assets banks must maintain.' },
        { id: 'q26', question: 'FPO is issued by _______ companies.', options: ['New', 'Already listed', 'Private', 'Foreign'], correctIndex: 1, explanation: 'Follow-on Public Offer.' },
        { id: 'q27', question: 'LAF is used for _______ liquidity management.', options: ['Annual', 'Monthly', 'Weekly', 'Daily'], correctIndex: 3, explanation: 'Daily money market operations.' },
        { id: 'q28', question: 'NBFC is regulated by:', options: ['SEBI', 'Government', 'RBI', 'Banks'], correctIndex: 2, explanation: 'Non-banking financial companies.' },
        { id: 'q29', question: 'Equity shareholders have _______ rights.', options: ['Fixed dividend', 'Voting', 'Priority repayment', 'Guaranteed return'], correctIndex: 1, explanation: 'Owners of company.' },
        { id: 'q30', question: 'Preference shareholders get _______ dividend.', options: ['Variable', 'Fixed', 'No', 'Bonus'], correctIndex: 1, explanation: 'Preferred for dividend payment.' }
      ],
      reels: [
        { id: 'r1', title: 'Money Market', content: 'Short-term funds.\n< 1 year.\nRBI regulates.', color: getReelColor(0) },
        { id: 'r2', title: 'Capital Market', content: 'Long-term funds.\n> 1 year.\nSEBI regulates.', color: getReelColor(1) },
        { id: 'r3', title: 'T-Bills', content: 'Treasury Bills.\nGovt securities.\n91, 182, 364 days.', color: getReelColor(2) },
        { id: 'r4', title: 'Repo Rate', content: 'RBI lends to banks.\nBorrowing rate for banks.\nMonetary policy tool', color: getReelColor(3) },
        { id: 'r5', title: 'Primary Market', content: 'New Issues.\nIPO, FPO, Rights Issue.\nFresh capital raised', color: getReelColor(4) },
        { id: 'r6', title: 'Secondary Market', content: 'Existing securities.\nBSE, NSE.\nProvides liquidity', color: getReelColor(5) },
        { id: 'r7', title: 'BSE', content: 'Bombay Stock Exchange.\nOldest in Asia (1875).\nSensex - 30 stocks', color: getReelColor(6) },
        { id: 'r8', title: 'NSE', content: 'National Stock Exchange.\nNifty 50 index.\nElectronic trading', color: getReelColor(7) },
        { id: 'r9', title: 'Call Money', content: 'Overnight lending\nBetween banks\nHighly liquid', color: getReelColor(8) },
        { id: 'r10', title: 'Commercial Paper', content: 'Unsecured note\nLarge companies\nShort-term borrowing', color: getReelColor(9) },
        { id: 'r11', title: 'CD', content: 'Certificate of Deposit\nIssued by banks\nNegotiable instrument', color: getReelColor(0) },
        { id: 'r12', title: 'Reverse Repo', content: 'RBI borrows from banks\nLower than Repo\nAbsorbs liquidity', color: getReelColor(1) },
        { id: 'r13', title: 'IPO', content: 'Initial Public Offering\nFirst time public\nPrimary market', color: getReelColor(2) },
        { id: 'r14', title: 'FPO', content: 'Follow-on Public Offer\nListed company\nAdditional shares', color: getReelColor(3) },
        { id: 'r15', title: 'Rights Issue', content: 'To existing shareholders\nAt discount\nFirst right', color: getReelColor(4) },
        { id: 'r16', title: 'Debentures', content: 'Long-term debt\nFixed interest\nCreditors, not owners', color: getReelColor(5) },
        { id: 'r17', title: 'Equity Shares', content: 'Ownership shares\nVoting rights\nVariable dividend', color: getReelColor(6) },
        { id: 'r18', title: 'Preference Shares', content: 'Fixed dividend\nPriority payment\nLimited voting', color: getReelColor(7) },
        { id: 'r19', title: 'CRR', content: 'Cash Reserve Ratio\n% deposits with RBI\nControls money supply', color: getReelColor(8) },
        { id: 'r20', title: 'SLR', content: 'Statutory Liquidity Ratio\n% in liquid assets\nGold, Govt securities', color: getReelColor(9) },
        { id: 'r21', title: 'SEBI', content: '1988, Statutory 1992\nCapital market regulator\nInvestor protection', color: getReelColor(0) },
        { id: 'r22', title: 'Demat', content: 'Dematerialization\nPhysical → Electronic\nDemat account needed', color: getReelColor(1) },
        { id: 'r23', title: 'Bank Rate', content: 'Long-term lending\nNo collateral\nRBI to banks', color: getReelColor(2) },
        { id: 'r24', title: 'MSF', content: 'Marginal Standing Facility\nEmergency borrowing\nMSF > Repo Rate', color: getReelColor(3) },
        { id: 'r25', title: 'LAF', content: 'Liquidity Adjustment\nDaily operations\nRepo + Reverse Repo', color: getReelColor(4) },
        { id: 'r26', title: 'Gilt-Edged', content: 'Government bonds\nSafest investment\nLow risk, low return', color: getReelColor(5) },
        { id: 'r27', title: 'Money vs Capital', content: 'Money: <1yr, RBI\nCapital: >1yr, SEBI\nDifferent purposes', color: getReelColor(6) },
        { id: 'r28', title: 'NBFC', content: 'Non-Banking Financial\nRBI regulated\nBanking-like services', color: getReelColor(7) },
        { id: 'r29', title: 'Private Placement', content: 'Select investors only\nNot public offer\nQuick capital raise', color: getReelColor(8) },
        { id: 'r30', title: 'Rate Hierarchy', content: 'MSF > Repo > Reverse\nBank Rate for long-term\nRBI policy rates', color: getReelColor(9) }
      ]
    },
    {
      id: 'eco10',
      title: '10. Foreign Trade of India',
      description: 'Imports, Exports, Balance of Trade, and Trade Policy.',
      summary: '**Foreign Trade**: Exchange of goods/services across borders.\n**Balance of Trade**: Exports - Imports.\n**India\'s Trade Partners**: USA, China, UAE, Saudi Arabia.',
      detailedNotes: '### 1. Meaning\n**Foreign Trade** = Exchange of goods and services between countries.\n\n**Types**:\n* **Import Trade**: Buying from other countries.\n* **Export Trade**: Selling to other countries.\n* **Entrepot Trade**: Import for re-export.\n\n### 2. Balance of Trade (BOT)\n**BOT = Exports - Imports** (Visible items only)\n* **Favorable/Surplus**: Exports > Imports\n* **Unfavorable/Deficit**: Imports > Exports\n\n### 3. Balance of Payments (BOP)\nRecord of all economic transactions with rest of world.\n* Current Account: Trade in goods, services, transfers.\n* Capital Account: Capital flows, investments.\n\n### 4. India\'s Major Exports\n* Petroleum products\n* Gems & Jewelry\n* Pharmaceuticals\n* IT Services\n* Textiles & Garments\n* Agricultural products\n\n### 5. India\'s Major Imports\n* Crude Oil\n* Gold & Precious metals\n* Electronic goods\n* Machinery\n* Chemicals\n\n### 6. Trade Policy\n* Export Promotion: SEZ, Duty Drawback, Export subsidies.\n* Import Substitution: Make in India.\n* Free Trade Agreements (FTAs).\n\n### 7. Major Trade Partners\nUSA, China, UAE, Saudi Arabia, Germany, Singapore.',
      flashcards: [
        { id: 'f1', front: 'Balance of Trade = ?', back: 'Exports - Imports (Visible items only).' },
        { id: 'f2', front: 'Favorable BOT means?', back: 'Exports > Imports (Trade Surplus).' },
        { id: 'f3', front: 'India\'s largest import?', back: 'Crude Oil / Petroleum.' },
        { id: 'f4', front: 'What is Entrepot Trade?', back: 'Import goods for re-export to another country.' },
        { id: 'f5', front: 'SEZ stands for?', back: 'Special Economic Zone.' },
        { id: 'f6', front: 'What is Foreign Trade?', back: 'Exchange of goods and services between two or more countries.' },
        { id: 'f7', front: 'Types of Foreign Trade?', back: 'Import Trade, Export Trade, and Entrepot Trade.' },
        { id: 'f8', front: 'What is Import Trade?', back: 'Buying goods and services from other countries.' },
        { id: 'f9', front: 'What is Export Trade?', back: 'Selling goods and services to other countries.' },
        { id: 'f10', front: 'Balance of Payments (BOP) = ?', back: 'Record of all economic transactions between a country and rest of the world.' },
        { id: 'f11', front: 'Components of BOP?', back: 'Current Account and Capital Account.' },
        { id: 'f12', front: 'Current Account includes?', back: 'Trade in goods, services, income, and current transfers.' },
        { id: 'f13', front: 'Capital Account includes?', back: 'Capital transfers, FDI, FPI, loans, and banking capital.' },
        { id: 'f14', front: 'Visible Trade includes?', back: 'Physical goods that can be seen and touched (merchandise).' },
        { id: 'f15', front: 'Invisible Trade includes?', back: 'Services like IT, tourism, banking, insurance, shipping.' },
        { id: 'f16', front: 'What is Trade Deficit?', back: 'When imports exceed exports (Unfavorable BOT).' },
        { id: 'f17', front: 'What is Trade Surplus?', back: 'When exports exceed imports (Favorable BOT).' },
        { id: 'f18', front: 'What is Duty Drawback?', back: 'Refund of customs duty paid on imported inputs used in exported goods.' },
        { id: 'f19', front: 'What is FTA?', back: 'Free Trade Agreement - Agreement between countries to reduce/eliminate trade barriers.' },
        { id: 'f20', front: 'India\'s major export items?', back: 'Petroleum products, Gems & Jewelry, Pharma, IT Services, Textiles.' },
        { id: 'f21', front: 'India\'s major import items?', back: 'Crude oil, Gold, Electronics, Machinery, Chemicals.' },
        { id: 'f22', front: 'What is Make in India?', back: 'Government initiative to encourage manufacturing in India and reduce imports.' },
        { id: 'f23', front: 'What is FDI?', back: 'Foreign Direct Investment - Direct investment by foreign entity in domestic business.' },
        { id: 'f24', front: 'What is FPI?', back: 'Foreign Portfolio Investment - Investment in stocks, bonds without direct control.' },
        { id: 'f25', front: 'Terms of Trade = ?', back: 'Export Price Index / Import Price Index × 100' },
        { id: 'f26', front: 'What is EXIM Policy?', back: 'Export-Import Policy - Government policy to promote foreign trade.' },
        { id: 'f27', front: 'What is WTO?', back: 'World Trade Organization - International body governing global trade rules.' },
        { id: 'f28', front: 'India joined WTO in?', back: '1995 (as founding member).' },
        { id: 'f29', front: 'What is Quota?', back: 'Quantitative restriction on import/export of goods.' },
        { id: 'f30', front: 'What is Tariff?', back: 'Tax/duty imposed on imported goods.' }
      ],
      mcqs: [
        { id: 'q1', question: 'India\'s BOT is generally _______.', options: ['Favorable', 'Unfavorable', 'Zero', 'Positive'], correctIndex: 1, explanation: 'India imports more than it exports.' },
        { id: 'q2', question: 'Entrepot trade involves _______.', options: ['Only import', 'Only export', 'Import for re-export', 'Domestic trade'], correctIndex: 2, explanation: 'Singapore is famous for entrepot trade.' },
        { id: 'q3', question: 'India\'s largest trading partner is _______.', options: ['USA', 'China', 'UAE', 'UK'], correctIndex: 0, explanation: 'USA is the largest trade partner by value.' },
        { id: 'q4', question: 'Balance of Trade measures _______ items.', options: ['Visible', 'Invisible', 'Both', 'Neither'], correctIndex: 0, explanation: 'BOT includes only merchandise trade.' },
        { id: 'q5', question: 'India\'s largest import is:', options: ['Gold', 'Electronics', 'Crude Oil', 'Machinery'], correctIndex: 2, explanation: 'Crude oil is India\'s biggest import by value.' },
        { id: 'q6', question: 'SEZ is for _______ promotion.', options: ['Import', 'Export', 'Domestic', 'Agriculture'], correctIndex: 1, explanation: 'Special Economic Zones promote exports.' },
        { id: 'q7', question: 'BOP includes _______ account(s).', options: ['Only Current', 'Only Capital', 'Current and Capital', 'Revenue'], correctIndex: 2, explanation: 'Two main accounts in BOP.' },
        { id: 'q8', question: 'IT Services are _______ trade.', options: ['Visible', 'Invisible', 'Entrepot', 'Domestic'], correctIndex: 1, explanation: 'Services are invisible exports.' },
        { id: 'q9', question: 'Exports > Imports means _______ BOT.', options: ['Unfavorable', 'Favorable', 'Deficit', 'Adverse'], correctIndex: 1, explanation: 'Trade surplus is favorable.' },
        { id: 'q10', question: 'FDI comes under _______ account of BOP.', options: ['Current', 'Capital', 'Revenue', 'Trade'], correctIndex: 1, explanation: 'FDI is capital flow.' },
        { id: 'q11', question: 'WTO was established in:', options: ['1990', '1995', '2000', '2005'], correctIndex: 1, explanation: 'Replaced GATT in 1995.' },
        { id: 'q12', question: 'Make in India aims at _______ substitution.', options: ['Export', 'Import', 'Tax', 'Service'], correctIndex: 1, explanation: 'Reduce imports by domestic production.' },
        { id: 'q13', question: 'Duty Drawback is related to:', options: ['Imports', 'Exports', 'Domestic sales', 'Tax evasion'], correctIndex: 1, explanation: 'Refund for exporters.' },
        { id: 'q14', question: 'Current Account includes:', options: ['FDI', 'FPI', 'Trade in goods & services', 'Loans'], correctIndex: 2, explanation: 'Day-to-day transactions.' },
        { id: 'q15', question: 'Tariff is a _______ on imports.', options: ['Subsidy', 'Tax', 'Quota', 'License'], correctIndex: 1, explanation: 'Import duty/tax.' },
        { id: 'q16', question: 'Quota is a _______ restriction.', options: ['Quality', 'Quantitative', 'Price', 'None'], correctIndex: 1, explanation: 'Limit on quantity.' },
        { id: 'q17', question: 'India exports _______ products to USA.', options: ['Only IT', 'Pharma & IT', 'Only textiles', 'Crude oil'], correctIndex: 1, explanation: 'Major export items to USA.' },
        { id: 'q18', question: 'Singapore is famous for _______ trade.', options: ['Import', 'Export', 'Entrepot', 'Domestic'], correctIndex: 2, explanation: 'Hub for re-export trade.' },
        { id: 'q19', question: 'Terms of Trade measures:', options: ['Export volume', 'Import volume', 'Export vs Import prices', 'Trade deficit'], correctIndex: 2, explanation: 'Ratio of export to import prices.' },
        { id: 'q20', question: 'FTA removes/reduces _______ barriers.', options: ['Technical', 'Trade', 'Political', 'Social'], correctIndex: 1, explanation: 'Free Trade Agreement.' },
        { id: 'q21', question: 'Invisible trade includes:', options: ['Machinery', 'Software services', 'Gold', 'Crude oil'], correctIndex: 1, explanation: 'Services are invisible.' },
        { id: 'q22', question: 'India imports gold from:', options: ['USA', 'China', 'UAE & Switzerland', 'UK'], correctIndex: 2, explanation: 'Major gold import sources.' },
        { id: 'q23', question: 'EXIM Policy is related to:', options: ['Taxation', 'Foreign Trade', 'Banking', 'Agriculture'], correctIndex: 1, explanation: 'Export-Import Policy.' },
        { id: 'q24', question: 'Trade Deficit means:', options: ['X > M', 'M > X', 'X = M', 'X - M = 0'], correctIndex: 1, explanation: 'Imports exceed Exports.' },
        { id: 'q25', question: 'FPI is _______ investment.', options: ['Direct', 'Portfolio', 'Real estate', 'Infrastructure'], correctIndex: 1, explanation: 'Stocks and bonds investment.' },
        { id: 'q26', question: 'India is member of WTO since:', options: ['1990', '1995', '2000', '2010'], correctIndex: 1, explanation: 'Founding member of WTO.' },
        { id: 'q27', question: 'Petroleum products are India\'s major:', options: ['Import only', 'Export', 'Neither', 'Both'], correctIndex: 1, explanation: 'Refined petroleum is exported.' },
        { id: 'q28', question: 'Gems & Jewelry is exported mainly from:', options: ['Mumbai', 'Surat', 'Delhi', 'Chennai'], correctIndex: 1, explanation: 'Surat is diamond hub.' },
        { id: 'q29', question: 'Current Account Deficit means:', options: ['Surplus in services', 'Deficit in goods & services', 'Capital inflow', 'FDI increase'], correctIndex: 1, explanation: 'CAD = More outflow than inflow.' },
        { id: 'q30', question: 'Import substitution is opposite of:', options: ['Export promotion', 'Export substitution', 'Import promotion', 'Trade deficit'], correctIndex: 0, explanation: 'Two different trade strategies.' }
      ],
      reels: [
        { id: 'r1', title: 'Foreign Trade', content: 'Exchange between countries.\nImport + Export.', color: getReelColor(0) },
        { id: 'r2', title: 'BOT', content: 'Balance of Trade.\nExports - Imports.\nVisible items only.', color: getReelColor(1) },
        { id: 'r3', title: 'Favorable', content: 'Exports > Imports.\nTrade Surplus.\nGood for economy.', color: getReelColor(2) },
        { id: 'r4', title: 'Unfavorable', content: 'Imports > Exports.\nTrade Deficit.\nIndia\'s usual position.', color: getReelColor(3) },
        { id: 'r5', title: 'Major Exports', content: 'Petroleum products.\nGems & Jewelry.\nIT Services.\nPharma.', color: getReelColor(4) },
        { id: 'r6', title: 'Major Imports', content: 'Crude Oil.\nGold.\nElectronics.\nMachinery.', color: getReelColor(5) },
        { id: 'r7', title: 'Trade Partners', content: 'USA, China, UAE.\nSaudi Arabia, Germany.', color: getReelColor(6) },
        { id: 'r8', title: 'SEZ', content: 'Special Economic Zone.\nExport promotion.\nTax benefits.', color: getReelColor(7) },
        { id: 'r9', title: 'BOP', content: 'Balance of Payments\nAll transactions\nCurrent + Capital', color: getReelColor(8) },
        { id: 'r10', title: 'Current Account', content: 'Goods & Services\nIncome, Transfers\nDay-to-day trade', color: getReelColor(9) },
        { id: 'r11', title: 'Capital Account', content: 'FDI, FPI\nLoans, Banking\nCapital flows', color: getReelColor(0) },
        { id: 'r12', title: 'Visible Trade', content: 'Physical goods\nMerchandise\nCan be seen', color: getReelColor(1) },
        { id: 'r13', title: 'Invisible Trade', content: 'Services\nIT, Tourism, Banking\nCannot be seen', color: getReelColor(2) },
        { id: 'r14', title: 'Entrepot', content: 'Import to re-export\nSingapore, Dubai\nMiddleman trade', color: getReelColor(3) },
        { id: 'r15', title: 'FDI', content: 'Foreign Direct Investment\nDirect control\nCapital account', color: getReelColor(4) },
        { id: 'r16', title: 'FPI', content: 'Foreign Portfolio\nStocks, Bonds\nNo direct control', color: getReelColor(5) },
        { id: 'r17', title: 'Tariff', content: 'Tax on imports\nProtects domestic\nRaises revenue', color: getReelColor(6) },
        { id: 'r18', title: 'Quota', content: 'Quantity limit\nRestricts volume\nTrade barrier', color: getReelColor(7) },
        { id: 'r19', title: 'WTO', content: 'World Trade Org\n1995\nGlobal trade rules', color: getReelColor(8) },
        { id: 'r20', title: 'FTA', content: 'Free Trade Agreement\nNo/low tariffs\nTrade promotion', color: getReelColor(9) },
        { id: 'r21', title: 'Duty Drawback', content: 'Refund to exporters\nOn import duty\nExport incentive', color: getReelColor(0) },
        { id: 'r22', title: 'Make in India', content: 'Import substitution\nDomestic manufacturing\nReduce imports', color: getReelColor(1) },
        { id: 'r23', title: 'Terms of Trade', content: 'Export Price / Import\n× 100\nTrade advantage', color: getReelColor(2) },
        { id: 'r24', title: 'EXIM Policy', content: 'Export-Import Policy\nTrade promotion\nGovt guidelines', color: getReelColor(3) },
        { id: 'r25', title: 'Trade Deficit', content: 'M > X\nNegative BOT\nNeed more exports', color: getReelColor(4) },
        { id: 'r26', title: 'Trade Surplus', content: 'X > M\nPositive BOT\nFavorable balance', color: getReelColor(5) },
        { id: 'r27', title: 'CAD', content: 'Current Account Deficit\nOutflow > Inflow\nNeeds financing', color: getReelColor(6) },
        { id: 'r28', title: 'India\'s Trade', content: 'Usually deficit\nOil imports high\nIT exports strong', color: getReelColor(7) },
        { id: 'r29', title: 'Trade Types', content: 'Import Trade\nExport Trade\nEntrepot Trade', color: getReelColor(8) },
        { id: 'r30', title: 'Key Formula', content: 'BOT = X - M\nBOP = Current + Capital\nMaster these!', color: getReelColor(9) }
      ]
    }
  ]
};

const ENGLISH_SUBJECT: Subject = {
  id: 'eng',
  name: 'English',
  icon: 'BookA',
  color: 'bg-yellow-500',
  syllabus: '1. Prose\n2. Poetry\n3. Writing Skills\n4. Novel (Genre-Drama)',
  paperPattern: '### English Paper Pattern (80 Marks)\n\n* **Q.1 Prose (16 Marks)**\n* **Q.2 Poetry (14 Marks)**\n* **Q.3 Writing Skills (16 Marks)**\n* **Q.4 Novel (16 Marks)**\n* **Grammar & Vocabulary integrated**',
  previousPapers: [],
  chapters: [
    {
      id: 'eng1',
      title: '1.1 An Astrologer\'s Day',
      description: 'By R.K. Narayan - A story of fate and irony.',
      summary: '**Genre**: Short Story\n**Author**: R.K. Narayan\n**Theme**: Irony of fate, guilt, redemption\n\nAn astrologer who is actually a fraud meets a customer who turns out to be the man he thought he had killed years ago. Through clever manipulation, the astrologer saves himself and finds peace from his guilt.',
      detailedNotes: '### About the Author\nR.K. Narayan (1906-2001) was one of the most famous Indian writers in English. His stories are set in the fictional town of Malgudi.\n\n### Setting\n* Town Hall Road at night\n* Under a tamarind tree\n* Near a municipal boundary\n\n### Characters\n* **The Astrologer**: Shrewd, observant, practical, carries guilt from his past.\n* **Guru Nayak**: The antagonist, seeking revenge for attempted murder.\n* **The Wife**: Represents the astrologer\'s present peaceful life.\n\n### Plot Summary\n1. The astrologer sets up his business at night under artificial lighting.\n2. He has no real knowledge of astrology but uses psychology and intuition.\n3. Guru Nayak comes as a customer challenging his abilities.\n4. Through the conversation, we learn the astrologer stabbed Guru Nayak years ago and fled his village.\n5. The astrologer cleverly tells Guru Nayak that the attacker died in an accident.\n6. Guru Nayak leaves satisfied, and the astrologer finally finds peace.\n\n### Themes\n1. **Irony**: A fake astrologer predicts real truth about his own past.\n2. **Guilt and Redemption**: Years of guilt finally resolved.\n3. **Fate vs. Free Will**: The chance meeting seems destined.\n4. **Appearance vs. Reality**: The astrologer appears knowledgeable but is actually a fraud.\n\n### Literary Devices\n* **Situational Irony**: The astrologer meets his would-be victim.\n* **Suspense**: Built throughout the encounter with Guru Nayak.\n* **Foreshadowing**: The unusual gleam in Guru Nayak\'s eyes.\n* **Characterization**: Revealed through dialogue and actions.',
      flashcards: [
        { id: 'f1', front: 'Author of An Astrologer\'s Day?', back: 'R.K. Narayan.' },
        { id: 'f2', front: 'Name of the antagonist?', back: 'Guru Nayak.' },
        { id: 'f3', front: 'What is the fictional town in R.K. Narayan\'s stories?', back: 'Malgudi.' },
        { id: 'f4', front: 'Under which tree did the astrologer sit?', back: 'Tamarind tree.' },
        { id: 'f5', front: 'What did the astrologer tell Guru Nayak about his attacker?', back: 'That the attacker died in an accident four months ago.' },
        { id: 'f6', front: 'What is the main theme of the story?', back: 'Irony of fate and redemption from guilt.' },
        { id: 'f7', front: 'How much money did Guru Nayak give the astrologer?', back: 'A rupee.' },
        { id: 'f8', front: 'Why did the astrologer leave his village?', back: 'He had stabbed a man (Guru Nayak) and thought he had killed him.' }
      ],
      mcqs: [
        { id: 'q1', question: 'The astrologer carried out his business under a ______ tree.', options: ['Banyan', 'Tamarind', 'Neem', 'Peepal'], correctIndex: 1, explanation: 'He sat under the boughs of a spreading tamarind tree.' },
        { id: 'q2', question: 'The astrologer told Guru Nayak that his attacker had died ______ months ago.', options: ['Two', 'Three', 'Four', 'Six'], correctIndex: 2, explanation: 'He said the attacker was crushed under a lorry four months ago.' },
        { id: 'q3', question: 'R.K. Narayan\'s stories are set in the fictional town of:', options: ['Malgudi', 'Mangalore', 'Mysore', 'Mumbai'], correctIndex: 0, explanation: 'Malgudi is a fictional South Indian town created by R.K. Narayan.' },
        { id: 'q4', question: 'The predominant literary device in this story is:', options: ['Metaphor', 'Simile', 'Irony', 'Personification'], correctIndex: 2, explanation: 'The story is built around situational irony - a fake astrologer reveals real truth.' },
        { id: 'q5', question: 'How did the astrologer feel after Guru Nayak left?', options: ['Scared', 'Relieved', 'Angry', 'Sad'], correctIndex: 1, explanation: 'He felt relieved that his past was finally resolved and Guru Nayak would stop searching.' }
      ],
      reels: [
        { id: 'r1', title: 'Fake Astrologer', content: 'He had NO knowledge of astrology!\nJust psychology & intuition.', color: getReelColor(0) },
        { id: 'r2', title: 'Past Crime', content: 'Years ago, he stabbed a man & fled.\nThat man was Guru Nayak!', color: getReelColor(1) },
        { id: 'r3', title: 'Twist of Fate', content: 'The "dead" victim came as a customer.\nPure irony!', color: getReelColor(2) },
        { id: 'r4', title: 'Clever Escape', content: '"Your attacker died 4 months ago."\nGuru Nayak believed it!', color: getReelColor(3) },
        { id: 'r5', title: 'Theme', content: 'Irony + Guilt + Redemption.\nFate brings closure.', color: getReelColor(4) },
        { id: 'r6', title: 'Setting', content: 'Under a tamarind tree.\nTown Hall Road at night.', color: getReelColor(5) },
        { id: 'r7', title: 'Author', content: 'R.K. Narayan\nMalgudi Days fame\n1906-2001', color: getReelColor(6) }
      ]
    },
    {
      id: 'eng2',
      title: '1.2 On Saying Please',
      description: 'By A.G. Gardiner - Essay on courtesy and manners.',
      summary: '**Genre**: Essay\n**Author**: A.G. Gardiner\n**Theme**: Importance of courtesy and good manners in daily life.\n\nThe essay discusses how small courtesies like saying "please" and "thank you" make social life pleasant, even though discourtesy is not legally punishable.',
      detailedNotes: '### About the Author\nAlfred George Gardiner (1865-1946) was a British journalist and author. He wrote under the pen name "Alpha of the Plough."\n\n### Central Theme\nThe essay argues that while law punishes physical assault, there is no legal remedy for moral assault (rudeness). Yet, courtesy and good manners are essential for a civilized society.\n\n### Key Arguments\n1. **Law vs. Morality**: Physical assault is punishable, but rudeness is not.\n2. **Impact of Rudeness**: Discourtesy can ruin someone\'s entire day.\n3. **Chain Reaction**: Bad behavior spreads like infection.\n4. **Small Words Matter**: "Please" and "Thank you" are lubricants of social life.\n5. **Everyone Deserves Respect**: From a lift-man to a celebrity.\n\n### The Lift-Man Incident\n* A lift-man threw out a passenger who didn\'t say "Top please."\n* The passenger only said "Top" without courtesy.\n* Law sided with the passenger (physical assault).\n* But morally, the passenger was equally wrong.\n\n### The Conductor Example\n* A cheerful bus conductor spread positivity.\n* His pleasant manners made everyone\'s journey enjoyable.\n* Small courtesies create a pleasant atmosphere.\n\n### Important Quotes\n* "A civil tongue is the lubricant of social life."\n* "Courtesy costs nothing but pays well."\n* "Bad manners probably do more to poison the stream of general life than all the crimes."\n\n### Life Lessons\n1. Always use polite words.\n2. Treat everyone with respect regardless of status.\n3. Your behavior affects others\' mood.\n4. Courtesy is contagious - spread it!',
      flashcards: [
        { id: 'f1', front: 'Author of On Saying Please?', back: 'A.G. Gardiner (Alfred George Gardiner).' },
        { id: 'f2', front: 'Pen name of A.G. Gardiner?', back: 'Alpha of the Plough.' },
        { id: 'f3', front: 'What is the "lubricant of social life" according to the essay?', back: 'A civil tongue / Courtesy.' },
        { id: 'f4', front: 'Who threw a passenger out for not saying "please"?', back: 'The lift-man.' },
        { id: 'f5', front: 'What does the essay say about law and rudeness?', back: 'Law cannot punish rudeness (moral assault), only physical assault.' },
        { id: 'f6', front: 'What example shows positive effect of courtesy?', back: 'The cheerful bus conductor who spread positivity.' },
        { id: 'f7', front: 'Genre of On Saying Please?', back: 'Essay (Informal/Personal Essay).' }
      ],
      mcqs: [
        { id: 'q1', question: 'A.G. Gardiner wrote under the pen name:', options: ['Beta of the Plough', 'Alpha of the Plough', 'Gamma of the Stars', 'Delta of the Moon'], correctIndex: 1, explanation: 'Alpha of the Plough was his famous pen name.' },
        { id: 'q2', question: 'The lift-man threw out the passenger because:', options: ['He was rude', 'He didn\'t pay', 'He didn\'t say please', 'He was late'], correctIndex: 2, explanation: 'The passenger said only "Top" without adding "please."' },
        { id: 'q3', question: 'According to the essay, courtesy is:', options: ['A legal requirement', 'A moral necessity', 'Unnecessary', 'Only for educated people'], correctIndex: 1, explanation: 'Courtesy is not legally required but morally essential.' },
        { id: 'q4', question: 'The essay compares good manners to:', options: ['Money', 'Lubricant', 'Medicine', 'Food'], correctIndex: 1, explanation: 'Civil tongue is the lubricant of social life.' },
        { id: 'q5', question: 'The bus conductor example shows:', options: ['How to earn money', 'Positive effect of courtesy', 'How to drive', 'Legal requirements'], correctIndex: 1, explanation: 'His cheerful behavior made everyone\'s journey pleasant.' }
      ],
      reels: [
        { id: 'r1', title: 'The Lift-Man', content: 'Threw out a passenger\nwho didn\'t say "Please".\nLaw punished him, not the rude passenger.', color: getReelColor(0) },
        { id: 'r2', title: 'Law vs Morality', content: 'Physical assault = Punishable\nMoral assault = No legal remedy\nBut equally damaging!', color: getReelColor(1) },
        { id: 'r3', title: 'The Bus Conductor', content: 'Cheerful & polite.\nMade everyone\'s day better.\nCourtesy is contagious!', color: getReelColor(2) },
        { id: 'r4', title: 'Magic Words', content: '"Please" and "Thank you"\nCost nothing.\nPay everything!', color: getReelColor(3) },
        { id: 'r5', title: 'Chain Reaction', content: 'Rudeness spreads like disease.\nSo does kindness.\nChoose wisely!', color: getReelColor(4) },
        { id: 'r6', title: 'Key Quote', content: '"A civil tongue is the\nlubricant of social life."', color: getReelColor(5) },
        { id: 'r7', title: 'Author', content: 'A.G. Gardiner\nPen name: Alpha of the Plough\nBritish journalist', color: getReelColor(6) }
      ]
    },
    {
      id: 'eng3',
      title: '1.3 The Cop and the Anthem',
      description: 'By O. Henry - A story of ironic twists.',
      summary: '**Genre**: Short Story\n**Author**: O. Henry (William Sydney Porter)\n**Theme**: Irony of fate, reformation vs. circumstances\n\nSoapy, a homeless man, tries to get arrested to spend winter in jail but fails repeatedly. When he finally decides to reform his life, he gets arrested for loitering.',
      detailedNotes: '### About the Author\nO. Henry (1862-1910) was an American short story writer known for his surprise endings. Real name: William Sydney Porter.\n\n### Setting\n* New York City\n* Madison Square\n* A church\n\n### Main Character\n**Soapy**: A homeless man (tramp) who wants to spend winter in Blackwell\'s Island prison where he\'ll get food and shelter.\n\n### Plot Summary\n**Soapy\'s attempts to get arrested:**\n1. **Restaurant**: Eats without paying - thrown out, not arrested.\n2. **Breaks window**: Runs away but cop doesn\'t suspect him.\n3. **Another restaurant**: Same result - kicked out.\n4. **Pretends to be drunk**: Cop thinks he\'s a Yale student celebrating.\n5. **Flirts with a woman**: She turns out to be willing!\n6. **Disturbs peace**: Cop thinks he\'s a celebrating fan.\n\n**The Turning Point:**\n* Passes a church, hears anthem (hymn).\n* Music reminds him of his better past.\n* Decides to reform - get a job, live honestly.\n\n**Ironic Ending:**\n* Just as he decides to change, a cop arrests him for loitering.\n* Sentenced to three months on Blackwell\'s Island.\n\n### Themes\n1. **Irony**: Gets what he wanted when he no longer wants it.\n2. **Fate vs. Free Will**: Circumstances overpower intentions.\n3. **Appearance vs. Reality**: Nothing is as it seems.\n4. **Power of Music**: The anthem triggers transformation.\n\n### O. Henry\'s Style\n* Surprise/Twist endings\n* Ironic situations\n* Sympathetic portrayal of common people\n* Humor mixed with pathos',
      flashcards: [
        { id: 'f1', front: 'Author of The Cop and the Anthem?', back: 'O. Henry (William Sydney Porter).' },
        { id: 'f2', front: 'Real name of O. Henry?', back: 'William Sydney Porter.' },
        { id: 'f3', front: 'What is Soapy trying to do throughout the story?', back: 'Get arrested to spend winter in Blackwell\'s Island prison.' },
        { id: 'f4', front: 'How many times does Soapy try to get arrested?', back: 'Six times.' },
        { id: 'f5', front: 'What triggers Soapy\'s desire to reform?', back: 'The church anthem (hymn/music).' },
        { id: 'f6', front: 'What is the ironic twist at the end?', back: 'He gets arrested for loitering just when he decides to reform.' },
        { id: 'f7', front: 'O. Henry is famous for what type of endings?', back: 'Surprise/Twist endings.' },
        { id: 'f8', front: 'Where is the story set?', back: 'New York City (Madison Square).' }
      ],
      mcqs: [
        { id: 'q1', question: 'Soapy wanted to get arrested to:', options: ['Escape enemies', 'Get shelter in winter', 'Meet a friend', 'Get famous'], correctIndex: 1, explanation: 'He wanted food and shelter at Blackwell\'s Island prison during winter.' },
        { id: 'q2', question: 'How many attempts did Soapy make to get arrested?', options: ['Four', 'Five', 'Six', 'Seven'], correctIndex: 2, explanation: 'He tried six different methods to get arrested.' },
        { id: 'q3', question: 'What made Soapy want to reform?', options: ['A sermon', 'A policeman', 'Church anthem', 'A friend'], correctIndex: 2, explanation: 'The anthem reminded him of his better past.' },
        { id: 'q4', question: 'O. Henry stories are known for:', options: ['Happy endings', 'Twist endings', 'Sad endings', 'No endings'], correctIndex: 1, explanation: 'O. Henry\'s signature style is the surprise/twist ending.' },
        { id: 'q5', question: 'At the end, Soapy is arrested for:', options: ['Theft', 'Fighting', 'Loitering', 'Drinking'], correctIndex: 2, explanation: 'He was arrested for loitering outside the church.' }
      ],
      reels: [
        { id: 'r1', title: 'Soapy\'s Goal', content: 'Get arrested!\nWinter is coming.\nJail = Food + Shelter', color: getReelColor(0) },
        { id: 'r2', title: 'Attempt #1', content: 'Ate at restaurant without paying.\nResult: Kicked out, not arrested!', color: getReelColor(1) },
        { id: 'r3', title: 'Attempt #2', content: 'Broke a shop window.\nResult: Cop didn\'t suspect him!', color: getReelColor(2) },
        { id: 'r4', title: 'The Anthem', content: 'Church music played.\nMemories of better days.\nSoapy decides to REFORM!', color: getReelColor(3) },
        { id: 'r5', title: 'TWIST!', content: 'Finally arrested!\nFor just standing there.\nIRONY at its best.', color: getReelColor(4) },
        { id: 'r6', title: 'O. Henry Style', content: 'Surprise endings!\nIronic situations.\nCommon people as heroes.', color: getReelColor(5) },
        { id: 'r7', title: 'Theme', content: 'When you want something = Can\'t get it.\nWhen you don\'t want = You get it!', color: getReelColor(6) }
      ]
    },
    {
      id: 'eng4',
      title: '2.1 Song of the Open Road',
      description: 'By Walt Whitman - A poem celebrating freedom.',
      summary: '**Genre**: Poetry (Free Verse)\n**Poet**: Walt Whitman\n**Theme**: Freedom, journey of life, optimism, self-reliance\n\nThe poem celebrates the joy of traveling on the open road, symbolizing life\'s journey with freedom, adventure, and self-discovery.',
      detailedNotes: '### About the Poet\nWalt Whitman (1819-1892) was an American poet, often called the "Father of Free Verse." His famous collection: "Leaves of Grass."\n\n### Form and Style\n* **Free Verse**: No regular meter or rhyme scheme.\n* **Cataloguing**: Lists of images and ideas.\n* **Repetition**: For emphasis.\n* **First Person**: Personal, intimate tone.\n\n### Central Idea\nThe "open road" is a metaphor for life\'s journey. The poet celebrates:\n* Freedom from constraints\n* Joy of traveling/exploring\n* Self-reliance and independence\n* Living in the present moment\n\n### Key Lines Explained\n1. **"Afoot and light-hearted I take to the open road"**\n   - Starting the journey with joy and no burden.\n\n2. **"Healthy, free, the world before me"**\n   - Optimism and endless possibilities.\n\n3. **"I carry them with me wherever I go"**\n   - Experiences and memories travel with us.\n\n4. **"Strong and content I travel the open road"**\n   - Self-confidence and inner peace.\n\n### Themes\n1. **Freedom**: Liberation from society\'s restrictions.\n2. **Optimism**: Positive outlook on life.\n3. **Self-reliance**: Independence and inner strength.\n4. **Journey of Life**: Road as a metaphor for life.\n5. **Democracy**: Equal opportunity for all to travel.\n\n### Literary Devices\n* **Metaphor**: Open road = life\'s journey.\n* **Repetition**: "I" - emphasizes individuality.\n* **Imagery**: Visual pictures of travel.\n* **Free Verse**: Reflects freedom of theme.',
      flashcards: [
        { id: 'f1', front: 'Poet of Song of the Open Road?', back: 'Walt Whitman.' },
        { id: 'f2', front: 'What is Walt Whitman called?', back: 'Father of Free Verse.' },
        { id: 'f3', front: 'What does the "open road" symbolize?', back: 'Life\'s journey / Freedom.' },
        { id: 'f4', front: 'Famous poetry collection by Walt Whitman?', back: 'Leaves of Grass.' },
        { id: 'f5', front: 'What is free verse?', back: 'Poetry without regular meter or rhyme scheme.' },
        { id: 'f6', front: 'Main theme of the poem?', back: 'Freedom, self-reliance, and joy of life\'s journey.' },
        { id: 'f7', front: 'What literary device is "open road = life"?', back: 'Metaphor.' }
      ],
      mcqs: [
        { id: 'q1', question: 'Walt Whitman is called the "Father of ______."', options: ['Poetry', 'Free Verse', 'American Literature', 'Romanticism'], correctIndex: 1, explanation: 'He pioneered free verse poetry.' },
        { id: 'q2', question: 'The "open road" in the poem symbolizes:', options: ['A highway', 'Life\'s journey', 'A trail', 'Death'], correctIndex: 1, explanation: 'It\'s a metaphor for life\'s journey and freedom.' },
        { id: 'q3', question: 'Walt Whitman\'s famous collection is:', options: ['Paradise Lost', 'Leaves of Grass', 'The Waste Land', 'Songs of Innocence'], correctIndex: 1, explanation: 'Leaves of Grass is his most famous work.' },
        { id: 'q4', question: 'The poem is written in:', options: ['Sonnet form', 'Free verse', 'Ballad form', 'Haiku'], correctIndex: 1, explanation: 'It has no regular meter or rhyme scheme.' },
        { id: 'q5', question: 'The dominant mood of the poem is:', options: ['Sad', 'Angry', 'Optimistic', 'Fearful'], correctIndex: 2, explanation: 'The poem celebrates freedom and possibilities with optimism.' }
      ],
      reels: [
        { id: 'r1', title: 'The Open Road', content: 'Not just a road!\nIt\'s LIFE itself.\nA journey of freedom.', color: getReelColor(0) },
        { id: 'r2', title: 'Walt Whitman', content: 'Father of Free Verse.\n"Leaves of Grass" fame.\n1819-1892', color: getReelColor(1) },
        { id: 'r3', title: 'Free Verse', content: 'No rhyme needed.\nNo meter required.\nFreedom in form = Freedom in theme!', color: getReelColor(2) },
        { id: 'r4', title: 'Themes', content: 'Freedom\nSelf-reliance\nOptimism\nLife as a journey', color: getReelColor(3) },
        { id: 'r5', title: 'Key Line', content: '"Afoot and light-hearted\nI take to the open road."\nNo burden, just joy!', color: getReelColor(4) },
        { id: 'r6', title: 'Metaphor', content: 'Road = Life\nTraveling = Living\nDestination = Self-discovery', color: getReelColor(5) }
      ]
    },
    {
      id: 'eng5',
      title: '2.2 Indian Weavers',
      description: 'By Sarojini Naidu - Symbolism of life stages.',
      summary: '**Genre**: Poetry\n**Poet**: Sarojini Naidu (Nightingale of India)\n**Theme**: Life cycle through weaving imagery\n\nThe poem uses weavers creating different garments at different times of day to symbolize the three stages of life: birth, youth, and death.',
      detailedNotes: '### About the Poet\nSarojini Naidu (1879-1949) was called the "Nightingale of India." She was a freedom fighter and the first Indian woman to become a state governor.\n\n### Structure\n* Three stanzas (tercets)\n* Each stanza represents a stage of life\n* Question-answer format\n\n### Stanza-by-Stanza Analysis\n\n**Stanza 1: Birth (Morning)**\n* Time: Break of day (early morning)\n* Color: Blue (like the wing of a halcyon bird)\n* Garment: Robes for a newborn child\n* Symbolism: Blue represents hope, purity, new beginnings\n\n**Stanza 2: Youth/Marriage (Evening)**\n* Time: Fall of night (evening)\n* Color: Purple and green (like peacock feathers)\n* Garment: Marriage veils for a queen\n* Symbolism: Vibrant colors represent joy, celebration, love\n\n**Stanza 3: Death (Moonlight)**\n* Time: Still/chill moonlight (night)\n* Color: White (like a feather and cloud)\n* Garment: Shroud for a dead man\n* Symbolism: White represents purity, peace, end of life\n\n### Key Literary Devices\n* **Symbolism**: Colors and times of day represent life stages.\n* **Imagery**: Visual images of colors and birds.\n* **Metaphor**: Weaving = Life\'s journey.\n* **Repetition**: Question structure in each stanza.\n\n### Themes\n1. **Cycle of Life**: Birth → Marriage → Death\n2. **Indian Culture**: Traditional weaving, ceremonies\n3. **Transience**: Life passes like day to night\n4. **Dignity**: Each stage has its own beauty',
      flashcards: [
        { id: 'f1', front: 'Poet of Indian Weavers?', back: 'Sarojini Naidu (Nightingale of India).' },
        { id: 'f2', front: 'What are the three stages of life in the poem?', back: 'Birth (morning), Marriage (evening), Death (night).' },
        { id: 'f3', front: 'What color represents birth in the poem?', back: 'Blue (like halcyon\'s wing).' },
        { id: 'f4', front: 'What color represents marriage?', back: 'Purple and green (like peacock feathers).' },
        { id: 'f5', front: 'What color represents death?', back: 'White (like feather and cloud).' },
        { id: 'f6', front: 'What title was given to Sarojini Naidu?', back: 'Nightingale of India.' },
        { id: 'f7', front: 'What is the halcyon?', back: 'A kingfisher bird.' },
        { id: 'f8', front: 'What garment is woven for death?', back: 'A shroud (burial cloth).' }
      ],
      mcqs: [
        { id: 'q1', question: 'Sarojini Naidu is called:', options: ['Rose of India', 'Nightingale of India', 'Queen of Poetry', 'Mother of India'], correctIndex: 1, explanation: 'She was known as the Nightingale of India.' },
        { id: 'q2', question: 'Blue color in the poem symbolizes:', options: ['Death', 'Marriage', 'Birth', 'Old age'], correctIndex: 2, explanation: 'Blue (like halcyon\'s wing) represents newborn/birth.' },
        { id: 'q3', question: 'Marriage veils are described with colors:', options: ['White and blue', 'Purple and green', 'Red and gold', 'Black and white'], correctIndex: 1, explanation: 'Marriage veils are purple and green like peacock feathers.' },
        { id: 'q4', question: 'The poem has how many stanzas?', options: ['Two', 'Three', 'Four', 'Five'], correctIndex: 1, explanation: 'Three stanzas representing birth, marriage, and death.' },
        { id: 'q5', question: 'A shroud is a garment for:', options: ['Newborn', 'Bride', 'Dead person', 'King'], correctIndex: 2, explanation: 'The shroud is woven for a dead man in moonlight.' }
      ],
      reels: [
        { id: 'r1', title: 'Three Stages', content: 'BIRTH = Morning = Blue\nMARRIAGE = Evening = Purple/Green\nDEATH = Night = White', color: getReelColor(0) },
        { id: 'r2', title: 'Sarojini Naidu', content: 'Nightingale of India\nFreedom Fighter\n1st Woman Governor', color: getReelColor(1) },
        { id: 'r3', title: 'Symbolism', content: 'Weavers = Life\nGarments = Life Events\nColors = Emotions', color: getReelColor(2) },
        { id: 'r4', title: 'Birth (Blue)', content: 'Break of day.\nBlue like halcyon\'s wing.\nRobes for newborn child.', color: getReelColor(3) },
        { id: 'r5', title: 'Marriage', content: 'Fall of night.\nPurple & green (peacock).\nVeils for a queen!', color: getReelColor(4) },
        { id: 'r6', title: 'Death (White)', content: 'Chill moonlight.\nWhite like feather & cloud.\nShroud for the dead.', color: getReelColor(5) },
        { id: 'r7', title: 'Life Cycle', content: 'Day → Evening → Night\nBirth → Marriage → Death\nAll beautiful in their own way.', color: getReelColor(6) }
      ]
    },
    {
      id: 'eng6',
      title: '2.3 The Inchcape Rock',
      description: 'By Robert Southey - A ballad about karma.',
      summary: '**Genre**: Ballad\n**Poet**: Robert Southey\n**Theme**: "As you sow, so shall you reap" (Karma)\n\nThe ballad tells the story of the Abbot of Aberbrothok who places a bell on the Inchcape Rock to warn sailors. The pirate Ralph the Rover cuts the bell for evil purposes and later dies when his own ship hits the same rock.',
      detailedNotes: '### About the Poet\nRobert Southey (1774-1843) was an English Romantic poet who served as Poet Laureate.\n\n### What is a Ballad?\n* A narrative poem that tells a story\n* Usually has a regular rhyme scheme\n* Often deals with dramatic events\n* Meant to be sung or recited\n\n### Setting\n* Inchcape Rock: A reef off the coast of Scotland\n* North Sea\n* Medieval period\n\n### Characters\n1. **The Abbot of Aberbrothok**: Good, wise, helpful monk who places the warning bell.\n2. **Ralph the Rover**: Evil pirate, jealous, ultimately punished.\n\n### Plot Summary\n1. **The Good Deed**: The Abbot places a bell on Inchcape Rock to warn sailors of danger.\n2. **The Evil Act**: Pirate Ralph the Rover, out of spite and wickedness, cuts the bell and sinks it.\n3. **The Punishment**: Years later, Ralph\'s ship, loaded with plunder, hits the Inchcape Rock in darkness and sinks. Ralph dies.\n\n### Key Stanzas\n* Stanzas 1-4: Peaceful sea, the bell rings.\n* Stanzas 5-8: The Abbot\'s good work.\n* Stanzas 9-14: Ralph\'s evil act.\n* Stanzas 15-17: Ralph\'s punishment.\n\n### Themes\n1. **Karma**: What goes around comes around.\n2. **Good vs. Evil**: Good deeds vs. wicked acts.\n3. **Divine Justice**: Evil is eventually punished.\n4. **Human Nature**: Jealousy and greed lead to downfall.\n\n### Literary Devices\n* **Poetic Justice**: The villain is punished fittingly.\n* **Imagery**: Visual and auditory images.\n* **Personification**: "The sea-birds screamed."\n* **Foreshadowing**: Ralph\'s laugh hints at his fate.',
      flashcards: [
        { id: 'f1', front: 'Poet of The Inchcape Rock?', back: 'Robert Southey.' },
        { id: 'f2', front: 'Who placed the bell on the rock?', back: 'The Abbot of Aberbrothok.' },
        { id: 'f3', front: 'Who cut the bell?', back: 'Ralph the Rover (the pirate).' },
        { id: 'f4', front: 'What is the theme of the poem?', back: '"As you sow, so shall you reap" (Karma/Poetic Justice).' },
        { id: 'f5', front: 'What is a ballad?', back: 'A narrative poem that tells a story, often meant to be sung.' },
        { id: 'f6', front: 'Where is Inchcape Rock located?', back: 'Off the coast of Scotland in the North Sea.' },
        { id: 'f7', front: 'How did Ralph the Rover die?', back: 'His ship hit the Inchcape Rock and sank.' },
        { id: 'f8', front: 'What was the purpose of the bell?', back: 'To warn sailors of the dangerous rock.' }
      ],
      mcqs: [
        { id: 'q1', question: 'The Inchcape Rock is a:', options: ['Mountain', 'Reef/Rock', 'Ship', 'Bell'], correctIndex: 1, explanation: 'It\'s a dangerous reef off Scotland\'s coast.' },
        { id: 'q2', question: 'The Abbot placed the bell to:', options: ['Celebrate festivals', 'Warn sailors', 'Call for prayer', 'Attract tourists'], correctIndex: 1, explanation: 'The bell warned sailors of the dangerous rock.' },
        { id: 'q3', question: 'Ralph the Rover was a:', options: ['Monk', 'King', 'Pirate', 'Sailor'], correctIndex: 2, explanation: 'He was an evil pirate.' },
        { id: 'q4', question: 'The theme "As you sow, so shall you reap" represents:', options: ['Agriculture', 'Karma', 'Religion', 'Science'], correctIndex: 1, explanation: 'It means your actions have consequences.' },
        { id: 'q5', question: 'Robert Southey was a ______ poet.', options: ['American', 'English', 'Irish', 'Scottish'], correctIndex: 1, explanation: 'He was an English Romantic poet.' }
      ],
      reels: [
        { id: 'r1', title: 'The Rock', content: 'Inchcape Rock\nOff Scotland\'s coast\nDangerous for ships!', color: getReelColor(0) },
        { id: 'r2', title: 'The Good Abbot', content: 'Placed a warning bell.\nTo save sailors\' lives.\nBlessed by all!', color: getReelColor(1) },
        { id: 'r3', title: 'Ralph the Rover', content: 'Evil pirate.\nJealous of the Abbot.\nCut the bell!', color: getReelColor(2) },
        { id: 'r4', title: 'KARMA!', content: 'Years later...\nRalph\'s ship hits the rock.\nHe drowns in darkness!', color: getReelColor(3) },
        { id: 'r5', title: 'Theme', content: '"As you sow,\nso shall you reap."\nPoetic Justice!', color: getReelColor(4) },
        { id: 'r6', title: 'Ballad', content: 'Narrative poem.\nTells a story.\nMeant to be sung.', color: getReelColor(5) },
        { id: 'r7', title: 'Lesson', content: 'Good deeds are rewarded.\nEvil is punished.\nKarma always wins!', color: getReelColor(6) }
      ]
    },
    {
      id: 'eng7',
      title: '2.4 Father Returning Home',
      description: 'By Dilip Chitre - Modern poem on alienation.',
      summary: '**Genre**: Poetry (Free Verse)\n**Poet**: Dilip Chitre\n**Theme**: Alienation, urban loneliness, generation gap\n\nThe poem depicts a father\'s lonely commute home after work, highlighting the isolation and disconnection in modern urban life and within families.',
      detailedNotes: '### About the Poet\nDilip Chitre (1938-2009) was a Marathi poet, painter, and filmmaker. This poem is a translation of his own Marathi poem.\n\n### Form\n* Free verse (no regular rhyme or meter)\n* Two stanzas\n* Conversational, matter-of-fact tone\n\n### Stanza 1: The Journey Home\n* Father travels in a crowded suburban train.\n* He\'s unnoticed, invisible among commuters.\n* His face is gray, clothes are stained.\n* Rain, mud, darkness add to the bleak imagery.\n* He gets off at the station "like a word dropped from a sentence."\n\n### Stanza 2: At Home\n* At home, he\'s still alone.\n* Family is busy in their own worlds.\n* He eats alone, reads incomprehensible letters.\n* Goes to toilet, contemplates words.\n* Falls asleep thinking of his ancestors and grandchildren.\n* Dreams and thoughts are his only companions.\n\n### Key Images\n* **"Like a word dropped from a sentence"**: Insignificance\n* **"Stained and crumpled face"**: Worn out by life\n* **"His eyes dimmed by age"**: Loss of vitality\n* **"Thinking of his ancestors and grandchildren"**: Disconnection from present\n\n### Themes\n1. **Alienation**: Isolation in modern life.\n2. **Urban Loneliness**: City life lacks warmth.\n3. **Generation Gap**: No communication with family.\n4. **Working Class Struggle**: Tiresome daily routine.\n5. **Identity Crisis**: Father feels insignificant.\n\n### Literary Devices\n* **Simile**: "Like a word dropped from a sentence."\n* **Imagery**: Visual images of rain, mud, gray face.\n* **Symbolism**: Train journey = life\'s monotonous journey.',
      flashcards: [
        { id: 'f1', front: 'Poet of Father Returning Home?', back: 'Dilip Chitre.' },
        { id: 'f2', front: 'What is the main theme?', back: 'Alienation, urban loneliness, generation gap.' },
        { id: 'f3', front: 'What famous simile is used for the father?', back: '"Like a word dropped from a sentence."' },
        { id: 'f4', front: 'How does the father travel?', back: 'In a crowded suburban train.' },
        { id: 'f5', front: 'What does the father dream about?', back: 'His ancestors and grandchildren (past and future, not present).' },
        { id: 'f6', front: 'What is the tone of the poem?', back: 'Melancholic, matter-of-fact, detached.' },
        { id: 'f7', front: 'Dilip Chitre was originally a ______ poet.', back: 'Marathi poet (he translated his own poem).' }
      ],
      mcqs: [
        { id: 'q1', question: '"Like a word dropped from a sentence" suggests the father is:', options: ['Important', 'Insignificant', 'Happy', 'Angry'], correctIndex: 1, explanation: 'It shows how he feels unimportant and ignored.' },
        { id: 'q2', question: 'The father dreams about:', options: ['His office', 'His wife', 'Ancestors and grandchildren', 'Money'], correctIndex: 2, explanation: 'He thinks of past and future, feeling disconnected from present.' },
        { id: 'q3', question: 'The poem highlights:', options: ['Joy of family', 'Urban alienation', 'Rural life', 'Success'], correctIndex: 1, explanation: 'The poem shows loneliness in urban modern life.' },
        { id: 'q4', question: 'The father\'s face is described as:', options: ['Bright', 'Gray', 'Red', 'Young'], correctIndex: 1, explanation: 'His face is stained and gray, worn out by life.' },
        { id: 'q5', question: 'The poem is written in:', options: ['Sonnet form', 'Free verse', 'Ballad', 'Haiku'], correctIndex: 1, explanation: 'It has no regular rhyme or meter - free verse.' }
      ],
      reels: [
        { id: 'r1', title: 'The Father', content: 'Gray face.\nWorn clothes.\n"Like a word dropped from a sentence."', color: getReelColor(0) },
        { id: 'r2', title: 'The Journey', content: 'Crowded train.\nRain & mud.\nUnnoticed by all.', color: getReelColor(1) },
        { id: 'r3', title: 'At Home', content: 'Eats alone.\nReads alone.\nFamily is busy.', color: getReelColor(2) },
        { id: 'r4', title: 'His Dreams', content: 'Ancestors & Grandchildren.\nPast & Future.\nNever the Present!', color: getReelColor(3) },
        { id: 'r5', title: 'Theme', content: 'ALIENATION\nUrban loneliness.\nGeneration gap.', color: getReelColor(4) },
        { id: 'r6', title: 'Modern Life', content: 'Work all day.\nCome home tired.\nNo one cares.', color: getReelColor(5) },
        { id: 'r7', title: 'Dilip Chitre', content: 'Marathi poet.\nTranslated his own work.\n1938-2009', color: getReelColor(6) }
      ]
    },
    {
      id: 'eng8',
      title: '3. Writing Skills',
      description: 'Essay, Report, Letter writing formats.',
      summary: '**Writing Skills Section (16 Marks)**\n\n* Essay Writing (5-6 Marks)\n* Report Writing (5-6 Marks)\n* Letter Writing (5-6 Marks)\n* Leaflet/Pamphlet Making',
      detailedNotes: '### 1. ESSAY WRITING\n\n**Format:**\n```\nTitle\n\nIntroduction (Opening paragraph - Hook the reader)\n\nBody (2-3 paragraphs with main points)\n\nConclusion (Summary and final thoughts)\n```\n\n**Types of Essays:**\n* Narrative: Tells a story\n* Descriptive: Describes something\n* Argumentative: Presents an argument\n* Expository: Explains a topic\n\n**Tips:**\n1. Start with an interesting hook.\n2. Use paragraphs for different points.\n3. Support arguments with examples.\n4. End with a strong conclusion.\n5. Word limit: Usually 300-350 words.\n\n---\n\n### 2. REPORT WRITING\n\n**Format for Newspaper Report:**\n```\nHeadline (Catchy title)\nBy [Reporter Name]\n\n[Place, Date]: Lead paragraph (5 W\'s - Who, What, When, Where, Why)\n\nBody paragraphs (Details, quotes, background)\n\nConclusion (Future implications)\n```\n\n**Format for Event Report:**\n```\nREPORT ON [EVENT NAME]\n\nIntroduction: Brief overview\n\nDetails: Date, venue, organizers, participants\n\nDescription: What happened, activities\n\nConclusion: Success of event, feedback\n\nPrepared by: [Name]\nDate: [Date]\n```\n\n**Tips:**\n1. Use past tense.\n2. Be objective and factual.\n3. Include relevant details.\n4. Proper heading and subheadings.\n\n---\n\n### 3. LETTER WRITING\n\n**Formal Letter Format:**\n```\nSender\'s Address\nDate\n\nReceiver\'s Designation\nReceiver\'s Address\n\nSubject: ____________\n\nSalutation (Sir/Madam),\n\nBody (Introduction, Main Content, Conclusion)\n\nThanking you,\nYours faithfully/sincerely,\n[Signature]\n[Name]\n```\n\n**Types:**\n* Complaint Letter\n* Application Letter\n* Letter to Editor\n* Inquiry Letter\n\n---\n\n### 4. LEAFLET/PAMPHLET\n\n**Format:**\n* Catchy Title/Headline\n* Attractive visuals (drawn)\n* Key points in bullets\n* Contact information\n* Call to action\n\n**Tips:**\n1. Keep it brief and eye-catching.\n2. Use persuasive language.\n3. Include important dates/details.\n4. Add slogans if appropriate.',
      flashcards: [
        { id: 'f1', front: 'What are the 5 W\'s in report writing?', back: 'Who, What, When, Where, Why.' },
        { id: 'f2', front: 'Parts of a formal letter?', back: 'Sender\'s address, Date, Receiver\'s address, Subject, Salutation, Body, Closing.' },
        { id: 'f3', front: 'Closing for formal letters?', back: '"Yours faithfully" (unknown recipient) or "Yours sincerely" (known recipient).' },
        { id: 'f4', front: 'Types of essays?', back: 'Narrative, Descriptive, Argumentative, Expository.' },
        { id: 'f5', front: 'Word limit for HSC essay?', back: 'Usually 300-350 words.' },
        { id: 'f6', front: 'What tense is used in reports?', back: 'Past tense.' }
      ],
      mcqs: [
        { id: 'q1', question: 'A formal letter ends with:', options: ['Yours lovingly', 'Yours faithfully', 'See you', 'Take care'], correctIndex: 1, explanation: 'Formal letters end with "Yours faithfully" or "Yours sincerely."' },
        { id: 'q2', question: 'The 5 W\'s in journalism are:', options: ['Who, What, When, Where, Why', 'Who, Which, What, Where, Why', 'Who, What, When, Where, Whom', 'None of these'], correctIndex: 0, explanation: 'These are the basic questions answered in a news report.' },
        { id: 'q3', question: 'Reports are written in ______ tense.', options: ['Present', 'Past', 'Future', 'Any'], correctIndex: 1, explanation: 'Reports describe events that have already happened.' },
        { id: 'q4', question: 'Which is NOT a type of essay?', options: ['Narrative', 'Descriptive', 'Mathematical', 'Argumentative'], correctIndex: 2, explanation: 'Mathematical is not a type of essay.' }
      ],
      reels: [
        { id: 'r1', title: 'Essay Structure', content: 'Introduction (Hook)\n2-3 Body Paragraphs\nConclusion (Summary)', color: getReelColor(0) },
        { id: 'r2', title: '5 W\'s', content: 'Who?\nWhat?\nWhen?\nWhere?\nWhy?', color: getReelColor(1) },
        { id: 'r3', title: 'Formal Letter', content: 'Address → Date → Subject\nSalutation → Body\nClosing → Signature', color: getReelColor(2) },
        { id: 'r4', title: 'Closing Lines', content: 'Unknown person: Yours faithfully\nKnown person: Yours sincerely', color: getReelColor(3) },
        { id: 'r5', title: 'Report Tips', content: 'Use past tense.\nBe objective.\nInclude facts only.', color: getReelColor(4) },
        { id: 'r6', title: 'Leaflet', content: 'Catchy title.\nBullet points.\nCall to action!', color: getReelColor(5) }
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
            description: 'Nature, Significance, Fayol & Taylor Theories.', 
            summary: '**Management**: Art of getting things done.\n**Fayol**: 14 Principles (Division of Work, Authority, etc).\n**Taylor**: Scientific Management (Time study, Motion study).', 
            detailedNotes: '### 1. Introduction to Management\nManagement is key to success in any organization. It is considered as a resource like capital and labor.\n\n### 2. Nature of Principles of Management\n* **Universal Application**: Applicable everywhere (Profit, Non-profit, Small, Large).\n* **General Guidelines**: Not rigid rules like science, but guidelines for action.\n* **Formed by Practice**: Evolved through experimentation.\n* **Flexibility**: Can be modified according to situations.\n* **Behavioral in Nature**: Influences human behavior.\n* **Cause and Effect Relationship**: Tells what happens if a principle is applied.\n\n### 3. Henri Fayol (Father of Modern Management)\nProposed 14 Principles in his book "General and Industrial Administration".\n1. **Division of Work**: Specialization.\n2. **Authority & Responsibility**: Balance between right to order and obligation to do.\n3. **Discipline**: Respect for rules.\n4. **Unity of Command**: One boss.\n5. **Unity of Direction**: One plan.\n6. **Subordination of Individual Interest**: Org interest comes first.\n7. **Remuneration**: Fair pay.\n8. **Centralization**: Concentration of power.\n9. **Scalar Chain**: Line of authority (Gang Plank for emergency).\n10. **Order**: Material and Social order.\n11. **Equity**: Fair treatment.\n12. **Stability of Tenure**: Job security.\n13. **Initiative**: Encouraging new ideas.\n14. **Esprit de Corps**: Team spirit.\n\n### 4. F.W. Taylor (Father of Scientific Management)\nFocus on efficiency. "Science, not rule of thumb".\n* **Time Study**: Standard time for job.\n* **Motion Study**: Reducing wasteful movements.\n* **Fatigue Study**: Rest intervals.\n* **Differential Piece Rate**: Higher pay for higher production.',
            flashcards: [
              { id: 'f1', front: 'Father of Modern Management', back: 'Henri Fayol.' },
              { id: 'f2', front: 'Father of Scientific Management', back: 'F.W. Taylor.' },
              { id: 'f3', front: 'Unity of Command', back: 'One employee should have only one boss.' },
              { id: 'f4', front: 'Scalar Chain', back: 'Line of authority from top to bottom (Gang Plank allowed in emergency).' },
              { id: 'f5', front: 'How many principles did Fayol give?', back: '14 Principles of Management.' },
              { id: 'f6', front: 'Fayol\'s book name?', back: '"General and Industrial Administration" (1916).' },
              { id: 'f7', front: 'What is Division of Work?', back: 'Dividing work into smaller tasks for specialization and efficiency.' },
              { id: 'f8', front: 'What is Authority?', back: 'Right to give orders and expect obedience.' },
              { id: 'f9', front: 'What is Responsibility?', back: 'Obligation to perform assigned duties.' },
              { id: 'f10', front: 'What is Discipline?', back: 'Obedience, respect for authority, and observance of established rules.' },
              { id: 'f11', front: 'Unity of Direction means?', back: 'One head, one plan for a group of activities having same objective.' },
              { id: 'f12', front: 'Subordination of Individual Interest means?', back: 'Organizational interest should prevail over individual interest.' },
              { id: 'f13', front: 'What is Remuneration principle?', back: 'Fair and satisfactory pay to both employer and employee.' },
              { id: 'f14', front: 'Centralization vs Decentralization?', back: 'Centralization: Power at top. Decentralization: Power distributed to lower levels.' },
              { id: 'f15', front: 'What is Gang Plank?', back: 'Short-cut communication in scalar chain during emergencies.' },
              { id: 'f16', front: 'Order principle means?', back: 'A place for everything and everything in its place (Material & Social order).' },
              { id: 'f17', front: 'Equity means?', back: 'Kindness and justice in treatment of employees.' },
              { id: 'f18', front: 'Stability of Tenure means?', back: 'Job security to reduce employee turnover.' },
              { id: 'f19', front: 'Initiative principle?', back: 'Employees should be encouraged to develop and implement new ideas.' },
              { id: 'f20', front: 'Esprit de Corps means?', back: 'Team spirit - "Union is Strength".' },
              { id: 'f21', front: 'Taylor\'s philosophy?', back: '"Science, not rule of thumb" - Replace guesswork with scientific methods.' },
              { id: 'f22', front: 'What is Time Study?', back: 'Determining standard time required to perform a job.' },
              { id: 'f23', front: 'What is Motion Study?', back: 'Study of movements to eliminate unnecessary motions.' },
              { id: 'f24', front: 'What is Fatigue Study?', back: 'Study to determine rest intervals for workers to regain energy.' },
              { id: 'f25', front: 'Differential Piece Rate System?', back: 'Higher wage rate for efficient workers, lower for inefficient workers.' },
              { id: 'f26', front: 'Functional Foremanship by Taylor?', back: 'Separation of planning and execution - 8 foremen concept.' },
              { id: 'f27', front: 'Standardization means?', back: 'Setting uniform standards for tools, equipment, and working conditions.' },
              { id: 'f28', front: 'Mental Revolution means?', back: 'Complete change in attitude of management and workers towards each other.' },
              { id: 'f29', front: 'Nature of Management Principles?', back: 'Universal, Flexible, General guidelines, Formed by practice, Behavioral.' },
              { id: 'f30', front: 'Fayol vs Taylor?', back: 'Fayol: Top-level, General admin. Taylor: Shop-floor, Scientific efficiency.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Principle of _______ says "Union is Strength".', options: ['Equity', 'Order', 'Esprit de corps', 'Initiative'], correctIndex: 2, explanation: 'Team spirit.' },
              { id: 'q2', question: 'Taylor recommended ______ wage rate.', options: ['Differential', 'Equal', 'Time based', 'Fixed'], correctIndex: 0, explanation: 'Higher rate for efficient workers.' },
              { id: 'q3', question: 'Henri Fayol is known as:', options: ['Father of Scientific Management', 'Father of Modern Management', 'Father of Economics', 'Father of HR'], correctIndex: 1, explanation: 'Gave 14 principles of management.' },
              { id: 'q4', question: 'F.W. Taylor is known as:', options: ['Father of Modern Management', 'Father of Scientific Management', 'Father of Planning', 'Father of Control'], correctIndex: 1, explanation: 'Focus on efficiency and science.' },
              { id: 'q5', question: 'Gang Plank is related to which principle?', options: ['Unity of Command', 'Scalar Chain', 'Discipline', 'Order'], correctIndex: 1, explanation: 'Short-cut communication in emergencies.' },
              { id: 'q6', question: 'Unity of Command means employee should have _______ boss.', options: ['Two', 'Three', 'One', 'Many'], correctIndex: 2, explanation: 'Avoids confusion.' },
              { id: 'q7', question: 'Division of Work leads to:', options: ['Confusion', 'Specialization', 'Conflict', 'Delay'], correctIndex: 1, explanation: 'Work becomes efficient.' },
              { id: 'q8', question: 'Fayol gave _______ principles.', options: ['10', '12', '14', '16'], correctIndex: 2, explanation: '14 principles of management.' },
              { id: 'q9', question: 'Time Study was given by:', options: ['Fayol', 'Taylor', 'Weber', 'Drucker'], correctIndex: 1, explanation: 'Part of Scientific Management.' },
              { id: 'q10', question: 'Fatigue Study determines:', options: ['Salary', 'Rest intervals', 'Promotion', 'Transfer'], correctIndex: 1, explanation: 'Rest required to regain energy.' },
              { id: 'q11', question: 'Principles of Management are _______ in nature.', options: ['Rigid', 'Flexible', 'Fixed', 'Static'], correctIndex: 1, explanation: 'Can be modified as per situation.' },
              { id: 'q12', question: 'Motion Study eliminates _______ movements.', options: ['Necessary', 'Unnecessary', 'All', 'Fast'], correctIndex: 1, explanation: 'Reduces waste of time and energy.' },
              { id: 'q13', question: 'Scalar Chain represents _______ of authority.', options: ['Circle', 'Line', 'Matrix', 'Network'], correctIndex: 1, explanation: 'From top to bottom.' },
              { id: 'q14', question: 'Equity principle ensures:', options: ['High salary', 'Fair treatment', 'Quick promotion', 'Job transfer'], correctIndex: 1, explanation: 'Kindness and justice.' },
              { id: 'q15', question: 'Stability of Tenure reduces:', options: ['Salary', 'Profit', 'Employee turnover', 'Production'], correctIndex: 2, explanation: 'Job security reduces turnover.' },
              { id: 'q16', question: 'Initiative means:', options: ['Following orders', 'Self-motivation', 'Punishment', 'Discipline'], correctIndex: 1, explanation: 'Taking first step with self-drive.' },
              { id: 'q17', question: 'Mental Revolution is concept of:', options: ['Fayol', 'Taylor', 'Maslow', 'Herzberg'], correctIndex: 1, explanation: 'Change in attitude.' },
              { id: 'q18', question: 'Functional Foremanship has _______ foremen.', options: ['4', '6', '8', '10'], correctIndex: 2, explanation: 'Taylor\'s concept of 8 specialists.' },
              { id: 'q19', question: 'Fayol was a _______ by profession.', options: ['Engineer', 'Doctor', 'Mining Engineer', 'Accountant'], correctIndex: 2, explanation: 'French mining engineer.' },
              { id: 'q20', question: 'Taylor worked at _______ Steel Company.', options: ['Bethlehem', 'US', 'Ford', 'GM'], correctIndex: 0, explanation: 'Bethlehem Steel Company, USA.' },
              { id: 'q21', question: 'Principles are _______ applicable.', options: ['Locally', 'Nationally', 'Universally', 'Regionally'], correctIndex: 2, explanation: 'Apply to all organizations.' },
              { id: 'q22', question: 'Order principle is about:', options: ['Giving orders', 'Arrangement', 'Discipline', 'Punishment'], correctIndex: 1, explanation: 'Everything in its place.' },
              { id: 'q23', question: 'Centralization concentrates power at:', options: ['Bottom', 'Middle', 'Top', 'Outside'], correctIndex: 2, explanation: 'Top management holds power.' },
              { id: 'q24', question: 'Subordination of Interest gives priority to:', options: ['Individual', 'Organization', 'Manager', 'Worker'], correctIndex: 1, explanation: 'Org interest first.' },
              { id: 'q25', question: 'Authority without Responsibility leads to:', options: ['Efficiency', 'Confusion', 'Misuse', 'Profit'], correctIndex: 2, explanation: 'Both should be balanced.' },
              { id: 'q26', question: 'Discipline requires _______ agreements.', options: ['Verbal', 'Clear', 'Secret', 'Informal'], correctIndex: 1, explanation: 'Clear rules and agreements.' },
              { id: 'q27', question: 'Unity of Direction means _______ plan.', options: ['Multiple', 'One', 'No', 'Secret'], correctIndex: 1, explanation: 'One head, one plan.' },
              { id: 'q28', question: 'Remuneration should be _______ to employees.', options: ['Low', 'Fair', 'High only', 'Variable'], correctIndex: 1, explanation: 'Fair and satisfactory.' },
              { id: 'q29', question: 'Scientific Management focuses on:', options: ['Psychology', 'Efficiency', 'Culture', 'Ethics'], correctIndex: 1, explanation: 'Maximum output with minimum input.' },
              { id: 'q30', question: 'Rule of Thumb means:', options: ['Scientific method', 'Guesswork', 'Planning', 'Research'], correctIndex: 1, explanation: 'Taylor opposed guesswork.' }
            ],
            reels: [
               { id: 'r1', title: '14 Principles', content: 'Fayol gave the General guidelines for managers.', color: getReelColor(0) },
               { id: 'r2', title: 'Scientific Mgmt', content: 'Taylor said: Don\'t guess (Rule of Thumb).\nUse Science.', color: getReelColor(1) },
               { id: 'r3', title: 'Division of Work', content: 'Divide work into small tasks.\nLeads to Specialization.', color: getReelColor(2) },
               { id: 'r4', title: 'Auth & Resp', content: 'Authority = Right to give orders.\nResponsibility = Obligation to perform.', color: getReelColor(3) },
               { id: 'r5', title: 'Discipline', content: 'Obedience, respect for authority, and observance of rules.', color: getReelColor(4) },
               { id: 'r6', title: 'Unity of Command', content: 'One employee should have only ONE Boss.\nAvoids confusion.', color: getReelColor(5) },
               { id: 'r7', title: 'Unity of Direction', content: 'One Head, One Plan.\nFocus on common goal.', color: getReelColor(6) },
               { id: 'r8', title: 'Remuneration', content: 'Fair pay to employees.\nSatisfy both employer and employee.', color: getReelColor(7) },
               { id: 'r9', title: 'Centralization', content: 'Concentration of power at the top.\nSmall orgs use this.', color: getReelColor(8) },
               { id: 'r10', title: 'Scalar Chain', content: 'The line of authority from top to bottom.', color: getReelColor(9) },
               { id: 'r11', title: 'Gang Plank', content: 'Direct communication shortcut in Scalar Chain for emergencies.', color: getReelColor(0) },
               { id: 'r12', title: 'Order', content: 'A place for everything and everything in its place.', color: getReelColor(1) },
               { id: 'r13', title: 'Equity', content: 'Kindness and Justice.\nNo discrimination.', color: getReelColor(2) },
               { id: 'r14', title: 'Stability', content: 'Job security minimizes employee turnover.', color: getReelColor(3) },
               { id: 'r15', title: 'Initiative', content: 'Taking the first step with self-motivation.', color: getReelColor(4) },
               { id: 'r16', title: 'Esprit de Corps', content: 'Team Spirit.\nUnion is Strength.', color: getReelColor(5) },
               { id: 'r17', title: 'Time Study', content: 'Determines standard time to perform a job.', color: getReelColor(6) },
               { id: 'r18', title: 'Motion Study', content: 'Eliminates unnecessary movements of workers.', color: getReelColor(7) },
               { id: 'r19', title: 'Fatigue Study', content: 'Study of rest intervals to regain energy.', color: getReelColor(8) },
               { id: 'r20', title: 'Universal', content: 'Principles apply to all: Business, Govt, Army, Home.', color: getReelColor(9) },
               { id: 'r21', title: 'Flexible', content: 'Principles can be modified as per situation.\nNot rigid.', color: getReelColor(0) },
               { id: 'r22', title: 'Cause & Effect', content: 'Principles tell us the likely result of an action.', color: getReelColor(1) },
               { id: 'r23', title: 'Differential Rate', content: 'Taylor\'s wage system\nHigh rate for efficient\nLow for inefficient', color: getReelColor(2) },
               { id: 'r24', title: 'Fayol vs Taylor', content: 'Fayol: Top mgmt, General\nTaylor: Shop floor, Scientific', color: getReelColor(3) },
               { id: 'r25', title: 'Mental Revolution', content: 'Change in attitude\nMgmt & workers\nCooperation not conflict', color: getReelColor(4) },
               { id: 'r26', title: '8 Foremen', content: 'Functional Foremanship\n4 Planning + 4 Execution\nSpecialization', color: getReelColor(5) },
               { id: 'r27', title: 'Standardization', content: 'Uniform tools, methods\nConsistent quality\nLess wastage', color: getReelColor(6) },
               { id: 'r28', title: 'Sub of Interest', content: 'Org interest > Individual\nCommon goal first', color: getReelColor(7) },
               { id: 'r29', title: 'Decentralization', content: 'Power distributed\nLower levels decide\nOpposite of Central', color: getReelColor(8) },
               { id: 'r30', title: 'Fayol\'s Book', content: 'General & Industrial Admin\n1916\nFrench mining engineer', color: getReelColor(9) }
            ]
          },
          { 
            id: 'ocm2', 
            title: '2. Functions of Management', 
            description: 'PODSCORB Cycle explained.', 
            summary: 'Planning -> Organizing -> Staffing -> Directing -> Coordinating -> Controlling.', 
            detailedNotes: '### 1. Introduction\nManagement is a set of functions. Luther Gulick gave the acronym **PODSCORB** (Planning, Organizing, Directing, Staffing, Coordinating, Reporting, Budgeting).\n\n### 2. Planning (The Brain)\n* **Meaning**: Deciding in advance what to do, how to do, when to do, and who is to do it.\n* **Importance**: Sets goals, Provides direction, Reduces risk of uncertainty, Innovative ideas.\n\n### 3. Organizing (The Body)\n* **Meaning**: Identifying and grouping activities, bringing together resources (Men, Money, Material, Machine).\n* **Importance**: Facilitates administration, Specialization, Optimum utilization of resources.\n\n### 4. Staffing (The Arms/Legs)\n* **Meaning**: Recruitment, Selection, Development, Training, Compensation of personnel.\n* **Importance**: Right person at right job, Long term growth, Job satisfaction.\n\n### 5. Directing (The Heart/Spark)\n* **Meaning**: Instructing, Guiding, Communicating, Inspiring, Motivating employees.\n* **Importance**: Initiates action, Integrates efforts, Motivation, Stability.\n\n### 6. Coordinating (The Nervous System)\n* **Meaning**: Integration of efforts of group members to ensure unity of action.\n* **Importance**: Encourages team spirit, Proper direction, Optimum utilization.\n\n### 7. Controlling (The Eyes)\n* **Meaning**: Comparing actual performance with standards and taking corrective action.\n* **Importance**: Fulfills goals, Standards accuracy, Efficient use of resources.',
            flashcards: [
              { id: 'f1', front: 'First function of management', back: 'Planning.' },
              { id: 'f2', front: 'Last function of management', back: 'Controlling.' },
              { id: 'f3', front: 'Who gave PODSCORB?', back: 'Luther Gulick.' },
              { id: 'f4', front: 'PODSCORB full form?', back: 'Planning, Organizing, Directing, Staffing, Coordinating, Reporting, Budgeting.' },
              { id: 'f5', front: 'What is Planning?', back: 'Deciding in advance what to do, how to do, when to do, and who is to do it.' },
              { id: 'f6', front: 'What is Organizing?', back: 'Grouping activities and bringing together Men, Money, Material, Machine.' },
              { id: 'f7', front: 'What is Staffing?', back: 'Recruitment, Selection, Training, Development of personnel.' },
              { id: 'f8', front: 'What is Directing?', back: 'Instructing, Guiding, Motivating, and Leading employees.' },
              { id: 'f9', front: 'What is Coordinating?', back: 'Integration of efforts to ensure unity of action.' },
              { id: 'f10', front: 'What is Controlling?', back: 'Comparing actual performance with standards and taking corrective action.' },
              { id: 'f11', front: 'Planning is called?', back: 'The Brain of Management / Primary function / Forward-looking function.' },
              { id: 'f12', front: 'Organizing is called?', back: 'The Body of Management.' },
              { id: 'f13', front: 'Directing is called?', back: 'The Heart/Spark of Management.' },
              { id: 'f14', front: 'Controlling is called?', back: 'The Eyes of Management.' },
              { id: 'f15', front: '4 Ms of Organizing?', back: 'Men, Money, Material, Machine.' },
              { id: 'f16', front: 'Elements of Directing?', back: 'Supervision, Leadership, Motivation, Communication.' },
              { id: 'f17', front: 'Steps in Controlling?', back: 'Set standards → Measure performance → Compare → Take corrective action.' },
              { id: 'f18', front: 'Efficiency vs Effectiveness?', back: 'Efficiency: Doing things right. Effectiveness: Doing right things.' },
              { id: 'f19', front: 'Which function is pervasive?', back: 'All functions are performed at all levels of management.' },
              { id: 'f20', front: 'Top level focuses on?', back: 'Planning and Organizing.' },
              { id: 'f21', front: 'Middle level focuses on?', back: 'Staffing and Coordinating.' },
              { id: 'f22', front: 'Lower level focuses on?', back: 'Directing and Controlling.' },
              { id: 'f23', front: 'Types of Plans?', back: 'Standing plans (Policies, Rules) and Single-use plans (Budget, Programme).' },
              { id: 'f24', front: 'Span of Control means?', back: 'Number of subordinates a manager can effectively supervise.' },
              { id: 'f25', front: 'Formal vs Informal Organization?', back: 'Formal: Official structure. Informal: Social relationships.' },
              { id: 'f26', front: 'What is Delegation?', back: 'Assigning authority and responsibility to subordinates.' },
              { id: 'f27', front: 'What is Motivation?', back: 'Process of stimulating people to action to achieve goals.' },
              { id: 'f28', front: 'Maslow\'s Need Hierarchy?', back: 'Physiological → Safety → Social → Esteem → Self-actualization.' },
              { id: 'f29', front: 'What is Budgetary Control?', back: 'Control technique using budgets as standards.' },
              { id: 'f30', front: 'Reporting function?', back: 'Keeping all stakeholders informed about progress.' }
            ],
            mcqs: [
              { id: 'q1', question: '______ is the base of all functions.', options: ['Controlling', 'Planning', 'Staffing', 'Directing'], correctIndex: 1, explanation: 'Without plan, nothing starts.' },
              { id: 'q2', question: 'PODSCORB was given by:', options: ['Fayol', 'Taylor', 'Luther Gulick', 'Drucker'], correctIndex: 2, explanation: 'Famous acronym for management functions.' },
              { id: 'q3', question: 'Last function of management is:', options: ['Planning', 'Organizing', 'Directing', 'Controlling'], correctIndex: 3, explanation: 'Compares actual with standard.' },
              { id: 'q4', question: 'Recruitment is part of:', options: ['Planning', 'Organizing', 'Staffing', 'Controlling'], correctIndex: 2, explanation: 'HR function.' },
              { id: 'q5', question: 'Motivation is element of:', options: ['Planning', 'Organizing', 'Directing', 'Controlling'], correctIndex: 2, explanation: 'Inspiring employees.' },
              { id: 'q6', question: '4 Ms are related to:', options: ['Planning', 'Organizing', 'Staffing', 'Directing'], correctIndex: 1, explanation: 'Men, Money, Material, Machine.' },
              { id: 'q7', question: 'Controlling compares actual with:', options: ['Budget', 'Standards', 'Plans', 'All of these'], correctIndex: 3, explanation: 'Standards, plans, budgets.' },
              { id: 'q8', question: 'Top level management focuses on:', options: ['Directing', 'Planning', 'Staffing', 'Supervision'], correctIndex: 1, explanation: 'Strategic decisions.' },
              { id: 'q9', question: 'Coordinating ensures:', options: ['Conflict', 'Unity of action', 'Competition', 'Separation'], correctIndex: 1, explanation: 'Integration of efforts.' },
              { id: 'q10', question: 'Planning is a _______ process.', options: ['Physical', 'Mental/Intellectual', 'Social', 'Technical'], correctIndex: 1, explanation: 'Thinking ahead.' },
              { id: 'q11', question: 'Organizing creates:', options: ['Plans', 'Structure', 'Goals', 'Standards'], correctIndex: 1, explanation: 'Framework of organization.' },
              { id: 'q12', question: 'Leadership is element of:', options: ['Planning', 'Organizing', 'Directing', 'Controlling'], correctIndex: 2, explanation: 'Guiding subordinates.' },
              { id: 'q13', question: 'Efficiency means:', options: ['Doing right things', 'Doing things right', 'Doing fast', 'Doing more'], correctIndex: 1, explanation: 'Process oriented.' },
              { id: 'q14', question: 'Effectiveness means:', options: ['Doing things right', 'Doing right things', 'Doing slow', 'Doing less'], correctIndex: 1, explanation: 'Result oriented.' },
              { id: 'q15', question: 'Span of Control is related to:', options: ['Planning', 'Organizing', 'Staffing', 'Controlling'], correctIndex: 1, explanation: 'Number of subordinates.' },
              { id: 'q16', question: 'Training is part of:', options: ['Planning', 'Organizing', 'Staffing', 'Controlling'], correctIndex: 2, explanation: 'Developing employees.' },
              { id: 'q17', question: 'Communication is element of:', options: ['Planning', 'Organizing', 'Directing', 'Controlling'], correctIndex: 2, explanation: 'Sharing information.' },
              { id: 'q18', question: 'Corrective action is taken in:', options: ['Planning', 'Organizing', 'Directing', 'Controlling'], correctIndex: 3, explanation: 'When deviation found.' },
              { id: 'q19', question: 'Maslow gave _______ theory.', options: ['Two Factor', 'Need Hierarchy', 'X and Y', 'Z Theory'], correctIndex: 1, explanation: '5 levels of needs.' },
              { id: 'q20', question: 'Budget is a _______ plan.', options: ['Standing', 'Single-use', 'Permanent', 'Flexible'], correctIndex: 1, explanation: 'Used once, then new budget.' },
              { id: 'q21', question: 'Policy is a _______ plan.', options: ['Standing', 'Single-use', 'Temporary', 'Flexible'], correctIndex: 0, explanation: 'Used repeatedly.' },
              { id: 'q22', question: 'Delegation means:', options: ['Taking authority', 'Giving authority', 'Removing authority', 'None'], correctIndex: 1, explanation: 'Assigning to subordinates.' },
              { id: 'q23', question: 'Formal organization is:', options: ['Unofficial', 'Official', 'Social', 'Personal'], correctIndex: 1, explanation: 'Deliberate structure.' },
              { id: 'q24', question: 'Informal organization is based on:', options: ['Rules', 'Social relations', 'Authority', 'Structure'], correctIndex: 1, explanation: 'Friendship, interests.' },
              { id: 'q25', question: 'Highest need in Maslow\'s theory:', options: ['Safety', 'Social', 'Esteem', 'Self-actualization'], correctIndex: 3, explanation: 'Reaching full potential.' },
              { id: 'q26', question: 'Supervision is done by:', options: ['Top level', 'Middle level', 'Lower level', 'All levels'], correctIndex: 2, explanation: 'Overseeing workers.' },
              { id: 'q27', question: 'Management functions are:', options: ['One-time', 'Continuous', 'Temporary', 'Seasonal'], correctIndex: 1, explanation: 'Ongoing cycle.' },
              { id: 'q28', question: 'Zero-base budgeting starts from:', options: ['Last year', 'Zero', 'Average', 'Maximum'], correctIndex: 1, explanation: 'Fresh start each time.' },
              { id: 'q29', question: 'MBO stands for:', options: ['Management By Orders', 'Management By Objectives', 'Managing Business Operations', 'None'], correctIndex: 1, explanation: 'Goal-based management.' },
              { id: 'q30', question: 'Controlling is a _______ function.', options: ['First', 'Last', 'Middle', 'Optional'], correctIndex: 1, explanation: 'Comes after all others.' }
            ],
            reels: [
               { id: 'r1', title: 'PODSCORB', content: 'Luther Gulick\'s acronym for functions.', color: getReelColor(2) },
               { id: 'r2', title: 'Planning', content: 'Fail to plan?\nPlan to fail.\nIntellectual process.', color: getReelColor(3) },
               { id: 'r3', title: 'Organizing', content: 'Bringing together Men, Money, Material, Machine.', color: getReelColor(4) },
               { id: 'r4', title: 'Staffing', content: 'Right Person at Right Job.\nRecruitment, Selection, Training.', color: getReelColor(5) },
               { id: 'r5', title: 'Directing', content: 'The spark that starts the engine.\nLeadership, Motivation, Communication.', color: getReelColor(6) },
               { id: 'r6', title: 'Coordinating', content: 'Binding force.\nLike an orchestra conductor.', color: getReelColor(7) },
               { id: 'r7', title: 'Controlling', content: 'Comparing Actual vs Standard.\nTaking Corrective Action.', color: getReelColor(8) },
               { id: 'r8', title: 'Goal Setting', content: 'Planning is the primary function for setting goals.', color: getReelColor(9) },
               { id: 'r9', title: 'Resources', content: 'Organizing ensures optimum utilization of resources.', color: getReelColor(0) },
               { id: 'r10', title: 'HRM', content: 'Staffing is also known as Human Resource Management.', color: getReelColor(1) },
               { id: 'r11', title: 'Leadership', content: 'Directing involves leading and guiding employees.', color: getReelColor(2) },
               { id: 'r12', title: 'Team Spirit', content: 'Coordinating develops team spirit in the organization.', color: getReelColor(3) },
               { id: 'r13', title: 'Deviation', content: 'Controlling finds out deviation and corrects it.', color: getReelColor(4) },
               { id: 'r14', title: 'Future Oriented', content: 'Planning looks ahead.\nControlling looks back and ahead.', color: getReelColor(5) },
               { id: 'r15', title: 'Continuous', content: 'Management functions are continuous, not one-time.', color: getReelColor(6) },
               { id: 'r16', title: 'Efficiency', content: 'Doing things right (Process).', color: getReelColor(7) },
               { id: 'r17', title: 'Effectiveness', content: 'Doing the right things (Result).', color: getReelColor(8) },
               { id: 'r18', title: 'Top Level', content: 'Focuses mainly on Planning and Organizing.', color: getReelColor(9) },
               { id: 'r19', title: 'Middle Level', content: 'Focuses on Staffing and Coordinating.', color: getReelColor(0) },
               { id: 'r20', title: 'Lower Level', content: 'Focuses on Directing and Controlling.', color: getReelColor(1) },
               { id: 'r21', title: 'Motivation', content: 'Non-monetary incentives are part of Directing.', color: getReelColor(2) },
               { id: 'r22', title: 'Budgeting', content: 'A control technique expressed in numbers.', color: getReelColor(3) },
               { id: 'r23', title: 'Maslow', content: '5 Needs: Physio → Safety\n→ Social → Esteem\n→ Self-actualization', color: getReelColor(4) },
               { id: 'r24', title: 'Span of Control', content: 'No. of subordinates\nunder one manager\nNarrow or Wide', color: getReelColor(5) },
               { id: 'r25', title: 'Delegation', content: 'Authority flows downward\nResponsibility upward\nAccountability fixed', color: getReelColor(6) },
               { id: 'r26', title: 'MBO', content: 'Management By Objectives\nGoal-based approach\nPeter Drucker', color: getReelColor(7) },
               { id: 'r27', title: 'Standing Plan', content: 'Policies, Rules, Procedures\nUsed repeatedly\nPermanent guidelines', color: getReelColor(8) },
               { id: 'r28', title: 'Single-use Plan', content: 'Budget, Programme\nOne-time use\nSpecific purpose', color: getReelColor(9) },
               { id: 'r29', title: 'Formal Org', content: 'Official structure\nDeliberate design\nAuthority based', color: getReelColor(0) },
               { id: 'r30', title: 'Informal Org', content: 'Social relationships\nFriendship based\nSpontaneous', color: getReelColor(1) }
            ]
          },
          { 
            id: 'ocm3', 
            title: '3. Entrepreneurship Development', 
            description: 'Concepts, Qualities, Functions.', 
            summary: 'Entrepreneur: Innovator, Risk Taker.\nFunctions: Innovation, Decision Making.\nSchemes: Startup India, Standup India.', 
            detailedNotes: '### 1. Concept\nDerived from French word "Entreprendre" meaning "to undertake". An entrepreneur is a person who starts a business and is willing to risk loss in order to make money.\n\n### 2. Characteristics\n* **Intellectual Capabilities**: Creative thinking.\n* **Future Vision**: Foresight.\n* **Hard Work**: Ready to work long hours.\n* **Technical Knowledge**: Knowing the craft.\n* **Communication Skills**: To convince investors/customers.\n* **Risk Bearing Capacity**: Calculated risks.\n\n### 3. Functions\n* **Innovation**: New product, new market, new method (Schumpeter).\n* **Determination of Objectives**: Setting goals.\n* **Development of Market**: Finding customers.\n* **New Technology**: Upgradation.\n* **Good Relations**: With employees/suppliers.\n\n### 4. Entrepreneurship Development Program (EDP)\nStructured training to create entrepreneurs.\nSteps: Infrastructure -> Selection -> Training -> Monitoring.\n\n### 5. Initiatives\n* **Startup India**: 2016. Simplified compliance, Funding support.\n* **Stand-up India**: Loans to SC/ST and Women (10L to 1Cr).',
            flashcards: [
              { id: 'f1', front: 'Entrepreneur derived from?', back: 'French word "Entreprendre" (To undertake).' },
              { id: 'f2', front: 'Innovation theory given by?', back: 'Joseph Schumpeter.' },
              { id: 'f3', front: 'What is Entrepreneurship?', back: 'Process of creating something new with value by assuming risk.' },
              { id: 'f4', front: 'Who is an Intrapreneur?', back: 'An employee who innovates within an existing organization.' },
              { id: 'f5', front: 'EDP stands for?', back: 'Entrepreneurship Development Programme.' },
              { id: 'f6', front: 'Startup India launched in?', back: '2016 by PM Modi.' },
              { id: 'f7', front: 'Stand-up India target?', back: 'SC/ST and Women entrepreneurs with loans Rs.10 Lakh to Rs.1 Crore.' },
              { id: 'f8', front: 'MUDRA stands for?', back: 'Micro Units Development and Refinance Agency.' },
              { id: 'f9', front: 'What is a Unicorn?', back: 'A startup valued at over $1 Billion.' },
              { id: 'f10', front: 'What is a Decacorn?', back: 'A startup valued at over $10 Billion.' },
              { id: 'f11', front: 'What is Bootstrapping?', back: 'Starting business with own money without external funding.' },
              { id: 'f12', front: 'Angel Investor meaning?', back: 'Rich individual investing in early-stage startups.' },
              { id: 'f13', front: 'Venture Capital meaning?', back: 'Professional investors funding high-growth potential startups.' },
              { id: 'f14', front: 'Incubator meaning?', back: 'Organization providing workspace, mentoring to new startups.' },
              { id: 'f15', front: 'Accelerator meaning?', back: 'Short-term intensive program to scale startups rapidly.' },
              { id: 'f16', front: 'Crowdfunding meaning?', back: 'Raising small amounts from many people online.' },
              { id: 'f17', front: 'Pivot meaning in startups?', back: 'Changing business model/strategy based on feedback.' },
              { id: 'f18', front: 'MVP stands for?', back: 'Minimum Viable Product - basic version to test market.' },
              { id: 'f19', front: 'Schumpeter\'s Innovation types?', back: 'New product, new process, new market, new source, new organization.' },
              { id: 'f20', front: 'First generation entrepreneur?', back: 'One who starts business without family business background.' },
              { id: 'f21', front: 'Second generation entrepreneur?', back: 'One who continues family business.' },
              { id: 'f22', front: 'Social Entrepreneur?', back: 'One who addresses social problems through business.' },
              { id: 'f23', front: 'Woman Entrepreneur definition?', back: 'Female owning and controlling enterprise with min 51% capital.' },
              { id: 'f24', front: 'Creative Destruction by?', back: 'Joseph Schumpeter - innovation destroys old industries.' },
              { id: 'f25', front: 'Risk vs Uncertainty?', back: 'Risk is calculable; Uncertainty is unpredictable.' },
              { id: 'f26', front: 'MSME stands for?', back: 'Micro, Small and Medium Enterprises.' },
              { id: 'f27', front: 'Make in India launched?', back: '2014 to promote manufacturing.' },
              { id: 'f28', front: 'Skill India launched?', back: '2015 to train youth in employable skills.' },
              { id: 'f29', front: 'Atal Innovation Mission?', back: 'Promotes innovation culture through ATLs in schools.' },
              { id: 'f30', front: 'Agripreneurship?', back: 'Entrepreneurship in agriculture sector.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Entrepreneur is a ______ taker.', options: ['Risk', 'Salary', 'Order', 'Rest'], correctIndex: 0, explanation: 'Profit is reward for risk.' },
              { id: 'q2', question: 'The word Entrepreneur is derived from ______ language.', options: ['English', 'German', 'French', 'Spanish'], correctIndex: 2, explanation: 'Entreprendre means to undertake.' },
              { id: 'q3', question: 'Innovation theory was given by:', options: ['Fayol', 'Taylor', 'Schumpeter', 'Drucker'], correctIndex: 2, explanation: 'Creative destruction concept.' },
              { id: 'q4', question: 'Startup India was launched in:', options: ['2014', '2015', '2016', '2017'], correctIndex: 2, explanation: 'January 2016.' },
              { id: 'q5', question: 'Stand-up India provides loans to:', options: ['Only men', 'SC/ST and Women', 'Foreigners', 'Students'], correctIndex: 1, explanation: 'Promoting marginalized sections.' },
              { id: 'q6', question: 'A startup valued at over $1 Billion is called:', options: ['Decacorn', 'Unicorn', 'Hectocorn', 'Soonicorn'], correctIndex: 1, explanation: 'Rare like mythical unicorn.' },
              { id: 'q7', question: 'Intrapreneur works:', options: ['Alone', 'Outside company', 'Inside existing company', 'For government'], correctIndex: 2, explanation: 'Internal entrepreneur.' },
              { id: 'q8', question: 'EDP stands for:', options: ['Economic Development Plan', 'Entrepreneurship Development Programme', 'Enterprise Design Project', 'None'], correctIndex: 1, explanation: 'Training program.' },
              { id: 'q9', question: 'MUDRA loans are for:', options: ['Large companies', 'Micro enterprises', 'MNCs', 'Government'], correctIndex: 1, explanation: 'Micro Units Development.' },
              { id: 'q10', question: 'Bootstrapping means:', options: ['Taking loan', 'Using own funds', 'Selling shares', 'IPO'], correctIndex: 1, explanation: 'Self-funded business.' },
              { id: 'q11', question: 'Angel investor provides ______ stage funding.', options: ['Late', 'Middle', 'Early', 'Exit'], correctIndex: 2, explanation: 'Seed capital stage.' },
              { id: 'q12', question: 'First generation entrepreneur has:', options: ['Family business', 'No family business background', 'Government job', 'None'], correctIndex: 1, explanation: 'Starts from scratch.' },
              { id: 'q13', question: 'Social entrepreneur focuses on:', options: ['Profit only', 'Social problems', 'Export only', 'Import only'], correctIndex: 1, explanation: 'Society benefit.' },
              { id: 'q14', question: 'Creative Destruction means:', options: ['Destroying factories', 'Innovation replacing old industries', 'Violence', 'None'], correctIndex: 1, explanation: 'Schumpeter\'s concept.' },
              { id: 'q15', question: 'MVP in startup terminology is:', options: ['Most Valuable Player', 'Minimum Viable Product', 'Maximum Value Price', 'None'], correctIndex: 1, explanation: 'Basic product to test market.' },
              { id: 'q16', question: 'Incubator provides:', options: ['Loans only', 'Workspace and mentoring', 'Export license', 'None'], correctIndex: 1, explanation: 'Support system for startups.' },
              { id: 'q17', question: 'Crowdfunding raises money from:', options: ['Single investor', 'Bank', 'Many small investors online', 'Government'], correctIndex: 2, explanation: 'Collective funding.' },
              { id: 'q18', question: 'Pivot in startup means:', options: ['Closing down', 'Changing strategy', 'Going public', 'Merger'], correctIndex: 1, explanation: 'Adapting to feedback.' },
              { id: 'q19', question: 'Woman entrepreneur must own ______% capital.', options: ['25%', '51%', '75%', '100%'], correctIndex: 1, explanation: 'Majority ownership.' },
              { id: 'q20', question: 'Make in India launched in:', options: ['2012', '2014', '2016', '2018'], correctIndex: 1, explanation: 'Manufacturing push.' },
              { id: 'q21', question: 'Atal Innovation Mission promotes:', options: ['Agriculture', 'Innovation culture', 'Export', 'Import'], correctIndex: 1, explanation: 'Through ATL labs.' },
              { id: 'q22', question: 'MSME stands for:', options: ['Ministry of SME', 'Micro Small Medium Enterprises', 'Major Scale Manufacturing Enterprise', 'None'], correctIndex: 1, explanation: 'Small business category.' },
              { id: 'q23', question: 'Venture Capital is for ______ potential startups.', options: ['Low', 'Medium', 'High-growth', 'No'], correctIndex: 2, explanation: 'Scalable businesses.' },
              { id: 'q24', question: 'Accelerator provides ______ intensive program.', options: ['Long-term', 'Short-term', 'Permanent', 'None'], correctIndex: 1, explanation: 'Rapid scaling.' },
              { id: 'q25', question: 'Entrepreneur vs Manager: Entrepreneur earns:', options: ['Salary', 'Commission', 'Profit', 'Bonus only'], correctIndex: 2, explanation: 'Risk and reward.' },
              { id: 'q26', question: 'Skill India launched in:', options: ['2014', '2015', '2016', '2017'], correctIndex: 1, explanation: 'Skill development.' },
              { id: 'q27', question: 'Agripreneurship is in ______ sector.', options: ['IT', 'Agriculture', 'Banking', 'Tourism'], correctIndex: 1, explanation: 'Farm-based business.' },
              { id: 'q28', question: 'Technical entrepreneur focuses on:', options: ['Trade', 'Technology-based products', 'Agriculture', 'Services only'], correctIndex: 1, explanation: 'Tech innovation.' },
              { id: 'q29', question: 'Risk is ______ while uncertainty is unpredictable.', options: ['Unknown', 'Calculable', 'Zero', 'None'], correctIndex: 1, explanation: 'Risk can be measured.' },
              { id: 'q30', question: 'Decacorn valuation is above:', options: ['$1 Billion', '$5 Billion', '$10 Billion', '$100 Billion'], correctIndex: 2, explanation: 'Rare mega startups.' }
            ],
            reels: [
               { id: 'r1', title: 'Risk Taker', content: 'No Risk, No Profit.\nCalculated risks, not gambling.', color: getReelColor(4) },
               { id: 'r2', title: 'Innovator', content: 'Doing new things or doing old things in new ways.', color: getReelColor(5) },
               { id: 'r3', title: 'Job Giver', content: 'Entrepreneurs create jobs.\nEmployees seek jobs.', color: getReelColor(6) },
               { id: 'r4', title: 'Entreprendre', content: 'French word meaning "To Undertake".', color: getReelColor(7) },
               { id: 'r5', title: 'Visionary', content: 'Seeing opportunity where others see problems.', color: getReelColor(8) },
               { id: 'r6', title: 'Manager vs Ent', content: 'Manager works for salary.\nEntrepreneur works for profit.', color: getReelColor(9) },
               { id: 'r7', title: 'Intrapreneur', content: 'An employee who innovates INSIDE a company.', color: getReelColor(0) },
               { id: 'r8', title: 'Schumpeter', content: 'Gave the theory of Innovation (Creative Destruction).', color: getReelColor(1) },
               { id: 'r9', title: 'Startup India', content: 'Launched in 2016 to boost startup culture.', color: getReelColor(2) },
               { id: 'r10', title: 'Stand-up India', content: 'Loans for SC/ST and Women entrepreneurs (10L-1Cr).', color: getReelColor(3) },
               { id: 'r11', title: 'Agro Tourism', content: 'Farm stays.\nConnects urban people to rural life.', color: getReelColor(4) },
               { id: 'r12', title: 'Hard Work', content: 'Entrepreneurship is 1% inspiration, 99% perspiration.', color: getReelColor(5) },
               { id: 'r13', title: 'Communication', content: 'Key skill to sell vision to investors and customers.', color: getReelColor(6) },
               { id: 'r14', title: 'EDP', content: 'Entrepreneurship Development Program.\nTraining to start biz.', color: getReelColor(7) },
               { id: 'r15', title: 'Unicorn', content: 'A startup valued at over $1 Billion.', color: getReelColor(8) },
               { id: 'r16', title: 'Angel Investor', content: 'Rich individual investing in early stage startups.', color: getReelColor(9) },
               { id: 'r17', title: 'Crowdfunding', content: 'Raising small amounts from many people online.', color: getReelColor(0) },
               { id: 'r18', title: 'Incubator', content: 'Provides office space and mentoring to new startups.', color: getReelColor(1) },
               { id: 'r19', title: 'Gap Filling', content: 'Entrepreneur fills the gap between needs and products.', color: getReelColor(2) },
               { id: 'r20', title: 'Economic Growth', content: 'Entrepreneurs increase National Income and employment.', color: getReelColor(3) },
               { id: 'r21', title: 'Decacorn', content: 'A startup valued at over $10 Billion.', color: getReelColor(4) },
               { id: 'r22', title: 'Bootstrapping', content: 'Starting business with own money, no external investors.', color: getReelColor(5) },
               { id: 'r23', title: 'MVP', content: 'Minimum Viable Product\nBasic version to test market\nFail fast, learn fast', color: getReelColor(6) },
               { id: 'r24', title: 'Pivot', content: 'Changing direction\nBased on market feedback\nAdapt to survive', color: getReelColor(7) },
               { id: 'r25', title: 'MUDRA', content: 'Micro Units Development\nLoans: Shishu, Kishore, Tarun\nFor small businesses', color: getReelColor(8) },
               { id: 'r26', title: 'Make in India', content: 'Manufacturing push\nLaunched 2014\nLion logo', color: getReelColor(9) },
               { id: 'r27', title: 'Skill India', content: 'Training youth\nEmployable skills\nLaunched 2015', color: getReelColor(0) },
               { id: 'r28', title: 'Social Enterprise', content: 'Business solving\nSocial problems\nProfit + Purpose', color: getReelColor(1) },
               { id: 'r29', title: 'Venture Capital', content: 'Professional investors\nHigh risk, High reward\nFor scaling up', color: getReelColor(2) },
               { id: 'r30', title: 'First Gen', content: 'No family business\nStarting from scratch\nSelf-made entrepreneur', color: getReelColor(3) }
            ]
          },
          { 
            id: 'ocm4', 
            title: '4. Business Services', 
            description: 'Banking, Insurance, Transport, Communication.', 
            summary: 'Services are intangible.\n**Banking**: Commercial, Central.\n**Insurance**: Life, Fire, Marine.\n**Transport**: Road, Rail, Air, Water.', 
            detailedNotes: '### 1. Introduction\nServices are intangible, inseparable, inconsistent, and perishable. They support the primary and secondary sectors.\n\n### 2. Banking\n* **Central Bank (RBI)**: Issues currency, Banker to Govt, Banker to Banks.\n* **Commercial Bank**: Accepts deposits (Savings, Current, FD, RD) and Lends money (Loans, Overdraft).\n* **e-Banking**: NEFT, RTGS, IMPS, ATM, Credit/Debit Cards.\n\n### 3. Insurance\nContract between Insurer (Company) and Insured (Person) to indemnify loss.\n* **Principles**: \n  1. Utmost Good Faith (Disclosure)\n  2. Insurable Interest (Ownership)\n  3. Indemnity (Compensation, not profit)\n  4. Subrogation (Transfer of rights)\n  5. Contribution (Multiple policies)\n  6. Mitigation of Loss (Minimize damage)\n  7. Causa Proxima (Nearest cause)\n* **Types**: Life (Human), Marine (Sea), Fire (Assets).\n\n### 4. Transport\nMovement of people and goods. Creates **Place Utility**.\n* **Road**: Door-to-door, Flexible, but Traffic.\n* **Rail**: Heavy goods, Long distance, Cheap, but Fixed route.\n* **Air**: Fastest, Expensive, Emergency.\n* **Water**: Cheapest for bulky intl trade, Slowest.\n\n### 5. Warehousing\nStorage of goods. Creates **Time Utility**.\n* **Bonded Warehouse**: For imported goods (Customs duty pending).\n* **Cold Storage**: Perishables.', 
            flashcards: [
              { id: 'f1', front: 'Principle of Indemnity', back: 'To place insured in same financial position as before loss (Not applicable to Life).' },
              { id: 'f2', front: 'Warehousing creates?', back: 'Time Utility.' },
              { id: 'f3', front: 'Transport creates?', back: 'Place Utility.' },
              { id: 'f4', front: 'RBI established in?', back: '1935, Nationalized in 1949.' },
              { id: 'f5', front: 'RBI Headquarters?', back: 'Mumbai.' },
              { id: 'f6', front: 'RBI is Banker to?', back: 'Government and Banks.' },
              { id: 'f7', front: 'Current Account for?', back: 'Businessmen (Overdraft facility available).' },
              { id: 'f8', front: 'Savings Account for?', back: 'Salaried individuals (Interest on balance).' },
              { id: 'f9', front: 'Fixed Deposit features?', back: 'Lump sum for fixed period with high interest.' },
              { id: 'f10', front: 'Recurring Deposit features?', back: 'Monthly installments for fixed period.' },
              { id: 'f11', front: 'NEFT stands for?', back: 'National Electronic Funds Transfer (Batch processing).' },
              { id: 'f12', front: 'RTGS stands for?', back: 'Real Time Gross Settlement (Min Rs.2 Lakhs, Instant).' },
              { id: 'f13', front: 'IMPS stands for?', back: 'Immediate Payment Service (24x7).' },
              { id: 'f14', front: 'UPI stands for?', back: 'Unified Payments Interface.' },
              { id: 'f15', front: 'Insurance is a contract of?', back: 'Indemnity (except Life Insurance - Assurance).' },
              { id: 'f16', front: 'Principle of Utmost Good Faith?', back: 'Both parties must disclose all material facts.' },
              { id: 'f17', front: 'Principle of Insurable Interest?', back: 'Must suffer financial loss if object is damaged.' },
              { id: 'f18', front: 'Principle of Subrogation?', back: 'Transfer of ownership rights to insurer after claim.' },
              { id: 'f19', front: 'Principle of Contribution?', back: 'Multiple insurers share the claim proportionately.' },
              { id: 'f20', front: 'Causa Proxima means?', back: 'Nearest or proximate cause of loss is considered.' },
              { id: 'f21', front: 'Life Insurance is contract of?', back: 'Assurance (Event death is certain).' },
              { id: 'f22', front: 'Marine Insurance covers?', back: 'Ship, Cargo, Freight against sea perils.' },
              { id: 'f23', front: 'Bonded Warehouse?', back: 'Stores imported goods until customs duty is paid.' },
              { id: 'f24', front: 'Cold Storage purpose?', back: 'Store perishable goods like fruits, vegetables, milk.' },
              { id: 'f25', front: 'Fastest mode of transport?', back: 'Air Transport.' },
              { id: 'f26', front: 'Cheapest mode of transport?', back: 'Water Transport (for bulky goods).' },
              { id: 'f27', front: 'Door-to-door transport?', back: 'Road Transport (most flexible).' },
              { id: 'f28', front: 'Pipeline transport for?', back: 'Oil, Gas, Water (continuous flow).' },
              { id: 'f29', front: 'Services are?', back: 'Intangible, Inseparable, Inconsistent, Perishable.' },
              { id: 'f30', front: 'IRDAI stands for?', back: 'Insurance Regulatory and Development Authority of India.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Principle of Indemnity is NOT applicable to ______ insurance.', options: ['Fire', 'Marine', 'Life', 'General'], correctIndex: 2, explanation: 'Human life cannot be valued in money.' },
              { id: 'q2', question: 'RBI was established in:', options: ['1935', '1949', '1955', '1969'], correctIndex: 0, explanation: 'Nationalized in 1949.' },
              { id: 'q3', question: 'RTGS minimum amount is:', options: ['Rs.1 Lakh', 'Rs.2 Lakhs', 'Rs.5 Lakhs', 'No limit'], correctIndex: 1, explanation: 'High value instant transfer.' },
              { id: 'q4', question: 'Warehousing creates ______ utility.', options: ['Place', 'Time', 'Form', 'Possession'], correctIndex: 1, explanation: 'Stores goods until needed.' },
              { id: 'q5', question: 'Transport creates ______ utility.', options: ['Place', 'Time', 'Form', 'Possession'], correctIndex: 0, explanation: 'Moves goods from place to place.' },
              { id: 'q6', question: 'Bonded warehouse stores ______ goods.', options: ['Exported', 'Imported', 'Local', 'Perishable'], correctIndex: 1, explanation: 'Customs duty pending.' },
              { id: 'q7', question: 'Cold storage is for ______ goods.', options: ['Heavy', 'Light', 'Perishable', 'Imported'], correctIndex: 2, explanation: 'Fruits, vegetables, milk.' },
              { id: 'q8', question: 'Fastest mode of transport is:', options: ['Road', 'Rail', 'Water', 'Air'], correctIndex: 3, explanation: 'Speed is highest.' },
              { id: 'q9', question: 'Cheapest mode for bulky goods is:', options: ['Road', 'Rail', 'Water', 'Air'], correctIndex: 2, explanation: 'Sea freight is cheapest.' },
              { id: 'q10', question: 'Door-to-door service is by:', options: ['Rail', 'Air', 'Road', 'Water'], correctIndex: 2, explanation: 'Most flexible mode.' },
              { id: 'q11', question: 'Current account is for:', options: ['Salaried persons', 'Businessmen', 'Farmers', 'Students'], correctIndex: 1, explanation: 'Overdraft facility.' },
              { id: 'q12', question: 'Savings account pays:', options: ['No interest', 'Interest', 'Commission', 'Bonus'], correctIndex: 1, explanation: 'Encourages saving.' },
              { id: 'q13', question: 'Insurable Interest means:', options: ['No ownership', 'Financial stake in object', 'No relation', 'None'], correctIndex: 1, explanation: 'Must suffer loss if damaged.' },
              { id: 'q14', question: 'Utmost Good Faith is also called:', options: ['Uberrimae fidei', 'Causa Proxima', 'Subrogation', 'Indemnity'], correctIndex: 0, explanation: 'Latin term for good faith.' },
              { id: 'q15', question: 'Subrogation means:', options: ['Adding claims', 'Transfer of rights to insurer', 'Double payment', 'None'], correctIndex: 1, explanation: 'After claim settlement.' },
              { id: 'q16', question: 'Life Insurance is contract of:', options: ['Indemnity', 'Assurance', 'Wagering', 'None'], correctIndex: 1, explanation: 'Death is certain.' },
              { id: 'q17', question: 'Marine Insurance covers:', options: ['Only ship', 'Only cargo', 'Ship, cargo, freight', 'Only freight'], correctIndex: 2, explanation: 'All sea perils.' },
              { id: 'q18', question: 'NEFT works on:', options: ['Real-time', 'Batch processing', 'Daily once', 'Weekly'], correctIndex: 1, explanation: 'Half-hourly batches.' },
              { id: 'q19', question: 'IMPS is available:', options: ['9-5 only', 'Bank hours', '24x7', 'Sundays only'], correctIndex: 2, explanation: 'Any time, any day.' },
              { id: 'q20', question: 'UPI was launched by:', options: ['RBI', 'NPCI', 'SBI', 'SEBI'], correctIndex: 1, explanation: 'National Payments Corporation.' },
              { id: 'q21', question: 'Services are ______ in nature.', options: ['Tangible', 'Intangible', 'Physical', 'Visible'], correctIndex: 1, explanation: 'Cannot be touched.' },
              { id: 'q22', question: 'Services are ______ and cannot be stored.', options: ['Durable', 'Perishable', 'Permanent', 'Storable'], correctIndex: 1, explanation: 'Empty seat is lost forever.' },
              { id: 'q23', question: 'Pipeline transport is for:', options: ['Passengers', 'Heavy goods', 'Oil and Gas', 'Mail'], correctIndex: 2, explanation: 'Continuous flow.' },
              { id: 'q24', question: 'IRDAI regulates:', options: ['Banks', 'Stock market', 'Insurance', 'Exports'], correctIndex: 2, explanation: 'Insurance regulator.' },
              { id: 'q25', question: 'Overdraft facility is in ______ account.', options: ['Savings', 'Current', 'Fixed Deposit', 'Recurring'], correctIndex: 1, explanation: 'For businessmen.' },
              { id: 'q26', question: 'Contribution principle applies when:', options: ['Single policy', 'Multiple policies', 'No policy', 'None'], correctIndex: 1, explanation: 'Claims shared proportionately.' },
              { id: 'q27', question: 'Monorail is found in:', options: ['Delhi', 'Mumbai', 'Chennai', 'Kolkata'], correctIndex: 1, explanation: 'Mumbai rapid transit.' },
              { id: 'q28', question: 'RBI headquarters is in:', options: ['Delhi', 'Mumbai', 'Kolkata', 'Chennai'], correctIndex: 1, explanation: 'Financial capital.' },
              { id: 'q29', question: 'Fire Insurance is for ______ period.', options: ['Indefinite', 'One year', 'Whole life', 'Monthly'], correctIndex: 1, explanation: 'Annual renewal.' },
              { id: 'q30', question: 'Causa Proxima means:', options: ['Distant cause', 'Nearest cause', 'No cause', 'Multiple causes'], correctIndex: 1, explanation: 'Immediate cause of loss.' }
            ],
            reels: [
               { id: 'r1', title: 'Intangible', content: 'Services cannot be seen or touched.\n(Doctor, Teacher).', color: getReelColor(6) },
               { id: 'r2', title: 'Inseparable', content: 'Service provider and service cannot be separated.', color: getReelColor(7) },
               { id: 'r3', title: 'Perishable', content: 'Services cannot be stored.\nEmpty airline seat is lost forever.', color: getReelColor(8) },
               { id: 'r4', title: 'Central Bank', content: 'Apex bank (RBI).\nRegulates money supply.', color: getReelColor(9) },
               { id: 'r5', title: 'Commercial Bank', content: 'Accepts deposits, Grants loans.\nProfit motive.', color: getReelColor(0) },
               { id: 'r6', title: 'Current A/c', content: 'For Businessmen.\nOverdraft facility available.', color: getReelColor(1) },
               { id: 'r7', title: 'Savings A/c', content: 'For salaried people.\nEncourages saving habit.', color: getReelColor(2) },
               { id: 'r8', title: 'FD', content: 'Fixed Deposit.\nLump sum amount for fixed period. High interest.', color: getReelColor(3) },
               { id: 'r9', title: 'RTGS', content: 'Real Time Gross Settlement.\nMin Amt: 2 Lakhs. Instant.', color: getReelColor(4) },
               { id: 'r10', title: 'NEFT', content: 'National Electronic Funds Transfer.\nBatches (Half hourly).', color: getReelColor(5) },
               { id: 'r11', title: 'Utmost Good Faith', content: 'Both parties must disclose ALL material facts.', color: getReelColor(6) },
               { id: 'r12', title: 'Insurable Interest', content: 'You must suffer financial loss if the object is damaged.', color: getReelColor(7) },
               { id: 'r13', title: 'Indemnity', content: 'Compensation for loss.\nNo profit from insurance.', color: getReelColor(8) },
               { id: 'r14', title: 'Subrogation', content: 'Transfer of ownership rights to insurer after claim settlement.', color: getReelColor(9) },
               { id: 'r15', title: 'Causa Proxima', content: 'Nearest cause of loss is considered.', color: getReelColor(0) },
               { id: 'r16', title: 'Life Insurance', content: 'Contract of Assurance.\nEvent (Death) is certain.', color: getReelColor(1) },
               { id: 'r17', title: 'Fire Insurance', content: 'Contract of Indemnity.\nLoss by fire.', color: getReelColor(2) },
               { id: 'r18', title: 'Place Utility', content: 'Transport moves goods from place of production to consumption.', color: getReelColor(3) },
               { id: 'r19', title: 'Time Utility', content: 'Warehousing stores goods until they are needed.', color: getReelColor(4) },
               { id: 'r20', title: 'Bonded Warehouse', content: 'Stores imported goods until customs duty is paid.', color: getReelColor(5) },
               { id: 'r21', title: 'Cold Storage', content: 'For perishable goods like fruits, vegetables, milk.', color: getReelColor(6) },
               { id: 'r22', title: 'Door-to-Door', content: 'Road transport is the only mode providing doorstep service.', color: getReelColor(7) },
               { id: 'r23', title: 'Fastest Mode', content: 'Air transport is fastest but most expensive.', color: getReelColor(8) },
               { id: 'r24', title: 'Cheapest Mode', content: 'Water transport is cheapest for bulky goods.', color: getReelColor(9) },
               { id: 'r25', title: 'Monorail', content: 'Rapid transit system found in Mumbai.', color: getReelColor(0) },
               { id: 'r26', title: 'UPI', content: 'Unified Payments Interface\n24x7 instant transfer\nNo bank holidays', color: getReelColor(1) },
               { id: 'r27', title: 'IMPS', content: 'Immediate Payment Service\n24x7 available\nSmall amounts', color: getReelColor(2) },
               { id: 'r28', title: 'Contribution', content: 'Multiple policies\nClaim shared proportionately\nNo double benefit', color: getReelColor(3) },
               { id: 'r29', title: 'Marine Insurance', content: 'Covers Ship, Cargo, Freight\nSea perils protection\nInternational trade', color: getReelColor(4) },
               { id: 'r30', title: 'Pipeline Transport', content: 'For Oil, Gas, Water\nContinuous flow\nNo loading/unloading', color: getReelColor(5) }
            ],
            longAnswers: ocm_ch4_long_answers
          },
          { 
            id: 'ocm5', 
            title: '5. Emerging Modes of Business', 
            description: 'E-Business, BPO, KPO, LPO.', 
            summary: '**E-Business**: Electronic Business.\nTypes: B2B, B2C, C2C, C2B.\n**Outsourcing**: BPO (Voice/Non-voice), KPO (Knowledge), LPO (Legal).', 
            detailedNotes: '### 1. E-Business\nDerived from Email/E-commerce. Conduct of industry, trade, and commerce using computer networks.\n* **Scope**:\n  1. **B2B (Business to Business)**: Transactions between firms (Auto parts to Car maker).\n  2. **B2C (Business to Consumer)**: Amazon, Flipkart.\n  3. **C2C (Consumer to Consumer)**: eBay, OLX.\n  4. **C2B (Consumer to Business)**: Reviews, Freelance work.\n* **Benefits**: Easy formation, Lower investment, Convenience, Global reach, Paperless.\n* **Limitations**: Lack of personal touch, Security issues, Delivery delay.\n\n### 2. Outsourcing\nContracting out non-core business activities to third-party specialists.\n* **Need**: To focus on core competency, Cost reduction.\n* **Forms**:\n  1. **BPO (Business Process Outsourcing)**: Call centers, Data entry.\n  2. **KPO (Knowledge Process Outsourcing)**: R&D, Data Analysis (High skill).\n  3. **LPO (Legal Process Outsourcing)**: Legal drafting, Patent filing.',
            flashcards: [
              { id: 'f1', front: 'B2C stands for', back: 'Business to Consumer.' },
              { id: 'f2', front: 'KPO stands for', back: 'Knowledge Process Outsourcing.' },
              { id: 'f3', front: 'B2B stands for', back: 'Business to Business.' },
              { id: 'f4', front: 'C2C stands for', back: 'Consumer to Consumer.' },
              { id: 'f5', front: 'C2B stands for', back: 'Consumer to Business.' },
              { id: 'f6', front: 'BPO stands for', back: 'Business Process Outsourcing.' },
              { id: 'f7', front: 'LPO stands for', back: 'Legal Process Outsourcing.' },
              { id: 'f8', front: 'E-Commerce vs E-Business?', back: 'E-Commerce is buying/selling; E-Business includes all business processes.' },
              { id: 'f9', front: 'Example of B2B?', back: 'Tire manufacturer selling to car company.' },
              { id: 'f10', front: 'Example of B2C?', back: 'Amazon, Flipkart selling to customers.' },
              { id: 'f11', front: 'Example of C2C?', back: 'OLX, eBay (person to person sale).' },
              { id: 'f12', front: 'Example of C2B?', back: 'Freelancers offering services to businesses.' },
              { id: 'f13', front: 'G2C stands for?', back: 'Government to Citizen (Passport Seva, Tax filing).' },
              { id: 'f14', front: 'What is Intra-B Commerce?', back: 'Transactions within business departments.' },
              { id: 'f15', front: 'What is Outsourcing?', back: 'Contracting non-core work to external specialists.' },
              { id: 'f16', front: 'Core Competency meaning?', back: 'What a company does best (its specialty).' },
              { id: 'f17', front: 'BPO examples?', back: 'Call centers, Data entry, Customer support.' },
              { id: 'f18', front: 'KPO examples?', back: 'R&D, Market research, Data analytics.' },
              { id: 'f19', front: 'LPO examples?', back: 'Legal drafting, Patent filing, Contract review.' },
              { id: 'f20', front: 'Nearshoring meaning?', back: 'Outsourcing to nearby country.' },
              { id: 'f21', front: 'Onshoring meaning?', back: 'Outsourcing within same country.' },
              { id: 'f22', front: 'Offshoring meaning?', back: 'Outsourcing to distant country (India for US).' },
              { id: 'f23', front: 'Phishing meaning?', back: 'Stealing sensitive info by pretending to be trusted entity.' },
              { id: 'f24', front: 'Encryption meaning?', back: 'Converting data into code for security.' },
              { id: 'f25', front: 'Digital Signature purpose?', back: 'Authenticates identity of sender electronically.' },
              { id: 'f26', front: 'Payment Gateway examples?', back: 'Razorpay, PayU, CCAvenue.' },
              { id: 'f27', front: 'COD stands for?', back: 'Cash On Delivery.' },
              { id: 'f28', front: 'VPN stands for?', back: 'Virtual Private Network (secure connection).' },
              { id: 'f29', front: 'Firewall purpose?', back: 'Protects network from unauthorized access.' },
              { id: 'f30', front: 'Hacking meaning?', back: 'Unauthorized access to computer systems.' }
            ],
            mcqs: [
              { id: 'q1', question: 'OLX is an example of ______.', options: ['B2B', 'B2C', 'C2C', 'C2B'], correctIndex: 2, explanation: 'Consumer selling to Consumer.' },
              { id: 'q2', question: 'Amazon is an example of:', options: ['B2B', 'B2C', 'C2C', 'G2C'], correctIndex: 1, explanation: 'Business selling to Consumer.' },
              { id: 'q3', question: 'BPO stands for:', options: ['Business Process Outsourcing', 'Business Planning Organization', 'Both', 'None'], correctIndex: 0, explanation: 'Contracting out processes.' },
              { id: 'q4', question: 'KPO requires ______ skills.', options: ['Low', 'Medium', 'High', 'No'], correctIndex: 2, explanation: 'Knowledge-based work.' },
              { id: 'q5', question: 'LPO deals with ______ work.', options: ['Accounting', 'Legal', 'Marketing', 'HR'], correctIndex: 1, explanation: 'Legal Process Outsourcing.' },
              { id: 'q6', question: 'E-Commerce is ______ of E-Business.', options: ['Same as', 'Part', 'Different from', 'None'], correctIndex: 1, explanation: 'E-Business is broader.' },
              { id: 'q7', question: 'Passport Seva is example of:', options: ['B2B', 'B2C', 'G2C', 'C2C'], correctIndex: 2, explanation: 'Government to Citizen.' },
              { id: 'q8', question: 'Freelancers on Upwork is example of:', options: ['B2B', 'B2C', 'C2C', 'C2B'], correctIndex: 3, explanation: 'Consumer offering to Business.' },
              { id: 'q9', question: 'Outsourcing helps focus on:', options: ['Non-core activities', 'Core competency', 'All activities', 'None'], correctIndex: 1, explanation: 'What company does best.' },
              { id: 'q10', question: 'Call center is example of:', options: ['KPO', 'BPO', 'LPO', 'All'], correctIndex: 1, explanation: 'Business Process Outsourcing.' },
              { id: 'q11', question: 'R&D outsourcing is:', options: ['BPO', 'KPO', 'LPO', 'None'], correctIndex: 1, explanation: 'Knowledge-based.' },
              { id: 'q12', question: 'Patent filing outsourcing is:', options: ['BPO', 'KPO', 'LPO', 'None'], correctIndex: 2, explanation: 'Legal work.' },
              { id: 'q13', question: 'Phishing is a ______ threat.', options: ['Physical', 'Cyber', 'Natural', 'None'], correctIndex: 1, explanation: 'Online fraud.' },
              { id: 'q14', question: 'Encryption is for:', options: ['Speed', 'Security', 'Storage', 'Display'], correctIndex: 1, explanation: 'Protecting data.' },
              { id: 'q15', question: 'Digital Signature verifies:', options: ['Address', 'Identity', 'Age', 'None'], correctIndex: 1, explanation: 'Authenticity of sender.' },
              { id: 'q16', question: 'E-Business has ______ reach.', options: ['Local', 'National', 'Global', 'None'], correctIndex: 2, explanation: 'No geographical boundaries.' },
              { id: 'q17', question: 'E-Business is ______ intensive.', options: ['Labor', 'Capital', 'Technology', 'Land'], correctIndex: 2, explanation: 'Depends on IT.' },
              { id: 'q18', question: 'Onshoring means outsourcing within:', options: ['Same company', 'Same country', 'Same city', 'Same building'], correctIndex: 1, explanation: 'Domestic outsourcing.' },
              { id: 'q19', question: 'Offshoring is outsourcing to:', options: ['Nearby country', 'Distant country', 'Same country', 'None'], correctIndex: 1, explanation: 'Like US to India.' },
              { id: 'q20', question: 'Nearshoring is outsourcing to:', options: ['Nearby country', 'Distant country', 'Same country', 'None'], correctIndex: 0, explanation: 'Neighboring country.' },
              { id: 'q21', question: 'VPN provides:', options: ['Speed', 'Security', 'Storage', 'Display'], correctIndex: 1, explanation: 'Secure connection.' },
              { id: 'q22', question: 'Firewall protects from:', options: ['Fire', 'Unauthorized access', 'Water', 'Dust'], correctIndex: 1, explanation: 'Network security.' },
              { id: 'q23', question: 'COD means:', options: ['Collect On Demand', 'Cash On Delivery', 'Credit On Delivery', 'None'], correctIndex: 1, explanation: 'Pay when product arrives.' },
              { id: 'q24', question: 'Razorpay is a:', options: ['Bank', 'Payment Gateway', 'Wallet', 'Card'], correctIndex: 1, explanation: 'Processes payments.' },
              { id: 'q25', question: 'E-Business limitation is:', options: ['Low cost', 'Global reach', 'Security issues', 'Convenience'], correctIndex: 2, explanation: 'Cyber threats.' },
              { id: 'q26', question: 'E-Business advantage is:', options: ['High cost', 'Limited reach', 'Lower investment', 'Physical touch'], correctIndex: 2, explanation: 'No physical store needed.' },
              { id: 'q27', question: 'Hacking is ______ access.', options: ['Authorized', 'Unauthorized', 'Legal', 'None'], correctIndex: 1, explanation: 'Illegal entry.' },
              { id: 'q28', question: 'Data entry is part of:', options: ['KPO', 'BPO', 'LPO', 'None'], correctIndex: 1, explanation: 'Low skill process.' },
              { id: 'q29', question: 'Market research is part of:', options: ['BPO', 'KPO', 'LPO', 'None'], correctIndex: 1, explanation: 'Knowledge-based.' },
              { id: 'q30', question: 'Intra-B commerce is ______ business.', options: ['Between businesses', 'Within business', 'With consumers', 'With government'], correctIndex: 1, explanation: 'Internal transactions.' }
            ],
            reels: [
               { id: 'r1', title: 'E-Commerce', content: 'Buying & Selling online.\nSubset of E-Business.', color: getReelColor(1) },
               { id: 'r2', title: 'E-Business', content: 'Broader term.\nIncludes production, inventory, finance online.', color: getReelColor(2) },
               { id: 'r3', title: 'B2B', content: 'Business to Business.\nCar maker buying tires from tire maker.', color: getReelColor(3) },
               { id: 'r4', title: 'B2C', content: 'Business to Consumer.\nYou buying phone from Amazon.', color: getReelColor(4) },
               { id: 'r5', title: 'C2C', content: 'Consumer to Consumer.\nSelling old bike on OLX.', color: getReelColor(5) },
               { id: 'r6', title: 'C2B', content: 'Consumer to Business.\nFreelancers, Paid Surveys.', color: getReelColor(6) },
               { id: 'r7', title: 'G2C', content: 'Govt to Citizen.\nPassport seva, Tax filing online.', color: getReelColor(7) },
               { id: 'r8', title: 'Intra-B', content: 'Transactions WITHIN the business.\nMarketing dept to Finance dept.', color: getReelColor(8) },
               { id: 'r9', title: 'Global Reach', content: 'E-Business has no geographical boundaries.', color: getReelColor(9) },
               { id: 'r10', title: 'Paperless', content: 'E-Business reduces paperwork significantly.', color: getReelColor(0) },
               { id: 'r11', title: 'Phishing', content: 'Stealing sensitive info by pretending to be bank.', color: getReelColor(1) },
               { id: 'r12', title: 'Encryption', content: 'Converting data into code for security.', color: getReelColor(2) },
               { id: 'r13', title: 'Hacking', content: 'Unauthorized access to computer systems.', color: getReelColor(3) },
               { id: 'r14', title: 'Digital Signature', content: 'Authenticates identity of sender.', color: getReelColor(4) },
               { id: 'r15', title: 'Payment Gateway', content: 'Software to authorize card payments (Razorpay).', color: getReelColor(5) },
               { id: 'r16', title: 'Outsourcing', content: 'Giving non-core work to outside specialists.', color: getReelColor(6) },
               { id: 'r17', title: 'BPO', content: 'Business Process Outsourcing.\nCall centers.', color: getReelColor(7) },
               { id: 'r18', title: 'KPO', content: 'Knowledge Process Outsourcing.\nRequires high skills (R&D).', color: getReelColor(8) },
               { id: 'r19', title: 'LPO', content: 'Legal Process Outsourcing.\nDrafting legal docs.', color: getReelColor(9) },
               { id: 'r20', title: 'Core Competence', content: 'Focus on what you do best.\nOutsource the rest.', color: getReelColor(0) },
               { id: 'r21', title: 'Nearshoring', content: 'Outsourcing to a nearby country.', color: getReelColor(1) },
               { id: 'r22', title: 'Onshoring', content: 'Outsourcing within the same country.', color: getReelColor(2) },
               { id: 'r23', title: 'COD', content: 'Cash On Delivery.\nPay when you get the product.', color: getReelColor(3) },
               { id: 'r24', title: 'VPN', content: 'Virtual Private Network.\nSecure connection.', color: getReelColor(4) },
               { id: 'r25', title: 'Firewall', content: 'Network security\nBlocks unauthorized access\nFirst line of defense', color: getReelColor(5) },
               { id: 'r26', title: 'Offshoring', content: 'Outsourcing to distant country\nUS work to India\nCost advantage', color: getReelColor(6) },
               { id: 'r27', title: 'SSL', content: 'Secure Sockets Layer\nEncrypts web traffic\nHTTPS websites', color: getReelColor(7) },
               { id: 'r28', title: 'Shopping Cart', content: 'Virtual basket\nAdd items before checkout\nE-commerce feature', color: getReelColor(8) },
               { id: 'r29', title: 'Cookies', content: 'Small data files\nTrack user preferences\nPersonalized experience', color: getReelColor(9) },
               { id: 'r30', title: 'Cloud Computing', content: 'Online storage/computing\nNo physical servers\nPay per use', color: getReelColor(0) }
            ]
          },
          { 
            id: 'ocm6', 
            title: '6. Social Responsibility', 
            description: 'CSR & Business Ethics.', 
            summary: 'CSR: Corporate Social Responsibility.\nGroups: Owners, Investors, Employees, Consumers, Govt, Society.', 
            detailedNotes: '### 1. Concept\nBusiness is a part of society. It uses social resources, so it must give back. "Profit is not the sole objective".\n\n### 2. Need for Social Responsibility\n* **Public Image**: Good reputation.\n* **Trusteeship**: Gandhi\'s philosophy (Wealth belongs to society).\n* **Long term interest**: Avoid govt interference.\n* **Moral Justification**: It\'s the right thing to do.\n\n### 3. Responsibility towards Groups\n* **Owners**: Reasonable profit, Expansion, Efficiency.\n* **Investors**: Fair return, Safety of capital, Transparency.\n* **Employees**: Fair wages, Job security, Health/Safety, Union rights.\n* **Consumers**: Quality goods, Fair price, No adulteration, Redressal.\n* **Government**: Pay taxes, Follow laws, No corruption.\n* **Society**: Environment protection, Employment generation, Help weaker sections.\n\n### 4. CSR (Corporate Social Responsibility)\nSec 135 of Companies Act 2013.\n* **Applicability**: Net Worth > 500Cr OR Turnover > 1000Cr OR Net Profit > 5Cr.\n* **Requirement**: Spend **2% of average net profit** of last 3 years on CSR activities (Education, Health, Poverty, Gender equality).',
            flashcards: [
              { id: 'f1', front: 'CSR full form', back: 'Corporate Social Responsibility.' },
              { id: 'f2', front: 'Job Security is responsibility towards?', back: 'Employees.' },
              { id: 'f3', front: 'Section for CSR in Companies Act?', back: 'Section 135 of Companies Act 2013.' },
              { id: 'f4', front: 'CSR spending requirement?', back: '2% of average net profit of last 3 years.' },
              { id: 'f5', front: 'CSR Net Worth threshold?', back: 'More than Rs. 500 Crores.' },
              { id: 'f6', front: 'CSR Turnover threshold?', back: 'More than Rs. 1000 Crores.' },
              { id: 'f7', front: 'CSR Net Profit threshold?', back: 'More than Rs. 5 Crores.' },
              { id: 'f8', front: 'Trusteeship theory by?', back: 'Mahatma Gandhi.' },
              { id: 'f9', front: 'Trusteeship means?', back: 'Businessmen are trustees of society\'s wealth.' },
              { id: 'f10', front: 'Business Ethics derived from?', back: 'Greek word "Ethos" meaning character.' },
              { id: 'f11', front: 'Triple Bottom Line?', back: 'People, Planet, Profit.' },
              { id: 'f12', front: 'Responsibility to Owners?', back: 'Fair dividend, Efficient management, Growth.' },
              { id: 'f13', front: 'Responsibility to Investors?', back: 'Safety of capital, Fair return, Transparency.' },
              { id: 'f14', front: 'Responsibility to Employees?', back: 'Fair wages, Job security, Good working conditions.' },
              { id: 'f15', front: 'Responsibility to Consumers?', back: 'Quality goods, Fair price, No adulteration.' },
              { id: 'f16', front: 'Responsibility to Government?', back: 'Pay taxes honestly, Follow laws, No corruption.' },
              { id: 'f17', front: 'Responsibility to Society?', back: 'Protect environment, Create jobs, Help weaker sections.' },
              { id: 'f18', front: 'ISO 14000 is for?', back: 'Environmental Management Standards.' },
              { id: 'f19', front: 'ISO 26000 is for?', back: 'Social Responsibility Guidelines.' },
              { id: 'f20', front: 'Philanthropy meaning?', back: 'Love for mankind, Charity work.' },
              { id: 'f21', front: 'Carbon Footprint?', back: 'Total greenhouse gas emissions by an organization.' },
              { id: 'f22', front: 'Whistle Blowing?', back: 'Employee reporting unethical practices in company.' },
              { id: 'f23', front: 'Social Audit?', back: 'Evaluating company\'s social performance.' },
              { id: 'f24', front: 'Business Ethics purpose?', back: 'Distinguishing right from wrong in business.' },
              { id: 'f25', front: 'Black Marketing means?', back: 'Creating artificial shortage to increase prices.' },
              { id: 'f26', front: 'Adulteration means?', back: 'Mixing inferior substances to reduce quality.' },
              { id: 'f27', front: 'CSR Committee requirement?', back: 'Board of Directors must constitute CSR Committee.' },
              { id: 'f28', front: 'CSR Committee composition?', back: 'Minimum 3 directors including 1 independent director.' },
              { id: 'f29', front: 'Schedule VII of Companies Act?', back: 'Lists activities eligible for CSR spending.' },
              { id: 'f30', front: 'Green Business means?', back: 'Business practices that protect environment.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Business should provide ______ goods to consumers.', options: ['Cheap', 'Quality', 'Adulterated', 'Duplicate'], correctIndex: 1, explanation: 'Safety and value.' },
              { id: 'q2', question: 'CSR is mandated under Section:', options: ['134', '135', '136', '137'], correctIndex: 1, explanation: 'Companies Act 2013.' },
              { id: 'q3', question: 'CSR spending is ______% of average net profit.', options: ['1%', '2%', '3%', '5%'], correctIndex: 1, explanation: 'Mandatory requirement.' },
              { id: 'q4', question: 'Trusteeship theory was given by:', options: ['Nehru', 'Gandhi', 'Ambedkar', 'Patel'], correctIndex: 1, explanation: 'Wealth belongs to society.' },
              { id: 'q5', question: 'Triple Bottom Line includes:', options: ['Only Profit', 'People, Planet, Profit', 'Only People', 'Only Planet'], correctIndex: 1, explanation: 'Sustainable business.' },
              { id: 'q6', question: 'ISO 14000 deals with:', options: ['Quality', 'Environment', 'Safety', 'Finance'], correctIndex: 1, explanation: 'Environmental standards.' },
              { id: 'q7', question: 'Business Ethics is derived from Greek word:', options: ['Logos', 'Ethos', 'Pathos', 'Cosmos'], correctIndex: 1, explanation: 'Meaning character.' },
              { id: 'q8', question: 'Fair wages is responsibility towards:', options: ['Owners', 'Consumers', 'Employees', 'Government'], correctIndex: 2, explanation: 'Employee welfare.' },
              { id: 'q9', question: 'Paying taxes is responsibility towards:', options: ['Society', 'Government', 'Employees', 'Consumers'], correctIndex: 1, explanation: 'Legal obligation.' },
              { id: 'q10', question: 'No adulteration is responsibility towards:', options: ['Owners', 'Employees', 'Consumers', 'Investors'], correctIndex: 2, explanation: 'Consumer protection.' },
              { id: 'q11', question: 'CSR Net Worth threshold is Rs:', options: ['100 Cr', '500 Cr', '1000 Cr', '5 Cr'], correctIndex: 1, explanation: 'Companies Act requirement.' },
              { id: 'q12', question: 'Whistle Blowing means:', options: ['Playing music', 'Reporting unethical practices', 'Celebrating', 'None'], correctIndex: 1, explanation: 'Internal reporting.' },
              { id: 'q13', question: 'Carbon Footprint measures:', options: ['Profit', 'Greenhouse gas emissions', 'Sales', 'Employment'], correctIndex: 1, explanation: 'Environmental impact.' },
              { id: 'q14', question: 'Social Audit evaluates:', options: ['Financial performance', 'Social performance', 'Market share', 'Production'], correctIndex: 1, explanation: 'CSR effectiveness.' },
              { id: 'q15', question: 'Black Marketing creates:', options: ['Surplus', 'Artificial shortage', 'Competition', 'Employment'], correctIndex: 1, explanation: 'Unethical practice.' },
              { id: 'q16', question: 'Safety of capital is responsibility towards:', options: ['Employees', 'Consumers', 'Investors', 'Society'], correctIndex: 2, explanation: 'Financial stakeholders.' },
              { id: 'q17', question: 'Job security is responsibility towards:', options: ['Owners', 'Employees', 'Government', 'Investors'], correctIndex: 1, explanation: 'Worker welfare.' },
              { id: 'q18', question: 'Environment protection is responsibility towards:', options: ['Owners', 'Investors', 'Society', 'Consumers'], correctIndex: 2, explanation: 'Social welfare.' },
              { id: 'q19', question: 'CSR Committee needs minimum ______ directors.', options: ['2', '3', '4', '5'], correctIndex: 1, explanation: 'Including 1 independent.' },
              { id: 'q20', question: 'Schedule VII lists:', options: ['Tax rules', 'CSR activities', 'Penalties', 'Dividends'], correctIndex: 1, explanation: 'Eligible CSR activities.' },
              { id: 'q21', question: 'Philanthropy means:', options: ['Profit making', 'Charity/Love for mankind', 'Marketing', 'Selling'], correctIndex: 1, explanation: 'Giving back.' },
              { id: 'q22', question: 'Green Business focuses on:', options: ['Profit only', 'Environment protection', 'Sales only', 'Production only'], correctIndex: 1, explanation: 'Sustainable practices.' },
              { id: 'q23', question: 'ISO 26000 deals with:', options: ['Quality', 'Environment', 'Social Responsibility', 'Safety'], correctIndex: 2, explanation: 'CSR guidelines.' },
              { id: 'q24', question: 'Adulteration is ______ practice.', options: ['Ethical', 'Unethical', 'Legal', 'Encouraged'], correctIndex: 1, explanation: 'Cheating consumers.' },
              { id: 'q25', question: 'CSR average is calculated for last ______ years.', options: ['2', '3', '4', '5'], correctIndex: 1, explanation: 'As per Companies Act.' },
              { id: 'q26', question: 'Fair return is responsibility towards:', options: ['Employees', 'Investors', 'Consumers', 'Government'], correctIndex: 1, explanation: 'Financial stakeholders.' },
              { id: 'q27', question: 'Good working conditions for:', options: ['Owners', 'Employees', 'Consumers', 'Investors'], correctIndex: 1, explanation: 'Worker welfare.' },
              { id: 'q28', question: 'No corruption is responsibility towards:', options: ['Society', 'Government', 'Both', 'Neither'], correctIndex: 2, explanation: 'Legal and ethical.' },
              { id: 'q29', question: 'Employment generation is responsibility towards:', options: ['Owners', 'Investors', 'Society', 'Government'], correctIndex: 2, explanation: 'Social welfare.' },
              { id: 'q30', question: 'CSR Turnover threshold is Rs:', options: ['500 Cr', '1000 Cr', '100 Cr', '5000 Cr'], correctIndex: 1, explanation: 'Companies Act requirement.' }
            ],
            reels: [
               { id: 'r1', title: 'CSR', content: 'Corporate Social Responsibility.\nGiving back to society.', color: getReelColor(3) },
               { id: 'r2', title: 'CSR Limit', content: '2% of avg net profit of last 3 years.', color: getReelColor(4) },
               { id: 'r3', title: 'To Owners', content: 'Fair dividend, Efficient mgmt, Growth.', color: getReelColor(5) },
               { id: 'r4', title: 'To Employees', content: 'Fair wages, Job security, Good working conditions.', color: getReelColor(6) },
               { id: 'r5', title: 'To Consumers', content: 'Good quality, Fair price, No adulteration.', color: getReelColor(7) },
               { id: 'r6', title: 'To Govt', content: 'Pay Taxes honestly.\nFollow Laws.', color: getReelColor(8) },
               { id: 'r7', title: 'To Society', content: 'Protect Environment.\nCreate Jobs.', color: getReelColor(9) },
               { id: 'r8', title: 'Trusteeship', content: 'Gandhi\'s concept.\nBusinessmen are trustees of society\'s wealth.', color: getReelColor(0) },
               { id: 'r9', title: 'Ethics', content: 'Derived from Greek "Ethos".\nMeans Character.', color: getReelColor(1) },
               { id: 'r10', title: 'Business Ethics', content: 'Code of conduct.\nRight vs Wrong in business.', color: getReelColor(2) },
               { id: 'r11', title: 'Public Image', content: 'Social responsibility builds good brand reputation.', color: getReelColor(3) },
               { id: 'r12', title: 'Sec 135', content: 'Section of Companies Act 2013 dealing with CSR.', color: getReelColor(4) },
               { id: 'r13', title: 'CSR Eligibility', content: 'Net Worth > 500Cr OR Turnover > 1000Cr OR Profit > 5Cr.', color: getReelColor(5) },
               { id: 'r14', title: 'Triple Bottom Line', content: 'People, Planet, Profit.\nSustainability.', color: getReelColor(6) },
               { id: 'r15', title: 'To Investors', content: 'Safety of Capital.\nCorrect Information.', color: getReelColor(7) },
               { id: 'r16', title: 'Black Marketing', content: 'Creating artificial shortage.\nUnethical practice.', color: getReelColor(8) },
               { id: 'r17', title: 'Fair Trade', content: 'No unfair trade practices like misleading ads.', color: getReelColor(9) },
               { id: 'r18', title: 'Philanthropy', content: 'Charity.\nLove for mankind.', color: getReelColor(0) },
               { id: 'r19', title: 'Social Audit', content: 'Checking company\'s social performance.', color: getReelColor(1) },
               { id: 'r20', title: 'ISO 14000', content: 'Standards for Environmental Management.', color: getReelColor(2) },
               { id: 'r21', title: 'Carbon Footprint', content: 'Total greenhouse gas emissions caused by org.', color: getReelColor(3) },
               { id: 'r22', title: 'Whistle Blowing', content: 'Employee reporting unethical practices inside company.', color: getReelColor(4) },
               { id: 'r23', title: 'Schedule VII', content: 'Lists activities for CSR\nEducation, Health, Poverty\nGender equality', color: getReelColor(5) },
               { id: 'r24', title: 'CSR Committee', content: '3 Directors minimum\n1 Independent director\nFormulates CSR policy', color: getReelColor(6) },
               { id: 'r25', title: 'ISO 26000', content: 'Social Responsibility\nGuidelines for CSR\nInternational standard', color: getReelColor(7) },
               { id: 'r26', title: 'Green Business', content: 'Environment friendly\nSustainable practices\nReduce, Reuse, Recycle', color: getReelColor(8) },
               { id: 'r27', title: 'Stakeholders', content: 'All affected parties\nOwners, Employees, Society\nConsumers, Government', color: getReelColor(9) },
               { id: 'r28', title: 'Sustainable Dev', content: 'Meeting present needs\nWithout compromising future\nLong-term vision', color: getReelColor(0) },
               { id: 'r29', title: 'Adulteration', content: 'Mixing inferior substances\nUnethical practice\nPunishable offense', color: getReelColor(1) },
               { id: 'r30', title: 'Moral Justification', content: 'Doing right thing\nBeyond legal compliance\nEthical business', color: getReelColor(2) }
            ]
          },
          { 
            id: 'ocm7', 
            title: '7. Consumer Protection', 
            description: 'Rights, Responsibilities, Forums.', 
            summary: 'Rights: Safety, Info, Choose, Heard, Redressal, Education.\nForums: District (upto 1Cr), State (1Cr-10Cr), National (>10Cr).', 
            detailedNotes: '### 1. Introduction\nConsumer is the King of the market. But in reality, he is exploited (Adulteration, High Price, Defective weights). Hence protection is needed.\n\n### 2. Rights of Consumers (COPRA 2019)\n1. **Right to Safety**: Against hazardous goods.\n2. **Right to Information**: Ingredients, Date, Price.\n3. **Right to Choose**: Variety at competitive price.\n4. **Right to be Heard**: Represent in forums.\n5. **Right to Consumer Education**: Awareness.\n6. **Right to Redressal**: Compensation.\n7. **Right to Healthy Environment**.\n8. **Right against Unfair Trade Practices**.\n\n### 3. Consumer Protection Mechanism\nThree-Tier Quasi-Judicial Machinery:\n* **District Commission**:\n  * Jurisdiction: District level.\n  * Claims: Upto Rs. 1 Crore.\n  * President: District Judge.\n* **State Commission**:\n  * Jurisdiction: State level.\n  * Claims: Rs. 1 Crore to Rs. 10 Crores.\n  * President: High Court Judge.\n* **National Commission**:\n  * Jurisdiction: National level (Delhi).\n  * Claims: Above Rs. 10 Crores.\n  * President: Supreme Court Judge.\n\n### 4. Responsibilities\n* Ask for Cash Memo.\n* Check Standard Marks (ISI, Agmark, Hallmark).\n* File complaint.',
            flashcards: [
              { id: 'f1', front: 'Consumer Protection Act Year', back: '2019 (Old was 1986).' },
              { id: 'f2', front: 'Jago Grahak Jago', back: 'Consumer Awareness Campaign.' },
              { id: 'f3', front: 'District Commission claim limit?', back: 'Upto Rs. 1 Crore.' },
              { id: 'f4', front: 'State Commission claim limit?', back: 'Rs. 1 Crore to Rs. 10 Crores.' },
              { id: 'f5', front: 'National Commission claim limit?', back: 'Above Rs. 10 Crores.' },
              { id: 'f6', front: 'President of District Commission?', back: 'District Judge.' },
              { id: 'f7', front: 'President of State Commission?', back: 'High Court Judge.' },
              { id: 'f8', front: 'President of National Commission?', back: 'Supreme Court Judge.' },
              { id: 'f9', front: 'National Commission located at?', back: 'New Delhi.' },
              { id: 'f10', front: 'Caveat Emptor means?', back: 'Let the Buyer Beware (Old concept).' },
              { id: 'f11', front: 'Caveat Venditor means?', back: 'Let the Seller Beware (New concept).' },
              { id: 'f12', front: 'Right to Safety protects against?', back: 'Hazardous goods and services.' },
              { id: 'f13', front: 'Right to Information ensures?', back: 'Labels show ingredients, price, expiry date.' },
              { id: 'f14', front: 'Right to Choose ensures?', back: 'Access to variety of products at competitive prices.' },
              { id: 'f15', front: 'Right to be Heard allows?', back: 'Consumer can represent complaint in forum.' },
              { id: 'f16', front: 'Right to Redressal ensures?', back: 'Compensation for loss or damage.' },
              { id: 'f17', front: 'Right to Consumer Education?', back: 'Awareness about consumer rights and responsibilities.' },
              { id: 'f18', front: 'ISI mark for?', back: 'Industrial products (Electronics, appliances).' },
              { id: 'f19', front: 'Agmark for?', back: 'Agricultural products.' },
              { id: 'f20', front: 'Hallmark for?', back: 'Gold purity (BIS certified).' },
              { id: 'f21', front: 'FPO mark for?', back: 'Fruit products.' },
              { id: 'f22', front: 'Ecomark for?', back: 'Environment-friendly products.' },
              { id: 'f23', front: 'Consumer is called?', back: 'King of Market.' },
              { id: 'f24', front: 'Cash Memo importance?', back: 'Proof of purchase, required for filing complaint.' },
              { id: 'f25', front: 'Appeal period to higher forum?', back: '30 to 45 days from order.' },
              { id: 'f26', front: 'Lok Adalat means?', back: 'People\'s Court for speedy justice.' },
              { id: 'f27', front: 'PIL stands for?', back: 'Public Interest Litigation.' },
              { id: 'f28', front: 'NGO full form?', back: 'Non-Governmental Organization.' },
              { id: 'f29', front: 'CCPA stands for?', back: 'Central Consumer Protection Authority.' },
              { id: 'f30', front: 'Consumer Disputes Redressal Commission is?', back: 'Quasi-judicial body (acts like court but not formal court).' }
            ],
            mcqs: [
              { id: 'q1', question: 'Consumer Protection Act was passed in ______.', options: ['1986', '2019', '1947', '2000'], correctIndex: 1, explanation: 'Latest act is 2019.' },
              { id: 'q2', question: 'District Commission handles claims upto:', options: ['Rs. 50 Lakhs', 'Rs. 1 Crore', 'Rs. 10 Crores', 'Unlimited'], correctIndex: 1, explanation: 'Entry level forum.' },
              { id: 'q3', question: 'State Commission handles claims:', options: ['Upto 1 Cr', '1 Cr to 10 Cr', 'Above 10 Cr', 'Unlimited'], correctIndex: 1, explanation: 'Middle tier.' },
              { id: 'q4', question: 'National Commission handles claims:', options: ['Upto 1 Cr', '1 Cr to 10 Cr', 'Above 10 Cr', 'Below 50 Lakhs'], correctIndex: 2, explanation: 'Apex body.' },
              { id: 'q5', question: 'President of National Commission is:', options: ['District Judge', 'High Court Judge', 'Supreme Court Judge', 'Magistrate'], correctIndex: 2, explanation: 'Highest level.' },
              { id: 'q6', question: 'ISI mark is for:', options: ['Agricultural products', 'Industrial products', 'Gold', 'Fruits'], correctIndex: 1, explanation: 'Electronics, appliances.' },
              { id: 'q7', question: 'Agmark is for:', options: ['Industrial products', 'Agricultural products', 'Gold', 'Services'], correctIndex: 1, explanation: 'Farm products.' },
              { id: 'q8', question: 'Hallmark certifies:', options: ['Electronics', 'Food', 'Gold purity', 'Medicines'], correctIndex: 2, explanation: 'BIS hallmark.' },
              { id: 'q9', question: 'Caveat Emptor means:', options: ['Seller beware', 'Buyer beware', 'No one beware', 'Government beware'], correctIndex: 1, explanation: 'Old concept.' },
              { id: 'q10', question: 'Caveat Venditor means:', options: ['Buyer beware', 'Seller beware', 'Consumer beware', 'None'], correctIndex: 1, explanation: 'New consumer protection concept.' },
              { id: 'q11', question: 'Consumer is called:', options: ['King of Market', 'Slave of Market', 'Servant', 'None'], correctIndex: 0, explanation: 'Consumer sovereignty.' },
              { id: 'q12', question: 'Jago Grahak Jago is:', options: ['Song', 'Awareness campaign', 'Movie', 'Book'], correctIndex: 1, explanation: 'Consumer awareness.' },
              { id: 'q13', question: 'Cash Memo is:', options: ['Optional', 'Proof of purchase', 'Not important', 'None'], correctIndex: 1, explanation: 'Required for complaint.' },
              { id: 'q14', question: 'Right to Safety protects from:', options: ['High prices', 'Hazardous goods', 'Low quality', 'All'], correctIndex: 1, explanation: 'Dangerous products.' },
              { id: 'q15', question: 'Right to Information requires ______ on label.', options: ['Only price', 'Only name', 'Price, ingredients, expiry', 'Nothing'], correctIndex: 2, explanation: 'Full disclosure.' },
              { id: 'q16', question: 'COPRA 2019 replaced:', options: ['COPRA 1986', 'COPRA 2000', 'Nothing', 'MRTP Act'], correctIndex: 0, explanation: 'Updated legislation.' },
              { id: 'q17', question: 'National Commission is in:', options: ['Mumbai', 'Delhi', 'Chennai', 'Kolkata'], correctIndex: 1, explanation: 'Capital city.' },
              { id: 'q18', question: 'FPO mark is for:', options: ['Fruits', 'Vegetables', 'Both', 'None'], correctIndex: 0, explanation: 'Fruit Products Order.' },
              { id: 'q19', question: 'Ecomark is for ______ products.', options: ['Expensive', 'Environment-friendly', 'Imported', 'None'], correctIndex: 1, explanation: 'Green products.' },
              { id: 'q20', question: 'Consumer forums are:', options: ['Judicial', 'Quasi-judicial', 'Executive', 'None'], correctIndex: 1, explanation: 'Like courts but simpler.' },
              { id: 'q21', question: 'PIL is filed for:', options: ['Personal interest', 'Public interest', 'Political interest', 'None'], correctIndex: 1, explanation: 'Common good.' },
              { id: 'q22', question: 'Lok Adalat provides ______ justice.', options: ['Slow', 'Speedy', 'No', 'Expensive'], correctIndex: 1, explanation: 'Quick resolution.' },
              { id: 'q23', question: 'Appeal period is ______ days.', options: ['15', '30 to 45', '60', '90'], correctIndex: 1, explanation: 'Time limit for appeal.' },
              { id: 'q24', question: 'CCPA was established under:', options: ['COPRA 1986', 'COPRA 2019', 'Companies Act', 'None'], correctIndex: 1, explanation: 'New authority.' },
              { id: 'q25', question: 'Consumer can file complaint:', options: ['Only in court', 'In consumer forum', 'Nowhere', 'Only online'], correctIndex: 1, explanation: 'Dedicated forums.' },
              { id: 'q26', question: 'Right to Choose ensures:', options: ['Single option', 'Variety of products', 'No choice', 'None'], correctIndex: 1, explanation: 'Freedom to select.' },
              { id: 'q27', question: 'Right to be Heard allows consumer to:', options: ['Shout', 'Represent in forum', 'Fight', 'None'], correctIndex: 1, explanation: 'Voice concern.' },
              { id: 'q28', question: 'Consumer responsibilities include:', options: ['Ignoring quality', 'Checking standard marks', 'Accepting defects', 'None'], correctIndex: 1, explanation: 'Due diligence.' },
              { id: 'q29', question: 'NGO can file complaint on behalf of:', options: ['Companies', 'Consumers', 'Government', 'None'], correctIndex: 1, explanation: 'Consumer advocacy.' },
              { id: 'q30', question: 'BIS stands for:', options: ['Bureau of Indian Standards', 'Board of Indian Services', 'Both', 'None'], correctIndex: 0, explanation: 'Standardization body.' }
            ],
            reels: [
               { id: 'r1', title: 'King of Market', content: 'Consumer is King.\nBut often exploited.', color: getReelColor(5) },
               { id: 'r2', title: 'Caveat Emptor', content: 'Let the Buyer Beware.\n(Old concept).', color: getReelColor(6) },
               { id: 'r3', title: 'Caveat Venditor', content: 'Let the Seller Beware.\n(New concept - Consumer Protection).', color: getReelColor(7) },
               { id: 'r4', title: 'Right to Safety', content: 'Protection against hazardous goods (Pressure cooker burst).', color: getReelColor(8) },
               { id: 'r5', title: 'Right to Info', content: 'Details on label: Price, Ingredients, Expiry.', color: getReelColor(9) },
               { id: 'r6', title: 'Right to Choose', content: 'Freedom to select from variety of products.', color: getReelColor(0) },
               { id: 'r7', title: 'Right to be Heard', content: 'Right to represent complaint in consumer forum.', color: getReelColor(1) },
               { id: 'r8', title: 'Right to Redressal', content: 'Right to get compensation for loss.', color: getReelColor(2) },
               { id: 'r9', title: 'Right to Education', content: 'Right to know rights.\nJago Grahak Jago.', color: getReelColor(3) },
               { id: 'r10', title: 'District Commission', content: 'Claims Upto Rs. 1 Crore.', color: getReelColor(4) },
               { id: 'r11', title: 'State Commission', content: 'Claims Rs. 1 Crore to Rs. 10 Crores.', color: getReelColor(5) },
               { id: 'r12', title: 'National Commission', content: 'Claims Above Rs. 10 Crores.', color: getReelColor(6) },
               { id: 'r13', title: 'President: District', content: 'District Judge.', color: getReelColor(7) },
               { id: 'r14', title: 'President: State', content: 'High Court Judge.', color: getReelColor(8) },
               { id: 'r15', title: 'President: National', content: 'Supreme Court Judge.', color: getReelColor(9) },
               { id: 'r16', title: 'Appeal Period', content: 'Appeal to higher forum within 45 days (District to State) or 30 days.', color: getReelColor(0) },
               { id: 'r17', title: 'ISI Mark', content: 'Standard for Industrial products (Electronics).', color: getReelColor(1) },
               { id: 'r18', title: 'Agmark', content: 'Standard for Agricultural products.', color: getReelColor(2) },
               { id: 'r19', title: 'Hallmark', content: 'Standard for Gold purity.', color: getReelColor(3) },
               { id: 'r20', title: 'COPRA 2019', content: 'New Consumer Protection Act replaced 1986 Act.', color: getReelColor(4) },
               { id: 'r21', title: 'Lok Adalat', content: 'People\'s Court for speedy justice.', color: getReelColor(5) },
               { id: 'r22', title: 'PIL', content: 'Public Interest Litigation.\nFiled for general public good.', color: getReelColor(6) },
               { id: 'r23', title: 'NGO', content: 'Non-Govt Org.\nHelps consumers file cases.', color: getReelColor(7) },
               { id: 'r24', title: 'Cash Memo', content: 'Proof of purchase.\nMust for filing complaint.', color: getReelColor(8) },
               { id: 'r25', title: 'FPO Mark', content: 'For Fruit Products\nQuality assurance\nFood safety', color: getReelColor(9) },
               { id: 'r26', title: 'Ecomark', content: 'Environment-friendly\nGreen products\nSustainable', color: getReelColor(0) },
               { id: 'r27', title: 'CCPA', content: 'Central Consumer Protection Authority\nUnder COPRA 2019\nEnforces consumer rights', color: getReelColor(1) },
               { id: 'r28', title: 'BIS', content: 'Bureau of Indian Standards\nQuality certification\nISI mark issuer', color: getReelColor(2) },
               { id: 'r29', title: 'Quasi-Judicial', content: 'Consumer forums\nLike courts, simpler process\nFaster resolution', color: getReelColor(3) },
               { id: 'r30', title: '3-Tier System', content: 'District, State, National\nHierarchical structure\nAppeal mechanism', color: getReelColor(4) }
            ]
          },
          { 
            id: 'ocm8', 
            title: '8. Marketing', 
            description: 'Concepts, 4Ps, 7Ps, Functions.', 
            summary: 'Marketing Mix.\nProduct, Price, Place, Promotion.\n+ People, Process, Physical Evidence.', 
            detailedNotes: '### 1. Concept of Market\nDerived from Latin word "Marcatus".\n* **Place Concept**: Where buyers and sellers meet.\n* **Commodity Concept**: Dealing in goods (Cotton market).\n* **Exchange Concept**: Transaction.\n* **Area Concept**: Area where price is determined.\n* **Digital Concept**: E-market.\n\n### 2. Marketing Definition\n"Marketing is a social process by which individuals and groups obtain what they need..." - Philip Kotler.\n\n### 3. Marketing Mix (4Ps)\nGiven by E. Jerome McCarthy.\n1. **Product**: Goods/Services (Quality, Design, Brand).\n2. **Price**: Monetary value (Discounts, Credit terms).\n3. **Place**: Distribution (Channels, Transport, Inventory).\n4. **Promotion**: Communication (Advertising, Sales promotion).\n\n### 4. Extended 3Ps (For Services)\n5. **People**: Employees (Staff behavior).\n6. **Process**: Delivery mechanism (Steps).\n7. **Physical Evidence**: Ambience, Uniforms, Decor.\n\n### 5. Functions of Marketing\n* Marketing Research\n* Branding\n* Labelling & Packaging\n* Standardization & Grading\n* Promotion\n* Transport & Warehousing.',
            flashcards: [
              { id: 'f1', front: '4Ps given by', back: 'E. Jerome McCarthy.' },
              { id: 'f2', front: 'Marketing Mix', back: 'Combination of variables to satisfy market.' },
              { id: 'f3', front: '4Ps are?', back: 'Product, Price, Place, Promotion.' },
              { id: 'f4', front: '7Ps include (additional 3)?', back: 'People, Process, Physical Evidence.' },
              { id: 'f5', front: 'Market derived from?', back: 'Latin word "Marcatus" meaning to trade.' },
              { id: 'f6', front: 'Father of Modern Marketing?', back: 'Philip Kotler.' },
              { id: 'f7', front: 'Only P that brings money in?', back: 'Price (others are costs).' },
              { id: 'f8', front: 'Marketing vs Selling?', back: 'Marketing = Customer satisfaction; Selling = Just sales.' },
              { id: 'f9', front: 'Packaging is called?', back: 'Silent Salesman.' },
              { id: 'f10', front: 'Branding purpose?', back: 'Creates unique identity (Name, Logo, Slogan).' },
              { id: 'f11', front: 'Labelling purpose?', back: 'Provides product information.' },
              { id: 'f12', front: 'Standardization means?', back: 'Maintaining uniform quality.' },
              { id: 'f13', front: 'Grading means?', back: 'Sorting products by quality/size.' },
              { id: 'f14', front: 'Advertising is?', back: 'Paid, non-personal communication.' },
              { id: 'f15', front: 'Personal Selling is?', back: 'Face-to-face selling.' },
              { id: 'f16', front: 'Publicity is?', back: 'Free/unpaid news coverage.' },
              { id: 'f17', front: 'Sales Promotion examples?', back: 'Discounts, Samples, Coupons, Buy 1 Get 1.' },
              { id: 'f18', front: 'Distribution Channel?', back: 'Path from producer to consumer.' },
              { id: 'f19', front: 'Wholesaler function?', back: 'Buys in bulk, sells to retailers.' },
              { id: 'f20', front: 'Retailer function?', back: 'Sells directly to final consumers.' },
              { id: 'f21', front: 'Skimming Pricing?', back: 'High initial price for new tech products.' },
              { id: 'f22', front: 'Penetration Pricing?', back: 'Low initial price to capture market.' },
              { id: 'f23', front: 'Product Life Cycle stages?', back: 'Introduction, Growth, Maturity, Decline.' },
              { id: 'f24', front: 'Market Segmentation?', back: 'Dividing market into groups (Geographic, Demographic).' },
              { id: 'f25', front: 'Target Market?', back: 'Specific segment the company focuses on.' },
              { id: 'f26', front: 'Positioning?', back: 'Creating distinct image in consumer\'s mind.' },
              { id: 'f27', front: 'USP stands for?', back: 'Unique Selling Proposition.' },
              { id: 'f28', front: 'Brand Equity means?', back: 'Value that brand adds to product.' },
              { id: 'f29', front: 'AIDA Model?', back: 'Attention, Interest, Desire, Action.' },
              { id: 'f30', front: 'Consumer Behaviour study?', back: 'Why and how consumers buy products.' }
            ],
            mcqs: [
              { id: 'q1', question: '4Ps of marketing are Product, Price, Place and ______.', options: ['Process', 'Promotion', 'People', 'Plan'], correctIndex: 1, explanation: 'The communication aspect.' },
              { id: 'q2', question: '4Ps were given by:', options: ['Philip Kotler', 'E. Jerome McCarthy', 'Peter Drucker', 'Fayol'], correctIndex: 1, explanation: 'Marketing mix concept.' },
              { id: 'q3', question: 'Father of Modern Marketing is:', options: ['McCarthy', 'Philip Kotler', 'Taylor', 'Drucker'], correctIndex: 1, explanation: 'Wrote on marketing principles.' },
              { id: 'q4', question: 'Only P that generates revenue is:', options: ['Product', 'Place', 'Price', 'Promotion'], correctIndex: 2, explanation: 'Others are costs.' },
              { id: 'q5', question: 'Packaging is called:', options: ['Loud Salesman', 'Silent Salesman', 'Active Salesman', 'None'], correctIndex: 1, explanation: 'Sells without speaking.' },
              { id: 'q6', question: 'Market is derived from Latin word:', options: ['Marcat', 'Marcatus', 'Market', 'Mercato'], correctIndex: 1, explanation: 'Meaning trade.' },
              { id: 'q7', question: '7Ps include additional ______ Ps.', options: ['2', '3', '4', '5'], correctIndex: 1, explanation: 'People, Process, Physical Evidence.' },
              { id: 'q8', question: 'Advertising is ______ communication.', options: ['Personal', 'Non-personal', 'Direct', 'None'], correctIndex: 1, explanation: 'Mass communication.' },
              { id: 'q9', question: 'Personal Selling is ______ selling.', options: ['Indirect', 'Face-to-face', 'Online', 'Mass'], correctIndex: 1, explanation: 'Direct interaction.' },
              { id: 'q10', question: 'Publicity is ______ coverage.', options: ['Paid', 'Unpaid', 'Expensive', 'None'], correctIndex: 1, explanation: 'News coverage.' },
              { id: 'q11', question: 'Buy 1 Get 1 is example of:', options: ['Advertising', 'Publicity', 'Sales Promotion', 'Personal Selling'], correctIndex: 2, explanation: 'Short-term incentive.' },
              { id: 'q12', question: 'Wholesaler sells to:', options: ['Consumers', 'Retailers', 'Producers', 'Government'], correctIndex: 1, explanation: 'Bulk to retail.' },
              { id: 'q13', question: 'Retailer sells to:', options: ['Wholesaler', 'Final consumers', 'Producers', 'Agents'], correctIndex: 1, explanation: 'End users.' },
              { id: 'q14', question: 'Skimming pricing is ______ price initially.', options: ['Low', 'High', 'Medium', 'Zero'], correctIndex: 1, explanation: 'For new tech.' },
              { id: 'q15', question: 'Penetration pricing is ______ price initially.', options: ['Low', 'High', 'Medium', 'Variable'], correctIndex: 0, explanation: 'To capture market.' },
              { id: 'q16', question: 'Product Life Cycle starts with:', options: ['Growth', 'Maturity', 'Introduction', 'Decline'], correctIndex: 2, explanation: 'Launch phase.' },
              { id: 'q17', question: 'Product Life Cycle ends with:', options: ['Growth', 'Maturity', 'Introduction', 'Decline'], correctIndex: 3, explanation: 'Phase out.' },
              { id: 'q18', question: 'Market Segmentation divides market by:', options: ['Time', 'Groups', 'Price', 'None'], correctIndex: 1, explanation: 'Customer segments.' },
              { id: 'q19', question: 'USP stands for:', options: ['Universal Selling Price', 'Unique Selling Proposition', 'Unit Sales Point', 'None'], correctIndex: 1, explanation: 'What makes product special.' },
              { id: 'q20', question: 'Brand Equity is brand\'s:', options: ['Cost', 'Value', 'Age', 'None'], correctIndex: 1, explanation: 'Added value.' },
              { id: 'q21', question: 'AIDA Model: A stands for:', options: ['Action', 'Attention', 'Attitude', 'Approach'], correctIndex: 1, explanation: 'First step.' },
              { id: 'q22', question: 'AIDA Model: Last A stands for:', options: ['Attention', 'Action', 'Attitude', 'Approach'], correctIndex: 1, explanation: 'Final purchase.' },
              { id: 'q23', question: 'Standardization ensures:', options: ['Variable quality', 'Uniform quality', 'No quality', 'None'], correctIndex: 1, explanation: 'Consistency.' },
              { id: 'q24', question: 'Grading is for ______ products.', options: ['Industrial', 'Agricultural', 'Services', 'None'], correctIndex: 1, explanation: 'Sorting by quality.' },
              { id: 'q25', question: 'Branding creates:', options: ['Confusion', 'Unique identity', 'Similarity', 'None'], correctIndex: 1, explanation: 'Name, logo, slogan.' },
              { id: 'q26', question: 'Labelling provides:', options: ['No information', 'Product information', 'Wrong info', 'None'], correctIndex: 1, explanation: 'Details on label.' },
              { id: 'q27', question: 'Physical Evidence is for:', options: ['Products only', 'Services', 'None', 'Manufacturing'], correctIndex: 1, explanation: 'Tangible elements.' },
              { id: 'q28', question: 'People P refers to:', options: ['Customers', 'Employees', 'Both', 'None'], correctIndex: 2, explanation: 'Human element.' },
              { id: 'q29', question: 'Process P refers to:', options: ['Production', 'Service delivery', 'Selling', 'None'], correctIndex: 1, explanation: 'How service is delivered.' },
              { id: 'q30', question: 'Marketing Research is ______ function.', options: ['Last', 'First', 'Middle', 'Optional'], correctIndex: 1, explanation: 'Understanding market.' }
            ],
            reels: [
               { id: 'r1', title: '4Ps', content: 'Product, Price, Place, Promotion.\nGiven by McCarthy.', color: getReelColor(7) },
               { id: 'r2', title: 'Price', content: 'Only P that brings Money in.\nOthers take money out.', color: getReelColor(8) },
               { id: 'r3', title: 'Product', content: 'Goods or Services.\nMust satisfy consumer need.', color: getReelColor(9) },
               { id: 'r4', title: 'Place', content: 'Distribution.\nFactory -> Wholesaler -> Retailer -> You.', color: getReelColor(0) },
               { id: 'r5', title: 'Promotion', content: 'Communication.\nAds, Discounts, Salesmen.', color: getReelColor(1) },
               { id: 'r6', title: '3Ps', content: 'Extended Ps for Services.\nPeople, Process, Physical Evidence.', color: getReelColor(2) },
               { id: 'r7', title: 'Market', content: 'Derived from Latin "Marcatus" meaning to trade.', color: getReelColor(3) },
               { id: 'r8', title: 'Philip Kotler', content: 'Father of Modern Marketing.', color: getReelColor(4) },
               { id: 'r9', title: 'Marketing vs Selling', content: 'Selling = Cash.\nMarketing = Customer Satisfaction.', color: getReelColor(5) },
               { id: 'r10', title: 'Branding', content: 'Creating a unique identity (Name, Logo).', color: getReelColor(6) },
               { id: 'r11', title: 'Packaging', content: 'Silent Salesman.\nProtects and Attracts.', color: getReelColor(7) },
               { id: 'r12', title: 'Labelling', content: 'Information tag on package (Ingredients, Price).', color: getReelColor(8) },
               { id: 'r13', title: 'Standardization', content: 'Maintaining uniform quality.', color: getReelColor(9) },
               { id: 'r14', title: 'Grading', content: 'Sorting products based on size/quality (Agri products).', color: getReelColor(0) },
               { id: 'r15', title: 'Marketing Research', content: 'First step.\nUnderstanding consumer needs.', color: getReelColor(1) },
               { id: 'r16', title: 'Physical Evidence', content: 'Ambience in a hotel/restaurant.', color: getReelColor(2) },
               { id: 'r17', title: 'People', content: 'Staff behavior is crucial in services.', color: getReelColor(3) },
               { id: 'r18', title: 'Process', content: 'Steps in delivering service (Ordering food).', color: getReelColor(4) },
               { id: 'r19', title: 'Advertising', content: 'Paid form of non-personal communication.', color: getReelColor(5) },
               { id: 'r20', title: 'Personal Selling', content: 'Face-to-face interaction.', color: getReelColor(6) },
               { id: 'r21', title: 'Publicity', content: 'Non-paid news coverage.', color: getReelColor(7) },
               { id: 'r22', title: 'Sales Promotion', content: 'Short term incentives (Buy 1 Get 1).', color: getReelColor(8) },
               { id: 'r23', title: 'Skimming', content: 'High price initially for new tech products.', color: getReelColor(9) },
               { id: 'r24', title: 'Penetration', content: 'Low price initially to capture market.', color: getReelColor(0) },
               { id: 'r25', title: 'PLC', content: 'Product Life Cycle\nIntroduction → Growth\n→ Maturity → Decline', color: getReelColor(1) },
               { id: 'r26', title: 'Segmentation', content: 'Dividing market into groups\nGeographic, Demographic\nPsychographic, Behavioral', color: getReelColor(2) },
               { id: 'r27', title: 'Positioning', content: 'Creating distinct image\nIn consumer\'s mind\nVs competitors', color: getReelColor(3) },
               { id: 'r28', title: 'USP', content: 'Unique Selling Proposition\nWhat makes you special\nCompetitive advantage', color: getReelColor(4) },
               { id: 'r29', title: 'AIDA', content: 'Attention → Interest\n→ Desire → Action\nBuyer journey', color: getReelColor(5) },
               { id: 'r30', title: 'Brand Equity', content: 'Value brand adds\nCustomer loyalty\nPremium pricing', color: getReelColor(6) }
            ],
            longAnswers: ocm_ch8_long_answers
          }
        ]
      },
      ENGLISH_SUBJECT,
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
            title: '1. Introduction to Corporate Finance', 
            description: 'Financing and Investment decisions.', 
            summary: '**Corporate Finance**: Raising and using funds.\n**Decisions**: Financing, Investment, Dividend.\n**Capital**: Fixed (Long-term) vs Working (Short-term).', 
            detailedNotes: '### 1. Meaning of Corporate Finance\nDealing with raising and using of finance by a corporation. It involves managing the financial activities and decisions.\n\n### 2. Financial Decisions\n1. **Financing Decision**: Should we use Equity or Debt?\n2. **Investment Decision**: Which assets to acquire?\n3. **Dividend Decision**: How much profit to distribute?\n\n### 3. Types of Capital\n**Fixed Capital (Block Capital)**:\n* Long-term assets.\n* Land, Building, Machinery, Furniture.\n* Stay in business for long period.\n\n**Working Capital (Circulating Capital)**:\n* Short-term assets.\n* Cash, Inventory, Receivables.\n* Circulates in business operations.\n\n### 4. Sources of Finance\n* **Owned Capital**: Equity shares, Retained earnings.\n* **Borrowed Capital**: Debentures, Loans, Bonds.\n\n### 5. Importance of Corporate Finance\n* Ensures smooth functioning.\n* Helps in expansion and modernization.\n* Maintains liquidity and solvency.',
            flashcards: [
              { id: 'f1', front: 'Corporate Finance deals with?', back: 'Acquisition and Use of Capital by corporations.' },
              { id: 'f2', front: 'Fixed Capital is also called?', back: 'Block Capital (Long-term assets).' },
              { id: 'f3', front: 'Working Capital is also called?', back: 'Circulating Capital (Short-term assets).' },
              { id: 'f4', front: 'Three main financial decisions?', back: 'Financing, Investment, and Dividend decisions.' },
              { id: 'f5', front: 'Financing Decision involves?', back: 'Deciding the source of funds (Equity vs Debt).' },
              { id: 'f6', front: 'Investment Decision involves?', back: 'Deciding which assets to acquire.' },
              { id: 'f7', front: 'Dividend Decision involves?', back: 'Deciding how much profit to distribute to shareholders.' },
              { id: 'f8', front: 'Examples of Fixed Capital?', back: 'Land, Building, Machinery, Furniture, Vehicles.' },
              { id: 'f9', front: 'Examples of Working Capital?', back: 'Cash, Inventory, Debtors, Receivables.' },
              { id: 'f10', front: 'Owned Capital includes?', back: 'Equity Shares, Preference Shares, Retained Earnings.' },
              { id: 'f11', front: 'Borrowed Capital includes?', back: 'Debentures, Loans, Bonds, Public Deposits.' },
              { id: 'f12', front: 'Why is Corporate Finance important?', back: 'Ensures smooth functioning, expansion, and liquidity.' },
              { id: 'f13', front: 'Capital Structure means?', back: 'Mix of debt and equity used to finance a company.' },
              { id: 'f14', front: 'Financial Management objective?', back: 'Maximizing shareholder wealth.' },
              { id: 'f15', front: 'Liquidity means?', back: 'Ability to meet short-term obligations.' },
              { id: 'f16', front: 'Solvency means?', back: 'Ability to meet long-term obligations.' },
              { id: 'f17', front: 'Capital Budgeting is related to?', back: 'Investment Decision (Long-term asset acquisition).' },
              { id: 'f18', front: 'Working Capital Management deals with?', back: 'Managing current assets and current liabilities.' },
              { id: 'f19', front: 'Cost of Capital is?', back: 'Rate of return required by investors.' },
              { id: 'f20', front: 'Financial Leverage means?', back: 'Use of debt to increase returns on equity.' },
              { id: 'f21', front: 'Gross Working Capital is?', back: 'Total current assets of the company.' },
              { id: 'f22', front: 'Net Working Capital is?', back: 'Current Assets minus Current Liabilities.' },
              { id: 'f23', front: 'Permanent Working Capital is?', back: 'Minimum level of current assets always required.' },
              { id: 'f24', front: 'Temporary Working Capital is?', back: 'Fluctuating part of working capital.' },
              { id: 'f25', front: 'Finance function includes?', back: 'Procurement, Utilization, and Control of funds.' },
              { id: 'f26', front: 'Capital Gearing refers to?', back: 'Ratio of debt to equity in capital structure.' },
              { id: 'f27', front: 'Under-capitalization means?', back: 'Actual capital is less than required capital.' },
              { id: 'f28', front: 'Over-capitalization means?', back: 'Actual capital is more than required capital.' },
              { id: 'f29', front: 'Fair capitalization means?', back: 'Actual capital equals required capital.' },
              { id: 'f30', front: 'Time Value of Money concept states?', back: 'Money today is worth more than same amount in future.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Fixed capital is also known as ______ capital.', options: ['Circulating', 'Block', 'Working', 'Liquid'], correctIndex: 1, explanation: 'Permanent assets that stay long in business.' },
              { id: 'q2', question: 'Working capital is required for ______ needs.', options: ['Long-term', 'Short-term', 'Permanent', 'Fixed'], correctIndex: 1, explanation: 'Day-to-day operations.' },
              { id: 'q3', question: 'Land and Building are examples of ______ capital.', options: ['Working', 'Circulating', 'Fixed', 'Liquid'], correctIndex: 2, explanation: 'They stay in business for long.' },
              { id: 'q4', question: 'Corporate Finance deals with ______.', options: ['Human resources', 'Raising and using funds', 'Marketing', 'Production'], correctIndex: 1, explanation: 'Finance involves funds management.' },
              { id: 'q5', question: 'Financing Decision involves choosing between ______.', options: ['Cash and Credit', 'Equity and Debt', 'Import and Export', 'Buy and Sell'], correctIndex: 1, explanation: 'Source of funds decision.' },
              { id: 'q6', question: 'Investment Decision is also called ______.', options: ['Dividend Decision', 'Capital Budgeting', 'Financing Decision', 'Working Capital Decision'], correctIndex: 1, explanation: 'Long-term asset investment.' },
              { id: 'q7', question: 'Dividend Decision relates to ______.', options: ['Borrowing funds', 'Buying assets', 'Distributing profits', 'Selling goods'], correctIndex: 2, explanation: 'How much profit to distribute.' },
              { id: 'q8', question: 'Cash and Inventory are examples of ______ capital.', options: ['Fixed', 'Block', 'Working', 'Permanent'], correctIndex: 2, explanation: 'Short-term circulating assets.' },
              { id: 'q9', question: 'Equity shares represent ______ capital.', options: ['Borrowed', 'Owned', 'Fixed', 'Working'], correctIndex: 1, explanation: 'Shareholders own the company.' },
              { id: 'q10', question: 'Debentures represent ______ capital.', options: ['Owned', 'Equity', 'Borrowed', 'Share'], correctIndex: 2, explanation: 'Debt financing from public.' },
              { id: 'q11', question: 'Main objective of financial management is ______.', options: ['Profit maximization', 'Wealth maximization', 'Cost minimization', 'Sales maximization'], correctIndex: 1, explanation: 'Shareholder wealth maximization.' },
              { id: 'q12', question: 'Liquidity means ability to meet ______ obligations.', options: ['Long-term', 'Short-term', 'Future', 'Past'], correctIndex: 1, explanation: 'Day-to-day payment ability.' },
              { id: 'q13', question: 'Solvency means ability to meet ______ obligations.', options: ['Short-term', 'Long-term', 'Daily', 'Weekly'], correctIndex: 1, explanation: 'Long-term debt payment ability.' },
              { id: 'q14', question: 'Net Working Capital = Current Assets - ______.', options: ['Fixed Assets', 'Current Liabilities', 'Long-term Liabilities', 'Capital'], correctIndex: 1, explanation: 'NWC formula.' },
              { id: 'q15', question: 'Gross Working Capital equals total ______.', options: ['Liabilities', 'Assets', 'Current Assets', 'Fixed Assets'], correctIndex: 2, explanation: 'All current assets.' },
              { id: 'q16', question: 'Permanent Working Capital is also called ______ Working Capital.', options: ['Variable', 'Fixed', 'Temporary', 'Fluctuating'], correctIndex: 1, explanation: 'Always needed minimum level.' },
              { id: 'q17', question: 'Financial Leverage uses ______ to increase returns.', options: ['Equity', 'Debt', 'Cash', 'Inventory'], correctIndex: 1, explanation: 'Borrowed funds increase ROE.' },
              { id: 'q18', question: 'Cost of Capital is the ______ required by investors.', options: ['Dividend', 'Rate of return', 'Principal', 'Interest'], correctIndex: 1, explanation: 'Expected return on investment.' },
              { id: 'q19', question: 'Capital Structure refers to mix of ______.', options: ['Assets and Liabilities', 'Debt and Equity', 'Income and Expenses', 'Cash and Credit'], correctIndex: 1, explanation: 'Proportion of debt vs equity.' },
              { id: 'q20', question: 'Over-capitalization means capital is ______ than required.', options: ['Less', 'Equal', 'More', 'Zero'], correctIndex: 2, explanation: 'Excess capital employed.' },
              { id: 'q21', question: 'Under-capitalization means capital is ______ than required.', options: ['More', 'Equal', 'Less', 'Double'], correctIndex: 2, explanation: 'Insufficient capital.' },
              { id: 'q22', question: 'Fair capitalization means actual capital ______ required capital.', options: ['Exceeds', 'Is less than', 'Equals', 'Doubles'], correctIndex: 2, explanation: 'Optimal capital level.' },
              { id: 'q23', question: 'Time Value of Money states that money today is worth ______ than future.', options: ['Less', 'More', 'Same', 'Nothing'], correctIndex: 1, explanation: 'Present value concept.' },
              { id: 'q24', question: 'Finance function involves procurement, utilization and ______ of funds.', options: ['Donation', 'Control', 'Destruction', 'Hiding'], correctIndex: 1, explanation: 'Managing funds properly.' },
              { id: 'q25', question: 'Capital Gearing refers to ratio of ______.', options: ['Assets to Liabilities', 'Debt to Equity', 'Income to Expenses', 'Sales to Purchases'], correctIndex: 1, explanation: 'Leverage ratio.' },
              { id: 'q26', question: 'Retained Earnings are part of ______ capital.', options: ['Borrowed', 'Owned', 'Fixed', 'External'], correctIndex: 1, explanation: 'Internal source of funds.' },
              { id: 'q27', question: 'Public Deposits are part of ______ capital.', options: ['Owned', 'Equity', 'Borrowed', 'Share'], correctIndex: 2, explanation: 'Borrowed from public.' },
              { id: 'q28', question: 'Machinery and Vehicles are part of ______ capital.', options: ['Working', 'Circulating', 'Fixed', 'Temporary'], correctIndex: 2, explanation: 'Long-term assets.' },
              { id: 'q29', question: 'Debtors and Stock are part of ______ capital.', options: ['Fixed', 'Block', 'Working', 'Permanent Fixed'], correctIndex: 2, explanation: 'Current assets.' },
              { id: 'q30', question: 'Corporate Finance is also called ______ Finance.', options: ['Personal', 'Business', 'Government', 'International'], correctIndex: 1, explanation: 'Finance of business organizations.' }
            ],
            reels: [
               { id: 'r1', title: 'Corporate Finance', content: 'Raising and using funds.\nLifeblood of business.', color: getReelColor(0) },
               { id: 'r2', title: 'Fixed Capital', content: 'Long-term assets.\nLand, Building, Machinery.', color: getReelColor(1) },
               { id: 'r3', title: 'Working Capital', content: 'Short-term assets.\nCash, Stock, Debtors.', color: getReelColor(2) },
               { id: 'r4', title: '3 Decisions', content: 'Financing (Where to get money?)\nInvestment (Where to use?)\nDividend (How much to distribute?)', color: getReelColor(3) },
               { id: 'r5', title: 'Owned vs Borrowed', content: 'Owned: Equity, Profits.\nBorrowed: Loans, Debentures.', color: getReelColor(4) },
               { id: 'r6', title: 'Financing Decision', content: 'Equity or Debt?\nCapital Structure choice.', color: getReelColor(5) },
               { id: 'r7', title: 'Investment Decision', content: 'Which assets to buy?\nCapital Budgeting.', color: getReelColor(6) },
               { id: 'r8', title: 'Dividend Decision', content: 'Distribute or Retain?\nProfit distribution.', color: getReelColor(7) },
               { id: 'r9', title: 'Block Capital', content: 'Another name for Fixed Capital.\nPermanent assets.', color: getReelColor(8) },
               { id: 'r10', title: 'Circulating Capital', content: 'Another name for Working Capital.\nKeeps rotating.', color: getReelColor(9) },
               { id: 'r11', title: 'Equity Shares', content: 'Ownership capital.\nVoting rights.\nVariable dividend.', color: getReelColor(0) },
               { id: 'r12', title: 'Debentures', content: 'Borrowed capital.\nFixed interest.\nCreditors.', color: getReelColor(1) },
               { id: 'r13', title: 'Retained Earnings', content: 'Ploughed back profits.\nInternal source.\nNo cost.', color: getReelColor(2) },
               { id: 'r14', title: 'Liquidity', content: 'Meet short-term obligations.\nCash availability.', color: getReelColor(3) },
               { id: 'r15', title: 'Solvency', content: 'Meet long-term obligations.\nDebt paying ability.', color: getReelColor(4) },
               { id: 'r16', title: 'Gross Working Capital', content: 'Total Current Assets.\nWithout deducting liabilities.', color: getReelColor(5) },
               { id: 'r17', title: 'Net Working Capital', content: 'Current Assets - Current Liabilities.\nExcess of CA over CL.', color: getReelColor(6) },
               { id: 'r18', title: 'Permanent WC', content: 'Minimum always needed.\nCore working capital.', color: getReelColor(7) },
               { id: 'r19', title: 'Temporary WC', content: 'Fluctuating part.\nSeasonal needs.', color: getReelColor(8) },
               { id: 'r20', title: 'Capital Structure', content: 'Mix of Debt + Equity.\nOptimal balance needed.', color: getReelColor(9) },
               { id: 'r21', title: 'Financial Leverage', content: 'Using debt for returns.\nMagnifies gains & losses.', color: getReelColor(0) },
               { id: 'r22', title: 'Cost of Capital', content: 'Return required by investors.\nHurdle rate.', color: getReelColor(1) },
               { id: 'r23', title: 'Capital Gearing', content: 'Debt to Equity ratio.\nHigh = More debt.', color: getReelColor(2) },
               { id: 'r24', title: 'Over-Capitalization', content: 'More capital than needed.\nLow earnings rate.', color: getReelColor(3) },
               { id: 'r25', title: 'Under-Capitalization', content: 'Less capital than needed.\nHigh earnings rate.', color: getReelColor(4) },
               { id: 'r26', title: 'Fair Capitalization', content: 'Actual = Required.\nOptimal capital.', color: getReelColor(5) },
               { id: 'r27', title: 'Time Value of Money', content: 'Rs today > Rs tomorrow.\nPresent Value concept.', color: getReelColor(6) },
               { id: 'r28', title: 'Finance Function', content: 'Procurement.\nUtilization.\nControl of funds.', color: getReelColor(7) },
               { id: 'r29', title: 'Wealth Maximization', content: 'Main objective.\nIncrease shareholder value.', color: getReelColor(8) },
               { id: 'r30', title: 'Capital Budgeting', content: 'Long-term investment decisions.\nProject evaluation.', color: getReelColor(9) }
            ]
          },
          { 
            id: 'sp2', 
            title: '2. Sources of Corporate Finance', 
            description: 'Equity, Preference, Debentures, Retained Earnings.', 
            summary: '**Equity Shares**: Ownership, Risk.\n**Preference Shares**: Fixed dividend, Priority.\n**Debentures**: Loan, Interest.\n**Retained Earnings**: Ploughing back profits.', 
            detailedNotes: '### 1. Equity Shares\n**Meaning**: Ownership capital. Shareholders are owners.\n**Features**:\n* Voting rights.\n* No fixed dividend.\n* Risk bearing capital.\n* Permanent capital.\n\n### 2. Preference Shares\n**Meaning**: Priority in dividend and repayment.\n**Types**:\n* Cumulative / Non-cumulative.\n* Participating / Non-participating.\n* Convertible / Non-convertible.\n* Redeemable / Irredeemable.\n\n### 3. Debentures\n**Meaning**: Borrowed capital. Loan taken from public.\n**Features**:\n* Fixed rate of interest.\n* No voting rights.\n* Priority in repayment.\n* Can be secured or unsecured.\n\n### 4. Retained Earnings (Ploughing Back)\n**Meaning**: Profits kept in business instead of distributing.\n**Advantages**: No cost, No dilution of control.\n\n### 5. Other Sources\n* Public Deposits.\n* Term Loans from Banks.\n* Commercial Paper.\n* Inter-corporate Deposits.',
            flashcards: [
              { id: 'f1', front: 'Equity shareholders are?', back: 'Real owners of the company with voting rights.' },
              { id: 'f2', front: 'Preference shares have?', back: 'Fixed dividend and priority in repayment.' },
              { id: 'f3', front: 'Debenture holders are?', back: 'Creditors of the company (Lenders).' },
              { id: 'f4', front: 'Retained Earnings means?', back: 'Ploughing back profits into business.' },
              { id: 'f5', front: 'Cumulative Preference Shares?', back: 'Unpaid dividends accumulate and must be paid later.' },
              { id: 'f6', front: 'Non-Cumulative Preference Shares?', back: 'Unpaid dividends lapse if not declared.' },
              { id: 'f7', front: 'Participating Preference Shares?', back: 'Share in surplus profits after equity dividend.' },
              { id: 'f8', front: 'Convertible Preference Shares?', back: 'Can be converted into equity shares.' },
              { id: 'f9', front: 'Redeemable Preference Shares?', back: 'Can be repaid after specified period.' },
              { id: 'f10', front: 'Irredeemable Preference Shares?', back: 'Cannot be redeemed during company lifetime.' },
              { id: 'f11', front: 'Secured Debentures?', back: 'Backed by company assets as security.' },
              { id: 'f12', front: 'Unsecured Debentures?', back: 'No asset backing - Also called Naked Debentures.' },
              { id: 'f13', front: 'Convertible Debentures?', back: 'Can be converted into equity shares.' },
              { id: 'f14', front: 'Zero Coupon Bonds?', back: 'No periodic interest - Issued at discount.' },
              { id: 'f15', front: 'Term Loans are obtained from?', back: 'Banks and Financial Institutions.' },
              { id: 'f16', front: 'Commercial Paper is?', back: 'Short-term unsecured promissory note.' },
              { id: 'f17', front: 'Public Deposits are?', back: 'Short-term borrowings from public (6 months to 3 years).' },
              { id: 'f18', front: 'Inter-Corporate Deposits?', back: 'Deposits between companies.' },
              { id: 'f19', front: 'Venture Capital is for?', back: 'High-risk new business ventures.' },
              { id: 'f20', front: 'Angel Investors provide?', back: 'Early-stage funding to startups.' },
              { id: 'f21', front: 'Trade Credit is?', back: 'Credit from suppliers for purchases.' },
              { id: 'f22', front: 'Factoring means?', back: 'Selling receivables to get immediate cash.' },
              { id: 'f23', front: 'Lease Financing means?', back: 'Using assets without ownership.' },
              { id: 'f24', front: 'Equity share capital is called?', back: 'Risk Capital or Venture Capital.' },
              { id: 'f25', front: 'Preference dividend rate is?', back: 'Fixed rate decided at time of issue.' },
              { id: 'f26', front: 'Debenture interest is paid?', back: 'Irrespective of profits (Fixed obligation).' },
              { id: 'f27', front: 'Bonus Issue is from?', back: 'Free Reserves or Share Premium.' },
              { id: 'f28', front: 'Rights Issue gives?', back: 'Pre-emptive right to existing shareholders.' },
              { id: 'f29', front: 'GDR stands for?', back: 'Global Depository Receipts.' },
              { id: 'f30', front: 'ADR stands for?', back: 'American Depository Receipts.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Equity shareholders have ______ rights.', options: ['Voting', 'Fixed dividend', 'Priority', 'Interest'], correctIndex: 0, explanation: 'They elect directors.' },
              { id: 'q2', question: 'Debenture holders receive ______.', options: ['Dividend', 'Interest', 'Bonus', 'Profit'], correctIndex: 1, explanation: 'Fixed rate of interest.' },
              { id: 'q3', question: 'Ploughing back of profits is ______.', options: ['Dividend', 'Retained Earnings', 'Bonus', 'Split'], correctIndex: 1, explanation: 'Keeping profits in business.' },
              { id: 'q4', question: 'Preference shares have ______ dividend.', options: ['Variable', 'Fixed', 'No', 'Residual'], correctIndex: 1, explanation: 'Fixed rate of dividend.' },
              { id: 'q5', question: 'Cumulative preference shares accumulate ______.', options: ['Interest', 'Unpaid dividends', 'Bonus', 'Premium'], correctIndex: 1, explanation: 'Arrears of dividend.' },
              { id: 'q6', question: 'Participating preference shares share in ______.', options: ['Loss', 'Surplus profits', 'Voting', 'Management'], correctIndex: 1, explanation: 'Extra profits after equity dividend.' },
              { id: 'q7', question: 'Convertible debentures can become ______.', options: ['Bonds', 'Equity Shares', 'Deposits', 'Loans'], correctIndex: 1, explanation: 'Conversion to ownership.' },
              { id: 'q8', question: 'Secured debentures are backed by ______.', options: ['Promises', 'Assets', 'Directors', 'Government'], correctIndex: 1, explanation: 'Charge on company assets.' },
              { id: 'q9', question: 'Naked debentures are also called ______.', options: ['Secured', 'Unsecured', 'Convertible', 'Registered'], correctIndex: 1, explanation: 'No asset backing.' },
              { id: 'q10', question: 'Debenture interest is paid even if there is ______.', options: ['Profit', 'Loss', 'Dividend', 'Bonus'], correctIndex: 1, explanation: 'Fixed obligation.' },
              { id: 'q11', question: 'Retained earnings have ______ cost.', options: ['High', 'Low', 'Zero explicit', 'Fixed'], correctIndex: 2, explanation: 'No direct cost to company.' },
              { id: 'q12', question: 'Commercial Paper is a ______ term instrument.', options: ['Long', 'Medium', 'Short', 'Permanent'], correctIndex: 2, explanation: 'Usually 15-365 days.' },
              { id: 'q13', question: 'Public Deposits maximum period is ______ years.', options: ['1', '2', '3', '5'], correctIndex: 2, explanation: '36 months as per law.' },
              { id: 'q14', question: 'Inter-Corporate Deposits are between ______.', options: ['Banks', 'Companies', 'Government', 'Individuals'], correctIndex: 1, explanation: 'Company to company.' },
              { id: 'q15', question: 'Venture Capital is for ______ businesses.', options: ['Old', 'New high-risk', 'Government', 'Non-profit'], correctIndex: 1, explanation: 'Start-ups and new ventures.' },
              { id: 'q16', question: 'Angel Investors invest in ______ stage.', options: ['Mature', 'Early', 'Declining', 'Exit'], correctIndex: 1, explanation: 'Seed funding.' },
              { id: 'q17', question: 'Trade Credit is provided by ______.', options: ['Banks', 'Suppliers', 'Government', 'Shareholders'], correctIndex: 1, explanation: 'Credit purchases from suppliers.' },
              { id: 'q18', question: 'Factoring involves selling ______.', options: ['Goods', 'Receivables', 'Shares', 'Land'], correctIndex: 1, explanation: 'Debtors to factor.' },
              { id: 'q19', question: 'Lease Financing does not give ______.', options: ['Usage', 'Ownership', 'Benefit', 'Right'], correctIndex: 1, explanation: 'Use without ownership.' },
              { id: 'q20', question: 'Zero Coupon Bonds pay ______ periodic interest.', options: ['High', 'Low', 'No', 'Variable'], correctIndex: 2, explanation: 'Issued at discount.' },
              { id: 'q21', question: 'Equity share capital is also called ______ capital.', options: ['Fixed', 'Risk', 'Safe', 'Borrowed'], correctIndex: 1, explanation: 'Bears all risk.' },
              { id: 'q22', question: 'GDR is issued in ______ markets.', options: ['Domestic', 'International', 'Local', 'State'], correctIndex: 1, explanation: 'Global markets.' },
              { id: 'q23', question: 'ADR is issued in ______.', options: ['India', 'USA', 'UK', 'Japan'], correctIndex: 1, explanation: 'American market.' },
              { id: 'q24', question: 'Preference dividend is paid ______ equity dividend.', options: ['After', 'Before', 'With', 'Instead of'], correctIndex: 1, explanation: 'Priority over equity.' },
              { id: 'q25', question: 'Redeemable preference shares can be ______.', options: ['Converted', 'Repaid', 'Sold', 'Transferred'], correctIndex: 1, explanation: 'Bought back by company.' },
              { id: 'q26', question: 'Irredeemable preference shares are ______.', options: ['Temporary', 'Permanent', 'Convertible', 'Cumulative'], correctIndex: 1, explanation: 'Not redeemed during lifetime.' },
              { id: 'q27', question: 'Bonus shares are issued from ______.', options: ['Cash', 'Reserves', 'Loans', 'Deposits'], correctIndex: 1, explanation: 'Free reserves or premium.' },
              { id: 'q28', question: 'Rights issue maintains ______ of shareholders.', options: ['Dividend', 'Control', 'Loss', 'Interest'], correctIndex: 1, explanation: 'Pre-emptive rights.' },
              { id: 'q29', question: 'Term loans are ______ term borrowings.', options: ['Short', 'Medium to Long', 'Very short', 'No fixed'], correctIndex: 1, explanation: '3-10 years usually.' },
              { id: 'q30', question: 'Equity shares have ______ claim on assets.', options: ['First', 'Priority', 'Residual', 'No'], correctIndex: 2, explanation: 'After all others are paid.' }
            ],
            reels: [
               { id: 'r1', title: 'Equity Shares', content: 'Ownership capital.\nVoting rights.\nResidual claim.', color: getReelColor(5) },
               { id: 'r2', title: 'Preference Shares', content: 'Fixed dividend.\nPriority over equity.\nNo voting rights.', color: getReelColor(6) },
               { id: 'r3', title: 'Debentures', content: 'Loan from public.\nFixed Interest.\nCreditors of company.', color: getReelColor(7) },
               { id: 'r4', title: 'Retained Earnings', content: 'Ploughing back profits.\nNo cost of capital.\nNo dilution.', color: getReelColor(8) },
               { id: 'r5', title: 'Cumulative Pref', content: 'Unpaid dividend accumulates.\nMust be paid before equity.', color: getReelColor(9) },
               { id: 'r6', title: 'Convertible Deb', content: 'Can be converted into equity shares.', color: getReelColor(0) },
               { id: 'r7', title: 'Non-Cumulative', content: 'Dividend does not accumulate.\nLapses if not paid.', color: getReelColor(1) },
               { id: 'r8', title: 'Participating', content: 'Share in extra profits.\nAfter equity dividend paid.', color: getReelColor(2) },
               { id: 'r9', title: 'Redeemable', content: 'Can be bought back.\nAfter specified period.', color: getReelColor(3) },
               { id: 'r10', title: 'Irredeemable', content: 'Cannot be redeemed.\nPermanent in nature.', color: getReelColor(4) },
               { id: 'r11', title: 'Secured Deb', content: 'Backed by assets.\nMortgage debentures.', color: getReelColor(5) },
               { id: 'r12', title: 'Unsecured/Naked', content: 'No asset backing.\nHigher risk for holders.', color: getReelColor(6) },
               { id: 'r13', title: 'Zero Coupon', content: 'No periodic interest.\nIssued at discount.', color: getReelColor(7) },
               { id: 'r14', title: 'Term Loans', content: 'From banks & FIs.\n3-10 years duration.', color: getReelColor(8) },
               { id: 'r15', title: 'Commercial Paper', content: 'Short-term unsecured.\nPromissory note.', color: getReelColor(9) },
               { id: 'r16', title: 'Public Deposits', content: '6 months to 3 years.\nHigher interest than bank.', color: getReelColor(0) },
               { id: 'r17', title: 'Inter-Corporate', content: 'Deposits between companies.\nShort-term funds.', color: getReelColor(1) },
               { id: 'r18', title: 'Venture Capital', content: 'For high-risk startups.\nEquity participation.', color: getReelColor(2) },
               { id: 'r19', title: 'Angel Investors', content: 'Early-stage funding.\nIndividual investors.', color: getReelColor(3) },
               { id: 'r20', title: 'Trade Credit', content: 'Credit from suppliers.\nNo immediate cash.', color: getReelColor(4) },
               { id: 'r21', title: 'Factoring', content: 'Sell receivables.\nGet immediate cash.', color: getReelColor(5) },
               { id: 'r22', title: 'Lease Financing', content: 'Use without ownership.\nFixed lease rentals.', color: getReelColor(6) },
               { id: 'r23', title: 'Risk Capital', content: 'Another name for equity.\nBears all business risk.', color: getReelColor(7) },
               { id: 'r24', title: 'Fixed Obligation', content: 'Debenture interest.\nPaid even in loss.', color: getReelColor(8) },
               { id: 'r25', title: 'GDR', content: 'Global Depository Receipts.\nInternational fundraising.', color: getReelColor(9) },
               { id: 'r26', title: 'ADR', content: 'American Depository Receipts.\nUS market listing.', color: getReelColor(0) },
               { id: 'r27', title: 'Bonus Shares', content: 'Free shares from reserves.\nNo cash outflow.', color: getReelColor(1) },
               { id: 'r28', title: 'Rights Issue', content: 'Existing shareholders first.\nMaintains control.', color: getReelColor(2) },
               { id: 'r29', title: 'Internal Source', content: 'Retained earnings.\nDepreciation fund.', color: getReelColor(3) },
               { id: 'r30', title: 'External Source', content: 'Shares, Debentures.\nLoans, Deposits.', color: getReelColor(4) }
            ]
          },
          { 
            id: 'sp3', 
            title: '3. Issue of Shares', 
            description: 'Procedure, Types of Issue, SEBI Guidelines.', 
            summary: '**IPO**: First issue to public.\n**FPO**: Further Public Offer.\n**Rights Issue**: To existing shareholders.\n**Bonus Issue**: Free shares from reserves.', 
            detailedNotes: '### 1. Types of Share Issue\n**A. Initial Public Offer (IPO)**:\n* First time issue to public.\n* Company becomes listed.\n* DRHP filed with SEBI.\n\n**B. Further Public Offer (FPO)**:\n* Subsequent issue by listed company.\n\n**C. Rights Issue**:\n* Offered to existing shareholders.\n* Right to buy before public.\n* Can renounce the right.\n\n**D. Bonus Issue**:\n* Free shares from reserves.\n* No cash received.\n* Capitalization of profits.\n\n**E. Private Placement**:\n* Issue to select group of investors.\n* Less than 50 people.\n\n### 2. Procedure of Issue\n1. Board Resolution.\n2. DRHP to SEBI.\n3. RHP (Red Herring Prospectus).\n4. Applications and Allotment.\n5. Listing on Stock Exchange.\n\n### 3. SEBI Guidelines\n* Minimum promoter contribution: 20%.\n* Lock-in period: 3 years for promoters.\n* Disclosure requirements.',
            flashcards: [
              { id: 'f1', front: 'IPO stands for?', back: 'Initial Public Offer - First issue to public.' },
              { id: 'f2', front: 'Rights Issue is for?', back: 'Existing shareholders at preferential price.' },
              { id: 'f3', front: 'Bonus Issue means?', back: 'Free shares from reserves - No cash involved.' },
              { id: 'f4', front: 'DRHP stands for?', back: 'Draft Red Herring Prospectus.' },
              { id: 'f5', front: 'FPO stands for?', back: 'Further Public Offer - By already listed company.' },
              { id: 'f6', front: 'RHP stands for?', back: 'Red Herring Prospectus.' },
              { id: 'f7', front: 'Private Placement is for?', back: 'Select group of investors (less than 50 people).' },
              { id: 'f8', front: 'QIP stands for?', back: 'Qualified Institutional Placement.' },
              { id: 'f9', front: 'Minimum promoter contribution in IPO?', back: '20% of post-issue capital.' },
              { id: 'f10', front: 'Lock-in period for promoters?', back: '3 years for promoter shares.' },
              { id: 'f11', front: 'SEBI stands for?', back: 'Securities and Exchange Board of India.' },
              { id: 'f12', front: 'SEBI was established in?', back: '1992 as statutory body.' },
              { id: 'f13', front: 'Prospectus is?', back: 'Invitation to subscribe to shares.' },
              { id: 'f14', front: 'Abridged Prospectus is?', back: 'Shorter version attached to application form.' },
              { id: 'f15', front: 'Shelf Prospectus is valid for?', back: 'One year from first offer.' },
              { id: 'f16', front: 'Book Building is?', back: 'Price discovery mechanism for IPO.' },
              { id: 'f17', front: 'Floor Price in Book Building?', back: 'Minimum price for bidding.' },
              { id: 'f18', front: 'Cap Price in Book Building?', back: 'Maximum price for bidding.' },
              { id: 'f19', front: 'Cut-off Price is?', back: 'Final price determined after book building.' },
              { id: 'f20', front: 'Green Shoe Option is?', back: 'Over-allotment option to stabilize price.' },
              { id: 'f21', front: 'Anchor Investor invests minimum?', back: 'Rs. 10 crores in IPO.' },
              { id: 'f22', front: 'ASBA stands for?', back: 'Application Supported by Blocked Amount.' },
              { id: 'f23', front: 'Underwriting means?', back: 'Guarantee to buy unsubscribed shares.' },
              { id: 'f24', front: 'Underwriter charges?', back: 'Underwriting Commission (up to 5%).' },
              { id: 'f25', front: 'Allotment must be completed within?', back: '15 days of issue closing.' },
              { id: 'f26', front: 'Listing means?', back: 'Admission of shares on stock exchange.' },
              { id: 'f27', front: 'Dematerialization means?', back: 'Converting physical shares to electronic form.' },
              { id: 'f28', front: 'ISIN stands for?', back: 'International Securities Identification Number.' },
              { id: 'f29', front: 'Depository in India?', back: 'NSDL and CDSL.' },
              { id: 'f30', front: 'Sweat Equity Shares are?', back: 'Shares issued to employees at discount.' }
            ],
            mcqs: [
              { id: 'q1', question: 'First issue of shares to public is called ______.', options: ['FPO', 'IPO', 'Rights', 'Bonus'], correctIndex: 1, explanation: 'Initial Public Offer.' },
              { id: 'q2', question: 'Bonus shares are issued from ______.', options: ['Cash', 'Reserves', 'Loans', 'Debentures'], correctIndex: 1, explanation: 'Capitalization of reserves.' },
              { id: 'q3', question: 'Rights issue is offered to ______ shareholders.', options: ['New', 'Existing', 'Foreign', 'Government'], correctIndex: 1, explanation: 'Priority to current holders.' },
              { id: 'q4', question: 'FPO is issued by ______ company.', options: ['Unlisted', 'Listed', 'Private', 'Government'], correctIndex: 1, explanation: 'Already listed company.' },
              { id: 'q5', question: 'DRHP is filed with ______.', options: ['RBI', 'SEBI', 'ROC', 'NCLT'], correctIndex: 1, explanation: 'Securities regulator.' },
              { id: 'q6', question: 'Private Placement is to ______ persons maximum.', options: ['10', '50', '100', '200'], correctIndex: 1, explanation: 'Not more than 49 persons.' },
              { id: 'q7', question: 'Lock-in period for promoters is ______ years.', options: ['1', '2', '3', '5'], correctIndex: 2, explanation: 'SEBI requirement.' },
              { id: 'q8', question: 'Minimum promoter contribution is ______%.', options: ['10', '15', '20', '25'], correctIndex: 2, explanation: 'Post-issue capital.' },
              { id: 'q9', question: 'SEBI was established in ______.', options: ['1988', '1990', '1992', '1995'], correctIndex: 2, explanation: 'As statutory body.' },
              { id: 'q10', question: 'Book Building determines ______.', options: ['Company value', 'Issue price', 'Dividend', 'Interest'], correctIndex: 1, explanation: 'Price discovery mechanism.' },
              { id: 'q11', question: 'Floor Price is the ______ price in book building.', options: ['Maximum', 'Average', 'Minimum', 'Fixed'], correctIndex: 2, explanation: 'Lowest bid price.' },
              { id: 'q12', question: 'Cap Price is the ______ price in book building.', options: ['Minimum', 'Average', 'Maximum', 'Fixed'], correctIndex: 2, explanation: 'Highest bid price.' },
              { id: 'q13', question: 'Green Shoe Option helps in price ______.', options: ['Increase', 'Decrease', 'Stabilization', 'Volatility'], correctIndex: 2, explanation: 'Post-listing stability.' },
              { id: 'q14', question: 'Anchor Investor minimum investment is Rs ______ crores.', options: ['5', '10', '15', '20'], correctIndex: 1, explanation: 'SEBI requirement.' },
              { id: 'q15', question: 'ASBA blocks amount in ______.', options: ['Cash', 'Bank Account', 'Wallet', 'Locker'], correctIndex: 1, explanation: 'Money blocked till allotment.' },
              { id: 'q16', question: 'Underwriting Commission maximum is ______%.', options: ['2', '3', '5', '10'], correctIndex: 2, explanation: 'Of underwritten amount.' },
              { id: 'q17', question: 'Allotment in IPO completed within ______ days.', options: ['7', '15', '21', '30'], correctIndex: 1, explanation: 'From closure of issue.' },
              { id: 'q18', question: 'Shelf Prospectus is valid for ______ year(s).', options: ['1', '2', '3', '5'], correctIndex: 0, explanation: 'From date of first offer.' },
              { id: 'q19', question: 'Abridged Prospectus is attached to ______.', options: ['Share', 'Debenture', 'Application Form', 'Certificate'], correctIndex: 2, explanation: 'Summary for applicants.' },
              { id: 'q20', question: 'NSDL and CDSL are ______.', options: ['Banks', 'Depositories', 'Registrars', 'Exchanges'], correctIndex: 1, explanation: 'Hold shares electronically.' },
              { id: 'q21', question: 'Dematerialization converts shares to ______ form.', options: ['Physical', 'Electronic', 'Paper', 'Printed'], correctIndex: 1, explanation: 'Demat shares.' },
              { id: 'q22', question: 'ISIN has ______ characters.', options: ['8', '10', '12', '15'], correctIndex: 2, explanation: 'Unique identifier.' },
              { id: 'q23', question: 'Sweat Equity is for ______.', options: ['Public', 'Employees', 'Directors only', 'Promoters'], correctIndex: 1, explanation: 'Employee reward.' },
              { id: 'q24', question: 'QIP is for ______.', options: ['Retail investors', 'Institutions', 'Promoters', 'Foreigners'], correctIndex: 1, explanation: 'Qualified Institutional Buyers.' },
              { id: 'q25', question: 'Rights can be ______ by shareholder.', options: ['Sold', 'Renounced', 'Both A and B', 'Neither'], correctIndex: 2, explanation: 'Renounceable rights.' },
              { id: 'q26', question: 'Bonus shares ______ cash from company.', options: ['Require', 'Do not require', 'May require', 'Always require'], correctIndex: 1, explanation: 'From reserves only.' },
              { id: 'q27', question: 'Prospectus must be dated within ______ days of registration.', options: ['30', '60', '90', '120'], correctIndex: 2, explanation: 'SEBI requirement.' },
              { id: 'q28', question: 'IPO application money refunded within ______ days.', options: ['7', '10', '15', '21'], correctIndex: 2, explanation: 'If not allotted.' },
              { id: 'q29', question: 'Stock split ______ face value of shares.', options: ['Increases', 'Decreases', 'Does not change', 'Doubles'], correctIndex: 1, explanation: 'More shares at lower value.' },
              { id: 'q30', question: 'Reverse stock split ______ number of shares.', options: ['Increases', 'Decreases', 'Does not change', 'Halves'], correctIndex: 1, explanation: 'Consolidation of shares.' }
            ],
            reels: [
               { id: 'r1', title: 'IPO', content: 'Initial Public Offer.\nFirst time to public.\nCompany gets listed.', color: getReelColor(1) },
               { id: 'r2', title: 'FPO', content: 'Further Public Offer.\nAlready listed company.', color: getReelColor(2) },
               { id: 'r3', title: 'Rights Issue', content: 'To existing shareholders.\nCan renounce rights.', color: getReelColor(3) },
               { id: 'r4', title: 'Bonus Issue', content: 'Free shares.\nFrom reserves.\nNo cash received.', color: getReelColor(4) },
               { id: 'r5', title: 'Private Placement', content: 'Issue to select few (<50 people).', color: getReelColor(5) },
               { id: 'r6', title: 'SEBI', content: 'Regulates share issues.\nProtects investors.', color: getReelColor(6) },
               { id: 'r7', title: 'Prospectus', content: 'Invitation to subscribe.\nContains all details.', color: getReelColor(7) },
               { id: 'r8', title: 'DRHP', content: 'Draft Red Herring Prospectus.\nFiled with SEBI.', color: getReelColor(8) },
               { id: 'r9', title: 'RHP', content: 'Red Herring Prospectus.\nFinal offer document.', color: getReelColor(9) },
               { id: 'r10', title: 'Book Building', content: 'Price discovery.\nBids between floor & cap.', color: getReelColor(0) },
               { id: 'r11', title: 'Floor Price', content: 'Minimum bid price.\nLower end of range.', color: getReelColor(1) },
               { id: 'r12', title: 'Cap Price', content: 'Maximum bid price.\nUpper end of range.', color: getReelColor(2) },
               { id: 'r13', title: 'Cut-off Price', content: 'Final issue price.\nAfter book building.', color: getReelColor(3) },
               { id: 'r14', title: 'Green Shoe Option', content: 'Over-allotment option.\nPrice stabilization.', color: getReelColor(4) },
               { id: 'r15', title: 'Anchor Investor', content: 'Minimum Rs 10 crore.\nBefore IPO opens.', color: getReelColor(5) },
               { id: 'r16', title: 'ASBA', content: 'Amount blocked in bank.\nTill allotment.', color: getReelColor(6) },
               { id: 'r17', title: 'Underwriting', content: 'Guarantee to buy.\nUnsubscribed shares.', color: getReelColor(7) },
               { id: 'r18', title: 'Promoter Lock-in', content: '3 years lock-in.\nCannot sell shares.', color: getReelColor(8) },
               { id: 'r19', title: '20% Contribution', content: 'Minimum promoter stake.\nPost-issue capital.', color: getReelColor(9) },
               { id: 'r20', title: 'Allotment', content: 'Within 15 days.\nOf issue closing.', color: getReelColor(0) },
               { id: 'r21', title: 'Listing', content: 'Admission on exchange.\nBSE or NSE.', color: getReelColor(1) },
               { id: 'r22', title: 'Dematerialization', content: 'Physical to electronic.\nDemat form.', color: getReelColor(2) },
               { id: 'r23', title: 'NSDL & CDSL', content: 'Depositories in India.\nHold demat shares.', color: getReelColor(3) },
               { id: 'r24', title: 'ISIN', content: '12 character code.\nUnique for each security.', color: getReelColor(4) },
               { id: 'r25', title: 'QIP', content: 'For Institutions.\nQualified buyers only.', color: getReelColor(5) },
               { id: 'r26', title: 'Sweat Equity', content: 'Shares to employees.\nFor contribution.', color: getReelColor(6) },
               { id: 'r27', title: 'ESOPs', content: 'Employee Stock Options.\nRight to buy shares.', color: getReelColor(7) },
               { id: 'r28', title: 'Stock Split', content: 'More shares.\nLower face value.', color: getReelColor(8) },
               { id: 'r29', title: 'Shelf Prospectus', content: 'Valid for 1 year.\nMultiple issues.', color: getReelColor(9) },
               { id: 'r30', title: 'Abridged Prospectus', content: 'Short summary.\nWith application form.', color: getReelColor(0) }
            ]
          },
          { 
            id: 'sp4', 
            title: '4. Issue of Debentures', 
            description: 'Types, Procedure, Redemption.', 
            summary: '**Secured/Unsecured**.\n**Convertible/Non-Convertible**.\n**Redemption**: Repayment at maturity.', 
            detailedNotes: '### 1. Meaning of Debenture\nA debenture is a written acknowledgment of debt. Company issues debentures to raise borrowed capital.\n\n### 2. Types of Debentures\n**A. Based on Security**:\n* Secured (Mortgage) - Backed by assets.\n* Unsecured (Naked) - No asset backing.\n\n**B. Based on Convertibility**:\n* Convertible - Can be converted to shares.\n* Non-Convertible - Remain as debt.\n\n**C. Based on Redemption**:\n* Redeemable - Repaid after fixed period.\n* Irredeemable - Perpetual debentures.\n\n**D. Based on Registration**:\n* Registered - In name of holder.\n* Bearer - Transferable by delivery.\n\n### 3. Issue Procedure\n1. Board Resolution.\n2. Debenture Trust Deed.\n3. Filing with ROC.\n4. Issue and Allotment.\n\n### 4. Redemption Methods\n* Lump sum payment at maturity.\n* Installments.\n* Purchase from market.\n* Conversion into shares.',
            flashcards: [
              { id: 'f1', front: 'Secured Debentures are backed by?', back: 'Company assets as collateral.' },
              { id: 'f2', front: 'Convertible Debentures can become?', back: 'Equity shares after specified period.' },
              { id: 'f3', front: 'Debenture holders are?', back: 'Creditors of the company.' },
              { id: 'f4', front: 'Debenture Trust Deed is executed with?', back: 'A Trustee for debenture holders.' },
              { id: 'f5', front: 'Unsecured Debentures are called?', back: 'Naked Debentures (No asset backing).' },
              { id: 'f6', front: 'Registered Debentures are?', back: 'In the name of holder, transfer by registration.' },
              { id: 'f7', front: 'Bearer Debentures are?', back: 'Transferable by mere delivery.' },
              { id: 'f8', front: 'Redeemable Debentures are?', back: 'Repayable after fixed period.' },
              { id: 'f9', front: 'Irredeemable Debentures are?', back: 'Perpetual - No fixed repayment date.' },
              { id: 'f10', front: 'First Mortgage Debentures have?', back: 'First charge on company assets.' },
              { id: 'f11', front: 'Second Mortgage Debentures have?', back: 'Second charge after first mortgage.' },
              { id: 'f12', front: 'Fully Convertible Debentures (FCD)?', back: 'Entire debenture converts to equity.' },
              { id: 'f13', front: 'Partly Convertible Debentures (PCD)?', back: 'Part converts, part remains as debt.' },
              { id: 'f14', front: 'Non-Convertible Debentures (NCD)?', back: 'Cannot be converted, remains as debt.' },
              { id: 'f15', front: 'Zero Coupon Debentures?', back: 'No periodic interest, issued at discount.' },
              { id: 'f16', front: 'Deep Discount Bonds?', back: 'Issued at heavy discount to face value.' },
              { id: 'f17', front: 'Debenture Redemption Reserve (DRR)?', back: 'Reserve for repayment of debentures.' },
              { id: 'f18', front: 'DRR is what percent of debentures?', back: '25% of outstanding debentures.' },
              { id: 'f19', front: 'Debenture interest is?', back: 'Fixed and paid irrespective of profits.' },
              { id: 'f20', front: 'Debenture interest is charged to?', back: 'Profit & Loss Account as expense.' },
              { id: 'f21', front: 'Collateral Security means?', back: 'Additional security for debentures.' },
              { id: 'f22', front: 'Floating Charge is on?', back: 'All assets of the company generally.' },
              { id: 'f23', front: 'Fixed Charge is on?', back: 'Specific identified assets.' },
              { id: 'f24', front: 'Call on Debentures means?', back: 'Demand for unpaid amount on debentures.' },
              { id: 'f25', front: 'Debentures issued at Par?', back: 'Issue price equals face value.' },
              { id: 'f26', front: 'Debentures issued at Premium?', back: 'Issue price more than face value.' },
              { id: 'f27', front: 'Debentures issued at Discount?', back: 'Issue price less than face value.' },
              { id: 'f28', front: 'Redemption at Par?', back: 'Repayment at face value.' },
              { id: 'f29', front: 'Redemption at Premium?', back: 'Repayment at more than face value.' },
              { id: 'f30', front: 'Sinking Fund is for?', back: 'Accumulating funds for debenture redemption.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Secured debentures are also called ______.', options: ['Naked', 'Mortgage', 'Bearer', 'Registered'], correctIndex: 1, explanation: 'Backed by mortgage of assets.' },
              { id: 'q2', question: 'Convertible debentures become ______ after period.', options: ['Bonds', 'Loans', 'Shares', 'Deposits'], correctIndex: 2, explanation: 'Can be converted to equity.' },
              { id: 'q3', question: 'Irredeemable debentures are also called ______.', options: ['Perpetual', 'Bearer', 'Naked', 'Registered'], correctIndex: 0, explanation: 'No fixed repayment date.' },
              { id: 'q4', question: 'Naked debentures are also called ______.', options: ['Secured', 'Unsecured', 'Mortgage', 'Registered'], correctIndex: 1, explanation: 'No asset backing.' },
              { id: 'q5', question: 'Bearer debentures are transferred by ______.', options: ['Registration', 'Endorsement', 'Delivery', 'Agreement'], correctIndex: 2, explanation: 'Simple delivery.' },
              { id: 'q6', question: 'Registered debentures are transferred by ______.', options: ['Delivery', 'Registration', 'Endorsement', 'Possession'], correctIndex: 1, explanation: 'Transfer deed and registration.' },
              { id: 'q7', question: 'DRR stands for ______.', options: ['Debenture Reserve Ratio', 'Debenture Redemption Reserve', 'Debt Reduction Reserve', 'Debenture Return Reserve'], correctIndex: 1, explanation: 'Reserve for redemption.' },
              { id: 'q8', question: 'DRR is ______% of outstanding debentures.', options: ['10', '15', '20', '25'], correctIndex: 3, explanation: 'As per Companies Act.' },
              { id: 'q9', question: 'Debenture interest is a ______ obligation.', options: ['Variable', 'Fixed', 'Optional', 'Conditional'], correctIndex: 1, explanation: 'Must be paid.' },
              { id: 'q10', question: 'Debenture interest is charged to ______.', options: ['Balance Sheet', 'P&L Account', 'Reserves', 'Capital'], correctIndex: 1, explanation: 'As an expense.' },
              { id: 'q11', question: 'Zero Coupon Debentures pay ______ periodic interest.', options: ['High', 'Low', 'No', 'Variable'], correctIndex: 2, explanation: 'Issued at discount.' },
              { id: 'q12', question: 'Deep Discount Bonds are issued at ______.', options: ['Par', 'Premium', 'Heavy discount', 'Face value'], correctIndex: 2, explanation: 'Much below face value.' },
              { id: 'q13', question: 'FCD means ______ Convertible Debentures.', options: ['Partly', 'Fully', 'Non', 'Semi'], correctIndex: 1, explanation: 'Entire amount converts.' },
              { id: 'q14', question: 'NCD means ______ Convertible Debentures.', options: ['Partly', 'Fully', 'Non', 'Nearly'], correctIndex: 2, explanation: 'Cannot be converted.' },
              { id: 'q15', question: 'First charge on assets is held by ______ debentures.', options: ['Second Mortgage', 'Naked', 'First Mortgage', 'Unsecured'], correctIndex: 2, explanation: 'Priority in repayment.' },
              { id: 'q16', question: 'Floating charge is on ______ assets.', options: ['Specific', 'All', 'Fixed', 'Identified'], correctIndex: 1, explanation: 'General charge.' },
              { id: 'q17', question: 'Fixed charge is on ______ assets.', options: ['All', 'Specific', 'Current', 'Floating'], correctIndex: 1, explanation: 'Identified assets.' },
              { id: 'q18', question: 'Collateral Security provides ______ security.', options: ['Primary', 'Additional', 'No', 'Less'], correctIndex: 1, explanation: 'Extra protection.' },
              { id: 'q19', question: 'Debenture Trust Deed protects ______.', options: ['Company', 'Debenture holders', 'Shareholders', 'Directors'], correctIndex: 1, explanation: 'Creditor protection.' },
              { id: 'q20', question: 'Issue at premium means price ______ face value.', options: ['Equals', 'Less than', 'More than', 'Same as'], correctIndex: 2, explanation: 'Above par value.' },
              { id: 'q21', question: 'Issue at discount means price ______ face value.', options: ['Equals', 'More than', 'Less than', 'Same as'], correctIndex: 2, explanation: 'Below par value.' },
              { id: 'q22', question: 'Redemption at par means repayment at ______.', options: ['Premium', 'Discount', 'Face value', 'Market value'], correctIndex: 2, explanation: 'Same as face value.' },
              { id: 'q23', question: 'Sinking Fund is created for ______.', options: ['Share issue', 'Debenture redemption', 'Dividend payment', 'Tax payment'], correctIndex: 1, explanation: 'Accumulate funds.' },
              { id: 'q24', question: 'Debentures can be issued for ______.', options: ['Cash only', 'Consideration other than cash', 'Both A and B', 'Neither'], correctIndex: 2, explanation: 'Multiple considerations.' },
              { id: 'q25', question: 'Debenture holders have ______ priority in winding up.', options: ['No', 'Lower', 'Higher', 'Equal'], correctIndex: 2, explanation: 'Before shareholders.' },
              { id: 'q26', question: 'Interest on debentures is tax ______.', options: ['Free', 'Deductible', 'Added', 'Neutral'], correctIndex: 1, explanation: 'Reduces taxable income.' },
              { id: 'q27', question: 'Debentures ______ voting rights.', options: ['Have', 'Do not have', 'May have', 'Always have'], correctIndex: 1, explanation: 'Creditors, not owners.' },
              { id: 'q28', question: 'Redemption by lot means ______.', options: ['All at once', 'Random selection', 'By order', 'By date'], correctIndex: 1, explanation: 'Draw of lots.' },
              { id: 'q29', question: 'Redemption by purchase means buying from ______.', options: ['Company', 'Open market', 'RBI', 'SEBI'], correctIndex: 1, explanation: 'Market purchase.' },
              { id: 'q30', question: 'Conversion period for convertible debentures is usually ______ months.', options: ['6', '12', '18', '36'], correctIndex: 2, explanation: 'After 18 months.' }
            ],
            reels: [
               { id: 'r1', title: 'Debenture', content: 'Acknowledgment of debt.\nFixed interest.\nCreditor status.', color: getReelColor(8) },
               { id: 'r2', title: 'Secured', content: 'Backed by assets.\nMortgage Debentures.', color: getReelColor(9) },
               { id: 'r3', title: 'Unsecured', content: 'No asset backing.\nNaked Debentures.', color: getReelColor(0) },
               { id: 'r4', title: 'Convertible', content: 'Can become equity.\nAfter specified period.', color: getReelColor(1) },
               { id: 'r5', title: 'Redemption', content: 'Repayment of debentures.\nAt maturity.', color: getReelColor(2) },
               { id: 'r6', title: 'Trust Deed', content: 'Agreement with trustee.\nProtects debenture holders.', color: getReelColor(3) },
               { id: 'r7', title: 'Registered', content: 'In holder name.\nTransfer by registration.', color: getReelColor(4) },
               { id: 'r8', title: 'Bearer', content: 'No name recorded.\nTransfer by delivery.', color: getReelColor(5) },
               { id: 'r9', title: 'Redeemable', content: 'Fixed repayment date.\nMust be repaid.', color: getReelColor(6) },
               { id: 'r10', title: 'Irredeemable', content: 'Perpetual debentures.\nNo repayment date.', color: getReelColor(7) },
               { id: 'r11', title: 'First Mortgage', content: 'First charge on assets.\nPriority in repayment.', color: getReelColor(8) },
               { id: 'r12', title: 'Second Mortgage', content: 'Second charge.\nAfter first mortgage.', color: getReelColor(9) },
               { id: 'r13', title: 'FCD', content: 'Fully Convertible.\nEntire amount to equity.', color: getReelColor(0) },
               { id: 'r14', title: 'PCD', content: 'Partly Convertible.\nSome converts, some remains.', color: getReelColor(1) },
               { id: 'r15', title: 'NCD', content: 'Non-Convertible.\nRemains as debt.', color: getReelColor(2) },
               { id: 'r16', title: 'Zero Coupon', content: 'No periodic interest.\nIssued at discount.', color: getReelColor(3) },
               { id: 'r17', title: 'DRR', content: 'Debenture Redemption Reserve.\n25% of outstanding.', color: getReelColor(4) },
               { id: 'r18', title: 'Fixed Interest', content: 'Must be paid.\nIrrespective of profits.', color: getReelColor(5) },
               { id: 'r19', title: 'Tax Deductible', content: 'Interest reduces tax.\nTax shield benefit.', color: getReelColor(6) },
               { id: 'r20', title: 'Floating Charge', content: 'On all assets.\nGeneral security.', color: getReelColor(7) },
               { id: 'r21', title: 'Fixed Charge', content: 'On specific assets.\nIdentified security.', color: getReelColor(8) },
               { id: 'r22', title: 'Issue at Par', content: 'Price = Face value.\nNo premium/discount.', color: getReelColor(9) },
               { id: 'r23', title: 'Issue at Premium', content: 'Price > Face value.\nAbove par issue.', color: getReelColor(0) },
               { id: 'r24', title: 'Issue at Discount', content: 'Price < Face value.\nBelow par issue.', color: getReelColor(1) },
               { id: 'r25', title: 'Redemption at Premium', content: 'Repay more than face.\nBonus to holders.', color: getReelColor(2) },
               { id: 'r26', title: 'Sinking Fund', content: 'Accumulate for redemption.\nPeriodic investment.', color: getReelColor(3) },
               { id: 'r27', title: 'Collateral Security', content: 'Additional protection.\nExtra security.', color: getReelColor(4) },
               { id: 'r28', title: 'No Voting Rights', content: 'Creditors not owners.\nNo say in management.', color: getReelColor(5) },
               { id: 'r29', title: 'Priority in Winding', content: 'Paid before shareholders.\nCreditor preference.', color: getReelColor(6) },
               { id: 'r30', title: 'Deep Discount', content: 'Heavy discount on issue.\nMaturity at face value.', color: getReelColor(7) }
            ]
          },
          { 
            id: 'sp5', 
            title: '5. Deposits', 
            description: 'Public Deposits, Rules, Acceptance.', 
            summary: '**Public Deposits**: Short-term borrowing from public.\n**Period**: 6 months to 3 years.\n**Interest**: Higher than bank FD.', 
            detailedNotes: '### 1. Meaning of Deposits\nShort-term borrowing by company from public. An unsecured loan for working capital needs.\n\n### 2. Features\n* Period: Minimum 6 months, Maximum 3 years.\n* Interest rate: Higher than bank rates.\n* Unsecured: No collateral.\n* Regulated by Companies Act and RBI.\n\n### 3. Types of Deposits\n* **Public Deposits**: From general public.\n* **Shareholder Deposits**: From shareholders.\n* **Inter-Corporate Deposits**: From other companies.\n\n### 4. Rules (Companies Act 2013)\n* Maximum limit: 35% of paid-up capital + free reserves.\n* From members: Additional 10%.\n* Credit rating mandatory for public deposits.\n* Deposit Insurance (optional).\n\n### 5. Advantages\n* No voting rights dilution.\n* Lower cost than equity.\n* Flexible terms.\n\n### 6. Disadvantages\n* Fixed payment obligation.\n* Credit rating required.\n* RBI regulations.',
            flashcards: [
              { id: 'f1', front: 'Maximum period of public deposits?', back: '3 years (36 months).' },
              { id: 'f2', front: 'Minimum period of public deposits?', back: '6 months.' },
              { id: 'f3', front: 'Public deposits limit?', back: '35% of paid-up capital + free reserves.' },
              { id: 'f4', front: 'Public deposits are?', back: 'Unsecured short-term borrowings.' },
              { id: 'f5', front: 'Additional deposits from members?', back: '10% more (Total 45% of paid-up + reserves).' },
              { id: 'f6', front: 'Credit Rating for deposits is?', back: 'Mandatory from recognized credit rating agency.' },
              { id: 'f7', front: 'Credit Rating Agencies in India?', back: 'CRISIL, ICRA, CARE, FITCH India.' },
              { id: 'f8', front: 'Deposit Insurance is?', back: 'Optional protection for depositors.' },
              { id: 'f9', front: 'Deposit Receipt must be issued within?', back: '21 days of acceptance of deposit.' },
              { id: 'f10', front: 'Register of Deposits must contain?', back: 'Name, address, amount, date, rate of interest.' },
              { id: 'f11', front: 'Deposits cannot be accepted from?', back: 'Non-residents (Unless permitted).' },
              { id: 'f12', front: 'Circular/Advertisement for deposits must include?', back: 'Financial position, credit rating, risks involved.' },
              { id: 'f13', front: 'Companies Act 2013 Section for Deposits?', back: 'Section 73 and 74.' },
              { id: 'f14', front: 'Deposit Repayment Reserve is?', back: '15% of deposits maturing in current and next year.' },
              { id: 'f15', front: 'Deposit Repayment Reserve invested in?', back: 'Government securities or scheduled bank.' },
              { id: 'f16', front: 'Small Deposit means?', back: 'Deposit of Rs 25,000 or less.' },
              { id: 'f17', front: 'Deposit from Director/Relative is?', back: 'Exempted from deposit rules (Declaration required).' },
              { id: 'f18', front: 'Renewal of deposit must be at least?', back: '1 month before maturity.' },
              { id: 'f19', front: 'Premature withdrawal is subject to?', back: 'Company discretion and penalty.' },
              { id: 'f20', front: 'Interest on deposits is paid?', back: 'Quarterly/Half-yearly/Annually as per terms.' },
              { id: 'f21', front: 'TDS on deposit interest if exceeds?', back: 'Rs 5,000 per year.' },
              { id: 'f22', front: 'TDS rate on deposit interest?', back: '10% (Without PAN - 20%).' },
              { id: 'f23', front: 'Public deposits help in?', back: 'Meeting working capital needs.' },
              { id: 'f24', front: 'Advantage of public deposits over bank loan?', back: 'Higher flexibility and lower formalities.' },
              { id: 'f25', front: 'Disadvantage of public deposits?', back: 'Unsecured - Risk for depositors.' },
              { id: 'f26', front: 'Liquid assets for deposits means?', back: 'Unencumbered term deposits in scheduled banks.' },
              { id: 'f27', front: 'Deposits maturing in next financial year?', back: 'Must maintain 15% as deposit repayment reserve.' },
              { id: 'f28', front: 'Return of Deposits filed with?', back: 'Registrar of Companies (ROC).' },
              { id: 'f29', front: 'Penalty for non-compliance of deposit rules?', back: 'Fine and imprisonment for officers in default.' },
              { id: 'f30', front: 'Inter-Corporate Deposits are between?', back: 'Companies (Company to company deposits).' }
            ],
            mcqs: [
              { id: 'q1', question: 'Maximum period for public deposits is ______ years.', options: ['1', '2', '3', '5'], correctIndex: 2, explanation: '36 months maximum.' },
              { id: 'q2', question: 'Public deposits are ______ in nature.', options: ['Secured', 'Unsecured', 'Guaranteed', 'Insured'], correctIndex: 1, explanation: 'No collateral required.' },
              { id: 'q3', question: 'Deposits limit is ______% of paid-up capital + reserves.', options: ['25', '35', '45', '50'], correctIndex: 1, explanation: 'As per Companies Act.' },
              { id: 'q4', question: 'Minimum period for deposits is ______ months.', options: ['3', '6', '9', '12'], correctIndex: 1, explanation: 'As per Companies Act.' },
              { id: 'q5', question: 'Additional deposits from members is ______%.', options: ['5', '10', '15', '20'], correctIndex: 1, explanation: 'Extra 10% from members.' },
              { id: 'q6', question: 'Credit rating for deposits is ______.', options: ['Optional', 'Mandatory', 'Prohibited', 'Recommended'], correctIndex: 1, explanation: 'Required by law.' },
              { id: 'q7', question: 'CRISIL is a ______ agency.', options: ['Banking', 'Insurance', 'Credit Rating', 'Stock Exchange'], correctIndex: 2, explanation: 'Credit rating company.' },
              { id: 'q8', question: 'Deposit Receipt issued within ______ days.', options: ['7', '14', '21', '30'], correctIndex: 2, explanation: 'Of acceptance.' },
              { id: 'q9', question: 'Deposit Repayment Reserve is ______%.', options: ['10', '15', '20', '25'], correctIndex: 1, explanation: 'Of maturing deposits.' },
              { id: 'q10', question: 'DRR invested in ______ securities.', options: ['Company', 'Government', 'Private', 'Foreign'], correctIndex: 1, explanation: 'Safe investments.' },
              { id: 'q11', question: 'Small deposit limit is Rs ______.', options: ['10,000', '25,000', '50,000', '1,00,000'], correctIndex: 1, explanation: 'Per deposit.' },
              { id: 'q12', question: 'Deposits from ______ are exempted.', options: ['Public', 'Directors', 'Employees', 'Customers'], correctIndex: 1, explanation: 'With declaration.' },
              { id: 'q13', question: 'Renewal request ______ before maturity.', options: ['1 week', '2 weeks', '1 month', '2 months'], correctIndex: 2, explanation: 'Advance notice.' },
              { id: 'q14', question: 'TDS on interest if exceeds Rs ______.', options: ['2,500', '5,000', '10,000', '15,000'], correctIndex: 1, explanation: 'Per year threshold.' },
              { id: 'q15', question: 'TDS rate on deposit interest is ______%.', options: ['5', '10', '15', '20'], correctIndex: 1, explanation: 'With PAN.' },
              { id: 'q16', question: 'TDS without PAN is ______%.', options: ['10', '15', '20', '25'], correctIndex: 2, explanation: 'Higher rate.' },
              { id: 'q17', question: 'Public deposits are for ______ capital needs.', options: ['Fixed', 'Working', 'Permanent', 'Long-term'], correctIndex: 1, explanation: 'Short-term needs.' },
              { id: 'q18', question: 'Section ______ of Companies Act deals with deposits.', options: ['71', '73', '75', '77'], correctIndex: 1, explanation: 'Deposit provisions.' },
              { id: 'q19', question: 'Interest on deposits paid ______.', options: ['Daily', 'Weekly', 'Quarterly/Half-yearly', 'Annually only'], correctIndex: 2, explanation: 'As per terms.' },
              { id: 'q20', question: 'Liquid assets means ______ deposits.', options: ['Company', 'Unencumbered bank', 'Government', 'Private'], correctIndex: 1, explanation: 'In scheduled banks.' },
              { id: 'q21', question: 'Return of deposits filed with ______.', options: ['SEBI', 'RBI', 'ROC', 'NCLT'], correctIndex: 2, explanation: 'Registrar of Companies.' },
              { id: 'q22', question: 'Non-compliance penalty includes ______.', options: ['Warning only', 'Fine only', 'Fine and imprisonment', 'Suspension'], correctIndex: 2, explanation: 'Serious penalty.' },
              { id: 'q23', question: 'Inter-Corporate Deposits are from ______.', options: ['Individuals', 'Companies', 'Government', 'Banks'], correctIndex: 1, explanation: 'Company to company.' },
              { id: 'q24', question: 'Deposit advertisement must show ______.', options: ['Logo only', 'Credit rating', 'Director photos', 'Office address only'], correctIndex: 1, explanation: 'Financial position and rating.' },
              { id: 'q25', question: 'Premature withdrawal subject to ______.', options: ['No condition', 'Company discretion', 'RBI approval', 'Court order'], correctIndex: 1, explanation: 'As per company policy.' },
              { id: 'q26', question: 'Deposits from NRIs are ______.', options: ['Allowed freely', 'Not allowed', 'Allowed with permission', 'Mandatory'], correctIndex: 2, explanation: 'Unless permitted.' },
              { id: 'q27', question: 'Register of Deposits contains ______.', options: ['Name only', 'Amount only', 'All depositor details', 'Address only'], correctIndex: 2, explanation: 'Complete information.' },
              { id: 'q28', question: 'Deposit Insurance protects ______.', options: ['Company', 'Depositors', 'Directors', 'Banks'], correctIndex: 1, explanation: 'Optional protection.' },
              { id: 'q29', question: 'Public deposits have ______ interest than bank loans.', options: ['Lower', 'Higher', 'Same', 'No'], correctIndex: 1, explanation: 'Higher to attract depositors.' },
              { id: 'q30', question: 'Deposits help avoid ______ dilution.', options: ['Profit', 'Control', 'Asset', 'Liability'], correctIndex: 1, explanation: 'No voting rights given.' }
            ],
            reels: [
               { id: 'r1', title: 'Public Deposits', content: 'Short-term borrowing.\n6 months to 3 years.', color: getReelColor(4) },
               { id: 'r2', title: 'Interest', content: 'Higher than bank FD.\nAttracts investors.', color: getReelColor(5) },
               { id: 'r3', title: 'Unsecured', content: 'No collateral.\nRisk for depositors.', color: getReelColor(6) },
               { id: 'r4', title: 'Limit 35%', content: 'Of paid-up capital + free reserves.', color: getReelColor(7) },
               { id: 'r5', title: 'Credit Rating', content: 'Mandatory for public deposits.\nCRISIL, ICRA, CARE.', color: getReelColor(8) },
               { id: 'r6', title: 'Members 10% Extra', content: 'Additional from members.\nTotal 45% limit.', color: getReelColor(9) },
               { id: 'r7', title: 'Min 6 Months', content: 'Minimum deposit period.\nAs per law.', color: getReelColor(0) },
               { id: 'r8', title: 'Max 3 Years', content: 'Maximum deposit period.\n36 months limit.', color: getReelColor(1) },
               { id: 'r9', title: 'Receipt in 21 Days', content: 'Issue deposit receipt.\nWithin 21 days.', color: getReelColor(2) },
               { id: 'r10', title: 'DRR 15%', content: 'Deposit Repayment Reserve.\nFor maturing deposits.', color: getReelColor(3) },
               { id: 'r11', title: 'Govt Securities', content: 'DRR invested in.\nSafe government bonds.', color: getReelColor(4) },
               { id: 'r12', title: 'Small Deposit', content: 'Rs 25,000 or less.\nSimplified rules.', color: getReelColor(5) },
               { id: 'r13', title: 'Director Exempt', content: 'Deposits from directors.\nExempted with declaration.', color: getReelColor(6) },
               { id: 'r14', title: 'Section 73', content: 'Companies Act provision.\nDeposit rules.', color: getReelColor(7) },
               { id: 'r15', title: 'TDS 10%', content: 'On interest above Rs 5,000.\nWith PAN card.', color: getReelColor(8) },
               { id: 'r16', title: 'TDS 20%', content: 'Without PAN card.\nHigher deduction.', color: getReelColor(9) },
               { id: 'r17', title: 'Working Capital', content: 'Deposits used for.\nShort-term needs.', color: getReelColor(0) },
               { id: 'r18', title: 'No Dilution', content: 'No voting rights.\nControl maintained.', color: getReelColor(1) },
               { id: 'r19', title: 'Flexible Terms', content: 'Company decides.\nInterest and period.', color: getReelColor(2) },
               { id: 'r20', title: 'ROC Filing', content: 'Return of deposits.\nFiled with registrar.', color: getReelColor(3) },
               { id: 'r21', title: 'Penalty', content: 'Fine + Imprisonment.\nFor non-compliance.', color: getReelColor(4) },
               { id: 'r22', title: 'NRI Deposits', content: 'Not allowed.\nUnless permitted.', color: getReelColor(5) },
               { id: 'r23', title: 'Renewal Notice', content: '1 month before maturity.\nAdvance request.', color: getReelColor(6) },
               { id: 'r24', title: 'Premature Withdrawal', content: 'Company discretion.\nMay have penalty.', color: getReelColor(7) },
               { id: 'r25', title: 'Deposit Register', content: 'All depositor details.\nMust be maintained.', color: getReelColor(8) },
               { id: 'r26', title: 'Advertisement Rules', content: 'Show credit rating.\nFinancial position.', color: getReelColor(9) },
               { id: 'r27', title: 'Inter-Corporate', content: 'Between companies.\nShort-term funds.', color: getReelColor(0) },
               { id: 'r28', title: 'Deposit Insurance', content: 'Optional protection.\nFor depositors.', color: getReelColor(1) },
               { id: 'r29', title: 'Liquid Assets', content: 'Unencumbered deposits.\nIn scheduled banks.', color: getReelColor(2) },
               { id: 'r30', title: 'Lower Cost', content: 'Than equity capital.\nCheaper financing.', color: getReelColor(3) }
            ]
          },
          { 
            id: 'sp6', 
            title: '6. Dividend', 
            description: 'Types, Declaration, Payment.', 
            summary: '**Dividend**: Distribution of profits to shareholders.\n**Types**: Interim, Final, Stock Dividend.\n**From**: Profits only (Not capital).', 
            detailedNotes: '### 1. Meaning of Dividend\nDividend is the distribution of profits to shareholders. It is the return on investment for equity holders.\n\n### 2. Types of Dividend\n**A. Cash Dividend**: Paid in cash.\n**B. Stock Dividend**: Paid in shares (Bonus).\n**C. Interim Dividend**: Before AGM.\n**D. Final Dividend**: Declared at AGM.\n\n### 3. Sources of Dividend\n* Current year profits.\n* Accumulated profits (Reserves).\n* Money provided by Government (for govt companies).\n\n### 4. Declaration Process\n1. Board recommends dividend.\n2. Shareholders approve at AGM.\n3. Transfer to Unpaid Dividend Account.\n4. Payment within 30 days.\n\n### 5. Unpaid Dividend\n* If unclaimed for 7 years → Transferred to IEPF (Investor Education and Protection Fund).\n\n### 6. Dividend Tax\n* DDT abolished from April 2020.\n* Now taxable in hands of shareholders.',
            flashcards: [
              { id: 'f1', front: 'Dividend is paid from?', back: 'Profits only (Current or Accumulated).' },
              { id: 'f2', front: 'Interim Dividend is declared?', back: 'Before the Annual General Meeting.' },
              { id: 'f3', front: 'Final Dividend is declared at?', back: 'Annual General Meeting (AGM).' },
              { id: 'f4', front: 'Unclaimed dividend after 7 years goes to?', back: 'IEPF (Investor Education and Protection Fund).' },
              { id: 'f5', front: 'Dividend must be paid within?', back: '30 days from declaration.' },
              { id: 'f6', front: 'Cash Dividend is?', back: 'Dividend paid in cash to shareholders.' },
              { id: 'f7', front: 'Stock Dividend is?', back: 'Dividend paid in form of bonus shares.' },
              { id: 'f8', front: 'DDT stands for?', back: 'Dividend Distribution Tax (Abolished April 2020).' },
              { id: 'f9', front: 'After DDT abolition, dividend is taxed in?', back: 'Hands of shareholders at slab rate.' },
              { id: 'f10', front: 'Who recommends dividend?', back: 'Board of Directors.' },
              { id: 'f11', front: 'Who approves final dividend?', back: 'Shareholders at AGM.' },
              { id: 'f12', front: 'Interim Dividend can be declared by?', back: 'Board of Directors only.' },
              { id: 'f13', front: 'Maximum final dividend can be?', back: 'Not more than Board recommendation.' },
              { id: 'f14', front: 'Dividend can be paid from capital?', back: 'No, only from profits (Except in specific cases).' },
              { id: 'f15', front: 'IEPF stands for?', back: 'Investor Education and Protection Fund.' },
              { id: 'f16', front: 'Unclaimed dividend transferred to?', back: 'Unpaid Dividend Account within 7 days.' },
              { id: 'f17', front: 'Unpaid Dividend Account kept with?', back: 'Scheduled Bank in separate account.' },
              { id: 'f18', front: 'Dividend Warrant is?', back: 'Cheque for dividend payment.' },
              { id: 'f19', front: 'Record Date is?', back: 'Date for determining eligible shareholders.' },
              { id: 'f20', front: 'Ex-dividend Date is?', back: 'Date after which buyer not entitled to dividend.' },
              { id: 'f21', front: 'Cum-dividend means?', back: 'Share price includes right to dividend.' },
              { id: 'f22', front: 'Payout Ratio is?', back: 'Dividend per share / Earnings per share × 100.' },
              { id: 'f23', front: 'Retention Ratio is?', back: '1 - Payout Ratio (Profits kept in business).' },
              { id: 'f24', front: 'Dividend Yield is?', back: 'Dividend per share / Market Price × 100.' },
              { id: 'f25', front: 'Stable Dividend Policy means?', back: 'Fixed dividend amount every year.' },
              { id: 'f26', front: 'Irregular Dividend Policy means?', back: 'Dividend varies based on profits.' },
              { id: 'f27', front: 'No Dividend Policy means?', back: 'Company retains all profits for growth.' },
              { id: 'f28', front: 'Regular Dividend Policy means?', back: 'Dividend paid at regular intervals.' },
              { id: 'f29', front: 'Scrip Dividend is?', back: 'Promise to pay dividend later.' },
              { id: 'f30', front: 'Property Dividend is?', back: 'Dividend paid in form of assets.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Dividend can only be paid from ______.', options: ['Capital', 'Profits', 'Loans', 'Deposits'], correctIndex: 1, explanation: 'Only from earned profits.' },
              { id: 'q2', question: 'Final dividend is declared at ______.', options: ['Board Meeting', 'AGM', 'EGM', 'Any time'], correctIndex: 1, explanation: 'Shareholders approve at AGM.' },
              { id: 'q3', question: 'Dividend must be paid within ______ days.', options: ['15', '30', '45', '60'], correctIndex: 1, explanation: 'From date of declaration.' },
              { id: 'q4', question: 'Interim dividend is declared by ______.', options: ['Shareholders', 'Board', 'Auditors', 'Registrar'], correctIndex: 1, explanation: 'Before AGM.' },
              { id: 'q5', question: 'Unclaimed dividend transferred to IEPF after ______ years.', options: ['3', '5', '7', '10'], correctIndex: 2, explanation: 'As per Companies Act.' },
              { id: 'q6', question: 'DDT was abolished from ______.', options: ['April 2018', 'April 2019', 'April 2020', 'April 2021'], correctIndex: 2, explanation: 'Budget 2020.' },
              { id: 'q7', question: 'Stock dividend is same as ______.', options: ['Cash dividend', 'Bonus shares', 'Rights issue', 'Split'], correctIndex: 1, explanation: 'Shares instead of cash.' },
              { id: 'q8', question: 'Who recommends final dividend?', options: ['Shareholders', 'Board', 'Auditors', 'SEBI'], correctIndex: 1, explanation: 'Directors recommend.' },
              { id: 'q9', question: 'Final dividend cannot exceed ______ recommendation.', options: ['SEBI', 'Auditor', 'Board', 'RBI'], correctIndex: 2, explanation: 'Maximum as per Board.' },
              { id: 'q10', question: 'Unpaid dividend transferred to bank within ______ days.', options: ['3', '5', '7', '10'], correctIndex: 2, explanation: 'Separate account.' },
              { id: 'q11', question: 'IEPF stands for ______ Fund.', options: ['Investor Education and Protection', 'Investment Enhancement and Progress', 'Income Equity and Profit', 'Interest Earning and Payment'], correctIndex: 0, explanation: 'Investor protection.' },
              { id: 'q12', question: 'Record date determines ______.', options: ['Dividend amount', 'Eligible shareholders', 'Payment date', 'Tax rate'], correctIndex: 1, explanation: 'Who gets dividend.' },
              { id: 'q13', question: 'Ex-dividend date is ______ record date.', options: ['Same as', 'Before', 'After', 'Unrelated to'], correctIndex: 1, explanation: 'Usually 1-2 days before.' },
              { id: 'q14', question: 'Cum-dividend price ______ dividend.', options: ['Excludes', 'Includes', 'Reduces', 'Doubles'], correctIndex: 1, explanation: 'With dividend right.' },
              { id: 'q15', question: 'Payout Ratio = Dividend / ______.', options: ['Capital', 'Sales', 'Earnings', 'Assets'], correctIndex: 2, explanation: 'DPS / EPS.' },
              { id: 'q16', question: 'Retention Ratio + Payout Ratio = ______.', options: ['0', '50%', '100%', '200%'], correctIndex: 2, explanation: 'Total is 100%.' },
              { id: 'q17', question: 'Dividend Yield = Dividend / ______.', options: ['Face Value', 'Book Value', 'Market Price', 'Par Value'], correctIndex: 2, explanation: 'Return on market investment.' },
              { id: 'q18', question: 'Stable dividend policy pays ______ dividend.', options: ['Variable', 'Fixed', 'No', 'Maximum'], correctIndex: 1, explanation: 'Constant amount.' },
              { id: 'q19', question: 'Growth companies usually have ______ dividend.', options: ['High', 'Low', 'No', 'Fixed'], correctIndex: 2, explanation: 'Retain for reinvestment.' },
              { id: 'q20', question: 'Dividend Warrant is a ______.', options: ['Promise', 'Cheque', 'Receipt', 'Agreement'], correctIndex: 1, explanation: 'Payment instrument.' },
              { id: 'q21', question: 'Scrip Dividend is a ______ to pay later.', options: ['Cheque', 'Share', 'Promise', 'Refusal'], correctIndex: 2, explanation: 'Deferred payment.' },
              { id: 'q22', question: 'Property Dividend is paid in form of ______.', options: ['Cash', 'Shares', 'Assets', 'Bonds'], correctIndex: 2, explanation: 'Non-cash assets.' },
              { id: 'q23', question: 'After 2020, dividend taxed at ______ rate.', options: ['Flat 10%', 'Flat 20%', 'Slab rate', 'No tax'], correctIndex: 2, explanation: 'As per income slab.' },
              { id: 'q24', question: 'TDS on dividend if exceeds Rs ______.', options: ['2,500', '5,000', '10,000', '15,000'], correctIndex: 1, explanation: 'Per year.' },
              { id: 'q25', question: 'TDS rate on dividend is ______%.', options: ['5', '10', '15', '20'], correctIndex: 1, explanation: 'With PAN.' },
              { id: 'q26', question: 'Interim dividend from ______ profits.', options: ['Future', 'Past', 'Current year', 'Borrowed'], correctIndex: 2, explanation: 'Or surplus in reserves.' },
              { id: 'q27', question: 'Dividend on ______ shares is fixed.', options: ['Equity', 'Preference', 'Bonus', 'Rights'], correctIndex: 1, explanation: 'Fixed rate.' },
              { id: 'q28', question: 'Equity dividend depends on ______.', options: ['Fixed rate', 'Available profits', 'Face value', 'Market price'], correctIndex: 1, explanation: 'Variable dividend.' },
              { id: 'q29', question: 'Cumulative preference gets ______ dividends.', options: ['No arrear', 'Arrear', 'Double', 'Half'], correctIndex: 1, explanation: 'Accumulated unpaid.' },
              { id: 'q30', question: 'Non-cumulative preference dividend ______ if not declared.', options: ['Accumulates', 'Lapses', 'Doubles', 'Halves'], correctIndex: 1, explanation: 'No arrears.' }
            ],
            reels: [
               { id: 'r1', title: 'Dividend', content: 'Share of profits.\nReturn on investment.', color: getReelColor(9) },
               { id: 'r2', title: 'Interim', content: 'Before AGM.\nBoard declares.', color: getReelColor(0) },
               { id: 'r3', title: 'Final', content: 'At AGM.\nShareholders approve.', color: getReelColor(1) },
               { id: 'r4', title: 'Stock Dividend', content: 'Bonus shares.\nNo cash paid.', color: getReelColor(2) },
               { id: 'r5', title: 'IEPF', content: 'Unclaimed dividend after 7 years.\nInvestor Protection Fund.', color: getReelColor(3) },
               { id: 'r6', title: 'Within 30 Days', content: 'Dividend must be paid.\nFrom declaration.', color: getReelColor(4) },
               { id: 'r7', title: 'From Profits Only', content: 'Not from capital.\nCurrent or past profits.', color: getReelColor(5) },
               { id: 'r8', title: 'Board Recommends', content: 'Directors recommend.\nShareholders approve.', color: getReelColor(6) },
               { id: 'r9', title: 'DDT Abolished', content: 'From April 2020.\nTaxed in hands of shareholders.', color: getReelColor(7) },
               { id: 'r10', title: 'Slab Rate Tax', content: 'After 2020.\nAs per income slab.', color: getReelColor(8) },
               { id: 'r11', title: 'TDS 10%', content: 'If dividend > Rs 5,000.\nWith PAN.', color: getReelColor(9) },
               { id: 'r12', title: 'Record Date', content: 'Determines eligible shareholders.\nWho gets dividend.', color: getReelColor(0) },
               { id: 'r13', title: 'Ex-Dividend', content: 'After this date.\nNo dividend right.', color: getReelColor(1) },
               { id: 'r14', title: 'Cum-Dividend', content: 'Price includes dividend.\nBefore ex-date.', color: getReelColor(2) },
               { id: 'r15', title: 'Payout Ratio', content: 'DPS / EPS × 100.\nDividend portion.', color: getReelColor(3) },
               { id: 'r16', title: 'Retention Ratio', content: '1 - Payout Ratio.\nKept in business.', color: getReelColor(4) },
               { id: 'r17', title: 'Dividend Yield', content: 'DPS / Market Price.\nReturn on investment.', color: getReelColor(5) },
               { id: 'r18', title: 'Stable Policy', content: 'Fixed dividend.\nEvery year same.', color: getReelColor(6) },
               { id: 'r19', title: 'Growth Companies', content: 'Low/No dividend.\nRetain for growth.', color: getReelColor(7) },
               { id: 'r20', title: 'Dividend Warrant', content: 'Cheque for dividend.\nPayment instrument.', color: getReelColor(8) },
               { id: 'r21', title: 'Unpaid Account', content: 'Transfer within 7 days.\nTo scheduled bank.', color: getReelColor(9) },
               { id: 'r22', title: '7 Years Rule', content: 'Unclaimed → IEPF.\nGovernment fund.', color: getReelColor(0) },
               { id: 'r23', title: 'Cash Dividend', content: 'Paid in cash.\nMost common type.', color: getReelColor(1) },
               { id: 'r24', title: 'Property Dividend', content: 'Paid in assets.\nNon-cash form.', color: getReelColor(2) },
               { id: 'r25', title: 'Scrip Dividend', content: 'Promise to pay later.\nDeferred payment.', color: getReelColor(3) },
               { id: 'r26', title: 'Preference Dividend', content: 'Fixed rate.\nPaid before equity.', color: getReelColor(4) },
               { id: 'r27', title: 'Equity Dividend', content: 'Variable amount.\nDepends on profits.', color: getReelColor(5) },
               { id: 'r28', title: 'Cumulative Pref', content: 'Arrears accumulate.\nMust be paid.', color: getReelColor(6) },
               { id: 'r29', title: 'Non-Cumulative', content: 'Arrears lapse.\nNo accumulation.', color: getReelColor(7) },
               { id: 'r30', title: 'Maximum Rule', content: 'Cannot exceed.\nBoard recommendation.', color: getReelColor(8) }
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
        syllabus: '1. Accounts from Incomplete Records\n2. Single Entry System\n3. Accounts of Not-for-Profit Concerns\n4. Partnership Accounts\n5. Reconstitution of Partnership\n6. Dissolution of Partnership Firm\n7. Company Accounts',
        paperPattern: '### Book Keeping Paper Pattern (80 Marks)\n\n* **Q.1 Objective Questions (20 Marks)**: MCQs, Fill in blanks, Match.\n* **Q.2 Practical Problems (12 Marks)**: (Any 2 out of 3)\n* **Q.3 Practical Problems (12 Marks)**: (Any 2 out of 3)\n* **Q.4 Practical Problems (14 Marks)**: (Any 2 out of 3)\n* **Q.5 Practical Problems (14 Marks)**: (Any 2 out of 3)\n* **Q.6 Theory Questions (8 Marks)**: (Any 2 out of 3)',
        chapters: [
          { 
            id: 'bk1', 
            title: '1. Accounts from Incomplete Records', 
            description: 'Single Entry System, Statement of Affairs.', 
            summary: '**Single Entry**: Only personal accounts maintained.\n**Statement of Affairs**: Like Balance Sheet (Assets - Liabilities = Capital).\n**Profit = Closing Capital - Opening Capital + Drawings - Additional Capital.', 
            detailedNotes: '### 1. Meaning of Incomplete Records\nRecords which are not maintained according to double entry system. Also called Single Entry System.\n\n### 2. Reasons for Incomplete Records\n* Lack of accounting knowledge.\n* Small size of business.\n* To hide profits (Tax evasion).\n* Saves time and cost.\n\n### 3. Limitations\n* Accuracy cannot be verified.\n* No trial balance possible.\n* Financial position unclear.\n* Fraud may remain undetected.\n\n### 4. Statement of Affairs\nStatement showing Assets and Liabilities at a particular date.\n**Capital = Assets - Liabilities**\n\n### 5. Calculation of Profit\n**Profit = Closing Capital - Opening Capital + Drawings - Additional Capital**\n\nOR\n\n**Profit = Closing Net Worth - Opening Net Worth - Fresh Capital + Drawings**\n\n### 6. Conversion to Double Entry\n1. Prepare Statement of Affairs (Opening).\n2. Prepare Statement of Affairs (Closing).\n3. Prepare Trading and P&L Account.\n4. Prepare Balance Sheet.',
            flashcards: [
              { id: 'f1', front: 'Single Entry maintains which accounts?', back: 'Only Personal Accounts (Debtors & Creditors).' },
              { id: 'f2', front: 'Formula for Profit in Single Entry?', back: 'Closing Capital - Opening Capital + Drawings - Additional Capital.' },
              { id: 'f3', front: 'Statement of Affairs shows?', back: 'Assets and Liabilities at a particular date.' },
              { id: 'f4', front: 'Capital in Statement of Affairs?', back: 'Capital = Total Assets - Total Liabilities.' },
              { id: 'f5', front: 'Single Entry is also called?', back: 'Incomplete Records or Accounts from Incomplete Records.' },
              { id: 'f6', front: 'Why is Single Entry used?', back: 'Lack of accounting knowledge, small business, saves time and cost.' },
              { id: 'f7', front: 'Can Trial Balance be prepared in Single Entry?', back: 'No, because it follows incomplete double entry.' },
              { id: 'f8', front: 'Statement of Affairs is similar to?', back: 'Balance Sheet (but prepared from incomplete records).' },
              { id: 'f9', front: 'Opening Capital is calculated as?', back: 'Opening Assets - Opening Liabilities.' },
              { id: 'f10', front: 'Closing Capital is calculated as?', back: 'Closing Assets - Closing Liabilities.' },
              { id: 'f11', front: 'Net Worth means?', back: 'Total Assets minus Total Liabilities (Same as Capital).' },
              { id: 'f12', front: 'Drawings in profit formula are?', back: 'Added because they reduce capital but are not expenses.' },
              { id: 'f13', front: 'Additional Capital in profit formula is?', back: 'Subtracted because it increases capital but is not income.' },
              { id: 'f14', front: 'Total Debtors Account helps find?', back: 'Credit Sales when cash sales are known.' },
              { id: 'f15', front: 'Total Creditors Account helps find?', back: 'Credit Purchases when cash purchases are known.' },
              { id: 'f16', front: 'Bills Receivable Account helps find?', back: 'Collection from debtors and dishonored bills.' },
              { id: 'f17', front: 'Bills Payable Account helps find?', back: 'Payments to creditors and dishonored bills.' },
              { id: 'f18', front: 'Cash Book summary helps find?', back: 'Missing figures like sales, purchases, expenses.' },
              { id: 'f19', front: 'Opening Stock + Purchases - Closing Stock = ?', back: 'Cost of Goods Sold (COGS).' },
              { id: 'f20', front: 'Gross Profit = Sales - ?', back: 'Cost of Goods Sold.' },
              { id: 'f21', front: 'Net Profit = Gross Profit - ?', back: 'Operating Expenses.' },
              { id: 'f22', front: 'Goods destroyed by fire are?', back: 'Abnormal loss - Debit to P&L Account.' },
              { id: 'f23', front: 'Goods taken for personal use are?', back: 'Drawings - Reduce purchases, add to drawings.' },
              { id: 'f24', front: 'Bad Debts in Debtors Account are?', back: 'Credited to Debtors and Debited to P&L.' },
              { id: 'f25', front: 'Discount Allowed is shown as?', back: 'Credit in Debtors Account, Debit in P&L.' },
              { id: 'f26', front: 'Discount Received is shown as?', back: 'Debit in Creditors Account, Credit in P&L.' },
              { id: 'f27', front: 'Returns Inward (Sales Return) affects?', back: 'Reduces Sales in Trading Account.' },
              { id: 'f28', front: 'Returns Outward (Purchase Return) affects?', back: 'Reduces Purchases in Trading Account.' },
              { id: 'f29', front: 'Depreciation in incomplete records?', back: 'Calculated on opening fixed assets, adjusted in closing.' },
              { id: 'f30', front: 'Conversion to Double Entry requires?', back: 'Opening & Closing Statement of Affairs, Trading & P&L A/c, Balance Sheet.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Single entry system maintains only ______ accounts.', options: ['Real', 'Personal', 'Nominal', 'All'], correctIndex: 1, explanation: 'Only debtors and creditors.' },
              { id: 'q2', question: 'Statement of Affairs is similar to ______.', options: ['Trial Balance', 'P&L Account', 'Balance Sheet', 'Cash Book'], correctIndex: 2, explanation: 'Shows assets and liabilities.' },
              { id: 'q3', question: 'In single entry, ______ cannot be prepared.', options: ['Cash Book', 'Trial Balance', 'Statement of Affairs', 'Debtors list'], correctIndex: 1, explanation: 'No double entry, no trial balance.' },
              { id: 'q4', question: 'Capital = Assets - ______.', options: ['Expenses', 'Income', 'Liabilities', 'Drawings'], correctIndex: 2, explanation: 'Basic accounting equation.' },
              { id: 'q5', question: 'Drawings are ______ in profit formula.', options: ['Subtracted', 'Added', 'Ignored', 'Multiplied'], correctIndex: 1, explanation: 'Increase calculated profit.' },
              { id: 'q6', question: 'Additional capital is ______ in profit formula.', options: ['Added', 'Subtracted', 'Ignored', 'Divided'], correctIndex: 1, explanation: 'Reduces calculated profit.' },
              { id: 'q7', question: 'Single Entry is used by ______ businesses.', options: ['Large', 'Small', 'Government', 'Banks'], correctIndex: 1, explanation: 'Small traders, lack of knowledge.' },
              { id: 'q8', question: 'Opening Capital = Opening Assets - Opening ______.', options: ['Capital', 'Liabilities', 'Profit', 'Drawings'], correctIndex: 1, explanation: 'Net worth calculation.' },
              { id: 'q9', question: 'Total Debtors Account helps find ______ sales.', options: ['Cash', 'Credit', 'Total', 'Net'], correctIndex: 1, explanation: 'When cash sales are known.' },
              { id: 'q10', question: 'Total Creditors Account helps find ______ purchases.', options: ['Cash', 'Credit', 'Total', 'Net'], correctIndex: 1, explanation: 'When cash purchases are known.' },
              { id: 'q11', question: 'Goods taken for personal use are called ______.', options: ['Sales', 'Drawings', 'Purchases', 'Stock'], correctIndex: 1, explanation: 'Personal withdrawal.' },
              { id: 'q12', question: 'Bad debts are ______ to Debtors Account.', options: ['Debited', 'Credited', 'Added', 'Ignored'], correctIndex: 1, explanation: 'Reduces debtors balance.' },
              { id: 'q13', question: 'Cost of Goods Sold = Opening Stock + Purchases - ______.', options: ['Sales', 'Closing Stock', 'Drawings', 'Expenses'], correctIndex: 1, explanation: 'COGS formula.' },
              { id: 'q14', question: 'Gross Profit = Sales - ______.', options: ['Expenses', 'COGS', 'Liabilities', 'Assets'], correctIndex: 1, explanation: 'Trading Account result.' },
              { id: 'q15', question: 'Net Profit = Gross Profit - ______.', options: ['Sales', 'Purchases', 'Expenses', 'Capital'], correctIndex: 2, explanation: 'P&L Account result.' },
              { id: 'q16', question: 'Discount allowed is ______ in P&L Account.', options: ['Credited', 'Debited', 'Ignored', 'Added to sales'], correctIndex: 1, explanation: 'It is an expense.' },
              { id: 'q17', question: 'Discount received is ______ in P&L Account.', options: ['Debited', 'Credited', 'Ignored', 'Added to purchases'], correctIndex: 1, explanation: 'It is an income.' },
              { id: 'q18', question: 'Returns Inward ______ sales.', options: ['Increases', 'Decreases', 'Does not affect', 'Doubles'], correctIndex: 1, explanation: 'Sales returns reduce net sales.' },
              { id: 'q19', question: 'Returns Outward ______ purchases.', options: ['Increases', 'Decreases', 'Does not affect', 'Doubles'], correctIndex: 1, explanation: 'Purchase returns reduce net purchases.' },
              { id: 'q20', question: 'Depreciation reduces ______.', options: ['Liabilities', 'Income', 'Fixed Assets', 'Cash'], correctIndex: 2, explanation: 'Wear and tear of assets.' },
              { id: 'q21', question: 'Statement of Affairs is prepared from ______ records.', options: ['Complete', 'Incomplete', 'Audited', 'Published'], correctIndex: 1, explanation: 'From available information.' },
              { id: 'q22', question: 'Net Worth is same as ______.', options: ['Profit', 'Loss', 'Capital', 'Liability'], correctIndex: 2, explanation: 'Assets minus Liabilities.' },
              { id: 'q23', question: 'Bills Receivable is ______ for the business.', options: ['Liability', 'Expense', 'Asset', 'Income'], correctIndex: 2, explanation: 'Amount receivable from customers.' },
              { id: 'q24', question: 'Bills Payable is ______ for the business.', options: ['Asset', 'Income', 'Liability', 'Expense'], correctIndex: 2, explanation: 'Amount payable to suppliers.' },
              { id: 'q25', question: 'Goods destroyed by fire are ______ loss.', options: ['Normal', 'Abnormal', 'Trading', 'Capital'], correctIndex: 1, explanation: 'Unexpected loss.' },
              { id: 'q26', question: 'Abnormal loss is debited to ______.', options: ['Trading A/c', 'P&L A/c', 'Balance Sheet', 'Cash Book'], correctIndex: 1, explanation: 'Not trading expense.' },
              { id: 'q27', question: 'Limitation of single entry is no ______.', options: ['Cash Book', 'Bank Account', 'Trial Balance', 'Ledger'], correctIndex: 2, explanation: 'Cannot verify accuracy.' },
              { id: 'q28', question: 'Single entry may lead to ______ evasion.', options: ['Rent', 'Tax', 'Salary', 'Interest'], correctIndex: 1, explanation: 'Hiding true profits.' },
              { id: 'q29', question: 'Conversion method prepares ______ accounts.', options: ['Memorandum', 'Total', 'Both A and B', 'Neither'], correctIndex: 2, explanation: 'Debtors and Creditors accounts.' },
              { id: 'q30', question: 'Real Accounts record ______.', options: ['Persons', 'Assets', 'Incomes', 'Expenses'], correctIndex: 1, explanation: 'Tangible and intangible assets.' }
            ],
            reels: [
               { id: 'r1', title: 'Single Entry', content: 'Only Personal accounts.\nNo Real, No Nominal.', color: getReelColor(0) },
               { id: 'r2', title: 'Statement of Affairs', content: 'Assets - Liabilities = Capital.\nLike Balance Sheet.', color: getReelColor(1) },
               { id: 'r3', title: 'Profit Formula', content: 'Closing Cap - Opening Cap\n+ Drawings\n- Additional Capital', color: getReelColor(2) },
               { id: 'r4', title: 'Why Single Entry?', content: 'Small business.\nLack of knowledge.\nSaves time/cost.', color: getReelColor(3) },
               { id: 'r5', title: 'Limitation', content: 'No Trial Balance.\nFraud may go undetected.', color: getReelColor(4) },
               { id: 'r6', title: 'Conversion', content: 'Opening Statement.\nClosing Statement.\nTrading & P&L.\nBalance Sheet.', color: getReelColor(5) },
               { id: 'r7', title: 'Opening Capital', content: 'Opening Assets\nminus\nOpening Liabilities.', color: getReelColor(6) },
               { id: 'r8', title: 'Closing Capital', content: 'Closing Assets\nminus\nClosing Liabilities.', color: getReelColor(7) },
               { id: 'r9', title: 'Net Worth', content: 'Same as Capital.\nAssets - Liabilities.', color: getReelColor(8) },
               { id: 'r10', title: 'Total Debtors A/c', content: 'Helps find Credit Sales.\nMemorandom account.', color: getReelColor(9) },
               { id: 'r11', title: 'Total Creditors A/c', content: 'Helps find Credit Purchases.\nMemorandom account.', color: getReelColor(0) },
               { id: 'r12', title: 'Drawings Effect', content: 'Added to profit.\nReduces capital.', color: getReelColor(1) },
               { id: 'r13', title: 'Additional Capital', content: 'Subtracted from profit.\nIncreases capital.', color: getReelColor(2) },
               { id: 'r14', title: 'COGS Formula', content: 'Opening Stock\n+ Purchases\n- Closing Stock', color: getReelColor(3) },
               { id: 'r15', title: 'Gross Profit', content: 'Sales minus COGS.\nTrading A/c result.', color: getReelColor(4) },
               { id: 'r16', title: 'Net Profit', content: 'Gross Profit\nminus Expenses.\nP&L A/c result.', color: getReelColor(5) },
               { id: 'r17', title: 'Bad Debts', content: 'Credit Debtors A/c.\nDebit P&L A/c.', color: getReelColor(6) },
               { id: 'r18', title: 'Discount Allowed', content: 'Expense.\nDebit P&L A/c.', color: getReelColor(7) },
               { id: 'r19', title: 'Discount Received', content: 'Income.\nCredit P&L A/c.', color: getReelColor(8) },
               { id: 'r20', title: 'Sales Return', content: 'Returns Inward.\nReduces Net Sales.', color: getReelColor(9) },
               { id: 'r21', title: 'Purchase Return', content: 'Returns Outward.\nReduces Net Purchases.', color: getReelColor(0) },
               { id: 'r22', title: 'Goods for Personal Use', content: 'Treated as Drawings.\nReduce Purchases.', color: getReelColor(1) },
               { id: 'r23', title: 'Abnormal Loss', content: 'Fire, theft, accident.\nDebit P&L A/c.', color: getReelColor(2) },
               { id: 'r24', title: 'Depreciation', content: 'Reduces fixed assets.\nWear and tear.', color: getReelColor(3) },
               { id: 'r25', title: 'Bills Receivable', content: 'Asset for business.\nAmount to receive.', color: getReelColor(4) },
               { id: 'r26', title: 'Bills Payable', content: 'Liability for business.\nAmount to pay.', color: getReelColor(5) },
               { id: 'r27', title: 'Tax Evasion Risk', content: 'Can hide true profits.\nNo verification possible.', color: getReelColor(6) },
               { id: 'r28', title: 'Personal Accounts', content: 'Debtors & Creditors.\nOnly these maintained.', color: getReelColor(7) },
               { id: 'r29', title: 'Real Accounts', content: 'Assets.\nNot maintained in SE.', color: getReelColor(8) },
               { id: 'r30', title: 'Nominal Accounts', content: 'Income & Expenses.\nNot maintained in SE.', color: getReelColor(9) }
            ]
          },
          { 
            id: 'bk2', 
            title: '2. Accounts of Not-for-Profit Concerns', 
            description: 'Receipts & Payments, Income & Expenditure.', 
            summary: '**NPO**: Clubs, Schools, Hospitals (No profit motive).\n**Receipts & Payments A/c**: Cash basis, All receipts.\n**Income & Expenditure A/c**: Accrual basis, Revenue items only.', 
            detailedNotes: '### 1. Meaning of NPO\nOrganizations formed for providing service to members/public, not for earning profit.\n**Examples**: Clubs, Schools, Hospitals, Libraries, NGOs.\n\n### 2. Receipts and Payments Account\n**Features**:\n* Summary of Cash Book.\n* All cash receipts and payments.\n* Capital and Revenue items both.\n* Opening balance = Cash/Bank (Dr).\n* Closing balance = Cash/Bank at end.\n\n### 3. Income and Expenditure Account\n**Features**:\n* Like Profit & Loss Account.\n* Only Revenue items.\n* Accrual basis (outstanding included).\n* Difference = Surplus (Cr) or Deficit (Dr).\n\n### 4. Balance Sheet\nShows Assets, Liabilities, and Capital Fund.\n**Capital Fund = Assets - Liabilities**\n\n### 5. Important Adjustments\n* Subscriptions: Add outstanding, deduct advance.\n* Depreciation on fixed assets.\n* Stock of consumables (stationery, medicines).\n* Life membership fees: Capital item → Balance Sheet.',
            flashcards: [
              { id: 'f1', front: 'Examples of NPO?', back: 'Clubs, Schools, Hospitals, Libraries, NGOs.' },
              { id: 'f2', front: 'Receipts & Payments A/c is based on?', back: 'Cash basis (Actual receipts and payments).' },
              { id: 'f3', front: 'Income & Expenditure A/c is based on?', back: 'Accrual basis (Outstanding included).' },
              { id: 'f4', front: 'Surplus in NPO is like?', back: 'Profit in business (Credit balance in I&E A/c).' },
              { id: 'f5', front: 'Life Membership Fee is?', back: 'Capital Receipt → Shown in Balance Sheet.' },
              { id: 'f6', front: 'NPO full form?', back: 'Not-for-Profit Organization.' },
              { id: 'f7', front: 'Capital Fund is?', back: 'Excess of Assets over Liabilities in NPO.' },
              { id: 'f8', front: 'Deficit in NPO means?', back: 'Excess of Expenditure over Income.' },
              { id: 'f9', front: 'Receipts & Payments includes?', back: 'Both Capital and Revenue items.' },
              { id: 'f10', front: 'Subscription formula?', back: 'Cash Received + Outstanding - Advance.' },
              { id: 'f11', front: 'Entrance fees (small amount) are?', back: 'Revenue income - credited to I&E.' },
              { id: 'f12', front: 'Entrance fees (large amount) are?', back: 'Capital receipt - credited to Capital Fund.' },
              { id: 'f13', front: 'Donation (small amount) are?', back: 'Revenue income - credited to I&E.' },
              { id: 'f14', front: 'Donation (large/specific purpose) are?', back: 'Capital receipt - shown in Balance Sheet.' },
              { id: 'f15', front: 'Legacy means?', back: 'Property/Money received by will - Capital receipt.' },
              { id: 'f16', front: 'Honorarium means?', back: 'Payment to part-time staff - Revenue expense.' },
              { id: 'f17', front: 'Endowment fund means?', back: 'Donation for specific purpose - Not income.' },
              { id: 'f18', front: 'Tournament fund is?', back: 'Fund for specific sports event - Capital item.' },
              { id: 'f19', front: 'Outstanding subscription is?', back: 'Asset - shown on asset side of Balance Sheet.' },
              { id: 'f20', front: 'Advance subscription is?', back: 'Liability - shown on liability side.' },
              { id: 'f21', front: 'Stock of stationery is?', back: 'Asset - unused stationery at year end.' },
              { id: 'f22', front: 'Depreciation on furniture is?', back: 'Expense - debited to I&E Account.' },
              { id: 'f23', front: 'Sale of old newspaper is?', back: 'Revenue income - credited to I&E.' },
              { id: 'f24', front: 'Locker rent received is?', back: 'Revenue income - credited to I&E.' },
              { id: 'f25', front: 'Building fund is?', back: 'Capital fund for construction - Balance Sheet.' },
              { id: 'f26', front: 'Match fund is?', back: 'Fund for sports matches - Capital item.' },
              { id: 'f27', front: 'Receipts side of R&P shows?', back: 'Opening balance, all cash receipts.' },
              { id: 'f28', front: 'Payments side of R&P shows?', back: 'All cash payments, closing balance.' },
              { id: 'f29', front: 'R&P Account balance shows?', back: 'Closing Cash and Bank balance.' },
              { id: 'f30', front: 'Prize fund is?', back: 'Fund for giving prizes - Specific purpose.' }
            ],
            mcqs: [
              { id: 'q1', question: 'NPO prepares ______ instead of P&L Account.', options: ['Trading A/c', 'Income & Expenditure A/c', 'Cash A/c', 'Capital A/c'], correctIndex: 1, explanation: 'Shows surplus or deficit.' },
              { id: 'q2', question: 'Receipts & Payments Account includes ______ items.', options: ['Only Revenue', 'Only Capital', 'Both Revenue & Capital', 'Neither'], correctIndex: 2, explanation: 'All cash items.' },
              { id: 'q3', question: 'Life membership fee is a ______ receipt.', options: ['Revenue', 'Capital', 'Nominal', 'Fictitious'], correctIndex: 1, explanation: 'Not recurring, capital in nature.' },
              { id: 'q4', question: 'NPO stands for ______.', options: ['Non Profit Organization', 'Not-for-Profit Organization', 'New Profit Organization', 'Net Profit Organization'], correctIndex: 1, explanation: 'Organizations not for profit.' },
              { id: 'q5', question: 'Surplus in NPO is excess of ______.', options: ['Expenditure over Income', 'Income over Expenditure', 'Assets over Liabilities', 'Liabilities over Assets'], correctIndex: 1, explanation: 'Like profit in business.' },
              { id: 'q6', question: 'Capital Fund is like ______ in business.', options: ['Profit', 'Loss', 'Capital', 'Liability'], correctIndex: 2, explanation: 'Owners equity equivalent.' },
              { id: 'q7', question: 'Legacy is a ______ receipt.', options: ['Revenue', 'Capital', 'Liability', 'Expense'], correctIndex: 1, explanation: 'Property by will.' },
              { id: 'q8', question: 'Outstanding subscription is ______.', options: ['Liability', 'Expense', 'Asset', 'Income'], correctIndex: 2, explanation: 'Amount to be received.' },
              { id: 'q9', question: 'Advance subscription is ______.', options: ['Asset', 'Expense', 'Liability', 'Income'], correctIndex: 2, explanation: 'Amount received in advance.' },
              { id: 'q10', question: 'Honorarium is paid to ______ staff.', options: ['Full-time', 'Part-time', 'Contract', 'Casual'], correctIndex: 1, explanation: 'Part-time services.' },
              { id: 'q11', question: 'Endowment fund is for ______ purpose.', options: ['General', 'Specific', 'Trading', 'Personal'], correctIndex: 1, explanation: 'Restricted use.' },
              { id: 'q12', question: 'Small donation is ______ income.', options: ['Capital', 'Revenue', 'Deferred', 'Suspense'], correctIndex: 1, explanation: 'Regular small donations.' },
              { id: 'q13', question: 'Large donation is ______ receipt.', options: ['Revenue', 'Capital', 'Trading', 'Operating'], correctIndex: 1, explanation: 'Significant one-time donation.' },
              { id: 'q14', question: 'Depreciation is ______ in I&E Account.', options: ['Credited', 'Debited', 'Ignored', 'Suspense'], correctIndex: 1, explanation: 'Expense item.' },
              { id: 'q15', question: 'Sale of old newspaper is ______ income.', options: ['Capital', 'Revenue', 'Deferred', 'Accrued'], correctIndex: 1, explanation: 'Regular income.' },
              { id: 'q16', question: 'Subscription = Cash + ______ - Advance.', options: ['Paid', 'Outstanding', 'Accrued', 'Deferred'], correctIndex: 1, explanation: 'To get actual income.' },
              { id: 'q17', question: 'R&P Account includes ______ items.', options: ['Only revenue', 'Only capital', 'Both revenue and capital', 'Neither'], correctIndex: 2, explanation: 'All cash transactions.' },
              { id: 'q18', question: 'Stock of stationery is shown as ______.', options: ['Liability', 'Expense', 'Asset', 'Income'], correctIndex: 2, explanation: 'Unused stationery.' },
              { id: 'q19', question: 'Entrance fee (small) is ______ income.', options: ['Capital', 'Revenue', 'Deferred', 'Suspense'], correctIndex: 1, explanation: 'Regular membership fee.' },
              { id: 'q20', question: 'Building fund appears in ______.', options: ['R&P Account', 'I&E Account', 'Balance Sheet', 'Trading Account'], correctIndex: 2, explanation: 'Capital item.' },
              { id: 'q21', question: 'Deficit means excess of ______.', options: ['Income over Expenditure', 'Expenditure over Income', 'Assets over Liabilities', 'Receipts over Payments'], correctIndex: 1, explanation: 'Like loss in business.' },
              { id: 'q22', question: 'Locker rent is ______ income.', options: ['Capital', 'Revenue', 'Deferred', 'Suspense'], correctIndex: 1, explanation: 'Regular income.' },
              { id: 'q23', question: 'Match fund is used for ______.', options: ['General expenses', 'Specific sports event', 'Building construction', 'Salary payment'], correctIndex: 1, explanation: 'Sports event fund.' },
              { id: 'q24', question: 'Surplus is added to ______.', options: ['Liabilities', 'Assets', 'Capital Fund', 'Income'], correctIndex: 2, explanation: 'Increases capital fund.' },
              { id: 'q25', question: 'Deficit is ______ from Capital Fund.', options: ['Added', 'Deducted', 'Multiplied', 'Ignored'], correctIndex: 1, explanation: 'Decreases capital fund.' },
              { id: 'q26', question: 'R&P opening balance is ______.', options: ['Closing cash', 'Opening cash', 'Total receipts', 'Total payments'], correctIndex: 1, explanation: 'Beginning cash balance.' },
              { id: 'q27', question: 'NPO prepares I&E Account on ______ basis.', options: ['Cash', 'Accrual', 'Mixed', 'Modified'], correctIndex: 1, explanation: 'Including outstanding items.' },
              { id: 'q28', question: 'Tournament expenses are ______ from Tournament Fund.', options: ['Added', 'Deducted', 'Transferred', 'Ignored'], correctIndex: 1, explanation: 'Specific use.' },
              { id: 'q29', question: 'Prize fund income is ______ to Prize Fund.', options: ['Debited', 'Credited', 'Deducted', 'Ignored'], correctIndex: 1, explanation: 'Increases the fund.' },
              { id: 'q30', question: 'Capital Fund = Assets - ______.', options: ['Income', 'Expenditure', 'Liabilities', 'Surplus'], correctIndex: 2, explanation: 'Opening capital fund.' }
            ],
            reels: [
               { id: 'r1', title: 'NPO', content: 'Not for Profit.\nClubs, Schools, NGOs.\nService motive.', color: getReelColor(6) },
               { id: 'r2', title: 'R&P Account', content: 'Cash basis.\nAll receipts & payments.\nCapital + Revenue items.', color: getReelColor(7) },
               { id: 'r3', title: 'I&E Account', content: 'Accrual basis.\nRevenue items only.\nLike P&L Account.', color: getReelColor(8) },
               { id: 'r4', title: 'Surplus', content: 'When Income > Expenditure.\nLike Profit.', color: getReelColor(9) },
               { id: 'r5', title: 'Deficit', content: 'When Expenditure > Income.\nLike Loss.', color: getReelColor(0) },
               { id: 'r6', title: 'Capital Fund', content: 'Assets - Liabilities.\nLike Capital in business.', color: getReelColor(1) },
               { id: 'r7', title: 'Subscription', content: 'Main income of NPO.\nAdd outstanding, deduct advance.', color: getReelColor(2) },
               { id: 'r8', title: 'Legacy', content: 'Property by Will.\nCapital Receipt.', color: getReelColor(3) },
               { id: 'r9', title: 'Life Membership', content: 'One-time payment.\nCapital Receipt.', color: getReelColor(4) },
               { id: 'r10', title: 'Entrance Fee', content: 'Small = Revenue.\nLarge = Capital.', color: getReelColor(5) },
               { id: 'r11', title: 'Donation', content: 'Small = Revenue.\nLarge/Specific = Capital.', color: getReelColor(6) },
               { id: 'r12', title: 'Honorarium', content: 'Payment to part-time.\nRevenue Expense.', color: getReelColor(7) },
               { id: 'r13', title: 'Endowment Fund', content: 'Specific purpose donation.\nNot general income.', color: getReelColor(8) },
               { id: 'r14', title: 'Outstanding Subscription', content: 'Asset.\nAmount to receive.', color: getReelColor(9) },
               { id: 'r15', title: 'Advance Subscription', content: 'Liability.\nReceived in advance.', color: getReelColor(0) },
               { id: 'r16', title: 'Stock of Stationery', content: 'Asset.\nUnused items.', color: getReelColor(1) },
               { id: 'r17', title: 'Depreciation', content: 'Expense.\nDebit I&E Account.', color: getReelColor(2) },
               { id: 'r18', title: 'Sale of Old Items', content: 'Old newspaper, furniture.\nRevenue Income.', color: getReelColor(3) },
               { id: 'r19', title: 'Locker Rent', content: 'Revenue Income.\nCredit I&E Account.', color: getReelColor(4) },
               { id: 'r20', title: 'Building Fund', content: 'For construction.\nCapital item.', color: getReelColor(5) },
               { id: 'r21', title: 'Tournament Fund', content: 'For sports events.\nSpecific fund.', color: getReelColor(6) },
               { id: 'r22', title: 'R&P Debit Side', content: 'Opening balance.\nAll receipts.', color: getReelColor(7) },
               { id: 'r23', title: 'R&P Credit Side', content: 'All payments.\nClosing balance.', color: getReelColor(8) },
               { id: 'r24', title: 'I&E Debit Side', content: 'All expenses.\nDepreciation.', color: getReelColor(9) },
               { id: 'r25', title: 'I&E Credit Side', content: 'All incomes.\nSubscription.', color: getReelColor(0) },
               { id: 'r26', title: 'Accrual Basis', content: 'Include outstanding.\nI&E Account uses.', color: getReelColor(1) },
               { id: 'r27', title: 'Cash Basis', content: 'Only cash transactions.\nR&P Account uses.', color: getReelColor(2) },
               { id: 'r28', title: 'Prize Fund', content: 'For prizes.\nSpecific purpose.', color: getReelColor(3) },
               { id: 'r29', title: 'Match Fund', content: 'For matches.\nSports events.', color: getReelColor(4) },
               { id: 'r30', title: 'NPO Examples', content: 'Clubs, Schools.\nHospitals, Trusts.', color: getReelColor(5) }
            ]
          },
          { 
            id: 'bk3', 
            title: '3. Partnership Accounts - Fundamentals', 
            description: 'Partnership Deed, Capital, P&L Appropriation.', 
            summary: '**Partnership**: 2+ persons carrying business.\n**Partnership Deed**: Written agreement.\n**P&L Appropriation**: Distribution of profits (Interest, Salary, Share).', 
            detailedNotes: '### 1. Meaning of Partnership\nRelation between persons who agree to share profits of business carried on by all or any of them acting for all. (Section 4, Partnership Act 1932)\n\n### 2. Partnership Deed\nWritten agreement containing:\n* Name of firm and partners.\n* Capital contribution.\n* Profit sharing ratio.\n* Interest on capital, drawings.\n* Salary/Commission to partners.\n\n### 3. In Absence of Deed\n* Profit sharing: Equal.\n* Interest on capital: Nil.\n* Interest on drawings: Nil.\n* Salary/Commission: Nil.\n* Interest on loan by partner: 6% p.a.\n\n### 4. Profit & Loss Appropriation Account\nShows how profits are distributed:\n1. Interest on Capital (Dr).\n2. Salary/Commission to partners (Dr).\n3. Interest on Drawings (Cr).\n4. Balance transferred to Capital/Current A/c.\n\n### 5. Capital Accounts\n**Fixed Capital Method**:\n* Capital A/c: Only capital transactions.\n* Current A/c: All other items.\n\n**Fluctuating Capital Method**:\n* All items in Capital A/c.\n* Capital keeps changing.',
            flashcards: [
              { id: 'f1', front: 'Minimum partners in a firm?', back: '2 (Maximum 50 for other businesses, 10 for banking).' },
              { id: 'f2', front: 'Interest on loan by partner (no deed)?', back: '6% per annum.' },
              { id: 'f3', front: 'Profit sharing ratio (no deed)?', back: 'Equal ratio.' },
              { id: 'f4', front: 'P&L Appropriation A/c shows?', back: 'Distribution of profits among partners.' },
              { id: 'f5', front: 'Partnership Act year?', back: 'Indian Partnership Act, 1932.' },
              { id: 'f6', front: 'Section 4 of Partnership Act defines?', back: 'Partnership - relation between persons sharing profits.' },
              { id: 'f7', front: 'Partnership Deed is also called?', back: 'Partnership Agreement or Articles of Partnership.' },
              { id: 'f8', front: 'Contents of Partnership Deed?', back: 'Name, Capital, PSR, Interest, Salary, Duration.' },
              { id: 'f9', front: 'Interest on Capital without deed?', back: 'Nil (Not allowed).' },
              { id: 'f10', front: 'Salary to partner without deed?', back: 'Nil (Not allowed).' },
              { id: 'f11', front: 'Commission to partner without deed?', back: 'Nil (Not allowed).' },
              { id: 'f12', front: 'Interest on Drawings without deed?', back: 'Nil (Not charged).' },
              { id: 'f13', front: 'Fixed Capital Method has?', back: 'Two accounts - Capital A/c and Current A/c.' },
              { id: 'f14', front: 'Fluctuating Capital Method has?', back: 'One account - Capital A/c only.' },
              { id: 'f15', front: 'Current A/c shows?', back: 'All adjustments except capital contribution.' },
              { id: 'f16', front: 'Interest on Capital is?', back: 'Appropriation of profit - Debit P&L Appropriation.' },
              { id: 'f17', front: 'Interest on Drawings is?', back: 'Addition to profit - Credit P&L Appropriation.' },
              { id: 'f18', front: 'Salary to partner is?', back: 'Appropriation of profit - Debit P&L Appropriation.' },
              { id: 'f19', front: 'Commission to partner is?', back: 'Appropriation of profit - Debit P&L Appropriation.' },
              { id: 'f20', front: 'Drawings reduce which account?', back: 'Capital A/c (Fluctuating) or Current A/c (Fixed).' },
              { id: 'f21', front: 'Interest on loan by partner is?', back: 'Charge against profit - Debit P&L A/c (not Appropriation).' },
              { id: 'f22', front: 'Guaranteed minimum means?', back: 'Minimum profit assured to partner.' },
              { id: 'f23', front: 'Who bears deficiency in guarantee?', back: 'Other partners in their profit sharing ratio.' },
              { id: 'f24', front: 'Joint Life Policy is?', back: 'Insurance on lives of all partners.' },
              { id: 'f25', front: 'Premium on JLP is?', back: 'Expense - Debit P&L A/c.' },
              { id: 'f26', front: 'Surrender value of JLP is?', back: 'Asset - shown in Balance Sheet.' },
              { id: 'f27', front: 'Goodwill of firm is?', back: 'Intangible Asset - value of reputation.' },
              { id: 'f28', front: 'Average Profit Method for Goodwill?', back: 'Goodwill = Average Profit × No. of years purchase.' },
              { id: 'f29', front: 'Super Profit Method for Goodwill?', back: 'Goodwill = Super Profit × No. of years purchase.' },
              { id: 'f30', front: 'Super Profit formula?', back: 'Actual Profit - Normal Profit.' }
            ],
            mcqs: [
              { id: 'q1', question: 'In absence of deed, profits are shared ______.', options: ['In capital ratio', 'Equally', 'Randomly', 'As decided by one partner'], correctIndex: 1, explanation: 'Equal sharing when no agreement.' },
              { id: 'q2', question: 'Interest on loan by partner without deed is ______%.', options: ['5', '6', '8', '10'], correctIndex: 1, explanation: 'As per Partnership Act.' },
              { id: 'q3', question: 'Fixed Capital Method has ______ accounts for partner.', options: ['One', 'Two', 'Three', 'Four'], correctIndex: 1, explanation: 'Capital A/c and Current A/c.' },
              { id: 'q4', question: 'Minimum number of partners is ______.', options: ['1', '2', '3', '5'], correctIndex: 1, explanation: 'At least 2 required.' },
              { id: 'q5', question: 'Maximum partners in banking business is ______.', options: ['10', '20', '50', '100'], correctIndex: 0, explanation: 'Special limit for banking.' },
              { id: 'q6', question: 'Maximum partners in other business is ______.', options: ['10', '20', '50', '100'], correctIndex: 2, explanation: 'General limit.' },
              { id: 'q7', question: 'Partnership Act was enacted in ______.', options: ['1932', '1956', '1872', '2013'], correctIndex: 0, explanation: 'Indian Partnership Act 1932.' },
              { id: 'q8', question: 'Interest on Capital without deed is ______.', options: ['6%', '8%', '10%', 'Nil'], correctIndex: 3, explanation: 'Not allowed without agreement.' },
              { id: 'q9', question: 'Salary to partner is ______ of profit.', options: ['Charge against', 'Appropriation', 'Addition to', 'Deduction from'], correctIndex: 1, explanation: 'Distributed from profit.' },
              { id: 'q10', question: 'Interest on loan is ______ of profit.', options: ['Appropriation', 'Charge against', 'Addition to', 'None'], correctIndex: 1, explanation: 'Must be paid even if loss.' },
              { id: 'q11', question: 'Interest on Drawings is ______ to P&L Appropriation.', options: ['Debited', 'Credited', 'Not recorded', 'Adjusted'], correctIndex: 1, explanation: 'Increases profit.' },
              { id: 'q12', question: 'In Fluctuating Capital, all items go to ______ A/c.', options: ['Current', 'Capital', 'Drawing', 'Loan'], correctIndex: 1, explanation: 'Single account.' },
              { id: 'q13', question: 'In Fixed Capital, drawings go to ______ A/c.', options: ['Capital', 'Current', 'Drawing', 'P&L'], correctIndex: 1, explanation: 'Current A/c in Fixed method.' },
              { id: 'q14', question: 'P&L Appropriation A/c is prepared ______ P&L A/c.', options: ['Before', 'After', 'Instead of', 'Along with'], correctIndex: 1, explanation: 'After profit is calculated.' },
              { id: 'q15', question: 'Guaranteed minimum profit is paid from ______.', options: ['Firm only', 'Other partners', 'Bank', 'Reserve'], correctIndex: 1, explanation: 'Other partners bear deficiency.' },
              { id: 'q16', question: 'Joint Life Policy premium is ______.', options: ['Asset', 'Liability', 'Expense', 'Income'], correctIndex: 2, explanation: 'Charged to P&L.' },
              { id: 'q17', question: 'Surrender value of JLP is shown as ______.', options: ['Liability', 'Expense', 'Asset', 'Income'], correctIndex: 2, explanation: 'Future benefit.' },
              { id: 'q18', question: 'Goodwill is ______ asset.', options: ['Tangible', 'Intangible', 'Fictitious', 'Current'], correctIndex: 1, explanation: 'Cannot be touched.' },
              { id: 'q19', question: 'Super Profit = Actual Profit - ______ Profit.', options: ['Average', 'Normal', 'Expected', 'Maximum'], correctIndex: 1, explanation: 'Excess over normal.' },
              { id: 'q20', question: 'Average Profit Method calculates Goodwill from ______ profits.', options: ['Current', 'Future', 'Past', 'Expected'], correctIndex: 2, explanation: 'Average of past years.' },
              { id: 'q21', question: 'Normal Profit = Capital Employed × ______.', options: ['Rate of Return', 'Interest Rate', 'Profit Rate', 'Normal Rate'], correctIndex: 3, explanation: 'Expected return on capital.' },
              { id: 'q22', question: 'Years of purchase means ______.', options: ['Age of business', 'Multiplier for goodwill', 'Time period', 'Partnership years'], correctIndex: 1, explanation: 'Number multiplied to profit.' },
              { id: 'q23', question: 'Capitalization Method: Goodwill = Super Profit × ______.', options: ['Years', '100/Normal Rate', 'Rate', 'Capital'], correctIndex: 1, explanation: 'Capitalized value.' },
              { id: 'q24', question: 'Partnership Deed is ______ document.', options: ['Oral', 'Written', 'Implied', 'Assumed'], correctIndex: 1, explanation: 'Written agreement.' },
              { id: 'q25', question: 'Interest on Capital is debited to ______.', options: ['P&L A/c', 'P&L Appropriation A/c', 'Capital A/c', 'Current A/c'], correctIndex: 1, explanation: 'Appropriation item.' },
              { id: 'q26', question: 'Interest on Drawings is credited to ______.', options: ['P&L A/c', 'P&L Appropriation A/c', 'Capital A/c', 'Current A/c'], correctIndex: 1, explanation: 'Appropriation item.' },
              { id: 'q27', question: 'Commission to partner is ______ appropriation.', options: ['First', 'Second', 'Last', 'No'], correctIndex: 0, explanation: 'Primary appropriation.' },
              { id: 'q28', question: 'Balance of P&L Appropriation is transferred in ______ ratio.', options: ['Capital', 'Equal', 'Profit Sharing', 'Sacrifice'], correctIndex: 2, explanation: 'As per agreement.' },
              { id: 'q29', question: 'Current A/c debit balance means ______.', options: ['Partner owes firm', 'Firm owes partner', 'Profit', 'Loss'], correctIndex: 0, explanation: 'Drawings exceed credits.' },
              { id: 'q30', question: 'Current A/c credit balance means ______.', options: ['Partner owes firm', 'Firm owes partner', 'Loss', 'Drawings'], correctIndex: 1, explanation: 'Credits exceed drawings.' }
            ],
            reels: [
               { id: 'r1', title: 'Partnership', content: 'Min 2 partners.\nMax 50 (10 for banking).', color: getReelColor(3) },
               { id: 'r2', title: 'Partnership Deed', content: 'Written agreement.\nContains all terms.', color: getReelColor(4) },
               { id: 'r3', title: 'No Deed Rules', content: 'Profit = Equal.\nInterest on Capital = Nil.\nSalary = Nil.', color: getReelColor(5) },
               { id: 'r4', title: 'P&L Appropriation', content: 'Distribution of profits.\nInterest, Salary, Share.', color: getReelColor(6) },
               { id: 'r5', title: 'Fixed Capital', content: '2 Accounts.\nCapital A/c + Current A/c.', color: getReelColor(7) },
               { id: 'r6', title: 'Fluctuating Capital', content: '1 Account only.\nCapital keeps changing.', color: getReelColor(8) },
               { id: 'r7', title: '6% Interest', content: 'On loan by partner.\nWhen no deed exists.', color: getReelColor(9) },
               { id: 'r8', title: 'Partnership Act', content: 'Year 1932.\nDefines partnership.', color: getReelColor(0) },
               { id: 'r9', title: 'Section 4', content: 'Defines Partnership.\nRelation between persons.', color: getReelColor(1) },
               { id: 'r10', title: 'Interest on Capital', content: 'Appropriation.\nDebit P&L Appropriation.', color: getReelColor(2) },
               { id: 'r11', title: 'Interest on Drawings', content: 'Addition to profit.\nCredit P&L Appropriation.', color: getReelColor(3) },
               { id: 'r12', title: 'Partner Salary', content: 'Appropriation.\nNot an expense.', color: getReelColor(4) },
               { id: 'r13', title: 'Partner Commission', content: 'Appropriation.\nNot an expense.', color: getReelColor(5) },
               { id: 'r14', title: 'Loan by Partner', content: 'Charge against profit.\n6% if no deed.', color: getReelColor(6) },
               { id: 'r15', title: 'Guaranteed Minimum', content: 'Minimum profit assured.\nDeficiency by others.', color: getReelColor(7) },
               { id: 'r16', title: 'Joint Life Policy', content: 'Insurance on partners.\nPremium = Expense.', color: getReelColor(8) },
               { id: 'r17', title: 'JLP Surrender Value', content: 'Asset.\nShown in Balance Sheet.', color: getReelColor(9) },
               { id: 'r18', title: 'Goodwill', content: 'Intangible Asset.\nValue of reputation.', color: getReelColor(0) },
               { id: 'r19', title: 'Average Profit Method', content: 'Avg Profit × Years.\nSimple calculation.', color: getReelColor(1) },
               { id: 'r20', title: 'Super Profit', content: 'Actual - Normal.\nExcess profit.', color: getReelColor(2) },
               { id: 'r21', title: 'Normal Profit', content: 'Capital × Normal Rate.\nExpected return.', color: getReelColor(3) },
               { id: 'r22', title: 'Capitalization', content: 'Super Profit × 100/Rate.\nGoodwill valuation.', color: getReelColor(4) },
               { id: 'r23', title: 'Years of Purchase', content: 'Multiplier for Goodwill.\nBased on industry.', color: getReelColor(5) },
               { id: 'r24', title: 'Capital A/c Dr Items', content: 'Drawings, Loss.\nInterest on Drawings.', color: getReelColor(6) },
               { id: 'r25', title: 'Capital A/c Cr Items', content: 'Capital, Profit.\nInterest, Salary.', color: getReelColor(7) },
               { id: 'r26', title: 'Current A/c Purpose', content: 'Fixed Capital Method.\nAll adjustments here.', color: getReelColor(8) },
               { id: 'r27', title: 'Current A/c Dr', content: 'Partner owes firm.\nDrawings > Credits.', color: getReelColor(9) },
               { id: 'r28', title: 'Current A/c Cr', content: 'Firm owes partner.\nCredits > Drawings.', color: getReelColor(0) },
               { id: 'r29', title: 'PSR', content: 'Profit Sharing Ratio.\nAs per deed.', color: getReelColor(1) },
               { id: 'r30', title: 'Equal PSR', content: 'When no deed.\nDefault rule.', color: getReelColor(2) }
            ]
          },
          { 
            id: 'bk4', 
            title: '4. Reconstitution of Partnership', 
            description: 'Admission, Retirement, Death of Partner.', 
            summary: '**Admission**: New partner joins.\n**Retirement**: Partner leaves.\n**Goodwill**: Compensation for reputation.\n**Revaluation**: Assets & Liabilities adjusted.', 
            detailedNotes: '### 1. Admission of Partner\n**Steps**:\n1. Calculate new profit sharing ratio.\n2. Calculate sacrificing ratio.\n3. Treatment of Goodwill.\n4. Revaluation of Assets & Liabilities.\n5. Distribution of accumulated profits.\n6. Adjust Capital (if required).\n\n**Sacrificing Ratio = Old Ratio - New Ratio**\n\n### 2. Retirement of Partner\n**Steps**:\n1. Calculate new profit sharing ratio.\n2. Calculate gaining ratio.\n3. Treatment of Goodwill.\n4. Revaluation of Assets & Liabilities.\n5. Settlement of retiring partner.\n\n**Gaining Ratio = New Ratio - Old Ratio**\n\n### 3. Death of Partner\nSimilar to retirement. Additional:\n* Share of profit till date of death.\n* Joint Life Policy (if any).\n\n### 4. Goodwill\n**Methods of Valuation**:\n* Average Profit Method.\n* Super Profit Method.\n* Capitalization Method.\n\n### 5. Revaluation Account\n* Increase in Asset = Credit.\n* Decrease in Asset = Debit.\n* Increase in Liability = Debit.\n* Decrease in Liability = Credit.\n* Profit/Loss distributed in Old Ratio.',
            flashcards: [
              { id: 'f1', front: 'Sacrificing Ratio?', back: 'Old Ratio - New Ratio (For Admission).' },
              { id: 'f2', front: 'Gaining Ratio?', back: 'New Ratio - Old Ratio (For Retirement).' },
              { id: 'f3', front: 'Revaluation profit distributed in?', back: 'Old Profit Sharing Ratio.' },
              { id: 'f4', front: 'Goodwill is?', back: 'Value of business reputation.' },
              { id: 'f5', front: 'Reconstitution means?', back: 'Change in partnership relation without dissolution.' },
              { id: 'f6', front: 'Events causing reconstitution?', back: 'Admission, Retirement, Death, Change in PSR.' },
              { id: 'f7', front: 'Admission means?', back: 'New partner joins the existing firm.' },
              { id: 'f8', front: 'Retirement means?', back: 'Existing partner leaves the firm.' },
              { id: 'f9', front: 'New partner brings?', back: 'Capital and Goodwill (Premium for Goodwill).' },
              { id: 'f10', front: 'Premium for Goodwill goes to?', back: 'Old partners in Sacrificing Ratio.' },
              { id: 'f11', front: 'Revaluation Account purpose?', back: 'Adjust Assets and Liabilities to current values.' },
              { id: 'f12', front: 'Increase in Asset value?', back: 'Credit to Revaluation A/c (Profit).' },
              { id: 'f13', front: 'Decrease in Asset value?', back: 'Debit to Revaluation A/c (Loss).' },
              { id: 'f14', front: 'Increase in Liability?', back: 'Debit to Revaluation A/c (Loss).' },
              { id: 'f15', front: 'Decrease in Liability?', back: 'Credit to Revaluation A/c (Profit).' },
              { id: 'f16', front: 'Revaluation profit/loss shared in?', back: 'Old Profit Sharing Ratio.' },
              { id: 'f17', front: 'Accumulated Profits on Admission?', back: 'Distributed among old partners in Old Ratio.' },
              { id: 'f18', front: 'Accumulated Losses on Admission?', back: 'Distributed among old partners in Old Ratio.' },
              { id: 'f19', front: 'Hidden Goodwill means?', back: 'Goodwill calculated from total capital of firm.' },
              { id: 'f20', front: 'Retiring partner gets?', back: 'Capital + Goodwill share + Revaluation share.' },
              { id: 'f21', front: 'Goodwill on retirement paid by?', back: 'Remaining partners in Gaining Ratio.' },
              { id: 'f22', front: 'Death of partner treated like?', back: 'Retirement with additional adjustments.' },
              { id: 'f23', front: 'Share of profit on death?', back: 'Calculated till date of death, credited to deceased.' },
              { id: 'f24', front: 'JLP proceeds on death?', back: 'Credited to all partners in Old Ratio OR deceased only.' },
              { id: 'f25', front: 'Deceased partner account settled with?', back: 'Executors or Legal Representatives.' },
              { id: 'f26', front: 'Memorandum Revaluation Account?', back: 'Temporary revaluation - reversed after adjustment.' },
              { id: 'f27', front: 'Adjustment entry for Goodwill?', back: 'Gaining partners Dr, Sacrificing partners Cr.' },
              { id: 'f28', front: 'New ratio on admission?', back: 'Calculated after new partner gets share.' },
              { id: 'f29', front: 'New ratio on retirement?', back: 'Calculated after retiring partner leaves.' },
              { id: 'f30', front: 'Capital adjustment means?', back: 'Adjusting capitals in new PSR if required.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Sacrificing ratio is calculated at time of ______.', options: ['Retirement', 'Admission', 'Dissolution', 'All'], correctIndex: 1, explanation: 'Old partners sacrifice for new partner.' },
              { id: 'q2', question: 'Revaluation profit is shared in ______ ratio.', options: ['New', 'Old', 'Equal', 'Capital'], correctIndex: 1, explanation: 'Belongs to old partners.' },
              { id: 'q3', question: 'Gaining ratio is New Ratio minus ______ Ratio.', options: ['Old', 'Sacrificing', 'Capital', 'Equal'], correctIndex: 0, explanation: 'What partners gain after retirement.' },
              { id: 'q4', question: 'Reconstitution does NOT include ______.', options: ['Admission', 'Retirement', 'Dissolution', 'Death'], correctIndex: 2, explanation: 'Dissolution ends the firm.' },
              { id: 'q5', question: 'Premium for Goodwill is shared in ______ ratio.', options: ['New', 'Old', 'Sacrificing', 'Equal'], correctIndex: 2, explanation: 'Compensation for sacrifice.' },
              { id: 'q6', question: 'Increase in Asset is ______ to Revaluation A/c.', options: ['Debited', 'Credited', 'Not recorded', 'Transferred'], correctIndex: 1, explanation: 'It is a gain/profit.' },
              { id: 'q7', question: 'Decrease in Liability is ______ to Revaluation A/c.', options: ['Debited', 'Credited', 'Not recorded', 'Transferred'], correctIndex: 1, explanation: 'It is a gain/profit.' },
              { id: 'q8', question: 'Increase in Liability is ______ to Revaluation A/c.', options: ['Credited', 'Debited', 'Not recorded', 'Transferred'], correctIndex: 1, explanation: 'It is a loss.' },
              { id: 'q9', question: 'Accumulated profits distributed in ______ ratio.', options: ['New', 'Old', 'Equal', 'Capital'], correctIndex: 1, explanation: 'Earned before change.' },
              { id: 'q10', question: 'Hidden Goodwill is calculated when ______.', options: ['Goodwill is given', 'Goodwill is not given', 'New partner brings less', 'Always'], correctIndex: 1, explanation: 'Calculated from total capital.' },
              { id: 'q11', question: 'Retiring partner\'s share of Goodwill paid by ______.', options: ['Firm', 'New partner', 'Gaining partners', 'All partners'], correctIndex: 2, explanation: 'Those who benefit.' },
              { id: 'q12', question: 'Gaining Ratio is used in ______.', options: ['Admission', 'Retirement', 'Both', 'Neither'], correctIndex: 1, explanation: 'When partner leaves.' },
              { id: 'q13', question: 'Death is similar to ______.', options: ['Admission', 'Retirement', 'Dissolution', 'Reconstitution'], correctIndex: 1, explanation: 'Same treatment mostly.' },
              { id: 'q14', question: 'Share of profit till death is ______ to deceased.', options: ['Debited', 'Credited', 'Not given', 'Deducted'], correctIndex: 1, explanation: 'Their rightful share.' },
              { id: 'q15', question: 'JLP claim on death goes to ______.', options: ['All partners', 'Only deceased', 'Continuing partners', 'Government'], correctIndex: 0, explanation: 'Usually all in old ratio.' },
              { id: 'q16', question: 'Executor represents ______ partner.', options: ['Continuing', 'Deceased', 'New', 'Retiring'], correctIndex: 1, explanation: 'Legal representative.' },
              { id: 'q17', question: 'Memorandum Revaluation is ______.', options: ['Permanent', 'Temporary', 'Not used', 'Final'], correctIndex: 1, explanation: 'Reversed after adjustment.' },
              { id: 'q18', question: 'Adjustment entry: Gaining partner is ______.', options: ['Credited', 'Debited', 'Not affected', 'Both'], correctIndex: 1, explanation: 'They pay for goodwill.' },
              { id: 'q19', question: 'Adjustment entry: Sacrificing partner is ______.', options: ['Debited', 'Credited', 'Not affected', 'Both'], correctIndex: 1, explanation: 'They receive compensation.' },
              { id: 'q20', question: 'Goodwill raised and written off affects ______.', options: ['Only old partners', 'Only new partner', 'All partners', 'No one'], correctIndex: 2, explanation: 'Raised in old, written off in new ratio.' },
              { id: 'q21', question: 'If Goodwill is retained, it appears in ______.', options: ['P&L A/c', 'Balance Sheet', 'Revaluation A/c', 'Trading A/c'], correctIndex: 1, explanation: 'As an asset.' },
              { id: 'q22', question: 'Reserves on Admission go to ______ partners.', options: ['New', 'Old', 'All', 'None'], correctIndex: 1, explanation: 'Earned before admission.' },
              { id: 'q23', question: 'Workmen Compensation Reserve excess is ______.', options: ['Capital profit', 'Revenue profit', 'Loss', 'Expense'], correctIndex: 0, explanation: 'Distributed in old ratio.' },
              { id: 'q24', question: 'Workmen Compensation Reserve short is ______.', options: ['Profit', 'Loss', 'Liability', 'Asset'], correctIndex: 1, explanation: 'Additional provision needed.' },
              { id: 'q25', question: 'Investment Fluctuation Reserve is for ______.', options: ['Stocks', 'Investments', 'Furniture', 'Goodwill'], correctIndex: 1, explanation: 'Market value changes.' },
              { id: 'q26', question: 'General Reserve distributed in ______ ratio.', options: ['New', 'Old', 'Capital', 'Equal'], correctIndex: 1, explanation: 'Accumulated before change.' },
              { id: 'q27', question: 'P&L A/c credit balance distributed in ______.', options: ['New', 'Old', 'Capital', 'Gaining'], correctIndex: 1, explanation: 'Earned before change.' },
              { id: 'q28', question: 'P&L A/c debit balance is ______.', options: ['Profit', 'Loss', 'Reserve', 'Fund'], correctIndex: 1, explanation: 'Accumulated loss.' },
              { id: 'q29', question: 'Capital adjustment uses ______ ratio.', options: ['Old', 'New', 'Sacrificing', 'Gaining'], correctIndex: 1, explanation: 'Based on new structure.' },
              { id: 'q30', question: 'After admission, old ratio ______.', options: ['Remains same', 'Changes', 'Doubles', 'Halves'], correctIndex: 1, explanation: 'New partner takes share.' }
            ],
            reels: [
               { id: 'r1', title: 'Admission', content: 'New partner joins.\nPays for Goodwill.\nGets share of profits.', color: getReelColor(0) },
               { id: 'r2', title: 'Retirement', content: 'Partner leaves.\nGets settlement.\nReceives Goodwill share.', color: getReelColor(1) },
               { id: 'r3', title: 'Sacrificing Ratio', content: 'Old Ratio - New Ratio.\nFor Admission.', color: getReelColor(2) },
               { id: 'r4', title: 'Gaining Ratio', content: 'New Ratio - Old Ratio.\nFor Retirement.', color: getReelColor(3) },
               { id: 'r5', title: 'Goodwill', content: 'Business reputation.\nValued by profits method.', color: getReelColor(4) },
               { id: 'r6', title: 'Revaluation A/c', content: 'Adjust Assets & Liabilities.\nProfit/Loss in Old Ratio.', color: getReelColor(5) },
               { id: 'r7', title: 'Reconstitution', content: 'Change in partnership.\nFirm continues.', color: getReelColor(6) },
               { id: 'r8', title: 'Asset Increase', content: 'Credit Revaluation.\nIt is a profit.', color: getReelColor(7) },
               { id: 'r9', title: 'Asset Decrease', content: 'Debit Revaluation.\nIt is a loss.', color: getReelColor(8) },
               { id: 'r10', title: 'Liability Increase', content: 'Debit Revaluation.\nIt is a loss.', color: getReelColor(9) },
               { id: 'r11', title: 'Liability Decrease', content: 'Credit Revaluation.\nIt is a profit.', color: getReelColor(0) },
               { id: 'r12', title: 'Premium for Goodwill', content: 'Paid by new partner.\nShared in Sacrificing Ratio.', color: getReelColor(1) },
               { id: 'r13', title: 'Hidden Goodwill', content: 'Calculate from capital.\nWhen not given directly.', color: getReelColor(2) },
               { id: 'r14', title: 'Accumulated Profits', content: 'Distributed to old partners.\nIn Old Ratio.', color: getReelColor(3) },
               { id: 'r15', title: 'General Reserve', content: 'Transferred to old partners.\nBefore admission.', color: getReelColor(4) },
               { id: 'r16', title: 'Death of Partner', content: 'Like retirement.\nAdditional adjustments.', color: getReelColor(5) },
               { id: 'r17', title: 'Executor', content: 'Legal representative.\nOf deceased partner.', color: getReelColor(6) },
               { id: 'r18', title: 'Share of Profit', content: 'Till date of death.\nCredited to deceased.', color: getReelColor(7) },
               { id: 'r19', title: 'JLP on Death', content: 'Policy claim received.\nDistributed to partners.', color: getReelColor(8) },
               { id: 'r20', title: 'Memorandum Revaluation', content: 'Temporary adjustment.\nReversed after.', color: getReelColor(9) },
               { id: 'r21', title: 'Adjustment Entry', content: 'Gaining Dr.\nSacrificing Cr.', color: getReelColor(0) },
               { id: 'r22', title: 'New Ratio', content: 'After admission/retirement.\nChanged from old.', color: getReelColor(1) },
               { id: 'r23', title: 'Capital Adjustment', content: 'Bring capitals in PSR.\nIf required.', color: getReelColor(2) },
               { id: 'r24', title: 'Reserves Transfer', content: 'To old partners.\nIn Old Ratio.', color: getReelColor(3) },
               { id: 'r25', title: 'Workmen Comp Reserve', content: 'Check if sufficient.\nExcess/Short adjustment.', color: getReelColor(4) },
               { id: 'r26', title: 'Investment Fluctuation', content: 'For market value change.\nOf investments.', color: getReelColor(5) },
               { id: 'r27', title: 'P&L Balance', content: 'Credit = Profit.\nDebit = Loss.', color: getReelColor(6) },
               { id: 'r28', title: 'Goodwill Raised', content: 'Credited to old partners.\nIn Old Ratio.', color: getReelColor(7) },
               { id: 'r29', title: 'Goodwill Written Off', content: 'Debited to all partners.\nIn New Ratio.', color: getReelColor(8) },
               { id: 'r30', title: 'Retiring Partner Settlement', content: 'Capital + Share of Goodwill.\n+ Revaluation profit.', color: getReelColor(9) }
            ]
          },
          { 
            id: 'bk5', 
            title: '5. Dissolution of Partnership Firm', 
            description: 'Dissolution vs Reconstitution, Realisation A/c.', 
            summary: '**Dissolution**: Firm closes down.\n**Realisation A/c**: Shows profit/loss on dissolution.\n**Order of Payment**: Outside creditors first.', 
            detailedNotes: '### 1. Meaning of Dissolution\nComplete closure of partnership business. All assets sold, liabilities paid, surplus distributed.\n\n### 2. Dissolution vs Reconstitution\n| Dissolution | Reconstitution |\n|-------------|----------------|\n| Business ends | Business continues |\n| All assets sold | Only adjustments |\n| Books closed | Books continue |\n\n### 3. Realisation Account\n* Transfer all Assets (except Cash) → Debit.\n* Transfer all Liabilities (except Partner Loans) → Credit.\n* Realisation expenses → Debit.\n* Amount realized from assets → Credit.\n* Profit/Loss transferred to Partner Capital A/c.\n\n### 4. Order of Payment (Garner vs Murray Rule)\n1. Realisation expenses.\n2. Outside creditors.\n3. Partners\' loans.\n4. Partners\' capital (in capital ratio).\n\n### 5. Treatment of Unrecorded Items\n* Unrecorded Asset → Credit Realisation A/c when sold.\n* Unrecorded Liability → Debit Realisation A/c when paid.',
            flashcards: [
              { id: 'f1', front: 'Dissolution means?', back: 'Complete closure of partnership firm.' },
              { id: 'f2', front: 'Realisation Account shows?', back: 'Profit or Loss on dissolution.' },
              { id: 'f3', front: 'First payment on dissolution?', back: 'Outside creditors (after realisation expenses).' },
              { id: 'f4', front: 'Garner vs Murray Rule applies when?', back: 'Partner is insolvent and has debit capital balance.' },
              { id: 'f5', front: 'Dissolution differs from Reconstitution in?', back: 'Dissolution ends business, Reconstitution continues it.' },
              { id: 'f6', front: 'All assets transferred to?', back: 'Realisation Account (Debit side).' },
              { id: 'f7', front: 'All liabilities transferred to?', back: 'Realisation Account (Credit side).' },
              { id: 'f8', front: 'Which liabilities not transferred?', back: 'Partner Loans - kept separate.' },
              { id: 'f9', front: 'Realisation expenses are?', back: 'Debited to Realisation Account.' },
              { id: 'f10', front: 'Cash from sale of assets?', back: 'Credited to Realisation Account.' },
              { id: 'f11', front: 'Realisation profit distributed in?', back: 'Profit Sharing Ratio.' },
              { id: 'f12', front: 'Realisation loss distributed in?', back: 'Profit Sharing Ratio.' },
              { id: 'f13', front: 'Order of payment on dissolution?', back: 'Outside Creditors → Partner Loans → Partner Capital.' },
              { id: 'f14', front: 'Insolvent partner means?', back: 'Partner who cannot pay his debts.' },
              { id: 'f15', front: 'Deficiency of insolvent partner?', back: 'Borne by solvent partners (Garner vs Murray).' },
              { id: 'f16', front: 'Solvent partners bear loss in?', back: 'Capital Ratio (not PSR) under Garner vs Murray.' },
              { id: 'f17', front: 'Unrecorded asset sold?', back: 'Credit Realisation Account (profit).' },
              { id: 'f18', front: 'Unrecorded liability paid?', back: 'Debit Realisation Account (expense).' },
              { id: 'f19', front: 'Asset taken by partner?', back: 'Credit Realisation, Debit Partner Capital.' },
              { id: 'f20', front: 'Liability taken by partner?', back: 'Debit Realisation, Credit Partner Capital.' },
              { id: 'f21', front: 'Realisation Account balance shows?', back: 'Profit (Credit) or Loss (Debit).' },
              { id: 'f22', front: 'Cash A/c shows?', back: 'All cash transactions during dissolution.' },
              { id: 'f23', front: 'Partner Capital A/c closing balance?', back: 'Should be Nil after full settlement.' },
              { id: 'f24', front: 'Partner Loan A/c settled?', back: 'After outside creditors, before capital.' },
              { id: 'f25', front: 'Goodwill on dissolution?', back: 'Debited to Realisation (if in books).' },
              { id: 'f26', front: 'Accumulated depreciation?', back: 'Credited with related asset to Realisation.' },
              { id: 'f27', front: 'Provision for bad debts?', back: 'Credited to Realisation Account.' },
              { id: 'f28', front: 'Workmen Compensation Fund?', back: 'Credited to Realisation (liability).' },
              { id: 'f29', front: 'Investment Fluctuation Fund?', back: 'Credited with investments to Realisation.' },
              { id: 'f30', front: 'General Reserve on dissolution?', back: 'Already transferred before, or to Realisation.' }
            ],
            mcqs: [
              { id: 'q1', question: 'On dissolution, assets are transferred to ______ A/c.', options: ['Capital', 'Realisation', 'Cash', 'P&L'], correctIndex: 1, explanation: 'All assets go to Realisation A/c.' },
              { id: 'q2', question: 'First priority in payment is to ______.', options: ['Partners', 'Outside Creditors', 'Banks', 'Government'], correctIndex: 1, explanation: 'External parties first.' },
              { id: 'q3', question: 'Realisation expenses are ______ to Realisation A/c.', options: ['Credited', 'Debited', 'Not recorded', 'Ignored'], correctIndex: 1, explanation: 'Expense = Debit.' },
              { id: 'q4', question: 'Dissolution means ______ of firm.', options: ['Reconstitution', 'Continuation', 'Closure', 'Expansion'], correctIndex: 2, explanation: 'Business ends completely.' },
              { id: 'q5', question: 'Garner vs Murray deals with ______ partner.', options: ['New', 'Retiring', 'Insolvent', 'Deceased'], correctIndex: 2, explanation: 'Partner who cannot pay.' },
              { id: 'q6', question: 'Under Garner vs Murray, loss is borne in ______ ratio.', options: ['PSR', 'Capital', 'Equal', 'Gaining'], correctIndex: 1, explanation: 'Capital ratio of solvent partners.' },
              { id: 'q7', question: 'Realisation profit is transferred in ______ ratio.', options: ['Capital', 'PSR', 'Equal', 'New'], correctIndex: 1, explanation: 'Profit Sharing Ratio.' },
              { id: 'q8', question: 'Unrecorded asset sold is ______ to Realisation.', options: ['Debited', 'Credited', 'Not recorded', 'Adjusted'], correctIndex: 1, explanation: 'Cash comes, so Credit.' },
              { id: 'q9', question: 'Unrecorded liability paid is ______ to Realisation.', options: ['Credited', 'Debited', 'Not recorded', 'Adjusted'], correctIndex: 1, explanation: 'Cash goes, so Debit.' },
              { id: 'q10', question: 'Asset taken by partner ______ his Capital.', options: ['Increases', 'Decreases', 'No effect', 'Doubles'], correctIndex: 1, explanation: 'Debited to Capital A/c.' },
              { id: 'q11', question: 'Liability taken by partner ______ his Capital.', options: ['Decreases', 'Increases', 'No effect', 'Halves'], correctIndex: 1, explanation: 'Credited to Capital A/c.' },
              { id: 'q12', question: 'Partner Loan is paid ______ partner capital.', options: ['After', 'Before', 'Along with', 'Never'], correctIndex: 1, explanation: 'Third priority after creditors.' },
              { id: 'q13', question: 'Cash/Bank A/c is ______ transferred to Realisation.', options: ['Always', 'Never', 'Sometimes', 'Optionally'], correctIndex: 1, explanation: 'Cash stays separate.' },
              { id: 'q14', question: 'Provision for Bad Debts is ______ to Realisation.', options: ['Debited', 'Credited', 'Not transferred', 'Adjusted'], correctIndex: 1, explanation: 'It is a liability item.' },
              { id: 'q15', question: 'Goodwill (in books) is ______ to Realisation.', options: ['Credited', 'Debited', 'Not transferred', 'Ignored'], correctIndex: 1, explanation: 'It is an asset.' },
              { id: 'q16', question: 'Accumulated Depreciation is ______ to Realisation.', options: ['Debited', 'Credited', 'Not transferred', 'Adjusted'], correctIndex: 1, explanation: 'Contra asset, credit side.' },
              { id: 'q17', question: 'Workmen Compensation Fund is ______.', options: ['Asset', 'Liability', 'Expense', 'Income'], correctIndex: 1, explanation: 'Credit to Realisation.' },
              { id: 'q18', question: 'Final balance of Capital A/c should be ______.', options: ['Debit', 'Credit', 'Nil', 'Positive'], correctIndex: 2, explanation: 'Fully settled.' },
              { id: 'q19', question: 'Deficiency means partner has ______ balance.', options: ['Credit', 'Debit', 'Nil', 'Positive'], correctIndex: 1, explanation: 'Owes money to firm.' },
              { id: 'q20', question: 'Solvent partner means one who ______.', options: ['Cannot pay', 'Can pay', 'Is retiring', 'Is new'], correctIndex: 1, explanation: 'Has capacity to pay.' },
              { id: 'q21', question: 'Realisation A/c is a ______ account.', options: ['Real', 'Personal', 'Nominal', 'Temporary'], correctIndex: 3, explanation: 'Prepared only for dissolution.' },
              { id: 'q22', question: 'After dissolution, books are ______.', options: ['Continued', 'Closed', 'Transferred', 'Sold'], correctIndex: 1, explanation: 'No further entries.' },
              { id: 'q23', question: 'Creditors paid in ______ on dissolution.', options: ['Instalments', 'Full', 'Proportionate', 'Never'], correctIndex: 1, explanation: 'First priority - full payment.' },
              { id: 'q24', question: 'Investment sold is ______ to Realisation.', options: ['Debited', 'Credited', 'Both', 'Neither'], correctIndex: 2, explanation: 'Transferred then sale proceeds credited.' },
              { id: 'q25', question: 'Building sold above book value means ______.', options: ['Loss', 'Profit', 'No effect', 'Error'], correctIndex: 1, explanation: 'More cash received.' },
              { id: 'q26', question: 'Furniture sold below book value means ______.', options: ['Profit', 'Loss', 'No effect', 'Error'], correctIndex: 1, explanation: 'Less cash received.' },
              { id: 'q27', question: 'Realisation A/c credit balance means ______.', options: ['Loss', 'Profit', 'Error', 'No effect'], correctIndex: 1, explanation: 'Assets realized more.' },
              { id: 'q28', question: 'Realisation A/c debit balance means ______.', options: ['Profit', 'Loss', 'Error', 'No effect'], correctIndex: 1, explanation: 'Assets realized less.' },
              { id: 'q29', question: 'Expenses paid by partner is ______ to his Capital.', options: ['Debited', 'Credited', 'Not recorded', 'Adjusted'], correctIndex: 1, explanation: 'He gets reimbursed.' },
              { id: 'q30', question: 'Dissolution is ______ than Reconstitution.', options: ['Less complex', 'More complex', 'Same', 'Simpler'], correctIndex: 1, explanation: 'Complete winding up required.' }
            ],
            reels: [
               { id: 'r1', title: 'Dissolution', content: 'Firm closes down.\nAll assets sold.\nLiabilities paid.', color: getReelColor(6) },
               { id: 'r2', title: 'Realisation A/c', content: 'Assets → Debit.\nLiabilities → Credit.\nProfit/Loss to Capital.', color: getReelColor(7) },
               { id: 'r3', title: 'Payment Order', content: '1. Outside Creditors.\n2. Partner Loans.\n3. Partner Capital.', color: getReelColor(8) },
               { id: 'r4', title: 'vs Reconstitution', content: 'Dissolution = End.\nReconstitution = Continue.', color: getReelColor(9) },
               { id: 'r5', title: 'Garner vs Murray', content: 'When partner is insolvent.\nLoss borne by solvent partners.', color: getReelColor(0) },
               { id: 'r6', title: 'Assets Transfer', content: 'All assets (except cash).\nDebit Realisation.', color: getReelColor(1) },
               { id: 'r7', title: 'Liabilities Transfer', content: 'All liabilities.\nCredit Realisation.', color: getReelColor(2) },
               { id: 'r8', title: 'Except Partner Loan', content: 'Partner Loan separate.\nPaid after creditors.', color: getReelColor(3) },
               { id: 'r9', title: 'Realisation Expenses', content: 'Debit Realisation.\nCash goes out.', color: getReelColor(4) },
               { id: 'r10', title: 'Sale of Assets', content: 'Credit Realisation.\nCash comes in.', color: getReelColor(5) },
               { id: 'r11', title: 'Profit Distribution', content: 'In PSR.\nCredit Capital A/c.', color: getReelColor(6) },
               { id: 'r12', title: 'Loss Distribution', content: 'In PSR.\nDebit Capital A/c.', color: getReelColor(7) },
               { id: 'r13', title: 'Insolvent Partner', content: 'Cannot pay dues.\nDeficiency in Capital.', color: getReelColor(8) },
               { id: 'r14', title: 'Capital Ratio', content: 'Used in Garner vs Murray.\nNot PSR.', color: getReelColor(9) },
               { id: 'r15', title: 'Unrecorded Asset', content: 'When sold.\nCredit Realisation.', color: getReelColor(0) },
               { id: 'r16', title: 'Unrecorded Liability', content: 'When paid.\nDebit Realisation.', color: getReelColor(1) },
               { id: 'r17', title: 'Asset Taken by Partner', content: 'Credit Realisation.\nDebit Capital.', color: getReelColor(2) },
               { id: 'r18', title: 'Liability Taken by Partner', content: 'Debit Realisation.\nCredit Capital.', color: getReelColor(3) },
               { id: 'r19', title: 'Goodwill', content: 'If in books.\nDebit Realisation.', color: getReelColor(4) },
               { id: 'r20', title: 'Provision for BD', content: 'Liability.\nCredit Realisation.', color: getReelColor(5) },
               { id: 'r21', title: 'Accumulated Depreciation', content: 'Credit Realisation.\nWith related asset.', color: getReelColor(6) },
               { id: 'r22', title: 'Final Capital Balance', content: 'Should be Nil.\nFully settled.', color: getReelColor(7) },
               { id: 'r23', title: 'Deficiency', content: 'Debit Capital balance.\nPartner owes firm.', color: getReelColor(8) },
               { id: 'r24', title: 'Solvent Partner', content: 'Can pay dues.\nBears insolvent loss.', color: getReelColor(9) },
               { id: 'r25', title: 'Cash A/c', content: 'Not to Realisation.\nSeparate account.', color: getReelColor(0) },
               { id: 'r26', title: 'Books Closed', content: 'After dissolution.\nNo more entries.', color: getReelColor(1) },
               { id: 'r27', title: 'Creditors First', content: 'Full payment.\nBefore partners.', color: getReelColor(2) },
               { id: 'r28', title: 'Realisation Profit', content: 'Credit balance.\nAssets sold at profit.', color: getReelColor(3) },
               { id: 'r29', title: 'Realisation Loss', content: 'Debit balance.\nAssets sold at loss.', color: getReelColor(4) },
               { id: 'r30', title: 'Complete Winding Up', content: 'All settled.\nFirm ceases to exist.', color: getReelColor(5) }
            ]
          }
        ],
        previousPapers: []
      }
    ]
  },
  [Stream.ARTS]: { 
    id: Stream.ARTS, 
    subjects: [
      ENGLISH_SUBJECT,
      ECONOMICS_SUBJECT,
      {
        id: 'his', 
        name: 'History', 
        icon: 'BookOpen', 
        color: 'bg-orange-500', 
        syllabus: '1. Renaissance\n2. Reformation\n3. Industrial Revolution\n4. American Revolution\n5. French Revolution\n6. Imperialism and Colonialism\n7. World War I\n8. World War II\n9. Cold War\n10. Emergence of Third World',
        paperPattern: '### History Paper Pattern (80 Marks)\n\n* **Q.1 Multiple Choice (20 Marks)**\n* **Q.2 Answer in Brief (12 Marks)**\n* **Q.3 Short Notes (12 Marks)**\n* **Q.4 Long Answers (16 Marks)**\n* **Q.5 Map Work (8 Marks)**\n* **Q.6 Project (Internal - 20 Marks)**',
        previousPapers: [], 
        chapters: [
          {
            id: 'his1',
            title: '1. Renaissance',
            description: 'Rebirth of learning in Europe (14th-17th century).',
            summary: '**Renaissance** = "Rebirth"\n**Period**: 14th-17th century\n**Origin**: Italy (Florence)\n**Key Features**: Humanism, Art, Science, Literature\n**Impact**: End of Dark Ages, Beginning of Modern Era',
            detailedNotes: '### 1. Meaning of Renaissance\n* Renaissance means "Rebirth" or "Revival"\n* Revival of Greek and Roman learning\n* Transition from Medieval to Modern Era\n* Started in Italy, spread to Europe\n\n### 2. Causes of Renaissance\n1. **Fall of Constantinople (1453)**: Greek scholars fled to Italy with manuscripts\n2. **Crusades**: Exposed Europeans to Eastern knowledge\n3. **Printing Press**: Gutenberg\'s invention spread ideas\n4. **Geographical Discoveries**: New trade routes, wealth\n5. **Rise of Wealthy Merchants**: Patronized art and learning\n6. **Decline of Feudalism**: New social class emerged\n\n### 3. Why Italy?\n* Central location for trade\n* Wealthy city-states (Florence, Venice, Rome)\n* Roman heritage and ruins\n* Medici family patronage\n\n### 4. Main Features\n**A. Humanism**\n* Focus on human beings, not just religion\n* "Man is the measure of all things"\n* Study of classical literature\n\n**B. Art & Architecture**\n* Perspective in painting\n* Realistic human figures\n* Great artists: Leonardo, Michelangelo, Raphael\n\n**C. Science**\n* Observation and experiment\n* Copernicus: Heliocentric theory\n* Galileo: Telescope, laws of motion\n\n### 5. Key Personalities\n* **Leonardo da Vinci**: Mona Lisa, The Last Supper (Painter, Scientist, Inventor)\n* **Michelangelo**: Sistine Chapel, David statue\n* **Raphael**: School of Athens\n* **Dante**: Divine Comedy\n* **Petrarch**: Father of Humanism\n* **Machiavelli**: The Prince (Political philosophy)\n* **Erasmus**: Praise of Folly\n\n### 6. Impact of Renaissance\n* End of blind faith\n* Beginning of scientific inquiry\n* Growth of vernacular literature\n* Rise of nation-states\n* Foundation for Reformation',
            flashcards: [
              { id: 'f1', front: 'What does Renaissance mean?', back: 'Rebirth - Revival of Greek and Roman learning.' },
              { id: 'f2', front: 'Where did Renaissance begin?', back: 'Italy (Florence).' },
              { id: 'f3', front: 'When was the Renaissance period?', back: '14th to 17th century.' },
              { id: 'f4', front: 'Who invented the Printing Press?', back: 'Johannes Gutenberg (1440).' },
              { id: 'f5', front: 'Who is called the Father of Humanism?', back: 'Petrarch.' },
              { id: 'f6', front: 'Who painted the Mona Lisa?', back: 'Leonardo da Vinci.' },
              { id: 'f7', front: 'Who painted the Sistine Chapel ceiling?', back: 'Michelangelo.' },
              { id: 'f8', front: 'What did Copernicus propose?', back: 'Heliocentric theory - Sun is the center of universe.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Renaissance started in which country?', options: ['France', 'England', 'Italy', 'Germany'], correctIndex: 2, explanation: 'Italy, specifically Florence, was the birthplace of Renaissance.' },
              { id: 'q2', question: '"Mona Lisa" was painted by:', options: ['Michelangelo', 'Raphael', 'Leonardo da Vinci', 'Botticelli'], correctIndex: 2, explanation: 'Leonardo da Vinci painted the famous Mona Lisa.' },
              { id: 'q3', question: 'The Printing Press was invented by:', options: ['Caxton', 'Gutenberg', 'Erasmus', 'Luther'], correctIndex: 1, explanation: 'Johannes Gutenberg invented the movable type printing press around 1440.' },
              { id: 'q4', question: 'Which event in 1453 helped spread Renaissance?', options: ['Crusades end', 'Fall of Constantinople', 'Discovery of America', 'Reformation'], correctIndex: 1, explanation: 'Greek scholars fled Constantinople bringing manuscripts to Italy.' },
              { id: 'q5', question: 'Who wrote "The Prince"?', options: ['Dante', 'Petrarch', 'Machiavelli', 'Erasmus'], correctIndex: 2, explanation: 'Machiavelli wrote The Prince, a book on political philosophy.' }
            ],
            reels: [
              { id: 'r1', title: 'Renaissance', content: '"Rebirth" of learning.\n14th-17th century.\nStarted in Italy.', color: getReelColor(0) },
              { id: 'r2', title: 'Why Italy?', content: 'Trade center.\nWealthy merchants.\nRoman heritage.', color: getReelColor(1) },
              { id: 'r3', title: 'Humanism', content: 'Focus on HUMANS.\nNot just religion.\n"Man is the measure of all things."', color: getReelColor(2) },
              { id: 'r4', title: 'Printing Press', content: 'Gutenberg - 1440.\nBooks became cheap.\nIdeas spread fast!', color: getReelColor(3) },
              { id: 'r5', title: 'Leonardo', content: 'Painter + Scientist.\nMona Lisa.\nThe Last Supper.', color: getReelColor(4) },
              { id: 'r6', title: 'Michelangelo', content: 'Sistine Chapel ceiling.\nDavid statue.\nMaster sculptor!', color: getReelColor(5) },
              { id: 'r7', title: 'Constantinople', content: 'Fell in 1453.\nScholars fled to Italy.\nBrought Greek knowledge.', color: getReelColor(6) },
              { id: 'r8', title: 'Impact', content: 'End of blind faith.\nStart of science.\nModern Era begins!', color: getReelColor(7) }
            ]
          },
          {
            id: 'his2',
            title: '2. Reformation',
            description: 'Religious movement against Catholic Church (16th century).',
            summary: '**Reformation**: Religious reform movement\n**Period**: 16th century\n**Leader**: Martin Luther (1517)\n**Cause**: Corruption in Church, Sale of Indulgences\n**Result**: Rise of Protestantism',
            detailedNotes: '### 1. Meaning of Reformation\n* Religious movement to reform the Catholic Church\n* Broke the unity of Western Christianity\n* Led to creation of Protestant churches\n* Started by Martin Luther in 1517\n\n### 2. Causes of Reformation\n**A. Religious Causes**\n* Sale of Indulgences (pardons for sins)\n* Corruption in Church\n* Simony (buying/selling religious positions)\n* Nepotism (favoring relatives)\n* Immorality of clergy\n\n**B. Political Causes**\n* Kings wanted independence from Pope\n* Church interference in state matters\n* Heavy taxation by Church\n\n**C. Economic Causes**\n* Church\'s vast wealth\n* Peter\'s Pence (tax to Pope)\n* Confiscation of property\n\n**D. Intellectual Causes**\n* Renaissance promoted questioning\n* Printing Press spread new ideas\n* Translation of Bible into local languages\n\n### 3. Martin Luther (Germany)\n* Augustinian monk and professor\n* **95 Theses (1517)**: Criticism of indulgences\n* Nailed to church door in Wittenberg\n* Excommunicated by Pope\n* Protected by German princes\n* Founded Lutheran Church\n* Beliefs: "Faith alone, Scripture alone, Grace alone"\n\n### 4. Other Reformers\n* **John Calvin (Switzerland)**: Calvinism, Predestination\n* **Zwingli (Switzerland)**: Reformed Church\n* **Henry VIII (England)**: Anglican Church (Act of Supremacy 1534)\n* **John Knox (Scotland)**: Presbyterian Church\n\n### 5. Counter-Reformation\n* Catholic Church\'s response\n* Council of Trent (1545-1563)\n* Society of Jesus (Jesuits) by Ignatius Loyola\n* Inquisition strengthened\n\n### 6. Impact of Reformation\n* Division of Christianity (Catholic vs Protestant)\n* Rise of nation-states\n* Growth of vernacular languages\n* Religious wars in Europe\n* Education for all promoted',
            flashcards: [
              { id: 'f1', front: 'Who started the Reformation?', back: 'Martin Luther in 1517.' },
              { id: 'f2', front: 'What are the 95 Theses?', back: 'Martin Luther\'s criticism of Church practices, especially sale of indulgences.' },
              { id: 'f3', front: 'What are Indulgences?', back: 'Pardons for sins sold by the Church for money.' },
              { id: 'f4', front: 'Who founded the Anglican Church?', back: 'Henry VIII of England (Act of Supremacy 1534).' },
              { id: 'f5', front: 'What is Counter-Reformation?', back: 'Catholic Church\'s response to reform itself and counter Protestantism.' },
              { id: 'f6', front: 'Who founded the Jesuits?', back: 'Ignatius Loyola.' },
              { id: 'f7', front: 'What did Calvin believe in?', back: 'Predestination - God has already decided who will be saved.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Martin Luther nailed 95 Theses in which year?', options: ['1415', '1517', '1534', '1545'], correctIndex: 1, explanation: '1517 is considered the start of Reformation.' },
              { id: 'q2', question: 'Sale of ______ was criticized by Luther.', options: ['Land', 'Books', 'Indulgences', 'Weapons'], correctIndex: 2, explanation: 'Indulgences were pardons for sins sold for money.' },
              { id: 'q3', question: 'Anglican Church was established by:', options: ['Luther', 'Calvin', 'Henry VIII', 'Zwingli'], correctIndex: 2, explanation: 'Henry VIII broke from Rome and established the Church of England.' },
              { id: 'q4', question: 'Council of Trent was part of:', options: ['Reformation', 'Counter-Reformation', 'Renaissance', 'Revolution'], correctIndex: 1, explanation: 'It was Catholic Church\'s response to Reformation.' },
              { id: 'q5', question: 'Society of Jesus (Jesuits) was founded by:', options: ['Calvin', 'Luther', 'Ignatius Loyola', 'Henry VIII'], correctIndex: 2, explanation: 'Ignatius Loyola founded the Jesuits in 1540.' }
            ],
            reels: [
              { id: 'r1', title: 'Reformation', content: 'Religious reform.\n16th century.\nAgainst Catholic Church.', color: getReelColor(0) },
              { id: 'r2', title: 'Martin Luther', content: '95 Theses - 1517.\nCriticized indulgences.\nFounder of Lutheranism.', color: getReelColor(1) },
              { id: 'r3', title: 'Indulgences', content: 'Pardons for sins.\nSold for money.\n"Pay and your sins are forgiven!"', color: getReelColor(2) },
              { id: 'r4', title: 'Luther\'s Beliefs', content: 'Faith ALONE.\nScripture ALONE.\nGrace ALONE.', color: getReelColor(3) },
              { id: 'r5', title: 'Henry VIII', content: 'King of England.\nWanted divorce.\nCreated Anglican Church!', color: getReelColor(4) },
              { id: 'r6', title: 'Calvin', content: 'Swiss reformer.\nPredestination.\nGod already decided!', color: getReelColor(5) },
              { id: 'r7', title: 'Counter-Reform', content: 'Catholic response.\nCouncil of Trent.\nJesuits formed.', color: getReelColor(6) },
              { id: 'r8', title: 'Impact', content: 'Christianity divided.\nProtestants vs Catholics.\nReligious wars.', color: getReelColor(7) }
            ]
          },
          {
            id: 'his3',
            title: '3. Industrial Revolution',
            description: 'Transformation from agrarian to industrial economy (18th-19th century).',
            summary: '**Industrial Revolution**: Shift from hand production to machines\n**Period**: 1760-1840\n**Origin**: England\n**Key Inventions**: Steam Engine, Spinning Jenny, Power Loom\n**Impact**: Urbanization, Factory System, Social Changes',
            detailedNotes: '### 1. Meaning\n* Transition from hand production to machine manufacturing\n* Agricultural society to industrial society\n* Started in England around 1760\n* "Revolution" because changes were rapid and dramatic\n\n### 2. Why England First?\n1. **Geographical Factors**\n   - Rich coal and iron deposits\n   - Many rivers for water power and transport\n   - Island nation - safe from wars\n   - Good natural harbors\n\n2. **Economic Factors**\n   - Colonial wealth\n   - Strong banking system\n   - Growing trade\n   - Accumulated capital\n\n3. **Political Factors**\n   - Stable government\n   - No internal wars\n   - Patent laws protected inventors\n\n4. **Social Factors**\n   - Scientific temperament\n   - Skilled workers\n   - Agricultural Revolution freed labor\n\n### 3. Key Inventions\n**Textile Industry**\n* Flying Shuttle (John Kay, 1733)\n* Spinning Jenny (Hargreaves, 1764)\n* Water Frame (Arkwright, 1769)\n* Spinning Mule (Crompton, 1779)\n* Power Loom (Cartwright, 1785)\n\n**Steam Power**\n* Steam Engine (James Watt, 1769)\n* Revolutionized factories and transport\n\n**Iron & Steel**\n* Coke smelting (Darby)\n* Bessemer process (1856)\n\n**Transport**\n* Railways (Stephenson\'s Rocket, 1829)\n* Steamships\n\n### 4. Impact\n**A. Economic**\n* Factory system replaced cottage industry\n* Mass production, lower prices\n* Rise of capitalism\n\n**B. Social**\n* Urbanization (cities grew)\n* New social classes (bourgeoisie, proletariat)\n* Child labor, poor working conditions\n* Trade unions formed\n\n**C. Political**\n* Rise of socialism and Marxism\n* Labor laws enacted\n* Reform movements',
            flashcards: [
              { id: 'f1', front: 'Where did Industrial Revolution begin?', back: 'England (around 1760).' },
              { id: 'f2', front: 'Who invented the Steam Engine?', back: 'James Watt (improved version, 1769).' },
              { id: 'f3', front: 'Who invented the Spinning Jenny?', back: 'James Hargreaves (1764).' },
              { id: 'f4', front: 'Who invented the Power Loom?', back: 'Edmund Cartwright (1785).' },
              { id: 'f5', front: 'Which industry was first to industrialize?', back: 'Textile (Cotton) Industry.' },
              { id: 'f6', front: 'What is Factory System?', back: 'Production in large buildings with machines, replacing cottage industry.' },
              { id: 'f7', front: 'Who built the first railway locomotive?', back: 'George Stephenson (Rocket, 1829).' }
            ],
            mcqs: [
              { id: 'q1', question: 'Industrial Revolution began in:', options: ['France', 'Germany', 'England', 'USA'], correctIndex: 2, explanation: 'England was first due to coal, iron, and capital.' },
              { id: 'q2', question: 'Steam Engine was improved by:', options: ['Arkwright', 'Watt', 'Hargreaves', 'Cartwright'], correctIndex: 1, explanation: 'James Watt made steam engine efficient.' },
              { id: 'q3', question: 'First industry to be mechanized:', options: ['Iron', 'Textile', 'Coal', 'Steel'], correctIndex: 1, explanation: 'Cotton textile industry was first.' },
              { id: 'q4', question: '"Rocket" was invented by:', options: ['Watt', 'Stephenson', 'Fulton', 'Morse'], correctIndex: 1, explanation: 'George Stephenson built the famous Rocket locomotive.' },
              { id: 'q5', question: 'Spinning Jenny was invented by:', options: ['Arkwright', 'Crompton', 'Hargreaves', 'Cartwright'], correctIndex: 2, explanation: 'James Hargreaves invented Spinning Jenny in 1764.' }
            ],
            reels: [
              { id: 'r1', title: 'Industrial Rev', content: 'Hand → Machine.\nAgriculture → Industry.\nStarted in ENGLAND.', color: getReelColor(0) },
              { id: 'r2', title: 'Why England?', content: 'Coal + Iron.\nCapital + Colonies.\nStable government.', color: getReelColor(1) },
              { id: 'r3', title: 'Steam Engine', content: 'James Watt - 1769.\nPowered factories.\nChanged everything!', color: getReelColor(2) },
              { id: 'r4', title: 'Textile First', content: 'Cotton industry.\nSpinning Jenny.\nPower Loom.', color: getReelColor(3) },
              { id: 'r5', title: 'Railways', content: 'Stephenson\'s Rocket.\n1829.\nTransport revolution.', color: getReelColor(4) },
              { id: 'r6', title: 'Factory System', content: 'Cottage → Factory.\nMass production.\nDivision of labor.', color: getReelColor(5) },
              { id: 'r7', title: 'Social Impact', content: 'Urbanization.\nChild labor.\nTrade unions.', color: getReelColor(6) },
              { id: 'r8', title: 'New Classes', content: 'Bourgeoisie = Factory owners.\nProletariat = Workers.', color: getReelColor(7) }
            ]
          },
          {
            id: 'his4',
            title: '4. French Revolution',
            description: 'Overthrow of monarchy in France (1789-1799).',
            summary: '**French Revolution**: Overthrow of absolute monarchy\n**Period**: 1789-1799\n**Motto**: Liberty, Equality, Fraternity\n**Key Event**: Storming of Bastille (July 14, 1789)\n**Result**: End of feudalism, Rise of Napoleon',
            detailedNotes: '### 1. Background\n* France under absolute monarchy of Louis XVI\n* Queen Marie Antoinette\'s extravagance\n* Severe economic crisis\n* Society divided into Three Estates\n\n### 2. The Three Estates\n**First Estate**: Clergy (Church)\n* 1% of population\n* Owned 10% of land\n* No taxes\n\n**Second Estate**: Nobility\n* 2% of population\n* Owned 25% of land\n* No taxes\n\n**Third Estate**: Everyone else\n* 97% of population\n* Paid all taxes\n* Included bourgeoisie, peasants, workers\n\n### 3. Causes\n**A. Social Inequality**\n* Privileges of First and Second Estate\n* Heavy taxes on Third Estate\n* Feudal dues and tithes\n\n**B. Economic Crisis**\n* Empty treasury\n* Cost of American Revolution\n* Bad harvests, bread shortage\n* Rising prices\n\n**C. Intellectual Causes**\n* Enlightenment philosophers\n* Rousseau: Social Contract\n* Voltaire: Freedom of speech\n* Montesquieu: Separation of powers\n\n### 4. Key Events\n1. **Estates-General** (May 1789): Meeting after 175 years\n2. **National Assembly** (June 1789): Third Estate\'s own assembly\n3. **Tennis Court Oath** (June 20, 1789): Vow to draft constitution\n4. **Storming of Bastille** (July 14, 1789): Symbol of revolution\n5. **Declaration of Rights** (August 1789): Rights of Man\n6. **Reign of Terror** (1793-94): Robespierre\'s rule, guillotine\n7. **Rise of Napoleon** (1799): Military takeover\n\n### 5. Impact\n* End of absolute monarchy\n* Abolition of feudalism\n* Declaration of Rights of Man\n* Rise of nationalism\n* Spread of revolutionary ideas in Europe',
            flashcards: [
              { id: 'f1', front: 'When did French Revolution begin?', back: '1789 (Storming of Bastille: July 14, 1789).' },
              { id: 'f2', front: 'What was the motto of French Revolution?', back: 'Liberty, Equality, Fraternity.' },
              { id: 'f3', front: 'Who was the King during French Revolution?', back: 'Louis XVI.' },
              { id: 'f4', front: 'What was the Third Estate?', back: 'Common people - 97% of population who paid all taxes.' },
              { id: 'f5', front: 'What was the Tennis Court Oath?', back: 'Third Estate\'s vow to not disperse until a constitution was written.' },
              { id: 'f6', front: 'What was the Reign of Terror?', back: 'Period of mass executions under Robespierre (1793-94).' },
              { id: 'f7', front: 'Who wrote "The Social Contract"?', back: 'Jean-Jacques Rousseau.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Storming of Bastille occurred on:', options: ['July 4, 1776', 'July 14, 1789', 'August 26, 1789', 'January 21, 1793'], correctIndex: 1, explanation: 'July 14, 1789 is celebrated as Bastille Day in France.' },
              { id: 'q2', question: 'Third Estate comprised ______ of population.', options: ['1%', '2%', '50%', '97%'], correctIndex: 3, explanation: 'Everyone except clergy and nobility.' },
              { id: 'q3', question: 'Reign of Terror was led by:', options: ['Napoleon', 'Louis XVI', 'Robespierre', 'Voltaire'], correctIndex: 2, explanation: 'Robespierre led the Committee of Public Safety.' },
              { id: 'q4', question: '"The Social Contract" was written by:', options: ['Voltaire', 'Montesquieu', 'Rousseau', 'Diderot'], correctIndex: 2, explanation: 'Rousseau\'s famous work on political philosophy.' },
              { id: 'q5', question: 'French Revolution ended with the rise of:', options: ['Louis XVII', 'Robespierre', 'Napoleon', 'Monarchy'], correctIndex: 2, explanation: 'Napoleon Bonaparte seized power in 1799.' }
            ],
            reels: [
              { id: 'r1', title: 'The Three Estates', content: '1st: Clergy (1%)\n2nd: Nobility (2%)\n3rd: Everyone else (97%)', color: getReelColor(0) },
              { id: 'r2', title: 'The Problem', content: '97% paid taxes.\n3% paid nothing.\nUnfair system!', color: getReelColor(1) },
              { id: 'r3', title: 'Bastille Day', content: 'July 14, 1789.\nPrison stormed.\nRevolution begins!', color: getReelColor(2) },
              { id: 'r4', title: 'The Motto', content: 'LIBERTY\nEQUALITY\nFRATERNITY', color: getReelColor(3) },
              { id: 'r5', title: 'Philosophers', content: 'Rousseau: Social Contract.\nVoltaire: Free speech.\nMontesquieu: Separation of powers.', color: getReelColor(4) },
              { id: 'r6', title: 'Reign of Terror', content: 'Robespierre\'s rule.\nGuillotine!\n40,000 executed.', color: getReelColor(5) },
              { id: 'r7', title: 'Impact', content: 'End of monarchy.\nEnd of feudalism.\nRights of Man.', color: getReelColor(6) },
              { id: 'r8', title: 'Napoleon', content: 'Military general.\nSeized power 1799.\nEmperor of France.', color: getReelColor(7) }
            ]
          },
          {
            id: 'his5',
            title: '5. World War I',
            description: 'The Great War (1914-1918).',
            summary: '**World War I**: 1914-1918\n**Trigger**: Assassination of Archduke Franz Ferdinand\n**Alliances**: Allied Powers vs Central Powers\n**Result**: Allied victory, Treaty of Versailles, League of Nations',
            detailedNotes: '### 1. Background\n* Also called "The Great War"\n* First truly global conflict\n* 1914-1918 (4 years)\n* Over 17 million deaths\n\n### 2. Causes (M.A.I.N.)\n**M - Militarism**\n* Arms race, especially naval (Britain vs Germany)\n* Glorification of military power\n\n**A - Alliances**\n* Triple Alliance: Germany, Austria-Hungary, Italy\n* Triple Entente: Britain, France, Russia\n\n**I - Imperialism**\n* Competition for colonies in Africa and Asia\n* Clash of interests\n\n**N - Nationalism**\n* Extreme patriotism\n* Pan-Slavism, Pan-Germanism\n* Balkans called "Powder Keg of Europe"\n\n### 3. Immediate Cause\n* Assassination of Archduke Franz Ferdinand of Austria-Hungary\n* Shot by Gavrilo Princip (Serbian nationalist)\n* June 28, 1914, in Sarajevo\n* Austria declared war on Serbia\n* Alliances activated - war spread\n\n### 4. The Two Sides\n**Allied Powers (Entente)**\n* Britain, France, Russia\n* Later: USA, Italy, Japan\n\n**Central Powers**\n* Germany, Austria-Hungary\n* Ottoman Empire, Bulgaria\n\n### 5. Key Events\n* Trench Warfare on Western Front\n* Use of new weapons: tanks, poison gas, aircraft\n* Sinking of Lusitania (1915)\n* USA enters war (1917)\n* Russia withdraws (1917 - Revolution)\n* Germany surrenders (November 11, 1918)\n\n### 6. Treaty of Versailles (1919)\n* Peace treaty with Germany\n* Germany accepted "War Guilt"\n* Lost colonies and territory\n* Military reduced\n* Heavy reparations (compensation)\n* Seeds of World War II\n\n### 7. Consequences\n* Collapse of empires (Ottoman, Austro-Hungarian, Russian, German)\n* League of Nations formed\n* Map of Europe redrawn\n* Rise of USA as world power\n* Economic devastation\n* Seeds of WWII planted',
            flashcards: [
              { id: 'f1', front: 'When was World War I?', back: '1914-1918.' },
              { id: 'f2', front: 'What triggered WWI?', back: 'Assassination of Archduke Franz Ferdinand in Sarajevo.' },
              { id: 'f3', front: 'Who assassinated Franz Ferdinand?', back: 'Gavrilo Princip (Serbian nationalist).' },
              { id: 'f4', front: 'What does M.A.I.N. stand for (causes of WWI)?', back: 'Militarism, Alliances, Imperialism, Nationalism.' },
              { id: 'f5', front: 'Who were the Allied Powers?', back: 'Britain, France, Russia (later USA, Italy).' },
              { id: 'f6', front: 'Who were the Central Powers?', back: 'Germany, Austria-Hungary, Ottoman Empire.' },
              { id: 'f7', front: 'What was the Treaty of Versailles?', back: 'Peace treaty ending WWI, blamed Germany.' },
              { id: 'f8', front: 'What organization was formed after WWI?', back: 'League of Nations.' }
            ],
            mcqs: [
              { id: 'q1', question: 'World War I was fought during:', options: ['1904-1908', '1914-1918', '1939-1945', '1950-1953'], correctIndex: 1, explanation: 'WWI lasted from 1914 to 1918.' },
              { id: 'q2', question: 'Franz Ferdinand was assassinated in:', options: ['Vienna', 'Berlin', 'Sarajevo', 'Paris'], correctIndex: 2, explanation: 'Sarajevo, capital of Bosnia, on June 28, 1914.' },
              { id: 'q3', question: 'USA entered WWI in:', options: ['1914', '1915', '1917', '1918'], correctIndex: 2, explanation: 'USA entered after German submarine attacks.' },
              { id: 'q4', question: 'Treaty of Versailles was signed in:', options: ['1918', '1919', '1920', '1921'], correctIndex: 1, explanation: 'Signed on June 28, 1919.' },
              { id: 'q5', question: 'Balkans was called:', options: ['Heart of Europe', 'Powder Keg of Europe', 'Garden of Europe', 'Workshop of World'], correctIndex: 1, explanation: 'Due to nationalist tensions that could explode into war.' }
            ],
            reels: [
              { id: 'r1', title: 'M.A.I.N. Causes', content: 'Militarism\nAlliances\nImperialism\nNationalism', color: getReelColor(0) },
              { id: 'r2', title: 'The Trigger', content: 'Franz Ferdinand shot.\nJune 28, 1914.\nSarajevo, Bosnia.', color: getReelColor(1) },
              { id: 'r3', title: 'The Alliances', content: 'Allied: Britain, France, Russia.\nCentral: Germany, Austria-Hungary.', color: getReelColor(2) },
              { id: 'r4', title: 'Trench Warfare', content: 'Soldiers in trenches.\nYears of stalemate.\nMud, blood, death.', color: getReelColor(3) },
              { id: 'r5', title: 'New Weapons', content: 'Tanks\nPoison Gas\nAirplanes\nSubmarine', color: getReelColor(4) },
              { id: 'r6', title: 'USA Enters', content: '1917.\nLusitania sinking.\nTurned the tide!', color: getReelColor(5) },
              { id: 'r7', title: 'Treaty of Versailles', content: 'Germany blamed.\nLost territory.\nHeavy fines.', color: getReelColor(6) },
              { id: 'r8', title: 'Aftermath', content: '17 million dead.\nEmpires collapsed.\nLeague of Nations.', color: getReelColor(7) }
            ]
          }
        ]
      },
      {
        id: 'pol', 
        name: 'Political Science', 
        icon: 'Building2', 
        color: 'bg-red-500', 
        syllabus: '1. Indian Constitution\n2. The State\n3. Citizenship\n4. Fundamental Rights & Duties\n5. Directive Principles\n6. Union Legislature\n7. Union Executive\n8. State Legislature & Executive\n9. Judiciary\n10. Local Self Government',
        paperPattern: '### Political Science Paper Pattern (80 Marks)\n\n* **Q.1 MCQs (20 Marks)**\n* **Q.2-Q.5 Short Answers (40 Marks)**\n* **Q.6 Long Answers (20 Marks)**',
        previousPapers: [], 
        chapters: [
          {
            id: 'pol1',
            title: '1. Indian Constitution',
            description: 'Making, Features, Preamble of Constitution.',
            summary: '**Constitution**: Supreme law of land\n**Enacted**: 26 Nov 1949\n**Came into force**: 26 Jan 1950\n**Preamble**: Soul of Constitution',
            detailedNotes: '### 1. Making of Constitution\n* **Constituent Assembly**: Formed in 1946\n* **Chairman**: Dr. Rajendra Prasad\n* **Drafting Committee Chairman**: Dr. B.R. Ambedkar\n* **Time taken**: 2 years, 11 months, 18 days\n* **Sessions**: 11 sessions\n* **Adopted**: 26 November 1949\n* **Came into force**: 26 January 1950\n\n### 2. Preamble\n"WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC..."\n\n**Key Words**:\n* **Sovereign**: Independent, supreme authority\n* **Socialist**: Added by 42nd Amendment (1976)\n* **Secular**: Added by 42nd Amendment (1976)\n* **Democratic**: Government by the people\n* **Republic**: Elected head of state\n\n### 3. Features of Indian Constitution\n* **Lengthiest written constitution**\n* **Blend of rigidity and flexibility**\n* **Federal with unitary bias**\n* **Parliamentary form of government**\n* **Fundamental Rights and Duties**\n* **Directive Principles**\n* **Independent Judiciary**\n* **Single Citizenship**\n* **Universal Adult Franchise**\n\n### 4. Sources\n* **UK**: Parliamentary system, Rule of law\n* **USA**: Fundamental Rights, Judicial Review\n* **Ireland**: DPSP, Election of President\n* **Canada**: Federal structure\n* **Australia**: Concurrent List',
            flashcards: [
              { id: 'f1', front: 'When was Constitution adopted?', back: '26 November 1949' },
              { id: 'f2', front: 'When did Constitution come into force?', back: '26 January 1950' },
              { id: 'f3', front: 'Chairman of Drafting Committee?', back: 'Dr. B.R. Ambedkar' },
              { id: 'f4', front: 'Which amendment added Socialist & Secular?', back: '42nd Amendment (1976)' },
              { id: 'f5', front: 'Father of Indian Constitution?', back: 'Dr. B.R. Ambedkar' }
            ],
            mcqs: [
              { id: 'q1', question: 'Constitution was adopted on:', options: ['26 Jan 1950', '15 Aug 1947', '26 Nov 1949', '26 Jan 1949'], correctIndex: 2, explanation: 'Adopted on 26 November 1949.' },
              { id: 'q2', question: 'Preamble is called:', options: ['Body of Constitution', 'Soul of Constitution', 'Head of Constitution', 'Foot of Constitution'], correctIndex: 1, explanation: 'It reflects the philosophy and objectives.' },
              { id: 'q3', question: 'DPSP borrowed from:', options: ['USA', 'UK', 'Ireland', 'Canada'], correctIndex: 2, explanation: 'Irish Constitution inspired DPSP.' }
            ],
            reels: [
              { id: 'r1', title: 'Constitution', content: 'Supreme Law of India.\nAdopted: 26 Nov 1949.\nEnforced: 26 Jan 1950.', color: getReelColor(0) },
              { id: 'r2', title: 'Ambedkar', content: 'Father of Constitution.\nDrafting Committee Chairman.\nArchitect!', color: getReelColor(1) },
              { id: 'r3', title: 'Preamble', content: 'Soul of Constitution.\nSovereign, Socialist, Secular.\nDemocratic Republic.', color: getReelColor(2) },
              { id: 'r4', title: '42nd Amendment', content: 'Added Socialist & Secular.\n1976.\nMini Constitution!', color: getReelColor(3) },
              { id: 'r5', title: 'Sources', content: 'UK: Parliament.\nUSA: Rights.\nIreland: DPSP.', color: getReelColor(4) }
            ]
          },
          {
            id: 'pol2',
            title: '2. Fundamental Rights',
            description: 'Part III of Constitution, Articles 12-35.',
            summary: '**6 Fundamental Rights** (Originally 7)\n**Right to Property**: Removed by 44th Amendment\n**Enforceable**: Through Supreme Court (Art 32) or High Court (Art 226)',
            detailedNotes: '### 1. Introduction\nFundamental Rights are basic human rights guaranteed to all citizens. They are justiciable (enforceable by courts).\n\n### 2. Six Fundamental Rights\n\n**1. Right to Equality (Art 14-18)**\n* Art 14: Equality before law\n* Art 15: No discrimination\n* Art 16: Equal opportunity in employment\n* Art 17: Abolition of Untouchability\n* Art 18: Abolition of Titles\n\n**2. Right to Freedom (Art 19-22)**\n* Art 19: Six freedoms (Speech, Assembly, Association, Movement, Residence, Profession)\n* Art 20: Protection against conviction\n* Art 21: Right to Life and Personal Liberty\n* Art 21A: Right to Education (6-14 years)\n* Art 22: Protection against arrest\n\n**3. Right against Exploitation (Art 23-24)**\n* Art 23: Prohibition of human trafficking\n* Art 24: No child labor below 14 years\n\n**4. Right to Freedom of Religion (Art 25-28)**\n* Art 25: Freedom of conscience\n* Art 26: Freedom to manage religious affairs\n* Art 27: No tax for religious promotion\n* Art 28: No religious instruction in state schools\n\n**5. Cultural & Educational Rights (Art 29-30)**\n* Art 29: Protection of minorities\n* Art 30: Right to establish educational institutions\n\n**6. Right to Constitutional Remedies (Art 32)**\n* Ambedkar called it "Heart and Soul of Constitution"\n* 5 Writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto',
            flashcards: [
              { id: 'f1', front: 'How many Fundamental Rights now?', back: '6 (Right to Property removed)' },
              { id: 'f2', front: 'Article 21 provides?', back: 'Right to Life and Personal Liberty' },
              { id: 'f3', front: 'Article 32 called by Ambedkar?', back: 'Heart and Soul of Constitution' },
              { id: 'f4', front: 'Right to Education added by?', back: '86th Amendment (Article 21A)' },
              { id: 'f5', front: 'Minimum age for child labor ban?', back: '14 years (Article 24)' }
            ],
            mcqs: [
              { id: 'q1', question: 'Right to Property was removed by:', options: ['42nd Amendment', '44th Amendment', '86th Amendment', '91st Amendment'], correctIndex: 1, explanation: '44th Amendment (1978) removed it.' },
              { id: 'q2', question: 'Article 17 deals with:', options: ['Equality', 'Untouchability', 'Education', 'Religion'], correctIndex: 1, explanation: 'Abolition of Untouchability.' },
              { id: 'q3', question: 'Writ for personal liberty is:', options: ['Mandamus', 'Habeas Corpus', 'Certiorari', 'Prohibition'], correctIndex: 1, explanation: 'Habeas Corpus = "produce the body".' }
            ],
            reels: [
              { id: 'r1', title: '6 Rights', content: 'Equality, Freedom, Against Exploitation.\nReligion, Cultural, Remedies.', color: getReelColor(0) },
              { id: 'r2', title: 'Article 21', content: 'Right to Life.\nMost important!\nExpanded by courts.', color: getReelColor(1) },
              { id: 'r3', title: 'Article 32', content: 'Constitutional Remedies.\nHeart & Soul.\n5 Writs available.', color: getReelColor(2) },
              { id: 'r4', title: 'Writs', content: 'Habeas Corpus\nMandamus\nProhibition\nCertiorari\nQuo Warranto', color: getReelColor(3) },
              { id: 'r5', title: 'Art 21A', content: 'Right to Education.\n6-14 years.\n86th Amendment.', color: getReelColor(4) }
            ]
          },
          {
            id: 'pol3',
            title: '3. Directive Principles',
            description: 'Part IV, Articles 36-51, Guidelines for State.',
            summary: '**DPSP**: Guidelines for governance\n**Not Justiciable**: Cannot be enforced by courts\n**Borrowed from**: Ireland\n**Goal**: Welfare State',
            detailedNotes: '### 1. Introduction\nDirective Principles of State Policy (DPSP) are guidelines for the government to create a welfare state. They are in Part IV (Articles 36-51).\n\n### 2. Features\n* **Non-justiciable**: Cannot be enforced by courts\n* **Fundamental in governance**: State should apply them\n* **Borrowed from**: Irish Constitution\n* **Complement to Fundamental Rights**\n\n### 3. Classification\n\n**A. Socialistic Principles**\n* Art 38: Social order for welfare\n* Art 39: Equal pay for equal work\n* Art 39A: Free legal aid\n* Art 41: Right to work, education\n* Art 42: Just and humane work conditions\n* Art 43: Living wage for workers\n* Art 43A: Worker participation in management\n\n**B. Gandhian Principles**\n* Art 40: Panchayati Raj\n* Art 43: Cottage industries\n* Art 46: SC/ST welfare\n* Art 47: Prohibition of intoxicants\n* Art 48: Protect cows, cattle\n\n**C. Liberal-Intellectual Principles**\n* Art 44: Uniform Civil Code\n* Art 45: Early childhood care (0-6 years)\n* Art 48: Environment, forests, wildlife\n* Art 48A: Agriculture modernization\n* Art 49: Protect monuments\n* Art 50: Separation of Judiciary from Executive\n* Art 51: International peace\n\n### 4. Difference from Fundamental Rights\n| Fundamental Rights | DPSP |\n|-------------------|------|\n| Justiciable | Non-justiciable |\n| Negative (restrictions on state) | Positive (directions to state) |\n| Political democracy | Social & economic democracy |',
            flashcards: [
              { id: 'f1', front: 'DPSP are in which Part?', back: 'Part IV (Articles 36-51)' },
              { id: 'f2', front: 'Are DPSP justiciable?', back: 'No, they cannot be enforced by courts.' },
              { id: 'f3', front: 'DPSP borrowed from?', back: 'Irish Constitution' },
              { id: 'f4', front: 'Article 44 provides for?', back: 'Uniform Civil Code' },
              { id: 'f5', front: 'Article 40 deals with?', back: 'Panchayati Raj (Village level governance)' }
            ],
            mcqs: [
              { id: 'q1', question: 'DPSP are:', options: ['Justiciable', 'Non-justiciable', 'Partially justiciable', 'None'], correctIndex: 1, explanation: 'Cannot be enforced by courts.' },
              { id: 'q2', question: 'Uniform Civil Code is in Article:', options: ['40', '44', '48', '50'], correctIndex: 1, explanation: 'Article 44 - UCC for all citizens.' },
              { id: 'q3', question: 'Panchayati Raj is a ______ principle.', options: ['Socialistic', 'Gandhian', 'Liberal', 'None'], correctIndex: 1, explanation: 'Gandhi advocated village self-governance.' }
            ],
            reels: [
              { id: 'r1', title: 'DPSP', content: 'Directive Principles.\nPart IV.\nGuidelines for State.', color: getReelColor(0) },
              { id: 'r2', title: 'Non-Justiciable', content: 'Cannot go to court.\nBut fundamental in governance.\nMoral obligation.', color: getReelColor(1) },
              { id: 'r3', title: 'From Ireland', content: 'Borrowed from Irish Constitution.\nWelfare State goal.', color: getReelColor(2) },
              { id: 'r4', title: 'Gandhian', content: 'Panchayati Raj (40).\nCottage industries (43).\nProhibition (47).', color: getReelColor(3) },
              { id: 'r5', title: 'Article 44', content: 'Uniform Civil Code.\nOne law for all.\nStill pending!', color: getReelColor(4) }
            ]
          },
          {
            id: 'pol4',
            title: '4. Union Legislature - Parliament',
            description: 'Lok Sabha, Rajya Sabha, Law Making.',
            summary: '**Parliament**: Lok Sabha + Rajya Sabha + President\n**Lok Sabha**: 545 members, 5 years\n**Rajya Sabha**: 250 members, 6 years (1/3 retire every 2 years)',
            detailedNotes: '### 1. Composition of Parliament\nParliament = President + Lok Sabha + Rajya Sabha\n\n### 2. Lok Sabha (House of People)\n* **Maximum Members**: 552 (530 States + 20 UTs + 2 Anglo-Indian nominated - now discontinued)\n* **Current**: 543 elected members\n* **Term**: 5 years (can be dissolved earlier)\n* **Presiding Officer**: Speaker\n* **Quorum**: 1/10th of total members\n* **Money Bills**: Can only be introduced here\n\n### 3. Rajya Sabha (Council of States)\n* **Maximum Members**: 250 (238 elected + 12 nominated)\n* **Term**: 6 years (1/3 retire every 2 years)\n* **Permanent House**: Cannot be dissolved\n* **Presiding Officer**: Vice-President (ex-officio Chairman)\n* **Special Power**: Can declare a subject as national importance (Art 249)\n\n### 4. Sessions of Parliament\n* **Budget Session**: Feb-May\n* **Monsoon Session**: July-Aug\n* **Winter Session**: Nov-Dec\n\n### 5. Law Making Process\n1. First Reading: Introduction of Bill\n2. Second Reading: Discussion and voting\n3. Third Reading: Final voting\n4. Sent to other House\n5. Presidential Assent\n\n### 6. Types of Bills\n* **Ordinary Bill**: Simple majority\n* **Money Bill**: Only in Lok Sabha\n* **Constitutional Amendment Bill**: Special majority',
            flashcards: [
              { id: 'f1', front: 'Term of Lok Sabha?', back: '5 years' },
              { id: 'f2', front: 'Term of Rajya Sabha member?', back: '6 years' },
              { id: 'f3', front: 'Chairman of Rajya Sabha?', back: 'Vice-President of India (ex-officio)' },
              { id: 'f4', front: 'Money Bill can be introduced in?', back: 'Lok Sabha only' },
              { id: 'f5', front: 'Maximum members in Lok Sabha?', back: '552 (currently 543 elected)' }
            ],
            mcqs: [
              { id: 'q1', question: 'Rajya Sabha is also called:', options: ['Lower House', 'Upper House', 'People\'s House', 'State House'], correctIndex: 1, explanation: 'Council of States - Upper House.' },
              { id: 'q2', question: 'How many members retire from RS every 2 years?', options: ['1/2', '1/3', '1/4', '1/5'], correctIndex: 1, explanation: '1/3 members retire every 2 years.' },
              { id: 'q3', question: 'Presiding officer of Lok Sabha is:', options: ['President', 'Vice-President', 'Speaker', 'PM'], correctIndex: 2, explanation: 'Speaker presides over Lok Sabha.' }
            ],
            reels: [
              { id: 'r1', title: 'Parliament', content: 'President + Lok Sabha + Rajya Sabha.\nBicameral legislature.', color: getReelColor(0) },
              { id: 'r2', title: 'Lok Sabha', content: 'Lower House.\n543 members.\n5 year term.', color: getReelColor(1) },
              { id: 'r3', title: 'Rajya Sabha', content: 'Upper House.\n250 members max.\n6 year term.', color: getReelColor(2) },
              { id: 'r4', title: 'Money Bill', content: 'Only in Lok Sabha.\nRS can delay 14 days only.\nLS has final say.', color: getReelColor(3) },
              { id: 'r5', title: 'Permanent House', content: 'Rajya Sabha.\nCannot be dissolved.\n1/3 retire every 2 years.', color: getReelColor(4) }
            ]
          },
          {
            id: 'pol5',
            title: '5. Union Executive',
            description: 'President, Vice-President, Prime Minister, Council of Ministers.',
            summary: '**President**: Head of State (nominal)\n**Prime Minister**: Head of Government (real power)\n**President elected by**: Electoral College\n**Term**: 5 years',
            detailedNotes: '### 1. President of India\n* **Article**: 52-62\n* **Qualification**: Citizen, 35+ years, qualified for LS\n* **Term**: 5 years (can be re-elected)\n* **Election**: Electoral College (MPs + MLAs)\n* **Removal**: Impeachment (Art 61)\n\n**Powers**:\n* Executive, Legislative, Judicial\n* Emergency powers (Art 352, 356, 360)\n* Appoints PM, Governors, Judges\n* Commander of Armed Forces\n\n### 2. Vice-President\n* **Article**: 63-71\n* **Term**: 5 years\n* **Election**: MPs of both Houses\n* **Role**: Chairman of Rajya Sabha\n* **Acting President**: When President\'s office is vacant\n\n### 3. Prime Minister\n* **Article**: 74-75\n* **Real Executive**: Head of Government\n* **Appointment**: By President (leader of majority party)\n* **Powers**: \n  - Presides over Cabinet\n  - Advises President\n  - Leader of Lok Sabha\n  - Allocates portfolios\n\n### 4. Council of Ministers\n* **Three Tiers**:\n  1. Cabinet Ministers (important portfolios)\n  2. Ministers of State (independent charge or attached)\n  3. Deputy Ministers (assist Cabinet Ministers)\n* **Collective Responsibility**: To Lok Sabha\n* **Max Size**: 15% of Lok Sabha (91st Amendment)',
            flashcards: [
              { id: 'f1', front: 'Minimum age for President?', back: '35 years' },
              { id: 'f2', front: 'President elected by?', back: 'Electoral College (MPs + MLAs of States)' },
              { id: 'f3', front: 'Vice-President is Chairman of?', back: 'Rajya Sabha' },
              { id: 'f4', front: 'PM is appointed by?', back: 'President (leader of majority party in LS)' },
              { id: 'f5', front: 'Max size of Council of Ministers?', back: '15% of Lok Sabha strength (91st Amendment)' }
            ],
            mcqs: [
              { id: 'q1', question: 'President is removed by:', options: ['Resignation', 'Impeachment', 'Vote of no confidence', 'All'], correctIndex: 1, explanation: 'Article 61 - Impeachment process.' },
              { id: 'q2', question: 'Real executive power lies with:', options: ['President', 'PM', 'Governor', 'Speaker'], correctIndex: 1, explanation: 'PM is head of government with real power.' },
              { id: 'q3', question: 'Emergency under Article 356 is:', options: ['National', 'State', 'Financial', 'All'], correctIndex: 1, explanation: 'President\'s Rule in State.' }
            ],
            reels: [
              { id: 'r1', title: 'President', content: 'Head of State.\nNominal executive.\nElected by Electoral College.', color: getReelColor(0) },
              { id: 'r2', title: 'PM', content: 'Head of Government.\nReal executive.\nLeader of majority party.', color: getReelColor(1) },
              { id: 'r3', title: 'Vice-President', content: 'Chairman of RS.\nActing President.\nElected by MPs only.', color: getReelColor(2) },
              { id: 'r4', title: 'Emergency', content: 'Art 352: National.\nArt 356: State.\nArt 360: Financial.', color: getReelColor(3) },
              { id: 'r5', title: '91st Amendment', content: 'Council of Ministers.\nMax 15% of LS.\nAnti-defection.', color: getReelColor(4) }
            ]
          }
        ]
      },
      {
        id: 'soc', 
        name: 'Sociology', 
        icon: 'Users', 
        color: 'bg-pink-500', 
        syllabus: '1. Introduction to Sociology\n2. Social Groups\n3. Social Stratification\n4. Social Change\n5. Indian Society',
        paperPattern: '### Sociology Paper Pattern (80 Marks)\n\n* **Q.1 MCQs (20 Marks)**\n* **Q.2-Q.5 Short Answers (40 Marks)**\n* **Q.6 Long Answers (20 Marks)**',
        previousPapers: [], 
        chapters: [
          {
            id: 'soc1',
            title: '1. Introduction to Sociology',
            description: 'Meaning, Scope, Importance of Sociology.',
            summary: '**Sociology**: Study of society\n**Father**: Auguste Comte (1838)\n**Word Origin**: Latin "Socius" + Greek "Logos"\n**Focus**: Social relationships, institutions, behavior',
            detailedNotes: '### 1. Meaning of Sociology\n**Definition**: Systematic study of society, social relationships, and social institutions.\n\n**Etymology**:\n* Socius (Latin) = Companion/Society\n* Logos (Greek) = Study/Science\n* Sociology = Science of Society\n\n### 2. Founders & Thinkers\n* **Auguste Comte**: Father of Sociology (coined term in 1838)\n* **Emile Durkheim**: Father of Modern Sociology\n* **Max Weber**: Verstehen (understanding) approach\n* **Karl Marx**: Class conflict theory\n* **Herbert Spencer**: Social Darwinism\n\n### 3. Nature of Sociology\n* **Social Science**: Studies human society\n* **Empirical**: Based on observation\n* **Generalizing**: Finds patterns\n* **Pure Science**: Knowledge for its own sake\n* **Abstract**: Concepts, not concrete\n\n### 4. Scope of Sociology\n**A. Formalistic School** (Simmel, Wiese):\n* Study only forms of social relationships\n* Narrow scope\n\n**B. Synthetic School** (Durkheim, Sorokin):\n* Study all aspects of society\n* Broader scope\n\n### 5. Importance of Sociology\n* Understand social problems\n* Policy making\n* Social planning\n* Self-awareness\n* Career opportunities',
            flashcards: [
              { id: 'f1', front: 'Father of Sociology?', back: 'Auguste Comte (coined term in 1838)' },
              { id: 'f2', front: 'Father of Modern Sociology?', back: 'Emile Durkheim' },
              { id: 'f3', front: 'Meaning of Socius?', back: 'Companion or Society (Latin)' },
              { id: 'f4', front: 'Max Weber is known for?', back: 'Verstehen (understanding) approach' },
              { id: 'f5', front: 'Karl Marx theory?', back: 'Class conflict theory' }
            ],
            mcqs: [
              { id: 'q1', question: 'Term "Sociology" was coined by:', options: ['Durkheim', 'Weber', 'Comte', 'Marx'], correctIndex: 2, explanation: 'Auguste Comte coined it in 1838.' },
              { id: 'q2', question: 'Sociology is derived from:', options: ['Greek only', 'Latin only', 'Latin + Greek', 'French'], correctIndex: 2, explanation: 'Socius (Latin) + Logos (Greek).' },
              { id: 'q3', question: 'Synthetic School advocates:', options: ['Narrow scope', 'Broader scope', 'No scope', 'Limited scope'], correctIndex: 1, explanation: 'Study all aspects of society.' }
            ],
            reels: [
              { id: 'r1', title: 'Sociology', content: 'Socius + Logos.\nScience of Society.\nStudy of social life.', color: getReelColor(0) },
              { id: 'r2', title: 'Auguste Comte', content: 'Father of Sociology.\nCoined term in 1838.\nFrench philosopher.', color: getReelColor(1) },
              { id: 'r3', title: 'Durkheim', content: 'Father of Modern Sociology.\nSocial Facts.\nSuicide study.', color: getReelColor(2) },
              { id: 'r4', title: 'Weber', content: 'Verstehen approach.\nUnderstanding.\nInterpretive sociology.', color: getReelColor(3) },
              { id: 'r5', title: 'Marx', content: 'Class conflict.\nBourgeoisie vs Proletariat.\nCommunism.', color: getReelColor(4) }
            ]
          },
          {
            id: 'soc2',
            title: '2. Social Groups',
            description: 'Primary, Secondary, In-group, Out-group.',
            summary: '**Social Group**: 2+ people with interaction\n**Primary Group**: Family, friends (intimate)\n**Secondary Group**: Organizations (formal)\n**Reference Group**: For comparison/aspiration',
            detailedNotes: '### 1. Meaning of Social Group\nA collection of two or more individuals who interact with each other and share common identity.\n\n**Characteristics**:\n* Mutual awareness\n* Interaction\n* Common interest/goal\n* Sense of unity\n* Group norms\n\n### 2. Types of Groups\n\n**A. Primary Groups** (C.H. Cooley)\n* Small, intimate, face-to-face\n* Examples: Family, Play group, Neighborhood\n* Features: Personal, Informal, Permanent\n\n**B. Secondary Groups**\n* Large, formal, impersonal\n* Examples: Political party, Trade union, School\n* Features: Formal, Goal-oriented, Temporary\n\n**C. In-group vs Out-group** (W.G. Sumner)\n* In-group: "We" feeling (our family, our team)\n* Out-group: "They" feeling (others, rivals)\n\n**D. Reference Group** (Merton)\n* Group we compare ourselves with\n* May or may not be member\n* Examples: Celebrities, Role models\n\n### 3. Importance of Groups\n* Socialization\n* Identity formation\n* Social control\n* Emotional support\n* Division of labor',
            flashcards: [
              { id: 'f1', front: 'Who gave concept of Primary Group?', back: 'C.H. Cooley' },
              { id: 'f2', front: 'Example of Primary Group?', back: 'Family, Friends, Play group' },
              { id: 'f3', front: 'Who gave In-group/Out-group concept?', back: 'W.G. Sumner' },
              { id: 'f4', front: 'Reference Group concept by?', back: 'Robert K. Merton' },
              { id: 'f5', front: 'Secondary groups are?', back: 'Large, formal, impersonal (e.g., Organizations)' }
            ],
            mcqs: [
              { id: 'q1', question: 'Family is a ______ group.', options: ['Secondary', 'Primary', 'Reference', 'Out-group'], correctIndex: 1, explanation: 'Small, intimate, face-to-face relations.' },
              { id: 'q2', question: 'Trade Union is a ______ group.', options: ['Primary', 'Secondary', 'Informal', 'None'], correctIndex: 1, explanation: 'Formal organization with specific goals.' },
              { id: 'q3', question: '"We" feeling indicates:', options: ['Out-group', 'In-group', 'Reference group', 'Secondary group'], correctIndex: 1, explanation: 'Sense of belonging to one\'s own group.' }
            ],
            reels: [
              { id: 'r1', title: 'Social Group', content: '2+ people.\nInteraction.\nCommon identity.', color: getReelColor(0) },
              { id: 'r2', title: 'Primary', content: 'Family, Friends.\nIntimate, Personal.\nCooley\'s concept.', color: getReelColor(1) },
              { id: 'r3', title: 'Secondary', content: 'Organizations.\nFormal, Impersonal.\nGoal-oriented.', color: getReelColor(2) },
              { id: 'r4', title: 'In-group', content: '"We" feeling.\nOur team, Our family.\nSumner\'s concept.', color: getReelColor(3) },
              { id: 'r5', title: 'Reference', content: 'Compare ourselves.\nAspirational.\nMerton\'s concept.', color: getReelColor(4) }
            ]
          },
          {
            id: 'soc3',
            title: '3. Social Stratification',
            description: 'Caste, Class, Inequality in society.',
            summary: '**Stratification**: Layers in society\n**Types**: Caste (closed), Class (open)\n**Caste**: Birth-based, rigid\n**Class**: Economic-based, flexible',
            detailedNotes: '### 1. Meaning\nSocial Stratification is the division of society into layers or strata based on inequality.\n\n### 2. Forms of Stratification\n\n**A. Caste System**\n* Based on birth (ascribed status)\n* Rigid, closed system\n* Hindu society: Brahmin, Kshatriya, Vaishya, Shudra\n* Features: Hereditary, Endogamy, Hierarchy, Occupation fixed\n\n**B. Class System**\n* Based on economic factors (achieved status)\n* Flexible, open system\n* Classes: Upper, Middle, Lower\n* Features: Acquired, Exogamy allowed, Mobility possible\n\n**C. Estate System**\n* Medieval Europe\n* Three estates: Clergy, Nobility, Commoners\n\n**D. Slavery**\n* Most extreme form\n* Person as property\n* Abolished worldwide\n\n### 3. Theories\n* **Functionalist** (Davis & Moore): Inequality is functional, motivates people\n* **Conflict** (Marx): Exploitation by dominant class\n* **Weber**: Class + Status + Power\n\n### 4. Social Mobility\n* **Vertical**: Moving up or down\n* **Horizontal**: Same level, different position\n* **Intergenerational**: Across generations\n* **Intragenerational**: Within one\'s lifetime',
            flashcards: [
              { id: 'f1', front: 'Caste system is based on?', back: 'Birth (ascribed status) - rigid, closed' },
              { id: 'f2', front: 'Class system is based on?', back: 'Economic factors (achieved status) - flexible, open' },
              { id: 'f3', front: 'Four Varnas in Hindu society?', back: 'Brahmin, Kshatriya, Vaishya, Shudra' },
              { id: 'f4', front: 'Weber\'s three dimensions?', back: 'Class, Status, Power' },
              { id: 'f5', front: 'Vertical mobility means?', back: 'Moving up or down in social hierarchy' }
            ],
            mcqs: [
              { id: 'q1', question: 'Caste system is a ______ system.', options: ['Open', 'Closed', 'Flexible', 'Modern'], correctIndex: 1, explanation: 'Based on birth, no mobility possible traditionally.' },
              { id: 'q2', question: 'Class is based on:', options: ['Birth', 'Religion', 'Economic factors', 'Caste'], correctIndex: 2, explanation: 'Wealth, income, occupation determine class.' },
              { id: 'q3', question: 'Weber added ______ to class analysis.', options: ['Caste', 'Status & Power', 'Religion', 'None'], correctIndex: 1, explanation: 'Three dimensions: Class, Status, Power.' }
            ],
            reels: [
              { id: 'r1', title: 'Stratification', content: 'Layers in society.\nBased on inequality.\nHierarchy.', color: getReelColor(0) },
              { id: 'r2', title: 'Caste', content: 'Birth-based.\nClosed system.\nRigid hierarchy.', color: getReelColor(1) },
              { id: 'r3', title: 'Class', content: 'Economic-based.\nOpen system.\nMobility possible.', color: getReelColor(2) },
              { id: 'r4', title: 'Varnas', content: 'Brahmin (Priests).\nKshatriya (Warriors).\nVaishya (Traders).\nShudra (Servants).', color: getReelColor(3) },
              { id: 'r5', title: 'Weber', content: 'Class + Status + Power.\nMulti-dimensional.\nBeyond just money.', color: getReelColor(4) }
            ]
          },
          {
            id: 'soc4',
            title: '4. Social Change',
            description: 'Meaning, Factors, Types of Change.',
            summary: '**Social Change**: Transformation in society\n**Factors**: Technology, Economy, Culture, Politics\n**Types**: Evolution, Revolution, Reform\n**Agents**: Education, Media, Legislation',
            detailedNotes: '### 1. Meaning\nSocial Change refers to alterations in the social structure, culture, and behavior patterns of society over time.\n\n### 2. Characteristics\n* Universal: Happens everywhere\n* Continuous: Never stops\n* Temporal: Takes time\n* Community change: Not individual\n* Chain reaction: One change leads to another\n\n### 3. Factors of Change\n\n**A. Internal Factors**\n* Demographic: Population changes\n* Technological: New inventions\n* Economic: Industrialization, Globalization\n* Cultural: New values, ideas\n\n**B. External Factors**\n* Cultural diffusion\n* War and conflict\n* Natural disasters\n* Contact with other societies\n\n### 4. Types of Social Change\n* **Evolution**: Gradual, slow change\n* **Revolution**: Sudden, radical change\n* **Reform**: Deliberate, planned change\n\n### 5. Theories of Change\n* **Linear** (Comte): Society progresses in stages\n* **Cyclical** (Spengler): Rise and fall patterns\n* **Evolutionary** (Spencer): Simple to complex\n* **Conflict** (Marx): Change through class struggle\n\n### 6. Agents of Change\n* Education\n* Mass media\n* Legislation\n* Social movements\n* Globalization',
            flashcards: [
              { id: 'f1', front: 'What is social change?', back: 'Alterations in social structure, culture, and behavior over time' },
              { id: 'f2', front: 'Revolution is what type of change?', back: 'Sudden and radical change' },
              { id: 'f3', front: 'Evolution is what type of change?', back: 'Gradual and slow change' },
              { id: 'f4', front: 'Marx\'s theory of change?', back: 'Change through class struggle/conflict' },
              { id: 'f5', front: 'Name agents of social change.', back: 'Education, Media, Legislation, Social movements' }
            ],
            mcqs: [
              { id: 'q1', question: 'Social change is:', options: ['Individual', 'Community-based', 'Temporary', 'Rare'], correctIndex: 1, explanation: 'Affects the whole community, not just individuals.' },
              { id: 'q2', question: 'French Revolution is an example of:', options: ['Evolution', 'Reform', 'Revolution', 'None'], correctIndex: 2, explanation: 'Sudden radical change in society.' },
              { id: 'q3', question: 'Cyclical theory was given by:', options: ['Comte', 'Marx', 'Spencer', 'Spengler'], correctIndex: 3, explanation: 'Oswald Spengler - rise and fall of civilizations.' }
            ],
            reels: [
              { id: 'r1', title: 'Social Change', content: 'Transformation in society.\nUniversal & Continuous.\nAlways happening!', color: getReelColor(0) },
              { id: 'r2', title: 'Factors', content: 'Technology, Economy.\nCulture, Politics.\nDemography.', color: getReelColor(1) },
              { id: 'r3', title: 'Evolution', content: 'Slow & Gradual.\nNatural process.\nOver generations.', color: getReelColor(2) },
              { id: 'r4', title: 'Revolution', content: 'Sudden & Radical.\nFrench Revolution.\nComplete overhaul.', color: getReelColor(3) },
              { id: 'r5', title: 'Agents', content: 'Education, Media.\nLaws, Movements.\nGlobalization.', color: getReelColor(4) }
            ]
          },
          {
            id: 'soc5',
            title: '5. Indian Society',
            description: 'Unity in Diversity, Family, Marriage.',
            summary: '**Unity in Diversity**: Many cultures, one nation\n**Joint Family**: Traditional, extended\n**Nuclear Family**: Modern, parents + children\n**Marriage Types**: Monogamy, Polygyny, Polyandry',
            detailedNotes: '### 1. Unity in Diversity\nIndia has diverse religions, languages, cultures, but remains united as one nation.\n\n**Factors of Unity**:\n* Constitution\n* National symbols (Flag, Anthem)\n* Common history\n* Festivals\n* Pilgrimages\n\n### 2. Indian Family System\n\n**A. Joint Family**\n* Three or more generations\n* Common property\n* Common kitchen\n* Patriarchal authority\n* Declining now\n\n**B. Nuclear Family**\n* Parents + children only\n* Separate residence\n* Individual property\n* Growing in cities\n\n### 3. Marriage in India\n\n**Types**:\n* **Monogamy**: One spouse\n* **Polygyny**: One husband, multiple wives\n* **Polyandry**: One wife, multiple husbands (rare)\n\n**Forms**:\n* **Arranged Marriage**: Family decides\n* **Love Marriage**: Individual choice\n* **Endogamy**: Within same group (caste)\n* **Exogamy**: Outside the group (gotra)\n\n### 4. Changes in Indian Society\n* Urbanization\n* Industrialization\n* Women empowerment\n* Education spread\n* Nuclear families increasing\n* Inter-caste marriages\n* Legal reforms (dowry prohibition, divorce laws)',
            flashcards: [
              { id: 'f1', front: 'Unity in Diversity means?', back: 'Many cultures, religions, languages but one nation' },
              { id: 'f2', front: 'Joint family has?', back: 'Three or more generations living together' },
              { id: 'f3', front: 'Nuclear family has?', back: 'Parents and their children only' },
              { id: 'f4', front: 'Endogamy means?', back: 'Marriage within same group (caste)' },
              { id: 'f5', front: 'Exogamy means?', back: 'Marriage outside one\'s group (gotra)' }
            ],
            mcqs: [
              { id: 'q1', question: 'Joint family is:', options: ['Modern', 'Traditional', 'Western', 'Urban'], correctIndex: 1, explanation: 'Traditional Indian family system.' },
              { id: 'q2', question: 'Marrying within same caste is:', options: ['Exogamy', 'Endogamy', 'Monogamy', 'Polygyny'], correctIndex: 1, explanation: 'Endo = within, gamy = marriage.' },
              { id: 'q3', question: 'One husband, multiple wives is:', options: ['Polyandry', 'Monogamy', 'Polygyny', 'Endogamy'], correctIndex: 2, explanation: 'Poly = many, gyny = women.' }
            ],
            reels: [
              { id: 'r1', title: 'Unity in Diversity', content: 'Many religions.\nMany languages.\nOne Nation!', color: getReelColor(0) },
              { id: 'r2', title: 'Joint Family', content: '3+ generations.\nCommon property.\nTraditional.', color: getReelColor(1) },
              { id: 'r3', title: 'Nuclear Family', content: 'Parents + Kids.\nModern.\nUrban trend.', color: getReelColor(2) },
              { id: 'r4', title: 'Endogamy', content: 'Marry within group.\nSame caste.\nTraditional norm.', color: getReelColor(3) },
              { id: 'r5', title: 'Changes', content: 'Urbanization.\nWomen empowerment.\nInter-caste marriage.', color: getReelColor(4) }
            ]
          }
        ]
      },
      {
        id: 'geo',
        name: 'Geography',
        icon: 'Globe',
        color: 'bg-teal-500',
        syllabus: '1. Population Geography\n2. Migration\n3. Human Settlements\n4. Human Development\n5. Primary Activities',
        paperPattern: '### Geography Paper Pattern (80 Marks)\n\n* **Q.1 MCQs (20 Marks)**\n* **Q.2 Short Answers (16 Marks)**\n* **Q.3 Distinguish Between (12 Marks)**\n* **Q.4 Long Answers (16 Marks)**\n* **Q.5 Map Work (16 Marks)**',
        previousPapers: ['2024 Geography Paper', '2023 Geography Paper'],
        chapters: [
          {
            id: 'geo-ch1',
            title: 'Chapter 1: Population Geography',
            description: 'Distribution, density, and growth of population',
            summary: `
# Population Geography

## Key Concepts

### Population Distribution
- **Densely Populated**: Ganga plains, coastal areas, deltas
- **Sparsely Populated**: Deserts, mountains, dense forests
- 90% population on 10% land area

### Factors Affecting Distribution
1. **Physical**: Climate, water, soil, relief, minerals
2. **Economic**: Industries, agriculture, transport
3. **Social**: Historical, political, cultural

### Population Density
- Persons per sq. km
- India: ~382 persons/sq km (2011)
- Highest: Bihar (1106)
- Lowest: Arunachal Pradesh (17)

### Population Growth
- Birth Rate - Death Rate = Natural Growth
- India: 1.2% annual growth
- Demographic Transition: High→Transitional→Low

### Age Structure
- 0-14 years: Young/Dependent
- 15-64 years: Working/Productive
- 65+ years: Elderly/Dependent
- Dependency Ratio = (Young + Old) / Working × 100
            `,
            detailedNotes: `
# Detailed Notes: Population Geography

## Population Distribution Patterns

### World Distribution
- Asia: 60% of world population
- Most populated countries: China, India, USA
- Northern Hemisphere: 90% population
- Coastal areas: 66% within 500 km of coast

### Factors Affecting Distribution

#### Physical Factors
| Factor | Favorable | Unfavorable |
|--------|-----------|-------------|
| Climate | Moderate temp, adequate rainfall | Extreme hot/cold, very dry/wet |
| Relief | Plains, plateaus | Mountains, steep slopes |
| Soil | Fertile alluvial, black soil | Rocky, sandy, marshy |
| Water | Rivers, lakes nearby | Arid regions |
| Minerals | Mineral-rich areas attract | Absence discourages |

#### Economic Factors
- Industrial centers: Dense population
- Agricultural regions: Rural settlements
- Trade centers: Urban growth
- Transport networks: Accessibility

## Population Density

### Calculation
Density = Total Population / Total Area

### Categories
- Very High: >500/sq km
- High: 200-500/sq km
- Moderate: 50-200/sq km
- Low: <50/sq km

### India's Density Pattern
- Most dense: Indo-Gangetic Plain
- Least dense: Himalayan region, Thar Desert
- Increasing trend due to population growth

## Population Growth

### Measures of Growth
1. **Birth Rate**: Births per 1000 population per year
2. **Death Rate**: Deaths per 1000 population per year
3. **Natural Growth**: Birth Rate - Death Rate
4. **Growth Rate**: Including migration effects

### Demographic Transition Theory
| Stage | Birth Rate | Death Rate | Growth |
|-------|------------|------------|--------|
| Stage 1 | High | High | Low/Stable |
| Stage 2 | High | Declining | Rapid increase |
| Stage 3 | Declining | Low | Slowing |
| Stage 4 | Low | Low | Stable/Decline |

### India's Demographic Transition
- Pre-1921: Stage 1 (Stagnant growth)
- 1921-1971: Stage 2 (Rapid growth)
- Post-1971: Stage 3 (Declining growth)

## Age Structure Pyramid

### Types
1. **Expanding**: Wide base, narrow top (developing countries)
2. **Stationary**: Uniform width (developed countries)
3. **Contracting**: Narrow base (aging population)

### Significance
- Planning for education, healthcare
- Labor force availability
- Social security needs
            `,
            flashcards: [
              { front: 'What is population density?', back: 'Number of persons living per square kilometer of area. Formula: Total Population ÷ Total Area.' },
              { front: 'Which Indian state has highest population density?', back: 'Bihar with 1106 persons per sq km (Census 2011).' },
              { front: 'What is Demographic Transition?', back: 'Theory explaining population change from high birth/death rates to low birth/death rates as country develops.' },
              { front: 'What is dependency ratio?', back: 'Ratio of dependent population (0-14 and 65+) to working age population (15-64). Shows burden on workers.' },
              { front: 'What is natural growth of population?', back: 'Difference between birth rate and death rate, excluding migration. Natural Growth = Birth Rate - Death Rate.' }
            ],
            mcqs: [
              { question: 'Which factor is NOT a physical factor affecting population distribution?', options: ['Climate', 'Relief', 'Industries', 'Water'], correctAnswer: 2 },
              { question: 'Highest population density in India is in:', options: ['Kerala', 'West Bengal', 'Bihar', 'UP'], correctAnswer: 2 },
              { question: 'In demographic transition, Stage 2 has:', options: ['High birth, high death', 'High birth, declining death', 'Low birth, low death', 'Declining birth, low death'], correctAnswer: 1 }
            ],
            reels: [
              { title: 'Population Density Formula', content: 'Density = Population ÷ Area | India ≈ 382/sq km 📊' },
              { title: 'Dense vs Sparse', content: 'Dense: Plains, Rivers, Fertile | Sparse: Mountains, Deserts, Forests 🏔️🏜️' },
              { title: 'Demographic Transition', content: 'Stage 1: High-High | Stage 2: High-Low | Stage 3: Low-Low | Stage 4: Stable 📉' },
              { title: 'Age Pyramid Types', content: 'Expanding: Young country 🔺 | Stationary: Balanced 🔷 | Contracting: Aging 🔻' }
            ]
          },
          {
            id: 'geo-ch2',
            title: 'Chapter 2: Migration',
            description: 'Types, causes, and consequences of migration',
            summary: `
# Migration

## Key Concepts

### Definition
Movement of people from one place to another with intention to settle

### Types of Migration
1. **Internal**: Within country
   - Rural to Urban
   - Urban to Urban
   - Rural to Rural
2. **International**: Across countries
   - Immigration (into country)
   - Emigration (out of country)

### Push Factors (Why leave?)
- Unemployment, poverty
- Natural disasters
- War, conflict
- Lack of facilities

### Pull Factors (Why go there?)
- Better jobs, higher wages
- Better education, healthcare
- Peace and security
- Family reunion

### Consequences
**Positive**: Remittances, skill transfer, cultural exchange
**Negative**: Brain drain, family separation, exploitation
            `,
            detailedNotes: `
# Detailed Notes: Migration

## Classification of Migration

### Based on Distance
- **Short Distance**: Within district/state
- **Long Distance**: Inter-state, international

### Based on Duration
- **Permanent**: Settle permanently
- **Temporary**: Seasonal, short-term
- **Circular**: Regular back-and-forth

### Based on Decision
- **Voluntary**: By choice
- **Forced**: Refugees, displaced persons

## Causes of Migration

### Push Factors
| Category | Examples |
|----------|----------|
| Economic | Unemployment, low wages, poverty |
| Social | Discrimination, family disputes |
| Political | War, persecution, instability |
| Environmental | Drought, floods, disasters |
| Demographic | Overpopulation, land shortage |

### Pull Factors
| Category | Examples |
|----------|----------|
| Economic | Jobs, higher wages, opportunities |
| Social | Education, healthcare, family |
| Political | Safety, freedom, rights |
| Environmental | Better climate, amenities |

## Consequences of Migration

### For Origin Area
**Positive:**
- Reduces population pressure
- Remittances boost economy
- Return migrants bring skills

**Negative:**
- Brain drain (skilled leave)
- Labor shortage
- Family disruption

### For Destination Area
**Positive:**
- Labor supply increases
- Cultural diversity
- Economic contribution

**Negative:**
- Overcrowding
- Strain on infrastructure
- Social tensions

## Migration in India

### Major Streams
1. **Rural to Urban**: Most common, for jobs
2. **Rural to Rural**: Marriage (females)
3. **Urban to Urban**: Job transfers, education
4. **Urban to Rural**: Rare, retirement

### Key Statistics
- Maharashtra, Delhi, Gujarat: Major destinations
- UP, Bihar: Major source states
- Female migration: Mostly for marriage
            `,
            flashcards: [
              { front: 'What are push factors in migration?', back: 'Factors that force people to leave origin: unemployment, poverty, war, disasters, discrimination.' },
              { front: 'What are pull factors in migration?', back: 'Factors that attract people to destination: jobs, education, safety, better facilities, family.' },
              { front: 'What is brain drain?', back: 'Emigration of skilled and educated people from developing to developed countries, causing loss of human capital.' },
              { front: 'What is the most common migration stream in India?', back: 'Rural to Urban migration, mainly for employment opportunities in cities.' },
              { front: 'What are remittances?', back: 'Money sent by migrants back to their families in origin area. Important source of income for developing countries.' }
            ],
            mcqs: [
              { question: 'Which is a push factor?', options: ['Better jobs', 'Higher wages', 'Unemployment', 'Good schools'], correctAnswer: 2 },
              { question: 'Brain drain refers to:', options: ['Import of skills', 'Export of educated people', 'Return migration', 'Rural migration'], correctAnswer: 1 },
              { question: 'Female migration in India is mainly due to:', options: ['Employment', 'Education', 'Marriage', 'Business'], correctAnswer: 2 }
            ],
            reels: [
              { title: 'Push vs Pull', content: 'PUSH: Problems at home 👎 | PULL: Opportunities elsewhere 👍' },
              { title: 'Migration Types', content: 'Internal: Within country | International: Across borders 🌍' },
              { title: 'Brain Drain', content: 'Skilled workers leave → Origin loses talent → Destination gains! 🧠✈️' },
              { title: 'India Migration Pattern', content: 'UP/Bihar → Mumbai/Delhi/Gujarat | For jobs & better life 🏙️' }
            ]
          },
          {
            id: 'geo-ch3',
            title: 'Chapter 3: Human Settlements',
            description: 'Types and patterns of human settlements',
            summary: `
# Human Settlements

## Key Concepts

### Definition
Places where people build homes and live together

### Types of Settlements
1. **Rural Settlements**
   - Compact/Nucleated: Houses clustered
   - Dispersed/Scattered: Houses spread out
   - Linear: Along roads/rivers

2. **Urban Settlements**
   - Town: 5,000-1,00,000 population
   - City: 1,00,000+ population
   - Metropolis: 10,00,000+ (10 lakh)
   - Megacity: 1,00,00,000+ (1 crore)

### Site vs Situation
- **Site**: Actual location features (land, water)
- **Situation**: Location relative to surroundings

### Urbanization
- Increase in urban population percentage
- Causes: Industrialization, migration, natural growth
- India: 31% urban (2011) → projected 40% by 2030
            `,
            detailedNotes: `
# Detailed Notes: Human Settlements

## Rural Settlement Patterns

### Compact/Nucleated
- Houses close together
- Found in fertile plains
- Common kitchen, well, temple
- Examples: Villages in Ganga plain

### Dispersed/Scattered
- Houses spread apart
- Found in hilly, forested areas
- Individual water sources
- Examples: Himalayan villages

### Linear
- Along roads, rivers, canals
- Easy access to transport
- Examples: Coastal villages

### Semi-clustered
- Mix of compact and dispersed
- Fragmented clusters
- Examples: Gujarat villages

## Urban Settlement Classification

### By Population (India)
| Category | Population |
|----------|------------|
| Town | 5,000 - 99,999 |
| City | 1,00,000 - 9,99,999 |
| Metropolitan | 10,00,000 - 49,99,999 |
| Megacity | 50,00,000+ |

### By Function
- **Administrative**: Capitals (Delhi, state capitals)
- **Industrial**: Manufacturing centers (Jamshedpur)
- **Commercial**: Trade hubs (Mumbai)
- **Cultural**: Religious, educational (Varanasi, Pune)
- **Transport**: Ports, junctions (Chennai, Mughal Sarai)

## Site Factors

### Favorable Site Conditions
- Flat land for construction
- Water availability (river, groundwater)
- Good drainage
- Building materials nearby
- Fertile land for agriculture

### Historical Site Selection
- Defense: Hilltops, river islands
- Trade routes: Crossroads, ports
- Religious: Sacred sites

## Urbanization

### Causes
1. Rural push: Poverty, lack of jobs
2. Urban pull: Employment, education
3. Natural increase: Births in cities
4. Reclassification: Villages becoming towns

### Problems of Urbanization
- Housing shortage, slums
- Traffic congestion
- Pollution
- Water and sanitation issues
- Crime and social issues

### Solutions
- Smart city development
- Satellite towns
- Urban planning
- Improved public transport
            `,
            flashcards: [
              { front: 'What is a nucleated settlement?', back: 'Settlement where houses are clustered together around a central point like temple, well, or marketplace. Common in fertile plains.' },
              { front: 'What is the difference between site and situation?', back: 'Site: Physical characteristics of actual location. Situation: Location relative to surrounding areas and accessibility.' },
              { front: 'What is a megacity?', back: 'Urban agglomeration with population of 10 million (1 crore) or more. Examples: Mumbai, Delhi, Kolkata.' },
              { front: 'What is urbanization?', back: 'Process of increase in proportion of population living in urban areas. India is about 31% urban (2011).' },
              { front: 'Name types of rural settlements.', back: 'Compact/Nucleated, Dispersed/Scattered, Linear, and Semi-clustered settlements.' }
            ],
            mcqs: [
              { question: 'Houses clustered together is called:', options: ['Dispersed', 'Nucleated', 'Linear', 'Scattered'], correctAnswer: 1 },
              { question: 'A city with 10 million+ population is:', options: ['Town', 'City', 'Metropolitan', 'Megacity'], correctAnswer: 3 },
              { question: 'Urbanization in India (2011) was about:', options: ['21%', '31%', '41%', '51%'], correctAnswer: 1 }
            ],
            reels: [
              { title: 'Settlement Types', content: 'Nucleated: Together 🏘️ | Dispersed: Spread out 🏡 | Linear: In a line 📏' },
              { title: 'Urban Hierarchy', content: 'Town < City < Metro < Megacity | By population size 📊' },
              { title: 'Site vs Situation', content: 'Site: What IS there | Situation: WHERE it is relative to others 📍' },
              { title: 'Urbanization Issues', content: 'Slums + Traffic + Pollution + Water crisis = Urban problems 🏙️😷' }
            ]
          },
          {
            id: 'geo-ch4',
            title: 'Chapter 4: Human Development',
            description: 'Human Development Index and quality of life',
            summary: `
# Human Development

## Key Concepts

### Definition
Expanding choices and capabilities of people to live a dignified life

### Human Development Index (HDI)
Developed by UNDP, measures:
1. **Health**: Life expectancy at birth
2. **Education**: Mean & expected years of schooling
3. **Income**: GNI per capita (PPP)

### HDI Categories
- Very High: 0.800+
- High: 0.700-0.799
- Medium: 0.550-0.699
- Low: Below 0.550

### India's HDI
- Rank: ~132 out of 191 countries
- Category: Medium Human Development
- HDI Value: ~0.633

### Other Indices
- **GDI**: Gender Development Index
- **GII**: Gender Inequality Index
- **MPI**: Multidimensional Poverty Index
            `,
            detailedNotes: `
# Detailed Notes: Human Development

## Concept of Human Development

### Definition
"Human development is about expanding choices and capabilities of people to lead lives they value" - UNDP

### Key Aspects
1. **Longevity**: Long and healthy life
2. **Knowledge**: Access to education
3. **Decent Living**: Resources for dignified life
4. **Participation**: Social and political freedom

### Human Development vs Economic Growth
| Economic Growth | Human Development |
|-----------------|-------------------|
| Focus on GDP | Focus on people |
| Quantitative | Qualitative |
| Means | End goal |
| Income-centric | Well-being centric |

## Human Development Index (HDI)

### Components
1. **Health Dimension**
   - Indicator: Life expectancy at birth
   - Min: 20 years, Max: 85 years

2. **Education Dimension**
   - Mean years of schooling (adults)
   - Expected years of schooling (children)

3. **Living Standard**
   - GNI per capita (PPP $)
   - Min: $100, Max: $75,000

### HDI Calculation
Each dimension index = (Actual - Min) / (Max - Min)
HDI = Geometric mean of three indices

### HDI Categories
| Category | HDI Value | Examples |
|----------|-----------|----------|
| Very High | 0.800+ | Norway, Switzerland, Ireland |
| High | 0.700-0.799 | Sri Lanka, Brazil, Thailand |
| Medium | 0.550-0.699 | India, Bangladesh, Kenya |
| Low | <0.550 | Niger, Chad, Mali |

## Related Indices

### Gender Development Index (GDI)
- Ratio of female to male HDI
- Measures gender gap in development
- Higher value = less inequality

### Gender Inequality Index (GII)
- Measures gender disadvantage
- Components: Health, empowerment, labor
- Lower value = less inequality

### Multidimensional Poverty Index (MPI)
- Beyond income poverty
- 10 indicators across 3 dimensions
- Health, education, living standards

## India's Human Development

### Current Status
- HDI Rank: ~132/191
- HDI Value: ~0.633
- Category: Medium

### Challenges
- Gender inequality
- Regional disparities
- Education quality
- Healthcare access

### State-level Variations
- Highest: Kerala, Goa, Himachal Pradesh
- Lowest: Bihar, Jharkhand, UP
            `,
            flashcards: [
              { front: 'What is Human Development Index (HDI)?', back: 'Composite index measuring human development through: 1) Life expectancy (health), 2) Years of schooling (education), 3) GNI per capita (income). Developed by UNDP.' },
              { front: 'What are the 3 dimensions of HDI?', back: '1) Health - Life expectancy at birth, 2) Education - Mean and expected years of schooling, 3) Standard of living - GNI per capita (PPP).' },
              { front: 'What is India\'s HDI rank?', back: 'India ranks around 132 out of 191 countries with HDI value of ~0.633, falling in Medium Human Development category.' },
              { front: 'Which Indian state has highest HDI?', back: 'Kerala has the highest HDI in India, followed by Goa and Himachal Pradesh.' },
              { front: 'What is Gender Inequality Index (GII)?', back: 'Index measuring gender-based disadvantage in reproductive health, empowerment, and labor market. Lower value means less inequality.' }
            ],
            mcqs: [
              { question: 'HDI was developed by:', options: ['World Bank', 'IMF', 'UNDP', 'WHO'], correctAnswer: 2 },
              { question: 'Which is NOT a component of HDI?', options: ['Life expectancy', 'Education', 'Per capita income', 'Population growth'], correctAnswer: 3 },
              { question: 'India falls in which HDI category?', options: ['Very High', 'High', 'Medium', 'Low'], correctAnswer: 2 }
            ],
            reels: [
              { title: 'HDI Components', content: 'Health (Life expectancy) + Education (Schooling) + Income (GNI) = HDI 📊' },
              { title: 'HDI Categories', content: 'Very High: 0.8+ | High: 0.7+ | Medium: 0.55+ | Low: <0.55 📈' },
              { title: 'India HDI', content: 'Rank ~132 | Value ~0.633 | Category: Medium | Best state: Kerala 🇮🇳' },
              { title: 'HD vs Economic Growth', content: 'Growth = More money 💰 | Development = Better life 🌟' }
            ]
          },
          {
            id: 'geo-ch5',
            title: 'Chapter 5: Primary Activities',
            description: 'Agriculture, mining, fishing, forestry',
            summary: `
# Primary Activities

## Key Concepts

### Definition
Activities directly using natural resources
- Agriculture, Mining, Fishing, Forestry, Animal husbandry

### Types of Agriculture
1. **Subsistence**: For self-consumption
   - Primitive (shifting cultivation)
   - Intensive (rice farming)
2. **Commercial**: For sale in market
   - Plantation (tea, coffee, rubber)
   - Mixed farming
   - Dairy farming

### Green Revolution
- 1960s in India
- High Yielding Varieties (HYV)
- Punjab, Haryana leading states
- Increased wheat and rice production

### Mining
- **Surface Mining**: Open pit, quarrying
- **Underground Mining**: Shaft, drift mining
- Major minerals: Coal, iron, petroleum
            `,
            detailedNotes: `
# Detailed Notes: Primary Activities

## Types of Economic Activities

### Classification
1. **Primary**: Direct use of nature (agriculture, mining)
2. **Secondary**: Manufacturing, processing
3. **Tertiary**: Services (trade, transport)
4. **Quaternary**: Knowledge-based (IT, research)

## Agriculture

### Subsistence Agriculture
| Type | Features | Examples |
|------|----------|----------|
| Primitive Shifting | Slash and burn, migrate | Jhum (NE India) |
| Intensive Subsistence | Small plots, labor-intensive | Rice in Asia |
| Pastoral Nomadism | Herding animals, migrate | Gujjars, Bakkarwals |

### Commercial Agriculture
| Type | Features | Crops |
|------|----------|-------|
| Plantation | Large estates, single crop | Tea, coffee, rubber |
| Mixed Farming | Crops + livestock | Europe, USA |
| Dairy Farming | Milk production | Denmark, Netherlands |
| Market Gardening | Vegetables for cities | Near urban areas |

### Factors Affecting Agriculture
1. **Physical**: Climate, soil, relief, water
2. **Economic**: Market, transport, labor, capital
3. **Institutional**: Land tenure, government policy

## Green Revolution

### Features
- High Yielding Variety (HYV) seeds
- Chemical fertilizers
- Irrigation expansion
- Mechanization

### Impacts
**Positive:**
- Increased food production
- Self-sufficiency in food grains
- Improved farmer income

**Negative:**
- Regional disparity
- Groundwater depletion
- Soil degradation
- Small farmer marginalization

## Mining

### Types of Mining
1. **Surface Mining**
   - Open-pit: Large deposits near surface
   - Quarrying: Building materials
   - Placer: River deposits

2. **Underground Mining**
   - Shaft mining: Vertical access
   - Drift mining: Horizontal tunnels

### Major Minerals in India
| Mineral | Major Producing States |
|---------|----------------------|
| Coal | Jharkhand, Odisha, Chhattisgarh |
| Iron Ore | Odisha, Jharkhand, Karnataka |
| Petroleum | Mumbai High, Gujarat, Assam |
| Bauxite | Odisha, Gujarat, Jharkhand |

### Mining and Environment
- Land degradation
- Water pollution
- Air pollution
- Displacement of people
- Rehabilitation issues
            `,
            flashcards: [
              { front: 'What are primary activities?', back: 'Economic activities that directly extract or harvest resources from nature: agriculture, mining, fishing, forestry, animal husbandry.' },
              { front: 'What is shifting cultivation?', back: 'Primitive subsistence farming where forests are cleared by slash and burn, crops grown for few years, then area abandoned. Called Jhum in NE India.' },
              { front: 'What was Green Revolution?', back: 'Agricultural transformation in 1960s using HYV seeds, fertilizers, irrigation. Made India self-sufficient in food grains. Punjab, Haryana led.' },
              { front: 'Difference between surface and underground mining?', back: 'Surface: Minerals near surface extracted by open-pit/quarrying. Underground: Deep minerals accessed through shafts and tunnels.' },
              { front: 'What is plantation agriculture?', back: 'Commercial farming on large estates growing single cash crop (tea, coffee, rubber) for export. Labor-intensive, colonial origin.' }
            ],
            mcqs: [
              { question: 'Jhum cultivation is practiced in:', options: ['Punjab', 'Northeast India', 'Rajasthan', 'Maharashtra'], correctAnswer: 1 },
              { question: 'Green Revolution was most successful in:', options: ['Kerala', 'Bihar', 'Punjab-Haryana', 'Odisha'], correctAnswer: 2 },
              { question: 'Largest coal producing state in India:', options: ['West Bengal', 'Jharkhand', 'Maharashtra', 'Tamil Nadu'], correctAnswer: 1 }
            ],
            reels: [
              { title: 'Primary Activities', content: 'Agriculture + Mining + Fishing + Forestry = Primary (From nature directly) 🌾⛏️🐟🌲' },
              { title: 'Agriculture Types', content: 'Subsistence: For self | Commercial: For sale | Plantation: Single crop export 🌱' },
              { title: 'Green Revolution', content: 'HYV + Fertilizers + Irrigation = Food surplus 🌾 | Punjab-Haryana leaders!' },
              { title: 'Mining Types', content: 'Surface: Open pit (near surface) | Underground: Shafts (deep) ⛏️' }
            ]
          }
        ]
      },
      {
        id: 'psy',
        name: 'Psychology',
        icon: 'Brain',
        color: 'bg-pink-500',
        syllabus: '1. Introduction to Psychology\n2. Biological Basis of Behavior\n3. Learning\n4. Memory\n5. Intelligence & Aptitude',
        paperPattern: '### Psychology Paper Pattern (80 Marks)\n\n* **Q.1 MCQs (16 Marks)**\n* **Q.2 Answer in Brief (16 Marks)**\n* **Q.3 Short Notes (16 Marks)**\n* **Q.4 Long Answers (16 Marks)**\n* **Q.5 Case Study (16 Marks)**',
        previousPapers: ['2024 Psychology Paper', '2023 Psychology Paper'],
        chapters: [
          {
            id: 'psy-ch1',
            title: 'Chapter 1: Introduction to Psychology',
            description: 'Nature, scope, and methods of psychology',
            summary: `
# Introduction to Psychology

## Key Concepts

### What is Psychology?
- Scientific study of behavior and mental processes
- Word origin: Psyche (soul) + Logos (study)
- Modern definition: Scientific study of mind and behavior

### Goals of Psychology
1. **Describe**: What is happening?
2. **Explain**: Why is it happening?
3. **Predict**: What will happen next?
4. **Control**: How can behavior be changed?

### Schools of Psychology
| School | Focus | Founder |
|--------|-------|---------|
| Structuralism | Basic elements of consciousness | Wundt |
| Functionalism | Purpose of mental processes | William James |
| Behaviorism | Observable behavior only | Watson, Skinner |
| Psychoanalysis | Unconscious mind | Freud |
| Humanistic | Self-actualization | Maslow, Rogers |
| Cognitive | Mental processes, thinking | Piaget |

### Branches of Psychology
- **Clinical**: Mental disorders treatment
- **Counseling**: Life problems, adjustment
- **Educational**: Learning, teaching
- **Industrial/Organizational**: Workplace
- **Social**: Group behavior, attitudes
- **Developmental**: Lifespan changes
            `,
            detailedNotes: `
# Detailed Notes: Introduction to Psychology

## Definition and Nature

### Etymology
- Psyche = Soul/Mind (Greek)
- Logos = Study/Science
- Earlier: Study of soul → Study of mind → Study of behavior

### Modern Definition
"Psychology is the scientific study of behavior and mental processes"
- **Scientific**: Uses systematic methods
- **Behavior**: Observable actions
- **Mental processes**: Thoughts, feelings, emotions

### Characteristics
- Empirical: Based on observation
- Systematic: Follows scientific method
- Objective: Minimizes bias

## Historical Development

### Pre-Scientific Era
- Philosophy and religion
- Soul, mind-body problem
- Introspection method

### Scientific Era (1879)
- Wilhelm Wundt: First psychology lab (Leipzig, Germany)
- Father of Experimental Psychology

## Schools of Psychology

### Structuralism (Wundt, Titchener)
- Goal: Analyze structure of consciousness
- Method: Introspection
- Break experience into basic elements (sensations, images, feelings)

### Functionalism (William James)
- Goal: Understand function of consciousness
- Influenced by Darwin's evolution
- How behavior helps adaptation

### Behaviorism (Watson, Skinner)
- Focus only on observable behavior
- Reject study of mind/consciousness
- Stimulus → Response
- Environment shapes behavior

### Psychoanalysis (Freud)
- Unconscious mind influences behavior
- Childhood experiences important
- Id, Ego, Superego
- Dream analysis, free association

### Humanistic (Maslow, Rogers)
- Focus on positive growth
- Self-actualization
- Free will and choice
- Client-centered therapy

### Cognitive (Piaget, Chomsky)
- Mental processes: thinking, memory, problem-solving
- Information processing model
- Computer metaphor for mind

## Research Methods

### Experimental Method
- Independent and dependent variables
- Control group vs experimental group
- Cause-effect relationship

### Observation
- Naturalistic: In natural setting
- Participant: Researcher joins group
- Non-participant: Observer only

### Survey/Questionnaire
- Large sample data
- Attitudes, opinions, behaviors
- Self-report method

### Case Study
- In-depth study of individual
- Qualitative data
- Limited generalization

### Correlation
- Relationship between variables
- Positive, negative, zero correlation
- Does not prove causation

## Branches of Psychology

| Branch | Focus Area |
|--------|------------|
| Clinical | Diagnosis and treatment of mental disorders |
| Counseling | Personal, social, vocational problems |
| Educational | Learning, teaching, classroom |
| Developmental | Changes across lifespan |
| Social | Group behavior, attitudes, influence |
| Industrial/Organizational | Workplace, productivity, selection |
| Cognitive | Thinking, memory, language |
| Sports | Performance, motivation in sports |
| Forensic | Law and criminal behavior |
| Health | Health behaviors, stress, coping |
            `,
            flashcards: [
              { front: 'What is psychology?', back: 'Scientific study of behavior and mental processes. From Greek: Psyche (soul/mind) + Logos (study).' },
              { front: 'Who is the father of psychology?', back: 'Wilhelm Wundt - established first psychology laboratory in Leipzig, Germany in 1879.' },
              { front: 'What are the 4 goals of psychology?', back: 'Describe (what), Explain (why), Predict (future), Control (change behavior).' },
              { front: 'What is behaviorism?', back: 'School of psychology focusing only on observable behavior, ignoring mental processes. Founded by Watson. S-R (Stimulus-Response) approach.' },
              { front: 'Who founded psychoanalysis?', back: 'Sigmund Freud - emphasized unconscious mind, childhood experiences, Id-Ego-Superego structure.' }
            ],
            mcqs: [
              { question: 'First psychology lab was established by:', options: ['Freud', 'Watson', 'Wundt', 'Skinner'], correctAnswer: 2 },
              { question: 'Behaviorism focuses on:', options: ['Unconscious mind', 'Observable behavior', 'Dreams', 'Self-actualization'], correctAnswer: 1 },
              { question: 'Hierarchy of needs was given by:', options: ['Freud', 'Maslow', 'Watson', 'Wundt'], correctAnswer: 1 },
              { question: 'Psychology is derived from Greek words meaning:', options: ['Mind and body', 'Soul and study', 'Brain and science', 'Thought and logic'], correctAnswer: 1 }
            ],
            reels: [
              { title: 'Psychology Definition', content: 'Scientific study of BEHAVIOR + MENTAL PROCESSES 🧠' },
              { title: '4 Goals of Psychology', content: 'Describe → Explain → Predict → Control 🎯' },
              { title: 'Schools Timeline', content: 'Structuralism → Functionalism → Behaviorism → Psychoanalysis → Humanistic → Cognitive 📚' },
              { title: 'Father of Psychology', content: 'Wilhelm Wundt | 1879 | Leipzig, Germany | First Lab 🔬' }
            ]
          },
          {
            id: 'psy-ch2',
            title: 'Chapter 2: Biological Basis of Behavior',
            description: 'Brain, nervous system, and behavior',
            summary: `
# Biological Basis of Behavior

## Key Concepts

### Neuron (Nerve Cell)
- Basic unit of nervous system
- Parts: Dendrites, Cell body, Axon, Synapse
- Types: Sensory, Motor, Interneurons

### Nervous System Structure
1. **Central Nervous System (CNS)**
   - Brain
   - Spinal Cord

2. **Peripheral Nervous System (PNS)**
   - Somatic (voluntary)
   - Autonomic (involuntary)
     - Sympathetic (arousal)
     - Parasympathetic (calm)

### Brain Structure
- **Forebrain**: Cerebrum, Thalamus, Hypothalamus
- **Midbrain**: Relay station
- **Hindbrain**: Cerebellum, Pons, Medulla

### Cerebral Lobes
| Lobe | Function |
|------|----------|
| Frontal | Thinking, planning, personality |
| Parietal | Touch, spatial awareness |
| Temporal | Hearing, memory |
| Occipital | Vision |

### Endocrine System
- Glands secreting hormones
- Pituitary: Master gland
- Thyroid, Adrenal, Pancreas, Gonads
            `,
            detailedNotes: `
# Detailed Notes: Biological Basis of Behavior

## The Neuron

### Structure
1. **Dendrites**: Receive messages from other neurons
2. **Cell Body (Soma)**: Contains nucleus, maintains cell
3. **Axon**: Carries impulse away from cell body
4. **Myelin Sheath**: Insulates axon, speeds transmission
5. **Terminal Buttons**: Release neurotransmitters
6. **Synapse**: Gap between neurons

### Neural Transmission
- Electrical within neuron
- Chemical across synapse
- Neurotransmitters: Dopamine, Serotonin, Acetylcholine

### Types of Neurons
| Type | Function | Direction |
|------|----------|-----------|
| Sensory (Afferent) | Carry info to brain | Receptor → CNS |
| Motor (Efferent) | Carry commands | CNS → Muscles |
| Interneurons | Connect neurons | Within CNS |

## Nervous System

### Central Nervous System (CNS)
**Brain:**
- Control center
- Protected by skull, meninges, CSF

**Spinal Cord:**
- Connects brain to PNS
- Reflex actions
- Protected by vertebrae

### Peripheral Nervous System (PNS)

**Somatic Nervous System:**
- Voluntary control
- Skeletal muscles
- Conscious movements

**Autonomic Nervous System:**
- Involuntary control
- Internal organs

| Sympathetic | Parasympathetic |
|-------------|-----------------|
| Fight or flight | Rest and digest |
| Increases heart rate | Decreases heart rate |
| Dilates pupils | Constricts pupils |
| Inhibits digestion | Stimulates digestion |
| Emergency response | Normal maintenance |

## Brain Structure

### Hindbrain
- **Medulla Oblongata**: Vital functions (breathing, heart)
- **Pons**: Bridge, sleep, arousal
- **Cerebellum**: Balance, coordination, motor learning

### Midbrain
- Relay station for sensory info
- Eye movement, auditory reflexes
- Contains reticular formation (alertness)

### Forebrain
- **Thalamus**: Sensory relay station
- **Hypothalamus**: Hunger, thirst, temperature, emotions
- **Limbic System**: Emotions, memory (Amygdala, Hippocampus)
- **Cerebrum**: Largest part, higher functions

### Cerebral Cortex (Lobes)

| Lobe | Location | Functions |
|------|----------|-----------|
| Frontal | Front | Planning, decision, personality, motor |
| Parietal | Top-back | Touch, pressure, spatial |
| Temporal | Sides | Hearing, language, memory |
| Occipital | Back | Vision |

### Hemispheres
- Left: Language, logic, analytical (controls right body)
- Right: Spatial, creativity, holistic (controls left body)
- Connected by Corpus Callosum

## Endocrine System

### Major Glands
| Gland | Hormones | Functions |
|-------|----------|-----------|
| Pituitary | Growth hormone, etc. | Master gland, controls others |
| Thyroid | Thyroxine | Metabolism |
| Adrenal | Adrenaline, Cortisol | Stress response |
| Pancreas | Insulin, Glucagon | Blood sugar |
| Gonads | Testosterone, Estrogen | Sexual development |
            `,
            flashcards: [
              { front: 'What are the parts of a neuron?', back: 'Dendrites (receive), Cell body (nucleus), Axon (transmit), Synapse (gap). Myelin sheath speeds transmission.' },
              { front: 'What is the function of sympathetic nervous system?', back: 'Fight or flight response - increases heart rate, dilates pupils, releases adrenaline. Prepares body for emergency.' },
              { front: 'Name the 4 lobes of cerebrum.', back: 'Frontal (thinking), Parietal (touch), Temporal (hearing), Occipital (vision). Mnemonic: FPTO.' },
              { front: 'Which gland is called master gland?', back: 'Pituitary gland - controls other endocrine glands. Located at base of brain, controlled by hypothalamus.' },
              { front: 'What is the function of cerebellum?', back: 'Balance, coordination, and motor learning. Located in hindbrain. Damage causes ataxia (uncoordinated movement).' }
            ],
            mcqs: [
              { question: 'Which carries impulse away from cell body?', options: ['Dendrite', 'Axon', 'Synapse', 'Soma'], correctAnswer: 1 },
              { question: 'Fight or flight response is controlled by:', options: ['Parasympathetic', 'Sympathetic', 'Somatic', 'Central'], correctAnswer: 1 },
              { question: 'Vision is processed in which lobe?', options: ['Frontal', 'Parietal', 'Temporal', 'Occipital'], correctAnswer: 3 },
              { question: 'Master gland is:', options: ['Thyroid', 'Pituitary', 'Adrenal', 'Pancreas'], correctAnswer: 1 }
            ],
            reels: [
              { title: 'Neuron Parts', content: 'Dendrites (receive) → Cell body → Axon (send) → Synapse (gap) 🔗' },
              { title: 'Sympathetic vs Para', content: 'Sympathetic: Fight/Flight 💪 | Parasympathetic: Rest/Digest 😌' },
              { title: 'Brain Lobes', content: 'Frontal: Think 🤔 | Parietal: Touch ✋ | Temporal: Hear 👂 | Occipital: See 👁️' },
              { title: 'Left vs Right Brain', content: 'Left: Logic, Language, Math 📐 | Right: Creativity, Spatial, Art 🎨' }
            ]
          },
          {
            id: 'psy-ch3',
            title: 'Chapter 3: Learning',
            description: 'Types and theories of learning',
            summary: `
# Learning

## Key Concepts

### What is Learning?
- Relatively permanent change in behavior
- Due to experience or practice
- Not due to maturation, fatigue, or drugs

### Types of Learning

1. **Classical Conditioning (Pavlov)**
   - Learning by association
   - Neutral stimulus + Unconditioned stimulus
   - Dog salivation experiment
   - Terms: UCS, UCR, CS, CR

2. **Operant Conditioning (Skinner)**
   - Learning by consequences
   - Reinforcement increases behavior
   - Punishment decreases behavior
   - Skinner Box experiment

3. **Observational Learning (Bandura)**
   - Learning by watching others
   - Modeling, imitation
   - Bobo doll experiment
   - Attention → Retention → Reproduction → Motivation

### Key Terms
- **Reinforcement**: Strengthens behavior (positive/negative)
- **Punishment**: Weakens behavior
- **Extinction**: Response disappears when not reinforced
- **Generalization**: Similar stimuli evoke response
- **Discrimination**: Respond to specific stimulus only
            `,
            detailedNotes: `
# Detailed Notes: Learning

## Definition
Learning is a relatively permanent change in behavior or knowledge that results from experience or practice.

### Characteristics
- Relatively permanent (not temporary)
- Change in behavior or potential
- Results from experience/practice
- Not due to maturation, drugs, fatigue

## Classical Conditioning

### Pavlov's Experiment
1. Before conditioning:
   - Food (UCS) → Salivation (UCR)
   - Bell (Neutral) → No salivation

2. During conditioning:
   - Bell + Food → Salivation
   - Repeated pairings

3. After conditioning:
   - Bell (CS) → Salivation (CR)

### Key Terms
| Term | Meaning | Example |
|------|---------|---------|
| UCS (Unconditioned Stimulus) | Natural trigger | Food |
| UCR (Unconditioned Response) | Natural response | Salivation to food |
| CS (Conditioned Stimulus) | Learned trigger | Bell |
| CR (Conditioned Response) | Learned response | Salivation to bell |

### Principles
- **Acquisition**: Learning the association
- **Extinction**: CR disappears without UCS
- **Spontaneous Recovery**: CR returns after rest
- **Generalization**: Similar stimuli cause CR
- **Discrimination**: Only specific CS causes CR

### Applications
- Phobias (Little Albert experiment)
- Advertising (product + pleasant images)
- Therapy (systematic desensitization)

## Operant Conditioning

### Skinner's Approach
- Behavior shaped by consequences
- Skinner Box: Animal presses lever for food

### Types of Consequences

**Reinforcement** (Increases behavior):
| Type | Action | Example |
|------|--------|---------|
| Positive | Add pleasant | Praise for good work |
| Negative | Remove unpleasant | Turn off alarm by waking |

**Punishment** (Decreases behavior):
| Type | Action | Example |
|------|--------|---------|
| Positive | Add unpleasant | Scolding for misbehavior |
| Negative | Remove pleasant | Take away phone |

### Schedules of Reinforcement
| Schedule | Description | Example |
|----------|-------------|---------|
| Continuous | Every response rewarded | Vending machine |
| Fixed Ratio | After set number | Piece-rate work |
| Variable Ratio | After variable number | Slot machines |
| Fixed Interval | After set time | Monthly salary |
| Variable Interval | After variable time | Surprise tests |

### Shaping
- Reinforcing successive approximations
- Step-by-step toward target behavior
- Used in animal training

## Observational Learning

### Bandura's Theory
Learning by observing and imitating others (models)

### Bobo Doll Experiment
- Children watched adult hit Bobo doll
- Children imitated aggressive behavior
- Proved learning without direct reinforcement

### Four Processes
1. **Attention**: Notice model's behavior
2. **Retention**: Remember what observed
3. **Reproduction**: Able to perform behavior
4. **Motivation**: Reason to imitate

### Factors Affecting
- Model characteristics (status, similarity)
- Observer characteristics (self-efficacy)
- Consequences to model (vicarious reinforcement)

## Cognitive Learning

### Insight Learning (Köhler)
- Sudden understanding
- Ape problem-solving with sticks
- "Aha!" experience

### Latent Learning (Tolman)
- Learning without immediate reward
- Cognitive maps
- Shown when motivation present
            `,
            flashcards: [
              { front: 'What is classical conditioning?', back: 'Learning by association. Neutral stimulus paired with unconditioned stimulus becomes conditioned stimulus. Discovered by Pavlov with dog salivation.' },
              { front: 'Difference between positive and negative reinforcement?', back: 'Both INCREASE behavior. Positive: Add pleasant stimulus (praise). Negative: Remove unpleasant stimulus (turn off alarm).' },
              { front: 'What is observational learning?', back: 'Learning by watching others (models). Bandura\'s theory. Steps: Attention → Retention → Reproduction → Motivation. Bobo doll experiment.' },
              { front: 'What is extinction in conditioning?', back: 'Gradual weakening and disappearance of conditioned response when conditioned stimulus is presented without unconditioned stimulus.' },
              { front: 'What is shaping in operant conditioning?', back: 'Reinforcing successive approximations toward target behavior. Used to teach complex behaviors step by step.' }
            ],
            mcqs: [
              { question: 'Pavlov is associated with:', options: ['Operant conditioning', 'Classical conditioning', 'Observational learning', 'Insight learning'], correctAnswer: 1 },
              { question: 'Skinner Box is used for:', options: ['Classical conditioning', 'Operant conditioning', 'Cognitive learning', 'Social learning'], correctAnswer: 1 },
              { question: 'Bobo doll experiment was conducted by:', options: ['Pavlov', 'Skinner', 'Bandura', 'Kohler'], correctAnswer: 2 },
              { question: 'Removing unpleasant stimulus to increase behavior is:', options: ['Positive reinforcement', 'Negative reinforcement', 'Positive punishment', 'Negative punishment'], correctAnswer: 1 }
            ],
            reels: [
              { title: 'Classical Conditioning', content: 'Bell + Food → Bell alone = Salivation | Learning by ASSOCIATION 🔔🐕' },
              { title: 'Reinforcement vs Punishment', content: 'Reinforcement: ↑ behavior | Punishment: ↓ behavior 📈📉' },
              { title: 'Positive vs Negative', content: 'Positive: ADD something | Negative: REMOVE something ➕➖' },
              { title: 'Observational Learning', content: 'Attention → Retention → Reproduction → Motivation | Watch & Learn! 👀' }
            ]
          },
          {
            id: 'psy-ch4',
            title: 'Chapter 4: Memory',
            description: 'Memory processes and types',
            summary: `
# Memory

## Key Concepts

### What is Memory?
- Ability to encode, store, and retrieve information
- Essential for learning and identity

### Memory Processes
1. **Encoding**: Converting info to storable form
2. **Storage**: Maintaining info over time
3. **Retrieval**: Accessing stored info

### Types of Memory (Duration)
| Type | Duration | Capacity |
|------|----------|----------|
| Sensory | <1 second | Large |
| Short-term (STM) | 15-30 seconds | 7±2 items |
| Long-term (LTM) | Unlimited | Unlimited |

### Types of LTM
- **Explicit (Declarative)**
  - Episodic: Personal events
  - Semantic: Facts, concepts
- **Implicit (Non-declarative)**
  - Procedural: Skills (cycling)
  - Priming, conditioning

### Forgetting
- **Decay**: Memory fades over time
- **Interference**: Other memories block
- **Retrieval Failure**: Cue-dependent
- **Motivated Forgetting**: Repression
            `,
            detailedNotes: `
# Detailed Notes: Memory

## Definition
Memory is the mental process of encoding, storing, and retrieving information.

## Memory Processes

### 1. Encoding
Converting sensory input into storable form
- **Visual**: Images
- **Acoustic**: Sounds
- **Semantic**: Meaning (most durable)

### 2. Storage
Maintaining encoded information
- Structural changes in brain
- Neural connections

### 3. Retrieval
Accessing stored information
- Recall: Reproduce from memory
- Recognition: Identify previously learned

## Multi-Store Model (Atkinson & Shiffrin)

### Sensory Memory
- Duration: Fraction of second
- Capacity: Very large
- Types:
  - Iconic: Visual (<0.5 sec)
  - Echoic: Auditory (3-4 sec)

### Short-Term Memory (STM)
- Duration: 15-30 seconds (without rehearsal)
- Capacity: 7±2 items (Miller's magic number)
- Working memory: Active processing

**Improving STM:**
- Rehearsal (repetition)
- Chunking (grouping items)

### Long-Term Memory (LTM)
- Duration: Potentially permanent
- Capacity: Unlimited
- Requires meaningful encoding

## Types of Long-Term Memory

### Explicit (Declarative) Memory
Conscious, intentional recall

| Type | Content | Example |
|------|---------|---------|
| Episodic | Personal experiences | Birthday party |
| Semantic | Facts, concepts | Capital of India |

### Implicit (Non-declarative) Memory
Unconscious, automatic

| Type | Content | Example |
|------|---------|---------|
| Procedural | Skills, habits | Riding bicycle |
| Priming | Previous exposure effect | Word completion |
| Conditioning | Learned associations | Fear response |

## Forgetting

### Theories of Forgetting

**1. Decay Theory**
- Memory trace fades over time
- Disuse leads to forgetting

**2. Interference Theory**
- Proactive: Old interferes with new
- Retroactive: New interferes with old

**3. Retrieval Failure**
- Information stored but cannot access
- Tip-of-tongue phenomenon
- Need appropriate cues

**4. Motivated Forgetting**
- Repression: Unconscious blocking
- Suppression: Conscious avoiding
- Traumatic memories

### Ebbinghaus Forgetting Curve
- Rapid initial forgetting
- Slows over time
- Most forgotten in first hour

## Improving Memory

### Encoding Strategies
- **Elaboration**: Connect to existing knowledge
- **Visual imagery**: Create mental pictures
- **Organization**: Categorize information
- **Mnemonic devices**: Memory aids

### Common Mnemonics
- Acronyms: VIBGYOR for colors
- Method of loci: Mental walk
- Pegword: Number-word associations
- Chunking: Group into units

### Study Techniques
- Spaced practice (vs massed)
- Testing effect (retrieval practice)
- Sleep consolidation
- Minimize interference
            `,
            flashcards: [
              { front: 'What are the 3 processes of memory?', back: 'Encoding (convert to storable form), Storage (maintain over time), Retrieval (access stored info).' },
              { front: 'What is the capacity of short-term memory?', back: '7±2 items (Miller\'s magic number). Duration: 15-30 seconds without rehearsal. Can be improved by chunking.' },
              { front: 'Difference between episodic and semantic memory?', back: 'Episodic: Personal experiences, events (your birthday). Semantic: Facts, concepts, general knowledge (India\'s capital).' },
              { front: 'What is proactive interference?', back: 'Old information interferes with learning new information. Example: Old phone number interferes with remembering new one.' },
              { front: 'What is procedural memory?', back: 'Implicit memory for skills and how to do things. Example: Riding bicycle, typing. Doesn\'t require conscious recall.' }
            ],
            mcqs: [
              { question: 'Capacity of STM is:', options: ['5±2', '7±2', '9±2', 'Unlimited'], correctAnswer: 1 },
              { question: 'Memory for personal events is:', options: ['Semantic', 'Episodic', 'Procedural', 'Implicit'], correctAnswer: 1 },
              { question: 'Old memories interfering with new is:', options: ['Retroactive', 'Proactive', 'Decay', 'Repression'], correctAnswer: 1 },
              { question: 'Riding a bicycle involves which memory?', options: ['Episodic', 'Semantic', 'Procedural', 'Sensory'], correctAnswer: 2 }
            ],
            reels: [
              { title: 'Memory Processes', content: 'Encode (input) → Store (save) → Retrieve (access) 💾' },
              { title: 'Memory Stores', content: 'Sensory (<1s) → STM (30s, 7±2) → LTM (forever, unlimited) 📦' },
              { title: 'Explicit vs Implicit', content: 'Explicit: Conscious (facts, events) | Implicit: Unconscious (skills) 🧠' },
              { title: 'Interference', content: 'Proactive: Old blocks new | Retroactive: New blocks old 🚫' }
            ]
          },
          {
            id: 'psy-ch5',
            title: 'Chapter 5: Intelligence & Aptitude',
            description: 'Understanding intelligence and its measurement',
            summary: `
# Intelligence & Aptitude

## Key Concepts

### What is Intelligence?
- Ability to learn, understand, adapt
- Problem-solving capacity
- Multiple definitions by psychologists

### IQ (Intelligence Quotient)
- IQ = (Mental Age / Chronological Age) × 100
- Average IQ = 100
- Developed by Stern

### Intelligence Tests
- **Binet-Simon**: First IQ test (1905)
- **Stanford-Binet**: American version
- **Wechsler**: WAIS (adults), WISC (children)

### Theories of Intelligence
1. **Spearman**: g-factor (general) + s-factor (specific)
2. **Thurstone**: 7 Primary Mental Abilities
3. **Gardner**: Multiple Intelligences (8 types)
4. **Sternberg**: Triarchic (Analytical, Creative, Practical)
5. **Goleman**: Emotional Intelligence

### Multiple Intelligences (Gardner)
1. Linguistic
2. Logical-Mathematical
3. Spatial
4. Musical
5. Bodily-Kinesthetic
6. Interpersonal
7. Intrapersonal
8. Naturalistic
            `,
            detailedNotes: `
# Detailed Notes: Intelligence & Aptitude

## Definition of Intelligence

### Various Definitions
- **Binet**: Ability to judge, understand, reason
- **Wechsler**: Global capacity to act purposefully, think rationally, deal effectively with environment
- **Gardner**: Ability to solve problems or create products valued in culture

### Characteristics
- Abstract thinking
- Learning from experience
- Adapting to environment
- Problem-solving

## Measurement of Intelligence

### IQ Formula (Ratio IQ)
IQ = (Mental Age / Chronological Age) × 100

### IQ Classification
| IQ Range | Classification |
|----------|----------------|
| Above 140 | Genius |
| 120-140 | Superior |
| 110-119 | Above average |
| 90-109 | Average |
| 80-89 | Below average |
| 70-79 | Borderline |
| Below 70 | Intellectually disabled |

### Major IQ Tests

**Binet-Simon Scale (1905)**
- First intelligence test
- Developed in France
- Measured mental age

**Stanford-Binet (1916)**
- American revision by Terman
- Introduced IQ concept
- Ages 2-adult

**Wechsler Scales**
- WAIS: Wechsler Adult Intelligence Scale
- WISC: Wechsler Intelligence Scale for Children
- WPPSI: Wechsler Preschool and Primary Scale
- Verbal + Performance IQ

## Theories of Intelligence

### Spearman's Two-Factor Theory
- **g-factor**: General intelligence (common to all tasks)
- **s-factor**: Specific abilities (unique to each task)

### Thurstone's Primary Mental Abilities
1. Verbal comprehension
2. Word fluency
3. Number facility
4. Spatial visualization
5. Associative memory
6. Perceptual speed
7. Reasoning

### Gardner's Multiple Intelligences
| Type | Description | Career Example |
|------|-------------|----------------|
| Linguistic | Words, language | Writer, lawyer |
| Logical-Mathematical | Numbers, reasoning | Scientist, accountant |
| Spatial | Visual thinking | Artist, architect |
| Musical | Rhythm, melody | Musician, composer |
| Bodily-Kinesthetic | Physical skills | Athlete, dancer |
| Interpersonal | Understanding others | Teacher, salesperson |
| Intrapersonal | Self-understanding | Philosopher |
| Naturalistic | Nature patterns | Biologist, farmer |

### Sternberg's Triarchic Theory
1. **Analytical**: Academic problem-solving
2. **Creative**: Novel solutions
3. **Practical**: Street smart, adapting

### Emotional Intelligence (Goleman)
- Self-awareness
- Self-regulation
- Motivation
- Empathy
- Social skills

## Aptitude

### Definition
Potential ability to learn or perform in specific area

### Types of Aptitude
- Verbal
- Numerical
- Spatial
- Mechanical
- Clerical
- Musical
- Artistic

### Aptitude vs Achievement
| Aptitude | Achievement |
|----------|-------------|
| Potential ability | Actual performance |
| What you CAN do | What you HAVE done |
| Predictive | Evaluative |

### Aptitude Tests
- Differential Aptitude Test (DAT)
- General Aptitude Test Battery (GATB)
- Used for career guidance, selection
            `,
            flashcards: [
              { front: 'What is the IQ formula?', back: 'IQ = (Mental Age / Chronological Age) × 100. Average IQ is 100. Developed by William Stern.' },
              { front: 'What are Gardner\'s 8 Multiple Intelligences?', back: 'Linguistic, Logical-Mathematical, Spatial, Musical, Bodily-Kinesthetic, Interpersonal, Intrapersonal, Naturalistic.' },
              { front: 'What is Spearman\'s g-factor?', back: 'General intelligence factor common to all mental abilities. Spearman believed g-factor underlies performance on all cognitive tasks.' },
              { front: 'What is Sternberg\'s Triarchic Theory?', back: 'Three types of intelligence: Analytical (academic), Creative (novel ideas), Practical (street smart, adaptation).' },
              { front: 'Difference between aptitude and achievement?', back: 'Aptitude: Potential, what you CAN do, predictive. Achievement: Performance, what you HAVE done, evaluative.' }
            ],
            mcqs: [
              { question: 'First intelligence test was developed by:', options: ['Wechsler', 'Terman', 'Binet-Simon', 'Spearman'], correctAnswer: 2 },
              { question: 'Average IQ is:', options: ['90', '100', '110', '120'], correctAnswer: 1 },
              { question: 'Multiple Intelligences theory was given by:', options: ['Spearman', 'Sternberg', 'Gardner', 'Thurstone'], correctAnswer: 2 },
              { question: 'Emotional Intelligence concept was popularized by:', options: ['Gardner', 'Goleman', 'Sternberg', 'Binet'], correctAnswer: 1 }
            ],
            reels: [
              { title: 'IQ Formula', content: 'IQ = (Mental Age ÷ Chronological Age) × 100 | Average = 100 📊' },
              { title: 'Gardner\'s 8', content: 'Linguistic | Logical | Spatial | Musical | Bodily | Inter | Intra | Naturalistic 🧠' },
              { title: 'Sternberg Triarchic', content: 'Analytical (academic) + Creative (new ideas) + Practical (street smart) = Success! 🎯' },
              { title: 'Aptitude vs Achievement', content: 'Aptitude: What you CAN do (potential) | Achievement: What you DID (performance) 📈' }
            ]
          }
        ]
      }
    ] 
  },
  [Stream.SCIENCE]: { 
    id: Stream.SCIENCE, 
    subjects: [
      ENGLISH_SUBJECT,
      {
        id: 'phy', 
        name: 'Physics', 
        icon: 'Atom', 
        color: 'bg-blue-600', 
        syllabus: '1. Rotational Dynamics\n2. Mechanical Properties of Fluids\n3. Kinetic Theory of Gases\n4. Thermodynamics\n5. Oscillations\n6. Superposition of Waves\n7. Wave Optics\n8. Electrostatics\n9. Current Electricity\n10. Magnetic Effects of Electric Current\n11. Magnetic Materials\n12. Electromagnetic Induction\n13. AC Circuits\n14. Dual Nature of Radiation & Matter\n15. Structure of Atom\n16. Semiconductor Devices',
        paperPattern: '### Physics Paper Pattern (70 Marks)\n\n* **Section A (14 Marks)**: 7 MCQs (2 marks each)\n* **Section B (18 Marks)**: Very short answers\n* **Section C (12 Marks)**: Short answers\n* **Section D (8 Marks)**: Long answers (Any 2 out of 3)\n* **Section E (18 Marks)**: Numericals\n* **Internal Assessment (30 Marks)**: Practical',
        previousPapers: [], 
        chapters: [
          {
            id: 'phy1',
            title: '1. Rotational Dynamics',
            description: 'Angular momentum, Moment of inertia, Torque.',
            summary: '**Rotational Motion**: Motion about a fixed axis\n**Torque (τ)**: τ = r × F = Iα\n**Moment of Inertia (I)**: Rotational mass\n**Angular Momentum (L)**: L = Iω\n**Conservation**: L = constant when τ = 0',
            detailedNotes: '### 1. Rotational Motion\nMotion of a rigid body about a fixed axis.\n\n### 2. Angular Quantities\n* **Angular Displacement (θ)**: Angle rotated (in radians)\n* **Angular Velocity (ω)**: ω = dθ/dt (rad/s)\n* **Angular Acceleration (α)**: α = dω/dt (rad/s²)\n\n### 3. Relation with Linear Motion\n* s = rθ\n* v = rω\n* a = rα\n\n### 4. Torque (τ)\n* Rotational equivalent of force\n* τ = r × F = rF sin θ\n* τ = Iα (Newton\'s second law for rotation)\n* Unit: N·m\n\n### 5. Moment of Inertia (I)\n* Rotational equivalent of mass\n* I = Σmr² (for particles)\n* I = ∫r² dm (for continuous body)\n* Depends on axis of rotation\n\n**Common MOI Values:**\n* Ring (axis through center): I = MR²\n* Disc (axis through center): I = ½MR²\n* Solid Sphere: I = ⅖MR²\n* Hollow Sphere: I = ⅔MR²\n* Rod (center): I = ML²/12\n* Rod (end): I = ML²/3\n\n### 6. Theorems\n**Parallel Axis Theorem:**\nI = Icm + Md²\n\n**Perpendicular Axis Theorem:**\nIz = Ix + Iy (for laminar bodies)\n\n### 7. Angular Momentum (L)\n* L = Iω\n* L = r × p\n* τ = dL/dt\n\n### 8. Conservation of Angular Momentum\nIf τ = 0, then L = constant\nI₁ω₁ = I₂ω₂\n\nExamples: Ice skater spinning, diver somersaulting\n\n### 9. Rotational Kinetic Energy\nKE = ½Iω²\nTotal KE = ½mv² + ½Iω² (rolling)',
            flashcards: [
              { id: 'f1', front: 'Formula for Torque?', back: 'τ = r × F = Iα' },
              { id: 'f2', front: 'Moment of Inertia of a Disc?', back: 'I = ½MR² (axis through center)' },
              { id: 'f3', front: 'Moment of Inertia of a Ring?', back: 'I = MR² (axis through center)' },
              { id: 'f4', front: 'Angular Momentum formula?', back: 'L = Iω = r × p' },
              { id: 'f5', front: 'Parallel Axis Theorem?', back: 'I = Icm + Md² (d = distance from CM axis)' },
              { id: 'f6', front: 'When is Angular Momentum conserved?', back: 'When external torque is zero (τ = 0).' },
              { id: 'f7', front: 'Rotational KE formula?', back: 'KE = ½Iω²' }
            ],
            mcqs: [
              { id: 'q1', question: 'SI unit of torque is:', options: ['Joule', 'Newton', 'N·m', 'Watt'], correctIndex: 2, explanation: 'Torque = Force × Distance = N × m = N·m' },
              { id: 'q2', question: 'Moment of inertia of a solid sphere is:', options: ['MR²', '½MR²', '⅖MR²', '⅔MR²'], correctIndex: 2, explanation: 'Solid sphere: I = ⅖MR² about diameter.' },
              { id: 'q3', question: 'Angular momentum is conserved when:', options: ['Force is zero', 'Torque is zero', 'Velocity is zero', 'Acceleration is zero'], correctIndex: 1, explanation: 'L = constant when τ = 0.' },
              { id: 'q4', question: 'Perpendicular axis theorem applies to:', options: ['3D bodies', 'Laminar bodies', 'All bodies', 'Point masses'], correctIndex: 1, explanation: 'Only for flat (2D) bodies.' },
              { id: 'q5', question: 'An ice skater spins faster when arms are pulled in because:', options: ['Mass decreases', 'I decreases', 'Torque increases', 'Energy increases'], correctIndex: 1, explanation: 'I decreases, so ω increases (L = Iω constant).' }
            ],
            reels: [
              { id: 'r1', title: 'Torque', content: 'τ = r × F\nτ = Iα\nRotational force!', color: getReelColor(0) },
              { id: 'r2', title: 'MOI', content: 'Moment of Inertia.\nRotational mass.\nI = Σmr²', color: getReelColor(1) },
              { id: 'r3', title: 'Disc vs Ring', content: 'Ring: I = MR²\nDisc: I = ½MR²\nDisc has less MOI!', color: getReelColor(2) },
              { id: 'r4', title: 'Angular Momentum', content: 'L = Iω\nConserved when τ = 0.\nIce skater example!', color: getReelColor(3) },
              { id: 'r5', title: 'Parallel Axis', content: 'I = Icm + Md²\nShift axis by d.\nI increases!', color: getReelColor(4) },
              { id: 'r6', title: 'Rolling Motion', content: 'KE = ½mv² + ½Iω²\nTranslation + Rotation.', color: getReelColor(5) }
            ]
          },
          {
            id: 'phy2',
            title: '2. Mechanical Properties of Fluids',
            description: 'Viscosity, Surface Tension, Fluid Flow.',
            summary: '**Fluid**: Substance that can flow (liquid/gas)\n**Viscosity**: Internal friction of fluid\n**Surface Tension**: Force per unit length on liquid surface\n**Bernoulli\'s Principle**: P + ½ρv² + ρgh = constant',
            detailedNotes: '### 1. Pressure in Fluids\n* Pressure = Force/Area = F/A\n* SI Unit: Pascal (Pa) = N/m²\n* Atmospheric Pressure: 1.013 × 10⁵ Pa\n\n### 2. Pascal\'s Law\nPressure applied to enclosed fluid is transmitted equally in all directions.\n**Applications**: Hydraulic lift, hydraulic brakes\n\n### 3. Viscosity\n* Internal friction in fluids\n* **Newton\'s Law of Viscosity**: F = ηA(dv/dx)\n* η = coefficient of viscosity\n* SI Unit: Pa·s or Poiseuille\n* CGS Unit: Poise (1 Pa·s = 10 Poise)\n\n**Stokes\' Law**:\nF = 6πηrv (for sphere in fluid)\n\n**Terminal Velocity**:\nvₜ = 2r²(ρ-σ)g / 9η\n\n### 4. Surface Tension\n* Force per unit length on liquid surface\n* T = F/L\n* SI Unit: N/m\n* Due to cohesive forces\n\n**Applications**:\n* Water droplets are spherical\n* Insects walking on water\n* Capillary action\n\n**Excess Pressure**:\n* Soap bubble: ΔP = 4T/r\n* Liquid drop: ΔP = 2T/r\n\n### 5. Capillarity\n* Rise or fall of liquid in narrow tube\n* h = 2T cos θ / ρgr\n* Water rises (θ < 90°), Mercury falls (θ > 90°)\n\n### 6. Fluid Dynamics\n**Equation of Continuity**:\nA₁v₁ = A₂v₂ (for incompressible fluid)\n\n**Bernoulli\'s Theorem**:\nP + ½ρv² + ρgh = constant\n\n**Applications**:\n* Airplane wings (lift)\n* Venturi meter\n* Atomizer\n* Magnus effect',
            flashcards: [
              { id: 'f1', front: 'What is Pascal\'s Law?', back: 'Pressure in enclosed fluid is transmitted equally in all directions.' },
              { id: 'f2', front: 'Formula for Stokes\' Law?', back: 'F = 6πηrv (viscous drag on sphere)' },
              { id: 'f3', front: 'Bernoulli\'s Equation?', back: 'P + ½ρv² + ρgh = constant' },
              { id: 'f4', front: 'Excess pressure in soap bubble?', back: 'ΔP = 4T/r (two surfaces)' },
              { id: 'f5', front: 'Excess pressure in liquid drop?', back: 'ΔP = 2T/r (one surface)' },
              { id: 'f6', front: 'Capillary rise formula?', back: 'h = 2T cos θ / ρgr' },
              { id: 'f7', front: 'Equation of Continuity?', back: 'A₁v₁ = A₂v₂ (mass conservation)' }
            ],
            mcqs: [
              { id: 'q1', question: 'SI unit of viscosity is:', options: ['Poise', 'Pa·s', 'N/m', 'Pa'], correctIndex: 1, explanation: 'Pascal-second or Poiseuille.' },
              { id: 'q2', question: 'Excess pressure in soap bubble is:', options: ['2T/r', '4T/r', 'T/r', 'T/2r'], correctIndex: 1, explanation: 'Soap bubble has two surfaces, so 4T/r.' },
              { id: 'q3', question: 'Terminal velocity is proportional to:', options: ['r', 'r²', '1/r', '1/r²'], correctIndex: 1, explanation: 'vₜ ∝ r² from Stokes\' law.' },
              { id: 'q4', question: 'Water rises in capillary because:', options: ['Cohesion > Adhesion', 'Adhesion > Cohesion', 'Surface tension', 'Viscosity'], correctIndex: 1, explanation: 'Water wets glass (contact angle < 90°).' },
              { id: 'q5', question: 'Bernoulli\'s theorem is based on:', options: ['Mass conservation', 'Energy conservation', 'Momentum conservation', 'Charge conservation'], correctIndex: 1, explanation: 'It\'s essentially energy conservation for fluids.' }
            ],
            reels: [
              { id: 'r1', title: 'Pascal\'s Law', content: 'Pressure transmits equally.\nHydraulic lift.\nHydraulic brakes.', color: getReelColor(0) },
              { id: 'r2', title: 'Viscosity', content: 'Internal friction.\nThick fluids = High η.\nHoney > Water.', color: getReelColor(1) },
              { id: 'r3', title: 'Stokes\' Law', content: 'F = 6πηrv\nDrag on sphere.\nTerminal velocity!', color: getReelColor(2) },
              { id: 'r4', title: 'Surface Tension', content: 'T = F/L\nDroplets are spherical.\nInsects walk on water.', color: getReelColor(3) },
              { id: 'r5', title: 'Soap vs Drop', content: 'Soap bubble: ΔP = 4T/r\nDrop: ΔP = 2T/r\n(2 surfaces vs 1)', color: getReelColor(4) },
              { id: 'r6', title: 'Bernoulli', content: 'P + ½ρv² + ρgh = const.\nFast flow = Low pressure.\nAirplane lift!', color: getReelColor(5) }
            ]
          },
          {
            id: 'phy3',
            title: '3. Kinetic Theory of Gases',
            description: 'Behavior of gases at molecular level.',
            summary: '**Ideal Gas**: PV = nRT\n**Kinetic Energy**: KE = 3/2 kT per molecule\n**RMS Velocity**: vrms = √(3RT/M)\n**Degrees of Freedom**: Ways a molecule can store energy',
            detailedNotes: '### 1. Ideal Gas Equation\nPV = nRT = NkT\n* P = Pressure\n* V = Volume\n* n = Number of moles\n* R = Universal gas constant = 8.314 J/(mol·K)\n* k = Boltzmann constant = 1.38 × 10⁻²³ J/K\n* N = Number of molecules\n\n### 2. Assumptions of Kinetic Theory\n1. Gas molecules are point masses\n2. No intermolecular forces (except during collision)\n3. Collisions are perfectly elastic\n4. Molecules are in random motion\n5. Time of collision << Time between collisions\n\n### 3. Pressure from Kinetic Theory\nP = ⅓ρv²rms = ⅓(nm/V)v²rms\n\n### 4. Kinetic Energy\n* Per molecule: KE = ½mv²rms = 3/2 kT\n* Per mole: KE = 3/2 RT\n* KE depends only on temperature\n\n### 5. Molecular Speeds\n* **RMS Speed**: vrms = √(3RT/M) = √(3kT/m)\n* **Average Speed**: vavg = √(8RT/πM)\n* **Most Probable Speed**: vmp = √(2RT/M)\n* Relation: vmp < vavg < vrms\n\n### 6. Degrees of Freedom (f)\n* Monoatomic (He, Ne): f = 3 (translation only)\n* Diatomic (O₂, N₂): f = 5 (3 trans + 2 rot)\n* Triatomic (CO₂): f = 6 or 7\n\n**Equipartition of Energy**:\nEnergy per degree of freedom = ½kT\nTotal energy = (f/2)kT per molecule\n\n### 7. Specific Heats\n* Cv = (f/2)R\n* Cp = Cv + R = ((f+2)/2)R\n* γ = Cp/Cv = (f+2)/f\n\n**Values:**\n* Monoatomic: γ = 5/3 = 1.67\n* Diatomic: γ = 7/5 = 1.4',
            flashcards: [
              { id: 'f1', front: 'Ideal Gas Equation?', back: 'PV = nRT (n = moles, R = 8.314 J/mol·K)' },
              { id: 'f2', front: 'Average KE per molecule?', back: 'KE = 3/2 kT' },
              { id: 'f3', front: 'RMS velocity formula?', back: 'vrms = √(3RT/M) = √(3kT/m)' },
              { id: 'f4', front: 'Degrees of freedom for diatomic gas?', back: 'f = 5 (3 translational + 2 rotational)' },
              { id: 'f5', front: 'Relation between molecular speeds?', back: 'vmp < vavg < vrms' },
              { id: 'f6', front: 'γ for monoatomic gas?', back: 'γ = Cp/Cv = 5/3 = 1.67' },
              { id: 'f7', front: 'Boltzmann constant value?', back: 'k = 1.38 × 10⁻²³ J/K' }
            ],
            mcqs: [
              { id: 'q1', question: 'Average KE of gas molecule depends on:', options: ['Pressure', 'Volume', 'Temperature', 'Mass'], correctIndex: 2, explanation: 'KE = 3/2 kT, depends only on T.' },
              { id: 'q2', question: 'RMS speed of gas molecule is proportional to:', options: ['T', '√T', 'T²', '1/T'], correctIndex: 1, explanation: 'vrms = √(3RT/M), so vrms ∝ √T.' },
              { id: 'q3', question: 'γ for diatomic gas is:', options: ['1.33', '1.4', '1.67', '2'], correctIndex: 1, explanation: 'γ = 7/5 = 1.4 for diatomic.' },
              { id: 'q4', question: 'Degrees of freedom for monoatomic gas:', options: ['3', '5', '6', '7'], correctIndex: 0, explanation: 'Only 3 translational DOF.' },
              { id: 'q5', question: 'Which is greatest among molecular speeds?', options: ['vmp', 'vavg', 'vrms', 'All equal'], correctIndex: 2, explanation: 'vrms > vavg > vmp.' }
            ],
            reels: [
              { id: 'r1', title: 'Ideal Gas', content: 'PV = nRT\nR = 8.314 J/mol·K\nn = number of moles', color: getReelColor(0) },
              { id: 'r2', title: 'KE of Gas', content: 'Per molecule: 3/2 kT\nPer mole: 3/2 RT\nDepends on T only!', color: getReelColor(1) },
              { id: 'r3', title: 'RMS Speed', content: 'vrms = √(3RT/M)\nvrms ∝ √T\nvrms ∝ 1/√M', color: getReelColor(2) },
              { id: 'r4', title: 'Speed Order', content: 'vmp < vavg < vrms\nMost Probable < Average < RMS', color: getReelColor(3) },
              { id: 'r5', title: 'DOF', content: 'Monoatomic: f = 3\nDiatomic: f = 5\nEnergy = f/2 kT', color: getReelColor(4) },
              { id: 'r6', title: 'γ Values', content: 'Monoatomic: γ = 5/3\nDiatomic: γ = 7/5\nγ = Cp/Cv', color: getReelColor(5) }
            ]
          },
          {
            id: 'phy4',
            title: '4. Thermodynamics',
            description: 'Heat, Work, Laws of Thermodynamics.',
            summary: '**First Law**: ΔQ = ΔU + ΔW (Energy conservation)\n**Second Law**: Heat cannot flow from cold to hot spontaneously\n**Entropy**: Measure of disorder\n**Carnot Efficiency**: η = 1 - T₂/T₁',
            detailedNotes: '### 1. Thermodynamic Terms\n* **System**: Part under study\n* **Surroundings**: Everything outside system\n* **State Variables**: P, V, T, U (not Q, W)\n\n### 2. Zeroth Law\nIf A is in thermal equilibrium with B, and B with C, then A is in equilibrium with C.\n(Foundation for temperature measurement)\n\n### 3. First Law of Thermodynamics\n**ΔQ = ΔU + ΔW**\n* ΔQ = Heat added to system\n* ΔU = Change in internal energy\n* ΔW = Work done by system\n\nFor ideal gas: ΔU = nCvΔT\nWork done: W = ∫PdV\n\n### 4. Thermodynamic Processes\n**A. Isothermal (T = constant)**\n* PV = constant\n* ΔU = 0, so Q = W\n* W = nRT ln(V₂/V₁)\n\n**B. Adiabatic (Q = 0)**\n* PVᵞ = constant\n* TVᵞ⁻¹ = constant\n* W = (P₁V₁ - P₂V₂)/(γ-1)\n\n**C. Isobaric (P = constant)**\n* W = PΔV = nRΔT\n* Q = nCpΔT\n\n**D. Isochoric (V = constant)**\n* W = 0\n* Q = ΔU = nCvΔT\n\n### 5. Second Law\n**Kelvin-Planck**: No engine can convert all heat to work.\n**Clausius**: Heat cannot flow from cold to hot without external work.\n\n### 6. Heat Engines\nEfficiency: η = W/Q₁ = (Q₁-Q₂)/Q₁ = 1 - Q₂/Q₁\n\n**Carnot Engine** (Most efficient):\nη = 1 - T₂/T₁\n\n### 7. Entropy\n* S = Q/T\n* ΔS ≥ 0 for isolated system\n* Measure of disorder/randomness',
            flashcards: [
              { id: 'f1', front: 'First Law of Thermodynamics?', back: 'ΔQ = ΔU + ΔW (Energy conservation)' },
              { id: 'f2', front: 'In isothermal process?', back: 'T = constant, ΔU = 0, Q = W' },
              { id: 'f3', front: 'In adiabatic process?', back: 'Q = 0, PVᵞ = constant' },
              { id: 'f4', front: 'Carnot efficiency?', back: 'η = 1 - T₂/T₁ (T in Kelvin)' },
              { id: 'f5', front: 'Work in isobaric process?', back: 'W = PΔV = nRΔT' },
              { id: 'f6', front: 'Second Law (Clausius)?', back: 'Heat cannot flow from cold to hot spontaneously.' },
              { id: 'f7', front: 'What is Entropy?', back: 'Measure of disorder, S = Q/T, always increases in isolated system.' }
            ],
            mcqs: [
              { id: 'q1', question: 'In isothermal process, internal energy:', options: ['Increases', 'Decreases', 'Remains constant', 'Becomes zero'], correctIndex: 2, explanation: 'ΔU = nCvΔT = 0 since T is constant.' },
              { id: 'q2', question: 'Adiabatic process follows:', options: ['PV = constant', 'PVᵞ = constant', 'P/V = constant', 'TV = constant'], correctIndex: 1, explanation: 'PVᵞ = constant for adiabatic process.' },
              { id: 'q3', question: 'Carnot engine operates between 500K and 300K. Efficiency is:', options: ['20%', '40%', '60%', '80%'], correctIndex: 1, explanation: 'η = 1 - 300/500 = 1 - 0.6 = 0.4 = 40%' },
              { id: 'q4', question: 'Work done in isochoric process:', options: ['Maximum', 'Minimum', 'Zero', 'Negative'], correctIndex: 2, explanation: 'W = PΔV = 0 since V is constant.' },
              { id: 'q5', question: 'Entropy of isolated system:', options: ['Decreases', 'Increases or constant', 'Always constant', 'Becomes zero'], correctIndex: 1, explanation: 'ΔS ≥ 0 for isolated system.' }
            ],
            reels: [
              { id: 'r1', title: 'First Law', content: 'ΔQ = ΔU + ΔW\nHeat = Internal Energy + Work\nEnergy conservation!', color: getReelColor(0) },
              { id: 'r2', title: 'Isothermal', content: 'T = constant.\nΔU = 0.\nQ = W.', color: getReelColor(1) },
              { id: 'r3', title: 'Adiabatic', content: 'Q = 0.\nPVᵞ = constant.\nNo heat exchange.', color: getReelColor(2) },
              { id: 'r4', title: 'Isobaric', content: 'P = constant.\nW = PΔV.\nQ = nCpΔT.', color: getReelColor(3) },
              { id: 'r5', title: 'Isochoric', content: 'V = constant.\nW = 0.\nQ = ΔU.', color: getReelColor(4) },
              { id: 'r6', title: 'Carnot', content: 'Most efficient engine.\nη = 1 - T₂/T₁\nIdeal, not real.', color: getReelColor(5) },
              { id: 'r7', title: 'Entropy', content: 'S = Q/T\nMeasure of disorder.\nAlways increases!', color: getReelColor(6) }
            ]
          },
          {
            id: 'phy5',
            title: '5. Oscillations',
            description: 'Simple Harmonic Motion, Springs, Pendulum.',
            summary: '**SHM**: a = -ω²x\n**Spring**: T = 2π√(m/k)\n**Pendulum**: T = 2π√(L/g)\n**Energy**: Total E = ½mω²A² = constant',
            detailedNotes: '### 1. Simple Harmonic Motion (SHM)\n* Motion where restoring force ∝ displacement\n* F = -kx (opposite to displacement)\n* a = -ω²x\n\n### 2. Equations of SHM\n* x = A sin(ωt + φ) or A cos(ωt + φ)\n* v = Aω cos(ωt + φ) = ω√(A² - x²)\n* a = -Aω² sin(ωt + φ) = -ω²x\n\nWhere:\n* A = Amplitude\n* ω = Angular frequency = 2πf = 2π/T\n* φ = Phase constant\n\n### 3. Time Period\n**General**: T = 2π/ω = 2π√(m/k)\n\n**Spring-mass**: T = 2π√(m/k)\n* k = spring constant\n* Independent of amplitude!\n\n**Simple Pendulum**: T = 2π√(L/g)\n* L = length\n* g = acceleration due to gravity\n* Valid for small angles only\n\n### 4. Energy in SHM\n* KE = ½mv² = ½mω²(A² - x²)\n* PE = ½kx² = ½mω²x²\n* Total E = ½mω²A² = ½kA²\n* Energy oscillates between KE and PE\n\n### 5. Phase Difference\n* Displacement and velocity: 90° (π/2)\n* Velocity and acceleration: 90° (π/2)\n* Displacement and acceleration: 180° (π)\n\n### 6. Types of Oscillations\n* **Free**: No external force (ideal)\n* **Damped**: Friction reduces amplitude\n* **Forced**: External periodic force applied\n* **Resonance**: Maximum amplitude when f = natural frequency',
            flashcards: [
              { id: 'f1', front: 'Condition for SHM?', back: 'a ∝ -x (acceleration proportional and opposite to displacement)' },
              { id: 'f2', front: 'Time period of spring-mass system?', back: 'T = 2π√(m/k)' },
              { id: 'f3', front: 'Time period of simple pendulum?', back: 'T = 2π√(L/g)' },
              { id: 'f4', front: 'Total energy in SHM?', back: 'E = ½mω²A² = ½kA² (constant)' },
              { id: 'f5', front: 'Phase difference between x and a?', back: '180° or π (they are opposite)' },
              { id: 'f6', front: 'What is resonance?', back: 'Maximum amplitude when driving frequency equals natural frequency.' },
              { id: 'f7', front: 'Velocity at mean position?', back: 'Maximum: v = Aω' }
            ],
            mcqs: [
              { id: 'q1', question: 'In SHM, acceleration is maximum at:', options: ['Mean position', 'Extreme position', 'Between mean and extreme', 'Never maximum'], correctIndex: 1, explanation: 'a = -ω²x, maximum when x = A (extreme).' },
              { id: 'q2', question: 'Time period of spring depends on:', options: ['Mass only', 'Spring constant only', 'Both mass and k', 'Amplitude'], correctIndex: 2, explanation: 'T = 2π√(m/k), depends on m and k.' },
              { id: 'q3', question: 'Phase difference between v and a in SHM:', options: ['0°', '90°', '180°', '45°'], correctIndex: 1, explanation: 'v and a are 90° out of phase.' },
              { id: 'q4', question: 'Energy at extreme position is:', options: ['All KE', 'All PE', 'Half KE, half PE', 'Zero'], correctIndex: 1, explanation: 'At extreme, v = 0, so KE = 0, all PE.' },
              { id: 'q5', question: 'If length of pendulum is doubled, T becomes:', options: ['Half', 'Double', '√2 times', '2√2 times'], correctIndex: 2, explanation: 'T ∝ √L, so T becomes √2 times.' }
            ],
            reels: [
              { id: 'r1', title: 'SHM', content: 'a = -ω²x\nAcceleration opposite to displacement.\nRestoring force!', color: getReelColor(0) },
              { id: 'r2', title: 'Spring', content: 'T = 2π√(m/k)\nDepends on mass & stiffness.\nNOT on amplitude!', color: getReelColor(1) },
              { id: 'r3', title: 'Pendulum', content: 'T = 2π√(L/g)\nDepends on length & g.\nSmall angles only!', color: getReelColor(2) },
              { id: 'r4', title: 'Energy', content: 'E = ½kA² = constant.\nKE ↔ PE.\nConserved!', color: getReelColor(3) },
              { id: 'r5', title: 'At Mean', content: 'x = 0.\nv = maximum (Aω).\na = 0.', color: getReelColor(4) },
              { id: 'r6', title: 'At Extreme', content: 'x = A (max).\nv = 0.\na = maximum.', color: getReelColor(5) },
              { id: 'r7', title: 'Resonance', content: 'Driving freq = Natural freq.\nAmplitude MAXIMUM!\nCan be destructive.', color: getReelColor(6) }
            ]
          }
        ]
      },
      {
        id: 'chem', 
        name: 'Chemistry', 
        icon: 'FlaskConical', 
        color: 'bg-teal-500', 
        syllabus: '1. Solid State\n2. Solutions\n3. Electrochemistry\n4. Chemical Kinetics\n5. Surface Chemistry\n6. p-Block Elements\n7. d and f Block Elements\n8. Coordination Compounds\n9. Haloalkanes\n10. Alcohols, Phenols, Ethers\n11. Aldehydes, Ketones\n12. Carboxylic Acids\n13. Amines\n14. Biomolecules\n15. Polymers\n16. Chemistry in Everyday Life',
        paperPattern: '### Chemistry Paper Pattern (70 Marks)\n\n* **Section A (14 Marks)**: 7 MCQs\n* **Section B (18 Marks)**: Very short answers\n* **Section C (12 Marks)**: Short answers\n* **Section D (8 Marks)**: Long answers\n* **Section E (18 Marks)**: Numericals\n* **Internal (30 Marks)**: Practical',
        previousPapers: [], 
        chapters: [
          {
            id: 'chem1',
            title: '1. Solid State',
            description: 'Crystal structures, Unit cells, Defects.',
            summary: '**Solids**: Fixed shape and volume\n**Crystalline**: Regular arrangement (NaCl, Diamond)\n**Amorphous**: Irregular arrangement (Glass, Rubber)\n**Unit Cell**: Smallest repeating unit\n**Defects**: Schottky, Frenkel',
            detailedNotes: '### 1. Types of Solids\n**A. Crystalline Solids**\n* Regular, repeating 3D arrangement\n* Sharp melting point\n* Anisotropic (different properties in different directions)\n* Examples: NaCl, Diamond, Ice\n\n**B. Amorphous Solids**\n* Irregular arrangement\n* No sharp melting point (range)\n* Isotropic (same properties in all directions)\n* Examples: Glass, Rubber, Plastic\n\n### 2. Classification of Crystalline Solids\n| Type | Particles | Bonding | Properties | Examples |\n|------|-----------|---------|------------|----------|\n| Ionic | Ions | Electrostatic | Hard, brittle, high MP | NaCl, MgO |\n| Covalent | Atoms | Covalent bonds | Very hard, very high MP | Diamond, SiO₂ |\n| Metallic | Metal ions + electrons | Metallic | Malleable, conductive | Fe, Cu, Ag |\n| Molecular | Molecules | Van der Waals | Soft, low MP | Ice, I₂, CO₂ |\n\n### 3. Unit Cell\nSmallest repeating unit of crystal lattice.\n\n**Types of Unit Cells:**\n* **Simple/Primitive**: Atoms only at corners (Z = 1)\n* **Body-Centered (BCC)**: Corner + center (Z = 2)\n* **Face-Centered (FCC)**: Corner + face centers (Z = 4)\n\n**Contribution of atoms:**\n* Corner: 1/8\n* Edge: 1/4\n* Face: 1/2\n* Body center: 1\n\n### 4. Packing Efficiency\n* Simple cubic: 52.4%\n* BCC: 68%\n* FCC/HCP: 74%\n\n### 5. Crystal Defects\n**A. Point Defects**\n\n*Stoichiometric:*\n* **Schottky**: Equal cations & anions missing (NaCl)\n* **Frenkel**: Ion displaced to interstitial site (AgCl, ZnS)\n\n*Non-stoichiometric:*\n* Metal excess (F-centers)\n* Metal deficiency\n\n**B. Impurity Defects**\n* n-type: Doping with Group 15 (excess electrons)\n* p-type: Doping with Group 13 (electron holes)',
            flashcards: [
              { id: 'f1', front: 'Crystalline vs Amorphous?', back: 'Crystalline: Regular arrangement, sharp MP. Amorphous: Irregular, no sharp MP.' },
              { id: 'f2', front: 'Coordination number in FCC?', back: '12' },
              { id: 'f3', front: 'Packing efficiency of FCC?', back: '74%' },
              { id: 'f4', front: 'Schottky defect?', back: 'Equal number of cations and anions missing from lattice.' },
              { id: 'f5', front: 'Frenkel defect?', back: 'Ion displaced from lattice site to interstitial site.' },
              { id: 'f6', front: 'Z value for BCC?', back: 'Z = 2 (1/8 × 8 corners + 1 center)' },
              { id: 'f7', front: 'n-type semiconductor?', back: 'Doped with Group 15 element (extra electrons).' }
            ],
            mcqs: [
              { id: 'q1', question: 'Packing efficiency of FCC is:', options: ['52.4%', '68%', '74%', '90%'], correctIndex: 2, explanation: 'FCC has the highest packing (74%).' },
              { id: 'q2', question: 'Schottky defect is found in:', options: ['AgCl', 'NaCl', 'ZnS', 'AgBr'], correctIndex: 1, explanation: 'NaCl shows Schottky defect.' },
              { id: 'q3', question: 'Number of atoms in BCC unit cell:', options: ['1', '2', '4', '6'], correctIndex: 1, explanation: 'BCC: 8×(1/8) + 1 = 2' },
              { id: 'q4', question: 'Glass is:', options: ['Crystalline', 'Amorphous', 'Polycrystalline', 'Ionic'], correctIndex: 1, explanation: 'Glass has no regular structure.' },
              { id: 'q5', question: 'Coordination number in simple cubic:', options: ['4', '6', '8', '12'], correctIndex: 1, explanation: 'Each atom touches 6 neighbors.' }
            ],
            reels: [
              { id: 'r1', title: 'Solid Types', content: 'Crystalline = Regular.\nAmorphous = Irregular.\nSharp MP vs Range.', color: getReelColor(0) },
              { id: 'r2', title: 'Unit Cells', content: 'Simple: Z = 1\nBCC: Z = 2\nFCC: Z = 4', color: getReelColor(1) },
              { id: 'r3', title: 'Packing', content: 'Simple: 52%\nBCC: 68%\nFCC: 74% (best!)', color: getReelColor(2) },
              { id: 'r4', title: 'Schottky', content: 'Cation + Anion BOTH missing.\nFound in NaCl.\nDensity decreases.', color: getReelColor(3) },
              { id: 'r5', title: 'Frenkel', content: 'Ion moves to interstitial site.\nFound in AgCl, ZnS.\nDensity same.', color: getReelColor(4) },
              { id: 'r6', title: 'Semiconductors', content: 'n-type: Group 15 dopant.\np-type: Group 13 dopant.\nSilicon base.', color: getReelColor(5) }
            ]
          },
          {
            id: 'chem2',
            title: '2. Solutions',
            description: 'Concentration, Colligative properties, Raoult\'s Law.',
            summary: '**Solution**: Homogeneous mixture\n**Molarity (M)**: moles/L\n**Molality (m)**: moles/kg solvent\n**Raoult\'s Law**: P = P°X (for ideal solutions)\n**Colligative**: Depends on number of particles',
            detailedNotes: '### 1. Types of Solutions\n* Solid in liquid (Sugar in water)\n* Liquid in liquid (Alcohol in water)\n* Gas in liquid (CO₂ in water)\n\n### 2. Concentration Terms\n| Term | Formula | Unit |\n|------|---------|------|\n| Molarity (M) | moles/L solution | mol/L |\n| Molality (m) | moles/kg solvent | mol/kg |\n| Mole fraction (X) | n₁/(n₁+n₂) | no unit |\n| Mass % | (mass solute/total)×100 | % |\n| ppm | (mass/total)×10⁶ | ppm |\n\n### 3. Henry\'s Law\nFor gas dissolved in liquid:\n**p = KH × X**\n* p = partial pressure of gas\n* KH = Henry\'s constant\n* X = mole fraction\n\nApplications: Carbonated drinks, Scuba diving (bends)\n\n### 4. Raoult\'s Law\nFor ideal solutions:\n**P = P°X**\n* P = vapor pressure of solution\n* P° = vapor pressure of pure solvent\n* X = mole fraction of solvent\n\n**Ideal Solution**: ΔHmix = 0, ΔVmix = 0\n\n### 5. Colligative Properties\nDepend only on NUMBER of solute particles.\n\n**A. Relative Lowering of Vapor Pressure**\n(P° - P)/P° = X₂ (mole fraction of solute)\n\n**B. Elevation of Boiling Point**\nΔTb = Kb × m\n* Kb = molal elevation constant\n\n**C. Depression of Freezing Point**\nΔTf = Kf × m\n* Kf = molal depression constant\n\n**D. Osmotic Pressure**\nπ = CRT = (n/V)RT\n\n### 6. Van\'t Hoff Factor (i)\nFor electrolytes: i = observed value / calculated value\n* NaCl: i ≈ 2\n* CaCl₂: i ≈ 3\n* Glucose: i = 1 (non-electrolyte)',
            flashcards: [
              { id: 'f1', front: 'Raoult\'s Law?', back: 'P = P°X (Vapor pressure = Pure VP × mole fraction)' },
              { id: 'f2', front: 'Henry\'s Law?', back: 'p = KH × X (Gas solubility ∝ partial pressure)' },
              { id: 'f3', front: 'Boiling point elevation formula?', back: 'ΔTb = Kb × m' },
              { id: 'f4', front: 'Freezing point depression formula?', back: 'ΔTf = Kf × m' },
              { id: 'f5', front: 'Osmotic pressure formula?', back: 'π = CRT' },
              { id: 'f6', front: 'Van\'t Hoff factor for NaCl?', back: 'i ≈ 2 (Na⁺ and Cl⁻)' },
              { id: 'f7', front: 'What are colligative properties?', back: 'Properties that depend on NUMBER of solute particles, not their nature.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Molality is expressed in:', options: ['mol/L', 'mol/kg', 'g/L', 'no unit'], correctIndex: 1, explanation: 'Molality = moles of solute / kg of solvent.' },
              { id: 'q2', question: 'Which is NOT a colligative property?', options: ['Osmotic pressure', 'Boiling point elevation', 'Optical activity', 'Freezing point depression'], correctIndex: 2, explanation: 'Optical activity depends on structure, not particle number.' },
              { id: 'q3', question: 'Van\'t Hoff factor for glucose is:', options: ['0', '1', '2', '3'], correctIndex: 1, explanation: 'Glucose doesn\'t dissociate.' },
              { id: 'q4', question: 'Ideal solution follows:', options: ['Henry\'s law', 'Raoult\'s law', 'Boyle\'s law', 'Charles\' law'], correctIndex: 1, explanation: 'Ideal solutions obey Raoult\'s law.' },
              { id: 'q5', question: 'Henry\'s law is applicable to:', options: ['Solid solutions', 'Gas in liquid', 'Liquid in liquid', 'All solutions'], correctIndex: 1, explanation: 'Henry\'s law is for gas solubility.' }
            ],
            reels: [
              { id: 'r1', title: 'Molarity vs Molality', content: 'Molarity: mol/L solution.\nMolality: mol/kg solvent.\nMolality doesn\'t change with T!', color: getReelColor(0) },
              { id: 'r2', title: 'Raoult\'s Law', content: 'P = P°X\nVapor pressure lowered.\nBy adding solute.', color: getReelColor(1) },
              { id: 'r3', title: 'Henry\'s Law', content: 'p = KH × X\nGas solubility.\nPressure dependent!', color: getReelColor(2) },
              { id: 'r4', title: 'Colligative', content: 'Number matters, not nature!\nΔTb, ΔTf, π\nVan\'t Hoff factor.', color: getReelColor(3) },
              { id: 'r5', title: 'BP & FP', content: 'ΔTb = Kb × m (increases).\nΔTf = Kf × m (decreases).\nSalt on roads!', color: getReelColor(4) },
              { id: 'r6', title: 'Osmosis', content: 'π = CRT.\nSolvent flows to solution.\nReverse osmosis = purification.', color: getReelColor(5) }
            ]
          },
          {
            id: 'chem3',
            title: '3. Electrochemistry',
            description: 'Electrolysis, Galvanic cells, Nernst equation.',
            summary: '**Electrochemistry**: Study of electricity-chemical reactions\n**Galvanic Cell**: Chemical → Electrical\n**Electrolytic Cell**: Electrical → Chemical\n**Nernst Equation**: E = E° - (RT/nF)ln Q',
            detailedNotes: '### 1. Types of Cells\n**Galvanic (Voltaic) Cell**\n* Spontaneous reaction produces electricity\n* ΔG < 0, E > 0\n* Anode (-), Cathode (+)\n* Example: Daniel cell, batteries\n\n**Electrolytic Cell**\n* Electricity drives non-spontaneous reaction\n* ΔG > 0, requires external voltage\n* Anode (+), Cathode (-)\n* Example: Electroplating, electrolysis\n\n### 2. Electrode Reactions\n* **Anode**: Oxidation (loss of electrons)\n* **Cathode**: Reduction (gain of electrons)\n\nRemember: **AN OX** (Anode Oxidation), **RED CAT** (Reduction Cathode)\n\n### 3. Standard Electrode Potential (E°)\n* Measured against SHE (Standard Hydrogen Electrode)\n* SHE: E° = 0.00 V\n* Positive E° = good oxidizing agent\n* Negative E° = good reducing agent\n\n### 4. EMF of Cell\nE°cell = E°cathode - E°anode\n\n### 5. Nernst Equation\n**E = E° - (RT/nF) ln Q**\n\nAt 25°C:\n**E = E° - (0.059/n) log Q**\n\nAt equilibrium: E = 0, so E° = (0.059/n) log K\n\n### 6. Relationship with ΔG\nΔG° = -nFE°\n* E° positive → ΔG° negative → spontaneous\n\n### 7. Faraday\'s Laws\n**First Law**: m = ZIt = (M×I×t)/(n×F)\n* m = mass deposited\n* Z = electrochemical equivalent\n* F = 96500 C/mol\n\n**Second Law**: m₁/m₂ = E₁/E₂ (equivalent weights)\n\n### 8. Conductivity\n* **Conductance (G)**: 1/R (siemens, S)\n* **Conductivity (κ)**: G × (l/A) (S/m)\n* **Molar conductivity (Λm)**: κ/c (S·m²/mol)',
            flashcards: [
              { id: 'f1', front: 'Anode reaction?', back: 'Oxidation (loss of electrons). AN OX.' },
              { id: 'f2', front: 'Cathode reaction?', back: 'Reduction (gain of electrons). RED CAT.' },
              { id: 'f3', front: 'EMF of cell formula?', back: 'E°cell = E°cathode - E°anode' },
              { id: 'f4', front: 'Nernst equation at 25°C?', back: 'E = E° - (0.059/n) log Q' },
              { id: 'f5', front: 'Faraday constant value?', back: 'F = 96500 C/mol' },
              { id: 'f6', front: 'Relationship: ΔG and E°?', back: 'ΔG° = -nFE°' },
              { id: 'f7', front: 'In galvanic cell, anode is?', back: 'Negative (-) electrode.' }
            ],
            mcqs: [
              { id: 'q1', question: 'In galvanic cell, anode is:', options: ['Positive', 'Negative', 'Neutral', 'Variable'], correctIndex: 1, explanation: 'In galvanic cell, anode is negative.' },
              { id: 'q2', question: 'Faraday constant is:', options: ['96500 J', '96500 C', '96500 V', '96500 A'], correctIndex: 1, explanation: 'F = 96500 Coulombs per mole.' },
              { id: 'q3', question: 'For spontaneous reaction:', options: ['E° < 0', 'E° > 0', 'E° = 0', 'E° = 1'], correctIndex: 1, explanation: 'Positive E° means spontaneous.' },
              { id: 'q4', question: 'SHE potential is:', options: ['-1 V', '0 V', '+1 V', '+0.5 V'], correctIndex: 1, explanation: 'Standard Hydrogen Electrode = 0.00 V by definition.' },
              { id: 'q5', question: 'Oxidation occurs at:', options: ['Cathode', 'Anode', 'Both', 'Neither'], correctIndex: 1, explanation: 'AN OX - Anode is for Oxidation.' }
            ],
            reels: [
              { id: 'r1', title: 'AN OX', content: 'Anode = Oxidation.\nLoss of electrons.\nRemember: AN OX!', color: getReelColor(0) },
              { id: 'r2', title: 'RED CAT', content: 'Cathode = Reduction.\nGain of electrons.\nRemember: RED CAT!', color: getReelColor(1) },
              { id: 'r3', title: 'Galvanic Cell', content: 'Chemical → Electrical.\nSpontaneous.\nAnode (-), Cathode (+).', color: getReelColor(2) },
              { id: 'r4', title: 'Electrolytic', content: 'Electrical → Chemical.\nNon-spontaneous.\nAnode (+), Cathode (-).', color: getReelColor(3) },
              { id: 'r5', title: 'Nernst Eq', content: 'E = E° - (0.059/n)logQ\nAt 25°C.\nConcentration effect!', color: getReelColor(4) },
              { id: 'r6', title: 'Faraday', content: 'm = ZIt.\nF = 96500 C/mol.\nMass ∝ Current × Time.', color: getReelColor(5) }
            ]
          },
          {
            id: 'chem4',
            title: '4. Chemical Kinetics',
            description: 'Reaction rates, Order, Arrhenius equation.',
            summary: '**Rate**: Change in concentration per unit time\n**Order**: Power of concentration in rate law\n**Rate Law**: Rate = k[A]ⁿ\n**Arrhenius**: k = Ae^(-Ea/RT)',
            detailedNotes: '### 1. Rate of Reaction\nRate = -d[R]/dt = +d[P]/dt\n\nFactors affecting rate:\n* Concentration\n* Temperature\n* Catalyst\n* Surface area\n* Nature of reactants\n\n### 2. Rate Law\n**Rate = k[A]^m[B]^n**\n* k = rate constant\n* m, n = orders (found experimentally)\n* Overall order = m + n\n\n### 3. Order of Reaction\n| Order | Rate Law | Integrated | Half-life | Units of k |\n|-------|----------|------------|-----------|------------|\n| 0 | k | [A] = [A]₀ - kt | [A]₀/2k | mol/L·s |\n| 1 | k[A] | ln[A] = ln[A]₀ - kt | 0.693/k | s⁻¹ |\n| 2 | k[A]² | 1/[A] = 1/[A]₀ + kt | 1/k[A]₀ | L/mol·s |\n\n### 4. First Order Kinetics\n* ln[A] = ln[A]₀ - kt\n* t₁/₂ = 0.693/k (independent of [A]₀)\n* Examples: Radioactive decay, many reactions\n\n### 5. Arrhenius Equation\n**k = Ae^(-Ea/RT)**\n\nLogarithmic form:\n**ln k = ln A - Ea/RT**\n\n* A = pre-exponential factor (frequency factor)\n* Ea = activation energy\n* R = gas constant (8.314 J/mol·K)\n\nTwo-point form:\n**ln(k₂/k₁) = (Ea/R)(1/T₁ - 1/T₂)**\n\n### 6. Collision Theory\n* Molecules must collide\n* With sufficient energy (≥ Ea)\n* With proper orientation\n\n### 7. Catalyst\n* Increases rate without being consumed\n* Lowers activation energy\n* Doesn\'t change ΔH or equilibrium\n* Provides alternative pathway',
            flashcards: [
              { id: 'f1', front: 'First order half-life?', back: 't₁/₂ = 0.693/k (independent of initial concentration)' },
              { id: 'f2', front: 'Arrhenius equation?', back: 'k = Ae^(-Ea/RT)' },
              { id: 'f3', front: 'Units of k for first order?', back: 's⁻¹ (or min⁻¹, hr⁻¹)' },
              { id: 'f4', front: 'What does a catalyst do?', back: 'Lowers activation energy, provides alternative pathway.' },
              { id: 'f5', front: 'Zero order half-life?', back: 't₁/₂ = [A]₀/2k (depends on initial concentration)' },
              { id: 'f6', front: 'What is activation energy?', back: 'Minimum energy required for reaction to occur.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Half-life of first order reaction:', options: ['Depends on [A]₀', 'Independent of [A]₀', 'Depends on temperature only', 'Is always 1 second'], correctIndex: 1, explanation: 't₁/₂ = 0.693/k, no [A]₀ term.' },
              { id: 'q2', question: 'Unit of rate constant for zero order:', options: ['s⁻¹', 'mol/L·s', 'L/mol·s', 'L²/mol²·s'], correctIndex: 1, explanation: 'Rate = k, so k has same units as rate.' },
              { id: 'q3', question: 'Catalyst changes:', options: ['ΔH', 'Equilibrium constant', 'Activation energy', 'Enthalpy'], correctIndex: 2, explanation: 'Catalyst lowers Ea only.' },
              { id: 'q4', question: 'Arrhenius equation relates k to:', options: ['Pressure', 'Volume', 'Temperature', 'Concentration'], correctIndex: 2, explanation: 'k = Ae^(-Ea/RT), T is temperature.' },
              { id: 'q5', question: 'For first order: plot of ln[A] vs t is:', options: ['Parabola', 'Straight line', 'Exponential', 'Hyperbola'], correctIndex: 1, explanation: 'ln[A] = ln[A]₀ - kt is linear.' }
            ],
            reels: [
              { id: 'r1', title: 'Rate Law', content: 'Rate = k[A]^m[B]^n.\nk = rate constant.\nm, n found experimentally.', color: getReelColor(0) },
              { id: 'r2', title: 'First Order', content: 't₁/₂ = 0.693/k.\nIndependent of [A]₀.\nMost common!', color: getReelColor(1) },
              { id: 'r3', title: 'Arrhenius', content: 'k = Ae^(-Ea/RT).\nHigher T = Higher k.\nFaster reaction!', color: getReelColor(2) },
              { id: 'r4', title: 'Ea', content: 'Activation Energy.\nEnergy barrier.\nCatalyst lowers it!', color: getReelColor(3) },
              { id: 'r5', title: 'Catalyst', content: 'Lowers Ea.\nNot consumed.\nDoesn\'t change ΔH!', color: getReelColor(4) },
              { id: 'r6', title: 'Collision Theory', content: 'Collide + Energy + Orientation.\nAll three needed!', color: getReelColor(5) }
            ]
          },
          {
            id: 'chem5',
            title: '5. Organic: Haloalkanes & Haloarenes',
            description: 'Alkyl and Aryl halides, SN1, SN2, Elimination.',
            summary: '**Haloalkanes**: R-X (alkyl halides)\n**Haloarenes**: Ar-X (aryl halides)\n**SN1**: Unimolecular, carbocation, racemization\n**SN2**: Bimolecular, inversion, backside attack',
            detailedNotes: '### 1. Classification\n**By Halogen**: Fluoro, Chloro, Bromo, Iodo\n**By Carbon**: Primary (1°), Secondary (2°), Tertiary (3°)\n\n### 2. Preparation\n* From alcohols: R-OH + HX → R-X + H₂O\n* From alkenes: Addition of HX, X₂\n* Halogen exchange: Finkelstein, Swarts\n\n### 3. Physical Properties\n* Higher BP than alkanes (dipole-dipole)\n* Insoluble in water\n* Denser than water (CHCl₃, CCl₄)\n\n### 4. Nucleophilic Substitution\n**SN1 (Substitution Nucleophilic Unimolecular)**\n* Two steps: (1) Carbocation formation (slow), (2) Attack by nucleophile (fast)\n* Rate = k[R-X]\n* Favored by: 3° > 2° > 1°, polar protic solvents\n* Gives racemization (+ some inversion)\n\n**SN2 (Substitution Nucleophilic Bimolecular)**\n* One step: Backside attack\n* Rate = k[R-X][Nu⁻]\n* Favored by: 1° > 2° > 3°, polar aprotic solvents\n* Gives complete inversion (Walden inversion)\n\n### 5. Elimination Reactions\n**E1**: Two steps, carbocation, Zaitsev product\n**E2**: One step, anti-periplanar, Zaitsev product\n\nZaitsev Rule: More substituted alkene is major product.\n\n### 6. Haloarenes (Ar-X)\n* Less reactive than haloalkanes\n* C-X bond has partial double bond character (resonance)\n* Undergo electrophilic substitution (not nucleophilic)\n\n### 7. Important Reactions\n* Wurtz: 2R-X + 2Na → R-R + 2NaX\n* Grignard: R-X + Mg → R-MgX\n* Williamson: R-X + R\'O⁻ → R-O-R\'',
            flashcards: [
              { id: 'f1', front: 'SN1 vs SN2: Which gives inversion?', back: 'SN2 gives complete inversion (Walden inversion).' },
              { id: 'f2', front: 'SN1 is favored by?', back: '3° halides, polar protic solvents.' },
              { id: 'f3', front: 'SN2 is favored by?', back: '1° halides, polar aprotic solvents, strong nucleophiles.' },
              { id: 'f4', front: 'Zaitsev rule?', back: 'More substituted (stable) alkene is the major product.' },
              { id: 'f5', front: 'Wurtz reaction?', back: '2R-X + 2Na → R-R (coupling of alkyl halides)' },
              { id: 'f6', front: 'Grignard reagent formula?', back: 'R-MgX (organomagnesium halide)' },
              { id: 'f7', front: 'Why are haloarenes less reactive?', back: 'C-X bond has partial double bond character due to resonance.' }
            ],
            mcqs: [
              { id: 'q1', question: 'SN2 mechanism gives:', options: ['Retention', 'Racemization', 'Inversion', 'No change'], correctIndex: 2, explanation: 'Backside attack causes Walden inversion.' },
              { id: 'q2', question: 'SN1 is favored by:', options: ['1° halides', '2° halides', '3° halides', 'All equally'], correctIndex: 2, explanation: '3° carbocation is most stable.' },
              { id: 'q3', question: 'Grignard reagent is prepared using:', options: ['Na', 'Mg', 'Zn', 'Fe'], correctIndex: 1, explanation: 'R-X + Mg → R-MgX in dry ether.' },
              { id: 'q4', question: 'Zaitsev rule predicts formation of:', options: ['Less substituted alkene', 'More substituted alkene', 'Alcohol', 'Ether'], correctIndex: 1, explanation: 'More stable alkene is major product.' },
              { id: 'q5', question: 'Rate of SN2 depends on:', options: ['[R-X] only', '[Nu] only', 'Both [R-X] and [Nu]', 'Neither'], correctIndex: 2, explanation: 'Rate = k[R-X][Nu], bimolecular.' }
            ],
            reels: [
              { id: 'r1', title: 'SN1', content: 'Unimolecular.\nCarbocation formed.\n3° > 2° > 1°', color: getReelColor(0) },
              { id: 'r2', title: 'SN2', content: 'Bimolecular.\nBackside attack.\n1° > 2° > 3°', color: getReelColor(1) },
              { id: 'r3', title: 'Inversion', content: 'SN2 = Complete inversion.\nSN1 = Racemization.\nWalden inversion!', color: getReelColor(2) },
              { id: 'r4', title: 'Zaitsev', content: 'More substituted alkene.\nMore stable.\nMajor product.', color: getReelColor(3) },
              { id: 'r5', title: 'Grignard', content: 'R-X + Mg → R-MgX.\nDry ether solvent.\nVery reactive!', color: getReelColor(4) },
              { id: 'r6', title: 'Haloarenes', content: 'Less reactive.\nResonance stabilized.\nElectrophilic substitution.', color: getReelColor(5) }
            ]
          }
        ]
      },
      {
        id: 'math', 
        name: 'Mathematics', 
        icon: 'Calculator', 
        color: 'bg-indigo-600', 
        syllabus: '1. Mathematical Logic\n2. Matrices\n3. Trigonometric Functions\n4. Pair of Straight Lines\n5. Vectors\n6. Three Dimensional Geometry\n7. Linear Programming\n8. Continuity\n9. Differentiation\n10. Applications of Derivatives\n11. Integration\n12. Applications of Integration\n13. Differential Equations\n14. Probability\n15. Binomial Distribution',
        paperPattern: '### Mathematics Paper Pattern (80 Marks)\n\n* **Section A (10 Marks)**: MCQs (2 marks each)\n* **Section B (16 Marks)**: Very short answers (2 marks each)\n* **Section C (18 Marks)**: Short answers (3 marks each)\n* **Section D (36 Marks)**: Long answers (4 marks each)',
        previousPapers: [], 
        chapters: [
          {
            id: 'math1',
            title: '1. Mathematical Logic',
            description: 'Statements, Connectives, Truth Tables.',
            summary: '**Statement**: Sentence that is either true or false\n**Connectives**: ∧ (and), ∨ (or), ¬ (not), → (implies), ↔ (biconditional)\n**Tautology**: Always true\n**Contradiction**: Always false',
            detailedNotes: '### 1. Statements\n* A declarative sentence that is either TRUE or FALSE\n* Not both, not neither\n* Denoted by p, q, r...\n\n### 2. Logical Connectives\n| Symbol | Name | Meaning |\n|--------|------|--------|\n| ¬ | Negation | NOT p |\n| ∧ | Conjunction | p AND q |\n| ∨ | Disjunction | p OR q |\n| → | Conditional | If p then q |\n| ↔ | Biconditional | p if and only if q |\n\n### 3. Truth Tables\n**Negation (¬p)**\n| p | ¬p |\n|---|----|\n| T | F |\n| F | T |\n\n**Conjunction (p ∧ q)**: True only when BOTH are true.\n**Disjunction (p ∨ q)**: False only when BOTH are false.\n\n### 4. Conditional (p → q)\n| p | q | p → q |\n|---|---|-------|\n| T | T | T |\n| T | F | F |\n| F | T | T |\n| F | F | T |\n\n"If p then q" is false ONLY when p is true and q is false.\n\n### 5. Related Statements\n* **Converse**: q → p\n* **Inverse**: ¬p → ¬q\n* **Contrapositive**: ¬q → ¬p\n\nOriginal ≡ Contrapositive\nConverse ≡ Inverse\n\n### 6. Tautology & Contradiction\n* **Tautology**: Always TRUE (p ∨ ¬p)\n* **Contradiction**: Always FALSE (p ∧ ¬p)\n* **Contingency**: Sometimes true, sometimes false\n\n### 7. Logical Equivalence\np ≡ q means p and q have same truth values\n\n### 8. Laws\n* **De Morgan\'s**: ¬(p ∧ q) ≡ ¬p ∨ ¬q; ¬(p ∨ q) ≡ ¬p ∧ ¬q\n* **Distributive**: p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)',
            flashcards: [
              { id: 'f1', front: 'When is p → q false?', back: 'Only when p is TRUE and q is FALSE.' },
              { id: 'f2', front: 'Contrapositive of p → q?', back: '¬q → ¬p (logically equivalent to original)' },
              { id: 'f3', front: 'What is a tautology?', back: 'A statement that is ALWAYS true. Example: p ∨ ¬p' },
              { id: 'f4', front: 'De Morgan\'s Law for ¬(p ∧ q)?', back: '¬(p ∧ q) ≡ ¬p ∨ ¬q' },
              { id: 'f5', front: 'When is p ∧ q true?', back: 'Only when BOTH p and q are true.' },
              { id: 'f6', front: 'When is p ∨ q false?', back: 'Only when BOTH p and q are false.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Contrapositive of p → q is:', options: ['q → p', '¬p → ¬q', '¬q → ¬p', 'p → ¬q'], correctIndex: 2, explanation: 'Contrapositive: negate both and reverse.' },
              { id: 'q2', question: 'p ∨ ¬p is:', options: ['Tautology', 'Contradiction', 'Contingency', 'None'], correctIndex: 0, explanation: 'Always true regardless of p.' },
              { id: 'q3', question: 'p ∧ ¬p is:', options: ['Tautology', 'Contradiction', 'Contingency', 'None'], correctIndex: 1, explanation: 'Always false regardless of p.' },
              { id: 'q4', question: '¬(p ∨ q) ≡', options: ['¬p ∨ ¬q', '¬p ∧ ¬q', 'p ∧ q', 'p ∨ q'], correctIndex: 1, explanation: 'De Morgan\'s law.' },
              { id: 'q5', question: 'If p is false, then p → q is:', options: ['True', 'False', 'Depends on q', 'Undefined'], correctIndex: 0, explanation: 'p → q is true when p is false.' }
            ],
            reels: [
              { id: 'r1', title: 'Connectives', content: '∧ = AND\n∨ = OR\n¬ = NOT\n→ = IF-THEN', color: getReelColor(0) },
              { id: 'r2', title: 'Conditional', content: 'p → q\nFalse ONLY when:\np = T, q = F', color: getReelColor(1) },
              { id: 'r3', title: 'Contrapositive', content: 'p → q ≡ ¬q → ¬p\nAlways equivalent!\nImportant for proofs.', color: getReelColor(2) },
              { id: 'r4', title: 'De Morgan', content: '¬(p ∧ q) = ¬p ∨ ¬q\n¬(p ∨ q) = ¬p ∧ ¬q\nBreak the bracket, flip!', color: getReelColor(3) },
              { id: 'r5', title: 'Tautology', content: 'Always TRUE.\np ∨ ¬p\nNo matter what!', color: getReelColor(4) },
              { id: 'r6', title: 'Contradiction', content: 'Always FALSE.\np ∧ ¬p\nImpossible!', color: getReelColor(5) }
            ]
          },
          {
            id: 'math2',
            title: '2. Matrices',
            description: 'Types, Operations, Inverse, Determinants.',
            summary: '**Matrix**: Rectangular array of numbers\n**Determinant**: |A| (only for square matrices)\n**Inverse**: A⁻¹ = (1/|A|) × adj(A)\n**Singular**: |A| = 0 (no inverse)',
            detailedNotes: '### 1. Types of Matrices\n* **Row Matrix**: 1 × n\n* **Column Matrix**: m × 1\n* **Square Matrix**: m × m\n* **Diagonal Matrix**: Non-zero only on diagonal\n* **Scalar Matrix**: Diagonal with same elements\n* **Identity Matrix**: Diagonal with all 1s\n* **Zero Matrix**: All elements are 0\n* **Symmetric**: A = Aᵀ\n* **Skew-symmetric**: A = -Aᵀ\n\n### 2. Matrix Operations\n**Addition/Subtraction**: Same order, element-wise\n**Scalar Multiplication**: Multiply each element\n**Matrix Multiplication**: (m×n) × (n×p) = (m×p)\n\nProperties:\n* AB ≠ BA (generally)\n* A(BC) = (AB)C\n* A(B+C) = AB + AC\n\n### 3. Transpose (Aᵀ)\n* Rows become columns\n* (AB)ᵀ = BᵀAᵀ\n* (Aᵀ)ᵀ = A\n\n### 4. Determinant\nFor 2×2: |a b; c d| = ad - bc\n\nFor 3×3: Expand along row/column (cofactor expansion)\n\nProperties:\n* |AB| = |A||B|\n* |Aᵀ| = |A|\n* |kA| = kⁿ|A| (n = order)\n* If row/column has all zeros, |A| = 0\n\n### 5. Adjoint\nadj(A) = transpose of cofactor matrix\n\n### 6. Inverse\nA⁻¹ = (1/|A|) × adj(A)\n\nConditions:\n* A must be square\n* |A| ≠ 0 (non-singular)\n\nProperties:\n* AA⁻¹ = A⁻¹A = I\n* (AB)⁻¹ = B⁻¹A⁻¹\n* (A⁻¹)⁻¹ = A\n\n### 7. Solving Linear Equations\nAX = B → X = A⁻¹B (Cramer\'s rule)',
            flashcards: [
              { id: 'f1', front: 'Condition for matrix multiplication?', back: 'Number of columns of A = Number of rows of B.' },
              { id: 'f2', front: 'Determinant of 2×2 matrix?', back: '|a b; c d| = ad - bc' },
              { id: 'f3', front: 'Formula for inverse?', back: 'A⁻¹ = (1/|A|) × adj(A)' },
              { id: 'f4', front: 'When does inverse not exist?', back: 'When |A| = 0 (singular matrix).' },
              { id: 'f5', front: '(AB)⁻¹ = ?', back: 'B⁻¹A⁻¹ (reverse order)' },
              { id: 'f6', front: 'Symmetric matrix condition?', back: 'A = Aᵀ (equal to its transpose)' }
            ],
            mcqs: [
              { id: 'q1', question: 'If A is 3×2 and B is 2×4, then AB is:', options: ['3×2', '2×4', '3×4', 'Not possible'], correctIndex: 2, explanation: '(3×2) × (2×4) = 3×4' },
              { id: 'q2', question: 'For singular matrix:', options: ['|A| = 1', '|A| = 0', '|A| = -1', '|A| > 0'], correctIndex: 1, explanation: 'Singular means determinant is zero.' },
              { id: 'q3', question: '|kA| for 3×3 matrix:', options: ['k|A|', 'k²|A|', 'k³|A|', '|A|/k'], correctIndex: 2, explanation: '|kA| = kⁿ|A| where n is order.' },
              { id: 'q4', question: 'If A = Aᵀ, then A is:', options: ['Symmetric', 'Skew-symmetric', 'Diagonal', 'Singular'], correctIndex: 0, explanation: 'Symmetric matrix equals its transpose.' },
              { id: 'q5', question: '(AB)ᵀ = ?', options: ['AᵀBᵀ', 'BᵀAᵀ', 'AB', 'BA'], correctIndex: 1, explanation: 'Transpose reverses the order.' }
            ],
            reels: [
              { id: 'r1', title: 'Matrix Types', content: 'Symmetric: A = Aᵀ.\nSkew: A = -Aᵀ.\nIdentity: I (diagonal 1s).', color: getReelColor(0) },
              { id: 'r2', title: 'Multiplication', content: '(m×n) × (n×p) = (m×p).\nInner dimensions must match.\nAB ≠ BA!', color: getReelColor(1) },
              { id: 'r3', title: '2×2 Determinant', content: '|a b|\n|c d|\n= ad - bc', color: getReelColor(2) },
              { id: 'r4', title: 'Inverse', content: 'A⁻¹ = adj(A)/|A|.\n|A| ≠ 0 required.\nAA⁻¹ = I.', color: getReelColor(3) },
              { id: 'r5', title: 'Transpose Rules', content: '(AB)ᵀ = BᵀAᵀ.\n(A⁻¹)ᵀ = (Aᵀ)⁻¹.\nReverse order!', color: getReelColor(4) },
              { id: 'r6', title: 'Singular', content: '|A| = 0.\nNo inverse exists.\nInfinite or no solutions.', color: getReelColor(5) }
            ]
          },
          {
            id: 'math3',
            title: '3. Differentiation',
            description: 'Derivatives, Rules, Applications.',
            summary: '**Derivative**: Rate of change, dy/dx\n**Product Rule**: (uv)\' = u\'v + uv\'\n**Quotient Rule**: (u/v)\' = (u\'v - uv\')/v²\n**Chain Rule**: dy/dx = (dy/du)(du/dx)',
            detailedNotes: '### 1. Definition\nf\'(x) = lim[h→0] [f(x+h) - f(x)]/h\n\n### 2. Basic Derivatives\n| f(x) | f\'(x) |\n|------|-------|\n| xⁿ | nxⁿ⁻¹ |\n| eˣ | eˣ |\n| aˣ | aˣ ln a |\n| ln x | 1/x |\n| log_a x | 1/(x ln a) |\n| sin x | cos x |\n| cos x | -sin x |\n| tan x | sec²x |\n| sec x | sec x tan x |\n| csc x | -csc x cot x |\n| cot x | -csc²x |\n\n### 3. Inverse Trigonometric\n| f(x) | f\'(x) |\n|------|-------|\n| sin⁻¹x | 1/√(1-x²) |\n| cos⁻¹x | -1/√(1-x²) |\n| tan⁻¹x | 1/(1+x²) |\n\n### 4. Rules\n**Sum/Difference**: (u ± v)\' = u\' ± v\'\n**Product Rule**: (uv)\' = u\'v + uv\'\n**Quotient Rule**: (u/v)\' = (u\'v - uv\')/v²\n**Chain Rule**: dy/dx = (dy/du) × (du/dx)\n\n### 5. Implicit Differentiation\nDifferentiate both sides, treating y as function of x.\nd/dx(y²) = 2y(dy/dx)\n\n### 6. Logarithmic Differentiation\nFor y = uᵛ type:\nln y = v ln u\nDifferentiate both sides.\n\n### 7. Parametric Differentiation\nIf x = f(t), y = g(t):\ndy/dx = (dy/dt)/(dx/dt)\n\n### 8. Higher Derivatives\nd²y/dx² = d/dx(dy/dx)\nSecond derivative = rate of change of slope.',
            flashcards: [
              { id: 'f1', front: 'd/dx(sin x)?', back: 'cos x' },
              { id: 'f2', front: 'd/dx(cos x)?', back: '-sin x' },
              { id: 'f3', front: 'd/dx(eˣ)?', back: 'eˣ' },
              { id: 'f4', front: 'd/dx(ln x)?', back: '1/x' },
              { id: 'f5', front: 'Product rule?', back: '(uv)\' = u\'v + uv\'' },
              { id: 'f6', front: 'Chain rule?', back: 'dy/dx = (dy/du)(du/dx)' },
              { id: 'f7', front: 'd/dx(tan⁻¹x)?', back: '1/(1+x²)' }
            ],
            mcqs: [
              { id: 'q1', question: 'd/dx(x⁵) = ?', options: ['5x⁴', '4x⁵', 'x⁴', '5x⁵'], correctIndex: 0, explanation: 'Power rule: nxⁿ⁻¹' },
              { id: 'q2', question: 'd/dx(tan x) = ?', options: ['sec x', 'sec²x', 'cot x', '-sec²x'], correctIndex: 1, explanation: 'Derivative of tan x is sec²x.' },
              { id: 'q3', question: 'd/dx(eˣ) = ?', options: ['xeˣ⁻¹', 'eˣ', 'eˣ⁺¹', 'e'], correctIndex: 1, explanation: 'eˣ is its own derivative.' },
              { id: 'q4', question: 'If y = sin(2x), dy/dx = ?', options: ['cos(2x)', '2cos(2x)', '-2cos(2x)', 'sin(2x)'], correctIndex: 1, explanation: 'Chain rule: cos(2x) × 2' },
              { id: 'q5', question: 'd/dx(ln(x²)) = ?', options: ['1/x²', '2/x', '2x', '1/2x'], correctIndex: 1, explanation: 'Chain rule: (1/x²) × 2x = 2/x' }
            ],
            reels: [
              { id: 'r1', title: 'Power Rule', content: 'd/dx(xⁿ) = nxⁿ⁻¹.\nBring power down.\nReduce by 1.', color: getReelColor(0) },
              { id: 'r2', title: 'Trig Derivatives', content: 'sin → cos.\ncos → -sin.\ntan → sec².', color: getReelColor(1) },
              { id: 'r3', title: 'Exponential', content: 'd/dx(eˣ) = eˣ.\nd/dx(aˣ) = aˣ ln a.\nln derivative = 1/x.', color: getReelColor(2) },
              { id: 'r4', title: 'Product Rule', content: '(uv)\' = u\'v + uv\'.\nFirst times derivative of second.\nPlus second times derivative of first.', color: getReelColor(3) },
              { id: 'r5', title: 'Chain Rule', content: 'dy/dx = dy/du × du/dx.\nOutside × Inside.\nComposite functions!', color: getReelColor(4) },
              { id: 'r6', title: 'Quotient Rule', content: '(u/v)\' = (u\'v - uv\')/v².\nLo d-Hi minus Hi d-Lo.\nOver Lo squared.', color: getReelColor(5) }
            ]
          },
          {
            id: 'math4',
            title: '4. Integration',
            description: 'Antiderivatives, Definite integrals, Methods.',
            summary: '**Integration**: Reverse of differentiation\n**Indefinite**: ∫f(x)dx + C\n**Definite**: ∫[a to b]f(x)dx = F(b) - F(a)\n**Methods**: Substitution, Parts, Partial fractions',
            detailedNotes: '### 1. Basic Integrals\n| f(x) | ∫f(x)dx |\n|------|--------|\n| xⁿ | xⁿ⁺¹/(n+1) + C (n≠-1) |\n| 1/x | ln|x| + C |\n| eˣ | eˣ + C |\n| aˣ | aˣ/ln a + C |\n| sin x | -cos x + C |\n| cos x | sin x + C |\n| sec²x | tan x + C |\n| csc²x | -cot x + C |\n| sec x tan x | sec x + C |\n\n### 2. Substitution Method\nIf ∫f(g(x))g\'(x)dx, let u = g(x)\ndu = g\'(x)dx\n∫f(u)du\n\n### 3. Integration by Parts\n∫u dv = uv - ∫v du\n\nILATE rule for choosing u:\n* I - Inverse trig\n* L - Logarithmic\n* A - Algebraic\n* T - Trigonometric\n* E - Exponential\n\n### 4. Partial Fractions\nFor rational functions:\n* Linear: A/(x-a)\n* Repeated linear: A/(x-a) + B/(x-a)²\n* Quadratic: (Ax+B)/(x²+bx+c)\n\n### 5. Definite Integrals\n∫[a to b]f(x)dx = F(b) - F(a)\n\nProperties:\n* ∫[a to a] = 0\n* ∫[a to b] = -∫[b to a]\n* ∫[a to b] = ∫[a to c] + ∫[c to b]\n\n### 6. Important Results\n∫1/(x²+a²)dx = (1/a)tan⁻¹(x/a) + C\n∫1/√(a²-x²)dx = sin⁻¹(x/a) + C\n∫1/(x²-a²)dx = (1/2a)ln|(x-a)/(x+a)| + C',
            flashcards: [
              { id: 'f1', front: '∫xⁿdx = ?', back: 'xⁿ⁺¹/(n+1) + C (n ≠ -1)' },
              { id: 'f2', front: '∫sin x dx = ?', back: '-cos x + C' },
              { id: 'f3', front: '∫cos x dx = ?', back: 'sin x + C' },
              { id: 'f4', front: '∫eˣdx = ?', back: 'eˣ + C' },
              { id: 'f5', front: 'Integration by parts formula?', back: '∫u dv = uv - ∫v du' },
              { id: 'f6', front: 'ILATE stands for?', back: 'Inverse, Logarithmic, Algebraic, Trigonometric, Exponential' },
              { id: 'f7', front: '∫1/x dx = ?', back: 'ln|x| + C' }
            ],
            mcqs: [
              { id: 'q1', question: '∫x³dx = ?', options: ['x⁴ + C', 'x⁴/4 + C', '3x² + C', '4x⁴ + C'], correctIndex: 1, explanation: 'x³⁺¹/(3+1) = x⁴/4 + C' },
              { id: 'q2', question: '∫cos x dx = ?', options: ['sin x + C', '-sin x + C', 'cos x + C', '-cos x + C'], correctIndex: 0, explanation: 'Integral of cos is sin.' },
              { id: 'q3', question: '∫sec²x dx = ?', options: ['sec x + C', 'tan x + C', 'cot x + C', '-tan x + C'], correctIndex: 1, explanation: 'd/dx(tan x) = sec²x.' },
              { id: 'q4', question: '∫[0 to π]sin x dx = ?', options: ['0', '1', '2', '-1'], correctIndex: 2, explanation: '[-cos x] from 0 to π = -(-1) - (-1) = 2' },
              { id: 'q5', question: '∫e²ˣdx = ?', options: ['e²ˣ + C', '2e²ˣ + C', 'e²ˣ/2 + C', 'e²ˣ⁺¹ + C'], correctIndex: 2, explanation: 'Chain rule: divide by 2.' }
            ],
            reels: [
              { id: 'r1', title: 'Power Rule', content: '∫xⁿdx = xⁿ⁺¹/(n+1).\nAdd 1 to power.\nDivide by new power.', color: getReelColor(0) },
              { id: 'r2', title: 'Trig Integrals', content: '∫sin = -cos.\n∫cos = sin.\n∫sec² = tan.', color: getReelColor(1) },
              { id: 'r3', title: 'By Parts', content: '∫u dv = uv - ∫v du.\nILATE rule.\nFor products!', color: getReelColor(2) },
              { id: 'r4', title: 'Substitution', content: 'Let u = inside function.\ndu = derivative × dx.\nSimplify and integrate.', color: getReelColor(3) },
              { id: 'r5', title: 'Definite', content: '∫[a,b] = F(b) - F(a).\nNo + C needed.\nActual number!', color: getReelColor(4) },
              { id: 'r6', title: 'Special', content: '∫1/x = ln|x|.\n∫eˣ = eˣ.\n∫1/(1+x²) = tan⁻¹x.', color: getReelColor(5) }
            ]
          },
          {
            id: 'math5',
            title: '5. Probability',
            description: 'Basic probability, Conditional, Bayes theorem.',
            summary: '**Probability**: P(A) = n(A)/n(S)\n**Conditional**: P(A|B) = P(A∩B)/P(B)\n**Bayes Theorem**: P(A|B) = P(B|A)P(A)/P(B)\n**Independent**: P(A∩B) = P(A)P(B)',
            detailedNotes: '### 1. Basic Probability\nP(A) = Number of favorable outcomes / Total outcomes\nP(A) = n(A)/n(S)\n\nProperties:\n* 0 ≤ P(A) ≤ 1\n* P(S) = 1 (certain event)\n* P(∅) = 0 (impossible event)\n* P(A\') = 1 - P(A) (complement)\n\n### 2. Addition Rule\nP(A ∪ B) = P(A) + P(B) - P(A ∩ B)\n\nFor mutually exclusive events:\nP(A ∪ B) = P(A) + P(B)\n\n### 3. Conditional Probability\nP(A|B) = P(A ∩ B)/P(B)\n\n"Probability of A given B has occurred"\n\n### 4. Multiplication Rule\nP(A ∩ B) = P(B) × P(A|B) = P(A) × P(B|A)\n\n### 5. Independent Events\nA and B are independent if:\nP(A ∩ B) = P(A) × P(B)\n\nOr equivalently: P(A|B) = P(A)\n\n### 6. Bayes\' Theorem\nP(Aᵢ|B) = P(B|Aᵢ) × P(Aᵢ) / ΣP(B|Aⱼ)P(Aⱼ)\n\nUsed when:\n* We know P(B|A)\n* We want P(A|B)\n\n### 7. Random Variables\n* **Discrete**: Countable values\n* **Continuous**: Any value in range\n\nExpected Value: E(X) = ΣxᵢP(xᵢ)\nVariance: Var(X) = E(X²) - [E(X)]²\n\n### 8. Binomial Distribution\nP(X = r) = ⁿCᵣ pʳ qⁿ⁻ʳ\n\nWhere:\n* n = number of trials\n* p = probability of success\n* q = 1 - p\n* Mean = np\n* Variance = npq',
            flashcards: [
              { id: 'f1', front: 'Conditional probability formula?', back: 'P(A|B) = P(A∩B)/P(B)' },
              { id: 'f2', front: 'Addition rule?', back: 'P(A∪B) = P(A) + P(B) - P(A∩B)' },
              { id: 'f3', front: 'When are events independent?', back: 'When P(A∩B) = P(A) × P(B)' },
              { id: 'f4', front: 'Bayes theorem?', back: 'P(A|B) = P(B|A)P(A)/P(B)' },
              { id: 'f5', front: 'Mean of binomial distribution?', back: 'μ = np' },
              { id: 'f6', front: 'Variance of binomial distribution?', back: 'σ² = npq' },
              { id: 'f7', front: 'Binomial probability formula?', back: 'P(X=r) = ⁿCᵣ pʳ qⁿ⁻ʳ' }
            ],
            mcqs: [
              { id: 'q1', question: 'If P(A) = 0.3, P(A\') = ?', options: ['0.3', '0.7', '0', '1'], correctIndex: 1, explanation: 'P(A\') = 1 - P(A) = 0.7' },
              { id: 'q2', question: 'For mutually exclusive events:', options: ['P(A∩B) = P(A)P(B)', 'P(A∩B) = 0', 'P(A|B) = P(A)', 'P(A∪B) = 0'], correctIndex: 1, explanation: 'No overlap, so intersection is empty.' },
              { id: 'q3', question: 'Mean of binomial distribution:', options: ['np', 'npq', 'n/p', 'p/n'], correctIndex: 0, explanation: 'μ = np for binomial.' },
              { id: 'q4', question: 'For independent events, P(A|B) = ?', options: ['P(B)', 'P(A)', 'P(A)P(B)', '0'], correctIndex: 1, explanation: 'If independent, B doesn\'t affect A.' },
              { id: 'q5', question: 'If P(A∩B) = 0.2, P(B) = 0.5, then P(A|B) = ?', options: ['0.1', '0.4', '0.25', '0.7'], correctIndex: 1, explanation: 'P(A|B) = 0.2/0.5 = 0.4' }
            ],
            reels: [
              { id: 'r1', title: 'Basic Probability', content: 'P(A) = favorable/total.\n0 ≤ P(A) ≤ 1.\nP(A\') = 1 - P(A).', color: getReelColor(0) },
              { id: 'r2', title: 'Addition Rule', content: 'P(A∪B) = P(A) + P(B) - P(A∩B).\nMutually exclusive: no overlap.\nP(A∪B) = P(A) + P(B).', color: getReelColor(1) },
              { id: 'r3', title: 'Conditional', content: 'P(A|B) = P(A∩B)/P(B).\nGiven B has occurred.\nRestricted sample space.', color: getReelColor(2) },
              { id: 'r4', title: 'Independent', content: 'P(A∩B) = P(A)×P(B).\nOne doesn\'t affect other.\nP(A|B) = P(A).', color: getReelColor(3) },
              { id: 'r5', title: 'Bayes', content: 'P(A|B) = P(B|A)P(A)/P(B).\nReverse conditional.\nVery useful!', color: getReelColor(4) },
              { id: 'r6', title: 'Binomial', content: 'P(X=r) = ⁿCᵣ pʳ qⁿ⁻ʳ.\nMean = np.\nVariance = npq.', color: getReelColor(5) }
            ]
          }
        ]
      },
      {
        id: 'bio', name: 'Biology', icon: 'Dna', color: 'bg-green-500',
        syllabus: 'Reproduction, Genetics, Biotechnology, Evolution, Ecology & Environment',
        paperPattern: '70 marks theory (MCQ + Short + Long answers), 30 marks practical',
        previousPapers: ['2024 Biology Paper', '2023 Biology Paper', '2022 Biology Paper'],
        chapters: [
          {
            id: 'bio-ch1',
            title: 'Chapter 1: Reproduction in Organisms',
            description: 'Modes of reproduction in living organisms',
            summary: `
# Reproduction in Organisms

## Key Concepts

### Types of Reproduction
1. **Asexual Reproduction**
   - Binary fission (bacteria, amoeba)
   - Budding (yeast, hydra)
   - Fragmentation (Spirogyra)
   - Vegetative propagation (plants)
   - Spore formation (fungi)

2. **Sexual Reproduction**
   - Involves fusion of gametes
   - Creates genetic variation
   - Pre-fertilization, fertilization, post-fertilization events

### Life Span and Reproduction
- Every organism has definite life span
- Reproduction ensures continuity of species
- Clone: Morphologically and genetically similar individuals

### Events in Sexual Reproduction
1. **Pre-fertilization**
   - Gametogenesis (formation of gametes)
   - Gamete transfer

2. **Fertilization (Syngamy)**
   - External fertilization (aquatic organisms)
   - Internal fertilization (terrestrial organisms)

3. **Post-fertilization**
   - Zygote formation
   - Embryogenesis
   - Development of offspring

### Plant Reproduction
- **Vegetative**: Rhizomes, tubers, runners
- **Asexual**: Zoospores, conidia
- **Sexual**: Flowers, seeds, fruits

### Embryo Development
- Zygote → Embryo → Organism
- Oviparous: Lay eggs (birds, reptiles)
- Viviparous: Give birth (mammals)
            `,
            detailedNotes: `
# Detailed Notes: Reproduction in Organisms

## Asexual Reproduction

### Binary Fission
- Parent cell divides into two daughter cells
- Example: Amoeba (simple), Paramecium (transverse)
- In bacteria: rapid multiplication under favorable conditions

### Budding
- Small outgrowth develops on parent body
- Yeast: Single-celled budding
- Hydra: Multicellular budding
- Bud may detach or remain attached (colony)

### Fragmentation
- Body breaks into fragments
- Each fragment grows into complete organism
- Examples: Spirogyra, sea star

### Regeneration
- Ability to regenerate lost parts
- Planaria: Specialized cells dedifferentiate
- Hydra: High regeneration capacity

### Vegetative Propagation in Plants
| Structure | Examples |
|-----------|----------|
| Runner | Strawberry, grass |
| Rhizome | Ginger, turmeric |
| Tuber | Potato |
| Bulb | Onion, garlic |
| Offset | Pistia, water hyacinth |

### Advantages of Asexual Reproduction
- Rapid multiplication
- Single parent required
- Identical offspring (clones)
- Useful for propagating plants

## Sexual Reproduction

### Gametogenesis
- **Spermatogenesis**: Formation of male gametes (sperm)
- **Oogenesis**: Formation of female gametes (ova)
- Meiosis reduces chromosome number by half

### Types of Gametes
- **Isogametes**: Similar in appearance (some algae)
- **Heterogametes**: Different - sperm (small, motile) and ovum (large, non-motile)

### Fertilization
1. **External Fertilization**
   - Occurs outside body
   - Aquatic environment required
   - Large number of gametes produced
   - Examples: Fish, frogs, starfish

2. **Internal Fertilization**
   - Occurs inside female body
   - Fewer gametes needed
   - Higher success rate
   - Examples: Reptiles, birds, mammals

### Post-fertilization Events
- **Zygote**: First cell of new organism
- **Embryogenesis**: Development of embryo from zygote
- **Cell division**: Mitotic divisions
- **Differentiation**: Cells develop specialized functions

### Oviparous vs Viviparous
| Oviparous | Viviparous |
|-----------|------------|
| Lay eggs | Give birth to young |
| Development outside body | Development inside body |
| Birds, reptiles, fish | Most mammals |
| Less parental care | More parental care |

## Important Terms
- **Clone**: Genetically identical individuals
- **Parthenogenesis**: Development without fertilization (honey bees, some lizards)
- **Hermaphrodite**: Both male and female organs in same individual
            `,
            flashcards: [
              { front: 'What is binary fission?', back: 'Type of asexual reproduction where parent cell divides into two equal daughter cells. Example: Amoeba, bacteria.' },
              { front: 'Difference between oviparous and viviparous?', back: 'Oviparous lay eggs (birds, reptiles). Viviparous give birth to young ones with development inside mother (mammals).' },
              { front: 'What is parthenogenesis?', back: 'Development of organism from unfertilized egg without fusion of gametes. Example: Honey bees, some lizards.' },
              { front: 'Name 5 methods of vegetative propagation.', back: 'Runner (strawberry), Rhizome (ginger), Tuber (potato), Bulb (onion), Offset (water hyacinth).' },
              { front: 'What is gametogenesis?', back: 'The process of formation of gametes - spermatogenesis (male gametes) and oogenesis (female gametes) through meiosis.' },
              { front: 'What are isogametes?', back: 'Gametes that are similar in appearance, found in some lower organisms like certain algae. Heterogametes are different (sperm and ovum).' }
            ],
            mcqs: [
              { question: 'Which is NOT a method of asexual reproduction?', options: ['Binary fission', 'Budding', 'Syngamy', 'Fragmentation'], correctAnswer: 2 },
              { question: 'Vegetative propagation by tubers is seen in:', options: ['Potato', 'Ginger', 'Onion', 'Strawberry'], correctAnswer: 0 },
              { question: 'In which organisms does external fertilization occur?', options: ['Birds', 'Frogs', 'Mammals', 'Reptiles'], correctAnswer: 1 },
              { question: 'Parthenogenesis is observed in:', options: ['Honey bee', 'Dog', 'Human', 'Crow'], correctAnswer: 0 }
            ],
            reels: [
              { title: 'Asexual vs Sexual Reproduction', content: 'Asexual = 1 parent, clones, fast | Sexual = 2 parents, variation, slow 🧬' },
              { title: 'Binary Fission Steps', content: 'DNA replication → Cell elongates → Plasma membrane pinches → 2 daughter cells 🔬' },
              { title: 'Vegetative Propagation Mnemonics', content: 'RRTBO: Runner-Strawberry, Rhizome-Ginger, Tuber-Potato, Bulb-Onion, Offset-Pistia 🌱' },
              { title: 'Fertilization Types', content: 'External = Fish, Frog (water needed) | Internal = Birds, Mammals (inside body) 🐟🐦' },
              { title: 'Oviparous vs Viviparous', content: 'Eggs outside = Oviparous (Birds) | Birth to young = Viviparous (Mammals) 🥚👶' }
            ]
          },
          {
            id: 'bio-ch2',
            title: 'Chapter 2: Genetics and Heredity',
            description: 'Principles of inheritance and variation',
            summary: `
# Genetics and Heredity

## Key Concepts

### Mendel's Laws
1. **Law of Dominance**
   - One allele is dominant over another
   - Dominant character expressed in heterozygote

2. **Law of Segregation**
   - Alleles separate during gamete formation
   - Each gamete receives one allele

3. **Law of Independent Assortment**
   - Different pairs of alleles assort independently
   - Applies to genes on different chromosomes

### Important Terms
- **Genotype**: Genetic makeup (AA, Aa, aa)
- **Phenotype**: Physical expression
- **Homozygous**: Same alleles (AA, aa)
- **Heterozygous**: Different alleles (Aa)
- **Allele**: Alternate forms of gene

### Inheritance Patterns
1. **Complete Dominance**: One allele masks other (Mendel's pea)
2. **Incomplete Dominance**: Intermediate phenotype (pink snapdragon)
3. **Codominance**: Both alleles express (AB blood group)
4. **Multiple Alleles**: More than 2 alleles (ABO blood group)

### Chromosomal Theory
- Genes located on chromosomes
- Chromosomes occur in pairs
- Linkage: Genes on same chromosome
- Crossing over: Exchange of genetic material

### Sex Determination
- **XX-XY System**: Mammals, humans
- **ZW-ZZ System**: Birds
- Female: XX, Male: XY (in humans)
- Sex-linked inheritance: Color blindness, hemophilia

### DNA Structure
- Double helix (Watson & Crick)
- Nucleotides: Sugar + Phosphate + Base
- Bases: A-T, G-C pairing
- Central Dogma: DNA → RNA → Protein
            `,
            detailedNotes: `
# Detailed Notes: Genetics and Heredity

## Gregor Mendel's Experiments

### Reasons for Mendel's Success
- Chose contrasting characters
- Considered one character at a time
- Used statistical analysis
- Maintained accurate records
- Pure breeding varieties used

### Monohybrid Cross
- Cross between organisms differing in one character
- Example: Tall × Dwarf pea plants
- F1: All tall (Tt)
- F2: 3 Tall : 1 Dwarf (3:1 ratio)
- Genotypic ratio: 1TT : 2Tt : 1tt

### Dihybrid Cross
- Cross between organisms differing in two characters
- Example: Round Yellow × Wrinkled Green
- F2 ratio: 9:3:3:1
- 9 Round Yellow, 3 Round Green, 3 Wrinkled Yellow, 1 Wrinkled Green

### Punnett Square
Used to predict offspring genotypes and phenotypes

         T       t
    +--------+--------+
 T  |   TT   |   Tt   |
    +--------+--------+
 t  |   Tt   |   tt   |
    +--------+--------+

## Deviations from Mendelian Ratios

### Incomplete Dominance
- Heterozygote shows intermediate phenotype
- Example: Snapdragon flowers
- Red × White = Pink
- F2: 1 Red : 2 Pink : 1 White

### Codominance
- Both alleles fully express
- Example: ABO blood group
- I^A I^B genotype = AB blood group
- Both A and B antigens present

### Multiple Alleles
- More than 2 alleles for a gene in population
- ABO blood group: I^A, I^B, i
- Possible genotypes: I^A I^A, I^A i, I^B I^B, I^B i, I^A I^B, ii

## Linkage and Crossing Over

### Linkage
- Genes on same chromosome inherited together
- Complete linkage: Genes very close, no crossing over
- Incomplete linkage: Some crossing over occurs

### Crossing Over
- Exchange of segments between homologous chromosomes
- Occurs during prophase I of meiosis
- Results in genetic recombination
- Frequency depends on distance between genes

## Sex Determination

### Human Sex Chromosomes
| Sex | Chromosomes | Gametes |
|-----|-------------|---------|
| Female | 44 + XX | 22 + X only |
| Male | 44 + XY | 22 + X or 22 + Y |

### Sex-Linked Inheritance
- **Color Blindness**: X-linked recessive
- **Hemophilia**: X-linked recessive
- Carrier female × Normal male
- Sons: 50% affected, Daughters: 50% carriers

## DNA Structure and Function

### DNA Composition
- Deoxyribose sugar
- Phosphate group
- Nitrogenous bases: Adenine, Thymine, Guanine, Cytosine
- A=T (2 hydrogen bonds), G≡C (3 hydrogen bonds)

### DNA Replication
- Semi-conservative replication
- Enzymes: Helicase, DNA polymerase, Ligase
- Leading and lagging strands
- Okazaki fragments on lagging strand

### Central Dogma
DNA → (Transcription) → RNA → (Translation) → Protein
            `,
            flashcards: [
              { front: 'State Mendel\'s Law of Segregation.', back: 'During gamete formation, the alleles of a gene separate so that each gamete receives only one allele. Also called Law of Purity of Gametes.' },
              { front: 'What is the difference between genotype and phenotype?', back: 'Genotype is genetic makeup (AA, Aa, aa). Phenotype is physical/observable expression of genes (tall, dwarf, color).' },
              { front: 'What is codominance?', back: 'Both alleles express fully in heterozygote. Example: AB blood group where both A and B antigens are present.' },
              { front: 'How is sex determined in humans?', back: 'XX-XY system. Females have XX chromosomes, males have XY. Father determines sex of child by contributing X or Y.' },
              { front: 'What is crossing over?', back: 'Exchange of genetic material between homologous chromosomes during prophase I of meiosis, leading to genetic recombination.' },
              { front: 'State the base pairing rule in DNA.', back: 'Adenine pairs with Thymine (A=T, 2 H-bonds). Guanine pairs with Cytosine (G≡C, 3 H-bonds).' }
            ],
            mcqs: [
              { question: 'The phenotypic ratio of monohybrid cross is:', options: ['1:2:1', '3:1', '9:3:3:1', '1:1'], correctAnswer: 1 },
              { question: 'Color blindness is:', options: ['Autosomal dominant', 'X-linked recessive', 'Y-linked', 'Autosomal recessive'], correctAnswer: 1 },
              { question: 'Which blood group is universal donor?', options: ['A', 'B', 'AB', 'O'], correctAnswer: 3 },
              { question: 'How many hydrogen bonds are there between G and C?', options: ['1', '2', '3', '4'], correctAnswer: 2 }
            ],
            reels: [
              { title: 'Mendel\'s 3 Laws', content: '1. Dominance: One masks other | 2. Segregation: Alleles separate | 3. Independent Assortment: Different genes = separate 🧬' },
              { title: 'Monohybrid Ratio', content: 'F2 Phenotypic = 3:1 | Genotypic = 1:2:1 | TT:Tt:tt 📊' },
              { title: 'Blood Group Genetics', content: 'A = I^A I^A or I^A i | B = I^B I^B or I^B i | AB = I^A I^B | O = ii 🩸' },
              { title: 'DNA Base Pairing', content: 'A=T (2 bonds) | G≡C (3 bonds) | Chargaff\'s rule: A=T, G=C 🔬' },
              { title: 'Sex Determination', content: 'XX = Female ♀️ | XY = Male ♂️ | Father gives X or Y → determines sex 👶' }
            ]
          },
          {
            id: 'bio-ch3',
            title: 'Chapter 3: Biotechnology',
            description: 'Principles and applications of biotechnology',
            summary: `
# Biotechnology

## Key Concepts

### What is Biotechnology?
- Technology using biological systems
- Manipulating living organisms for human benefit
- Modern biotechnology: Genetic engineering + bioprocess technology

### Core Techniques

1. **Genetic Engineering (rDNA Technology)**
   - Cutting DNA with restriction enzymes
   - Joining DNA with ligase
   - Cloning genes in vectors
   - Expressing foreign genes

2. **Polymerase Chain Reaction (PCR)**
   - Amplifying DNA segments
   - Requires: Template, primers, Taq polymerase
   - Steps: Denaturation, Annealing, Extension

3. **Gel Electrophoresis**
   - Separating DNA fragments by size
   - Smaller fragments move faster
   - Used in DNA fingerprinting

### Tools of rDNA Technology
- **Restriction Enzymes**: Molecular scissors (EcoRI, HindIII)
- **Vectors**: Plasmids, bacteriophages, cosmids
- **Ligase**: Joins DNA fragments
- **Host Organisms**: E. coli, yeast, plant cells

### Applications
1. **Medicine**
   - Insulin production (Humulin)
   - Gene therapy
   - Vaccines (Hepatitis B)

2. **Agriculture**
   - Bt crops (insect resistance)
   - Golden rice (Vitamin A)
   - Herbicide resistance

3. **Industry**
   - Enzymes production
   - Biofuels
   - Bioremediation

### Bioethics
- GMO safety concerns
- Human cloning debates
- Gene patenting issues
            `,
            detailedNotes: `
# Detailed Notes: Biotechnology

## Recombinant DNA Technology

### Steps in rDNA Technology
1. **Isolation of DNA**
   - Break cells (lysozyme for bacteria)
   - Remove RNA (RNase)
   - Remove proteins (protease)
   - Precipitate DNA (ethanol)

2. **Cutting DNA (Restriction Digestion)**
   - Restriction endonucleases cut at specific sites
   - Palindromic sequences recognized
   - Creates sticky or blunt ends
   - Example: EcoRI cuts at GAATTC

3. **Joining DNA (Ligation)**
   - DNA ligase joins fragments
   - Sticky ends join more efficiently
   - Creates recombinant DNA

4. **Introduction into Host**
   - Transformation: DNA uptake (CaCl₂ treatment)
   - Transfection: Virus-mediated
   - Electroporation: Electric pulse

5. **Selection of Recombinants**
   - Antibiotic resistance markers
   - Blue-white screening (lac operon)
   - PCR confirmation

### Vectors

| Vector | Features | Insert Size |
|--------|----------|-------------|
| Plasmid | Circular, self-replicating | Up to 10 kb |
| Bacteriophage | Viral DNA | Up to 25 kb |
| Cosmid | Plasmid + phage features | Up to 45 kb |
| BAC | Bacterial artificial chromosome | Up to 300 kb |

### Features of Good Vector
- Origin of replication (ori)
- Selectable marker (antibiotic resistance)
- Cloning sites (restriction sites)
- Small size for easy manipulation

## PCR (Polymerase Chain Reaction)

### Components Required
- Template DNA
- Two primers (forward and reverse)
- Taq DNA polymerase (thermostable)
- dNTPs (nucleotides)
- Buffer and MgCl₂

### PCR Steps
1. **Denaturation** (94-98°C): DNA strands separate
2. **Annealing** (50-65°C): Primers bind to template
3. **Extension** (72°C): Taq polymerase synthesizes DNA

### Applications of PCR
- DNA fingerprinting
- Disease diagnosis
- Forensic science
- Paternity testing
- Ancient DNA analysis

## Applications of Biotechnology

### Medical Applications
1. **Insulin Production**
   - Human insulin gene inserted in E. coli
   - Humulin: First FDA-approved rDNA product (1982)
   - A and B chains produced separately, combined

2. **Gene Therapy**
   - Replacing defective genes
   - ADA deficiency first treated (1990)
   - Viral vectors used for delivery

3. **Vaccines**
   - Recombinant Hepatitis B vaccine
   - Safer than traditional vaccines
   - No risk of infection

### Agricultural Applications
1. **Bt Crops**
   - Bacillus thuringiensis gene inserted
   - Produces Cry protein (insecticidal)
   - Bt cotton, Bt brinjal
   - Reduces pesticide use

2. **Golden Rice**
   - Produces beta-carotene (Vitamin A precursor)
   - Addresses Vitamin A deficiency
   - Contains genes from daffodil and bacteria

3. **Herbicide Resistant Crops**
   - Roundup Ready soybeans
   - Tolerate glyphosate herbicide

## Bioethics and Biosafety

### Concerns
- Environmental impact of GMOs
- Gene flow to wild relatives
- Allergenicity of GM foods
- Antibiotic resistance spread

### Regulations
- Institutional Biosafety Committee (IBSC)
- Genetic Engineering Approval Committee (GEAC)
- Cartagena Protocol on Biosafety
            `,
            flashcards: [
              { front: 'What are restriction enzymes?', back: 'Molecular scissors that cut DNA at specific recognition sequences. Examples: EcoRI cuts at GAATTC. Also called restriction endonucleases.' },
              { front: 'What is PCR and its 3 steps?', back: 'Polymerase Chain Reaction - amplifies DNA. Steps: 1) Denaturation (94°C) 2) Annealing (50-65°C) 3) Extension (72°C)' },
              { front: 'What is a vector in biotechnology?', back: 'DNA molecule that carries foreign DNA into host cell. Examples: Plasmids, bacteriophages, cosmids. Must have ori, selectable marker, cloning sites.' },
              { front: 'What are Bt crops?', back: 'Crops containing gene from Bacillus thuringiensis that produces Cry protein (insecticidal). Example: Bt cotton, Bt brinjal. Reduces pesticide use.' },
              { front: 'What is Humulin?', back: 'Human insulin produced by recombinant DNA technology using E. coli. First FDA-approved rDNA product (1982). Revolutionized diabetes treatment.' },
              { front: 'What is gene therapy?', back: 'Treatment of genetic disorders by replacing defective genes with functional ones. First success: ADA deficiency (1990). Uses viral vectors.' }
            ],
            mcqs: [
              { question: 'Which enzyme cuts DNA at specific sites?', options: ['Ligase', 'Polymerase', 'Restriction endonuclease', 'Helicase'], correctAnswer: 2 },
              { question: 'Bt toxin gene comes from:', options: ['E. coli', 'Bacillus thuringiensis', 'Agrobacterium', 'Yeast'], correctAnswer: 1 },
              { question: 'PCR was developed by:', options: ['Watson', 'Crick', 'Kary Mullis', 'Cohen'], correctAnswer: 2 },
              { question: 'Golden rice is rich in:', options: ['Iron', 'Protein', 'Beta-carotene', 'Vitamin C'], correctAnswer: 2 }
            ],
            reels: [
              { title: 'rDNA Steps', content: 'Isolate → Cut (restriction enzyme) → Join (ligase) → Insert in host → Select recombinants 🧬' },
              { title: 'PCR Cycle', content: 'Denature 94°C → Anneal 55°C → Extend 72°C → Repeat 30x = Millions of copies! 🔬' },
              { title: 'Vector Features', content: 'Ori (replication) + Marker (selection) + MCS (cloning) = Good Vector 📦' },
              { title: 'Bt Cotton Action', content: 'Cry protein → Bollworm eats → Gut becomes alkaline → Toxin activated → Pest dies 🐛❌' },
              { title: 'Biotechnology Products', content: 'Medicine: Insulin, Vaccines | Agri: Bt crops, Golden Rice | Industry: Enzymes, Biofuel 🏭' }
            ]
          },
          {
            id: 'bio-ch4',
            title: 'Chapter 4: Evolution',
            description: 'Origin of life and evolution of organisms',
            summary: `
# Evolution

## Key Concepts

### Origin of Life
- **Abiogenesis**: Life from non-living matter
- **Oparin-Haldane Hypothesis**: Chemical evolution
- **Miller-Urey Experiment**: Simulated primitive earth
- First molecules: RNA (RNA world hypothesis)

### Evidence of Evolution
1. **Fossil Evidence**
   - Preserved remains of ancient organisms
   - Shows gradual changes over time
   - Transitional forms (Archaeopteryx)

2. **Anatomical Evidence**
   - Homologous organs: Same origin, different function
   - Analogous organs: Different origin, same function
   - Vestigial organs: Reduced, functionless

3. **Molecular Evidence**
   - DNA/protein sequence similarities
   - Cytochrome c comparison
   - More similar = more closely related

### Theories of Evolution
1. **Lamarckism**
   - Inheritance of acquired characters
   - Use and disuse theory
   - Disproved (Weismann's experiment)

2. **Darwinism (Natural Selection)**
   - Overproduction of offspring
   - Struggle for existence
   - Survival of the fittest
   - Variation and inheritance

3. **Modern Synthetic Theory**
   - Combines genetics with Darwin's theory
   - Gene mutations as source of variation
   - Natural selection acts on genetic variation

### Mechanisms of Evolution
- **Gene Flow**: Movement of genes between populations
- **Genetic Drift**: Random changes in gene frequency
- **Natural Selection**: Differential survival and reproduction
- **Mutation**: Source of new variations
            `,
            detailedNotes: `
# Detailed Notes: Evolution

## Origin of Life Theories

### Abiogenesis (Chemical Evolution)
- Life originated from non-living organic molecules
- Primitive earth conditions were different
- No oxygen (reducing atmosphere)
- Energy sources: UV radiation, lightning

### Oparin-Haldane Hypothesis
- Proposed independently (1920s)
- Primitive atmosphere: CH₄, NH₃, H₂O, H₂
- Energy from lightning, UV radiation
- Simple organic molecules formed
- Coacervates: Aggregates of organic molecules

### Miller-Urey Experiment (1953)
- Simulated primitive earth conditions
- Used CH₄, NH₃, H₂O, H₂
- Electric sparks for energy
- Produced amino acids (glycine, alanine)
- Proved organic molecules can form abiotically

### First Life Forms
- Chemoheterotrophs: Used organic molecules
- Autotrophs evolved later
- Prokaryotes first (bacteria)
- Eukaryotes evolved ~2 billion years ago

## Evidence of Evolution

### Fossil Evidence
| Fossil Type | Description | Example |
|-------------|-------------|---------|
| Preserved | Original remains | Frozen mammoth |
| Mold | Impression in rock | Leaf imprint |
| Cast | Filled mold | Shell cast |
| Petrified | Minerals replace tissue | Petrified wood |

### Transitional Fossils
- **Archaeopteryx**: Reptile-bird link (feathers + reptilian teeth, tail)
- **Tiktaalik**: Fish-amphibian transition
- **Australopithecus**: Ape-human ancestor

### Homologous Organs
- Same basic structure, different functions
- Indicate common ancestry
- Examples:
  - Forelimbs: Human arm, whale flipper, bat wing, dog leg
  - All have humerus, radius, ulna, carpals

### Analogous Organs
- Similar function, different origin
- Result of convergent evolution
- Examples:
  - Wings of insect vs bird
  - Eye of octopus vs mammal

### Vestigial Organs
- Reduced or non-functional organs
- Evidence of evolutionary past
- Human examples: Appendix, wisdom teeth, tailbone, ear muscles

## Theories of Evolution

### Lamarckism
- **Use and Disuse**: Organs develop/degenerate based on use
- **Inheritance of Acquired Characters**: Acquired traits passed to offspring
- Example: Giraffe's long neck from stretching
- **Disproved**: Weismann cut mice tails for 20 generations - no effect on offspring

### Darwin's Natural Selection
1. **Overproduction**: More offspring than can survive
2. **Variation**: Individuals differ in traits
3. **Struggle for Existence**: Competition for resources
4. **Survival of the Fittest**: Better adapted survive
5. **Inheritance**: Favorable traits passed on
6. **Speciation**: New species evolve over time

### Examples of Natural Selection
- Industrial melanism in peppered moth
- Antibiotic resistance in bacteria
- Pesticide resistance in insects

### Modern Synthetic Theory (Neo-Darwinism)
- Combines Mendelian genetics + Darwinism
- **Population** is unit of evolution (not individual)
- Sources of variation:
  - Gene mutations
  - Chromosomal mutations
  - Genetic recombination

## Types of Natural Selection
1. **Stabilizing**: Favors intermediate phenotype
2. **Directional**: Favors one extreme
3. **Disruptive**: Favors both extremes

## Hardy-Weinberg Equilibrium
- Gene frequencies remain constant if:
  - Large population
  - Random mating
  - No selection
  - No mutation
  - No migration
- Equation: p² + 2pq + q² = 1
            `,
            flashcards: [
              { front: 'What did Miller-Urey experiment prove?', back: 'Proved organic molecules (amino acids) can form from inorganic compounds under primitive earth conditions. Simulated atmosphere of CH₄, NH₃, H₂O, H₂ with electric sparks.' },
              { front: 'What are homologous organs?', back: 'Organs with same basic structure and origin but different functions due to adaptation. Example: Forelimbs of human, whale, bat, dog. Evidence of common ancestry.' },
              { front: 'State Darwin\'s theory of natural selection.', back: 'Overproduction → Variation → Struggle for existence → Survival of fittest → Inheritance of favorable traits → Speciation' },
              { front: 'Why was Lamarckism rejected?', back: 'Weismann\'s experiment: Cut mice tails for 20 generations - offspring still had tails. Acquired characters are not inherited.' },
              { front: 'What is Archaeopteryx?', back: 'Transitional fossil (link between reptiles and birds). Had feathers like bird but teeth, clawed wings, and bony tail like reptile.' },
              { front: 'What is genetic drift?', back: 'Random changes in gene frequency in small populations, not due to natural selection. Can lead to loss of genetic variation.' }
            ],
            mcqs: [
              { question: 'Miller-Urey experiment demonstrated formation of:', options: ['DNA', 'Amino acids', 'Proteins', 'Cells'], correctAnswer: 1 },
              { question: 'Homologous organs indicate:', options: ['Convergent evolution', 'Common ancestry', 'Parallel evolution', 'No relation'], correctAnswer: 1 },
              { question: 'Who proposed natural selection?', options: ['Lamarck', 'Oparin', 'Darwin', 'Mendel'], correctAnswer: 2 },
              { question: 'Vestigial organ in humans:', options: ['Heart', 'Appendix', 'Kidney', 'Lung'], correctAnswer: 1 }
            ],
            reels: [
              { title: 'Miller-Urey Setup', content: 'CH₄ + NH₃ + H₂O + H₂ + ⚡ = Amino acids! Proved life chemicals can form naturally 🧪' },
              { title: 'Homologous vs Analogous', content: 'Homologous: Same origin, different function (arm, flipper) | Analogous: Different origin, same function (insect wing, bird wing) 🦅' },
              { title: 'Darwin\'s Theory in 5 Words', content: 'Overproduction → Variation → Struggle → Survival → Inheritance 🌿' },
              { title: 'Human Vestigial Organs', content: 'Appendix + Wisdom teeth + Tailbone + Ear muscles = Evidence of our evolutionary past! 🧬' },
              { title: 'Lamarck vs Darwin', content: 'Lamarck: Giraffe stretched neck → Got longer (WRONG) | Darwin: Longer necks survived better → More offspring (RIGHT) 🦒' }
            ]
          },
          {
            id: 'bio-ch5',
            title: 'Chapter 5: Ecology and Environment',
            description: 'Organisms and their environment',
            summary: `
# Ecology and Environment

## Key Concepts

### Levels of Organization
1. **Organism** → **Population** → **Community** → **Ecosystem** → **Biome** → **Biosphere**

### Ecosystem
- Functional unit of nature
- Biotic (living) + Abiotic (non-living) components
- Energy flow and nutrient cycling

### Components of Ecosystem
1. **Abiotic**: Light, temperature, water, soil, minerals
2. **Biotic**:
   - Producers (autotrophs)
   - Consumers (heterotrophs)
   - Decomposers (saprotrophs)

### Energy Flow
- Unidirectional flow
- 10% Law: Only 10% energy transfers to next level
- Food chain → Food web
- Trophic levels: Producer → Primary → Secondary → Tertiary consumer

### Ecological Pyramids
1. **Pyramid of Numbers**: Number of organisms at each level
2. **Pyramid of Biomass**: Total mass at each level
3. **Pyramid of Energy**: Always upright, energy at each level

### Biogeochemical Cycles
1. **Carbon Cycle**: Photosynthesis, respiration, decomposition
2. **Nitrogen Cycle**: Fixation, nitrification, denitrification
3. **Water Cycle**: Evaporation, condensation, precipitation

### Environmental Issues
- **Pollution**: Air, water, soil, noise
- **Global Warming**: Greenhouse effect, rising temperatures
- **Ozone Depletion**: CFCs destroying ozone layer
- **Biodiversity Loss**: Habitat destruction, overexploitation
            `,
            detailedNotes: `
# Detailed Notes: Ecology and Environment

## Ecosystem Structure

### Abiotic Components
| Factor | Description | Effect |
|--------|-------------|--------|
| Light | Energy source | Photosynthesis, behavior |
| Temperature | Heat levels | Metabolic rate, distribution |
| Water | Essential for life | Determines habitat type |
| Soil | Substrate | Nutrient availability |

### Biotic Components

1. **Producers (Autotrophs)**
   - Make own food
   - Photosynthetic: Plants, algae, cyanobacteria
   - Chemosynthetic: Some bacteria

2. **Consumers (Heterotrophs)**
   - Primary: Herbivores (deer, grasshopper)
   - Secondary: Carnivores eating herbivores (frog, snake)
   - Tertiary: Top predators (lion, eagle)

3. **Decomposers (Saprotrophs)**
   - Break down dead organic matter
   - Bacteria and fungi
   - Recycle nutrients

## Energy Flow

### Food Chain
Producer → Primary Consumer → Secondary Consumer → Tertiary Consumer
Grass → Grasshopper → Frog → Snake → Eagle

### Food Web
- Interconnected food chains
- More realistic representation
- Provides stability to ecosystem

### 10% Law (Lindeman's Law)
- Only 10% energy passes to next trophic level
- 90% lost as heat, respiration, waste
- Limits food chain length (usually 4-5 levels)

### Energy Calculation
If producer has 10,000 J energy:
- Primary consumer: 1,000 J
- Secondary consumer: 100 J
- Tertiary consumer: 10 J

## Ecological Pyramids

### Pyramid of Numbers
- **Upright**: Grassland (many producers, few consumers)
- **Inverted**: Tree ecosystem (one tree supports many insects)

### Pyramid of Biomass
- **Upright**: Most terrestrial ecosystems
- **Inverted**: Aquatic (phytoplankton less mass than zooplankton at any time)

### Pyramid of Energy
- **Always Upright**: Energy decreases at each level
- Most reliable pyramid

## Biogeochemical Cycles

### Carbon Cycle
1. **Photosynthesis**: CO₂ → Organic carbon
2. **Respiration**: Organic carbon → CO₂
3. **Decomposition**: Dead matter → CO₂
4. **Combustion**: Fossil fuels → CO₂
5. **Ocean absorption**: Atmospheric CO₂ → Dissolved CO₂

### Nitrogen Cycle
| Process | Organism | Conversion |
|---------|----------|------------|
| Nitrogen Fixation | Rhizobium, Azotobacter | N₂ → NH₃ |
| Nitrification | Nitrosomonas, Nitrobacter | NH₃ → NO₂⁻ → NO₃⁻ |
| Assimilation | Plants | NO₃⁻ → Organic nitrogen |
| Ammonification | Decomposers | Organic N → NH₃ |
| Denitrification | Pseudomonas | NO₃⁻ → N₂ |

## Environmental Issues

### Pollution Types
1. **Air Pollution**
   - Sources: Vehicles, industries, burning
   - Effects: Respiratory diseases, acid rain
   - Pollutants: CO, SO₂, NOₓ, particulates

2. **Water Pollution**
   - Sources: Industrial effluents, sewage
   - Effects: Eutrophication, disease
   - Indicators: BOD, COD

3. **Soil Pollution**
   - Sources: Pesticides, fertilizers, waste
   - Effects: Reduced fertility, bioaccumulation

### Global Warming
- Greenhouse gases: CO₂, CH₄, N₂O, CFCs
- Effects:
  - Rising sea levels
  - Melting glaciers
  - Climate change
  - Species extinction

### Ozone Depletion
- Ozone layer in stratosphere
- CFCs release chlorine atoms
- Each Cl can destroy 100,000 O₃ molecules
- UV radiation increases
- Montreal Protocol: Phase out CFCs

### Conservation
1. **In-situ**: National parks, sanctuaries, biosphere reserves
2. **Ex-situ**: Zoos, botanical gardens, seed banks, cryopreservation
            `,
            flashcards: [
              { front: 'What is 10% Law?', back: 'Only 10% of energy transfers from one trophic level to the next. 90% is lost as heat, respiration, and waste. Given by Lindeman.' },
              { front: 'What is nitrogen fixation?', back: 'Conversion of atmospheric N₂ to ammonia (NH₃) by bacteria like Rhizobium (in legume roots) and Azotobacter (free-living).' },
              { front: 'Why is pyramid of energy always upright?', back: 'Because energy decreases at each successive trophic level due to 10% law. Cannot be inverted like biomass or numbers.' },
              { front: 'What is eutrophication?', back: 'Excessive nutrient enrichment of water bodies causing algal bloom → O₂ depletion → death of aquatic life. Caused by fertilizer runoff.' },
              { front: 'What causes ozone depletion?', back: 'CFCs (chlorofluorocarbons) release chlorine in stratosphere. One Cl atom can destroy 100,000 ozone molecules.' },
              { front: 'Difference between in-situ and ex-situ conservation?', back: 'In-situ: Conservation in natural habitat (parks, sanctuaries). Ex-situ: Conservation outside natural habitat (zoos, seed banks).' }
            ],
            mcqs: [
              { question: 'Primary consumers are:', options: ['Herbivores', 'Carnivores', 'Decomposers', 'Producers'], correctAnswer: 0 },
              { question: 'Which pyramid is always upright?', options: ['Pyramid of numbers', 'Pyramid of biomass', 'Pyramid of energy', 'All of these'], correctAnswer: 2 },
              { question: 'Nitrogen fixing bacteria in legumes:', options: ['Nitrobacter', 'Azotobacter', 'Rhizobium', 'Pseudomonas'], correctAnswer: 2 },
              { question: 'Which gas is major greenhouse gas?', options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Argon'], correctAnswer: 2 }
            ],
            reels: [
              { title: 'Trophic Levels', content: 'Producer (1) → Herbivore (2) → Carnivore (3) → Top Predator (4) | Each level = 10% energy 🌿🦗🐸🐍' },
              { title: '10% Rule Example', content: '10,000 J → 1,000 J → 100 J → 10 J | That\'s why food chains are short! ⚡' },
              { title: 'Nitrogen Cycle Steps', content: 'Fix (N₂→NH₃) → Nitrify (NH₃→NO₃⁻) → Assimilate → Ammonify → Denitrify (back to N₂) 🔄' },
              { title: 'Greenhouse Gases', content: 'CO₂ + CH₄ + N₂O + CFCs = Global Warming | Earth\'s temperature rising! 🌡️🔥' },
              { title: 'Conservation Types', content: 'In-situ: Parks, Sanctuaries (natural) | Ex-situ: Zoos, Seed banks (artificial) 🦁🌱' }
            ]
          }
        ]
      },
      {
        id: 'it',
        name: 'Information Technology',
        icon: 'Monitor',
        color: 'bg-cyan-500',
        syllabus: '1. Introduction to IT\n2. HTML & Web Design\n3. JavaScript Basics\n4. Networking & Internet\n5. Cyber Security',
        paperPattern: '### IT Paper Pattern (50 Marks Theory + 50 Marks Practical)\n\n**Theory:**\n* MCQs (10 Marks)\n* Short Answers (20 Marks)\n* Long Answers (20 Marks)\n\n**Practical:**\n* HTML/CSS (20 Marks)\n* JavaScript (20 Marks)\n* Viva (10 Marks)',
        previousPapers: ['2024 IT Paper', '2023 IT Paper'],
        chapters: [
          {
            id: 'it-ch1',
            title: 'Chapter 1: Introduction to IT',
            description: 'Basics of Information Technology and Computers',
            summary: `
# Introduction to Information Technology

## Key Concepts

### What is IT?
- Collection, storage, processing, and distribution of information
- Uses computers, networks, software, and electronic devices

### Components of Computer
1. **Hardware**: Physical components
   - Input: Keyboard, mouse, scanner
   - Output: Monitor, printer, speaker
   - Processing: CPU (Central Processing Unit)
   - Storage: HDD, SSD, RAM, ROM

2. **Software**: Programs and instructions
   - System Software: OS (Windows, Linux, macOS)
   - Application Software: MS Office, browsers, games

### Types of Computers
- **Supercomputer**: Fastest, weather forecasting (PARAM)
- **Mainframe**: Large organizations, banks
- **Minicomputer**: Medium businesses
- **Microcomputer**: Personal computers, laptops
- **Mobile**: Smartphones, tablets

### Memory Units
| Unit | Size |
|------|------|
| Bit | 0 or 1 |
| Byte | 8 bits |
| KB | 1024 bytes |
| MB | 1024 KB |
| GB | 1024 MB |
| TB | 1024 GB |
            `,
            detailedNotes: `
# Detailed Notes: Introduction to IT

## Computer System Components

### Central Processing Unit (CPU)
The "brain" of computer, consists of:
1. **ALU (Arithmetic Logic Unit)**: Mathematical & logical operations
2. **CU (Control Unit)**: Controls all operations, fetches instructions
3. **Registers**: Temporary storage in CPU

### Memory Types

#### Primary Memory
| Type | Features |
|------|----------|
| RAM (Random Access Memory) | Volatile, temporary, fast |
| ROM (Read Only Memory) | Non-volatile, permanent, firmware |
| Cache | Very fast, between CPU and RAM |

#### Secondary Memory
- Hard Disk Drive (HDD): Magnetic storage
- Solid State Drive (SSD): Flash memory, faster
- Optical: CD, DVD, Blu-ray
- Flash: Pen drive, SD card

### Input Devices
1. **Keyboard**: Text input, QWERTY layout
2. **Mouse**: Pointing device, clicking
3. **Scanner**: Digitize documents
4. **Microphone**: Audio input
5. **Webcam**: Video input
6. **Barcode Reader**: Reads barcodes
7. **Touchscreen**: Input + Output

### Output Devices
1. **Monitor**: Visual display (LCD, LED, OLED)
2. **Printer**: Hard copy (Inkjet, Laser, Dot matrix)
3. **Speaker**: Audio output
4. **Projector**: Large display

## Software Classification

### System Software
- **Operating System**: Interface between hardware and user
  - Windows, macOS, Linux, Android, iOS
- **Device Drivers**: Hardware-specific programs
- **Utilities**: Antivirus, disk cleanup

### Application Software
- **Productivity**: MS Office, LibreOffice
- **Browsers**: Chrome, Firefox, Edge
- **Media**: VLC, Photoshop
- **Communication**: Email, Zoom

### Programming Languages
- **Low Level**: Machine language, Assembly
- **High Level**: C, C++, Java, Python

## Number Systems
| System | Base | Digits |
|--------|------|--------|
| Binary | 2 | 0, 1 |
| Octal | 8 | 0-7 |
| Decimal | 10 | 0-9 |
| Hexadecimal | 16 | 0-9, A-F |

### Conversions
- Binary to Decimal: Multiply by powers of 2
- Decimal to Binary: Divide by 2, take remainders
            `,
            flashcards: [
              { front: 'What are the main components of CPU?', back: 'ALU (Arithmetic Logic Unit) - does calculations, CU (Control Unit) - controls operations, Registers - temporary storage.' },
              { front: 'Difference between RAM and ROM?', back: 'RAM: Volatile, temporary, read/write, faster. ROM: Non-volatile, permanent, read-only, stores firmware.' },
              { front: 'What is 1 KB equal to?', back: '1 KB = 1024 bytes. Memory hierarchy: Bit < Byte < KB < MB < GB < TB' },
              { front: 'What is an Operating System?', back: 'System software that manages hardware and provides interface for users. Examples: Windows, macOS, Linux, Android.' },
              { front: 'Name types of printers.', back: 'Impact: Dot matrix. Non-impact: Inkjet (color, home use), Laser (fast, office use), Thermal (receipts).' }
            ],
            mcqs: [
              { question: 'Brain of computer is:', options: ['RAM', 'ROM', 'CPU', 'Hard Disk'], correctAnswer: 2 },
              { question: '1 GB equals:', options: ['1024 MB', '1024 KB', '1024 TB', '1000 MB'], correctAnswer: 0 },
              { question: 'Which is volatile memory?', options: ['ROM', 'Hard Disk', 'RAM', 'SSD'], correctAnswer: 2 },
              { question: 'PARAM is a:', options: ['Mainframe', 'Supercomputer', 'Minicomputer', 'Microcomputer'], correctAnswer: 1 }
            ],
            reels: [
              { title: 'CPU Components', content: 'ALU (Math) + CU (Control) + Registers (Storage) = CPU 🧠' },
              { title: 'Memory Hierarchy', content: 'Bit → Byte → KB → MB → GB → TB | Each = 1024× previous 📊' },
              { title: 'RAM vs ROM', content: 'RAM: Volatile, Temporary 💨 | ROM: Permanent, Firmware 💾' },
              { title: 'Computer Types', content: 'Super > Mainframe > Mini > Micro > Mobile | Speed & Size decreases 🖥️📱' }
            ]
          },
          {
            id: 'it-ch2',
            title: 'Chapter 2: HTML & Web Design',
            description: 'Creating web pages with HTML and CSS',
            summary: `
# HTML & Web Design

## Key Concepts

### What is HTML?
- HyperText Markup Language
- Standard language for creating web pages
- Uses tags enclosed in < >

### Basic HTML Structure
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>
  Content here
</body>
</html>
\`\`\`

### Common HTML Tags
| Tag | Purpose |
|-----|---------|
| \`<h1>\` to \`<h6>\` | Headings |
| \`<p>\` | Paragraph |
| \`<a href="">\` | Hyperlink |
| \`<img src="">\` | Image |
| \`<ul>, <ol>, <li>\` | Lists |
| \`<table>, <tr>, <td>\` | Tables |
| \`<form>\` | User input forms |
| \`<div>, <span>\` | Containers |

### CSS (Cascading Style Sheets)
- Styles the HTML elements
- Colors, fonts, layouts
- Can be inline, internal, or external
            `,
            detailedNotes: `
# Detailed Notes: HTML & Web Design

## HTML Document Structure

### DOCTYPE Declaration
\`<!DOCTYPE html>\` - Tells browser it's HTML5

### Head Section
- \`<title>\`: Browser tab title
- \`<meta>\`: Metadata (charset, viewport)
- \`<link>\`: External CSS
- \`<style>\`: Internal CSS
- \`<script>\`: JavaScript

### Body Section
Contains visible content

## HTML Tags in Detail

### Text Formatting
| Tag | Effect |
|-----|--------|
| \`<b>\` or \`<strong>\` | Bold |
| \`<i>\` or \`<em>\` | Italic |
| \`<u>\` | Underline |
| \`<br>\` | Line break |
| \`<hr>\` | Horizontal line |

### Links and Images
\`\`\`html
<a href="https://example.com" target="_blank">Link Text</a>
<img src="image.jpg" alt="Description" width="200">
\`\`\`

### Lists
**Unordered (bullets):**
\`\`\`html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
\`\`\`

**Ordered (numbers):**
\`\`\`html
<ol>
  <li>First</li>
  <li>Second</li>
</ol>
\`\`\`

### Tables
\`\`\`html
<table border="1">
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>
\`\`\`

### Forms
\`\`\`html
<form action="submit.php" method="POST">
  <input type="text" name="username" placeholder="Name">
  <input type="password" name="pass">
  <input type="email" name="email">
  <input type="submit" value="Submit">
</form>
\`\`\`

## CSS Basics

### Ways to Apply CSS
1. **Inline**: \`<p style="color: red;">\`
2. **Internal**: \`<style>\` in head
3. **External**: \`<link rel="stylesheet" href="style.css">\`

### CSS Syntax
\`\`\`css
selector {
  property: value;
}
\`\`\`

### Common CSS Properties
| Property | Values |
|----------|--------|
| color | red, #FF0000, rgb(255,0,0) |
| background-color | color values |
| font-size | 16px, 1em, 100% |
| font-family | Arial, sans-serif |
| margin | 10px (outside space) |
| padding | 10px (inside space) |
| border | 1px solid black |

### CSS Selectors
- Element: \`p { }\`
- Class: \`.classname { }\`
- ID: \`#idname { }\`
- Universal: \`* { }\`
            `,
            flashcards: [
              { front: 'What does HTML stand for?', back: 'HyperText Markup Language - standard language for creating web pages using tags.' },
              { front: 'What is the basic structure of HTML document?', back: '<!DOCTYPE html>, <html>, <head> (title, meta), <body> (content), </html>' },
              { front: 'How to create a hyperlink in HTML?', back: '<a href="URL">Link Text</a>. Use target="_blank" to open in new tab.' },
              { front: 'What is CSS used for?', back: 'Cascading Style Sheets - used to style HTML elements (colors, fonts, layouts). Can be inline, internal, or external.' },
              { front: 'Difference between <div> and <span>?', back: '<div> is block-level (takes full width). <span> is inline (takes only needed width). Both are containers.' }
            ],
            mcqs: [
              { question: 'HTML stands for:', options: ['Hyper Text Making Language', 'HyperText Markup Language', 'High Text Markup Language', 'Hyper Tool Markup Language'], correctAnswer: 1 },
              { question: 'Which tag creates largest heading?', options: ['<h6>', '<h1>', '<heading>', '<head>'], correctAnswer: 1 },
              { question: 'CSS stands for:', options: ['Cascading Style Sheets', 'Computer Style Sheets', 'Creative Style System', 'Colorful Style Sheets'], correctAnswer: 0 },
              { question: 'Which is correct CSS syntax?', options: ['body:color=black', '{body;color:black}', 'body {color: black;}', 'body = color: black'], correctAnswer: 2 }
            ],
            reels: [
              { title: 'HTML Structure', content: '<!DOCTYPE> → <html> → <head> + <body> → </html> 📄' },
              { title: 'Common Tags', content: '<h1> Heading | <p> Paragraph | <a> Link | <img> Image | <div> Container 🏷️' },
              { title: 'CSS Ways', content: 'Inline: style="" | Internal: <style> | External: .css file 🎨' },
              { title: 'CSS Box Model', content: 'Content → Padding → Border → Margin (inside to outside) 📦' }
            ]
          },
          {
            id: 'it-ch3',
            title: 'Chapter 3: JavaScript Basics',
            description: 'Introduction to JavaScript programming',
            summary: `
# JavaScript Basics

## Key Concepts

### What is JavaScript?
- Client-side scripting language
- Makes web pages interactive
- Runs in browser

### Adding JavaScript
1. **Inline**: \`onclick="alert('Hi')"\`
2. **Internal**: \`<script>\` tag in HTML
3. **External**: \`<script src="file.js">\`

### Variables
\`\`\`javascript
var name = "John";    // old way
let age = 25;         // block-scoped
const PI = 3.14;      // constant
\`\`\`

### Data Types
- String: \`"Hello"\`
- Number: \`42, 3.14\`
- Boolean: \`true, false\`
- Array: \`[1, 2, 3]\`
- Object: \`{name: "John", age: 25}\`

### Operators
- Arithmetic: \`+, -, *, /, %\`
- Comparison: \`==, ===, !=, <, >\`
- Logical: \`&&, ||, !\`

### Functions
\`\`\`javascript
function greet(name) {
  return "Hello " + name;
}
\`\`\`
            `,
            detailedNotes: `
# Detailed Notes: JavaScript Basics

## Introduction to JavaScript

### Features
- Interpreted language (no compilation)
- Case-sensitive
- Dynamic typing
- Event-driven programming
- Object-based

### Adding to HTML
\`\`\`html
<!-- Internal -->
<script>
  alert("Hello World!");
</script>

<!-- External -->
<script src="script.js"></script>
\`\`\`

## Variables and Data Types

### Variable Declaration
| Keyword | Scope | Reassign | Redeclare |
|---------|-------|----------|-----------|
| var | Function | Yes | Yes |
| let | Block | Yes | No |
| const | Block | No | No |

### Data Types
**Primitive:**
- String: \`"Hello"\` or \`'Hello'\`
- Number: \`10\`, \`3.14\`, \`NaN\`, \`Infinity\`
- Boolean: \`true\`, \`false\`
- Undefined: Variable declared but not assigned
- Null: Intentionally empty

**Non-Primitive:**
- Array: \`let arr = [1, 2, 3];\`
- Object: \`let obj = {key: value};\`

## Operators

### Arithmetic Operators
| Operator | Operation |
|----------|-----------|
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| % | Modulus (remainder) |
| ++ | Increment |
| -- | Decrement |

### Comparison Operators
| Operator | Meaning |
|----------|---------|
| == | Equal (value) |
| === | Strict equal (value + type) |
| != | Not equal |
| !== | Strict not equal |
| > < >= <= | Comparisons |

## Control Structures

### If-Else
\`\`\`javascript
if (condition) {
  // code
} else if (condition2) {
  // code
} else {
  // code
}
\`\`\`

### Switch
\`\`\`javascript
switch (value) {
  case 1: break;
  case 2: break;
  default: break;
}
\`\`\`

### Loops
\`\`\`javascript
// For loop
for (let i = 0; i < 5; i++) { }

// While loop
while (condition) { }

// Do-while
do { } while (condition);
\`\`\`

## Functions

### Function Declaration
\`\`\`javascript
function add(a, b) {
  return a + b;
}
\`\`\`

### Arrow Function (ES6)
\`\`\`javascript
const add = (a, b) => a + b;
\`\`\`

## DOM Manipulation

### Selecting Elements
\`\`\`javascript
document.getElementById("id");
document.getElementsByClassName("class");
document.querySelector(".class");
\`\`\`

### Changing Content
\`\`\`javascript
element.innerHTML = "New content";
element.style.color = "red";
\`\`\`

### Events
\`\`\`javascript
element.onclick = function() { };
element.addEventListener("click", function);
\`\`\`

Common events: click, mouseover, keydown, submit, load
            `,
            flashcards: [
              { front: 'What is JavaScript used for?', back: 'Client-side scripting language that makes web pages interactive. Runs in browser, handles events, manipulates DOM.' },
              { front: 'Difference between var, let, and const?', back: 'var: function-scoped, can redeclare. let: block-scoped, can reassign. const: block-scoped, cannot reassign (constant).' },
              { front: 'Difference between == and ===?', back: '== checks value equality (with type coercion). === checks value AND type equality (strict comparison). Use === preferred.' },
              { front: 'What is DOM?', back: 'Document Object Model - tree representation of HTML document. JavaScript uses it to access and manipulate page elements.' },
              { front: 'How to declare a function in JavaScript?', back: 'function name(params) { return value; } or Arrow: const name = (params) => value;' }
            ],
            mcqs: [
              { question: 'JavaScript is a:', options: ['Compiled language', 'Markup language', 'Scripting language', 'Database language'], correctAnswer: 2 },
              { question: 'Which declares a constant?', options: ['var', 'let', 'const', 'constant'], correctAnswer: 2 },
              { question: 'Correct way to write array?', options: ['var a = (1,2,3)', 'var a = [1,2,3]', 'var a = {1,2,3}', 'var a = "1,2,3"'], correctAnswer: 1 },
              { question: 'DOM stands for:', options: ['Document Object Model', 'Data Object Model', 'Document Order Model', 'Digital Object Module'], correctAnswer: 0 }
            ],
            reels: [
              { title: 'JS Data Types', content: 'String | Number | Boolean | Array | Object | Null | Undefined 📝' },
              { title: 'var vs let vs const', content: 'var: old, function scope | let: new, block scope | const: constant, no change 🔒' },
              { title: '== vs ===', content: '== Value only (5 == "5" ✓) | === Value + Type (5 === "5" ✗) 🎯' },
              { title: 'DOM Methods', content: 'getElementById | querySelector | innerHTML | addEventListener 🌳' }
            ]
          },
          {
            id: 'it-ch4',
            title: 'Chapter 4: Networking & Internet',
            description: 'Computer networks and internet concepts',
            summary: `
# Networking & Internet

## Key Concepts

### What is a Network?
- Connected computers sharing resources
- LAN, WAN, MAN, PAN

### Network Types
| Type | Range | Example |
|------|-------|---------|
| PAN | Few meters | Bluetooth |
| LAN | Building | Office network |
| MAN | City | Cable TV network |
| WAN | Country/World | Internet |

### Network Topologies
- **Bus**: Single cable, all connected
- **Star**: Central hub/switch
- **Ring**: Circular connection
- **Mesh**: Every device connected

### Internet Basics
- Global network of networks
- Uses TCP/IP protocol
- Services: WWW, Email, FTP

### IP Address
- Unique address for each device
- IPv4: 192.168.1.1 (32-bit)
- IPv6: 128-bit (newer)

### URL Components
\`https://www.example.com/page.html\`
- Protocol: https
- Domain: www.example.com
- Path: /page.html
            `,
            detailedNotes: `
# Detailed Notes: Networking & Internet

## Computer Networks

### Definition
Collection of interconnected computers and devices that share resources and communicate with each other.

### Advantages
- Resource sharing (printers, files)
- Communication (email, chat)
- Centralized data management
- Cost effective

### Network Types

| Type | Full Form | Range | Speed | Example |
|------|-----------|-------|-------|---------|
| PAN | Personal Area Network | ~10m | Low | Bluetooth devices |
| LAN | Local Area Network | Building | High | Office, school |
| MAN | Metropolitan Area Network | City | Medium | Cable TV |
| WAN | Wide Area Network | Global | Variable | Internet |

## Network Topologies

### Bus Topology
- Single backbone cable
- All devices connected to it
- Cheap but single point of failure
- Collision issues

### Star Topology
- Central switch/hub
- All devices connect to center
- Easy to add devices
- If center fails, all fail

### Ring Topology
- Circular arrangement
- Data travels in one direction
- Token passing method
- Difficult to troubleshoot

### Mesh Topology
- Every device connected to every other
- Highly reliable, redundant
- Expensive, complex

## Internet Fundamentals

### What is Internet?
- Network of networks
- Started as ARPANET (1969)
- Uses TCP/IP protocol

### Key Terms
- **WWW**: World Wide Web, collection of websites
- **HTTP/HTTPS**: Protocol for web pages (S = Secure)
- **FTP**: File Transfer Protocol
- **SMTP**: Email sending protocol
- **DNS**: Domain Name System (converts URL to IP)

### IP Addressing

#### IPv4
- 32-bit address
- Format: xxx.xxx.xxx.xxx
- Example: 192.168.1.1
- Classes: A, B, C, D, E

#### IPv6
- 128-bit address
- Hexadecimal format
- More addresses available

### URL Structure
\`\`\`
https://www.example.com:443/folder/page.html?id=1#section
|____| |_______________|___| |________________| |___| |_____|
Protocol    Domain      Port      Path         Query Fragment
\`\`\`

## Network Devices

| Device | Function |
|--------|----------|
| Hub | Broadcasts to all ports |
| Switch | Sends to specific port (MAC) |
| Router | Connects different networks (IP) |
| Modem | Modulator-Demodulator (analog-digital) |
| Gateway | Connects different protocols |
| Firewall | Security, filters traffic |

## Network Models

### OSI Model (7 Layers)
1. Physical
2. Data Link
3. Network
4. Transport
5. Session
6. Presentation
7. Application

**Mnemonic**: Please Do Not Throw Sausage Pizza Away

### TCP/IP Model (4 Layers)
1. Network Interface
2. Internet
3. Transport
4. Application
            `,
            flashcards: [
              { front: 'What is LAN?', back: 'Local Area Network - network within a building or small area. High speed, private ownership. Example: Office or school network.' },
              { front: 'What is an IP address?', back: 'Internet Protocol address - unique numerical identifier for each device on network. IPv4: 32-bit (e.g., 192.168.1.1), IPv6: 128-bit.' },
              { front: 'What is DNS?', back: 'Domain Name System - converts human-readable domain names (google.com) to IP addresses. Like phonebook of internet.' },
              { front: 'Difference between Hub and Switch?', back: 'Hub: Broadcasts data to all ports (dumb). Switch: Sends data only to intended port using MAC address (smart, efficient).' },
              { front: 'What are the 7 layers of OSI model?', back: 'Physical, Data Link, Network, Transport, Session, Presentation, Application. Mnemonic: Please Do Not Throw Sausage Pizza Away.' }
            ],
            mcqs: [
              { question: 'LAN stands for:', options: ['Local Access Network', 'Local Area Network', 'Large Area Network', 'Long Area Network'], correctAnswer: 1 },
              { question: 'Which topology has central hub?', options: ['Bus', 'Ring', 'Star', 'Mesh'], correctAnswer: 2 },
              { question: 'IP address is:', options: ['8-bit', '16-bit', '32-bit (IPv4)', '64-bit'], correctAnswer: 2 },
              { question: 'DNS converts:', options: ['IP to MAC', 'Domain to IP', 'MAC to IP', 'IP to Domain'], correctAnswer: 1 }
            ],
            reels: [
              { title: 'Network Types', content: 'PAN (Bluetooth) < LAN (Building) < MAN (City) < WAN (World) 🌐' },
              { title: 'Star Topology', content: 'All connect to CENTER | Easy to manage | Center fails = All fail ⭐' },
              { title: 'OSI Layers', content: 'Please Do Not Throw Sausage Pizza Away | 7 layers bottom to top 📚' },
              { title: 'Hub vs Switch', content: 'Hub: Broadcast to ALL 📢 | Switch: Send to SPECIFIC port 🎯' }
            ]
          },
          {
            id: 'it-ch5',
            title: 'Chapter 5: Cyber Security',
            description: 'Online threats and protection methods',
            summary: `
# Cyber Security

## Key Concepts

### What is Cyber Security?
- Protecting computers, networks, data from attacks
- Also called Information Security

### Types of Cyber Threats
1. **Virus**: Self-replicating malicious code
2. **Worm**: Spreads without host file
3. **Trojan**: Disguised as legitimate software
4. **Ransomware**: Encrypts data, demands ransom
5. **Spyware**: Secretly monitors activity
6. **Phishing**: Fake emails/websites to steal data

### Protection Methods
- Antivirus software
- Firewall
- Strong passwords
- Regular updates
- Backup data
- Be cautious with links/attachments

### Password Best Practices
- Minimum 8 characters
- Mix of uppercase, lowercase, numbers, symbols
- Don't use personal info
- Change regularly
- Use different passwords

### Safe Internet Practices
- Verify website authenticity (https, padlock)
- Don't share personal info
- Avoid public WiFi for banking
- Log out after use
            `,
            detailedNotes: `
# Detailed Notes: Cyber Security

## Introduction

### Definition
Cyber security is the practice of protecting systems, networks, and programs from digital attacks.

### Goals (CIA Triad)
1. **Confidentiality**: Data accessible only to authorized
2. **Integrity**: Data not altered without permission
3. **Availability**: Systems accessible when needed

## Types of Malware

| Type | Description | Spread |
|------|-------------|--------|
| Virus | Attaches to files, replicates | User action needed |
| Worm | Self-replicates, spreads alone | Network |
| Trojan | Disguised as useful software | Downloads |
| Ransomware | Encrypts files, demands payment | Email, downloads |
| Spyware | Secretly monitors user | Bundled software |
| Adware | Shows unwanted ads | Free software |
| Rootkit | Hides in system, hard to detect | Various |

## Cyber Attacks

### Phishing
- Fake emails/websites mimicking legitimate ones
- Goal: Steal login credentials, personal info
- Prevention: Check URL, don't click suspicious links

### Social Engineering
- Manipulating people to reveal information
- Pretexting, baiting, quid pro quo
- Prevention: Verify identity, be cautious

### DoS/DDoS Attack
- Denial of Service / Distributed DoS
- Overwhelms system with requests
- Makes service unavailable

### Man-in-the-Middle
- Attacker intercepts communication
- Can read/modify messages
- Prevention: Use HTTPS, VPN

### SQL Injection
- Inserting malicious SQL code
- Targets databases through web forms
- Prevention: Input validation

## Protection Measures

### Technical Measures
1. **Antivirus**: Detects and removes malware
2. **Firewall**: Filters network traffic
3. **Encryption**: Scrambles data
4. **Two-Factor Authentication**: Extra security layer
5. **VPN**: Secure connection over internet
6. **Regular Updates**: Patch vulnerabilities

### Password Security
**Strong Password Rules:**
- Minimum 12 characters (8 minimum)
- Uppercase + lowercase letters
- Numbers and special characters
- No dictionary words or personal info
- Unique for each account

**Password Manager:**
- Stores passwords securely
- Generates strong passwords
- Examples: LastPass, 1Password

### Safe Browsing
- Check for HTTPS (padlock icon)
- Verify website URL
- Avoid clicking unknown links
- Don't download from untrusted sources
- Be careful on public WiFi

## Cyber Laws in India

### IT Act 2000
- Legal recognition of electronic documents
- Digital signatures
- Cyber crimes and penalties

### Common Cyber Crimes
| Section | Crime |
|---------|-------|
| 43 | Unauthorized access, damage |
| 66 | Computer hacking |
| 66A | Offensive messages (struck down) |
| 66B | Stolen computer/device |
| 66C | Identity theft |
| 66D | Cheating by personation |
| 66E | Violation of privacy |
| 67 | Publishing obscene content |

### Reporting Cyber Crime
- Cyber Crime Cell
- www.cybercrime.gov.in
- Helpline: 1930
            `,
            flashcards: [
              { front: 'What is the CIA triad in cyber security?', back: 'Confidentiality (only authorized access), Integrity (data not altered), Availability (systems accessible when needed).' },
              { front: 'Difference between virus and worm?', back: 'Virus: Needs host file, spreads by user action. Worm: No host needed, self-replicates and spreads automatically through network.' },
              { front: 'What is phishing?', back: 'Fraudulent attempt to obtain sensitive information by disguising as trustworthy entity through fake emails or websites.' },
              { front: 'What is ransomware?', back: 'Malware that encrypts victim\'s files and demands ransom payment for decryption key. Prevention: Backup, don\'t click unknown links.' },
              { front: 'What is two-factor authentication?', back: 'Security method requiring two types of verification: something you know (password) + something you have (OTP on phone).' }
            ],
            mcqs: [
              { question: 'Which spreads without user action?', options: ['Virus', 'Worm', 'Trojan', 'Adware'], correctAnswer: 1 },
              { question: 'CIA in security stands for:', options: ['Computer Internet Access', 'Confidentiality Integrity Availability', 'Central Intelligence Agency', 'Computer Information Architecture'], correctAnswer: 1 },
              { question: 'Phishing attacks through:', options: ['Direct hacking', 'Fake emails/websites', 'Physical access', 'USB drive'], correctAnswer: 1 },
              { question: 'IT Act in India was passed in:', options: ['1995', '2000', '2005', '2008'], correctAnswer: 1 }
            ],
            reels: [
              { title: 'CIA Triad', content: 'Confidentiality + Integrity + Availability = Security Goals 🔒' },
              { title: 'Virus vs Worm', content: 'Virus: Needs host file 📎 | Worm: Spreads alone 🐛' },
              { title: 'Strong Password', content: '12+ chars + Upper + Lower + Number + Symbol = Strong 💪🔐' },
              { title: 'Phishing Signs', content: 'Urgent! + Spelling errors + Suspicious link + Too good = SCAM ⚠️' }
            ]
          }
        ]
      },
      ECONOMICS_SUBJECT
    ] 
  }
};
