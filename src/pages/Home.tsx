import { useState, useEffect } from 'react';

import { 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  PieChart, 
  MessageSquare,
  Network,
  Activity,
  Award,
  ChevronRight
} from 'lucide-react';
import InteractiveDashboard from '../components/InteractiveDashboard';
import SpotlightEffect from '../components/SpotlightEffect';
import FeatureShowcase from '../components/FeatureShowcase';




interface HomeProps {
  onNavigate: (path: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [activeFeature, setActiveFeature] = useState(0);

  // Typewriter taglines
  const phrases = [
    "The command centre for multi-asset portfolios.",
    "Your golden source of truth for investment data.",
    "Take your data from fragmented to foundational."
  ];
  const [currentPhraseIdx, setCurrentPhraseIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: any;
    const currentPhrase = phrases[currentPhraseIdx];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
      }, 30);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
      }, 60);
    }

    if (!isDeleting && displayedText === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentPhraseIdx((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIdx]);

  const features = [
    {
      icon: <TrendingUp className="text-tealmint" size={24} />,
      title: "Performance Attribution",
      desc: "Brinson-Fachler and Brinson-Hood-Beebower models. Drill from consolidated multi-family structures down to individual security attribution. Identify exactly where alpha was generated or lost across sectors, asset classes and active managers.",
      pill: "Attribute Edge"
    },
    {
      icon: <PieChart className="text-tealmint" size={24} />,
      title: "Asset Allocation Analysis",
      desc: "Unite all liquid and alternative asset classes. High-fidelity multi-level breakdowns across traditional equities, private markets, real estate, and physical collections.",
      pill: "Exposures"
    },
    {
      icon: <Network className="text-tealmint" size={24} />,
      title: "Exposure Tracking",
      desc: "Track aggregate look-through exposures across geographies, GICS sectors, currencies and custom attributes. Identify concentration boundaries across complex holding networks in seconds.",
      pill: "Trends"
    },
    {
      icon: <Activity className="text-tealmint" size={24} />,
      title: "Drawdown & Risk Analytics",
      desc: "Server-side calculations for rolling returns, max drawdown, recovery velocity, Sharpe ratio, and Value-at-Risk (VaR), backed by a complete, audit-ready data lineage.",
      pill: "Risk Audit"
    },
    {
      icon: <Layers className="text-tealmint" size={24} />,
      title: "Private Equity Intelligence",
      desc: "Granular private market analytics tracking Net IRR, TVPI, DPI, and RVPI by vintage year. Model capital pacing, future drawdowns, and forward liquidity horizons with institutional precision.",
      pill: "PE Vintage"
    },
    {
      icon: <Award className="text-tealmint" size={24} />,
      title: "Mutual Fund & Mandate Analysis",
      desc: "Perform peer group benchmarking, manager analysis, and what-if scenario testing. Automatically compile comprehensive investment committee reports and client presentation decks.",
      pill: "IC Reports"
    },
    {
      icon: <MessageSquare className="text-tealmint" size={24} />,
      title: "AI Portfolio Analyst",
      desc: "Securely query your portfolio data in plain English. Analyze exposures, historical performances and benchmark deviations conversationally with zero data leakage risk.",
      pill: "LLM Powered"
    },
    {
      icon: <ShieldCheck className="text-tealmint" size={24} />,
      title: "Enterprise-Wide Security",
      desc: "Strict schema-level tenant isolation, custom whitelabeling, and role-based granular entitlements. Certified secure data sharing engineered for private banks, trust companies, and family offices.",
      pill: "Enterprise Sec"
    }
  ];

  return (
    <div className="bg-navy overflow-hidden">
      {/* 1. HERO SECTION */}
      <SpotlightEffect className="relative min-h-[95vh] pt-32 pb-24 flex items-center justify-center bg-financial-grid border-b border-tealmint/10">
        {/* Background blobs */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-ocean/10 blur-[120px] animate-aurora-1" />
        <div className="absolute bottom-1/5 right-1/10 w-96 h-96 rounded-full bg-tealmint/8 blur-[100px] animate-aurora-2" />
        <div className="absolute top-10 right-1/4 w-80 h-80 rounded-full bg-ocean/5 blur-[100px] pointer-events-none" />

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left gap-6 relative z-10">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-tealmint/10 border border-tealmint/25 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-tealmint animate-pulse" />
              <span className="font-mono text-xs font-semibold text-tealmint uppercase tracking-wider">
                Portfolio Intelligence Platform
              </span>
            </div>
 
            {/* H1 Display */}
            <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight text-pearl leading-none">
              See Every Edge.<br />
              <span className="bg-gradient-to-r from-ocean to-tealmint bg-clip-text text-transparent">
                Own Every Alpha.
              </span>
            </h1>
 
            {/* Typewriter Subheadline */}
            <div className="h-8 md:h-10 flex items-center">
              <p className="font-mono text-sm md:text-base text-tealmint typewriter-cursor font-medium">
                {displayedText}
              </p>
            </div>
 
            {/* Paragraph Body */}
            <p className="text-sm md:text-base text-pearl/70 leading-relaxed max-w-xl">
              OptimizAlpha provides family offices, wealth managers and private banks with a golden source of truth for their investment data. Aggregate and standardize complex multi-asset portfolios - across traditional and alternative investments - so your team spends less time building spreadsheets and more time generating investment value.
            </p>
 
            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <button 
                onClick={() => onNavigate('/contact')}
                className="btn-glow px-8 py-3.5 rounded-full bg-ocean border border-tealmint/30 text-pearl font-semibold hover:text-navy hover:bg-tealmint transition-all duration-300 shadow-xl shadow-ocean/20 text-sm cursor-pointer"
              >
                Request a Demo →
              </button>
              <a 
                href="#platform"
                className="px-8 py-3.5 rounded-full border border-tealmint/30 text-pearl/90 font-semibold hover:border-tealmint hover:text-tealmint transition-colors duration-300 text-sm cursor-pointer"
              >
                View Platform
              </a>
            </div>
 
          </div>
 
          {/* Hero Right Content (Floating Frame + Overlays) */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Spotlight Glow Behind Mockup */}
            <div className="absolute w-[450px] h-[450px] rounded-full bg-tealmint/10 blur-[90px] -z-10" />
 
            <div className="w-full animate-float max-w-lg md:max-w-none">
              <InteractiveDashboard isHero={true} />
            </div>
 
            {/* Floating Metric Card 1 */}
            <div className="absolute -top-6 -left-10 bg-navy/85 border border-tealmint/25 backdrop-blur-md rounded-xl p-4 shadow-2xl shadow-navy/50 animate-float-slow hidden lg:block hover:border-tealmint/50 transition-colors duration-300">
              <span className="text-[9px] font-mono text-pearl/50 tracking-wider uppercase block">ALPHA GENERATED</span>
              <span className="text-base font-mono font-bold text-tealmint">+3.81% YTD</span>
            </div>
 
            {/* Floating Metric Card 2 */}
            <div className="absolute bottom-8 -right-10 bg-navy/85 border border-tealmint/25 backdrop-blur-md rounded-xl p-4 shadow-2xl shadow-navy/50 animate-float hidden lg:block hover:border-tealmint/50 transition-colors duration-300">
              <span className="text-[9px] font-mono text-pearl/50 tracking-wider uppercase block">MAX DRAWDOWN</span>
              <span className="text-base font-mono font-bold text-red-400">-4.20% Peak</span>
            </div>
          </div>
        </div>
      </SpotlightEffect>



      {/* 3. PLATFORM SECTION */}
      <section id="platform" className="py-24 relative max-w-[1600px] mx-auto px-6 md:px-12 border-b border-tealmint/10">
        {/* Deep background radial spotlight glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-ocean/5 blur-[150px] pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-tealmint/5 border border-tealmint/20 mb-4 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-tealmint/60" />
            <span className="font-mono text-[9px] font-semibold text-tealmint uppercase tracking-widest">
              Command Centre
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-pearl leading-tight">
            The ultimate command centre <br />
            <span className="bg-gradient-to-r from-ocean to-tealmint bg-clip-text text-transparent">for multi-asset portfolios.</span>
          </h2>
          <p className="text-sm md:text-base text-pearl/70 leading-relaxed mt-6 max-w-2xl mx-auto">
            Unite all your liquid and alternative asset data in one secure, unified platform. Monitor traditional equities alongside private markets, real estate, and physical holdings with institutional-grade attribution and real-time liquidity forecasting.
          </p>
        </div>

        {/* Dynamic Mockup Preview Showcase */}
        <div className="bg-[#050c12] border border-tealmint/15 rounded-3xl p-6 md:p-8 shadow-2xl premium-glow-shadow relative z-10 transition-all duration-500 hover:border-tealmint/30">
          <div className="absolute inset-0 bg-gradient-to-b from-ocean/5 to-transparent pointer-events-none rounded-3xl" />
          <InteractiveDashboard />
        </div>
      </section>

      {/* 4. FEATURES GRID / SHOWCASE */}
      <section id="features" className="py-24 bg-[#03070b] bg-financial-grid border-b border-tealmint/10 relative z-10">
        {/* Deep background radial spotlight glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-ocean/5 blur-[150px] pointer-events-none" />

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-tealmint/10 border border-tealmint/25 backdrop-blur-md mb-4 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-tealmint animate-pulse" />
              <span className="font-mono text-xs font-semibold text-tealmint uppercase tracking-wider">
                Institutional Analytics Suite
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-pearl leading-none mt-2">
              Every angle. Every asset class. <br />
              <span className="bg-gradient-to-r from-ocean to-tealmint bg-clip-text text-transparent">One platform.</span>
            </h2>
          </div>

          {/* Desktop split layout (large screens) */}
          <div className="hidden lg:grid grid-cols-12 gap-12 items-start">
            {/* Left side list items */}
            <div className="col-span-5 flex flex-col gap-4">
              {features.map((feat, idx) => {
                const isActive = activeFeature === idx;
                return (
                  <div 
                    key={idx}
                    onMouseEnter={() => setActiveFeature(idx)}
                    className={`border rounded-2xl p-5 flex gap-4 transition-all duration-300 cursor-pointer relative group ${
                      isActive 
                        ? 'bg-ocean/15 border-tealmint/40 shadow-xl shadow-tealmint/5 hover:scale-[1.01]' 
                        : 'bg-[#050c12]/40 border-tealmint/10 hover:border-tealmint/25 hover:bg-ocean/5 hover:scale-[1.01]'
                    }`}
                  >
                    {/* Active highlight side line */}
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-tealmint rounded-l-2xl" />
                    )}
                    
                    {/* Subtle quant index indicator */}
                    <span className="absolute top-4 right-4 font-mono text-[8px] text-tealmint/30 group-hover:text-tealmint/60 transition-colors">
                      [0{idx + 1}]
                    </span>
                    
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-md transition-all duration-300 ${
                      isActive ? 'bg-tealmint text-navy' : 'bg-tealmint/5 border border-tealmint/20 text-tealmint group-hover:bg-tealmint group-hover:text-navy'
                    }`}>
                      {feat.icon}
                    </div>
                    <div className="flex flex-col gap-1 flex-1 min-w-0 pr-6">
                      <div className="flex items-center gap-2">
                        <h3 className={`font-display text-xl font-bold transition-colors truncate ${
                          isActive ? 'text-tealmint' : 'text-pearl'
                        }`}>
                          {feat.title}
                        </h3>
                        <span className="font-mono text-[8px] uppercase tracking-wider text-tealmint px-2 py-0.5 rounded-full bg-tealmint/10 border border-tealmint/20 shrink-0 select-none">
                          {feat.pill}
                        </span>
                      </div>
                      <p className="text-xs text-pearl/70 leading-relaxed group-hover:text-pearl/90 transition-colors">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right side Showcase Window (Stretched column so sticky is bounded) */}
            <div className="col-span-7 relative h-full">
              <div 
                className="sticky top-28 h-[500px] rounded-3xl border border-tealmint/15 bg-[#04090e] shadow-2xl premium-glow-shadow p-6 relative overflow-hidden flex flex-col justify-between transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-tealmint/25"
                style={{ transform: `translateY(${activeFeature * 78}px)` }}
              >
                {/* Browser Mock Top bar decoration */}
                <div className="absolute top-0 left-0 right-0 h-10 border-b border-tealmint/10 bg-[#060c14] px-4 flex items-center gap-1.5 shrink-0 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <div className="h-4 w-44 rounded bg-[#0b141e] border border-tealmint/10 mx-auto text-[7px] font-mono text-pearl/30 flex items-center justify-center tracking-wider uppercase select-none">
                    OA://ANALYTICS_PREVIEW
                  </div>
                </div>
                
                {/* Showcase Container */}
                <div className="flex-1 mt-8 pt-4 overflow-y-auto scroll-hide-scrollbar">
                  <FeatureShowcase activeIndex={activeFeature} />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile responsive layout (md and below) */}
          <div className="flex flex-col gap-6 lg:hidden">
            {features.map((feat, idx) => {
              const isExpanded = activeFeature === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => setActiveFeature(activeFeature === idx ? -1 : idx)}
                  className={`border rounded-xl p-5 flex flex-col gap-3 transition-all duration-300 cursor-pointer ${
                    isExpanded ? 'bg-ocean/20 border-tealmint/30 shadow-lg' : 'glass-card border-tealmint/10'
                  }`}
                >
                  <div className="flex gap-4 items-center">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 shadow-md ${
                      isExpanded ? 'bg-tealmint text-navy' : 'bg-ocean/20 text-tealmint'
                    }`}>
                      {feat.icon}
                    </div>
                    <div className="flex-1 flex items-center justify-between min-w-0">
                      <div>
                        <h3 className={`font-display text-base font-bold truncate ${
                          isExpanded ? 'text-tealmint' : 'text-pearl'
                        }`}>
                          {feat.title}
                        </h3>
                        <span className="font-mono text-[7px] uppercase tracking-wider text-tealmint">
                          {feat.pill}
                        </span>
                      </div>
                      <ChevronRight size={14} className={`text-pearl/40 transition-transform ${isExpanded ? 'rotate-90 text-tealmint' : ''}`} />
                    </div>
                  </div>
                  
                  <p className="text-xs text-pearl/70 leading-relaxed">
                    {feat.desc}
                  </p>

                  {/* Accordion Expandable Snapshot Preview */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-tealmint/10 animate-fadeIn">
                      <div className="rounded-xl border border-tealmint/10 bg-[#04090e] p-4 relative overflow-hidden h-[340px]">
                        <div className="h-full overflow-y-auto scroll-hide-scrollbar">
                          <FeatureShowcase activeIndex={idx} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* 6. HOW IT WORKS */}
      <section className="py-24 max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-tealmint uppercase tracking-widest block mb-2">Onboarding Roadmap</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-pearl">
            From raw data to decisive insight - in hours, not months.
          </h2>
        </div>

        {/* 3 Step Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[1px] bg-tealmint/20 z-0" />

          {/* Step 1 */}
          <div className="bg-[#050c12] border border-tealmint/10 rounded-2xl p-8 text-center flex flex-col items-center gap-4 relative z-10">
            <div className="w-10 h-10 rounded-full bg-ocean text-pearl font-mono text-sm font-bold flex items-center justify-center border border-tealmint/30 shadow-md">
              01
            </div>
            <h3 className="font-display text-xl font-bold text-pearl">Consolidate</h3>
            <p className="text-sm text-pearl/70 leading-relaxed">
              Securely ingest portfolio data from any source (APIs, custodian datafeeds, Excel, CSV, or SWIFT). We map, clean, and standardize multi-currency transaction records into a single trusted ledger.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#050c12] border border-tealmint/10 rounded-2xl p-8 text-center flex flex-col items-center gap-4 relative z-10">
            <div className="w-10 h-10 rounded-full bg-ocean text-pearl font-mono text-sm font-bold flex items-center justify-center border border-tealmint/30 shadow-md">
              02
            </div>
            <h3 className="font-display text-xl font-bold text-pearl">Analyze</h3>
            <p className="text-sm text-pearl/70 leading-relaxed">
              The quantitative engine automatically calculates Brinson attribution models, rolling risk metrics, private market vintage performance (IRR, TVPI), and looking-through exposures.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#050c12] border border-tealmint/10 rounded-2xl p-8 text-center flex flex-col items-center gap-4 relative z-10">
            <div className="w-10 h-10 rounded-full bg-ocean text-pearl font-mono text-sm font-bold flex items-center justify-center border border-tealmint/30 shadow-md">
              03
            </div>
            <h3 className="font-display text-xl font-bold text-pearl">Report & Decide</h3>
            <p className="text-sm text-pearl/70 leading-relaxed">
              Generate client-ready multi-asset reports in one click. Equip your investment committee and relationship managers with interactive dashboards, automated bookkeeping feeds, and our AI portfolio analyst.
            </p>
          </div>
        </div>
      </section>



      {/* 8. PRICING TEASER */}
      <section id="pricing" className="py-24 max-w-[1600px] mx-auto px-6 md:px-12 border-t border-tealmint/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-tealmint uppercase tracking-widest block mb-2">Platform Pricing</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-pearl">
            Enterprise Tier Solutions
          </h2>
          <p className="text-sm text-pearl/60 mt-3 font-mono">
            Custom onboarding and technical integration pipelines included in all packages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Foundation Tier */}
          <div className="bg-[#050c12] border border-tealmint/10 rounded-2xl p-8 flex flex-col justify-between hover:border-tealmint/30 transition-colors">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs text-tealmint uppercase tracking-widest">Starter</span>
              <h3 className="font-display text-2xl font-bold text-pearl">Foundational Analytics</h3>
              <p className="text-xs text-pearl/65 leading-relaxed mt-2">
                Robust multi-asset data consolidation and performance reporting built for single-family offices starting their digital transition.
              </p>
              <ul className="mt-6 space-y-2.5 font-mono text-[11px] text-pearl/80">
                <li>• Single-entity portfolio monitoring</li>
                <li>• Assets under management up to $500M</li>
                <li>• Cumulative performance attribution</li>
                <li>• Basic exposure reporting modules</li>
                <li>• Core risk analytics suite</li>
              </ul>
            </div>
            <button 
              onClick={() => onNavigate('/contact')}
              className="w-full py-2.5 mt-8 rounded-full border border-tealmint/25 text-tealmint font-semibold text-xs hover:bg-tealmint hover:text-navy transition-all duration-300"
            >
              Contact Sales
            </button>
          </div>

          {/* Professional Tier */}
          <div className="bg-[#07131e] border-2 border-tealmint rounded-2xl p-8 flex flex-col justify-between shadow-xl shadow-tealmint/5 relative">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-ocean to-tealmint text-navy font-mono text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
              Most Selected
            </span>
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs text-tealmint uppercase tracking-widest mt-2">Growth</span>
              <h3 className="font-display text-2xl font-bold text-pearl">Command Centre</h3>
              <p className="text-xs text-pearl/70 leading-relaxed mt-2">
                Advanced portfolio analytics, look-through exposures, and private equity intelligence designed for family offices and institutions handling complex multi-entity allocations.
              </p>
              <ul className="mt-6 space-y-2.5 font-mono text-[11px] text-pearl/85">
                <li>• Multi-entity hierarchical reporting</li>
                <li>• Private equity vintage intelligence</li>
                <li>• Active Brinson-Fachler attribution</li>
                <li>• Custom user preference layouts</li>
                <li>• API Ingestion integrations</li>
              </ul>
            </div>
            <button 
              onClick={() => onNavigate('/contact')}
              className="w-full py-2.5 mt-8 rounded-full bg-ocean border border-tealmint/30 text-pearl font-semibold text-xs hover:bg-tealmint hover:text-navy transition-all duration-300"
            >
              Contact Sales
            </button>
          </div>

          {/* Institutional Tier */}
          <div className="bg-[#050c12] border border-tealmint/10 rounded-2xl p-8 flex flex-col justify-between hover:border-tealmint/30 transition-colors">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs text-tealmint uppercase tracking-widest">Enterprise</span>
              <h3 className="font-display text-2xl font-bold text-pearl">Institutional Command</h3>
              <p className="text-xs text-pearl/65 leading-relaxed mt-2">
                Complete white-labeling, automated custodian datafeeds, custom API access, and Postgres-level data isolation for private banks, trust companies, and large institutional asset managers.
              </p>
              <ul className="mt-6 space-y-2.5 font-mono text-[11px] text-pearl/80">
                <li>• Full whitelabel domain authorization</li>
                <li>• Custom quantitative metrics engineering</li>
                <li>• Schema-level client Isolation controls</li>
                <li>• Dedicated implementation manager</li>
                <li>• High-priority SLA and SLA pipelines</li>
              </ul>
            </div>
            <button 
              onClick={() => onNavigate('/contact')}
              className="w-full py-2.5 mt-8 rounded-full border border-tealmint/25 text-tealmint font-semibold text-xs hover:bg-tealmint hover:text-navy transition-all duration-300"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA CARD */}
      <section className="py-24 max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="relative py-20 md:py-24 px-6 md:px-12 bg-[#050c12] border border-tealmint/15 rounded-3xl text-center overflow-hidden shadow-2xl shadow-[#00050c]/50">
          {/* Glow blobs inside the card */}
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-ocean/20 blur-[120px] pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center gap-6">
            <h2 className="font-display text-5xl md:text-7xl font-bold text-pearl leading-tight">
              Ready to see your portfolio clearly?
            </h2>
            <p className="text-sm md:text-base text-pearl/75 leading-relaxed max-w-xl">
              Join investment teams across Asia and the Middle East who've made OptimizAlpha their institutional portfolio intelligence layer.
            </p>

            <button 
              onClick={() => onNavigate('/contact')}
              className="btn-glow px-10 py-4 mt-4 rounded-full bg-ocean border border-tealmint/30 text-pearl font-bold hover:bg-tealmint hover:text-navy transition-all duration-300 shadow-xl shadow-ocean/30 text-sm"
            >
              Schedule a Demo →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
