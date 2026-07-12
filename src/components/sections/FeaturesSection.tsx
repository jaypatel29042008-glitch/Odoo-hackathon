import { motion } from 'framer-motion';
import { 
  Calculator, Award, FileCheck, AlertTriangle, FileText, Bell, Gift, Medal, Truck
} from 'lucide-react';
import { features } from '@/data/content';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '../ui/SectionHeader';

const iconMap: Record<string, React.ComponentType<any>> = {
  Calculator,
  Award,
  FileCheck,
  AlertTriangle,
  FileText,
  Bell,
  Gift,
  Medal,
  Truck,
};

const categoryBadgeColors: Record<string, { bg: string; text: string; border: string }> = {
  automation: {
    bg: 'bg-primary-container/20',
    text: 'text-primary',
    border: 'border-primary/20',
  },
  gamification: {
    bg: 'bg-tertiary-container/20',
    text: 'text-tertiary',
    border: 'border-tertiary/20',
  },
  compliance: {
    bg: 'bg-secondary-container/20',
    text: 'text-secondary',
    border: 'border-secondary/20',
  },
  reporting: {
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    border: 'border-purple-500/20',
  },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gradient-section relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-eco-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeader
          eyebrow="ADVANCED AUTOMATION"
          title="Designed for Enterprise Workloads"
          subtitle="EcoSphere delivers automated data pipelines, auditable proof files, and smart incentives built to scale."
        />

        {/* Features grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon] || Calculator;
            const badge = categoryBadgeColors[feature.category] || categoryBadgeColors.automation;

            return (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="glass-card hover:border-primary/20 p-8 rounded-3xl transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between group"
              >
                <div className="flex flex-col gap-6">
                  {/* Top line with Icon and Category Tag */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-surface-container-low/50 border border-outline-variant/50 flex items-center justify-center text-primary group-hover:scale-105 transition-all">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${badge.bg} ${badge.text} ${badge.border} capitalize`}>
                      {feature.category}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-heading font-bold text-xl text-white group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {feature.description}
                    </p>
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
