import { Target, Cpu, Users2, Shield, Eye, Flame, Award } from 'lucide-react';
import SpotlightEffect from '../components/SpotlightEffect';

export default function About() {
  const missionCards = [
    {
      icon: <Target className="text-tealmint" size={24} />,
      title: "Trusted Data Foundation",
      desc: "Access reliable, governed, and enriched portfolio data ready for advanced investment analytics and AI workflows. Complete click-through audit trails for compliance.",
      marker: "[01 // foundation]"
    },
    {
      icon: <Cpu className="text-tealmint" size={24} />,
      title: "Uncompromising Data Governance",
      desc: "Architected on Postgres with schema-level client isolation. Securely ingest, synchronize, and distribute data with absolute privacy and zero co-mingling.",
      marker: "[02 // architecture]"
    },
    {
      icon: <Users2 className="text-tealmint" size={24} />,
      title: "Collaborative Onboarding Integration",
      desc: "We don't just supply software; we manage the transition. Our engineering and quantitative analysts build custom ingestion pipelines and map legacy custodian histories.",
      marker: "[03 // integration]"
    }
  ];

  const values = [
    { icon: <Shield size={20} />, label: "Precision", desc: "We compute metrics to six decimal places, mapping fractional transactions accurately." },
    { icon: <Eye size={20} />, label: "Transparency", desc: "No proprietary black boxes. Every attribution model is documented and verifiable." },
    { icon: <Flame size={20} />, label: "Speed", desc: "Server-side aggregations resolve complex cross-entity drawdowns in milliseconds." },
    { icon: <Award size={20} />, label: "Trust", desc: "Operating on SOC 2 Type II assurance models from our infrastructure foundations." }
  ];

  return (
    <div className="bg-navy min-h-screen pt-32 pb-24 bg-financial-grid relative">
      {/* Dynamic ambient background glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-ocean/5 blur-[120px] pointer-events-none animate-aurora-1" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-tealmint/5 blur-[120px] pointer-events-none animate-aurora-2" />

      {/* Hero Section */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mb-20 text-center relative z-10">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-ocean/10 blur-[100px] pointer-events-none" />
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-tealmint/10 border border-tealmint/25 backdrop-blur-md mb-4 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-tealmint animate-pulse" />
          <span className="font-mono text-xs font-semibold text-tealmint uppercase tracking-wider">
            Our Core Philosophy
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold text-pearl mb-8 tracking-tight max-w-4xl mx-auto">
          Built by practitioners. <br />
          <span className="bg-gradient-to-r from-ocean to-tealmint bg-clip-text text-transparent">For practitioners.</span>
        </h1>

        {/* Narrative columns inside a beautiful glass panel */}
        <div className="bg-[#050c12]/60 border border-tealmint/10 rounded-3xl p-8 md:p-10 max-w-4xl mx-auto mt-16 leading-relaxed text-pearl/70 relative shadow-2xl backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-ocean/5 to-transparent pointer-events-none rounded-3xl" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left relative z-10">
            <p className="text-sm md:text-base leading-relaxed">
              OptimizAlpha was born from a simple, persistent frustration: world-class investment teams, managing hundreds of millions in capital, were spending more time wrangling broken spreadsheets and manual reports than making actual investment decisions. Our founders, veterans of asset management, quantitative finance, and enterprise software, set out to build the analytics layer they always wished existed.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              Today, OptimizAlpha serves family offices, boutique private banks, and asset managers across the Asia-Pacific region and the Middle East. We obsess over transaction data accuracy, UI dashboard clarity, and the kind of analytical depth that separates serious investment platforms from superficial dashboards dressed up as quantitative tools.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mb-24 border-t border-tealmint/10 pt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionCards.map((card, idx) => (
            <div
              key={idx}
              className="group relative bg-[#050c12]/80 border border-tealmint/15 rounded-3xl p-8 md:p-10 shadow-2xl premium-glow-shadow flex flex-col gap-5 transition-all duration-300 hover:scale-[1.02] hover:border-tealmint/30 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-ocean/5 to-transparent pointer-events-none rounded-3xl" />
              
              {/* Subtle quant index marker */}
              <span className="absolute top-6 right-6 font-mono text-[9px] text-tealmint/30 group-hover:text-tealmint/60 transition-colors">
                {card.marker}
              </span>

              <div className="w-12 h-12 rounded-xl bg-tealmint/5 border border-tealmint/25 text-tealmint flex items-center justify-center shadow-md group-hover:bg-tealmint group-hover:text-navy transition-all duration-300">
                {card.icon}
              </div>
              <h3 className="font-display text-2xl font-bold text-pearl mt-2 group-hover:text-tealmint transition-colors">{card.title}</h3>
              <p className="text-sm text-pearl/70 leading-relaxed group-hover:text-pearl/90 transition-colors">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mb-24 relative z-10">
        <SpotlightEffect 
          opacity={0.15} 
          className="relative py-20 px-6 md:px-12 bg-[#050c12] border border-tealmint/15 rounded-3xl overflow-hidden shadow-2xl shadow-[#00050c]/50 bg-financial-grid transition-all duration-500 hover:border-tealmint/30"
        >
          {/* Internal neon backing glow */}
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-ocean/15 blur-[120px] pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-xs text-tealmint uppercase tracking-widest block mb-3 border border-tealmint/25 bg-tealmint/5 rounded-full px-4 py-1.5 w-max mx-auto shadow-md">
                Our Foundation
              </span>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-pearl leading-none mt-2 animate-fadeIn">
                Values We Defend Daily
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, idx) => (
                <div
                  key={idx}
                  className="group relative bg-navy/60 border border-tealmint/15 hover:border-tealmint/60 rounded-2xl p-6 text-center flex flex-col items-center gap-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-tealmint/5 cursor-pointer"
                >
                  {/* Subtle quant serial card indicator */}
                  <span className="absolute top-4 right-4 font-mono text-[8px] text-tealmint/30 group-hover:text-tealmint/60 transition-colors">
                    [0{idx + 1}]
                  </span>

                  <div className="p-3.5 rounded-full bg-tealmint/5 border border-tealmint/25 text-tealmint group-hover:bg-tealmint group-hover:text-navy transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:shadow-tealmint/20">
                    {val.icon}
                  </div>
                  <h4 className="font-display text-xl font-bold text-pearl mt-2 group-hover:text-tealmint transition-colors">{val.label}</h4>
                  <p className="text-xs text-pearl/70 leading-relaxed mt-1 group-hover:text-pearl/90 transition-colors">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </SpotlightEffect>
      </section>

      {/* Office Locations */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mt-24 relative z-10">
        <div className="bg-gradient-to-r from-ocean/10 to-[#050c12]/80 border border-tealmint/15 rounded-3xl p-8 md:p-12 shadow-2xl premium-glow-shadow flex flex-col lg:flex-row items-center justify-between gap-8 transition-all duration-500 hover:border-tealmint/30">
          <div className="flex flex-col gap-3 text-left">
            <span className="font-mono text-xs text-tealmint uppercase tracking-widest">Global Operations</span>
            <h3 className="font-display text-4xl font-bold text-pearl leading-none mt-1">Headquartered in India</h3>
            <p className="text-sm md:text-base text-pearl/70 max-w-xl leading-relaxed mt-3">
              Strategically positioned to serve institutional wealth managers, family offices, and boutique private banking facilities across the Middle East, South Asia, and Southeast Asia.
            </p>
          </div>
          
          {/* Quantitative terminal panel */}
          <div className="flex flex-col gap-2.5 shrink-0 border border-tealmint/20 bg-navy/60 p-6 rounded-2xl font-mono text-xs text-tealmint shadow-md group hover:border-tealmint/40 transition-colors duration-300 w-full lg:w-max">
            <span className="text-pearl/40 uppercase tracking-wider text-[9px] block border-b border-tealmint/15 pb-2 mb-1 font-bold">
              [jurisdictions_index]
            </span>
            <div className="flex items-center gap-2 group-hover:text-pearl transition-colors duration-200">
              <span className="text-tealmint group-hover:scale-125 transition-transform">✓</span>
              <span>Mumbai / Bangalore (HQ)</span>
            </div>
            <div className="flex items-center gap-2 group-hover:text-pearl transition-colors duration-200">
              <span className="text-tealmint group-hover:scale-125 transition-transform">✓</span>
              <span>Dubai / Abu Dhabi (Middle East)</span>
            </div>
            <div className="flex items-center gap-2 group-hover:text-pearl transition-colors duration-200">
              <span className="text-tealmint group-hover:scale-125 transition-transform">✓</span>
              <span>Singapore (Southeast Asia)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
