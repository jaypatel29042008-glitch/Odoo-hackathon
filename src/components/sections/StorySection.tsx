import { motion } from 'framer-motion';
import { Quote, AlertTriangle, FileSpreadsheet, Building2 } from 'lucide-react';
import { realWorldStory } from '@/data/content';
import { fadeInLeft, fadeInRight } from '@/lib/animations';
import SectionHeader from '../ui/SectionHeader';

export default function StorySection() {
  const paragraphs = realWorldStory.content.split('\n\n');

  return (
    <section id="story" className="py-24 bg-gradient-section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-eco-950/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeader
          eyebrow="REAL-WORLD IMPACT"
          title="The Story Behind EcoSphere"
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: The Narrative */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="text-primary shrink-0">
              <Quote className="w-12 h-12 rotate-180 opacity-20" />
            </div>

            <div className="flex flex-col gap-5 text-on-surface-variant text-base leading-relaxed">
              {paragraphs.map((p, idx) => (
                <p key={idx}>
                  {p.includes('March 2025') ? (
                    <span>
                      In <span className="text-white font-semibold">March 2025</span>, a mid-sized manufacturing company in <span className="text-white font-semibold">Pune</span> was preparing its annual <span className="text-primary font-semibold">BRSR filing</span> for SEBI. The sustainability team spent 6 weeks manually pulling carbon emission data from procurement spreadsheets, chasing HR for CSR participation records, and reconciling compliance audit logs from three different systems.
                    </span>
                  ) : p.includes('18%') ? (
                    <span>
                      Despite the effort, they discovered calculation errors that inflated their Scope 2 emissions by <span className="text-error font-semibold">18%</span>. The CFO called it <span className="italic text-white">"an embarrassment in front of the board."</span>
                    </span>
                  ) : p.includes('Pune to Surat') || p.includes('Surat to Bengaluru') || p.includes('India') ? (
                    <span>
                      This is not an isolated case. Across India — from textile mills in <span className="text-white font-semibold">Surat</span> to IT parks in <span className="text-white font-semibold">Bengaluru</span> — organizations struggle with the same fundamental problem: ESG data is scattered, manual, and unreliable.
                    </span>
                  ) : p.includes('ledger') ? (
                    <span>
                      EcoSphere was born from this frustration. We asked: What if ESG tracking was as automatic and reliable as your <span className="text-primary font-semibold">accounting ledger</span>? What if every purchase order, every fleet trip, every employee volunteer hour was automatically captured, scored, and reported?
                    </span>
                  ) : (
                    p
                  )}
                </p>
              ))}
            </div>

            <div className="border-l-2 border-eco-500 pl-6 mt-4 py-1">
              <p className="text-on-surface font-heading font-semibold text-lg">
                "ESG tracking shouldn't be a yearly crisis. It must be a daily operation."
              </p>
            </div>
          </motion.div>

          {/* Right Column: Decorative Pain Points Flow */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="glass-card border-outline-variant/30 p-8 rounded-3xl relative">
              <h4 className="font-heading font-bold text-on-surface text-lg mb-6 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-error" />
                The Spread of Data Inaccuracy
              </h4>

              <div className="flex flex-col gap-8 relative">
                {/* Connector Line */}
                <div className="absolute left-6 top-3 bottom-3 w-[2px] bg-gradient-to-b from-red-500/30 via-amber-500/30 to-eco-500/30" />

                {/* Step 1 */}
                <div className="flex gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-lowest border border-outline-variant/50 flex items-center justify-center text-error shrink-0">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">Manual Spreadsheets</h5>
                    <p className="text-xs text-on-surface-variant mt-1">Data scattered across procurement logs, fleet sheets, and expense records with no unified audit trails.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-lowest border border-outline-variant/50 flex items-center justify-center text-tertiary shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">Department Bottlenecks</h5>
                    <p className="text-xs text-on-surface-variant mt-1">HR chasing employees for volunteer activity proof files, creating approval delays of up to 45 days.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-eco-950 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-on-surface text-primary">The EcoSphere Bridge</h5>
                    <p className="text-xs text-on-surface-variant mt-1">Natively linking transactions inside Odoo ERP to auto-calculate carbon and compile audit-ready files.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
