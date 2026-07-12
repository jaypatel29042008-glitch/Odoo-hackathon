import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Clock } from 'lucide-react';
import { roadmapPhases } from '@/data/content';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '../ui/SectionHeader';

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24 bg-surface relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-eco-950/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeader
          eyebrow="PRODUCT ROADMAP"
          title="Our Journey to ESG Excellence"
          subtitle="EcoSphere is built to grow. Follow our path from core Odoo integrations to predictive machine learning and supply chain networks."
        />

        {/* Roadmap Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {roadmapPhases.map((phase) => {
            const isCompleted = phase.status === 'completed';
            const isCurrent = phase.status === 'current';

            return (
              <motion.div
                key={phase.phase}
                variants={fadeInUp}
                className={`glass-card p-6 rounded-3xl relative flex flex-col justify-between min-h-[360px] transition-all duration-300 ${
                  isCurrent ? 'border-primary/30 shadow-lg shadow-eco-500/5 bg-eco-950/5' : 'border-outline-variant/30'
                }`}
              >
                <div>
                  {/* Phase & Timeline Row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-outline uppercase">
                      {phase.phase}
                    </span>
                    <span className="text-xs font-mono text-on-surface-variant bg-surface-container-low/50 px-2.5 py-1 rounded-md border border-outline-variant/30">
                      {phase.timeline}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-white mb-6">
                    {phase.title}
                  </h3>

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-3 text-xs leading-relaxed text-on-surface-variant border-t border-outline-variant/30 pt-4">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-eco-500 shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Status Indicator Bar at Bottom */}
                <div className="mt-8 border-t border-outline-variant/30 pt-4 flex items-center justify-between">
                  {isCompleted ? (
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-primary">
                      <CheckCircle2 className="w-4.5 h-4.5 text-primary" />
                      <span>Completed</span>
                    </div>
                  ) : isCurrent ? (
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-tertiary">
                      <Clock className="w-4.5 h-4.5 text-tertiary animate-pulse" />
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                      </span>
                      <span>In Development</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-xs font-mono text-outline">
                      <Circle className="w-4.5 h-4.5 text-slate-600" />
                      <span>Planned</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
