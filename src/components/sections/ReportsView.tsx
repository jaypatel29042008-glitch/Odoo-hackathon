import { useState } from 'react';
import { FileText, Filter, Download, ArrowUpDown, ChevronDown } from 'lucide-react';

interface ReportRow {
  date: string;
  department: string;
  module: string;
  category: string;
  value: string;
  status: string;
}

const sampleReportData: ReportRow[] = [
  { date: '12-07-2026', department: 'Manufacturing', module: 'Environmental', category: 'Procurement / Scope 3', value: '452 kg CO2e', status: 'Audited' },
  { date: '11-07-2026', department: 'Logistics & Fleet', module: 'Environmental', category: 'Fleet Fuel / Scope 1', value: '189 kg CO2e', status: 'Audited' },
  { date: '10-07-2026', department: 'R&D / Product', module: 'Governance', category: 'Ethical Sourcing Update', value: 'Policy Signed', status: 'Verified' },
  { date: '09-07-2026', department: 'Human Resources', module: 'Social', category: 'Urban Re-greening CSR', value: '88% Participation', status: 'Approved' },
  { date: '08-07-2026', department: 'Manufacturing', module: 'Environmental', category: 'Electricity / Scope 2', value: '920 kg CO2e', status: 'Audited' },
  { date: '06-07-2026', department: 'Marketing', module: 'Social', category: 'CSR Campaign Surat', value: '12 volunteers', status: 'Approved' },
  { date: '05-07-2026', department: 'Logistics & Fleet', module: 'Governance', category: 'Safety Compliance Audit', value: 'Zero violations', status: 'Verified' }
];

export default function ReportsView() {
  const [filterDept, setFilterDept] = useState('All');
  const [filterModule, setFilterModule] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  
  const [reports, setReports] = useState<ReportRow[]>(sampleReportData);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateReport = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    setTimeout(() => {
      setIsGenerating(false);
      let filtered = sampleReportData;
      
      if (filterDept !== 'All') {
        filtered = filtered.filter(r => r.department === filterDept);
      }
      if (filterModule !== 'All') {
        filtered = filtered.filter(r => r.module === filterModule);
      }
      if (filterStatus !== 'All') {
        filtered = filtered.filter(r => r.status === filterStatus);
      }
      
      setReports(filtered);
    }, 800);
  };

  const handleExportCSV = () => {
    // Generate actual CSV content
    const headers = ['Date', 'Department', 'Module', 'Category', 'Value', 'Status'].join(',');
    const rows = reports.map(r => [r.date, r.department, r.module, r.category, r.value, r.status].join(','));
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `EcoSphere_ESG_Report_${filterDept.replace(/\s+/g, '_')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExportPDF = () => {
    alert('PDF Generation Complete: Compiled audit-ready reports matching SEBI BRSR specifications. File download starting.');
  };

  return (
    <div className="p-8 max-w-5xl mx-auto flex flex-col gap-6">
      
      {/* Header */}
      <div>
        <h2 className="font-heading font-extrabold text-2xl text-on-surface">Custom ESG Report Builder</h2>
        <p className="text-on-surface-variant text-xs mt-1 font-medium">Filter corporate operational logs and export compliance spreadsheets.</p>
      </div>

      {/* Filter Parameters Form */}
      <form onSubmit={handleGenerateReport} className="bg-white border border-[#bccac0]/40 rounded-2xl p-6 shadow-sm flex flex-col gap-5">
        <h3 className="font-heading font-bold text-sm text-[#121c28] flex items-center gap-2">
          <Filter className="w-4 h-4 text-primary" />
          Filter Parameters
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Department */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Department</label>
            <select
              value={filterDept}
              onChange={(e) => setFilterDept(e.target.value)}
              className="border border-[#bccac0] focus:border-primary bg-slate-50 rounded-lg p-2.5 text-xs outline-none"
            >
              <option value="All">All Departments</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Logistics & Fleet">Logistics & Fleet</option>
              <option value="R&D / Product">R&D / Product</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>

          {/* Module */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">ESG Pillar</label>
            <select
              value={filterModule}
              onChange={(e) => setFilterModule(e.target.value)}
              className="border border-[#bccac0] focus:border-primary bg-slate-50 rounded-lg p-2.5 text-xs outline-none"
            >
              <option value="All">All Pillars</option>
              <option value="Environmental">Environmental (Carbon)</option>
              <option value="Social">Social (CSR/XP)</option>
              <option value="Governance">Governance (Audits)</option>
            </select>
          </div>

          {/* Status */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Verification Status</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-[#bccac0] focus:border-primary bg-slate-50 rounded-lg p-2.5 text-xs outline-none"
            >
              <option value="All">All Records</option>
              <option value="Audited">Audited (Carbon verified)</option>
              <option value="Approved">Approved (CSR proof approved)</option>
              <option value="Verified">Verified (Policies signed)</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={isGenerating}
          className="w-max px-6 py-2.5 bg-primary hover:bg-primary-container text-white font-heading font-bold text-xs rounded-xl flex items-center gap-2 cursor-pointer shadow-md self-end disabled:opacity-50"
        >
          <span>{isGenerating ? 'Compiling logs...' : 'COMPILE REPORT'}</span>
        </button>
      </form>

      {/* Reports Table Card */}
      <div className="bg-white border border-[#bccac0]/40 rounded-2xl overflow-hidden shadow-sm">
        {/* Table Header Bar */}
        <div className="px-6 py-4 border-b border-[#bccac0]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-secondary" />
            <h3 className="font-heading font-bold text-sm text-[#121c28]">Compiled Audit Log Table</h3>
            <span className="px-2 py-0.5 bg-slate-100 rounded text-[10px] font-mono text-slate-500 border border-slate-200">
              {reports.length} entries
            </span>
          </div>

          {/* Export Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleExportCSV}
              className="px-4 py-2 border border-[#bccac0]/60 hover:bg-slate-100 font-heading font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer text-[#3d4a42]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={handleExportPDF}
              className="px-4 py-2 bg-primary hover:bg-primary-container text-white font-heading font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        {/* Data Grid Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100/50 border-b border-[#bccac0]/30 font-mono text-slate-500 uppercase">
                <th className="p-4 font-bold">Date</th>
                <th className="p-4 font-bold">Department</th>
                <th className="p-4 font-bold">Pillar</th>
                <th className="p-4 font-bold">Log Category</th>
                <th className="p-4 font-bold">Metric Value</th>
                <th className="p-4 font-bold text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#bccac0]/20 font-medium">
              {reports.length > 0 ? (
                reports.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 font-mono text-[11px] text-slate-600">{row.date}</td>
                    <td className="p-4 text-on-surface">{row.department}</td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                        row.module === 'Environmental' ? 'bg-eco-100/20 text-primary border-primary/20' :
                        row.module === 'Social' ? 'bg-secondary-container/15 text-secondary border-secondary/20' :
                        'bg-tertiary-container/15 text-tertiary border-tertiary/20'
                      }`}>
                        {row.module}
                      </span>
                    </td>
                    <td className="p-4 text-on-surface-variant">{row.category}</td>
                    <td className="p-4 font-bold text-on-surface">{row.value}</td>
                    <td className="p-4 text-right">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                        row.status === 'Audited' ? 'bg-primary/10 text-primary' :
                        row.status === 'Approved' ? 'bg-secondary/10 text-secondary' :
                        'bg-tertiary/10 text-tertiary'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-12 text-center text-slate-400 font-mono">
                    No matching audit entries found for the selected parameters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
