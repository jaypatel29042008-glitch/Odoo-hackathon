import { useState } from 'react';
import { Award, Flame, Users, Calendar, Plus, Upload, CheckCircle2, ShieldCheck, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SocialHubViewProps {
  user: any;
  onUpdateUser: (updatedData: any) => void;
}

interface CSRActivity {
  id: string;
  title: string;
  points: number;
  description: string;
  registered: boolean;
}

const sampleActivities: CSRActivity[] = [
  { id: 'pune-regreen', title: 'Urban Re-greening Campaign (Pune)', points: 150, description: 'Participate in the weekend tree plantation drive around Pune outskirts.', registered: false },
  { id: 'surat-clean', title: 'Coastal Cleanup Surat Drive', points: 100, description: 'Surat team beach cleanup and plastic classification program.', registered: false },
  { id: 'bengaluru-solar', title: 'Solar Panel Setup Volunteer (Bengaluru)', points: 200, description: 'Assist R&D labs in configuring rooftop PV sensors.', registered: false }
];

export default function SocialHubView({ user, onUpdateUser }: SocialHubViewProps) {
  const [activities, setActivities] = useState<CSRActivity[]>(sampleActivities);
  const [activeLeaderboard, setActiveLeaderboard] = useState<'individual' | 'department'>('individual');
  
  // Modal states for proof submission
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<CSRActivity | null>(null);
  const [proofFile, setProofFile] = useState<string>('');

  const handleRegister = (id: string) => {
    setActivities(activities.map(a => a.id === id ? { ...a, registered: true } : a));
    alert('Successfully registered! You can upload volunteering proof files after completion.');
  };

  const handleOpenProofModal = (act: CSRActivity) => {
    setSelectedActivity(act);
    setIsSubmitModalOpen(true);
  };

  const handleProofSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!proofFile) {
      alert('Please upload a proof file (PNG, JPG, PDF).');
      return;
    }

    setIsSubmitModalOpen(false);
    
    // Add XP to user profile
    const earnedXP = selectedActivity ? selectedActivity.points : 0;
    const newXP = user.xp + earnedXP;
    
    // Auto unlock badges on milestones
    const updatedBadges = [...user.badges];
    if (newXP >= 2600 && !updatedBadges.includes('Eco Ranger')) {
      updatedBadges.push('Eco Ranger');
      alert('🏆 Level Up! You unlocked the "Eco Ranger" Badge!');
    }

    onUpdateUser({
      ...user,
      xp: newXP,
      badges: updatedBadges
    });

    if (selectedActivity) {
      setActivities(activities.filter(a => a.id !== selectedActivity.id));
    }
    
    alert(`Success: Proof file uploaded and approved! Verified +${earnedXP} XP logged into Odoo HR ledger.`);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 h-full overflow-y-auto pb-24 custom-scrollbar">
      
      {/* Left Column: XP, Badges, and CSR Activities */}
      <div className="flex-grow flex flex-col gap-6 lg:w-[60%]">
        {/* User Stats Card */}
        <div className="bg-white border border-[#bccac0]/40 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-heading font-extrabold text-lg text-on-surface">Employee ESG Hub</h3>
              <p className="text-on-surface-variant text-xs font-medium">Earn XP and badges by participating in CSR events.</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-secondary-container/10 flex items-center justify-center text-secondary">
              <Users className="w-5 h-5" />
            </div>
          </div>

          <div className="h-px bg-slate-100" />

          {/* XP Bar */}
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase">My Progress</span>
              <span className="text-sm font-mono font-bold text-secondary">{user.xp} XP</span>
            </div>
            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
              <div className="h-full bg-secondary rounded-full" style={{ width: `${Math.min(100, (user.xp / 3000) * 100)}%` }} />
            </div>
            <span className="text-[10px] font-mono text-slate-400 block mt-1.5">Next Badge "Eco Ranger" at 2,600 XP</span>
          </div>

          <div className="h-px bg-slate-100" />

          {/* Badges Grid */}
          <div>
            <span className="text-xs font-mono font-bold text-slate-500 uppercase block mb-3">Earned Badges</span>
            <div className="flex flex-wrap gap-3">
              {user.badges.map((badge: string) => (
                <div key={badge} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#eef4ff] rounded-xl border border-secondary/20 text-xs font-semibold text-secondary">
                  <Award className="w-4 h-4 text-secondary shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CSR Opportunities */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading font-bold text-lg text-on-surface">Volunteering Campaigns</h3>
          
          <div className="flex flex-col gap-4">
            {activities.length > 0 ? (
              activities.map((act) => (
                <div key={act.id} className="bg-white border border-[#bccac0]/40 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                  <div className="flex flex-col gap-1.5 max-w-md">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-on-surface">{act.title}</h4>
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded font-mono text-[9px] font-bold uppercase border border-amber-200 flex items-center gap-0.5">
                        +{act.points} XP
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{act.description}</p>
                  </div>

                  <div className="shrink-0 self-end sm:self-center">
                    {act.registered ? (
                      <button
                        onClick={() => handleOpenProofModal(act)}
                        className="px-4 py-2 bg-secondary hover:bg-[#316bf3] text-white font-heading font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm"
                      >
                        <Upload className="w-4 h-4" />
                        <span>Submit Proof</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleRegister(act.id)}
                        className="px-4 py-2 border border-primary text-primary font-heading font-bold text-xs rounded-xl hover:bg-primary/5 cursor-pointer"
                      >
                        Register
                      </button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-12 text-center text-slate-400 font-mono bg-white border border-[#bccac0]/40 rounded-2xl">
                No active volunteering campaigns available in Odoo HR records.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Column: Leaderboards */}
      <div className="lg:w-[40%] shrink-0">
        <div className="bg-white border border-[#bccac0]/40 rounded-2xl shadow-sm overflow-hidden flex flex-col h-max">
          <div className="px-6 py-4 border-b border-[#bccac0]/40 flex justify-between items-center bg-slate-50">
            <h3 className="font-heading font-bold text-sm text-on-surface">Sustainability Leaderboard</h3>
          </div>
          
          <div className="flex border-b border-slate-200">
            <button
              onClick={() => setActiveLeaderboard('individual')}
              className={`flex-1 py-3 text-[10px] font-mono font-bold uppercase border-b-2 transition-colors cursor-pointer ${
                activeLeaderboard === 'individual' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-slate-500 hover:bg-slate-50'
              }`}
            >
              Individual
            </button>
            <button
              onClick={() => setActiveLeaderboard('department')}
              className={`flex-1 py-3 text-[10px] font-mono font-bold uppercase border-b-2 transition-colors cursor-pointer ${
                activeLeaderboard === 'department' ? 'border-primary text-primary bg-primary/5' : 'border-transparent text-slate-500 hover:bg-slate-50'
              }`}
            >
              Department
            </button>
          </div>

          <div className="p-6">
            {activeLeaderboard === 'individual' ? (
              <div className="flex flex-col gap-4">
                {/* User 1 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-slate-400 w-4">01</span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-heading font-extrabold text-xs text-secondary border border-slate-200">AR</div>
                    <div>
                      <p className="text-xs font-bold text-on-surface">Arjun Reddy</p>
                      <p className="text-[9px] font-mono text-slate-400 uppercase">Logistics</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-secondary">2,950 XP</span>
                </div>

                {/* User 2 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-slate-400 w-4">02</span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-heading font-extrabold text-xs text-primary border border-slate-200">AS</div>
                    <div>
                      <p className="text-xs font-bold text-on-surface">{user.name}</p>
                      <p className="text-[9px] font-mono text-slate-400 uppercase">{user.department}</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-secondary">{user.xp} XP</span>
                </div>

                {/* User 3 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-slate-400 w-4">03</span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-heading font-extrabold text-xs text-tertiary border border-slate-200">PD</div>
                    <div>
                      <p className="text-xs font-bold text-on-surface">Priya Deshmukh</p>
                      <p className="text-[9px] font-mono text-slate-400 uppercase">Product Lab</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-secondary">2,200 XP</span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {/* Dept 1 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-slate-400 w-4">01</span>
                    <div>
                      <p className="text-xs font-bold text-on-surface">Logistics & Fleet</p>
                      <p className="text-[9px] font-mono text-slate-400 uppercase">Surat & Pune Hubs</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-primary">88% Part.</span>
                </div>

                {/* Dept 2 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-slate-400 w-4">02</span>
                    <div>
                      <p className="text-xs font-bold text-on-surface">R&D / Product Lab</p>
                      <p className="text-[9px] font-mono text-slate-400 uppercase">Bengaluru HQ</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-primary">62% Part.</span>
                </div>

                {/* Dept 3 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-slate-400 w-4">03</span>
                    <div>
                      <p className="text-xs font-bold text-on-surface">Manufacturing</p>
                      <p className="text-[9px] font-mono text-slate-400 uppercase">Pune Plant</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-primary">45% Part.</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Proof Submission Modal */}
      <AnimatePresence>
        {isSubmitModalOpen && selectedActivity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSubmitModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white border border-[#bccac0] rounded-2xl w-full max-w-md shadow-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h3 className="font-heading font-extrabold text-base text-[#121c28]">
                  Volunteering Verification Ledger
                </h3>
                <button onClick={() => setIsSubmitModalOpen(false)} className="p-1 hover:bg-slate-100 rounded text-slate-500 cursor-pointer">
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              <form onSubmit={handleProofSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Campaign Activity</span>
                  <span className="text-xs font-bold text-on-surface">{selectedActivity.title}</span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Proof File Name</label>
                  <input
                    type="text"
                    required
                    value={proofFile}
                    onChange={(e) => setProofFile(e.target.value)}
                    placeholder="e.g. Pune_plantation_selfie.jpg"
                    className="border border-[#bccac0] focus:border-primary bg-slate-50 rounded-lg p-2.5 text-xs outline-none"
                  />
                  <p className="text-[9px] text-slate-400 font-mono leading-relaxed mt-0.5">Please provide the file name of your volunteering certificate or image photo. Files are audited by Odoo HR admin.</p>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-3 bg-primary hover:bg-primary-container text-white font-heading font-bold text-xs rounded-xl shadow-md cursor-pointer"
                >
                  UPLOAD & LOG XP
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
