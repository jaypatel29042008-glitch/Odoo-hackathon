import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Leaf, Info, X, Shield, Globe, Award, HelpCircle, 
  ChevronRight, Calendar, ExternalLink, Menu, Plus, CheckCircle2,
  User, LayoutDashboard, Database, Users, Gavel, Trophy, FileText, Settings, Truck, LogOut, Sparkles
} from 'lucide-react';

// Import Views Natively in React
import AuthView from './components/sections/AuthView';
import DashboardView from './components/sections/DashboardView';
import TransactionsView from './components/sections/TransactionsView';
import SocialHubView from './components/sections/SocialHubView';
import GovernanceView from './components/sections/GovernanceView';
import ChallengesView from './components/sections/ChallengesView';
import ReportsView from './components/sections/ReportsView';
import SupplierAnalysisView from './components/sections/SupplierAnalysisView';
import SettingsView from './components/sections/SettingsView';
import LandingPageView from './components/sections/LandingPageView';
import DepartmentRankingsView from './components/sections/DepartmentRankingsView';
import GlobalInsightsView from './components/sections/GlobalInsightsView';

import { problemPoints, solutionPillars, techStack, teamMembers } from './data/content';

// Interface definitions
interface Transaction {
  id: string;
  date: string;
  department: string;
  category: string;
  amount: string;
  factor: string;
  notes: string;
}

const initialTransactions: Transaction[] = [
  { id: 'tx-1', date: '12-07-2026', department: 'Manufacturing', category: 'Procurement / Scope 3', amount: '1000', factor: '0.45', notes: 'Weekly raw material delivery carbon offset logs.' },
  { id: 'tx-2', date: '11-07-2026', department: 'Logistics & Fleet', category: 'Fleet Fuel / Scope 1', amount: '420', factor: '2.62', notes: 'Pune dispatch fleet vehicle fuel consumption.' },
  { id: 'tx-3', date: '08-07-2026', department: 'Manufacturing', category: 'Electricity / Scope 2', amount: '2500', factor: '0.368', notes: 'Pune fabrication assembly facility cooling energy usage.' }
];

export default function App() {
  // Authentication & Session State
  const [showPortal, setShowPortal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: 'Amit Sharma',
    role: 'Sustainability Lead',
    email: 'amit.sharma@tata.com',
    company: 'Tata Motors Pune Plant',
    department: 'Manufacturing',
    xp: 2450,
    badges: ['Green Champion', 'Eco Driver', 'Paperless Pioneer'],
    points: 1200
  });

  // Navigation state
  const [activeView, setActiveView] = useState<'dashboard' | 'transactions' | 'social' | 'governance' | 'challenges' | 'reports' | 'settings' | 'supplier' | 'insights' | 'rankings'>('dashboard');
  const [isInfoOpen, setIsInfoOpen] = useState(false); // Presentation drawer
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ESG ledger transaction state
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);

  // Odoo Add Transaction modal state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [modalDept, setModalDept] = useState('Manufacturing');
  const [modalCategory, setModalCategory] = useState('Fleet Management');
  const [modalAmount, setModalAmount] = useState('1250');
  const [modalFactor, setModalFactor] = useState('0.45');
  const [modalNotes, setModalNotes] = useState('Weekly logistical fleet dispatch emissions.');

  const handleLoginSuccess = (userData: any) => {
    setUser(userData);
    setIsLoggedIn(true);
    setActiveView('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowPortal(false);
  };

  const handleAddTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    const newTx: Transaction = {
      id: `tx-${Date.now()}`,
      date: new Date().toLocaleDateString('en-GB').replace(/\//g, '-'),
      department: modalDept,
      category: modalCategory,
      amount: modalAmount,
      factor: modalFactor,
      notes: modalNotes
    };

    setTransactions([newTx, ...transactions]);
    setIsAddModalOpen(false);
    
    const calculatedEmissions = (parseFloat(modalAmount) * parseFloat(modalFactor)).toFixed(2);
    alert(`Success: Carbon transaction logged inside Odoo ERP!\n\nDetails:\n- Department: ${modalDept}\n- Calculated Impact: ${calculatedEmissions} kg CO2e`);
    
    // Auto add 50 XP to employee on carbon logging
    setUser(prev => ({
      ...prev,
      xp: prev.xp + 50
    }));
  };

  const handleDeleteTransaction = (id: string) => {
    if (confirm('Are you sure you want to delete this carbon log entry?')) {
      setTransactions(transactions.filter(t => t.id !== id));
    }
  };

  // Switch tabs programmatically
  const handleTabNavigation = (viewId: any) => {
    setActiveView(viewId);
    setIsMobileMenuOpen(false);
  };

  if (!isLoggedIn) {
    return <AuthView onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="h-screen w-screen flex bg-[#f8f9ff] text-[#121c28] overflow-hidden font-body selection:bg-primary selection:text-white">
      
      {/* 1. Left Sidebar Navigation */}
      <aside className={`w-[280px] h-full border-r border-[#bccac0]/40 bg-[#f8f9ff] flex flex-col py-6 px-4 shrink-0 transition-transform duration-300 z-30 fixed lg:static ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        {/* Sidebar Header */}
        <div className="flex items-center gap-3 mb-8 px-2">
          <div className="w-10 h-10 bg-primary/10 flex items-center justify-center border border-primary/20 rounded-xl">
            <Leaf className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="font-heading font-extrabold text-lg text-primary leading-none">EcoSphere</h1>
            <p className="font-mono text-[9px] text-[#3d4a42] uppercase tracking-widest mt-1">Odoo ESG Management</p>
          </div>
        </div>

        {/* Sidebar Links Menu */}
        <nav className="flex-grow space-y-4 overflow-y-auto pr-1">
          <div className="flex flex-col gap-1.5">
            <span className="px-3 text-[10px] font-mono font-bold text-[#3d4a42]/70 uppercase tracking-widest">
              Core Workspace
            </span>
            <div className="flex flex-col gap-0.5 mt-1 pl-1">
              {/* Dashboard */}
              <button
                onClick={() => handleTabNavigation('dashboard')}
                className={`flex items-center gap-3 text-left px-3 py-2.5 rounded-lg text-xs font-heading font-semibold transition-all cursor-pointer ${
                  activeView === 'dashboard' ? 'bg-primary/10 text-primary border-l-4 border-primary font-bold' : 'text-[#3d4a42] hover:bg-[#dfe9fa]/50'
                }`}
              >
                <LayoutDashboard className="w-4 h-4 shrink-0" />
                <span>Dashboard</span>
              </button>

              {/* Transactions */}
              <button
                onClick={() => handleTabNavigation('transactions')}
                className={`flex items-center gap-3 text-left px-3 py-2.5 rounded-lg text-xs font-heading font-semibold transition-all cursor-pointer ${
                  activeView === 'transactions' ? 'bg-primary/10 text-primary border-l-4 border-primary font-bold' : 'text-[#3d4a42] hover:bg-[#dfe9fa]/50'
                }`}
              >
                <Database className="w-4 h-4 shrink-0" />
                <span>Carbon Ledger</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="px-3 text-[10px] font-mono font-bold text-[#3d4a42]/70 uppercase tracking-widest">
              Modules
            </span>
            <div className="flex flex-col gap-0.5 mt-1 pl-1">
              {/* Social Hub */}
              <button
                onClick={() => handleTabNavigation('social')}
                className={`flex items-center gap-3 text-left px-3 py-2.5 rounded-lg text-xs font-heading font-semibold transition-all cursor-pointer ${
                  activeView === 'social' ? 'bg-primary/10 text-primary border-l-4 border-primary font-bold' : 'text-[#3d4a42] hover:bg-[#dfe9fa]/50'
                }`}
              >
                <Users className="w-4 h-4 shrink-0" />
                <span>Social Impact Hub</span>
              </button>

              {/* Governance */}
              <button
                onClick={() => handleTabNavigation('governance')}
                className={`flex items-center gap-3 text-left px-3 py-2.5 rounded-lg text-xs font-heading font-semibold transition-all cursor-pointer ${
                  activeView === 'governance' ? 'bg-primary/10 text-primary border-l-4 border-primary font-bold' : 'text-[#3d4a42] hover:bg-[#dfe9fa]/50'
                }`}
              >
                <Gavel className="w-4 h-4 shrink-0" />
                <span>Governance</span>
              </button>

              {/* Challenges */}
              <button
                onClick={() => handleTabNavigation('challenges')}
                className={`flex items-center gap-3 text-left px-3 py-2.5 rounded-lg text-xs font-heading font-semibold transition-all cursor-pointer ${
                  activeView === 'challenges' ? 'bg-primary/10 text-primary border-l-4 border-primary font-bold' : 'text-[#3d4a42] hover:bg-[#dfe9fa]/50'
                }`}
              >
                <Trophy className="w-4 h-4 shrink-0" />
                <span>Challenges Board</span>
              </button>

              {/* Supplier */}
              <button
                onClick={() => handleTabNavigation('supplier')}
                className={`flex items-center gap-3 text-left px-3 py-2.5 rounded-lg text-xs font-heading font-semibold transition-all cursor-pointer ${
                  activeView === 'supplier' ? 'bg-primary/10 text-primary border-l-4 border-primary font-bold' : 'text-[#3d4a42] hover:bg-[#dfe9fa]/50'
                }`}
              >
                <Truck className="w-4 h-4 shrink-0" />
                <span>Supplier Scope 3</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="px-3 text-[10px] font-mono font-bold text-[#3d4a42]/70 uppercase tracking-widest">
              Executive Board
            </span>
            <div className="flex flex-col gap-0.5 mt-1 pl-1">
              {/* Global Insights */}
              <button
                onClick={() => handleTabNavigation('insights')}
                className={`flex items-center gap-3 text-left px-3 py-2.5 rounded-lg text-xs font-heading font-semibold transition-all cursor-pointer ${
                  activeView === 'insights' ? 'bg-primary/10 text-primary border-l-4 border-primary font-bold' : 'text-[#3d4a42] hover:bg-[#dfe9fa]/50'
                }`}
              >
                <Globe className="w-4 h-4 shrink-0" />
                <span>Global Insights</span>
              </button>

              {/* Department Rankings */}
              <button
                onClick={() => handleTabNavigation('rankings')}
                className={`flex items-center gap-3 text-left px-3 py-2.5 rounded-lg text-xs font-heading font-semibold transition-all cursor-pointer ${
                  activeView === 'rankings' ? 'bg-primary/10 text-primary border-l-4 border-primary font-bold' : 'text-[#3d4a42] hover:bg-[#dfe9fa]/50'
                }`}
              >
                <Award className="w-4 h-4 shrink-0" />
                <span>Department Rankings</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="px-3 text-[10px] font-mono font-bold text-[#3d4a42]/70 uppercase tracking-widest">
              Audit Tools
            </span>
            <div className="flex flex-col gap-0.5 mt-1 pl-1">
              {/* Reports */}
              <button
                onClick={() => handleTabNavigation('reports')}
                className={`flex items-center gap-3 text-left px-3 py-2.5 rounded-lg text-xs font-heading font-semibold transition-all cursor-pointer ${
                  activeView === 'reports' ? 'bg-primary/10 text-primary border-l-4 border-primary font-bold' : 'text-[#3d4a42] hover:bg-[#dfe9fa]/50'
                }`}
              >
                <FileText className="w-4 h-4 shrink-0" />
                <span>Reports Builder</span>
              </button>

              {/* Settings */}
              <button
                onClick={() => handleTabNavigation('settings')}
                className={`flex items-center gap-3 text-left px-3 py-2.5 rounded-lg text-xs font-heading font-semibold transition-all cursor-pointer ${
                  activeView === 'settings' ? 'bg-primary/10 text-primary border-l-4 border-primary font-bold' : 'text-[#3d4a42] hover:bg-[#dfe9fa]/50'
                }`}
              >
                <Settings className="w-4 h-4 shrink-0" />
                <span>Settings</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Sidebar Footer Actions */}
        <div className="mt-auto border-t border-[#bccac0]/30 pt-4 flex flex-col gap-2">
          {/* Quick Add Log Transaction */}
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="w-full py-3 bg-primary hover:bg-primary-container text-white font-heading font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
          >
            <Plus className="w-4 h-4" />
            <span>ADD TRANSACTION</span>
          </button>
          
          <button
            onClick={() => setIsInfoOpen(true)}
            className="w-full py-2.5 border border-[#bccac0]/60 hover:bg-slate-50 text-[#3d4a42] font-heading font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Info className="w-4 h-4" />
            <span>PROJECT DOCS</span>
          </button>
          
          <button
            onClick={handleLogout}
            className="w-full py-2 border border-error/30 text-error hover:bg-error-container/10 font-heading font-bold text-[11px] rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>LOG OUT</span>
          </button>
        </div>
      </aside>

      {/* Mobile Drawer Backdrop */}
      {isMobileMenuOpen && (
        <div 
          onClick={() => setIsMobileMenuOpen(false)} 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-20 lg:hidden"
        />
      )}

      {/* 2. Main Workspace Column */}
      <div className="flex-grow h-full flex flex-col min-w-0">
        
        {/* Top App Bar Header */}
        <header className="h-16 border-b border-[#bccac0]/40 bg-white flex items-center justify-between px-6 shrink-0 relative z-10 shadow-sm">
          <div className="flex items-center gap-3">
            {/* Hamburger for mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg bg-slate-100 border border-slate-200 text-[#121c28] hover:bg-slate-200"
            >
              <Menu className="w-5 h-5" />
            </button>
            
            <h2 className="font-heading font-extrabold text-sm text-[#121c28] tracking-tight uppercase">
              {activeView === 'dashboard' && 'Dashboard'}
              {activeView === 'transactions' && 'Carbon Ledger'}
              {activeView === 'social' && 'Social Impact Hub'}
              {activeView === 'governance' && 'Governance & Audits'}
              {activeView === 'challenges' && 'Challenges Board'}
              {activeView === 'reports' && 'Reports Builder'}
              {activeView === 'settings' && 'Settings'}
              {activeView === 'supplier' && 'Supplier Scope 3'}
              {activeView === 'insights' && 'Global ESG Insights'}
              {activeView === 'rankings' && 'Department ESG Rankings'}
            </h2>
          </div>

          {/* User profile widget */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#3d4a42] border border-[#bccac0]/40 px-3 py-1.5 rounded-full bg-slate-50">
              <Globe className="w-3.5 h-3.5 text-secondary animate-spin-slow" />
              <span>Odoo Integrated</span>
            </div>

            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="hidden sm:flex flex-col text-right">
                <span className="text-xs font-bold text-on-surface leading-none">{user.name}</span>
                <span className="text-[10px] text-slate-500 font-mono mt-0.5">{user.role}</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-heading font-extrabold text-sm text-primary">
                {user.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          </div>
        </header>

        {/* View Switcher Viewport */}
        <main className="flex-grow bg-[#f0f4f8] overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="w-full h-full overflow-y-auto"
            >
              {activeView === 'dashboard' && (
                <DashboardView 
                  user={user} 
                  onNavigate={handleTabNavigation} 
                  onOpenAddModal={() => setIsAddModalOpen(true)}
                  transactions={transactions}
                />
              )}
              {activeView === 'transactions' && (
                <TransactionsView 
                  transactions={transactions} 
                  onAddTransaction={(tx) => setTransactions([tx, ...transactions])}
                  onOpenAddModal={() => setIsAddModalOpen(true)}
                  onDeleteTransaction={handleDeleteTransaction}
                />
              )}
              {activeView === 'social' && (
                <SocialHubView user={user} onUpdateUser={setUser} />
              )}
              {activeView === 'governance' && <GovernanceView />}
              {activeView === 'challenges' && <ChallengesView />}
              {activeView === 'reports' && <ReportsView />}
              {activeView === 'settings' && (
                <SettingsView user={user} onUpdateUser={setUser} />
              )}
              {activeView === 'supplier' && <SupplierAnalysisView />}
              {activeView === 'insights' && <GlobalInsightsView />}
              {activeView === 'rankings' && <DepartmentRankingsView />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* 3. Collapsible Hackathon Info Presentation Drawer */}
      <AnimatePresence>
        {isInfoOpen && (
          <>
            <div 
              onClick={() => setIsInfoOpen(false)}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-40 transition-opacity"
            />

            <div className="fixed right-0 top-0 h-full w-full max-w-xl bg-white shadow-2xl z-50 border-l border-slate-200 flex flex-col transition-transform duration-300">
              <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
                    <Info className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-on-surface">
                    Hackathon Submission Details
                  </h3>
                </div>
                <button
                  onClick={() => setIsInfoOpen(false)}
                  className="p-2 hover:bg-slate-200 rounded-xl transition-colors text-slate-500 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-8 flex flex-col gap-8 custom-scrollbar">
                
                {/* 1. Problem Statement */}
                <div className="flex flex-col gap-4">
                  <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest">
                    The ESG Problem Statement
                  </span>
                  <div className="grid grid-cols-1 gap-4">
                    {problemPoints.map((point) => (
                      <div key={point.title} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/50 flex flex-col gap-1">
                        <h4 className="text-sm font-bold text-[#121c28]">{point.title}</h4>
                        <p className="text-xs text-[#3d4a42] leading-relaxed">{point.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-slate-100" />

                {/* 2. Four Pillars */}
                <div className="flex flex-col gap-4">
                  <span className="text-xs font-mono font-bold text-secondary uppercase tracking-widest">
                    The EcoSphere Solution Pillars
                  </span>
                  <div className="grid grid-cols-1 gap-4">
                    {solutionPillars.map((pillar) => (
                      <div key={pillar.title} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/50 flex flex-col gap-2">
                        <h4 className="text-sm font-extrabold text-[#121c28]">{pillar.title} Pillar</h4>
                        <ul className="list-disc pl-4 text-xs text-[#3d4a42] flex flex-col gap-1">
                          {pillar.features.slice(0, 2).map((f, i) => (
                            <li key={i}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-slate-100" />

                {/* 3. Tech Stack */}
                <div className="flex flex-col gap-4">
                  <span className="text-xs font-mono font-bold text-tertiary uppercase tracking-widest">
                    Tech Stack & Architecture
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    {techStack.map((tech) => (
                      <div key={tech.name} className="p-3 bg-slate-50 rounded-xl border border-slate-200/50 flex flex-col">
                        <span className="text-xs font-bold text-[#121c28]">{tech.name}</span>
                        <span className="text-[10px] text-slate-500 font-mono mt-0.5">{tech.category}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-slate-100" />

                {/* 4. Team Members */}
                <div className="flex flex-col gap-4">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
                    Team Members
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {teamMembers.map((member) => (
                      <div key={member.name} className="p-4 bg-slate-50 rounded-xl border border-slate-200/50 flex flex-col gap-1">
                        <span className="text-sm font-bold text-[#121c28]">{member.name}</span>
                        <span className="text-xs text-slate-500 font-mono">{member.role}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              <div className="p-6 border-t border-slate-200 bg-slate-50 flex justify-between items-center shrink-0">
                <span className="text-xs font-mono text-slate-500">
                  Odoo Hackathon 2025
                </span>
                <button
                  onClick={() => setIsInfoOpen(false)}
                  className="px-6 py-2.5 bg-primary hover:bg-primary-container text-white font-heading font-bold text-xs rounded-xl shadow-md cursor-pointer"
                >
                  Back to Demo
                </button>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* 4. Odoo Style Modal Overlay: Add Transaction */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAddModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative bg-white border border-[#bccac0] rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Plus className="w-5 h-5 text-primary" />
                  <h3 className="font-heading font-extrabold text-base text-[#121c28]">
                    Odoo ERP: Log Carbon Transaction
                  </h3>
                </div>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="p-1 hover:bg-slate-200 rounded-lg text-slate-500 cursor-pointer"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              <form onSubmit={handleAddTransaction} className="p-6 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  {/* Department */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Department</label>
                    <select
                      value={modalDept}
                      onChange={(e) => setModalDept(e.target.value)}
                      className="border border-[#bccac0] focus:border-primary bg-white rounded-lg p-2.5 text-xs outline-none"
                    >
                      <option>Manufacturing</option>
                      <option>Logistics & Fleet</option>
                      <option>R&D / Product</option>
                      <option>Human Resources</option>
                      <option>Marketing</option>
                    </select>
                  </div>

                  {/* Category */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Emission Category</label>
                    <select
                      value={modalCategory}
                      onChange={(e) => setModalCategory(e.target.value)}
                      className="border border-[#bccac0] focus:border-primary bg-white rounded-lg p-2.5 text-xs outline-none"
                    >
                      <option>Fleet Fuel / Scope 1</option>
                      <option>Electricity / Scope 2</option>
                      <option>Procurement / Scope 3</option>
                      <option>Facility Operations</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Value/Amount */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Value (litres/kWh/hours)</label>
                    <input
                      type="number"
                      required
                      value={modalAmount}
                      onChange={(e) => setModalAmount(e.target.value)}
                      className="border border-[#bccac0] focus:border-primary bg-white rounded-lg p-2.5 text-xs outline-none"
                    />
                  </div>

                  {/* Emission Factor */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Emission Factor (kg CO2e)</label>
                    <input
                      type="number"
                      step="0.01"
                      required
                      value={modalFactor}
                      onChange={(e) => setModalFactor(e.target.value)}
                      className="border border-[#bccac0] focus:border-primary bg-white rounded-lg p-2.5 text-xs outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Audit Description</label>
                  <textarea
                    rows={2}
                    value={modalNotes}
                    onChange={(e) => setModalNotes(e.target.value)}
                    className="border border-[#bccac0] focus:border-primary bg-white rounded-lg p-2.5 text-xs outline-none resize-none"
                  />
                </div>

                <div className="mt-2 p-3 bg-[#eef4ff] rounded-xl border border-secondary/20 flex items-center justify-between text-xs">
                  <span className="font-semibold text-secondary">Auto Impact Projection:</span>
                  <span className="font-mono font-bold text-primary text-sm">
                    {(parseFloat(modalAmount || '0') * parseFloat(modalFactor || '0')).toFixed(2)} kg CO2e
                  </span>
                </div>

                <div className="flex items-center justify-end gap-3 mt-4 border-t border-slate-200 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2 border border-slate-300 hover:bg-slate-50 font-heading font-semibold text-xs rounded-lg cursor-pointer"
                  >
                    Discard
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-primary hover:bg-primary-container text-white font-heading font-bold text-xs rounded-lg shadow-md cursor-pointer"
                  >
                    Post Log Entry
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
