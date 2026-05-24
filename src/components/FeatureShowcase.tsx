import { useState } from 'react';
import { 
  TrendingUp, 
  PieChart, 
  Layers, 
  ShieldCheck, 
  TrendingDown, 
  Award, 
  MessageSquare, 
  Lock, 
  Search,
  MessageCircle,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface FeatureShowcaseProps {
  activeIndex: number;
}

export default function FeatureShowcase({ activeIndex }: FeatureShowcaseProps) {
  // Mutual Fund Analysis active sub-tab
  const [mfTab, setMfTab] = useState<'overview' | 'peer' | 'whatif'>('overview');
  // Performance Attribution active sub-tab
  const [attribTab, setAttribTab] = useState<'overview' | 'analysis' | 'reconciliation'>('overview');
  // Exposure Tracking active states
  const [exposureUnit, setExposureUnit] = useState<'$' | '%'>('$');
  const [exposureLevel, setExposureLevel] = useState<'Asset Class' | 'Total Group' | 'Sub-Asset' | 'Entity'>('Asset Class');
  const [exposureDropdownOpen, setExposureDropdownOpen] = useState(false);

  // Private Equity active states
  const [peTab, setPeTab] = useState<'summary' | 'pme' | 'vintage'>('pme');
  const [peSubTab, setPeSubTab] = useState<'scatter' | 'pmeBench' | 'scenario'>('scatter');
  const [peNavMultiplier, setPeNavMultiplier] = useState<number>(1.0);
  const [peExitHorizon, setPeExitHorizon] = useState<number>(3);
  const [peCapitalDeployment, setPeCapitalDeployment] = useState<number>(80);

  // Render correct showcase layout based on feature index
  switch (activeIndex) {
    case 0: // Performance Attribution
      return (
        <div className="flex flex-col gap-3 h-full justify-between animate-fadeIn text-pearl">
          <div>
            {/* Header / Sub-tabs */}
            <div className="flex justify-between items-center border-b border-tealmint/10 pb-2 mb-2 flex-wrap gap-2">
              <div>
                <h4 className="text-xs md:text-sm font-semibold text-pearl flex items-center gap-1.5">
                  <TrendingUp size={14} className="text-tealmint" />
                  <span>Performance Attribution</span>
                </h4>
                <span className="text-[8px] font-mono text-pearl/40">Brinson-Fachler top-down attribution analysis</span>
              </div>

              {/* Sub-tab Switches */}
              <div className="flex bg-navy border border-tealmint/15 rounded-lg p-0.5 text-[8px] font-mono shrink-0">
                <button
                  onClick={() => setAttribTab('overview')}
                  className={`px-2 py-0.5 rounded transition-all ${
                    attribTab === 'overview' ? 'bg-ocean text-pearl font-semibold' : 'text-pearl/60 hover:text-pearl'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setAttribTab('analysis')}
                  className={`px-2 py-0.5 rounded transition-all ${
                    attribTab === 'analysis' ? 'bg-ocean text-pearl font-semibold' : 'text-pearl/60 hover:text-pearl'
                  }`}
                >
                  Analysis Chart
                </button>
                <button
                  onClick={() => setAttribTab('reconciliation')}
                  className={`px-2 py-0.5 rounded transition-all ${
                    attribTab === 'reconciliation' ? 'bg-ocean text-pearl font-semibold' : 'text-pearl/60 hover:text-pearl'
                  }`}
                >
                  Reconciliation
                </button>
              </div>
            </div>

            {/* Common KPIs Header */}
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="bg-[#0b141e] border border-tealmint/10 rounded-lg p-2 text-center">
                <span className="text-pearl/40 uppercase text-[6px] block font-mono leading-none">Portfolio Return</span>
                <span className="text-xs font-mono font-bold text-tealmint block mt-1">+10.50%</span>
              </div>
              <div className="bg-[#0b141e] border border-tealmint/10 rounded-lg p-2 text-center">
                <span className="text-pearl/40 uppercase text-[6px] block font-mono leading-none">Benchmark Return</span>
                <span className="text-xs font-mono font-bold text-pearl block mt-1">6.60%</span>
              </div>
              <div className="bg-[#0b141e] border border-tealmint/10 rounded-lg p-2 text-center">
                <span className="text-pearl/40 uppercase text-[6px] block font-mono leading-none">Active Return</span>
                <span className="text-xs font-mono font-bold text-tealmint block mt-1">+3.90%</span>
              </div>
              <div className="bg-[#0b141e] border border-tealmint/10 rounded-lg p-2 text-center">
                <span className="text-pearl/40 uppercase text-[6px] block font-mono leading-none">Attribution Sum</span>
                <span className="text-xs font-mono font-bold text-tealmint block mt-1">+2.13%</span>
              </div>
            </div>

            {/* TAB CONTENT: OVERVIEW */}
            {attribTab === 'overview' && (
              <div className="space-y-3 animate-fadeIn">
                {/* Table */}
                <div className="bg-[#0b141e] border border-tealmint/10 rounded-lg p-2.5 overflow-x-auto shadow-sm">
                  <span className="text-[8px] font-mono text-pearl/50 uppercase block mb-1.5">Absolute Contribution Breakdown</span>
                  <table className="w-full text-left font-mono text-[8px] leading-tight">
                    <thead>
                      <tr className="border-b border-pearl/10 text-pearl/40 uppercase text-[7px] tracking-wider">
                        <th className="pb-1">Asset Class</th>
                        <th className="pb-1 text-right">Weight</th>
                        <th className="pb-1 text-right">Return</th>
                        <th className="pb-1 text-right">Contribution</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-pearl/5">
                        <td className="py-1 text-pearl font-semibold">Equity</td>
                        <td className="py-1 text-right text-pearl/80">35.50%</td>
                        <td className="py-1 text-right text-tealmint">+15.00%</td>
                        <td className="py-1 text-right text-tealmint font-semibold">+5.250%</td>
                      </tr>
                      <tr className="border-b border-pearl/5">
                        <td className="py-1 text-pearl font-semibold">Alternatives</td>
                        <td className="py-1 text-right text-pearl/80">28.00%</td>
                        <td className="py-1 text-right text-tealmint">+12.00%</td>
                        <td className="py-1 text-right text-tealmint font-semibold">+3.600%</td>
                      </tr>
                      <tr className="border-b border-pearl/5">
                        <td className="py-1 text-pearl font-semibold">Fixed Income</td>
                        <td className="py-1 text-right text-pearl/80">16.50%</td>
                        <td className="py-1 text-right text-tealmint">+7.00%</td>
                        <td className="py-1 text-right text-tealmint font-semibold">+1.155%</td>
                      </tr>
                      <tr className="border-b border-pearl/5">
                        <td className="py-1 text-pearl font-semibold">Private Equity</td>
                        <td className="py-1 text-right text-pearl/80">20.00%</td>
                        <td className="py-1 text-right text-tealmint">+10.00%</td>
                        <td className="py-1 text-right text-tealmint font-semibold">+2.000%</td>
                      </tr>
                      <tr className="border-b border-pearl/5">
                        <td className="py-1 text-pearl font-semibold">Cash & Equiv</td>
                        <td className="py-1 text-right text-pearl/80">12.00%</td>
                        <td className="py-1 text-right text-tealmint">+2.00%</td>
                        <td className="py-1 text-right text-tealmint font-semibold">+0.240%</td>
                      </tr>
                      <tr className="font-bold text-tealmint">
                        <td className="py-1 uppercase text-tealmint">Total Portfolio</td>
                        <td className="py-1 text-right">100.00%</td>
                        <td className="py-1 text-right">+10.50%</td>
                        <td className="py-1 text-right">+10.500%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Key Insights */}
                <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-3 shadow-sm text-left">
                  <span className="text-tealmint font-mono font-bold uppercase text-[7px] tracking-wider block mb-1">Advanced Contribution Insights</span>
                  <ul className="font-mono text-[7px] text-pearl/70 space-y-1 list-disc pl-3 leading-relaxed">
                    <li>Equity shows strongest alpha generation with +2.050% contribution gap vs. benchmark.</li>
                    <li>Alpha Tech has highest contribution efficiency (0.180x) — strong return per unit of weight.</li>
                    <li>Contribution dispersion is 0.427% — returns are concentrated in few holdings.</li>
                  </ul>
                </div>
              </div>
            )}

            {/* TAB CONTENT: ANALYSIS CHART */}
            {attribTab === 'analysis' && (
              <div className="space-y-3 animate-fadeIn">
                {/* Attribution Effects Breakdown */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#0b141e] border border-tealmint/10 rounded-lg p-2 flex items-center justify-between shadow-sm">
                    <div>
                      <span className="text-[6px] font-mono text-pearl/40 uppercase block">Allocation Effect</span>
                      <span className="text-xs font-mono font-bold text-tealmint block mt-0.5">+0.06%</span>
                    </div>
                    <span className="text-[5px] font-mono text-pearl/40 w-20 text-right leading-none">Weight tilts vs benchmark</span>
                  </div>
                  <div className="bg-[#0b141e] border border-tealmint/10 rounded-lg p-2 flex items-center justify-between shadow-sm">
                    <div>
                      <span className="text-[6px] font-mono text-pearl/40 uppercase block">Selection Effect</span>
                      <span className="text-xs font-mono font-bold text-tealmint block mt-0.5">+2.06%</span>
                    </div>
                    <span className="text-[5px] font-mono text-pearl/40 w-20 text-right leading-none">Security return overrides</span>
                  </div>
                </div>

                {/* Attribution Analysis Chart */}
                <div className="bg-[#0b141e] border border-tealmint/10 rounded-lg p-2.5 flex flex-col justify-between shadow-sm h-36">
                  <span className="text-[8px] font-mono text-pearl/50 uppercase">Attribution Analysis by Asset Class</span>
                  
                  {/* Custom Vertical Bar Chart */}
                  <div className="relative h-20 w-full border-b border-pearl/10 flex items-end justify-around pt-2">
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-5">
                      <div className="border-b border-pearl" />
                      <div className="border-b border-pearl" />
                      <div className="border-b border-pearl" />
                    </div>

                    {/* Equity: Selection +0.62%, Allocation +0.01% */}
                    <div className="flex flex-col items-center">
                      <div className="flex items-end gap-0.5 h-12">
                        <div className="w-1.5 bg-ocean h-1 rounded-t-sm" title="Allocation: +0.01%" />
                        <div className="w-1.5 bg-tealmint h-10 rounded-t-sm" title="Selection: +0.62%" />
                      </div>
                      <span className="text-[6px] font-mono text-pearl/50 mt-1">Equity</span>
                    </div>

                    {/* Fixed Income: Allocation -0.02%, Selection +0.25% */}
                    <div className="flex flex-col items-center">
                      <div className="flex items-end gap-0.5 h-12">
                        <div className="w-1.5 bg-red-400/50 h-1.5 rounded-b-sm" title="Allocation: -0.02%" />
                        <div className="w-1.5 bg-tealmint h-4 rounded-t-sm" title="Selection: +0.25%" />
                      </div>
                      <span className="text-[6px] font-mono text-pearl/50 mt-1">FI</span>
                    </div>

                    {/* Alternatives: Allocation +0.02%, Selection +0.40% */}
                    <div className="flex flex-col items-center">
                      <div className="flex items-end gap-0.5 h-12">
                        <div className="w-1.5 bg-ocean h-1 rounded-t-sm" title="Allocation: +0.02%" />
                        <div className="w-1.5 bg-tealmint h-7 rounded-t-sm" title="Selection: +0.40%" />
                      </div>
                      <span className="text-[6px] font-mono text-pearl/50 mt-1">Alts</span>
                    </div>

                    {/* Private Equity: Selection +0.70% */}
                    <div className="flex flex-col items-center">
                      <div className="flex items-end gap-0.5 h-12">
                        <div className="w-1.5 bg-ocean h-0.5 rounded-t-sm" />
                        <div className="w-1.5 bg-tealmint h-11 rounded-t-sm" title="Selection: +0.70%" />
                      </div>
                      <span className="text-[6px] font-mono text-pearl/50 mt-1">PE</span>
                    </div>

                    {/* Cash & Equiv */}
                    <div className="flex flex-col items-center">
                      <div className="flex items-end gap-0.5 h-12">
                        <div className="w-1.5 bg-ocean h-0.5 rounded-t-sm" />
                        <div className="w-1.5 bg-tealmint h-0.5 rounded-t-sm" />
                      </div>
                      <span className="text-[6px] font-mono text-pearl/50 mt-1">Cash</span>
                    </div>
                  </div>

                  {/* Chart Legend */}
                  <div className="flex gap-4 justify-center text-[6px] font-mono text-pearl/40 mt-1">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-1 bg-ocean rounded-sm" />
                      <span>Allocation Effect</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-1 bg-tealmint rounded-sm" />
                      <span>Selection Effect</span>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: RECONCILIATION */}
            {attribTab === 'reconciliation' && (
              <div className="space-y-3 animate-fadeIn">
                {/* Attribution Reconciliation Table */}
                <div className="bg-[#0b141e] border border-tealmint/10 rounded-lg p-2 shadow-sm">
                  <span className="text-[8px] font-mono text-pearl/50 uppercase block mb-1">Attribution Reconciliation Ledger</span>
                  <div className="space-y-1 font-mono text-[7px] leading-tight">
                    <div className="flex justify-between items-center border-b border-pearl/5 pb-0.5">
                      <span className="text-pearl/65">Portfolio Return</span>
                      <span className="text-pearl font-bold">+10.50%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-pearl/5 pb-0.5">
                      <span className="text-pearl/65">Benchmark Return</span>
                      <span className="text-pearl">6.60%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-pearl/5 pb-0.5 text-tealmint font-semibold">
                      <span>Active Return (Outperformance)</span>
                      <span>+3.90%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-pearl/5 pb-0.5 text-pearl/50 pl-3">
                      <span>+ Allocation Effect</span>
                      <span>+0.06%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-pearl/5 pb-0.5 text-pearl/50 pl-3">
                      <span>+ Selection Effect</span>
                      <span>+2.06%</span>
                    </div>
                    <div className="flex justify-between items-center font-bold text-tealmint pl-3">
                      <span>= Attribution Total Explained</span>
                      <span>+2.12%</span>
                    </div>
                  </div>
                </div>

                {/* Contributors Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {/* Top 3 Contributors */}
                  <div className="bg-[#0b141e] border border-tealmint/10 rounded-lg p-2 shadow-sm">
                    <span className="text-[7px] font-mono text-tealmint uppercase tracking-wider block font-bold mb-1">Top Contributors</span>
                    <div className="space-y-1 font-mono text-[6px] leading-none">
                      <div className="flex justify-between text-pearl/80 border-b border-pearl/5 pb-0.5">
                        <span>Alpha Tech</span>
                        <span className="text-tealmint font-semibold">+1.80%</span>
                      </div>
                      <div className="flex justify-between text-pearl/80 border-b border-pearl/5 pb-0.5">
                        <span>HealthPlus</span>
                        <span className="text-tealmint font-semibold">+1.32%</span>
                      </div>
                      <div className="flex justify-between text-pearl/80">
                        <span>Global Consumer</span>
                        <span className="text-tealmint font-semibold">+0.98%</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom 3 Contributors */}
                  <div className="bg-[#0b141e] border border-tealmint/10 rounded-lg p-2 shadow-sm">
                    <span className="text-[7px] font-mono text-red-400 uppercase tracking-wider block font-bold mb-1">Bottom Contributors</span>
                    <div className="space-y-1 font-mono text-[6px] leading-none">
                      <div className="flex justify-between text-pearl/80 border-b border-pearl/5 pb-0.5">
                        <span>Liquidity Reserve</span>
                        <span className="text-red-400 font-semibold">-0.04%</span>
                      </div>
                      <div className="flex justify-between text-pearl/80 border-b border-pearl/5 pb-0.5">
                        <span>Short Gov</span>
                        <span className="text-red-400 font-semibold">-0.06%</span>
                      </div>
                      <div className="flex justify-between text-pearl/80">
                        <span>Securities Fund</span>
                        <span className="text-red-400 font-semibold">-0.10%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Manager Insight constant Footer */}
          <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-2.5 shadow-md text-left">
            <span className="text-tealmint font-mono font-bold uppercase text-[7px] tracking-wider block mb-0.5">Attribution Audit Insight</span>
            <p className="font-mono text-[7px] text-pearl/70 leading-relaxed">
              Your overweight in tech selection added 124 bps of relative performance, offsetting a slight allocation drag in fixed income. Standard Brinson tilts are fully reconciled.
            </p>
          </div>
        </div>
      );

    case 1: // Asset Allocation Analysis
      return (
        <div className="flex flex-col gap-4 h-full justify-between animate-fadeIn text-pearl">
          <div>
            <div className="flex justify-between items-center border-b border-tealmint/10 pb-3 mb-2">
              <div>
                <h4 className="text-sm font-semibold text-pearl flex items-center gap-1.5">
                  <PieChart size={14} className="text-tealmint" />
                  <span>Granular Asset Allocation</span>
                </h4>
                <span className="text-[9px] font-mono text-pearl/40">Multi-Entity Concentration Exposures</span>
              </div>
            </div>

            {/* Sunburst-like Ring Visualizer */}
            <div className="flex items-center justify-around mt-4">
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Level 1: Core segments */}
                  <circle cx="50" cy="50" r="38" fill="transparent" stroke="#176B87" strokeWidth="6" strokeDasharray="140 100" />
                  <circle cx="50" cy="50" r="38" fill="transparent" stroke="#64CCC5" strokeWidth="6" strokeDasharray="80 160" strokeDashoffset="-140" />
                  {/* Level 2: Sub-asset classes */}
                  <circle cx="50" cy="50" r="28" fill="transparent" stroke="#DAFFFB" strokeWidth="4" strokeDasharray="100 140" />
                  <circle cx="50" cy="50" r="28" fill="transparent" stroke="rgba(100,204,197,0.3)" strokeWidth="4" strokeDasharray="60 180" strokeDashoffset="-100" />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-xs font-mono font-bold text-pearl">$257.8M</span>
                  <span className="text-[7px] text-pearl/40 uppercase tracking-widest">AUM</span>
                </div>
              </div>

              {/* Legends list */}
              <div className="font-mono text-[9px] space-y-2 text-pearl/80">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded bg-ocean inline-block" />
                  <span>Alternatives (63.5%)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded bg-tealmint inline-block" />
                  <span>Equities (27.3%)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded bg-pearl inline-block" />
                  <span>Fixed Income (9.0%)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-2.5 text-center">
              <span className="text-[8px] font-mono text-pearl/50 uppercase">HHI Index</span>
              <span className="block text-sm font-mono font-semibold text-tealmint mt-0.5">0.142 (Low)</span>
            </div>
            <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-2.5 text-center">
              <span className="text-[8px] font-mono text-pearl/50 uppercase">Max Entity Conc</span>
              <span className="block text-sm font-mono font-semibold text-tealmint mt-0.5">14.2%</span>
            </div>
          </div>
        </div>
      );

    case 2: { // Exposure Tracking
      const y24Vals = exposureUnit === '$' 
        ? { eq: '$104M', fi: '$58M', al: '$78M', pe: '$52M', ca: '$24M' } 
        : { eq: '33.0%', fi: '18.4%', al: '24.8%', pe: '16.5%', ca: '7.3%' };
      const y25Vals = exposureUnit === '$' 
        ? { eq: '$112M', fi: '$59M', al: '$76M', pe: '$50M', ca: '$22M' } 
        : { eq: '35.1%', fi: '18.5%', al: '23.8%', pe: '15.7%', ca: '6.9%' };

      return (
        <div className="flex flex-col gap-3 h-full justify-between animate-fadeIn text-pearl">
          <div>
            {/* Header / Sub-controls */}
            <div className="flex justify-between items-center border-b border-tealmint/10 pb-2 mb-2 flex-wrap gap-2 relative z-20">
              <div>
                <h4 className="text-xs md:text-sm font-semibold text-pearl flex items-center gap-1.5">
                  <TrendingUp size={14} className="text-tealmint" />
                  <span>Exposure Trend</span>
                </h4>
              </div>

              {/* Right Side Controls */}
              <div className="flex items-center gap-2 text-[8px] font-mono shrink-0">
                {/* Expandable Level Dropdown */}
                <div className="relative">
                  <button 
                    onClick={() => setExposureDropdownOpen(!exposureDropdownOpen)}
                    className="flex items-center gap-1 px-2 py-0.5 rounded bg-navy border border-tealmint/15 text-pearl hover:border-tealmint/30 transition-colors"
                  >
                    <span>{exposureLevel}</span>
                    <span className="text-[6px]">▼</span>
                  </button>
                  {exposureDropdownOpen && (
                    <div className="absolute right-0 top-6 bg-navy border border-tealmint/25 rounded-md shadow-xl p-1 z-30 flex flex-col gap-0.5 w-24">
                      {['Total Group', 'Asset Class', 'Sub-Asset', 'Entity'].map((lvl) => (
                        <button
                          key={lvl}
                          onClick={() => {
                            setExposureLevel(lvl as any);
                            setExposureDropdownOpen(false);
                          }}
                          className={`px-1.5 py-0.5 text-left rounded text-[7px] w-full transition-colors ${
                            exposureLevel === lvl 
                              ? 'bg-ocean text-pearl font-semibold' 
                              : 'text-pearl/60 hover:bg-pearl/5 hover:text-pearl'
                          }`}
                        >
                          {lvl === exposureLevel ? '✓ ' : ''}{lvl}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Absolute / Percent Switch */}
                <div className="flex bg-navy border border-tealmint/15 rounded p-0.5 text-[8px] font-mono">
                  <button
                    onClick={() => setExposureUnit('$')}
                    className={`px-1.5 py-0.5 rounded transition-all ${
                      exposureUnit === '$' ? 'bg-ocean text-pearl font-semibold' : 'text-pearl/60 hover:text-pearl'
                    }`}
                  >
                    $
                  </button>
                  <button
                    onClick={() => setExposureUnit('%')}
                    className={`px-1.5 py-0.5 rounded transition-all ${
                      exposureUnit === '%' ? 'bg-ocean text-pearl font-semibold' : 'text-pearl/60 hover:text-pearl'
                    }`}
                  >
                    %
                  </button>
                </div>
              </div>
            </div>

            {/* Timeline Slider Indicator */}
            <div className="flex items-center justify-between font-mono text-[7px] text-pearl/50 py-1.5 px-2 bg-[#0b141e]/50 rounded-lg border border-tealmint/5 mb-2 relative z-10">
              <span className="text-tealmint font-semibold">2024</span>
              <div className="flex-1 mx-3 h-0.5 bg-tealmint/20 relative rounded">
                <div className="absolute left-[30%] right-0 h-0.5 bg-tealmint rounded" />
                <div className="absolute right-0 -top-1 w-2.5 h-2.5 rounded-full bg-tealmint shadow-md border border-[#04090e] cursor-pointer" />
              </div>
              <span className="text-tealmint font-semibold">2025</span>
            </div>

            {/* Double Grouped Column Chart */}
            <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-3 flex flex-col justify-between shadow-md h-52 relative z-10">
              <span className="text-[8px] font-mono text-pearl/50 uppercase">Exposure Trend by Asset Class</span>
              
              <div className="relative h-32 w-full border-b border-pearl/10 flex items-end justify-around pt-4">
                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-5">
                  <div className="border-b border-pearl" />
                  <div className="border-b border-pearl" />
                  <div className="border-b border-pearl" />
                </div>

                {/* 2024 Year Block */}
                <div className="flex flex-col items-center gap-1.5 flex-1 max-w-[150px]">
                  <div className="flex items-end gap-1 h-24">
                    <div className="w-2 bg-[#3b82f6] h-20 rounded-t-sm relative group/bar" title={`Equity 24: ${y24Vals.eq}`}>
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[6px] font-mono text-pearl opacity-0 group-hover/bar:opacity-100 transition-opacity bg-navy/90 border border-[#3b82f6]/30 px-0.5 rounded leading-none whitespace-nowrap z-40">{y24Vals.eq}</span>
                    </div>
                    <div className="w-2 bg-[#10b981] h-11 rounded-t-sm relative group/bar" title={`FI 24: ${y24Vals.fi}`}>
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[6px] font-mono text-pearl opacity-0 group-hover/bar:opacity-100 transition-opacity bg-navy/90 border border-[#10b981]/30 px-0.5 rounded leading-none whitespace-nowrap z-40">{y24Vals.fi}</span>
                    </div>
                    <div className="w-2 bg-[#f59e0b] h-16 rounded-t-sm relative group/bar" title={`Alts 24: ${y24Vals.al}`}>
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[6px] font-mono text-pearl opacity-0 group-hover/bar:opacity-100 transition-opacity bg-navy/90 border border-[#f59e0b]/30 px-0.5 rounded leading-none whitespace-nowrap z-40">{y24Vals.al}</span>
                    </div>
                    <div className="w-2 bg-[#f97316] h-12 rounded-t-sm relative group/bar" title={`PE 24: ${y24Vals.pe}`}>
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[6px] font-mono text-pearl opacity-0 group-hover/bar:opacity-100 transition-opacity bg-navy/90 border border-[#f97316]/30 px-0.5 rounded leading-none whitespace-nowrap z-40">{y24Vals.pe}</span>
                    </div>
                    <div className="w-2 bg-[#ef4444] h-6 rounded-t-sm relative group/bar" title={`Cash 24: ${y24Vals.ca}`}>
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[6px] font-mono text-pearl opacity-0 group-hover/bar:opacity-100 transition-opacity bg-navy/90 border border-[#ef4444]/30 px-0.5 rounded leading-none whitespace-nowrap z-40">{y24Vals.ca}</span>
                    </div>
                  </div>
                  <span className="text-[8px] font-mono text-tealmint font-semibold border-t border-tealmint/20 pt-0.5 px-2 w-full text-center">2024</span>
                </div>

                {/* Spacer block between years */}
                <div className="w-2 shrink-0" />

                {/* 2025 Year Block */}
                <div className="flex flex-col items-center gap-1.5 flex-1 max-w-[150px]">
                  <div className="flex items-end gap-1 h-24">
                    <div className="w-2 bg-[#3b82f6] h-22 rounded-t-sm relative group/bar" title={`Equity 25: ${y25Vals.eq}`}>
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[6px] font-mono text-pearl opacity-0 group-hover/bar:opacity-100 transition-opacity bg-navy/90 border border-[#3b82f6]/30 px-0.5 rounded leading-none whitespace-nowrap z-40">{y25Vals.eq}</span>
                    </div>
                    <div className="w-2 bg-[#10b981] h-12 rounded-t-sm relative group/bar" title={`FI 25: ${y25Vals.fi}`}>
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[6px] font-mono text-pearl opacity-0 group-hover/bar:opacity-100 transition-opacity bg-navy/90 border border-[#10b981]/30 px-0.5 rounded leading-none whitespace-nowrap z-40">{y25Vals.fi}</span>
                    </div>
                    <div className="w-2 bg-[#f59e0b] h-15 rounded-t-sm relative group/bar" title={`Alts 25: ${y25Vals.al}`}>
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[6px] font-mono text-pearl opacity-0 group-hover/bar:opacity-100 transition-opacity bg-navy/90 border border-[#f59e0b]/30 px-0.5 rounded leading-none whitespace-nowrap z-40">{y25Vals.al}</span>
                    </div>
                    <div className="w-2 bg-[#f97316] h-10 rounded-t-sm relative group/bar" title={`PE 25: ${y25Vals.pe}`}>
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[6px] font-mono text-pearl opacity-0 group-hover/bar:opacity-100 transition-opacity bg-navy/90 border border-[#f97316]/30 px-0.5 rounded leading-none whitespace-nowrap z-40">{y25Vals.pe}</span>
                    </div>
                    <div className="w-2 bg-[#ef4444] h-5 rounded-t-sm relative group/bar" title={`Cash 25: ${y25Vals.ca}`}>
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[6px] font-mono text-pearl opacity-0 group-hover/bar:opacity-100 transition-opacity bg-navy/90 border border-[#ef4444]/30 px-0.5 rounded leading-none whitespace-nowrap z-40">{y25Vals.ca}</span>
                    </div>
                  </div>
                  <span className="text-[8px] font-mono text-tealmint font-semibold border-t border-tealmint/20 pt-0.5 px-2 w-full text-center">2025</span>
                </div>
              </div>

              {/* Legends list */}
              <div className="flex flex-wrap gap-x-2 gap-y-0.5 justify-center text-[5.5px] font-mono text-pearl/50 mt-2 px-1">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-sm" />
                  <span>Equity</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#10b981] rounded-sm" />
                  <span>Fixed Income</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#f59e0b] rounded-sm" />
                  <span>Alternatives</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#f97316] rounded-sm" />
                  <span>Private Equity</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#ef4444] rounded-sm" />
                  <span>Cash & Equiv</span>
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-2.5 font-mono text-[7px] leading-relaxed text-left">
            <span className="text-tealmint uppercase tracking-wider block font-bold mb-0.5">Asset Exposure Auditor</span>
            Comparing 2024 vs 2025 allocation targets. Equities exposure expanded by +2.1% due to market appreciation. Alternatives remain weighted at 23.8% target boundaries.
          </div>
        </div>
      );
    }

    case 3: // Drawdown & Risk Analytics
      return (
        <div className="flex flex-col gap-4 h-full justify-between animate-fadeIn text-pearl">
          <div>
            <div className="flex justify-between items-center border-b border-tealmint/10 pb-3 mb-2">
              <div>
                <h4 className="text-sm font-semibold text-pearl flex items-center gap-1.5">
                  <TrendingDown size={14} className="text-red-400" />
                  <span>Monte Carlo Path Simulation</span>
                </h4>
                <span className="text-[9px] font-mono text-pearl/40">Portfolio Return Probabilities (24 Months)</span>
              </div>
            </div>

            {/* Risk simulated paths SVG */}
            <div className="relative h-36 w-full border-b border-l border-pearl/15 mt-6">
              <svg className="w-full h-full" viewBox="0 0 500 150" preserveAspectRatio="none">
                <line x1="0" y1="75" x2="500" y2="75" stroke="rgba(218,255,251,0.1)" strokeDasharray="4" />
                {/* High road */}
                <path d="M 0,75 Q 100,60 200,50 T 400,30 T 500,20" fill="none" stroke="#64CCC5" strokeWidth="1.5" strokeDasharray="2" />
                {/* Mean road */}
                <path d="M 0,75 Q 100,70 200,68 T 400,55 T 500,48" fill="none" stroke="#64CCC5" strokeWidth="2.5" />
                {/* Low road */}
                <path d="M 0,75 Q 100,90 200,105 T 400,120 T 500,135" fill="none" stroke="#f87171" strokeWidth="1.5" strokeDasharray="2" />
              </svg>
              {/* Highlight Tag */}
              <div className="absolute top-2 left-[70%] bg-navy/90 border border-tealmint/25 rounded px-2 py-0.5 text-[8px] font-mono text-pearl">
                Mean Sharpe: 1.42
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 font-mono text-[9px] mt-2">
            <div className="bg-[#0b141e] border border-tealmint/10 rounded-lg p-2 text-center">
              <span className="text-pearl/50 uppercase text-[7px] block">95% VaR</span>
              <span className="text-red-400 font-bold block mt-0.5">-1.24%</span>
            </div>
            <div className="bg-[#0b141e] border border-tealmint/10 rounded-lg p-2 text-center">
              <span className="text-pearl/50 uppercase text-[7px] block">Max DD</span>
              <span className="text-red-400 font-bold block mt-0.5">-4.20%</span>
            </div>
            <div className="bg-[#0b141e] border border-tealmint/10 rounded-lg p-2 text-center">
              <span className="text-pearl/50 uppercase text-[7px] block">Sortino</span>
              <span className="text-tealmint font-bold block mt-0.5">1.84</span>
            </div>
          </div>
        </div>
      );

    case 4: { // Private Equity Intelligence
      return (
        <div className="flex flex-col gap-2.5 h-full justify-between animate-fadeIn text-pearl text-left">
          <div>
            {/* Header / Main Tabs */}
            <div className="flex justify-between items-center border-b border-tealmint/10 pb-2 mb-2 flex-wrap gap-2 text-left">
              <div>
                <h4 className="text-xs md:text-sm font-semibold text-pearl flex items-center gap-1.5">
                  <Layers size={14} className="text-tealmint" />
                  <span>Private Equity Intelligence</span>
                </h4>
                <span className="text-[8px] font-mono text-pearl/40">VC Funds & Direct Investments with mPME Benchmarking</span>
              </div>

              {/* Main Tab Options */}
              <div className="flex bg-navy border border-tealmint/15 rounded-lg p-0.5 text-[8px] font-mono shrink-0">
                <button
                  onClick={() => setPeTab('summary')}
                  className={`px-2 py-0.5 rounded transition-all ${peTab === 'summary' ? 'bg-tealmint text-navy font-bold' : 'text-pearl/60 hover:text-pearl'}`}
                >
                  Summary
                </button>
                <button
                  onClick={() => setPeTab('pme')}
                  className={`px-2 py-0.5 rounded transition-all ${peTab === 'pme' ? 'bg-tealmint text-navy font-bold' : 'text-pearl/60 hover:text-pearl'}`}
                >
                  Performance & mPME
                </button>
                <button
                  onClick={() => setPeTab('vintage')}
                  className={`px-2 py-0.5 rounded transition-all ${peTab === 'vintage' ? 'bg-tealmint text-navy font-bold' : 'text-pearl/60 hover:text-pearl'}`}
                >
                  Vintage & Pacing
                </button>
              </div>
            </div>

            {/* Sub Tabs (Only for Performance & mPME) */}
            {peTab === 'pme' && (
              <div className="flex gap-1.5 mb-2.5 pb-1.5 border-b border-tealmint/5 overflow-x-auto text-[8px] font-mono scrollbar-none">
                {[
                  { id: 'scatter', label: 'Scatter Analysis' },
                  { id: 'pmeBench', label: 'PME & Benchmarking' },
                  { id: 'scenario', label: 'Scenario Analysis' }
                ].map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => setPeSubTab(sub.id as any)}
                    className={`px-2.5 py-1 rounded-md border transition-all whitespace-nowrap ${
                      peSubTab === sub.id 
                        ? 'bg-[#102a43] border-tealmint/40 text-tealmint font-semibold shadow-inner shadow-tealmint/10' 
                        : 'bg-[#060d15] border-transparent text-pearl/50 hover:text-pearl/80 hover:border-tealmint/10'
                    }`}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            )}

            {/* Subview Renders */}
            {peTab === 'summary' && (
              <div className="space-y-3 animate-fadeIn text-left">
                {/* Executive Summary stats cards */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="bg-[#08121d] border border-tealmint/10 rounded-xl p-2.5">
                    <span className="text-[6.5px] font-mono text-pearl/40 uppercase block">Active AUM</span>
                    <span className="text-sm font-mono font-bold text-tealmint block mt-0.5">$257.8M</span>
                    <span className="text-[6px] font-mono text-pearl/30 block mt-0.5">17 Total Holdings</span>
                  </div>
                  <div className="bg-[#08121d] border border-tealmint/10 rounded-xl p-2.5">
                    <span className="text-[6.5px] font-mono text-pearl/40 uppercase block">DPI Multiple</span>
                    <span className="text-sm font-mono font-bold text-tealmint block mt-0.5">1.64x</span>
                    <span className="text-[6px] font-mono text-pearl/30 block mt-0.5 font-semibold">Realized Yield Boost</span>
                  </div>
                  <div className="bg-[#08121d] border border-tealmint/10 rounded-xl p-2.5">
                    <span className="text-[6.5px] font-mono text-pearl/40 uppercase block">Avg IRR</span>
                    <span className="text-sm font-mono font-bold text-purple-400 block mt-0.5">18.42%</span>
                    <span className="text-[6px] font-mono text-pearl/30 block mt-0.5">Vintage Net Yield</span>
                  </div>
                </div>

                {/* Investment list summary */}
                <div className="bg-[#08121d]/85 border border-tealmint/10 rounded-xl p-2.5 space-y-2">
                  <span className="text-[8px] font-semibold text-pearl block mb-1">Portfolio Strategy Breakdown</span>
                  <div className="space-y-1.5 font-mono text-[7px]">
                    {[
                      { name: 'Venture Capital Funds', commit: '$120.0M', pct: 60, color: 'bg-indigo-500' },
                      { name: 'Direct Co-Investments', commit: '$65.0M', pct: 25, color: 'bg-ocean' },
                      { name: 'Growth Equity Holdco', commit: '$35.0M', pct: 15, color: 'bg-tealmint' }
                    ].map((strat, i) => (
                      <div key={i} className="flex flex-col gap-0.5">
                        <div className="flex justify-between text-pearl/80">
                          <span>{strat.name}</span>
                          <span className="text-pearl/40">{strat.commit} ({strat.pct}%)</span>
                        </div>
                        <div className="w-full h-1 bg-navy rounded-full overflow-hidden">
                          <div className={`h-full ${strat.color}`} style={{ width: `${strat.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {peTab === 'pme' && peSubTab === 'scatter' && (
              <div className="animate-fadeIn">
                {/* Gross / Net IRR cards */}
                <div className="grid grid-cols-2 gap-2.5 mb-2.5 text-left">
                  <div className="bg-[#08121d]/80 border border-tealmint/10 rounded-xl p-2.5 shadow-lg relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-50 pointer-events-none" />
                    <span className="text-[7px] font-mono text-pearl/40 block tracking-wider uppercase">SI-IRR Gross</span>
                    <span className="text-lg md:text-xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300 block mt-0.5">
                      20.19%
                    </span>
                    <span className="text-[6.5px] font-mono text-pearl/30 block mt-0.5">Newton-Raphson from cash flows</span>
                  </div>
                  
                  <div className="bg-[#08121d]/80 border border-tealmint/10 rounded-xl p-2.5 shadow-lg relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent opacity-50 pointer-events-none" />
                    <span className="text-[7px] font-mono text-pearl/40 block tracking-wider uppercase">SI-IRR Net</span>
                    <span className="text-lg md:text-xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300 block mt-0.5">
                      20.19%
                    </span>
                    <span className="text-[6.5px] font-mono text-pearl/30 block mt-0.5">Shared Net SI-IRR</span>
                  </div>
                </div>

                {/* Bubble Scatter Plot */}
                <div className="relative bg-[#070e16]/80 border border-tealmint/10 rounded-xl p-2.5 mb-2.5 text-left">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[8px] font-semibold text-pearl/90">mPME vs Paid-In Capital</span>
                    <span className="text-[6.5px] font-mono text-pearl/40">Bubble size: Commitment | Hover for details</span>
                  </div>
                  
                  <div className="relative h-28 w-full border-l border-b border-pearl/10">
                    {/* Grid Lines */}
                    <div className="absolute left-[20%] top-0 bottom-0 border-r border-dashed border-pearl/5" />
                    <div className="absolute left-[40%] top-0 bottom-0 border-r border-dashed border-pearl/5" />
                    <div className="absolute left-[60%] top-0 bottom-0 border-r border-dashed border-pearl/5" />
                    <div className="absolute left-[80%] top-0 bottom-0 border-r border-dashed border-pearl/5" />
                    
                    <div className="absolute top-[25%] left-0 right-0 border-t border-dashed border-pearl/5" />
                    <div className="absolute top-[50%] left-0 right-0 border-t border-dashed border-pearl/5" />
                    <div className="absolute top-[75%] left-0 right-0 border-t border-dashed border-pearl/5" />

                    {/* Axis Labels */}
                    <span className="absolute bottom-0.5 right-1 text-[5.5px] font-mono text-pearl/45">$10M</span>
                    <span className="absolute bottom-0.5 left-[20%] -translate-x-1/2 text-[5.5px] font-mono text-pearl/30">$2M</span>
                    <span className="absolute bottom-0.5 left-[40%] -translate-x-1/2 text-[5.5px] font-mono text-pearl/30">$4M</span>
                    <span className="absolute bottom-0.5 left-[60%] -translate-x-1/2 text-[5.5px] font-mono text-pearl/30">$6M</span>
                    <span className="absolute bottom-0.5 left-[80%] -translate-x-1/2 text-[5.5px] font-mono text-pearl/30">$8M</span>
                    <span className="absolute left-1 top-0.5 text-[5.5px] font-mono text-pearl/45">2.0x mPME</span>
                    <span className="absolute left-1 top-[50%] -translate-y-1/2 text-[5.5px] font-mono text-pearl/30">1.0x</span>

                    {/* Scatter Bubbles */}
                    <div className="absolute inset-0 overflow-hidden">
                      {/* 2020 (blue) */}
                      <div className="absolute bottom-[65%] left-[25%] w-3 h-3 rounded-full bg-indigo-500/70 border border-indigo-400 group cursor-pointer hover:scale-125 transition-transform z-10">
                        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#0b141e] text-[5.5px] font-mono text-pearl border border-indigo-400 rounded px-1 hidden group-hover:block whitespace-nowrap z-30">
                          2020 Fund A | Paid-In: $2.5M | mPME: 1.30x
                        </span>
                      </div>
                      <div className="absolute bottom-[80%] left-[45%] w-4 h-4 rounded-full bg-indigo-500/70 border border-indigo-400 group cursor-pointer hover:scale-125 transition-transform z-10">
                        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#0b141e] text-[5.5px] font-mono text-pearl border border-indigo-400 rounded px-1 hidden group-hover:block whitespace-nowrap z-30">
                          2020 Fund B | Paid-In: $4.5M | mPME: 1.60x
                        </span>
                      </div>
                      <div className="absolute bottom-[45%] left-[78%] w-4.5 h-4.5 rounded-full bg-indigo-500/75 border border-indigo-400 group cursor-pointer hover:scale-125 transition-transform z-10">
                        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#0b141e] text-[5.5px] font-mono text-pearl border border-indigo-400 rounded px-1 hidden group-hover:block whitespace-nowrap z-30">
                          2020 Fund C | Paid-In: $7.8M | mPME: 0.90x
                        </span>
                      </div>

                      {/* 2021 (teal/cyan) */}
                      <div className="absolute bottom-[55%] left-[35%] w-3.5 h-3.5 rounded-full bg-ocean/70 border border-ocean/55 group cursor-pointer hover:scale-125 transition-transform z-10">
                        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#0b141e] text-[5.5px] font-mono text-pearl border border-ocean rounded px-1 hidden group-hover:block whitespace-nowrap z-30">
                          2021 Fund A | Paid-In: $3.5M | mPME: 1.10x
                        </span>
                      </div>
                      <div className="absolute bottom-[72%] left-[58%] w-4 h-4 rounded-full bg-ocean/70 border border-ocean/55 group cursor-pointer hover:scale-125 transition-transform z-10">
                        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#0b141e] text-[5.5px] font-mono text-pearl border border-ocean rounded px-1 hidden group-hover:block whitespace-nowrap z-30">
                          2021 Fund B | Paid-In: $5.8M | mPME: 1.44x
                        </span>
                      </div>
                      <div className="absolute bottom-[58%] left-[72%] w-4.5 h-4.5 rounded-full bg-ocean/70 border border-ocean/55 group cursor-pointer hover:scale-125 transition-transform z-10">
                        <span className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#0b141e] text-[5.5px] font-mono text-pearl border border-ocean rounded px-1 hidden group-hover:block whitespace-nowrap z-30">
                          2021 Direct A | Paid-In: $7.2M | mPME: 1.16x
                        </span>
                      </div>

                      {/* 2022 (green) */}
                      <div className="absolute bottom-[40%] left-[30%] w-4 h-4 rounded-full bg-tealmint/70 border border-tealmint/50 group cursor-pointer hover:scale-125 transition-transform z-10">
                        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#0b141e] text-[5.5px] font-mono text-pearl border border-tealmint rounded px-1 hidden group-hover:block whitespace-nowrap z-30">
                          2022 Fund A | Paid-In: $3.0M | mPME: 0.80x
                        </span>
                      </div>
                      <div className="absolute bottom-[75%] left-[62%] w-3.5 h-3.5 rounded-full bg-tealmint/70 border border-tealmint/50 group cursor-pointer hover:scale-125 transition-transform z-10">
                        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#0b141e] text-[5.5px] font-mono text-pearl border border-tealmint rounded px-1 hidden group-hover:block whitespace-nowrap z-30">
                          2022 Fund B | Paid-In: $6.2M | mPME: 1.50x
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Chart Legends */}
                  <div className="flex justify-center gap-4 text-[7px] font-mono text-pearl/50">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <span>2020 Vintage</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-ocean" />
                      <span>2021 Vintage</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-tealmint" />
                      <span>2022 Vintage</span>
                    </div>
                  </div>
                </div>

                {/* Sub-Charts (Histograms & realisation charts) */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#08121d] border border-tealmint/10 rounded-xl p-2">
                    <span className="text-[6.5px] font-mono text-pearl/40 block mb-1">SI-IRR Distribution</span>
                    <div className="h-10 flex items-end justify-around pb-0.5 pt-1">
                      {[
                        { range: '10-15%', val: 3, h: 'h-1/3' },
                        { range: '15-20%', val: 12, h: 'h-full' },
                        { range: '20-25%', val: 8, h: 'h-2/3' },
                        { range: '25%+', val: 4, h: 'h-2/5' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-0.5 w-1/4 group cursor-pointer">
                          <span className="text-[5px] text-pearl/30 font-mono hidden group-hover:block">{item.val}</span>
                          <div className={`w-3.5 bg-purple-400 rounded-t ${item.h} group-hover:bg-purple-300 transition-colors`} />
                          <span className="text-[4.5px] font-mono text-pearl/40">{item.range}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#08121d] border border-tealmint/10 rounded-xl p-2 flex flex-col justify-between">
                    <div className="flex justify-between items-center text-[6.5px] font-mono text-pearl/40">
                      <span>DPI vs mPME Realization</span>
                      <span>Efficiency Index</span>
                    </div>
                    <div className="h-10 w-full relative">
                      <svg className="w-full h-full" viewBox="0 0 100 40">
                        {/* Dots mapping realization efficiency */}
                        <circle cx="20" cy="30" r="1.5" fill="#3b82f6" />
                        <circle cx="35" cy="22" r="2" fill="#10b981" />
                        <circle cx="50" cy="18" r="1.8" fill="#10b981" />
                        <circle cx="65" cy="14" r="2.2" fill="#06b6d4" />
                        <circle cx="80" cy="8" r="1.5" fill="#3b82f6" />
                        <line x1="0" y1="35" x2="100" y2="5" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {peTab === 'pme' && peSubTab === 'pmeBench' && (
              <div className="animate-fadeIn space-y-2.5 text-left">
                {/* PME Metrics Strip */}
                <div className="grid grid-cols-5 gap-1 bg-[#08121d] border border-tealmint/10 rounded-xl p-2 text-center">
                  {[
                    { label: 'BENCHMARK', val: 'MSCI ACWI TR' },
                    { label: 'PORTFOLIO TVPI', val: '1.21x' },
                    { label: 'mPME SPREAD', val: '+20.8%pts', color: 'text-green-400' },
                    { label: 'SI-IRR GROSS', val: '20.19%' },
                    { label: 'BENCHMARK IRR', val: '15.2%' }
                  ].map((m, idx) => (
                    <div key={idx} className="flex flex-col justify-center py-0.5 border-r border-tealmint/5 last:border-r-0">
                      <span className="text-[5px] font-mono text-pearl/40 uppercase block tracking-wider leading-none">{m.label}</span>
                      <span className={`text-[7.5px] font-mono font-bold block mt-0.5 ${m.color || 'text-pearl'}`}>{m.val}</span>
                    </div>
                  ))}
                </div>

                {/* Left/Right Column Comparison Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5">
                  {/* Left Column: Investment Ranking */}
                  <div className="md:col-span-7 bg-[#08121d]/80 border border-tealmint/10 rounded-xl p-2.5 space-y-1.5">
                    <span className="text-[7.5px] font-semibold text-pearl/90 block mb-1">mPME by Investment (TVPI vs Benchmark)</span>
                    <div className="space-y-1">
                      {[
                        { name: 'Nimbus Cloud Solutions Inc.', val: '2.52x', pct: 90 },
                        { name: 'Acme Technologies Pvt Ltd', val: '2.45x', pct: 85 },
                        { name: 'NexGen Mobility Inc.', val: '2.23x', pct: 75 },
                        { name: 'Helix BioSciences Ltd', val: '2.15x', pct: 70 },
                        { name: 'Zephyr Digital Payments Ltd', val: '2.10x', pct: 68 }
                      ].map((item, idx) => (
                        <div key={idx} className="space-y-0.5">
                          <div className="flex justify-between font-mono text-[5.5px] text-pearl/70">
                            <span className="truncate max-w-[130px]">{item.name}</span>
                            <span className="text-tealmint font-bold">{item.val}</span>
                          </div>
                          <div className="w-full h-1 bg-navy rounded overflow-hidden">
                            <div className="h-full bg-green-500 rounded" style={{ width: `${item.pct}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Vintage Cohort Chart */}
                  <div className="md:col-span-5 bg-[#08121d]/80 border border-tealmint/10 rounded-xl p-2.5 flex flex-col justify-between">
                    <div className="text-[7.5px] font-semibold text-pearl/90 mb-1">Vintage Year SI-IRR & mPME</div>
                    <div className="h-[95px] w-full mt-1">
                      <svg className="w-full h-full" viewBox="0 0 200 100">
                        {/* Axes */}
                        <line x1="20" y1="80" x2="190" y2="80" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                        <line x1="20" y1="10" x2="20" y2="80" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                        
                        {/* Columns (Purple) */}
                        <rect x="40" y="25" width="16" height="55" fill="#a78bfa" rx="1.5" />
                        <rect x="95" y="15" width="16" height="65" fill="#8b5cf6" rx="1.5" />
                        <rect x="150" y="35" width="16" height="45" fill="#6366f1" rx="1.5" />
                        
                        {/* Green benchmark curve */}
                        <path d="M 48,55 Q 103,42 158,62" fill="none" stroke="#10b981" strokeWidth="1.5" />
                        <circle cx="158" cy="62" r="2" fill="#10b981" />
                        
                        {/* Labels */}
                        <text x="48" y="90" fill="rgba(255,255,255,0.4)" fontSize="6" textAnchor="middle" fontFamily="monospace">2020</text>
                        <text x="103" y="90" fill="rgba(255,255,255,0.4)" fontSize="6" textAnchor="middle" fontFamily="monospace">2021</text>
                        <text x="158" y="90" fill="rgba(255,255,255,0.4)" fontSize="6" textAnchor="middle" fontFamily="monospace">2022</text>
                        
                        {/* Tiny Legends */}
                        <rect x="25" y="5" width="6" height="3" fill="#8b5cf6" />
                        <text x="35" y="8" fill="rgba(255,255,255,0.5)" fontSize="4.5" fontFamily="monospace">SI-XIRR</text>
                        
                        <line x1="90" y1="6.5" x2="100" y2="6.5" stroke="#10b981" strokeWidth="1" />
                        <text x="104" y="8" fill="rgba(255,255,255,0.5)" fontSize="4.5" fontFamily="monospace">Benchmark</text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {peTab === 'pme' && peSubTab === 'scenario' && (
              <div className="animate-fadeIn text-left">
                {/* Sliders Area & Metrics outputs */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5">
                  {/* Sliders */}
                  <div className="md:col-span-6 space-y-2">
                    <div className="bg-[#0b141e]/90 border border-tealmint/10 rounded-xl p-2.5">
                      <div className="flex justify-between items-center mb-1 text-[7.5px] font-mono">
                        <span className="text-pearl/60">NAV Multiplier</span>
                        <span className="text-tealmint font-bold">{peNavMultiplier.toFixed(1)}x</span>
                      </div>
                      <input
                        type="range"
                        min="0.5"
                        max="2.0"
                        step="0.1"
                        value={peNavMultiplier}
                        onChange={(e) => setPeNavMultiplier(parseFloat(e.target.value))}
                        className="w-full h-1 bg-navy rounded-lg appearance-none cursor-pointer accent-tealmint"
                      />
                      <span className="text-[6px] font-mono text-pearl/30 block mt-0.5">Projected exit vs current NAV</span>
                    </div>

                    <div className="bg-[#0b141e]/90 border border-tealmint/10 rounded-xl p-2.5">
                      <div className="flex justify-between items-center mb-1 text-[7.5px] font-mono">
                        <span className="text-pearl/60">Exit Horizon</span>
                        <span className="text-tealmint font-bold">{peExitHorizon} years</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        step="1"
                        value={peExitHorizon}
                        onChange={(e) => setPeExitHorizon(parseInt(e.target.value))}
                        className="w-full h-1 bg-navy rounded-lg appearance-none cursor-pointer accent-tealmint"
                      />
                      <span className="text-[6px] font-mono text-pearl/30 block mt-0.5">Expected years to realization</span>
                    </div>

                    <div className="bg-[#0b141e]/90 border border-tealmint/10 rounded-xl p-2.5">
                      <div className="flex justify-between items-center mb-1 text-[7.5px] font-mono">
                        <span className="text-pearl/60">Capital Deployment</span>
                        <span className="text-tealmint font-bold">{peCapitalDeployment}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="5"
                        value={peCapitalDeployment}
                        onChange={(e) => setPeCapitalDeployment(parseInt(e.target.value))}
                        className="w-full h-1 bg-navy rounded-lg appearance-none cursor-pointer accent-tealmint"
                      />
                      <span className="text-[6px] font-mono text-pearl/30 block mt-0.5">% of unfunded deployed</span>
                    </div>
                  </div>

                  {/* Outputs */}
                  <div className="md:col-span-6 grid grid-cols-2 gap-2">
                    {[
                      { label: 'PROJECTED NAV', val: `$${(383.3 * peNavMultiplier).toFixed(1)}M`, color: 'text-pearl' },
                      { label: 'PROJECTED TVPI', val: `${(1.81 * peNavMultiplier).toFixed(2)}x`, color: 'text-tealmint' },
                      { label: 'PROJECTED DPI', val: `${(1.81 * (peCapitalDeployment / 100) * peNavMultiplier).toFixed(2)}x`, color: 'text-tealmint' },
                      { label: 'PROJECTED NET IRR', val: `${(9.6 * peNavMultiplier - (peExitHorizon - 3) * 0.4).toFixed(1)}%`, color: 'text-purple-400' }
                    ].map((m, idx) => (
                      <div key={idx} className="bg-[#08121d] border border-tealmint/10 rounded-xl p-2 flex flex-col justify-center text-left">
                        <span className="text-[5.5px] font-mono text-pearl/45 tracking-wider block">{m.label}</span>
                        <span className={`text-[11px] font-mono font-bold block mt-0.5 ${m.color}`}>{m.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Table Comparison & Sensitivity Line Chart */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 mt-2.5">
                  {/* Scenario comparison table */}
                  <div className="md:col-span-7 bg-[#08121d]/75 border border-tealmint/10 rounded-xl p-2 text-left">
                    <span className="text-[7.5px] font-semibold text-pearl/90 block mb-1">Scenario Comparison</span>
                    <table className="w-full text-left font-mono text-[6px]">
                      <thead>
                        <tr className="border-b border-tealmint/10 text-pearl/40">
                          <th className="pb-1">Scenario</th>
                          <th className="pb-1">Proj. NAV</th>
                          <th className="pb-1">TVPI</th>
                          <th className="pb-1">SI-IRR</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-tealmint/5">
                        <tr>
                          <td className="py-1 text-red-400 font-semibold">● Bear (0.7x)</td>
                          <td className="py-1">$268.3M</td>
                          <td className="py-1">1.30x</td>
                          <td className="py-1 text-red-400 font-bold">4.2%</td>
                        </tr>
                        <tr className="bg-tealmint/5">
                          <td className="py-1 text-ocean font-semibold">● Base (1.0x)</td>
                          <td className="py-1 font-bold">$383.2M</td>
                          <td className="py-1 font-bold">1.81x</td>
                          <td className="py-1 text-ocean font-bold">9.6%</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-green-400 font-semibold">● Bull (1.3x)</td>
                          <td className="py-1">$498.3M</td>
                          <td className="py-1">2.31x</td>
                          <td className="py-1 text-green-400 font-bold">13.8%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* TVPI Sensitivity Chart */}
                  <div className="md:col-span-5 bg-[#08121d]/75 border border-tealmint/10 rounded-xl p-2 flex flex-col justify-between">
                    <div className="flex justify-between items-center text-[7.5px] font-mono text-pearl/40">
                      <span>TVPI Sensitivity</span>
                      <span>Horizons</span>
                    </div>
                    <div className="h-10 w-full mt-1.5 relative">
                      <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                        <line x1="0" y1="50" x2="200" y2="50" stroke="rgba(218,255,251,0.08)" strokeWidth="0.5" />
                        <path
                          d={`M 10,${50 - 8 * peNavMultiplier} Q 100,${45 - 20 * peNavMultiplier} 190,${50 - 28 * peNavMultiplier}`}
                          fill="none"
                          stroke="#a78bfa"
                          strokeWidth="1.5"
                        />
                        <circle cx="190" cy={50 - 28 * peNavMultiplier} r="2" fill="#a78bfa" className="animate-pulse" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {peTab === 'vintage' && (
              <div className="animate-fadeIn space-y-2.5">
                {/* Vintage Year Matrix Table */}
                <div className="bg-[#08121d]/90 border border-tealmint/10 rounded-xl p-2 text-left">
                  <span className="text-[7.5px] font-semibold text-pearl/90 block mb-1">Vintage Year Performance Matrix</span>
                  <div className="overflow-x-auto scrollbar-none">
                    <table className="w-full font-mono text-[5.8px] text-left">
                      <thead>
                        <tr className="border-b border-tealmint/10 text-pearl/40">
                          <th className="pb-1 text-pearl/50">Vintage</th>
                          <th className="pb-1 text-pearl/50"># Inv</th>
                          <th className="pb-1 text-pearl/50">Commitment</th>
                          <th className="pb-1 text-pearl/50">Paid-in</th>
                          <th className="pb-1 text-pearl/50">Distributions</th>
                          <th className="pb-1 text-pearl/50">NAV</th>
                          <th className="pb-1 text-pearl/50">TVPI</th>
                          <th className="pb-1 text-pearl/50">DPI</th>
                          <th className="pb-1 text-pearl/50">mPME</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-tealmint/5 text-pearl/80">
                        <tr>
                          <td className="py-1 font-bold">2020</td>
                          <td className="py-1">11</td>
                          <td className="py-1">$72.6M</td>
                          <td className="py-1">$58.3M</td>
                          <td className="py-1">$12.7M</td>
                          <td className="py-1">$128.5M</td>
                          <td className="py-1 text-tealmint font-semibold">2.17x</td>
                          <td className="py-1 text-indigo-300">0.19x</td>
                          <td className="py-1">1.8x</td>
                        </tr>
                        <tr>
                          <td className="py-1 font-bold">2021</td>
                          <td className="py-1">21</td>
                          <td className="py-1">$102.7M</td>
                          <td className="py-1">$92.0M</td>
                          <td className="py-1">$13.4M</td>
                          <td className="py-1">$165.2M</td>
                          <td className="py-1 text-tealmint font-semibold">1.83x</td>
                          <td className="py-1 text-indigo-300">0.13x</td>
                          <td className="py-1">1.4x</td>
                        </tr>
                        <tr>
                          <td className="py-1 font-bold">2022</td>
                          <td className="py-1">18</td>
                          <td className="py-1">$67.4M</td>
                          <td className="py-1">$51.0M</td>
                          <td className="py-1">$4.2M</td>
                          <td className="py-1">$81.0M</td>
                          <td className="py-1 text-tealmint font-semibold">1.56x</td>
                          <td className="py-1 text-indigo-300">0.07x</td>
                          <td className="py-1">1.0x</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Capital Pacing & J-Curve Charts */}
                <div className="grid grid-cols-2 gap-2 text-left">
                  <div className="bg-[#08121d] border border-tealmint/10 rounded-xl p-2.5 flex flex-col justify-between">
                    <div>
                      <span className="text-[7.5px] font-semibold text-pearl/90 block">Capital Pacing</span>
                      <span className="text-[5.5px] font-mono text-pearl/40 block mt-0.5">Paid-In vs Distributions over time</span>
                    </div>
                    <div className="h-[55px] w-full mt-2">
                      <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
                        {/* Paid-in curve (blue) */}
                        <path d="M 10,70 Q 50,45 100,20 T 190,15" fill="none" stroke="#2563eb" strokeWidth="1.5" />
                        {/* Distributions curve (green) */}
                        <path d="M 10,75 Q 80,72 130,68 T 190,55" fill="none" stroke="#10b981" strokeWidth="1.5" />
                        {/* Base grid line */}
                        <line x1="0" y1="78" x2="200" y2="78" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                      </svg>
                    </div>
                    <div className="flex justify-between items-center text-[5px] font-mono text-pearl/50 mt-1">
                      <span className="text-blue-400">● Paid-In ($150.3M)</span>
                      <span className="text-green-400">● Distrib ($30.3M)</span>
                    </div>
                  </div>

                  <div className="bg-[#08121d] border border-tealmint/10 rounded-xl p-2.5 flex flex-col justify-between">
                    <div>
                      <span className="text-[7.5px] font-semibold text-pearl/90 block">J-Curve Analysis</span>
                      <span className="text-[5.5px] font-mono text-pearl/40 block mt-0.5">Cumulative Net Cash Flow (drawdowns)</span>
                    </div>
                    <div className="h-[55px] w-full mt-2 relative">
                      <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
                        {/* Zero baseline */}
                        <line x1="0" y1="35" x2="200" y2="35" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                        {/* J-Curve path */}
                        <path d="M 10,35 C 45,55 95,68 135,50 C 165,35 180,18 195,5" fill="none" stroke="#64ccc5" strokeWidth="1.8" />
                        <circle cx="195" cy="5" r="2.2" fill="#64ccc5" className="animate-pulse" />
                      </svg>
                    </div>
                    <div className="flex justify-between items-center text-[5px] font-mono text-pearl/50 mt-1">
                      <span className="text-red-400">Drawdown Stage</span>
                      <span className="text-tealmint">Realization Stage</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Institutional Insight Footer Banner */}
          <div className="bg-[#050b11] border border-purple-500/10 rounded-xl p-2 text-left relative overflow-hidden shrink-0">
            <span className="text-purple-400 font-mono font-bold uppercase text-[6px] tracking-wider block mb-0.5">mPME Benchmarking Intelligence</span>
            <p className="font-mono text-[6px] text-pearl/60 leading-normal">
              Your 2021 cohort mPME spread is outperforming the MSCI ACWI TR baseline by +20.8%pts (+2080 bps). TVPI is currently trending in the 75th percentile of Cambridge Associates benchmarks.
            </p>
          </div>
        </div>
      );
    }

    case 5: // Mutual Fund Analysis (Simulating the user's detailed screenshots!)
      return (
        <div className="flex flex-col gap-3 h-full justify-between animate-fadeIn text-pearl">
          <div>
            {/* Header / Sub-tabs */}
            <div className="flex justify-between items-center border-b border-tealmint/10 pb-2 mb-2 flex-wrap gap-2">
              <div>
                <h4 className="text-xs md:text-sm font-semibold text-pearl flex items-center gap-1.5">
                  <Award size={14} className="text-tealmint" />
                  <span>Mutual Fund Analytics</span>
                </h4>
                <span className="text-[8px] font-mono text-pearl/40">Portfolio peer mapping & what-if attribution</span>
              </div>

              {/* Sub-tab Switches */}
              <div className="flex bg-navy border border-tealmint/15 rounded-lg p-0.5 text-[8px] font-mono shrink-0">
                <button
                  onClick={() => setMfTab('overview')}
                  className={`px-2 py-0.5 rounded transition-all ${
                    mfTab === 'overview' ? 'bg-ocean text-pearl font-semibold' : 'text-pearl/60 hover:text-pearl'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setMfTab('peer')}
                  className={`px-2 py-0.5 rounded transition-all ${
                    mfTab === 'peer' ? 'bg-ocean text-pearl font-semibold' : 'text-pearl/60 hover:text-pearl'
                  }`}
                >
                  Peer Analysis
                </button>
                <button
                  onClick={() => setMfTab('whatif')}
                  className={`px-2 py-0.5 rounded transition-all ${
                    mfTab === 'whatif' ? 'bg-ocean text-pearl font-semibold' : 'text-pearl/60 hover:text-pearl'
                  }`}
                >
                  What-If Analysis
                </button>
              </div>
            </div>

            {/* TAB CONTENT: OVERVIEW */}
            {mfTab === 'overview' && (
              <div className="space-y-3 animate-fadeIn">
                {/* KPIs Header */}
                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-[#0b141e] border border-tealmint/10 rounded-lg p-2 text-center">
                    <span className="text-pearl/40 uppercase text-[7px] block font-mono">MF AUM</span>
                    <span className="text-xs font-mono font-bold text-pearl block mt-0.5">$208.8M</span>
                  </div>
                  <div className="bg-[#0b141e] border border-tealmint/10 rounded-lg p-2 text-center">
                    <span className="text-pearl/40 uppercase text-[7px] block font-mono">YTD Ret</span>
                    <span className="text-xs font-mono font-bold text-tealmint block mt-0.5">+8.0%</span>
                  </div>
                  <div className="bg-[#0b141e] border border-tealmint/10 rounded-lg p-2 text-center">
                    <span className="text-pearl/40 uppercase text-[7px] block font-mono">Benchmark</span>
                    <span className="text-xs font-mono font-bold text-pearl block mt-0.5">+7.7%</span>
                  </div>
                  <div className="bg-[#0b141e] border border-tealmint/10 rounded-lg p-2 text-center">
                    <span className="text-pearl/40 uppercase text-[7px] block font-mono">Active Ret</span>
                    <span className="text-xs font-mono font-bold text-tealmint block mt-0.5">+0.3%</span>
                  </div>
                </div>

                {/* Performance vs Benchmark & Donut Allocation Side-by-Side */}
                <div className="grid grid-cols-5 gap-3 items-center">
                  {/* Line Chart */}
                  <div className="col-span-3 bg-[#0b141e] border border-tealmint/10 rounded-lg p-2.5 h-28 flex flex-col justify-between shadow-sm">
                    <span className="text-[8px] font-mono text-pearl/50">Performance vs Benchmark</span>
                    <div className="relative h-16 w-full mt-1 border-b border-l border-pearl/10">
                      <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                        {/* Portfolio (blue) */}
                        <path d="M 0,80 Q 50,70 100,50 T 200,20" fill="none" stroke="#64CCC5" strokeWidth="2" />
                        {/* Benchmark (teal-dark) */}
                        <path d="M 0,80 Q 50,75 100,60 T 200,30" fill="none" stroke="#176B87" strokeWidth="1.5" strokeDasharray="3" />
                      </svg>
                    </div>
                    <div className="flex justify-between text-[7px] font-mono text-pearl/40 mt-1">
                      <span>MAY 25</span>
                      <span>DEC 25</span>
                      <span>MAY 26</span>
                    </div>
                  </div>

                  {/* Donut Allocation */}
                  <div className="col-span-2 bg-[#0b141e] border border-tealmint/10 rounded-lg p-2.5 h-28 flex flex-col justify-between items-center shadow-sm">
                    <span className="text-[8px] font-mono text-pearl/50 block w-full text-left">Class Weights</span>
                    <div className="relative w-14 h-14 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="38" fill="transparent" stroke="#176B87" strokeWidth="10" strokeDasharray="120 120" />
                        <circle cx="50" cy="50" r="38" fill="transparent" stroke="#64CCC5" strokeWidth="10" strokeDasharray="80 160" strokeDashoffset="-120" />
                        <circle cx="50" cy="50" r="38" fill="transparent" stroke="#DAFFFB" strokeWidth="10" strokeDasharray="38 200" strokeDashoffset="-200" />
                      </svg>
                      <span className="absolute text-[8px] font-mono text-pearl font-bold">51.1%</span>
                    </div>
                    <span className="text-[6px] font-mono text-tealmint block truncate w-full text-center">Equities (51%) · FI (22%) · Intl (20%)</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: PEER ANALYSIS */}
            {mfTab === 'peer' && (
              <div className="space-y-3 animate-fadeIn">
                {/* Highlight banner card */}
                <div className="bg-ocean/10 border border-tealmint/20 rounded-lg p-2.5 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-ocean/20 flex items-center justify-center text-tealmint shrink-0 shadow-inner">
                    <Award size={14} />
                  </div>
                  <div>
                    <span className="text-[8px] font-mono text-pearl/40 uppercase block">Best Category Holding</span>
                    <span className="text-[10px] font-mono font-semibold text-pearl">Fidelity Growth Company</span>
                    <span className="text-[8px] font-mono text-tealmint block">Rank #2 of 16 in Peer Group · YTD: +18.8%</span>
                  </div>
                </div>

                {/* Horizontal Comparison Bar Chart */}
                <div className="bg-[#0b141e] border border-tealmint/10 rounded-lg p-3 space-y-2.5">
                  <span className="text-[8px] font-mono text-pearl/50 uppercase block">Top Performers vs Peer Averages (YTD)</span>
                  
                  {/* Fidelity Contrafund */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[7px] font-mono">
                      <span className="text-pearl/80">Fidelity Growth Company</span>
                      <span className="text-tealmint font-bold">18.8% vs 14.5% avg</span>
                    </div>
                    <div className="flex items-center gap-1.5 h-3">
                      {/* Your Holding */}
                      <div className="bg-tealmint rounded-sm h-full w-[65%]" title="Your Holding" />
                      {/* Peer Average indicator */}
                      <div className="bg-ocean/50 rounded-sm h-full w-[45%]" title="Peer Average" />
                    </div>
                  </div>

                  {/* T. Rowe Price */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[7px] font-mono">
                      <span className="text-pearl/80">T. Rowe Price Blue Chip</span>
                      <span className="text-tealmint font-bold">13.2% vs 12.0% avg</span>
                    </div>
                    <div className="flex items-center gap-1.5 h-3">
                      <div className="bg-tealmint rounded-sm h-full w-[50%]" />
                      <div className="bg-ocean/50 rounded-sm h-full w-[40%]" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: WHAT-IF ANALYSIS */}
            {mfTab === 'whatif' && (
              <div className="space-y-3 animate-fadeIn">
                {/* Info block */}
                <div className="bg-[#0b141e] border border-tealmint/10 rounded-lg p-2.5 font-mono text-[8px] text-pearl/70 leading-relaxed">
                  <span className="text-tealmint font-bold block uppercase mb-1">Optimized Scenario Model</span>
                  See how your portfolio would have performed if you had switched to the best-performing alternative funds in each asset class category.
                </div>

                {/* Scenario stats */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-[#0b141e] border border-tealmint/10 rounded-lg p-2 text-center">
                    <span className="text-pearl/50 uppercase text-[7px] block font-mono">Current Ret</span>
                    <span className="text-xs font-mono font-bold text-pearl block mt-0.5">+9.4%</span>
                  </div>
                  <div className="bg-[#0b141e] border border-tealmint/10 rounded-lg p-2 text-center">
                    <span className="text-pearl/50 uppercase text-[7px] block font-mono">Optimal Ret</span>
                    <span className="text-xs font-mono font-bold text-tealmint block mt-0.5">+10.8%</span>
                  </div>
                  <div className="bg-[#0b141e] border border-tealmint/10 rounded-lg p-2 text-center">
                    <span className="text-pearl/50 uppercase text-[7px] block font-mono">AUM Impact</span>
                    <span className="text-xs font-mono font-bold text-tealmint block mt-0.5">+$2.98M</span>
                  </div>
                </div>

                {/* Comparison growth path SVG */}
                <div className="bg-[#0b141e] border border-tealmint/10 rounded-lg p-2.5 h-20 flex flex-col justify-between">
                  <div className="relative h-12 w-full mt-1 border-b border-l border-pearl/10">
                    <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                      {/* Optimal (tealmint) */}
                      <path d="M 0,80 Q 70,60 140,40 T 200,10" fill="none" stroke="#64CCC5" strokeWidth="2.5" />
                      {/* Current (ocean) */}
                      <path d="M 0,80 Q 70,65 140,50 T 200,25" fill="none" stroke="#176B87" strokeWidth="1.5" strokeDasharray="2" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Constant Holdings Footer List */}
          <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-3 mt-1 shadow-md">
            <span className="text-[8px] font-mono text-tealmint uppercase tracking-wider block font-bold mb-1">Top Holdings Attributions</span>
            <div className="space-y-1.5 font-mono text-[8px]">
              <div className="flex justify-between items-center border-b border-pearl/5 pb-1 text-pearl/80">
                <span>Fidelity Growth Company</span>
                <span className="text-tealmint font-semibold">+18.8% YTD</span>
              </div>
              <div className="flex justify-between items-center text-pearl/80">
                <span>T. Rowe Price Blue Chip</span>
                <span className="text-tealmint font-semibold">+13.2% YTD</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 6: // AI Investment Chatbot
      return (
        <div className="flex flex-col gap-4 h-full justify-between animate-fadeIn text-pearl font-mono">
          <div>
            <div className="flex justify-between items-center border-b border-tealmint/10 pb-3 mb-2">
              <div>
                <h4 className="text-sm font-semibold text-pearl flex items-center gap-1.5">
                  <MessageSquare size={14} className="text-tealmint" />
                  <span>Cognitive LLM Analyst Interface</span>
                </h4>
                <span className="text-[9px] text-pearl/40">Secure schema-isolated computational querying</span>
              </div>
            </div>

            {/* Chatbox Simulated Terminal */}
            <div className="space-y-3 mt-4 text-[9px]">
              {/* User Prompt */}
              <div className="flex gap-2">
                <span className="text-tealmint font-bold shrink-0">PM&gt;</span>
                <p className="text-pearl/90 leading-relaxed bg-[#0b141e] border border-tealmint/10 rounded-lg p-2 w-full">
                  Compare our private equity vintage DPI vs pre-pandemic benchmark indices.
                </p>
              </div>

              {/* Bot Response */}
              <div className="flex gap-2">
                <span className="text-ocean font-bold shrink-0">OA_AI&gt;</span>
                <div className="text-pearl/85 leading-relaxed bg-[#06111a] border border-tealmint/10 rounded-lg p-2.5 w-full space-y-2">
                  <p>
                    Analyzing isolated client schema database...
                  </p>
                  <p className="text-tealmint font-semibold">
                    Result: Fund 2018 is yielding 0.82x DPI vs Cambridge Index benchmark 0.65x (+0.17x active premium realization).
                  </p>
                  <div className="h-1 bg-tealmint/20 rounded-full w-full overflow-hidden">
                    <div className="bg-tealmint h-full w-[80%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#0b141e] border border-tealmint/10 rounded-xl p-2">
            <Search size={12} className="text-pearl/40 shrink-0" />
            <input 
              readOnly 
              type="text" 
              placeholder="Ask your portfolio anything in plain English..." 
              className="bg-transparent border-none text-[9px] w-full focus:outline-none text-pearl/80" 
            />
            <MessageCircle size={12} className="text-tealmint shrink-0" />
          </div>
        </div>
      );

    case 7: // Multi-Tenant Architecture
      return (
        <div className="flex flex-col gap-4 h-full justify-between animate-fadeIn text-pearl">
          <div>
            <div className="flex justify-between items-center border-b border-tealmint/10 pb-3 mb-2">
              <div>
                <h4 className="text-sm font-semibold text-pearl flex items-center gap-1.5">
                  <Lock size={14} className="text-tealmint" />
                  <span>Schema-Level Entitlement Security</span>
                </h4>
                <span className="text-[9px] font-mono text-pearl/40">Zero-data-leakage multi-tenant boundary layout</span>
              </div>
            </div>

            {/* Shield / Layers SVG */}
            <div className="flex flex-col items-center justify-around mt-4 space-y-3">
              {/* Stacked isometric schema containers */}
              <div className="relative w-full max-w-[280px] h-28 flex flex-col justify-around font-mono text-[8px]">
                {/* Client Layer 1 */}
                <div className="bg-gradient-to-r from-ocean/40 to-navy border border-tealmint/30 rounded px-2.5 py-1.5 flex items-center justify-between shadow-md">
                  <span className="flex items-center gap-1">
                    <CheckCircle size={10} className="text-tealmint" />
                    <span>Tenant Schema: Client_01 (Family Office)</span>
                  </span>
                  <span className="text-tealmint font-semibold">AES-256 ISOLATED</span>
                </div>

                {/* Security Barrier Layer */}
                <div className="flex justify-center -my-2.5 relative z-10">
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tealmint/10 border border-tealmint/30 text-tealmint font-bold text-[7px]">
                    <ShieldCheck size={9} />
                    <span>ENTITLEMENT POLICY CONTROL</span>
                  </div>
                </div>

                {/* Client Layer 2 */}
                <div className="bg-gradient-to-r from-navy to-ocean/20 border border-tealmint/10 rounded px-2.5 py-1.5 flex items-center justify-between text-pearl/60 shadow-md">
                  <span className="flex items-center gap-1">
                    <CheckCircle size={10} className="text-pearl/40" />
                    <span>Tenant Schema: Client_02 (Private Bank)</span>
                  </span>
                  <span>AES-256 ISOLATED</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-3 font-mono text-[9px] flex justify-between items-center">
            <div className="flex items-center gap-1.5 text-tealmint font-bold">
              <CheckCircle size={12} className="text-tealmint" />
              <span>SOC 2 Type II Audited</span>
            </div>
            <div className="flex items-center gap-1.5 text-pearl/50">
              <AlertCircle size={12} />
              <span>Granular row-level role controls</span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
