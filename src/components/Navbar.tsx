import { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Platform', path: '/#platform' },
    { label: 'Features', path: '/#features' },
    { label: 'About', path: '/about' },
    { label: 'Team', path: '/team' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleItemClick = (path: string) => {
    setIsMobileMenuOpen(false);
    
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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-4 shadow-lg'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <div onClick={() => handleItemClick('/')}>
            <Logo layout="stacked" />
          </div>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive =
                currentPath === item.path ||
                (item.path.startsWith('/#') && currentPath === '/');
              return (
                <button
                  key={item.label}
                  onClick={() => handleItemClick(item.path)}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-tealmint relative py-1 ${
                    isActive ? 'text-tealmint' : 'text-pearl/80'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-tealmint rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleItemClick('/contact')}
              className="px-4 py-2 text-sm font-medium text-pearl hover:text-tealmint transition-colors duration-300"
            >
              Log In
            </button>
            <button
              onClick={() => handleItemClick('/contact')}
              className="btn-glow px-6 py-2.5 rounded-full text-sm font-semibold bg-ocean border border-tealmint/30 text-pearl hover:text-navy hover:bg-tealmint transition-all duration-300 shadow-md shadow-ocean/20"
            >
              Request Demo →
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-pearl/85 hover:text-tealmint transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-navy/98 backdrop-blur-md flex flex-col pt-32 px-8 transition-all duration-300 animate-fadeIn md:hidden">
          <div className="flex flex-col gap-6 text-center">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleItemClick(item.path)}
                className="text-2xl font-display font-medium text-pearl hover:text-tealmint transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-16 flex flex-col gap-4 max-w-sm mx-auto w-full">
            <button
              onClick={() => handleItemClick('/contact')}
              className="py-3 rounded-full border border-pearl/20 text-pearl font-medium hover:bg-pearl/5 transition-colors"
            >
              Log In
            </button>
            <button
              onClick={() => handleItemClick('/contact')}
              className="py-3 rounded-full bg-ocean text-pearl font-semibold hover:bg-tealmint hover:text-navy transition-all duration-300 shadow-lg shadow-ocean/30"
            >
              Request Demo
            </button>
          </div>

          <div className="mt-auto mb-8 flex justify-center items-center gap-2 text-xs text-pearl/50">
            <ShieldCheck size={16} className="text-tealmint" />
            <span>SOC 2 Compliant Institutional Standard</span>
          </div>
        </div>
      )}
    </>
  );
}
