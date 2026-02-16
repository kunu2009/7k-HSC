import React, { useState, useEffect } from "react";
import {
  X,
  Clock,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Send,
  Eye,
  FileText,
  Award,
  RotateCcw,
  Play,
  Pause,
  Flag,
  Calendar,
  Calculator,
} from "lucide-react";

interface EcoMockTestProps {
  onClose: () => void;
}

// February 2024 Economics Board Paper
const MOCK_PAPER_2024 = {
  title: "Economics - February 2024",
  totalMarks: 80,
  duration: 180,

  sections: [
    {
      id: "q1a_2024",
      type: "mcq_combo",
      title: "Q.1(A) Choose the correct option",
      marks: 5,
      instructions: "Choose the correct option (combination type)",
      questions: [
        {
          id: "eco_q1a1_2024",
          question: "Which of the following is studied in Micro Economics?\n(a) Individual demand\n(b) National Income\n(c) General price level\n(d) Aggregate supply",
          options: ["Only (a)", "Only (b)", "(a) and (b)", "(c) and (d)"],
          correct: 0,
          marks: 1,
        },
        {
          id: "eco_q1a2_2024",
          question: "When TU is maximum:\n(a) MU is zero\n(b) MU is negative\n(c) MU is maximum\n(d) Consumer reaches satiety point",
          options: ["(a) and (d)", "(b) and (c)", "Only (a)", "Only (c)"],
          correct: 0,
          marks: 1,
        },
        {
          id: "eco_q1a3_2024",
          question: "Features of Perfect Competition:\n(a) Homogeneous products\n(b) Free entry and exit\n(c) Price maker\n(d) Large number of buyers and sellers",
          options: ["(a), (b), (c)", "(a), (b), (d)", "(b), (c), (d)", "All of these"],
          correct: 1,
          marks: 1,
        },
        {
          id: "eco_q1a4_2024",
          question: "GST includes:\n(a) CGST\n(b) SGST\n(c) IGST\n(d) Income Tax",
          options: ["(a), (b), (c)", "(a), (b), (d)", "(b), (c), (d)", "All of these"],
          correct: 0,
          marks: 1,
        },
        {
          id: "eco_q1a5_2024",
          question: "National Income includes:\n(a) Wages\n(b) Rent\n(c) Interest\n(d) Transfer payments",
          options: ["(a), (b), (c)", "(a), (b), (d)", "(b), (c), (d)", "All of these"],
          correct: 0,
          marks: 1,
        },
      ],
    },
    {
      id: "q1b_2024",
      type: "economic_term",
      title: "Q.1(B) Give Economic Terms",
      marks: 5,
      instructions: "Give economic terms for the following",
      questions: [
        {
          id: "eco_q1b1_2024",
          statement: "Study of individual economic units.",
          answer: "Micro Economics",
          marks: 1,
        },
        {
          id: "eco_q1b2_2024",
          statement: "Additional utility from consuming one more unit.",
          answer: "Marginal Utility (MU)",
          marks: 1,
        },
        {
          id: "eco_q1b3_2024",
          statement: "A market with single seller and no substitutes.",
          answer: "Monopoly",
          marks: 1,
        },
        {
          id: "eco_q1b4_2024",
          statement: "Total value of goods produced within domestic territory.",
          answer: "Gross Domestic Product (GDP)",
          marks: 1,
        },
        {
          id: "eco_q1b5_2024",
          statement: "Tax burden that cannot be shifted.",
          answer: "Direct Tax",
          marks: 1,
        },
      ],
    },
    {
      id: "q1c_2024",
      type: "odd_one",
      title: "Q.1(C) Find the Odd Man Out",
      marks: 5,
      instructions: "Find the odd word from the given set",
      questions: [
        {
          id: "eco_q1c1_2024",
          set: ["Wages", "Rent", "Interest", "Transfer payments"],
          answer: "Transfer payments",
          reason: "Transfer payments are not factor income, others are factor incomes.",
          marks: 1,
        },
        {
          id: "eco_q1c2_2024",
          set: ["Perfect competition", "Monopoly", "Oligopoly", "Demand"],
          answer: "Demand",
          reason: "Demand is not a market structure, others are types of market.",
          marks: 1,
        },
        {
          id: "eco_q1c3_2024",
          set: ["CGST", "SGST", "IGST", "Income Tax"],
          answer: "Income Tax",
          reason: "Income tax is a direct tax, others are components of GST (indirect tax).",
          marks: 1,
        },
        {
          id: "eco_q1c4_2024",
          set: ["Laspeyre's", "Paasche's", "Fisher's", "Marshall's"],
          answer: "Marshall's",
          reason: "Marshall gave utility theory, others are index number methods.",
          marks: 1,
        },
        {
          id: "eco_q1c5_2024",
          set: ["Revenue receipt", "Capital receipt", "Revenue expenditure", "Elastic demand"],
          answer: "Elastic demand",
          reason: "Elastic demand is related to demand, others are budget concepts.",
          marks: 1,
        },
      ],
    },
    {
      id: "q1d_2024",
      type: "correlation",
      title: "Q.1(D) Complete the Correlation",
      marks: 5,
      instructions: "Complete the correlation",
      questions: [
        {
          id: "eco_q1d1_2024",
          correlation: "Micro Economics : Price Theory :: Macro Economics : ___",
          answer: "Income Theory",
          marks: 1,
        },
        {
          id: "eco_q1d2_2024",
          correlation: "TU Maximum : MU Zero :: MU Negative : ___",
          answer: "TU Falling / TU Decreasing",
          marks: 1,
        },
        {
          id: "eco_q1d3_2024",
          correlation: "Perfect Competition : Price Taker :: Monopoly : ___",
          answer: "Price Maker",
          marks: 1,
        },
        {
          id: "eco_q1d4_2024",
          correlation: "Direct Tax : Income Tax :: Indirect Tax : ___",
          answer: "GST / Excise Duty / Customs",
          marks: 1,
        },
        {
          id: "eco_q1d5_2024",
          correlation: "GDP : Domestic Territory :: GNP : ___",
          answer: "Normal Residents / National Territory",
          marks: 1,
        },
      ],
    },
    {
      id: "q2a_2024",
      type: "identify_explain",
      title: "Q.2(A) Identify and Explain",
      marks: 6,
      instructions: "Identify and explain the concept (Any 3 out of 5, 2 marks each)",
      required: 3,
      questions: [
        {
          id: "eco_q2a1_2024",
          statement: "As consumer consumes more units, utility from each successive unit diminishes.",
          concept: "Law of Diminishing Marginal Utility",
          modelAnswer: "**Law of Diminishing Marginal Utility**\n\n• Given by H.H. Gossen (Gossen's First Law)\n• As consumption increases, MU decreases\n• Assumptions: Continuous consumption, homogeneous units\n• Example: First chapati gives high satisfaction, subsequent ones give less",
          marks: 2,
        },
        {
          id: "eco_q2a2_2024",
          statement: "A market with large number of sellers selling differentiated products.",
          concept: "Monopolistic Competition",
          modelAnswer: "**Monopolistic Competition**\n\n• Many sellers with product differentiation\n• Free entry and exit\n• Non-price competition (advertising, branding)\n• Downward sloping demand curve\n• Examples: Restaurants, clothing brands, soaps",
          marks: 2,
        },
        {
          id: "eco_q2a3_2024",
          statement: "Excess of total expenditure over total receipts excluding borrowings.",
          concept: "Fiscal Deficit",
          modelAnswer: "**Fiscal Deficit**\n\n• Shows government's borrowing requirement\n• Formula: Total Exp - (Rev Receipts + Cap Receipts excl. borrowings)\n• Indicates how much government needs to borrow\n• Ideal: Below 3% of GDP\n• Financed through market borrowings",
          marks: 2,
        },
        {
          id: "eco_q2a4_2024",
          statement: "Index number that satisfies both time reversal and factor reversal tests.",
          concept: "Fisher's Ideal Index Number",
          modelAnswer: "**Fisher's Ideal Index Number**\n\n• Given by Irving Fisher\n• Formula: √(Laspeyre's × Paasche's)\n• Called 'Ideal' because it satisfies both tests\n• Geometric mean of two indices\n• Most accurate measure of price changes",
          marks: 2,
        },
        {
          id: "eco_q2a5_2024",
          statement: "Degree of responsiveness of quantity demanded to change in price.",
          concept: "Price Elasticity of Demand",
          modelAnswer: "**Price Elasticity of Demand (Ed)**\n\n• Formula: Ed = %ΔQd / %ΔP\n• Types: Elastic (>1), Inelastic (<1), Unitary (=1)\n• Perfectly elastic (∞), Perfectly inelastic (0)\n• Factors: Nature of commodity, substitutes, income",
          marks: 2,
        },
      ],
    },
    {
      id: "q2b_2024",
      type: "distinguish",
      title: "Q.2(B) Distinguish Between",
      marks: 6,
      instructions: "Distinguish between (Any 3 out of 5, 2 marks each)",
      required: 3,
      questions: [
        {
          id: "eco_q2b1_2024",
          concepts: "Micro Economics and Macro Economics",
          modelAnswer: "| Aspect | Micro Economics | Macro Economics |\n|--------|-----------------|------------------|\n| Meaning | Individual units | Economy as whole |\n| Also Called | Price Theory | Income Theory |\n| Father | Alfred Marshall | J.M. Keynes |\n| Method | Slicing | Lumping |\n| Scope | Consumer, firm | GDP, inflation |",
          marks: 2,
        },
        {
          id: "eco_q2b2_2024",
          concepts: "Total Utility and Marginal Utility",
          modelAnswer: "| Aspect | Total Utility | Marginal Utility |\n|--------|---------------|------------------|\n| Meaning | Sum of all utilities | Additional utility |\n| Formula | TU = ΣMU | MU = TUn - TUn-1 |\n| Curve | Inverted U | Downward sloping |\n| Max Point | When MU = 0 | First unit |",
          marks: 2,
        },
        {
          id: "eco_q2b3_2024",
          concepts: "Perfect Competition and Monopoly",
          modelAnswer: "| Aspect | Perfect Competition | Monopoly |\n|--------|---------------------|----------|\n| Sellers | Large number | Single |\n| Products | Homogeneous | Unique |\n| Price Control | None (price taker) | Full (price maker) |\n| Entry | Free | Blocked |\n| AR & MR | AR = MR | AR > MR |",
          marks: 2,
        },
        {
          id: "eco_q2b4_2024",
          concepts: "Direct Tax and Indirect Tax",
          modelAnswer: "| Aspect | Direct Tax | Indirect Tax |\n|--------|------------|---------------|\n| Burden | Cannot shift | Can shift |\n| Nature | Progressive | Regressive |\n| Examples | Income tax | GST, Excise |\n| Collection | Directly | Through intermediaries |",
          marks: 2,
        },
        {
          id: "eco_q2b5_2024",
          concepts: "Revenue Receipt and Capital Receipt",
          modelAnswer: "| Aspect | Revenue Receipt | Capital Receipt |\n|--------|-----------------|------------------|\n| Nature | Recurring | Non-recurring |\n| Liability | No liability | Creates liability |\n| Assets | No reduction | May reduce |\n| Examples | Tax, fees | Loans, disinvestment |",
          marks: 2,
        },
      ],
    },
    {
      id: "q3_2024",
      type: "short_answer",
      title: "Q.3 Answer the Following",
      marks: 12,
      instructions: "Answer the following (Any 3 out of 5, 4 marks each)",
      required: 3,
      questions: [
        {
          id: "eco_q3_1_2024",
          question: "Explain the Law of Demand.",
          modelAnswer: "**Law of Demand:**\n\n**Statement:** Other things remaining constant, when price rises, quantity demanded falls and vice versa.\n\n**Given by:** Alfred Marshall\n\n**Relationship:** Inverse (price ↑, demand ↓)\n\n**Reasons:**\n1. Income Effect\n2. Substitution Effect\n3. New Buyers\n4. Multiple Uses\n\n**Exceptions:** Giffen goods, Veblen goods, Future expectations\n\n**Diagram:** Downward sloping demand curve",
          marks: 4,
        },
        {
          id: "eco_q3_2_2024",
          question: "Explain the features of Monopoly.",
          modelAnswer: "**Features of Monopoly:**\n\n1. **Single Seller:** Only one firm in industry\n\n2. **No Substitutes:** Product is unique\n\n3. **Price Maker:** Full control over price\n\n4. **Blocked Entry:** Barriers prevent new firms\n\n5. **Abnormal Profits:** Even in long run\n\n6. **Price Discrimination:** Can charge different prices\n\n**Examples:** Indian Railways, local water supply",
          marks: 4,
        },
        {
          id: "eco_q3_3_2024",
          question: "Explain the concept of National Income.",
          modelAnswer: "**National Income:**\n\n**Definition:** Total money value of all final goods and services produced by normal residents in a year.\n\n**Methods of Calculation:**\n1. Value Added Method\n2. Income Method\n3. Expenditure Method\n\n**Important Aggregates:**\n- GDP = C + I + G + (X-M)\n- GNP = GDP + NFIA\n- NNP = GNP - Depreciation\n- NI = NNP at FC\n\n**Significance:** Measures economic progress",
          marks: 4,
        },
        {
          id: "eco_q3_4_2024",
          question: "What is GST? Explain its features.",
          modelAnswer: "**Goods and Services Tax (GST):**\n\n**Definition:** Comprehensive indirect tax on supply of goods and services.\n\n**Introduced:** July 1, 2017 (101st Amendment)\n\n**Features:**\n1. **One Nation One Tax**\n2. **Destination based**\n3. **Dual Structure:** CGST + SGST\n4. **IGST:** For inter-state\n5. **Multiple rates:** 0%, 5%, 12%, 18%, 28%\n\n**Benefits:** Reduced cascading, unified market",
          marks: 4,
        },
        {
          id: "eco_q3_5_2024",
          question: "Explain the types of Price Elasticity of Demand.",
          modelAnswer: "**Types of Price Elasticity:**\n\n1. **Perfectly Elastic (Ed = ∞):** Horizontal curve\n\n2. **Perfectly Inelastic (Ed = 0):** Vertical curve\n\n3. **Unitary Elastic (Ed = 1):** Rectangular hyperbola\n\n4. **Elastic (Ed > 1):** Flatter curve, luxuries\n\n5. **Inelastic (Ed < 1):** Steeper curve, necessities\n\n**Draw diagrams for each type**",
          marks: 4,
        },
      ],
    },
    {
      id: "q4_2024",
      type: "agree_disagree",
      title: "Q.4 Agree or Disagree",
      marks: 12,
      instructions: "State with reasons whether you agree or disagree (Any 3 out of 5, 4 marks each: 1 mark for statement + 3 marks for reasons)",
      required: 3,
      questions: [
        {
          id: "eco_q4_1_2024",
          statement: "Demand curve slopes downward.",
          modelAnswer: "**Agree** ✓ (1 mark)\n\n**Reasons:** (3 marks)\n1. Law of Demand shows inverse relationship\n2. Income effect - lower price increases real income\n3. Substitution effect - cheaper goods preferred\n4. New buyers enter at lower prices\n5. Multiple uses possible at lower prices\n\n*Exception: Giffen goods show upward slope*",
          marks: 4,
        },
        {
          id: "eco_q4_2_2024",
          statement: "Monopolist is a price maker.",
          modelAnswer: "**Agree** ✓ (1 mark)\n\n**Reasons:** (3 marks)\n1. Single seller in market\n2. No close substitutes available\n3. Entry barriers block competition\n4. Controls entire market supply\n5. Can set price to maximize profit\n\n*However, limited by demand constraints*",
          marks: 4,
        },
        {
          id: "eco_q4_3_2024",
          statement: "Higher National Income always means higher welfare.",
          modelAnswer: "**Disagree** ✗ (1 mark)\n\n**Reasons:** (3 marks)\n1. Distribution may be unequal\n2. Composition matters - war goods don't increase welfare\n3. Externalities like pollution reduce welfare\n4. Non-monetary factors ignored (health, education)\n5. Black money not included\n\n*NI is imperfect welfare measure*",
          marks: 4,
        },
        {
          id: "eco_q4_4_2024",
          statement: "GST has simplified tax structure in India.",
          modelAnswer: "**Agree** ✓ (1 mark)\n\n**Reasons:** (3 marks)\n1. One nation, one tax - replaced 17 taxes\n2. Reduced cascading effect\n3. Input tax credit available\n4. Digital compliance\n5. Unified market across states\n\n*Challenges: Multiple slabs, compliance burden*",
          marks: 4,
        },
        {
          id: "eco_q4_5_2024",
          statement: "In perfect competition, firm is a price taker.",
          modelAnswer: "**Agree** ✓ (1 mark)\n\n**Reasons:** (3 marks)\n1. Large number of buyers and sellers\n2. Homogeneous products\n3. Individual firm has negligible share\n4. Cannot influence market price\n5. Must accept price determined by market forces\n\n*AR = MR = Price (horizontal line)*",
          marks: 4,
        },
      ],
    },
    {
      id: "q5_2024",
      type: "table_analysis",
      title: "Q.5 Study the Table/Figure",
      marks: 8,
      instructions: "Study the following and answer (Any 2 out of 3, 4 marks each)",
      required: 2,
      questions: [
        {
          id: "eco_q5_1_2024",
          question: "Study the following table and answer:\n\n| Units | TU |\n|-------|-----|\n| 1 | 10 |\n| 2 | 18 |\n| 3 | 24 |\n| 4 | 28 |\n| 5 | 28 |\n\n(a) Calculate MU for each unit\n(b) At which unit is TU maximum?\n(c) State the law illustrated",
          modelAnswer: "**Solution:**\n\n**(a) MU Calculation:**\n| Units | TU | MU |\n|-------|-----|-----|\n| 1 | 10 | 10 |\n| 2 | 18 | 8 |\n| 3 | 24 | 6 |\n| 4 | 28 | 4 |\n| 5 | 28 | 0 |\n\n**(b)** TU is maximum at 5th unit (TU = 28)\n\n**(c)** Law of Diminishing Marginal Utility - As consumption increases, MU decreases",
          marks: 4,
        },
        {
          id: "eco_q5_2_2024",
          question: "From the following calculate Price Elasticity of Demand:\n\nOriginal Price = ₹100, New Price = ₹80\nOriginal Quantity = 40 units, New Quantity = 60 units\n\n(a) Calculate Ed using percentage method\n(b) What type of elasticity is this?\n(c) Name a commodity with such elasticity",
          modelAnswer: "**Solution:**\n\n**(a) Calculation:**\n%ΔQ = (60-40)/40 × 100 = 50%\n%ΔP = (80-100)/100 × 100 = -20%\n\nEd = %ΔQ / %ΔP = 50/20 = **2.5**\n\n**(b)** Ed > 1, so demand is **Elastic**\n\n**(c)** Examples: Air travel, luxury goods, electronic items, branded clothes",
          marks: 4,
        },
        {
          id: "eco_q5_3_2024",
          question: "Calculate National Income from:\n\nGDP at MP = ₹5000 cr\nDepreciation = ₹300 cr\nNFIA = ₹200 cr\nIndirect Taxes = ₹400 cr\nSubsidies = ₹100 cr",
          modelAnswer: "**Solution:**\n\n**Step 1:** GNP at MP = GDP at MP + NFIA\n= 5000 + 200 = ₹5200 cr\n\n**Step 2:** NNP at MP = GNP at MP - Depreciation\n= 5200 - 300 = ₹4900 cr\n\n**Step 3:** NI at FC = NNP at MP - IT + Subsidies\n= 4900 - 400 + 100 = **₹4600 cr**\n\n*National Income = ₹4600 crore*",
          marks: 4,
        },
      ],
    },
    {
      id: "q6_2024",
      type: "long_answer",
      title: "Q.6 Answer in Detail",
      marks: 16,
      instructions: "Answer in detail (Any 2 out of 3, 8 marks each)",
      required: 2,
      questions: [
        {
          id: "eco_q6_1_2024",
          question: "Explain the Law of Demand with demand schedule, diagram and exceptions.",
          modelAnswer: "### Law of Demand\n\n**Statement:** Other things being equal, when price rises, quantity demanded falls, and when price falls, quantity demanded rises.\n\n**Given by:** Alfred Marshall\n\n**Demand Schedule:**\n| Price (₹) | Quantity |\n|-----------|----------|\n| 10 | 50 |\n| 20 | 40 |\n| 30 | 30 |\n| 40 | 20 |\n| 50 | 10 |\n\n**Diagram:** Draw downward sloping demand curve (DD)\n- X-axis: Quantity\n- Y-axis: Price\n- Curve slopes from left to right downward\n\n**Reasons for Downward Slope:**\n1. **Income Effect:** Lower price = higher real income\n2. **Substitution Effect:** Cheaper goods preferred\n3. **New Buyers:** Lower prices attract new consumers\n4. **Multiple Uses:** More uses at lower prices\n5. **Diminishing MU:** Lower price compensates for lower MU\n\n**Exceptions:**\n1. **Giffen Goods:** Inferior goods where demand rises with price\n2. **Veblen Goods:** Prestige goods (diamonds, luxury cars)\n3. **Future Expectations:** If price expected to rise further\n4. **Ignorance:** Consumers unaware of price changes\n5. **Emergency:** Medical emergencies\n\n**Conclusion:** Law of Demand is fundamental law showing inverse relationship between price and quantity demanded.",
          marks: 8,
        },
        {
          id: "eco_q6_2_2024",
          question: "Explain the features of Perfect Competition market.",
          modelAnswer: "### Features of Perfect Competition\n\n**Definition:** A market with large number of buyers and sellers dealing in homogeneous products where no single buyer or seller can influence price.\n\n**Features:**\n\n**1. Large Number of Buyers and Sellers:**\n- Individual has negligible share\n- No one can influence price\n- Price determined by market forces\n\n**2. Homogeneous Products:**\n- All firms sell identical goods\n- No product differentiation\n- Perfect substitutes\n\n**3. Free Entry and Exit:**\n- No barriers to entry\n- Firms can enter/exit freely\n- Long-run normal profits\n\n**4. Perfect Knowledge:**\n- Full information available\n- No buyer pays more\n- No seller accepts less\n\n**5. Perfect Mobility:**\n- Factors move freely\n- Resources shift to profitable uses\n\n**6. No Transport Costs:**\n- Uniform price everywhere\n- No geographical advantage\n\n**7. Firm is Price Taker:**\n- Accepts market price\n- AR = MR = Price\n- Horizontal demand curve\n\n**8. No Selling Costs:**\n- No advertising needed\n- Products are identical\n\n**Examples:** Agricultural markets, stock exchanges\n\n**Conclusion:** Perfect competition is theoretical ideal ensuring efficient resource allocation.",
          marks: 8,
        },
        {
          id: "eco_q6_3_2024",
          question: "Explain the three methods of measuring National Income.",
          modelAnswer: "### Methods of Measuring National Income\n\n**Definition:** National Income is the total money value of all final goods and services produced by normal residents in a year.\n\n**1. Product/Value Added Method:**\n- Adds value added by all producing units\n- Value Added = Output - Intermediate Consumption\n- Avoids double counting\n- GDP = ΣVA of all sectors\n- Sectors: Primary + Secondary + Tertiary\n\n**Precautions:**\n- Include only final goods\n- Avoid double counting\n- Include imputed rent of owner-occupied houses\n\n**2. Income Method:**\n- Adds all factor incomes\n- NI = Wages + Rent + Interest + Profit\n- Includes compensation of employees\n- Mixed income of self-employed\n\n**Precautions:**\n- Only factor incomes included\n- Exclude transfer payments\n- Include income in kind\n\n**3. Expenditure Method:**\n- Adds all final expenditures\n- GDP = C + I + G + (X - M)\n- Where:\n  - C = Private Consumption\n  - I = Investment (Gross)\n  - G = Government Expenditure\n  - (X-M) = Net Exports\n\n**Precautions:**\n- Only final expenditure\n- Exclude intermediate goods\n- Include net exports\n\n**Important:** All three methods give same result (National Income identity)\n\n**Conclusion:** Multiple methods help cross-verify and ensure accuracy of national income estimates.",
          marks: 8,
        },
      ],
    },
  ],
};
          answer: "Marginal Utility (MU)",
          marks: 1,
        },
        {
          id: "eco_q1c2_2024",
          statement: "A market structure with single seller and no close substitutes.",
          answer: "Monopoly",
          marks: 1,
        },
        {
          id: "eco_q1c3_2024",
          statement: "Total value of all final goods and services produced within domestic territory.",
          answer: "Gross Domestic Product (GDP)",
          marks: 1,
        },
        {
          id: "eco_q1c4_2024",
          statement: "Tax burden cannot be shifted to others.",
          answer: "Direct Tax",
          marks: 1,
        },
        {
          id: "eco_q1c5_2024",
          statement: "Degree of responsiveness of demand to change in price.",
          answer: "Price Elasticity of Demand",
          marks: 1,
        },
      ],
    },
    {
      id: "q1d_2024",
      type: "true_false",
      title: "Q.1(D) State whether True or False",
      marks: 5,
      instructions: "State whether the following statements are True or False",
      questions: [
        {
          id: "eco_q1d1_2024",
          statement: "Macro Economics uses lumping method.",
          answer: true,
          marks: 1,
        },
        {
          id: "eco_q1d2_2024",
          statement: "Law of Demand shows direct relationship between price and quantity.",
          answer: false,
          marks: 1,
        },
        {
          id: "eco_q1d3_2024",
          statement: "In perfect competition, products are homogeneous.",
          answer: true,
          marks: 1,
        },
        {
          id: "eco_q1d4_2024",
          statement: "IGST is levied on intra-state transactions.",
          answer: false,
          marks: 1,
        },
        {
          id: "eco_q1d5_2024",
          statement: "Consumer surplus is maximum when MU equals zero.",
          answer: false,
          marks: 1,
        },
      ],
    },
    {
      id: "q2_2024",
      type: "identify_explain",
      title: "Q.2 Identify and Explain",
      marks: 6,
      instructions: "Identify the concept and explain (Any 3 out of 5)",
      required: 3,
      questions: [
        {
          id: "eco_q2_1_2024",
          statement: "As consumer consumes more units of a commodity, marginal utility diminishes.",
          concept: "Law of Diminishing Marginal Utility",
          modelAnswer: "**Law of Diminishing Marginal Utility (Law of DMU)**\n\nGiven by H.H. Gossen (Gossen's First Law)\n\n**Statement:** As a consumer consumes more units of a commodity, the utility derived from each successive unit goes on diminishing.\n\n**Example:** First glass of water gives high utility, second gives less, third even less.\n\n**Assumptions:** Continuous consumption, homogeneous units, rational consumer.",
          marks: 2,
        },
        {
          id: "eco_q2_2_2024",
          statement: "Price remains constant irrespective of quantity sold in this market.",
          concept: "Perfect Competition",
          modelAnswer: "**Perfect Competition**\n\n**Definition:** A market structure with large number of buyers and sellers dealing in homogeneous products.\n\n**Features:**\n- Price is determined by industry (market)\n- Individual firm is price taker\n- AR = MR = Price (constant)\n- Horizontal demand curve\n- Free entry and exit\n\n**Example:** Agricultural markets, stock markets.",
          marks: 2,
        },
        {
          id: "eco_q2_3_2024",
          statement: "Total expenditure - Total receipts excluding borrowings.",
          concept: "Fiscal Deficit",
          modelAnswer: "**Fiscal Deficit**\n\n**Definition:** Excess of total expenditure over total receipts excluding borrowings.\n\n**Formula:** Fiscal Deficit = Total Expenditure - (Revenue Receipts + Capital Receipts excluding borrowings)\n\n**Significance:**\n- Shows government's borrowing requirement\n- Indicates how much government needs to borrow\n- Important for fiscal policy\n\n**Ideal:** Should be below 3% of GDP.",
          marks: 2,
        },
        {
          id: "eco_q2_4_2024",
          statement: "GNP minus depreciation.",
          concept: "Net National Product (NNP)",
          modelAnswer: "**Net National Product (NNP)**\n\n**Definition:** GNP minus depreciation (wear and tear of capital goods).\n\n**Formula:** NNP = GNP - Depreciation\n\nOR NNP at MP = GNP at MP - Depreciation\n\n**Significance:**\n- Shows net value of production\n- More accurate measure than GNP\n- Accounts for capital consumption\n\n**Also called:** National Income at Market Price",
          marks: 2,
        },
        {
          id: "eco_q2_5_2024",
          statement: "A measure to compare current year prices with base year prices.",
          concept: "Price Index Number",
          modelAnswer: "**Price Index Number**\n\n**Definition:** A statistical measure to compare price levels of commodities at different time periods.\n\n**Formula:** Price Index = (P₁/P₀) × 100\n\n**Types:**\n- Laspeyre's Index (Base year quantities)\n- Paasche's Index (Current year quantities)\n- Fisher's Index (Ideal index = √L×P)\n\n**Uses:** Measure inflation, cost of living, policy making.",
          marks: 2,
        },
      ],
    },
    {
      id: "q3_2024",
      type: "distinguish",
      title: "Q.3 Distinguish Between",
      marks: 6,
      instructions: "Distinguish between the following (Any 3 out of 5)",
      required: 3,
      questions: [
        {
          id: "eco_q3_1_2024",
          concepts: "Micro Economics and Macro Economics",
          modelAnswer: "**Micro vs Macro Economics:**\n\n| Aspect | Micro Economics | Macro Economics |\n|--------|-----------------|------------------|\n| **Meaning** | Study of individual units | Study of economy as whole |\n| **Also Called** | Price Theory | Income Theory |\n| **Father** | Alfred Marshall | J.M. Keynes |\n| **Method** | Slicing method | Lumping method |\n| **Scope** | Individual consumer, firm | GDP, inflation, unemployment |\n| **Equilibrium** | Partial | General |",
          marks: 2,
        },
        {
          id: "eco_q3_2_2024",
          concepts: "Elastic Demand and Inelastic Demand",
          modelAnswer: "**Elastic vs Inelastic Demand:**\n\n| Aspect | Elastic Demand | Inelastic Demand |\n|--------|----------------|------------------|\n| **Coefficient** | Ed > 1 | Ed < 1 |\n| **Response** | Large change in quantity | Small change in quantity |\n| **Curve** | Flatter | Steeper |\n| **Nature of goods** | Luxuries, goods with substitutes | Necessities, habit-forming |\n| **Examples** | Air travel, branded clothes | Salt, medicines, petrol |",
          marks: 2,
        },
        {
          id: "eco_q3_3_2024",
          concepts: "Direct Tax and Indirect Tax",
          modelAnswer: "**Direct vs Indirect Tax:**\n\n| Aspect | Direct Tax | Indirect Tax |\n|--------|------------|---------------|\n| **Burden** | Cannot be shifted | Can be shifted |\n| **Impact & Incidence** | On same person | On different persons |\n| **Nature** | Progressive | Regressive |\n| **Examples** | Income tax, Wealth tax | GST, Excise duty |\n| **Collection** | Directly from taxpayer | Through intermediaries |",
          marks: 2,
        },
        {
          id: "eco_q3_4_2024",
          concepts: "Perfect Competition and Monopoly",
          modelAnswer: "**Perfect Competition vs Monopoly:**\n\n| Aspect | Perfect Competition | Monopoly |\n|--------|---------------------|----------|\n| **Sellers** | Very large number | Single seller |\n| **Products** | Homogeneous | Unique, no substitutes |\n| **Price control** | None (price taker) | Full control (price maker) |\n| **Entry/Exit** | Free | Blocked |\n| **Demand curve** | Horizontal | Downward sloping |\n| **AR & MR** | AR = MR | AR > MR |",
          marks: 2,
        },
        {
          id: "eco_q3_5_2024",
          concepts: "Revenue Receipt and Capital Receipt",
          modelAnswer: "**Revenue vs Capital Receipt:**\n\n| Aspect | Revenue Receipt | Capital Receipt |\n|--------|-----------------|------------------|\n| **Nature** | Routine/Recurring | Non-recurring |\n| **Liability** | Doesn't create | Creates liability |\n| **Assets** | Doesn't reduce | May reduce assets |\n| **Examples** | Tax revenue, fees, fines | Loans, disinvestment, recovery |\n| **Treatment** | Current account | Capital account |",
          marks: 2,
        },
      ],
    },
    {
      id: "q4_2024",
      type: "agree_disagree",
      title: "Q.4 Do you agree or disagree",
      marks: 12,
      instructions: "Do you agree or disagree with the following statements? Give reasons (Any 3 out of 5)",
      required: 3,
      questions: [
        {
          id: "eco_q4_1_2024",
          statement: "Demand curve always slopes downward.",
          modelAnswer: "**Agree** ✓\n\n**Reasons:**\n1. **Law of Demand:** Price and quantity demanded have inverse relationship\n2. **Income Effect:** When price falls, real income rises, so more can be bought\n3. **Substitution Effect:** When price of a good falls, it becomes cheaper relative to substitutes\n4. **New Buyers:** Lower prices attract new consumers\n5. **Multiple Uses:** At lower prices, goods can be used for various purposes\n\n**Exception:** Giffen goods and Veblen goods show upward sloping demand.",
          marks: 4,
        },
        {
          id: "eco_q4_2_2024",
          statement: "Monopolist is a price maker.",
          modelAnswer: "**Agree** ✓\n\n**Reasons:**\n1. **Single Seller:** Only one firm in the market\n2. **No Substitutes:** Product has no close substitutes\n3. **Entry Barriers:** New firms cannot enter the market\n4. **Control over Supply:** Monopolist controls entire market supply\n5. **Price Decision:** Can set price to maximize profit\n\n**However:** Monopolist cannot charge unlimited prices due to demand constraints.",
          marks: 4,
        },
        {
          id: "eco_q4_3_2024",
          statement: "National income and economic welfare are directly related.",
          modelAnswer: "**Partially Agree** (Agree with limitations)\n\n**Reasons to Agree:**\n1. Higher NI means more goods and services available\n2. Better standard of living\n3. More employment opportunities\n4. Better infrastructure\n\n**Reasons to Disagree:**\n1. **Distribution:** If income unequally distributed, welfare may not increase\n2. **Composition:** More war goods don't increase welfare\n3. **Externalities:** Pollution reduces welfare despite higher NI\n4. **Non-monetary factors:** Health, education, leisure not captured",
          marks: 4,
        },
        {
          id: "eco_q4_4_2024",
          statement: "GST has simplified the tax structure in India.",
          modelAnswer: "**Agree** ✓\n\n**Reasons:**\n1. **One Nation, One Tax:** Replaced multiple indirect taxes\n2. **Reduced Cascading:** No tax on tax effect\n3. **Uniform Rates:** Same rates across India\n4. **Input Tax Credit:** Available for set-off\n5. **Digital Process:** Online filing reduces paperwork\n6. **Unified Market:** Free movement of goods across states\n\n**Challenges:** Multiple rate slabs, compliance burden for small businesses.",
          marks: 4,
        },
        {
          id: "eco_q4_5_2024",
          statement: "Supply curve slopes upward to the right.",
          modelAnswer: "**Agree** ✓\n\n**Reasons:**\n1. **Law of Supply:** Direct relationship between price and quantity supplied\n2. **Higher Profits:** At higher prices, producers earn more profit\n3. **New Firms:** Higher prices attract new producers\n4. **Increased Production:** Existing firms increase output\n5. **Covering Costs:** Higher prices help cover rising marginal costs\n\n**Exception:** Backward bending supply curve of labor shows opposite at very high wages.",
          marks: 4,
        },
      ],
    },
    {
      id: "q6_2024",
      type: "long_answer",
      title: "Q.6 Long Answers (8 marks each)",
      marks: 16,
      instructions: "Answer the following (Any 2 out of 4)",
      required: 2,
      questions: [
        {
          id: "eco_q6_1_2024",
          question: "Explain the Law of Demand with demand schedule and diagram.",
          modelAnswer: "### Law of Demand\n\n**Statement:** Other things being equal, when price of a commodity rises, quantity demanded falls, and when price falls, quantity demanded rises.\n\n**Given by:** Alfred Marshall\n\n**Demand Schedule:**\n| Price (₹) | Quantity (Units) |\n|-----------|------------------|\n| 10 | 50 |\n| 20 | 40 |\n| 30 | 30 |\n| 40 | 20 |\n| 50 | 10 |\n\n**Diagram:** Draw downward sloping demand curve (DD) with Price on Y-axis and Quantity on X-axis.\n\n**Reasons for Downward Slope:**\n1. Income Effect\n2. Substitution Effect\n3. New Buyers\n4. Multiple Uses\n5. Diminishing Marginal Utility\n\n**Exceptions:**\n- Giffen Goods\n- Veblen Goods\n- Future Price Expectations\n\n**Conclusion:** Law of Demand is a fundamental law showing inverse relationship between price and quantity demanded.",
          marks: 8,
        },
        {
          id: "eco_q6_2_2024",
          question: "Explain the types of Price Elasticity of Demand with diagrams.",
          modelAnswer: "### Types of Price Elasticity of Demand\n\n**1. Perfectly Elastic Demand (Ed = ∞)**\n- Slight price change → infinite change in quantity\n- Horizontal demand curve\n- Example: Perfect competition\n\n**2. Perfectly Inelastic Demand (Ed = 0)**\n- Price change → no change in quantity\n- Vertical demand curve\n- Example: Life-saving medicines\n\n**3. Unitary Elastic Demand (Ed = 1)**\n- %ΔP = %ΔQ\n- Rectangular hyperbola\n- Total expenditure remains constant\n\n**4. Elastic Demand (Ed > 1)**\n- %ΔQ > %ΔP\n- Flatter demand curve\n- Example: Luxuries, AC, cars\n\n**5. Inelastic Demand (Ed < 1)**\n- %ΔQ < %ΔP\n- Steeper demand curve\n- Example: Necessities like salt, rice\n\n**Draw 5 diagrams showing each type**\n\n**Conclusion:** Understanding elasticity helps in pricing decisions and tax policy.",
          marks: 8,
        },
        {
          id: "eco_q6_3_2024",
          question: "Explain the features of Perfect Competition.",
          modelAnswer: "### Features of Perfect Competition\n\n**Definition:** A market structure with large number of buyers and sellers dealing in homogeneous products.\n\n**Features:**\n\n**1. Large Number of Buyers and Sellers:**\n- Individual has negligible share\n- No one can influence price\n\n**2. Homogeneous Products:**\n- Identical goods\n- No product differentiation\n- Perfect substitutes\n\n**3. Free Entry and Exit:**\n- No barriers to enter or leave\n- Long-run normal profits only\n\n**4. Perfect Knowledge:**\n- Full information about market conditions\n- No buyer pays more, no seller accepts less\n\n**5. Perfect Mobility:**\n- Factors can move freely\n- Resources shift to profitable uses\n\n**6. No Transport Costs:**\n- Uniform price everywhere\n\n**7. Price Taker:**\n- Firm accepts market price\n- AR = MR = Price (constant)\n\n**Examples:** Agricultural markets, stock exchanges\n\n**Conclusion:** Perfect competition ensures efficient resource allocation.",
          marks: 8,
        },
        {
          id: "eco_q6_4_2024",
          question: "Explain the three methods of measuring National Income.",
          modelAnswer: "### Methods of Measuring National Income\n\n**1. Product/Value Added Method:**\n- Adds value added by all producing units\n- Value Added = Output - Intermediate Consumption\n- Avoids double counting\n- GDP = ΣVA of Primary + Secondary + Tertiary sectors\n\n**2. Income Method:**\n- Adds all factor incomes\n- NI = Wages + Rent + Interest + Profit\n- Includes mixed income of self-employed\n- Only factor incomes, not transfer payments\n\n**3. Expenditure Method:**\n- Adds all final expenditures\n- GDP = C + I + G + (X - M)\n- Where:\n  - C = Private Consumption\n  - I = Investment\n  - G = Government Expenditure\n  - (X-M) = Net Exports\n\n**Important Points:**\n- All methods give same result\n- Each method has precautions\n- Avoid double counting\n\n**Conclusion:** Multiple methods help cross-verify national income estimates.",
          marks: 8,
        },
      ],
    },
    {
      id: "q7_2024",
      type: "numerical",
      title: "Q.7 Numericals (Compulsory)",
      marks: 12,
      instructions: "Solve the following numerical problems (Compulsory - 3 × 4 marks)",
      required: 3,
      questions: [
        {
          id: "eco_q7_1_2024",
          question: "Calculate MU from the following:\n\nUnits: 1, 2, 3, 4, 5\nTU: 10, 18, 24, 28, 28",
          modelAnswer: "**Solution:**\n\nFormula: MU = TUn - TUn-1\n\n| Units | TU | MU = TUn - TUn-1 |\n|-------|-----|-------------------|\n| 1 | 10 | 10 - 0 = **10** |\n| 2 | 18 | 18 - 10 = **8** |\n| 3 | 24 | 24 - 18 = **6** |\n| 4 | 28 | 28 - 24 = **4** |\n| 5 | 28 | 28 - 28 = **0** |\n\n**Observation:** \n- MU is diminishing (Law of DMU)\n- At 5th unit, TU is maximum and MU = 0 (Point of Satiety)",
          marks: 4,
        },
        {
          id: "eco_q7_2_2024",
          question: "When price was ₹20, demand was 50 units. Price rose to ₹25 and demand fell to 40 units. Calculate Price Elasticity of Demand using percentage method.",
          modelAnswer: "**Solution:**\n\nGiven: P₁ = 20, P₂ = 25, Q₁ = 50, Q₂ = 40\n\nFormula: Ed = %ΔQ / %ΔP\n\n**Step 1: Calculate %ΔQ**\n%ΔQ = (Q₂ - Q₁)/Q₁ × 100\n%ΔQ = (40 - 50)/50 × 100\n%ΔQ = -10/50 × 100 = **-20%**\n\n**Step 2: Calculate %ΔP**\n%ΔP = (P₂ - P₁)/P₁ × 100\n%ΔP = (25 - 20)/20 × 100\n%ΔP = 5/20 × 100 = **25%**\n\n**Step 3: Calculate Ed**\nEd = %ΔQ / %ΔP\nEd = -20% / 25%\nEd = **-0.8** (or 0.8 in absolute terms)\n\n**Conclusion:** Ed < 1, so demand is **Inelastic**",
          marks: 4,
        },
        {
          id: "eco_q7_3_2024",
          question: "Calculate Fisher's Ideal Index from the following:\n\nLaspeyre's Index = 120\nPaasche's Index = 125",
          modelAnswer: "**Solution:**\n\nGiven:\n- Laspeyre's Index (L) = 120\n- Paasche's Index (P) = 125\n\nFormula: Fisher's Index = √(L × P)\n\n**Calculation:**\nFisher's Index = √(120 × 125)\nFisher's Index = √15000\nFisher's Index = **122.47**\n\n**Note:** Fisher's Index is called the 'Ideal Index' because:\n1. It is the geometric mean of Laspeyre's and Paasche's\n2. It satisfies both Time Reversal and Factor Reversal tests\n3. It lies between the two indices",
          marks: 4,
        },
      ],
    },
  ],
};

// March 2023 Economics Board Paper
const MOCK_PAPER_2023 = {
  title: "Economics - March 2023",
  totalMarks: 80,
  duration: 180,

  sections: [
    {
      id: "q1a_2023",
      type: "mcq_combo",
      title: "Q.1(A) Choose the correct option",
      marks: 5,
      instructions: "Choose the correct option (combination type)",
      questions: [
        {
          id: "eco_q1a1_2023",
          question: "Micro Economics includes study of:\n(a) Individual consumer\n(b) Individual firm\n(c) National income\n(d) General price level",
          options: ["(a) and (b)", "(c) and (d)", "(a) and (c)", "(b) and (d)"],
          correct: 0,
          marks: 1,
        },
        {
          id: "eco_q1a2_2023",
          question: "Law of DMU was given by:\n(a) Marshall\n(b) Gossen\n(c) Keynes\n(d) Also called Gossen's First Law",
          options: ["(a) and (c)", "(b) and (d)", "Only (a)", "Only (b)"],
          correct: 1,
          marks: 1,
        },
        {
          id: "eco_q1a3_2023",
          question: "In Monopoly:\n(a) Single seller\n(b) No substitutes\n(c) Free entry\n(d) Price maker",
          options: ["(a), (b), (c)", "(a), (b), (d)", "(b), (c), (d)", "All of these"],
          correct: 1,
          marks: 1,
        },
        {
          id: "eco_q1a4_2023",
          question: "National Income includes:\n(a) Wages\n(b) Rent\n(c) Interest\n(d) Profit",
          options: ["(a), (b), (c)", "(b), (c), (d)", "(a), (c), (d)", "All of these"],
          correct: 3,
          marks: 1,
        },
        {
          id: "eco_q1a5_2023",
          question: "Index Numbers are used for:\n(a) Measuring price changes\n(b) Forecasting\n(c) Policy making\n(d) Measuring weight",
          options: ["(a), (b), (c)", "(a), (b), (d)", "(b), (c), (d)", "All of these"],
          correct: 0,
          marks: 1,
        },
      ],
    },
    {
      id: "q1b_2023",
      type: "economic_term",
      title: "Q.1(B) Give Economic Terms",
      marks: 5,
      instructions: "Give economic terms for the following",
      questions: [
        {
          id: "eco_q1b1_2023",
          statement: "Study of economy as a whole.",
          answer: "Macro Economics",
          marks: 1,
        },
        {
          id: "eco_q1b2_2023",
          statement: "Sum of utilities from all units consumed.",
          answer: "Total Utility (TU)",
          marks: 1,
        },
        {
          id: "eco_q1b3_2023",
          statement: "Market with many sellers selling differentiated products.",
          answer: "Monopolistic Competition",
          marks: 1,
        },
        {
          id: "eco_q1b4_2023",
          statement: "National income divided by population.",
          answer: "Per Capita Income",
          marks: 1,
        },
        {
          id: "eco_q1b5_2023",
          statement: "Single comprehensive indirect tax.",
          answer: "Goods and Services Tax (GST)",
          marks: 1,
        },
      ],
    },
    {
      id: "q1c_2023",
      type: "odd_one",
      title: "Q.1(C) Find the Odd Man Out",
      marks: 5,
      instructions: "Find the odd word from the given set",
      questions: [
        {
          id: "eco_q1c1_2023",
          set: ["Price Theory", "Income Theory", "Welfare Theory", "Demand Theory"],
          answer: "Income Theory",
          reason: "Income Theory is related to Macro Economics, others to Micro Economics.",
          marks: 1,
        },
        {
          id: "eco_q1c2_2023",
          set: ["TU", "MU", "AR", "Consumer surplus"],
          answer: "AR",
          reason: "AR (Average Revenue) is a production concept, others are utility concepts.",
          marks: 1,
        },
        {
          id: "eco_q1c3_2023",
          set: ["Monopoly", "Duopoly", "Oligopoly", "Utility"],
          answer: "Utility",
          reason: "Utility is a consumption concept, others are market structures.",
          marks: 1,
        },
        {
          id: "eco_q1c4_2023",
          set: ["GDP", "GNP", "NNP", "MU"],
          answer: "MU",
          reason: "MU is utility concept, others are national income aggregates.",
          marks: 1,
        },
        {
          id: "eco_q1c5_2023",
          set: ["Income tax", "Wealth tax", "GST", "Corporate tax"],
          answer: "GST",
          reason: "GST is indirect tax, others are direct taxes.",
          marks: 1,
        },
      ],
    },
    {
      id: "q1d_2023",
      type: "correlation",
      title: "Q.1(D) Complete the Correlation",
      marks: 5,
      instructions: "Complete the correlation",
      questions: [
        {
          id: "eco_q1d1_2023",
          correlation: "Alfred Marshall : Micro Economics :: J.M. Keynes : ___",
          answer: "Macro Economics",
          marks: 1,
        },
        {
          id: "eco_q1d2_2023",
          correlation: "Law of Demand : Inverse relation :: Law of Supply : ___",
          answer: "Direct relation",
          marks: 1,
        },
        {
          id: "eco_q1d3_2023",
          correlation: "Ed > 1 : Elastic demand :: Ed < 1 : ___",
          answer: "Inelastic demand",
          marks: 1,
        },
        {
          id: "eco_q1d4_2023",
          correlation: "CGST : Centre :: SGST : ___",
          answer: "State",
          marks: 1,
        },
        {
          id: "eco_q1d5_2023",
          correlation: "Revenue Receipt : No liability :: Capital Receipt : ___",
          answer: "Creates liability",
          marks: 1,
        },
      ],
    },
    {
      id: "q2a_2023",
      type: "identify_explain",
      title: "Q.2(A) Identify and Explain",
      marks: 6,
      instructions: "Identify and explain the concept (Any 3 out of 5, 2 marks each)",
      required: 3,
      questions: [
        {
          id: "eco_q2a1_2023",
          statement: "Study of individual economic units like consumer, firm, industry.",
          concept: "Micro Economics",
          modelAnswer: "**Micro Economics**\n\n• Also called Price Theory\n• Father: Alfred Marshall\n• Uses slicing method\n• Studies individual demand, firm pricing, industry behavior\n• Partial equilibrium analysis",
          marks: 2,
        },
        {
          id: "eco_q2a2_2023",
          statement: "When total utility reaches maximum point.",
          concept: "Point of Satiety / Consumer Equilibrium",
          modelAnswer: "**Point of Satiety**\n\n• TU is maximum at this point\n• MU becomes zero\n• Consumer is fully satisfied\n• No desire to consume more\n• Any further consumption reduces TU",
          marks: 2,
        },
        {
          id: "eco_q2a3_2023",
          statement: "Market with large number of buyers and sellers dealing in identical products.",
          concept: "Perfect Competition",
          modelAnswer: "**Perfect Competition**\n\n• Homogeneous products\n• Free entry and exit\n• Perfect knowledge\n• Price taker (AR = MR)\n• Examples: Agricultural markets, stock exchange",
          marks: 2,
        },
        {
          id: "eco_q2a4_2023",
          statement: "Total value of goods/services produced by normal residents in a year.",
          concept: "National Income",
          modelAnswer: "**National Income**\n\n• Money value of all final goods\n• Produced by normal residents\n• During one financial year\n• Three methods: Product, Income, Expenditure\n• Indicates economic progress",
          marks: 2,
        },
        {
          id: "eco_q2a5_2023",
          statement: "Statistical measure to compare prices over different time periods.",
          concept: "Index Number",
          modelAnswer: "**Index Number**\n\n• Compares price levels over time\n• Base year = 100\n• Types: Laspeyre's, Paasche's, Fisher's\n• Uses: Inflation measurement, policy making\n• Formula: (P₁/P₀) × 100",
          marks: 2,
        },
      ],
    },
    {
      id: "q2b_2023",
      type: "distinguish",
      title: "Q.2(B) Distinguish Between",
      marks: 6,
      instructions: "Distinguish between (Any 3 out of 5, 2 marks each)",
      required: 3,
      questions: [
        {
          id: "eco_q2b1_2023",
          concepts: "Total Utility and Marginal Utility",
          modelAnswer: "| Aspect | Total Utility | Marginal Utility |\n|--------|---------------|------------------|\n| Meaning | Sum of all utilities | Additional utility |\n| Formula | TU = ΣMU | MU = TUn - TUn-1 |\n| Curve | Inverted U | Downward sloping |\n| Max Point | When MU = 0 | First unit highest |",
          marks: 2,
        },
        {
          id: "eco_q2b2_2023",
          concepts: "Extension and Increase in Demand",
          modelAnswer: "| Aspect | Extension | Increase |\n|--------|-----------|----------|\n| Cause | Fall in price | Other factors change |\n| Movement | Along curve | Shift of curve |\n| Direction | Downward | Rightward |\n| Price | Changes | Constant |",
          marks: 2,
        },
        {
          id: "eco_q2b3_2023",
          concepts: "CGST and SGST",
          modelAnswer: "| Aspect | CGST | SGST |\n|--------|------|------|\n| Full Form | Central GST | State GST |\n| Levied by | Centre | State |\n| On | Intra-state | Intra-state |\n| Revenue | To Centre | To State |",
          marks: 2,
        },
        {
          id: "eco_q2b4_2023",
          concepts: "GDP and GNP",
          modelAnswer: "| Aspect | GDP | GNP |\n|--------|-----|-----|\n| Full Form | Gross Domestic Product | Gross National Product |\n| Scope | Domestic territory | Normal residents |\n| Formula | Output within borders | GDP + NFIA |\n| Focus | Location | Nationality |",
          marks: 2,
        },
        {
          id: "eco_q2b5_2023",
          concepts: "Elastic and Inelastic Demand",
          modelAnswer: "| Aspect | Elastic | Inelastic |\n|--------|---------|------------|\n| Coefficient | Ed > 1 | Ed < 1 |\n| Response | High | Low |\n| Curve | Flatter | Steeper |\n| Goods | Luxuries | Necessities |",
          marks: 2,
        },
      ],
    },
    {
      id: "q3_2023",
      type: "short_answer",
      title: "Q.3 Answer the Following",
      marks: 12,
      instructions: "Answer the following (Any 3 out of 5, 4 marks each)",
      required: 3,
      questions: [
        {
          id: "eco_q3_1_2023",
          question: "Explain the Law of Supply.",
          modelAnswer: "**Law of Supply:**\n\n**Statement:** Other things remaining constant, when price rises, supply rises and vice versa.\n\n**Given by:** Alfred Marshall\n\n**Relationship:** Direct (price ↑, supply ↑)\n\n**Reasons:**\n1. Higher profits at higher prices\n2. New producers enter\n3. Existing producers increase output\n4. Covers higher marginal cost\n\n**Exceptions:** Backward bending labor supply, fixed supply of land",
          marks: 4,
        },
        {
          id: "eco_q3_2_2023",
          question: "Explain the concept of Utility.",
          modelAnswer: "**Utility:**\n\n**Definition:** Want satisfying power of a commodity.\n\n**Features:**\n1. Subjective - varies person to person\n2. Relative - depends on situation\n3. Not same as usefulness\n4. Measured in 'utils'\n\n**Types:**\n- Total Utility (TU): Sum of all utilities\n- Marginal Utility (MU): Additional utility\n\n**Formula:** MU = TUn - TUn-1",
          marks: 4,
        },
        {
          id: "eco_q3_3_2023",
          question: "What is Index Number? State its uses.",
          modelAnswer: "**Index Number:**\n\n**Definition:** Statistical measure to compare variables over time.\n\n**Formula:** Index = (P₁/P₀) × 100\n\n**Uses:**\n1. Measure price changes (inflation)\n2. Measure cost of living\n3. Policy making\n4. Wage determination\n5. Comparing economic variables\n\n**Types:** Laspeyre's, Paasche's, Fisher's",
          marks: 4,
        },
        {
          id: "eco_q3_4_2023",
          question: "Explain types of budget.",
          modelAnswer: "**Types of Budget:**\n\n**1. Balanced Budget:**\n- Revenue = Expenditure\n- Rare in practice\n\n**2. Surplus Budget:**\n- Revenue > Expenditure\n- Used to control inflation\n\n**3. Deficit Budget:**\n- Revenue < Expenditure\n- Common in developing countries\n- Used for development\n\n**Types of Deficit:** Revenue, Fiscal, Primary",
          marks: 4,
        },
        {
          id: "eco_q3_5_2023",
          question: "Explain features of Monopolistic Competition.",
          modelAnswer: "**Monopolistic Competition:**\n\n**Features:**\n1. **Large number of sellers**\n2. **Product differentiation** - similar but not identical\n3. **Free entry and exit**\n4. **Selling costs** - advertising important\n5. **Downward sloping demand**\n6. **Non-price competition**\n\n**Examples:** Restaurants, soaps, toothpaste brands",
          marks: 4,
        },
      ],
    },
    {
      id: "q4_2023",
      type: "agree_disagree",
      title: "Q.4 Agree or Disagree",
      marks: 12,
      instructions: "State with reasons whether you agree or disagree (Any 3 out of 5, 4 marks each: 1 mark for statement + 3 marks for reasons)",
      required: 3,
      questions: [
        {
          id: "eco_q4_1_2023",
          statement: "Supply curve slopes upward.",
          modelAnswer: "**Agree** ✓ (1 mark)\n\n**Reasons:** (3 marks)\n1. Law of Supply shows direct relationship\n2. Higher prices mean higher profits\n3. New producers enter at higher prices\n4. Existing producers increase output\n5. Higher prices cover rising marginal cost\n\n*Exception: Labor supply curve bends backward*",
          marks: 4,
        },
        {
          id: "eco_q4_2_2023",
          statement: "MU curve slopes downward.",
          modelAnswer: "**Agree** ✓ (1 mark)\n\n**Reasons:** (3 marks)\n1. Law of Diminishing MU operates\n2. First unit gives highest satisfaction\n3. Successive units give less satisfaction\n4. Consumer reaches satiety eventually\n5. MU can even become negative\n\n*Given by H.H. Gossen (Gossen's First Law)*",
          marks: 4,
        },
        {
          id: "eco_q4_3_2023",
          statement: "Perfect competition is most efficient market.",
          modelAnswer: "**Agree** ✓ (1 mark)\n\n**Reasons:** (3 marks)\n1. Optimal resource allocation\n2. Consumer sovereignty prevails\n3. No super-normal profits in long run\n4. Price = Marginal Cost (efficiency)\n5. Maximum consumer and producer surplus\n\n*However, it's mostly theoretical*",
          marks: 4,
        },
        {
          id: "eco_q4_4_2023",
          statement: "GDP is a better measure than GNP for domestic economy.",
          modelAnswer: "**Agree** ✓ (1 mark)\n\n**Reasons:** (3 marks)\n1. GDP measures production within borders\n2. Better indicator of domestic economic activity\n3. Not affected by foreign income flows\n4. Easier to calculate\n5. More relevant for policy making\n\n*GNP better for global comparison*",
          marks: 4,
        },
        {
          id: "eco_q4_5_2023",
          statement: "Direct taxes are more equitable than indirect taxes.",
          modelAnswer: "**Agree** ✓ (1 mark)\n\n**Reasons:** (3 marks)\n1. Direct taxes are progressive\n2. Based on ability to pay\n3. Rich pay more, poor pay less\n4. Cannot be shifted to others\n5. Reduce income inequality\n\n*Indirect taxes are regressive - same rate for all*",
          marks: 4,
        },
      ],
    },
    {
      id: "q5_2023",
      type: "table_analysis",
      title: "Q.5 Study the Table/Figure",
      marks: 8,
      instructions: "Study the following and answer (Any 2 out of 3, 4 marks each)",
      required: 2,
      questions: [
        {
          id: "eco_q5_1_2023",
          question: "From the following calculate TU:\n\n| Units | MU |\n|-------|-----|\n| 1 | 12 |\n| 2 | 10 |\n| 3 | 8 |\n| 4 | 6 |\n| 5 | 4 |\n\nAnswer: (a) Calculate TU (b) When will TU be maximum? (c) What law is illustrated?",
          modelAnswer: "**Solution:**\n\n**(a) TU Calculation:**\n| Units | MU | TU |\n|-------|-----|-----|\n| 1 | 12 | 12 |\n| 2 | 10 | 22 |\n| 3 | 8 | 30 |\n| 4 | 6 | 36 |\n| 5 | 4 | 40 |\n\n**(b)** TU will be maximum when MU = 0 (Point of Satiety)\n\n**(c)** Law of Diminishing Marginal Utility - MU decreases with each successive unit",
          marks: 4,
        },
        {
          id: "eco_q5_2_2023",
          question: "Calculate Ed from:\nP₁ = ₹100, P₂ = ₹80\nQ₁ = 40 units, Q₂ = 60 units\n\n(a) Calculate Ed\n(b) What type of demand?\n(c) Give example of such goods",
          modelAnswer: "**Solution:**\n\n**(a) Calculation:**\n%ΔQ = (60-40)/40 × 100 = 50%\n%ΔP = (80-100)/100 × 100 = -20%\nEd = 50%/20% = **2.5**\n\n**(b)** Ed > 1, demand is **Elastic**\n\n**(c)** Examples: Luxury goods, air travel, branded products, electronic items",
          marks: 4,
        },
        {
          id: "eco_q5_3_2023",
          question: "Calculate Fisher's Index:\nLaspeyre's Index = 115\nPaasche's Index = 120",
          modelAnswer: "**Solution:**\n\nGiven:\n- L = 115\n- P = 120\n\n**Formula:** Fisher's Index = √(L × P)\n\n**Calculation:**\n= √(115 × 120)\n= √13800\n= **117.47**\n\n**Note:** Fisher's is called 'Ideal Index' as it's geometric mean of L and P, satisfies both time and factor reversal tests.",
          marks: 4,
        },
      ],
    },
    {
      id: "q6_2023",
      type: "long_answer",
      title: "Q.6 Answer in Detail",
      marks: 16,
      instructions: "Answer in detail (Any 2 out of 3, 8 marks each)",
      required: 2,
      questions: [
        {
          id: "eco_q6_1_2023",
          question: "Explain the Law of Supply with schedule, diagram and exceptions.",
          modelAnswer: "### Law of Supply\n\n**Statement:** Other things remaining constant, when price rises, quantity supplied rises, and vice versa.\n\n**Given by:** Alfred Marshall\n\n**Supply Schedule:**\n| Price (₹) | Quantity |\n|-----------|----------|\n| 10 | 100 |\n| 20 | 200 |\n| 30 | 300 |\n| 40 | 400 |\n| 50 | 500 |\n\n**Diagram:** Draw upward sloping supply curve (SS)\n- X-axis: Quantity\n- Y-axis: Price\n- Curve slopes from left to right upward\n\n**Reasons for Upward Slope:**\n1. Higher profits at higher prices\n2. New producers enter\n3. Existing producers increase output\n4. Covers higher marginal costs\n5. More profitable to sell\n\n**Exceptions:**\n1. **Backward bending labor supply:** At very high wages, workers prefer leisure\n2. **Fixed supply:** Land cannot be increased\n3. **Agricultural supply:** Depends on monsoon, not price\n4. **Rare goods:** Antiques, paintings\n5. **Expectations:** If price expected to rise further\n\n**Conclusion:** Law of Supply is fundamental law showing direct relationship between price and quantity supplied.",
          marks: 8,
        },
        {
          id: "eco_q6_2_2023",
          question: "Explain the features of Monopoly market.",
          modelAnswer: "### Features of Monopoly\n\n**Definition:** A market with single seller having complete control over supply of a product with no close substitutes.\n\n**Features:**\n\n**1. Single Seller:**\n- Only one firm in industry\n- Firm = Industry\n- Complete control over supply\n\n**2. No Close Substitutes:**\n- Product is unique\n- No competition from similar goods\n- Cross elasticity is zero\n\n**3. Price Maker:**\n- Full control over price\n- Can set any price to maximize profit\n- Not a price taker\n\n**4. Blocked Entry:**\n- New firms cannot enter\n- Barriers: Legal, natural, artificial\n- Maintains monopoly power\n\n**5. Price Discrimination:**\n- Can charge different prices\n- Different markets, time periods\n- Based on elasticity of demand\n\n**6. Abnormal Profits:**\n- Even in long run\n- No competition to reduce profits\n\n**7. Demand Curve:**\n- Downward sloping (AR curve)\n- AR > MR always\n- MR can be negative\n\n**Examples:** Indian Railways, local water supply, BSNL (earlier)\n\n**Conclusion:** Monopoly is extreme market structure with complete market control by single seller.",
          marks: 8,
        },
        {
          id: "eco_q6_3_2023",
          question: "What is GST? Explain its features and benefits.",
          modelAnswer: "### Goods and Services Tax (GST)\n\n**Definition:** A comprehensive indirect tax on supply of goods and services across India.\n\n**Introduction:** July 1, 2017 (101st Constitutional Amendment)\n\n**Structure:**\n- **CGST:** Central GST (goes to Centre)\n- **SGST:** State GST (goes to State)\n- **IGST:** Integrated GST (for inter-state)\n\n**Features:**\n1. **One Nation One Tax:** Uniform tax across India\n2. **Destination Based:** Tax collected where consumed\n3. **Dual Structure:** Centre and State both levy\n4. **Multiple Rates:** 0%, 5%, 12%, 18%, 28%\n5. **Input Tax Credit:** Tax paid can be set off\n6. **Digital:** Online registration and filing\n\n**Benefits:**\n1. Eliminated cascading effect\n2. Unified national market\n3. Reduced tax evasion\n4. Simplified tax structure (replaced 17 taxes)\n5. Lower logistics costs\n6. Increased compliance\n7. Transparency in taxation\n\n**Challenges:**\n- Multiple rate slabs\n- Compliance burden for small businesses\n- Technology issues initially\n\n**Conclusion:** GST is a landmark tax reform creating unified indirect tax system in India.",
          marks: 8,
        },
      ],
    },
  ],
};

// Available papers
const AVAILABLE_PAPERS = [
  { id: '2024', data: MOCK_PAPER_2024, year: '2024', month: 'February' },
  { id: '2023', data: MOCK_PAPER_2023, year: '2023', month: 'March' },
];

const EcoMockTest: React.FC<EcoMockTestProps> = ({ onClose }) => {
  const [selectedPaperId, setSelectedPaperId] = useState<string | null>(null);
  const [testState, setTestState] = useState<"select" | "intro" | "running" | "submitted">("select");

  const selectedPaper = AVAILABLE_PAPERS.find(p => p.id === selectedPaperId)?.data || MOCK_PAPER_2024;

  const [timeLeft, setTimeLeft] = useState(selectedPaper.duration * 60);
  const [isPaused, setIsPaused] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<string>>(new Set());
  const [showResults, setShowResults] = useState(false);
  const [selfMarks, setSelfMarks] = useState<Record<string, number>>({});

  useEffect(() => {
    if (testState !== "running" || isPaused) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setTestState("submitted");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [testState, isPaused]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAnswer = (questionId: string, answer: any) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const toggleFlag = (questionId: string) => {
    setFlaggedQuestions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  const calculateAutoScore = () => {
    let score = 0;
    selectedPaper.sections.forEach((section) => {
      if (section.type === "mcq" || section.type === "mcq_combo") {
        section.questions.forEach((q: any) => {
          if (answers[q.id] === q.correct) {
            score += q.marks;
          }
        });
      }
      if (section.type === "odd_one") {
        section.questions.forEach((q: any) => {
          if (answers[q.id] === q.answer) {
            score += q.marks;
          }
        });
      }
      if (section.type === "true_false") {
        section.questions.forEach((q: any) => {
          if (answers[q.id] === q.answer) {
            score += q.marks;
          }
        });
      }
    });
    return score;
  };

  const submitTest = () => {
    setTestState("submitted");
    setShowResults(true);
  };

  const restartTest = () => {
    setTestState("select");
    setSelectedPaperId(null);
    setTimeLeft(selectedPaper.duration * 60);
    setAnswers({});
    setFlaggedQuestions(new Set());
    setShowResults(false);
    setSelfMarks({});
    setCurrentSection(0);
  };

  const selectPaper = (paperId: string) => {
    setSelectedPaperId(paperId);
    const paper = AVAILABLE_PAPERS.find(p => p.id === paperId)?.data;
    if (paper) {
      setTimeLeft(paper.duration * 60);
    }
    setTestState("intro");
  };

  const renderPaperSelection = () => (
    <div className="flex flex-col items-center p-4 sm:p-6 text-center pb-8">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
        <Calculator size={32} className="text-white" />
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-2">
        Economics Mock Tests
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-6">
        Select a board exam paper to practice
      </p>

      <div className="w-full max-w-md space-y-3">
        {AVAILABLE_PAPERS.map((paper) => (
          <button
            key={paper.id}
            onClick={() => selectPaper(paper.id)}
            className="w-full bg-white dark:bg-slate-800 p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-green-400 dark:hover:border-green-500 transition-all flex items-center gap-4 text-left"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center shrink-0">
              <Calendar className="text-white" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-800 dark:text-white">
                {paper.month} {paper.year}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Board Examination Paper
              </p>
              <div className="flex gap-2 mt-1">
                <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 px-2 py-0.5 rounded">
                  80 Marks
                </span>
                <span className="text-xs bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-300 px-2 py-0.5 rounded">
                  3 Hours
                </span>
              </div>
            </div>
            <ChevronRight className="text-slate-400" size={20} />
          </button>
        ))}
      </div>

      <div className="mt-6 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl w-full max-w-md">
        <p className="text-sm text-amber-700 dark:text-amber-300">
          <strong>💡 Tip:</strong> Q.7 Numericals are COMPULSORY - practice them well!
        </p>
      </div>
    </div>
  );

  const renderIntro = () => (
    <div className="flex flex-col items-center p-4 sm:p-6 text-center pb-8">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
        <FileText size={32} className="text-white" />
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-2">
        {selectedPaper.title}
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4 sm:mb-6">
        Board Examination Mock Test
      </p>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 w-full max-w-md">
        <div className="bg-green-50 dark:bg-green-900/20 p-3 sm:p-4 rounded-xl">
          <Clock className="mx-auto text-green-500 mb-1 sm:mb-2" size={20} />
          <p className="text-xl sm:text-2xl font-bold text-green-700 dark:text-green-300">3 Hours</p>
          <p className="text-xs text-green-600 dark:text-green-400">Duration</p>
        </div>
        <div className="bg-teal-50 dark:bg-teal-900/20 p-3 sm:p-4 rounded-xl">
          <Award className="mx-auto text-teal-500 mb-1 sm:mb-2" size={20} />
          <p className="text-xl sm:text-2xl font-bold text-teal-700 dark:text-teal-300">80 Marks</p>
          <p className="text-xs text-teal-600 dark:text-teal-400">Total Marks</p>
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl mb-6 w-full max-w-md">
        <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-2">Instructions:</h3>
        <ul className="text-sm text-amber-700 dark:text-amber-300 text-left space-y-1">
          <li>• Q.7 Numericals are COMPULSORY</li>
          <li>• MCQs will be auto-graded</li>
          <li>• For subjective questions, model answers shown</li>
          <li>• Draw diagrams wherever required</li>
          <li>• Show all steps in numericals</li>
        </ul>
      </div>

      <button
        onClick={() => setTestState("running")}
        className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold rounded-xl flex items-center gap-2 hover:scale-105 transition-transform"
      >
        <Play size={20} />
        Start Test
      </button>
    </div>
  );

  const renderQuestion = () => {
    const section = selectedPaper.sections[currentSection];

    return (
      <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 pb-4">
        <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-xl p-3 sm:p-4 text-white">
          <h3 className="font-bold text-base sm:text-lg">{section.title}</h3>
          <p className="text-white/80 text-xs sm:text-sm">{section.instructions}</p>
          <p className="text-white/60 text-xs mt-1">Marks: {section.marks}</p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {/* MCQ Combo Type (a,b,c,d combinations) */}
          {(section.type === "mcq" || section.type === "mcq_combo") && section.questions.map((q: any, idx: number) => (
            <div key={q.id} className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <p className="font-medium text-slate-800 dark:text-white text-sm sm:text-base whitespace-pre-line">
                  <span className="text-green-500 mr-2">{idx + 1}.</span>
                  {q.question}
                </p>
                <button
                  onClick={() => toggleFlag(q.id)}
                  className={`p-1 rounded ${flaggedQuestions.has(q.id) ? "text-red-500" : "text-slate-400"}`}
                >
                  <Flag size={16} />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map((opt: string, optIdx: number) => (
                  <button
                    key={optIdx}
                    onClick={() => handleAnswer(q.id, optIdx)}
                    className={`p-2 sm:p-3 rounded-lg text-sm text-left transition-all ${
                      answers[q.id] === optIdx
                        ? "bg-green-500 text-white"
                        : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {optIdx + 1}) {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Give Economic Term (Q.1B) */}
          {section.type === "economic_term" && section.questions.map((q: any, idx: number) => (
            <div key={q.id} className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm">
              <p className="font-medium text-slate-800 dark:text-white text-sm mb-2">
                <span className="text-green-500 mr-2">{idx + 1}.</span>
                {q.statement}
              </p>
              <input
                type="text"
                placeholder="Enter economic term..."
                value={answers[q.id] || ""}
                onChange={(e) => handleAnswer(q.id, e.target.value)}
                className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm"
              />
            </div>
          ))}

          {/* Find Odd Man Out (Q.1C) */}
          {section.type === "odd_one" && section.questions.map((q: any, idx: number) => (
            <div key={q.id} className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm">
              <p className="font-medium text-slate-800 dark:text-white text-sm mb-3">
                <span className="text-green-500 mr-2">{idx + 1}.</span>
                Find the odd one:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {q.set.map((item: string, itemIdx: number) => (
                  <button
                    key={itemIdx}
                    onClick={() => handleAnswer(q.id, item)}
                    className={`p-2 rounded-lg text-sm transition-all ${
                      answers[q.id] === item
                        ? "bg-orange-500 text-white"
                        : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Complete Correlation (Q.1D) */}
          {section.type === "correlation" && section.questions.map((q: any, idx: number) => (
            <div key={q.id} className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm">
              <p className="font-medium text-slate-800 dark:text-white text-sm mb-2">
                <span className="text-green-500 mr-2">{idx + 1}.</span>
                {q.correlation}
              </p>
              <input
                type="text"
                placeholder="Complete the correlation..."
                value={answers[q.id] || ""}
                onChange={(e) => handleAnswer(q.id, e.target.value)}
                className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm"
              />
            </div>
          ))}

          {/* Identify and Explain (Q.2A) */}
          {section.type === "identify_explain" && section.questions.map((q: any, idx: number) => (
            <div key={q.id} className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm">
              <p className="font-medium text-slate-800 dark:text-white text-sm mb-2">
                <span className="text-green-500 mr-2">{idx + 1}.</span>
                {q.statement}
              </p>
              <input
                type="text"
                placeholder="Identify the concept..."
                value={answers[q.id + "_concept"] || ""}
                onChange={(e) => handleAnswer(q.id + "_concept", e.target.value)}
                className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm mb-2"
              />
              <textarea
                placeholder="Explain the concept..."
                value={answers[q.id] || ""}
                onChange={(e) => handleAnswer(q.id, e.target.value)}
                className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm min-h-[80px]"
              />
            </div>
          ))}

          {/* Distinguish Between (Q.2B) */}
          {section.type === "distinguish" && section.questions.map((q: any, idx: number) => (
            <div key={q.id} className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm">
              <p className="font-medium text-slate-800 dark:text-white text-sm mb-2">
                <span className="text-green-500 mr-2">{idx + 1}.</span>
                Distinguish: <strong>{q.concepts}</strong>
              </p>
              <textarea
                placeholder="Write points of difference in table format..."
                value={answers[q.id] || ""}
                onChange={(e) => handleAnswer(q.id, e.target.value)}
                className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm min-h-[100px]"
              />
            </div>
          ))}

          {/* Short Answer (Q.3) */}
          {section.type === "short_answer" && section.questions.map((q: any, idx: number) => (
            <div key={q.id} className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm">
              <p className="font-medium text-slate-800 dark:text-white text-sm mb-2">
                <span className="text-green-500 mr-2">{idx + 1}.</span>
                {q.question}
              </p>
              <textarea
                placeholder="Write your answer (4 marks)..."
                value={answers[q.id] || ""}
                onChange={(e) => handleAnswer(q.id, e.target.value)}
                className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm min-h-[120px]"
              />
            </div>
          ))}

          {/* Agree/Disagree (Q.4) */}
          {section.type === "agree_disagree" && section.questions.map((q: any, idx: number) => (
            <div key={q.id} className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm">
              <p className="font-medium text-slate-800 dark:text-white text-sm mb-3">
                <span className="text-green-500 mr-2">{idx + 1}.</span>
                {q.statement}
              </p>
              <div className="flex gap-2 mb-2">
                <button
                  onClick={() => handleAnswer(q.id + "_choice", "agree")}
                  className={`flex-1 p-2 rounded-lg font-bold text-sm ${
                    answers[q.id + "_choice"] === "agree"
                      ? "bg-green-500 text-white"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  ✓ AGREE (1 mark)
                </button>
                <button
                  onClick={() => handleAnswer(q.id + "_choice", "disagree")}
                  className={`flex-1 p-2 rounded-lg font-bold text-sm ${
                    answers[q.id + "_choice"] === "disagree"
                      ? "bg-red-500 text-white"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  ✗ DISAGREE (1 mark)
                </button>
              </div>
              <textarea
                placeholder="Give reasons (3 marks)..."
                value={answers[q.id] || ""}
                onChange={(e) => handleAnswer(q.id, e.target.value)}
                className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm min-h-[100px]"
              />
            </div>
          ))}

          {/* Table/Figure Analysis (Q.5) */}
          {section.type === "table_analysis" && section.questions.map((q: any, idx: number) => (
            <div key={q.id} className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm">
              <p className="font-medium text-slate-800 dark:text-white text-sm mb-2 whitespace-pre-line">
                <span className="text-green-500 mr-2">{idx + 1}.</span>
                {q.question}
              </p>
              <textarea
                placeholder="Show calculations and answers..."
                value={answers[q.id] || ""}
                onChange={(e) => handleAnswer(q.id, e.target.value)}
                className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm min-h-[150px] font-mono"
              />
            </div>
          ))}

          {/* Long Answer (Q.6) */}
          {section.type === "long_answer" && section.questions.map((q: any, idx: number) => (
            <div key={q.id} className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm">
              <p className="font-medium text-slate-800 dark:text-white text-sm mb-2">
                <span className="text-green-500 mr-2">{idx + 1}.</span>
                {q.question} <span className="text-orange-500">(8 marks)</span>
              </p>
              <textarea
                placeholder="Write detailed answer with introduction, points, diagram (if needed), and conclusion..."
                value={answers[q.id] || ""}
                onChange={(e) => handleAnswer(q.id, e.target.value)}
                className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm min-h-[200px]"
              />
            </div>
          ))}

          {/* Numericals (Q.7 - if exists) */}
          {section.type === "numerical" && section.questions.map((q: any, idx: number) => (
            <div key={q.id} className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm">
              <p className="font-medium text-slate-800 dark:text-white text-sm mb-2 whitespace-pre-line">
                <span className="text-green-500 mr-2">{idx + 1}.</span>
                {q.question}
              </p>
              <textarea
                placeholder="Show formula, steps, and calculation..."
                value={answers[q.id] || ""}
                onChange={(e) => handleAnswer(q.id, e.target.value)}
                className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm min-h-[150px] font-mono"
              />
            </div>
          ))}

          {/* Legacy support for concept type */}
          {section.type === "concept" && section.questions.map((q: any, idx: number) => (
            <div key={q.id} className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm">
              <p className="font-medium text-slate-800 dark:text-white text-sm mb-2">
                <span className="text-green-500 mr-2">{idx + 1}.</span>
                {q.statement}
              </p>
              <input
                type="text"
                placeholder="Enter your answer..."
                value={answers[q.id] || ""}
                onChange={(e) => handleAnswer(q.id, e.target.value)}
                className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm"
              />
            </div>
          ))}

          {section.type === "true_false" && section.questions.map((q: any, idx: number) => (
            <div key={q.id} className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm">
              <p className="font-medium text-slate-800 dark:text-white text-sm mb-2">
                <span className="text-green-500 mr-2">{idx + 1}.</span>
                {q.statement}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleAnswer(q.id, true)}
                  className={`flex-1 p-2 rounded-lg font-bold ${
                    answers[q.id] === true
                      ? "bg-green-500 text-white"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  TRUE
                </button>
                <button
                  onClick={() => handleAnswer(q.id, false)}
                  className={`flex-1 p-2 rounded-lg font-bold ${
                    answers[q.id] === false
                      ? "bg-red-500 text-white"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  FALSE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderResults = () => {
    const autoScore = calculateAutoScore();
    const totalSelfMarks = Object.values(selfMarks).reduce((a, b) => a + b, 0);

    return (
      <div className="p-4 space-y-4">
        <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-6 text-white text-center">
          <Award size={48} className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Test Completed!</h2>
          <p className="text-white/80">Auto-scored: {autoScore} marks</p>
          {totalSelfMarks > 0 && (
            <p className="text-white/80">Self-evaluated: {totalSelfMarks} marks</p>
          )}
        </div>

        {selectedPaper.sections.map((section) => (
          <div key={section.id} className="bg-white dark:bg-slate-800 rounded-xl p-4">
            <h3 className="font-bold text-slate-800 dark:text-white mb-3">{section.title}</h3>

            {section.questions.map((q: any, idx: number) => (
              <div key={q.id} className="border-t border-slate-100 dark:border-slate-700 pt-3 mt-3">
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  <strong>Q{idx + 1}:</strong> {q.question || q.statement || q.concepts}
                </p>

                {section.type === "mcq" && (
                  <div className={`text-sm p-2 rounded ${answers[q.id] === q.correct ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    Your answer: {q.options[answers[q.id]] || "Not answered"}
                    <br />
                    Correct: {q.options[q.correct]}
                  </div>
                )}

                {section.type === "true_false" && (
                  <div className={`text-sm p-2 rounded ${answers[q.id] === q.answer ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    Your answer: {answers[q.id] === true ? "TRUE" : answers[q.id] === false ? "FALSE" : "Not answered"}
                    <br />
                    Correct: {q.answer ? "TRUE" : "FALSE"}
                  </div>
                )}

                {(q.modelAnswer || q.answer) && section.type !== "mcq" && section.type !== "true_false" && (
                  <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg mt-2">
                    <p className="text-xs font-bold text-green-600 dark:text-green-400 mb-1">Model Answer:</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 whitespace-pre-wrap">
                      {q.modelAnswer || q.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}

        <button
          onClick={restartTest}
          className="w-full py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold rounded-xl flex items-center justify-center gap-2"
        >
          <RotateCcw size={20} />
          Try Another Paper
        </button>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-slate-100 dark:bg-slate-900 w-full h-full sm:h-auto sm:max-h-[95vh] sm:max-w-4xl sm:rounded-2xl overflow-hidden flex flex-col">
        <div className="bg-gradient-to-r from-green-600 to-teal-600 p-3 sm:p-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <Calculator className="text-white" size={20} />
            <div>
              <h2 className="font-bold text-white text-sm sm:text-base">
                {testState === "select" ? "Economics Mock Tests" : selectedPaper.title}
              </h2>
              {testState === "running" && (
                <p className="text-white/80 text-xs">
                  Section {currentSection + 1} of {selectedPaper.sections.length}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            {testState === "running" && (
              <>
                <div className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-mono font-bold text-sm ${
                  timeLeft < 600 ? "bg-red-500 text-white animate-pulse" : "bg-white/20 text-white"
                }`}>
                  <Clock size={14} className="inline mr-1 sm:mr-2" />
                  {formatTime(timeLeft)}
                </div>
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="p-2 bg-white/20 rounded-lg text-white"
                >
                  {isPaused ? <Play size={18} /> : <Pause size={18} />}
                </button>
              </>
            )}
            <button
              onClick={onClose}
              className="p-2 bg-white/20 rounded-lg text-white hover:bg-white/30"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {testState === "select" && renderPaperSelection()}
          {testState === "intro" && renderIntro()}
          {testState === "running" && !showResults && renderQuestion()}
          {(testState === "submitted" || showResults) && renderResults()}
        </div>

        {testState === "running" && !showResults && (
          <div className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-3 shrink-0">
            <div className="flex items-center justify-between gap-2">
              <button
                onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                disabled={currentSection === 0}
                className="px-2 sm:px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center gap-1 sm:gap-2 disabled:opacity-50 text-sm"
              >
                <ChevronLeft size={18} />
                <span className="hidden sm:inline">Prev</span>
              </button>

              <div className="flex gap-1 overflow-x-auto">
                {selectedPaper.sections.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSection(idx)}
                    className={`w-8 h-8 rounded-lg text-xs font-bold shrink-0 ${
                      currentSection === idx
                        ? "bg-green-500 text-white"
                        : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>

              {currentSection === selectedPaper.sections.length - 1 ? (
                <button
                  onClick={submitTest}
                  className="px-3 sm:px-6 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg flex items-center gap-1 sm:gap-2 font-bold text-sm"
                >
                  <Send size={18} />
                  <span className="hidden sm:inline">Submit</span>
                </button>
              ) : (
                <button
                  onClick={() => setCurrentSection(Math.min(selectedPaper.sections.length - 1, currentSection + 1))}
                  className="px-2 sm:px-4 py-2 bg-green-500 text-white rounded-lg flex items-center gap-1 sm:gap-2 text-sm"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight size={18} />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EcoMockTest;
