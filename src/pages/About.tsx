import { Target, Cpu, Users2, Shield, Eye, Flame, Award } from 'lucide-react';
import SpotlightEffect from '../components/SpotlightEffect';

export default function About() {
  const missionCards = [
    {
      icon: <Target className="text-tealmint" size={24} />,
      title: "Trusted Data Foundation",
      desc: "Access reliable, governed, and enriched portfolio data ready for advanced investment analytics and AI workflows. Complete click-through audit trails for compliance."
    },
    {
      icon: <Cpu className="text-tealmint" size={24} />,
      title: "Uncompromising Data Governance",
      desc: "Architected on Postgres with schema-level client isolation. Securely ingest, synchronize, and distribute data with absolute privacy and zero co-mingling."
    },
    {
      icon: <Users2 className="text-tealmint" size={24} />,
      title: "Collaborative Onboarding Integration",
      desc: "We don't just supply software; we manage the transition. Our engineering and quantitative analysts build custom ingestion pipelines and map legacy custodian histories."
    }
  ];

  const values = [
    { icon: <Shield size={20} />, label: "Precision", desc: "We compute metrics to six decimal places, mapping fractional transactions accurately." },
    { icon: <Eye size={20} />, label: "Transparency", desc: "No proprietary black boxes. Every attribution model is documented and verifiable." },
    { icon: <Flame size={20} />, label: "Speed", desc: "Server-side aggregations resolve complex cross-entity drawdowns in milliseconds." },
    { icon: <Award size={20} />, label: "Trust", desc: "Operating on SOC 2 Type II assurance models from our infrastructure foundations." }
  ];

  return (
    <div className="bg-navy min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mb-20 text-center relative">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-ocean/10 blur-[100px] pointer-events-none" />
        
        <span className="font-mono text-xs text-tealmint uppercase tracking-widest block mb-3">Our Core Philosophy</span>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-pearl mb-8 tracking-tight max-w-4xl mx-auto">
          Built by practitioners.<br />For practitioners.
        </h1>

        {/* Narrative columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto mt-16 leading-relaxed text-pearl/80">
          <p className="text-base">
            OptimizAlpha was born from a simple, persistent frustration: world-class investment teams, managing hundreds of millions in capital, were spending more time wrangling broken spreadsheets and manual reports than making actual investment decisions. Our founders, veterans of asset management, quantitative finance, and enterprise software, set out to build the analytics layer they always wished existed.
          </p>
          <p className="text-base">
            Today, OptimizAlpha serves family offices, boutique private banks, and asset managers across the Asia-Pacific region and the Middle East. We obsess over transaction data accuracy, UI dashboard clarity, and the kind of analytical depth that separates serious investment platforms from superficial dashboards dressed up as quantitative tools.
          </p>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mb-24 border-t border-tealmint/10 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#050c12] border border-tealmint/10 rounded-2xl p-8 hover:border-tealmint/30 transition-all duration-300 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-ocean/20 flex items-center justify-center shadow-md">
                {card.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-pearl mt-2">{card.title}</h3>
              <p className="text-sm text-pearl/70 leading-relaxed">{card.desc}</p>
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
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mt-24">
        <div className="bg-gradient-to-r from-ocean/15 to-navy border border-tealmint/15 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3 text-left">
            <span className="font-mono text-xs text-tealmint uppercase tracking-widest">Global Operations</span>
            <h3 className="font-display text-3xl font-bold text-pearl">Headquartered in India</h3>
            <p className="text-sm text-pearl/75 max-w-xl leading-relaxed mt-1">
              Strategically positioned to serve institutional wealth managers, family offices, and boutique private banking facilities across the Middle East, South Asia, and Southeast Asia.
            </p>
          </div>
          <div className="flex flex-col gap-2 shrink-0 border border-tealmint/20 bg-navy/60 p-6 rounded-xl font-mono text-xs text-tealmint">
            <span className="text-pearl/50">Active Jurisdictions:</span>
            <span>✓ Mumbai / Bangalore (HQ)</span>
            <span>✓ Dubai / Abu Dhabi (Middle East)</span>
            <span>✓ Singapore (Southeast Asia)</span>
          </div>
        </div>
      </section>
    </div>
  );
}
