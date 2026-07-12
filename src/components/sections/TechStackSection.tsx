import { motion } from 'framer-motion';
import { Server, Code, Database, Layout, FileCode, FileSpreadsheet, Container, GitBranch } from 'lucide-react';
import { techStack } from '@/data/content';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '../ui/SectionHeader';

const iconMap: Record<string, React.ComponentType<any>> = {
  Server,
  Code,
  Database,
  Layout,
  FileCode,
  FileSpreadsheet,
  Container,
  GitBranch,
};

export default function TechStackSection() {
  // Group technologies by category
  const categories = Array.from(new Set(techStack.map((tech) => tech.category)));

  return (
    <section id="tech-stack" className="py-24 bg-gradient-section relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gov-950/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeader
          eyebrow="TECHNOLOGY STACK"
          title="Built on Proven Enterprise Tools"
          subtitle="EcoSphere bridges standard Odoo framework architectures with modern, light data visualization frontends."
        />

        {/* Tech groups */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col gap-12"
        >
          {categories.map((category) => {
            const techs = techStack.filter((tech) => tech.category === category);

            return (
              <div key={category} className="flex flex-col gap-6">
                <h3 className="font-mono text-xs font-bold text-outline uppercase tracking-widest border-b border-outline-variant/30 pb-2">
                  {category}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {techs.map((tech) => {
                    const IconComponent = iconMap[tech.icon] || Code;

                    return (
                      <motion.div
                        key={tech.name}
                        variants={fadeInUp}
                        className="glass-card hover:border-secondary/20 p-5 rounded-2xl flex items-center gap-4 transition-all duration-300 hover:scale-[1.01] group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-surface-container-low/50 border border-outline-variant/50 flex items-center justify-center text-secondary shrink-0 group-hover:scale-105 transition-transform">
                          <IconComponent className="w-5 h-5 text-secondary" />
                        </div>

                        <div className="flex flex-col gap-0.5">
                          <h4 className="font-heading font-bold text-on-surface text-sm">
                            {tech.name}
                          </h4>
                          <p className="text-on-surface-variant text-xs truncate max-w-[180px]">
                            {tech.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
