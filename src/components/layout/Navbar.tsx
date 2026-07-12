import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Menu, X, Globe } from 'lucide-react';
import { navLinks } from '@/data/content';

interface NavbarProps {
  onLaunchDemo?: () => void;
}

export default function Navbar({ onLaunchDemo }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      let currentActive = '';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentActive = section;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 py-4 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-colors">
              <Leaf className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-heading font-extrabold text-xl tracking-tight text-on-surface">
              Eco<span className="text-primary">Sphere</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/80 border border-slate-200/50 p-1 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(sectionId);
                  }}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary text-white shadow-md shadow-primary/15'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-white/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs font-mono text-on-surface-variant border border-slate-200/50 px-3 py-1.5 rounded-full bg-slate-100/50">
              <Globe className="w-3.5 h-3.5 text-secondary" />
              <span>Odoo Native</span>
            </div>
            <button
              onClick={() => onLaunchDemo && onLaunchDemo()}
              className="px-6 py-2.5 rounded-full bg-primary hover:bg-primary-container text-white font-heading font-medium text-sm transition-all duration-200 hover:shadow-lg hover:shadow-primary/15 active:scale-95 cursor-pointer"
            >
              Launch Demo
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 border border-slate-200/50 hover:bg-slate-200 transition-colors text-on-surface cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[73px] left-0 w-full z-30 lg:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200/50 px-6 py-8 flex flex-col gap-6 shadow-lg"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(sectionId);
                    }}
                    className={`px-4 py-3.5 rounded-xl font-heading font-semibold text-base transition-colors ${
                      isActive
                        ? 'bg-primary/10 text-primary border border-primary/20'
                        : 'text-on-surface-variant hover:text-on-surface hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="h-px bg-slate-200" />

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-on-surface-variant border border-slate-200/50 py-2.5 rounded-xl bg-slate-50">
                <Globe className="w-4 h-4 text-secondary animate-spin-slow" />
                <span>Odoo Native ESG Framework</span>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onLaunchDemo && onLaunchDemo();
                }}
                className="w-full py-4 rounded-xl bg-primary hover:bg-primary-container text-white font-heading font-semibold text-center transition-all cursor-pointer shadow-lg shadow-primary/10"
              >
                Launch Live Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
