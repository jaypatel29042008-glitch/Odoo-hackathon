import { motion } from 'framer-motion';
import { stats, impactMetrics } from '@/data/content';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { useCountUp } from '@/hooks/useAnimations';
import SectionHeader from '../ui/SectionHeader';

interface MetricCardProps {
  value: string;
  label: string;
  description: string;
}

function MetricCard({ value, label, description }: MetricCardProps) {
  // Extract number from string if possible to animate it
  const numMatch = value.match(/\d+/);
  const numberVal = numMatch ? parseInt(numMatch[0]) : null;
  const unit = value.replace(/\d+/g, '');

  const { count, ref } = useCountUp(numberVal || 0);

  return (
    <div ref={ref} className="glass-card hover:border-primary/20 p-8 rounded-3xl transition-all duration-300 hover:scale-[1.01] flex flex-col justify-between min-h-[180px]">
      <div>
        <h3 className="font-heading font-extrabold text-4xl sm:text-5xl text-gradient-eco mb-3">
          {numberVal ? (
            <span>
              {unit.includes('₹') || unit.includes('x') ? unit.startsWith('₹') ? `₹${count}` : `${count}${unit}` : `${count}${unit}`}
            </span>
          ) : (
            value
          )}
        </h3>
        <h4 className="font-heading font-bold text-on-surface text-base mb-1">
          {label}
        </h4>
      </div>
      <p className="text-on-surface-variant text-xs leading-relaxed mt-2 border-t border-outline-variant/30 pt-3">
        {description}
      </p>
    </div>
  );
}

export default function ImpactSection() {
  return (
    <section id="impact" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-eco-950/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeader
          eyebrow="IMPACT & METRICS"
          title="Measurable Results That Matter"
          subtitle="EcoSphere streamlines compliance tracking, cuts reporting administrative loads, and turns CSR engagement into corporate sustainability milestones."
        />

        {/* Metrics Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {impactMetrics.map((metric) => (
            <motion.div key={metric.label} variants={fadeInUp}>
              <MetricCard
                value={metric.value}
                label={metric.label}
                description={metric.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
