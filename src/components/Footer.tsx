import { ShieldCheck, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Footer({ currentPath, onNavigate }: FooterProps) {
  const handleItemClick = (path: string) => {
    if (path.startsWith('/#')) {
      const anchor = path.split('#')[1];
      if (currentPath === '/') {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        onNavigate('/');
        setTimeout(() => {
          const element = document.getElementById(anchor);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy pt-24 pb-12 border-t border-tealmint/10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-ocean/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-tealmint/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-8 pb-16">
          {/* Logo & Tagline */}
          <div className="col-span-2 md:col-span-2 flex flex-col gap-6">
            <div onClick={() => handleItemClick('/')}>
              <Logo layout="stacked" />
            </div>

            <p className="text-sm text-pearl/70 leading-relaxed max-w-sm">
              See Every Edge. Own Every Alpha. Institutional-grade portfolio analytics built for the way serious capital thinks.
            </p>

            <div className="flex items-center gap-4 text-pearl/50">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-pearl/10 hover:border-tealmint hover:text-tealmint transition-all duration-300 bg-ocean/5"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-pearl/10 hover:border-tealmint hover:text-tealmint transition-all duration-300 bg-ocean/5"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Platform */}
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-tealmint">
              Platform
            </h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleItemClick('/#platform')}
                className="text-left text-sm text-pearl/70 hover:text-tealmint transition-colors duration-200"
              >
                Features
              </button>
              <button
                onClick={() => handleItemClick('/contact')}
                className="text-left text-sm text-pearl/70 hover:text-tealmint transition-colors duration-200"
              >
                Book a Demo
              </button>
              <button
                onClick={() => handleItemClick('/#pricing')}
                className="text-left text-sm text-pearl/70 hover:text-tealmint transition-colors duration-200"
              >
                Pricing Tiers
              </button>
              <button
                onClick={() => handleItemClick('/faq')}
                className="text-left text-sm text-pearl/70 hover:text-tealmint transition-colors duration-200"
              >
                Platform Security
              </button>
            </div>
          </div>

          {/* Col 3: Company */}
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-tealmint">
              Company
            </h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleItemClick('/about')}
                className="text-left text-sm text-pearl/70 hover:text-tealmint transition-colors duration-200"
              >
                About Us
              </button>
              <button
                onClick={() => handleItemClick('/team')}
                className="text-left text-sm text-pearl/70 hover:text-tealmint transition-colors duration-200"
              >
                Our Team
              </button>
              <button
                onClick={() => handleItemClick('/about')}
                className="text-left text-sm text-pearl/70 hover:text-tealmint transition-colors duration-200"
              >
                Careers
              </button>
              <button
                onClick={() => handleItemClick('/about')}
                className="text-left text-sm text-pearl/70 hover:text-tealmint transition-colors duration-200"
              >
                Press & Insights
              </button>
            </div>
          </div>

          {/* Col 4: Support */}
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-tealmint">
              Support
            </h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleItemClick('/faq')}
                className="text-left text-sm text-pearl/70 hover:text-tealmint transition-colors duration-200"
              >
                FAQ Center
              </button>
              <button
                onClick={() => handleItemClick('/contact')}
                className="text-left text-sm text-pearl/70 hover:text-tealmint transition-colors duration-200"
              >
                Contact Support
              </button>
              <button
                onClick={() => handleItemClick('/faq')}
                className="text-left text-sm text-pearl/70 hover:text-tealmint transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleItemClick('/faq')}
                className="text-left text-sm text-pearl/70 hover:text-tealmint transition-colors duration-200"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-pearl/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 text-xs text-pearl/50">
            <span>© 2025 OptimizAlpha. All rights reserved.</span>
            <span className="hidden md:inline">·</span>
            <span>Serving Institutional Capital Globally</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-xs font-mono text-tealmint px-3 py-1 rounded-full bg-tealmint/10 border border-tealmint/20">
              <ShieldCheck size={14} />
              <span>SOC 2 Compliant Certified</span>
            </div>

            <button
              onClick={handleScrollToTop}
              className="p-2 rounded-full border border-pearl/10 hover:border-tealmint hover:text-tealmint transition-all duration-300 bg-ocean/5 text-pearl/65 group"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
