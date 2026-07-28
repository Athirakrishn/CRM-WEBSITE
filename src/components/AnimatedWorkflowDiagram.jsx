"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, Users, Folder, FileText, LayoutDashboard, DollarSign, CheckCircle2, Zap, Rocket } from 'lucide-react';
import Link from 'next/link';


const AnimatedWorkflowDiagram = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // 6-step sequence
    const timer1 = setTimeout(() => setStep(1), 500);
    const timer2 = setTimeout(() => setStep(2), 1200);
    const timer3 = setTimeout(() => setStep(3), 1900);
    const timer4 = setTimeout(() => setStep(4), 2600);
    const timer5 = setTimeout(() => setStep(5), 3800);
    const timer6 = setTimeout(() => setStep(6), 4600);

    return () => {
      clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3);
      clearTimeout(timer4); clearTimeout(timer5); clearTimeout(timer6);
    };
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto py-16 flex flex-col items-center">

      {/* Main Split Layout */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-16 mb-16 relative z-10">

        {/* Left Content (Steps 1 & 2) */}
        <div className="w-full lg:w-5/12 flex flex-col gap-6">
          <div className={`transition-all duration-1000 ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-5xl lg:text-6xl font-sans font-bold text-white mb-4 tracking-tight leading-tight">
              Redesign Your<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A45] to-[#FF9C45]">Workflow</span>
              <span className="block text-2xl mt-4 text-gray-300 font-normal">Business CRM System in Calicut</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              No more wasted hours on manual data entry. Lumeo’s CRM system does all the heavy lifting – the business CRM system in Calicut for teams who want to move faster.
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 mt-4 transition-all duration-1000 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link href="/contact" className="bg-gradient-to-r from-[#FF5A2A] to-[#FF7A45] text-white px-8 py-3.5 rounded-lg font-bold transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,90,42,0.3)] flex items-center justify-center gap-2">
              Book a Demo <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Right Diagram (Steps 3, 4, 5) */}
        <div className="w-full lg:w-7/12 relative h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px] flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] scale-[0.45] sm:scale-[0.65] md:scale-[0.8] lg:scale-100 lg:scale-x-100 xl:scale-[1.1] origin-center">

            {/* SVG Lines - Step 4 */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: step >= 4 ? 1 : 0, transition: 'opacity 0.5s ease' }}>
              <g stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2" fill="none">
                {/* Left to Center paths */}
                <path d="M 120 100 C 250 100, 200 200, 350 200" className={step >= 4 ? "animate-draw-line" : ""} />
                <path d="M 120 200 L 350 200" className={step >= 4 ? "animate-draw-line" : ""} style={{ animationDelay: '0.2s' }} />
                <path d="M 120 300 C 250 300, 200 200, 350 200" className={step >= 4 ? "animate-draw-line" : ""} style={{ animationDelay: '0.4s' }} />

                {/* Center to Right paths */}
                <path d="M 350 200 C 500 200, 500 80, 600 80" className={step >= 4 ? "animate-draw-line" : ""} style={{ animationDelay: '0.6s' }} />
                <path d="M 350 200 L 600 200" className={step >= 4 ? "animate-draw-line" : ""} style={{ animationDelay: '0.8s' }} />
                <path d="M 350 200 C 500 200, 500 320, 600 320" className={step >= 4 ? "animate-draw-line" : ""} style={{ animationDelay: '1s' }} />
              </g>

              {/* Animated Flow Dots */}
              {step >= 4 && (
                <g stroke="#008DD5" strokeWidth="2" strokeDasharray="4 12" fill="none" className="animate-data-flow">
                  <path d="M 120 100 C 250 100, 200 200, 350 200" />
                  <path d="M 120 200 L 350 200" />
                  <path d="M 120 300 C 250 300, 200 200, 350 200" />
                </g>
              )}
              {step >= 4 && (
                <g stroke="#22C55E" strokeWidth="2" strokeDasharray="4 12" fill="none" className="animate-data-flow" style={{ animationDelay: '0.5s' }}>
                  <path d="M 350 200 C 500 200, 500 80, 600 80" />
                  <path d="M 350 200 L 600 200" />
                  <path d="M 350 200 C 500 200, 500 320, 600 320" />
                </g>
              )}
            </svg>

            {/* Left Nodes (Step 3) */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-6 z-10 w-40">
              <NodeCard icon={<Clock className="text-[#008DD5]" size={20} />} title="Timesheets" delay={0} isVisible={step >= 3} color="border-[#008DD5]/30 bg-[#008DD5]/5" />
              <NodeCard icon={<Users className="text-[#008DD5]" size={20} />} title="CRM" delay={0.1} isVisible={step >= 3} color="border-[#008DD5]/30 bg-[#008DD5]/5" />
              <NodeCard icon={<Folder className="text-[#6B4CE6]" size={20} />} title="Projects" delay={0.2} isVisible={step >= 3} color="border-[#6B4CE6]/30 bg-[#6B4CE6]/5" />
            </div>

            {/* Center Orb (Step 4) */}
            <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-1000 ${step >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
              <div className="relative w-28 h-28 rounded-full bg-gradient-to-tr from-[#1A1513] to-[#2a221f] border-2 border-brand-orange shadow-[0_0_40px_rgba(255,90,42,0.4)] flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-[#008DD5]/50 animate-ping opacity-20"></div>
                <div className="text-white font-serif font-bold text-xl flex items-center gap-1">
                  <span className="text-brand-orange text-2xl leading-none">*</span> Lumeo
                </div>
              </div>
            </div>

            {/* Right Nodes (Step 5) */}
            <div className="absolute right-0 top-0 h-full flex flex-col justify-between z-10 w-48">
              <ResultCard icon={<FileText className="text-[#22C55E]" size={18} />} title="Invoices" value="$24,830" delay={0} isVisible={step >= 5} color="border-[#22C55E]/30 bg-[#22C55E]/5" />
              <ResultCard icon={<LayoutDashboard className="text-[#22C55E]" size={18} />} title="Dashboard" hasChart={true} delay={0.2} isVisible={step >= 5} color="border-[#22C55E]/30 bg-[#22C55E]/5" />
              <ResultCard icon={<DollarSign className="text-[#22C55E]" size={18} />} title="Revenue" value="$125,680" delay={0.4} isVisible={step >= 5} color="border-[#22C55E]/30 bg-[#22C55E]/5" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar (Step 6) */}
      <div className={`w-full max-w-5xl bg-[#1c1815] border border-[#332b26] rounded-2xl p-4 sm:p-6 grid grid-cols-2 lg:grid-cols-4 gap-6 shadow-2xl relative z-10 transition-all duration-1000 ${step >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <StatItem icon={<Clock className="text-[#22C55E]" />} title="Save 15+ Hours" subtitle="Every Week" />
        <StatItem icon={<CheckCircle2 className="text-[#008DD5]" />} title="100% Accurate" subtitle="Data Sync" />
        <StatItem icon={<Zap className="text-brand-orange" />} title="Real-time" subtitle="Insights" />
        <StatItem icon={<Rocket className="text-[#6B4CE6]" />} title="Scale" subtitle="Without Chaos" />
      </div>

    </div>
  );
};

const NodeCard = ({ icon, title, delay, isVisible, color }) => (
  <div
    className={`flex items-center gap-3 p-3 rounded-xl border ${color} transition-all duration-500`}
    style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(-20px)', transitionDelay: `${delay}s` }}
  >
    <div className="w-8 h-8 rounded-lg bg-black/40 flex items-center justify-center border border-white/5 shadow-inner">
      {icon}
    </div>
    <span className="text-gray-200 font-medium text-sm">{title}</span>
  </div>
);

const ResultCard = ({ icon, title, value, hasChart, delay, isVisible, color }) => (
  <div
    className={`flex flex-col p-4 rounded-xl border ${color} transition-all duration-500 relative overflow-hidden`}
    style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(20px)', transitionDelay: `${delay}s` }}
  >
    <div className="absolute top-0 right-0 w-16 h-16 bg-[#22C55E]/10 blur-xl rounded-full"></div>
    <div className="flex items-center gap-2 mb-2 relative z-10">
      <div className="w-6 h-6 rounded bg-black/40 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-gray-300 font-medium text-xs">{title}</span>
    </div>
    {value && <div className="text-xl font-bold text-white relative z-10">{value}</div>}
    {hasChart && (
      <div className="flex items-end gap-1 h-6 mt-1 relative z-10 opacity-70">
        {[40, 70, 45, 90, 60, 85].map((h, i) => (
          <div key={i} className="w-1.5 bg-[#22C55E] rounded-t-sm" style={{ height: `${h}%` }}></div>
        ))}
      </div>
    )}
  </div>
);

const StatItem = ({ icon, title, subtitle }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-black/30 border border-white/5 flex items-center justify-center shrink-0 shadow-inner">
      {icon}
    </div>
    <div>
      <h4 className="text-white font-bold text-sm leading-tight">{title}</h4>
      <p className="text-gray-400 text-xs mt-0.5">{subtitle}</p>
    </div>
  </div>
);

export default AnimatedWorkflowDiagram;
