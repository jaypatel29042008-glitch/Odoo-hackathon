import { useState } from 'react';
import { User, Shield, Bell, Eye, Save, ToggleLeft, ToggleRight, CheckCircle2 } from 'lucide-react';

interface SettingsViewProps {
  user: any;
  onUpdateUser: (updatedData: any) => void;
}

type Tab = 'profile' | 'security' | 'notifications' | 'preferences';

export default function SettingsView({ user, onUpdateUser }: SettingsViewProps) {
  const [activeTab, setActiveTab] = useState<Tab>('profile');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Profile Form States
  const [profileName, setProfileName] = useState(user.name);
  const [profileEmail, setProfileEmail] = useState(user.email);
  const [profileCompany, setProfileCompany] = useState(user.company);
  const [profileDept, setProfileDept] = useState(user.department);

  // Password States
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Notification Preferences
  const [notifCompliance, setNotifCompliance] = useState(true);
  const [notifGamification, setNotifGamification] = useState(true);
  const [notifReminders, setNotifReminders] = useState(false);
  
  // App Preferences
  const [appTheme, setAppTheme] = useState('light');
  const [autoCalculations, setAutoCalculations] = useState(true);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveSuccess(false);

    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      onUpdateUser({
        ...user,
        name: profileName,
        email: profileEmail,
        company: profileCompany,
        department: profileDept
      });
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 1000);
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Error: New passwords do not match.');
      return;
    }
    if (newPassword.length < 6) {
      alert('Error: Password must be at least 6 characters long.');
      return;
    }

    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      alert('Password updated successfully!');
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 1000);
  };

  const handleSavePreferences = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      alert('System configuration preferences updated successfully.');
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 800);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto flex flex-col gap-6">
      
      {/* Page Header */}
      <div>
        <h2 className="font-heading font-extrabold text-2xl text-on-surface">Settings & Preferences</h2>
        <p className="text-on-surface-variant text-xs mt-1 font-medium">Manage your corporate credentials, alert settings, and platform variables.</p>
      </div>

      {/* Tabs list */}
      <div className="flex border-b border-[#bccac0]/40 gap-4 mb-4">
        <button
          onClick={() => setActiveTab('profile')}
          className={`pb-3 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
            activeTab === 'profile' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-primary'
          }`}
        >
          Profile settings
        </button>
        <button
          onClick={() => setActiveTab('security')}
          className={`pb-3 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
            activeTab === 'security' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-primary'
          }`}
        >
          Security & Password
        </button>
        <button
          onClick={() => setActiveTab('notifications')}
          className={`pb-3 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
            activeTab === 'notifications' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-primary'
          }`}
        >
          Alert Notifications
        </button>
        <button
          onClick={() => setActiveTab('preferences')}
          className={`pb-3 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
            activeTab === 'preferences' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-primary'
          }`}
        >
          ESG Configuration
        </button>
      </div>

      {/* Save Success Banner */}
      {saveSuccess && (
        <div className="p-4 bg-eco-100/30 border border-primary/20 text-primary rounded-xl text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0" />
          <span>Configuration saved successfully! All dashboards updated.</span>
        </div>
      )}

      {/* Form Content */}
      <div className="bg-white border border-[#bccac0]/40 rounded-2xl p-6 sm:p-8 shadow-sm">
        {activeTab === 'profile' && (
          <form onSubmit={handleSaveProfile} className="flex flex-col gap-5">
            <h3 className="font-heading font-bold text-lg text-on-surface flex items-center gap-2 mb-2">
              <User className="w-5 h-5 text-primary" />
              Corporate Identity
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Full Name</label>
                <input
                  type="text"
                  required
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  className="border border-[#bccac0] focus:border-primary bg-slate-50 rounded-lg p-2.5 text-xs outline-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Email Address</label>
                <input
                  type="email"
                  required
                  value={profileEmail}
                  onChange={(e) => setProfileEmail(e.target.value)}
                  className="border border-[#bccac0] focus:border-primary bg-slate-50 rounded-lg p-2.5 text-xs outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Company Location</label>
                <input
                  type="text"
                  required
                  value={profileCompany}
                  onChange={(e) => setProfileCompany(e.target.value)}
                  className="border border-[#bccac0] focus:border-primary bg-slate-50 rounded-lg p-2.5 text-xs outline-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Department</label>
                <input
                  type="text"
                  required
                  value={profileDept}
                  onChange={(e) => setProfileDept(e.target.value)}
                  className="border border-[#bccac0] focus:border-primary bg-slate-50 rounded-lg p-2.5 text-xs outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSaving}
              className="w-max px-6 py-2.5 bg-primary hover:bg-primary-container text-white font-heading font-bold text-xs rounded-xl flex items-center gap-2 cursor-pointer shadow-md self-end disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{isSaving ? 'Saving...' : 'SAVE CHANGES'}</span>
            </button>
          </form>
        )}

        {activeTab === 'security' && (
          <form onSubmit={handlePasswordChange} className="flex flex-col gap-5">
            <h3 className="font-heading font-bold text-lg text-on-surface flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-secondary" />
              Change Password
            </h3>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Current Password</label>
              <input
                type="password"
                required
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="••••••••"
                className="border border-[#bccac0] focus:border-primary bg-slate-50 rounded-lg p-2.5 text-xs outline-none max-w-md"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">New Password</label>
                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Minimum 6 characters"
                  className="border border-[#bccac0] focus:border-primary bg-slate-50 rounded-lg p-2.5 text-xs outline-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Confirm Password</label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repeat new password"
                  className="border border-[#bccac0] focus:border-primary bg-slate-50 rounded-lg p-2.5 text-xs outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSaving}
              className="w-max px-6 py-2.5 bg-primary hover:bg-primary-container text-white font-heading font-bold text-xs rounded-xl flex items-center gap-2 cursor-pointer shadow-md self-end"
            >
              <Save className="w-4 h-4" />
              <span>{isSaving ? 'Updating...' : 'CHANGE PASSWORD'}</span>
            </button>
          </form>
        )}

        {activeTab === 'notifications' && (
          <form onSubmit={handleSavePreferences} className="flex flex-col gap-6">
            <h3 className="font-heading font-bold text-lg text-on-surface flex items-center gap-2 mb-2">
              <Bell className="w-5 h-5 text-tertiary" />
              Alert Preferences
            </h3>

            <div className="flex flex-col gap-4">
              {/* Notif 1 */}
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200/50">
                <div>
                  <h4 className="text-xs font-extrabold text-on-surface">Compliance Violations</h4>
                  <p className="text-[11px] text-[#3d4a42] mt-0.5">Receive immediate notifications when an audit deadline is missed or compliance issue is flagged.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setNotifCompliance(!notifCompliance)}
                  className="text-primary hover:scale-105 transition-transform"
                >
                  {notifCompliance ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8 text-slate-400" />}
                </button>
              </div>

              {/* Notif 2 */}
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200/50">
                <div>
                  <h4 className="text-xs font-extrabold text-on-surface">Challenge Approvals & Badge Unlocks</h4>
                  <p className="text-[11px] text-[#3d4a42] mt-0.5">Receive alerts when employee CSR submissions are validated or badges are auto-awarded.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setNotifGamification(!notifGamification)}
                  className="text-primary hover:scale-105 transition-transform"
                >
                  {notifGamification ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8 text-slate-400" />}
                </button>
              </div>

              {/* Notif 3 */}
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200/50">
                <div>
                  <h4 className="text-xs font-extrabold text-on-surface">Weekly Reminders</h4>
                  <p className="text-[11px] text-[#3d4a42] mt-0.5">Receive a weekly digest of carbon scores, Scope emissions trends, and pending acknowledgements.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setNotifReminders(!notifReminders)}
                  className="text-primary hover:scale-105 transition-transform"
                >
                  {notifReminders ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8 text-slate-400" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-max px-6 py-2.5 bg-primary hover:bg-primary-container text-white font-heading font-bold text-xs rounded-xl flex items-center gap-2 cursor-pointer shadow-md self-end"
            >
              <Save className="w-4 h-4" />
              <span>SAVE ALERTS</span>
            </button>
          </form>
        )}

        {activeTab === 'preferences' && (
          <form onSubmit={handleSavePreferences} className="flex flex-col gap-6">
            <h3 className="font-heading font-bold text-lg text-on-surface flex items-center gap-2 mb-2">
              <Eye className="w-5 h-5 text-primary" />
              Odoo native ESG configurations
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Auto Carbon Calculation */}
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200/50">
                <div>
                  <h4 className="text-xs font-extrabold text-on-surface">Auto Emission Calculations</h4>
                  <p className="text-[11px] text-[#3d4a42] mt-0.5">Natively sync Odoo transactions to automate emission logs.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setAutoCalculations(!autoCalculations)}
                  className="text-primary hover:scale-105 transition-transform"
                >
                  {autoCalculations ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8 text-slate-400" />}
                </button>
              </div>

              {/* Theme Settings */}
              <div className="flex flex-col gap-1.5 p-4 bg-slate-50 rounded-xl border border-slate-200/50">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Appearance Theme</label>
                <select
                  value={appTheme}
                  onChange={(e) => setAppTheme(e.target.value)}
                  className="border border-[#bccac0] focus:border-primary bg-white rounded-lg p-2 text-xs outline-none mt-1"
                >
                  <option value="light">Light Mode (Google Stitch Theme)</option>
                  <option value="dark">Dark Mode (Futuristic Tech)</option>
                  <option value="system">System Default</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-max px-6 py-2.5 bg-primary hover:bg-primary-container text-white font-heading font-bold text-xs rounded-xl flex items-center gap-2 cursor-pointer shadow-md self-end"
            >
              <Save className="w-4 h-4" />
              <span>SAVE CONFIGURATION</span>
            </button>
          </form>
        )}
      </div>

    </div>
  );
}
