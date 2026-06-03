import { useState } from 'react';
import Logo from './Logo';
import { 
  TrendingUp, 
  PieChart, 
  Layers, 
  MessageSquare,
  Shield, 
  Settings, 
  Download, 
  Sliders
} from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  subtext?: string;
  compact?: boolean;
}

function MetricCard({ label, value, change, isPositive, subtext, compact = false }: MetricCardProps) {
  return (
    <div className={`bg-[#0b141e] border border-tealmint/10 rounded-xl transition-all duration-300 shadow-md hover:border-tealmint/30 text-center flex flex-col items-center justify-center ${
      compact ? 'p-2 sm:p-3.5' : 'p-2.5 sm:p-5'
    }`}>
      <span className={`font-mono text-pearl/50 uppercase tracking-wider block w-full ${
        compact ? 'text-[8px] sm:text-[9px]' : 'text-[9px] sm:text-[11px]'
      }`}>{label}</span>
      <div className="flex items-baseline justify-center gap-1.5 mt-1.5 flex-wrap w-full">
        <span className={`font-mono font-semibold text-pearl ${
          compact ? 'text-base sm:text-lg md:text-xl' : 'text-lg sm:text-2xl'
        }`}>{value}</span>
        {change && (
          <span className={`flex items-center font-mono font-medium ${
            compact ? 'text-[8px] sm:text-[9px]' : 'text-[10px] sm:text-xs'
          } ${isPositive ? 'text-tealmint' : 'text-red-400'}`}>
            {change}
          </span>
        )}
      </div>
      {subtext && (
        <span className={`font-mono text-pearl/40 block mt-1 w-full leading-tight ${
          compact ? 'text-[8px] sm:text-[9px]' : 'text-[9px] sm:text-[10px]'
        }`}>
          {subtext.includes('/') ? (
            subtext.split('/').map((part, index, arr) => (
              <span key={index}>
                {part}
                {index < arr.length - 1 && (
                  <>
                    /<wbr />
                  </>
                )}
              </span>
            ))
          ) : (
            subtext
          )}
        </span>
      )}
    </div>
  );
}

interface InteractiveDashboardProps {
  isHero?: boolean;
}

export default function InteractiveDashboard({ isHero = false }: InteractiveDashboardProps) {
  const [activeTab, setActiveTab] = useState<'attribution' | 'exposure' | 'pe' | 'ai'>('attribution');

  const policyExposureData = [
    { asset: 'Equity', policy: '45%', actual: '47%', drift: '+2.0%' },
    { asset: 'Fixed Income', policy: '30%', actual: '28%', drift: '-2.0%' },
    { asset: 'Alternatives', policy: '15%', actual: '14%', drift: '-1.0%' },
    { asset: 'Private Equity', policy: '10%', actual: '11.0%', drift: '+1.0%' },
    { asset: 'Cash', policy: '0%', actual: '0.0%', drift: '0.0%' }
  ];

  const securityContributionData = [
    { holding: 'US Growth Equity Fund', contribution: '+56 bps', assetClass: 'Equity' },
    { holding: 'Private Equity Fund I', contribution: '-25 bps', assetClass: 'Private Equity' },
    { holding: 'US Value Equity Fund', contribution: '-18 bps', assetClass: 'Equity' },
    { holding: 'Core Bond Fund', contribution: '+12 bps', assetClass: 'Fixed Income' },
    { holding: 'Money Market Fund', contribution: '-10 bps', assetClass: 'Cash' },
    { holding: 'Multi-Strategy Hedge', contribution: '+49 bps', assetClass: 'Alternatives' }
  ];

  return (
    <div className={`w-full mx-auto rounded-2xl overflow-hidden border border-tealmint/15 bg-[#04090e] shadow-2xl flex flex-col md:flex-row text-pearl transition-all duration-300 ${
      isHero 
        ? 'max-w-xl h-auto md:h-[500px]' 
        : 'max-w-[1600px] h-auto md:h-[720px]'
    }`}>
      {/* Sidebar Mockup */}
      <div className={`bg-[#060d14] border-b md:border-b-0 md:border-r border-tealmint/10 p-3 flex flex-row md:flex-col justify-between items-center shrink-0 transition-all duration-300 w-full ${
        isHero 
          ? 'md:w-16 md:p-3 md:items-center' 
          : 'md:w-64 md:p-5 md:items-stretch'
      }`}>
        <div className={`flex flex-row md:flex-col gap-4 md:gap-6 items-center w-auto md:w-full ${isHero ? 'md:items-center' : 'md:items-stretch'}`}>
          {/* Dashboard Mini-Logo */}
          <div className={`flex items-center shrink-0 ${isHero ? 'justify-center' : 'px-1'}`}>
            <Logo 
              showText={!isHero} 
              layout="stacked" 
              iconSize="sm" 
              textClassName="hidden md:block"
            />
          </div>

          {/* Navigation Links */}
          <div className={`flex flex-row md:flex-col gap-1.5 md:gap-2 shrink-0 ${isHero ? 'w-auto md:items-center' : 'w-auto md:w-full'}`}>
            <button
              onClick={() => setActiveTab('attribution')}
              title={isHero ? "Attribution & Contribution" : undefined}
              className={`flex items-center gap-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 text-left ${
                isHero 
                  ? 'md:justify-center md:w-10 md:h-10 p-2 md:p-0' 
                  : 'p-2 md:p-2.5 w-auto md:w-full gap-3'
              } ${
                activeTab === 'attribution'
                  ? 'bg-ocean/30 border-b-2 md:border-b-0 md:border-l-2 border-tealmint text-tealmint font-semibold'
                  : 'text-pearl/65 hover:bg-pearl/5 hover:text-pearl'
              }`}
            >
              <TrendingUp size={16} className="shrink-0" />
              {!isHero && <span className="hidden md:inline">Attribution & Contribution</span>}
            </button>

            <button
              onClick={() => setActiveTab('exposure')}
              title={isHero ? "Exposure Monitoring" : undefined}
              className={`flex items-center gap-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 text-left ${
                isHero 
                  ? 'md:justify-center md:w-10 md:h-10 p-2 md:p-0' 
                  : 'p-2 md:p-2.5 w-auto md:w-full gap-3'
              } ${
                activeTab === 'exposure'
                  ? 'bg-ocean/30 border-b-2 md:border-b-0 md:border-l-2 border-tealmint text-tealmint font-semibold'
                  : 'text-pearl/65 hover:bg-pearl/5 hover:text-pearl'
              }`}
            >
              <PieChart size={16} className="shrink-0" />
              {!isHero && <span className="hidden md:inline">Exposure Analytics</span>}
            </button>

            <button
              onClick={() => setActiveTab('pe')}
              title={isHero ? "Private Equity Analytics" : undefined}
              className={`flex items-center gap-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 text-left ${
                isHero 
                  ? 'md:justify-center md:w-10 md:h-10 p-2 md:p-0' 
                  : 'p-2 md:p-2.5 w-auto md:w-full gap-3'
              } ${
                activeTab === 'pe'
                  ? 'bg-ocean/30 border-b-2 md:border-b-0 md:border-l-2 border-tealmint text-tealmint font-semibold'
                  : 'text-pearl/65 hover:bg-pearl/5 hover:text-pearl'
              }`}
            >
              <Layers size={16} className="shrink-0" />
              {!isHero && <span className="hidden md:inline">Private Equity Analytics</span>}
            </button>

            <button
              onClick={() => setActiveTab('ai')}
              title={isHero ? "AI Performance Agent" : undefined}
              className={`flex items-center gap-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 text-left ${
                isHero 
                  ? 'md:justify-center md:w-10 md:h-10 p-2 md:p-0' 
                  : 'p-2 md:p-2.5 w-auto md:w-full gap-3'
              } ${
                activeTab === 'ai'
                  ? 'bg-ocean/30 border-b-2 md:border-b-0 md:border-l-2 border-tealmint text-tealmint font-semibold'
                  : 'text-pearl/65 hover:bg-pearl/5 hover:text-pearl'
              }`}
            >
              <MessageSquare size={16} className="shrink-0" />
              {!isHero && <span className="hidden md:inline">AI Performance Agent</span>}
            </button>
          </div>
        </div>

        {/* Sidebar Footer Elements */}
        <div className={`flex flex-row md:flex-col gap-3 md:gap-4 mt-0 md:mt-6 pt-0 md:pt-4 border-t-0 md:border-t border-tealmint/15 w-auto md:w-full items-center justify-end md:justify-start shrink-0 ${isHero ? 'md:items-center' : ''}`}>
          {isHero ? (
            <div className="flex flex-row md:flex-col gap-3 md:gap-4 items-center">
              <span title="Institutional Control"><Shield size={16} className="text-tealmint" /></span>
              <span title="Settings"><Settings size={16} className="hover:text-tealmint cursor-pointer text-pearl/50 transition-colors" /></span>
            </div>
          ) : (
            <>
              <div className="hidden md:flex flex-col gap-4 w-full">
                <div className="flex items-center justify-between text-xs text-pearl/55 px-2">
                  <span className="flex items-center gap-1">
                    <Shield size={12} className="text-tealmint" />
                    <span>Institutional Control</span>
                  </span>
                  <Settings size={12} className="hover:text-tealmint cursor-pointer" />
                </div>
                <div className="text-[10px] font-mono text-pearl/40 px-2 uppercase tracking-widest text-center border border-tealmint/10 bg-navy/40 py-1 rounded">
                  Confidential 2026
                </div>
              </div>
              <div className="flex md:hidden items-center gap-3">
                <Shield size={16} className="text-tealmint" />
                <Settings size={16} className="text-pearl/50 hover:text-tealmint cursor-pointer" />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Main Panel Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#04080d]">
        {/* Mock Top bar */}
        <div className="h-16 border-b border-tealmint/10 px-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-pearl/40 hidden sm:inline">Workspace / </span>
            <span className="text-xs font-mono text-tealmint">
              {activeTab === 'attribution' && 'Attribution & Contribution'}
              {activeTab === 'exposure' && 'Exposure Analytics'}
              {activeTab === 'pe' && 'Private Equity Analytics'}
              {activeTab === 'ai' && 'AI Performance Agent'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {isHero ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tealmint/10 border border-tealmint/20 text-[9px] font-mono text-tealmint font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-tealmint animate-pulse" />
                PROPOSAL METRICS
              </span>
            ) : (
              <>
                <button className="flex items-center gap-1.5 p-1.5 sm:px-3 sm:py-1.5 rounded bg-ocean/20 border border-tealmint/20 text-[11px] font-mono hover:bg-ocean/40 transition-colors text-pearl/80">
                  <Download size={12} />
                  <span className="hidden sm:inline">Export Report</span>
                </button>
                <button className="flex items-center gap-1.5 p-1.5 sm:px-3 sm:py-1.5 rounded bg-ocean/20 border border-tealmint/20 text-[11px] font-mono hover:bg-ocean/40 transition-colors text-pearl/80">
                  <Sliders size={12} />
                  <span className="hidden sm:inline">Preferences</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Scrollable View Area */}
        <div className={`flex-1 overflow-y-auto p-5 flex flex-col gap-5 scroll-hide-scrollbar ${
          isHero ? 'overflow-x-hidden' : ''
        }`}>
          
          {/* TAB 1: ATTRIBUTION & CONTRIBUTION */}
          {activeTab === 'attribution' && (
            <>
              {/* Top KPIs Summary row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <MetricCard label="YTD Return" value="+12.40%" change="+280 bps vs BM" isPositive={true} compact={isHero} />
                <MetricCard label="Composite Benchmark" value="+9.60%" subtext="YTD Target" compact={isHero} />
                <MetricCard label="Relative Attribution" value="+0.90%" change="Attribution Sum" isPositive={true} compact={isHero} />
              </div>

              {/* Attribution Decomposition vs Bottom-up Contribution Grid */}
              <div className={`grid gap-5 ${isHero ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-12'}`}>
                {/* Left Column: Relative Attribution */}
                <div className={`bg-[#0b141e] border border-tealmint/10 rounded-xl p-4 flex flex-col justify-between shadow-md ${
                  isHero ? '' : 'lg:col-span-5'
                }`}>
                  <div>
                    <h4 className="text-xs md:text-sm font-semibold text-pearl">Top-Down Relative Attribution</h4>
                    <span className="text-[9px] font-mono text-pearl/40">Brinson-Fachler Decomposition</span>
                  </div>

                  <div className="mt-4 space-y-2.5">
                    <div className="bg-[#04090e]/50 border border-tealmint/10 rounded-lg p-3 flex justify-between items-center">
                      <div>
                        <span className="text-[9px] font-mono text-pearl/50 uppercase block">Allocation Effect</span>
                        <span className="text-xs font-mono font-bold text-tealmint block mt-0.5">+1.80%</span>
                      </div>
                      <span className="text-[8px] font-mono text-pearl/40 w-32 text-right">Overweighting outperformed asset classes</span>
                    </div>

                    <div className="bg-[#04090e]/50 border border-tealmint/10 rounded-lg p-3 flex justify-between items-center">
                      <div>
                        <span className="text-[9px] font-mono text-pearl/50 uppercase block">Selection Effect</span>
                        <span className="text-xs font-mono font-bold text-red-400 block mt-0.5">-0.90%</span>
                      </div>
                      <span className="text-[8px] font-mono text-pearl/40 w-32 text-right">Managed security underperformed benchmark</span>
                    </div>

                    <div className="border-t border-tealmint/15 pt-2 flex justify-between items-center font-mono text-xs">
                      <span className="text-pearl/65">Total Attribution Effect</span>
                      <span className="text-tealmint font-bold">+0.90%</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Bottom-Up Contribution */}
                <div className={`bg-[#0b141e] border border-tealmint/10 rounded-xl p-4 flex flex-col justify-between shadow-md ${
                  isHero ? '' : 'lg:col-span-7'
                }`}>
                  <div>
                    <h4 className="text-xs md:text-sm font-semibold text-pearl">Bottom-Up Absolute Contribution</h4>
                    <span className="text-[9px] font-mono text-pearl/40">YTD Holding Return Contribution Ledger</span>
                  </div>

                  <div className="mt-3 overflow-x-auto">
                    <table className="w-full text-left font-mono text-[9px] md:text-xs">
                      <thead>
                        <tr className="border-b border-pearl/10 text-pearl/40 uppercase text-[8px] tracking-wider">
                          <th className="pb-1.5">Holding</th>
                          <th className="pb-1.5 text-right">Asset Class</th>
                          <th className="pb-1.5 text-right">Contribution</th>
                        </tr>
                      </thead>
                      <tbody>
                        {securityContributionData.map((row, idx) => (
                          <tr key={idx} className="border-b border-pearl/5 last:border-b-0">
                            <td className="py-1.5 font-semibold text-pearl truncate max-w-[130px]">{row.holding}</td>
                            <td className="py-1.5 text-right text-pearl/60">{row.assetClass}</td>
                            <td className={`py-1.5 text-right font-bold ${row.contribution.startsWith('+') ? 'text-tealmint' : 'text-red-400'}`}>
                              {row.contribution}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* TAB 2: EXPOSURE ANALYTICS */}
          {activeTab === 'exposure' && (
            <>
              {/* KPIs summary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <MetricCard label="Equity Position" value="47% Actual" subtext="Policy Target: 45% (+2.0% Drift)" compact={isHero} />
                <MetricCard label="Fixed Income Position" value="28% Actual" subtext="Policy Target: 30% (-2.0% Drift)" compact={isHero} />
              </div>

              {/* Policy vs Actual table & bar meters */}
              <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-4 shadow-md flex flex-col gap-4">
                <div>
                  <h4 className="text-xs md:text-sm font-semibold text-pearl">Continuous Policy & Concentration Oversight</h4>
                  <span className="text-[9px] font-mono text-pearl/40">Real-Time Drift Analysis</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left font-mono text-[10px] md:text-xs">
                    <thead>
                      <tr className="border-b border-pearl/10 text-pearl/40 uppercase text-[8px] tracking-wider">
                        <th className="pb-2">Asset Class</th>
                        <th className="pb-2 text-right">Policy Target</th>
                        <th className="pb-2 text-right">Actual Weight</th>
                        <th className="pb-2 text-right">Drift</th>
                        {!isHero && <th className="pb-2 pl-4">Exposure Buffer Bounds</th>}
                      </tr>
                    </thead>
                    <tbody>
                      {policyExposureData.map((row, idx) => {
                        const isDriftPositive = row.drift.startsWith('+');
                        const isDriftZero = row.drift === '0.0%';
                        return (
                          <tr key={idx} className="border-b border-pearl/5 last:border-b-0">
                            <td className="py-2.5 font-semibold text-pearl">{row.asset}</td>
                            <td className="py-2.5 text-right text-pearl/70">{row.policy}</td>
                            <td className="py-2.5 text-right text-pearl">{row.actual}</td>
                            <td className={`py-2.5 text-right font-bold ${
                              isDriftZero ? 'text-pearl/55' : isDriftPositive ? 'text-tealmint' : 'text-red-400'
                            }`}>{row.drift}</td>
                            {!isHero && (
                              <td className="py-2.5 pl-4 w-1/3">
                                <div className="w-full bg-navy h-2 rounded-full overflow-hidden relative">
                                  {/* Drift bounds display */}
                                  <div 
                                    className={`h-full rounded-full ${isDriftZero ? 'bg-pearl/20' : isDriftPositive ? 'bg-tealmint' : 'bg-red-400'}`} 
                                    style={{ width: `${Math.max(10, Math.min(90, (parseFloat(row.actual) / 60) * 100))}%` }}
                                  />
                                </div>
                              </td>
                            )}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* TAB 3: PRIVATE EQUITY ANALYTICS */}
          {activeTab === 'pe' && (
            <>
              {/* L.P.-focused Private Market Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <MetricCard label="Net IRR" value="18.4%" subtext="Since Inception" compact={isHero} />
                <MetricCard label="TVPI Multiple" value="1.54x" subtext="Total Value/Paid-In" compact={isHero} />
                <MetricCard label="DPI Multiple" value="0.32x" subtext="Distribution/Paid-In" compact={isHero} />
                <MetricCard label="RVPI Multiple" value="1.22x" subtext="Residual Value/Paid-In" compact={isHero} />
              </div>

              {/* PE Cohort analysis details */}
              <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-4 shadow-md flex flex-col justify-between">
                <div>
                  <h4 className="text-xs md:text-sm font-semibold text-pearl">L.P.-Focused Private Market View</h4>
                  <span className="text-[9px] font-mono text-pearl/40">Vintage Cohort TVPI & J-Curve Realizations</span>
                </div>

                <div className="relative h-44 w-full border-b border-l border-pearl/10 mt-6">
                  {/* Premium J-Curve SVG Visualizer */}
                  <svg className="w-full h-full" viewBox="0 0 600 150" preserveAspectRatio="none">
                    <line x1="0" y1="75" x2="600" y2="75" stroke="rgba(218,255,251,0.06)" strokeWidth="1.5" />
                    
                    {/* Drawdown to distribution curve J-curve */}
                    <path
                      d="M 10,75 C 100,105 180,140 280,120 C 380,100 480,45 580,20"
                      fill="none"
                      stroke="#64CCC5"
                      strokeWidth="2.5"
                    />
                    
                    {/* Shaded Area under J-Curve */}
                    <path
                      d="M 10,75 C 100,105 180,140 280,120 C 380,100 480,45 580,20 L 580,150 L 10,150 Z"
                      fill="rgba(100,204,197,0.03)"
                    />
                    
                    {/* Important highlights */}
                    <circle cx="280" cy="120" r="4" fill="#64CCC5" />
                    <circle cx="580" cy="20" r="5" fill="#DAFFFB" />
                  </svg>
                  
                  {/* Floating J-Curve Stage labels */}
                  <div className="absolute bottom-2.5 left-3 sm:left-[28%] translate-x-0 sm:-translate-x-1/2 text-[8px] font-mono text-red-400/90 text-left sm:text-center max-w-[110px] sm:max-w-none bg-[#04090e] border border-red-400/25 px-1.5 py-0.5 rounded shadow-lg z-10">
                    Drawdown Phase (Net Capital Calls)
                  </div>
                  <div className="absolute top-[15%] right-3 sm:left-[80%] translate-x-0 sm:-translate-x-1/2 text-[8px] font-mono text-tealmint text-right sm:text-center max-w-[110px] sm:max-w-none bg-[#04090e] border border-tealmint/25 px-1.5 py-0.5 rounded shadow-lg z-10">
                    Realization Phase (TVPI: 1.54x)
                  </div>
                </div>
              </div>
            </>
          )}

          {/* TAB 4: AI PERFORMANCE AGENT */}
          {activeTab === 'ai' && (
            <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-4 shadow-md flex flex-col gap-4">
              <div>
                <h4 className="text-xs md:text-sm font-semibold text-pearl flex items-center gap-1.5">
                  <MessageSquare size={14} className="text-tealmint" />
                  <span>AI Performance Intelligence Commentary</span>
                </h4>
                <span className="text-[9px] font-mono text-pearl/40">Secured On-Demand Institutional Board Summary</span>
              </div>

              {/* Chat Simulation Area */}
              <div className="flex-1 flex flex-col gap-4 mt-2 font-mono text-[10px] md:text-xs">
                {/* User Input Prompt */}
                <div className="flex gap-2.5 items-start">
                  <span className="text-tealmint font-bold mt-1 select-none">PM&gt;</span>
                  <div className="bg-[#04090e]/80 border border-tealmint/10 rounded-xl p-3 w-full text-pearl/95">
                    Generate YTD attribution narrative and exposure drift review.
                  </div>
                </div>

                {/* AI Agent output response */}
                <div className="flex gap-2.5 items-start">
                  <span className="text-purple-400 font-bold mt-1 select-none">AI&gt;</span>
                  <div className="bg-[#060c14] border border-purple-500/15 rounded-xl p-4 w-full text-pearl/85 shadow-inner">
                    <div className="flex justify-between items-center mb-2.5 pb-2 border-b border-purple-500/10 select-none">
                      <span className="text-[8px] font-mono text-pearl/40">OA_AI_RESPONSE</span>
                      <div className="px-1.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-[7px] text-purple-400 font-mono">
                        EMBEDDED CO-PILOT
                      </div>
                    </div>
                    <p className="leading-relaxed text-pearl italic">
                      "Portfolio returned +12.4% YTD, outperforming the composite benchmark by +280 bps. Active return is driven primarily by allocation (+205 bps), led by US Equity (+210 bps) and PE Fund I (+80 bps). Allocation combined with +75 bps in selection return offset slight drag from alternative selection. Exposure drift remains within policy bounds: Equity YTD contribution is 52% (Money Mkt is YTD -10 bps)."
                    </p>
                    <div className="mt-3.5 border-t border-purple-500/10 pt-2 flex items-center justify-between text-[8px] text-pearl/40">
                      <span>Model: OptimizAlpha-Quant-1.0</span>
                      <span>Verified calculation lineage</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dummy input bar */}
              <div className="flex items-center gap-2.5 bg-[#04090e] border border-tealmint/20 rounded-xl px-3.5 py-2 mt-2 select-none opacity-60">
                <span className="text-[9px] font-mono text-pearl/30">Ask your portfolio agent a query...</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
