import { useState } from 'react';
import { Trophy, Clock, Star, Flame, CheckCircle2 } from 'lucide-react';

interface Challenge {
  id: string;
  title: string;
  points: number;
  daysLeft: string;
  description: string;
  progress: number;
  status: 'active' | 'joined' | 'completed';
}

const sampleChallenges: Challenge[] = [
  { id: 'chal-paperless', title: 'The Paperless Office Initiative', points: 500, daysLeft: '12 Days Left', description: 'Reduce department-wide printing by 40% using digital documentation workflows in the Pune office.', progress: 62, status: 'active' },
  { id: 'chal-commute', title: 'Zero-Waste Commute Week', points: 250, daysLeft: '3 Days Left', description: 'Track your commute and choose public transport, cycling, or walking alternatives to Surat.', progress: 88, status: 'joined' },
  { id: 'chal-audit', title: 'Renewable Energy Audit', points: 1000, daysLeft: 'New Challenge', description: 'Assist our facilities management team in identifying energy leakage in Bengaluru warehouses.', progress: 5, status: 'active' },
  { id: 'chal-recycle', title: 'Pune Plant Plastic Recycling Drive', points: 300, daysLeft: 'Completed', description: 'Collect and recycle up to 10kg of plastic packaging material at Pune manufacturing assembly.', progress: 100, status: 'completed' }
];

export default function ChallengesView() {
  const [challenges, setChallenges] = useState<Challenge[]>(sampleChallenges);

  const handleJoinChallenge = (id: string) => {
    setChallenges(challenges.map(c => c.id === id ? { ...c, status: 'joined', progress: c.progress + 5 } : c));
    alert('You have joined the sustainability challenge! Your progress logs are now bound to Odoo ESG records.');
  };

  const handleCompleteChallenge = (id: string) => {
    setChallenges(challenges.map(c => c.id === id ? { ...c, status: 'completed', progress: 100 } : c));
    alert('Congratulations! Challenge marked as completed. Internal sustainability auditors will verify your submission soon.');
  };

  return (
    <div className="p-8 max-w-5xl mx-auto flex flex-col gap-6 h-full overflow-y-auto pb-24 custom-scrollbar">
      
      {/* Header */}
      <div>
        <h2 className="font-heading font-extrabold text-2xl text-on-surface">Sustainability Challenges Board</h2>
        <p className="text-on-surface-variant text-xs mt-1 font-medium">Motivate and track department-wide active sustainability goals and reward achievements.</p>
      </div>

      {/* Challenges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {challenges.map((challenge) => {
          const isActive = challenge.status === 'active';
          const isJoined = challenge.status === 'joined';
          const isCompleted = challenge.status === 'completed';

          return (
            <div
              key={challenge.id}
              className={`bg-white border rounded-2xl p-6 flex flex-col justify-between shadow-sm min-h-[280px] transition-all duration-300 ${
                isJoined ? 'border-primary/40 shadow-md shadow-primary/5' : 'border-[#bccac0]/40'
              }`}
            >
              <div>
                {/* Meta Row */}
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2.5 py-1 bg-amber-100 text-amber-800 rounded font-mono text-[9px] font-bold uppercase border border-amber-200 flex items-center gap-1">
                    <Trophy className="w-3.5 h-3.5 text-amber-600" />
                    <span>{challenge.points} XP</span>
                  </span>
                  
                  <span className={`text-[10px] font-mono font-bold ${
                    isCompleted ? 'text-primary' : 'text-slate-400'
                  }`}>
                    {challenge.daysLeft}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base text-on-surface mb-2">
                  {challenge.title}
                </h3>
                
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {challenge.description}
                </p>
              </div>

              {/* Progress and Actions */}
              <div className="mt-8">
                {/* Progress bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-[10px] font-mono mb-2">
                    <span className="text-slate-500">Corporate Target Progress</span>
                    <span className="text-on-surface font-bold">{challenge.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isCompleted ? 'bg-primary' : 'bg-secondary'
                      }`}
                      style={{ width: `${challenge.progress}%` }}
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="border-t border-[#bccac0]/25 pt-4 flex justify-end">
                  {isActive && (
                    <button
                      onClick={() => handleJoinChallenge(challenge.id)}
                      className="px-5 py-2.5 bg-primary hover:bg-primary-container text-white font-heading font-bold text-xs rounded-xl shadow-sm cursor-pointer"
                    >
                      Join Challenge
                    </button>
                  )}
                  {isJoined && (
                    <button
                      onClick={() => handleCompleteChallenge(challenge.id)}
                      className="px-5 py-2.5 bg-secondary hover:bg-secondary-container text-white font-heading font-bold text-xs rounded-xl shadow-sm cursor-pointer"
                    >
                      Complete Challenge
                    </button>
                  )}
                  {isCompleted && (
                    <div className="flex items-center gap-1.5 text-xs text-primary font-bold">
                      <CheckCircle2 className="w-4.5 h-4.5" />
                      <span>Reward Verified</span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
