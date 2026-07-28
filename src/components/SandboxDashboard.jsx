"use client";
import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Briefcase,
  Users,
  CheckSquare,
  Clock,
  Receipt,
  FileText,
  Settings,
  Search,
  Plus,
  Bell,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  TrendingUp,
  MoreHorizontal
} from 'lucide-react';

function SandboxDashboard({ titleColor = "text-gray-900" }) {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [typedText, setTypedText] = useState('');
  const fullText = 'Experience Lumeo.crm';

  useEffect(() => {
    setMounted(true);
    let currentText = '';
    let i = 0;
    const interval = setInterval(() => {
      currentText += fullText[i];
      setTypedText(currentText);
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const navGroups = [
    {
      title: 'YOUR HUB',
      items: [
        { id: 'dashboard', icon: <LayoutDashboard size={16} />, label: 'Dashboard' },
        { id: 'my-deals', icon: <Briefcase size={16} />, label: 'My Deals' },
        { id: 'pipeline', icon: <TrendingUp size={16} />, label: 'Pipeline' },
        { id: 'tasks', icon: <CheckSquare size={16} />, label: 'Tasks', badge: '3' },
      ]
    },
    {
      title: 'PLATFORM',
      items: [
        { id: 'timesheets', icon: <Clock size={16} />, label: 'Timesheets' },
        { id: 'expenses', icon: <Receipt size={16} />, label: 'Expenses' },
        { id: 'invoices', icon: <FileText size={16} />, label: 'Invoices' },
        { id: 'clients', icon: <Users size={16} />, label: 'Clients' },
      ]
    }
  ];

  if (!mounted) {
    return <div className="max-w-7xl mx-auto h-[800px] bg-gray-100 rounded-2xl animate-pulse"></div>;
  }

  return (
    <>
      <div className="max-w-7xl mx-auto mb-8 text-center">
        <div className="inline-block bg-orange-900/20 text-brand-orange px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-brand-orange/30 shadow-sm mb-4">
          Sandbox Environment
        </div>
        <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-4 min-h-[1.2em] ${titleColor}`}>{typedText}</h2>
        <p className={`text-lg max-w-2xl mx-auto ${titleColor === 'text-white' ? 'text-gray-400' : 'text-gray-600'}`}>
          The top CRM software in Kerala has powerful capabilities and was created especially for high-growth teams trying to maximize sales operations.
        </p>
      </div>

      {/* Mock CRM Dashboard Container */}
      <div className="max-w-7xl mx-auto bg-[#FAF8F5] rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col md:flex-row h-auto md:h-[800px] text-gray-800 font-sans">

        {/* Sidebar */}
        <div className="w-full md:w-64 bg-[#FDFBF7] flex flex-col border-r border-gray-200 shrink-0">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-[#2A2A2A] text-white font-serif font-bold text-sm w-6 h-6 flex items-center justify-center rounded">
                L
              </div>
              <span className="font-serif font-bold text-sm">Lumeo</span>
            </div>
            <ChevronDown size={14} className="text-gray-400" />
          </div>

          {/* Profile Selector */}
          <div className="p-4">
            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer border border-transparent hover:border-gray-200 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-xs shadow-sm">
                  C
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold">CreativeDigital</span>
                  <span className="text-[10px] text-gray-500">Active Agency</span>
                </div>
              </div>
              <ChevronRight size={14} className="text-gray-400" />
            </div>
          </div>

          {/* Navigation Lists */}
          <div className="flex-grow overflow-y-auto px-4 pb-4 space-y-6">
            {navGroups.map((group, gIdx) => (
              <div key={gIdx}>
                <div className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2 ml-2">
                  {group.title}
                </div>
                <div className="space-y-0.5">
                  {group.items.map((item) => (
                    <button suppressHydrationWarning
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === item.id
                        ? 'bg-[#2A2A2A] text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`${activeTab === item.id ? 'text-brand-orange' : 'text-gray-400'}`}>
                          {item.icon}
                        </span>
                        {item.label}
                      </div>
                      {item.badge && (
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${activeTab === item.id ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-500'}`}>
                          {item.badge}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-200">
            <button suppressHydrationWarning className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors">
              <Settings size={16} className="text-gray-400" />
              Settings
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow flex flex-col overflow-hidden">
          {/* Topbar */}
          <div className="h-14 bg-[#FAF8F5] border-b border-gray-200 flex items-center justify-between px-6 shrink-0">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="font-medium text-gray-800">Active Agency</span>
              <span className="text-gray-400">/</span>
              <span className="capitalize">{activeTab.replace('-', ' ')}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative hidden md:block">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input suppressHydrationWarning
                  type="text"
                  placeholder="Search..."
                  className="pl-9 pr-4 py-1.5 bg-white border border-gray-200 rounded-md text-xs focus:outline-none focus:border-gray-300 w-48"
                />
              </div>
              <button suppressHydrationWarning className="bg-[#2A2A2A] hover:bg-black text-white px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors">
                <Plus size={14} /> New
              </button>
              <div className="flex items-center gap-2 ml-2 text-gray-400">
                <button suppressHydrationWarning className="hover:text-gray-600 p-1"><Bell size={16} /></button>
                <button suppressHydrationWarning className="hover:text-gray-600 p-1"><HelpCircle size={16} /></button>
              </div>
              <div className="w-7 h-7 rounded-full bg-gray-200 ml-2 flex items-center justify-center overflow-hidden border border-gray-300 cursor-pointer">
                <img src="/images/user-avatar.png" alt="User" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="flex-grow overflow-auto p-8 relative">
            {/* Background abstract element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFEFE5] rounded-full filter blur-[80px] opacity-50 -z-10 pointer-events-none"></div>

            {/* Greeting */}
            <div className="mb-8">
              <h2 className="text-5xl font-serif text-gray-800 leading-tight">
                Good morning,<br />
                <span className="text-brand-orange font-bold">john.</span>
              </h2>
              <p className="text-sm text-gray-500 font-medium tracking-wide uppercase mt-4">
                Here's what's happening across your active contracts.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {[
                { title: 'Active Contracts', value: '40', sub: '', stroke: '#E04B1E', data: 'M0,10 L10,10 L20,5 L30,5' },
                { title: 'Conversion Rate', value: '45%', sub: '', stroke: '#E04B1E', data: 'M0,15 L10,15 L20,5 L30,0' },
                { title: 'Lost', value: '1', sub: '', stroke: '#10B981', data: 'M0,5 L10,5 L20,15 L30,15' },
                { title: 'Revenue', value: '0.00', sub: '', stroke: '#E04B1E', data: 'M0,15 L10,10 L20,10 L30,5' },
              ].map((metric, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group hover:border-gray-300 transition-colors">
                  <div className="flex justify-between items-start z-10">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{metric.title}</span>
                    <span className="bg-[#F0FDF4] text-emerald-600 text-[10px] font-bold px-1.5 py-0.5 rounded border border-emerald-100">
                      Active
                    </span>
                  </div>
                  <div className="z-10 flex items-baseline gap-1">
                    <span className="text-3xl font-serif font-bold text-gray-800">{metric.value}</span>
                  </div>
                  {/* Mini Sparkline Chart Mock */}
                  <div className="absolute bottom-4 right-4 w-12 h-6 opacity-60 group-hover:opacity-100 transition-opacity">
                    <svg viewBox="0 0 30 20" className="w-full h-full overflow-visible">
                      <path d={metric.data} fill="none" stroke={metric.stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      {/* Dot at the end */}
                      <circle cx="30" cy={metric.data.split(' ').pop().split(',')[1]} r="2" fill={metric.stroke} />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Pipeline Section */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
              <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between bg-[#FDFBF7]">
                <h3 className="font-bold text-sm flex items-center gap-2">
                  Pipeline <span className="text-xs text-gray-400 font-normal">Active Deals</span>
                </h3>
                <div className="flex items-center gap-2">
                  <button suppressHydrationWarning className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-1 rounded hover:bg-gray-200">Filter</button>
                  <button suppressHydrationWarning className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-1 rounded hover:bg-gray-200">Sort</button>
                  <MoreHorizontal size={14} className="text-gray-400 ml-1" />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FDFBF7] text-gray-500 border-b border-gray-200 uppercase tracking-wider">
                    <tr>
                      <th className="px-5 py-3 font-semibold w-1/3">Deal</th>
                      <th className="px-5 py-3 font-semibold">Owner</th>
                      <th className="px-5 py-3 font-semibold">Stage</th>
                      <th className="px-5 py-3 font-semibold text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { deal: 'Acme Corp Website', owner: 'John Doe', stage: 'Prospect', stageColor: 'bg-blue-50 text-blue-600 border-blue-100', amount: '12,500.00' },
                      { deal: 'SEO Q3 Retainer', owner: 'Sarah Smith', stage: 'Negotiation', stageColor: 'bg-amber-50 text-amber-600 border-amber-100', amount: '4,500.00' },
                      { deal: 'Brand Guidelines', owner: 'John Doe', stage: 'Closed Won', stageColor: 'bg-emerald-50 text-emerald-600 border-emerald-100', amount: '8,000.00' },
                      { deal: 'Social Media Ad Campaign', owner: 'Mike J.', stage: 'Proposal', stageColor: 'bg-purple-50 text-purple-600 border-purple-100', amount: '15,000.00' }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition-colors cursor-pointer group">
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                              <Briefcase size={12} />
                            </div>
                            <span className="font-bold text-gray-800">{row.deal}</span>
                          </div>
                        </td>
                        <td className="px-5 py-4 text-gray-600 flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-gray-200 text-[8px] flex items-center justify-center font-bold text-gray-600">
                            {row.owner.split(' ').map(n => n[0]).join('')}
                          </div>
                          {row.owner}
                        </td>
                        <td className="px-5 py-4">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border ${row.stageColor}`}>
                            {row.stage}
                          </span>
                        </td>
                        <td className="px-5 py-4 font-mono font-bold text-gray-800 text-right">
                          ₹{row.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SandboxDashboard;
