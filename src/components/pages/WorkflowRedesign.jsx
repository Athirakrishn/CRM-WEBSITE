"use client";
import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { ArrowRight, Settings, Users, Zap, CheckCircle2 } from 'lucide-react';
import AnimatedWorkflowDiagram from '../AnimatedWorkflowDiagram';

function WorkflowRedesign() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Redesign Your Workflow';

  useEffect(() => {
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
  return (
    <div className="min-h-screen bg-[#1A1513] font-sans text-[#F4F0EB] flex flex-col relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E04B1E] rounded-full blur-[150px] opacity-25 -translate-y-1/3 translate-x-1/4 pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow pt-16 pb-24 px-8">
          <div className="max-w-7xl mx-auto">
            {/* Animated Workflow Hero Section */}
            <AnimatedWorkflowDiagram />

            {/* Compare section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-24">

              <div className="group bg-gradient-to-br from-[#241d1a] to-[#1c1412] p-10 lg:p-12 rounded-3xl border border-red-900/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden transition-all duration-500 hover:border-red-900/50">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 transition-all duration-700 group-hover:opacity-100 opacity-50"></div>

                <h3 className="text-3xl font-serif font-bold text-gray-300 mb-10 flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-red-900/20 text-red-500 flex items-center justify-center text-lg font-sans border border-red-900/30 shadow-inner">X</div>
                  The Old Way
                </h3>

                <ul className="space-y-6 relative z-10">
                  {[
                    "Chase team members for Friday timesheets",
                    "Manually copy deal data from CRM to billing",
                    "Cross-reference 3 different apps for project status",
                    "Spend 5 hours a week compiling revenue reports"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-gray-500 group-hover:text-gray-400 transition-colors">
                      <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-red-900 shrink-0"></div>
                      <span className="line-through text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="group bg-gradient-to-br from-[#0A2E2C] to-[#051c1a] p-10 lg:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden text-white transform md:-translate-y-4 border border-emerald-900/50 transition-all duration-500 hover:-translate-y-6">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 transition-all duration-700 group-hover:opacity-100 opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 transition-all duration-700 group-hover:opacity-100 opacity-60"></div>

                <h3 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-10 flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-orange to-[#ff844a] text-white flex items-center justify-center text-xl font-sans shadow-[0_0_20px_rgba(255,90,42,0.4)] border border-white/20">✓</div>
                  The Lumeo Way
                </h3>

                <ul className="space-y-6 relative z-10">
                  {[
                    "Timesheets logged automatically from active tasks",
                    "Closed deals instantly generate draft invoices",
                    "Unified dashboard showing project health in real-time",
                    "Live revenue ledgers updated instantly"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-[#E0EAE9]">
                      <CheckCircle2 className="mt-1 text-brand-orange shrink-0 drop-shadow-[0_0_8px_rgba(255,90,42,0.6)]" size={22} />
                      <span className="font-medium text-lg lg:text-xl leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Features Grid */}
            <div className="mt-24 md:mt-32 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">

                {/* Card 1 - Instant Sync */}
                <div className="group relative rounded-2xl border border-[#FF5A2A]/30 bg-[#0B0D10] overflow-hidden flex flex-col h-auto md:h-[500px] shadow-[0_0_30px_rgba(255,90,42,0.05)] hover:border-[#FF5A2A]/60 transition-colors duration-300">
                  {/* Image Area */}
                  <div className="relative h-56 w-full overflow-hidden border-b border-[#FF5A2A]/20">
                    <img src="/images/crm-dashboard-business.webp" alt="Top-CRM-Software-in-Calicut" className="w-full h-full object-cover opacity-70 mix-blend-screen group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] to-transparent"></div>
                  </div>

                  {/* Floating Icon */}
                  <div className="absolute top-6 left-6 w-14 h-14 bg-[#FF5A2A]/10 backdrop-blur-md rounded-xl flex items-center justify-center text-[#FF5A2A] border border-[#FF5A2A]/30 shadow-lg">
                    <Zap size={24} />
                  </div>

                  {/* Content Area */}
                  <div className="px-8 pb-10 pt-6 flex-grow flex flex-col justify-end">
                    <h4 className="text-[28px] font-bold mb-4 text-[#FF5A2A]">Instant Sync</h4>
                    <p className="text-gray-300 text-lg leading-relaxed font-medium">Every module in Lumeo talks to each other. When a deal closes, the project is created and the invoice is drafted.</p>
                  </div>
                </div>

                {/* Card 2 - Custom Automations */}
                <div className="group relative rounded-2xl border border-[#10B981]/30 bg-[#0B0D10] overflow-hidden flex flex-col h-auto md:h-[500px] shadow-[0_0_30px_rgba(16,185,129,0.05)] hover:border-[#10B981]/60 transition-colors duration-300">
                  {/* Image Area */}
                  <div className="relative h-56 w-full overflow-hidden border-b border-[#10B981]/20">
                    <img src="/images/automation-workflows-development.webp" alt="CRM-system-Calicut" className="w-full h-full object-cover opacity-70 mix-blend-screen group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] to-transparent"></div>
                  </div>

                  {/* Floating Icon */}
                  <div className="absolute top-6 left-6 w-14 h-14 bg-[#10B981]/10 backdrop-blur-md rounded-xl flex items-center justify-center text-[#10B981] border border-[#10B981]/30 shadow-lg">
                    <Settings size={24} />
                  </div>

                  {/* Content Area */}
                  <div className="px-8 pb-10 pt-6 flex-grow flex flex-col justify-end">
                    <h4 className="text-[28px] font-bold mb-4 text-[#10B981]">Custom Automations</h4>
                    <p className="text-gray-300 text-lg leading-relaxed font-medium">Build rules that fit your agency. Automatically assign tasks, send client emails, or escalate overdue items.</p>
                  </div>
                </div>

                {/* Card 3 - Team Alignment */}
                <div className="group relative rounded-2xl border border-[#3B82F6]/30 bg-[#0B0D10] overflow-hidden flex flex-col h-auto md:h-[500px] shadow-[0_0_30px_rgba(59,130,246,0.05)] hover:border-[#3B82F6]/60 transition-colors duration-300">
                  {/* Image Area */}
                  <div className="relative h-56 w-full overflow-hidden border-b border-[#3B82F6]/20">
                    <img src="/images/crm-dashboard-meeting.webp" alt="Business-CRM-system-in-Calicut" className="w-full h-full object-cover opacity-70 mix-blend-screen group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] to-transparent"></div>
                  </div>

                  {/* Floating Icon */}
                  <div className="absolute top-6 left-6 w-14 h-14 bg-[#3B82F6]/10 backdrop-blur-md rounded-xl flex items-center justify-center text-[#3B82F6] border border-[#3B82F6]/30 shadow-lg">
                    <Users size={24} />
                  </div>

                  {/* Content Area */}
                  <div className="px-8 pb-10 pt-6 flex-grow flex flex-col justify-end">
                    <h4 className="text-[28px] font-bold mb-4 text-[#3B82F6]">Team Alignment</h4>
                    <p className="text-gray-300 text-lg leading-relaxed font-medium">Keep everyone on the same page with centralized communications, shared files, and unified timelines.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default WorkflowRedesign;
