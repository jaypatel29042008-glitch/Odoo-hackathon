import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

export default function CTASection({ onLaunchDemo }: { onLaunchDemo?: () => void }) {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Large conversion card */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r bg-esg-gradient rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl shadow-eco-600/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          {/* Decorative glowing backdrops */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-surface-container/60 rounded-full blur-[60px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-surface/20 rounded-full blur-[60px] pointer-events-none" />

          {/* Left Text */}
          <div className="flex flex-col gap-3 max-w-2xl relative z-10">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-on-surface leading-tight">
              Ready to Automate Your ESG Reporting?
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Join the 1,000+ companies who need to comply with SEBI BRSR mandates. Get started with our native Odoo 17 module today.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto relative z-10 shrink-0">
            <button
              onClick={() => onLaunchDemo && onLaunchDemo()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-primary hover:bg-slate-100 font-heading font-semibold text-sm transition-all shadow-lg active:scale-95 cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4.5 h-4.5 text-primary group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-white text-white hover:bg-surface-container-low/50 font-heading font-semibold text-sm transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-4.5 h-4.5" />
              <span>Schedule Demo</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
