import { 
  TrendingUp, 
  PieChart, 
  Layers, 
  MessageSquare,
  Activity,
  Award
} from 'lucide-react';

interface FeatureShowcaseProps {
  activeIndex: number;
}

export default function FeatureShowcase({ activeIndex }: FeatureShowcaseProps) {
  
  switch (activeIndex) {
    case 0: // Performance Analytics
      return (
        <div className="flex flex-col gap-4 min-h-full justify-between animate-fadeIn text-pearl text-left">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-pearl flex items-center gap-1.5">
                <Activity size={14} className="text-tealmint" />
                <span>Performance Analytics Calculations</span>
              </h4>
              <span className="text-[9px] font-mono text-pearl/40">GIPS-Aligned Calculation Engine Audit</span>
            </div>

            <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-4 space-y-2.5 font-mono text-xs">
              <div className="grid grid-cols-12 gap-x-2 border-b border-pearl/5 pb-2 items-start">
                <span className="col-span-7 text-pearl/65">unweighted TWRR Engine</span>
                <span className="col-span-5 text-tealmint font-semibold text-right">GIPS-Aligned · Active</span>
              </div>
              <div className="grid grid-cols-12 gap-x-2 border-b border-pearl/5 pb-2 items-start">
                <span className="col-span-7 text-pearl/65">Time Weighted (Daily & Monthly Dietz)</span>
                <span className="col-span-5 text-tealmint font-semibold text-right">GIPS-Aligned · Active</span>
              </div>
              <div className="grid grid-cols-12 gap-x-2 border-b border-pearl/5 pb-2 items-start">
                <span className="col-span-7 text-pearl/65">Money-weighted MWRR (IRR/XIRR)</span>
                <span className="col-span-5 text-tealmint font-semibold text-right">Active</span>
              </div>
              <div className="grid grid-cols-12 gap-x-2 border-b border-pearl/5 pb-2 items-start">
                <span className="col-span-7 text-pearl/65">FX-Adjusted & Linked Multi-Period</span>
                <span className="col-span-5 text-tealmint font-semibold text-right">Active</span>
              </div>
              <div className="grid grid-cols-12 gap-x-2 items-start">
                <span className="col-span-7 text-pearl/65">Calculation Logic Audit Trail</span>
                <span className="col-span-5 text-tealmint font-semibold text-right">Active & Documented</span>
              </div>
            </div>
          </div>

          <div className="bg-[#050b11] border border-tealmint/10 rounded-xl p-3 text-[9px] font-mono text-pearl/50">
            * Fully verified calculations supported by transaction-level logging and complete data lineage auditing.
          </div>
        </div>
      );

    case 1: // Top-Down Relative Attribution
      return (
        <div className="flex flex-col gap-4 min-h-full justify-between animate-fadeIn text-pearl text-left">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-pearl flex items-center gap-1.5">
                <TrendingUp size={14} className="text-tealmint" />
                <span>Relative Attribution Decomposition</span>
              </h4>
              <span className="text-[9px] font-mono text-pearl/40">Brinson-Fachler Asset-Class Level Analysis</span>
            </div>

            <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-4">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-pearl/10 text-pearl/40 uppercase text-[8px] tracking-wider">
                    <th className="pb-2">Attribution Effect</th>
                    <th className="pb-2 text-right">Contribution</th>
                    <th className="pb-2 text-right">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-pearl/5">
                    <td className="py-2.5 font-semibold text-pearl">Allocation to Benchmark</td>
                    <td className="py-2.5 text-right text-tealmint font-bold">+1.80%</td>
                    <td className="py-2.5 text-right text-pearl/50 text-[10px]">Overweighting outperformed classes</td>
                  </tr>
                  <tr className="border-b border-pearl/5">
                    <td className="py-2.5 font-semibold text-pearl">Selection</td>
                    <td className="py-2.5 text-right text-red-400 font-bold">-0.90%</td>
                    <td className="py-2.5 text-right text-pearl/50 text-[10px]">Managed security underperformed</td>
                  </tr>
                  <tr className="font-bold text-tealmint">
                    <td className="py-2.5">Total Effect</td>
                    <td className="py-2.5 text-right font-black">+0.90%</td>
                    <td className="py-2.5 text-right text-[10px]">Outperformance vs Benchmark</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#050b11] border border-tealmint/10 rounded-xl p-3 text-[9px] font-mono text-pearl/50">
            Attribution decomposition breaks down portfolio active return vs. composite index returns to isolate active management value-adds.
          </div>
        </div>
      );

    case 2: // Bottom-Up Absolute Contribution
      return (
        <div className="flex flex-col gap-4 min-h-full justify-between animate-fadeIn text-pearl text-left">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-pearl flex items-center gap-1.5">
                <Award size={14} className="text-tealmint" />
                <span>Absolute Contribution Ledger</span>
              </h4>
              <span className="text-[9px] font-mono text-pearl/40">Security-Level Yield Contribution Analysis</span>
            </div>

            <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-3.5">
              <span className="text-[9px] font-mono text-pearl/50 block mb-2 uppercase">YTD Absolute Return Contribution List</span>
              <div className="space-y-2 font-mono text-xs">
                {[
                  { name: 'US Growth Equity Fund', val: '+56 bps', color: 'bg-tealmint/70', rawVal: 56 },
                  { name: 'Multi-Strategy Hedge', val: '+49 bps', color: 'bg-tealmint/70', rawVal: 49 },
                  { name: 'Core Bond Fund', val: '+12 bps', color: 'bg-tealmint/70', rawVal: 12 },
                  { name: 'Money Market Fund', val: '-10 bps', color: 'bg-red-400/70', rawVal: -10 },
                  { name: 'US Value Equity Fund', val: '-18 bps', color: 'bg-red-400/70', rawVal: -18 },
                  { name: 'Private Equity Fund I', val: '-25 bps', color: 'bg-red-400/70', rawVal: -25 }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <div className="flex justify-between items-center text-[10px] md:text-xs">
                      <span className="text-pearl/85">{item.name}</span>
                      <span className={`font-bold ${item.rawVal >= 0 ? 'text-tealmint' : 'text-red-400'}`}>{item.val}</span>
                    </div>
                    <div className="w-full bg-navy h-1.5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${item.color}`} 
                        style={{ width: `${Math.abs(item.rawVal)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );

    case 3: // Exposure Analytics
      return (
        <div className="flex flex-col gap-4 min-h-full justify-between animate-fadeIn text-pearl text-left">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-pearl flex items-center gap-1.5">
                <PieChart size={14} className="text-tealmint" />
                <span>Continuous Asset Exposure Drift</span>
              </h4>
              <span className="text-[9px] font-mono text-pearl/40">Real-Time Asset Class Positioning vs Policy Target</span>
            </div>

            <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-3.5">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-pearl/10 text-pearl/40 uppercase text-[8px] tracking-wider">
                    <th className="pb-1.5">Asset Class</th>
                    <th className="pb-1.5 text-right">Policy</th>
                    <th className="pb-1.5 text-right">Actual</th>
                    <th className="pb-1.5 text-right">Drift</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { asset: 'Equity', policy: '45%', actual: '47%', drift: '+2.0%' },
                    { asset: 'Fixed Income', policy: '30%', actual: '28%', drift: '-2.0%' },
                    { asset: 'Alternatives', policy: '15%', actual: '14%', drift: '-1.0%' },
                    { asset: 'Private Equity', policy: '10%', actual: '11.0%', drift: '+1.0%' },
                    { asset: 'Cash', policy: '0%', actual: '0.0%', drift: '0.0%' }
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-pearl/5 last:border-b-0">
                      <td className="py-2 font-semibold text-pearl">{row.asset}</td>
                      <td className="py-2 text-right text-pearl/70">{row.policy}</td>
                      <td className="py-2 text-right text-pearl">{row.actual}</td>
                      <td className={`py-2 text-right font-bold ${
                        row.drift === '0.0%' ? 'text-pearl/55' : row.drift.startsWith('+') ? 'text-tealmint' : 'text-red-400'
                      }`}>{row.drift}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );

    case 4: // Private Equity Analytics
      return (
        <div className="flex flex-col gap-4 min-h-full justify-between animate-fadeIn text-pearl text-left">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-pearl flex items-center gap-1.5">
                <Layers size={14} className="text-tealmint" />
                <span>Private Equity Analytics Summary</span>
              </h4>
              <span className="text-[9px] font-mono text-pearl/40">L.P.-Focused Private Market Allocation Multiples</span>
            </div>

            <div className="grid grid-cols-2 gap-3.5 font-mono">
              <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-3">
                <span className="text-[8px] text-pearl/50 uppercase block">Net IRR</span>
                <span className="text-lg font-bold text-tealmint block mt-1">18.4%</span>
                <span className="text-[8px] text-pearl/40 block mt-0.5">Since Inception</span>
              </div>
              <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-3">
                <span className="text-[8px] text-pearl/50 uppercase block">TVPI Multiple</span>
                <span className="text-lg font-bold text-tealmint block mt-1">1.54x</span>
                <span className="text-[8px] text-pearl/40 block mt-0.5">Total Value to Paid-In</span>
              </div>
              <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-3">
                <span className="text-[8px] text-pearl/50 uppercase block">DPI Multiple</span>
                <span className="text-lg font-bold text-tealmint block mt-1">0.32x</span>
                <span className="text-[8px] text-pearl/40 block mt-0.5">Distribution to Paid-In</span>
              </div>
              <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-3">
                <span className="text-[8px] text-pearl/50 uppercase block">RVPI Multiple</span>
                <span className="text-lg font-bold text-tealmint block mt-1">1.22x</span>
                <span className="text-[8px] text-pearl/40 block mt-0.5">Residual Value to Paid-In</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 5: // AI Performance Agent
      return (
        <div className="flex flex-col gap-4 min-h-full justify-between animate-fadeIn text-pearl text-left">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-pearl flex items-center gap-1.5">
                <MessageSquare size={14} className="text-tealmint" />
                <span>AI Agent Commentary Writer</span>
              </h4>
              <span className="text-[9px] font-mono text-pearl/40">Secure, Isolated On-Demand Quant commentary</span>
            </div>

            <div className="bg-[#060c14] border border-purple-500/15 rounded-xl p-4 font-mono text-xs shadow-inner">
              <div className="flex justify-between items-center mb-2.5 pb-2 border-b border-purple-500/10 select-none">
                <span className="text-[8px] text-pearl/40">AI_COMMENTARY_OUTPUT</span>
                <span className="px-1.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-[7px] text-purple-400 font-mono">
                  PROPOSAL SAMPLE COMMENTARY
                </span>
              </div>
              <p className="leading-relaxed text-pearl/90 italic">
                "Portfolio returned +12.4% YTD, outperforming the composite benchmark by +280 bps. Active return is driven primarily by allocation (+205 bps), led by US Equity (+210 bps) and PE Fund I (+80 bps). Allocation combined with +75 bps in selection return offset slight drag from alternative selection. Exposure drift remains within policy bounds: Equity YTD contribution is 52% (Money Mkt is YTD -10 bps)."
              </p>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
