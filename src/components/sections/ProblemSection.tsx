import { motion } from 'framer-motion';
import { ClipboardList, Unplug, EyeOff, Scale, AlertCircle } from 'lucide-react';
import { problemPoints } from '@/data/content';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '../ui/SectionHeader';

// Map icon strings to Lucide components
const iconMap: Record<string, React.ComponentType<any>> = {
  ClipboardList,
  Unplug,
  EyeOff,
  Scale,
};

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-red-950/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeader
          eyebrow="THE CHALLENGE"
          title="Why Current ESG Management is Broken"
          subtitle="Businesses face growing regulatory pressures and operational inefficiencies that make sustainability reporting a major administrative bottleneck."
        />

        {/* Problem Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {problemPoints.map((point) => {
            const IconComponent = iconMap[point.icon] || ClipboardList;
            return (
              <motion.div
                key={point.title}
                variants={fadeInUp}
                className="glass-card hover:border-error/20 group p-8 rounded-2xl transition-all duration-300 hover:scale-[1.01]"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-error-container/20 flex items-center justify-center border border-error/20 group-hover:border-red-500/35 transition-colors shrink-0">
                    <IconComponent className="w-6 h-6 text-error group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-heading font-bold text-xl text-white group-hover:text-error transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Highlighted regulatory callout banner */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card border-amber-600/20 bg-amber-600/5 p-6 rounded-2xl border flex flex-col sm:flex-row items-center gap-4 max-w-4xl mx-auto shadow-lg shadow-amber-600/5"
        >
          <div className="w-12 h-12 rounded-xl bg-tertiary-container/20 flex items-center justify-center border border-tertiary/20 shrink-0">
            <AlertCircle className="w-6 h-6 text-amber-500" />
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed text-center sm:text-left">
            <span className="font-semibold text-amber-500">Regulatory Focus:</span> SEBI mandates strict Business Responsibility and Sustainability Reporting (BRSR) for the top 1,000 listed companies in India. Failure to comply can result in auditor flags, investor downgrades, and ESG score reductions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
