import { Stream, StreamData } from './types';

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
        previousPapers: [
          { year: '2023', title: 'HSC Board Exam March 2023', link: '#' },
          { year: '2022', title: 'HSC Board Exam March 2022', link: '#' },
          { year: '2021', title: 'HSC Board Exam Sept 2021', link: '#' }
        ],
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
            flashcards: [
              { id: 'f1', front: 'Origin of word "Micro"', back: 'Greek word "Mikros" meaning small part.' },
              { id: 'f2', front: 'Father of Economics', back: 'Adam Smith' },
              { id: 'f3', front: 'Coined terms Micro & Macro', back: 'Ragnar Frisch (1933)' },
              { id: 'f4', front: 'Ceteris Paribus', back: 'Assumption: "Other things remaining constant". Used in Micro Economics.' },
              { id: 'f5', front: 'Slicing Method', back: 'Used in Micro Economics to split the economy into small units for detailed study.' },
              { id: 'f6', front: 'Lumping Method', back: 'Used in Macro Economics to study the economy as a whole.' },
              { id: 'f7', front: 'Price Theory', back: 'Another name for Micro Economics.' },
              { id: 'f8', front: 'Income Theory', back: 'Another name for Macro Economics.' }
            ],
            mcqs: [
              {
                id: 'q1',
                question: 'Micro Economics is also known as ______.',
                options: ['Income Theory', 'Price Theory', 'Growth Theory', 'Employment Theory'],
                correctIndex: 1,
                explanation: 'Micro economics is called Price Theory because it deals with the determination of prices of goods and services.'
              },
              {
                id: 'q2',
                question: 'The term "Micro" is derived from the Greek word ______.',
                options: ['Makros', 'Mikros', 'Macros', 'Maikros'],
                correctIndex: 1,
                explanation: 'Mikros means small.'
              },
              {
                id: 'q3',
                question: 'Macro Economics is the study of ______.',
                options: ['Individual units', 'Aggregates', 'Particular firms', 'Single prices'],
                correctIndex: 1,
                explanation: 'Macro economics studies the economy as a whole (Aggregates).'
              },
               {
                id: 'q4',
                question: 'Who coined the terms Micro and Macro Economics?',
                options: ['Adam Smith', 'Alfred Marshall', 'Ragnar Frisch', 'J.M. Keynes'],
                correctIndex: 2,
                explanation: 'Ragnar Frisch of Oslo University coined them in 1933.'
              },
              {
                id: 'q5',
                question: 'Which method is adopted in Micro Economics?',
                options: ['Lumping Method', 'Aggregative Method', 'Slicing Method', 'Inclusive Method'],
                correctIndex: 2,
                explanation: 'It slices the economy into small units for detailed study.'
              }
            ],
            reels: [
              {
                id: 'r1',
                title: 'Micro vs Macro',
                content: 'Micro is like looking at a single TREE. \n\nMacro is like looking at the entire FOREST.',
                color: 'bg-gradient-to-br from-indigo-500 to-blue-600'
              },
              {
                id: 'r2',
                title: 'Key Year: 1933',
                content: 'Ragnar Frisch coined the terms "Micro" and "Macro" economics in this year.',
                color: 'bg-gradient-to-br from-purple-500 to-pink-600'
              },
              {
                id: 'r3',
                title: 'Features of Micro',
                content: '1. Study of Individual Units\n2. Price Theory\n3. Partial Equilibrium\n4. Slicing Method',
                color: 'bg-gradient-to-br from-orange-400 to-red-500'
              },
              {
                id: 'r4',
                title: 'Ceteris Paribus',
                content: 'Means "Other things remaining constant".\n\nThe most important assumption in Micro Economics!',
                color: 'bg-gradient-to-br from-emerald-400 to-teal-600'
              },
              {
                id: 'r5',
                title: 'Scope of Macro',
                content: '1. Income & Employment\n2. General Price Level\n3. Growth & Development',
                color: 'bg-gradient-to-br from-blue-400 to-cyan-500'
              }
            ]
          },
          {
            id: 'eco-ch2',
            title: '2. Utility Analysis',
            description: 'Why do we buy things? Because they have Utility. Learn about TU, MU, and the Law of DMU.',
            summary: `**Utility**: Want satisfying power of a commodity.
**Features**: Subjective, Relative, Ethically neutral, Different from pleasure/usefulness.

**Types of Utility**:
1. Form Utility (Wood -> Chair)
2. Place Utility (Transport)
3. Service Utility (Doctor)
4. Knowledge Utility (Mobile manual)

**Law of Diminishing Marginal Utility (DMU)**:
"Other things remaining constant, the additional benefit which a person derives from a given increase in his stock of a thing, diminishes with every increase in the stock that he already has." (Alfred Marshall).`,
            detailedNotes: `### 1. Concept of Utility
Utility is the capacity of a commodity to satisfy human wants.

### 2. Features of Utility
1.  **Relative Concept:** Changes with time and place. (Woolen clothes in winter vs summer).
2.  **Subjective Concept:** Psychological concept. Differs from person to person.
3.  **Ethically Neutral:** Gun has utility for a soldier and a criminal. Utility has no morality.
4.  **Utility differs from Usefulness:** Liquor has utility for an addict but no usefulness (harmful).
5.  **Utility differs from Pleasure:** Injection has utility (cures illness) but gives no pleasure.
6.  **Utility differs from Satisfaction:** Utility is expected satisfaction (pre-consumption), Satisfaction is realized (post-consumption).

### 3. Concepts of Utility
1.  **Total Utility (TU):** Sum of utilities derived from consuming all units. TU tends to increase at a diminishing rate.
2.  **Marginal Utility (MU):** Additional utility derived from the last unit consumed.

### 4. Law of Diminishing Marginal Utility (DMU)
Proposed by Gossen, detailed by **Alfred Marshall**.
**Statement:** As a consumer consumes more and more units of the same commodity, the marginal utility of the successive units goes on diminishing.

**Assumptions:**
1.  Rationality (Consumer is normal).
2.  Cardinal Measurement (Utility can be measured in numbers).
3.  Homogeneity (All units are same).
4.  Continuity (No time gap).
5.  Constancy (Income, taste constant).

**Exceptions:**
1.  Hobbies (Collecting stamps).
2.  Miser (Money).
3.  Addiction (Alcohol).
4.  Power.
5.  Money.`,
            flashcards: [
              { id: 'u1', front: 'Definition of Utility', back: 'Want satisfying power of a commodity.' },
              { id: 'u2', front: 'Form Utility', back: 'Created by changing the shape or structure of existing material. (e.g., Clay to Pot)' },
              { id: 'u3', front: 'Place Utility', back: 'Created by changing the place of utilization. (e.g., Woolen clothes: Kashmir to Mumbai)' },
              { id: 'u4', front: 'Point of Satiety', back: 'The point where TU is Maximum and MU is Zero.' },
              { id: 'u5', front: 'Relationship: TU falls', back: 'When MU becomes Negative.' }
            ],
            mcqs: [
              {
                id: 'uq1',
                question: 'When MU is zero, TU is ______.',
                options: ['Minimum', 'Maximum', 'Zero', 'Negative'],
                correctIndex: 1,
                explanation: 'This is called the Point of Satiety. Maximum satisfaction is reached.'
              },
              {
                id: 'uq2',
                question: 'Utility is ______ neutral.',
                options: ['Socially', 'Politically', 'Ethically', 'Economically'],
                correctIndex: 2,
                explanation: 'Utility does not distinguish between good or bad wants (e.g., Knife for cutting fruit vs harming someone).'
              },
              {
                id: 'uq3',
                question: 'Blood bank is an example of ______ utility.',
                options: ['Place', 'Time', 'Form', 'Knowledge'],
                correctIndex: 1,
                explanation: 'Time utility involves storing goods and using them at a time of scarcity.'
              }
            ],
            reels: [
              { id: 'ur1', title: 'Utility != Usefulness', content: 'Alcohol has Utility for an addict.\n\nBut it has NO Usefulness (it harms health).', color: 'bg-rose-500' },
              { id: 'ur2', title: 'TU vs MU', content: 'TU = Sum of all satisfaction.\nMU = Satisfaction from ONE extra unit.', color: 'bg-amber-500' },
              { id: 'ur3', title: 'Point of Satiety', content: 'When you are fully satisfied.\n\nMU = 0\nTU = Maximum', color: 'bg-green-500' }
            ]
          },
          { 
            id: 'eco-ch3a', 
            title: '3A. Demand Analysis', 
            description: 'Demand = Desire + Ability + Willingness. The Law of Demand explains consumer behavior.', 
            summary: `**Concept of Demand**:
Desire is just a wish. Demand is Desire backed by Ability to pay and Willingness to spend.

**Law of Demand**:
Proposed by Dr. Alfred Marshall in his book "Principles of Economics" (1890).
Statement: "Other things being equal, higher the price of a commodity, smaller is the quantity demanded and lower the price of a commodity, larger is the quantity demanded."

**Relationship**: Inverse relationship between Price and Demand.
**Curve**: Downward sloping from left to right.`,
            detailedNotes: `### 1. Definition of Demand
According to Benham, "Demand for anything, at a given price is the amount of it, which will be bought per unit of time at that price."

### 2. Types of Demand
1. **Direct Demand:** Demand for consumer goods (Food, Cloth).
2. **Indirect (Derived) Demand:** Demand for factors of production (Land, Labour).
3. **Complementary (Joint) Demand:** Two goods demanded together (Car & Fuel).
4. **Composite Demand:** One commodity, several uses (Electricity).
5. **Competitive Demand:** Substitutes (Tea vs Coffee).

### 3. Law of Demand
*   **Introduction:** Fundamental law in consumption. Alfred Marshall, 1890.
*   **Statement:** Ceteris paribus, Price UP -> Demand DOWN; Price DOWN -> Demand UP.
*   **Symbolic:** Dx = f(Px)
*   **Demand Schedule:** Tabular representation showing price and quantity.
*   **Demand Curve:** Graphical representation. Slopes downward from left to right (Negative slope).

### 4. Exceptions to Law of Demand (Paradoxes)
1.  **Giffen's Paradox:** Inferior goods (Bread vs Meat in Victorian England). Sir Robert Giffen observed that when price of bread fell, people bought LESS bread and more meat.
2.  **Prestige Goods:** Diamonds, luxury cars. Rich people buy more when price is high (Veblen Effect).
3.  **Speculation:** If people expect prices to rise further, they buy more even at high price.
4.  **Price Illusion:** High price = High quality mindset.`,
            flashcards: [
              { id: 'd1', front: 'Demand Formula', back: 'Desire + Ability to Pay + Willingness to Spend' },
              { id: 'd2', front: 'Slope of Demand Curve', back: 'Negative Slope (Downward from left to right)' },
              { id: 'd3', front: 'Giffen Goods', back: 'Inferior quality goods which defy the Law of Demand.' },
              { id: 'd4', front: 'Indirect Demand', back: 'Demand for factors of production (e.g., Labour for building a house).' },
              { id: 'd5', front: 'Composite Demand', back: 'Single commodity used for multiple purposes (e.g., Milk for tea, curd, cheese).' }
            ],
            mcqs: [
              {
                id: 'dq1',
                question: 'Demand curve slopes ______ from left to right.',
                options: ['Upward', 'Downward', 'Horizontal', 'Vertical'],
                correctIndex: 1,
                explanation: 'Due to inverse relationship between price and quantity demanded.'
              },
              {
                id: 'dq2',
                question: 'Demand for electricity is ______ demand.',
                options: ['Joint', 'Composite', 'Direct', 'Competitive'],
                correctIndex: 1,
                explanation: 'Composite demand means one commodity has several uses (Lighting, Heating, AC).'
              },
              {
                id: 'dq3',
                question: 'Giffens goods are ______ goods.',
                options: ['Superior', 'Luxury', 'Inferior', 'Normal'],
                correctIndex: 2,
                explanation: 'Named after Sir Robert Giffen, referring to low quality goods.'
              }
            ],
            reels: [
              { id: 'dr1', title: 'Desire vs Demand', content: 'Desire: I want a BMW.\nDemand: I want a BMW + I have money + I am ready to pay.', color: 'bg-indigo-500' },
              { id: 'dr2', title: 'Complementary', content: 'Tea and Sugar.\nCar and Petrol.\n\nThey go together!', color: 'bg-pink-500' },
              { id: 'dr3', title: 'Giffens Paradox', content: 'When price of Bread fell, people bought LESS Bread.\n\nWhy? Because they saved money to buy Meat (Superior good).', color: 'bg-amber-600' }
            ]
          },
          { 
            id: 'eco-ch3b', 
            title: '3B. Elasticity of Demand', 
            description: 'How much does demand change when price changes? Learn ED > 1, ED < 1, ED = 1.', 
            summary: `**Elasticity of Demand**: The degree of responsiveness of quantity demanded to a change in its determinants (Price, Income).

**Types of Elasticity**:
1. Price Elasticity
2. Income Elasticity
3. Cross Elasticity

**Types of Price Elasticity**:
1. Perfectly Elastic (Ed = ∞)
2. Perfectly Inelastic (Ed = 0)
3. Unitary Elastic (Ed = 1)
4. Relatively Elastic (Ed > 1)
5. Relatively Inelastic (Ed < 1)`,
            detailedNotes: `### 1. Concept
Elasticity refers to the extent of change in one variable due to change in another.
**Definition (Marshall):** "Elasticity of demand is great or small according to as the amount demanded increases much or little for a given fall in price."

### 2. Types of Elasticity
1.  **Price Elasticity:** Change in Qty / Change in Price.
2.  **Income Elasticity:** Change in Qty / Change in Income.
3.  **Cross Elasticity:** Change in Qty of A / Change in Price of B (Substitutes/Complementary).

### 3. 5 Types of Price Elasticity
1.  **Perfectly Elastic (Ed = ∞):** Slight change in price leads to infinite change in demand. Curve: Horizontal line parallel to X-axis. (Theoretical concept).
2.  **Perfectly Inelastic (Ed = 0):** No change in demand even if price changes. Curve: Vertical line parallel to Y-axis. (e.g., Salt).
3.  **Unitary Elastic (Ed = 1):** % Change in Demand = % Change in Price. Curve: Rectangular Hyperbola.
4.  **Relatively Elastic (Ed > 1):** % Change in Demand > % Change in Price. Curve: Flatter. (Luxury goods).
5.  **Relatively Inelastic (Ed < 1):** % Change in Demand < % Change in Price. Curve: Steeper. (Necessary goods).

### 4. Methods of Measuring Elasticity
1.  Ratio/Percentage Method.
2.  Total Expenditure Method.
3.  Point/Geometric Method.`,
            flashcards: [
              { id: 'ed1', front: 'Ed = 0', back: 'Perfectly Inelastic Demand (Vertical Line)' },
              { id: 'ed2', front: 'Ed = 1', back: 'Unitary Elastic Demand (Rectangular Hyperbola)' },
              { id: 'ed3', front: 'Ed > 1', back: 'Relatively Elastic (Luxury Goods)' },
              { id: 'ed4', front: 'Ed < 1', back: 'Relatively Inelastic (Necessities like Salt, Grains)' },
              { id: 'ed5', front: 'Geometric Method Formula', back: 'Lower Segment / Upper Segment' }
            ],
            mcqs: [
              {
                id: 'edq1',
                question: 'When Ed = 0, the demand curve is ______.',
                options: ['Horizontal', 'Vertical', 'Rectangular Hyperbola', 'Flatter'],
                correctIndex: 1,
                explanation: 'Vertical line parallel to Y axis, meaning quantity does not change.'
              },
              {
                id: 'edq2',
                question: 'Demand for salt is ______.',
                options: ['Elastic', 'Inelastic', 'Unitary', 'Perfectly Elastic'],
                correctIndex: 1,
                explanation: 'Salt is a necessity, price changes do not affect consumption much.'
              },
              {
                id: 'edq3',
                question: 'Rectangular hyperbola represents ______ elasticity.',
                options: ['Unitary', 'Perfectly Inelastic', 'Relatively Elastic', 'Perfectly Elastic'],
                correctIndex: 0,
                explanation: 'It means expenditure remains constant whatever the price.'
              }
            ],
            reels: [
              { id: 'edr1', title: 'Elastic vs Inelastic', content: 'Elastic: Like a Rubber band. Stretches a lot (Luxury cars).\nInelastic: Like a Rock. Doesn\'t change (Salt).', color: 'bg-cyan-600' },
              { id: 'edr2', title: 'Rectangular Hyperbola', content: 'The fancy name for the curve when Elasticity is exactly 1.', color: 'bg-violet-500' }
            ]
          },
          { 
            id: 'eco-ch4', 
            title: '4. Supply Analysis', 
            description: 'Seller behavior. Law of Supply: Higher Price = Higher Supply.', 
            summary: `**Supply**: Quantity of a commodity that a seller is willing and able to offer for sale at a given price during a given period of time.

**Law of Supply**:
Statement: "Other things being constant, higher the price of a commodity, more is the quantity supplied and lower the price of a commodity, less is the quantity supplied."

**Relationship**: Direct (Positive) relationship between Price and Supply.
**Curve**: Upward sloping from left to right.`,
            detailedNotes: `### 1. Concept of Supply
Supply is a flow concept. It differs from Stock.
*   **Stock:** Total quantity available with the seller (Potential Supply).
*   **Supply:** Part of stock offered for sale (Actual Supply).
*   *Example:* Farmer produces 1000kg Rice (Stock). Price is low, so he sells only 200kg (Supply).

### 2. Law of Supply
*   **Introduction:** Explains seller behaviour.
*   **Statement:** P up -> S up; P down -> S down.
*   **Symbolic:** Sx = f(Px)
*   **Curve:** Slopes upward from left to right (Positive slope).

### 3. Determinants of Supply
1.  Price of commodity.
2.  Cost of Production (Cost up -> Supply down).
3.  State of Technology (Better tech -> Supply up).
4.  Government Policy (Taxes/Subsidies).
5.  Nature of Market.

### 4. Exceptions
1.  **Supply of Labour:** Backward bending curve. (At very high wages, workers prefer leisure over work).
2.  **Agricultural Goods:** Depends on monsoon, not just price.
3.  **Perishable Goods:** Seller sells even at low price to avoid spoilage.`,
            flashcards: [
              { id: 's1', front: 'Stock vs Supply', back: 'Stock is total quantity; Supply is quantity offered for sale.' },
              { id: 's2', front: 'Slope of Supply Curve', back: 'Positive Slope (Upward from left to right)' },
              { id: 's3', front: 'Backward Bending Curve', back: 'Exception to Law of Supply: Supply of Labour.' },
              { id: 's4', front: 'Relationship P & S', back: 'Direct Relationship (Price increases, Supply increases).' }
            ],
            mcqs: [
              {
                id: 'sq1',
                question: 'Supply of labour curve is ______.',
                options: ['Upward sloping', 'Downward sloping', 'Backward bending', 'Horizontal'],
                correctIndex: 2,
                explanation: 'After a certain wage level, workers prefer leisure, reducing labour supply.'
              },
              {
                id: 'sq2',
                question: 'Stock is ______ concept.',
                options: ['Flow', 'Static', 'Dynamic', 'None'],
                correctIndex: 1,
                explanation: 'Supply is a flow concept, Stock is static (source).'
              }
            ],
            reels: [
              { id: 'sr1', title: 'Stock vs Supply', content: 'Stock: What is in the Godown.\nSupply: What is on the Shop Shelf.', color: 'bg-emerald-600' },
              { id: 'sr2', title: 'Lazy Workers?', content: 'Why does the labour curve bend back?\nBecause at very high salary, people want a holiday, not more work!', color: 'bg-orange-500' }
            ]
          },
          { 
            id: 'eco-ch5', 
            title: '5. Forms of Market', 
            description: 'Perfect Competition, Monopoly, Oligopoly, and Monopolistic Competition.', 
            summary: `**Market**: A set up where buyers and sellers come in contact to exchange goods.

**Types**:
1. **Perfect Competition**: Large no. of buyers/sellers, Homogeneous product, Single price.
2. **Monopoly**: Single seller, No close substitutes, Price maker.
3. **Oligopoly**: Few sellers (Mobile networks, Cement).
4. **Monopolistic Competition**: Many sellers, Differentiated products (Soaps, Toothpaste).`,
            detailedNotes: `### 1. Perfect Competition
An ideal market scenario.
**Features:**
1.  Large number of sellers and buyers.
2.  **Homogeneous Product:** Products are identical in size, shape, colour, taste.
3.  **Free Entry and Exit.**
4.  **Single Price:** Determined by market demand and supply.
5.  **Perfect Knowledge.**
6.  **No Transport Cost.**

### 2. Monopoly
Mono (Single) + Poly (Seller).
**Features:**
1.  Single Seller.
2.  No close substitutes.
3.  Barriers to entry.
4.  **Price Maker:** Monopolist decides the price.
5.  **Price Discrimination:** Charging different prices to different consumers (e.g., Electricity for home vs factory).

### 3. Oligopoly
Oligos (Few) + Poly (Seller).
**Features:**
1.  Few sellers dominating the market.
2.  Interdependence (One firm's decision affects others).
3.  Uncertainty.
4.  Advertising is crucial.

### 4. Monopolistic Competition
Real world market. Blend of Monopoly + Perfect Competition.
**Features:**
1.  Fairly large number of sellers.
2.  **Product Differentiation:** Products are similar but not identical (Lux vs Dove vs Lifebuoy).
3.  **Selling Cost:** Expenditure on advertisement.`,
            flashcards: [
              { id: 'm1', front: 'Price Maker', back: 'Monopoly' },
              { id: 'm2', front: 'Price Taker', back: 'Perfect Competition (Firm takes price decided by industry)' },
              { id: 'm3', front: 'Homogeneous Product', back: 'Perfect Competition' },
              { id: 'm4', front: 'Product Differentiation', back: 'Monopolistic Competition (e.g. Soaps, Shampoos)' },
              { id: 'm5', front: 'Few Sellers', back: 'Oligopoly' }
            ],
            mcqs: [
              {
                id: 'mq1',
                question: 'Selling cost is the feature of ______.',
                options: ['Perfect Competition', 'Monopoly', 'Monopolistic Competition', 'None'],
                correctIndex: 2,
                explanation: 'Brands need to spend on ads to differentiate their products.'
              },
              {
                id: 'mq2',
                question: 'In Perfect Competition, the goods are ______.',
                options: ['Heterogeneous', 'Homogeneous', 'Differentiated', 'Complementary'],
                correctIndex: 1,
                explanation: 'Identical in all respects.'
              }
            ],
            reels: [
              { id: 'mr1', title: 'Monopoly', content: 'Indian Railways is a classic Monopoly.\n\nOnly one seller!', color: 'bg-red-500' },
              { id: 'mr2', title: 'Oligopoly', content: 'Airtel, Jio, Vi.\n\nFew sellers. Fierce competition.', color: 'bg-blue-600' },
              { id: 'mr3', title: 'Selling Cost', content: 'Ads on TV? That\'s selling cost. Only in Monopolistic Competition.', color: 'bg-purple-500' }
            ]
          },
          { 
            id: 'eco-ch6', 
            title: '6. Index Numbers', 
            description: 'Statistical tool to measure changes in variables over time (Laspeyre, Paasche).', 
            summary: `**Index Number**: A statistical device for measuring changes in the magnitude of a group of related variables. "Barometers of Economic Activity".

**Types**:
1. Price Index Number
2. Quantity Index Number
3. Value Index Number
4. Special Purpose Index Number

**Methods**:
1. **Laspeyre's**: Uses Base Year Quantity (q0) as weight.
2. **Paasche's**: Uses Current Year Quantity (q1) as weight.`,
            detailedNotes: `### 1. Features
1.  Statistical device.
2.  Specialized average.
3.  Measures net change in variables.
4.  Expressed in percentages (but sign % is not used).

### 2. Steps in Construction
1.  Purpose of Index Number.
2.  Selection of Base Year (Should be normal, free from calamities).
3.  Selection of Items (Commodities).
4.  Selection of Price Quotations.
5.  Choice of Average (Arithmetic Mean is commonly used).
6.  Assignment of proper weights.

### 3. Laspeyre's Price Index
Uses **Base Year Quantity (q0)** as weights.
Formula: P01 = Σ(p1q0) / Σ(p0q0) x 100

### 4. Paasche's Price Index
Uses **Current Year Quantity (q1)** as weights.
Formula: P01 = Σ(p1q1) / Σ(p0q1) x 100`,
            flashcards: [
              { id: 'i1', front: 'Base Year', back: 'The year with which comparison is made. Denoted by suffix 0.' },
              { id: 'i2', front: 'Current Year', back: 'The year for which index is calculated. Denoted by suffix 1.' },
              { id: 'i3', front: 'Laspeyres Weight', back: 'Base Year Quantity (q0)' },
              { id: 'i4', front: 'Paasches Weight', back: 'Current Year Quantity (q1)' },
              { id: 'i5', front: 'Barometer of Economy', back: 'Index Numbers' }
            ],
            mcqs: [
              {
                id: 'iq1',
                question: 'Laaspeyre\'s method uses ______ quantity as weights.',
                options: ['Base year', 'Current year', 'Average', 'Total'],
                correctIndex: 0,
                explanation: 'Formula uses q0.'
              },
              {
                id: 'iq2',
                question: 'Index numbers are expressed in ______.',
                options: ['Ratios', 'Percentages', 'Absolute numbers', 'Decimals'],
                correctIndex: 1,
                explanation: 'They show percentage change, multiplied by 100.'
              }
            ],
            reels: [
              { id: 'ir1', title: 'The Barometer', content: 'Index numbers measure the pressure of the economy (Inflation).', color: 'bg-teal-500' },
              { id: 'ir2', title: 'Remember Formulas', content: 'Laspeyre = q0\nPaasche = q1\n\nL comes before P. 0 comes before 1.', color: 'bg-gray-600' }
            ]
          },
          { 
            id: 'eco-ch7', 
            title: '7. National Income', 
            description: 'GDP, GNP, NNP. Methods of measuring NI: Output, Income, Expenditure.', 
            summary: `**National Income**: The total money value of all final goods and services produced in a country during a year.

**Concepts**:
1. **GDP (Gross Domestic Product)**: Value produced within geographical boundaries.
2. **GNP (Gross National Product)**: GDP + Net Factor Income from Abroad (NFIA).
3. **NNP (Net National Product)**: GNP - Depreciation.

**Methods of Measurement**:
1. Output Method (Product Method).
2. Income Method.
3. Expenditure Method.`,
            detailedNotes: `### 1. Features of NI
1.  Macro Economic concept.
2.  Value of only final goods (Double counting avoided).
3.  Net aggregate value.
4.  Net income from abroad included.
5.  Flow concept.
6.  Financial Year (1st April to 31st March).

### 2. Circular Flow of Income
Two Sector Model: Households and Firms.
Households provide Factors (Land, Labour) -> Firms provide Goods/Income.

### 3. Concepts
*   **GDP Market Price:** C + I + G + (X-M)
*   **GNP:** GDP + (Receipts from abroad - Payments to abroad).
*   **Green GNP:** GNP adjusted for environmental loss.

### 4. Difficulties in Measurement
*   **Theoretical:** Transfer payments, Unpaid services (Housewife), Illegal income.
*   **Practical:** Double counting, Inadequate data, Valuation of inventories.`,
            flashcards: [
              { id: 'ni1', front: 'Financial Year in India', back: '1st April to 31st March' },
              { id: 'ni2', front: 'GDP', back: 'Production within the boundary of the country.' },
              { id: 'ni3', front: 'GNP', back: 'GDP + Net factor income from abroad.' },
              { id: 'ni4', front: 'Transfer Payments', back: 'Pension, Scholarship (Not included in NI).' },
              { id: 'ni5', front: 'Double Counting', back: 'Counting the value of a commodity more than once (e.g. Flour + Bread).' }
            ],
            mcqs: [
              {
                id: 'niq1',
                question: 'Net National Product (NNP) = GNP - ______.',
                options: ['Inflation', 'Depreciation', 'Taxes', 'Subsidy'],
                correctIndex: 1,
                explanation: 'Depreciation (wear and tear of assets) is deducted to get "Net" value.'
              },
              {
                id: 'niq2',
                question: 'Which is NOT included in National Income?',
                options: ['Wages', 'Profits', 'Sale of old car', 'Rent'],
                correctIndex: 2,
                explanation: 'Second hand goods value is not included as it was already counted when new.'
              }
            ],
            reels: [
              { id: 'nir1', title: 'GDP vs GNP', content: 'GDP = Made in India\nGNP = Made by Indians (even if they are in Dubai).', color: 'bg-indigo-700' },
              { id: 'nir2', title: 'The Housewife Problem', content: 'Mom cooking food is NOT National Income.\nChef cooking food IS National Income.\n\nUnpaid work is ignored.', color: 'bg-pink-600' }
            ]
          },
          { 
            id: 'eco-ch8', 
            title: '8. Public Finance in India', 
            description: 'Government Revenue, Expenditure, Debt and Budget.', 
            summary: `**Public Finance**: Study of financial activities of the Government (State/Central).
Differs from Private Finance (Individual).

**Functions**:
1. Revenue Generation.
2. Expenditure.
3. Debt Management.
4. Financial Administration (Budget).

**Budget**: Annual Financial Statement.
Types: Balanced, Surplus, Deficit.`,
            detailedNotes: `### 1. Public vs Private Finance
*   **Objective:** Public = Social Welfare; Private = Profit.
*   **Horizon:** Public = Long term; Private = Short term.
*   **Elasticity:** Public finance is more elastic.

### 2. Public Revenue
1.  **Tax Revenue:**
    *   **Direct Tax:** Burden cannot be shifted (Income Tax).
    *   **Indirect Tax:** Burden can be shifted (GST).
2.  **Non-Tax Revenue:** Fees, Fines, Grants, Special Levy.

### 3. Public Expenditure
Reasons for growth:
1.  Increase in activities of Govt.
2.  Population growth.
3.  Urbanization.
4.  Defence expenditure.
5.  Democracy spread.

### 4. Public Debt
*   **Internal Debt:** Borrowing from citizens, banks within country.
*   **External Debt:** Borrowing from IMF, World Bank, foreign govts.

### 5. Types of Budget
1.  **Balanced:** Revenue = Expenditure.
2.  **Surplus:** Revenue > Expenditure. (Good during Inflation).
3.  **Deficit:** Revenue < Expenditure. (Good during Depression/Development).`,
            flashcards: [
              { id: 'pf1', front: 'Direct Tax Example', back: 'Income Tax, Wealth Tax' },
              { id: 'pf2', front: 'Indirect Tax Example', back: 'GST (Goods and Services Tax)' },
              { id: 'pf3', front: 'Deficit Budget', back: 'Expenditure > Revenue' },
              { id: 'pf4', front: 'Article 112', back: 'Constitution article for Annual Financial Statement (Budget).' },
              { id: 'pf5', front: 'Fiscal Policy', back: 'Government policy regarding Tax and Spend.' }
            ],
            mcqs: [
              {
                id: 'pfq1',
                question: 'GST is a type of ______ tax.',
                options: ['Direct', 'Indirect', 'Professional', 'Wealth'],
                correctIndex: 1,
                explanation: 'The tax burden is shifted to the final consumer.'
              },
              {
                id: 'pfq2',
                question: 'During inflation, ______ budget is preferred.',
                options: ['Surplus', 'Deficit', 'Balanced', 'Zero'],
                correctIndex: 0,
                explanation: 'Surplus budget reduces money supply in economy.'
              }
            ],
            reels: [
              { id: 'pfr1', title: 'Tax vs Fine', content: 'Tax: Compulsory payment without direct benefit.\nFine: Punishment for breaking law.', color: 'bg-red-700' },
              { id: 'pfr2', title: 'Deficit', content: 'Developing countries (like India) mostly have Deficit Budgets.\n\nWe spend more to grow fast!', color: 'bg-green-700' }
            ]
          },
          { 
            id: 'eco-ch9', 
            title: '9. Money & Capital Market', 
            description: 'RBI, Commercial Banks, Stock Exchange, SEBI.', 
            summary: `**Money Market**: Market for short term funds (< 1 year).
**Capital Market**: Market for long term funds (> 1 year).

**RBI (Central Bank)**: Apex body. Established 1935.
Functions: Issue currency, Banker to Govt, Banker's Bank, Credit Control.

**Commercial Banks**: SBI, HDFC etc.
Functions: Accepting Deposits, Granting Loans.`,
            detailedNotes: `### 1. Money Market in India
Deals in near money assets (Treasury bills, Commercial paper).
**Structure:**
*   **Organized:** RBI, Commercial Banks, Co-op Banks.
*   **Unorganized:** Moneylenders, Indigenous bankers.

### 2. Reserve Bank of India (RBI)
*   Est: April 1, 1935. Nationalised: 1949.
*   **Functions:**
    1.  Issue of Currency Notes (Except ₹1 note/coin).
    2.  Banker to Government.
    3.  Banker's Bank (Lender of last resort).
    4.  Custodian of Foreign Exchange.
    5.  Controller of Credit (Repo Rate, CRR, SLR).

### 3. Capital Market
Deals in Shares, Debentures, Bonds.
**Stock Exchange:** Place where securities are bought and sold.
**SEBI (Securities and Exchange Board of India):** Regulator of Capital Market. Est 1992.

### 4. Commercial Bank Functions
1.  **Primary:**
    *   Accept Deposits (Saving, Current, Fixed, Recurring).
    *   Grant Loans (Overdraft, Cash Credit).
2.  **Secondary:**
    *   Agency (Collecting cheques).
    *   Utility (Locker facility).`,
            flashcards: [
              { id: 'mm1', front: 'RBI Established in', back: '1935' },
              { id: 'mm2', front: 'RBI Nationalised in', back: '1949' },
              { id: 'mm3', front: 'Lender of Last Resort', back: 'RBI (Helps banks in crisis)' },
              { id: 'mm4', front: 'Regulator of Stock Market', back: 'SEBI' },
              { id: 'mm5', front: 'Money Market Duration', back: 'Short Term (Less than 1 year)' }
            ],
            mcqs: [
              {
                id: 'mmq1',
                question: '______ is the Apex bank of India.',
                options: ['SBI', 'RBI', 'HDFC', 'PNB'],
                correctIndex: 1,
                explanation: 'Reserve Bank of India controls the banking system.'
              },
              {
                id: 'mmq2',
                question: 'Capital market deals in ______ funds.',
                options: ['Short term', 'Medium term', 'Long term', 'Very short term'],
                correctIndex: 2,
                explanation: 'More than 1 year (Shares, Debentures).'
              }
            ],
            reels: [
              { id: 'mmr1', title: 'Repo Rate', content: 'The rate at which RBI lends money to Banks.\n\nHigh Repo = Expensive Loans.', color: 'bg-orange-700' },
              { id: 'mmr2', title: 'The ₹1 Mystery', content: 'RBI issues all notes EXCEPT ₹1 note.\n\n₹1 note is issued by Ministry of Finance.', color: 'bg-blue-800' }
            ]
          },
          { 
            id: 'eco-ch10', 
            title: '10. Foreign Trade of India', 
            description: 'Import, Export, Balance of Payment vs Balance of Trade.', 
            summary: `**Foreign Trade**: Trade between different countries.
Types: Import, Export, Entrepot (Re-export).

**Balance of Trade (BOT)**: Export Goods - Import Goods.
**Balance of Payment (BOP)**: Systematic record of all international economic transactions (Goods + Services + Capital).

**Trends**: India exports Engineering goods, Gems, Textiles. Imports Petroleum (Oil), Gold.`,
            detailedNotes: `### 1. Meaning
Trade across national boundaries.
*   **Import:** Buying from abroad.
*   **Export:** Selling to abroad.
*   **Entrepot:** Importing to Export (Value addition).

### 2. Balance of Trade vs Balance of Payment
*   **BOT:** Narrow concept. Only visible goods.
    *   Favourable BOT: Exports > Imports.
    *   Unfavourable BOT: Imports > Exports.
*   **BOP:** Broader concept. Visible + Invisible (Services) + Capital flows.

### 3. Composition of India's Trade
*   **Exports:** Shift from traditional (Tea, Jute) to Non-traditional (Software, Engineering, Ready-made garments).
*   **Imports:** Petroleum is top import. Gold, Fertilizers.

### 4. Direction of Trade
Earlier focused on UK/USA. Now diversified to UAE, China, Middle East.`,
            flashcards: [
              { id: 'ft1', front: 'Entrepot Trade', back: 'Importing goods for the purpose of re-exporting.' },
              { id: 'ft2', front: 'BOT', back: 'Balance of Trade (Only Goods)' },
              { id: 'ft3', front: 'BOP', back: 'Balance of Payment (Goods + Services + Capital)' },
              { id: 'ft4', front: 'India\'s Top Import', back: 'Petroleum (Crude Oil)' },
              { id: 'ft5', front: 'Invisible Trade', back: 'Trade in Services (IT, Banking, Tourism)' }
            ],
            mcqs: [
              {
                id: 'ftq1',
                question: 'Buying goods from other country is called ______.',
                options: ['Export', 'Import', 'Entrepot', 'Internal Trade'],
                correctIndex: 1,
                explanation: 'In-port (Coming in).'
              },
              {
                id: 'ftq2',
                question: '______ concept includes services.',
                options: ['Balance of Trade', 'Balance of Payment', 'Internal Trade', 'None'],
                correctIndex: 1,
                explanation: 'BOP is broader and includes invisibles (services).'
              }
            ],
            reels: [
              { id: 'ftr1', title: 'BOP > BOT', content: 'Balance of Payment is the Big Daddy.\n\nIt counts everything (Software, Tourism, Money).', color: 'bg-purple-800' },
              { id: 'ftr2', title: 'Oil Hungry', content: 'A huge chunk of India\'s money goes into buying Crude Oil.', color: 'bg-black' }
            ]
          }
        ]
      },
      {
        id: 'ocm',
        name: 'OCM',
        icon: 'Briefcase',
        color: 'bg-blue-500',
        syllabus: "1. Principles of Management\n2. Functions of Management\n3. Entrepreneurship Development\n4. Business Services\n5. Emerging Modes of Business\n6. Social Responsibility of Business\n7. Consumer Protection\n8. Marketing",
        paperPattern: "Standard HSC Pattern",
        previousPapers: [],
        chapters: [
          {
            id: 'ocm-ch1',
            title: '1. Principles of Management',
            description: 'How to manage business? Learn from Fayol and Taylor.',
            summary: `**Management Principles**: General guidelines for decision making.

**Nature**:
1. Universal application.
2. Flexible.
3. Cause & Effect relationship.

**Henry Fayol (Father of Modern Management)**:
Gave 14 Principles (Division of Work, Authority, Discipline, Unity of Command, etc.).

**F.W. Taylor (Father of Scientific Management)**:
Scientific Principles:
1. Science, not Rule of Thumb.
2. Harmony, not Discord.
3. Mental Revolution.
4. Cooperation, not Individualism.`,
            detailedNotes: `### Significance of Management Principles
1.  **Insights to Managers:** Helps managers understand situations and solve problems.
2.  **Efficient Utilization of Resources:** Helps in optimum use of Men, Machine, Material, Money.
3.  **Scientific Decisions:** Systematic and balanced decisions.
4.  **Understanding Social Responsibility:** Focus on quality products at reasonable prices.

### Henry Fayol's 14 Principles of Management
1.  **Division of Work:** Divide work into small tasks. Leads to specialization.
2.  **Authority and Responsibility:** Authority is right to give orders; Responsibility is obligation to perform.
3.  **Discipline:** Respect for rules.
4.  **Unity of Command:** One employee -> One Boss. Avoids confusion.
5.  **Unity of Direction:** "One head, One plan".
6.  **Subordination of Individual Interest:** Organization > Individual.
7.  **Remuneration:** Fair wages.
8.  **Centralization:** Power at top level (for small firms). Decentralization for large firms.
9.  **Scalar Chain:** Line of authority from top to bottom. *Gang Plank* allows direct communication in emergency.
10. **Order:** Place for everything (Material) and everyone (Social).
11. **Equity:** Fair treatment, no discrimination.
12. **Stability of Tenure:** Job security ensures efficiency.
13. **Initiative:** Encourage employees to come up with new ideas.
14. **Esprit de Corps:** Team spirit.

### Frederick Winslow Taylor (Scientific Management)
Taylor focused on efficiency at the factory floor level.
**Key Techniques:**
1.  Work Study (Time Study, Motion Study, Fatigue Study).
2.  Standardization of Tools.
3.  Differential Piece-Rate Wage Plan (Higher pay for higher efficiency).`,
            flashcards: [
              { id: 'ocm1', front: 'Father of Modern Management', back: 'Henry Fayol (French Mining Engineer)' },
              { id: 'ocm2', front: 'Father of Scientific Management', back: 'F.W. Taylor (American Mechanical Engineer)' },
              { id: 'ocm3', front: 'Unity of Command', back: 'Every employee should receive orders from only ONE superior.' },
              { id: 'ocm4', front: 'Gang Plank', back: 'A shortcut in Scalar Chain for direct communication during emergency.' },
              { id: 'ocm5', front: 'Rule of Thumb', back: 'Based on personal judgment or trial and error (Taylor opposed this).' }
            ],
            mcqs: [
              {
                id: 'qm1',
                question: 'Principle of ______ states that there should be a place for everything and everything in its place.',
                options: ['Equity', 'Order', 'Discipline', 'Stability'],
                correctIndex: 1,
                explanation: 'Order refers to arrangement of material and men.'
              },
              {
                id: 'qm2',
                question: 'Member of organization should receive orders from ______.',
                options: ['Many Superiors', 'One Superior', 'All Superiors', 'None'],
                correctIndex: 1,
                explanation: 'This is the Principle of Unity of Command.'
              },
              {
                id: 'qm3',
                question: 'Taylor recommended ______ piece rate wage plan.',
                options: ['Equal', 'Differential', 'Low', 'High'],
                correctIndex: 1,
                explanation: 'Differential plan motivates inefficient workers to perform better to earn higher rates.'
              }
            ],
            reels: [
              {
                 id: 'rm1',
                 title: '14 Principles',
                 content: 'Fayol gave 14 Principles.\n\nThey are the "General Guidelines" for every manager.',
                 color: 'bg-teal-500'
              },
              {
                 id: 'rm2',
                 title: 'Unity of Command',
                 content: 'One Head -> One Boss.\n\nImagine having 2 bosses telling you to do opposite things. Chaos, right?',
                 color: 'bg-red-500'
              },
              {
                 id: 'rm3',
                 title: 'Espirit De Corps',
                 content: 'Means "Team Spirit".\n\nUnion is Strength.',
                 color: 'bg-purple-600'
              }
            ]
          },
          {
            id: 'ocm-ch2',
            title: '2. Functions of Management',
            description: 'POSDCORB - Planning, Organizing, Staffing, Directing, Coordinating, Reporting, Budgeting.',
            summary: `**Planning**: Deciding in advance what to do. First function.
**Organizing**: Grouping activities and resources.
**Staffing**: Recruitment, selection, training.
**Directing**: Instructing, guiding, motivating.
**Controlling**: Comparing actual performance with standard. Last function.`,
            detailedNotes: 'Pending...',
            flashcards: [
               { id: 'f_posd1', front: 'First function of management', back: 'Planning' },
               { id: 'f_posd2', front: 'Last function of management', back: 'Controlling' },
               { id: 'f_posd3', front: 'Staffing', back: 'Right person at the right job.' }
            ],
            mcqs: [],
            reels: [
               { id: 'rf1', title: 'First Function', content: 'Planning is the basic/first function of management.', color: 'bg-indigo-500' },
               { id: 'rf2', title: 'Last Function', content: 'Controlling is the end function.', color: 'bg-pink-500' }
            ]
          },
          { id: 'ocm-ch3', title: '3. Entrepreneurship Development', description: 'Characteristics of Entrepreneur. EDP. Intrapreneur.', summary: 'Pending...', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'ocm-ch4', title: '4. Business Services', description: 'Banking, Insurance, Transport, Communication, Warehousing.', summary: 'Pending...', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'ocm-ch5', title: '5. Emerging Modes of Business', description: 'E-Business, B2B, B2C, C2C. Outsourcing (BPO, KPO).', summary: 'Pending...', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'ocm-ch6', title: '6. Social Responsibility', description: 'Responsibility towards Owners, Employees, Consumers, Govt, Society.', summary: 'Pending...', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'ocm-ch7', title: '7. Consumer Protection', description: 'Rights of Consumers (Safety, Information, Choice, Heard, Redressal, Education).', summary: 'Pending...', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'ocm-ch8', title: '8. Marketing', description: '4Ps of Marketing: Product, Price, Place, Promotion.', summary: 'Pending...', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] }
        ]
      },
      {
        id: 'bk',
        name: 'Accounts (BK)',
        icon: 'Calculator',
        color: 'bg-purple-500',
        syllabus: "1. Intro to Partnership & Partnership Final Accounts\n2. Accounts of 'Not for Profit' Concerns\n3. Reconstitution of Partnership (Admission)\n4. Reconstitution (Retirement)\n5. Reconstitution (Death)\n6. Dissolution of Partnership Firm\n7. Bills of Exchange\n8. Company Accounts (Shares)\n9. Analysis of Financial Statements\n10. Computer in Accounting",
        paperPattern: "Q.1 Objectives (20 Marks)\nQ.2 Admission/Retirement/Dissolution/Bills (10 Marks)\nQ.3 Admission/Retirement/Dissolution/Bills (10 Marks)\nQ.4 Shares/Computer (8 Marks)\nQ.5 Death/Analysis (8 Marks)\nQ.6 NPO Problem (12 Marks)\nQ.7 Final Accounts Problem (12 Marks)",
        previousPapers: [],
        chapters: [
           {
            id: 'bk-ch1',
            title: '1. Partnership Final Accounts',
            description: 'Trading A/c, P&L A/c and Balance Sheet for Partners.',
            summary: `**Partnership**: Relation between persons to share profits of a business carried on by all or any of them acting for all.
**Act**: Indian Partnership Act, 1932.

**Capital Accounts Methods**:
1. **Fixed Capital Method**: Two accounts (Capital A/c + Current A/c). Capital remains constant.
2. **Fluctuating Capital Method**: Only one account (Capital A/c). All adjustments in Capital A/c.

**Final Accounts Steps**:
Trial Balance -> Trading A/c -> Profit & Loss A/c -> Balance Sheet.`,
            detailedNotes: `### Meaning of Partnership
According to Section 4 of Indian Partnership Act, 1932: "Partnership is the relation between persons who have agreed to share the profits of a business carried on by all or any of them acting for all."

### Partnership Deed
It is a written agreement between partners. It contains:
1. Name and address of firm and partners.
2. Profit Sharing Ratio (PSR).
3. Interest on Capital/Drawings.
4. Salaries/Commission to partners.
*Note: If deed is silent, PSR is Equal, No Interest on Capital, No Salary, Interest on Loan @ 6% p.a.*

### Proforma of Trading Account (For year ended...)
*Debit Side:*
- Opening Stock
- Purchases (less Return Outward)
- Wages
- Carriage Inward
- Royalty
- Factory Expenses

*Credit Side:*
- Sales (less Return Inward)
- Goods lost by fire/theft
- Goods distributed as free samples
- Closing Stock

### Proforma of Profit & Loss A/c
*Debit Side:*
- Salaries
- Rent, Rates, Taxes
- Insurance
- Bad Debts
- Depreciation
- Office/Admin Expenses
- Selling/Distribution Expenses

*Credit Side:*
- Interest Received
- Commission Received
- Discount Received`,
            flashcards: [
              { id: 'bk1', front: 'Partnership Act Year', back: '1932' },
              { id: 'bk2', front: 'Maximum Partners (Companies Act 2013)', back: '50' },
              { id: 'bk3', front: 'Liability of Partners', back: 'Unlimited, Joint and Several.' },
              { id: 'bk4', front: 'Fixed Capital Method', back: 'Capital A/c + Current A/c are prepared.' },
              { id: 'bk5', front: 'Deed is Silent: PSR?', back: 'Equal Ratio' },
              { id: 'bk6', front: 'Deed is Silent: Int on Loan?', back: '6% p.a.' }
            ],
            mcqs: [
               {
                id: 'bq1',
                question: 'When there is no partnership deed, profit sharing ratio is ______.',
                options: ['Capital Ratio', 'Equal', '2:1', 'Depends on Experience'],
                correctIndex: 1,
                explanation: 'As per Indian Partnership Act 1932, if deed is silent, profits are shared equally.'
              },
              {
                id: 'bq2',
                question: 'Liability of partners in a partnership firm is ______.',
                options: ['Limited', 'Unlimited', 'Restricted', 'None of above'],
                correctIndex: 1,
                explanation: 'Partners are liable to pay firm debts even from personal property.'
              }
            ],
            reels: [
               { id: 'br1', title: 'Unlimited Liability', content: 'If the business fails, partners might have to sell their personal house/car to pay debts.', color: 'bg-red-600' },
               { id: 'br2', title: 'Trading Account', content: 'Direct Expenses -> Trading A/c.\n(Factory, Manufacturing, Wages)', color: 'bg-blue-600' },
               { id: 'br3', title: 'P&L Account', content: 'Indirect Expenses -> P&L A/c.\n(Office, Selling, Admin, Salaries)', color: 'bg-purple-600' }
            ]
          },
          { id: 'bk-ch2', title: '2. NPO (Not for Profit)', description: 'Receipts & Payments A/c -> Income & Expenditure A/c & Balance Sheet.', summary: 'Pending...', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'bk-ch3', title: '3. Admission of Partner', description: 'New partner joins. Sacrifice Ratio. Goodwill valuation.', summary: 'Pending...', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'bk-ch4', title: '4. Retirement of Partner', description: 'Partner leaves. Gain Ratio. Revaluation of Assets.', summary: 'Pending...', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'bk-ch5', title: '5. Death of Partner', description: 'Partner dies. Executor Loan Account. Profit till date of death.', summary: 'Pending...', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'bk-ch6', title: '6. Dissolution of Firm', description: 'Business closes. Realisation Account. All assets sold, liabilities paid.', summary: 'Pending...', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'bk-ch7', title: '7. Bills of Exchange', description: 'Drawer, Drawee, Payee. Dishonour, Noting Charges, Endorsement.', summary: 'Pending...', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'bk-ch8', title: '8. Company Accounts', description: 'Issue of Shares. IPO. Forfeiture of shares.', summary: 'Pending...', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'bk-ch9', title: '9. Analysis of Financial Statements', description: 'Ratio Analysis. Current Ratio, Gross Profit Ratio.', summary: 'Pending...', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'bk-ch10', title: '10. Computer in Accounting', description: 'CAS (Computerised Accounting System).', summary: 'Pending...', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] }
        ]
      },
      {
        id: 'sp',
        name: 'SP',
        icon: 'PenTool',
        color: 'bg-pink-500',
        syllabus: "1. Intro to Corp Finance\n2. Sources of Corp Finance\n3. Issue of Shares\n4. Issue of Debentures\n5. Deposits\n6. Correspondence with Members\n7. Correspondence with Debenture Holders\n8. Correspondence with Depositors\n9. Depository System\n10. Dividend and Interest\n11. Financial Market\n12. Stock Exchange",
        paperPattern: "Theory Based.",
        previousPapers: [],
        chapters: [
           {
            id: 'sp-ch1',
            title: '1. Intro to Corporate Finance',
            description: 'Money is the lifeblood of business. Learn about Fixed and Working Capital.',
            summary: `**Corporate Finance**: Deals with raising and using of finance by a corporation.
Two main decisions:
1. **Financing Decision**: How to raise money? (Equity, Debt).
2. **Investment Decision**: Where to use money? (Fixed assets, Working capital).

**Fixed Capital**: Used for fixed assets (Land, Building). Stays in business for long period.
**Working Capital**: Used for day-to-day operations (Raw material, Wages). Circulating capital.`,
            detailedNotes: `### Meaning
Corporate finance deals with the acquisition and use of capital by business corporation.
Henry Hoagland: "Corporate finance deals primarily with the acquisition and use of capital by business corporation."

### Importance of Corporate Finance
1. Helps in decision making.
2. Helps in raising capital for a project.
3. Helps in Research and Development (R&D).
4. Helps in smooth running of business firm.
5. Brings coordination between various activities.
6. Promotes expansion and diversification.
7. Managing Risk.

### Capital Requirements
**1. Fixed Capital:**
Capital used for purchasing fixed assets like land, building, machinery.
*Factors affecting Fixed Capital:*
- Nature of business (Manufacturing > Trading).
- Size of business.
- Scope of business.
- Extent of lease or rental.

**2. Working Capital:**
Capital used to carry out day-to-day business activities.
Gross Working Capital = Total Current Assets.
Net Working Capital = Current Assets - Current Liabilities.
*Factors affecting Working Capital:*
- Nature of business.
- Size of business.
- Volume of sales.
- Production cycle.
- Business cycle (Boom > Recession).`,
            flashcards: [
              { id: 'sp1', front: 'Fixed Capital', back: 'Invested in Fixed Assets (Land, Machinery). Long term.' },
              { id: 'sp2', front: 'Working Capital', back: 'Required for day-to-day operations. Short term.' },
              { id: 'sp3', front: 'Investment Decision', back: 'Also known as Capital Budgeting.' },
              { id: 'sp4', front: 'Production Cycle', back: 'Process of converting raw material into finished goods.' }
            ],
            mcqs: [
              {
                id: 'sq1',
                question: '______ is related to money and money management.',
                options: ['Production', 'Marketing', 'Finance', 'HR'],
                correctIndex: 2,
                explanation: 'Finance manages the flow of money.'
              }
            ],
            reels: [
               { id: 'sr1', title: 'Financing vs Investment', content: 'Financing = Getting Money.\nInvestment = Using Money.', color: 'bg-emerald-600' },
               { id: 'sr2', title: 'Working Capital', content: 'Also called "Circulating Capital" because it keeps changing forms (Cash -> Stock -> Debtors -> Cash).', color: 'bg-amber-600' }
            ]
          },
          { id: 'sp-ch2', title: '2. Sources of Corp Finance', description: 'Owned Capital (Shares) vs Borrowed Capital (Debentures, Loans).', summary: 'Pending...', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'sp-ch3', title: '3. Issue of Shares', description: 'IPO, FPO, Rights Issue, Bonus Shares, ESOP.', summary: 'Pending...', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'sp-ch4', title: '4. Issue of Debentures', description: 'Procedure for issuing debentures. Debenture Trustees.', summary: 'Pending...', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'sp-ch5', title: '5. Deposits', description: 'Acceptance of public deposits. Terms and conditions.', summary: 'Pending...', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'sp-ch6', title: '6. Correspondence with Members', description: 'Letters to shareholders: Allotment, Dividend, Bonus.', summary: 'Pending...', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'sp-ch7', title: '7. Correspondence with Debenture Holders', description: 'Letters regarding interest payment, conversion, redemption.', summary: 'Pending...', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'sp-ch8', title: '8. Correspondence with Depositors', description: 'Letters regarding acceptance, renewal, repayment of deposits.', summary: 'Pending...', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'sp-ch9', title: '9. Depository System', description: 'Demat account. NSDL, CDSL. DP (Depository Participant).', summary: 'Pending...', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'sp-ch10', title: '10. Dividend and Interest', description: 'Final Dividend vs Interim Dividend. Unpaid Dividend Account.', summary: 'Pending...', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'sp-ch11', title: '11. Financial Market', description: 'Money Market (Short term) vs Capital Market (Long term).', summary: 'Pending...', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] },
          { id: 'sp-ch12', title: '12. Stock Exchange', description: 'BSE (Bombay Stock Exchange), NSE. Functions of SEBI.', summary: 'Pending...', detailedNotes: 'Pending...', flashcards: [], mcqs: [], reels: [] }
        ]
      }
    ]
  },
  [Stream.ARTS]: { id: Stream.ARTS, subjects: [] },
  [Stream.SCIENCE]: { id: Stream.SCIENCE, subjects: [] }
};