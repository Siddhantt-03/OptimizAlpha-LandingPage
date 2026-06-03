import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ChevronDown, 
  HelpCircle, 
  Layers, 
  Shield, 
  Sparkles, 
  X,
  ArrowRight
} from 'lucide-react';
import SpotlightEffect from '../components/SpotlightEffect';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div 
      className={`border rounded-xl px-5 py-4 transition-all duration-300 relative group cursor-pointer ${
        isOpen 
          ? 'bg-ocean/15 border-tealmint/40 shadow-lg shadow-tealmint/5' 
          : 'bg-[#060d15]/40 border-tealmint/10 hover:border-tealmint/25 hover:bg-ocean/5'
      }`}
      onClick={onToggle}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.span 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            className="absolute left-0 top-3 bottom-3 w-1 bg-tealmint rounded-r"
          />
        )}
      </AnimatePresence>

      <button
        type="button"
        className="w-full flex items-center justify-between text-left font-display text-base md:text-lg font-semibold text-pearl transition-colors duration-200 group-hover:text-tealmint"
      >
        <span className="pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={`shrink-0 transition-colors ${isOpen ? 'text-tealmint' : 'text-pearl/30 group-hover:text-tealmint/50'}`}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-xs md:text-sm text-pearl/70 leading-relaxed pt-3 pr-2 font-mono whitespace-pre-line">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openIdxs, setOpenIdxs] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    setOpenIdxs((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const categories = [
    { name: 'All', icon: <HelpCircle size={16} /> },
    { name: 'Platform Capabilities', icon: <Layers size={16} /> },
    { name: 'Attribution & Contribution', icon: <Sparkles size={16} /> },
    { name: 'Deployment & Security', icon: <Shield size={16} /> }
  ];

  const faqData = [
    {
      category: "Platform Capabilities",
      items: [
        {
          id: "pc1",
          q: "What is OptimizAlpha?",
          a: "OptimizAlpha is a premium, institutional-grade investment analytics platform designed to consolidate complex and fragmented portfolio data into a single, unified intelligence layer. We empower asset managers, family offices, and institutional investors with decision-grade insights, professional reporting, and highly automated research workflows."
        },
        {
          id: "pc2",
          q: "What core capabilities does the platform unify?",
          a: "OptimizAlpha integrates several key capabilities into a single cohesive interface: robust portfolio performance measurement, granular relative attribution, real-time exposure and drift monitoring, specialized private market analytics, and an on-demand AI co-pilot for automated narrative reporting."
        },
        {
          id: "pc3",
          q: "What asset classes and entity models are supported?",
          a: "The platform supports a comprehensive range of both public and private asset classes. It is built on a flexible, multi-tier organizational model, allowing you to seamlessly analyze and roll up performance data across Fund, Family Office, and Individual Account levels."
        },
        {
          id: "pc4",
          q: "What performance calculation methodologies are supported?",
          a: "OptimizAlpha supports standard, GIPS-aligned calculation methodologies to satisfy rigorous institutional auditing requirements. This includes unweighted TWRR, Daily and Monthly Modified Dietz, money-weighted MWRR (IRR/XIRR), multi-period linking, and FX-adjusted returns. Every calculation is backed by transaction-level logging and a fully auditable data lineage."
        }
      ]
    },
    {
      category: "Attribution & Contribution",
      items: [
        {
          id: "ac1",
          q: "What performance attribution methodology is used?",
          a: "We utilize a precise Brinson-Fachler attribution model to isolate active management performance relative to a chosen benchmark. The engine decomposes your active returns into distinct allocation, security selection, and interaction effects at both the asset-class and sector levels."
        },
        {
          id: "ac2",
          q: "What is the difference between relative attribution and absolute contribution?",
          a: "The platform provides two complementary lenses on your portfolio performance:\n- **Relative Attribution** measures active management skill against a benchmark, isolating whether your outperformance was driven by sector allocation or security selection.\n- **Absolute Contribution** focuses on absolute returns without a benchmark, calculating the direct impact of every holding (weight × return) to show exactly which positions built or eroded your total capital."
        },
        {
          id: "ac3",
          q: "What is the AI Performance Agent?",
          a: "The AI Performance Agent is a secure, built-in co-pilot designed to streamline your reporting workflows. It automatically drafts institutional-grade investment commentaries by analyzing your attribution, drift, and private market metrics, significantly reducing manual reporting cycles."
        }
      ]
    },
    {
      category: "Deployment & Security",
      items: [
        {
          id: "ds1",
          q: "What deployment options are offered?",
          a: "We support two primary deployment models to suit your organization's IT and compliance preferences:\n\n- **On-Premise (In-Perimeter)**: Our primary, self-hosted deployment. It runs inside your own private cloud or local servers, giving you complete sovereignty and compliance control. You retain complete sovereign command over application hosting and security keys, isolate your portfolio data from third-party networks, decide when to apply updates, and leverage formal source-code escrow contracts.\n\n- **SaaS (Cloud-Hosted)**: An upcoming, fully managed cloud service currently under development (scheduled for release within the next 12-18 months) for teams seeking low IT maintenance overhead. It will feature AWS multi-tenant hosting, automatic patches, and SOC 2 data encryption."
        },
        {
          id: "ds2",
          q: "How does the On-Premise model address data residency concerns?",
          a: "By running entirely within your secure cloud perimeter, all portfolio data remains strictly within your jurisdiction. This layout avoids cross-border data transfers and keeps third-party handlers out of the data path, giving you absolute certainty over regulatory compliance."
        },
        {
          id: "ds3",
          q: "How does the On-Premise model ensure information security?",
          a: "The platform integrates directly into your organization's audited and approved network architecture. Since it resides behind your own firewall and access policies, you retain full, exclusive control over who can access the application, both internally and externally."
        },
        {
          id: "ds4",
          q: "How does the On-Premise model address operational continuity?",
          a: "Because the platform runs directly on infrastructure you control, it is covered under your own business continuity and disaster recovery frameworks. This layout removes any reliance on external vendor uptime, ensuring continuous availability."
        },
        {
          id: "ds5",
          q: "What happens if there are concerns about the viability of OptimizAlpha?",
          a: "To secure your long-term operations, we offer a source-code escrow contingency model. In the event of company insolvency or software abandonment, the fully documented codebase is officially released to you. Because the software is hosted locally on your servers, your team or a third-party partner can continue to run and maintain it independently."
        },
        {
          id: "ds6",
          q: "What is the onboarding timeline and implementation journey?",
          a: "We offer a structured, 24-week onboarding process to transition your operations seamlessly to the platform:\n\n- **Weeks 1–8: Data Onboarding** - Ingesting historical portfolio records, configuring data validation feeds, and establishing baseline reconciliation frameworks.\n- **Weeks 9–16: Platform Configuration** - Setting up your custom visual dashboards, defining cycle-driven reporting templates, and configuring role-based user access controls.\n- **Weeks 17–24: Analytics Deployment** - Activating real-time Brinson-Fachler attribution modules, policy drift trigger alerts, private equity multiples calculations, and the AI performance agent writer."
        }
      ]
    }
  ];

  // Filter items dynamically based on search query
  const filteredData = faqData.map(cat => {
    const items = cat.items.filter(
      item => 
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.a.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...cat, items };
  }).filter(cat => {
    if (searchQuery) return cat.items.length > 0;
    return selectedCategory === 'All' || cat.category === selectedCategory;
  });

  return (
    <SpotlightEffect opacity={0.12} className="bg-navy min-h-screen pt-32 pb-24 text-pearl bg-financial-grid relative">
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-ocean/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-tealmint/5 blur-[120px] pointer-events-none" />

      {/* Header section */}
      <section className="max-w-4xl mx-auto px-6 mb-16 text-center relative z-10">
        <span className="font-mono text-xs text-tealmint uppercase tracking-widest block mb-3 border border-tealmint/25 bg-tealmint/5 rounded-full px-4 py-1.5 w-max mx-auto shadow-md">
          Platform Documentation
        </span>
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-pearl mb-6">
          Institutional FAQ Center
        </h1>
        <p className="text-sm md:text-base text-pearl/70 max-w-xl mx-auto leading-relaxed">
          Search detailed answers regarding platform capabilities, quantitative calculation methodologies, deployment options, and security configurations.
        </p>

        {/* Custom Search Input */}
        <div className="relative max-w-xl mx-auto mt-10">
          <input
            type="text"
            placeholder="Search FAQs (e.g., attribution, in-perimeter, TWRR)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-3.5 rounded-full bg-[#050c12]/80 border border-tealmint/20 text-sm text-pearl placeholder-pearl/40 focus:outline-none focus:border-tealmint focus:ring-1 focus:ring-tealmint backdrop-blur-md shadow-lg transition-all"
          />
          <Search size={18} className="absolute left-4.5 top-1/2 -translate-y-1/2 text-pearl/40" />
          
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-4.5 top-1/2 -translate-y-1/2 text-pearl/40 hover:text-tealmint transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </section>

      {/* Categories and Accordions Grid */}
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar Navigation */}
          <div className="hidden lg:col-span-3 lg:flex flex-col gap-2.5 sticky top-28 bg-[#050c12]/80 border border-tealmint/15 p-5 rounded-2xl backdrop-blur-md shadow-xl">
            <span className="font-mono text-[9px] text-pearl/40 uppercase tracking-widest block mb-2 px-3">
              Categories
            </span>
            {categories.map((cat, idx) => {
              const isActive = selectedCategory === cat.name && !searchQuery;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedCategory(cat.name);
                    setSearchQuery('');
                  }}
                  disabled={!!searchQuery}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-display text-base font-bold transition-all text-left group ${
                    searchQuery 
                      ? 'opacity-40 cursor-not-allowed border border-transparent'
                      : isActive
                        ? 'bg-tealmint text-navy shadow-md shadow-tealmint/10 border border-tealmint/10'
                        : 'border border-transparent hover:bg-ocean/10 hover:border-tealmint/15 text-pearl/80 hover:text-tealmint'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`transition-colors ${isActive ? 'text-navy' : 'text-tealmint group-hover:scale-110 transition-transform duration-300'}`}>
                      {cat.icon}
                    </span>
                    <span>{cat.name}</span>
                  </div>
                  {!isActive && !searchQuery && (
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Horizontal Scrollbar Ribbon (Mobile only) */}
          <div className="lg:hidden w-full overflow-x-auto scroll-hide-scrollbar flex gap-2 pb-2">
            {categories.map((cat, idx) => {
              const isActive = selectedCategory === cat.name && !searchQuery;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedCategory(cat.name);
                    setSearchQuery('');
                  }}
                  disabled={!!searchQuery}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-display text-sm font-bold shrink-0 border transition-all ${
                    searchQuery 
                      ? 'opacity-40 cursor-not-allowed border-transparent'
                      : isActive
                        ? 'bg-tealmint text-navy border-tealmint/20 shadow-md'
                        : 'bg-[#050c12] border-tealmint/10 text-pearl/70 hover:text-tealmint'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Right side Accordion Showcase Panel */}
          <div className="lg:col-span-9 bg-[#050c12]/80 border border-tealmint/15 rounded-3xl p-6 md:p-10 backdrop-blur-md shadow-2xl premium-glow-shadow relative">
            <div className="absolute inset-0 bg-gradient-to-b from-ocean/5 to-transparent pointer-events-none rounded-3xl" />
            
            <AnimatePresence mode="wait">
              {filteredData.length > 0 ? (
                <motion.div 
                  key={selectedCategory + searchQuery}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-10 text-left"
                >
                  {filteredData.map((cat, idx) => (
                    <div key={idx} className="flex flex-col gap-5">
                      <div className="flex items-center gap-3 border-b border-tealmint/20 pb-3.5">
                        <span className="text-tealmint">
                          {categories.find(c => c.name === cat.category)?.icon || <HelpCircle size={16} />}
                        </span>
                        <h3 className="font-mono text-xs text-tealmint uppercase tracking-widest font-bold">
                          {cat.category}
                        </h3>
                        <span className="font-mono text-[9px] text-pearl/40 ml-auto bg-tealmint/5 border border-tealmint/10 rounded-full px-2.5 py-0.5">
                          {cat.items.length} {cat.items.length === 1 ? 'Q&A' : 'Q&As'}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-4">
                        {cat.items.map((item) => (
                          <AccordionItem
                            key={item.id}
                            question={item.q}
                            answer={item.a}
                            isOpen={openIdxs.includes(item.id)}
                            onToggle={() => handleToggle(item.id)}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  key="no-results"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20 flex flex-col items-center gap-5 text-pearl/50"
                >
                  <div className="p-4 rounded-full bg-ocean/20 text-tealmint shadow-md">
                    <HelpCircle size={40} className="animate-pulse" />
                  </div>
                  <div className="flex flex-col gap-1.5 max-w-sm">
                    <h3 className="font-display text-xl font-bold text-pearl">No FAQ Found</h3>
                    <p className="text-xs text-pearl/50 leading-relaxed">
                      We couldn't find any proposal documentation matching your search term: <strong>"{searchQuery}"</strong>. Please search for 'attribution', 'perimeter', or 'TWRR'.
                    </p>
                  </div>
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="font-mono text-[10px] text-tealmint hover:text-pearl uppercase tracking-widest mt-2 border border-tealmint/20 hover:border-tealmint px-5 py-2.5 rounded-full transition-all duration-300"
                  >
                    Clear Filter
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>
    </SpotlightEffect>
  );
}
