import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
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


interface CounterProps {
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-mono text-tealmint text-4xl md:text-5xl font-bold">
      {count}{suffix}
    </span>
  );
}

interface HomeProps {
  onNavigate: (path: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [activeFeature, setActiveFeature] = useState(0);

  // Typewriter taglines
  const phrases = [
    "Attribution analytics built for family offices.",
    "Exposure intelligence for private banks.",
    "Multi-asset performance. Institutional precision."
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
      desc: "Brinson-Fachler model. Drill from total portfolio down to individual security level. Identify exactly where alpha was generated — or lost — across sectors, geographies, and managers.",
      pill: "Attribute Edge"
    },
    {
      icon: <PieChart className="text-tealmint" size={24} />,
      title: "Asset Allocation Analysis",
      desc: "Interactive multi-level breakdown across asset classes, sub-asset classes, and entity hierarchies. Know your concentration exposures before your investors do.",
      pill: "Exposures"
    },
    {
      icon: <Network className="text-tealmint" size={24} />,
      title: "Exposure Tracking",
      desc: "Time-series exposure trends across GICS sectors, geographies, currencies, and custom structures. Identify concentration boundaries accurately in seconds.",
      pill: "Trends"
    },
    {
      icon: <Activity className="text-tealmint" size={24} />,
      title: "Drawdown & Risk Analytics",
      desc: "Rolling returns, maximum drawdown, recovery speed, Sharpe ratio, VaR, and 15+ risk metrics computed server-side with strict audit trials.",
      pill: "Risk Audit"
    },
    {
      icon: <Layers className="text-tealmint" size={24} />,
      title: "Private Equity Intelligence",
      desc: "IRR, TVPI, DPI, RVPI by vintage year. Concentration analysis, realization tracking, and forward liquidity modeling. The PE views your IC actually requests.",
      pill: "PE Vintage"
    },
    {
      icon: <Award className="text-tealmint" size={24} />,
      title: "Mutual Fund Analysis",
      desc: "Peer comparison, custom benchmark attribution, what-if scenario modeling, and dynamic investment committee report assembly.",
      pill: "IC Reports"
    },
    {
      icon: <MessageSquare className="text-tealmint" size={24} />,
      title: "AI Investment Chatbot",
      desc: "Ask your portfolio anything in plain English. Query performance metrics, exposure thresholds, and benchmark deviations conversationally with absolute isolation.",
      pill: "LLM Powered"
    },
    {
      icon: <ShieldCheck className="text-tealmint" size={24} />,
      title: "Multi-Tenant Architecture",
      desc: "Schema-level client isolation. Role-based granular entitlements. White-labeling domains. Architected for firms with zero data leakage risk.",
      pill: "Enterprise Sec"
    }
  ];

  return (
    <div className="bg-navy overflow-hidden">
      {/* 1. HERO SECTION */}
      <SpotlightEffect className="relative min-h-[95vh] pt-32 pb-24 flex items-center justify-center">
        {/* Background blobs */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-ocean/10 blur-[120px] animate-aurora-1" />
        <div className="absolute bottom-1/5 right-1/10 w-96 h-96 rounded-full bg-tealmint/8 blur-[100px] animate-aurora-2" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left gap-6 relative z-10">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tealmint/10 border border-tealmint/25">
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
            <p className="text-base text-pearl/80 leading-relaxed max-w-xl">
              OptimizAlpha gives investment teams a single, unified lens across every asset class — from equities and private equity to mutual funds and alternatives — so you spend less time aggregating spreadsheets and more time generating alpha.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <button 
                onClick={() => onNavigate('/contact')}
                className="btn-glow px-8 py-3.5 rounded-full bg-ocean border border-tealmint/30 text-pearl font-semibold hover:text-navy hover:bg-tealmint transition-all duration-300 shadow-xl shadow-ocean/20 text-sm"
              >
                Request a Demo →
              </button>
              <a 
                href="#platform"
                className="px-8 py-3.5 rounded-full border border-tealmint/30 text-pearl/90 font-semibold hover:border-tealmint hover:text-tealmint transition-colors duration-300 text-sm"
              >
                View Platform
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-pearl/10 w-full mt-4 text-xs font-mono text-pearl/50">
              <span className="flex items-center gap-1">🔒 SOC 2 Compliant</span>
              <span>🏦 Family Office Grade</span>
              <span>📊 Schema Isolated</span>
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

      {/* 2. SOCIAL PROOF BAR */}
      <section className="bg-navy pt-8 pb-12 border-y border-tealmint/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-widest text-pearl/40 font-mono">
            Trusted by investment teams managing $50B+ in combined AUM
          </p>

          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-6 mt-8 opacity-60">
            <span className="font-display font-bold text-lg md:text-xl text-pearl/80 tracking-wider">MERIDIAN FAMILY OFFICE</span>
            <span className="font-display font-semibold text-lg md:text-xl text-pearl/80 tracking-wide">CRESTWOOD CAPITAL</span>
            <span className="font-display font-bold text-lg md:text-xl text-pearl/80 tracking-widest">APEX WEALTH</span>
            <span className="font-display font-medium text-lg md:text-xl text-pearl/80 tracking-wide">SUMMIT PRIVATE WEALTH</span>
            <span className="font-display font-semibold text-lg md:text-xl text-pearl/80 tracking-widest">VALOR ASSET MANAGEMENT</span>
          </div>
        </div>
      </section>

      {/* 3. PLATFORM SECTION */}
      <section id="platform" className="py-24 max-w-7xl mx-auto px-6 md:px-12 border-b border-tealmint/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-pearl">
            A platform your investment team will actually use.
          </h2>
          <p className="text-sm md:text-base text-pearl/70 leading-relaxed mt-4">
            Toggle between raw asset exposures and granular client hierarchies dynamically. Verify attribution across any benchmark standard in seconds.
          </p>
        </div>

        {/* Dynamic Mockup Preview Showcase */}
        <div className="bg-[#060c12] border border-tealmint/10 rounded-2xl p-6 md:p-8 shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-b from-ocean/5 to-transparent pointer-events-none rounded-2xl" />
          <InteractiveDashboard />
        </div>
      </section>

      {/* 4. FEATURES GRID / SHOWCASE */}
      <section id="features" className="py-24 bg-[#03070b] relative">
        {/* Glow corner */}
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-ocean/5 blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs text-tealmint uppercase tracking-widest block mb-2">Institutional Analytics Suite</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-pearl">
              Every angle. Every asset class. One platform.
            </h2>
          </div>

          {/* Desktop split layout (large screens) */}
          <div className="hidden lg:grid grid-cols-12 gap-12">
            {/* Left side list items */}
            <div className="col-span-5 flex flex-col gap-4">
              {features.map((feat, idx) => {
                const isActive = activeFeature === idx;
                return (
                  <div 
                    key={idx}
                    onMouseEnter={() => setActiveFeature(idx)}
                    className={`border rounded-xl p-5 flex gap-4 transition-all duration-300 cursor-pointer relative group ${
                      isActive 
                        ? 'bg-ocean/20 border-tealmint/40 shadow-lg shadow-tealmint/5' 
                        : 'glass-card border-tealmint/10 hover:border-tealmint/25 hover:bg-ocean/5'
                    }`}
                  >
                    {/* Active highlight side line */}
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-tealmint rounded-l-xl" />
                    )}
                    
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 shadow-md transition-colors ${
                      isActive ? 'bg-tealmint text-navy' : 'bg-ocean/20 text-tealmint'
                    }`}>
                      {feat.icon}
                    </div>
                    <div className="flex flex-col gap-1 flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className={`font-display text-lg font-bold transition-colors truncate ${
                          isActive ? 'text-tealmint' : 'text-pearl'
                        }`}>
                          {feat.title}
                        </h3>
                        <span className="font-mono text-[8px] uppercase tracking-wider text-tealmint px-2 py-0.5 rounded-full bg-tealmint/10 border border-tealmint/20 shrink-0">
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
            <div className="col-span-7 relative">
              <div 
                className="sticky top-28 h-[500px] rounded-2xl border border-tealmint/15 bg-[#04090e] shadow-2xl p-6 relative overflow-hidden flex flex-col justify-between transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
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

      {/* 5. METRICS / TRUST COUNTERS */}
      <section className="py-20 bg-navy border-y border-tealmint/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div className="flex flex-col gap-2">
            <Counter value={50} suffix="B+" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-pearl/50">Assets Monitored</span>
          </div>
          <div className="flex flex-col gap-2">
            <Counter value={200} suffix="+" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-pearl/50">Client Portfolios</span>
          </div>
          <div className="flex flex-col gap-2">
            <Counter value={10} suffix="M+" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-pearl/50">Data Points Daily</span>
          </div>
          <div className="flex flex-col gap-2">
            <Counter value={20} suffix="+" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-pearl/50">Risk Metrics Computed</span>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-tealmint uppercase tracking-widest block mb-2">Onboarding Roadmap</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-pearl">
            From raw data to decisive insight — in hours, not months.
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
            <h3 className="font-display text-xl font-bold text-pearl">Onboard</h3>
            <p className="text-sm text-pearl/70 leading-relaxed">
              We ingest your multi-asset data via CSV upload, direct database schema integration, or custom custodian API feeds. Multi-currency mapping is resolved immediately.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#050c12] border border-tealmint/10 rounded-2xl p-8 text-center flex flex-col items-center gap-4 relative z-10">
            <div className="w-10 h-10 rounded-full bg-ocean text-pearl font-mono text-sm font-bold flex items-center justify-center border border-tealmint/30 shadow-md">
              02
            </div>
            <h3 className="font-display text-xl font-bold text-pearl">Analyze</h3>
            <p className="text-sm text-pearl/70 leading-relaxed">
              The analytics layer automatically computes active attribution models (Brinson-Fachler), vintage drawdown percentages, PE IRR curves, and concentration exposures.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#050c12] border border-tealmint/10 rounded-2xl p-8 text-center flex flex-col items-center gap-4 relative z-10">
            <div className="w-10 h-10 rounded-full bg-ocean text-pearl font-mono text-sm font-bold flex items-center justify-center border border-tealmint/30 shadow-md">
              03
            </div>
            <h3 className="font-display text-xl font-bold text-pearl">Decide</h3>
            <p className="text-sm text-pearl/70 leading-relaxed">
              Your investment committee gains beautiful, interactive visual dashboard grids, whitelabel reporting formats, and an conversational AI analyst assistant.
            </p>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-24 bg-[#020508] border-t border-tealmint/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs text-tealmint uppercase tracking-widest block mb-2">Institutional Endorsements</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-pearl">
              Trusted by Sophisticated Capital
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-8 border border-tealmint/15 relative flex flex-col justify-between">
              <span className="text-5xl font-display text-tealmint/20 absolute top-4 left-4">“</span>
              <p className="text-sm text-pearl/80 italic leading-relaxed pt-4 relative z-10">
                OptimizAlpha replaced three separate tools for us. The performance attribution module alone saved our quantitative research team 15 hours of manual analysis every week.
              </p>
              <div className="mt-8 pt-4 border-t border-pearl/10">
                <span className="font-mono text-[10px] text-tealmint uppercase tracking-wider block">Head of Investments</span>
                <span className="font-display font-semibold text-sm text-pearl mt-0.5 block">Single Family Office, Dubai</span>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-tealmint/15 relative flex flex-col justify-between">
              <span className="text-5xl font-display text-tealmint/20 absolute top-4 left-4">“</span>
              <p className="text-sm text-pearl/80 italic leading-relaxed pt-4 relative z-10">
                Finally, a portfolio intelligence platform that intuitively understands how private banks handle multi-entity reporting and role entitlements. Absolutely exceptional execution.
              </p>
              <div className="mt-8 pt-4 border-t border-pearl/10">
                <span className="font-mono text-[10px] text-tealmint uppercase tracking-wider block">Chief Investment Officer</span>
                <span className="font-display font-semibold text-sm text-pearl mt-0.5 block">Boutique Private Bank, Mumbai</span>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-tealmint/15 relative flex flex-col justify-between">
              <span className="text-5xl font-display text-tealmint/20 absolute top-4 left-4">“</span>
              <p className="text-sm text-pearl/80 italic leading-relaxed pt-4 relative z-10">
                The private equity vintage module is unlike anything else we reviewed. Our investment committee reports take half the time to compile now, with complete database precision.
              </p>
              <div className="mt-8 pt-4 border-t border-pearl/10">
                <span className="font-mono text-[10px] text-tealmint uppercase tracking-wider block">Senior Portfolio Manager</span>
                <span className="font-display font-semibold text-sm text-pearl mt-0.5 block">Multi-Family Office, Singapore</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRICING TEASER */}
      <section id="pricing" className="py-24 max-w-7xl mx-auto px-6 md:px-12 border-t border-tealmint/10">
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
              <h3 className="font-display text-2xl font-bold text-pearl">Foundation</h3>
              <p className="text-xs text-pearl/65 leading-relaxed mt-2">
                Ideal for boutique wealth managers and single-entity structures looking to establish core analytics capabilities.
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
              <h3 className="font-display text-2xl font-bold text-pearl">Professional</h3>
              <p className="text-xs text-pearl/70 leading-relaxed mt-2">
                Comprehensive analytics engine designed for family offices and institutions handling complex multi-entity allocations.
              </p>
              <ul className="mt-6 space-y-2.5 font-mono text-[11px] text-pearl/85">
                <li>• Multi-entity hierarchical reporting</li>
                <li>• Private equity vintage intelligence</li>
                <li>• Active Brinson-Fachler attribution</li>
                <li>• Custom user preference layouts</li>
                <li>• API ingestion integrations</li>
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
              <h3 className="font-display text-2xl font-bold text-pearl">Institutional</h3>
              <p className="text-xs text-pearl/65 leading-relaxed mt-2">
                Enterprise solution equipped with complete white-labeling capability, dedicated onboarding resources, and custom engineering.
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

      {/* 9. FINAL CTA SECTION */}
      <section className="relative py-28 bg-[#020508] text-center border-t border-tealmint/10 overflow-hidden">
        {/* Glow blobs */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-ocean/15 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center gap-6">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-pearl leading-tight">
            Ready to see your portfolio clearly?
          </h2>
          <p className="text-base text-pearl/75 leading-relaxed max-w-xl">
            Join investment teams across Asia and the Middle East who've made OptimizAlpha their institutional portfolio intelligence layer.
          </p>

          <button 
            onClick={() => onNavigate('/contact')}
            className="btn-glow px-10 py-4 mt-4 rounded-full bg-ocean border border-tealmint/30 text-pearl font-bold hover:bg-tealmint hover:text-navy transition-all duration-300 shadow-xl shadow-ocean/30 text-sm"
          >
            Schedule a Demo →
          </button>
        </div>
      </section>
    </div>
  );
}
