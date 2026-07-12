import { useState } from 'react';
import { Leaf, Lock, Mail, User, ShieldCheck, ArrowRight, Eye, EyeOff } from 'lucide-react';

interface AuthViewProps {
  onLoginSuccess: (userData: any) => void;
  onBackToLanding?: () => void;
}

type Mode = 'login' | 'signup' | 'forgot' | 'verify' | 'reset';

export default function AuthView({ onLoginSuccess, onBackToLanding }: AuthViewProps) {
  const [mode, setMode] = useState<Mode>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // Form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('Tata Motors Pune Plant');
  const [verificationCode, setVerificationCode] = useState('');

  const validateEmail = (emailStr: string) => {
    return /\S+@\S+\.\S+/.test(emailStr);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    if (!validateEmail(email)) {
      setError('Please enter a valid corporate email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setIsLoading(true);
    
    // Simulate login request
    setTimeout(() => {
      setIsLoading(false);
      // Hardcode a successful login for our Indian context
      const userData = {
        name: email.toLowerCase().includes('amit') ? 'Amit Sharma' : 'Amit Sharma',
        role: 'Sustainability Lead',
        email: email,
        company: company,
        department: 'Manufacturing',
        xp: 2450,
        badges: ['Green Champion', 'Eco Driver', 'Paperless Pioneer'],
        points: 1200
      };
      
      onLoginSuccess(userData);
    }, 1000);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid corporate email.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccess('Registration successful! Verification code sent to your email.');
      setMode('verify');
    }, 1200);
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateEmail(email)) {
      setError('Please enter a valid registered email.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccess('Password reset link sent to your email.');
      setMode('reset');
    }, 1000);
  };

  const handleVerification = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (verificationCode.length !== 6) {
      setError('Verification code must be 6 digits.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccess('Email verified successfully! You can now log in.');
      setMode('login');
    }, 1000);
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password.length < 6) {
      setError('New password must be at least 6 characters.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccess('Password reset successfully! Log in with your new credentials.');
      setMode('login');
    }, 1000);
  };

  return (
    <div className="h-screen w-screen flex bg-surface items-center justify-center p-6 relative">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-[radial-gradient(circle_at_20%_20%,#eef4ff_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-[radial-gradient(circle_at_80%_80%,#e5eeff_0%,transparent_50%)] pointer-events-none" />

      {/* Main Authentication Card */}
      <div className="w-full max-w-4xl bg-white border border-outline-variant/40 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/80 flex flex-col md:flex-row relative z-10 min-h-[540px]">
        {/* Left Side: Brand Panel */}
        <div className="w-full md:w-[42%] bg-primary p-10 flex flex-col justify-between text-white relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary-container/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
              <Leaf className="w-5 h-5 text-primary-fixed" />
            </div>
            <span className="font-heading font-extrabold text-xl tracking-tight">EcoSphere</span>
          </div>

          <div className="my-auto py-12 relative z-10">
            <h2 className="font-heading font-bold text-3xl leading-tight mb-4">
              Automate Enterprise ESG Natively
            </h2>
            <p className="text-white/85 text-sm leading-relaxed">
              Log transactions, track Scope 1/2/3 emissions, and verify CSR metrics directly inside your Odoo ERP.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono text-primary-fixed/80 bg-white/5 border border-white/10 px-3 py-2 rounded-xl w-max relative z-10">
            <ShieldCheck className="w-4 h-4 text-primary-fixed" />
            <span>SEBI BRSR AUDIT READY</span>
          </div>
        </div>

        {/* Right Side: Interactive Forms */}
        <div className="w-full md:w-[58%] p-8 sm:p-10 flex flex-col justify-center">
          {/* Header */}
          <div className="mb-8">
            {onBackToLanding && (
              <button 
                type="button" 
                onClick={onBackToLanding} 
                className="text-[11px] font-mono text-slate-500 hover:text-primary flex items-center gap-1 mb-4 font-bold cursor-pointer transition-colors"
              >
                ← Back to Landing Page
              </button>
            )}
            <h3 className="font-heading font-bold text-2xl text-on-surface">
              {mode === 'login' && 'Welcome Back'}
              {mode === 'signup' && 'Create Account'}
              {mode === 'forgot' && 'Reset Password'}
              {mode === 'verify' && 'Verify Email'}
              {mode === 'reset' && 'Create New Password'}
            </h3>
            <p className="text-on-surface-variant text-xs mt-1.5 font-medium">
              {mode === 'login' && 'Log in to your Odoo ESG manager portal.'}
              {mode === 'signup' && 'Sign up for the enterprise pilot program.'}
              {mode === 'forgot' && 'Enter your registered email to request a reset link.'}
              {mode === 'verify' && 'Enter the 6-digit code sent to your email.'}
              {mode === 'reset' && 'Choose a secure password for your account.'}
            </p>
          </div>

          {/* Success / Error Alerts */}
          {error && (
            <div className="mb-6 p-4 bg-error-container/30 border border-error/20 text-error rounded-xl text-xs font-semibold leading-relaxed">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-6 p-4 bg-eco-100/30 border border-primary/20 text-primary rounded-xl text-xs font-semibold leading-relaxed">
              {success}
            </div>
          )}

          {/* Form switch */}
          {mode === 'login' && (
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Corporate Email</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="amit.sharma@tata.com"
                    className="w-full bg-slate-50 border border-outline-variant/60 focus:border-primary rounded-xl pl-11 pr-4 py-3.5 text-xs text-on-surface outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Password</label>
                  <button type="button" onClick={() => setMode('forgot')} className="text-[10px] font-mono font-bold text-primary hover:underline">Forgot Password?</button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-slate-50 border border-outline-variant/60 focus:border-primary rounded-xl pl-11 pr-11 py-3.5 text-xs text-on-surface outline-none transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-xl bg-primary hover:bg-primary-container text-white font-heading font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 mt-2 disabled:opacity-50 cursor-pointer"
              >
                <span>{isLoading ? 'Authenticating...' : 'LOG IN'}</span>
                {!isLoading && <ArrowRight className="w-4 h-4" />}
              </button>

              <p className="text-center text-xs text-on-surface-variant mt-4">
                Don't have an account?{' '}
                <button type="button" onClick={() => setMode('signup')} className="font-bold text-primary hover:underline">Sign up now</button>
              </p>
            </form>
          )}

          {mode === 'signup' && (
            <form onSubmit={handleSignup} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Amit Sharma"
                    className="w-full bg-slate-50 border border-outline-variant/60 focus:border-primary rounded-xl pl-11 pr-4 py-3.5 text-xs text-on-surface outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Corporate Email</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="amit.sharma@tatasustainability.in"
                    className="w-full bg-slate-50 border border-outline-variant/60 focus:border-primary rounded-xl pl-11 pr-4 py-3.5 text-xs text-on-surface outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Odoo Company Workspace</label>
                <select
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-slate-50 border border-outline-variant/60 focus:border-primary rounded-xl px-4 py-3.5 text-xs text-on-surface outline-none transition-colors"
                >
                  <option>Tata Motors Pune Plant</option>
                  <option>Reliance Industries Surat</option>
                  <option>Infosys Bengaluru Headquarters</option>
                  <option>Mahindra & Mahindra Mumbai</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min 6 characters"
                    className="w-full bg-slate-50 border border-outline-variant/60 focus:border-primary rounded-xl pl-11 pr-4 py-3.5 text-xs text-on-surface outline-none transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-xl bg-primary hover:bg-primary-container text-white font-heading font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 mt-2 disabled:opacity-50 cursor-pointer"
              >
                <span>{isLoading ? 'Registering...' : 'REGISTER'}</span>
                {!isLoading && <ArrowRight className="w-4 h-4" />}
              </button>

              <p className="text-center text-xs text-on-surface-variant mt-4">
                Already have an account?{' '}
                <button type="button" onClick={() => setMode('login')} className="font-bold text-primary hover:underline">Log in</button>
              </p>
            </form>
          )}

          {mode === 'forgot' && (
            <form onSubmit={handleForgotPassword} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Registered Email</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="amit.sharma@tata.com"
                    className="w-full bg-slate-50 border border-outline-variant/60 focus:border-primary rounded-xl pl-11 pr-4 py-3.5 text-xs text-on-surface outline-none transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-xl bg-primary hover:bg-primary-container text-white font-heading font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 mt-2 disabled:opacity-50 cursor-pointer"
              >
                <span>{isLoading ? 'Sending link...' : 'REQUEST LINK'}</span>
                {!isLoading && <ArrowRight className="w-4 h-4" />}
              </button>

              <button type="button" onClick={() => setMode('login')} className="text-center text-xs font-bold text-primary hover:underline mt-4">Back to login</button>
            </form>
          )}

          {mode === 'verify' && (
            <form onSubmit={handleVerification} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">6-Digit Verification Code</label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ''))}
                  placeholder="123456"
                  className="w-full bg-slate-50 border border-outline-variant/60 focus:border-primary rounded-xl py-3.5 text-center text-lg font-mono tracking-widest text-on-surface outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-xl bg-primary hover:bg-primary-container text-white font-heading font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 mt-2 disabled:opacity-50 cursor-pointer"
              >
                <span>{isLoading ? 'Verifying...' : 'VERIFY CODE'}</span>
              </button>

              <button type="button" onClick={() => setMode('login')} className="text-center text-xs font-bold text-primary hover:underline mt-4">Cancel and login</button>
            </form>
          )}

          {mode === 'reset' && (
            <form onSubmit={handleResetPassword} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">New Secure Password</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min 6 characters"
                    className="w-full bg-slate-50 border border-outline-variant/60 focus:border-primary rounded-xl pl-11 pr-4 py-3.5 text-xs text-on-surface outline-none transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-xl bg-primary hover:bg-primary-container text-white font-heading font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 mt-2 disabled:opacity-50 cursor-pointer"
              >
                <span>{isLoading ? 'Resetting password...' : 'RESET PASSWORD'}</span>
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
