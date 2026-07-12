import { Leaf, Github, Linkedin, Twitter, Mail, MapPin, Shield } from 'lucide-react';
import { siteConfig } from '@/data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to the EcoSphere sustainability newsletter!');
  };

  return (
    <footer className="bg-slate-950 border-t border-white/5 relative overflow-hidden">
      {/* Decorative top border gradient line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-eco-600 via-gov-600 to-amber-600" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2"
            >
              <div className="w-9 h-9 rounded-lg bg-eco-600/10 flex items-center justify-center border border-eco-500/20">
                <Leaf className="w-4.5 h-4.5 text-eco-500" />
              </div>
              <span className="font-heading font-bold text-lg text-white">
                Eco<span className="text-eco-500">Sphere</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Odoo-integrated ESG Management Platform. Enabling businesses to automate environmental reporting, motivate employees, and satisfy compliance structures natively.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center border border-white/5 hover:border-white/10 text-slate-400 hover:text-white transition-all">
                <Github className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center border border-white/5 hover:border-white/10 text-slate-400 hover:text-white transition-all">
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center border border-white/5 hover:border-white/10 text-slate-400 hover:text-white transition-all">
                <Twitter className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Links Column 1: Product */}
          <div className="flex flex-col gap-5">
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">Product</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#features" className="text-slate-400 hover:text-eco-400 transition-colors">Core Features</a></li>
              <li><a href="#workflow" className="text-slate-400 hover:text-eco-400 transition-colors">Business Workflow</a></li>
              <li><a href="#showcase" className="text-slate-400 hover:text-eco-400 transition-colors">Dashboard Showcase</a></li>
              <li><a href="#roadmap" className="text-slate-400 hover:text-eco-400 transition-colors">Development Roadmap</a></li>
            </ul>
          </div>

          {/* Links Column 2: Resources & Compliance */}
          <div className="flex flex-col gap-5">
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">Compliance</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#problem" className="text-slate-400 hover:text-eco-400 transition-colors">SEBI BRSR Mandates</a></li>
              <li><a href="#solution" className="text-slate-400 hover:text-eco-400 transition-colors">Three ESG Pillars</a></li>
              <li><a href="#tech-stack" className="text-slate-400 hover:text-eco-400 transition-colors">Technology Stack</a></li>
              <li>
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mt-1 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md w-max">
                  <Shield className="w-3.5 h-3.5 text-gov-500" />
                  <span>Audit-Ready Systems</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter / Stay Connected */}
          <div className="flex flex-col gap-5">
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">Newsletter</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Subscribe to stay updated with Odoo ESG development and regulatory updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 w-full">
              <input
                type="email"
                placeholder="Enter email"
                required
                className="bg-white/5 border border-white/10 hover:border-white/15 focus:border-eco-600 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none flex-grow min-w-0 transition-colors"
              />
              <button
                type="submit"
                className="bg-eco-600 hover:bg-eco-500 text-white px-4 py-2.5 rounded-xl transition-all font-medium text-sm flex items-center justify-center shrink-0 cursor-pointer shadow-md shadow-eco-600/10"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="h-px bg-white/5 w-full my-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-mono">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span>© {currentYear} {siteConfig.name}. All rights reserved.</span>
            <span className="hidden sm:inline text-white/10">|</span>
            <span>Developed for Odoo National Hackathon 2025</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
