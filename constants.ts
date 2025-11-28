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
            description: 'Demand = Desire + Ability to Pay + Willingness to Pay.',
            summary: 'Pending...',
            detailedNotes: 'Pending...',
            flashcards: [],
            mcqs: [],
            reels: []
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
            flashcards: [],
            mcqs: [],
            reels: [
               { id: 'rf1', title: 'First Function', content: 'Planning is the basic/first function of management.', color: 'bg-indigo-500' },
               { id: 'rf2', title: 'Last Function', content: 'Controlling is the end function.', color: 'bg-pink-500' }
            ]
          }
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
          }
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
          }
        ]
      }
    ]
  },
  [Stream.ARTS]: { id: Stream.ARTS, subjects: [] },
  [Stream.SCIENCE]: { id: Stream.SCIENCE, subjects: [] }
};
