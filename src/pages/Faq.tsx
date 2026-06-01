import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ChevronDown, 
  HelpCircle, 
  Layers, 
  Shield, 
  Cpu, 
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
      {/* Active green vertical border-line */}
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
            <p className="text-xs md:text-sm text-pearl/70 leading-relaxed pt-3 pr-2">
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
    { name: 'Product', icon: <Layers size={16} /> },
    { name: 'Data & Security', icon: <Shield size={16} /> },
    { name: 'Pricing & Onboarding', icon: <Cpu size={16} /> },
    { name: 'Analytics & Features', icon: <Sparkles size={16} /> }
  ];

  const faqData = [
    {
      category: "Product",
      items: [
        {
          id: "p1",
          q: "What asset classes does OptimizAlpha support?",
          a: "Equities, fixed income, mutual funds, private equity, alternatives, and custom asset types. Multi-currency and multi-entity aggregations are resolved natively out of the box."
        },
        {
          id: "p2",
          q: "Can we white-label the platform?",
          a: "Yes. Enterprise clients receive complete white-labeling capability: custom domains, localized branding, customized styling, and firm logo integrations. Your clients see your brand exclusively."
        },
        {
          id: "p3",
          q: "Does OptimizAlpha support multiple clients / entities within one firm?",
          a: "Yes. The platform is engineered on a multi-tenant, schema-isolated PostgreSQL architecture. You can manage multiple distinct client portfolios, sub-entities, and complex hierarchical aggregations with custom role-based entitlements."
        },
        {
          id: "p4",
          q: "Is there a mobile app?",
          a: "The web-based platform is built mobile-first, responsive, and renders beautifully across tablet and mobile displays. A dedicated native mobile app is on our future product roadmap."
        }
      ]
    },
    {
      category: "Data & Security",
      items: [
        {
          id: "s1",
          q: "How do you handle data ingestion?",
          a: "We support standardized CSV template uploads, secure API integration pipelines, and direct database feeds. Our technical onboarding team manages complete data mapping and verification as part of implementation."
        },
        {
          id: "s2",
          q: "Is my client data secure?",
          a: "Yes. We maintain strict schema-level tenant isolation, encrypt data both at rest and in transit, and adhere strictly to SOC 2 Type II data handling guidelines. Client data is never co-mingled."
        },
        {
          id: "s3",
          q: "Can we connect our existing custodian or prime broker feeds?",
          a: "Custom custody and prime broker API integration connects are supported on Professional and Institutional tiers. Our engineering teams implement the structural pipelines."
        }
      ]
    },
    {
      category: "Pricing & Onboarding",
      items: [
        {
          id: "i1",
          q: "How long does implementation take?",
          a: "Standard setups typically complete in 2 to 4 weeks. Complex multi-entity integrations requiring custom data mapping or historical ingestion may require 4 to 8 weeks. Our integration managers lead the entire workflow."
        },
        {
          id: "i2",
          q: "Is there a minimum contract length?",
          a: "Annual agreements are standard platform licensing structures. Multi-year agreements are available with custom volume preferences."
        },
        {
          id: "i3",
          q: "Do you offer a free trial or pilot?",
          a: "We provide structured, high-fidelity proof-of-concept pilot integrations using your firm's historical data for qualified family offices and institutions."
        },
        {
          id: "i4",
          q: "What does onboarding include?",
          a: "Onboarding includes full schema setup, data mapping/cleaning pipelines, staff user training, and a dedicated quantitative success manager for the initial 90 days."
        }
      ]
    },
    {
      category: "Analytics & Features",
      items: [
        {
          id: "a1",
          q: "What performance attribution methodology do you use?",
          a: "We implement the Brinson-Fachler attribution model, which supports top-down and bottom-up attribution at sector, manager, and security levels."
        },
        {
          id: "a2",
          q: "Can we customize the dashboards?",
          a: "Yes. The Custom View module allows your investment teams to arrange, configure, and save bespoke layout blocks focusing on the metrics most essential to your investment committee."
        },
        {
          id: "a3",
          q: "Does the AI chatbot have access to all portfolio data?",
          a: "The conversational AI chatbot operates within the exact sandbox scoping of your firm's database. It respects standard role-based credentials and answers queries using isolated local models without exposing data."
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
    // If searching, keep category if it contains search results
    if (searchQuery) return cat.items.length > 0;
    // Otherwise, filter by tab selection
    return selectedCategory === 'All' || cat.category === selectedCategory;
  });

  return (
    <SpotlightEffect opacity={0.12} className="bg-navy min-h-screen pt-32 pb-24 text-pearl bg-financial-grid relative">
      {/* Background blobs for depth */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-ocean/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-tealmint/5 blur-[120px] pointer-events-none" />

      {/* Header section */}
      <section className="max-w-4xl mx-auto px-6 mb-16 text-center relative z-10">
        <span className="font-mono text-xs text-tealmint uppercase tracking-widest block mb-3 border border-tealmint/25 bg-tealmint/5 rounded-full px-4 py-1.5 w-max mx-auto shadow-md">
          Knowledge Base
        </span>
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-pearl mb-6">
          Everything you need to know.
        </h1>
        <p className="text-sm md:text-base text-pearl/70 max-w-xl mx-auto leading-relaxed">
          Search detailed documentation, product limits, quantitative methodologies, security configurations, and implementation timelines.
        </p>

        {/* Custom Search Input */}
        <div className="relative max-w-xl mx-auto mt-10">
          <input
            type="text"
            placeholder="Search FAQs (e.g., attribution, security, Postgres)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-3.5 rounded-full bg-[#050c12]/80 border border-tealmint/20 text-sm text-pearl placeholder-pearl/40 focus:outline-none focus:border-tealmint focus:ring-1 focus:ring-tealmint backdrop-blur-md shadow-lg transition-all"
          />
          <Search size={18} className="absolute left-4.5 top-1/2 -translate-y-1/2 text-pearl/40" />
          
          {/* Clear Search Button */}
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
          
          {/* 1. Left Sidebar Navigation (Desktop only) */}
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
                    setSearchQuery(''); // Clear search to show category selection
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

          {/* 2. Horizontal Scrollbar Ribbon (Mobile only) */}
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

          {/* 3. Right side Accordion Showcase Panel */}
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
                      {/* Header title for category */}
                      <div className="flex items-center gap-3 border-b border-tealmint/20 pb-3.5">
                        <span className="text-tealmint">
                          {categories.find(c => c.name === cat.category)?.icon || <HelpCircle size={16} />}
                        </span>
                        <h3 className="font-mono text-xs text-tealmint uppercase tracking-widest font-bold">
                          {cat.category}
                        </h3>
                        <span className="font-mono text-[9px] text-pearl/40 ml-auto bg-tealmint/5 border border-tealmint/10 rounded-full px-2.5 py-0.5">
                          {cat.items.length} {cat.items.length === 1 ? 'article' : 'articles'}
                        </span>
                      </div>
                      
                      {/* List items */}
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
                    <h3 className="font-display text-xl font-bold text-pearl">No Articles Found</h3>
                    <p className="text-xs text-pearl/50 leading-relaxed">
                      We couldn't find any knowledge base documents matching your search term: <strong>"{searchQuery}"</strong>. Please try searching for 'attribution', 'security', or 'onboarding'.
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
