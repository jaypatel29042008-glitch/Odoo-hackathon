import { motion } from 'framer-motion';
import { Crown, Target, Smile, ShieldCheck, Check } from 'lucide-react';
import { benefitsList } from '@/data/content';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '../ui/SectionHeader';

const iconMap: Record<string, React.ComponentType<any>> = {
  Crown,
  Target,
  Smile,
  ShieldCheck,
};

const iconColors: Record<string, string> = {
  Crown: 'text-tertiary bg-tertiary-container/20 border-tertiary/20',
  Target: 'text-primary bg-primary-container/20 border-primary/20',
  Smile: 'text-secondary bg-secondary-container/20 border-secondary/20',
  ShieldCheck: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
};

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-gradient-section relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gov-950/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeader
          eyebrow="VALUE PROPOSITION"
          title="Value for Every Stakeholder"
          subtitle="EcoSphere bridges the gap between executive reporting needs, team execution capacity, and employee engagement."
        />

        {/* Benefits Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {benefitsList.map((benefit) => {
            const IconComponent = iconMap[benefit.icon] || Target;
            const iconColorClass = iconColors[benefit.icon] || 'text-primary bg-primary-container/20 border-primary/20';

            return (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                className="glass-card border-outline-variant/30 hover:border-primary/20 p-8 rounded-3xl transition-all duration-300 hover:scale-[1.01] flex flex-col gap-6"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${iconColorClass}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl text-white">
                    {benefit.title}
                  </h3>
                </div>

                <div className="h-px bg-surface-container-low/50 w-full" />

                <ul className="flex flex-col gap-4">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-on-surface-variant">
                      <div className="w-5 h-5 rounded-full bg-primary-container/20 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
