import { motion } from 'framer-motion';
import { Leaf, Users, Shield, Trophy, CheckCircle2 } from 'lucide-react';
import { solutionPillars } from '@/data/content';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '../ui/SectionHeader';

const iconMap: Record<string, React.ComponentType<any>> = {
  Leaf,
  Users,
  Shield,
  Trophy,
};

const colorClasses: Record<string, { border: string; bg: string; text: string; bgHover: string }> = {
  emerald: {
    border: 'hover:border-primary/30',
    bg: 'bg-primary-container/20 border-primary/20',
    text: 'text-primary',
    bgHover: 'group-hover:border-eco-500/40',
  },
  blue: {
    border: 'hover:border-secondary/30',
    bg: 'bg-secondary-container/20 border-secondary/20',
    text: 'text-secondary',
    bgHover: 'group-hover:border-gov-500/40',
  },
  purple: {
    border: 'hover:border-purple-500/30',
    bg: 'bg-purple-500/10 border-purple-500/20',
    text: 'text-purple-400',
    bgHover: 'group-hover:border-purple-500/40',
  },
  amber: {
    border: 'hover:border-tertiary/30',
    bg: 'bg-tertiary-container/20 border-tertiary/20',
    text: 'text-tertiary',
    bgHover: 'group-hover:border-amber-500/40',
  },
};

export default function SolutionSection() {
  return (
    <section id="solution" className="py-24 bg-surface relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-eco-950/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gov-950/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeader
          eyebrow="OUR SOLUTION"
          title="One Platform. Four Pillars. Complete ESG Control."
          subtitle="EcoSphere connects your Environmental metrics, Social activities, and Governance audits natively inside your Odoo ERP workspace."
        />

        {/* Pillars Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {solutionPillars.map((pillar) => {
            const IconComponent = iconMap[pillar.icon] || Leaf;
            const colors = colorClasses[pillar.color] || colorClasses.emerald;

            return (
              <motion.div
                key={pillar.title}
                variants={fadeInUp}
                className={`glass-card ${colors.border} group p-8 rounded-3xl transition-all duration-300 hover:scale-[1.01]`}
              >
                <div className="flex items-start gap-6">
                  {/* Icon Container */}
                  <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center border group-hover:scale-105 transition-all shrink-0`}>
                    <IconComponent className={`w-7 h-7 ${colors.text}`} />
                  </div>

                  <div className="flex flex-col gap-6 flex-grow">
                    <div>
                      <h3 className="font-heading font-extrabold text-2xl text-white">
                        {pillar.title}
                      </h3>
                      <p className="text-on-surface-variant text-sm mt-1.5">
                        Core operational tracking layer for corporate sustainability.
                      </p>
                    </div>

                    <div className="h-px bg-surface-container-low/50 w-full" />

                    {/* Features List */}
                    <ul className="flex flex-col gap-3.5">
                      {pillar.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-on-surface-variant">
                          <CheckCircle2 className={`w-5 h-5 ${colors.text} shrink-0 mt-0.5`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
