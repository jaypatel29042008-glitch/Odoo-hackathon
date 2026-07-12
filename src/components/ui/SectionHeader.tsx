import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center' }: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`flex flex-col gap-4 mb-16 ${alignment}`}
    >
      <span className="font-mono text-sm tracking-[0.2em] uppercase text-eco-500 font-medium">
        {eyebrow}
      </span>
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight max-w-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 rounded-full bg-gradient-to-r from-eco-500 to-gov-500 mt-2" />
    </motion.div>
  );
}
