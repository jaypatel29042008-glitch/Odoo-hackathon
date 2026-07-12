import { useState } from 'react';
import { Award, Trophy, Users, BarChart3, HelpCircle, ShieldAlert, Building2, ShieldCheck, Download, TrendingUp, TrendingDown, Factory } from 'lucide-react';

export default function DepartmentRankingsView() {
  const [selectedQuarter, setSelectedQuarter] = useState('Q3 2026');

  const handleExportPDF = () => {
    alert('PDF Generation Complete: Compiling executive report for Department ESG Rankings.');
  };

  return (
    <div className="p-8 max-w-7xl mx-auto flex flex-col gap-8 overflow-y-auto h-full pb-24 custom-scrollbar">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#bccac0]/30 pb-6">
        <div>
          <span className="font-mono text-[10px] font-bold text-primary uppercase tracking-widest">Global ESG Benchmarking</span>
          <h2 className="font-heading font-extrabold text-2xl text-on-surface mt-1">Department ESG Leaderboard</h2>
          <p className="text-on-surface-variant text-xs mt-1 font-medium">Compare operational metrics, emission offsets, and CSR participation across plants.</p>
        </div>
        <div className="flex gap-2">
          <select
            value={selectedQuarter}
            onChange={(e) => setSelectedQuarter(e.target.value)}
            className="border border-[#bccac0] focus:border-primary bg-white rounded-lg p-2.5 text-xs outline-none cursor-pointer"
          >
            <option>Q3 2026</option>
            <option>Q2 2026</option>
            <option>Q1 2026</option>
          </select>
          <button
            onClick={handleExportPDF}
            className="px-4 py-2.5 bg-secondary hover:bg-secondary-container text-white font-heading font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Main Rankings Table */}
        <div className="col-span-12 lg:col-span-8 bg-white border border-[#bccac0]/40 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
          <div className="px-6 py-4 border-b border-[#bccac0]/40 flex justify-between items-center bg-slate-50">
            <h3 className="font-heading font-bold text-sm text-[#121c28]">Leaderboard Performance</h3>
            <div className="flex gap-4 text-[10px] font-mono font-bold text-slate-500">
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span>Environmental</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                <span>Social</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-tertiary" />
                <span>Governance</span>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100/50 border-b border-[#bccac0]/30 font-mono text-slate-500 uppercase">
                  <th className="p-4 font-bold">Rank</th>
                  <th className="p-4 font-bold">Department</th>
                  <th className="p-4 font-bold text-center">ESG Score</th>
                  <th className="p-4 font-bold text-center">Distribution Ratio</th>
                  <th className="p-4 font-bold text-right">Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#bccac0]/20 font-medium">
                {/* Rank 1 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4">
                    <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center font-bold text-[11px]">1</div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-primary" />
                      <span className="font-bold text-on-surface">Manufacturing (Pune Plant)</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <span className="font-mono text-sm font-bold text-primary">94.2</span>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-center">
                      <div className="w-28 h-2 rounded-full overflow-hidden flex bg-slate-100 border border-slate-200/50">
                        <div className="h-full bg-primary" style={{ width: '45%' }} />
                        <div className="h-full bg-secondary" style={{ width: '30%' }} />
                        <div className="h-full bg-tertiary" style={{ width: '25%' }} />
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <span className="text-primary font-bold inline-flex items-center gap-0.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>+2.4%</span>
                    </span>
                  </td>
                </tr>

                {/* Rank 2 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4">
                    <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 text-slate-600 flex items-center justify-center font-bold text-[11px]">2</div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-secondary" />
                      <span className="font-bold text-on-surface">R&D / Product Lab</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <span className="font-mono text-sm font-bold text-on-surface">88.7</span>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-center">
                      <div className="w-28 h-2 rounded-full overflow-hidden flex bg-slate-100 border border-slate-200/50">
                        <div className="h-full bg-primary" style={{ width: '30%' }} />
                        <div className="h-full bg-secondary" style={{ width: '50%' }} />
                        <div className="h-full bg-tertiary" style={{ width: '20%' }} />
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <span className="text-primary font-bold inline-flex items-center gap-0.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>+0.8%</span>
                    </span>
                  </td>
                </tr>

                {/* Rank 3 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4">
                    <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 text-slate-600 flex items-center justify-center font-bold text-[11px]">3</div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-slate-500" />
                      <span className="font-bold text-on-surface">Logistics & Fleet (Surat)</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <span className="font-mono text-sm font-bold text-on-surface">76.4</span>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-center">
                      <div className="w-28 h-2 rounded-full overflow-hidden flex bg-slate-100 border border-slate-200/50">
                        <div className="h-full bg-primary" style={{ width: '60%' }} />
                        <div className="h-full bg-secondary" style={{ width: '20%' }} />
                        <div className="h-full bg-tertiary" style={{ width: '20%' }} />
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <span className="text-error font-bold inline-flex items-center gap-0.5">
                      <TrendingDown className="w-3.5 h-3.5" />
                      <span>-1.2%</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Spotlights Column */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          
          {/* Spotlight Card */}
          <div className="bg-primary text-white rounded-2xl p-6 relative overflow-hidden shadow-md shadow-primary/15 flex flex-col justify-between min-h-[190px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                <Trophy className="w-4.5 h-4.5 text-white" />
              </div>
              <h4 className="font-heading font-bold text-sm">Best Improver Spotlight</h4>
            </div>
            <div className="mt-4 relative z-10">
              <span className="font-mono text-[9px] text-white/70 block uppercase tracking-wider">Spotlight Winner</span>
              <h5 className="font-heading font-bold text-base mt-0.5">Logistics Division</h5>
              <p className="text-white/80 text-xs mt-1 leading-relaxed">Achieved a 15% reduction in flight travel carbon footprint through Virtual-First campaigns.</p>
            </div>
          </div>

          {/* Social Contributions Card */}
          <div className="bg-white border border-[#bccac0]/40 rounded-2xl p-6 shadow-sm flex flex-col justify-between min-h-[190px]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                <Users className="w-4.5 h-4.5" />
              </div>
              <h4 className="font-heading font-bold text-sm text-on-surface">Top Social Contributor</h4>
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-xs text-secondary">RD</div>
                <div>
                  <h5 className="text-xs font-bold text-on-surface">R&D Team (Bengaluru)</h5>
                  <p className="text-[10px] text-slate-500 font-mono">1,240 Volunteer Hours</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-[9px] font-mono mb-1.5 text-slate-500">
                  <span>Community Impact Target</span>
                  <span className="font-bold text-secondary">82% Achieved</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                  <div className="h-full bg-secondary w-[82%]" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Department Goals & Trends */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Targets progress */}
        <div className="col-span-12 lg:col-span-8 bg-white border border-[#bccac0]/40 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div>
              <h3 className="font-heading font-bold text-base text-on-surface">Sustainability Targets</h3>
              <p className="text-slate-500 text-xs mt-0.5">Collective progress across all organizational units</p>
            </div>
            <div className="flex gap-4 bg-slate-50 border border-slate-200/50 px-4 py-2 rounded-xl text-center font-mono">
              <div className="pr-4 border-r border-slate-200">
                <span className="text-[9px] text-slate-400 block">ACTIVE</span>
                <span className="text-sm font-bold text-primary">12</span>
              </div>
              <div className="pr-4 border-r border-slate-200">
                <span className="text-[9px] text-slate-400 block">DONE</span>
                <span className="text-sm font-bold text-secondary">08</span>
              </div>
              <div>
                <span className="text-[9px] text-slate-400 block">ON TRACK</span>
                <span className="text-sm font-bold text-tertiary">92%</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Target 1 */}
            <div className="p-4 bg-slate-50 border border-slate-200/50 rounded-xl">
              <span className="px-2 py-0.5 bg-primary/10 border border-primary/20 text-primary text-[8px] font-mono font-bold rounded">ON TRACK</span>
              <h4 className="text-xs font-bold text-on-surface mt-2.5">Net Zero Operations</h4>
              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Reduce Scope 1 & 2 emissions by 30%.</p>
              <div className="mt-4">
                <div className="flex justify-between text-[9px] font-mono mb-1 text-primary">
                  <span>Progress</span>
                  <span>68%</span>
                </div>
                <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[68%]" />
                </div>
              </div>
            </div>

            {/* Target 2 */}
            <div className="p-4 bg-slate-50 border border-slate-200/50 rounded-xl">
              <span className="px-2 py-0.5 bg-secondary/10 border border-secondary/20 text-secondary text-[8px] font-mono font-bold rounded">ON TRACK</span>
              <h4 className="text-xs font-bold text-on-surface mt-2.5">Diversity & Inclusion</h4>
              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">40% female tech leadership hires.</p>
              <div className="mt-4">
                <div className="flex justify-between text-[9px] font-mono mb-1 text-secondary">
                  <span>Progress</span>
                  <span>42%</span>
                </div>
                <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[42%]" />
                </div>
              </div>
            </div>

            {/* Target 3 */}
            <div className="p-4 bg-slate-50 border border-slate-200/50 rounded-xl">
              <span className="px-2 py-0.5 bg-tertiary/10 border border-tertiary/20 text-tertiary text-[8px] font-mono font-bold rounded">REVIEWING</span>
              <h4 className="text-xs font-bold text-on-surface mt-2.5">Ethics Training</h4>
              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">100% completion of anti-corruption modules.</p>
              <div className="mt-4">
                <div className="flex justify-between text-[9px] font-mono mb-1 text-tertiary">
                  <span>Progress</span>
                  <span>89%</span>
                </div>
                <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary w-[89%]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Monthly trends bar chart */}
        <div className="col-span-12 lg:col-span-4 bg-white border border-[#bccac0]/40 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-heading font-bold text-sm text-on-surface">Monthly ESG Trend</h4>
            <span className="text-[10px] font-mono text-slate-400 font-semibold uppercase">Overall</span>
          </div>
          <div className="h-36 flex items-end justify-between gap-3 px-2 border-b border-slate-100 pb-3">
            {/* Jan */}
            <div className="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer">
              <div className="w-full bg-slate-100 hover:bg-primary/45 rounded-t-sm h-12 transition-colors" title="Jan: 40%" />
              <span className="text-[9px] font-mono text-slate-400">Jan</span>
            </div>
            {/* Feb */}
            <div className="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer">
              <div className="w-full bg-slate-100 hover:bg-primary/45 rounded-t-sm h-16 transition-colors" title="Feb: 55%" />
              <span className="text-[9px] font-mono text-slate-400">Feb</span>
            </div>
            {/* Mar */}
            <div className="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer">
              <div className="w-full bg-slate-100 hover:bg-primary/45 rounded-t-sm h-14 transition-colors" title="Mar: 48%" />
              <span className="text-[9px] font-mono text-slate-400">Mar</span>
            </div>
            {/* Apr */}
            <div className="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer">
              <div className="w-full bg-primary rounded-t-sm h-[88px] shadow-sm shadow-primary/20" title="Apr: 75% (Target met)" />
              <span className="text-[9px] font-mono text-primary font-bold">Apr</span>
            </div>
            {/* May */}
            <div className="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer">
              <div className="w-full bg-slate-100 hover:bg-primary/45 rounded-t-sm h-20 transition-colors" title="May: 62%" />
              <span className="text-[9px] font-mono text-slate-400">May</span>
            </div>
            {/* Jun */}
            <div className="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer">
              <div className="w-full bg-slate-100 hover:bg-primary/45 rounded-t-sm h-[96px] transition-colors" title="Jun: 80%" />
              <span className="text-[9px] font-mono text-slate-400">Jun</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

