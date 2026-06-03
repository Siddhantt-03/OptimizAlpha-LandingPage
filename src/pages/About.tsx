import { 
  Database, 
  Cpu, 
  Shield, 
  CheckCircle,
  FileText
} from 'lucide-react';
import SpotlightEffect from '../components/SpotlightEffect';

export default function About() {
  const clientBenefits = {
    operational: [
      "Dynamic asset/entity path",
      "Fast, automated reporting",
      "Unified, secure data layer",
      "Complete calculation audit"
    ],
    investment: [
      "Portfolio performance analysis",
      "Relative attribution analysis",
      "Exposure & drift monitoring",
      "LP private equity metrics"
    ],
    strategic: [
      "Focus on core competency",
      "Sovereignty over platform",
      "Zero data residency risks",
      "Bounded vendor dependency"
    ]
  };

  const concerns = [
    {
      title: "Data Residency & Regulatory",
      desc: "No cross-border data transfer and no third party in the data path. Client data remains within your environment in your chosen jurisdiction, removing cross-residency and regulatory compliance uncertainty rather than mitigating it."
    },
    {
      title: "Information Security",
      desc: "The solution is deployed within your existing, security-reviewed and approved architecture under your own network and security controls. Decisions regarding application access - whether internal or external users - remain entirely at your discretion."
    },
    {
      title: "Operational Continuity",
      desc: "The platform runs on infrastructure you already operate, under your existing business continuity frameworks. There is no vendor-side production environment that can fail."
    },
    {
      title: "Viability of OptimizAlpha",
      desc: "Additional covenantally and pre-emptively - source-code escrow model or contingency arrangement (source-code release in the event of insolvency or abandonment of the software) is ready, so the code is already within your perimeter, fully documented and is a contingency standard on your team or a third party can operate it independently of us, in a solid engagement that provides clear contractual recourse."
    }
  ];

  return (
    <div className="bg-navy min-h-screen pt-32 pb-24 bg-financial-grid relative">
      {/* Dynamic ambient background glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-ocean/5 blur-[120px] pointer-events-none animate-aurora-1" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-tealmint/5 blur-[120px] pointer-events-none animate-aurora-2" />

      {/* Title Hero */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mb-20 text-center relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-tealmint/10 border border-tealmint/25 backdrop-blur-md mb-4 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-tealmint animate-pulse" />
          <span className="font-mono text-xs font-semibold text-tealmint uppercase tracking-wider">
            PLATFORM ARCHITECTURE & BENEFITS
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold text-pearl mb-8 tracking-tight max-w-4xl mx-auto">
          Institutional Platform Architecture <br />
          <span className="bg-gradient-to-r from-ocean to-tealmint bg-clip-text text-transparent">&amp; Client Benefits</span>
        </h1>
      </section>

      {/* Architecture Section */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mb-24 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-pearl leading-none">
            Three-Layer Institutional-Grade Stack
          </h2>
          <p className="text-sm text-pearl/50 mt-3 font-mono">
            How OptimizAlpha is architected to deliver decision-grade insight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Layer 1: Data Sources */}
          <div className="group relative bg-[#050c12]/80 border border-tealmint/15 rounded-3xl p-8 shadow-2xl premium-glow-shadow flex flex-col gap-5 transition-all duration-300 hover:scale-[1.02] hover:border-tealmint/30 cursor-pointer">
            <span className="absolute top-6 right-6 font-mono text-[9px] text-tealmint/40">
              [LAYER 01 // INGESTION]
            </span>
            <div className="w-12 h-12 rounded-xl bg-tealmint/5 border border-tealmint/25 text-tealmint flex items-center justify-center shadow-md group-hover:bg-tealmint group-hover:text-navy transition-all duration-300">
              <Database size={24} />
            </div>
            <h3 className="font-display text-xl font-bold text-pearl mt-2">Data Sources</h3>
            <p className="text-xs text-pearl/70 leading-relaxed">
              Consolidating multiple input formats and connectivity options:
            </p>
            <ul className="text-xs font-mono text-pearl/60 space-y-1 mt-1 list-disc pl-4 text-left">
              <li>API connectivity</li>
              <li>FTP integration</li>
              <li>Direct uploads</li>
              <li>Excel, CSV imports</li>
              <li>Manual entry</li>
            </ul>
          </div>

          {/* Layer 2: Analytics */}
          <div className="group relative bg-[#050c12]/80 border border-tealmint/15 rounded-3xl p-8 shadow-2xl premium-glow-shadow flex flex-col gap-5 transition-all duration-300 hover:scale-[1.02] hover:border-tealmint/30 cursor-pointer">
            <span className="absolute top-6 right-6 font-mono text-[9px] text-tealmint/40">
              [LAYER 02 // ENGINE]
            </span>
            <div className="w-12 h-12 rounded-xl bg-tealmint/5 border border-tealmint/25 text-tealmint flex items-center justify-center shadow-md group-hover:bg-tealmint group-hover:text-navy transition-all duration-300">
              <Cpu size={24} />
            </div>
            <h3 className="font-display text-xl font-bold text-pearl mt-2">Analytics Engine</h3>
            <p className="text-xs text-pearl/70 leading-relaxed">
              Calculations processed natively on the secure perimeter:
            </p>
            <ul className="text-xs font-mono text-pearl/60 space-y-1 mt-1 list-disc pl-4 text-left">
              <li>Performance Engine</li>
              <li>Attribution Engine</li>
              <li>Exposure Engine</li>
              <li>Private Equity Engine</li>
              <li>AI Intelligence Layer</li>
            </ul>
          </div>

          {/* Layer 3: Reporting */}
          <div className="group relative bg-[#050c12]/80 border border-tealmint/15 rounded-3xl p-8 shadow-2xl premium-glow-shadow flex flex-col gap-5 transition-all duration-300 hover:scale-[1.02] hover:border-tealmint/30 cursor-pointer">
            <span className="absolute top-6 right-6 font-mono text-[9px] text-tealmint/40">
              [LAYER 03 // VISUALS]
            </span>
            <div className="w-12 h-12 rounded-xl bg-tealmint/5 border border-tealmint/25 text-tealmint flex items-center justify-center shadow-md group-hover:bg-tealmint group-hover:text-navy transition-all duration-300">
              <FileText size={24} />
            </div>
            <h3 className="font-display text-xl font-bold text-pearl mt-2">Reporting &amp; Deliverables</h3>
            <p className="text-xs text-pearl/70 leading-relaxed">
              Automated delivery and client-ready reporting options:
            </p>
            <ul className="text-xs font-mono text-pearl/60 space-y-1 mt-1 list-disc pl-4 text-left">
              <li>Dashboards &amp; Visual Reports</li>
              <li>Management Reports</li>
              <li>Interactive Reports</li>
              <li>Automated Delivery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Client Benefits Section */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 mb-24 relative z-10">
        <SpotlightEffect 
          opacity={0.15} 
          className="relative py-20 px-6 md:px-12 bg-[#050c12] border border-tealmint/15 rounded-3xl overflow-hidden shadow-2xl shadow-[#00050c]/50 bg-financial-grid transition-all duration-500 hover:border-tealmint/30"
        >
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-ocean/15 blur-[120px] pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-mono text-xs text-tealmint uppercase tracking-widest block mb-3 border border-tealmint/25 bg-tealmint/5 rounded-full px-4 py-1.5 w-max mx-auto shadow-md">
                VALUE CREATION
              </span>
              <h2 className="font-display text-5xl font-bold text-pearl leading-none mt-2">
                Client Benefits
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {/* Operational Benefits */}
              <div className="bg-navy/60 border border-tealmint/15 rounded-2xl p-6 flex flex-col gap-4">
                <span className="font-mono text-xs text-tealmint font-bold uppercase tracking-wider block border-b border-tealmint/10 pb-2">
                  Operational
                </span>
                <ul className="space-y-3">
                  {clientBenefits.operational.map((b, i) => (
                    <li key={i} className="flex gap-2.5 items-start text-sm text-pearl/85">
                      <CheckCircle size={16} className="text-tealmint shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Investment Benefits */}
              <div className="bg-navy/60 border border-tealmint/15 rounded-2xl p-6 flex flex-col gap-4">
                <span className="font-mono text-xs text-tealmint font-bold uppercase tracking-wider block border-b border-tealmint/10 pb-2">
                  Investment
                </span>
                <ul className="space-y-3">
                  {clientBenefits.investment.map((b, i) => (
                    <li key={i} className="flex gap-2.5 items-start text-sm text-pearl/85">
                      <CheckCircle size={16} className="text-tealmint shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Strategic Benefits */}
              <div className="bg-navy/60 border border-tealmint/15 rounded-2xl p-6 flex flex-col gap-4">
                <span className="font-mono text-xs text-tealmint font-bold uppercase tracking-wider block border-b border-tealmint/10 pb-2">
                  Strategic
                </span>
                <ul className="space-y-3">
                  {clientBenefits.strategic.map((b, i) => (
                    <li key={i} className="flex gap-2.5 items-start text-sm text-pearl/85">
                      <CheckCircle size={16} className="text-tealmint shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </SpotlightEffect>
      </section>

      {/* In-Perimeter Deployment Section */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-pearl leading-none">
            In-Perimeter Deployment Concern-Resolution
          </h2>
          <p className="text-sm text-pearl/50 mt-3 font-mono">
            How the recommended On-Premise model addresses institutional compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {concerns.map((c, i) => (
            <div key={i} className="bg-[#050c12]/80 border border-tealmint/10 rounded-2xl p-6 md:p-8 shadow-xl flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Shield size={18} className="text-tealmint shrink-0" />
                <h3 className="font-display text-lg font-bold text-pearl">{c.title}</h3>
              </div>
              <p className="text-xs md:text-sm text-pearl/70 leading-relaxed font-mono">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
