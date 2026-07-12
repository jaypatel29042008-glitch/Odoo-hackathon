import { motion } from 'framer-motion';
import { 
  Settings, Activity, Zap, UserCheck, BarChart3, PieChart
} from 'lucide-react';
import { workflowSteps } from '@/data/content';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '../ui/SectionHeader';

const iconMap: Record<string, React.ComponentType<any>> = {
  Settings,
  Activity,
  Zap,
  UserCheck,
  BarChart3,
  PieChart,
};

export default function WorkflowSection() {
  return (
    <section id="workflow" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-eco-950/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeader
          eyebrow="BUSINESS WORKFLOW"
          title="From ERP Transaction to ESG Intelligence"
          subtitle="Watch how raw operations flow seamlessly from initial setup to employee challenges and executive dashboards."
        />

        {/* Timeline container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line through timeline */}
          <div className="absolute left-[31px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-eco-600 via-gov-600 to-amber-600/30 opacity-40" />

          {/* Staggered workflow steps */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col gap-16"
          >
            {workflowSteps.map((step, idx) => {
              const IconComponent = iconMap[step.icon] || Settings;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  variants={fadeInUp}
                  className={`flex flex-col md:flex-row items-start md:items-center relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Number Dot Indicator */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-[7px] md:-translate-x-1/2 w-9 h-9 rounded-full bg-surface border-2 border-eco-500 flex items-center justify-center font-mono text-xs font-bold text-primary z-10 shadow-lg shadow-eco-500/20">
                    {String(step.step).padStart(2, '0')}
                  </div>

                  {/* Left spacer for desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card wrapper */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                    <div className="glass-card hover:border-primary/20 p-8 rounded-3xl relative transition-all duration-300 group hover:scale-[1.01]">
                      {/* Step Icon */}
                      <div className="w-12 h-12 rounded-xl bg-primary-container/20 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-105 transition-transform">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>

                      <h3 className="font-heading font-extrabold text-xl text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Detail Chips */}
                      <div className="flex flex-wrap gap-2">
                        {step.details.map((detail) => (
                          <span
                            key={detail}
                            className="px-3 py-1 rounded-lg bg-surface-container-low/50 border border-outline-variant/30 text-xs text-on-surface-variant font-mono"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
