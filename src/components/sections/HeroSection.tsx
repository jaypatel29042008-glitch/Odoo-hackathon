import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play } from 'lucide-react';
import { siteConfig, stats } from '@/data/content';
import { staggerContainer, fadeInUp, fadeInRight } from '@/lib/animations';

/* ---------- floating orb config ---------- */
const floatingOrbs = [
  {
    size: 'w-72 h-72',
    color: 'bg-primary/20',
    blur: 'blur-3xl',
    position: 'top-20 -left-20',
    duration: 7,
    delay: 0,
  },
  {
    size: 'w-96 h-96',
    color: 'bg-gov-600/15',
    blur: 'blur-3xl',
    position: 'top-1/3 right-0',
    duration: 9,
    delay: 1.5,
  },
  {
    size: 'w-64 h-64',
    color: 'bg-primary-container/20',
    blur: 'blur-2xl',
    position: 'bottom-20 left-1/3',
    duration: 8,
    delay: 3,
  },
  {
    size: 'w-48 h-48',
    color: 'bg-secondary-container/20',
    blur: 'blur-2xl',
    position: 'bottom-10 right-1/4',
    duration: 10,
    delay: 2,
  },
];

const HeroSection = ({ onLaunchDemo }: { onLaunchDemo?: () => void }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-hero overflow-hidden flex items-center"
    >
      {/* ---------- animated background orbs ---------- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {floatingOrbs.map((orb, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${orb.size} ${orb.color} ${orb.blur} ${orb.position}`}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: orb.delay,
            }}
          />
        ))}
      </div>

      {/* ---------- subtle grid overlay ---------- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ---------- main content ---------- */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ====== LEFT — text column ====== */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
          >
            {/* badge chip */}
            <motion.div variants={fadeInUp} className="inline-flex">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-eco-300 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                Built on Odoo 17 • Hackathon 2025
              </span>
            </motion.div>

            {/* heading */}
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-5xl md:text-7xl font-bold leading-[1.08] tracking-tight text-white"
            >
              Transform Your
              <br />
              <span className="text-gradient-eco font-extrabold">ESG Operations</span>
            </motion.h1>

            {/* sub-heading */}
            <motion.p
              variants={fadeInUp}
              className="max-w-xl text-lg leading-relaxed text-on-surface-variant"
            >
              {siteConfig.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => onLaunchDemo && onLaunchDemo()}
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-eco-600/30 transition-all duration-300 hover:bg-primary-container hover:shadow-eco-500/40 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                Launch Demo Portal
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="#showcase"
                className="group inline-flex items-center gap-2 rounded-xl border border-primary px-7 py-3.5 text-base font-semibold text-primary transition-all duration-300 hover:bg-primary/10 hover:text-eco-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <Play className="h-4 w-4" />
                Watch Showcase
              </a>
            </motion.div>

            {/* stats row */}
            <motion.div
              variants={fadeInUp}
              className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-heading text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-sm text-outline">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ====== RIGHT — dashboard mockup ====== */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center lg:justify-end"
          >
            {/* glow behind the card */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-3xl bg-primary/20 blur-3xl"
            />

            <div className="animate-float relative rounded-xl overflow-hidden glow-eco ring-1 ring-white/10">
              <img
                src="/screens/organization-dashboard.png"
                alt="EcoSphere Organization ESG Dashboard showing weighted environmental, social, and governance scores with department rankings"
                width={720}
                height={450}
                className="relative block w-full max-w-[640px] rounded-xl"
                loading="eager"
              />

              {/* top-left live badge overlay */}
              <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-dark-bg/70 px-3 py-1.5 text-xs font-medium text-primary backdrop-blur-md ring-1 ring-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-eco-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-eco-400" />
                </span>
                Live Dashboard
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ---------- bottom gradient fade ---------- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent"
      />
    </section>
  );
};

export default HeroSection;
