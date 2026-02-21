/**
 * Economics HSC Board Exam Crasher
 * Complete PYQ Bank + Important Questions + Model Answers
 * Exam Date: 24th February 2026 (8 days from Feb 16)
 *
 * Structure:
 * - Chapter-wise Important Questions
 * - Previous Year Questions (2019-2025)
 * - Model Answers in Board Format
 * - Formulas and Graphs
 * - Last-minute key points
 */

export const ECONOMICS_BOARD_CRASHER = {
  subject: "Economics",
  examDate: "2026-02-24",
  totalMarks: 80,
  duration: "3 hours",
  daysLeft: 4,

  // ==================== CHAPTER 1: INTRO TO MICRO & MACRO ====================
  chapter1: {
    title: "Introduction to Micro and Macro Economics",
    weightage: "07 marks (10 with options)",

    shortcodes: [
      {
        code: "LAB USP",
        topic: "Features of Micro Economics",
        breakdown:
          "Limited scope • Analysis of market • Based on assumptions • Use of marginalism • Study of individual units • Price theory",
      },
      {
        code: "3G SLIP",
        topic: "Features of Macro Economics",
        breakdown:
          "General equilibrium • Growth theory • Government role • Study of aggregates • Lumping method • Income theory • Policy-oriented",
      },
    ],

    mustKnowConcepts: [
      {
        term: "Micro Economics",
        definition:
          "Study of individual economic units (consumer, firm, industry). Also called Price Theory. Father: Alfred Marshall (Principles of Economics, 1890). Uses Slicing method.",
      },
      {
        term: "Macro Economics",
        definition:
          "Study of economy as a whole (national income, employment, inflation). Also called Income and Employment Theory. Father: J.M. Keynes (General Theory, 1936). Uses Lumping method.",
      },
      {
        term: "Ceteris Paribus",
        definition:
          "Latin phrase meaning 'other things remaining constant'. Fundamental assumption used in Micro Economics for partial equilibrium analysis.",
      },
      {
        term: "Slicing Method",
        definition:
          "Used by Micro Economics. Splits/divides the whole economy into small individual units and studies each unit separately. E.g., individual income out of national income.",
      },
      {
        term: "Lumping Method",
        definition:
          "Used by Macro Economics. Studies the whole economy as one unit rather than its parts. Bird's eye view of the economy.",
      },
      {
        term: "Partial Equilibrium",
        definition:
          "Feature of Micro Economics. Analyses equilibrium of one unit in isolation, assuming others constant (Ceteris Paribus).",
      },
      {
        term: "General Equilibrium",
        definition:
          "Feature of Macro Economics. Considers interdependence of ALL sectors simultaneously. No isolation of individual units.",
      },
      {
        term: "Ragnar Frisch",
        definition:
          "Norwegian economist who coined the terms 'Micro' and 'Macro' economics in 1933 at Oslo University.",
      },
    ],

    pyqMCQs: [
      {
        q: "The branch of economics that deals with allocation of resources:",
        options: ["Micro Economics", "Macro Economics", "Econometrics", "None"],
        correct: 0,
        year: 2022,
      },
      {
        q: "Father of Micro Economics:",
        options: ["Adam Smith", "J.M. Keynes", "Alfred Marshall", "Robbins"],
        correct: 2,
        year: 2024,
      },
      {
        q: "Father of Macro Economics:",
        options: ["Adam Smith", "J.M. Keynes", "Alfred Marshall", "Robbins"],
        correct: 1,
        year: 2024,
      },
      {
        q: "Micro Economics is also called:",
        options: [
          "Income Theory",
          "Price Theory",
          "Wealth Theory",
          "Growth Theory",
        ],
        correct: 1,
        year: 2023,
      },
      {
        q: "Macro Economics uses:",
        options: ["Slicing method", "Lumping method", "Both", "None"],
        correct: 1,
        year: 2023,
      },
      {
        q: "'Ceteris Paribus' means:",
        options: [
          "Other things constant",
          "All things change",
          "Nothing constant",
          "None",
        ],
        correct: 0,
        year: 2022,
      },
      {
        q: "Study of national income is part of:",
        options: ["Micro Economics", "Macro Economics", "Both", "None"],
        correct: 1,
        year: 2022,
      },
      {
        q: "Micro Economics studies:",
        options: [
          "Aggregate demand",
          "Individual demand",
          "National income",
          "Inflation",
        ],
        correct: 1,
        year: 2022,
      },
      {
        q: "Whole Economy is studied in:",
        options: ["Micro Economics", "Macro Economics", "Econometrics", "None"],
        correct: 1,
        year: 2022,
      },
      {
        q: "Method adopted in macro economic analysis:",
        options: [
          "Slicing method",
          "Aggregative method",
          "Individualistic method",
          "Price theory",
        ],
        correct: 1,
        year: "Imp",
      },
      {
        q: "General equilibrium is feature of:",
        options: ["Micro Economics", "Macro Economics", "Both", "Neither"],
        correct: 1,
        year: "Imp",
      },
      {
        q: "Which is NOT in scope of Macro Economics?",
        options: [
          "Theory of Income",
          "Theory of Price Level",
          "Theory of Product Pricing",
          "Theory of Growth",
        ],
        correct: 2,
        year: "Imp",
      },
    ],

    pyqShortAnswers: [
      {
        q: "Distinguish between Micro and Macro Economics. (4 marks)",
        year: 2024,
        modelAnswer: `**Micro vs Macro Economics:**

| Aspect | Micro Economics | Macro Economics |
|--------|-----------------|-----------------|
| **Meaning** | Study of individual units | Study of economy as whole |
| **Also Called** | Price Theory | Income & Employment Theory |
| **Father** | Alfred Marshall | J.M. Keynes |
| **Method** | Slicing method | Lumping method |
| **Analysis** | Partial equilibrium | General equilibrium |
| **View** | Worm's eye view | Bird's eye view |
| **Scope** | Limited (individual units) | Wide (entire economy) |`,
      },
      {
        q: "Explain the scope of Macro Economics. (4 marks)",
        year: 2022,
        modelAnswer: `**Scope of Macro Economics:**

1. **Theory of Income and Employment:** Explains what determines the level of national income, employment, and what causes fluctuations. Studies consumption function, investment function, business cycles.

2. **Theory of General Price Level and Inflation:** Shows how general price level is determined and what causes inflation (rising prices) and deflation (falling prices).

3. **Theory of Growth and Development:** Explains causes of underdevelopment, poverty. Suggests strategies for accelerating growth.

4. **Macro Theory of Distribution:** Deals with relative shares of rent, wages, interest, and profit in total national income.`,
      },
    ],

    // ==================== TEXTBOOK EXERCISES - CHAPTER 1 ====================
    textbookExercises: {
      title: "Chapter 1 - Textbook Exercises with Answers",

      // Q.1 Choose the correct option (Combo MCQs)
      mcqs: [
        {
          q: "The branch of economics that deals with the allocation of resources.",
          statements: [
            "a) Micro economics",
            "b) Macro economics",
            "c) Econometrics",
            "d) None of these",
          ],
          options: ["a, b and c", "a and b", "only a", "None of these"],
          correct: 2,
          answer: "only a",
          explanation:
            "Micro economics specifically deals with the allocation of scarce resources among unlimited wants at the individual level. It studies how individual consumers, firms, and industries make decisions regarding the allocation of limited resources. Macro economics studies the economy as a whole, and Econometrics is the application of statistical methods to economic data.",
        },
        {
          q: "Concepts studied under Micro economics.",
          statements: [
            "a) National income",
            "b) General price level",
            "c) Factor pricing",
            "d) Product pricing",
          ],
          options: ["a and c", "b, c and d", "a, b and c", "c and d"],
          correct: 3,
          answer: "c and d",
          explanation:
            "Factor pricing (determination of wages, rent, interest, profit) and Product pricing (determination of prices of goods and services) are studied under Micro economics. National income and General price level are Macro economics concepts as they deal with the economy as a whole.",
        },
        {
          q: "Method adopted in micro economic analysis.",
          statements: [
            "a) Lumping method",
            "b) Aggregative method",
            "c) Slicing method",
            "d) Inclusive method",
          ],
          options: ["a, c and d", "a, b and d", "only c", "only a"],
          correct: 2,
          answer: "only c",
          explanation:
            "Micro economics uses the Slicing method. It splits or divides the whole economy into small individual units and then studies each unit separately in detail. Lumping/Aggregative method is used by Macro economics. 'Inclusive method' is not a standard economic method.",
        },
        {
          q: "Concepts studied under Macro economics.",
          statements: [
            "a) Whole economy",
            "b) Economic development",
            "c) Aggregate supply",
            "d) Product pricing",
          ],
          options: ["a, b and c", "b, c and d", "only d", "a, b, c and d"],
          correct: 0,
          answer: "a, b and c",
          explanation:
            "Whole economy, Economic development, and Aggregate supply are all Macro economics concepts as they deal with the economy at the national/aggregate level. Product pricing is a Micro economics concept — it deals with individual goods/services pricing.",
        },
      ],

      // Q.2 Complete the correlation
      correlations: [
        {
          q: "Micro economics : Slicing method :: Macro economics : ___",
          answer: "Lumping method",
          explanation:
            "Micro economics uses the Slicing method (divides economy into small units and studies each separately). Macro economics uses the Lumping method (studies the whole economy as one unit rather than its parts). Slicing = microscopic view, Lumping = telescopic view.",
        },
        {
          q: "Micro economics : Tree :: Macro economics : ___",
          answer: "Forest",
          explanation:
            "Micro economics is like studying a single tree (individual unit) in detail — one firm, one consumer, one price. Macro economics is like studying the entire forest (whole economy) — national income, aggregate demand, general price level. This analogy highlights the scope difference between the two branches.",
        },
        {
          q: "Macro economic theory : Income and employment :: Micro economics : ___",
          answer: "Price Theory",
          explanation:
            "Macro economics is also known as the 'Theory of Income and Employment' because it studies national income, employment levels, and output at the aggregate level. Micro economics is also called 'Price Theory' because it deals with the determination of prices of goods, services, and factors of production.",
        },
        {
          q: "Makros : Macro economics :: Mikros : ___",
          answer: "Micro economics",
          explanation:
            "'Makros' is a Greek word meaning 'large' — hence Macro economics (study of the large/whole economy). 'Mikros' is a Greek word meaning 'small' — hence Micro economics (study of small/individual units of the economy).",
        },
        {
          q: "General equilibrium : Macro economics :: ___ : Micro economics",
          answer: "Partial equilibrium",
          explanation:
            "Macro economics uses General equilibrium analysis — it considers the interdependence of all sectors of the economy simultaneously. Micro economics uses Partial equilibrium analysis — it isolates one unit (Ceteris Paribus) and studies it assuming all other factors remain constant.",
        },
      ],

      // Q.3 Identify and explain the concepts
      conceptIdentification: [
        {
          statement:
            "Gauri collected the information about the income of a particular firm.",
          concept: "Micro Economics",
          explanation:
            "**Micro Economics**\n\nThis is an example of Micro Economics because Gauri is studying the income of a 'particular firm' — which is an individual economic unit.\n\n• Micro economics is the study of individual economic units such as individual consumer, individual firm, individual price, individual industry, etc.\n• The word 'Micro' is derived from the Greek word 'Mikros' meaning small.\n• It uses the Slicing method — divides the economy into small parts and studies each separately.\n• Also called Price Theory. Father: Alfred Marshall.\n• It deals with Partial equilibrium (Ceteris Paribus — other things remaining constant).",
        },
        {
          statement:
            "Ramesh decided to take all decisions related to production, such as what and how to produce.",
          concept: "Market Economy / Free Market Economy",
          explanation:
            "**Market Economy / Free Market Economy**\n\nThis is an example of a Market Economy (also called Free Market Economy or Capitalist Economy).\n\n• In a market economy, economic decisions regarding production — 'What to produce?', 'How to produce?', 'How much to produce?', 'For whom to produce?' — are taken by individual producers/entrepreneurs.\n• There is no intervention by the government.\n• Prices are determined by the forces of demand and supply in the market.\n• Microeconomics helps in understanding the workings of such a free market economy.\n• Examples: USA, UK (largely market-oriented economies).",
        },
        {
          statement:
            "Shabana paid wages to workers in her factory and interest on her bank loan.",
          concept: "Theory of Factor Pricing",
          explanation:
            "**Theory of Factor Pricing (Micro Economics)**\n\nThis is an example of the Theory of Factor Pricing, which falls under Micro Economics.\n\n• Factor pricing deals with the determination of the prices (rewards) of factors of production:\n  - **Wages** → reward for Labour (Shabana paid wages to workers)\n  - **Interest** → reward for Capital (Shabana paid interest on bank loan)\n  - **Rent** → reward for Land\n  - **Profit** → reward for Entrepreneurship\n\n• Micro economics studies how the prices of these factors of production are determined in the market.\n• This comes under the scope of Micro economics as it deals with individual factor payments.",
        },
      ],

      // Q.4 Short Answers (4 marks each)
      shortAnswers: [
        {
          question: "Explain the features of Micro economics.",
          marks: 4,
          modelAnswer:
            '**Features of Micro Economics (Shortcode: LAB USP)**\n\n"Microeconomics is in fact a microscopic study of the economy." — Maurice Dobb\n\n1) **L — Limited Scope:**\nMicroeconomics has a limited scope. It studies only individual units of the economy (worm\'s eye view), not the whole economy.\n\n2) **A — Analysis of Market Structure:**\nMicroeconomics analyses the behavior of different market structures — Perfect Competition, Monopoly, Oligopoly, Monopolistic Competition.\n\n3) **B — Based on Certain Assumptions:**\nMicroeconomics begins with the fundamental assumption "Other things remaining constant" (Ceteris Paribus) — perfect competition, laissez-faire policy, pure capitalism, full employment, etc. These assumptions make the analysis simple.\n\n4) **U — Use of Marginalism Principle:**\nMicroeconomics uses the marginalism principle — Marginal Utility, Marginal Cost, Marginal Revenue — to explain economic decisions at the individual level.\n\n5) **S — Study of Individual Units:**\nMicroeconomics studies small individual economic units — individual firm, individual price, individual household, etc.\n\n6) **P — Price Theory:**\nMicroeconomics deals with the determination of prices of goods and services as well as factors of production. Hence it is known as Price Theory.',
        },
        {
          question: "Explain the importance of Macro economics.",
          marks: 4,
          modelAnswer:
            "**Importance of Macro Economics:**\n\n1) **Understanding the Working of the Economy:**\nMacroeconomics helps us understand how the economy as a whole works. It explains the determination of national income, output, employment, and the general price level.\n\n2) **Formulation of Economic Policies:**\nMacroeconomics provides the basis for the government to formulate economic policies such as fiscal policy, monetary policy, trade policy, employment policy, etc. These policies aim to achieve economic stability and growth.\n\n3) **Study of National Income:**\nMacroeconomics studies the concept of national income — its components, methods of measurement, and difficulties in estimation. National income data is essential for economic planning and comparison between countries.\n\n4) **Understanding Trade Cycles:**\nMacroeconomics explains the causes of economic fluctuations (boom, recession, depression, recovery). It helps in framing policies to control trade cycles and achieve economic stability.\n\n5) **International Comparisons:**\nMacroeconomic aggregates like GDP, per capita income, and growth rate help in comparing the economic performance of different countries and assessing a country's position in the global economy.\n\n6) **Study of Economic Growth & Development:**\nMacroeconomics explains the causes of underdevelopment and poverty. It suggests strategies for accelerating growth and development in developing countries like India.",
        },
        {
          question: "Explain the scope of Macro economics.",
          marks: 4,
          modelAnswer:
            '**Scope of Macro Economics:**\n\n"Macroeconomics deals with the functioning of the economy as a whole."\n\n1) **Theory of Income and Employment:**\nMacroeconomics explains which factors determine the level of national income and employment and what causes fluctuations. It studies consumption function, investment function, and the theory of business cycles.\n\n2) **Theory of General Price Level and Inflation:**\nMacroeconomics shows how the general price level is determined and what causes fluctuations. It studies inflation (rising prices) and deflation (falling prices) and their effects on the economy.\n\n3) **Theory of Growth and Development:**\nMacroeconomics consists of the theory of economic growth and development. It explains causes of underdevelopment and poverty, and suggests strategies for accelerating growth.\n\n4) **Macro Theory of Distribution:**\nMacro theory of distribution deals with the relative shares of rent, wages, interest, and profit in the total national income — how the national income is distributed among the factors of production.',
        },
      ],

      // Q.5 Agree or Disagree with reasons
      agreeDisagree: [
        {
          statement: "The scope of micro economics is unlimited.",
          agree: false,
          modelAnswer:
            "**No, I disagree with this statement.**\n\nReasons:\na) The scope of Micro economics is LIMITED, not unlimited.\n\nb) Micro economics studies only individual/small economic units — an individual consumer, an individual firm, an individual price, an individual industry. It has a narrow/limited scope.\n\nc) Micro economics is like the study of a single tree, NOT the entire forest. It takes the 'worm's eye view' of the economy.\n\nd) It uses the Slicing method — dividing the economy into small parts and studying each separately, under the assumption of 'Ceteris Paribus' (other things remaining constant).\n\ne) It is Macro economics that has a wider scope as it studies the economy as a whole (bird's eye view).\n\nf) Therefore, the scope of Micro economics is limited, not unlimited.",
        },
        {
          statement:
            "Macro economics deals with the study of individual behaviour.",
          agree: false,
          modelAnswer:
            "**No, I disagree with this statement.**\n\nReasons:\na) Macro economics does NOT deal with the study of individual behaviour. That is the scope of Micro economics.\n\nb) Macro economics deals with the study of the WHOLE economy — aggregate demand, aggregate supply, national income, general price level, total employment, etc.\n\nc) The word 'Macro' is derived from the Greek word 'Makros' meaning large. It studies the economy as a whole using the Lumping method.\n\nd) It was developed by J.M. Keynes and is also called 'Income and Employment Theory'.\n\ne) It uses General equilibrium analysis, which considers the interdependence of all sectors simultaneously.\n\nf) Therefore, Macro economics deals with the study of the entire economy, not individual behaviour.",
        },
        {
          statement: "Macro economics is different from micro economics.",
          agree: true,
          modelAnswer:
            "**Yes, I agree with this statement.**\n\nReasons:\na) **Scope:** Macro economics studies the entire economy. Micro economics studies only a particular segment or individual unit.\n\nb) **Method:** Macro economics uses the Lumping method (study of the whole). Micro economics uses the Slicing method (divides economy into small parts).\n\nc) **Focus:** Macro studies aggregate demand, aggregate supply, national income, employment. Micro studies individual demand, individual supply, and individual price determination.\n\nd) **Equilibrium:** Macro follows General equilibrium analysis. Micro follows Partial equilibrium analysis (Ceteris Paribus).\n\ne) **Also called:** Macro is called Income and Employment Theory (Father: J.M. Keynes). Micro is called Price Theory (Father: Alfred Marshall).\n\nf) Therefore, Macro economics IS fundamentally different from Micro economics.",
        },
        {
          statement: "Micro economics uses slicing method.",
          agree: true,
          modelAnswer:
            "**Yes, I agree with this statement.**\n\nReasons:\na) Micro economics uses the Slicing method. It splits or divides the whole economy into small individual units and then studies each unit separately in detail.\n\nb) For example, it studies individual income out of national income, individual demand out of aggregate demand, individual firm's output out of total output.\n\nc) The Slicing method is like taking a thin slice of bread from a full loaf — studying one small part of the whole.\n\nd) This is in contrast to Macro economics which uses the Lumping method — studying the whole economy as one unit.\n\ne) The slicing method leads to Partial equilibrium analysis where other things are assumed constant (Ceteris Paribus).\n\nf) Therefore, Micro economics does indeed use the slicing method.",
        },
        {
          statement: "Micro economics is known as Income theory.",
          agree: false,
          modelAnswer:
            "**No, I disagree with this statement.**\n\nReasons:\na) Micro economics is NOT known as Income Theory. It is known as 'Price Theory'.\n\nb) Micro economics deals with the determination of prices of goods and services as well as factors of production (wages, rent, interest, profit). Hence it is called Price Theory.\n\nc) It is MACRO economics that is known as 'Income and Employment Theory' because it studies national income, employment levels, and output at the aggregate level.\n\nd) Father of Micro economics (Price Theory) = Alfred Marshall. Father of Macro economics (Income Theory) = J.M. Keynes.\n\ne) Therefore, Micro economics is known as Price Theory, NOT Income Theory.",
        },
      ],

      // Q.6 Long Answer (8 marks each)
      longAnswers: [
        {
          question: "Explain the importance of Micro economics.",
          marks: 8,
          modelAnswer:
            "**Importance of Micro Economics**\n\nMaurice Dobb: \"Microeconomics is in fact a microscopic study of the economy.\"\n\nMicro economics, despite its limited scope, has great importance in the study of economics. The following points explain its importance:\n\n1) **Price Determination:**\nMicro economics explains how the prices of different products and various factors of production are determined. It analyses the forces of demand and supply that determine equilibrium price in the market. For example, how the price of wheat is determined in the market.\n\n2) **Free Market Economy:**\nMicro economics helps in understanding the workings of a free market economy. A free-market economy is an economy where economic decisions regarding production — 'What to produce?', 'How much to produce?', 'How to produce?' — are taken at individual levels without government intervention. Micro economics explains how these decisions are made by individual producers and consumers.\n\n3) **Foreign Trade:**\nMicro economics helps in explaining various aspects of foreign trade like:\n- Effects of a tariff on a particular commodity\n- Determination of currency exchange rates of any two countries\n- Gains from international trade to a particular country\n\n4) **Economic Model Building:**\nMicro economics helps in understanding various complex economic situations with the help of economic models. It has made a valuable contribution to economics by developing various terms, concepts, terminologies, and tools of economic analysis. Economic models are built using various economic variables.\n\n5) **Basis of Welfare Economics:**\nMicro economics serves as the basis for welfare economics. It helps in suggesting policies to improve the economic welfare of the people. By studying how resources are allocated, it helps determine the conditions under which social welfare is maximized.\n\n6) **Business Decision Making:**\nMicro economics helps business firms in making important decisions such as:\n- What price to charge\n- How much to produce\n- Which technology to use\n- How to minimize costs and maximize profits\n\n7) **Understanding Tax Policy:**\nMicro economics helps in understanding the impact of taxation on individual commodities and sectors. It explains concepts like tax incidence — who ultimately bears the burden of a tax.\n\n**Conclusion:** Micro economics, though limited in scope, provides the foundation for understanding individual economic behavior, price determination, and resource allocation, which is essential for both economic theory and practical policy-making.",
        },
        {
          question: "Explain the concept of Macro economics and its features.",
          marks: 8,
          modelAnswer:
            "**Concept and Features of Macro Economics**\n\n**Concept:**\nThe word 'Macro' is derived from the Greek word 'Makros' meaning large. Macro economics is the branch of economics that studies the economy as a whole. It deals with aggregate economic variables such as aggregate demand, aggregate supply, national income, general price level, total employment, etc.\n\nMacro economics is also known as 'Income and Employment Theory'. The father of Macro economics is J.M. Keynes, who wrote the famous book \"The General Theory of Employment, Interest and Money\" (1936).\n\n**Features of Macro Economics (Shortcode: 3G SLIP):**\n\n1) **G — General Equilibrium:**\nMacro economics studies general equilibrium analysis. It considers the interdependence of all sectors of the economy simultaneously. Unlike partial equilibrium (Micro), it does not isolate individual units. It studies how all markets in the economy reach equilibrium together.\n\n2) **G — Growth Theory:**\nMacro economics consists of the theory of economic growth and development. It explains the causes of underdevelopment and poverty, and suggests strategies for accelerating growth and development.\n\n3) **G — Government's Role:**\nMacro economics emphasizes the important role of the government in the economy. It provides the basis for the government to formulate economic policies (fiscal policy, monetary policy, trade policy) to achieve economic stability and growth.\n\n4) **S — Study of Aggregates:**\nMacro economics studies aggregate variables — aggregate demand, aggregate supply, national income, general price level, total output, total employment, etc. It takes a bird's eye view of the economy.\n\n5) **L — Lumping Method:**\nMacro economics uses the Lumping method. It studies the whole economy rather than its parts. It lumps together all individual units and studies the economy as one unit. For example, it studies national income (not individual income), aggregate demand (not individual demand).\n\n6) **I — Income and Employment Theory:**\nMacro economics is also called the 'Theory of Income and Employment'. It explains which factors determine the level of national income and employment, and what causes fluctuations in them. It studies the consumption function, investment function, and business cycles.\n\n7) **P — Policy-Oriented:**\nMacro economics is highly policy-oriented. It provides the basis for framing economic policies to solve problems like inflation, unemployment, poverty, trade deficits, and fiscal deficits. Government policies like demonetization, GST implementation, and budget allocation are based on macroeconomic analysis.\n\n**Conclusion:** Macro economics is essential for understanding the functioning of the economy as a whole. It helps in formulating economic policies for achieving economic stability, full employment, price stability, and sustained economic growth.",
        },
      ],
    },
  },

  // ==================== CHAPTER 2: UTILITY ANALYSIS ====================
  chapter2: {
    title: "Utility Analysis",
    weightage: "07 marks (10 with options)",

    shortcodes: [
      {
        code: "MRS BHIDE",
        topic: "Features of Utility",
        breakdown:
          "Measurable • Relative concept • Subjective • Based on intensity of want • Humans only • Independent of morality • Differs from usefulness • Ethically neutral",
      },
      {
        code: "H MAP",
        topic: "Exceptions to Law of DMU",
        breakdown: "Hobbies • Miser • Addictions • Power (+ Money)",
      },
    ],

    mustKnowConcepts: [
      {
        term: "Utility",
        definition:
          "Want satisfying power of a commodity. Subjective and varies person to person.",
      },
      {
        term: "Total Utility (TU)",
        definition:
          "Sum of utilities derived from consuming all units of a commodity.",
      },
      {
        term: "Marginal Utility (MU)",
        definition:
          "Additional utility from consuming one more unit. MU = TUn - TUn-1 or MU = ΔTU/ΔQ",
      },
      {
        term: "Law of Diminishing Marginal Utility",
        definition:
          "As consumption increases, MU from each additional unit decreases.",
      },
      {
        term: "Consumer Equilibrium",
        definition:
          "State where consumer maximizes satisfaction. MU = Price (for single commodity).",
      },
      {
        term: "Cardinal Utility",
        definition:
          "Utility can be measured in numbers (utils). Marshall's approach.",
      },
      {
        term: "Ordinal Utility",
        definition:
          "Utility can only be ranked, not measured. Hicks-Allen approach.",
      },
    ],

    formulas: [
      "MU = TUn - TUn-1",
      "MU = ΔTU / ΔQ",
      "When TU is maximum, MU = 0",
      "When MU is positive, TU rises",
      "When MU is negative, TU falls",
      "Consumer Equilibrium: MUx/Px = MUy/Py = MUm (Marginal Utility of Money)",
    ],

    pyqMCQs: [
      {
        q: "When TU is maximum, MU is:",
        options: ["Maximum", "Minimum", "Zero", "Negative"],
        correct: 2,
        year: 2024,
      },
      {
        q: "Law of DMU was given by:",
        options: ["Marshall", "Gossen", "Keynes", "Hicks"],
        correct: 1,
        year: 2024,
      },
      {
        q: "Cardinal utility concept by:",
        options: ["Hicks", "Marshall", "Allen", "Keynes"],
        correct: 1,
        year: 2023,
      },
      {
        q: "MU formula is:",
        options: ["TU/Q", "TUn-TUn-1", "TU×Q", "TU+Q"],
        correct: 1,
        year: 2023,
      },
      {
        q: "When MU is negative, TU is:",
        options: ["Rising", "Falling", "Constant", "Maximum"],
        correct: 1,
        year: 2022,
      },
      {
        q: "Consumer equilibrium for single commodity:",
        options: ["MU > P", "MU < P", "MU = P", "MU = 0"],
        correct: 2,
        year: 2022,
      },
      {
        q: "Utility is measured in:",
        options: ["Rupees", "Utils", "Kilograms", "Meters"],
        correct: 1,
        year: 2021,
      },
      {
        q: "Law of Equi-Marginal Utility explains:",
        options: [
          "Single commodity",
          "Multiple commodities",
          "Production",
          "None",
        ],
        correct: 1,
        year: 2021,
      },
      {
        q: "TU curve shape is:",
        options: ["Straight line", "Inverted U", "U-shaped", "Horizontal"],
        correct: 1,
        year: 2020,
      },
      {
        q: "MU curve shape is:",
        options: [
          "Upward sloping",
          "Downward sloping",
          "Horizontal",
          "Vertical",
        ],
        correct: 1,
        year: 2020,
      },
      {
        q: "First unit has _____ MU:",
        options: ["Zero", "Lowest", "Highest", "Negative"],
        correct: 2,
        year: "Imp",
      },
      {
        q: "Point of satiety is where:",
        options: ["MU = 0", "TU = 0", "MU = TU", "None"],
        correct: 0,
        year: "Imp",
      },
    ],

    pyqShortAnswers: [
      {
        q: "State and explain the Law of Diminishing Marginal Utility. (4 marks)",
        year: 2024,
        modelAnswer: `**Law of Diminishing Marginal Utility:**

1. **Statement**: As a consumer consumes more units of a commodity, the marginal utility derived from each successive unit goes on diminishing.

2. **Given by**: H.H. Gossen (also called Gossen's First Law)

3. **Assumptions**:
   - Continuous consumption
   - Homogeneous units
   - Reasonable size of units
   - No change in taste
   - Rational consumer

4. **Example**:
   | Units | TU | MU |
   |-------|-----|-----|
   | 1 | 10 | 10 |
   | 2 | 18 | 8 |
   | 3 | 24 | 6 |
   | 4 | 28 | 4 |
   | 5 | 28 | 0 |

5. **Exceptions**: Hobbies, misers, drunkards`,
      },
      {
        q: "Explain the relationship between TU and MU. (4 marks)",
        year: 2023,
        modelAnswer: `**Relationship between TU and MU:**

1. **When MU is positive, TU rises**
   - Each additional unit adds to total satisfaction

2. **When MU is zero, TU is maximum**
   - Point of satiety reached
   - Consumer fully satisfied

3. **When MU is negative, TU falls**
   - Additional consumption reduces satisfaction
   - Disutility sets in

4. **Graphical Relationship**:
   - TU curve: Inverted U-shape
   - MU curve: Downward sloping
   - MU cuts X-axis when TU is at maximum

5. **Formula**: MU = TUn - TUn-1`,
      },
    ],

    pyqLongAnswers: [
      {
        q: "Explain the Law of Diminishing Marginal Utility with schedule, diagram and exceptions. (8 marks)",
        year: 2024,
        modelAnswer: `### Law of Diminishing Marginal Utility

#### Introduction
The Law of DMU was first stated by German economist H.H. Gossen, hence also called Gossen's First Law.

#### Statement
"As a consumer consumes successive units of a commodity, the utility derived from each additional unit goes on diminishing."

#### Assumptions
1. Continuous consumption
2. Homogeneous units (same quality)
3. Reasonable size of units
4. No change in consumer's taste
5. Rational consumer
6. Constant income and prices
7. No time gap between consumption

#### Schedule
| Units | TU (Utils) | MU (Utils) |
|-------|------------|------------|
| 1 | 20 | 20 |
| 2 | 36 | 16 |
| 3 | 48 | 12 |
| 4 | 56 | 8 |
| 5 | 60 | 4 |
| 6 | 60 | 0 |
| 7 | 56 | -4 |

#### Diagram
- X-axis: Units of commodity
- Y-axis: TU and MU
- TU curve: Rises, reaches maximum, then falls
- MU curve: Downward sloping, crosses X-axis at 0

#### Exceptions (Limitations)
1. **Hobbies**: Stamp collectors, coin collectors
2. **Misers**: More money = more satisfaction
3. **Drunkards**: Addiction increases desire
4. **Knowledge**: Learning never diminishes
5. **Music lovers**: Repeated listening

#### Importance
1. Basis of Law of Demand
2. Explains consumer behavior
3. Helps in taxation policy
4. Foundation of welfare economics

#### Conclusion
The Law of DMU is fundamental to understanding consumer behavior and forms the basis of demand analysis.`,
      },
    ],

    textbookExercises: {
      title: "Chapter 2 - Textbook Exercises with Answers",

      mcqs: [
        {
          q: "In the law of DMU, Alfred Marshall assumes that marginal utility of money _____.",
          statements: [
            "a) increases",
            "b) remains constant",
            "c) decreases",
            "d) rises and then falls",
          ],
          options: [
            "increases",
            "remains constant",
            "decreases",
            "rises and then falls",
          ],
          correct: 1,
          answer: "remains constant",
          explanation:
            "Marshall assumed MU of money remains constant so that utility can be measured in monetary terms. If MU of money changed, comparison would be impossible.",
        },
        {
          q: "As per the law of DMU, measurement of utility is assumed to be _____.",
          statements: [
            "a) ordinal",
            "b) cardinal",
            "c) both ordinal and cardinal",
            "d) None of the above",
          ],
          options: ["ordinal", "cardinal", "both", "None"],
          correct: 1,
          answer: "cardinal",
          explanation:
            "The Law of DMU assumes cardinal (numerical) measurement of utility — utility can be expressed in numbers (Utils). Ordinal utility (ranking) was later proposed by Hicks and Allen.",
        },
        {
          q: "MU of the commodity becomes negative when TU of a commodity is _____.",
          statements: ["a) rising", "b) constant", "c) falling", "d) zero"],
          options: ["rising", "constant", "falling", "zero"],
          correct: 2,
          answer: "falling",
          explanation:
            "When TU starts falling (after the point of satiety), MU becomes negative. This means consuming more actually reduces satisfaction — called disutility.",
        },
        {
          q: "Point of Satiety means _____.",
          statements: [
            "a) TU is rising and MU is falling",
            "b) TU is falling and MU is negative",
            "c) TU is maximum and MU is zero",
            "d) MU is falling and TU is rising",
          ],
          options: [
            "TU rising, MU falling",
            "TU falling, MU negative",
            "TU maximum, MU zero",
            "MU falling, TU rising",
          ],
          correct: 2,
          answer: "TU is maximum and MU is zero",
          explanation:
            "Point of satiety is where the consumer is fully satisfied. TU reaches its maximum level and MU becomes zero. Beyond this point, TU falls and MU becomes negative.",
        },
        {
          q: "When MU is falling, TU is _____.",
          statements: [
            "a) rising",
            "b) falling",
            "c) not changing",
            "d) maximum",
          ],
          options: ["rising", "falling", "not changing", "maximum"],
          correct: 0,
          answer: "rising",
          explanation:
            "When MU is positive but falling, TU is still RISING — but at a diminishing rate. TU increases as long as MU is positive. TU stops rising only when MU = 0.",
        },
      ],

      correlations: [
        {
          q: "Time Utility : Winter sweater :: Place Utility : ___",
          answer: "Woollen clothes in cold places / Sand at construction site",
          explanation:
            "Time utility arises when utility changes with time (sweater in winter). Place utility arises when utility changes with place (sand is more useful at construction site than seashore).",
        },
        {
          q: "Form Utility : Furniture from wood :: Service Utility : ___",
          answer: "Doctor's services / Teacher's services",
          explanation:
            "Form utility is created by changing the shape/form (wood → furniture). Service utility arises from personal services rendered by professionals (doctors, teachers, lawyers).",
        },
        {
          q: "TU is maximum : MU is zero :: TU is falling : ___",
          answer: "MU is negative",
          explanation:
            "At the point of satiety: TU is maximum and MU = 0. After this point: TU starts falling and MU becomes negative (disutility).",
        },
      ],

      conceptIdentification: [
        {
          statement:
            "Salma purchased a sweater for her father in the winter season.",
          concept: "Time Utility",
          explanation:
            "**Time Utility**\n\nWhen the utility of a commodity is derived with a change in its time of utilization, it is called time utility.\n\n• The sweater has greater utility in winter than in summer.\n• Time utility is also seen when goods are stored for scarcity (e.g., Blood Bank).\n• A student finds more utility in textbooks during exams than in vacations.",
        },
        {
          statement: "Nilesh purchased ornaments for his sister.",
          concept: "Possession Utility",
          explanation:
            "**Possession Utility**\n\nPossession utility arises when the ownership of goods is transferred from one person to another.\n\n• When Nilesh buys ornaments, ownership transfers from seller to buyer.\n• The ornaments now have utility for his sister who possesses them.\n• E.g., transfer of goods from sellers to buyers in any market.",
        },
        {
          statement:
            "Kavita consumed five units of oranges one after the other.",
          concept: "Continuity in Consumption (Assumption of Law of DMU)",
          explanation:
            "**Continuity in Consumption**\n\nThis is one of the important assumptions of the Law of Diminishing Marginal Utility.\n\n• All units of a commodity are consumed in quick succession without any lapse of time.\n• If there is a time gap between consumption of successive units, the law may not hold.\n• Kavita consuming oranges one after another demonstrates continuous consumption.",
        },
        {
          statement:
            "Bhushan refused to eat the fifth chapati after eating four chapatis.",
          concept: "Point of Satiety",
          explanation:
            "**Point of Satiety**\n\nThe point of satiety is where MU of a commodity becomes zero — the consumer is fully satisfied.\n\n• After 4 chapatis, Bhushan's MU = 0 (fully satisfied).\n• Eating the 5th would give negative utility (disutility).\n• A rational consumer stops consumption at the point of satiety.\n• At this point, TU is maximum and MU = 0.",
        },
        {
          statement:
            "Lalita satisfied her want to write an essay by using a pen and notebook.",
          concept: "Utility",
          explanation:
            "**Utility**\n\nUtility refers to the capacity of a commodity to satisfy a human want.\n\n• The pen and notebook have utility because they satisfy Lalita's want to write.\n• Utility is subjective — it varies from person to person.\n• Utility is the want-satisfying power of a good.",
        },
      ],

      shortAnswers: [
        {
          question: "Explain the features/characteristics of utility.",
          marks: 4,
          modelAnswer:
            "**Features of Utility (Shortcode: MRS BHIDE)**\n\n1) **Relative Concept:** Utility varies with time and place. Woollen clothes have greater utility in winter. Sand has more utility at a construction site than at the seashore.\n\n2) **Subjective Concept:** Utility differs from person to person due to differences in taste, preferences, habits, etc. A stethoscope has utility to a doctor but not to a layman.\n\n3) **Ethically Neutral:** Utility has no ethical consideration — it is morally colourless. A knife has utility to cut fruits AND can be used to harm. Both wants are satisfied by the same commodity.\n\n4) **Differs from Usefulness:** Utility = capacity to satisfy wants. Usefulness = value in use. Milk has both utility and usefulness. Liquor has utility to an addict but no usefulness.\n\n5) **Differs from Pleasure:** A commodity may have utility but not give pleasure. An injection has utility (cures disease) but gives no pleasure.\n\n6) **Differs from Satisfaction:** Utility is the CAUSE of consumption. Satisfaction is the END RESULT. A thirsty person drinks water — utility causes consumption, satisfaction is the result.\n\n7) **Measurement is Hypothetical:** Cardinal measurement of utility is not possible. Utility can only be experienced as positive, zero, or negative (disutility).",
        },
        {
          question: "Explain the types of utility.",
          marks: 4,
          modelAnswer:
            "**Types of Utility:**\n\n1) **Form Utility:** Created by changing shape/structure of material. E.g., toys from clay, furniture from wood.\n\n2) **Place Utility:** Utility increases with change in place. E.g., woollen clothes in cold places. Transport creates place utility.\n\n3) **Service Utility:** Arises from personal services of professionals. E.g., services of doctors, teachers, lawyers.\n\n4) **Knowledge Utility:** When consumer acquires knowledge about a product. E.g., knowing functions of a mobile phone increases its utility.\n\n5) **Possession Utility:** Arises when ownership is transferred. E.g., goods transferred from seller to buyer.\n\n6) **Time Utility:** Utility increases with change in time. E.g., textbooks during exams, umbrella during monsoon. Blood bank stores blood for future emergencies.",
        },
        {
          question:
            "Explain the relationship between Total Utility and Marginal Utility.",
          marks: 4,
          modelAnswer:
            "**Relationship between TU and MU:**\n\n| Unit | TU | MU |\n|------|-----|-----|\n| 1 | 10 | 10 |\n| 2 | 18 | 8 |\n| 3 | 24 | 6 |\n| 4 | 28 | 4 |\n| 5 | 30 | 2 |\n| 6 | 30 | 0 |\n| 7 | 28 | -2 |\n\n**Key Relationships:**\n1) TU and MU of the FIRST unit are always equal.\n2) As consumption increases, TU rises at a diminishing rate while MU goes on diminishing.\n3) When TU is MAXIMUM, MU = 0 (Point of Satiety — 6th unit).\n4) When TU starts FALLING, MU becomes NEGATIVE (disutility — 7th unit).\n5) A rational consumer should stop consumption at the point of satiety (MU = 0).\n\nFormula: MU = TUn − TUn−1",
        },
      ],

      agreeDisagree: [
        {
          statement:
            "There are no exceptions to the law of diminishing marginal utility.",
          agree: false,
          modelAnswer:
            "**No, I disagree with this statement.**\n\nReasons:\na) There ARE exceptions to the law of diminishing marginal utility.\n\nb) **Hobbies (H):** In hobbies like stamp/coin collection, rare paintings, music — every additional item gives MORE pleasure. MU increases. However, this violates the assumption of homogeneity.\n\nc) **Miser (M):** For a miser, every additional rupee gives more satisfaction. MU of money increases with stock. This violates the rationality assumption.\n\nd) **Addictions (A):** For a drunkard, each additional drink increases intoxication. MU seems to increase. This is actually an illusion and violates rationality.\n\ne) **Power (P):** When a person acquires power, his lust for more power increases. This violates rationality.\n\nf) **Money:** MU of money never becomes zero. It increases with stock as money satisfies various wants.\n\n(Shortcode: H MAP — Hobbies, Miser, Addictions, Power)",
        },
      ],

      longAnswers: [
        {
          question:
            "State and explain the law of diminishing marginal utility with exceptions.",
          marks: 8,
          modelAnswer:
            "**Law of Diminishing Marginal Utility**\n\nFirst proposed by Prof. Gossen, discussed in detail by Prof. Alfred Marshall in 'Principles of Economics' (1890).\n\n**Statement:** 'Other things remaining constant, the additional benefit which a person derives from a given increase in his stock of a thing, diminishes with every increase in the stock that he already has.'\n\nIn short: The more you have, the less you want more.\n\n**Schedule:**\n| Units | MU |\n|-------|-----|\n| 1 | 10 |\n| 2 | 8 |\n| 3 | 6 |\n| 4 | 4 |\n| 5 | 2 |\n| 6 | 0 |\n| 7 | -2 |\n\n**Diagram:** MU curve slopes downward from left to right. When MU = 0, the curve touches X-axis. Beyond this, MU becomes negative (below X-axis = disutility).\n\n**Exceptions (Shortcode: H MAP):**\n\n1) **H — Hobbies:** Collections of stamps, coins, paintings — each addition gives MORE pleasure. Violates homogeneity assumption.\n\n2) **M — Miser:** Every additional rupee gives more satisfaction. MU of money increases. Violates rationality assumption.\n\n3) **A — Addictions:** Drunkards experience increasing intoxication. MU seems to rise. Actually an illusion. Violates rationality.\n\n4) **P — Power:** Lust for power increases with power acquired. Violates rationality.\n\n5) **Money:** MU of money never becomes zero. It is a medium of exchange satisfying various wants. But MU of money is more to a poor person than a rich person.",
        },
      ],
    },
  },

  // ==================== CHAPTER 3A: DEMAND ANALYSIS ====================
  chapter3a: {
    title: "Demand Analysis",
    weightage: "08 marks (12 with options)",

    shortcodes: [
      {
        code: "HI GPS",
        topic: "Exceptions to Law of Demand",
        breakdown:
          "Habitual goods • Ignorance • Giffen's paradox • Prestige goods • Speculation (+ Price illusion)",
      },
    ],

    mustKnowConcepts: [
      {
        term: "Demand",
        definition:
          "Quantity of a commodity a consumer is willing and able to buy at a given price during a given period.",
      },
      {
        term: "Law of Demand",
        definition:
          "Other things being equal, quantity demanded increases when price falls and vice versa. Inverse relationship.",
      },
      {
        term: "Demand Schedule",
        definition:
          "Table showing relationship between price and quantity demanded.",
      },
      {
        term: "Demand Curve",
        definition:
          "Graphical representation of demand schedule. Slopes downward left to right.",
      },
      {
        term: "Individual Demand",
        definition: "Demand by a single consumer for a commodity.",
      },
      {
        term: "Market Demand",
        definition: "Sum of individual demands of all consumers in the market.",
      },
      {
        term: "Extension of Demand",
        definition:
          "Increase in quantity demanded due to fall in price. Movement along the demand curve.",
      },
      {
        term: "Contraction of Demand",
        definition:
          "Decrease in quantity demanded due to rise in price. Movement along the demand curve.",
      },
      {
        term: "Increase in Demand",
        definition:
          "More quantity demanded at same price due to other factors. Shift of demand curve to right.",
      },
      {
        term: "Decrease in Demand",
        definition:
          "Less quantity demanded at same price due to other factors. Shift of demand curve to left.",
      },
    ],

    pyqMCQs: [
      {
        q: "Law of Demand shows _____ relationship:",
        options: ["Direct", "Inverse", "No relation", "Positive"],
        correct: 1,
        year: 2024,
      },
      {
        q: "Demand curve slopes:",
        options: ["Upward", "Downward", "Horizontal", "Vertical"],
        correct: 1,
        year: 2024,
      },
      {
        q: "Movement along demand curve is called:",
        options: ["Shift", "Extension/Contraction", "Increase", "None"],
        correct: 1,
        year: 2023,
      },
      {
        q: "Shift of demand curve is due to:",
        options: ["Change in price", "Change in other factors", "Both", "None"],
        correct: 1,
        year: 2023,
      },
      {
        q: "Giffen goods violate:",
        options: ["Law of Supply", "Law of Demand", "Both", "None"],
        correct: 1,
        year: 2022,
      },
      {
        q: "Veblen goods are:",
        options: [
          "Inferior goods",
          "Prestige goods",
          "Giffen goods",
          "Normal goods",
        ],
        correct: 1,
        year: 2022,
      },
      {
        q: "Demand for salt is:",
        options: ["Elastic", "Inelastic", "Unitary", "Infinite"],
        correct: 1,
        year: 2021,
      },
      {
        q: "Market demand is:",
        options: [
          "Individual demand",
          "Sum of individual demands",
          "Average demand",
          "None",
        ],
        correct: 1,
        year: 2021,
      },
      {
        q: "When income rises, demand for normal goods:",
        options: ["Falls", "Rises", "Unchanged", "Zero"],
        correct: 1,
        year: 2020,
      },
      {
        q: "Demand depends on:",
        options: ["Price only", "Income only", "Multiple factors", "Supply"],
        correct: 2,
        year: 2020,
      },
      {
        q: "Complementary goods have _____ cross elasticity:",
        options: ["Positive", "Negative", "Zero", "Infinite"],
        correct: 1,
        year: "Imp",
      },
      {
        q: "Substitute goods have _____ cross elasticity:",
        options: ["Positive", "Negative", "Zero", "Infinite"],
        correct: 0,
        year: "Imp",
      },
    ],

    pyqShortAnswers: [
      {
        q: "State the Law of Demand with assumptions. (4 marks)",
        year: 2024,
        modelAnswer: `**Law of Demand:**

1. **Statement**: "Other things being equal, when price of a commodity falls, quantity demanded rises, and when price rises, quantity demanded falls."

2. **Relationship**: Inverse/Negative relationship between price and quantity demanded.

3. **Assumptions (Ceteris Paribus)**:
   - Income remains constant
   - Prices of related goods constant
   - Consumer's tastes unchanged
   - No expectation of future price change
   - No new substitutes
   - No change in population

4. **Expression**: Qd = f(P), where Qd = Quantity demanded, P = Price

5. **Exceptions**: Giffen goods, Veblen goods, Necessities, Future expectations`,
      },
      {
        q: "Distinguish between Extension and Increase in Demand. (4 marks)",
        year: 2023,
        modelAnswer: `**Extension vs Increase in Demand:**

| Aspect | Extension of Demand | Increase in Demand |
|--------|--------------------|--------------------|
| **Cause** | Fall in price | Other factors (income, taste) |
| **Price** | Price changes | Price remains same |
| **Curve** | Movement along curve | Shift of entire curve |
| **Direction** | Downward movement on curve | Curve shifts to right |
| **Other Factors** | Remain constant | Change |
| **Diagram** | Point A to B on same curve | D1 to D2 (new curve) |`,
      },
    ],

    textbookExercises: {
      title: "Chapter 3A - Textbook Exercises with Answers",

      mcqs: [
        {
          q: "The relationship between demand for a good and price of its substitute is _____.",
          statements: [
            "a) direct",
            "b) inverse",
            "c) no effect",
            "d) can be direct and inverse",
          ],
          options: [
            "direct",
            "inverse",
            "no effect",
            "can be direct and inverse",
          ],
          correct: 0,
          answer: "direct",
          explanation:
            "When the price of a substitute rises, consumers switch to the original good — its demand increases. So there is a DIRECT relationship. E.g., if price of coffee rises, demand for tea increases.",
        },
        {
          q: "The relationship between income and demand for inferior goods is _____.",
          statements: [
            "a) direct",
            "b) inverse",
            "c) no effect",
            "d) can be direct and inverse",
          ],
          options: [
            "direct",
            "inverse",
            "no effect",
            "can be direct and inverse",
          ],
          correct: 1,
          answer: "inverse",
          explanation:
            "For inferior goods, as income rises, demand FALLS (consumers switch to superior goods). So the relationship is INVERSE. E.g., as income rises, demand for coarse grain falls and demand for wheat/rice rises.",
        },
        {
          q: "Symbolically, the functional relationship between Demand and Price can be expressed as _____.",
          statements: [
            "a) Dx = f(Px)",
            "b) Dx = f(Pz)",
            "c) Dx = f(y)",
            "d) Dx = f(T)",
          ],
          options: ["Dx = f(Px)", "Dx = f(Pz)", "Dx = f(y)", "Dx = f(T)"],
          correct: 0,
          answer: "Dx = f(Px)",
          explanation:
            "The Law of Demand shows relationship between demand for commodity x and its own price. Dx = f(Px) where D = Demand, x = commodity, f = function, Px = price of x.",
        },
        {
          q: "When less units are demanded at high price it shows _____.",
          statements: [
            "a) increase in demand",
            "b) expansion of demand",
            "c) decrease in demand",
            "d) contraction in demand",
          ],
          options: [
            "increase in demand",
            "expansion of demand",
            "decrease in demand",
            "contraction in demand",
          ],
          correct: 3,
          answer: "contraction in demand",
          explanation:
            "When less is demanded due to rise in price alone (other factors constant), it is Contraction of demand — upward movement on the same demand curve. It's a variation, not a change.",
        },
      ],

      correlations: [
        {
          q: "A situation where more quantity is demanded at lower price.",
          answer: "Expansion of Demand",
          explanation:
            "When price falls and more is demanded (other factors constant), it is Expansion of Demand — a downward movement along the same demand curve.",
        },
        {
          q: "Graphical representation of demand schedule.",
          answer: "Demand Curve",
          explanation:
            "A demand curve is the graphical representation of a demand schedule. It shows the relationship between price and quantity demanded and slopes downward from left to right.",
        },
        {
          q: "A desire which is backed by willingness to purchase and ability to pay.",
          answer: "Demand",
          explanation:
            "In economics, demand is not just a desire. Demand = Desire + Willingness to pay + Ability to pay. Without all three, it remains a mere desire, not demand.",
        },
      ],

      conceptIdentification: [
        {
          statement:
            "Salma purchased a sweater for her father in the winter season.",
          concept: "Time Utility",
          explanation:
            "**Time Utility**\n\nWhen the utility of a commodity is derived with a change in its time of utilization, it is called time utility.\n\n• The sweater gives more utility in winter than in summer.\n• Time utility is also observed when goods are stored for use during scarcity (e.g., blood bank).\n• Example: Textbooks during exams, umbrellas during monsoon.",
        },
        {
          statement:
            "Sanket's demand for consumer goods increased by 20% due to an increase in his income by 50%.",
          concept: "Income Elasticity of Demand",
          explanation:
            "**Income Elasticity of Demand**\n\nThe income elasticity of demand measures how the change in a consumer's income affects the demand for a specific product.\n\n• Formula: Ey = %ΔQ / %ΔY\n• Here: Ey = 20/50 = 0.4 (positive but less than 1)\n• This indicates the goods are normal goods with income-inelastic demand.",
        },
      ],

      shortAnswers: [
        {
          question: "Explain the various types of demand.",
          marks: 4,
          modelAnswer:
            "**Types of Demand:**\n\n1) **Direct Demand:** Demand for goods that satisfy wants directly — consumer goods. E.g., demand for cloth, sugar, food.\n\n2) **Indirect Demand (Derived Demand):** Demand for goods needed for further production — producer's goods. E.g., demand for workers in a sugar factory.\n\n3) **Complementary/Joint Demand:** When two or more goods are demanded jointly to satisfy a single want. E.g., car and fuel, pen and refill.\n\n4) **Composite Demand:** Demand for a commodity that can be put to several uses. E.g., electricity for light, fan, AC.\n\n5) **Competitive Demand:** Demand for goods which are substitutes for each other. E.g., tea or coffee, sugar or jaggery.",
        },
        {
          question: "Explain variation in demand (Expansion and Contraction).",
          marks: 4,
          modelAnswer:
            "**Variation in Demand:**\nWhen demand changes due to change in price ALONE (other factors constant), it is variation in demand.\n\n**1) Expansion of Demand:**\n• Rise in quantity demanded due to fall in price alone\n• Other factors remain unchanged\n• Downward movement on the SAME demand curve\n• E.g., Price falls from ₹50 to ₹40, demand rises from 10 to 20 units\n\n**2) Contraction of Demand:**\n• Fall in quantity demanded due to rise in price alone\n• Other factors remain unchanged\n• Upward movement on the SAME demand curve\n• E.g., Price rises from ₹40 to ₹50, demand falls from 20 to 10 units\n\n**Key:** In variation, only PRICE changes. The demand curve does NOT shift — movement is along the same curve.",
        },
      ],

      agreeDisagree: [
        {
          statement: "Demand curve slopes downward from left to right.",
          agree: true,
          modelAnswer:
            "**Yes, I agree with this statement.**\n\nReasons:\na) According to Prof. Marshall: 'Other things being equal, higher the price, smaller the quantity demanded and lower the price, larger the quantity demanded.'\n\nb) There is an INVERSE relationship between price and quantity demanded.\n\nc) **Law of DMU**: As consumption increases, MU decreases — consumer buys more only at lower price.\n\nd) **Income Effect**: When price falls, real purchasing power increases — consumer can buy more.\n\ne) **Substitution Effect**: When price rises, consumer switches to cheaper substitutes.\n\nf) Therefore, the demand curve slopes downward from left to right.",
        },
        {
          statement: "Every desire of an individual is a demand.",
          agree: false,
          modelAnswer:
            "**No, I disagree with this statement.**\n\nReasons:\na) In ordinary language, demand means a desire. But in Economics, they are different.\n\nb) Desire means an urge to have something. It has no relation with price, place, and time.\n\nc) In Economics, demand means a desire which is backed by WILLINGNESS and ABILITY to pay.\n\nd) E.g., A poor person may desire a luxury car, but without ability to pay, it is merely a desire, not demand.\n\ne) **Demand = Desire + Ability to pay + Willingness to spend**\n\nf) Therefore, every desire of an individual is NOT demand.",
        },
        {
          statement:
            "When price of Giffen goods fall, the demand for it increases.",
          agree: false,
          modelAnswer:
            "**No, I disagree with this statement.**\n\nReasons:\na) Inferior goods or low quality goods are those whose demand does not rise even if their price falls.\n\nb) At times, demand DECREASES when the price of such commodities fall.\n\nc) Sir Robert Giffen observed this in England regarding bread. When price of bread declined, people didn't buy more. With increased real income, they preferred superior goods like meat.\n\nd) This is known as Giffen's Paradox — an exception to the law of demand.\n\ne) Therefore, when price of Giffen goods falls, demand does NOT increase but DECREASES.",
        },
      ],

      longAnswers: [
        {
          question: "State and explain the law of demand with exceptions.",
          marks: 8,
          modelAnswer:
            "**Law of Demand (Prof. Alfred Marshall, 1890)**\n\n**Statement:** 'Other things being equal, higher the price of a commodity, smaller is the quantity demanded and lower the price, larger is the quantity demanded.'\n\nThere is an INVERSE relationship between price and quantity demanded.\nSymbolically: Dx = f(Px)\n\n**Demand Schedule:**\n| Price (₹) | Qty (kgs) |\n|-----------|----------|\n| 50 | 1 |\n| 40 | 2 |\n| 30 | 3 |\n| 20 | 4 |\n| 10 | 5 |\n\nThe demand curve DD slopes DOWNWARD from left to right.\n\n**Exceptions to the Law of Demand (Shortcode: HI GPS):**\n\n1) **H — Habitual Goods:** Tea, cigarettes are purchased in required quantities even at higher price due to habit.\n\n2) **I — Ignorance:** Sometimes people buy more at high prices due to ignorance about cheaper alternatives.\n\n3) **G — Giffen's Paradox:** Sir Robert Giffen observed that when price of inferior goods (bread) fell, people bought LESS (switched to superior goods like meat).\n\n4) **P — Prestige Goods:** Expensive goods like diamonds, gold are status symbols. Rich people buy MORE at higher prices.\n\n5) **S — Speculation:** If people expect prices to rise further, they buy MORE even at current high prices (e.g., oil, sugar before Diwali).\n\n6) **Price Illusion:** Consumers believe high-priced goods are better quality. Demand increases with price rise.",
        },
        {
          question: "Explain in detail the determinants of demand.",
          marks: 8,
          modelAnswer:
            "**Determinants of Demand:**\n\n1) **Price:** Most important determinant. Inverse relationship — higher price = lower demand.\n\n2) **Income:** Higher income = higher demand for normal goods. For inferior goods, relationship is inverse.\n\n3) **Prices of Substitute Goods:** Direct relationship. If price of sugar rises, demand for jaggery rises.\n\n4) **Price of Complementary Goods:** If price of fuel rises, demand for cars falls.\n\n5) **Nature of Product:** Necessities (medicine) have constant demand regardless of price. Luxuries are price-sensitive.\n\n6) **Size of Population:** Larger population = greater demand for goods.\n\n7) **Future Price Expectations:** If prices expected to rise, consumers buy more NOW.\n\n8) **Advertisement:** Sales promotion changes consumer preferences, increasing demand for advertised products.\n\n9) **Tastes, Habits & Fashions:** Changes in taste/fashion affect demand. New fashion = increased demand.\n\n10) **Level of Taxation:** Higher taxes increase prices, reducing demand for goods.",
        },
      ],
    },
  },

  // ==================== CHAPTER 3B: ELASTICITY OF DEMAND ====================
  chapter3b: {
    title: "Elasticity of Demand",
    weightage: "08 marks (12 with options)",

    shortcodes: [],

    mustKnowConcepts: [
      {
        term: "Elasticity of Demand",
        definition:
          "Degree of responsiveness of quantity demanded to change in its determinants (price, income, etc.).",
      },
      {
        term: "Price Elasticity (Ed)",
        definition:
          "Responsiveness of quantity demanded to change in price. Ed = %ΔQd / %ΔP",
      },
      {
        term: "Elastic Demand",
        definition:
          "Ed > 1. Quantity demanded changes more than proportionately to price change.",
      },
      {
        term: "Inelastic Demand",
        definition:
          "Ed < 1. Quantity demanded changes less than proportionately to price change.",
      },
      {
        term: "Unitary Elastic",
        definition:
          "Ed = 1. Quantity demanded changes exactly proportionately to price change.",
      },
      {
        term: "Perfectly Elastic",
        definition:
          "Ed = ∞ (infinity). Horizontal demand curve. Any quantity at one price.",
      },
      {
        term: "Perfectly Inelastic",
        definition:
          "Ed = 0. Vertical demand curve. Same quantity at all prices.",
      },
      {
        term: "Income Elasticity",
        definition:
          "Responsiveness of demand to change in income. Ey = %ΔQd / %ΔY",
      },
      {
        term: "Cross Elasticity",
        definition:
          "Responsiveness of demand for X to change in price of Y. Ec = %ΔQdx / %ΔPy",
      },
    ],

    formulas: [
      "Price Elasticity: Ed = %ΔQd / %ΔP = (ΔQ/Q) / (ΔP/P)",
      "Ed = (ΔQ/ΔP) × (P/Q)  [Point method]",
      "Ed = (Q2-Q1)/(Q2+Q1) ÷ (P2-P1)/(P2+P1)  [Arc method]",
      "Income Elasticity: Ey = %ΔQd / %ΔY",
      "Cross Elasticity: Ec = %ΔQdx / %ΔPy",
      "Total Expenditure = Price × Quantity",
    ],

    pyqMCQs: [
      {
        q: "Ed > 1 means demand is:",
        options: ["Inelastic", "Elastic", "Unitary", "Zero"],
        correct: 1,
        year: 2024,
      },
      {
        q: "Ed = 0 means:",
        options: ["Elastic", "Perfectly inelastic", "Unitary", "Infinite"],
        correct: 1,
        year: 2024,
      },
      {
        q: "Perfectly elastic demand curve is:",
        options: ["Vertical", "Horizontal", "Downward", "Upward"],
        correct: 1,
        year: 2023,
      },
      {
        q: "Necessities have _____ demand:",
        options: ["Elastic", "Inelastic", "Unitary", "Zero"],
        correct: 1,
        year: 2023,
      },
      {
        q: "Luxuries have _____ demand:",
        options: ["Elastic", "Inelastic", "Unitary", "Zero"],
        correct: 0,
        year: 2022,
      },
      {
        q: "Cross elasticity for substitutes is:",
        options: ["Positive", "Negative", "Zero", "Infinite"],
        correct: 0,
        year: 2022,
      },
      {
        q: "Cross elasticity for complements is:",
        options: ["Positive", "Negative", "Zero", "Infinite"],
        correct: 1,
        year: 2021,
      },
      {
        q: "Income elasticity for inferior goods is:",
        options: ["Positive", "Negative", "Zero", "One"],
        correct: 1,
        year: 2021,
      },
      {
        q: "When Ed = 1, total expenditure:",
        options: ["Rises", "Falls", "Remains constant", "Zero"],
        correct: 2,
        year: 2020,
      },
      {
        q: "Percentage method formula: Ed =",
        options: ["%ΔQ/%ΔP", "%ΔP/%ΔQ", "ΔQ×ΔP", "None"],
        correct: 0,
        year: 2020,
      },
      {
        q: "Point elasticity formula uses:",
        options: ["Two points", "Single point", "Average", "None"],
        correct: 1,
        year: "Imp",
      },
      {
        q: "Arc elasticity uses:",
        options: ["Single point", "Two points on curve", "Slope", "None"],
        correct: 1,
        year: "Imp",
      },
      {
        q: "Ed for diamonds is:",
        options: ["High/Elastic", "Low/Inelastic", "Zero", "Infinite"],
        correct: 0,
        year: "Imp",
      },
      {
        q: "Ed for medicine is:",
        options: ["High/Elastic", "Low/Inelastic", "Zero", "Infinite"],
        correct: 1,
        year: "Imp",
      },
    ],

    pyqShortAnswers: [
      {
        q: "Explain types of Price Elasticity of Demand. (4 marks)",
        year: 2024,
        modelAnswer: `**Types of Price Elasticity of Demand:**

| Type | Value | Curve | Example |
|------|-------|-------|---------|
| **Perfectly Elastic** | Ed = ∞ | Horizontal | Theoretical |
| **Elastic** | Ed > 1 | Flatter | Luxuries, AC |
| **Unitary Elastic** | Ed = 1 | Rectangular hyperbola | - |
| **Inelastic** | Ed < 1 | Steeper | Necessities, salt |
| **Perfectly Inelastic** | Ed = 0 | Vertical | Life-saving drugs |

**Key Points**:
- Elastic: %ΔQ > %ΔP
- Inelastic: %ΔQ < %ΔP
- Unitary: %ΔQ = %ΔP`,
      },
      {
        q: "Explain the factors affecting elasticity of demand. (4 marks)",
        year: 2023,
        modelAnswer: `**Factors Affecting Elasticity of Demand:**

1. **Nature of Commodity**:
   - Necessities: Inelastic (salt, medicine)
   - Luxuries: Elastic (AC, car)

2. **Availability of Substitutes**:
   - More substitutes = More elastic
   - Few substitutes = Inelastic

3. **Proportion of Income Spent**:
   - Small proportion = Inelastic (matchbox)
   - Large proportion = Elastic (house)

4. **Time Period**:
   - Short run = Inelastic
   - Long run = Elastic

5. **Number of Uses**:
   - Many uses = Elastic (electricity)
   - Single use = Inelastic

6. **Habit/Addiction**: Inelastic demand`,
      },
    ],

    pyqLongAnswers: [
      {
        q: "Explain the Price Elasticity of Demand with types, diagrams and formulas. (8 marks)",
        year: 2024,
        modelAnswer: `### Price Elasticity of Demand

#### Introduction
Price elasticity measures the responsiveness of quantity demanded to a change in price.

#### Definition
Ed = Percentage change in Quantity Demanded / Percentage change in Price
Ed = %ΔQd / %ΔP

#### Formulas

**1. Percentage Method:**
Ed = (ΔQ/Q × 100) / (ΔP/P × 100) = (ΔQ/Q) / (ΔP/P)

**2. Point Method:**
Ed = (ΔQ/ΔP) × (P/Q)

**3. Arc Method (for large changes):**
Ed = (Q2-Q1)/(Q2+Q1) ÷ (P2-P1)/(P2+P1)

#### Types of Price Elasticity

| Type | Value | Demand Curve | Total Expenditure |
|------|-------|--------------|-------------------|
| Perfectly Elastic | Ed = ∞ | Horizontal | - |
| Highly Elastic | Ed > 1 | Flatter | TE rises when P falls |
| Unitary Elastic | Ed = 1 | Rectangular Hyperbola | TE constant |
| Inelastic | Ed < 1 | Steeper | TE falls when P falls |
| Perfectly Inelastic | Ed = 0 | Vertical | - |

#### Diagrams
[Each type has distinct curve shape - draw on X-Y axis with P on Y, Q on X]

#### Numerical Example
If Price falls from ₹10 to ₹8 (20% fall)
And Quantity rises from 100 to 150 units (50% rise)
Ed = 50% / 20% = 2.5 (Elastic demand)

#### Importance
1. Pricing decisions by firms
2. Government taxation policy
3. International trade policy
4. Wage determination

#### Conclusion
Price elasticity is a crucial concept for understanding consumer behavior and making business and policy decisions.`,
      },
    ],

    textbookExercises: {
      title: "Chapter 3B - Textbook Exercises with Answers",

      mcqs: [
        {
          q: "Price elasticity of demand on a linear demand curve at the X-axis is _____.",
          statements: ["a) zero", "b) one", "c) infinity", "d) less than one"],
          options: ["zero", "one", "infinity", "less than one"],
          correct: 0,
          answer: "zero",
          explanation:
            "At the X-axis on a linear demand curve, the lower segment is zero and upper segment is the whole curve. Ed = Lower segment / Upper segment = 0. Hence, perfectly inelastic demand (Ed = 0).",
        },
        {
          q: "Price elasticity of demand on a linear demand curve at the Y-axis is equal to _____.",
          statements: [
            "a) zero",
            "b) one",
            "c) infinity",
            "d) greater than one",
          ],
          options: ["zero", "one", "infinity", "greater than one"],
          correct: 2,
          answer: "infinity",
          explanation:
            "At the Y-axis, the upper segment is zero. Ed = Lower segment / Upper segment = AE/0 = ∞. Hence, perfectly elastic demand (Ed = ∞).",
        },
        {
          q: "Demand curve is parallel to X-axis, in the case of _____.",
          statements: [
            "a) perfectly elastic demand",
            "b) perfectly inelastic demand",
            "c) relatively elastic demand",
            "d) relatively inelastic demand",
          ],
          options: [
            "perfectly elastic demand",
            "perfectly inelastic demand",
            "relatively elastic demand",
            "relatively inelastic demand",
          ],
          correct: 0,
          answer: "perfectly elastic demand",
          explanation:
            "A horizontal demand curve (parallel to X-axis) indicates perfectly elastic demand (Ed = ∞). Any slight price change leads to infinite change in quantity demanded.",
        },
        {
          q: "When the percentage change in quantity demanded is more than the percentage change in price, the demand curve is _____.",
          statements: [
            "a) flatter",
            "b) steeper",
            "c) rectangular",
            "d) horizontal",
          ],
          options: ["flatter", "steeper", "rectangular", "horizontal"],
          correct: 0,
          answer: "flatter",
          explanation:
            "When %ΔQ > %ΔP, demand is relatively elastic (Ed > 1). The demand curve is FLATTER because a small price change causes a large quantity change.",
        },
        {
          q: "Ed = 0 in case of _____.",
          statements: [
            "a) luxuries",
            "b) normal goods",
            "c) necessities",
            "d) comforts",
          ],
          options: ["luxuries", "normal goods", "necessities", "comforts"],
          correct: 2,
          answer: "necessities",
          explanation:
            "Perfectly inelastic demand (Ed = 0) applies to extreme necessities like life-saving medicines where demand doesn't change regardless of price.",
        },
      ],

      correlations: [
        {
          q: "Perfectly elastic demand : Ed = ∞ :: Perfectly inelastic demand : ___",
          answer: "Ed = 0",
          explanation:
            "Perfectly elastic demand has infinite elasticity (horizontal curve). Perfectly inelastic demand has zero elasticity (vertical curve) — no change in quantity regardless of price change.",
        },
        {
          q: "Rectangular hyperbola : Unitary elastic demand :: Steeper demand curve : ___",
          answer: "Relatively inelastic demand",
          explanation:
            "Unitary elastic demand (Ed = 1) has a rectangular hyperbola curve. A steeper demand curve indicates relatively inelastic demand (Ed < 1) — large price change causes small quantity change.",
        },
        {
          q: "Pen and ink : Complementary Goods :: Tea and Coffee : ___",
          answer: "Substitutes",
          explanation:
            "Pen and ink are complementary goods (used together). Tea and coffee are substitutes (one can replace the other). Cross elasticity is positive for substitutes and negative for complements.",
        },
        {
          q: "Ratio method : Ed = %ΔQ / %ΔP :: Geometrical Method : ___",
          answer: "Ed = Lower segment / Upper segment",
          explanation:
            "The Ratio/Percentage method measures Ed by dividing percentage change in quantity by percentage change in price. The Geometrical/Point method measures Ed on a linear demand curve as Lower segment ÷ Upper segment.",
        },
      ],

      shortAnswers: [
        {
          question: "Explain the factors influencing elasticity of demand.",
          marks: 4,
          modelAnswer:
            "**Factors Influencing Elasticity of Demand:**\n\n1) **Nature of commodity:** Necessities (food, medicine) = inelastic. Luxuries (car, perfume) = elastic.\n\n2) **Availability of substitutes:** More substitutes = more elastic. No substitutes (salt) = inelastic.\n\n3) **Number of uses:** Single-use goods = less elastic. Multi-use (electricity) = more elastic.\n\n4) **Habits:** Addictive goods (drugs, cigarettes) = inelastic demand.\n\n5) **Durability:** Durable goods (furniture) = elastic. Perishable (milk) = inelastic.\n\n6) **Income of consumer:** High income = inelastic (not affected by price). Low income = elastic.\n\n7) **Time period:** Longer time = more elastic (can find substitutes). Short run = inelastic.\n\n8) **Proportion of expenditure:** Small proportion of income (newspaper) = inelastic. Large proportion = elastic.",
        },
        {
          question:
            "Explain the Total Outlay/Expenditure method of measuring elasticity of demand.",
          marks: 4,
          modelAnswer:
            "**Total Outlay Method (by Prof. Marshall):**\n\nTotal Expenditure = Price × Quantity demanded\n\nCompare total expenditure before and after price change:\n\n**A) Relatively Elastic (Ed > 1):** When price changes, total outlay moves in OPPOSITE direction to price. Price rises → total expenditure falls (and vice versa).\n\n**B) Unitary Elastic (Ed = 1):** When price changes, total outlay remains CONSTANT. Total expenditure does not change regardless of price change.\n\n**C) Relatively Inelastic (Ed < 1):** When price changes, total outlay moves in SAME direction as price. Price rises → total expenditure also rises.\n\nExample:\n| | Price | Qty | Total Expenditure | Ed |\n|---|---|---|---|---|\n| A | ₹10→₹20 | 6→5 | ₹60→₹100 (↑) | Ed > 1 |\n| B | ₹30→₹40 | 4→3 | ₹120→₹120 (=) | Ed = 1 |\n| C | ₹50→₹60 | 2→1 | ₹100→₹60 (↓) | Ed < 1 |",
        },
        {
          question: "Explain the importance of elasticity of demand.",
          marks: 4,
          modelAnswer:
            "**Importance of Elasticity of Demand:**\n\n1) **Importance to Producer:** If demand is inelastic, producer fixes higher price. If elastic, lower price. Also useful for monopolist to practice price discrimination.\n\n2) **Importance to Government:** Taxation policy is based on elasticity. Commodities with inelastic demand are taxed more (won't affect demand much).\n\n3) **Factor Pricing:** Factors with inelastic demand can command higher prices. Workers can ask for higher wages if demand for their product is inelastic.\n\n4) **Foreign Trade:** Countries exporting commodities with inelastic demand can raise prices. E.g., OPEC raised oil prices. Useful for export-import policy.\n\n5) **Public Utilities:** Railways with inelastic demand — govt may subsidize or nationalize to prevent consumer exploitation.\n\n6) **Price Discrimination:** A monopolist can charge different prices in different markets based on elasticity of demand in each market.",
        },
      ],

      agreeDisagree: [
        {
          statement: "Slope of relatively elastic demand curve is steeper.",
          agree: false,
          modelAnswer:
            "**No, I disagree with this statement.**\n\nReasons:\na) Relatively elastic demand (Ed > 1) has a FLATTER curve, not steeper.\n\nb) In relatively elastic demand, the percentage change in quantity demanded is GREATER than the percentage change in price. So even a small price change causes a large quantity change — making the curve flatter.\n\nc) It is RELATIVELY INELASTIC demand (Ed < 1) that has a steeper curve — large price changes cause only small changes in quantity demanded.\n\nd) Therefore, the slope of relatively elastic demand curve is flatter, NOT steeper.",
        },
      ],

      longAnswers: [
        {
          question:
            "Explain the Ratio or Percentage method of measuring price elasticity of demand.",
          marks: 8,
          modelAnswer:
            "**Ratio/Percentage Method (by Prof. Marshall)**\n\nThe elasticity of demand is measured by dividing the percentage change in quantity demanded by the percentage change in price. Also known as the Arithmetic method.\n\n**Formula:**\nEd = %ΔQ / %ΔP\nEd = (ΔQ/Q) × (P/ΔP)\n\nWhere:\n• ΔQ = New quantity − Original quantity\n• ΔP = New price − Original price\n• Q = Original quantity demanded\n• P = Original price\n\n**Numerical Example:**\n| Price (₹) | Qty (kg) |\n|-----------|----------|\n| 20 | 10 |\n| 25 | 9 |\n\nP = 20, ΔP = 5, Q = 10, ΔQ = 1\n\nEd = (1/10) × (20/5) = 0.1 × 4 = 0.4\nEd = 0.4 < 1\n\n**Interpretation:** Since Ed < 1, the demand is relatively inelastic. A 25% change in price caused only a 10% change in quantity demanded.\n\n**Types based on Ed value:**\n• Ed = 0 → Perfectly inelastic\n• Ed < 1 → Relatively inelastic\n• Ed = 1 → Unitary elastic\n• Ed > 1 → Relatively elastic\n• Ed = ∞ → Perfectly elastic",
        },
      ],
    },
  },

  // ==================== CHAPTER 4: SUPPLY ANALYSIS ====================
  chapter4: {
    title: "Supply Analysis",
    weightage: "07 marks (10 with options)",

    mustKnowConcepts: [
      {
        term: "Supply",
        definition:
          "Quantity of a commodity a producer is willing and able to sell at a given price during a given period.",
      },
      {
        term: "Law of Supply",
        definition:
          "Other things being equal, quantity supplied increases when price rises and vice versa. Direct relationship.",
      },
      {
        term: "Supply Schedule",
        definition:
          "Table showing relationship between price and quantity supplied.",
      },
      {
        term: "Supply Curve",
        definition:
          "Graphical representation of supply schedule. Slopes upward left to right.",
      },
      {
        term: "Extension of Supply",
        definition:
          "Increase in quantity supplied due to rise in price. Movement along supply curve.",
      },
      {
        term: "Contraction of Supply",
        definition:
          "Decrease in quantity supplied due to fall in price. Movement along supply curve.",
      },
      {
        term: "Increase in Supply",
        definition:
          "More quantity supplied at same price. Shift of supply curve to right.",
      },
      {
        term: "Decrease in Supply",
        definition:
          "Less quantity supplied at same price. Shift of supply curve to left.",
      },
      {
        term: "Elasticity of Supply",
        definition:
          "Responsiveness of quantity supplied to change in price. Es = %ΔQs / %ΔP",
      },
    ],

    pyqMCQs: [
      {
        q: "Law of Supply shows _____ relationship:",
        options: ["Inverse", "Direct", "No relation", "Negative"],
        correct: 1,
        year: 2024,
      },
      {
        q: "Supply curve slopes:",
        options: ["Downward", "Upward", "Horizontal", "Vertical"],
        correct: 1,
        year: 2024,
      },
      {
        q: "Movement along supply curve is called:",
        options: ["Shift", "Extension/Contraction", "Increase", "None"],
        correct: 1,
        year: 2023,
      },
      {
        q: "Supply of perishable goods is:",
        options: ["Elastic", "Inelastic", "Unitary", "Infinite"],
        correct: 1,
        year: 2023,
      },
      {
        q: "When price rises, supply:",
        options: ["Falls", "Rises", "Unchanged", "Zero"],
        correct: 1,
        year: 2022,
      },
      {
        q: "Elasticity of supply formula:",
        options: ["%ΔQs/%ΔP", "%ΔP/%ΔQs", "ΔQs×ΔP", "None"],
        correct: 0,
        year: 2022,
      },
      {
        q: "Perfectly elastic supply curve is:",
        options: ["Vertical", "Horizontal", "Upward", "Downward"],
        correct: 1,
        year: 2021,
      },
      {
        q: "Factors affecting supply include:",
        options: [
          "Cost of production",
          "Technology",
          "Government policy",
          "All",
        ],
        correct: 3,
        year: 2021,
      },
      {
        q: "Exception to Law of Supply:",
        options: ["Agricultural goods", "Luxuries", "Necessities", "None"],
        correct: 0,
        year: 2020,
      },
      {
        q: "Short run supply is:",
        options: ["More elastic", "Less elastic", "Unitary", "Zero"],
        correct: 1,
        year: 2020,
      },
    ],

    pyqShortAnswers: [
      {
        q: "State the Law of Supply with assumptions. (4 marks)",
        year: 2024,
        modelAnswer: `**Law of Supply:**

1. **Statement**: "Other things being equal, when price of a commodity rises, quantity supplied rises, and when price falls, quantity supplied falls."

2. **Relationship**: Direct/Positive relationship between price and quantity supplied.

3. **Assumptions**:
   - Cost of production constant
   - Technology unchanged
   - Prices of factors constant
   - Government policy unchanged
   - No natural calamities
   - No change in goals of firm

4. **Expression**: Qs = f(P), where Qs = Quantity supplied, P = Price

5. **Exceptions**: Agricultural products, Labor supply, Artistic goods`,
      },
    ],

    textbookExercises: {
      title: "Chapter 4 - Textbook Exercises with Answers",

      mcqs: [
        {
          q: "When supply curve is upward sloping, its slope is _____.",
          statements: [
            "a) positive",
            "b) negative",
            "c) first positive then negative",
            "d) zero",
          ],
          options: [
            "positive",
            "negative",
            "first positive then negative",
            "zero",
          ],
          correct: 0,
          answer: "positive",
          explanation:
            "An upward sloping supply curve shows a direct relationship between price and quantity supplied. As price increases, quantity supplied increases. This gives the curve a positive slope.",
        },
        {
          q: "An upward movement along the same supply curve shows _____.",
          statements: [
            "a) contraction of supply",
            "b) decrease in supply",
            "c) expansion of supply",
            "d) increase in supply",
          ],
          options: [
            "contraction of supply",
            "decrease in supply",
            "expansion of supply",
            "increase in supply",
          ],
          correct: 2,
          answer: "expansion of supply",
          explanation:
            "An upward movement on the same supply curve means price has risen and more quantity is supplied. This is called Expansion of supply — movement along the same curve due to price change.",
        },
        {
          q: "A rightward shift in supply curve shows _____.",
          statements: [
            "a) contraction of supply",
            "b) decrease in supply",
            "c) expansion of supply",
            "d) increase in supply",
          ],
          options: [
            "contraction of supply",
            "decrease in supply",
            "expansion of supply",
            "increase in supply",
          ],
          correct: 3,
          answer: "increase in supply",
          explanation:
            "A rightward shift of the entire supply curve indicates Increase in supply — more is supplied at the same price due to favorable changes in other factors (not price). Expansion is movement along the same curve.",
        },
        {
          q: "Other factors remaining constant, when less quantity is supplied only due to a fall in price, it shows _____.",
          statements: [
            "a) contraction of supply",
            "b) decrease in supply",
            "c) expansion of supply",
            "d) increase in supply",
          ],
          options: [
            "contraction of supply",
            "decrease in supply",
            "expansion of supply",
            "increase in supply",
          ],
          correct: 0,
          answer: "contraction of supply",
          explanation:
            "When less is supplied due to fall in price alone (other factors constant), it is Contraction of supply — a downward movement on the same supply curve.",
        },
        {
          q: "Net addition made to the total revenue by selling an extra unit of a commodity is _____.",
          statements: [
            "a) total revenue",
            "b) marginal revenue",
            "c) average revenue",
            "d) marginal cost",
          ],
          options: [
            "total revenue",
            "marginal revenue",
            "average revenue",
            "marginal cost",
          ],
          correct: 1,
          answer: "marginal revenue",
          explanation:
            "Marginal Revenue (MR) is the net addition to total revenue from selling one more unit. Formula: MRn = TRn − TRn−1.",
        },
      ],

      correlations: [
        {
          q: "Expansion of supply : Price rises :: Contraction of supply : ___",
          answer: "Price falls",
          explanation:
            "Expansion of supply occurs when price rises (more supplied). Contraction of supply occurs when price falls (less supplied). Both are movements on the same supply curve.",
        },
        {
          q: "Total revenue : P × Q :: Average revenue : ___",
          answer: "TR / TQ",
          explanation:
            "Total Revenue = Price × Quantity. Average Revenue = Total Revenue / Total Quantity. AR is the revenue per unit of output sold.",
        },
        {
          q: "Total cost : TFC + TVC :: Average cost : ___",
          answer: "TC / TQ",
          explanation:
            "Total Cost = Total Fixed Cost + Total Variable Cost. Average Cost = Total Cost / Total Quantity. AC is the cost of production per unit of output.",
        },
        {
          q: "Demand curve : Downward :: Supply curve : ___",
          answer: "Upward",
          explanation:
            "Demand curve slopes downward (inverse relationship — higher price, lower demand). Supply curve slopes upward (direct relationship — higher price, higher supply).",
        },
        {
          q: "Price constant : Change in supply :: Other factors constant : ___",
          answer: "Variation of Supply",
          explanation:
            "Change in supply = shift of curve when price is constant but other factors change. Variation in supply = movement along the curve when only price changes (other factors constant).",
        },
      ],

      conceptIdentification: [
        {
          statement: "Cost incurred on fixed factors like land, machinery.",
          concept: "Fixed Cost",
          explanation:
            "**Fixed Cost (TFC)**\n\nFixed costs are those expenses incurred on fixed factors of production such as land, machinery, buildings, etc.\n\n• They remain constant regardless of the level of output.\n• Even if output is zero, fixed costs still exist.\n• Examples: rent, insurance premiums, salary of permanent staff.",
        },
        {
          statement: "Cost incurred per unit of output.",
          concept: "Average Cost",
          explanation:
            "**Average Cost (AC)**\n\nAverage cost is the cost of production per unit of output.\n\n• Formula: AC = TC / TQ (Total Cost ÷ Total Quantity)\n• It helps the firm decide the selling price of its product.\n• AC first falls, reaches a minimum, and then rises — forming a U-shaped curve.",
        },
        {
          statement: "Net addition made to total cost of production.",
          concept: "Marginal Cost",
          explanation:
            "**Marginal Cost (MC)**\n\nMarginal cost is the addition to total cost when one more unit of output is produced.\n\n• Formula: MCn = TCn − TCn−1\n• It helps in decision-making — whether to produce an additional unit.\n• MC curve is U-shaped.",
        },
        {
          statement: "Revenue per unit of output sold.",
          concept: "Average Revenue",
          explanation:
            "**Average Revenue (AR)**\n\nAverage revenue is the revenue earned per unit of output sold.\n\n• Formula: AR = TR / TQ (Total Revenue ÷ Total Quantity)\n• AR is essentially the price of the commodity.\n• In perfect competition, AR = MR = Price.",
        },
      ],

      shortAnswers: [
        {
          question: "Explain the concept of total cost and total revenue.",
          marks: 4,
          modelAnswer:
            "**Total Cost (TC):**\nTotal cost is the total expenditure incurred by a firm on the factors of production for producing goods and services.\n• TC = TFC + TVC (Total Fixed Cost + Total Variable Cost)\n• TFC = expenses on fixed factors (land, machinery) — remain constant\n• TVC = expenses on variable factors (labour, raw material) — change with output\n\n**Total Revenue (TR):**\nTotal revenue is the total sales proceeds of a firm by selling a commodity at a given price.\n• TR = Price × Quantity\n• Example: If a firm sells 15 units at ₹200 per unit, TR = 200 × 15 = ₹3,000",
        },
        {
          question: "Explain the determinants of supply.",
          marks: 4,
          modelAnswer:
            "**Determinants of Supply:**\n\n1) **Price of commodity:** Direct relationship — higher price, more supply.\n2) **State of technology:** Improved technology → lower cost → more supply.\n3) **Cost of Production:** Higher factor prices → higher cost → less supply.\n4) **Infrastructure:** Transport, communication, power — shortage decreases supply.\n5) **Government policy:** Taxation, subsidies, industrial policies affect supply.\n6) **Natural conditions:** Agriculture depends on monsoon/climate.\n7) **Future price expectations:** Expected price rise → withhold stock → reduce current supply.\n8) **Other factors:** Nature of market, relative prices, exports/imports, availability of factors.",
        },
      ],

      agreeDisagree: [
        {
          statement:
            "There is a direct relationship between price and quantity supplied.",
          agree: true,
          modelAnswer:
            "**Yes, I agree with this statement.**\n\nReasons:\na) The law of supply states: 'Other things being constant, higher the price, more is the quantity supplied and lower the price, less is the quantity supplied.'\n\nb) In simple words: higher price = higher supply, lower price = lower supply.\n\nc) The supply curve graphically represents this relationship. It has a positive slope — slopes upward from left to right.\n\nd) This is because at higher prices, producers earn more profit and are motivated to supply more.\n\ne) Therefore, there is a direct relationship between price and quantity supplied.",
        },
        {
          statement: "Supply curve of labour is backward bending.",
          agree: true,
          modelAnswer:
            "**Yes, I agree with this statement.**\n\nReasons:\na) Labour supply is the total number of hours that workers work at a given wage rate.\n\nb) Initially, as wage rate rises, supply of labour increases. So the supply curve slopes upward.\n\nc) But after a certain point, supply of labour FALLS with a further rise in wage rate. The supply curve bends backward.\n\nd) This is because the worker would prefer leisure to work after receiving a sufficiently high wage.\n\ne) Thus, the supply curve of labour is backward bending — it first slopes upward and then bends backward.",
        },
        {
          statement: "There are no exceptions to the law of supply.",
          agree: false,
          modelAnswer:
            "**No, I disagree with this statement.**\n\nReasons:\na) There ARE exceptions to the law of supply:\n\nb) **Labour supply**: After a certain wage level, workers prefer leisure over work. Supply curve bends backward.\n\nc) **Agricultural goods**: Production depends on seasons and climate. Supply cannot increase even at higher prices if monsoon fails.\n\nd) **Urgent need for cash**: Seller may sell at lower price if urgently needing money.\n\ne) **Perishable goods**: Supplier sells more at lower prices to avoid spoilage (vegetables, eggs).\n\nf) **Rare goods**: Supply of rare paintings, antiques, old coins cannot increase regardless of price.\n\nTherefore, there ARE exceptions to the law of supply.",
        },
      ],

      longAnswers: [
        {
          question: "State and explain the Law of Supply with exceptions.",
          marks: 8,
          modelAnswer:
            "**Law of Supply**\n\nIntroduced by Prof. Alfred Marshall in 'Principles of Economics' (1890).\n\n**Statement:** 'Other things being constant, higher the price of a commodity, more is the quantity supplied and lower the price, less is the quantity supplied.'\n\nThere is a direct relationship between price and quantity supplied.\nSymbolically: Sx = f(Px)\n\n**Supply Schedule:**\n| Price (₹) | Supply (kgs) |\n|-----------|-------------|\n| 10 | 100 |\n| 20 | 200 |\n| 30 | 300 |\n| 40 | 400 |\n| 50 | 500 |\n\nThe supply curve SS slopes upward from left to right with a positive slope.\n\n**Exceptions to the Law of Supply:**\n\n1) **Supply of Labour:** As wage rate rises, supply of labour increases initially. But after a certain point, workers prefer leisure over work. Supply falls with further wage rise — backward bending supply curve.\n\n2) **Agricultural Goods:** Production depends on seasons and climate. Supply cannot increase at higher price if monsoon fails.\n\n3) **Urgent Need for Cash:** Seller may sell at a price below market price if urgently needing money.\n\n4) **Perishable Goods:** Supplier sells more at lower prices to avoid spoilage. E.g., vegetables, eggs.\n\n5) **Rare Goods:** Supply of rare paintings, antiques, old coins cannot increase regardless of price.",
        },
      ],
    },
  },

  // ==================== CHAPTER 5: FORMS OF MARKET ====================
  chapter5: {
    title: "Forms of Market",
    weightage: "07 marks (10 with options)",

    shortcodes: [
      {
        code: "PLANS FREE HO",
        topic: "Features of Perfect Competition",
        breakdown:
          "Perfect knowledge • Large buyers/sellers • AR=MR=Price • No transport cost • Single price • Free entry/exit • Homogeneous products • Other assumptions",
      },
      {
        code: "BP SCAN",
        topic: "Features of Monopoly",
        breakdown:
          "Barriers to entry • Price maker • Single seller • Control over supply • AR>MR • No close substitute • No firm-industry distinction",
      },
      {
        code: "U arE FAIR",
        topic: "Features of Oligopoly",
        breakdown:
          "Uncertainty • advertising • Entry barriers • Few sellers • Automobile industry • Interdependence • Rivalry",
      },
      {
        code: "FAIRLY FREE PC'S",
        topic: "Features of Monopolistic Competition",
        breakdown:
          "Free entry/exit • AR>MR • Independent decisions • Realistic • Large number • Yes to selling cost • Product differentiation • Close substitutes",
      },
    ],

    mustKnowConcepts: [
      {
        term: "Market",
        definition:
          "Arrangement where buyers and sellers come into contact for exchange of goods and services.",
      },
      {
        term: "Perfect Competition",
        definition:
          "Large number of buyers and sellers, homogeneous product, free entry-exit, perfect knowledge.",
      },
      {
        term: "Monopoly",
        definition:
          "Single seller, no close substitutes, barriers to entry. Price maker.",
      },
      {
        term: "Monopolistic Competition",
        definition:
          "Many sellers, differentiated products, free entry-exit. Product differentiation.",
      },
      {
        term: "Oligopoly",
        definition:
          "Few large sellers, interdependence, barriers to entry. May be collusive or competitive.",
      },
      {
        term: "Price Maker",
        definition: "Firm that can influence market price (Monopoly).",
      },
      {
        term: "Price Taker",
        definition: "Firm that accepts market price (Perfect Competition).",
      },
    ],

    pyqMCQs: [
      {
        q: "Perfect competition has _____ sellers:",
        options: ["One", "Few", "Many", "Two"],
        correct: 2,
        year: 2024,
      },
      {
        q: "Monopoly has _____ seller:",
        options: ["One", "Few", "Many", "Two"],
        correct: 0,
        year: 2024,
      },
      {
        q: "In perfect competition, product is:",
        options: ["Differentiated", "Homogeneous", "Branded", "None"],
        correct: 1,
        year: 2023,
      },
      {
        q: "Monopolist is a:",
        options: ["Price taker", "Price maker", "Both", "None"],
        correct: 1,
        year: 2023,
      },
      {
        q: "Product differentiation is in:",
        options: [
          "Perfect competition",
          "Monopolistic competition",
          "Monopoly",
          "None",
        ],
        correct: 1,
        year: 2022,
      },
      {
        q: "Oligopoly has _____ sellers:",
        options: ["One", "Few", "Many", "Infinite"],
        correct: 1,
        year: 2022,
      },
      {
        q: "Example of monopoly:",
        options: ["Railways", "Soap", "Shoes", "Rice"],
        correct: 0,
        year: 2021,
      },
      {
        q: "Example of monopolistic competition:",
        options: ["Railways", "Toothpaste", "Electricity", "Post office"],
        correct: 1,
        year: 2021,
      },
      {
        q: "AR = MR = Price in:",
        options: ["Monopoly", "Perfect competition", "Oligopoly", "None"],
        correct: 1,
        year: 2020,
      },
      {
        q: "Demand curve in monopoly is:",
        options: ["Horizontal", "Downward sloping", "Vertical", "Upward"],
        correct: 1,
        year: 2020,
      },
      {
        q: "Kinked demand curve is in:",
        options: ["Perfect competition", "Monopoly", "Oligopoly", "None"],
        correct: 2,
        year: "Imp",
      },
      {
        q: "Selling cost is highest in:",
        options: [
          "Perfect competition",
          "Monopolistic competition",
          "Monopoly",
          "None",
        ],
        correct: 1,
        year: "Imp",
      },
    ],

    pyqShortAnswers: [
      {
        q: "Distinguish between Perfect Competition and Monopoly. (4 marks)",
        year: 2024,
        modelAnswer: `**Perfect Competition vs Monopoly:**

| Aspect | Perfect Competition | Monopoly |
|--------|---------------------|----------|
| **Sellers** | Many | One |
| **Product** | Homogeneous | Unique (no substitutes) |
| **Entry-Exit** | Free | Barriers exist |
| **Price** | Market determined | Firm decides (Price maker) |
| **Demand Curve** | Horizontal | Downward sloping |
| **AR and MR** | AR = MR | AR > MR |
| **Example** | Vegetable market | Railways, Electricity |`,
      },
      {
        q: "Explain features of Monopolistic Competition. (4 marks)",
        year: 2023,
        modelAnswer: `**Features of Monopolistic Competition:**

1. **Many Sellers**: Large number of firms selling similar but differentiated products.

2. **Product Differentiation**: Each firm's product is slightly different (brand, quality, packaging).

3. **Free Entry and Exit**: New firms can enter and existing can leave.

4. **Selling Costs**: Heavy advertising and promotion expenses.

5. **Downward Sloping Demand**: Each firm faces downward sloping demand curve.

6. **Partial Control over Price**: Some control due to product differentiation.

7. **Examples**: Toothpaste (Colgate, Pepsodent), Soap (Lux, Dove), Restaurants`,
      },
    ],

    textbookExercises: {
      title: "Chapter 5 - Textbook Exercises with Answers",
      mcqs: [
        {
          q: "In an economic sense, market includes following activities:\na) The place where goods are sold and purchased\nb) An arrangement through which buyers and sellers come in close contact with each other directly or indirectly\nc) A shop where goods are sold\nd) All of the above",
          options: ["a and b", "b and c", "a, b and c", "only d"],
          correct: 0,
          answer: "a and b",
          explanation:
            "In economics, a market is not just a physical place — it is an arrangement where buyers and sellers interact directly or indirectly for exchange of goods and services.",
        },
        {
          q: "Classification of markets on the basis of place:\na) Local market, National market, International market\nb) Very short period market, Local market, National market\nc) Short period market, National market, International market\nd) Local market, National market, Short period market",
          options: ["a, b and c", "b, c and d", "only a", "a and d"],
          correct: 2,
          answer: "only a",
          explanation:
            "Markets classified on the basis of PLACE are: Local (village/town), National (within country), and International (between countries). The others mix up time-period classification.",
        },
        {
          q: "Homogeneous product is a feature of this market:\na) Monopoly\nb) Monopolistic competition\nc) Perfect competition\nd) Oligopoly",
          options: ["c and d", "a, b and c", "a, c and d", "only c"],
          correct: 3,
          answer: "only c",
          explanation:
            "Homogeneous (identical) products are a key feature of Perfect Competition only. In monopolistic competition, products are differentiated; in monopoly, there's only one product.",
        },
        {
          q: "Under Perfect competition, sellers are:\na) Price makers\nb) Price takers\nc) Price discriminators\nd) None of these",
          options: ["a, b and c", "only b", "only c", "a and c"],
          correct: 1,
          answer: "only b",
          explanation:
            "In perfect competition, price is determined by market forces of demand and supply. Individual sellers have no power to influence the price — they must accept (take) the market price.",
        },
      ],
      correlations: [
        {
          q: "Perfect competition : Free entry and exit :: Monopoly : ___",
          answer: "Barriers to entry",
        },
        {
          q: "Price taker : Perfect competition :: Price maker : ___",
          answer: "Monopoly",
        },
        {
          q: "Single price : Perfect competition :: Discriminated prices : ___",
          answer: "Monopoly",
        },
      ],
      conceptIdentification: [
        {
          scenario: "The market where there are few sellers.",
          concept: "Oligopoly",
          explanation:
            "Oligopoly is derived from Greek 'Oligo' (few) + 'poly' (sellers). It is a market with a few dominant firms. Examples: Mobile service providers, cement companies.",
        },
        {
          scenario: "The point where demand and supply curve intersect.",
          concept: "Equilibrium Point",
          explanation:
            "The equilibrium point is where quantity demanded equals quantity supplied. The price at this point is the equilibrium price, determined by the interaction of market forces.",
        },
        {
          scenario: "The cost incurred by the firm to promote sales.",
          concept: "Selling Cost",
          explanation:
            "Selling cost includes expenditure on advertisements, TV broadcasts, hoardings, free gifts, window display etc. It is a special feature of Monopolistic Competition.",
        },
        {
          scenario: "Number of firms producing identical products.",
          concept: "Industry",
          explanation:
            "An industry is a group of firms producing identical (homogeneous) products. Chamberlin distinguished this from 'Group' which produces differentiated but related products.",
        },
        {
          scenario:
            "Charging different prices to different consumers for the same product.",
          concept: "Price Discrimination",
          explanation:
            "Price discrimination is a feature of Monopoly. The monopolist charges different prices based on time, place, or consumer type. Example: Railway tickets at concessional rates for students and senior citizens.",
        },
      ],
      shortAnswers: [
        {
          q: "Explain the features of Oligopoly.",
          answer:
            "Oligopoly (Greek: Oligo = few, poly = sellers) is a market with few dominant firms.\n\nFeatures:\n1) Few firms/sellers: A few firms dominate and have considerable control over price.\n2) Interdependence: Each firm watches rivals' actions. Price changes by one are followed by others.\n3) Advertising: Aggressive advertising to capture larger market share.\n4) Entry barriers: Government licence, patents etc. restrict entry.\n5) Lack of uniformity: Firms differ in size — some small, others large.\n6) Uncertainty: Rivals may cooperate or compete — behaviour is unpredictable.",
        },
        {
          q: "Explain the types of Monopoly.",
          answer:
            "Types of Monopoly:\n1) Private Monopoly: Controlled by individual/private body. E.g., Tata Group.\n2) Public Monopoly: Owned by Government, welfare-oriented. E.g., Indian Railways.\n3) Legal Monopoly: Created by patents, trademarks, copyrights. E.g., Amul.\n4) Natural Monopoly: Based on natural conditions — climate, location. E.g., Wheat from Punjab.\n5) Simple Monopoly: Uniform price charged to all buyers.\n6) Discriminating Monopoly: Different prices to different buyers. E.g., Doctor fees.\n7) Voluntary Monopoly: Firms voluntarily form a group. E.g., OPEC.",
        },
      ],
      oddOneOut: [
        {
          q: "Selling cost: Free gifts, Advertisement hoardings, Window display, Patents",
          answer: "Patents",
          explanation:
            "Patents are a legal barrier to entry (feature of monopoly), not a selling cost. Free gifts, advertisement hoardings, and window display are all methods of promoting sales.",
        },
        {
          q: "Market structure on the basis of competition: Monopoly, Oligopoly, Very Short Period market, Perfect competition",
          answer: "Very Short Period market",
          explanation:
            "Very Short Period market is classification based on TIME, not competition. Monopoly, Oligopoly, and Perfect Competition are classified based on competition.",
        },
        {
          q: "Features of monopoly: Price maker, Entry barriers, Many sellers, Lack of substitutes",
          answer: "Many sellers",
          explanation:
            "Monopoly has only ONE seller (single seller). Many sellers is a feature of Perfect Competition, not Monopoly.",
        },
        {
          q: "Legal monopoly: Patent, OPEC, Copyright, Trademark",
          answer: "OPEC",
          explanation:
            "OPEC is a Voluntary Monopoly (group of petroleum exporting countries). Patent, Copyright, and Trademark are all forms of legal monopoly.",
        },
      ],
      longAnswers: [
        {
          q: "Explain the meaning of Perfect Competition with its features. (Shortcode: PLANS FREE HO)",
          shortcode: "PLANS FREE HO",
          answer:
            "Perfect competition is an ideal and imaginary market concept. According to Mrs. Joan Robinson, 'Perfect competition prevails when the demand for the output of each producer is perfectly elastic.'\n\nFeatures (PLANS FREE HO):\n1) Perfect knowledge: Buyers and sellers have complete market knowledge about price, quality, source of supply.\n2) Large number of sellers and buyers: Each forms a negligible part. Sellers are price takers.\n3) AR=MR=Price: Average revenue equals marginal revenue equals market price.\n4) No transport cost: Ensures uniform pricing.\n5) Single price: One uniform price determined by demand and supply.\n6) Free entry and exit: No barriers — firms enter for profit, exit to avoid loss.\n7) Homogeneous product: Products are identical in size, design, colour, taste.\n8) Other assumptions: Perfect mobility of factors, no government intervention (laissez-faire).",
        },
        {
          q: "Explain the meaning of Monopolistic Competition with its features. (Shortcode: FAIRLY FREE PC'S)",
          shortcode: "FAIRLY FREE PC'S",
          answer:
            "Monopolistic competition is very realistic in nature. Prof. E.H. Chamberlin coined this concept in his book 'Theory of Monopolistic Competition' (1933).\n\nFeatures (FAIRLY FREE PC'S):\n1) Fairly large number of sellers: Many firms but less than perfect competition.\n2) Fairly large number of buyers: No single buyer can influence price.\n3) Product differentiation: Main feature — each firm's product differs slightly (brand, quality, packaging). E.g., mobile handsets, cold drinks.\n4) Free entry and exit: New firms can enter if profit exists, exit if loss.\n5) Selling Cost: Expenditure on advertisements, hoardings, free gifts, exhibitions, window display to increase sales. Peculiar to this market.\n6) Close substitutes: Goods are close substitutes. E.g., different brands of soap.\n7) Concept of Group: Chamberlin replaced 'Industry' with 'Group' — firms producing differentiated but related products.",
        },
        {
          q: "Explain the meaning of Monopoly with its features. (Shortcode: BP SCAN)",
          shortcode: "BP SCAN",
          answer:
            "The term monopoly is derived from Greek 'Mono' (single) + 'poly' (seller). It is a market with only one seller who controls the entire supply for a product with no close substitute.\n\nFeatures (BP SCAN):\n1) Barriers to entry: Legal, natural, technological barriers restrict rivals.\n2) Price maker: Monopolist fixes price as he controls whole market supply.\n3) Single seller: Only one producer/seller, but many buyers.\n4) Complete control over supply: Sole producer has complete hold over market.\n5) AR>MR: Average revenue is always greater than marginal revenue.\n6) No close substitute: Buyers have no choice — buy from monopolist or go without. Cross elasticity is zero or negative.\n7) No distinction between firm and industry: The monopoly firm itself is the industry.\n8) Price discrimination: Different prices to different consumers for same product. E.g., concessional railway tickets for students and senior citizens.",
        },
      ],
    },
  },

  // ==================== CHAPTER 6: INDEX NUMBERS ====================
  chapter6: {
    title: "Index Numbers",
    weightage: "08 marks (12 with options)",

    shortcodes: [
      {
        code: "SUM BC",
        topic: "Features of Index Numbers",
        breakdown:
          "Specialized averages • Universal utility • Measure relative changes • Based on samples • Comparative study",
      },
    ],

    mustKnowConcepts: [
      {
        term: "Index Number",
        definition:
          "Statistical device to measure changes in variables over time or space. Expressed as percentage.",
      },
      {
        term: "Base Year",
        definition: "Reference year for comparison. Index = 100 for base year.",
      },
      {
        term: "Current Year",
        definition: "Year for which index is calculated.",
      },
      {
        term: "Simple Index",
        definition: "Index using single item. Price Relative = (P1/P0) × 100",
      },
      {
        term: "Weighted Index",
        definition:
          "Index giving different weights to items based on importance.",
      },
      {
        term: "CPI",
        definition:
          "Consumer Price Index - measures changes in retail prices. Used for measuring inflation.",
      },
      {
        term: "WPI",
        definition:
          "Wholesale Price Index - measures changes in wholesale prices.",
      },
    ],

    formulas: [
      "Simple Price Index = (P1/P0) × 100",
      "Simple Quantity Index = (Q1/Q0) × 100",
      "Laspeyre's Index = (ΣP1Q0/ΣP0Q0) × 100  [Base year quantities]",
      "Paasche's Index = (ΣP1Q1/ΣP0Q1) × 100  [Current year quantities]",
      "Fisher's Ideal Index = √(Laspeyre's × Paasche's)",
    ],

    pyqMCQs: [
      {
        q: "Index number for base year is:",
        options: ["0", "1", "100", "None"],
        correct: 2,
        year: 2024,
      },
      {
        q: "CPI measures:",
        options: ["Wholesale prices", "Retail prices", "Stock prices", "None"],
        correct: 1,
        year: 2024,
      },
      {
        q: "Laspeyre's index uses quantities of:",
        options: ["Base year", "Current year", "Average", "None"],
        correct: 0,
        year: 2023,
      },
      {
        q: "Paasche's index uses quantities of:",
        options: ["Base year", "Current year", "Average", "None"],
        correct: 1,
        year: 2023,
      },
      {
        q: "Fisher's index is _____ of Laspeyre's and Paasche's:",
        options: ["Sum", "Difference", "Geometric mean", "Product"],
        correct: 2,
        year: 2022,
      },
      {
        q: "Index numbers are expressed in:",
        options: ["Rupees", "Percentage", "Ratio", "None"],
        correct: 1,
        year: 2022,
      },
      {
        q: "WPI measures:",
        options: ["Retail prices", "Wholesale prices", "Both", "None"],
        correct: 1,
        year: 2021,
      },
      {
        q: "Index number is a _____ measure:",
        options: ["Absolute", "Relative", "Fixed", "None"],
        correct: 1,
        year: 2021,
      },
      {
        q: "Price relative formula:",
        options: ["P1/P0", "(P1/P0)×100", "P0/P1", "P1×P0"],
        correct: 1,
        year: 2020,
      },
      {
        q: "Fisher's index is called:",
        options: ["Ideal index", "Simple index", "Base index", "None"],
        correct: 0,
        year: 2020,
      },
    ],

    pyqShortAnswers: [
      {
        q: "Explain the features of Index Numbers. (4 marks)",
        year: 2024,
        modelAnswer: `**Features of Index Numbers:**

1. **Relative Measure**: Expressed as percentage, comparing to base year.

2. **Specialized Average**: Not simple average, but weighted average considering importance.

3. **Measure of Change**: Shows changes in variables over time or space.

4. **Comparison Tool**: Helps compare economic conditions of different periods.

5. **Base Year**: Reference point where index = 100.

6. **Uses**: Measuring inflation, cost of living, economic planning, wage revision.`,
      },
    ],

    textbookExercises: {
      title: "Chapter 6 - Textbook Exercises with Answers",
      mcqs: [
        {
          q: "Statements that are INCORRECT in relation to index numbers:\na) Index number is a geographical tool\nb) Index numbers measure changes in the air pressure\nc) Index numbers measure relative changes in an economic variable\nd) Index numbers are specialized averages",
          options: ["c and d", "a and b", "b and c", "a and d"],
          correct: 1,
          answer: "a and b",
          explanation:
            "Index numbers are NOT geographical tools and do NOT measure air pressure. They ARE specialized averages that measure relative changes in economic variables.",
        },
        {
          q: "Statements that highlight the significance of index numbers:\na) Useful for making future predictions\nb) Help in measurement of inflation\nc) Help to frame suitable policies\nd) Can be misused",
          options: ["b, c and d", "a, c and d", "a, b and d", "a, b and c"],
          correct: 3,
          answer: "a, b and c",
          explanation:
            "'Can be misused' is a limitation, not significance. Making predictions, measuring inflation, and framing policies are all valid significances.",
        },
        {
          q: "Statements that apply to weighted index numbers:\na) Every commodity is given equal importance\nb) It assigns suitable 'weights' to various commodities\nc) In most cases, quantities are used as weights\nd) Laspeyre's and Paasche's method is used",
          options: ["b, c and d", "a, c and d", "a, b and d", "a, b, c and d"],
          correct: 0,
          answer: "b, c and d",
          explanation:
            "In WEIGHTED index numbers, commodities are NOT given equal importance (that's SIMPLE index). Weights are assigned, quantities used as weights, and Laspeyre's/Paasche's methods are weighted methods.",
        },
        {
          q: "Statements related to limitations of index numbers:\na) Not completely reliable\nb) There may be bias in data collected\nc) Every formula has some kind of defect\nd) Index numbers ignore changes in qualities of products",
          options: ["a, c and d", "a, b, c and d", "a, b and d", "b, c and d"],
          correct: 1,
          answer: "a, b, c and d",
          explanation:
            "All four statements are valid limitations of index numbers — they have reliability issues, potential data bias, formula defects, and ignore quality changes.",
        },
      ],
      correlations: [
        {
          q: "Price Index : Inflation :: Agricultural productivity index : ___",
          answer: "Agricultural production",
        },
        {
          q: "p0 : Base year prices :: p1 : ___",
          answer: "Current year prices",
        },
        {
          q: "Laspeyre's index : Base year quantities :: Paasche's index : ___",
          answer: "Current year quantities",
        },
        {
          q: "Univariate index : Single variable :: Composite index : ___",
          answer: "Group of variables",
        },
      ],
      shortAnswers: [
        {
          q: "Explain the features of Index Numbers. (Shortcode: SUM BC)",
          answer:
            "Features of Index Numbers (SUM BC):\n\n1) Specialized averages: Capable of being expressed in percentages.\n2) Universal utility: Used across economics, education, sociology, geography etc.\n3) Measure relative changes: In one or more variables over time or between periods/locations.\n4) Based on samples: Cannot include all items; represent selected commodities.\n5) Comparative study: Current year compared to base year (base year = 100).\n\nAdditional: Univariate index = single variable; Composite index = group of variables. Also called 'barometers of economic activity'.",
        },
        {
          q: "Explain the significance of Index Numbers.",
          answer:
            "Significance of Index Numbers:\n\n1) Framing suitable policies: Guidelines for agricultural policy, industrial policy, wage fixation, dearness allowances.\n2) Studies trends and tendencies: Measure changes in production, prices, exports, imports over time.\n3) Forecasting future economic activity: Predictions based on past and present trends.\n4) Measurement of inflation: Measure price level changes, enabling anti-inflationary measures.\n5) Useful to present financial data in real terms: Deflating adjusts for price/wage changes, presenting data at constant prices.",
        },
      ],
      agreeDisagree: [
        {
          statement: "Index numbers measure changes in the price level only.",
          agree: false,
          answer:
            "No, I disagree.\na) An index number is a device to measure changes in an economic variable over a period of time.\nb) Originally developed to measure price level changes.\nc) Now also used for: stock market prices, cost of living, industrial/agricultural production, exports, imports etc.\nd) Therefore, index numbers do NOT measure changes in price level only.",
        },
        {
          statement: "Index numbers are free from limitations.",
          agree: false,
          answer:
            "No, I disagree.\na) Index numbers are based on samples — not all items can be included, so they have sampling errors.\nb) Constructed from data which may be incomplete.\nc) A person may choose a base year that suits his purpose — potential bias.\nd) Every formula has some defect.\ne) Therefore, index numbers are NOT free from limitations.",
        },
        {
          statement: "Index numbers can be constructed without the base year.",
          agree: false,
          answer:
            "No, I disagree.\na) An index number measures changes in an economic variable over a period of time.\nb) Base year is the year against which comparisons are made.\nc) Base year (reference year) should be normal, free from natural calamities, not too distant in the past.\nd) The base year index is assumed as 100 and current year value is calculated accordingly.\ne) Therefore, index numbers CANNOT be constructed without the base year.",
        },
      ],
      longAnswers: [
        {
          q: "Explain the steps involved in the construction of index numbers.",
          shortcode: "",
          answer:
            "Steps in Construction of Index Numbers:\n\n1) Purpose of index number: Clearly decide what variable is to be measured, its scope, and intended use.\n\n2) Selection of base year: Also called reference year. Should be normal (free from calamities), not too distant in the past. Base year index = 100.\n\n3) Selection of items: Select a sample of items to include. Commodities should represent tastes, habits, customs of people. Only standardized/graded items for better results.\n\n4) Selection of price quotations: Prices vary by place and shop. Obtain from unbiased price reporting agency. Proper selection of representative places and persons required.\n\n5) Choice of suitable average: Generally Arithmetic Mean is used — simple to compute compared to other averages.\n\n6) Assigning proper weights: Weight = relative importance of items. Two types: quantity weights (q) and value weights (p × q). Assigning specific weights gives better results.\n\n7) Selection of appropriate formula: Choice depends on purpose and data availability. Various formulae exist (Simple, Laspeyre's, Paasche's, Fisher's).",
        },
      ],
      distinguishBetween: [
        {
          q: "Simple Index Numbers and Weighted Index Numbers",
          answer:
            "Simple Index Numbers:\n- Every commodity given equal importance.\n- Easiest method of construction.\n- Applied for: Price Index, Quantity Index, Value Index.\n\nWeighted Index Numbers:\n- Suitable weights assigned to various commodities based on relative importance.\n- Comparatively complex method.\n- Methods: Laspeyre's Price Index, Paasche's Price Index, Fisher's Ideal Index.",
        },
        {
          q: "Price Index and Quantity Index",
          answer:
            "Price Index:\n- Measures general changes in prices of goods.\n- Compares price levels between two time periods.\n- Formula: P01 = ΣP1/ΣP0 × 100\n\nQuantity Index:\n- Also called Volume Index Number.\n- Measures changes in level of output or physical volume of production.\n- Formula: Q01 = ΣQ1/ΣQ0 × 100",
        },
        {
          q: "Laspeyre's Index and Paasche's Index",
          answer:
            "Laspeyre's Index:\n- Base year quantities used as weights.\n- Formula: P01 = ΣP1Q0/ΣP0Q0 × 100\n- Tends to overstate price changes.\n\nPaasche's Index:\n- Current year quantities used as weights.\n- Formula: P01 = ΣP1Q1/ΣP0Q1 × 100\n- Tends to understate price changes.\n\nFisher's Ideal Index = √(Laspeyre's × Paasche's) — called 'ideal' because it's the geometric mean of both.",
        },
      ],
    },
  },

  // ==================== CHAPTER 7: NATIONAL INCOME ====================
  chapter7: {
    title: "National Income",
    weightage: "08 marks (12 with options)",

    shortcodes: [
      {
        code: "V-FMN",
        topic: "Features of National Income",
        breakdown:
          "Value of final goods only • Flow concept • Macro concept • Money value • Net aggregate value • Net income from abroad • Financial year",
      },
      {
        code: "VIP CID E",
        topic: "Practical Difficulties in NI Estimation",
        breakdown:
          "Valuation of inventories • Illiteracy • Problem of double counting • Capital gains • Inadequate data • Depreciation • Existence of non-monetized sector",
      },
      {
        code: "TU C VIP",
        topic: "Theoretical Difficulties in NI Measurement",
        breakdown:
          "Transfer payments • Unpaid services • Change in price level • Value of govt services • Illegal income • Production for self-consumption",
      },
    ],

    mustKnowConcepts: [
      {
        term: "National Income",
        definition:
          "Total value of all final goods and services produced in a country during a year.",
      },
      {
        term: "GDP",
        definition:
          "Gross Domestic Product - Total value of goods/services produced within country's borders.",
      },
      {
        term: "GNP",
        definition:
          "Gross National Product - GDP + Net factor income from abroad.",
      },
      { term: "NNP", definition: "Net National Product - GNP - Depreciation." },
      {
        term: "NI at Factor Cost",
        definition: "NNP at market price - Indirect taxes + Subsidies.",
      },
      {
        term: "Per Capita Income",
        definition: "National Income / Population. Measures average income.",
      },
      {
        term: "Depreciation",
        definition:
          "Wear and tear of capital goods. Also called Capital Consumption Allowance.",
      },
    ],

    formulas: [
      "GDP = C + I + G + (X - M)",
      "GNP = GDP + Net Factor Income from Abroad",
      "NNP = GNP - Depreciation",
      "NI at FC = NNP at MP - Indirect Taxes + Subsidies",
      "Per Capita Income = National Income / Population",
      "Nominal GDP = At current prices",
      "Real GDP = At constant prices (inflation adjusted)",
    ],

    pyqMCQs: [
      {
        q: "GDP measures production within:",
        options: ["Country borders", "By nationals", "Both", "None"],
        correct: 0,
        year: 2024,
      },
      {
        q: "GNP = GDP +:",
        options: [
          "Depreciation",
          "Net factor income from abroad",
          "Taxes",
          "None",
        ],
        correct: 1,
        year: 2024,
      },
      {
        q: "NNP = GNP -:",
        options: ["Taxes", "Subsidies", "Depreciation", "None"],
        correct: 2,
        year: 2023,
      },
      {
        q: "Per Capita Income formula:",
        options: [
          "NI × Population",
          "NI / Population",
          "NI + Population",
          "None",
        ],
        correct: 1,
        year: 2023,
      },
      {
        q: "Real GDP uses _____ prices:",
        options: ["Current", "Constant", "Market", "None"],
        correct: 1,
        year: 2022,
      },
      {
        q: "Nominal GDP uses _____ prices:",
        options: ["Current", "Constant", "Base year", "None"],
        correct: 0,
        year: 2022,
      },
      {
        q: "Transfer payments are _____ in NI:",
        options: ["Included", "Excluded", "Partially included", "None"],
        correct: 1,
        year: 2021,
      },
      {
        q: "Methods of measuring NI:",
        options: ["1", "2", "3", "4"],
        correct: 2,
        year: 2021,
      },
      {
        q: "Income method adds:",
        options: ["Expenditures", "Factor incomes", "Products", "None"],
        correct: 1,
        year: 2020,
      },
      {
        q: "Expenditure method adds:",
        options: [
          "C+I+G+(X-M)",
          "Wages+Rent+Interest+Profit",
          "Output values",
          "None",
        ],
        correct: 0,
        year: 2020,
      },
      {
        q: "Double counting is avoided by:",
        options: ["Adding all output", "Value added method", "Both", "None"],
        correct: 1,
        year: "Imp",
      },
      {
        q: "Green GDP accounts for:",
        options: ["Only GDP", "Environmental costs", "Only GNP", "None"],
        correct: 1,
        year: "Imp",
      },
    ],

    pyqShortAnswers: [
      {
        q: "Distinguish between GDP and GNP. (4 marks)",
        year: 2024,
        modelAnswer: `**GDP vs GNP:**

| Aspect | GDP | GNP |
|--------|-----|-----|
| **Full Form** | Gross Domestic Product | Gross National Product |
| **Measures** | Production within borders | Production by nationals |
| **Formula** | C + I + G + (X-M) | GDP + NFIA |
| **Includes** | Domestic production only | Domestic + abroad income |
| **Foreign Element** | Excludes foreign earnings | Includes net foreign income |
| **Indicator** | Domestic economic activity | National economic welfare |

**NFIA** = Net Factor Income from Abroad`,
      },
      {
        q: "Explain the methods of measuring National Income. (4 marks)",
        year: 2023,
        modelAnswer: `**Methods of Measuring National Income:**

1. **Product/Output Method**:
   - Adds value of all final goods/services
   - Uses value added to avoid double counting
   - Formula: GDP = ΣVA of all sectors

2. **Income Method**:
   - Adds all factor incomes
   - Wages + Rent + Interest + Profit
   - NI = W + R + i + P

3. **Expenditure Method**:
   - Adds all final expenditures
   - C (Consumption) + I (Investment) + G (Government) + (X-M)
   - GDP = C + I + G + (X-M)

**Note**: All three methods give same result.`,
      },
    ],

    textbookExercises: {
      title: "Chapter 7 - Textbook Exercises with Answers",
      mcqs: [
        {
          q: "While estimating national income, we include only value of final goods and services in order to ___.",
          options: [
            "make computation easier",
            "avoid double counting",
            "maximize national welfare",
            "evaluate total economic performance",
          ],
          correct: 1,
          answer: "avoid double counting",
          explanation:
            "Intermediate goods' value is already included in final goods. Counting them separately would cause double counting, inflating the national income figure.",
        },
        {
          q: "NDP is obtained by ___.",
          options: [
            "deducting depreciation from GNP",
            "deducting depreciation from GDP",
            "including depreciation in GDP",
            "including depreciation in GNP",
          ],
          correct: 1,
          answer: "deducting depreciation from GDP",
          explanation:
            "NDP (Net Domestic Product) = GDP - Depreciation. Depreciation is the wear and tear of capital assets during production.",
        },
        {
          q: "In India, national income is estimated using ___.",
          options: [
            "output method",
            "income method",
            "expenditure method",
            "combination of output and income method",
          ],
          correct: 3,
          answer: "combination of output and income method",
          explanation:
            "India uses a combination of output method (for agriculture, manufacturing) and income method (for services, trade, transport) due to the diverse nature of the economy.",
        },
      ],
      correlations: [
        {
          q: "GDP : C + I + G + (X-M) :: GNP : ___",
          answer: "C + I + G + (X-M) + (R-P) [i.e., GDP + NFIA]",
        },
        {
          q: "Output method : Inventory Method :: Income method : ___",
          answer: "Factor cost method",
        },
        {
          q: "Theoretical difficulty : Transfer payments :: Practical difficulty : ___",
          answer: "Valuation of Inventories",
        },
      ],
      conceptIdentification: [
        {
          scenario:
            "Vrinda receives a monthly pension of Rs.5,000 from the State Government.",
          concept: "Transfer Income",
          explanation:
            "Transfer income is income received without rendering any productive service in return. Pensions, unemployment allowances, gifts are transfer incomes — not included in national income.",
        },
        {
          scenario:
            "Viru kept aside 100 kgs out of 500 kgs of wheat produced for his family.",
          concept: "Production for Self-Consumption",
          explanation:
            "Products kept for self-consumption do not enter the market. They are not accounted for in national income, creating a practical difficulty in NI estimation.",
        },
        {
          scenario:
            "Sheetal purchased wheat flour for her bakery from the flour mill.",
          concept: "Intermediate Goods",
          explanation:
            "Intermediate goods are used for further production, not for final consumption. Wheat flour used by a bakery is intermediate — its value is excluded from NI to avoid double counting.",
        },
        {
          scenario:
            "Shobha collected data regarding the money value of all final goods and services produced in the country for the financial year.",
          concept: "National Income",
          explanation:
            "National income is the total monetary value of all final goods and services produced in an economy during a financial year (1st April to 31st March in India).",
        },
        {
          scenario:
            "Rajendra has a total stock of 500 gel pens including 200 produced in the previous year.",
          concept: "Inventory",
          explanation:
            "Inventory is the stock of finished goods, raw materials, or semi-finished goods lying with producers. Valuation of inventories is a practical difficulty in NI measurement.",
        },
      ],
      shortAnswers: [
        {
          q: "Explain the features of National Income. (Shortcode: V-FMN)",
          answer:
            "Features of National Income (V-FMN):\n\n1) Value of only final goods: Only final goods/services counted — intermediate goods excluded to avoid double counting.\n2) Flow concept: Shows flow of goods/services during a year, not a stock concept.\n3) Macro Economic concept: Represents income of the entire economy, not individuals.\n4) Money value: Always expressed in monetary terms — only goods/services exchanged for money.\n5) Net aggregate value: Includes net value, excluding depreciation (wear and tear).\n6) Net income from abroad: Includes (X-M) exports minus imports and (R-P) receipts minus payments abroad.\n7) Financial year: In India, 1st April to 31st March.",
        },
        {
          q: "Explain the importance of National Income.",
          answer:
            "Importance of National Income:\n\n1) Useful for the Economy: NI data = 'Social Accounts' — tells how nation's income, output, product result from individuals/industries/trade.\n2) National policies: Forms basis for employment, industrial, agricultural policy.\n3) Economic planning: Essential data on gross income, output, savings, investment, consumption.\n4) Economic Research: Researchers use input, output, income, savings data for studies.\n5) Comparison of Standard of Living: Compare living standards between countries and across time periods.\n6) Distribution of Income: Understand disparities in wages, rent, interest, profit across sections.",
        },
        {
          q: "Explain the concept of Green GNP.",
          answer:
            "Green GNP:\na) Indicator of sustainable use of natural environment and equitable distribution of development benefits.\nb) Regular GNP does not account for: (i) environmental pollution, (ii) depletion of natural resources.\nc) Mere increase in GNP does not reflect improved quality of life if it increases pollution or reduces future resources.\n\nFormula: Green GNP = GNP − (Net fall in stock of natural capital + pollution load)\n\nCharacteristics:\n1) Sustainable economic development without environmental degradation.\n2) Equitable distribution of benefits.\n3) Promotes economic welfare for the long term.",
        },
        {
          q: "Explain the two sector model of circular flow of national income.",
          answer:
            "Two-Sector Circular Flow Model:\n1) Two sectors: Households and Business Firms. Y = C + I\n2) Upper half = Factor Market; Lower half = Commodity Market.\n3) Factors of production flow from households → firms.\n4) Firms use factors to produce goods → flow back to households (Product flows).\n5) Money flows: Firms → households (rent, wages, interest, profit) → households spend on goods → money flows back to firms (Money flows).\n6) Production generates factor income → converted to expenditure → continuous due to never-ending human wants → makes the flow CIRCULAR.",
        },
      ],
      agreeDisagree: [
        {
          statement:
            "There are many theoretical difficulties in the measurement of national income.",
          agree: true,
          answer:
            "Yes, I agree. (TU C VIP)\na) Transfer payments: Whether pension, unemployment allowance should be included — a major problem.\nb) Illegal income: Income from gambling, black marketing, smuggling etc. not included.\nc) Production for self-consumption: Products kept for self-consumption don't enter market — not accounted for.\nd) Income of foreign firms: IMF says include in NI of the country where production actually happens.\nHence, there are many theoretical difficulties (Transfer payments, Unpaid services, Change in price level, Value of govt services, Illegal income, Production for self-consumption).",
        },
        {
          statement:
            "Under the output method, the value-added approach is used to avoid double counting.",
          agree: true,
          answer:
            "Yes, I agree.\na) According to this approach, value added at each stage of production is included.\nb) Value added = Difference between value of final outputs and inputs at each stage.\nc) GNP is obtained as total of values added by all production stages, till final output reaches consumers.\nd) Therefore, to avoid double counting, the value-added approach is used.",
        },
      ],
      longAnswers: [
        {
          q: "Explain the practical difficulties involved in the measurement of National Income. (Shortcode: VIP CID E)",
          shortcode: "VIP CID E",
          answer:
            "Practical Difficulties in NI Estimation (VIP CID E):\n\n1) Valuation of inventories: Raw materials, semi-finished, finished goods in stock. Any mistake in measuring inventory value distorts final production value.\n\n2) Illiteracy and ignorance: Small producers don't keep accounts of production due to ignorance/illiteracy. Can't give information about quantity or value of output.\n\n3) Problem of double counting: Greatest difficulty. Failure to distinguish between final and intermediate products. E.g., flour used by bakery (intermediate) vs household (final).\n\n4) Capital gains or losses: Not included in NI because they don't result from current economic activities — only from changes in market value of assets.\n\n5) Inadequate and unreliable data: Data on crops, fisheries, animal husbandry, construction, small enterprises not available in developing countries.\n\n6) Depreciation: No uniform/accepted standard rates of depreciation for various capital assets. Difficult to make correct deductions.\n\n7) Existence of non-monetized sector: In rural India, subsistence farming — production partly exchanged for goods/services, not entering market. Excluded from NI.\n\n8) Difficulties in classification of working population: In India, farmers not engaged year-round — do alternative work in off-season. Difficult to identify income from specific occupation.",
        },
        {
          q: "Explain the Income Method and Expenditure Method of measuring National Income.",
          shortcode: "",
          answer:
            "INCOME METHOD (Factor Cost Method):\na) Estimates NI from the distribution side — adds all income payments to citizens.\nb) Incomes from rent, wages, interest, profit are added. Transfer payments are excluded.\nc) Data from income tax returns, reports, books of accounts.\nd) Formula: NI = R + W + I + P + MI + (X−M)\n   (Rent + Wages + Interest + Profit + Mixed Income + Net Income from Abroad)\ne) Used in India for trade, transport, professional services, public administration.\n\nEXPENDITURE METHOD (Outlay Method):\na) Adds total expenditure by society in a year on consumer goods and capital goods.\nb) Formula: NI = C + I + G + (X−M) + (R−P)\n   C = Private Final Consumption Expenditure (food, durables, services)\n   I = Gross Domestic Private Investment Expenditure (replacement + new investment)\n   G = Government Final Consumption + Investment Expenditure (defence, education, infrastructure)\n   (X-M) = Net Foreign Investment (exports minus imports)\n   (R-P) = Net Receipts from abroad\n\nNote: All three methods (Output, Income, Expenditure) give the same result — National Income Identity.",
        },
      ],
    },
  },

  // ==================== CHAPTER 8: PUBLIC FINANCE ====================
  chapter8: {
    title: "Public Finance in India",
    weightage: "07 marks (10 with options)",

    shortcodes: [
      {
        code: "SIR DG",
        topic: "Reasons for Growth of Public Expenditure",
        breakdown:
          "Spread of democracy • Inflation • Rapid population growth • Defence expenditure • Growing urbanization (+ Industrial dev, Disaster mgmt)",
      },
      {
        code: "BF GF PS",
        topic: "Sources of Public Revenue (Non-Tax)",
        breakdown:
          "Borrowings • Fees • Gifts/Grants • Fines/Penalties • Prices of public goods • Special assessment/levy",
      },
      {
        code: "DR. NC",
        topic: "Classification of Public Expenditure",
        breakdown:
          "Developmental & Non-developmental • Revenue & Capital expenditure • Non-plan & Plan expenditure • Central/State/Local",
      },
    ],

    mustKnowConcepts: [
      {
        term: "Public Finance",
        definition:
          "Study of government revenue, expenditure, and debt management.",
      },
      {
        term: "Budget",
        definition:
          "Annual financial statement of estimated receipts and expenditure of government.",
      },
      {
        term: "Revenue Receipt",
        definition:
          "Income that doesn't create liability or reduce assets. E.g., taxes, fees.",
      },
      {
        term: "Capital Receipt",
        definition:
          "Income that creates liability or reduces assets. E.g., loans, disinvestment.",
      },
      {
        term: "Revenue Expenditure",
        definition:
          "Spending that doesn't create assets. E.g., salaries, interest payments.",
      },
      {
        term: "Capital Expenditure",
        definition:
          "Spending that creates assets. E.g., building roads, buying machinery.",
      },
      {
        term: "Direct Tax",
        definition:
          "Tax where burden cannot be shifted. E.g., Income tax, Wealth tax.",
      },
      {
        term: "Indirect Tax",
        definition: "Tax where burden can be shifted. E.g., GST, Excise duty.",
      },
      {
        term: "Fiscal Deficit",
        definition:
          "Total expenditure - Total receipts (excluding borrowings).",
      },
      {
        term: "GST",
        definition:
          "Goods and Services Tax - One nation, one tax. Introduced July 1, 2017.",
      },
    ],

    pyqMCQs: [
      {
        q: "Budget is presented on:",
        options: ["January 1", "February 1", "April 1", "March 31"],
        correct: 1,
        year: 2024,
      },
      {
        q: "GST was introduced in:",
        options: ["2015", "2016", "2017", "2018"],
        correct: 2,
        year: 2024,
      },
      {
        q: "Income tax is a _____ tax:",
        options: ["Direct", "Indirect", "Both", "None"],
        correct: 0,
        year: 2023,
      },
      {
        q: "GST is a _____ tax:",
        options: ["Direct", "Indirect", "Both", "None"],
        correct: 1,
        year: 2023,
      },
      {
        q: "Fiscal deficit = Total expenditure -:",
        options: [
          "Total receipts excluding borrowings",
          "Total receipts",
          "Revenue receipts",
          "None",
        ],
        correct: 0,
        year: 2022,
      },
      {
        q: "Revenue receipt does not create:",
        options: ["Income", "Liability", "Assets", "None"],
        correct: 1,
        year: 2022,
      },
      {
        q: "Capital expenditure creates:",
        options: ["Liability", "Assets", "Deficit", "None"],
        correct: 1,
        year: 2021,
      },
      {
        q: "Salaries are _____ expenditure:",
        options: ["Capital", "Revenue", "Both", "None"],
        correct: 1,
        year: 2021,
      },
      {
        q: "Loans taken are _____ receipts:",
        options: ["Revenue", "Capital", "Both", "None"],
        correct: 1,
        year: 2020,
      },
      {
        q: "Tax revenue is _____ receipt:",
        options: ["Capital", "Revenue", "Both", "None"],
        correct: 1,
        year: 2020,
      },
      {
        q: "CGST goes to:",
        options: ["State", "Centre", "Both", "Local"],
        correct: 1,
        year: "Imp",
      },
      {
        q: "SGST goes to:",
        options: ["Centre", "State", "Both", "Local"],
        correct: 1,
        year: "Imp",
      },
      {
        q: "IGST is for:",
        options: ["Intra-state", "Inter-state", "Both", "None"],
        correct: 1,
        year: "Imp",
      },
    ],

    pyqShortAnswers: [
      {
        q: "Distinguish between Direct and Indirect Tax. (4 marks)",
        year: 2024,
        modelAnswer: `**Direct vs Indirect Tax:**

| Aspect | Direct Tax | Indirect Tax |
|--------|------------|--------------|
| **Burden** | Cannot be shifted | Can be shifted to others |
| **Impact & Incidence** | On same person | On different persons |
| **Nature** | Progressive | Regressive |
| **Examples** | Income tax, Wealth tax | GST, Excise duty, Customs |
| **Collection** | Directly from taxpayer | Through intermediaries |
| **Evasion** | More possible | Difficult |`,
      },
      {
        q: "What is GST? Explain its features. (4 marks)",
        year: 2023,
        modelAnswer: `**Goods and Services Tax (GST):**

1. **Definition**: Comprehensive indirect tax on manufacture, sale, and consumption of goods and services.

2. **Introduction**: July 1, 2017 (101st Constitutional Amendment)

3. **Features**:
   - **One Nation, One Tax**: Uniform tax across India
   - **Destination-based**: Tax collected where goods consumed
   - **Dual Structure**: CGST (Centre) + SGST (State)
   - **IGST**: For inter-state transactions
   - **Multiple Rates**: 0%, 5%, 12%, 18%, 28%

4. **Benefits**: Reduced cascading, simpler compliance, unified market`,
      },
    ],

    textbookExercises: {
      title: "Chapter 8 - Textbook Exercises with Answers",
      mcqs: [
        {
          q: "Optional functions of Government:\na) Protection from external attack\nb) Provision of education and health services\nc) Provision of social security measures\nd) Collection of tax",
          options: ["b and c", "a, b and c", "b, c and d", "All of the above"],
          correct: 0,
          answer: "b and c",
          explanation:
            "Protection from external attack and collection of tax are OBLIGATORY functions. Education/health and social security are OPTIONAL functions that governments choose to provide.",
        },
        {
          q: "Obligatory functions of the Government:\na) Provision of employment\nb) Maintaining internal law and order\nc) Welfare measures\nd) Exporting goods",
          options: ["c and d", "a and b", "only b", "a, c and d"],
          correct: 2,
          answer: "only b",
          explanation:
            "Maintaining internal law and order is an obligatory (compulsory) function. Employment provision, welfare measures, and exporting are optional functions.",
        },
        {
          q: "Non-tax sources of revenue:\na) Direct and Indirect Tax\nb) Direct Tax and Fees\nc) Fees\nd) Special Levy",
          options: ["b and c", "a and c", "a, b, c and d", "c and d"],
          correct: 3,
          answer: "c and d",
          explanation:
            "Fees and Special Levy are non-tax sources. Direct tax and indirect tax are TAX sources of revenue, not non-tax.",
        },
        {
          q: "Trends shown by Public expenditure of any Government:",
          options: ["Constant", "Increasing", "Decreasing", "Fluctuating"],
          correct: 1,
          answer: "Increasing",
          explanation:
            "Public expenditure shows a continuously INCREASING trend due to population growth, urbanization, defence needs, welfare schemes, inflation, and expanding government activities.",
        },
      ],
      correlations: [],
      conceptIdentification: [],
      distinguishBetween: [
        {
          q: "Public Finance and Private Finance",
          answer:
            "Public Finance:\n- Studies income and expenditure activities of the STATE/Government.\n- Government first determines expenditure, then raises revenue.\n- High degree of credit in the market.\n\nPrivate Finance:\n- Studies income and expenditure of private individuals/entities.\n- Individual considers income first, then determines expenditure.\n- Credit of private individual is limited.",
        },
        {
          q: "Internal Debt and External Debt",
          answer:
            "Internal Debt:\n- Government borrows from citizens, banks, central bank, financial institutions within the country.\n- Use of domestic currency.\n- Less complex for management.\n\nExternal Debt:\n- Government borrows from foreign governments, foreign banks, IMF, World Bank etc.\n- Use of foreign currency.\n- More complex for management.",
        },
        {
          q: "Developmental Expenditure and Non-Developmental Expenditure",
          answer:
            "Developmental Expenditure:\n- Results in generation of employment, increase in production, price stability.\n- Examples: Health, education, industrial development, R&D, social welfare.\n- Productive in nature.\n\nNon-Developmental Expenditure:\n- Does not yield direct productive impact.\n- Examples: Administration costs, war expenditure.\n- Unproductive in nature.",
        },
        {
          q: "Direct Tax and Indirect Tax",
          answer:
            "Direct Tax:\n- Paid by individual directly to government. Burden cannot be shifted.\n- Impact and incidence on same person.\n- Progressive — rate increases with income.\n- Examples: Personal income tax, wealth tax.\n\nIndirect Tax:\n- Paid through an intermediary who passes it to government.\n- Impact and incidence on different persons.\n- Regressive — rate decreases with increase in income.\n- Example: GST.",
        },
      ],
      agreeDisagree: [
        {
          statement:
            "Obligatory function is the only function of the Government.",
          agree: false,
          answer:
            "No, I disagree.\na) Government performs various functions — classified as Obligatory and Optional.\nb) Obligatory: Protection from external attacks, maintaining law and order.\nc) Optional: Education, health services, social security (pensions, welfare measures).\nd) Hence, obligatory function is NOT the only function.",
        },
        {
          statement:
            "Fines and penalties are a major source of revenue for the Government.",
          agree: false,
          answer:
            "No, I disagree.\na) Government imposes fines and penalties on those who violate laws.\nb) Objective is NOT to earn income but to discourage law-breaking.\nc) Example: Traffic fines. However, income from this source is small.\nd) Therefore, fines and penalties are NOT a major source of revenue.",
        },
        {
          statement: "The GST has replaced almost all indirect taxes in India.",
          agree: true,
          answer:
            "Yes, I agree.\na) GST came into effect on July 1, 2017 (101st Constitutional Amendment).\nb) It is different from excise or sales tax — not a single-stage levy.\nc) It is a comprehensive tax base with nationwide coverage of goods and services.\nd) Hence, GST has replaced almost all indirect taxes in India.",
        },
        {
          statement:
            "Democratic Governments do not lead to an increase in public expenditure.",
          agree: false,
          answer:
            "No, I disagree.\na) Public expenditure is incurred for protection, satisfying collective needs, promoting welfare.\nb) Majority of countries are democratic.\nc) Democratic form is expensive due to regular elections and related activities.\nd) This results in increase in total government expenditure.\ne) Hence, democratic governments DO lead to increased public expenditure.",
        },
        {
          statement: "Public finance is more elastic than private finance.",
          agree: true,
          answer:
            "Yes, I agree.\na) Public finance = income/expenditure of public authorities.\nb) Private finance = income/expenditure of individuals/private sector.\nc) Public finance objective: maximum social advantage. Private: fulfill private interests.\nd) Public finance is more elastic because credit provision is much more available in the market.\ne) Private finance credit availability is limited.",
        },
      ],
      shortAnswers: [
        {
          q: "Explain the types and importance of Government Budget.",
          answer:
            "Types of Government Budget:\n\n1) Balanced Budget: Estimated revenue = Estimated expenditure.\n2) Surplus Budget: Receipts > Expenditure.\n3) Deficit Budget: Receipts < Expenditure.\n\nImportance:\na) Taxes determine fate of businesses and individuals — affects disposable income.\nb) Government expenditure on defence, infrastructure, education, healthcare affects lives.\nc) Used as a medium for implementing economic policies.\nd) Affects production, distribution of income, and utilization of resources.",
        },
        {
          q: "Explain the principles of taxation (Adam Smith's Canons).",
          answer:
            "Adam Smith's Four Canons of Taxation:\n\n1) Canon of Equity/Equality: Pay tax in proportion to 'ability to pay'. Rich should pay more.\n2) Canon of Certainty: Taxpayer should know in advance — how much, when, and in what form to pay.\n3) Canon of Convenience: Tax should be levied at a convenient time and manner for the taxpayer.\n4) Canon of Economy: Cost of tax collection should be minimum. If major portion spent on collection itself, it's not a good tax.",
        },
        {
          q: "Explain non-tax sources of revenue. (Shortcode: BF GF PS)",
          answer:
            "Non-Tax Sources of Revenue (BF GF PS):\n\n1) Borrowings: From people (bonds, deposits), foreign govts, IMF, World Bank.\n2) Fees: Payment for specific government services. E.g., education fees, registration fees.\n3) Gifts, Grants, Donations: From citizens, foreign governments, international institutions.\n4) Fines and Penalties: For violating laws. Objective: discourage law-breaking. E.g., traffic fines.\n5) Prices of public goods/services: Railway fares, postal charges.\n6) Special Assessment: Special facilities in particular locality — roads, energy, water supply.\n7) Special Levies: On harmful commodities — wine, opium, intoxicants. Objective: discourage consumption.",
        },
      ],
      longAnswers: [
        {
          q: "Explain various reasons for the growth of public expenditure. (Shortcode: SIR DG)",
          shortcode: "SIR DG",
          answer:
            "Reasons for Growth of Public Expenditure (SIR DG + more):\n\n1) Spread of Democracy: Expensive due to regular elections and democratic activities.\n2) Increase in Activities of Government: Education, health, public works, welfare schemes — new functions undertaken, old ones performed efficiently on larger scale.\n3) Rapid increase in population: India 121.02 crores (2011). Greater expenditure to fulfill needs.\n4) Defence expenditure: Increasing even in peacetime due to hostile international relationships.\n5) Growing urbanization: Global phenomenon — more spending on water supply, roads, energy, transport, sanitation.\n\nAdditional reasons:\n6) Inflation: Government buys goods/services at rising prices — increasing costs.\n7) Industrial development: Government implements schemes for industrial growth — increases expenditure.\n8) Disaster management: Earthquakes, floods, cyclones, social unrest — huge spending on disaster management.\n\nConclusion: Modern governments work for 'welfare state' — continuous increase in public expenditure.",
        },
        {
          q: "Explain the concept of public revenue and its sources. (Shortcode: BF GF PS)",
          shortcode: "BF GF PS",
          answer:
            "Public Revenue:\nPublic revenue = aggregate collection of income by government through various sources. It is essential to finance public expenditure.\n\nA) TAX REVENUE:\n1) Direct Tax: Paid directly by taxpayer on income/property. Burden cannot be shifted. Progressive. E.g., Income tax, Wealth tax.\n2) Indirect Tax: Levied on goods/services. Burden CAN be shifted. Regressive. E.g., GST (July 1, 2017 — 101st Amendment).\n\nB) NON-TAX REVENUE (BF GF PS):\n1) Borrowings: From people, foreign govts, IMF, World Bank.\n2) Fees: For specific services — education fees, registration fees.\n3) Gifts, Grants, Donations: From citizens, foreign govts, international institutions.\n4) Fines and Penalties: For violating laws — traffic fines.\n5) Prices of public goods: Railway fares, postal charges.\n6) Special Assessment: Special facilities in a locality.\n7) Special Levies: On harmful commodities — wine, opium.",
        },
      ],
    },
  },

  // ==================== CHAPTER 9: MONEY MARKET & CAPITAL MARKET ====================
  chapter9: {
    title: "Money Market and Capital Market in India",
    weightage: "04 marks (06 with options)",

    shortcodes: [
      {
        code: "FLIP SE GROWTH",
        topic: "Role of Money Market in India",
        breakdown:
          "Financial requirements of govt • Liquidity management • Implementation of monetary policy • Portfolio management • Short-term requirements • Economizes use of cash • Growth of commerce/industry/trade • Equilibrating mechanism",
      },
      {
        code: "IQ MOP",
        topic: "Role of Capital Market in India",
        breakdown:
          "Integration • Quick valuation • Mobilizes long-term savings • Operational efficiency • Provides equity capital",
      },
      {
        code: "DSL",
        topic: "Problems of Money Market in India",
        breakdown:
          "Dual structure • Shortage of funds • Lack of uniformity in rates • Seasonal fluctuations • Lack of financial inclusion • Delays in technology",
      },
      {
        code: "FDI-L",
        topic: "Problems of Capital Market in India",
        breakdown:
          "Financial scams • Decline in volume of trade • Insider trading • Lack of informational efficiency • Inadequate debt instruments",
      },
      {
        code: "AP-CP",
        topic: "Functions of Commercial Banks",
        breakdown:
          "Acceptance of deposits • Providing loans/advances • Credit creation • Ancillary functions (D-mat, lockers, internet banking)",
      },
      {
        code: "CBI PRO",
        topic: "Functions of RBI",
        breakdown:
          "Controller of credit • Banker to government • Issue of currency notes • Promotional functions • Custodian of forex reserves • Other functions (clearinghouse, lender of last resort)",
      },
    ],

    mustKnowConcepts: [
      {
        term: "Money Market",
        definition:
          "Market for lending and borrowing SHORT-TERM funds. Near money instruments — trade bills, government securities, promissory notes. Maturity ≤ 1 year.",
      },
      {
        term: "Capital Market",
        definition:
          "Market for LONG-TERM funds — both equity and debt, raised within and outside the country. Instruments: shares, debentures, bonds. Maturity > 1 year.",
      },
      {
        term: "Commercial Bank",
        definition:
          "Financial intermediary that accepts deposits, provides loans, and creates credit. E.g., SBI, PNB.",
      },
      {
        term: "RBI",
        definition:
          "Reserve Bank of India — central bank at apex of banking system. Established 1935. Regulates money market, issues currency, controls credit.",
      },
      {
        term: "Credit Creation",
        definition:
          "Process by which commercial banks create credit through demand deposits. Primary deposits → loans → derivative/secondary deposits.",
      },
    ],

    formulas: [],

    pyqMCQs: [
      {
        q: "Money market deals with:",
        options: ["Long term funds", "Short term funds", "Both", "None"],
        correct: 1,
        year: 2024,
      },
      {
        q: "Capital market deals with:",
        options: ["Short term", "Long term", "Both", "None"],
        correct: 1,
        year: 2024,
      },
      {
        q: "RBI was established in:",
        options: ["1935", "1949", "1969", "1991"],
        correct: 0,
        year: 2023,
      },
      {
        q: "Stock exchange is part of:",
        options: ["Money market", "Capital market", "Both", "None"],
        correct: 1,
        year: 2023,
      },
      {
        q: "Quantitative credit control includes:",
        options: [
          "Bank rate",
          "Moral suasion",
          "Credit rationing",
          "Margin requirements",
        ],
        correct: 0,
        year: 2022,
      },
    ],

    pyqShortAnswers: [
      {
        q: "Distinguish between Money Market and Capital Market. (4 marks)",
        year: 2024,
        modelAnswer:
          "**Money Market vs Capital Market:**\n\n| Aspect | Money Market | Capital Market |\n|--------|-------------|----------------|\n| **Duration** | Short-term (≤1 year) | Long-term (>1 year) |\n| **Instruments** | Trade bills, T-bills, promissory notes | Shares, debentures, bonds |\n| **Risk** | Low risk, highly liquid | Higher risk, less liquid |\n| **Purpose** | Working capital needs | Fixed capital/expansion |\n| **Returns** | Lower returns | Higher returns |",
      },
    ],

    textbookExercises: {
      title: "Chapter 9 - Textbook Exercises with Answers",
      mcqs: [
        {
          q: "Development financial institutions were established to ___.",
          options: [
            "provide short term funds",
            "develop industry, agriculture and other key sectors",
            "regulate the money market",
            "regulate the capital market",
          ],
          correct: 1,
          answer: "develop industry, agriculture and other key sectors",
          explanation:
            "Development financial institutions (DFIs) like NABARD, SIDBI were established specifically to provide long-term finance for developing industry, agriculture, and key sectors.",
        },
        {
          q: "Money market faces shortage of funds due to ___.",
          options: [
            "inadequate savings",
            "growing demand for cash",
            "presence of unorganised sector",
            "financial mismanagement",
          ],
          correct: 0,
          answer: "inadequate savings",
          explanation:
            "Low per capita income, poor banking habits, wasteful consumption, and inadequate banking facilities in rural areas lead to inadequate savings and shortage of funds.",
        },
        {
          q: "Individual investors have lost confidence in the capital market due to ___.",
          options: [
            "lack of financial instruments",
            "high transaction costs",
            "low returns",
            "financial scams",
          ],
          correct: 3,
          answer: "financial scams",
          explanation:
            "Financial scams (like the Harshad Mehta scam) caused irreparable loss and public distrust, making individual investors lose confidence.",
        },
        {
          q: "Commercial banks act as intermediaries to ___.",
          options: [
            "make profits",
            "accelerate economic growth",
            "mobilize savings and allocate to various sectors",
            "control credit",
          ],
          correct: 2,
          answer: "mobilize savings and allocate to various sectors",
          explanation:
            "Commercial banks are financial intermediaries — they mobilize savings (deposits) from the public and allocate them to productive sectors through loans.",
        },
      ],
      correlations: [
        {
          q: "Money market : Short term funds :: Capital Market : ___",
          answer: "Long term funds",
        },
        { q: "RBI : Central Bank :: SBI : ___", answer: "Commercial Bank" },
        {
          q: "Co-operative banks : Organized sector :: Indigenous bankers : ___",
          answer: "Unorganised sector",
        },
        {
          q: "Primary market : New issues :: Secondary market : ___",
          answer: "Old issues",
        },
      ],
      oddOneOut: [
        {
          q: "Types of Bank Accounts: Saving a/c, D-mat a/c, Recurring a/c, Current a/c",
          answer: "D-mat a/c",
          explanation:
            "D-mat (Dematerialization) account is for holding shares/securities electronically — it's NOT a bank deposit account. Saving, Recurring, and Current are types of bank accounts.",
        },
        {
          q: "Unregulated Financial intermediaries: Mutual fund, Nidhi, Chit fund, Loan Companies",
          answer: "Mutual fund",
          explanation:
            "Mutual funds are regulated by SEBI. Nidhi, Chit funds, and Loan Companies are unregulated financial intermediaries in the unorganised sector.",
        },
        {
          q: "Financial Assets: Bonds, Land, Govt. Securities, Derivatives",
          answer: "Land",
          explanation:
            "Land is a PHYSICAL/REAL asset, not a financial asset. Bonds, Government Securities, and Derivatives are all financial assets.",
        },
        {
          q: "Quantitative Tools: Bank rate, Open market operations, Foreign Exchange rate, Variable reserve ratios",
          answer: "Foreign Exchange rate",
          explanation:
            "Foreign exchange rate management is a separate function of RBI, not a quantitative credit control tool. Bank rate, OMO, and VRR (CRR/SLR) are quantitative tools.",
        },
      ],
      conceptIdentification: [
        {
          scenario: "Raghu's father regularly invests in stocks and bonds.",
          concept: "Investment in Capital Market",
          explanation:
            "Stock exchange is an important constituent of the capital market where stocks, bonds, and commodities are traded for long-term investment.",
        },
        {
          scenario:
            "Sara makes monthly contributions to a fund. The collected fund is given to a chosen member through a lucky draw.",
          concept: "Chit Funds",
          explanation:
            "Under Chit funds, members make regular contributions. Collected fund is given to a chosen member through bids or draws based on mutually agreed criteria.",
        },
        {
          scenario: "Tina deposited Rs 50,000 in the bank for one year.",
          concept: "Fixed Deposit (Time Deposit)",
          explanation:
            "Fixed deposits are lump sum amounts deposited for a specified period. They carry higher interest rates compared to other deposits and cannot be withdrawn before maturity.",
        },
        {
          scenario:
            "ABC bank provides D-mat facility, safe deposit lockers, internet banking.",
          concept: "Ancillary Functions of Commercial Banks",
          explanation:
            "Commercial banks provide ancillary services: transfer of funds, merchant banking, forex, safe deposit lockers, D-mat facility, internet/mobile banking.",
        },
      ],
      distinguishBetween: [
        {
          q: "Money Market and Capital Market",
          answer:
            "Money Market:\n- Market for lending/borrowing SHORT-TERM funds.\n- Instruments: Trade bills, govt securities, promissory notes.\n- Highly liquid, less risky. Maturity ≤ 1 year.\n\nCapital Market:\n- Market for LONG-TERM funds (equity and debt).\n- Instruments: Shares, Debentures, Bonds, Retained Earnings.\n- Less liquid, more risky. Maturity > 1 year.",
        },
        {
          q: "Demand Deposit and Time Deposit",
          answer:
            "Demand Deposit:\n- Withdrawable on demand.\n- Types: Savings account, Current account.\n- Lower interest rate.\n\nTime Deposit:\n- Repayable after a certain period.\n- Types: Recurring deposit, Fixed deposit.\n- Higher interest rate. Cannot withdraw before maturity.",
        },
        {
          q: "Organized Sector and Unorganized Sector of Money Market",
          answer:
            "Organized Sector:\n- Under direct control/supervision of RBI.\n- Financing available at relatively low interest rate.\n- Components: Commercial banks, Co-operative banks, RBI.\n\nUnorganized Sector:\n- NOT under direct control of RBI.\n- Financing at relatively high interest rate.\n- Components: Money lenders, Indigenous bankers, Chit funds, Nidhis.",
        },
      ],
      shortAnswers: [
        {
          q: "Explain the problems faced by the money market in India. (Shortcode: DSL)",
          answer:
            "Problems of Indian Money Market (DSL + more):\n\n1) Dual Structure: Both organized and unorganized sectors — leads to disintegration, lack of transparency, increased volatility. Unorganized sector not under RBI control.\n2) Shortage of funds: Inadequate savings due to low per capita income, poor banking habits, wasteful consumption, inadequate rural banking.\n3) Lack of uniformity in interest rates: Various entities (commercial banks, co-op banks, NBFCs, DFIs) — different borrower categories, different rates.\n4) Seasonal fluctuations: Peak season (Oct-June) — large finance demand for agricultural trade, business investment — wide fluctuations.\n5) Lack of financial inclusion: Banking facilities inadequate and inaccessible to weaker sections and low-income groups.\n6) Delays in technological upgradation: Advanced technology is prerequisite for development — delays hamper working.",
        },
        {
          q: "Explain the functions of Commercial Banks. (Shortcode: AP-CP)",
          answer:
            "Functions of Commercial Banks (AP-CP):\n\n1) Acceptance of Deposits:\n   - Demand Deposits: Savings a/c (salaried class), Current a/c (businessmen)\n   - Time Deposits: Recurring deposits (fixed amount at regular intervals), Fixed deposits (lump sum for specified period)\n\n2) Providing Loans and Advances: Call loans, short/medium/long term loans, cash credit, overdraft, discounting bills of exchange.\n\n3) Credit Creation: Important function — demand/time deposits = primary deposits. After meeting reserve requirements, balance used for loans → creates secondary/derivative deposits.\n\n4) Ancillary Functions: Transfer of funds, collection of money, merchant banking, forex, safe deposit lockers, D-mat, internet/mobile banking.",
        },
        {
          q: "Explain the role of Capital Market in India. (Shortcode: IQ MOP)",
          answer:
            "Role of Capital Market (IQ MOP):\n\n1) Integration: Leads to integration among real and financial sectors, equity and debt instruments, government and private sector, domestic and external funds.\n2) Quick valuation: Helps determine fair and quick value of both equity (shares) and debt (bonds, debentures) instruments.\n3) Mobilizes long-term savings: From various sections through sale of securities — meets growing demand of industrial organizations and government.\n4) Operational efficiency: Lowers transaction costs, simplifies procedures, reduces settlement timings in stock trading.\n5) Provides equity capital: Share capital to entrepreneurs for purchasing assets and funding business operations.",
        },
        {
          q: "Explain the problems of Capital Market in India. (Shortcode: FDI-L)",
          answer:
            "Problems of Capital Market (FDI-L):\n\n1) Financial Scams: Irreparable loss — public distrust, loss of confidence among individual investors.\n2) Decline in volume of trade: Regional stock exchanges declining — investors prefer BSE, NSE.\n3) Insider trading and price manipulation: Buying/selling with non-public information for personal benefit. Price rigging through self-trading.\n4) Lack of informational efficiency: Stock prices don't fully incorporate all available information — less efficient than advanced countries.\n5) Inadequate debt instruments: Not much trading in bonds/debentures due to narrow investor base, high issuance costs.",
        },
      ],
      longAnswers: [
        {
          q: "Explain the role of Money Market in India. (Shortcode: FLIP SE GROWTH)",
          shortcode: "FLIP SE GROWTH",
          answer:
            "Role of Money Market (FLIP SE GROWTH):\n\n1) Financial requirements of Government: Helps fulfill short-term requirements through Treasury Bills.\n2) Liquidity Management: Facilitates better management of liquidity and money by monetary authorities — leads to economic stability.\n3) Implementation of monetary policy: Well-developed money market ensures successful monetary policy implementation. Guides RBI in developing appropriate interest policy.\n4) Portfolio Management: Different financial instruments suit risk/return preferences — investors hold portfolio minimizing risk, maximizing returns.\n5) Short-term requirements of borrowers: Provides reasonable access for meeting short-term financial needs at realistic prices.\n6) Economizes use of cash: Deals with financial instruments that are close substitutes of money (not actual money).\n7) Growth of commerce, industry, trade: Facilitates discounting bills for traders needing urgent funds. Provides working capital for agriculture and small-scale industries.\n8) Equilibrating mechanism: Rational allocation of resources and mobilization of savings into investment channels — equilibrium between demand and supply of short-term funds.",
        },
        {
          q: "Explain the functions of RBI. (Shortcode: CBI PRO)",
          shortcode: "CBI PRO",
          answer:
            "Functions of RBI (CBI PRO):\n\n1) Controller of Credit: Power to influence volume and purpose of credit. Quantitative methods: Bank rate, Open Market Operations, CRR, SLR. Qualitative methods: Margin requirements, credit rationing, moral suasion.\n\n2) Banker to Government: Acts as banker, agent, advisor to Central and State Governments. Accepts money, makes payments, manages public debt, advises on economic issues.\n\n3) Issue of Currency Notes: Sole right to issue all denomination notes (except ₹1 note and coins). Minimum Reserve System (1957): Rs 200 crores minimum reserves (Rs 115 cr in gold + Rs 85 cr in foreign currency/govt securities).\n\n4) Promotional/Developmental Functions: Extending banking to semi-urban/rural areas, depositor security, specialized institutions for agricultural/industrial credit.\n\n5) Custodian of Foreign Exchange Reserves: Maintains official exchange rate of rupee and stability. Buys/sells currencies of IMF member countries.\n\n6) Other Functions: Clearinghouse for settling member bank accounts. Lender of last resort — provides liquidity to banks in difficulty. Collection and publication of banking/financial data.",
        },
      ],
    },
  },

  // ==================== CHAPTER 10: FOREIGN TRADE ====================
  chapter10: {
    title: "Foreign Trade of India",
    weightage: "09 marks (12 with options)",

    shortcodes: [],

    mustKnowConcepts: [
      {
        term: "Foreign Trade",
        definition:
          "Trade between different countries of the world. Also called International Trade or External Trade.",
      },
      {
        term: "Import Trade",
        definition:
          "Purchase of goods/services from another country — inflow of goods from foreign country to home country.",
      },
      {
        term: "Export Trade",
        definition:
          "Sale of goods by one country to another — outflow of goods from home country to foreign country.",
      },
      {
        term: "Entrepot Trade",
        definition:
          "Purchasing goods from one country and selling them to another country after some processing. E.g., Japan imports raw materials, processes, exports electronics.",
      },
      {
        term: "Balance of Trade",
        definition:
          "Difference between value of a country's exports and imports. Surplus = Exports > Imports. Deficit = Imports > Exports.",
      },
      {
        term: "Balance of Payments",
        definition:
          "Systematic record of ALL international economic transactions during a year. Broader than Balance of Trade.",
      },
    ],

    formulas: [],

    pyqMCQs: [
      {
        q: "Types of foreign trade:",
        options: [
          "Import and Export only",
          "Import, Export, Entrepot",
          "Internal trade only",
          "None",
        ],
        correct: 1,
        year: 2024,
      },
      {
        q: "Entrepot trade means:",
        options: [
          "Domestic trade",
          "Import for re-export",
          "Export only",
          "None",
        ],
        correct: 1,
        year: 2023,
      },
      {
        q: "BoP includes:",
        options: [
          "Only goods",
          "Only services",
          "All economic transactions",
          "None",
        ],
        correct: 2,
        year: 2022,
      },
    ],

    pyqShortAnswers: [
      {
        q: "Distinguish between Balance of Trade and Balance of Payments.",
        year: 2024,
        modelAnswer:
          "**BoT vs BoP:**\n\n| Aspect | Balance of Trade | Balance of Payments |\n|--------|------------------|---------------------|\n| **Meaning** | Difference between exports and imports value | Systematic record of ALL international transactions |\n| **Scope** | Narrower concept | Broader concept (includes BoT) |\n| **Includes** | Visible + invisible goods | Goods, services, capital transfers, all transactions |\n| **Coverage** | Only trade in goods/services | Trade + capital movements + unilateral transfers |",
      },
    ],

    textbookExercises: {
      title: "Chapter 10 - Textbook Exercises with Answers",
      mcqs: [
        {
          q: "Types of foreign trade:\na) Import trade\nb) Export trade\nc) Entrepot trade\nd) Internal trade",
          options: ["a and b", "a, b and c", "a, b, c and d", "None of these"],
          correct: 1,
          answer: "a, b and c",
          explanation:
            "Foreign trade has three types: Import (buying from abroad), Export (selling abroad), Entrepot (import and re-export after processing). Internal trade is DOMESTIC, not foreign.",
        },
        {
          q: "Export trends of India's foreign trade include:\na) Engineering goods\nb) Gems and Jewellery\nc) Textiles and readymade garments\nd) Gold",
          options: ["a and c", "a, b and c", "b, c and d", "None"],
          correct: 1,
          answer: "a, b and c",
          explanation:
            "Engineering goods (25%), Gems & Jewellery (13.3%), and Textiles (11.3%) are major EXPORT items. Gold is a major IMPORT item, not export.",
        },
        {
          q: "Role of foreign trade includes:\na) Earn foreign exchange\nb) Encourage investment\nc) Division of labour\nd) Change in composition of exports",
          options: ["a and b", "a, b and c", "b and d", "None"],
          correct: 1,
          answer: "a, b and c",
          explanation:
            "Earning forex, encouraging investment, and division of labour are roles of foreign trade. Change in composition is a feature/trend, not a role.",
        },
      ],
      correlations: [],
      conceptIdentification: [
        {
          scenario: "India purchased petroleum from Iran.",
          concept: "Import Trade",
          explanation:
            "Import trade refers to purchase of goods/services from another country — inflow of goods from foreign country to home country.",
        },
        {
          scenario: "Maharashtra purchased wheat from Punjab.",
          concept: "Internal/Home Trade",
          explanation:
            "Buying and selling within the boundaries of a nation is Internal Trade or Domestic Trade or Home Trade — NOT foreign trade.",
        },
        {
          scenario:
            "England imported cotton from India, made readymade garments, and sold them to Malaysia.",
          concept: "Entrepot Trade",
          explanation:
            "Entrepot trade = purchasing goods from one country, processing them, and selling to another country.",
        },
        {
          scenario: "Japan sells smartphones to Myanmar.",
          concept: "Export Trade",
          explanation:
            "Export trade = sale of goods by one country to another — outflow of goods from home country.",
        },
      ],
      distinguishBetween: [
        {
          q: "Internal Trade and International Trade",
          answer:
            "Internal Trade:\n- Buying/selling within boundaries of a nation. Also called Domestic/Home Trade.\n- Uses domestic currency.\n- No customs duty or trade barriers.\n\nInternational Trade:\n- Trade between different countries. Also called External/Foreign Trade.\n- Uses foreign currency.\n- Subject to customs duty, trade barriers, exchange rate.",
        },
        {
          q: "Balance of Trade and Balance of Payments",
          answer:
            "Balance of Trade:\n- Difference between value of exports and imports for a given period.\n- Narrower concept — part of Balance of Payments.\n- Includes visible and invisible goods trade.\n\nBalance of Payments:\n- Systematic record of ALL international economic transactions during a year.\n- Broader concept — includes Balance of Trade.\n- Includes goods, services, capital movements, unilateral transfers.",
        },
      ],
      agreeDisagree: [
        {
          statement:
            "During British rule, indigenous handicrafts suffered a severe blow.",
          agree: true,
          answer:
            "Yes, I agree.\na) Before 1947, India's foreign trade pattern was typically colonial.\nb) India was a supplier of raw materials to industrialized nations, especially England.\nc) India was an importer of manufactured goods.\nd) This dependence did not permit industrialization at home.\ne) As a result, indigenous handicrafts suffered a severe blow.",
        },
        {
          statement: "Trade is an engine of growth for an economy.",
          agree: true,
          answer:
            "Yes, I agree.\na) Trade plays an important role in economic development.\nb) Foreign trade provides foreign exchange for productive purposes.\nc) Creates opportunity for producers to reach beyond domestic markets.\nd) Leads to division of labour and specialization at world level.\ne) Thus, trade is an engine of growth.",
        },
        {
          statement:
            "Foreign trade leads to division of labour and specialization at world level.",
          agree: true,
          answer:
            "Yes, I agree.\na) Foreign Trade is trade between different countries.\nb) Some countries have abundant natural resources.\nc) They should export raw materials and import finished goods from countries advanced in skilled manpower.\nd) Thus, foreign trade gives benefits to all countries, leading to division of labour and specialization.",
        },
      ],
      shortAnswers: [
        {
          q: "Explain the concept of foreign trade and its types.",
          answer:
            "Foreign Trade = trade between different countries. Also called International/External Trade.\n\n1) Import Trade: Purchase of goods/services from another country. E.g., India imports petroleum from Iraq, Kuwait, Saudi Arabia.\n\n2) Export Trade: Sale of goods to another country. E.g., India exports tea, rice, jute to China, Hong Kong, Singapore.\n\n3) Entrepot Trade: Purchase from one country, process, sell to another. E.g., Japan imports raw materials from Europe, makes electronic goods, sells worldwide.",
        },
        {
          q: "Explain any four features of the composition of India's foreign trade.",
          answer:
            "Features of Composition of India's Foreign Trade:\n\n1) Increasing share of GNI: From 17.55% (1990-91) to 48.8% (2016-17).\n2) Increase in volume and value: Since 1990-91, both have gone up significantly.\n3) Change in composition of exports: From primary products (jute, cotton, tea) to manufactured items (readymade garments, gems, software).\n4) Change in composition of imports: From consumer goods (medicines, cloth) to capital goods (high-tech machinery, chemicals, fertilizers).\n5) Oceanic trade: Most trade by sea — share around 68%.\n6) Development of new ports: Kandla, Cochin, Vishakhapatnam, Nhava Sheva — to reduce burden on Mumbai, Kolkata, Chennai.",
        },
      ],
      longAnswers: [
        {
          q: "Explain the meaning and role of foreign trade.",
          shortcode: "",
          answer:
            "Foreign Trade = trade between different countries. Called International/External Trade.\n\nRole of Foreign Trade:\n\n1) To earn foreign exchange: Provides forex for productive purposes. Remarkable factor in expanding market and encouraging production.\n\n2) Encourages Investment: Opportunity to reach beyond domestic markets → produce more for export → increases total investment.\n\n3) Division of labour and specialization: Countries with abundant resources export raw materials, import finished goods from skilled nations → benefits all countries.\n\n4) Optimum allocation of resources: Due to specialization, resources channelized for goods giving highest returns → rational allocation at international level.\n\n5) Stability in price level: Keeps demand-supply position stable → stabilizes price level.\n\n6) Availability of multiple choices: Imported commodities provide choices. Competition ensures quality products → raises standard of living.\n\n7) Reputation and goodwill: Exporting countries earn international reputation. E.g., Japan, Germany, Switzerland for electronic goods quality.",
        },
      ],
    },
  },

  // ==================== LAST MINUTE KEY POINTS ====================
  lastMinutePoints: {
    importantFormulas: [
      "MU = TUn - TUn-1 (Marginal Utility)",
      "Ed = %ΔQd / %ΔP (Price Elasticity)",
      "Ed = (ΔQ/ΔP) × (P/Q) (Point method)",
      "Es = %ΔQs / %ΔP (Supply Elasticity)",
      "GDP = C + I + G + (X-M)",
      "GNP = GDP + NFIA",
      "NNP = GNP - Depreciation",
      "NI at FC = NNP at MP - Indirect Taxes + Subsidies",
      "Per Capita Income = NI / Population",
      "Price Index = (P1/P0) × 100",
      "Fisher's Index = √(L × P)",
      "Fiscal Deficit = Total Exp - Total Receipts (excl. borrowings)",
    ],

    importantDates: [
      "1776 - Adam Smith's Wealth of Nations",
      "1890 - Marshall's Principles of Economics",
      "1932 - Robbins' Scarcity Definition",
      "1936 - Keynes' General Theory",
      "1991 - LPG Reforms in India",
      "1995 - WTO established",
      "2016 - Demonetization (Nov 8)",
      "2017 - GST introduced (July 1)",
    ],

    importantPersons: [
      "Adam Smith - Father of Economics, Wealth Definition",
      "Alfred Marshall - Father of Micro Economics, Welfare Definition",
      "J.M. Keynes - Father of Macro Economics",
      "Lionel Robbins - Scarcity Definition",
      "H.H. Gossen - Law of DMU (Gossen's First Law)",
      "Irving Fisher - Fisher's Ideal Index",
      "Laspeyre - Price Index (Base year quantities)",
      "Paasche - Price Index (Current year quantities)",
    ],

    fullForms: [
      "GDP - Gross Domestic Product",
      "GNP - Gross National Product",
      "NNP - Net National Product",
      "NI - National Income",
      "CPI - Consumer Price Index",
      "WPI - Wholesale Price Index",
      "GST - Goods and Services Tax",
      "CGST - Central GST",
      "SGST - State GST",
      "IGST - Integrated GST",
      "MU - Marginal Utility",
      "TU - Total Utility",
      "AR - Average Revenue",
      "MR - Marginal Revenue",
      "MC - Marginal Cost",
      "AC - Average Cost",
      "LPG - Liberalisation, Privatisation, Globalisation",
      "WTO - World Trade Organization",
      "IMF - International Monetary Fund",
      "NFIA - Net Factor Income from Abroad",
    ],

    examTips: [
      "Draw graphs wherever possible - earns extra marks",
      "Use tables for distinguish between questions",
      "For Q.5 tables/figures, show formula and all steps clearly",
      "Define terms before explaining concepts",
      "Include formulas with explanations",
      "Use examples (Indian context preferred)",
      "Time: Q1 (25 min), Q2-Q3 (18 min each), Q4 (20 min), Q5 (20 min), Q6 (35 min), Buffer (12 min)",
    ],
  },

  // ==================== TEXTBOOK EXERCISES WITH ANSWERS ====================
  textbookExercises: {
    chapter1: {
      title: "Chapter 1: Introduction to Micro and Macro Economics",
      exercises: [
        {
          type: "economicTerm",
          q: "Study of individual economic units like consumer, firm.",
          answer: "Micro Economics",
          marks: 1,
        },
        {
          type: "economicTerm",
          q: "Study of economy as a whole including national income, employment.",
          answer: "Macro Economics",
          marks: 1,
        },
        {
          type: "economicTerm",
          q: "Value of next best alternative foregone.",
          answer: "Opportunity Cost",
          marks: 1,
        },
        {
          type: "oddOne",
          q: "Individual demand, Market demand, National Income, Consumer behavior",
          answer:
            "National Income - It belongs to Macro Economics, others are Micro Economics concepts.",
          marks: 1,
        },
        {
          type: "correlation",
          q: "Micro Economics : Price Theory :: Macro Economics : ___",
          answer: "Income Theory",
          marks: 1,
        },
        {
          type: "correlation",
          q: "Alfred Marshall : Micro Economics :: J.M. Keynes : ___",
          answer: "Macro Economics",
          marks: 1,
        },
        {
          type: "distinguish",
          q: "Distinguish between Micro Economics and Macro Economics.",
          answer: `| Aspect | Micro Economics | Macro Economics |
|--------|-----------------|-----------------|
| Meaning | Study of individual units | Study of economy as whole |
| Also Called | Price Theory | Income Theory |
| Father | Alfred Marshall | J.M. Keynes |
| Method | Slicing method | Lumping method |
| Analysis | Partial equilibrium | General equilibrium |
| Examples | Consumer behavior, firm pricing | GDP, inflation, unemployment |
| Variables | Price, quantity, individual demand | National income, aggregate demand |
| Scope | Individual consumer, firm, industry | Entire economy |`,
          marks: 2,
        },
        {
          type: "identifyExplain",
          q: "Deals with individual economic units and uses slicing method.",
          concept: "Micro Economics",
          answer:
            "Micro Economics studies individual economic units like consumer, producer, firm, and industry. Also called Price Theory. Father: Alfred Marshall. Uses partial equilibrium analysis. Examples: Consumer demand, firm's pricing decisions, market equilibrium.",
          marks: 2,
        },
        {
          type: "shortAnswer",
          q: "Explain the scope of Micro Economics.",
          answer: `**Scope of Micro Economics:**

1. **Theory of Consumer Behavior**: Utility analysis, demand, consumer equilibrium
2. **Theory of Producer/Firm**: Production, cost, revenue analysis
3. **Theory of Price**: Price determination under different market structures
4. **Theory of Factor Pricing**: Wages, rent, interest, profit determination
5. **Theory of Economic Welfare**: Efficiency, equity, market failures

**Importance**: Foundation for understanding individual decision-making and market mechanisms.`,
          marks: 4,
        },
      ],
    },
    chapter2: {
      title: "Chapter 2: Utility Analysis",
      exercises: [
        {
          type: "economicTerm",
          q: "Want satisfying power of a commodity.",
          answer: "Utility",
          marks: 1,
        },
        {
          type: "economicTerm",
          q: "Additional utility from consuming one more unit.",
          answer: "Marginal Utility (MU)",
          marks: 1,
        },
        {
          type: "economicTerm",
          q: "Sum of utilities from all units consumed.",
          answer: "Total Utility (TU)",
          marks: 1,
        },
        {
          type: "correlation",
          q: "TU Maximum : MU Zero :: MU Negative : ___",
          answer: "TU Falling/Decreasing",
          marks: 1,
        },
        {
          type: "oddOne",
          q: "Cardinal utility, Ordinal utility, Total utility, National income",
          answer:
            "National income - It belongs to Macro Economics, others are utility concepts.",
          marks: 1,
        },
        {
          type: "trueFalse",
          q: "When TU is maximum, MU is zero.",
          answer:
            "TRUE. At the point of satiety (maximum satisfaction), consuming one more unit adds zero utility. After this point, MU becomes negative and TU starts falling.",
          marks: 2,
        },
        {
          type: "trueFalse",
          q: "MU curve slopes upward.",
          answer:
            "FALSE. MU curve slopes downward due to Law of Diminishing Marginal Utility. As consumption increases, utility from each additional unit decreases.",
          marks: 2,
        },
        {
          type: "distinguish",
          q: "Distinguish between Total Utility and Marginal Utility.",
          answer: `| Aspect | Total Utility (TU) | Marginal Utility (MU) |
|--------|-------------------|----------------------|
| Meaning | Sum of all utilities | Additional utility from one more unit |
| Formula | TU = ΣMU | MU = TUn - TUn-1 |
| Curve Shape | Inverted U-shape | Downward sloping |
| Maximum Point | When MU = 0 | First unit gives highest MU |
| Relation | TU rises when MU > 0 | MU derived from TU |
| At Satiety | TU is maximum | MU is zero |`,
          marks: 2,
        },
        {
          type: "shortAnswer",
          q: "State and explain the Law of Diminishing Marginal Utility.",
          answer: `**Law of Diminishing Marginal Utility:**

**Statement**: As a consumer consumes more units of a commodity, the marginal utility derived from each successive unit goes on diminishing.

**Given by**: H.H. Gossen (Gossen's First Law)

**Assumptions**:
- Continuous consumption without time gap
- Homogeneous units
- Reasonable size of units
- No change in consumer's taste
- Rational consumer
- Money income constant

**Example**:
| Units | TU | MU |
|-------|-----|-----|
| 1 | 10 | 10 |
| 2 | 18 | 8 |
| 3 | 24 | 6 |
| 4 | 28 | 4 |
| 5 | 28 | 0 (Satiety) |

**Exceptions**: Hobbies, misers, drunkards`,
          marks: 4,
        },
        {
          type: "longAnswer",
          q: "Explain Consumer Equilibrium with single commodity (Cardinal Utility Approach).",
          answer: `**Consumer Equilibrium - Single Commodity**

**Definition**: State where consumer maximizes satisfaction from given income.

**Condition**: MU = Price (MUx = Px)

**Why MU = P?**
- If MU > P: Consumer gains by buying more (surplus utility)
- If MU < P: Consumer loses by buying more
- If MU = P: Maximum satisfaction achieved

**Schedule Example** (Price = ₹4):
| Units | MU | Price | Decision |
|-------|-----|-------|----------|
| 1 | 10 | 4 | Buy (MU > P) |
| 2 | 8 | 4 | Buy (MU > P) |
| 3 | 6 | 4 | Buy (MU > P) |
| 4 | 4 | 4 | Equilibrium (MU = P) |
| 5 | 2 | 4 | Don't buy (MU < P) |

**Diagram**: Draw MU curve intersecting horizontal price line

**Conclusion**: Consumer equilibrium at 4 units where MU = Price = ₹4`,
          marks: 8,
        },
      ],
    },
    chapter3: {
      title: "Chapter 3: Demand Analysis",
      exercises: [
        {
          type: "economicTerm",
          q: "Quantity of commodity buyer is willing and able to buy at given price.",
          answer: "Demand",
          marks: 1,
        },
        {
          type: "economicTerm",
          q: "Goods that violate law of demand where demand rises with price.",
          answer: "Giffen Goods",
          marks: 1,
        },
        {
          type: "economicTerm",
          q: "Increase in quantity demanded due to fall in price.",
          answer: "Extension of Demand",
          marks: 1,
        },
        {
          type: "correlation",
          q: "Extension of Demand : Fall in Price :: Contraction of Demand : ___",
          answer: "Rise in Price",
          marks: 1,
        },
        {
          type: "correlation",
          q: "Movement along curve : Extension/Contraction :: Shift of curve : ___",
          answer: "Increase/Decrease in Demand",
          marks: 1,
        },
        {
          type: "oddOne",
          q: "Price, Income, Taste, Supply of commodity",
          answer:
            "Supply of commodity - It is not a determinant of demand, others affect demand.",
          marks: 1,
        },
        {
          type: "trueFalse",
          q: "Demand curve slopes downward from left to right.",
          answer:
            "TRUE. Due to inverse relationship between price and quantity demanded (Law of Demand). As price falls, quantity demanded rises, making the curve slope downward.",
          marks: 2,
        },
        {
          type: "distinguish",
          q: "Distinguish between Extension and Increase in Demand.",
          answer: `| Aspect | Extension of Demand | Increase in Demand |
|--------|--------------------|--------------------|
| Cause | Fall in own price | Other factors (income, taste) |
| Price | Changes (falls) | Remains constant |
| Movement | Along the same curve | Shift of entire curve |
| Direction | Downward movement | Rightward shift |
| Other Factors | Remain constant | Change |
| Diagram | Point A to B on curve | D1 to D2 (new curve) |`,
          marks: 2,
        },
        {
          type: "shortAnswer",
          q: "State the Law of Demand with assumptions and exceptions.",
          answer: `**Law of Demand:**

**Statement**: "Other things being equal, when price of a commodity falls, quantity demanded rises, and when price rises, quantity demanded falls."

**Relationship**: Inverse/Negative (Price ↑ → Demand ↓)

**Assumptions (Ceteris Paribus)**:
1. Income remains constant
2. Prices of related goods unchanged
3. Consumer's tastes constant
4. No future price expectations
5. No new substitutes
6. Population unchanged

**Exceptions**:
1. **Giffen Goods**: Inferior goods (cheap necessities)
2. **Veblen Goods**: Prestige/luxury goods (diamonds)
3. **Future Expectations**: If price expected to rise
4. **Necessities**: Demand inelastic
5. **Ignorance**: Consumer unaware of price change`,
          marks: 4,
        },
        {
          type: "longAnswer",
          q: "Explain the Law of Demand with demand schedule, diagram, and reasons for downward slope.",
          answer: `**Law of Demand - Detailed Explanation**

**Statement**: Other things being equal, when price rises, quantity demanded falls, and vice versa.

**Demand Schedule**:
| Price (₹) | Quantity Demanded |
|-----------|-------------------|
| 50 | 100 |
| 40 | 200 |
| 30 | 300 |
| 20 | 400 |
| 10 | 500 |

**Diagram**: Draw downward sloping demand curve (DD)
- X-axis: Quantity Demanded
- Y-axis: Price
- Curve slopes from upper left to lower right

**Reasons for Downward Slope**:

1. **Income Effect**: When price falls, real income rises, allowing more purchases

2. **Substitution Effect**: Cheaper goods preferred over expensive substitutes

3. **New Buyers**: Lower prices attract new consumers who couldn't afford earlier

4. **Multiple Uses**: At lower prices, goods can be used for more purposes

5. **Diminishing Marginal Utility**: Lower price compensates for lower MU of additional units

**Conclusion**: Law of Demand is fundamental law showing inverse relationship between price and quantity demanded, forming basis of demand curve analysis.`,
          marks: 8,
        },
      ],
    },
    chapter4: {
      title: "Chapter 4: Elasticity of Demand",
      exercises: [
        {
          type: "economicTerm",
          q: "Degree of responsiveness of demand to change in price.",
          answer: "Price Elasticity of Demand",
          marks: 1,
        },
        {
          type: "economicTerm",
          q: "Demand where coefficient is greater than one.",
          answer: "Elastic Demand (Ed > 1)",
          marks: 1,
        },
        {
          type: "correlation",
          q: "Ed = 0 : Perfectly Inelastic :: Ed = ∞ : ___",
          answer: "Perfectly Elastic",
          marks: 1,
        },
        {
          type: "correlation",
          q: "Luxuries : Elastic Demand :: Necessities : ___",
          answer: "Inelastic Demand",
          marks: 1,
        },
        {
          type: "oddOne",
          q: "Ed = 0, Ed = 1, Ed > 1, Supply Elasticity",
          answer:
            "Supply Elasticity - Others are types of price elasticity of demand.",
          marks: 1,
        },
        {
          type: "trueFalse",
          q: "Perfectly elastic demand curve is horizontal.",
          answer:
            "TRUE. When Ed = ∞, any quantity can be sold at the same price. The slightest price increase reduces quantity to zero. Example: Perfect competition.",
          marks: 2,
        },
        {
          type: "trueFalse",
          q: "Demand for necessities is elastic.",
          answer:
            "FALSE. Demand for necessities (salt, rice, medicine) is INELASTIC (Ed < 1). People buy them regardless of price changes as they are essential for survival.",
          marks: 2,
        },
        {
          type: "distinguish",
          q: "Distinguish between Elastic and Inelastic Demand.",
          answer: `| Aspect | Elastic Demand | Inelastic Demand |
|--------|----------------|------------------|
| Coefficient | Ed > 1 | Ed < 1 |
| Response | Large change in Qd | Small change in Qd |
| % Change | %ΔQd > %ΔP | %ΔQd < %ΔP |
| Curve Shape | Flatter | Steeper |
| Goods | Luxuries, goods with substitutes | Necessities, habit-forming |
| Examples | AC, car, air travel | Salt, medicine, petrol |
| Total Expenditure | Falls when P rises | Rises when P rises |`,
          marks: 2,
        },
        {
          type: "shortAnswer",
          q: "Explain the types of Price Elasticity of Demand.",
          answer: `**Types of Price Elasticity of Demand:**

| Type | Coefficient | Curve | Example |
|------|-------------|-------|---------|
| **Perfectly Elastic** | Ed = ∞ | Horizontal | Perfect competition |
| **Elastic** | Ed > 1 | Flatter | Luxuries (AC, car) |
| **Unitary Elastic** | Ed = 1 | Rectangular hyperbola | Theoretical |
| **Inelastic** | Ed < 1 | Steeper | Necessities (salt) |
| **Perfectly Inelastic** | Ed = 0 | Vertical | Life-saving drugs |

**Key Relationships**:
- Elastic: %ΔQd > %ΔP
- Inelastic: %ΔQd < %ΔP
- Unitary: %ΔQd = %ΔP

**Draw 5 diagrams showing each type of elasticity**`,
          marks: 4,
        },
        {
          type: "numerical",
          q: "Price rises from ₹20 to ₹25, quantity demanded falls from 50 to 40 units. Calculate Ed.",
          answer: `**Solution:**

Given: P₁ = 20, P₂ = 25, Q₁ = 50, Q₂ = 40

**Using Percentage Method:**
Ed = %ΔQd / %ΔP

**Step 1**: %ΔQd = (Q₂ - Q₁)/Q₁ × 100
= (40 - 50)/50 × 100 = -20%

**Step 2**: %ΔP = (P₂ - P₁)/P₁ × 100
= (25 - 20)/20 × 100 = 25%

**Step 3**: Ed = -20% / 25% = **-0.8** (or 0.8 in absolute terms)

**Conclusion**: Ed < 1, demand is **Inelastic**`,
          marks: 4,
        },
      ],
    },
    chapter5: {
      title: "Chapter 5: Market Structure",
      exercises: [
        {
          type: "economicTerm",
          q: "Market with large number of buyers and sellers dealing in identical products.",
          answer: "Perfect Competition",
          marks: 1,
        },
        {
          type: "economicTerm",
          q: "Market with single seller and no close substitutes.",
          answer: "Monopoly",
          marks: 1,
        },
        {
          type: "economicTerm",
          q: "Market with few large sellers.",
          answer: "Oligopoly",
          marks: 1,
        },
        {
          type: "correlation",
          q: "Perfect Competition : Price Taker :: Monopoly : ___",
          answer: "Price Maker",
          marks: 1,
        },
        {
          type: "correlation",
          q: "Perfect Competition : AR = MR :: Monopoly : ___",
          answer: "AR > MR",
          marks: 1,
        },
        {
          type: "oddOne",
          q: "Monopoly, Duopoly, Oligopoly, Utility",
          answer:
            "Utility - Others are market structures, utility is consumption concept.",
          marks: 1,
        },
        {
          type: "trueFalse",
          q: "In perfect competition, firm is a price taker.",
          answer:
            "TRUE. Individual firm has negligible market share, cannot influence price. Must accept price determined by market forces. AR = MR = Price (horizontal demand curve).",
          marks: 2,
        },
        {
          type: "trueFalse",
          q: "Monopolist can charge any price.",
          answer:
            "FALSE. Though monopolist is price maker, price is constrained by demand. Cannot charge unlimited price as higher price reduces quantity sold. Must consider demand elasticity.",
          marks: 2,
        },
        {
          type: "distinguish",
          q: "Distinguish between Perfect Competition and Monopoly.",
          answer: `| Aspect | Perfect Competition | Monopoly |
|--------|---------------------|----------|
| Sellers | Very large number | Single |
| Products | Homogeneous | Unique, no substitutes |
| Price Control | None (Price taker) | Full (Price maker) |
| Entry/Exit | Free | Blocked (barriers) |
| Demand Curve | Horizontal | Downward sloping |
| AR and MR | AR = MR | AR > MR |
| Profits | Normal in long run | Supernormal possible |
| Examples | Agricultural market | Indian Railways |`,
          marks: 2,
        },
        {
          type: "shortAnswer",
          q: "Explain the features of Perfect Competition.",
          answer: `**Features of Perfect Competition:**

1. **Large Number of Buyers & Sellers**: Individual has negligible share

2. **Homogeneous Products**: Identical goods, perfect substitutes

3. **Free Entry and Exit**: No barriers, long-run normal profits

4. **Perfect Knowledge**: Full information about prices, quality

5. **Perfect Mobility**: Factors can move freely

6. **No Transport Costs**: Uniform price everywhere

7. **Price Taker**: Firm accepts market price (AR = MR = Price)

8. **No Selling Costs**: No advertising needed

**Examples**: Stock markets, agricultural produce markets`,
          marks: 4,
        },
        {
          type: "longAnswer",
          q: "Explain the features of Monopoly market.",
          answer: `**Features of Monopoly Market**

**Definition**: Market structure with single seller having complete control over supply of a product with no close substitutes.

**Features**:

1. **Single Seller**:
   - Only one firm in the industry
   - Firm = Industry
   - Complete market control

2. **No Close Substitutes**:
   - Product is unique
   - Cross elasticity of demand is zero
   - No competition

3. **Price Maker**:
   - Full control over price
   - Can set price to maximize profit
   - Limited by demand constraints

4. **Blocked Entry**:
   - Barriers prevent new firms
   - Legal barriers (patents, licenses)
   - Natural barriers (economies of scale)
   - Artificial barriers (control of resources)

5. **Price Discrimination**:
   - Can charge different prices in different markets
   - Based on elasticity of demand

6. **Abnormal Profits**:
   - Possible even in long run
   - No competition to reduce profits

7. **Downward Sloping Demand Curve**:
   - AR curve slopes downward
   - AR > MR always
   - MR can be negative

**Examples**: Indian Railways, local water/electricity supply

**Diagram**: Draw downward sloping AR and MR curves (MR below AR)`,
          marks: 8,
        },
      ],
    },
    chapter6: {
      title: "Chapter 6: Index Numbers",
      exercises: [
        {
          type: "economicTerm",
          q: "Statistical measure to compare prices over different time periods.",
          answer: "Index Number / Price Index",
          marks: 1,
        },
        {
          type: "economicTerm",
          q: "Index that uses base year quantities as weights.",
          answer: "Laspeyre's Index",
          marks: 1,
        },
        {
          type: "economicTerm",
          q: "Index that is geometric mean of Laspeyre's and Paasche's.",
          answer: "Fisher's Ideal Index",
          marks: 1,
        },
        {
          type: "correlation",
          q: "Laspeyre's Index : Base year quantities :: Paasche's Index : ___",
          answer: "Current year quantities",
          marks: 1,
        },
        {
          type: "oddOne",
          q: "Laspeyre's, Paasche's, Fisher's, Marshall's utility",
          answer: "Marshall's utility - Others are index number methods.",
          marks: 1,
        },
        {
          type: "trueFalse",
          q: "Fisher's Index is called ideal index.",
          answer:
            "TRUE. Fisher's Index satisfies both Time Reversal Test and Factor Reversal Test. It is the geometric mean of Laspeyre's and Paasche's indices, giving balanced measure.",
          marks: 2,
        },
        {
          type: "shortAnswer",
          q: "Explain the uses of Index Numbers.",
          answer: `**Uses of Index Numbers:**

1. **Measure Price Changes**: Track inflation/deflation
2. **Cost of Living**: Calculate real wages, adjust salaries
3. **Policy Making**: Guide monetary and fiscal policy
4. **Deflating**: Convert nominal to real values
5. **Comparison**: Compare economic conditions across time/regions
6. **Forecasting**: Predict future trends
7. **Wage Determination**: Dearness allowance calculations
8. **Business Decisions**: Pricing, investment planning

**Types**: CPI (Consumer Price Index), WPI (Wholesale Price Index)`,
          marks: 4,
        },
        {
          type: "numerical",
          q: "Calculate Fisher's Index if Laspeyre's Index = 120 and Paasche's Index = 125.",
          answer: `**Solution:**

Given:
- Laspeyre's Index (L) = 120
- Paasche's Index (P) = 125

**Formula**: Fisher's Index = √(L × P)

**Calculation**:
Fisher's Index = √(120 × 125)
= √15000
= **122.47**

**Note**: Fisher's Index lies between L and P (120 < 122.47 < 125)

Fisher's is called 'Ideal Index' because:
1. Geometric mean of L and P
2. Satisfies Time Reversal Test
3. Satisfies Factor Reversal Test`,
          marks: 4,
        },
      ],
    },
    chapter7: {
      title: "Chapter 7: National Income",
      exercises: [
        {
          type: "economicTerm",
          q: "Total value of goods/services produced within domestic territory.",
          answer: "Gross Domestic Product (GDP)",
          marks: 1,
        },
        {
          type: "economicTerm",
          q: "GDP + Net Factor Income from Abroad.",
          answer: "Gross National Product (GNP)",
          marks: 1,
        },
        {
          type: "economicTerm",
          q: "GNP minus Depreciation.",
          answer: "Net National Product (NNP)",
          marks: 1,
        },
        {
          type: "correlation",
          q: "GDP : Domestic Territory :: GNP : ___",
          answer: "Normal Residents / National",
          marks: 1,
        },
        {
          type: "correlation",
          q: "Market Price : Includes Indirect Taxes :: Factor Cost : ___",
          answer: "Excludes Indirect Taxes",
          marks: 1,
        },
        {
          type: "oddOne",
          q: "GDP, GNP, NNP, MU",
          answer:
            "MU (Marginal Utility) - Others are national income aggregates.",
          marks: 1,
        },
        {
          type: "trueFalse",
          q: "National Income is same as NNP at Factor Cost.",
          answer:
            "TRUE. National Income = NNP at FC = NNP at MP - Indirect Taxes + Subsidies. It represents the total factor incomes (wages, rent, interest, profit) earned by normal residents.",
          marks: 2,
        },
        {
          type: "distinguish",
          q: "Distinguish between GDP and GNP.",
          answer: `| Aspect | GDP | GNP |
|--------|-----|-----|
| Full Form | Gross Domestic Product | Gross National Product |
| Scope | Domestic territory | Normal residents |
| NFIA | Not included | Included |
| Formula | Value of production within borders | GDP + NFIA |
| Focus | Location of production | Nationality of producer |
| For India | Includes foreign firms in India | Includes Indians abroad |`,
          marks: 2,
        },
        {
          type: "shortAnswer",
          q: "Explain the three methods of measuring National Income.",
          answer: `**Methods of Measuring National Income:**

**1. Product/Value Added Method**:
- Adds value added by all producing units
- Value Added = Output - Intermediate Consumption
- Avoids double counting
- GDP = ΣVA of all sectors

**2. Income Method**:
- Adds all factor incomes
- NI = Wages + Rent + Interest + Profit
- Only factor incomes (not transfers)

**3. Expenditure Method**:
- Adds all final expenditures
- GDP = C + I + G + (X - M)
- C = Consumption, I = Investment, G = Govt expenditure

**Note**: All three methods give same result (National Income Identity)`,
          marks: 4,
        },
        {
          type: "numerical",
          q: "Calculate NI at FC from: GDP at MP = ₹5000 cr, Depreciation = ₹300 cr, NFIA = ₹200 cr, Indirect Taxes = ₹400 cr, Subsidies = ₹100 cr",
          answer: `**Solution:**

**Step 1**: GNP at MP = GDP at MP + NFIA
= 5000 + 200 = ₹5200 cr

**Step 2**: NNP at MP = GNP at MP - Depreciation
= 5200 - 300 = ₹4900 cr

**Step 3**: NI at FC = NNP at MP - Indirect Taxes + Subsidies
= 4900 - 400 + 100 = **₹4600 cr**

**Answer**: National Income at Factor Cost = ₹4600 crore`,
          marks: 4,
        },
      ],
    },
    chapter8: {
      title: "Chapter 8: Public Finance",
      exercises: [
        {
          type: "economicTerm",
          q: "Tax burden that cannot be shifted to others.",
          answer: "Direct Tax",
          marks: 1,
        },
        {
          type: "economicTerm",
          q: "Tax burden that can be shifted to others.",
          answer: "Indirect Tax",
          marks: 1,
        },
        {
          type: "economicTerm",
          q: "Comprehensive indirect tax on supply of goods and services.",
          answer: "GST (Goods and Services Tax)",
          marks: 1,
        },
        {
          type: "correlation",
          q: "Direct Tax : Income Tax :: Indirect Tax : ___",
          answer: "GST / Excise Duty / Customs",
          marks: 1,
        },
        {
          type: "correlation",
          q: "Revenue Receipt : No liability :: Capital Receipt : ___",
          answer: "Creates liability / May reduce assets",
          marks: 1,
        },
        {
          type: "oddOne",
          q: "CGST, SGST, IGST, Income Tax",
          answer:
            "Income Tax - It is direct tax, others are components of GST (indirect tax).",
          marks: 1,
        },
        {
          type: "trueFalse",
          q: "GST is a destination-based tax.",
          answer:
            "TRUE. GST is levied where goods/services are consumed (destination), not where produced (origin). This ensures tax revenue goes to consuming state.",
          marks: 2,
        },
        {
          type: "trueFalse",
          q: "Direct taxes are regressive.",
          answer:
            "FALSE. Direct taxes are PROGRESSIVE - higher income pays higher rate. Indirect taxes are regressive - same rate for all regardless of income.",
          marks: 2,
        },
        {
          type: "distinguish",
          q: "Distinguish between Direct and Indirect Tax.",
          answer: `| Aspect | Direct Tax | Indirect Tax |
|--------|------------|--------------|
| Burden | Cannot be shifted | Can be shifted |
| Impact & Incidence | On same person | On different persons |
| Nature | Progressive | Regressive |
| Examples | Income tax, Wealth tax | GST, Excise duty |
| Collection | Directly from taxpayer | Through intermediaries |
| Evasion | More possible | Less possible |
| Convenience | Less convenient | More convenient |`,
          marks: 2,
        },
        {
          type: "shortAnswer",
          q: "What is GST? Explain its features.",
          answer: `**Goods and Services Tax (GST):**

**Definition**: Comprehensive indirect tax on supply of goods and services.

**Introduced**: July 1, 2017 (101st Constitutional Amendment)

**Features**:
1. **One Nation One Tax**: Replaced 17+ indirect taxes
2. **Destination Based**: Tax where consumed
3. **Dual Structure**: CGST (Centre) + SGST (State)
4. **IGST**: For inter-state transactions
5. **Multiple Rates**: 0%, 5%, 12%, 18%, 28%
6. **Input Tax Credit**: Tax paid can be set off
7. **Digital**: Online registration, filing

**Benefits**: Unified market, reduced cascading, simplified structure`,
          marks: 4,
        },
        {
          type: "longAnswer",
          q: "Explain types of Budget and its components.",
          answer: `**Types of Government Budget**

**Based on Balance**:

1. **Balanced Budget**: Revenue = Expenditure
   - Rare in practice
   - Classical economics recommended

2. **Surplus Budget**: Revenue > Expenditure
   - Used to control inflation
   - Reduces money supply

3. **Deficit Budget**: Revenue < Expenditure
   - Common in developing countries
   - Finances development

**Types of Deficit**:
- Revenue Deficit = Revenue Exp - Revenue Receipts
- Fiscal Deficit = Total Exp - Total Receipts (excl. borrowings)
- Primary Deficit = Fiscal Deficit - Interest Payments

**Components of Budget**:

**A. Revenue Budget**:
- Revenue Receipts: Tax + Non-tax revenue
- Revenue Expenditure: Running costs, salaries, interest

**B. Capital Budget**:
- Capital Receipts: Loans, disinvestment, recovery
- Capital Expenditure: Asset creation, loan repayments

**Diagram**: Show budget components in flowchart`,
          marks: 8,
        },
      ],
    },
  },

  // ==================== BOARD EXAM PROBABLE QUESTIONS 2026 ====================
  probableQuestions2026: {
    q4MarksShortAnswer: [
      "State and explain the Law of Demand.",
      "State and explain the Law of Diminishing Marginal Utility.",
      "Explain types of Price Elasticity of Demand.",
      "Distinguish between Micro and Macro Economics.",
      "Distinguish between Perfect Competition and Monopoly.",
      "Distinguish between Direct and Indirect Tax.",
      "What is GST? State its features.",
      "Explain the concept of National Income.",
      "What are Index Numbers? State uses.",
    ],
    q8MarksLongAnswer: [
      "Explain the Law of Demand with schedule, diagram, and exceptions.",
      "Explain the features of Perfect Competition.",
      "Explain the features of Monopoly market.",
      "Explain the three methods of measuring National Income.",
      "Explain types of Price Elasticity of Demand with diagrams.",
      "Explain Consumer Equilibrium (Single Commodity).",
    ],
    q5TableFigureTopics: [
      "Complete TU/MU table and identify Point of Satiety",
      "Calculate Price Elasticity of Demand (Percentage method)",
      "Calculate GDP/NDP/NI from given components",
      "Calculate Simple/Weighted Price Index Number",
    ],
  },
};

export default ECONOMICS_BOARD_CRASHER;
