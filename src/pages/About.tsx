import { Target, Cpu, Users2, Shield, Eye, Flame, Award } from 'lucide-react';
import SpotlightEffect from '../components/SpotlightEffect';

export default function About() {
  const missionCards = [
    {
      icon: <Target className="text-tealmint" size={24} />,
      title: "Accuracy First",
      desc: "Every metric, return, and attribution factor is computed directly from source transaction data, complete with a comprehensive, click-through audit trail for compliance teams."
    },
    {
      icon: <Cpu className="text-tealmint" size={24} />,
      title: "Built to Scale",
      desc: "Architected on a multi-tenant, fully schema-isolated database layer using postgres. Your data is isolated physically, never co-mingled, and encrypted at all points."
    },
    {
      icon: <Users2 className="text-tealmint" size={24} />,
      title: "Partner, Not Vendor",
      desc: "We do not dump code and leave. Our engineering and quant teams handle the entire onboard mapping process, training your staff and iterating on your custom layouts."
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
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center relative">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-ocean/10 blur-[100px] pointer-events-none" />
        
        <span className="font-mono text-xs text-tealmint uppercase tracking-widest block mb-3">Our Core Philosophy</span>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-pearl mb-8 tracking-tight max-w-4xl mx-auto">
          Built by practitioners.<br />For practitioners.
        </h1>

        {/* Narrative columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto mt-16 leading-relaxed text-pearl/80">
          <p className="text-base">
            OptimizAlpha was born from a simple, persistent frustration: world-class investment teams, managing hundreds of millions in capital, were spending more time wrangling broken spreadsheets and manual reports than making actual investment decisions. Our founders — veterans of asset management, quantitative finance, and enterprise software — set out to build the analytics layer they always wished existed.
          </p>
          <p className="text-base">
            Today, OptimizAlpha serves family offices, boutique private banks, and asset managers across the Asia-Pacific region and the Middle East. We obsess over transaction data accuracy, UI dashboard clarity, and the kind of analytical depth that separates serious investment platforms from superficial dashboards dressed up as quantitative tools.
          </p>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24 border-t border-tealmint/10 pt-20">
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
      <SpotlightEffect opacity={0.12} className="bg-[#03060a] py-20 border-y border-tealmint/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs text-tealmint uppercase tracking-widest block mb-2">Our Foundation</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-pearl">
              Values We Defend Daily
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="glass-card border border-tealmint/15 rounded-xl p-6 text-center flex flex-col items-center gap-3"
              >
                <div className="p-3 rounded-full bg-tealmint/10 border border-tealmint/25 text-tealmint">
                  {val.icon}
                </div>
                <h4 className="font-display text-lg font-semibold text-pearl mt-1">{val.label}</h4>
                <p className="text-xs text-pearl/70 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SpotlightEffect>

      {/* Office Locations */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-24">
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
