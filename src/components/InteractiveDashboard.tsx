import { useState } from 'react';
import { 
  TrendingUp, 
  PieChart, 
  Layers, 
  Shield, 
  Settings, 
  LogOut, 
  Download, 
  Sliders
} from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  benchmark?: string;
}

function MetricCard({ label, value, change, isPositive, benchmark }: MetricCardProps) {
  return (
    <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-5 hover:border-tealmint/30 transition-all duration-300 shadow-md">
      <span className="text-[11px] font-mono text-pearl/50 uppercase tracking-wider">{label}</span>
      <div className="flex items-baseline gap-2 mt-2">
        <span className="text-2xl font-mono font-semibold text-pearl">{value}</span>
        <span className={`flex items-center text-xs font-mono font-medium ${isPositive ? 'text-tealmint' : 'text-red-400'}`}>
          {isPositive ? '+' : ''}{change}
        </span>
      </div>
      {benchmark && (
        <span className="text-[10px] font-mono text-pearl/40 block mt-1">
          {benchmark} vs benchmark
        </span>
      )}
    </div>
  );
}

export default function InteractiveDashboard() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'assets' | 'pe'>('dashboard');
  const [timeframe, setTimeframe] = useState<'cumulative' | 'annualized' | 'ytd'>('cumulative');

  // Performance Chart Data (SVG points)
  const linePoints = "M 40,160 Q 120,130 200,140 T 360,90 T 520,70 T 680,40";
  const benchmarkPoints = "M 40,160 Q 120,150 200,152 T 360,120 T 520,110 T 680,95";

  return (
    <div className="w-full max-w-7xl mx-auto rounded-2xl overflow-hidden border border-tealmint/15 bg-[#04090e] shadow-2xl flex flex-col md:flex-row h-auto md:h-[720px] text-pearl">
      {/* Sidebar Mockup */}
      <div className="w-full md:w-60 bg-[#060d14] border-b md:border-b-0 md:border-r border-tealmint/10 p-6 flex flex-col justify-between shrink-0">
        <div className="flex flex-col gap-8">
          {/* Dashboard Mini-Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-ocean to-tealmint flex items-center justify-center">
              <span className="font-mono text-[9px] font-bold text-navy">OA</span>
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              OptimizAlpha
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 text-left ${
                activeTab === 'dashboard'
                  ? 'bg-ocean/30 border-l-2 border-tealmint text-tealmint font-semibold'
                  : 'text-pearl/65 hover:bg-pearl/5 hover:text-pearl'
              }`}
            >
              <TrendingUp size={16} />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab('assets')}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 text-left ${
                activeTab === 'assets'
                  ? 'bg-ocean/30 border-l-2 border-tealmint text-tealmint font-semibold'
                  : 'text-pearl/65 hover:bg-pearl/5 hover:text-pearl'
              }`}
            >
              <PieChart size={16} />
              <span>Asset Classes</span>
            </button>

            <button
              onClick={() => setActiveTab('pe')}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 text-left ${
                activeTab === 'pe'
                  ? 'bg-ocean/30 border-l-2 border-tealmint text-tealmint font-semibold'
                  : 'text-pearl/65 hover:bg-pearl/5 hover:text-pearl'
              }`}
            >
              <Layers size={16} />
              <span>Private Equity</span>
            </button>
          </div>
        </div>

        {/* Sidebar Footer Elements */}
        <div className="flex flex-col gap-4 mt-8 md:mt-0 pt-6 border-t border-tealmint/15">
          <div className="flex items-center justify-between text-xs text-pearl/55 px-2">
            <span className="flex items-center gap-1">
              <Shield size={12} className="text-tealmint" />
              <span>Admin Mode</span>
            </span>
            <Settings size={12} className="hover:text-tealmint cursor-pointer" />
          </div>
          
          <div className="flex items-center justify-between text-xs text-pearl/40 px-2">
            <span>Aman (CEO)</span>
            <LogOut size={12} className="hover:text-red-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Panel Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#04080d]">
        {/* Mock Top bar */}
        <div className="h-16 border-b border-tealmint/10 px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-pearl/40">Workspace / </span>
            <span className="text-xs font-mono text-tealmint">
              {activeTab === 'dashboard' && 'Portfolio Overview'}
              {activeTab === 'assets' && 'Asset Class Allocation'}
              {activeTab === 'pe' && 'Private Equity Vintage'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-ocean/20 border border-tealmint/20 text-[11px] font-mono hover:bg-ocean/40 transition-colors text-pearl/80">
              <Download size={12} />
              <span>Export PDF</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-ocean/20 border border-tealmint/20 text-[11px] font-mono hover:bg-ocean/40 transition-colors text-pearl/80">
              <Sliders size={12} />
              <span>Preferences</span>
            </button>
          </div>
        </div>

        {/* Scrollable View Area */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {/* TAB 1: DASHBOARD OVERVIEW */}
          {activeTab === 'dashboard' && (
            <>
              {/* Row of Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="col-span-2 lg:col-span-1 bg-gradient-to-br from-ocean/20 to-navy border border-tealmint/20 rounded-xl p-5">
                  <span className="text-[10px] font-mono text-tealmint uppercase tracking-widest block">Total Portfolio AUM</span>
                  <div className="text-3xl font-mono font-bold text-pearl mt-2">$257.8M</div>
                  <div className="text-[11px] text-pearl/50 mt-1 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-tealmint animate-pulse" />
                    <span>Live Aggregation</span>
                  </div>
                </div>
                <MetricCard label="1-Month (TWR)" value="+0.89%" change="+0.8%" isPositive={true} benchmark="+0.8%" />
                <MetricCard label="3-Month (TWR)" value="+1.92%" change="+1.9%" isPositive={true} benchmark="+1.5%" />
                <MetricCard label="YTD (TWR)" value="+8.31%" change="+8.3%" isPositive={true} benchmark="+8.3%" />
                <MetricCard label="1-Year (TWR)" value="+9.55%" change="+9.5%" isPositive={true} benchmark="+8.5%" />
              </div>

              {/* Two columns charts */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Column 1 & 2: Line Graph */}
                <div className="lg:col-span-2 bg-[#0b141e] border border-tealmint/10 rounded-xl p-5 flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-pearl">Portfolio Performance</h4>
                      <span className="text-[10px] font-mono text-pearl/40">TWR vs Benchmark (OBS_TGT)</span>
                    </div>
                    <div className="flex bg-navy border border-tealmint/15 rounded-lg p-0.5 text-[10px] font-mono">
                      <button
                        onClick={() => setTimeframe('cumulative')}
                        className={`px-2 py-1 rounded ${timeframe === 'cumulative' ? 'bg-ocean text-pearl font-semibold' : 'text-pearl/60'}`}
                      >
                        Cum
                      </button>
                      <button
                        onClick={() => setTimeframe('annualized')}
                        className={`px-2 py-1 rounded ${timeframe === 'annualized' ? 'bg-ocean text-pearl font-semibold' : 'text-pearl/60'}`}
                      >
                        Ann
                      </button>
                      <button
                        onClick={() => setTimeframe('ytd')}
                        className={`px-2 py-1 rounded ${timeframe === 'ytd' ? 'bg-ocean text-pearl font-semibold' : 'text-pearl/60'}`}
                      >
                        YTD
                      </button>
                    </div>
                  </div>

                  {/* SVG Chart */}
                  <div className="relative h-48 w-full border-b border-l border-pearl/10 mt-2">
                    <svg className="w-full h-full" viewBox="0 0 720 200" preserveAspectRatio="none">
                      {/* Grid Lines */}
                      <line x1="0" y1="50" x2="720" y2="50" stroke="rgba(218,255,251,0.05)" strokeDasharray="4" />
                      <line x1="0" y1="100" x2="720" y2="100" stroke="rgba(218,255,251,0.05)" strokeDasharray="4" />
                      <line x1="0" y1="150" x2="720" y2="150" stroke="rgba(218,255,251,0.05)" strokeDasharray="4" />

                      {/* Area gradient for portfolio */}
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#64CCC5" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#176B87" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Filled Area */}
                      <path d={`${linePoints} L 680,200 L 40,200 Z`} fill="url(#chartGradient)" />

                      {/* Benchmark Line */}
                      <path
                        d={benchmarkPoints}
                        fill="none"
                        stroke="#176B87"
                        strokeWidth="1.5"
                        strokeDasharray="4"
                      />

                      {/* Portfolio Line */}
                      <path
                        d={linePoints}
                        fill="none"
                        stroke="#64CCC5"
                        strokeWidth="2.5"
                        className="transition-all duration-500"
                      />

                      {/* Animated Hover Point */}
                      <circle cx="520" cy="70" r="5" fill="#64CCC5" stroke="#001C30" strokeWidth="2" />
                    </svg>

                    {/* Hover Stats Tag */}
                    <div className="absolute top-8 left-2/3 bg-ocean/90 border border-tealmint/30 rounded px-2 py-1 text-[10px] font-mono shadow-md backdrop-blur-sm">
                      <span className="block text-[8px] text-pearl/50">NOV 24</span>
                      <span className="font-bold text-tealmint">Portfolio: +8.31%</span>
                      <span className="block text-[8px] text-pearl/40">Benchmark: +6.12%</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[9px] font-mono text-pearl/40 mt-3 px-2">
                    <span>JAN</span>
                    <span>MAR</span>
                    <span>MAY</span>
                    <span>JUL</span>
                    <span>SEP</span>
                    <span>NOV</span>
                    <span>DEC</span>
                  </div>
                </div>

                {/* Column 3: Donut breakdown */}
                <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-pearl">Portfolio Breakdown</h4>
                    <span className="text-[10px] font-mono text-pearl/40">Asset Class weights</span>
                  </div>

                  {/* Donut SVG */}
                  <div className="relative w-32 h-32 mx-auto my-4 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      {/* Base Track */}
                      <circle cx="50" cy="50" r="38" fill="transparent" stroke="rgba(23,107,135,0.08)" strokeWidth="10" />
                      {/* Alternative: 63.5% (Yellow-Gold) */}
                      <circle cx="50" cy="50" r="38" fill="transparent" stroke="#176B87" strokeWidth="10" strokeDasharray="151.7 238.7" strokeDashoffset="0" />
                      {/* Equity: 27.3% (Blue) */}
                      <circle cx="50" cy="50" r="38" fill="transparent" stroke="#64CCC5" strokeWidth="10" strokeDasharray="65.2 238.7" strokeDashoffset="-151.7" />
                      {/* Fixed Income: 9.0% (Teal) */}
                      <circle cx="50" cy="50" r="38" fill="transparent" stroke="#DAFFFB" strokeWidth="10" strokeDasharray="21.5 238.7" strokeDashoffset="-216.9" />
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-sm font-mono font-bold text-pearl">$257.8M</span>
                      <span className="text-[8px] font-mono text-pearl/40 uppercase tracking-widest mt-0.5">Total</span>
                    </div>
                  </div>

                  {/* Legend Labels */}
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-1.5 rounded bg-ocean inline-block" />
                      <span className="text-[10px] font-mono text-pearl/80">Alternative (63.5%)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-1.5 rounded bg-tealmint inline-block" />
                      <span className="text-[10px] font-mono text-pearl/80">Equity (27.3%)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-1.5 rounded bg-pearl inline-block" />
                      <span className="text-[10px] font-mono text-pearl/80">Fixed Income (9.0%)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-1.5 rounded bg-red-400 inline-block" />
                      <span className="text-[10px] font-mono text-pearl/80">Cash (0.2%)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: Risk Metrics + Rolling Drawdown */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Risk metrics listing */}
                <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-5">
                  <h4 className="text-sm font-semibold text-pearl mb-4">Risk Metrics Attribution</h4>
                  <div className="space-y-3 font-mono">
                    <div className="flex justify-between items-center text-xs pb-2 border-b border-pearl/5">
                      <span className="text-pearl/60">YTD Portfolio Volatility</span>
                      <span className="text-tealmint">11.42%</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-2 border-b border-pearl/5">
                      <span className="text-pearl/60">Sharpe Ratio (Rf=3.5%)</span>
                      <span className="text-tealmint">1.42</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-2 border-b border-pearl/5">
                      <span className="text-pearl/60">Sortino Ratio</span>
                      <span className="text-tealmint">1.84</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-2 border-b border-pearl/5">
                      <span className="text-pearl/60">Portfolio Alpha vs Benchmark</span>
                      <span className="text-tealmint font-semibold">+3.81%</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pb-2 border-b border-pearl/5">
                      <span className="text-pearl/60">Beta Attribution Factor</span>
                      <span className="text-pearl">0.92</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-pearl/60">Maximum Portfolio Drawdown</span>
                      <span className="text-red-400">-4.20%</span>
                    </div>
                  </div>
                </div>

                {/* Drawdowns SVG */}
                <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-pearl">Portfolio Drawdown — Rolling 12 Months</h4>
                    <span className="text-[10px] font-mono text-pearl/40">Peak-to-valley drawdown curve</span>
                  </div>

                  <div className="relative h-32 w-full mt-4">
                    <svg className="w-full h-full" viewBox="0 0 500 100" preserveAspectRatio="none">
                      {/* Zero boundary line */}
                      <line x1="0" y1="10" x2="500" y2="10" stroke="rgba(218,255,251,0.2)" strokeWidth="1" />
                      
                      {/* Deep red spiked drawdown curve */}
                      <path
                        d="M 0,10 L 40,10 Q 70,30 100,10 T 160,10 T 220,70 T 280,30 T 340,10 T 400,90 T 450,15 T 500,10"
                        fill="none"
                        stroke="#f87171"
                        strokeWidth="2"
                      />
                      {/* Red Area Gradient */}
                      <path
                        d="M 0,10 L 40,10 Q 70,30 100,10 T 160,10 T 220,70 T 280,30 T 340,10 T 400,90 T 450,15 T 500,10 L 500,100 L 0,100 Z"
                        fill="rgba(248,113,113,0.08)"
                      />

                      {/* Maximum spike tag */}
                      <circle cx="400" cy="90" r="4" fill="#f87171" />
                    </svg>
                    <div className="absolute top-20 left-[350px] text-[8px] font-mono text-red-400 bg-red-400/10 border border-red-400/20 px-1 rounded">
                      Max: -4.20%
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* TAB 2: ASSET CLASSES */}
          {activeTab === 'assets' && (
            <>
              {/* Asset Classes stats blocks */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-4">
                  <span className="text-[10px] font-mono text-pearl/40 block">EQUITY</span>
                  <span className="text-xl font-mono font-bold text-pearl block mt-1">$70.4M</span>
                  <div className="w-full bg-navy h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-tealmint h-full rounded-full w-[27.3%]" />
                  </div>
                  <span className="text-[10px] font-mono text-tealmint block mt-1.5">+11.74% YTD</span>
                </div>

                <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-4">
                  <span className="text-[10px] font-mono text-pearl/40 block">FIXED INCOME</span>
                  <span className="text-xl font-mono font-bold text-pearl block mt-1">$23.4M</span>
                  <div className="w-full bg-navy h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-pearl h-full rounded-full w-[9.0%]" />
                  </div>
                  <span className="text-[10px] font-mono text-tealmint block mt-1.5">+5.71% YTD</span>
                </div>

                <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-4">
                  <span className="text-[10px] font-mono text-pearl/40 block">ALTERNATIVE</span>
                  <span className="text-xl font-mono font-bold text-pearl block mt-1">$163.8M</span>
                  <div className="w-full bg-navy h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-ocean h-full rounded-full w-[63.5%]" />
                  </div>
                  <span className="text-[10px] font-mono text-tealmint block mt-1.5">+7.26% YTD</span>
                </div>

                <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-4">
                  <span className="text-[10px] font-mono text-pearl/40 block">CASH</span>
                  <span className="text-xl font-mono font-bold text-pearl block mt-1">$84K</span>
                  <div className="w-full bg-navy h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-red-400 h-full rounded-full w-[1.5%]" />
                  </div>
                  <span className="text-[10px] font-mono text-tealmint block mt-1.5">+13.36% YTD</span>
                </div>
              </div>

              {/* Two columns: Exposure trend, AUM movement */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Bar chart exposure */}
                <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-pearl">Exposure Trend by Asset Class</h4>
                    <span className="text-[10px] font-mono text-pearl/40">Yearly comparison 2024 vs 2025</span>
                  </div>

                  <div className="h-44 w-full mt-6 relative flex items-end justify-around border-b border-pearl/10 pb-2">
                    {/* 2024 bars */}
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="flex items-end gap-1.5 h-32">
                        {/* Equity 2024 */}
                        <div className="w-4 bg-tealmint/60 h-20 rounded-t" />
                        {/* Alternative 2024 */}
                        <div className="w-4 bg-ocean/60 h-28 rounded-t" />
                        {/* Fixed Income 2024 */}
                        <div className="w-4 bg-pearl/60 h-10 rounded-t" />
                      </div>
                      <span className="text-[9px] font-mono text-pearl/50">2024</span>
                    </div>

                    {/* 2025 bars */}
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="flex items-end gap-1.5 h-32">
                        {/* Equity 2025 */}
                        <div className="w-4 bg-tealmint h-24 rounded-t" />
                        {/* Alternative 2025 */}
                        <div className="w-4 bg-ocean h-32 rounded-t" />
                        {/* Fixed Income 2025 */}
                        <div className="w-4 bg-pearl h-12 rounded-t" />
                      </div>
                      <span className="text-[9px] font-mono text-pearl/50">2025</span>
                    </div>
                  </div>

                  <div className="flex justify-center gap-4 text-[9px] font-mono text-pearl/60 mt-3">
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2 rounded-sm bg-tealmint inline-block" />
                      <span>Equity</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2 rounded-sm bg-ocean inline-block" />
                      <span>Alternative</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2 rounded-sm bg-pearl inline-block" />
                      <span>Fixed Income</span>
                    </span>
                  </div>
                </div>

                {/* waterfall bar chart inflow */}
                <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-pearl">AUM Capital Flows</h4>
                    <span className="text-[10px] font-mono text-pearl/40">Inflow / Outflow transitions</span>
                  </div>

                  <div className="h-44 w-full mt-6 relative flex items-end justify-around border-b border-pearl/10 pb-2">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 bg-tealmint h-28 rounded-t relative">
                        <span className="absolute -top-5 left-0 right-0 text-[8px] font-mono text-center text-tealmint">+$14.5M</span>
                      </div>
                      <span className="text-[8px] font-mono text-pearl/50">Q1 Inflow</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 bg-red-400/70 h-10 rounded-t relative">
                        <span className="absolute -top-5 left-0 right-0 text-[8px] font-mono text-center text-red-400">-$3.0M</span>
                      </div>
                      <span className="text-[8px] font-mono text-pearl/50">Q2 Outflow</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 bg-tealmint h-20 rounded-t relative">
                        <span className="absolute -top-5 left-0 right-0 text-[8px] font-mono text-center text-tealmint">+$9.2M</span>
                      </div>
                      <span className="text-[8px] font-mono text-pearl/50">Q3 Inflow</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 bg-tealmint h-32 rounded-t relative">
                        <span className="absolute -top-5 left-0 right-0 text-[8px] font-mono text-center text-tealmint">+$22.5M</span>
                      </div>
                      <span className="text-[8px] font-mono text-pearl/50">Q4 Inflow</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* TAB 3: PRIVATE EQUITY */}
          {activeTab === 'pe' && (
            <>
              {/* Vintage PE Metrics */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-[#0b141e] border border-tealmint/10 rounded-xl p-5">
                  <h4 className="text-sm font-semibold text-pearl mb-4">Vintage PE Performance Summary</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-mono text-xs">
                      <thead>
                        <tr className="border-b border-pearl/10 text-pearl/40 uppercase text-[9px] tracking-wider">
                          <th className="py-2.5">Fund Vintage</th>
                          <th className="py-2.5">Commitment</th>
                          <th className="py-2.5">DPI (Realized)</th>
                          <th className="py-2.5">TVPI (Multiple)</th>
                          <th className="py-2.5">Net IRR</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-pearl/5">
                          <td className="py-3 font-semibold text-pearl">Fund 2018 (Vintage)</td>
                          <td className="py-3">$25.0M</td>
                          <td className="py-3 text-tealmint">0.82x</td>
                          <td className="py-3">1.64x</td>
                          <td className="py-3 text-tealmint font-semibold">18.42%</td>
                        </tr>
                        <tr className="border-b border-pearl/5">
                          <td className="py-3 font-semibold text-pearl">Fund 2020 (Vintage)</td>
                          <td className="py-3">$30.0M</td>
                          <td className="py-3 text-tealmint">0.34x</td>
                          <td className="py-3">1.42x</td>
                          <td className="py-3 text-tealmint font-semibold">14.10%</td>
                        </tr>
                        <tr className="border-b border-pearl/5">
                          <td className="py-3 font-semibold text-pearl">Fund 2022 (Vintage)</td>
                          <td className="py-3">$40.0M</td>
                          <td className="py-3 text-tealmint">0.05x</td>
                          <td className="py-3">1.18x</td>
                          <td className="py-3 text-tealmint font-semibold">8.95%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* PE J-Curve Line Chart */}
                <div className="bg-[#0b141e] border border-tealmint/10 rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-pearl">J-Curve Cumulative Cash Flow</h4>
                    <span className="text-[10px] font-mono text-pearl/40">Initial drawdowns vs recovery realization</span>
                  </div>

                  <div className="relative h-32 w-full mt-4">
                    <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                      {/* Zero baseline */}
                      <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(218,255,251,0.2)" strokeWidth="1" />
                      {/* PE J-curve line */}
                      <path
                        d="M 0,50 Q 50,85 100,90 T 200,60 T 300,10"
                        fill="none"
                        stroke="#64CCC5"
                        strokeWidth="2.5"
                      />
                      {/* Area under J-Curve */}
                      <path
                        d="M 0,50 Q 50,85 100,90 T 200,60 T 300,10 L 300,50 Z"
                        fill="rgba(100,204,197,0.05)"
                      />
                      <circle cx="300" cy="10" r="4" fill="#64CCC5" />
                    </svg>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
