import { motion } from 'framer-motion';
import { X, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { existingSolutions } from '@/data/content';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '../ui/SectionHeader';

export default function ExistingSolutionsSection() {
  return (
    <section id="existing-solutions" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gov-950/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeader
          eyebrow="MARKET LANDSCAPE"
          title="Why Existing Solutions Fall Short"
          subtitle="While carbon accounting tools and sustainability platforms exist, they fail to address the core requirements of modern, fast-moving enterprises."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left: Traditional Solutions */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {existingSolutions.map((solution) => (
              <motion.div
                key={solution.name}
                variants={fadeInUp}
                className="glass-card border-outline-variant/30 p-6 rounded-2xl flex items-start gap-5 hover:border-red-500/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-error-container/20 border border-error/20 flex items-center justify-center shrink-0 text-error mt-1">
                  <X className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="font-heading font-bold text-on-surface text-lg">
                      {solution.name}
                    </h3>
                    <span className="text-outline text-xs font-mono">({solution.examples})</span>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    <span className="text-error font-medium">Limitation:</span> {solution.limitation}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: EcoSphere Advantage Callout */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-5 flex"
          >
            <div className="glass-card border-primary/30 bg-eco-950/15 p-8 rounded-3xl border flex flex-col justify-between relative overflow-hidden shadow-xl shadow-eco-950/20 w-full">
              {/* Decorative green radial glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary-container/20 rounded-full blur-[60px] pointer-events-none" />

              <div className="flex flex-col gap-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary-container/20 border border-primary/20 flex items-center justify-center text-primary">
                  <ShieldCheck className="w-7 h-7" />
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="font-heading font-extrabold text-2xl text-white">
                    The EcoSphere Advantage
                  </h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    By building our platform natively inside the Odoo ERP environment, we bypass the need for data imports, sync lags, or manual spreadsheet maintenance entirely.
                  </p>
                </div>

                <div className="h-px bg-surface-container-low/50 w-full" />

                <ul className="flex flex-col gap-4">
                  <li className="flex items-start gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-eco-500/20 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>Direct ERP transactional binding</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-eco-500/20 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>Gamification linked to actual daily duties</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-eco-500/20 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>Low compliance setup overhead</span>
                  </li>
                </ul>
              </div>

              <a
                href="#workflow"
                className="mt-8 flex items-center gap-2 text-primary hover:text-eco-300 text-sm font-semibold group cursor-pointer inline-flex w-max"
              >
                See how the workflow works
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
