import { useState } from 'react';
import { Plus, Search, Filter, Leaf, Trash2 } from 'lucide-react';

interface Transaction {
  id: string;
  date: string;
  department: string;
  category: string;
  amount: string;
  factor: string;
  notes: string;
}

interface TransactionsViewProps {
  transactions: Transaction[];
  onAddTransaction: (t: Transaction) => void;
  onOpenAddModal: () => void;
  onDeleteTransaction: (id: string) => void;
}

export default function TransactionsView({ 
  transactions, 
  onOpenAddModal, 
  onDeleteTransaction 
}: TransactionsViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [scopeFilter, setScopeFilter] = useState('All');

  const filteredTransactions = transactions.filter(t => {
    const matchesSearch = 
      t.department.toLowerCase().includes(searchTerm.toLowerCase()) || 
      t.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.notes.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesScope = 
      scopeFilter === 'All' || 
      (scopeFilter === 'Scope 1' && t.category.includes('Fleet')) ||
      (scopeFilter === 'Scope 2' && t.category.includes('Electricity')) ||
      (scopeFilter === 'Scope 3' && (t.category.includes('Procurement') || t.category.includes('Operations')));

    return matchesSearch && matchesScope;
  });

  return (
    <div className="p-8 max-w-6xl mx-auto flex flex-col gap-6 h-full overflow-y-auto pb-24 custom-scrollbar">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="font-heading font-extrabold text-2xl text-on-surface">Carbon Ledger Transactions</h2>
          <p className="text-on-surface-variant text-xs mt-1 font-medium">Natively binding ERP transactions to carbon emission calculations.</p>
        </div>
        <button
          onClick={onOpenAddModal}
          className="px-5 py-2.5 bg-primary hover:bg-primary-container text-white font-heading font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md transition-all active:scale-95 shrink-0"
        >
          <Plus className="w-4.5 h-4.5" />
          <span>ADD TRANSACTION</span>
        </button>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col sm:flex-row gap-4 bg-white border border-[#bccac0]/40 rounded-2xl p-4 shadow-sm items-center">
        {/* Search */}
        <div className="relative w-full sm:flex-grow">
          <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search department, category, notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 border border-[#bccac0]/60 focus:border-primary rounded-lg pl-9 pr-4 py-2.5 text-xs outline-none transition-colors"
          />
        </div>

        {/* Scope Filter */}
        <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
          <Filter className="w-4 h-4 text-slate-400" />
          <select
            value={scopeFilter}
            onChange={(e) => setScopeFilter(e.target.value)}
            className="border border-[#bccac0] focus:border-primary bg-white rounded-lg p-2.5 text-xs outline-none w-full sm:w-40"
          >
            <option value="All">All Scopes</option>
            <option value="Scope 1">Scope 1 (Direct)</option>
            <option value="Scope 2">Scope 2 (Electricity)</option>
            <option value="Scope 3">Scope 3 (Procurement)</option>
          </select>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white border border-[#bccac0]/40 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-[#bccac0]/30 font-mono text-slate-500 uppercase">
                <th className="p-4 font-bold">Date</th>
                <th className="p-4 font-bold">Department</th>
                <th className="p-4 font-bold">Category</th>
                <th className="p-4 font-bold text-center">Value</th>
                <th className="p-4 font-bold text-center">Factor</th>
                <th className="p-4 font-bold text-center">Total Emissions</th>
                <th className="p-4 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#bccac0]/20 font-medium">
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((tx) => {
                  const calculatedEmissions = (parseFloat(tx.amount) * parseFloat(tx.factor)).toFixed(1);
                  return (
                    <tr key={tx.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-4 font-mono text-[11px] text-slate-500">{tx.date}</td>
                      <td className="p-4 text-on-surface">{tx.department}</td>
                      <td className="p-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                          tx.category.includes('Fleet') ? 'bg-amber-100/35 text-tertiary border-tertiary/20' :
                          tx.category.includes('Electricity') ? 'bg-secondary-container/15 text-secondary border-secondary/20' :
                          'bg-primary-container/15 text-primary border-primary/20'
                        }`}>
                          {tx.category}
                        </span>
                      </td>
                      <td className="p-4 text-center font-mono">{tx.amount}</td>
                      <td className="p-4 text-center font-mono text-slate-500">{tx.factor}</td>
                      <td className="p-4 text-center font-mono font-bold text-error">
                        {calculatedEmissions} kg CO2e
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => onDeleteTransaction(tx.id)}
                          className="p-1.5 hover:bg-red-50 rounded-lg text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
                          title="Delete Entry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={7} className="p-12 text-center text-slate-400 font-mono">
                    No matching carbon transactions logged.
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
