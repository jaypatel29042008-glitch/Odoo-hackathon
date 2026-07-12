import { useState } from 'react';
import { Truck, ShieldCheck, CheckCircle2, AlertTriangle, FileText, Search, Filter, ChevronRight } from 'lucide-react';

interface Supplier {
  id: string;
  name: string;
  location: string;
  industry: string;
  grade: string;
  emissions: string;
  certified: boolean;
}

const sampleSuppliers: Supplier[] = [
  { id: 'sup-1', name: 'Surat Textile Logistics Ltd', location: 'Surat, Gujarat', industry: 'Logistics', grade: 'A', emissions: '2350 kg CO2e/ton', certified: true },
  { id: 'sup-2', name: 'Pune Carbon Steels Private Ltd', location: 'Pune, Maharashtra', industry: 'Raw Materials', grade: 'B+', emissions: '8410 kg CO2e/ton', certified: true },
  { id: 'sup-3', name: 'Bengaluru Silicon Castings', location: 'Bengaluru, Karnataka', industry: 'Electronics', grade: 'C', emissions: '12450 kg CO2e/ton', certified: false },
  { id: 'sup-4', name: 'Mahindra Logistics Logistics', location: 'Mumbai, Maharashtra', industry: 'Logistics', grade: 'A', emissions: '1920 kg CO2e/ton', certified: true }
];

export default function SupplierAnalysisView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterIndustry, setFilterIndustry] = useState('All');
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(sampleSuppliers[0]);

  const filteredSuppliers = sampleSuppliers.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesInd = filterIndustry === 'All' || s.industry === filterIndustry;
    return matchesSearch && matchesInd;
  });

  return (
    <div className="p-8 max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 h-full overflow-y-auto pb-24 custom-scrollbar">
      
      {/* Left Column: Suppliers Directory */}
      <div className="flex-grow flex flex-col gap-6 lg:w-[55%]">
        <div>
          <h2 className="font-heading font-extrabold text-2xl text-on-surface">Supplier Performance (Scope 3)</h2>
          <p className="text-on-surface-variant text-xs mt-1 font-medium">Verify vendor ESG certificates and audit supply chain direct emissions.</p>
        </div>

        {/* Directory Filters */}
        <div className="flex flex-col sm:flex-row gap-4 bg-white border border-[#bccac0]/40 rounded-2xl p-4 shadow-sm items-center">
          <div className="relative w-full sm:flex-grow">
            <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search vendor name or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-[#bccac0]/60 focus:border-primary rounded-lg pl-9 pr-4 py-2.5 text-xs outline-none transition-colors"
            />
          </div>

          <select
            value={filterIndustry}
            onChange={(e) => setFilterIndustry(e.target.value)}
            className="border border-[#bccac0] focus:border-primary bg-white rounded-lg p-2.5 text-xs outline-none w-full sm:w-40 shrink-0"
          >
            <option value="All">All Sectors</option>
            <option value="Logistics">Logistics</option>
            <option value="Raw Materials">Raw Materials</option>
            <option value="Electronics">Electronics</option>
          </select>
        </div>

        {/* Cards list */}
        <div className="flex flex-col gap-4">
          {filteredSuppliers.map((sup) => (
            <div
              key={sup.id}
              onClick={() => setSelectedSupplier(sup)}
              className={`bg-white border rounded-2xl p-5 shadow-sm flex items-center justify-between gap-4 cursor-pointer transition-all duration-200 hover:scale-[1.01] ${
                selectedSupplier?.id === sup.id ? 'border-primary/40 shadow-md bg-[#f0f4f8]/30' : 'border-[#bccac0]/40'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/50 flex items-center justify-center shrink-0 text-slate-500">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-on-surface">{sup.name}</h4>
                  <p className="text-[10px] font-mono text-slate-400 mt-0.5">{sup.location} • {sup.industry}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-right shrink-0">
                <div>
                  <p className="text-[10px] font-mono text-slate-400 uppercase">ESG Grade</p>
                  <p className="text-sm font-extrabold text-primary">{sup.grade}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Supplier Detail Profile Panel */}
      <div className="lg:w-[45%] shrink-0">
        {selectedSupplier ? (
          <div className="bg-white border border-[#bccac0]/40 rounded-2xl shadow-sm overflow-hidden flex flex-col p-6 sm:p-8 gap-6 sticky top-0">
            
            {/* Header info */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider">Vendor ESG Profile</span>
              <h3 className="font-heading font-extrabold text-xl text-on-surface">{selectedSupplier.name}</h3>
              <p className="text-xs text-on-surface-variant font-mono">{selectedSupplier.location}</p>
            </div>

            <div className="h-px bg-slate-100" />

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/50">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Carbon Intensity</span>
                <span className="text-xs font-bold text-error mt-1 block">{selectedSupplier.emissions}</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/50">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">ESG Grade Rating</span>
                <span className="text-xs font-bold text-primary mt-1 block">{selectedSupplier.grade}</span>
              </div>
            </div>

            {/* Certification Status */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/50 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-on-surface">ISO 14001 Certification</span>
                <p className="text-[10px] text-slate-500 mt-0.5">Audited Environmental Management System</p>
              </div>

              {selectedSupplier.certified ? (
                <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-bold rounded-lg flex items-center gap-1 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Certified</span>
                </span>
              ) : (
                <span className="px-3 py-1 bg-red-50 border border-red-200 text-error text-xs font-bold rounded-lg flex items-center gap-1 shrink-0">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Missing</span>
                </span>
              )}
            </div>

            <div className="h-px bg-slate-100" />

            {/* Action buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  alert(`Requesting updated carbon intensity reports from ${selectedSupplier.name}... Link sent.`);
                }}
                className="w-full py-3 bg-primary hover:bg-primary-container text-white font-heading font-bold text-xs rounded-xl shadow-md cursor-pointer transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Request Carbon Audit</span>
              </button>
              
              <button
                onClick={() => {
                  if (selectedSupplier.certified) {
                    alert('Certificate Audit: verified ISO 14001 certification. Matches global standards.');
                  } else {
                    alert('Action required: dispatching notice of ISO 14001 certification requirement to procurement officer.');
                  }
                }}
                className="w-full py-2.5 border border-[#bccac0]/60 text-[#3d4a42] hover:bg-slate-50 font-heading font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                Verify Certification
              </button>
            </div>

          </div>
        ) : (
          <div className="p-12 text-center text-slate-400 font-mono bg-white border border-[#bccac0]/40 rounded-2xl">
            Select a vendor from the list to display details.
          </div>
        )}
      </div>

    </div>
  );
}
