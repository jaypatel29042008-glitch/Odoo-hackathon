import { useState } from 'react';
import { Globe, TrendingUp, Download, Eye, Award, Sparkles, AlertTriangle, ShieldCheck, HelpCircle } from 'lucide-react';

export default function GlobalInsightsView() {
  const [selectedRange, setSelectedRange] = useState('Q3 2026 - FYTD');

  const handleExportBoardReport = () => {
    alert('Export Board Report Complete: Generated detailed S&P ESG benchmarking ledger. Download starting.');
  };

  return (
    <div className="p-8 max-w-7xl mx-auto flex flex-col gap-8 overflow-y-auto h-full pb-24 custom-scrollbar">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#bccac0]/30 pb-6">
        <div>
          <h2 className="font-heading font-extrabold text-2xl text-on-surface">Global ESG Insights</h2>
          <p className="text-on-surface-variant text-xs mt-1 font-medium">Strategic oversight of carbon neutrality progress, social indices, and governance compliance across corporate territories.</p>
        </div>
        <div className="flex gap-2">
          <select
            value={selectedRange}
            onChange={(e) => setSelectedRange(e.target.value)}
            className="border border-[#bccac0] focus:border-primary bg-white rounded-lg p-2.5 text-xs outline-none cursor-pointer"
          >
            <option>Q3 2026 - FYTD</option>
            <option>Q2 2026 - FYTD</option>
            <option>Q1 2026 - FYTD</option>
          </select>
          <button
            onClick={handleExportBoardReport}
            className="px-4 py-2.5 bg-primary hover:bg-primary-container text-white font-heading font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Board Report</span>
          </button>
        </div>
      </div>

      {/* KPI Tiles Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* KPI 1 */}
        <div className="bg-white border border-[#bccac0]/40 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-xl border border-primary/20 flex items-center justify-center text-primary">
              <Globe className="w-5 h-5" />
            </div>
            <span className="font-mono text-[10px] font-bold text-primary uppercase tracking-widest">+4.2% YoY</span>
          </div>
          <div>
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block">Carbon Neutrality</span>
            <h3 className="font-heading font-extrabold text-3xl text-on-surface mt-1">68.4%</h3>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50 mt-3">
              <div className="h-full bg-primary w-[68.4%]" />
            </div>
            <p className="text-[9px] font-mono text-slate-400 mt-1.5">TARGET: 100% BY 2030</p>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="bg-white border border-[#bccac0]/40 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-secondary/10 rounded-xl border border-secondary/20 flex items-center justify-center text-secondary">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-mono text-[10px] font-bold text-secondary uppercase tracking-widest">IN-RANGE</span>
          </div>
          <div>
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block">Diversity Index</span>
            <h3 className="font-heading font-extrabold text-3xl text-on-surface mt-1">0.82</h3>
            <div className="flex gap-1 h-2 mt-3">
              <div className="flex-1 bg-secondary rounded-full" />
              <div className="flex-1 bg-secondary rounded-full" />
              <div className="flex-1 bg-secondary rounded-full" />
              <div className="flex-1 bg-slate-100 rounded-full border border-slate-200/50" />
            </div>
            <p className="text-[9px] font-mono text-slate-400 mt-1.5">EQUITY BENCHMARK: 0.85+</p>
          </div>
        </div>

        {/* KPI 3 */}
        <div className="bg-white border border-[#bccac0]/40 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-tertiary/10 rounded-xl border border-tertiary/20 flex items-center justify-center text-tertiary">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="font-mono text-[10px] font-bold text-tertiary uppercase tracking-widest">CRITICAL PATH</span>
          </div>
          <div>
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block">Audit Readiness</span>
            <h3 className="font-heading font-extrabold text-3xl text-on-surface mt-1">92%</h3>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50 mt-3">
              <div className="h-full bg-tertiary w-[92%]" />
            </div>
            <p className="text-[9px] font-mono text-slate-400 mt-1.5">ISO 14001 VALIDATED</p>
          </div>
        </div>
      </div>

      {/* Map & Strategic Insights Row */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Operational Map mock card */}
        <div className="col-span-12 lg:col-span-8 bg-white border border-[#bccac0]/40 rounded-2xl p-6 shadow-sm flex flex-col min-h-[420px] relative overflow-hidden">
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <h4 className="font-heading font-bold text-sm text-on-surface">Operational Impact Map</h4>
              <p className="text-[10px] text-slate-500 font-mono mt-0.5">Locations of carbon offsetting projects and emission audit sites.</p>
            </div>
            <div className="flex gap-4 text-[10px] font-mono font-bold text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span>CSR Projects</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-error" />
                <span>Audit Hotspots</span>
              </div>
            </div>
          </div>

          {/* Simple Vector Map placeholder graphic */}
          <div className="flex-grow bg-[#edf2f9] border border-slate-200/60 rounded-xl relative overflow-hidden flex items-center justify-center min-h-[280px]">
            {/* Pulsing indicator dots */}
            <div className="absolute top-[35%] left-[28%] flex flex-col items-center">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-error" />
              </span>
              <span className="text-[8px] font-mono font-bold text-slate-600 bg-white/80 border border-slate-200 px-1 py-0.5 rounded mt-1 shadow-sm">Pune Plant</span>
            </div>

            <div className="absolute top-[48%] left-[55%] flex flex-col items-center">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
              </span>
              <span className="text-[8px] font-mono font-bold text-slate-600 bg-white/80 border border-slate-200 px-1 py-0.5 rounded mt-1 shadow-sm">Surat CSR</span>
            </div>

            <div className="absolute top-[25%] left-[62%] flex flex-col items-center">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
              </span>
              <span className="text-[8px] font-mono font-bold text-slate-600 bg-white/80 border border-slate-200 px-1 py-0.5 rounded mt-1 shadow-sm">Bengaluru HQ</span>
            </div>

            <span className="text-xs text-slate-400 font-mono tracking-wider">ECOSPHERE NATIONAL GRID MATRIX</span>
          </div>
        </div>

        {/* AI Strategic Insights Panel */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white border border-[#bccac0]/40 rounded-2xl p-6 shadow-sm flex-grow">
            <h4 className="font-heading font-bold text-sm text-on-surface flex items-center gap-2 mb-4">
              <Sparkles className="w-4.5 h-4.5 text-primary animate-pulse" />
              AI Strategic Insights
            </h4>

            <div className="flex flex-col gap-4">
              {/* Insight 1 */}
              <div className="p-3.5 bg-slate-50 border-l-4 border-primary rounded-r-lg">
                <div className="flex justify-between items-center text-[9px] font-mono font-bold">
                  <span className="text-primary">OPPORTUNITY</span>
                  <span className="text-slate-400">HIGH CONFIDENCE</span>
                </div>
                <p className="text-xs text-[#3d4a42] leading-relaxed mt-1">Decentralizing waste management in Southeast Asia regional hubs could improve social equity score by <span className="font-bold text-on-surface">+12%</span>.</p>
              </div>

              {/* Insight 2 */}
              <div className="p-3.5 bg-slate-50 border-l-4 border-tertiary rounded-r-lg">
                <div className="flex justify-between items-center text-[9px] font-mono font-bold">
                  <span className="text-tertiary">RISK ALERT</span>
                  <span className="text-slate-400">MEDIUM RISK</span>
                </div>
                <p className="text-xs text-[#3d4a42] leading-relaxed mt-1">Scope 3 emissions from logistics partners in EMEA are projected to exceed Q4 budget by <span className="font-bold text-on-surface">5.4%</span>.</p>
              </div>
            </div>
          </div>

          {/* Gamification Level Status Card */}
          <div className="bg-[#121c28] text-white p-6 rounded-2xl flex items-center justify-between shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-primary/45 flex items-center justify-center text-primary">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[9px] font-mono text-slate-400 block uppercase tracking-wider">Global ESG XP</span>
                <h5 className="font-heading font-bold text-sm">Elite Steward Level 4</h5>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono font-bold text-primary">14,250 / 15,000 XP</span>
              <div className="w-24 h-1.5 bg-white/20 rounded-full overflow-hidden mt-1">
                <div className="h-full bg-primary w-[95%]" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Peer Industry Benchmarking */}
      <div className="bg-white border border-[#bccac0]/40 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h4 className="font-heading font-bold text-base text-on-surface">Industry Benchmarking</h4>
            <p className="text-xs text-slate-500 mt-0.5">Performance comparison against S&P 500 Energy Sector leaders.</p>
          </div>
          <div className="flex gap-4 text-[10px] font-mono font-bold text-slate-500">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-primary" />
              <span>EcoSphere</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-slate-200" />
              <span>Industry Avg.</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          {/* Chart 1 */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-on-surface">Carbon Intensity</span>
            <div className="h-28 flex items-end gap-3 border-b border-slate-100 pb-3">
              <div className="flex-1 bg-primary h-[85%] rounded-t" title="EcoSphere: 14.2" />
              <div className="flex-1 bg-slate-200 h-[60%] rounded-t" title="Industry: 10.1" />
            </div>
            <span className="text-[10px] text-slate-500 font-mono text-center font-bold">+24% better than peers</span>
          </div>

          {/* Chart 2 */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-on-surface">Water Stewardship</span>
            <div className="h-28 flex items-end gap-3 border-b border-slate-100 pb-3">
              <div className="flex-1 bg-primary h-[70%] rounded-t" />
              <div className="flex-1 bg-slate-200 h-[75%] rounded-t" />
            </div>
            <span className="text-[10px] text-error font-mono text-center font-bold">-5% vs. Industry leaders</span>
          </div>

          {/* Chart 3 */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-on-surface">Board Independence</span>
            <div className="h-28 flex items-end gap-3 border-b border-slate-100 pb-3">
              <div className="flex-1 bg-primary h-[95%] rounded-t" />
              <div className="flex-1 bg-slate-200 h-[40%] rounded-t" />
            </div>
            <span className="text-[10px] text-primary font-mono text-center font-bold">Tier 1 Leadership</span>
          </div>

          {/* Chart 4 */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-on-surface">CSR Engagement</span>
            <div className="h-28 flex items-end gap-3 border-b border-slate-100 pb-3">
              <div className="flex-1 bg-primary h-[65%] rounded-t" />
              <div className="flex-1 bg-slate-200 h-[45%] rounded-t" />
            </div>
            <span className="text-[10px] text-slate-500 font-mono text-center font-bold">+20% Engagement Delta</span>
          </div>
        </div>
      </div>

    </div>
  );
}
