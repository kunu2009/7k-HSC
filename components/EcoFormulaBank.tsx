import React, { useState, useMemo } from 'react';

interface EcoFormulaBankProps {
  onClose: () => void;
}

interface Formula {
  id: string;
  name: string;
  formula: string;
  variables: { symbol: string; meaning: string }[];
  example?: string;
  chapter: string;
  chapterId: string;
  type: 'formula' | 'definition' | 'concept';
  important: boolean;
}

const economicsFormulas: Formula[] = [
  // Chapter 1: Introduction to Micro and Macro Economics
  {
    id: 'micro-def',
    name: 'Microeconomics Definition',
    formula: 'Study of individual economic units',
    variables: [],
    example: 'Consumer behavior, firm pricing, market demand',
    chapter: 'Introduction to Micro and Macro Economics',
    chapterId: 'eco1',
    type: 'definition',
    important: true
  },
  {
    id: 'macro-def',
    name: 'Macroeconomics Definition',
    formula: 'Study of economy as a whole',
    variables: [],
    example: 'National income, inflation, unemployment, GDP',
    chapter: 'Introduction to Micro and Macro Economics',
    chapterId: 'eco1',
    type: 'definition',
    important: true
  },
  {
    id: 'positive-eco',
    name: 'Positive Economics',
    formula: 'Deals with "what is" - factual statements',
    variables: [],
    example: 'Inflation rate is 5% this year',
    chapter: 'Introduction to Micro and Macro Economics',
    chapterId: 'eco1',
    type: 'concept',
    important: false
  },
  {
    id: 'normative-eco',
    name: 'Normative Economics',
    formula: 'Deals with "what ought to be" - value judgments',
    variables: [],
    example: 'Government should reduce inflation',
    chapter: 'Introduction to Micro and Macro Economics',
    chapterId: 'eco1',
    type: 'concept',
    important: false
  },

  // Chapter 2: Utility Analysis
  {
    id: 'total-utility',
    name: 'Total Utility (TU)',
    formula: 'TU = ΣMU = MU₁ + MU₂ + MU₃ + ... + MUₙ',
    variables: [
      { symbol: 'TU', meaning: 'Total Utility - sum of all marginal utilities' },
      { symbol: 'MU', meaning: 'Marginal Utility of each unit' },
      { symbol: 'n', meaning: 'Number of units consumed' }
    ],
    example: 'If MU of 3 apples is 10, 8, 5 then TU = 10 + 8 + 5 = 23 utils',
    chapter: 'Utility Analysis',
    chapterId: 'eco2',
    type: 'formula',
    important: true
  },
  {
    id: 'marginal-utility',
    name: 'Marginal Utility (MU)',
    formula: 'MU = ΔTU / ΔQ = TUₙ - TUₙ₋₁',
    variables: [
      { symbol: 'MU', meaning: 'Marginal Utility - additional utility from one more unit' },
      { symbol: 'ΔTU', meaning: 'Change in Total Utility' },
      { symbol: 'ΔQ', meaning: 'Change in Quantity (usually 1)' }
    ],
    example: 'TU from 2 mangoes = 18, TU from 3 mangoes = 23, MU of 3rd = 23-18 = 5',
    chapter: 'Utility Analysis',
    chapterId: 'eco2',
    type: 'formula',
    important: true
  },
  {
    id: 'consumer-equilibrium',
    name: 'Consumer Equilibrium (Single Commodity)',
    formula: 'MU = Price (in utils)',
    variables: [
      { symbol: 'MU', meaning: 'Marginal Utility of the commodity' },
      { symbol: 'Price', meaning: 'Market price of the commodity' }
    ],
    example: 'Consumer buys till MU of last unit = Price paid',
    chapter: 'Utility Analysis',
    chapterId: 'eco2',
    type: 'formula',
    important: true
  },
  {
    id: 'equi-marginal-utility',
    name: 'Law of Equi-Marginal Utility',
    formula: 'MUₐ/Pₐ = MUᵦ/Pᵦ = MUᵧ/Pᵧ = ... = MUₘ (Money)',
    variables: [
      { symbol: 'MUₐ, MUᵦ, MUᵧ', meaning: 'Marginal Utilities of goods A, B, C' },
      { symbol: 'Pₐ, Pᵦ, Pᵧ', meaning: 'Prices of goods A, B, C' },
      { symbol: 'MUₘ', meaning: 'Marginal Utility of Money' }
    ],
    example: 'MU of tea/₹10 = MU of coffee/₹15 for optimal spending',
    chapter: 'Utility Analysis',
    chapterId: 'eco2',
    type: 'formula',
    important: true
  },
  {
    id: 'dmu-law',
    name: 'Law of Diminishing Marginal Utility',
    formula: 'As consumption ↑, MU of each successive unit ↓',
    variables: [],
    example: '1st glass of water when thirsty = high MU, 5th glass = low/zero MU',
    chapter: 'Utility Analysis',
    chapterId: 'eco2',
    type: 'concept',
    important: true
  },

  // Chapter 3A: Demand Analysis
  {
    id: 'demand-function',
    name: 'Demand Function',
    formula: 'Qd = f(P, Y, Pₛ, Pᶜ, T, E, N)',
    variables: [
      { symbol: 'Qd', meaning: 'Quantity Demanded' },
      { symbol: 'P', meaning: 'Price of the commodity' },
      { symbol: 'Y', meaning: 'Income of consumer' },
      { symbol: 'Pₛ', meaning: 'Price of substitutes' },
      { symbol: 'Pᶜ', meaning: 'Price of complements' },
      { symbol: 'T', meaning: 'Tastes and preferences' },
      { symbol: 'E', meaning: 'Expectations about future prices' },
      { symbol: 'N', meaning: 'Number of consumers' }
    ],
    chapter: 'Demand Analysis',
    chapterId: 'eco3a',
    type: 'formula',
    important: true
  },
  {
    id: 'law-of-demand',
    name: 'Law of Demand',
    formula: 'P ↑ → Qd ↓ and P ↓ → Qd ↑ (ceteris paribus)',
    variables: [
      { symbol: 'P', meaning: 'Price' },
      { symbol: 'Qd', meaning: 'Quantity Demanded' },
      { symbol: 'ceteris paribus', meaning: 'Other things remaining constant' }
    ],
    example: 'If price of rice increases, demand decreases',
    chapter: 'Demand Analysis',
    chapterId: 'eco3a',
    type: 'concept',
    important: true
  },
  {
    id: 'individual-demand',
    name: 'Individual Demand Schedule',
    formula: 'Shows quantity demanded by one consumer at various prices',
    variables: [],
    chapter: 'Demand Analysis',
    chapterId: 'eco3a',
    type: 'definition',
    important: false
  },
  {
    id: 'market-demand',
    name: 'Market Demand',
    formula: 'Qₘ = Qₐ + Qᵦ + Qᶜ + ... + Qₙ',
    variables: [
      { symbol: 'Qₘ', meaning: 'Market Demand (total)' },
      { symbol: 'Qₐ, Qᵦ...', meaning: 'Individual demands of consumers A, B...' }
    ],
    example: 'If A demands 5 and B demands 8, market demand = 13',
    chapter: 'Demand Analysis',
    chapterId: 'eco3a',
    type: 'formula',
    important: true
  },

  // Chapter 3B: Elasticity of Demand
  {
    id: 'price-elasticity',
    name: 'Price Elasticity of Demand (Ed)',
    formula: 'Ed = (% change in Qd) / (% change in P) = (ΔQ/Q) / (ΔP/P)',
    variables: [
      { symbol: 'Ed', meaning: 'Price Elasticity of Demand' },
      { symbol: 'ΔQ', meaning: 'Change in Quantity Demanded' },
      { symbol: 'ΔP', meaning: 'Change in Price' },
      { symbol: 'Q', meaning: 'Original Quantity' },
      { symbol: 'P', meaning: 'Original Price' }
    ],
    example: 'If price ↑ by 10% and Qd ↓ by 20%, Ed = 20/10 = 2 (elastic)',
    chapter: 'Elasticity of Demand',
    chapterId: 'eco3b',
    type: 'formula',
    important: true
  },
  {
    id: 'ed-ratio-method',
    name: 'Elasticity - Ratio Method',
    formula: 'Ed = (ΔQ/ΔP) × (P/Q)',
    variables: [
      { symbol: 'ΔQ', meaning: 'Change in Quantity' },
      { symbol: 'ΔP', meaning: 'Change in Price' },
      { symbol: 'P', meaning: 'Original Price' },
      { symbol: 'Q', meaning: 'Original Quantity' }
    ],
    example: 'Q: 100→80, P: ₹10→₹12. Ed = (20/2) × (10/100) = 1',
    chapter: 'Elasticity of Demand',
    chapterId: 'eco3b',
    type: 'formula',
    important: true
  },
  {
    id: 'ed-total-outlay',
    name: 'Total Outlay/Expenditure Method',
    formula: 'If P↑ & TE↓ → Ed > 1 | If P↑ & TE↑ → Ed < 1 | If P↑ & TE same → Ed = 1',
    variables: [
      { symbol: 'TE', meaning: 'Total Expenditure = P × Q' },
      { symbol: 'Ed > 1', meaning: 'Elastic demand' },
      { symbol: 'Ed < 1', meaning: 'Inelastic demand' },
      { symbol: 'Ed = 1', meaning: 'Unitary elastic' }
    ],
    chapter: 'Elasticity of Demand',
    chapterId: 'eco3b',
    type: 'formula',
    important: true
  },
  {
    id: 'income-elasticity',
    name: 'Income Elasticity of Demand (Ey)',
    formula: 'Ey = (% change in Qd) / (% change in Y) = (ΔQ/Q) / (ΔY/Y)',
    variables: [
      { symbol: 'Ey', meaning: 'Income Elasticity' },
      { symbol: 'Y', meaning: 'Income' },
      { symbol: 'Ey > 0', meaning: 'Normal goods' },
      { symbol: 'Ey < 0', meaning: 'Inferior goods' },
      { symbol: 'Ey > 1', meaning: 'Luxury goods' }
    ],
    chapter: 'Elasticity of Demand',
    chapterId: 'eco3b',
    type: 'formula',
    important: true
  },
  {
    id: 'cross-elasticity',
    name: 'Cross Elasticity of Demand (Ec)',
    formula: 'Ec = (% change in Qd of A) / (% change in P of B)',
    variables: [
      { symbol: 'Ec > 0', meaning: 'Substitutes (tea & coffee)' },
      { symbol: 'Ec < 0', meaning: 'Complements (car & petrol)' },
      { symbol: 'Ec = 0', meaning: 'Unrelated goods' }
    ],
    chapter: 'Elasticity of Demand',
    chapterId: 'eco3b',
    type: 'formula',
    important: true
  },

  // Chapter 4: Supply Analysis
  {
    id: 'supply-function',
    name: 'Supply Function',
    formula: 'Qs = f(P, Pf, T, G, E, N)',
    variables: [
      { symbol: 'Qs', meaning: 'Quantity Supplied' },
      { symbol: 'P', meaning: 'Price of commodity' },
      { symbol: 'Pf', meaning: 'Prices of factors of production' },
      { symbol: 'T', meaning: 'Technology' },
      { symbol: 'G', meaning: 'Government policy' },
      { symbol: 'E', meaning: 'Expectations' },
      { symbol: 'N', meaning: 'Number of firms' }
    ],
    chapter: 'Supply Analysis',
    chapterId: 'eco4',
    type: 'formula',
    important: true
  },
  {
    id: 'law-of-supply',
    name: 'Law of Supply',
    formula: 'P ↑ → Qs ↑ and P ↓ → Qs ↓ (ceteris paribus)',
    variables: [
      { symbol: 'P', meaning: 'Price' },
      { symbol: 'Qs', meaning: 'Quantity Supplied' }
    ],
    example: 'If price of wheat increases, farmers supply more',
    chapter: 'Supply Analysis',
    chapterId: 'eco4',
    type: 'concept',
    important: true
  },
  {
    id: 'price-elasticity-supply',
    name: 'Price Elasticity of Supply (Es)',
    formula: 'Es = (% change in Qs) / (% change in P) = (ΔQs/Qs) / (ΔP/P)',
    variables: [
      { symbol: 'Es', meaning: 'Elasticity of Supply' },
      { symbol: 'Es > 1', meaning: 'Elastic supply' },
      { symbol: 'Es < 1', meaning: 'Inelastic supply' },
      { symbol: 'Es = 1', meaning: 'Unitary elastic supply' }
    ],
    chapter: 'Supply Analysis',
    chapterId: 'eco4',
    type: 'formula',
    important: true
  },
  {
    id: 'market-equilibrium',
    name: 'Market Equilibrium',
    formula: 'Qd = Qs at Equilibrium Price',
    variables: [
      { symbol: 'Qd', meaning: 'Quantity Demanded' },
      { symbol: 'Qs', meaning: 'Quantity Supplied' }
    ],
    example: 'Where demand curve intersects supply curve',
    chapter: 'Supply Analysis',
    chapterId: 'eco4',
    type: 'formula',
    important: true
  },

  // Chapter 5: Forms of Market
  {
    id: 'perfect-competition',
    name: 'Perfect Competition Features',
    formula: 'Large sellers, Homogeneous product, Free entry/exit, Perfect knowledge, Price taker',
    variables: [],
    example: 'Agricultural markets, Stock exchange',
    chapter: 'Forms of Market',
    chapterId: 'eco5',
    type: 'definition',
    important: true
  },
  {
    id: 'ar-mr-pc',
    name: 'AR = MR = Price (Perfect Competition)',
    formula: 'AR = TR/Q = MR = P',
    variables: [
      { symbol: 'AR', meaning: 'Average Revenue' },
      { symbol: 'MR', meaning: 'Marginal Revenue' },
      { symbol: 'TR', meaning: 'Total Revenue' },
      { symbol: 'P', meaning: 'Price (constant for firm)' }
    ],
    chapter: 'Forms of Market',
    chapterId: 'eco5',
    type: 'formula',
    important: true
  },
  {
    id: 'monopoly-def',
    name: 'Monopoly Features',
    formula: 'Single seller, No close substitutes, Entry barriers, Price maker',
    variables: [],
    example: 'Indian Railways, Electricity boards',
    chapter: 'Forms of Market',
    chapterId: 'eco5',
    type: 'definition',
    important: true
  },
  {
    id: 'ar-mr-monopoly',
    name: 'AR > MR (Monopoly)',
    formula: 'AR curve lies above MR curve, MR = AR - (AR/Ed)',
    variables: [
      { symbol: 'AR', meaning: 'Average Revenue (demand curve)' },
      { symbol: 'MR', meaning: 'Marginal Revenue' },
      { symbol: 'Ed', meaning: 'Elasticity of Demand' }
    ],
    chapter: 'Forms of Market',
    chapterId: 'eco5',
    type: 'formula',
    important: true
  },
  {
    id: 'monopolistic-def',
    name: 'Monopolistic Competition',
    formula: 'Many sellers, Product differentiation, Free entry/exit, Non-price competition',
    variables: [],
    example: 'Restaurants, Clothing brands, Toothpaste',
    chapter: 'Forms of Market',
    chapterId: 'eco5',
    type: 'definition',
    important: true
  },
  {
    id: 'oligopoly-def',
    name: 'Oligopoly Features',
    formula: 'Few large sellers, Interdependence, Entry barriers, Price rigidity',
    variables: [],
    example: 'Telecom, Automobiles, Airlines',
    chapter: 'Forms of Market',
    chapterId: 'eco5',
    type: 'definition',
    important: true
  },

  // Chapter 6: Index Numbers
  {
    id: 'price-relative',
    name: 'Price Relative',
    formula: 'P₀₁ = (P₁/P₀) × 100',
    variables: [
      { symbol: 'P₀₁', meaning: 'Price Relative' },
      { symbol: 'P₁', meaning: 'Current year price' },
      { symbol: 'P₀', meaning: 'Base year price' }
    ],
    example: 'If P₀ = ₹50, P₁ = ₹60, Price Relative = (60/50)×100 = 120',
    chapter: 'Index Numbers',
    chapterId: 'eco6',
    type: 'formula',
    important: true
  },
  {
    id: 'simple-avg-price',
    name: 'Simple Average of Price Relatives',
    formula: 'P₀₁ = Σ(P₁/P₀ × 100) / N',
    variables: [
      { symbol: 'N', meaning: 'Number of commodities' },
      { symbol: 'Σ', meaning: 'Sum of all price relatives' }
    ],
    chapter: 'Index Numbers',
    chapterId: 'eco6',
    type: 'formula',
    important: true
  },
  {
    id: 'laspeyre-price',
    name: "Laspeyre's Price Index",
    formula: 'P₀₁ = (ΣP₁Q₀ / ΣP₀Q₀) × 100',
    variables: [
      { symbol: 'P₁', meaning: 'Current year prices' },
      { symbol: 'P₀', meaning: 'Base year prices' },
      { symbol: 'Q₀', meaning: 'Base year quantities (as weights)' }
    ],
    example: 'Uses base year quantities as weights - tends to overstate inflation',
    chapter: 'Index Numbers',
    chapterId: 'eco6',
    type: 'formula',
    important: true
  },
  {
    id: 'paasche-price',
    name: "Paasche's Price Index",
    formula: 'P₀₁ = (ΣP₁Q₁ / ΣP₀Q₁) × 100',
    variables: [
      { symbol: 'P₁', meaning: 'Current year prices' },
      { symbol: 'P₀', meaning: 'Base year prices' },
      { symbol: 'Q₁', meaning: 'Current year quantities (as weights)' }
    ],
    example: 'Uses current year quantities as weights - tends to understate inflation',
    chapter: 'Index Numbers',
    chapterId: 'eco6',
    type: 'formula',
    important: true
  },
  {
    id: 'fisher-price',
    name: "Fisher's Ideal Index",
    formula: 'P₀₁ = √(Laspeyre × Paasche) = √[(ΣP₁Q₀/ΣP₀Q₀) × (ΣP₁Q₁/ΣP₀Q₁)] × 100',
    variables: [
      { symbol: 'Fisher', meaning: 'Geometric mean of Laspeyre & Paasche' }
    ],
    example: 'Called "ideal" because it satisfies time reversal and factor reversal tests',
    chapter: 'Index Numbers',
    chapterId: 'eco6',
    type: 'formula',
    important: true
  },
  {
    id: 'cpi-def',
    name: 'Consumer Price Index (CPI)',
    formula: 'CPI = (Cost of basket in current year / Cost of basket in base year) × 100',
    variables: [],
    example: 'Measures inflation faced by consumers, used for DA calculation',
    chapter: 'Index Numbers',
    chapterId: 'eco6',
    type: 'definition',
    important: true
  },

  // Chapter 7: National Income
  {
    id: 'gdp-mp',
    name: 'GDP at Market Price',
    formula: 'GDP_MP = C + I + G + (X - M)',
    variables: [
      { symbol: 'C', meaning: 'Private Consumption Expenditure' },
      { symbol: 'I', meaning: 'Investment (Gross Domestic Capital Formation)' },
      { symbol: 'G', meaning: 'Government Expenditure' },
      { symbol: 'X', meaning: 'Exports' },
      { symbol: 'M', meaning: 'Imports' },
      { symbol: 'X - M', meaning: 'Net Exports' }
    ],
    example: 'Expenditure method of calculating national income',
    chapter: 'National Income',
    chapterId: 'eco7',
    type: 'formula',
    important: true
  },
  {
    id: 'gdp-fc',
    name: 'GDP at Factor Cost',
    formula: 'GDP_FC = GDP_MP - Indirect Taxes + Subsidies',
    variables: [
      { symbol: 'GDP_FC', meaning: 'GDP at Factor Cost' },
      { symbol: 'GDP_MP', meaning: 'GDP at Market Price' },
      { symbol: 'NIT', meaning: 'Net Indirect Taxes = IT - Subsidies' }
    ],
    chapter: 'National Income',
    chapterId: 'eco7',
    type: 'formula',
    important: true
  },
  {
    id: 'gnp-formula',
    name: 'GNP (Gross National Product)',
    formula: 'GNP = GDP + NFIA',
    variables: [
      { symbol: 'GNP', meaning: 'Gross National Product' },
      { symbol: 'GDP', meaning: 'Gross Domestic Product' },
      { symbol: 'NFIA', meaning: 'Net Factor Income from Abroad' }
    ],
    example: 'NFIA = Income from abroad - Payments to foreigners',
    chapter: 'National Income',
    chapterId: 'eco7',
    type: 'formula',
    important: true
  },
  {
    id: 'nnp-formula',
    name: 'NNP (Net National Product)',
    formula: 'NNP = GNP - Depreciation',
    variables: [
      { symbol: 'NNP', meaning: 'Net National Product' },
      { symbol: 'GNP', meaning: 'Gross National Product' },
      { symbol: 'Depreciation', meaning: 'Wear and tear of capital goods' }
    ],
    chapter: 'National Income',
    chapterId: 'eco7',
    type: 'formula',
    important: true
  },
  {
    id: 'national-income',
    name: 'National Income (NI)',
    formula: 'NI = NNP_FC = NNP_MP - Indirect Taxes + Subsidies',
    variables: [
      { symbol: 'NI', meaning: 'National Income' },
      { symbol: 'NNP_FC', meaning: 'Net National Product at Factor Cost' }
    ],
    chapter: 'National Income',
    chapterId: 'eco7',
    type: 'formula',
    important: true
  },
  {
    id: 'per-capita-income',
    name: 'Per Capita Income',
    formula: 'Per Capita Income = National Income / Population',
    variables: [],
    example: 'Measures average income per person in a country',
    chapter: 'National Income',
    chapterId: 'eco7',
    type: 'formula',
    important: true
  },
  {
    id: 'personal-income',
    name: 'Personal Income',
    formula: 'PI = NI - Corporate Tax - Retained Earnings + Transfer Payments',
    variables: [
      { symbol: 'PI', meaning: 'Personal Income' },
      { symbol: 'NI', meaning: 'National Income' }
    ],
    chapter: 'National Income',
    chapterId: 'eco7',
    type: 'formula',
    important: false
  },
  {
    id: 'disposable-income',
    name: 'Disposable Income',
    formula: 'DI = Personal Income - Personal Taxes',
    variables: [
      { symbol: 'DI', meaning: 'Disposable Income - income available for spending/saving' }
    ],
    chapter: 'National Income',
    chapterId: 'eco7',
    type: 'formula',
    important: false
  },

  // Chapter 8: Public Finance
  {
    id: 'public-revenue',
    name: 'Public Revenue Sources',
    formula: 'Tax Revenue + Non-Tax Revenue',
    variables: [
      { symbol: 'Tax Revenue', meaning: 'Direct taxes (Income, Corporate) + Indirect taxes (GST, Customs)' },
      { symbol: 'Non-Tax Revenue', meaning: 'Fees, Fines, Profits from PSUs, Interest receipts' }
    ],
    chapter: 'Public Finance',
    chapterId: 'eco8',
    type: 'definition',
    important: true
  },
  {
    id: 'revenue-deficit',
    name: 'Revenue Deficit',
    formula: 'Revenue Deficit = Revenue Expenditure - Revenue Receipts',
    variables: [
      { symbol: 'Revenue Expenditure', meaning: 'Salaries, interest payments, subsidies' },
      { symbol: 'Revenue Receipts', meaning: 'Tax + Non-tax revenue' }
    ],
    chapter: 'Public Finance',
    chapterId: 'eco8',
    type: 'formula',
    important: true
  },
  {
    id: 'fiscal-deficit',
    name: 'Fiscal Deficit',
    formula: 'Fiscal Deficit = Total Expenditure - Total Receipts (excluding borrowings)',
    variables: [],
    example: 'Shows total borrowing requirement of government',
    chapter: 'Public Finance',
    chapterId: 'eco8',
    type: 'formula',
    important: true
  },
  {
    id: 'primary-deficit',
    name: 'Primary Deficit',
    formula: 'Primary Deficit = Fiscal Deficit - Interest Payments',
    variables: [],
    example: 'Shows borrowing for purposes other than interest payments',
    chapter: 'Public Finance',
    chapterId: 'eco8',
    type: 'formula',
    important: true
  },
  {
    id: 'direct-tax',
    name: 'Direct Tax',
    formula: 'Tax where incidence and impact fall on same person',
    variables: [],
    example: 'Income Tax, Corporate Tax, Wealth Tax',
    chapter: 'Public Finance',
    chapterId: 'eco8',
    type: 'definition',
    important: true
  },
  {
    id: 'indirect-tax',
    name: 'Indirect Tax',
    formula: 'Tax where burden can be shifted to others',
    variables: [],
    example: 'GST, Customs Duty, Excise Duty',
    chapter: 'Public Finance',
    chapterId: 'eco8',
    type: 'definition',
    important: true
  },

  // Chapter 9: Money Market and Capital Market
  {
    id: 'money-market-def',
    name: 'Money Market',
    formula: 'Market for short-term funds (up to 1 year)',
    variables: [],
    example: 'T-Bills, Commercial Paper, Certificate of Deposit, Call Money',
    chapter: 'Money Market and Capital Market',
    chapterId: 'eco9',
    type: 'definition',
    important: true
  },
  {
    id: 'capital-market-def',
    name: 'Capital Market',
    formula: 'Market for long-term funds (more than 1 year)',
    variables: [],
    example: 'Shares, Debentures, Bonds, Stock Exchange',
    chapter: 'Money Market and Capital Market',
    chapterId: 'eco9',
    type: 'definition',
    important: true
  },
  {
    id: 'primary-market',
    name: 'Primary Market',
    formula: 'Market for new securities (first-time issue)',
    variables: [],
    example: 'IPO (Initial Public Offering), FPO',
    chapter: 'Money Market and Capital Market',
    chapterId: 'eco9',
    type: 'definition',
    important: true
  },
  {
    id: 'secondary-market',
    name: 'Secondary Market',
    formula: 'Market for existing/old securities',
    variables: [],
    example: 'BSE, NSE - buying and selling of existing shares',
    chapter: 'Money Market and Capital Market',
    chapterId: 'eco9',
    type: 'definition',
    important: true
  },
  {
    id: 'sensex-nifty',
    name: 'SENSEX & NIFTY',
    formula: 'SENSEX = BSE 30 stocks | NIFTY = NSE 50 stocks',
    variables: [
      { symbol: 'SENSEX', meaning: 'Sensitivity Index - BSE' },
      { symbol: 'NIFTY', meaning: 'National Fifty - NSE' }
    ],
    chapter: 'Money Market and Capital Market',
    chapterId: 'eco9',
    type: 'definition',
    important: true
  },

  // Chapter 10: Foreign Trade
  {
    id: 'balance-of-trade',
    name: 'Balance of Trade (BOT)',
    formula: 'BOT = Exports of Goods - Imports of Goods',
    variables: [
      { symbol: 'BOT > 0', meaning: 'Trade Surplus (Favorable)' },
      { symbol: 'BOT < 0', meaning: 'Trade Deficit (Unfavorable)' }
    ],
    chapter: 'Foreign Trade',
    chapterId: 'eco10',
    type: 'formula',
    important: true
  },
  {
    id: 'balance-of-payments',
    name: 'Balance of Payments (BOP)',
    formula: 'BOP = Current Account + Capital Account + Financial Account',
    variables: [
      { symbol: 'Current A/C', meaning: 'Trade in goods, services, income, transfers' },
      { symbol: 'Capital A/C', meaning: 'Capital transfers, non-financial assets' },
      { symbol: 'Financial A/C', meaning: 'FDI, FPI, External borrowings' }
    ],
    chapter: 'Foreign Trade',
    chapterId: 'eco10',
    type: 'formula',
    important: true
  },
  {
    id: 'current-account',
    name: 'Current Account',
    formula: 'Current A/C = BOT + Balance of Services + Net Income + Net Transfers',
    variables: [],
    chapter: 'Foreign Trade',
    chapterId: 'eco10',
    type: 'formula',
    important: true
  },
  {
    id: 'exchange-rate',
    name: 'Exchange Rate',
    formula: 'Price of one currency in terms of another',
    variables: [
      { symbol: 'Appreciation', meaning: 'Increase in value of domestic currency' },
      { symbol: 'Depreciation', meaning: 'Decrease in value of domestic currency' }
    ],
    example: '1 USD = ₹83.50 (December 2024)',
    chapter: 'Foreign Trade',
    chapterId: 'eco10',
    type: 'definition',
    important: true
  },
  {
    id: 'forex-reserves',
    name: 'Foreign Exchange Reserves',
    formula: 'FCAs + Gold + SDRs + Reserve Position in IMF',
    variables: [
      { symbol: 'FCAs', meaning: 'Foreign Currency Assets' },
      { symbol: 'SDRs', meaning: 'Special Drawing Rights' },
      { symbol: 'IMF', meaning: 'International Monetary Fund' }
    ],
    chapter: 'Foreign Trade',
    chapterId: 'eco10',
    type: 'definition',
    important: false
  }
];

const chapters = [
  { id: 'eco1', name: 'Ch 1: Intro to Micro & Macro', icon: '📚' },
  { id: 'eco2', name: 'Ch 2: Utility Analysis', icon: '⚖️' },
  { id: 'eco3a', name: 'Ch 3A: Demand Analysis', icon: '📉' },
  { id: 'eco3b', name: 'Ch 3B: Elasticity of Demand', icon: '📊' },
  { id: 'eco4', name: 'Ch 4: Supply Analysis', icon: '📈' },
  { id: 'eco5', name: 'Ch 5: Forms of Market', icon: '🏪' },
  { id: 'eco6', name: 'Ch 6: Index Numbers', icon: '🔢' },
  { id: 'eco7', name: 'Ch 7: National Income', icon: '💰' },
  { id: 'eco8', name: 'Ch 8: Public Finance', icon: '🏛️' },
  { id: 'eco9', name: 'Ch 9: Money & Capital Market', icon: '🏦' },
  { id: 'eco10', name: 'Ch 10: Foreign Trade', icon: '🌍' }
];

const EcoFormulaBank: React.FC<EcoFormulaBankProps> = ({ onClose }) => {
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'formula' | 'definition' | 'concept'>('all');
  const [showImportantOnly, setShowImportantOnly] = useState(false);
  const [expandedFormula, setExpandedFormula] = useState<string | null>(null);
  const [bookmarked, setBookmarked] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('eco_formula_bookmarks');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  const filteredFormulas = useMemo(() => {
    return economicsFormulas.filter(f => {
      if (selectedChapter && f.chapterId !== selectedChapter) return false;
      if (filterType !== 'all' && f.type !== filterType) return false;
      if (showImportantOnly && !f.important) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          f.name.toLowerCase().includes(query) ||
          f.formula.toLowerCase().includes(query) ||
          f.chapter.toLowerCase().includes(query) ||
          f.variables.some(v => v.meaning.toLowerCase().includes(query))
        );
      }
      return true;
    });
  }, [selectedChapter, filterType, showImportantOnly, searchQuery]);

  const toggleBookmark = (id: string) => {
    const newBookmarks = new Set(bookmarked);
    if (newBookmarks.has(id)) {
      newBookmarks.delete(id);
    } else {
      newBookmarks.add(id);
    }
    setBookmarked(newBookmarks);
    localStorage.setItem('eco_formula_bookmarks', JSON.stringify([...newBookmarks]));
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'formula': return 'bg-blue-500';
      case 'definition': return 'bg-green-500';
      case 'concept': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'formula': return '📐';
      case 'definition': return '📖';
      case 'concept': return '💡';
      default: return '📄';
    }
  };

  const stats = useMemo(() => ({
    total: economicsFormulas.length,
    formulas: economicsFormulas.filter(f => f.type === 'formula').length,
    definitions: economicsFormulas.filter(f => f.type === 'definition').length,
    concepts: economicsFormulas.filter(f => f.type === 'concept').length,
    important: economicsFormulas.filter(f => f.important).length,
    bookmarked: bookmarked.size
  }), [bookmarked]);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="w-full max-w-6xl mx-auto my-6 px-4 sm:px-6">
        <div className="bg-slate-900 rounded-3xl w-full shadow-2xl border border-slate-700 flex flex-col min-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-5 sm:p-6 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-4xl">📐</div>
              <div>
                <h2 className="text-2xl font-bold text-white">Economics Formula Bank</h2>
                <p className="text-blue-100 text-sm mt-1">
                  {stats.total} items: {stats.formulas} formulas, {stats.definitions} definitions, {stats.concepts} concepts
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white text-3xl transition-colors"
            >
              ×
            </button>
          </div>

          {/* Search Bar */}
          <div className="mt-4 relative">
            <input
              type="text"
              placeholder="Search formulas, definitions, concepts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">🔍</span>
          </div>
        </div>

        {/* Filters */}
        <div className="p-4 bg-slate-800 border-b border-slate-700 flex-shrink-0">
          <div className="flex flex-wrap items-center gap-3">
            {/* Type Filter */}
            <div className="flex items-center gap-2">
              {(['all', 'formula', 'definition', 'concept'] as const).map(type => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    filterType === type
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {type === 'all' ? '📋 All' : `${getTypeIcon(type)} ${type.charAt(0).toUpperCase() + type.slice(1)}s`}
                </button>
              ))}
            </div>

            <div className="h-6 w-px bg-slate-600" />

            {/* Important & Bookmarked */}
            <button
              onClick={() => setShowImportantOnly(!showImportantOnly)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                showImportantOnly
                  ? 'bg-yellow-500 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              ⭐ Important ({stats.important})
            </button>

            <button
              onClick={() => {
                setSelectedChapter(null);
                setFilterType('all');
                setShowImportantOnly(false);
                setSearchQuery('');
              }}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                bookmarked.size > 0
                  ? 'bg-red-500 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              🔖 Bookmarked ({stats.bookmarked})
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden flex-col lg:flex-row">
          {/* Chapter Sidebar */}
          <div className="w-full lg:w-64 bg-slate-850 border-b lg:border-b-0 lg:border-r border-slate-700 overflow-y-auto flex-shrink-0">
            <div className="p-3 flex flex-wrap gap-2 lg:block">
              <button
                onClick={() => setSelectedChapter(null)}
                className={`w-full text-left px-3 py-2 rounded-lg mb-2 transition-all ${
                  selectedChapter === null
                    ? 'bg-blue-500 text-white'
                    : 'text-slate-300 hover:bg-slate-700'
                }`}
              >
                📋 All Chapters
              </button>
              
              {chapters.map(ch => {
                const count = economicsFormulas.filter(f => f.chapterId === ch.id).length;
                return (
                  <button
                    key={ch.id}
                    onClick={() => setSelectedChapter(ch.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg mb-1 transition-all text-sm ${
                      selectedChapter === ch.id
                        ? 'bg-blue-500 text-white'
                        : 'text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <span className="mr-2">{ch.icon}</span>
                    {ch.name}
                    <span className="ml-1 text-xs opacity-60">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Formula Cards */}
          <div className="flex-1 overflow-y-auto p-4">
            {filteredFormulas.length === 0 ? (
              <div className="text-center py-12 text-slate-400">
                <div className="text-5xl mb-4">🔍</div>
                <p className="text-lg">No formulas found</p>
                <p className="text-sm mt-1">Try adjusting your filters or search query</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFormulas.map(formula => (
                  <div
                    key={formula.id}
                    className={`bg-slate-800 rounded-xl overflow-hidden border transition-all ${
                      expandedFormula === formula.id
                        ? 'border-blue-500 ring-2 ring-blue-500/20'
                        : 'border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    {/* Formula Header */}
                    <div
                      className="p-4 cursor-pointer"
                      onClick={() => setExpandedFormula(expandedFormula === formula.id ? null : formula.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2 py-0.5 rounded text-xs text-white ${getTypeColor(formula.type)}`}>
                              {getTypeIcon(formula.type)} {formula.type}
                            </span>
                            {formula.important && (
                              <span className="px-2 py-0.5 rounded text-xs bg-yellow-500/20 text-yellow-400">
                                ⭐ Important
                              </span>
                            )}
                            <span className="text-xs text-slate-500">{formula.chapter}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-white">{formula.name}</h3>
                          <div className="mt-2 font-mono text-lg text-blue-400 bg-slate-900/50 px-3 py-2 rounded-lg">
                            {formula.formula}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 ml-4">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleBookmark(formula.id);
                            }}
                            className={`p-2 rounded-lg transition-all ${
                              bookmarked.has(formula.id)
                                ? 'bg-red-500/20 text-red-400'
                                : 'bg-slate-700 text-slate-400 hover:text-white'
                            }`}
                          >
                            {bookmarked.has(formula.id) ? '🔖' : '📑'}
                          </button>
                          <span className="text-slate-400 text-xl">
                            {expandedFormula === formula.id ? '−' : '+'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {expandedFormula === formula.id && (
                      <div className="px-4 pb-4 border-t border-slate-700 pt-4">
                        {formula.variables.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-sm font-medium text-slate-400 mb-2">Variables & Meanings:</h4>
                            <div className="grid gap-2">
                              {formula.variables.map((v, i) => (
                                <div key={i} className="flex items-center gap-3 bg-slate-900/50 px-3 py-2 rounded-lg">
                                  <span className="font-mono text-blue-400 font-medium">{v.symbol}</span>
                                  <span className="text-slate-300">→</span>
                                  <span className="text-slate-300">{v.meaning}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {formula.example && (
                          <div>
                            <h4 className="text-sm font-medium text-slate-400 mb-2">Example/Note:</h4>
                            <div className="bg-green-500/10 border border-green-500/20 px-4 py-3 rounded-lg text-green-300">
                              💡 {formula.example}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer Stats */}
        <div className="p-3 bg-slate-800 border-t border-slate-700 flex items-center justify-between text-sm text-slate-400 flex-shrink-0">
          <span>Showing {filteredFormulas.length} of {stats.total} items</span>
          <span>📚 Maharashtra HSC Economics</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default EcoFormulaBank;
