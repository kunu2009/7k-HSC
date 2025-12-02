import { Subject } from '../types';
import { getReelColor } from './helpers';
export const ECONOMICS_SUBJECT: Subject = {
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
