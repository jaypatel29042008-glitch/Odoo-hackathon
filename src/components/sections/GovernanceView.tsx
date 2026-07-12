import { useState } from 'react';
import { Shield, CheckSquare, Calendar, AlertTriangle, CheckCircle2, ChevronRight, X } from 'lucide-react';

interface Policy {
  id: string;
  title: string;
  category: string;
  signed: boolean;
}

interface ComplianceIssue {
  id: string;
  title: string;
  severity: 'High' | 'Medium' | 'Low';
  dueDate: string;
  owner: string;
  resolved: boolean;
}

const samplePolicies: Policy[] = [
  { id: 'pol-ethics', title: 'Code of Business Conduct & Ethics', category: 'General Governance', signed: true },
  { id: 'pol-sourcing', title: 'Ethical Supply Chain Sourcing Policy', category: 'Procurement', signed: false },
  { id: 'pol-waste', title: 'Hazardous Waste Management Directive', category: 'Environmental', signed: false },
  { id: 'pol-diversity', title: 'Equal Opportunity & Diversity Policy', category: 'Social / HR', signed: true }
];

const sampleIssues: ComplianceIssue[] = [
  { id: 'iss-solar', title: 'Surat Warehouse Solar Inverter Failure', severity: 'High', dueDate: '15-07-2026', owner: 'Arjun Reddy', resolved: false },
  { id: 'iss-water', title: 'Pune Plant Wastewater Meter Recalibration', severity: 'Medium', dueDate: '20-07-2026', owner: 'Amit Sharma', resolved: false },
  { id: 'iss-contract', title: 'Vendor ESG Certificates Missing (Scope 3)', severity: 'Low', dueDate: '30-07-2026', owner: 'Priya Deshmukh', resolved: false }
];

export default function GovernanceView() {
  const [policies, setPolicies] = useState<Policy[]>(samplePolicies);
  const [issues, setIssues] = useState<ComplianceIssue[]>(sampleIssues);
  const [activeTab, setActiveTab] = useState<'policies' | 'audits' | 'issues'>('policies');

  const handleAcknowledge = (id: string) => {
    setPolicies(policies.map(p => p.id === id ? { ...p, signed: true } : p));
    alert('Policy acknowledgement successfully recorded! Encrypted timestamp stored in Odoo Audit Logs.');
  };

  const handleResolveIssue = (id: string) => {
    setIssues(issues.map(i => i.id === id ? { ...i, resolved: true } : i));
    alert('Compliance issue flagged as RESOLVED. Verification email sent to internal auditors.');
  };

  return (
    <div className="p-8 max-w-5xl mx-auto flex flex-col gap-6 h-full overflow-y-auto pb-24 custom-scrollbar">
      
      {/* Header */}
      <div>
        <h2 className="font-heading font-extrabold text-2xl text-on-surface">Governance & Compliance Panel</h2>
        <p className="text-on-surface-variant text-xs mt-1 font-medium">Verify policy signing, track scheduled audits, and resolve compliance flags.</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#bccac0]/40 gap-4 mb-4">
        <button
          onClick={() => setActiveTab('policies')}
          className={`pb-3 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
            activeTab === 'policies' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-primary'
          }`}
        >
          Compliance Policies
        </button>
        <button
          onClick={() => setActiveTab('audits')}
          className={`pb-3 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
            activeTab === 'audits' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-primary'
          }`}
        >
          Scheduled Audits
        </button>
        <button
          onClick={() => setActiveTab('issues')}
          className={`pb-3 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
            activeTab === 'issues' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-primary'
          }`}
        >
          Compliance Issues
        </button>
      </div>

      {/* Content Cards */}
      <div className="bg-white border border-[#bccac0]/40 rounded-2xl p-6 sm:p-8 shadow-sm">
        {activeTab === 'policies' && (
          <div className="flex flex-col gap-6">
            <h3 className="font-heading font-bold text-lg text-on-surface flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-primary" />
              Corporate Mandated Policies
            </h3>

            <div className="flex flex-col gap-4">
              {policies.map((policy) => (
                <div key={policy.id} className="bg-slate-50 border border-slate-200/50 rounded-xl p-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:border-primary/20 transition-all">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-medium text-slate-400">({policy.category})</span>
                      {policy.signed && (
                        <span className="px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded font-mono text-[9px] font-bold">ACKNOWLEDGED</span>
                      )}
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-on-surface mt-0.5">{policy.title}</h4>
                  </div>
                  
                  <div className="shrink-0 self-end sm:self-center">
                    {policy.signed ? (
                      <div className="flex items-center gap-1.5 text-xs text-primary font-bold">
                        <CheckCircle2 className="w-4.5 h-4.5" />
                        <span>Verified</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleAcknowledge(policy.id)}
                        className="px-4 py-2 bg-primary hover:bg-primary-container text-white font-heading font-bold text-xs rounded-xl shadow-sm cursor-pointer"
                      >
                        Acknowledge
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'audits' && (
          <div className="flex flex-col gap-6">
            <h3 className="font-heading font-bold text-lg text-on-surface flex items-center gap-2">
              <Calendar className="w-5 h-5 text-secondary" />
              Upcoming ESG Verification Audits
            </h3>

            <div className="flex flex-col gap-4">
              {/* Audit 1 */}
              <div className="bg-slate-50 border border-slate-200/50 rounded-xl p-5 flex justify-between items-center hover:border-secondary/20 transition-all">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-secondary font-bold uppercase tracking-wider">Environmental Audit</span>
                  <h4 className="text-sm font-bold text-on-surface mt-0.5">Scope 1 & 2 Carbon Footprint Verification</h4>
                  <p className="text-xs text-slate-500 mt-1">Target Plant: Pune Manufacturing Assembly line. Auditor: SGS India.</p>
                </div>
                <div className="flex flex-col items-end gap-1.5 shrink-0 text-right">
                  <span className="px-3 py-1 bg-white border border-slate-200 text-xs font-mono font-bold rounded-lg text-on-surface">18-07-2026</span>
                  <span className="text-[10px] font-mono text-amber-500 font-semibold animate-pulse">SCHEDULED</span>
                </div>
              </div>

              {/* Audit 2 */}
              <div className="bg-slate-50 border border-slate-200/50 rounded-xl p-5 flex justify-between items-center hover:border-secondary/20 transition-all">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-secondary font-bold uppercase tracking-wider">Social Audit</span>
                  <h4 className="text-sm font-bold text-on-surface mt-0.5">Volunteering & CSR Welfare Validation</h4>
                  <p className="text-xs text-slate-500 mt-1">Target Plant: Surat Logistics Depot. Auditor: TUV India.</p>
                </div>
                <div className="flex flex-col items-end gap-1.5 shrink-0 text-right">
                  <span className="px-3 py-1 bg-white border border-slate-200 text-xs font-mono font-bold rounded-lg text-on-surface">25-07-2026</span>
                  <span className="text-[10px] font-mono text-slate-400">PLANNED</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'issues' && (
          <div className="flex flex-col gap-6">
            <h3 className="font-heading font-bold text-lg text-on-surface flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-error animate-bounce-slow" />
              Pending Compliance Flags
            </h3>

            <div className="flex flex-col gap-4">
              {issues.map((issue) => (
                <div key={issue.id} className="bg-slate-50 border border-slate-200/50 rounded-xl p-5 flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:border-error/20 transition-all">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded font-mono text-[9px] font-bold ${
                        issue.severity === 'High' ? 'bg-red-100 text-red-800 border border-red-200' :
                        issue.severity === 'Medium' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                        'bg-blue-100 text-blue-800 border border-blue-200'
                      }`}>
                        {issue.severity} Severity
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">Due: {issue.dueDate}</span>
                    </div>
                    <h4 className="text-sm font-bold text-on-surface mt-1">{issue.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Assigned Owner: <span className="font-semibold text-slate-600">{issue.owner}</span></p>
                  </div>

                  <div className="shrink-0 self-end sm:self-center">
                    {issue.resolved ? (
                      <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold rounded-xl flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Resolved</span>
                      </span>
                    ) : (
                      <button
                        onClick={() => handleResolveIssue(issue.id)}
                        className="px-4 py-2 border border-error text-error hover:bg-error-container/10 font-heading font-bold text-xs rounded-xl cursor-pointer"
                      >
                        Resolve Issue
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
