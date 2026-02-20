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
          question:
            "Which of the following is studied in Micro Economics?\n(a) Individual demand\n(b) National Income\n(c) General price level\n(d) Aggregate supply",
          options: ["Only (a)", "Only (b)", "(a) and (b)", "(c) and (d)"],
          correct: 0,
          marks: 1,
        },
        {
          id: "eco_q1a2_2024",
          question:
            "When TU is maximum:\n(a) MU is zero\n(b) MU is negative\n(c) MU is maximum\n(d) Consumer reaches satiety point",
          options: ["(a) and (d)", "(b) and (c)", "Only (a)", "Only (c)"],
          correct: 0,
          marks: 1,
        },
        {
          id: "eco_q1a3_2024",
          question:
            "Features of Perfect Competition:\n(a) Homogeneous products\n(b) Free entry and exit\n(c) Price maker\n(d) Large number of buyers and sellers",
          options: [
            "(a), (b), (c)",
            "(a), (b), (d)",
            "(b), (c), (d)",
            "All of these",
          ],
          correct: 1,
          marks: 1,
        },
        {
          id: "eco_q1a4_2024",
          question:
            "GST includes:\n(a) CGST\n(b) SGST\n(c) IGST\n(d) Income Tax",
          options: [
            "(a), (b), (c)",
            "(a), (b), (d)",
            "(b), (c), (d)",
            "All of these",
          ],
          correct: 0,
          marks: 1,
        },
        {
          id: "eco_q1a5_2024",
          question:
            "National Income includes:\n(a) Wages\n(b) Rent\n(c) Interest\n(d) Transfer payments",
          options: [
            "(a), (b), (c)",
            "(a), (b), (d)",
            "(b), (c), (d)",
            "All of these",
          ],
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
          reason:
            "Transfer payments are not factor income, others are factor incomes.",
          marks: 1,
        },
        {
          id: "eco_q1c2_2024",
          set: ["Perfect competition", "Monopoly", "Oligopoly", "Demand"],
          answer: "Demand",
          reason:
            "Demand is not a market structure, others are types of market.",
          marks: 1,
        },
        {
          id: "eco_q1c3_2024",
          set: ["CGST", "SGST", "IGST", "Income Tax"],
          answer: "Income Tax",
          reason:
            "Income tax is a direct tax, others are components of GST (indirect tax).",
          marks: 1,
        },
        {
          id: "eco_q1c4_2024",
          set: ["Laspeyre's", "Paasche's", "Fisher's", "Marshall's"],
          answer: "Marshall's",
          reason:
            "Marshall gave utility theory, others are index number methods.",
          marks: 1,
        },
        {
          id: "eco_q1c5_2024",
          set: [
            "Revenue receipt",
            "Capital receipt",
            "Revenue expenditure",
            "Elastic demand",
          ],
          answer: "Elastic demand",
          reason:
            "Elastic demand is related to demand, others are budget concepts.",
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
          correlation:
            "Micro Economics : Price Theory :: Macro Economics : ___",
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
      instructions:
        "Identify and explain the concept (Any 3 out of 5, 2 marks each)",
      required: 3,
      questions: [
        {
          id: "eco_q2a1_2024",
          statement:
            "As consumer consumes more units, utility from each successive unit diminishes.",
          concept: "Law of Diminishing Marginal Utility",
          modelAnswer:
            "**Law of Diminishing Marginal Utility**\n\n• Given by H.H. Gossen (Gossen's First Law)\n• As consumption increases, MU decreases\n• Assumptions: Continuous consumption, homogeneous units\n• Example: First chapati gives high satisfaction, subsequent ones give less",
          marks: 2,
        },
        {
          id: "eco_q2a2_2024",
          statement:
            "A market with large number of sellers selling differentiated products.",
          concept: "Monopolistic Competition",
          modelAnswer:
            "**Monopolistic Competition**\n\n• Many sellers with product differentiation\n• Free entry and exit\n• Non-price competition (advertising, branding)\n• Downward sloping demand curve\n• Examples: Restaurants, clothing brands, soaps",
          marks: 2,
        },
        {
          id: "eco_q2a3_2024",
          statement:
            "Excess of total expenditure over total receipts excluding borrowings.",
          concept: "Fiscal Deficit",
          modelAnswer:
            "**Fiscal Deficit**\n\n• Shows government's borrowing requirement\n• Formula: Total Exp - (Rev Receipts + Cap Receipts excl. borrowings)\n• Indicates how much government needs to borrow\n• Ideal: Below 3% of GDP\n• Financed through market borrowings",
          marks: 2,
        },
        {
          id: "eco_q2a4_2024",
          statement:
            "Index number that satisfies both time reversal and factor reversal tests.",
          concept: "Fisher's Ideal Index Number",
          modelAnswer:
            "**Fisher's Ideal Index Number**\n\n• Given by Irving Fisher\n• Formula: √(Laspeyre's × Paasche's)\n• Called 'Ideal' because it satisfies both tests\n• Geometric mean of two indices\n• Most accurate measure of price changes",
          marks: 2,
        },
        {
          id: "eco_q2a5_2024",
          statement:
            "Degree of responsiveness of quantity demanded to change in price.",
          concept: "Price Elasticity of Demand",
          modelAnswer:
            "**Price Elasticity of Demand (Ed)**\n\n• Formula: Ed = %ΔQd / %ΔP\n• Types: Elastic (>1), Inelastic (<1), Unitary (=1)\n• Perfectly elastic (∞), Perfectly inelastic (0)\n• Factors: Nature of commodity, substitutes, income",
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
          modelAnswer:
            "| Aspect | Micro Economics | Macro Economics |\n|--------|-----------------|------------------|\n| Meaning | Individual units | Economy as whole |\n| Also Called | Price Theory | Income Theory |\n| Father | Alfred Marshall | J.M. Keynes |\n| Method | Slicing | Lumping |\n| Scope | Consumer, firm | GDP, inflation |",
          marks: 2,
        },
        {
          id: "eco_q2b2_2024",
          concepts: "Total Utility and Marginal Utility",
          modelAnswer:
            "| Aspect | Total Utility | Marginal Utility |\n|--------|---------------|------------------|\n| Meaning | Sum of all utilities | Additional utility |\n| Formula | TU = ΣMU | MU = TUn - TUn-1 |\n| Curve | Inverted U | Downward sloping |\n| Max Point | When MU = 0 | First unit |",
          marks: 2,
        },
        {
          id: "eco_q2b3_2024",
          concepts: "Perfect Competition and Monopoly",
          modelAnswer:
            "| Aspect | Perfect Competition | Monopoly |\n|--------|---------------------|----------|\n| Sellers | Large number | Single |\n| Products | Homogeneous | Unique |\n| Price Control | None (price taker) | Full (price maker) |\n| Entry | Free | Blocked |\n| AR & MR | AR = MR | AR > MR |",
          marks: 2,
        },
        {
          id: "eco_q2b4_2024",
          concepts: "Direct Tax and Indirect Tax",
          modelAnswer:
            "| Aspect | Direct Tax | Indirect Tax |\n|--------|------------|---------------|\n| Burden | Cannot shift | Can shift |\n| Nature | Progressive | Regressive |\n| Examples | Income tax | GST, Excise |\n| Collection | Directly | Through intermediaries |",
          marks: 2,
        },
        {
          id: "eco_q2b5_2024",
          concepts: "Revenue Receipt and Capital Receipt",
          modelAnswer:
            "| Aspect | Revenue Receipt | Capital Receipt |\n|--------|-----------------|------------------|\n| Nature | Recurring | Non-recurring |\n| Liability | No liability | Creates liability |\n| Assets | No reduction | May reduce |\n| Examples | Tax, fees | Loans, disinvestment |",
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
          modelAnswer:
            "**Law of Demand:**\n\n**Statement:** Other things remaining constant, when price rises, quantity demanded falls and vice versa.\n\n**Given by:** Alfred Marshall\n\n**Relationship:** Inverse (price ↑, demand ↓)\n\n**Reasons:**\n1. Income Effect\n2. Substitution Effect\n3. New Buyers\n4. Multiple Uses\n\n**Exceptions:** Giffen goods, Veblen goods, Future expectations\n\n**Diagram:** Downward sloping demand curve",
          marks: 4,
        },
        {
          id: "eco_q3_2_2024",
          question: "Explain the features of Monopoly.",
          modelAnswer:
            "**Features of Monopoly:**\n\n1. **Single Seller:** Only one firm in industry\n\n2. **No Substitutes:** Product is unique\n\n3. **Price Maker:** Full control over price\n\n4. **Blocked Entry:** Barriers prevent new firms\n\n5. **Abnormal Profits:** Even in long run\n\n6. **Price Discrimination:** Can charge different prices\n\n**Examples:** Indian Railways, local water supply",
          marks: 4,
        },
        {
          id: "eco_q3_3_2024",
          question: "Explain the concept of National Income.",
          modelAnswer:
            "**National Income:**\n\n**Definition:** Total money value of all final goods and services produced by normal residents in a year.\n\n**Methods of Calculation:**\n1. Value Added Method\n2. Income Method\n3. Expenditure Method\n\n**Important Aggregates:**\n- GDP = C + I + G + (X-M)\n- GNP = GDP + NFIA\n- NNP = GNP - Depreciation\n- NI = NNP at FC\n\n**Significance:** Measures economic progress",
          marks: 4,
        },
        {
          id: "eco_q3_4_2024",
          question: "What is GST? Explain its features.",
          modelAnswer:
            "**Goods and Services Tax (GST):**\n\n**Definition:** Comprehensive indirect tax on supply of goods and services.\n\n**Introduced:** July 1, 2017 (101st Amendment)\n\n**Features:**\n1. **One Nation One Tax**\n2. **Destination based**\n3. **Dual Structure:** CGST + SGST\n4. **IGST:** For inter-state\n5. **Multiple rates:** 0%, 5%, 12%, 18%, 28%\n\n**Benefits:** Reduced cascading, unified market",
          marks: 4,
        },
        {
          id: "eco_q3_5_2024",
          question: "Explain the types of Price Elasticity of Demand.",
          modelAnswer:
            "**Types of Price Elasticity:**\n\n1. **Perfectly Elastic (Ed = ∞):** Horizontal curve\n\n2. **Perfectly Inelastic (Ed = 0):** Vertical curve\n\n3. **Unitary Elastic (Ed = 1):** Rectangular hyperbola\n\n4. **Elastic (Ed > 1):** Flatter curve, luxuries\n\n5. **Inelastic (Ed < 1):** Steeper curve, necessities\n\n**Draw diagrams for each type**",
          marks: 4,
        },
      ],
    },
    {
      id: "q4_2024",
      type: "agree_disagree",
      title: "Q.4 Agree or Disagree",
      marks: 12,
      instructions:
        "State with reasons whether you agree or disagree (Any 3 out of 5, 4 marks each: 1 mark for statement + 3 marks for reasons)",
      required: 3,
      questions: [
        {
          id: "eco_q4_1_2024",
          statement: "Demand curve slopes downward.",
          modelAnswer:
            "**Agree** ✓ (1 mark)\n\n**Reasons:** (3 marks)\n1. Law of Demand shows inverse relationship\n2. Income effect - lower price increases real income\n3. Substitution effect - cheaper goods preferred\n4. New buyers enter at lower prices\n5. Multiple uses possible at lower prices\n\n*Exception: Giffen goods show upward slope*",
          marks: 4,
        },
        {
          id: "eco_q4_2_2024",
          statement: "Monopolist is a price maker.",
          modelAnswer:
            "**Agree** ✓ (1 mark)\n\n**Reasons:** (3 marks)\n1. Single seller in market\n2. No close substitutes available\n3. Entry barriers block competition\n4. Controls entire market supply\n5. Can set price to maximize profit\n\n*However, limited by demand constraints*",
          marks: 4,
        },
        {
          id: "eco_q4_3_2024",
          statement: "Higher National Income always means higher welfare.",
          modelAnswer:
            "**Disagree** ✗ (1 mark)\n\n**Reasons:** (3 marks)\n1. Distribution may be unequal\n2. Composition matters - war goods don't increase welfare\n3. Externalities like pollution reduce welfare\n4. Non-monetary factors ignored (health, education)\n5. Black money not included\n\n*NI is imperfect welfare measure*",
          marks: 4,
        },
        {
          id: "eco_q4_4_2024",
          statement: "GST has simplified tax structure in India.",
          modelAnswer:
            "**Agree** ✓ (1 mark)\n\n**Reasons:** (3 marks)\n1. One nation, one tax - replaced 17 taxes\n2. Reduced cascading effect\n3. Input tax credit available\n4. Digital compliance\n5. Unified market across states\n\n*Challenges: Multiple slabs, compliance burden*",
          marks: 4,
        },
        {
          id: "eco_q4_5_2024",
          statement: "In perfect competition, firm is a price taker.",
          modelAnswer:
            "**Agree** ✓ (1 mark)\n\n**Reasons:** (3 marks)\n1. Large number of buyers and sellers\n2. Homogeneous products\n3. Individual firm has negligible share\n4. Cannot influence market price\n5. Must accept price determined by market forces\n\n*AR = MR = Price (horizontal line)*",
          marks: 4,
        },
      ],
    },
    {
      id: "q5_2024",
      type: "table_analysis",
      title: "Q.5 Study the Table/Figure",
      marks: 8,
      instructions:
        "Study the following and answer (Any 2 out of 3, 4 marks each)",
      required: 2,
      questions: [
        {
          id: "eco_q5_1_2024",
          question:
            "Study the following table and answer:\n\n| Units | TU |\n|-------|-----|\n| 1 | 10 |\n| 2 | 18 |\n| 3 | 24 |\n| 4 | 28 |\n| 5 | 28 |\n\n(a) Calculate MU for each unit\n(b) At which unit is TU maximum?\n(c) State the law illustrated",
          modelAnswer:
            "**Solution:**\n\n**(a) MU Calculation:**\n| Units | TU | MU |\n|-------|-----|-----|\n| 1 | 10 | 10 |\n| 2 | 18 | 8 |\n| 3 | 24 | 6 |\n| 4 | 28 | 4 |\n| 5 | 28 | 0 |\n\n**(b)** TU is maximum at 5th unit (TU = 28)\n\n**(c)** Law of Diminishing Marginal Utility - As consumption increases, MU decreases",
          marks: 4,
        },
        {
          id: "eco_q5_2_2024",
          question:
            "From the following calculate Price Elasticity of Demand:\n\nOriginal Price = ₹100, New Price = ₹80\nOriginal Quantity = 40 units, New Quantity = 60 units\n\n(a) Calculate Ed using percentage method\n(b) What type of elasticity is this?\n(c) Name a commodity with such elasticity",
          modelAnswer:
            "**Solution:**\n\n**(a) Calculation:**\n%ΔQ = (60-40)/40 × 100 = 50%\n%ΔP = (80-100)/100 × 100 = -20%\n\nEd = %ΔQ / %ΔP = 50/20 = **2.5**\n\n**(b)** Ed > 1, so demand is **Elastic**\n\n**(c)** Examples: Air travel, luxury goods, electronic items, branded clothes",
          marks: 4,
        },
        {
          id: "eco_q5_3_2024",
          question:
            "Calculate National Income from:\n\nGDP at MP = ₹5000 cr\nDepreciation = ₹300 cr\nNFIA = ₹200 cr\nIndirect Taxes = ₹400 cr\nSubsidies = ₹100 cr",
          modelAnswer:
            "**Solution:**\n\n**Step 1:** GNP at MP = GDP at MP + NFIA\n= 5000 + 200 = ₹5200 cr\n\n**Step 2:** NNP at MP = GNP at MP - Depreciation\n= 5200 - 300 = ₹4900 cr\n\n**Step 3:** NI at FC = NNP at MP - IT + Subsidies\n= 4900 - 400 + 100 = **₹4600 cr**\n\n*National Income = ₹4600 crore*",
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
          question:
            "Explain the Law of Demand with demand schedule, diagram and exceptions.",
          modelAnswer:
            "### Law of Demand\n\n**Statement:** Other things being equal, when price rises, quantity demanded falls, and when price falls, quantity demanded rises.\n\n**Given by:** Alfred Marshall\n\n**Demand Schedule:**\n| Price (₹) | Quantity |\n|-----------|----------|\n| 10 | 50 |\n| 20 | 40 |\n| 30 | 30 |\n| 40 | 20 |\n| 50 | 10 |\n\n**Diagram:** Draw downward sloping demand curve (DD)\n- X-axis: Quantity\n- Y-axis: Price\n- Curve slopes from left to right downward\n\n**Reasons for Downward Slope:**\n1. **Income Effect:** Lower price = higher real income\n2. **Substitution Effect:** Cheaper goods preferred\n3. **New Buyers:** Lower prices attract new consumers\n4. **Multiple Uses:** More uses at lower prices\n5. **Diminishing MU:** Lower price compensates for lower MU\n\n**Exceptions:**\n1. **Giffen Goods:** Inferior goods where demand rises with price\n2. **Veblen Goods:** Prestige goods (diamonds, luxury cars)\n3. **Future Expectations:** If price expected to rise further\n4. **Ignorance:** Consumers unaware of price changes\n5. **Emergency:** Medical emergencies\n\n**Conclusion:** Law of Demand is fundamental law showing inverse relationship between price and quantity demanded.",
          marks: 8,
        },
        {
          id: "eco_q6_2_2024",
          question: "Explain the features of Perfect Competition market.",
          modelAnswer:
            "### Features of Perfect Competition\n\n**Definition:** A market with large number of buyers and sellers dealing in homogeneous products where no single buyer or seller can influence price.\n\n**Features:**\n\n**1. Large Number of Buyers and Sellers:**\n- Individual has negligible share\n- No one can influence price\n- Price determined by market forces\n\n**2. Homogeneous Products:**\n- All firms sell identical goods\n- No product differentiation\n- Perfect substitutes\n\n**3. Free Entry and Exit:**\n- No barriers to entry\n- Firms can enter/exit freely\n- Long-run normal profits\n\n**4. Perfect Knowledge:**\n- Full information available\n- No buyer pays more\n- No seller accepts less\n\n**5. Perfect Mobility:**\n- Factors move freely\n- Resources shift to profitable uses\n\n**6. No Transport Costs:**\n- Uniform price everywhere\n- No geographical advantage\n\n**7. Firm is Price Taker:**\n- Accepts market price\n- AR = MR = Price\n- Horizontal demand curve\n\n**8. No Selling Costs:**\n- No advertising needed\n- Products are identical\n\n**Examples:** Agricultural markets, stock exchanges\n\n**Conclusion:** Perfect competition is theoretical ideal ensuring efficient resource allocation.",
          marks: 8,
        },
        {
          id: "eco_q6_3_2024",
          question: "Explain the three methods of measuring National Income.",
          modelAnswer:
            "### Methods of Measuring National Income\n\n**Definition:** National Income is the total money value of all final goods and services produced by normal residents in a year.\n\n**1. Product/Value Added Method:**\n- Adds value added by all producing units\n- Value Added = Output - Intermediate Consumption\n- Avoids double counting\n- GDP = ΣVA of all sectors\n- Sectors: Primary + Secondary + Tertiary\n\n**Precautions:**\n- Include only final goods\n- Avoid double counting\n- Include imputed rent of owner-occupied houses\n\n**2. Income Method:**\n- Adds all factor incomes\n- NI = Wages + Rent + Interest + Profit\n- Includes compensation of employees\n- Mixed income of self-employed\n\n**Precautions:**\n- Only factor incomes included\n- Exclude transfer payments\n- Include income in kind\n\n**3. Expenditure Method:**\n- Adds all final expenditures\n- GDP = C + I + G + (X - M)\n- Where:\n  - C = Private Consumption\n  - I = Investment (Gross)\n  - G = Government Expenditure\n  - (X-M) = Net Exports\n\n**Precautions:**\n- Only final expenditure\n- Exclude intermediate goods\n- Include net exports\n\n**Important:** All three methods give same result (National Income identity)\n\n**Conclusion:** Multiple methods help cross-verify and ensure accuracy of national income estimates.",
          marks: 8,
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
          question:
            "Micro Economics includes study of:\n(a) Individual consumer\n(b) Individual firm\n(c) National income\n(d) General price level",
          options: ["(a) and (b)", "(c) and (d)", "(a) and (c)", "(b) and (d)"],
          correct: 0,
          marks: 1,
        },
        {
          id: "eco_q1a2_2023",
          question:
            "Law of DMU was given by:\n(a) Marshall\n(b) Gossen\n(c) Keynes\n(d) Also called Gossen's First Law",
          options: ["(a) and (c)", "(b) and (d)", "Only (a)", "Only (b)"],
          correct: 1,
          marks: 1,
        },
        {
          id: "eco_q1a3_2023",
          question:
            "In Monopoly:\n(a) Single seller\n(b) No substitutes\n(c) Free entry\n(d) Price maker",
          options: [
            "(a), (b), (c)",
            "(a), (b), (d)",
            "(b), (c), (d)",
            "All of these",
          ],
          correct: 1,
          marks: 1,
        },
        {
          id: "eco_q1a4_2023",
          question:
            "National Income includes:\n(a) Wages\n(b) Rent\n(c) Interest\n(d) Profit",
          options: [
            "(a), (b), (c)",
            "(b), (c), (d)",
            "(a), (c), (d)",
            "All of these",
          ],
          correct: 3,
          marks: 1,
        },
        {
          id: "eco_q1a5_2023",
          question:
            "Index Numbers are used for:\n(a) Measuring price changes\n(b) Forecasting\n(c) Policy making\n(d) Measuring weight",
          options: [
            "(a), (b), (c)",
            "(a), (b), (d)",
            "(b), (c), (d)",
            "All of these",
          ],
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
          statement:
            "Market with many sellers selling differentiated products.",
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
          set: [
            "Price Theory",
            "Income Theory",
            "Welfare Theory",
            "Demand Theory",
          ],
          answer: "Income Theory",
          reason:
            "Income Theory is related to Macro Economics, others to Micro Economics.",
          marks: 1,
        },
        {
          id: "eco_q1c2_2023",
          set: ["TU", "MU", "AR", "Consumer surplus"],
          answer: "AR",
          reason:
            "AR (Average Revenue) is a production concept, others are utility concepts.",
          marks: 1,
        },
        {
          id: "eco_q1c3_2023",
          set: ["Monopoly", "Duopoly", "Oligopoly", "Utility"],
          answer: "Utility",
          reason:
            "Utility is a consumption concept, others are market structures.",
          marks: 1,
        },
        {
          id: "eco_q1c4_2023",
          set: ["GDP", "GNP", "NNP", "MU"],
          answer: "MU",
          reason:
            "MU is utility concept, others are national income aggregates.",
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
          correlation:
            "Law of Demand : Inverse relation :: Law of Supply : ___",
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
          correlation:
            "Revenue Receipt : No liability :: Capital Receipt : ___",
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
      instructions:
        "Identify and explain the concept (Any 3 out of 5, 2 marks each)",
      required: 3,
      questions: [
        {
          id: "eco_q2a1_2023",
          statement:
            "Study of individual economic units like consumer, firm, industry.",
          concept: "Micro Economics",
          modelAnswer:
            "**Micro Economics**\n\n• Also called Price Theory\n• Father: Alfred Marshall\n• Uses slicing method\n• Studies individual demand, firm pricing, industry behavior\n• Partial equilibrium analysis",
          marks: 2,
        },
        {
          id: "eco_q2a2_2023",
          statement: "When total utility reaches maximum point.",
          concept: "Point of Satiety / Consumer Equilibrium",
          modelAnswer:
            "**Point of Satiety**\n\n• TU is maximum at this point\n• MU becomes zero\n• Consumer is fully satisfied\n• No desire to consume more\n• Any further consumption reduces TU",
          marks: 2,
        },
        {
          id: "eco_q2a3_2023",
          statement:
            "Market with large number of buyers and sellers dealing in identical products.",
          concept: "Perfect Competition",
          modelAnswer:
            "**Perfect Competition**\n\n• Homogeneous products\n• Free entry and exit\n• Perfect knowledge\n• Price taker (AR = MR)\n• Examples: Agricultural markets, stock exchange",
          marks: 2,
        },
        {
          id: "eco_q2a4_2023",
          statement:
            "Total value of goods/services produced by normal residents in a year.",
          concept: "National Income",
          modelAnswer:
            "**National Income**\n\n• Money value of all final goods\n• Produced by normal residents\n• During one financial year\n• Three methods: Product, Income, Expenditure\n• Indicates economic progress",
          marks: 2,
        },
        {
          id: "eco_q2a5_2023",
          statement:
            "Statistical measure to compare prices over different time periods.",
          concept: "Index Number",
          modelAnswer:
            "**Index Number**\n\n• Compares price levels over time\n• Base year = 100\n• Types: Laspeyre's, Paasche's, Fisher's\n• Uses: Inflation measurement, policy making\n• Formula: (P₁/P₀) × 100",
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
          modelAnswer:
            "| Aspect | Total Utility | Marginal Utility |\n|--------|---------------|------------------|\n| Meaning | Sum of all utilities | Additional utility |\n| Formula | TU = ΣMU | MU = TUn - TUn-1 |\n| Curve | Inverted U | Downward sloping |\n| Max Point | When MU = 0 | First unit highest |",
          marks: 2,
        },
        {
          id: "eco_q2b2_2023",
          concepts: "Extension and Increase in Demand",
          modelAnswer:
            "| Aspect | Extension | Increase |\n|--------|-----------|----------|\n| Cause | Fall in price | Other factors change |\n| Movement | Along curve | Shift of curve |\n| Direction | Downward | Rightward |\n| Price | Changes | Constant |",
          marks: 2,
        },
        {
          id: "eco_q2b3_2023",
          concepts: "CGST and SGST",
          modelAnswer:
            "| Aspect | CGST | SGST |\n|--------|------|------|\n| Full Form | Central GST | State GST |\n| Levied by | Centre | State |\n| On | Intra-state | Intra-state |\n| Revenue | To Centre | To State |",
          marks: 2,
        },
        {
          id: "eco_q2b4_2023",
          concepts: "GDP and GNP",
          modelAnswer:
            "| Aspect | GDP | GNP |\n|--------|-----|-----|\n| Full Form | Gross Domestic Product | Gross National Product |\n| Scope | Domestic territory | Normal residents |\n| Formula | Output within borders | GDP + NFIA |\n| Focus | Location | Nationality |",
          marks: 2,
        },
        {
          id: "eco_q2b5_2023",
          concepts: "Elastic and Inelastic Demand",
          modelAnswer:
            "| Aspect | Elastic | Inelastic |\n|--------|---------|------------|\n| Coefficient | Ed > 1 | Ed < 1 |\n| Response | High | Low |\n| Curve | Flatter | Steeper |\n| Goods | Luxuries | Necessities |",
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
          modelAnswer:
            "**Law of Supply:**\n\n**Statement:** Other things remaining constant, when price rises, supply rises and vice versa.\n\n**Given by:** Alfred Marshall\n\n**Relationship:** Direct (price ↑, supply ↑)\n\n**Reasons:**\n1. Higher profits at higher prices\n2. New producers enter\n3. Existing producers increase output\n4. Covers higher marginal cost\n\n**Exceptions:** Backward bending labor supply, fixed supply of land",
          marks: 4,
        },
        {
          id: "eco_q3_2_2023",
          question: "Explain the concept of Utility.",
          modelAnswer:
            "**Utility:**\n\n**Definition:** Want satisfying power of a commodity.\n\n**Features:**\n1. Subjective - varies person to person\n2. Relative - depends on situation\n3. Not same as usefulness\n4. Measured in 'utils'\n\n**Types:**\n- Total Utility (TU): Sum of all utilities\n- Marginal Utility (MU): Additional utility\n\n**Formula:** MU = TUn - TUn-1",
          marks: 4,
        },
        {
          id: "eco_q3_3_2023",
          question: "What is Index Number? State its uses.",
          modelAnswer:
            "**Index Number:**\n\n**Definition:** Statistical measure to compare variables over time.\n\n**Formula:** Index = (P₁/P₀) × 100\n\n**Uses:**\n1. Measure price changes (inflation)\n2. Measure cost of living\n3. Policy making\n4. Wage determination\n5. Comparing economic variables\n\n**Types:** Laspeyre's, Paasche's, Fisher's",
          marks: 4,
        },
        {
          id: "eco_q3_4_2023",
          question: "Explain types of budget.",
          modelAnswer:
            "**Types of Budget:**\n\n**1. Balanced Budget:**\n- Revenue = Expenditure\n- Rare in practice\n\n**2. Surplus Budget:**\n- Revenue > Expenditure\n- Used to control inflation\n\n**3. Deficit Budget:**\n- Revenue < Expenditure\n- Common in developing countries\n- Used for development\n\n**Types of Deficit:** Revenue, Fiscal, Primary",
          marks: 4,
        },
        {
          id: "eco_q3_5_2023",
          question: "Explain features of Monopolistic Competition.",
          modelAnswer:
            "**Monopolistic Competition:**\n\n**Features:**\n1. **Large number of sellers**\n2. **Product differentiation** - similar but not identical\n3. **Free entry and exit**\n4. **Selling costs** - advertising important\n5. **Downward sloping demand**\n6. **Non-price competition**\n\n**Examples:** Restaurants, soaps, toothpaste brands",
          marks: 4,
        },
      ],
    },
    {
      id: "q4_2023",
      type: "agree_disagree",
      title: "Q.4 Agree or Disagree",
      marks: 12,
      instructions:
        "State with reasons whether you agree or disagree (Any 3 out of 5, 4 marks each: 1 mark for statement + 3 marks for reasons)",
      required: 3,
      questions: [
        {
          id: "eco_q4_1_2023",
          statement: "Supply curve slopes upward.",
          modelAnswer:
            "**Agree** ✓ (1 mark)\n\n**Reasons:** (3 marks)\n1. Law of Supply shows direct relationship\n2. Higher prices mean higher profits\n3. New producers enter at higher prices\n4. Existing producers increase output\n5. Higher prices cover rising marginal cost\n\n*Exception: Labor supply curve bends backward*",
          marks: 4,
        },
        {
          id: "eco_q4_2_2023",
          statement: "MU curve slopes downward.",
          modelAnswer:
            "**Agree** ✓ (1 mark)\n\n**Reasons:** (3 marks)\n1. Law of Diminishing MU operates\n2. First unit gives highest satisfaction\n3. Successive units give less satisfaction\n4. Consumer reaches satiety eventually\n5. MU can even become negative\n\n*Given by H.H. Gossen (Gossen's First Law)*",
          marks: 4,
        },
        {
          id: "eco_q4_3_2023",
          statement: "Perfect competition is most efficient market.",
          modelAnswer:
            "**Agree** ✓ (1 mark)\n\n**Reasons:** (3 marks)\n1. Optimal resource allocation\n2. Consumer sovereignty prevails\n3. No super-normal profits in long run\n4. Price = Marginal Cost (efficiency)\n5. Maximum consumer and producer surplus\n\n*However, it's mostly theoretical*",
          marks: 4,
        },
        {
          id: "eco_q4_4_2023",
          statement: "GDP is a better measure than GNP for domestic economy.",
          modelAnswer:
            "**Agree** ✓ (1 mark)\n\n**Reasons:** (3 marks)\n1. GDP measures production within borders\n2. Better indicator of domestic economic activity\n3. Not affected by foreign income flows\n4. Easier to calculate\n5. More relevant for policy making\n\n*GNP better for global comparison*",
          marks: 4,
        },
        {
          id: "eco_q4_5_2023",
          statement: "Direct taxes are more equitable than indirect taxes.",
          modelAnswer:
            "**Agree** ✓ (1 mark)\n\n**Reasons:** (3 marks)\n1. Direct taxes are progressive\n2. Based on ability to pay\n3. Rich pay more, poor pay less\n4. Cannot be shifted to others\n5. Reduce income inequality\n\n*Indirect taxes are regressive - same rate for all*",
          marks: 4,
        },
      ],
    },
    {
      id: "q5_2023",
      type: "table_analysis",
      title: "Q.5 Study the Table/Figure",
      marks: 8,
      instructions:
        "Study the following and answer (Any 2 out of 3, 4 marks each)",
      required: 2,
      questions: [
        {
          id: "eco_q5_1_2023",
          question:
            "From the following calculate TU:\n\n| Units | MU |\n|-------|-----|\n| 1 | 12 |\n| 2 | 10 |\n| 3 | 8 |\n| 4 | 6 |\n| 5 | 4 |\n\nAnswer: (a) Calculate TU (b) When will TU be maximum? (c) What law is illustrated?",
          modelAnswer:
            "**Solution:**\n\n**(a) TU Calculation:**\n| Units | MU | TU |\n|-------|-----|-----|\n| 1 | 12 | 12 |\n| 2 | 10 | 22 |\n| 3 | 8 | 30 |\n| 4 | 6 | 36 |\n| 5 | 4 | 40 |\n\n**(b)** TU will be maximum when MU = 0 (Point of Satiety)\n\n**(c)** Law of Diminishing Marginal Utility - MU decreases with each successive unit",
          marks: 4,
        },
        {
          id: "eco_q5_2_2023",
          question:
            "Calculate Ed from:\nP₁ = ₹100, P₂ = ₹80\nQ₁ = 40 units, Q₂ = 60 units\n\n(a) Calculate Ed\n(b) What type of demand?\n(c) Give example of such goods",
          modelAnswer:
            "**Solution:**\n\n**(a) Calculation:**\n%ΔQ = (60-40)/40 × 100 = 50%\n%ΔP = (80-100)/100 × 100 = -20%\nEd = 50%/20% = **2.5**\n\n**(b)** Ed > 1, demand is **Elastic**\n\n**(c)** Examples: Luxury goods, air travel, branded products, electronic items",
          marks: 4,
        },
        {
          id: "eco_q5_3_2023",
          question:
            "Calculate Fisher's Index:\nLaspeyre's Index = 115\nPaasche's Index = 120",
          modelAnswer:
            "**Solution:**\n\nGiven:\n- L = 115\n- P = 120\n\n**Formula:** Fisher's Index = √(L × P)\n\n**Calculation:**\n= √(115 × 120)\n= √13800\n= **117.47**\n\n**Note:** Fisher's is called 'Ideal Index' as it's geometric mean of L and P, satisfies both time and factor reversal tests.",
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
          question:
            "Explain the Law of Supply with schedule, diagram and exceptions.",
          modelAnswer:
            "### Law of Supply\n\n**Statement:** Other things remaining constant, when price rises, quantity supplied rises, and vice versa.\n\n**Given by:** Alfred Marshall\n\n**Supply Schedule:**\n| Price (₹) | Quantity |\n|-----------|----------|\n| 10 | 100 |\n| 20 | 200 |\n| 30 | 300 |\n| 40 | 400 |\n| 50 | 500 |\n\n**Diagram:** Draw upward sloping supply curve (SS)\n- X-axis: Quantity\n- Y-axis: Price\n- Curve slopes from left to right upward\n\n**Reasons for Upward Slope:**\n1. Higher profits at higher prices\n2. New producers enter\n3. Existing producers increase output\n4. Covers higher marginal costs\n5. More profitable to sell\n\n**Exceptions:**\n1. **Backward bending labor supply:** At very high wages, workers prefer leisure\n2. **Fixed supply:** Land cannot be increased\n3. **Agricultural supply:** Depends on monsoon, not price\n4. **Rare goods:** Antiques, paintings\n5. **Expectations:** If price expected to rise further\n\n**Conclusion:** Law of Supply is fundamental law showing direct relationship between price and quantity supplied.",
          marks: 8,
        },
        {
          id: "eco_q6_2_2023",
          question: "Explain the features of Monopoly market.",
          modelAnswer:
            "### Features of Monopoly\n\n**Definition:** A market with single seller having complete control over supply of a product with no close substitutes.\n\n**Features:**\n\n**1. Single Seller:**\n- Only one firm in industry\n- Firm = Industry\n- Complete control over supply\n\n**2. No Close Substitutes:**\n- Product is unique\n- No competition from similar goods\n- Cross elasticity is zero\n\n**3. Price Maker:**\n- Full control over price\n- Can set any price to maximize profit\n- Not a price taker\n\n**4. Blocked Entry:**\n- New firms cannot enter\n- Barriers: Legal, natural, artificial\n- Maintains monopoly power\n\n**5. Price Discrimination:**\n- Can charge different prices\n- Different markets, time periods\n- Based on elasticity of demand\n\n**6. Abnormal Profits:**\n- Even in long run\n- No competition to reduce profits\n\n**7. Demand Curve:**\n- Downward sloping (AR curve)\n- AR > MR always\n- MR can be negative\n\n**Examples:** Indian Railways, local water supply, BSNL (earlier)\n\n**Conclusion:** Monopoly is extreme market structure with complete market control by single seller.",
          marks: 8,
        },
        {
          id: "eco_q6_3_2023",
          question: "What is GST? Explain its features and benefits.",
          modelAnswer:
            "### Goods and Services Tax (GST)\n\n**Definition:** A comprehensive indirect tax on supply of goods and services across India.\n\n**Introduction:** July 1, 2017 (101st Constitutional Amendment)\n\n**Structure:**\n- **CGST:** Central GST (goes to Centre)\n- **SGST:** State GST (goes to State)\n- **IGST:** Integrated GST (for inter-state)\n\n**Features:**\n1. **One Nation One Tax:** Uniform tax across India\n2. **Destination Based:** Tax collected where consumed\n3. **Dual Structure:** Centre and State both levy\n4. **Multiple Rates:** 0%, 5%, 12%, 18%, 28%\n5. **Input Tax Credit:** Tax paid can be set off\n6. **Digital:** Online registration and filing\n\n**Benefits:**\n1. Eliminated cascading effect\n2. Unified national market\n3. Reduced tax evasion\n4. Simplified tax structure (replaced 17 taxes)\n5. Lower logistics costs\n6. Increased compliance\n7. Transparency in taxation\n\n**Challenges:**\n- Multiple rate slabs\n- Compliance burden for small businesses\n- Technology issues initially\n\n**Conclusion:** GST is a landmark tax reform creating unified indirect tax system in India.",
          marks: 8,
        },
      ],
    },
  ],
};

// Mock Test based on 2022 Pattern - Fresh questions covering all chapters
const MOCK_PAPER_2022 = {
  title: "Economics - Mock Test (2022 Pattern)",
  totalMarks: 80,
  duration: 180,

  sections: [
    {
      id: "q1a_2022",
      type: "mcq_combo",
      title: "Q.1(A) Choose the correct option",
      marks: 5,
      instructions: "Choose the correct option (combination type)",
      questions: [
        {
          id: "eco_q1a1_2022",
          question:
            "The scope of Macro Economics includes:\n(a) National Income\n(b) General price level\n(c) Individual firm's output\n(d) Aggregate demand",
          options: [
            "(a), (b), (d)",
            "(a), (c), (d)",
            "(b), (c), (d)",
            "All of these",
          ],
          correct: 0,
          marks: 1,
        },
        {
          id: "eco_q1a2_2022",
          question:
            "Exceptions to the Law of Demand:\n(a) Giffen goods\n(b) Veblen goods (prestige goods)\n(c) Necessary goods\n(d) Expectation of future price rise",
          options: [
            "(a), (b), (d)",
            "(a), (c), (d)",
            "(b), (c), (d)",
            "(a), (b), (c)",
          ],
          correct: 0,
          marks: 1,
        },
        {
          id: "eco_q1a3_2022",
          question:
            "Correct statements about Index Numbers:\n(a) Index numbers are specialized averages.\n(b) Index numbers measure relative changes in economic variables.\n(c) Base year value of index number is always 100.\n(d) Index numbers measure absolute changes only.",
          options: [
            "(a), (b), (c)",
            "(a), (b), (d)",
            "(b), (c), (d)",
            "All of these",
          ],
          correct: 0,
          marks: 1,
        },
        {
          id: "eco_q1a4_2022",
          question:
            "Components of GST:\n(a) CGST\n(b) SGST\n(c) IGST\n(d) Wealth Tax",
          options: [
            "(a), (b), (c)",
            "(a), (b), (d)",
            "(b), (c), (d)",
            "All of these",
          ],
          correct: 0,
          marks: 1,
        },
        {
          id: "eco_q1a5_2022",
          question:
            "Methods of measuring National Income:\n(a) Output Method (Value Added)\n(b) Income Method\n(c) Expenditure Method\n(d) Population Method",
          options: [
            "(a), (b), (d)",
            "(a), (b), (c)",
            "(b), (c), (d)",
            "All of these",
          ],
          correct: 1,
          marks: 1,
        },
      ],
    },
    {
      id: "q1b_2022",
      type: "correlation",
      title: "Q.1(B) Complete the Correlation",
      marks: 5,
      instructions: "Complete the correlation",
      questions: [
        {
          id: "eco_q1b1_2022",
          correlation:
            "Micro Economics : Worm's eye view :: Macro Economics : ___",
          answer: "Bird's eye view",
          marks: 1,
        },
        {
          id: "eco_q1b2_2022",
          correlation:
            "Perfect Competition : Homogeneous products :: Monopolistic Competition : ___",
          answer: "Differentiated products",
          marks: 1,
        },
        {
          id: "eco_q1b3_2022",
          correlation: "Direct Tax : Progressive :: Indirect Tax : ___",
          answer: "Regressive",
          marks: 1,
        },
        {
          id: "eco_q1b4_2022",
          correlation: "Demand : Inverse relation with price :: Supply : ___",
          answer: "Direct relation with price",
          marks: 1,
        },
        {
          id: "eco_q1b5_2022",
          correlation:
            "Money Market : Short-term funds :: Capital Market : ___",
          answer: "Long-term funds",
          marks: 1,
        },
      ],
    },
    {
      id: "q1c_2022",
      type: "odd_one",
      title: "Q.1(C) Find the Odd Word Out",
      marks: 5,
      instructions: "Find the odd word from the given set",
      questions: [
        {
          id: "eco_q1c1_2022",
          set: ["Treasury Bills", "Commercial Paper", "Shares", "Call Money"],
          answer: "Shares",
          reason:
            "Shares are traded in Capital Market. Others are Money Market instruments.",
          marks: 1,
        },
        {
          id: "eco_q1c2_2022",
          set: ["Wages", "Rent", "Scholarship", "Interest"],
          answer: "Scholarship",
          reason:
            "Scholarship is a transfer income, not a factor income. Others are factor incomes.",
          marks: 1,
        },
        {
          id: "eco_q1c3_2022",
          set: ["Oligopoly", "Monopoly", "Duopoly", "Elasticity"],
          answer: "Elasticity",
          reason:
            "Elasticity is a demand concept. Others are types of market structures.",
          marks: 1,
        },
        {
          id: "eco_q1c4_2022",
          set: [
            "Revenue expenditure",
            "Capital expenditure",
            "Plan expenditure",
            "Income elasticity",
          ],
          answer: "Income elasticity",
          reason:
            "Income elasticity is a demand concept. Others are types of public expenditure.",
          marks: 1,
        },
        {
          id: "eco_q1c5_2022",
          set: [
            "Import trade",
            "Export trade",
            "Entrepot trade",
            "Retail trade",
          ],
          answer: "Retail trade",
          reason:
            "Retail trade is internal/domestic trade. Others are types of foreign trade.",
          marks: 1,
        },
      ],
    },
    {
      id: "q1d_2022",
      type: "mcq_combo",
      title: "Q.1(D) Complete the following statements",
      marks: 5,
      instructions: "Choose the correct option to complete each statement",
      questions: [
        {
          id: "eco_q1d1_2022",
          question:
            "When Marginal Utility becomes zero, Total Utility is _____.",
          options: ["Maximum", "Minimum", "Negative", "Increasing"],
          correct: 0,
          marks: 1,
        },
        {
          id: "eco_q1d2_2022",
          question: "Supply curve slopes _____.",
          options: [
            "Downward from left to right",
            "Upward from left to right",
            "Parallel to X-axis",
            "Parallel to Y-axis",
          ],
          correct: 1,
          marks: 1,
        },
        {
          id: "eco_q1d3_2022",
          question:
            "A market with few sellers and many buyers is called _____.",
          options: [
            "Monopoly",
            "Monopolistic Competition",
            "Oligopoly",
            "Perfect Competition",
          ],
          correct: 2,
          marks: 1,
        },
        {
          id: "eco_q1d4_2022",
          question: "In India, the financial year is from _____.",
          options: [
            "1st January to 31st December",
            "1st April to 31st March",
            "1st July to 30th June",
            "1st March to 28th February",
          ],
          correct: 1,
          marks: 1,
        },
        {
          id: "eco_q1d5_2022",
          question: "The Central Bank of India is _____.",
          options: [
            "State Bank of India",
            "Bank of India",
            "Reserve Bank of India",
            "Central Bank of India",
          ],
          correct: 2,
          marks: 1,
        },
      ],
    },
    {
      id: "q2a_2022",
      type: "identify_explain",
      title: "Q.2(A) Identify and Explain the Concepts",
      marks: 6,
      instructions:
        "Identify and explain the concept (Any 3 out of 5, 2 marks each)",
      required: 3,
      questions: [
        {
          id: "eco_q2a1_2022",
          statement:
            "Ramesh buys an umbrella during the monsoon season for ₹500.",
          concept: "Time Utility",
          modelAnswer:
            "**Time Utility**\n\n• When the utility of a commodity is derived with a change in its time of utilization, it is called time utility.\n• An umbrella is most useful during the rainy season, so buying it during the monsoon gives maximum utility.\n• The satisfaction from the same umbrella would be less during summer.",
          marks: 2,
        },
        {
          id: "eco_q2a2_2022",
          statement:
            "Due to a 30% rise in the price of tea, consumers shifted to coffee whose demand increased by 25%.",
          concept: "Cross Elasticity of Demand",
          modelAnswer:
            "**Cross Elasticity of Demand**\n\n• Cross elasticity measures the responsiveness of demand for one good to a change in price of another good.\n• Formula: Ec = %ΔQx / %ΔPy\n• Tea and coffee are substitute goods — when the price of tea rises, demand for coffee increases.\n• Cross elasticity is positive for substitutes.",
          marks: 2,
        },
        {
          id: "eco_q2a3_2022",
          statement:
            "Arun's factory produces 10 units of pens at a total cost of ₹1,000. When he produced the 11th unit, total cost rose to ₹1,080.",
          concept: "Marginal Cost",
          modelAnswer:
            "**Marginal Cost**\n\n• Marginal Cost is the addition to total cost when one more unit is produced.\n• Formula: MC = TCn − TCn-1\n• Here MC = 1080 − 1000 = ₹80\n• The cost of producing the 11th pen is ₹80.",
          marks: 2,
        },
        {
          id: "eco_q2a4_2022",
          statement:
            "Meena, a retired teacher, receives ₹20,000 per month from the government without doing any work.",
          concept: "Transfer Income",
          modelAnswer:
            "**Transfer Income**\n\n• Transfer income is income received without rendering any productive service in return.\n• Examples: Pension, unemployment allowance, gifts, scholarships.\n• Transfer income is NOT included in the estimation of National Income.\n• It is a one-sided payment (unilateral transfer).",
          marks: 2,
        },
        {
          id: "eco_q2a5_2022",
          statement:
            "Indian Railways is the only provider of railway transport services in India.",
          concept: "Monopoly",
          modelAnswer:
            "**Monopoly**\n\n• A monopoly is a market structure where there is a single seller who controls the entire market supply.\n• Indian Railways has no competitor in rail services — it is the sole provider.\n• No close substitutes exist for rail transport in many areas.\n• The monopolist is a price maker, not a price taker.",
          marks: 2,
        },
      ],
    },
    {
      id: "q2b_2022",
      type: "distinguish",
      title: "Q.2(B) Distinguish Between",
      marks: 6,
      instructions: "Distinguish between (Any 3 out of 5, 2 marks each)",
      required: 3,
      questions: [
        {
          id: "eco_q2b1_2022",
          concepts: "Micro Economics and Macro Economics",
          modelAnswer:
            "| Point | Micro Economics | Macro Economics |\n|-------|----------------|------------------|\n| Meaning | Study of individual economic units | Study of the economy as a whole |\n| Method | Slicing method | Lumping method |\n| Also called | Price Theory | Income Theory |\n| Equilibrium | Partial equilibrium | General equilibrium |\n| Examples | Individual demand, firm pricing | National Income, general price level |",
          marks: 2,
        },
        {
          id: "eco_q2b2_2022",
          concepts: "Extension of Demand and Increase in Demand",
          modelAnswer:
            "| Point | Extension of Demand | Increase in Demand |\n|-------|---------------------|--------------------|\n| Cause | Due to fall in price of the commodity | Due to change in other factors (income, taste) |\n| Price | Price changes | Price remains constant |\n| Movement | Along the same demand curve (downward) | Shift of the demand curve (rightward) |\n| Other name | Expansion of demand | Rise in demand |",
          marks: 2,
        },
        {
          id: "eco_q2b3_2022",
          concepts: "Money Market and Capital Market",
          modelAnswer:
            "| Point | Money Market | Capital Market |\n|-------|-------------|----------------|\n| Duration | Short-term funds (up to 1 year) | Long-term funds (more than 1 year) |\n| Instruments | Treasury Bills, Commercial Paper, Call Money | Shares, Debentures, Bonds |\n| Risk | Low risk | Higher risk |\n| Liquidity | Highly liquid | Less liquid |\n| Regulator | RBI | SEBI |",
          marks: 2,
        },
        {
          id: "eco_q2b4_2022",
          concepts: "Revenue Expenditure and Capital Expenditure",
          modelAnswer:
            "| Point | Revenue Expenditure | Capital Expenditure |\n|-------|---------------------|---------------------|\n| Nature | Recurring expenditure | Non-recurring expenditure |\n| Assets | Does not create assets | Creates assets or reduces liabilities |\n| Examples | Salaries, pensions, interest payments | Construction of roads, bridges, buildings |\n| Purpose | Day-to-day functioning | Long-term development |",
          marks: 2,
        },
        {
          id: "eco_q2b5_2022",
          concepts: "Simple Index Number and Weighted Index Number",
          modelAnswer:
            "| Point | Simple Index Number | Weighted Index Number |\n|-------|---------------------|----------------------|\n| Importance | Equal importance to all commodities | Different weights (importance) assigned to each commodity |\n| Method | Simple average used | Weighted average used |\n| Accuracy | Less accurate | More accurate |\n| Types | Simple aggregative, Simple average of price relatives | Laspeyre's, Paasche's, Fisher's Ideal Index |",
          marks: 2,
        },
      ],
    },
    {
      id: "q3_2022",
      type: "short_answer",
      title: "Q.3 Answer the Following",
      marks: 12,
      instructions: "Answer the following (Any 3 out of 5, 4 marks each)",
      required: 3,
      questions: [
        {
          id: "eco_q3_1_2022",
          question: "Explain any four features of Macro Economics.",
          modelAnswer:
            "**Features of Macro Economics:**\n\n1) **Study of Aggregates:** Macro economics studies the economy as a whole — National Income, aggregate demand, aggregate supply, general price level, etc.\n\n2) **Income Theory:** It deals with the determination of income and employment in the economy. Hence it is also called Income Theory.\n\n3) **General Equilibrium:** Macro economics takes into account the interdependence of various economic variables and analyses the general equilibrium of the entire economy.\n\n4) **Lumping Method:** It studies the whole economy rather than its individual parts. For example, aggregate demand instead of individual demand.\n\n5) **Policy-Oriented:** Macro economics helps in framing economic policies like fiscal policy, monetary policy, trade policy, etc.",
          marks: 4,
        },
        {
          id: "eco_q3_2_2022",
          question: "Explain any four determinants of supply.",
          modelAnswer:
            "**Determinants of Supply:**\n\n1) **Price of the commodity:** Supply is directly related to price. When price rises, supply rises and vice versa (Law of Supply).\n\n2) **Cost of production:** If cost of production increases, supply decreases. If raw materials, wages, or rent increase, producers supply less.\n\n3) **Technology:** Improved technology reduces cost of production and increases supply. Modern machinery helps produce more efficiently.\n\n4) **Government policy:** Tax increases reduce supply, subsidies increase supply. Favorable policies encourage production.\n\n5) **Price of related goods:** If the price of a substitute good rises, producers shift to that good, reducing supply of the original good.",
          marks: 4,
        },
        {
          id: "eco_q3_3_2022",
          question: "Explain any four features of Perfect Competition.",
          modelAnswer:
            "**Features of Perfect Competition:**\n\n1) **Large number of buyers and sellers:** No single buyer or seller can influence the market price. Each has a negligible share.\n\n2) **Homogeneous products:** All firms sell identical products. There is no product differentiation. Goods are perfect substitutes.\n\n3) **Free entry and exit:** Firms can freely enter or leave the industry without any barriers or restrictions.\n\n4) **Perfect knowledge:** Buyers and sellers have complete information about market conditions, prices, and product quality.\n\n5) **Firm is a price taker:** Individual firm cannot set its own price. It must accept the market price. AR = MR = Price.",
          marks: 4,
        },
        {
          id: "eco_q3_4_2022",
          question:
            "Explain any four difficulties in the measurement of National Income.",
          modelAnswer:
            "**Difficulties in Measurement of National Income:**\n\n1) **Non-Monetized Sector:** In developing countries like India, a large portion of output is for self-consumption and never enters the market. This is hard to estimate.\n\n2) **Lack of reliable data:** Statistical data is often incomplete, unreliable, or outdated, making accurate estimation difficult.\n\n3) **Double counting:** There is a risk of counting the same product more than once at different stages of production. Only final goods must be included.\n\n4) **Transfer payments:** Difficulty in separating transfer income (pension, gifts) from factor income (wages, rent). Transfer payments are excluded from NI.\n\n5) **Black Money/Parallel Economy:** Income from illegal activities is not reported and hence not included in National Income estimates.",
          marks: 4,
        },
        {
          id: "eco_q3_5_2022",
          question:
            "Explain any four functions of the Reserve Bank of India (RBI).",
          modelAnswer:
            "**Functions of RBI:**\n\n1) **Issue of Currency:** RBI has the sole authority to issue currency notes (except one-rupee coins/notes issued by Ministry of Finance). Hence it is called the 'Bank of Issue'.\n\n2) **Banker to the Government:** RBI acts as the banker, agent, and advisor to the Central and State governments. It manages government accounts and public debt.\n\n3) **Banker's Bank:** All commercial banks must maintain a certain percentage of deposits as CRR with the RBI. RBI is the lender of last resort.\n\n4) **Controller of Credit:** RBI controls the volume of credit in the economy through quantitative (Bank Rate, CRR, SLR, OMO) and qualitative (Margin requirements, moral suasion) methods.\n\n5) **Custodian of Foreign Exchange:** RBI manages the foreign exchange reserves of the country and ensures stability of the exchange rate.",
          marks: 4,
        },
      ],
    },
    {
      id: "q4_2022",
      type: "agree_disagree",
      title: "Q.4 Agree or Disagree",
      marks: 12,
      instructions:
        "State with reasons whether you agree or disagree (Any 3 out of 5, 4 marks each)",
      required: 3,
      questions: [
        {
          id: "eco_q4_1_2022",
          statement: "Micro economics is also known as Income Theory.",
          modelAnswer:
            "**Disagree** ✗\n\n**Reasons:**\na) Micro economics is also known as **Price Theory**, not Income Theory.\nb) Micro economics deals with the determination of prices of goods, services, and factors of production.\nc) It is **Macro economics** that is known as Income Theory because it deals with National Income, employment, and output.\nd) Micro economics was developed by **Alfred Marshall** and focuses on individual units.\ne) Therefore, Micro economics is NOT known as Income Theory.",
          marks: 4,
        },
        {
          id: "eco_q4_2_2022",
          statement:
            "There is a direct relationship between price and quantity supplied.",
          modelAnswer:
            "**Agree** ✓\n\n**Reasons:**\na) The Law of Supply states: 'Other things being constant, higher the price, more the quantity supplied and lower the price, less the quantity supplied.'\nb) When price increases, producers earn higher profits, so they are motivated to supply more.\nc) The supply curve slopes upward from left to right, showing the direct (positive) relationship.\nd) For example, if the price of wheat rises from ₹20/kg to ₹30/kg, farmers will supply more wheat.\ne) Therefore, there IS a direct relationship between price and quantity supplied.",
          marks: 4,
        },
        {
          id: "eco_q4_3_2022",
          statement: "Index numbers can be constructed without a base year.",
          modelAnswer:
            "**Disagree** ✗\n\n**Reasons:**\na) An index number is a statistical device to measure changes in an economic variable over a period of time.\nb) The base year is the reference year against which comparisons are made. Its value is always taken as 100.\nc) Without a base year, there would be no benchmark for comparison, and the index number would be meaningless.\nd) The base year should be a normal year, free from natural calamities and not too distant in the past.\ne) Therefore, Index numbers CANNOT be constructed without a base year.",
          marks: 4,
        },
        {
          id: "eco_q4_4_2022",
          statement: "A monopolist can charge any price he wishes.",
          modelAnswer:
            "**Disagree** ✗\n\n**Reasons:**\na) Although a monopolist is a price maker and has complete control over the market supply, he cannot charge any arbitrary price.\nb) The monopolist is constrained by the demand curve — if the price is too high, demand will fall significantly.\nc) He can either fix the price or the output, but not both simultaneously.\nd) If he sets an extremely high price, consumers may look for alternatives or reduce consumption.\ne) Therefore, even a monopolist is limited by market demand and cannot charge any price he wishes.",
          marks: 4,
        },
        {
          id: "eco_q4_5_2022",
          statement: "Public expenditure in India is continuously increasing.",
          modelAnswer:
            "**Agree** ✓\n\n**Reasons:**\na) The activities of the modern government are expanding — education, health, defence, infrastructure, social welfare — all require increasing expenditure.\nb) India's population is growing rapidly (121 crore in 2011 Census), requiring more spending on public services.\nc) Growing urbanization requires expenditure on roads, water supply, transport, sanitation, etc.\nd) Rising prices (inflation) mean the government has to spend more for the same goods and services.\ne) Defence expenditure is increasing due to security threats and modernization needs.\nf) Therefore, public expenditure in India IS continuously increasing.",
          marks: 4,
        },
      ],
    },
    {
      id: "q5_2022",
      type: "table_analysis",
      title: "Q.5 Study the Table/Figure/Passage",
      marks: 8,
      instructions:
        "Study the following and answer (Any 2 out of 3, 4 marks each)",
      required: 2,
      questions: [
        {
          id: "eco_q5_1_2022",
          question:
            "Study the following schedule and answer the questions:\n\n| Units of Commodity X | Total Utility (TU) |\n|----------------------|--------------------|\n| 1 | 20 |\n| 2 | 36 |\n| 3 | 48 |\n| 4 | 56 |\n| 5 | 56 |\n| 6 | 50 |\n\n(1) Calculate Marginal Utility (MU) for each unit.\n(2) At which unit does the consumer reach the point of satiety?\n(3) At which unit does MU become negative?\n(4) Which law is illustrated by this schedule?",
          modelAnswer:
            "**Solution:**\n\n**(1) MU Calculation (MU = TUn − TUn-1):**\n| Units | TU | MU |\n|-------|-----|-----|\n| 1 | 20 | 20 |\n| 2 | 36 | 16 |\n| 3 | 48 | 12 |\n| 4 | 56 | 8 |\n| 5 | 56 | 0 |\n| 6 | 50 | -6 |\n\n**(2)** Consumer reaches the point of satiety at the **5th unit** (where TU is maximum = 56 and MU = 0).\n\n**(3)** MU becomes negative at the **6th unit** (MU = -6, TU starts falling).\n\n**(4)** This illustrates the **Law of Diminishing Marginal Utility (DMU)** — as consumption increases, MU keeps diminishing, becomes zero, and then negative.",
          marks: 4,
        },
        {
          id: "eco_q5_2_2022",
          question:
            "Study the following demand and supply schedule and answer:\n\n| Price (₹) | Demand (units) | Supply (units) |\n|-----------|---------------|----------------|\n| 10 | 100 | 20 |\n| 20 | 80 | 40 |\n| 30 | 60 | 60 |\n| 40 | 40 | 80 |\n| 50 | 20 | 100 |\n\n(1) At what price is equilibrium achieved?\n(2) What are the equilibrium price and quantity?\n(3) At price ₹10, is there excess demand or excess supply? By how much?\n(4) At price ₹50, is there excess demand or excess supply? By how much?",
          modelAnswer:
            "**Solution:**\n\n**(1)** Equilibrium is achieved at **₹30** where demand = supply.\n\n**(2)** Equilibrium Price = **₹30**, Equilibrium Quantity = **60 units**.\n\n**(3)** At price ₹10: Demand = 100, Supply = 20.\nExcess Demand = 100 − 20 = **80 units** (shortage in the market).\n\n**(4)** At price ₹50: Demand = 20, Supply = 100.\nExcess Supply = 100 − 20 = **80 units** (surplus in the market).",
          marks: 4,
        },
        {
          id: "eco_q5_3_2022",
          question:
            "Read the following passage and answer:\n\nShri Krupa Industries, based in Nashik, noticed a rise in demand for organic food products. The company borrowed ₹10 lakhs from a nationalized bank and started producing organic wheat flour. They also purchased new machinery to improve production quality. The company faced competition from Green Valley Foods, which also sold organic products. As the demand for organic flour increased, the demand for organic jaggery (used with flour for making rotis) also increased in the region.\n\n(1) Identify the type of demand for organic wheat flour and organic jaggery respectively. Explain each.\n(2) What type of market structure exists in the organic food market as described in the passage? Give reasons.",
          modelAnswer:
            "**Solution:**\n\n**(1) Types of Demand:**\n\n**(a) Organic Wheat Flour → Direct Demand (Autonomous Demand)**\n• Direct demand is the demand for a commodity that is wanted for its direct consumption.\n• Organic wheat flour is directly consumed by consumers.\n\n**(b) Organic Jaggery → Joint/Complementary Demand**\n• When demand for one commodity rises and causes the demand for another related commodity to also rise, it is called joint demand or complementary demand.\n• Jaggery is used along with flour, so when flour demand increased, jaggery demand also increased.\n\n**(2) Market Structure: Monopolistic Competition**\n• There are multiple sellers (Shri Krupa Industries and Green Valley Foods).\n• Products are similar but differentiated (both sell organic products but different brands).\n• Free entry into the market (Shri Krupa entered with bank loan).\n• This indicates a monopolistic competition market structure.",
          marks: 4,
        },
      ],
    },
    {
      id: "q6_2022",
      type: "long_answer",
      title: "Q.6 Answer in Detail",
      marks: 16,
      instructions: "Answer in detail (Any 2 out of 3, 8 marks each)",
      required: 2,
      questions: [
        {
          id: "eco_q6_1_2022",
          question:
            "State and explain the Law of Diminishing Marginal Utility with a schedule, diagram description, and exceptions.",
          modelAnswer:
            "### Law of Diminishing Marginal Utility\n\n**Proposed by:** Prof. H.H. Gossen (Gossen's First Law)\n**Explained in detail by:** Prof. Alfred Marshall in 'Principles of Economics' (1890)\n\n**Statement:** According to Prof. Marshall, 'Other things remaining constant, the additional benefit which a person derives from a given increase in his stock of a thing, diminishes with every increase in the stock that he already has.'\n\nIn simple words: The more of a thing you have, the less you want to have more of it.\n\n**Schedule:**\n| Units of Commodity X | Marginal Utility (MU) |\n|----------------------|----------------------|\n| 1 | 10 |\n| 2 | 8 |\n| 3 | 6 |\n| 4 | 4 |\n| 5 | 2 |\n| 6 | 0 (Satiety Point) |\n| 7 | -2 (Disutility) |\n\n**Diagram Description:**\n- X-axis: Units of commodity, Y-axis: Marginal Utility\n- MU curve slopes downward from left to right\n- MU becomes zero at the 6th unit (crosses X-axis) — this is the Point of Satiety\n- Beyond the 6th unit, MU becomes negative (disutility)\n\n**Exceptions:**\n\n1) **Hobbies:** Collecting stamps, coins, paintings — each additional item gives more pleasure. (Violates homogeneity assumption)\n\n2) **Miser:** For a miser, every additional rupee gives more satisfaction. (Violates rationality assumption)\n\n3) **Addictions:** In the case of alcohol, intoxication increases with each drink — MU may appear to increase. (Violates rationality assumption)\n\n4) **Power:** When a person acquires power, his desire for more power increases. (Violates rationality assumption)\n\n5) **Money:** The MU of money never becomes zero. As money increases, wants that can be satisfied also increase. (However, some economists say MU of money is more for poor than rich)\n\n**Conclusion:** The Law of DMU is a fundamental law of economics. The exceptions exist because they violate the basic assumptions of the law.",
          marks: 8,
        },
        {
          id: "eco_q6_2_2022",
          question: "Explain the concept of National Income and its features.",
          modelAnswer:
            "### National Income — Concept and Features\n\n**Concept:**\nThe modern economy is a money economy. The total income of the nation expressed in monetary terms is called National Income.\n\nIn real terms, National Income is the flow of goods and services produced in an economy during a year.\n\nAccording to National Income Committee (NIC): 'A national estimate measures the volume of commodities and services turned out during a given period counted without duplication.'\n\n**Features of National Income:**\n\n1) **Macro Economic Concept:**\nNational income represents the income of the economy as a whole rather than that of an individual. It is an aggregate concept.\n\n2) **Value of only final goods and services:**\nTo avoid double-counting, only the value of final goods is considered. The value of intermediate goods/raw materials is NOT included. E.g., while calculating shirt production, the value of cotton is already in the shirt price.\n\n3) **Net Aggregate Value:**\nNational income includes the NET value of goods and services. Depreciation (wear and tear of capital assets) is deducted from the gross value.\n\n4) **Net Income from Abroad:**\nNational income includes net factor income from abroad (NFIA) = (X − M) and the net difference between receipts from abroad and payments made abroad (R − P).\n\n5) **Financial Year:**\nNational income is always expressed with reference to a specific time period. In India, the financial year runs from 1st April to 31st March.\n\n6) **Flow Concept:**\nNational income is a flow concept — it shows the flow of goods and services produced in the economy during a year, not a stock at a point of time.\n\n7) **Money Value:**\nNational income is always expressed in monetary terms. Only those goods and services that are exchanged for money are included. Non-monetary transactions (barter, self-consumption) are excluded.\n\n**Methods of Measurement:**\n1. Output/Value Added Method\n2. Income/Factor Cost Method\n3. Expenditure Method\n\n**Conclusion:** National Income is a comprehensive measure of a nation's economic performance and is essential for policy-making and economic planning.",
          marks: 8,
        },
        {
          id: "eco_q6_3_2022",
          question:
            "Explain the various reasons for the growth of public expenditure in India.",
          modelAnswer:
            "### Reasons for Growth of Public Expenditure in India\n\n**Introduction:** Public expenditure refers to the expenditure incurred by the government (Central, State, and Local) for the welfare and development of the economy. There is a continuous growth in public expenditure in a developing country like India.\n\n**Reasons:**\n\n1) **Increase in Government Activities:**\nModern governments perform many functions — education, public health, public works, social welfare schemes, infrastructure development. New functions are continuously being undertaken, increasing expenditure.\n\n2) **Rapid Increase in Population:**\nIndia's population is growing fast (121.02 crore as per 2011 Census). The government must spend more on food, housing, healthcare, education, and other needs.\n\n3) **Growing Urbanization:**\nUrbanization leads to increased government spending on water supply, roads, electricity, schools, public transport, sanitation, and urban infrastructure.\n\n4) **Increasing Defence Expenditure:**\nDue to security threats and unstable international relations, defence expenditure keeps increasing even in peacetime. Modernization of armed forces requires huge funds.\n\n5) **Spread of Democracy:**\nDemocratic governments are expensive due to regular elections, parliamentary sessions, and maintaining democratic institutions. This increases total government spending.\n\n6) **Inflation:**\nRising prices mean the government must pay more for the same goods and services. Salaries, pensions, and dearness allowances must be revised upward.\n\n7) **Industrial Development:**\nThe government implements various schemes for industrial growth, employment generation, and economic development. Setting up industrial estates, providing subsidies, and building infrastructure increases expenditure.\n\n8) **Disaster Management:**\nNatural calamities (earthquakes, floods, cyclones) and man-made disasters require huge emergency spending for relief, rehabilitation, and reconstruction.\n\n**Conclusion:** Modern governments work towards creating a 'welfare state.' Hence, there is a continuous and inevitable increase in public expenditure, as envisioned by Adolph Wagner's Law of Increasing State Activities.",
          marks: 8,
        },
      ],
    },
  ],
};

// July 2022 Economics Board Paper
const MOCK_PAPER_2022_JULY = {
  title: "Economics - July 2022",
  totalMarks: 80,
  duration: 180,

  sections: [
    {
      id: "q1a_2022j",
      type: "correlation",
      title: "Q.1(A) Complete the Correlations",
      marks: 5,
      instructions: "Complete the correlations",
      questions: [
        {
          id: "eco_q1a1_2022j",
          correlation:
            "Macro Economics : Income and Employment :: Micro Economics : ___",
          answer: "Price Theory",
          marks: 1,
        },
        {
          id: "eco_q1a2_2022j",
          correlation:
            "Direct demand : Food and Mobiles :: Indirect Demand : ___",
          answer: "Land and Labour",
          marks: 1,
        },
        {
          id: "eco_q1a3_2022j",
          correlation:
            "Perfectly elastic demand : Ed = ∞ :: Unitary elastic demand : ___",
          answer: "Ed = 1",
          marks: 1,
        },
        {
          id: "eco_q1a4_2022j",
          correlation: "Output method : Product method :: Income Method : ___",
          answer: "Factor cost method",
          marks: 1,
        },
        {
          id: "eco_q1a5_2022j",
          correlation:
            "Personal income tax : Direct Tax :: Goods and Service Tax (GST) : ___",
          answer: "Indirect Tax",
          marks: 1,
        },
      ],
    },
    {
      id: "q1b_2022j",
      type: "economic_term",
      title: "Q.1(B) Give Economic Terms",
      marks: 5,
      instructions: "Give economic terms for the following",
      questions: [
        {
          id: "eco_q1b1_2022j",
          statement:
            "Additional utility derived by a consumer from an additional unit consumed.",
          answer: "Marginal Utility",
          marks: 1,
        },
        {
          id: "eco_q1b2_2022j",
          statement:
            "Price being constant, demand falls due to unfavorable changes in other factors.",
          answer: "Decrease in demand",
          marks: 1,
        },
        {
          id: "eco_q1b3_2022j",
          statement: "Revenue per unit of output sold.",
          answer: "Average Revenue (AR)",
          marks: 1,
        },
        {
          id: "eco_q1b4_2022j",
          statement: "Period in which all factors of production are variable.",
          answer: "Long run period",
          marks: 1,
        },
        {
          id: "eco_q1b5_2022j",
          statement:
            "The gross market value of all final goods and services produced within the domestic territory of a country during a period of a year.",
          answer: "Gross Domestic Product at Market Price (GDP at MP)",
          marks: 1,
        },
      ],
    },
    {
      id: "q1c_2022j",
      type: "mcq_combo",
      title: "Q.1(C) Complete the following statements",
      marks: 5,
      instructions: "Choose the correct option to complete each statement",
      questions: [
        {
          id: "eco_q1c1_2022j",
          question: "Whole Economy is studied in ______.",
          options: [
            "Micro Economics",
            "Macro Economics",
            "Econometrics",
            "Natural Sciences",
          ],
          correct: 1,
          marks: 1,
        },
        {
          id: "eco_q1c2_2022j",
          question:
            "When percentage change in quantity demanded is less than percentage change in price, the demand curve is _______.",
          options: [
            "Flatter",
            "Steeper",
            "Rectangular hyperbola",
            "Horizontal",
          ],
          correct: 1,
          marks: 1,
        },
        {
          id: "eco_q1c3_2022j",
          question: "The cost incurred by the firm to promote sales _____.",
          options: [
            "Total cost",
            "Average cost",
            "Marginal cost",
            "Selling cost",
          ],
          correct: 3,
          marks: 1,
        },
        {
          id: "eco_q1c4_2022j",
          question:
            "Budget that consists of revenue receipts and revenue expenditure ______.",
          options: [
            "Capital budget",
            "Government budget",
            "Revenue budget",
            "Family budget",
          ],
          correct: 2,
          marks: 1,
        },
        {
          id: "eco_q1c5_2022j",
          question:
            "Purchase of goods and services from one country and selling them to another country is _______.",
          options: [
            "Entrepot trade",
            "Import trade",
            "Export trade",
            "National trade",
          ],
          correct: 0,
          marks: 1,
        },
      ],
    },
    {
      id: "q1d_2022j",
      type: "mcq_combo",
      title: "Q.1(D) Assertion and Reasoning",
      marks: 5,
      instructions:
        "Read the Assertion (A) and Reasoning (R) and choose the correct option",
      questions: [
        {
          id: "eco_q1d1_2022j",
          question:
            "Assertion (A): Marginal utility (MU) goes on diminishing.\nReasoning (R): Total utility (TU) increases at diminishing rate.",
          options: [
            "(A) is true but (R) is false",
            "(A) is false but (R) is true",
            "Both A and R are true; R is the correct explanation of A",
            "Both A and R are true; R is NOT the correct explanation of A",
          ],
          correct: 2,
          marks: 1,
        },
        {
          id: "eco_q1d2_2022j",
          question:
            "Assertion (A): With rising price, supply of a commodity falls.\nReasoning (R): Seller earns more profit at higher price.",
          options: [
            "(A) is true but (R) is false",
            "(A) is false but (R) is true",
            "Both A and R are true; R is the correct explanation of A",
            "Both A and R are true; R is NOT the correct explanation of A",
          ],
          correct: 1,
          marks: 1,
        },
        {
          id: "eco_q1d3_2022j",
          question:
            "Assertion (A): Index number considers all factors.\nReasoning (R): Index number is based on samples.",
          options: [
            "(A) is true but (R) is false",
            "(A) is false but (R) is true",
            "Both A and R are true; R is the correct explanation of A",
            "Both A and R are true; R is NOT the correct explanation of A",
          ],
          correct: 1,
          marks: 1,
        },
        {
          id: "eco_q1d4_2022j",
          question:
            "Assertion (A): Money market economises use of cash.\nReasoning (R): Money market does not deal with financial instruments that are close substitutes of money.",
          options: [
            "(A) is true but (R) is false",
            "(A) is false but (R) is true",
            "Both A and R are true; R is the correct explanation of A",
            "Both A and R are true; R is NOT the correct explanation of A",
          ],
          correct: 0,
          marks: 1,
        },
        {
          id: "eco_q1d5_2022j",
          question:
            "Assertion (A): International trade leads to division of labour and specialisation.\nReasoning (R): India's national trade is not increasing.",
          options: [
            "(A) is true but (R) is false",
            "(A) is false but (R) is true",
            "Both A and R are true; R is the correct explanation of A",
            "Both A and R are true; R is NOT the correct explanation of A",
          ],
          correct: 0,
          marks: 1,
        },
      ],
    },
    {
      id: "q2a_2022j",
      type: "identify_explain",
      title: "Q.2(A) Identify and Explain the Concepts",
      marks: 6,
      instructions:
        "Identify and explain the concept (Any 3 out of 5, 2 marks each)",
      required: 3,
      questions: [
        {
          id: "eco_q2a1_2022j",
          statement:
            "Asha collected information about the income of a particular firm.",
          concept: "Micro Economics",
          modelAnswer:
            "**Micro Economics**\n\n• Microeconomics refers to the study of small individual units of the economy.\n• It uses the slicing method to split the whole economy into small individual units.\n• Study of a particular firm's income is a micro-level study.\n• Also known as Price Theory; Father: Alfred Marshall.",
          marks: 2,
        },
        {
          id: "eco_q2a2_2022j",
          statement:
            "Ramesh's demand for salt remained unchanged inspite of a 10% rise in its price.",
          concept: "Perfectly Inelastic Demand",
          modelAnswer:
            "**Perfectly Inelastic Demand (Ed = 0)**\n\n• It is a situation where there is no change in quantity demanded even if there is a change in the price.\n• The demand curve is a vertical straight line parallel to Y-axis.\n• Example: Salt, life-saving medicines — essential goods whose demand doesn't change with price.\n• Ed = 0 (zero elasticity).",
          marks: 2,
        },
        {
          id: "eco_q2a3_2022j",
          statement:
            "Out of 4000 kgs of rice, the farmer offered to sell 1000 kgs of rice in the market at Rs 40 per kg.",
          concept: "Supply",
          modelAnswer:
            "**Supply**\n\n• Supply refers to the quantity of a commodity that a seller is willing and able to offer for sale at a given price during a given period of time.\n• Out of 4000 kg stock, only 1000 kg is offered for sale — this is supply.\n• Supply is always less than or equal to stock.\n• Supply is a flow concept (measured over a period of time).",
          marks: 2,
        },
        {
          id: "eco_q2a4_2022j",
          statement:
            "Shobha collected data regarding the money value of all final goods and services produced in the country for the financial year 2019-20.",
          concept: "National Income",
          modelAnswer:
            "**National Income**\n\n• National income is the total monetary value of all final goods and services produced by normal residents of a country during a financial year.\n• It is a macro economic concept.\n• Only final goods are included to avoid double counting.\n• In India, financial year is from 1st April to 31st March.",
          marks: 2,
        },
        {
          id: "eco_q2a5_2022j",
          statement:
            "Lucy deposited a lumpsum amount in the Bank of India for the period of one year.",
          concept: "Fixed Deposit",
          modelAnswer:
            "**Fixed Deposit**\n\n• Fixed deposits are deposits held for a fixed/predetermined period of time.\n• These deposits cannot be withdrawn before the maturity period without penalty.\n• They carry a higher rate of interest than savings accounts.\n• Also known as Term Deposits. They are a source of funds for commercial banks.",
          marks: 2,
        },
      ],
    },
    {
      id: "q2b_2022j",
      type: "distinguish",
      title: "Q.2(B) Distinguish Between",
      marks: 6,
      instructions: "Distinguish between (Any 3 out of 5, 2 marks each)",
      required: 3,
      questions: [
        {
          id: "eco_q2b1_2022j",
          concepts: "Slicing method and Lumping method",
          modelAnswer:
            "| Point | Slicing Method | Lumping Method |\n|-------|---------------|----------------|\n| Meaning | Divides the economy into small individual units and studies each separately | Studies the whole economy rather than its parts |\n| Used in | Micro Economics | Macro Economics |\n| Focus | Individual firm, consumer, price | National Income, general price level, employment |\n| Example | Study of individual demand | Study of aggregate demand |",
          marks: 2,
        },
        {
          id: "eco_q2b2_2022j",
          concepts: "Joint/Complementary Demand and Competitive Demand",
          modelAnswer:
            "| Point | Joint/Complementary Demand | Competitive Demand |\n|-------|---------------------------|--------------------|\n| Meaning | Two or more goods demanded jointly to satisfy a single want | Demand for goods which are substitutes for each other |\n| Relationship | Complementary goods | Substitute goods |\n| Examples | Car and fuel, Pen and refill, Tea and sugar | Tea or Coffee, Sugar or Jaggery, Pepsi or Coke |\n| Price effect | Rise in price of one reduces demand for both | Rise in price of one increases demand for the other |",
          marks: 2,
        },
        {
          id: "eco_q2b3_2022j",
          concepts: "Total Revenue and Marginal Revenue",
          modelAnswer:
            "| Point | Total Revenue (TR) | Marginal Revenue (MR) |\n|-------|-------------------|----------------------|\n| Meaning | Total sales proceeds of a firm from selling a commodity at a given price | Net addition to total revenue by selling one extra unit |\n| Formula | TR = Price × Quantity | MRn = TRn − TRn-1 |\n| Relationship | Sum of all MR values | Derived from TR |\n| When TR is max | MR = 0 | MR can be positive, zero, or negative |",
          marks: 2,
        },
        {
          id: "eco_q2b4_2022j",
          concepts: "Price Index Number and Quantity Index Number",
          modelAnswer:
            "| Point | Price Index Number | Quantity Index Number |\n|-------|-------------------|----------------------|\n| Meaning | Measures general changes in the prices of goods | Measures changes in the level of output/physical volume of production |\n| Formula | P₀₁ = (ΣP₁ / ΣP₀) × 100 | Q₀₁ = (Σq₁ / Σq₀) × 100 |\n| Examples | Consumer Price Index (CPI), Wholesale Price Index (WPI) | Changes in agricultural production, industrial production |\n| Purpose | Measures inflation/deflation | Measures production growth |",
          marks: 2,
        },
        {
          id: "eco_q2b5_2022j",
          concepts: "Internal Debt and External Debt",
          modelAnswer:
            "| Point | Internal Debt | External Debt |\n|-------|--------------|---------------|\n| Meaning | Government borrows from citizens, banks, central bank within the country | Government borrows from foreign governments, foreign banks, international organizations |\n| Currency | Use of domestic currency | Use of foreign currency |\n| Complexity | Less complex for management | More complex for management |\n| Examples | Borrowing from RBI, SBI, LIC | Borrowing from IMF, World Bank, foreign governments |",
          marks: 2,
        },
      ],
    },
    {
      id: "q3_2022j",
      type: "short_answer",
      title: "Q.3 Answer the Following",
      marks: 12,
      instructions: "Answer the following (Any 3 out of 5, 4 marks each)",
      required: 3,
      questions: [
        {
          id: "eco_q3_1_2022j",
          question: "Explain the scope of Macro Economics.",
          modelAnswer:
            "**Scope of Macro Economics:**\n\n'Macroeconomics deals with the functioning of the economy as a whole.'\n\n1) **Theory of Income and Employment:**\nMacro analysis explains which factors determine the level of national income and employment, and what causes fluctuations. Includes consumption function, investment function, and the theory of business cycles.\n\n2) **Theory of General Price Level and Inflation:**\nShows how the general price level is determined and what causes fluctuations. Study of inflation and deflation and their effects on the economy.\n\n3) **Theory of Growth and Development:**\nExplains causes of underdevelopment and poverty. Suggests strategies for accelerating economic growth and development.\n\n4) **Macro Theory of Distribution:**\nDeals with the relative shares of rent, wages, interest, and profit in the total national income.",
          marks: 4,
        },
        {
          id: "eco_q3_2_2022j",
          question: "Explain any four features of Monopoly.",
          modelAnswer:
            "**Features of Monopoly:**\n(Greek: 'Mono' = single, 'poly' = seller)\n\n1) **Single seller:** Only one producer/seller in the market. No competition. Number of buyers is large.\n\n2) **No close substitute:** Buyers have no choice — buy from the monopolist or go without. Cross elasticity is zero or negative.\n\n3) **Barriers to entry:** Entry restricted due to legal, natural, and technological barriers.\n\n4) **Price maker:** Monopolist can fix his own price as he controls entire market supply.\n\n5) **Price discrimination:** Can charge different prices to different consumers (e.g., railway concessions for students/seniors).\n\n6) **No distinction between firm and industry:** The monopoly firm itself is the industry.",
          marks: 4,
        },
        {
          id: "eco_q3_3_2022j",
          question: "Elaborate any four features of Utility.",
          modelAnswer:
            "**Features of Utility:**\nUtility is the capacity of a commodity to satisfy human wants.\n\n1) **Relative concept:** Utility varies from time to time and place to place. E.g., woollen clothes have greater utility in winter; sand has more utility at a construction site than at the seashore.\n\n2) **Subjective concept:** Utility differs from person to person due to differences in taste, preferences, habits, profession, etc. E.g., a stethoscope has utility to a doctor but not to a layman.\n\n3) **Ethically neutral concept:** Utility has no ethical consideration — it is morally colorless. A knife has utility to cut fruits AND can be used to harm. Both wants are satisfied.\n\n4) **Utility differs from usefulness:** Milk has both utility and usefulness. Liquor has utility to an addict but no usefulness.\n\n5) **Utility differs from pleasure:** An injection has utility (cures illness) but gives no pleasure to the patient.",
          marks: 4,
        },
        {
          id: "eco_q3_4_2022j",
          question:
            "Write any four practical difficulties in National Income estimation.",
          modelAnswer:
            "**Practical Difficulties in National Income Estimation:**\n\n1) **Problem of double counting:** Difficulty in distinguishing between final and intermediate products. E.g., flour used by bakery is intermediate, by household is final.\n\n2) **Existence of non-monetized sector:** In rural India, much output is for self-consumption or bartered — not exchanged for money. Excluded from NI calculation.\n\n3) **Inadequate and unreliable data:** Data on crops, fisheries, forestry, small enterprises, unearned incomes is often incomplete or unavailable in developing countries.\n\n4) **Depreciation:** No uniform or accepted standard rates of depreciation for capital assets. Makes correct deductions difficult.\n\n5) **Capital gains or losses:** Changes in market value of assets are NOT included in NI as they don't result from current economic activity.",
          marks: 4,
        },
        {
          id: "eco_q3_5_2022j",
          question:
            "Explain the Ratio (Percentage) method of measuring Price Elasticity of Demand.",
          modelAnswer:
            "**Ratio / Percentage Method (by Prof. Marshall):**\n\nElasticity is measured by dividing % change in quantity demanded by % change in price.\n\n**Formula:**\nEd = (%ΔQd) / (%ΔP)\nEd = (ΔQ/Q) × (P/ΔP)\n\nWhere:\n- ΔQ = Change in quantity demanded\n- ΔP = Change in price\n- Q = Original quantity, P = Original price\n\n**Numerical Example:**\n| Price (₹) | Qty Demanded (kg) |\n|-----------|-------------------|\n| 20 | 10 |\n| 25 | 9 |\n\nΔP = 5, ΔQ = 1, P = 20, Q = 10\n\nEd = (1/10) × (20/5) = 0.4\n\nSince Ed < 1, demand is **Relatively Inelastic**.\n\nAlso known as Arithmetic method.",
          marks: 4,
        },
      ],
    },
    {
      id: "q4_2022j",
      type: "agree_disagree",
      title: "Q.4 Agree or Disagree",
      marks: 12,
      instructions:
        "State with reasons whether you agree or disagree (Any 3 out of 5, 4 marks each)",
      required: 3,
      questions: [
        {
          id: "eco_q4_1_2022j",
          statement:
            "There are no exceptions to the law of diminishing marginal utility.",
          modelAnswer:
            "**Disagree** ✗\n\n**Reasons:**\na) There ARE exceptions to the law of diminishing marginal utility.\nb) This law fails in cases like: earning money, acquiring knowledge, consumption of liquor and cigarettes, hobbies (jewellery collection, stamp collection, old coins, antiques), listening to good music, reading good poems, etc.\nc) In such cases, the greater the consumption, greater is the utility derived.\nd) However, economists argue these exceptions violate the basic assumptions of the law (rationality, homogeneity, continuity).\ne) Therefore, the statement is incorrect — exceptions DO exist.",
          marks: 4,
        },
        {
          id: "eco_q4_2_2022j",
          statement: "Supply curve of labour is backward bending.",
          modelAnswer:
            "**Agree** ✓\n\n**Reasons:**\na) Labour supply is the total number of hours workers work at a given wage rate.\nb) Initially, as wage rate rises, supply of labour increases — supply curve slopes upward.\nc) But after a certain point, further rise in wages causes supply of labour to FALL — the curve bends backward.\nd) This is because workers prefer leisure to work after receiving sufficiently high wages.\ne) Thus, the supply curve of labour is backward bending — it first slopes upward and then bends backward at higher wages.",
          marks: 4,
        },
        {
          id: "eco_q4_3_2022j",
          statement:
            "Price under perfect competition is decided by the interaction between demand and supply.",
          modelAnswer:
            "**Agree** ✓\n\n**Reasons:**\na) Under perfect competition, price is determined by the equilibrium of demand and supply.\nb) The price is fixed at the point where the demand curve and supply curve intersect each other.\nc) This point is called the Equilibrium Point, and the price determined here is the Equilibrium Price.\nd) No individual buyer or seller can influence this price — all are price takers.\ne) If price is above equilibrium, excess supply brings it down; if below, excess demand pushes it up.",
          marks: 4,
        },
        {
          id: "eco_q4_4_2022j",
          statement: "Capital market plays an important role in India.",
          modelAnswer:
            "**Agree** ✓\n\n**Reasons:**\na) **Mobilizes long-term savings:** Capital market helps mobilize long-term savings from various sections through sale of securities (shares, bonds, debentures).\nb) **Provides equity capital:** Provides share capital to entrepreneurs for purchasing assets and funding business operations.\nc) **Operational efficiency:** Lowers transaction costs, simplifies procedures, reduces settlement timings in stock trading.\nd) **Quick valuation:** Helps determine fair and quick value of both equity (shares) and debt (bonds, debentures) instruments.\ne) **Integration:** Leads to integration among real and financial sectors, equity and debt instruments, government and private sector, domestic and external funds.",
          marks: 4,
        },
        {
          id: "eco_q4_5_2022j",
          statement: "Balance of Payment is same as Balance of Trade.",
          modelAnswer:
            "**Disagree** ✗\n\n**Reasons:**\na) **Balance of Payments (BOP):** A systematic record of ALL international economic transactions of a country during a year — includes visible trade, invisible trade, capital transfers, etc.\nb) **Balance of Trade (BOT):** Only the difference between the value of a country's exports and imports of physical/visible goods.\nc) BOP is a wider concept that includes BOT within it.\nd) BOT covers only merchandise (goods), while BOP covers goods, services, capital transfers, and unilateral transfers.\ne) Therefore, Balance of Payment is NOT the same as Balance of Trade — BOP is much broader.",
          marks: 4,
        },
      ],
    },
    {
      id: "q5_2022j",
      type: "table_analysis",
      title: "Q.5 Study the Table/Figure/Passage",
      marks: 8,
      instructions:
        "Study the following and answer (Any 2 out of 3, 4 marks each)",
      required: 2,
      questions: [
        {
          id: "eco_q5_1_2022j",
          question:
            "Calculate GDP and NDP from the following data:\n\n| Components | Crores (₹) |\n|------------|------------|\n| Consumption (C) | 800 |\n| Investment (I) | 700 |\n| Government Expenditure (G) | 400 |\n| Net Export (X−M) | −150 |\n| Depreciation (D) | 100 |\n\n(1) Calculate GDP (Gross Domestic Product) (2 marks)\n(2) Calculate NDP (Net Domestic Product) (2 marks)",
          modelAnswer:
            "**Solution:**\n\n**(1) GDP Calculation:**\nGDP = C + I + G + (X − M)\n= 800 + 700 + 400 + (−150)\n= 1900 − 150\n= **₹1750 Crores**\n\n**(2) NDP Calculation:**\nNDP = GDP − Depreciation\n= 1750 − 100\n= **₹1650 Crores**",
          marks: 4,
        },
        {
          id: "eco_q5_2_2022j",
          question:
            "Identify the type of price elasticity of demand from the following descriptions:\n\n(1) Demand curve is a vertical straight line parallel to Y-axis. Ed = ?\n(2) Demand curve is a horizontal straight line parallel to X-axis. Ed = ?\n(3) Demand curve is steeper (percentage change in Qd < percentage change in P). Ed = ?\n(4) Demand curve is a rectangular hyperbola. Ed = ?",
          modelAnswer:
            "**Solution:**\n\n**(1)** Vertical demand curve (parallel to Y-axis)\n→ **Perfectly Inelastic Demand (Ed = 0)**\nQuantity demanded does not change at all despite price change.\n\n**(2)** Horizontal demand curve (parallel to X-axis)\n→ **Perfectly Elastic Demand (Ed = ∞)**\nAny amount demanded at the given price; slight change causes demand to drop to zero.\n\n**(3)** Steeper demand curve (%ΔQd < %ΔP)\n→ **Relatively Inelastic Demand (Ed < 1)**\nDemand changes less proportionately than price. E.g., necessities like salt, medicines.\n\n**(4)** Rectangular hyperbola\n→ **Unitary Elastic Demand (Ed = 1)**\nPercentage change in quantity demanded equals percentage change in price.",
          marks: 4,
        },
        {
          id: "eco_q5_3_2022j",
          question:
            "Read the following passage and answer:\n\nCommercial banks act as intermediaries in the country's financial system to bring savers and investors together. They are profit-seeking financial institutions. Due to bank nationalization in 1969, there was an increase in loan disbursement in urban and rural areas. Agriculture and retail traders started getting more loans. Those sectors which were not getting loans before 1969, started getting loans in post nationalization period. After the nationalization, bank branch expansion took place. There has been diversification in the functions of banks. Commercial Banks are providing different types of services like safe deposit lockers, D-mat facilities, internet banking, mobile banking, etc.\n\n(1) Write any two benefits of Bank nationalization. (1 mark)\n(2) Write various services provided by banks. (1 mark)\n(3) Write your opinion about the above passage. (2 marks)",
          modelAnswer:
            "**Solution:**\n\n**(1) Two benefits of Bank nationalization:**\ni) Increase in loan disbursement in urban and rural areas.\nii) Agriculture and retail traders started getting more loans. Sectors previously deprived of loans gained access.\n\n**(2) Various services provided by banks:**\nSafe deposit lockers, D-mat facilities, Internet banking, Mobile banking, NEFT/RTGS transfers, credit/debit cards, etc.\n\n**(3) Opinion:**\nCommercial banks play a crucial role as intermediaries in the financial system, linking depositors (savers) with investors (borrowers). Bank nationalization in 1969 was a landmark reform that democratized banking services — previously neglected sectors like agriculture and small traders gained access to credit. The diversification into digital services (internet banking, mobile banking, D-mat) has further enhanced accessibility and convenience for customers across India.",
          marks: 4,
        },
      ],
    },
    {
      id: "q6_2022j",
      type: "long_answer",
      title: "Q.6 Answer in Detail",
      marks: 16,
      instructions: "Answer in detail (Any 2 out of 3, 8 marks each)",
      required: 2,
      questions: [
        {
          id: "eco_q6_1_2022j",
          question:
            "Explain the concepts of variation and changes in demand with the help of diagrams.",
          modelAnswer:
            "### Variation and Changes in Demand\n\n## A) VARIATION IN DEMAND (Movement along the curve)\nWhen demand changes due to change in PRICE ALONE (other factors constant).\n\n**1) Expansion of Demand:**\n- Rise in quantity demanded due to FALL in price.\n- Other factors (income, taste, population) remain unchanged.\n- Downward movement along the same demand curve (from point a to point b).\n- **Diagram:** Same DD curve, movement from a higher price point downward.\n\n**2) Contraction of Demand:**\n- Fall in quantity demanded due to RISE in price.\n- Other factors remain unchanged.\n- Upward movement along the same demand curve.\n- **Diagram:** Same DD curve, movement from a lower price point upward.\n\n## B) CHANGES IN DEMAND (Shift of the curve)\nWhen demand changes due to changes in OTHER FACTORS (price remains constant).\n\n**1) Increase in Demand:**\n- Increase in quantity demanded due to favorable changes in other factors (income ↑, taste changes, population ↑).\n- Price remains constant.\n- Demand curve shifts RIGHTWARD (from DD to D₁D₁).\n- **Diagram:** Original DD shifts right to D₁D₁.\n\n**2) Decrease in Demand:**\n- Decrease in quantity demanded due to unfavorable changes in other factors.\n- Price remains constant.\n- Demand curve shifts LEFTWARD (from DD to D₂D₂).\n- **Diagram:** Original DD shifts left to D₂D₂.\n\n**Key Difference:**\n- Variation = Movement ALONG the curve (due to price change)\n- Change = SHIFT of the curve (due to other factors)\n\n**Conclusion:** Understanding variations and changes in demand is essential for producers, policymakers, and businesses to forecast demand and make informed decisions.",
          marks: 8,
        },
        {
          id: "eco_q6_2_2022j",
          question:
            "Explain the meaning of Index Number. Explain various steps involved in the construction of Index Numbers.",
          modelAnswer:
            "### Index Numbers — Meaning and Steps of Construction\n\n**Meaning:**\nAn index number is a statistical device to measure changes in an economic variable (or group of variables) over a period of time.\n\nAccording to Spiegel: 'An index number is a statistical measure designed to show changes in a variable or group of related variables with reference to time, geographical location, and other characteristics.'\n\n**Steps in Construction of Index Numbers:**\n\n**1) Purpose of Index Number:**\nClearly decide the purpose, scope, and which variable is to be measured. Different purposes require different methods.\n\n**2) Selection of Base Year:**\nThe reference year against which comparisons are made. Base year should be:\n- Normal (free from natural calamities)\n- Not too distant in the past\n- Base year value is always taken as 100\n\n**3) Selection of Items:**\nSelect a representative sample of commodities. Items should:\n- Represent tastes, habits, and customs of people\n- Be standardized or graded for better results\n- Not be too many or too few\n\n**4) Selection of Price Quotations:**\nPrices may vary from place to place and shop to shop. Price quotations should be obtained from unbiased, reliable reporting agencies. Proper selection of representative places and persons is essential.\n\n**5) Choice of a Suitable Average:**\nConstruction requires a suitable average. Generally, Arithmetic Mean is used because it is simple to compute compared to other averages.\n\n**6) Assigning Proper Weights:**\nWeights represent relative importance of items. Types:\n- Quantity weights (q)\n- Value weights (p × q)\nSince all items are NOT equally important, proper weights give better results.\n\n**7) Selection of Appropriate Formula:**\nVarious formulae exist: Simple Aggregative, Laspeyre's, Paasche's, Fisher's Ideal Index. Choice depends on purpose and data availability.\n\n**Conclusion:** Index numbers are indispensable tools for economic analysis, policy-making, measuring inflation, and comparing economic variables across time periods.",
          marks: 8,
        },
        {
          id: "eco_q6_3_2022j",
          question: "Explain various sources of public revenue.",
          modelAnswer:
            "### Sources of Public Revenue\n\n**Definition:** Public revenue means the aggregate collection of income by the government through various sources. It is essential to finance public expenditure.\n\n## A) TAX REVENUE\n\nA tax is a compulsory contribution from citizens to the government without reference to special benefits conferred.\n\n**1) Direct Tax:**\n- Paid directly by the taxpayer on income and property.\n- Burden cannot be shifted to others.\n- Impact and incidence fall on the same person.\n- Examples: Personal Income Tax, Wealth Tax, Corporate Tax.\n- Nature: Progressive (rate increases with income).\n\n**2) Indirect Tax:**\n- Levied on goods and services.\n- Paid at the time of production, sale, or purchase.\n- Burden CAN be shifted from producer to consumer.\n- Impact and incidence on different persons.\n- Example: GST (replaced almost all indirect taxes in India).\n- Nature: Regressive.\n\n## B) NON-TAX REVENUE\n\n**1) Fees:** Payment for specific government services. E.g., education fees, registration fees.\n\n**2) Prices of Public Goods & Services:** Payment for goods/services sold by government. E.g., railway fares, postal charges.\n\n**3) Special Assessment:** Payment by citizens of a particular area for special facilities like extra roads, water supply, energy.\n\n**4) Fines and Penalties:** Imposed for violating laws. Objective: discourage law-breaking, not earn income. E.g., traffic fines.\n\n**5) Gifts, Grants, and Donations:** From citizens, foreign governments, international institutions. Foreign aid is an important source for developing countries like India.\n\n**6) Special Levies:** Levied on harmful commodities. Objective: discourage consumption. E.g., duties on wine, opium, intoxicants.\n\n**7) Borrowings:** Government borrows from people (bonds, deposits), foreign governments, IMF, World Bank. Increasingly popular source of revenue.\n\n**Conclusion:** Public revenue from both tax and non-tax sources is crucial for financing government expenditure and promoting economic development.",
          marks: 8,
        },
      ],
    },
  ],
};

// 2023 HSC Economics Board Paper
const MOCK_PAPER_2023_BOARD = {
  title: "Economics - HSC 2023",
  totalMarks: 80,
  duration: 180,

  sections: [
    {
      id: "q1a_2023b",
      type: "mcq_combo",
      title: "Q.1(A) Complete the following sentences",
      marks: 5,
      instructions: "Choose the correct option to complete each sentence",
      questions: [
        {
          id: "eco_q1a1_2023b",
          question: "Micro Economics is also called as ______.",
          options: [
            "Income theory",
            "Price theory",
            "Growth theory",
            "Employment theory",
          ],
          correct: 1,
          marks: 1,
        },
        {
          id: "eco_q1a2_2023b",
          question: "Money market faces shortage of funds due to ________.",
          options: [
            "Inadequate savings",
            "Growing demand for cash",
            "Unorganised sector",
            "Financial mismanagement",
          ],
          correct: 0,
          marks: 1,
        },
        {
          id: "eco_q1a3_2023b",
          question:
            "Marginal utility of the commodity becomes negative when Total Utility of a commodity is ________.",
          options: ["Rising", "Constant", "Falling", "Zero"],
          correct: 2,
          marks: 1,
        },
        {
          id: "eco_q1a4_2023b",
          question: "Public expenditure of any government shows _______.",
          options: [
            "Constant trend",
            "Increasing trend",
            "Decreasing trend",
            "Fluctuating demand",
          ],
          correct: 1,
          marks: 1,
        },
        {
          id: "eco_q1a5_2023b",
          question:
            "The relationship between income and demand for inferior goods is ________.",
          options: [
            "Direct",
            "Inverse",
            "No effect",
            "Can be direct and inverse",
          ],
          correct: 1,
          marks: 1,
        },
      ],
    },
    {
      id: "q1b_2023b",
      type: "odd_one",
      title: "Q.1(B) Find the Odd Word Out",
      marks: 5,
      instructions: "Find the odd word from the given set",
      questions: [
        {
          id: "eco_q1b1_2023b",
          set: [
            "Total Revenue",
            "Average Revenue",
            "Total Cost",
            "Marginal Revenue",
          ],
          answer: "Total Cost",
          reason: "Total Cost is a cost concept. Others are revenue concepts.",
          marks: 1,
        },
        {
          id: "eco_q1b2_2023b",
          set: [
            "Bank rate",
            "Open market operations",
            "Foreign Exchange rate",
            "Variable reserve ratio",
          ],
          answer: "Foreign Exchange rate",
          reason:
            "Foreign Exchange rate is not a quantitative tool of credit control. Others are quantitative tools of RBI.",
          marks: 1,
        },
        {
          id: "eco_q1b3_2023b",
          set: [
            "Theory of product pricing",
            "Theory of factor pricing",
            "Theory of Economic growth and Development",
            "Theory of Economic Welfare",
          ],
          answer: "Theory of Economic growth and Development",
          reason:
            "Theory of Economic growth and Development falls under Macro Economics. Others are within the scope of Micro Economics.",
          marks: 1,
        },
        {
          id: "eco_q1b4_2023b",
          set: ["Fees", "Penalty", "Wealth", "Special levy"],
          answer: "Wealth",
          reason:
            "Wealth is not a source of non-tax revenue. Others (Fees, Penalty, Special levy) are non-tax revenue sources.",
          marks: 1,
        },
        {
          id: "eco_q1b5_2023b",
          set: [
            "Laspeyre's Price Index Number",
            "Price Index Number",
            "Quantity Index Number",
            "Value Index Number",
          ],
          answer: "Laspeyre's Price Index Number",
          reason:
            "Laspeyre's is a type of Weighted Index Number. Others (Price, Quantity, Value) are types of Simple Index Numbers.",
          marks: 1,
        },
      ],
    },
    {
      id: "q1c_2023b",
      type: "economic_term",
      title: "Q.1(C) Give Economic Term",
      marks: 5,
      instructions: "Give economic terms for the following",
      questions: [
        {
          id: "eco_q1c1_2023b",
          statement:
            "The volume of commodities and services turned out during a given period counted without duplication.",
          answer: "National Income",
          marks: 1,
        },
        {
          id: "eco_q1c2_2023b",
          statement:
            "A desire which is backed by willingness to purchase and ability to pay.",
          answer: "Demand",
          marks: 1,
        },
        {
          id: "eco_q1c3_2023b",
          statement:
            "Degree of responsiveness of a change of quantity demanded of a good to a change in its price.",
          answer: "Price Elasticity of Demand",
          marks: 1,
        },
        {
          id: "eco_q1c4_2023b",
          statement: "Very realistic competition in nature.",
          answer: "Monopolistic Competition",
          marks: 1,
        },
        {
          id: "eco_q1c5_2023b",
          statement:
            "Swati purchased a raincoat for her father in rainy season.",
          answer: "Time Utility",
          marks: 1,
        },
      ],
    },
    {
      id: "q1d_2023b",
      type: "mcq_combo",
      title: "Q.1(D) Assertion and Reasoning",
      marks: 5,
      instructions:
        "Read the Assertion (A) and Reasoning (R) and choose the correct option",
      questions: [
        {
          id: "eco_q1d1_2023b",
          question:
            "Assertion (A): In perfect competition, price is determined by the forces of demand and supply.\nReasoning (R): The number of buyers and sellers is so large that one person cannot influence prices.",
          options: [
            "(A) is true but (R) is false",
            "(A) is false but (R) is true",
            "Both (A) and (R) are true; (R) is the correct explanation of (A)",
            "Both (A) and (R) are true; (R) is NOT the correct explanation of (A)",
          ],
          correct: 2,
          marks: 1,
        },
        {
          id: "eco_q1d2_2023b",
          question:
            "Assertion (A): A change in quantity demanded of one commodity due to a change in the price of other commodity is cross elasticity.\nReasoning (R): Changes in consumers' income leads to a change in the quantity demanded.",
          options: [
            "(A) is true but (R) is false",
            "(A) is false but (R) is true",
            "Both (A) and (R) are true; (R) is the correct explanation of (A)",
            "Both (A) and (R) are true; (R) is NOT the correct explanation of (A)",
          ],
          correct: 3,
          marks: 1,
        },
        {
          id: "eco_q1d3_2023b",
          question:
            "Assertion (A): Production for self consumption is not accounted for in the national income.\nReasoning (R): The products kept for self consumption do not enter the market.",
          options: [
            "(A) is true but (R) is false",
            "(A) is false but (R) is true",
            "Both (A) and (R) are true; (R) is the correct explanation of (A)",
            "Both (A) and (R) are true; (R) is NOT the correct explanation of (A)",
          ],
          correct: 2,
          marks: 1,
        },
        {
          id: "eco_q1d4_2023b",
          question:
            "Assertion (A): Foreign exchange management and control is undertaken by commercial banks.\nReasoning (R): RBI has to maintain the official rate of exchange of rupee and ensure its stability.",
          options: [
            "(A) is true but (R) is false",
            "(A) is false but (R) is true",
            "Both (A) and (R) are true; (R) is the correct explanation of (A)",
            "Both (A) and (R) are true; (R) is NOT the correct explanation of (A)",
          ],
          correct: 1,
          marks: 1,
        },
        {
          id: "eco_q1d5_2023b",
          question:
            "Assertion (A): Supply is a relative term.\nReasoning (R): Supply is always expressed in relation to price, time, and quantity.",
          options: [
            "(A) is true but (R) is false",
            "(A) is false but (R) is true",
            "Both (A) and (R) are true; (R) is the correct explanation of (A)",
            "Both (A) and (R) are true; (R) is NOT the correct explanation of (A)",
          ],
          correct: 2,
          marks: 1,
        },
      ],
    },
    {
      id: "q2a_2023b",
      type: "identify_explain",
      title: "Q.2(A) Identify and Explain the Concepts",
      marks: 6,
      instructions:
        "Identify and explain the concept (Any 3 out of 5, 2 marks each)",
      required: 3,
      questions: [
        {
          id: "eco_q2a1_2023b",
          statement:
            "A table seller sold the table for Rs 2,000 per piece. In this way, he sold 15 tables and earned Rs 30,000.",
          concept: "Total Revenue",
          modelAnswer:
            "**Total Revenue (TR)**\n\n• Total Revenue is the total sales proceeds of a firm by selling a commodity at a given price.\n• It is the total income of a firm.\n• Formula: TR = Price × Quantity\n• Here: TR = 2000 × 15 = ₹30,000",
          marks: 2,
        },
        {
          id: "eco_q2a2_2023b",
          statement:
            "England imported cotton from India, made readymade garments from it, and sold them to Malaysia.",
          concept: "Entrepot Trade",
          modelAnswer:
            "**Entrepot Trade (Re-export Trade)**\n\n• The process of importing goods from one country, processing or adding value, and then exporting them to another country is called Entrepot Trade.\n• Here England imports cotton from India (import) → makes garments → exports to Malaysia (export).\n• It is also known as Re-export trade.\n• It is a type of foreign/international trade.",
          marks: 2,
        },
        {
          id: "eco_q2a3_2023b",
          statement: "Ashok paid the tax on his income and property.",
          concept: "Direct Tax",
          modelAnswer:
            "**Direct Tax**\n\n• A direct tax is paid by the taxpayer directly to the government on his income and property.\n• The burden of tax is borne by the person on whom it is levied — it cannot be shifted to others.\n• Impact and incidence fall on the same person.\n• Examples: Personal Income Tax, Wealth Tax, Corporate Tax.\n• Nature: Progressive (rate increases with income).",
          marks: 2,
        },
        {
          id: "eco_q2a4_2023b",
          statement:
            "Raju's father invests his money in a market for long-term funds both equity and debt raised within and outside the country.",
          concept: "Capital Market",
          modelAnswer:
            "**Capital Market**\n\n• A capital market is a market for long-term funds — both equity (shares) and debt (bonds, debentures).\n• Funds are raised within and outside the country.\n• It deals with instruments having maturity of more than one year.\n• Regulated by SEBI (Securities and Exchange Board of India).\n• Includes stock exchanges where shares/securities are traded.",
          marks: 2,
        },
        {
          id: "eco_q2a5_2023b",
          statement: "A poor person wants to buy a car.",
          concept: "Desire (not Demand)",
          modelAnswer:
            "**Desire**\n\n• Desire means an urge to have something. It has no relation to price, place, and time.\n• A poor person wanting a car is only a desire, NOT demand, because he lacks the ability to pay.\n• Demand = Desire + Willingness to pay + Ability to pay.\n• Since the person lacks ability to pay, it remains a mere desire.\n• Only when all three conditions are met does desire become effective demand.",
          marks: 2,
        },
      ],
    },
    {
      id: "q2b_2023b",
      type: "distinguish",
      title: "Q.2(B) Distinguish Between",
      marks: 6,
      instructions: "Distinguish between (Any 3 out of 5, 2 marks each)",
      required: 3,
      questions: [
        {
          id: "eco_q2b1_2023b",
          concepts: "Unitary Elastic Demand and Relatively Elastic Demand",
          modelAnswer:
            "| Point | Unitary Elastic Demand | Relatively Elastic Demand |\n|-------|----------------------|---------------------------|\n| Meaning | % change in price leads to proportionate change in quantity demanded | % change in price leads to more than proportionate change in quantity demanded |\n| Coefficient | Ed = 1 | Ed > 1 |\n| Demand Curve | Rectangular hyperbola | Flatter demand curve |\n| Examples | Theoretical concept | Luxury goods, electronic items, branded products |",
          marks: 2,
        },
        {
          id: "eco_q2b2_2023b",
          concepts:
            "Output Method and Income Method of measuring National Income",
          modelAnswer:
            "| Point | Output Method | Income Method |\n|-------|--------------|---------------|\n| Also known as | Product method / Inventory method | Factor cost method |\n| Approach | Adds the total value of all final goods & services produced during a year at market price OR adds value at each stage | Adds all factor incomes: rent, wages, interest, and profit earned during an accounting year |\n| Suitability | Widely used in underdeveloped countries | Used in developed countries like USA and UK |\n| Focus | Production side | Income/distribution side |",
          marks: 2,
        },
        {
          id: "eco_q2b3_2023b",
          concepts: "Demand Deposit and Time Deposit",
          modelAnswer:
            "| Point | Demand Deposit | Time Deposit |\n|-------|---------------|---------------|\n| Meaning | Deposits withdrawable on demand at any time | Deposits repayable only after a fixed/certain period |\n| Types | Savings Account, Current Account | Fixed Deposit, Recurring Deposit |\n| Interest | Lower rate of interest | Higher rate of interest |\n| Withdrawal | Can be withdrawn anytime | Cannot be withdrawn before maturity without penalty |",
          marks: 2,
        },
        {
          id: "eco_q2b4_2023b",
          concepts: "Simple Index Number and Weighted Index Number",
          modelAnswer:
            "| Point | Simple Index Number | Weighted Index Number |\n|-------|---------------------|------------------------|\n| Importance | Equal importance given to all commodities | Different weights (relative importance) assigned to each commodity |\n| Method | Simple average is used | Weighted average is used |\n| Difficulty | Easiest method of construction | Comparatively complex method |\n| Types | Price Index, Quantity Index, Value Index | Laspeyre's, Paasche's, Fisher's Ideal Index |",
          marks: 2,
        },
        {
          id: "eco_q2b5_2023b",
          concepts: "Stock and Supply",
          modelAnswer:
            "| Point | Stock | Supply |\n|-------|-------|--------|\n| Meaning | Total quantity of commodities available for sale with a seller at a particular point of time | Various quantities of a commodity offered for sale at a given price during a given period |\n| Relation | Stock exceeds supply (except perishable goods where stock = supply) | Supply can equal stock but can never exceed stock |\n| Concept | Point concept (at a given moment) | Period concept (over a period of time) |\n| Measurement | Cannot change immediately | Can change with price changes |",
          marks: 2,
        },
      ],
    },
    {
      id: "q3_2023b",
      type: "short_answer",
      title: "Q.3 Answer the Following",
      marks: 12,
      instructions: "Answer the following (Any 3 out of 5, 4 marks each)",
      required: 3,
      questions: [
        {
          id: "eco_q3_1_2023b",
          question: "Explain any four points of importance of Microeconomics.",
          modelAnswer:
            "**Importance of Microeconomics:**\n(Maurice Dobb: 'Microeconomics is in fact a microscopic study of the economy.')\n\n1) **Price Determination:** Microeconomics explains how prices of different products and various factors of production are determined through demand and supply forces.\n\n2) **Free Market Economy:** Helps in understanding the workings of a free market economy where decisions about 'What to produce? How much? How?' are taken at individual levels without government intervention.\n\n3) **Foreign Trade:** Helps in explaining aspects of foreign trade like effects of tariff on a commodity, determination of currency exchange rates, gains from international trade, etc.\n\n4) **Economic Model Building:** Helps in understanding complex economic situations using economic models. It has developed various terms, concepts, terminologies, and tools of economic analysis.",
          marks: 4,
        },
        {
          id: "eco_q3_2_2023b",
          question:
            "Explain the Ratio or Percentage method of measuring Price Elasticity of Demand.",
          modelAnswer:
            "**Ratio / Percentage Method (by Prof. Marshall):**\n\nElasticity of demand is measured by dividing the percentage change in quantity demanded by the percentage change in price. Also called the Arithmetic method.\n\n**Formula:**\nEd = (%ΔQd) / (%ΔP)\nEd = (ΔQ/Q) × (P/ΔP)\n\nWhere:\n- ΔQ = Change in quantity demanded\n- ΔP = Change in price\n- Q = Original quantity, P = Original price\n\n**Numerical Example:**\n| Price (₹) | Qty Demanded (kg) |\n|-----------|-------------------|\n| 20 | 10 |\n| 25 | 9 |\n\nΔP = 5, ΔQ = 1, P = 20, Q = 10\n\nEd = (1/10) × (20/5) = 0.4\n\nSince Ed < 1 → Demand is **Relatively Inelastic**.",
          marks: 4,
        },
        {
          id: "eco_q3_3_2023b",
          question: "Explain any four features of National Income.",
          modelAnswer:
            "**Features of National Income:**\n\n1) **Macro Economic Concept:** National income represents the income of the economy as a whole, not an individual. Hence, it is a macroeconomic concept.\n\n2) **Value of only final goods and services:** To avoid double-counting, only the value of final goods is considered. Intermediate goods/raw materials are excluded. E.g., while estimating shirt production, cotton value is not separately counted.\n\n3) **Net Aggregate Value:** National income includes NET value of goods & services — depreciation (wear and tear of capital assets) is deducted.\n\n4) **Net Income from Abroad:** Includes net factor income from abroad (NFIA) — the difference between export and import values (X−M) and net receipts from abroad (R−P).\n\n5) **Financial Year:** Always expressed for a time period. In India: 1st April to 31st March.",
          marks: 4,
        },
        {
          id: "eco_q3_4_2023b",
          question:
            "Explain any four problems faced by the Money Market in India.",
          modelAnswer:
            "**Problems of Indian Money Market:**\n\n1) **Dual Structure:** Presence of both organized and unorganized sectors leads to disintegration, lack of transparency, and increased volatility. Unorganized markets don't come under RBI's direct control.\n\n2) **Lack of uniformity in interest rates:** Various entities (commercial banks, co-op banks, NBFCs, development finance institutions) and different categories of borrowers lead to lack of uniform interest rates.\n\n3) **Shortage of funds:** Due to inadequate savings, low per capita income, poor banking habits, wasteful consumption, and inadequate banking facilities in rural areas.\n\n4) **Seasonal fluctuations:** Demand for funds varies by season. Peak season (Oct–June) requires large-scale finance for agricultural trade, business activities — causing wide fluctuations.\n\n5) **Lack of financial inclusion:** Banking facilities are still inadequate and inaccessible to weaker sections and low-income groups.",
          marks: 4,
        },
        {
          id: "eco_q3_5_2023b",
          question:
            "Explain any four exceptions of the Law of Diminishing Marginal Utility.",
          modelAnswer:
            "**Exceptions to the Law of DMU:**\n(Law first proposed by Prof. Gossen; detailed by Prof. Alfred Marshall)\n\n1) **Hobbies:** In hobbies like stamp/coin collection, rare paintings, music, reading — every additional item gives more pleasure, increasing MU. (Violates homogeneity & continuity assumption)\n\n2) **Miser:** For a miser, every additional rupee gives more satisfaction. MU of money tends to increase with stock. (Violates rationality assumption)\n\n3) **Addictions:** For a drunkard, intoxication increases with each drink — MU may appear to increase. (Violates rationality assumption)\n\n4) **Power:** When a person acquires power, his desire for more power increases — MU of power rises. (Violates rationality assumption)\n\n5) **Money:** MU of money never becomes zero. As money increases, more wants can be satisfied. (However, MU of money is more to a poor person than a rich person)",
          marks: 4,
        },
      ],
    },
    {
      id: "q4_2023b",
      type: "agree_disagree",
      title: "Q.4 Agree or Disagree",
      marks: 12,
      instructions:
        "State with reasons whether you agree or disagree (Any 3 out of 5, 4 marks each)",
      required: 3,
      questions: [
        {
          id: "eco_q4_1_2023b",
          statement: "There are no exceptions to the law of supply.",
          modelAnswer:
            "**Disagree** ✗\n\n**Reasons:**\na) There ARE exceptions to the law of supply:\n\nb) **Labour supply:** As wage rate rises, supply of labour increases. But after a certain point, further rise in wages causes labour supply to FALL — workers prefer leisure to work. Supply curve bends backward.\n\nc) **Saving:** Normally, higher interest rate increases saving. But some people wanting fixed regular income may save LESS at higher rates and save MORE at lower rates.\n\nd) **Need for cash:** If a seller urgently needs cash, he will supply a large amount even at a lower price.\n\ne) **Agricultural goods:** Production depends on seasons/climate, not price alone. Supply can't be increased at higher price if monsoon fails.\n\nf) Therefore, there ARE exceptions to the law of supply.",
          marks: 4,
        },
        {
          id: "eco_q4_2_2023b",
          statement:
            "Balance of Trade and Balance of Payment are two different concepts.",
          modelAnswer:
            "**Agree** ✓\n\n**Reasons:**\na) **Balance of Trade (BOT):** A financial statement capturing a nation's import and export of commodities (visible and invisible goods) with the rest of the world.\n\nb) **Balance of Payment (BOP):** A financial statement that keeps track of ALL international economic transactions — goods, services, capital transfers, unilateral transfers.\n\nc) BOP is a broader concept than BOT — BOT is just one part of BOP.\n\nd) BOP includes all transactions among citizens, businessmen, firms, and governments.\n\ne) BOT focuses only on the value of imports vs exports of goods.\n\nf) Therefore, Balance of Payment and Balance of Trade are indeed two different concepts.",
          marks: 4,
        },
        {
          id: "eco_q4_3_2023b",
          statement:
            "Index numbers are very significant/important in economics.",
          modelAnswer:
            "**Agree** ✓\n\n**Reasons:**\na) **Framing suitable policies:** Index numbers provide guidelines for framing economic policies — agricultural policy, industrial policy, fixation of wages and dearness allowances.\n\nb) **Studies trends and tendencies:** Widely used to measure changes in production, prices, exports, imports over time.\n\nc) **Forecasting future economic activity:** Useful for making predictions based on analysis of past and present trends. E.g., import-export data helps predict future trade.\n\nd) **Measurement of inflation:** Used to measure price level changes over time, enabling appropriate anti-inflationary measures by the government.\n\ne) Therefore, index numbers are indeed very significant tools of economic analysis.",
          marks: 4,
        },
        {
          id: "eco_q4_4_2023b",
          statement:
            "There are no theoretical difficulties in the measurement of National Income.",
          modelAnswer:
            "**Disagree** ✗\n\n**Reasons:**\na) **Transfer payments:** Whether pensions, unemployment allowances, etc. should be included in NI is a major problem. They are excluded as they don't involve productive services.\n\nb) **Illegal income:** Income from gambling, black marketing, theft, smuggling is not included in NI, but it exists — distorting accuracy.\n\nc) **Production for self-consumption:** Farmers' self-consumed output doesn't enter the market and is not accounted for in NI.\n\nd) **Income of foreign firms:** According to IMF, income of a foreign firm should be included in the NI of the country where production actually takes place — creating allocation difficulties.\n\ne) Therefore, there ARE many theoretical difficulties in measuring National Income.",
          marks: 4,
        },
        {
          id: "eco_q4_5_2023b",
          statement: "Macroeconomics is different from Microeconomics.",
          modelAnswer:
            "**Agree** ✓\n\n**Reasons:**\na) **Scope:** Macroeconomics studies the entire economy. Microeconomics studies a particular segment/individual unit.\n\nb) **Focus:** Macro studies aggregate demand, aggregate supply, national income, employment. Micro studies individual demand, individual supply, price determination.\n\nc) **Equilibrium:** Macro follows general equilibrium analysis. Micro follows partial equilibrium analysis.\n\nd) **Method:** Macro uses lumping method. Micro uses slicing method.\n\ne) **Also called:** Macro is Income Theory. Micro is Price Theory.\n\nf) Therefore, Macroeconomics IS fundamentally different from Microeconomics.",
          marks: 4,
        },
      ],
    },
    {
      id: "q5_2023b",
      type: "table_analysis",
      title: "Q.5 Study the Table/Figure/Passage",
      marks: 8,
      instructions:
        "Study the following and answer (Any 2 out of 3, 4 marks each)",
      required: 2,
      questions: [
        {
          id: "eco_q5_1_2023b",
          question:
            "Observe the following table and answer the questions:\n\n| Unit of commodity | Total Utility (TU) | Marginal Utility (MU) |\n|-------------------|-------------------|----------------------|\n| 1 | 6 | ? |\n| 2 | ? | 5 |\n| 3 | 15 | 4 |\n| 4 | 15 | ? |\n| 5 | ? | −1 |\n\n(1) Complete the above table. (2 marks)\n(2)(a) When total utility is Maximum, the marginal utility is ___. (1 mark)\n(2)(b) When total utility falls, the marginal utility becomes ___. (1 mark)",
          modelAnswer:
            "**Solution:**\n\n**(1) Completed Table (MU = TUn − TUn-1):**\n| Unit | TU | MU |\n|------|-----|-----|\n| 1 | 6 | **6** |\n| 2 | **11** | 5 |\n| 3 | 15 | 4 |\n| 4 | 15 | **0** |\n| 5 | **14** | −1 |\n\nExplanation:\n- Unit 1: MU = TU of 1st unit = 6\n- Unit 2: TU = TU of Unit 1 + MU = 6 + 5 = 11\n- Unit 4: MU = 15 − 15 = 0\n- Unit 5: TU = 15 + (−1) = 14\n\n**(2)(a)** When TU is Maximum → MU is **Zero** (at Unit 4, TU = 15 is max, MU = 0)\n\n**(2)(b)** When TU falls → MU becomes **Negative** (at Unit 5, TU falls to 14, MU = −1)",
          marks: 4,
        },
        {
          id: "eco_q5_2_2023b",
          question:
            "In a linear demand curve AE, five points are marked from top to bottom: A, B, C, D, E. State whether the following statements are True or False:\n\n(On a linear demand curve, from the topmost point: A = Perfectly Elastic, then Relatively Elastic, then Unitary Elastic at midpoint, then Relatively Inelastic, then E = Perfectly Inelastic at the bottom)\n\n(1) Demand at point 'C' is relatively elastic demand.\n(2) Demand at point 'B' is unitary elastic demand.\n(3) Demand at point 'D' is perfectly inelastic demand.\n(4) Demand at point 'A' is perfectly elastic demand.",
          modelAnswer:
            "**Solution:**\n\nOn a linear demand curve AE (top to bottom):\n- A (topmost) = Perfectly Elastic (Ed = ∞)\n- B (upper segment) = Relatively Elastic (Ed > 1)\n- C (midpoint) = Unitary Elastic (Ed = 1)\n- D (lower segment) = Relatively Inelastic (Ed < 1)\n- E (bottommost) = Perfectly Inelastic (Ed = 0)\n\n**(1) 'Demand at point C is relatively elastic demand'**\n→ **FALSE** — Point C (midpoint) is **Unitary Elastic Demand** (Ed = 1), not relatively elastic.\n\n**(2) 'Demand at point B is unitary elastic demand'**\n→ **FALSE** — Point B (upper segment) is **Relatively Elastic Demand** (Ed > 1), not unitary elastic.\n\n**(3) 'Demand at point D is perfectly inelastic demand'**\n→ **FALSE** — Point D (lower segment) is **Relatively Inelastic Demand** (Ed < 1), not perfectly inelastic.\n\n**(4) 'Demand at point A is perfectly elastic demand'**\n→ **TRUE** — Point A (topmost point) is indeed **Perfectly Elastic Demand** (Ed = ∞).",
          marks: 4,
        },
        {
          id: "eco_q5_3_2023b",
          question:
            "Read the given passage and answer:\n\nIndex Number is a technique of measuring changes in a variable or group of related variables with reference to time, geographical location, and other characteristics.\n\nIndex Number is very useful for economists, farmers, traders, government, educationalists and trade union leaders for planning and implementing the plans according to their sector.\n\nThe scope of index number is not limited to only one subject but it extends to many subjects such as Economics, Educational Science, Psychology, History, Sociology, Geography, etc.\n\nWhile framing index number its objective must be determined. To attain the objective the information is collected in various ways and this information is used for comparing two different time periods. For this purpose, the base year's index is assumed as 100 and accordingly, the value of the current year is calculated.\n\nLaspeyre, Paasche, and Fisher have suggested different methods for constructing index numbers.\n\n(1) Explain the meaning of Index Number. (1 mark)\n(2) To whom is the Index Number useful? (1 mark)\n(3) Express your opinion about the given passage. (2 marks)",
          modelAnswer:
            "**Solution:**\n\n**(1) Meaning of Index Number:**\nIndex Number is a technique of measuring changes in a variable or group of related variables with reference to time, geographical location, and other characteristics. It is a statistical device to measure changes in an economic variable over a period of time.\n\n**(2) Index Number is useful for:**\nEconomists, farmers, traders, government, educationalists, and trade union leaders for planning and implementing the plans according to their respective sectors.\n\n**(3) Opinion:**\nIndex numbers are one of the most widely used statistical tools in economics and beyond. They serve as a barometer of economic activity — measuring price changes (inflation/deflation), production trends, and cost of living. The scope extends far beyond economics into Educational Science, Psychology, History, Sociology, and Geography. The base year concept (assumed as 100) provides a reliable benchmark for comparison. The methods developed by Laspeyre (base year weights), Paasche (current year weights), and Fisher (geometric mean of both — called 'Ideal Index') provide flexible approaches for different analytical needs. Index numbers are indispensable for effective policy-making and economic planning.",
          marks: 4,
        },
      ],
    },
    {
      id: "q6_2023b",
      type: "long_answer",
      title: "Q.6 Answer in Detail",
      marks: 16,
      instructions: "Answer in detail (Any 2 out of 3, 8 marks each)",
      required: 2,
      questions: [
        {
          id: "eco_q6_1_2023b",
          question: "State and explain the Law of Demand with exceptions.",
          modelAnswer:
            "### Law of Demand\n\n**Introduced by:** Prof. Alfred Marshall in 'Principles of Economics' (1890)\n\n**Statement:** 'Other things being equal, higher the price of a commodity, smaller is the quantity demanded and lower the price, larger is the quantity demanded.'\n\nThere is an **inverse relationship** between price and quantity demanded.\n\n**Symbolic expression:** Dx = f(Px)\nWhere D = Demand, x = Commodity, f = Function, Px = Price\n\n**Demand Schedule:**\n| Price (₹) | Quantity Demanded (kg) |\n|-----------|------------------------|\n| 50 | 1 |\n| 40 | 2 |\n| 30 | 3 |\n| 20 | 4 |\n| 10 | 5 |\n\n**Diagram:** Demand curve DD slopes **downward from left to right** (X-axis = Demand, Y-axis = Price), showing inverse relationship.\n\n**Exceptions to the Law of Demand:**\n(Demand curve slopes UPWARD — positive slope)\n\n1) **Giffen's Paradox:** Inferior/low-quality goods whose demand doesn't rise even when price falls. Sir Robert Giffen observed this with bread in England — when bread price fell, people preferred superior goods like meat. Demand decreased despite price fall.\n\n2) **Prestige Goods (Veblen Effect):** Expensive goods like diamonds, gold are status symbols. Rich people buy MORE when prices are high — high price signals prestige.\n\n3) **Speculation:** When people expect prices to rise further, they buy MORE at current high prices. E.g., oil and sugar before Diwali.\n\n4) **Price Illusion:** Consumers believe high-priced goods are better quality. Demand increases with price rise. E.g., branded products.\n\n5) **Ignorance:** Due to ignorance about prices at other places, consumers may buy more at a higher price.\n\n6) **Habitual Goods:** Goods consumed out of habit (e.g., tea) are purchased in required quantities regardless of price.\n\n**Conclusion:** The Law of Demand is a fundamental law of economics showing the inverse price-demand relationship, with certain notable exceptions.",
          marks: 8,
        },
        {
          id: "eco_q6_2_2023b",
          question: "Explain the meaning of Monopoly with its features.",
          modelAnswer:
            "### Monopoly — Meaning and Features\n\n**Meaning:** The term monopoly is derived from Greek: 'Mono' = single, 'poly' = seller. A monopoly is a market in which there is **only one seller** who controls the entire market supply for a product that has **no close substitute**.\n\n**Features of Monopoly:**\n\n**1) Single Seller:**\nNo competition — only one producer/seller of the product. But the number of buyers is large. The firm IS the industry.\n\n**2) No Close Substitute:**\nNo close substitutes exist for the monopolist's product. Buyers must either buy from the monopolist or go without. Cross elasticity of demand is zero or negative.\n\n**3) Barriers to Entry:**\nEntry of rivals is restricted due to legal barriers (patents, licenses), natural barriers (unique resource), and technological barriers (high capital requirement).\n\n**4) Complete Control Over Market Supply:**\nThe monopolist has a complete hold over the market as the sole producer/seller.\n\n**5) Price Maker:**\nA monopolist can fix the price of his own product as he controls the whole market supply. He is a price maker, not a price taker.\n\n**6) Price Discrimination:**\nCan charge different prices to different consumers for the same product based on time, place, income level, etc. E.g., railway concessions for students and senior citizens.\n\n**7) No Distinction Between Firm and Industry:**\nSince the monopolist is the sole seller, the monopoly firm itself is the industry. There is no separate industry.\n\n**Examples:** Indian Railways, local water supply, patented pharmaceutical drugs.\n\n**Conclusion:** Monopoly is an extreme form of market structure where a single seller has absolute market power, though constrained by demand conditions.",
          marks: 8,
        },
        {
          id: "eco_q6_3_2023b",
          question:
            "Explain various reasons for the growth of public expenditure.",
          modelAnswer:
            "### Reasons for Growth of Public Expenditure\n\n**Introduction:** Public expenditure refers to the spending by the government (Central, State, and Local) for welfare and development. In a developing country like India, public expenditure shows a continuous increasing trend.\n\n**Reasons:**\n\n**1) Increase in Government Activities:**\nModern governments perform numerous functions — education, public health, public works, recreation, social welfare schemes. New functions are continuously added and old ones performed more efficiently on a larger scale.\n\n**2) Rapid Increase in Population:**\nIndia's population is growing fast (121.02 crore in 2011 Census). Government must spend more on food, housing, healthcare, education, and infrastructure for the growing population.\n\n**3) Growing Urbanization:**\nUrbanization increases government spending on water supply, roads, energy, schools, colleges, public transport, sanitation, and urban infrastructure.\n\n**4) Increasing Defence Expenditure:**\nDefence spending increases even in peacetime due to unstable and hostile international relationships. Modernization of armed forces requires huge funds.\n\n**5) Spread of Democracy:**\nDemocratic governments are inherently expensive — regular elections, parliamentary sessions, maintaining democratic institutions all increase spending.\n\n**6) Inflation:**\nRising prices mean the government pays more for the same goods and services. Salaries, pensions, dearness allowances must be revised upward.\n\n**7) Industrial Development:**\nGovernment implements schemes for industrial growth, employment generation, and economic development — industrial estates, subsidies, infrastructure — all increase expenditure.\n\n**8) Disaster Management:**\nNatural and man-made calamities (earthquakes, floods, cyclones, social unrest) require huge emergency spending for relief, rehabilitation, and reconstruction.\n\n**Conclusion:** Modern governments work towards creating a 'welfare state.' Hence, there is a continuous and inevitable increase in public expenditure, consistent with Wagner's Law of Increasing State Activities.",
          marks: 8,
        },
      ],
    },
  ],
};

// Available papers
const AVAILABLE_PAPERS = [
  {
    id: "2022mock",
    data: MOCK_PAPER_2022,
    year: "2022",
    month: "Mock Test (2022 Pattern)",
  },
  {
    id: "2022july",
    data: MOCK_PAPER_2022_JULY,
    year: "2022",
    month: "July",
  },
  { id: "2024", data: MOCK_PAPER_2024, year: "2024", month: "February" },
  { id: "2023", data: MOCK_PAPER_2023, year: "2023", month: "March" },
  {
    id: "2023board",
    data: MOCK_PAPER_2023_BOARD,
    year: "2023",
    month: "HSC Board 2023",
  },
];

const EcoMockTest: React.FC<EcoMockTestProps> = ({ onClose }) => {
  const [selectedPaperId, setSelectedPaperId] = useState<string | null>(null);
  const [testState, setTestState] = useState<
    "select" | "intro" | "running" | "submitted"
  >("select");

  const selectedPaper =
    AVAILABLE_PAPERS.find((p) => p.id === selectedPaperId)?.data ||
    MOCK_PAPER_2024;

  const [timeLeft, setTimeLeft] = useState(selectedPaper.duration * 60);
  const [isPaused, setIsPaused] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<string>>(
    new Set(),
  );
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
    const paper = AVAILABLE_PAPERS.find((p) => p.id === paperId)?.data;
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
          <strong>💡 Tip:</strong> Q.7 Numericals are COMPULSORY - practice them
          well!
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
          <p className="text-xl sm:text-2xl font-bold text-green-700 dark:text-green-300">
            3 Hours
          </p>
          <p className="text-xs text-green-600 dark:text-green-400">Duration</p>
        </div>
        <div className="bg-teal-50 dark:bg-teal-900/20 p-3 sm:p-4 rounded-xl">
          <Award className="mx-auto text-teal-500 mb-1 sm:mb-2" size={20} />
          <p className="text-xl sm:text-2xl font-bold text-teal-700 dark:text-teal-300">
            80 Marks
          </p>
          <p className="text-xs text-teal-600 dark:text-teal-400">
            Total Marks
          </p>
        </div>
      </div>

      <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl mb-6 w-full max-w-md">
        <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-2">
          Instructions:
        </h3>
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
          <p className="text-white/80 text-xs sm:text-sm">
            {section.instructions}
          </p>
          <p className="text-white/60 text-xs mt-1">Marks: {section.marks}</p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {/* MCQ Combo Type (a,b,c,d combinations) */}
          {(section.type === "mcq" || section.type === "mcq_combo") &&
            section.questions.map((q: any, idx: number) => (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm"
              >
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
          {section.type === "economic_term" &&
            section.questions.map((q: any, idx: number) => (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm"
              >
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
          {section.type === "odd_one" &&
            section.questions.map((q: any, idx: number) => (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm"
              >
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
          {section.type === "correlation" &&
            section.questions.map((q: any, idx: number) => (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm"
              >
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
          {section.type === "identify_explain" &&
            section.questions.map((q: any, idx: number) => (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm"
              >
                <p className="font-medium text-slate-800 dark:text-white text-sm mb-2">
                  <span className="text-green-500 mr-2">{idx + 1}.</span>
                  {q.statement}
                </p>
                <input
                  type="text"
                  placeholder="Identify the concept..."
                  value={answers[q.id + "_concept"] || ""}
                  onChange={(e) =>
                    handleAnswer(q.id + "_concept", e.target.value)
                  }
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
          {section.type === "distinguish" &&
            section.questions.map((q: any, idx: number) => (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm"
              >
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
          {section.type === "short_answer" &&
            section.questions.map((q: any, idx: number) => (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm"
              >
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
          {section.type === "agree_disagree" &&
            section.questions.map((q: any, idx: number) => (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm"
              >
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
          {section.type === "table_analysis" &&
            section.questions.map((q: any, idx: number) => (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm"
              >
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
          {section.type === "long_answer" &&
            section.questions.map((q: any, idx: number) => (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm"
              >
                <p className="font-medium text-slate-800 dark:text-white text-sm mb-2">
                  <span className="text-green-500 mr-2">{idx + 1}.</span>
                  {q.question}{" "}
                  <span className="text-orange-500">(8 marks)</span>
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
          {section.type === "numerical" &&
            section.questions.map((q: any, idx: number) => (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm"
              >
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
          {section.type === "concept" &&
            section.questions.map((q: any, idx: number) => (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm"
              >
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

          {section.type === "true_false" &&
            section.questions.map((q: any, idx: number) => (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm"
              >
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
            <p className="text-white/80">
              Self-evaluated: {totalSelfMarks} marks
            </p>
          )}
        </div>

        {selectedPaper.sections.map((section) => (
          <div
            key={section.id}
            className="bg-white dark:bg-slate-800 rounded-xl p-4"
          >
            <h3 className="font-bold text-slate-800 dark:text-white mb-3">
              {section.title}
            </h3>

            {section.questions.map((q: any, idx: number) => (
              <div
                key={q.id}
                className="border-t border-slate-100 dark:border-slate-700 pt-3 mt-3"
              >
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                  <strong>Q{idx + 1}:</strong>{" "}
                  {q.question || q.statement || q.concepts}
                </p>

                {section.type === "mcq" && (
                  <div
                    className={`text-sm p-2 rounded ${answers[q.id] === q.correct ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                  >
                    Your answer: {q.options[answers[q.id]] || "Not answered"}
                    <br />
                    Correct: {q.options[q.correct]}
                  </div>
                )}

                {section.type === "true_false" && (
                  <div
                    className={`text-sm p-2 rounded ${answers[q.id] === q.answer ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                  >
                    Your answer:{" "}
                    {answers[q.id] === true
                      ? "TRUE"
                      : answers[q.id] === false
                        ? "FALSE"
                        : "Not answered"}
                    <br />
                    Correct: {q.answer ? "TRUE" : "FALSE"}
                  </div>
                )}

                {(q.modelAnswer || q.answer) &&
                  section.type !== "mcq" &&
                  section.type !== "true_false" && (
                    <div className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg mt-2">
                      <p className="text-xs font-bold text-green-600 dark:text-green-400 mb-1">
                        Model Answer:
                      </p>
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
                {testState === "select"
                  ? "Economics Mock Tests"
                  : selectedPaper.title}
              </h2>
              {testState === "running" && (
                <p className="text-white/80 text-xs">
                  Section {currentSection + 1} of{" "}
                  {selectedPaper.sections.length}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            {testState === "running" && (
              <>
                <div
                  className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-mono font-bold text-sm ${
                    timeLeft < 600
                      ? "bg-red-500 text-white animate-pulse"
                      : "bg-white/20 text-white"
                  }`}
                >
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
                onClick={() =>
                  setCurrentSection(Math.max(0, currentSection - 1))
                }
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
                  onClick={() =>
                    setCurrentSection(
                      Math.min(
                        selectedPaper.sections.length - 1,
                        currentSection + 1,
                      ),
                    )
                  }
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
