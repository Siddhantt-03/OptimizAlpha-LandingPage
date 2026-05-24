import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, HelpCircle } from 'lucide-react';
import SpotlightEffect from '../components/SpotlightEffect';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-tealmint/10 py-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left py-2 font-display text-base md:text-lg font-semibold text-pearl hover:text-tealmint transition-colors duration-200"
      >
        <span className="pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-pearl/40"
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
            <p className="text-xs md:text-sm text-pearl/80 leading-relaxed pt-2 pb-4 pr-6">
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
  const [openIdxs, setOpenIdxs] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    setOpenIdxs((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

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
      category: "Pricing & Implementation",
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

  // Filter items
  const filteredData = faqData.map(cat => {
    const items = cat.items.filter(
      item => 
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.a.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...cat, items };
  }).filter(cat => cat.items.length > 0);

  return (
    <SpotlightEffect opacity={0.10} className="bg-navy min-h-screen pt-32 pb-24 text-pearl">
      {/* Search Header */}
      <section className="max-w-4xl mx-auto px-6 mb-16 text-center">
        <span className="font-mono text-xs text-tealmint uppercase tracking-widest block mb-3">
          Knowledge Base
        </span>
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-pearl mb-8">
          Everything you need to know.
        </h1>

        {/* Custom Search Input */}
        <div className="relative max-w-xl mx-auto mt-8">
          <input
            type="text"
            placeholder="Search FAQs (e.g., attribution, SOC 2, PE)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-3.5 rounded-full bg-[#050c12] border border-tealmint/20 text-sm text-pearl placeholder-pearl/40 focus:outline-none focus:border-tealmint focus:ring-1 focus:ring-tealmint transition-all"
          />
          <Search size={18} className="absolute left-4.5 top-1/2 -translate-y-1/2 text-pearl/40" />
        </div>
      </section>

      {/* Accordion Categories */}
      <section className="max-w-3xl mx-auto px-6">
        {filteredData.length > 0 ? (
          <div className="space-y-12">
            {filteredData.map((cat, idx) => (
              <div key={idx} className="flex flex-col">
                {/* Category Label */}
                <h3 className="font-mono text-xs text-tealmint uppercase tracking-widest border-b border-tealmint/20 pb-3 mb-4">
                  {cat.category}
                </h3>
                
                {/* Items */}
                <div className="flex flex-col">
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
          </div>
        ) : (
          <div className="text-center py-12 flex flex-col items-center gap-4 text-pearl/50">
            <HelpCircle size={32} className="text-tealmint" />
            <p className="font-mono text-sm">No results match your query. Please search again.</p>
          </div>
        )}
      </section>
    </SpotlightEffect>
  );
}
