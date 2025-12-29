import React, { useState, useMemo } from 'react';

interface EcoElasticityCalcProps {
  onClose: () => void;
}

type ElasticityType = 'price' | 'income' | 'cross' | 'supply';

interface CalculationResult {
  value: number;
  interpretation: string;
  category: string;
  color: string;
  examples: string[];
}

const EcoElasticityCalc: React.FC<EcoElasticityCalcProps> = ({ onClose }) => {
  const [elasticityType, setElasticityType] = useState<ElasticityType>('price');
  const [method, setMethod] = useState<'percentage' | 'ratio'>('percentage');
  
  // Price Elasticity inputs
  const [p1, setP1] = useState<string>('');
  const [p2, setP2] = useState<string>('');
  const [q1, setQ1] = useState<string>('');
  const [q2, setQ2] = useState<string>('');
  
  // Income Elasticity inputs
  const [y1, setY1] = useState<string>('');
  const [y2, setY2] = useState<string>('');
  
  // Cross Elasticity inputs
  const [pB1, setPB1] = useState<string>('');
  const [pB2, setPB2] = useState<string>('');
  
  const [history, setHistory] = useState<{type: string; result: CalculationResult; inputs: any}[]>([]);

  const clearInputs = () => {
    setP1(''); setP2(''); setQ1(''); setQ2('');
    setY1(''); setY2(''); setPB1(''); setPB2('');
  };

  const calculatePriceElasticity = (): CalculationResult | null => {
    const price1 = parseFloat(p1);
    const price2 = parseFloat(p2);
    const qty1 = parseFloat(q1);
    const qty2 = parseFloat(q2);

    if (isNaN(price1) || isNaN(price2) || isNaN(qty1) || isNaN(qty2)) return null;
    if (price1 === price2) return null;

    let ed: number;
    if (method === 'percentage') {
      const pctChangeQ = ((qty2 - qty1) / qty1) * 100;
      const pctChangeP = ((price2 - price1) / price1) * 100;
      ed = Math.abs(pctChangeQ / pctChangeP);
    } else {
      // Ratio method
      ed = Math.abs(((qty2 - qty1) / (price2 - price1)) * (price1 / qty1));
    }

    return interpretPriceElasticity(ed);
  };

  const interpretPriceElasticity = (ed: number): CalculationResult => {
    if (ed === 0) {
      return {
        value: ed,
        interpretation: 'Perfectly Inelastic Demand - Quantity demanded does not change at all when price changes.',
        category: 'Ed = 0 (Perfectly Inelastic)',
        color: 'bg-purple-500',
        examples: ['Life-saving medicines', 'Addictive goods', 'Salt', 'Essential utilities']
      };
    } else if (ed > 0 && ed < 1) {
      return {
        value: ed,
        interpretation: 'Inelastic Demand - Quantity demanded changes less than proportionately to price change. Consumers are relatively unresponsive to price changes.',
        category: 'Ed < 1 (Inelastic)',
        color: 'bg-blue-500',
        examples: ['Necessities like food grains', 'Petrol/Diesel', 'Electricity', 'Cooking gas']
      };
    } else if (ed === 1) {
      return {
        value: ed,
        interpretation: 'Unitary Elastic Demand - Quantity demanded changes exactly in proportion to price change. Total expenditure remains constant.',
        category: 'Ed = 1 (Unitary)',
        color: 'bg-green-500',
        examples: ['Theoretical case', 'Some services', 'Certain branded goods']
      };
    } else if (ed > 1 && ed < Infinity) {
      return {
        value: ed,
        interpretation: 'Elastic Demand - Quantity demanded changes more than proportionately to price change. Consumers are highly responsive to price changes.',
        category: 'Ed > 1 (Elastic)',
        color: 'bg-yellow-500',
        examples: ['Luxury goods', 'Entertainment', 'Branded clothes', 'Air travel', 'Restaurant dining']
      };
    } else {
      return {
        value: ed,
        interpretation: 'Perfectly Elastic Demand - Even a small price change leads to infinite change in quantity demanded.',
        category: 'Ed = ∞ (Perfectly Elastic)',
        color: 'bg-red-500',
        examples: ['Perfect competition market', 'Homogeneous products', 'Agricultural commodities at market price']
      };
    }
  };

  const calculateIncomeElasticity = (): CalculationResult | null => {
    const income1 = parseFloat(y1);
    const income2 = parseFloat(y2);
    const qty1Val = parseFloat(q1);
    const qty2Val = parseFloat(q2);

    if (isNaN(income1) || isNaN(income2) || isNaN(qty1Val) || isNaN(qty2Val)) return null;
    if (income1 === income2) return null;

    const pctChangeQ = ((qty2Val - qty1Val) / qty1Val) * 100;
    const pctChangeY = ((income2 - income1) / income1) * 100;
    const ey = pctChangeQ / pctChangeY;

    return interpretIncomeElasticity(ey);
  };

  const interpretIncomeElasticity = (ey: number): CalculationResult => {
    if (ey < 0) {
      return {
        value: ey,
        interpretation: 'Inferior Good - As income increases, demand decreases. These are goods that consumers buy less of when they can afford better alternatives.',
        category: 'Ey < 0 (Inferior Good)',
        color: 'bg-red-500',
        examples: ['Low-quality food items', 'Second-hand clothes', 'Public transport (for some)', 'Cheap local brands']
      };
    } else if (ey >= 0 && ey < 1) {
      return {
        value: ey,
        interpretation: 'Normal Necessity - Demand increases with income but less than proportionately. These are basic goods that people buy regardless of income.',
        category: '0 < Ey < 1 (Normal Necessity)',
        color: 'bg-blue-500',
        examples: ['Food staples', 'Basic clothing', 'Utilities', 'Healthcare basics']
      };
    } else {
      return {
        value: ey,
        interpretation: 'Luxury Good - Demand increases more than proportionately with income. These are premium goods that people buy more of as they get richer.',
        category: 'Ey > 1 (Luxury Good)',
        color: 'bg-yellow-500',
        examples: ['Jewelry', 'Luxury cars', 'Foreign vacations', 'Designer brands', 'Premium electronics']
      };
    }
  };

  const calculateCrossElasticity = (): CalculationResult | null => {
    const priceB1 = parseFloat(pB1);
    const priceB2 = parseFloat(pB2);
    const qtyA1 = parseFloat(q1);
    const qtyA2 = parseFloat(q2);

    if (isNaN(priceB1) || isNaN(priceB2) || isNaN(qtyA1) || isNaN(qtyA2)) return null;
    if (priceB1 === priceB2) return null;

    const pctChangeQA = ((qtyA2 - qtyA1) / qtyA1) * 100;
    const pctChangePB = ((priceB2 - priceB1) / priceB1) * 100;
    const ec = pctChangeQA / pctChangePB;

    return interpretCrossElasticity(ec);
  };

  const interpretCrossElasticity = (ec: number): CalculationResult => {
    if (ec > 0) {
      return {
        value: ec,
        interpretation: 'Substitute Goods - When price of Good B rises, demand for Good A also rises. Consumers switch from B to A.',
        category: 'Ec > 0 (Substitutes)',
        color: 'bg-orange-500',
        examples: ['Tea & Coffee', 'Pepsi & Coca-Cola', 'Butter & Margarine', 'Bus & Train travel']
      };
    } else if (ec < 0) {
      return {
        value: ec,
        interpretation: 'Complementary Goods - When price of Good B rises, demand for Good A falls. These goods are used together.',
        category: 'Ec < 0 (Complements)',
        color: 'bg-purple-500',
        examples: ['Car & Petrol', 'Printer & Ink', 'Mobile & SIM', 'Bread & Butter']
      };
    } else {
      return {
        value: ec,
        interpretation: 'Unrelated Goods - Change in price of Good B has no effect on demand for Good A. The goods are independent.',
        category: 'Ec = 0 (Unrelated)',
        color: 'bg-gray-500',
        examples: ['Books & Shoes', 'Furniture & Vegetables', 'Mobile phones & Vegetables']
      };
    }
  };

  const calculateSupplyElasticity = (): CalculationResult | null => {
    const price1 = parseFloat(p1);
    const price2 = parseFloat(p2);
    const qty1Val = parseFloat(q1);
    const qty2Val = parseFloat(q2);

    if (isNaN(price1) || isNaN(price2) || isNaN(qty1Val) || isNaN(qty2Val)) return null;
    if (price1 === price2) return null;

    const pctChangeQs = ((qty2Val - qty1Val) / qty1Val) * 100;
    const pctChangeP = ((price2 - price1) / price1) * 100;
    const es = pctChangeQs / pctChangeP;

    return interpretSupplyElasticity(es);
  };

  const interpretSupplyElasticity = (es: number): CalculationResult => {
    if (es === 0) {
      return {
        value: es,
        interpretation: 'Perfectly Inelastic Supply - Quantity supplied does not change regardless of price. Fixed supply.',
        category: 'Es = 0 (Perfectly Inelastic)',
        color: 'bg-purple-500',
        examples: ['Land', 'Antiques', 'Historical artifacts', 'Very short run']
      };
    } else if (es > 0 && es < 1) {
      return {
        value: es,
        interpretation: 'Inelastic Supply - Quantity supplied changes less than proportionately to price. Producers have limited ability to increase output.',
        category: 'Es < 1 (Inelastic)',
        color: 'bg-blue-500',
        examples: ['Agricultural products (short run)', 'Skilled labor', 'Housing']
      };
    } else if (es === 1) {
      return {
        value: es,
        interpretation: 'Unitary Elastic Supply - Quantity supplied changes in exact proportion to price change.',
        category: 'Es = 1 (Unitary)',
        color: 'bg-green-500',
        examples: ['Theoretical benchmark', 'Some manufacturing goods']
      };
    } else {
      return {
        value: es,
        interpretation: 'Elastic Supply - Quantity supplied changes more than proportionately to price. Producers can easily adjust output.',
        category: 'Es > 1 (Elastic)',
        color: 'bg-yellow-500',
        examples: ['Manufactured goods', 'Services', 'Long-run supply']
      };
    }
  };

  const calculate = () => {
    let result: CalculationResult | null = null;
    let inputs: any = {};
    
    switch (elasticityType) {
      case 'price':
        result = calculatePriceElasticity();
        inputs = { p1, p2, q1, q2, method };
        break;
      case 'income':
        result = calculateIncomeElasticity();
        inputs = { y1, y2, q1, q2 };
        break;
      case 'cross':
        result = calculateCrossElasticity();
        inputs = { pB1, pB2, q1, q2 };
        break;
      case 'supply':
        result = calculateSupplyElasticity();
        inputs = { p1, p2, q1, q2 };
        break;
    }

    if (result) {
      setHistory([{ type: elasticityType, result, inputs }, ...history.slice(0, 9)]);
    }
  };

  const currentResult = useMemo(() => {
    switch (elasticityType) {
      case 'price': return calculatePriceElasticity();
      case 'income': return calculateIncomeElasticity();
      case 'cross': return calculateCrossElasticity();
      case 'supply': return calculateSupplyElasticity();
      default: return null;
    }
  }, [elasticityType, p1, p2, q1, q2, y1, y2, pB1, pB2, method]);

  const elasticityTypes = [
    { id: 'price' as ElasticityType, name: 'Price Elasticity of Demand', icon: '📉', formula: 'Ed = %ΔQd / %ΔP' },
    { id: 'income' as ElasticityType, name: 'Income Elasticity', icon: '💰', formula: 'Ey = %ΔQd / %ΔY' },
    { id: 'cross' as ElasticityType, name: 'Cross Elasticity', icon: '🔄', formula: 'Ec = %ΔQa / %ΔPb' },
    { id: 'supply' as ElasticityType, name: 'Elasticity of Supply', icon: '📈', formula: 'Es = %ΔQs / %ΔP' }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 rounded-2xl w-full max-w-5xl max-h-[95vh] overflow-hidden shadow-2xl border border-slate-700 flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-5 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-4xl">📊</div>
              <div>
                <h2 className="text-2xl font-bold text-white">Elasticity Calculator</h2>
                <p className="text-orange-100 text-sm mt-1">
                  Calculate & interpret Ed, Ey, Ec, and Es
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
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Elasticity Type Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {elasticityTypes.map(type => (
              <button
                key={type.id}
                onClick={() => { setElasticityType(type.id); clearInputs(); }}
                className={`p-4 rounded-xl transition-all text-left ${
                  elasticityType === type.id
                    ? 'bg-orange-500 text-white ring-2 ring-orange-300'
                    : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                }`}
              >
                <div className="text-2xl mb-2">{type.icon}</div>
                <div className="font-medium text-sm">{type.name}</div>
                <div className="text-xs mt-1 opacity-70 font-mono">{type.formula}</div>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Input Section */}
            <div className="bg-slate-800 rounded-xl p-5">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span>📝</span> Enter Values
              </h3>

              {/* Method selector for Price Elasticity */}
              {elasticityType === 'price' && (
                <div className="mb-4">
                  <label className="text-slate-400 text-sm mb-2 block">Calculation Method:</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setMethod('percentage')}
                      className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        method === 'percentage'
                          ? 'bg-orange-500 text-white'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                    >
                      Percentage Method
                    </button>
                    <button
                      onClick={() => setMethod('ratio')}
                      className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        method === 'ratio'
                          ? 'bg-orange-500 text-white'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                    >
                      Ratio Method
                    </button>
                  </div>
                </div>
              )}

              {/* Input Fields */}
              <div className="space-y-4">
                {/* Price inputs (for price & supply elasticity) */}
                {(elasticityType === 'price' || elasticityType === 'supply') && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-400 text-sm mb-1 block">Original Price (P₀)</label>
                        <input
                          type="number"
                          value={p1}
                          onChange={(e) => setP1(e.target.value)}
                          placeholder="e.g., 100"
                          className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                      <div>
                        <label className="text-slate-400 text-sm mb-1 block">New Price (P₁)</label>
                        <input
                          type="number"
                          value={p2}
                          onChange={(e) => setP2(e.target.value)}
                          placeholder="e.g., 120"
                          className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-400 text-sm mb-1 block">
                          Original Qty ({elasticityType === 'supply' ? 'Qs₀' : 'Qd₀'})
                        </label>
                        <input
                          type="number"
                          value={q1}
                          onChange={(e) => setQ1(e.target.value)}
                          placeholder="e.g., 500"
                          className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                      <div>
                        <label className="text-slate-400 text-sm mb-1 block">
                          New Qty ({elasticityType === 'supply' ? 'Qs₁' : 'Qd₁'})
                        </label>
                        <input
                          type="number"
                          value={q2}
                          onChange={(e) => setQ2(e.target.value)}
                          placeholder="e.g., 400"
                          className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Income inputs */}
                {elasticityType === 'income' && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-400 text-sm mb-1 block">Original Income (Y₀)</label>
                        <input
                          type="number"
                          value={y1}
                          onChange={(e) => setY1(e.target.value)}
                          placeholder="e.g., 20000"
                          className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                      <div>
                        <label className="text-slate-400 text-sm mb-1 block">New Income (Y₁)</label>
                        <input
                          type="number"
                          value={y2}
                          onChange={(e) => setY2(e.target.value)}
                          placeholder="e.g., 25000"
                          className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-400 text-sm mb-1 block">Original Qty (Qd₀)</label>
                        <input
                          type="number"
                          value={q1}
                          onChange={(e) => setQ1(e.target.value)}
                          placeholder="e.g., 10"
                          className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                      <div>
                        <label className="text-slate-400 text-sm mb-1 block">New Qty (Qd₁)</label>
                        <input
                          type="number"
                          value={q2}
                          onChange={(e) => setQ2(e.target.value)}
                          placeholder="e.g., 15"
                          className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Cross elasticity inputs */}
                {elasticityType === 'cross' && (
                  <>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 mb-4">
                      <p className="text-blue-300 text-sm">
                        💡 Enter the price change of <strong>Good B</strong> and how it affects the quantity demanded of <strong>Good A</strong>
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-400 text-sm mb-1 block">Original Price of B (Pb₀)</label>
                        <input
                          type="number"
                          value={pB1}
                          onChange={(e) => setPB1(e.target.value)}
                          placeholder="e.g., 50"
                          className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                      <div>
                        <label className="text-slate-400 text-sm mb-1 block">New Price of B (Pb₁)</label>
                        <input
                          type="number"
                          value={pB2}
                          onChange={(e) => setPB2(e.target.value)}
                          placeholder="e.g., 60"
                          className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-400 text-sm mb-1 block">Original Qty of A (Qa₀)</label>
                        <input
                          type="number"
                          value={q1}
                          onChange={(e) => setQ1(e.target.value)}
                          placeholder="e.g., 100"
                          className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                      <div>
                        <label className="text-slate-400 text-sm mb-1 block">New Qty of A (Qa₁)</label>
                        <input
                          type="number"
                          value={q2}
                          onChange={(e) => setQ2(e.target.value)}
                          placeholder="e.g., 120"
                          className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={calculate}
                  disabled={!currentResult}
                  className="flex-1 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Calculate
                </button>
                <button
                  onClick={clearInputs}
                  className="px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>

            {/* Result Section */}
            <div className="space-y-4">
              {/* Live Result */}
              {currentResult ? (
                <div className="bg-slate-800 rounded-xl p-5">
                  <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                    <span>🎯</span> Result
                  </h3>

                  {/* Value Display */}
                  <div className={`${currentResult.color} rounded-xl p-6 text-center mb-4`}>
                    <div className="text-5xl font-bold text-white mb-2">
                      {currentResult.value.toFixed(2)}
                    </div>
                    <div className="text-white/90 font-medium">
                      {currentResult.category}
                    </div>
                  </div>

                  {/* Interpretation */}
                  <div className="bg-slate-700/50 rounded-lg p-4 mb-4">
                    <h4 className="text-slate-400 text-sm mb-2">📖 Interpretation</h4>
                    <p className="text-white leading-relaxed">{currentResult.interpretation}</p>
                  </div>

                  {/* Examples */}
                  <div>
                    <h4 className="text-slate-400 text-sm mb-2">💡 Examples</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentResult.examples.map((ex, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-800 rounded-xl p-8 text-center text-slate-400">
                  <div className="text-5xl mb-4">📊</div>
                  <p>Enter values to see the result</p>
                </div>
              )}

              {/* Formula Reference */}
              <div className="bg-slate-800 rounded-xl p-5">
                <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                  <span>📐</span> Formula Reference
                </h3>
                <div className="space-y-3 text-sm">
                  {elasticityType === 'price' && (
                    <>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-orange-400 font-medium mb-1">Percentage Method:</div>
                        <div className="text-slate-300 font-mono">Ed = (%ΔQd / %ΔP)</div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <div className="text-orange-400 font-medium mb-1">Ratio Method:</div>
                        <div className="text-slate-300 font-mono">Ed = (ΔQ/ΔP) × (P/Q)</div>
                      </div>
                    </>
                  )}
                  {elasticityType === 'income' && (
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <div className="text-orange-400 font-medium mb-1">Income Elasticity:</div>
                      <div className="text-slate-300 font-mono">Ey = (%ΔQd / %ΔY)</div>
                    </div>
                  )}
                  {elasticityType === 'cross' && (
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <div className="text-orange-400 font-medium mb-1">Cross Elasticity:</div>
                      <div className="text-slate-300 font-mono">Ec = (%ΔQa / %ΔPb)</div>
                    </div>
                  )}
                  {elasticityType === 'supply' && (
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <div className="text-orange-400 font-medium mb-1">Supply Elasticity:</div>
                      <div className="text-slate-300 font-mono">Es = (%ΔQs / %ΔP)</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Calculation History */}
          {history.length > 0 && (
            <div className="mt-6 bg-slate-800 rounded-xl p-5">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span>📜</span> Calculation History
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {history.map((item, i) => (
                  <div key={i} className={`${item.result.color} rounded-lg p-3`}>
                    <div className="flex items-center justify-between text-white mb-1">
                      <span className="font-medium capitalize">{item.type}</span>
                      <span className="font-bold">{item.result.value.toFixed(2)}</span>
                    </div>
                    <div className="text-white/70 text-xs">{item.result.category}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EcoElasticityCalc;
