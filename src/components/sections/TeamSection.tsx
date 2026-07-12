import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { teamMembers } from '@/data/content';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '../ui/SectionHeader';

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-gradient-section relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-eco-950/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeader
          eyebrow="OUR TEAM"
          title="The Builders Behind EcoSphere"
          subtitle="A passionate team of developers, data engineers, and UI designers building sustainability systems for enterprise ERPs."
        />

        {/* Team Members Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeInUp}
              className="glass-card hover:border-primary/20 group p-6 rounded-3xl transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between"
            >
              <div>
                {/* Simulated Avatar /Initials Container */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-eco-500/25 flex items-center justify-center font-heading font-extrabold text-2xl text-primary group-hover:scale-105 transition-transform mb-6">
                  {member.avatar}
                </div>

                <div className="flex flex-col gap-1.5 mb-4">
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-xs font-mono font-medium text-on-surface-variant uppercase tracking-wider">
                    {member.role}
                  </span>
                </div>

                <p className="text-on-surface-variant text-xs leading-relaxed border-t border-outline-variant/30 pt-4">
                  {member.bio}
                </p>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3 mt-8 border-t border-outline-variant/30 pt-4">
                <a
                  href={member.linkedin}
                  className="w-8 h-8 rounded-lg bg-surface-container-low/50 hover:bg-primary-container/20 border border-outline-variant/30 hover:border-primary/20 flex items-center justify-center text-on-surface-variant hover:text-primary transition-all cursor-pointer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={member.github}
                  className="w-8 h-8 rounded-lg bg-surface-container-low/50 hover:bg-primary-container/20 border border-outline-variant/30 hover:border-primary/20 flex items-center justify-center text-on-surface-variant hover:text-primary transition-all cursor-pointer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="mailto:hello@ecosphere.dev"
                  className="w-8 h-8 rounded-lg bg-surface-container-low/50 hover:bg-primary-container/20 border border-outline-variant/30 hover:border-primary/20 flex items-center justify-center text-on-surface-variant hover:text-primary transition-all cursor-pointer"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
