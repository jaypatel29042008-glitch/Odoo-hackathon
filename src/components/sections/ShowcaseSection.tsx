import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Play, Eye } from 'lucide-react';
import { showcaseScreens } from '@/data/content';
import { fadeInUp } from '@/lib/animations';
import SectionHeader from '../ui/SectionHeader';

export default function ShowcaseSection() {
  const [activeTab, setActiveTab] = useState(showcaseScreens[0].id);
  const [viewMode, setViewMode] = useState<'image' | 'html'>('image'); // Toggle between image & live HTML
  
  const activeScreen = showcaseScreens.find((screen) => screen.id === activeTab) || showcaseScreens[0];

  // Derive the HTML path from image path
  const htmlPath = activeScreen.image.replace('.png', '.html');

  return (
    <section id="showcase" className="py-24 bg-gradient-section relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-eco-950/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeader
          eyebrow="PLATFORM SHOWCASE"
          title="See EcoSphere in Action"
          subtitle="Explore the Odoo dashboard screens. Switch tabs to see high-fidelity previews, or toggle 'Interactive Prototype' to browse the live HTML interface."
        />

        {/* Tab strip - horizontal scrollable */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2 border-b border-slate-200/50 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
          {showcaseScreens.map((screen) => {
            const isActive = activeTab === screen.id;
            return (
              <button
                key={screen.id}
                onClick={() => setActiveTab(screen.id)}
                className={`px-5 py-3 rounded-xl text-sm font-heading font-medium transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-primary text-white shadow-md shadow-primary/15'
                    : 'bg-white/70 text-on-surface-variant hover:text-on-surface hover:bg-white border border-slate-200/50'
                }`}
              >
                {screen.title}
              </button>
            );
          })}
        </div>

        {/* View Mode Toggle Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 max-w-5xl mx-auto">
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200/50">
            <button
              onClick={() => setViewMode('image')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-heading font-semibold transition-all cursor-pointer ${
                viewMode === 'image'
                  ? 'bg-white text-on-surface shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Design Mockup</span>
            </button>
            <button
              onClick={() => setViewMode('html')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-heading font-semibold transition-all cursor-pointer ${
                viewMode === 'html'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <Play className="w-3.5 h-3.5" />
              <span>Interactive Prototype</span>
            </button>
          </div>

          {/* Full Screen Link */}
          <a
            href={htmlPath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono font-bold text-primary hover:text-primary-container transition-colors bg-white/70 border border-slate-200/50 px-4 py-2 rounded-xl"
          >
            <span>Open Screen in Full Window</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Interactive mockups showcase browser frame */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="max-w-5xl mx-auto flex flex-col gap-6"
        >
          {/* Simulated Browser Frame */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xl shadow-slate-200/80">
            {/* Browser Header Bar */}
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="flex-grow max-w-md mx-6">
                <div className="bg-white border border-slate-200/60 rounded-lg py-1 px-4 text-center text-xs font-mono text-on-surface-variant truncate">
                  odoo.ecosphere.internal/web#screen={activeScreen.id}&view={viewMode}
                </div>
              </div>
              <div className="w-16" /> {/* Spacer */}
            </div>

            {/* Browser Body / Viewer */}
            <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden flex items-center justify-center">
              <AnimatePresence mode="wait">
                {viewMode === 'image' ? (
                  <motion.img
                    key={`img-${activeScreen.id}`}
                    src={activeScreen.image}
                    alt={activeScreen.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full object-cover object-top select-none pointer-events-none"
                  />
                ) : (
                  <motion.iframe
                    key={`html-${activeScreen.id}`}
                    src={htmlPath}
                    title={activeScreen.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full border-none bg-white"
                  />
                )}
              </AnimatePresence>

              {/* View Mode Overlay Watermark */}
              {viewMode === 'image' && (
                <div className="absolute bottom-4 right-4 bg-slate-950/70 border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-mono text-white pointer-events-none">
                  Static Design Template
                </div>
              )}
              {viewMode === 'html' && (
                <div className="absolute bottom-4 right-4 bg-primary/95 border border-primary/20 px-3 py-1.5 rounded-lg text-[10px] font-mono text-white pointer-events-none shadow-md">
                  Live OWL Component Prototype
                </div>
              )}
            </div>
          </div>

          {/* Screenshot Details Info Card */}
          <div className="glass-card p-8 rounded-2xl flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest">
              Live Module Screen Preview
            </span>
            <h3 className="font-heading font-extrabold text-2xl text-on-surface">
              {activeScreen.title}
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              {activeScreen.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
