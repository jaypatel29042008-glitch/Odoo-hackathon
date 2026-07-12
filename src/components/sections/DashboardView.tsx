import { Leaf, Trophy, Target, Sparkles, Building2, Flame, Award, ArrowUpRight, TrendingUp, Shield, Factory, HandHeart, ShieldCheck } from 'lucide-react';
import { stats } from '@/data/content';

interface DashboardViewProps {
  user: any;
  onNavigate: (tabId: string, file: string, menuId: string) => void;
  onOpenAddModal: () => void;
  transactions: any[];
}

export default function DashboardView({ user, onNavigate, onOpenAddModal, transactions }: DashboardViewProps) {
  // Use user company for custom Indian context
  const companyName = user.company;

  // Render recent 3 transactions for live feed
  const recentLogs = [
    { type: 'Environmental', icon: 'eco', title: 'New Carbon Transaction', category: 'Line-4 Operations', value: '-124kg' },
    { type: 'Social', icon: 'groups', title: 'CSR Activity Logged', category: 'Urban Re-greening Pune', value: '+15 XP' },
    { type: 'Governance', icon: 'gavel', title: 'Policy Acknowledged', category: 'Ethical Sourcing Update', value: 'Verified' },
    ...transactions.slice(0, 3).map(t => ({
      type: 'Environmental',
      icon: 'eco',
      title: 'Auto Carbon Logged',
      category: t.category,
      value: `-${(parseFloat(t.amount) * parseFloat(t.factor)).toFixed(0)}kg`
    }))
  ].slice(0, 3);

  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto flex flex-col gap-8 overflow-y-auto h-full pb-24 custom-scrollbar">
      
      {/* Welcome Banner */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#bccac0]/30 pb-6">
        <div>
          <h2 className="font-heading font-extrabold text-2xl text-on-surface flex items-center gap-2">
            Namaste, {user.name}! 
            <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
          </h2>
          <p className="text-on-surface-variant text-xs mt-1 font-medium">
            Managing ESG compliance at <span className="font-semibold text-primary">{companyName}</span>.
          </p>
        </div>
        <div className="flex gap-2">
          <div className="px-4 py-2 bg-[#eef4ff] rounded-xl border border-[#bccac0]/40 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-secondary" />
            <span className="font-mono text-xs font-semibold text-on-surface">FY 2026 - Q3</span>
          </div>
          <button
            onClick={() => onNavigate('supplier-analysis', '/screens/supplier-analysis.html', 'supplier')}
            className="px-4 py-2 border border-[#bccac0]/60 text-[#3d4a42] font-heading font-bold text-xs rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-2 cursor-pointer"
          >
            Supplier Analysis
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ESG Score Bento Grid */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Overall ESG Score */}
        <div className="col-span-12 lg:col-span-4 bg-white border border-[#bccac0]/40 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group shadow-sm">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
          <div>
            <p className="font-mono text-[10px] font-bold text-[#3d4a42]/70 uppercase tracking-widest mb-1">Overall ESG Score</p>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="font-heading font-extrabold text-5xl text-primary">82.4</span>
              <span className="font-heading font-semibold text-slate-400 text-lg">/ 100</span>
            </div>
          </div>
          
          <div className="mt-8">
            <div className="flex justify-between text-xs mb-2">
              <span className="text-[#3d4a42] font-medium">SEBI Target Achievement</span>
              <span className="font-bold text-primary flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +4.2% vs prev. quarter
              </span>
            </div>
            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
              <div className="h-full bg-esg-gradient w-[82.4%] rounded-full" />
            </div>
          </div>
        </div>

        {/* 3 Pillars Breakdown */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Environmental */}
          <div className="bg-white border border-[#bccac0]/40 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="font-mono text-[10px] font-bold text-[#3d4a42]/70 uppercase">40% WEIGHT</span>
            </div>
            <div>
              <p className="font-mono text-[10px] font-bold text-[#3d4a42]/70 uppercase">Environmental</p>
              <h3 className="font-heading font-bold text-2xl text-[#121c28] mt-1">
                76.5 <span className="text-xs font-normal text-[#3d4a42]/75">B+</span>
              </h3>
            </div>
            <div className="mt-4 flex gap-1">
              <div className="h-1.5 flex-1 bg-primary rounded-full" />
              <div className="h-1.5 flex-1 bg-primary rounded-full" />
              <div className="h-1.5 flex-1 bg-primary rounded-full" />
              <div className="h-1.5 flex-1 bg-slate-100 rounded-full" />
            </div>
          </div>

          {/* Social */}
          <div className="bg-white border border-[#bccac0]/40 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20 text-secondary">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="font-mono text-[10px] font-bold text-[#3d4a42]/70 uppercase">30% WEIGHT</span>
            </div>
            <div>
              <p className="font-mono text-[10px] font-bold text-[#3d4a42]/70 uppercase">Social</p>
              <h3 className="font-heading font-bold text-2xl text-[#121c28] mt-1">
                89.2 <span className="text-xs font-normal text-[#3d4a42]/75">A</span>
              </h3>
            </div>
            <div className="mt-4 flex gap-1">
              <div className="h-1.5 flex-1 bg-secondary rounded-full" />
              <div className="h-1.5 flex-1 bg-secondary rounded-full" />
              <div className="h-1.5 flex-1 bg-secondary rounded-full" />
              <div className="h-1.5 flex-1 bg-secondary rounded-full" />
            </div>
          </div>

          {/* Governance */}
          <div className="bg-white border border-[#bccac0]/40 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-xl bg-tertiary/10 flex items-center justify-center border border-tertiary/20 text-tertiary">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-mono text-[10px] font-bold text-[#3d4a42]/70 uppercase">30% WEIGHT</span>
            </div>
            <div>
              <p className="font-mono text-[10px] font-bold text-[#3d4a42]/70 uppercase">Governance</p>
              <h3 className="font-heading font-bold text-2xl text-[#121c28] mt-1">
                84.0 <span className="text-xs font-normal text-[#3d4a42]/75">A-</span>
              </h3>
            </div>
            <div className="mt-4 flex gap-1">
              <div className="h-1.5 flex-1 bg-tertiary rounded-full" />
              <div className="h-1.5 flex-1 bg-tertiary rounded-full" />
              <div className="h-1.5 flex-1 bg-tertiary rounded-full" />
              <div className="h-1.5 flex-1 bg-slate-100 rounded-full" />
            </div>
          </div>
        </div>

      </div>

      {/* Department Rankings & Logs */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Department Table */}
        <div className="col-span-12 lg:col-span-8 bg-white border border-[#bccac0]/40 rounded-2xl overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-[#bccac0]/40 flex justify-between items-center bg-slate-50">
            <h3 className="font-heading font-bold text-sm text-on-surface">Department ESG Rankings</h3>
            <button
              onClick={() => onNavigate('department-rankings', '/screens/department-rankings.html', 'governance')}
              className="text-primary font-heading font-bold text-xs uppercase hover:underline cursor-pointer"
            >
              View Rankings
            </button>
          </div>
          <div className="p-6 overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#bccac0]/30 font-mono text-slate-500 uppercase pb-4">
                  <th className="pb-3 font-bold">Department</th>
                  <th className="pb-3 font-bold text-center">Carbon Score</th>
                  <th className="pb-3 font-bold text-center">CSR Participation</th>
                  <th className="pb-3 font-bold text-right">Total Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#bccac0]/20 font-medium">
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
                    <span>Manufacturing (Pune Plant)</span>
                  </td>
                  <td className="py-4 text-center text-primary font-bold">72.4</td>
                  <td className="py-4">
                    <div className="flex justify-center items-center gap-2">
                      <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                        <div className="h-full bg-secondary w-[45%]" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">45%</span>
                    </div>
                  </td>
                  <td className="py-4 text-right font-bold text-on-surface">74.8</td>
                </tr>

                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0" />
                    <span>Logistics & Fleet</span>
                  </td>
                  <td className="py-4 text-center text-primary font-bold">68.1</td>
                  <td className="py-4">
                    <div className="flex justify-center items-center gap-2">
                      <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                        <div className="h-full bg-secondary w-[88%]" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">88%</span>
                    </div>
                  </td>
                  <td className="py-4 text-right font-bold text-on-surface">79.2</td>
                </tr>

                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-tertiary shrink-0" />
                    <span>R&D / Product Lab</span>
                  </td>
                  <td className="py-4 text-center text-primary font-bold">92.5</td>
                  <td className="py-4">
                    <div className="flex justify-center items-center gap-2">
                      <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                        <div className="h-full bg-secondary w-[62%]" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">62%</span>
                    </div>
                  </td>
                  <td className="py-4 text-right font-bold text-on-surface">88.4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Live Transaction Feed & Goals */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white border border-[#bccac0]/40 rounded-2xl p-6 shadow-sm">
            <p className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-4">Live Transaction Feed</p>
            <div className="flex flex-col gap-4">
              {recentLogs.map((log, idx) => (
                <div key={idx} className="flex items-center gap-4 hover:bg-slate-50 p-2 rounded-xl transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200/50 flex items-center justify-center shrink-0 text-primary">
                    {log.icon === 'eco' ? <Factory className="w-4.5 h-4.5" /> : 
                     log.icon === 'groups' ? <HandHeart className="w-4.5 h-4.5" /> : 
                     <ShieldCheck className="w-4.5 h-4.5" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-on-surface truncate">{log.title}</p>
                    <p className="text-[10px] text-slate-500 truncate">{log.category}</p>
                  </div>
                  <span className={`text-[11px] font-mono font-bold ${
                    log.value.startsWith('-') ? 'text-error' : 'text-primary'
                  }`}>
                    {log.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary text-white rounded-2xl p-6 relative overflow-hidden shadow-md shadow-primary/10">
            <h3 className="font-heading font-bold text-lg mb-2">Corporate Sustainability Goal</h3>
            <p className="text-xs text-white/90 leading-relaxed mb-6">
              Reach 100% Employee participation in Pune carbon-reduction challenges by the end of Q3.
            </p>
            
            <div className="flex items-end justify-between">
              <div>
                <span className="font-heading font-extrabold text-3xl">74%</span>
                <span className="text-[9px] font-mono uppercase tracking-wider block text-primary-fixed/80 mt-1">Current Status</span>
              </div>
              <button
                onClick={() => {
                  alert('Activating sustainability campaign. Employee email reminders dispatched!');
                }}
                className="bg-white hover:bg-slate-50 text-primary px-4 py-2.5 rounded-xl font-heading font-bold text-[10px] uppercase shadow-sm cursor-pointer transition-all active:scale-95"
              >
                Boost Engagement
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Challenges Section */}
      <div className="flex flex-col gap-6">
        <h3 className="font-heading font-bold text-lg text-on-surface">Active Sustainability Challenges</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div
            onClick={() => onNavigate('sustainability-challenges', '/screens/sustainability-challenges.html', 'challenges')}
            className="bg-white border border-[#bccac0]/40 rounded-2xl p-6 flex flex-col group cursor-pointer hover:border-primary/50 transition-all shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded font-mono text-[9px] font-bold uppercase flex items-center gap-1 border border-amber-200">
                <Trophy className="w-3 h-3" /> 500 XP
              </span>
              <span className="text-slate-400 font-mono text-[10px]">12 DAYS LEFT</span>
            </div>
            <h4 className="font-heading font-bold text-base text-on-surface group-hover:text-primary transition-colors">
              The Paperless Office Initiative
            </h4>
            <p className="text-[#3d4a42] text-xs leading-relaxed mt-2 mb-6">
              Reduce Pune design lab printing by 40% using digital Odoo documentation workflows.
            </p>
            
            <div className="mt-auto">
              <div className="flex justify-between text-[10px] font-mono mb-2">
                <span className="text-slate-500">Global Progress</span>
                <span className="text-on-surface font-bold">62%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                <div className="h-full bg-primary w-[62%]" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => onNavigate('sustainability-challenges', '/screens/sustainability-challenges.html', 'challenges')}
            className="bg-white border border-[#bccac0]/40 rounded-2xl p-6 flex flex-col group cursor-pointer hover:border-primary/50 transition-all shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded font-mono text-[9px] font-bold uppercase flex items-center gap-1 border border-amber-200">
                <Trophy className="w-3 h-3" /> 250 XP
              </span>
              <span className="text-slate-400 font-mono text-[10px]">3 DAYS LEFT</span>
            </div>
            <h4 className="font-heading font-bold text-base text-on-surface group-hover:text-primary transition-colors">
              Zero-Waste Commute Week
            </h4>
            <p className="text-[#3d4a42] text-xs leading-relaxed mt-2 mb-6">
              Choose public transport, carpooling, or electric vehicles for Pune plant commutes.
            </p>
            
            <div className="mt-auto">
              <div className="flex justify-between text-[10px] font-mono mb-2">
                <span className="text-slate-500">Global Progress</span>
                <span className="text-on-surface font-bold">88%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                <div className="h-full bg-primary w-[88%]" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            onClick={() => onNavigate('sustainability-challenges', '/screens/sustainability-challenges.html', 'challenges')}
            className="bg-white border border-[#bccac0]/40 rounded-2xl p-6 flex flex-col group cursor-pointer hover:border-primary/50 transition-all shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded font-mono text-[9px] font-bold uppercase flex items-center gap-1 border border-amber-200">
                <Trophy className="w-3 h-3" /> 1000 XP
              </span>
              <span className="px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded font-mono text-[9px] font-bold">NEW</span>
            </div>
            <h4 className="font-heading font-bold text-base text-on-surface group-hover:text-primary transition-colors">
              Renewable Energy Audit
            </h4>
            <p className="text-[#3d4a42] text-xs leading-relaxed mt-2 mb-6">
              Audit Surat warehouse power consumption logs and propose renewable solar offsets.
            </p>
            
            <div className="mt-auto">
              <div className="flex justify-between text-[10px] font-mono mb-2">
                <span className="text-slate-500">Global Progress</span>
                <span className="text-on-surface font-bold">5%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                <div className="h-full bg-primary w-[5%]" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

// Sub-component Calendar import helper
function Calendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}
