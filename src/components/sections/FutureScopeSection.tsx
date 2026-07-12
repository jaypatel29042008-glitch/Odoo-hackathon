import { motion } from 'framer-motion';
import { 
  Brain, Link, Radio, Globe, FileUp, Smartphone 
} from 'lucide-react';
import { futureScope } from '@/data/content';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '../ui/SectionHeader';

const iconMap: Record<string, React.ComponentType<any>> = {
  Brain,
  Link,
  Radio,
  Globe,
  FileUp,
  Smartphone,
};

export default function FutureScopeSection() {
  return (
    <section id="future" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-eco-950/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeader
          eyebrow="FUTURE SCOPE"
          title="Scaling to Global Standards"
          subtitle="EcoSphere has a strong roadmap ahead, incorporating machine learning prediction models, blockchain logging, and real-time IoT feeds."
        />

        {/* Future Scope Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {futureScope.map((scope) => {
            const IconComponent = iconMap[scope.icon] || Brain;

            return (
              <motion.div
                key={scope.title}
                variants={fadeInUp}
                className="glass-card hover:border-secondary/20 p-8 rounded-3xl transition-all duration-300 hover:scale-[1.01] flex flex-col gap-6 group"
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-secondary-container/20 border border-secondary/20 flex items-center justify-center text-secondary group-hover:scale-105 transition-transform">
                  <IconComponent className="w-6 h-6 text-secondary" />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-secondary transition-colors">
                    {scope.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {scope.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
