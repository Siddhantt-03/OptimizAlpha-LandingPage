import { Linkedin, Award } from 'lucide-react';

interface TeamMemberProps {
  initials: string;
  name: string;
  title: string;
  bio: string;
}

function TeamMemberCard({ initials, name, title, bio }: TeamMemberProps) {
  return (
    <div className="bg-[#050c12] border border-tealmint/10 rounded-2xl p-6 flex flex-col items-center text-center hover:border-tealmint/30 transition-all duration-300 group">
      {/* Initials Avatar with Gradient */}
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-ocean to-tealmint flex items-center justify-center text-navy font-mono text-xl font-bold mb-4 shadow-md group-hover:scale-105 transition-transform duration-300">
        {initials}
      </div>

      <h3 className="font-display text-lg font-bold text-pearl group-hover:text-tealmint transition-colors duration-200">
        {name}
      </h3>
      <span className="font-mono text-xs text-pearl/50 uppercase tracking-widest mt-1 block">
        {title}
      </span>
      <p className="text-xs text-pearl/75 leading-relaxed mt-3 max-w-xs block">
        {bio}
      </p>

      {/* Social Indicator */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
        className="mt-4 text-pearl/40 hover:text-tealmint transition-colors duration-200"
      >
        <Linkedin size={16} />
      </a>
    </div>
  );
}

export default function Team() {
  const coreTeam = [
    {
      initials: "AS",
      name: "Aman Sharma",
      title: "Co-Founder & CEO",
      bio: "10+ years in asset management, institutional quant research, and portfolio modeling."
    },
    {
      initials: "NM",
      name: "Nishant Mehta",
      title: "Co-Founder & CTO",
      bio: "Full-stack cloud architect specializing in low-latency financial stream parsing pipelines."
    },
    {
      initials: "PP",
      name: "Priyanka Patel",
      title: "Head of Product",
      bio: "Former PM lead at a premier digital wealth manager, specializing in visual UX reporting."
    },
    {
      initials: "DK",
      name: "Dr. Devendra Khan",
      title: "Head of Quant Analysis",
      bio: "CFA charterholder, ex-multi-family office portfolio director with asset-allocation expertise."
    },
    {
      initials: "RN",
      name: "Rahul Nair",
      title: "Lead Platform Engineer",
      bio: "Database isolation specialist. Architected schema-isolation models on core relational engines."
    },
    {
      initials: "SJ",
      name: "Siddharth Joshi",
      title: "Client Success Director",
      bio: "Former investment advisory manager, overseeing implementation pipeline operations."
    }
  ];

  const advisors = [
    {
      initials: "RC",
      name: "Rajesh Chandra",
      title: "Senior Quant Advisor",
      bio: "Retired quantitative fund manager with 25+ years managing currency overlay strategies."
    },
    {
      initials: "KM",
      name: "Kabir Malhotra",
      title: "Security Advisor",
      bio: "Cybersecurity auditor specializing in SOC 2 Type II controls and network isolations."
    },
    {
      initials: "YA",
      name: "Yasmin Al-Sayed",
      title: "APAC Wealth Advisor",
      bio: "Boutique private banker advising ultra-high-net-worth single family entities."
    }
  ];

  return (
    <div className="bg-navy min-h-screen pt-32 pb-24 text-pearl">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center relative">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-ocean/10 blur-[100px] pointer-events-none" />
        
        <span className="font-mono text-xs text-tealmint uppercase tracking-widest block mb-3">
          Quantitative Integrity
        </span>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-pearl mb-6 tracking-tight max-w-4xl mx-auto">
          The team behind your alpha.
        </h1>
        <p className="text-sm md:text-base text-pearl/70 max-w-2xl mx-auto leading-relaxed font-sans">
          Investment practitioners, enterprise database engineers, and product designers — united by a single conviction: institutional-grade analytics should be breathtakingly beautiful and mathematically bulletproof.
        </p>
      </section>

      {/* Core Team Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24 border-t border-tealmint/10 pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreTeam.map((member, idx) => (
            <TeamMemberCard
              key={idx}
              initials={member.initials}
              name={member.name}
              title={member.title}
              bio={member.bio}
            />
          ))}
        </div>
      </section>

      {/* Advisory Council */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 border-t border-tealmint/10 pt-20 bg-[#03060a]/40 pb-12 rounded-3xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex p-2.5 rounded-full bg-tealmint/10 text-tealmint border border-tealmint/20 mb-3">
            <Award size={18} />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-pearl">
            Backed by deep domain expertise
          </h2>
          <p className="text-xs text-pearl/60 mt-2 font-mono uppercase tracking-wider">
            Quantitative Research · System Audits · Family Office Operations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisors.map((member, idx) => (
            <TeamMemberCard
              key={idx}
              initials={member.initials}
              name={member.name}
              title={member.title}
              bio={member.bio}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
