import { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Layers, 
  PieChart, 
  MessageSquare,
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
    "Transforming investment data into actionable intelligence.",
    "Confidential Institutional Client Proposal 2026.",
    "Consolidating fragmented data into a single intelligence layer."
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
      icon: <Activity className="text-tealmint" size={24} />,
      title: "01 - Performance Analytics",
      desc: "Institutional performance measurement with GIPS-aligned methodology - across portfolios, asset classes, and individual positions. Supports unweighted TWRR, Daily & Modified Dietz Method (Monthly), money-weighted MWRR (IRR/XIRR) returns, FX-adjusted, and benchmark-relative returns with fully documented audit trails.",
      pill: "GIPS-Aligned"
    },
    {
      icon: <TrendingUp className="text-tealmint" size={24} />,
      title: "02 - Top-Down Relative Attribution",
      desc: "A Brinson-Fachler attribution decomposition engine captures performance relative to the benchmark. It decomposes relative return - the difference between portfolio and benchmark - into allocation, selection, and interaction effects at the asset-class and sector levels.",
      pill: "Brinson-Fachler"
    },
    {
      icon: <Award className="text-tealmint" size={24} />,
      title: "03 - Bottom-Up Absolute Contribution",
      desc: "Contribution analysis explains the portfolio's own absolute return, independent of any benchmark. It measures the weighted contribution of every individual holding (position weight x position return) and aggregates from the security level upward to the total.",
      pill: "Security Contribution"
    },
    {
      icon: <PieChart className="text-tealmint" size={24} />,
      title: "04 - Exposure Analytics",
      desc: "Continuous portfolio oversight by asset class, entity, sector, geography, and currency - with allocation-drift and concentration monitoring. Actual positioning is monitored against policy in real-time, surfacing drift before it becomes a governance issue.",
      pill: "Real-Time Drift"
    },
    {
      icon: <Layers className="text-tealmint" size={24} />,
      title: "05 - Private Equity Analytics",
      desc: "L.P.-focused private market measurement in a single, institutional view - IRR, MOIC, TVPI, DPI, RVPI, vintage and vintage comparisons, peer-group benchmarking, J-Curve analysis, and forward-looking cash flow, sensitivity, and pacing models.",
      pill: "Private Markets"
    },
    {
      icon: <MessageSquare className="text-tealmint" size={24} />,
      title: "06 - AI Performance Agent",
      desc: "An embedded co-pilot that analyzes performance, attribution, exposure, and private equity data - and writes institutional-grade commentary on demand, compressing reporting cycles while strengthening narratives.",
      pill: "AI Intelligence"
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
                CONFIDENTIAL 2026 · INSTITUTIONAL INVESTORS
              </span>
            </div>

            {/* H1 Display */}
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-pearl leading-none">
              Transforming Data.<br />
              <span className="bg-gradient-to-r from-ocean to-tealmint bg-clip-text text-transparent">
                Actionable Intelligence.
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
              OptimizAlpha is an institutional-grade investment analytics platform that consolidates fragmented, complex data into a single, decision-making intelligence layer. It is purpose-built for sophisticated investors who require decision-grade insight, institutional-quality reporting of asset classes, and faster, more transparent research cycles.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <button 
                onClick={() => onNavigate('/contact')}
                className="btn-glow px-8 py-3.5 rounded-full bg-ocean border border-tealmint/30 text-pearl font-semibold hover:text-navy hover:bg-tealmint transition-all duration-300 shadow-xl shadow-ocean/20 text-sm cursor-pointer"
              >
                Request Integration Proposal →
              </button>
              <a 
                href="#platform"
                className="px-8 py-3.5 rounded-full border border-tealmint/30 text-pearl/90 font-semibold hover:border-tealmint hover:text-tealmint transition-colors duration-300 text-sm cursor-pointer"
              >
                Explore Platform Architecture
              </a>
            </div>

          </div>

          {/* Hero Right Content */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Spotlight Glow Behind Mockup */}
            <div className="absolute w-[450px] h-[450px] rounded-full bg-tealmint/10 blur-[90px] -z-10" />

            <div className="w-full animate-float max-w-lg md:max-w-none">
              <InteractiveDashboard isHero={true} />
            </div>

            {/* Floating Metric Card 1 */}
            <div className="absolute -top-6 -left-10 bg-navy/85 border border-tealmint/25 backdrop-blur-md rounded-xl p-4 shadow-2xl shadow-navy/50 animate-float-slow hidden lg:block hover:border-tealmint/50 transition-colors duration-300">
              <span className="text-[9px] font-mono text-pearl/50 tracking-wider uppercase block">PE NET IRR</span>
              <span className="text-base font-mono font-bold text-tealmint">18.4% Net</span>
            </div>

            {/* Floating Metric Card 2 */}
            <div className="absolute bottom-8 -right-10 bg-navy/85 border border-tealmint/25 backdrop-blur-md rounded-xl p-4 shadow-2xl shadow-navy/50 animate-float hidden lg:block hover:border-tealmint/50 transition-colors duration-300">
              <span className="text-[9px] font-mono text-pearl/50 tracking-wider uppercase block">PE TVPI MULTIPLE</span>
              <span className="text-base font-mono font-bold text-tealmint">1.54x TVPI</span>
            </div>
          </div>
        </div>
      </SpotlightEffect>

      {/* 3. PLATFORM SECTION */}
      <section id="platform" className="py-24 relative max-w-[1600px] mx-auto px-6 md:px-12 border-b border-tealmint/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-ocean/5 blur-[150px] pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-tealmint/5 border border-tealmint/20 mb-4 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-tealmint/60" />
            <span className="font-mono text-[9px] font-semibold text-tealmint uppercase tracking-widest">
              Unified Platform Preview
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-pearl leading-tight">
            Consolidate fragmented data into <br />
            <span className="bg-gradient-to-r from-ocean to-tealmint bg-clip-text text-transparent">a single intelligence layer.</span>
          </h2>
          <p className="text-sm md:text-base text-pearl/70 leading-relaxed mt-6 max-w-2xl mx-auto">
            Analyze relative performance, policy exposures, absolute asset yields, and private equity vintage metrics. Explore the interactive client preview to see these capabilities populated with verified proposal figures.
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-ocean/5 blur-[150px] pointer-events-none" />

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-tealmint/10 border border-tealmint/25 backdrop-blur-md mb-4 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-tealmint animate-pulse" />
              <span className="font-mono text-xs font-semibold text-tealmint uppercase tracking-wider">
                CORE CAPABILITIES
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-pearl leading-none mt-2">
              Performance, Attribution, and Exposure. <br />
              <span className="bg-gradient-to-r from-ocean to-tealmint bg-clip-text text-transparent">Natively integrated.</span>
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
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-tealmint rounded-l-2xl" />
                    )}
                    
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
                        <h3 className={`font-display text-lg font-bold transition-colors truncate ${
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

            {/* Right side Showcase Window */}
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
                    OA://CORE_CAPABILITIES
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

      {/* 6. IMPLEMENTATION APPROACH */}
      <section className="py-24 max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-tealmint uppercase tracking-widest block mb-2">Implementation Approach</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-pearl">
            Phased 24-Week Onboarding Journey
          </h2>
          <p className="text-sm text-pearl/60 mt-3 font-mono">
            A structured transition to a fully deployed analytics platform.
          </p>
        </div>

        {/* 3 Step Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[1px] bg-tealmint/20 z-0" />

          {/* Phase 1 */}
          <div className="bg-[#050c12] border border-tealmint/10 rounded-2xl p-8 text-center flex flex-col items-center gap-4 relative z-10">
            <div className="w-10 h-10 rounded-full bg-ocean text-pearl font-mono text-sm font-bold flex items-center justify-center border border-tealmint/30 shadow-md">
              01
            </div>
            <h3 className="font-display text-lg font-bold text-pearl">Weeks 1-8: Data Onboarding</h3>
            <p className="text-xs text-pearl/70 leading-relaxed font-mono">
              Historical data ingestion, validation & reconciliation, framework setup.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="bg-[#050c12] border border-tealmint/10 rounded-2xl p-8 text-center flex flex-col items-center gap-4 relative z-10">
            <div className="w-10 h-10 rounded-full bg-ocean text-pearl font-mono text-sm font-bold flex items-center justify-center border border-tealmint/30 shadow-md">
              02
            </div>
            <h3 className="font-display text-lg font-bold text-pearl">Weeks 9-16: Platform Configuration</h3>
            <p className="text-xs text-pearl/70 leading-relaxed font-mono">
              Dashboard configuration, reporting setup, user access control & security configuration.
            </p>
          </div>

          {/* Phase 3 */}
          <div className="bg-[#050c12] border border-tealmint/10 rounded-2xl p-8 text-center flex flex-col items-center gap-4 relative z-10">
            <div className="w-10 h-10 rounded-full bg-ocean text-pearl font-mono text-sm font-bold flex items-center justify-center border border-tealmint/30 shadow-md">
              03
            </div>
            <h3 className="font-display text-lg font-bold text-pearl">Weeks 17-24: Analytics Deployment</h3>
            <p className="text-xs text-pearl/70 leading-relaxed font-mono">
              Attribution analysis, exposure monitoring, PE analytics & AI agent.
            </p>
          </div>
        </div>
      </section>

      {/* 8. DEPLOYMENT OPTIONS */}
      <section id="pricing" className="py-24 max-w-[1600px] mx-auto px-6 md:px-12 border-t border-tealmint/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-tealmint uppercase tracking-widest block mb-2">DEPLOYMENT MODELS</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-pearl">
            Deployment Options
          </h2>
          <p className="text-sm text-pearl/60 mt-3 font-mono">
            Comparing dimensions most relevant to institutional due diligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {/* On-Premise Card */}
          <div className="bg-[#07131e] border-2 border-tealmint rounded-2xl p-8 flex flex-col justify-between shadow-xl shadow-tealmint/5 relative">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-ocean to-tealmint text-navy font-mono text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
              Recommended & Available Now
            </span>
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs text-tealmint uppercase tracking-widest mt-2">Packaged Application</span>
              <h3 className="font-display text-2xl font-bold text-pearl">On-Premise (In-Perimeter)</h3>
              <p className="text-xs text-pearl/70 leading-relaxed mt-2">
                Recommended model for institutional clients with strict security, privacy, and sovereignty requirements. Deployed entirely within your secure perimeter (your VPC, on-premise servers).
              </p>
              <ul className="mt-6 space-y-2.5 font-mono text-[10px] text-pearl/85 text-left list-disc pl-4">
                <li>You retain full sovereignty, control, and keys.</li>
                <li>GDPR, HIPAA, and CCPA requirements met natively.</li>
                <li>No cross-border data transfer or third party in data path.</li>
                <li>Client-controlled release cadence and packaged updates.</li>
                <li>Source-code escrow / contingency standards available.</li>
              </ul>
            </div>
            <button 
              onClick={() => onNavigate('/contact')}
              className="w-full py-2.5 mt-8 rounded-full bg-ocean border border-tealmint/30 text-pearl font-semibold text-xs hover:bg-tealmint hover:text-navy transition-all duration-300"
            >
              Request On-Premise Details
            </button>
          </div>

          {/* SaaS Card */}
          <div className="bg-[#050c12] border border-tealmint/10 rounded-2xl p-8 flex flex-col justify-between hover:border-tealmint/30 transition-colors">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs text-tealmint uppercase tracking-widest">Backup Options</span>
              <h3 className="font-display text-2xl font-bold text-pearl">SaaS (Cloud-Hosted)</h3>
              <p className="text-xs text-pearl/65 leading-relaxed mt-2">
                Currently under development with availability expected within the next 12-18 months. Offered as a backup option for clients that prefer a fully managed cloud service.
              </p>
              <ul className="mt-6 space-y-2.5 font-mono text-[10px] text-pearl/80 text-left list-disc pl-4">
                <li>Fully managed by OptimizAlpha in secure environments.</li>
                <li>Requires minimal internal IT involvement.</li>
                <li>Hosted in AWS multi-tenant setup.</li>
                <li>Updates, patches, and monitoring handled by OptimizAlpha.</li>
                <li>Industry-standard security (SOCI/II) & robust encryption.</li>
              </ul>
            </div>
            <button 
              onClick={() => onNavigate('/contact')}
              className="w-full py-2.5 mt-8 rounded-full border border-tealmint/25 text-tealmint font-semibold text-xs hover:bg-tealmint hover:text-navy transition-all duration-300"
            >
              Request SaaS Timeline
            </button>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA CARD */}
      <section className="py-24 max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="relative py-20 md:py-24 px-6 md:px-12 bg-[#050c12] border border-tealmint/15 rounded-3xl text-center overflow-hidden shadow-2xl shadow-[#00050c]/50">
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-ocean/20 blur-[120px] pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center gap-6">
            <h2 className="font-display text-5xl md:text-7xl font-bold text-pearl leading-tight">
              Ready to see your portfolio clearly?
            </h2>
            <p className="text-sm md:text-base text-pearl/75 leading-relaxed max-w-xl">
              Empower investors with institutional-grade performance, attribution, exposure, and private equity analytics - through a single unified platform.
            </p>

            <div className="flex flex-col items-center gap-2 mt-4">
              <button 
                onClick={() => onNavigate('/contact')}
                className="btn-glow px-10 py-4 rounded-full bg-ocean border border-tealmint/30 text-pearl font-bold hover:bg-tealmint hover:text-navy transition-all duration-300 shadow-xl shadow-ocean/30 text-sm"
              >
                Request Proposal Access →
              </button>
              <span className="font-mono text-xs text-pearl/40 mt-2">
                support@optimizalpha.com · www.optimizalpha.com
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
