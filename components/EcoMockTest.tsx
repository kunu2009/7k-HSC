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
      type: "mcq",
      title: "Q.1(A) Choose the correct alternative",
      marks: 5,
      instructions: "Choose the correct alternative and complete the statements",
      questions: [
        {
          id: "eco_q1a1_2024",
          question: "Father of Modern Economics is ___.",
          options: ["Adam Smith", "Alfred Marshall", "J.M. Keynes", "Robbins"],
          correct: 0,
          marks: 1,
        },
        {
          id: "eco_q1a2_2024",
          question: "When TU is maximum, MU is ___.",
          options: ["Maximum", "Positive", "Zero", "Negative"],
          correct: 2,
          marks: 1,
        },
        {
          id: "eco_q1a3_2024",
          question: "The demand for necessities is generally ___.",
          options: ["Elastic", "Inelastic", "Unitary elastic", "Perfectly elastic"],
          correct: 1,
          marks: 1,
        },
        {
          id: "eco_q1a4_2024",
          question: "GST was introduced in India on ___.",
          options: ["1st April 2017", "1st July 2017", "1st January 2017", "1st April 2016"],
          correct: 1,
          marks: 1,
        },
        {
          id: "eco_q1a5_2024",
          question: "Fisher's Index Number is the ___ of Laspeyre's and Paasche's index.",
          options: ["Sum", "Difference", "Geometric mean", "Arithmetic mean"],
          correct: 2,
          marks: 1,
        },
      ],
    },
    {
      id: "q1b_2024",
      type: "match",
      title: "Q.1(B) Match the pairs",
      marks: 5,
      instructions: "Match Group A with Group B",
      questions: [
        {
          id: "eco_q1b_2024",
          groupA: ["Micro Economics", "Macro Economics", "Utility", "Demand"],
          groupB: ["Income Theory", "Price Theory", "Law of Demand", "Want satisfying power"],
          matches: [1, 0, 3, 2], // Correct matches: Micro-Price Theory, Macro-Income Theory, Utility-Want satisfying, Demand-Law
          marks: 5,
        },
      ],
    },
    {
      id: "q1c_2024",
      type: "concept",
      title: "Q.1(C) State the appropriate concept",
      marks: 5,
      instructions: "State the appropriate economic concept for the given statements",
      questions: [
        {
          id: "eco_q1c1_2024",
          statement: "Addition made to total utility by consumption of one more unit.",
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
      type: "mcq",
      title: "Q.1(A) Choose the correct alternative",
      marks: 5,
      instructions: "Choose the correct alternative and complete the statements",
      questions: [
        {
          id: "eco_q1a1_2023",
          question: "Micro Economics is also called ___.",
          options: ["Income Theory", "Price Theory", "Wealth Theory", "Growth Theory"],
          correct: 1,
          marks: 1,
        },
        {
          id: "eco_q1a2_2023",
          question: "Law of Diminishing Marginal Utility was given by ___.",
          options: ["Marshall", "H.H. Gossen", "Keynes", "Adam Smith"],
          correct: 1,
          marks: 1,
        },
        {
          id: "eco_q1a3_2023",
          question: "When Ed = 1, demand is said to be ___.",
          options: ["Elastic", "Inelastic", "Unitary elastic", "Perfectly elastic"],
          correct: 2,
          marks: 1,
        },
        {
          id: "eco_q1a4_2023",
          question: "In monopoly, AR curve is ___.",
          options: ["Horizontal", "Upward sloping", "Downward sloping", "Vertical"],
          correct: 2,
          marks: 1,
        },
        {
          id: "eco_q1a5_2023",
          question: "GDP at factor cost = GDP at market price - ___.",
          options: ["Subsidies", "Indirect taxes", "Net indirect taxes", "Depreciation"],
          correct: 2,
          marks: 1,
        },
      ],
    },
    {
      id: "q1c_2023",
      type: "concept",
      title: "Q.1(C) State the appropriate concept",
      marks: 5,
      instructions: "State the appropriate economic concept for the given statements",
      questions: [
        {
          id: "eco_q1c1_2023",
          statement: "Study of economy as a whole.",
          answer: "Macro Economics",
          marks: 1,
        },
        {
          id: "eco_q1c2_2023",
          statement: "Maximum satisfaction that a consumer can get from consuming a commodity.",
          answer: "Total Utility (TU)",
          marks: 1,
        },
        {
          id: "eco_q1c3_2023",
          statement: "A market situation with many sellers selling differentiated products.",
          answer: "Monopolistic Competition",
          marks: 1,
        },
        {
          id: "eco_q1c4_2023",
          statement: "National income divided by total population.",
          answer: "Per Capita Income",
          marks: 1,
        },
        {
          id: "eco_q1c5_2023",
          statement: "Tax on goods and services replacing multiple indirect taxes.",
          answer: "Goods and Services Tax (GST)",
          marks: 1,
        },
      ],
    },
    {
      id: "q3_2023",
      type: "distinguish",
      title: "Q.3 Distinguish Between",
      marks: 6,
      instructions: "Distinguish between the following (Any 3 out of 5)",
      required: 3,
      questions: [
        {
          id: "eco_q3_1_2023",
          concepts: "Total Utility and Marginal Utility",
          modelAnswer: "**Total Utility vs Marginal Utility:**\n\n| Aspect | Total Utility (TU) | Marginal Utility (MU) |\n|--------|-------------------|----------------------|\n| **Meaning** | Sum of utilities from all units | Additional utility from one more unit |\n| **Formula** | TU = ΣMU | MU = TUn - TUn-1 |\n| **Curve** | Inverted U-shaped | Downward sloping |\n| **Maximum Point** | When MU = 0 | First unit highest |\n| **Relation** | When MU > 0, TU rises | When TU max, MU = 0 |",
          marks: 2,
        },
        {
          id: "eco_q3_2_2023",
          concepts: "Extension and Increase in Demand",
          modelAnswer: "**Extension vs Increase in Demand:**\n\n| Aspect | Extension of Demand | Increase in Demand |\n|--------|--------------------|-----------------|\n| **Cause** | Fall in own price | Other factors (income, taste) |\n| **Movement** | Along the demand curve | Shift of demand curve |\n| **Direction** | Downward movement | Rightward shift |\n| **Other factors** | Remain constant | Change |\n| **Diagram** | Movement on same curve | New curve to right |",
          marks: 2,
        },
        {
          id: "eco_q3_3_2023",
          concepts: "CGST and SGST",
          modelAnswer: "**CGST vs SGST:**\n\n| Aspect | CGST | SGST |\n|--------|------|------|\n| **Full Form** | Central GST | State GST |\n| **Levied by** | Central Government | State Government |\n| **On** | Intra-state transactions | Intra-state transactions |\n| **Revenue** | Goes to Centre | Goes to State |\n| **Rate** | Half of total GST | Half of total GST |",
          marks: 2,
        },
      ],
    },
    {
      id: "q6_2023",
      type: "long_answer",
      title: "Q.6 Long Answers (8 marks each)",
      marks: 16,
      instructions: "Answer the following (Any 2 out of 4)",
      required: 2,
      questions: [
        {
          id: "eco_q6_1_2023",
          question: "Explain the Law of Supply with supply schedule and diagram.",
          modelAnswer: "### Law of Supply\n\n**Statement:** Other things being equal, when price of a commodity rises, quantity supplied also rises, and when price falls, quantity supplied also falls.\n\n**Supply Schedule:**\n| Price (₹) | Quantity Supplied |\n|-----------|------------------|\n| 10 | 100 |\n| 20 | 200 |\n| 30 | 300 |\n| 40 | 400 |\n| 50 | 500 |\n\n**Diagram:** Draw upward sloping supply curve (SS) with Price on Y-axis and Quantity on X-axis.\n\n**Reasons for Upward Slope:**\n1. Higher profits at higher prices\n2. New producers enter\n3. Existing producers increase output\n4. Covers higher marginal cost\n\n**Exceptions:**\n- Backward bending supply of labor\n- Fixed supply (land)\n- Agricultural supply in short run",
          marks: 8,
        },
        {
          id: "eco_q6_2_2023",
          question: "Explain the features of Monopoly market.",
          modelAnswer: "### Features of Monopoly\n\n**Definition:** A market structure with single seller having full control over supply of a product with no close substitutes.\n\n**Features:**\n\n**1. Single Seller:**\n- Only one firm in industry\n- Firm = Industry\n\n**2. No Close Substitutes:**\n- Product is unique\n- No competition\n\n**3. Price Maker:**\n- Full control over price\n- Sets price to maximize profit\n\n**4. Blocked Entry:**\n- New firms cannot enter\n- Legal, natural, or artificial barriers\n\n**5. Price Discrimination:**\n- Can charge different prices\n- Different markets, customers\n\n**6. Downward Sloping Demand:**\n- AR curve slopes downward\n- AR > MR always\n\n**Examples:** Indian Railways, BSNL (earlier), local power companies",
          marks: 8,
        },
      ],
    },
    {
      id: "q7_2023",
      type: "numerical",
      title: "Q.7 Numericals (Compulsory)",
      marks: 12,
      instructions: "Solve the following numerical problems (Compulsory)",
      required: 3,
      questions: [
        {
          id: "eco_q7_1_2023",
          question: "From the following calculate TU:\n\nUnits: 1, 2, 3, 4, 5\nMU: 12, 10, 8, 6, 4",
          modelAnswer: "**Solution:**\n\nFormula: TU = ΣMU (cumulative sum)\n\n| Units | MU | TU (Cumulative) |\n|-------|-----|------------------|\n| 1 | 12 | 12 |\n| 2 | 10 | 12 + 10 = **22** |\n| 3 | 8 | 22 + 8 = **30** |\n| 4 | 6 | 30 + 6 = **36** |\n| 5 | 4 | 36 + 4 = **40** |\n\n**Answer:** TU for units 1 to 5 are: 12, 22, 30, 36, 40",
          marks: 4,
        },
        {
          id: "eco_q7_2_2023",
          question: "Calculate Price Elasticity of Demand:\nOriginal Price = ₹100, New Price = ₹80\nOriginal Quantity = 40 units, New Quantity = 60 units",
          modelAnswer: "**Solution:**\n\nGiven: P₁ = 100, P₂ = 80, Q₁ = 40, Q₂ = 60\n\nUsing Percentage Method:\nEd = %ΔQ / %ΔP\n\n**%ΔQ** = (60-40)/40 × 100 = 50%\n**%ΔP** = (80-100)/100 × 100 = -20%\n\n**Ed** = 50% / (-20%) = **-2.5** (or 2.5 in absolute terms)\n\n**Conclusion:** Ed > 1, so demand is **Elastic**",
          marks: 4,
        },
        {
          id: "eco_q7_3_2023",
          question: "Calculate NI at FC from:\nGDP at MP = ₹5000 crore\nDepreciation = ₹300 crore\nNet Factor Income from Abroad = ₹200 crore\nIndirect Taxes = ₹400 crore\nSubsidies = ₹100 crore",
          modelAnswer: "**Solution:**\n\n**Step 1: Calculate GNP at MP**\nGNP at MP = GDP at MP + NFIA\nGNP at MP = 5000 + 200 = ₹5200 crore\n\n**Step 2: Calculate NNP at MP**\nNNP at MP = GNP at MP - Depreciation\nNNP at MP = 5200 - 300 = ₹4900 crore\n\n**Step 3: Calculate NI at FC (NNP at FC)**\nNI at FC = NNP at MP - Indirect Taxes + Subsidies\nNI at FC = 4900 - 400 + 100\n**NI at FC = ₹4600 crore**",
          marks: 4,
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
      if (section.type === "mcq") {
        section.questions.forEach((q: any) => {
          if (answers[q.id] === q.correct) {
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
          {section.type === "mcq" && section.questions.map((q: any, idx: number) => (
            <div key={q.id} className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <p className="font-medium text-slate-800 dark:text-white text-sm sm:text-base">
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
                    {String.fromCharCode(65 + optIdx)}. {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}

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

          {(section.type === "identify_explain" || section.type === "distinguish" || section.type === "agree_disagree" || section.type === "long_answer" || section.type === "numerical") &&
            section.questions.map((q: any, idx: number) => (
              <div key={q.id} className="bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 shadow-sm">
                <p className="font-medium text-slate-800 dark:text-white text-sm mb-2">
                  <span className="text-green-500 mr-2">{idx + 1}.</span>
                  {q.question || q.statement || q.concepts}
                </p>
                <textarea
                  placeholder="Write your answer..."
                  value={answers[q.id] || ""}
                  onChange={(e) => handleAnswer(q.id, e.target.value)}
                  className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm min-h-[100px]"
                />
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
